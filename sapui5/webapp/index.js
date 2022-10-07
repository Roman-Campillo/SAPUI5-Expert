sap.ui.define([
    "sap/ui/core/mvc/XMLView"
],
    function (XMLView) {
        XMLView.create({
            viewName: "logaligroup.sapui5.view.Main"
        }).then(function (oView) {
            oView.placeAt("content");
        });
    });