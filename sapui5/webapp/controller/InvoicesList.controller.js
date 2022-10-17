sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoicesFormatter'
], function (Controller, JSONModel, InvoicesFormatter) {
    'use strict';

    return Controller.extend("logaligroup.sapui5.controller.InvoicesList", {

        formatter: InvoicesFormatter,
        
        onInit: function () {

            let oViewModel = new JSONModel({
                usd: "USD",
                eur: "EUR"
            });

            this.getView().setModel(oViewModel, "currency");

        }
    });
});