(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bc="169",uf=0,El=1,hf=2,Ch=1,La=2,Gn=3,pi=0,It=1,$t=2,Kn=0,gr=1,ns=2,Ml=3,Tl=4,df=5,Ri=100,ff=101,pf=102,mf=103,gf=104,vf=200,_f=201,yf=202,xf=203,Bo=204,zo=205,wf=206,bf=207,Sf=208,Ef=209,Mf=210,Tf=211,Af=212,Rf=213,Cf=214,Ho=0,Go=1,Vo=2,wr=3,Wo=4,jo=5,qo=6,Xo=7,Ph=0,Pf=1,Lf=2,hi=0,Lh=1,Ih=2,Dh=3,Uh=4,If=5,Oh=6,ds=7,Nh=300,br=301,Sr=302,Ko=303,Yo=304,Ia=306,Jo=1e3,Pi=1001,Zo=1002,Lt=1003,Df=1004,ys=1005,un=1006,Ya=1007,Li=1008,Jn=1009,kh=1010,Fh=1011,is=1012,zc=1013,Ui=1014,Ln=1015,Mn=1016,Hc=1017,Gc=1018,Er=1020,Bh=35902,zh=1021,Hh=1022,Sn=1023,Gh=1024,Vh=1025,vr=1026,Mr=1027,Da=1028,Vc=1029,Wh=1030,Wc=1031,jc=1033,sa=33776,aa=33777,oa=33778,ca=33779,$o=35840,Qo=35841,ec=35842,tc=35843,nc=36196,ic=37492,rc=37496,sc=37808,ac=37809,oc=37810,cc=37811,lc=37812,uc=37813,hc=37814,dc=37815,fc=37816,pc=37817,mc=37818,gc=37819,vc=37820,_c=37821,la=36492,yc=36494,xc=36495,jh=36283,wc=36284,bc=36285,Sc=36286,Uf=3200,Of=3201,qh=0,Nf=1,ci="",Ot="srgb",gi="srgb-linear",qc="display-p3",Ua="display-p3-linear",fa="linear",ut="srgb",pa="rec709",ma="p3",Hi=7680,Al=519,kf=512,Ff=513,Bf=514,Xh=515,zf=516,Hf=517,Gf=518,Vf=519,Ec=35044,Rl="300 es",qn=2e3,ga=2001;class Cr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Cl=1234567;const Jr=Math.PI/180,rs=180/Math.PI;function Yn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function jt(n,e,t){return Math.max(e,Math.min(t,n))}function Xc(n,e){return(n%e+e)%e}function Wf(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function jf(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function qf(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function Xf(n,e=1){return e-Math.abs(Xc(n,e*2)-e)}function Kf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Yf(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Jf(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Zf(n,e){return n+Math.random()*(e-n)}function $f(n){return n*(.5-Math.random())}function Qf(n){n!==void 0&&(Cl=n);let e=Cl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ep(n){return n*Jr}function tp(n){return n*rs}function np(n){return(n&n-1)===0&&n!==0}function ip(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function rp(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sp(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),c=a(t/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,c*h,c*d,o*l);break;case"YZY":n.set(c*d,o*u,c*h,o*l);break;case"ZXZ":n.set(c*h,c*d,o*u,o*l);break;case"XZX":n.set(o*u,c*g,c*f,o*l);break;case"YXY":n.set(c*f,o*u,c*g,o*l);break;case"ZYZ":n.set(c*g,c*f,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function wn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function st(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Dr={DEG2RAD:Jr,RAD2DEG:rs,generateUUID:Yn,clamp:jt,euclideanModulo:Xc,mapLinear:Wf,inverseLerp:jf,lerp:Zr,damp:qf,pingpong:Xf,smoothstep:Kf,smootherstep:Yf,randInt:Jf,randFloat:Zf,randFloatSpread:$f,seededRandom:Qf,degToRad:ep,radToDeg:tp,isPowerOfTwo:np,ceilPowerOfTwo:ip,floorPowerOfTwo:rp,setQuaternionFromProperEuler:sp,normalize:st,denormalize:wn};class Pe{constructor(e=0,t=0){Pe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xe{constructor(e,t,i,r,s,a,o,c,l){Xe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l)}set(e,t,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],x=r[1],y=r[4],S=r[7],E=r[2],w=r[5],T=r[8];return s[0]=a*_+o*x+c*E,s[3]=a*m+o*y+c*w,s[6]=a*p+o*S+c*T,s[1]=l*_+u*x+h*E,s[4]=l*m+u*y+h*w,s[7]=l*p+u*S+h*T,s[2]=d*_+f*x+g*E,s[5]=d*m+f*y+g*w,s[8]=d*p+f*S+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*s,f=l*s-a*c,g=t*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(r*l-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*t-r*c)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*c-l*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ja.makeScale(e,t)),this}rotate(e){return this.premultiply(Ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ja=new Xe;function Kh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function va(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ap(){const n=va("canvas");return n.style.display="block",n}const Pl={};function ua(n){n in Pl||(Pl[n]=!0,console.warn(n))}function op(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function cp(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lp(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ll=new Xe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Il=new Xe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ur={[gi]:{transfer:fa,primaries:pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Ot]:{transfer:ut,primaries:pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ua]:{transfer:fa,primaries:ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Il),fromReference:n=>n.applyMatrix3(Ll)},[qc]:{transfer:ut,primaries:ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Il),fromReference:n=>n.applyMatrix3(Ll).convertLinearToSRGB()}},up=new Set([gi,Ua]),et={enabled:!0,_workingColorSpace:gi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!up.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ur[e].toReference,r=Ur[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ur[n].primaries},getTransfer:function(n){return n===ci?fa:Ur[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(Ur[e].luminanceCoefficients)}};function _r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Za(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Gi;class hp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Gi===void 0&&(Gi=va("canvas")),Gi.width=e.width,Gi.height=e.height;const i=Gi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Gi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=va("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=_r(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_r(t[i]/255)*255):t[i]=_r(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dp=0;class Yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($a(r[a].image)):s.push($a(r[a]))}else s=$a(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function $a(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?hp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fp=0;class Dt extends Cr{constructor(e=Dt.DEFAULT_IMAGE,t=Dt.DEFAULT_MAPPING,i=Pi,r=Pi,s=un,a=Li,o=Sn,c=Jn,l=Dt.DEFAULT_ANISOTROPY,u=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=Yn(),this.name="",this.source=new Yh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jo:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jo:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Dt.DEFAULT_IMAGE=null;Dt.DEFAULT_MAPPING=Nh;Dt.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,i=0,r=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,S=(f+1)/2,E=(p+1)/2,w=(u+d)/4,T=(h+_)/4,C=(g+m)/4;return y>S&&y>E?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=w/i,s=T/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=w/r,s=C/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=T/s,r=C/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pp extends Cr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Dt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Yh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tn extends pp{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Jh extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mp extends Dt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Lt,this.minFilter=Lt,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3];const d=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==d||l!==f||u!==g){let m=1-o;const p=c*d+l*f+u*g+h*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const E=Math.sqrt(y),w=Math.atan2(E,p*x);m=Math.sin(m*w)/E,o=Math.sin(o*w)/E}const S=o*x;if(c=c*m+d*S,l=l*m+f*S,u=u*m+g*S,h=h*m+_*S,m===1-o){const E=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=E,l*=E,u*=E,h*=E}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*h+c*f-l*d,e[t+1]=c*g+u*d+l*h-o*f,e[t+2]=l*g+u*f+o*d-c*h,e[t+3]=u*g-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),d=c(i/2),f=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h+d*f*g;break;case"YZX":this._x=d*u*h+l*f*g,this._y=l*f*h+d*u*g,this._z=l*u*g-d*f*h,this._w=l*u*h-d*f*g;break;case"XZY":this._x=d*u*h-l*f*g,this._y=l*f*h-d*u*g,this._z=l*u*g+d*f*h,this._w=l*u*h+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-l)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(jt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=a*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*t-s*r),h=2*(s*i-a*t);return this.x=t+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(jt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new N,Dl=new fs;class Oi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,pn):pn.fromBufferAttribute(s,a),pn.applyMatrix4(e.matrixWorld),this.expandByPoint(pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xs.copy(i.boundingBox)),xs.applyMatrix4(e.matrixWorld),this.union(xs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pn),pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Or),ws.subVectors(this.max,Or),Vi.subVectors(e.a,Or),Wi.subVectors(e.b,Or),ji.subVectors(e.c,Or),ni.subVectors(Wi,Vi),ii.subVectors(ji,Wi),vi.subVectors(Vi,ji);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-vi.z,vi.y,ni.z,0,-ni.x,ii.z,0,-ii.x,vi.z,0,-vi.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-vi.y,vi.x,0];return!eo(t,Vi,Wi,ji,ws)||(t=[1,0,0,0,1,0,0,0,1],!eo(t,Vi,Wi,ji,ws))?!1:(bs.crossVectors(ni,ii),t=[bs.x,bs.y,bs.z],eo(t,Vi,Wi,ji,ws))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Nn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Nn=[new N,new N,new N,new N,new N,new N,new N,new N],pn=new N,xs=new Oi,Vi=new N,Wi=new N,ji=new N,ni=new N,ii=new N,vi=new N,Or=new N,ws=new N,bs=new N,_i=new N;function eo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){_i.fromArray(n,s);const o=r.x*Math.abs(_i.x)+r.y*Math.abs(_i.y)+r.z*Math.abs(_i.z),c=e.dot(_i),l=t.dot(_i),u=i.dot(_i);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const gp=new Oi,Nr=new N,to=new N;class Pr{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):gp.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nr.subVectors(e,this.center);const t=Nr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Nr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(to.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nr.copy(e.center).add(to)),this.expandByPoint(Nr.copy(e.center).sub(to))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const kn=new N,no=new N,Ss=new N,ri=new N,io=new N,Es=new N,ro=new N;class Zh{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(kn.copy(this.origin).addScaledVector(this.direction,t),kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){no.copy(e).add(t).multiplyScalar(.5),Ss.copy(t).sub(e).normalize(),ri.copy(this.origin).sub(no);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ss),o=ri.dot(this.direction),c=-ri.dot(Ss),l=ri.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*c-o,d=a*o-c,g=s*u,h>=0)if(d>=-g)if(d<=g){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),f=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(no).addScaledVector(Ss,d),f}intersectSphere(e,t){kn.subVectors(e.center,this.origin);const i=kn.dot(this.direction),r=kn.dot(kn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,kn)!==null}intersectTriangle(e,t,i,r,s){io.subVectors(t,e),Es.subVectors(i,e),ro.crossVectors(io,Es);let a=this.direction.dot(ro),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ri.subVectors(this.origin,e);const c=o*this.direction.dot(Es.crossVectors(ri,Es));if(c<0)return null;const l=o*this.direction.dot(io.cross(ri));if(l<0||c+l>a)return null;const u=-o*ri.dot(ro);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ct{constructor(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m){ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m)}set(e,t,i,r,s,a,o,c,l,u,h,d,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/qi.setFromMatrixColumn(e,0).length(),s=1/qi.setFromMatrixColumn(e,1).length(),a=1/qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+g*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d+_*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,g=l*u,_=l*h;t[0]=d-_*o,t[4]=-a*h,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,_=o*h;t[0]=c*u,t[4]=g*l-f,t[8]=d*l+_,t[1]=c*h,t[5]=_*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=_-d*h,t[8]=g*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*c,f=a*l,g=o*c,_=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-g,t[2]=g*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vp,e,_p)}lookAt(e,t,i){const r=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),si.crossVectors(i,Jt),si.lengthSq()===0&&(Math.abs(i.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),si.crossVectors(i,Jt)),si.normalize(),Ms.crossVectors(Jt,si),r[0]=si.x,r[4]=Ms.x,r[8]=Jt.x,r[1]=si.y,r[5]=Ms.y,r[9]=Jt.y,r[2]=si.z,r[6]=Ms.z,r[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],x=i[3],y=i[7],S=i[11],E=i[15],w=r[0],T=r[4],C=r[8],L=r[12],v=r[1],b=r[5],U=r[9],H=r[13],j=r[2],V=r[6],P=r[10],z=r[14],I=r[3],J=r[7],$=r[11],ie=r[15];return s[0]=a*w+o*v+c*j+l*I,s[4]=a*T+o*b+c*V+l*J,s[8]=a*C+o*U+c*P+l*$,s[12]=a*L+o*H+c*z+l*ie,s[1]=u*w+h*v+d*j+f*I,s[5]=u*T+h*b+d*V+f*J,s[9]=u*C+h*U+d*P+f*$,s[13]=u*L+h*H+d*z+f*ie,s[2]=g*w+_*v+m*j+p*I,s[6]=g*T+_*b+m*V+p*J,s[10]=g*C+_*U+m*P+p*$,s[14]=g*L+_*H+m*z+p*ie,s[3]=x*w+y*v+S*j+E*I,s[7]=x*T+y*b+S*V+E*J,s[11]=x*C+y*U+S*P+E*$,s[15]=x*L+y*H+S*z+E*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*c*h-r*l*h-s*o*d+i*l*d+r*o*f-i*c*f)+_*(+t*c*f-t*l*d+s*a*d-r*a*f+r*l*u-s*c*u)+m*(+t*l*h-t*o*f-s*a*h+i*a*f+s*o*u-i*l*u)+p*(-r*o*u-t*c*h+t*o*d+r*a*h-i*a*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],x=h*m*l-_*d*l+_*c*f-o*m*f-h*c*p+o*d*p,y=g*d*l-u*m*l-g*c*f+a*m*f+u*c*p-a*d*p,S=u*_*l-g*h*l+g*o*f-a*_*f-u*o*p+a*h*p,E=g*h*c-u*_*c-g*o*d+a*_*d+u*o*m-a*h*m,w=t*x+i*y+r*S+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(_*d*s-h*m*s-_*r*f+i*m*f+h*r*p-i*d*p)*T,e[2]=(o*m*s-_*c*s+_*r*l-i*m*l-o*r*p+i*c*p)*T,e[3]=(h*c*s-o*d*s-h*r*l+i*d*l+o*r*f-i*c*f)*T,e[4]=y*T,e[5]=(u*m*s-g*d*s+g*r*f-t*m*f-u*r*p+t*d*p)*T,e[6]=(g*c*s-a*m*s-g*r*l+t*m*l+a*r*p-t*c*p)*T,e[7]=(a*d*s-u*c*s+u*r*l-t*d*l-a*r*f+t*c*f)*T,e[8]=S*T,e[9]=(g*h*s-u*_*s-g*i*f+t*_*f+u*i*p-t*h*p)*T,e[10]=(a*_*s-g*o*s+g*i*l-t*_*l-a*i*p+t*o*p)*T,e[11]=(u*o*s-a*h*s-u*i*l+t*h*l+a*i*f-t*o*f)*T,e[12]=E*T,e[13]=(u*_*r-g*h*r+g*i*d-t*_*d-u*i*m+t*h*m)*T,e[14]=(g*o*r-a*_*r-g*i*c+t*_*c+a*i*m-t*o*m)*T,e[15]=(a*h*r-u*o*r+u*i*c-t*h*c-a*i*d+t*o*d)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,u=a+a,h=o+o,d=s*l,f=s*u,g=s*h,_=a*u,m=a*h,p=o*h,x=c*l,y=c*u,S=c*h,E=i.x,w=i.y,T=i.z;return r[0]=(1-(_+p))*E,r[1]=(f+S)*E,r[2]=(g-y)*E,r[3]=0,r[4]=(f-S)*w,r[5]=(1-(d+p))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(g+y)*T,r[9]=(m-x)*T,r[10]=(1-(d+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=qi.set(r[0],r[1],r[2]).length();const a=qi.set(r[4],r[5],r[6]).length(),o=qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],mn.copy(this);const l=1/s,u=1/a,h=1/o;return mn.elements[0]*=l,mn.elements[1]*=l,mn.elements[2]*=l,mn.elements[4]*=u,mn.elements[5]*=u,mn.elements[6]*=u,mn.elements[8]*=h,mn.elements[9]*=h,mn.elements[10]*=h,t.setFromRotationMatrix(mn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=qn){const c=this.elements,l=2*s/(t-e),u=2*s/(i-r),h=(t+e)/(t-e),d=(i+r)/(i-r);let f,g;if(o===qn)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ga)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=qn){const c=this.elements,l=1/(t-e),u=1/(i-r),h=1/(a-s),d=(t+e)*l,f=(i+r)*u;let g,_;if(o===qn)g=(a+s)*h,_=-2*h;else if(o===ga)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const qi=new N,mn=new ct,vp=new N(0,0,0),_p=new N(1,1,1),si=new N,Ms=new N,Jt=new N,Ul=new ct,Ol=new fs;class Zn{constructor(e=0,t=0,i=0,r=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-jt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ul,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ol.setFromEuler(this),this.setFromQuaternion(Ol,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Kc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yp=0;const Nl=new N,Xi=new fs,Fn=new ct,Ts=new N,kr=new N,xp=new N,wp=new fs,kl=new N(1,0,0),Fl=new N(0,1,0),Bl=new N(0,0,1),zl={type:"added"},bp={type:"removed"},Ki={type:"childadded",child:null},so={type:"childremoved",child:null};class St extends Cr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=St.DEFAULT_UP.clone();const e=new N,t=new Zn,i=new fs,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ct},normalMatrix:{value:new Xe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=St.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(e,t){return Xi.setFromAxisAngle(e,t),this.quaternion.premultiply(Xi),this}rotateX(e){return this.rotateOnAxis(kl,e)}rotateY(e){return this.rotateOnAxis(Fl,e)}rotateZ(e){return this.rotateOnAxis(Bl,e)}translateOnAxis(e,t){return Nl.copy(e).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kl,e)}translateY(e){return this.translateOnAxis(Fl,e)}translateZ(e){return this.translateOnAxis(Bl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ts.copy(e):Ts.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(kr,Ts,this.up):Fn.lookAt(Ts,kr,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),Xi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Xi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zl),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bp),so.child=e,this.dispatchEvent(so),so.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zl),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,e,xp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kr,wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}St.DEFAULT_UP=new N(0,1,0);St.DEFAULT_MATRIX_AUTO_UPDATE=!0;St.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gn=new N,Bn=new N,ao=new N,zn=new N,Yi=new N,Ji=new N,Hl=new N,oo=new N,co=new N,lo=new N,uo=new vt,ho=new vt,fo=new vt;class hn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),gn.subVectors(e,t),r.cross(gn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){gn.subVectors(r,t),Bn.subVectors(i,t),ao.subVectors(e,t);const a=gn.dot(gn),o=gn.dot(Bn),c=gn.dot(ao),l=Bn.dot(Bn),u=Bn.dot(ao),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,g=(a*u-o*c)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,r,s,a,o,c){return this.getBarycoord(e,t,i,r,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(o,zn.z),c)}static getInterpolatedAttribute(e,t,i,r,s,a){return uo.setScalar(0),ho.setScalar(0),fo.setScalar(0),uo.fromBufferAttribute(e,t),ho.fromBufferAttribute(e,i),fo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(uo,s.x),a.addScaledVector(ho,s.y),a.addScaledVector(fo,s.z),a}static isFrontFacing(e,t,i,r){return gn.subVectors(i,t),Bn.subVectors(e,t),gn.cross(Bn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),gn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Yi.subVectors(r,i),Ji.subVectors(s,i),oo.subVectors(e,i);const c=Yi.dot(oo),l=Ji.dot(oo);if(c<=0&&l<=0)return t.copy(i);co.subVectors(e,r);const u=Yi.dot(co),h=Ji.dot(co);if(u>=0&&h<=u)return t.copy(r);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(i).addScaledVector(Yi,a);lo.subVectors(e,s);const f=Yi.dot(lo),g=Ji.dot(lo);if(g>=0&&f<=g)return t.copy(s);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(Ji,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return Hl.subVectors(s,r),o=(h-u)/(h-u+(f-g)),t.copy(r).addScaledVector(Hl,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(i).addScaledVector(Yi,a).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},As={h:0,s:0,l:0};function po(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ue{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Xc(e,1),t=jt(t,0,1),i=jt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=po(a,s,e+1/3),this.g=po(a,s,e),this.b=po(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=$h[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=Za(e.r),this.g=Za(e.g),this.b=Za(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return et.fromWorkingColorSpace(Ft.copy(this),e),Math.round(jt(Ft.r*255,0,255))*65536+Math.round(jt(Ft.g*255,0,255))*256+Math.round(jt(Ft.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Ft.copy(this),t);const i=Ft.r,r=Ft.g,s=Ft.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=Ot){et.fromWorkingColorSpace(Ft.copy(this),e);const t=Ft.r,i=Ft.g,r=Ft.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ai),this.setHSL(ai.h+e,ai.s+t,ai.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ai),e.getHSL(As);const i=Zr(ai.h,As.h,t),r=Zr(ai.s,As.s,t),s=Zr(ai.l,As.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ue;Ue.NAMES=$h;let Sp=0;class Ni extends Cr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sp++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=gr,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bo,this.blendDst=zo,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bo&&(i.blendSrc=this.blendSrc),this.blendDst!==zo&&(i.blendDst=this.blendDst),this.blendEquation!==Ri&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ot extends Ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Ph,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new N,Rs=new Pe;class nn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ec,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Rs.fromBufferAttribute(this,t),Rs.applyMatrix3(e),this.setXY(t,Rs.x,Rs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ec&&(e.usage=this.usage),e}}class Qh extends nn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ed extends nn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class ft extends nn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Ep=0;const an=new ct,mo=new St,Zi=new N,Zt=new Oi,Fr=new Oi,Rt=new N;class Ht extends Cr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kh(e)?ed:Qh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return an.makeRotationFromQuaternion(e),this.applyMatrix4(an),this}rotateX(e){return an.makeRotationX(e),this.applyMatrix4(an),this}rotateY(e){return an.makeRotationY(e),this.applyMatrix4(an),this}rotateZ(e){return an.makeRotationZ(e),this.applyMatrix4(an),this}translate(e,t,i){return an.makeTranslation(e,t,i),this.applyMatrix4(an),this}scale(e,t,i){return an.makeScale(e,t,i),this.applyMatrix4(an),this}lookAt(e){return mo.lookAt(e),mo.updateMatrix(),this.applyMatrix4(mo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,Zt.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,Zt.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(Zt.min),this.boundingBox.expandByPoint(Zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(Zt.min,Fr.min),Zt.expandByPoint(Rt),Rt.addVectors(Zt.max,Fr.max),Zt.expandByPoint(Rt)):(Zt.expandByPoint(Fr.min),Zt.expandByPoint(Fr.max))}Zt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Rt.fromBufferAttribute(o,l),c&&(Zi.fromBufferAttribute(e,l),Rt.add(Zi)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let C=0;C<i.count;C++)o[C]=new N,c[C]=new N;const l=new N,u=new N,h=new N,d=new Pe,f=new Pe,g=new Pe,_=new N,m=new N;function p(C,L,v){l.fromBufferAttribute(i,C),u.fromBufferAttribute(i,L),h.fromBufferAttribute(i,v),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,L),g.fromBufferAttribute(s,v),u.sub(l),h.sub(l),f.sub(d),g.sub(d);const b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-f.y).multiplyScalar(b),m.copy(h).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(b),o[C].add(_),o[L].add(_),o[v].add(_),c[C].add(m),c[L].add(m),c[v].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let C=0,L=x.length;C<L;++C){const v=x[C],b=v.start,U=v.count;for(let H=b,j=b+U;H<j;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const y=new N,S=new N,E=new N,w=new N;function T(C){E.fromBufferAttribute(r,C),w.copy(E);const L=o[C];y.copy(L),y.sub(E.multiplyScalar(E.dot(L))).normalize(),S.crossVectors(w,L);const b=S.dot(c[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,b)}for(let C=0,L=x.length;C<L;++C){const v=x[C],b=v.start,U=v.count;for(let H=b,j=b+U;H<j;H+=3)T(e.getX(H+0)),T(e.getX(H+1)),T(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,a=new N,o=new N,c=new N,l=new N,u=new N,h=new N;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Rt.fromBufferAttribute(e,t),Rt.normalize(),e.setXYZ(t,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)d[g++]=l[f++]}return new nn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Gl=new ct,yi=new Zh,Cs=new Pr,Vl=new N,Ps=new N,Ls=new N,Is=new N,go=new N,Ds=new N,Wl=new N,Us=new N;class fe extends St{constructor(e=new Ht,t=new ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ds.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(go.fromBufferAttribute(h,e),a?Ds.addScaledVector(go,u):Ds.addScaledVector(go.sub(t),u))}t.add(Ds)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Cs.copy(i.boundingSphere),Cs.applyMatrix4(s),yi.copy(e.ray).recast(e.near),!(Cs.containsPoint(yi.origin)===!1&&(yi.intersectSphere(Cs,Vl)===null||yi.origin.distanceToSquared(Vl)>(e.far-e.near)**2))&&(Gl.copy(s).invert(),yi.copy(e.ray).applyMatrix4(Gl),!(i.boundingBox!==null&&yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,yi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,E=y;S<E;S+=3){const w=o.getX(S),T=o.getX(S+1),C=o.getX(S+2);r=Os(this,p,e,i,l,u,h,w,T,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=o.getX(m),y=o.getX(m+1),S=o.getX(m+2);r=Os(this,a,e,i,l,u,h,x,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let S=x,E=y;S<E;S+=3){const w=S,T=S+1,C=S+2;r=Os(this,p,e,i,l,u,h,w,T,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const x=m,y=m+1,S=m+2;r=Os(this,a,e,i,l,u,h,x,y,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Mp(n,e,t,i,r,s,a,o){let c;if(e.side===It?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===pi,o),c===null)return null;Us.copy(o),Us.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Us);return l<t.near||l>t.far?null:{distance:l,point:Us.clone(),object:n}}function Os(n,e,t,i,r,s,a,o,c,l){n.getVertexPosition(o,Ps),n.getVertexPosition(c,Ls),n.getVertexPosition(l,Is);const u=Mp(n,e,t,i,Ps,Ls,Is,Wl);if(u){const h=new N;hn.getBarycoord(Wl,Ps,Ls,Is,h),r&&(u.uv=hn.getInterpolatedAttribute(r,o,c,l,h,new Pe)),s&&(u.uv1=hn.getInterpolatedAttribute(s,o,c,l,h,new Pe)),a&&(u.normal=hn.getInterpolatedAttribute(a,o,c,l,h,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};hn.getNormal(Ps,Ls,Is,d.normal),u.face=d,u.barycoord=h}return u}class In extends Ht{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(u,3)),this.setAttribute("uv",new ft(h,2));function g(_,m,p,x,y,S,E,w,T,C,L){const v=S/T,b=E/C,U=S/2,H=E/2,j=w/2,V=T+1,P=C+1;let z=0,I=0;const J=new N;for(let $=0;$<P;$++){const ie=$*b-H;for(let xe=0;xe<V;xe++){const Ie=xe*v-U;J[_]=Ie*x,J[m]=ie*y,J[p]=j,l.push(J.x,J.y,J.z),J[_]=0,J[m]=0,J[p]=w>0?1:-1,u.push(J.x,J.y,J.z),h.push(xe/T),h.push(1-$/C),z+=1}}for(let $=0;$<C;$++)for(let ie=0;ie<T;ie++){const xe=d+ie+V*$,Ie=d+ie+V*($+1),X=d+(ie+1)+V*($+1),Q=d+(ie+1)+V*$;c.push(xe,Ie,Q),c.push(Ie,X,Q),I+=6}o.addGroup(f,I,L),f+=I,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new In(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Tr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=Tr(n[t]);for(const r in i)e[r]=i[r]}return e}function Tp(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function td(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const di={clone:Tr,merge:Vt};var Ap=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _t extends Ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ap,this.fragmentShader=Rp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Tr(e.uniforms),this.uniformsGroups=Tp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class nd extends St{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=qn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new N,jl=new Pe,ql=new Pe;class ln extends nd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,jl,ql),t.subVectors(ql,jl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Jr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $i=-90,Qi=1;class Cp extends St{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new ln($i,Qi,e,t);r.layers=this.layers,this.add(r);const s=new ln($i,Qi,e,t);s.layers=this.layers,this.add(s);const a=new ln($i,Qi,e,t);a.layers=this.layers,this.add(a);const o=new ln($i,Qi,e,t);o.layers=this.layers,this.add(o);const c=new ln($i,Qi,e,t);c.layers=this.layers,this.add(c);const l=new ln($i,Qi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class id extends Dt{constructor(e,t,i,r,s,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Pp extends tn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new id(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:un}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new In(5,5,5),s=new _t({name:"CubemapFromEquirect",uniforms:Tr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:It,blending:Kn});s.uniforms.tEquirect.value=t;const a=new fe(r,s),o=t.minFilter;return t.minFilter===Li&&(t.minFilter=un),new Cp(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const vo=new N,Lp=new N,Ip=new Xe;class Mi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=vo.subVectors(i,t).cross(Lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(vo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ip.getNormalMatrix(e),r=this.coplanarPoint(vo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xi=new Pr,Ns=new N;class Yc{constructor(e=new Mi,t=new Mi,i=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=qn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],l=r[4],u=r[5],h=r[6],d=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],x=r[13],y=r[14],S=r[15];if(i[0].setComponents(c-s,d-l,m-f,S-p).normalize(),i[1].setComponents(c+s,d+l,m+f,S+p).normalize(),i[2].setComponents(c+a,d+u,m+g,S+x).normalize(),i[3].setComponents(c-a,d-u,m-g,S-x).normalize(),i[4].setComponents(c-o,d-h,m-_,S-y).normalize(),t===qn)i[5].setComponents(c+o,d+h,m+_,S+y).normalize();else if(t===ga)i[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(e){return xi.center.set(0,0,0),xi.radius=.7071067811865476,xi.applyMatrix4(e.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ns.x=r.normal.x>0?e.max.x:e.min.x,Ns.y=r.normal.y>0?e.max.y:e.min.y,Ns.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ns)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rd(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Dp(n){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(n.bindBuffer(l,o),h.length===0)n.bufferSubData(l,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],_=h[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const _=h[f];n.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}class $n extends Ht{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,d=t/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const x=p*d-a;for(let y=0;y<l;y++){const S=y*h-s;g.push(S,-x,0),_.push(0,0,1),m.push(y/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let x=0;x<o;x++){const y=x+l*p,S=x+l*(p+1),E=x+1+l*(p+1),w=x+1+l*p;f.push(y,S,w),f.push(S,E,w)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $n(e.width,e.height,e.widthSegments,e.heightSegments)}}var Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Op=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xp=`#ifdef USE_IRIDESCENCE
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
#endif`,Kp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,im=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,om=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,um="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,fm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pm=`#ifdef USE_ENVMAP
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
#endif`,mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gm=`#ifdef USE_ENVMAP
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
#endif`,vm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ym=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wm=`#ifdef USE_GRADIENTMAP
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
}`,bm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,Tm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Im=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,Dm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Um=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Om=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,km=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$m=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ng=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ig=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ag=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,og=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,lg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ug=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_g=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bg=`#ifdef USE_SKINNING
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
#endif`,Sg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Eg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ag=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Rg=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ig=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ug=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Og=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ng=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,zg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Hg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Gg=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Kg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Jg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,$g=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ev=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,nv=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,av=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ov=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,cv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,uv=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,dv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Up,alphahash_pars_fragment:Op,alphamap_fragment:Np,alphamap_pars_fragment:kp,alphatest_fragment:Fp,alphatest_pars_fragment:Bp,aomap_fragment:zp,aomap_pars_fragment:Hp,batching_pars_vertex:Gp,batching_vertex:Vp,begin_vertex:Wp,beginnormal_vertex:jp,bsdfs:qp,iridescence_fragment:Xp,bumpmap_pars_fragment:Kp,clipping_planes_fragment:Yp,clipping_planes_pars_fragment:Jp,clipping_planes_pars_vertex:Zp,clipping_planes_vertex:$p,color_fragment:Qp,color_pars_fragment:em,color_pars_vertex:tm,color_vertex:nm,common:im,cube_uv_reflection_fragment:rm,defaultnormal_vertex:sm,displacementmap_pars_vertex:am,displacementmap_vertex:om,emissivemap_fragment:cm,emissivemap_pars_fragment:lm,colorspace_fragment:um,colorspace_pars_fragment:hm,envmap_fragment:dm,envmap_common_pars_fragment:fm,envmap_pars_fragment:pm,envmap_pars_vertex:mm,envmap_physical_pars_fragment:Tm,envmap_vertex:gm,fog_vertex:vm,fog_pars_vertex:_m,fog_fragment:ym,fog_pars_fragment:xm,gradientmap_pars_fragment:wm,lightmap_pars_fragment:bm,lights_lambert_fragment:Sm,lights_lambert_pars_fragment:Em,lights_pars_begin:Mm,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Lm,lights_physical_pars_fragment:Im,lights_fragment_begin:Dm,lights_fragment_maps:Um,lights_fragment_end:Om,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:km,logdepthbuf_pars_vertex:Fm,logdepthbuf_vertex:Bm,map_fragment:zm,map_pars_fragment:Hm,map_particle_fragment:Gm,map_particle_pars_fragment:Vm,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:jm,morphinstance_vertex:qm,morphcolor_vertex:Xm,morphnormal_vertex:Km,morphtarget_pars_vertex:Ym,morphtarget_vertex:Jm,normal_fragment_begin:Zm,normal_fragment_maps:$m,normal_pars_fragment:Qm,normal_pars_vertex:eg,normal_vertex:tg,normalmap_pars_fragment:ng,clearcoat_normal_fragment_begin:ig,clearcoat_normal_fragment_maps:rg,clearcoat_pars_fragment:sg,iridescence_pars_fragment:ag,opaque_fragment:og,packing:cg,premultiplied_alpha_fragment:lg,project_vertex:ug,dithering_fragment:hg,dithering_pars_fragment:dg,roughnessmap_fragment:fg,roughnessmap_pars_fragment:pg,shadowmap_pars_fragment:mg,shadowmap_pars_vertex:gg,shadowmap_vertex:vg,shadowmask_pars_fragment:_g,skinbase_vertex:yg,skinning_pars_vertex:xg,skinning_vertex:wg,skinnormal_vertex:bg,specularmap_fragment:Sg,specularmap_pars_fragment:Eg,tonemapping_fragment:Mg,tonemapping_pars_fragment:Tg,transmission_fragment:Ag,transmission_pars_fragment:Rg,uv_pars_fragment:Cg,uv_pars_vertex:Pg,uv_vertex:Lg,worldpos_vertex:Ig,background_vert:Dg,background_frag:Ug,backgroundCube_vert:Og,backgroundCube_frag:Ng,cube_vert:kg,cube_frag:Fg,depth_vert:Bg,depth_frag:zg,distanceRGBA_vert:Hg,distanceRGBA_frag:Gg,equirect_vert:Vg,equirect_frag:Wg,linedashed_vert:jg,linedashed_frag:qg,meshbasic_vert:Xg,meshbasic_frag:Kg,meshlambert_vert:Yg,meshlambert_frag:Jg,meshmatcap_vert:Zg,meshmatcap_frag:$g,meshnormal_vert:Qg,meshnormal_frag:ev,meshphong_vert:tv,meshphong_frag:nv,meshphysical_vert:iv,meshphysical_frag:rv,meshtoon_vert:sv,meshtoon_frag:av,points_vert:ov,points_frag:cv,shadow_vert:lv,shadow_frag:uv,sprite_vert:hv,sprite_frag:dv},he={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},Cn={basic:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ue(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Vt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Vt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Vt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ue(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Vt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Vt([he.points,he.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Vt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Vt([he.common,he.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Vt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Vt([he.sprite,he.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Vt([he.common,he.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Vt([he.lights,he.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Cn.physical={uniforms:Vt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const ks={r:0,b:0,g:0},wi=new Zn,fv=new ct;function pv(n,e,t,i,r,s,a){const o=new Ue(0);let c=s===!0?0:1,l,u,h=null,d=0,f=null;function g(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function _(x){let y=!1;const S=g(x);S===null?p(o,c):S&&S.isColor&&(p(S,1),y=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(x,y){const S=g(y);S&&(S.isCubeTexture||S.mapping===Ia)?(u===void 0&&(u=new fe(new In(1,1,1),new _t({name:"BackgroundCubeMaterial",uniforms:Tr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:It,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),wi.copy(y.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fv.makeRotationFromEuler(wi)),u.material.toneMapped=et.getTransfer(S.colorSpace)!==ut,(h!==S||d!==S.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new fe(new $n(2,2),new _t({name:"BackgroundMaterial",uniforms:Tr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=et.getTransfer(S.colorSpace)!==ut,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=n.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,y){x.getRGB(ks,td(n)),i.buffers.color.setClear(ks.r,ks.g,ks.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,p(o,c)},render:_,addToRenderList:m}}function mv(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(v,b,U,H,j){let V=!1;const P=h(H,U,b);s!==P&&(s=P,l(s.object)),V=f(v,H,U,j),V&&g(v,H,U,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,S(v,b,U,H),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return n.createVertexArray()}function l(v){return n.bindVertexArray(v)}function u(v){return n.deleteVertexArray(v)}function h(v,b,U){const H=U.wireframe===!0;let j=i[v.id];j===void 0&&(j={},i[v.id]=j);let V=j[b.id];V===void 0&&(V={},j[b.id]=V);let P=V[H];return P===void 0&&(P=d(c()),V[H]=P),P}function d(v){const b=[],U=[],H=[];for(let j=0;j<t;j++)b[j]=0,U[j]=0,H[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:U,attributeDivisors:H,object:v,attributes:{},index:null}}function f(v,b,U,H){const j=s.attributes,V=b.attributes;let P=0;const z=U.getAttributes();for(const I in z)if(z[I].location>=0){const $=j[I];let ie=V[I];if(ie===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&(ie=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&(ie=v.instanceColor)),$===void 0||$.attribute!==ie||ie&&$.data!==ie.data)return!0;P++}return s.attributesNum!==P||s.index!==H}function g(v,b,U,H){const j={},V=b.attributes;let P=0;const z=U.getAttributes();for(const I in z)if(z[I].location>=0){let $=V[I];$===void 0&&(I==="instanceMatrix"&&v.instanceMatrix&&($=v.instanceMatrix),I==="instanceColor"&&v.instanceColor&&($=v.instanceColor));const ie={};ie.attribute=$,$&&$.data&&(ie.data=$.data),j[I]=ie,P++}s.attributes=j,s.attributesNum=P,s.index=H}function _(){const v=s.newAttributes;for(let b=0,U=v.length;b<U;b++)v[b]=0}function m(v){p(v,0)}function p(v,b){const U=s.newAttributes,H=s.enabledAttributes,j=s.attributeDivisors;U[v]=1,H[v]===0&&(n.enableVertexAttribArray(v),H[v]=1),j[v]!==b&&(n.vertexAttribDivisor(v,b),j[v]=b)}function x(){const v=s.newAttributes,b=s.enabledAttributes;for(let U=0,H=b.length;U<H;U++)b[U]!==v[U]&&(n.disableVertexAttribArray(U),b[U]=0)}function y(v,b,U,H,j,V,P){P===!0?n.vertexAttribIPointer(v,b,U,j,V):n.vertexAttribPointer(v,b,U,H,j,V)}function S(v,b,U,H){_();const j=H.attributes,V=U.getAttributes(),P=b.defaultAttributeValues;for(const z in V){const I=V[z];if(I.location>=0){let J=j[z];if(J===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const $=J.normalized,ie=J.itemSize,xe=e.get(J);if(xe===void 0)continue;const Ie=xe.buffer,X=xe.type,Q=xe.bytesPerElement,le=X===n.INT||X===n.UNSIGNED_INT||J.gpuType===zc;if(J.isInterleavedBufferAttribute){const pe=J.data,ke=pe.stride,Oe=J.offset;if(pe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<I.locationSize;Ge++)p(I.location+Ge,pe.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ge=0;Ge<I.locationSize;Ge++)m(I.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let Ge=0;Ge<I.locationSize;Ge++)y(I.location+Ge,ie/I.locationSize,X,$,ke*Q,(Oe+ie/I.locationSize*Ge)*Q,le)}else{if(J.isInstancedBufferAttribute){for(let pe=0;pe<I.locationSize;pe++)p(I.location+pe,J.meshPerAttribute);v.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let pe=0;pe<I.locationSize;pe++)m(I.location+pe);n.bindBuffer(n.ARRAY_BUFFER,Ie);for(let pe=0;pe<I.locationSize;pe++)y(I.location+pe,ie/I.locationSize,X,$,ie*Q,ie/I.locationSize*pe*Q,le)}}else if(P!==void 0){const $=P[z];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(I.location,$);break;case 3:n.vertexAttrib3fv(I.location,$);break;case 4:n.vertexAttrib4fv(I.location,$);break;default:n.vertexAttrib1fv(I.location,$)}}}}x()}function E(){C();for(const v in i){const b=i[v];for(const U in b){const H=b[U];for(const j in H)u(H[j].object),delete H[j];delete b[U]}delete i[v]}}function w(v){if(i[v.id]===void 0)return;const b=i[v.id];for(const U in b){const H=b[U];for(const j in H)u(H[j].object),delete H[j];delete b[U]}delete i[v.id]}function T(v){for(const b in i){const U=i[b];if(U[v.id]===void 0)continue;const H=U[v.id];for(const j in H)u(H[j].object),delete H[j];delete U[v.id]}}function C(){L(),a=!0,s!==r&&(s=r,l(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:C,resetDefaultState:L,dispose:E,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:x}}function gv(n,e,t){let i;function r(l){i=l}function s(l,u){n.drawArrays(i,l,u),t.update(u,i,1)}function a(l,u,h){h!==0&&(n.drawArraysInstanced(i,l,u,h),t.update(u,i,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,u,0,h);let f=0;for(let g=0;g<h;g++)f+=u[g];t.update(f,i,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],u[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,u,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_];for(let _=0;_<d.length;_++)t.update(g,i,d[_])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function vv(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Sn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Jn&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ln&&!C)}function c(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),x=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:S,vertexTextures:E,maxSamples:w}}function _v(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Mi,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=n.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const x=s?0:i,y=x*4;let S=p.clippingState||null;c.value=S,S=u(g,d,y,f);for(let E=0;E!==y;++E)S[E]=t[E];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,S=f;y!==_;++y,S+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function yv(n){let e=new WeakMap;function t(a,o){return o===Ko?a.mapping=br:o===Yo&&(a.mapping=Sr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ko||o===Yo)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Pp(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Jc extends nd{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pr=4,Xl=[.125,.215,.35,.446,.526,.582],Ci=20,_o=new Jc,Kl=new Ue;let yo=null,xo=0,wo=0,bo=!1;const Ti=(1+Math.sqrt(5))/2,er=1/Ti,Yl=[new N(-Ti,er,0),new N(Ti,er,0),new N(-er,0,Ti),new N(er,0,Ti),new N(0,Ti,-er),new N(0,Ti,er),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Jl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){yo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ql(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$l(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yo,xo,wo),this._renderer.xr.enabled=bo,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yo=this._renderer.getRenderTarget(),xo=this._renderer.getActiveCubeFace(),wo=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:un,minFilter:un,generateMipmaps:!1,type:Mn,format:Sn,colorSpace:gi,depthBuffer:!1},r=Zl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xv(s)),this._blurMaterial=wv(s,e,t)}return r}_compileMaterial(e){const t=new fe(this._lodPlanes[0],e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,i,r){const o=new ln(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Kl),u.toneMapping=hi,u.autoClear=!1;const f=new ot({name:"PMREM.Background",side:It,depthWrite:!1,depthTest:!1}),g=new fe(new In,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Kl),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):x===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));const y=this._cubeSize;Fs(r,x*y,p>2?y:0,y,y),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===br||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ql()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$l());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new fe(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Fs(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,_o)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Yl[(r-s-1)%Yl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new fe(this._lodPlanes[r],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ci;m>Ci&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ci}`);const p=[];let x=0;for(let T=0;T<Ci;++T){const C=T/_,L=Math.exp(-C*C/2);p.push(L),T===0?x+=L:T<m&&(x+=2*L)}for(let T=0;T<p.length;T++)p[T]=p[T]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const S=this._sizeLods[r],E=3*S*(r>y-pr?r-y+pr:0),w=4*(this._cubeSize-S);Fs(t,E,w,3*S,2*S),c.setRenderTarget(t),c.render(h,_o)}}function xv(n){const e=[],t=[],i=[];let r=n;const s=n-pr+1+Xl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>n-pr?c=Xl[a-n+pr-1]:a===0&&(c=0),i.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,g=6,_=3,m=2,p=1,x=new Float32Array(_*g*f),y=new Float32Array(m*g*f),S=new Float32Array(p*g*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,C=w>2?0:-1,L=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];x.set(L,_*g*w),y.set(d,m*g*w);const v=[w,w,w,w,w,w];S.set(v,p*g*w)}const E=new Ht;E.setAttribute("position",new nn(x,_)),E.setAttribute("uv",new nn(y,m)),E.setAttribute("faceIndex",new nn(S,p)),e.push(E),r>pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Zl(n,e,t){const i=new tn(n,e,t);return i.texture.mapping=Ia,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function wv(n,e,t){const i=new Float32Array(Ci),r=new N(0,1,0);return new _t({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function $l(){return new _t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Ql(){return new _t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Kn,depthTest:!1,depthWrite:!1})}function Zc(){return`

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
	`}function bv(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ko||c===Yo,u=c===br||c===Sr;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Jl(n)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Jl(n)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Sv(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ua("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ev(n,e,t,i){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],n.ARRAY_BUFFER);const f=h.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],n.ARRAY_BUFFER)}}function l(h){const d=[],f=h.index,g=h.attributes.position;let _=0;if(f!==null){const x=f.array;_=f.version;for(let y=0,S=x.length;y<S;y+=3){const E=x[y+0],w=x[y+1],T=x[y+2];d.push(E,w,w,T,T,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,S=x.length/3-1;y<S;y+=3){const E=y+0,w=y+1,T=y+2;d.push(E,w,w,T,T,E)}}else return;const m=new(Kh(d)?ed:Qh)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Mv(n,e,t){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,s,d*a),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,d*a,g),t.update(f,i,g))}function u(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function h(d,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,d,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=f[x];for(let x=0;x<_.length;x++)t.update(p,i,_[x])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tv(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Av(n,e,t){const i=new WeakMap,r=new vt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let v=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),_===!0&&(S=2),m===!0&&(S=3);let E=o.attributes.position.count*S,w=1;E>e.maxTextureSize&&(w=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const T=new Float32Array(E*w*4*h),C=new Jh(T,E,w,h);C.type=Ln,C.needsUpdate=!0;const L=S*4;for(let b=0;b<h;b++){const U=p[b],H=x[b],j=y[b],V=E*w*4*b;for(let P=0;P<U.count;P++){const z=P*L;g===!0&&(r.fromBufferAttribute(U,P),T[V+z+0]=r.x,T[V+z+1]=r.y,T[V+z+2]=r.z,T[V+z+3]=0),_===!0&&(r.fromBufferAttribute(H,P),T[V+z+4]=r.x,T[V+z+5]=r.y,T[V+z+6]=r.z,T[V+z+7]=0),m===!0&&(r.fromBufferAttribute(j,P),T[V+z+8]=r.x,T[V+z+9]=r.y,T[V+z+10]=r.z,T[V+z+11]=j.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new Pe(E,w)},i.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:s}}function Rv(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,h=e.get(c,u);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}class sd extends Dt{constructor(e,t,i,r,s,a,o,c,l,u=vr){if(u!==vr&&u!==Mr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===vr&&(i=Ui),i===void 0&&u===Mr&&(i=Er),super(null,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Lt,this.minFilter=c!==void 0?c:Lt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ad=new Dt,eu=new sd(1,1),od=new Jh,cd=new mp,ld=new id,tu=[],nu=[],iu=new Float32Array(16),ru=new Float32Array(9),su=new Float32Array(4);function Lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tu[r];if(s===void 0&&(s=new Float32Array(r),tu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Mt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Tt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Oa(n,e){let t=nu[e];t===void 0&&(t=new Int32Array(e),nu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Cv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Pv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2fv(this.addr,e),Tt(t,e)}}function Lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Mt(t,e))return;n.uniform3fv(this.addr,e),Tt(t,e)}}function Iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4fv(this.addr,e),Tt(t,e)}}function Dv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Mt(t,i))return;su.set(i),n.uniformMatrix2fv(this.addr,!1,su),Tt(t,i)}}function Uv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Mt(t,i))return;ru.set(i),n.uniformMatrix3fv(this.addr,!1,ru),Tt(t,i)}}function Ov(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Mt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Mt(t,i))return;iu.set(i),n.uniformMatrix4fv(this.addr,!1,iu),Tt(t,i)}}function Nv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function kv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2iv(this.addr,e),Tt(t,e)}}function Fv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3iv(this.addr,e),Tt(t,e)}}function Bv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4iv(this.addr,e),Tt(t,e)}}function zv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Hv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Mt(t,e))return;n.uniform2uiv(this.addr,e),Tt(t,e)}}function Gv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Mt(t,e))return;n.uniform3uiv(this.addr,e),Tt(t,e)}}function Vv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Mt(t,e))return;n.uniform4uiv(this.addr,e),Tt(t,e)}}function Wv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(eu.compareFunction=Xh,s=eu):s=ad,t.setTexture2D(e||s,r)}function jv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cd,r)}function qv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ld,r)}function Xv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||od,r)}function Kv(n){switch(n){case 5126:return Cv;case 35664:return Pv;case 35665:return Lv;case 35666:return Iv;case 35674:return Dv;case 35675:return Uv;case 35676:return Ov;case 5124:case 35670:return Nv;case 35667:case 35671:return kv;case 35668:case 35672:return Fv;case 35669:case 35673:return Bv;case 5125:return zv;case 36294:return Hv;case 36295:return Gv;case 36296:return Vv;case 35678:case 36198:case 36298:case 36306:case 35682:return Wv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return qv;case 36289:case 36303:case 36311:case 36292:return Xv}}function Yv(n,e){n.uniform1fv(this.addr,e)}function Jv(n,e){const t=Lr(e,this.size,2);n.uniform2fv(this.addr,t)}function Zv(n,e){const t=Lr(e,this.size,3);n.uniform3fv(this.addr,t)}function $v(n,e){const t=Lr(e,this.size,4);n.uniform4fv(this.addr,t)}function Qv(n,e){const t=Lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function e0(n,e){const t=Lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function t0(n,e){const t=Lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function n0(n,e){n.uniform1iv(this.addr,e)}function i0(n,e){n.uniform2iv(this.addr,e)}function r0(n,e){n.uniform3iv(this.addr,e)}function s0(n,e){n.uniform4iv(this.addr,e)}function a0(n,e){n.uniform1uiv(this.addr,e)}function o0(n,e){n.uniform2uiv(this.addr,e)}function c0(n,e){n.uniform3uiv(this.addr,e)}function l0(n,e){n.uniform4uiv(this.addr,e)}function u0(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ad,s[a])}function h0(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||cd,s[a])}function d0(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ld,s[a])}function f0(n,e,t){const i=this.cache,r=e.length,s=Oa(t,r);Mt(i,s)||(n.uniform1iv(this.addr,s),Tt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||od,s[a])}function p0(n){switch(n){case 5126:return Yv;case 35664:return Jv;case 35665:return Zv;case 35666:return $v;case 35674:return Qv;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return r0;case 35669:case 35673:return s0;case 5125:return a0;case 36294:return o0;case 36295:return c0;case 36296:return l0;case 35678:case 36198:case 36298:case 36306:case 35682:return u0;case 35679:case 36299:case 36307:return h0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}class m0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Kv(t.type)}}class g0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=p0(t.type)}}class v0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const So=/(\w+)(\])?(\[|\.)?/g;function au(n,e){n.seq.push(e),n.map[e.id]=e}function _0(n,e,t){const i=n.name,r=i.length;for(So.lastIndex=0;;){const s=So.exec(i),a=So.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){au(t,l===void 0?new m0(o,n,e):new g0(o,n,e));break}else{let h=t.map[o];h===void 0&&(h=new v0(o),au(t,h)),t=h}}}class ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);_0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function ou(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const y0=37297;let x0=0;function w0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function b0(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===ma&&t===pa?i="LinearDisplayP3ToLinearSRGB":e===pa&&t===ma&&(i="LinearSRGBToLinearDisplayP3"),n){case gi:case Ua:return[i,"LinearTransferOETF"];case Ot:case qc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function cu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+w0(n.getShaderSource(e),a)}else return r}function S0(n,e){const t=b0(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function E0(n,e){let t;switch(e){case Lh:t="Linear";break;case Ih:t="Reinhard";break;case Dh:t="Cineon";break;case Uh:t="ACESFilmic";break;case Oh:t="AgX";break;case ds:t="Neutral";break;case If:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bs=new N;function M0(){et.getLuminanceCoefficients(Bs);const n=Bs.x.toFixed(4),e=Bs.y.toFixed(4),t=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function A0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function R0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function qr(n){return n!==""}function lu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function uu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const C0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(n){return n.replace(C0,L0)}const P0=new Map;function L0(n,e){let t=qe[e];if(t===void 0){const i=P0.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mc(t)}const I0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(n){return n.replace(I0,D0)}function D0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function du(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function U0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ch?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===La?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gn&&(e="SHADOWMAP_TYPE_VSM"),e}function O0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Sr:e="ENVMAP_TYPE_CUBE";break;case Ia:e="ENVMAP_TYPE_CUBE_UV";break}return e}function N0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function k0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ph:e="ENVMAP_BLENDING_MULTIPLY";break;case Pf:e="ENVMAP_BLENDING_MIX";break;case Lf:e="ENVMAP_BLENDING_ADD";break}return e}function F0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function B0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=U0(t),l=O0(t),u=N0(t),h=k0(t),d=F0(t),f=T0(t),g=A0(s),_=r.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(qr).join(`
`),p.length>0&&(p+=`
`)):(m=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),p=[du(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hi?"#define TONE_MAPPING":"",t.toneMapping!==hi?qe.tonemapping_pars_fragment:"",t.toneMapping!==hi?E0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,S0("linearToOutputTexel",t.outputColorSpace),M0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qr).join(`
`)),a=Mc(a),a=lu(a,t),a=uu(a,t),o=Mc(o),o=lu(o,t),o=uu(o,t),a=hu(a),o=hu(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Rl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+a,S=x+p+o,E=ou(r,r.VERTEX_SHADER,y),w=ou(r,r.FRAGMENT_SHADER,S);r.attachShader(_,E),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(b){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),H=r.getShaderInfoLog(E).trim(),j=r.getShaderInfoLog(w).trim();let V=!0,P=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,E,w);else{const z=cu(r,E,"vertex"),I=cu(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+U+`
`+z+`
`+I)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(H===""||j==="")&&(P=!1);P&&(b.diagnostics={runnable:V,programLog:U,vertexShader:{log:H,prefix:m},fragmentShader:{log:j,prefix:p}})}r.deleteShader(E),r.deleteShader(w),C=new ha(r,_),L=R0(r,_)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let L;this.getAttributes=function(){return L===void 0&&T(this),L};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(_,y0)),v},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=x0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=w,this}let z0=0;class H0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new G0(e),t.set(e,i)),i}}class G0{constructor(e){this.id=z0++,this.code=e,this.usedTimes=0}}function V0(n,e,t,i,r,s,a){const o=new Kc,c=new H0,l=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,f=r.vertexTextures;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function p(v,b,U,H,j){const V=H.fog,P=j.geometry,z=v.isMeshStandardMaterial?H.environment:null,I=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),J=I&&I.mapping===Ia?I.image.height:null,$=_[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const ie=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,xe=ie!==void 0?ie.length:0;let Ie=0;P.morphAttributes.position!==void 0&&(Ie=1),P.morphAttributes.normal!==void 0&&(Ie=2),P.morphAttributes.color!==void 0&&(Ie=3);let X,Q,le,pe;if($){const We=Cn[$];X=We.vertexShader,Q=We.fragmentShader}else X=v.vertexShader,Q=v.fragmentShader,c.update(v),le=c.getVertexShaderID(v),pe=c.getFragmentShaderID(v);const ke=n.getRenderTarget(),Oe=j.isInstancedMesh===!0,Ge=j.isBatchedMesh===!0,$e=!!v.map,Ke=!!v.matcap,D=!!I,Et=!!v.aoMap,Ye=!!v.lightMap,Je=!!v.bumpMap,ne=!!v.normalMap,re=!!v.displacementMap,we=!!v.emissiveMap,R=!!v.metalnessMap,M=!!v.roughnessMap,B=v.anisotropy>0,Y=v.clearcoat>0,te=v.dispersion>0,Z=v.iridescence>0,Me=v.sheen>0,ae=v.transmission>0,de=B&&!!v.anisotropyMap,je=Y&&!!v.clearcoatMap,se=Y&&!!v.clearcoatNormalMap,be=Y&&!!v.clearcoatRoughnessMap,Fe=Z&&!!v.iridescenceMap,Be=Z&&!!v.iridescenceThicknessMap,ye=Me&&!!v.sheenColorMap,Ze=Me&&!!v.sheenRoughnessMap,Ve=!!v.specularMap,it=!!v.specularColorMap,O=!!v.specularIntensityMap,me=ae&&!!v.transmissionMap,K=ae&&!!v.thicknessMap,ee=!!v.gradientMap,ge=!!v.alphaMap,q=v.alphaTest>0,oe=!!v.alphaHash,Re=!!v.extensions;let Se=hi;v.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(Se=n.toneMapping);const ve={shaderID:$,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:Q,defines:v.defines,customVertexShaderID:le,customFragmentShaderID:pe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&j._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&j.instanceColor!==null,instancingMorph:Oe&&j.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ke===null?n.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:gi,alphaToCoverage:!!v.alphaToCoverage,map:$e,matcap:Ke,envMap:D,envMapMode:D&&I.mapping,envMapCubeUVHeight:J,aoMap:Et,lightMap:Ye,bumpMap:Je,normalMap:ne,displacementMap:f&&re,emissiveMap:we,normalMapObjectSpace:ne&&v.normalMapType===Nf,normalMapTangentSpace:ne&&v.normalMapType===qh,metalnessMap:R,roughnessMap:M,anisotropy:B,anisotropyMap:de,clearcoat:Y,clearcoatMap:je,clearcoatNormalMap:se,clearcoatRoughnessMap:be,dispersion:te,iridescence:Z,iridescenceMap:Fe,iridescenceThicknessMap:Be,sheen:Me,sheenColorMap:ye,sheenRoughnessMap:Ze,specularMap:Ve,specularColorMap:it,specularIntensityMap:O,transmission:ae,transmissionMap:me,thicknessMap:K,gradientMap:ee,opaque:v.transparent===!1&&v.blending===gr&&v.alphaToCoverage===!1,alphaMap:ge,alphaTest:q,alphaHash:oe,combine:v.combine,mapUv:$e&&m(v.map.channel),aoMapUv:Et&&m(v.aoMap.channel),lightMapUv:Ye&&m(v.lightMap.channel),bumpMapUv:Je&&m(v.bumpMap.channel),normalMapUv:ne&&m(v.normalMap.channel),displacementMapUv:re&&m(v.displacementMap.channel),emissiveMapUv:we&&m(v.emissiveMap.channel),metalnessMapUv:R&&m(v.metalnessMap.channel),roughnessMapUv:M&&m(v.roughnessMap.channel),anisotropyMapUv:de&&m(v.anisotropyMap.channel),clearcoatMapUv:je&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Be&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&m(v.sheenRoughnessMap.channel),specularMapUv:Ve&&m(v.specularMap.channel),specularColorMapUv:it&&m(v.specularColorMap.channel),specularIntensityMapUv:O&&m(v.specularIntensityMap.channel),transmissionMapUv:me&&m(v.transmissionMap.channel),thicknessMapUv:K&&m(v.thicknessMap.channel),alphaMapUv:ge&&m(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(ne||B),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!P.attributes.uv&&($e||ge),fog:!!V,useFog:v.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:j.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:Ie,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:Se,decodeVideoTexture:$e&&v.map.isVideoTexture===!0&&et.getTransfer(v.map.colorSpace)===ut,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===$t,flipSided:v.side===It,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Re&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&v.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ve.vertexUv1s=l.has(1),ve.vertexUv2s=l.has(2),ve.vertexUv3s=l.has(3),l.clear(),ve}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)b.push(U),b.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(y(b,v),S(b,v),b.push(n.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function S(v,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reverseDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.alphaToCoverage&&o.enable(20),v.push(o.mask)}function E(v){const b=_[v.type];let U;if(b){const H=Cn[b];U=di.clone(H.uniforms)}else U=v.uniforms;return U}function w(v,b){let U;for(let H=0,j=u.length;H<j;H++){const V=u[H];if(V.cacheKey===b){U=V,++U.usedTimes;break}}return U===void 0&&(U=new B0(n,b,v,s),u.push(U)),U}function T(v){if(--v.usedTimes===0){const b=u.indexOf(v);u[b]=u[u.length-1],u.pop(),v.destroy()}}function C(v){c.remove(v)}function L(){c.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:E,acquireProgram:w,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:L}}function W0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,c){n.get(a)[o]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function j0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function fu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(h,d,f,g,_,m){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},n[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function o(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function c(h,d,f,g,_,m){const p=a(h,d,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||j0),i.length>1&&i.sort(d||fu),r.length>1&&r.sort(d||fu)}function u(){for(let h=e,d=n.length;h<d;h++){const f=n[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:u,sort:l}}function q0(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new pu,n.set(i,[a])):r>=s.length?(a=new pu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function X0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Ue};break;case"SpotLight":t={position:new N,direction:new N,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function K0(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Y0=0;function J0(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Z0(n){const e=new X0,t=K0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new N);const r=new N,s=new ct,a=new ct;function o(l){let u=0,h=0,d=0;for(let L=0;L<9;L++)i.probe[L].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,x=0,y=0,S=0,E=0,w=0,T=0;l.sort(J0);for(let L=0,v=l.length;L<v;L++){const b=l[L],U=b.color,H=b.intensity,j=b.distance,V=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)u+=U.r*H,h+=U.g*H,d+=U.b*H;else if(b.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(b.sh.coefficients[P],H);T++}else if(b.isDirectionalLight){const P=e.get(b);if(P.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const z=b.shadow,I=t.get(b);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,i.directionalShadow[f]=I,i.directionalShadowMap[f]=V,i.directionalShadowMatrix[f]=b.shadow.matrix,x++}i.directional[f]=P,f++}else if(b.isSpotLight){const P=e.get(b);P.position.setFromMatrixPosition(b.matrixWorld),P.color.copy(U).multiplyScalar(H),P.distance=j,P.coneCos=Math.cos(b.angle),P.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),P.decay=b.decay,i.spot[_]=P;const z=b.shadow;if(b.map&&(i.spotLightMap[E]=b.map,E++,z.updateMatrices(b),b.castShadow&&w++),i.spotLightMatrix[_]=z.matrix,b.castShadow){const I=t.get(b);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,i.spotShadow[_]=I,i.spotShadowMap[_]=V,S++}_++}else if(b.isRectAreaLight){const P=e.get(b);P.color.copy(U).multiplyScalar(H),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),i.rectArea[m]=P,m++}else if(b.isPointLight){const P=e.get(b);if(P.color.copy(b.color).multiplyScalar(b.intensity),P.distance=b.distance,P.decay=b.decay,b.castShadow){const z=b.shadow,I=t.get(b);I.shadowIntensity=z.intensity,I.shadowBias=z.bias,I.shadowNormalBias=z.normalBias,I.shadowRadius=z.radius,I.shadowMapSize=z.mapSize,I.shadowCameraNear=z.camera.near,I.shadowCameraFar=z.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=V,i.pointShadowMatrix[g]=b.shadow.matrix,y++}i.point[g]=P,g++}else if(b.isHemisphereLight){const P=e.get(b);P.skyColor.copy(b.color).multiplyScalar(H),P.groundColor.copy(b.groundColor).multiplyScalar(H),i.hemi[p]=P,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==S||C.numSpotMaps!==E||C.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=S+E-w,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=S,C.numSpotMaps=E,C.numLightProbes=T,i.version=Y0++)}function c(l,u){let h=0,d=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,x=l.length;p<x;p++){const y=l[p];if(y.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(y.isSpotLight){const S=i.spot[f];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(m),_++}}}return{setup:o,setupView:c,state:i}}function mu(n){const e=new Z0(n),t=[],i=[];function r(u){l.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function $0(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new mu(n),e.set(r,[o])):s>=a.length?(o=new mu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Q0 extends Ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e_ extends Ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n_=`uniform sampler2D shadow_pass;
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
}`;function i_(n,e,t){let i=new Yc;const r=new Pe,s=new Pe,a=new vt,o=new Q0({depthPacking:Of}),c=new e_,l={},u=t.maxTextureSize,h={[pi]:It,[It]:pi,[$t]:$t},d=new _t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:t_,fragmentShader:n_}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fe(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ch;let p=this.type;this.render=function(w,T,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const L=n.getRenderTarget(),v=n.getActiveCubeFace(),b=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Kn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=p!==Gn&&this.type===Gn,j=p===Gn&&this.type!==Gn;for(let V=0,P=w.length;V<P;V++){const z=w[V],I=z.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const J=I.getFrameExtents();if(r.multiply(J),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,I.mapSize.y=s.y)),I.map===null||H===!0||j===!0){const ie=this.type!==Gn?{minFilter:Lt,magFilter:Lt}:{};I.map!==null&&I.map.dispose(),I.map=new tn(r.x,r.y,ie),I.map.texture.name=z.name+".shadowMap",I.camera.updateProjectionMatrix()}n.setRenderTarget(I.map),n.clear();const $=I.getViewportCount();for(let ie=0;ie<$;ie++){const xe=I.getViewport(ie);a.set(s.x*xe.x,s.y*xe.y,s.x*xe.z,s.y*xe.w),U.viewport(a),I.updateMatrices(z,ie),i=I.getFrustum(),S(T,C,I.camera,z,this.type)}I.isPointLightShadow!==!0&&this.type===Gn&&x(I,C),I.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(L,v,b)};function x(w,T){const C=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new tn(r.x,r.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,C,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,C,f,_,null)}function y(w,T,C,L){let v=null;const b=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(b!==void 0)v=b;else if(v=C.isPointLight===!0?c:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=v.uuid,H=T.uuid;let j=l[U];j===void 0&&(j={},l[U]=j);let V=j[H];V===void 0&&(V=v.clone(),j[H]=V,T.addEventListener("dispose",E)),v=V}if(v.visible=T.visible,v.wireframe=T.wireframe,L===Gn?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:h[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=n.properties.get(v);U.light=C}return v}function S(w,T,C,L,v){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Gn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const H=e.update(w),j=w.material;if(Array.isArray(j)){const V=H.groups;for(let P=0,z=V.length;P<z;P++){const I=V[P],J=j[I.materialIndex];if(J&&J.visible){const $=y(w,J,L,v);w.onBeforeShadow(n,w,T,C,H,$,I),n.renderBufferDirect(C,null,H,$,w,I),w.onAfterShadow(n,w,T,C,H,$,I)}}}else if(j.visible){const V=y(w,j,L,v);w.onBeforeShadow(n,w,T,C,H,V,null),n.renderBufferDirect(C,null,H,V,w,null),w.onAfterShadow(n,w,T,C,H,V,null)}}const U=w.children;for(let H=0,j=U.length;H<j;H++)S(U[H],T,C,L,v)}function E(w){w.target.removeEventListener("dispose",E);for(const C in l){const L=l[C],v=w.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const r_={[Ho]:Go,[Vo]:qo,[Wo]:Xo,[wr]:jo,[Go]:Ho,[qo]:Vo,[Xo]:Wo,[jo]:wr};function s_(n){function e(){let O=!1;const me=new vt;let K=null;const ee=new vt(0,0,0,0);return{setMask:function(ge){K!==ge&&!O&&(n.colorMask(ge,ge,ge,ge),K=ge)},setLocked:function(ge){O=ge},setClear:function(ge,q,oe,Re,Se){Se===!0&&(ge*=Re,q*=Re,oe*=Re),me.set(ge,q,oe,Re),ee.equals(me)===!1&&(n.clearColor(ge,q,oe,Re),ee.copy(me))},reset:function(){O=!1,K=null,ee.set(-1,0,0,0)}}}function t(){let O=!1,me=!1,K=null,ee=null,ge=null;return{setReversed:function(q){me=q},setTest:function(q){q?le(n.DEPTH_TEST):pe(n.DEPTH_TEST)},setMask:function(q){K!==q&&!O&&(n.depthMask(q),K=q)},setFunc:function(q){if(me&&(q=r_[q]),ee!==q){switch(q){case Ho:n.depthFunc(n.NEVER);break;case Go:n.depthFunc(n.ALWAYS);break;case Vo:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case Wo:n.depthFunc(n.EQUAL);break;case jo:n.depthFunc(n.GEQUAL);break;case qo:n.depthFunc(n.GREATER);break;case Xo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=q}},setLocked:function(q){O=q},setClear:function(q){ge!==q&&(n.clearDepth(q),ge=q)},reset:function(){O=!1,K=null,ee=null,ge=null}}}function i(){let O=!1,me=null,K=null,ee=null,ge=null,q=null,oe=null,Re=null,Se=null;return{setTest:function(ve){O||(ve?le(n.STENCIL_TEST):pe(n.STENCIL_TEST))},setMask:function(ve){me!==ve&&!O&&(n.stencilMask(ve),me=ve)},setFunc:function(ve,We,De){(K!==ve||ee!==We||ge!==De)&&(n.stencilFunc(ve,We,De),K=ve,ee=We,ge=De)},setOp:function(ve,We,De){(q!==ve||oe!==We||Re!==De)&&(n.stencilOp(ve,We,De),q=ve,oe=We,Re=De)},setLocked:function(ve){O=ve},setClear:function(ve){Se!==ve&&(n.clearStencil(ve),Se=ve)},reset:function(){O=!1,me=null,K=null,ee=null,ge=null,q=null,oe=null,Re=null,Se=null}}}const r=new e,s=new t,a=new i,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,x=null,y=null,S=null,E=null,w=new Ue(0,0,0),T=0,C=!1,L=null,v=null,b=null,U=null,H=null;const j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,P=0;const z=n.getParameter(n.VERSION);z.indexOf("WebGL")!==-1?(P=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=P>=1):z.indexOf("OpenGL ES")!==-1&&(P=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=P>=2);let I=null,J={};const $=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),xe=new vt().fromArray($),Ie=new vt().fromArray(ie);function X(O,me,K,ee){const ge=new Uint8Array(4),q=n.createTexture();n.bindTexture(O,q),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let oe=0;oe<K;oe++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(me,0,n.RGBA,1,1,ee,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(me+oe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return q}const Q={};Q[n.TEXTURE_2D]=X(n.TEXTURE_2D,n.TEXTURE_2D,1),Q[n.TEXTURE_CUBE_MAP]=X(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[n.TEXTURE_2D_ARRAY]=X(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Q[n.TEXTURE_3D]=X(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(n.DEPTH_TEST),s.setFunc(wr),Ye(!1),Je(El),le(n.CULL_FACE),D(Kn);function le(O){l[O]!==!0&&(n.enable(O),l[O]=!0)}function pe(O){l[O]!==!1&&(n.disable(O),l[O]=!1)}function ke(O,me){return u[O]!==me?(n.bindFramebuffer(O,me),u[O]=me,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=me),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=me),!0):!1}function Oe(O,me){let K=d,ee=!1;if(O){K=h.get(me),K===void 0&&(K=[],h.set(me,K));const ge=O.textures;if(K.length!==ge.length||K[0]!==n.COLOR_ATTACHMENT0){for(let q=0,oe=ge.length;q<oe;q++)K[q]=n.COLOR_ATTACHMENT0+q;K.length=ge.length,ee=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,ee=!0);ee&&n.drawBuffers(K)}function Ge(O){return f!==O?(n.useProgram(O),f=O,!0):!1}const $e={[Ri]:n.FUNC_ADD,[ff]:n.FUNC_SUBTRACT,[pf]:n.FUNC_REVERSE_SUBTRACT};$e[mf]=n.MIN,$e[gf]=n.MAX;const Ke={[vf]:n.ZERO,[_f]:n.ONE,[yf]:n.SRC_COLOR,[Bo]:n.SRC_ALPHA,[Mf]:n.SRC_ALPHA_SATURATE,[Sf]:n.DST_COLOR,[wf]:n.DST_ALPHA,[xf]:n.ONE_MINUS_SRC_COLOR,[zo]:n.ONE_MINUS_SRC_ALPHA,[Ef]:n.ONE_MINUS_DST_COLOR,[bf]:n.ONE_MINUS_DST_ALPHA,[Tf]:n.CONSTANT_COLOR,[Af]:n.ONE_MINUS_CONSTANT_COLOR,[Rf]:n.CONSTANT_ALPHA,[Cf]:n.ONE_MINUS_CONSTANT_ALPHA};function D(O,me,K,ee,ge,q,oe,Re,Se,ve){if(O===Kn){g===!0&&(pe(n.BLEND),g=!1);return}if(g===!1&&(le(n.BLEND),g=!0),O!==df){if(O!==_||ve!==C){if((m!==Ri||y!==Ri)&&(n.blendEquation(n.FUNC_ADD),m=Ri,y=Ri),ve)switch(O){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ns:n.blendFunc(n.ONE,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case ns:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Tl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}p=null,x=null,S=null,E=null,w.set(0,0,0),T=0,_=O,C=ve}return}ge=ge||me,q=q||K,oe=oe||ee,(me!==m||ge!==y)&&(n.blendEquationSeparate($e[me],$e[ge]),m=me,y=ge),(K!==p||ee!==x||q!==S||oe!==E)&&(n.blendFuncSeparate(Ke[K],Ke[ee],Ke[q],Ke[oe]),p=K,x=ee,S=q,E=oe),(Re.equals(w)===!1||Se!==T)&&(n.blendColor(Re.r,Re.g,Re.b,Se),w.copy(Re),T=Se),_=O,C=!1}function Et(O,me){O.side===$t?pe(n.CULL_FACE):le(n.CULL_FACE);let K=O.side===It;me&&(K=!K),Ye(K),O.blending===gr&&O.transparent===!1?D(Kn):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),r.setMask(O.colorWrite);const ee=O.stencilWrite;a.setTest(ee),ee&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),re(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?le(n.SAMPLE_ALPHA_TO_COVERAGE):pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ye(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function Je(O){O!==uf?(le(n.CULL_FACE),O!==v&&(O===El?n.cullFace(n.BACK):O===hf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):pe(n.CULL_FACE),v=O}function ne(O){O!==b&&(V&&n.lineWidth(O),b=O)}function re(O,me,K){O?(le(n.POLYGON_OFFSET_FILL),(U!==me||H!==K)&&(n.polygonOffset(me,K),U=me,H=K)):pe(n.POLYGON_OFFSET_FILL)}function we(O){O?le(n.SCISSOR_TEST):pe(n.SCISSOR_TEST)}function R(O){O===void 0&&(O=n.TEXTURE0+j-1),I!==O&&(n.activeTexture(O),I=O)}function M(O,me,K){K===void 0&&(I===null?K=n.TEXTURE0+j-1:K=I);let ee=J[K];ee===void 0&&(ee={type:void 0,texture:void 0},J[K]=ee),(ee.type!==O||ee.texture!==me)&&(I!==K&&(n.activeTexture(K),I=K),n.bindTexture(O,me||Q[O]),ee.type=O,ee.texture=me)}function B(){const O=J[I];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Y(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Me(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function je(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(O){xe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),xe.copy(O))}function ye(O){Ie.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Ie.copy(O))}function Ze(O,me){let K=c.get(me);K===void 0&&(K=new WeakMap,c.set(me,K));let ee=K.get(O);ee===void 0&&(ee=n.getUniformBlockIndex(me,O.name),K.set(O,ee))}function Ve(O,me){const ee=c.get(me).get(O);o.get(me)!==ee&&(n.uniformBlockBinding(me,ee,O.__bindingPointIndex),o.set(me,ee))}function it(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},I=null,J={},u={},h=new WeakMap,d=[],f=null,g=!1,_=null,m=null,p=null,x=null,y=null,S=null,E=null,w=new Ue(0,0,0),T=0,C=!1,L=null,v=null,b=null,U=null,H=null,xe.set(0,0,n.canvas.width,n.canvas.height),Ie.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:le,disable:pe,bindFramebuffer:ke,drawBuffers:Oe,useProgram:Ge,setBlending:D,setMaterial:Et,setFlipSided:Ye,setCullFace:Je,setLineWidth:ne,setPolygonOffset:re,setScissorTest:we,activeTexture:R,bindTexture:M,unbindTexture:B,compressedTexImage2D:Y,compressedTexImage3D:te,texImage2D:be,texImage3D:Fe,updateUBOMapping:Ze,uniformBlockBinding:Ve,texStorage2D:je,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Me,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Be,viewport:ye,reset:it}}function gu(n,e,t,i){const r=a_(i);switch(t){case zh:return n*e;case Gh:return n*e;case Vh:return n*e*2;case Da:return n*e/r.components*r.byteLength;case Vc:return n*e/r.components*r.byteLength;case Wh:return n*e*2/r.components*r.byteLength;case Wc:return n*e*2/r.components*r.byteLength;case Hh:return n*e*3/r.components*r.byteLength;case Sn:return n*e*4/r.components*r.byteLength;case jc:return n*e*4/r.components*r.byteLength;case sa:case aa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case oa:case ca:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Qo:case tc:return Math.max(n,16)*Math.max(e,8)/4;case $o:case ec:return Math.max(n,8)*Math.max(e,8)/2;case nc:case ic:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case rc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case uc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case hc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case dc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case pc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case mc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case gc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case la:case yc:case xc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case jh:case wc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bc:case Sc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function a_(n){switch(n){case Jn:case kh:return{byteLength:1,components:1};case is:case Fh:case Mn:return{byteLength:2,components:1};case Hc:case Gc:return{byteLength:2,components:4};case Ui:case zc:case Ln:return{byteLength:4,components:1};case Bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function o_(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Pe,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return f?new OffscreenCanvas(R,M):va("canvas")}function _(R,M,B){let Y=1;const te=we(R);if((te.width>B||te.height>B)&&(Y=B/Math.max(te.width,te.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(Y*te.width),Me=Math.floor(Y*te.height);h===void 0&&(h=g(Z,Me));const ae=M?g(Z,Me):h;return ae.width=Z,ae.height=Me,ae.getContext("2d").drawImage(R,0,0,Z,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Me+")."),ae}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Lt&&R.minFilter!==un}function p(R){n.generateMipmap(R)}function x(R,M,B,Y,te=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=M;if(M===n.RED&&(B===n.FLOAT&&(Z=n.R32F),B===n.HALF_FLOAT&&(Z=n.R16F),B===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.R8UI),B===n.UNSIGNED_SHORT&&(Z=n.R16UI),B===n.UNSIGNED_INT&&(Z=n.R32UI),B===n.BYTE&&(Z=n.R8I),B===n.SHORT&&(Z=n.R16I),B===n.INT&&(Z=n.R32I)),M===n.RG&&(B===n.FLOAT&&(Z=n.RG32F),B===n.HALF_FLOAT&&(Z=n.RG16F),B===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RG8UI),B===n.UNSIGNED_SHORT&&(Z=n.RG16UI),B===n.UNSIGNED_INT&&(Z=n.RG32UI),B===n.BYTE&&(Z=n.RG8I),B===n.SHORT&&(Z=n.RG16I),B===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),B===n.UNSIGNED_INT&&(Z=n.RGB32UI),B===n.BYTE&&(Z=n.RGB8I),B===n.SHORT&&(Z=n.RGB16I),B===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(B===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),B===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),B===n.UNSIGNED_INT&&(Z=n.RGBA32UI),B===n.BYTE&&(Z=n.RGBA8I),B===n.SHORT&&(Z=n.RGBA16I),B===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&B===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),M===n.RGBA){const Me=te?fa:et.getTransfer(Y);B===n.FLOAT&&(Z=n.RGBA32F),B===n.HALF_FLOAT&&(Z=n.RGBA16F),B===n.UNSIGNED_BYTE&&(Z=Me===ut?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(R,M){let B;return R?M===null||M===Ui||M===Er?B=n.DEPTH24_STENCIL8:M===Ln?B=n.DEPTH32F_STENCIL8:M===is&&(B=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ui||M===Er?B=n.DEPTH_COMPONENT24:M===Ln?B=n.DEPTH_COMPONENT32F:M===is&&(B=n.DEPTH_COMPONENT16),B}function S(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Lt&&R.minFilter!==un?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function E(R){const M=R.target;M.removeEventListener("dispose",E),T(M),M.isVideoTexture&&u.delete(M)}function w(R){const M=R.target;M.removeEventListener("dispose",w),L(M)}function T(R){const M=i.get(R);if(M.__webglInit===void 0)return;const B=R.source,Y=d.get(B);if(Y){const te=Y[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&C(R),Object.keys(Y).length===0&&d.delete(B)}i.remove(R)}function C(R){const M=i.get(R);n.deleteTexture(M.__webglTexture);const B=R.source,Y=d.get(B);delete Y[M.__cacheKey],a.memory.textures--}function L(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let te=0;te<M.__webglFramebuffer[Y].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[Y][te]);else n.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)n.deleteFramebuffer(M.__webglFramebuffer[Y]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const B=R.textures;for(let Y=0,te=B.length;Y<te;Y++){const Z=i.get(B[Y]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(B[Y])}i.remove(R)}let v=0;function b(){v=0}function U(){const R=v;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),v+=1,R}function H(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function j(R,M){const B=i.get(R);if(R.isVideoTexture&&ne(R),R.isRenderTargetTexture===!1&&R.version>0&&B.__version!==R.version){const Y=R.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(B,R,M);return}}t.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+M)}function V(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Ie(B,R,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+M)}function P(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){Ie(B,R,M);return}t.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+M)}function z(R,M){const B=i.get(R);if(R.version>0&&B.__version!==R.version){X(B,R,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+M)}const I={[Jo]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[Zo]:n.MIRRORED_REPEAT},J={[Lt]:n.NEAREST,[Df]:n.NEAREST_MIPMAP_NEAREST,[ys]:n.NEAREST_MIPMAP_LINEAR,[un]:n.LINEAR,[Ya]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},$={[kf]:n.NEVER,[Vf]:n.ALWAYS,[Ff]:n.LESS,[Xh]:n.LEQUAL,[Bf]:n.EQUAL,[Gf]:n.GEQUAL,[zf]:n.GREATER,[Hf]:n.NOTEQUAL};function ie(R,M){if(M.type===Ln&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===un||M.magFilter===Ya||M.magFilter===ys||M.magFilter===Li||M.minFilter===un||M.minFilter===Ya||M.minFilter===ys||M.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,I[M.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,I[M.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,I[M.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,J[M.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,J[M.minFilter]),M.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,$[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Lt||M.minFilter!==ys&&M.minFilter!==Li||M.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function xe(R,M){let B=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",E));const Y=M.source;let te=d.get(Y);te===void 0&&(te={},d.set(Y,te));const Z=H(M);if(Z!==R.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),te[Z].usedTimes++;const Me=te[R.__cacheKey];Me!==void 0&&(te[R.__cacheKey].usedTimes--,Me.usedTimes===0&&C(M)),R.__cacheKey=Z,R.__webglTexture=te[Z].texture}return B}function Ie(R,M,B){let Y=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=n.TEXTURE_3D);const te=xe(R,M),Z=M.source;t.bindTexture(Y,R.__webglTexture,n.TEXTURE0+B);const Me=i.get(Z);if(Z.version!==Me.__version||te===!0){t.activeTexture(n.TEXTURE0+B);const ae=et.getPrimaries(et.workingColorSpace),de=M.colorSpace===ci?null:et.getPrimaries(M.colorSpace),je=M.colorSpace===ci||ae===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let se=_(M.image,!1,r.maxTextureSize);se=re(M,se);const be=s.convert(M.format,M.colorSpace),Fe=s.convert(M.type);let Be=x(M.internalFormat,be,Fe,M.colorSpace,M.isVideoTexture);ie(Y,M);let ye;const Ze=M.mipmaps,Ve=M.isVideoTexture!==!0,it=Me.__version===void 0||te===!0,O=Z.dataReady,me=S(M,se);if(M.isDepthTexture)Be=y(M.format===Mr,M.type),it&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Be,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Be,se.width,se.height,0,be,Fe,null));else if(M.isDataTexture)if(Ze.length>0){Ve&&it&&t.texStorage2D(n.TEXTURE_2D,me,Be,Ze[0].width,Ze[0].height);for(let K=0,ee=Ze.length;K<ee;K++)ye=Ze[K],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,be,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,K,Be,ye.width,ye.height,0,be,Fe,ye.data);M.generateMipmaps=!1}else Ve?(it&&t.texStorage2D(n.TEXTURE_2D,me,Be,se.width,se.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,be,Fe,se.data)):t.texImage2D(n.TEXTURE_2D,0,Be,se.width,se.height,0,be,Fe,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Be,Ze[0].width,Ze[0].height,se.depth);for(let K=0,ee=Ze.length;K<ee;K++)if(ye=Ze[K],M.format!==Sn)if(be!==null)if(Ve){if(O)if(M.layerUpdates.size>0){const ge=gu(ye.width,ye.height,M.format,M.type);for(const q of M.layerUpdates){const oe=ye.data.subarray(q*ge/ye.data.BYTES_PER_ELEMENT,(q+1)*ge/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,q,ye.width,ye.height,1,be,oe,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,se.depth,be,ye.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Be,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,ye.width,ye.height,se.depth,be,Fe,ye.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,Be,ye.width,ye.height,se.depth,0,be,Fe,ye.data)}else{Ve&&it&&t.texStorage2D(n.TEXTURE_2D,me,Be,Ze[0].width,Ze[0].height);for(let K=0,ee=Ze.length;K<ee;K++)ye=Ze[K],M.format!==Sn?be!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,be,ye.data):t.compressedTexImage2D(n.TEXTURE_2D,K,Be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?O&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,ye.width,ye.height,be,Fe,ye.data):t.texImage2D(n.TEXTURE_2D,K,Be,ye.width,ye.height,0,be,Fe,ye.data)}else if(M.isDataArrayTexture)if(Ve){if(it&&t.texStorage3D(n.TEXTURE_2D_ARRAY,me,Be,se.width,se.height,se.depth),O)if(M.layerUpdates.size>0){const K=gu(se.width,se.height,M.format,M.type);for(const ee of M.layerUpdates){const ge=se.data.subarray(ee*K/se.data.BYTES_PER_ELEMENT,(ee+1)*K/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ee,se.width,se.height,1,be,Fe,ge)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,be,Fe,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,se.width,se.height,se.depth,0,be,Fe,se.data);else if(M.isData3DTexture)Ve?(it&&t.texStorage3D(n.TEXTURE_3D,me,Be,se.width,se.height,se.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,be,Fe,se.data)):t.texImage3D(n.TEXTURE_3D,0,Be,se.width,se.height,se.depth,0,be,Fe,se.data);else if(M.isFramebufferTexture){if(it)if(Ve)t.texStorage2D(n.TEXTURE_2D,me,Be,se.width,se.height);else{let K=se.width,ee=se.height;for(let ge=0;ge<me;ge++)t.texImage2D(n.TEXTURE_2D,ge,Be,K,ee,0,be,Fe,null),K>>=1,ee>>=1}}else if(Ze.length>0){if(Ve&&it){const K=we(Ze[0]);t.texStorage2D(n.TEXTURE_2D,me,Be,K.width,K.height)}for(let K=0,ee=Ze.length;K<ee;K++)ye=Ze[K],Ve?O&&t.texSubImage2D(n.TEXTURE_2D,K,0,0,be,Fe,ye):t.texImage2D(n.TEXTURE_2D,K,Be,be,Fe,ye);M.generateMipmaps=!1}else if(Ve){if(it){const K=we(se);t.texStorage2D(n.TEXTURE_2D,me,Be,K.width,K.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Fe,se)}else t.texImage2D(n.TEXTURE_2D,0,Be,be,Fe,se);m(M)&&p(Y),Me.__version=Z.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function X(R,M,B){if(M.image.length!==6)return;const Y=xe(R,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+B);const Z=i.get(te);if(te.version!==Z.__version||Y===!0){t.activeTexture(n.TEXTURE0+B);const Me=et.getPrimaries(et.workingColorSpace),ae=M.colorSpace===ci?null:et.getPrimaries(M.colorSpace),de=M.colorSpace===ci||Me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const je=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,be=[];for(let ee=0;ee<6;ee++)!je&&!se?be[ee]=_(M.image[ee],!0,r.maxCubemapSize):be[ee]=se?M.image[ee].image:M.image[ee],be[ee]=re(M,be[ee]);const Fe=be[0],Be=s.convert(M.format,M.colorSpace),ye=s.convert(M.type),Ze=x(M.internalFormat,Be,ye,M.colorSpace),Ve=M.isVideoTexture!==!0,it=Z.__version===void 0||Y===!0,O=te.dataReady;let me=S(M,Fe);ie(n.TEXTURE_CUBE_MAP,M);let K;if(je){Ve&&it&&t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ze,Fe.width,Fe.height);for(let ee=0;ee<6;ee++){K=be[ee].mipmaps;for(let ge=0;ge<K.length;ge++){const q=K[ge];M.format!==Sn?Be!==null?Ve?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,q.width,q.height,Be,q.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ze,q.width,q.height,0,q.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,0,0,q.width,q.height,Be,ye,q.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge,Ze,q.width,q.height,0,Be,ye,q.data)}}}else{if(K=M.mipmaps,Ve&&it){K.length>0&&me++;const ee=we(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,me,Ze,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(se){Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,be[ee].width,be[ee].height,Be,ye,be[ee].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,be[ee].width,be[ee].height,0,Be,ye,be[ee].data);for(let ge=0;ge<K.length;ge++){const oe=K[ge].image[ee].image;Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,oe.width,oe.height,Be,ye,oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ze,oe.width,oe.height,0,Be,ye,oe.data)}}else{Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Be,ye,be[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ze,Be,ye,be[ee]);for(let ge=0;ge<K.length;ge++){const q=K[ge];Ve?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,0,0,Be,ye,q.image[ee]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ge+1,Ze,Be,ye,q.image[ee])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),Z.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Q(R,M,B,Y,te,Z){const Me=s.convert(B.format,B.colorSpace),ae=s.convert(B.type),de=x(B.internalFormat,Me,ae,B.colorSpace);if(!i.get(M).__hasExternalTextures){const se=Math.max(1,M.width>>Z),be=Math.max(1,M.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,de,se,be,M.depth,0,Me,ae,null):t.texImage2D(te,Z,de,se,be,0,Me,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Je(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Y,te,i.get(B).__webglTexture,0,Ye(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Y,te,i.get(B).__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(R,M,B){if(n.bindRenderbuffer(n.RENDERBUFFER,R),M.depthBuffer){const Y=M.depthTexture,te=Y&&Y.isDepthTexture?Y.type:null,Z=y(M.stencilBuffer,te),Me=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Ye(M);Je(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,Z,M.width,M.height):B?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,R)}else{const Y=M.textures;for(let te=0;te<Y.length;te++){const Z=Y[te],Me=s.convert(Z.format,Z.colorSpace),ae=s.convert(Z.type),de=x(Z.internalFormat,Me,ae,Z.colorSpace),je=Ye(M);B&&Je(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,je,de,M.width,M.height):Je(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,je,de,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,de,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function pe(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const Y=i.get(M.depthTexture).__webglTexture,te=Ye(M);if(M.depthTexture.format===vr)Je(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Y,0);else if(M.depthTexture.format===Mr)Je(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function ke(R){const M=i.get(R),B=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",te)};Y.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Y}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");pe(M.__webglFramebuffer,R)}else if(B){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=n.createRenderbuffer(),le(M.__webglDepthbuffer[Y],R,!1);else{const te=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[Y];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),le(M.__webglDepthbuffer,R,!1);else{const Y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,te)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(R,M,B){const Y=i.get(R);M!==void 0&&Q(Y.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&ke(R)}function Ge(R){const M=R.texture,B=i.get(R),Y=i.get(M);R.addEventListener("dispose",w);const te=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Me=te.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=M.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer[ae]=[];for(let de=0;de<M.mipmaps.length;de++)B.__webglFramebuffer[ae][de]=n.createFramebuffer()}else B.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){B.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)B.__webglFramebuffer[ae]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ae=0,de=te.length;ae<de;ae++){const je=i.get(te[ae]);je.__webglTexture===void 0&&(je.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Je(R)===!1){B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ae=0;ae<te.length;ae++){const de=te[ae];B.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ae]);const je=s.convert(de.format,de.colorSpace),se=s.convert(de.type),be=x(de.internalFormat,je,se,de.colorSpace,R.isXRRenderTarget===!0),Fe=Ye(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,be,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,B.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),le(B.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),ie(n.TEXTURE_CUBE_MAP,M);for(let ae=0;ae<6;ae++)if(M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)Q(B.__webglFramebuffer[ae][de],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else Q(B.__webglFramebuffer[ae],R,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,de=te.length;ae<de;ae++){const je=te[ae],se=i.get(je);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),ie(n.TEXTURE_2D,je),Q(B.__webglFramebuffer,R,je,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),m(je)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ae=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,Y.__webglTexture),ie(ae,M),M.mipmaps&&M.mipmaps.length>0)for(let de=0;de<M.mipmaps.length;de++)Q(B.__webglFramebuffer[de],R,M,n.COLOR_ATTACHMENT0,ae,de);else Q(B.__webglFramebuffer,R,M,n.COLOR_ATTACHMENT0,ae,0);m(M)&&p(ae),t.unbindTexture()}R.depthBuffer&&ke(R)}function $e(R){const M=R.textures;for(let B=0,Y=M.length;B<Y;B++){const te=M[B];if(m(te)){const Z=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(te).__webglTexture;t.bindTexture(Z,Me),p(Z),t.unbindTexture()}}}const Ke=[],D=[];function Et(R){if(R.samples>0){if(Je(R)===!1){const M=R.textures,B=R.width,Y=R.height;let te=n.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(R),ae=M.length>1;if(ae)for(let de=0;de<M.length;de++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let de=0;de<M.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const je=i.get(M[de]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,je,0)}n.blitFramebuffer(0,0,B,Y,0,0,B,Y,te,n.NEAREST),c===!0&&(Ke.length=0,D.length=0,Ke.push(n.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ke.push(Z),D.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let de=0;de<M.length;de++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,Me.__webglColorRenderbuffer[de]);const je=i.get(M[de]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,je,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const M=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function Ye(R){return Math.min(r.maxSamples,R.samples)}function Je(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ne(R){const M=a.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function re(R,M){const B=R.colorSpace,Y=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||B!==gi&&B!==ci&&(et.getTransfer(B)===ut?(Y!==Sn||te!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),M}function we(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=b,this.setTexture2D=j,this.setTexture2DArray=V,this.setTexture3D=P,this.setTextureCube=z,this.rebindTextures=Oe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Je}function c_(n,e){function t(i,r=ci){let s;const a=et.getTransfer(r);if(i===Jn)return n.UNSIGNED_BYTE;if(i===Hc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Bh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===kh)return n.BYTE;if(i===Fh)return n.SHORT;if(i===is)return n.UNSIGNED_SHORT;if(i===zc)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===Mn)return n.HALF_FLOAT;if(i===zh)return n.ALPHA;if(i===Hh)return n.RGB;if(i===Sn)return n.RGBA;if(i===Gh)return n.LUMINANCE;if(i===Vh)return n.LUMINANCE_ALPHA;if(i===vr)return n.DEPTH_COMPONENT;if(i===Mr)return n.DEPTH_STENCIL;if(i===Da)return n.RED;if(i===Vc)return n.RED_INTEGER;if(i===Wh)return n.RG;if(i===Wc)return n.RG_INTEGER;if(i===jc)return n.RGBA_INTEGER;if(i===sa||i===aa||i===oa||i===ca)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===oa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$o||i===Qo||i===ec||i===tc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===$o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nc||i===ic||i===rc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nc||i===ic)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===rc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===sc||i===ac||i===oc||i===cc||i===lc||i===uc||i===hc||i===dc||i===fc||i===pc||i===mc||i===gc||i===vc||i===_c)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===sc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ac)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===oc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===uc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===hc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===pc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===mc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===gc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_c)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===la||i===yc||i===xc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===la)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===jh||i===wc||i===bc||i===Sc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===la)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Er?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class l_ extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gt extends St{constructor(){super(),this.isGroup=!0,this.type="Group"}}const u_={type:"move"};class Eo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(u_)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,d_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class f_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Dt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new _t({vertexShader:h_,fragmentShader:d_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fe(new $n(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class p_ extends Cr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,g=null;const _=new f_,m=t.getContextAttributes();let p=null,x=null;const y=[],S=[],E=new Pe;let w=null;const T=new ln;T.layers.enable(1),T.viewport=new vt;const C=new ln;C.layers.enable(2),C.viewport=new vt;const L=[T,C],v=new l_;v.layers.enable(1),v.layers.enable(2);let b=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=y[X];return Q===void 0&&(Q=new Eo,y[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=y[X];return Q===void 0&&(Q=new Eo,y[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=y[X];return Q===void 0&&(Q=new Eo,y[X]=Q),Q.getHandSpace()};function H(X){const Q=S.indexOf(X.inputSource);if(Q===-1)return;const le=y[Q];le!==void 0&&(le.update(X.inputSource,X.frame,l||a),le.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",V);for(let X=0;X<y.length;X++){const Q=S[X];Q!==null&&(S[X]=null,y[X].disconnect(Q))}b=null,U=null,_.reset(),e.setRenderTarget(p),f=null,d=null,h=null,r=null,x=null,Ie.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(E),r.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,Q),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new tn(f.framebufferWidth,f.framebufferHeight,{format:Sn,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,le=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=m.stencil?Mr:vr,le=m.stencil?Er:Ui);const ke={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(ke),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new tn(d.textureWidth,d.textureHeight,{format:Sn,type:Jn,depthTexture:new sd(d.textureWidth,d.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Ie.setContext(r),Ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(X){for(let Q=0;Q<X.removed.length;Q++){const le=X.removed[Q],pe=S.indexOf(le);pe>=0&&(S[pe]=null,y[pe].disconnect(le))}for(let Q=0;Q<X.added.length;Q++){const le=X.added[Q];let pe=S.indexOf(le);if(pe===-1){for(let Oe=0;Oe<y.length;Oe++)if(Oe>=S.length){S.push(le),pe=Oe;break}else if(S[Oe]===null){S[Oe]=le,pe=Oe;break}if(pe===-1)break}const ke=y[pe];ke&&ke.connect(le)}}const P=new N,z=new N;function I(X,Q,le){P.setFromMatrixPosition(Q.matrixWorld),z.setFromMatrixPosition(le.matrixWorld);const pe=P.distanceTo(z),ke=Q.projectionMatrix.elements,Oe=le.projectionMatrix.elements,Ge=ke[14]/(ke[10]-1),$e=ke[14]/(ke[10]+1),Ke=(ke[9]+1)/ke[5],D=(ke[9]-1)/ke[5],Et=(ke[8]-1)/ke[0],Ye=(Oe[8]+1)/Oe[0],Je=Ge*Et,ne=Ge*Ye,re=pe/(-Et+Ye),we=re*-Et;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(we),X.translateZ(re),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ke[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const R=Ge+re,M=$e+re,B=Je-we,Y=ne+(pe-we),te=Ke*$e/M*R,Z=D*$e/M*R;X.projectionMatrix.makePerspective(B,Y,te,Z,R,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function J(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let Q=X.near,le=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(le=_.depthFar)),v.near=C.near=T.near=Q,v.far=C.far=T.far=le,(b!==v.near||U!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,U=v.far);const pe=X.parent,ke=v.cameras;J(v,pe);for(let Oe=0;Oe<ke.length;Oe++)J(ke[Oe],pe);ke.length===2?I(v,T,C):v.projectionMatrix.copy(T.projectionMatrix),$(X,v,pe)};function $(X,Q,le){le===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(le.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=rs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let ie=null;function xe(X,Q){if(u=Q.getViewerPose(l||a),g=Q,u!==null){const le=u.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let pe=!1;le.length!==v.cameras.length&&(v.cameras.length=0,pe=!0);for(let Oe=0;Oe<le.length;Oe++){const Ge=le[Oe];let $e=null;if(f!==null)$e=f.getViewport(Ge);else{const D=h.getViewSubImage(d,Ge);$e=D.viewport,Oe===0&&(e.setRenderTargetTextures(x,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(x))}let Ke=L[Oe];Ke===void 0&&(Ke=new ln,Ke.layers.enable(Oe),Ke.viewport=new vt,L[Oe]=Ke),Ke.matrix.fromArray(Ge.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Ge.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set($e.x,$e.y,$e.width,$e.height),Oe===0&&(v.matrix.copy(Ke.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),pe===!0&&v.cameras.push(Ke)}const ke=r.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Oe=h.getDepthInformation(le[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,r.renderState)}}for(let le=0;le<y.length;le++){const pe=S[le],ke=y[le];pe!==null&&ke!==void 0&&ke.update(pe,Q,l||a)}ie&&ie(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ie=new rd;Ie.setAnimationLoop(xe),this.setAnimationLoop=function(X){ie=X},this.dispose=function(){}}}const bi=new Zn,m_=new ct;function g_(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,td(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,y,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===It&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===It&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,S=x.envMapRotation;y&&(m.envMap.value=y,bi.copy(S),bi.x*=-1,bi.y*=-1,bi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),m.envMapRotation.value.setFromMatrix4(m_.makeRotationFromEuler(bi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===It&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function v_(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,y){const S=y.program;i.uniformBlockBinding(x,S)}function l(x,y){let S=r[x.id];S===void 0&&(g(x),S=u(x),r[x.id]=S,x.addEventListener("dispose",m));const E=y.program;i.updateUBOMapping(x,E);const w=e.render.frame;s[x.id]!==w&&(d(x),s[x.id]=w)}function u(x){const y=h();x.__bindingPointIndex=y;const S=n.createBuffer(),E=x.__size,w=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,S),S}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=r[x.id],S=x.uniforms,E=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let w=0,T=S.length;w<T;w++){const C=Array.isArray(S[w])?S[w]:[S[w]];for(let L=0,v=C.length;L<v;L++){const b=C[L];if(f(b,w,L,E)===!0){const U=b.__offset,H=Array.isArray(b.value)?b.value:[b.value];let j=0;for(let V=0;V<H.length;V++){const P=H[V],z=_(P);typeof P=="number"||typeof P=="boolean"?(b.__data[0]=P,n.bufferSubData(n.UNIFORM_BUFFER,U+j,b.__data)):P.isMatrix3?(b.__data[0]=P.elements[0],b.__data[1]=P.elements[1],b.__data[2]=P.elements[2],b.__data[3]=0,b.__data[4]=P.elements[3],b.__data[5]=P.elements[4],b.__data[6]=P.elements[5],b.__data[7]=0,b.__data[8]=P.elements[6],b.__data[9]=P.elements[7],b.__data[10]=P.elements[8],b.__data[11]=0):(P.toArray(b.__data,j),j+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,b.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(x,y,S,E){const w=x.value,T=y+"_"+S;if(E[T]===void 0)return typeof w=="number"||typeof w=="boolean"?E[T]=w:E[T]=w.clone(),!0;{const C=E[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return E[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(x){const y=x.uniforms;let S=0;const E=16;for(let T=0,C=y.length;T<C;T++){const L=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,b=L.length;v<b;v++){const U=L[v],H=Array.isArray(U.value)?U.value:[U.value];for(let j=0,V=H.length;j<V;j++){const P=H[j],z=_(P),I=S%E,J=I%z.boundary,$=I+J;S+=J,$!==0&&E-$<z.storage&&(S+=E-$),U.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=z.storage}}}const w=S%E;return w>0&&(S+=E-w),x.__size=S,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const S=a.indexOf(y.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const x in r)n.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:c,update:l,dispose:p}}class $c{constructor(e={}){const{canvas:t=ap(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this.toneMapping=hi,this.toneMappingExposure=1;const y=this;let S=!1,E=0,w=0,T=null,C=-1,L=null;const v=new vt,b=new vt;let U=null;const H=new Ue(0);let j=0,V=t.width,P=t.height,z=1,I=null,J=null;const $=new vt(0,0,V,P),ie=new vt(0,0,V,P);let xe=!1;const Ie=new Yc;let X=!1,Q=!1;const le=new ct,pe=new ct,ke=new N,Oe=new vt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $e=!1;function Ke(){return T===null?z:1}let D=i;function Et(A,k){return t.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Bc}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ge,!1),t.addEventListener("webglcontextcreationerror",q,!1),D===null){const k="webgl2";if(D=Et(k,A),D===null)throw Et(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ye,Je,ne,re,we,R,M,B,Y,te,Z,Me,ae,de,je,se,be,Fe,Be,ye,Ze,Ve,it,O;function me(){Ye=new Sv(D),Ye.init(),Ve=new c_(D,Ye),Je=new vv(D,Ye,e,Ve),ne=new s_(D),Je.reverseDepthBuffer&&ne.buffers.depth.setReversed(!0),re=new Tv(D),we=new W0,R=new o_(D,Ye,ne,we,Je,Ve,re),M=new yv(y),B=new bv(y),Y=new Dp(D),it=new mv(D,Y),te=new Ev(D,Y,re,it),Z=new Rv(D,te,Y,re),Be=new Av(D,Je,R),se=new _v(we),Me=new V0(y,M,B,Ye,Je,it,se),ae=new g_(y,we),de=new q0,je=new $0(Ye),Fe=new pv(y,M,B,ne,Z,d,c),be=new i_(y,Z,Je),O=new v_(D,re,Je,ne),ye=new gv(D,Ye,re),Ze=new Mv(D,Ye,re),re.programs=Me.programs,y.capabilities=Je,y.extensions=Ye,y.properties=we,y.renderLists=de,y.shadowMap=be,y.state=ne,y.info=re}me();const K=new p_(y,D);this.xr=K,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=Ye.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ye.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(A){A!==void 0&&(z=A,this.setSize(V,P,!1))},this.getSize=function(A){return A.set(V,P)},this.setSize=function(A,k,G=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,P=k,t.width=Math.floor(A*z),t.height=Math.floor(k*z),G===!0&&(t.style.width=A+"px",t.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(V*z,P*z).floor()},this.setDrawingBufferSize=function(A,k,G){V=A,P=k,z=G,t.width=Math.floor(A*G),t.height=Math.floor(k*G),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,k,G,W){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,k,G,W),ne.viewport(v.copy($).multiplyScalar(z).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,k,G,W){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,k,G,W),ne.scissor(b.copy(ie).multiplyScalar(z).round())},this.getScissorTest=function(){return xe},this.setScissorTest=function(A){ne.setScissorTest(xe=A)},this.setOpaqueSort=function(A){I=A},this.setTransparentSort=function(A){J=A},this.getClearColor=function(A){return A.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(A=!0,k=!0,G=!0){let W=0;if(A){let F=!1;if(T!==null){const ce=T.texture.format;F=ce===jc||ce===Wc||ce===Vc}if(F){const ce=T.texture.type,_e=ce===Jn||ce===Ui||ce===is||ce===Er||ce===Hc||ce===Gc,Te=Fe.getClearColor(),Ae=Fe.getClearAlpha(),ze=Te.r,He=Te.g,Ce=Te.b;_e?(f[0]=ze,f[1]=He,f[2]=Ce,f[3]=Ae,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=ze,g[1]=He,g[2]=Ce,g[3]=Ae,D.clearBufferiv(D.COLOR,0,g))}else W|=D.COLOR_BUFFER_BIT}k&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ge,!1),t.removeEventListener("webglcontextcreationerror",q,!1),de.dispose(),je.dispose(),we.dispose(),M.dispose(),B.dispose(),Z.dispose(),it.dispose(),O.dispose(),Me.dispose(),K.dispose(),K.removeEventListener("sessionstart",Nt),K.removeEventListener("sessionend",qt),At.stop()};function ee(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const A=re.autoReset,k=be.enabled,G=be.autoUpdate,W=be.needsUpdate,F=be.type;me(),re.autoReset=A,be.enabled=k,be.autoUpdate=G,be.needsUpdate=W,be.type=F}function q(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function oe(A){const k=A.target;k.removeEventListener("dispose",oe),Re(k)}function Re(A){Se(A),we.remove(A)}function Se(A){const k=we.get(A).programs;k!==void 0&&(k.forEach(function(G){Me.releaseProgram(G)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,G,W,F,ce){k===null&&(k=Ge);const _e=F.isMesh&&F.matrixWorld.determinant()<0,Te=af(A,k,G,W,F);ne.setMaterial(W,_e);let Ae=G.index,ze=1;if(W.wireframe===!0){if(Ae=te.getWireframeAttribute(G),Ae===void 0)return;ze=2}const He=G.drawRange,Ce=G.attributes.position;let rt=He.start*ze,ht=(He.start+He.count)*ze;ce!==null&&(rt=Math.max(rt,ce.start*ze),ht=Math.min(ht,(ce.start+ce.count)*ze)),Ae!==null?(rt=Math.max(rt,0),ht=Math.min(ht,Ae.count)):Ce!=null&&(rt=Math.max(rt,0),ht=Math.min(ht,Ce.count));const pt=ht-rt;if(pt<0||pt===1/0)return;it.setup(F,W,Te,G,Ae);let Kt,tt=ye;if(Ae!==null&&(Kt=Y.get(Ae),tt=Ze,tt.setIndex(Kt)),F.isMesh)W.wireframe===!0?(ne.setLineWidth(W.wireframeLinewidth*Ke()),tt.setMode(D.LINES)):tt.setMode(D.TRIANGLES);else if(F.isLine){let Le=W.linewidth;Le===void 0&&(Le=1),ne.setLineWidth(Le*Ke()),F.isLineSegments?tt.setMode(D.LINES):F.isLineLoop?tt.setMode(D.LINE_LOOP):tt.setMode(D.LINE_STRIP)}else F.isPoints?tt.setMode(D.POINTS):F.isSprite&&tt.setMode(D.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)tt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))tt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Le=F._multiDrawStarts,Ut=F._multiDrawCounts,nt=F._multiDrawCount,fn=Ae?Y.get(Ae).bytesPerElement:1,zi=we.get(W).currentProgram.getUniforms();for(let Yt=0;Yt<nt;Yt++)zi.setValue(D,"_gl_DrawID",Yt),tt.render(Le[Yt]/fn,Ut[Yt])}else if(F.isInstancedMesh)tt.renderInstances(rt,pt,F.count);else if(G.isInstancedBufferGeometry){const Le=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ut=Math.min(G.instanceCount,Le);tt.renderInstances(rt,pt,Ut)}else tt.render(rt,pt)};function ve(A,k,G){A.transparent===!0&&A.side===$t&&A.forceSinglePass===!1?(A.side=It,A.needsUpdate=!0,_s(A,k,G),A.side=pi,A.needsUpdate=!0,_s(A,k,G),A.side=$t):_s(A,k,G)}this.compile=function(A,k,G=null){G===null&&(G=A),m=je.get(G),m.init(k),x.push(m),G.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),A!==G&&A.traverseVisible(function(F){F.isLight&&F.layers.test(k.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const W=new Set;return A.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const ce=F.material;if(ce)if(Array.isArray(ce))for(let _e=0;_e<ce.length;_e++){const Te=ce[_e];ve(Te,G,F),W.add(Te)}else ve(ce,G,F),W.add(ce)}),x.pop(),m=null,W},this.compileAsync=function(A,k,G=null){const W=this.compile(A,k,G);return new Promise(F=>{function ce(){if(W.forEach(function(_e){we.get(_e).currentProgram.isReady()&&W.delete(_e)}),W.size===0){F(A);return}setTimeout(ce,10)}Ye.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let We=null;function De(A){We&&We(A)}function Nt(){At.stop()}function qt(){At.start()}const At=new rd;At.setAnimationLoop(De),typeof self<"u"&&At.setContext(self),this.setAnimationLoop=function(A){We=A,K.setAnimationLoop(A),A===null?At.stop():At.start()},K.addEventListener("sessionstart",Nt),K.addEventListener("sessionend",qt),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),A.isScene===!0&&A.onBeforeRender(y,A,k,T),m=je.get(A,x.length),m.init(k),x.push(m),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ie.setFromProjectionMatrix(pe),Q=this.localClippingEnabled,X=se.init(this.clippingPlanes,Q),_=de.get(A,p.length),_.init(),p.push(_),K.enabled===!0&&K.isPresenting===!0){const ce=y.xr.getDepthSensingMesh();ce!==null&&On(ce,k,-1/0,y.sortObjects)}On(A,k,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(I,J),$e=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,$e&&Fe.addToRenderList(_,A),this.info.render.frame++,X===!0&&se.beginShadows();const G=m.state.shadowsArray;be.render(G,A,k),X===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=_.opaque,F=_.transmissive;if(m.setupLights(),k.isArrayCamera){const ce=k.cameras;if(F.length>0)for(let _e=0,Te=ce.length;_e<Te;_e++){const Ae=ce[_e];rn(W,F,A,Ae)}$e&&Fe.render(A);for(let _e=0,Te=ce.length;_e<Te;_e++){const Ae=ce[_e];An(_,A,Ae,Ae.viewport)}}else F.length>0&&rn(W,F,A,k),$e&&Fe.render(A),An(_,A,k);T!==null&&(R.updateMultisampleRenderTarget(T),R.updateRenderTargetMipmap(T)),A.isScene===!0&&A.onAfterRender(y,A,k),it.resetDefaultState(),C=-1,L=null,x.pop(),x.length>0?(m=x[x.length-1],X===!0&&se.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function On(A,k,G,W){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)G=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ie.intersectsSprite(A)){W&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);const _e=Z.update(A),Te=A.material;Te.visible&&_.push(A,_e,Te,G,Oe.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ie.intersectsObject(A))){const _e=Z.update(A),Te=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),Oe.copy(_e.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Te)){const Ae=_e.groups;for(let ze=0,He=Ae.length;ze<He;ze++){const Ce=Ae[ze],rt=Te[Ce.materialIndex];rt&&rt.visible&&_.push(A,_e,rt,G,Oe.z,Ce)}}else Te.visible&&_.push(A,_e,Te,G,Oe.z,null)}}const ce=A.children;for(let _e=0,Te=ce.length;_e<Te;_e++)On(ce[_e],k,G,W)}function An(A,k,G,W){const F=A.opaque,ce=A.transmissive,_e=A.transparent;m.setupLightsView(G),X===!0&&se.setGlobalState(y.clippingPlanes,G),W&&ne.viewport(v.copy(W)),F.length>0&&Bi(F,k,G),ce.length>0&&Bi(ce,k,G),_e.length>0&&Bi(_e,k,G),ne.buffers.depth.setTest(!0),ne.buffers.depth.setMask(!0),ne.buffers.color.setMask(!0),ne.setPolygonOffset(!1)}function rn(A,k,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new tn(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?Mn:Jn,minFilter:Li,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const ce=m.state.transmissionRenderTarget[W.id],_e=W.viewport||v;ce.setSize(_e.z,_e.w);const Te=y.getRenderTarget();y.setRenderTarget(ce),y.getClearColor(H),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),$e&&Fe.render(G);const Ae=y.toneMapping;y.toneMapping=hi;const ze=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),X===!0&&se.setGlobalState(y.clippingPlanes,W),Bi(A,G,W),R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let Ce=0,rt=k.length;Ce<rt;Ce++){const ht=k[Ce],pt=ht.object,Kt=ht.geometry,tt=ht.material,Le=ht.group;if(tt.side===$t&&pt.layers.test(W.layers)){const Ut=tt.side;tt.side=It,tt.needsUpdate=!0,xl(pt,G,W,Kt,tt,Le),tt.side=Ut,tt.needsUpdate=!0,He=!0}}He===!0&&(R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce))}y.setRenderTarget(Te),y.setClearColor(H,j),ze!==void 0&&(W.viewport=ze),y.toneMapping=Ae}function Bi(A,k,G){const W=k.isScene===!0?k.overrideMaterial:null;for(let F=0,ce=A.length;F<ce;F++){const _e=A[F],Te=_e.object,Ae=_e.geometry,ze=W===null?_e.material:W,He=_e.group;Te.layers.test(G.layers)&&xl(Te,k,G,Ae,ze,He)}}function xl(A,k,G,W,F,ce){A.onBeforeRender(y,k,G,W,F,ce),A.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(y,k,G,W,A,ce),F.transparent===!0&&F.side===$t&&F.forceSinglePass===!1?(F.side=It,F.needsUpdate=!0,y.renderBufferDirect(G,k,W,F,A,ce),F.side=pi,F.needsUpdate=!0,y.renderBufferDirect(G,k,W,F,A,ce),F.side=$t):y.renderBufferDirect(G,k,W,F,A,ce),A.onAfterRender(y,k,G,W,F,ce)}function _s(A,k,G){k.isScene!==!0&&(k=Ge);const W=we.get(A),F=m.state.lights,ce=m.state.shadowsArray,_e=F.state.version,Te=Me.getParameters(A,F.state,ce,k,G),Ae=Me.getProgramCacheKey(Te);let ze=W.programs;W.environment=A.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(A.isMeshStandardMaterial?B:M).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,ze===void 0&&(A.addEventListener("dispose",oe),ze=new Map,W.programs=ze);let He=ze.get(Ae);if(He!==void 0){if(W.currentProgram===He&&W.lightsStateVersion===_e)return bl(A,Te),He}else Te.uniforms=Me.getUniforms(A),A.onBeforeCompile(Te,y),He=Me.acquireProgram(Te,Ae),ze.set(Ae,He),W.uniforms=Te.uniforms;const Ce=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=se.uniform),bl(A,Te),W.needsLights=cf(A),W.lightsStateVersion=_e,W.needsLights&&(Ce.ambientLightColor.value=F.state.ambient,Ce.lightProbe.value=F.state.probe,Ce.directionalLights.value=F.state.directional,Ce.directionalLightShadows.value=F.state.directionalShadow,Ce.spotLights.value=F.state.spot,Ce.spotLightShadows.value=F.state.spotShadow,Ce.rectAreaLights.value=F.state.rectArea,Ce.ltc_1.value=F.state.rectAreaLTC1,Ce.ltc_2.value=F.state.rectAreaLTC2,Ce.pointLights.value=F.state.point,Ce.pointLightShadows.value=F.state.pointShadow,Ce.hemisphereLights.value=F.state.hemi,Ce.directionalShadowMap.value=F.state.directionalShadowMap,Ce.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Ce.spotShadowMap.value=F.state.spotShadowMap,Ce.spotLightMatrix.value=F.state.spotLightMatrix,Ce.spotLightMap.value=F.state.spotLightMap,Ce.pointShadowMap.value=F.state.pointShadowMap,Ce.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=He,W.uniformsList=null,He}function wl(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=ha.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function bl(A,k){const G=we.get(A);G.outputColorSpace=k.outputColorSpace,G.batching=k.batching,G.batchingColor=k.batchingColor,G.instancing=k.instancing,G.instancingColor=k.instancingColor,G.instancingMorph=k.instancingMorph,G.skinning=k.skinning,G.morphTargets=k.morphTargets,G.morphNormals=k.morphNormals,G.morphColors=k.morphColors,G.morphTargetsCount=k.morphTargetsCount,G.numClippingPlanes=k.numClippingPlanes,G.numIntersection=k.numClipIntersection,G.vertexAlphas=k.vertexAlphas,G.vertexTangents=k.vertexTangents,G.toneMapping=k.toneMapping}function af(A,k,G,W,F){k.isScene!==!0&&(k=Ge),R.resetTextureUnits();const ce=k.fog,_e=W.isMeshStandardMaterial?k.environment:null,Te=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:gi,Ae=(W.isMeshStandardMaterial?B:M).get(W.envMap||_e),ze=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,He=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ce=!!G.morphAttributes.position,rt=!!G.morphAttributes.normal,ht=!!G.morphAttributes.color;let pt=hi;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(pt=y.toneMapping);const Kt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,tt=Kt!==void 0?Kt.length:0,Le=we.get(W),Ut=m.state.lights;if(X===!0&&(Q===!0||A!==L)){const sn=A===L&&W.id===C;se.setState(W,A,sn)}let nt=!1;W.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ut.state.version||Le.outputColorSpace!==Te||F.isBatchedMesh&&Le.batching===!1||!F.isBatchedMesh&&Le.batching===!0||F.isBatchedMesh&&Le.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Le.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Le.instancing===!1||!F.isInstancedMesh&&Le.instancing===!0||F.isSkinnedMesh&&Le.skinning===!1||!F.isSkinnedMesh&&Le.skinning===!0||F.isInstancedMesh&&Le.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Le.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Le.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Le.instancingMorph===!1&&F.morphTexture!==null||Le.envMap!==Ae||W.fog===!0&&Le.fog!==ce||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==se.numPlanes||Le.numIntersection!==se.numIntersection)||Le.vertexAlphas!==ze||Le.vertexTangents!==He||Le.morphTargets!==Ce||Le.morphNormals!==rt||Le.morphColors!==ht||Le.toneMapping!==pt||Le.morphTargetsCount!==tt)&&(nt=!0):(nt=!0,Le.__version=W.version);let fn=Le.currentProgram;nt===!0&&(fn=_s(W,k,F));let zi=!1,Yt=!1,qa=!1;const yt=fn.getUniforms(),ti=Le.uniforms;if(ne.useProgram(fn.program)&&(zi=!0,Yt=!0,qa=!0),W.id!==C&&(C=W.id,Yt=!0),zi||L!==A){Je.reverseDepthBuffer?(le.copy(A.projectionMatrix),cp(le),lp(le),yt.setValue(D,"projectionMatrix",le)):yt.setValue(D,"projectionMatrix",A.projectionMatrix),yt.setValue(D,"viewMatrix",A.matrixWorldInverse);const sn=yt.map.cameraPosition;sn!==void 0&&sn.setValue(D,ke.setFromMatrixPosition(A.matrixWorld)),Je.logarithmicDepthBuffer&&yt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,Yt=!0,qa=!0)}if(F.isSkinnedMesh){yt.setOptional(D,F,"bindMatrix"),yt.setOptional(D,F,"bindMatrixInverse");const sn=F.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),yt.setValue(D,"boneTexture",sn.boneTexture,R))}F.isBatchedMesh&&(yt.setOptional(D,F,"batchingTexture"),yt.setValue(D,"batchingTexture",F._matricesTexture,R),yt.setOptional(D,F,"batchingIdTexture"),yt.setValue(D,"batchingIdTexture",F._indirectTexture,R),yt.setOptional(D,F,"batchingColorTexture"),F._colorsTexture!==null&&yt.setValue(D,"batchingColorTexture",F._colorsTexture,R));const Xa=G.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0)&&Be.update(F,G,fn),(Yt||Le.receiveShadow!==F.receiveShadow)&&(Le.receiveShadow=F.receiveShadow,yt.setValue(D,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(ti.envMap.value=Ae,ti.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(ti.envMapIntensity.value=k.environmentIntensity),Yt&&(yt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Le.needsLights&&of(ti,qa),ce&&W.fog===!0&&ae.refreshFogUniforms(ti,ce),ae.refreshMaterialUniforms(ti,W,z,P,m.state.transmissionRenderTarget[A.id]),ha.upload(D,wl(Le),ti,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ha.upload(D,wl(Le),ti,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yt.setValue(D,"center",F.center),yt.setValue(D,"modelViewMatrix",F.modelViewMatrix),yt.setValue(D,"normalMatrix",F.normalMatrix),yt.setValue(D,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const sn=W.uniformsGroups;for(let Ka=0,lf=sn.length;Ka<lf;Ka++){const Sl=sn[Ka];O.update(Sl,fn),O.bind(Sl,fn)}}return fn}function of(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function cf(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(A,k,G){we.get(A.texture).__webglTexture=k,we.get(A.depthTexture).__webglTexture=G;const W=we.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const G=we.get(A);G.__webglFramebuffer=k,G.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,G=0){T=A,E=k,w=G;let W=!0,F=null,ce=!1,_e=!1;if(A){const Ae=we.get(A);if(Ae.__useDefaultFramebuffer!==void 0)ne.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(Ae.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Ae.__hasExternalTextures)R.rebindTextures(A,we.get(A.texture).__webglTexture,we.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ce=A.depthTexture;if(Ae.__boundDepthTexture!==Ce){if(Ce!==null&&we.has(Ce)&&(A.width!==Ce.image.width||A.height!==Ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(_e=!0);const He=we.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[k])?F=He[k][G]:F=He[k],ce=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?F=we.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?F=He[G]:F=He,v.copy(A.viewport),b.copy(A.scissor),U=A.scissorTest}else v.copy($).multiplyScalar(z).floor(),b.copy(ie).multiplyScalar(z).floor(),U=xe;if(ne.bindFramebuffer(D.FRAMEBUFFER,F)&&W&&ne.drawBuffers(A,F),ne.viewport(v),ne.scissor(b),ne.setScissorTest(U),ce){const Ae=we.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ae.__webglTexture,G)}else if(_e){const Ae=we.get(A.texture),ze=k||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ae.__webglTexture,G||0,ze)}C=-1},this.readRenderTargetPixels=function(A,k,G,W,F,ce,_e){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){ne.bindFramebuffer(D.FRAMEBUFFER,Te);try{const Ae=A.texture,ze=Ae.format,He=Ae.type;if(!Je.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-W&&G>=0&&G<=A.height-F&&D.readPixels(k,G,W,F,Ve.convert(ze),Ve.convert(He),ce)}finally{const Ae=T!==null?we.get(T).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(A,k,G,W,F,ce,_e){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=we.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&_e!==void 0&&(Te=Te[_e]),Te){const Ae=A.texture,ze=Ae.format,He=Ae.type;if(!Je.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-W&&G>=0&&G<=A.height-F){ne.bindFramebuffer(D.FRAMEBUFFER,Te);const Ce=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.bufferData(D.PIXEL_PACK_BUFFER,ce.byteLength,D.STREAM_READ),D.readPixels(k,G,W,F,Ve.convert(ze),Ve.convert(He),0);const rt=T!==null?we.get(T).__webglFramebuffer:null;ne.bindFramebuffer(D.FRAMEBUFFER,rt);const ht=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await op(D,ht,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ce),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ce),D.deleteBuffer(Ce),D.deleteSync(ht),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,G=0){A.isTexture!==!0&&(ua("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const W=Math.pow(2,-G),F=Math.floor(A.image.width*W),ce=Math.floor(A.image.height*W),_e=k!==null?k.x:0,Te=k!==null?k.y:0;R.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,_e,Te,F,ce),ne.unbindTexture()},this.copyTextureToTexture=function(A,k,G=null,W=null,F=0){A.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1],k=arguments[2],F=arguments[3]||0,G=null);let ce,_e,Te,Ae,ze,He;G!==null?(ce=G.max.x-G.min.x,_e=G.max.y-G.min.y,Te=G.min.x,Ae=G.min.y):(ce=A.image.width,_e=A.image.height,Te=0,Ae=0),W!==null?(ze=W.x,He=W.y):(ze=0,He=0);const Ce=Ve.convert(k.format),rt=Ve.convert(k.type);R.setTexture2D(k,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const ht=D.getParameter(D.UNPACK_ROW_LENGTH),pt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Kt=D.getParameter(D.UNPACK_SKIP_PIXELS),tt=D.getParameter(D.UNPACK_SKIP_ROWS),Le=D.getParameter(D.UNPACK_SKIP_IMAGES),Ut=A.isCompressedTexture?A.mipmaps[F]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ut.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Te),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ae),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,ze,He,ce,_e,Ce,rt,Ut.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,ze,He,Ut.width,Ut.height,Ce,Ut.data):D.texSubImage2D(D.TEXTURE_2D,F,ze,He,ce,_e,Ce,rt,Ut),D.pixelStorei(D.UNPACK_ROW_LENGTH,ht),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,tt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le),F===0&&k.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ne.unbindTexture()},this.copyTextureToTexture3D=function(A,k,G=null,W=null,F=0){A.isTexture!==!0&&(ua("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,A=arguments[2],k=arguments[3],F=arguments[4]||0);let ce,_e,Te,Ae,ze,He,Ce,rt,ht;const pt=A.isCompressedTexture?A.mipmaps[F]:A.image;G!==null?(ce=G.max.x-G.min.x,_e=G.max.y-G.min.y,Te=G.max.z-G.min.z,Ae=G.min.x,ze=G.min.y,He=G.min.z):(ce=pt.width,_e=pt.height,Te=pt.depth,Ae=0,ze=0,He=0),W!==null?(Ce=W.x,rt=W.y,ht=W.z):(Ce=0,rt=0,ht=0);const Kt=Ve.convert(k.format),tt=Ve.convert(k.type);let Le;if(k.isData3DTexture)R.setTexture3D(k,0),Le=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Le=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);const Ut=D.getParameter(D.UNPACK_ROW_LENGTH),nt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),fn=D.getParameter(D.UNPACK_SKIP_PIXELS),zi=D.getParameter(D.UNPACK_SKIP_ROWS),Yt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ae),D.pixelStorei(D.UNPACK_SKIP_ROWS,ze),D.pixelStorei(D.UNPACK_SKIP_IMAGES,He),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(Le,F,Ce,rt,ht,ce,_e,Te,Kt,tt,pt.data):k.isCompressedArrayTexture?D.compressedTexSubImage3D(Le,F,Ce,rt,ht,ce,_e,Te,Kt,pt.data):D.texSubImage3D(Le,F,Ce,rt,ht,ce,_e,Te,Kt,tt,pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ut),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,nt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,fn),D.pixelStorei(D.UNPACK_SKIP_ROWS,zi),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Yt),F===0&&k.generateMipmaps&&D.generateMipmap(Le),ne.unbindTexture()},this.initRenderTarget=function(A){we.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),ne.unbindTexture()},this.resetState=function(){E=0,w=0,T=null,ne.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===qc?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===Ua?"display-p3":"srgb"}}class ps{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ue(e),this.near=t,this.far=i}clone(){return new ps(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Qc extends St{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class __{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ec,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new N;class _a{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=wn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new _a(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Na extends Ni{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let tr;const Br=new N,nr=new N,ir=new N,rr=new Pe,zr=new Pe,ud=new ct,zs=new N,Hr=new N,Hs=new N,vu=new Pe,Mo=new Pe,_u=new Pe;class el extends St{constructor(e=new Na){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new __(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new _a(i,3,0,!1)),tr.setAttribute("uv",new _a(i,2,3,!1))}this.geometry=tr,this.material=e,this.center=new Pe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),ud.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Gs(zs.set(-.5,-.5,0),ir,a,nr,r,s),Gs(Hr.set(.5,-.5,0),ir,a,nr,r,s),Gs(Hs.set(.5,.5,0),ir,a,nr,r,s),vu.set(0,0),Mo.set(1,0),_u.set(1,1);let o=e.ray.intersectTriangle(zs,Hr,Hs,!1,Br);if(o===null&&(Gs(Hr.set(-.5,.5,0),ir,a,nr,r,s),Mo.set(0,1),o=e.ray.intersectTriangle(zs,Hs,Hr,!1,Br),o===null))return;const c=e.ray.origin.distanceTo(Br);c<e.near||c>e.far||t.push({distance:c,point:Br.clone(),uv:hn.getInterpolation(Br,zs,Hr,Hs,vu,Mo,_u,new Pe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Gs(n,e,t,i,r,s){rr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(zr.x=s*rr.x-r*rr.y,zr.y=r*rr.x+s*rr.y):zr.copy(rr),n.copy(e),n.x+=zr.x,n.y+=zr.y,n.applyMatrix4(ud)}class hd extends Dt{constructor(e=null,t=1,i=1,r,s,a,o,c,l=Lt,u=Lt,h,d){super(null,a,o,c,l,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class yu extends nn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sr=new ct,xu=new ct,Vs=[],wu=new Oi,y_=new ct,Gr=new fe,Vr=new Pr;class x_ extends fe{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,y_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),wu.copy(e.boundingBox).applyMatrix4(sr),this.boundingBox.union(wu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,sr),Vr.copy(e.boundingSphere).applyMatrix4(sr),this.boundingSphere.union(Vr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Gr.geometry=this.geometry,Gr.material=this.material,Gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vr.copy(this.boundingSphere),Vr.applyMatrix4(i),e.ray.intersectsSphere(Vr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,sr),xu.multiplyMatrices(i,sr),Gr.matrixWorld=xu,Gr.raycast(e,Vs);for(let a=0,o=Vs.length;a<o;a++){const c=Vs[a];c.instanceId=s,c.object=this,t.push(c)}Vs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new hd(new Float32Array(r*this.count),r,this.count,Da,Ln));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;s[c]=o,s.set(i,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class dd extends Ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bu=new ct,Tc=new Zh,Ws=new Pr,js=new N;class w_ extends St{constructor(e=new Ht,t=new dd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere),Ws.applyMatrix4(r),Ws.radius+=s,e.ray.intersectsSphere(Ws)===!1)return;bu.copy(r).invert(),Tc.copy(e.ray).applyMatrix4(bu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,h=i.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,_=f;g<_;g++){const m=l.getX(g);js.fromBufferAttribute(h,m),Su(js,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let g=d,_=f;g<_;g++)js.fromBufferAttribute(h,g),Su(js,g,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Su(n,e,t,i,r,s,a){const o=Tc.distanceSqToPoint(n);if(o<t){const c=new N;Tc.closestPointToPoint(n,c),c.applyMatrix4(i);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ka extends Dt{constructor(e,t,i,r,s,a,o,c,l){super(e,t,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Di extends Ht{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new N,u=new Pe;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=i+h/t*r;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Wt extends Ht{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const _=[],m=i/2;let p=0;x(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ft(h,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function x(){const S=new N,E=new N;let w=0;const T=(t-e)/i;for(let C=0;C<=s;C++){const L=[],v=C/s,b=v*(t-e)+e;for(let U=0;U<=r;U++){const H=U/r,j=H*c+o,V=Math.sin(j),P=Math.cos(j);E.x=b*V,E.y=-v*i+m,E.z=b*P,h.push(E.x,E.y,E.z),S.set(V,T,P).normalize(),d.push(S.x,S.y,S.z),f.push(H,1-v),L.push(g++)}_.push(L)}for(let C=0;C<r;C++)for(let L=0;L<s;L++){const v=_[L][C],b=_[L+1][C],U=_[L+1][C+1],H=_[L][C+1];e>0&&(u.push(v,b,H),w+=3),t>0&&(u.push(b,U,H),w+=3)}l.addGroup(p,w,0),p+=w}function y(S){const E=g,w=new Pe,T=new N;let C=0;const L=S===!0?e:t,v=S===!0?1:-1;for(let U=1;U<=r;U++)h.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;const b=g;for(let U=0;U<=r;U++){const j=U/r*c+o,V=Math.cos(j),P=Math.sin(j);T.x=L*P,T.y=m*v,T.z=L*V,h.push(T.x,T.y,T.z),d.push(0,v,0),w.x=V*.5+.5,w.y=P*.5*v+.5,f.push(w.x,w.y),g++}for(let U=0;U<r;U++){const H=E+U,j=b+U;S===!0?u.push(j,j+1,H):u.push(j+1,j,H),C+=3}l.addGroup(p,C,S===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tl extends Ht{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],a=[];o(r),l(i),u(),this.setAttribute("position",new ft(s,3)),this.setAttribute("normal",new ft(s.slice(),3)),this.setAttribute("uv",new ft(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const y=new N,S=new N,E=new N;for(let w=0;w<t.length;w+=3)f(t[w+0],y),f(t[w+1],S),f(t[w+2],E),c(y,S,E,x)}function c(x,y,S,E){const w=E+1,T=[];for(let C=0;C<=w;C++){T[C]=[];const L=x.clone().lerp(S,C/w),v=y.clone().lerp(S,C/w),b=w-C;for(let U=0;U<=b;U++)U===0&&C===w?T[C][U]=L:T[C][U]=L.clone().lerp(v,U/b)}for(let C=0;C<w;C++)for(let L=0;L<2*(w-C)-1;L++){const v=Math.floor(L/2);L%2===0?(d(T[C][v+1]),d(T[C+1][v]),d(T[C][v])):(d(T[C][v+1]),d(T[C+1][v+1]),d(T[C+1][v]))}}function l(x){const y=new N;for(let S=0;S<s.length;S+=3)y.x=s[S+0],y.y=s[S+1],y.z=s[S+2],y.normalize().multiplyScalar(x),s[S+0]=y.x,s[S+1]=y.y,s[S+2]=y.z}function u(){const x=new N;for(let y=0;y<s.length;y+=3){x.x=s[y+0],x.y=s[y+1],x.z=s[y+2];const S=m(x)/2/Math.PI+.5,E=p(x)/Math.PI+.5;a.push(S,1-E)}g(),h()}function h(){for(let x=0;x<a.length;x+=6){const y=a[x+0],S=a[x+2],E=a[x+4],w=Math.max(y,S,E),T=Math.min(y,S,E);w>.9&&T<.1&&(y<.2&&(a[x+0]+=1),S<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function d(x){s.push(x.x,x.y,x.z)}function f(x,y){const S=x*3;y.x=e[S+0],y.y=e[S+1],y.z=e[S+2]}function g(){const x=new N,y=new N,S=new N,E=new N,w=new Pe,T=new Pe,C=new Pe;for(let L=0,v=0;L<s.length;L+=9,v+=6){x.set(s[L+0],s[L+1],s[L+2]),y.set(s[L+3],s[L+4],s[L+5]),S.set(s[L+6],s[L+7],s[L+8]),w.set(a[v+0],a[v+1]),T.set(a[v+2],a[v+3]),C.set(a[v+4],a[v+5]),E.copy(x).add(y).add(S).divideScalar(3);const b=m(E);_(w,v+0,x,b),_(T,v+2,y,b),_(C,v+4,S,b)}}function _(x,y,S,E){E<0&&x.x===1&&(a[y]=x.x-1),S.x===0&&S.z===0&&(a[y]=E/2/Math.PI+.5)}function m(x){return Math.atan2(x.z,-x.x)}function p(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.vertices,e.indices,e.radius,e.details)}}class En extends tl{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new En(e.radius,e.detail)}}class Dn extends Ht{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new N,d=new N,f=[],g=[],_=[],m=[];for(let p=0;p<=i;p++){const x=[],y=p/i;let S=0;p===0&&a===0?S=.5/t:p===i&&c===Math.PI&&(S=-.5/t);for(let E=0;E<=t;E++){const w=E/t;h.x=-e*Math.cos(r+w*s)*Math.sin(a+y*o),h.y=e*Math.cos(a+y*o),h.z=e*Math.sin(r+w*s)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),m.push(w+S,1-y),x.push(l++)}u.push(x)}for(let p=0;p<i;p++)for(let x=0;x<t;x++){const y=u[p][x+1],S=u[p][x],E=u[p+1][x],w=u[p+1][x+1];(p!==0||a>0)&&f.push(y,S,w),(p!==i-1||c<Math.PI)&&f.push(S,E,w)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(_,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tn extends Ht{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],l=[],u=new N,h=new N,d=new N;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){const _=g/r*s,m=f/i*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/r),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){const _=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,x=(r+1)*f+g;a.push(_,m,x),a.push(m,p,x)}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tn(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class b_ extends _t{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class S_ extends Ni{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qh,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class nl extends St{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class il extends nl{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const To=new ct,Eu=new N,Mu=new N;class E_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pe(512,512),this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yc,this._frameExtents=new Pe(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),Mu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mu),t.updateMatrixWorld(),To.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(To)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class M_ extends E_{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ya extends nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(St.DEFAULT_UP),this.updateMatrix(),this.target=new St,this.shadow=new M_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class rl extends nl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class T_{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Tu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Tu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Tu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bc);const Wr=new N;function on(n,e,t,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Wr.copy(e),Wr[i]=0,Wr.normalize();const l=.5*a/(a+o),u=1-Wr.angleTo(n)/c;return Math.sign(Wr[t])===1?u*l:o/(a+o)+l+l*(1-u)}class A_ extends In{constructor(e=1,t=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;const o=new N,c=new N,l=new N(e,t,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,f=u.length/6,g=new N,_=.5/r;for(let m=0,p=0;m<u.length;m+=3,p+=2)switch(o.fromArray(u,m),c.copy(o),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),u[m+0]=l.x*Math.sign(o.x)+c.x*s,u[m+1]=l.y*Math.sign(o.y)+c.y*s,u[m+2]=l.z*Math.sign(o.z)+c.z*s,h[m+0]=c.x,h[m+1]=c.y,h[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=on(g,c,"z","y",s,i),d[p+1]=1-on(g,c,"y","z",s,t);break;case 1:g.set(-1,0,0),d[p+0]=1-on(g,c,"z","y",s,i),d[p+1]=1-on(g,c,"y","z",s,t);break;case 2:g.set(0,1,0),d[p+0]=1-on(g,c,"x","z",s,e),d[p+1]=on(g,c,"z","x",s,i);break;case 3:g.set(0,-1,0),d[p+0]=1-on(g,c,"x","z",s,e),d[p+1]=1-on(g,c,"z","x",s,i);break;case 4:g.set(0,0,1),d[p+0]=1-on(g,c,"x","y",s,e),d[p+1]=1-on(g,c,"y","x",s,t);break;case 5:g.set(0,0,-1),d[p+0]=on(g,c,"x","y",s,e),d[p+1]=1-on(g,c,"y","x",s,t);break}}}const Au=new Uint8Array([90,150,210,255]),ms=new hd(Au,Au.length,1,Da);ms.minFilter=Lt;ms.magFilter=Lt;ms.generateMipmaps=!1;ms.needsUpdate=!0;const fd=new ot({color:1318975,side:It});fd.userData.shared=!0;function Qe(n,e={}){return new S_({color:n,gradientMap:ms,...e})}const pd=1;function en(n){n.layers.enable(pd)}function Xn(n,e,t,i=Math.min(n,e,t)*.16,r=3){return new A_(n,e,t,r,i)}function R_(n,e=1.08){const t=new fe(n.geometry,fd);return t.scale.setScalar(e),n.add(t),t}const qs=[[16748146,15885898],[6276848,3582168],[6280858,3719304],[16766046,15906108],[12558847,10518512],[16749756,15755420]];function Ru(n,e,t,i,r,s){return{min:{x:n-i/2,y:e-r/2,z:t-s/2},max:{x:n+i/2,y:e+r/2,z:t+s/2}}}const md=6;function C_(){const n=new gt,e=[],t=[],i=[];let r=0;function s(x,y,S,E,w,T,C){const[L,v]=C??qs[r++%qs.length],b=new fe(Xn(E,w,T,.14,2),Qe(L));b.position.set(x,y,S),b.castShadow=!0,b.receiveShadow=!0,n.add(b);const U=new fe(Xn(E*.98,.2,T*.98,.08,2),Qe(v));return U.position.set(x,y+w/2-.02,S),U.receiveShadow=!0,n.add(U),e.push(Ru(x,y,S,E,w,T)),b}const a={x:0,y:2,z:0};s(0,-.5,0,10,1,10,[9359848,7323616]);let o=4.5,c=0;for(let x=0;x<md;x++){const y=3+x%2;for(let L=0;L<y;L++){const v=Math.max(2.6,3.4-x*.16),b=v*.5+1.5+x*.25;o+=b,c+=Math.min(.34,.26+x*.02);const U=x<2?0:(L%2===0?-1:1)*Math.min(.7,.3+x*.06);s(U,c-.5,o,v,1,v)}o+=2.6,c+=.28,s(0,c-.5,o,5,1,5,[16773560,16769162]);const S=new fe(new Tn(1.5,.16,12,32),new ot({color:4645787}));S.rotation.x=Math.PI/2,S.position.set(0,c+.9,o),en(S),n.add(S);const E=new fe(new Tn(1.5,.32,12,32),new ot({color:4645787,transparent:!0,opacity:.25,blending:ns,depthWrite:!1}));E.rotation.x=Math.PI/2,E.position.copy(S.position),en(E),n.add(E),t.push({pos:{x:0,y:c+1,z:o},radius:2.2,index:x,triggered:!1,ring:S,halo:E,baseY:c+.9});const w=o+2.6,T=qs[x%qs.length][0],C=new fe(Xn(6,4,.6,.2,2),Qe(T,{transparent:!0,opacity:.55,emissive:new Ue(T),emissiveIntensity:.5}));C.position.set(0,c+1.5,w),en(C),n.add(C),i.push({index:x,mesh:C,aabb:Ru(0,c+1.5,w,6,4,.6),open:!1}),o=w+.6}o+=3.2,c+=.45,s(0,c-.5,o,6,1,6,[16765503,15904800]);const l=new fe(new Tn(1.7,.12,12,36),new ot({color:16765503}));l.rotation.x=Math.PI/2,l.position.set(0,c+.06,o),en(l),n.add(l);const u=new gt;u.position.set(0,c,o);const h=new fe(new Wt(.06,.06,2.2,10),Qe(15921908));h.position.y=1.1,u.add(h);const d=new $n(.95,.6,10,4),f=new fe(d,new ot({color:16735596,side:$t}));f.position.set(.5,1.85,0),u.add(f),n.add(u);const g=d.attributes.position.array.slice(),_={pos:{x:0,y:c+1,z:o},radius:2.4,flag:u,flagGeo:d,flagBase:g,inlay:l};function m(){const x=i.filter(y=>!y.open).map(y=>y.aabb);return e.concat(x)}function p(x){const y=i[x];y&&!y.open&&(y.open=!0)}return{group:n,platforms:e,checkpoints:t,gates:i,goal:_,spawn:a,getColliders:m,openGate:p}}const xn={x:.4,y:.7,z:.4},P_=6.5,L_=26,I_=11,D_=-25,U_=.55;function sl(n={x:0,y:2,z:0}){return{pos:{...n},vel:{x:0,y:0,z:0},grounded:!1,facing:0,anim:"idle",spawn:{...n},maxJumps:1,jumpsUsed:0,speedMult:1}}function gd(n,e){return n.x+xn.x>e.min.x&&n.x-xn.x<e.max.x&&n.y+xn.y>e.min.y&&n.y-xn.y<e.max.y&&n.z+xn.z>e.min.z&&n.z-xn.z<e.max.z}function O_(n,e,t,i){const r={x:n.pos.x,y:e,z:n.pos.z};for(const s of t)if(s!==i&&gd(r,s))return!1;return!0}function Ao(n,e,t,i){n.pos[e]+=t;let r=!1;for(const s of i)if(gd(n.pos,s))if(e==="y")n.vel.y<=0?(n.pos.y=s.max.y+xn.y,r=!0):n.pos.y=s.min.y-xn.y,n.vel.y=0;else{const a=n.pos.y-xn.y,o=s.max.y-a,c=s.max.y+xn.y;if(o>.001&&o<=U_&&O_(n,c,i,s))n.pos.y=c,n.vel.y<0&&(n.vel.y=0),r=!0;else{const l=xn[e];t>0?n.pos[e]=s.min[e]-l:t<0&&(n.pos[e]=s.max[e]+l),n.vel[e]=0}}return r}function al(n,e,t,i){e=Math.min(e,.05);const r=t.moveX||0,s=t.moveZ||0,a=Math.hypot(r,s),o=a>1?r/a:r,c=a>1?s/a:s,l=P_*(n.speedMult||1);n.vel.x=o*l,n.vel.z=c*l,a>.05&&(n.facing=Math.atan2(o,c)),n.grounded&&(n.jumpsUsed=0);const u=n.maxJumps||1;t.jump&&(n.jumpsUsed||0)<u&&(n.vel.y=I_,n.jumpsUsed=(n.jumpsUsed||0)+1,n.grounded=!1),n.vel.y-=L_*e;const h=Ao(n,"x",n.vel.x*e,i),d=Ao(n,"z",n.vel.z*e,i),f=Ao(n,"y",n.vel.y*e,i);return n.grounded=h||d||f,n.grounded?a>.05?n.anim="run":n.anim="idle":n.anim="jump",{fell:n.pos.y<D_}}function $r(n,e=n.spawn){n.pos={...e},n.vel={x:0,y:0,z:0},n.grounded=!1,n.anim="idle"}const Cu=[6080240,16748146,6280858,16766046,12558847,16749756,16739179,5431492];function ol(n){let e=0;for(let t=0;t<n.length;t++)e=e*31+n.charCodeAt(t)>>>0;return Cu[e%Cu.length]}function Xs(n,e,t,i,r=!0){const s=new fe(Xn(n,e,t),Qe(i));return s.castShadow=!0,r&&R_(s),s}function Fa(n=6080240,e=""){const t=new gt,i=16767408,r=3030899,s=1780306,a=Xs(.8,.84,.48,n);t.add(a);const o=new fe(Xn(.5,.36,.06),Qe(Pu(n,.16)));o.position.set(0,-.05,.24),t.add(o);const c=Xs(.66,.66,.66,i);c.position.y=.82,t.add(c);const l=new ot({color:s}),u=new Dn(.075,12,12),h=new Dn(.024,8,8),d=new ot({color:16777215});for(const L of[-.16,.16]){const v=new fe(u,l);v.scale.z=.55,v.position.set(L,.86,.32),t.add(v);const b=new fe(h,d);b.position.set(L-.03,.9,.36),t.add(b)}const f=new fe(new Tn(.12,.024,8,16,Math.PI),l);f.rotation.z=Math.PI,f.position.set(0,.74,.33),t.add(f);const g=new ot({color:16752324,transparent:!0,opacity:.5});for(const L of[-.24,.24]){const v=new fe(new Di(.07,16),g);v.position.set(L,.74,.325),t.add(v)}function _(L,v,b,U,H,j){const V=new gt;V.position.set(H,j,0);const P=Xs(L,v,b,U);return P.position.y=-v/2,V.add(P),t.add(V),V}const m=_(.24,.74,.24,n,-.54,.36),p=_(.24,.74,.24,n,.54,.36),x=_(.3,.7,.3,r,-.2,-.42),y=_(.3,.7,.3,r,.2,-.42);for(const L of[x,y]){const v=Xs(.34,.18,.42,1911635);v.position.set(0,-.74,.06),L.add(v)}const S=[a,m.children[0],p.children[0],o];let E=null;e&&(E=N_(e),E.position.set(0,1.55,0),t.add(E));let w=0;function T(L,v,b){if(w+=v,L!=="cheer"&&(t.rotation.z=0),L==="run"){const U=Math.sin(w*12)*.95;x.rotation.x=U,y.rotation.x=-U,m.rotation.x=-U,p.rotation.x=U,a.position.y=Math.abs(Math.sin(w*12))*.05}else if(L==="jump")x.rotation.x=Dr.lerp(x.rotation.x,-.5,.6),y.rotation.x=Dr.lerp(y.rotation.x,.4,.6),m.rotation.x=Dr.lerp(m.rotation.x,-2.3,.6),p.rotation.x=Dr.lerp(p.rotation.x,-2.3,.6),a.position.y=0;else if(L==="cheer"){m.rotation.x=-2.7,p.rotation.x=-2.7;const U=Math.abs(Math.sin(w*10));x.rotation.x=0,y.rotation.x=0,a.position.y=U*.12,t.rotation.z=Math.sin(w*16)*.05}else{t.rotation.z=0;const U=.15;for(const H of[x,y,m,p])H.rotation.x=Dr.lerp(H.rotation.x,0,U);a.position.y=Math.sin(w*2)*.03}E&&b&&E.quaternion.copy(b.quaternion)}function C(L){for(const v of S)v.material.color.set(v===o?Pu(L,.16):L)}return{root:t,update:T,setBodyColor:C}}function Pu(n,e){const t=new Ue(n);return t.lerp(new Ue(16777215),e),t.getHex()}function N_(n){const e=document.createElement("canvas");e.width=512,e.height=128;const t=e.getContext("2d");t.fillStyle="rgba(20,32,63,0.8)",Lu(t,12,16,488,96,30),t.fill(),t.lineWidth=4,t.strokeStyle="rgba(255,255,255,0.22)",Lu(t,16,20,480,88,28),t.stroke(),t.fillStyle="#fff",t.font="bold 58px 'Baloo 2', 'Trebuchet MS', sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n.slice(0,12),256,66);const i=new ka(e);i.colorSpace=Ot,i.anisotropy=4;const r=new el(new Na({map:i,transparent:!0,depthTest:!1}));return r.scale.set(1.8,.45,1),r}function Lu(n,e,t,i,r,s){n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function ei(){return"ontouchstart"in window||navigator.maxTouchPoints>0||window.matchMedia("(pointer: coarse)").matches}function cl(){const n=new Set;let e=!1,t=!0;const i=_=>{const m=_.key.toLowerCase();["arrowup","arrowdown","arrowleft","arrowright"," "].includes(m)&&_.preventDefault(),n.add(m),m===" "&&(e=!0)},r=_=>n.delete(_.key.toLowerCase());window.addEventListener("keydown",i),window.addEventListener("keyup",r);const s={active:!1,id:null,x:0,y:0},a=document.getElementById("joystick"),o=document.getElementById("joystick-knob"),c=document.getElementById("jump-btn"),l=50;function u(_,m){o&&(o.style.transform=`translate(${_}px, ${m}px)`)}function h(_){const m=_.changedTouches?_.changedTouches[0]:_;s.active=!0,s.id=m.identifier??"mouse",s.origin={x:m.clientX,y:m.clientY},_.preventDefault()}function d(_){if(!s.active)return;const p=(_.changedTouches?[..._.changedTouches]:[_]).find(E=>(E.identifier??"mouse")===s.id);if(!p)return;let x=p.clientX-s.origin.x,y=p.clientY-s.origin.y;const S=Math.hypot(x,y);S>l&&(x=x/S*l,y=y/S*l),u(x,y),s.x=x/l,s.y=-y/l,_.preventDefault()}function f(_){((_.changedTouches?[..._.changedTouches]:[_]).some(p=>(p.identifier??"mouse")===s.id)||!_.changedTouches)&&(s.active=!1,s.x=0,s.y=0,u(0,0))}a&&(a.addEventListener("touchstart",h,{passive:!1}),a.addEventListener("touchmove",d,{passive:!1}),a.addEventListener("touchend",f),a.addEventListener("touchcancel",f)),c&&c.addEventListener("touchstart",_=>{e=!0,_.preventDefault()},{passive:!1});function g(){if(!t)return e=!1,{fwd:0,right:0,jump:!1};let _=0,m=0;(n.has("w")||n.has("arrowup"))&&(_+=1),(n.has("s")||n.has("arrowdown"))&&(_-=1),(n.has("d")||n.has("arrowright"))&&(m+=1),(n.has("a")||n.has("arrowleft"))&&(m-=1),_+=s.y,m+=s.x,_=Math.max(-1,Math.min(1,_)),m=Math.max(-1,Math.min(1,m));const p=e;return e=!1,{fwd:_,right:m,jump:p}}return{getInput:g,setEnabled(_){t=_,_||(s.active=!1,s.x=0,s.y=0,u(0,0))},destroy(){window.removeEventListener("keydown",i),window.removeEventListener("keyup",r)}}}function ll(n,e={}){const t=new ln(60,n,.1,500),r={yaw:0},s=e.dist??9,a=e.height??5.5,o=new N,c=new N;function l(h,d){o.set(h.x-Math.sin(r.yaw)*s,h.y+a,h.z-Math.cos(r.yaw)*s);const f=1-Math.pow(.001,d);t.position.lerp(o,f),c.set(h.x,h.y+1,h.z),t.lookAt(c)}function u(h){t.position.set(h.x-Math.sin(r.yaw)*s,h.y+a,h.z-Math.cos(r.yaw)*s),t.lookAt(h.x,h.y+1,h.z)}return{cam:t,state:r,follow:l,snap:u}}function ul(n,e,t){const i=Math.sin(t),r=Math.cos(t),s=n*i-e*r,a=n*r+e*i;return{x:s,z:a}}function vd(n){const e=document.getElementById(n);if(!e)return;const t=document.documentElement,i=!!(t.requestFullscreen||t.webkitRequestFullscreen);(window.matchMedia("(display-mode: fullscreen)").matches||window.matchMedia("(display-mode: standalone)").matches||window.navigator.standalone===!0)&&e.classList.add("hidden");function s(){return document.fullscreenElement||document.webkitFullscreenElement}async function a(){try{t.requestFullscreen?await t.requestFullscreen():t.webkitRequestFullscreen&&t.webkitRequestFullscreen()}catch{}try{screen.orientation&&screen.orientation.lock&&await screen.orientation.lock("landscape")}catch{}}async function o(){try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}catch{}}e.addEventListener("click",()=>{i?s()?o():a():document.getElementById("fs-tip")?.classList.remove("hidden")}),document.getElementById("btn-tip-close")?.addEventListener("click",()=>{document.getElementById("fs-tip")?.classList.add("hidden")})}const mi=[{e:"🐶",name:"Dog",cat:"animal"},{e:"🐱",name:"Cat",cat:"animal"},{e:"🦁",name:"Lion",cat:"animal"},{e:"🐘",name:"Elephant",cat:"animal"},{e:"🐸",name:"Frog",cat:"animal"},{e:"🐝",name:"Bee",cat:"animal"},{e:"🐢",name:"Turtle",cat:"animal"},{e:"🐠",name:"Fish",cat:"animal"},{e:"🦆",name:"Duck",cat:"animal"},{e:"🦋",name:"Butterfly",cat:"animal"},{e:"🐧",name:"Penguin",cat:"animal"},{e:"🐴",name:"Horse",cat:"animal"},{e:"🍎",name:"Apple",cat:"food"},{e:"🍌",name:"Banana",cat:"food"},{e:"🍓",name:"Strawberry",cat:"food"},{e:"🍕",name:"Pizza",cat:"food"},{e:"🍦",name:"Ice cream",cat:"food"},{e:"🥕",name:"Carrot",cat:"food"},{e:"🍪",name:"Cookie",cat:"food"},{e:"🍉",name:"Watermelon",cat:"food"},{e:"🌽",name:"Corn",cat:"food"},{e:"🍇",name:"Grapes",cat:"food"},{e:"🚗",name:"Car",cat:"vehicle"},{e:"🚌",name:"Bus",cat:"vehicle"},{e:"✈️",name:"Airplane",cat:"vehicle"},{e:"🚀",name:"Rocket",cat:"vehicle"},{e:"🚲",name:"Bike",cat:"vehicle"},{e:"🚂",name:"Train",cat:"vehicle"},{e:"⛵",name:"Boat",cat:"vehicle"},{e:"🚒",name:"Fire truck",cat:"vehicle"},{e:"🌳",name:"Tree",cat:"nature"},{e:"🌸",name:"Flower",cat:"nature"},{e:"☀️",name:"Sun",cat:"nature"},{e:"🌙",name:"Moon",cat:"nature"},{e:"⭐",name:"Star",cat:"nature"},{e:"🌈",name:"Rainbow",cat:"nature"},{e:"❄️",name:"Snowflake",cat:"nature"},{e:"🍄",name:"Mushroom",cat:"nature"},{e:"⚽",name:"Soccer ball",cat:"thing"},{e:"🎈",name:"Balloon",cat:"thing"},{e:"🎁",name:"Present",cat:"thing"},{e:"🪁",name:"Kite",cat:"thing"},{e:"🧸",name:"Teddy bear",cat:"thing"},{e:"🎸",name:"Guitar",cat:"thing"},{e:"🔑",name:"Key",cat:"thing"},{e:"⏰",name:"Clock",cat:"thing"}],k_={animal:"animal",food:"food you can eat",vehicle:"thing that goes",nature:"thing in nature",thing:"toy or object"},xa=[{topic:"Reading",prompt:"Which word means a baby dog?",choices:["Puppy","Kitten","Calf","Chick"],correctIndex:0,minLevel:0},{topic:"Reading",prompt:"Which word is spelled correctly?",choices:["Frend","Friend","Freind","Frynd"],correctIndex:1,minLevel:0},{topic:"Reading",prompt:"What is the opposite of 'hot'?",choices:["Warm","Cold","Fast","Big"],correctIndex:1,minLevel:0},{topic:"Reading",prompt:"Which word rhymes with 'cat'?",choices:["Dog","Hat","Cup","Sun"],correctIndex:1,minLevel:0},{topic:"Reading",prompt:"What is the opposite of 'happy'?",choices:["Sad","Glad","Funny","Tall"],correctIndex:0,minLevel:0},{topic:"Reading",prompt:"Which word means 'very big'?",choices:["Tiny","Huge","Soft","Slow"],correctIndex:1,minLevel:0},{topic:"Reading",prompt:"Which word is spelled correctly?",choices:["Becuase","Because","Becuse","Becouse"],correctIndex:1,minLevel:1},{topic:"Reading",prompt:"Which word is plural (more than one)?",choices:["Cat","Dogs","House","Tree"],correctIndex:1,minLevel:1},{topic:"Science",prompt:"What do plants need to grow?",choices:["Candy","Sunlight","Toys","Rocks"],correctIndex:1,minLevel:0},{topic:"Science",prompt:"How many legs does a spider have?",choices:["6","8","4","10"],correctIndex:1,minLevel:0},{topic:"Science",prompt:"What do bees make?",choices:["Milk","Honey","Bread","Silk"],correctIndex:1,minLevel:0},{topic:"Science",prompt:"A caterpillar turns into a...",choices:["Spider","Butterfly","Bird","Fish"],correctIndex:1,minLevel:0},{topic:"Science",prompt:"How many days are in one week?",choices:["5","7","10","12"],correctIndex:1,minLevel:0},{topic:"Science",prompt:"What do we breathe to stay alive?",choices:["Water","Air","Sand","Juice"],correctIndex:1,minLevel:0},{topic:"Science",prompt:"Which season is the coldest?",choices:["Summer","Winter","Spring","Fall"],correctIndex:1,minLevel:0},{topic:"Geography",prompt:"What is the capital of France?",choices:["Paris","Rome","London","Madrid"],correctIndex:0,minLevel:1},{topic:"Geography",prompt:"How many continents are there?",choices:["5","7","10","3"],correctIndex:1,minLevel:1},{topic:"Geography",prompt:"What do we call a very tall hill?",choices:["Valley","Mountain","Field","Cave"],correctIndex:1,minLevel:0},{topic:"Geography",prompt:"Which place is covered in ice and snow?",choices:["Antarctica","Africa","India","Mexico"],correctIndex:0,minLevel:2}];function Qn(n,e){for(let t=n.length-1;t>0;t--){const i=Math.floor(e()*(t+1));[n[t],n[i]]=[n[i],n[t]]}return n}function dn(n,e){return n[Math.floor(e()*n.length)]}function wa(n,e,t,i){const r=n.filter(s=>s!==t);return Qn(r,i),r.slice(0,e)}function ba(n,e){const t=new Set([n]);let i=0;for(;t.size<4&&i++<50;){const s=(1+Math.floor(e()*5))*(e()<.5?-1:1),a=n+s;a>=0&&t.add(a)}let r=n+10;for(;t.size<4;)t.add(r++);return Qn([...t],e)}function _d(n,e){const t=c=>Math.floor(e()*c);let i,r,s,a;if(n>=4&&e()<.6)i=2+t(8),r=2+t(8),s="×",a=i*r;else{const c=n<=1?12:n<=3?25:50;i=1+t(c),r=1+t(c),e()<.5?(s="+",a=i+r):(r>i&&([i,r]=[r,i]),s="−",a=i-r)}const o=ba(a,e);return{topic:"Math",prompt:`${i} ${s} ${r} = ?`,choices:o.map(String),correctIndex:o.indexOf(a)}}function Ba(n,e){const t=dn(mi,e),i=2+Math.floor(e()*(n<=1?5:8)),r=ba(i,e).map(String);return{topic:"Counting",prompt:"How many do you see?",picture:t.e,picCount:i,choices:r,correctIndex:r.indexOf(String(i))}}function F_(n){const e=dn(mi,n),t=wa(mi,3,e,n).map(r=>r.name),i=Qn([e.name,...t],n);return{topic:"Pictures",prompt:"What is this?",picture:e.e,choices:i,correctIndex:i.indexOf(e.name)}}function B_(n){const e=dn(mi,n),t=wa(mi,3,e,n).map(r=>r.e),i=Qn([e.e,...t],n);return{topic:"Pictures",prompt:`Tap the ${e.name.toLowerCase()}!`,choices:i,choiceEmoji:!0,correctIndex:i.indexOf(e.e)}}function z_(n){const e=dn(["animal","food","vehicle","nature","thing"],n),t=mi.filter(o=>o.cat===e),i=mi.filter(o=>o.cat!==e),r=dn(t,n),s=Qn([...i],n).slice(0,3).map(o=>o.e),a=Qn([r.e,...s],n);return{topic:"Pictures",prompt:`Which one is a ${k_[e]}?`,choices:a,choiceEmoji:!0,correctIndex:a.indexOf(r.e)}}const yd=[Ba,F_,B_,z_],xd="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),H_=[{e:"🔵",name:"Circle"},{e:"🟦",name:"Square"},{e:"🔺",name:"Triangle"},{e:"⭐",name:"Star"},{e:"❤️",name:"Heart"},{e:"🔷",name:"Diamond"}],G_=[{e:"🔴",name:"Red"},{e:"🟠",name:"Orange"},{e:"🟡",name:"Yellow"},{e:"🟢",name:"Green"},{e:"🔵",name:"Blue"},{e:"🟣",name:"Purple"}];function Iu(n,e){const t=new Set([n]);for(;t.size<4;)t.add(xd[Math.floor(e()*26)]);return Qn([...t],e)}function wd(n){if(n()<.5){const i=dn(mi,n),r=i.name[0].toUpperCase(),s=Iu(r,n);return{topic:"Letters",prompt:`${i.name} starts with...?`,picture:i.e,choices:s,choiceEmoji:!0,correctIndex:s.indexOf(r)}}const e=xd[Math.floor(n()*26)],t=Iu(e,n);return{topic:"Letters",prompt:`Tap the letter ${e}`,choices:t,choiceEmoji:!0,correctIndex:t.indexOf(e)}}function bd(n,e){const t=e();if(t<.4)return Ba(n,e);if(t<.7){const s=1+Math.floor(e()*18),a=ba(s+1,e).map(String);return{topic:"Numbers",prompt:`What comes after ${s}?`,choices:a,correctIndex:a.indexOf(String(s+1))}}const i=Math.floor(e()*20),r=ba(i,e).map(String);return{topic:"Numbers",prompt:`Tap the number ${i}`,choices:r,choiceEmoji:!0,correctIndex:r.indexOf(String(i))}}function Sd(n,e){if(e()<.5){const s=dn(n,e),a=wa(n,3,s,e).map(c=>c.e),o=Qn([s.e,...a],e);return{prompt:`Tap the ${s.name.toLowerCase()}!`,choices:o,choiceEmoji:!0,correctIndex:o.indexOf(s.e),picture:null}}const t=dn(n,e),i=wa(n,3,t,e).map(s=>s.name),r=Qn([t.name,...i],e);return{prompt:"What is this?",picture:t.e,choices:r,correctIndex:r.indexOf(t.name)}}function Ed(n){return{topic:"Shapes",...Sd(H_,n)}}function Md(n){return{topic:"Colors",...Sd(G_,n)}}function V_(n,e=0,t=Math.random){return n==="letters"?wd(t):n==="numbers"?bd(e,t):n==="shapes"?Ed(t):n==="colors"?Md(t):gs(e,t)}const Ac=[{key:"mix",emoji:"🎲",name:"Everything"},{key:"math",emoji:"➕",name:"Math"},{key:"pictures",emoji:"🖼️",name:"Pictures"},{key:"letters",emoji:"🔤",name:"Letters"},{key:"numbers",emoji:"🔢",name:"Numbers"},{key:"shapes",emoji:"🔷",name:"Shapes"},{key:"colors",emoji:"🎨",name:"Colors"},{key:"reading",emoji:"📖",name:"Reading"},{key:"science",emoji:"🔬",name:"Science"},{key:"geography",emoji:"🌍",name:"World"}];function Ro(n,e,t){const i=xa.filter(a=>a.topic===n&&(a.minLevel||0)<=e),r=i.length?i:xa.filter(a=>a.topic===n);if(!r.length)return gs(e,t);const s=dn(r,t);return{topic:s.topic,prompt:s.prompt,choices:[...s.choices],correctIndex:s.correctIndex}}function Td(n,e=0,t=Math.random){switch(n){case"math":return _d(e,t);case"pictures":{const i=dn(yd,t);return i===Ba?i(e,t):i(t)}case"letters":return wd(t);case"numbers":return bd(e,t);case"shapes":return Ed(t);case"colors":return Md(t);case"reading":return Ro("Reading",e,t);case"science":return Ro("Science",e,t);case"geography":return Ro("Geography",e,t);default:return gs(e,t)}}function gs(n=0,e=Math.random){const t=e();if(t<.5){const s=dn(yd,e);return s===Ba?s(n,e):s(e)}if(t<.8)return _d(n,e);const i=xa.filter(s=>(s.minLevel||0)<=n),r=dn(i.length?i:xa,e);return{topic:r.topic,prompt:r.prompt,choices:[...r.choices],correctIndex:r.correctIndex}}const Du=["🦊","🐼","🐵","🐰","🐯","🐨"];function hl(){const n=document.getElementById("quiz"),e=document.getElementById("quiz-topic"),t=document.getElementById("quiz-picture"),i=document.getElementById("quiz-prompt"),r=document.getElementById("quiz-choices"),s=document.getElementById("quiz-feedback"),a=document.getElementById("quiz-mascot"),o=document.getElementById("quiz-progress-fill");let c=0;function l(u,h={}){return new Promise(d=>{if(e.textContent=u.topic,i.textContent=u.prompt,s.textContent="",s.className="quiz-feedback",r.innerHTML="",u.picture){const _=u.picCount||1;t.textContent=u.picture.repeat(_)}else t.textContent="";a.textContent=Du[c++%Du.length],o&&(o.style.width=`${Math.round((h.progress||0)*100)}%`),u.choices.forEach((_,m)=>{const p=document.createElement("button");p.className="choice"+(u.choiceEmoji?" emoji":""),p.textContent=_,p.addEventListener("click",()=>f(m,p)),r.appendChild(p)}),n.classList.remove("hidden");function f(_,m){const p=[...r.querySelectorAll(".choice")];p.forEach(y=>y.disabled=!0),_===u.correctIndex?(m.classList.add("correct"),s.textContent="Yes! Great job! 🎉",s.className="quiz-feedback good",a.textContent="🎉",setTimeout(()=>g(!0),800)):(m.classList.add("wrong"),p[u.correctIndex].classList.add("correct"),s.textContent="Oops! Try again.",s.className="quiz-feedback bad",a.textContent="🙈",setTimeout(()=>g(!1),1300))}function g(_){n.classList.add("hidden"),d(_)}})}return{ask:l,isOpen:()=>!n.classList.contains("hidden")}}function dl(){const n=document.getElementById("star-count"),e=document.getElementById("coin-count"),t=document.getElementById("level-num"),i=document.getElementById("xp-fill"),r=document.getElementById("flash"),s=document.getElementById("win"),a=document.getElementById("win-star-count"),o=document.getElementById("win-coin-count"),c=document.getElementById("win-level-num"),l=document.getElementById("room-badge"),u=document.getElementById("room-code-label"),h=document.getElementById("player-list"),d=document.getElementById("powerups");let f=0,g=0,_=null;const m=n.parentElement,p=e.parentElement,x=t.closest(".pill");function y(V){V.classList.remove("pop"),V.offsetWidth,V.classList.add("pop")}function S(V){f=V,n.textContent=String(V)}function E(){S(f+1),y(m)}function w(V){g=V,e.textContent=String(V),y(p)}function T(V,P){const z=typeof V=="object"?V.level:V,I=typeof V=="object"?V.frac:P;t.textContent=String(z),i&&(i.style.width=`${Math.round((I||0)*100)}%`)}function C(){y(x)}function L(V){if(d){d.innerHTML="";for(const P of V){const z=document.createElement("div");z.className="pwr-chip",z.textContent=`${P.icon} ${P.label}`,d.appendChild(z)}}}function v(V,P=1200){r.textContent=V,r.classList.add("show"),clearTimeout(_),_=setTimeout(()=>r.classList.remove("show"),P)}function b(V){a.textContent=String(f),o&&(o.textContent=String(g)),c&&(c.textContent=String(V||1)),s.classList.remove("hidden")}function U(){s.classList.add("hidden")}function H(V){u.textContent=V,l.classList.remove("hidden")}function j(V){h.innerHTML="";for(const P of V){const z=document.createElement("div");z.className="player-chip"+(P.speaking?" speaking":"");const I=document.createElement("span");I.className="dot",I.style.background="#"+P.color.toString(16).padStart(6,"0"),z.appendChild(I),z.appendChild(document.createTextNode(P.name)),h.appendChild(z)}}return{setStars:S,addStar:E,setCoins:w,setLevel:T,popLevel:C,setPowerups:L,showFlash:v,showWin:b,hideWin:U,showRoom:H,setPlayers:j,getStars:()=>f,getCoins:()=>g}}let ar=null;function Ad(){if(!ar){const n=window.AudioContext||window.webkitAudioContext;n&&(ar=new n)}return ar&&ar.state==="suspended"&&ar.resume(),ar}function za(){Ad()}function Ct(n,e,t,i="sine",r=.18){const s=Ad();if(!s)return;const a=s.currentTime+e,o=s.createOscillator(),c=s.createGain();o.type=i,o.frequency.setValueAtTime(n,a),c.gain.setValueAtTime(0,a),c.gain.linearRampToValueAtTime(r,a+.01),c.gain.exponentialRampToValueAtTime(1e-4,a+t),o.connect(c).connect(s.destination),o.start(a),o.stop(a+t+.02)}const at={jump(){Ct(420,0,.16,"square",.12),Ct(640,.04,.14,"square",.1)},land(){Ct(180,0,.1,"sine",.1)},correct(){Ct(523,0,.14,"triangle"),Ct(659,.12,.14,"triangle"),Ct(784,.24,.2,"triangle")},wrong(){Ct(220,0,.18,"sawtooth",.1),Ct(160,.14,.22,"sawtooth",.1)},gate(){Ct(500,0,.12,"sine"),Ct(750,.1,.18,"sine")},checkpoint(){Ct(660,0,.1,"triangle",.12)},win(){[523,659,784,1047].forEach((e,t)=>Ct(e,t*.14,.3,"triangle",.2))},coin(){Ct(880,0,.06,"square",.1),Ct(1320,.05,.1,"square",.1)},powerup(){Ct(500,0,.08,"triangle",.14),Ct(700,.07,.08,"triangle",.14),Ct(1e3,.14,.16,"triangle",.16)},levelup(){[659,784,988,1319].forEach((e,t)=>Ct(e,t*.1,.22,"triangle",.18))}};function Ha(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(n);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(n,i[r])&&(t[i[r]]=n[i[r]]);return t}function W_(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{l(i.next(u))}catch(h){a(h)}}function c(u){try{l(i.throw(u))}catch(h){a(h)}}function l(u){u.done?s(u.value):r(u.value).then(o,c)}l((i=i.apply(n,e||[])).next())})}const j_=n=>n?(...e)=>n(...e):(...e)=>fetch(...e);class fl extends Error{constructor(e,t="FunctionsError",i){super(e),this.name=t,this.context=i}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class q_ extends fl{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Uu extends fl{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Ou extends fl{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Rc;(function(n){n.Any="any",n.ApNortheast1="ap-northeast-1",n.ApNortheast2="ap-northeast-2",n.ApSouth1="ap-south-1",n.ApSoutheast1="ap-southeast-1",n.ApSoutheast2="ap-southeast-2",n.CaCentral1="ca-central-1",n.EuCentral1="eu-central-1",n.EuWest1="eu-west-1",n.EuWest2="eu-west-2",n.EuWest3="eu-west-3",n.SaEast1="sa-east-1",n.UsEast1="us-east-1",n.UsWest1="us-west-1",n.UsWest2="us-west-2"})(Rc||(Rc={}));class X_{constructor(e,{headers:t={},customFetch:i,region:r=Rc.Any}={}){this.url=e,this.headers=t,this.region=r,this.fetch=j_(i)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return W_(this,arguments,void 0,function*(t,i={}){var r;let s,a;try{const{headers:o,method:c,body:l,signal:u,timeout:h}=i;let d={},{region:f}=i;f||(f=this.region);const g=new URL(`${this.url}/${t}`);f&&f!=="any"&&(d["x-region"]=f,g.searchParams.set("forceFunctionRegion",f));let _;l&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)?typeof Blob<"u"&&l instanceof Blob||l instanceof ArrayBuffer?(d["Content-Type"]="application/octet-stream",_=l):typeof l=="string"?(d["Content-Type"]="text/plain",_=l):typeof FormData<"u"&&l instanceof FormData?_=l:(d["Content-Type"]="application/json",_=JSON.stringify(l)):l&&typeof l!="string"&&!(typeof Blob<"u"&&l instanceof Blob)&&!(l instanceof ArrayBuffer)&&!(typeof FormData<"u"&&l instanceof FormData)?_=JSON.stringify(l):_=l;let m=u;h&&(a=new AbortController,s=setTimeout(()=>a.abort(),h),u?(m=a.signal,u.addEventListener("abort",()=>a.abort())):m=a.signal);const p=yield this.fetch(g.toString(),{method:c||"POST",headers:Object.assign(Object.assign(Object.assign({},d),this.headers),o),body:_,signal:m}).catch(E=>{throw new q_(E)}),x=p.headers.get("x-relay-error");if(x&&x==="true")throw new Uu(p);if(!p.ok)throw new Ou(p);let y=((r=p.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim(),S;return y==="application/json"?S=yield p.json():y==="application/octet-stream"||y==="application/pdf"?S=yield p.blob():y==="text/event-stream"?S=p:y==="multipart/form-data"?S=yield p.formData():S=yield p.text(),{data:S,error:null,response:p}}catch(o){return{data:null,error:o,response:o instanceof Ou||o instanceof Uu?o.context:void 0}}finally{s&&clearTimeout(s)}})}}const Rd=3,Nu=n=>Math.min(1e3*2**n,3e4),K_=[520,503],Cd=["GET","HEAD","OPTIONS"];var ku=class extends Error{constructor(n){super(n.message),this.name="PostgrestError",this.details=n.details,this.hint=n.hint,this.code=n.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Fu(n,e){return new Promise(t=>{if(e?.aborted){t();return}const i=setTimeout(()=>{e?.removeEventListener("abort",r),t()},n);function r(){clearTimeout(i),t()}e?.addEventListener("abort",r)})}function Y_(n,e,t,i){return!(!i||t>=Rd||!Cd.includes(n)||!K_.includes(e))}var J_=class{constructor(n){var e,t,i,r,s;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=n.method,this.url=n.url,this.headers=new Headers(n.headers),this.schema=n.schema,this.body=n.body,this.shouldThrowOnError=(e=n.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=n.signal,this.isMaybeSingle=(t=n.isMaybeSingle)!==null&&t!==void 0?t:!1,this.shouldStripNulls=(i=n.shouldStripNulls)!==null&&i!==void 0?i:!1,this.urlLengthLimit=(r=n.urlLengthLimit)!==null&&r!==void 0?r:8e3,this.retryEnabled=(s=n.retry)!==null&&s!==void 0?s:!0,n.fetch?this.fetch=n.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(n,e){return this.headers=new Headers(this.headers),this.headers.set(n,e),this}retry(n){return this.retryEnabled=n,this}then(n,e){var t=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const i=this.fetch;let s=(async()=>{let a=0;for(;;){const l={};t.headers.forEach((h,d)=>{l[d]=h}),a>0&&(l["X-Retry-Count"]=String(a));let u;try{u=await i(t.url.toString(),{method:t.method,headers:l,body:JSON.stringify(t.body,(h,d)=>typeof d=="bigint"?d.toString():d),signal:t.signal})}catch(h){if(h?.name==="AbortError"||h?.code==="ABORT_ERR"||!Cd.includes(t.method))throw h;if(t.retryEnabled&&a<Rd){const d=Nu(a);a++,await Fu(d,t.signal);continue}throw h}if(Y_(t.method,u.status,a,t.retryEnabled)){var o,c;const h=(o=(c=u.headers)===null||c===void 0?void 0:c.get("Retry-After"))!==null&&o!==void 0?o:null,d=h!==null?Math.max(0,parseInt(h,10)||0)*1e3:Nu(a);await u.text(),a++,await Fu(d,t.signal);continue}return await t.processResponse(u)}})();return this.shouldThrowOnError||(s=s.catch(a=>{var o;let c="",l="",u="";const h=a?.cause;if(h){var d,f,g,_;const x=(d=h?.message)!==null&&d!==void 0?d:"",y=(f=h?.code)!==null&&f!==void 0?f:"";c=`${(g=a?.name)!==null&&g!==void 0?g:"FetchError"}: ${a?.message}`,c+=`

Caused by: ${(_=h?.name)!==null&&_!==void 0?_:"Error"}: ${x}`,y&&(c+=` (${y})`),h?.stack&&(c+=`
${h.stack}`)}else{var m;c=(m=a?.stack)!==null&&m!==void 0?m:""}const p=this.url.toString().length;return a?.name==="AbortError"||a?.code==="ABORT_ERR"?(u="",l="Request was aborted (timeout or manual cancellation)",p>this.urlLengthLimit&&(l+=`. Note: Your request URL is ${p} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(h?.name==="HeadersOverflowError"||h?.code==="UND_ERR_HEADERS_OVERFLOW")&&(u="",l="HTTP headers exceeded server limits (typically 16KB)",p>this.urlLengthLimit&&(l+=`. Your request URL is ${p} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a?.name)!==null&&o!==void 0?o:"FetchError"}: ${a?.message}`,details:c,hint:l,code:u},data:null,count:null,status:0,statusText:""}})),s.then(n,e)}async processResponse(n){var e=this;let t=null,i=null,r=null,s=n.status,a=n.statusText;if(n.ok){var o,c;if(e.method!=="HEAD"){var l;const d=await n.text();if(d!=="")if(e.headers.get("Accept")==="text/csv")i=d;else if(e.headers.get("Accept")&&(!((l=e.headers.get("Accept"))===null||l===void 0)&&l.includes("application/vnd.pgrst.plan+text")))i=d;else try{i=JSON.parse(d)}catch{if(t={message:d},i=null,e.shouldThrowOnError)throw new ku({message:d,details:"",hint:"",code:""})}}const u=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),h=(c=n.headers.get("content-range"))===null||c===void 0?void 0:c.split("/");u&&h&&h.length>1&&(r=parseInt(h[1])),e.isMaybeSingle&&Array.isArray(i)&&(i.length>1?(t={code:"PGRST116",details:`Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},i=null,r=null,s=406,a="Not Acceptable"):i.length===1?i=i[0]:i=null)}else{const u=await n.text();try{t=JSON.parse(u),Array.isArray(t)&&n.status===404&&(i=[],t=null,s=200,a="OK")}catch{n.status===404&&u===""?(s=204,a="No Content"):t={message:u}}if(t&&e.shouldThrowOnError)throw new ku(t)}return{success:t===null,error:t,data:i,count:r,status:s,statusText:a}}returns(){return this}overrideTypes(){return this}},Z_=class extends J_{throwOnError(){return super.throwOnError()}select(n){let e=!1;const t=(n??"*").split("").map(i=>/\s/.test(i)&&!e?"":(i==='"'&&(e=!e),i)).join("");return this.url.searchParams.set("select",t),this.headers.append("Prefer","return=representation"),this}order(n,{ascending:e=!0,nullsFirst:t,foreignTable:i,referencedTable:r=i}={}){const s=r?`${r}.order`:"order",a=this.url.searchParams.get(s);return this.url.searchParams.set(s,`${a?`${a},`:""}${n}.${e?"asc":"desc"}${t===void 0?"":t?".nullsfirst":".nullslast"}`),this}limit(n,{foreignTable:e,referencedTable:t=e}={}){const i=typeof t>"u"?"limit":`${t}.limit`;return this.url.searchParams.set(i,`${n}`),this}range(n,e,{foreignTable:t,referencedTable:i=t}={}){const r=typeof i>"u"?"offset":`${i}.offset`,s=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(r,`${n}`),this.url.searchParams.set(s,`${e-n+1}`),this}abortSignal(n){return this.signal=n,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:n=!1,verbose:e=!1,settings:t=!1,buffers:i=!1,wal:r=!1,format:s="text"}={}){var a;const o=[n?"analyze":null,e?"verbose":null,t?"settings":null,i?"buffers":null,r?"wal":null].filter(Boolean).join("|"),c=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${s}; for="${c}"; options=${o};`),s==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(n){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${n}`),this}};const Bu=new RegExp("[,()]");var hr=class extends Z_{throwOnError(){return super.throwOnError()}eq(n,e){return this.url.searchParams.append(n,`eq.${e}`),this}neq(n,e){return this.url.searchParams.append(n,`neq.${e}`),this}gt(n,e){return this.url.searchParams.append(n,`gt.${e}`),this}gte(n,e){return this.url.searchParams.append(n,`gte.${e}`),this}lt(n,e){return this.url.searchParams.append(n,`lt.${e}`),this}lte(n,e){return this.url.searchParams.append(n,`lte.${e}`),this}like(n,e){return this.url.searchParams.append(n,`like.${e}`),this}likeAllOf(n,e){return this.url.searchParams.append(n,`like(all).{${e.join(",")}}`),this}likeAnyOf(n,e){return this.url.searchParams.append(n,`like(any).{${e.join(",")}}`),this}ilike(n,e){return this.url.searchParams.append(n,`ilike.${e}`),this}ilikeAllOf(n,e){return this.url.searchParams.append(n,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(n,e){return this.url.searchParams.append(n,`ilike(any).{${e.join(",")}}`),this}regexMatch(n,e){return this.url.searchParams.append(n,`match.${e}`),this}regexIMatch(n,e){return this.url.searchParams.append(n,`imatch.${e}`),this}is(n,e){return this.url.searchParams.append(n,`is.${e}`),this}isDistinct(n,e){return this.url.searchParams.append(n,`isdistinct.${e}`),this}in(n,e){const t=Array.from(new Set(e)).map(i=>typeof i=="string"&&Bu.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(n,`in.(${t})`),this}notIn(n,e){const t=Array.from(new Set(e)).map(i=>typeof i=="string"&&Bu.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(n,`not.in.(${t})`),this}contains(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cs.{${e.join(",")}}`):this.url.searchParams.append(n,`cs.${JSON.stringify(e)}`),this}containedBy(n,e){return typeof e=="string"?this.url.searchParams.append(n,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(n,`cd.{${e.join(",")}}`):this.url.searchParams.append(n,`cd.${JSON.stringify(e)}`),this}rangeGt(n,e){return this.url.searchParams.append(n,`sr.${e}`),this}rangeGte(n,e){return this.url.searchParams.append(n,`nxl.${e}`),this}rangeLt(n,e){return this.url.searchParams.append(n,`sl.${e}`),this}rangeLte(n,e){return this.url.searchParams.append(n,`nxr.${e}`),this}rangeAdjacent(n,e){return this.url.searchParams.append(n,`adj.${e}`),this}overlaps(n,e){return typeof e=="string"?this.url.searchParams.append(n,`ov.${e}`):this.url.searchParams.append(n,`ov.{${e.join(",")}}`),this}textSearch(n,e,{config:t,type:i}={}){let r="";i==="plain"?r="pl":i==="phrase"?r="ph":i==="websearch"&&(r="w");const s=t===void 0?"":`(${t})`;return this.url.searchParams.append(n,`${r}fts${s}.${e}`),this}match(n){return Object.entries(n).filter(([e,t])=>t!==void 0).forEach(([e,t])=>{this.url.searchParams.append(e,`eq.${t}`)}),this}not(n,e,t){return this.url.searchParams.append(n,`not.${e}.${t}`),this}or(n,{foreignTable:e,referencedTable:t=e}={}){const i=t?`${t}.or`:"or";return this.url.searchParams.append(i,`(${n})`),this}filter(n,e,t){return this.url.searchParams.append(n,`${e}.${t}`),this}},$_=class{constructor(n,{headers:e={},schema:t,fetch:i,urlLengthLimit:r=8e3,retry:s}){this.url=n,this.headers=new Headers(e),this.schema=t,this.fetch=i,this.urlLengthLimit=r,this.retry=s}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(n,e){const{head:t=!1,count:i}=e??{},r=t?"HEAD":"GET";let s=!1;const a=(n??"*").split("").map(l=>/\s/.test(l)&&!s?"":(l==='"'&&(s=!s),l)).join(""),{url:o,headers:c}=this.cloneRequestState();return o.searchParams.set("select",a),i&&c.append("Prefer",`count=${i}`),new hr({method:r,url:o,headers:c,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(n,{count:e,defaultToNull:t=!0}={}){var i;const r="POST",{url:s,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),t||a.append("Prefer","missing=default"),Array.isArray(n)){const o=n.reduce((c,l)=>c.concat(Object.keys(l)),[]);if(o.length>0){const c=[...new Set(o)].map(l=>`"${l}"`);s.searchParams.set("columns",c.join(","))}}return new hr({method:r,url:s,headers:a,schema:this.schema,body:n,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(n,{onConflict:e,ignoreDuplicates:t=!1,count:i,defaultToNull:r=!0}={}){var s;const a="POST",{url:o,headers:c}=this.cloneRequestState();if(c.append("Prefer",`resolution=${t?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),i&&c.append("Prefer",`count=${i}`),r||c.append("Prefer","missing=default"),Array.isArray(n)){const l=n.reduce((u,h)=>u.concat(Object.keys(h)),[]);if(l.length>0){const u=[...new Set(l)].map(h=>`"${h}"`);o.searchParams.set("columns",u.join(","))}}return new hr({method:a,url:o,headers:c,schema:this.schema,body:n,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(n,{count:e}={}){var t;const i="PATCH",{url:r,headers:s}=this.cloneRequestState();return e&&s.append("Prefer",`count=${e}`),new hr({method:i,url:r,headers:s,schema:this.schema,body:n,fetch:(t=this.fetch)!==null&&t!==void 0?t:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:n}={}){var e;const t="DELETE",{url:i,headers:r}=this.cloneRequestState();return n&&r.append("Prefer",`count=${n}`),new hr({method:t,url:i,headers:r,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function ss(n){"@babel/helpers - typeof";return ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ss(n)}function Q_(n,e){if(ss(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(ss(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function ey(n){var e=Q_(n,"string");return ss(e)=="symbol"?e:e+""}function ty(n,e,t){return(e=ey(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function zu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ks(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?zu(Object(t),!0).forEach(function(i){ty(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):zu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var ny=class Pd{constructor(e,{headers:t={},schema:i,fetch:r,timeout:s,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(t),this.schemaName=i,this.urlLengthLimit=a;const c=r??globalThis.fetch;s!==void 0&&s>0?this.fetch=(l,u)=>{const h=new AbortController,d=setTimeout(()=>h.abort(),s),f=u?.signal;if(f){if(f.aborted)return clearTimeout(d),c(l,u);const g=()=>{clearTimeout(d),h.abort()};return f.addEventListener("abort",g,{once:!0}),c(l,Ks(Ks({},u),{},{signal:h.signal})).finally(()=>{clearTimeout(d),f.removeEventListener("abort",g)})}return c(l,Ks(Ks({},u),{},{signal:h.signal})).finally(()=>clearTimeout(d))}:this.fetch=c,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new $_(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Pd(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,t={},{head:i=!1,get:r=!1,count:s}={}){var a;let o;const c=new URL(`${this.url}/rpc/${e}`);let l;const u=f=>f!==null&&typeof f=="object"&&(!Array.isArray(f)||f.some(u)),h=i&&Object.values(t).some(u);h?(o="POST",l=t):i||r?(o=i?"HEAD":"GET",Object.entries(t).filter(([f,g])=>g!==void 0).map(([f,g])=>[f,Array.isArray(g)?`{${g.join(",")}}`:`${g}`]).forEach(([f,g])=>{c.searchParams.append(f,g)})):(o="POST",l=t);const d=new Headers(this.headers);return h?d.set("Prefer",s?`count=${s},return=minimal`:"return=minimal"):s&&d.set("Prefer",`count=${s}`),new hr({method:o,url:c,headers:d,schema:this.schemaName,body:l,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class iy{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const t=globalThis;if(typeof globalThis<"u"&&typeof t.WebSocket<"u")return{type:"native",wsConstructor:t.WebSocket};const i=typeof global<"u"?global:void 0;if(i&&typeof i.WebSocket<"u")return{type:"native",wsConstructor:i.WebSocket};if(typeof globalThis<"u"&&typeof t.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&t.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const r=globalThis.process;if(r){const s=r.versions;if(s&&s.node){const a=s.node,o=parseInt(a.replace(/^v/,"").split(".")[0]);return o>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${o} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${o} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const ry="2.108.2",sy=`realtime-js/${ry}`,ay="1.0.0",Ld="2.0.0",oy=Ld,cy=1e4,ly=100,li={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Id={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Cc={connecting:"connecting",closing:"closing",closed:"closed"};class uy{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,t){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return t(this._binaryEncodeUserBroadcastPush(e));let i=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(i))}_binaryEncodeUserBroadcastPush(e){var t;return this._isArrayBuffer((t=e.payload)===null||t===void 0?void 0:t.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var t,i;const r=(i=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&i!==void 0?i:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,r)}_encodeJsonUserBroadcastPush(e){var t,i;const r=(i=(t=e.payload)===null||t===void 0?void 0:t.payload)!==null&&i!==void 0?i:{},a=new TextEncoder().encode(JSON.stringify(r)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,t,i){var r,s;const a=e.topic,o=(r=e.ref)!==null&&r!==void 0?r:"",c=(s=e.join_ref)!==null&&s!==void 0?s:"",l=e.payload.event,u=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},h=Object.keys(u).length===0?"":JSON.stringify(u);if(c.length>255)throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`ref length ${o.length} exceeds maximum of 255`);if(a.length>255)throw new Error(`topic length ${a.length} exceeds maximum of 255`);if(l.length>255)throw new Error(`userEvent length ${l.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`metadata length ${h.length} exceeds maximum of 255`);const d=this.USER_BROADCAST_PUSH_META_LENGTH+c.length+o.length+a.length+l.length+h.length,f=new ArrayBuffer(this.HEADER_LENGTH+d);let g=new DataView(f),_=0;g.setUint8(_++,this.KINDS.userBroadcastPush),g.setUint8(_++,c.length),g.setUint8(_++,o.length),g.setUint8(_++,a.length),g.setUint8(_++,l.length),g.setUint8(_++,h.length),g.setUint8(_++,t),Array.from(c,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(o,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(a,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(l,p=>g.setUint8(_++,p.charCodeAt(0))),Array.from(h,p=>g.setUint8(_++,p.charCodeAt(0)));var m=new Uint8Array(f.byteLength+i.byteLength);return m.set(new Uint8Array(f),0),m.set(new Uint8Array(i),f.byteLength),m.buffer}decode(e,t){if(this._isArrayBuffer(e)){let i=this._binaryDecode(e);return t(i)}if(typeof e=="string"){const i=JSON.parse(e),[r,s,a,o,c]=i;return t({join_ref:r,ref:s,topic:a,event:o,payload:c})}return t({})}_binaryDecode(e){const t=new DataView(e),i=t.getUint8(0),r=new TextDecoder;switch(i){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,t,r)}}_decodeUserBroadcast(e,t,i){const r=t.getUint8(1),s=t.getUint8(2),a=t.getUint8(3),o=t.getUint8(4);let c=this.HEADER_LENGTH+4;const l=i.decode(e.slice(c,c+r));c=c+r;const u=i.decode(e.slice(c,c+s));c=c+s;const h=i.decode(e.slice(c,c+a));c=c+a;const d=e.slice(c,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(i.decode(d)):d,g={type:this.BROADCAST_EVENT,event:u,payload:f};return a>0&&(g.meta=JSON.parse(h)),{join_ref:null,ref:null,topic:l,event:this.BROADCAST_EVENT,payload:g}}_isArrayBuffer(e){var t;return e instanceof ArrayBuffer||((t=e?.constructor)===null||t===void 0?void 0:t.name)==="ArrayBuffer"}_pick(e,t){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([i])=>t.includes(i)))}}var lt;(function(n){n.abstime="abstime",n.bool="bool",n.date="date",n.daterange="daterange",n.float4="float4",n.float8="float8",n.int2="int2",n.int4="int4",n.int4range="int4range",n.int8="int8",n.int8range="int8range",n.json="json",n.jsonb="jsonb",n.money="money",n.numeric="numeric",n.oid="oid",n.reltime="reltime",n.text="text",n.time="time",n.timestamp="timestamp",n.timestamptz="timestamptz",n.timetz="timetz",n.tsrange="tsrange",n.tstzrange="tstzrange"})(lt||(lt={}));const Hu=(n,e,t={})=>{var i;const r=(i=t.skipTypes)!==null&&i!==void 0?i:[];return e?Object.keys(e).reduce((s,a)=>(s[a]=hy(a,n,e,r),s),{}):{}},hy=(n,e,t,i)=>{const r=e.find(o=>o.name===n),s=r?.type,a=t[n];return s&&!i.includes(s)?Dd(s,a):Pc(a)},Dd=(n,e)=>{if(n.charAt(0)==="_"){const t=n.slice(1,n.length);return my(e,t)}switch(n){case lt.bool:return dy(e);case lt.float4:case lt.float8:case lt.int2:case lt.int4:case lt.int8:case lt.numeric:case lt.oid:return fy(e);case lt.json:case lt.jsonb:return py(e);case lt.timestamp:return gy(e);case lt.abstime:case lt.date:case lt.daterange:case lt.int4range:case lt.int8range:case lt.money:case lt.reltime:case lt.text:case lt.time:case lt.timestamptz:case lt.timetz:case lt.tsrange:case lt.tstzrange:return Pc(e);default:return Pc(e)}},Pc=n=>n,dy=n=>{switch(n){case"t":return!0;case"f":return!1;default:return n}},fy=n=>{if(typeof n=="string"){const e=parseFloat(n);if(!Number.isNaN(e))return e}return n},py=n=>{if(typeof n=="string")try{return JSON.parse(n)}catch{return n}return n},my=(n,e)=>{if(typeof n!="string")return n;const t=n.length-1,i=n[t];if(n[0]==="{"&&i==="}"){let s;const a=n.slice(1,t);try{s=JSON.parse("["+a+"]")}catch{s=a?a.split(","):[]}return s.map(o=>Dd(e,o))}return n},gy=n=>typeof n=="string"?n.replace(" ","T"):n,Ud=n=>{const e=new URL(n);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Qr=n=>typeof n=="function"?n:function(){return n},vy=typeof self<"u"?self:null,dr=typeof window<"u"?window:null,Rn=vy||dr||globalThis,_y="2.0.0",yy=1e4,xy=1e3,Pn={connecting:0,open:1,closing:2,closed:3},Xt={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Vn={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Lc={longpoll:"longpoll",websocket:"websocket"},wy={complete:4},Ic="base64url.bearer.phx.",Ys=class{constructor(n,e,t,i){this.channel=n,this.event=e,this.payload=t||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(n){this.timeout=n,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(n,e){return this.hasReceived(n)&&e(this.receivedResp.response),this.recHooks.push({status:n,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:n,response:e,_ref:t}){this.recHooks.filter(i=>i.status===n).forEach(i=>i.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,n=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=n,this.matchReceive(n)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(n){return this.receivedResp&&this.receivedResp.status===n}trigger(n,e){this.channel.trigger(this.refEvent,{status:n,response:e})}},Od=class{constructor(n,e){this.callback=n,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},by=class{constructor(n,e,t){this.state=Xt.closed,this.topic=n,this.params=Qr(e||{}),this.socket=t,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Ys(this,Vn.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Od(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Xt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this.joinPush.receive("error",i=>{this.state=Xt.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Xt.closed,this.socket.remove(this)}),this.onError(i=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.isJoining()&&this.joinPush.reset(),this.state=Xt.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Ys(this,Vn.leave,Qr({}),this.timeout).send(),this.state=Xt.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Vn.reply,(i,r)=>{this.trigger(this.replyEventName(r),i)})}join(n=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=n,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(n=>n.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Xt.closed,this.bindings=[]}onClose(n){this.on(Vn.close,n)}onError(n){return this.on(Vn.error,e=>n(e))}on(n,e){let t=this.bindingRef++;return this.bindings.push({event:n,ref:t,callback:e}),t}off(n,e){this.bindings=this.bindings.filter(t=>!(t.event===n&&(typeof e>"u"||e===t.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(n,e,t=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${n}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let i=new Ys(this,n,function(){return e},t);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}leave(n=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Xt.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Vn.close,"leave")},t=new Ys(this,Vn.leave,Qr({}),n);return t.receive("ok",()=>e()).receive("timeout",()=>e()),t.send(),this.canPush()||t.trigger("ok",{}),t}onMessage(n,e,t){return e}filterBindings(n,e,t){return!0}isMember(n,e,t,i){return this.topic!==n?!1:i&&i!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:n,event:e,payload:t,joinRef:i}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(n=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Xt.joining,this.joinPush.resend(n))}trigger(n,e,t,i){let r=this.onMessage(n,e,t,i);if(e&&!r)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let s=this.bindings.filter(a=>a.event===n&&this.filterBindings(a,e,t));for(let a=0;a<s.length;a++)s[a].callback(r,t,i||this.joinRef())}replyEventName(n){return`chan_reply_${n}`}isClosed(){return this.state===Xt.closed}isErrored(){return this.state===Xt.errored}isJoined(){return this.state===Xt.joined}isJoining(){return this.state===Xt.joining}isLeaving(){return this.state===Xt.leaving}},Sa=class{static request(n,e,t,i,r,s,a){if(Rn.XDomainRequest){let o=new Rn.XDomainRequest;return this.xdomainRequest(o,n,e,i,r,s,a)}else if(Rn.XMLHttpRequest){let o=new Rn.XMLHttpRequest;return this.xhrRequest(o,n,e,t,i,r,s,a)}else{if(Rn.fetch&&Rn.AbortController)return this.fetchRequest(n,e,t,i,r,s,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(n,e,t,i,r,s,a){let o={method:n,headers:t,body:i},c=null;return r&&(c=new AbortController,setTimeout(()=>c.abort(),r),o.signal=c.signal),Rn.fetch(e,o).then(l=>l.text()).then(l=>this.parseJSON(l)).then(l=>a&&a(l)).catch(l=>{l.name==="AbortError"&&s?s():a&&a(null)}),c}static xdomainRequest(n,e,t,i,r,s,a){return n.timeout=r,n.open(e,t),n.onload=()=>{let o=this.parseJSON(n.responseText);a&&a(o)},s&&(n.ontimeout=s),n.onprogress=()=>{},n.send(i),n}static xhrRequest(n,e,t,i,r,s,a,o){n.open(e,t,!0),n.timeout=s;for(let[c,l]of Object.entries(i))n.setRequestHeader(c,l);return n.onerror=()=>o&&o(null),n.onreadystatechange=()=>{if(n.readyState===wy.complete&&o){let c=this.parseJSON(n.responseText);o(c)}},a&&(n.ontimeout=a),n.send(r),n}static parseJSON(n){if(!n||n==="")return null;try{return JSON.parse(n)}catch{return console&&console.log("failed to parse JSON response",n),null}}static serialize(n,e){let t=[];for(var i in n){if(!Object.prototype.hasOwnProperty.call(n,i))continue;let r=e?`${e}[${i}]`:i,s=n[i];typeof s=="object"?t.push(this.serialize(s,r)):t.push(encodeURIComponent(r)+"="+encodeURIComponent(s))}return t.join("&")}static appendParams(n,e){if(Object.keys(e).length===0)return n;let t=n.match(/\?/)?"&":"?";return`${n}${t}${this.serialize(e)}`}},Sy=n=>{let e="",t=new Uint8Array(n),i=t.byteLength;for(let r=0;r<i;r++)e+=String.fromCharCode(t[r]);return btoa(e)},or=class{constructor(n,e){e&&e.length===2&&e[1].startsWith(Ic)&&(this.authToken=atob(e[1].slice(Ic.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(n),this.readyState=Pn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(n){return n.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Lc.websocket),"$1/"+Lc.longpoll)}endpointURL(){return Sa.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(n,e,t){this.close(n,e,t),this.readyState=Pn.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Pn.open||this.readyState===Pn.connecting}poll(){const n={Accept:"application/json"};this.authToken&&(n["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",n,null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:i,messages:r}=e;if(t===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=i}else t=0;switch(t){case 200:r.forEach(s=>{setTimeout(()=>this.onmessage({data:s}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Pn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${t}`)}})}send(n){typeof n!="string"&&(n=Sy(n)),this.currentBatch?this.currentBatch.push(n):this.awaitingBatchAck?this.batchBuffer.push(n):(this.currentBatch=[n],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(n){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},n.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(n,e,t){for(let r of this.reqs)r.abort();this.readyState=Pn.closed;let i=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:n,reason:e,wasClean:t});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",i)):this.onclose(i)}ajax(n,e,t,i,r){let s,a=()=>{this.reqs.delete(s),i()};s=Sa.request(n,this.endpointURL(),e,t,this.timeout,a,o=>{this.reqs.delete(s),this.isActive()&&r(o)}),this.reqs.add(s)}},Ey=class Xr{constructor(e,t={}){let i=t.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(i.state,r=>{let{onJoin:s,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Xr.syncState(this.state,r,s,a),this.pendingDiffs.forEach(c=>{this.state=Xr.syncDiff(this.state,c,s,a)}),this.pendingDiffs=[],o()}),this.channel.on(i.diff,r=>{let{onJoin:s,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=Xr.syncDiff(this.state,r,s,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Xr.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,t,i,r){let s=this.clone(e),a={},o={};return this.map(s,(c,l)=>{t[c]||(o[c]=l)}),this.map(t,(c,l)=>{let u=s[c];if(u){let h=l.metas.map(_=>_.phx_ref),d=u.metas.map(_=>_.phx_ref),f=l.metas.filter(_=>d.indexOf(_.phx_ref)<0),g=u.metas.filter(_=>h.indexOf(_.phx_ref)<0);f.length>0&&(a[c]=l,a[c].metas=f),g.length>0&&(o[c]=this.clone(u),o[c].metas=g)}else a[c]=l}),this.syncDiff(s,{joins:a,leaves:o},i,r)}static syncDiff(e,t,i,r){let{joins:s,leaves:a}=this.clone(t);return i||(i=function(){}),r||(r=function(){}),this.map(s,(o,c)=>{let l=e[o];if(e[o]=this.clone(c),l){let u=e[o].metas.map(d=>d.phx_ref),h=l.metas.filter(d=>u.indexOf(d.phx_ref)<0);e[o].metas.unshift(...h)}i(o,l,c)}),this.map(a,(o,c)=>{let l=e[o];if(!l)return;let u=c.metas.map(h=>h.phx_ref);l.metas=l.metas.filter(h=>u.indexOf(h.phx_ref)<0),r(o,l,c),l.metas.length===0&&delete e[o]}),e}static list(e,t){return t||(t=function(i,r){return r}),this.map(e,(i,r)=>t(i,r))}static map(e,t){return Object.getOwnPropertyNames(e).map(i=>t(i,e[i]))}static clone(e){return JSON.parse(JSON.stringify(e))}},Js={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(n,e){if(n.payload.constructor===ArrayBuffer)return e(this.binaryEncode(n));{let t=[n.join_ref,n.ref,n.topic,n.event,n.payload];return e(JSON.stringify(t))}},decode(n,e){if(n.constructor===ArrayBuffer)return e(this.binaryDecode(n));{let[t,i,r,s,a]=JSON.parse(n);return e({join_ref:t,ref:i,topic:r,event:s,payload:a})}},binaryEncode(n){let{join_ref:e,ref:t,event:i,topic:r,payload:s}=n,a=this.META_LENGTH+e.length+t.length+r.length+i.length,o=new ArrayBuffer(this.HEADER_LENGTH+a),c=new DataView(o),l=0;c.setUint8(l++,this.KINDS.push),c.setUint8(l++,e.length),c.setUint8(l++,t.length),c.setUint8(l++,r.length),c.setUint8(l++,i.length),Array.from(e,h=>c.setUint8(l++,h.charCodeAt(0))),Array.from(t,h=>c.setUint8(l++,h.charCodeAt(0))),Array.from(r,h=>c.setUint8(l++,h.charCodeAt(0))),Array.from(i,h=>c.setUint8(l++,h.charCodeAt(0)));var u=new Uint8Array(o.byteLength+s.byteLength);return u.set(new Uint8Array(o),0),u.set(new Uint8Array(s),o.byteLength),u.buffer},binaryDecode(n){let e=new DataView(n),t=e.getUint8(0),i=new TextDecoder;switch(t){case this.KINDS.push:return this.decodePush(n,e,i);case this.KINDS.reply:return this.decodeReply(n,e,i);case this.KINDS.broadcast:return this.decodeBroadcast(n,e,i)}},decodePush(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=t.decode(n.slice(a,a+i));a=a+i;let c=t.decode(n.slice(a,a+r));a=a+r;let l=t.decode(n.slice(a,a+s));a=a+s;let u=n.slice(a,n.byteLength);return{join_ref:o,ref:null,topic:c,event:l,payload:u}},decodeReply(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,c=t.decode(n.slice(o,o+i));o=o+i;let l=t.decode(n.slice(o,o+r));o=o+r;let u=t.decode(n.slice(o,o+s));o=o+s;let h=t.decode(n.slice(o,o+a));o=o+a;let d=n.slice(o,n.byteLength),f={status:h,response:d};return{join_ref:c,ref:l,topic:u,event:Vn.reply,payload:f}},decodeBroadcast(n,e,t){let i=e.getUint8(1),r=e.getUint8(2),s=this.HEADER_LENGTH+2,a=t.decode(n.slice(s,s+i));s=s+i;let o=t.decode(n.slice(s,s+r));s=s+r;let c=n.slice(s,n.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:c}}},My=class{constructor(n,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||yy,this.transport=e.transport||Rn.WebSocket||or,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let t=null;try{t=Rn&&Rn.sessionStorage}catch{}this.sessionStore=e.sessionStorage||t,this.establishedConnections=0,this.defaultEncoder=Js.encode.bind(Js),this.defaultDecoder=Js.decode.bind(Js),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==or?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let i=null;dr&&dr.addEventListener&&(dr.addEventListener("pagehide",r=>{this.conn&&(this.disconnect(),i=this.connectClock)}),dr.addEventListener("pageshow",r=>{i===this.connectClock&&(i=null,this.connect())}),dr.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=r=>e.rejoinAfterMs?e.rejoinAfterMs(r):[1e3,2e3,5e3][r-1]||1e4,this.reconnectAfterMs=r=>e.reconnectAfterMs?e.reconnectAfterMs(r):[10,50,100,150,200,250,500,1e3,2e3][r-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(r,s,a)=>{console.log(`${r}: ${s}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Qr(e.params||{}),this.endPoint=`${n}/${Lc.websocket}`,this.vsn=e.vsn||_y,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Od(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return or}replaceTransport(n){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=n}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let n=Sa.appendParams(Sa.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return n.charAt(0)!=="/"?n:n.charAt(1)==="/"?`${this.protocol()}:${n}`:`${this.protocol()}://${location.host}${n}`}disconnect(n,e,t){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,n&&n()},e,t)}connect(n){n&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Qr(n)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==or?this.connectWithFallback(or,this.longPollFallbackMs):this.transportConnect())}log(n,e,t){this.logger&&this.logger(n,e,t)}hasLogger(){return this.logger!==null}onOpen(n){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,n]),e}onClose(n){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,n]),e}onError(n){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,n]),e}onMessage(n){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,n]),e}onHeartbeat(n){this.heartbeatCallback=n}ping(n){if(!this.isConnected())return!1;let e=this.makeRef(),t=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let i=this.onMessage(r=>{r.ref===e&&(this.off([i]),n(Date.now()-t))});return!0}transportName(n){switch(n){case or:return"LongPoll";default:return n.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let n;this.authToken&&(n=["phoenix",`${Ic}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),n),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(n){return this.sessionStore&&this.sessionStore.getItem(n)}storeSession(n,e){this.sessionStore&&this.sessionStore.setItem(n,e)}connectWithFallback(n,e=2500){clearTimeout(this.fallbackTimer);let t=!1,i=!0,r,s,a=this.transportName(n),o=c=>{this.log("transport",`falling back to ${a}...`,c),this.off([r,s]),i=!1,this.replaceTransport(n),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),s=this.onError(c=>{this.log("transport","error",c),i&&!t&&(clearTimeout(this.fallbackTimer),o(c))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(t=!0,!i){let c=this.transportName(n);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${c}`,"true"),this.log("transport",`established ${c} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(c=>{this.log("transport","connected to primary after",c),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(n){this.log("error","error in heartbeat callback",n)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),xy,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(n,e,t){if(!this.conn)return n&&n();const i=this.conn;this.waitForBufferDone(i,()=>{e?i.close(e,t||""):i.close(),this.waitForSocketClosed(i,()=>{this.conn===i&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),n&&n()})})}waitForBufferDone(n,e,t=1){if(t===5||!n.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(n,e,t+1)},150*t)}waitForSocketClosed(n,e,t=1){if(t===5||n.readyState===Pn.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(n,e,t+1)},150*t)}onConnClose(n){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",n),this.triggerChanError(n),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",n)}onConnError(n){this.hasLogger()&&this.log("transport","error",n);let e=this.transport,t=this.establishedConnections;this.triggerStateCallbacks("error",n,e,t),(e===this.transport||t>0)&&this.triggerChanError(n)}triggerChanError(n){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(Vn.error,n)})}connectionState(){switch(this.conn&&this.conn.readyState){case Pn.connecting:return"connecting";case Pn.open:return"open";case Pn.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(n){this.off(n.stateChangeRefs),this.channels=this.channels.filter(e=>e!==n)}off(n){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([t])=>n.indexOf(t)===-1)}channel(n,e={}){let t=new by(n,e,this);return this.channels.push(t),t}push(n){if(this.hasLogger()){let{topic:e,event:t,payload:i,ref:r,join_ref:s}=n;this.log("push",`${e} ${t} (${s}, ${r})`,i)}this.isConnected()?this.encode(n,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(n,e=>this.conn.send(e)))}makeRef(){let n=this.ref+1;return n===this.ref?this.ref=0:this.ref=n,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(n){this.log("error","error in heartbeat callback",n)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(n){this.log("error","error in heartbeat callback",n)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(n=>n()),this.sendBuffer=[])}onConnMessage(n){this.decode(n.data,e=>{let{topic:t,event:i,payload:r,ref:s,join_ref:a}=e;if(s&&s===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status==="ok"?"ok":"error",o)}catch(c){this.log("error","error in heartbeat callback",c)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${r.status||""} ${t} ${i} ${s&&"("+s+")"||""}`.trim(),r);for(let o=0;o<this.channels.length;o++){const c=this.channels[o];c.isMember(t,i,r,a)&&c.trigger(i,r,s,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(n,...e){try{this.stateChangeCallbacks[n].forEach(([t,i])=>{try{i(...e)}catch(r){this.log("error",`error in ${n} callback`,r)}})}catch(t){this.log("error",`error triggering ${n} callbacks`,t)}}leaveOpenTopic(n){let e=this.channels.find(t=>t.topic===n&&(t.isJoined()||t.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${n}"`),e.leave())}};class es{constructor(e,t){const i=Ay(t);this.presence=new Ey(e.getChannel(),i),this.presence.onJoin((r,s,a)=>{const o=es.onJoinPayload(r,s,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((r,s,a)=>{const o=es.onLeavePayload(r,s,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return es.transformState(this.presence.state)}static transformState(e){return e=Ty(e),Object.getOwnPropertyNames(e).reduce((t,i)=>{const r=e[i];return t[i]=da(r),t},{})}static onJoinPayload(e,t,i){const r=Gu(t),s=da(i);return{event:"join",key:e,currentPresences:r,newPresences:s}}static onLeavePayload(e,t,i){const r=Gu(t),s=da(i);return{event:"leave",key:e,currentPresences:r,leftPresences:s}}}function da(n){return n.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function Ty(n){return JSON.parse(JSON.stringify(n))}function Ay(n){return n?.events&&{events:n.events}}function Gu(n){return n?.metas?da(n):[]}var Vu;(function(n){n.SYNC="sync",n.JOIN="join",n.LEAVE="leave"})(Vu||(Vu={}));class Ry{get state(){return this.presenceAdapter.state}constructor(e,t){this.channel=e,this.presenceAdapter=new es(this.channel.channelAdapter,t)}}function Cy(n){if(n instanceof Error)return n;if(typeof n=="string")return new Error(n);if(n&&typeof n=="object"){const e=n;if(typeof e.code=="number"){const t=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${t}`,{cause:n})}return new Error("channel error: transport failure",{cause:n})}return new Error("channel error: connection lost")}class Py{constructor(e,t,i){const r=Ly(i);this.channel=e.getSocket().channel(t,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,t){return this.channel.on(e,t)}off(e,t){this.channel.off(e,t)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,t,i){let r;try{r=this.channel.push(e,t,i)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>ly){const s=this.channel.pushBuffer.shift();s.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${s.event}`,s.payload())}return r}updateJoinPayload(e){const t=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},t),e)}canPush(){return this.socket.isConnected()&&this.state===li.joined}isJoined(){return this.state===li.joined}isJoining(){return this.state===li.joining}isClosed(){return this.state===li.closed}isLeaving(){return this.state===li.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function Ly(n){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},n.config)}}var Wu;(function(n){n.ALL="*",n.INSERT="INSERT",n.UPDATE="UPDATE",n.DELETE="DELETE"})(Wu||(Wu={}));var mr;(function(n){n.BROADCAST="broadcast",n.PRESENCE="presence",n.POSTGRES_CHANGES="postgres_changes",n.SYSTEM="system"})(mr||(mr={}));var Wn;(function(n){n.SUBSCRIBED="SUBSCRIBED",n.TIMED_OUT="TIMED_OUT",n.CLOSED="CLOSED",n.CHANNEL_ERROR="CHANNEL_ERROR"})(Wn||(Wn={}));class ts{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,t={config:{}},i){var r,s;if(this.topic=e,this.params=t,this.socket=i,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.channelAdapter=new Py(this.socket.socketAdapter,e,this.params),this.presence=new Ry(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Ud(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((s=(r=this.params.config)===null||r===void 0?void 0:r.broadcast)===null||s===void 0)&&s.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,t=this.timeout){var i,r,s;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:c}}=this.params,l=(r=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(f=>f.filter))!==null&&r!==void 0?r:[],u=!!this.bindings[mr.PRESENCE]&&this.bindings[mr.PRESENCE].length>0||((s=this.params.config.presence)===null||s===void 0?void 0:s.enabled)===!0,h={},d={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:u}),postgres_changes:l,private:c};this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(f=>{e?.(Wn.CHANNEL_ERROR,Cy(f))}),this._onClose(()=>e?.(Wn.CLOSED)),this.updateJoinPayload(Object.assign({config:d},h)),this._updateFilterMessage(),this.channelAdapter.subscribe(t).receive("ok",async({postgres_changes:f})=>{if(this.socket._isManualToken()||this.socket.setAuth(),f===void 0){e?.(Wn.SUBSCRIBED);return}this._updatePostgresBindings(f,e)}).receive("error",f=>{this.state=li.errored;const g=Object.values(f).join(", ")||"error";e?.(Wn.CHANNEL_ERROR,new Error(g,{cause:f}))}).receive("timeout",()=>{e?.(Wn.TIMED_OUT)})}return this}_updatePostgresBindings(e,t){var i;const r=this.bindings.postgres_changes,s=(i=r?.length)!==null&&i!==void 0?i:0,a=[];for(let o=0;o<s;o++){const c=r[o],{filter:{event:l,schema:u,table:h,filter:d}}=c,f=e&&e[o];if(f&&f.event===l&&ts.isFilterValueEqual(f.schema,u)&&ts.isFilterValueEqual(f.table,h)&&ts.isFilterValueEqual(f.filter,d))a.push(Object.assign(Object.assign({},c),{id:f.id}));else{this.unsubscribe(),this.state=li.errored,t?.(Wn.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=li.errored&&t&&t(Wn.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,i){const r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),s=e===mr.PRESENCE||e===mr.POSTGRES_CHANGES;if(r&&s)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,t,i)}async httpSend(e,t,i={}){var r;if(t==null)return Promise.reject(new Error("Payload is required for httpSend()"));const s=t instanceof ArrayBuffer||ArrayBuffer.isView(t),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":s?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const c={method:"POST",headers:a,body:s?t:JSON.stringify(t)},l=await this._fetchWithTimeout(o.toString(),c,(r=i.timeout)!==null&&r!==void 0?r:this.timeout);if(l.status===202)return{success:!0};if(l.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let u=l.statusText;try{const h=await l.json();u=h.error||h.message||u}catch{}return Promise.reject(new Error(u))}async send(e,t={}){var i,r;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:s,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const c={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:a,private:this.private}]})};try{const l=await this._fetchWithTimeout(this.broadcastEndpointURL,c,(i=t.timeout)!==null&&i!==void 0?i:this.timeout);return await((r=l.body)===null||r===void 0?void 0:r.cancel()),l.ok?"ok":"error"}catch(l){return l instanceof Error&&l.name==="AbortError"?"timed out":"error"}}else return new Promise(s=>{var a,o,c;const l=this.channelAdapter.push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((c=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||c===void 0)&&c.ack)&&s("ok"),l.receive("ok",()=>s("ok")),l.receive("error",()=>s("error")),l.receive("timeout",()=>s("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(t=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>t("ok")).receive("timeout",()=>t("timed out")).receive("error",()=>t("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,t,i){const r=new AbortController,s=setTimeout(()=>r.abort(),i),a=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:r.signal}));return clearTimeout(s),a}_on(e,t,i){const r=e.toLocaleLowerCase(),s=this.channelAdapter.on(e,i),a={type:r,filter:t,callback:i,ref:s};return this.bindings[r]?this.bindings[r].push(a):this.bindings[r]=[a],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,t,i)=>{var r,s,a,o,c,l,u;const h=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(h,i))return!1;const d=(r=this.bindings[h])===null||r===void 0?void 0:r.find(f=>f.ref===e.ref);if(!d)return!0;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in d){const f=d.id,g=(s=d.filter)===null||s===void 0?void 0:s.event;return f&&((a=t.ids)===null||a===void 0?void 0:a.includes(f))&&(g==="*"||g?.toLocaleLowerCase()===((o=t.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const f=(l=(c=d?.filter)===null||c===void 0?void 0:c.event)===null||l===void 0?void 0:l.toLocaleLowerCase();return f==="*"||f===((u=t?.event)===null||u===void 0?void 0:u.toLocaleLowerCase())}else return d.type.toLocaleLowerCase()===h})}_notThisChannelEvent(e,t){const{close:i,error:r,leave:s,join:a}=Id;return t&&[i,r,s,a].includes(e)&&t!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,t,i)=>{if(typeof t=="object"&&"ids"in t){const r=t.data,{schema:s,table:a,commit_timestamp:o,type:c,errors:l}=r;return Object.assign(Object.assign({},{schema:s,table:a,commit_timestamp:o,eventType:c,new:{},old:{},errors:l}),this._getPayloadRecords(r))}return t})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const t in e.bindings)for(const i of e.bindings[t])this._on(i.type,i.filter,i.callback)}static isFilterValueEqual(e,t){return(e??void 0)===(t??void 0)}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=Hu(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=Hu(e.columns,e.old_record)),t}}class Iy{constructor(e,t){this.socket=new My(e,t)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,t,i,r=1e4){return new Promise(s=>{setTimeout(()=>s("timeout"),r),this.socket.disconnect(()=>{e(),s("ok")},t,i)})}push(e){this.socket.push(e)}log(e,t,i){this.socket.log(e,t,i)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Cc.connecting}isDisconnecting(){return this.socket.connectionState()==Cc.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const ju={HEARTBEAT_INTERVAL:25e3},Dy=[1e3,2e3,5e3,1e4],Uy=1e4;function Oy(){const n=new Map;return{get length(){return n.size},clear(){n.clear()},getItem(e){return n.has(e)?n.get(e):null},key(e){var t;return(t=Array.from(n.keys())[e])!==null&&t!==void 0?t:null},removeItem(e){n.delete(e)},setItem(e,t){n.set(e,String(t))}}}function Ny(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Oy()}const ky=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Fy{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,t){var i;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new uy,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=s=>s?(...a)=>s(...a):(...a)=>fetch(...a),!(!((i=t?.params)===null||i===void 0)&&i.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey;const r=this._initializeOptions(t);this.socketAdapter=new Iy(e,r),this.httpEndpoint=Ud(e),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const t=e.message;throw t.includes("Node.js")?new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${t}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,t){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,t)}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return t==="ok"&&e.teardown(),t}async removeAllChannels(){const e=this.channels.map(async i=>{const r=await i.unsubscribe();return i.teardown(),r}),t=await Promise.all(e);return await this.disconnect(),t}log(e,t,i){this.socketAdapter.log(e,t,i)}connectionState(){return this.socketAdapter.connectionState()||Cc.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,t={config:{}}){const i=`realtime:${e}`,r=this.getChannels().find(s=>s.topic===i);if(r)return r;{const s=new ts(`realtime:${e}`,t,this);return this._cancelPendingDisconnect(),this.channels.push(s),s}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let t,i=!1;if(e)t=e,i=!0;else if(this.accessToken)try{t=await this.accessToken()}catch(r){this.log("error","Error fetching access token from callback",r),t=this.accessTokenValue}else t=this.accessTokenValue;i?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(r=>{const s={access_token:t,version:sy};t&&r.updateJoinPayload(s),r.joinedOnce&&r.channelAdapter.isJoined()&&r.channelAdapter.push(Id.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(t=>{this.log("error",`Error setting auth in ${e}`,t)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(t=>{this.log("error","error waiting for auth on connect",t)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(t,i)=>{t=="sent"&&this._setAuthSafely(),e&&e(t,i)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let t;if(e)t=e;else{const i=new Blob([ky],{type:"application/javascript"});t=URL.createObjectURL(i)}return t}_initializeOptions(e){var t,i,r,s,a,o,c,l,u,h,d,f;this.worker=(t=e?.worker)!==null&&t!==void 0?t:!1,this.accessToken=(i=e?.accessToken)!==null&&i!==void 0?i:null;const g={};g.timeout=(r=e?.timeout)!==null&&r!==void 0?r:cy,g.heartbeatIntervalMs=(s=e?.heartbeatIntervalMs)!==null&&s!==void 0?s:ju.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e?.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e?.heartbeatIntervalMs)!==null&&o!==void 0?o:ju.HEARTBEAT_INTERVAL),g.transport=(c=e?.transport)!==null&&c!==void 0?c:iy.getWebSocketConstructor(),g.params=e?.params,g.logger=e?.logger,g.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),g.sessionStorage=(l=e?.sessionStorage)!==null&&l!==void 0?l:Ny(),g.reconnectAfterMs=(u=e?.reconnectAfterMs)!==null&&u!==void 0?u:x=>Dy[x-1]||Uy;let _,m;const p=(h=e?.vsn)!==null&&h!==void 0?h:oy;switch(p){case ay:_=(x,y)=>y(JSON.stringify(x)),m=(x,y)=>y(JSON.parse(x));break;case Ld:_=this.serializer.encode.bind(this.serializer),m=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${g.vsn}`)}if(g.vsn=p,g.encode=(d=e?.encode)!==null&&d!==void 0?d:_,g.decode=(f=e?.decode)!==null&&f!==void 0?f:m,g.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,g.params=Object.assign(Object.assign({},g.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e?.workerUrl,g.autoSendHeartbeat=!this.worker}return g}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var as=class extends Error{constructor(n,e){super(n),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&e.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function By(n,e,t){const i=new URL(e,n);if(t)for(const[r,s]of Object.entries(t))s!==void 0&&i.searchParams.set(r,s);return i.toString()}async function zy(n){return!n||n.type==="none"?{}:n.type==="bearer"?{Authorization:`Bearer ${n.token}`}:n.type==="header"?{[n.name]:n.value}:n.type==="custom"?await n.getHeaders():{}}function Hy(n){const e=n.fetchImpl??globalThis.fetch;return{async request({method:t,path:i,query:r,body:s,headers:a}){const o=By(n.baseUrl,i,r),c=await zy(n.auth),l=await e(o,{method:t,headers:{...s?{"Content-Type":"application/json"}:{},...c,...a},body:s?JSON.stringify(s):void 0}),u=await l.text(),h=(l.headers.get("content-type")||"").includes("application/json"),d=h&&u?JSON.parse(u):u;if(!l.ok){const f=h?d:void 0,g=f?.error;throw new as(g?.message??`Request failed with status ${l.status}`,{status:l.status,icebergType:g?.type,icebergCode:g?.code,details:f})}return{status:l.status,headers:l.headers,data:d}}}}function Zs(n){return n.join("")}var Gy=class{constructor(n,e=""){this.client=n,this.prefix=e}async listNamespaces(n){const e=n?{parent:Zs(n.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(i=>({namespace:i}))}async createNamespace(n,e){const t={namespace:n.namespace,properties:e?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:t})).data}async dropNamespace(n){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Zs(n.namespace)}`})}async loadNamespaceMetadata(n){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Zs(n.namespace)}`})).data.properties}}async namespaceExists(n){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Zs(n.namespace)}`}),!0}catch(e){if(e instanceof as&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(n,e){try{return await this.createNamespace(n,e)}catch(t){if(t instanceof as&&t.status===409)return;throw t}}};function cr(n){return n.join("")}var Vy=class{constructor(n,e="",t){this.client=n,this.prefix=e,this.accessDelegation=t}async listTables(n){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${cr(n.namespace)}/tables`})).data.identifiers}async createTable(n,e){const t={};return this.accessDelegation&&(t["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${cr(n.namespace)}/tables`,body:e,headers:t})).data.metadata}async updateTable(n,e){const t=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${cr(n.namespace)}/tables/${n.name}`,body:e});return{"metadata-location":t.data["metadata-location"],metadata:t.data.metadata}}async dropTable(n,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${cr(n.namespace)}/tables/${n.name}`,query:{purgeRequested:String(e?.purge??!1)}})}async loadTable(n){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${cr(n.namespace)}/tables/${n.name}`,headers:e})).data.metadata}async tableExists(n){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${cr(n.namespace)}/tables/${n.name}`,headers:e}),!0}catch(t){if(t instanceof as&&t.status===404)return!1;throw t}}async createTableIfNotExists(n,e){try{return await this.createTable(n,e)}catch(t){if(t instanceof as&&t.status===409)return await this.loadTable({namespace:n.namespace,name:e.name});throw t}}},Wy=class{constructor(n){let e="v1";n.catalogName&&(e+=`/${n.catalogName}`);const t=n.baseUrl.endsWith("/")?n.baseUrl:`${n.baseUrl}/`;this.client=Hy({baseUrl:t,auth:n.auth,fetchImpl:n.fetch}),this.accessDelegation=n.accessDelegation?.join(","),this.namespaceOps=new Gy(this.client,e),this.tableOps=new Vy(this.client,e,this.accessDelegation)}async listNamespaces(n){return this.namespaceOps.listNamespaces(n)}async createNamespace(n,e){return this.namespaceOps.createNamespace(n,e)}async dropNamespace(n){await this.namespaceOps.dropNamespace(n)}async loadNamespaceMetadata(n){return this.namespaceOps.loadNamespaceMetadata(n)}async listTables(n){return this.tableOps.listTables(n)}async createTable(n,e){return this.tableOps.createTable(n,e)}async updateTable(n,e){return this.tableOps.updateTable(n,e)}async dropTable(n,e){await this.tableOps.dropTable(n,e)}async loadTable(n){return this.tableOps.loadTable(n)}async namespaceExists(n){return this.namespaceOps.namespaceExists(n)}async tableExists(n){return this.tableOps.tableExists(n)}async createNamespaceIfNotExists(n,e){return this.namespaceOps.createNamespaceIfNotExists(n,e)}async createTableIfNotExists(n,e){return this.tableOps.createTableIfNotExists(n,e)}};function os(n){"@babel/helpers - typeof";return os=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},os(n)}function jy(n,e){if(os(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(os(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function qy(n){var e=jy(n,"string");return os(e)=="symbol"?e:e+""}function Xy(n,e,t){return(e=qy(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function qu(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function Ne(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?qu(Object(t),!0).forEach(function(i){Xy(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):qu(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}var Ga=class extends Error{constructor(n,e="storage",t,i){super(n),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=t,this.statusCode=i}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Va(n){return typeof n=="object"&&n!==null&&"__isStorageError"in n}var Dc=class extends Ga{constructor(n,e,t,i="storage"){super(n,i,e,t),this.name=i==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=t}toJSON(){return Ne({},super.toJSON())}},Nd=class extends Ga{constructor(n,e,t="storage"){super(n,t),this.name=t==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Ea(n,e,t){const i=Ne({},n),r=e.toLowerCase();for(const s of Object.keys(i))s.toLowerCase()===r&&delete i[s];return i[r]=t,i}function Ky(n){const e={};for(const[t,i]of Object.entries(n))e[t.toLowerCase()]=i;return e}const Yy=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),Jy=n=>{if(typeof n!="object"||n===null)return!1;const e=Object.getPrototypeOf(n);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in n)&&!(Symbol.iterator in n)},Uc=n=>{if(Array.isArray(n))return n.map(t=>Uc(t));if(typeof n=="function"||n!==Object(n))return n;const e={};return Object.entries(n).forEach(([t,i])=>{const r=t.replace(/([-_][a-z])/gi,s=>s.toUpperCase().replace(/[-_]/g,""));e[r]=Uc(i)}),e},Zy=n=>!n||typeof n!="string"||n.length===0||n.length>100||n.trim()!==n||n.includes("/")||n.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(n),Xu=n=>{if(typeof n=="object"&&n!==null){const e=n;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const t=e.error;if(typeof t.message=="string")return t.message}}return JSON.stringify(n)},$y=async(n,e,t,i)=>{if(n!==null&&typeof n=="object"&&"json"in n&&typeof n.json=="function"){const r=n;let s=parseInt(String(r.status),10);Number.isFinite(s)||(s=500),r.json().then(a=>{const o=a?.statusCode||a?.code||s+"";e(new Dc(Xu(a),s,o,i))}).catch(()=>{const a=s+"";e(new Dc(r.statusText||`HTTP ${s} error`,s,a,i))})}else e(new Nd(Xu(n),n,i))},Qy=(n,e,t,i)=>{const r={method:n,headers:e?.headers||{}};if(n==="GET"||n==="HEAD"||!i)return Ne(Ne({},r),t);if(Jy(i)){var s;const a=e?.headers||{};let o;for(const[c,l]of Object.entries(a))c.toLowerCase()==="content-type"&&(o=l);r.headers=Ea(a,"Content-Type",(s=o)!==null&&s!==void 0?s:"application/json"),r.body=JSON.stringify(i)}else r.body=i;return e?.duplex&&(r.duplex=e.duplex),Ne(Ne({},r),t)};async function jr(n,e,t,i,r,s,a){return new Promise((o,c)=>{n(t,Qy(e,i,r,s)).then(l=>{if(!l.ok)throw l;if(i?.noResolveJson)return l;if(a==="vectors"){const u=l.headers.get("content-type");if(l.headers.get("content-length")==="0"||l.status===204)return{};if(!u||!u.includes("application/json"))return{}}return l.json()}).then(l=>o(l)).catch(l=>$y(l,c,i,a))})}function kd(n="storage"){return{get:async(e,t,i,r)=>jr(e,"GET",t,i,r,void 0,n),post:async(e,t,i,r,s)=>jr(e,"POST",t,r,s,i,n),put:async(e,t,i,r,s)=>jr(e,"PUT",t,r,s,i,n),head:async(e,t,i,r)=>jr(e,"HEAD",t,Ne(Ne({},i),{},{noResolveJson:!0}),r,void 0,n),remove:async(e,t,i,r,s)=>jr(e,"DELETE",t,r,s,i,n)}}const ex=kd("storage"),{get:cs,post:yn,put:Oc,head:tx,remove:pl}=ex,Qt=kd("vectors");var Ir=class{constructor(n,e={},t,i="storage"){this.shouldThrowOnError=!1,this.url=n,this.headers=Ky(e),this.fetch=Yy(t),this.namespace=i}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(n,e){return this.headers=Ea(this.headers,n,e),this}async handleOperation(n){var e=this;try{return{data:await n(),error:null}}catch(t){if(e.shouldThrowOnError)throw t;if(Va(t))return{data:null,error:t};throw t}}};let Fd;Fd=Symbol.toStringTag;var nx=class{constructor(n,e){this.downloadFn=n,this.shouldThrowOnError=e,this[Fd]="StreamDownloadBuilder",this.promise=null}then(n,e){return this.getPromise().then(n,e)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:(await n.downloadFn()).body,error:null}}catch(e){if(n.shouldThrowOnError)throw e;if(Va(e))return{data:null,error:e};throw e}}};let Bd;Bd=Symbol.toStringTag;var ix=class{constructor(n,e){this.downloadFn=n,this.shouldThrowOnError=e,this[Bd]="BlobDownloadBuilder",this.promise=null}asStream(){return new nx(this.downloadFn,this.shouldThrowOnError)}then(n,e){return this.getPromise().then(n,e)}catch(n){return this.getPromise().catch(n)}finally(n){return this.getPromise().finally(n)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var n=this;try{return{data:await(await n.downloadFn()).blob(),error:null}}catch(e){if(n.shouldThrowOnError)throw e;if(Va(e))return{data:null,error:e};throw e}}};const rx={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Ku={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var sx=class extends Ir{constructor(n,e={},t,i){super(n,e,i,"storage"),this.bucketId=t}async uploadOrUpdate(n,e,t,i){var r=this;return r.handleOperation(async()=>{let s;const a=Ne(Ne({},Ku),i);let o=Ne(Ne({},r.headers),n==="POST"&&{"x-upsert":String(a.upsert)});const c=a.metadata;if(typeof Blob<"u"&&t instanceof Blob?(s=new FormData,s.append("cacheControl",a.cacheControl),c&&s.append("metadata",r.encodeMetadata(c)),s.append("",t)):typeof FormData<"u"&&t instanceof FormData?(s=t,s.has("cacheControl")||s.append("cacheControl",a.cacheControl),c&&!s.has("metadata")&&s.append("metadata",r.encodeMetadata(c))):(s=t,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,c&&(o["x-metadata"]=r.toBase64(r.encodeMetadata(c))),(typeof ReadableStream<"u"&&s instanceof ReadableStream||s&&typeof s=="object"&&"pipe"in s&&typeof s.pipe=="function")&&!a.duplex&&(a.duplex="half")),i?.headers)for(const[d,f]of Object.entries(i.headers))o=Ea(o,d,f);const l=r._removeEmptyFolders(e),u=r._getFinalPath(l),h=await(n=="PUT"?Oc:yn)(r.fetch,`${r.url}/object/${u}`,s,Ne({headers:o},a?.duplex?{duplex:a.duplex}:{}));return{path:l,id:h.Id,fullPath:h.Key}})}async upload(n,e,t){return this.uploadOrUpdate("POST",n,e,t)}async uploadToSignedUrl(n,e,t,i){var r=this;const s=r._removeEmptyFolders(n),a=r._getFinalPath(s),o=new URL(r.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),r.handleOperation(async()=>{let c;const l=Ne(Ne({},Ku),i);let u=Ne(Ne({},r.headers),{"x-upsert":String(l.upsert)});const h=l.metadata;if(typeof Blob<"u"&&t instanceof Blob?(c=new FormData,c.append("cacheControl",l.cacheControl),h&&c.append("metadata",r.encodeMetadata(h)),c.append("",t)):typeof FormData<"u"&&t instanceof FormData?(c=t,c.has("cacheControl")||c.append("cacheControl",l.cacheControl),h&&!c.has("metadata")&&c.append("metadata",r.encodeMetadata(h))):(c=t,u["cache-control"]=`max-age=${l.cacheControl}`,u["content-type"]=l.contentType,h&&(u["x-metadata"]=r.toBase64(r.encodeMetadata(h))),(typeof ReadableStream<"u"&&c instanceof ReadableStream||c&&typeof c=="object"&&"pipe"in c&&typeof c.pipe=="function")&&!l.duplex&&(l.duplex="half")),i?.headers)for(const[d,f]of Object.entries(i.headers))u=Ea(u,d,f);return{path:s,fullPath:(await Oc(r.fetch,o.toString(),c,Ne({headers:u},l?.duplex?{duplex:l.duplex}:{}))).Key}})}async createSignedUploadUrl(n,e){var t=this;return t.handleOperation(async()=>{let i=t._getFinalPath(n);const r=Ne({},t.headers);e?.upsert&&(r["x-upsert"]="true");const s=await yn(t.fetch,`${t.url}/object/upload/sign/${i}`,{},{headers:r}),a=new URL(t.url+s.url),o=a.searchParams.get("token");if(!o)throw new Ga("No token returned by API");return{signedUrl:a.toString(),path:n,token:o}})}async update(n,e,t){return this.uploadOrUpdate("PUT",n,e,t)}async move(n,e,t){var i=this;return i.handleOperation(async()=>await yn(i.fetch,`${i.url}/object/move`,{bucketId:i.bucketId,sourceKey:n,destinationKey:e,destinationBucket:t?.destinationBucket},{headers:i.headers}))}async copy(n,e,t){var i=this;return i.handleOperation(async()=>({path:(await yn(i.fetch,`${i.url}/object/copy`,{bucketId:i.bucketId,sourceKey:n,destinationKey:e,destinationBucket:t?.destinationBucket},{headers:i.headers})).Key}))}async createSignedUrl(n,e,t){var i=this;return i.handleOperation(async()=>{let r=i._getFinalPath(n);const s=typeof t?.transform=="object"&&t.transform!==null&&Object.keys(t.transform).length>0;let a=await yn(i.fetch,`${i.url}/object/sign/${r}`,Ne({expiresIn:e},s?{transform:t.transform}:{}),{headers:i.headers});const o=new URLSearchParams;t?.download&&o.set("download",t.download===!0?"":t.download),t?.cacheNonce!=null&&o.set("cacheNonce",String(t.cacheNonce));const c=o.toString();return{signedUrl:encodeURI(`${i.url}${a.signedURL}${c?`&${c}`:""}`)}})}async createSignedUrls(n,e,t){var i=this;return i.handleOperation(async()=>{const r=await yn(i.fetch,`${i.url}/object/sign/${i.bucketId}`,{expiresIn:e,paths:n},{headers:i.headers}),s=new URLSearchParams;t?.download&&s.set("download",t.download===!0?"":t.download),t?.cacheNonce!=null&&s.set("cacheNonce",String(t.cacheNonce));const a=s.toString();return r.map(o=>Ne(Ne({},o),{},{signedUrl:o.signedURL?encodeURI(`${i.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(n,e,t){const i=typeof e?.transform=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",r=new URLSearchParams;e?.transform&&this.applyTransformOptsToQuery(r,e.transform),e?.cacheNonce!=null&&r.set("cacheNonce",String(e.cacheNonce));const s=r.toString(),a=this._getFinalPath(n),o=()=>cs(this.fetch,`${this.url}/${i}/${a}${s?`?${s}`:""}`,{headers:this.headers,noResolveJson:!0},t);return new ix(o,this.shouldThrowOnError)}async info(n){var e=this;const t=e._getFinalPath(n);return e.handleOperation(async()=>Uc(await cs(e.fetch,`${e.url}/object/info/${t}`,{headers:e.headers})))}async exists(n){var e=this;const t=e._getFinalPath(n);try{return await tx(e.fetch,`${e.url}/object/${t}`,{headers:e.headers}),{data:!0,error:null}}catch(r){if(e.shouldThrowOnError)throw r;if(Va(r)){var i;const s=r instanceof Dc?r.status:r instanceof Nd?(i=r.originalError)===null||i===void 0?void 0:i.status:void 0;if(s!==void 0&&[400,404].includes(s))return{data:!1,error:r}}throw r}}getPublicUrl(n,e){const t=this._getFinalPath(n),i=new URLSearchParams;e?.download&&i.set("download",e.download===!0?"":e.download),e?.transform&&this.applyTransformOptsToQuery(i,e.transform),e?.cacheNonce!=null&&i.set("cacheNonce",String(e.cacheNonce));const r=i.toString(),s=typeof e?.transform=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${s}/public/${t}`)+(r?`?${r}`:"")}}}async remove(n){var e=this;return e.handleOperation(async()=>await pl(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:n},{headers:e.headers}))}async list(n,e,t){var i=this;return i.handleOperation(async()=>{const r=Ne(Ne(Ne({},rx),e),{},{prefix:n||""});return await yn(i.fetch,`${i.url}/object/list/${i.bucketId}`,r,{headers:i.headers},t)})}async listV2(n,e){var t=this;return t.handleOperation(async()=>{const i=Ne({},n);return await yn(t.fetch,`${t.url}/object/list-v2/${t.bucketId}`,i,{headers:t.headers},e)})}encodeMetadata(n){return JSON.stringify(n)}toBase64(n){return typeof Buffer<"u"?Buffer.from(n).toString("base64"):btoa(n)}_getFinalPath(n){return`${this.bucketId}/${n.replace(/^\/+/,"")}`}_removeEmptyFolders(n){return n.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(n,e){return e.width&&n.set("width",e.width.toString()),e.height&&n.set("height",e.height.toString()),e.resize&&n.set("resize",e.resize),e.format&&n.set("format",e.format),e.quality&&n.set("quality",e.quality.toString()),n}};const ax="2.108.2",vs={"X-Client-Info":`storage-js/${ax}`};var ox=class extends Ir{constructor(n,e={},t,i){const r=new URL(n);i?.useNewHostname&&/supabase\.(co|in|red)$/.test(r.hostname)&&!r.hostname.includes("storage.supabase.")&&(r.hostname=r.hostname.replace("supabase.","storage.supabase."));const s=r.href.replace(/\/$/,""),a=Ne(Ne({},vs),e);super(s,a,t,"storage")}async listBuckets(n){var e=this;return e.handleOperation(async()=>{const t=e.listBucketOptionsToQueryString(n);return await cs(e.fetch,`${e.url}/bucket${t}`,{headers:e.headers})})}async getBucket(n){var e=this;return e.handleOperation(async()=>await cs(e.fetch,`${e.url}/bucket/${n}`,{headers:e.headers}))}async createBucket(n,e={public:!1}){var t=this;return t.handleOperation(async()=>await yn(t.fetch,`${t.url}/bucket`,{id:n,name:n,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async updateBucket(n,e){var t=this;return t.handleOperation(async()=>await Oc(t.fetch,`${t.url}/bucket/${n}`,{id:n,name:n,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:t.headers}))}async emptyBucket(n){var e=this;return e.handleOperation(async()=>await yn(e.fetch,`${e.url}/bucket/${n}/empty`,{},{headers:e.headers}))}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await pl(e.fetch,`${e.url}/bucket/${n}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(n){const e={};return n&&("limit"in n&&(e.limit=String(n.limit)),"offset"in n&&(e.offset=String(n.offset)),n.search&&(e.search=n.search),n.sortColumn&&(e.sortColumn=n.sortColumn),n.sortOrder&&(e.sortOrder=n.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},cx=class extends Ir{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Ne(Ne({},vs),e);super(i,r,t,"storage")}async createBucket(n){var e=this;return e.handleOperation(async()=>await yn(e.fetch,`${e.url}/bucket`,{name:n},{headers:e.headers}))}async listBuckets(n){var e=this;return e.handleOperation(async()=>{const t=new URLSearchParams;n?.limit!==void 0&&t.set("limit",n.limit.toString()),n?.offset!==void 0&&t.set("offset",n.offset.toString()),n?.sortColumn&&t.set("sortColumn",n.sortColumn),n?.sortOrder&&t.set("sortOrder",n.sortOrder),n?.search&&t.set("search",n.search);const i=t.toString(),r=i?`${e.url}/bucket?${i}`:`${e.url}/bucket`;return await cs(e.fetch,r,{headers:e.headers})})}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await pl(e.fetch,`${e.url}/bucket/${n}`,{},{headers:e.headers}))}from(n){var e=this;if(!Zy(n))throw new Ga("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const t=new Wy({baseUrl:this.url,catalogName:n,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),i=this.shouldThrowOnError;return new Proxy(t,{get(r,s){const a=r[s];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(r,o),error:null}}catch(c){if(i)throw c;return{data:null,error:c}}}}})}},lx=class extends Ir{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Ne(Ne({},vs),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async createIndex(n){var e=this;return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/CreateIndex`,n,{headers:e.headers})||{})}async getIndex(n,e){var t=this;return t.handleOperation(async()=>await Qt.post(t.fetch,`${t.url}/GetIndex`,{vectorBucketName:n,indexName:e},{headers:t.headers}))}async listIndexes(n){var e=this;return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/ListIndexes`,n,{headers:e.headers}))}async deleteIndex(n,e){var t=this;return t.handleOperation(async()=>await Qt.post(t.fetch,`${t.url}/DeleteIndex`,{vectorBucketName:n,indexName:e},{headers:t.headers})||{})}},ux=class extends Ir{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Ne(Ne({},vs),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async putVectors(n){var e=this;if(n.vectors.length<1||n.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/PutVectors`,n,{headers:e.headers})||{})}async getVectors(n){var e=this;return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/GetVectors`,n,{headers:e.headers}))}async listVectors(n){var e=this;if(n.segmentCount!==void 0){if(n.segmentCount<1||n.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(n.segmentIndex!==void 0&&(n.segmentIndex<0||n.segmentIndex>=n.segmentCount))throw new Error(`segmentIndex must be between 0 and ${n.segmentCount-1}`)}return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/ListVectors`,n,{headers:e.headers}))}async queryVectors(n){var e=this;return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/QueryVectors`,n,{headers:e.headers}))}async deleteVectors(n){var e=this;if(n.keys.length<1||n.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/DeleteVectors`,n,{headers:e.headers})||{})}},hx=class extends Ir{constructor(n,e={},t){const i=n.replace(/\/$/,""),r=Ne(Ne({},vs),{},{"Content-Type":"application/json"},e);super(i,r,t,"vectors")}async createBucket(n){var e=this;return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:n},{headers:e.headers})||{})}async getBucket(n){var e=this;return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:n},{headers:e.headers}))}async listBuckets(n={}){var e=this;return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/ListVectorBuckets`,n,{headers:e.headers}))}async deleteBucket(n){var e=this;return e.handleOperation(async()=>await Qt.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:n},{headers:e.headers})||{})}},dx=class extends hx{constructor(n,e={}){super(n,e.headers||{},e.fetch)}from(n){return new fx(this.url,this.headers,n,this.fetch)}async createBucket(n){var e=()=>super.createBucket,t=this;return e().call(t,n)}async getBucket(n){var e=()=>super.getBucket,t=this;return e().call(t,n)}async listBuckets(n={}){var e=()=>super.listBuckets,t=this;return e().call(t,n)}async deleteBucket(n){var e=()=>super.deleteBucket,t=this;return e().call(t,n)}},fx=class extends lx{constructor(n,e,t,i){super(n,e,i),this.vectorBucketName=t}async createIndex(n){var e=()=>super.createIndex,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName}))}async listIndexes(n={}){var e=()=>super.listIndexes,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName}))}async getIndex(n){var e=()=>super.getIndex,t=this;return e().call(t,t.vectorBucketName,n)}async deleteIndex(n){var e=()=>super.deleteIndex,t=this;return e().call(t,t.vectorBucketName,n)}index(n){return new px(this.url,this.headers,this.vectorBucketName,n,this.fetch)}},px=class extends ux{constructor(n,e,t,i,r){super(n,e,r),this.vectorBucketName=t,this.indexName=i}async putVectors(n){var e=()=>super.putVectors,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async getVectors(n){var e=()=>super.getVectors,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async listVectors(n={}){var e=()=>super.listVectors,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async queryVectors(n){var e=()=>super.queryVectors,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}async deleteVectors(n){var e=()=>super.deleteVectors,t=this;return e().call(t,Ne(Ne({},n),{},{vectorBucketName:t.vectorBucketName,indexName:t.indexName}))}},mx=class extends ox{constructor(n,e={},t,i){super(n,e,t,i)}from(n){return new sx(this.url,this.headers,n,this.fetch)}get vectors(){return new dx(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new cx(this.url+"/iceberg",this.headers,this.fetch)}};const zd="2.108.2",jn=30*1e3,Kr=3,Co=Kr*jn,gx=2*jn,vx="http://localhost:9999",_x="supabase.auth.token",yx={"X-Client-Info":`gotrue-js/${zd}`},Nc="X-Supabase-Api-Version",Hd={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},xx=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,wx=10*60*1e3;class ls extends Error{constructor(e,t,i){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=i}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function ue(n){return typeof n=="object"&&n!==null&&"__isAuthError"in n}class bx extends ls{constructor(e,t,i){super(e,t,i),this.name="AuthApiError",this.status=t,this.code=i}}function Sx(n){return ue(n)&&n.name==="AuthApiError"}class bn extends ls{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class Un extends ls{constructor(e,t,i,r){super(e,i,r),this.name=t,this.status=i}}class Pt extends Un{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function $s(n){return ue(n)&&n.name==="AuthSessionMissingError"}class lr extends Un{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Qs extends Un{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class ea extends Un{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function Ex(n){return ue(n)&&n.name==="AuthImplicitGrantRedirectError"}class Yu extends Un{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class Mx extends Un{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class kc extends Un{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function Ju(n){return ue(n)&&n.name==="AuthRetryableFetchError"}class Zu extends Un{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function Tx(n){return ue(n)&&n.name==="AuthRefreshDiscardedError"}class $u extends Un{constructor(e,t,i){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Ma extends Un{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Ta="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Qu=` 	
\r=`.split(""),Ax=(()=>{const n=new Array(128);for(let e=0;e<n.length;e+=1)n[e]=-1;for(let e=0;e<Qu.length;e+=1)n[Qu[e].charCodeAt(0)]=-2;for(let e=0;e<Ta.length;e+=1)n[Ta[e].charCodeAt(0)]=e;return n})();function eh(n,e,t){if(n!==null)for(e.queue=e.queue<<8|n,e.queuedBits+=8;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;t(Ta[i]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;t(Ta[i]),e.queuedBits-=6}}function Gd(n,e,t){const i=Ax[n];if(i>-1)for(e.queue=e.queue<<6|i,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(i===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(n)}"`)}}function th(n){const e=[],t=a=>{e.push(String.fromCodePoint(a))},i={utf8seq:0,codepoint:0},r={queue:0,queuedBits:0},s=a=>{Px(a,i,t)};for(let a=0;a<n.length;a+=1)Gd(n.charCodeAt(a),r,s);return e.join("")}function Rx(n,e){if(n<=127){e(n);return}else if(n<=2047){e(192|n>>6),e(128|n&63);return}else if(n<=65535){e(224|n>>12),e(128|n>>6&63),e(128|n&63);return}else if(n<=1114111){e(240|n>>18),e(128|n>>12&63),e(128|n>>6&63),e(128|n&63);return}throw new Error(`Unrecognized Unicode codepoint: ${n.toString(16)}`)}function Cx(n,e){for(let t=0;t<n.length;t+=1){let i=n.charCodeAt(t);if(i>55295&&i<=56319){const r=(i-55296)*1024&65535;i=(n.charCodeAt(t+1)-56320&65535|r)+65536,t+=1}Rx(i,e)}}function Px(n,e,t){if(e.utf8seq===0){if(n<=127){t(n);return}for(let i=1;i<6;i+=1)if(!(n>>7-i&1)){e.utf8seq=i;break}if(e.utf8seq===2)e.codepoint=n&31;else if(e.utf8seq===3)e.codepoint=n&15;else if(e.utf8seq===4)e.codepoint=n&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(n<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|n&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function yr(n){const e=[],t={queue:0,queuedBits:0},i=r=>{e.push(r)};for(let r=0;r<n.length;r+=1)Gd(n.charCodeAt(r),t,i);return new Uint8Array(e)}function Lx(n){const e=[];return Cx(n,t=>e.push(t)),new Uint8Array(e)}function Ii(n){const e=[],t={queue:0,queuedBits:0},i=r=>{e.push(r)};return n.forEach(r=>eh(r,t,i)),eh(null,t,i),e.join("")}function Ix(n){return Math.round(Date.now()/1e3)+n}function Dx(){return Symbol("auth-callback")}const zt=()=>typeof window<"u"&&typeof document<"u",Si={tested:!1,writable:!1},Vd=()=>{if(!zt())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Si.tested)return Si.writable;const n=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(n,n),globalThis.localStorage.removeItem(n),Si.tested=!0,Si.writable=!0}catch{Si.tested=!0,Si.writable=!1}return Si.writable};function Ux(n){const e={},t=new URL(n);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((r,s)=>{e[s]=r})}catch{}return t.searchParams.forEach((i,r)=>{e[r]=i}),e}const Wd=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),Ox=n=>typeof n=="object"&&n!==null&&"status"in n&&"ok"in n&&"json"in n&&typeof n.json=="function",fr=async(n,e,t)=>{await n.setItem(e,JSON.stringify(t))},vn=async(n,e)=>{const t=await n.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return null}},xt=async(n,e)=>{await n.removeItem(e)};class Wa{constructor(){this.promise=new Wa.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}Wa.promiseConstructor=Promise;function ta(n){const e=n.split(".");if(e.length!==3)throw new Ma("Invalid JWT structure");for(let i=0;i<e.length;i++)if(!xx.test(e[i]))throw new Ma("JWT not in base64url format");return{header:JSON.parse(th(e[0])),payload:JSON.parse(th(e[1])),signature:yr(e[2]),raw:{header:e[0],payload:e[1]}}}async function Nx(n){return await new Promise(e=>{setTimeout(()=>e(null),n)})}function kx(n,e){return new Promise((i,r)=>{(async()=>{for(let s=0;s<1/0;s++)try{const a=await n(s);if(!e(s,null,a)){i(a);return}}catch(a){if(!e(s,a)){r(a);return}}})()})}function Fx(n){return("0"+n.toString(16)).substr(-2)}function Bx(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=t.length;let r="";for(let s=0;s<56;s++)r+=t.charAt(Math.floor(Math.random()*i));return r}return crypto.getRandomValues(e),Array.from(e,Fx).join("")}async function zx(n){const t=new TextEncoder().encode(n),i=await crypto.subtle.digest("SHA-256",t),r=new Uint8Array(i);return Array.from(r).map(s=>String.fromCharCode(s)).join("")}async function Hx(n){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),n;const t=await zx(n);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function Ei(n,e,t=!1){const i=Bx();let r=i;t&&(r+="/recovery"),await fr(n,`${e}-code-verifier`,r);const s=await Hx(i);return[s,i===s?"plain":"s256"]}const Gx=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Vx(n){const e=n.headers.get(Nc);if(!e||!e.match(Gx))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function Wx(n){if(!n)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(n<=e)throw new Error("JWT has expired")}function jx(n){switch(n){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const qx=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Hn(n){if(!qx.test(n))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function _n(n){if(!n.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function Po(){const n={};return new Proxy(n,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const i=t.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Xx(n,e){return new Proxy(n,{get:(t,i,r)=>{if(i==="__isInsecureUserWarningProxy")return!0;if(typeof i=="symbol"){const s=i.toString();if(s==="Symbol(Symbol.toPrimitive)"||s==="Symbol(Symbol.toStringTag)"||s==="Symbol(util.inspect.custom)"||s==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(t,i,r)}return!e.value&&typeof i=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(t,i,r)}})}function nh(n){return JSON.parse(JSON.stringify(n))}const Ai=n=>{if(typeof n=="object"&&n!==null){const e=n;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(n)},Kx=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function ih(n){var e;if(!Ox(n))throw new kc(Ai(n),0);if(Kx.includes(n.status))throw new kc(Ai(n),n.status);let t;try{t=await n.json()}catch(s){throw new bn(Ai(s),s)}let i;const r=Vx(n);if(r&&r.getTime()>=Hd["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?i=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(i=t.error_code),i){if(i==="weak_password")throw new $u(Ai(t),n.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(i==="session_not_found")throw new Pt}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((s,a)=>s&&typeof a=="string",!0))throw new $u(Ai(t),n.status,t.weak_password.reasons);throw new bx(Ai(t),n.status||500,i)}const Yx=(n,e,t,i)=>{const r={method:n,headers:e?.headers||{}};return n==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e?.headers),r.body=JSON.stringify(i),Object.assign(Object.assign({},r),t))};async function Ee(n,e,t,i){var r;const s=Object.assign({},i?.headers);s[Nc]||(s[Nc]=Hd["2024-01-01"].name),i?.jwt&&(s.Authorization=`Bearer ${i.jwt}`);const a=(r=i?.query)!==null&&r!==void 0?r:{};i?.redirectTo&&(a.redirect_to=i.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",c=await Jx(n,e,t+o,{headers:s,noResolveJson:i?.noResolveJson},{},i?.body);return i?.xform?i?.xform(c):{data:Object.assign({},c),error:null}}async function Jx(n,e,t,i,r,s){const a=Yx(e,i,r,s);let o;try{o=await n(t,Object.assign({},a))}catch(c){throw console.error(c),new kc(Ai(c),0)}if(o.ok||await ih(o),i?.noResolveJson)return o;try{return await o.json()}catch(c){await ih(c)}}function cn(n){var e;let t=null;Qx(n)&&(t=Object.assign({},n),n.expires_at||(t.expires_at=Ix(n.expires_in)));const i=(e=n.user)!==null&&e!==void 0?e:typeof n?.id=="string"?n:null;return{data:{session:t,user:i},error:null}}function rh(n){const e=cn(n);return!e.error&&n.weak_password&&typeof n.weak_password=="object"&&Array.isArray(n.weak_password.reasons)&&n.weak_password.reasons.length&&n.weak_password.message&&typeof n.weak_password.message=="string"&&n.weak_password.reasons.reduce((t,i)=>t&&typeof i=="string",!0)&&(e.data.weak_password=n.weak_password),e}function ui(n){var e;return{data:{user:(e=n.user)!==null&&e!==void 0?e:n},error:null}}function Zx(n){return{data:n,error:null}}function $x(n){const{action_link:e,email_otp:t,hashed_token:i,redirect_to:r,verification_type:s}=n,a=Ha(n,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:t,hashed_token:i,redirect_to:r,verification_type:s},c=Object.assign({},a);return{data:{properties:o,user:c},error:null}}function sh(n){return n}function Qx(n){return!!n.access_token&&!!n.refresh_token&&!!n.expires_in}const Lo=["global","local","others"];class ew{constructor({url:e="",headers:t={},fetch:i,experimental:r}){this.url=e,this.headers=t,this.fetch=Wd(i),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,t=Lo[0]){if(Lo.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Lo.join(", ")}`);try{return await Ee(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(i){if(ue(i))return{data:null,error:i};throw i}}async inviteUserByEmail(e,t={}){try{return await Ee(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:ui})}catch(i){if(ue(i))return{data:{user:null},error:i};throw i}}async generateLink(e){try{const{options:t}=e,i=Ha(e,["options"]),r=Object.assign(Object.assign({},i),t);return"newEmail"in i&&(r.new_email=i?.newEmail,delete r.newEmail),await Ee(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:$x,redirectTo:t?.redirectTo})}catch(t){if(ue(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await Ee(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:ui})}catch(t){if(ue(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,i,r,s,a,o,c;try{const l={nextPage:null,lastPage:0,total:0},u=await Ee(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(t=e?.page)===null||t===void 0?void 0:t.toString())!==null&&i!==void 0?i:"",per_page:(s=(r=e?.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:sh});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(c=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&c!==void 0?c:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(g.split(";")[1].split("=")[1]);l[`${m}Page`]=_}),l.total=parseInt(d)),{data:Object.assign(Object.assign({},h),l),error:null}}catch(l){if(ue(l))return{data:{users:[]},error:l};throw l}}async getUserById(e){Hn(e);try{return await Ee(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:ui})}catch(t){if(ue(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){Hn(e);try{return await Ee(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:ui})}catch(i){if(ue(i))return{data:{user:null},error:i};throw i}}async deleteUser(e,t=!1){Hn(e);try{return await Ee(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:ui})}catch(i){if(ue(i))return{data:{user:null},error:i};throw i}}async _listFactors(e){Hn(e.userId);try{const{data:t,error:i}=await Ee(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:t,error:i}}catch(t){if(ue(t))return{data:null,error:t};throw t}}async _deleteFactor(e){Hn(e.userId),Hn(e.id);try{return{data:await Ee(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(ue(t))return{data:null,error:t};throw t}}async _listOAuthClients(e){var t,i,r,s,a,o,c;try{const l={nextPage:null,lastPage:0,total:0},u=await Ee(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(t=e?.page)===null||t===void 0?void 0:t.toString())!==null&&i!==void 0?i:"",per_page:(s=(r=e?.perPage)===null||r===void 0?void 0:r.toString())!==null&&s!==void 0?s:""},xform:sh});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(c=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&c!==void 0?c:[];return f.length>0&&(f.forEach(g=>{const _=parseInt(g.split(";")[0].split("=")[1].substring(0,1)),m=JSON.parse(g.split(";")[1].split("=")[1]);l[`${m}Page`]=_}),l.total=parseInt(d)),{data:Object.assign(Object.assign({},h),l),error:null}}catch(l){if(ue(l))return{data:{clients:[]},error:l};throw l}}async _createOAuthClient(e){try{return await Ee(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ue(t))return{data:null,error:t};throw t}}async _getOAuthClient(e){try{return await Ee(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ue(t))return{data:null,error:t};throw t}}async _updateOAuthClient(e,t){try{return await Ee(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:t,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ue(i))return{data:null,error:i};throw i}}async _deleteOAuthClient(e){try{return await Ee(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(ue(t))return{data:null,error:t};throw t}}async _regenerateOAuthClientSecret(e){try{return await Ee(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ue(t))return{data:null,error:t};throw t}}async _listCustomProviders(e){try{const t={};return e?.type&&(t.type=e.type),await Ee(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:t,xform:i=>{var r;return{data:{providers:(r=i?.providers)!==null&&r!==void 0?r:[]},error:null}}})}catch(t){if(ue(t))return{data:{providers:[]},error:t};throw t}}async _createCustomProvider(e){try{return await Ee(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ue(t))return{data:null,error:t};throw t}}async _getCustomProvider(e){try{return await Ee(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ue(t))return{data:null,error:t};throw t}}async _updateCustomProvider(e,t){try{return await Ee(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:t,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ue(i))return{data:null,error:i};throw i}}async _deleteCustomProvider(e){try{return await Ee(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(ue(t))return{data:null,error:t};throw t}}async _adminListPasskeys(e){_n(this.experimental),Hn(e.userId);try{return await Ee(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:t=>({data:t,error:null})})}catch(t){if(ue(t))return{data:null,error:t};throw t}}async _adminDeletePasskey(e){_n(this.experimental),Hn(e.userId),Hn(e.passkeyId);try{return await Ee(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(t){if(ue(t))return{data:null,error:t};throw t}}}function ah(n={}){return{getItem:e=>n[e]||null,setItem:(e,t)=>{n[e]=t},removeItem:e=>{delete n[e]}}}globalThis&&Vd()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class tw extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function nw(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function jd(n){if(!/^0x[a-fA-F0-9]{40}$/.test(n))throw new Error(`@supabase/auth-js: Address "${n}" is invalid.`);return n.toLowerCase()}function iw(n){return parseInt(n,16)}function rw(n){const e=new TextEncoder().encode(n);return"0x"+Array.from(e,i=>i.toString(16).padStart(2,"0")).join("")}function sw(n){var e;const{chainId:t,domain:i,expirationTime:r,issuedAt:s=new Date,nonce:a,notBefore:o,requestId:c,resources:l,scheme:u,uri:h,version:d}=n;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!i)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!h)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(d!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(!((e=n.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${n.statement}`)}const f=jd(n.address),g=u?`${u}://${i}`:i,_=n.statement?`${n.statement}
`:"",m=`${g} wants you to sign in with your Ethereum account:
${f}

${_}`;let p=`URI: ${h}
Version: ${d}
Chain ID: ${t}${a?`
Nonce: ${a}`:""}
Issued At: ${s.toISOString()}`;if(r&&(p+=`
Expiration Time: ${r.toISOString()}`),o&&(p+=`
Not Before: ${o.toISOString()}`),c&&(p+=`
Request ID: ${c}`),l){let x=`
Resources:`;for(const y of l){if(!y||typeof y!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${y}`);x+=`
- ${y}`}p+=x}return`${m}
${p}`}class bt extends Error{constructor({message:e,code:t,cause:i,name:r}){var s;super(e,{cause:i}),this.__isWebAuthnError=!0,this.name=(s=r??(i instanceof Error?i.name:void 0))!==null&&s!==void 0?s:"Unknown Error",this.code=t}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Aa extends bt{constructor(e,t){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t,message:e}),this.name="WebAuthnUnknownError",this.originalError=t}}function aw({error:n,options:e}){var t,i,r;const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new bt({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else if(n.name==="ConstraintError"){if(((t=s.authenticatorSelection)===null||t===void 0?void 0:t.requireResidentKey)===!0)return new bt({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:n});if(e.mediation==="conditional"&&((i=s.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new bt({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:n});if(((r=s.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new bt({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:n})}else{if(n.name==="InvalidStateError")return new bt({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:n});if(n.name==="NotAllowedError")return new bt({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="NotSupportedError")return s.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new bt({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:n}):new bt({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:n});if(n.name==="SecurityError"){const a=window.location.hostname;if(qd(a)){if(s.rp.id!==a)return new bt({message:`The RP ID "${s.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new bt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="TypeError"){if(s.user.id.byteLength<1||s.user.id.byteLength>64)return new bt({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:n})}else if(n.name==="UnknownError")return new bt({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new bt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}function ow({error:n,options:e}){const{publicKey:t}=e;if(!t)throw Error("options was missing required publicKey property");if(n.name==="AbortError"){if(e.signal instanceof AbortSignal)return new bt({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:n})}else{if(n.name==="NotAllowedError")return new bt({message:n.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n});if(n.name==="SecurityError"){const i=window.location.hostname;if(qd(i)){if(t.rpId!==i)return new bt({message:`The RP ID "${t.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:n})}else return new bt({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:n})}else if(n.name==="UnknownError")return new bt({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:n})}return new bt({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:n})}class cw{createNewAbortSignal(){if(this.controller){const t=new Error("Cancelling existing WebAuthn API call for new one");t.name="AbortError",this.controller.abort(t)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const Fc=new cw;function oh(n){if(!n)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(n);const{challenge:e,user:t,excludeCredentials:i}=n,r=Ha(n,["challenge","user","excludeCredentials"]),s=yr(e).buffer,a=Object.assign(Object.assign({},t),{id:yr(t.id).buffer}),o=Object.assign(Object.assign({},r),{challenge:s,user:a});if(i&&i.length>0){o.excludeCredentials=new Array(i.length);for(let c=0;c<i.length;c++){const l=i[c];o.excludeCredentials[c]=Object.assign(Object.assign({},l),{id:yr(l.id).buffer,type:l.type||"public-key",transports:l.transports})}}return o}function ch(n){if(!n)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(n);const{challenge:e,allowCredentials:t}=n,i=Ha(n,["challenge","allowCredentials"]),r=yr(e).buffer,s=Object.assign(Object.assign({},i),{challenge:r});if(t&&t.length>0){s.allowCredentials=new Array(t.length);for(let a=0;a<t.length;a++){const o=t[a];s.allowCredentials[a]=Object.assign(Object.assign({},o),{id:yr(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return s}function lh(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const t=n;return{id:n.id,rawId:n.id,response:{attestationObject:Ii(new Uint8Array(n.response.attestationObject)),clientDataJSON:Ii(new Uint8Array(n.response.clientDataJSON))},type:"public-key",clientExtensionResults:n.getClientExtensionResults(),authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function uh(n){var e;if("toJSON"in n&&typeof n.toJSON=="function")return n.toJSON();const t=n,i=n.getClientExtensionResults(),r=n.response;return{id:n.id,rawId:n.id,response:{authenticatorData:Ii(new Uint8Array(r.authenticatorData)),clientDataJSON:Ii(new Uint8Array(r.clientDataJSON)),signature:Ii(new Uint8Array(r.signature)),userHandle:r.userHandle?Ii(new Uint8Array(r.userHandle)):void 0},type:"public-key",clientExtensionResults:i,authenticatorAttachment:(e=t.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function qd(n){return n==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(n)}function Ra(){var n,e;return!!(zt()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((n=navigator?.credentials)===null||n===void 0?void 0:n.create)=="function"&&typeof((e=navigator?.credentials)===null||e===void 0?void 0:e.get)=="function")}async function Xd(n){try{const e=await navigator.credentials.create(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Aa("Browser returned unexpected credential type",e)}:{data:null,error:new Aa("Empty credential response",e)}}catch(e){return{data:null,error:aw({error:e,options:n})}}}async function Kd(n){try{const e=await navigator.credentials.get(n);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new Aa("Browser returned unexpected credential type",e)}:{data:null,error:new Aa("Empty credential response",e)}}catch(e){return{data:null,error:ow({error:e,options:n})}}}const lw={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},uw={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Ca(...n){const e=r=>r!==null&&typeof r=="object"&&!Array.isArray(r),t=r=>r instanceof ArrayBuffer||ArrayBuffer.isView(r),i={};for(const r of n)if(r)for(const s in r){const a=r[s];if(a!==void 0)if(Array.isArray(a))i[s]=a;else if(t(a))i[s]=a;else if(e(a)){const o=i[s];e(o)?i[s]=Ca(o,a):i[s]=Ca(a)}else i[s]=a}return i}function hw(n,e){return Ca(lw,n,e||{})}function dw(n,e){return Ca(uw,n,e||{})}class fw{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:t,friendlyName:i,signal:r},s){var a;try{const{data:o,error:c}=await this.client.mfa.challenge({factorId:e,webauthn:t});if(!o)return{data:null,error:c};const l=r??Fc.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:u}=o.webauthn.credential_options.publicKey;if(!u.name){const h=i;if(h)u.name=`${u.id}:${h}`;else{const f=(await this.client.getUser()).data.user,g=((a=f?.user_metadata)===null||a===void 0?void 0:a.name)||f?.email||f?.id||"User";u.name=`${u.id}:${g}`}}u.displayName||(u.displayName=u.name)}switch(o.webauthn.type){case"create":{const u=hw(o.webauthn.credential_options.publicKey,s?.create),{data:h,error:d}=await Xd({publicKey:u,signal:l});return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}case"request":{const u=dw(o.webauthn.credential_options.publicKey,s?.request),{data:h,error:d}=await Kd(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:u,signal:l}));return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}}}catch(o){return ue(o)?{data:null,error:o}:{data:null,error:new bn("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:t,webauthn:i}){return this.client.mfa.verify({factorId:t,challengeId:e,webauthn:i})}async _authenticate({factorId:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},s){if(!t)return{data:null,error:new ls("rpId is required for WebAuthn authentication")};try{if(!Ra())return{data:null,error:new bn("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:t,rpOrigins:i},signal:r},{request:s});if(!a)return{data:null,error:o};const{webauthn:c}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:c.type,rpId:t,rpOrigins:i,credential_response:c.credential_response}})}catch(a){return ue(a)?{data:null,error:a}:{data:null,error:new bn("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:t=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},s){if(!t)return{data:null,error:new ls("rpId is required for WebAuthn registration")};try{if(!Ra())return{data:null,error:new bn("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(u=>{var h;return(h=u.data)===null||h===void 0?void 0:h.all.find(d=>d.factor_type==="webauthn"&&d.friendly_name===e&&d.status!=="unverified")}).then(u=>u?this.client.mfa.unenroll({factorId:u?.id}):void 0),{data:null,error:o};const{data:c,error:l}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:t,rpOrigins:i},signal:r},{create:s});return c?this._verify({factorId:a.id,challengeId:c.challengeId,webauthn:{rpId:t,rpOrigins:i,type:c.webauthn.type,credential_response:c.webauthn.credential_response}}):{data:null,error:l}}catch(a){return ue(a)?{data:null,error:a}:{data:null,error:new bn("Unexpected error in register",a)}}}}nw();const pw={url:vx,storageKey:_x,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:yx,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},ur={};class us{get jwks(){var e,t;return(t=(e=ur[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){ur[this.storageKey]=Object.assign(Object.assign({},ur[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=ur[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){ur[this.storageKey]=Object.assign(Object.assign({},ur[this.storageKey]),{cachedAt:e})}constructor(e){var t,i,r;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const s=Object.assign(Object.assign({},pw),e);if(this.storageKey=s.storageKey,this.instanceID=(t=us.nextInstanceID[this.storageKey])!==null&&t!==void 0?t:0,us.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!s.debug,typeof s.debug=="function"&&(this.logger=s.debug),this.instanceID>0&&zt()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=s.persistSession,this.autoRefreshToken=s.autoRefreshToken,this.experimental=(i=s.experimental)!==null&&i!==void 0?i:{},this.admin=new ew({url:s.url,headers:s.headers,fetch:s.fetch,experimental:this.experimental}),this.url=s.url,this.headers=s.headers,this.fetch=Wd(s.fetch),this.detectSessionInUrl=s.detectSessionInUrl,this.flowType=s.flowType,this.hasCustomAuthorizationHeader=s.hasCustomAuthorizationHeader,this.throwOnError=s.throwOnError,this.lockAcquireTimeout=s.lockAcquireTimeout,s.lock!=null&&(this.lock=s.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new fw(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(s.storage?this.storage=s.storage:Vd()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=ah(this.memoryStorage)),s.userStorage&&(this.userStorage=s.userStorage)):(this.memoryStorage={},this.storage=ah(this.memoryStorage)),zt()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}s.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${zd}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let t={},i="none";if(zt()&&(t=Ux(window.location.href),this._isImplicitGrantCallback(t)?i="implicit":await this._isPKCECallback(t)&&(i="pkce")),zt()&&this.detectSessionInUrl&&i!=="none"){const{data:r,error:s}=await this._getSessionFromURL(t,i);if(s){if(this._debug("#_initialize()","error detecting session from URL",s),Ex(s)){const c=(e=s.details)===null||e===void 0?void 0:e.code;if(c==="identity_already_exists"||c==="identity_not_found"||c==="single_identity_not_deletable")return{error:s}}return{error:s}}const{session:a,redirectType:o}=r;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return ue(t)?this._returnResult({error:t}):this._returnResult({error:new bn("Unexpected error during initialization",t)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,i,r;try{const s=await Ee(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(t=e?.options)===null||t===void 0?void 0:t.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(r=e?.options)===null||r===void 0?void 0:r.captchaToken}},xform:cn}),{data:a,error:o}=s;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const c=a.session,l=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",c)),this._returnResult({data:{user:l,session:c},error:null})}catch(s){if(ue(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signUp(e){var t,i,r;try{let s;if("email"in e){const{email:u,password:h,options:d}=e;let f=null,g=null;this.flowType==="pkce"&&([f,g]=await Ei(this.storage,this.storageKey)),s=await Ee(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:d?.emailRedirectTo,body:{email:u,password:h,data:(t=d?.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:d?.captchaToken},code_challenge:f,code_challenge_method:g},xform:cn})}else if("phone"in e){const{phone:u,password:h,options:d}=e;s=await Ee(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:h,data:(i=d?.data)!==null&&i!==void 0?i:{},channel:(r=d?.channel)!==null&&r!==void 0?r:"sms",gotrue_meta_security:{captcha_token:d?.captchaToken}},xform:cn})}else throw new Qs("You must provide either an email or phone number and a password");const{data:a,error:o}=s;if(o||!a)return await xt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:o});const c=a.session,l=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",c)),this._returnResult({data:{user:l,session:c},error:null})}catch(s){if(await xt(this.storage,`${this.storageKey}-code-verifier`),ue(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithPassword(e){try{let t;if("email"in e){const{email:s,password:a,options:o}=e;t=await Ee(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:s,password:a,gotrue_meta_security:{captcha_token:o?.captchaToken}},xform:rh})}else if("phone"in e){const{phone:s,password:a,options:o}=e;t=await Ee(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:s,password:a,gotrue_meta_security:{captcha_token:o?.captchaToken}},xform:rh})}else throw new Qs("You must provide either an email or phone number and a password");const{data:i,error:r}=t;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!i||!i.session||!i.user){const s=new lr;return this._returnResult({data:{user:null,session:null},error:s})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:r})}catch(t){if(ue(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOAuth(e){var t,i,r,s;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(r=e.options)===null||r===void 0?void 0:r.queryParams,skipBrowserRedirect:(s=e.options)===null||s===void 0?void 0:s.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,i,r,s,a,o,c,l,u,h,d;let f,g;if("message"in e)f=e.message,g=e.signature;else{const{chain:_,wallet:m,statement:p,options:x}=e;let y;if(zt())if(typeof m=="object")y=m;else{const L=window;if("ethereum"in L&&typeof L.ethereum=="object"&&"request"in L.ethereum&&typeof L.ethereum.request=="function")y=L.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!x?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");y=m}const S=new URL((t=x?.url)!==null&&t!==void 0?t:window.location.href),E=await y.request({method:"eth_requestAccounts"}).then(L=>L).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!E||E.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const w=jd(E[0]);let T=(i=x?.signInWithEthereum)===null||i===void 0?void 0:i.chainId;if(!T){const L=await y.request({method:"eth_chainId"});T=iw(L)}const C={domain:S.host,address:w,statement:p,uri:S.href,version:"1",chainId:T,nonce:(r=x?.signInWithEthereum)===null||r===void 0?void 0:r.nonce,issuedAt:(a=(s=x?.signInWithEthereum)===null||s===void 0?void 0:s.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=x?.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(c=x?.signInWithEthereum)===null||c===void 0?void 0:c.notBefore,requestId:(l=x?.signInWithEthereum)===null||l===void 0?void 0:l.requestId,resources:(u=x?.signInWithEthereum)===null||u===void 0?void 0:u.resources};f=sw(C),g=await y.request({method:"personal_sign",params:[rw(f),w]})}try{const{data:_,error:m}=await Ee(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:g},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(d=e.options)===null||d===void 0?void 0:d.captchaToken}}:null),xform:cn});if(m)throw m;if(!_||!_.session||!_.user){const p=new lr;return this._returnResult({data:{user:null,session:null},error:p})}return _.session&&(await this._saveSession(_.session),await this._notifyAllSubscribers("SIGNED_IN",_.session)),this._returnResult({data:Object.assign({},_),error:m})}catch(_){if(ue(_))return this._returnResult({data:{user:null,session:null},error:_});throw _}}async signInWithSolana(e){var t,i,r,s,a,o,c,l,u,h,d,f;let g,_;if("message"in e)g=e.message,_=e.signature;else{const{chain:m,wallet:p,statement:x,options:y}=e;let S;if(zt())if(typeof p=="object")S=p;else{const w=window;if("solana"in w&&typeof w.solana=="object"&&("signIn"in w.solana&&typeof w.solana.signIn=="function"||"signMessage"in w.solana&&typeof w.solana.signMessage=="function"))S=w.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof p!="object"||!y?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");S=p}const E=new URL((t=y?.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in S&&S.signIn){const w=await S.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},y?.signInWithSolana),{version:"1",domain:E.host,uri:E.href}),x?{statement:x}:null));let T;if(Array.isArray(w)&&w[0]&&typeof w[0]=="object")T=w[0];else if(w&&typeof w=="object"&&"signedMessage"in w&&"signature"in w)T=w;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in T&&"signature"in T&&(typeof T.signedMessage=="string"||T.signedMessage instanceof Uint8Array)&&T.signature instanceof Uint8Array)g=typeof T.signedMessage=="string"?T.signedMessage:new TextDecoder().decode(T.signedMessage),_=T.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in S)||typeof S.signMessage!="function"||!("publicKey"in S)||typeof S!="object"||!S.publicKey||!("toBase58"in S.publicKey)||typeof S.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");g=[`${E.host} wants you to sign in with your Solana account:`,S.publicKey.toBase58(),...x?["",x,""]:[""],"Version: 1",`URI: ${E.href}`,`Issued At: ${(r=(i=y?.signInWithSolana)===null||i===void 0?void 0:i.issuedAt)!==null&&r!==void 0?r:new Date().toISOString()}`,...!((s=y?.signInWithSolana)===null||s===void 0)&&s.notBefore?[`Not Before: ${y.signInWithSolana.notBefore}`]:[],...!((a=y?.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${y.signInWithSolana.expirationTime}`]:[],...!((o=y?.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${y.signInWithSolana.chainId}`]:[],...!((c=y?.signInWithSolana)===null||c===void 0)&&c.nonce?[`Nonce: ${y.signInWithSolana.nonce}`]:[],...!((l=y?.signInWithSolana)===null||l===void 0)&&l.requestId?[`Request ID: ${y.signInWithSolana.requestId}`]:[],...!((h=(u=y?.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||h===void 0)&&h.length?["Resources",...y.signInWithSolana.resources.map(T=>`- ${T}`)]:[]].join(`
`);const w=await S.signMessage(new TextEncoder().encode(g),"utf8");if(!w||!(w instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");_=w}}try{const{data:m,error:p}=await Ee(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:g,signature:Ii(_)},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:cn});if(p)throw p;if(!m||!m.session||!m.user){const x=new lr;return this._returnResult({data:{user:null,session:null},error:x})}return m.session&&(await this._saveSession(m.session),await this._notifyAllSubscribers("SIGNED_IN",m.session)),this._returnResult({data:Object.assign({},m),error:p})}catch(m){if(ue(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async _exchangeCodeForSession(e){const t=await vn(this.storage,`${this.storageKey}-code-verifier`),[i,r]=(t??"").split("/");try{if(!i&&this.flowType==="pkce")throw new Mx;const{data:s,error:a}=await Ee(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:i},xform:cn});if(await xt(this.storage,`${this.storageKey}-code-verifier`),a)throw a;if(!s||!s.session||!s.user){const o=new lr;return this._returnResult({data:{user:null,session:null,redirectType:null},error:o})}return s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers(r==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",s.session)),this._returnResult({data:Object.assign(Object.assign({},s),{redirectType:r??null}),error:a})}catch(s){if(await xt(this.storage,`${this.storageKey}-code-verifier`),ue(s))return this._returnResult({data:{user:null,session:null,redirectType:null},error:s});throw s}}async signInWithIdToken(e){try{const{options:t,provider:i,token:r,access_token:s,nonce:a}=e,o=await Ee(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:r,access_token:s,nonce:a,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:cn}),{data:c,error:l}=o;if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!c||!c.session||!c.user){const u=new lr;return this._returnResult({data:{user:null,session:null},error:u})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers("SIGNED_IN",c.session)),this._returnResult({data:c,error:l})}catch(t){if(ue(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async signInWithOtp(e){var t,i,r,s,a;try{if("email"in e){const{email:o,options:c}=e;let l=null,u=null;this.flowType==="pkce"&&([l,u]=await Ei(this.storage,this.storageKey));const{error:h}=await Ee(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(t=c?.data)!==null&&t!==void 0?t:{},create_user:(i=c?.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:c?.captchaToken},code_challenge:l,code_challenge_method:u},redirectTo:c?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:h})}if("phone"in e){const{phone:o,options:c}=e,{data:l,error:u}=await Ee(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(r=c?.data)!==null&&r!==void 0?r:{},create_user:(s=c?.shouldCreateUser)!==null&&s!==void 0?s:!0,gotrue_meta_security:{captcha_token:c?.captchaToken},channel:(a=c?.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:l?.message_id},error:u})}throw new Qs("You must provide either an email or phone number.")}catch(o){if(await xt(this.storage,`${this.storageKey}-code-verifier`),ue(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async verifyOtp(e){var t,i;try{let r,s;"options"in e&&(r=(t=e.options)===null||t===void 0?void 0:t.redirectTo,s=(i=e.options)===null||i===void 0?void 0:i.captchaToken);const{data:a,error:o}=await Ee(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:s}}),redirectTo:r,xform:cn});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const c=a.session,l=a.user;return c?.access_token&&(await this._saveSession(c),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c)),this._returnResult({data:{user:l,session:c},error:null})}catch(r){if(ue(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithSSO(e){var t,i,r,s,a;try{let o=null,c=null;this.flowType==="pkce"&&([o,c]=await Ei(this.storage,this.storageKey));const l=await Ee(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(i=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&i!==void 0?i:void 0}),!((r=e?.options)===null||r===void 0)&&r.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:c}),headers:this.headers,xform:Zx});return!((s=l.data)===null||s===void 0)&&s.url&&zt()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(l.data.url),this._returnResult(l)}catch(o){if(await xt(this.storage,`${this.storageKey}-code-verifier`),ue(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)throw i;if(!t)throw new Pt;const{error:r}=await Ee(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(ue(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:i,type:r,options:s}=e;let a=null,o=null;this.flowType==="pkce"&&([a,o]=await Ei(this.storage,this.storageKey));const{error:c}=await Ee(this.fetch,"POST",t,{headers:this.headers,body:{email:i,type:r,gotrue_meta_security:{captcha_token:s?.captchaToken},code_challenge:a,code_challenge_method:o},redirectTo:s?.emailRedirectTo});return c&&await xt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:c})}else if("phone"in e){const{phone:i,type:r,options:s}=e,{data:a,error:o}=await Ee(this.fetch,"POST",t,{headers:this.headers,body:{phone:i,type:r,gotrue_meta_security:{captcha_token:s?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new Qs("You must provide either an email or phone number and a type")}catch(t){if(await xt(this.storage,`${this.storageKey}-code-verifier`),ue(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await i,await t()))();return this.pendingInLock.push((async()=>{try{await r}catch{}})()),r}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=t();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const r=[...this.pendingInLock];await Promise.all(r),this.pendingInLock.splice(0,r.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await vn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const i=e.expires_at?e.expires_at*1e3-Date.now()<Co:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",e.expires_at),!i){if(this.userStorage){const a=await vn(this.userStorage,this.storageKey+"-user");a?.user?e.user=a.user:e.user=Po()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=Xx(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:r,error:s}=await this._callRefreshToken(e.refresh_token);if(s){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await vn(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:s})}return this._returnResult({data:{session:r},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let t;return this.lock!=null?t=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):t=await this._getUser(),t.data.user&&(this.suppressGetSessionWarning=!0),t}async _getUser(e){try{return e?await Ee(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:ui}):await this._useSession(async t=>{var i,r,s;const{data:a,error:o}=t;if(o)throw o;return!(!((i=a.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new Pt}:await Ee(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(s=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&s!==void 0?s:void 0,xform:ui})})}catch(t){if(ue(t))return $s(t)&&(await this._removeSession(),await xt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:t});throw t}}async updateUser(e,t={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,t)):await this._updateUser(e,t)}async _updateUser(e,t={}){try{return await this._useSession(async i=>{const{data:r,error:s}=i;if(s)throw s;if(!r.session)throw new Pt;const a=r.session;let o=null,c=null;this.flowType==="pkce"&&e.email!=null&&([o,c]=await Ei(this.storage,this.storageKey));const{data:l,error:u}=await Ee(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:c}),jwt:a.access_token,xform:ui});if(u)throw u;return a.user=l.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),this._returnResult({data:{user:a.user},error:null})})}catch(i){if(await xt(this.storage,`${this.storageKey}-code-verifier`),ue(i))return this._returnResult({data:{user:null},error:i});throw i}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new Pt;const t=Date.now()/1e3;let i=t,r=!0,s=null;const{payload:a}=ta(e.access_token);if(a.exp&&(i=a.exp,r=i<=t),r){const{data:o,error:c}=await this._callRefreshToken(e.refresh_token);if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!o)return{data:{user:null,session:null},error:null};s=o}else{const{data:o,error:c}=await this._getUser(e.access_token);if(c)return this._returnResult({data:{user:null,session:null},error:c});s={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:i-t,expires_at:i},await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)}return this._returnResult({data:{user:s.user,session:s},error:null})}catch(t){if(ue(t))return this._returnResult({data:{session:null,user:null},error:t});throw t}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async t=>{var i;if(!e){const{data:a,error:o}=t;if(o)throw o;e=(i=a.session)!==null&&i!==void 0?i:void 0}if(!e?.refresh_token)throw new Pt;const{data:r,error:s}=await this._callRefreshToken(e.refresh_token);return s?this._returnResult({data:{user:null,session:null},error:s}):r?this._returnResult({data:{user:r.user,session:r},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(t){if(ue(t))return this._returnResult({data:{user:null,session:null},error:t});throw t}}async _getSessionFromURL(e,t){var i;try{if(!zt())throw new ea("No browser detected.");if(e.error||e.error_description||e.error_code)throw new ea(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new Yu("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new ea("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Yu("No code detected.");const{data:y,error:S}=await this._exchangeCodeForSession(e.code);if(S)throw S;const E=new URL(window.location.href);return E.searchParams.delete("code"),window.history.replaceState(window.history.state,"",E.toString()),{data:{session:y.session,redirectType:(i=y.redirectType)!==null&&i!==void 0?i:null},error:null}}const{provider_token:r,provider_refresh_token:s,access_token:a,refresh_token:o,expires_in:c,expires_at:l,token_type:u}=e;if(!a||!c||!o||!u)throw new ea("No session defined in URL");const h=Math.round(Date.now()/1e3),d=parseInt(c);let f=h+d;l&&(f=parseInt(l));const g=f-h;g*1e3<=jn&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${g}s, should have been closer to ${d}s`);const _=f-d;h-_>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",_,f,h):h-_<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",_,f,h);const{data:m,error:p}=await this._getUser(a);if(p)throw p;const x={provider_token:r,provider_refresh_token:s,access_token:a,expires_in:d,expires_at:f,refresh_token:o,token_type:u,user:m.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:x,redirectType:e.type},error:null})}catch(r){if(ue(r))return this._returnResult({data:{session:null,redirectType:null},error:r});throw r}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const t=await vn(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var i;const{data:r,error:s}=t;if(s&&!$s(s))return this._returnResult({error:s});const a=(i=r.session)===null||i===void 0?void 0:i.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(Sx(o)&&(o.status===404||o.status===401||o.status===403)||$s(o)))return this._returnResult({error:o})}return e!=="others"&&(await this._removeSession(),await xt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const t=Dx(),i={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,i),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(t)}):await this._emitInitialSession(t)))(),{data:{subscription:i}}}async _emitInitialSession(e){return await this._useSession(async t=>{var i,r;try{const{data:{session:s},error:a}=t;if(a)throw a;await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",s)),this._debug("INITIAL_SESSION","callback id",e,"session",s)}catch(s){await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",s),$s(s)?console.warn(s):console.error(s)}})}async resetPasswordForEmail(e,t={}){let i=null,r=null;this.flowType==="pkce"&&([i,r]=await Ei(this.storage,this.storageKey,!0));try{return await Ee(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:i,code_challenge_method:r,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(s){if(await xt(this.storage,`${this.storageKey}-code-verifier`),ue(s))return this._returnResult({data:null,error:s});throw s}}async getUserIdentities(){var e;try{const{data:t,error:i}=await this.getUser();if(i)throw i;return this._returnResult({data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(t){if(ue(t))return this._returnResult({data:null,error:t});throw t}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var t;try{const{data:i,error:r}=await this._useSession(async s=>{var a,o,c,l,u;const{data:h,error:d}=s;if(d)throw d;const f=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(c=e.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return await Ee(this.fetch,"GET",f,{headers:this.headers,jwt:(u=(l=h.session)===null||l===void 0?void 0:l.access_token)!==null&&u!==void 0?u:void 0})});if(r)throw r;return zt()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(i?.url),this._returnResult({data:{provider:e.provider,url:i?.url},error:null})}catch(i){if(ue(i))return this._returnResult({data:{provider:e.provider,url:null},error:i});throw i}}async linkIdentityIdToken(e){return await this._useSession(async t=>{var i;try{const{error:r,data:{session:s}}=t;if(r)throw r;const{options:a,provider:o,token:c,access_token:l,nonce:u}=e,h=await Ee(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(i=s?.access_token)!==null&&i!==void 0?i:void 0,body:{provider:o,id_token:c,access_token:l,nonce:u,link_identity:!0,gotrue_meta_security:{captcha_token:a?.captchaToken}},xform:cn}),{data:d,error:f}=h;return f?this._returnResult({data:{user:null,session:null},error:f}):!d||!d.session||!d.user?this._returnResult({data:{user:null,session:null},error:new lr}):(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("USER_UPDATED",d.session)),this._returnResult({data:d,error:f}))}catch(r){if(await xt(this.storage,`${this.storageKey}-code-verifier`),ue(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}})}async unlinkIdentity(e){try{return await this._useSession(async t=>{var i,r;const{data:s,error:a}=t;if(a)throw a;return await Ee(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(r=(i=s.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0})})}catch(t){if(ue(t))return this._returnResult({data:null,error:t});throw t}}async _refreshAccessToken(e){const t="#_refreshAccessToken()";this._debug(t,"begin");try{const i=Date.now();return await kx(async r=>(r>0&&await Nx(200*Math.pow(2,r-1)),this._debug(t,"refreshing attempt",r),await Ee(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:cn})),(r,s)=>{const a=200*Math.pow(2,r);return s&&Ju(s)&&Date.now()+a-i<jn})}catch(i){if(this._debug(t,"error",i),ue(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const i=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",i),zt()&&!t.skipBrowserRedirect&&window.location.assign(i),{data:{provider:e,url:i},error:null}}async _recoverAndRefresh(){var e,t;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const r=await vn(this.storage,this.storageKey);if(r&&this.userStorage){let a=await vn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:r.user},await fr(this.userStorage,this.storageKey+"-user",a)),r.user=(e=a?.user)!==null&&e!==void 0?e:Po()}else if(r&&!r.user&&!r.user){const a=await vn(this.storage,this.storageKey+"-user");a&&a?.user?(r.user=a.user,await xt(this.storage,this.storageKey+"-user"),await fr(this.storage,this.storageKey,r)):r.user=Po()}if(this._debug(i,"session from storage",r),!this._isValidSession(r)){this._debug(i,"session is not valid"),r!==null&&await this._removeSession();return}const s=((t=r.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<Co;if(this._debug(i,`session has${s?"":" not"} expired with margin of ${Co}s`),s){if(this.autoRefreshToken&&r.refresh_token){const{error:a}=await this._callRefreshToken(r.refresh_token);a&&(Tx(a)?this._debug(i,"refresh discarded by commit guard",a):this._debug(i,"refresh failed",a))}}else if(r.user&&r.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(r.access_token);!o&&a?.user?(r.user=a.user,await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)):this._debug(i,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(i,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(i,"error",r),console.error(r);return}finally{this._debug(i,"end")}}async _callRefreshToken(e){var t,i;if(!e)throw new Pt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const r="#_callRefreshToken()";this._debug(r,"begin");try{this.refreshingDeferred=new Wa;const s=await vn(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new Pt;const c=await vn(this.storage,this.storageKey);if(s!==null&&(c===null||c.refresh_token!==s.refresh_token)){this._debug(r,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:c?"replaced":"cleared"});const d={data:null,error:new Zu};return this.refreshingDeferred.resolve(d),d}const u=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==u){this._debug(r,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await xt(this.storage,this.storageKey),this.userStorage&&await xt(this.userStorage,this.storageKey+"-user");const d={data:null,error:new Zu};return this.refreshingDeferred.resolve(d),d}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const h={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(h),h}catch(s){if(this._debug(r,"error",s),ue(s)){const a={data:null,error:s};if(!Ju(s)){const o=await vn(this.storage,this.storageKey);!!(o?.expires_at&&o.expires_at*1e3>Date.now())?this._debug(r,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+gx},(t=this.refreshingDeferred)===null||t===void 0||t.resolve(a),a}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(s),s}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(e,t,i=!0){const r=`#_notifyAllSubscribers(${e})`;this._debug(r,"begin",t,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:e,session:t});const s=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,t)}catch(c){s.push(c)}});if(await Promise.all(a),s.length>0){for(let o=0;o<s.length;o+=1)console.error(s[o]);throw s[0]}}finally{this._debug(r,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await xt(this.storage,`${this.storageKey}-code-verifier`);const t=Object.assign({},e),i=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!i&&t.user&&await fr(this.userStorage,this.storageKey+"-user",{user:t.user});const r=Object.assign({},t);delete r.user;const s=nh(r);await fr(this.storage,this.storageKey,s)}else{const r=nh(t);await fr(this.storage,this.storageKey,r)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await xt(this.storage,this.storageKey),await xt(this.storage,this.storageKey+"-code-verifier"),await xt(this.storage,this.storageKey+"-user"),this.userStorage&&await xt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&zt()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),jn);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const t=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=t,t&&typeof t=="object"&&typeof t.unref=="function"?t.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(t)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const t=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,t&&clearTimeout(t)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:i}}=t;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/jn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${jn}ms, refresh threshold is ${Kr} ticks`),r<=Kr&&await this._callRefreshToken(i.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof tw)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async t=>{const{data:{session:i}}=t;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/jn);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${jn}ms, refresh threshold is ${Kr} ticks`),r<=Kr&&await this._callRefreshToken(i.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!zt()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;if(this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(t,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,i){const r=[`provider=${encodeURIComponent(t)}`];if(i?.redirectTo&&r.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),i?.scopes&&r.push(`scopes=${encodeURIComponent(i.scopes)}`),this.flowType==="pkce"){const[s,a]=await Ei(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(s)}`,code_challenge_method:`${encodeURIComponent(a)}`});r.push(o.toString())}if(i?.queryParams){const s=new URLSearchParams(i.queryParams);r.push(s.toString())}return i?.skipBrowserRedirect&&r.push(`skip_http_redirect=${i.skipBrowserRedirect}`),`${e}?${r.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var i;const{data:r,error:s}=t;return s?this._returnResult({data:null,error:s}):await Ee(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(i=r?.session)===null||i===void 0?void 0:i.access_token})})}catch(t){if(ue(t))return this._returnResult({data:null,error:t});throw t}}async _enroll(e){try{return await this._useSession(async t=>{var i,r;const{data:s,error:a}=t;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:c,error:l}=await Ee(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(i=s?.session)===null||i===void 0?void 0:i.access_token});return l?this._returnResult({data:null,error:l}):(e.factorType==="totp"&&c.type==="totp"&&(!((r=c?.totp)===null||r===void 0)&&r.qr_code)&&(c.totp.qr_code=`data:image/svg+xml;utf-8,${c.totp.qr_code}`),this._returnResult({data:c,error:null}))})}catch(t){if(ue(t))return this._returnResult({data:null,error:t});throw t}}async _verify(e){const t=async()=>{try{return await this._useSession(async i=>{var r;const{data:s,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?lh(e.webauthn.credential_response):uh(e.webauthn.credential_response)})}:{code:e.code}),{data:c,error:l}=await Ee(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(r=s?.session)===null||r===void 0?void 0:r.access_token});return l?this._returnResult({data:null,error:l}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+c.expires_in},c)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",c),this._returnResult({data:c,error:l}))})}catch(i){if(ue(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challenge(e){const t=async()=>{try{return await this._useSession(async i=>{var r;const{data:s,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=await Ee(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(r=s?.session)===null||r===void 0?void 0:r.access_token});if(o.error)return o;const{data:c}=o;if(c.type!=="webauthn")return{data:c,error:null};switch(c.webauthn.type){case"create":return{data:Object.assign(Object.assign({},c),{webauthn:Object.assign(Object.assign({},c.webauthn),{credential_options:Object.assign(Object.assign({},c.webauthn.credential_options),{publicKey:oh(c.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},c),{webauthn:Object.assign(Object.assign({},c.webauthn),{credential_options:Object.assign(Object.assign({},c.webauthn.credential_options),{publicKey:ch(c.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(i){if(ue(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,t):t()}async _challengeAndVerify(e){const{data:t,error:i}=await this._challenge({factorId:e.factorId});return i?this._returnResult({data:null,error:i}):await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){var e;const{data:{user:t},error:i}=await this.getUser();if(i)return{data:null,error:i};const r={all:[],phone:[],totp:[],webauthn:[]};for(const s of(e=t?.factors)!==null&&e!==void 0?e:[])r.all.push(s),s.status==="verified"&&r[s.factor_type].push(s);return{data:r,error:null}}async _getAuthenticatorAssuranceLevel(e){var t,i,r,s;if(e)try{const{payload:f}=ta(e);let g=null;f.aal&&(g=f.aal);let _=g;const{data:{user:m},error:p}=await this.getUser(e);if(p)return this._returnResult({data:null,error:p});((i=(t=m?.factors)===null||t===void 0?void 0:t.filter(S=>S.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(_="aal2");const y=f.amr||[];return{data:{currentLevel:g,nextLevel:_,currentAuthenticationMethods:y},error:null}}catch(f){if(ue(f))return this._returnResult({data:null,error:f});throw f}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:c}=ta(a.access_token);let l=null;c.aal&&(l=c.aal);let u=l;((s=(r=a.user.factors)===null||r===void 0?void 0:r.filter(f=>f.status==="verified"))!==null&&s!==void 0?s:[]).length>0&&(u="aal2");const d=c.amr||[];return{data:{currentLevel:l,nextLevel:u,currentAuthenticationMethods:d},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;return r?this._returnResult({data:null,error:r}):i?await Ee(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:i.access_token,xform:s=>({data:s,error:null})}):this._returnResult({data:null,error:new Pt})})}catch(t){if(ue(t))return this._returnResult({data:null,error:t});throw t}}async _approveAuthorization(e,t){try{return await this._useSession(async i=>{const{data:{session:r},error:s}=i;if(s)return this._returnResult({data:null,error:s});if(!r)return this._returnResult({data:null,error:new Pt});const a=await Ee(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&zt()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(i){if(ue(i))return this._returnResult({data:null,error:i});throw i}}async _denyAuthorization(e,t){try{return await this._useSession(async i=>{const{data:{session:r},error:s}=i;if(s)return this._returnResult({data:null,error:s});if(!r)return this._returnResult({data:null,error:new Pt});const a=await Ee(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&zt()&&!t?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(i){if(ue(i))return this._returnResult({data:null,error:i});throw i}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;return i?this._returnResult({data:null,error:i}):t?await Ee(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:t.access_token,xform:r=>({data:r,error:null})}):this._returnResult({data:null,error:new Pt})})}catch(e){if(ue(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;return r?this._returnResult({data:null,error:r}):i?(await Ee(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new Pt})})}catch(t){if(ue(t))return this._returnResult({data:null,error:t});throw t}}async fetchJwk(e,t={keys:[]}){let i=t.keys.find(o=>o.kid===e);if(i)return i;const r=Date.now();if(i=this.jwks.keys.find(o=>o.kid===e),i&&this.jwks_cached_at+wx>r)return i;const{data:s,error:a}=await Ee(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!s.keys||s.keys.length===0||(this.jwks=s,this.jwks_cached_at=r,i=s.keys.find(o=>o.kid===e),!i)?null:i}async getClaims(e,t={}){try{let i=e;if(!i){const{data:f,error:g}=await this.getSession();if(g||!f.session)return this._returnResult({data:null,error:g});i=f.session.access_token}const{header:r,payload:s,signature:a,raw:{header:o,payload:c}}=ta(i);if(!t?.allowExpired)try{Wx(s.exp)}catch(f){throw new Ma(f instanceof Error?f.message:"JWT validation failed")}const l=!r.alg||r.alg.startsWith("HS")||!r.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(r.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!l){const{error:f}=await this.getUser(i);if(f)throw f;return{data:{claims:s,header:r,signature:a},error:null}}const u=jx(r.alg),h=await crypto.subtle.importKey("jwk",l,u,!0,["verify"]);if(!await crypto.subtle.verify(u,h,a,Lx(`${o}.${c}`)))throw new Ma("Invalid JWT signature");return{data:{claims:s,header:r,signature:a},error:null}}catch(i){if(ue(i))return this._returnResult({data:null,error:i});throw i}}async signInWithPasskey(e){var t,i,r;_n(this.experimental);try{if(!Ra())return this._returnResult({data:null,error:new bn("Browser does not support WebAuthn",null)});const{data:s,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(t=e?.options)===null||t===void 0?void 0:t.captchaToken}});if(a||!s)return this._returnResult({data:null,error:a});const o=ch(s.options),c=(r=(i=e?.options)===null||i===void 0?void 0:i.signal)!==null&&r!==void 0?r:Fc.createNewAbortSignal(),{data:l,error:u}=await Kd({publicKey:o,signal:c});if(u||!l)return this._returnResult({data:null,error:u??new bn("WebAuthn ceremony failed",null)});const h=uh(l);return this._verifyPasskeyAuthentication({challengeId:s.challenge_id,credential:h})}catch(s){if(ue(s))return this._returnResult({data:null,error:s});throw s}}async registerPasskey(e){var t,i;_n(this.experimental);try{if(!Ra())return this._returnResult({data:null,error:new bn("Browser does not support WebAuthn",null)});const{data:r,error:s}=await this._startPasskeyRegistration();if(s||!r)return this._returnResult({data:null,error:s});const a=oh(r.options),o=(i=(t=e?.options)===null||t===void 0?void 0:t.signal)!==null&&i!==void 0?i:Fc.createNewAbortSignal(),{data:c,error:l}=await Xd({publicKey:a,signal:o});if(l||!c)return this._returnResult({data:null,error:l??new bn("WebAuthn ceremony failed",null)});const u=lh(c);return this._verifyPasskeyRegistration({challengeId:r.challenge_id,credential:u})}catch(r){if(ue(r))return this._returnResult({data:null,error:r});throw r}}async _startPasskeyRegistration(){_n(this.experimental);try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!t)return this._returnResult({data:null,error:new Pt});const{data:r,error:s}=await Ee(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:t.access_token,body:{}});return s?this._returnResult({data:null,error:s}):this._returnResult({data:r,error:null})})}catch(e){if(ue(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){_n(this.experimental);try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new Pt});const{data:s,error:a}=await Ee(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:i.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(t){if(ue(t))return this._returnResult({data:null,error:t});throw t}}async _startPasskeyAuthentication(e){var t;_n(this.experimental);try{const{data:i,error:r}=await Ee(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(t=e?.options)===null||t===void 0?void 0:t.captchaToken}}});return r?this._returnResult({data:null,error:r}):this._returnResult({data:i,error:null})}catch(i){if(ue(i))return this._returnResult({data:null,error:i});throw i}}async _verifyPasskeyAuthentication(e){_n(this.experimental);try{const{data:t,error:i}=await Ee(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:cn});return i?this._returnResult({data:null,error:i}):(t.session&&(await this._saveSession(t.session),await this._notifyAllSubscribers("SIGNED_IN",t.session)),this._returnResult({data:t,error:null}))}catch(t){if(ue(t))return this._returnResult({data:null,error:t});throw t}}async _listPasskeys(){_n(this.experimental);try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!t)return this._returnResult({data:null,error:new Pt});const{data:r,error:s}=await Ee(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:t.access_token,xform:a=>({data:a,error:null})});return s?this._returnResult({data:null,error:s}):this._returnResult({data:r,error:null})})}catch(e){if(ue(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){_n(this.experimental);try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new Pt});const{data:s,error:a}=await Ee(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:s,error:null})})}catch(t){if(ue(t))return this._returnResult({data:null,error:t});throw t}}async _deletePasskey(e){_n(this.experimental);try{return await this._useSession(async t=>{const{data:{session:i},error:r}=t;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new Pt});const{error:s}=await Ee(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,noResolveJson:!0});return s?this._returnResult({data:null,error:s}):this._returnResult({data:null,error:null})})}catch(t){if(ue(t))return this._returnResult({data:null,error:t});throw t}}}us.nextInstanceID={};const mw=us,gw="2.108.2";let Yr="",Pa;if(typeof Deno<"u"){var Io;Yr="deno",Pa=(Io=Deno.version)===null||Io===void 0?void 0:Io.deno}else if(typeof document<"u")Yr="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Yr="react-native";else{var Do;Yr="node",Pa=typeof process<"u"?(Do=process.version)===null||Do===void 0?void 0:Do.replace(/^v/,""):void 0}const Yd=[`runtime=${Yr}`];Pa&&Yd.push(`runtime-version=${Pa}`);const vw={"X-Client-Info":`supabase-js/${gw}; ${Yd.join("; ")}`},_w={headers:vw},yw={schema:"public"},xw={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},ww={},bw={enabled:!1,respectSamplingDecision:!0};function Sw(n,e,t,i){function r(s){return s instanceof t?s:new t(function(a){a(s)})}return new(t||(t=Promise))(function(s,a){function o(u){try{l(i.next(u))}catch(h){a(h)}}function c(u){try{l(i.throw(u))}catch(h){a(h)}}function l(u){u.done?s(u.value):r(u.value).then(o,c)}l((i=i.apply(n,[])).next())})}let Uo=null;const Ew="@opentelemetry/api";function Mw(){return Uo===null&&(Uo=import(Ew).catch(()=>null)),Uo}function Tw(){return Sw(this,void 0,void 0,function*(){try{const n=yield Mw();if(!n||!n.propagation||!n.context)return null;const e={};n.propagation.inject(n.context.active(),e);const t=e.traceparent;return t?{traceparent:t,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function Aw(n){if(!n||typeof n!="string")return null;const e=n.split("-");if(e.length!==4)return null;const[t,i,r,s]=e;if(t.length!==2||i.length!==32||r.length!==16||s.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(t)||!a.test(i)||!a.test(r)||!a.test(s)||i==="00000000000000000000000000000000"||r==="0000000000000000"?null:{version:t,traceId:i,parentId:r,traceFlags:s,isSampled:(parseInt(s,16)&1)===1}}function Rw(n,e){if(!n||!e||e.length===0)return!1;let t;if(n instanceof URL)t=n;else try{t=new URL(n)}catch{return!1}for(const i of e)try{if(typeof i=="string"){if(Cw(t.hostname,i))return!0}else if(i instanceof RegExp){if(i.test(t.hostname))return!0}else if(typeof i=="function"&&i(t))return!0}catch{continue}return!1}function Cw(n,e){if(e===n)return!0;if(e.startsWith("*.")){const t=e.slice(2);if(n.endsWith(t)&&(n===t||n.endsWith("."+t)))return!0}return!1}function Pw(n){const e=[];try{const t=new URL(n);e.push(t.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function hs(n){"@babel/helpers - typeof";return hs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},hs(n)}function Lw(n,e){if(hs(n)!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(hs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function Iw(n){var e=Lw(n,"string");return hs(e)=="symbol"?e:e+""}function Dw(n,e,t){return(e=Iw(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function hh(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),t.push.apply(t,i)}return t}function mt(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?hh(Object(t),!0).forEach(function(i){Dw(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):hh(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}const Uw=n=>n?(...e)=>n(...e):(...e)=>fetch(...e),Ow=()=>Headers,Nw=(n,e,t,i,r)=>{const s=Uw(i),a=Ow(),o=r?.enabled===!0,c=r?.respectSamplingDecision!==!1,l=o?Pw(e):null;return async(u,h)=>{var d;const f=(d=await t())!==null&&d!==void 0?d:n;let g=new a(h?.headers);if(g.has("apikey")||g.set("apikey",n),g.has("Authorization")||g.set("Authorization",`Bearer ${f}`),l){const _=await kw(u,l,c);_&&(_.traceparent&&!g.has("traceparent")&&g.set("traceparent",_.traceparent),_.tracestate&&!g.has("tracestate")&&g.set("tracestate",_.tracestate),_.baggage&&!g.has("baggage")&&g.set("baggage",_.baggage))}return s(u,mt(mt({},h),{},{headers:g}))}};async function kw(n,e,t){if(!Rw(typeof n=="string"||n instanceof URL?n:n.url,e))return null;const i=await Tw();if(!i||!i.traceparent)return null;if(t){const r=Aw(i.traceparent);if(r&&!r.isSampled)return null}return i}function dh(n){return typeof n=="boolean"?{enabled:n}:n}function Fw(n){return n.endsWith("/")?n:n+"/"}function Bw(n,e){var t,i,r,s,a,o;const{db:c,auth:l,realtime:u,global:h}=n,{db:d,auth:f,realtime:g,global:_}=e,m=dh(n.tracePropagation),p=dh(e.tracePropagation),x={db:mt(mt({},d),c),auth:mt(mt({},f),l),realtime:mt(mt({},g),u),storage:{},global:mt(mt(mt({},_),h),{},{headers:mt(mt({},(t=_?.headers)!==null&&t!==void 0?t:{}),(i=h?.headers)!==null&&i!==void 0?i:{})}),tracePropagation:{enabled:(r=(s=m?.enabled)!==null&&s!==void 0?s:p?.enabled)!==null&&r!==void 0?r:!1,respectSamplingDecision:(a=(o=m?.respectSamplingDecision)!==null&&o!==void 0?o:p?.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return n.accessToken?x.accessToken=n.accessToken:delete x.accessToken,x}function zw(n){const e=n?.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Fw(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var Hw=class extends mw{constructor(n){super(n)}},Gw=class{constructor(n,e,t){var i,r;this.supabaseUrl=n,this.supabaseKey=e;const s=zw(n);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",s),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",s),this.storageUrl=new URL("storage/v1",s),this.functionsUrl=new URL("functions/v1",s);const a=`sb-${s.hostname.split(".")[0]}-auth-token`,o={db:yw,realtime:ww,auth:mt(mt({},xw),{},{storageKey:a}),global:_w,tracePropagation:bw},c=Bw(t??{},o);if(this.settings=c,this.storageKey=(i=c.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(r=c.global.headers)!==null&&r!==void 0?r:{},c.accessToken)this.accessToken=c.accessToken,this.auth=new Proxy({},{get:(u,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}});else{var l;this.auth=this._initSupabaseAuthClient((l=c.auth)!==null&&l!==void 0?l:{},this.headers,c.global.fetch)}this.fetch=Nw(e,n,this._getAccessToken.bind(this),c.global.fetch,c.tracePropagation),this.realtime=this._initRealtimeClient(mt({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},c.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(u=>this.realtime.setAuth(u)).catch(u=>console.warn("Failed to set initial Realtime auth token:",u)),this.rest=new ny(new URL("rest/v1",s).href,{headers:this.headers,schema:c.db.schema,fetch:this.fetch,timeout:c.db.timeout,urlLengthLimit:c.db.urlLengthLimit}),this.storage=new mx(this.storageUrl.href,this.headers,this.fetch,t?.storage),c.accessToken||this._listenForAuthEvents()}get functions(){return new X_(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(n){return this.rest.from(n)}schema(n){return this.rest.schema(n)}rpc(n,e={},t={head:!1,get:!1,count:void 0}){return this.rest.rpc(n,e,t)}channel(n,e={config:{}}){return this.realtime.channel(n,e)}getChannels(){return this.realtime.getChannels()}removeChannel(n){return this.realtime.removeChannel(n)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var n=this,e,t;if(n.accessToken)return await n.accessToken();const{data:i}=await n.auth.getSession();return(e=(t=i.session)===null||t===void 0?void 0:t.access_token)!==null&&e!==void 0?e:n.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:n,persistSession:e,detectSessionInUrl:t,storage:i,userStorage:r,storageKey:s,flowType:a,lock:o,debug:c,throwOnError:l,experimental:u,lockAcquireTimeout:h,skipAutoInitialize:d},f,g){const _={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Hw({url:this.authUrl.href,headers:mt(mt({},_),f),storageKey:s,autoRefreshToken:n,persistSession:e,detectSessionInUrl:t,storage:i,userStorage:r,flowType:a,lock:o,debug:c,throwOnError:l,experimental:u,fetch:g,lockAcquireTimeout:h,skipAutoInitialize:d,hasCustomAuthorizationHeader:Object.keys(this.headers).some(m=>m.toLowerCase()==="authorization")})}_initRealtimeClient(n){return new Fy(this.realtimeUrl.href,mt(mt({},n),{},{params:mt(mt({},{apikey:this.supabaseKey}),n?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((n,e)=>{this._handleTokenChanged(n,"CLIENT",e?.access_token)})}_handleTokenChanged(n,e,t){(n==="TOKEN_REFRESHED"||n==="SIGNED_IN")&&this.changedAccessToken!==t?(this.changedAccessToken=t,this.realtime.setAuth(t)):n==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const Vw=(n,e,t)=>new Gw(n,e,t);function Ww(){if(typeof window<"u")return!1;const n=globalThis.process;if(!n)return!1;const e=n.version;if(e==null)return!1;const t=e.match(/^v(\d+)\./);return t?parseInt(t[1],10)<=18:!1}Ww()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const jw="https://trecgnvuqiznnvlepuia.supabase.co",Jd="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyZWNnbnZ1cWl6bm52bGVwdWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5MDczMjIsImV4cCI6MjA5NzQ4MzMyMn0.rS7dzLJ-eL0gVJhliFDWp6VYhC2J6BSfDzP1pZhQyeU",fi=!!Jd;function ml(){const n={roster:[],state:[],signal:[],join:[],leave:[],msg:[]},e=(f,g)=>n[f].forEach(_=>_(g));let t=null,i=null,r=null,s=new Set;fi&&(t=Vw(jw,Jd,{realtime:{params:{eventsPerSecond:20}}}));async function a(f,g){return fi?(r=g,i=t.channel(`room:${f}`,{config:{presence:{key:r.id},broadcast:{self:!1}}}),i.on("presence",{event:"sync"},()=>{const _=i.presenceState(),m=[],p=new Set;for(const x of Object.keys(_)){const y=_[x][0]||{};m.push({id:x,name:y.name,color:y.color}),p.add(x)}for(const x of p)x!==r.id&&!s.has(x)&&e("join",x);for(const x of s)p.has(x)||e("leave",x);s=p,e("roster",m)}),i.on("broadcast",{event:"state"},({payload:_})=>{_&&_.id!==r.id&&e("state",_)}),i.on("broadcast",{event:"signal"},({payload:_})=>{_&&_.to===r.id&&e("signal",_)}),i.on("broadcast",{event:"msg"},({payload:_})=>{_&&e("msg",_)}),await new Promise(_=>{i.subscribe(async m=>{m==="SUBSCRIBED"&&(await i.track({name:r.name,color:r.color,t:Date.now()}),_())})}),!0):!1}let o=0;function c(f){if(!i)return;const g=Date.now();g-o<80||(o=g,i.send({type:"broadcast",event:"state",payload:{id:r.id,...f}}))}function l(f,g){i&&i.send({type:"broadcast",event:"signal",payload:{from:r.id,to:f,data:g}})}function u(f,g={}){i&&i.send({type:"broadcast",event:"msg",payload:{type:f,from:r.id,...g}})}async function h(){if(i){try{await i.untrack()}catch{}await t.removeChannel(i),i=null}s=new Set}function d(f,g){return n[f]?(n[f].push(g),()=>{const _=n[f].indexOf(g);_>=0&&n[f].splice(_,1)}):()=>{}}return{join:a,leave:h,sendState:c,sendSignal:l,sendMsg:u,on:d,get myId(){return r?.id}}}const fh="ABCDEFGHJKLMNPQRSTUVWXYZ23456789";function qw(n=5){let e="";const t=new Uint32Array(n);crypto.getRandomValues(t);for(let i=0;i<n;i++)e+=fh[t[i]%fh.length];return e}function Xw(){return new Promise(n=>{const e=document.getElementById("lobby"),t=document.getElementById("name-input"),i=document.getElementById("code-input"),r=document.getElementById("btn-solo"),s=document.getElementById("btn-create"),a=document.getElementById("btn-join"),o=document.getElementById("lobby-msg");t.value=localStorage.getItem("bb_name")||"",r.textContent="🌍 Play";const l=(new URL(location.href).searchParams.get("room")||"").toUpperCase();l&&(i.value=l),fi||(o.textContent="Playing alone is ready. Rooms need a quick grown-up setup.");function u(){const f=t.value.trim().slice(0,12)||"Player";return localStorage.setItem("bb_name",f),f}function h(d){e.classList.add("hidden"),n(d)}r.addEventListener("click",()=>h({mode:"solo",name:u()})),s.addEventListener("click",()=>{if(!fi){o.textContent="Rooms are not set up yet - try Play!";return}h({mode:"multi",name:u(),code:qw()})}),a.addEventListener("click",()=>{const d=i.value.trim().toUpperCase();if(!d){o.textContent="Type a room code first!";return}if(!fi){o.textContent="Rooms are not set up yet - try Play!";return}h({mode:"multi",name:u(),code:d})})})}function Zd(){const n=new gt,e=new Map;function t(o,c,l){let u=e.get(o);if(!u){const h=Fa(l,c||"Player");n.add(h.root),u={avatar:h,cur:{x:0,y:-50,z:0},target:{x:0,y:-50,z:0},ry:0,targetRy:0,anim:"idle",name:c,color:l},e.set(o,u)}return u}function i(o){const c=e.get(o.id);c&&(c.target={x:o.x,y:o.y,z:o.z},c.targetRy=o.ry??c.targetRy,c.anim=o.anim||"idle")}function r(o){const c=new Set(o.map(l=>l.id));for(const l of o)t(l.id,l.name,l.color);for(const l of[...e.keys()])c.has(l)||s(l)}function s(o){const c=e.get(o);c&&(n.remove(c.avatar.root),c.avatar.root.traverse(l=>{l.geometry&&l.geometry.dispose(),l.material&&!l.material.userData?.shared&&l.material.dispose()}),e.delete(o))}function a(o,c){const l=1-Math.pow(1e-4,o);for(const u of e.values()){u.cur.x+=(u.target.x-u.cur.x)*l,u.cur.y+=(u.target.y-u.cur.y)*l,u.cur.z+=(u.target.z-u.cur.z)*l;let h=u.targetRy-u.ry;for(;h>Math.PI;)h-=Math.PI*2;for(;h<-Math.PI;)h+=Math.PI*2;u.ry+=h*l,u.avatar.root.position.set(u.cur.x,u.cur.y,u.cur.z),u.avatar.root.rotation.y=u.ry,u.avatar.update(u.anim,o,c)}}return{group:n,ensure:t,applyState:i,syncRoster:r,remove:s,update:a,count:()=>e.size}}const ph=[{urls:"stun:stun.cloudflare.com:3478"},{urls:"stun:stun.l.google.com:19302"},{urls:"turn:openrelay.metered.ca:80",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:443",username:"openrelayproject",credential:"openrelayproject"},{urls:"turn:openrelay.metered.ca:443?transport=tcp",username:"openrelayproject",credential:"openrelayproject"}];async function Kw(){try{const n=await fetch("/api/ice");if(n.ok){const e=await n.json();if(Array.isArray(e.iceServers)&&e.iceServers.length>0)return[...e.iceServers,...ph]}}catch{}return ph}function gl(n,{onSpeaking:e}={}){const t=new Map;let i=null,r=[],s=!0,a=!1,o=null,c=null;async function l(){if(a)return!0;o=n.myId;try{i=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0},video:!1})}catch{return!1}return i.getAudioTracks().forEach(E=>E.enabled=!1),r=await Kw(),a=!0,p("me",i,()=>!s),!0}function u(E){let w=t.get(E);if(w)return w;const T=new RTCPeerConnection({iceServers:r});return i&&i.getTracks().forEach(C=>T.addTrack(C,i)),T.onicecandidate=C=>{C.candidate&&n.sendSignal(E,{kind:"ice",candidate:C.candidate})},T.ontrack=C=>{const[L]=C.streams;let v=document.getElementById(`audio-${E}`);v||(v=document.createElement("audio"),v.id=`audio-${E}`,v.autoplay=!0,v.playsInline=!0,document.body.appendChild(v)),v.srcObject=L,v.play().catch(()=>{}),p(E,L,()=>!0)},T.onconnectionstatechange=()=>{["failed","closed","disconnected"].includes(T.connectionState)},w={pc:T},t.set(E,w),w}async function h(E){const{pc:w}=u(E),T=await w.createOffer();await w.setLocalDescription(T),n.sendSignal(E,{kind:"offer",sdp:w.localDescription})}async function d({from:E,data:w}){if(!a)return;const{pc:T}=u(E);try{if(w.kind==="offer"){await T.setRemoteDescription(w.sdp);const C=await T.createAnswer();await T.setLocalDescription(C),n.sendSignal(E,{kind:"answer",sdp:T.localDescription})}else w.kind==="answer"?await T.setRemoteDescription(w.sdp):w.kind==="ice"&&await T.addIceCandidate(w.candidate)}catch{}}function f(E){!a||E===o||(u(E),o<E&&h(E))}function g(E){const w=t.get(E);if(!w)return;try{w.pc.close()}catch{}const T=document.getElementById(`audio-${E}`);T&&T.remove(),t.delete(E),e&&e(E,!1)}function _(){return s=!s,i&&i.getAudioTracks().forEach(E=>E.enabled=!s),s}const m=new Map;function p(E,w,T){try{const C=window.AudioContext||window.webkitAudioContext,L=p.ac=p.ac||new C,v=L.createMediaStreamSource(w),b=L.createAnalyser();b.fftSize=256,v.connect(b),m.set(E,{analyser:b,data:new Uint8Array(b.frequencyBinCount),active:!1,gate:T}),c||x()}catch{}}function x(){for(const[E,w]of m){w.analyser.getByteFrequencyData(w.data);let T=0;for(let v=0;v<w.data.length;v++)T+=w.data[v];const C=T/w.data.length,L=w.gate()&&C>14;L!==w.active&&(w.active=L,e&&e(E,L))}c=requestAnimationFrame(x)}function y(){n.on("signal",d),n.on("join",f),n.on("leave",g)}function S(){for(const E of[...t.keys()])g(E);i&&i.getTracks().forEach(E=>E.stop()),c&&cancelAnimationFrame(c),c=null,a=!1}return{start:l,wire:y,connect:f,toggleMute:_,stop:S,isMuted:()=>s,isStarted:()=>a}}function Yw(n,e,t=1){const i=new gt;n.add(i);const r=[],s=[],a=[],o=[],c=new ot({color:16777215}),l=new En(1,0),u=Math.round(16*t);for(let P=0;P<u;P++){const z=new gt,I=3+P%2;for(let J=0;J<I;J++){const $=new fe(l,c);$.position.set(J*1.1-I*.5,J%2*.3,J%2*.4),$.scale.set(1+J%2*.5,.7,1+J%2*.4),z.add($)}z.position.set(P*11%60-30,7+P%4*2.5,P*9-6),z.userData.speed=.3+P%3*.15,i.add(z),r.push(z)}const h=new ot({color:16764730}),d=new Tn(.24,.1,8,16);{const P=e.checkpoints,z=t>.5?3:2;for(let I=0;I<P.length;I++){const J=I===0?{x:e.spawn.x,y:1,z:e.spawn.z}:P[I-1].pos,$=P[I].pos;for(let ie=1;ie<=z;ie++){const xe=ie/(z+1),Ie=new fe(d,h);Ie.position.set(J.x+($.x-J.x)*xe,J.y+($.y-J.y)*xe+.2,J.z+($.z-J.z)*xe),Ie.userData.phase=I+ie,Ie.userData.collected=!1,en(Ie),i.add(Ie),s.push(Ie)}}}const f=Qe(10120015),g=new Wt(.16,.22,1,7),_=new En(.7,0),m=new En(.5,0),p=Qe(7067242,{flatShading:!0}),x=Qe(5224540,{flatShading:!0}),y=new Dn(.34,12,12),S=new ot({color:16777215,transparent:!0,opacity:.5}),E=new Wt(.01,.01,1.2,4);function w(P,z,I,J){const $=new gt,ie=new fe(g,f);ie.position.y=.5,ie.castShadow=!0;const xe=new fe(_,p);xe.position.y=1.25,xe.castShadow=!0;const Ie=new fe(m,x);Ie.position.set(.2,1.7,.1),$.add(ie,xe,Ie),$.position.set(P,z,I),$.scale.setScalar(J),i.add($)}for(const P of e.checkpoints){t>.5&&(w(-3,P.pos.y-1,P.pos.z,.9+P.index%2*.3),w(3,P.pos.y-1,P.pos.z-.6,.8+P.index%3*.2));const z=[16748146,6276848,6280858,16766046,12558847,16749756][P.index%6];for(const I of[-1.4,1.4]){const J=new gt,$=new fe(E,S);$.position.y=.6;const ie=new fe(y,Qe(z));ie.scale.y=1.2,ie.position.y=1.5,J.add($,ie),J.position.set(P.pos.x+I,P.pos.y,P.pos.z+.5),J.userData.phase=P.index+I,i.add(J),a.push(J)}}const T=[];function C(P,z=1.1){const I=document.createElement("canvas");I.width=I.height=128;const J=I.getContext("2d");J.font="96px serif",J.textAlign="center",J.textBaseline="middle",J.fillText(P,64,72);const $=new ka(I);$.colorSpace=Ot;const ie=new el(new Na({map:$,transparent:!0}));return ie.scale.set(z,z,1),ie}{const P=e.checkpoints,z=[{type:"doublejump",char:"🎈",icon:"🎈",label:"Double Jump"},{type:"speed",char:"⚡",icon:"⚡",label:"Speed Boost"}];for(let I=1;I<P.length;I+=2){const J=P[I-1].pos,$=P[I].pos,ie=z[(I>>1)%z.length],xe=C(ie.char,1.3);xe.position.set((J.x+$.x)/2,(J.y+$.y)/2+.8,(J.z+$.z)/2),xe.userData={...ie,collected:!1,phase:I,baseY:xe.position.y},i.add(xe),T.push(xe)}}function L(P,z,I=1.5){return Math.abs(P.x-z.position.x)<I&&Math.abs(P.y+.4-z.position.y)<1.8&&Math.abs(P.z-z.position.z)<I}function v(P){let z=0;for(const I of s)I.userData.collected||L(P,I,1.4)&&(I.userData.collected=!0,I.visible=!1,z++,H({x:I.position.x,y:I.position.y,z:I.position.z}));return z}function b(P){for(const z of T)if(!z.userData.collected&&L(P,z,1.6))return z.userData.collected=!0,z.visible=!1,H({x:z.position.x,y:z.position.y,z:z.position.z}),{type:z.userData.type,icon:z.userData.icon,label:z.userData.label};return null}function U(){for(const P of s)P.userData.collected=!1,P.visible=!0;for(const P of T)P.userData.collected=!1,P.visible=!0}function H(P){const I=new Float32Array(42),J=[];for(let xe=0;xe<14;xe++){I[xe*3]=P.x,I[xe*3+1]=P.y,I[xe*3+2]=P.z;const Ie=xe/14*Math.PI*2;J.push(new N(Math.cos(Ie)*2,3+Math.random()*2,Math.sin(Ie)*2))}const $=new Ht;$.setAttribute("position",new nn(I,3));const ie=new w_($,new dd({color:16777215,size:.22,transparent:!0,blending:ns,depthWrite:!1}));en(ie),i.add(ie),o.push({obj:ie,age:0,ttl:.7,tick(xe,Ie){const X=$.attributes.position.array;for(let Q=0;Q<14;Q++)X[Q*3]+=J[Q].x*xe,X[Q*3+1]+=(J[Q].y-Ie*6)*xe,X[Q*3+2]+=J[Q].z*xe;$.attributes.position.needsUpdate=!0,ie.material.opacity=1-Ie/.7}})}function j(P){const z=[16748146,6276848,6280858,16766046,12558847,16749756],I=Math.round(50*t),J=new $n(.18,.18),$=new x_(J,new ot({side:$t,vertexColors:!1}),I),ie=new St,xe=[],Ie=new Ue;for(let X=0;X<I;X++)xe.push({x:P.x+(Math.random()-.5)*5,y:P.y+5+Math.random()*3,z:P.z+(Math.random()-.5)*5,vy:-2-Math.random()*2,rot:Math.random()*Math.PI,vr:(Math.random()-.5)*8,spin:Math.random()*Math.PI}),$.setColorAt(X,Ie.set(z[X%z.length]));i.add($),o.push({obj:$,age:0,ttl:2.4,tick(X){for(let Q=0;Q<I;Q++){const le=xe[Q];le.y+=le.vy*X,le.rot+=le.vr*X,ie.position.set(le.x,le.y,le.z),ie.rotation.set(le.rot,le.spin,le.rot*.5),ie.updateMatrix(),$.setMatrixAt(Q,ie.matrix)}$.instanceMatrix.needsUpdate=!0}})}function V(P,z){for(const I of r)I.position.x+=I.userData.speed*P,I.position.x>36&&(I.position.x=-36);for(const I of s)I.visible&&(I.rotation.y+=P*2.5,I.position.y+=Math.sin(z*2+I.userData.phase)*P*.4);for(const I of T)I.visible&&(I.position.y=I.userData.baseY+Math.sin(z*2+I.userData.phase)*.18,I.material.rotation=Math.sin(z*2)*.2);for(const I of a)I.rotation.z=Math.sin(z*1.3+I.userData.phase)*.12;for(let I=o.length-1;I>=0;I--){const J=o[I];J.age+=P,J.tick(P,J.age),J.age>=J.ttl&&(i.remove(J.obj),J.obj.geometry?.dispose?.(),J.obj.material?.dispose?.(),o.splice(I,1))}}return{group:i,update:V,spawnSparkle:H,spawnConfetti:j,collectCoins:v,collectPowerup:b,resetCollectibles:U}}const $d={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ki{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Jw=new Jc(-1,1,1,-1,0,1);class Zw extends Ht{constructor(){super(),this.setAttribute("position",new ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ft([0,2,0,0,2,0],2))}}const $w=new Zw;class ja{constructor(e){this._mesh=new fe($w,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Qd extends ki{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof _t?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=di.clone(e.uniforms),this.material=new _t({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new ja(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class mh extends ki{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Qw extends ki{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class gh{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Pe);this._width=i.width,this._height=i.height,t=new tn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Qd($d),this.copyPass.material.blending=Kn,this.clock=new T_}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}mh!==void 0&&(a instanceof mh?i=!0:a instanceof Qw&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Pe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class eb extends ki{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ue}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const tb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ue(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ar extends ki{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new Pe(e.x,e.y):new Pe(256,256),this.clearColor=new Ue(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new tn(s,a,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new tn(s,a,{type:Mn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new tn(s,a,{type:Mn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=tb;this.highPassUniforms=di.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _t({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Pe(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=$d;this.copyUniforms=di.clone(u.uniforms),this.blendMaterial=new _t({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ns,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ue,this.oldClearAlpha=1,this.basic=new ot,this.fsQuad=new ja(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new Pe(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ar.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ar.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new _t({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Pe(.5,.5)},direction:{value:new Pe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new _t({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Ar.BlurDirectionX=new Pe(1,0);Ar.BlurDirectionY=new Pe(0,1);const na={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Pe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},ia={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Pe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Oo={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Pe(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class nb extends ki{constructor(e,t){super(),this.edgesRT=new tn(e,t,{depthBuffer:!1,type:Mn}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new tn(e,t,{depthBuffer:!1,type:Mn}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,r=new Image;r.src=this.getAreaTexture(),r.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new Dt,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=r,this.areaTexture.minFilter=un,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new Dt,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Lt,this.searchTexture.minFilter=Lt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=di.clone(na.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new _t({defines:Object.assign({},na.defines),uniforms:this.uniformsEdges,vertexShader:na.vertexShader,fragmentShader:na.fragmentShader}),this.uniformsWeights=di.clone(ia.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new _t({defines:Object.assign({},ia.defines),uniforms:this.uniformsWeights,vertexShader:ia.vertexShader,fragmentShader:ia.fragmentShader}),this.uniformsBlend=di.clone(Oo.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new _t({uniforms:this.uniformsBlend,vertexShader:Oo.vertexShader,fragmentShader:Oo.fragmentShader}),this.fsQuad=new ja(null)}render(e,t,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,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"}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const ib={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class rb extends ki{constructor(){super();const e=ib;this.uniforms=di.clone(e.uniforms),this.material=new b_({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new ja(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Lh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ih?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Dh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Oh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ds&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}function vl(n,e,t,i={}){const{low:r=!1}=i,s=window.innerWidth,a=window.innerHeight,o=r?1:Math.min(window.devicePixelRatio,2),c=new Kc;c.set(pd);const l=new ot({color:0}),u=new Map,h=new eb(e,t),d=new Ar(new Pe(s,a),r?.35:.5,.4,0),f=new gh(n);f.renderToScreen=!1,f.setPixelRatio(o),f.setSize(s,a),f.addPass(h),f.addPass(d);const g=new Qd(new _t({uniforms:{baseTexture:{value:null},bloomTexture:{value:f.renderTarget2.texture}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`uniform sampler2D baseTexture; uniform sampler2D bloomTexture; varying vec2 vUv;
        void main(){ gl_FragColor = texture2D(baseTexture, vUv) + texture2D(bloomTexture, vUv); }`}),"baseTexture");g.needsSwap=!0;const _=new gh(n);_.setPixelRatio(o),_.setSize(s,a),_.addPass(h),_.addPass(g),_.addPass(new nb(s,a)),_.addPass(new rb);function m(S){S.isMesh&&!c.test(S.layers)&&(u.set(S,S.material),S.material=l)}function p(S){u.has(S)&&(S.material=u.get(S),u.delete(S))}function x(){e.traverse(m),f.render(),e.traverse(p),_.render()}function y(S,E){f.setSize(S,E),_.setSize(S,E),d.setSize(S,E)}return{render:x,setSize:y}}const vh="bb_xp";function No(n){let e=1,t=0,i=100;for(;n>=t+i;)t+=i,e++,i=50+e*50;const r=n-t;return{level:e,into:r,need:i,frac:Math.max(0,Math.min(1,r/i))}}function Fi(){let n=Number(localStorage.getItem(vh)||0)||0;function e(){return No(n)}function t(i){const r=No(n).level;n+=i;try{localStorage.setItem(vh,String(n))}catch{}const s=No(n);return{leveledUp:s.level>r,level:s.level,info:s}}return{addXp:t,info:e,getXp:()=>n}}const ra=10;function sb(n){za();const e=document.getElementById("arcade"),t=dl(),i=hl(),r=Fi();e.classList.remove("hidden"),document.getElementById("hud").classList.remove("hidden"),document.getElementById("touch-controls")?.classList.add("hidden"),document.getElementById("room-badge")?.classList.add("hidden"),document.getElementById("btn-mute")?.classList.add("hidden"),document.getElementById("btn-home")?.classList.remove("hidden"),t.setLevel(r.info()),t.setCoins(0);const s=document.getElementById("arcade-q"),a=document.getElementById("arcade-total"),o=document.getElementById("arcade-result"),c=e.querySelector(".arcade-head");a.textContent=String(ra),c.classList.remove("hidden"),o.classList.add("hidden");let l=0,u=0,h=0,d=!1;function f(E){const w=r.addXp(E);t.setLevel(w.info),w.leveledUp&&(t.popLevel(),t.showFlash(`Level ${w.level}! 🎉`,1100),at.levelup())}async function g(){let E=0;for(let w=0;w<ra&&!d;w++){s.textContent=String(w+1);const T=await i.ask(gs(Math.floor(w/3)),{progress:w/ra});if(d)return;T?(E++,h++,l++,u+=2,t.addStar(),t.setCoins(u),at.correct(),f(15),h%3===0&&(l++,t.addStar(),f(15),t.showFlash(`${h} in a row! Bonus ⭐`,1100))):(h=0,at.wrong()),await ab(350)}d||_(E)}function _(E){c.classList.add("hidden"),document.getElementById("arcade-result-emoji").textContent=E>=8?"🏆":E>=5?"🎉":"👍",document.getElementById("arcade-result-title").textContent=E>=8?"Amazing!":E>=5?"Great job!":"Good try!",document.getElementById("arcade-result-sub").innerHTML=`You got <b>${E} / ${ra}</b> right!<br>⭐ ${l} stars · 🪙 ${u} coins · Level ${r.info().level}`,o.classList.remove("hidden"),at.win()}const m=document.getElementById("btn-arcade-again"),p=document.getElementById("btn-arcade-menu"),x=()=>{o.classList.add("hidden"),c.classList.remove("hidden"),l=0,u=0,h=0,t.setStars(0),t.setCoins(0),g()},y=()=>n();m.addEventListener("click",x),p.addEventListener("click",y),g();function S(){d=!0,m.removeEventListener("click",x),p.removeEventListener("click",y),e.classList.add("hidden"),o.classList.add("hidden"),document.getElementById("quiz")?.classList.add("hidden"),document.getElementById("btn-home")?.classList.add("hidden")}return{destroy:S}}const ab=n=>new Promise(e=>setTimeout(e,n)),ko={lion:"Lion",rocket:"Rocket",boat:"Sailboat",car:"Race Car",house:"Cozy House",fish:"Happy Fish"},ob="/brainblox/",_h=["lion","rocket","boat","car","house","fish"].map(n=>({name:n,url:`${ob}assets/puzzles/${n}.png`}));function cb(n){za();const e=document.getElementById("puzzles"),t=Fi();e.classList.remove("hidden"),document.getElementById("hud")?.classList.add("hidden"),document.getElementById("btn-home")?.classList.remove("hidden");let i=[];function r(c,l,u){c.addEventListener(l,u),i.push(()=>c.removeEventListener(l,u))}s();function s(){e.innerHTML=`
      <div class="puz-wrap">
        <h1 class="puz-title">🧩 Pick a Puzzle</h1>
        <div class="puz-pick">
          ${_h.map(l=>`<button class="puz-thumb" data-name="${l.name}"><img src="${l.url}" alt="${ko[l.name]||l.name}"/><span>${ko[l.name]||l.name}</span></button>`).join("")}
        </div>
        <div class="puz-diff">
          <span>Pieces:</span>
          <button class="puz-dbtn selected" data-n="3">Easy</button>
          <button class="puz-dbtn" data-n="4">Medium</button>
        </div>
      </div>`;let c=3;e.querySelectorAll(".puz-dbtn").forEach(l=>r(l,"click",()=>{e.querySelectorAll(".puz-dbtn").forEach(u=>u.classList.remove("selected")),l.classList.add("selected"),c=Number(l.dataset.n)})),e.querySelectorAll(".puz-thumb").forEach(l=>r(l,"click",()=>{const u=_h.find(h=>h.name===l.dataset.name);a(u,c)}))}function a(c,l){const u=l*l,h=lb([...Array(u).keys()]);e.innerHTML=`
      <div class="puz-wrap">
        <h1 class="puz-title">${ko[c.name]||c.name}</h1>
        <div class="puz-game">
          <div class="puz-board" style="--n:${l}"></div>
          <div class="puz-tray"></div>
        </div>
        <button class="btn puz-back">↩ Other puzzles</button>
        <div class="puz-feedback" id="puz-feedback"></div>
      </div>`;const d=e.querySelector(".puz-board"),f=e.querySelector(".puz-tray");r(e.querySelector(".puz-back"),"click",s);const g=[];for(let E=0;E<u;E++){const w=document.createElement("div");w.className="puz-cell",w.dataset.idx=E,w.style.backgroundImage=`url(${c.url})`,w.style.backgroundSize=`${l*100}% ${l*100}%`,w.style.backgroundPosition=yh(E,l),d.appendChild(w),g.push(w),r(w,"click",()=>y(E))}function _(E){const w=document.createElement("div");return w.className="puz-piece",w.dataset.idx=E,w.style.backgroundImage=`url(${c.url})`,w.style.backgroundSize=`${l*100}% ${l*100}%`,w.style.backgroundPosition=yh(E,l),r(w,"click",()=>x(w)),w}h.forEach(E=>f.appendChild(_(E)));let m=null,p=0;function x(E){m&&m.classList.remove("selected"),m=m===E?null:E,m&&m.classList.add("selected")}function y(E){const w=g[E];if(w.classList.contains("filled")||!m)return;if(Number(m.dataset.idx)===E)w.classList.add("filled"),w.classList.add("pop"),m.remove(),m=null,p++,at.coin(),p===u&&S();else{m.classList.remove("selected");const C=m;C.classList.add("shake"),setTimeout(()=>C.classList.remove("shake"),400),m=null,at.wrong()}}function S(){const E=e.querySelector("#puz-feedback");E.textContent="You did it! 🎉",E.className="puz-feedback good",at.win(),t.addXp(40),ub(e),setTimeout(()=>{const w=document.createElement("button");w.className="btn btn-accent puz-again",w.textContent="Next Puzzle →",r(w,"click",s),E.after(w)},700)}}function o(){i.forEach(c=>c()),i=[],e.innerHTML="",e.classList.add("hidden"),document.getElementById("btn-home")?.classList.add("hidden")}return{destroy:o}}function yh(n,e){const t=n%e,i=Math.floor(n/e),r=e===1?0:t/(e-1)*100,s=e===1?0:i/(e-1)*100;return`${r}% ${s}%`}function lb(n){for(let e=n.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}function ub(n){const e=["🎉","⭐","🎊","✨","🏆"];for(let t=0;t<18;t++){const i=document.createElement("div");i.className="puz-confetti",i.textContent=e[t%e.length],i.style.left=30+Math.random()*40+"%",i.style.animationDelay=Math.random()*.3+"s",n.appendChild(i),setTimeout(()=>i.remove(),2e3)}}const xh=[{key:"letters",emoji:"🔤",name:"Letters",desc:"ABC & sounds"},{key:"numbers",emoji:"🔢",name:"Numbers",desc:"Count & order"},{key:"shapes",emoji:"🔷",name:"Shapes",desc:"Circle, star…"},{key:"colors",emoji:"🎨",name:"Colors",desc:"Red, blue…"}],Fo=8;function hb(n){za();const e=document.getElementById("learn"),t=hl(),i=dl(),r=Fi();e.classList.remove("hidden"),document.getElementById("btn-home")?.classList.remove("hidden");let s=!1;a();function a(){document.getElementById("hud")?.classList.add("hidden"),e.innerHTML=`
      <div class="learn-wrap">
        <h1 class="learn-title">📚 What shall we learn?</h1>
        <div class="learn-grid">
          ${xh.map(u=>`<button class="learn-card" data-key="${u.key}"><span class="lc-emoji">${u.emoji}</span><span class="lc-name">${u.name}</span><span class="lc-desc">${u.desc}</span></button>`).join("")}
        </div>
        <div class="learn-foot">Level <b>${r.info().level}</b></div>
      </div>`,e.querySelectorAll(".learn-card").forEach(u=>u.addEventListener("click",()=>o(u.dataset.key)))}async function o(u){e.innerHTML="",document.getElementById("hud")?.classList.remove("hidden"),document.getElementById("touch-controls")?.classList.add("hidden"),document.getElementById("room-badge")?.classList.add("hidden"),document.getElementById("btn-mute")?.classList.add("hidden"),i.setLevel(r.info()),i.setCoins(0);let h=0,d=0;for(let f=0;f<Fo&&!s;f++){const g=await t.ask(V_(u,Math.floor(f/3)),{progress:f/Fo});if(s)return;if(g){h++,d++,i.addStar(),at.correct();const _=r.addXp(12);i.setLevel(_.info),_.leveledUp&&(i.popLevel(),i.showFlash(`Level ${_.level}! 🎉`,1e3),at.levelup()),d%3===0&&(i.addStar(),i.showFlash(`${d} in a row! ⭐`,900))}else d=0,at.wrong();await db(300)}s||c(u,h)}function c(u,h){document.getElementById("hud")?.classList.add("hidden");const d=xh.find(f=>f.key===u);e.innerHTML=`
      <div class="learn-wrap">
        <div class="result-card">
          <div class="win-emoji">${h>=7?"🏆":h>=4?"🎉":"👍"}</div>
          <h2>${d.emoji} ${d.name}</h2>
          <p class="win-stars">You got <b>${h} / ${Fo}</b> right!<br>Level ${r.info().level}</p>
          <div class="lobby-buttons">
            <button class="btn btn-big btn-accent" id="learn-again">Keep Learning</button>
            <button class="btn btn-big" id="learn-menu">Other Subjects</button>
          </div>
        </div>
      </div>`,at.win(),e.querySelector("#learn-again").addEventListener("click",()=>o(u)),e.querySelector("#learn-menu").addEventListener("click",a)}function l(){s=!0,e.innerHTML="",e.classList.add("hidden"),document.getElementById("quiz")?.classList.add("hidden"),document.getElementById("btn-home")?.classList.add("hidden")}return{destroy:l}}const db=n=>new Promise(e=>setTimeout(e,n));async function fb(n,e){const t=ml();let i=[];const r=[],s=new Set,a=[];if(t.on("roster",h=>{i=h,r.forEach(d=>d(i))}),!await t.join(e,n))return null;const c=gl(t,{onSpeaking:(h,d)=>{d?s.add(h):s.delete(h),a.forEach(f=>f(s))}});c.wire();const l=await c.start();l&&i.filter(h=>h.id!==t.myId).forEach(h=>c.connect&&c.connect(h.id));function u(){return i.length?i.map(h=>h.id).sort()[0]:t.myId}return{myId:t.myId,profile:n,code:e,voiceStarted:l,members:()=>i,host:u,isHost:()=>u()===t.myId,speaking:()=>s,onRoster:h=>{r.push(h),h(i)},onSpeaking:h=>a.push(h),onMsg:h=>t.on("msg",h),send:(h,d)=>t.sendMsg(h,d),toggleMute:()=>c.toggleMute(),isMuted:()=>c.isMuted(),async leave(){try{c.stop()}catch{}await t.leave()}}}function pb(n,e,t){const i=document.getElementById("classroom"),r=Fi(),s=e.category||"mix",a=Ac.find(v=>v.key===s)?.name||"Everything",o=n.isHost();i.classList.remove("hidden");const c=[];c.push(n.onMsg(C));let l=-1,u=null,h=new Map,d=new Map,f=!1,g=!1;function _(){return`<button class="icon-btn ${n.isMuted()?"muted":"live"}" id="cls-mute">${n.isMuted()?"🔇":"🎤"}</button>`}o?p():y();function m(){l++,u=Td(s,Math.min(5,Math.floor(l/4))),h=new Map,g=!1,n.send("q",{qIndex:l,q:u}),p()}function p(){const v=n.members().filter(U=>U.id!==n.myId);i.innerHTML=`
      <div class="cls-wrap">
        <div class="cls-head">
          <div class="cls-role">👩‍🏫 Teacher · ${a}</div>
          <div class="cls-head-right">${_()}<button class="icon-btn" id="cls-end" title="End class">✖</button></div>
        </div>
        ${u?w(u,g,-1):`<div class="cls-start"><p>Ready to teach <b>${a}</b>?</p></div>`}
        <div class="cls-roster">
          ${v.length?v.map(U=>x(U)).join(""):'<div class="cls-empty">Waiting for students to join…</div>'}
        </div>
        <div class="cls-controls">
          ${u&&!g?'<button class="btn" id="cls-reveal">👀 Reveal Answer</button>':""}
          <button class="btn btn-accent btn-big" id="cls-next">${u?"Next Question →":"Start ▶"}</button>
        </div>
      </div>`,T(),i.querySelector("#cls-next").addEventListener("click",m);const b=i.querySelector("#cls-reveal");b&&b.addEventListener("click",()=>{g=!0,n.send("reveal",{qIndex:l}),p()})}function x(v){const b=h.get(v.id),U=d.get(v.id)||0,H=b?g?b.correct?"✅":"❌":"✋ answered":"💭 thinking";return`<div class="cls-srow">${`<span class="dot" style="background:#${(v.color||6276848).toString(16).padStart(6,"0")}"></span>`}<span class="cls-sname">${v.name||"Player"}</span><span class="cls-sstatus">${H}</span><span class="cls-sscore">⭐ ${U}</span></div>`}function y(){i.innerHTML=`
      <div class="cls-wrap">
        <div class="cls-head">
          <div class="cls-role">🙋 Listen to the teacher!</div>
          <div class="cls-head-right">${_()}<button class="icon-btn" id="cls-end" title="Leave">✖</button></div>
        </div>
        <div class="cls-start"><div class="win-emoji">👂</div><p>Get ready! The teacher will start soon.</p></div>
      </div>`,T()}function S(){i.innerHTML=`
      <div class="cls-wrap">
        <div class="cls-head">
          <div class="cls-role">🙋 Your turn to answer!</div>
          <div class="cls-head-right">${_()}<button class="icon-btn" id="cls-end" title="Leave">✖</button></div>
        </div>
        ${w(u,g,f?h.get(n.myId)?.choice??-1:-1)}
        <div class="cls-note" id="cls-note">${f?"Answer sent! ⏳ Waiting for the teacher…":"Tap your answer!"}</div>
      </div>`,T(),f||i.querySelectorAll(".choice").forEach((v,b)=>v.addEventListener("click",()=>E(b)))}function E(v){if(f)return;f=!0;const b=v===u.correctIndex;h.set(n.myId,{choice:v,correct:b}),n.send("a",{qIndex:l,choice:v,correct:b,name:n.profile.name}),b?(at.correct(),r.addXp(12)):at.wrong(),S()}function w(v,b,U){const H=v.choices.map((j,V)=>{let P="choice"+(v.choiceEmoji?" emoji":"");return b&&V===v.correctIndex&&(P+=" correct"),b&&U===V&&V!==v.correctIndex&&(P+=" wrong"),`<button class="${P}" ${b||o?"disabled":""}>${j}</button>`}).join("");return`
      <div class="cls-q">
        <div class="quiz-topic">${v.topic}</div>
        <div class="quiz-picture">${v.picture?v.picture.repeat(v.picCount||1):""}</div>
        <div class="quiz-prompt">${v.prompt}</div>
        <div class="quiz-choices">${H}</div>
      </div>`}function T(){const v=i.querySelector("#cls-mute");v&&v.addEventListener("click",()=>{n.toggleMute(),(o?p:S)()}),i.querySelector("#cls-end").addEventListener("click",()=>{o&&n.send("endclass",{}),t()})}function C(v){v.from!==n.myId&&(o?v.type==="a"&&v.qIndex===l&&(h.set(v.from,{choice:v.choice,correct:v.correct}),v.correct&&d.set(v.from,(d.get(v.from)||0)+1),p()):v.type==="q"?(l=v.qIndex,u=v.q,f=!1,g=!1,S()):v.type==="reveal"&&v.qIndex===l?(g=!0,S()):v.type==="endclass"&&t())}c.push((()=>{let v=!0;return n.onRoster(()=>{v&&o&&p()}),()=>{v=!1}})());function L(){c.forEach(v=>v&&v()),i.innerHTML="",i.classList.add("hidden")}return{destroy:L}}const wh=[{key:"obby",emoji:"🏃",name:"Obstacle Course",desc:"Run the course together"},{key:"explore",emoji:"🌍",name:"Explore Together",desc:"Hang out + voice chat"},{key:"classroom",emoji:"👩‍🏫",name:"Classroom",desc:"Teacher asks, kids answer"}];function mb(n,e){const t=document.getElementById("room");t.classList.remove("hidden");const i="/brainblox/assets/scenes/waiting.jpg";t.style.background=`url(${i}) center/cover no-repeat, radial-gradient(circle at 50% 18%, #b89cff, #8e6ef0 60%, #7a5bdc)`,t.innerHTML='<div class="room-wrap"><div class="lobby-card"><div class="win-emoji">🔗</div><h2>Connecting…</h2></div></div>';let r=null,s=null,a=!1;const o={mode:"obby",category:"mix"},c={id:crypto.randomUUID(),name:n.name};c.color=ol(c.id),fb(c,n.code).then(E=>{if(a){E?.leave();return}if(!E){t.innerHTML='<div class="room-wrap"><div class="lobby-card"><div class="win-emoji">😕</div><h2>Could not join</h2><p>Check the code and try again.</p></div></div>';return}r=E,r.onMsg(p),r.onRoster(()=>{s||l()}),r.onSpeaking(()=>{s||l()}),l()});function l(){if(!r)return;const E=r.host(),w=r.isHost(),T=r.members(),C=r.speaking();t.innerHTML=`
      <div class="room-wrap">
        <div class="room-title-tag">🏝️ Waiting Area</div>
        <div class="lobby-card room-card">
          <h1 class="logo room-logo">Room</h1>
          <div class="room-code"><span>${n.code}</span></div>
          <button class="btn room-copy" id="room-copy">🔗 Copy invite link</button>

          <div class="room-players">
            ${T.map(L=>u(L,E,C)).join("")}
          </div>

          <div class="room-voice">
            <button class="icon-btn ${r.isMuted()?"muted":"live"}" id="room-mute">${r.isMuted()?"🔇":"🎤"}</button>
            <span>${r.isMuted()?"Mic off - tap to talk":"Mic on!"}</span>
          </div>

          ${w?h():d(E,T)}
        </div>
      </div>`,t.querySelector("#room-copy").addEventListener("click",x),t.querySelector("#room-mute").addEventListener("click",()=>{r.toggleMute(),l()}),w&&(t.querySelectorAll(".room-mode").forEach(L=>L.addEventListener("click",()=>{o.mode=L.dataset.mode,f(),l()})),t.querySelectorAll(".room-cat").forEach(L=>L.addEventListener("click",()=>{o.category=L.dataset.cat,f(),l()})),t.querySelector("#room-start").addEventListener("click",()=>g(o.mode,o.category,!0)))}function u(E,w,T){const C=E.id===w,L=T.has(E.id)||E.id===r.myId&&T.has("me"),v="#"+(E.color||6276848).toString(16).padStart(6,"0");return`<div class="room-chip ${L?"speaking":""}">
      <span class="dot" style="background:${v}"></span>
      ${E.name||"Player"}${E.id===r.myId?" (you)":""} ${C?"👑":""}
    </div>`}function h(){return`
      <div class="room-section">You're the host - pick a game:</div>
      <div class="room-modes">
        ${wh.map(E=>`<button class="room-mode ${o.mode===E.key?"selected":""}" data-mode="${E.key}"><span class="rm-emoji">${E.emoji}</span><b>${E.name}</b><small>${E.desc}</small></button>`).join("")}
      </div>
      <div class="room-section">Category:</div>
      <div class="room-cats">
        ${Ac.map(E=>`<button class="room-cat ${o.category===E.key?"selected":""}" data-cat="${E.key}">${E.emoji} ${E.name}</button>`).join("")}
      </div>
      <button class="btn btn-big btn-accent" id="room-start">▶ Start Game</button>`}function d(E,w){const T=w.find(v=>v.id===E)?.name||"the host",C=wh.find(v=>v.key===o.mode),L=Ac.find(v=>v.key===o.category);return`<div class="room-wait">
      <div class="room-spin">⏳</div>
      <p>Waiting for <b>${T}</b> to start…</p>
      <p class="room-sel">${C?C.emoji+" "+C.name:""} · ${L?L.emoji+" "+L.name:""}</p>
    </div>`}function f(){r.send("lobby",{mode:o.mode,category:o.category})}function g(E,w,T){if(T&&r.send("start",{mode:E,category:w}),E==="classroom")_(w);else{const C=()=>E==="explore"?e.launchExplore(n.code,n.name):e.launchObby(n.code,n.name,w);T?setTimeout(C,250):C()}}function _(E){o.category=E,t.classList.add("hidden"),s=pb(r,{category:E},m)}function m(){s?.destroy(),s=null,t.classList.remove("hidden"),l()}function p(E){E.from!==r.myId&&(E.type==="lobby"?(o.mode=E.mode,o.category=E.category,s||l()):E.type==="start"&&!s&&g(E.mode,E.category,!1))}function x(){const E=`${location.origin}${location.pathname}?room=${n.code}`;navigator.clipboard?.writeText(E).then(()=>y("Link copied! 🔗"),()=>y(E))}function y(E){const w=t.querySelector("#room-copy");w&&(w.textContent=E,setTimeout(()=>{t.querySelector("#room-copy")&&(t.querySelector("#room-copy").textContent="🔗 Copy invite link")},1500))}function S(){a=!0,s?.destroy(),s=null,r?.leave(),t.innerHTML="",t.classList.add("hidden")}return{destroy:S}}const bh=!ei()&&window.devicePixelRatio<2.5&&(navigator.hardwareConcurrency||4)>4,gb=ei()&&window.devicePixelRatio>=2,Sh="/brainblox/",Eh=[{key:"obby",name:"Obstacle Course",emoji:"🏃",img:"gym",color:16748146},{key:"arcade",name:"Quiz Arcade",emoji:"⚡",img:"arcade",color:16766046},{key:"puzzles",name:"Jigsaw Puzzles",emoji:"🧩",img:"toystore",color:6280858},{key:"learn",name:"Learn",emoji:"📚",img:"school",color:6276848},{key:"coinrush",name:"Coin Rush",emoji:"🪙",img:"icecream",color:16764730},{key:"maze",name:"Maze",emoji:"🌀",img:"library",color:12558847}];function ef(n,e={}){const t=e.multiplayer||null,i=document.getElementById("game-root"),r=new $c({antialias:!1,powerPreference:"high-performance"});r.setPixelRatio(Math.min(window.devicePixelRatio,2)),r.setSize(window.innerWidth,window.innerHeight),r.shadowMap.enabled=!0,r.shadowMap.type=La,r.toneMapping=ds,r.toneMappingExposure=1,r.outputColorSpace=Ot,i.appendChild(r.domElement);const s=new Qc;s.fog=new ps(14479359,55,180),s.add(yb()),s.add(new il(16775142,12571903,.9)),s.add(new rl(10467560,.18));const a=new ya(16773590,1.25);a.castShadow=!0,a.position.set(20,34,14),a.shadow.mapSize.set(bh?2048:1024,bh?2048:1024),a.shadow.camera.near=1,a.shadow.camera.far=90,a.shadow.camera.left=a.shadow.camera.bottom=-40,a.shadow.camera.right=a.shadow.camera.top=40,a.shadow.bias=-4e-4,a.shadow.normalBias=.02,s.add(a,a.target);const o=[],c=(q,oe,Re,Se,ve,We)=>({min:{x:q-Se/2,y:oe-ve/2,z:Re-We/2},max:{x:q+Se/2,y:oe+ve/2,z:Re+We/2}}),l=30,u=new fe(new Di(l+4,48),Qe(8312958));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,s.add(u),o.push(c(0,-.5,0,(l+4)*2,1,(l+4)*2));const h=new fe(new Di(11,40),Qe(15129792));h.rotation.x=-Math.PI/2,h.position.y=.02,h.receiveShadow=!0,s.add(h);const d=new gt,f=new fe(new Wt(2.4,2.6,.7,20),Qe(13620966));f.position.y=.35;const g=new fe(new Wt(2.1,2.1,.2,20),new ot({color:7327999}));g.position.y=.62;const _=new fe(new Wt(.25,.35,1.4,12),Qe(13620966));_.position.y=1.3,d.add(f,g,_),d.traverse(q=>q.castShadow=!0),s.add(d),o.push(c(0,1,0,5.2,2,5.2));const m=new fe(new Di(5,28),new ot({color:5752560}));m.rotation.x=-Math.PI/2,m.position.set(16,.03,16),s.add(m);const p=new fe(new Tn(5,.4,10,36),Qe(15590344));p.rotation.x=Math.PI/2,p.position.set(16,.1,16),s.add(p);const x=new Wt(.22,.3,1.4,7),y=Qe(10120015),S=new En(1.1,0),E=Qe(5748828,{flatShading:!0});function w(q,oe,Re=1){const Se=new gt,ve=new fe(x,y);ve.position.y=.7,ve.castShadow=!0;const We=new fe(S,E);We.position.y=1.9,We.castShadow=!0,Se.add(ve,We),Se.position.set(q,0,oe),Se.scale.setScalar(Re),s.add(Se),o.push(c(q,1,oe,.6,2,.6))}for(let q=0;q<14;q++){const oe=q/14*Math.PI*2+.3,Re=22+q%3*2.5;w(Math.cos(oe)*Re,Math.sin(oe)*Re,.9+q%3*.25)}const T=Qe(7043737),C=new ot({color:16771466}),L=new Wt(.12,.16,3,8),v=new Dn(.28,10,10);function b(q,oe){const Re=new gt,Se=new fe(L,T);Se.position.y=1.5,Se.castShadow=!0;const ve=new fe(v,C);ve.position.y=3.1,en(ve),Re.add(Se,ve),Re.position.set(q,0,oe),s.add(Re)}const U=Qe(11892287);function H(q,oe,Re){const Se=new gt,ve=new fe(Xn(2,.2,.7,.06,1),U);ve.position.y=.6,ve.castShadow=!0;const We=new fe(Xn(2,.6,.15,.06,1),U);We.position.set(0,.95,-.28),Se.add(ve,We),Se.position.set(q,0,oe),Se.rotation.y=Re,s.add(Se)}for(let q=0;q<6;q++){const oe=q/6*Math.PI*2+.5;b(Math.cos(oe)*13,Math.sin(oe)*13),q%2===0&&H(Math.cos(oe+.3)*9.5,Math.sin(oe+.3)*9.5,-oe)}const j=new En(.7,0),V=Qe(6078307,{flatShading:!0}),P=[16739229,16765503,16748146,12558847,16735581];for(let q=0;q<30;q++){const oe=Math.random()*Math.PI*2,Re=12+Math.random()*16,Se=Math.cos(oe)*Re,ve=Math.sin(oe)*Re;if(Math.random()<.5){const We=new fe(j,V);We.position.set(Se,.5,ve),We.scale.setScalar(.7+Math.random()),We.castShadow=!0,s.add(We)}else{const We=new gt,De=new fe(new Wt(.04,.04,.5,5),Qe(5220444));De.position.y=.25;const Nt=new fe(new Dn(.22,8,8),Qe(P[q%P.length]));Nt.position.y=.55,We.add(De,Nt),We.position.set(Se,0,ve),s.add(We)}}const z=Qe(16645621),I=new In(.2,1.1,.2),J=new In(2.6,.16,.1);for(let q=0;q<44;q++){const oe=q/44*Math.PI*2,Re=Math.cos(oe)*(l+1),Se=Math.sin(oe)*(l+1),ve=new fe(I,z);if(ve.position.set(Re,.55,Se),ve.lookAt(0,.55,0),s.add(ve),q%1===0){const We=new fe(J,z);We.position.set(Re,.7,Se),We.lookAt(0,.7,0),s.add(We)}}const $=new gt;$.position.set(-16,0,16);const ie=Qe(16748146),xe=Qe(6276848),Ie=new fe(Xn(1.6,2.4,1.6,.2,1),xe);Ie.position.y=1.2,Ie.castShadow=!0,$.add(Ie);const X=new fe(new In(.9,.12,4),ie);X.position.set(0,1.4,1.8),X.rotation.x=.5,$.add(X);const Q=new gt;Q.position.set(4,0,0);const le=new fe(new Wt(.1,.1,2.6,6),xe);le.position.set(-1,1.3,0),le.rotation.z=.3;const pe=le.clone();pe.position.x=1,pe.rotation.z=-.3;const ke=new fe(new Wt(.1,.1,2.2,6),xe);ke.position.y=2.5,ke.rotation.z=Math.PI/2,Q.add(le,pe,ke),$.add(Q),s.add($),o.push(c(-16,1.2,16,1.8,2.4,1.8));const Oe=new En(.4,0),Ge=new ot({color:16765503}),$e=[];for(let q=0;q<8;q++){const oe=q/8*Math.PI*2,Re=7,Se=new fe(Oe,Ge);Se.position.set(Math.cos(oe)*Re,4+q%2,Math.sin(oe)*Re),en(Se),Se.userData.ph=q,s.add(Se),$e.push(Se)}const Ke=[];["puppy","kitten","bunny","duck","robot","dino"].forEach((q,oe)=>{Mh(`${Sh}assets/npc/${q}.png`,Re=>{const Se=new fe(new $n(2,2),new ot({map:Re,transparent:!0,alphaTest:.5,side:$t})),ve=oe/6*Math.PI*2;Se.position.set(Math.cos(ve)*8,1,Math.sin(ve)*8),s.add(Se),Ke.push({spr:Se,tx:Se.position.x,tz:Se.position.z,ph:oe,speed:1.2+Math.random()})})});const D=[],Et=18;Eh.forEach((q,oe)=>{const Re=oe/Eh.length*Math.PI*2,Se=Math.cos(Re)*Et,ve=Math.sin(Re)*Et,We=Math.atan2(-Se,-ve),De=new gt;De.position.set(Se,0,ve),De.rotation.y=We,s.add(De);const Nt=new fe(Xn(6,.6,2.5,.2,2),Qe(q.color));Nt.position.y=.3,Nt.castShadow=!0,Nt.receiveShadow=!0,De.add(Nt),o.push(c(Se,1.5,ve,5.5,3,2));const qt=new fe(new $n(5,5),new ot({transparent:!0,alphaTest:.5,side:$t,color:16777215}));qt.position.set(0,3.1,0),De.add(qt),Mh(`${Sh}assets/world/${q.img}.jpg`,Bi=>{qt.material.map=Bi,qt.material.needsUpdate=!0});const At=vb(q.emoji+" "+q.name+(q.soon?"  🔜":""));At.position.set(0,6,0),De.add(At);const On=new N(Se*.74,.05,ve*.74),An=new fe(new Wt(2,2,.12,24),new ot({color:q.color}));An.position.copy(On),An.position.y=.06,en(An),s.add(An);const rn=new fe(new Tn(2,.12,10,28),new ot({color:16777215}));rn.rotation.x=Math.PI/2,rn.position.copy(On),rn.position.y=.14,en(rn),s.add(rn),D.push({...q,padPos:On,ring:rn,sign:At})});const Ye=new ot({color:16777215}),Je=new En(1.4,0),ne=[];for(let q=0;q<12;q++){const oe=new fe(Je,Ye);oe.position.set(q*7%60-30,13+q%3*3,q*11%60-30),oe.scale.set(1+q%2,.6,1.2),s.add(oe),ne.push(oe)}const re=sl({x:0,y:1.5,z:-7});re.facing=0;const we=Fa(6080240);s.add(we.root);const R=ll(window.innerWidth/window.innerHeight);R.snap(re.pos);const M=cl();ei()&&document.getElementById("touch-controls").classList.remove("hidden");const B=vl(r,s,R.cam,{low:gb});let Y=null,te=null,Z=null,Me=null;t&&fi&&ae();async function ae(){Y=ml(),Me=crypto.randomUUID();const q={id:Me,name:t.name,color:ol(Me)};if(we.setBodyColor(q.color),Z=Zd(),s.add(Z.group),Y.on("roster",ve=>Z.syncRoster(ve.filter(We=>We.id!==Me))),Y.on("state",ve=>Z.applyState(ve)),!await Y.join(t.code,q))return;te=gl(Y,{}),te.wire();const Re=await te.start(),Se=document.getElementById("explore-bar");Se.classList.remove("hidden"),Se.innerHTML=`<button class="icon-btn ${te&&Re?"muted":""}" id="ex-mute">${Re?"🔇":"🚫"}</button><button class="btn" id="ex-leave">🚪 Leave</button><span class="ex-tag">👋 Walk around with friends!</span>`,Re&&Se.querySelector("#ex-mute").addEventListener("click",()=>{const ve=te.toggleMute();Se.querySelector("#ex-mute").textContent=ve?"🔇":"🎤",Se.querySelector("#ex-mute").classList.toggle("muted",ve),Se.querySelector("#ex-mute").classList.toggle("live",!ve)}),Se.querySelector("#ex-leave").addEventListener("click",()=>e.onExit&&e.onExit())}const de=document.getElementById("explore-prompt");let je=null;function se(q){je=q,de.textContent=q.soon?`${q.emoji} ${q.name} - Coming soon!`:`▶ Enter ${q.name}`,de.classList.toggle("soon",!!q.soon),de.classList.remove("hidden")}function be(){je=null,de.classList.add("hidden")}function Fe(){if(je){if(je.soon){at.wrong(),Ze();return}at.gate(),n(je.key)}}const Be=()=>Fe();de.addEventListener("click",Be);const ye=q=>{(q.key==="Enter"||q.key==="e")&&je&&Fe()};window.addEventListener("keydown",ye);function Ze(){de.animate([{transform:"translateX(-50%) scale(1.1)"},{transform:"translateX(-50%) scale(1)"}],{duration:300})}let Ve=!0,it=performance.now(),O=0,me=0;function K(q){const oe=Math.min((q-it)/1e3,.05);it=q,O+=oe;const Re=M.getInput(),Se=ul(Re.fwd,Re.right,R.state.yaw),ve=re.grounded;al(re,oe,{moveX:Se.x,moveZ:Se.z,jump:Re.jump},o),Re.jump&&ve&&at.jump();const We=Math.hypot(re.pos.x,re.pos.z);if(We>l&&(re.pos.x*=l/We,re.pos.z*=l/We),re.pos.y<-10&&$r(re,{x:0,y:1.5,z:-7}),!t){let De=null,Nt=3.2;for(const qt of D){const At=Math.hypot(re.pos.x-qt.padPos.x,re.pos.z-qt.padPos.z);At<Nt&&(Nt=At,De=qt)}De&&De!==je?se(De):!De&&je&&be()}we.root.position.set(re.pos.x,re.pos.y+.15,re.pos.z),we.root.rotation.y=re.facing,we.update(re.anim,oe,R.cam),R.follow(re.pos,oe),a.position.set(re.pos.x+18,34,re.pos.z+12),a.target.position.set(re.pos.x,0,re.pos.z),g.rotation.y+=oe;for(const De of D)De.ring.rotation.z+=oe*1.5,De.ring.scale.setScalar(1+Math.sin(O*3)*.06),De.sign.quaternion.copy(R.cam.quaternion);for(const De of ne)De.position.x+=oe*.4,De.position.x>34&&(De.position.x=-34);for(const De of $e)De.rotation.y+=oe*1.5,De.position.y=4+De.userData.ph%2+Math.sin(O*1.5+De.userData.ph)*.4;for(const De of Ke){const Nt=De.tx-De.spr.position.x,qt=De.tz-De.spr.position.z,At=Math.hypot(Nt,qt);if(At<.6){const An=Math.random()*Math.PI*2,rn=5+Math.random()*14;De.tx=Math.cos(An)*rn,De.tz=Math.sin(An)*rn}else De.spr.position.x+=Nt/At*De.speed*oe,De.spr.position.z+=qt/At*De.speed*oe;De.spr.position.y=1+Math.abs(Math.sin(O*6+De.ph))*.12;const On=R.cam.quaternion.clone();De.spr.quaternion.copy(On)}Y&&(Y.sendState({x:re.pos.x,y:re.pos.y,z:re.pos.z,ry:re.facing,anim:re.anim}),Z.update(oe,R.cam)),B.render(),Ve&&(me=requestAnimationFrame(K))}me=requestAnimationFrame(K);const ee=()=>{r.setSize(innerWidth,innerHeight),R.cam.aspect=innerWidth/innerHeight,R.cam.updateProjectionMatrix(),B.setSize(innerWidth,innerHeight)};window.addEventListener("resize",ee);function ge(){Ve=!1,cancelAnimationFrame(me),window.removeEventListener("resize",ee),window.removeEventListener("keydown",ye),de.removeEventListener("click",Be),de.classList.add("hidden"),M.destroy?.(),document.getElementById("touch-controls")?.classList.add("hidden"),te&&te.stop(),Y&&Y.leave(),document.getElementById("explore-bar")?.classList.add("hidden"),r.dispose(),r.domElement.parentElement&&r.domElement.parentElement.removeChild(r.domElement)}return{destroy:ge}}function Mh(n,e){const t=new Image;t.crossOrigin="anonymous",t.onload=()=>{const i=document.createElement("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0);const s=r.getImageData(0,0,i.width,i.height),a=s.data;for(let c=0;c<a.length;c+=4)a[c]>234&&a[c+1]>234&&a[c+2]>234&&(a[c+3]=0);r.putImageData(s,0,0);const o=new ka(i);o.colorSpace=Ot,e(o)},t.onerror=()=>{},t.src=n}function vb(n){const e=document.createElement("canvas");e.width=512,e.height=96;const t=e.getContext("2d");t.fillStyle="rgba(20,32,63,0.85)",_b(t,6,10,500,76,24),t.fill(),t.fillStyle="#fff",t.font="bold 44px 'Baloo 2', sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText(n,256,50);const i=new ka(e);i.colorSpace=Ot,i.anisotropy=4;const r=new el(new Na({map:i,transparent:!0,depthTest:!1}));return r.scale.set(4.2,.8,1),r}function _b(n,e,t,i,r,s){n.beginPath(),n.moveTo(e+s,t),n.arcTo(e+i,t,e+i,t+r,s),n.arcTo(e+i,t+r,e,t+r,s),n.arcTo(e,t+r,e,t,s),n.arcTo(e,t,e+i,t,s),n.closePath()}function yb(){const n=new Dn(300,32,16),e=new _t({side:It,depthWrite:!1,uniforms:{top:{value:new Ue(7323391)},mid:{value:new Ue(10147071)},bottom:{value:new Ue(15398655)},exponent:{value:.55}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform float exponent;
      void main(){ float t = pow(max(vDir.y,0.0), exponent); vec3 c = t < 0.5 ? mix(bottom, mid, t*2.0) : mix(mid, top, (t-0.5)*2.0); gl_FragColor = vec4(c, 1.0); }`});return new fe(n,e)}const Th=!ei()&&window.devicePixelRatio<2.5&&(navigator.hardwareConcurrency||4)>4,xb=ei()&&window.devicePixelRatio>=2;function tf(n,e={}){const t=document.getElementById("game-root"),i=new $c({antialias:!1,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.shadowMap.enabled=!0,i.shadowMap.type=La,i.toneMapping=ds,i.toneMappingExposure=1,i.outputColorSpace=Ot,t.appendChild(i.domElement);const r=new Qc;r.fog=new ps(14479359,50,170),r.add(wb()),r.add(new il(16775142,12571903,.9)),r.add(new rl(10467560,.18));const s=new ya(16773590,1.25);s.castShadow=!0,s.shadow.mapSize.set(Th?2048:1024,Th?2048:1024),s.shadow.camera.near=1,s.shadow.camera.far=90,s.shadow.camera.left=s.shadow.camera.bottom=-40,s.shadow.camera.right=s.shadow.camera.top=40,s.shadow.bias=-4e-4,s.shadow.normalBias=.02,r.add(s,s.target);const a=[],o=(L,v,b,U,H,j)=>({min:{x:L-U/2,y:v-H/2,z:b-j/2},max:{x:L+U/2,y:v+H/2,z:b+j/2}});function c(L,v=8312958){const b=new fe(new Di(L,48),Qe(v));return b.rotation.x=-Math.PI/2,b.receiveShadow=!0,r.add(b),a.push(o(0,-.5,0,L*2,1,L*2)),b}function l(L,v,b=8312958){const U=new fe(new $n(L,v),Qe(b));return U.rotation.x=-Math.PI/2,U.receiveShadow=!0,r.add(U),a.push(o(0,-.5,0,L,1,v)),U}const u=sl(n),h=Fa(6080240);r.add(h.root);const d=ll(window.innerWidth/window.innerHeight,{dist:e.camDist,height:e.camHeight});d.snap(u.pos);const f=cl();ei()&&document.getElementById("touch-controls").classList.remove("hidden");const g=vl(i,r,d.cam,{low:xb}),_=e.bounds||0;let m=!0,p=performance.now(),x=0,y=0,S=null;function E(L){const v=Math.min((L-p)/1e3,.05);p=L,x+=v;const b=f.getInput(),U=ul(b.fwd,b.right,d.state.yaw),H=u.grounded;if(al(u,v,{moveX:U.x,moveZ:U.z,jump:b.jump},a),b.jump&&H&&at.jump(),_){const j=Math.hypot(u.pos.x,u.pos.z);j>_&&(u.pos.x*=_/j,u.pos.z*=_/j)}u.pos.y<-12&&$r(u,n),h.root.position.set(u.pos.x,u.pos.y+.15,u.pos.z),h.root.rotation.y=u.facing,h.update(u.anim,v,d.cam),d.follow(u.pos,v),s.position.set(u.pos.x+18,34,u.pos.z+12),s.target.position.set(u.pos.x,0,u.pos.z),S&&S(v,x),g.render(),m&&(y=requestAnimationFrame(E))}function w(L){S=L,y=requestAnimationFrame(E)}const T=()=>{i.setSize(innerWidth,innerHeight),d.cam.aspect=innerWidth/innerHeight,d.cam.updateProjectionMatrix(),g.setSize(innerWidth,innerHeight)};window.addEventListener("resize",T);function C(){m=!1,cancelAnimationFrame(y),window.removeEventListener("resize",T),f.destroy?.(),document.getElementById("touch-controls")?.classList.add("hidden"),i.dispose(),i.domElement.parentElement&&i.domElement.parentElement.removeChild(i.domElement)}return{renderer:i,scene:r,sun:s,player:u,avatar:h,camera:d,controls:f,postfx:g,colliders:a,aabb:o,addGround:c,addGroundPlane:l,run:w,destroy:C,paused:L=>{S&&(S._paused=L)}}}function wb(){const n=new Dn(300,32,16),e=new _t({side:It,depthWrite:!1,uniforms:{top:{value:new Ue(7323391)},mid:{value:new Ue(10147071)},bottom:{value:new Ue(15398655)},exponent:{value:.55}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform float exponent;
      void main(){ float t = pow(max(vDir.y,0.0), exponent); vec3 c = t < 0.5 ? mix(bottom, mid, t*2.0) : mix(mid, top, (t-0.5)*2.0); gl_FragColor = vec4(c, 1.0); }`});return new fe(n,e)}const bb=45;function Sb(){const n=tf({x:0,y:1.5,z:0},{bounds:26}),e=Fi();n.addGround(30,8837514);const t=Qe(10120015),i=Qe(5748828,{flatShading:!0}),r=new Wt(.22,.3,1.4,7),s=new En(1.1,0);for(let m=0;m<10;m++){const p=m/10*Math.PI*2,x=23,y=new gt,S=new fe(r,t);S.position.y=.7;const E=new fe(s,i);E.position.y=1.9,y.add(S,E),y.position.set(Math.cos(p)*x,0,Math.sin(p)*x),n.scene.add(y)}const a=new Tn(.34,.13,8,18),o=new ot({color:16764730}),c=[];for(let m=0;m<28;m++){const p=Math.random()*Math.PI*2,x=3+Math.random()*21,y=new fe(a,o);y.position.set(Math.cos(p)*x,1.1,Math.sin(p)*x),y.userData.spin=Math.random()*Math.PI,en(y),n.scene.add(y),c.push(y)}const l=document.getElementById("mode-hud");l.classList.remove("hidden");let u=0,h=bb,d=!1;function f(){l.innerHTML=`<span class="mh-pill">🪙 ${u}</span><span class="mh-pill ${h<=10?"low":""}">⏱ ${Math.ceil(h)}</span>`}f(),n.run(m=>{for(const p of c)p.visible&&(p.rotation.y+=m*3,p.position.y=1.1+Math.sin(p.userData.spin+=m*2)*.15,!d&&Math.hypot(n.player.pos.x-p.position.x,n.player.pos.z-p.position.z)<1.3&&Math.abs(n.player.pos.y-p.position.y)<2&&(p.visible=!1,u++,at.coin(),f()));d||(h-=m,Math.ceil(h)!==Math.ceil(h+m)&&f(),h<=0&&g())});function g(){d=!0,l.classList.add("hidden"),at.win(),e.addXp(u*3);const m=document.getElementById("mode-result");m.innerHTML=`<div class="result-card">
      <div class="win-emoji">${u>=18?"🏆":u>=8?"🎉":"🪙"}</div>
      <h2>Time's up!</h2>
      <p class="win-stars">You grabbed <b>${u}</b> coins!<br>Level ${e.info().level}</p>
      <button class="btn btn-big btn-accent" id="cr-again">Play Again</button>
    </div>`,m.classList.remove("hidden"),m.querySelector("#cr-again").addEventListener("click",()=>location.reload())}function _(){l.classList.add("hidden"),document.getElementById("mode-result").classList.add("hidden"),document.getElementById("mode-result").innerHTML="",n.destroy()}return{destroy:_}}const dt=6,Bt=4;function Eb(){const n=Fi(),t=tf({x:0,y:1.5,z:0},{camDist:4,camHeight:13});t.addGroundPlane((dt+1)*Bt,(dt+1)*Bt,10479280);const i=Array.from({length:dt},()=>Array(dt).fill(!0)),r=Array.from({length:dt},()=>Array(dt).fill(!0)),s=Array.from({length:dt},()=>Array(dt).fill(!1)),a=[[0,0]];for(s[0][0]=!0;a.length;){const[E,w]=a[a.length-1],T=[];if(E>0&&!s[E-1][w]&&T.push([E-1,w,"N"]),E<dt-1&&!s[E+1][w]&&T.push([E+1,w,"S"]),w>0&&!s[E][w-1]&&T.push([E,w-1,"W"]),w<dt-1&&!s[E][w+1]&&T.push([E,w+1,"E"]),!T.length){a.pop();continue}const[C,L,v]=T[Math.floor(Math.random()*T.length)];v==="E"&&(i[E][w]=!1),v==="W"&&(i[C][L]=!1),v==="S"&&(r[E][w]=!1),v==="N"&&(r[C][L]=!1),s[C][L]=!0,a.push([C,L])}const o=Qe(4630618,{flatShading:!0}),c=2.2,l=.6;function u(E,w,T,C){const L=new fe(new In(T,c,C),o);L.position.set(E,c/2,w),L.castShadow=!0,L.receiveShadow=!0,t.scene.add(L),t.colliders.push(t.aabb(E,c/2,w,T,c,C))}const h=E=>E*Bt,d=E=>E*Bt;for(let E=0;E<dt;E++)for(let w=0;w<dt;w++)i[E][w]&&u(h(w)+Bt/2,d(E),l,Bt+l),r[E][w]&&u(h(w),d(E)+Bt/2,Bt+l,l);u(h(0)-Bt/2,d((dt-1)/2),l,dt*Bt+l),u(h(dt-1)+Bt/2,d((dt-1)/2),l,dt*Bt+l),u(h((dt-1)/2),d(0)-Bt/2,dt*Bt+l,l),u(h((dt-1)/2),d(dt-1)+Bt/2,dt*Bt+l,l);const f=new N(h(dt-1),1.4,d(dt-1)),g=new fe(new En(.9,0),new ot({color:16765503}));g.position.copy(f),en(g),t.scene.add(g);const _=new fe(new Tn(1.3,.16,10,28),new ot({color:16777215}));_.position.copy(f),_.position.y=.2,_.rotation.x=Math.PI/2,en(_),t.scene.add(_);const m=document.getElementById("mode-hud");m.classList.remove("hidden"),m.innerHTML='<span class="mh-pill">🌀 Find the ⭐</span>';let p=!1,x=0;t.run(E=>{x+=E,g.rotation.y+=E*2,g.position.y=1.4+Math.sin(x*2)*.2,_.scale.setScalar(1+Math.sin(x*3)*.08),!p&&Math.hypot(t.player.pos.x-f.x,t.player.pos.z-f.z)<1.6&&y()});function y(){p=!0,m.classList.add("hidden"),at.win(),n.addXp(50);const E=document.getElementById("mode-result");E.innerHTML=`<div class="result-card">
      <div class="win-emoji">🏆</div>
      <h2>You found it!</h2>
      <p class="win-stars">You solved the maze!<br>Level ${n.info().level}</p>
      <button class="btn btn-big btn-accent" id="mz-again">New Maze</button>
    </div>`,E.classList.remove("hidden"),E.querySelector("#mz-again").addEventListener("click",()=>location.reload())}function S(){m.classList.add("hidden");const E=document.getElementById("mode-result");E.classList.add("hidden"),E.innerHTML="",t.destroy()}return{destroy:S}}const Mb=.15,Ah=!ei()&&window.devicePixelRatio<2.5&&(navigator.hardwareConcurrency||4)>4,Rh=ei()&&window.devicePixelRatio>=2;let xr=null,nf="Player";Cb();Tb();async function Tb(){const n=await Xw();za(),nf=n.name,n.mode==="multi"?Rr(()=>mb(n,{launchObby:Ab,launchExplore:Rb})):rf()}function Ab(n,e,t){Rr(i=>sf({mode:"multi",name:e,code:n,category:t},i))}function Rb(n,e){Rr(()=>ef(t=>Rr(_l[t]),{multiplayer:{code:n,name:e},onExit:yl}))}function rf(){xr?.destroy&&xr.destroy(),document.getElementById("btn-home").classList.add("hidden"),document.getElementById("hud").classList.add("hidden"),xr=ef(n=>Rr(_l[n]))}const _l={obby:n=>sf({mode:"solo",name:nf},n),arcade:n=>sb(n),puzzles:n=>cb(),learn:n=>hb(),coinrush:()=>Sb(),maze:()=>Eb()};function Cb(){vd("hub-fs"),document.querySelectorAll(".hub-card").forEach(n=>n.addEventListener("click",()=>Rr(_l[n.dataset.act]))),document.getElementById("btn-home").addEventListener("click",()=>yl())}function Rr(n){xr?.destroy&&xr.destroy(),document.getElementById("hub").classList.add("hidden"),document.getElementById("btn-home").classList.remove("hidden"),xr=n(yl)}function yl(){rf()}function sf(n,e){const t=document.getElementById("game-root"),i=new $c({antialias:!1,powerPreference:"high-performance"});i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(window.innerWidth,window.innerHeight),i.shadowMap.enabled=!0,i.shadowMap.type=La,i.toneMapping=ds,i.toneMappingExposure=1,i.outputColorSpace=Ot,t.appendChild(i.domElement);const r=new Qc;r.fog=new ps(14479359,60,200),r.add(Lb());const s=new il(16775142,12571903,.85);r.add(s),r.add(new rl(10467560,.16));const a=new ya(16773590,1.25);a.castShadow=!0,a.shadow.mapSize.set(Ah?2048:1024,Ah?2048:1024),a.shadow.camera.near=1,a.shadow.camera.far=55,a.shadow.camera.left=-16,a.shadow.camera.right=16,a.shadow.camera.top=16,a.shadow.camera.bottom=-16,a.shadow.bias=-4e-4,a.shadow.normalBias=.02,a.shadow.radius=4,r.add(a),r.add(a.target);const o=new ya(12309759,.35);r.add(o);const c=C_();r.add(c.group);const l=Yw(r,c,Rh?.4:1),u=sl(c.spawn),h=fi&&n.mode==="multi"?null:5032432,d=Fa(h??5032432);r.add(d.root);const f=ll(window.innerWidth/window.innerHeight);f.snap(u.pos);const g=cl();vd("btn-fs");const _=vl(i,r,f.cam,{low:Rh});ei()&&document.getElementById("touch-controls").classList.remove("hidden");const m=hl(),p=dl();document.getElementById("hud").classList.remove("hidden");const x=Zd();r.add(x.group);let y=null,S=null,E=[];const w=new Set;let T=null;function C(){const ne=[{id:T?.id||"me",name:T?.name||n.name,color:T?.color??5032432,speaking:w.has("me")||w.has(T?.id)}];for(const re of E)ne.push({...re,speaking:w.has(re.id)});p.setPlayers(ne)}n.mode==="multi"&&fi&&L(n).catch(ne=>{console.error(ne),p.showFlash("Could not join room",1500)});async function L(ne){y=ml();const re=crypto.randomUUID();if(T={id:re,name:ne.name,color:ol(re)},d.setBodyColor(T.color),y.on("roster",B=>{E=B.filter(Y=>Y.id!==T.id),x.syncRoster(E),C()}),y.on("state",B=>x.applyState(B)),!await y.join(ne.code,T)){p.showFlash("Rooms not set up",1500);return}p.showRoom(ne.code),v(ne.code),S=gl(y,{onSpeaking:(B,Y)=>{Y?w.add(B):w.delete(B),C()}}),S.wire();const R=document.getElementById("btn-mute");R.classList.remove("hidden"),R.classList.add("muted"),await S.start()?(E.forEach(B=>S.connect&&S.connect(B.id)),R.addEventListener("click",()=>{const B=S.toggleMute();R.classList.toggle("muted",B),R.classList.toggle("live",!B),R.textContent=B?"🔇":"🎤",p.showFlash(B?"Mic off":"Mic on - say hi!",900)})):(R.textContent="🚫",R.title="Microphone blocked"),C()}function v(ne){document.getElementById("btn-copy").addEventListener("click",async()=>{const we=`${location.origin}${location.pathname}?room=${ne}`;try{await navigator.clipboard.writeText(we),p.showFlash("Link copied!",900)}catch{p.showFlash(we,1800)}})}let b="play",U=0,H={...c.spawn};const j=[],V=Fi();p.setLevel(V.info());let P=0,z=0,I=0;const J=[];function $(ne){const re=V.addXp(ne);p.setLevel(re.info),re.leveledUp&&(p.popLevel(),p.showFlash(`Level ${re.level}! 🎉`,1100),at.levelup(),l.spawnConfetti({x:u.pos.x,y:u.pos.y+3,z:u.pos.z}))}const ie=18;function xe(ne){at.powerup();const re=J.find(we=>we.type===ne.type);re?re.until=Ge+ie:J.push({...ne,until:Ge+ie}),ne.type==="doublejump"&&(u.maxJumps=2),ne.type==="speed"&&(u.speedMult=1.6),p.showFlash(`${ne.icon} ${ne.label}!`,1100),p.setPowerups(J.map(we=>({icon:we.icon,label:we.label})))}function Ie(){let ne=!1;for(let re=J.length-1;re>=0;re--)if(Ge>J[re].until){const we=J.splice(re,1)[0];we.type==="doublejump"&&(u.maxJumps=1),we.type==="speed"&&(u.speedMult=1),ne=!0}ne&&p.setPowerups(J.map(re=>({icon:re.icon,label:re.label})))}async function X(ne){ne.armed=!1,b="quiz",g.setEnabled(!1),H={...ne.pos},at.checkpoint();const re=n.category?Td(n.category,U):gs(U);await m.ask(re,{progress:ne.index/md})?(ne.cleared=!0,p.addStar(),at.correct(),at.gate(),c.openGate(ne.index),j.push({mesh:c.gates[ne.index].mesh,t:0}),l.spawnSparkle({x:ne.pos.x,y:ne.baseY,z:ne.pos.z}),l.spawnConfetti({x:ne.pos.x,y:ne.pos.y+2,z:ne.pos.z}),U+=1,z+=1,I=Ge+1.4,$(20),z>0&&z%3===0?(p.addStar(),$(15),p.showFlash(`${z} in a row! Bonus ⭐`,1200)):p.showFlash("Gate open! 🎉",900)):(at.wrong(),z=0,p.showFlash("Try again!",1e3),$r(u,ne.pos)),b=b==="win"?"win":"play",g.setEnabled(!0)}function Q(){p.hideWin(),p.setStars(0),P=0,z=0,p.setCoins(0),J.length=0,p.setPowerups([]),u.maxJumps=1,u.speedMult=1,U=0,H={...c.spawn},$r(u,c.spawn),l.resetCollectibles();for(const ne of c.checkpoints)ne.armed=!0,ne.cleared=!1,ne.triggered=!1;for(const ne of c.gates)ne.open=!1,ne.mesh.visible=!0,ne.mesh.material.opacity=.6;f.snap(u.pos),b="play",g.setEnabled(!0)}const le=document.getElementById("btn-play-again");le.addEventListener("click",Q);const pe=document.getElementById("btn-win-home"),ke=()=>e&&e();pe.addEventListener("click",ke);for(const ne of c.checkpoints)ne.armed=!0;let Oe=performance.now(),Ge=0;function $e(ne){const re=Math.min((ne-Oe)/1e3,.05);if(Oe=ne,Ge+=re,b==="play"){const R=g.getInput(),M=ul(R.fwd,R.right,f.state.yaw),B=u.grounded,{fell:Y}=al(u,re,{moveX:M.x,moveZ:M.z,jump:R.jump},c.getColliders());R.jump&&B&&at.jump(),Y&&($r(u,H),p.showFlash("Whoops!",700));const te=l.collectCoins(u.pos);te&&(P+=te,p.setCoins(P),at.coin(),$(te*2));const Z=l.collectPowerup(u.pos);Z&&xe(Z),Ie();for(const ae of c.checkpoints){const je=Math.hypot(u.pos.x-ae.pos.x,u.pos.z-ae.pos.z)<ae.radius&&Math.abs(u.pos.y-ae.pos.y)<3;if(ae.armed&&je&&!ae.cleared){X(ae);break}!ae.armed&&!ae.cleared&&!je&&(ae.armed=!0)}const Me=Math.hypot(u.pos.x-c.goal.pos.x,u.pos.z-c.goal.pos.z);b==="play"&&Me<c.goal.radius&&u.pos.y>c.goal.pos.y-2&&(b="win",g.setEnabled(!1),at.win(),$(100),l.spawnConfetti(c.goal.pos),p.showWin(V.info().level)),y&&y.sendState({x:u.pos.x,y:u.pos.y,z:u.pos.z,ry:u.facing,anim:u.anim})}d.root.position.set(u.pos.x,u.pos.y+Mb,u.pos.z),d.root.rotation.y=u.facing;const we=Ge<I?"cheer":u.anim;d.update(we,re,f.cam),x.update(re,f.cam),f.follow(u.pos,re),a.position.set(u.pos.x+12,u.pos.y+28,u.pos.z+8),a.target.position.set(u.pos.x,u.pos.y,u.pos.z),o.position.set(u.pos.x-10,u.pos.y+10,u.pos.z-6),c.goal.flag.rotation.y+=re*1.2,Pb(c.goal,Ge);for(const R of c.checkpoints)if(R.ring)if(R.ring.rotation.z+=re*(R.cleared?.4:1.6),R.cleared)R.ring.material.color.set(12577234),R.halo.visible=!1;else{const M=1+Math.sin(Ge*3+R.index)*.06;R.ring.scale.setScalar(M),R.halo.scale.setScalar(M*1.05)}l.update(re,Ge);for(let R=j.length-1;R>=0;R--){const M=j[R];M.t+=re,M.mesh.material.opacity=Math.max(0,.6*(1-M.t/.6)),M.t>=.6&&(M.mesh.visible=!1,j.splice(R,1))}_.render(),Ke&&(D=requestAnimationFrame($e))}let Ke=!0,D=requestAnimationFrame($e);const Et=()=>{i.setSize(window.innerWidth,window.innerHeight),f.cam.aspect=window.innerWidth/window.innerHeight,f.cam.updateProjectionMatrix(),_.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",Et);const Ye=()=>{S&&S.stop(),y&&y.leave()};window.addEventListener("beforeunload",Ye);function Je(){Ke=!1,cancelAnimationFrame(D),window.removeEventListener("resize",Et),window.removeEventListener("beforeunload",Ye),le.removeEventListener("click",Q),pe.removeEventListener("click",ke),g.destroy?.(),S&&S.stop(),y&&y.leave(),document.getElementById("hud").classList.add("hidden"),document.getElementById("touch-controls")?.classList.add("hidden"),document.getElementById("quiz")?.classList.add("hidden"),document.getElementById("win")?.classList.add("hidden"),i.dispose(),i.domElement.parentElement&&i.domElement.parentElement.removeChild(i.domElement)}return{destroy:Je}}function Pb(n,e){const t=n.flagGeo.attributes.position,i=n.flagBase;for(let r=0;r<t.count;r++){const s=i[r*3];i[r*3+1];const a=(s+.475)/.95;t.array[r*3+2]=Math.sin(s*6+e*6)*.12*a}t.needsUpdate=!0}function Lb(){const n=new Dn(300,32,16),e=new _t({side:It,depthWrite:!1,uniforms:{top:{value:new Ue(7323391)},mid:{value:new Ue(10147071)},bottom:{value:new Ue(15398655)},exponent:{value:.55}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`varying vec3 vDir; uniform vec3 top; uniform vec3 mid; uniform vec3 bottom; uniform float exponent;
      void main(){ float t = pow(max(vDir.y,0.0), exponent);
        vec3 c = t < 0.5 ? mix(bottom, mid, t*2.0) : mix(mid, top, (t-0.5)*2.0);
        gl_FragColor = vec4(c, 1.0); }`});return new fe(n,e)}
