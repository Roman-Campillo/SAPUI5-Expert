sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel'
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     * 
     */
    function (Controller, MessageToast, JSONModel) {
        'use strict';

        return Controller.extend("logaligroup.sapui5.controller.Main", {

            onInit: function(){
                let oData = {
                    recipient: {
                        name: "World"
                    }
                };

                const oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            },
            onShowhello: function () {

                MessageToast.show("Hello World");
            }


        });
    });