sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoicesFormatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'

], function (Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator) {
    'use strict';

    return Controller.extend("logaligroup.sapui5.controller.InvoicesList", {

        formatter: InvoicesFormatter,
        
        onInit: function () {

            let oViewModel = new JSONModel({
                usd: "USD",
                eur: "EUR"
            });

            this.getView().setModel(oViewModel, "currency");

        },

        onFilterInvoices : function (oEvent) {

            const aFilter = [];
            const sQuery = oEvent.getParameter("query");

            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            };
            
            const oList = this.getView().byId("invoiceList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        }
    });
});