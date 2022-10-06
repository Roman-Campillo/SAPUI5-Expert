// @ts-nocheck
Sap.ui.define([
    "Sap/ui/core/UIComponent",
    "logaligroup/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel"
],
    /**
     * @param {typeof Sap.ui.core.UIComponent} UIComponent
     * @param {typeof Sap.ui.model.resource.ResourceModel} ResourceModel
     */
    function (UIComponent, Models, ResourceModel) {

        return UIComponent.extend("logaligroup.SAPUI5.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                //call the init function of the parent
                UIComponent.prototype.init.apply(this, arguments);

                //set data model on the view
                this.setmodel(Models.createRecipient());

                //set i18n model on the view
                var i18nModel = new ResourceModel({ bundlename: "logaligroup.SAPUI5.i18n.i18n" });
                this.setmodel(i18nModel, "i18n");
            }
        });

    });