(this["webpackJsonplearn-cesium"]=this["webpackJsonplearn-cesium"]||[]).push([[23],{137:function(e,n,t){"use strict";t.r(n);var o=t(14),i=t(16),r=t(26),s=t(27),u=t(15),c=t(100),a=t(34),d=function(e){Object(r.a)(t,e);var n=Object(s.a)(t);function t(){return Object(o.a)(this,t),n.apply(this,arguments)}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=new c.b.Viewer("stage"),n=e.scene.primitives.add(new c.b.Cesium3DTileset({url:c.b.IonResource.fromAssetId(8564)}));n.readyPromise.then((function(n){e.zoomTo(n,new c.b.HeadingPitchRange(.5,-.2,4*n.boundingSphere.radius))})).otherwise((function(e){console.error(e)})),n.colorBlendMode=c.b.Cesium3DTileColorBlendMode.REPLACE}},{key:"render",value:function(){return Object(a.jsx)("div",{id:"stage"})}}]),t}(u.Component);n.default=d}}]);