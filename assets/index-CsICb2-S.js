(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function _c(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Le={},Yr=[],rn=()=>{},fy=()=>!1,sa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),yc=t=>t.startsWith("onUpdate:"),ut=Object.assign,vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},py=Object.prototype.hasOwnProperty,xe=(t,e)=>py.call(t,e),fe=Array.isArray,Jr=t=>ia(t)==="[object Map]",jf=t=>ia(t)==="[object Set]",_e=t=>typeof t=="function",Ze=t=>typeof t=="string",ir=t=>typeof t=="symbol",qe=t=>t!==null&&typeof t=="object",qf=t=>(qe(t)||_e(t))&&_e(t.then)&&_e(t.catch),Hf=Object.prototype.toString,ia=t=>Hf.call(t),my=t=>ia(t).slice(8,-1),zf=t=>ia(t)==="[object Object]",wc=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ei=_c(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),oa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},gy=/-(\w)/g,jt=oa(t=>t.replace(gy,(e,n)=>n?n.toUpperCase():"")),_y=/\B([A-Z])/g,Cr=oa(t=>t.replace(_y,"-$1").toLowerCase()),aa=oa(t=>t.charAt(0).toUpperCase()+t.slice(1)),sl=oa(t=>t?`on${aa(t)}`:""),er=(t,e)=>!Object.is(t,e),wo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Wf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},xl=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bh;const Kf=()=>bh||(bh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function la(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?Ey(r):la(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||qe(t))return t}const yy=/;(?![^(]*\))/g,vy=/:([^]+)/,wy=/\/\*[^]*?\*\//g;function Ey(t){const e={};return t.replace(wy,"").split(yy).forEach(n=>{if(n){const r=n.split(vy);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ls(t){let e="";if(Ze(t))e=t;else if(fe(t))for(let n=0;n<t.length;n++){const r=ls(t[n]);r&&(e+=r+" ")}else if(qe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ty="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Iy=_c(Ty);function Gf(t){return!!t||t===""}const Qf=t=>!!(t&&t.__v_isRef===!0),je=t=>Ze(t)?t:t==null?"":fe(t)||qe(t)&&(t.toString===Hf||!_e(t.toString))?Qf(t)?je(t.value):JSON.stringify(t,Yf,2):String(t),Yf=(t,e)=>Qf(e)?Yf(t,e.value):Jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[il(r,i)+" =>"]=s,n),{})}:jf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>il(n))}:ir(e)?il(e):qe(e)&&!fe(e)&&!zf(e)?String(e):e,il=(t,e="")=>{var n;return ir(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ot;class by{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){Ot=this}off(){Ot=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ay(){return Ot}let Ue;const ol=new WeakSet;class Jf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ol.has(this)&&(ol.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Zf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ah(this),ep(this);const e=Ue,n=Wt;Ue=this,Wt=!0;try{return this.fn()}finally{tp(this),Ue=e,Wt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ic(e);this.deps=this.depsTail=void 0,Ah(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ol.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){kl(this)&&this.run()}get dirty(){return kl(this)}}let Xf=0,Gr;function Zf(t){t.flags|=8,t.next=Gr,Gr=t}function Ec(){Xf++}function Tc(){if(--Xf>0)return;let t;for(;Gr;){let e=Gr,n;for(;e;)e.flags&1||(e.flags&=-9),e=e.next;for(e=Gr,Gr=void 0;e;){if(n=e.next,e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function ep(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function tp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Ic(r),Ry(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function kl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(np(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function np(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ui))return;t.globalVersion=ui;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!kl(t)){t.flags&=-3;return}const n=Ue,r=Wt;Ue=t,Wt=!0;try{ep(t);const s=t.fn(t._value);(e.version===0||er(s,t._value))&&(t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Ue=n,Wt=r,tp(t),t.flags&=-3}}function Ic(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r),!n.subs&&n.computed){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Ic(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ry(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Wt=!0;const rp=[];function or(){rp.push(Wt),Wt=!1}function ar(){const t=rp.pop();Wt=t===void 0?!0:t}function Ah(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Ue;Ue=void 0;try{e()}finally{Ue=n}}}let ui=0;class Sy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class bc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.target=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Ue||!Wt||Ue===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Ue)n=this.activeLink=new Sy(Ue,this),Ue.deps?(n.prevDep=Ue.depsTail,Ue.depsTail.nextDep=n,Ue.depsTail=n):Ue.deps=Ue.depsTail=n,sp(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Ue.depsTail,n.nextDep=void 0,Ue.depsTail.nextDep=n,Ue.depsTail=n,Ue.deps===n&&(Ue.deps=r)}return n}trigger(e){this.version++,ui++,this.notify(e)}notify(e){Ec();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Tc()}}}function sp(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)sp(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Nl=new WeakMap,vr=Symbol(""),Vl=Symbol(""),hi=Symbol("");function It(t,e,n){if(Wt&&Ue){let r=Nl.get(t);r||Nl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new bc),s.target=t,s.map=r,s.key=n),s.track()}}function wn(t,e,n,r,s,i){const o=Nl.get(t);if(!o){ui++;return}const l=c=>{c&&c.trigger()};if(Ec(),e==="clear")o.forEach(l);else{const c=fe(t),h=c&&wc(n);if(c&&n==="length"){const d=Number(r);o.forEach((p,g)=>{(g==="length"||g===hi||!ir(g)&&g>=d)&&l(p)})}else switch(n!==void 0&&l(o.get(n)),h&&l(o.get(hi)),e){case"add":c?h&&l(o.get("length")):(l(o.get(vr)),Jr(t)&&l(o.get(Vl)));break;case"delete":c||(l(o.get(vr)),Jr(t)&&l(o.get(Vl)));break;case"set":Jr(t)&&l(o.get(vr));break}}Tc()}function Br(t){const e=ke(t);return e===t?e:(It(e,"iterate",hi),Bt(t)?e:e.map(yt))}function ca(t){return It(t=ke(t),"iterate",hi),t}const Py={__proto__:null,[Symbol.iterator](){return al(this,Symbol.iterator,yt)},concat(...t){return Br(this).concat(...t.map(e=>fe(e)?Br(e):e))},entries(){return al(this,"entries",t=>(t[1]=yt(t[1]),t))},every(t,e){return fn(this,"every",t,e,void 0,arguments)},filter(t,e){return fn(this,"filter",t,e,n=>n.map(yt),arguments)},find(t,e){return fn(this,"find",t,e,yt,arguments)},findIndex(t,e){return fn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return fn(this,"findLast",t,e,yt,arguments)},findLastIndex(t,e){return fn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return fn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ll(this,"includes",t)},indexOf(...t){return ll(this,"indexOf",t)},join(t){return Br(this).join(t)},lastIndexOf(...t){return ll(this,"lastIndexOf",t)},map(t,e){return fn(this,"map",t,e,void 0,arguments)},pop(){return js(this,"pop")},push(...t){return js(this,"push",t)},reduce(t,...e){return Rh(this,"reduce",t,e)},reduceRight(t,...e){return Rh(this,"reduceRight",t,e)},shift(){return js(this,"shift")},some(t,e){return fn(this,"some",t,e,void 0,arguments)},splice(...t){return js(this,"splice",t)},toReversed(){return Br(this).toReversed()},toSorted(t){return Br(this).toSorted(t)},toSpliced(...t){return Br(this).toSpliced(...t)},unshift(...t){return js(this,"unshift",t)},values(){return al(this,"values",yt)}};function al(t,e,n){const r=ca(t),s=r[e]();return r!==t&&!Bt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.value&&(i.value=n(i.value)),i}),s}const Cy=Array.prototype;function fn(t,e,n,r,s,i){const o=ca(t),l=o!==t&&!Bt(t),c=o[e];if(c!==Cy[e]){const p=c.apply(t,i);return l?yt(p):p}let h=n;o!==t&&(l?h=function(p,g){return n.call(this,yt(p),g,t)}:n.length>2&&(h=function(p,g){return n.call(this,p,g,t)}));const d=c.call(o,h,r);return l&&s?s(d):d}function Rh(t,e,n,r){const s=ca(t);let i=n;return s!==t&&(Bt(t)?n.length>3&&(i=function(o,l,c){return n.call(this,o,l,c,t)}):i=function(o,l,c){return n.call(this,o,yt(l),c,t)}),s[e](i,...r)}function ll(t,e,n){const r=ke(t);It(r,"iterate",hi);const s=r[e](...n);return(s===-1||s===!1)&&Pc(n[0])?(n[0]=ke(n[0]),r[e](...n)):s}function js(t,e,n=[]){or(),Ec();const r=ke(t)[e].apply(t,n);return Tc(),ar(),r}const xy=_c("__proto__,__v_isRef,__isVue"),ip=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(ir));function ky(t){ir(t)||(t=String(t));const e=ke(this);return It(e,"has",t),e.hasOwnProperty(t)}class op{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Hy:up:i?cp:lp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=fe(e);if(!s){let c;if(o&&(c=Py[n]))return c;if(n==="hasOwnProperty")return ky}const l=Reflect.get(e,n,Et(e)?e:r);return(ir(n)?ip.has(n):xy(n))||(s||It(e,"get",n),i)?l:Et(l)?o&&wc(n)?l:l.value:qe(l)?s?dp(l):ha(l):l}}class ap extends op{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=Er(i);if(!Bt(r)&&!Er(r)&&(i=ke(i),r=ke(r)),!fe(e)&&Et(i)&&!Et(r))return c?!1:(i.value=r,!0)}const o=fe(e)&&wc(n)?Number(n)<e.length:xe(e,n),l=Reflect.set(e,n,r,Et(e)?e:s);return e===ke(s)&&(o?er(r,i)&&wn(e,"set",n,r):wn(e,"add",n,r)),l}deleteProperty(e,n){const r=xe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&wn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!ir(n)||!ip.has(n))&&It(e,"has",n),r}ownKeys(e){return It(e,"iterate",fe(e)?"length":vr),Reflect.ownKeys(e)}}class Ny extends op{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Vy=new ap,Dy=new Ny,Oy=new ap(!0);const Ac=t=>t,ua=t=>Reflect.getPrototypeOf(t);function lo(t,e,n=!1,r=!1){t=t.__v_raw;const s=ke(t),i=ke(e);n||(er(e,i)&&It(s,"get",e),It(s,"get",i));const{has:o}=ua(s),l=r?Ac:n?Cc:yt;if(o.call(s,e))return l(t.get(e));if(o.call(s,i))return l(t.get(i));t!==s&&t.get(e)}function co(t,e=!1){const n=this.__v_raw,r=ke(n),s=ke(t);return e||(er(t,s)&&It(r,"has",t),It(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function uo(t,e=!1){return t=t.__v_raw,!e&&It(ke(t),"iterate",vr),Reflect.get(t,"size",t)}function Sh(t,e=!1){!e&&!Bt(t)&&!Er(t)&&(t=ke(t));const n=ke(this);return ua(n).has.call(n,t)||(n.add(t),wn(n,"add",t,t)),this}function Ph(t,e,n=!1){!n&&!Bt(e)&&!Er(e)&&(e=ke(e));const r=ke(this),{has:s,get:i}=ua(r);let o=s.call(r,t);o||(t=ke(t),o=s.call(r,t));const l=i.call(r,t);return r.set(t,e),o?er(e,l)&&wn(r,"set",t,e):wn(r,"add",t,e),this}function Ch(t){const e=ke(this),{has:n,get:r}=ua(e);let s=n.call(e,t);s||(t=ke(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&wn(e,"delete",t,void 0),i}function xh(){const t=ke(this),e=t.size!==0,n=t.clear();return e&&wn(t,"clear",void 0,void 0),n}function ho(t,e){return function(r,s){const i=this,o=i.__v_raw,l=ke(o),c=e?Ac:t?Cc:yt;return!t&&It(l,"iterate",vr),o.forEach((h,d)=>r.call(s,c(h),c(d),i))}}function fo(t,e,n){return function(...r){const s=this.__v_raw,i=ke(s),o=Jr(i),l=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,h=s[t](...r),d=n?Ac:e?Cc:yt;return!e&&It(i,"iterate",c?Vl:vr),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:l?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function Un(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function My(){const t={get(i){return lo(this,i)},get size(){return uo(this)},has:co,add:Sh,set:Ph,delete:Ch,clear:xh,forEach:ho(!1,!1)},e={get(i){return lo(this,i,!1,!0)},get size(){return uo(this)},has:co,add(i){return Sh.call(this,i,!0)},set(i,o){return Ph.call(this,i,o,!0)},delete:Ch,clear:xh,forEach:ho(!1,!0)},n={get(i){return lo(this,i,!0)},get size(){return uo(this,!0)},has(i){return co.call(this,i,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:ho(!0,!1)},r={get(i){return lo(this,i,!0,!0)},get size(){return uo(this,!0)},has(i){return co.call(this,i,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:ho(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=fo(i,!1,!1),n[i]=fo(i,!0,!1),e[i]=fo(i,!1,!0),r[i]=fo(i,!0,!0)}),[t,n,e,r]}const[Ly,Uy,Fy,$y]=My();function Rc(t,e){const n=e?t?$y:Fy:t?Uy:Ly;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(xe(n,s)&&s in r?n:r,s,i)}const By={get:Rc(!1,!1)},jy={get:Rc(!1,!0)},qy={get:Rc(!0,!1)};const lp=new WeakMap,cp=new WeakMap,up=new WeakMap,Hy=new WeakMap;function zy(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wy(t){return t.__v_skip||!Object.isExtensible(t)?0:zy(my(t))}function ha(t){return Er(t)?t:Sc(t,!1,Vy,By,lp)}function hp(t){return Sc(t,!1,Oy,jy,cp)}function dp(t){return Sc(t,!0,Dy,qy,up)}function Sc(t,e,n,r,s){if(!qe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Wy(t);if(o===0)return t;const l=new Proxy(t,o===2?r:n);return s.set(t,l),l}function Xr(t){return Er(t)?Xr(t.__v_raw):!!(t&&t.__v_isReactive)}function Er(t){return!!(t&&t.__v_isReadonly)}function Bt(t){return!!(t&&t.__v_isShallow)}function Pc(t){return t?!!t.__v_raw:!1}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function Ky(t){return!xe(t,"__v_skip")&&Object.isExtensible(t)&&Wf(t,"__v_skip",!0),t}const yt=t=>qe(t)?ha(t):t,Cc=t=>qe(t)?dp(t):t;function Et(t){return t?t.__v_isRef===!0:!1}function Gy(t){return fp(t,!1)}function Qy(t){return fp(t,!0)}function fp(t,e){return Et(t)?t:new Yy(t,e)}class Yy{constructor(e,n){this.dep=new bc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ke(e),this._value=n?e:yt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Bt(e)||Er(e);e=r?e:ke(e),er(e,n)&&(this._rawValue=e,this._value=r?e:yt(e),this.dep.trigger())}}function Zr(t){return Et(t)?t.value:t}const Jy={get:(t,e,n)=>e==="__v_raw"?t:Zr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Et(s)&&!Et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function pp(t){return Xr(t)?t:new Proxy(t,Jy)}class Xy{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new bc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ui-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Ue!==this)return Zf(this),!0}get value(){const e=this.dep.track();return np(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zy(t,e,n=!1){let r,s;return _e(t)?r=t:(r=t.get,s=t.set),new Xy(r,s,n)}const po={},Lo=new WeakMap;let gr;function ev(t,e=!1,n=gr){if(n){let r=Lo.get(n);r||Lo.set(n,r=[]),r.push(t)}}function tv(t,e,n=Le){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:l,call:c}=n,h=Q=>s?Q:Bt(Q)||s===!1||s===0?gn(Q,1):gn(Q);let d,p,g,v,x=!1,N=!1;if(Et(t)?(p=()=>t.value,x=Bt(t)):Xr(t)?(p=()=>h(t),x=!0):fe(t)?(N=!0,x=t.some(Q=>Xr(Q)||Bt(Q)),p=()=>t.map(Q=>{if(Et(Q))return Q.value;if(Xr(Q))return h(Q);if(_e(Q))return c?c(Q,2):Q()})):_e(t)?e?p=c?()=>c(t,2):t:p=()=>{if(g){or();try{g()}finally{ar()}}const Q=gr;gr=d;try{return c?c(t,3,[v]):t(v)}finally{gr=Q}}:p=rn,e&&s){const Q=p,ye=s===!0?1/0:s;p=()=>gn(Q(),ye)}const D=Ay(),q=()=>{d.stop(),D&&vc(D.effects,d)};if(i&&e){const Q=e;e=(...ye)=>{Q(...ye),q()}}let j=N?new Array(t.length).fill(po):po;const K=Q=>{if(!(!(d.flags&1)||!d.dirty&&!Q))if(e){const ye=d.run();if(s||x||(N?ye.some((ve,b)=>er(ve,j[b])):er(ye,j))){g&&g();const ve=gr;gr=d;try{const b=[ye,j===po?void 0:N&&j[0]===po?[]:j,v];c?c(e,3,b):e(...b),j=ye}finally{gr=ve}}}else d.run()};return l&&l(K),d=new Jf(p),d.scheduler=o?()=>o(K,!1):K,v=Q=>ev(Q,!1,d),g=d.onStop=()=>{const Q=Lo.get(d);if(Q){if(c)c(Q,4);else for(const ye of Q)ye();Lo.delete(d)}},e?r?K(!0):j=d.run():o?o(K.bind(null,!0),!0):d.run(),q.pause=d.pause.bind(d),q.resume=d.resume.bind(d),q.stop=q,q}function gn(t,e=1/0,n){if(e<=0||!qe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Et(t))gn(t.value,e,n);else if(fe(t))for(let r=0;r<t.length;r++)gn(t[r],e,n);else if(jf(t)||Jr(t))t.forEach(r=>{gn(r,e,n)});else if(zf(t)){for(const r in t)gn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&gn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pi(t,e,n,r){try{return r?t(...r):t()}catch(s){da(s,e,n)}}function cn(t,e,n,r){if(_e(t)){const s=Pi(t,e,n,r);return s&&qf(s)&&s.catch(i=>{da(i,e,n)}),s}if(fe(t)){const s=[];for(let i=0;i<t.length;i++)s.push(cn(t[i],e,n,r));return s}}function da(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Le;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;l;){const d=l.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,c,h)===!1)return}l=l.parent}if(i){or(),Pi(i,null,10,[t,c,h]),ar();return}}nv(t,n,s,r,o)}function nv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}let di=!1,Dl=!1;const Ct=[];let en=0;const es=[];let Bn=null,jr=0;const mp=Promise.resolve();let xc=null;function gp(t){const e=xc||mp;return t?e.then(this?t.bind(this):t):e}function rv(t){let e=di?en+1:0,n=Ct.length;for(;e<n;){const r=e+n>>>1,s=Ct[r],i=fi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function kc(t){if(!(t.flags&1)){const e=fi(t),n=Ct[Ct.length-1];!n||!(t.flags&2)&&e>=fi(n)?Ct.push(t):Ct.splice(rv(e),0,t),t.flags|=1,_p()}}function _p(){!di&&!Dl&&(Dl=!0,xc=mp.then(vp))}function sv(t){fe(t)?es.push(...t):Bn&&t.id===-1?Bn.splice(jr+1,0,t):t.flags&1||(es.push(t),t.flags|=1),_p()}function kh(t,e,n=di?en+1:0){for(;n<Ct.length;n++){const r=Ct[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Ct.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function yp(t){if(es.length){const e=[...new Set(es)].sort((n,r)=>fi(n)-fi(r));if(es.length=0,Bn){Bn.push(...e);return}for(Bn=e,jr=0;jr<Bn.length;jr++){const n=Bn[jr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Bn=null,jr=0}}const fi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function vp(t){Dl=!1,di=!0;try{for(en=0;en<Ct.length;en++){const e=Ct[en];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Pi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;en<Ct.length;en++){const e=Ct[en];e&&(e.flags&=-2)}en=0,Ct.length=0,yp(),di=!1,xc=null,(Ct.length||es.length)&&vp()}}let lt=null,wp=null;function Uo(t){const e=lt;return lt=t,wp=t&&t.type.__scopeId||null,e}function re(t,e=lt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$h(-1);const i=Uo(e);let o;try{o=t(...s)}finally{Uo(i),r._d&&$h(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ep(t,e){if(lt===null)return t;const n=_a(lt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,l,c=Le]=e[s];i&&(_e(i)&&(i={mounted:i,updated:i}),i.deep&&gn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:l,modifiers:c}))}return t}function pr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const l=s[o];i&&(l.oldValue=i[o].value);let c=l.dir[r];c&&(or(),cn(c,n,8,[t.el,l,t,e]),ar())}}const iv=Symbol("_vte"),ov=t=>t.__isTeleport;function Nc(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Nc(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Tp(t,e){return _e(t)?ut({name:t.name},e,{setup:t}):t}function Ip(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ol(t,e,n,r,s=!1){if(fe(t)){t.forEach((x,N)=>Ol(x,e&&(fe(e)?e[N]:e),n,r,s));return}if(ts(r)&&!s)return;const i=r.shapeFlag&4?_a(r.component):r.el,o=s?null:i,{i:l,r:c}=t,h=e&&e.r,d=l.refs===Le?l.refs={}:l.refs,p=l.setupState,g=ke(p),v=p===Le?()=>!1:x=>xe(g,x);if(h!=null&&h!==c&&(Ze(h)?(d[h]=null,v(h)&&(p[h]=null)):Et(h)&&(h.value=null)),_e(c))Pi(c,l,12,[o,d]);else{const x=Ze(c),N=Et(c);if(x||N){const D=()=>{if(t.f){const q=x?v(c)?p[c]:d[c]:c.value;s?fe(q)&&vc(q,i):fe(q)?q.includes(i)||q.push(i):x?(d[c]=[i],v(c)&&(p[c]=d[c])):(c.value=[i],t.k&&(d[t.k]=c.value))}else x?(d[c]=o,v(c)&&(p[c]=o)):N&&(c.value=o,t.k&&(d[t.k]=o))};o?(D.id=-1,Dt(D,n)):D()}}}const ts=t=>!!t.type.__asyncLoader,bp=t=>t.type.__isKeepAlive;function av(t,e){Ap(t,"a",e)}function lv(t,e){Ap(t,"da",e)}function Ap(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(fa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)bp(s.parent.vnode)&&cv(r,e,n,s),s=s.parent}}function cv(t,e,n,r){const s=fa(e,t,r,!0);Rp(()=>{vc(r[e],s)},n)}function fa(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{or();const l=Ci(n),c=cn(e,n,t,o);return l(),ar(),c});return r?s.unshift(i):s.push(i),i}}const Sn=t=>(e,n=wt)=>{(!ga||t==="sp")&&fa(t,(...r)=>e(...r),n)},uv=Sn("bm"),hv=Sn("m"),dv=Sn("bu"),fv=Sn("u"),pv=Sn("bum"),Rp=Sn("um"),mv=Sn("sp"),gv=Sn("rtg"),_v=Sn("rtc");function yv(t,e=wt){fa("ec",t,e)}const vv="components";function me(t,e){return Ev(vv,t,!0,e)||t}const wv=Symbol.for("v-ndc");function Ev(t,e,n=!0,r=!1){const s=lt||wt;if(s){const i=s.type;{const l=aw(i,!1);if(l&&(l===e||l===jt(e)||l===aa(jt(e))))return i}const o=Nh(s[t]||i[t],e)||Nh(s.appContext[t],e);return!o&&r?i:o}}function Nh(t,e){return t&&(t[e]||t[jt(e)]||t[aa(jt(e))])}function Ts(t,e,n,r){let s;const i=n,o=fe(t);if(o||Ze(t)){const l=o&&Xr(t);let c=!1;l&&(c=!Bt(t),t=ca(t)),s=new Array(t.length);for(let h=0,d=t.length;h<d;h++)s[h]=e(c?yt(t[h]):t[h],h,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let l=0;l<t;l++)s[l]=e(l+1,l,void 0,i)}else if(qe(t))if(t[Symbol.iterator])s=Array.from(t,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(t);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(t[d],d,c,i)}}else s=[];return s}function Pn(t,e,n={},r,s){if(lt.ce||lt.parent&&ts(lt.parent)&&lt.parent.ce)return e!=="default"&&(n.name=e),J(),cs(Qe,null,[$("slot",n,r)],64);let i=t[e];i&&i._c&&(i._d=!1),J();const o=i&&Sp(i(n)),l=cs(Qe,{key:(n.key||o&&o.key||`_${e}`)+(!o&&r?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),i&&i._c&&(i._d=!0),l}function Sp(t){return t.some(e=>mi(e)?!(e.type===tr||e.type===Qe&&!Sp(e.children)):!0)?t:null}const Ml=t=>t?Kp(t)?_a(t):Ml(t.parent):null,ti=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ml(t.parent),$root:t=>Ml(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Vc(t),$forceUpdate:t=>t.f||(t.f=()=>{kc(t.update)}),$nextTick:t=>t.n||(t.n=gp.bind(t.proxy)),$watch:t=>jv.bind(t)}),cl=(t,e)=>t!==Le&&!t.__isScriptSetup&&xe(t,e),Tv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:l,appContext:c}=t;let h;if(e[0]!=="$"){const v=o[e];if(v!==void 0)switch(v){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(cl(r,e))return o[e]=1,r[e];if(s!==Le&&xe(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&xe(h,e))return o[e]=3,i[e];if(n!==Le&&xe(n,e))return o[e]=4,n[e];Ll&&(o[e]=0)}}const d=ti[e];let p,g;if(d)return e==="$attrs"&&It(t.attrs,"get",""),d(t);if((p=l.__cssModules)&&(p=p[e]))return p;if(n!==Le&&xe(n,e))return o[e]=4,n[e];if(g=c.config.globalProperties,xe(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return cl(s,e)?(s[e]=n,!0):r!==Le&&xe(r,e)?(r[e]=n,!0):xe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let l;return!!n[o]||t!==Le&&xe(t,o)||cl(e,o)||(l=i[0])&&xe(l,o)||xe(r,o)||xe(ti,o)||xe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:xe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vh(t){return fe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ll=!0;function Iv(t){const e=Vc(t),n=t.proxy,r=t.ctx;Ll=!1,e.beforeCreate&&Dh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:l,provide:c,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:v,updated:x,activated:N,deactivated:D,beforeDestroy:q,beforeUnmount:j,destroyed:K,unmounted:Q,render:ye,renderTracked:ve,renderTriggered:b,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:R,components:S,directives:E,filters:At}=e;if(h&&bv(h,r,null),o)for(const Ie in o){const we=o[Ie];_e(we)&&(r[Ie]=we.bind(n))}if(s){const Ie=s.call(n,n);qe(Ie)&&(t.data=ha(Ie))}if(Ll=!0,i)for(const Ie in i){const we=i[Ie],Nt=_e(we)?we.bind(n,n):_e(we.get)?we.get.bind(n,n):rn,qt=!_e(we)&&_e(we.set)?we.set.bind(n):rn,Ft=zt({get:Nt,set:qt});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Ft.value,set:He=>Ft.value=He})}if(l)for(const Ie in l)Pp(l[Ie],r,n,Ie);if(c){const Ie=_e(c)?c.call(n):c;Reflect.ownKeys(Ie).forEach(we=>{Eo(we,Ie[we])})}d&&Dh(d,t,"c");function Ye(Ie,we){fe(we)?we.forEach(Nt=>Ie(Nt.bind(n))):we&&Ie(we.bind(n))}if(Ye(uv,p),Ye(hv,g),Ye(dv,v),Ye(fv,x),Ye(av,N),Ye(lv,D),Ye(yv,y),Ye(_v,ve),Ye(gv,b),Ye(pv,j),Ye(Rp,Q),Ye(mv,T),fe(A))if(A.length){const Ie=t.exposed||(t.exposed={});A.forEach(we=>{Object.defineProperty(Ie,we,{get:()=>n[we],set:Nt=>n[we]=Nt})})}else t.exposed||(t.exposed={});ye&&t.render===rn&&(t.render=ye),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),E&&(t.directives=E),T&&Ip(t)}function bv(t,e,n=rn){fe(t)&&(t=Ul(t));for(const r in t){const s=t[r];let i;qe(s)?"default"in s?i=En(s.from||r,s.default,!0):i=En(s.from||r):i=En(s),Et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Dh(t,e,n){cn(fe(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Pp(t,e,n,r){let s=r.includes(".")?jp(n,r):()=>n[r];if(Ze(t)){const i=e[t];_e(i)&&To(s,i)}else if(_e(t))To(s,t.bind(n));else if(qe(t))if(fe(t))t.forEach(i=>Pp(i,e,n,r));else{const i=_e(t.handler)?t.handler.bind(n):e[t.handler];_e(i)&&To(s,i,t)}}function Vc(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(h=>Fo(c,h,o,!0)),Fo(c,e,o)),qe(e)&&i.set(e,c),c}function Fo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Fo(t,i,n,!0),s&&s.forEach(o=>Fo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const l=Av[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Av={data:Oh,props:Mh,emits:Mh,methods:Ks,computed:Ks,beforeCreate:Pt,created:Pt,beforeMount:Pt,mounted:Pt,beforeUpdate:Pt,updated:Pt,beforeDestroy:Pt,beforeUnmount:Pt,destroyed:Pt,unmounted:Pt,activated:Pt,deactivated:Pt,errorCaptured:Pt,serverPrefetch:Pt,components:Ks,directives:Ks,watch:Sv,provide:Oh,inject:Rv};function Oh(t,e){return e?t?function(){return ut(_e(t)?t.call(this,this):t,_e(e)?e.call(this,this):e)}:e:t}function Rv(t,e){return Ks(Ul(t),Ul(e))}function Ul(t){if(fe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ks(t,e){return t?ut(Object.create(null),t,e):e}function Mh(t,e){return t?fe(t)&&fe(e)?[...new Set([...t,...e])]:ut(Object.create(null),Vh(t),Vh(e??{})):e}function Sv(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=Pt(t[r],e[r]);return n}function Cp(){return{app:null,config:{isNativeTag:fy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pv=0;function Cv(t,e){return function(r,s=null){_e(r)||(r=ut({},r)),s!=null&&!qe(s)&&(s=null);const i=Cp(),o=new WeakSet,l=[];let c=!1;const h=i.app={_uid:Pv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:cw,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&_e(d.install)?(o.add(d),d.install(h,...p)):_e(d)&&(o.add(d),d(h,...p))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,p){return p?(i.components[d]=p,h):i.components[d]},directive(d,p){return p?(i.directives[d]=p,h):i.directives[d]},mount(d,p,g){if(!c){const v=h._ceVNode||$(r,s);return v.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),p&&e?e(v,d):t(v,d,g),c=!0,h._container=d,d.__vue_app__=h,_a(v.component)}},onUnmount(d){l.push(d)},unmount(){c&&(cn(l,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(d,p){return i.provides[d]=p,h},runWithContext(d){const p=ns;ns=h;try{return d()}finally{ns=p}}};return h}}let ns=null;function Eo(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function En(t,e,n=!1){const r=wt||lt;if(r||ns){const s=ns?ns._context.provides:r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&_e(e)?e.call(r&&r.proxy):e}}const xp={},kp=()=>Object.create(xp),Np=t=>Object.getPrototypeOf(t)===xp;function xv(t,e,n,r=!1){const s={},i=kp();t.propsDefaults=Object.create(null),Vp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:hp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function kv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,l=ke(s),[c]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let g=d[p];if(pa(t.emitsOptions,g))continue;const v=e[g];if(c)if(xe(i,g))v!==i[g]&&(i[g]=v,h=!0);else{const x=jt(g);s[x]=Fl(c,l,x,v,t,!1)}else v!==i[g]&&(i[g]=v,h=!0)}}}else{Vp(t,e,s,i)&&(h=!0);let d;for(const p in l)(!e||!xe(e,p)&&((d=Cr(p))===p||!xe(e,d)))&&(c?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=Fl(c,l,p,void 0,t,!0)):delete s[p]);if(i!==l)for(const p in i)(!e||!xe(e,p))&&(delete i[p],h=!0)}h&&wn(t.attrs,"set","")}function Vp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,l;if(e)for(let c in e){if(ei(c))continue;const h=e[c];let d;s&&xe(s,d=jt(c))?!i||!i.includes(d)?n[d]=h:(l||(l={}))[d]=h:pa(t.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,o=!0)}if(i){const c=ke(n),h=l||Le;for(let d=0;d<i.length;d++){const p=i[d];n[p]=Fl(s,c,p,h[p],t,!xe(h,p))}}return o}function Fl(t,e,n,r,s,i){const o=t[n];if(o!=null){const l=xe(o,"default");if(l&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&_e(c)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const d=Ci(s);r=h[n]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!l?r=!1:o[1]&&(r===""||r===Cr(n))&&(r=!0))}return r}const Nv=new WeakMap;function Dp(t,e,n=!1){const r=n?Nv:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},l=[];let c=!1;if(!_e(t)){const d=p=>{c=!0;const[g,v]=Dp(p,e,!0);ut(o,g),v&&l.push(...v)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!c)return qe(t)&&r.set(t,Yr),Yr;if(fe(i))for(let d=0;d<i.length;d++){const p=jt(i[d]);Lh(p)&&(o[p]=Le)}else if(i)for(const d in i){const p=jt(d);if(Lh(p)){const g=i[d],v=o[p]=fe(g)||_e(g)?{type:g}:ut({},g),x=v.type;let N=!1,D=!0;if(fe(x))for(let q=0;q<x.length;++q){const j=x[q],K=_e(j)&&j.name;if(K==="Boolean"){N=!0;break}else K==="String"&&(D=!1)}else N=_e(x)&&x.name==="Boolean";v[0]=N,v[1]=D,(N||xe(v,"default"))&&l.push(p)}}const h=[o,l];return qe(t)&&r.set(t,h),h}function Lh(t){return t[0]!=="$"&&!ei(t)}const Op=t=>t[0]==="_"||t==="$stable",Dc=t=>fe(t)?t.map(tn):[tn(t)],Vv=(t,e,n)=>{if(e._n)return e;const r=re((...s)=>Dc(e(...s)),n);return r._c=!1,r},Mp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Op(s))continue;const i=t[s];if(_e(i))e[s]=Vv(s,i,r);else if(i!=null){const o=Dc(i);e[s]=()=>o}}},Lp=(t,e)=>{const n=Dc(e);t.slots.default=()=>n},Up=(t,e,n)=>{for(const r in e)(n||r!=="_")&&(t[r]=e[r])},Dv=(t,e,n)=>{const r=t.slots=kp();if(t.vnode.shapeFlag&32){const s=e._;s?(Up(r,e,n),n&&Wf(r,"_",s,!0)):Mp(e,r)}else e&&Lp(t,e)},Ov=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Le;if(r.shapeFlag&32){const l=e._;l?n&&l===1?i=!1:Up(s,e,n):(i=!e.$stable,Mp(e,s)),o=e}else e&&(Lp(t,e),o={default:1});if(i)for(const l in s)!Op(l)&&o[l]==null&&delete s[l]},Dt=Qv;function Mv(t){return Lv(t)}function Lv(t,e){const n=Kf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:l,createComment:c,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:v=rn,insertStaticContent:x}=t,N=(_,w,C,L=null,V=null,F=null,Y=void 0,W=null,z=!!w.dynamicChildren)=>{if(_===w)return;_&&!qs(_,w)&&(L=O(_),He(_,V,F,!0),_=null),w.patchFlag===-2&&(z=!1,w.dynamicChildren=null);const{type:B,ref:ce,shapeFlag:Z}=w;switch(B){case ma:D(_,w,C,L);break;case tr:q(_,w,C,L);break;case Io:_==null&&j(w,C,L,Y);break;case Qe:S(_,w,C,L,V,F,Y,W,z);break;default:Z&1?ye(_,w,C,L,V,F,Y,W,z):Z&6?E(_,w,C,L,V,F,Y,W,z):(Z&64||Z&128)&&B.process(_,w,C,L,V,F,Y,W,z,se)}ce!=null&&V&&Ol(ce,_&&_.ref,F,w||_,!w)},D=(_,w,C,L)=>{if(_==null)r(w.el=l(w.children),C,L);else{const V=w.el=_.el;w.children!==_.children&&h(V,w.children)}},q=(_,w,C,L)=>{_==null?r(w.el=c(w.children||""),C,L):w.el=_.el},j=(_,w,C,L)=>{[_.el,_.anchor]=x(_.children,w,C,L,_.el,_.anchor)},K=({el:_,anchor:w},C,L)=>{let V;for(;_&&_!==w;)V=g(_),r(_,C,L),_=V;r(w,C,L)},Q=({el:_,anchor:w})=>{let C;for(;_&&_!==w;)C=g(_),s(_),_=C;s(w)},ye=(_,w,C,L,V,F,Y,W,z)=>{w.type==="svg"?Y="svg":w.type==="math"&&(Y="mathml"),_==null?ve(w,C,L,V,F,Y,W,z):T(_,w,V,F,Y,W,z)},ve=(_,w,C,L,V,F,Y,W)=>{let z,B;const{props:ce,shapeFlag:Z,transition:ae,dirs:ie}=_;if(z=_.el=o(_.type,F,ce&&ce.is,ce),Z&8?d(z,_.children):Z&16&&y(_.children,z,null,L,V,ul(_,F),Y,W),ie&&pr(_,null,L,"created"),b(z,_,_.scopeId,Y,L),ce){for(const Ce in ce)Ce!=="value"&&!ei(Ce)&&i(z,Ce,null,ce[Ce],F,L);"value"in ce&&i(z,"value",null,ce.value,F),(B=ce.onVnodeBeforeMount)&&Zt(B,L,_)}ie&&pr(_,null,L,"beforeMount");const ue=Uv(V,ae);ue&&ae.beforeEnter(z),r(z,w,C),((B=ce&&ce.onVnodeMounted)||ue||ie)&&Dt(()=>{B&&Zt(B,L,_),ue&&ae.enter(z),ie&&pr(_,null,L,"mounted")},V)},b=(_,w,C,L,V)=>{if(C&&v(_,C),L)for(let F=0;F<L.length;F++)v(_,L[F]);if(V){let F=V.subTree;if(w===F||Hp(F.type)&&(F.ssContent===w||F.ssFallback===w)){const Y=V.vnode;b(_,Y,Y.scopeId,Y.slotScopeIds,V.parent)}}},y=(_,w,C,L,V,F,Y,W,z=0)=>{for(let B=z;B<_.length;B++){const ce=_[B]=W?jn(_[B]):tn(_[B]);N(null,ce,w,C,L,V,F,Y,W)}},T=(_,w,C,L,V,F,Y)=>{const W=w.el=_.el;let{patchFlag:z,dynamicChildren:B,dirs:ce}=w;z|=_.patchFlag&16;const Z=_.props||Le,ae=w.props||Le;let ie;if(C&&mr(C,!1),(ie=ae.onVnodeBeforeUpdate)&&Zt(ie,C,w,_),ce&&pr(w,_,C,"beforeUpdate"),C&&mr(C,!0),(Z.innerHTML&&ae.innerHTML==null||Z.textContent&&ae.textContent==null)&&d(W,""),B?A(_.dynamicChildren,B,W,C,L,ul(w,V),F):Y||we(_,w,W,null,C,L,ul(w,V),F,!1),z>0){if(z&16)R(W,Z,ae,C,V);else if(z&2&&Z.class!==ae.class&&i(W,"class",null,ae.class,V),z&4&&i(W,"style",Z.style,ae.style,V),z&8){const ue=w.dynamicProps;for(let Ce=0;Ce<ue.length;Ce++){const Re=ue[Ce],dt=Z[Re],nt=ae[Re];(nt!==dt||Re==="value")&&i(W,Re,dt,nt,V,C)}}z&1&&_.children!==w.children&&d(W,w.children)}else!Y&&B==null&&R(W,Z,ae,C,V);((ie=ae.onVnodeUpdated)||ce)&&Dt(()=>{ie&&Zt(ie,C,w,_),ce&&pr(w,_,C,"updated")},L)},A=(_,w,C,L,V,F,Y)=>{for(let W=0;W<w.length;W++){const z=_[W],B=w[W],ce=z.el&&(z.type===Qe||!qs(z,B)||z.shapeFlag&70)?p(z.el):C;N(z,B,ce,null,L,V,F,Y,!0)}},R=(_,w,C,L,V)=>{if(w!==C){if(w!==Le)for(const F in w)!ei(F)&&!(F in C)&&i(_,F,w[F],null,V,L);for(const F in C){if(ei(F))continue;const Y=C[F],W=w[F];Y!==W&&F!=="value"&&i(_,F,W,Y,V,L)}"value"in C&&i(_,"value",w.value,C.value,V)}},S=(_,w,C,L,V,F,Y,W,z)=>{const B=w.el=_?_.el:l(""),ce=w.anchor=_?_.anchor:l("");let{patchFlag:Z,dynamicChildren:ae,slotScopeIds:ie}=w;ie&&(W=W?W.concat(ie):ie),_==null?(r(B,C,L),r(ce,C,L),y(w.children||[],C,ce,V,F,Y,W,z)):Z>0&&Z&64&&ae&&_.dynamicChildren?(A(_.dynamicChildren,ae,C,V,F,Y,W),(w.key!=null||V&&w===V.subTree)&&Fp(_,w,!0)):we(_,w,C,ce,V,F,Y,W,z)},E=(_,w,C,L,V,F,Y,W,z)=>{w.slotScopeIds=W,_==null?w.shapeFlag&512?V.ctx.activate(w,C,L,Y,z):At(w,C,L,V,F,Y,z):Ut(_,w,z)},At=(_,w,C,L,V,F,Y)=>{const W=_.component=nw(_,L,V);if(bp(_)&&(W.ctx.renderer=se),rw(W,!1,Y),W.asyncDep){if(V&&V.registerDep(W,Ye,Y),!_.el){const z=W.subTree=$(tr);q(null,z,w,C)}}else Ye(W,_,w,C,V,F,Y)},Ut=(_,w,C)=>{const L=w.component=_.component;if(Kv(_,w,C))if(L.asyncDep&&!L.asyncResolved){Ie(L,w,C);return}else L.next=w,L.update();else w.el=_.el,L.vnode=w},Ye=(_,w,C,L,V,F,Y)=>{const W=()=>{if(_.isMounted){let{next:Z,bu:ae,u:ie,parent:ue,vnode:Ce}=_;{const ft=$p(_);if(ft){Z&&(Z.el=Ce.el,Ie(_,Z,Y)),ft.asyncDep.then(()=>{_.isUnmounted||W()});return}}let Re=Z,dt;mr(_,!1),Z?(Z.el=Ce.el,Ie(_,Z,Y)):Z=Ce,ae&&wo(ae),(dt=Z.props&&Z.props.onVnodeBeforeUpdate)&&Zt(dt,ue,Z,Ce),mr(_,!0);const nt=hl(_),st=_.subTree;_.subTree=nt,N(st,nt,p(st.el),O(st),_,V,F),Z.el=nt.el,Re===null&&Gv(_,nt.el),ie&&Dt(ie,V),(dt=Z.props&&Z.props.onVnodeUpdated)&&Dt(()=>Zt(dt,ue,Z,Ce),V)}else{let Z;const{el:ae,props:ie}=w,{bm:ue,m:Ce,parent:Re,root:dt,type:nt}=_,st=ts(w);if(mr(_,!1),ue&&wo(ue),!st&&(Z=ie&&ie.onVnodeBeforeMount)&&Zt(Z,Re,w),mr(_,!0),ae&&De){const ft=()=>{_.subTree=hl(_),De(ae,_.subTree,_,V,null)};st&&nt.__asyncHydrate?nt.__asyncHydrate(ae,_,ft):ft()}else{dt.ce&&dt.ce._injectChildStyle(nt);const ft=_.subTree=hl(_);N(null,ft,C,L,_,V,F),w.el=ft.el}if(Ce&&Dt(Ce,V),!st&&(Z=ie&&ie.onVnodeMounted)){const ft=w;Dt(()=>Zt(Z,Re,ft),V)}(w.shapeFlag&256||Re&&ts(Re.vnode)&&Re.vnode.shapeFlag&256)&&_.a&&Dt(_.a,V),_.isMounted=!0,w=C=L=null}};_.scope.on();const z=_.effect=new Jf(W);_.scope.off();const B=_.update=z.run.bind(z),ce=_.job=z.runIfDirty.bind(z);ce.i=_,ce.id=_.uid,z.scheduler=()=>kc(ce),mr(_,!0),B()},Ie=(_,w,C)=>{w.component=_;const L=_.vnode.props;_.vnode=w,_.next=null,kv(_,w.props,L,C),Ov(_,w.children,C),or(),kh(_),ar()},we=(_,w,C,L,V,F,Y,W,z=!1)=>{const B=_&&_.children,ce=_?_.shapeFlag:0,Z=w.children,{patchFlag:ae,shapeFlag:ie}=w;if(ae>0){if(ae&128){qt(B,Z,C,L,V,F,Y,W,z);return}else if(ae&256){Nt(B,Z,C,L,V,F,Y,W,z);return}}ie&8?(ce&16&&xt(B,V,F),Z!==B&&d(C,Z)):ce&16?ie&16?qt(B,Z,C,L,V,F,Y,W,z):xt(B,V,F,!0):(ce&8&&d(C,""),ie&16&&y(Z,C,L,V,F,Y,W,z))},Nt=(_,w,C,L,V,F,Y,W,z)=>{_=_||Yr,w=w||Yr;const B=_.length,ce=w.length,Z=Math.min(B,ce);let ae;for(ae=0;ae<Z;ae++){const ie=w[ae]=z?jn(w[ae]):tn(w[ae]);N(_[ae],ie,C,null,V,F,Y,W,z)}B>ce?xt(_,V,F,!0,!1,Z):y(w,C,L,V,F,Y,W,z,Z)},qt=(_,w,C,L,V,F,Y,W,z)=>{let B=0;const ce=w.length;let Z=_.length-1,ae=ce-1;for(;B<=Z&&B<=ae;){const ie=_[B],ue=w[B]=z?jn(w[B]):tn(w[B]);if(qs(ie,ue))N(ie,ue,C,null,V,F,Y,W,z);else break;B++}for(;B<=Z&&B<=ae;){const ie=_[Z],ue=w[ae]=z?jn(w[ae]):tn(w[ae]);if(qs(ie,ue))N(ie,ue,C,null,V,F,Y,W,z);else break;Z--,ae--}if(B>Z){if(B<=ae){const ie=ae+1,ue=ie<ce?w[ie].el:L;for(;B<=ae;)N(null,w[B]=z?jn(w[B]):tn(w[B]),C,ue,V,F,Y,W,z),B++}}else if(B>ae)for(;B<=Z;)He(_[B],V,F,!0),B++;else{const ie=B,ue=B,Ce=new Map;for(B=ue;B<=ae;B++){const Rt=w[B]=z?jn(w[B]):tn(w[B]);Rt.key!=null&&Ce.set(Rt.key,B)}let Re,dt=0;const nt=ae-ue+1;let st=!1,ft=0;const Dn=new Array(nt);for(B=0;B<nt;B++)Dn[B]=0;for(B=ie;B<=Z;B++){const Rt=_[B];if(dt>=nt){He(Rt,V,F,!0);continue}let $t;if(Rt.key!=null)$t=Ce.get(Rt.key);else for(Re=ue;Re<=ae;Re++)if(Dn[Re-ue]===0&&qs(Rt,w[Re])){$t=Re;break}$t===void 0?He(Rt,V,F,!0):(Dn[$t-ue]=B+1,$t>=ft?ft=$t:st=!0,N(Rt,w[$t],C,null,V,F,Y,W,z),dt++)}const Or=st?Fv(Dn):Yr;for(Re=Or.length-1,B=nt-1;B>=0;B--){const Rt=ue+B,$t=w[Rt],Mr=Rt+1<ce?w[Rt+1].el:L;Dn[B]===0?N(null,$t,C,Mr,V,F,Y,W,z):st&&(Re<0||B!==Or[Re]?Ft($t,C,Mr,2):Re--)}}},Ft=(_,w,C,L,V=null)=>{const{el:F,type:Y,transition:W,children:z,shapeFlag:B}=_;if(B&6){Ft(_.component.subTree,w,C,L);return}if(B&128){_.suspense.move(w,C,L);return}if(B&64){Y.move(_,w,C,se);return}if(Y===Qe){r(F,w,C);for(let Z=0;Z<z.length;Z++)Ft(z[Z],w,C,L);r(_.anchor,w,C);return}if(Y===Io){K(_,w,C);return}if(L!==2&&B&1&&W)if(L===0)W.beforeEnter(F),r(F,w,C),Dt(()=>W.enter(F),V);else{const{leave:Z,delayLeave:ae,afterLeave:ie}=W,ue=()=>r(F,w,C),Ce=()=>{Z(F,()=>{ue(),ie&&ie()})};ae?ae(F,ue,Ce):Ce()}else r(F,w,C)},He=(_,w,C,L=!1,V=!1)=>{const{type:F,props:Y,ref:W,children:z,dynamicChildren:B,shapeFlag:ce,patchFlag:Z,dirs:ae,cacheIndex:ie}=_;if(Z===-2&&(V=!1),W!=null&&Ol(W,null,C,_,!0),ie!=null&&(w.renderCache[ie]=void 0),ce&256){w.ctx.deactivate(_);return}const ue=ce&1&&ae,Ce=!ts(_);let Re;if(Ce&&(Re=Y&&Y.onVnodeBeforeUnmount)&&Zt(Re,w,_),ce&6)Xt(_.component,C,L);else{if(ce&128){_.suspense.unmount(C,L);return}ue&&pr(_,null,w,"beforeUnmount"),ce&64?_.type.remove(_,w,C,se,L):B&&!B.hasOnce&&(F!==Qe||Z>0&&Z&64)?xt(B,w,C,!1,!0):(F===Qe&&Z&384||!V&&ce&16)&&xt(z,w,C),L&&ze(_)}(Ce&&(Re=Y&&Y.onVnodeUnmounted)||ue)&&Dt(()=>{Re&&Zt(Re,w,_),ue&&pr(_,null,w,"unmounted")},C)},ze=_=>{const{type:w,el:C,anchor:L,transition:V}=_;if(w===Qe){Vn(C,L);return}if(w===Io){Q(_);return}const F=()=>{s(C),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(_.shapeFlag&1&&V&&!V.persisted){const{leave:Y,delayLeave:W}=V,z=()=>Y(C,F);W?W(_.el,F,z):z()}else F()},Vn=(_,w)=>{let C;for(;_!==w;)C=g(_),s(_),_=C;s(w)},Xt=(_,w,C)=>{const{bum:L,scope:V,job:F,subTree:Y,um:W,m:z,a:B}=_;Uh(z),Uh(B),L&&wo(L),V.stop(),F&&(F.flags|=8,He(Y,_,w,C)),W&&Dt(W,w),Dt(()=>{_.isUnmounted=!0},w),w&&w.pendingBranch&&!w.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===w.pendingId&&(w.deps--,w.deps===0&&w.resolve())},xt=(_,w,C,L=!1,V=!1,F=0)=>{for(let Y=F;Y<_.length;Y++)He(_[Y],w,C,L,V)},O=_=>{if(_.shapeFlag&6)return O(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const w=g(_.anchor||_.el),C=w&&w[iv];return C?g(C):w};let te=!1;const X=(_,w,C)=>{_==null?w._vnode&&He(w._vnode,null,null,!0):N(w._vnode||null,_,w,null,null,null,C),w._vnode=_,te||(te=!0,kh(),yp(),te=!1)},se={p:N,um:He,m:Ft,r:ze,mt:At,mc:y,pc:we,pbc:A,n:O,o:t};let be,De;return{render:X,hydrate:be,createApp:Cv(X,be)}}function ul({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function mr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Uv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fp(t,e,n=!1){const r=t.children,s=e.children;if(fe(r)&&fe(s))for(let i=0;i<r.length;i++){const o=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=jn(s[i]),l.el=o.el),!n&&l.patchFlag!==-2&&Fp(o,l)),l.type===ma&&(l.el=o.el)}}function Fv(t){const e=t.slice(),n=[0];let r,s,i,o,l;const c=t.length;for(r=0;r<c;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)l=i+o>>1,t[n[l]]<h?i=l+1:o=l;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function $p(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:$p(e)}function Uh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const $v=Symbol.for("v-scx"),Bv=()=>En($v);function To(t,e,n){return Bp(t,e,n)}function Bp(t,e,n=Le){const{immediate:r,deep:s,flush:i,once:o}=n,l=ut({},n);let c;if(ga)if(i==="sync"){const g=Bv();c=g.__watcherHandles||(g.__watcherHandles=[])}else if(!e||r)l.once=!0;else{const g=()=>{};return g.stop=rn,g.resume=rn,g.pause=rn,g}const h=wt;l.call=(g,v,x)=>cn(g,h,v,x);let d=!1;i==="post"?l.scheduler=g=>{Dt(g,h&&h.suspense)}:i!=="sync"&&(d=!0,l.scheduler=(g,v)=>{v?g():kc(g)}),l.augmentJob=g=>{e&&(g.flags|=4),d&&(g.flags|=2,h&&(g.id=h.uid,g.i=h))};const p=tv(t,e,l);return c&&c.push(p),p}function jv(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?jp(r,t):()=>r[t]:t.bind(r,r);let i;_e(e)?i=e:(i=e.handler,n=e);const o=Ci(this),l=Bp(s,i.bind(r),n);return o(),l}function jp(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const qv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${jt(e)}Modifiers`]||t[`${Cr(e)}Modifiers`];function Hv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Le;let s=n;const i=e.startsWith("update:"),o=i&&qv(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>Ze(d)?d.trim():d)),o.number&&(s=n.map(xl)));let l,c=r[l=sl(e)]||r[l=sl(jt(e))];!c&&i&&(c=r[l=sl(Cr(e))]),c&&cn(c,t,6,s);const h=r[l+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,cn(h,t,6,s)}}function qp(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},l=!1;if(!_e(t)){const c=h=>{const d=qp(h,e,!0);d&&(l=!0,ut(o,d))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!l?(qe(t)&&r.set(t,null),null):(fe(i)?i.forEach(c=>o[c]=null):ut(o,i),qe(t)&&r.set(t,o),o)}function pa(t,e){return!t||!sa(e)?!1:(e=e.slice(2).replace(/Once$/,""),xe(t,e[0].toLowerCase()+e.slice(1))||xe(t,Cr(e))||xe(t,e))}function hl(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:l,emit:c,render:h,renderCache:d,props:p,data:g,setupState:v,ctx:x,inheritAttrs:N}=t,D=Uo(t);let q,j;try{if(n.shapeFlag&4){const Q=s||r,ye=Q;q=tn(h.call(ye,Q,d,p,v,g,x)),j=l}else{const Q=e;q=tn(Q.length>1?Q(p,{attrs:l,slots:o,emit:c}):Q(p,null)),j=e.props?l:zv(l)}}catch(Q){ni.length=0,da(Q,t,1),q=$(tr)}let K=q;if(j&&N!==!1){const Q=Object.keys(j),{shapeFlag:ye}=K;Q.length&&ye&7&&(i&&Q.some(yc)&&(j=Wv(j,i)),K=us(K,j,!1,!0))}return n.dirs&&(K=us(K,null,!1,!0),K.dirs=K.dirs?K.dirs.concat(n.dirs):n.dirs),n.transition&&Nc(K,n.transition),q=K,Uo(D),q}const zv=t=>{let e;for(const n in t)(n==="class"||n==="style"||sa(n))&&((e||(e={}))[n]=t[n]);return e},Wv=(t,e)=>{const n={};for(const r in t)(!yc(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Kv(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Fh(r,o,h):!!o;if(c&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const g=d[p];if(o[g]!==r[g]&&!pa(h,g))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===o?!1:r?o?Fh(r,o,h):!0:!!o;return!1}function Fh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!pa(n,i))return!0}return!1}function Gv({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Hp=t=>t.__isSuspense;function Qv(t,e){e&&e.pendingBranch?fe(t)?e.effects.push(...t):e.effects.push(t):sv(t)}const Qe=Symbol.for("v-fgt"),ma=Symbol.for("v-txt"),tr=Symbol.for("v-cmt"),Io=Symbol.for("v-stc"),ni=[];let Mt=null;function J(t=!1){ni.push(Mt=t?null:[])}function Yv(){ni.pop(),Mt=ni[ni.length-1]||null}let pi=1;function $h(t){pi+=t,t<0&&Mt&&(Mt.hasOnce=!0)}function zp(t){return t.dynamicChildren=pi>0?Mt||Yr:null,Yv(),pi>0&&Mt&&Mt.push(t),t}function ee(t,e,n,r,s,i){return zp(I(t,e,n,r,s,i,!0))}function cs(t,e,n,r,s){return zp($(t,e,n,r,s,!0))}function mi(t){return t?t.__v_isVNode===!0:!1}function qs(t,e){return t.type===e.type&&t.key===e.key}const Wp=({key:t})=>t??null,bo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||Et(t)||_e(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function I(t,e=null,n=null,r=0,s=null,i=t===Qe?0:1,o=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Wp(e),ref:e&&bo(e),scopeId:wp,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:lt};return l?(Oc(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ze(n)?8:16),pi>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const $=Jv;function Jv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===wv)&&(t=tr),mi(t)){const l=us(t,e,!0);return n&&Oc(l,n),pi>0&&!i&&Mt&&(l.shapeFlag&6?Mt[Mt.indexOf(t)]=l:Mt.push(l)),l.patchFlag=-2,l}if(lw(t)&&(t=t.__vccOpts),e){e=Xv(e);let{class:l,style:c}=e;l&&!Ze(l)&&(e.class=ls(l)),qe(c)&&(Pc(c)&&!fe(c)&&(c=ut({},c)),e.style=la(c))}const o=Ze(t)?1:Hp(t)?128:ov(t)?64:qe(t)?4:_e(t)?2:0;return I(t,e,n,r,s,o,i,!0)}function Xv(t){return t?Pc(t)||Np(t)?ut({},t):t:null}function us(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:l,transition:c}=t,h=e?Zv(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Wp(h),ref:e&&e.ref?n&&i?fe(i)?i.concat(bo(e)):[i,bo(e)]:bo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:l,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qe?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:c,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return c&&r&&Nc(d,c.clone(d)),d}function H(t=" ",e=0){return $(ma,null,t,e)}function $o(t,e){const n=$(Io,null,t);return n.staticCount=e,n}function Me(t="",e=!1){return e?(J(),cs(tr,null,t)):$(tr,null,t)}function tn(t){return t==null||typeof t=="boolean"?$(tr):fe(t)?$(Qe,null,t.slice()):mi(t)?jn(t):$(ma,null,String(t))}function jn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function Oc(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(fe(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Oc(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Np(e)?e._ctx=lt:s===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else _e(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),r&64?(n=16,e=[H(e)]):n=8);t.children=e,t.shapeFlag|=n}function Zv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ls([e.class,r.class]));else if(s==="style")e.style=la([e.style,r.style]);else if(sa(s)){const i=e[s],o=r[s];o&&i!==o&&!(fe(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Zt(t,e,n,r=null){cn(t,e,7,[n,r])}const ew=Cp();let tw=0;function nw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ew,i={uid:tw++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new by(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dp(r,s),emitsOptions:qp(r,s),emit:null,emitted:null,propsDefaults:Le,inheritAttrs:r.inheritAttrs,ctx:Le,data:Le,props:Le,attrs:Le,slots:Le,refs:Le,setupState:Le,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Hv.bind(null,i),t.ce&&t.ce(i),i}let wt=null,Bo,$l;{const t=Kf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Bo=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),$l=e("__VUE_SSR_SETTERS__",n=>ga=n)}const Ci=t=>{const e=wt;return Bo(t),t.scope.on(),()=>{t.scope.off(),Bo(e)}},Bh=()=>{wt&&wt.scope.off(),Bo(null)};function Kp(t){return t.vnode.shapeFlag&4}let ga=!1;function rw(t,e=!1,n=!1){e&&$l(e);const{props:r,children:s}=t.vnode,i=Kp(t);xv(t,r,i,e),Dv(t,s,n);const o=i?sw(t,e):void 0;return e&&$l(!1),o}function sw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Tv);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?ow(t):null,i=Ci(t);or();const o=Pi(r,t,0,[t.props,s]);if(ar(),i(),qf(o)){if(ts(t)||Ip(t),o.then(Bh,Bh),e)return o.then(l=>{jh(t,l,e)}).catch(l=>{da(l,t,0)});t.asyncDep=o}else jh(t,o,e)}else Gp(t,e)}function jh(t,e,n){_e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:qe(e)&&(t.setupState=pp(e)),Gp(t,n)}let qh;function Gp(t,e,n){const r=t.type;if(!t.render){if(!e&&qh&&!r.render){const s=r.template||Vc(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:c}=r,h=ut(ut({isCustomElement:i,delimiters:l},o),c);r.render=qh(s,h)}}t.render=r.render||rn}{const s=Ci(t);or();try{Iv(t)}finally{ar(),s()}}}const iw={get(t,e){return It(t,"get",""),t[e]}};function ow(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,iw),slots:t.slots,emit:t.emit,expose:e}}function _a(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(pp(Ky(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ti)return ti[n](t)},has(e,n){return n in e||n in ti}})):t.proxy}function aw(t,e=!0){return _e(t)?t.displayName||t.name:t.name||e&&t.__name}function lw(t){return _e(t)&&"__vccOpts"in t}const zt=(t,e)=>Zy(t,e,ga);function Qp(t,e,n){const r=arguments.length;return r===2?qe(e)&&!fe(e)?mi(e)?$(t,null,[e]):$(t,e):$(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&mi(n)&&(n=[n]),$(t,e,n))}const cw="3.5.10";/**
* @vue/runtime-dom v3.5.10
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Bl;const Hh=typeof window<"u"&&window.trustedTypes;if(Hh)try{Bl=Hh.createPolicy("vue",{createHTML:t=>t})}catch{}const Yp=Bl?t=>Bl.createHTML(t):t=>t,uw="http://www.w3.org/2000/svg",hw="http://www.w3.org/1998/Math/MathML",mn=typeof document<"u"?document:null,zh=mn&&mn.createElement("template"),dw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?mn.createElementNS(uw,t):e==="mathml"?mn.createElementNS(hw,t):n?mn.createElement(t,{is:n}):mn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>mn.createTextNode(t),createComment:t=>mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zh.innerHTML=Yp(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const l=zh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fw=Symbol("_vtc");function pw(t,e,n){const r=t[fw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const jo=Symbol("_vod"),Jp=Symbol("_vsh"),mw={beforeMount(t,{value:e},{transition:n}){t[jo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Hs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Hs(t,!0),r.enter(t)):r.leave(t,()=>{Hs(t,!1)}):Hs(t,e))},beforeUnmount(t,{value:e}){Hs(t,e)}};function Hs(t,e){t.style.display=e?t[jo]:"none",t[Jp]=!e}const gw=Symbol(""),_w=/(^|;)\s*display\s*:/;function yw(t,e,n){const r=t.style,s=Ze(n);let i=!1;if(n&&!s){if(e)if(Ze(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&Ao(r,l,"")}else for(const o in e)n[o]==null&&Ao(r,o,"");for(const o in n)o==="display"&&(i=!0),Ao(r,o,n[o])}else if(s){if(e!==n){const o=r[gw];o&&(n+=";"+o),r.cssText=n,i=_w.test(n)}}else e&&t.removeAttribute("style");jo in t&&(t[jo]=i?r.display:"",t[Jp]&&(r.display="none"))}const Wh=/\s*!important$/;function Ao(t,e,n){if(fe(n))n.forEach(r=>Ao(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vw(t,e);Wh.test(n)?t.setProperty(Cr(r),n.replace(Wh,""),"important"):t[r]=n}}const Kh=["Webkit","Moz","ms"],dl={};function vw(t,e){const n=dl[e];if(n)return n;let r=jt(e);if(r!=="filter"&&r in t)return dl[e]=r;r=aa(r);for(let s=0;s<Kh.length;s++){const i=Kh[s]+r;if(i in t)return dl[e]=i}return e}const Gh="http://www.w3.org/1999/xlink";function Qh(t,e,n,r,s,i=Iy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gh,e.slice(6,e.length)):t.setAttributeNS(Gh,e,n):n==null||i&&!Gf(n)?t.removeAttribute(e):t.setAttribute(e,i?"":ir(n)?String(n):n)}function Yh(t,e,n,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Yp(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let i=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Gf(n):n==null&&o==="string"?(n="",i=!0):o==="number"&&(n=0,i=!0)}try{t[e]=n}catch{}i&&t.removeAttribute(e)}function qr(t,e,n,r){t.addEventListener(e,n,r)}function ww(t,e,n,r){t.removeEventListener(e,n,r)}const Jh=Symbol("_vei");function Ew(t,e,n,r,s=null){const i=t[Jh]||(t[Jh]={}),o=i[e];if(r&&o)o.value=r;else{const[l,c]=Tw(e);if(r){const h=i[e]=Aw(r,s);qr(t,l,h,c)}else o&&(ww(t,l,o,c),i[e]=void 0)}}const Xh=/(?:Once|Passive|Capture)$/;function Tw(t){let e;if(Xh.test(t)){e={};let r;for(;r=t.match(Xh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Cr(t.slice(2)),e]}let fl=0;const Iw=Promise.resolve(),bw=()=>fl||(Iw.then(()=>fl=0),fl=Date.now());function Aw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;cn(Rw(r,n.value),e,5,[r])};return n.value=t,n.attached=bw(),n}function Rw(t,e){if(fe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Zh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?pw(t,r,o):e==="style"?yw(t,n,r):sa(e)?yc(e)||Ew(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pw(t,e,r,o))?(Yh(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qh(t,e,r,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ze(r))?Yh(t,jt(e),r):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qh(t,e,r,o))};function Pw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Zh(e)&&_e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Zh(e)&&Ze(n)?!1:e in t}const ed=t=>{const e=t.props["onUpdate:modelValue"]||!1;return fe(e)?n=>wo(e,n):e};function Cw(t){t.target.composing=!0}function td(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const pl=Symbol("_assign"),xw={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[pl]=ed(s);const i=r||s.props&&s.props.type==="number";qr(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),i&&(l=xl(l)),t[pl](l)}),n&&qr(t,"change",()=>{t.value=t.value.trim()}),e||(qr(t,"compositionstart",Cw),qr(t,"compositionend",td),qr(t,"change",td))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[pl]=ed(o),t.composing)return;const l=(i||t.type==="number")&&!/^0\d/.test(t.value)?xl(t.value):t.value,c=e??"";l!==c&&(document.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===c)||(t.value=c))}},kw=["ctrl","shift","alt","meta"],Nw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>kw.some(n=>t[`${n}Key`]&&!e.includes(n))},xi=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const l=Nw[e[o]];if(l&&l(s,e))return}return t(s,...i)})},Vw=ut({patchProp:Sw},dw);let nd;function Dw(){return nd||(nd=Mv(Vw))}const Ow=(...t)=>{const e=Dw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Lw(r);if(!s)return;const i=e._component;!_e(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Mw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Mw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lw(t){return Ze(t)?document.querySelector(t):t}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Hr=typeof document<"u";function Xp(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Uw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Xp(t.default)}const Ne=Object.assign;function ml(t,e){const n={};for(const r in e){const s=e[r];n[r]=Qt(s)?s.map(t):t(s)}return n}const ri=()=>{},Qt=Array.isArray,Zp=/#/g,Fw=/&/g,$w=/\//g,Bw=/=/g,jw=/\?/g,em=/\+/g,qw=/%5B/g,Hw=/%5D/g,tm=/%5E/g,zw=/%60/g,nm=/%7B/g,Ww=/%7C/g,rm=/%7D/g,Kw=/%20/g;function Mc(t){return encodeURI(""+t).replace(Ww,"|").replace(qw,"[").replace(Hw,"]")}function Gw(t){return Mc(t).replace(nm,"{").replace(rm,"}").replace(tm,"^")}function jl(t){return Mc(t).replace(em,"%2B").replace(Kw,"+").replace(Zp,"%23").replace(Fw,"%26").replace(zw,"`").replace(nm,"{").replace(rm,"}").replace(tm,"^")}function Qw(t){return jl(t).replace(Bw,"%3D")}function Yw(t){return Mc(t).replace(Zp,"%23").replace(jw,"%3F")}function Jw(t){return t==null?"":Yw(t).replace($w,"%2F")}function gi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const Xw=/\/$/,Zw=t=>t.replace(Xw,"");function gl(t,e,n="/"){let r,s={},i="",o="";const l=e.indexOf("#");let c=e.indexOf("?");return l<c&&l>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=rE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:gi(o)}}function eE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function rd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function tE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&hs(e.matched[r],n.matched[s])&&sm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function sm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!nE(t[n],e[n]))return!1;return!0}function nE(t,e){return Qt(t)?sd(t,e):Qt(e)?sd(e,t):t===e}function sd(t,e){return Qt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function rE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,l;for(o=0;o<r.length;o++)if(l=r[o],l!==".")if(l==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var _i;(function(t){t.pop="pop",t.push="push"})(_i||(_i={}));var si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(si||(si={}));function sE(t){if(!t)if(Hr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Zw(t)}const iE=/^[^#]+#/;function oE(t,e){return t.replace(iE,"#")+e}function aE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ya=()=>({left:window.scrollX,top:window.scrollY});function lE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=aE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function id(t,e){return(history.state?history.state.position-e:-1)+t}const ql=new Map;function cE(t,e){ql.set(t,e)}function uE(t){const e=ql.get(t);return ql.delete(t),e}let hE=()=>location.protocol+"//"+location.host;function im(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let l=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(l);return c[0]!=="/"&&(c="/"+c),rd(c,"")}return rd(n,t)+r+s}function dE(t,e,n,r){let s=[],i=[],o=null;const l=({state:g})=>{const v=im(t,location),x=n.value,N=e.value;let D=0;if(g){if(n.value=v,e.value=g,o&&o===x){o=null;return}D=N?g.position-N.position:0}else r(v);s.forEach(q=>{q(n.value,x,{delta:D,type:_i.pop,direction:D?D>0?si.forward:si.back:si.unknown})})};function c(){o=n.value}function h(g){s.push(g);const v=()=>{const x=s.indexOf(g);x>-1&&s.splice(x,1)};return i.push(v),v}function d(){const{history:g}=window;g.state&&g.replaceState(Ne({},g.state,{scroll:ya()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",d)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",d,{passive:!0}),{pauseListeners:c,listen:h,destroy:p}}function od(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ya():null}}function fE(t){const{history:e,location:n}=window,r={value:im(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,h,d){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+c:hE()+t+c;try{e[d?"replaceState":"pushState"](h,"",g),s.value=h}catch(v){console.error(v),n[d?"replace":"assign"](g)}}function o(c,h){const d=Ne({},e.state,od(s.value.back,c,s.value.forward,!0),h,{position:s.value.position});i(c,d,!0),r.value=c}function l(c,h){const d=Ne({},s.value,e.state,{forward:c,scroll:ya()});i(d.current,d,!0);const p=Ne({},od(r.value,c,null),{position:d.position+1},h);i(c,p,!1),r.value=c}return{location:r,state:s,push:l,replace:o}}function pE(t){t=sE(t);const e=fE(t),n=dE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:oE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function mE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),pE(t)}function gE(t){return typeof t=="string"||t&&typeof t=="object"}function om(t){return typeof t=="string"||typeof t=="symbol"}const am=Symbol("");var ad;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(ad||(ad={}));function ds(t,e){return Ne(new Error,{type:t,[am]:!0},e)}function pn(t,e){return t instanceof Error&&am in t&&(e==null||!!(t.type&e))}const ld="[^/]+?",_E={sensitive:!1,strict:!1,start:!0,end:!0},yE=/[.+*?^${}()[\]/\\]/g;function vE(t,e){const n=Ne({},_E,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const d=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let v=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(yE,"\\$&"),v+=40;else if(g.type===1){const{value:x,repeatable:N,optional:D,regexp:q}=g;i.push({name:x,repeatable:N,optional:D});const j=q||ld;if(j!==ld){v+=10;try{new RegExp(`(${j})`)}catch(Q){throw new Error(`Invalid custom RegExp for param "${x}" (${j}): `+Q.message)}}let K=N?`((?:${j})(?:/(?:${j}))*)`:`(${j})`;p||(K=D&&h.length<2?`(?:/${K})`:"/"+K),D&&(K+="?"),s+=K,v+=20,D&&(v+=-8),N&&(v+=-20),j===".*"&&(v+=-50)}d.push(v)}r.push(d)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function l(h){const d=h.match(o),p={};if(!d)return null;for(let g=1;g<d.length;g++){const v=d[g]||"",x=i[g-1];p[x.name]=v&&x.repeatable?v.split("/"):v}return p}function c(h){let d="",p=!1;for(const g of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const v of g)if(v.type===0)d+=v.value;else if(v.type===1){const{value:x,repeatable:N,optional:D}=v,q=x in h?h[x]:"";if(Qt(q)&&!N)throw new Error(`Provided param "${x}" is an array but it is not repeatable (* or + modifiers)`);const j=Qt(q)?q.join("/"):q;if(!j)if(D)g.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${x}"`);d+=j}}return d||"/"}return{re:o,score:r,keys:i,parse:l,stringify:c}}function wE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function lm(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=wE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(cd(r))return 1;if(cd(s))return-1}return s.length-r.length}function cd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const EE={type:0,value:""},TE=/[a-zA-Z0-9_]/;function IE(t){if(!t)return[[]];if(t==="/")return[[EE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(v){throw new Error(`ERR (${n})/"${h}": ${v}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let l=0,c,h="",d="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:d,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=c}for(;l<t.length;){if(c=t[l++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(h&&p(),o()):c===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:c==="("?n=2:TE.test(c)?g():(p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--);break;case 2:c===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+c:n=3:d+=c;break;case 3:p(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&l--,d="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function bE(t,e,n){const r=vE(IE(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function AE(t,e){const n=[],r=new Map;e=fd({strict:!1,end:!0,sensitive:!1},e);function s(p){return r.get(p)}function i(p,g,v){const x=!v,N=hd(p);N.aliasOf=v&&v.record;const D=fd(e,p),q=[N];if("alias"in p){const Q=typeof p.alias=="string"?[p.alias]:p.alias;for(const ye of Q)q.push(hd(Ne({},N,{components:v?v.record.components:N.components,path:ye,aliasOf:v?v.record:N})))}let j,K;for(const Q of q){const{path:ye}=Q;if(g&&ye[0]!=="/"){const ve=g.record.path,b=ve[ve.length-1]==="/"?"":"/";Q.path=g.record.path+(ye&&b+ye)}if(j=bE(Q,g,D),v?v.alias.push(j):(K=K||j,K!==j&&K.alias.push(j),x&&p.name&&!dd(j)&&o(p.name)),cm(j)&&c(j),N.children){const ve=N.children;for(let b=0;b<ve.length;b++)i(ve[b],j,v&&v.children[b])}v=v||j}return K?()=>{o(K)}:ri}function o(p){if(om(p)){const g=r.get(p);g&&(r.delete(p),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(p);g>-1&&(n.splice(g,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function l(){return n}function c(p){const g=PE(p,n);n.splice(g,0,p),p.record.name&&!dd(p)&&r.set(p.record.name,p)}function h(p,g){let v,x={},N,D;if("name"in p&&p.name){if(v=r.get(p.name),!v)throw ds(1,{location:p});D=v.record.name,x=Ne(ud(g.params,v.keys.filter(K=>!K.optional).concat(v.parent?v.parent.keys.filter(K=>K.optional):[]).map(K=>K.name)),p.params&&ud(p.params,v.keys.map(K=>K.name))),N=v.stringify(x)}else if(p.path!=null)N=p.path,v=n.find(K=>K.re.test(N)),v&&(x=v.parse(N),D=v.record.name);else{if(v=g.name?r.get(g.name):n.find(K=>K.re.test(g.path)),!v)throw ds(1,{location:p,currentLocation:g});D=v.record.name,x=Ne({},g.params,p.params),N=v.stringify(x)}const q=[];let j=v;for(;j;)q.unshift(j.record),j=j.parent;return{name:D,path:N,params:x,matched:q,meta:SE(q)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:s}}function ud(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function hd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:RE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function RE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function dd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function SE(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function fd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function PE(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;lm(t,e[i])<0?r=i:n=i+1}const s=CE(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function CE(t){let e=t;for(;e=e.parent;)if(cm(e)&&lm(t,e)===0)return e}function cm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function xE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(em," "),o=i.indexOf("="),l=gi(o<0?i:i.slice(0,o)),c=o<0?null:gi(i.slice(o+1));if(l in e){let h=e[l];Qt(h)||(h=e[l]=[h]),h.push(c)}else e[l]=c}return e}function pd(t){let e="";for(let n in t){const r=t[n];if(n=Qw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qt(r)?r.map(i=>i&&jl(i)):[r&&jl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function kE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Qt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const NE=Symbol(""),md=Symbol(""),Lc=Symbol(""),um=Symbol(""),Hl=Symbol("");function zs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function qn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((l,c)=>{const h=g=>{g===!1?c(ds(4,{from:n,to:e})):g instanceof Error?c(g):gE(g)?c(ds(2,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),l())},d=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(d);t.length<3&&(p=p.then(h)),p.catch(g=>c(g))})}function _l(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const l in o.components){let c=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(Xp(c)){const d=(c.__vccOpts||c)[e];d&&i.push(qn(d,n,r,o,l,s))}else{let h=c();i.push(()=>h.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const p=Uw(d)?d.default:d;o.mods[l]=d,o.components[l]=p;const v=(p.__vccOpts||p)[e];return v&&qn(v,n,r,o,l,s)()}))}}return i}function gd(t){const e=En(Lc),n=En(um),r=zt(()=>{const c=Zr(t.to);return e.resolve(c)}),s=zt(()=>{const{matched:c}=r.value,{length:h}=c,d=c[h-1],p=n.matched;if(!d||!p.length)return-1;const g=p.findIndex(hs.bind(null,d));if(g>-1)return g;const v=_d(c[h-2]);return h>1&&_d(d)===v&&p[p.length-1].path!==v?p.findIndex(hs.bind(null,c[h-2])):g}),i=zt(()=>s.value>-1&&ME(n.params,r.value.params)),o=zt(()=>s.value>-1&&s.value===n.matched.length-1&&sm(n.params,r.value.params));function l(c={}){return OE(c)?e[Zr(t.replace)?"replace":"push"](Zr(t.to)).catch(ri):Promise.resolve()}return{route:r,href:zt(()=>r.value.href),isActive:i,isExactActive:o,navigate:l}}const VE=Tp({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:gd,setup(t,{slots:e}){const n=ha(gd(t)),{options:r}=En(Lc),s=zt(()=>({[yd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[yd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Qp("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),DE=VE;function OE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ME(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Qt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function _d(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yd=(t,e,n)=>t??e??n,LE=Tp({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=En(Hl),s=zt(()=>t.route||r.value),i=En(md,0),o=zt(()=>{let h=Zr(i);const{matched:d}=s.value;let p;for(;(p=d[h])&&!p.components;)h++;return h}),l=zt(()=>s.value.matched[o.value]);Eo(md,zt(()=>o.value+1)),Eo(NE,l),Eo(Hl,s);const c=Gy();return To(()=>[c.value,l.value,t.name],([h,d,p],[g,v,x])=>{d&&(d.instances[p]=h,v&&v!==d&&h&&h===g&&(d.leaveGuards.size||(d.leaveGuards=v.leaveGuards),d.updateGuards.size||(d.updateGuards=v.updateGuards))),h&&d&&(!v||!hs(d,v)||!g)&&(d.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,d=t.name,p=l.value,g=p&&p.components[d];if(!g)return vd(n.default,{Component:g,route:h});const v=p.props[d],x=v?v===!0?h.params:typeof v=="function"?v(h):v:null,D=Qp(g,Ne({},x,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[d]=null)},ref:c}));return vd(n.default,{Component:D,route:h})||D}}});function vd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const UE=LE;function FE(t){const e=AE(t.routes,t),n=t.parseQuery||xE,r=t.stringifyQuery||pd,s=t.history,i=zs(),o=zs(),l=zs(),c=Qy(Fn);let h=Fn;Hr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=ml.bind(null,O=>""+O),p=ml.bind(null,Jw),g=ml.bind(null,gi);function v(O,te){let X,se;return om(O)?(X=e.getRecordMatcher(O),se=te):se=O,e.addRoute(se,X)}function x(O){const te=e.getRecordMatcher(O);te&&e.removeRoute(te)}function N(){return e.getRoutes().map(O=>O.record)}function D(O){return!!e.getRecordMatcher(O)}function q(O,te){if(te=Ne({},te||c.value),typeof O=="string"){const w=gl(n,O,te.path),C=e.resolve({path:w.path},te),L=s.createHref(w.fullPath);return Ne(w,C,{params:g(C.params),hash:gi(w.hash),redirectedFrom:void 0,href:L})}let X;if(O.path!=null)X=Ne({},O,{path:gl(n,O.path,te.path).path});else{const w=Ne({},O.params);for(const C in w)w[C]==null&&delete w[C];X=Ne({},O,{params:p(w)}),te.params=p(te.params)}const se=e.resolve(X,te),be=O.hash||"";se.params=d(g(se.params));const De=eE(r,Ne({},O,{hash:Gw(be),path:se.path})),_=s.createHref(De);return Ne({fullPath:De,hash:be,query:r===pd?kE(O.query):O.query||{}},se,{redirectedFrom:void 0,href:_})}function j(O){return typeof O=="string"?gl(n,O,c.value.path):Ne({},O)}function K(O,te){if(h!==O)return ds(8,{from:te,to:O})}function Q(O){return b(O)}function ye(O){return Q(Ne(j(O),{replace:!0}))}function ve(O){const te=O.matched[O.matched.length-1];if(te&&te.redirect){const{redirect:X}=te;let se=typeof X=="function"?X(O):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=j(se):{path:se},se.params={}),Ne({query:O.query,hash:O.hash,params:se.path!=null?{}:O.params},se)}}function b(O,te){const X=h=q(O),se=c.value,be=O.state,De=O.force,_=O.replace===!0,w=ve(X);if(w)return b(Ne(j(w),{state:typeof w=="object"?Ne({},be,w.state):be,force:De,replace:_}),te||X);const C=X;C.redirectedFrom=te;let L;return!De&&tE(r,se,X)&&(L=ds(16,{to:C,from:se}),Ft(se,se,!0,!1)),(L?Promise.resolve(L):A(C,se)).catch(V=>pn(V)?pn(V,2)?V:qt(V):we(V,C,se)).then(V=>{if(V){if(pn(V,2))return b(Ne({replace:_},j(V.to),{state:typeof V.to=="object"?Ne({},be,V.to.state):be,force:De}),te||C)}else V=S(C,se,!0,_,be);return R(C,se,V),V})}function y(O,te){const X=K(O,te);return X?Promise.reject(X):Promise.resolve()}function T(O){const te=Vn.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(O):O()}function A(O,te){let X;const[se,be,De]=$E(O,te);X=_l(se.reverse(),"beforeRouteLeave",O,te);for(const w of se)w.leaveGuards.forEach(C=>{X.push(qn(C,O,te))});const _=y.bind(null,O,te);return X.push(_),xt(X).then(()=>{X=[];for(const w of i.list())X.push(qn(w,O,te));return X.push(_),xt(X)}).then(()=>{X=_l(be,"beforeRouteUpdate",O,te);for(const w of be)w.updateGuards.forEach(C=>{X.push(qn(C,O,te))});return X.push(_),xt(X)}).then(()=>{X=[];for(const w of De)if(w.beforeEnter)if(Qt(w.beforeEnter))for(const C of w.beforeEnter)X.push(qn(C,O,te));else X.push(qn(w.beforeEnter,O,te));return X.push(_),xt(X)}).then(()=>(O.matched.forEach(w=>w.enterCallbacks={}),X=_l(De,"beforeRouteEnter",O,te,T),X.push(_),xt(X))).then(()=>{X=[];for(const w of o.list())X.push(qn(w,O,te));return X.push(_),xt(X)}).catch(w=>pn(w,8)?w:Promise.reject(w))}function R(O,te,X){l.list().forEach(se=>T(()=>se(O,te,X)))}function S(O,te,X,se,be){const De=K(O,te);if(De)return De;const _=te===Fn,w=Hr?history.state:{};X&&(se||_?s.replace(O.fullPath,Ne({scroll:_&&w&&w.scroll},be)):s.push(O.fullPath,be)),c.value=O,Ft(O,te,X,_),qt()}let E;function At(){E||(E=s.listen((O,te,X)=>{if(!Xt.listening)return;const se=q(O),be=ve(se);if(be){b(Ne(be,{replace:!0}),se).catch(ri);return}h=se;const De=c.value;Hr&&cE(id(De.fullPath,X.delta),ya()),A(se,De).catch(_=>pn(_,12)?_:pn(_,2)?(b(_.to,se).then(w=>{pn(w,20)&&!X.delta&&X.type===_i.pop&&s.go(-1,!1)}).catch(ri),Promise.reject()):(X.delta&&s.go(-X.delta,!1),we(_,se,De))).then(_=>{_=_||S(se,De,!1),_&&(X.delta&&!pn(_,8)?s.go(-X.delta,!1):X.type===_i.pop&&pn(_,20)&&s.go(-1,!1)),R(se,De,_)}).catch(ri)}))}let Ut=zs(),Ye=zs(),Ie;function we(O,te,X){qt(O);const se=Ye.list();return se.length?se.forEach(be=>be(O,te,X)):console.error(O),Promise.reject(O)}function Nt(){return Ie&&c.value!==Fn?Promise.resolve():new Promise((O,te)=>{Ut.add([O,te])})}function qt(O){return Ie||(Ie=!O,At(),Ut.list().forEach(([te,X])=>O?X(O):te()),Ut.reset()),O}function Ft(O,te,X,se){const{scrollBehavior:be}=t;if(!Hr||!be)return Promise.resolve();const De=!X&&uE(id(O.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return gp().then(()=>be(O,te,De)).then(_=>_&&lE(_)).catch(_=>we(_,O,te))}const He=O=>s.go(O);let ze;const Vn=new Set,Xt={currentRoute:c,listening:!0,addRoute:v,removeRoute:x,clearRoutes:e.clearRoutes,hasRoute:D,getRoutes:N,resolve:q,options:t,push:Q,replace:ye,go:He,back:()=>He(-1),forward:()=>He(1),beforeEach:i.add,beforeResolve:o.add,afterEach:l.add,onError:Ye.add,isReady:Nt,install(O){const te=this;O.component("RouterLink",DE),O.component("RouterView",UE),O.config.globalProperties.$router=te,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Zr(c)}),Hr&&!ze&&c.value===Fn&&(ze=!0,Q(s.location).catch(be=>{}));const X={};for(const be in Fn)Object.defineProperty(X,be,{get:()=>c.value[be],enumerable:!0});O.provide(Lc,te),O.provide(um,hp(X)),O.provide(Hl,c);const se=O.unmount;Vn.add(O),O.unmount=function(){Vn.delete(O),Vn.size<1&&(h=Fn,E&&E(),E=null,c.value=Fn,ze=!1,Ie=!1),se()}}};function xt(O){return O.reduce((te,X)=>te.then(()=>T(X)),Promise.resolve())}return Xt}function $E(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const l=e.matched[o];l&&(t.matched.find(h=>hs(h,l))?r.push(l):n.push(l));const c=t.matched[o];c&&(e.matched.find(h=>hs(h,c))||s.push(c))}return[n,r,s]}const Be=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},BE={name:"BaseHeading1"},jE={class:"text-4xl mb-5 text-purple-primary font-bold leading-none tracking-tigh"};function qE(t,e,n,r,s,i){return J(),ee("h1",jE,[Pn(t.$slots,"default")])}const Cn=Be(BE,[["render",qE]]),HE={name:"ButtonPrimary",props:{type:{type:String,default:"button"}}},zE=["type"];function WE(t,e,n,r,s,i){return J(),ee("button",{type:n.type,class:"px-8 py-2 tracking-wide text-lg text-white duration-150 bg-purple-primary rounded-full hover:bg-purple-secondary active:bg-purple-dark"},[Pn(t.$slots,"default")],8,zE)}const Is=Be(HE,[["render",WE]]),KE={name:"ButtonSecondary",props:{type:{type:String,default:"button"}}},GE=["type"];function QE(t,e,n,r,s,i){return J(),ee("button",{type:n.type,class:"px-8 py-2 tracking-wide text-lg text-purple-primary duration-150 bg-white rounded-full hover:text-purple-dark hover:bg-purple-light/75 active:bg-purple-secondary active:text-white border border-purple-primary"},[Pn(t.$slots,"default")],8,GE)}const hm=Be(KE,[["render",QE]]),YE={name:"BaseHeading2"},JE={class:"text-2xl mb-4 font-bold leading-none tracking-tigh"};function XE(t,e,n,r,s,i){return J(),ee("h2",JE,[Pn(t.$slots,"default")])}const dm=Be(YE,[["render",XE]]),ZE={name:"BaseFaq",components:{BaseHeading2:dm},data(){return{selectedFaq:null,faqs:[{q:"¿Qué es Petit?",a:"Petit es una red social dedicada a los amantes de las mascotas en Argentina. Aquí puedes crear perfiles tanto para ti como para tu mascota, personalizarlos, compartir fotos y experiencias, y conectar con otros amantes de los animales."},{q:"¿Cómo creo un perfil en Petit?",a:"Para crear un perfil, necesitas ir a registro, completarlo solo con tu correo eléctronico y una nueva contraseña, y luego podrás añadir los datos de tu mascota. Es muy fácil y rápido."},{q:"¿Puedo personalizar el perfil de mi mascota?",a:"¡Sí! Puedes personalizar el perfil de tu mascota con fotos, una breve descripción y detalles como su especie, edad y gustos. Cuanto más personalices, más fácil será para otros usuarios conectar con ustedes."},{q:"¿Cómo puedo interactuar con otros usuarios?",a:"Puedes interactuar con otros amantes de las mascotas comentando en sus publicaciones, enviando mensajes directos (en proceso de construcción), y compartiendo tus propias experiencias. La comunidad es muy activa y amigable."},{q:"¿Es gratis usar Petit?",a:"Sí, la aplicación es completamente gratuita. Sin embargo, puede haber algunas funciones premium que ofrezcan contenido adicional o beneficios exclusivos, aún están en desarrollo."},{q:"¿Dónde puedo obtener ayuda si tengo problemas con la app?",a:"Si tienes algún problema, puedes contactarnos a través de la sección de soporte dentro de la app, o enviarnos un correo a nuestro equipo de atención al cliente."}]}},methods:{toggleFaq(t){this.selectedFaq=this.selectedFaq===t?null:t}}},e0={class:"leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8"},t0={class:"space-y-3 text-center"},n0={class:"text-gray-dark max-w-lg mx-auto text-lg"},r0={class:"mt-14 max-w-2xl mx-auto"},s0=["onClick"],i0={class:"cursor-pointer pb-5 flex items-center justify-between text-lg font-medium"},o0={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-orange-primary ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},a0={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-purple-primary ml-2",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},l0={class:"text-gray-dark pb-4"};function c0(t,e,n,r,s,i){const o=me("BaseHeading2"),l=me("router-link");return J(),ee("section",e0,[I("div",t0,[$(o,null,{default:re(()=>e[0]||(e[0]=[H("Preguntas "),I("span",{class:"text-orange-dark"},"más",-1),H(" frecuentes")])),_:1}),I("p",n0,[e[2]||(e[2]=H(" ¿Tienes una duda en específico? Puedes ")),$(l,{to:"/nosotros#SeccionEquipo",class:"hover:underline"},{default:re(()=>e[1]||(e[1]=[H("contactarnos")])),_:1}),e[3]||(e[3]=H(". "))])]),I("div",r0,[(J(!0),ee(Qe,null,Ts(s.faqs,(c,h)=>(J(),ee("div",{key:h,class:"space-y-3 mt-5 overflow-hidden border-b",onClick:d=>i.toggleFaq(h)},[I("h3",i0,[H(je(c.q)+" ",1),s.selectedFaq===h?(J(),ee("svg",o0,e[4]||(e[4]=[I("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M20 12H4"},null,-1)]))):(J(),ee("svg",a0,e[5]||(e[5]=[I("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 4v16m8-8H4"},null,-1)])))]),Ep(I("div",{class:"transition-[max-height,opacity] overflow-hidden duration-500 ease-in-out",style:la({maxHeight:s.selectedFaq===h?"1000px":"0px"})},[I("div",null,[I("p",l0,je(c.a),1)])],4),[[mw,s.selectedFaq===h]])],8,s0))),128))])])}const fm=Be(ZE,[["render",c0]]),u0="/petit/img/home/perro-home.png",h0={name:"Home",components:{BaseHeading1:Cn,ButtonPrimary:Is,ButtonSecondary:hm,BaseFaq:fm}},d0={class:"max-w-screen-xl mx-auto px-4 py-28 gap-12 overflow-hidden md:px-8 md:flex"},f0={class:"flex-none space-y-5 max-w-xl"},p0={class:"flex flex-wrap items-center gap-3 sm:text-sm"};function m0(t,e,n,r,s,i){const o=me("router-link"),l=me("BaseFaq");return J(),ee(Qe,null,[I("section",d0,[I("article",f0,[e[2]||(e[2]=$o('<h1 class="text-4xl font-extrabold sm:text-5xl capitalize text-pretty"> La red social <span class="text-purple-primary">para vos</span> y <span class="text-orange-dark">tu mascota</span></h1><p class="text-gray-dark"> Una de las redes sociales para mascotas <strong>número uno en Argentina</strong>, crea el perfil tuyo junto al de tu mascota, personaliza, postea sobre tu compañero e interactúa junto a otros amantes de las mascotas. </p><p class="text-gray-dark"> Si aún no tienes cuenta, puedes registrarte o si ya tienes una, <strong>¡ingresa a la red!</strong></p>',3)),I("div",p0,[$(o,{to:"/registro",class:"flex items-center justify-center gap-x-1 px-8 py-2 tracking-wide text-lg text-white duration-150 bg-purple-primary rounded-full hover:bg-purple-secondary active:bg-purple-dark"},{default:re(()=>e[0]||(e[0]=[H(" Registrarse "),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[I("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"})],-1)])),_:1}),$(o,{to:"/iniciar-sesion",class:"flex items-center justify-center gap-x-1 px-8 py-2 tracking-wide text-lg text-purple-primary duration-150 bg-white rounded-full hover:text-purple-dark hover:bg-purple-light/75 active:bg-purple-secondary active:text-white border border-purple-primary"},{default:re(()=>e[1]||(e[1]=[H(" Iniciar sesión "),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[I("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"})],-1)])),_:1})])]),e[3]||(e[3]=I("aside",{class:"flex-1 hidden md:block"},[I("img",{src:u0,class:"max-w-xl",alt:"Imagen de perro sacando la lengua, ilustración"})],-1))]),$(l,{class:"mb-5"})],64)}const g0=Be(h0,[["render",m0]]),_0={name:"SectionTeam",data(){return{team:[{avatar:"/petit/img/about/foto-perfil-mari.jpg",name:"Marisol Rossow",title:"Técnica en Programación Web",desc:"21 años, Argentina.",linkedin:"https://www.linkedin.com/in/rossow-marisol/",github:"https://github.com/marisolrossow1"},{avatar:"/petit/img/about/foto-perfil-mel.png",name:"Melina Ailen Ortiz",title:"Profesional en Gestión de Medios Digitales",desc:"22 años, Argentina.",linkedin:"https://www.linkedin.com/in/melina-ailen-ortiz/",github:"https://github.com/melinel1"},{avatar:"/petit/img/about/foto-perfil-sofi.jpg",name:"Sofía Lorenzo",title:"Profesional en Gestión de Medios Digitales",desc:"20 años, Argentina",linkedin:"https://www.linkedin.com/in/sofia-lorenzo-721345265/",github:"https://github.com/sofiialorenzo"}]}}},y0={class:"py-14"},v0={class:"max-w-screen-xl mx-auto px-4 md:px-8"},w0={class:"mt-12"},E0={class:"grid gap-8 sm:grid-cols-2 md:grid-cols-3"},T0={class:"w-full h-60 sm:h-52 md:h-56"},I0=["src"],b0={class:"mt-4"},A0={class:"text-lg text-gray-700 font-semibold"},R0={class:"text-purple-dark"},S0={class:"mt-3 flex gap-4 text-gray-400"},P0=["href"],C0=["href"];function x0(t,e,n,r,s,i){return J(),ee("section",y0,[I("div",v0,[e[2]||(e[2]=I("div",{class:"max-w-xl"},[I("h2",{class:"text-gray-800 text-3xl font-semibold sm:text-4xl"},[H(" Conoce a nuestro equipo de "),I("span",{class:"text-indigo-800"},"técnicas"),H(" y "),I("span",{class:"text-orange-dark"},"profesionales"),H(". ")])],-1)),I("div",w0,[I("ul",E0,[(J(!0),ee(Qe,null,Ts(s.team,(o,l)=>(J(),ee("li",{key:l},[I("div",T0,[I("img",{src:o.avatar,class:"w-full h-full object-cover object-center shadow-md rounded-xl",alt:""},null,8,I0)]),I("div",b0,[I("h3",A0,je(o.name),1),I("p",R0,je(o.title),1),I("div",S0,[I("a",{target:"_blank",href:o.linkedin,class:"hover:text-gray-500","aria-label":"red social linkedin"},e[0]||(e[0]=[$o('<svg class="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48" aria-hidden="true"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"></path></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z"></path></clipPath></defs></svg>',1)]),8,P0),I("a",{target:"_blank",href:o.github,class:"hover:text-gray-500","aria-label":"red social github"},e[1]||(e[1]=[$o('<svg class="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48" aria-hidden="true"><g fill="currentColor" clip-path="url(#clip0_910_44)"><path fill-rule="evenodd" d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z" clip-rule="evenodd"></path><path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z"></path></g><defs><clipPath id="clip0_910_44"><path fill="currentColor" d="M0 0h48v48H0z"></path></clipPath></defs></svg>',1)]),8,C0)])])]))),128))])])])])}const k0=Be(_0,[["render",x0]]),N0="/petit/img/about/perro-contacto.png",V0={name:"About",components:{BaseHeading1:Cn,ButtonPrimary:Is,ButtonSecondary:hm,BaseFaq:fm,SectionTeam:k0},methods:{scrollToFaq(){document.getElementById("SeccionFaq").scrollIntoView({behavior:"smooth"})},scrollToTeam(){document.getElementById("SeccionEquipo").scrollIntoView({behavior:"smooth"})}}},D0={class:"max-w-screen-xl mx-auto px-4 py-28 gap-12 overflow-hidden md:px-8 md:flex"},O0={class:"flex-none space-y-5 max-w-xl"},M0={class:"flex flex-wrap items-center gap-3 sm:text-sm"};function L0(t,e,n,r,s,i){const o=me("SectionTeam"),l=me("BaseFaq");return J(),ee(Qe,null,[I("section",D0,[I("article",O0,[e[4]||(e[4]=$o('<h1 class="text-4xl font-extrabold sm:text-5xl capitalize text-pretty"> Sobre <span class="text-purple-primary">nosotros</span> y <span class="text-orange-dark">Soporte</span></h1><p class="text-gray-dark"> Mantener una <strong>continua comunicación con nuestros usuarios</strong> es de suma importancia, por lo que siéntete libre con contactar con nuestro equipo. </p><p class="text-gray-dark"> Ante cualquier sugerencia, duda o problema, <strong>¡contáctanos y te brindaremos ayuda!</strong></p>',3)),I("div",M0,[I("button",{onClick:e[0]||(e[0]=(...c)=>i.scrollToTeam&&i.scrollToTeam(...c)),class:"flex items-center justify-center gap-x-1 px-8 py-2 tracking-wide text-lg text-white duration-150 bg-purple-primary rounded-full hover:bg-purple-secondary active:bg-purple-dark"},e[2]||(e[2]=[H(" Equipo "),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[I("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"})],-1)])),I("button",{onClick:e[1]||(e[1]=(...c)=>i.scrollToFaq&&i.scrollToFaq(...c)),class:"flex items-center justify-center gap-x-1 px-8 py-2 tracking-wide text-lg text-purple-primary duration-150 bg-white rounded-full hover:text-purple-dark hover:bg-purple-light/75 active:bg-purple-secondary active:text-white border border-purple-primary"},e[3]||(e[3]=[H(" Preguntas frecuentes "),I("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",class:"w-5 h-5"},[I("path",{fillRule:"evenodd",d:"M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z",clipRule:"evenodd"})],-1)]))])]),e[5]||(e[5]=I("aside",{class:"flex-1 hidden md:block"},[I("img",{src:N0,class:"max-w-xl",alt:"Imagen de perro ilustración mirando a la izquierda."})],-1))]),$(o,{id:"SeccionEquipo"}),$(l,{class:"mb-5",id:"SeccionFaq"})],64)}const U0=Be(V0,[["render",L0]]),F0={name:"CustomRouterLink",props:{to:{type:String,required:!0}}};function $0(t,e,n,r,s,i){const o=me("router-link");return J(),cs(o,{to:n.to,class:"px-8 py-2 tracking-wide text-lg text-purple-primary duration-150 bg-white rounded-full hover:text-purple-dark hover:bg-purple-light/75 active:bg-purple-secondary active:text-white border border-purple-primary"},{default:re(()=>[Pn(t.$slots,"default")]),_:3},8,["to"])}const Uc=Be(F0,[["render",$0]]),B0={name:"CustomRouterLinkSecondary",props:{to:{type:String,required:!0}}};function j0(t,e,n,r,s,i){const o=me("router-link");return J(),cs(o,{to:n.to,class:"tracking-wide text-md text-indigo-800 rounded-full"},{default:re(()=>[Pn(t.$slots,"default")]),_:3},8,["to"])}const va=Be(B0,[["render",j0]]),q0={name:"CardPost",components:{CustomRouterLink:Uc},props:{post:{type:Object,required:!0},getDateAndTime:{type:Function,required:!0}}},H0={class:"max-w-xs w-full bg-purple-light rounded-3xl shadow mb-6 flex flex-col"},z0=["src","alt"],W0={key:1,src:"https://placehold.co/400",alt:"No hay una imagen disponible",class:"rounded-t-3xl"},K0={class:"p-5 flex-1"},G0={class:"flex flex-wrap items-center gap-2"},Q0={class:"font-bold tracking-wider"},Y0={key:0,class:"flex items-center font-medium gap-1"},J0={class:"mb-3 mt-1 text-base font-normal tracking-wide"},X0={class:"mt-3 text-sm font-light"};function Z0(t,e,n,r,s,i){return J(),ee("article",H0,[n.post.picture!==""?(J(),ee("img",{key:0,src:n.post.picture,alt:n.post.content,class:"rounded-t-3xl"},null,8,z0)):(J(),ee("img",W0)),I("div",K0,[I("div",null,[I("div",G0,[I("span",Q0,je(n.post.email),1),n.post.petName?(J(),ee("span",Y0,[e[0]||(e[0]=I("i",{class:"fa-solid fa-paw",title:"Icon Mascota"},null,-1)),H(" "+je(n.post.petName),1)])):Me("",!0)]),I("p",J0,je(n.post.content),1)]),Pn(t.$slots,"action"),I("p",X0,je(n.getDateAndTime(n.post.created_at)),1)])])}const Fc=Be(q0,[["render",Z0]]);var wd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},mm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,c=s+2<t.length,h=c?t[s+2]:0,d=i>>2,p=(i&3)<<4|l>>4;let g=(l&15)<<2|h>>6,v=h&63;c||(v=64,o||(g=64)),r.push(n[d],n[p],n[g],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||h==null||p==null)throw new tT;const g=i<<2|l>>4;if(r.push(g),h!==64){const v=l<<4&240|h>>2;if(r.push(v),p!==64){const x=h<<6&192|p;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nT=function(t){const e=pm(t);return mm.encodeByteArray(e,!0)},qo=function(t){return nT(t).replace(/\./g,"")},gm=function(t){try{return mm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=()=>rT().__FIREBASE_DEFAULTS__,iT=()=>{if(typeof process>"u"||typeof wd>"u")return;const t=wd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&gm(t[1]);return e&&JSON.parse(e)},wa=()=>{try{return sT()||iT()||oT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},_m=t=>{var e,n;return(n=(e=wa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aT=t=>{const e=_m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},ym=()=>{var t;return(t=wa())===null||t===void 0?void 0:t.config},vm=t=>{var e;return(e=wa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[qo(JSON.stringify(n)),qo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bt())}function hT(){var t;const e=(t=wa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function fT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function pT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mT(){const t=bt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gT(){return!hT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function _T(){try{return typeof indexedDB=="object"}catch{return!1}}function yT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT="FirebaseError";class xn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vT,Object.setPrototypeOf(this,xn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ki.prototype.create)}}class ki{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?wT(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new xn(s,l,r)}}function wT(t,e){return t.replace(ET,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ET=/\{\$([^}]+)}/g;function TT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ho(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ed(i)&&Ed(o)){if(!Ho(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ed(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Qs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function IT(t,e){const n=new bT(t,e);return n.subscribe.bind(n)}class bT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");AT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=yl),s.error===void 0&&(s.error=yl),s.complete===void 0&&(s.complete=yl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(PT(e))try{this.getOrInitializeService({instanceIdentifier:_r})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=_r){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_r){return this.instances.has(e)}getOptions(e=_r){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ST(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=_r){return this.component?this.component.multipleInstances?e:_r:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ST(t){return t===_r?void 0:t}function PT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new RT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const xT={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},kT=Te.INFO,NT={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},VT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=NT[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $c{constructor(e){this.name=e,this._logLevel=kT,this._logHandler=VT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?xT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const DT=(t,e)=>e.some(n=>t instanceof n);let Td,Id;function OT(){return Td||(Td=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function MT(){return Id||(Id=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wm=new WeakMap,zl=new WeakMap,Em=new WeakMap,vl=new WeakMap,Bc=new WeakMap;function LT(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Qn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&wm.set(n,t)}).catch(()=>{}),Bc.set(e,t),e}function UT(t){if(zl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});zl.set(t,e)}let Wl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Em.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function FT(t){Wl=t(Wl)}function $T(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(wl(this),e,...n);return Em.set(r,e.sort?e.sort():[e]),Qn(r)}:MT().includes(t)?function(...e){return t.apply(wl(this),e),Qn(wm.get(this))}:function(...e){return Qn(t.apply(wl(this),e))}}function BT(t){return typeof t=="function"?$T(t):(t instanceof IDBTransaction&&UT(t),DT(t,OT())?new Proxy(t,Wl):t)}function Qn(t){if(t instanceof IDBRequest)return LT(t);if(vl.has(t))return vl.get(t);const e=BT(t);return e!==t&&(vl.set(t,e),Bc.set(e,t)),e}const wl=t=>Bc.get(t);function jT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=Qn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Qn(o.result),c.oldVersion,c.newVersion,Qn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const qT=["get","getKey","getAll","getAllKeys","count"],HT=["put","add","delete","clear"],El=new Map;function bd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(El.get(e))return El.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=HT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qT.includes(n)))return;const i=async function(o,...l){const c=this.transaction(o,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),s&&c.done]))[0]};return El.set(e,i),i}FT(t=>({...t,get:(e,n,r)=>bd(e,n)||t.get(e,n,r),has:(e,n)=>!!bd(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Kl="@firebase/app",Ad="0.10.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new $c("@firebase/app"),KT="@firebase/app-compat",GT="@firebase/analytics-compat",QT="@firebase/analytics",YT="@firebase/app-check-compat",JT="@firebase/app-check",XT="@firebase/auth",ZT="@firebase/auth-compat",eI="@firebase/database",tI="@firebase/data-connect",nI="@firebase/database-compat",rI="@firebase/functions",sI="@firebase/functions-compat",iI="@firebase/installations",oI="@firebase/installations-compat",aI="@firebase/messaging",lI="@firebase/messaging-compat",cI="@firebase/performance",uI="@firebase/performance-compat",hI="@firebase/remote-config",dI="@firebase/remote-config-compat",fI="@firebase/storage",pI="@firebase/storage-compat",mI="@firebase/firestore",gI="@firebase/vertexai-preview",_I="@firebase/firestore-compat",yI="firebase",vI="10.14.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gl="[DEFAULT]",wI={[Kl]:"fire-core",[KT]:"fire-core-compat",[QT]:"fire-analytics",[GT]:"fire-analytics-compat",[JT]:"fire-app-check",[YT]:"fire-app-check-compat",[XT]:"fire-auth",[ZT]:"fire-auth-compat",[eI]:"fire-rtdb",[tI]:"fire-data-connect",[nI]:"fire-rtdb-compat",[rI]:"fire-fn",[sI]:"fire-fn-compat",[iI]:"fire-iid",[oI]:"fire-iid-compat",[aI]:"fire-fcm",[lI]:"fire-fcm-compat",[cI]:"fire-perf",[uI]:"fire-perf-compat",[hI]:"fire-rc",[dI]:"fire-rc-compat",[fI]:"fire-gcs",[pI]:"fire-gcs-compat",[mI]:"fire-fst",[_I]:"fire-fst-compat",[gI]:"fire-vertex","fire-js":"fire-js",[yI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo=new Map,EI=new Map,Ql=new Map;function Rd(t,e){try{t.container.addComponent(e)}catch(n){In.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fs(t){const e=t.name;if(Ql.has(e))return In.debug(`There were multiple attempts to register component ${e}.`),!1;Ql.set(e,t);for(const n of zo.values())Rd(n,t);for(const n of EI.values())Rd(n,t);return!0}function jc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function nn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new ki("app","Firebase",TI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=vI;function Tm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Yn.create("bad-app-name",{appName:String(s)});if(n||(n=ym()),!n)throw Yn.create("no-options");const i=zo.get(s);if(i){if(Ho(n,i.options)&&Ho(r,i.config))return i;throw Yn.create("duplicate-app",{appName:s})}const o=new CT(s);for(const c of Ql.values())o.addComponent(c);const l=new II(n,r,o);return zo.set(s,l),l}function Im(t=Gl){const e=zo.get(t);if(!e&&t===Gl&&ym())return Tm();if(!e)throw Yn.create("no-app",{appName:t});return e}function Jn(t,e,n){var r;let s=(r=wI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),In.warn(l.join(" "));return}fs(new Tr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI="firebase-heartbeat-database",AI=1,yi="firebase-heartbeat-store";let Tl=null;function bm(){return Tl||(Tl=jT(bI,AI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Yn.create("idb-open",{originalErrorMessage:t.message})})),Tl}async function RI(t){try{const n=(await bm()).transaction(yi),r=await n.objectStore(yi).get(Am(t));return await n.done,r}catch(e){if(e instanceof xn)In.warn(e.message);else{const n=Yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});In.warn(n.message)}}}async function Sd(t,e){try{const r=(await bm()).transaction(yi,"readwrite");await r.objectStore(yi).put(e,Am(t)),await r.done}catch(n){if(n instanceof xn)In.warn(n.message);else{const r=Yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});In.warn(r.message)}}}function Am(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=1024,PI=30*24*60*60*1e3;class CI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new kI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Pd();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=PI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){In.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pd(),{heartbeatsToSend:r,unsentEntries:s}=xI(this._heartbeatsCache.heartbeats),i=qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return In.warn(n),""}}}function Pd(){return new Date().toISOString().substring(0,10)}function xI(t,e=SI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Cd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class kI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _T()?yT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Cd(t){return qo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NI(t){fs(new Tr("platform-logger",e=>new zT(e),"PRIVATE")),fs(new Tr("heartbeat",e=>new CI(e),"PRIVATE")),Jn(Kl,Ad,t),Jn(Kl,Ad,"esm2017"),Jn("fire-js","")}NI("");function qc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Rm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VI=Rm,Sm=new ki("auth","Firebase",Rm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new $c("@firebase/auth");function DI(t,...e){Wo.logLevel<=Te.WARN&&Wo.warn(`Auth (${bs}): ${t}`,...e)}function Ro(t,...e){Wo.logLevel<=Te.ERROR&&Wo.error(`Auth (${bs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,...e){throw Hc(t,...e)}function sn(t,...e){return Hc(t,...e)}function Pm(t,e,n){const r=Object.assign(Object.assign({},VI()),{[e]:n});return new ki("auth","Firebase",r).create(e,{appName:t.name})}function Tn(t){return Pm(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hc(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sm.create(t,...e)}function he(t,e,...n){if(!t)throw Hc(e,...n)}function _n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ro(e),new Error(e)}function bn(t,e){t||_n(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function OI(){return xd()==="http:"||xd()==="https:"}function xd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(OI()||fT()||"connection"in navigator)?navigator.onLine:!0}function LI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=uT()||pT()}get(){return MI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zc(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;_n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;_n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;_n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI=new Vi(3e4,6e4);function lr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function kn(t,e,n,r,s={}){return xm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ni(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:c},i);return dT()||(h.referrerPolicy="no-referrer"),Cm.fetch()(km(t,t.config.apiHost,n,l),h)})}async function xm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},UI),e);try{const s=new BI(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw mo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw mo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw mo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw mo(t,"user-disabled",o);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Pm(t,d,h);Yt(t,d)}}catch(s){if(s instanceof xn)throw s;Yt(t,"network-request-failed",{message:String(s)})}}async function Di(t,e,n,r,s={}){const i=await kn(t,e,n,r,s);return"mfaPendingCredential"in i&&Yt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function km(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?zc(t.config,s):`${t.config.apiScheme}://${s}`}function $I(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(sn(this.auth,"network-request-failed")),FI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function mo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=sn(t,e,r);return s.customData._tokenResponse=n,s}function kd(t){return t!==void 0&&t.enterprise!==void 0}class jI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return $I(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function qI(t,e){return kn(t,"GET","/v2/recaptchaConfig",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HI(t,e){return kn(t,"POST","/v1/accounts:delete",e)}async function Nm(t,e){return kn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function zI(t,e=!1){const n=et(t),r=await n.getIdToken(e),s=Wc(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ii(Il(s.auth_time)),issuedAtTime:ii(Il(s.iat)),expirationTime:ii(Il(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Il(t){return Number(t)*1e3}function Wc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ro("JWT malformed, contained fewer than 3 sections"),null;try{const s=gm(n);return s?JSON.parse(s):(Ro("Failed to decode base64 JWT payload"),null)}catch(s){return Ro("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nd(t){const e=Wc(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ps(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof xn&&WI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function WI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ii(this.lastLoginAt),this.creationTime=ii(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ps(t,Nm(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Vm(i.providerUserInfo):[],l=QI(t.providerData,o),c=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Jl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function GI(t){const e=et(t);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QI(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Vm(t){return t.map(e=>{var{providerId:n}=e,r=qc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YI(t,e){const n=await xm(t,{},async()=>{const r=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=km(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Cm.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JI(t,e){return kn(t,"POST","/v2/accounts:revokeToken",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=Nd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await YI(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rs;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return _n("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class yn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=qc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Jl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await ps(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return zI(this,e)}reload(){return GI(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new yn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nn(this.auth.app))return Promise.reject(Tn(this.auth));const e=await this.getIdToken();return await ps(this,HI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,c,h,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,v=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,q=(h=n.createdAt)!==null&&h!==void 0?h:void 0,j=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:K,emailVerified:Q,isAnonymous:ye,providerData:ve,stsTokenManager:b}=n;he(K&&b,e,"internal-error");const y=rs.fromJSON(this.name,b);he(typeof K=="string",e,"internal-error"),$n(p,e.name),$n(g,e.name),he(typeof Q=="boolean",e,"internal-error"),he(typeof ye=="boolean",e,"internal-error"),$n(v,e.name),$n(x,e.name),$n(N,e.name),$n(D,e.name),$n(q,e.name),$n(j,e.name);const T=new yn({uid:K,auth:e,email:g,emailVerified:Q,displayName:p,isAnonymous:ye,photoURL:x,phoneNumber:v,tenantId:N,stsTokenManager:y,createdAt:q,lastLoginAt:j});return ve&&Array.isArray(ve)&&(T.providerData=ve.map(A=>Object.assign({},A))),D&&(T._redirectEventId=D),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new rs;s.updateFromServerResponse(n);const i=new yn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ko(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Vm(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new rs;l.updateFromIdToken(r);const c=new yn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Jl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=new Map;function vn(t){bn(t instanceof Function,"Expected a class definition");let e=Vd.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Vd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Dm.type="NONE";const Dd=Dm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=So(this.userKey,s.apiKey,i),this.fullPersistenceKey=So("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?yn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(vn(Dd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||vn(Dd);const o=So(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const d=await h._get(o);if(d){const p=yn._fromJSON(e,d);h!==i&&(l=p),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ss(i,e,r):(i=c[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ss(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Um(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Om(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($m(e))return"Blackberry";if(Bm(e))return"Webos";if(Mm(e))return"Safari";if((e.includes("chrome/")||Lm(e))&&!e.includes("edge/"))return"Chrome";if(Fm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Om(t=bt()){return/firefox\//i.test(t)}function Mm(t=bt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Lm(t=bt()){return/crios\//i.test(t)}function Um(t=bt()){return/iemobile/i.test(t)}function Fm(t=bt()){return/android/i.test(t)}function $m(t=bt()){return/blackberry/i.test(t)}function Bm(t=bt()){return/webos/i.test(t)}function Kc(t=bt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XI(t=bt()){var e;return Kc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZI(){return mT()&&document.documentMode===10}function jm(t=bt()){return Kc(t)||Fm(t)||Bm(t)||$m(t)||/windows phone/i.test(t)||Um(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(t,e=[]){let n;switch(t){case"Browser":n=Od(bt());break;case"Worker":n=`${Od(bt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const c=e(i);o(c)}catch(c){l(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tb(t,e={}){return kn(t,"GET","/v2/passwordPolicy",lr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nb=6;class rb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:nb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Md(this),this.idTokenSubscription=new Md(this),this.beforeStateQueue=new eb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Nm(this,{idToken:e}),r=await yn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(nn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=LI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nn(this.app))return Promise.reject(Tn(this));const n=e?et(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nn(this.app)?Promise.reject(Tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nn(this.app)?Promise.reject(Tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await tb(this),n=new rb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ki("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function xr(t){return et(t)}class Md{constructor(e){this.auth=e,this.observer=null,this.addObserver=IT(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ea={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ib(t){Ea=t}function Hm(t){return Ea.loadJS(t)}function ob(){return Ea.recaptchaEnterpriseScript}function ab(){return Ea.gapiScript}function lb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cb="recaptcha-enterprise",ub="NO_RECAPTCHA";class hb{constructor(e){this.type=cb,this.auth=xr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{qI(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new jI(c);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function s(i,o,l){const c=window.grecaptcha;kd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(ub)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&kd(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ob();c.length!==0&&(c+=l),Hm(c).then(()=>{s(l,i,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Ld(t,e,n,r=!1){const s=new hb(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Xl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ld(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ld(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t,e){const n=jc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ho(i,e??{}))return s;Yt(s,"already-initialized")}return n.initialize({options:e})}function fb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pb(t,e,n){const r=xr(t);he(r._canInitEmulator,r,"emulator-config-failed"),he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=zm(e),{host:o,port:l}=mb(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),gb()}function zm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mb(t){const e=zm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ud(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ud(o)}}}function Ud(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _n("not implemented")}_getIdTokenResponse(e){return _n("not implemented")}_linkToIdToken(e,n){return _n("not implemented")}_getReauthenticationResolver(e){return _n("not implemented")}}async function _b(t,e){return kn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e){return Di(t,"POST","/v1/accounts:signInWithPassword",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(t,e){return Di(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}async function wb(t,e){return Di(t,"POST","/v1/accounts:signInWithEmailLink",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Gc{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new vi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new vi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xl(e,n,"signInWithPassword",yb);case"emailLink":return vb(e,{email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Xl(e,r,"signUpPassword",_b);case"emailLink":return wb(e,{idToken:n,email:this._email,oobCode:this._password});default:Yt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e){return Di(t,"POST","/v1/accounts:signInWithIdp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="http://localhost";class Ir extends Gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Yt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=qc(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Ir(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:Eb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ni(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ib(t){const e=Gs(Qs(t)).link,n=e?Gs(Qs(e)).deep_link_id:null,r=Gs(Qs(t)).deep_link_id;return(r?Gs(Qs(r)).link:null)||r||n||e||t}class Qc{constructor(e){var n,r,s,i,o,l;const c=Gs(Qs(e)),h=(n=c.apiKey)!==null&&n!==void 0?n:null,d=(r=c.oobCode)!==null&&r!==void 0?r:null,p=Tb((s=c.mode)!==null&&s!==void 0?s:null);he(h&&d&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=d,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Ib(e);try{return new Qc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.providerId=As.PROVIDER_ID}static credential(e,n){return vi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Qc.parseLink(n);return he(r,"argument-error"),vi._fromEmailAndCode(e,r.code,r.tenantId)}}As.PROVIDER_ID="password";As.EMAIL_PASSWORD_SIGN_IN_METHOD="password";As.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi extends Wm{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Oi{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Oi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return zn.credential(n,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends Oi{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.GITHUB_SIGN_IN_METHOD="github.com";Wn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Oi{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(t,e){return Di(t,"POST","/v1/accounts:signUp",lr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await yn._fromIdTokenResponse(e,r,s),o=Fd(r);return new br({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Fd(r);return new br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Fd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends xn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Go(e,n,r,s)}}function Km(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,i,e,r):i})}async function Ab(t,e,n=!1){const r=await ps(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(t,e,n=!1){const{auth:r}=t;if(nn(r.app))return Promise.reject(Tn(r));const s="reauthenticate";try{const i=await ps(t,Km(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=Wc(i.idToken);he(o,r,"internal-error");const{sub:l}=o;return he(t.uid===l,r,"user-mismatch"),br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Yt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gm(t,e,n=!1){if(nn(t.app))return Promise.reject(Tn(t));const r="signIn",s=await Km(t,r,e),i=await br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Sb(t,e){return Gm(xr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qm(t){const e=xr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Pb(t,e,n){if(nn(t.app))return Promise.reject(Tn(t));const r=xr(t),o=await Xl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",bb).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Qm(t),c}),l=await br._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Cb(t,e,n){return nn(t.app)?Promise.reject(Tn(t)):Sb(et(t),As.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Qm(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xb(t,e){return kn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kb(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=et(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ps(r,xb(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Nb(t,e,n,r){return et(t).onIdTokenChanged(e,n,r)}function Vb(t,e,n){return et(t).beforeAuthStateChanged(e,n)}function Db(t,e,n,r){return et(t).onAuthStateChanged(e,n,r)}function Ob(t){return et(t).signOut()}const Qo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qo,"1"),this.storage.removeItem(Qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=1e3,Lb=10;class Jm extends Ym{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ZI()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Lb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Mb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Jm.type="LOCAL";const Ub=Jm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm extends Ym{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Xm.type="SESSION";const Zm=Xm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async h=>h(n.origin,i)),c=await Fb(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,c)=>{const h=Yc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function on(){return window}function Bb(t){on().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(){return typeof on().WorkerGlobalScope<"u"&&typeof on().importScripts=="function"}async function jb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hb(){return eg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tg="firebaseLocalStorageDb",zb=1,Yo="firebaseLocalStorage",ng="fbase_key";class Mi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ia(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function Wb(){const t=indexedDB.deleteDatabase(tg);return new Mi(t).toPromise()}function Zl(){const t=indexedDB.open(tg,zb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yo,{keyPath:ng})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await Wb(),e(await Zl()))})})}async function $d(t,e,n){const r=Ia(t,!0).put({[ng]:e,value:n});return new Mi(r).toPromise()}async function Kb(t,e){const n=Ia(t,!1).get(e),r=await new Mi(n).toPromise();return r===void 0?null:r.value}function Bd(t,e){const n=Ia(t,!0).delete(e);return new Mi(n).toPromise()}const Gb=800,Qb=3;class rg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Zl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Qb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ta._getInstance(Hb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await jb(),!this.activeServiceWorker)return;this.sender=new $b(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Zl();return await $d(e,Qo,"1"),await Bd(e,Qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$d(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Kb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ia(s,!1).getAll();return new Mi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Gb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rg.type="LOCAL";const Yb=rg;new Vi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jb(t,e){return e?vn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc extends Gc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Xb(t){return Gm(t.auth,new Jc(t),t.bypassAuthState)}function Zb(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),Rb(n,new Jc(t),t.bypassAuthState)}async function eA(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),Ab(n,new Jc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xb;case"linkViaPopup":case"linkViaRedirect":return eA;case"reauthViaPopup":case"reauthViaRedirect":return Zb;default:Yt(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=new Vi(2e3,1e4);class Qr extends sg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Qr.currentPopupAction&&Qr.currentPopupAction.cancel(),Qr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=Yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Qr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tA.get())};e()}}Qr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nA="pendingRedirect",Po=new Map;class rA extends sg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Po.get(this.auth._key());if(!e){try{const r=await sA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Po.set(this.auth._key(),e)}return this.bypassAuthState||Po.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sA(t,e){const n=aA(e),r=oA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function iA(t,e){Po.set(t._key(),e)}function oA(t){return vn(t._redirectPersistence)}function aA(t){return So(nA,t.config.apiKey,t.name)}async function lA(t,e,n=!1){if(nn(t.app))return Promise.reject(Tn(t));const r=xr(t),s=Jb(r,e),o=await new rA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cA=10*60*1e3;class uA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ig(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cA&&this.cachedEventUids.clear(),this.cachedEventUids.has(jd(e))}saveEventToCache(e){this.cachedEventUids.add(jd(e)),this.lastProcessedEventTime=Date.now()}}function jd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ig({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ig(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dA(t,e={}){return kn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pA=/^https?/;async function mA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dA(t);for(const n of e)try{if(gA(n))return}catch{}Yt(t,"unauthorized-domain")}function gA(t){const e=Yl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pA.test(n))return!1;if(fA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A=new Vi(3e4,6e4);function qd(){const t=on().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yA(t){return new Promise((e,n)=>{var r,s,i;function o(){qd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qd(),n(sn(t,"network-request-failed"))},timeout:_A.get()})}if(!((s=(r=on().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=on().gapi)===null||i===void 0)&&i.load)o();else{const l=lb("iframefcb");return on()[l]=()=>{gapi.load?o():n(sn(t,"network-request-failed"))},Hm(`${ab()}?onload=${l}`).catch(c=>n(c))}}).catch(e=>{throw Co=null,e})}let Co=null;function vA(t){return Co=Co||yA(t),Co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=new Vi(5e3,15e3),EA="__/auth/iframe",TA="emulator/auth/iframe",IA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},bA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function AA(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?zc(e,TA):`https://${t.config.authDomain}/${EA}`,r={apiKey:e.apiKey,appName:t.name,v:bs},s=bA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ni(r).slice(1)}`}async function RA(t){const e=await vA(t),n=on().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:AA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:IA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=sn(t,"network-request-failed"),l=on().setTimeout(()=>{i(o)},wA.get());function c(){on().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PA=500,CA=600,xA="_blank",kA="http://localhost";class Hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NA(t,e,n,r=PA,s=CA){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},SA),{width:r.toString(),height:s.toString(),top:i,left:o}),h=bt().toLowerCase();n&&(l=Lm(h)?xA:n),Om(h)&&(e=e||kA,c.scrollbars="yes");const d=Object.entries(c).reduce((g,[v,x])=>`${g}${v}=${x},`,"");if(XI(h)&&l!=="_self")return VA(e||"",l),new Hd(null);const p=window.open(e||"",l,d);he(p,t,"popup-blocked");try{p.focus()}catch{}return new Hd(p)}function VA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA="__/auth/handler",OA="emulator/auth/handler",MA=encodeURIComponent("fac");async function zd(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:s};if(e instanceof Wm){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",TT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof Oi){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await t._getAppCheckToken(),h=c?`#${MA}=${encodeURIComponent(c)}`:"";return`${LA(t)}?${Ni(l).slice(1)}${h}`}function LA({config:t}){return t.emulator?zc(t,OA):`https://${t.authDomain}/${DA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="webStorageSupport";class UA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zm,this._completeRedirectFn=lA,this._overrideRedirectResult=iA}async _openPopup(e,n,r,s){var i;bn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zd(e,n,r,Yl(),s);return NA(e,o,Yc())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zd(e,n,r,Yl(),s);return Bb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(bn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await RA(e),r=new uA(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(bl,{type:bl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[bl];o!==void 0&&n(!!o),Yt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return jm()||Mm()||Kc()}}const FA=UA;var Wd="@firebase/auth",Kd="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function jA(t){fs(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qm(t)},h=new sb(r,s,i,c);return fb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fs(new Tr("auth-internal",e=>{const n=xr(e.getProvider("auth").getImmediate());return(r=>new $A(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(Wd,Kd,BA(t)),Jn(Wd,Kd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=5*60,HA=vm("authIdTokenMaxAge")||qA;let Gd=null;const zA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>HA)return;const s=n==null?void 0:n.token;Gd!==s&&(Gd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function WA(t=Im()){const e=jc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=db(t,{popupRedirectResolver:FA,persistence:[Yb,Ub,Zm]}),r=vm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=zA(i.toString());Vb(n,o,()=>o(n.currentUser)),Nb(n,l=>o(l))}}const s=_m("auth");return s&&pb(n,`http://${s}`),n}function KA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}ib({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",KA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});jA("Browser");var GA="firebase",QA="10.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn(GA,QA,"app");var Qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var wr,og;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function T(){}T.prototype=y.prototype,b.D=y.prototype,b.prototype=new T,b.prototype.constructor=b,b.C=function(A,R,S){for(var E=Array(arguments.length-2),At=2;At<arguments.length;At++)E[At-2]=arguments[At];return y.prototype[R].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(b,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(R=0;16>R;++R)A[R]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=b.g[0],T=b.g[1],R=b.g[2];var S=b.g[3],E=y+(S^T&(R^S))+A[0]+3614090360&4294967295;y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[1]+3905402710&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[2]+606105819&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[3]+3250441966&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[4]+4118548399&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[5]+1200080426&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[6]+2821735955&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[7]+4249261313&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[8]+1770035416&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[9]+2336552879&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[10]+4294925233&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[11]+2304563134&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(S^T&(R^S))+A[12]+1804603682&4294967295,y=T+(E<<7&4294967295|E>>>25),E=S+(R^y&(T^R))+A[13]+4254626195&4294967295,S=y+(E<<12&4294967295|E>>>20),E=R+(T^S&(y^T))+A[14]+2792965006&4294967295,R=S+(E<<17&4294967295|E>>>15),E=T+(y^R&(S^y))+A[15]+1236535329&4294967295,T=R+(E<<22&4294967295|E>>>10),E=y+(R^S&(T^R))+A[1]+4129170786&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[6]+3225465664&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[11]+643717713&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[0]+3921069994&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[5]+3593408605&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[10]+38016083&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[15]+3634488961&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[4]+3889429448&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[9]+568446438&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[14]+3275163606&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[3]+4107603335&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[8]+1163531501&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(R^S&(T^R))+A[13]+2850285829&4294967295,y=T+(E<<5&4294967295|E>>>27),E=S+(T^R&(y^T))+A[2]+4243563512&4294967295,S=y+(E<<9&4294967295|E>>>23),E=R+(y^T&(S^y))+A[7]+1735328473&4294967295,R=S+(E<<14&4294967295|E>>>18),E=T+(S^y&(R^S))+A[12]+2368359562&4294967295,T=R+(E<<20&4294967295|E>>>12),E=y+(T^R^S)+A[5]+4294588738&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[8]+2272392833&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[11]+1839030562&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[14]+4259657740&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[1]+2763975236&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[4]+1272893353&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[7]+4139469664&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[10]+3200236656&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[13]+681279174&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[0]+3936430074&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[3]+3572445317&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[6]+76029189&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(T^R^S)+A[9]+3654602809&4294967295,y=T+(E<<4&4294967295|E>>>28),E=S+(y^T^R)+A[12]+3873151461&4294967295,S=y+(E<<11&4294967295|E>>>21),E=R+(S^y^T)+A[15]+530742520&4294967295,R=S+(E<<16&4294967295|E>>>16),E=T+(R^S^y)+A[2]+3299628645&4294967295,T=R+(E<<23&4294967295|E>>>9),E=y+(R^(T|~S))+A[0]+4096336452&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[7]+1126891415&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[14]+2878612391&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[5]+4237533241&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[12]+1700485571&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[3]+2399980690&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[10]+4293915773&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[1]+2240044497&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[8]+1873313359&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[15]+4264355552&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[6]+2734768916&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[13]+1309151649&4294967295,T=R+(E<<21&4294967295|E>>>11),E=y+(R^(T|~S))+A[4]+4149444226&4294967295,y=T+(E<<6&4294967295|E>>>26),E=S+(T^(y|~R))+A[11]+3174756917&4294967295,S=y+(E<<10&4294967295|E>>>22),E=R+(y^(S|~T))+A[2]+718787259&4294967295,R=S+(E<<15&4294967295|E>>>17),E=T+(S^(R|~y))+A[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,b.g[2]=b.g[2]+R&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var T=y-this.blockSize,A=this.B,R=this.h,S=0;S<y;){if(R==0)for(;S<=T;)s(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<y;)if(A[R++]=b.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<y;)if(A[R++]=b[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var T=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=T&255,T/=256;for(this.u(b),b=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)b[T++]=this.g[y]>>>A&255;return b};function i(b,y){var T=l;return Object.prototype.hasOwnProperty.call(T,b)?T[b]:T[b]=y(b)}function o(b,y){this.h=y;for(var T=[],A=!0,R=b.length-1;0<=R;R--){var S=b[R]|0;A&&S==y||(T[R]=S,A=!1)}this.g=T}var l={};function c(b){return-128<=b&&128>b?i(b,function(y){return new o([y|0],0>y?-1:0)}):new o([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return p;if(0>b)return D(h(-b));for(var y=[],T=1,A=0;b>=T;A++)y[A]=b/T|0,T*=4294967296;return new o(y,0)}function d(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return D(d(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=h(Math.pow(y,8)),A=p,R=0;R<b.length;R+=8){var S=Math.min(8,b.length-R),E=parseInt(b.substring(R,R+S),y);8>S?(S=h(Math.pow(y,S)),A=A.j(S).add(h(E))):(A=A.j(T),A=A.add(h(E)))}return A}var p=c(0),g=c(1),v=c(16777216);t=o.prototype,t.m=function(){if(N(this))return-D(this).m();for(var b=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);b+=(0<=A?A:4294967296+A)*y,y*=4294967296}return b},t.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(x(this))return"0";if(N(this))return"-"+D(this).toString(b);for(var y=h(Math.pow(b,6)),T=this,A="";;){var R=Q(T,y).g;T=q(T,R.j(y));var S=((0<T.g.length?T.g[0]:T.h)>>>0).toString(b);if(T=R,x(T))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function x(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function N(b){return b.h==-1}t.l=function(b){return b=q(this,b),N(b)?-1:x(b)?0:1};function D(b){for(var y=b.g.length,T=[],A=0;A<y;A++)T[A]=~b.g[A];return new o(T,~b.h).add(g)}t.abs=function(){return N(this)?D(this):this},t.add=function(b){for(var y=Math.max(this.g.length,b.g.length),T=[],A=0,R=0;R<=y;R++){var S=A+(this.i(R)&65535)+(b.i(R)&65535),E=(S>>>16)+(this.i(R)>>>16)+(b.i(R)>>>16);A=E>>>16,S&=65535,E&=65535,T[R]=E<<16|S}return new o(T,T[T.length-1]&-2147483648?-1:0)};function q(b,y){return b.add(D(y))}t.j=function(b){if(x(this)||x(b))return p;if(N(this))return N(b)?D(this).j(D(b)):D(D(this).j(b));if(N(b))return D(this.j(D(b)));if(0>this.l(v)&&0>b.l(v))return h(this.m()*b.m());for(var y=this.g.length+b.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<b.g.length;R++){var S=this.i(A)>>>16,E=this.i(A)&65535,At=b.i(R)>>>16,Ut=b.i(R)&65535;T[2*A+2*R]+=E*Ut,j(T,2*A+2*R),T[2*A+2*R+1]+=S*Ut,j(T,2*A+2*R+1),T[2*A+2*R+1]+=E*At,j(T,2*A+2*R+1),T[2*A+2*R+2]+=S*At,j(T,2*A+2*R+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function j(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function K(b,y){this.g=b,this.h=y}function Q(b,y){if(x(y))throw Error("division by zero");if(x(b))return new K(p,p);if(N(b))return y=Q(D(b),y),new K(D(y.g),D(y.h));if(N(y))return y=Q(b,D(y)),new K(D(y.g),y.h);if(30<b.g.length){if(N(b)||N(y))throw Error("slowDivide_ only works with positive integers.");for(var T=g,A=y;0>=A.l(b);)T=ye(T),A=ye(A);var R=ve(T,1),S=ve(A,1);for(A=ve(A,2),T=ve(T,2);!x(A);){var E=S.add(A);0>=E.l(b)&&(R=R.add(T),S=E),A=ve(A,1),T=ve(T,1)}return y=q(b,R.j(y)),new K(R,y)}for(R=p;0<=b.l(y);){for(T=Math.max(1,Math.floor(b.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(T),E=S.j(y);N(E)||0<E.l(b);)T-=A,S=h(T),E=S.j(y);x(S)&&(S=g),R=R.add(S),b=q(b,E)}return new K(R,b)}t.A=function(b){return Q(this,b).h},t.and=function(b){for(var y=Math.max(this.g.length,b.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&b.i(A);return new o(T,this.h&b.h)},t.or=function(b){for(var y=Math.max(this.g.length,b.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|b.i(A);return new o(T,this.h|b.h)},t.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^b.i(A);return new o(T,this.h^b.h)};function ye(b){for(var y=b.g.length+1,T=[],A=0;A<y;A++)T[A]=b.i(A)<<1|b.i(A-1)>>>31;return new o(T,b.h)}function ve(b,y){var T=y>>5;y%=32;for(var A=b.g.length-T,R=[],S=0;S<A;S++)R[S]=0<y?b.i(S+T)>>>y|b.i(S+T+1)<<32-y:b.i(S+T);return new o(R,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,og=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=d,wr=o}).apply(typeof Qd<"u"?Qd:typeof self<"u"?self:typeof window<"u"?window:{});var go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ag,Ys,lg,xo,ec,cg,ug,hg;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,f){return a==Array.prototype||a==Object.prototype||(a[u]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof go=="object"&&go];for(var u=0;u<a.length;++u){var f=a[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in f))break e;f=f[P]}a=a[a.length-1],m=f[a],u=u(m),u!=m&&u!=null&&e(f,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var f=0,m=!1,P={next:function(){if(!m&&f<a.length){var k=f++;return{value:u(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function d(a,u,f){return a.call.apply(a.bind,arguments)}function p(a,u,f){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function g(a,u,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,g.apply(null,arguments)}function v(a,u){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function x(a,u){function f(){}f.prototype=u.prototype,a.aa=u.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(m,P,k){for(var G=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)G[Oe-2]=arguments[Oe];return u.prototype[P].apply(m,G)}}function N(a){const u=a.length;if(0<u){const f=Array(u);for(let m=0;m<u;m++)f[m]=a[m];return f}return[]}function D(a,u){for(let f=1;f<arguments.length;f++){const m=arguments[f];if(c(m)){const P=a.length||0,k=m.length||0;a.length=P+k;for(let G=0;G<k;G++)a[P+G]=m[G]}else a.push(m)}}class q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function j(a){return/^[\s\xa0]*$/.test(a)}function K(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function Q(a){return Q[" "](a),a}Q[" "]=function(){};var ye=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function ve(a,u,f){for(const m in a)u.call(f,a[m],m,a)}function b(a,u){for(const f in a)u.call(void 0,a[f],f,a)}function y(a){const u={};for(const f in a)u[f]=a[f];return u}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let f,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(f in m)a[f]=m[f];for(let k=0;k<T.length;k++)f=T[k],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function R(a){var u=1;a=a.split(":");const f=[];for(;0<u&&a.length;)f.push(a.shift()),u--;return a.length&&f.push(a.join(":")),f}function S(a){l.setTimeout(()=>{throw a},0)}function E(){var a=Nt;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class At{constructor(){this.h=this.g=null}add(u,f){const m=Ut.get();m.set(u,f),this.h?this.h.next=m:this.g=m,this.h=m}}var Ut=new q(()=>new Ye,a=>a.reset());class Ye{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,we=!1,Nt=new At,qt=()=>{const a=l.Promise.resolve(void 0);Ie=()=>{a.then(Ft)}};var Ft=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(f){S(f)}var u=Ut;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}we=!1};function He(){this.s=this.s,this.C=this.C}He.prototype.s=!1,He.prototype.ma=function(){this.s||(this.s=!0,this.N())},He.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var Vn=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return a}();function Xt(a,u){if(ze.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(ye){e:{try{Q(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else f=="mouseover"?u=a.fromElement:f=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:xt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Xt.aa.h.call(this)}}x(Xt,ze);var xt={2:"touch",3:"pen",4:"mouse"};Xt.prototype.h=function(){Xt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var O="closure_listenable_"+(1e6*Math.random()|0),te=0;function X(a,u,f,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=f,this.capture=!!m,this.ha=P,this.key=++te,this.da=this.fa=!1}function se(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function be(a){this.src=a,this.g={},this.h=0}be.prototype.add=function(a,u,f,m,P){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var G=_(a,u,m,P);return-1<G?(u=a[G],f||(u.fa=!1)):(u=new X(u,this.src,k,!!m,P),u.fa=f,a.push(u)),u};function De(a,u){var f=u.type;if(f in a.g){var m=a.g[f],P=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(m,P,1),k&&(se(u),a.g[f].length==0&&(delete a.g[f],a.h--))}}function _(a,u,f,m){for(var P=0;P<a.length;++P){var k=a[P];if(!k.da&&k.listener==u&&k.capture==!!f&&k.ha==m)return P}return-1}var w="closure_lm_"+(1e6*Math.random()|0),C={};function L(a,u,f,m,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)L(a,u[k],f,m,P);return null}return f=ae(f),a&&a[O]?a.K(u,f,h(m)?!!m.capture:!!m,P):V(a,u,f,!1,m,P)}function V(a,u,f,m,P,k){if(!u)throw Error("Invalid event type");var G=h(P)?!!P.capture:!!P,Oe=ce(a);if(Oe||(a[w]=Oe=new be(a)),f=Oe.add(u,f,m,G,k),f.proxy)return f;if(m=F(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)Vn||(P=G),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(z(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function F(){function a(f){return u.call(a.src,a.listener,f)}const u=B;return a}function Y(a,u,f,m,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)Y(a,u[k],f,m,P);else m=h(m)?!!m.capture:!!m,f=ae(f),a&&a[O]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],f=_(k,f,m,P),-1<f&&(se(k[f]),Array.prototype.splice.call(k,f,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=ce(a))&&(u=a.g[u.toString()],a=-1,u&&(a=_(u,f,m,P)),(f=-1<a?u[a]:null)&&W(f))}function W(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[O])De(u.i,a);else{var f=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(f,m,a.capture):u.detachEvent?u.detachEvent(z(f),m):u.addListener&&u.removeListener&&u.removeListener(m),(f=ce(u))?(De(f,a),f.h==0&&(f.src=null,u[w]=null)):se(a)}}}function z(a){return a in C?C[a]:C[a]="on"+a}function B(a,u){if(a.da)a=!0;else{u=new Xt(u,this);var f=a.listener,m=a.ha||a.src;a.fa&&W(a),a=f.call(m,u)}return a}function ce(a){return a=a[w],a instanceof be?a:null}var Z="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[Z]||(a[Z]=function(u){return a.handleEvent(u)}),a[Z])}function ie(){He.call(this),this.i=new be(this),this.M=this,this.F=null}x(ie,He),ie.prototype[O]=!0,ie.prototype.removeEventListener=function(a,u,f,m){Y(this,a,u,f,m)};function ue(a,u){var f,m=a.F;if(m)for(f=[];m;m=m.F)f.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new ze(u,a);else if(u instanceof ze)u.target=u.target||a;else{var P=u;u=new ze(m,a),A(u,P)}if(P=!0,f)for(var k=f.length-1;0<=k;k--){var G=u.g=f[k];P=Ce(G,m,!0,u)&&P}if(G=u.g=a,P=Ce(G,m,!0,u)&&P,P=Ce(G,m,!1,u)&&P,f)for(k=0;k<f.length;k++)G=u.g=f[k],P=Ce(G,m,!1,u)&&P}ie.prototype.N=function(){if(ie.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var f=a.g[u],m=0;m<f.length;m++)se(f[m]);delete a.g[u],a.h--}}this.F=null},ie.prototype.K=function(a,u,f,m){return this.i.add(String(a),u,!1,f,m)},ie.prototype.L=function(a,u,f,m){return this.i.add(String(a),u,!0,f,m)};function Ce(a,u,f,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var G=u[k];if(G&&!G.da&&G.capture==f){var Oe=G.listener,it=G.ha||G.src;G.fa&&De(a.i,G),P=Oe.call(it,m)!==!1&&P}}return P&&!m.defaultPrevented}function Re(a,u,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function dt(a){a.g=Re(()=>{a.g=null,a.i&&(a.i=!1,dt(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class nt extends He{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:dt(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function st(a){He.call(this),this.h=a,this.g={}}x(st,He);var ft=[];function Dn(a){ve(a.g,function(u,f){this.g.hasOwnProperty(f)&&W(u)},a),a.g={}}st.prototype.N=function(){st.aa.N.call(this),Dn(this)},st.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Or=l.JSON.stringify,Rt=l.JSON.parse,$t=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Mr(){}Mr.prototype.h=null;function Vu(a){return a.h||(a.h=a.i())}function Du(){}var xs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ha(){ze.call(this,"d")}x(Ha,ze);function za(){ze.call(this,"c")}x(za,ze);var ur={},Ou=null;function Ki(){return Ou=Ou||new ie}ur.La="serverreachability";function Mu(a){ze.call(this,ur.La,a)}x(Mu,ze);function ks(a){const u=Ki();ue(u,new Mu(u))}ur.STAT_EVENT="statevent";function Lu(a,u){ze.call(this,ur.STAT_EVENT,a),this.stat=u}x(Lu,ze);function St(a){const u=Ki();ue(u,new Lu(u,a))}ur.Ma="timingevent";function Uu(a,u){ze.call(this,ur.Ma,a),this.size=u}x(Uu,ze);function Ns(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function Vs(){this.g=!0}Vs.prototype.xa=function(){this.g=!1};function H_(a,u,f,m,P,k){a.info(function(){if(a.g)if(k)for(var G="",Oe=k.split("&"),it=0;it<Oe.length;it++){var Se=Oe[it].split("=");if(1<Se.length){var pt=Se[0];Se=Se[1];var mt=pt.split("_");G=2<=mt.length&&mt[1]=="type"?G+(pt+"="+Se+"&"):G+(pt+"=redacted&")}}else G=null;else G=k;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+f+`
`+G})}function z_(a,u,f,m,P,k,G){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+f+`
`+k+" "+G})}function Lr(a,u,f,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+K_(a,f)+(m?" "+m:"")})}function W_(a,u){a.info(function(){return"TIMEOUT: "+u})}Vs.prototype.info=function(){};function K_(a,u){if(!a.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var m=f[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var G=1;G<P.length;G++)P[G]=""}}}}return Or(f)}catch{return u}}var Gi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Wa;function Qi(){}x(Qi,Mr),Qi.prototype.g=function(){return new XMLHttpRequest},Qi.prototype.i=function(){return{}},Wa=new Qi;function On(a,u,f,m){this.j=a,this.i=u,this.l=f,this.R=m||1,this.U=new st(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new $u}function $u(){this.i=null,this.g="",this.h=!1}var Bu={},Ka={};function Ga(a,u,f){a.L=1,a.v=Zi(hn(u)),a.m=f,a.P=!0,ju(a,null)}function ju(a,u){a.F=Date.now(),Yi(a),a.A=hn(a.v);var f=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),nh(f.i,"t",m),a.C=0,f=a.j.J,a.h=new $u,a.g=wh(a.j,f?u:null,!a.m),0<a.O&&(a.M=new nt(g(a.Y,a,a.g),a.O)),u=a.U,f=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(ft[0]=P.toString()),P=ft);for(var k=0;k<P.length;k++){var G=L(f,P[k],m||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),ks(),H_(a.i,a.u,a.A,a.l,a.R,a.m)}On.prototype.ca=function(a){a=a.target;const u=this.M;u&&dn(a)==3?u.j():this.Y(a)},On.prototype.Y=function(a){try{if(a==this.g)e:{const mt=dn(this.g);var u=this.g.Ba();const $r=this.g.Z();if(!(3>mt)&&(mt!=3||this.g&&(this.h.h||this.g.oa()||ch(this.g)))){this.J||mt!=4||u==7||(u==8||0>=$r?ks(3):ks(2)),Qa(this);var f=this.g.Z();this.X=f;t:if(qu(this)){var m=ch(this.g);a="";var P=m.length,k=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hr(this),Ds(this);var G="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(k&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,z_(this.i,this.u,this.A,this.l,this.R,mt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,it=this.g;if((Oe=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!j(Oe)){var Se=Oe;break t}}Se=null}if(f=Se)Lr(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ya(this,f);else{this.o=!1,this.s=3,St(12),hr(this),Ds(this);break e}}if(this.P){f=!0;let Ht;for(;!this.J&&this.C<G.length;)if(Ht=G_(this,G),Ht==Ka){mt==4&&(this.s=4,St(14),f=!1),Lr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==Bu){this.s=4,St(15),Lr(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else Lr(this.i,this.l,Ht,null),Ya(this,Ht);if(qu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),mt!=4||G.length!=0||this.h.h||(this.s=1,St(16),f=!1),this.o=this.o&&f,!f)Lr(this.i,this.l,G,"[Invalid Chunked Response]"),hr(this),Ds(this);else if(0<G.length&&!this.W){this.W=!0;var pt=this.j;pt.g==this&&pt.ba&&!pt.M&&(pt.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),nl(pt),pt.M=!0,St(11))}}else Lr(this.i,this.l,G,null),Ya(this,G);mt==4&&hr(this),this.o&&!this.J&&(mt==4?gh(this.j,this):(this.o=!1,Yi(this)))}else hy(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,St(12)):(this.s=0,St(13)),hr(this),Ds(this)}}}catch{}finally{}};function qu(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function G_(a,u){var f=a.C,m=u.indexOf(`
`,f);return m==-1?Ka:(f=Number(u.substring(f,m)),isNaN(f)?Bu:(m+=1,m+f>u.length?Ka:(u=u.slice(m,m+f),a.C=m+f,u)))}On.prototype.cancel=function(){this.J=!0,hr(this)};function Yi(a){a.S=Date.now()+a.I,Hu(a,a.I)}function Hu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Ns(g(a.ba,a),u)}function Qa(a){a.B&&(l.clearTimeout(a.B),a.B=null)}On.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(W_(this.i,this.A),this.L!=2&&(ks(),St(17)),hr(this),this.s=2,Ds(this)):Hu(this,this.S-a)};function Ds(a){a.j.G==0||a.J||gh(a.j,a)}function hr(a){Qa(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Dn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Ya(a,u){try{var f=a.j;if(f.G!=0&&(f.g==a||Ja(f.h,a))){if(!a.K&&Ja(f.h,a)&&f.G==3){try{var m=f.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)io(f),ro(f);else break e;tl(f),St(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=Ns(g(f.Za,f),6e3));if(1>=Ku(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else fr(f,11)}else if((a.K||f.g==a)&&io(f),!j(u))for(P=f.Da.g.parse(u),u=0;u<P.length;u++){let Se=P[u];if(f.T=Se[0],Se=Se[1],f.G==2)if(Se[0]=="c"){f.K=Se[1],f.ia=Se[2];const pt=Se[3];pt!=null&&(f.la=pt,f.j.info("VER="+f.la));const mt=Se[4];mt!=null&&(f.Aa=mt,f.j.info("SVER="+f.Aa));const $r=Se[5];$r!=null&&typeof $r=="number"&&0<$r&&(m=1.5*$r,f.L=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Ht=a.g;if(Ht){const ao=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ao){var k=m.h;k.g||ao.indexOf("spdy")==-1&&ao.indexOf("quic")==-1&&ao.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Xa(k,k.h),k.h=null))}if(m.D){const rl=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;rl&&(m.ya=rl,Fe(m.I,m.D,rl))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),m=f;var G=a;if(m.qa=vh(m,m.J?m.ia:null,m.W),G.K){Gu(m.h,G);var Oe=G,it=m.L;it&&(Oe.I=it),Oe.B&&(Qa(Oe),Yi(Oe)),m.g=G}else ph(m);0<f.i.length&&so(f)}else Se[0]!="stop"&&Se[0]!="close"||fr(f,7);else f.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?fr(f,7):el(f):Se[0]!="noop"&&f.l&&f.l.ta(Se),f.v=0)}}ks(4)}catch{}}var Q_=class{constructor(a,u){this.g=a,this.map=u}};function zu(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Ku(a){return a.h?1:a.g?a.g.size:0}function Ja(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function Xa(a,u){a.g?a.g.add(u):a.h=u}function Gu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}zu.prototype.cancel=function(){if(this.i=Qu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qu(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const f of a.g.values())u=u.concat(f.D);return u}return N(a.i)}function Y_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],f=a.length,m=0;m<f;m++)u.push(a[m]);return u}u=[],f=0;for(m in a)u[f++]=a[m];return u}function J_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var f=0;f<a;f++)u.push(f);return u}u=[],f=0;for(const m in a)u[f++]=m;return u}}}function Yu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var f=J_(a),m=Y_(a),P=m.length,k=0;k<P;k++)u.call(void 0,m[k],f&&f[k],a)}var Ju=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function X_(a,u){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var m=a[f].indexOf("="),P=null;if(0<=m){var k=a[f].substring(0,m);P=a[f].substring(m+1)}else k=a[f];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function dr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof dr){this.h=a.h,Ji(this,a.j),this.o=a.o,this.g=a.g,Xi(this,a.s),this.l=a.l;var u=a.i,f=new Ls;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),Xu(this,f),this.m=a.m}else a&&(u=String(a).match(Ju))?(this.h=!1,Ji(this,u[1]||"",!0),this.o=Os(u[2]||""),this.g=Os(u[3]||"",!0),Xi(this,u[4]),this.l=Os(u[5]||"",!0),Xu(this,u[6]||"",!0),this.m=Os(u[7]||"")):(this.h=!1,this.i=new Ls(null,this.h))}dr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ms(u,Zu,!0),":");var f=this.g;return(f||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ms(u,Zu,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ms(f,f.charAt(0)=="/"?ty:ey,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ms(f,ry)),a.join("")};function hn(a){return new dr(a)}function Ji(a,u,f){a.j=f?Os(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Xi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Xu(a,u,f){u instanceof Ls?(a.i=u,sy(a.i,a.h)):(f||(u=Ms(u,ny)),a.i=new Ls(u,a.h))}function Fe(a,u,f){a.i.set(u,f)}function Zi(a){return Fe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Os(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ms(a,u,f){return typeof a=="string"?(a=encodeURI(a).replace(u,Z_),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Z_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zu=/[#\/\?@]/g,ey=/[#\?:]/g,ty=/[#\?]/g,ny=/[#\?@]/g,ry=/#/g;function Ls(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&X_(a.i,function(u,f){a.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}t=Ls.prototype,t.add=function(a,u){Mn(this),this.i=null,a=Ur(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(u),this.h+=1,this};function eh(a,u){Mn(a),u=Ur(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function th(a,u){return Mn(a),u=Ur(a,u),a.g.has(u)}t.forEach=function(a,u){Mn(this),this.g.forEach(function(f,m){f.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let m=0;m<u.length;m++){const P=a[m];for(let k=0;k<P.length;k++)f.push(u[m])}return f},t.V=function(a){Mn(this);let u=[];if(typeof a=="string")th(this,a)&&(u=u.concat(this.g.get(Ur(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)u=u.concat(a[f])}return u},t.set=function(a,u){return Mn(this),this.i=null,a=Ur(this,a),th(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function nh(a,u,f){eh(a,u),0<f.length&&(a.i=null,a.g.set(Ur(a,u),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var m=u[f];const k=encodeURIComponent(String(m)),G=this.V(m);for(m=0;m<G.length;m++){var P=k;G[m]!==""&&(P+="="+encodeURIComponent(String(G[m]))),a.push(P)}}return this.i=a.join("&")};function Ur(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function sy(a,u){u&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(f,m){var P=m.toLowerCase();m!=P&&(eh(this,m),nh(this,P,f))},a)),a.j=u}function iy(a,u){const f=new Vs;if(l.Image){const m=new Image;m.onload=v(Ln,f,"TestLoadImage: loaded",!0,u,m),m.onerror=v(Ln,f,"TestLoadImage: error",!1,u,m),m.onabort=v(Ln,f,"TestLoadImage: abort",!1,u,m),m.ontimeout=v(Ln,f,"TestLoadImage: timeout",!1,u,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function oy(a,u){const f=new Vs,m=new AbortController,P=setTimeout(()=>{m.abort(),Ln(f,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(P),k.ok?Ln(f,"TestPingServer: ok",!0,u):Ln(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Ln(f,"TestPingServer: error",!1,u)})}function Ln(a,u,f,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(f)}catch{}}function ay(){this.g=new $t}function ly(a,u,f){const m=f||"";try{Yu(a,function(P,k){let G=P;h(P)&&(G=Or(P)),u.push(m+k+"="+encodeURIComponent(G))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function eo(a){this.l=a.Ub||null,this.j=a.eb||!1}x(eo,Mr),eo.prototype.g=function(){return new to(this.l,this.j)},eo.prototype.i=function(a){return function(){return a}}({});function to(a,u){ie.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(to,ie),t=to.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Fs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Us(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function rh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Us(this):Fs(this),this.readyState==3&&rh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Us(this))},t.Qa=function(a){this.g&&(this.response=a,Us(this))},t.ga=function(){this.g&&Us(this)};function Us(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Fs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=u.next();return a.join(`\r
`)};function Fs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(to.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sh(a){let u="";return ve(a,function(f,m){u+=m,u+=":",u+=f,u+=`\r
`}),u}function Za(a,u,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=sh(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Fe(a,u,f))}function Ke(a){ie.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ke,ie);var cy=/^https?$/i,uy=["POST","PUT"];t=Ke.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Wa.g(),this.v=this.o?Vu(this.o):Vu(Wa),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){ih(this,k);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)f.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())f.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(k=>k.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(uy,u,void 0))||m||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,G]of f)this.g.setRequestHeader(k,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lh(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){ih(this,k)}};function ih(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,oh(a),no(a)}function oh(a){a.A||(a.A=!0,ue(a,"complete"),ue(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ue(this,"complete"),ue(this,"abort"),no(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),no(this,!0)),Ke.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ah(this):this.bb())},t.bb=function(){ah(this)};function ah(a){if(a.h&&typeof o<"u"&&(!a.v[1]||dn(a)!=4||a.Z()!=2)){if(a.u&&dn(a)==4)Re(a.Ea,0,a);else if(ue(a,"readystatechange"),dn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var m;if(m=G===0){var P=String(a.D).match(Ju)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),m=!cy.test(P?P.toLowerCase():"")}f=m}if(f)ue(a,"complete"),ue(a,"success");else{a.m=6;try{var k=2<dn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",oh(a)}}finally{no(a)}}}}function no(a,u){if(a.g){lh(a);const f=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ue(a,"ready");try{f.onreadystatechange=m}catch{}}}function lh(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Rt(u)}};function ch(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function hy(a){const u={};a=(a.g&&2<=dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(j(a[m]))continue;var f=R(a[m]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const k=u[P]||[];u[P]=k,k.push(f)}b(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function $s(a,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||u}function uh(a){this.Aa=0,this.i=[],this.j=new Vs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=$s("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=$s("baseRetryDelayMs",5e3,a),this.cb=$s("retryDelaySeedMs",1e4,a),this.Wa=$s("forwardChannelMaxRetries",2,a),this.wa=$s("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new zu(a&&a.concurrentRequestLimit),this.Da=new ay,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=uh.prototype,t.la=8,t.G=1,t.connect=function(a,u,f,m){St(0),this.W=a,this.H=u||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.I=vh(this,null,this.W),so(this)};function el(a){if(hh(a),a.G==3){var u=a.U++,f=hn(a.I);if(Fe(f,"SID",a.K),Fe(f,"RID",u),Fe(f,"TYPE","terminate"),Bs(a,f),u=new On(a,a.j,u),u.L=2,u.v=Zi(hn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=wh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Yi(u)}yh(a)}function ro(a){a.g&&(nl(a),a.g.cancel(),a.g=null)}function hh(a){ro(a),a.u&&(l.clearTimeout(a.u),a.u=null),io(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function so(a){if(!Wu(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ie||qt(),we||(Ie(),we=!0),Nt.add(u,a),a.B=0}}function dy(a,u){return Ku(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Ns(g(a.Ga,a,u),_h(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new On(this,this.j,a);let k=this.o;if(this.S&&(k?(k=y(k),A(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=fh(this,P,u),f=hn(this.I),Fe(f,"RID",a),Fe(f,"CVER",22),this.D&&Fe(f,"X-HTTP-Session-Id",this.D),Bs(this,f),k&&(this.O?u="headers="+encodeURIComponent(String(sh(k)))+"&"+u:this.m&&Za(f,this.m,k)),Xa(this.h,P),this.Ua&&Fe(f,"TYPE","init"),this.P?(Fe(f,"$req",u),Fe(f,"SID","null"),P.T=!0,Ga(P,f,null)):Ga(P,f,u),this.G=2}}else this.G==3&&(a?dh(this,a):this.i.length==0||Wu(this.h)||dh(this))};function dh(a,u){var f;u?f=u.l:f=a.U++;const m=hn(a.I);Fe(m,"SID",a.K),Fe(m,"RID",f),Fe(m,"AID",a.T),Bs(a,m),a.m&&a.o&&Za(m,a.m,a.o),f=new On(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),u&&(a.i=u.D.concat(a.i)),u=fh(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Xa(a.h,f),Ga(f,m,u)}function Bs(a,u){a.H&&ve(a.H,function(f,m){Fe(u,m,f)}),a.l&&Yu({},function(f,m){Fe(u,m,f)})}function fh(a,u,f){f=Math.min(a.i.length,f);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let k=-1;for(;;){const G=["count="+f];k==-1?0<f?(k=P[0].g,G.push("ofs="+k)):k=0:G.push("ofs="+k);let Oe=!0;for(let it=0;it<f;it++){let Se=P[it].g;const pt=P[it].map;if(Se-=k,0>Se)k=Math.max(0,P[it].g-100),Oe=!1;else try{ly(pt,G,"req"+Se+"_")}catch{m&&m(pt)}}if(Oe){m=G.join("&");break e}}}return a=a.i.splice(0,f),u.D=a,m}function ph(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ie||qt(),we||(Ie(),we=!0),Nt.add(u,a),a.v=0}}function tl(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Ns(g(a.Fa,a),_h(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,mh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Ns(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,St(10),ro(this),mh(this))};function nl(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function mh(a){a.g=new On(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=hn(a.qa);Fe(u,"RID","rpc"),Fe(u,"SID",a.K),Fe(u,"AID",a.T),Fe(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Fe(u,"TO",a.ja),Fe(u,"TYPE","xmlhttp"),Bs(a,u),a.m&&a.o&&Za(u,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Zi(hn(u)),f.m=null,f.P=!0,ju(f,a)}t.Za=function(){this.C!=null&&(this.C=null,ro(this),tl(this),St(19))};function io(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function gh(a,u){var f=null;if(a.g==u){io(a),nl(a),a.g=null;var m=2}else if(Ja(a.h,u))f=u.D,Gu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=Ki(),ue(m,new Uu(m,f)),so(a)}else ph(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&dy(a,u)||m==2&&tl(a)))switch(f&&0<f.length&&(u=a.h,u.i=u.i.concat(f)),P){case 1:fr(a,5);break;case 4:fr(a,10);break;case 3:fr(a,6);break;default:fr(a,2)}}}function _h(a,u){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*u}function fr(a,u){if(a.j.info("Error code "+u),u==2){var f=g(a.fb,a),m=a.Xa;const P=!m;m=new dr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Ji(m,"https"),Zi(m),P?iy(m.toString(),f):oy(m.toString(),f)}else St(2);a.G=0,a.l&&a.l.sa(u),yh(a),hh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function yh(a){if(a.G=0,a.ka=[],a.l){const u=Qu(a.h);(u.length!=0||a.i.length!=0)&&(D(a.ka,u),D(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function vh(a,u,f){var m=f instanceof dr?hn(f):new dr(f);if(m.g!="")u&&(m.g=u+"."+m.g),Xi(m,m.s);else{var P=l.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new dr(null);m&&Ji(k,m),u&&(k.g=u),P&&Xi(k,P),f&&(k.l=f),m=k}return f=a.D,u=a.ya,f&&u&&Fe(m,f,u),Fe(m,"VER",a.la),Bs(a,m),m}function wh(a,u,f){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ke(new eo({eb:f})):new Ke(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Eh(){}t=Eh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function oo(){}oo.prototype.g=function(a,u){return new Vt(a,u)};function Vt(a,u){ie.call(this),this.g=new uh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!j(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!j(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Fr(this)}x(Vt,ie),Vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Vt.prototype.close=function(){el(this.g)},Vt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Or(a),a=f);u.i.push(new Q_(u.Ya++,a)),u.G==3&&so(u)},Vt.prototype.N=function(){this.g.l=null,delete this.j,el(this.g),delete this.g,Vt.aa.N.call(this)};function Th(a){Ha.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const f in u){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}x(Th,Ha);function Ih(){za.call(this),this.status=1}x(Ih,za);function Fr(a){this.g=a}x(Fr,Eh),Fr.prototype.ua=function(){ue(this.g,"a")},Fr.prototype.ta=function(a){ue(this.g,new Th(a))},Fr.prototype.sa=function(a){ue(this.g,new Ih)},Fr.prototype.ra=function(){ue(this.g,"b")},oo.prototype.createWebChannel=oo.prototype.g,Vt.prototype.send=Vt.prototype.o,Vt.prototype.open=Vt.prototype.m,Vt.prototype.close=Vt.prototype.close,hg=function(){return new oo},ug=function(){return Ki()},cg=ur,ec={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Gi.NO_ERROR=0,Gi.TIMEOUT=8,Gi.HTTP_ERROR=6,xo=Gi,Fu.COMPLETE="complete",lg=Fu,Du.EventType=xs,xs.OPEN="a",xs.CLOSE="b",xs.ERROR="c",xs.MESSAGE="d",ie.prototype.listen=ie.prototype.K,Ys=Du,Ke.prototype.listenOnce=Ke.prototype.L,Ke.prototype.getLastError=Ke.prototype.Ka,Ke.prototype.getLastErrorCode=Ke.prototype.Ba,Ke.prototype.getStatus=Ke.prototype.Z,Ke.prototype.getResponseJson=Ke.prototype.Oa,Ke.prototype.getResponseText=Ke.prototype.oa,Ke.prototype.send=Ke.prototype.ea,Ke.prototype.setWithCredentials=Ke.prototype.Ha,ag=Ke}).apply(typeof go<"u"?go:typeof self<"u"?self:typeof window<"u"?window:{});const Yd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new $c("@firebase/firestore");function Ws(){return Ar.logLevel}function oe(t,...e){if(Ar.logLevel<=Te.DEBUG){const n=e.map(Xc);Ar.debug(`Firestore (${Rs}): ${t}`,...n)}}function An(t,...e){if(Ar.logLevel<=Te.ERROR){const n=e.map(Xc);Ar.error(`Firestore (${Rs}): ${t}`,...n)}}function ms(t,...e){if(Ar.logLevel<=Te.WARN){const n=e.map(Xc);Ar.warn(`Firestore (${Rs}): ${t}`,...n)}}function Xc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(t="Unexpected state"){const e=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function Ve(t,e){t||de()}function ge(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends xn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(_t.UNAUTHENTICATED))}shutdown(){}}class JA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XA{constructor(e){this.t=e,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ve(this.o===void 0);let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new Xn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Xn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},l=c=>{oe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(oe("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Xn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(oe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ve(typeof r.accessToken=="string"),new dg(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ve(e===null||typeof e=="string"),new _t(e)}}class ZA{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class e1{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ZA(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(_t.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class t1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class n1{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Ve(this.o===void 0);const r=i=>{i.error!=null&&oe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,oe("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{oe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):oe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ve(typeof n.token=="string"),this.R=n.token,new t1(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r1(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=r1(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Pe(t,e){return t<e?-1:t>e?1:0}function gs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ne(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ne(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new ne(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return tt.fromMillis(Date.now())}static fromDate(e){return tt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new tt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Pe(this.nanoseconds,e.nanoseconds):Pe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new tt(0,0))}static max(){return new pe(new tt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e,n,r){n===void 0?n=0:n>e.length&&de(),r===void 0?r=e.length-n:r>e.length-n&&de(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return wi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof wi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class $e extends wi{construct(e,n,r){return new $e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new $e(n)}static emptyPath(){return new $e([])}}const s1=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends wi{construct(e,n,r){return new at(e,n,r)}static isValidIdentifier(e){return s1.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new at(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new ne(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new ne(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new ne(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new ne(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(n)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.path=e}static fromPath(e){return new le($e.fromString(e))}static fromName(e){return new le($e.fromString(e).popFirst(5))}static empty(){return new le($e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&$e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return $e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new $e(e.slice()))}}function i1(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=pe.fromTimestamp(r===1e9?new tt(n+1,0):new tt(n,r));return new nr(s,le.empty(),e)}function o1(t){return new nr(t.readTime,t.key,-1)}class nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new nr(pe.min(),le.empty(),-1)}static max(){return new nr(pe.max(),le.empty(),-1)}}function a1(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:Pe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class c1{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Li(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==l1)throw t;oe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&de(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;n(e[h]).next(d=>{o[h]=d,++l,l===i&&r(o)},d=>s(d))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function u1(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ui(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zc.oe=-1;function ba(t){return t==null}function Jo(t){return t===0&&1/t==-1/0}function h1(t){return typeof t=="number"&&Number.isInteger(t)&&!Jo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function kr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function pg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new _o(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new _o(this.root,e,this.comparator,!1)}getReverseIterator(){return new _o(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new _o(this.root,e,this.comparator,!0)}}class _o{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ot.RED,this.left=s??ot.EMPTY,this.right=i??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ot(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ot.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw de();const e=this.left.check();if(e!==this.right.check())throw de();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw de()}get value(){throw de()}get color(){throw de()}get left(){throw de()}get right(){throw de()}copy(e,n,r,s,i){return this}insert(e,n,r){return new ot(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Xd(this.data.getIterator())}getIteratorFrom(e){return new Xd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ct)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ct(this.comparator);return n.data=e,n}}class Xd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Lt([])}unionWith(e){let n=new ct(at.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Lt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new mg("Invalid base64 string: "+i):i}}(e);return new ht(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Pe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const d1=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rr(t){if(Ve(!!t),typeof t=="string"){let e=0;const n=d1.exec(t);if(Ve(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Rr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function tu(t){const e=t.mapValue.fields.__previous_value__;return eu(e)?tu(e):e}function Ei(t){const e=rr(t.mapValue.fields.__local_write_time__.timestampValue);return new tt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f1{constructor(e,n,r,s,i,o,l,c,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ti&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Sr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?eu(t)?4:m1(t)?9007199254740991:p1(t)?10:11:de()}function un(t,e){if(t===e)return!0;const n=Sr(t);if(n!==Sr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ei(t).isEqual(Ei(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=rr(s.timestampValue),l=rr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Rr(s.bytesValue).isEqual(Rr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),l=Ge(i.doubleValue);return o===l?Jo(o)===Jo(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return gs(t.arrayValue.values||[],e.arrayValue.values||[],un);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Jd(o)!==Jd(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!un(o[c],l[c])))return!1;return!0}(t,e);default:return de()}}function Ii(t,e){return(t.values||[]).find(n=>un(n,e))!==void 0}function _s(t,e){if(t===e)return 0;const n=Sr(t),r=Sr(e);if(n!==r)return Pe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Pe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Ge(i.integerValue||i.doubleValue),c=Ge(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(t,e);case 3:return Zd(t.timestampValue,e.timestampValue);case 4:return Zd(Ei(t),Ei(e));case 5:return Pe(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Rr(i),c=Rr(o);return l.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=Pe(l[h],c[h]);if(d!==0)return d}return Pe(l.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=Pe(Ge(i.latitude),Ge(o.latitude));return l!==0?l:Pe(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ef(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,c,h,d;const p=i.fields||{},g=o.fields||{},v=(l=p.value)===null||l===void 0?void 0:l.arrayValue,x=(c=g.value)===null||c===void 0?void 0:c.arrayValue,N=Pe(((h=v==null?void 0:v.values)===null||h===void 0?void 0:h.length)||0,((d=x==null?void 0:x.values)===null||d===void 0?void 0:d.length)||0);return N!==0?N:ef(v,x)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===yo.mapValue&&o===yo.mapValue)return 0;if(i===yo.mapValue)return 1;if(o===yo.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=o.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let p=0;p<c.length&&p<d.length;++p){const g=Pe(c[p],d[p]);if(g!==0)return g;const v=_s(l[c[p]],h[d[p]]);if(v!==0)return v}return Pe(c.length,d.length)}(t.mapValue,e.mapValue);default:throw de()}}function Zd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Pe(t,e);const n=rr(t),r=rr(e),s=Pe(n.seconds,r.seconds);return s!==0?s:Pe(n.nanos,r.nanos)}function ef(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=_s(n[s],r[s]);if(i)return i}return Pe(n.length,r.length)}function ys(t){return tc(t)}function tc(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=rr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Rr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=tc(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${tc(n.fields[o])}`;return s+"}"}(t.mapValue):de()}function tf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nc(t){return!!t&&"integerValue"in t}function nu(t){return!!t&&"arrayValue"in t}function nf(t){return!!t&&"nullValue"in t}function rf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ko(t){return!!t&&"mapValue"in t}function p1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return kr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function m1(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ko(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=at.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=oi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ko(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ko(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){kr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(oi(this.value))}}function gg(t){const e=[];return kr(t.fields,(n,r)=>{const s=new at([n]);if(ko(r)){const i=gg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Lt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new vt(e,0,pe.min(),pe.min(),pe.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new vt(e,1,n,pe.min(),r,s,0)}static newNoDocument(e,n){return new vt(e,2,n,pe.min(),pe.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new vt(e,3,n,pe.min(),pe.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof vt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new vt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,n){this.position=e,this.inclusive=n}}function sf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=le.comparator(le.fromName(o.referenceValue),n.key):r=_s(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function of(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{constructor(e,n="asc"){this.field=e,this.dir=n}}function g1(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{}class Xe extends _g{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new y1(e,n,r):n==="array-contains"?new E1(e,r):n==="in"?new T1(e,r):n==="not-in"?new I1(e,r):n==="array-contains-any"?new b1(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new v1(e,r):new w1(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_s(n,this.value)):n!==null&&Sr(this.value)===Sr(n)&&this.matchesComparison(_s(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return de()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends _g{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Jt(e,n)}matches(e){return yg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function yg(t){return t.op==="and"}function vg(t){return _1(t)&&yg(t)}function _1(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function rc(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+ys(t.value);if(vg(t))return t.filters.map(e=>rc(e)).join(",");{const e=t.filters.map(n=>rc(n)).join(",");return`${t.op}(${e})`}}function wg(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&un(r.value,s.value)}(t,e):t instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&wg(o,s.filters[l]),!0):!1}(t,e):void de()}function Eg(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${ys(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(Eg).join(" ,")+"}"}(t):"Filter"}class y1 extends Xe{constructor(e,n,r){super(e,n,r),this.key=le.fromName(r.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class v1 extends Xe{constructor(e,n){super(e,"in",n),this.keys=Tg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class w1 extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=Tg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>le.fromName(r.referenceValue))}class E1 extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nu(n)&&Ii(n.arrayValue,this.value)}}class T1 extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ii(this.value.arrayValue,n)}}class I1 extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ii(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ii(this.value.arrayValue,n)}}class b1 extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ii(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function af(t,e=null,n=[],r=[],s=null,i=null,o=null){return new A1(t,e,n,r,s,i,o)}function ru(t){const e=ge(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ba(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ys(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ys(r)).join(",")),e.ue=n}return e.ue}function su(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!g1(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!wg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!of(t.startAt,e.startAt)&&of(t.endAt,e.endAt)}function sc(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function R1(t,e,n,r,s,i,o,l){return new Ss(t,e,n,r,s,i,o,l)}function Aa(t){return new Ss(t)}function lf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ig(t){return t.collectionGroup!==null}function ai(t){const e=ge(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ct(at.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new bi(i,r))}),n.has(at.keyField().canonicalString())||e.ce.push(new bi(at.keyField(),r))}return e.ce}function an(t){const e=ge(t);return e.le||(e.le=S1(e,ai(t))),e.le}function S1(t,e){if(t.limitType==="F")return af(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bi(s.field,i)});const n=t.endAt?new Xo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Xo(t.startAt.position,t.startAt.inclusive):null;return af(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function ic(t,e){const n=t.filters.concat([e]);return new Ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function oc(t,e,n){return new Ss(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ra(t,e){return su(an(t),an(e))&&t.limitType===e.limitType}function bg(t){return`${ru(an(t))}|lt:${t.limitType}`}function zr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Eg(s)).join(", ")}]`),ba(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ys(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ys(s)).join(",")),`Target(${r})`}(an(t))}; limitType=${t.limitType})`}function Sa(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):le.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,c){const h=sf(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,ai(r),s)||r.endAt&&!function(o,l,c){const h=sf(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,ai(r),s))}(t,e)}function P1(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ag(t){return(e,n)=>{let r=!1;for(const s of ai(t)){const i=C1(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function C1(t,e,n){const r=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,l){const c=o.data.field(i),h=l.data.field(i);return c!==null&&h!==null?_s(c,h):de()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return de()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return pg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1=new We(le.comparator);function Rn(){return x1}const Rg=new We(le.comparator);function Js(...t){let e=Rg;for(const n of t)e=e.insert(n.key,n);return e}function Sg(t){let e=Rg;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function yr(){return li()}function Pg(){return li()}function li(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const k1=new We(le.comparator),N1=new ct(le.comparator);function Ee(...t){let e=N1;for(const n of t)e=e.add(n);return e}const V1=new ct(Pe);function D1(){return V1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jo(e)?"-0":e}}function Cg(t){return{integerValue:""+t}}function O1(t,e){return h1(e)?Cg(e):iu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(){this._=void 0}}function M1(t,e,n){return t instanceof Ai?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&eu(i)&&(i=tu(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ri?kg(t,e):t instanceof Si?Ng(t,e):function(s,i){const o=xg(s,i),l=cf(o)+cf(s.Pe);return nc(o)&&nc(s.Pe)?Cg(l):iu(s.serializer,l)}(t,e)}function L1(t,e,n){return t instanceof Ri?kg(t,e):t instanceof Si?Ng(t,e):n}function xg(t,e){return t instanceof Zo?function(r){return nc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Ai extends Pa{}class Ri extends Pa{constructor(e){super(),this.elements=e}}function kg(t,e){const n=Vg(e);for(const r of t.elements)n.some(s=>un(s,r))||n.push(r);return{arrayValue:{values:n}}}class Si extends Pa{constructor(e){super(),this.elements=e}}function Ng(t,e){let n=Vg(e);for(const r of t.elements)n=n.filter(s=>!un(s,r));return{arrayValue:{values:n}}}class Zo extends Pa{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function cf(t){return Ge(t.integerValue||t.doubleValue)}function Vg(t){return nu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,n){this.field=e,this.transform=n}}function F1(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ri&&s instanceof Ri||r instanceof Si&&s instanceof Si?gs(r.elements,s.elements,un):r instanceof Zo&&s instanceof Zo?un(r.Pe,s.Pe):r instanceof Ai&&s instanceof Ai}(t.transform,e.transform)}class $1{constructor(e,n){this.version=e,this.transformResults=n}}class Kt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Kt}static exists(e){return new Kt(void 0,e)}static updateTime(e){return new Kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function No(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ca{}function Dg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mg(t.key,Kt.none()):new Fi(t.key,t.data,Kt.none());{const n=t.data,r=kt.empty();let s=new ct(at.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new cr(t.key,r,new Lt(s.toArray()),Kt.none())}}function B1(t,e,n){t instanceof Fi?function(s,i,o){const l=s.value.clone(),c=hf(s.fieldTransforms,i,o.transformResults);l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof cr?function(s,i,o){if(!No(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=hf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Og(s)),c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ci(t,e,n,r){return t instanceof Fi?function(i,o,l,c){if(!No(i.precondition,o))return l;const h=i.value.clone(),d=df(i.fieldTransforms,c,o);return h.setAll(d),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof cr?function(i,o,l,c){if(!No(i.precondition,o))return l;const h=df(i.fieldTransforms,c,o),d=o.data;return d.setAll(Og(i)),d.setAll(h),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,l){return No(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function j1(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=xg(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function uf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&gs(r,s,(i,o)=>F1(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fi extends Ca{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class cr extends Ca{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Og(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hf(t,e,n){const r=new Map;Ve(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,L1(o,l,n[s]))}return r}function df(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,M1(i,o,e))}return r}class Mg extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class q1 extends Ca{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H1{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&B1(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Pg();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const c=Dg(o,l);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(n,r)=>uf(n,r))&&gs(this.baseMutations,e.baseMutations,(n,r)=>uf(n,r))}}class ou{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ve(e.mutations.length===r.length);let s=function(){return k1}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ou(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Je,Ae;function K1(t){switch(t){default:return de();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Lg(t){if(t===void 0)return An("GRPC error has no .code"),M.UNKNOWN;switch(t){case Je.OK:return M.OK;case Je.CANCELLED:return M.CANCELLED;case Je.UNKNOWN:return M.UNKNOWN;case Je.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Je.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Je.INTERNAL:return M.INTERNAL;case Je.UNAVAILABLE:return M.UNAVAILABLE;case Je.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Je.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Je.NOT_FOUND:return M.NOT_FOUND;case Je.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Je.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Je.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Je.ABORTED:return M.ABORTED;case Je.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Je.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Je.DATA_LOSS:return M.DATA_LOSS;default:return de()}}(Ae=Je||(Je={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G1(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q1=new wr([4294967295,4294967295],0);function ff(t){const e=G1().encode(t),n=new og;return n.update(e),new Uint8Array(n.digest())}function pf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new wr([n,r],0),new wr([s,i],0)]}class au{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Xs(`Invalid padding: ${n}`);if(r<0)throw new Xs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Xs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Xs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=wr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(wr.fromNumber(r)));return s.compare(Q1)===1&&(s=new wr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ff(e),[r,s]=pf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new au(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=ff(e),[r,s]=pf(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Xs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,$i.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xa(pe.min(),s,new We(Pe),Rn(),Ee())}}class $i{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new $i(r,n,Ee(),Ee(),Ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Ug{constructor(e,n){this.targetId=e,this.me=n}}class Fg{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class mf{constructor(){this.fe=0,this.ge=_f(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:de()}}),new $i(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=_f()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Ve(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Y1{constructor(e){this.Le=e,this.Be=new Map,this.ke=Rn(),this.qe=gf(),this.Qe=new We(Pe)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:de()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(sc(i))if(r===0){const o=new le(i.path);this.Ue(n,o,vt.newNoDocument(o,pe.min()))}else Ve(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(n);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Rr(r).toUint8Array()}catch(c){if(c instanceof mg)return ms("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new au(o,s,i)}catch(c){return ms(c instanceof Xs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&sc(l.target)){const c=new le(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,vt.newNoDocument(c,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=Ee();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new xa(e,n,this.Qe,this.ke,r);return this.ke=Rn(),this.qe=gf(),this.Qe=new We(Pe),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new mf,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new ct(Pe),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||oe("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new mf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function gf(){return new We(le.comparator)}function _f(){return new We(le.comparator)}const J1={asc:"ASCENDING",desc:"DESCENDING"},X1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Z1={and:"AND",or:"OR"};class eR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ac(t,e){return t.useProto3Json||ba(e)?e:{value:e}}function ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $g(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tR(t,e){return ea(t,e.toTimestamp())}function ln(t){return Ve(!!t),pe.fromTimestamp(function(n){const r=rr(n);return new tt(r.seconds,r.nanos)}(t))}function lu(t,e){return lc(t,e).canonicalString()}function lc(t,e){const n=function(s){return new $e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Bg(t){const e=$e.fromString(t);return Ve(Wg(e)),e}function cc(t,e){return lu(t.databaseId,e.path)}function Al(t,e){const n=Bg(e);if(n.get(1)!==t.databaseId.projectId)throw new ne(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ne(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(qg(n))}function jg(t,e){return lu(t.databaseId,e)}function nR(t){const e=Bg(t);return e.length===4?$e.emptyPath():qg(e)}function uc(t){return new $e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qg(t){return Ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yf(t,e,n){return{name:cc(t,e),fields:n.value.mapValue.fields}}function rR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:de()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,d){return h.useProto3Json?(Ve(d===void 0||typeof d=="string"),ht.fromBase64String(d||"")):(Ve(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ht.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const d=h.code===void 0?M.UNKNOWN:Lg(h.code);return new ne(d,h.message||"")}(o);n=new Fg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Al(t,r.document.name),i=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):pe.min(),l=new kt({mapValue:{fields:r.document.fields}}),c=vt.newFoundDocument(s,i,o,l),h=r.targetIds||[],d=r.removedTargetIds||[];n=new Vo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Al(t,r.document),i=r.readTime?ln(r.readTime):pe.min(),o=vt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new Vo([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Al(t,r.document),i=r.removedTargetIds||[];n=new Vo([],i,s,null)}else{if(!("filter"in e))return de();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new W1(s,i),l=r.targetId;n=new Ug(l,o)}}return n}function sR(t,e){let n;if(e instanceof Fi)n={update:yf(t,e.key,e.value)};else if(e instanceof Mg)n={delete:cc(t,e.key)};else if(e instanceof cr)n={update:yf(t,e.key,e.data),updateMask:fR(e.fieldMask)};else{if(!(e instanceof q1))return de();n={verify:cc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Ai)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ri)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Si)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Zo)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw de()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:de()}(t,e.precondition)),n}function iR(t,e){return t&&t.length>0?(Ve(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?ln(s.updateTime):ln(i);return o.isEqual(pe.min())&&(o=ln(i)),new $1(o,s.transformResults||[])}(n,e))):[]}function oR(t,e){return{documents:[jg(t,e.path)]}}function aR(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jg(t,s);const i=function(h){if(h.length!==0)return zg(Jt.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(d=>function(g){return{field:Wr(g.field),direction:uR(g.dir)}}(d))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ac(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function lR(t){let e=nR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ve(r===1);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=function(p){const g=Hg(p);return g instanceof Jt&&vg(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(x){return new bi(Kr(x.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(p){let g;return g=typeof p=="object"?p.value:p,ba(g)?null:g}(n.limit));let c=null;n.startAt&&(c=function(p){const g=!!p.before,v=p.values||[];return new Xo(v,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,v=p.values||[];return new Xo(v,g)}(n.endAt)),R1(e,s,o,i,l,"F",c,h)}function cR(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return de()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hg(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Kr(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Kr(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Kr(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Kr(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return de()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Kr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return de()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>Hg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return de()}}(n.compositeFilter.op))}(t):de()}function uR(t){return J1[t]}function hR(t){return X1[t]}function dR(t){return Z1[t]}function Wr(t){return{fieldPath:t.canonicalString()}}function Kr(t){return at.fromServerFormat(t.fieldPath)}function zg(t){return t instanceof Xe?function(n){if(n.op==="=="){if(rf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NAN"}};if(nf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(rf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NAN"}};if(nf(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(n.field),op:hR(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(s=>zg(s));return r.length===1?r[0]:{compositeFilter:{op:dR(n.op),filters:r}}}(t):de()}function fR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Wg(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e,n,r,s,i=pe.min(),o=pe.min(),l=ht.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Gn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e){this.ct=e}}function mR(t){const e=lR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?oc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(){this.un=new _R}addToCollectionParentIndex(e,n){return this.un.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(nr.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(nr.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class _R{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new ct($e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ct($e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new vs(0)}static kn(){return new vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,vt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ci(r.mutation,s,Lt.empty(),tt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=yr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Js();return i.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=yr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Rn();const o=li(),l=function(){return li()}();return n.forEach((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof cr)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),ci(d.mutation,h,d.mutation.getFieldMask(),tt.now())):o.set(h.key,Lt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return l.set(h,new vR(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),l))}recalculateAndSaveOverlays(e,n){const r=li();let s=new We((o,l)=>o-l),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=n.get(c);if(h===null)return;let d=r.get(c)||Lt.empty();d=l.applyToLocalView(h,d),r.set(c,d);const p=(s.get(l.batchId)||Ee()).add(c);s=s.insert(l.batchId,p)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,p=Pg();d.forEach(g=>{if(!i.has(g)){const v=Dg(n.get(g),r.get(g));v!==null&&p.set(g,v),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ig(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(yr());let l=-1,c=i;return o.next(h=>U.forEach(h,(d,p)=>(l<p.largestBatchId&&(l=p.largestBatchId),i.get(d)?U.resolve():this.remoteDocumentCache.getEntry(e,d).next(g=>{c=c.insert(d,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,c,h,Ee())).next(d=>({batchId:l,changes:Sg(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(r=>{let s=Js();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Js();return this.indexManager.getCollectionParents(e,i).next(l=>U.forEach(l,c=>{const h=function(p,g){return new Ss(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(d=>{d.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,h)=>{const d=h.getKey();o.get(d)===null&&(o=o.insert(d,vt.newInvalidDocument(d)))});let l=Js();return o.forEach((c,h)=>{const d=i.get(c);d!==void 0&&ci(d.mutation,h,Lt.empty(),tt.now()),Sa(n,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return U.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:mR(s.bundledQuery),readTime:ln(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(){this.overlays=new We(le.comparator),this.Ir=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=yr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=yr(),i=n.length+1,o=new le(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=yr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=yr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,d)=>l.set(h,d)),!(l.size()>=s)););return U.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new z1(n,r));let i=this.Ir.get(n);i===void 0&&(i=Ee(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return U.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,U.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{constructor(){this.Tr=new ct(rt.Er),this.dr=new ct(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new rt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new le(new $e([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new le(new $e([])),r=new rt(n,e),s=new rt(n,e+1);let i=Ee();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return le.comparator(e.key,n.key)||Pe(e.wr,n.wr)}static Ar(e,n){return Pe(e.wr,n.wr)||le.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new ct(rt.Er)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new H1(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new rt(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ct(Pe);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),U.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;le.isDocumentKey(i)||(i=i.child(""));const o=new rt(new le(i),0);let l=new ct(Pe);return this.br.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.wr)),!0)},o),U.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ve(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return U.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new rt(n,0),s=this.br.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e){this.Mr=e,this.docs=function(){return new We(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():vt.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():vt.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Rn();const o=n.path,l=new le(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||a1(o1(d),r)<=0||(s.has(d.key)||Sa(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){de()}Or(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new RR(this)}getSize(e){return U.resolve(this.size)}}class RR extends yR{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.persistence=e,this.Nr=new Ps(n=>ru(n),su),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new cu,this.targetCount=0,this.kr=vs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),U.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.Kn(n),U.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Zc(0),this.Kr=!1,this.Kr=!0,this.$r=new IR,this.referenceDelegate=e(this),this.Ur=new SR(this),this.indexManager=new gR,this.remoteDocumentCache=function(s){return new AR(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new pR(n),this.Gr=new ER(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new TR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new bR(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){oe("MemoryPersistence","Starting transaction:",e);const s=new CR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return U.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class CR extends c1{constructor(e){super(),this.currentSequenceNumber=e}}class uu{constructor(e){this.persistence=e,this.Jr=new cu,this.Yr=null}static Zr(e){return new uu(e)}get Xr(){if(this.Yr)return this.Yr;throw de()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),U.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Xr,r=>{const s=le.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return U.or([()=>U.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new hu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return gT()?8:u1(bt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new xR;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Ws()<=Te.DEBUG&&oe("QueryEngine","SDK will not create cache indexes for query:",zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),U.resolve()):(Ws()<=Te.DEBUG&&oe("QueryEngine","Query:",zr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Ws()<=Te.DEBUG&&oe("QueryEngine","The SDK decides to create cache indexes for query:",zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,an(n))):U.resolve())}Yi(e,n){if(lf(n))return U.resolve(null);let r=an(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=oc(n,null,"F"),r=an(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.ts(n,l);return this.ns(n,h,o,c.readTime)?this.Yi(e,oc(n,null,"F")):this.rs(e,h,n,c)}))})))}Zi(e,n,r,s){return lf(n)||s.isEqual(pe.min())?U.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?U.resolve(null):(Ws()<=Te.DEBUG&&oe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),zr(n)),this.rs(e,o,n,i1(s,-1)).next(l=>l))})}ts(e,n){let r=new ct(Ag(e));return n.forEach((s,i)=>{Sa(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Ws()<=Te.DEBUG&&oe("QueryEngine","Using full collection scan to execute query:",zr(n)),this.Ji.getDocumentsMatchingQuery(e,n,nr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new We(Pe),this._s=new Ps(i=>ru(i),su),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new wR(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function VR(t,e,n,r){return new NR(t,e,n,r)}async function Kg(t,e){const n=ge(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let c=Ee();for(const h of s){o.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return n.localDocuments.getDocuments(r,c).next(h=>({hs:h,removedBatchIds:o,addedBatchIds:l}))})})}function DR(t,e){const n=ge(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,c,h,d){const p=h.batch,g=p.keys();let v=U.resolve();return g.forEach(x=>{v=v.next(()=>d.getEntry(c,x)).next(N=>{const D=h.docVersions.get(x);Ve(D!==null),N.version.compareTo(D)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),d.addEntry(N)))})}),v.next(()=>l.mutationQueue.removeMutationBatch(c,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Ee();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Gg(t){const e=ge(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function OR(t,e){const n=ge(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((d,p)=>{const g=s.get(p);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ur.addMatchingKeys(i,d.addedDocuments,p)));let v=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?v=v.withResumeToken(ht.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):d.resumeToken.approximateByteSize()>0&&(v=v.withResumeToken(d.resumeToken,r)),s=s.insert(p,v),function(N,D,q){return N.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(g,v,d)&&l.push(n.Ur.updateTargetData(i,v))});let c=Rn(),h=Ee();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),l.push(MR(i,o,e.documentUpdates).next(d=>{c=d.Ps,h=d.Is})),!r.isEqual(pe.min())){const d=n.Ur.getLastRemoteSnapshotVersion(i).next(p=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(d)}return U.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(i=>(n.os=s,i))}function MR(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Rn();return n.forEach((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(pe.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):oe("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{Ps:o,Is:s}})}function LR(t,e){const n=ge(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function UR(t,e){const n=ge(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Gn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function hc(t,e,n){const r=ge(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ui(o))throw o;oe("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function vf(t,e,n){const r=ge(t);let s=pe.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,d){const p=ge(c),g=p._s.get(d);return g!==void 0?U.resolve(p.os.get(g)):p.Ur.getTargetData(h,d)}(r,o,an(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(c=>{i=c})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:pe.min(),n?i:Ee())).next(l=>(FR(r,P1(e),l),{documents:l,Ts:i})))}function FR(t,e,n){let r=t.us.get(e)||pe.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class wf{constructor(){this.activeTargetIds=D1()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $R{constructor(){this.so=new wf,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new wf,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){oe("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){oe("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo=null;function Rl(){return vo===null?vo=function(){return 268435456+Math.round(2147483648*Math.random())}():vo++,"0x"+vo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class HR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Rl(),c=this.xo(n,r.toUriEncodedString());oe("RestConnection",`Sending RPC '${n}' ${l}:`,c,s);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,i,o),this.No(n,c,h,s).then(d=>(oe("RestConnection",`Received RPC '${n}' ${l}: `,d),d),d=>{throw ms("RestConnection",`RPC '${n}' ${l} failed with error: `,d,"url: ",c,"request:",s),d})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Rs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=jR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Rl();return new Promise((o,l)=>{const c=new ag;c.setWithCredentials(!0),c.listenOnce(lg.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case xo.NO_ERROR:const d=c.getResponseJson();oe(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(d)),o(d);break;case xo.TIMEOUT:oe(gt,`RPC '${e}' ${i} timed out`),l(new ne(M.DEADLINE_EXCEEDED,"Request time out"));break;case xo.HTTP_ERROR:const p=c.getStatus();if(oe(gt,`RPC '${e}' ${i} failed with status:`,p,"response text:",c.getResponseText()),p>0){let g=c.getResponseJson();Array.isArray(g)&&(g=g[0]);const v=g==null?void 0:g.error;if(v&&v.status&&v.message){const x=function(D){const q=D.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(q)>=0?q:M.UNKNOWN}(v.status);l(new ne(x,v.message))}else l(new ne(M.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new ne(M.UNAVAILABLE,"Connection failed."));break;default:de()}}finally{oe(gt,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);oe(gt,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",h,r,15)})}Bo(e,n,r){const s=Rl(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=hg(),l=ug(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Oo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=i.join("");oe(gt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const p=o.createWebChannel(d,c);let g=!1,v=!1;const x=new qR({Io:D=>{v?oe(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(g||(oe(gt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),oe(gt,`RPC '${e}' stream ${s} sending:`,D),p.send(D))},To:()=>p.close()}),N=(D,q,j)=>{D.listen(q,K=>{try{j(K)}catch(Q){setTimeout(()=>{throw Q},0)}})};return N(p,Ys.EventType.OPEN,()=>{v||(oe(gt,`RPC '${e}' stream ${s} transport opened.`),x.yo())}),N(p,Ys.EventType.CLOSE,()=>{v||(v=!0,oe(gt,`RPC '${e}' stream ${s} transport closed`),x.So())}),N(p,Ys.EventType.ERROR,D=>{v||(v=!0,ms(gt,`RPC '${e}' stream ${s} transport errored:`,D),x.So(new ne(M.UNAVAILABLE,"The operation could not be completed")))}),N(p,Ys.EventType.MESSAGE,D=>{var q;if(!v){const j=D.data[0];Ve(!!j);const K=j,Q=K.error||((q=K[0])===null||q===void 0?void 0:q.error);if(Q){oe(gt,`RPC '${e}' stream ${s} received error:`,Q);const ye=Q.status;let ve=function(T){const A=Je[T];if(A!==void 0)return Lg(A)}(ye),b=Q.message;ve===void 0&&(ve=M.INTERNAL,b="Unknown error status: "+ye+" with message "+Q.message),v=!0,x.So(new ne(ve,b)),p.close()}else oe(gt,`RPC '${e}' stream ${s} received:`,j),x.bo(j)}}),N(l,cg.STAT_EVENT,D=>{D.stat===ec.PROXY?oe(gt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===ec.NOPROXY&&oe(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function Sl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(t){return new eR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&oe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e,n,r,s,i,o,l,c){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Qg(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new ne(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return oe("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(oe("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zR extends Yg{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=rR(this.serializer,e),r=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?ln(o.readTime):pe.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=uc(this.serializer),n.addTarget=function(i,o){let l;const c=o.target;if(l=sc(c)?{documents:oR(i,c)}:{query:aR(i,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=$g(i,o.resumeToken);const h=ac(i,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(pe.min())>0){l.readTime=ea(i,o.snapshotVersion.toTimestamp());const h=ac(i,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=cR(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=uc(this.serializer),n.removeTarget=e,this.a_(n)}}class WR extends Yg{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,Ve(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=iR(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=uc(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>sR(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new ne(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,lc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new ne(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,lc(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new ne(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class GR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(An(n),this.D_=!1):oe("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{Nr(this)&&(oe("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=ge(c);h.L_.add(4),await Bi(h),h.q_.set("Unknown"),h.L_.delete(4),await Na(h)}(this))})}),this.q_=new GR(r,s)}}async function Na(t){if(Nr(t))for(const e of t.B_)await e(!0)}async function Bi(t){for(const e of t.B_)await e(!1)}function Jg(t,e){const n=ge(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),mu(n)?pu(n):Cs(n).r_()&&fu(n,e))}function du(t,e){const n=ge(t),r=Cs(n);n.N_.delete(e),r.r_()&&Xg(n,e),n.N_.size===0&&(r.r_()?r.o_():Nr(n)&&n.q_.set("Unknown"))}function fu(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Cs(t).A_(e)}function Xg(t,e){t.Q_.xe(e),Cs(t).R_(e)}function pu(t){t.Q_=new Y1({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Cs(t).start(),t.q_.v_()}function mu(t){return Nr(t)&&!Cs(t).n_()&&t.N_.size>0}function Nr(t){return ge(t).L_.size===0}function Zg(t){t.Q_=void 0}async function YR(t){t.q_.set("Online")}async function JR(t){t.N_.forEach((e,n)=>{fu(t,e)})}async function XR(t,e){Zg(t),mu(t)?(t.q_.M_(e),pu(t)):t.q_.set("Unknown")}async function ZR(t,e,n){if(t.q_.set("Online"),e instanceof Fg&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){oe("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ta(t,r)}else if(e instanceof Vo?t.Q_.Ke(e):e instanceof Ug?t.Q_.He(e):t.Q_.We(e),!n.isEqual(pe.min()))try{const r=await Gg(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.N_.get(h);d&&i.N_.set(h,d.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const d=i.N_.get(c);if(!d)return;i.N_.set(c,d.withResumeToken(ht.EMPTY_BYTE_STRING,d.snapshotVersion)),Xg(i,c);const p=new Gn(d.target,c,h,d.sequenceNumber);fu(i,p)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){oe("RemoteStore","Failed to raise snapshot:",r),await ta(t,r)}}async function ta(t,e,n){if(!Ui(e))throw e;t.L_.add(1),await Bi(t),t.q_.set("Offline"),n||(n=()=>Gg(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{oe("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Na(t)})}function e_(t,e){return e().catch(n=>ta(t,n,e))}async function Va(t){const e=ge(t),n=sr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;eS(e);)try{const s=await LR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,tS(e,s)}catch(s){await ta(e,s)}t_(e)&&n_(e)}function eS(t){return Nr(t)&&t.O_.length<10}function tS(t,e){t.O_.push(e);const n=sr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function t_(t){return Nr(t)&&!sr(t).n_()&&t.O_.length>0}function n_(t){sr(t).start()}async function nS(t){sr(t).p_()}async function rS(t){const e=sr(t);for(const n of t.O_)e.m_(n.mutations)}async function sS(t,e,n){const r=t.O_.shift(),s=ou.from(r,e,n);await e_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Va(t)}async function iS(t,e){e&&sr(t).V_&&await async function(r,s){if(function(o){return K1(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();sr(r).s_(),await e_(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Va(r)}}(t,e),t_(t)&&n_(t)}async function Tf(t,e){const n=ge(t);n.asyncQueue.verifyOperationInProgress(),oe("RemoteStore","RemoteStore received new credentials");const r=Nr(n);n.L_.add(3),await Bi(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Na(n)}async function oS(t,e){const n=ge(t);e?(n.L_.delete(2),await Na(n)):e||(n.L_.add(2),await Bi(n),n.q_.set("Unknown"))}function Cs(t){return t.K_||(t.K_=function(n,r,s){const i=ge(n);return i.w_(),new zR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:YR.bind(null,t),Ro:JR.bind(null,t),mo:XR.bind(null,t),d_:ZR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),mu(t)?pu(t):t.q_.set("Unknown")):(await t.K_.stop(),Zg(t))})),t.K_}function sr(t){return t.U_||(t.U_=function(n,r,s){const i=ge(n);return i.w_(),new WR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:nS.bind(null,t),mo:iS.bind(null,t),f_:rS.bind(null,t),g_:sS.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Va(t)):(await t.U_.stop(),t.O_.length>0&&(oe("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Xn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new gu(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _u(t,e){if(An("AsyncQueue",`${e}: ${t}`),Ui(t))return new ne(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||le.comparator(n.key,r.key):(n,r)=>le.comparator(n.key,r.key),this.keyedMap=Js(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(){this.W_=new We(le.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):de():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ws{constructor(e,n,r,s,i,o,l,c,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ws(e,n,os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class lS{constructor(){this.queries=bf(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ge(n),i=s.queries;s.queries=bf(),i.forEach((o,l)=>{for(const c of l.j_)c.onError(r)})})(this,new ne(M.ABORTED,"Firestore shutting down"))}}function bf(){return new Ps(t=>bg(t),Ra)}async function r_(t,e){const n=ge(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new aS,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=_u(o,`Initialization of query '${zr(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&yu(n)}async function s_(t,e){const n=ge(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function cS(t,e){const n=ge(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&yu(n)}function uS(t,e,n){const r=ge(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function yu(t){t.Y_.forEach(e=>{e.next()})}var dc,Af;(Af=dc||(dc={})).ea="default",Af.Cache="cache";class i_{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==dc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.key=e}}class a_{constructor(e){this.key=e}}class hS{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=Ee(),this.mutatedKeys=Ee(),this.Aa=Ag(e),this.Ra=new os(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new If,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,p)=>{const g=s.get(d),v=Sa(this.query,p)?p:null,x=!!g&&this.mutatedKeys.has(g.key),N=!!v&&(v.hasLocalMutations||this.mutatedKeys.has(v.key)&&v.hasCommittedMutations);let D=!1;g&&v?g.data.isEqual(v.data)?x!==N&&(r.track({type:3,doc:v}),D=!0):this.ga(g,v)||(r.track({type:2,doc:v}),D=!0,(c&&this.Aa(v,c)>0||h&&this.Aa(v,h)<0)&&(l=!0)):!g&&v?(r.track({type:0,doc:v}),D=!0):g&&!v&&(r.track({type:1,doc:g}),D=!0,(c||h)&&(l=!0)),D&&(v?(o=o.add(v),i=N?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((d,p)=>function(v,x){const N=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return de()}};return N(v)-N(x)}(d.type,p.type)||this.Aa(d.doc,p.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],c=this.da.size===0&&this.current&&!s?1:0,h=c!==this.Ea;return this.Ea=c,o.length!==0||h?{snapshot:new ws(this.query,e.Ra,i,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new If,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=Ee(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new a_(r))}),this.da.forEach(r=>{e.has(r)||n.push(new o_(r))}),n}ba(e){this.Ta=e.Ts,this.da=Ee();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ws.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class dS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class fS{constructor(e){this.key=e,this.va=!1}}class pS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Ps(l=>bg(l),Ra),this.Ma=new Map,this.xa=new Set,this.Oa=new We(le.comparator),this.Na=new Map,this.La=new cu,this.Ba={},this.ka=new Map,this.qa=vs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function mS(t,e,n=!0){const r=f_(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await l_(r,e,n,!0),s}async function gS(t,e){const n=f_(t);await l_(n,e,!0,!1)}async function l_(t,e,n,r){const s=await UR(t.localStore,an(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await _S(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Jg(t.remoteStore,s),l}async function _S(t,e,n,r,s){t.Ka=(p,g,v)=>async function(N,D,q,j){let K=D.view.ma(q);K.ns&&(K=await vf(N.localStore,D.query,!1).then(({documents:b})=>D.view.ma(b,K)));const Q=j&&j.targetChanges.get(D.targetId),ye=j&&j.targetMismatches.get(D.targetId)!=null,ve=D.view.applyChanges(K,N.isPrimaryClient,Q,ye);return Sf(N,D.targetId,ve.wa),ve.snapshot}(t,p,g,v);const i=await vf(t.localStore,e,!0),o=new hS(e,i.Ts),l=o.ma(i.documents),c=$i.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(l,t.isPrimaryClient,c);Sf(t,n,h.wa);const d=new dS(e,n,o);return t.Fa.set(e,d),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),h.snapshot}async function yS(t,e,n){const r=ge(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Ra(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await hc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&du(r.remoteStore,s.targetId),fc(r,s.targetId)}).catch(Li)):(fc(r,s.targetId),await hc(r.localStore,s.targetId,!0))}async function vS(t,e){const n=ge(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),du(n.remoteStore,r.targetId))}async function wS(t,e,n){const r=SS(t);try{const s=await function(o,l){const c=ge(o),h=tt.now(),d=l.reduce((v,x)=>v.add(x.key),Ee());let p,g;return c.persistence.runTransaction("Locally write mutations","readwrite",v=>{let x=Rn(),N=Ee();return c.cs.getEntries(v,d).next(D=>{x=D,x.forEach((q,j)=>{j.isValidDocument()||(N=N.add(q))})}).next(()=>c.localDocuments.getOverlayedDocuments(v,x)).next(D=>{p=D;const q=[];for(const j of l){const K=j1(j,p.get(j.key).overlayedDocument);K!=null&&q.push(new cr(j.key,K,gg(K.value.mapValue),Kt.exists(!0)))}return c.mutationQueue.addMutationBatch(v,h,q,l)}).next(D=>{g=D;const q=D.applyToLocalDocumentSet(p,N);return c.documentOverlayCache.saveOverlays(v,D.batchId,q)})}).then(()=>({batchId:g.batchId,changes:Sg(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,c){let h=o.Ba[o.currentUser.toKey()];h||(h=new We(Pe)),h=h.insert(l,c),o.Ba[o.currentUser.toKey()]=h}(r,s.batchId,n),await ji(r,s.changes),await Va(r.remoteStore)}catch(s){const i=_u(s,"Failed to persist write");n.reject(i)}}async function c_(t,e){const n=ge(t);try{const r=await OR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Ve(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Ve(o.va):s.removedDocuments.size>0&&(Ve(o.va),o.va=!1))}),await ji(n,r,e)}catch(r){await Li(r)}}function Rf(t,e,n){const r=ge(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const c=ge(o);c.onlineState=l;let h=!1;c.queries.forEach((d,p)=>{for(const g of p.j_)g.Z_(l)&&(h=!0)}),h&&yu(c)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ES(t,e,n){const r=ge(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new We(le.comparator);o=o.insert(i,vt.newNoDocument(i,pe.min()));const l=Ee().add(i),c=new xa(pe.min(),new Map,new We(Pe),o,l);await c_(r,c),r.Oa=r.Oa.remove(i),r.Na.delete(e),vu(r)}else await hc(r.localStore,e,!1).then(()=>fc(r,e,n)).catch(Li)}async function TS(t,e){const n=ge(t),r=e.batch.batchId;try{const s=await DR(n.localStore,e);h_(n,r,null),u_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ji(n,s)}catch(s){await Li(s)}}async function IS(t,e,n){const r=ge(t);try{const s=await function(o,l){const c=ge(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next(p=>(Ve(p!==null),d=p.keys(),c.mutationQueue.removeMutationBatch(h,p))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d)).next(()=>c.localDocuments.getDocuments(h,d))})}(r.localStore,e);h_(r,e,n),u_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ji(r,s)}catch(s){await Li(s)}}function u_(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function h_(t,e,n){const r=ge(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function fc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||d_(t,r)})}function d_(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(du(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),vu(t))}function Sf(t,e,n){for(const r of n)r instanceof o_?(t.La.addReference(r.key,e),bS(t,r)):r instanceof a_?(oe("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||d_(t,r.key)):de()}function bS(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(oe("SyncEngine","New document in limbo: "+n),t.xa.add(r),vu(t))}function vu(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new le($e.fromString(e)),r=t.qa.next();t.Na.set(r,new fS(n)),t.Oa=t.Oa.insert(n,r),Jg(t.remoteStore,new Gn(an(Aa(n.path)),r,"TargetPurposeLimboResolution",Zc.oe))}}async function ji(t,e,n){const r=ge(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,c)=>{o.push(r.Ka(c,e,n).then(h=>{var d;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(d=n==null?void 0:n.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,p?"current":"not-current")}if(h){s.push(h);const p=hu.Wi(c.targetId,h);i.push(p)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(c,h){const d=ge(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.$i,v=>d.persistence.referenceDelegate.addReference(p,g.targetId,v)).next(()=>U.forEach(g.Ui,v=>d.persistence.referenceDelegate.removeReference(p,g.targetId,v)))))}catch(p){if(!Ui(p))throw p;oe("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const v=d.os.get(g),x=v.snapshotVersion,N=v.withLastLimboFreeSnapshotVersion(x);d.os=d.os.insert(g,N)}}}(r.localStore,i))}async function AS(t,e){const n=ge(t);if(!n.currentUser.isEqual(e)){oe("SyncEngine","User change. New user:",e.toKey());const r=await Kg(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(c=>{c.reject(new ne(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ji(n,r.hs)}}function RS(t,e){const n=ge(t),r=n.Na.get(e);if(r&&r.va)return Ee().add(r.key);{let s=Ee();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function f_(t){const e=ge(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=c_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=RS.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ES.bind(null,e),e.Ca.d_=cS.bind(null,e.eventManager),e.Ca.$a=uS.bind(null,e.eventManager),e}function SS(t){const e=ge(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=TS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IS.bind(null,e),e}class na{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ka(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return VR(this.persistence,new kR,e.initialUser,this.serializer)}Ga(e){return new PR(uu.Zr,this.serializer)}Wa(e){return new $R}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}na.provider={build:()=>new na};class pc{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Rf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=AS.bind(null,this.syncEngine),await oS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lS}()}createDatastore(e){const n=ka(e.databaseInfo.databaseId),r=function(i){return new HR(i)}(e.databaseInfo);return function(i,o,l,c){return new KR(i,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new QR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Rf(this.syncEngine,n,0),function(){return Ef.D()?new Ef:new BR}())}createSyncEngine(e,n){return function(s,i,o,l,c,h,d){const p=new pS(s,i,o,l,c,h);return d&&(p.Qa=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ge(s);oe("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Bi(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}pc.provider={build:()=>new pc};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PS{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=_t.UNAUTHENTICATED,this.clientId=fg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{oe("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(oe("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Xn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_u(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pl(t,e){t.asyncQueue.verifyOperationInProgress(),oe("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Kg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Pf(t,e){t.asyncQueue.verifyOperationInProgress();const n=await CS(t);oe("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Tf(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Tf(e.remoteStore,s)),t._onlineComponents=e}async function CS(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){oe("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;ms("Error using user provided cache. Falling back to memory cache: "+n),await Pl(t,new na)}}else oe("FirestoreClient","Using default OfflineComponentProvider"),await Pl(t,new na);return t._offlineComponents}async function m_(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(oe("FirestoreClient","Using user provided OnlineComponentProvider"),await Pf(t,t._uninitializedComponentsProvider._online)):(oe("FirestoreClient","Using default OnlineComponentProvider"),await Pf(t,new pc))),t._onlineComponents}function xS(t){return m_(t).then(e=>e.syncEngine)}async function mc(t){const e=await m_(t),n=e.eventManager;return n.onListen=mS.bind(null,e.syncEngine),n.onUnlisten=yS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=gS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=vS.bind(null,e.syncEngine),n}function kS(t,e,n={}){const r=new Xn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,l,c,h){const d=new p_({next:g=>{d.Za(),o.enqueueAndForget(()=>s_(i,p));const v=g.docs.has(l);!v&&g.fromCache?h.reject(new ne(M.UNAVAILABLE,"Failed to get document because the client is offline.")):v&&g.fromCache&&c&&c.source==="server"?h.reject(new ne(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new i_(Aa(l.path),d,{includeMetadataChanges:!0,_a:!0});return r_(i,p)}(await mc(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(t,e,n){if(!n)throw new ne(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NS(t,e,n,r){if(e===!0&&r===!0)throw new ne(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function xf(t){if(!le.isDocumentKey(t))throw new ne(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kf(t){if(le.isDocumentKey(t))throw new ne(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Da(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":de()}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ne(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Da(t);throw new ne(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new ne(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ne(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NS("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=g_((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new ne(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new ne(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new ne(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Oa{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nf({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YA;switch(r.type){case"firstParty":return new e1(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Cf.get(n);r&&(oe("ComponentProvider","Removing Datastore"),Cf.delete(n),r.terminate())}(this),Promise.resolve()}}function VS(t,e,n,r={}){var s;const i=(t=Gt(t,Oa))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ms("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=_t.MOCK_USER;else{l=cT(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new ne(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new _t(h)}t._authCredentials=new JA(new dg(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vr(this.firestore,e,this._query)}}class Tt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Tt(this.firestore,e,this._key)}}class Zn extends Vr{constructor(e,n,r){super(e,n,Aa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Tt(this.firestore,null,new le(e))}withConverter(e){return new Zn(this.firestore,e,this._path)}}function qi(t,e,...n){if(t=et(t),__("collection","path",e),t instanceof Oa){const r=$e.fromString(e,...n);return kf(r),new Zn(t,null,r)}{if(!(t instanceof Tt||t instanceof Zn))throw new ne(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return kf(r),new Zn(t.firestore,null,r)}}function Hi(t,e,...n){if(t=et(t),arguments.length===1&&(e=fg.newId()),__("doc","path",e),t instanceof Oa){const r=$e.fromString(e,...n);return xf(r),new Tt(t,null,new le(r))}{if(!(t instanceof Tt||t instanceof Zn))throw new ne(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child($e.fromString(e,...n));return xf(r),new Tt(t.firestore,t instanceof Zn?t.converter:null,new le(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vf{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Qg(this,"async_queue_retry"),this.Vu=()=>{const r=Sl();r&&oe("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Sl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Sl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Xn;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Ui(e))throw e;oe("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw An("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=gu.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&de()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Df(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Pr extends Oa{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Vf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Vf(e),this._firestoreClient=void 0,await e}}}function DS(t,e){const n=typeof t=="object"?t:Im(),r=typeof t=="string"?t:"(default)",s=jc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=aT("firestore");i&&VS(s,...i)}return s}function wu(t){if(t._terminated)throw new ne(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||OS(t),t._firestoreClient}function OS(t){var e,n,r;const s=t._freezeSettings(),i=function(l,c,h,d){return new f1(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,g_(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new PS(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(ht.fromBase64String(e))}catch(n){throw new ne(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ne(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ne(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ne(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Pe(this._lat,e._lat)||Pe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=/^__.*__$/;class LS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fi(e,this.data,n,this.fieldTransforms)}}class y_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new cr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function v_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw de()}}class Iu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Iu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ra(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(v_(this.Cu)&&MS.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class US{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ka(e)}Qu(e,n,r,s=!1){return new Iu({Cu:e,methodName:n,qu:r,path:at.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ua(t){const e=t._freezeSettings(),n=ka(t._databaseId);return new US(t._databaseId,!!e.ignoreUndefinedProperties,n)}function w_(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Au("Data must be an object, but it was:",o,r);const l=E_(r,o);let c,h;if(i.merge)c=new Lt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=gc(e,p,n);if(!o.contains(g))throw new ne(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);I_(d,g)||d.push(g)}c=new Lt(d),h=o.fieldTransforms.filter(p=>c.covers(p.field))}else c=null,h=o.fieldTransforms;return new LS(new kt(l),c,h)}class Fa extends La{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fa}}class bu extends La{_toFieldTransform(e){return new U1(e.path,new Ai)}isEqual(e){return e instanceof bu}}function FS(t,e,n,r){const s=t.Qu(1,e,n);Au("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();kr(r,(c,h)=>{const d=Ru(e,c,n);h=et(h);const p=s.Nu(d);if(h instanceof Fa)i.push(d);else{const g=zi(h,p);g!=null&&(i.push(d),o.set(d,g))}});const l=new Lt(i);return new y_(o,l,s.fieldTransforms)}function $S(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[gc(e,r,n)],c=[s];if(i.length%2!=0)throw new ne(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(gc(e,i[g])),c.push(i[g+1]);const h=[],d=kt.empty();for(let g=l.length-1;g>=0;--g)if(!I_(h,l[g])){const v=l[g];let x=c[g];x=et(x);const N=o.Nu(v);if(x instanceof Fa)h.push(v);else{const D=zi(x,N);D!=null&&(h.push(v),d.set(v,D))}}const p=new Lt(h);return new y_(d,p,o.fieldTransforms)}function BS(t,e,n,r=!1){return zi(n,t.Qu(r?4:3,e))}function zi(t,e){if(T_(t=et(t)))return Au("Unsupported field value:",e,t),E_(t,e);if(t instanceof La)return function(r,s){if(!v_(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let c=zi(l,s.Lu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=et(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return O1(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=tt.fromDate(r);return{timestampValue:ea(s.serializer,i)}}if(r instanceof tt){const i=new tt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ea(s.serializer,i)}}if(r instanceof Eu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Es)return{bytesValue:$g(s.serializer,r._byteString)};if(r instanceof Tt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(c=>{if(typeof c!="number")throw l.Bu("VectorValues must only contain numeric values.");return iu(l.serializer,c)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Da(r)}`)}(t,e)}function E_(t,e){const n={};return pg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(t,(r,s)=>{const i=zi(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function T_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof tt||t instanceof Eu||t instanceof Es||t instanceof Tt||t instanceof La||t instanceof Tu)}function Au(t,e,n){if(!T_(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Da(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function gc(t,e,n){if((e=et(e))instanceof Ma)return e._internalPath;if(typeof e=="string")return Ru(t,e);throw ra("Field path arguments must be of type string or ",t,!1,void 0,n)}const jS=new RegExp("[~\\*/\\[\\]]");function Ru(t,e,n){if(e.search(jS)>=0)throw ra(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ma(...e.split("."))._internalPath}catch{throw ra(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ra(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new ne(M.INVALID_ARGUMENT,l+t+c)}function I_(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Tt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field($a("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qS extends b_{data(){return super.data()}}function $a(t,e){return typeof e=="string"?Ru(t,e):e instanceof Ma?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new ne(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Su{}class A_ extends Su{}function Pu(t,e,...n){let r=[];e instanceof Su&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Cu).length,l=i.filter(c=>c instanceof Ba).length;if(o>1||o>0&&l>0)throw new ne(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Ba extends A_{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ba(e,n,r)}_apply(e){const n=this._parse(e);return S_(e._query,n),new Vr(e.firestore,e.converter,ic(e._query,n))}_parse(e){const n=Ua(e.firestore);return function(i,o,l,c,h,d,p){let g;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new ne(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Mf(p,d);const v=[];for(const x of p)v.push(Of(c,i,x));g={arrayValue:{values:v}}}else g=Of(c,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Mf(p,d),g=BS(l,o,p,d==="in"||d==="not-in");return Xe.create(h,d,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function zS(t,e,n){const r=e,s=$a("where",t);return Ba._create(s,r,n)}class Cu extends Su{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Cu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const c of l)S_(o,c),o=ic(o,c)}(e._query,n),new Vr(e.firestore,e.converter,ic(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class xu extends A_{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new xu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new ne(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new ne(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bi(i,o)}(e._query,this._field,this._direction);return new Vr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Ss(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function R_(t,e="asc"){const n=e,r=$a("orderBy",t);return xu._create(r,n)}function Of(t,e,n){if(typeof(n=et(n))=="string"){if(n==="")throw new ne(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ig(e)&&n.indexOf("/")!==-1)throw new ne(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child($e.fromString(n));if(!le.isDocumentKey(r))throw new ne(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tf(t,new le(r))}if(n instanceof Tt)return tf(t,n._key);throw new ne(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Da(n)}.`)}function Mf(t,e){if(!Array.isArray(t)||t.length===0)throw new ne(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function S_(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new ne(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class WS{convertValue(e,n="none"){switch(Sr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw de()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return kr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ge(o.doubleValue));return new Tu(i)}convertGeoPoint(e){return new Eu(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=tu(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ei(e));default:return null}}convertTimestamp(e){const n=rr(e);return new tt(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=$e.fromString(e);Ve(Wg(r));const s=new Ti(r.get(1),r.get(3)),i=new le(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class C_ extends b_{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Do(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field($a("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Do extends C_{data(e={}){return super.data(e)}}class KS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Do(this._firestore,this._userDataWriter,r.key,r,new Zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ne(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const c=new Do(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const c=new Do(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Zs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),d=o.indexOf(l.doc.key)),{type:GS(l.type),doc:c,oldIndex:h,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function GS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return de()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x_(t){t=Gt(t,Tt);const e=Gt(t.firestore,Pr);return kS(wu(e),t._key).then(n=>V_(e,t,n))}class k_ extends WS{constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Tt(this.firestore,null,n)}}function QS(t,e,n){t=Gt(t,Tt);const r=Gt(t.firestore,Pr),s=P_(t.converter,e);return Nu(r,[w_(Ua(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Kt.none())])}function YS(t,e,n,...r){t=Gt(t,Tt);const s=Gt(t.firestore,Pr),i=Ua(s);let o;return o=typeof(e=et(e))=="string"||e instanceof Ma?$S(i,"updateDoc",t._key,e,n,r):FS(i,"updateDoc",t._key,e),Nu(s,[o.toMutation(t._key,Kt.exists(!0))])}function N_(t,e){const n=Gt(t.firestore,Pr),r=Hi(t),s=P_(t.converter,e);return Nu(n,[w_(Ua(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Kt.exists(!1))]).then(()=>r)}function ku(t,...e){var n,r,s;t=et(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Df(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Df(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let c,h,d;if(t instanceof Tt)h=Gt(t.firestore,Pr),d=Aa(t._key.path),c={next:p=>{e[o]&&e[o](V_(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Gt(t,Vr);h=Gt(p.firestore,Pr),d=p._query;const g=new k_(h);c={next:v=>{e[o]&&e[o](new KS(h,g,p,v))},error:e[o+1],complete:e[o+2]},HS(t._query)}return function(g,v,x,N){const D=new p_(N),q=new i_(v,D,x);return g.asyncQueue.enqueueAndForget(async()=>r_(await mc(g),q)),()=>{D.Za(),g.asyncQueue.enqueueAndForget(async()=>s_(await mc(g),q))}}(wu(h),d,l,c)}function Nu(t,e){return function(r,s){const i=new Xn;return r.asyncQueue.enqueueAndForget(async()=>wS(await xS(r),s,i)),i.promise}(wu(t),e)}function V_(t,e,n){const r=n.docs.get(e._key),s=new k_(t);return new C_(t,s,e._key,r,new Zs(n.hasPendingWrites,n.fromCache),e.converter)}function D_(){return new bu("serverTimestamp")}(function(e,n=!0){(function(s){Rs=s})(bs),fs(new Tr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Pr(new XA(r.getProvider("auth-internal")),new n1(r.getProvider("app-check-internal")),function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new ne(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(h.options.projectId,d)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),Jn(Yd,"4.7.3",e),Jn(Yd,"4.7.3","esm2017")})();const JS={apiKey:"AIzaSyBQd041Hf7e4_BCYp-q2bwf1gPn9zcJCwg",authDomain:"petitpublic-27a24.firebaseapp.com",projectId:"petitpublic-27a24",storageBucket:"petitpublic-27a24.appspot.com",messagingSenderId:"366737176241",appId:"1:366737176241:web:b4d745afd635e278619490"},O_=Tm(JS),Nn=DS(O_),Wi=WA(O_);async function XS(t){const e=Hi(Nn,`users/${t}`),n=await x_(e);if(!n.exists())throw new Error("No se encontró el perfil del usuario");return{id:n.id,email:n.data().email,displayName:n.data().displayName,bio:n.data().bio,location:n.data().location,petName:n.data().petName,petSpecies:n.data().petSpecies,petAge:n.data().petAge,petDescription:n.data().petDescription,petInterests:n.data().petInterests,petIcon:n.data().petIcon}}async function ZS(t,{email:e}){const n=Hi(Nn,`users/${t}`);await QS(n,{email:e})}async function eP(t,e){const n=Hi(Nn,`users/${t}`);await YS(n,{...e})}let as={id:null,email:null,displayName:null,bio:null,location:null,petName:null,petSpecies:null,petAge:null,petDescription:null,petInterests:null,petIcon:null};localStorage.getItem("user")&&(as=JSON.parse(localStorage.getItem("user")));let Oo=[];Db(Wi,t=>{t?(Mo({id:t.uid,email:t.email,displayName:t.displayName}),XS(t.uid).then(e=>{Mo({bio:e.bio,location:e.location,petName:e.petName,petSpecies:e.petSpecies,petAge:e.petAge,petDescription:e.petDescription,petInterests:e.petInterests,petIcon:e.petIcon})})):(Mo({id:null,email:null,displayName:null,bio:null,location:null,petName:null,petSpecies:null,petAge:null,petDescription:null,petInterests:null,petIcon:null}),localStorage.removeItem("user")),L_()});async function tP({email:t,password:e}){try{return await Cb(Wi,t,e),!0}catch(n){throw console.error("[auth.js login] Error al iniciar sesión: ",n),n}}async function nP({email:t,password:e}){try{const n=await Pb(Wi,t,e);await ZS(n.user.uid,{email:t})}catch(n){throw console.error("[auth.js register] Error al registrar el usuario: ",n),n}}async function rP({displayName:t,bio:e,location:n,petName:r,petSpecies:s,petAge:i,petDescription:o,petInterests:l,petIcon:c}){try{const h=kb(Wi.currentUser,{displayName:t}),d=eP(as.id,{displayName:t,bio:e,location:n,petName:r,petSpecies:s,petAge:i,petDescription:o,petInterests:l,petIcon:c});await Promise.all([h,d]),Mo({displayName:t,bio:e,location:n,petName:r,petSpecies:s,petAge:i,petDescription:o,petInterests:l,petIcon:c})}catch(h){throw console.error("[auth.js editMyProfile] Error al editar los datos del perfil: ",h),h}}async function sP(){try{return await Ob(Wi)}catch(t){throw console.error("[auth.js logout] Error al cerrar sesión: ",t),t}}function Dr(t){return Oo.push(t),M_(t),()=>Oo=Oo.filter(e=>e!=t)}function M_(t){t({...as})}function L_(){Oo.forEach(t=>M_(t))}function Mo(t){as={...as,...t},localStorage.setItem("user",JSON.stringify(as)),L_()}function U_({user_id:t,email:e,displayName:n,petName:r,content:s,picture:i}){const o=qi(Nn,"post");return N_(o,{user_id:t,email:e,displayName:n,petName:r,content:s,picture:i,created_at:D_()})}function F_(t){const e=qi(Nn,"post"),n=Pu(e,R_("created_at","desc"));ku(n,r=>{const s=r.docs.map(i=>({id:i.id,email:i.data().email,displayName:i.data().displayName,petName:i.data().petName,content:i.data().content,picture:i.data().picture,created_at:i.data().created_at}));t(s)})}function iP(t,e){const n=qi(Nn,"post"),r=Pu(n,zS("user_id","==",t));ku(r,s=>{const i=s.docs.map(o=>({id:o.id,email:o.data().email,displayName:o.data().displayName,content:o.data().content,picture:o.data().picture,created_at:o.data().created_at}));e(i)})}let Lf=()=>{};const oP={name:"Feed",components:{BaseHeading1:Cn,CustomRouterLink:Uc,CardPost:Fc,CustomRouterLinkSecondary:va},data(){return{posts:[],newPost:{content:"",picture:"",created_at:""},loggedUser:{id:null,email:null,displayName:null,bio:null,petName:null},loading:!1}},methods:{async handleSubmit(){this.loading=!0;try{await U_({user_id:this.loggedUser.id,email:this.loggedUser.email,displayName:this.loggedUser.displayName,petName:this.loggedUser.petName||"",content:this.newPost.content,picture:this.newPost.picture}),this.newPost.content="",this.newPost.picture=""}catch(t){console.error("Error al guardar el post:",t)}finally{this.loading=!1}},getDateAndTime(t){if(t){const e=t.toDate().toLocaleDateString("es-AR",{day:"2-digit",month:"long",year:"numeric"});return`${t.toDate().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit",hour12:!1})} - ${e}`}}},async mounted(){F_(t=>this.posts=t),Lf=Dr(t=>this.loggedUser=t)},unmounted(){Lf()}},aP={class:"max-w-screen-xl mx-auto px-4 py-12 gap-12 overflow-hidden md:px-8"},lP={class:"flex flex-wrap items-center justify-between mt-2 mb-8"},cP={class:"flex"},uP={class:"w-full"},hP={key:0,class:"flex items-center rounded-lg mb-3"},dP={key:1,class:"text-center text-gray-dark"},fP={key:2,class:"flex flex-wrap place-content-evenly"};function pP(t,e,n,r,s,i){const o=me("BaseHeading1"),l=me("CustomRouterLink"),c=me("CustomRouterLinkSecondary"),h=me("CardPost");return J(),ee("section",aP,[I("header",lP,[$(o,null,{default:re(()=>e[0]||(e[0]=[H("Publicaciones")])),_:1}),$(l,{to:"/feed/publicar",class:"px-8 py-2 font-medium text-lg bg-purple-light duration-150 hover:text-purple-dark hover:bg-purple-light/75 active:bg-purple-secondary active:text-white"},{default:re(()=>e[1]||(e[1]=[H("Publicar")])),_:1})]),I("div",cP,[I("section",uP,[s.loading?(J(),ee("div",hP,e[2]||(e[2]=[I("div",{class:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 rounded-full animate-pulse"},"Cargando...",-1)]))):Me("",!0),e[4]||(e[4]=I("h2",{class:"sr-only"},"Posteos",-1)),s.posts.length===0?(J(),ee("p",dP,"Todavía no hay publicaciones, sé el primero en publicar.")):(J(),ee("div",fP,[(J(!0),ee(Qe,null,Ts(s.posts,d=>(J(),ee("div",{key:d.id},[$(h,{post:d,getDateAndTime:i.getDateAndTime},{action:re(()=>[$(c,{to:`/feed/posteo/${d.id}`,class:"font-medium"},{default:re(()=>e[3]||(e[3]=[H("Ver comentarios")])),_:2},1032,["to"])]),_:2},1032,["post","getDateAndTime"])]))),128))]))])])])}const mP=Be(oP,[["render",pP]]),gP={name:"CustomInput",props:{type:{type:String,default:"text"},modelValue:{type:String,default:"text"},required:{type:Boolean,default:!1}},methods:{updateValue(t){this.$emit("update:modelValue",t.target.value)}}},_P=["type","value","required"];function yP(t,e,n,r,s,i){return J(),ee("input",{type:n.type,value:n.modelValue,required:n.required,onInput:e[0]||(e[0]=(...o)=>i.updateValue&&i.updateValue(...o)),class:"outline-none bg-white border border-purple-light text-sm rounded-full focus:ring-2 focus:ring-purple-secondary block w-full p-2.5 px-4"},null,40,_P)}const ja=Be(gP,[["render",yP]]),vP={name:"CustomTextarea",props:{modelValue:{type:String,default:""},required:{type:Boolean,default:!1}},methods:{updateValue(t){this.$emit("update:modelValue",t.target.value)}}},wP=["value","required"];function EP(t,e,n,r,s,i){return J(),ee("textarea",{value:n.modelValue,required:n.required,onInput:e[0]||(e[0]=(...o)=>i.updateValue&&i.updateValue(...o)),class:"outline-none bg-white border border-purple-light text-sm rounded-full focus:ring-2 focus:ring-purple-secondary block w-full p-2.5 px-4"},null,40,wP)}const $_=Be(vP,[["render",EP]]),TP={name:"CustomLabel",props:{htmlFor:{type:String,default:""}}},IP=["for"];function bP(t,e,n,r,s,i){return J(),ee("label",{for:n.htmlFor,class:"block mb-2"},[Pn(t.$slots,"default")],8,IP)}const qa=Be(TP,[["render",bP]]);let Uf=()=>{};const AP={name:"Publish",components:{ButtonPrimary:Is,BaseHeading1:Cn,CustomInput:ja,CustomTextarea:$_,CustomLabel:qa},data(){return{posts:[],newPost:{content:"",picture:"",created_at:""},loggedUser:{id:null,email:null,displayName:null,bio:null,petName:null},showAlert:!1}},methods:{handleSubmit(){U_({user_id:this.loggedUser.id,email:this.loggedUser.email,displayName:this.loggedUser.displayName,petName:this.loggedUser.petName||"",content:this.newPost.content,picture:this.newPost.picture}),this.newPost.content="",this.newPost.picture="",this.showAlert=!0,setTimeout(()=>{this.showAlert=!1,this.$router.push("/feed")},1500)}},async mounted(){F_(t=>this.posts=t),Uf=Dr(t=>this.loggedUser=t)},unmounted(){Uf()}},RP={class:"w-full mb-6 max-w-screen-xl mx-auto px-4 py-12 gap-12 overflow-hidden md:px-8"},SP={key:0,class:"p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50",role:"alert"},PP={class:"flex gap-4 container"},CP={class:"w-full"},xP={class:"mb-4"},kP={key:0,class:"text-sm text-gray-dark"},NP={class:"mb-4"},VP={class:"mb-4"},DP={class:"mb-4"},OP={key:0,class:"mt-2 p-2 mb-2 text-sm text-red-800 rounded-lg bg-red-50 inline-block"};function MP(t,e,n,r,s,i){const o=me("BaseHeading1"),l=me("CustomLabel"),c=me("CustomInput"),h=me("CustomTextarea"),d=me("ButtonPrimary");return J(),ee("section",RP,[s.showAlert?(J(),ee("div",SP,e[3]||(e[3]=[I("span",{class:"font-medium"},"¡Purrfecto!",-1),H(" Tu publicación ha sido creada con éxito. ")]))):Me("",!0),$(o,{class:"text-center mt-2 mb-8"},{default:re(()=>e[4]||(e[4]=[H("Crear una publicación")])),_:1}),I("div",PP,[I("section",CP,[I("form",{action:"#",onSubmit:e[2]||(e[2]=xi((...p)=>i.handleSubmit&&i.handleSubmit(...p),["prevent"]))},[I("div",xP,[s.loggedUser.displayName?(J(),ee("p",kP,"Usuario")):Me("",!0),I("p",null,je(s.loggedUser.displayName),1)]),I("div",NP,[e[5]||(e[5]=I("p",{class:"text-sm text-gray-dark"},"Email",-1)),I("p",null,je(s.loggedUser.email),1)]),I("div",VP,[$(l,{for:"picture"},{default:re(()=>e[6]||(e[6]=[H("Imagen")])),_:1}),$(c,{type:"text",id:"picture",modelValue:s.newPost.picture,"onUpdate:modelValue":e[0]||(e[0]=p=>s.newPost.picture=p),class:"mt-2"},null,8,["modelValue"])]),I("div",DP,[$(l,{for:"content"},{default:re(()=>e[7]||(e[7]=[H("Contenido")])),_:1}),$(h,{id:"content",modelValue:s.newPost.content,"onUpdate:modelValue":e[1]||(e[1]=p=>s.newPost.content=p),required:!0,class:"mt-2"},null,8,["modelValue"]),s.newPost.content==""?(J(),ee("div",OP,e[8]||(e[8]=[I("span",null,'El campo "contenido" no puede estar vacío',-1)]))):Me("",!0)]),$(d,{type:"submit"},{default:re(()=>e[9]||(e[9]=[H("Publicar")])),_:1})],32)])])])}const LP=Be(AP,[["render",MP]]);function UP({postId:t,user_id:e,email:n,content:r}){const s=qi(Nn,`post/${t}/comments`);return N_(s,{user_id:e,email:n,content:r,created_at:D_()})}async function FP(t){const e=Hi(Nn,`post/${t}`),n=await x_(e);if(n.exists())return{content:n.data().content,picture:n.data().picture,email:n.data().email,created_at:n.data().created_at};throw new Error("No existe el post!")}function $P(t,e){const n=qi(Nn,`post/${t}/comments`),r=Pu(n,R_("created_at","desc"));ku(r,s=>{const i=s.docs.map(o=>({id:o.id,user_id:o.data().user_id,email:o.data().email,content:o.data().content,created_at:o.data().created_at}));e(i)})}let Ff=()=>{};const BP={name:"Post",components:{BaseHeading1:Cn,CardPost:Fc},props:{postId:{type:String,required:!0}},data(){return{comments:[],newComment:{content:""},loggedUser:{id:null,email:null,displayName:null,bio:null,career:null},post:{content:null,email:null,picture:null,created_at:null},showAlert:!1,loading:!1}},methods:{async handleSubmit(){this.loading=!0;try{await UP({postId:this.postId,user_id:this.loggedUser.id,email:this.loggedUser.email,content:this.newComment.content}),this.newComment.content="",this.showAlert=!0}catch(t){console.error("Error al guardar el comentario:",t)}finally{this.loading=!1}},async fetchPost(){try{const t=await FP(this.postId);this.post=t}catch(t){console.error("Error obteniendo el post:",t)}},getDateAndTime(t){if(t){const e=t.toDate().toLocaleDateString("es-AR",{day:"2-digit",month:"long",year:"numeric"});return`${t.toDate().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit",hour12:!1})} - ${e}`}}},async mounted(){$P(this.postId,t=>{this.comments=t}),await this.fetchPost(),Ff=Dr(t=>this.loggedUser=t)},unmounted(){Ff()}},jP={class:"w-full mb-6 max-w-screen-xl mx-auto px-4 py-12 gap-12 overflow-hidden md:px-8"},qP={class:"flex justify-center"},HP={key:0,class:"p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50",role:"alert"},zP={key:1,class:"flex items-center rounded-lg mb-3"},WP={class:"rounded-3xl bg-purple-primary px-6 py-4 text-white"},KP={key:0,class:"flex flex-col gap-3 mb-2"},GP={class:"font-semibold tracking-widest"},QP={class:"tracking-wide"},YP={key:1,class:"tracking-wide"};function JP(t,e,n,r,s,i){const o=me("BaseHeading1"),l=me("CardPost");return J(),ee("section",jP,[$(o,{class:"text-center mt-2 mb-8"},{default:re(()=>e[2]||(e[2]=[H("Comentarios de la Publicación")])),_:1}),e[7]||(e[7]=I("h2",{class:"sr-only"},"Publicación",-1)),I("div",qP,[$(l,{post:this.post,getDateAndTime:this.getDateAndTime},null,8,["post","getDateAndTime"])]),e[8]||(e[8]=I("h3",{class:"sr-only"},"Comentarios",-1)),s.showAlert?(J(),ee("div",HP,e[3]||(e[3]=[I("span",{class:"font-medium"},"¡Purrfecto!",-1),H(" Tu comentario ha sido publicado con éxito. ")]))):Me("",!0),I("form",{class:"relative w-full bg-violet-50 px-4 py-2 rounded-full mb-4",onSubmit:e[1]||(e[1]=xi((...c)=>i.handleSubmit&&i.handleSubmit(...c),["prevent"]))},[e[4]||(e[4]=I("label",{for:"post-comment",class:"sr-only"},"Publicar un comentario",-1)),Ep(I("input",{"onUpdate:modelValue":e[0]||(e[0]=c=>s.newComment.content=c),type:"text",id:"post-comment",placeholder:"Publicar tu respuesta",class:"w-full py-3 pl-4 pr-12 text-gray-500 border-none outline-none bg-transparent focus:border-none tracking-wide"},null,512),[[xw,s.newComment.content]]),e[5]||(e[5]=I("button",{type:"submit","aria-label":"Publicar comentario",class:"absolute right-4 top-2/4 transform -translate-y-2/4 p-2 text-purple-primary duration-150 bg-purple-light rounded-full"},[I("i",{class:"fa-solid fa-arrow-up"})],-1))],32),s.loading?(J(),ee("div",zP,e[6]||(e[6]=[I("div",{class:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 rounded-full animate-pulse"},"Cargando...",-1)]))):Me("",!0),I("div",WP,[s.comments.length>0?(J(),ee("ul",KP,[(J(!0),ee(Qe,null,Ts(s.comments,c=>(J(),ee("li",{key:c.id},[I("div",null,[I("span",GP,je(c.email),1)]),I("div",QP,je(c.content),1)]))),128))])):(J(),ee("p",YP,"Aún no hay comentarios"))])])}const XP=Be(BP,[["render",JP]]),ZP="/petit/img/register/perro-registro.png",eC={name:"Register",components:{BaseHeading1:Cn,CustomInput:ja,ButtonPrimary:Is,CustomLabel:qa,CustomRouterLinkSecondary:va},data(){return{user:{email:"",password:""},loading:!1,showAlert:!1,showAlertDanger:!1}},methods:{async handleSubmit(){this.loading=!0;try{await nP({...this.user}),console.log("Usuario registrado con éxito :D"),this.showAlert=!0,setTimeout(()=>{this.showAlert=!1,this.$router.push("/mi-perfil")},1500)}catch(t){throw console.error("[Register.vue] Error al registrarse: ",t),this.showAlertDanger=!0,setTimeout(()=>{this.showAlertDanger=!1},5e3),this.loading=!1,t}}}},tC={class:"max-w-screen-xl mx-auto px-4 py-12 gap-12 overflow-hidden md:px-8 md:flex"},nC={class:"flex-none space-y-5 max-w-xl"},rC={class:"mb-4"},sC={class:"mb-4"},iC={key:0,class:"flex items-center rounded-lg mb-3"},oC={key:1,class:"p-4 mb-4 text-sm rounded-lg bg-green-primary",role:"alert"},aC={key:2,class:"p-4 mb-4 text-sm rounded-lg bg-red-secondary",role:"alert"},lC={class:"mt-5"};function cC(t,e,n,r,s,i){const o=me("BaseHeading1"),l=me("CustomLabel"),c=me("CustomInput"),h=me("ButtonPrimary"),d=me("CustomRouterLinkSecondary");return J(),ee("section",tC,[I("article",nC,[$(o,null,{default:re(()=>e[3]||(e[3]=[H("Crear una "),I("span",{class:"text-orange-dark"},"Cuenta",-1)])),_:1}),I("form",{action:"#",onSubmit:e[2]||(e[2]=xi((...p)=>i.handleSubmit&&i.handleSubmit(...p),["prevent"]))},[I("div",rC,[$(l,{for:"email"},{default:re(()=>e[4]||(e[4]=[H("Correo electrónico")])),_:1}),$(c,{type:"email",id:"email",modelValue:s.user.email,"onUpdate:modelValue":e[0]||(e[0]=p=>s.user.email=p),required:!0},null,8,["modelValue"])]),I("div",sC,[e[5]||(e[5]=I("label",{for:"password",class:"block mb-2"},"Contraseña",-1)),$(c,{type:"password",id:"password",modelValue:s.user.password,"onUpdate:modelValue":e[1]||(e[1]=p=>s.user.password=p),required:!0},null,8,["modelValue"])]),s.loading?(J(),ee("div",iC,e[6]||(e[6]=[I("div",{class:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 rounded-full animate-pulse"},"Cargando...",-1)]))):Me("",!0),s.showAlert?(J(),ee("div",oC,e[7]||(e[7]=[I("span",{class:"font-medium"},"¡Purrfecto!",-1),H(" Te has registrado con éxito. ")]))):Me("",!0),s.showAlertDanger?(J(),ee("div",aC,e[8]||(e[8]=[I("span",null,[I("strong",null,"Hubo un error"),H(", intenta de nuevo por favor.")],-1)]))):Me("",!0),$(h,{type:"submit"},{default:re(()=>e[9]||(e[9]=[H("Registrar")])),_:1}),I("p",lC,[e[11]||(e[11]=H("¿Ya tenés una cuenta? ")),$(d,{to:"/iniciar-sesion"},{default:re(()=>e[10]||(e[10]=[H("Ingresá acá")])),_:1})])],32)]),e[12]||(e[12]=I("aside",{class:"flex-1 hidden md:block"},[I("img",{src:ZP,class:"max-w-xl",alt:"Perro ilustración con un corazón encima."})],-1))])}const uC=Be(eC,[["render",cC]]),hC="/petit/img/login/perro-login.png",dC={name:"Login",components:{BaseHeading1:Cn,CustomInput:ja,ButtonPrimary:Is,CustomLabel:qa,CustomRouterLinkSecondary:va},data(){return{user:{email:"",password:""},loading:!1,showAlert:!1,showAlertDanger:!1}},methods:{async handleSubmit(){this.loading=!0;try{await tP({email:this.user.email,password:this.user.password}),console.log("Usuario autenticado con éxito :D"),this.showAlert=!0,setTimeout(()=>{this.showAlert=!1,this.$router.push("/mi-perfil")},1500)}catch(t){throw console.error("[Login.vue] Error al autenticar: ",t),this.showAlertDanger=!0,setTimeout(()=>{this.showAlertDanger=!1},5e3),this.loading=!1,t}}}},fC={class:"max-w-screen-xl mx-auto px-4 py-12 gap-12 overflow-hidden md:px-8 md:flex"},pC={class:"flex-none space-y-5 max-w-xl"},mC={class:"mb-4"},gC={class:"mb-4"},_C={key:0,class:"flex items-center rounded-lg mb-3"},yC={key:1,class:"p-4 mb-4 text-sm rounded-lg bg-green-primary",role:"alert"},vC={key:2,class:"p-4 mb-4 text-sm rounded-lg bg-red-secondary",role:"alert"},wC={class:"mt-5"};function EC(t,e,n,r,s,i){const o=me("BaseHeading1"),l=me("CustomLabel"),c=me("CustomInput"),h=me("ButtonPrimary"),d=me("CustomRouterLinkSecondary");return J(),ee("section",fC,[I("article",pC,[$(o,null,{default:re(()=>e[3]||(e[3]=[H("Ingresar con tu "),I("span",{class:"text-orange-dark"},"Cuenta",-1)])),_:1}),I("form",{action:"#",onSubmit:e[2]||(e[2]=xi((...p)=>i.handleSubmit&&i.handleSubmit(...p),["prevent"]))},[I("div",mC,[$(l,{for:"email"},{default:re(()=>e[4]||(e[4]=[H("Correo electrónico")])),_:1}),$(c,{type:"email",id:"email",modelValue:s.user.email,"onUpdate:modelValue":e[0]||(e[0]=p=>s.user.email=p),required:!0},null,8,["modelValue"])]),I("div",gC,[e[5]||(e[5]=I("label",{for:"password",class:"block mb-2"},"Contraseña",-1)),$(c,{type:"password",id:"password",modelValue:s.user.password,"onUpdate:modelValue":e[1]||(e[1]=p=>s.user.password=p),required:!0},null,8,["modelValue"])]),s.loading?(J(),ee("div",_C,e[6]||(e[6]=[I("div",{class:"px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 rounded-full animate-pulse"},"Cargando...",-1)]))):Me("",!0),s.showAlert?(J(),ee("div",yC,e[7]||(e[7]=[I("span",{class:"font-medium"},"¡Purrfecto!",-1),H(" Has ingresado con éxito. ")]))):Me("",!0),s.showAlertDanger?(J(),ee("div",vC,e[8]||(e[8]=[I("span",null,[I("strong",null,"Hubo un error"),H(", intenta de nuevo por favor.")],-1)]))):Me("",!0),$(h,{type:"submit"},{default:re(()=>e[9]||(e[9]=[H("Ingresar")])),_:1}),I("p",wC,[e[11]||(e[11]=H("¿Aún no tienes una cuenta? ")),$(d,{to:"/registro"},{default:re(()=>e[10]||(e[10]=[H("Registrate acá")])),_:1})])],32)]),e[12]||(e[12]=I("aside",{class:"flex-1 hidden md:block"},[I("img",{src:hC,class:"max-w-xl",alt:"Ilustración de perro caminando hacia la izquierda."})],-1))])}const TC=Be(dC,[["render",EC]]),IC={name:"BaseHeading2"},bC={class:"text-xl mb-4 font-medium"};function AC(t,e,n,r,s,i){return J(),ee("h3",bC,[Pn(t.$slots,"default")])}const RC=Be(IC,[["render",AC]]);let $f=()=>{},Cl=()=>{};const SC={name:"MyProfile",components:{BaseHeading1:Cn,BaseHeading2:dm,BaseHeading3:RC,CardPost:Fc,CustomRouterLink:Uc,CustomRouterLinkSecondary:va},data(){return{loggedUser:{id:null,email:null,displayName:null,location:null,petName:null,petSpecies:null,petAge:null,petDescription:null,petInterests:null},posts:[]}},methods:{getUserPosts(t){Cl=iP(t,e=>{this.posts=e})},getDateAndTime(t){if(t){const e=t.toDate().toLocaleDateString("es-AR",{day:"2-digit",month:"long",year:"numeric"});return`${t.toDate().toLocaleTimeString("es-AR",{hour:"2-digit",minute:"2-digit",hour12:!1})} - ${e}`}}},mounted(){$f=Dr(t=>{this.loggedUser=t,console.log(this.loggedUser.id),this.getUserPosts(this.loggedUser.id)})},unmounted(){$f(),Cl&&Cl()}},PC={class:"max-w-screen-xl mx-auto px-4 py-12 gap-12 overflow-hidden md:px-8"},CC={class:"flex flex-wrap items-center justify-between mt-2 mb-8"},xC={class:"w-full max-w-5xl bg-purple-light rounded-3xl shadow mb-6 flex flex-col p-5 mx-auto mt-5"},kC={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 items-center justify-center"},NC={class:"max-w-sm w-full mx-auto bg-purple-secondary rounded-3xl shadow mb-6 flex flex-col p-5 min-h-full"},VC={class:"mb-3"},DC={class:"mb-3"},OC={class:"mb-3"},MC={class:"max-w-sm w-full mx-auto bg-purple-secondary rounded-3xl shadow mb-6 flex flex-col p-5 min-h-full"},LC={class:"flex justify-between items-center"},UC={key:0,class:"bg-purple-light text-3xl p-2 rounded-full text-purple-dark"},FC={class:"mb-3"},$C={class:"mb-3"},BC={class:"mb-3"},jC={class:"mb-3"},qC={class:"mb-3"},HC={class:"my-12"},zC={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-10"},WC={key:0};function KC(t,e,n,r,s,i){const o=me("BaseHeading1"),l=me("CustomRouterLink"),c=me("BaseHeading2"),h=me("CustomRouterLinkSecondary"),d=me("CardPost");return J(),ee("section",PC,[I("header",CC,[$(o,null,{default:re(()=>e[0]||(e[0]=[H("Mi Perfil")])),_:1}),$(l,{to:"/mi-perfil/editar",class:"mt-2 sm:mt-0 px-8 py-2 font-medium text-lg bg-purple-light duration-150 hover:text-purple-dark hover:bg-purple-light/75 active:bg-purple-secondary active:text-white"},{default:re(()=>e[1]||(e[1]=[H(" Editar ")])),_:1})]),I("div",xC,[$(c,null,{default:re(()=>e[2]||(e[2]=[H("Biografía")])),_:1}),H(" "+je(s.loggedUser.bio||"Acá va tu biografía..."),1)]),I("section",kC,[I("article",NC,[$(c,null,{default:re(()=>e[3]||(e[3]=[H("Mis datos")])),_:1}),I("dl",null,[e[4]||(e[4]=I("dt",{class:"font-bold"},"Email:",-1)),I("dd",VC,je(s.loggedUser.email),1),e[5]||(e[5]=I("dt",{class:"font-bold"},"Nombre de Usuario:",-1)),I("dd",DC,je(s.loggedUser.displayName||"Sin especificar"),1),e[6]||(e[6]=I("dt",{class:"font-bold"},"Ubicación:",-1)),I("dd",OC,je(s.loggedUser.location||"Sin especificar"),1)])]),I("article",MC,[I("div",LC,[$(c,null,{default:re(()=>e[7]||(e[7]=[H("Mi mascota")])),_:1}),s.loggedUser.petIcon?(J(),ee("div",UC,[I("i",{class:ls(["fa",s.loggedUser.petIcon])},null,2)])):Me("",!0)]),I("dl",null,[e[8]||(e[8]=I("dt",{class:"font-bold"},"Nombre:",-1)),I("dd",FC,je(s.loggedUser.petName||"Sin especificar"),1),e[9]||(e[9]=I("dt",{class:"font-bold"},"Especie:",-1)),I("dd",$C,je(s.loggedUser.petSpecies||"Perro, gato, ave..."),1),e[10]||(e[10]=I("dt",{class:"font-bold"},"Edad:",-1)),I("dd",BC,je(s.loggedUser.petAge||"Sin especificar"),1),e[11]||(e[11]=I("dt",{class:"font-bold"},"Descripción física de tu Mascota:",-1)),I("dd",jC,je(s.loggedUser.petDescription||"Sin especificar"),1),e[12]||(e[12]=I("dt",{class:"font-bold"},"Intereses de tu Mascota:",-1)),I("dd",qC,je(s.loggedUser.petInterests||"Sin especificar"),1)])])]),I("section",HC,[$(c,null,{default:re(()=>e[13]||(e[13]=[H("Mis Publicaciones")])),_:1}),I("div",zC,[(J(!0),ee(Qe,null,Ts(s.posts,p=>(J(),cs(d,{key:p.id,post:p,getDateAndTime:i.getDateAndTime},{action:re(()=>[$(h,{to:`/feed/posteo/${p.id}`,class:"font-medium"},{default:re(()=>e[14]||(e[14]=[H("Ver comentarios")])),_:2},1032,["to"])]),_:2},1032,["post","getDateAndTime"]))),128)),s.posts.length===0?(J(),ee("p",WC," No has hecho ninguna publicación. ")):Me("",!0)])])])}const GC=Be(SC,[["render",KC]]);let Bf=()=>{};const QC={name:"MyProfileEdit",components:{BaseHeading1:Cn,CustomInput:ja,CustomLabel:qa,CustomTextarea:$_,ButtonPrimary:Is},data(){return{editData:{displayName:"",bio:"",location:"",petName:"",petSpecies:"",petAge:"",petDescription:"",petInterests:"",petIcon:""},availableIcons:["fa-dog","fa-cat","fa-fish","fa-crow","fa-paw"],editing:!1,showAlert:!1}},methods:{async handleSubmit(){this.editing=!0;try{await rP({...this.editData}),this.showAlert=!0,setTimeout(()=>{this.showAlert=!1,this.$router.push("/mi-perfil")},1500)}catch(t){console.error("No se pudo actualizar el perfil",t)}this.editing=!1},selectIcon(t){this.editData.petIcon=t}},mounted(){Bf=Dr(t=>this.editData={displayName:t.displayName||"",bio:t.bio||"",location:t.location||"",petName:t.petName||"",petSpecies:t.petSpecies||"",petAge:t.petAge||"",petDescription:t.petDescription||"",petInterests:t.petInterests||"",petIcon:t.petIcon||""})},unmounted(){Bf()}},YC={class:"max-w-screen-xl mx-auto px-4 py-12 gap-12 overflow-hidden md:px-8"},JC={class:"flex flex-wrap justify-start space-x-2 mt-4"},XC=["onClick"],ZC={key:0,class:"p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50",role:"alert"};function ex(t,e,n,r,s,i){const o=me("BaseHeading1"),l=me("CustomLabel"),c=me("CustomTextarea"),h=me("CustomInput"),d=me("ButtonPrimary");return J(),ee("section",YC,[$(o,null,{default:re(()=>e[9]||(e[9]=[H("Editar mi Perfil")])),_:1}),I("form",{action:"#",onSubmit:e[8]||(e[8]=xi((...p)=>i.handleSubmit&&i.handleSubmit(...p),["prevent"])),class:"space-y-6"},[I("div",null,[$(l,{for:"bio"},{default:re(()=>e[10]||(e[10]=[H("Biografía")])),_:1}),$(c,{id:"bio",modelValue:s.editData.bio,"onUpdate:modelValue":e[0]||(e[0]=p=>s.editData.bio=p),class:"resize-none"},null,8,["modelValue"])]),I("div",null,[$(l,{for:"displayName"},{default:re(()=>e[11]||(e[11]=[H("Nombre de usuario")])),_:1}),$(h,{type:"text",id:"displayName",modelValue:s.editData.displayName,"onUpdate:modelValue":e[1]||(e[1]=p=>s.editData.displayName=p),class:"w-full"},null,8,["modelValue"])]),I("div",null,[$(l,{for:"location"},{default:re(()=>e[12]||(e[12]=[H("Ubicación")])),_:1}),$(h,{type:"text",id:"location",modelValue:s.editData.location,"onUpdate:modelValue":e[2]||(e[2]=p=>s.editData.location=p),class:"w-full"},null,8,["modelValue"])]),I("div",null,[$(l,{for:"petName"},{default:re(()=>e[13]||(e[13]=[H("Nombre de tu mascota")])),_:1}),$(h,{type:"text",id:"petName",modelValue:s.editData.petName,"onUpdate:modelValue":e[3]||(e[3]=p=>s.editData.petName=p),class:"w-full"},null,8,["modelValue"])]),I("div",null,[$(l,{for:"petSpecies"},{default:re(()=>e[14]||(e[14]=[H("Especie de tu mascota")])),_:1}),$(h,{type:"text",id:"petSpecies",modelValue:s.editData.petSpecies,"onUpdate:modelValue":e[4]||(e[4]=p=>s.editData.petSpecies=p),class:"w-full"},null,8,["modelValue"])]),I("div",null,[$(l,{for:"petAge"},{default:re(()=>e[15]||(e[15]=[H("Edad de tu mascota")])),_:1}),$(h,{type:"text",id:"petAge",modelValue:s.editData.petAge,"onUpdate:modelValue":e[5]||(e[5]=p=>s.editData.petAge=p),class:"w-full"},null,8,["modelValue"])]),I("div",null,[$(l,{for:"petDescription"},{default:re(()=>e[16]||(e[16]=[H("Descripción física de tu mascota")])),_:1}),$(c,{id:"petDescription",modelValue:s.editData.petDescription,"onUpdate:modelValue":e[6]||(e[6]=p=>s.editData.petDescription=p),class:"resize-none"},null,8,["modelValue"])]),I("div",null,[$(l,{for:"petInterests"},{default:re(()=>e[17]||(e[17]=[H("Intereses de tu mascota")])),_:1}),$(c,{id:"petInterests",modelValue:s.editData.petInterests,"onUpdate:modelValue":e[7]||(e[7]=p=>s.editData.petInterests=p),class:"resize-none"},null,8,["modelValue"])]),I("div",null,[e[19]||(e[19]=I("p",null,"Selecciona un ícono para tu mascota",-1)),I("div",JC,[(J(!0),ee(Qe,null,Ts(s.availableIcons,p=>(J(),ee("button",{key:p,type:"button",onClick:g=>i.selectIcon(p),class:ls([{"bg-purple-light text-purple-dark":s.editData.petIcon===p},"p-2 rounded-full"])},[e[18]||(e[18]=I("span",{class:"sr-only"},"Botón de animal",-1)),I("i",{class:ls(["fa",p,"text-2xl"])},null,2)],10,XC))),128))])]),s.showAlert?(J(),ee("div",ZC,e[20]||(e[20]=[I("span",{class:"font-medium"},"¡Purrfecto!",-1),H(" Tu perfil ha sido actualizado con éxito. ")]))):Me("",!0),$(d,{type:"submit"},{default:re(()=>e[21]||(e[21]=[H("Actualizar mi Perfil")])),_:1})],32)])}const tx=Be(QC,[["render",ex]]),nx=[{path:"/",component:g0},{path:"/nosotros",component:U0},{path:"/registro",component:uC},{path:"/iniciar-sesion",component:TC},{path:"/feed",component:mP,meta:{requiresAuth:!0}},{path:"/feed/publicar",component:LP,meta:{requiresAuth:!0}},{path:"/feed/posteo/:postId",component:XP,props:!0},{path:"/mi-perfil",component:GC,meta:{requiresAuth:!0}},{path:"/mi-perfil/editar",component:tx,meta:{requiresAuth:!0}}],B_=FE({routes:nx,history:mE()});let j_={id:null,email:null,displayName:null,bio:null,career:null};Dr(t=>j_=t);B_.beforeEach((t,e)=>{if(t.meta.requiresAuth&&j_.id==null)return{path:"/iniciar-sesion"}});const rx={props:{loggedUser:{type:Object,required:!0,default:()=>({id:null,email:""})}},data(){return{showNav:!1}},methods:{toggleNav(){this.showNav=!this.showNav},handleLogout(){this.$emit("logout")},isCurrentRoute(t){return this.$route.path===t}}},sx={class:"flex justify-between items-center p-4 px-6 w-full bg-white filter drop-shadow-lg"},ix={class:"gap-2 items-center hidden md:flex"},ox={id:"dropdownNavbar",class:"z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow max-w-55 py-2"},ax={key:0,class:"text-sm text-gray-700 divide-y divide-gray-100","aria-labelledby":"dropdownNavbarLink"},lx={key:1,class:"text-sm text-gray-700","aria-labelledby":"dropdownNavbarLink"},cx={class:"text-xs block text-gray-dark items-center justify-between w-full transition-all px-3 hover:text-purple-primary pt-3"},ux={key:2,class:"py-1"},hx={key:0,class:"flex flex-col items-center gap-2 absolute top-16 left-0 w-full bg-purple-primary md:hidden py-3"},dx={class:"w-full"},fx={class:"w-full"},px={key:0,class:"w-full"},mx={key:1,class:"w-full"},gx={key:2,class:"w-full"},_x={class:"text-xs text-center block text-white w-full transition-all px-3 pt-3 tracking-wide"},yx={class:"text-semibold tracking-wider"},vx={key:3,class:"w-full"},wx={key:4,class:"w-full flex justify-center"},Ex={class:"py-1"};function Tx(t,e,n,r,s,i){const o=me("router-link");return J(),ee("nav",sx,[$(o,{to:"/",class:"text-xl font-bold text-purple-primary"},{default:re(()=>e[3]||(e[3]=[H("Petit")])),_:1}),I("ul",ix,[I("li",null,[$(o,{to:"/",class:"transition-all block p-3 text-lg hover:text-purple-primary","aria-current":i.isCurrentRoute("/")?"page":void 0},{default:re(()=>e[4]||(e[4]=[H(" Home ")])),_:1},8,["aria-current"])]),I("li",null,[$(o,{to:"/nosotros",class:"transition-all block p-3 text-lg hover:text-purple-primary","aria-current":i.isCurrentRoute("/nosotros")?"page":void 0},{default:re(()=>e[5]||(e[5]=[H(" Nosotros ")])),_:1},8,["aria-current"])]),I("li",null,[e[13]||(e[13]=I("button",{id:"dropdownNavbarLink","data-dropdown-toggle":"dropdownNavbar",class:"text-lg text-black flex items-center justify-between w-full transition-all p-3 hover:text-purple-primary"},[H(" Perfil "),I("svg",{class:"w-2.5 h-2.5 ms-2.5","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 10 6"},[I("path",{stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m1 1 4 4 4-4"})])],-1)),I("div",ox,[n.loggedUser.id?Me("",!0):(J(),ee("ul",ax,[I("li",null,[e[7]||(e[7]=I("p",{class:"text-xs block text-gray-dark items-center justify-between w-full transition-all px-3 hover:text-purple-primary pt-3"},"Regístrate y mejora aún más tu experiencia.",-1)),$(o,{to:"/registro",class:"block text-black items-center justify-between w-full transition-all px-3 hover:text-purple-primary pt-2 pb-3"},{default:re(()=>e[6]||(e[6]=[H("Registrarse")])),_:1})]),I("li",null,[e[9]||(e[9]=I("p",{class:"text-xs block text-gray-dark items-center justify-between w-full transition-all px-3 hover:text-purple-primary pt-3"},"¿Ya eres usuario? Ingresa a tu cuenta.",-1)),$(o,{to:"/iniciar-sesion",class:"block text-black items-center justify-between w-full transition-all px-3 hover:text-purple-primary pt-2 pb-3"},{default:re(()=>e[8]||(e[8]=[H("Iniciar sesión")])),_:1})])])),n.loggedUser.id?(J(),ee("ul",lx,[I("li",null,[I("p",cx,[e[10]||(e[10]=H("Hola, ")),I("strong",null,je(n.loggedUser.email),1)]),$(o,{to:"/mi-perfil",class:"block text-black items-center justify-between w-full transition-all px-3 hover:text-purple-primary pt-2 pb-3"},{default:re(()=>e[11]||(e[11]=[H("Tu perfil")])),_:1})]),I("li",null,[$(o,{to:"/feed",class:"block text-black items-center justify-between w-full transition-all px-3 hover:text-purple-primary pt-2 py-3"},{default:re(()=>e[12]||(e[12]=[H("Feed")])),_:1})])])):Me("",!0),n.loggedUser.id?(J(),ee("div",ux,[I("button",{onClick:e[0]||(e[0]=(...l)=>i.handleLogout&&i.handleLogout(...l)),class:"block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"}," Cerrar sesión ")])):Me("",!0)])])]),I("button",{class:"md:hidden",onClick:e[1]||(e[1]=(...l)=>i.toggleNav&&i.toggleNav(...l))},e[14]||(e[14]=[I("span",{class:"sr-only"},"Abrir nav",-1),I("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6 text-purple-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[I("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 6h16M4 12h16m-7 6h7"})],-1)])),s.showNav?(J(),ee("ul",hx,[I("li",dx,[$(o,{to:"/",class:"block p-3 py-5 text-center rounded-full hover:bg-purple-secondary text-white text-lg","aria-current":i.isCurrentRoute("/")?"page":void 0},{default:re(()=>e[15]||(e[15]=[H(" Home ")])),_:1},8,["aria-current"])]),I("li",fx,[$(o,{to:"/nosotros",class:"block p-3 py-5 text-center rounded-full hover:bg-purple-secondary text-white text-lg","aria-current":i.isCurrentRoute("/nosotros")?"page":void 0},{default:re(()=>e[16]||(e[16]=[H(" Nosotros ")])),_:1},8,["aria-current"])]),n.loggedUser.id?Me("",!0):(J(),ee("li",px,[e[18]||(e[18]=I("p",{class:"text-xs text-center block text-white w-full transition-all px-3 pt-3"},"Regístrate y mejora aún más tu experiencia.",-1)),$(o,{to:"/registro",class:"block p-3 text-center rounded-full hover:bg-purple-secondary text-white text-lg"},{default:re(()=>e[17]||(e[17]=[H("Registrarse")])),_:1})])),n.loggedUser.id?Me("",!0):(J(),ee("li",mx,[e[20]||(e[20]=I("p",{class:"text-xs text-center block text-white w-full transition-all px-3 pt-3"},"¿Ya eres usuario? Ingresa a tu cuenta.",-1)),$(o,{to:"/iniciar-sesion",class:"block p-3 text-center rounded-full hover:bg-purple-secondary text-white text-lg"},{default:re(()=>e[19]||(e[19]=[H("Iniciar sesión")])),_:1})])),n.loggedUser.id?(J(),ee("li",gx,[I("p",_x,[e[21]||(e[21]=H("Hola, ")),I("strong",yx,je(n.loggedUser.email),1)]),$(o,{to:"/mi-perfil",class:"block p-3 text-center rounded-full hover:bg-purple-secondary text-white text-lg"},{default:re(()=>e[22]||(e[22]=[H("Tu perfil")])),_:1})])):Me("",!0),n.loggedUser.id?(J(),ee("li",vx,[$(o,{to:"/feed",class:"block p-3 text-center rounded-full hover:bg-purple-secondary text-white text-lg"},{default:re(()=>e[23]||(e[23]=[H("Feed")])),_:1})])):Me("",!0),n.loggedUser.id?(J(),ee("li",wx,[I("div",Ex,[I("button",{onClick:e[2]||(e[2]=(...l)=>i.handleLogout&&i.handleLogout(...l)),class:"block p-3 rounded-full hover:bg-purple-secondary text-white text-lg"}," Cerrar sesión ")])])):Me("",!0)])):Me("",!0)])}const Ix=Be(rx,[["render",Tx],["__scopeId","data-v-06c192b3"]]),bx={props:{loggedUser:{type:Object,required:!0,default:()=>({id:null,email:""})}},methods:{handleLogout(){this.$emit("logout")},isCurrentRoute(t){return this.$route.path===t}}},Ax={class:""},Rx={class:"mx-auto w-fullz max-w-screen-xl p-4 py-6 lg:py-8"},Sx={class:"md:flex md:justify-between"},Px={class:"mb-6 md:mb-0"},Cx={class:"grid grid-cols-2 gap-8 sm:gap-6"},xx={class:"text-gray-dark font-medium"},kx={class:"mb-4"},Nx={key:0,class:"text-gray-dark font-medium"},Vx={class:"mb-4"},Dx={key:1,class:"text-gray-dark font-medium"},Ox={class:"mb-4"},Mx={class:""},Lx={class:"text-sm text-gray-dark sm:text-center"};function Ux(t,e,n,r,s,i){const o=me("router-link");return J(),ee("footer",Ax,[I("div",Rx,[I("div",Sx,[I("header",Px,[$(o,{to:"/",class:"text-xl font-bold text-purple-primary"},{default:re(()=>e[1]||(e[1]=[H("Petit")])),_:1})]),I("ul",Cx,[I("li",null,[e[4]||(e[4]=I("h2",{class:"mb-6 text-sm font-semibold text-gray-900 uppercase"},"Links",-1)),I("ul",xx,[I("li",kx,[$(o,{to:"/",class:"transition-all block hover:text-purple-primary","aria-current":i.isCurrentRoute("/")?"page":void 0},{default:re(()=>e[2]||(e[2]=[H(" Home ")])),_:1},8,["aria-current"])]),I("li",null,[$(o,{to:"/nosotros",class:"transition-all block hover:text-purple-primary","aria-current":i.isCurrentRoute("/nosotros")?"page":void 0},{default:re(()=>e[3]||(e[3]=[H(" Nosotros ")])),_:1},8,["aria-current"])])])]),I("li",null,[e[9]||(e[9]=I("h2",{class:"mb-6 text-sm font-semibold text-gray-900 uppercase"},"Perfil",-1)),n.loggedUser.id?Me("",!0):(J(),ee("ul",Nx,[I("li",Vx,[$(o,{to:"/registro",class:"transition-all block hover:text-purple-primary"},{default:re(()=>e[5]||(e[5]=[H("Registrarse")])),_:1})]),I("li",null,[$(o,{to:"/iniciar-sesion",class:"transition-all block hover:text-purple-primary"},{default:re(()=>e[6]||(e[6]=[H("Iniciar sesión")])),_:1})])])),n.loggedUser.id?(J(),ee("ul",Dx,[I("li",Ox,[$(o,{to:"/mi-perfil",class:"transition-all block hover:text-purple-primary"},{default:re(()=>e[7]||(e[7]=[H("Tu perfil")])),_:1})]),I("li",null,[$(o,{to:"/feed",class:"transition-all block hover:text-purple-primary"},{default:re(()=>e[8]||(e[8]=[H("Feed")])),_:1})]),I("li",null,[I("button",{onClick:e[0]||(e[0]=(...l)=>i.handleLogout&&i.handleLogout(...l)),class:"transition-all block hover:text-purple-primary pt-4 text-left"}," Cerrar sesión ")])])):Me("",!0)])])]),e[14]||(e[14]=I("hr",{class:"my-6 border-gray-200 sm:mx-auto lg:my-8"},null,-1)),I("div",Mx,[I("span",Lx,[e[11]||(e[11]=H("© 2024 ")),$(o,{to:"/",class:"hover:underline"},{default:re(()=>e[10]||(e[10]=[H("Petit")])),_:1}),e[12]||(e[12]=H(". Contenido con Fines educativos. Créditos del branding de la marca Petit a ")),e[13]||(e[13]=I("a",{target:"_blank",href:"https://www.behance.net/gallery/205881797/Pet-App-Case-Study-UXUI-Design?tracking_source=search_projects|pet+app+design&l=7"},"Pierina Fiorentini.",-1))])])])])}const Fx=Be(bx,[["render",Ux]]),$x={name:"App",components:{BaseNav:Ix,BaseFooter:Fx},data(){return{loggedUser:{id:null,email:null}}},methods:{handleLogout(){sP(),this.$router.push("/iniciar-sesion")}},mounted(){Dr(t=>this.loggedUser=t)}},Bx={class:""};function jx(t,e,n,r,s,i){const o=me("BaseNav"),l=me("router-view"),c=me("BaseFooter");return J(),ee(Qe,null,[$(o,{loggedUser:s.loggedUser,onLogout:i.handleLogout},null,8,["loggedUser","onLogout"]),I("main",Bx,[$(l)]),$(c,{class:"mt-5",loggedUser:s.loggedUser,onLogout:i.handleLogout},null,8,["loggedUser","onLogout"])],64)}const qx=Be($x,[["render",jx]]),q_=Ow(qx);q_.use(B_);q_.mount("#app");
