(this["webpackJsonplearn-cesium"]=this["webpackJsonplearn-cesium"]||[]).push([[1,29],{237:function(e,t,i){},66:function(e,t,i){"use strict";i.r(t);var r=i(85),o=i(86),a=i(87),n=i(88),s=i(11),l=i(84),c=(i(237),i(23)),d=[{position:l.b.Cartesian3.fromDegrees(-123.075,44.045,5e3),converter:l.b.Transforms.eastNorthUpToFixedFrame,comments:"Classical East North Up\nlocal Frame"},{position:l.b.Cartesian3.fromDegrees(-123.075,44.05,5500),converter:l.b.Transforms.localFrameToFixedFrameGenerator("north","west"),comments:"North West Up\nlocal Frame"},{position:l.b.Cartesian3.fromDegrees(-123.075,44.04,4500),converter:l.b.Transforms.localFrameToFixedFrameGenerator("south","up"),comments:"South Up West\nlocal Frame"},{position:l.b.Cartesian3.fromDegrees(-123.075,44.05,4500),converter:l.b.Transforms.localFrameToFixedFrameGenerator("up","east"),comments:"Up East North\nlocal Frame"},{position:l.b.Cartesian3.fromDegrees(-123.075,44.04,5500),converter:l.b.Transforms.localFrameToFixedFrameGenerator("down","east"),comments:"Down East South\nlocal Frame"}],h=function(e){Object(a.a)(i,e);var t=Object(n.a)(i);function i(){var e;Object(r.a)(this,i);for(var o=arguments.length,a=new Array(o),n=0;n<o;n++)a[n]=arguments[n];return(e=t.call.apply(t,[this].concat(a))).state={heading:0,pitch:0,roll:0},e}return Object(o.a)(i,[{key:"componentDidMount",value:function(){var e=this,t=new l.b.Viewer("stage"),i=t.camera,r=t.scene,o=t.canvas,a=r.screenSpaceCameraController;!function(e){e.setAttribute("tabindex","0"),e.addEventListener("click",(function(){return e.focus()})),e.focus()}(o);var n=new l.b.Cartesian3,s=new l.b.HeadingPitchRoll,c=new l.b.HeadingPitchRange,h=l.b.Math.toRadians(1),m=[],b=new l.b.HeadingPitchRoll;d.forEach((function(e){var i=e.position,o=e.converter,a=e.comments,n=r.primitives.add(l.b.Model.fromGltf({url:"/models/Cesium_Air.glb",modelMatrix:l.b.Transforms.headingPitchRollToFixedFrame(i,s,l.b.Ellipsoid.WGS84,o),minimumPixelSize:128}));m.push({primitive:n,converter:o,position:i});var c=l.b.Transforms.headingPitchRollToFixedFrame(i,b,l.b.Ellipsoid.WGS84,o);r.primitives.add(new l.b.DebugModelMatrixPrimitive({modelMatrix:c,length:300,width:10}));var d=i.clone();d.z=i.z+300,t.entities.add({position:d,label:{text:a,font:"18px Helvetica",fillColor:l.b.Color.WHITE,outlineColor:l.b.Color.BLACK,outlineWidth:2,style:l.b.LabelStyle.FILL_AND_OUTLINE,verticalOrigin:l.b.VerticalOrigin.CENTER,HorizontalOrigin:l.b.HorizontalOrigin.RIGHT}})})),m[0].primitive.readyPromise.then((function(e){e.activeAnimations.addAll({multiplier:.5,loop:l.b.ModelAnimationLoop.REPEAT});var t=2*Math.max(e.boundingSphere.radius,i.frustum.near);a.minimumZoomDistance=.5*t,l.b.Matrix4.multiplyByPoint(e.modelMatrix,e.boundingSphere.center,n);var r=l.b.Math.toRadians(90),o=l.b.Math.toRadians(0);c.heading=r,c.pitch=o,c.range=100*t,i.lookAt(n,c)})),document.addEventListener("keydown",(function(e){switch(e.key){case"ArrowDown":s.pitch-=h,s.pitch<-l.b.Math.TWO_PI&&(s.pitch+=l.b.Math.TWO_PI);break;case"ArrowUp":s.pitch+=h,s.pitch>l.b.Math.TWO_PI&&(s.pitch-=l.b.Math.TWO_PI);break;case"ArrowRight":e.shiftKey?(s.roll+=h,s.roll>l.b.Math.TWO_PI&&(s.roll-=l.b.Math.TWO_PI)):(s.heading+=h,s.heading>l.b.Math.TWO_PI&&(s.heading-=l.b.Math.TWO_PI));break;case"ArrowLeft":e.shiftKey?(s.roll-=h,s.roll<0&&(s.roll+=l.b.Math.TWO_PI)):(s.heading-=h,s.heading<0&&(s.heading+=l.b.Math.TWO_PI))}})),t.scene.preUpdate.addEventListener((function(){m.forEach((function(e){var t=e.primitive,i=e.converter,r=e.position;l.b.Transforms.headingPitchRollToFixedFrame(r,s,l.b.Ellipsoid.WGS84,i,t.modelMatrix)}))})),t.scene.preRender.addEventListener((function(){e.setState({heading:l.b.Math.toDegrees(s.heading),pitch:l.b.Math.toDegrees(s.pitch),roll:l.b.Math.toDegrees(s.roll)})}))}},{key:"render",value:function(){var e=this.state,t=e.heading,i=e.pitch,r=e.roll;return Object(c.jsxs)("div",{id:"LocalToFixedFrame",children:[Object(c.jsxs)("div",{className:"toolbar",children:[Object(c.jsxs)("p",{children:["Heading: ",t.toFixed(1)]}),Object(c.jsx)("p",{children:"\u2190 to left/\u2192 to right"}),Object(c.jsxs)("p",{children:["Pitch: ",i.toFixed(1)]}),Object(c.jsx)("p",{children:"\u2191 to up/\u2193 to down"}),Object(c.jsxs)("p",{children:["Roll: ",r.toFixed(1)]}),Object(c.jsx)("p",{children:"\u2190 + \u21e7 left/\u2192 + \u21e7 right"})]}),Object(c.jsx)("div",{id:"stage"})]})}}]),i}(s.Component);t.default=h}}]);