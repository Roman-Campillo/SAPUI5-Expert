sap.ui.define([
    'sap/ui/core/UIComponent',
    'logaligroup/sapui5/model/models',
    'sap/ui/model/resource/ResourceModel'
],
    function (UIComponent, models, ResourceModel) {
        'use strict';

        return UIComponent.extend("logaligroup.sapui5.Component", {

            metadata : {
                "rootView": {
                    "viewName": "logaligroup.sapui5.view.Main",
                    "type": "XML",
                    "async": true,
                    "id": "Main"
                  }
            },

        init: function () {

                UIComponent.prototype.init.apply(this, arguments);

                this.setModel(models.createRecipient());

                let i18nModel = new ResourceModel({ bundleName: "logaligroup.sapui5.i18n.i18n" });
                this.setModel(i18nModel, "i18n")
            }
        });
    });