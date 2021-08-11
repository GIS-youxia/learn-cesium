(this["webpackJsonplearn-cesium"]=this["webpackJsonplearn-cesium"]||[]).push([[0,10,11],{144:function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",(function(){return r}))},145:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}n.d(e,"a",(function(){return i}))},146:function(t,e,n){"use strict";function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){return!e||"object"!==i(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function c(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var c=r(this).constructor;n=Reflect.construct(i,arguments,c)}else n=i.apply(this,arguments);return o(this,n)}}n.d(e,"a",(function(){return c}))},147:function(t,e,n){"use strict";function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}n.d(e,"a",(function(){return i}))},148:function(t,e,n){},60:function(t,e,n){"use strict";n.r(e),n.d(e,"Czm3DTiles",(function(){return p}));var r=n(144),i=n(145),o=n(147),c=n(146),a=n(10);function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,o=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){i=!0,o=u}finally{try{r||null==a.return||a.return()}finally{if(i)throw o}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n(148);var l=n(26),f=function(t){var e=t.title,n=t.demoMap,r=s(Object(a.useState)(""),2),i=r[0],o=r[1],c=Object(a.useMemo)((function(){return n[i]}),[i,n]);return Object(l.jsxs)("div",{className:"demo-wrapper",children:[!i&&Object(l.jsxs)("header",{children:[Object(l.jsx)("h1",{children:e}),Object(l.jsx)("ul",{children:Object.keys(n).map((function(t,e){return Object(l.jsx)("li",{onClick:function(){return o(t)},children:t},e)}))})]}),i&&Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{className:"back",onClick:function(){return o("")},children:"back"}),Object(l.jsx)(c,{})]})]})},d=n(92),h=n(91),b={FromIonResource:d.default,AjustHeight:h.default},p=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(l.jsx)(f,{title:"3D Tiles",demoMap:b})}}]),n}(a.PureComponent);e.default=p},91:function(t,e,n){"use strict";n.r(e);var r=n(144),i=n(145),o=n(147),c=n(146),a=n(10),u=n(70),s=n(26),l=function(t){Object(o.a)(n,t);var e=Object(c.a)(n);function n(){var t;Object(r.a)(this,n);for(var i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={height:0},t}return Object(i.a)(n,[{key:"componentDidUpdate",value:function(){var t=this.state.height,e=u.a.Cartographic.fromCartesian(this.tileset.boundingSphere.center),n=u.a.Cartesian3.fromRadians(e.longitude,e.latitude,0),r=u.a.Cartesian3.fromRadians(e.longitude,e.latitude,t),i=u.a.Cartesian3.subtract(r,n,new u.a.Cartesian3);this.tileset.modelMatrix=u.a.Matrix4.fromTranslation(i)}},{key:"componentDidMount",value:function(){var t=new u.a.Viewer("stage",{shadows:!0});t.scene.globe.depthTestAgainstTerrain=!0,this.tileset=new u.a.Cesium3DTileset({url:"/Tileset/tileset.json"}),this.tileset.readyPromise.then((function(e){t.scene.primitives.add(e),t.zoomTo(e,new u.a.HeadingPitchRange(0,-.5,2*e.boundingSphere.radius))})).otherwise((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this,e=this.state.height;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{style:{position:"absolute",top:60,left:10,zIndex:9999,padding:10,background:"#fff",borderRadius:5},children:[Object(s.jsx)("label",{htmlFor:"height",children:"Set height of 3D tiles"}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{id:"height",type:"number",value:e,onChange:function(e){return t.setState({height:Number(e.target.value)})}})]}),Object(s.jsx)("div",{id:"stage",style:{height:"100vh"}})]})}}]),n}(a.Component);e.default=l},92:function(t,e,n){"use strict";n.r(e);var r=n(10),i=n(70),o=n(26);e.default=function(){return Object(r.useEffect)((function(){var t=new i.a.Viewer("stage",{terrainProvider:i.a.createWorldTerrain()}),e=new i.a.Cesium3DTileset({url:i.a.IonResource.fromAssetId(40866)});t.scene.primitives.add(e),t.zoomTo(e)}),[]),Object(o.jsx)("div",{id:"stage",style:{height:"100vh"}})}}}]);
//# sourceMappingURL=0.83923b4a.chunk.js.map