sap.ui.define([
    "sap/ui/core/util/MockServer",
    "sap/ui/model/json/JSONModel",
    "sap/base/util/UriParameters",
    "sap/base/Log"
], function(MockServer, JSONModel, UriParameters, Log) {
    'use strict';
    var oMockServer,
        _sAppPath = "logaligroup/sapui5/",
        _sJsonFilesPath = _sAppPath + "localService/mockData";

    var oMockServerInterface = {
        init : function(oOptionsParameter){
            var oOptions = oOptionsParameter || {};
            return new Promise( function(fnResolve,fnReject){
                var sManifestUrl = sap.ui.require.toUrl(_sAppPath+"manifest.json");
                var oManifestModel = new JSONModel(sManifestUrl);
                oManifestModel.attachRequestCompleted(function(){
                    var oUriParameters = new UriParameters(window.location.href);
                    var sJsonFilesUrl = sap.ui.require.toUrl(_sJsonFilesPath);
                    var oMainDataSource = oManifestModel.getProperty("/sap.app/dataSources/mainService");
                    var sMetadataUrl = sap.ui.require.toUrl(_sAppPath+oMainDataSource.settings.localUri);
                    var sMockServerUrl = oMainDataSource.uri && new URI(oMainDataSource.uri).absoluteTo(sap.ui.require.toUrl(_sAppPath)).toString();

                    if(!oMockServer){
                        oMockServer = new MockServer({
                            rootUri:sMockServerUrl
                        });

                    }else{
                        oMockServer.stop();
                    }
                    MockServer.config({
                        autoRespond : true,
                        autoRespondAfter : (oOptions.delay || oUriParameters.get("serverDelay")||500) 
                    })

                    oMockServer.simulate(sMetadataUrl,{
                        sMockdataBaseUrl : sJsonFilesUrl,
                        bGenerateMissingMockData : true
                    })
                    var aRequests = oMockServer.getRequests();

                    var fnResponse = function(iErrCode,sMessage,aRequests){
                        aRequests.response = function(oXhr){
                            oXhr.respond(iErrCode,{"Content-type":"text/plain;charset=utf-8"}, sMessage)
                        }
                     }
                    // Error Metadata
                    if(oOptions.metadataError || oUriParameters.get("metadataError")){
                        aRequests.forEach(function(aEntry){
                            if(aEntry.path.toString().indexOf("$metadata") > -1){
                                fnResponse(500, "metadata Error",aEntry );
                            }
                        })
 
                    }
                    // Error request 
                    var sErrorParam = oOptions.errorType || oUriParameters.get("errorType");
                    var iErrorCode = sErrorParam === "badRequest" ? 400 : 500;
                    if(sErrorParam){
                        aRequests.forEach(function(aEntry){
                            fnResponse(iErrorCode, sErrorParam ,aEntry );
                        })
                    }

                    oMockServer.setRequests(aRequests);
                    oMockServer.start();

                    Log.info("Running the app with mock data")
                    fnResolve();
                })

                oManifestModel.attachRequestFailed(function(){
                    Log.error("Failed to load manifest")
                    fnReject();
                })
            })
        }
    }
    return oMockServerInterface;
});