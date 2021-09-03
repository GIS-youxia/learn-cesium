define(["./when-ad3237a0","./Cartesian2-08065eec","./ArcType-98ec98bf","./arrayRemoveDuplicates-707c233c","./Transforms-1142ce48","./Color-5f48ac7a","./ComponentDatatype-a867ddaa","./Check-be2d5acb","./GeometryAttribute-da891979","./GeometryAttributes-27dc652d","./IndexDatatype-9504f550","./Math-5ca9b250","./PolylinePipeline-05927ee2","./VertexFormat-fc4fc84a","./combine-1510933d","./RuntimeError-767bd866","./WebGLConstants-1c8239cc","./EllipsoidGeodesic-dc284f08","./EllipsoidRhumbLine-4a6ed5de","./IntersectionTests-75083888","./Plane-bb88dd7e"],function(J,j,K,Q,X,Z,$,e,ee,te,re,ae,oe,y,t,r,a,o,n,i,l){"use strict";var ne=[];function m(e){var t=(e=J.defaultValue(e,J.defaultValue.EMPTY_OBJECT)).positions,r=e.colors,a=J.defaultValue(e.width,1),o=J.defaultValue(e.colorsPerVertex,!1);this._positions=t,this._colors=r,this._width=a,this._colorsPerVertex=o,this._vertexFormat=y.VertexFormat.clone(J.defaultValue(e.vertexFormat,y.VertexFormat.DEFAULT)),this._arcType=J.defaultValue(e.arcType,K.ArcType.GEODESIC),this._granularity=J.defaultValue(e.granularity,ae.CesiumMath.RADIANS_PER_DEGREE),this._ellipsoid=j.Ellipsoid.clone(J.defaultValue(e.ellipsoid,j.Ellipsoid.WGS84)),this._workerName="createPolylineGeometry";t=1+t.length*j.Cartesian3.packedLength;t+=J.defined(r)?1+r.length*Z.Color.packedLength:1,this.packedLength=t+j.Ellipsoid.packedLength+y.VertexFormat.packedLength+4}m.pack=function(e,t,r){var a;r=J.defaultValue(r,0);var o=e._positions,n=o.length;for(t[r++]=n,a=0;a<n;++a,r+=j.Cartesian3.packedLength)j.Cartesian3.pack(o[a],t,r);var i=e._colors,n=J.defined(i)?i.length:0;for(t[r++]=n,a=0;a<n;++a,r+=Z.Color.packedLength)Z.Color.pack(i[a],t,r);return j.Ellipsoid.pack(e._ellipsoid,t,r),r+=j.Ellipsoid.packedLength,y.VertexFormat.pack(e._vertexFormat,t,r),r+=y.VertexFormat.packedLength,t[r++]=e._width,t[r++]=e._colorsPerVertex?1:0,t[r++]=e._arcType,t[r]=e._granularity,t};var h=j.Ellipsoid.clone(j.Ellipsoid.UNIT_SPHERE),f=new y.VertexFormat,C={positions:void 0,colors:void 0,ellipsoid:h,vertexFormat:f,width:void 0,colorsPerVertex:void 0,arcType:void 0,granularity:void 0};m.unpack=function(e,t,r){t=J.defaultValue(t,0);for(var a=e[t++],o=new Array(a),n=0;n<a;++n,t+=j.Cartesian3.packedLength)o[n]=j.Cartesian3.unpack(e,t);var i=0<(a=e[t++])?new Array(a):void 0;for(n=0;n<a;++n,t+=Z.Color.packedLength)i[n]=Z.Color.unpack(e,t);var l=j.Ellipsoid.unpack(e,t,h);t+=j.Ellipsoid.packedLength;var s=y.VertexFormat.unpack(e,t,f);t+=y.VertexFormat.packedLength;var p=e[t++],c=1===e[t++],d=e[t++],u=e[t];return J.defined(r)?(r._positions=o,r._colors=i,r._ellipsoid=j.Ellipsoid.clone(l,r._ellipsoid),r._vertexFormat=y.VertexFormat.clone(s,r._vertexFormat),r._width=p,r._colorsPerVertex=c,r._arcType=d,r._granularity=u,r):(C.positions=o,C.colors=i,C.width=p,C.colorsPerVertex=c,C.arcType=d,C.granularity=u,new m(C))};var ie=new j.Cartesian3,le=new j.Cartesian3,se=new j.Cartesian3,pe=new j.Cartesian3;return m.createGeometry=function(e){var r,a,t=e._width,o=e._vertexFormat,n=e._colors,i=e._colorsPerVertex,l=e._arcType,s=e._granularity,p=e._ellipsoid,c=[],d=Q.arrayRemoveDuplicates(e._positions,j.Cartesian3.equalsEpsilon,!1,c);if(J.defined(n)&&0<c.length&&(a=c[r=0],n=n.filter(function(e,t){return(i?t!==a&&(0!==t||1!==a):t+1!==a)||(a=c[++r],!1)})),!((T=d.length)<2||t<=0)){if(l===K.ArcType.GEODESIC||l===K.ArcType.RHUMB){var u,y=l===K.ArcType.GEODESIC?(u=ae.CesiumMath.chordLength(s,p.maximumRadius),oe.PolylinePipeline.numberOfPoints):(u=s,oe.PolylinePipeline.numberOfPointsRhumbLine),m=oe.PolylinePipeline.extractHeights(d,p);if(J.defined(n)){for(var h=1,f=0;f<T-1;++f)h+=y(d[f],d[f+1],u);var C=new Array(h),v=0;for(f=0;f<T-1;++f){var g=d[f],_=d[f+1],A=n[f],E=y(g,_,u);if(i&&f<h)for(var P=function(e,t,r){var a=ne;a.length=r;var o=e.red,n=e.green,i=e.blue,l=e.alpha,s=t.red,p=t.green,c=t.blue,d=t.alpha;if(Z.Color.equals(e,t)){for(f=0;f<r;f++)a[f]=Z.Color.clone(e);return a}for(var u=(s-o)/r,y=(p-n)/r,m=(c-i)/r,h=(d-l)/r,f=0;f<r;f++)a[f]=new Z.Color(o+f*u,n+f*y,i+f*m,l+f*h);return a}(A,n[f+1],E),b=P.length,w=0;w<b;++w)C[v++]=P[w];else for(w=0;w<E;++w)C[v++]=Z.Color.clone(A)}C[v]=Z.Color.clone(n[n.length-1]),n=C,ne.length=0}d=l===K.ArcType.GEODESIC?oe.PolylinePipeline.generateCartesianArc({positions:d,minDistance:u,ellipsoid:p,height:m}):oe.PolylinePipeline.generateCartesianRhumbArc({positions:d,granularity:u,ellipsoid:p,height:m})}var T,x,k,D,p=4*(T=d.length)-4,V=new Float64Array(3*p),L=new Float64Array(3*p),F=new Float64Array(3*p),G=new Float32Array(2*p),O=o.st?new Float32Array(2*p):void 0,R=J.defined(n)?new Uint8Array(4*p):void 0,I=0,S=0,B=0,U=0;for(w=0;w<T;++w){0===w?(j.Cartesian3.subtract(d[0],d[1],x=ie),j.Cartesian3.add(d[0],x,x)):x=d[w-1],j.Cartesian3.clone(x,se),j.Cartesian3.clone(d[w],le),w===T-1?(j.Cartesian3.subtract(d[T-1],d[T-2],x=ie),j.Cartesian3.add(d[T-1],x,x)):x=d[w+1],j.Cartesian3.clone(x,pe),J.defined(R)&&(k=0===w||i?n[w]:n[w-1],w!==T-1&&(D=n[w]));for(var N=w===T-1?2:4,M=0===w?2:0;M<N;++M){j.Cartesian3.pack(le,V,I),j.Cartesian3.pack(se,L,I),j.Cartesian3.pack(pe,F,I),I+=3;var H=M-2<0?-1:1;G[S++]=M%2*2-1,G[S++]=H*t,o.st&&(O[B++]=w/(T-1),O[B++]=Math.max(G[S-2],0)),J.defined(R)&&(R[U++]=Z.Color.floatToByte((H=M<2?k:D).red),R[U++]=Z.Color.floatToByte(H.green),R[U++]=Z.Color.floatToByte(H.blue),R[U++]=Z.Color.floatToByte(H.alpha))}}m=new te.GeometryAttributes;m.position=new ee.GeometryAttribute({componentDatatype:$.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:V}),m.prevPosition=new ee.GeometryAttribute({componentDatatype:$.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:L}),m.nextPosition=new ee.GeometryAttribute({componentDatatype:$.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:F}),m.expandAndWidth=new ee.GeometryAttribute({componentDatatype:$.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:G}),o.st&&(m.st=new ee.GeometryAttribute({componentDatatype:$.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:O})),J.defined(R)&&(m.color=new ee.GeometryAttribute({componentDatatype:$.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:4,values:R,normalize:!0}));var W=re.IndexDatatype.createTypedArray(p,6*T-6),Y=0,q=0,z=T-1;for(w=0;w<z;++w)W[q++]=Y,W[q++]=Y+2,W[q++]=Y+1,W[q++]=Y+1,W[q++]=Y+2,W[q++]=Y+3,Y+=4;return new ee.Geometry({attributes:m,indices:W,primitiveType:ee.PrimitiveType.TRIANGLES,boundingSphere:X.BoundingSphere.fromPoints(d),geometryType:ee.GeometryType.POLYLINES})}},function(e,t){return(e=J.defined(t)?m.unpack(e,t):e)._ellipsoid=j.Ellipsoid.clone(e._ellipsoid),m.createGeometry(e)}});
