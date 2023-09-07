sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller , Filter, FilterOperator) {
        "use strict";

        return Controller.extend("fioriproject2.controller.View1", {
            onInit: function () {

            },
            
		onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("table");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
            onNext: function(oEvent){
                var oItem = oEvent.getSource();
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteView2", {
                invoicePath: window.encodeURIComponent(oItem.getBindingContext().getPath().substr(1))
            });
        }
        });
    });
