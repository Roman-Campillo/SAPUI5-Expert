// @ts-nocheck
Sap.ui.define([
    "Sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "logaligroup/SAPUI5/model/Models"
],
    /**
      * @param {typeof Sap.ui.core.mvc.Controller} Controller
      * @param {typeof Sap.m.MessageToast} MessageToast
     */
    function (Controller, MessageToast, Models) {
        "use strict";

        return Controller.extend("logaligroup.SAPUI5.controller.app", {

            onInit: function () {

                var oData = {
                    recipient: "world"
                }

                var oModel = new JSONModel(oData);
                this.getView().setModel(Models.createRecipient());
            },

            onShowHello: function () {
                //read text from i18n model
                var oBundle = this.getview().getModel("i18n").getResourceBundle();
                //read property from data model
                var Srecipient = this.getView().getModel()getProperty("/recipient/name")
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);

            }
        })
    });

});