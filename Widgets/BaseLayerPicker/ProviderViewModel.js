import defaultValue from"../../Core/defaultValue.js";import defined from"../../Core/defined.js";import DeveloperError from"../../Core/DeveloperError.js";import knockout from"../../ThirdParty/knockout.js";import createCommand from"../createCommand.js";function ProviderViewModel(e){if(!defined(e.name))throw new DeveloperError("options.name is required.");if(!defined(e.tooltip))throw new DeveloperError("options.tooltip is required.");if(!defined(e.iconUrl))throw new DeveloperError("options.iconUrl is required.");if("function"!==typeof e.creationFunction)throw new DeveloperError("options.creationFunction is required.");var o=e.creationFunction;defined(o.canExecute)||(o=createCommand(o)),this._creationCommand=o,this.name=e.name,this.tooltip=e.tooltip,this.iconUrl=e.iconUrl,this._category=defaultValue(e.category,""),knockout.track(this,["name","tooltip","iconUrl"])}Object.defineProperties(ProviderViewModel.prototype,{creationCommand:{get:function(){return this._creationCommand}},category:{get:function(){return this._category}}});export default ProviderViewModel;