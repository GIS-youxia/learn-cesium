(this["webpackJsonplearn-cesium"]=this["webpackJsonplearn-cesium"]||[]).push([[19],{45:function(e,n,o){"use strict";o.r(n);var t=o(32),r=o(33),i=o(34),u=o(35),a=o(0),c=o(70),s=o(5),d=function(e){Object(i.a)(o,e);var n=Object(u.a)(o);function o(){return Object(t.a)(this,o),n.apply(this,arguments)}return Object(r.a)(o,[{key:"componentDidMount",value:function(){var e=new c.a.Viewer("stage"),n=e.scene.primitives.add(new c.a.Cesium3DTileset({url:c.a.IonResource.fromAssetId(8564)}));n.readyPromise.then((function(n){e.zoomTo(n,new c.a.HeadingPitchRange(.5,-.2,4*n.boundingSphere.radius))})).otherwise((function(e){console.error(e)})),n.colorBlendMode=c.a.Cesium3DTileColorBlendMode.REPLACE}},{key:"render",value:function(){return Object(s.jsx)("div",{id:"stage"})}}]),o}(a.Component);n.default=d},70:function(e,n,o){"use strict";var t=o(76);n.a=t},73:function(e,n){function o(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}o.keys=function(){return[]},o.resolve=o,e.exports=o,o.id=73},74:function(e,n){},75:function(e,n){}}]);