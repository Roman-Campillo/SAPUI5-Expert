sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast',
    'logaligroup/sapui5/model/models',
    'sap/ui/model/resource/ResourceModel'
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller} Controller 
     * @param {typeof sap.m.MessageToast} MessageToast
     * 
     */
    function (Controller, MessageToast, models, ResourceModel) {
        'use strict';

        return Controller.extend("logaligroup.sapui5.controller.Main", {

            onInit: function (){
                this.getView().setModel(models.createRecipient());

                let i18nModel = new ResourceModel({ bundleName : "logaligroup.sapui5.i18n.i18n"});
                this.getView().setModel(i18nModel, "i18n")
            },
            onShowhello: function () {

                var oBundle = this.getView().getModel("i18n").getResourceBundle();
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }


        });
    });