var svgNS="http://www.w3.org/2000/svg",svgClassName="cesium-svgPath-svg",SvgPathBindingHandler={register:function(t){t.bindingHandlers.cesiumSvgPath={init:function(e,s){var n=document.createElementNS(svgNS,"svg:svg");n.setAttribute("class",svgClassName);var a=document.createElementNS(svgNS,"path");return n.appendChild(a),t.virtualElements.setDomNodeChildren(e,[n]),t.computed({read:function(){var e=t.unwrap(s());a.setAttribute("d",t.unwrap(e.path));var i=t.unwrap(e.width),r=t.unwrap(e.height);n.setAttribute("width",i),n.setAttribute("height",r),n.setAttribute("viewBox","0 0 "+i+" "+r),e.css&&n.setAttribute("class",svgClassName+" "+t.unwrap(e.css))},disposeWhenNodeIsRemoved:e}),{controlsDescendantBindings:!0}}},t.virtualElements.allowedBindings.cesiumSvgPath=!0}};export default SvgPathBindingHandler;