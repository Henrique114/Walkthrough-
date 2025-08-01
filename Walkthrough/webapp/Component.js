sap.ui.define([
   "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], (UIComponent, JSONModel, Device) => {
   "use strict";

   return UIComponent.extend("ui5.walkthrough.Component", {

     metadata : {
         interfaces: ["sap.ui.core.IAsyncContentCreation"],
         manifest: "json"
      },

      init() {
         // call the init function of the parent
         UIComponent.prototype.init.apply(this, arguments);

          // set data model
         const oData = {
            recipient : {
               name : "World"
            }
         };
         const oModel = new JSONModel(oData);
         this.setModel(oModel);

         // set device model
			const oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

        // create the views based on the url/hash
			this.getRouter().initialize();
      },
      getContentDensityClass() {
			return Device.support.touch ? "sapUiSizeCozy" : "sapUiSizeCompact";
		}
   });
});