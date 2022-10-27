sap.ui.define([
    'sap/ui/test/opaQunit',
    "./pages/HelloPanel"
], function(opaQunit) {
    'use strict';
    
    QUnit.module("Navigation");

    opaQunit("Should open the Hello Dialog", function(Given, When, Then){
        Given.iStartMyUIComponent({
            componentConfig:{
                name:"logaligroup.sapui5"
            }
        });
        When.onTheAppPage.iSayHelloDialogButton();

        Then.onTheAppPage.iSeeTheHelloDialog();

        Then.iTeardownMyApp();
    })
});