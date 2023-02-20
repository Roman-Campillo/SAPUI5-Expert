sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("logaligroup.gestionhr.controller.Main", {
            onInit: function () {

            },
            createEmployee: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("CreateEmp",{},false);
            },
 
            showEmployee: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("ShowEmp",{},false);
            },
 
            onEmployees: function() {
                window.location.assign("https://d1b8d976trial-dev-logali-approuter.cfapps.us10-001.hana.ondemand.com/employees/index.html");
            }
        });
    });
