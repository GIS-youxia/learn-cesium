define(["./when-4bbc8319","./Matrix2-ccd5b911","./ArcType-98ec98bf","./GeometryOffsetAttribute-1772960d","./Transforms-d5c6ad6e","./RuntimeError-346a3079","./ComponentDatatype-93750d1a","./EllipsoidTangentPlane-e000bae1","./GeometryAttribute-c30799b8","./GeometryAttributes-7827a6c2","./GeometryInstance-5f4fe82b","./GeometryPipeline-548e76d2","./IndexDatatype-b7d979a6","./PolygonGeometryLibrary-d35c292d","./PolygonPipeline-83fb62b0","./combine-83860057","./WebGLConstants-1c8239cc","./AxisAlignedBoundingBox-883f9c89","./IntersectionTests-4d6f5c54","./Plane-18bb00f8","./AttributeCompression-1f045b73","./EncodedCartesian3-08b8d980","./arrayRemoveDuplicates-18786327","./EllipsoidRhumbLine-aa9e6266"],(function(e,t,i,r,o,n,a,l,s,y,u,p,d,c,g,f,m,h,b,P,E,A,_,v){"use strict";var G=[],L=[];function T(r){var o,n=r.polygonHierarchy,l=e.defaultValue(r.ellipsoid,t.Ellipsoid.WGS84),s=e.defaultValue(r.granularity,a.CesiumMath.RADIANS_PER_DEGREE),y=e.defaultValue(r.perPositionHeight,!1),u=y&&e.defined(r.extrudedHeight),p=e.defaultValue(r.arcType,i.ArcType.GEODESIC),d=e.defaultValue(r.height,0),g=e.defaultValue(r.extrudedHeight,d);u||(o=Math.max(d,g),g=Math.min(d,g),d=o),this._ellipsoid=t.Ellipsoid.clone(l),this._granularity=s,this._height=d,this._extrudedHeight=g,this._arcType=p,this._polygonHierarchy=n,this._perPositionHeight=y,this._perPositionHeightExtrude=u,this._offsetAttribute=r.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=c.PolygonGeometryLibrary.computeHierarchyPackedLength(n)+t.Ellipsoid.packedLength+8}T.pack=function(i,r,o){return o=e.defaultValue(o,0),o=c.PolygonGeometryLibrary.packPolygonHierarchy(i._polygonHierarchy,r,o),t.Ellipsoid.pack(i._ellipsoid,r,o),o+=t.Ellipsoid.packedLength,r[o++]=i._height,r[o++]=i._extrudedHeight,r[o++]=i._granularity,r[o++]=i._perPositionHeightExtrude?1:0,r[o++]=i._perPositionHeight?1:0,r[o++]=i._arcType,r[o++]=e.defaultValue(i._offsetAttribute,-1),r[o]=i.packedLength,r};var H=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),O={polygonHierarchy:{}};return T.unpack=function(i,r,o){r=e.defaultValue(r,0);var n=c.PolygonGeometryLibrary.unpackPolygonHierarchy(i,r);r=n.startingIndex,delete n.startingIndex;var a=t.Ellipsoid.unpack(i,r,H);r+=t.Ellipsoid.packedLength;var l=i[r++],s=i[r++],y=i[r++],u=1===i[r++],p=1===i[r++],d=i[r++],g=i[r++];r=i[r];return(o=e.defined(o)?o:new T(O))._polygonHierarchy=n,o._ellipsoid=t.Ellipsoid.clone(a,o._ellipsoid),o._height=l,o._extrudedHeight=s,o._granularity=y,o._perPositionHeight=p,o._perPositionHeightExtrude=u,o._arcType=d,o._offsetAttribute=-1===g?void 0:g,o.packedLength=r,o},T.fromPositions=function(t){return new T({polygonHierarchy:{positions:(t=e.defaultValue(t,e.defaultValue.EMPTY_OBJECT)).positions},height:t.height,extrudedHeight:t.extrudedHeight,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,arcType:t.arcType,offsetAttribute:t.offsetAttribute})},T.createGeometry=function(t){var n=t._ellipsoid,f=t._granularity,m=t._polygonHierarchy,h=t._perPositionHeight,b=t._arcType,P=c.PolygonGeometryLibrary.polygonOutlinesFromHierarchy(m,!h,n);if(0!==P.length){var E,A,_,v,T,H,O=[],x=a.CesiumMath.chordLength(f,n.maximumRadius),C=t._height,D=t._extrudedHeight;if(t._perPositionHeightExtrude||!a.CesiumMath.equalsEpsilon(C,D,0,a.CesiumMath.EPSILON2))for(E=0;E<P.length;E++)(v=function(e,t,r,o,n){var p,f=l.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,G);g.PolygonPipeline.computeWindingOrder2D(f)===g.WindingOrder.CLOCKWISE&&(f.reverse(),t=t.slice().reverse());var m=t.length,h=new Array(m),b=0;if(o)for(p=new Float64Array(2*m*3*2),x=0;x<m;++x){h[x]=b/3;var P=t[x],E=t[(x+1)%m];p[b++]=P.x,p[b++]=P.y,p[b++]=P.z,p[b++]=E.x,p[b++]=E.y,p[b++]=E.z}else{var A,_=0;if(n===i.ArcType.GEODESIC)for(x=0;x<m;x++)_+=c.PolygonGeometryLibrary.subdivideLineCount(t[x],t[(x+1)%m],r);else if(n===i.ArcType.RHUMB)for(x=0;x<m;x++)_+=c.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[x],t[(x+1)%m],r);for(p=new Float64Array(3*_*2),x=0;x<m;++x){h[x]=b/3,n===i.ArcType.GEODESIC?A=c.PolygonGeometryLibrary.subdivideLine(t[x],t[(x+1)%m],r,L):n===i.ArcType.RHUMB&&(A=c.PolygonGeometryLibrary.subdivideRhumbLine(e,t[x],t[(x+1)%m],r,L));for(var v=A.length,T=0;T<v;++T)p[b++]=A[T]}}m=p.length/6;for(var H=h.length,O=d.IndexDatatype.createTypedArray(m+H,2*(2*m+H)),x=(b=0,0);x<m;++x)O[b++]=x,O[b++]=(x+1)%m,O[b++]=x+m,O[b++]=(x+1)%m+m;for(x=0;x<H;x++){var C=h[x];O[b++]=C,O[b++]=C+m}return new u.GeometryInstance({geometry:new s.Geometry({attributes:new y.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})}),indices:O,primitiveType:s.PrimitiveType.LINES})})}(n,P[E],x,h,b)).geometry=c.PolygonGeometryLibrary.scaleToGeodeticHeightExtruded(v.geometry,C,D,n,h),e.defined(t._offsetAttribute)&&(A=v.geometry.attributes.position.values.length/3,_=new Uint8Array(A),_=t._offsetAttribute===r.GeometryOffsetAttribute.TOP?r.arrayFill(_,1,0,A/2):(H=t._offsetAttribute===r.GeometryOffsetAttribute.NONE?0:1,r.arrayFill(_,H)),v.geometry.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:_})),O.push(v);else for(E=0;E<P.length;E++)(v=function(e,t,r,o,n){var p,f=l.EllipsoidTangentPlane.fromPoints(t,e).projectPointsOntoPlane(t,G);g.PolygonPipeline.computeWindingOrder2D(f)===g.WindingOrder.CLOCKWISE&&(f.reverse(),t=t.slice().reverse());var m=t.length,h=0;if(o)for(p=new Float64Array(2*m*3),H=0;H<m;H++){var b=t[H],P=t[(H+1)%m];p[h++]=b.x,p[h++]=b.y,p[h++]=b.z,p[h++]=P.x,p[h++]=P.y,p[h++]=P.z}else{var E,A=0;if(n===i.ArcType.GEODESIC)for(H=0;H<m;H++)A+=c.PolygonGeometryLibrary.subdivideLineCount(t[H],t[(H+1)%m],r);else if(n===i.ArcType.RHUMB)for(H=0;H<m;H++)A+=c.PolygonGeometryLibrary.subdivideRhumbLineCount(e,t[H],t[(H+1)%m],r);for(p=new Float64Array(3*A),H=0;H<m;H++){n===i.ArcType.GEODESIC?E=c.PolygonGeometryLibrary.subdivideLine(t[H],t[(H+1)%m],r,L):n===i.ArcType.RHUMB&&(E=c.PolygonGeometryLibrary.subdivideRhumbLine(e,t[H],t[(H+1)%m],r,L));for(var _=E.length,v=0;v<_;++v)p[h++]=E[v]}}m=p.length/3;for(var T=d.IndexDatatype.createTypedArray(m,2*m),H=(h=0,0);H<m-1;H++)T[h++]=H,T[h++]=H+1;return T[h++]=m-1,T[h++]=0,new u.GeometryInstance({geometry:new s.Geometry({attributes:new y.GeometryAttributes({position:new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:p})}),indices:T,primitiveType:s.PrimitiveType.LINES})})}(n,P[E],x,h,b)).geometry.attributes.position.values=g.PolygonPipeline.scaleToGeodeticHeight(v.geometry.attributes.position.values,C,n,!h),e.defined(t._offsetAttribute)&&(T=v.geometry.attributes.position.values.length,T=new Uint8Array(T/3),H=t._offsetAttribute===r.GeometryOffsetAttribute.NONE?0:1,r.arrayFill(T,H),v.geometry.attributes.applyOffset=new s.GeometryAttribute({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:T})),O.push(v);return m=p.GeometryPipeline.combineInstances(O)[0],f=o.BoundingSphere.fromVertices(m.attributes.position.values),new s.Geometry({attributes:m.attributes,indices:m.indices,primitiveType:m.primitiveType,boundingSphere:f,offsetAttribute:t._offsetAttribute})}},function(i,r){return(i=e.defined(r)?T.unpack(i,r):i)._ellipsoid=t.Ellipsoid.clone(i._ellipsoid),T.createGeometry(i)}}));