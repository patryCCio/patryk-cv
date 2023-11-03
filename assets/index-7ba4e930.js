var Qc=Object.defineProperty;var eh=(r,e,t)=>e in r?Qc(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var jo=(r,e,t)=>(eh(r,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ao="150",th=0,Xo=1,nh=2,Bl=1,ih=2,Hi=3,nn=0,Dt=1,Ut=2,En=0,di=1,Gr=2,Zo=3,Yo=4,sh=5,ai=100,rh=101,oh=102,Ko=103,Jo=104,ah=200,lh=201,ch=202,hh=203,Ul=204,Gl=205,uh=206,dh=207,fh=208,ph=209,mh=210,gh=0,_h=1,vh=2,Vr=3,xh=4,yh=5,bh=6,Mh=7,Vl=0,Sh=1,wh=2,mn=0,Ah=1,Th=2,Eh=3,Ch=4,Lh=5,Hl=300,vi=301,xi=302,Hr=303,Wr=304,Us=306,$t=1e3,zt=1001,Os=1002,dt=1003,qr=1004,ks=1005,Ct=1006,Wl=1007,Bn=1008,Un=1009,Ph=1010,Rh=1011,ql=1012,Ih=1013,On=1014,An=1015,Ki=1016,Dh=1017,kh=1018,fi=1020,Nh=1021,Bt=1023,Fh=1024,Oh=1025,zn=1026,yi=1027,zh=1028,Bh=1029,Uh=1030,Gh=1031,Vh=1033,Qs=33776,er=33777,tr=33778,nr=33779,$o=35840,Qo=35841,ea=35842,ta=35843,Hh=36196,na=37492,ia=37496,sa=37808,ra=37809,oa=37810,aa=37811,la=37812,ca=37813,ha=37814,ua=37815,da=37816,fa=37817,pa=37818,ma=37819,ga=37820,_a=37821,ir=36492,Wh=36283,va=36284,xa=36285,ya=36286,qh=2200,jh=2201,Xh=2202,Ji=2300,bi=2301,sr=2302,li=2400,ci=2401,zs=2402,lo=2500,Zh=2501,Yh=0,jl=1,jr=2,Gn=3e3,We=3001,Kh=3200,Jh=3201,Xl=0,$h=1,Ot="srgb",Mi="srgb-linear",Zl="display-p3",rr=7680,Qh=519,Xr=35044,ba="300 es",Zr=1035;class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ma=1234567;const qi=Math.PI/180,$i=180/Math.PI;function Vt(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[r&255]+mt[r>>8&255]+mt[r>>16&255]+mt[r>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function ft(r,e,t){return Math.max(e,Math.min(t,r))}function co(r,e){return(r%e+e)%e}function eu(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function tu(r,e,t){return r!==e?(t-r)/(e-r):0}function ji(r,e,t){return(1-t)*r+t*e}function nu(r,e,t,n){return ji(r,e,1-Math.exp(-t*n))}function iu(r,e=1){return e-Math.abs(co(r,e*2)-e)}function su(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function ru(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function ou(r,e){return r+Math.floor(Math.random()*(e-r+1))}function au(r,e){return r+Math.random()*(e-r)}function lu(r){return r*(.5-Math.random())}function cu(r){r!==void 0&&(Ma=r);let e=Ma+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hu(r){return r*qi}function uu(r){return r*$i}function Yr(r){return(r&r-1)===0&&r!==0}function Yl(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Kl(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function du(r,e,t,n,i){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),d=o((e-n)/2),p=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*p,a*c);break;case"YXY":r.set(l*p,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const fu={DEG2RAD:qi,RAD2DEG:$i,generateUUID:Vt,clamp:ft,euclideanModulo:co,mapLinear:eu,inverseLerp:tu,lerp:ji,damp:nu,pingpong:iu,smoothstep:su,smootherstep:ru,randInt:ou,randFloat:au,randFloatSpread:lu,seededRandom:cu,degToRad:hu,radToDeg:uu,isPowerOfTwo:Yr,ceilPowerOfTwo:Yl,floorPowerOfTwo:Kl,setQuaternionFromProperEuler:du,normalize:Ze,denormalize:pn};class oe{constructor(e=0,t=0){oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],f=i[0],m=i[3],v=i[6],b=i[1],_=i[4],x=i[7],A=i[2],E=i[5],L=i[8];return s[0]=o*f+a*b+l*A,s[3]=o*m+a*_+l*E,s[6]=o*v+a*x+l*L,s[1]=c*f+h*b+u*A,s[4]=c*m+h*_+u*E,s[7]=c*v+h*x+u*L,s[2]=d*f+p*b+g*A,s[5]=d*m+p*_+g*E,s[8]=d*v+p*x+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,p=c*s-o*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const f=1/g;return e[0]=u*f,e[1]=(i*c-h*n)*f,e[2]=(a*n-i*o)*f,e[3]=d*f,e[4]=(h*t-i*l)*f,e[5]=(i*s-a*t)*f,e[6]=p*f,e[7]=(n*l-c*t)*f,e[8]=(o*t-n*s)*f,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(or.makeScale(e,t)),this}rotate(e){return this.premultiply(or.makeRotation(-e)),this}translate(e,t){return this.premultiply(or.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const or=new wt;function Jl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Qi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}class Xt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],p=s[o+1],g=s[o+2],f=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=f;return}if(u!==f||l!==d||c!==p||h!==g){let m=1-a;const v=l*d+c*p+h*g+u*f,b=v>=0?1:-1,_=1-v*v;if(_>Number.EPSILON){const A=Math.sqrt(_),E=Math.atan2(A,v*b);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const x=a*b;if(l=l*m+d*x,c=c*m+p*x,h=h*m+g*x,u=u*m+f*x,m===1-a){const A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),p=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(s-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*t+o*i-a*n,h=l*n+a*t-s*i,u=l*i+s*n-o*t,d=-s*t-o*n-a*i;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ar.copy(this).projectOnVector(e),this.sub(ar)}reflect(e){return this.sub(ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ar=new C,Sa=new Xt;function pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const pu=new wt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),mu=new wt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Tn=new C;function gu(r){return r.convertSRGBToLinear(),Tn.set(r.r,r.g,r.b).applyMatrix3(mu),r.setRGB(Tn.x,Tn.y,Tn.z)}function _u(r){return Tn.set(r.r,r.g,r.b).applyMatrix3(pu),r.setRGB(Tn.x,Tn.y,Tn.z).convertLinearToSRGB()}const vu={[Mi]:r=>r,[Ot]:r=>r.convertSRGBToLinear(),[Zl]:gu},xu={[Mi]:r=>r,[Ot]:r=>r.convertLinearToSRGB(),[Zl]:_u},yt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(r){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!r},get workingColorSpace(){return Mi},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=vu[e],i=xu[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}};let Zn;class $l{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zn===void 0&&(Zn=Qi("canvas")),Zn.width=e.width,Zn.height=e.height;const n=Zn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Qi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=pi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ql{constructor(e=null){this.isSource=!0,this.uuid=Vt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(cr(i[o].image)):s.push(cr(i[o]))}else s=cr(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function cr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?$l.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yu=0;class pt extends qn{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=zt,i=zt,s=Ct,o=Bn,a=Bt,l=Un,c=pt.DEFAULT_ANISOTROPY,h=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Vt(),this.name="",this.source=new Ql(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new oe(0,0),this.repeat=new oe(1,1),this.center=new oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $t:e.x=e.x-Math.floor(e.x);break;case zt:e.x=e.x<0?0:1;break;case Os:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $t:e.y=e.y-Math.floor(e.y);break;case zt:e.y=e.y<0?0:1;break;case Os:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=Hl;pt.DEFAULT_ANISOTROPY=1;class Xe{constructor(e=0,t=0,n=0,i=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],f=l[2],m=l[6],v=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,x=(p+1)/2,A=(v+1)/2,E=(h+d)/4,L=(u+f)/4,y=(g+m)/4;return _>x&&_>A?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=L/n):x>A?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=y/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=L/s,i=y/s),this.set(n,i,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-f)/b,this.z=(d-h)/b,this.w=Math.acos((c+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Vn extends qn{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ct,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ql(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ec extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bu extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=dt,this.minFilter=dt,this.wrapR=zt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ai{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(t,n,i),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Rn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Rn)}else n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox),hr.applyMatrix4(e.matrixWorld),this.union(hr);const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ri),ls.subVectors(this.max,Ri),Yn.subVectors(e.a,Ri),Kn.subVectors(e.b,Ri),Jn.subVectors(e.c,Ri),vn.subVectors(Kn,Yn),xn.subVectors(Jn,Kn),In.subVectors(Yn,Jn);let t=[0,-vn.z,vn.y,0,-xn.z,xn.y,0,-In.z,In.y,vn.z,0,-vn.x,xn.z,0,-xn.x,In.z,0,-In.x,-vn.y,vn.x,0,-xn.y,xn.x,0,-In.y,In.x,0];return!ur(t,Yn,Kn,Jn,ls)||(t=[1,0,0,0,1,0,0,0,1],!ur(t,Yn,Kn,Jn,ls))?!1:(cs.crossVectors(vn,xn),t=[cs.x,cs.y,cs.z],ur(t,Yn,Kn,Jn,ls))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new C,new C,new C,new C,new C,new C,new C,new C],Rn=new C,hr=new Ai,Yn=new C,Kn=new C,Jn=new C,vn=new C,xn=new C,In=new C,Ri=new C,ls=new C,cs=new C,Dn=new C;function ur(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Dn.fromArray(r,s);const a=i.x*Math.abs(Dn.x)+i.y*Math.abs(Dn.y)+i.z*Math.abs(Dn.z),l=e.dot(Dn),c=t.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Mu=new Ai,Ii=new C,dr=new C;class Ti{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Mu.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ii.subVectors(e,this.center);const t=Ii.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ii,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(dr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ii.copy(e.center).add(dr)),this.expandByPoint(Ii.copy(e.center).sub(dr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new C,fr=new C,hs=new C,yn=new C,pr=new C,us=new C,mr=new C;class Gs{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){fr.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),yn.copy(this.origin).sub(fr);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hs),a=yn.dot(this.direction),l=-yn.dot(hs),c=yn.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const f=1/h;u*=f,d*=f,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fr).addScaledVector(hs,d),p}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),i=ln.dot(ln)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,i,s){pr.subVectors(t,e),us.subVectors(n,e),mr.crossVectors(pr,us);let o=this.direction.dot(mr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;yn.subVectors(this.origin,e);const l=a*this.direction.dot(us.crossVectors(yn,us));if(l<0)return null;const c=a*this.direction.dot(pr.cross(yn));if(c<0||l+c>o)return null;const h=-a*yn.dot(mr);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,a,l,c,h,u,d,p,g,f,m){const v=this.elements;return v[0]=e,v[4]=t,v[8]=n,v[12]=i,v[1]=s,v[5]=o,v[9]=a,v[13]=l,v[2]=c,v[6]=h,v[10]=u,v[14]=d,v[3]=p,v[7]=g,v[11]=f,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$n.setFromMatrixColumn(e,0).length(),s=1/$n.setFromMatrixColumn(e,1).length(),o=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,f=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-f*c,t[9]=-a*l,t[2]=f-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,f=c*u;t[0]=d+f*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=f+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,f=c*u;t[0]=d-f*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=f-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,f=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+f,t[1]=l*u,t[5]=f*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,f=a*c;t[0]=l*h,t[4]=f-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-f*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,f=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+f,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=f*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Su,e,wu)}lookAt(e,t,n){const i=this.elements;return Rt.subVectors(e,t),Rt.lengthSq()===0&&(Rt.z=1),Rt.normalize(),bn.crossVectors(n,Rt),bn.lengthSq()===0&&(Math.abs(n.z)===1?Rt.x+=1e-4:Rt.z+=1e-4,Rt.normalize(),bn.crossVectors(n,Rt)),bn.normalize(),ds.crossVectors(Rt,bn),i[0]=bn.x,i[4]=ds.x,i[8]=Rt.x,i[1]=bn.y,i[5]=ds.y,i[9]=Rt.y,i[2]=bn.z,i[6]=ds.z,i[10]=Rt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],f=n[6],m=n[10],v=n[14],b=n[3],_=n[7],x=n[11],A=n[15],E=i[0],L=i[4],y=i[8],T=i[12],P=i[1],U=i[5],X=i[9],D=i[13],I=i[2],z=i[6],Z=i[10],J=i[14],V=i[3],Q=i[7],Y=i[11],fe=i[15];return s[0]=o*E+a*P+l*I+c*V,s[4]=o*L+a*U+l*z+c*Q,s[8]=o*y+a*X+l*Z+c*Y,s[12]=o*T+a*D+l*J+c*fe,s[1]=h*E+u*P+d*I+p*V,s[5]=h*L+u*U+d*z+p*Q,s[9]=h*y+u*X+d*Z+p*Y,s[13]=h*T+u*D+d*J+p*fe,s[2]=g*E+f*P+m*I+v*V,s[6]=g*L+f*U+m*z+v*Q,s[10]=g*y+f*X+m*Z+v*Y,s[14]=g*T+f*D+m*J+v*fe,s[3]=b*E+_*P+x*I+A*V,s[7]=b*L+_*U+x*z+A*Q,s[11]=b*y+_*X+x*Z+A*Y,s[15]=b*T+_*D+x*J+A*fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],f=e[7],m=e[11],v=e[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*p-n*l*p)+f*(+t*l*p-t*c*d+s*o*d-i*o*p+i*c*h-s*l*h)+m*(+t*c*u-t*a*p-s*o*u+n*o*p+s*a*h-n*c*h)+v*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],f=e[13],m=e[14],v=e[15],b=u*m*c-f*d*c+f*l*p-a*m*p-u*l*v+a*d*v,_=g*d*c-h*m*c-g*l*p+o*m*p+h*l*v-o*d*v,x=h*f*c-g*u*c+g*a*p-o*f*p-h*a*v+o*u*v,A=g*u*l-h*f*l-g*a*d+o*f*d+h*a*m-o*u*m,E=t*b+n*_+i*x+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/E;return e[0]=b*L,e[1]=(f*d*s-u*m*s-f*i*p+n*m*p+u*i*v-n*d*v)*L,e[2]=(a*m*s-f*l*s+f*i*c-n*m*c-a*i*v+n*l*v)*L,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*p-n*l*p)*L,e[4]=_*L,e[5]=(h*m*s-g*d*s+g*i*p-t*m*p-h*i*v+t*d*v)*L,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*v-t*l*v)*L,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*p+t*l*p)*L,e[8]=x*L,e[9]=(g*u*s-h*f*s-g*n*p+t*f*p+h*n*v-t*u*v)*L,e[10]=(o*f*s-g*a*s+g*n*c-t*f*c-o*n*v+t*a*v)*L,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*p-t*a*p)*L,e[12]=A*L,e[13]=(h*f*i-g*u*i+g*n*d-t*f*d-h*n*m+t*u*m)*L,e[14]=(g*a*i-o*f*i-g*n*l+t*f*l+o*n*m-t*a*m)*L,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*L,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,p=s*h,g=s*u,f=o*h,m=o*u,v=a*u,b=l*c,_=l*h,x=l*u,A=n.x,E=n.y,L=n.z;return i[0]=(1-(f+v))*A,i[1]=(p+x)*A,i[2]=(g-_)*A,i[3]=0,i[4]=(p-x)*E,i[5]=(1-(d+v))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(g+_)*L,i[9]=(m-b)*L,i[10]=(1-(d+f))*L,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=$n.set(i[0],i[1],i[2]).length();const o=$n.set(i[4],i[5],i[6]).length(),a=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const c=1/s,h=1/o,u=1/a;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=h,Ht.elements[5]*=h,Ht.elements[6]*=h,Ht.elements[8]*=u,Ht.elements[9]*=u,Ht.elements[10]*=u,t.setFromRotationMatrix(Ht),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o){const a=this.elements,l=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,i,s,o){const a=this.elements,l=1/(t-e),c=1/(n-i),h=1/(o-s),u=(t+e)*l,d=(n+i)*c,p=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new C,Ht=new Fe,Su=new C(0,0,0),wu=new C(1,1,1),bn=new C,ds=new C,Rt=new C,wa=new Fe,Aa=new Xt;class Vs{constructor(e=0,t=0,n=0,i=Vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ft(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ft(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ft(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return wa.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wa,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Aa.setFromEuler(this),this.setFromQuaternion(Aa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vs.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Au=0;const Ta=new C,Qn=new Xt,cn=new Fe,fs=new C,Di=new C,Tu=new C,Eu=new Xt,Ea=new C(1,0,0),Ca=new C(0,1,0),La=new C(0,0,1),Cu={type:"added"},Pa={type:"removed"};class et extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Au++}),this.uuid=Vt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=et.DEFAULT_UP.clone();const e=new C,t=new Vs,n=new Xt,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Fe},normalMatrix:{value:new wt}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=et.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(Ea,e)}rotateY(e){return this.rotateOnAxis(Ca,e)}rotateZ(e){return this.rotateOnAxis(La,e)}translateOnAxis(e,t){return Ta.copy(e).applyQuaternion(this.quaternion),this.position.add(Ta.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ea,e)}translateY(e){return this.translateOnAxis(Ca,e)}translateZ(e){return this.translateOnAxis(La,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fs.copy(e):fs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Di,fs,this.up):cn.lookAt(fs,Di,this.up),this.quaternion.setFromRotationMatrix(cn),i&&(cn.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix(cn),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Cu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pa)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Pa)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,Tu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,Eu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const a=i[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}et.DEFAULT_UP=new C(0,1,0);et.DEFAULT_MATRIX_AUTO_UPDATE=!0;et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new C,hn=new C,gr=new C,un=new C,ei=new C,ti=new C,Ra=new C,_r=new C,vr=new C,xr=new C;class fn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Wt.subVectors(e,t),i.cross(Wt);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Wt.subVectors(i,t),hn.subVectors(n,t),gr.subVectors(e,t);const o=Wt.dot(Wt),a=Wt.dot(hn),l=Wt.dot(gr),c=hn.dot(hn),h=hn.dot(gr),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,un),l.set(0,0),l.addScaledVector(s,un.x),l.addScaledVector(o,un.y),l.addScaledVector(a,un.z),l}static isFrontFacing(e,t,n,i){return Wt.subVectors(n,t),hn.subVectors(e,t),Wt.cross(hn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Wt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return fn.getUV(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;ei.subVectors(i,n),ti.subVectors(s,n),_r.subVectors(e,n);const l=ei.dot(_r),c=ti.dot(_r);if(l<=0&&c<=0)return t.copy(n);vr.subVectors(e,i);const h=ei.dot(vr),u=ti.dot(vr);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ei,o);xr.subVectors(e,s);const p=ei.dot(xr),g=ti.dot(xr);if(g>=0&&p<=g)return t.copy(s);const f=p*c-l*g;if(f<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ti,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ra.subVectors(s,i),a=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(Ra,a);const v=1/(m+f+d);return o=f*v,a=d*v,t.copy(n).addScaledVector(ei,o).addScaledVector(ti,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Lu=0;class tn extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Vt(),this.name="",this.type="Material",this.blending=di,this.side=nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ul,this.blendDst=Gl,this.blendEquation=ai,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rr,this.stencilZFail=rr,this.stencilZPass=rr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const i=this[t];if(i===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==nn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const tc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qt={h:0,s:0,l:0},ps={h:0,s:0,l:0};function yr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=yt.workingColorSpace){if(e=co(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=yr(o,s,e+1/3),this.g=yr(o,s,e),this.b=yr(o,s,e-1/3)}return yt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ot){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,yt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,yt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,yt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,yt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const n=tc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return yt.fromWorkingColorSpace(gt.copy(this),e),ft(gt.r*255,0,255)<<16^ft(gt.g*255,0,255)<<8^ft(gt.b*255,0,255)<<0}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.fromWorkingColorSpace(gt.copy(this),t);const n=gt.r,i=gt.g,s=gt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=yt.workingColorSpace){return yt.fromWorkingColorSpace(gt.copy(this),t),e.r=gt.r,e.g=gt.g,e.b=gt.b,e}getStyle(e=Ot){yt.fromWorkingColorSpace(gt.copy(this),e);const t=gt.r,n=gt.g,i=gt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=n,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(ps);const n=ji(qt.h,ps.h,t),i=ji(qt.s,ps.s,t),s=ji(qt.l,ps.l,t);return this.setHSL(n,i,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const gt=new De;De.NAMES=tc;class _t extends tn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const st=new C,ms=new oe;class rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Xr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ms.fromBufferAttribute(this,t),ms.applyMatrix3(e),this.setXY(t,ms.x,ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix3(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyMatrix4(e),this.setXYZ(t,st.x,st.y,st.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.applyNormalMatrix(e),this.setXYZ(t,st.x,st.y,st.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)st.fromBufferAttribute(this,t),st.transformDirection(e),this.setXYZ(t,st.x,st.y,st.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=pn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=pn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=pn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=pn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xr&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nc extends rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ic extends rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pu=0;const Nt=new Fe,br=new et,ni=new C,It=new Ai,ki=new Ai,ut=new C;class Et extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Vt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jl(e)?ic:nc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new wt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nt.makeRotationFromQuaternion(e),this.applyMatrix4(Nt),this}rotateX(e){return Nt.makeRotationX(e),this.applyMatrix4(Nt),this}rotateY(e){return Nt.makeRotationY(e),this.applyMatrix4(Nt),this}rotateZ(e){return Nt.makeRotationZ(e),this.applyMatrix4(Nt),this}translate(e,t,n){return Nt.makeTranslation(e,t,n),this.applyMatrix4(Nt),this}scale(e,t,n){return Nt.makeScale(e,t,n),this.applyMatrix4(Nt),this}lookAt(e){return br.lookAt(e),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];It.setFromBufferAttribute(s),this.morphTargetsRelative?(ut.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(ut),ut.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(ut)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ki.setFromBufferAttribute(a),this.morphTargetsRelative?(ut.addVectors(It.min,ki.min),It.expandByPoint(ut),ut.addVectors(It.max,ki.max),It.expandByPoint(ut)):(It.expandByPoint(ki.min),It.expandByPoint(ki.max))}It.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)ut.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ut.fromBufferAttribute(a,c),l&&(ni.fromBufferAttribute(e,c),ut.add(ni)),i=Math.max(i,n.distanceToSquared(ut))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let P=0;P<a;P++)c[P]=new C,h[P]=new C;const u=new C,d=new C,p=new C,g=new oe,f=new oe,m=new oe,v=new C,b=new C;function _(P,U,X){u.fromArray(i,P*3),d.fromArray(i,U*3),p.fromArray(i,X*3),g.fromArray(o,P*2),f.fromArray(o,U*2),m.fromArray(o,X*2),d.sub(u),p.sub(u),f.sub(g),m.sub(g);const D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(v.copy(d).multiplyScalar(m.y).addScaledVector(p,-f.y).multiplyScalar(D),b.copy(p).multiplyScalar(f.x).addScaledVector(d,-m.x).multiplyScalar(D),c[P].add(v),c[U].add(v),c[X].add(v),h[P].add(b),h[U].add(b),h[X].add(b))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let P=0,U=x.length;P<U;++P){const X=x[P],D=X.start,I=X.count;for(let z=D,Z=D+I;z<Z;z+=3)_(n[z+0],n[z+1],n[z+2])}const A=new C,E=new C,L=new C,y=new C;function T(P){L.fromArray(s,P*3),y.copy(L);const U=c[P];A.copy(U),A.sub(L.multiplyScalar(L.dot(U))).normalize(),E.crossVectors(y,U);const D=E.dot(h[P])<0?-1:1;l[P*4]=A.x,l[P*4+1]=A.y,l[P*4+2]=A.z,l[P*4+3]=D}for(let P=0,U=x.length;P<U;++P){const X=x[P],D=X.start,I=X.count;for(let z=D,Z=D+I;z<Z;z+=3)T(n[z+0]),T(n[z+1]),T(n[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),f=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,f),o.fromBufferAttribute(t,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,f),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(f,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ut.fromBufferAttribute(e,t),ut.normalize(),e.setXYZ(t,ut.x,ut.y,ut.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let f=0,m=l.length;f<m;f++){a.isInterleavedBufferAttribute?p=l[f]*a.data.stride+a.offset:p=l[f]*h;for(let v=0;v<h;v++)d[g++]=c[p++]}return new rt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ia=new Fe,Kt=new Gs,gs=new Ti,Da=new C,Ni=new C,Fi=new C,Oi=new C,Mr=new C,_s=new C,vs=new oe,xs=new oe,ys=new oe,Sr=new C,bs=new C;class At extends et{constructor(e=new Et,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){_s.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Mr.fromBufferAttribute(u,e),o?_s.addScaledVector(Mr,h):_s.addScaledVector(Mr.sub(t),h))}t.add(_s)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(s),Kt.copy(e.ray).recast(e.near),gs.containsPoint(Kt.origin)===!1&&(Kt.intersectSphere(gs,Da)===null||Kt.origin.distanceToSquared(Da)>(e.far-e.near)**2))||(Ia.copy(s).invert(),Kt.copy(e.ray).applyMatrix4(Ia),n.boundingBox!==null&&Kt.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,l=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,u=n.groups,d=n.drawRange;if(a!==null)if(Array.isArray(i))for(let p=0,g=u.length;p<g;p++){const f=u[p],m=i[f.materialIndex],v=Math.max(f.start,d.start),b=Math.min(a.count,Math.min(f.start+f.count,d.start+d.count));for(let _=v,x=b;_<x;_+=3){const A=a.getX(_),E=a.getX(_+1),L=a.getX(_+2);o=Ms(this,m,e,Kt,c,h,A,E,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let f=p,m=g;f<m;f+=3){const v=a.getX(f),b=a.getX(f+1),_=a.getX(f+2);o=Ms(this,i,e,Kt,c,h,v,b,_),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let p=0,g=u.length;p<g;p++){const f=u[p],m=i[f.materialIndex],v=Math.max(f.start,d.start),b=Math.min(l.count,Math.min(f.start+f.count,d.start+d.count));for(let _=v,x=b;_<x;_+=3){const A=_,E=_+1,L=_+2;o=Ms(this,m,e,Kt,c,h,A,E,L),o&&(o.faceIndex=Math.floor(_/3),o.face.materialIndex=f.materialIndex,t.push(o))}}else{const p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let f=p,m=g;f<m;f+=3){const v=f,b=f+1,_=f+2;o=Ms(this,i,e,Kt,c,h,v,b,_),o&&(o.faceIndex=Math.floor(f/3),t.push(o))}}}}function Ru(r,e,t,n,i,s,o,a){let l;if(e.side===Dt?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===nn,a),l===null)return null;bs.copy(a),bs.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(bs);return c<t.near||c>t.far?null:{distance:c,point:bs.clone(),object:r}}function Ms(r,e,t,n,i,s,o,a,l){r.getVertexPosition(o,Ni),r.getVertexPosition(a,Fi),r.getVertexPosition(l,Oi);const c=Ru(r,e,t,n,Ni,Fi,Oi,Sr);if(c){i&&(vs.fromBufferAttribute(i,o),xs.fromBufferAttribute(i,a),ys.fromBufferAttribute(i,l),c.uv=fn.getUV(Sr,Ni,Fi,Oi,vs,xs,ys,new oe)),s&&(vs.fromBufferAttribute(s,o),xs.fromBufferAttribute(s,a),ys.fromBufferAttribute(s,l),c.uv2=fn.getUV(Sr,Ni,Fi,Oi,vs,xs,ys,new oe));const h={a:o,b:a,c:l,normal:new C,materialIndex:0};fn.getNormal(Ni,Fi,Oi,h.normal),c.face=h}return c}class os extends Et{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(h,3)),this.setAttribute("uv",new Tt(u,2));function g(f,m,v,b,_,x,A,E,L,y,T){const P=x/L,U=A/y,X=x/2,D=A/2,I=E/2,z=L+1,Z=y+1;let J=0,V=0;const Q=new C;for(let Y=0;Y<Z;Y++){const fe=Y*U-D;for(let O=0;O<z;O++){const K=O*P-X;Q[f]=K*b,Q[m]=fe*_,Q[v]=I,c.push(Q.x,Q.y,Q.z),Q[f]=0,Q[m]=0,Q[v]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(O/L),u.push(1-Y/y),J+=1}}for(let Y=0;Y<y;Y++)for(let fe=0;fe<L;fe++){const O=d+fe+z*Y,K=d+fe+z*(Y+1),se=d+(fe+1)+z*(Y+1),N=d+(fe+1)+z*Y;l.push(O,K,N),l.push(K,se,N),V+=6}a.addGroup(p,V,T),p+=V,d+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Si(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Mt(r){const e={};for(let t=0;t<r.length;t++){const n=Si(r[t]);for(const i in n)e[i]=n[i]}return e}function Iu(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function sc(r){return r.getRenderTarget()===null&&r.outputEncoding===We?Ot:Mi}const Du={clone:Si,merge:Mt};var ku=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _n extends tn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ku,this.fragmentShader=Nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Si(e.uniforms),this.uniformsGroups=Iu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rc extends et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class St extends rc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $i*2*Math.atan(Math.tan(qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ii=-90,si=1;class Fu extends et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new St(ii,si,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new St(ii,si,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new St(ii,si,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new St(ii,si,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new St(ii,si,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new St(ii,si,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=mn,e.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=p,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class oc extends pt{constructor(e,t,n,i,s,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:vi,super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ou extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new oc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ct}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new os(5,5,5),s=new _n({name:"CubemapFromEquirect",uniforms:Si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Dt,blending:En});s.uniforms.tEquirect.value=t;const o=new At(i,s),a=t.minFilter;return t.minFilter===Bn&&(t.minFilter=Ct),new Fu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const wr=new C,zu=new C,Bu=new wt;class kn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=wr.subVectors(n,t).cross(zu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(wr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bu.getNormalMatrix(e),i=this.coplanarPoint(wr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new Ti,Ss=new C;class uo{constructor(e=new kn,t=new kn,n=new kn,i=new kn,s=new kn,o=new kn){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],p=n[9],g=n[10],f=n[11],m=n[12],v=n[13],b=n[14],_=n[15];return t[0].setComponents(a-i,u-l,f-d,_-m).normalize(),t[1].setComponents(a+i,u+l,f+d,_+m).normalize(),t[2].setComponents(a+s,u+c,f+p,_+v).normalize(),t[3].setComponents(a-s,u-c,f-p,_-v).normalize(),t[4].setComponents(a-o,u-h,f-g,_-b).normalize(),t[5].setComponents(a+o,u+h,f+g,_+b).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ss.x=i.normal.x>0?e.max.x:e.min.x,Ss.y=i.normal.y>0?e.max.y:e.min.y,Ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ac(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Uu(r,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,p=r.createBuffer();r.bindBuffer(h,p),r.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,p=h.updateRange;r.bindBuffer(u,c),p.count===-1?r.bufferSubData(u,0,d):(t?r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):r.bufferSubData(u,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class fo extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],f=[],m=[];for(let v=0;v<h;v++){const b=v*d-o;for(let _=0;_<c;_++){const x=_*u-s;g.push(x,-b,0),f.push(0,0,1),m.push(_/a),m.push(1-v/l)}}for(let v=0;v<l;v++)for(let b=0;b<a;b++){const _=b+c*v,x=b+c*(v+1),A=b+1+c*(v+1),E=b+1+c*v;p.push(_,x,E),p.push(x,A,E)}this.setIndex(p),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Gu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Vu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Wu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ju=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xu="vec3 transformed = vec3( position );",Zu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Ku=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ju=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,id=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,od=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,ad=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",pd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_d=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ad=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Td=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ld=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Pd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Rd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Id=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Fd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Od=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,$d=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Qd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,tf=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,of=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,af=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Sf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Af=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,If=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Df=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,kf=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Nf=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Ff=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Of=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,zf=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Bf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Xf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Zf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Yf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$f=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,op=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ap=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,up=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_p=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:Gu,alphamap_pars_fragment:Vu,alphatest_fragment:Hu,alphatest_pars_fragment:Wu,aomap_fragment:qu,aomap_pars_fragment:ju,begin_vertex:Xu,beginnormal_vertex:Zu,bsdfs:Yu,iridescence_fragment:Ku,bumpmap_pars_fragment:Ju,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Qu,clipping_planes_pars_vertex:ed,clipping_planes_vertex:td,color_fragment:nd,color_pars_fragment:id,color_pars_vertex:sd,color_vertex:rd,common:od,cube_uv_reflection_fragment:ad,defaultnormal_vertex:ld,displacementmap_pars_vertex:cd,displacementmap_vertex:hd,emissivemap_fragment:ud,emissivemap_pars_fragment:dd,encodings_fragment:fd,encodings_pars_fragment:pd,envmap_fragment:md,envmap_common_pars_fragment:gd,envmap_pars_fragment:_d,envmap_pars_vertex:vd,envmap_physical_pars_fragment:Pd,envmap_vertex:xd,fog_vertex:yd,fog_pars_vertex:bd,fog_fragment:Md,fog_pars_fragment:Sd,gradientmap_pars_fragment:wd,lightmap_fragment:Ad,lightmap_pars_fragment:Td,lights_lambert_fragment:Ed,lights_lambert_pars_fragment:Cd,lights_pars_begin:Ld,lights_toon_fragment:Rd,lights_toon_pars_fragment:Id,lights_phong_fragment:Dd,lights_phong_pars_fragment:kd,lights_physical_fragment:Nd,lights_physical_pars_fragment:Fd,lights_fragment_begin:Od,lights_fragment_maps:zd,lights_fragment_end:Bd,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Gd,logdepthbuf_pars_vertex:Vd,logdepthbuf_vertex:Hd,map_fragment:Wd,map_pars_fragment:qd,map_particle_fragment:jd,map_particle_pars_fragment:Xd,metalnessmap_fragment:Zd,metalnessmap_pars_fragment:Yd,morphcolor_vertex:Kd,morphnormal_vertex:Jd,morphtarget_pars_vertex:$d,morphtarget_vertex:Qd,normal_fragment_begin:ef,normal_fragment_maps:tf,normal_pars_fragment:nf,normal_pars_vertex:sf,normal_vertex:rf,normalmap_pars_fragment:of,clearcoat_normal_fragment_begin:af,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:hf,output_fragment:uf,packing:df,premultiplied_alpha_fragment:ff,project_vertex:pf,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:yf,shadowmap_vertex:bf,shadowmask_pars_fragment:Mf,skinbase_vertex:Sf,skinning_pars_vertex:wf,skinning_vertex:Af,skinnormal_vertex:Tf,specularmap_fragment:Ef,specularmap_pars_fragment:Cf,tonemapping_fragment:Lf,tonemapping_pars_fragment:Pf,transmission_fragment:Rf,transmission_pars_fragment:If,uv_pars_fragment:Df,uv_pars_vertex:kf,uv_vertex:Nf,uv2_pars_fragment:Ff,uv2_pars_vertex:Of,uv2_vertex:zf,worldpos_vertex:Bf,background_vert:Uf,background_frag:Gf,backgroundCube_vert:Vf,backgroundCube_frag:Hf,cube_vert:Wf,cube_frag:qf,depth_vert:jf,depth_frag:Xf,distanceRGBA_vert:Zf,distanceRGBA_frag:Yf,equirect_vert:Kf,equirect_frag:Jf,linedashed_vert:$f,linedashed_frag:Qf,meshbasic_vert:ep,meshbasic_frag:tp,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:op,meshnormal_frag:ap,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:hp,meshphysical_frag:up,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:_p,sprite_vert:vp,sprite_frag:xp},re={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wt},uv2Transform:{value:new wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new oe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}}},Jt={basic:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new De(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Mt([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Mt([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Mt([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new De(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Mt([re.points,re.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Mt([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Mt([re.common,re.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Mt([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Mt([re.sprite,re.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Mt([re.common,re.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Mt([re.lights,re.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Jt.physical={uniforms:Mt([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new oe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const ws={r:0,b:0,g:0};function yp(r,e,t,n,i,s,o){const a=new De(0);let l=s===!0?0:1,c,h,u=null,d=0,p=null;function g(m,v){let b=!1,_=v.isScene===!0?v.background:null;_&&_.isTexture&&(_=(v.backgroundBlurriness>0?t:e).get(_));const x=r.xr,A=x.getSession&&x.getSession();A&&A.environmentBlendMode==="additive"&&(_=null),_===null?f(a,l):_&&_.isColor&&(f(_,1),b=!0),(r.autoClear||b)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Us)?(h===void 0&&(h=new At(new os(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:Si(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,L,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.toneMapped=_.encoding!==We,(u!==_||d!==_.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new At(new fo(2,2),new _n({name:"BackgroundMaterial",uniforms:Si(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=_.encoding!==We,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||p!==r.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,p=r.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function f(m,v){m.getRGB(ws,sc(r)),n.buffers.color.setClear(ws.r,ws.g,ws.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,f(a,l)},render:g}}function bp(r,e,t,n){const i=r.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=m(null);let c=l,h=!1;function u(I,z,Z,J,V){let Q=!1;if(o){const Y=f(J,Z,z);c!==Y&&(c=Y,p(c.object)),Q=v(I,J,Z,V),Q&&b(I,J,Z,V)}else{const Y=z.wireframe===!0;(c.geometry!==J.id||c.program!==Z.id||c.wireframe!==Y)&&(c.geometry=J.id,c.program=Z.id,c.wireframe=Y,Q=!0)}V!==null&&t.update(V,34963),(Q||h)&&(h=!1,y(I,z,Z,J),V!==null&&r.bindBuffer(34963,t.get(V).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function p(I){return n.isWebGL2?r.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return n.isWebGL2?r.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function f(I,z,Z){const J=Z.wireframe===!0;let V=a[I.id];V===void 0&&(V={},a[I.id]=V);let Q=V[z.id];Q===void 0&&(Q={},V[z.id]=Q);let Y=Q[J];return Y===void 0&&(Y=m(d()),Q[J]=Y),Y}function m(I){const z=[],Z=[],J=[];for(let V=0;V<i;V++)z[V]=0,Z[V]=0,J[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:J,object:I,attributes:{},index:null}}function v(I,z,Z,J){const V=c.attributes,Q=z.attributes;let Y=0;const fe=Z.getAttributes();for(const O in fe)if(fe[O].location>=0){const se=V[O];let N=Q[O];if(N===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(N=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(N=I.instanceColor)),se===void 0||se.attribute!==N||N&&se.data!==N.data)return!0;Y++}return c.attributesNum!==Y||c.index!==J}function b(I,z,Z,J){const V={},Q=z.attributes;let Y=0;const fe=Z.getAttributes();for(const O in fe)if(fe[O].location>=0){let se=Q[O];se===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(se=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(se=I.instanceColor));const N={};N.attribute=se,se&&se.data&&(N.data=se.data),V[O]=N,Y++}c.attributes=V,c.attributesNum=Y,c.index=J}function _(){const I=c.newAttributes;for(let z=0,Z=I.length;z<Z;z++)I[z]=0}function x(I){A(I,0)}function A(I,z){const Z=c.newAttributes,J=c.enabledAttributes,V=c.attributeDivisors;Z[I]=1,J[I]===0&&(r.enableVertexAttribArray(I),J[I]=1),V[I]!==z&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,z),V[I]=z)}function E(){const I=c.newAttributes,z=c.enabledAttributes;for(let Z=0,J=z.length;Z<J;Z++)z[Z]!==I[Z]&&(r.disableVertexAttribArray(Z),z[Z]=0)}function L(I,z,Z,J,V,Q){n.isWebGL2===!0&&(Z===5124||Z===5125)?r.vertexAttribIPointer(I,z,Z,V,Q):r.vertexAttribPointer(I,z,Z,J,V,Q)}function y(I,z,Z,J){if(n.isWebGL2===!1&&(I.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const V=J.attributes,Q=Z.getAttributes(),Y=z.defaultAttributeValues;for(const fe in Q){const O=Q[fe];if(O.location>=0){let K=V[fe];if(K===void 0&&(fe==="instanceMatrix"&&I.instanceMatrix&&(K=I.instanceMatrix),fe==="instanceColor"&&I.instanceColor&&(K=I.instanceColor)),K!==void 0){const se=K.normalized,N=K.itemSize,de=t.get(K);if(de===void 0)continue;const le=de.buffer,pe=de.type,me=de.bytesPerElement;if(K.isInterleavedBufferAttribute){const xe=K.data,Ce=xe.stride,j=K.offset;if(xe.isInstancedInterleavedBuffer){for(let $=0;$<O.locationSize;$++)A(O.location+$,xe.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let $=0;$<O.locationSize;$++)x(O.location+$);r.bindBuffer(34962,le);for(let $=0;$<O.locationSize;$++)L(O.location+$,N/O.locationSize,pe,se,Ce*me,(j+N/O.locationSize*$)*me)}else{if(K.isInstancedBufferAttribute){for(let xe=0;xe<O.locationSize;xe++)A(O.location+xe,K.meshPerAttribute);I.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let xe=0;xe<O.locationSize;xe++)x(O.location+xe);r.bindBuffer(34962,le);for(let xe=0;xe<O.locationSize;xe++)L(O.location+xe,N/O.locationSize,pe,se,N*me,N/O.locationSize*xe*me)}}else if(Y!==void 0){const se=Y[fe];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(O.location,se);break;case 3:r.vertexAttrib3fv(O.location,se);break;case 4:r.vertexAttrib4fv(O.location,se);break;default:r.vertexAttrib1fv(O.location,se)}}}}E()}function T(){X();for(const I in a){const z=a[I];for(const Z in z){const J=z[Z];for(const V in J)g(J[V].object),delete J[V];delete z[Z]}delete a[I]}}function P(I){if(a[I.id]===void 0)return;const z=a[I.id];for(const Z in z){const J=z[Z];for(const V in J)g(J[V].object),delete J[V];delete z[Z]}delete a[I.id]}function U(I){for(const z in a){const Z=a[z];if(Z[I.id]===void 0)continue;const J=Z[I.id];for(const V in J)g(J[V].object),delete J[V];delete Z[I.id]}}function X(){D(),h=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:X,resetDefaultState:D,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:_,enableAttribute:x,disableUnusedAttributes:E}}function Mp(r,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,p;if(i)d=r,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,h,u),t.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Sp(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(L){if(L==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";L="mediump"}return L==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),p=r.getParameter(3379),g=r.getParameter(34076),f=r.getParameter(34921),m=r.getParameter(36347),v=r.getParameter(36348),b=r.getParameter(36349),_=d>0,x=o||e.has("OES_texture_float"),A=_&&x,E=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:_,floatFragmentTextures:x,floatVertexTextures:A,maxSamples:E}}function wp(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new kn,a=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,f=u.clipIntersection,m=u.clipShadows,v=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const b=s?0:n,_=b*4;let x=v.clippingState||null;l.value=x,x=h(g,d,_,p);for(let A=0;A!==_;++A)x[A]=t[A];v.clippingState=x,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const f=u!==null?u.length:0;let m=null;if(f!==0){if(m=l.value,g!==!0||m===null){const v=p+f*4,b=d.matrixWorldInverse;a.getNormalMatrix(b),(m===null||m.length<v)&&(m=new Float32Array(v));for(let _=0,x=p;_!==f;++_,x+=4)o.copy(u[_]).applyMatrix4(b,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=f,e.numIntersection=0,m}}function Ap(r){let e=new WeakMap;function t(o,a){return a===Hr?o.mapping=vi:a===Wr&&(o.mapping=xi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Hr||a===Wr)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ou(l.height/2);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class po extends rc{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const hi=4,ka=[.125,.215,.35,.446,.526,.582],Fn=20,Ar=new po,Na=new De;let Tr=null;const Nn=(1+Math.sqrt(5))/2,oi=1/Nn,Fa=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,Nn,oi),new C(0,Nn,-oi),new C(oi,0,Nn),new C(-oi,0,Nn),new C(Nn,oi,0),new C(-Nn,oi,0)];class Oa{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Tr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ua(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ba(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Tr),e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vi||e.mapping===xi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tr=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ct,minFilter:Ct,generateMipmaps:!1,type:Ki,format:Bt,encoding:Gn,depthBuffer:!1},i=za(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=za(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tp(s)),this._blurMaterial=Ep(s,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,Ar)}_sceneToCubeUV(e,t,n,i){const a=new St(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Na),h.toneMapping=mn,h.autoClear=!1;const p=new _t({name:"PMREM.Background",side:Dt,depthWrite:!1,depthTest:!1}),g=new At(new os,p);let f=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,f=!0):(p.color.copy(Na),f=!0);for(let v=0;v<6;v++){const b=v%3;b===0?(a.up.set(0,l[v],0),a.lookAt(c[v],0,0)):b===1?(a.up.set(0,0,l[v]),a.lookAt(0,c[v],0)):(a.up.set(0,l[v],0),a.lookAt(0,0,c[v]));const _=this._cubeSize;As(i,b*_,v>2?_:0,_,_),h.setRenderTarget(i),f&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vi||e.mapping===xi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ua()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ba());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new At(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;As(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ar)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Fa[(i-1)%Fa.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new At(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fn-1),f=s/g,m=isFinite(s)?1+Math.floor(h*f):Fn;m>Fn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fn}`);const v=[];let b=0;for(let L=0;L<Fn;++L){const y=L/f,T=Math.exp(-y*y/2);v.push(T),L===0?b+=T:L<m&&(b+=2*T)}for(let L=0;L<v.length;L++)v[L]=v[L]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-n;const x=this._sizeLods[i],A=3*x*(i>_-hi?i-_+hi:0),E=4*(this._cubeSize-x);As(t,A,E,3*x,2*x),l.setRenderTarget(t),l.render(u,Ar)}}function Tp(r){const e=[],t=[],n=[];let i=r;const s=r-hi+1+ka.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-hi?l=ka[o-r+hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,f=3,m=2,v=1,b=new Float32Array(f*g*p),_=new Float32Array(m*g*p),x=new Float32Array(v*g*p);for(let E=0;E<p;E++){const L=E%3*2/3-1,y=E>2?0:-1,T=[L,y,0,L+2/3,y,0,L+2/3,y+1,0,L,y,0,L+2/3,y+1,0,L,y+1,0];b.set(T,f*g*E),_.set(d,m*g*E);const P=[E,E,E,E,E,E];x.set(P,v*g*E)}const A=new Et;A.setAttribute("position",new rt(b,f)),A.setAttribute("uv",new rt(_,m)),A.setAttribute("faceIndex",new rt(x,v)),e.push(A),i>hi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function za(r,e,t){const n=new Vn(r,e,t);return n.texture.mapping=Us,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function As(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Ep(r,e,t){const n=new Float32Array(Fn),i=new C(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Fn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ba(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ua(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function mo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cp(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Hr||l===Wr,h=l===vi||l===xi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new Oa(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){t===null&&(t=new Oa(r));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lp(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Pp(r,e,t,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const p=u.morphAttributes;for(const g in p){const f=p[g];for(let m=0,v=f.length;m<v;m++)e.update(f[m],34962)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let f=0;if(p!==null){const b=p.array;f=p.version;for(let _=0,x=b.length;_<x;_+=3){const A=b[_+0],E=b[_+1],L=b[_+2];d.push(A,E,E,L,L,A)}}else{const b=g.array;f=g.version;for(let _=0,x=b.length/3-1;_<x;_+=3){const A=_+0,E=_+1,L=_+2;d.push(A,E,E,L,L,A)}}const m=new(Jl(d)?ic:nc)(d,1);m.version=f;const v=s.get(u);v&&e.remove(v),s.set(u,m)}function h(u){const d=s.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Rp(r,e,t,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,p){r.drawElements(s,p,a,d*l),t.update(p,s,1)}function u(d,p,g){if(g===0)return;let f,m;if(i)f=r,m="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,p,a,d*l,g),t.update(p,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Ip(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dp(r,e){return r[0]-e[0]}function kp(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Np(r,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new Xe,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,f=g!==void 0?g.length:0;let m=s.get(h);if(m===void 0||m.count!==f){let z=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const _=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,E=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],y=h.morphAttributes.color||[];let T=0;_===!0&&(T=1),x===!0&&(T=2),A===!0&&(T=3);let P=h.attributes.position.count*T,U=1;P>e.maxTextureSize&&(U=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const X=new Float32Array(P*U*4*f),D=new ec(X,P,U,f);D.type=An,D.needsUpdate=!0;const I=T*4;for(let Z=0;Z<f;Z++){const J=E[Z],V=L[Z],Q=y[Z],Y=P*U*4*Z;for(let fe=0;fe<J.count;fe++){const O=fe*I;_===!0&&(o.fromBufferAttribute(J,fe),X[Y+O+0]=o.x,X[Y+O+1]=o.y,X[Y+O+2]=o.z,X[Y+O+3]=0),x===!0&&(o.fromBufferAttribute(V,fe),X[Y+O+4]=o.x,X[Y+O+5]=o.y,X[Y+O+6]=o.z,X[Y+O+7]=0),A===!0&&(o.fromBufferAttribute(Q,fe),X[Y+O+8]=o.x,X[Y+O+9]=o.y,X[Y+O+10]=o.z,X[Y+O+11]=Q.itemSize===4?o.w:1)}}m={count:f,texture:D,size:new oe(P,U)},s.set(h,m),h.addEventListener("dispose",z)}let v=0;for(let _=0;_<d.length;_++)v+=d[_];const b=h.morphTargetsRelative?1:1-v;u.getUniforms().setValue(r,"morphTargetBaseInfluence",b),u.getUniforms().setValue(r,"morphTargetInfluences",d),u.getUniforms().setValue(r,"morphTargetsTexture",m.texture,t),u.getUniforms().setValue(r,"morphTargetsTextureSize",m.size)}else{const g=d===void 0?0:d.length;let f=n[h.id];if(f===void 0||f.length!==g){f=[];for(let x=0;x<g;x++)f[x]=[x,0];n[h.id]=f}for(let x=0;x<g;x++){const A=f[x];A[0]=x,A[1]=d[x]}f.sort(kp);for(let x=0;x<8;x++)x<g&&f[x][1]?(a[x][0]=f[x][0],a[x][1]=f[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Dp);const m=h.morphAttributes.position,v=h.morphAttributes.normal;let b=0;for(let x=0;x<8;x++){const A=a[x],E=A[0],L=A[1];E!==Number.MAX_SAFE_INTEGER&&L?(m&&h.getAttribute("morphTarget"+x)!==m[E]&&h.setAttribute("morphTarget"+x,m[E]),v&&h.getAttribute("morphNormal"+x)!==v[E]&&h.setAttribute("morphNormal"+x,v[E]),i[x]=L,b+=L):(m&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),v&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),i[x]=0)}const _=h.morphTargetsRelative?1:1-b;u.getUniforms().setValue(r,"morphTargetBaseInfluence",_),u.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Fp(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);return i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const lc=new pt,cc=new ec,hc=new bu,uc=new oc,Ga=[],Va=[],Ha=new Float32Array(16),Wa=new Float32Array(9),qa=new Float32Array(4);function Ei(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Ga[i];if(s===void 0&&(s=new Float32Array(i),Ga[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function ot(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function at(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Hs(r,e){let t=Va[e];t===void 0&&(t=new Int32Array(e),Va[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Op(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function zp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2fv(this.addr,e),at(t,e)}}function Bp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;r.uniform3fv(this.addr,e),at(t,e)}}function Up(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4fv(this.addr,e),at(t,e)}}function Gp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;qa.set(n),r.uniformMatrix2fv(this.addr,!1,qa),at(t,n)}}function Vp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;Wa.set(n),r.uniformMatrix3fv(this.addr,!1,Wa),at(t,n)}}function Hp(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(ot(t,n))return;Ha.set(n),r.uniformMatrix4fv(this.addr,!1,Ha),at(t,n)}}function Wp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function qp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2iv(this.addr,e),at(t,e)}}function jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3iv(this.addr,e),at(t,e)}}function Xp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4iv(this.addr,e),at(t,e)}}function Zp(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Yp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;r.uniform2uiv(this.addr,e),at(t,e)}}function Kp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;r.uniform3uiv(this.addr,e),at(t,e)}}function Jp(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;r.uniform4uiv(this.addr,e),at(t,e)}}function $p(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||lc,i)}function Qp(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||hc,i)}function em(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||uc,i)}function tm(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||cc,i)}function nm(r){switch(r){case 5126:return Op;case 35664:return zp;case 35665:return Bp;case 35666:return Up;case 35674:return Gp;case 35675:return Vp;case 35676:return Hp;case 5124:case 35670:return Wp;case 35667:case 35671:return qp;case 35668:case 35672:return jp;case 35669:case 35673:return Xp;case 5125:return Zp;case 36294:return Yp;case 36295:return Kp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return $p;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}function im(r,e){r.uniform1fv(this.addr,e)}function sm(r,e){const t=Ei(e,this.size,2);r.uniform2fv(this.addr,t)}function rm(r,e){const t=Ei(e,this.size,3);r.uniform3fv(this.addr,t)}function om(r,e){const t=Ei(e,this.size,4);r.uniform4fv(this.addr,t)}function am(r,e){const t=Ei(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lm(r,e){const t=Ei(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cm(r,e){const t=Ei(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hm(r,e){r.uniform1iv(this.addr,e)}function um(r,e){r.uniform2iv(this.addr,e)}function dm(r,e){r.uniform3iv(this.addr,e)}function fm(r,e){r.uniform4iv(this.addr,e)}function pm(r,e){r.uniform1uiv(this.addr,e)}function mm(r,e){r.uniform2uiv(this.addr,e)}function gm(r,e){r.uniform3uiv(this.addr,e)}function _m(r,e){r.uniform4uiv(this.addr,e)}function vm(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||lc,s[o])}function xm(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||hc,s[o])}function ym(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||uc,s[o])}function bm(r,e,t){const n=this.cache,i=e.length,s=Hs(t,i);ot(n,s)||(r.uniform1iv(this.addr,s),at(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||cc,s[o])}function Mm(r){switch(r){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return om;case 35674:return am;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return bm}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=nm(t.type)}}class wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Mm(t.type)}}class Am{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Er=/(\w+)(\])?(\[|\.)?/g;function ja(r,e){r.seq.push(e),r.map[e.id]=e}function Tm(r,e,t){const n=r.name,i=n.length;for(Er.lastIndex=0;;){const s=Er.exec(n),o=Er.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ja(t,c===void 0?new Sm(a,r,e):new wm(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Am(a),ja(t,u)),t=u}}}class Ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Tm(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Xa(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}let Em=0;function Cm(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Lm(r){switch(r){case Gn:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Za(r,e,t){const n=r.getShaderParameter(e,35713),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Cm(r.getShaderSource(e),o)}else return i}function Pm(r,e){const t=Lm(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Rm(r,e){let t;switch(e){case Ah:t="Linear";break;case Th:t="Reinhard";break;case Eh:t="OptimizedCineon";break;case Ch:t="ACESFilmic";break;case Lh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Im(r){return[r.extensionDerivatives||r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Wi).join(`
`)}function Dm(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function km(r,e){const t={},n=r.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Wi(r){return r!==""}function Ya(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ka(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Kr(r){return r.replace(Nm,Fm)}function Fm(r,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Kr(t)}const Om=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ja(r){return r.replace(Om,zm)}function zm(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $a(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bm(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Bl?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===ih?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function Um(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vi:case xi:e="ENVMAP_TYPE_CUBE";break;case Us:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gm(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xi:e="ENVMAP_MODE_REFRACTION";break}return e}function Vm(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Vl:e="ENVMAP_BLENDING_MULTIPLY";break;case Sh:e="ENVMAP_BLENDING_MIX";break;case wh:e="ENVMAP_BLENDING_ADD";break}return e}function Hm(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wm(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Bm(t),c=Um(t),h=Gm(t),u=Vm(t),d=Hm(t),p=t.isWebGL2?"":Im(t),g=Dm(s),f=i.createProgram();let m,v,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Wi).join(`
`),m.length>0&&(m+=`
`),v=[p,g].filter(Wi).join(`
`),v.length>0&&(v+=`
`)):(m=[$a(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wi).join(`
`),v=[p,$a(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?ke.tonemapping_pars_fragment:"",t.toneMapping!==mn?Rm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,Pm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wi).join(`
`)),o=Kr(o),o=Ya(o,t),o=Ka(o,t),a=Kr(a),a=Ya(a,t),a=Ka(a,t),o=Ja(o),a=Ja(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===ba?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ba?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const _=b+m+o,x=b+v+a,A=Xa(i,35633,_),E=Xa(i,35632,x);if(i.attachShader(f,A),i.attachShader(f,E),t.index0AttributeName!==void 0?i.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f),r.debug.checkShaderErrors){const T=i.getProgramInfoLog(f).trim(),P=i.getShaderInfoLog(A).trim(),U=i.getShaderInfoLog(E).trim();let X=!0,D=!0;if(i.getProgramParameter(f,35714)===!1){X=!1;const I=Za(i,A,"vertex"),z=Za(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,35715)+`

Program Info Log: `+T+`
`+I+`
`+z)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(P===""||U==="")&&(D=!1);D&&(this.diagnostics={runnable:X,programLog:T,vertexShader:{log:P,prefix:m},fragmentShader:{log:U,prefix:v}})}i.deleteShader(A),i.deleteShader(E);let L;this.getUniforms=function(){return L===void 0&&(L=new Ns(i,f)),L};let y;return this.getAttributes=function(){return y===void 0&&(y=km(i,f)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.name=t.shaderName,this.id=Em++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=A,this.fragmentShader=E,this}let qm=0;class jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xm(e),t.set(e,n)),n}}class Xm{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}}function Zm(r,e,t,n,i,s,o){const a=new ho,l=new jm,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(y,T,P,U,X){const D=U.fog,I=X.geometry,z=y.isMeshStandardMaterial?U.environment:null,Z=(y.isMeshStandardMaterial?t:e).get(y.envMap||z),J=Z&&Z.mapping===Us?Z.image.height:null,V=g[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Y=Q!==void 0?Q.length:0;let fe=0;I.morphAttributes.position!==void 0&&(fe=1),I.morphAttributes.normal!==void 0&&(fe=2),I.morphAttributes.color!==void 0&&(fe=3);let O,K,se,N;if(V){const Ce=Jt[V];O=Ce.vertexShader,K=Ce.fragmentShader}else O=y.vertexShader,K=y.fragmentShader,l.update(y),se=l.getVertexShaderID(y),N=l.getFragmentShaderID(y);const de=r.getRenderTarget(),le=y.alphaTest>0,pe=y.clearcoat>0,me=y.iridescence>0;return{isWebGL2:h,shaderID:V,shaderName:y.type,vertexShader:O,fragmentShader:K,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:N,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:X.isInstancedMesh===!0,instancingColor:X.isInstancedMesh===!0&&X.instanceColor!==null,supportsVertexTextures:d,outputEncoding:de===null?r.outputEncoding:de.isXRRenderTarget===!0?de.texture.encoding:Gn,map:!!y.map,matcap:!!y.matcap,envMap:!!Z,envMapMode:Z&&Z.mapping,envMapCubeUVHeight:J,lightMap:!!y.lightMap,aoMap:!!y.aoMap,emissiveMap:!!y.emissiveMap,bumpMap:!!y.bumpMap,normalMap:!!y.normalMap,objectSpaceNormalMap:y.normalMapType===$h,tangentSpaceNormalMap:y.normalMapType===Xl,decodeVideoTexture:!!y.map&&y.map.isVideoTexture===!0&&y.map.encoding===We,clearcoat:pe,clearcoatMap:pe&&!!y.clearcoatMap,clearcoatRoughnessMap:pe&&!!y.clearcoatRoughnessMap,clearcoatNormalMap:pe&&!!y.clearcoatNormalMap,iridescence:me,iridescenceMap:me&&!!y.iridescenceMap,iridescenceThicknessMap:me&&!!y.iridescenceThicknessMap,displacementMap:!!y.displacementMap,roughnessMap:!!y.roughnessMap,metalnessMap:!!y.metalnessMap,specularMap:!!y.specularMap,specularIntensityMap:!!y.specularIntensityMap,specularColorMap:!!y.specularColorMap,opaque:y.transparent===!1&&y.blending===di,alphaMap:!!y.alphaMap,alphaTest:le,gradientMap:!!y.gradientMap,sheen:y.sheen>0,sheenColorMap:!!y.sheenColorMap,sheenRoughnessMap:!!y.sheenRoughnessMap,transmission:y.transmission>0,transmissionMap:!!y.transmissionMap,thicknessMap:!!y.thicknessMap,combine:y.combine,vertexTangents:!!y.normalMap&&!!I.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUvs:!!y.map||!!y.bumpMap||!!y.normalMap||!!y.specularMap||!!y.alphaMap||!!y.emissiveMap||!!y.roughnessMap||!!y.metalnessMap||!!y.clearcoatMap||!!y.clearcoatRoughnessMap||!!y.clearcoatNormalMap||!!y.iridescenceMap||!!y.iridescenceThicknessMap||!!y.displacementMap||!!y.transmissionMap||!!y.thicknessMap||!!y.specularIntensityMap||!!y.specularColorMap||!!y.sheenColorMap||!!y.sheenRoughnessMap,uvsVertexOnly:!(y.map||y.bumpMap||y.normalMap||y.specularMap||y.alphaMap||y.emissiveMap||y.roughnessMap||y.metalnessMap||y.clearcoatNormalMap||y.iridescenceMap||y.iridescenceThicknessMap||y.transmission>0||y.transmissionMap||y.thicknessMap||y.specularIntensityMap||y.specularColorMap||y.sheen>0||y.sheenColorMap||y.sheenRoughnessMap)&&!!y.displacementMap,fog:!!D,useFog:y.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:!!y.flatShading,sizeAttenuation:y.sizeAttenuation,logarithmicDepthBuffer:u,skinning:X.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:fe,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:y.toneMapped?r.toneMapping:mn,useLegacyLights:r.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ut,flipSided:y.side===Dt,useDepthPacking:!!y.depthPacking,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:y.extensions&&y.extensions.derivatives,extensionFragDepth:y.extensions&&y.extensions.fragDepth,extensionDrawBuffers:y.extensions&&y.extensions.drawBuffers,extensionShaderTextureLOD:y.extensions&&y.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function m(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)T.push(P),T.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(v(T,y),b(T,y),T.push(r.outputEncoding)),T.push(y.customProgramCacheKey),T.join()}function v(y,T){y.push(T.precision),y.push(T.outputEncoding),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.combine),y.push(T.vertexUvs),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function b(y,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),y.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),y.push(a.mask)}function _(y){const T=g[y.type];let P;if(T){const U=Jt[T];P=Du.clone(U.uniforms)}else P=y.uniforms;return P}function x(y,T){let P;for(let U=0,X=c.length;U<X;U++){const D=c[U];if(D.cacheKey===T){P=D,++P.usedTimes;break}}return P===void 0&&(P=new Wm(r,T,y,s),c.push(P)),P}function A(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),y.destroy()}}function E(y){l.remove(y)}function L(){l.dispose()}return{getParameters:f,getProgramCacheKey:m,getUniforms:_,acquireProgram:x,releaseProgram:A,releaseShaderCache:E,programs:c,dispose:L}}function Ym(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Km(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Qa(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function el(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,p,g,f,m){let v=r[e];return v===void 0?(v={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:f,group:m},r[e]=v):(v.id=u.id,v.object=u,v.geometry=d,v.material=p,v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=f,v.group=m),e++,v}function a(u,d,p,g,f,m){const v=o(u,d,p,g,f,m);p.transmission>0?n.push(v):p.transparent===!0?i.push(v):t.push(v)}function l(u,d,p,g,f,m){const v=o(u,d,p,g,f,m);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):t.unshift(v)}function c(u,d){t.length>1&&t.sort(u||Km),n.length>1&&n.sort(d||Qa),i.length>1&&i.sort(d||Qa)}function h(){for(let u=e,d=r.length;u<d;u++){const p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Jm(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new el,r.set(n,[o])):i>=s.length?(o=new el,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function $m(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new De};break;case"SpotLight":t={position:new C,direction:new C,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function Qm(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let eg=0;function tg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ng(r,e){const t=new $m,n=Qm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new C);const s=new C,o=new Fe,a=new Fe;function l(h,u){let d=0,p=0,g=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let f=0,m=0,v=0,b=0,_=0,x=0,A=0,E=0,L=0,y=0;h.sort(tg);const T=u===!0?Math.PI:1;for(let U=0,X=h.length;U<X;U++){const D=h[U],I=D.color,z=D.intensity,Z=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=I.r*z*T,p+=I.g*z*T,g+=I.b*z*T;else if(D.isLightProbe)for(let V=0;V<9;V++)i.probe[V].addScaledVector(D.sh.coefficients[V],z);else if(D.isDirectionalLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*T),D.castShadow){const Q=D.shadow,Y=n.get(D);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,i.directionalShadow[f]=Y,i.directionalShadowMap[f]=J,i.directionalShadowMatrix[f]=D.shadow.matrix,x++}i.directional[f]=V,f++}else if(D.isSpotLight){const V=t.get(D);V.position.setFromMatrixPosition(D.matrixWorld),V.color.copy(I).multiplyScalar(z*T),V.distance=Z,V.coneCos=Math.cos(D.angle),V.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),V.decay=D.decay,i.spot[v]=V;const Q=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,Q.updateMatrices(D),D.castShadow&&y++),i.spotLightMatrix[v]=Q.matrix,D.castShadow){const Y=n.get(D);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=J,E++}v++}else if(D.isRectAreaLight){const V=t.get(D);V.color.copy(I).multiplyScalar(z),V.halfWidth.set(D.width*.5,0,0),V.halfHeight.set(0,D.height*.5,0),i.rectArea[b]=V,b++}else if(D.isPointLight){const V=t.get(D);if(V.color.copy(D.color).multiplyScalar(D.intensity*T),V.distance=D.distance,V.decay=D.decay,D.castShadow){const Q=D.shadow,Y=n.get(D);Y.shadowBias=Q.bias,Y.shadowNormalBias=Q.normalBias,Y.shadowRadius=Q.radius,Y.shadowMapSize=Q.mapSize,Y.shadowCameraNear=Q.camera.near,Y.shadowCameraFar=Q.camera.far,i.pointShadow[m]=Y,i.pointShadowMap[m]=J,i.pointShadowMatrix[m]=D.shadow.matrix,A++}i.point[m]=V,m++}else if(D.isHemisphereLight){const V=t.get(D);V.skyColor.copy(D.color).multiplyScalar(z*T),V.groundColor.copy(D.groundColor).multiplyScalar(z*T),i.hemi[_]=V,_++}}b>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=re.LTC_FLOAT_1,i.rectAreaLTC2=re.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=re.LTC_HALF_1,i.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=p,i.ambient[2]=g;const P=i.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==v||P.rectAreaLength!==b||P.hemiLength!==_||P.numDirectionalShadows!==x||P.numPointShadows!==A||P.numSpotShadows!==E||P.numSpotMaps!==L)&&(i.directional.length=f,i.spot.length=v,i.rectArea.length=b,i.point.length=m,i.hemi.length=_,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=E+L-y,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=y,P.directionalLength=f,P.pointLength=m,P.spotLength=v,P.rectAreaLength=b,P.hemiLength=_,P.numDirectionalShadows=x,P.numPointShadows=A,P.numSpotShadows=E,P.numSpotMaps=L,i.version=eg++)}function c(h,u){let d=0,p=0,g=0,f=0,m=0;const v=u.matrixWorldInverse;for(let b=0,_=h.length;b<_;b++){const x=h[b];if(x.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(v),d++}else if(x.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(v),A.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(v),g++}else if(x.isRectAreaLight){const A=i.rectArea[f];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(v),a.identity(),o.copy(x.matrixWorld),o.premultiply(v),a.extractRotation(o),A.halfWidth.set(x.width*.5,0,0),A.halfHeight.set(0,x.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),f++}else if(x.isPointLight){const A=i.point[p];A.position.setFromMatrixPosition(x.matrixWorld),A.position.applyMatrix4(v),p++}else if(x.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(x.matrixWorld),A.direction.transformDirection(v),m++}}}return{setup:l,setupView:c,state:i}}function tl(r,e){const t=new ng(r,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){t.setup(n,u)}function c(u){t.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function ig(r,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new tl(r,e),t.set(s,[l])):o>=a.length?(l=new tl(r,e),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:n,dispose:i}}class sg extends tn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rg extends tn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new C,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const og=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lg(r,e,t){let n=new uo;const i=new oe,s=new oe,o=new Xe,a=new sg({depthPacking:Jh}),l=new rg,c={},h=t.maxTextureSize,u={[nn]:Dt,[Dt]:nn,[Ut]:Ut},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new oe},radius:{value:4}},vertexShader:og,fragmentShader:ag}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Et;g.setAttribute("position",new rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const f=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bl,this.render=function(x,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const L=r.getRenderTarget(),y=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),P=r.state;P.setBlending(En),P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);for(let U=0,X=x.length;U<X;U++){const D=x[U],I=D.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const z=I.getFrameExtents();if(i.multiply(z),s.copy(I.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/z.x),i.x=s.x*z.x,I.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/z.y),i.y=s.y*z.y,I.mapSize.y=s.y)),I.map===null){const J=this.type!==Hi?{minFilter:dt,magFilter:dt}:{};I.map=new Vn(i.x,i.y,J),I.map.texture.name=D.name+".shadowMap",I.camera.updateProjectionMatrix()}r.setRenderTarget(I.map),r.clear();const Z=I.getViewportCount();for(let J=0;J<Z;J++){const V=I.getViewport(J);o.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),P.viewport(o),I.updateMatrices(D,J),n=I.getFrustum(),_(A,E,I.camera,D,this.type)}I.isPointLightShadow!==!0&&this.type===Hi&&v(I,E),I.needsUpdate=!1}m.needsUpdate=!1,r.setRenderTarget(L,y,T)};function v(x,A){const E=e.update(f);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Vn(i.x,i.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,r.setRenderTarget(x.mapPass),r.clear(),r.renderBufferDirect(A,null,E,d,f,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,r.setRenderTarget(x.map),r.clear(),r.renderBufferDirect(A,null,E,p,f,null)}function b(x,A,E,L,y,T){let P=null;const U=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(U!==void 0)P=U;else if(P=E.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const X=P.uuid,D=A.uuid;let I=c[X];I===void 0&&(I={},c[X]=I);let z=I[D];z===void 0&&(z=P.clone(),I[D]=z),P=z}return P.visible=A.visible,P.wireframe=A.wireframe,T===Hi?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:u[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,E.isPointLight===!0&&P.isMeshDistanceMaterial===!0&&(P.referencePosition.setFromMatrixPosition(E.matrixWorld),P.nearDistance=L,P.farDistance=y),P}function _(x,A,E,L,y){if(x.visible===!1)return;if(x.layers.test(A.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===Hi)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const U=e.update(x),X=x.material;if(Array.isArray(X)){const D=U.groups;for(let I=0,z=D.length;I<z;I++){const Z=D[I],J=X[Z.materialIndex];if(J&&J.visible){const V=b(x,J,L,E.near,E.far,y);r.renderBufferDirect(E,null,U,V,x,Z)}}}else if(X.visible){const D=b(x,X,L,E.near,E.far,y);r.renderBufferDirect(E,null,U,D,x,null)}}const P=x.children;for(let U=0,X=P.length;U<X;U++)_(P[U],A,E,L,y)}}function cg(r,e,t){const n=t.isWebGL2;function i(){let R=!1;const H=new Xe;let ee=null;const ue=new Xe(0,0,0,0);return{setMask:function(ge){ee!==ge&&!R&&(r.colorMask(ge,ge,ge,ge),ee=ge)},setLocked:function(ge){R=ge},setClear:function(ge,Ke,ct,vt,Zt){Zt===!0&&(ge*=vt,Ke*=vt,ct*=vt),H.set(ge,Ke,ct,vt),ue.equals(H)===!1&&(r.clearColor(ge,Ke,ct,vt),ue.copy(H))},reset:function(){R=!1,ee=null,ue.set(-1,0,0,0)}}}function s(){let R=!1,H=null,ee=null,ue=null;return{setTest:function(ge){ge?le(2929):pe(2929)},setMask:function(ge){H!==ge&&!R&&(r.depthMask(ge),H=ge)},setFunc:function(ge){if(ee!==ge){switch(ge){case gh:r.depthFunc(512);break;case _h:r.depthFunc(519);break;case vh:r.depthFunc(513);break;case Vr:r.depthFunc(515);break;case xh:r.depthFunc(514);break;case yh:r.depthFunc(518);break;case bh:r.depthFunc(516);break;case Mh:r.depthFunc(517);break;default:r.depthFunc(515)}ee=ge}},setLocked:function(ge){R=ge},setClear:function(ge){ue!==ge&&(r.clearDepth(ge),ue=ge)},reset:function(){R=!1,H=null,ee=null,ue=null}}}function o(){let R=!1,H=null,ee=null,ue=null,ge=null,Ke=null,ct=null,vt=null,Zt=null;return{setTest:function(tt){R||(tt?le(2960):pe(2960))},setMask:function(tt){H!==tt&&!R&&(r.stencilMask(tt),H=tt)},setFunc:function(tt,kt,Yt){(ee!==tt||ue!==kt||ge!==Yt)&&(r.stencilFunc(tt,kt,Yt),ee=tt,ue=kt,ge=Yt)},setOp:function(tt,kt,Yt){(Ke!==tt||ct!==kt||vt!==Yt)&&(r.stencilOp(tt,kt,Yt),Ke=tt,ct=kt,vt=Yt)},setLocked:function(tt){R=tt},setClear:function(tt){Zt!==tt&&(r.clearStencil(tt),Zt=tt)},reset:function(){R=!1,H=null,ee=null,ue=null,ge=null,Ke=null,ct=null,vt=null,Zt=null}}}const a=new i,l=new s,c=new o,h=new WeakMap,u=new WeakMap;let d={},p={},g=new WeakMap,f=[],m=null,v=!1,b=null,_=null,x=null,A=null,E=null,L=null,y=null,T=!1,P=null,U=null,X=null,D=null,I=null;const z=r.getParameter(35661);let Z=!1,J=0;const V=r.getParameter(7938);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),Z=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Z=J>=2);let Q=null,Y={};const fe=r.getParameter(3088),O=r.getParameter(2978),K=new Xe().fromArray(fe),se=new Xe().fromArray(O);function N(R,H,ee){const ue=new Uint8Array(4),ge=r.createTexture();r.bindTexture(R,ge),r.texParameteri(R,10241,9728),r.texParameteri(R,10240,9728);for(let Ke=0;Ke<ee;Ke++)r.texImage2D(H+Ke,0,6408,1,1,0,6408,5121,ue);return ge}const de={};de[3553]=N(3553,3553,1),de[34067]=N(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),le(2929),l.setFunc(Vr),ae(!1),Le(Xo),le(2884),ie(En);function le(R){d[R]!==!0&&(r.enable(R),d[R]=!0)}function pe(R){d[R]!==!1&&(r.disable(R),d[R]=!1)}function me(R,H){return p[R]!==H?(r.bindFramebuffer(R,H),p[R]=H,n&&(R===36009&&(p[36160]=H),R===36160&&(p[36009]=H)),!0):!1}function xe(R,H){let ee=f,ue=!1;if(R)if(ee=g.get(H),ee===void 0&&(ee=[],g.set(H,ee)),R.isWebGLMultipleRenderTargets){const ge=R.texture;if(ee.length!==ge.length||ee[0]!==36064){for(let Ke=0,ct=ge.length;Ke<ct;Ke++)ee[Ke]=36064+Ke;ee.length=ge.length,ue=!0}}else ee[0]!==36064&&(ee[0]=36064,ue=!0);else ee[0]!==1029&&(ee[0]=1029,ue=!0);ue&&(t.isWebGL2?r.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function Ce(R){return m!==R?(r.useProgram(R),m=R,!0):!1}const j={[ai]:32774,[rh]:32778,[oh]:32779};if(n)j[Ko]=32775,j[Jo]=32776;else{const R=e.get("EXT_blend_minmax");R!==null&&(j[Ko]=R.MIN_EXT,j[Jo]=R.MAX_EXT)}const $={[ah]:0,[lh]:1,[ch]:768,[Ul]:770,[mh]:776,[fh]:774,[uh]:772,[hh]:769,[Gl]:771,[ph]:775,[dh]:773};function ie(R,H,ee,ue,ge,Ke,ct,vt){if(R===En){v===!0&&(pe(3042),v=!1);return}if(v===!1&&(le(3042),v=!0),R!==sh){if(R!==b||vt!==T){if((_!==ai||E!==ai)&&(r.blendEquation(32774),_=ai,E=ai),vt)switch(R){case di:r.blendFuncSeparate(1,771,1,771);break;case Gr:r.blendFunc(1,1);break;case Zo:r.blendFuncSeparate(0,769,0,1);break;case Yo:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case di:r.blendFuncSeparate(770,771,1,771);break;case Gr:r.blendFunc(770,1);break;case Zo:r.blendFuncSeparate(0,769,0,1);break;case Yo:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}x=null,A=null,L=null,y=null,b=R,T=vt}return}ge=ge||H,Ke=Ke||ee,ct=ct||ue,(H!==_||ge!==E)&&(r.blendEquationSeparate(j[H],j[ge]),_=H,E=ge),(ee!==x||ue!==A||Ke!==L||ct!==y)&&(r.blendFuncSeparate($[ee],$[ue],$[Ke],$[ct]),x=ee,A=ue,L=Ke,y=ct),b=R,T=!1}function ye(R,H){R.side===Ut?pe(2884):le(2884);let ee=R.side===Dt;H&&(ee=!ee),ae(ee),R.blending===di&&R.transparent===!1?ie(En):ie(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.premultipliedAlpha),l.setFunc(R.depthFunc),l.setTest(R.depthTest),l.setMask(R.depthWrite),a.setMask(R.colorWrite);const ue=R.stencilWrite;c.setTest(ue),ue&&(c.setMask(R.stencilWriteMask),c.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),c.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Pe(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?le(32926):pe(32926)}function ae(R){P!==R&&(R?r.frontFace(2304):r.frontFace(2305),P=R)}function Le(R){R!==th?(le(2884),R!==U&&(R===Xo?r.cullFace(1029):R===nh?r.cullFace(1028):r.cullFace(1032))):pe(2884),U=R}function Se(R){R!==X&&(Z&&r.lineWidth(R),X=R)}function Pe(R,H,ee){R?(le(32823),(D!==H||I!==ee)&&(r.polygonOffset(H,ee),D=H,I=ee)):pe(32823)}function Ye(R){R?le(3089):pe(3089)}function je(R){R===void 0&&(R=33984+z-1),Q!==R&&(r.activeTexture(R),Q=R)}function w(R,H,ee){ee===void 0&&(Q===null?ee=33984+z-1:ee=Q);let ue=Y[ee];ue===void 0&&(ue={type:void 0,texture:void 0},Y[ee]=ue),(ue.type!==R||ue.texture!==H)&&(Q!==ee&&(r.activeTexture(ee),Q=ee),r.bindTexture(R,H||de[R]),ue.type=R,ue.texture=H)}function M(){const R=Y[Q];R!==void 0&&R.type!==void 0&&(r.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function B(){try{r.compressedTexImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ne(){try{r.texSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{r.texSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Me(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function he(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function q(){try{r.texStorage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Te(){try{r.texStorage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{r.texImage2D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Re(){try{r.texImage3D.apply(r,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(R){K.equals(R)===!1&&(r.scissor(R.x,R.y,R.z,R.w),K.copy(R))}function we(R){se.equals(R)===!1&&(r.viewport(R.x,R.y,R.z,R.w),se.copy(R))}function Ve(R,H){let ee=u.get(H);ee===void 0&&(ee=new WeakMap,u.set(H,ee));let ue=ee.get(R);ue===void 0&&(ue=r.getUniformBlockIndex(H,R.name),ee.set(R,ue))}function $e(R,H){const ue=u.get(H).get(R);h.get(H)!==ue&&(r.uniformBlockBinding(H,ue,R.__bindingPointIndex),h.set(H,ue))}function lt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),d={},Q=null,Y={},p={},g=new WeakMap,f=[],m=null,v=!1,b=null,_=null,x=null,A=null,E=null,L=null,y=null,T=!1,P=null,U=null,X=null,D=null,I=null,K.set(0,0,r.canvas.width,r.canvas.height),se.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:le,disable:pe,bindFramebuffer:me,drawBuffers:xe,useProgram:Ce,setBlending:ie,setMaterial:ye,setFlipSided:ae,setCullFace:Le,setLineWidth:Se,setPolygonOffset:Pe,setScissorTest:Ye,activeTexture:je,bindTexture:w,unbindTexture:M,compressedTexImage2D:B,compressedTexImage3D:te,texImage2D:ve,texImage3D:Re,updateUBOMapping:Ve,uniformBlockBinding:$e,texStorage2D:q,texStorage3D:Te,texSubImage2D:ne,texSubImage3D:ce,compressedTexSubImage2D:Me,compressedTexSubImage3D:he,scissor:Ee,viewport:we,reset:lt}}function hg(r,e,t,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let f;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(w,M){return v?new OffscreenCanvas(w,M):Qi("canvas")}function _(w,M,B,te){let ne=1;if((w.width>te||w.height>te)&&(ne=te/Math.max(w.width,w.height)),ne<1||M===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const ce=M?Kl:Math.floor,Me=ce(ne*w.width),he=ce(ne*w.height);f===void 0&&(f=b(Me,he));const q=B?b(Me,he):f;return q.width=Me,q.height=he,q.getContext("2d").drawImage(w,0,0,Me,he),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+Me+"x"+he+")."),q}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function x(w){return Yr(w.width)&&Yr(w.height)}function A(w){return a?!1:w.wrapS!==zt||w.wrapT!==zt||w.minFilter!==dt&&w.minFilter!==Ct}function E(w,M){return w.generateMipmaps&&M&&w.minFilter!==dt&&w.minFilter!==Ct}function L(w){r.generateMipmap(w)}function y(w,M,B,te,ne=!1){if(a===!1)return M;if(w!==null){if(r[w]!==void 0)return r[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce=M;return M===6403&&(B===5126&&(ce=33326),B===5131&&(ce=33325),B===5121&&(ce=33321)),M===33319&&(B===5126&&(ce=33328),B===5131&&(ce=33327),B===5121&&(ce=33323)),M===6408&&(B===5126&&(ce=34836),B===5131&&(ce=34842),B===5121&&(ce=te===We&&ne===!1?35907:32856),B===32819&&(ce=32854),B===32820&&(ce=32855)),(ce===33325||ce===33326||ce===33327||ce===33328||ce===34842||ce===34836)&&e.get("EXT_color_buffer_float"),ce}function T(w,M,B){return E(w,B)===!0||w.isFramebufferTexture&&w.minFilter!==dt&&w.minFilter!==Ct?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function P(w){return w===dt||w===qr||w===ks?9728:9729}function U(w){const M=w.target;M.removeEventListener("dispose",U),D(M),M.isVideoTexture&&g.delete(M)}function X(w){const M=w.target;M.removeEventListener("dispose",X),z(M)}function D(w){const M=n.get(w);if(M.__webglInit===void 0)return;const B=w.source,te=m.get(B);if(te){const ne=te[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(w),Object.keys(te).length===0&&m.delete(B)}n.remove(w)}function I(w){const M=n.get(w);r.deleteTexture(M.__webglTexture);const B=w.source,te=m.get(B);delete te[M.__cacheKey],o.memory.textures--}function z(w){const M=w.texture,B=n.get(w),te=n.get(M);if(te.__webglTexture!==void 0&&(r.deleteTexture(te.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)r.deleteFramebuffer(B.__webglFramebuffer[ne]),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer[ne]);else{if(r.deleteFramebuffer(B.__webglFramebuffer),B.__webglDepthbuffer&&r.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&r.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let ne=0;ne<B.__webglColorRenderbuffer.length;ne++)B.__webglColorRenderbuffer[ne]&&r.deleteRenderbuffer(B.__webglColorRenderbuffer[ne]);B.__webglDepthRenderbuffer&&r.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ne=0,ce=M.length;ne<ce;ne++){const Me=n.get(M[ne]);Me.__webglTexture&&(r.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(M[ne])}n.remove(M),n.remove(w)}let Z=0;function J(){Z=0}function V(){const w=Z;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),Z+=1,w}function Q(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.encoding),M.join()}function Y(w,M){const B=n.get(w);if(w.isVideoTexture&&Ye(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const te=w.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(B,w,M);return}}t.bindTexture(3553,B.__webglTexture,33984+M)}function fe(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){pe(B,w,M);return}t.bindTexture(35866,B.__webglTexture,33984+M)}function O(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){pe(B,w,M);return}t.bindTexture(32879,B.__webglTexture,33984+M)}function K(w,M){const B=n.get(w);if(w.version>0&&B.__version!==w.version){me(B,w,M);return}t.bindTexture(34067,B.__webglTexture,33984+M)}const se={[$t]:10497,[zt]:33071,[Os]:33648},N={[dt]:9728,[qr]:9984,[ks]:9986,[Ct]:9729,[Wl]:9985,[Bn]:9987};function de(w,M,B){if(B?(r.texParameteri(w,10242,se[M.wrapS]),r.texParameteri(w,10243,se[M.wrapT]),(w===32879||w===35866)&&r.texParameteri(w,32882,se[M.wrapR]),r.texParameteri(w,10240,N[M.magFilter]),r.texParameteri(w,10241,N[M.minFilter])):(r.texParameteri(w,10242,33071),r.texParameteri(w,10243,33071),(w===32879||w===35866)&&r.texParameteri(w,32882,33071),(M.wrapS!==zt||M.wrapT!==zt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(w,10240,P(M.magFilter)),r.texParameteri(w,10241,P(M.minFilter)),M.minFilter!==dt&&M.minFilter!==Ct&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===dt||M.minFilter!==ks&&M.minFilter!==Bn||M.type===An&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===Ki&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(w,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function le(w,M){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",U));const te=M.source;let ne=m.get(te);ne===void 0&&(ne={},m.set(te,ne));const ce=Q(M);if(ce!==w.__cacheKey){ne[ce]===void 0&&(ne[ce]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[ce].usedTimes++;const Me=ne[w.__cacheKey];Me!==void 0&&(ne[w.__cacheKey].usedTimes--,Me.usedTimes===0&&I(M)),w.__cacheKey=ce,w.__webglTexture=ne[ce].texture}return B}function pe(w,M,B){let te=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(te=35866),M.isData3DTexture&&(te=32879);const ne=le(w,M),ce=M.source;t.bindTexture(te,w.__webglTexture,33984+B);const Me=n.get(ce);if(ce.version!==Me.__version||ne===!0){t.activeTexture(33984+B),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const he=A(M)&&x(M.image)===!1;let q=_(M.image,he,!1,h);q=je(M,q);const Te=x(q)||a,ve=s.convert(M.format,M.encoding);let Re=s.convert(M.type),Ee=y(M.internalFormat,ve,Re,M.encoding,M.isVideoTexture);de(te,M,Te);let we;const Ve=M.mipmaps,$e=a&&M.isVideoTexture!==!0,lt=Me.__version===void 0||ne===!0,R=T(M,q,Te);if(M.isDepthTexture)Ee=6402,a?M.type===An?Ee=36012:M.type===On?Ee=33190:M.type===fi?Ee=35056:Ee=33189:M.type===An&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===zn&&Ee===6402&&M.type!==ql&&M.type!==On&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=On,Re=s.convert(M.type)),M.format===yi&&Ee===6402&&(Ee=34041,M.type!==fi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=fi,Re=s.convert(M.type))),lt&&($e?t.texStorage2D(3553,1,Ee,q.width,q.height):t.texImage2D(3553,0,Ee,q.width,q.height,0,ve,Re,null));else if(M.isDataTexture)if(Ve.length>0&&Te){$e&&lt&&t.texStorage2D(3553,R,Ee,Ve[0].width,Ve[0].height);for(let H=0,ee=Ve.length;H<ee;H++)we=Ve[H],$e?t.texSubImage2D(3553,H,0,0,we.width,we.height,ve,Re,we.data):t.texImage2D(3553,H,Ee,we.width,we.height,0,ve,Re,we.data);M.generateMipmaps=!1}else $e?(lt&&t.texStorage2D(3553,R,Ee,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,ve,Re,q.data)):t.texImage2D(3553,0,Ee,q.width,q.height,0,ve,Re,q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$e&&lt&&t.texStorage3D(35866,R,Ee,Ve[0].width,Ve[0].height,q.depth);for(let H=0,ee=Ve.length;H<ee;H++)we=Ve[H],M.format!==Bt?ve!==null?$e?t.compressedTexSubImage3D(35866,H,0,0,0,we.width,we.height,q.depth,ve,we.data,0,0):t.compressedTexImage3D(35866,H,Ee,we.width,we.height,q.depth,0,we.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(35866,H,0,0,0,we.width,we.height,q.depth,ve,Re,we.data):t.texImage3D(35866,H,Ee,we.width,we.height,q.depth,0,ve,Re,we.data)}else{$e&&lt&&t.texStorage2D(3553,R,Ee,Ve[0].width,Ve[0].height);for(let H=0,ee=Ve.length;H<ee;H++)we=Ve[H],M.format!==Bt?ve!==null?$e?t.compressedTexSubImage2D(3553,H,0,0,we.width,we.height,ve,we.data):t.compressedTexImage2D(3553,H,Ee,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(3553,H,0,0,we.width,we.height,ve,Re,we.data):t.texImage2D(3553,H,Ee,we.width,we.height,0,ve,Re,we.data)}else if(M.isDataArrayTexture)$e?(lt&&t.texStorage3D(35866,R,Ee,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,ve,Re,q.data)):t.texImage3D(35866,0,Ee,q.width,q.height,q.depth,0,ve,Re,q.data);else if(M.isData3DTexture)$e?(lt&&t.texStorage3D(32879,R,Ee,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,ve,Re,q.data)):t.texImage3D(32879,0,Ee,q.width,q.height,q.depth,0,ve,Re,q.data);else if(M.isFramebufferTexture){if(lt)if($e)t.texStorage2D(3553,R,Ee,q.width,q.height);else{let H=q.width,ee=q.height;for(let ue=0;ue<R;ue++)t.texImage2D(3553,ue,Ee,H,ee,0,ve,Re,null),H>>=1,ee>>=1}}else if(Ve.length>0&&Te){$e&&lt&&t.texStorage2D(3553,R,Ee,Ve[0].width,Ve[0].height);for(let H=0,ee=Ve.length;H<ee;H++)we=Ve[H],$e?t.texSubImage2D(3553,H,0,0,ve,Re,we):t.texImage2D(3553,H,Ee,ve,Re,we);M.generateMipmaps=!1}else $e?(lt&&t.texStorage2D(3553,R,Ee,q.width,q.height),t.texSubImage2D(3553,0,0,0,ve,Re,q)):t.texImage2D(3553,0,Ee,ve,Re,q);E(M,Te)&&L(te),Me.__version=ce.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function me(w,M,B){if(M.image.length!==6)return;const te=le(w,M),ne=M.source;t.bindTexture(34067,w.__webglTexture,33984+B);const ce=n.get(ne);if(ne.version!==ce.__version||te===!0){t.activeTexture(33984+B),r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const Me=M.isCompressedTexture||M.image[0].isCompressedTexture,he=M.image[0]&&M.image[0].isDataTexture,q=[];for(let H=0;H<6;H++)!Me&&!he?q[H]=_(M.image[H],!1,!0,c):q[H]=he?M.image[H].image:M.image[H],q[H]=je(M,q[H]);const Te=q[0],ve=x(Te)||a,Re=s.convert(M.format,M.encoding),Ee=s.convert(M.type),we=y(M.internalFormat,Re,Ee,M.encoding),Ve=a&&M.isVideoTexture!==!0,$e=ce.__version===void 0||te===!0;let lt=T(M,Te,ve);de(34067,M,ve);let R;if(Me){Ve&&$e&&t.texStorage2D(34067,lt,we,Te.width,Te.height);for(let H=0;H<6;H++){R=q[H].mipmaps;for(let ee=0;ee<R.length;ee++){const ue=R[ee];M.format!==Bt?Re!==null?Ve?t.compressedTexSubImage2D(34069+H,ee,0,0,ue.width,ue.height,Re,ue.data):t.compressedTexImage2D(34069+H,ee,we,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?t.texSubImage2D(34069+H,ee,0,0,ue.width,ue.height,Re,Ee,ue.data):t.texImage2D(34069+H,ee,we,ue.width,ue.height,0,Re,Ee,ue.data)}}}else{R=M.mipmaps,Ve&&$e&&(R.length>0&&lt++,t.texStorage2D(34067,lt,we,q[0].width,q[0].height));for(let H=0;H<6;H++)if(he){Ve?t.texSubImage2D(34069+H,0,0,0,q[H].width,q[H].height,Re,Ee,q[H].data):t.texImage2D(34069+H,0,we,q[H].width,q[H].height,0,Re,Ee,q[H].data);for(let ee=0;ee<R.length;ee++){const ge=R[ee].image[H].image;Ve?t.texSubImage2D(34069+H,ee+1,0,0,ge.width,ge.height,Re,Ee,ge.data):t.texImage2D(34069+H,ee+1,we,ge.width,ge.height,0,Re,Ee,ge.data)}}else{Ve?t.texSubImage2D(34069+H,0,0,0,Re,Ee,q[H]):t.texImage2D(34069+H,0,we,Re,Ee,q[H]);for(let ee=0;ee<R.length;ee++){const ue=R[ee];Ve?t.texSubImage2D(34069+H,ee+1,0,0,Re,Ee,ue.image[H]):t.texImage2D(34069+H,ee+1,we,Re,Ee,ue.image[H])}}}E(M,ve)&&L(34067),ce.__version=ne.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function xe(w,M,B,te,ne){const ce=s.convert(B.format,B.encoding),Me=s.convert(B.type),he=y(B.internalFormat,ce,Me,B.encoding);n.get(M).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,he,M.width,M.height,M.depth,0,ce,Me,null):t.texImage2D(ne,0,he,M.width,M.height,0,ce,Me,null)),t.bindFramebuffer(36160,w),Pe(M)?d.framebufferTexture2DMultisampleEXT(36160,te,ne,n.get(B).__webglTexture,0,Se(M)):(ne===3553||ne>=34069&&ne<=34074)&&r.framebufferTexture2D(36160,te,ne,n.get(B).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ce(w,M,B){if(r.bindRenderbuffer(36161,w),M.depthBuffer&&!M.stencilBuffer){let te=33189;if(B||Pe(M)){const ne=M.depthTexture;ne&&ne.isDepthTexture&&(ne.type===An?te=36012:ne.type===On&&(te=33190));const ce=Se(M);Pe(M)?d.renderbufferStorageMultisampleEXT(36161,ce,te,M.width,M.height):r.renderbufferStorageMultisample(36161,ce,te,M.width,M.height)}else r.renderbufferStorage(36161,te,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,w)}else if(M.depthBuffer&&M.stencilBuffer){const te=Se(M);B&&Pe(M)===!1?r.renderbufferStorageMultisample(36161,te,35056,M.width,M.height):Pe(M)?d.renderbufferStorageMultisampleEXT(36161,te,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,w)}else{const te=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ne=0;ne<te.length;ne++){const ce=te[ne],Me=s.convert(ce.format,ce.encoding),he=s.convert(ce.type),q=y(ce.internalFormat,Me,he,ce.encoding),Te=Se(M);B&&Pe(M)===!1?r.renderbufferStorageMultisample(36161,Te,q,M.width,M.height):Pe(M)?d.renderbufferStorageMultisampleEXT(36161,Te,q,M.width,M.height):r.renderbufferStorage(36161,q,M.width,M.height)}}r.bindRenderbuffer(36161,null)}function j(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Y(M.depthTexture,0);const te=n.get(M.depthTexture).__webglTexture,ne=Se(M);if(M.depthTexture.format===zn)Pe(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):r.framebufferTexture2D(36160,36096,3553,te,0);else if(M.depthTexture.format===yi)Pe(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):r.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function $(w){const M=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");j(M.__webglFramebuffer,w)}else if(B){M.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,M.__webglFramebuffer[te]),M.__webglDepthbuffer[te]=r.createRenderbuffer(),Ce(M.__webglDepthbuffer[te],w,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Ce(M.__webglDepthbuffer,w,!1);t.bindFramebuffer(36160,null)}function ie(w,M,B){const te=n.get(w);M!==void 0&&xe(te.__webglFramebuffer,w,w.texture,36064,3553),B!==void 0&&$(w)}function ye(w){const M=w.texture,B=n.get(w),te=n.get(M);w.addEventListener("dispose",X),w.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture()),te.__version=M.version,o.memory.textures++);const ne=w.isWebGLCubeRenderTarget===!0,ce=w.isWebGLMultipleRenderTargets===!0,Me=x(w)||a;if(ne){B.__webglFramebuffer=[];for(let he=0;he<6;he++)B.__webglFramebuffer[he]=r.createFramebuffer()}else{if(B.__webglFramebuffer=r.createFramebuffer(),ce)if(i.drawBuffers){const he=w.texture;for(let q=0,Te=he.length;q<Te;q++){const ve=n.get(he[q]);ve.__webglTexture===void 0&&(ve.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&Pe(w)===!1){const he=ce?M:[M];B.__webglMultisampledFramebuffer=r.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,B.__webglMultisampledFramebuffer);for(let q=0;q<he.length;q++){const Te=he[q];B.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(36161,B.__webglColorRenderbuffer[q]);const ve=s.convert(Te.format,Te.encoding),Re=s.convert(Te.type),Ee=y(Te.internalFormat,ve,Re,Te.encoding,w.isXRRenderTarget===!0),we=Se(w);r.renderbufferStorageMultisample(36161,we,Ee,w.width,w.height),r.framebufferRenderbuffer(36160,36064+q,36161,B.__webglColorRenderbuffer[q])}r.bindRenderbuffer(36161,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=r.createRenderbuffer(),Ce(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),de(34067,M,Me);for(let he=0;he<6;he++)xe(B.__webglFramebuffer[he],w,M,36064,34069+he);E(M,Me)&&L(34067),t.unbindTexture()}else if(ce){const he=w.texture;for(let q=0,Te=he.length;q<Te;q++){const ve=he[q],Re=n.get(ve);t.bindTexture(3553,Re.__webglTexture),de(3553,ve,Me),xe(B.__webglFramebuffer,w,ve,36064+q,3553),E(ve,Me)&&L(3553)}t.unbindTexture()}else{let he=3553;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?he=w.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(he,te.__webglTexture),de(he,M,Me),xe(B.__webglFramebuffer,w,M,36064,he),E(M,Me)&&L(he),t.unbindTexture()}w.depthBuffer&&$(w)}function ae(w){const M=x(w)||a,B=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let te=0,ne=B.length;te<ne;te++){const ce=B[te];if(E(ce,M)){const Me=w.isWebGLCubeRenderTarget?34067:3553,he=n.get(ce).__webglTexture;t.bindTexture(Me,he),L(Me),t.unbindTexture()}}}function Le(w){if(a&&w.samples>0&&Pe(w)===!1){const M=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],B=w.width,te=w.height;let ne=16384;const ce=[],Me=w.stencilBuffer?33306:36096,he=n.get(w),q=w.isWebGLMultipleRenderTargets===!0;if(q)for(let Te=0;Te<M.length;Te++)t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Te,36161,null),t.bindFramebuffer(36160,he.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Te,3553,null,0);t.bindFramebuffer(36008,he.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,he.__webglFramebuffer);for(let Te=0;Te<M.length;Te++){ce.push(36064+Te),w.depthBuffer&&ce.push(Me);const ve=he.__ignoreDepthValues!==void 0?he.__ignoreDepthValues:!1;if(ve===!1&&(w.depthBuffer&&(ne|=256),w.stencilBuffer&&(ne|=1024)),q&&r.framebufferRenderbuffer(36008,36064,36161,he.__webglColorRenderbuffer[Te]),ve===!0&&(r.invalidateFramebuffer(36008,[Me]),r.invalidateFramebuffer(36009,[Me])),q){const Re=n.get(M[Te]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Re,0)}r.blitFramebuffer(0,0,B,te,0,0,B,te,ne,9728),p&&r.invalidateFramebuffer(36008,ce)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let Te=0;Te<M.length;Te++){t.bindFramebuffer(36160,he.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+Te,36161,he.__webglColorRenderbuffer[Te]);const ve=n.get(M[Te]).__webglTexture;t.bindFramebuffer(36160,he.__webglFramebuffer),r.framebufferTexture2D(36009,36064+Te,3553,ve,0)}t.bindFramebuffer(36009,he.__webglMultisampledFramebuffer)}}function Se(w){return Math.min(u,w.samples)}function Pe(w){const M=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ye(w){const M=o.render.frame;g.get(w)!==M&&(g.set(w,M),w.update())}function je(w,M){const B=w.encoding,te=w.format,ne=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Zr||B!==Gn&&(B===We?a===!1?e.has("EXT_sRGB")===!0&&te===Bt?(w.format=Zr,w.minFilter=Ct,w.generateMipmaps=!1):M=$l.sRGBToLinear(M):(te!==Bt||ne!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",B)),M}this.allocateTextureUnit=V,this.resetTextureUnits=J,this.setTexture2D=Y,this.setTexture2DArray=fe,this.setTexture3D=O,this.setTextureCube=K,this.rebindTextures=ie,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Pe}function ug(r,e,t){const n=t.isWebGL2;function i(s,o=null){let a;if(s===Un)return 5121;if(s===Dh)return 32819;if(s===kh)return 32820;if(s===Ph)return 5120;if(s===Rh)return 5122;if(s===ql)return 5123;if(s===Ih)return 5124;if(s===On)return 5125;if(s===An)return 5126;if(s===Ki)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Nh)return 6406;if(s===Bt)return 6408;if(s===Fh)return 6409;if(s===Oh)return 6410;if(s===zn)return 6402;if(s===yi)return 34041;if(s===Zr)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===zh)return 6403;if(s===Bh)return 36244;if(s===Uh)return 33319;if(s===Gh)return 33320;if(s===Vh)return 36249;if(s===Qs||s===er||s===tr||s===nr)if(o===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===er)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===nr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===er)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===nr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$o||s===Qo||s===ea||s===ta)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===$o)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ea)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ta)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Hh)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===na||s===ia)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===na)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ia)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sa||s===ra||s===oa||s===aa||s===la||s===ca||s===ha||s===ua||s===da||s===fa||s===pa||s===ma||s===ga||s===_a)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===sa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ra)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===oa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===aa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===la)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ca)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ha)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ua)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===da)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===pa)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ma)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ga)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_a)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ir)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ir)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Wh||s===va||s===xa||s===ya)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===ir)return a.COMPRESSED_RED_RGTC1_EXT;if(s===va)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ya)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===fi?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:i}}class dg extends St{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Gt extends et{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fg={type:"move"};class Cr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const f of e.hand.values()){const m=t.getJointPose(f,n),v=this._getHandJoint(c,f);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=m.radius),v.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Gt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pg extends pt{constructor(e,t,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:zn,h!==zn&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zn&&(n=On),n===void 0&&h===yi&&(n=fi),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:dt,this.minFilter=l!==void 0?l:dt,this.flipY=!1,this.generateMipmaps=!1}}class mg extends qn{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const f=t.getContextAttributes();let m=null,v=null;const b=[],_=[],x=new Set,A=new Map,E=new St;E.layers.enable(1),E.viewport=new Xe;const L=new St;L.layers.enable(2),L.viewport=new Xe;const y=[E,L],T=new dg;T.layers.enable(1),T.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let K=b[O];return K===void 0&&(K=new Cr,b[O]=K),K.getTargetRaySpace()},this.getControllerGrip=function(O){let K=b[O];return K===void 0&&(K=new Cr,b[O]=K),K.getGripSpace()},this.getHand=function(O){let K=b[O];return K===void 0&&(K=new Cr,b[O]=K),K.getHandSpace()};function X(O){const K=_.indexOf(O.inputSource);if(K===-1)return;const se=b[K];se!==void 0&&se.dispatchEvent({type:O.type,data:O.inputSource})}function D(){i.removeEventListener("select",X),i.removeEventListener("selectstart",X),i.removeEventListener("selectend",X),i.removeEventListener("squeeze",X),i.removeEventListener("squeezestart",X),i.removeEventListener("squeezeend",X),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",I);for(let O=0;O<b.length;O++){const K=_[O];K!==null&&(_[O]=null,b[O].disconnect(K))}P=null,U=null,e.setRenderTarget(m),p=null,d=null,u=null,i=null,v=null,fe.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",X),i.addEventListener("selectstart",X),i.addEventListener("selectend",X),i.addEventListener("squeeze",X),i.addEventListener("squeezestart",X),i.addEventListener("squeezeend",X),i.addEventListener("end",D),i.addEventListener("inputsourceschange",I),f.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const K={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,t,K),i.updateRenderState({baseLayer:p}),v=new Vn(p.framebufferWidth,p.framebufferHeight,{format:Bt,type:Un,encoding:e.outputEncoding,stencilBuffer:f.stencil})}else{let K=null,se=null,N=null;f.depth&&(N=f.stencil?35056:33190,K=f.stencil?yi:zn,se=f.stencil?fi:On);const de={colorFormat:32856,depthFormat:N,scaleFactor:s};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(de),i.updateRenderState({layers:[d]}),v=new Vn(d.textureWidth,d.textureHeight,{format:Bt,type:Un,depthTexture:new pg(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:f.stencil,encoding:e.outputEncoding,samples:f.antialias?4:0});const le=e.properties.get(v);le.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),fe.setContext(i),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function I(O){for(let K=0;K<O.removed.length;K++){const se=O.removed[K],N=_.indexOf(se);N>=0&&(_[N]=null,b[N].disconnect(se))}for(let K=0;K<O.added.length;K++){const se=O.added[K];let N=_.indexOf(se);if(N===-1){for(let le=0;le<b.length;le++)if(le>=_.length){_.push(se),N=le;break}else if(_[le]===null){_[le]=se,N=le;break}if(N===-1)break}const de=b[N];de&&de.connect(se)}}const z=new C,Z=new C;function J(O,K,se){z.setFromMatrixPosition(K.matrixWorld),Z.setFromMatrixPosition(se.matrixWorld);const N=z.distanceTo(Z),de=K.projectionMatrix.elements,le=se.projectionMatrix.elements,pe=de[14]/(de[10]-1),me=de[14]/(de[10]+1),xe=(de[9]+1)/de[5],Ce=(de[9]-1)/de[5],j=(de[8]-1)/de[0],$=(le[8]+1)/le[0],ie=pe*j,ye=pe*$,ae=N/(-j+$),Le=ae*-j;K.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Le),O.translateZ(ae),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Se=pe+ae,Pe=me+ae,Ye=ie-Le,je=ye+(N-Le),w=xe*me/Pe*Se,M=Ce*me/Pe*Se;O.projectionMatrix.makePerspective(Ye,je,w,M,Se,Pe)}function V(O,K){K===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(K.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;T.near=L.near=E.near=O.near,T.far=L.far=E.far=O.far,(P!==T.near||U!==T.far)&&(i.updateRenderState({depthNear:T.near,depthFar:T.far}),P=T.near,U=T.far);const K=O.parent,se=T.cameras;V(T,K);for(let de=0;de<se.length;de++)V(se[de],K);T.matrixWorld.decompose(T.position,T.quaternion,T.scale),O.matrix.copy(T.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale);const N=O.children;for(let de=0,le=N.length;de<le;de++)N[de].updateMatrixWorld(!0);se.length===2?J(T,E,L):T.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return T},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=O)},this.getPlanes=function(){return x};let Q=null;function Y(O,K){if(h=K.getViewerPose(c||o),g=K,h!==null){const se=h.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let N=!1;se.length!==T.cameras.length&&(T.cameras.length=0,N=!0);for(let de=0;de<se.length;de++){const le=se[de];let pe=null;if(p!==null)pe=p.getViewport(le);else{const xe=u.getViewSubImage(d,le);pe=xe.viewport,de===0&&(e.setRenderTargetTextures(v,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(v))}let me=y[de];me===void 0&&(me=new St,me.layers.enable(de),me.viewport=new Xe,y[de]=me),me.matrix.fromArray(le.transform.matrix),me.projectionMatrix.fromArray(le.projectionMatrix),me.viewport.set(pe.x,pe.y,pe.width,pe.height),de===0&&T.matrix.copy(me.matrix),N===!0&&T.cameras.push(me)}}for(let se=0;se<b.length;se++){const N=_[se],de=b[se];N!==null&&de!==void 0&&de.update(N,K,c||o)}if(Q&&Q(O,K),K.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:K.detectedPlanes});let se=null;for(const N of x)K.detectedPlanes.has(N)||(se===null&&(se=[]),se.push(N));if(se!==null)for(const N of se)x.delete(N),A.delete(N),n.dispatchEvent({type:"planeremoved",data:N});for(const N of K.detectedPlanes)if(!x.has(N))x.add(N),A.set(N,K.lastChangedTime),n.dispatchEvent({type:"planeadded",data:N});else{const de=A.get(N);N.lastChangedTime>de&&(A.set(N,N.lastChangedTime),n.dispatchEvent({type:"planechanged",data:N}))}}g=null}const fe=new ac;fe.setAnimationLoop(Y),this.setAnimationLoop=function(O){Q=O},this.dispose=function(){}}}function gg(r,e){function t(f,m){m.color.getRGB(f.fogColor.value,sc(r)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function n(f,m,v,b,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(f,m):m.isMeshToonMaterial?(i(f,m),h(f,m)):m.isMeshPhongMaterial?(i(f,m),c(f,m)):m.isMeshStandardMaterial?(i(f,m),u(f,m),m.isMeshPhysicalMaterial&&d(f,m,_)):m.isMeshMatcapMaterial?(i(f,m),p(f,m)):m.isMeshDepthMaterial?i(f,m):m.isMeshDistanceMaterial?(i(f,m),g(f,m)):m.isMeshNormalMaterial?i(f,m):m.isLineBasicMaterial?(s(f,m),m.isLineDashedMaterial&&o(f,m)):m.isPointsMaterial?a(f,m,v,b):m.isSpriteMaterial?l(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.bumpMap&&(f.bumpMap.value=m.bumpMap,f.bumpScale.value=m.bumpScale,m.side===Dt&&(f.bumpScale.value*=-1)),m.displacementMap&&(f.displacementMap.value=m.displacementMap,f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap),m.normalMap&&(f.normalMap.value=m.normalMap,f.normalScale.value.copy(m.normalScale),m.side===Dt&&f.normalScale.value.negate()),m.specularMap&&(f.specularMap.value=m.specularMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(f.envMap.value=v,f.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap){f.lightMap.value=m.lightMap;const x=r.useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=m.lightMapIntensity*x}m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity);let b;m.map?b=m.map:m.specularMap?b=m.specularMap:m.displacementMap?b=m.displacementMap:m.normalMap?b=m.normalMap:m.bumpMap?b=m.bumpMap:m.roughnessMap?b=m.roughnessMap:m.metalnessMap?b=m.metalnessMap:m.alphaMap?b=m.alphaMap:m.emissiveMap?b=m.emissiveMap:m.clearcoatMap?b=m.clearcoatMap:m.clearcoatNormalMap?b=m.clearcoatNormalMap:m.clearcoatRoughnessMap?b=m.clearcoatRoughnessMap:m.iridescenceMap?b=m.iridescenceMap:m.iridescenceThicknessMap?b=m.iridescenceThicknessMap:m.specularIntensityMap?b=m.specularIntensityMap:m.specularColorMap?b=m.specularColorMap:m.transmissionMap?b=m.transmissionMap:m.thicknessMap?b=m.thicknessMap:m.sheenColorMap?b=m.sheenColorMap:m.sheenRoughnessMap&&(b=m.sheenRoughnessMap),b!==void 0&&(b.isWebGLRenderTarget&&(b=b.texture),b.matrixAutoUpdate===!0&&b.updateMatrix(),f.uvTransform.value.copy(b.matrix));let _;m.aoMap?_=m.aoMap:m.lightMap&&(_=m.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uv2Transform.value.copy(_.matrix))}function s(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity}function o(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function a(f,m,v,b){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*v,f.scale.value=b*.5,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),f.uvTransform.value.copy(_.matrix))}function l(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map),m.alphaMap&&(f.alphaMap.value=m.alphaMap),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),f.uvTransform.value.copy(v.matrix))}function c(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function h(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function u(f,m){f.roughness.value=m.roughness,f.metalness.value=m.metalness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function d(f,m,v){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),f.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Dt&&f.clearcoatNormalScale.value.negate())),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=v.texture,f.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap)}function p(f,m){m.matcap&&(f.matcap.value=m.matcap)}function g(f,m){f.referencePosition.value.copy(m.referencePosition),f.nearDistance.value=m.nearDistance,f.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function _g(r,e,t,n){let i={},s={},o=[];const a=t.isWebGL2?r.getParameter(35375):0;function l(b,_){const x=_.program;n.uniformBlockBinding(b,x)}function c(b,_){let x=i[b.id];x===void 0&&(g(b),x=h(b),i[b.id]=x,b.addEventListener("dispose",m));const A=_.program;n.updateUBOMapping(b,A);const E=e.render.frame;s[b.id]!==E&&(d(b),s[b.id]=E)}function h(b){const _=u();b.__bindingPointIndex=_;const x=r.createBuffer(),A=b.__size,E=b.usage;return r.bindBuffer(35345,x),r.bufferData(35345,A,E),r.bindBuffer(35345,null),r.bindBufferBase(35345,_,x),x}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const _=i[b.id],x=b.uniforms,A=b.__cache;r.bindBuffer(35345,_);for(let E=0,L=x.length;E<L;E++){const y=x[E];if(p(y,E,A)===!0){const T=y.__offset,P=Array.isArray(y.value)?y.value:[y.value];let U=0;for(let X=0;X<P.length;X++){const D=P[X],I=f(D);typeof D=="number"?(y.__data[0]=D,r.bufferSubData(35345,T+U,y.__data)):D.isMatrix3?(y.__data[0]=D.elements[0],y.__data[1]=D.elements[1],y.__data[2]=D.elements[2],y.__data[3]=D.elements[0],y.__data[4]=D.elements[3],y.__data[5]=D.elements[4],y.__data[6]=D.elements[5],y.__data[7]=D.elements[0],y.__data[8]=D.elements[6],y.__data[9]=D.elements[7],y.__data[10]=D.elements[8],y.__data[11]=D.elements[0]):(D.toArray(y.__data,U),U+=I.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,T,y.__data)}}r.bindBuffer(35345,null)}function p(b,_,x){const A=b.value;if(x[_]===void 0){if(typeof A=="number")x[_]=A;else{const E=Array.isArray(A)?A:[A],L=[];for(let y=0;y<E.length;y++)L.push(E[y].clone());x[_]=L}return!0}else if(typeof A=="number"){if(x[_]!==A)return x[_]=A,!0}else{const E=Array.isArray(x[_])?x[_]:[x[_]],L=Array.isArray(A)?A:[A];for(let y=0;y<E.length;y++){const T=E[y];if(T.equals(L[y])===!1)return T.copy(L[y]),!0}}return!1}function g(b){const _=b.uniforms;let x=0;const A=16;let E=0;for(let L=0,y=_.length;L<y;L++){const T=_[L],P={boundary:0,storage:0},U=Array.isArray(T.value)?T.value:[T.value];for(let X=0,D=U.length;X<D;X++){const I=U[X],z=f(I);P.boundary+=z.boundary,P.storage+=z.storage}if(T.__data=new Float32Array(P.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=x,L>0){E=x%A;const X=A-E;E!==0&&X-P.boundary<0&&(x+=A-E,T.__offset=x)}x+=P.storage}return E=x%A,E>0&&(x+=A-E),b.__size=x,b.__cache={},this}function f(b){const _={boundary:0,storage:0};return typeof b=="number"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){const _=b.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function v(){for(const b in i)r.deleteBuffer(i[b]);o=[],i={},s={}}return{bind:l,update:c,dispose:v}}function vg(){const r=Qi("canvas");return r.style.display="block",r}function go(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:vg(),t=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Gn,this.useLegacyLights=!0,this.toneMapping=mn,this.toneMappingExposure=1;const f=this;let m=!1,v=0,b=0,_=null,x=-1,A=null;const E=new Xe,L=new Xe;let y=null,T=e.width,P=e.height,U=1,X=null,D=null;const I=new Xe(0,0,T,P),z=new Xe(0,0,T,P);let Z=!1;const J=new uo;let V=!1,Q=!1,Y=null;const fe=new Fe,O=new C,K={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return _===null?U:1}let N=t;function de(S,F){for(let G=0;G<S.length;G++){const k=S[G],W=e.getContext(k,F);if(W!==null)return W}return null}try{const S={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ao}`),e.addEventListener("webglcontextlost",Re,!1),e.addEventListener("webglcontextrestored",Ee,!1),e.addEventListener("webglcontextcreationerror",we,!1),N===null){const F=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&F.shift(),N=de(F,S),N===null)throw de(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let le,pe,me,xe,Ce,j,$,ie,ye,ae,Le,Se,Pe,Ye,je,w,M,B,te,ne,ce,Me,he,q;function Te(){le=new Lp(N),pe=new Sp(N,le,r),le.init(pe),Me=new ug(N,le,pe),me=new cg(N,le,pe),xe=new Ip,Ce=new Ym,j=new hg(N,le,me,Ce,pe,Me,xe),$=new Ap(f),ie=new Cp(f),ye=new Uu(N,pe),he=new bp(N,le,ye,pe),ae=new Pp(N,ye,xe,he),Le=new Fp(N,ae,ye,xe),te=new Np(N,pe,j),w=new wp(Ce),Se=new Zm(f,$,ie,le,pe,he,w),Pe=new gg(f,Ce),Ye=new Jm,je=new ig(le,pe),B=new yp(f,$,ie,me,Le,h,o),M=new lg(f,Le,pe),q=new _g(N,xe,pe,me),ne=new Mp(N,le,xe,pe),ce=new Rp(N,le,xe,pe),xe.programs=Se.programs,f.capabilities=pe,f.extensions=le,f.properties=Ce,f.renderLists=Ye,f.shadowMap=M,f.state=me,f.info=xe}Te();const ve=new mg(f,N);this.xr=ve,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const S=le.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=le.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(S){S!==void 0&&(U=S,this.setSize(T,P,!1))},this.getSize=function(S){return S.set(T,P)},this.setSize=function(S,F,G=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=S,P=F,e.width=Math.floor(S*U),e.height=Math.floor(F*U),G===!0&&(e.style.width=S+"px",e.style.height=F+"px"),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(T*U,P*U).floor()},this.setDrawingBufferSize=function(S,F,G){T=S,P=F,U=G,e.width=Math.floor(S*G),e.height=Math.floor(F*G),this.setViewport(0,0,S,F)},this.getCurrentViewport=function(S){return S.copy(E)},this.getViewport=function(S){return S.copy(I)},this.setViewport=function(S,F,G,k){S.isVector4?I.set(S.x,S.y,S.z,S.w):I.set(S,F,G,k),me.viewport(E.copy(I).multiplyScalar(U).floor())},this.getScissor=function(S){return S.copy(z)},this.setScissor=function(S,F,G,k){S.isVector4?z.set(S.x,S.y,S.z,S.w):z.set(S,F,G,k),me.scissor(L.copy(z).multiplyScalar(U).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(S){me.setScissorTest(Z=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){D=S},this.getClearColor=function(S){return S.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor.apply(B,arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha.apply(B,arguments)},this.clear=function(S=!0,F=!0,G=!0){let k=0;S&&(k|=16384),F&&(k|=256),G&&(k|=1024),N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Re,!1),e.removeEventListener("webglcontextrestored",Ee,!1),e.removeEventListener("webglcontextcreationerror",we,!1),Ye.dispose(),je.dispose(),Ce.dispose(),$.dispose(),ie.dispose(),Le.dispose(),he.dispose(),q.dispose(),Se.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",ee),ve.removeEventListener("sessionend",ue),Y&&(Y.dispose(),Y=null),ge.stop()};function Re(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const S=xe.autoReset,F=M.enabled,G=M.autoUpdate,k=M.needsUpdate,W=M.type;Te(),xe.autoReset=S,M.enabled=F,M.autoUpdate=G,M.needsUpdate=k,M.type=W}function we(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ve(S){const F=S.target;F.removeEventListener("dispose",Ve),$e(F)}function $e(S){lt(S),Ce.remove(S)}function lt(S){const F=Ce.get(S).programs;F!==void 0&&(F.forEach(function(G){Se.releaseProgram(G)}),S.isShaderMaterial&&Se.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,G,k,W,Ae){F===null&&(F=K);const Ie=W.isMesh&&W.matrixWorld.determinant()<0,Ne=Yc(S,F,G,k,W);me.setMaterial(k,Ie);let Oe=G.index,He=1;k.wireframe===!0&&(Oe=ae.getWireframeAttribute(G),He=2);const ze=G.drawRange,Be=G.attributes.position;let nt=ze.start*He,Lt=(ze.start+ze.count)*He;Ae!==null&&(nt=Math.max(nt,Ae.start*He),Lt=Math.min(Lt,(Ae.start+Ae.count)*He)),Oe!==null?(nt=Math.max(nt,0),Lt=Math.min(Lt,Oe.count)):Be!=null&&(nt=Math.max(nt,0),Lt=Math.min(Lt,Be.count));const on=Lt-nt;if(on<0||on===1/0)return;he.setup(W,k,Ne,G,Oe);let Cn,it=ne;if(Oe!==null&&(Cn=ye.get(Oe),it=ce,it.setIndex(Cn)),W.isMesh)k.wireframe===!0?(me.setLineWidth(k.wireframeLinewidth*se()),it.setMode(1)):it.setMode(4);else if(W.isLine){let Ue=k.linewidth;Ue===void 0&&(Ue=1),me.setLineWidth(Ue*se()),W.isLineSegments?it.setMode(1):W.isLineLoop?it.setMode(2):it.setMode(3)}else W.isPoints?it.setMode(0):W.isSprite&&it.setMode(4);if(W.isInstancedMesh)it.renderInstances(nt,on,W.count);else if(G.isInstancedBufferGeometry){const Ue=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ys=Math.min(G.instanceCount,Ue);it.renderInstances(nt,on,Ys)}else it.render(nt,on)},this.compile=function(S,F){function G(k,W,Ae){k.transparent===!0&&k.side===Ut&&k.forceSinglePass===!1?(k.side=Dt,k.needsUpdate=!0,kt(k,W,Ae),k.side=nn,k.needsUpdate=!0,kt(k,W,Ae),k.side=Ut):kt(k,W,Ae)}d=je.get(S),d.init(),g.push(d),S.traverseVisible(function(k){k.isLight&&k.layers.test(F.layers)&&(d.pushLight(k),k.castShadow&&d.pushShadow(k))}),d.setupLights(f.useLegacyLights),S.traverse(function(k){const W=k.material;if(W)if(Array.isArray(W))for(let Ae=0;Ae<W.length;Ae++){const Ie=W[Ae];G(Ie,S,k)}else G(W,S,k)}),g.pop(),d=null};let R=null;function H(S){R&&R(S)}function ee(){ge.stop()}function ue(){ge.start()}const ge=new ac;ge.setAnimationLoop(H),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(S){R=S,ve.setAnimationLoop(S),S===null?ge.stop():ge.start()},ve.addEventListener("sessionstart",ee),ve.addEventListener("sessionend",ue),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(F),F=ve.getCamera()),S.isScene===!0&&S.onBeforeRender(f,S,F,_),d=je.get(S,g.length),d.init(),g.push(d),fe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),J.setFromProjectionMatrix(fe),Q=this.localClippingEnabled,V=w.init(this.clippingPlanes,Q),u=Ye.get(S,p.length),u.init(),p.push(u),Ke(S,F,0,f.sortObjects),u.finish(),f.sortObjects===!0&&u.sort(X,D),V===!0&&w.beginShadows();const G=d.state.shadowsArray;if(M.render(G,S,F),V===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),B.render(u,S),d.setupLights(f.useLegacyLights),F.isArrayCamera){const k=F.cameras;for(let W=0,Ae=k.length;W<Ae;W++){const Ie=k[W];ct(u,S,Ie,Ie.viewport)}}else ct(u,S,F);_!==null&&(j.updateMultisampleRenderTarget(_),j.updateRenderTargetMipmap(_)),S.isScene===!0&&S.onAfterRender(f,S,F),he.resetDefaultState(),x=-1,A=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?u=p[p.length-1]:u=null};function Ke(S,F,G,k){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)G=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||J.intersectsSprite(S)){k&&O.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const Ie=Le.update(S),Ne=S.material;Ne.visible&&u.push(S,Ie,Ne,G,O.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(S.isSkinnedMesh&&S.skeleton.frame!==xe.render.frame&&(S.skeleton.update(),S.skeleton.frame=xe.render.frame),!S.frustumCulled||J.intersectsObject(S))){k&&O.setFromMatrixPosition(S.matrixWorld).applyMatrix4(fe);const Ie=Le.update(S),Ne=S.material;if(Array.isArray(Ne)){const Oe=Ie.groups;for(let He=0,ze=Oe.length;He<ze;He++){const Be=Oe[He],nt=Ne[Be.materialIndex];nt&&nt.visible&&u.push(S,Ie,nt,G,O.z,Be)}}else Ne.visible&&u.push(S,Ie,Ne,G,O.z,null)}}const Ae=S.children;for(let Ie=0,Ne=Ae.length;Ie<Ne;Ie++)Ke(Ae[Ie],F,G,k)}function ct(S,F,G,k){const W=S.opaque,Ae=S.transmissive,Ie=S.transparent;d.setupLightsView(G),V===!0&&w.setGlobalState(f.clippingPlanes,G),Ae.length>0&&vt(W,F,G),k&&me.viewport(E.copy(k)),W.length>0&&Zt(W,F,G),Ae.length>0&&Zt(Ae,F,G),Ie.length>0&&Zt(Ie,F,G),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function vt(S,F,G){const k=pe.isWebGL2;Y===null&&(Y=new Vn(1024,1024,{generateMipmaps:!0,type:le.has("EXT_color_buffer_half_float")?Ki:Un,minFilter:Bn,samples:k&&s===!0?4:0}));const W=f.getRenderTarget();f.setRenderTarget(Y),f.clear();const Ae=f.toneMapping;f.toneMapping=mn,Zt(S,F,G),f.toneMapping=Ae,j.updateMultisampleRenderTarget(Y),j.updateRenderTargetMipmap(Y),f.setRenderTarget(W)}function Zt(S,F,G){const k=F.isScene===!0?F.overrideMaterial:null;for(let W=0,Ae=S.length;W<Ae;W++){const Ie=S[W],Ne=Ie.object,Oe=Ie.geometry,He=k===null?Ie.material:k,ze=Ie.group;Ne.layers.test(G.layers)&&tt(Ne,F,G,Oe,He,ze)}}function tt(S,F,G,k,W,Ae){S.onBeforeRender(f,F,G,k,W,Ae),S.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(f,F,G,k,S,Ae),W.transparent===!0&&W.side===Ut&&W.forceSinglePass===!1?(W.side=Dt,W.needsUpdate=!0,f.renderBufferDirect(G,F,k,W,S,Ae),W.side=nn,W.needsUpdate=!0,f.renderBufferDirect(G,F,k,W,S,Ae),W.side=Ut):f.renderBufferDirect(G,F,k,W,S,Ae),S.onAfterRender(f,F,G,k,W,Ae)}function kt(S,F,G){F.isScene!==!0&&(F=K);const k=Ce.get(S),W=d.state.lights,Ae=d.state.shadowsArray,Ie=W.state.version,Ne=Se.getParameters(S,W.state,Ae,F,G),Oe=Se.getProgramCacheKey(Ne);let He=k.programs;k.environment=S.isMeshStandardMaterial?F.environment:null,k.fog=F.fog,k.envMap=(S.isMeshStandardMaterial?ie:$).get(S.envMap||k.environment),He===void 0&&(S.addEventListener("dispose",Ve),He=new Map,k.programs=He);let ze=He.get(Oe);if(ze!==void 0){if(k.currentProgram===ze&&k.lightsStateVersion===Ie)return Yt(S,Ne),ze}else Ne.uniforms=Se.getUniforms(S),S.onBuild(G,Ne,f),S.onBeforeCompile(Ne,f),ze=Se.acquireProgram(Ne,Oe),He.set(Oe,ze),k.uniforms=Ne.uniforms;const Be=k.uniforms;(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Be.clippingPlanes=w.uniform),Yt(S,Ne),k.needsLights=Jc(S),k.lightsStateVersion=Ie,k.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix);const nt=ze.getUniforms(),Lt=Ns.seqWithValue(nt.seq,Be);return k.currentProgram=ze,k.uniformsList=Lt,ze}function Yt(S,F){const G=Ce.get(S);G.outputEncoding=F.outputEncoding,G.instancing=F.instancing,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Yc(S,F,G,k,W){F.isScene!==!0&&(F=K),j.resetTextureUnits();const Ae=F.fog,Ie=k.isMeshStandardMaterial?F.environment:null,Ne=_===null?f.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:Gn,Oe=(k.isMeshStandardMaterial?ie:$).get(k.envMap||Ie),He=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!k.normalMap&&!!G.attributes.tangent,Be=!!G.morphAttributes.position,nt=!!G.morphAttributes.normal,Lt=!!G.morphAttributes.color,on=k.toneMapped?f.toneMapping:mn,Cn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,it=Cn!==void 0?Cn.length:0,Ue=Ce.get(k),Ys=d.state.lights;if(V===!0&&(Q===!0||S!==A)){const Pt=S===A&&k.id===x;w.setState(k,S,Pt)}let ht=!1;k.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==Ys.state.version||Ue.outputEncoding!==Ne||W.isInstancedMesh&&Ue.instancing===!1||!W.isInstancedMesh&&Ue.instancing===!0||W.isSkinnedMesh&&Ue.skinning===!1||!W.isSkinnedMesh&&Ue.skinning===!0||Ue.envMap!==Oe||k.fog===!0&&Ue.fog!==Ae||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==w.numPlanes||Ue.numIntersection!==w.numIntersection)||Ue.vertexAlphas!==He||Ue.vertexTangents!==ze||Ue.morphTargets!==Be||Ue.morphNormals!==nt||Ue.morphColors!==Lt||Ue.toneMapping!==on||pe.isWebGL2===!0&&Ue.morphTargetsCount!==it)&&(ht=!0):(ht=!0,Ue.__version=k.version);let Ln=Ue.currentProgram;ht===!0&&(Ln=kt(k,F,W));let Wo=!1,Pi=!1,Ks=!1;const xt=Ln.getUniforms(),Pn=Ue.uniforms;if(me.useProgram(Ln.program)&&(Wo=!0,Pi=!0,Ks=!0),k.id!==x&&(x=k.id,Pi=!0),Wo||A!==S){if(xt.setValue(N,"projectionMatrix",S.projectionMatrix),pe.logarithmicDepthBuffer&&xt.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),A!==S&&(A=S,Pi=!0,Ks=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Pt=xt.map.cameraPosition;Pt!==void 0&&Pt.setValue(N,O.setFromMatrixPosition(S.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&xt.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||W.isSkinnedMesh)&&xt.setValue(N,"viewMatrix",S.matrixWorldInverse)}if(W.isSkinnedMesh){xt.setOptional(N,W,"bindMatrix"),xt.setOptional(N,W,"bindMatrixInverse");const Pt=W.skeleton;Pt&&(pe.floatVertexTextures?(Pt.boneTexture===null&&Pt.computeBoneTexture(),xt.setValue(N,"boneTexture",Pt.boneTexture,j),xt.setValue(N,"boneTextureSize",Pt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Js=G.morphAttributes;if((Js.position!==void 0||Js.normal!==void 0||Js.color!==void 0&&pe.isWebGL2===!0)&&te.update(W,G,Ln),(Pi||Ue.receiveShadow!==W.receiveShadow)&&(Ue.receiveShadow=W.receiveShadow,xt.setValue(N,"receiveShadow",W.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Pn.envMap.value=Oe,Pn.flipEnvMap.value=Oe.isCubeTexture&&Oe.isRenderTargetTexture===!1?-1:1),Pi&&(xt.setValue(N,"toneMappingExposure",f.toneMappingExposure),Ue.needsLights&&Kc(Pn,Ks),Ae&&k.fog===!0&&Pe.refreshFogUniforms(Pn,Ae),Pe.refreshMaterialUniforms(Pn,k,U,P,Y),Ns.upload(N,Ue.uniformsList,Pn,j)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ns.upload(N,Ue.uniformsList,Pn,j),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&xt.setValue(N,"center",W.center),xt.setValue(N,"modelViewMatrix",W.modelViewMatrix),xt.setValue(N,"normalMatrix",W.normalMatrix),xt.setValue(N,"modelMatrix",W.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Pt=k.uniformsGroups;for(let $s=0,$c=Pt.length;$s<$c;$s++)if(pe.isWebGL2){const qo=Pt[$s];q.update(qo,Ln),q.bind(qo,Ln)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ln}function Kc(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Jc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(S,F,G){Ce.get(S.texture).__webglTexture=F,Ce.get(S.depthTexture).__webglTexture=G;const k=Ce.get(S);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,F){const G=Ce.get(S);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,G=0){_=S,v=F,b=G;let k=!0,W=null,Ae=!1,Ie=!1;if(S){const Oe=Ce.get(S);Oe.__useDefaultFramebuffer!==void 0?(me.bindFramebuffer(36160,null),k=!1):Oe.__webglFramebuffer===void 0?j.setupRenderTarget(S):Oe.__hasExternalTextures&&j.rebindTextures(S,Ce.get(S.texture).__webglTexture,Ce.get(S.depthTexture).__webglTexture);const He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ie=!0);const ze=Ce.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(W=ze[F],Ae=!0):pe.isWebGL2&&S.samples>0&&j.useMultisampledRTT(S)===!1?W=Ce.get(S).__webglMultisampledFramebuffer:W=ze,E.copy(S.viewport),L.copy(S.scissor),y=S.scissorTest}else E.copy(I).multiplyScalar(U).floor(),L.copy(z).multiplyScalar(U).floor(),y=Z;if(me.bindFramebuffer(36160,W)&&pe.drawBuffers&&k&&me.drawBuffers(S,W),me.viewport(E),me.scissor(L),me.setScissorTest(y),Ae){const Oe=Ce.get(S.texture);N.framebufferTexture2D(36160,36064,34069+F,Oe.__webglTexture,G)}else if(Ie){const Oe=Ce.get(S.texture),He=F||0;N.framebufferTextureLayer(36160,36064,Oe.__webglTexture,G||0,He)}x=-1},this.readRenderTargetPixels=function(S,F,G,k,W,Ae,Ie){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ce.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ne=Ne[Ie]),Ne){me.bindFramebuffer(36160,Ne);try{const Oe=S.texture,He=Oe.format,ze=Oe.type;if(He!==Bt&&Me.convert(He)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===Ki&&(le.has("EXT_color_buffer_half_float")||pe.isWebGL2&&le.has("EXT_color_buffer_float"));if(ze!==Un&&Me.convert(ze)!==N.getParameter(35738)&&!(ze===An&&(pe.isWebGL2||le.has("OES_texture_float")||le.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-k&&G>=0&&G<=S.height-W&&N.readPixels(F,G,k,W,Me.convert(He),Me.convert(ze),Ae)}finally{const Oe=_!==null?Ce.get(_).__webglFramebuffer:null;me.bindFramebuffer(36160,Oe)}}},this.copyFramebufferToTexture=function(S,F,G=0){const k=Math.pow(2,-G),W=Math.floor(F.image.width*k),Ae=Math.floor(F.image.height*k);j.setTexture2D(F,0),N.copyTexSubImage2D(3553,G,0,0,S.x,S.y,W,Ae),me.unbindTexture()},this.copyTextureToTexture=function(S,F,G,k=0){const W=F.image.width,Ae=F.image.height,Ie=Me.convert(G.format),Ne=Me.convert(G.type);j.setTexture2D(G,0),N.pixelStorei(37440,G.flipY),N.pixelStorei(37441,G.premultiplyAlpha),N.pixelStorei(3317,G.unpackAlignment),F.isDataTexture?N.texSubImage2D(3553,k,S.x,S.y,W,Ae,Ie,Ne,F.image.data):F.isCompressedTexture?N.compressedTexSubImage2D(3553,k,S.x,S.y,F.mipmaps[0].width,F.mipmaps[0].height,Ie,F.mipmaps[0].data):N.texSubImage2D(3553,k,S.x,S.y,Ie,Ne,F.image),k===0&&G.generateMipmaps&&N.generateMipmap(3553),me.unbindTexture()},this.copyTextureToTexture3D=function(S,F,G,k,W=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=S.max.x-S.min.x+1,Ie=S.max.y-S.min.y+1,Ne=S.max.z-S.min.z+1,Oe=Me.convert(k.format),He=Me.convert(k.type);let ze;if(k.isData3DTexture)j.setTexture3D(k,0),ze=32879;else if(k.isDataArrayTexture)j.setTexture2DArray(k,0),ze=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,k.flipY),N.pixelStorei(37441,k.premultiplyAlpha),N.pixelStorei(3317,k.unpackAlignment);const Be=N.getParameter(3314),nt=N.getParameter(32878),Lt=N.getParameter(3316),on=N.getParameter(3315),Cn=N.getParameter(32877),it=G.isCompressedTexture?G.mipmaps[0]:G.image;N.pixelStorei(3314,it.width),N.pixelStorei(32878,it.height),N.pixelStorei(3316,S.min.x),N.pixelStorei(3315,S.min.y),N.pixelStorei(32877,S.min.z),G.isDataTexture||G.isData3DTexture?N.texSubImage3D(ze,W,F.x,F.y,F.z,Ae,Ie,Ne,Oe,He,it.data):G.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(ze,W,F.x,F.y,F.z,Ae,Ie,Ne,Oe,it.data)):N.texSubImage3D(ze,W,F.x,F.y,F.z,Ae,Ie,Ne,Oe,He,it),N.pixelStorei(3314,Be),N.pixelStorei(32878,nt),N.pixelStorei(3316,Lt),N.pixelStorei(3315,on),N.pixelStorei(32877,Cn),W===0&&k.generateMipmaps&&N.generateMipmap(ze),me.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?j.setTextureCube(S,0):S.isData3DTexture?j.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?j.setTexture2DArray(S,0):j.setTexture2D(S,0),me.unbindTexture()},this.resetState=function(){v=0,b=0,_=null,me.reset(),he.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(go.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(r){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!r}}});class xg extends go{}xg.prototype.isWebGL1Renderer=!0;class yg extends et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class bg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Vt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const bt=new C;class _o{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=pn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=pn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=pn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=pn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),s=Ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _o(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const nl=new C,il=new Xe,sl=new Xe,Mg=new C,rl=new Fe;class Sg extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,i=this.geometry;il.fromBufferAttribute(i.attributes.skinIndex,e),sl.fromBufferAttribute(i.attributes.skinWeight,e),nl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=sl.getComponent(s);if(o!==0){const a=il.getComponent(s);rl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Mg.copy(nl).applyMatrix4(rl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class dc extends et{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wg extends pt{constructor(e=null,t=1,n=1,i,s,o,a,l,c=dt,h=dt,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ol=new Fe,Ag=new Fe;class vo{constructor(e=[],t=[]){this.uuid=Vt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Ag;ol.multiplyMatrices(a,t[s]),ol.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new vo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Yl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wg(t,e,e,Bt,An);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new dc),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class al extends rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ll=new Fe,cl=new Fe,Ts=[],Tg=new Fe,zi=new At;class Eg extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new al(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let i=0;i<n;i++)this.setMatrixAt(i,Tg)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(zi.geometry=this.geometry,zi.material=this.material,zi.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,ll),cl.multiplyMatrices(n,ll),zi.matrixWorld=cl,zi.raycast(e,Ts);for(let o=0,a=Ts.length;o<a;o++){const l=Ts[o];l.instanceId=s,l.object=this,t.push(l)}Ts.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new al(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class fc extends tn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hl=new C,ul=new C,dl=new Fe,Lr=new Gs,Es=new Ti;class xo extends et{constructor(e=new Et,t=new fc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)hl.fromBufferAttribute(t,i-1),ul.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=hl.distanceTo(ul);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(i),Es.radius+=s,e.ray.intersectsSphere(Es)===!1)return;dl.copy(i).invert(),Lr.copy(e.ray).applyMatrix4(dl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new C,h=new C,u=new C,d=new C,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const v=Math.max(0,o.start),b=Math.min(g.count,o.start+o.count);for(let _=v,x=b-1;_<x;_+=p){const A=g.getX(_),E=g.getX(_+1);if(c.fromBufferAttribute(m,A),h.fromBufferAttribute(m,E),Lr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),b=Math.min(m.count,o.start+o.count);for(let _=v,x=b-1;_<x;_+=p){if(c.fromBufferAttribute(m,_),h.fromBufferAttribute(m,_+1),Lr.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const E=e.ray.origin.distanceTo(d);E<e.near||E>e.far||t.push({distance:E,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const fl=new C,pl=new C;class Cg extends xo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)fl.fromBufferAttribute(t,i),pl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+fl.distanceTo(pl);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Lg extends xo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yo extends tn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ml=new Fe,Jr=new Gs,Cs=new Ti,Ls=new C;class bo extends et{constructor(e=new Et,t=new yo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Cs.copy(n.boundingSphere),Cs.applyMatrix4(i),Cs.radius+=s,e.ray.intersectsSphere(Cs)===!1)return;ml.copy(i).invert(),Jr.copy(e.ray).applyMatrix4(ml);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,f=p;g<f;g++){const m=c.getX(g);Ls.fromBufferAttribute(u,m),gl(Ls,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,f=p;g<f;g++)Ls.fromBufferAttribute(u,g),gl(Ls,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function gl(r,e,t,n,i,s,o){const a=Jr.distanceSqToPoint(r);if(a<t){const l=new C;Jr.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const s=n.length;let o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new oe:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new C,i=[],s=[],o=[],a=new C,l=new Fe;for(let p=0;p<=e;p++){const g=p/e;i[p]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(ft(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(i[p],s[p])}if(t===!0){let p=Math.acos(ft(s[0].dot(s[e]),-1,1));p/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],p*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Mo extends sn{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t){const n=t||new oe,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Pg extends Mo{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function So(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return r+e*s+t*o+n*a}}}const Ps=new C,Pr=new So,Rr=new So,Ir=new So;class pc extends sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){const n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Ps.subVectors(i[0],i[1]).add(i[0]),c=Ps);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Ps.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ps),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(d),p),m=Math.pow(d.distanceToSquared(h),p);f<1e-4&&(f=1),g<1e-4&&(g=f),m<1e-4&&(m=f),Pr.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,f,m),Rr.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,f,m),Ir.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,f,m)}else this.curveType==="catmullrom"&&(Pr.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Rr.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ir.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Pr.calc(l),Rr.calc(l),Ir.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _l(r,e,t,n,i){const s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Rg(r,e){const t=1-r;return t*t*e}function Ig(r,e){return 2*(1-r)*r*e}function Dg(r,e){return r*r*e}function Xi(r,e,t,n){return Rg(r,e)+Ig(r,t)+Dg(r,n)}function kg(r,e){const t=1-r;return t*t*t*e}function Ng(r,e){const t=1-r;return 3*t*t*r*e}function Fg(r,e){return 3*(1-r)*r*r*e}function Og(r,e){return r*r*r*e}function Zi(r,e,t,n,i){return kg(r,e)+Ng(r,t)+Fg(r,n)+Og(r,i)}class mc extends sn{constructor(e=new oe,t=new oe,n=new oe,i=new oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new oe){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zi(e,i.x,s.x,o.x,a.x),Zi(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zg extends sn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){const n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Zi(e,i.x,s.x,o.x,a.x),Zi(e,i.y,s.y,o.y,a.y),Zi(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class wo extends sn{constructor(e=new oe,t=new oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new oe){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Bg extends sn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gc extends sn{constructor(e=new oe,t=new oe,n=new oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new oe){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Xi(e,i.x,s.x,o.x),Xi(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _c extends sn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Xi(e,i.x,s.x,o.x),Xi(e,i.y,s.y,o.y),Xi(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vc extends sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new oe){const n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(_l(a,l.x,c.x,h.x,u.x),_l(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new oe().fromArray(i))}return this}}var Ao=Object.freeze({__proto__:null,ArcCurve:Pg,CatmullRomCurve3:pc,CubicBezierCurve:mc,CubicBezierCurve3:zg,EllipseCurve:Mo,LineCurve:wo,LineCurve3:Bg,QuadraticBezierCurve:gc,QuadraticBezierCurve3:_c,SplineCurve:vc});class Ug extends sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);e.equals(t)||this.curves.push(new wo(t,e))}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Ao[i.type]().fromJSON(i))}return this}}class $r extends Ug{constructor(e){super(),this.type="Path",this.currentPoint=new oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new wo(this.currentPoint.clone(),new oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const s=new gc(this.currentPoint.clone(),new oe(e,t),new oe(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){const a=new mc(this.currentPoint.clone(),new oe(e,t),new oe(n,i),new oe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new vc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){const c=new Mo(e,t,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fs extends $r{constructor(e){super(e),this.uuid=Vt(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const i=e.holes[t];this.holes.push(new $r().fromJSON(i))}return this}}const Gg={triangulate:function(r,e,t=2){const n=e&&e.length,i=n?e[0]*t:r.length;let s=xc(r,0,i,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,p;if(n&&(s=jg(r,e,s,t)),r.length>80*t){a=c=r[0],l=h=r[1];for(let g=t;g<i;g+=t)u=r[g],d=r[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);p=Math.max(c-a,h-l),p=p!==0?32767/p:0}return es(s,o,t,a,l,p,0),o}};function xc(r,e,t,n,i){let s,o;if(i===i0(r,e,t,n)>0)for(s=e;s<t;s+=n)o=vl(s,r[s],r[s+1],o);else for(s=t-n;s>=e;s-=n)o=vl(s,r[s],r[s+1],o);return o&&Ws(o,o.next)&&(ns(o),o=o.next),o}function Hn(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ws(t,t.next)||Qe(t.prev,t,t.next)===0)){if(ns(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function es(r,e,t,n,i,s,o){if(!r)return;!o&&s&&Jg(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Hg(r,n,i,s):Vg(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),ns(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Wg(Hn(r),e,t),es(r,e,t,n,i,s,2)):o===2&&qg(r,e,t,n,i,s):es(Hn(r),e,t,n,i,s,1);break}}}function Vg(r){const e=r.prev,t=r,n=r.next;if(Qe(e,t,n)>=0)return!1;const i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=p&&ui(i,a,s,l,o,c,g.x,g.y)&&Qe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hg(r,e,t,n){const i=r.prev,s=r,o=r.next;if(Qe(i,s,o)>=0)return!1;const a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,f=a>l?a>c?a:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,v=Qr(p,g,e,t,n),b=Qr(f,m,e,t,n);let _=r.prevZ,x=r.nextZ;for(;_&&_.z>=v&&x&&x.z<=b;){if(_.x>=p&&_.x<=f&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&ui(a,h,l,u,c,d,_.x,_.y)&&Qe(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=f&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ui(a,h,l,u,c,d,x.x,x.y)&&Qe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=v;){if(_.x>=p&&_.x<=f&&_.y>=g&&_.y<=m&&_!==i&&_!==o&&ui(a,h,l,u,c,d,_.x,_.y)&&Qe(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=b;){if(x.x>=p&&x.x<=f&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&ui(a,h,l,u,c,d,x.x,x.y)&&Qe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Wg(r,e,t){let n=r;do{const i=n.prev,s=n.next.next;!Ws(i,s)&&yc(i,n,n.next,s)&&ts(i,s)&&ts(s,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ns(n),ns(n.next),n=r=s),n=n.next}while(n!==r);return Hn(n)}function qg(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&e0(o,a)){let l=bc(o,a);o=Hn(o,o.next),l=Hn(l,l.next),es(o,e,t,n,i,s,0),es(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function jg(r,e,t,n){const i=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=xc(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Qg(c));for(i.sort(Xg),s=0;s<i.length;s++)t=Zg(i[s],t);return t}function Xg(r,e){return r.x-e.x}function Zg(r,e){const t=Yg(r,e);if(!t)return e;const n=bc(t,r);return Hn(n,n.next),Hn(t,t.next)}function Yg(r,e){let t=e,n=-1/0,i;const s=r.x,o=r.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const d=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,i=t.x<t.next.x?t:t.next,d===s))return i}t=t.next}while(t!==e);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;t=i;do s>=t.x&&t.x>=l&&s!==t.x&&ui(o<c?s:n,o,l,c,o<c?n:s,o,t.x,t.y)&&(u=Math.abs(o-t.y)/(s-t.x),ts(t,r)&&(u<h||u===h&&(t.x>i.x||t.x===i.x&&Kg(i,t)))&&(i=t,h=u)),t=t.next;while(t!==a);return i}function Kg(r,e){return Qe(r.prev,r,e.prev)<0&&Qe(e.next,r,r.next)<0}function Jg(r,e,t,n){let i=r;do i.z===0&&(i.z=Qr(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,$g(i)}function $g(r){let e,t,n,i,s,o,a,l,c=1;do{for(t=r,r=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<c&&(a++,n=n.nextZ,!!n);e++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;t=n}s.nextZ=null,c*=2}while(o>1);return r}function Qr(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Qg(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function ui(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function e0(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!t0(r,e)&&(ts(r,e)&&ts(e,r)&&n0(r,e)&&(Qe(r.prev,r,e.prev)||Qe(r,e.prev,e))||Ws(r,e)&&Qe(r.prev,r,r.next)>0&&Qe(e.prev,e,e.next)>0)}function Qe(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ws(r,e){return r.x===e.x&&r.y===e.y}function yc(r,e,t,n){const i=Is(Qe(r,e,t)),s=Is(Qe(r,e,n)),o=Is(Qe(t,n,r)),a=Is(Qe(t,n,e));return!!(i!==s&&o!==a||i===0&&Rs(r,t,e)||s===0&&Rs(r,n,e)||o===0&&Rs(t,r,n)||a===0&&Rs(t,e,n))}function Rs(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Is(r){return r>0?1:r<0?-1:0}function t0(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&yc(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ts(r,e){return Qe(r.prev,r,r.next)<0?Qe(r,e,r.next)>=0&&Qe(r,r.prev,e)>=0:Qe(r,e,r.prev)<0||Qe(r,r.next,e)<0}function n0(r,e){let t=r,n=!1;const i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function bc(r,e){const t=new eo(r.i,r.x,r.y),n=new eo(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function vl(r,e,t,n){const i=new eo(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function ns(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function eo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function i0(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class mi{static area(e){const t=e.length;let n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return mi.area(e)<0}static triangulateShape(e,t){const n=[],i=[],s=[];xl(e),yl(n,e);let o=e.length;t.forEach(xl);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,yl(n,t[l]);const a=Gg.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function xl(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function yl(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class To extends Et{constructor(e=new Fs([new oe(.5,.5),new oe(-.5,.5),new oe(-.5,-.5),new oe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,i=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new Tt(i,3)),this.setAttribute("uv",new Tt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,p=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:p-.1,f=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const v=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:s0;let _,x=!1,A,E,L,y;v&&(_=v.getSpacedPoints(h),x=!0,d=!1,A=v.computeFrenetFrames(h,!1),E=new C,L=new C,y=new C),d||(m=0,p=0,g=0,f=0);const T=a.extractPoints(c);let P=T.shape;const U=T.holes;if(!mi.isClockWise(P)){P=P.reverse();for(let j=0,$=U.length;j<$;j++){const ie=U[j];mi.isClockWise(ie)&&(U[j]=ie.reverse())}}const D=mi.triangulateShape(P,U),I=P;for(let j=0,$=U.length;j<$;j++){const ie=U[j];P=P.concat(ie)}function z(j,$,ie){return $||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector($,ie)}const Z=P.length,J=D.length;function V(j,$,ie){let ye,ae,Le;const Se=j.x-$.x,Pe=j.y-$.y,Ye=ie.x-j.x,je=ie.y-j.y,w=Se*Se+Pe*Pe,M=Se*je-Pe*Ye;if(Math.abs(M)>Number.EPSILON){const B=Math.sqrt(w),te=Math.sqrt(Ye*Ye+je*je),ne=$.x-Pe/B,ce=$.y+Se/B,Me=ie.x-je/te,he=ie.y+Ye/te,q=((Me-ne)*je-(he-ce)*Ye)/(Se*je-Pe*Ye);ye=ne+Se*q-j.x,ae=ce+Pe*q-j.y;const Te=ye*ye+ae*ae;if(Te<=2)return new oe(ye,ae);Le=Math.sqrt(Te/2)}else{let B=!1;Se>Number.EPSILON?Ye>Number.EPSILON&&(B=!0):Se<-Number.EPSILON?Ye<-Number.EPSILON&&(B=!0):Math.sign(Pe)===Math.sign(je)&&(B=!0),B?(ye=-Pe,ae=Se,Le=Math.sqrt(w)):(ye=Se,ae=Pe,Le=Math.sqrt(w/2))}return new oe(ye/Le,ae/Le)}const Q=[];for(let j=0,$=I.length,ie=$-1,ye=j+1;j<$;j++,ie++,ye++)ie===$&&(ie=0),ye===$&&(ye=0),Q[j]=V(I[j],I[ie],I[ye]);const Y=[];let fe,O=Q.concat();for(let j=0,$=U.length;j<$;j++){const ie=U[j];fe=[];for(let ye=0,ae=ie.length,Le=ae-1,Se=ye+1;ye<ae;ye++,Le++,Se++)Le===ae&&(Le=0),Se===ae&&(Se=0),fe[ye]=V(ie[ye],ie[Le],ie[Se]);Y.push(fe),O=O.concat(fe)}for(let j=0;j<m;j++){const $=j/m,ie=p*Math.cos($*Math.PI/2),ye=g*Math.sin($*Math.PI/2)+f;for(let ae=0,Le=I.length;ae<Le;ae++){const Se=z(I[ae],Q[ae],ye);le(Se.x,Se.y,-ie)}for(let ae=0,Le=U.length;ae<Le;ae++){const Se=U[ae];fe=Y[ae];for(let Pe=0,Ye=Se.length;Pe<Ye;Pe++){const je=z(Se[Pe],fe[Pe],ye);le(je.x,je.y,-ie)}}}const K=g+f;for(let j=0;j<Z;j++){const $=d?z(P[j],O[j],K):P[j];x?(L.copy(A.normals[0]).multiplyScalar($.x),E.copy(A.binormals[0]).multiplyScalar($.y),y.copy(_[0]).add(L).add(E),le(y.x,y.y,y.z)):le($.x,$.y,0)}for(let j=1;j<=h;j++)for(let $=0;$<Z;$++){const ie=d?z(P[$],O[$],K):P[$];x?(L.copy(A.normals[j]).multiplyScalar(ie.x),E.copy(A.binormals[j]).multiplyScalar(ie.y),y.copy(_[j]).add(L).add(E),le(y.x,y.y,y.z)):le(ie.x,ie.y,u/h*j)}for(let j=m-1;j>=0;j--){const $=j/m,ie=p*Math.cos($*Math.PI/2),ye=g*Math.sin($*Math.PI/2)+f;for(let ae=0,Le=I.length;ae<Le;ae++){const Se=z(I[ae],Q[ae],ye);le(Se.x,Se.y,u+ie)}for(let ae=0,Le=U.length;ae<Le;ae++){const Se=U[ae];fe=Y[ae];for(let Pe=0,Ye=Se.length;Pe<Ye;Pe++){const je=z(Se[Pe],fe[Pe],ye);x?le(je.x,je.y+_[h-1].y,_[h-1].x+ie):le(je.x,je.y,u+ie)}}}se(),N();function se(){const j=i.length/3;if(d){let $=0,ie=Z*$;for(let ye=0;ye<J;ye++){const ae=D[ye];pe(ae[2]+ie,ae[1]+ie,ae[0]+ie)}$=h+m*2,ie=Z*$;for(let ye=0;ye<J;ye++){const ae=D[ye];pe(ae[0]+ie,ae[1]+ie,ae[2]+ie)}}else{for(let $=0;$<J;$++){const ie=D[$];pe(ie[2],ie[1],ie[0])}for(let $=0;$<J;$++){const ie=D[$];pe(ie[0]+Z*h,ie[1]+Z*h,ie[2]+Z*h)}}n.addGroup(j,i.length/3-j,0)}function N(){const j=i.length/3;let $=0;de(I,$),$+=I.length;for(let ie=0,ye=U.length;ie<ye;ie++){const ae=U[ie];de(ae,$),$+=ae.length}n.addGroup(j,i.length/3-j,1)}function de(j,$){let ie=j.length;for(;--ie>=0;){const ye=ie;let ae=ie-1;ae<0&&(ae=j.length-1);for(let Le=0,Se=h+m*2;Le<Se;Le++){const Pe=Z*Le,Ye=Z*(Le+1),je=$+ye+Pe,w=$+ae+Pe,M=$+ae+Ye,B=$+ye+Ye;me(je,w,M,B)}}}function le(j,$,ie){l.push(j),l.push($),l.push(ie)}function pe(j,$,ie){xe(j),xe($),xe(ie);const ye=i.length/3,ae=b.generateTopUV(n,i,ye-3,ye-2,ye-1);Ce(ae[0]),Ce(ae[1]),Ce(ae[2])}function me(j,$,ie,ye){xe(j),xe($),xe(ye),xe($),xe(ie),xe(ye);const ae=i.length/3,Le=b.generateSideWallUV(n,i,ae-6,ae-3,ae-2,ae-1);Ce(Le[0]),Ce(Le[1]),Ce(Le[3]),Ce(Le[1]),Ce(Le[2]),Ce(Le[3])}function xe(j){i.push(l[j*3+0]),i.push(l[j*3+1]),i.push(l[j*3+2])}function Ce(j){s.push(j.x),s.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return r0(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];n.push(a)}const i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new Ao[i.type]().fromJSON(i)),new To(n,e.options)}}const s0={generateTopUV:function(r,e,t,n,i){const s=e[t*3],o=e[t*3+1],a=e[n*3],l=e[n*3+1],c=e[i*3],h=e[i*3+1];return[new oe(s,o),new oe(a,l),new oe(c,h)]},generateSideWallUV:function(r,e,t,n,i,s){const o=e[t*3],a=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],u=e[n*3+2],d=e[i*3],p=e[i*3+1],g=e[i*3+2],f=e[s*3],m=e[s*3+1],v=e[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new oe(o,1-l),new oe(c,1-u),new oe(d,1-g),new oe(f,1-v)]:[new oe(a,1-l),new oe(h,1-u),new oe(p,1-g),new oe(m,1-v)]}};function r0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];t.shapes.push(s.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Eo extends Et{constructor(e=new _c(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new C,l=new C,c=new oe;let h=new C;const u=[],d=[],p=[],g=[];f(),this.setIndex(g),this.setAttribute("position",new Tt(u,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(p,2));function f(){for(let _=0;_<t;_++)m(_);m(s===!1?t:0),b(),v()}function m(_){h=e.getPointAt(_/t,h);const x=o.normals[_],A=o.binormals[_];for(let E=0;E<=i;E++){const L=E/i*Math.PI*2,y=Math.sin(L),T=-Math.cos(L);l.x=T*x.x+y*A.x,l.y=T*x.y+y*A.y,l.z=T*x.z+y*A.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function v(){for(let _=1;_<=t;_++)for(let x=1;x<=i;x++){const A=(i+1)*(_-1)+(x-1),E=(i+1)*_+(x-1),L=(i+1)*_+x,y=(i+1)*(_-1)+x;g.push(A,E,y),g.push(E,L,y)}}function b(){for(let _=0;_<=t;_++)for(let x=0;x<=i;x++)c.x=_/t,c.y=x/i,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Eo(new Ao[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Co extends tn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xl,this.normalScale=new oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jn extends Co{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ft(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Mn(r,e,t){return Mc(r)?new r.constructor(r.subarray(e,t!==void 0?t:r.length)):r.slice(e,t)}function Ds(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Mc(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function o0(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function bl(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let l=0;l!==e;++l)i[o++]=r[a+l]}return i}function Sc(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=r[i++];while(s!==void 0)}class as{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class a0 extends as{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:li,endingEnd:li}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ci:s=e,a=2*t-n;break;case zs:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ci:o=e,l=2*n-t;break;case zs:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),f=g*g,m=f*g,v=-d*m+2*d*f-d*g,b=(1+d)*m+(-1.5-2*d)*f+(-.5+d)*g+1,_=(-1-p)*m+(1.5+p)*f+.5*g,x=p*m-p*f;for(let A=0;A!==a;++A)s[A]=v*o[h+A]+b*o[c+A]+_*o[l+A]+x*o[u+A];return s}}class wc extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class l0 extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class rn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ds(t,this.TimeBufferType),this.values=Ds(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ds(e.times,Array),values:Ds(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new l0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new a0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ji:t=this.InterpolantFactoryMethodDiscrete;break;case bi:t=this.InterpolantFactoryMethodLinear;break;case sr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ji;case this.InterpolantFactoryMethodLinear:return bi;case this.InterpolantFactoryMethodSmooth:return sr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Mn(n,s,o),this.values=Mn(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Mc(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=Mn(this.times),t=Mn(this.values),n=this.getValueSize(),i=this.getInterpolation()===sr,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const f=t[u+g];if(f!==t[d+g]||f!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=Mn(e,0,o),this.values=Mn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Mn(this.times,0),t=Mn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=bi;class Ci extends rn{}Ci.prototype.ValueTypeName="bool";Ci.prototype.ValueBufferType=Array;Ci.prototype.DefaultInterpolation=Ji;Ci.prototype.InterpolantFactoryMethodLinear=void 0;Ci.prototype.InterpolantFactoryMethodSmooth=void 0;class Ac extends rn{}Ac.prototype.ValueTypeName="color";class is extends rn{}is.prototype.ValueTypeName="number";class c0 extends as{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Xt.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Wn extends rn{InterpolantFactoryMethodLinear(e){return new c0(this.times,this.values,this.getValueSize(),e)}}Wn.prototype.ValueTypeName="quaternion";Wn.prototype.DefaultInterpolation=bi;Wn.prototype.InterpolantFactoryMethodSmooth=void 0;class Li extends rn{}Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Ji;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;class ss extends rn{}ss.prototype.ValueTypeName="vector";class gi{constructor(e,t=-1,n,i=lo){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Vt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(u0(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(rn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=o0(l);l=bl(l,1,h),c=bl(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new is(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,f){if(p.length!==0){const m=[],v=[];Sc(p,m,v,g),m.length!==0&&f.push(new u(d,m,v))}},i=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let f=0;f<d[g].morphTargets.length;f++)p[d[g].morphTargets[f]]=-1;for(const f in p){const m=[],v=[];for(let b=0;b!==d[g].morphTargets.length;++b){const _=d[g];m.push(_.time),v.push(_.morphTarget===f?1:0)}i.push(new is(".morphTargetInfluence["+f+"]",m,v))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(ss,p+".position",d,"pos",i),n(Wn,p+".quaternion",d,"rot",i),n(ss,p+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function h0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return is;case"vector":case"vector2":case"vector3":case"vector4":return ss;case"color":return Ac;case"quaternion":return Wn;case"bool":case"boolean":return Ci;case"string":return Li}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function u0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=h0(r.type);if(r.times===void 0){const t=[],n=[];Sc(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const wi={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class d0{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const f0=new d0;let Xn=class{constructor(e){this.manager=e!==void 0?e:f0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};const dn={};class p0 extends Error{constructor(e,t){super(e),this.response=t}}class rs extends Xn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=wi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(dn[e]!==void 0){dn[e].push({onLoad:t,onProgress:n,onError:i});return}dn[e]=[],dn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=dn[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,g=p!==0;let f=0;const m=new ReadableStream({start(v){b();function b(){u.read().then(({done:_,value:x})=>{if(_)v.close();else{f+=x.byteLength;const A=new ProgressEvent("progress",{lengthComputable:g,loaded:f,total:p});for(let E=0,L=h.length;E<L;E++){const y=h[E];y.onProgress&&y.onProgress(A)}v.enqueue(x),b()}})}}});return new Response(m)}else throw new p0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{wi.add(e,c);const h=dn[e];delete dn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=dn[e];if(h===void 0)throw this.manager.itemError(e),c;delete dn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class m0 extends Xn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Qi("img");function l(){h(),wi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Lo extends Xn{constructor(e){super(e)}load(e,t,n,i){const s=new pt,o=new m0(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class qs extends et{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Dr=new Fe,Ml=new C,Sl=new C;class Po{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new oe(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new uo,this._frameExtents=new oe(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ml.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ml),Sl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Sl),t.updateMatrixWorld(),Dr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class g0 extends Po{constructor(){super(new St(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=$i*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _0 extends qs{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new g0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const wl=new Fe,Bi=new C,kr=new C;class v0 extends Po{constructor(){super(new St(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new oe(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Bi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bi),kr.copy(n.position),kr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kr),n.updateMatrixWorld(),i.makeTranslation(-Bi.x,-Bi.y,-Bi.z),wl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wl)}}class x0 extends qs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new v0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class y0 extends Po{constructor(){super(new po(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tc extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(et.DEFAULT_UP),this.updateMatrix(),this.target=new et,this.shadow=new y0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class b0 extends qs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class to{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class M0 extends Xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=wi.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){wi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){i&&i(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class Ro{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Al(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Al();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Al(){return(typeof performance>"u"?Date:performance).now()}class S0{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,s,o;switch(t){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,s=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-s,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let s=n,o=i;s!==o;++s)t[s]=t[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Xt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,s){const o=this._workIndex*s;Xt.multiplyQuaternionsFlat(e,o,e,t,e,n),Xt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,s){for(let o=0;o!==s;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Io="\\[\\]\\.:\\/",w0=new RegExp("["+Io+"]","g"),Do="[^"+Io+"]",A0="[^"+Io.replace("\\.","")+"]",T0=/((?:WC+[\/:])*)/.source.replace("WC",Do),E0=/(WCOD+)?/.source.replace("WCOD",A0),C0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Do),L0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Do),P0=new RegExp("^"+T0+E0+C0+L0+"$"),R0=["material","materials","bones","map"];class I0{constructor(e,t,n){const i=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(w0,"")}static parseTrackName(e){const t=P0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);R0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=I0;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class D0{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const s=t.tracks,o=s.length,a=new Array(o),l={endingStart:li,endingEnd:li};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=jh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,s=e._clip.duration,o=s/i,a=i/s;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Zh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case lo:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,s=this._loopCount;const o=n===Xh;if(e===0)return s===-1?i:o&&(s&1)===1?t-i:i;if(n===qh){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=ci,i.endingEnd=ci):(e?i.endingStart=this.zeroSlopeAtStart?ci:li:i.endingStart=zs,t?i.endingEnd=this.zeroSlopeAtEnd?ci:li:i.endingEnd=zs)}_scheduleFading(e,t,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=n,this}}const k0=new Float32Array(1);class Nr extends qn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,s=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],p=d.name;let g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}const f=t&&t._propertyBindings[u].binding.parsedPath;g=new S0(qe.create(n,p,f),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,s=this._actionsByClip[i];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,s=this._actionsByClip;let o=s[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,s=t[i];e._cacheIndex=i,t[i]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new wc(new Float32Array(2),new Float32Array(2),1,k0),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,s=t[i];e.__cacheIndex=i,t[i]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const i=t||this._root,s=i.uuid;let o=typeof e=="string"?gi.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=lo),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new D0(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const n=t||this._root,i=n.uuid,s=typeof e=="string"?gi.findByName(n,e):e,o=s?s.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,s=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[t];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Ec{constructor(e,t,n=0,i=1/0){this.ray=new Gs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ho,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return no(e,this,n,t),n.sort(Tl),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)no(e[i],this,n,t);return n.sort(Tl),n}}function Tl(r,e){return r.distance-e.distance}function no(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,o=i.length;s<o;s++)no(i[s],e,t,!0)}}class N0{constructor(){this.type="ShapePath",this.color=new De,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new $r,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,i){return this.currentPath.quadraticCurveTo(e,t,n,i),this}bezierCurveTo(e,t,n,i,s,o){return this.currentPath.bezierCurveTo(e,t,n,i,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(v){const b=[];for(let _=0,x=v.length;_<x;_++){const A=v[_],E=new Fs;E.curves=A.curves,b.push(E)}return b}function n(v,b){const _=b.length;let x=!1;for(let A=_-1,E=0;E<_;A=E++){let L=b[A],y=b[E],T=y.x-L.x,P=y.y-L.y;if(Math.abs(P)>Number.EPSILON){if(P<0&&(L=b[E],T=-T,y=b[A],P=-P),v.y<L.y||v.y>y.y)continue;if(v.y===L.y){if(v.x===L.x)return!0}else{const U=P*(v.x-L.x)-T*(v.y-L.y);if(U===0)return!0;if(U<0)continue;x=!x}}else{if(v.y!==L.y)continue;if(y.x<=v.x&&v.x<=L.x||L.x<=v.x&&v.x<=y.x)return!0}}return x}const i=mi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const c=[];if(s.length===1)return a=s[0],l=new Fs,l.curves=a.curves,c.push(l),c;let h=!i(s[0].getPoints());h=e?!h:h;const u=[],d=[];let p=[],g=0,f;d[g]=void 0,p[g]=[];for(let v=0,b=s.length;v<b;v++)a=s[v],f=a.getPoints(),o=i(f),o=e?!o:o,o?(!h&&d[g]&&g++,d[g]={s:new Fs,p:f},d[g].s.curves=a.curves,h&&g++,p[g]=[]):p[g].push({h:a,p:f[0]});if(!d[0])return t(s);if(d.length>1){let v=!1,b=0;for(let _=0,x=d.length;_<x;_++)u[_]=[];for(let _=0,x=d.length;_<x;_++){const A=p[_];for(let E=0;E<A.length;E++){const L=A[E];let y=!0;for(let T=0;T<d.length;T++)n(L.p,d[T].p)&&(_!==T&&b++,y?(y=!1,u[T].push(L)):v=!0);y&&u[_].push(L)}}b>0&&v===!1&&(p=u)}let m;for(let v=0,b=d.length;v<b;v++){l=d[v].s,c.push(l),m=p[v];for(let _=0,x=m.length;_<x;_++)l.holes.push(m[_].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);var F0=`uniform float u_time;\r
varying vec3 vPosition;\r
uniform sampler2D texture1;\r
float PI = 3.141592653589793238;\r
attribute vec3 aRandom;\r
attribute float aSize;

vec3 getPos(float progress) {\r
    float angle = progress * PI * 2.0;

    float x = sin(angle) + 2.0 * sin(2.0 * angle);\r
    float y = cos(angle) - 2.0 * cos(2.0 * angle);\r
    float z = -sin(3.0 * angle);

    return vec3(x, y, z);\r
}

vec3 getTangent(float progress) {\r
    float angle = progress * PI * 2.0;

    float x = cos(angle) + 4.0 * cos(2.0 * angle);\r
    float y = -sin(angle) + 4.0 * sin(2.0 * angle);\r
    float z = 3.0 * -cos(3.0 * angle);

    return normalize(vec3(x, y, z));\r
}

vec3 getNormal(float progress) {\r
    float angle = progress * PI * 2.0;

    float x = -sin(angle) - 8.0 * sin(2.0 * angle);\r
    float y = -cos(angle) + 8.0 * cos(2.0 * angle);\r
    float z = 9.0 * sin(3.0 * angle);

    return normalize(vec3(x, y, z));\r
}

void main() {\r
    vec3 pos = position;\r
    float progress = fract(u_time * 0.05 + aRandom.x);\r
    pos = getPos(progress);\r
    vec3 normal = getNormal(progress);\r
    vec3 tangent = getTangent(progress);\r
    vec3 binormal = normalize(cross(normal, tangent));

    float radius = 0.3 + aRandom.z * 0.1;\r
    float cx = radius * cos(aRandom.y * PI * 2.0 * u_time * 0.5 + aRandom.z * 7.0);\r
    float cy = radius * sin(aRandom.y * PI * 2.0 * u_time * 0.5 + aRandom.z * 7.0);

    pos += (normal * cx + binormal * cy);

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);\r
    gl_PointSize = 10.0 * (1.0 / -mvPosition.z);\r
    gl_Position = projectionMatrix * mvPosition;\r
}`,O0=`float PI = 3.141592653589793238;\r
uniform sampler2D u_normals;\r
varying vec2 vUv;

void main() {\r
    vec3 color = vec3(0.136, 0.559, 0.852);\r
    vec2 st = gl_PointCoord.xy;

    float disc = length(st - vec2(0.5));\r
    float alpha = smoothstep(0.5, 0.4, disc);

    vec4 normalTexture = texture2D(u_normals, st);

    vec3 normal = vec3(normalTexture.rg * 2.0 - 1.0, 0.0);\r
    normal.z = sqrt(1.0 - normal.x * normal.x - normal.y * normal.y);

    normal = normalize(normal);

    vec3 lightPos = vec3(1.0, 1.0, 1.0);\r
    float diffuse = max(0.0, dot(normal, normalize(lightPos)));\r
    vec3 color1 = vec3(0.579, 0.903, 0.983);

    gl_FragColor = vec4(color1, alpha * diffuse * 0.5);\r
}`,z0=`uniform float u_time;\r
uniform sampler2D u_dots;\r
uniform sampler2D u_stripes;\r
varying vec2 vUv;\r
varying vec3 vWorldPosition;\r
varying vec3 vNormal;

void main() {

    float time1 = u_time * 0.01;\r
    float time2 = u_time * 0.01;

    float texture1 = texture2D(u_stripes, vUv - time1).r;\r
    float texture11 = texture2D(u_stripes, vUv - time1 * 1.5).r;\r
    float texture3 = texture2D(u_dots, vUv * vec2(6.0, 4.0) - time1 * 1.5).r;

    float alpha = min(texture1, texture11) + texture3;

    vec3 viewDir = -normalize(vWorldPosition.xyz - cameraPosition);

    float fresnel = dot(viewDir, vNormal);\r
    fresnel = pow(fresnel, 3.0);

    vec3 color1 = vec3(0.579, 0.903, 0.983);\r
    gl_FragColor = vec4(color1, 1.0);\r
    gl_FragColor = vec4(vUv, 0.0, 1.0);\r
    gl_FragColor = vec4(vec3(color1), alpha * fresnel);\r
      
}`,B0=`uniform float u_time;\r
varying vec2 vUv;\r
varying vec3 vWorldPosition;\r
varying vec3 vNormal;

void main() {\r
    vUv = uv;\r
    vNormal = normal;

    vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}`;class Cc{constructor(e,t,n,i,s,o,a){this.engine=e,this.website=t,this.loader=s,this.holograms=a,this.frame=0,this.patrick=n,this.laptop=i,this.isPlaying=o,this.clock=new Ro,this.initRenderAll=!1}async startApp(){this.document=document,this.raycaster=new Ec,this.pointer=new oe,this.container=this.document.querySelectorAll(".three-wrapper-ps"),this.textureLoader=new Lo,await this.textureLoader.loadAsync("threejs/textures/dots.jpg").then(e=>{this.dotsTexture=e}),await this.textureLoader.loadAsync("threejs/textures/stripes.jpg").then(e=>{this.stripesTexture=e}),await this.textureLoader.loadAsync("threejs/textures/sphere-normals.jpg").then(e=>{this.sphereNormals=e}),this.uniforms={u_time:{type:"f",value:0},u_resolution:{type:"vec4",value:new Xe},u_normals:{value:this.sphereNormals},u_dots:{value:this.dotsTexture},u_stripes:{value:this.stripesTexture}},this.stateNumber=-1,this.initRaycaster(),this.addObjects(),this.addLights(),this.render()}onPointerMove(e,t){e.pointer.x=t.clientX/window.innerWidth*2-1,e.pointer.y=-(t.clientY/window.innerHeight)*2+1}initRaycaster(){window.addEventListener("pointermove",e=>this.onPointerMove(this,e))}addDots(){let e=1e4;const t=new Et,n=new Float32Array(e*3),i=new Float32Array(e*3),s=new Float32Array(e*1);for(let l=0;l<e;l+=3)n[l+0]=Math.random()-.5,n[l+1]=Math.random()-.5,n[l+2]=Math.random()-.5,i[l+0]=Math.random(),i[l+1]=Math.random(),i[l+2]=Math.random(),s[l+0]=.5+.5*Math.random();t.setAttribute("position",new rt(n,3)),t.setAttribute("aRandom",new rt(i,3)),t.setAttribute("size",new rt(s,1));const o=new _n({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:Ut,uniforms:this.uniforms,transparent:!0,depthTest:!1,vertexShader:F0,fragmentShader:O0});return new bo(t,o)}addTube(){let e=[];for(let o=0;o<=100;o++){let a=2*Math.PI*o/100,l=Math.sin(a)+2*Math.sin(2*a),c=Math.cos(a)-2*Math.cos(2*a),h=-Math.sin(3*a);e.push(new C(l,c,h))}let t=new pc(e);const n=new Eo(t,100,.33,100,!0);this.dotsTexture.wrapS=$t,this.dotsTexture.wrapT=$t,this.stripesTexture.wrapS=$t,this.stripesTexture.wrapT=$t;const i=new _n({extensions:{derivatives:"#extension GL_OES_standard_derivatives : enable"},side:Ut,uniforms:{u_dots:{value:this.dotsTexture},u_resolution:this.uniforms.u_resolution,u_stripes:{value:this.stripesTexture},u_time:this.uniforms.u_time},transparent:!0,side:nn,vertexShader:B0,fragmentShader:z0});return new At(n,i)}addObjects(){const e=this.addTube(),t=this.addDots();e.position.y=4.5,e.position.z=-15,t.position.y=4.5,t.position.z=-15,e.scale.x=8,e.scale.y=8,e.scale.z=8,t.scale.x=8,t.scale.y=8,t.scale.z=8,this.engine.scenes[2].add(e),this.engine.scenes[2].add(t)}addLights(){this.engine.scenes.forEach(e=>{const t=new Tc("#ffffff",.75);t.position.set(5,5,5);const n=new b0("#ffffff",.2);e.add(t),e.add(n)})}render(){if(!this.isPlaying)return;window.requestAnimationFrame(this.render.bind(this)),this.frame+=.01,this.uniforms.u_time.value=this.frame,this.uniforms.u_dots.value=this.dotsTexture;const e=this.website.actualRenderIndex;if(e===99)return;const t=this.engine.camera[e];this.engine.renderer[e],this.engine.scenes[e];for(let n=0;n<this.engine.scenes.length;n++)this.engine.renderer[n].render(this.engine.scenes[n],this.engine.camera[n]);this.holograms.check(),this.laptop.check(e),this.patrick.check(),this.raycaster.setFromCamera(this.pointer,t),this.engine.resize(e),e===0?this.laptop.animationsCheck(this.frame):e===1?(this.holograms.animationsCheck(this.frame),this.patrick.animationsCheck(this.frame,e)):e===2?(this.laptop.animationsCheck(this.frame),this.patrick.animationsCheck(this.frame,e),this.website.portfolio.checkRaycaster(this.engine.scenes[e],this.raycaster,this.pointer)):e===3&&this.patrick.animationsCheck(this.frame,e),this.loader.gltf&&this.loader.gltf.animations.length>0&&this.patrick.setAnimations(this.loader.gltf.animations,e)}}new Cc({dom:document.getElementById("container")});class U0{constructor(e){this.engine=e,this.state=!1,this.hologramPoints=[],this.hologramArray=[],this.nameHologram="Frontend",this.actualIndexHologram=0,this.stateDelete=!1}createHolograms(){const e=this.engine.scenes[1].getObjectByName("Holograms");this.holograms=new Gt,this.holograms.name="HologramsC",e.children.length>0&&(this.state=!0,e.children.forEach((t,n)=>{const i=new Gt;i.name=t.name,t.children.forEach(s=>{const o=s.geometry.attributes.position.array,a=s.material.color,l=[],c=[],h=new Et,u=new yo({color:new De(a.r,a.g,a.b),depthTest:!1,size:.006,transparent:!0,sizeAttenuation:!0,alphaTest:1,blending:Gr,side:Ut});for(let p=0;p<o.length;p+=3){const g=o[p]+5,f=o[p+1],m=o[p+2],v=g+.5,b=f+.5,_=m+.5;l.push(g,f,m),c.push(v,b,_)}h.needsUpdate=!0,h.setAttribute("position",new Tt(l,3));const d=new bo(h,u);d.geometry.attributes.position.needsUpdate=!0,d.rotation.x=Math.PI/2,d.geometry.attributes.position.originalPosition=d.geometry.attributes.position.array,d.geometry.attributes.position.randomValues=c,d.name=s.name,i.add(d),i.position.z=-10,i.name==="Graphic"&&(i.position.y=.55,i.position.x=80),i.name==="API"&&(i.position.y=.45,i.position.x=40),i.name==="Databases"&&(i.position.y=-.19,i.position.x=60),i.name==="Frontend"&&(i.position.y=.28,i.position.x=20),i.name==="Learning"&&(i.position.x=100)}),this.holograms.add(i)}),this.holograms.position.y=4.3,this.holograms.position.z=-4,this.engine.scenes[1].add(this.holograms))}check(){if(this.engine.scenes[1].children.length>0){if(!this.state)this.createHolograms();else if(!this.stateDelete){this.stateDelete=!0;const e=this.engine.scenes[1].getObjectByName("Holograms");this.engine.scenes[1].remove(e)}}return!!(this.state&&this.stateDelete)}checkNumber(){if(this.actualIndexHologram===0)return this.holograms.getObjectByName("Frontend");if(this.actualIndexHologram===1)return this.holograms.getObjectByName("API");if(this.actualIndexHologram===2)return this.holograms.getObjectByName("Databases");if(this.actualIndexHologram===3)return this.holograms.getObjectByName("Graphic");if(this.actualIndexHologram===4)return this.holograms.getObjectByName("Learning")}setNumber(e){this.actualIndexHologram=e}animationsCheck(e){if(this.state&&this.stateDelete){const t=this.checkNumber();if(this.actualIndexHologram===-1||this.actualIndexHologram===5)return;t.children.forEach(n=>{const{array:i,originalPosition:s,randomValues:o}=n.geometry.attributes.position;if(i[0]!==NaN){n.geometry.attributes.position.needsUpdate=!0;for(let a=0;a<i.length;a+=3)i[a]=s[a]+Math.cos(e+o[a])*3e-4,i[a+2]=s[a+2]+Math.cos(e+o[a+2])*3e-4}})}}}var Lc={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},ko={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},G0=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],Bs={CSS:{},springs:{}};function Qt(r,e,t){return Math.min(Math.max(r,e),t)}function Yi(r,e){return r.indexOf(e)>-1}function Fr(r,e){return r.apply(null,e)}var be={arr:function(r){return Array.isArray(r)},obj:function(r){return Yi(Object.prototype.toString.call(r),"Object")},pth:function(r){return be.obj(r)&&r.hasOwnProperty("totalLength")},svg:function(r){return r instanceof SVGElement},inp:function(r){return r instanceof HTMLInputElement},dom:function(r){return r.nodeType||be.svg(r)},str:function(r){return typeof r=="string"},fnc:function(r){return typeof r=="function"},und:function(r){return typeof r>"u"},nil:function(r){return be.und(r)||r===null},hex:function(r){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(r)},rgb:function(r){return/^rgb/.test(r)},hsl:function(r){return/^hsl/.test(r)},col:function(r){return be.hex(r)||be.rgb(r)||be.hsl(r)},key:function(r){return!Lc.hasOwnProperty(r)&&!ko.hasOwnProperty(r)&&r!=="targets"&&r!=="keyframes"}};function Pc(r){var e=/\(([^)]+)\)/.exec(r);return e?e[1].split(",").map(function(t){return parseFloat(t)}):[]}function Rc(r,e){var t=Pc(r),n=Qt(be.und(t[0])?1:t[0],.1,100),i=Qt(be.und(t[1])?100:t[1],.1,100),s=Qt(be.und(t[2])?10:t[2],.1,100),o=Qt(be.und(t[3])?0:t[3],.1,100),a=Math.sqrt(i/n),l=s/(2*Math.sqrt(i*n)),c=l<1?a*Math.sqrt(1-l*l):0,h=1,u=l<1?(l*a+-o)/c:-o+a;function d(g){var f=e?e*g/1e3:g;return l<1?f=Math.exp(-f*l*a)*(h*Math.cos(c*f)+u*Math.sin(c*f)):f=(h+u*f)*Math.exp(-f*a),g===0||g===1?g:1-f}function p(){var g=Bs.springs[r];if(g)return g;for(var f=1/6,m=0,v=0;;)if(m+=f,d(m)===1){if(v++,v>=16)break}else v=0;var b=m*f*1e3;return Bs.springs[r]=b,b}return e?d:p}function V0(r){return r===void 0&&(r=10),function(e){return Math.ceil(Qt(e,1e-6,1)*r)*(1/r)}}var H0=function(){var r=11,e=1/(r-1);function t(h,u){return 1-3*u+3*h}function n(h,u){return 3*u-6*h}function i(h){return 3*h}function s(h,u,d){return((t(u,d)*h+n(u,d))*h+i(u))*h}function o(h,u,d){return 3*t(u,d)*h*h+2*n(u,d)*h+i(u)}function a(h,u,d,p,g){var f,m,v=0;do m=u+(d-u)/2,f=s(m,p,g)-h,f>0?d=m:u=m;while(Math.abs(f)>1e-7&&++v<10);return m}function l(h,u,d,p){for(var g=0;g<4;++g){var f=o(u,d,p);if(f===0)return u;var m=s(u,d,p)-h;u-=m/f}return u}function c(h,u,d,p){if(!(0<=h&&h<=1&&0<=d&&d<=1))return;var g=new Float32Array(r);if(h!==u||d!==p)for(var f=0;f<r;++f)g[f]=s(f*e,h,d);function m(v){for(var b=0,_=1,x=r-1;_!==x&&g[_]<=v;++_)b+=e;--_;var A=(v-g[_])/(g[_+1]-g[_]),E=b+A*e,L=o(E,h,d);return L>=.001?l(v,E,h,d):L===0?E:a(v,b,b+e,h,d)}return function(v){return h===u&&d===p||v===0||v===1?v:s(m(v),u,p)}}return c}(),Ic=function(){var r={linear:function(){return function(n){return n}}},e={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var i,s=4;n<((i=Math.pow(2,--s))-1)/11;);return 1/Math.pow(4,3-s)-7.5625*Math.pow((i*3-2)/22-n,2)}},Elastic:function(n,i){n===void 0&&(n=1),i===void 0&&(i=.5);var s=Qt(n,1,10),o=Qt(i,.1,2);return function(a){return a===0||a===1?a:-s*Math.pow(2,10*(a-1))*Math.sin((a-1-o/(Math.PI*2)*Math.asin(1/s))*(Math.PI*2)/o)}}},t=["Quad","Cubic","Quart","Quint","Expo"];return t.forEach(function(n,i){e[n]=function(){return function(s){return Math.pow(s,i+2)}}}),Object.keys(e).forEach(function(n){var i=e[n];r["easeIn"+n]=i,r["easeOut"+n]=function(s,o){return function(a){return 1-i(s,o)(1-a)}},r["easeInOut"+n]=function(s,o){return function(a){return a<.5?i(s,o)(a*2)/2:1-i(s,o)(a*-2+2)/2}},r["easeOutIn"+n]=function(s,o){return function(a){return a<.5?(1-i(s,o)(1-a*2))/2:(i(s,o)(a*2-1)+1)/2}}}),r}();function No(r,e){if(be.fnc(r))return r;var t=r.split("(")[0],n=Ic[t],i=Pc(r);switch(t){case"spring":return Rc(r,e);case"cubicBezier":return Fr(H0,i);case"steps":return Fr(V0,i);default:return Fr(n,i)}}function Dc(r){try{var e=document.querySelectorAll(r);return e}catch{return}}function js(r,e){for(var t=r.length,n=arguments.length>=2?arguments[1]:void 0,i=[],s=0;s<t;s++)if(s in r){var o=r[s];e.call(n,o,s,r)&&i.push(o)}return i}function Xs(r){return r.reduce(function(e,t){return e.concat(be.arr(t)?Xs(t):t)},[])}function El(r){return be.arr(r)?r:(be.str(r)&&(r=Dc(r)||r),r instanceof NodeList||r instanceof HTMLCollection?[].slice.call(r):[r])}function Fo(r,e){return r.some(function(t){return t===e})}function Oo(r){var e={};for(var t in r)e[t]=r[t];return e}function io(r,e){var t=Oo(r);for(var n in r)t[n]=e.hasOwnProperty(n)?e[n]:r[n];return t}function Zs(r,e){var t=Oo(r);for(var n in e)t[n]=be.und(r[n])?e[n]:r[n];return t}function W0(r){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(r);return e?"rgba("+e[1]+",1)":r}function q0(r){var e=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,t=r.replace(e,function(a,l,c,h){return l+l+c+c+h+h}),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t),i=parseInt(n[1],16),s=parseInt(n[2],16),o=parseInt(n[3],16);return"rgba("+i+","+s+","+o+",1)"}function j0(r){var e=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(r)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(r),t=parseInt(e[1],10)/360,n=parseInt(e[2],10)/100,i=parseInt(e[3],10)/100,s=e[4]||1;function o(d,p,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?d+(p-d)*6*g:g<1/2?p:g<2/3?d+(p-d)*(2/3-g)*6:d}var a,l,c;if(n==0)a=l=c=i;else{var h=i<.5?i*(1+n):i+n-i*n,u=2*i-h;a=o(u,h,t+1/3),l=o(u,h,t),c=o(u,h,t-1/3)}return"rgba("+a*255+","+l*255+","+c*255+","+s+")"}function X0(r){if(be.rgb(r))return W0(r);if(be.hex(r))return q0(r);if(be.hsl(r))return j0(r)}function gn(r){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(r);if(e)return e[1]}function Z0(r){if(Yi(r,"translate")||r==="perspective")return"px";if(Yi(r,"rotate")||Yi(r,"skew"))return"deg"}function so(r,e){return be.fnc(r)?r(e.target,e.id,e.total):r}function en(r,e){return r.getAttribute(e)}function zo(r,e,t){var n=gn(e);if(Fo([t,"deg","rad","turn"],n))return e;var i=Bs.CSS[e+t];if(!be.und(i))return i;var s=100,o=document.createElement(r.tagName),a=r.parentNode&&r.parentNode!==document?r.parentNode:document.body;a.appendChild(o),o.style.position="absolute",o.style.width=s+t;var l=s/o.offsetWidth;a.removeChild(o);var c=l*parseFloat(e);return Bs.CSS[e+t]=c,c}function kc(r,e,t){if(e in r.style){var n=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=r.style[e]||getComputedStyle(r).getPropertyValue(n)||"0";return t?zo(r,i,t):i}}function Bo(r,e){if(be.dom(r)&&!be.inp(r)&&(!be.nil(en(r,e))||be.svg(r)&&r[e]))return"attribute";if(be.dom(r)&&Fo(G0,e))return"transform";if(be.dom(r)&&e!=="transform"&&kc(r,e))return"css";if(r[e]!=null)return"object"}function Nc(r){if(be.dom(r)){for(var e=r.style.transform||"",t=/(\w+)\(([^)]*)\)/g,n=new Map,i;i=t.exec(e);)n.set(i[1],i[2]);return n}}function Y0(r,e,t,n){var i=Yi(e,"scale")?1:0+Z0(e),s=Nc(r).get(e)||i;return t&&(t.transforms.list.set(e,s),t.transforms.last=e),n?zo(r,s,n):s}function Uo(r,e,t,n){switch(Bo(r,e)){case"transform":return Y0(r,e,n,t);case"css":return kc(r,e,t);case"attribute":return en(r,e);default:return r[e]||0}}function Go(r,e){var t=/^(\*=|\+=|-=)/.exec(r);if(!t)return r;var n=gn(r)||0,i=parseFloat(e),s=parseFloat(r.replace(t[0],""));switch(t[0][0]){case"+":return i+s+n;case"-":return i-s+n;case"*":return i*s+n}}function Fc(r,e){if(be.col(r))return X0(r);if(/\s/g.test(r))return r;var t=gn(r),n=t?r.substr(0,r.length-t.length):r;return e?n+e:n}function Vo(r,e){return Math.sqrt(Math.pow(e.x-r.x,2)+Math.pow(e.y-r.y,2))}function K0(r){return Math.PI*2*en(r,"r")}function J0(r){return en(r,"width")*2+en(r,"height")*2}function $0(r){return Vo({x:en(r,"x1"),y:en(r,"y1")},{x:en(r,"x2"),y:en(r,"y2")})}function Oc(r){for(var e=r.points,t=0,n,i=0;i<e.numberOfItems;i++){var s=e.getItem(i);i>0&&(t+=Vo(n,s)),n=s}return t}function Q0(r){var e=r.points;return Oc(r)+Vo(e.getItem(e.numberOfItems-1),e.getItem(0))}function zc(r){if(r.getTotalLength)return r.getTotalLength();switch(r.tagName.toLowerCase()){case"circle":return K0(r);case"rect":return J0(r);case"line":return $0(r);case"polyline":return Oc(r);case"polygon":return Q0(r)}}function e_(r){var e=zc(r);return r.setAttribute("stroke-dasharray",e),e}function t_(r){for(var e=r.parentNode;be.svg(e)&&be.svg(e.parentNode);)e=e.parentNode;return e}function Bc(r,e){var t=e||{},n=t.el||t_(r),i=n.getBoundingClientRect(),s=en(n,"viewBox"),o=i.width,a=i.height,l=t.viewBox||(s?s.split(" "):[0,0,o,a]);return{el:n,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:a,vW:l[2],vH:l[3]}}function n_(r,e){var t=be.str(r)?Dc(r)[0]:r,n=e||100;return function(i){return{property:i,el:t,svg:Bc(t),totalLength:zc(t)*(n/100)}}}function i_(r,e,t){function n(h){h===void 0&&(h=0);var u=e+h>=1?e+h:0;return r.el.getPointAtLength(u)}var i=Bc(r.el,r.svg),s=n(),o=n(-1),a=n(1),l=t?1:i.w/i.vW,c=t?1:i.h/i.vH;switch(r.property){case"x":return(s.x-i.x)*l;case"y":return(s.y-i.y)*c;case"angle":return Math.atan2(a.y-o.y,a.x-o.x)*180/Math.PI}}function Cl(r,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,n=Fc(be.pth(r)?r.totalLength:r,e)+"";return{original:n,numbers:n.match(t)?n.match(t).map(Number):[0],strings:be.str(r)||e?n.split(t):[]}}function Ho(r){var e=r?Xs(be.arr(r)?r.map(El):El(r)):[];return js(e,function(t,n,i){return i.indexOf(t)===n})}function Uc(r){var e=Ho(r);return e.map(function(t,n){return{target:t,id:n,total:e.length,transforms:{list:Nc(t)}}})}function s_(r,e){var t=Oo(e);if(/^spring/.test(t.easing)&&(t.duration=Rc(t.easing)),be.arr(r)){var n=r.length,i=n===2&&!be.obj(r[0]);i?r={value:r}:be.fnc(e.duration)||(t.duration=e.duration/n)}var s=be.arr(r)?r:[r];return s.map(function(o,a){var l=be.obj(o)&&!be.pth(o)?o:{value:o};return be.und(l.delay)&&(l.delay=a?0:e.delay),be.und(l.endDelay)&&(l.endDelay=a===s.length-1?e.endDelay:0),l}).map(function(o){return Zs(o,t)})}function r_(r){for(var e=js(Xs(r.map(function(s){return Object.keys(s)})),function(s){return be.key(s)}).reduce(function(s,o){return s.indexOf(o)<0&&s.push(o),s},[]),t={},n=function(s){var o=e[s];t[o]=r.map(function(a){var l={};for(var c in a)be.key(c)?c==o&&(l.value=a[c]):l[c]=a[c];return l})},i=0;i<e.length;i++)n(i);return t}function o_(r,e){var t=[],n=e.keyframes;n&&(e=Zs(r_(n),e));for(var i in e)be.key(i)&&t.push({name:i,tweens:s_(e[i],r)});return t}function a_(r,e){var t={};for(var n in r){var i=so(r[n],e);be.arr(i)&&(i=i.map(function(s){return so(s,e)}),i.length===1&&(i=i[0])),t[n]=i}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}function l_(r,e){var t;return r.tweens.map(function(n){var i=a_(n,e),s=i.value,o=be.arr(s)?s[1]:s,a=gn(o),l=Uo(e.target,r.name,a,e),c=t?t.to.original:l,h=be.arr(s)?s[0]:c,u=gn(h)||gn(l),d=a||u;return be.und(o)&&(o=c),i.from=Cl(h,d),i.to=Cl(Go(o,h),d),i.start=t?t.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=No(i.easing,i.duration),i.isPath=be.pth(s),i.isPathTargetInsideSVG=i.isPath&&be.svg(e.target),i.isColor=be.col(i.from.original),i.isColor&&(i.round=1),t=i,i})}var Gc={css:function(r,e,t){return r.style[e]=t},attribute:function(r,e,t){return r.setAttribute(e,t)},object:function(r,e,t){return r[e]=t},transform:function(r,e,t,n,i){if(n.list.set(e,t),e===n.last||i){var s="";n.list.forEach(function(o,a){s+=a+"("+o+") "}),r.style.transform=s}}};function Vc(r,e){var t=Uc(r);t.forEach(function(n){for(var i in e){var s=so(e[i],n),o=n.target,a=gn(s),l=Uo(o,i,a,n),c=a||gn(l),h=Go(Fc(s,c),l),u=Bo(o,i);Gc[u](o,i,h,n.transforms,!0)}})}function c_(r,e){var t=Bo(r.target,e.name);if(t){var n=l_(e,r),i=n[n.length-1];return{type:t,property:e.name,animatable:r,tweens:n,duration:i.end,delay:n[0].delay,endDelay:i.endDelay}}}function h_(r,e){return js(Xs(r.map(function(t){return e.map(function(n){return c_(t,n)})})),function(t){return!be.und(t)})}function Hc(r,e){var t=r.length,n=function(s){return s.timelineOffset?s.timelineOffset:0},i={};return i.duration=t?Math.max.apply(Math,r.map(function(s){return n(s)+s.duration})):e.duration,i.delay=t?Math.min.apply(Math,r.map(function(s){return n(s)+s.delay})):e.delay,i.endDelay=t?i.duration-Math.max.apply(Math,r.map(function(s){return n(s)+s.duration-s.endDelay})):e.endDelay,i}var Ll=0;function u_(r){var e=io(Lc,r),t=io(ko,r),n=o_(t,r),i=Uc(r.targets),s=h_(i,n),o=Hc(s,t),a=Ll;return Ll++,Zs(e,{id:a,children:[],animatables:i,animations:s,duration:o.duration,delay:o.delay,endDelay:o.endDelay})}var jt=[],Wc=function(){var r;function e(){!r&&(!Pl()||!_e.suspendWhenDocumentHidden)&&jt.length>0&&(r=requestAnimationFrame(t))}function t(i){for(var s=jt.length,o=0;o<s;){var a=jt[o];a.paused?(jt.splice(o,1),s--):(a.tick(i),o++)}r=o>0?requestAnimationFrame(t):void 0}function n(){_e.suspendWhenDocumentHidden&&(Pl()?r=cancelAnimationFrame(r):(jt.forEach(function(i){return i._onDocumentVisibility()}),Wc()))}return typeof document<"u"&&document.addEventListener("visibilitychange",n),e}();function Pl(){return!!document&&document.hidden}function _e(r){r===void 0&&(r={});var e=0,t=0,n=0,i,s=0,o=null;function a(b){var _=window.Promise&&new Promise(function(x){return o=x});return b.finished=_,_}var l=u_(r);a(l);function c(){var b=l.direction;b!=="alternate"&&(l.direction=b!=="normal"?"normal":"reverse"),l.reversed=!l.reversed,i.forEach(function(_){return _.reversed=l.reversed})}function h(b){return l.reversed?l.duration-b:b}function u(){e=0,t=h(l.currentTime)*(1/_e.speed)}function d(b,_){_&&_.seek(b-_.timelineOffset)}function p(b){if(l.reversePlayback)for(var x=s;x--;)d(b,i[x]);else for(var _=0;_<s;_++)d(b,i[_])}function g(b){for(var _=0,x=l.animations,A=x.length;_<A;){var E=x[_],L=E.animatable,y=E.tweens,T=y.length-1,P=y[T];T&&(P=js(y,function(de){return b<de.end})[0]||P);for(var U=Qt(b-P.start-P.delay,0,P.duration)/P.duration,X=isNaN(U)?1:P.easing(U),D=P.to.strings,I=P.round,z=[],Z=P.to.numbers.length,J=void 0,V=0;V<Z;V++){var Q=void 0,Y=P.to.numbers[V],fe=P.from.numbers[V]||0;P.isPath?Q=i_(P.value,X*Y,P.isPathTargetInsideSVG):Q=fe+X*(Y-fe),I&&(P.isColor&&V>2||(Q=Math.round(Q*I)/I)),z.push(Q)}var O=D.length;if(!O)J=z[0];else{J=D[0];for(var K=0;K<O;K++){D[K];var se=D[K+1],N=z[K];isNaN(N)||(se?J+=N+se:J+=N+" ")}}Gc[E.type](L.target,E.property,J,L.transforms),E.currentValue=J,_++}}function f(b){l[b]&&!l.passThrough&&l[b](l)}function m(){l.remaining&&l.remaining!==!0&&l.remaining--}function v(b){var _=l.duration,x=l.delay,A=_-l.endDelay,E=h(b);l.progress=Qt(E/_*100,0,100),l.reversePlayback=E<l.currentTime,i&&p(E),!l.began&&l.currentTime>0&&(l.began=!0,f("begin")),!l.loopBegan&&l.currentTime>0&&(l.loopBegan=!0,f("loopBegin")),E<=x&&l.currentTime!==0&&g(0),(E>=A&&l.currentTime!==_||!_)&&g(_),E>x&&E<A?(l.changeBegan||(l.changeBegan=!0,l.changeCompleted=!1,f("changeBegin")),f("change"),g(E)):l.changeBegan&&(l.changeCompleted=!0,l.changeBegan=!1,f("changeComplete")),l.currentTime=Qt(E,0,_),l.began&&f("update"),b>=_&&(t=0,m(),l.remaining?(e=n,f("loopComplete"),l.loopBegan=!1,l.direction==="alternate"&&c()):(l.paused=!0,l.completed||(l.completed=!0,f("loopComplete"),f("complete"),!l.passThrough&&"Promise"in window&&(o(),a(l)))))}return l.reset=function(){var b=l.direction;l.passThrough=!1,l.currentTime=0,l.progress=0,l.paused=!0,l.began=!1,l.loopBegan=!1,l.changeBegan=!1,l.completed=!1,l.changeCompleted=!1,l.reversePlayback=!1,l.reversed=b==="reverse",l.remaining=l.loop,i=l.children,s=i.length;for(var _=s;_--;)l.children[_].reset();(l.reversed&&l.loop!==!0||b==="alternate"&&l.loop===1)&&l.remaining++,g(l.reversed?l.duration:0)},l._onDocumentVisibility=u,l.set=function(b,_){return Vc(b,_),l},l.tick=function(b){n=b,e||(e=n),v((n+(t-e))*_e.speed)},l.seek=function(b){v(h(b))},l.pause=function(){l.paused=!0,u()},l.play=function(){l.paused&&(l.completed&&l.reset(),l.paused=!1,jt.push(l),u(),Wc())},l.reverse=function(){c(),l.completed=!l.reversed,u()},l.restart=function(){l.reset(),l.play()},l.remove=function(b){var _=Ho(b);qc(_,l)},l.reset(),l.autoplay&&l.play(),l}function Rl(r,e){for(var t=e.length;t--;)Fo(r,e[t].animatable.target)&&e.splice(t,1)}function qc(r,e){var t=e.animations,n=e.children;Rl(r,t);for(var i=n.length;i--;){var s=n[i],o=s.animations;Rl(r,o),!o.length&&!s.children.length&&n.splice(i,1)}!t.length&&!n.length&&e.pause()}function d_(r){for(var e=Ho(r),t=jt.length;t--;){var n=jt[t];qc(e,n)}}function f_(r,e){e===void 0&&(e={});var t=e.direction||"normal",n=e.easing?No(e.easing):null,i=e.grid,s=e.axis,o=e.from||0,a=o==="first",l=o==="center",c=o==="last",h=be.arr(r),u=parseFloat(h?r[0]:r),d=h?parseFloat(r[1]):0,p=gn(h?r[1]:r)||0,g=e.start||0+(h?u:0),f=[],m=0;return function(v,b,_){if(a&&(o=0),l&&(o=(_-1)/2),c&&(o=_-1),!f.length){for(var x=0;x<_;x++){if(!i)f.push(Math.abs(o-x));else{var A=l?(i[0]-1)/2:o%i[0],E=l?(i[1]-1)/2:Math.floor(o/i[0]),L=x%i[0],y=Math.floor(x/i[0]),T=A-L,P=E-y,U=Math.sqrt(T*T+P*P);s==="x"&&(U=-T),s==="y"&&(U=-P),f.push(U)}m=Math.max.apply(Math,f)}n&&(f=f.map(function(D){return n(D/m)*m})),t==="reverse"&&(f=f.map(function(D){return s?D<0?D*-1:-D:Math.abs(m-D)}))}var X=h?(d-u)/m:u;return g+X*(Math.round(f[b]*100)/100)+p}}function p_(r){r===void 0&&(r={});var e=_e(r);return e.duration=0,e.add=function(t,n){var i=jt.indexOf(e),s=e.children;i>-1&&jt.splice(i,1);function o(d){d.passThrough=!0}for(var a=0;a<s.length;a++)o(s[a]);var l=Zs(t,io(ko,r));l.targets=l.targets||r.targets;var c=e.duration;l.autoplay=!1,l.direction=e.direction,l.timelineOffset=be.und(n)?c:Go(n,c),o(e),e.seek(l.timelineOffset);var h=_e(l);o(h),s.push(h);var u=Hc(s,r);return e.delay=u.delay,e.endDelay=u.endDelay,e.duration=u.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e}_e.version="3.2.1";_e.speed=1;_e.suspendWhenDocumentHidden=!0;_e.running=jt;_e.remove=d_;_e.get=Uo;_e.set=Vc;_e.convertPx=zo;_e.path=n_;_e.setDashoffset=e_;_e.stagger=f_;_e.timeline=p_;_e.easing=No;_e.penner=Ic;_e.random=function(r,e){return Math.floor(Math.random()*(e-r+1))+r};class m_{constructor(e,t){this.engine=e,this.website=t,this.document=document,this.modelAbout,this.modelPortfolio,this.animations=[],this.isActive=!0,this.initAnimate=0,this.render()}render(){this.about=this.document.querySelector(".about"),this.portfolio=this.document.querySelector(".portfolio"),this.initLaptop()}initLaptop(){if(!this.modelAbout&&!this.modelPortfolio&&(this.modelAbout=this.engine.scenes[0].getObjectByName("LaptopAll"),this.modelPortfolio=this.engine.scenes[2].getObjectByName("LaptopAll"),this.img1About=this.modelAbout.getObjectByName("Img1"),this.img2About=this.modelAbout.getObjectByName("Img2"),this.imgProjectsAbout=this.modelAbout.getObjectByName("imgProjects"),this.img1Portfolio=this.modelPortfolio.getObjectByName("Img1"),this.img2Portfolio=this.modelPortfolio.getObjectByName("Img2"),this.modelPortfolio.scale.x=.4,this.modelPortfolio.scale.y=.4,this.modelPortfolio.scale.z=.4,this.modelAbout.remove(this.imgProjectsAbout),this.modelPortfolio.remove(this.img1Portfolio),this.modelPortfolio.remove(this.img2Portfolio)),this.modelAbout&&this.modelPortfolio&&!this.state){this.modelAbout.children.forEach(n=>{n.name==="KeyboardObj"&&(this.buttonFrontAbout=n,this.buttonFrontPortfolio=n),n.name==="KeyboardText"&&(this.buttonsEdgesAbout=n,this.buttonsEdgesPortfolio=n),n.name==="Img1"&&(this.img1About=n),n.name==="Img2"&&(this.img2About=n)});const e={r:0,g:.5,b:0},t={alphaImg1:1,alphaImg2:0};this.animations.push(_e({targets:t,round:10,alphaImg1:[{delay:6e3,value:0,duration:1e3},{delay:6e3,value:1,duration:1e3}],alphaImg2:[{delay:6e3,value:1,duration:1e3},{delay:6e3,value:0,duration:1e3}],loop:!0,update:()=>{this.img1About.material.opacity=t.alphaImg1,this.img2About.material.opacity=t.alphaImg2}})),this.buttonFrontAbout.material.emissiveIntensity=2,this.animations.push(_e({targets:e,r:[{value:0},{value:.5},{value:0}],g:[{value:0},{value:0},{value:.5}],b:[{value:.5},{value:0},{value:0}],easing:"linear",duration:2e4,delay:0,loop:!0,update:()=>{this.buttonsEdgesAbout.material.color.r=e.r,this.buttonsEdgesAbout.material.color.g=e.g,this.buttonsEdgesAbout.material.color.b=e.b,this.buttonsEdgesAbout.material.emissive.r=e.r,this.buttonsEdgesAbout.material.emissive.g=e.g,this.buttonsEdgesAbout.material.emissive.b=e.b,this.buttonsEdgesPortfolio.material.color.r=e.r,this.buttonsEdgesPortfolio.material.color.g=e.g,this.buttonsEdgesPortfolio.material.color.b=e.b,this.buttonsEdgesPortfolio.material.emissive.r=e.r,this.buttonsEdgesPortfolio.material.emissive.g=e.g,this.buttonsEdgesPortfolio.material.emissive.b=e.b,this.buttonFrontAbout.material.color.r=e.r+.2,this.buttonFrontAbout.material.color.g=e.g+.2,this.buttonFrontAbout.material.color.b=e.b+.2,this.buttonFrontAbout.material.emissive.r=e.r+.2,this.buttonFrontAbout.material.emissive.g=e.g+.2,this.buttonFrontAbout.material.emissive.b=e.b+.2,this.buttonFrontPortfolio.material.color.r=e.r+.2,this.buttonFrontPortfolio.material.color.g=e.g+.2,this.buttonFrontPortfolio.material.color.b=e.b+.2,this.buttonFrontPortfolio.material.emissive.r=e.r,this.buttonFrontPortfolio.material.emissive.g=e.g,this.buttonFrontPortfolio.material.emissive.b=e.b}})),this.state=!0}}checkButtons(){this.modelAbout.children.forEach(e=>{const t=e.name;(t==="ClientsB"||t==="ClientsT"||t==="ProjectsB"||t==="ProjectsT"||t==="LearnT"||t==="LearnB"||t==="DrawingsT"||t==="DrawingsB"||t==="ShowT"||t==="ShowB"||t==="LeftB"||t==="RightB")&&(e.visible=!1)})}check(e){const t=this.engine.scenes[0].getObjectByName("LaptopAll"),n=this.engine.scenes[2].getObjectByName("LaptopAll");return t&&n&&(this.state?this.checkButtons(e):this.initLaptop()),!!(t&&n&&this.state)}animationsCheck(e){this.initLaptop()}}const Or=new WeakMap;class g_ extends Xn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const s=new rs(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Ot).catch(n)}decodeDracoFile(e,t,n,i,s=Mi){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Or.has(e)){const l=Or.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const s=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(s,o).then(l=>(i=l,new Promise((c,h)=>{i._callbacks[s]={resolve:c,reject:h},i.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&s&&this._releaseTask(i,s)}),Or.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Et;e.index&&t.setIndex(new rt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],s=i.name,o=i.array,a=i.itemSize,l=new rt(o,a);s==="color"&&this._assignVertexColorSpace(l,i.vertexColorSpace),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ot)return;const n=new De;for(let i=0,s=e.count;i<s;i++)n.fromBufferAttribute(e,i).convertSRGBToLinear(),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new rs(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,s)=>{n.load(e,i,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=__.toString(),o=["/* draco decoder */",i,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(s){const o=s.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,s){return i._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function __(){let r,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":r=a.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const p=t(u,d,new Int8Array(l),c),g=p.attributes.map(f=>f.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,p;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,p=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,p=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const f={index:null,attributes:[]};for(const m in h){const v=self[u[m]];let b,_;if(c.useUniqueIDs)_=h[m],b=a.GetAttributeByUniqueId(d,_);else{if(_=a.GetAttributeId(d,o[h[m]]),_===-1)continue;b=a.GetAttribute(d,_)}const x=i(o,a,d,m,v,b);m==="color"&&(x.vertexColorSpace=c.vertexColorSpace),f.attributes.push(x)}return g===o.TRIANGULAR_MESH&&(f.index=n(o,a,d)),o.destroy(d),f}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const p=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:p,itemSize:1}}function i(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,f=g*h.BYTES_PER_ELEMENT,m=s(o,h),v=o._malloc(f);a.GetAttributeDataArrayForAllPoints(l,u,m,f,v);const b=new h(o.HEAPF32.buffer,v,g).slice();return o._free(v),{name:c,array:b,itemSize:d}}function s(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function Il(r,e){if(e===Yh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===jr||e===jl){let t=r.getIndex();if(t===null){const o=[],a=r.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);r.setIndex(o),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===jr)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class v_ extends Xn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new S_(t)}),this.register(function(t){return new P_(t)}),this.register(function(t){return new R_(t)}),this.register(function(t){return new I_(t)}),this.register(function(t){return new A_(t)}),this.register(function(t){return new T_(t)}),this.register(function(t){return new E_(t)}),this.register(function(t){return new C_(t)}),this.register(function(t){return new M_(t)}),this.register(function(t){return new L_(t)}),this.register(function(t){return new w_(t)}),this.register(function(t){return new y_(t)}),this.register(function(t){return new D_(t)}),this.register(function(t){return new k_(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=to.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new rs(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jc){try{o[Ge.KHR_BINARY_GLTF]=new N_(e)}catch(u){i&&i(u);return}s=JSON.parse(o[Ge.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Z_(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case Ge.KHR_MATERIALS_UNLIT:o[u]=new b_;break;case Ge.KHR_DRACO_MESH_COMPRESSION:o[u]=new F_(s,this.dracoLoader);break;case Ge.KHR_TEXTURE_TRANSFORM:o[u]=new O_;break;case Ge.KHR_MESH_QUANTIZATION:o[u]=new z_;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function x_(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ge={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class y_{constructor(e){this.parser=e,this.name=Ge.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new De(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Tc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new x0(h),c.distance=u;break;case"spot":c=new _0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,wn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class b_{constructor(){this.name=Ge.KHR_MATERIALS_UNLIT}getMaterialType(){return _t}extendParams(e,t,n){const i=[];e.color=new De(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,We))}return Promise.all(i)}}class M_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class S_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new oe(a,a)}return Promise.all(s)}}class w_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class A_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,We)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class T_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class E_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De(a[0],a[1],a[2]),Promise.all(s)}}class C_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class L_{constructor(e){this.parser=e,this.name=Ge.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:jn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,We)),Promise.all(s)}}class P_{constructor(e){this.parser=e,this.name=Ge.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class R_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class I_{constructor(e){this.parser=e,this.name=Ge.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class D_{constructor(e){this.name=Ge.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class k_{constructor(e){this.name=Ge.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ft.TRIANGLES&&c.mode!==Ft.TRIANGLE_STRIP&&c.mode!==Ft.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const f=new Fe,m=new C,v=new Xt,b=new C(1,1,1),_=new Eg(g.geometry,g.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&v.fromBufferAttribute(l.ROTATION,x),l.SCALE&&b.fromBufferAttribute(l.SCALE,x),_.setMatrixAt(x,f.compose(m,v,b));for(const x in l)x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&g.geometry.setAttribute(x,l[x]);et.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),p.push(_)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const jc="glTF",Ui=12,Dl={JSON:1313821514,BIN:5130562};class N_{constructor(e){this.name=Ge.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ui),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ui,s=new DataView(e,Ui);let o=0;for(;o<i;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===Dl.JSON){const c=new Uint8Array(e,Ui+o,a);this.content=n.decode(c)}else if(l===Dl.BIN){const c=Ui+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class F_{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ge.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=ro[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=ro[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=_i[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){i.decodeDracoFile(h,function(d){for(const p in d.attributes){const g=d.attributes[p],f=l[p];f!==void 0&&(g.normalized=f)}u(d)},a,c)})})}}class O_{constructor(){this.name=Ge.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class z_{constructor(){this.name=Ge.KHR_MESH_QUANTIZATION}}class Xc extends as{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,f=g-c,m=-2*p+3*d,v=p-d,b=1-m,_=v-d+u;for(let x=0;x!==a;x++){const A=o[f+x+a],E=o[f+x+l]*h,L=o[g+x+a],y=o[g+x]*h;s[x]=b*A+_*E+m*L+v*y}return s}}const B_=new Xt;class U_ extends Xc{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return B_.fromArray(s).normalize().toArray(s),s}}const Ft={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},_i={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},kl={9728:dt,9729:Ct,9984:qr,9985:Wl,9986:ks,9987:Bn},Nl={33071:zt,33648:Os,10497:$t},zr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ro={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Sn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},G_={CUBICSPLINE:void 0,LINEAR:bi,STEP:Ji},Br={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function V_(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Co({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:nn})),r.DefaultMaterial}function Gi(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function H_(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(r.morphAttributes.position=h),i&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function W_(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function q_(r){const e=r.extensions&&r.extensions[Ge.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+Fl(e.attributes):t=r.indices+":"+Fl(r.attributes)+":"+r.mode,t}function Fl(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function oo(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function j_(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const X_=new Fe;class Z_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new x_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new Lo(this.options.manager):this.textureLoader=new M0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new rs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Gi(s,a,i),wn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())s(h,a.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ge.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(to.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=zr[i.type],a=_i[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new rt(c,o,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=zr[i.type],c=_i[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let f,m;if(p&&p!==u){const v=Math.floor(d/p),b="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+v+":"+i.count;let _=t.cache.get(b);_||(f=new c(a,v*p,i.count*p/h),_=new bg(f,p/h),t.cache.add(b,_)),m=new _o(_,l,d%p/h,g)}else a===null?f=new c(i.count*l):f=new c(a,d,i.count*l),m=new rt(f,l,g);if(i.sparse!==void 0){const v=zr.SCALAR,b=_i[i.sparse.indices.componentType],_=i.sparse.indices.byteOffset||0,x=i.sparse.values.byteOffset||0,A=new b(o[1],_,i.sparse.count*v),E=new c(o[2],x,i.sparse.count*l);a!==null&&(m=new rt(m.array.slice(),m.itemSize,m.normalized));for(let L=0,y=A.length;L<y;L++){const T=A[L];if(m.setX(T,E[L*l]),l>=2&&m.setY(T,E[L*l+1]),l>=3&&m.setZ(T,E[L*l+2]),l>=4&&m.setW(T,E[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"";const d=(s.samplers||{})[o.sampler]||{};return h.magFilter=kl[d.magFilter]||Ct,h.minFilter=kl[d.minFilter]||Bn,h.wrapS=Nl[d.wrapS]||$t,h.wrapT=Nl[d.wrapT]||$t,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(f){const m=new pt(f);m.needsUpdate=!0,d(m)}),t.load(to.resolveURL(u,s.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||j_(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ge.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ge.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ge.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new yo,tn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new fc,tn.prototype.copy.call(l,n),l.color.copy(n.color),this.cache.add(a,l)),n=l}if(i||s||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return Co}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ge.KHR_MATERIALS_UNLIT]){const u=i[Ge.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,We)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Ut);const h=s.alphaMode||Br.OPAQUE;if(h===Br.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Br.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==_t&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new oe(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&o!==_t&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==_t&&(a.emissive=new De().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==_t&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,We)),Promise.all(c).then(function(){const u=new o(a);return s.name&&(u.name=s.name),wn(u,s),t.associations.set(u,{materials:e}),s.extensions&&Gi(i,u,s),u})}createUniqueName(e){const t=qe.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(a){return n[Ge.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ol(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=q_(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Ge.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Ol(new Et,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?V_(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const f=h[p],m=o[p];let v;const b=c[p];if(m.mode===Ft.TRIANGLES||m.mode===Ft.TRIANGLE_STRIP||m.mode===Ft.TRIANGLE_FAN||m.mode===void 0)v=s.isSkinnedMesh===!0?new Sg(f,b):new At(f,b),v.isSkinnedMesh===!0&&v.normalizeSkinWeights(),m.mode===Ft.TRIANGLE_STRIP?v.geometry=Il(v.geometry,jl):m.mode===Ft.TRIANGLE_FAN&&(v.geometry=Il(v.geometry,jr));else if(m.mode===Ft.LINES)v=new Cg(f,b);else if(m.mode===Ft.LINE_STRIP)v=new xo(f,b);else if(m.mode===Ft.LINE_LOOP)v=new Lg(f,b);else if(m.mode===Ft.POINTS)v=new bo(f,b);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(v.geometry.morphAttributes).length>0&&W_(v,s),v.name=t.createUniqueName(s.name||"mesh_"+e),wn(v,s),m.extensions&&Gi(i,v,m),t.assignFinalMaterial(v),u.push(v)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return u[0];const d=new Gt;t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new St(fu.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new po(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Fe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new vo(a,l)})}loadAnimation(e){const n=this.json.animations[e],i=[],s=[],o=[],a=[],l=[];for(let c=0,h=n.channels.length;c<h;c++){const u=n.channels[c],d=n.samplers[u.sampler],p=u.target,g=p.node,f=n.parameters!==void 0?n.parameters[d.input]:d.input,m=n.parameters!==void 0?n.parameters[d.output]:d.output;i.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",f)),o.push(this.getDependency("accessor",m)),a.push(d),l.push(p)}return Promise.all([Promise.all(i),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],p=c[3],g=c[4],f=[];for(let v=0,b=h.length;v<b;v++){const _=h[v],x=u[v],A=d[v],E=p[v],L=g[v];if(_===void 0)continue;_.updateMatrix();let y;switch(Sn[L.path]){case Sn.weights:y=is;break;case Sn.rotation:y=Wn;break;case Sn.position:case Sn.scale:default:y=ss;break}const T=_.name?_.name:_.uuid,P=E.interpolation!==void 0?G_[E.interpolation]:bi,U=[];Sn[L.path]===Sn.weights?_.traverse(function(D){D.morphTargetInfluences&&U.push(D.name?D.name:D.uuid)}):U.push(T);let X=A.array;if(A.normalized){const D=oo(X.constructor),I=new Float32Array(X.length);for(let z=0,Z=X.length;z<Z;z++)I[z]=X[z]*D;X=I}for(let D=0,I=U.length;D<I;D++){const z=new y(U[D]+"."+Sn[L.path],x.array,X,P);E.interpolation==="CUBICSPLINE"&&(z.createInterpolant=function(J){const V=this instanceof Wn?U_:Xc;return new V(this.times,this.values,this.getValueSize()/3,J)},z.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),f.push(z)}}const m=n.name?n.name:"animation_"+e;return new gi(m,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,X_)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(s.isBone===!0?h=new dc:c.length>1?h=new Gt:c.length===1?h=c[0]:h=new et,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=o),wn(h,s),s.extensions&&Gi(n,h,s),s.matrix!==void 0){const u=new Fe;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Gt;n.name&&(s.name=i.createUniqueName(n.name)),wn(s,n),n.extensions&&Gi(t,s,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof tn||d instanceof pt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(s),s})}}function Y_(r,e,t){const n=e.attributes,i=new Ai;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),a.normalized){const h=oo(_i[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new C,l=new C;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const f=oo(_i[d.componentType]);l.multiplyScalar(f)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}r.boundingBox=i;const o=new Ti;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=o}function Ol(r,e,t){const n=e.attributes,i=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){r.setAttribute(a,l)})}for(const o in n){const a=ro[o]||o.toLowerCase();a in r.attributes||i.push(s(n[o],a))}if(e.indices!==void 0&&!r.index){const o=t.getDependency("accessor",e.indices).then(function(a){r.setIndex(a)});i.push(o)}return wn(r,e),Y_(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?H_(r,e.targets,t):r})}function Vi(r){const e=new Map,t=new Map,n=r.clone();return Zc(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,o=e.get(i),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Zc(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Zc(r.children[n],e.children[n],t)}class K_{constructor(e,t){this.isAsset=t,this.engine=e,this.document=document,this.loaderBox=document.querySelector("div.loader-box")}initButton(){for(let n=0;n<this.loader.children.length;n++)this.loader.children[n].classList.add("active");const e=this.loader.children;let t;this.button=this.document.createElement("button"),this.button.textContent="Start";for(let n=0;n<e.length;n++)e[n].id==="p-loader"&&(t=n);this.loader.removeChild(this.loader.children[t]),this.loader.classList.add("active"),this.loader.appendChild(this.button),this.button.addEventListener("click",()=>{this.loaderBox.style.visibility="hidden",this.loaderBox.style.zIndex=-1})}async initLoader(){this.window=window,this.document=document,this.wrapper=this.document.querySelector("#wrapperinho"),this.loader=this.document.querySelector("#loader"),this.pLoader=this.document.querySelector("#p-loader"),this.initGLTF(),await this.gltfLoader.loadAsync("threejs/models.gltf",e=>{const t=e.loaded/e.total*100;this.setLoadingText(t)}).then(e=>{const t=new Gt;t.name="LaptopAll";const n=new Gt;n.name="Holograms";const i=new Gt;i.name="Me";const s=[],o=[],a=[];e.scene.traverse(p=>{const g=p.name;(g==="KeyboardText"||g==="Laptop"||g==="ClientsB"||g==="ClientsT"||g==="Img2"||g==="LearnT"||g==="Img1"||g==="imgProjects"||g==="KeyboardObj"||g==="ShowB"||g==="DrawingsB"||g==="DrawingsT"||g==="LeftB"||g==="ProjectsB"||g==="ProjectsT"||g==="RightB"||g==="ShowT"||g==="LearnB")&&o.push(p),(g==="Graphic"||g==="Learning"||g==="API"||g==="Databases"||g==="Frontend")&&s.push(p),(g==="body-copy1"||g==="details-copy001"||g==="eyes001"||g==="shoe-reto-left-copy001"||g==="shoe-reto-right-copy001"||g==="shorts-copy001"||g==="tshirt-copy1"||g==="spine"||g==="neutral_bone")&&a.push(p)}),s.forEach(p=>{n.add(p)}),o.forEach(p=>{t.add(p)}),a.forEach(p=>{i.add(p)});const l=Vi(t),c=Vi(t),h=Vi(i),u=Vi(i),d=Vi(i);this.engine.scenes[0].add(l),this.engine.scenes[1].add(h),this.engine.scenes[1].add(n),this.engine.scenes[2].add(u),this.engine.scenes[2].add(c),this.engine.scenes[3].add(d),console.log("ok!"),this.initButton(),this.gltf=e})}initGLTF(){const e="https://www.gstatic.com/draco/versioned/decoders/1.5.4/";this.dracoLoader=new g_,this.gltfLoader=new v_,this.dracoLoader.setDecoderPath(e),this.dracoLoader.setDecoderConfig({type:"js"}),this.gltfLoader.setDRACOLoader(this.dracoLoader)}setLoading(e){this.isLoading=e}setLoadingText(e){const t=Math.floor(e);if(e<100){for(let n=0;n<20;n++){let s=(n+1)/20*100;e>=s&&(this.loader.children[n].className="active")}this.pLoader.textContent=t+"%"}}}class J_{constructor(e){this.window=window,this.document=document,this.engine=e,this.contactAnimation,this.knowledgeAnimation,this.portfolioAnimation,this.modelContact,this.modelKnowledge,this.modelPortfolio,this.isAnimations=!1,this.initState=!1,this.initPositions=!1,this.actualState=-1}check(){return this.modelContact&&this.modelKnowledge&&this.modelPortfolio&&this.isAnimations?(this.initPositions||(this.initPositions=!0,this.modelKnowledge.position.x=0,this.modelKnowledge.position.y=3.5,this.modelKnowledge.position.z=4,this.modelKnowledge.rotation.y=0,this.modelPortfolio.position.x=-4,this.modelPortfolio.position.y=5,this.modelPortfolio.position.z=0,this.modelPortfolio.rotation.y=Math.PI/2.5,this.modelContact.position.x=.9,this.modelContact.position.y=5,this.modelContact.position.z=3,this.modelContact.rotation.y=-Math.PI*.4),!0):!1}setModels(){this.modelKnowledge=this.engine.scenes[1].getObjectByName("Me"),this.modelPortfolio=this.engine.scenes[2].getObjectByName("Me"),this.modelContact=this.engine.scenes[3].getObjectByName("Me")}setAnimations(e,t){this.modelKnowledge&&this.modelPortfolio&&this.modelContact?this.isAnimations||(this.isAnimations=!0,this.mixerK=new Nr(this.modelKnowledge),this.mixerP=new Nr(this.modelPortfolio),this.mixerC=new Nr(this.modelContact),this.clips=e,this.knowledgeAnimation=gi.findByName(this.clips,"knowledge"),this.portfolioAnimation=gi.findByName(this.clips,"portfolio"),this.contactAnimation=gi.findByName(this.clips,"contact"),this.knowledgeAction=this.mixerK.clipAction(this.knowledgeAnimation),this.portfolioAction=this.mixerP.clipAction(this.portfolioAnimation),this.contactAction=this.mixerC.clipAction(this.contactAnimation),this.clock=new Ro):this.setModels()}scrollsAnimation(e){this.modelKnowledge!==void 0&&this.knowledgeAnimation&&this.modelPortfolio!==void 0&&this.portfolioAnimation&&this.animationsCheck(0,e)}animationsCheck(e,t){this.contactAnimation&&this.knowledgeAnimation&&this.portfolioAnimation&&(this.actualState!==t&&(this.actualState=t,this.initState=!1),t===3?(this.contactAction.play(),this.mixerC.update(this.clock.getDelta()*.5)):this.contactAction.stop())}}class $_{constructor(){this.scenes=[],this.renderer=[],this.camera=[],this.width=window.innerWidth,this.height=window.innerHeight}async createEngine(e){this.container=e.dom;for(let t=0;t<this.container.length;t++)this.initScene(t),this.initCamera(t),this.initRenderer(t),this.container[t].appendChild(this.renderer[t].domElement);this.time=0,this.setUpRaycaster()}initScene(e){this.scenes[e]=new yg}initRenderer(e){this.renderer[e]=new go({antialias:!0,alpha:!0}),this.renderer[e].setPixelRatio(this.container[e].devicePixelRatio),this.renderer[e].setSize(this.width,this.height),this.renderer[e].shadowMap.enabled=!0,this.renderer[e].setScissorTest(!0),this.camera[e].aspect=this.width/this.height,this.camera[e].updateProjectionMatrix()}initCamera(e){this.camera[e]=new St(45,this.width/this.height,.1,100),this.camera[e].position.x=0,this.camera[e].position.z=7,this.camera[e].position.y=4.5}setUpRaycaster(){this.raycaster=new Ec,this.pointer=new oe({x:1,y:1})}setUpResize(){window.addEventListener("resize",this.resize.bind(this))}resize(e){this.width=window.innerWidth,this.height=window.innerHeight;for(let t=0;t<this.renderer.length;t++)t===e?this.renderer[t].setScissorTest(!1):this.renderer[t].setScissorTest(!0);this.renderer[e].setSize(this.width,this.height),this.renderer[e].setPixelRatio(this.container[e].devicePixelRatio),this.camera[e].aspect=this.width/this.height,this.camera[e].updateProjectionMatrix()}}const Je={about:{elements:{h2:0,x:-5,y:4,z:3,rotX:0,rotY:0,rotYEnd:0,rotZ:0,ab1:100,ab2:100},keyframes:[{h2:-100,duration:100},{rotX:0,rotY:Math.PI*1.75,x:1.3,y:4,z:4,ab1:0,endDelay:100},{ab1:-100,ab2:0,endDelay:100,x:-1.3,rotX:Math.PI*2,rotY:-Math.PI*1.75},{ab2:-100,x:0,y:4.4,z:6,rotX:0,rotY:0,endDelay:100}]},aboutMobile:{elements:{h2:0,x:-5,y:4,z:3,rotX:0,rotY:0,rotYEnd:0,rotZ:0,ab1:100,ab2:100},keyframes:[{h2:-100,duration:100},{rotX:0,rotY:Math.PI*1.75,x:.7,y:4,z:4,ab1:0,endDelay:100},{ab1:-100,ab2:0,endDelay:100,x:-.7,rotX:Math.PI*2,rotY:-Math.PI*1.75},{ab2:-100,x:0,y:4.4,z:4,rotX:0,rotY:0,endDelay:100}]},knowledgeMobile:{elements:{patrick:0,patrickX:0,patrickY:4.5,patrickZ:-4,patrickRotY:0,patrickRotZ:0,patrickRotX:0,cameraX:0,cameraY:4,cameraZ:0,hF:20,hA:40,hD:60,hG:80,hL:100,actualIndex:-1,k1:100,k2:100,k3:100,k4:100,k5:100,k6:100,k7:100,k8:100,k9:100,k10:100,k11:100,k12:100,k13:100,k14:100},keyframes:[{duration:300},{cameraX:.85,cameraY:4.2,cameraZ:.7,duration:300},{patrick:.1311382772020729,hF:-4,hA:20,actualIndex:0,endDelay:50},{k1:0,endDelay:50},{k1:-100,k2:0,endDelay:50},{patrick:.21600874352331587,hF:-21,hA:-4,hD:20,k2:-100,k3:0,actualIndex:1,endDelay:50},{patrick:.290723769430052,hA:-23,hD:-3.5,hG:20,k3:-100,k4:0,actualIndex:2,endDelay:50},{k4:-100,k5:0,endDelay:50},{patrick:.3661641839378235,hD:-23.5,hG:-3.5,hL:20,k5:-100,k6:0,actualIndex:3,endDelay:50},{k6:-100,k7:0,endDelay:50},{k7:-100,k8:0,endDelay:50},{patrick:.4397911269430054,hG:-23,hL:-3,k8:-100,actualIndex:4,endDelay:50},{hL:-23,actualIndex:5,patrick:.5481810218216856,endDelay:50},{cameraX:0},{patrick:.6195079681260764,k9:0,endDelay:50},{k10:0,k9:-100,patrick:.683773170108591,endDelay:50},{k11:0,k10:-100,patrick:.7614563812962429,endDelay:50},{k12:0,k11:-100,patrick:.8341961154083184,endDelay:50},{k13:0,k12:-100,patrick:.9055234274988013,endDelay:50},{k14:0,k13:-100,patrick:.9775569506000774,endDelay:50},{cameraX:0,cameraY:4,cameraZ:0,patrick:1,k14:-100,duration:100}]},knowledge:{elements:{patrick:0,patrickX:0,patrickY:4.5,patrickZ:-4,patrickRotY:0,patrickRotZ:0,patrickRotX:0,cameraX:0,cameraY:4,cameraZ:0,hF:20,hA:40,hD:60,hG:80,hL:100,actualIndex:-1,k1:100,k2:100,k3:100,k4:100,k5:100,k6:100,k7:100,k8:100,k9:100,k10:100,k11:100,k12:100,k13:100,k14:100},keyframes:[{duration:300},{cameraX:.5,cameraY:4.7,cameraZ:-2,duration:300},{patrick:.1311382772020729,hF:-4,hA:20,actualIndex:0,endDelay:50},{k1:0,endDelay:50},{k1:-100,k2:0,endDelay:50},{patrick:.21600874352331587,hF:-21,hA:-4,hD:20,k2:-100,k3:0,actualIndex:1,endDelay:50},{patrick:.290723769430052,hA:-23,hD:-3.5,hG:20,k3:-100,k4:0,actualIndex:2,endDelay:50},{k4:-100,k5:0,endDelay:50},{patrick:.3661641839378235,hD:-23.5,hG:-3.5,hL:20,k5:-100,k6:0,actualIndex:3,endDelay:50},{k6:-100,k7:0,endDelay:50},{k7:-100,k8:0,endDelay:50},{patrick:.4397911269430054,hG:-23,hL:-3,k8:-100,actualIndex:4,endDelay:50},{hL:-23,actualIndex:5,patrick:.5481810218216856,endDelay:50},{cameraX:0},{patrick:.6195079681260764,k9:0,endDelay:50},{k10:0,k9:-100,patrick:.683773170108591,endDelay:50},{k11:0,k10:-100,patrick:.7614563812962429,endDelay:50},{k12:0,k11:-100,patrick:.8341961154083184,endDelay:50},{k13:0,k12:-100,patrick:.9055234274988013,endDelay:50},{k14:0,k13:-100,patrick:.9775569506000774,endDelay:50},{cameraX:0,cameraY:4,cameraZ:0,patrick:1,k14:-100,duration:100}]},portfolio:{elements:{patrick:0,patrickX:-2,patrickY:5,patrickZ:0,patrickRotY:Math.PI/2.5,patrickRotZ:0,patrickRotX:0,x:-2.1,y:4.4,z:.6,rotX:0,rotY:Math.PI*.25,rotZ:0},keyframes:[{duration:"10%"},{patrick:5.70053685637943,duration:"30%"},{x:0,y:4.475,z:6.65,rotY:-Math.PI*2,patrick:8.247499999999848,duration:"30%"},{duration:"30%"}]},portfolioMobile:{elements:{patrick:0,patrickX:-.7,patrickY:5,patrickZ:0,patrickRotY:Math.PI/3,patrickRotZ:0,patrickRotX:0,x:-.8,y:4.4,z:.3,rotX:0,rotY:Math.PI*.25,rotZ:0},keyframes:[{duration:"10%"},{patrick:5.70053685637943,duration:"30%"},{x:0,y:4.475,z:6,rotY:-Math.PI*2,patrick:8.247499999999848,duration:"30%"},{duration:"30%"}]},contact:{elements:{first:0,second:0,helper:0,patrickX:.9,patrickY:5,patrickZ:3,patrickRotY:-Math.PI*.4,patrickRotZ:0,patrickRotX:0},keyframes:[{delay:100,first:-105,second:105}]},contactMobile:{elements:{first:0,second:0,helper:0,patrickX:0,patrickY:5,patrickZ:3,patrickRotY:-Math.PI*.4,patrickRotZ:0,patrickRotX:0},keyframes:[{delay:100,first:-105,second:105}]}},Q_=(r,e)=>{const t=e.documentElement.clientHeight,n=r.getBoundingClientRect().top,i=r.offsetHeight;return n*-1/(i-t)};class ev{constructor(e,t,n,i){this.document=document,this.window=window,this.engine=n,this.holograms=i,this.patrick=e,this.laptop=t,this.about=document.querySelector(".about"),this.aboutHistory=document.querySelector(".about-history"),this.knowledge=document.querySelector(".knowledge"),this.portfolio=document.querySelector(".portfolio"),this.contact=document.querySelector(".contact"),this.hologramF,this.hologramA,this.hologramD,this.hologramG,this.hologramL,this.render()}getMobile(){return this.window.innerWidth<=1024}render(){this.clock=new Ro,this.animationAboutScroll=_e({targets:Je.about.elements,keyframes:Je.about.keyframes,elasticity:300,easing:"linear",autoplay:!1}),this.animationKnowledgeScroll=_e({targets:Je.knowledge.elements,keyframes:Je.knowledge.keyframes,elasticity:300,easing:"linear",autoplay:!1}),this.animationPortfolioScroll=_e({targets:Je.portfolio.elements,keyframes:Je.portfolio.keyframes,elasticity:300,easing:"linear",autoplay:!1}),this.animationContactScroll=_e({targets:Je.contact.elements,keyframes:Je.contact.keyframes,elasticity:300,easing:"linear",autoplay:!1}),this.animationAboutMobileScroll=_e({targets:Je.aboutMobile.elements,keyframes:Je.aboutMobile.keyframes,elasticity:300,easing:"linear",autoplay:!1}),this.animationKnowledgeMobileScroll=_e({targets:Je.knowledgeMobile.elements,keyframes:Je.knowledgeMobile.keyframes,elasticity:300,easing:"linear",autoplay:!1}),this.animationPortfolioMobileScroll=_e({targets:Je.portfolioMobile.elements,keyframes:Je.portfolioMobile.keyframes,elasticity:300,easing:"linear",autoplay:!1}),this.animationContactMobileScroll=_e({targets:Je.contactMobile.elements,keyframes:Je.contactMobile.keyframes,elasticity:300,easing:"linear",autoplay:!1}),this.aboutMeH2=this.document.querySelector("#about-me-h2"),this.aboutContent1=this.document.querySelector("#about-content-div-1"),this.aboutContent2=this.document.querySelector("#about-content-div-2"),this.k1=this.document.querySelector("#knowledge-content-1"),this.k2=this.document.querySelector("#knowledge-content-2"),this.k3=this.document.querySelector("#knowledge-content-3"),this.k4=this.document.querySelector("#knowledge-content-4"),this.k5=this.document.querySelector("#knowledge-content-5"),this.k6=this.document.querySelector("#knowledge-content-6"),this.k7=this.document.querySelector("#knowledge-content-7"),this.k8=this.document.querySelector("#knowledge-content-8"),this.k9=this.document.querySelector("#knowledge-content-9"),this.k10=this.document.querySelector("#knowledge-content-10"),this.k11=this.document.querySelector("#knowledge-content-11"),this.k12=this.document.querySelector("#knowledge-content-12"),this.k13=this.document.querySelector("#knowledge-content-13"),this.k14=this.document.querySelector("#knowledge-content-14"),this.h2Left=this.document.querySelector("#contact-h2-left"),this.h2Right=this.document.querySelector("#contact-h2-right"),this.divLeft=this.document.querySelector(".contact-left"),this.divRight=this.document.querySelector(".contact-right"),this.contactInfoLeft=this.document.querySelector(".contact-info-left"),this.contactInfoRight=this.document.querySelector(".contact-info-right"),this.contactAnimations=_e.timeline({duration:1500,delay:1e3,autoplay:!1}),this.contactAnimations.add({targets:this.document.querySelector(".contact-me-obj"),translateX:["100vw",0],opacity:[0,1]}).add({targets:this.contactInfoLeft,translateX:["-100vw",0],opacity:[0,1]}).add({targets:this.document.querySelector("#contact-line"),width:"50%"}).add({targets:this.document.querySelectorAll(".social"),delay:function(e,t){return t*100},translateX:[-30,0],opacity:[0,1]})}doAbout(e,t){let n;this.getMobile()?(this.animationAboutMobileScroll.seek(t*this.animationAboutMobileScroll.duration),n=Je.aboutMobile.elements):(this.animationAboutScroll.seek(t*this.animationAboutScroll.duration),n=Je.about.elements),this.laptop.modelAbout.position.x=n.x,this.laptop.modelAbout.position.y=n.y,this.laptop.modelAbout.position.z=n.z,this.laptop.modelAbout.rotation.x=n.rotX,this.laptop.modelAbout.rotation.y=n.rotY,this.laptop.modelAbout.rotation.z=n.rotZ,this.aboutMeH2.style.transform=`translateX(${n.h2}vw)`,this.aboutContent1.style.transform="translate(-50%, "+n.ab1+"vh)",this.aboutContent2.style.transform="translate(-50%, "+n.ab2+"vh)"}setHologram(){this.hologramF=this.engine.scenes[1].getObjectByName("Frontend"),this.hologramA=this.engine.scenes[1].getObjectByName("API"),this.hologramD=this.engine.scenes[1].getObjectByName("Databases"),this.hologramG=this.engine.scenes[1].getObjectByName("Graphic"),this.hologramL=this.engine.scenes[1].getObjectByName("Learning")}doKnowledge(e,t){if(this.patrick.modelPortfolio&&this.laptop.modelPortfolio&&this.patrick.modelKnowledge&&this.patrick.modelContact)if(!this.hologramF||!this.hologramA||!this.hologramD||!this.hologramG||!this.hologramL)this.setHologram();else{let n;this.getMobile()?(n=Je.knowledgeMobile.elements,this.animationKnowledgeMobileScroll.seek(t*this.animationKnowledgeMobileScroll.duration)):(n=Je.knowledge.elements,this.animationKnowledgeScroll.seek(t*this.animationKnowledgeScroll.duration)),this.holograms.setNumber(Math.round(n.actualIndex)),this.hologramF.position.x=n.hF,this.hologramA.position.x=n.hA,this.hologramD.position.x=n.hD,this.hologramG.position.x=n.hG,this.hologramL.position.x=n.hL,this.engine.camera[1].position.x=n.cameraX,this.engine.camera[1].position.y=n.cameraY,this.engine.camera[1].position.z=n.cameraZ,this.patrick.modelKnowledge.position.x=n.patrickX,this.patrick.modelKnowledge.position.y=n.patrickY,this.patrick.modelKnowledge.position.z=n.patrickZ,this.patrick.modelKnowledge.rotation.x=n.patrickRotX,this.patrick.modelKnowledge.rotation.y=n.patrickRotY,this.patrick.modelKnowledge.rotation.z=n.patrickRotZ,this.k1.style.transform="translate(-50%, "+n.k1+"vh)",this.k2.style.transform="translate(-50%, "+n.k2+"vh)",this.k3.style.transform="translate(-50%, "+n.k3+"vh)",this.k4.style.transform="translate(-50%, "+n.k4+"vh)",this.k5.style.transform="translate(-50%, "+n.k5+"vh)",this.k6.style.transform="translate(-50%, "+n.k6+"vh)",this.k7.style.transform="translate(-50%, "+n.k7+"vh)",this.k8.style.transform="translate(-50%, "+n.k8+"vh)",this.k9.style.transform="translate(-50%, "+n.k9+"vh)",this.k10.style.transform="translate(-50%, "+n.k10+"vh)",this.k11.style.transform="translate(-50%, "+n.k11+"vh)",this.k12.style.transform="translate(-50%, "+n.k12+"vh)",this.k13.style.transform="translate(-50%, "+n.k13+"vh)",this.k14.style.transform="translate(-50%, "+n.k14+"vh)",this.patrick.knowledgeAction.reset().play().paused=!0,this.patrick.knowledgeAction.time=this.patrick.knowledgeAction.getClip().duration*n.patrick,this.patrick.mixerK.update(this.clock.getDelta())}}doPortfolio(e,t){if(this.patrick.modelPortfolio&&this.laptop.modelPortfolio&&this.patrick.modelKnowledge&&this.patrick.modelContact){let n;this.getMobile()?(this.animationPortfolioMobileScroll.seek(t*this.animationPortfolioMobileScroll.duration),n=Je.portfolioMobile.elements):(this.animationPortfolioScroll.seek(t*this.animationPortfolioScroll.duration),n=Je.portfolio.elements),this.patrick.modelPortfolio.position.x=n.patrickX,this.patrick.modelPortfolio.position.y=n.patrickY,this.patrick.modelPortfolio.position.z=n.patrickZ,this.patrick.modelPortfolio.rotation.x=n.patrickRotX,this.patrick.modelPortfolio.rotation.y=n.patrickRotY,this.patrick.modelPortfolio.rotation.z=n.patrickRotZ,this.laptop.modelPortfolio.position.x=n.x,this.laptop.modelPortfolio.position.y=n.y,this.laptop.modelPortfolio.position.z=n.z,this.laptop.modelPortfolio.rotation.x=n.rotX,this.laptop.modelPortfolio.rotation.y=n.rotY,this.laptop.modelPortfolio.rotation.z=n.rotZ,this.patrick.portfolioAction.time=n.patrick,this.patrick.portfolioAction.play(),this.patrick.mixerP.update(this.clock.getDelta())}}doContact(e,t){let n;this.getMobile()?(this.animationContactMobileScroll.seek(t*this.animationContactMobileScroll.duration),n=Je.contactMobile.elements):(this.animationContactScroll.seek(t*this.animationContactScroll.duration),n=Je.contact.elements),this.patrick.modelContact.position.x=n.patrickX,this.patrick.modelContact.position.y=n.patrickY,this.patrick.modelContact.position.z=n.patrickZ,this.patrick.modelContact.rotation.x=n.patrickRotX,this.patrick.modelContact.rotation.y=n.patrickRotY,this.patrick.modelContact.rotation.z=n.patrickRotZ,this.window.innerWidth>=1024?(this.h2Left.style.transform=`translate(${n.first}vw, 0)`,this.divLeft.style.transform=`translate(${n.first}vw, 0)`,this.h2Right.style.transform=`translate(${n.second}vw, 0)`,this.divRight.style.transform=`translate(${n.second}vw, 0)`):(this.h2Left.style.transform=`translate(0, ${n.first}vh)`,this.divLeft.style.transform=`translate(0, ${n.first}vh)`,this.h2Right.style.transform=`translate(0, ${n.second}vh)`,this.divRight.style.transform=`translate(0, ${n.second}vh)`),t>.9?this.contactAnimations.play():(this.contactAnimations.restart(),this.contactAnimations.pause())}setScroll(e,t){if(!this.patrick.modelKnowledge&&!this.patrick.modelContact&&!this.patrick.modelPortfolio||!this.laptop.modelAbout&&!this.laptop.modelPortfolio||!this.patrick.contactAction&&!this.patrick.knowledgeAction&&!this.patrick.portfolioAction)return;const n=Q_(e,this.document);n<=1.1&&(t===1?this.doAbout(t,n):t===3?this.doKnowledge(t,n):t===4?this.doPortfolio(t,n):t===5&&this.doContact(t,n))}scrollsAnimation(e){let t;e!==0&&this.clock&&(e===1?t=this.about:e===2?t=this.aboutHistory:e===3?t=this.knowledge:e===4?t=this.portfolio:e===5&&(t=this.contact),this.setScroll(t,e))}}class tv{constructor(e){this.document=document,this.window=window,this.isActive,this.laptop=e,this.animations=[],this.render()}render(){this.initSVG(),this.initAnimate=0,this.isFinished=!1,this.scrollPercentage=0}setIsActive(e,t){this.isActive=e,t==="play"?this.animations.forEach(n=>n.play()):this.animations.forEach(n=>n.pause())}initSVG(){this.aboutSVG=this.document.querySelectorAll(".about-svg-path"),this.sizeAboutSVG=this.aboutSVG[0].getTotalLength(),this.aboutSVG.forEach(e=>{e.style.strokeDasharray=e.getTotalLength()}),this.animations.push(_e({targets:this.aboutSVG,strokeDashoffset:(e,t)=>t%2==0?[0,this.sizeAboutSVG]:[this.sizeAboutSVG,0],duration:5e3,easing:"linear",direction:"alternate",delay:function(e,t){return 300*(t+1)},autoplay:!0,loop:!0}))}resize(){}}class nv{constructor(){this.animations=[],this.window=window,this.document=document,this.avatar=document.querySelector("#avatar"),this.helloWorldSpans=document.querySelectorAll("#hello-world span"),this.name=document.querySelectorAll("#name"),this.nameSurname=document.querySelectorAll("#namesurname"),this.initCount=0,this.homeTopLeft=document.querySelector("#homeTopLeft"),this.homeTopRight=document.querySelector("#homeTopRight"),this.homeBlob1=document.querySelector(".home-blob1"),this.homeBlob2=document.querySelector(".home-blob2"),this.homeBlob3=document.querySelector(".home-blob3"),this.homeBlob4=document.querySelector(".home-blob4"),this.homeBlob5=document.querySelector(".home-blob5"),this.homeBlob6=document.querySelector(".home-blob6"),this.homeBlob7=document.querySelector(".home-blob7"),this.homeBlob8=document.querySelector(".home-blob8"),this.homeBlob9=document.querySelector(".home-blob9"),this.homeBlob10=document.querySelector(".home-blob10"),this.homeBlob11=document.querySelector(".home-blob11"),this.homeBlob12=document.querySelector(".home-blob12"),this.homeBlob13=document.querySelector(".home-blob13"),this.homeBlob14=document.querySelector(".home-blob14"),this.homeBlob15=document.querySelector(".home-blob15"),this.homeBlob16=document.querySelector(".home-blob16"),this.render()}render(){this.initCount===0&&(this.initBubbles(),this.initWaves(),this.initElements(),this.initCount++)}getAnimations(){return this.animations}animationsSet(e){e==="play"?this.animations.forEach(t=>t.play()):this.animations.forEach(t=>t.pause())}setAnimations(e){this.animations=e}initMoveForElements(e){e.animations.push(_e({targets:e.homeTopLeft,duration:5e3,delay:0,easing:"linear",translateX:[{value:20},{value:-20}],translateY:[{value:-20},{value:20}],direction:"alternate",loop:!0})),e.animations.push(_e({targets:e.homeTopRight,duration:5e3,delay:0,easing:"linear",translateX:[{value:20},{value:-20}],translateY:[{value:-20},{value:20}],direction:"alternate",loop:!0}))}getRandomInt(e,t){return Math.random()*(t-e)+e}initWaves(){this.animations.push(_e({targets:this.homeBlob1,d:[{value:"M0 918C-73.6 850 -147.1 781.9 -249.7 768.5C-352.3 755 -483.9 796.1 -539.6 742.7C-595.3 689.3 -575.1 541.3 -627 455.5C-678.9 369.8 -803 346.1 -863.6 280.6C-924.1 215 -921 107.5 -918 0L0 0Z"},{value:"M0 918C-99 912.9 -198 907.8 -283.7 873.1C-369.3 838.4 -441.7 774.1 -518.4 713.6C-595.2 653 -676.3 596.3 -712.7 517.8C-749.1 439.4 -740.8 339.3 -767.5 249.4C-794.2 159.5 -856.1 79.7 -918 0L0 0Z"},{value:"M0 918C-109.6 928 -219.1 938 -283.7 873.1C-348.2 808.2 -367.7 668.4 -442 608.4C-516.3 548.4 -645.3 568.2 -721.6 524.3C-798 480.4 -821.6 372.7 -845.5 274.7C-869.4 176.7 -893.7 88.4 -918 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob2,d:[{value:"M0 850.5C-79.3 802.9 -158.6 755.3 -233.3 718.2C-308.1 681.1 -378.4 654.5 -449 618C-519.5 581.5 -590.4 535 -654.8 475.7C-719.2 416.4 -777.3 344.3 -808.9 262.8C-840.4 181.4 -845.5 90.7 -850.5 0L0 0Z"},{value:"M0 803.3C-58.2 715.3 -116.4 627.4 -199.8 615C-283.3 602.6 -391.9 665.7 -472.1 649.8C-552.4 634 -604.1 539 -621.5 451.6C-638.9 364.1 -622 284.1 -646.6 210.1C-671.2 136.1 -737.2 68 -803.2 0L0 0Z"},{value:"M0 803.3C-67.1 739.7 -134.1 676.2 -209.3 644.1C-284.4 612 -367.7 611.2 -412 567C-456.3 522.8 -461.6 435.3 -524.5 381.1C-587.5 326.9 -707.9 306.2 -763.9 248.2C-820 190.3 -811.6 95.1 -803.2 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob3,d:[{value:"M0 688.5C-59.4 639.4 -118.7 590.3 -186.6 574.2C-254.4 558.1 -330.8 575 -402.9 554.6C-475.1 534.2 -542.9 476.6 -557 404.7C-571.1 332.8 -531.3 246.7 -544.2 176.8C-557.2 107 -622.8 53.5 -688.5 0L0 0Z"},{value:"M0 688.5C-74.3 684.8 -148.6 681.2 -212.8 654.8C-276.9 628.4 -331 579.3 -387.1 532.7C-443.1 486.2 -501.2 442.1 -527.9 383.5C-554.6 325 -549.8 252 -571.3 185.6C-592.9 119.3 -640.7 59.7 -688.5 0L0 0Z"},{value:"M0 688.5C-68.8 675.8 -137.6 663.1 -209.5 644.8C-281.4 626.6 -356.3 602.8 -401.2 552.2C-446 501.5 -460.9 424.1 -504.2 366.3C-547.5 308.6 -619.3 270.5 -654.8 212.8C-690.3 155 -689.4 77.5 -688.5 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob4,d:[{value:"M0 573.8C-64.1 574.4 -128.2 575 -177.3 545.7C-226.4 516.3 -260.4 457 -302.7 416.6C-345 376.3 -395.5 355 -438.4 318.5C-481.3 282 -516.6 230.4 -537.9 174.8C-559.2 119.2 -566.5 59.6 -573.7 0L0 0Z"},{value:"M0 573.8C-44.1 521.7 -88.2 469.7 -148.7 457.7C-209.2 445.7 -286 473.8 -325.9 448.5C-365.7 423.2 -368.5 344.7 -405 294.3C-441.6 243.9 -511.9 221.6 -545.7 177.3C-579.4 133 -576.6 66.5 -573.7 0L0 0Z"},{value:"M0 573.8C-42 514.8 -83.9 455.9 -143.5 441.6C-203.1 427.4 -280.3 457.9 -312.6 430.3C-345 402.7 -332.5 317.1 -372.1 270.4C-411.7 223.7 -503.4 215.9 -545.7 177.3C-587.9 138.7 -580.8 69.4 -573.7 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob5,d:[{value:"M0 459C-33.6 411.9 -67.1 364.7 -114.8 353.3C-162.5 341.9 -224.2 366.3 -250.1 344.2C-276 322.2 -266 253.7 -297.7 216.3C-329.4 178.9 -402.7 172.7 -436.5 141.8C-470.4 111 -464.7 55.5 -459 0L0 0Z"},{value:"M0 459C-43 434.6 -86 410.3 -127.9 393.7C-169.8 377.2 -210.7 368.6 -255.4 351.5C-300.1 334.5 -348.7 309 -371.3 269.8C-394 230.6 -390.6 177.5 -400.9 130.3C-411.1 83 -435.1 41.5 -459 0L0 0Z"},{value:"M0 459C-39.9 422.7 -79.9 386.4 -119.4 367.6C-159 348.8 -198.1 347.5 -244.8 337C-291.5 326.4 -345.7 306.7 -371.3 269.8C-396.9 232.9 -393.9 179 -403.7 131.2C-413.6 83.4 -436.3 41.7 -459 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob6,d:[{value:"M0 344.3C-32.3 326 -64.5 307.7 -95.9 295.3C-127.4 282.9 -158 276.4 -191.5 263.6C-225.1 250.9 -261.5 231.8 -278.5 202.3C-295.5 172.9 -292.9 133.1 -300.7 97.7C-308.4 62.2 -326.3 31.1 -344.2 0L0 0Z"},{value:"M0 344.3C-34.4 337.9 -68.8 331.5 -104.8 322.4C-140.7 313.3 -178.1 301.4 -200.6 276.1C-223 250.8 -230.4 212 -252.1 183.2C-273.8 154.3 -309.7 135.3 -327.4 106.4C-345.1 77.5 -344.7 38.7 -344.2 0L0 0Z"},{value:"M0 344.3C-25.2 308.9 -50.4 273.5 -86.1 265C-121.8 256.4 -168.2 274.7 -187.6 258.2C-207 241.6 -199.5 190.3 -223.3 162.2C-247 134.2 -302 129.5 -327.4 106.4C-352.8 83.2 -348.5 41.6 -344.2 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob7,d:[{value:"M0 229.5C-25.6 229.8 -51.3 230 -70.9 218.3C-90.6 206.5 -104.2 182.8 -121.1 166.7C-138 150.5 -158.2 142 -175.4 127.4C-192.5 112.8 -206.7 92.2 -215.2 69.9C-223.7 47.7 -226.6 23.8 -229.5 0L0 0Z"},{value:"M0 229.5C-21.5 217.3 -43 205.1 -64 196.9C-84.9 188.6 -105.3 184.3 -127.7 175.8C-150.1 167.2 -174.4 154.5 -185.7 134.9C-197 115.3 -195.3 88.8 -200.4 65.1C-205.6 41.5 -217.5 20.7 -229.5 0L0 0Z"},{value:"M0 229.5C-17.6 208.7 -35.3 187.9 -59.5 183.1C-83.7 178.3 -114.4 189.5 -130.3 179.4C-146.3 169.3 -147.4 137.9 -162 117.7C-176.6 97.5 -204.8 88.7 -218.3 70.9C-231.8 53.2 -230.6 26.6 -229.5 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob8,d:[{value:"M0 114.8C-10 105.7 -20 96.6 -29.9 91.9C-39.7 87.2 -49.5 86.9 -61.2 84.2C-72.9 81.6 -86.4 76.7 -92.8 67.4C-99.2 58.2 -98.5 44.7 -100.9 32.8C-103.4 20.8 -109.1 10.4 -114.7 0L0 0Z"},{value:"M0 114.8C-12.8 114.9 -25.6 115 -35.5 109.1C-45.3 103.3 -52.1 91.4 -60.5 83.3C-69 75.3 -79.1 71 -87.7 63.7C-96.3 56.4 -103.3 46.1 -107.6 35C-111.8 23.8 -113.3 11.9 -114.7 0L0 0Z"},{value:"M0 114.8C-10 105.7 -20 96.6 -29.9 91.9C-39.7 87.2 -49.5 86.9 -61.2 84.2C-72.9 81.6 -86.4 76.7 -92.8 67.4C-99.2 58.2 -98.5 44.7 -100.9 32.8C-103.4 20.8 -109.1 10.4 -114.7 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob9,d:[{value:"M0 -918C95 -886.9 190 -855.8 261.1 -803.6C332.3 -751.4 379.6 -678.1 464.4 -639.1C549.1 -600.1 671.2 -595.5 742.7 -539.6C814.2 -483.7 835.2 -376.6 856 -278.1C876.7 -179.6 897.4 -89.8 918 0L0 0Z"},{value:"M0 -918C87.4 -872.3 174.9 -826.6 258 -794.1C341.2 -761.7 420.1 -742.6 514.9 -708.7C609.7 -674.8 720.4 -626.3 742.7 -539.6C765 -452.9 698.8 -328.1 713.3 -231.8C727.8 -135.5 822.9 -67.7 918 0L0 0Z"},{value:"M0 -918C109.9 -927.3 219.8 -936.6 283.7 -873.1C347.5 -809.6 365.2 -673.2 447.3 -615.7C529.4 -558.1 675.8 -579.3 720.8 -523.7C765.9 -468.2 709.7 -335.9 725.7 -235.8C741.6 -135.7 829.8 -67.9 918 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob10,d:[{value:"M0 -803.2C96.2 -811.4 192.4 -819.5 248.2 -763.9C304.1 -708.4 319.6 -589.1 391.4 -538.7C463.2 -488.3 591.3 -506.9 630.7 -458.3C670.2 -409.6 621 -293.9 634.9 -206.3C648.9 -118.7 726.1 -59.4 803.3 0L0 0Z"},{value:"M0 -803.2C73.8 -770.6 147.5 -737.9 234.7 -722.3C321.9 -706.7 422.4 -708.2 472.1 -649.8C521.9 -591.5 520.8 -473.3 540.8 -392.9C560.8 -312.6 601.9 -270.1 649.1 -210.9C696.3 -151.7 749.8 -75.9 803.3 0L0 0Z"},{value:"M0 -803.2C88.8 -802.5 177.6 -801.8 247.1 -760.6C316.7 -719.5 367 -637.9 419.7 -577.6C472.4 -517.4 527.4 -478.4 591.1 -429.5C654.8 -380.5 727.1 -321.5 763.9 -248.2C800.7 -175 802 -87.5 803.3 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob11,d:[{value:"M0 -688.5C74 -685.1 148.1 -681.7 212.8 -654.8C277.4 -627.9 332.8 -577.5 383.1 -527.3C433.4 -477.1 478.7 -427.1 511.5 -371.6C544.3 -316.2 564.6 -255.2 592 -192.4C619.5 -129.5 654 -64.8 688.5 0L0 0Z"},{value:"M0 -688.5C77.9 -692 155.8 -695.5 212.8 -654.8C269.7 -614.1 305.8 -529.3 341.7 -470.2C377.5 -411.2 413 -378.1 471.5 -342.5C529.9 -307 611.2 -269.1 651.2 -211.6C691.2 -154.1 689.9 -77.1 688.5 0L0 0Z"},{value:"M0 -688.5C62.2 -644.5 124.5 -600.4 187.7 -577.8C251 -555.1 315.2 -553.9 387.1 -532.7C458.9 -511.6 538.4 -470.4 557 -404.7C575.6 -339 533.2 -248.6 545 -177.1C556.7 -105.5 622.6 -52.8 688.5 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob12,d:[{value:"M0 -573.7C67.7 -579 135.5 -584.3 177.3 -545.7C219.1 -507 235.1 -424.4 278.8 -383.8C322.6 -343.1 394.1 -344.4 429.8 -312.3C465.5 -280.1 465.2 -214.6 483.3 -157C501.3 -99.4 537.5 -49.7 573.8 0L0 0Z"},{value:"M0 -573.7C53.1 -536.5 106.2 -499.3 154.1 -474.3C202 -449.4 244.7 -436.7 306 -421.2C367.3 -405.7 447.2 -387.3 464.2 -337.2C481.1 -287.2 435.1 -205.4 442.8 -143.9C450.6 -82.4 512.2 -41.2 573.8 0L0 0Z"},{value:"M0 -573.7C60 -557.3 120.1 -540.9 166.1 -511.2C212.1 -481.5 244.1 -438.5 300.1 -413.1C356.1 -387.7 436.1 -379.8 464.2 -337.2C492.2 -294.6 468.3 -217.3 477.9 -155.3C487.5 -93.3 530.6 -46.6 573.8 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob13,d:[{value:"M0 -459C48 -445.9 96.1 -432.7 132.9 -409C169.7 -385.2 195.3 -350.8 240.1 -330.5C284.9 -310.2 348.9 -303.9 371.3 -269.8C393.8 -235.7 374.6 -173.8 382.3 -124.2C390 -74.6 424.5 -37.3 459 0L0 0Z"},{value:"M0 -459C49.3 -457.3 98.6 -455.6 141.8 -436.5C185.1 -417.5 222.4 -381.2 248.6 -342.2C274.8 -303.2 289.9 -261.5 311.5 -226.3C333 -191.1 360.9 -162.3 386.6 -125.6C412.3 -89 435.6 -44.5 459 0L0 0Z"},{value:"M0 -459C52.5 -462.1 105.1 -465.3 141.8 -436.5C178.6 -407.8 199.6 -347.2 223.7 -307.8C247.7 -268.5 274.7 -250.4 313.5 -227.8C352.3 -205.2 402.7 -178.1 428.9 -139.4C455.1 -100.7 457.1 -50.3 459 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob14,d:[{value:"M0 -344.2C37 -343 73.9 -341.7 106.4 -327.4C138.8 -313.1 166.8 -285.9 186.5 -256.7C206.1 -227.4 217.5 -196.2 233.6 -169.7C249.7 -143.3 270.7 -121.7 290 -94.2C309.2 -66.7 326.7 -33.4 344.3 0L0 0Z"},{value:"M0 -344.2C31.1 -322.2 62.2 -300.2 93.9 -288.9C125.5 -277.6 157.6 -277 193.5 -266.4C229.5 -255.8 269.2 -235.2 278.5 -202.3C287.8 -169.5 266.6 -124.3 272.5 -88.5C278.4 -52.8 311.3 -26.4 344.3 0L0 0Z"},{value:"M0 -344.2C36 -334.4 72 -324.5 99.7 -306.7C127.3 -288.9 146.5 -263.1 180.1 -247.9C213.7 -232.6 261.7 -227.9 278.5 -202.3C295.3 -176.8 281 -130.4 286.7 -93.2C292.5 -56 318.4 -28 344.3 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob15,d:[{value:"M0 -229.5C27.1 -231.6 54.2 -233.7 70.9 -218.3C87.7 -202.8 94 -169.8 111.5 -153.5C129 -137.2 157.6 -137.8 171.9 -124.9C186.2 -112.1 186.1 -85.9 193.3 -62.8C200.5 -39.8 215 -19.9 229.5 0L0 0Z"},{value:"M0 -229.5C24.6 -228.6 49.3 -227.8 70.9 -218.3C92.6 -208.8 111.2 -190.6 124.3 -171.1C137.4 -151.6 145 -130.8 155.7 -113.1C166.5 -95.5 180.5 -81.1 193.3 -62.8C206.1 -44.5 217.8 -22.2 229.5 0L0 0Z"},{value:"M0 -229.5C21.2 -214.6 42.5 -199.7 61.6 -189.7C80.8 -179.8 97.9 -174.7 122.4 -168.5C146.9 -162.3 178.9 -154.9 185.7 -134.9C192.4 -114.9 174 -82.2 177.1 -57.6C180.2 -33 204.9 -16.5 229.5 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0})),this.animations.push(_e({targets:this.homeBlob16,d:[{value:"M0 -114.7C13 -115.3 26 -115.9 35.5 -109.1C45 -102.4 51 -88.2 56.9 -78.4C62.9 -68.5 68.8 -63 78.6 -57.1C88.3 -51.2 101.9 -44.8 108.5 -35.3C115.2 -25.7 115 -12.8 114.8 0L0 0Z"},{value:"M0 -114.7C13.5 -115.8 27.1 -116.9 35.5 -109.1C43.8 -101.4 47 -84.9 55.8 -76.8C64.5 -68.6 78.8 -68.9 86 -62.5C93.1 -56 93 -42.9 96.7 -31.4C100.3 -19.9 107.5 -9.9 114.8 0L0 0Z"},{value:"M0 -114.7C13.1 -115.5 26.3 -116.3 35.5 -109.1C44.7 -101.9 49.9 -86.8 55.9 -77C61.9 -67.1 68.7 -62.6 78.4 -56.9C88.1 -51.3 100.7 -44.5 107.2 -34.8C113.8 -25.2 114.3 -12.6 114.8 0L0 0Z"}],easing:"linear",duration:1e4,delay:0,delay:0,direction:"alternate",loop:!0}))}initElements(){_e.timeline().add({targets:this.avatar,translateX:[-150,0],opacity:[0,1],duration:1500}).add({targets:this.helloWorldSpans,opacity:[0,1],translateX:[30,0],duration:700,delay:_e.stagger(100)},"-=400").add({targets:this.name,opacity:[0,1],translateX:[30,0],duration:700},"-=400").add({targets:this.nameSurname,opacity:[0,1],translateX:[30,0],duration:700,complete:()=>this.initMoveForElements(this)},"-=400")}initBubbles(){let e;this.window.innerWidth<1024?e=30:e=70;const t=document.querySelector(".home-container-circle");for(let i=0;i<e;i++){const s=document.createElement("div");s.classList.add("circle"),t.appendChild(s)}document.querySelectorAll(".home-container-circle .circle").forEach(i=>{let s;this.window.innerWidth<1024?s=this.getRandomInt(10,20):s=this.getRandomInt(10,40),this.animations.push(_e({targets:i,easing:"linear",width:[{value:s,duration:0,delay:0}],height:[{value:s,duration:0,delay:0}],translateY:[{value:"101vh",duration:0,delay:0},{value:"-10vh",duration:function(){return _e.random(1e4,2e4)},delay:function(){return _e.random(1e3,13e3)}}],translateX:[{value:function(){return _e.random(2,98)+"vw"}}],loop:!0}))})}}class iv{constructor(){this.document=document,this.window=window,this.isActive=!1,this.animations=[],this.render()}render(){this.contact=this.document.querySelector(".contact"),this.allPolylinesSmall=this.document.querySelectorAll("#processor #smaller polyline"),this.allPolylinesBigger=this.document.querySelectorAll("#processor #bigger polyline"),this.allCircleSmall=this.document.querySelectorAll("#processor #smaller circle"),this.allCircleBigger=this.document.querySelectorAll("#processor #bigger circle"),this.rectangleSmall=this.document.querySelector("#processor #smaller rect"),this.rectangleBigger=this.document.querySelector("#processor #bigger rect"),this.allPolylinesSmall.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t}),this.allPolylinesBigger.forEach(e=>{const t=e.getTotalLength();e.style.strokeDasharray=t,e.style.strokeDashoffset=t}),this.allCircleSmall.forEach(e=>{e.style.opacity=0,e.style.strokeDasharray=14,e.style.strokeDashoffset=14}),this.allCircleBigger.forEach(e=>{e.style.opacity=0,e.style.strokeDasharray=21.5,e.style.strokeDashoffset=21.5}),this.rectangleSmall.style.strokeDasharray=this.rectangleSmall.getTotalLength(),this.rectangleSmall.style.strokeDashoffset=this.rectangleSmall.getTotalLength(),this.rectangleBigger.style.strokeDasharray=this.rectangleBigger.getTotalLength(),this.rectangleBigger.style.strokeDashoffset=this.rectangleBigger.getTotalLength(),this.svg=_e.timeline({easing:"linear",duration:2e3,loop:!0}),this.svg.add({targets:this.rectangleSmall,strokeDashoffset:0,duration:1e3}).add({targets:this.allPolylinesSmall,delay:function(e,t){return t*50},strokeDashoffset:0,duration:1500}).add({targets:this.allCircleSmall,strokeDashoffset:0,duration:500,opacity:1}).add({targets:this.rectangleSmall,delay:1e3,strokeDashoffset:this.rectangleSmall.getTotalLength(),duration:2e3}).add({targets:this.allPolylinesSmall,strokeDashoffset:function(e){return-e.getTotalLength()},duration:1500}).add({targets:this.allCircleSmall,strokeDashoffset:function(e){return-14},opacity:0,duration:500}).add({targets:this.rectangleBigger,strokeDashoffset:0,duration:1e3},"-=1500").add({targets:this.allPolylinesBigger,strokeDashoffset:0,delay:function(e,t){return t*50},duration:1500}).add({targets:this.allCircleBigger,strokeDashoffset:0,duration:500,opacity:1}).add({targets:this.rectangleBigger,delay:2e3,strokeDashoffset:this.rectangleBigger.getTotalLength(),duration:1e3}).add({targets:this.allPolylinesBigger,delay:1e3,strokeDashoffset:function(e){return-e.getTotalLength()},duration:1500}).add({targets:this.allCircleBigger,strokeDashoffset:function(e){return-21},opacity:0,duration:500}),this.animations.push(this.svg)}setIsActive(e,t){this.isActive=e,t==="play"?this.animations.forEach(n=>n.play()):this.animations.forEach(n=>n.pause())}resize(){}}const sv=[{element:document.querySelector(".home-top-right h1"),pl:"Witaj świecie!",eng:"Hello world!",type:"spans"},{element:document.querySelector("#name"),pl:"<span>Nazywam się...</span> Patryk Szczerbiński",eng:"<span>I am...</span> Patryk Szczerbiński",type:"normal"},{element:document.querySelector("#about-content-h2-1"),pl:"Skąd to się wzięło?",eng:"Where it comes from?",type:"normal"},{element:document.querySelector("#about-content-h2-2"),pl:"Więcej o mnie",eng:"More about me",type:"normal"},{element:document.querySelector("#about-content-1"),pl:"Witaj, <span>nazywam się</span> Patryk Szczerbiński! Moje zainteresowanie programowaniem zapoczątkowało się już w okresie technikum. Od tamtej pory kontynuuję swoją edukację na studiach informatycznych, gdzie zdobywam solidne podstawy i rozwijam swoje umiejętności programistyczne. Obecnie jestem studentem III roku informatyki, a oprócz studiów, pragnę poszerzać swoją wiedzę i zdobywać praktyczne doświadczenie jako programista <span>front-end</span> lub <span>full-stack</span>.",eng:"Hello, <span>my name is</span> Patryk Szczerbiński! My interest in programming began in my school years and since then it has become my daily routine. Currently I’m a 3rd year Student of Computer Science, but apart from my studies I wish to expand my knowledge and gain practical experience as a front-end or full-stack developer.",type:"normal"},{element:document.querySelector("#about-content-2"),pl:"Jestem osobą, która przykłada dużą wagę do szczegółów i dbałości o jakość swojego kodu. Wierzę, że to właśnie w trudnych wyzwaniach najbardziej się uczymy, dlatego nie boję się podejmować nowych, wymagających projektów. Fascynuje mnie proces tworzenia interaktywnych interfejsów użytkownika i skutecznego rozwiązywania problemów związanych z programowaniem.",eng:"I’m a person who pays great attention to details and the quality of my coding. I believe that the greater the challenge is, the more we can learn by overcoming it. Therefore, I see challenges as opportunities and I’m not afraid of undertaking demanding projects. I find the process of creating interactive user interfaces and successfully solving programming problems very fascinating.",type:"normal"},{element:document.querySelector("#about-me-h2"),pl:"O mnie",eng:"About me",type:"normal"},{element:document.querySelector("#knowledge-h2"),pl:"Więcej",eng:"More",type:"normal"},{element:document.querySelector(".his-1 .his-description"),pl:"Mój pierwszy kontakt z programowaniem w C++!",eng:"My first contact with programming in C++ language!"},{element:document.querySelector(".his-2 .his-description"),pl:"Rozpocząłem naukę w Technikum nr 24 w Warszawie o kierunku Grafiki i Poligrafii Cyfrowej.",eng:"I started teaching in Technikum nr 24 in Warsaw majoring Graphics and digital printing."},{element:document.querySelector(".his-3 .his-description"),pl:"Mój pierwszy kontakt z HTML, CSS i JavaScript.",eng:"My first contact with HTML, CSS and Javascript."},{element:document.querySelector(".his-4 .his-description"),pl:"Zdanie egzaminu na prawo jazdy kat. B!",eng:"I passed test for driving license for category B!"},{element:document.querySelector(".his-5 .his-description"),pl:"Numeracja dokumentów, rejestrowanie w systemie, sortowanie listów",eng:"Numbering of documents, register in system, sorting lists"},{element:document.querySelector(".his-6 .his-description"),pl:"Kontakt z klientami, obsługa płatności, metkowanie ubrań",eng:"Contact with clients, payment service, labeling clothes"},{element:document.querySelector(".his-7 .his-description"),pl:"Inwentaryzajce",eng:"Inventories"},{element:document.querySelector(".his-8 .his-description"),pl:"Pracownik sklepu, praca w zespole, praca przy kasie",eng:"Shop employeer, teamwork, work at cash"},{element:document.querySelector(".his-9 .his-description"),pl:"Zdobycie tytułu Grafiki i Poligrafii Cyfrowej!",eng:"I got qualifications of Graphics and Digital printing!"},{element:document.querySelector(".his-10 .his-description"),pl:"Zdałem maturę i rozpocząłem naukę na Uczelni UTH na kierunku Inżynieria Oprogramowania.",eng:"I passed secondary school certificate and I began teach at University UTH on majority Software Engineering."},{element:document.querySelector(".his-11 .his-description"),pl:"Asystent ds. Handlowych",eng:"Commercial Assistant"},{element:document.querySelector(".his-12 .his-description"),pl:"Magazynier",eng:"Storeman"},{element:document.querySelector(".his-13 .his-description"),pl:"Udostępnienie strony na wykupionej domenie, przy pomocy MySQL, Express, NodeJS, React.",eng:"Deployment website on purchased domain using MySQL, Express, NodeJS, React."},{element:document.querySelector("#knowledge-content-1"),pl:`
    <h2>JavaScript</h2>
    <ul>
      <li>Typy danych - proste i typ referencyjny (obiekt)</li>
      <li>Literały</li>
      <li>Tablice</li>
      <li>Funkcje na tablicach</li>
      <li>
        Document Object Model (DOM) - pobieranie elementów, modyfikacja,
        zdarzenie i akcje, nasłuchiwanie
      </li>
      <li>Tworzenie obiektu, instancja</li>
      <li>Hermetyzacja, dziedziczenie, abstrakcja</li>
      <li>Klasy, extends i super</li>
      <li>This</li>
      <li>ThreeJS</li>
      <li>AnimeJS</li>
      <li>GSAP</li>
      <li>Podstawy JQuery</li>
      </ul>
      `,eng:`
    <h2>JavaScript</h2>
    <ul>
      <li>Data types - basic and reference type (object)</li>
      <li>Literals</li>
      <li>Arrays</li>
      <li>Functions on arrays</li>
      <li>
        Document Object Model (DOM) - getting elements, modification,
        event and actions, listening
      </li>
      <li>Creating object, instance</li>
      <li>Encapsulation, inheritance, abstraction</li>
      <li>Classes, extends and super</li>
      <li>This</li>
      <li>ThreeJS</li>
      <li>AnimeJS</li>
      <li>GSAP</li>
      <li>Basics of JQuery</li>
      </ul>
      `},{element:document.querySelector("#knowledge-content-2"),pl:`
    <h2>React</h2>
    <ul>
      <li>Props</li>
      <li>Praca z formularzami</li>
      <li>JSON i metoda fetch lub axios</li>
      <li>Komponenty funkcyjne</li>
      <li>API - teoria</li>
      <li>React Router > v.6</li>
      <li>
        Hooki - useState, useEffect, useContext, createContext, useRef,
        createRef, useEffect, useReducer, useMemo, useCallback,
        useHistory, useLocation
      </li>
      <li>Redux</li>
      <li>Praca z NodeJS</li>
      </ul>
      `,eng:`
    <h2>React</h2>
    <ul>
      <li>Props</li>
      <li>Working with forms</li>
      <li>JSON and fetch method or axios</li>
      <li>Functional components</li>
      <li>API - theory</li>
      <li>React Router > v.6</li>
      <li>
        Hooks - useState, useEffect, useContext, createContext, useRef,
        createRef, useEffect, useReducer, useMemo, useCallback,
        useHistory, useLocation
      </li>
      <li>Redux</li>
      <li>Working with NodeJS</li>
      </ul>
      `},{element:document.querySelector("#knowledge-content-3"),pl:`
    <h2>NodeJS</h2>
    <ul>
      <li>Biblioteki: jwt, express, cookie-parser, cors, dotenv</li>
      <li>Połączenie z hostingami np. Cloudinary</li>
      <li>Callback</li>
      <li>Format JSON</li>
      <li>Require lub ES6 (import)</li>
      <li>Tworzenie serwera HTTP</li>
      <li>Żądanie do serwera HTTP</li>
      <li>Serwer HTTP - asychroniczność i synchroniczność</li>
      <li>Połączenie z MySQL lub MongoDB</li>
      <li>Tworzenie routingu</li>
      </ul>
      `,eng:`
    <h2>NodeJS</h2>
    <ul>
      <li>Libraries: jwt, express, cookie-parser, cors, dotenv</li>
      <li>Connection to hosting for example: Cloudinary</li>
      <li>Callback</li>
      <li>JSON format</li>
      <li>Require or ES6 (import)</li>
      <li>Creating server HTTP</li>
      <li>Request to the server HTTP</li>
      <li>Server HTTP - asychronicity and synchronicity</li>
      <li>Connection with MySQL or MongoDB</li>
      <li>Create routing</li>
      </ul>
      `},{element:document.querySelector("#knowledge-content-4"),pl:`
    <h2>MySQL</h2>
    <ul>
      <li>Importowanie danych z excela (.csv)</li>
      <li>Definiowanie tabel i dodawanie wartości</li>
      <li>Wyświetlanie danych</li>
      <li>Aktualizacja i usuwanie danych</li>
      <li>Tabele relacyjne</li>
      <li>Referencja do innych tabel</li>
      <li>Łączenie dwóch tabel (Join)</li>
      </ul>
      `,eng:`
    <h2>MySQL</h2>
    <ul>
      <li>Importing data from excel (.csv)</li>
      <li>Defining tables and adding values</li>
      <li>Data display</li>
      <li>Update and delete data</li>
      <li>Relational tables</li>
      <li>Reference to other tables</li>
      <li>Combining two tables (Join)</li>
      </ul>
      `},{element:document.querySelector("#knowledge-content-5"),pl:`
    <h2>MongoDB</h2>
    <ul>
      <li>Podstawowe operacje w MongoDB</li>
      <li>Spójniki</li>
      <li>Aktualizacja i usuwanie danych</li>
      <li>Compass Community</li>
      <li>Użycie MongoDB w NodeJS</li>
      </ul>
      `,eng:`
    <h2>MongoDB</h2>
    <ul>
      <li>Basic operations in MongoDB</li>
      <li>Coherents</li>
      <li>Update and delete data</li>
      <li>Compass Community</li>
      <li>Using MongoDB in NodeJS</li>
      </ul>
      `},{element:document.querySelector("#knowledge-content-6"),pl:`
    <h2>Blender</h2>
    <ul>
      <li>Modelowanie i tryb edycji elementów</li>
      <li>Rzeźbienie elementów</li>
      <li>Tworzenie animacji szkieletu lub nodów</li>
      <li>Tworzenie materiałów i podstawowe łączenia nodów</li>
      <li>Eksport jako glTF lub glb i połączenie modelu z ThreeJS</li>
      </ul>
      `,eng:`
    <h2>Blender</h2>
    <ul>
      <li>Modeling and element editing mode</li>
      <li>Sculpting the elements</li>
      <li>Create skeletal or node animations</li>
      <li>Creating materials and basic connection of node</li>
      <li>Exporting as glTF or glb and connecting model with ThreeJS</li>
      </ul>
      `},{element:document.querySelector("#knowledge-content-7"),pl:`
    <h2>Illustrator</h2>
    <ul>
      <li>Tworzenie ulotek, banerów, reklam i logotypów</li>
      <li>Prawidłowa obsługa narzędzi</li>
      <li>Obsługa tabletu graficznego</li>
      <li>Dodatkowo tworzenie layoutów w Adobe XD lub Figma</li>
      </ul>
      `,eng:`
    <h2>Illustrator</h2>
    <ul>
      <li>Create flyers, banners, ads and logotypes</li>
      <li>Correct tool handling</li>
      <li>Graphics tablet operation</li>
      <li>In addition creating layouts in Adobe XD or Figma</li>
      </ul>
      `},{element:document.querySelector("#knowledge-content-8"),pl:`
    <h2>Photoshop</h2>
    <ul>
      <li>Prosty retusz zdjęć</li>
      <li>Prasowanie ubrań</li>
      <li>Poprawa jakości skóry (usuwanie znamion itp.)</li>
      <li>Edycja plików RAW</li>
      <li>Obsługa tabletu graficznego</li>
      </ul>
      `,eng:`
    <h2>Photoshop</h2>
    <ul>
      <li>Simple photo retouching</li>
      <li>Ironing clothes</li>
      <li>Skin improvement (remove of moles etc.)</li>
      <li>Edition RAW files</li>
      <li>Graphics tablet operation</li>
      </ul>
      `},{element:document.querySelector("#knowledge-content-9"),pl:`
    <h2>Zainteresowania</h2>
      `,eng:`
    <h2>Hobbies</h2>
      `},{element:document.querySelector("#knowledge-content-10"),pl:`
    <h2>Programowanie</h2>
      `,eng:`
    <h2>Programming</h2>
      `},{element:document.querySelector("#knowledge-content-11"),pl:`
    <h2>Rysowanie</h2>
      `,eng:`
    <h2>Drawing</h2>
      `},{element:document.querySelector("#knowledge-content-12"),pl:`
    <h2>Sport</h2>
      `,eng:`
    <h2>Sport</h2>
      `},{element:document.querySelector("#knowledge-content-13"),pl:`
    <h2>Grafika 3D</h2>
      `,eng:`
    <h2>3D Graphic</h2>
      `},{element:document.querySelector("#knowledge-content-14"),pl:`
    <h2>Muzyka filmowa</h2>
      `,eng:`
    <h2>Movie music</h2>
      `},{element:document.querySelector("#contact-h2-left"),pl:"Kon",eng:"Con"},{element:document.querySelector("#contact-h2-right"),pl:"takt",eng:"tact"},{element:document.querySelector("#contact-h3"),pl:"Zainteresowany?",eng:"Interested?"},{element:document.querySelector("#contact-p-1"),pl:"Napisz do mnie!",eng:"Write to me!"},{element:document.querySelector("#contact-p-2"),pl:"lub zadzwoń!",eng:"or call!"}];class Ur{static initLanguage(e,t,n){function i(s,o){for(let a=0;a<s.length;a++){const l=document.createElement("span");s[a]===" "?l.innerHTML="&nbsp;":l.innerHTML=s[a],o.element.appendChild(l)}}sv.forEach((s,o)=>{s.element.innerHTML="",e==="pl"?(s.type==="spans"?i(s.pl,s):s.element.innerHTML=s.pl,t.classList.add("active"),n.classList.remove("active")):(s.type==="spans"?i(s.eng,s):s.element.innerHTML=s.eng,t.classList.remove("active"),n.classList.add("active"))})}}class rv extends Xn{constructor(e){super(e)}load(e,t,n,i){const s=this,o=new rs(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));t&&t(l)},n,i)}parse(e){return new ov(e)}}class ov{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,t=100){const n=[],i=av(e,t,this.data);for(let s=0,o=i.length;s<o;s++)n.push(...i[s].toShapes());return n}}function av(r,e,t){const n=Array.from(r),i=e/t.resolution,s=(t.boundingBox.yMax-t.boundingBox.yMin+t.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=lv(h,i,a,l,t);a+=u.offsetX,o.push(u.path)}}return o}function lv(r,e,t,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new N0;let a,l,c,h,u,d,p,g;if(s.o){const f=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,v=f.length;m<v;)switch(f[m++]){case"m":a=f[m++]*e+t,l=f[m++]*e+n,o.moveTo(a,l);break;case"l":a=f[m++]*e+t,l=f[m++]*e+n,o.lineTo(a,l);break;case"q":c=f[m++]*e+t,h=f[m++]*e+n,u=f[m++]*e+t,d=f[m++]*e+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=f[m++]*e+t,h=f[m++]*e+n,u=f[m++]*e+t,d=f[m++]*e+n,p=f[m++]*e+t,g=f[m++]*e+n,o.bezierCurveTo(u,d,p,g,c,h);break}}return{offsetX:s.ha*e,path:o}}class zl extends To{constructor(e,t={}){const n=t.font;if(n===void 0)super();else{const i=n.generateShapes(e,t.size);t.depth=t.height!==void 0?t.height:50,t.bevelThickness===void 0&&(t.bevelThickness=10),t.bevelSize===void 0&&(t.bevelSize=8),t.bevelEnabled===void 0&&(t.bevelEnabled=!1),super(i,t)}this.type="TextGeometry"}}class cv{constructor(e,t){jo(this,"setRaycasterElementsColor",()=>{this.raycasterElements.forEach(e=>{e.needsUpdate=!0,this.intersects.length===0&&(e.material=new _t({color:"#40e755"})),this.intersects.forEach(t=>{t.object.name===e.name?e.material=new _t({color:"#296fba"}):e.material=new _t({color:"#40e755"})}),this.actualType===e.name&&(e.material=new _t({color:"#296fba"}))})});this.window=window,this.document=document,this.engine=e,this.laptop=t,this.animations=[],this.fontSaira,this.isObjectImg=!1,this.actualType="LearnB",this.urlType,this.actualNumber=0,this.initLoader=0,this.initArray=!1,this.raycasterElements=[],this.arrayOfClients=["https://netifashionlook.pl"],this.max,this.topText,this.actualText,this.render()}addElementsToArray(e){if(!this.initArray){const t=e.getObjectByName("LaptopAll");this.initArray=!0,t.children.forEach(n=>{const i=n.name;(i==="ClientsB"||i==="DrawingsB"||i==="LearnB"||i==="ProjectsB"||i==="RightB"||i==="LeftB"||i==="ShowB")&&this.raycasterElements.push(n)})}}setIsActive(e,t){this.isActive=e,t==="play"?this.animations.forEach(n=>n.play()):this.animations.forEach(n=>n.pause())}checkRaycaster(e,t,n){this.raycasterElements.length===0?this.addElementsToArray(e):(this.intersects=t.intersectObjects(this.raycasterElements),this.setRaycasterElementsColor())}setMax(){this.actualType==="LearnB"?(this.max=32,this.urlType="learn"):this.actualType==="ProjectsB"?(this.max=19,this.urlType="projects"):this.actualType==="ClientsB"?(this.max=1,this.urlType="clients"):this.actualType==="DrawingsB"&&(this.max=19,this.urlType="drawings")}setUrl(){}setActualNumber(e){e===-1?this.actualNumber===0?this.actualNumber=this.max-1:this.actualNumber--:this.actualNumber===this.max-1?this.actualNumber=0:this.actualNumber++}getImgObject(){this.laptop.modelPortfolio?(this.imgProjects=this.laptop.modelPortfolio.getObjectByName("imgProjects"),this.imgProjects&&(this.isObjectImg=!0,this.setImgProjects())):this.getImgObject()}setImgProjects(){this.imgProjects&&(this.imgProjects.material.needsUpdate=!0,this.loader=new Lo,this.url="portfolio/"+this.urlType+"/images/"+this.actualNumber+".jpg",this.loader.load(this.url,e=>{e.name=this.url;const t=new _t({map:e});t.needsUpdate=!0,t.side=2,this.imgProjects.material=t,this.initLoader===0&&(this.initLoader++,this.imgProjects.rotation.z=Math.PI*1)},void 0,function(e){console.error("An error happened.")}))}createText(){if(!this.imgProjects)return;if(!this.font){this.createText();return}const e=this.laptop.modelPortfolio.getObjectByName("ACTUALTEXT"),t=this.laptop.modelPortfolio.getObjectByName("TOPTEXT");let n,i="",s="";this.actualType==="LearnB"?this.actualNumber>=0&&this.actualNumber<10?(s="CSS",n=.23):this.actualNumber>=10&&this.actualNumber<20?(s="JavaScript",n=.18):this.actualNumber>=20&&(s="React",n=.22):this.actualType==="ProjectsB"?(s="Projects",n=.19):this.actualType==="ClientsB"?(s="Clients",n=.2):this.actualType==="DrawingsB"&&(s="Drawings",n=.18),this.actualNumber<9&&(i+="0"),i+=this.actualNumber+1+"/",this.max<10?i+="0"+this.max:i+=this.max;const o=new zl(i,{font:this.font,size:.1,height:.085}),a=new zl(s,{font:this.font,size:.1,height:.085}),l=new At(o,[new _t({color:"#40e755"}),new _t({color:"#40e755"})]),c=new At(a,[new _t({color:"#40e755"}),new _t({color:"#40e755"})]);l.geometry.needsUpdate=!0,c.geometry.needsUpdate=!0,l.scale.z=.01,l.scale.x=.27,l.scale.y=.27,l.position.z=-.21,l.position.x=.23,l.position.y=.28,c.scale.z=.01,c.scale.x=.38,c.scale.y=.38,c.position.z=-.21,c.position.x=n,c.position.y=.32,l.name="ACTUALTEXT",c.name="TOPTEXT",e?(e.geometry=o,e.position.x=l.position.x):this.laptop.modelPortfolio.add(l),t?(t.geometry=a,t.position.x=n):this.laptop.modelPortfolio.add(c)}async render(){this.portfolio=this.document.querySelector(".portfolio"),this.cancel=this.document.querySelector(".cancel"),this.lightboxImgWrapper=this.document.querySelector(".lightbox-img-wrapper"),this.fontLoader=await new rv,this.setMax(),this.getImgObject(),await this.fontLoader.loadAsync("threejs/SairaCondensed.json",()=>{}).then(e=>{this.font=e}),this.createText(),this.cancel.addEventListener("click",()=>{this.document.querySelector(".lightbox").classList.remove("active")}),this.portfolio.addEventListener("click",()=>{if(this.intersects.length>0){const e=this.intersects[0].object.name;if(this.actualType!==e&&(e==="LearnB"||e==="ProjectsB"||e==="ClientsB"||e==="DrawingsB")&&(this.actualType=e,this.setMax(),this.actualNumber=0,this.setImgProjects(),this.createText()),e==="LeftB"?(this.setActualNumber(-1),this.setImgProjects(),this.createText()):e==="RightB"&&(this.setActualNumber(1),this.setImgProjects(),this.createText()),e==="ShowB")if(this.actualType==="ClientsB")this.window.open(this.arrayOfClients[this.actualNumber],"_blank");else if(this.actualType==="DrawingsB")this.document.querySelector(".lightbox").classList.add("active"),this.lightboxImgWrapper.innerHTML=`<img src="./portfolio/drawings/catalogs/${this.actualNumber}.jpg" alt="img-${this.actualNumber}"/>`;else{let t="./portfolio/"+this.urlType+"/catalogs/kat"+this.actualNumber+"/index.html";this.window.open(t)}}})}}class hv{constructor(e,t){this.document=e,this.window=t,this.isActive,this.render()}setIsActive(e){this.isActive=e}setActivity(e,t){this.scrollPercentageHistory>t?this.document.querySelector(e).classList.add("active"):this.document.querySelector(e).classList.remove("active")}scroll(){this.isActive&&(this.clientHeight=this.document.documentElement.clientHeight,this.aboutHistoryTop=this.aboutHistory.getBoundingClientRect().top,this.aboutHistoryHeight=this.aboutHistory.offsetHeight,this.scrollPercentageHistory=this.aboutHistoryTop*-1/(this.aboutHistoryHeight-this.clientHeight/2),this.scrollPercentageHistory<=1.1&&(this.drawlength=this.pathLength*this.scrollPercentageHistory,this.path.style.strokeDashoffset=this.pathLength-this.drawlength,this.setActivity(".his-1",.12),this.setActivity(".his-2",.18),this.setActivity(".his-3",.25),this.setActivity(".his-4",.3),this.setActivity(".his-5",.36),this.setActivity(".his-6",.41),this.setActivity(".his-7",.49),this.setActivity(".his-8",.54),this.setActivity(".his-9",.6),this.setActivity(".his-10",.66),this.setActivity(".his-11",.72),this.setActivity(".his-12",.79),this.setActivity(".his-13",.85)))}render(){this.aboutHistory=this.document.querySelector(".about-history"),this.scrollPercentageHistory=0,this.path=document.querySelector(".history-cls1"),this.pathLength=this.path.getTotalLength(),this.path.style.strokeDasharray=this.pathLength+" "+this.pathLength,this.path.style.strokeDashoffset=this.pathLength,this.path.getBoundingClientRect(),this.window.addEventListener("scroll",()=>this.scroll()),this.scroll()}}class uv{constructor(e,t,n,i){this.window=window,this.document=document,this.isLoading=!0,this.patrick=e,this.laptop=t,this.engine=n,this.holograms=i,this.actualRenderIndex=0,this.scroll=new ev(this.patrick,this.laptop,this.engine,this.holograms),this.home=new nv,this.about=new tv,this.aboutHistory=new hv(document,window),this.portfolio=new cv(n,t),this.contact=new iv}async init(){this.actualLanguage="pl",this.lanPL=document.querySelector(".pl"),this.lanENG=document.querySelector(".eng"),this.windowSize=window.innerWidth,this.navbar=document.querySelector("nav"),this.burger=document.querySelector(".burger-wrapper"),this.elements=document.querySelectorAll(".nav-li"),this.sections=document.querySelectorAll(".section"),this.mobile,this.sectionInfo=[],this.initialStatements(),this.listeners(),this.initScroll(this)}setMobile(){this.getWindowSize()>=1024?this.mobile=!1:this.mobile=!0}setWindowSize(e){this.windowSize=e}getWindowSize(){return this.windowSize}static getMobile(){return this.mobile}setSectionInfo(){const e=[];this.sections.forEach(t=>{const n={height:t.clientHeight,top:t.getBoundingClientRect().top,bottom:t.getBoundingClientRect().bottom};e.push(n)}),this.sectionInfo=e}initialStatements(){Ur.initLanguage("pl",this.lanPL,this.lanENG),this.setMobile(),this.setSectionInfo(),_e({targets:this.elements,translateX:[-300,0],opacity:[0,1],easing:"linear",duration:300,delay:_e.stagger(100)})}initScroll(){this.setSectionInfo();let e;this.sectionInfo.forEach((t,n)=>{t.bottom>=300&&t.top-300<=0&&(e=n)}),this.elements.forEach((t,n)=>{n===e?t.classList.add("active"):t.classList.remove("active")}),e===0?(this.home.animationsSet("play"),this.actualRenderIndex=99):this.home.animationsSet("pause"),e===1?(this.actualRenderIndex=0,this.about.setIsActive(!0,"play")):this.about.setIsActive(!1,"pause"),e===2?(this.actualRenderIndex=99,this.aboutHistory.setIsActive(!0)):this.aboutHistory.setIsActive(!1),e===3&&(this.actualRenderIndex=1,this.patrick.scrollsAnimation(this.actualRenderIndex)),e===4?(this.actualRenderIndex=2,this.patrick.scrollsAnimation(this.actualRenderIndex),this.portfolio.setIsActive(!0)):this.portfolio.setIsActive(!1),e===5?(this.actualRenderIndex=3,this.contact.setIsActive(!0,"play")):this.contact.setIsActive(!1,"pause"),this.scroll.scrollsAnimation(e)}initResize(e){e.setSectionInfo(),e.setWindowSize(e.window.innerWidth)}setActualLanguage(e){this.actualLanguage=e}listeners(){this.burger.addEventListener("click",()=>{this.navbar.classList.toggle("active"),this.burger.classList.toggle("active")}),this.lanPL.addEventListener("click",()=>{this.actualLanguage!=="pl"&&(Ur.initLanguage("pl",this.lanPL,this.lanENG),this.setActualLanguage("pl"))}),this.lanENG.addEventListener("click",()=>{this.actualLanguage!=="eng"&&(Ur.initLanguage("eng",this.lanPL,this.lanENG),this.setActualLanguage("eng"))}),this.window.addEventListener("scroll",()=>this.initScroll(this)),this.window.addEventListener("resize",()=>this.initResize(this)),this.initScroll(this),this.initResize(this)}}window.addEventListener("load",r=>{dv()});const dv=async()=>{const r=new $_;await r.createEngine({dom:document.querySelectorAll(".three-wrapper-ps")});const e=new K_(r,!0);await e.initLoader();const t=new J_(r),n=new m_(r),i=new U0(r),s=new uv(t,n,r,i);await s.init(),await new Cc(r,s,t,n,e,!0,i).startApp()};
