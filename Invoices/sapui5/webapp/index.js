sap.ui.define([
    "sap/ui/core/ComponentContainer"
],
    function (ComponentContainer) {

        new ComponentContainer({
            name: "logaligroup.sapui5",
            settings: {
                id: "sapui5"
            },
            async: true
        }).placeAt("content");;

    });