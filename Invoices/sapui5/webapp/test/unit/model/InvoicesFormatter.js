sap.ui.define([
    'logaligroup/sapui5/model/InvoicesFormatter',
    'sap/ui/model/resource/ResourceModel'
], function(InvoicesFormatter, ResourceModel) {
    'use strict';
    QUnit.module("Formatting functions",{
        beforeEach : function(){
            this._oResourceModel = new ResourceModel({
                bundleUrl : sap.ui.require.toUrl("logaligroup/sapui5")+ "/i18n/i18n.properties"
            });
        },
        AfterEach : function(){
            this._oResourceModel.destroy();
        }
    })
    QUnit.test("Should return the Invoice Status", function(assert){
        let oModel = this.stub();
        oModel.withArgs("i18n").returns(this._oResourceModel);

        let oViewStub = {
            getModel : oModel
        }

        let oControllerStub = {
            getView : this.stub().returns(oViewStub)
        }

        let fnIsolatedFormatter = InvoicesFormatter.invoiceStatus.bind(oControllerStub);

        assert.strictEqual(fnIsolatedFormatter("A"), "New", "The Invoices status for A is correct");
        assert.strictEqual(fnIsolatedFormatter("B"), "In Progress", "The Invoices status for B is correct");
        assert.strictEqual(fnIsolatedFormatter("C"), "Done", "The Invoices status for C is correct");

    })
});