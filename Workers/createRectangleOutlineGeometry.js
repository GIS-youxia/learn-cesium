define(["./when-4bbc8319","./Matrix2-ccd5b911","./GeometryOffsetAttribute-1772960d","./Transforms-d5c6ad6e","./ComponentDatatype-93750d1a","./RuntimeError-346a3079","./GeometryAttribute-c30799b8","./GeometryAttributes-7827a6c2","./IndexDatatype-b7d979a6","./PolygonPipeline-83fb62b0","./RectangleGeometryLibrary-48d34d36","./combine-83860057","./WebGLConstants-1c8239cc","./EllipsoidRhumbLine-aa9e6266"],(function(e,t,i,a,r,n,o,l,u,s,c,p,d,g){"use strict";var f=new a.BoundingSphere,h=new a.BoundingSphere,y=new t.Cartesian3,m=new t.Rectangle;function b(e,t){var i=e._ellipsoid,a=t.height,n=t.width,s=t.northCap,p=a,d=2,g=0;e=4;s&&(--d,--p,g+=1,e-=2),(v=t.southCap)&&(--d,--p,g+=1,e-=2),g+=d*n+2*p-e;var f,h=new Float64Array(3*g),m=0,b=0,_=y;if(s)c.RectangleGeometryLibrary.computePosition(t,i,!1,b,0,_),h[m++]=_.x,h[m++]=_.y,h[m++]=_.z;else for(f=0;f<n;f++)c.RectangleGeometryLibrary.computePosition(t,i,!1,b,f,_),h[m++]=_.x,h[m++]=_.y,h[m++]=_.z;for(f=n-1,b=1;b<a;b++)c.RectangleGeometryLibrary.computePosition(t,i,!1,b,f,_),h[m++]=_.x,h[m++]=_.y,h[m++]=_.z;if(b=a-1,!v)for(f=n-2;0<=f;f--)c.RectangleGeometryLibrary.computePosition(t,i,!1,b,f,_),h[m++]=_.x,h[m++]=_.y,h[m++]=_.z;for(f=0,b=a-2;0<b;b--)c.RectangleGeometryLibrary.computePosition(t,i,!1,b,f,_),h[m++]=_.x,h[m++]=_.y,h[m++]=_.z;for(var v=h.length/3*2,E=u.IndexDatatype.createTypedArray(h.length/3,v),A=0,G=0;G<h.length/3-1;G++)E[A++]=G,E[A++]=G+1;return E[A++]=h.length/3-1,E[A++]=0,(v=new o.Geometry({attributes:new l.GeometryAttributes,primitiveType:o.PrimitiveType.LINES})).attributes.position=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:h}),v.indices=E,v}function _(i){var a=(i=e.defaultValue(i,e.defaultValue.EMPTY_OBJECT)).rectangle,n=e.defaultValue(i.granularity,r.CesiumMath.RADIANS_PER_DEGREE),o=e.defaultValue(i.ellipsoid,t.Ellipsoid.WGS84),l=e.defaultValue(i.rotation,0),u=e.defaultValue(i.height,0),s=e.defaultValue(i.extrudedHeight,u);this._rectangle=t.Rectangle.clone(a),this._granularity=n,this._ellipsoid=o,this._surfaceHeight=Math.max(u,s),this._rotation=l,this._extrudedHeight=Math.min(u,s),this._offsetAttribute=i.offsetAttribute,this._workerName="createRectangleOutlineGeometry"}_.packedLength=t.Rectangle.packedLength+t.Ellipsoid.packedLength+5,_.pack=function(i,a,r){return r=e.defaultValue(r,0),t.Rectangle.pack(i._rectangle,a,r),r+=t.Rectangle.packedLength,t.Ellipsoid.pack(i._ellipsoid,a,r),r+=t.Ellipsoid.packedLength,a[r++]=i._granularity,a[r++]=i._surfaceHeight,a[r++]=i._rotation,a[r++]=i._extrudedHeight,a[r]=e.defaultValue(i._offsetAttribute,-1),a};var v=new t.Rectangle,E=t.Ellipsoid.clone(t.Ellipsoid.UNIT_SPHERE),A={rectangle:v,ellipsoid:E,granularity:void 0,height:void 0,rotation:void 0,extrudedHeight:void 0,offsetAttribute:void 0};_.unpack=function(i,a,r){a=e.defaultValue(a,0);var n=t.Rectangle.unpack(i,a,v);a+=t.Rectangle.packedLength;var o=t.Ellipsoid.unpack(i,a,E);a+=t.Ellipsoid.packedLength;var l=i[a++],u=i[a++],s=i[a++],c=i[a++];a=i[a];return e.defined(r)?(r._rectangle=t.Rectangle.clone(n,r._rectangle),r._ellipsoid=t.Ellipsoid.clone(o,r._ellipsoid),r._surfaceHeight=u,r._rotation=s,r._extrudedHeight=c,r._offsetAttribute=-1===a?void 0:a,r):(A.granularity=l,A.height=u,A.rotation=s,A.extrudedHeight=c,A.offsetAttribute=-1===a?void 0:a,new _(A))};var G=new t.Cartographic;return _.createGeometry=function(t){var n=t._rectangle,l=t._ellipsoid,p=c.RectangleGeometryLibrary.computeOptions(n,t._granularity,t._rotation,0,m,G);if(!r.CesiumMath.equalsEpsilon(n.north,n.south,r.CesiumMath.EPSILON10)&&!r.CesiumMath.equalsEpsilon(n.east,n.west,r.CesiumMath.EPSILON10)){var d,g,y,_,v=t._surfaceHeight,E=t._extrudedHeight;return v=r.CesiumMath.equalsEpsilon(v,E,0,r.CesiumMath.EPSILON2)?((g=b(t,p)).attributes.position.values=s.PolygonPipeline.scaleToGeodeticHeight(g.attributes.position.values,v,l,!1),e.defined(t._offsetAttribute)&&(p=g.attributes.position.values.length,p=new Uint8Array(p/3),_=t._offsetAttribute===i.GeometryOffsetAttribute.NONE?0:1,i.arrayFill(p,_),g.attributes.applyOffset=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:p})),a.BoundingSphere.fromRectangle3D(n,l,v)):(g=function(e,t){var i=e._surfaceHeight,a=e._extrudedHeight,r=e._ellipsoid,n=a,o=i,l=b(e,t),c=(a=t.height,i=t.width,(e=s.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,o,r,!1)).length);(o=new Float64Array(2*c)).set(e),n=s.PolygonPipeline.scaleToGeodeticHeight(l.attributes.position.values,n,r),o.set(n,c),l.attributes.position.values=o,r=t.northCap,n=t.southCap,t=4,r&&--t,n&&--t;t=2*(o.length/3+t);for(var p=u.IndexDatatype.createTypedArray(o.length/3,t),d=(c=o.length/6,0),g=0;g<c-1;g++)p[d++]=g,p[d++]=g+1,p[d++]=g+c,p[d++]=g+c+1;return p[d++]=c-1,p[d++]=0,p[d++]=c+c-1,p[d++]=c,p[d++]=0,p[d++]=c,a=r?a-1:(p[d++]=r=i-1,p[d++]=r+c,i+a-2),p[d++]=a,p[d++]=a+c,n||(p[d++]=a=i+a-1,p[d]=a+c),l.indices=p,l}(t,p),e.defined(t._offsetAttribute)&&(d=g.attributes.position.values.length/3,y=new Uint8Array(d),y=t._offsetAttribute===i.GeometryOffsetAttribute.TOP?i.arrayFill(y,1,0,d/2):(_=t._offsetAttribute===i.GeometryOffsetAttribute.NONE?0:1,i.arrayFill(y,_)),g.attributes.applyOffset=new o.GeometryAttribute({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:y})),y=a.BoundingSphere.fromRectangle3D(n,l,v,h),E=a.BoundingSphere.fromRectangle3D(n,l,E,f),a.BoundingSphere.union(y,E)),new o.Geometry({attributes:g.attributes,indices:g.indices,primitiveType:o.PrimitiveType.LINES,boundingSphere:v,offsetAttribute:t._offsetAttribute})}},function(i,a){return(i=e.defined(a)?_.unpack(i,a):i)._ellipsoid=t.Ellipsoid.clone(i._ellipsoid),i._rectangle=t.Rectangle.clone(i._rectangle),_.createGeometry(i)}}));