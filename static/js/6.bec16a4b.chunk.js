(this["webpackJsonplearn-cesium"]=this["webpackJsonplearn-cesium"]||[]).push([[6],{21:function(e,a,n){"use strict";n.r(a);var t=n(32),r=n(33),i=n(34),o=n(35),c=n(0),s=n(70),u=n(85),l=n(5),m=function(e){Object(i.a)(n,e);var a=Object(o.a)(n);function n(){return Object(t.a)(this,n),a.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=s.a.createWorldImagery();console.log(e);var a=new s.a.Viewer("stage",{imageryProvider:e}),n=a.scene,t=a.camera,r=s.a.Cartesian3.fromDegrees(-85,35,1e3);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-40,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4,n=s.a.Transforms.eastNorthUpToFixedFrame(r),i=s.a.Matrix4.inverse(n,new s.a.Matrix4),o=s.a.Matrix4.multiplyByPoint(i,r,new s.a.Cartesian3),c=-e*Math.PI/180;o.y=o.y-Math.cos(c)*a-.1*a,o.z=o.z+Math.sin(c)*a;var u=s.a.Matrix4.multiplyByPoint(n,o,new s.a.Cartesian3);t.flyTo({destination:u,orientation:{heading:s.a.Math.toRadians(0),pitch:s.a.Math.toRadians(e),roll:s.a.Math.toRadians(0)}})}n.primitives.add(new s.a.GroundPrimitive({geometryInstances:new s.a.GeometryInstance({id:"123",geometry:new s.a.RectangleGeometry({rectangle:function(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.05,t=.5*n;return s.a.Rectangle.fromDegrees(e-t,a-t,e+t,a+t)}(-85,35),vertexFormat:s.a.EllipsoidSurfaceAppearance.VERTEX_FORMAT,ellipsoid:a.scene.globe.ellipsoid})}),appearance:new s.a.EllipsoidSurfaceAppearance({material:s.a.Material.fromType("Image",{image:"".concat(u.b,"/images/number_1.png"),repeat:{x:1,y:1}})})})),i(),new s.a.ScreenSpaceEventHandler(a.canvas).setInputAction((function(e){var n=a.scene.pick(e.position);s.a.defined(n)&&"123"===n.id&&i(-20)}),s.a.ScreenSpaceEventType.LEFT_CLICK),n.screenSpaceCameraController.maximumZoomDistance=100,n.screenSpaceCameraController.maximumZoomDistance=2e3}},{key:"render",value:function(){return Object(l.jsx)("div",{id:"stage"})}}]),n}(c.Component);a.default=m},70:function(e,a,n){"use strict";var t=n(76);a.a=t},73:function(e,a){function n(e){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=73},74:function(e,a){},75:function(e,a){},85:function(e,a,n){"use strict";n.d(a,"b",(function(){return t})),n.d(a,"a",(function(){return r})),n.d(a,"c",(function(){return i}));var t=".",r=("".concat(t,"/cesiumSource"),"".concat(t,"/models")),i="".concat(t,"/3dTiles")}}]);