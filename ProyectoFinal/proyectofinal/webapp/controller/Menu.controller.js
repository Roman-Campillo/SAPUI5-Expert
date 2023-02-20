sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/library"
], function (Controller, sapMLib) {
	"use strict";
	
	function onInit(){
		
	} 
	
	function onAfterRendering(){

	}
	
	//Al pulsar sobre el tile “Crear empleado”, se debe navegar a una nueva vista donde el usuario pueda crear un nuevo empleado.
	function goToCreateEmployee(){
			//Se obtiene el conjunto de routers del programa
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//Se navega hacia el router "CreateEmployee"
			oRouter.navTo("CreateEmployee",{},false);
	}
	
	//al pulsar sobre “Ver empleados” se debe navegar a una nueva vista con el patrón “Master - Detail”.
	function goToShowEmployee(){
			//Se obtiene el conjunto de routers del programa
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			//Se navega hacia el router "ShowEmployee"
			oRouter.navTo("ShowEmployee",{},false);
	}

	//Al pulsar sobre el tile “Firmar pedido” se debe navegar a la aplicación que se ha desarrollado durante el máster
	function goToEmployees () {
		const url = "https://d1b8d976trial-dev-logali-approuter.cfapps.us10-001.hana.ondemand.com/employees/index.html";
		const { URLHelper } = sapMLib;
		URLHelper.redirect(url);
	}

	return Controller.extend("logaligroup.proyectofinal.controller.Menu", {
		onInit: onInit,
		onAfterRendering   : onAfterRendering,
		goToCreateEmployee : goToCreateEmployee,
		goToShowEmployee   : goToShowEmployee,
		goToEmployees      : goToEmployees
	});
});