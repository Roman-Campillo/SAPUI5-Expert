sap.ui.define([
    'sap/ui/core/UIComponent',
    'logaligroup/sapui5/model/models',
    'sap/ui/model/resource/ResourceModel',
    './controller/HelloDialog'
],
    function (UIComponent, models, ResourceModel, HelloDialog) {
        'use strict';

        return UIComponent.extend("logaligroup.sapui5.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                //enable routing
                //this.getRouter().initialize();

                //set the device model
                //this.setModel(models.createDeviceModel(), "device");

                //set data model on the view
                this.setModel(models.createRecipient());

                //
                this._helloDialog = new HelloDialog(this.getRootControl());

                //
                let i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n")
            },
            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },
            onOpenDialog: function () {
                this._helloDialog.open();
            }
        });
    });