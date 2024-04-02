(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qu(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const je={},Is=[],nn=()=>{},ZE=()=>!1,Qa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Hu=t=>t.startsWith("onUpdate:"),It=Object.assign,zu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ew=Object.prototype.hasOwnProperty,Ae=(t,e)=>ew.call(t,e),he=Array.isArray,bs=t=>Ya(t)==="[object Map]",Cg=t=>Ya(t)==="[object Set]",fe=t=>typeof t=="function",it=t=>typeof t=="string",Qs=t=>typeof t=="symbol",ze=t=>t!==null&&typeof t=="object",kg=t=>(ze(t)||fe(t))&&fe(t.then)&&fe(t.catch),Og=Object.prototype.toString,Ya=t=>Og.call(t),tw=t=>Ya(t).slice(8,-1),Vg=t=>Ya(t)==="[object Object]",Wu=t=>it(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ti=qu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},nw=/-(\w)/g,Nn=Xa(t=>t.replace(nw,(e,n)=>n?n.toUpperCase():"")),rw=/\B([A-Z])/g,Ys=Xa(t=>t.replace(rw,"-$1").toLowerCase()),Ja=Xa(t=>t.charAt(0).toUpperCase()+t.slice(1)),rc=Xa(t=>t?`on${Ja(t)}`:""),Er=(t,e)=>!Object.is(t,e),sc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},ga=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},sw=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Bd;const Ng=()=>Bd||(Bd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Za(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=it(r)?lw(r):Za(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(it(t)||ze(t))return t}const iw=/;(?![^(]*\))/g,ow=/:([^]+)/,aw=/\/\*[^]*?\*\//g;function lw(t){const e={};return t.replace(aw,"").split(iw).forEach(n=>{if(n){const r=n.split(ow);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xt(t){let e="";if(it(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=Xt(t[n]);r&&(e+=r+" ")}else if(ze(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const cw="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",uw=qu(cw);function Dg(t){return!!t||t===""}const jn=t=>it(t)?t:t==null?"":he(t)||ze(t)&&(t.toString===Og||!fe(t.toString))?JSON.stringify(t,xg,2):String(t),xg=(t,e)=>e&&e.__v_isRef?xg(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ic(r,i)+" =>"]=s,n),{})}:Cg(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ic(n))}:Qs(e)?ic(e):ze(e)&&!he(e)&&!Vg(e)?String(e):e,ic=(t,e="")=>{var n;return Qs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Gt;class Mg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Gt,!e&&Gt&&(this.index=(Gt.scopes||(Gt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Gt;try{return Gt=this,e()}finally{Gt=n}}}on(){Gt=this}off(){Gt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Lg(t){return new Mg(t)}function hw(t,e=Gt){e&&e.active&&e.effects.push(t)}function Ug(){return Gt}function dw(t){Gt&&Gt.cleanups.push(t)}let Hr;class Ku{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,hw(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,is();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(fw(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),os()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=pr,n=Hr;try{return pr=!0,Hr=this,this._runnings++,jd(this),this.fn()}finally{qd(this),this._runnings--,Hr=n,pr=e}}stop(){var e;this.active&&(jd(this),qd(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function fw(t){return t.value}function jd(t){t._trackId++,t._depsLength=0}function qd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Fg(t.deps[e],t);t.deps.length=t._depsLength}}function Fg(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let pr=!0,Uc=0;const $g=[];function is(){$g.push(pr),pr=!1}function os(){const t=$g.pop();pr=t===void 0?!0:t}function Gu(){Uc++}function Qu(){for(Uc--;!Uc&&Fc.length;)Fc.shift()()}function Bg(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Fg(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Fc=[];function jg(t,e,n){Gu();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&Fc.push(r.scheduler)))}Qu()}const qg=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ma=new WeakMap,zr=Symbol(""),$c=Symbol("");function Kt(t,e,n){if(pr&&Hr){let r=ma.get(t);r||ma.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=qg(()=>r.delete(n))),Bg(Hr,s)}}function qn(t,e,n,r,s,i){const o=ma.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&he(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Qs(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":he(t)?Wu(n)&&a.push(o.get("length")):(a.push(o.get(zr)),bs(t)&&a.push(o.get($c)));break;case"delete":he(t)||(a.push(o.get(zr)),bs(t)&&a.push(o.get($c)));break;case"set":bs(t)&&a.push(o.get(zr));break}Gu();for(const l of a)l&&jg(l,4);Qu()}function pw(t,e){var n;return(n=ma.get(t))==null?void 0:n.get(e)}const gw=qu("__proto__,__v_isRef,__isVue"),Hg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qs)),Hd=mw();function mw(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let i=0,o=this.length;i<o;i++)Kt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){is(),Gu();const r=Se(this)[e].apply(this,n);return Qu(),os(),r}}),t}function _w(t){const e=Se(this);return Kt(e,"has",t),e.hasOwnProperty(t)}class zg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?kw:Qg:i?Gg:Kg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){if(o&&Ae(Hd,n))return Reflect.get(Hd,n,r);if(n==="hasOwnProperty")return _w}const a=Reflect.get(e,n,r);return(Qs(n)?Hg.has(n):gw(n))||(s||Kt(e,"get",n),i)?a:Ke(a)?o&&Wu(n)?a:a.value:ze(a)?s?Ju(a):Kn(a):a}}class Wg extends zg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=xs(i);if(!_a(r)&&!xs(r)&&(i=Se(i),r=Se(r)),!he(e)&&Ke(i)&&!Ke(r))return l?!1:(i.value=r,!0)}const o=he(e)&&Wu(n)?Number(n)<e.length:Ae(e,n),a=Reflect.set(e,n,r,s);return e===Se(s)&&(o?Er(r,i)&&qn(e,"set",n,r):qn(e,"add",n,r)),a}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&qn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Qs(n)||!Hg.has(n))&&Kt(e,"has",n),r}ownKeys(e){return Kt(e,"iterate",he(e)?"length":zr),Reflect.ownKeys(e)}}class yw extends zg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const vw=new Wg,Ew=new yw,ww=new Wg(!0),Yu=t=>t,el=t=>Reflect.getPrototypeOf(t);function Mo(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(Er(e,i)&&Kt(s,"get",e),Kt(s,"get",i));const{has:o}=el(s),a=r?Yu:n?eh:Mi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function Lo(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(Er(t,s)&&Kt(r,"has",t),Kt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Uo(t,e=!1){return t=t.__v_raw,!e&&Kt(Se(t),"iterate",zr),Reflect.get(t,"size",t)}function zd(t){t=Se(t);const e=Se(this);return el(e).has.call(e,t)||(e.add(t),qn(e,"add",t,t)),this}function Wd(t,e){e=Se(e);const n=Se(this),{has:r,get:s}=el(n);let i=r.call(n,t);i||(t=Se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Er(e,o)&&qn(n,"set",t,e):qn(n,"add",t,e),this}function Kd(t){const e=Se(this),{has:n,get:r}=el(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&qn(e,"delete",t,void 0),i}function Gd(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&qn(t,"clear",void 0,void 0),n}function Fo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=Se(o),l=e?Yu:t?eh:Mi;return!t&&Kt(a,"iterate",zr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function $o(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=bs(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Yu:e?eh:Mi;return!e&&Kt(i,"iterate",l?$c:zr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Zn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Tw(){const t={get(i){return Mo(this,i)},get size(){return Uo(this)},has:Lo,add:zd,set:Wd,delete:Kd,clear:Gd,forEach:Fo(!1,!1)},e={get(i){return Mo(this,i,!1,!0)},get size(){return Uo(this)},has:Lo,add:zd,set:Wd,delete:Kd,clear:Gd,forEach:Fo(!1,!0)},n={get(i){return Mo(this,i,!0)},get size(){return Uo(this,!0)},has(i){return Lo.call(this,i,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:Fo(!0,!1)},r={get(i){return Mo(this,i,!0,!0)},get size(){return Uo(this,!0)},has(i){return Lo.call(this,i,!0)},add:Zn("add"),set:Zn("set"),delete:Zn("delete"),clear:Zn("clear"),forEach:Fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=$o(i,!1,!1),n[i]=$o(i,!0,!1),e[i]=$o(i,!1,!0),r[i]=$o(i,!0,!0)}),[t,n,e,r]}const[Iw,bw,Aw,Rw]=Tw();function Xu(t,e){const n=e?t?Rw:Aw:t?bw:Iw;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const Sw={get:Xu(!1,!1)},Pw={get:Xu(!1,!0)},Cw={get:Xu(!0,!1)},Kg=new WeakMap,Gg=new WeakMap,Qg=new WeakMap,kw=new WeakMap;function Ow(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vw(t){return t.__v_skip||!Object.isExtensible(t)?0:Ow(tw(t))}function Kn(t){return xs(t)?t:Zu(t,!1,vw,Sw,Kg)}function Yg(t){return Zu(t,!1,ww,Pw,Gg)}function Ju(t){return Zu(t,!0,Ew,Cw,Qg)}function Zu(t,e,n,r,s){if(!ze(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Vw(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function gr(t){return xs(t)?gr(t.__v_raw):!!(t&&t.__v_isReactive)}function xs(t){return!!(t&&t.__v_isReadonly)}function _a(t){return!!(t&&t.__v_isShallow)}function Xg(t){return gr(t)||xs(t)}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function tl(t){return Object.isExtensible(t)&&ga(t,"__v_skip",!0),t}const Mi=t=>ze(t)?Kn(t):t,eh=t=>ze(t)?Ju(t):t;class Jg{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Ku(()=>e(this._value),()=>na(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Se(this);return(!e._cacheable||e.effect.dirty)&&Er(e._value,e._value=e.effect.run())&&na(e,4),Zg(e),e.effect._dirtyLevel>=2&&na(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Nw(t,e,n=!1){let r,s;const i=fe(t);return i?(r=t,s=nn):(r=t.get,s=t.set),new Jg(r,s,i||!s,n)}function Zg(t){var e;pr&&Hr&&(t=Se(t),Bg(Hr,(e=t.dep)!=null?e:t.dep=qg(()=>t.dep=void 0,t instanceof Jg?t:void 0)))}function na(t,e=4,n){t=Se(t);const r=t.dep;r&&jg(r,e)}function Ke(t){return!!(t&&t.__v_isRef===!0)}function Mt(t){return tm(t,!1)}function em(t){return tm(t,!0)}function tm(t,e){return Ke(t)?t:new Dw(t,e)}class Dw{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:Mi(e)}get value(){return Zg(this),this._value}set value(e){const n=this.__v_isShallow||_a(e)||xs(e);e=n?e:Se(e),Er(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Mi(e),na(this,4))}}function Re(t){return Ke(t)?t.value:t}function Ce(t){return fe(t)?t():Re(t)}const xw={get:(t,e,n)=>Re(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ke(s)&&!Ke(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function nm(t){return gr(t)?t:new Proxy(t,xw)}function Mw(t){const e=he(t)?new Array(t.length):{};for(const n in t)e[n]=rm(t,n);return e}class Lw{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return pw(Se(this._object),this._key)}}class Uw{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Dr(t,e,n){return Ke(t)?t:fe(t)?new Uw(t):ze(t)&&arguments.length>1?rm(t,e,n):Mt(t)}function rm(t,e,n){const r=t[e];return Ke(r)?r:new Lw(t,e,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function mr(t,e,n,r){try{return r?t(...r):t()}catch(s){nl(s,e,n)}}function hn(t,e,n,r){if(fe(t)){const i=mr(t,e,n,r);return i&&kg(i)&&i.catch(o=>{nl(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(hn(t[i],e,n,r));return s}function nl(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){mr(l,null,10,[t,o,a]);return}}Fw(t,n,s,r)}function Fw(t,e,n,r=!0){console.error(t)}let Li=!1,Bc=!1;const Pt=[];let wn=0;const As=[];let sr=null,xr=0;const sm=Promise.resolve();let th=null;function Qt(t){const e=th||sm;return t?e.then(this?t.bind(this):t):e}function $w(t){let e=wn+1,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=Ui(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function nh(t){(!Pt.length||!Pt.includes(t,Li&&t.allowRecurse?wn+1:wn))&&(t.id==null?Pt.push(t):Pt.splice($w(t.id),0,t),im())}function im(){!Li&&!Bc&&(Bc=!0,th=sm.then(am))}function Bw(t){const e=Pt.indexOf(t);e>wn&&Pt.splice(e,1)}function jw(t){he(t)?As.push(...t):(!sr||!sr.includes(t,t.allowRecurse?xr+1:xr))&&As.push(t),im()}function Qd(t,e,n=Li?wn+1:0){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r()}}}function om(t){if(As.length){const e=[...new Set(As)].sort((n,r)=>Ui(n)-Ui(r));if(As.length=0,sr){sr.push(...e);return}for(sr=e,xr=0;xr<sr.length;xr++)sr[xr]();sr=null,xr=0}}const Ui=t=>t.id==null?1/0:t.id,qw=(t,e)=>{const n=Ui(t)-Ui(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function am(t){Bc=!1,Li=!0,Pt.sort(qw);try{for(wn=0;wn<Pt.length;wn++){const e=Pt[wn];e&&e.active!==!1&&mr(e,null,14)}}finally{wn=0,Pt.length=0,om(),Li=!1,th=null,(Pt.length||As.length)&&am()}}function Hw(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||je;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||je;d&&(s=n.map(f=>it(f)?f.trim():f)),h&&(s=n.map(sw))}let a,l=r[a=rc(e)]||r[a=rc(Nn(e))];!l&&i&&(l=r[a=rc(Ys(e))]),l&&hn(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,hn(c,t,6,s)}}function lm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!fe(t)){const l=c=>{const u=lm(c,e,!0);u&&(a=!0,It(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(ze(t)&&r.set(t,null),null):(he(i)?i.forEach(l=>o[l]=null):It(o,i),ze(t)&&r.set(t,o),o)}function rl(t,e){return!t||!Qa(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,Ys(e))||Ae(t,e))}let Ct=null,cm=null;function ya(t){const e=Ct;return Ct=t,cm=t&&t.type.__scopeId||null,e}function Hn(t,e=Ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&af(-1);const i=ya(e);let o;try{o=t(...s)}finally{ya(i),r._d&&af(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function oc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:v,inheritAttrs:T}=t;let y,S;const k=ya(t);try{if(n.shapeFlag&4){const $=s||r,X=$;y=En(u.call(X,$,h,i,f,d,v)),S=l}else{const $=e;y=En($.length>1?$(i,{attrs:l,slots:a,emit:c}):$(i,null)),S=e.props?l:zw(l)}}catch($){bi.length=0,nl($,t,1),y=ce(Gr)}let O=y;if(S&&T!==!1){const $=Object.keys(S),{shapeFlag:X}=O;$.length&&X&7&&(o&&$.some(Hu)&&(S=Ww(S,o)),O=Ms(O,S))}return n.dirs&&(O=Ms(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),y=O,ya(k),y}const zw=t=>{let e;for(const n in t)(n==="class"||n==="style"||Qa(n))&&((e||(e={}))[n]=t[n]);return e},Ww=(t,e)=>{const n={};for(const r in t)(!Hu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Kw(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Yd(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!rl(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Yd(r,o,c):!0:!!o;return!1}function Yd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!rl(n,i))return!0}return!1}function Gw({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const rh="components",Qw="directives";function ft(t,e){return ih(rh,t,!0,e)||t}const um=Symbol.for("v-ndc");function sh(t){return it(t)?ih(rh,t,!1)||t:t||um}function Yw(t){return ih(Qw,t)}function ih(t,e,n=!0,r=!1){const s=Ct||dt;if(s){const i=s.type;if(t===rh){const a=j0(i,!1);if(a&&(a===e||a===Nn(e)||a===Ja(Nn(e))))return i}const o=Xd(s[t]||i[t],e)||Xd(s.appContext[t],e);return!o&&r?i:o}}function Xd(t,e){return t&&(t[e]||t[Nn(e)]||t[Ja(Nn(e))])}const Xw=t=>t.__isSuspense;function Jw(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):jw(t)}const Zw=Symbol.for("v-scx"),e0=()=>sn(Zw);function t0(t,e){return oh(t,null,e)}const Bo={};function rn(t,e,n){return oh(t,e,n)}function oh(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=je){if(e&&i){const M=e;e=(...le)=>{M(...le),X()}}const l=dt,c=M=>r===!0?M:Ur(M,r===!1?1:void 0);let u,h=!1,d=!1;if(Ke(t)?(u=()=>t.value,h=_a(t)):gr(t)?(u=()=>c(t),h=!0):he(t)?(d=!0,h=t.some(M=>gr(M)||_a(M)),u=()=>t.map(M=>{if(Ke(M))return M.value;if(gr(M))return c(M);if(fe(M))return mr(M,l,2)})):fe(t)?e?u=()=>mr(t,l,2):u=()=>(f&&f(),hn(t,l,3,[v])):u=nn,e&&r){const M=u;u=()=>Ur(M())}let f,v=M=>{f=O.onStop=()=>{mr(M,l,4),f=O.onStop=void 0}},T;if(cl)if(v=nn,e?n&&hn(e,l,3,[u(),d?[]:void 0,v]):u(),s==="sync"){const M=e0();T=M.__watcherHandles||(M.__watcherHandles=[])}else return nn;let y=d?new Array(t.length).fill(Bo):Bo;const S=()=>{if(!(!O.active||!O.dirty))if(e){const M=O.run();(r||h||(d?M.some((le,G)=>Er(le,y[G])):Er(M,y)))&&(f&&f(),hn(e,l,3,[M,y===Bo?void 0:d&&y[0]===Bo?[]:y,v]),y=M)}else O.run()};S.allowRecurse=!!e;let k;s==="sync"?k=S:s==="post"?k=()=>jt(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),k=()=>nh(S));const O=new Ku(u,nn,k),$=Ug(),X=()=>{O.stop(),$&&zu($.effects,O)};return e?n?S():y=O.run():s==="post"?jt(O.run.bind(O),l&&l.suspense):O.run(),T&&T.push(X),X}function n0(t,e,n){const r=this.proxy,s=it(t)?t.includes(".")?hm(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=lo(this),a=oh(s,i.bind(r),n);return o(),a}function hm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Ur(t,e,n=0,r){if(!ze(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ke(t))Ur(t.value,e,n,r);else if(he(t))for(let s=0;s<t.length;s++)Ur(t[s],e,n,r);else if(Cg(t)||bs(t))t.forEach(s=>{Ur(s,e,n,r)});else if(Vg(t))for(const s in t)Ur(t[s],e,n,r);return t}function jc(t,e){if(Ct===null)return t;const n=ul(Ct)||Ct.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=je]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&Ur(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function kr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(is(),hn(l,n,8,[t.el,a,t,e]),os())}}/*! #__NO_SIDE_EFFECTS__ */function ao(t,e){return fe(t)?It({name:t.name},e,{setup:t}):t}const ra=t=>!!t.type.__asyncLoader,dm=t=>t.type.__isKeepAlive;function r0(t,e){fm(t,"a",e)}function s0(t,e){fm(t,"da",e)}function fm(t,e,n=dt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(sl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)dm(s.parent.vnode)&&i0(r,e,n,s),s=s.parent}}function i0(t,e,n,r){const s=sl(e,t,r,!0);gm(()=>{zu(r[e],s)},n)}function sl(t,e,n=dt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;is();const a=lo(n),l=hn(e,n,t,o);return a(),os(),l});return r?s.unshift(i):s.push(i),i}}const Xn=t=>(e,n=dt)=>(!cl||t==="sp")&&sl(t,(...r)=>e(...r),n),o0=Xn("bm"),ah=Xn("m"),a0=Xn("bu"),l0=Xn("u"),pm=Xn("bum"),gm=Xn("um"),c0=Xn("sp"),u0=Xn("rtg"),h0=Xn("rtc");function d0(t,e=dt){sl("ec",t,e)}function il(t,e,n,r){let s;const i=n&&n[r];if(he(t)||it(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ze(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const qc=t=>t?Cm(t)?ul(t)||t.proxy:qc(t.parent):null,Ii=It(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>qc(t.parent),$root:t=>qc(t.root),$emit:t=>t.emit,$options:t=>lh(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,nh(t.update)}),$nextTick:t=>t.n||(t.n=Qt.bind(t.proxy)),$watch:t=>n0.bind(t)}),ac=(t,e)=>t!==je&&!t.__isScriptSetup&&Ae(t,e),f0={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(ac(r,e))return o[e]=1,r[e];if(s!==je&&Ae(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&Ae(c,e))return o[e]=3,i[e];if(n!==je&&Ae(n,e))return o[e]=4,n[e];Hc&&(o[e]=0)}}const u=Ii[e];let h,d;if(u)return e==="$attrs"&&Kt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==je&&Ae(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ae(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return ac(s,e)?(s[e]=n,!0):r!==je&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==je&&Ae(t,o)||ac(e,o)||(a=i[0])&&Ae(a,o)||Ae(r,o)||Ae(Ii,o)||Ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Jd(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Hc=!0;function p0(t){const e=lh(t),n=t.proxy,r=t.ctx;Hc=!1,e.beforeCreate&&Zd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:v,activated:T,deactivated:y,beforeDestroy:S,beforeUnmount:k,destroyed:O,unmounted:$,render:X,renderTracked:M,renderTriggered:le,errorCaptured:G,serverPrefetch:Q,expose:ie,inheritAttrs:Me,components:Ge,directives:Le,filters:Ze}=e;if(c&&g0(c,r,null),o)for(const pe in o){const ge=o[pe];fe(ge)&&(r[pe]=ge.bind(n))}if(s){const pe=s.call(n,n);ze(pe)&&(t.data=Kn(pe))}if(Hc=!0,i)for(const pe in i){const ge=i[pe],lt=fe(ge)?ge.bind(n,n):fe(ge.get)?ge.get.bind(n,n):nn,$t=!fe(ge)&&fe(ge.set)?ge.set.bind(n):nn,Nt=ye({get:lt,set:$t});Object.defineProperty(r,pe,{enumerable:!0,configurable:!0,get:()=>Nt.value,set:mt=>Nt.value=mt})}if(a)for(const pe in a)mm(a[pe],r,n,pe);if(l){const pe=fe(l)?l.call(n):l;Reflect.ownKeys(pe).forEach(ge=>{Ss(ge,pe[ge])})}u&&Zd(u,t,"c");function H(pe,ge){he(ge)?ge.forEach(lt=>pe(lt.bind(n))):ge&&pe(ge.bind(n))}if(H(o0,h),H(ah,d),H(a0,f),H(l0,v),H(r0,T),H(s0,y),H(d0,G),H(h0,M),H(u0,le),H(pm,k),H(gm,$),H(c0,Q),he(ie))if(ie.length){const pe=t.exposed||(t.exposed={});ie.forEach(ge=>{Object.defineProperty(pe,ge,{get:()=>n[ge],set:lt=>n[ge]=lt})})}else t.exposed||(t.exposed={});X&&t.render===nn&&(t.render=X),Me!=null&&(t.inheritAttrs=Me),Ge&&(t.components=Ge),Le&&(t.directives=Le)}function g0(t,e,n=nn){he(t)&&(t=zc(t));for(const r in t){const s=t[r];let i;ze(s)?"default"in s?i=sn(s.from||r,s.default,!0):i=sn(s.from||r):i=sn(s),Ke(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Zd(t,e,n){hn(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mm(t,e,n,r){const s=r.includes(".")?hm(n,r):()=>n[r];if(it(t)){const i=e[t];fe(i)&&rn(s,i)}else if(fe(t))rn(s,t.bind(n));else if(ze(t))if(he(t))t.forEach(i=>mm(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&rn(s,i,t)}}function lh(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>va(l,c,o,!0)),va(l,e,o)),ze(e)&&i.set(e,l),l}function va(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&va(t,i,n,!0),s&&s.forEach(o=>va(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=m0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const m0={data:ef,props:tf,emits:tf,methods:fi,computed:fi,beforeCreate:xt,created:xt,beforeMount:xt,mounted:xt,beforeUpdate:xt,updated:xt,beforeDestroy:xt,beforeUnmount:xt,destroyed:xt,unmounted:xt,activated:xt,deactivated:xt,errorCaptured:xt,serverPrefetch:xt,components:fi,directives:fi,watch:y0,provide:ef,inject:_0};function ef(t,e){return e?t?function(){return It(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function _0(t,e){return fi(zc(t),zc(e))}function zc(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function xt(t,e){return t?[...new Set([].concat(t,e))]:e}function fi(t,e){return t?It(Object.create(null),t,e):e}function tf(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:It(Object.create(null),Jd(t),Jd(e??{})):e}function y0(t,e){if(!t)return e;if(!e)return t;const n=It(Object.create(null),t);for(const r in e)n[r]=xt(t[r],e[r]);return n}function _m(){return{app:null,config:{isNativeTag:ZE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let v0=0;function E0(t,e){return function(r,s=null){fe(r)||(r=It({},r)),s!=null&&!ze(s)&&(s=null);const i=_m(),o=new WeakSet;let a=!1;const l=i.app={_uid:v0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:H0,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&fe(c.install)?(o.add(c),c.install(l,...u)):fe(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=ce(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,ul(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=Rs;Rs=l;try{return c()}finally{Rs=u}}};return l}}let Rs=null;function Ss(t,e){if(dt){let n=dt.provides;const r=dt.parent&&dt.parent.provides;r===n&&(n=dt.provides=Object.create(r)),n[t]=e}}function sn(t,e,n=!1){const r=dt||Ct;if(r||Rs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Rs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}function w0(){return!!(dt||Ct||Rs)}function T0(t,e,n,r=!1){const s={},i={};ga(i,al,1),t.propsDefaults=Object.create(null),ym(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Yg(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function I0(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=Se(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(rl(t.emitsOptions,d))continue;const f=e[d];if(l)if(Ae(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const v=Nn(d);s[v]=Wc(l,a,v,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{ym(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!Ae(e,h)&&((u=Ys(h))===h||!Ae(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Wc(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!Ae(e,h))&&(delete i[h],c=!0)}c&&qn(t,"set","$attrs")}function ym(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ti(l))continue;const c=e[l];let u;s&&Ae(s,u=Nn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:rl(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=Se(n),c=a||je;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Wc(s,l,h,c[h],t,!Ae(c,h))}}return o}function Wc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=Ae(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=lo(s);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ys(n))&&(r=!0))}return r}function vm(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!fe(t)){const u=h=>{l=!0;const[d,f]=vm(h,e,!0);It(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return ze(t)&&r.set(t,Is),Is;if(he(i))for(let u=0;u<i.length;u++){const h=Nn(i[u]);nf(h)&&(o[h]=je)}else if(i)for(const u in i){const h=Nn(u);if(nf(h)){const d=i[u],f=o[h]=he(d)||fe(d)?{type:d}:It({},d);if(f){const v=of(Boolean,f.type),T=of(String,f.type);f[0]=v>-1,f[1]=T<0||v<T,(v>-1||Ae(f,"default"))&&a.push(h)}}}const c=[o,a];return ze(t)&&r.set(t,c),c}function nf(t){return t[0]!=="$"&&!Ti(t)}function rf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function sf(t,e){return rf(t)===rf(e)}function of(t,e){return he(e)?e.findIndex(n=>sf(n,t)):fe(e)&&sf(e,t)?0:-1}const Em=t=>t[0]==="_"||t==="$stable",ch=t=>he(t)?t.map(En):[En(t)],b0=(t,e,n)=>{if(e._n)return e;const r=Hn((...s)=>ch(e(...s)),n);return r._c=!1,r},wm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Em(s))continue;const i=t[s];if(fe(i))e[s]=b0(s,i,r);else if(i!=null){const o=ch(i);e[s]=()=>o}}},Tm=(t,e)=>{const n=ch(e);t.slots.default=()=>n},A0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=Se(e),ga(e,"_",n)):wm(e,t.slots={})}else t.slots={},e&&Tm(t,e);ga(t.slots,al,1)},R0=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=je;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(It(s,e),!n&&a===1&&delete s._):(i=!e.$stable,wm(e,s)),o=e}else e&&(Tm(t,e),o={default:1});if(i)for(const a in s)!Em(a)&&o[a]==null&&delete s[a]};function Kc(t,e,n,r,s=!1){if(he(t)){t.forEach((d,f)=>Kc(d,e&&(he(e)?e[f]:e),n,r,s));return}if(ra(r)&&!s)return;const i=r.shapeFlag&4?ul(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===je?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(it(c)?(u[c]=null,Ae(h,c)&&(h[c]=null)):Ke(c)&&(c.value=null)),fe(l))mr(l,a,12,[o,u]);else{const d=it(l),f=Ke(l);if(d||f){const v=()=>{if(t.f){const T=d?Ae(h,l)?h[l]:u[l]:l.value;s?he(T)&&zu(T,i):he(T)?T.includes(i)||T.push(i):d?(u[l]=[i],Ae(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ae(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(v.id=-1,jt(v,n)):v()}}}const jt=Jw;function S0(t){return P0(t)}function P0(t,e){const n=Ng();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=nn,insertStaticContent:v}=t,T=(p,g,E,R=null,I=null,D=null,U=void 0,x=null,F=!!g.dynamicChildren)=>{if(p===g)return;p&&!oi(p,g)&&(R=w(p),mt(p,I,D,!0),p=null),g.patchFlag===-2&&(F=!1,g.dynamicChildren=null);const{type:C,ref:W,shapeFlag:ne}=g;switch(C){case ol:y(p,g,E,R);break;case Gr:S(p,g,E,R);break;case sa:p==null&&k(g,E,R,U);break;case ht:Ge(p,g,E,R,I,D,U,x,F);break;default:ne&1?X(p,g,E,R,I,D,U,x,F):ne&6?Le(p,g,E,R,I,D,U,x,F):(ne&64||ne&128)&&C.process(p,g,E,R,I,D,U,x,F,z)}W!=null&&I&&Kc(W,p&&p.ref,D,g||p,!g)},y=(p,g,E,R)=>{if(p==null)r(g.el=a(g.children),E,R);else{const I=g.el=p.el;g.children!==p.children&&c(I,g.children)}},S=(p,g,E,R)=>{p==null?r(g.el=l(g.children||""),E,R):g.el=p.el},k=(p,g,E,R)=>{[p.el,p.anchor]=v(p.children,g,E,R,p.el,p.anchor)},O=({el:p,anchor:g},E,R)=>{let I;for(;p&&p!==g;)I=d(p),r(p,E,R),p=I;r(g,E,R)},$=({el:p,anchor:g})=>{let E;for(;p&&p!==g;)E=d(p),s(p),p=E;s(g)},X=(p,g,E,R,I,D,U,x,F)=>{g.type==="svg"?U="svg":g.type==="math"&&(U="mathml"),p==null?M(g,E,R,I,D,U,x,F):Q(p,g,I,D,U,x,F)},M=(p,g,E,R,I,D,U,x)=>{let F,C;const{props:W,shapeFlag:ne,transition:Z,dirs:oe}=p;if(F=p.el=o(p.type,D,W&&W.is,W),ne&8?u(F,p.children):ne&16&&G(p.children,F,null,R,I,lc(p,D),U,x),oe&&kr(p,null,R,"created"),le(F,p,p.scopeId,U,R),W){for(const Oe in W)Oe!=="value"&&!Ti(Oe)&&i(F,Oe,null,W[Oe],D,p.children,R,I,ee);"value"in W&&i(F,"value",null,W.value,D),(C=W.onVnodeBeforeMount)&&vn(C,R,p)}oe&&kr(p,null,R,"beforeMount");const ve=C0(I,Z);ve&&Z.beforeEnter(F),r(F,g,E),((C=W&&W.onVnodeMounted)||ve||oe)&&jt(()=>{C&&vn(C,R,p),ve&&Z.enter(F),oe&&kr(p,null,R,"mounted")},I)},le=(p,g,E,R,I)=>{if(E&&f(p,E),R)for(let D=0;D<R.length;D++)f(p,R[D]);if(I){let D=I.subTree;if(g===D){const U=I.vnode;le(p,U,U.scopeId,U.slotScopeIds,I.parent)}}},G=(p,g,E,R,I,D,U,x,F=0)=>{for(let C=F;C<p.length;C++){const W=p[C]=x?ir(p[C]):En(p[C]);T(null,W,g,E,R,I,D,U,x)}},Q=(p,g,E,R,I,D,U)=>{const x=g.el=p.el;let{patchFlag:F,dynamicChildren:C,dirs:W}=g;F|=p.patchFlag&16;const ne=p.props||je,Z=g.props||je;let oe;if(E&&Or(E,!1),(oe=Z.onVnodeBeforeUpdate)&&vn(oe,E,g,p),W&&kr(g,p,E,"beforeUpdate"),E&&Or(E,!0),C?ie(p.dynamicChildren,C,x,E,R,lc(g,I),D):U||ge(p,g,x,null,E,R,lc(g,I),D,!1),F>0){if(F&16)Me(x,g,ne,Z,E,R,I);else if(F&2&&ne.class!==Z.class&&i(x,"class",null,Z.class,I),F&4&&i(x,"style",ne.style,Z.style,I),F&8){const ve=g.dynamicProps;for(let Oe=0;Oe<ve.length;Oe++){const m=ve[Oe],_=ne[m],b=Z[m];(b!==_||m==="value")&&i(x,m,_,b,I,p.children,E,R,ee)}}F&1&&p.children!==g.children&&u(x,g.children)}else!U&&C==null&&Me(x,g,ne,Z,E,R,I);((oe=Z.onVnodeUpdated)||W)&&jt(()=>{oe&&vn(oe,E,g,p),W&&kr(g,p,E,"updated")},R)},ie=(p,g,E,R,I,D,U)=>{for(let x=0;x<g.length;x++){const F=p[x],C=g[x],W=F.el&&(F.type===ht||!oi(F,C)||F.shapeFlag&70)?h(F.el):E;T(F,C,W,null,R,I,D,U,!0)}},Me=(p,g,E,R,I,D,U)=>{if(E!==R){if(E!==je)for(const x in E)!Ti(x)&&!(x in R)&&i(p,x,E[x],null,U,g.children,I,D,ee);for(const x in R){if(Ti(x))continue;const F=R[x],C=E[x];F!==C&&x!=="value"&&i(p,x,C,F,U,g.children,I,D,ee)}"value"in R&&i(p,"value",E.value,R.value,U)}},Ge=(p,g,E,R,I,D,U,x,F)=>{const C=g.el=p?p.el:a(""),W=g.anchor=p?p.anchor:a("");let{patchFlag:ne,dynamicChildren:Z,slotScopeIds:oe}=g;oe&&(x=x?x.concat(oe):oe),p==null?(r(C,E,R),r(W,E,R),G(g.children||[],E,W,I,D,U,x,F)):ne>0&&ne&64&&Z&&p.dynamicChildren?(ie(p.dynamicChildren,Z,E,I,D,U,x),(g.key!=null||I&&g===I.subTree)&&Im(p,g,!0)):ge(p,g,E,W,I,D,U,x,F)},Le=(p,g,E,R,I,D,U,x,F)=>{g.slotScopeIds=x,p==null?g.shapeFlag&512?I.ctx.activate(g,E,R,U,F):Ze(g,E,R,I,D,U,F):Ue(p,g,F)},Ze=(p,g,E,R,I,D,U)=>{const x=p.component=L0(p,R,I);if(dm(p)&&(x.ctx.renderer=z),U0(x),x.asyncDep){if(I&&I.registerDep(x,H),!p.el){const F=x.subTree=ce(Gr);S(null,F,g,E)}}else H(x,p,g,E,I,D,U)},Ue=(p,g,E)=>{const R=g.component=p.component;if(Kw(p,g,E))if(R.asyncDep&&!R.asyncResolved){pe(R,g,E);return}else R.next=g,Bw(R.update),R.effect.dirty=!0,R.update();else g.el=p.el,R.vnode=g},H=(p,g,E,R,I,D,U)=>{const x=()=>{if(p.isMounted){let{next:W,bu:ne,u:Z,parent:oe,vnode:ve}=p;{const B=bm(p);if(B){W&&(W.el=ve.el,pe(p,W,U)),B.asyncDep.then(()=>{p.isUnmounted||x()});return}}let Oe=W,m;Or(p,!1),W?(W.el=ve.el,pe(p,W,U)):W=ve,ne&&sc(ne),(m=W.props&&W.props.onVnodeBeforeUpdate)&&vn(m,oe,W,ve),Or(p,!0);const _=oc(p),b=p.subTree;p.subTree=_,T(b,_,h(b.el),w(b),p,I,D),W.el=_.el,Oe===null&&Gw(p,_.el),Z&&jt(Z,I),(m=W.props&&W.props.onVnodeUpdated)&&jt(()=>vn(m,oe,W,ve),I)}else{let W;const{el:ne,props:Z}=g,{bm:oe,m:ve,parent:Oe}=p,m=ra(g);if(Or(p,!1),oe&&sc(oe),!m&&(W=Z&&Z.onVnodeBeforeMount)&&vn(W,Oe,g),Or(p,!0),ne&&Fe){const _=()=>{p.subTree=oc(p),Fe(ne,p.subTree,p,I,null)};m?g.type.__asyncLoader().then(()=>!p.isUnmounted&&_()):_()}else{const _=p.subTree=oc(p);T(null,_,E,R,p,I,D),g.el=_.el}if(ve&&jt(ve,I),!m&&(W=Z&&Z.onVnodeMounted)){const _=g;jt(()=>vn(W,Oe,_),I)}(g.shapeFlag&256||Oe&&ra(Oe.vnode)&&Oe.vnode.shapeFlag&256)&&p.a&&jt(p.a,I),p.isMounted=!0,g=E=R=null}},F=p.effect=new Ku(x,nn,()=>nh(C),p.scope),C=p.update=()=>{F.dirty&&F.run()};C.id=p.uid,Or(p,!0),C()},pe=(p,g,E)=>{g.component=p;const R=p.vnode.props;p.vnode=g,p.next=null,I0(p,g.props,R,E),R0(p,g.children,E),is(),Qd(p),os()},ge=(p,g,E,R,I,D,U,x,F=!1)=>{const C=p&&p.children,W=p?p.shapeFlag:0,ne=g.children,{patchFlag:Z,shapeFlag:oe}=g;if(Z>0){if(Z&128){$t(C,ne,E,R,I,D,U,x,F);return}else if(Z&256){lt(C,ne,E,R,I,D,U,x,F);return}}oe&8?(W&16&&ee(C,I,D),ne!==C&&u(E,ne)):W&16?oe&16?$t(C,ne,E,R,I,D,U,x,F):ee(C,I,D,!0):(W&8&&u(E,""),oe&16&&G(ne,E,R,I,D,U,x,F))},lt=(p,g,E,R,I,D,U,x,F)=>{p=p||Is,g=g||Is;const C=p.length,W=g.length,ne=Math.min(C,W);let Z;for(Z=0;Z<ne;Z++){const oe=g[Z]=F?ir(g[Z]):En(g[Z]);T(p[Z],oe,E,null,I,D,U,x,F)}C>W?ee(p,I,D,!0,!1,ne):G(g,E,R,I,D,U,x,F,ne)},$t=(p,g,E,R,I,D,U,x,F)=>{let C=0;const W=g.length;let ne=p.length-1,Z=W-1;for(;C<=ne&&C<=Z;){const oe=p[C],ve=g[C]=F?ir(g[C]):En(g[C]);if(oi(oe,ve))T(oe,ve,E,null,I,D,U,x,F);else break;C++}for(;C<=ne&&C<=Z;){const oe=p[ne],ve=g[Z]=F?ir(g[Z]):En(g[Z]);if(oi(oe,ve))T(oe,ve,E,null,I,D,U,x,F);else break;ne--,Z--}if(C>ne){if(C<=Z){const oe=Z+1,ve=oe<W?g[oe].el:R;for(;C<=Z;)T(null,g[C]=F?ir(g[C]):En(g[C]),E,ve,I,D,U,x,F),C++}}else if(C>Z)for(;C<=ne;)mt(p[C],I,D,!0),C++;else{const oe=C,ve=C,Oe=new Map;for(C=ve;C<=Z;C++){const Ie=g[C]=F?ir(g[C]):En(g[C]);Ie.key!=null&&Oe.set(Ie.key,C)}let m,_=0;const b=Z-ve+1;let B=!1,re=0;const J=new Array(b);for(C=0;C<b;C++)J[C]=0;for(C=oe;C<=ne;C++){const Ie=p[C];if(_>=b){mt(Ie,I,D,!0);continue}let Pe;if(Ie.key!=null)Pe=Oe.get(Ie.key);else for(m=ve;m<=Z;m++)if(J[m-ve]===0&&oi(Ie,g[m])){Pe=m;break}Pe===void 0?mt(Ie,I,D,!0):(J[Pe-ve]=C+1,Pe>=re?re=Pe:B=!0,T(Ie,g[Pe],E,null,I,D,U,x,F),_++)}const we=B?k0(J):Is;for(m=we.length-1,C=b-1;C>=0;C--){const Ie=ve+C,Pe=g[Ie],ct=Ie+1<W?g[Ie+1].el:R;J[C]===0?T(null,Pe,E,ct,I,D,U,x,F):B&&(m<0||C!==we[m]?Nt(Pe,E,ct,2):m--)}}},Nt=(p,g,E,R,I=null)=>{const{el:D,type:U,transition:x,children:F,shapeFlag:C}=p;if(C&6){Nt(p.component.subTree,g,E,R);return}if(C&128){p.suspense.move(g,E,R);return}if(C&64){U.move(p,g,E,z);return}if(U===ht){r(D,g,E);for(let ne=0;ne<F.length;ne++)Nt(F[ne],g,E,R);r(p.anchor,g,E);return}if(U===sa){O(p,g,E);return}if(R!==2&&C&1&&x)if(R===0)x.beforeEnter(D),r(D,g,E),jt(()=>x.enter(D),I);else{const{leave:ne,delayLeave:Z,afterLeave:oe}=x,ve=()=>r(D,g,E),Oe=()=>{ne(D,()=>{ve(),oe&&oe()})};Z?Z(D,ve,Oe):Oe()}else r(D,g,E)},mt=(p,g,E,R=!1,I=!1)=>{const{type:D,props:U,ref:x,children:F,dynamicChildren:C,shapeFlag:W,patchFlag:ne,dirs:Z}=p;if(x!=null&&Kc(x,null,E,p,!0),W&256){g.ctx.deactivate(p);return}const oe=W&1&&Z,ve=!ra(p);let Oe;if(ve&&(Oe=U&&U.onVnodeBeforeUnmount)&&vn(Oe,g,p),W&6)Y(p.component,E,R);else{if(W&128){p.suspense.unmount(E,R);return}oe&&kr(p,null,g,"beforeUnmount"),W&64?p.type.remove(p,g,E,I,z,R):C&&(D!==ht||ne>0&&ne&64)?ee(C,g,E,!1,!0):(D===ht&&ne&384||!I&&W&16)&&ee(F,g,E),R&&et(p)}(ve&&(Oe=U&&U.onVnodeUnmounted)||oe)&&jt(()=>{Oe&&vn(Oe,g,p),oe&&kr(p,null,g,"unmounted")},E)},et=p=>{const{type:g,el:E,anchor:R,transition:I}=p;if(g===ht){yn(E,R);return}if(g===sa){$(p);return}const D=()=>{s(E),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(p.shapeFlag&1&&I&&!I.persisted){const{leave:U,delayLeave:x}=I,F=()=>U(E,D);x?x(p.el,D,F):F()}else D()},yn=(p,g)=>{let E;for(;p!==g;)E=d(p),s(p),p=E;s(g)},Y=(p,g,E)=>{const{bum:R,scope:I,update:D,subTree:U,um:x}=p;R&&sc(R),I.stop(),D&&(D.active=!1,mt(U,p,g,E)),x&&jt(x,g),jt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},ee=(p,g,E,R=!1,I=!1,D=0)=>{for(let U=D;U<p.length;U++)mt(p[U],g,E,R,I)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let V=!1;const L=(p,g,E)=>{p==null?g._vnode&&mt(g._vnode,null,null,!0):T(g._vnode||null,p,g,null,null,null,E),V||(V=!0,Qd(),om(),V=!1),g._vnode=p},z={p:T,um:mt,m:Nt,r:et,mt:Ze,mc:G,pc:ge,pbc:ie,n:w,o:t};let me,Fe;return e&&([me,Fe]=e(z)),{render:L,hydrate:me,createApp:E0(L,me)}}function lc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Or({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function C0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Im(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ir(s[i]),a.el=o.el),n||Im(o,a)),a.type===ol&&(a.el=o.el)}}function k0(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function bm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bm(e)}const O0=t=>t.__isTeleport,ht=Symbol.for("v-fgt"),ol=Symbol.for("v-txt"),Gr=Symbol.for("v-cmt"),sa=Symbol.for("v-stc"),bi=[];let cn=null;function xe(t=!1){bi.push(cn=t?null:[])}function V0(){bi.pop(),cn=bi[bi.length-1]||null}let Fi=1;function af(t){Fi+=t}function Am(t){return t.dynamicChildren=Fi>0?cn||Is:null,V0(),Fi>0&&cn&&cn.push(t),t}function Qe(t,e,n,r,s,i){return Am(N(t,e,n,r,s,i,!0))}function $i(t,e,n,r,s){return Am(ce(t,e,n,r,s,!0))}function Gc(t){return t?t.__v_isVNode===!0:!1}function oi(t,e){return t.type===e.type&&t.key===e.key}const al="__vInternal",Rm=({key:t})=>t??null,ia=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?it(t)||Ke(t)||fe(t)?{i:Ct,r:t,k:e,f:!!n}:t:null);function N(t,e=null,n=null,r=0,s=null,i=t===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rm(e),ref:e&&ia(e),scopeId:cm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return a?(hh(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=it(n)?8:16),Fi>0&&!o&&cn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&cn.push(l),l}const ce=N0;function N0(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===um)&&(t=Gr),Gc(t)){const a=Ms(t,e,!0);return n&&hh(a,n),Fi>0&&!i&&cn&&(a.shapeFlag&6?cn[cn.indexOf(t)]=a:cn.push(a)),a.patchFlag|=-2,a}if(q0(t)&&(t=t.__vccOpts),e){e=D0(e);let{class:a,style:l}=e;a&&!it(a)&&(e.class=Xt(a)),ze(l)&&(Xg(l)&&!he(l)&&(l=It({},l)),e.style=Za(l))}const o=it(t)?1:Xw(t)?128:O0(t)?64:ze(t)?4:fe(t)?2:0;return N(t,e,n,r,s,o,i,!0)}function D0(t){return t?Xg(t)||al in t?It({},t):t:null}function Ms(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Pm(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rm(a),ref:e&&e.ref?n&&s?he(s)?s.concat(ia(e)):[s,ia(e)]:ia(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ms(t.ssContent),ssFallback:t.ssFallback&&Ms(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Ps(t=" ",e=0){return ce(ol,null,t,e)}function Sm(t,e){const n=ce(sa,null,t);return n.staticCount=e,n}function uh(t="",e=!1){return e?(xe(),$i(Gr,null,t)):ce(Gr,null,t)}function En(t){return t==null||typeof t=="boolean"?ce(Gr):he(t)?ce(ht,null,t.slice()):typeof t=="object"?ir(t):ce(ol,null,String(t))}function ir(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ms(t)}function hh(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),hh(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(al in e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),r&64?(n=16,e=[Ps(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pm(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xt([e.class,r.class]));else if(s==="style")e.style=Za([e.style,r.style]);else if(Qa(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function vn(t,e,n,r=null){hn(t,e,7,[n,r])}const x0=_m();let M0=0;function L0(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||x0,i={uid:M0++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Mg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vm(r,s),emitsOptions:lm(r,s),emit:null,emitted:null,propsDefaults:je,inheritAttrs:r.inheritAttrs,ctx:je,data:je,props:je,attrs:je,slots:je,refs:je,setupState:je,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Hw.bind(null,i),t.ce&&t.ce(i),i}let dt=null;const ll=()=>dt||Ct;let Ea,Qc;{const t=Ng(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ea=e("__VUE_INSTANCE_SETTERS__",n=>dt=n),Qc=e("__VUE_SSR_SETTERS__",n=>cl=n)}const lo=t=>{const e=dt;return Ea(t),t.scope.on(),()=>{t.scope.off(),Ea(e)}},lf=()=>{dt&&dt.scope.off(),Ea(null)};function Cm(t){return t.vnode.shapeFlag&4}let cl=!1;function U0(t,e=!1){e&&Qc(e);const{props:n,children:r}=t.vnode,s=Cm(t);T0(t,n,s,e),A0(t,r);const i=s?F0(t,e):void 0;return e&&Qc(!1),i}function F0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=tl(new Proxy(t.ctx,f0));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?B0(t):null,i=lo(t);is();const o=mr(r,t,0,[t.props,s]);if(os(),i(),kg(o)){if(o.then(lf,lf),e)return o.then(a=>{cf(t,a,e)}).catch(a=>{nl(a,t,0)});t.asyncDep=o}else cf(t,o,e)}else km(t,e)}function cf(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ze(e)&&(t.setupState=nm(e)),km(t,n)}let uf;function km(t,e,n){const r=t.type;if(!t.render){if(!e&&uf&&!r.render){const s=r.template||lh(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=It(It({isCustomElement:i,delimiters:a},o),l);r.render=uf(s,c)}}t.render=r.render||nn}{const s=lo(t);is();try{p0(t)}finally{os(),s()}}}function $0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Kt(t,"get","$attrs"),e[n]}}))}function B0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return $0(t)},slots:t.slots,emit:t.emit,expose:e}}function ul(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(nm(tl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ii)return Ii[n](t)},has(e,n){return n in e||n in Ii}}))}function j0(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function q0(t){return fe(t)&&"__vccOpts"in t}const ye=(t,e)=>Nw(t,e,cl);function Ls(t,e,n){const r=arguments.length;return r===2?ze(e)&&!he(e)?Gc(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Gc(n)&&(n=[n]),ce(t,e,n))}const H0="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const z0="http://www.w3.org/2000/svg",W0="http://www.w3.org/1998/Math/MathML",or=typeof document<"u"?document:null,hf=or&&or.createElement("template"),K0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?or.createElementNS(z0,t):e==="mathml"?or.createElementNS(W0,t):or.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>or.createTextNode(t),createComment:t=>or.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>or.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hf.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=hf.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},G0=Symbol("_vtc");function Q0(t,e,n){const r=t[G0];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const wa=Symbol("_vod"),Om=Symbol("_vsh"),df={beforeMount(t,{value:e},{transition:n}){t[wa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ai(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),ai(t,!0),r.enter(t)):r.leave(t,()=>{ai(t,!1)}):ai(t,e))},beforeUnmount(t,{value:e}){ai(t,e)}};function ai(t,e){t.style.display=e?t[wa]:"none",t[Om]=!e}const Y0=Symbol(""),X0=/(^|;)\s*display\s*:/;function J0(t,e,n){const r=t.style,s=it(n);let i=!1;if(n&&!s){if(e)if(it(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&oa(r,a,"")}else for(const o in e)n[o]==null&&oa(r,o,"");for(const o in n)o==="display"&&(i=!0),oa(r,o,n[o])}else if(s){if(e!==n){const o=r[Y0];o&&(n+=";"+o),r.cssText=n,i=X0.test(n)}}else e&&t.removeAttribute("style");wa in t&&(t[wa]=i?r.display:"",t[Om]&&(r.display="none"))}const ff=/\s*!important$/;function oa(t,e,n){if(he(n))n.forEach(r=>oa(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Z0(t,e);ff.test(n)?t.setProperty(Ys(r),n.replace(ff,""),"important"):t[r]=n}}const pf=["Webkit","Moz","ms"],cc={};function Z0(t,e){const n=cc[e];if(n)return n;let r=Nn(e);if(r!=="filter"&&r in t)return cc[e]=r;r=Ja(r);for(let s=0;s<pf.length;s++){const i=pf[s]+r;if(i in t)return cc[e]=i}return e}const gf="http://www.w3.org/1999/xlink";function eT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gf,e.slice(6,e.length)):t.setAttributeNS(gf,e,n);else{const i=uw(e);n==null||i&&!Dg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function tT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Dg(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function nT(t,e,n,r){t.addEventListener(e,n,r)}function rT(t,e,n,r){t.removeEventListener(e,n,r)}const mf=Symbol("_vei");function sT(t,e,n,r,s=null){const i=t[mf]||(t[mf]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=iT(e);if(r){const c=i[e]=lT(r,s);nT(t,a,c,l)}else o&&(rT(t,a,o,l),i[e]=void 0)}}const _f=/(?:Once|Passive|Capture)$/;function iT(t){let e;if(_f.test(t)){e={};let r;for(;r=t.match(_f);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ys(t.slice(2)),e]}let uc=0;const oT=Promise.resolve(),aT=()=>uc||(oT.then(()=>uc=0),uc=Date.now());function lT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;hn(cT(r,n.value),e,5,[r])};return n.value=t,n.attached=aT(),n}function cT(t,e){if(he(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const yf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,uT=(t,e,n,r,s,i,o,a,l)=>{const c=s==="svg";e==="class"?Q0(t,r,c):e==="style"?J0(t,n,r):Qa(e)?Hu(e)||sT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):hT(t,e,r,c))?tT(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),eT(t,e,r,c))};function hT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&yf(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yf(e)&&it(n)?!1:e in t}const dT=["ctrl","shift","alt","meta"],fT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>dT.some(n=>t[`${n}Key`]&&!e.includes(n))},Ht=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=fT[e[o]];if(a&&a(s,e))return}return t(s,...i)})},pT=It({patchProp:uT},K0);let vf;function gT(){return vf||(vf=S0(pT))}const mT=(...t)=>{const e=gT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=yT(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,_T(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function _T(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function yT(t){return it(t)?document.querySelector(t):t}var vT=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Vm;const hl=t=>Vm=t,Nm=Symbol();function Yc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ai;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ai||(Ai={}));function ET(){const t=Lg(!0),e=t.run(()=>Mt({}));let n=[],r=[];const s=tl({install(i){hl(s),s._a=i,i.provide(Nm,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!vT?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Dm=()=>{};function Ef(t,e,n,r=Dm){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Ug()&&dw(s),s}function ps(t,...e){t.slice().forEach(n=>{n(...e)})}const wT=t=>t();function Xc(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];Yc(s)&&Yc(r)&&t.hasOwnProperty(n)&&!Ke(r)&&!gr(r)?t[n]=Xc(s,r):t[n]=r}return t}const TT=Symbol();function IT(t){return!Yc(t)||!t.hasOwnProperty(TT)}const{assign:nr}=Object;function bT(t){return!!(Ke(t)&&t.effect)}function AT(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=s?s():{});const u=Mw(n.state.value[t]);return nr(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=tl(ye(()=>{hl(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return l=xm(t,c,e,n,r,!0),l}function xm(t,e,n={},r,s,i){let o;const a=nr({actions:{}},n),l={deep:!0};let c,u,h=[],d=[],f;const v=r.state.value[t];!i&&!v&&(r.state.value[t]={}),Mt({});let T;function y(G){let Q;c=u=!1,typeof G=="function"?(G(r.state.value[t]),Q={type:Ai.patchFunction,storeId:t,events:f}):(Xc(r.state.value[t],G),Q={type:Ai.patchObject,payload:G,storeId:t,events:f});const ie=T=Symbol();Qt().then(()=>{T===ie&&(c=!0)}),u=!0,ps(h,Q,r.state.value[t])}const S=i?function(){const{state:Q}=n,ie=Q?Q():{};this.$patch(Me=>{nr(Me,ie)})}:Dm;function k(){o.stop(),h=[],d=[],r._s.delete(t)}function O(G,Q){return function(){hl(r);const ie=Array.from(arguments),Me=[],Ge=[];function Le(H){Me.push(H)}function Ze(H){Ge.push(H)}ps(d,{args:ie,name:G,store:X,after:Le,onError:Ze});let Ue;try{Ue=Q.apply(this&&this.$id===t?this:X,ie)}catch(H){throw ps(Ge,H),H}return Ue instanceof Promise?Ue.then(H=>(ps(Me,H),H)).catch(H=>(ps(Ge,H),Promise.reject(H))):(ps(Me,Ue),Ue)}}const $={_p:r,$id:t,$onAction:Ef.bind(null,d),$patch:y,$reset:S,$subscribe(G,Q={}){const ie=Ef(h,G,Q.detached,()=>Me()),Me=o.run(()=>rn(()=>r.state.value[t],Ge=>{(Q.flush==="sync"?u:c)&&G({storeId:t,type:Ai.direct,events:f},Ge)},nr({},l,Q)));return ie},$dispose:k},X=Kn($);r._s.set(t,X);const le=(r._a&&r._a.runWithContext||wT)(()=>r._e.run(()=>(o=Lg()).run(e)));for(const G in le){const Q=le[G];if(Ke(Q)&&!bT(Q)||gr(Q))i||(v&&IT(Q)&&(Ke(Q)?Q.value=v[G]:Xc(Q,v[G])),r.state.value[t][G]=Q);else if(typeof Q=="function"){const ie=O(G,Q);le[G]=ie,a.actions[G]=Q}}return nr(X,le),nr(Se(X),le),Object.defineProperty(X,"$state",{get:()=>r.state.value[t],set:G=>{y(Q=>{nr(Q,G)})}}),r._p.forEach(G=>{nr(X,o.run(()=>G({store:X,app:r._a,pinia:r,options:a})))}),v&&i&&n.hydrate&&n.hydrate(X.$state,v),c=!0,u=!0,X}function Mm(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,l){const c=w0();return a=a||(c?sn(Nm,null):null),a&&hl(a),a=Vm,a._s.has(r)||(i?xm(r,e,s,a):AT(r,s,a)),a._s.get(r)}return o.$id=r,o}let RT="Store";function ST(...t){return t.reduce((e,n)=>(e[n.$id+RT]=function(){return n(this.$pinia)},e),{})}function PT(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(){return t(this.$pinia)[r]},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(){const s=t(this.$pinia),i=e[r];return typeof i=="function"?i.call(this,s):s[i]},n),{})}function Lm(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[r](...s)},n),{}):Object.keys(e).reduce((n,r)=>(n[r]=function(...s){return t(this.$pinia)[e[r]](...s)},n),{})}function Um(t,e){return Array.isArray(e)?e.reduce((n,r)=>(n[r]={get(){return t(this.$pinia)[r]},set(s){return t(this.$pinia)[r]=s}},n),{}):Object.keys(e).reduce((n,r)=>(n[r]={get(){return t(this.$pinia)[e[r]]},set(s){return t(this.$pinia)[e[r]]=s}},n),{})}var wf={};/**
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
 */const Fm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},CT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},$m={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Fm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new kT;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const v=c<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class kT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OT=function(t){const e=Fm(t);return $m.encodeByteArray(e,!0)},Ta=function(t){return OT(t).replace(/\./g,"")},Bm=function(t){try{return $m.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function VT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const NT=()=>VT().__FIREBASE_DEFAULTS__,DT=()=>{if(typeof process>"u"||typeof wf>"u")return;const t=wf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},xT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Bm(t[1]);return e&&JSON.parse(e)},dl=()=>{try{return NT()||DT()||xT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},jm=t=>{var e,n;return(n=(e=dl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},qm=t=>{const e=jm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Hm=()=>{var t;return(t=dl())===null||t===void 0?void 0:t.config},zm=t=>{var e;return(e=dl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class MT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Wm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ta(JSON.stringify(n)),Ta(JSON.stringify(o)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function LT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function UT(){var t;const e=(t=dl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function FT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $T(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BT(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jT(){return!UT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Km(){try{return typeof indexedDB=="object"}catch{return!1}}function qT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const HT="FirebaseError";class Mn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=HT,Object.setPrototypeOf(this,Mn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,co.prototype.create)}}class co{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?zT(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mn(s,a,r)}}function zT(t,e){return t.replace(WT,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const WT=/\{\$([^}]+)}/g;function KT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ia(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tf(i)&&Tf(o)){if(!Ia(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tf(t){return t!==null&&typeof t=="object"}/**
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
 */function uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function pi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function gi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function GT(t,e){const n=new QT(t,e);return n.subscribe.bind(n)}class QT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");YT(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hc),s.error===void 0&&(s.error=hc),s.complete===void 0&&(s.complete=hc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function YT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hc(){}/**
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
 */function Ye(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Nr="[DEFAULT]";/**
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
 */class XT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new MT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ZT(e))try{this.getOrInitializeService({instanceIdentifier:Nr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Nr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Nr){return this.instances.has(e)}getOptions(e=Nr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:JT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Nr){return this.component?this.component.multipleInstances?e:Nr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function JT(t){return t===Nr?void 0:t}function ZT(t){return t.instantiationMode==="EAGER"}/**
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
 */class eI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new XT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const tI={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},nI=Te.INFO,rI={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},sI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dh{constructor(e){this.name=e,this._logLevel=nI,this._logHandler=sI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const iI=(t,e)=>e.some(n=>t instanceof n);let If,bf;function oI(){return If||(If=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aI(){return bf||(bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gm=new WeakMap,Jc=new WeakMap,Qm=new WeakMap,dc=new WeakMap,fh=new WeakMap;function lI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(_r(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gm.set(n,t)}).catch(()=>{}),fh.set(e,t),e}function cI(t){if(Jc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Jc.set(t,e)}let Zc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Jc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _r(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function uI(t){Zc=t(Zc)}function hI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fc(this),e,...n);return Qm.set(r,e.sort?e.sort():[e]),_r(r)}:aI().includes(t)?function(...e){return t.apply(fc(this),e),_r(Gm.get(this))}:function(...e){return _r(t.apply(fc(this),e))}}function dI(t){return typeof t=="function"?hI(t):(t instanceof IDBTransaction&&cI(t),iI(t,oI())?new Proxy(t,Zc):t)}function _r(t){if(t instanceof IDBRequest)return lI(t);if(dc.has(t))return dc.get(t);const e=dI(t);return e!==t&&(dc.set(t,e),fh.set(e,t)),e}const fc=t=>fh.get(t);function fI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=_r(o);return r&&o.addEventListener("upgradeneeded",l=>{r(_r(o.result),l.oldVersion,l.newVersion,_r(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const pI=["get","getKey","getAll","getAllKeys","count"],gI=["put","add","delete","clear"],pc=new Map;function Af(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pc.get(e))return pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=gI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pI.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return pc.set(e,i),i}uI(t=>({...t,get:(e,n,r)=>Af(e,n)||t.get(e,n,r),has:(e,n)=>!!Af(e,n)||t.has(e,n)}));/**
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
 */class mI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_I(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _I(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const eu="@firebase/app",Rf="0.10.0";/**
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
 */const Qr=new dh("@firebase/app"),yI="@firebase/app-compat",vI="@firebase/analytics-compat",EI="@firebase/analytics",wI="@firebase/app-check-compat",TI="@firebase/app-check",II="@firebase/auth",bI="@firebase/auth-compat",AI="@firebase/database",RI="@firebase/database-compat",SI="@firebase/functions",PI="@firebase/functions-compat",CI="@firebase/installations",kI="@firebase/installations-compat",OI="@firebase/messaging",VI="@firebase/messaging-compat",NI="@firebase/performance",DI="@firebase/performance-compat",xI="@firebase/remote-config",MI="@firebase/remote-config-compat",LI="@firebase/storage",UI="@firebase/storage-compat",FI="@firebase/firestore",$I="@firebase/firestore-compat",BI="firebase",jI="10.10.0";/**
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
 */const tu="[DEFAULT]",qI={[eu]:"fire-core",[yI]:"fire-core-compat",[EI]:"fire-analytics",[vI]:"fire-analytics-compat",[TI]:"fire-app-check",[wI]:"fire-app-check-compat",[II]:"fire-auth",[bI]:"fire-auth-compat",[AI]:"fire-rtdb",[RI]:"fire-rtdb-compat",[SI]:"fire-fn",[PI]:"fire-fn-compat",[CI]:"fire-iid",[kI]:"fire-iid-compat",[OI]:"fire-fcm",[VI]:"fire-fcm-compat",[NI]:"fire-perf",[DI]:"fire-perf-compat",[xI]:"fire-rc",[MI]:"fire-rc-compat",[LI]:"fire-gcs",[UI]:"fire-gcs-compat",[FI]:"fire-fst",[$I]:"fire-fst-compat","fire-js":"fire-js",[BI]:"fire-js-all"};/**
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
 */const ba=new Map,HI=new Map,nu=new Map;function Sf(t,e){try{t.container.addComponent(e)}catch(n){Qr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Yr(t){const e=t.name;if(nu.has(e))return Qr.debug(`There were multiple attempts to register component ${e}.`),!1;nu.set(e,t);for(const n of ba.values())Sf(n,t);for(const n of HI.values())Sf(n,t);return!0}function fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function In(t){return t.settings!==void 0}/**
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
 */const zI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new co("app","Firebase",zI);/**
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
 */class WI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const as=jI;function Ym(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tu,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=Hm()),!n)throw yr.create("no-options");const i=ba.get(s);if(i){if(Ia(n,i.options)&&Ia(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new eI(s);for(const l of nu.values())o.addComponent(l);const a=new WI(n,r,o);return ba.set(s,a),a}function ph(t=tu){const e=ba.get(t);if(!e&&t===tu&&Hm())return Ym();if(!e)throw yr.create("no-app",{appName:t});return e}function Sn(t,e,n){var r;let s=(r=qI[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qr.warn(a.join(" "));return}Yr(new wr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const KI="firebase-heartbeat-database",GI=1,Bi="firebase-heartbeat-store";let gc=null;function Xm(){return gc||(gc=fI(KI,GI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bi)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),gc}async function QI(t){try{const n=(await Xm()).transaction(Bi),r=await n.objectStore(Bi).get(Jm(t));return await n.done,r}catch(e){if(e instanceof Mn)Qr.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qr.warn(n.message)}}}async function Pf(t,e){try{const r=(await Xm()).transaction(Bi,"readwrite");await r.objectStore(Bi).put(e,Jm(t)),await r.done}catch(n){if(n instanceof Mn)Qr.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qr.warn(r.message)}}}function Jm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const YI=1024,XI=30*24*60*60*1e3;class JI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eb(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Cf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=XI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Cf(),{heartbeatsToSend:r,unsentEntries:s}=ZI(this._heartbeatsCache.heartbeats),i=Ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Cf(){return new Date().toISOString().substring(0,10)}function ZI(t,e=YI){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),kf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eb{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Km()?qT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await QI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Pf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function kf(t){return Ta(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function tb(t){Yr(new wr("platform-logger",e=>new mI(e),"PRIVATE")),Yr(new wr("heartbeat",e=>new JI(e),"PRIVATE")),Sn(eu,Rf,t),Sn(eu,Rf,"esm2017"),Sn("fire-js","")}tb("");var nb="firebase",rb="10.10.0";/**
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
 */Sn(nb,rb,"app");function gh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Zm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sb=Zm,e_=new co("auth","Firebase",Zm());/**
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
 */const Aa=new dh("@firebase/auth");function ib(t,...e){Aa.logLevel<=Te.WARN&&Aa.warn(`Auth (${as}): ${t}`,...e)}function aa(t,...e){Aa.logLevel<=Te.ERROR&&Aa.error(`Auth (${as}): ${t}`,...e)}/**
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
 */function dn(t,...e){throw mh(t,...e)}function Pn(t,...e){return mh(t,...e)}function t_(t,e,n){const r=Object.assign(Object.assign({},sb()),{[e]:n});return new co("auth","Firebase",r).create(e,{appName:t.name})}function zn(t){return t_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e_.create(t,...e)}function se(t,e,...n){if(!t)throw mh(e,...n)}function Un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw aa(e),new Error(e)}function Gn(t,e){t||Un(e)}/**
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
 */function ru(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ob(){return Of()==="http:"||Of()==="https:"}function Of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function ab(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ob()||FT()||"connection"in navigator)?navigator.onLine:!0}function lb(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Gn(n>e,"Short delay should be less than long delay!"),this.isMobile=LT()||$T()}get(){return ab()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function _h(t,e){Gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class n_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cb={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ub=new ho(3e4,6e4);function Ar(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Jn(t,e,n,r,s={}){return r_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=uo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),n_.fetch()(s_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function r_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},cb),e);try{const s=new db(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jo(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw t_(t,u,c);dn(t,u)}}catch(s){if(s instanceof Mn)throw s;dn(t,"network-request-failed",{message:String(s)})}}async function fo(t,e,n,r,s={}){const i=await Jn(t,e,n,r,s);return"mfaPendingCredential"in i&&dn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function s_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?_h(t.config,s):`${t.config.apiScheme}://${s}`}function hb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class db{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pn(this.auth,"network-request-failed")),ub.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Pn(t,e,r);return s.customData._tokenResponse=n,s}function Vf(t){return t!==void 0&&t.enterprise!==void 0}class fb{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return hb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pb(t,e){return Jn(t,"GET","/v2/recaptchaConfig",Ar(t,e))}/**
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
 */async function gb(t,e){return Jn(t,"POST","/v1/accounts:delete",e)}async function i_(t,e){return Jn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mb(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=yh(r);se(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ri(mc(s.auth_time)),issuedAtTime:Ri(mc(s.iat)),expirationTime:Ri(mc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mc(t){return Number(t)*1e3}function yh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return aa("JWT malformed, contained fewer than 3 sections"),null;try{const s=Bm(n);return s?JSON.parse(s):(aa("Failed to decode base64 JWT payload"),null)}catch(s){return aa("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Nf(t){const e=yh(t);return se(e,"internal-error"),se(typeof e.exp<"u","internal-error"),se(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mn&&_b(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _b({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class yb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class su{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ri(this.lastLoginAt),this.creationTime=Ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ra(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Us(t,i_(n,{idToken:r}));se(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?o_(i.providerUserInfo):[],a=Eb(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new su(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function vb(t){const e=Ye(t);await Ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Eb(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function o_(t){return t.map(e=>{var{providerId:n}=e,r=gh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function wb(t,e){const n=await r_(t,{},async()=>{const r=uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=s_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",n_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Tb(t,e){return Jn(t,"POST","/v2/accounts:revokeToken",Ar(t,e))}/**
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
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){se(e.idToken,"internal-error"),se(typeof e.idToken<"u","internal-error"),se(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Nf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){se(e.length!==0,"internal-error");const n=Nf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(se(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await wb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cs;return r&&(se(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(se(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(se(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return Un("not implemented")}}/**
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
 */function er(t,e){se(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Fn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=gh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new su(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Us(this,this.stsTokenManager.getToken(this.auth,e));return se(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mb(this,e)}reload(){return vb(this)}_assign(e){this!==e&&(se(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){se(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(In(this.auth.app))return Promise.reject(zn(this.auth));const e=await this.getIdToken();return await Us(this,gb(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=n.createdAt)!==null&&c!==void 0?c:void 0,k=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:$,isAnonymous:X,providerData:M,stsTokenManager:le}=n;se(O&&le,e,"internal-error");const G=Cs.fromJSON(this.name,le);se(typeof O=="string",e,"internal-error"),er(h,e.name),er(d,e.name),se(typeof $=="boolean",e,"internal-error"),se(typeof X=="boolean",e,"internal-error"),er(f,e.name),er(v,e.name),er(T,e.name),er(y,e.name),er(S,e.name),er(k,e.name);const Q=new Fn({uid:O,auth:e,email:d,emailVerified:$,displayName:h,isAnonymous:X,photoURL:v,phoneNumber:f,tenantId:T,stsTokenManager:G,createdAt:S,lastLoginAt:k});return M&&Array.isArray(M)&&(Q.providerData=M.map(ie=>Object.assign({},ie))),y&&(Q._redirectEventId=y),Q}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cs;s.updateFromServerResponse(n);const i=new Fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ra(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];se(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?o_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Cs;a.updateFromIdToken(r);const l=new Fn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new su(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
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
 */const Df=new Map;function $n(t){Gn(t instanceof Function,"Expected a class definition");let e=Df.get(t);return e?(Gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Df.set(t,e),e)}/**
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
 */class a_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}a_.type="NONE";const xf=a_;/**
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
 */function la(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=la(this.userKey,s.apiKey,i),this.fullPersistenceKey=la("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks($n(xf),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||$n(xf);const o=la(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=Fn._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ks(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ks(i,e,r))}}/**
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
 */function Mf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(u_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(l_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d_(e))return"Blackberry";if(f_(e))return"Webos";if(vh(e))return"Safari";if((e.includes("chrome/")||c_(e))&&!e.includes("edge/"))return"Chrome";if(h_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function l_(t=ot()){return/firefox\//i.test(t)}function vh(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function c_(t=ot()){return/crios\//i.test(t)}function u_(t=ot()){return/iemobile/i.test(t)}function h_(t=ot()){return/android/i.test(t)}function d_(t=ot()){return/blackberry/i.test(t)}function f_(t=ot()){return/webos/i.test(t)}function pl(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Ib(t=ot()){var e;return pl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function bb(){return BT()&&document.documentMode===10}function p_(t=ot()){return pl(t)||h_(t)||f_(t)||d_(t)||/windows phone/i.test(t)||u_(t)}function Ab(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function g_(t,e=[]){let n;switch(t){case"Browser":n=Mf(ot());break;case"Worker":n=`${Mf(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${as}/${r}`}/**
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
 */class Rb{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Sb(t,e={}){return Jn(t,"GET","/v2/passwordPolicy",Ar(t,e))}/**
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
 */const Pb=6;class Cb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Pb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class kb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lf(this),this.idTokenSubscription=new Lf(this),this.beforeStateQueue=new Rb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await i_(this,{idToken:e}),r=await Fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(In(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return se(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ra(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lb()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(In(this.app))return Promise.reject(zn(this));const n=e?Ye(e):null;return n&&se(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&se(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return In(this.app)?Promise.reject(zn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return In(this.app)?Promise.reject(zn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sb(this),n=new Cb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new co("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Tb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;se(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(se(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return se(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ib(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ls(t){return Ye(t)}class Lf{constructor(e){this.auth=e,this.observer=null,this.addObserver=GT(n=>this.observer=n)}get next(){return se(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let gl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ob(t){gl=t}function m_(t){return gl.loadJS(t)}function Vb(){return gl.recaptchaEnterpriseScript}function Nb(){return gl.gapiScript}function Db(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const xb="recaptcha-enterprise",Mb="NO_RECAPTCHA";class Lb{constructor(e){this.type=xb,this.auth=ls(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{pb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const c=new fb(l);return i.tenantId==null?i._agentRecaptchaConfig=c:i._tenantRecaptchaConfigs[i.tenantId]=c,o(c.siteKey)}}).catch(l=>{a(l)})})}function s(i,o,a){const l=window.grecaptcha;Vf(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(c=>{o(c)}).catch(()=>{o(Mb)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Vf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Vb();l.length!==0&&(l+=a),m_(l).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Uf(t,e,n,r=!1){const s=new Lb(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function iu(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Uf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Uf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function Ub(t,e){const n=fl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ia(i,e??{}))return s;dn(s,"already-initialized")}return n.initialize({options:e})}function Fb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $b(t,e,n){const r=ls(t);se(r._canInitEmulator,r,"emulator-config-failed"),se(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=__(e),{host:o,port:a}=Bb(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||jb()}function __(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Bb(t){const e=__(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ff(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ff(o)}}}function Ff(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function jb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Eh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Un("not implemented")}_getIdTokenResponse(e){return Un("not implemented")}_linkToIdToken(e,n){return Un("not implemented")}_getReauthenticationResolver(e){return Un("not implemented")}}async function qb(t,e){return Jn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Hb(t,e){return fo(t,"POST","/v1/accounts:signInWithPassword",Ar(t,e))}/**
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
 */async function zb(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}async function Wb(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",Ar(t,e))}/**
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
 */class ji extends Eh{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new ji(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ji(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return iu(e,n,"signInWithPassword",Hb);case"emailLink":return zb(e,{email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return iu(e,r,"signUpPassword",qb);case"emailLink":return Wb(e,{idToken:n,email:this._email,oobCode:this._password});default:dn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Os(t,e){return fo(t,"POST","/v1/accounts:signInWithIdp",Ar(t,e))}/**
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
 */const Kb="http://localhost";class Xr extends Eh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Xr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=gh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Xr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Os(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Os(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Os(e,n)}buildRequest(){const e={requestUri:Kb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=uo(n)}return e}}/**
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
 */function Gb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Qb(t){const e=pi(gi(t)).link,n=e?pi(gi(e)).deep_link_id:null,r=pi(gi(t)).deep_link_id;return(r?pi(gi(r)).link:null)||r||n||e||t}class wh{constructor(e){var n,r,s,i,o,a;const l=pi(gi(e)),c=(n=l.apiKey)!==null&&n!==void 0?n:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,h=Gb((s=l.mode)!==null&&s!==void 0?s:null);se(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Qb(e);try{return new wh(n)}catch{return null}}}/**
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
 */class Xs{constructor(){this.providerId=Xs.PROVIDER_ID}static credential(e,n){return ji._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=wh.parseLink(n);return se(r,"argument-error"),ji._fromEmailAndCode(e,r.code,r.tenantId)}}Xs.PROVIDER_ID="password";Xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class y_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class po extends y_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends po{constructor(){super("facebook.com")}static credential(e){return Xr._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class cr extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Xr._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class ur extends po{constructor(){super("github.com")}static credential(e){return Xr._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.GITHUB_SIGN_IN_METHOD="github.com";ur.PROVIDER_ID="github.com";/**
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
 */class hr extends po{constructor(){super("twitter.com")}static credential(e,n){return Xr._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */async function Yb(t,e){return fo(t,"POST","/v1/accounts:signUp",Ar(t,e))}/**
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
 */class Jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Fn._fromIdTokenResponse(e,r,s),o=$f(r);return new Jr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=$f(r);return new Jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function $f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sa extends Mn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sa(e,n,r,s)}}function v_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sa._fromErrorAndOperation(t,i,e,r):i})}async function Xb(t,e,n=!1){const r=await Us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Jr._forOperation(t,"link",r)}/**
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
 */async function Jb(t,e,n=!1){const{auth:r}=t;if(In(r.app))return Promise.reject(zn(r));const s="reauthenticate";try{const i=await Us(t,v_(r,s,e,t),n);se(i.idToken,r,"internal-error");const o=yh(i.idToken);se(o,r,"internal-error");const{sub:a}=o;return se(t.uid===a,r,"user-mismatch"),Jr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&dn(r,"user-mismatch"),i}}/**
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
 */async function E_(t,e,n=!1){if(In(t.app))return Promise.reject(zn(t));const r="signIn",s=await v_(t,r,e),i=await Jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Zb(t,e){return E_(ls(t),e)}/**
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
 */async function w_(t){const e=ls(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function eA(t,e,n){if(In(t.app))return Promise.reject(zn(t));const r=ls(t),o=await iu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Yb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&w_(t),l}),a=await Jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function tA(t,e,n){return In(t.app)?Promise.reject(zn(t)):Zb(Ye(t),Xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&w_(t),r})}/**
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
 */async function nA(t,e){return Jn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function rA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ye(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Us(r,nA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function sA(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function iA(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function oA(t){return Ye(t).signOut()}const Pa="__sak";/**
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
 */class T_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Pa,"1"),this.storage.removeItem(Pa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function aA(){const t=ot();return vh(t)||pl(t)}const lA=1e3,cA=10;class I_ extends T_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=aA()&&Ab(),this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);bb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,cA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},lA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}I_.type="LOCAL";const uA=I_;/**
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
 */class b_ extends T_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}b_.type="SESSION";const A_=b_;/**
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
 */function hA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ml{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ml(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await hA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ml.receivers=[];/**
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
 */function Th(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=Th("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Cn(){return window}function fA(t){Cn().location.href=t}/**
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
 */function R_(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function pA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mA(){return R_()?self:null}/**
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
 */const S_="firebaseLocalStorageDb",_A=1,Ca="firebaseLocalStorage",P_="fbase_key";class go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _l(t,e){return t.transaction([Ca],e?"readwrite":"readonly").objectStore(Ca)}function yA(){const t=indexedDB.deleteDatabase(S_);return new go(t).toPromise()}function ou(){const t=indexedDB.open(S_,_A);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ca,{keyPath:P_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ca)?e(r):(r.close(),await yA(),e(await ou()))})})}async function Bf(t,e,n){const r=_l(t,!0).put({[P_]:e,value:n});return new go(r).toPromise()}async function vA(t,e){const n=_l(t,!1).get(e),r=await new go(n).toPromise();return r===void 0?null:r.value}function jf(t,e){const n=_l(t,!0).delete(e);return new go(n).toPromise()}const EA=800,wA=3;class C_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ou(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return R_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ml._getInstance(mA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await pA(),!this.activeServiceWorker)return;this.sender=new dA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ou();return await Bf(e,Pa,"1"),await jf(e,Pa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Bf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=_l(s,!1).getAll();return new go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}C_.type="LOCAL";const TA=C_;new ho(3e4,6e4);/**
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
 */function IA(t,e){return e?$n(e):(se(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ih extends Eh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Os(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Os(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Os(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bA(t){return E_(t.auth,new Ih(t),t.bypassAuthState)}function AA(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Jb(n,new Ih(t),t.bypassAuthState)}async function RA(t){const{auth:e,user:n}=t;return se(n,e,"internal-error"),Xb(n,new Ih(t),t.bypassAuthState)}/**
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
 */class k_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bA;case"linkViaPopup":case"linkViaRedirect":return RA;case"reauthViaPopup":case"reauthViaRedirect":return AA;default:dn(this.auth,"internal-error")}}resolve(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SA=new ho(2e3,1e4);class ws extends k_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return se(e,this.auth,"internal-error"),e}async onExecution(){Gn(this.filter.length===1,"Popup operations only handle one event");const e=Th();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Pn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Pn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Pn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SA.get())};e()}}ws.currentPopupAction=null;/**
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
 */const PA="pendingRedirect",ca=new Map;class CA extends k_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ca.get(this.auth._key());if(!e){try{const r=await kA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ca.set(this.auth._key(),e)}return this.bypassAuthState||ca.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kA(t,e){const n=NA(e),r=VA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function OA(t,e){ca.set(t._key(),e)}function VA(t){return $n(t._redirectPersistence)}function NA(t){return la(PA,t.config.apiKey,t.name)}async function DA(t,e,n=!1){if(In(t.app))return Promise.reject(zn(t));const r=ls(t),s=IA(r,e),o=await new CA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const xA=10*60*1e3;class MA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!LA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!O_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Pn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xA&&this.cachedEventUids.clear(),this.cachedEventUids.has(qf(e))}saveEventToCache(e){this.cachedEventUids.add(qf(e)),this.lastProcessedEventTime=Date.now()}}function qf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function O_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function LA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return O_(t);default:return!1}}/**
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
 */async function UA(t,e={}){return Jn(t,"GET","/v1/projects",e)}/**
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
 */const FA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$A=/^https?/;async function BA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UA(t);for(const n of e)try{if(jA(n))return}catch{}dn(t,"unauthorized-domain")}function jA(t){const e=ru(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!$A.test(n))return!1;if(FA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qA=new ho(3e4,6e4);function Hf(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function HA(t){return new Promise((e,n)=>{var r,s,i;function o(){Hf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hf(),n(Pn(t,"network-request-failed"))},timeout:qA.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const a=Db("iframefcb");return Cn()[a]=()=>{gapi.load?o():n(Pn(t,"network-request-failed"))},m_(`${Nb()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ua=null,e})}let ua=null;function zA(t){return ua=ua||HA(t),ua}/**
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
 */const WA=new ho(5e3,15e3),KA="__/auth/iframe",GA="emulator/auth/iframe",QA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},YA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function XA(t){const e=t.config;se(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?_h(e,GA):`https://${t.config.authDomain}/${KA}`,r={apiKey:e.apiKey,appName:t.name,v:as},s=YA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${uo(r).slice(1)}`}async function JA(t){const e=await zA(t),n=Cn().gapi;return se(n,t,"internal-error"),e.open({where:document.body,url:XA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:QA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Pn(t,"network-request-failed"),a=Cn().setTimeout(()=>{i(o)},WA.get());function l(){Cn().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const ZA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},eR=500,tR=600,nR="_blank",rR="http://localhost";class zf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function sR(t,e,n,r=eR,s=tR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},ZA),{width:r.toString(),height:s.toString(),top:i,left:o}),c=ot().toLowerCase();n&&(a=c_(c)?nR:n),l_(c)&&(e=e||rR,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,v])=>`${d}${f}=${v},`,"");if(Ib(c)&&a!=="_self")return iR(e||"",a),new zf(null);const h=window.open(e||"",a,u);se(h,t,"popup-blocked");try{h.focus()}catch{}return new zf(h)}function iR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const oR="__/auth/handler",aR="emulator/auth/handler",lR=encodeURIComponent("fac");async function Wf(t,e,n,r,s,i){se(t.config.authDomain,t,"auth-domain-config-required"),se(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:as,eventId:s};if(e instanceof y_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",KT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof po){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${lR}=${encodeURIComponent(l)}`:"";return`${cR(t)}?${uo(a).slice(1)}${c}`}function cR({config:t}){return t.emulator?_h(t,aR):`https://${t.authDomain}/${oR}`}/**
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
 */const _c="webStorageSupport";class uR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A_,this._completeRedirectFn=DA,this._overrideRedirectResult=OA}async _openPopup(e,n,r,s){var i;Gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Wf(e,n,r,ru(),s);return sR(e,o,Th())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Wf(e,n,r,ru(),s);return fA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await JA(e),r=new MA(e);return n.register("authEvent",s=>(se(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_c,{type:_c},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_c];o!==void 0&&n(!!o),dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p_()||vh()||pl()}}const hR=uR;var Kf="@firebase/auth",Gf="1.7.0";/**
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
 */class dR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){se(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function fR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function pR(t){Yr(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;se(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g_(t)},c=new kb(r,s,i,l);return Fb(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Yr(new wr("auth-internal",e=>{const n=ls(e.getProvider("auth").getImmediate());return(r=>new dR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Kf,Gf,fR(t)),Sn(Kf,Gf,"esm2017")}/**
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
 */const gR=5*60,mR=zm("authIdTokenMaxAge")||gR;let Qf=null;const _R=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mR)return;const s=n==null?void 0:n.token;Qf!==s&&(Qf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yR(t=ph()){const e=fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ub(t,{popupRedirectResolver:hR,persistence:[TA,uA,A_]}),r=zm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=_R(i.toString());iA(n,o,()=>o(n.currentUser)),sA(n,a=>o(a))}}const s=jm("auth");return s&&$b(n,`http://${s}`),n}function vR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ob({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Pn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",vR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});pR("Browser");var ER=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,bh=bh||{},ue=ER||self;function yl(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function mo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function wR(t){return Object.prototype.hasOwnProperty.call(t,yc)&&t[yc]||(t[yc]=++TR)}var yc="closure_uid_"+(1e9*Math.random()>>>0),TR=0;function IR(t,e,n){return t.call.apply(t.bind,arguments)}function bR(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function kt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?kt=IR:kt=bR,kt.apply(null,arguments)}function qo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function gt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Rr(){this.s=this.s,this.o=this.o}var AR=0;Rr.prototype.s=!1;Rr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),AR!=0)&&wR(this)};Rr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const V_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ah(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Yf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(yl(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function Ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ot.prototype.h=function(){this.defaultPrevented=!0};var RR=function(){if(!ue.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};ue.addEventListener("test",n,e),ue.removeEventListener("test",n,e)}catch{}return t}();function qi(t){return/^[\s\xa0]*$/.test(t)}function vl(){var t=ue.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return vl().indexOf(t)!=-1}function Rh(t){return Rh[" "](t),t}Rh[" "]=function(){};function SR(t,e){var n=vS;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var PR=Tn("Opera"),Fs=Tn("Trident")||Tn("MSIE"),N_=Tn("Edge"),au=N_||Fs,D_=Tn("Gecko")&&!(vl().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),CR=vl().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function x_(){var t=ue.document;return t?t.documentMode:void 0}var lu;e:{var vc="",Ec=function(){var t=vl();if(D_)return/rv:([^\);]+)(\)|;)/.exec(t);if(N_)return/Edge\/([\d\.]+)/.exec(t);if(Fs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CR)return/WebKit\/(\S+)/.exec(t);if(PR)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ec&&(vc=Ec?Ec[1]:""),Fs){var wc=x_();if(wc!=null&&wc>parseFloat(vc)){lu=String(wc);break e}}lu=vc}var cu;if(ue.document&&Fs){var Xf=x_();cu=Xf||parseInt(lu,10)||void 0}else cu=void 0;var kR=cu;function Hi(t,e){if(Ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(D_){e:{try{Rh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:OR[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Hi.$.h.call(this)}}gt(Hi,Ot);var OR={2:"touch",3:"pen",4:"mouse"};Hi.prototype.h=function(){Hi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var _o="closure_listenable_"+(1e6*Math.random()|0),VR=0;function NR(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++VR,this.fa=this.ia=!1}function El(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Sh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function DR(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function M_(t){const e={};for(const n in t)e[n]=t[n];return e}const Jf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Jf.length;i++)n=Jf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wl(t){this.src=t,this.g={},this.h=0}wl.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=hu(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new NR(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function uu(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=V_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(El(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function hu(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Ph="closure_lm_"+(1e6*Math.random()|0),Tc={};function U_(t,e,n,r,s){if(r&&r.once)return $_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)U_(t,e[i],n,r,s);return null}return n=Oh(n),t&&t[_o]?t.O(e,n,mo(r)?!!r.capture:!!r,s):F_(t,e,n,!1,r,s)}function F_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=mo(s)?!!s.capture:!!s,a=kh(t);if(a||(t[Ph]=a=new wl(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=xR(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RR||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(j_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xR(){function t(n){return e.call(t.src,t.listener,n)}const e=MR;return t}function $_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)$_(t,e[i],n,r,s);return null}return n=Oh(n),t&&t[_o]?t.P(e,n,mo(r)?!!r.capture:!!r,s):F_(t,e,n,!0,r,s)}function B_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)B_(t,e[i],n,r,s);else r=mo(r)?!!r.capture:!!r,n=Oh(n),t&&t[_o]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=hu(i,n,r,s),-1<n&&(El(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=kh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=hu(e,n,r,s)),(n=-1<t?e[t]:null)&&Ch(n))}function Ch(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[_o])uu(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(j_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=kh(e))?(uu(n,t),n.h==0&&(n.src=null,e[Ph]=null)):El(t)}}}function j_(t){return t in Tc?Tc[t]:Tc[t]="on"+t}function MR(t,e){if(t.fa)t=!0;else{e=new Hi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Ch(t),t=n.call(r,e)}return t}function kh(t){return t=t[Ph],t instanceof wl?t:null}var Ic="__closure_events_fn_"+(1e9*Math.random()>>>0);function Oh(t){return typeof t=="function"?t:(t[Ic]||(t[Ic]=function(e){return t.handleEvent(e)}),t[Ic])}function pt(){Rr.call(this),this.i=new wl(this),this.S=this,this.J=null}gt(pt,Rr);pt.prototype[_o]=!0;pt.prototype.removeEventListener=function(t,e,n,r){B_(this,t,e,n,r)};function wt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Ot(e,t);else if(e instanceof Ot)e.target=e.target||t;else{var s=e;e=new Ot(r,t),L_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ho(o,r,!0,e)&&s}if(o=e.g=t,s=Ho(o,r,!0,e)&&s,s=Ho(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ho(o,r,!1,e)&&s}pt.prototype.N=function(){if(pt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)El(n[r]);delete t.g[e],t.h--}}this.J=null};pt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};pt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ho(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&uu(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var Vh=ue.JSON.stringify;class LR{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function UR(){var t=Nh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class FR{constructor(){this.h=this.g=null}add(e,n){const r=q_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var q_=new LR(()=>new $R,t=>t.reset());class $R{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function BR(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function jR(t){ue.setTimeout(()=>{throw t},0)}let zi,Wi=!1,Nh=new FR,H_=()=>{const t=ue.Promise.resolve(void 0);zi=()=>{t.then(qR)}};var qR=()=>{for(var t;t=UR();){try{t.h.call(t.g)}catch(n){jR(n)}var e=q_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Wi=!1};function Tl(t,e){pt.call(this),this.h=t||1,this.g=e||ue,this.j=kt(this.qb,this),this.l=Date.now()}gt(Tl,pt);q=Tl.prototype;q.ga=!1;q.T=null;q.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),wt(this,"tick"),this.ga&&(Dh(this),this.start()))}};q.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Dh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}q.N=function(){Tl.$.N.call(this),Dh(this),delete this.g};function xh(t,e,n){if(typeof t=="function")n&&(t=kt(t,n));else if(t&&typeof t.handleEvent=="function")t=kt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ue.setTimeout(t,e||0)}function z_(t){t.g=xh(()=>{t.g=null,t.i&&(t.i=!1,z_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class HR extends Rr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:z_(this)}N(){super.N(),this.g&&(ue.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ki(t){Rr.call(this),this.h=t,this.g={}}gt(Ki,Rr);var Zf=[];function W_(t,e,n,r){Array.isArray(n)||(n&&(Zf[0]=n.toString()),n=Zf);for(var s=0;s<n.length;s++){var i=U_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function K_(t){Sh(t.g,function(e,n){this.g.hasOwnProperty(n)&&Ch(e)},t),t.g={}}Ki.prototype.N=function(){Ki.$.N.call(this),K_(this)};Ki.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Il(){this.g=!0}Il.prototype.Ea=function(){this.g=!1};function zR(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function WR(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Ts(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+GR(t,n)+(r?" "+r:"")})}function KR(t,e){t.info(function(){return"TIMEOUT: "+e})}Il.prototype.info=function(){};function GR(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Vh(n)}catch{return e}}var cs={},ep=null;function bl(){return ep=ep||new pt}cs.Ta="serverreachability";function G_(t){Ot.call(this,cs.Ta,t)}gt(G_,Ot);function Gi(t){const e=bl();wt(e,new G_(e))}cs.STAT_EVENT="statevent";function Q_(t,e){Ot.call(this,cs.STAT_EVENT,t),this.stat=e}gt(Q_,Ot);function Lt(t){const e=bl();wt(e,new Q_(e,t))}cs.Ua="timingevent";function Y_(t,e){Ot.call(this,cs.Ua,t),this.size=e}gt(Y_,Ot);function yo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ue.setTimeout(function(){t()},e)}var Al={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},X_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Mh(){}Mh.prototype.h=null;function tp(t){return t.h||(t.h=t.i())}function J_(){}var vo={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Lh(){Ot.call(this,"d")}gt(Lh,Ot);function Uh(){Ot.call(this,"c")}gt(Uh,Ot);var du;function Rl(){}gt(Rl,Mh);Rl.prototype.g=function(){return new XMLHttpRequest};Rl.prototype.i=function(){return{}};du=new Rl;function Eo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ki(this),this.P=QR,t=au?125:void 0,this.V=new Tl(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Z_}function Z_(){this.i=null,this.g="",this.h=!1}var QR=45e3,ey={},fu={};q=Eo.prototype;q.setTimeout=function(t){this.P=t};function pu(t,e,n){t.L=1,t.A=Pl(Qn(e)),t.u=n,t.S=!0,ty(t,null)}function ty(t,e){t.G=Date.now(),wo(t),t.B=Qn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),cy(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Z_,t.g=ky(t.l,n?e:null,!t.u),0<t.O&&(t.M=new HR(kt(t.Pa,t,t.g),t.O)),W_(t.U,t.g,"readystatechange",t.nb),e=t.I?M_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Gi(),zR(t.j,t.v,t.B,t.m,t.W,t.u)}q.nb=function(t){t=t.target;const e=this.M;e&&bn(t)==3?e.l():this.Pa(t)};q.Pa=function(t){try{if(t==this.g)e:{const u=bn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||au||this.g&&(this.h.h||this.g.ja()||ip(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Gi(3):Gi(2)),Sl(this);var n=this.g.da();this.ca=n;t:if(ny(this)){var r=ip(this.g);t="";var s=r.length,i=bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fr(this),Si(this);var o="";break t}this.h.i=new ue.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,WR(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!qi(a)){var c=a;break t}}c=null}if(n=c)Ts(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,gu(this,n);else{this.i=!1,this.s=3,Lt(12),Fr(this),Si(this);break e}}this.S?(ry(this,u,o),au&&this.i&&u==3&&(W_(this.U,this.V,"tick",this.mb),this.V.start())):(Ts(this.j,this.m,o,null),gu(this,o)),u==4&&Fr(this),this.i&&!this.J&&(u==4?Ry(this.l,this):(this.i=!1,wo(this)))}else mS(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Lt(12)):(this.s=0,Lt(13)),Fr(this),Si(this)}}}catch{}finally{}};function ny(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function ry(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=YR(t,n),s==fu){e==4&&(t.s=4,Lt(14),r=!1),Ts(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ey){t.s=4,Lt(15),Ts(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Ts(t.j,t.m,s,null),gu(t,s);ny(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,Lt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hh(e),e.M=!0,Lt(11))):(Ts(t.j,t.m,n,"[Invalid Chunked Response]"),Fr(t),Si(t))}q.mb=function(){if(this.g){var t=bn(this.g),e=this.g.ja();this.o<e.length&&(Sl(this),ry(this,t,e),this.i&&t!=4&&wo(this))}};function YR(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?fu:(n=Number(e.substring(n,r)),isNaN(n)?ey:(r+=1,r+n>e.length?fu:(e=e.slice(r,r+n),t.o=r+n,e)))}q.cancel=function(){this.J=!0,Fr(this)};function wo(t){t.Y=Date.now()+t.P,sy(t,t.P)}function sy(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=yo(kt(t.lb,t),e)}function Sl(t){t.C&&(ue.clearTimeout(t.C),t.C=null)}q.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(KR(this.j,this.B),this.L!=2&&(Gi(),Lt(17)),Fr(this),this.s=2,Si(this)):sy(this,this.Y-t)};function Si(t){t.l.H==0||t.J||Ry(t.l,t)}function Fr(t){Sl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Dh(t.V),K_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function gu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||mu(n.i,t))){if(!t.K&&mu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Va(n),Vl(n);else break e;qh(n),Lt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=yo(kt(n.ib,n),6e3));if(1>=dy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else $r(n,11)}else if((t.K||n.g==t)&&Va(n),!qi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const v=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var i=r.i;i.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Fh(i,i.h),i.h=null))}if(r.F){const T=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,qe(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=Cy(r,r.J?r.pa:null,r.Y),o.K){fy(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Sl(a),wo(a)),r.g=o}else by(r);0<n.j.length&&Nl(n)}else c[0]!="stop"&&c[0]!="close"||$r(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?$r(n,7):jh(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Gi(4)}catch{}}function XR(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(yl(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function JR(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(yl(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function iy(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(yl(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=JR(t),r=XR(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var oy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ZR(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Wr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Wr){this.h=t.h,ka(this,t.j),this.s=t.s,this.g=t.g,Oa(this,t.m),this.l=t.l;var e=t.i,n=new Qi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),np(this,n),this.o=t.o}else t&&(e=String(t).match(oy))?(this.h=!1,ka(this,e[1]||"",!0),this.s=mi(e[2]||""),this.g=mi(e[3]||"",!0),Oa(this,e[4]),this.l=mi(e[5]||"",!0),np(this,e[6]||"",!0),this.o=mi(e[7]||"")):(this.h=!1,this.i=new Qi(null,this.h))}Wr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(_i(e,rp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(_i(e,rp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(_i(n,n.charAt(0)=="/"?nS:tS,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",_i(n,sS)),t.join("")};function Qn(t){return new Wr(t)}function ka(t,e,n){t.j=n?mi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Oa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function np(t,e,n){e instanceof Qi?(t.i=e,iS(t.i,t.h)):(n||(e=_i(e,rS)),t.i=new Qi(e,t.h))}function qe(t,e,n){t.i.set(e,n)}function Pl(t){return qe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function mi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function _i(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,eS),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function eS(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var rp=/[#\/\?@]/g,tS=/[#\?:]/g,nS=/[#\?]/g,rS=/[#\?@]/g,sS=/#/g;function Qi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Sr(t){t.g||(t.g=new Map,t.h=0,t.i&&ZR(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}q=Qi.prototype;q.add=function(t,e){Sr(this),this.i=null,t=Js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function ay(t,e){Sr(t),e=Js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function ly(t,e){return Sr(t),e=Js(t,e),t.g.has(e)}q.forEach=function(t,e){Sr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};q.ta=function(){Sr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};q.Z=function(t){Sr(this);let e=[];if(typeof t=="string")ly(this,t)&&(e=e.concat(this.g.get(Js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};q.set=function(t,e){return Sr(this),this.i=null,t=Js(this,t),ly(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};q.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function cy(t,e,n){ay(t,e),0<n.length&&(t.i=null,t.g.set(Js(t,e),Ah(n)),t.h+=n.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function iS(t,e){e&&!t.j&&(Sr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ay(this,r),cy(this,s,n))},t)),t.j=e}var oS=class{constructor(t,e){this.g=t,this.map=e}};function uy(t){this.l=t||aS,ue.PerformanceNavigationTiming?(t=ue.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ue.g&&ue.g.Ka&&ue.g.Ka()&&ue.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var aS=10;function hy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function dy(t){return t.h?1:t.g?t.g.size:0}function mu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Fh(t,e){t.g?t.g.add(e):t.h=e}function fy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}uy.prototype.cancel=function(){if(this.i=py(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function py(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ah(t.i)}var lS=class{stringify(t){return ue.JSON.stringify(t,void 0)}parse(t){return ue.JSON.parse(t,void 0)}};function cS(){this.g=new lS}function uS(t,e,n){const r=n||"";try{iy(t,function(s,i){let o=s;mo(s)&&(o=Vh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function hS(t,e){const n=new Il;if(ue.Image){const r=new Image;r.onload=qo(zo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=qo(zo,n,r,"TestLoadImage: error",!1,e),r.onabort=qo(zo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=qo(zo,n,r,"TestLoadImage: timeout",!1,e),ue.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function zo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Cl(t){this.l=t.ec||null,this.j=t.ob||!1}gt(Cl,Mh);Cl.prototype.g=function(){return new kl(this.l,this.j)};Cl.prototype.i=function(t){return function(){return t}}({});function kl(t,e){pt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=$h,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(kl,pt);var $h=0;q=kl.prototype;q.open=function(t,e){if(this.readyState!=$h)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Yi(this)};q.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ue).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,To(this)),this.readyState=$h};q.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ue.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;gy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function gy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}q.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?To(this):Yi(this),this.readyState==3&&gy(this)}};q.Za=function(t){this.g&&(this.response=this.responseText=t,To(this))};q.Ya=function(t){this.g&&(this.response=t,To(this))};q.ka=function(){this.g&&To(this)};function To(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Yi(t)}q.setRequestHeader=function(t,e){this.v.append(t,e)};q.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Yi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(kl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var dS=ue.JSON.parse;function tt(t){pt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=my,this.L=this.M=!1}gt(tt,pt);var my="",fS=/^https?$/i,pS=["POST","PUT"];q=tt.prototype;q.Oa=function(t){this.M=t};q.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():du.g(),this.C=this.u?tp(this.u):tp(du),this.g.onreadystatechange=kt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){sp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=ue.FormData&&t instanceof ue.FormData,!(0<=V_(pS,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{vy(this),0<this.B&&((this.L=gS(this.g))?(this.g.timeout=this.B,this.g.ontimeout=kt(this.ua,this)):this.A=xh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){sp(this,i)}};function gS(t){return Fs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}q.ua=function(){typeof bh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,wt(this,"timeout"),this.abort(8))};function sp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,_y(t),Ol(t)}function _y(t){t.F||(t.F=!0,wt(t,"complete"),wt(t,"error"))}q.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,wt(this,"complete"),wt(this,"abort"),Ol(this))};q.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ol(this,!0)),tt.$.N.call(this)};q.La=function(){this.s||(this.G||this.v||this.l?yy(this):this.kb())};q.kb=function(){yy(this)};function yy(t){if(t.h&&typeof bh<"u"&&(!t.C[1]||bn(t)!=4||t.da()!=2)){if(t.v&&bn(t)==4)xh(t.La,0,t);else if(wt(t,"readystatechange"),bn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(oy)[1]||null;!s&&ue.self&&ue.self.location&&(s=ue.self.location.protocol.slice(0,-1)),r=!fS.test(s?s.toLowerCase():"")}n=r}if(n)wt(t,"complete"),wt(t,"success");else{t.m=6;try{var i=2<bn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",_y(t)}}finally{Ol(t)}}}}function Ol(t,e){if(t.g){vy(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||wt(t,"ready");try{n.onreadystatechange=r}catch{}}}function vy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ue.clearTimeout(t.A),t.A=null)}q.isActive=function(){return!!this.g};function bn(t){return t.g?t.g.readyState:0}q.da=function(){try{return 2<bn(this)?this.g.status:-1}catch{return-1}};q.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),dS(e)}};function ip(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case my:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function mS(t){const e={};t=(t.g&&2<=bn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(qi(t[r]))continue;var n=BR(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}DR(e,function(r){return r.join(", ")})}q.Ia=function(){return this.m};q.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ey(t){let e="";return Sh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Bh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Ey(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):qe(t,e,n))}function li(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function wy(t){this.Ga=0,this.j=[],this.l=new Il,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=li("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=li("baseRetryDelayMs",5e3,t),this.hb=li("retryDelaySeedMs",1e4,t),this.eb=li("forwardChannelMaxRetries",2,t),this.xa=li("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new uy(t&&t.concurrentRequestLimit),this.Ja=new cS,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}q=wy.prototype;q.ra=8;q.H=1;function jh(t){if(Ty(t),t.H==3){var e=t.W++,n=Qn(t.I);if(qe(n,"SID",t.K),qe(n,"RID",e),qe(n,"TYPE","terminate"),Io(t,n),e=new Eo(t,t.l,e),e.L=2,e.A=Pl(Qn(n)),n=!1,ue.navigator&&ue.navigator.sendBeacon)try{n=ue.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&ue.Image&&(new Image().src=e.A,n=!0),n||(e.g=ky(e.l,null),e.g.ha(e.A)),e.G=Date.now(),wo(e)}Py(t)}function Vl(t){t.g&&(Hh(t),t.g.cancel(),t.g=null)}function Ty(t){Vl(t),t.u&&(ue.clearTimeout(t.u),t.u=null),Va(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ue.clearTimeout(t.m),t.m=null)}function Nl(t){if(!hy(t.i)&&!t.m){t.m=!0;var e=t.Na;zi||H_(),Wi||(zi(),Wi=!0),Nh.add(e,t),t.C=0}}function _S(t,e){return dy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=yo(kt(t.Na,t,e),Sy(t,t.C)),t.C++,!0)}q.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Eo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=M_(i),L_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Iy(this,s,e),n=Qn(this.I),qe(n,"RID",t),qe(n,"CVER",22),this.F&&qe(n,"X-HTTP-Session-Id",this.F),Io(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Ey(i)))+"&"+e:this.o&&Bh(n,this.o,i)),Fh(this.i,s),this.bb&&qe(n,"TYPE","init"),this.P?(qe(n,"$req",e),qe(n,"SID","null"),s.aa=!0,pu(s,n,null)):pu(s,n,e),this.H=2}}else this.H==3&&(t?op(this,t):this.j.length==0||hy(this.i)||op(this))};function op(t,e){var n;e?n=e.m:n=t.W++;const r=Qn(t.I);qe(r,"SID",t.K),qe(r,"RID",n),qe(r,"AID",t.V),Io(t,r),t.o&&t.s&&Bh(r,t.o,t.s),n=new Eo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Iy(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Fh(t.i,n),pu(n,r,e)}function Io(t,e){t.na&&Sh(t.na,function(n,r){qe(e,r,n)}),t.h&&iy({},function(n,r){qe(e,r,n)})}function Iy(t,e,n){n=Math.min(t.j.length,n);var r=t.h?kt(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{uS(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function by(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;zi||H_(),Wi||(zi(),Wi=!0),Nh.add(e,t),t.A=0}}function qh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=yo(kt(t.Ma,t),Sy(t,t.A)),t.A++,!0)}q.Ma=function(){if(this.u=null,Ay(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=yo(kt(this.jb,this),t)}};q.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Lt(10),Vl(this),Ay(this))};function Hh(t){t.B!=null&&(ue.clearTimeout(t.B),t.B=null)}function Ay(t){t.g=new Eo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Qn(t.wa);qe(e,"RID","rpc"),qe(e,"SID",t.K),qe(e,"AID",t.V),qe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&qe(e,"TO",t.qa),qe(e,"TYPE","xmlhttp"),Io(t,e),t.o&&t.s&&Bh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Pl(Qn(e)),n.u=null,n.S=!0,ty(n,t)}q.ib=function(){this.v!=null&&(this.v=null,Vl(this),qh(this),Lt(19))};function Va(t){t.v!=null&&(ue.clearTimeout(t.v),t.v=null)}function Ry(t,e){var n=null;if(t.g==e){Va(t),Hh(t),t.g=null;var r=2}else if(mu(t.i,e))n=e.F,fy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=bl(),wt(r,new Y_(r,n)),Nl(t)}else by(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&_S(t,e)||r==2&&qh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:$r(t,5);break;case 4:$r(t,10);break;case 3:$r(t,6);break;default:$r(t,2)}}}function Sy(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function $r(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=kt(t.pb,t);n||(n=new Wr("//www.google.com/images/cleardot.gif"),ue.location&&ue.location.protocol=="http"||ka(n,"https"),Pl(n)),hS(n.toString(),r)}else Lt(2);t.H=0,t.h&&t.h.za(e),Py(t),Ty(t)}q.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Lt(2)):(this.l.info("Failed to ping google.com"),Lt(1))};function Py(t){if(t.H=0,t.ma=[],t.h){const e=py(t.i);(e.length!=0||t.j.length!=0)&&(Yf(t.ma,e),Yf(t.ma,t.j),t.i.i.length=0,Ah(t.j),t.j.length=0),t.h.ya()}}function Cy(t,e,n){var r=n instanceof Wr?Qn(n):new Wr(n);if(r.g!="")e&&(r.g=e+"."+r.g),Oa(r,r.m);else{var s=ue.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Wr(null);r&&ka(i,r),e&&(i.g=e),s&&Oa(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&qe(r,n,e),qe(r,"VER",t.ra),Io(t,r),r}function ky(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new tt(new Cl({ob:n})):new tt(t.va),e.Oa(t.J),e}q.isActive=function(){return!!this.h&&this.h.isActive(this)};function Oy(){}q=Oy.prototype;q.Ba=function(){};q.Aa=function(){};q.za=function(){};q.ya=function(){};q.isActive=function(){return!0};q.Va=function(){};function Na(){if(Fs&&!(10<=Number(kR)))throw Error("Environmental error: no available transport.")}Na.prototype.g=function(t,e){return new en(t,e)};function en(t,e){pt.call(this),this.g=new wy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!qi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!qi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Zs(this)}gt(en,pt);en.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Lt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=Cy(t,null,t.Y),Nl(t)};en.prototype.close=function(){jh(this.g)};en.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Vh(t),t=n);e.j.push(new oS(e.fb++,t)),e.H==3&&Nl(e)};en.prototype.N=function(){this.g.h=null,delete this.j,jh(this.g),delete this.g,en.$.N.call(this)};function Vy(t){Lh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}gt(Vy,Lh);function Ny(){Uh.call(this),this.status=1}gt(Ny,Uh);function Zs(t){this.g=t}gt(Zs,Oy);Zs.prototype.Ba=function(){wt(this.g,"a")};Zs.prototype.Aa=function(t){wt(this.g,new Vy(t))};Zs.prototype.za=function(t){wt(this.g,new Ny)};Zs.prototype.ya=function(){wt(this.g,"b")};function yS(){this.blockSize=-1}function fn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}gt(fn,yS);fn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function bc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}fn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)bc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){bc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){bc(this,r),s=0;break}}this.h=s,this.i+=e};fn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Ne(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var vS={};function zh(t){return-128<=t&&128>t?SR(t,function(e){return new Ne([e|0],0>e?-1:0)}):new Ne([t|0],0>t?-1:0)}function An(t){if(isNaN(t)||!isFinite(t))return Vs;if(0>t)return yt(An(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=_u;return new Ne(e,0)}function Dy(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return yt(Dy(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=An(Math.pow(e,8)),r=Vs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=An(Math.pow(e,i)),r=r.R(i).add(An(o))):(r=r.R(n),r=r.add(An(o)))}return r}var _u=4294967296,Vs=zh(0),yu=zh(1),ap=zh(16777216);q=Ne.prototype;q.ea=function(){if(tn(this))return-yt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:_u+r)*e,e*=_u}return t};q.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Bn(this))return"0";if(tn(this))return"-"+yt(this).toString(t);for(var e=An(Math.pow(t,6)),n=this,r="";;){var s=xa(n,e).g;n=Da(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Bn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};q.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Bn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function tn(t){return t.h==-1}q.X=function(t){return t=Da(this,t),tn(t)?-1:Bn(t)?0:1};function yt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Ne(n,~t.h).add(yu)}q.abs=function(){return tn(this)?yt(this):this};q.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Ne(n,n[n.length-1]&-2147483648?-1:0)};function Da(t,e){return t.add(yt(e))}q.R=function(t){if(Bn(this)||Bn(t))return Vs;if(tn(this))return tn(t)?yt(this).R(yt(t)):yt(yt(this).R(t));if(tn(t))return yt(this.R(yt(t)));if(0>this.X(ap)&&0>t.X(ap))return An(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,Wo(n,2*r+2*s),n[2*r+2*s+1]+=i*l,Wo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Wo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Wo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Ne(n,0)};function Wo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function ci(t,e){this.g=t,this.h=e}function xa(t,e){if(Bn(e))throw Error("division by zero");if(Bn(t))return new ci(Vs,Vs);if(tn(t))return e=xa(yt(t),e),new ci(yt(e.g),yt(e.h));if(tn(e))return e=xa(t,yt(e)),new ci(yt(e.g),e.h);if(30<t.g.length){if(tn(t)||tn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=yu,r=e;0>=r.X(t);)n=lp(n),r=lp(r);var s=gs(n,1),i=gs(r,1);for(r=gs(r,2),n=gs(n,2);!Bn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=gs(r,1),n=gs(n,1)}return e=Da(t,s.R(e)),new ci(s,e)}for(s=Vs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=An(n),o=i.R(e);tn(o)||0<o.X(t);)n-=r,i=An(n),o=i.R(e);Bn(i)&&(i=yu),s=s.add(i),t=Da(t,o)}return new ci(s,t)}q.gb=function(t){return xa(this,t).h};q.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Ne(n,this.h&t.h)};q.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Ne(n,this.h|t.h)};q.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Ne(n,this.h^t.h)};function lp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Ne(n,t.h)}function gs(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Ne(s,t.h)}Na.prototype.createWebChannel=Na.prototype.g;en.prototype.send=en.prototype.u;en.prototype.open=en.prototype.m;en.prototype.close=en.prototype.close;Al.NO_ERROR=0;Al.TIMEOUT=8;Al.HTTP_ERROR=6;X_.COMPLETE="complete";J_.EventType=vo;vo.OPEN="a";vo.CLOSE="b";vo.ERROR="c";vo.MESSAGE="d";pt.prototype.listen=pt.prototype.O;tt.prototype.listenOnce=tt.prototype.P;tt.prototype.getLastError=tt.prototype.Sa;tt.prototype.getLastErrorCode=tt.prototype.Ia;tt.prototype.getStatus=tt.prototype.da;tt.prototype.getResponseJson=tt.prototype.Wa;tt.prototype.getResponseText=tt.prototype.ja;tt.prototype.send=tt.prototype.ha;tt.prototype.setWithCredentials=tt.prototype.Oa;fn.prototype.digest=fn.prototype.l;fn.prototype.reset=fn.prototype.reset;fn.prototype.update=fn.prototype.j;Ne.prototype.add=Ne.prototype.add;Ne.prototype.multiply=Ne.prototype.R;Ne.prototype.modulo=Ne.prototype.gb;Ne.prototype.compare=Ne.prototype.X;Ne.prototype.toNumber=Ne.prototype.ea;Ne.prototype.toString=Ne.prototype.toString;Ne.prototype.getBits=Ne.prototype.D;Ne.fromNumber=An;Ne.fromString=Dy;var ES=function(){return new Na},wS=function(){return bl()},Ac=Al,TS=X_,IS=cs,cp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Ko=J_,bS=tt,AS=fn,Ns=Ne;const up="@firebase/firestore";/**
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
 */class Rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Rt.UNAUTHENTICATED=new Rt(null),Rt.GOOGLE_CREDENTIALS=new Rt("google-credentials-uid"),Rt.FIRST_PARTY=new Rt("first-party-uid"),Rt.MOCK_USER=new Rt("mock-user");/**
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
 */let ei="10.10.0";/**
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
 */const Zr=new dh("@firebase/firestore");function ui(){return Zr.logLevel}function j(t,...e){if(Zr.logLevel<=Te.DEBUG){const n=e.map(Wh);Zr.debug(`Firestore (${ei}): ${t}`,...n)}}function Dn(t,...e){if(Zr.logLevel<=Te.ERROR){const n=e.map(Wh);Zr.error(`Firestore (${ei}): ${t}`,...n)}}function $s(t,...e){if(Zr.logLevel<=Te.WARN){const n=e.map(Wh);Zr.warn(`Firestore (${ei}): ${t}`,...n)}}function Wh(t){if(typeof t=="string")return t;try{/**
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
 */function ae(t="Unexpected state"){const e=`FIRESTORE (${ei}) INTERNAL ASSERTION FAILED: `+t;throw Dn(e),new Error(e)}function $e(t,e){t||ae()}function _e(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Mn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class kn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class xy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class RS{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Rt.UNAUTHENTICATED))}shutdown(){}}class SS{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class PS{constructor(e){this.t=e,this.currentUser=Rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new kn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new kn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new kn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?($e(typeof r.accessToken=="string"),new xy(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $e(e===null||typeof e=="string"),new Rt(e)}}class CS{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Rt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kS{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new CS(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Rt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class OS{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VS{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($e(typeof n.token=="string"),this.R=n.token,new OS(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function NS(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class My{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=NS(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ke(t,e){return t<e?-1:t>e?1:0}function Bs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class at{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new at(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ke(this.nanoseconds,e.nanoseconds):ke(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class de{constructor(e){this.timestamp=e}static fromTimestamp(e){return new de(e)}static min(){return new de(new at(0,0))}static max(){return new de(new at(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Xi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ae(),r===void 0?r=e.length-n:r>e.length-n&&ae(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Xi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Xi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class He extends Xi{construct(e,n,r){return new He(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new He(n)}static emptyPath(){return new He([])}}const DS=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class vt extends Xi{construct(e,n,r){return new vt(e,n,r)}static isValidIdentifier(e){return DS.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),vt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new vt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new K(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new K(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new K(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new vt(n)}static emptyPath(){return new vt([])}}/**
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
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(He.fromString(e))}static fromName(e){return new te(He.fromString(e).popFirst(5))}static empty(){return new te(He.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&He.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return He.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new He(e.slice()))}}function xS(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=de.fromTimestamp(r===1e9?new at(n+1,0):new at(n,r));return new Tr(s,te.empty(),e)}function MS(t){return new Tr(t.readTime,t.key,-1)}class Tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Tr(de.min(),te.empty(),-1)}static max(){return new Tr(de.max(),te.empty(),-1)}}function LS(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:ke(t.largestBatchId,e.largestBatchId))}/**
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
 */const US="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class FS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function bo(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==US)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(s=>s?P.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new P((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new P((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Kh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new kn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new Pi(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Gh(r.target.error);this.V.reject(new Pi(e,s))}}static open(e,n,r,s){try{return new Kh(n,e.transaction(s,r))}catch(i){throw new Pi(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(j("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new BS(n)}}class Br{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Br.S(ot())===12.2&&Dn("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return j("SimpleDb","Removing database:",e),Mr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Km())return!1;if(Br.C())return!0;const e=ot(),n=Br.S(e),r=0<n&&n<10,s=Br.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(j("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new Pi(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new K(A.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new K(A.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Pi(e,o))},s.onupgradeneeded=i=>{j("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{j("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Kh.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),P.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(j("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class $S{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return Mr(this.k.delete())}}class Pi extends K{constructor(e,n){super(A.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Ao(t){return t.name==="IndexedDbTransactionError"}class BS{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(j("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(j("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Mr(r)}add(e){return j("SimpleDb","ADD",this.store.name,e,e),Mr(this.store.add(e))}get(e){return Mr(this.store.get(e)).next(n=>(n===void 0&&(n=null),j("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return j("SimpleDb","DELETE",this.store.name,e),Mr(this.store.delete(e))}count(){return j("SimpleDb","COUNT",this.store.name),Mr(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new P((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new P((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){j("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new P((r,s)=>{n.onerror=i=>{const o=Gh(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new $S(a),c=n(a.primaryKey,a.value,l);if(c instanceof P){const u=c.catch(h=>(l.done(),P.reject(h)));r.push(u)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>P.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function Mr(t){return new P((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Gh(r.target.error);n(s)}})}let hp=!1;function Gh(t){const e=Br.S(ot());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new K("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return hp||(hp=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class Qh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Qh._e=-1;function Dl(t){return t==null}function Ma(t){return t===0&&1/t==-1/0}function jS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function dp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function us(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ly(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||_t.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,_t.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_t.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Go(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Go(this.root,e,this.comparator,!1)}getReverseIterator(){return new Go(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Go(this.root,e,this.comparator,!0)}}class Go{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _t{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??_t.RED,this.left=s??_t.EMPTY,this.right=i??_t.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new _t(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return _t.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return _t.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_t.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_t.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ae();const e=this.left.check();if(e!==this.right.check())throw ae();return e+(this.isRed()?0:1)}}_t.EMPTY=null,_t.RED=!0,_t.BLACK=!1;_t.EMPTY=new class{constructor(){this.size=0}get key(){throw ae()}get value(){throw ae()}get color(){throw ae()}get left(){throw ae()}get right(){throw ae()}copy(e,n,r,s,i){return this}insert(e,n,r){return new _t(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Tt{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new fp(this.data.getIterator())}getIteratorFrom(e){return new fp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Tt(this.comparator);return n.data=e,n}}class fp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(vt.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new Tt(vt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Bs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class Uy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Vt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Uy("Invalid base64 string: "+i):i}}(e);return new Vt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Vt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ke(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Vt.EMPTY_BYTE_STRING=new Vt("");const qS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ir(t){if($e(!!t),typeof t=="string"){let e=0;const n=qS.exec(t);if($e(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rt(t.seconds),nanos:rt(t.nanos)}}function rt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function es(t){return typeof t=="string"?Vt.fromBase64String(t):Vt.fromUint8Array(t)}/**
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
 */function Yh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Xh(t){const e=t.mapValue.fields.__previous_value__;return Yh(e)?Xh(e):e}function Ji(t){const e=Ir(t.mapValue.fields.__local_write_time__.timestampValue);return new at(e.seconds,e.nanos)}/**
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
 */class HS{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Zi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Zi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Zi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Qo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Yh(t)?4:zS(t)?9007199254740991:10:ae()}function xn(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ji(t).isEqual(Ji(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ir(s.timestampValue),a=Ir(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return es(s.bytesValue).isEqual(es(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return rt(s.geoPointValue.latitude)===rt(i.geoPointValue.latitude)&&rt(s.geoPointValue.longitude)===rt(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return rt(s.integerValue)===rt(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=rt(s.doubleValue),a=rt(i.doubleValue);return o===a?Ma(o)===Ma(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Bs(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(dp(o)!==dp(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!xn(o[l],a[l])))return!1;return!0}(t,e);default:return ae()}}function eo(t,e){return(t.values||[]).find(n=>xn(n,e))!==void 0}function js(t,e){if(t===e)return 0;const n=ts(t),r=ts(e);if(n!==r)return ke(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ke(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=rt(i.integerValue||i.doubleValue),l=rt(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return pp(t.timestampValue,e.timestampValue);case 4:return pp(Ji(t),Ji(e));case 5:return ke(t.stringValue,e.stringValue);case 6:return function(i,o){const a=es(i),l=es(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=ke(a[c],l[c]);if(u!==0)return u}return ke(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ke(rt(i.latitude),rt(o.latitude));return a!==0?a:ke(rt(i.longitude),rt(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=js(a[c],l[c]);if(u)return u}return ke(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Qo.mapValue&&o===Qo.mapValue)return 0;if(i===Qo.mapValue)return 1;if(o===Qo.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=ke(l[h],u[h]);if(d!==0)return d;const f=js(a[l[h]],c[u[h]]);if(f!==0)return f}return ke(l.length,u.length)}(t.mapValue,e.mapValue);default:throw ae()}}function pp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ke(t,e);const n=Ir(t),r=Ir(e),s=ke(n.seconds,r.seconds);return s!==0?s:ke(n.nanos,r.nanos)}function qs(t){return vu(t)}function vu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Ir(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return es(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return te.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vu(n.fields[o])}`;return s+"}"}(t.mapValue):ae()}function gp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Eu(t){return!!t&&"integerValue"in t}function Jh(t){return!!t&&"arrayValue"in t}function mp(t){return!!t&&"nullValue"in t}function _p(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ha(t){return!!t&&"mapValue"in t}function Ci(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return us(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Ci(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ci(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ha(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ci(n)}setAll(e){let n=vt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=Ci(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ha(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ha(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){us(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new zt(Ci(this.value))}}function Fy(t){const e=[];return us(t.fields,(n,r)=>{const s=new vt([n]);if(ha(r)){const i=Fy(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Jt(e)}/**
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
 */class St{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new St(e,0,de.min(),de.min(),de.min(),zt.empty(),0)}static newFoundDocument(e,n,r,s){return new St(e,1,n,de.min(),r,s,0)}static newNoDocument(e,n){return new St(e,2,n,de.min(),de.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,de.min(),de.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class La{constructor(e,n){this.position=e,this.inclusive=n}}function yp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=js(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Ua{constructor(e,n="asc"){this.field=e,this.dir=n}}function WS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $y{}class st extends $y{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new GS(e,n,r):n==="array-contains"?new XS(e,r):n==="in"?new JS(e,r):n==="not-in"?new ZS(e,r):n==="array-contains-any"?new eP(e,r):new st(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new QS(e,r):new YS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(js(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class pn extends $y{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new pn(e,n)}matches(e){return By(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function By(t){return t.op==="and"}function jy(t){return KS(t)&&By(t)}function KS(t){for(const e of t.filters)if(e instanceof pn)return!1;return!0}function wu(t){if(t instanceof st)return t.field.canonicalString()+t.op.toString()+qs(t.value);if(jy(t))return t.filters.map(e=>wu(e)).join(",");{const e=t.filters.map(n=>wu(n)).join(",");return`${t.op}(${e})`}}function qy(t,e){return t instanceof st?function(r,s){return s instanceof st&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)}(t,e):t instanceof pn?function(r,s){return s instanceof pn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&qy(o,s.filters[a]),!0):!1}(t,e):void ae()}function Hy(t){return t instanceof st?function(n){return`${n.field.canonicalString()} ${n.op} ${qs(n.value)}`}(t):t instanceof pn?function(n){return n.op.toString()+" {"+n.getFilters().map(Hy).join(" ,")+"}"}(t):"Filter"}class GS extends st{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class QS extends st{constructor(e,n){super(e,"in",n),this.keys=zy("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class YS extends st{constructor(e,n){super(e,"not-in",n),this.keys=zy("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function zy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>te.fromName(r.referenceValue))}class XS extends st{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Jh(n)&&eo(n.arrayValue,this.value)}}class JS extends st{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&eo(this.value.arrayValue,n)}}class ZS extends st{constructor(e,n){super(e,"not-in",n)}matches(e){if(eo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!eo(this.value.arrayValue,n)}}class eP extends st{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Jh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>eo(this.value.arrayValue,r))}}/**
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
 */class tP{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Ep(t,e=null,n=[],r=[],s=null,i=null,o=null){return new tP(t,e,n,r,s,i,o)}function Zh(t){const e=_e(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>wu(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Dl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>qs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>qs(r)).join(",")),e.ce=n}return e.ce}function ed(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!WS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!qy(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vp(t.startAt,e.startAt)&&vp(t.endAt,e.endAt)}function Tu(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ro{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function nP(t,e,n,r,s,i,o,a){return new Ro(t,e,n,r,s,i,o,a)}function td(t){return new Ro(t)}function wp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Wy(t){return t.collectionGroup!==null}function ki(t){const e=_e(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Tt(vt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Ua(i,r))}),n.has(vt.keyField().canonicalString())||e.le.push(new Ua(vt.keyField(),r))}return e.le}function On(t){const e=_e(t);return e.he||(e.he=rP(e,ki(t))),e.he}function rP(t,e){if(t.limitType==="F")return Ep(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ua(s.field,i)});const n=t.endAt?new La(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new La(t.startAt.position,t.startAt.inclusive):null;return Ep(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Iu(t,e){const n=t.filters.concat([e]);return new Ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function bu(t,e,n){return new Ro(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xl(t,e){return ed(On(t),On(e))&&t.limitType===e.limitType}function Ky(t){return`${Zh(On(t))}|lt:${t.limitType}`}function _s(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Hy(s)).join(", ")}]`),Dl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>qs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>qs(s)).join(",")),`Target(${r})`}(On(t))}; limitType=${t.limitType})`}function Ml(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ki(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=yp(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ki(r),s)||r.endAt&&!function(o,a,l){const c=yp(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ki(r),s))}(t,e)}function sP(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Gy(t){return(e,n)=>{let r=!1;for(const s of ki(t)){const i=iP(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function iP(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?js(l,c):ae()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ae()}}/**
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
 */class ti{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){us(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Ly(this.inner)}size(){return this.innerSize}}/**
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
 */const oP=new Xe(te.comparator);function Yn(){return oP}const Qy=new Xe(te.comparator);function yi(...t){let e=Qy;for(const n of t)e=e.insert(n.key,n);return e}function Yy(t){let e=Qy;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function jr(){return Oi()}function Xy(){return Oi()}function Oi(){return new ti(t=>t.toString(),(t,e)=>t.isEqual(e))}const aP=new Xe(te.comparator),lP=new Tt(te.comparator);function Ee(...t){let e=lP;for(const n of t)e=e.add(n);return e}const cP=new Tt(ke);function uP(){return cP}/**
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
 */function Jy(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ma(e)?"-0":e}}function Zy(t){return{integerValue:""+t}}function hP(t,e){return jS(e)?Zy(e):Jy(t,e)}/**
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
 */class Ll{constructor(){this._=void 0}}function dP(t,e,n){return t instanceof Fa?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Yh(i)&&(i=Xh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof to?tv(t,e):t instanceof no?nv(t,e):function(s,i){const o=ev(s,i),a=Tp(o)+Tp(s.Ie);return Eu(o)&&Eu(s.Ie)?Zy(a):Jy(s.serializer,a)}(t,e)}function fP(t,e,n){return t instanceof to?tv(t,e):t instanceof no?nv(t,e):n}function ev(t,e){return t instanceof $a?function(r){return Eu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Fa extends Ll{}class to extends Ll{constructor(e){super(),this.elements=e}}function tv(t,e){const n=rv(e);for(const r of t.elements)n.some(s=>xn(s,r))||n.push(r);return{arrayValue:{values:n}}}class no extends Ll{constructor(e){super(),this.elements=e}}function nv(t,e){let n=rv(e);for(const r of t.elements)n=n.filter(s=>!xn(s,r));return{arrayValue:{values:n}}}class $a extends Ll{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Tp(t){return rt(t.integerValue||t.doubleValue)}function rv(t){return Jh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function pP(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof to&&s instanceof to||r instanceof no&&s instanceof no?Bs(r.elements,s.elements,xn):r instanceof $a&&s instanceof $a?xn(r.Ie,s.Ie):r instanceof Fa&&s instanceof Fa}(t.transform,e.transform)}class gP{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function da(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ul{}function sv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new nd(t.key,on.none()):new So(t.key,t.data,on.none());{const n=t.data,r=zt.empty();let s=new Tt(vt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Pr(t.key,r,new Jt(s.toArray()),on.none())}}function mP(t,e,n){t instanceof So?function(s,i,o){const a=s.value.clone(),l=bp(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(s,i,o){if(!da(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=bp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(iv(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Vi(t,e,n,r){return t instanceof So?function(i,o,a,l){if(!da(i.precondition,o))return a;const c=i.value.clone(),u=Ap(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(i,o,a,l){if(!da(i.precondition,o))return a;const c=Ap(i.fieldTransforms,l,o),u=o.data;return u.setAll(iv(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return da(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function _P(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=ev(r.transform,s||null);i!=null&&(n===null&&(n=zt.empty()),n.set(r.field,i))}return n||null}function Ip(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Bs(r,s,(i,o)=>pP(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class So extends Ul{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Pr extends Ul{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function iv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bp(t,e,n){const r=new Map;$e(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,fP(o,a,n[s]))}return r}function Ap(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,dP(i,o,e))}return r}class nd extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yP extends Ul{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vP{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&mP(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Xy();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=sv(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ee())}isEqual(e){return this.batchId===e.batchId&&Bs(this.mutations,e.mutations,(n,r)=>Ip(n,r))&&Bs(this.baseMutations,e.baseMutations,(n,r)=>Ip(n,r))}}class rd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){$e(e.mutations.length===r.length);let s=function(){return aP}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new rd(e,n,r,s)}}/**
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
 */class EP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class wP{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var nt,be;function TP(t){switch(t){default:return ae();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function ov(t){if(t===void 0)return Dn("GRPC error has no .code"),A.UNKNOWN;switch(t){case nt.OK:return A.OK;case nt.CANCELLED:return A.CANCELLED;case nt.UNKNOWN:return A.UNKNOWN;case nt.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case nt.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case nt.INTERNAL:return A.INTERNAL;case nt.UNAVAILABLE:return A.UNAVAILABLE;case nt.UNAUTHENTICATED:return A.UNAUTHENTICATED;case nt.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case nt.NOT_FOUND:return A.NOT_FOUND;case nt.ALREADY_EXISTS:return A.ALREADY_EXISTS;case nt.PERMISSION_DENIED:return A.PERMISSION_DENIED;case nt.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case nt.ABORTED:return A.ABORTED;case nt.OUT_OF_RANGE:return A.OUT_OF_RANGE;case nt.UNIMPLEMENTED:return A.UNIMPLEMENTED;case nt.DATA_LOSS:return A.DATA_LOSS;default:return ae()}}(be=nt||(nt={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function IP(){return new TextEncoder}/**
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
 */const bP=new Ns([4294967295,4294967295],0);function Rp(t){const e=IP().encode(t),n=new AS;return n.update(e),new Uint8Array(n.digest())}function Sp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ns([n,r],0),new Ns([s,i],0)]}class sd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new vi(`Invalid padding: ${n}`);if(r<0)throw new vi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new vi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new vi(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=Ns.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(Ns.fromNumber(r)));return s.compare(bP)===1&&(s=new Ns([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Rp(e),[r,s]=Sp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new sd(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Rp(e),[r,s]=Sp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class vi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Fl{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fl(de.min(),s,new Xe(ke),Yn(),Ee())}}class Po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Po(r,n,Ee(),Ee(),Ee())}}/**
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
 */class fa{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class av{constructor(e,n){this.targetId=e,this.fe=n}}class lv{constructor(e,n,r=Vt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Pp{constructor(){this.ge=0,this.pe=kp(),this.ye=Vt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=Ee(),n=Ee(),r=Ee();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ae()}}),new Po(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=kp()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,$e(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class AP{constructor(e){this.Be=e,this.ke=new Map,this.qe=Yn(),this.Qe=Cp(),this.Ke=new Xe(ke)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:ae()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Tu(i))if(r===0){const o=new te(i.path);this.We(n,o,St.newNoDocument(o,de.min()))}else $e(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=es(r).toUint8Array()}catch(l){if(l instanceof Uy)return $s("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new sd(o,s,i)}catch(l){return $s(l instanceof vi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Tu(a.target)){const l=new te(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,St.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=Ee();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new Fl(e,n,this.Ke,this.qe,r);return this.qe=Yn(),this.Qe=Cp(),this.Ke=new Xe(ke),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Pp,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Tt(ke),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Pp),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function Cp(){return new Xe(te.comparator)}function kp(){return new Xe(te.comparator)}const RP={asc:"ASCENDING",desc:"DESCENDING"},SP={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PP={and:"AND",or:"OR"};class CP{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Au(t,e){return t.useProto3Json||Dl(e)?e:{value:e}}function Ba(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kP(t,e){return Ba(t,e.toTimestamp())}function Vn(t){return $e(!!t),de.fromTimestamp(function(n){const r=Ir(n);return new at(r.seconds,r.nanos)}(t))}function id(t,e){return Ru(t,e).canonicalString()}function Ru(t,e){const n=function(s){return new He(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function uv(t){const e=He.fromString(t);return $e(gv(e)),e}function Su(t,e){return id(t.databaseId,e.path)}function Rc(t,e){const n=uv(e);if(n.get(1)!==t.databaseId.projectId)throw new K(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(dv(n))}function hv(t,e){return id(t.databaseId,e)}function OP(t){const e=uv(t);return e.length===4?He.emptyPath():dv(e)}function Pu(t){return new He(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function dv(t){return $e(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Op(t,e,n){return{name:Su(t,e),fields:n.value.mapValue.fields}}function VP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?($e(u===void 0||typeof u=="string"),Vt.fromBase64String(u||"")):($e(u===void 0||u instanceof Uint8Array),Vt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:ov(c.code);return new K(u,c.message||"")}(o);n=new lv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Rc(t,r.document.name),i=Vn(r.document.updateTime),o=r.document.createTime?Vn(r.document.createTime):de.min(),a=new zt({mapValue:{fields:r.document.fields}}),l=St.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new fa(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Rc(t,r.document),i=r.readTime?Vn(r.readTime):de.min(),o=St.newNoDocument(s,i),a=r.removedTargetIds||[];n=new fa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Rc(t,r.document),i=r.removedTargetIds||[];n=new fa([],i,s,null)}else{if(!("filter"in e))return ae();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new wP(s,i),a=r.targetId;n=new av(a,o)}}return n}function NP(t,e){let n;if(e instanceof So)n={update:Op(t,e.key,e.value)};else if(e instanceof nd)n={delete:Su(t,e.key)};else if(e instanceof Pr)n={update:Op(t,e.key,e.data),updateMask:jP(e.fieldMask)};else{if(!(e instanceof yP))return ae();n={verify:Su(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Fa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof to)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof no)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $a)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw ae()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kP(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ae()}(t,e.precondition)),n}function DP(t,e){return t&&t.length>0?($e(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?Vn(s.updateTime):Vn(i);return o.isEqual(de.min())&&(o=Vn(i)),new gP(o,s.transformResults||[])}(n,e))):[]}function xP(t,e){return{documents:[hv(t,e.path)]}}function MP(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=hv(t,s);const i=function(c){if(c.length!==0)return pv(pn.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:ys(d.field),direction:FP(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Au(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:s}}function LP(t){let e=OP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){$e(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=fv(h);return d instanceof pn&&jy(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(v){return new Ua(vs(v.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(v.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Dl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new La(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new La(f,d)}(n.endAt)),nP(e,s,o,i,a,"F",l,c)}function UP(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ae()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function fv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return st.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return st.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(n.unaryFilter.field);return st.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return st.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ae()}}(t):t.fieldFilter!==void 0?function(n){return st.create(vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ae()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return pn.create(n.compositeFilter.filters.map(r=>fv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ae()}}(n.compositeFilter.op))}(t):ae()}function FP(t){return RP[t]}function $P(t){return SP[t]}function BP(t){return PP[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return vt.fromServerFormat(t.fieldPath)}function pv(t){return t instanceof st?function(n){if(n.op==="=="){if(_p(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(mp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_p(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(mp(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:$P(n.op),value:n.value}}}(t):t instanceof pn?function(n){const r=n.getFilters().map(s=>pv(s));return r.length===1?r[0]:{compositeFilter:{op:BP(n.op),filters:r}}}(t):ae()}function jP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function gv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class fr{constructor(e,n,r,s,i=de.min(),o=de.min(),a=Vt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new fr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class qP{constructor(e){this.ct=e}}function HP(t){const e=LP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bu(e,e.limit,"L"):e}/**
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
 */class zP{constructor(){this._n=new WP}addToCollectionParentIndex(e,n){return this._n.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Tr.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Tr.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class WP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Tt(He.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Tt(He.comparator)).toArray()}}/**
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
 */class Hs{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Hs(0)}static Ln(){return new Hs(-1)}}/**
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
 */class KP{constructor(){this.changes=new ti(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class GP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class QP{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Vi(r.mutation,s,Jt.empty(),at.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ee()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ee()){const s=jr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=yi();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ee()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Yn();const o=Oi(),a=function(){return Oi()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Pr)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),Vi(u.mutation,c,u.mutation.getFieldMask(),at.now())):o.set(c.key,Jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new GP(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Oi();let s=new Xe((o,a)=>o-a),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Jt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||Ee()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Xy();u.forEach(d=>{if(!i.has(d)){const f=sv(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Wy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):P.resolve(jr());let a=-1,l=i;return o.next(c=>P.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?P.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,Ee())).next(u=>({batchId:a,changes:Yy(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next(r=>{let s=yi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=yi();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,l=>{const c=function(h,d){return new Ro(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,St.newInvalidDocument(u)))});let a=yi();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&Vi(u.mutation,c,Jt.empty(),at.now()),Ml(n,c)&&(a=a.insert(l,c))}),a})}}/**
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
 */class YP{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return P.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Vn(s.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:HP(s.bundledQuery),readTime:Vn(s.readTime)}}(n)),P.resolve()}}/**
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
 */class XP{constructor(){this.overlays=new Xe(te.comparator),this.hr=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=jr();return P.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const s=jr(),i=n.length+1,o=new te(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return P.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Xe((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=jr(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=jr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return P.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new EP(n,r));let i=this.hr.get(n);i===void 0&&(i=Ee(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class od{constructor(){this.Pr=new Tt(ut.Ir),this.Tr=new Tt(ut.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new ut(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new ut(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new te(new He([])),r=new ut(n,e),s=new ut(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new te(new He([])),r=new ut(n,e),s=new ut(n,e+1);let i=Ee();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ut{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return te.comparator(e.key,n.key)||ke(e.pr,n.pr)}static Er(e,n){return ke(e.pr,n.pr)||te.comparator(e.key,n.key)}}/**
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
 */class JP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Tt(ut.Ir)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new vP(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new ut(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ut(n,0),s=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Tt(ke);return n.forEach(s=>{const i=new ut(s,0),o=new ut(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new ut(new te(i),0);let a=new Tt(ke);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),P.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){$e(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(n.mutations,s=>{const i=new ut(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new ut(n,0),s=this.wr.firstAfterOrEqual(r);return P.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class ZP{constructor(e){this.vr=e,this.docs=function(){return new Xe(te.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let r=Yn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():St.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Yn();const o=n.path,a=new te(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||LS(MS(u),r)<=0||(s.has(u.key)||Ml(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ae()}Fr(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new eC(this)}getSize(e){return P.resolve(this.size)}}class eC extends KP{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class tC{constructor(e){this.persistence=e,this.Mr=new ti(n=>Zh(n),ed),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.Or=0,this.Nr=new od,this.targetCount=0,this.Lr=Hs.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),P.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Hs(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.qn(n),P.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Nr.containsKey(n))}}/**
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
 */class nC{constructor(e,n){this.Br={},this.overlays={},this.kr=new Qh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new tC(this),this.indexManager=new zP,this.remoteDocumentCache=function(s){return new ZP(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new qP(n),this.$r=new YP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new XP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new JP(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const s=new rC(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class rC extends FS{constructor(e){super(),this.currentSequenceNumber=e}}class ad{constructor(e){this.persistence=e,this.zr=new od,this.jr=null}static Hr(e){return new ad(e)}get Jr(){if(this.jr)return this.jr;throw ae()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),P.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const s=te.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,de.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return P.or([()=>P.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class ld{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ld(e,n.fromCache,r,s)}}/**
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
 */class sC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class iC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return jT()?8:Br.v(ot())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new sC;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(ui()<=Te.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",_s(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(ui()<=Te.DEBUG&&j("QueryEngine","Query:",_s(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(ui()<=Te.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",_s(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,On(n))):P.resolve())}ji(e,n){if(wp(n))return P.resolve(null);let r=On(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=bu(n,null,"F"),r=On(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=Ee(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,bu(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,s){return wp(n)||s.isEqual(de.min())?P.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?P.resolve(null):(ui()<=Te.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),_s(n)),this.es(e,o,n,xS(s,-1)).next(a=>a))})}Zi(e,n){let r=new Tt(Gy(e));return n.forEach((s,i)=>{Ml(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return ui()<=Te.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",_s(n)),this.zi.getDocumentsMatchingQuery(e,n,Tr.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class oC{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new Xe(ke),this.rs=new ti(i=>Zh(i),ed),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new QP(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function aC(t,e,n,r){return new oC(t,e,n,r)}async function mv(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Ee();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function lC(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=P.resolve();return d.forEach(v=>{f=f.next(()=>u.getEntry(l,v)).next(T=>{const y=c.docVersions.get(v);$e(y!==null),T.version.compareTo(y)<0&&(h.applyToRemoteDocument(T,c),T.isValidDocument()&&(T.setReadTime(c.commitVersion),u.addEntry(T)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Ee();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function _v(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function cC(t,e){const n=_e(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(Vt.EMPTY_BYTE_STRING,de.min()).withLastLimboFreeSnapshotVersion(de.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(T,y,S){return T.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(i,f))});let l=Yn(),c=Ee();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(uC(i,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(de.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function uC(t,e,n){let r=Ee(),s=Ee();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Yn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(de.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function hC(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dC(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new fr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Cu(t,e,n){const r=_e(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ao(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Vp(t,e,n){const r=_e(t);let s=de.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=_e(l),d=h.rs.get(u);return d!==void 0?P.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,On(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:de.min(),n?i:Ee())).next(a=>(fC(r,sP(e),a),{documents:a,hs:i})))}function fC(t,e,n){let r=t.ss.get(e)||de.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Np{constructor(){this.activeTargetIds=uP()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pC{constructor(){this.no=new Np,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Np,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class gC{io(e){}shutdown(){}}/**
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
 */class Dp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yo=null;function Sc(){return Yo===null?Yo=function(){return 268435456+Math.round(2147483648*Math.random())}():Yo++,"0x"+Yo.toString(16)}/**
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
 */const mC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class _C{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const At="WebChannelConnection";class yC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=Sc(),l=this.bo(n,r.toUriEncodedString());j("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>(j("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw $s("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ei}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=mC[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=Sc();return new Promise((o,a)=>{const l=new bS;l.setWithCredentials(!0),l.listenOnce(TS.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Ac.NO_ERROR:const u=l.getResponseJson();j(At,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Ac.TIMEOUT:j(At,`RPC '${e}' ${i} timed out`),a(new K(A.DEADLINE_EXCEEDED,"Request time out"));break;case Ac.HTTP_ERROR:const h=l.getStatus();if(j(At,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const v=function(y){const S=y.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(S)>=0?S:A.UNKNOWN}(f.status);a(new K(v,f.message))}else a(new K(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new K(A.UNAVAILABLE,"Connection failed."));break;default:ae()}}finally{j(At,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);j(At,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const s=Sc(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ES(),a=wS(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");j(At,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const v=new _C({lo:y=>{f?j(At,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(j(At,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),j(At,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},ho:()=>h.close()}),T=(y,S,k)=>{y.listen(S,O=>{try{k(O)}catch($){setTimeout(()=>{throw $},0)}})};return T(h,Ko.EventType.OPEN,()=>{f||j(At,`RPC '${e}' stream ${s} transport opened.`)}),T(h,Ko.EventType.CLOSE,()=>{f||(f=!0,j(At,`RPC '${e}' stream ${s} transport closed`),v.Vo())}),T(h,Ko.EventType.ERROR,y=>{f||(f=!0,$s(At,`RPC '${e}' stream ${s} transport errored:`,y),v.Vo(new K(A.UNAVAILABLE,"The operation could not be completed")))}),T(h,Ko.EventType.MESSAGE,y=>{var S;if(!f){const k=y.data[0];$e(!!k);const O=k,$=O.error||((S=O[0])===null||S===void 0?void 0:S.error);if($){j(At,`RPC '${e}' stream ${s} received error:`,$);const X=$.status;let M=function(Q){const ie=nt[Q];if(ie!==void 0)return ov(ie)}(X),le=$.message;M===void 0&&(M=A.INTERNAL,le="Unknown error status: "+X+" with message "+$.message),f=!0,v.Vo(new K(M,le)),h.close()}else j(At,`RPC '${e}' stream ${s} received:`,k),v.mo(k)}}),T(a,IS.STAT_EVENT,y=>{y.stat===cp.PROXY?j(At,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===cp.NOPROXY&&j(At,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{v.Ro()},0),v}}function Pc(){return typeof document<"u"?document:null}/**
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
 */function $l(t){return new CP(t,!0)}/**
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
 */class yv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&j("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class vv{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new yv(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(Dn(n.toString()),Dn("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new K(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vC extends vv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=VP(this.serializer,e),r=function(i){if(!("targetChange"in i))return de.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?de.min():o.readTime?Vn(o.readTime):de.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=Pu(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Tu(l)?{documents:xP(i,l)}:{query:MP(i,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=cv(i,o.resumeToken);const c=Au(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(de.min())>0){a.readTime=Ba(i,o.snapshotVersion.toTimestamp());const c=Au(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=UP(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=Pu(this.serializer),n.removeTarget=e,this.t_(n)}}class EC extends vv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if($e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=DP(e.writeResults,e.commitTime),r=Vn(e.commitTime);return this.listener.T_(r,n)}return $e(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=Pu(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>NP(this.serializer,r))};this.t_(n)}}/**
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
 */class wC extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new K(A.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,Ru(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(A.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,Ru(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(A.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class TC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Dn(n),this.g_=!1):j("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class IC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{hs(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=_e(l);c.v_.add(4),await Co(c),c.x_.set("Unknown"),c.v_.delete(4),await Bl(c)}(this))})}),this.x_=new TC(r,s)}}async function Bl(t){if(hs(t))for(const e of t.F_)await e(!0)}async function Co(t){for(const e of t.F_)await e(!1)}function Ev(t,e){const n=_e(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),dd(n)?hd(n):ni(n).Jo()&&ud(n,e))}function cd(t,e){const n=_e(t),r=ni(n);n.C_.delete(e),r.Jo()&&wv(n,e),n.C_.size===0&&(r.Jo()?r.Xo():hs(n)&&n.x_.set("Unknown"))}function ud(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(de.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ni(t).c_(e)}function wv(t,e){t.O_.Oe(e),ni(t).l_(e)}function hd(t){t.O_=new AP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),ni(t).start(),t.x_.p_()}function dd(t){return hs(t)&&!ni(t).Ho()&&t.C_.size>0}function hs(t){return _e(t).v_.size===0}function Tv(t){t.O_=void 0}async function bC(t){t.C_.forEach((e,n)=>{ud(t,e)})}async function AC(t,e){Tv(t),dd(t)?(t.x_.S_(e),hd(t)):t.x_.set("Unknown")}async function RC(t,e,n){if(t.x_.set("Online"),e instanceof lv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ja(t,r)}else if(e instanceof fa?t.O_.$e(e):e instanceof av?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(de.min()))try{const r=await _v(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(Vt.EMPTY_BYTE_STRING,u.snapshotVersion)),wv(i,l);const h=new fr(u.target,l,c,u.sequenceNumber);ud(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await ja(t,r)}}async function ja(t,e,n){if(!Ao(e))throw e;t.v_.add(1),await Co(t),t.x_.set("Offline"),n||(n=()=>_v(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await Bl(t)})}function Iv(t,e){return e().catch(n=>ja(t,n,e))}async function jl(t){const e=_e(t),n=br(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;SC(e);)try{const s=await hC(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,PC(e,s)}catch(s){await ja(e,s)}bv(e)&&Av(e)}function SC(t){return hs(t)&&t.D_.length<10}function PC(t,e){t.D_.push(e);const n=br(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function bv(t){return hs(t)&&!br(t).Ho()&&t.D_.length>0}function Av(t){br(t).start()}async function CC(t){br(t).d_()}async function kC(t){const e=br(t);for(const n of t.D_)e.I_(n.mutations)}async function OC(t,e,n){const r=t.D_.shift(),s=rd.from(r,e,n);await Iv(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await jl(t)}async function VC(t,e){e&&br(t).P_&&await async function(r,s){if(function(o){return TP(o)&&o!==A.ABORTED}(s.code)){const i=r.D_.shift();br(r).Zo(),await Iv(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await jl(r)}}(t,e),bv(t)&&Av(t)}async function xp(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=hs(n);n.v_.add(3),await Co(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await Bl(n)}async function NC(t,e){const n=_e(t);e?(n.v_.delete(2),await Bl(n)):e||(n.v_.add(2),await Co(n),n.x_.set("Unknown"))}function ni(t){return t.N_||(t.N_=function(n,r,s){const i=_e(n);return i.R_(),new vC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:bC.bind(null,t),To:AC.bind(null,t),u_:RC.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),dd(t)?hd(t):t.x_.set("Unknown")):(await t.N_.stop(),Tv(t))})),t.N_}function br(t){return t.L_||(t.L_=function(n,r,s){const i=_e(n);return i.R_(),new EC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:CC.bind(null,t),To:VC.bind(null,t),E_:kC.bind(null,t),T_:OC.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await jl(t)):(await t.L_.stop(),t.D_.length>0&&(j("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class fd{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new kn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new fd(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function pd(t,e){if(Dn("AsyncQueue",`${e}: ${t}`),Ao(t))return new K(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=yi(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new Ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Mp{constructor(){this.B_=new Xe(te.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):ae():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class zs{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new zs(e,n,Ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class DC{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class xC{constructor(){this.queries=new ti(e=>Ky(e),xl),this.onlineState="Unknown",this.W_=new Set}}async function Rv(t,e){const n=_e(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new DC,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=pd(o,`Initialization of query '${_s(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&gd(n)}async function Sv(t,e){const n=_e(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function MC(t,e){const n=_e(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&gd(n)}function LC(t,e,n){const r=_e(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function gd(t){t.W_.forEach(e=>{e.next()})}var ku,Lp;(Lp=ku||(ku={})).j_="default",Lp.Cache="cache";class Pv{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new zs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=zs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==ku.Cache}}/**
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
 */class Cv{constructor(e){this.key=e}}class kv{constructor(e){this.key=e}}class UC{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=Ee(),this.mutatedKeys=Ee(),this.ha=Gy(e),this.Pa=new Ds(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new Mp,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=Ml(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),T=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?v!==T&&(r.track({type:3,doc:f}),y=!0):this.da(d,f)||(r.track({type:2,doc:f}),y=!0,(l&&this.ha(f,l)>0||c&&this.ha(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(l||c)&&(a=!0)),y&&(f?(o=o.add(f),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(f,v){const T=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ae()}};return T(f)-T(v)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],l=this.la.size===0&&this.current&&!s?1:0,c=l!==this.ca;return this.ca=l,o.length!==0||c?{snapshot:new zs(this.query,e.Pa,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Mp,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=Ee(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new kv(r))}),this.la.forEach(r=>{e.has(r)||n.push(new Cv(r))}),n}fa(e){this.ua=e.hs,this.la=Ee();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return zs.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class FC{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $C{constructor(e){this.key=e,this.pa=!1}}class BC{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new ti(a=>Ky(a),xl),this.Sa=new Map,this.ba=new Set,this.Da=new Xe(te.comparator),this.Ca=new Map,this.va=new od,this.Fa={},this.Ma=new Map,this.xa=Hs.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function jC(t,e,n=!0){const r=Mv(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Ov(r,e,n,!0),s}async function qC(t,e){const n=Mv(t);await Ov(n,e,!0,!1)}async function Ov(t,e,n,r){const s=await dC(t.localStore,On(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await HC(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ev(t.remoteStore,s),a}async function HC(t,e,n,r,s){t.Na=(h,d,f)=>async function(T,y,S,k){let O=y.view.Ta(S);O.Xi&&(O=await Vp(T.localStore,y.query,!1).then(({documents:le})=>y.view.Ta(le,O)));const $=k&&k.targetChanges.get(y.targetId),X=k&&k.targetMismatches.get(y.targetId)!=null,M=y.view.applyChanges(O,T.isPrimaryClient,$,X);return Fp(T,y.targetId,M.Va),M.snapshot}(t,h,d,f);const i=await Vp(t.localStore,e,!0),o=new UC(e,i.hs),a=o.Ta(i.documents),l=Po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Fp(t,n,c.Va);const u=new FC(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),c.snapshot}async function zC(t,e,n){const r=_e(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!xl(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&cd(r.remoteStore,s.targetId),Ou(r,s.targetId)}).catch(bo)):(Ou(r,s.targetId),await Cu(r.localStore,s.targetId,!0))}async function WC(t,e){const n=_e(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),cd(n.remoteStore,r.targetId))}async function KC(t,e,n){const r=ek(t);try{const s=await function(o,a){const l=_e(o),c=at.now(),u=a.reduce((f,v)=>f.add(v.key),Ee());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let v=Yn(),T=Ee();return l.os.getEntries(f,u).next(y=>{v=y,v.forEach((S,k)=>{k.isValidDocument()||(T=T.add(S))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,v)).next(y=>{h=y;const S=[];for(const k of a){const O=_P(k,h.get(k.key).overlayedDocument);O!=null&&S.push(new Pr(k.key,O,Fy(O.value.mapValue),on.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,S,a)}).next(y=>{d=y;const S=y.applyToLocalDocumentSet(h,T);return l.documentOverlayCache.saveOverlays(f,y.batchId,S)})}).then(()=>({batchId:d.batchId,changes:Yy(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Fa[o.currentUser.toKey()];c||(c=new Xe(ke)),c=c.insert(a,l),o.Fa[o.currentUser.toKey()]=c}(r,s.batchId,n),await ko(r,s.changes),await jl(r.remoteStore)}catch(s){const i=pd(s,"Failed to persist write");n.reject(i)}}async function Vv(t,e){const n=_e(t);try{const r=await cC(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&($e(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?$e(o.pa):s.removedDocuments.size>0&&($e(o.pa),o.pa=!1))}),await ko(n,r,e)}catch(r){await bo(r)}}function Up(t,e,n){const r=_e(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(c=!0)}),c&&gd(l)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function GC(t,e,n){const r=_e(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new Xe(te.comparator);o=o.insert(i,St.newNoDocument(i,de.min()));const a=Ee().add(i),l=new Fl(de.min(),new Map,new Xe(ke),o,a);await Vv(r,l),r.Da=r.Da.remove(i),r.Ca.delete(e),md(r)}else await Cu(r.localStore,e,!1).then(()=>Ou(r,e,n)).catch(bo)}async function QC(t,e){const n=_e(t),r=e.batch.batchId;try{const s=await lC(n.localStore,e);Dv(n,r,null),Nv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ko(n,s)}catch(s){await bo(s)}}async function YC(t,e,n){const r=_e(t);try{const s=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>($e(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);Dv(r,e,n),Nv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ko(r,s)}catch(s){await bo(s)}}function Nv(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function Dv(t,e,n){const r=_e(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function Ou(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||xv(t,r)})}function xv(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(cd(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),md(t))}function Fp(t,e,n){for(const r of n)r instanceof Cv?(t.va.addReference(r.key,e),XC(t,r)):r instanceof kv?(j("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||xv(t,r.key)):ae()}function XC(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(j("SyncEngine","New document in limbo: "+n),t.ba.add(r),md(t))}function md(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new te(He.fromString(e)),r=t.xa.next();t.Ca.set(r,new $C(n)),t.Da=t.Da.insert(n,r),Ev(t.remoteStore,new fr(On(td(n.path)),r,"TargetPurposeLimboResolution",Qh._e))}}async function ko(t,e,n){const r=_e(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=ld.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(l,c){const u=_e(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>P.forEach(c,d=>P.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>P.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ao(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),v=f.snapshotVersion,T=f.withLastLimboFreeSnapshotVersion(v);u.ns=u.ns.insert(d,T)}}}(r.localStore,i))}async function JC(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await mv(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(l=>{l.reject(new K(A.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ko(n,r.us)}}function ZC(t,e){const n=_e(t),r=n.Ca.get(e);if(r&&r.pa)return Ee().add(r.key);{let s=Ee();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Mv(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Vv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZC.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=GC.bind(null,e),e.ya.u_=MC.bind(null,e.eventManager),e.ya.La=LC.bind(null,e.eventManager),e}function ek(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YC.bind(null,e),e}class $p{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=$l(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return aC(this.persistence,new iC,e.initialUser,this.serializer)}createPersistence(e){return new nC(ad.Hr,this.serializer)}createSharedClientState(e){return new pC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Up(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JC.bind(null,this.syncEngine),await NC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new xC}()}createDatastore(e){const n=$l(e.databaseInfo.databaseId),r=function(i){return new yC(i)}(e.databaseInfo);return function(i,o,a,l){return new wC(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new IC(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Up(this.syncEngine,n,0),function(){return Dp.D()?new Dp:new gC}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new BC(s,i,o,a,l,c);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=_e(r);j("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await Co(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class Lv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):Dn("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class nk{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Rt.UNAUTHENTICATED,this.clientId=My.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{j("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(j("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new K(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new kn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=pd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Cc(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await mv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Bp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await sk(t);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>xp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>xp(e.remoteStore,s)),t._onlineComponents=e}function rk(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function sk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await Cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rk(n))throw n;$s("Error using user provided cache. Falling back to memory cache: "+n),await Cc(t,new $p)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await Cc(t,new $p);return t._offlineComponents}async function Uv(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await Bp(t,t._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await Bp(t,new tk))),t._onlineComponents}function ik(t){return Uv(t).then(e=>e.syncEngine)}async function Fv(t){const e=await Uv(t),n=e.eventManager;return n.onListen=jC.bind(null,e.syncEngine),n.onUnlisten=zC.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=qC.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WC.bind(null,e.syncEngine),n}function ok(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Lv({next:d=>{o.enqueueAndForget(()=>Sv(i,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new K(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new K(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Pv(td(a.path),u,{includeMetadataChanges:!0,ta:!0});return Rv(i,h)}(await Fv(t),t.asyncQueue,e,n,r)),r.promise}function ak(t,e,n={}){const r=new kn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new Lv({next:d=>{o.enqueueAndForget(()=>Sv(i,h)),d.fromCache&&l.source==="server"?c.reject(new K(A.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new Pv(a,u,{includeMetadataChanges:!0,ta:!0});return Rv(i,h)}(await Fv(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function $v(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const jp=new Map;/**
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
 */function Bv(t,e,n){if(!n)throw new K(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function lk(t,e,n,r){if(e===!0&&r===!0)throw new K(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qp(t){if(!te.isDocumentKey(t))throw new K(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hp(t){if(te.isDocumentKey(t))throw new K(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ql(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ae()}function gn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ql(t);throw new K(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class zp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}lk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=$v((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Hl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new K(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new K(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new RS;switch(r.type){case"firstParty":return new kS(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jp.get(n);r&&(j("ComponentProvider","Removing Datastore"),jp.delete(n),r.terminate())}(this),Promise.resolve()}}function ck(t,e,n,r={}){var s;const i=(t=gn(t,Hl))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&$s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Rt.MOCK_USER;else{a=Wm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new K(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Rt(c)}t._authCredentials=new SS(new xy(a,l))}}/**
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
 */class ri{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ri(this.firestore,e,this._query)}}class Ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ut(this.firestore,e,this._key)}}class vr extends ri{constructor(e,n,r){super(e,n,td(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ut(this.firestore,null,new te(e))}withConverter(e){return new vr(this.firestore,e,this._path)}}function jv(t,e,...n){if(t=Ye(t),Bv("collection","path",e),t instanceof Hl){const r=He.fromString(e,...n);return Hp(r),new vr(t,null,r)}{if(!(t instanceof Ut||t instanceof vr))throw new K(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return Hp(r),new vr(t.firestore,null,r)}}function qa(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=My.newId()),Bv("doc","path",e),t instanceof Hl){const r=He.fromString(e,...n);return qp(r),new Ut(t,null,new te(r))}{if(!(t instanceof Ut||t instanceof vr))throw new K(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(He.fromString(e,...n));return qp(r),new Ut(t.firestore,t instanceof vr?t.converter:null,new te(r))}}/**
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
 */class uk{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new yv(this,"async_queue_retry"),this.cu=()=>{const n=Pc();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Pc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=Pc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new kn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!Ao(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Dn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=fd.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&ae()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}class ds extends Hl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new uk}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||qv(this),this._firestoreClient.terminate()}}function hk(t,e){const n=typeof t=="object"?t:ph(),r=typeof t=="string"?t:e||"(default)",s=fl(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qm("firestore");i&&ck(s,...i)}return s}function _d(t){return t._firestoreClient||qv(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function qv(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new HS(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,$v(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new nk(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ws{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ws(Vt.fromBase64String(e))}catch(n){throw new K(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ws(Vt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class zl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new vt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yd{constructor(e){this._methodName=e}}/**
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
 */class vd{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ke(this._lat,e._lat)||ke(this._long,e._long)}}/**
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
 */const dk=/^__.*__$/;class fk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new So(e,this.data,n,this.fieldTransforms)}}class Hv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function zv(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ae()}}class Ed{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new Ed(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Ha(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(zv(this.Vu)&&dk.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class pk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||$l(e)}Cu(e,n,r,s=!1){return new Ed({Vu:e,methodName:n,Du:r,path:vt.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wl(t){const e=t._freezeSettings(),n=$l(t._databaseId);return new pk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Wv(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);wd("Data must be an object, but it was:",o,r);const a=Kv(r,o);let l,c;if(i.merge)l=new Jt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Vu(e,h,n);if(!o.contains(d))throw new K(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Qv(u,d)||u.push(d)}l=new Jt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new fk(new zt(a),l,c)}class Kl extends yd{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Kl}}function gk(t,e,n,r){const s=t.Cu(1,e,n);wd("Data must be an object, but it was:",s,r);const i=[],o=zt.empty();us(r,(l,c)=>{const u=Td(e,l,n);c=Ye(c);const h=s.yu(u);if(c instanceof Kl)i.push(u);else{const d=Oo(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Jt(i);return new Hv(o,a,s.fieldTransforms)}function mk(t,e,n,r,s,i){const o=t.Cu(1,e,n),a=[Vu(e,r,n)],l=[s];if(i.length%2!=0)throw new K(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Vu(e,i[d])),l.push(i[d+1]);const c=[],u=zt.empty();for(let d=a.length-1;d>=0;--d)if(!Qv(c,a[d])){const f=a[d];let v=l[d];v=Ye(v);const T=o.yu(f);if(v instanceof Kl)c.push(f);else{const y=Oo(v,T);y!=null&&(c.push(f),u.set(f,y))}}const h=new Jt(c);return new Hv(u,h,o.fieldTransforms)}function _k(t,e,n,r=!1){return Oo(n,t.Cu(r?4:3,e))}function Oo(t,e){if(Gv(t=Ye(t)))return wd("Unsupported field value:",e,t),Kv(t,e);if(t instanceof yd)return function(r,s){if(!zv(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Oo(a,s.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return hP(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=at.fromDate(r);return{timestampValue:Ba(s.serializer,i)}}if(r instanceof at){const i=new at(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ba(s.serializer,i)}}if(r instanceof vd)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ws)return{bytesValue:cv(s.serializer,r._byteString)};if(r instanceof Ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:id(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${ql(r)}`)}(t,e)}function Kv(t,e){const n={};return Ly(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):us(t,(r,s)=>{const i=Oo(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Gv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof at||t instanceof vd||t instanceof Ws||t instanceof Ut||t instanceof yd)}function wd(t,e,n){if(!Gv(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ql(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function Vu(t,e,n){if((e=Ye(e))instanceof zl)return e._internalPath;if(typeof e=="string")return Td(t,e);throw Ha("Field path arguments must be of type string or ",t,!1,void 0,n)}const yk=new RegExp("[~\\*/\\[\\]]");function Td(t,e,n){if(e.search(yk)>=0)throw Ha(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new zl(...e.split("."))._internalPath}catch{throw Ha(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ha(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new K(A.INVALID_ARGUMENT,a+t+l)}function Qv(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Yv{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Id("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class vk extends Yv{data(){return super.data()}}function Id(t,e){return typeof e=="string"?Td(t,e):e instanceof zl?e._internalPath:e._delegate._internalPath}/**
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
 */function Ek(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bd{}class wk extends bd{}function Tk(t,e,...n){let r=[];e instanceof bd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Ad).length,a=i.filter(l=>l instanceof Gl).length;if(o>1||o>0&&a>0)throw new K(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Gl extends wk{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Gl(e,n,r)}_apply(e){const n=this._parse(e);return Xv(e._query,n),new ri(e.firestore,e.converter,Iu(e._query,n))}_parse(e){const n=Wl(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new K(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Kp(h,u);const f=[];for(const v of h)f.push(Wp(l,i,v));d={arrayValue:{values:f}}}else d=Wp(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Kp(h,u),d=_k(a,o,h,u==="in"||u==="not-in");return st.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Ik(t,e,n){const r=e,s=Id("where",t);return Gl._create(s,r,n)}class Ad extends bd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ad(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:pn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)Xv(o,l),o=Iu(o,l)}(e._query,n),new ri(e.firestore,e.converter,Iu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Wp(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new K(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Wy(e)&&n.indexOf("/")!==-1)throw new K(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(He.fromString(n));if(!te.isDocumentKey(r))throw new K(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return gp(t,new te(r))}if(n instanceof Ut)return gp(t,n._key);throw new K(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ql(n)}.`)}function Kp(t,e){if(!Array.isArray(t)||t.length===0)throw new K(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Xv(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class bk{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(es(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ae()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return us(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new vd(rt(e.latitude),rt(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Xh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ji(e));default:return null}}convertTimestamp(e){const n=Ir(e);return new at(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=He.fromString(e);$e(gv(r));const s=new Zi(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||Dn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Jv(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ei{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Zv extends Yv{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new pa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Id("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class pa extends Zv{data(e={}){return super.data(e)}}class Ak{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ei(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new pa(this._firestore,this._userDataWriter,r.key,r,new Ei(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new pa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ei(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new pa(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ei(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Rk(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Rk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ae()}}/**
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
 */function Sk(t){t=gn(t,Ut);const e=gn(t.firestore,ds);return ok(_d(e),t._key).then(n=>Vk(e,t,n))}class eE extends bk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ws(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ut(this.firestore,null,n)}}function tE(t){t=gn(t,ri);const e=gn(t.firestore,ds),n=_d(e),r=new eE(e);return Ek(t._query),ak(n,t._query).then(s=>new Ak(e,r,t,s))}function Pk(t,e,n){t=gn(t,Ut);const r=gn(t.firestore,ds),s=Jv(t.converter,e,n);return Ql(r,[Wv(Wl(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,on.none())])}function Ck(t,e,n,...r){t=gn(t,Ut);const s=gn(t.firestore,ds),i=Wl(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof zl?mk(i,"updateDoc",t._key,e,n,r):gk(i,"updateDoc",t._key,e),Ql(s,[o.toMutation(t._key,on.exists(!0))])}function kk(t){return Ql(gn(t.firestore,ds),[new nd(t._key,on.none())])}function Ok(t,e){const n=gn(t.firestore,ds),r=qa(t),s=Jv(t.converter,e);return Ql(n,[Wv(Wl(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function Ql(t,e){return function(r,s){const i=new kn;return r.asyncQueue.enqueueAndForget(async()=>KC(await ik(r),s,i)),i.promise}(_d(t),e)}function Vk(t,e,n){const r=n.docs.get(e._key),s=new eE(t);return new Zv(t,s,e._key,r,new Ei(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ei=s})(as),Yr(new wr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ds(new PS(r.getProvider("auth-internal")),new VS(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new K(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Sn(up,"4.5.1",e),Sn(up,"4.5.1","esm2017")})();/**
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
 */const nE="firebasestorage.googleapis.com",rE="storageBucket",Nk=2*60*1e3,Dk=10*60*1e3,xk=1e3;/**
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
 */class Je extends Mn{constructor(e,n,r=0){super(kc(e),`Firebase Storage: ${n} (${kc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Je.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var We;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(We||(We={}));function kc(t){return"storage/"+t}function Rd(){const t="An unknown error occurred, please check the error payload for server response.";return new Je(We.UNKNOWN,t)}function Mk(t){return new Je(We.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Lk(t){return new Je(We.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Uk(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Je(We.UNAUTHENTICATED,t)}function Fk(){return new Je(We.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function $k(t){return new Je(We.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function sE(){return new Je(We.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function iE(){return new Je(We.CANCELED,"User canceled the upload/download.")}function Bk(t){return new Je(We.INVALID_URL,"Invalid URL '"+t+"'.")}function jk(t){return new Je(We.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qk(){return new Je(We.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rE+"' property when initializing the app?")}function oE(){return new Je(We.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Hk(){return new Je(We.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function zk(){return new Je(We.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Wk(t){return new Je(We.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Nu(t){return new Je(We.INVALID_ARGUMENT,t)}function aE(){return new Je(We.APP_DELETED,"The Firebase app was deleted.")}function Kk(t){return new Je(We.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ni(t,e){return new Je(We.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function hi(t){throw new Je(We.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Zt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Zt.makeFromUrl(e,n)}catch{return new Zt(e,"")}if(r.path==="")return r;throw jk(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c($){$.path_=decodeURIComponent($.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),v={bucket:1,path:3},T=n===nE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",S=new RegExp(`^https?://${T}/${s}/${y}`,"i"),O=[{regex:a,indices:l,postModify:i},{regex:f,indices:v,postModify:c},{regex:S,indices:{bucket:1,path:2},postModify:c}];for(let $=0;$<O.length;$++){const X=O[$],M=X.regex.exec(e);if(M){const le=M[X.indices.bucket];let G=M[X.indices.path];G||(G=""),r=new Zt(le,G),X.postModify(r);break}}if(r==null)throw Bk(e);return r}}class Gk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function Qk(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...y){c||(c=!0,e.apply(null,y))}function h(y){s=setTimeout(()=>{s=null,t(f,l())},y)}function d(){i&&clearTimeout(i)}function f(y,...S){if(c){d();return}if(y){d(),u.call(null,y,...S);return}if(l()||o){d(),u.call(null,y,...S);return}r<64&&(r*=2);let O;a===1?(a=2,O=0):O=(r+Math.random())*1e3,h(O)}let v=!1;function T(y){v||(v=!0,d(),!c&&(s!==null?(y||(a=2),clearTimeout(s),h(0)):y||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function Yk(t){t(!1)}/**
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
 */function Xk(t){return t!==void 0}function Jk(t){return typeof t=="function"}function Zk(t){return typeof t=="object"&&!Array.isArray(t)}function Yl(t){return typeof t=="string"||t instanceof String}function Gp(t){return Sd()&&t instanceof Blob}function Sd(){return typeof Blob<"u"}function Qp(t,e,n,r){if(r<e)throw Nu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Nu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function si(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function lE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Kr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Kr||(Kr={}));/**
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
 */function cE(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class eO{constructor(e,n,r,s,i,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,v)=>{this.resolve_=f,this.reject_=v,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Xo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Kr.NO_ERROR,l=i.getStatus();if(!a||cE(l,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Kr.ABORT;r(!1,new Xo(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;r(!0,new Xo(c,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Xk(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=Rd();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?aE():iE();o(l)}else{const l=sE();o(l)}};this.canceled_?n(!1,new Xo(!1,null,!0)):this.backoffId_=Qk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Yk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function tO(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function nO(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function rO(t,e){e&&(t["X-Firebase-GMPID"]=e)}function sO(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function iO(t,e,n,r,s,i,o=!0){const a=lE(t.urlParams),l=t.url+a,c=Object.assign({},t.headers);return rO(c,e),tO(c,n),nO(c,i),sO(c,r),new eO(l,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function oO(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function aO(...t){const e=oO();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sd())return new Blob(t);throw new Je(We.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function lO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function cO(t){if(typeof atob>"u")throw Wk("base-64");return atob(t)}/**
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
 */const Rn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Oc{constructor(e,n){this.data=e,this.contentType=n||null}}function uO(t,e){switch(t){case Rn.RAW:return new Oc(uE(e));case Rn.BASE64:case Rn.BASE64URL:return new Oc(hE(t,e));case Rn.DATA_URL:return new Oc(dO(e),fO(e))}throw Rd()}function uE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function hO(t){let e;try{e=decodeURIComponent(t)}catch{throw Ni(Rn.DATA_URL,"Malformed data URL.")}return uE(e)}function hE(t,e){switch(t){case Rn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw Ni(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Rn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw Ni(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=cO(e)}catch(s){throw s.message.includes("polyfill")?s:Ni(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class dE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ni(Rn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=pO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function dO(t){const e=new dE(t);return e.base64?hE(Rn.BASE64,e.rest):hO(e.rest)}function fO(t){return new dE(t).contentType}function pO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class dr{constructor(e,n){let r=0,s="";Gp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Gp(this.data_)){const r=this.data_,s=lO(r,e,n);return s===null?null:new dr(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new dr(r,!0)}}static getBlob(...e){if(Sd()){const n=e.map(r=>r instanceof dr?r.data_:r);return new dr(aO.apply(null,n))}else{const n=e.map(o=>Yl(o)?uO(Rn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new dr(s,!0)}}uploadData(){return this.data_}}/**
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
 */function fE(t){let e;try{e=JSON.parse(t)}catch{return null}return Zk(e)?e:null}/**
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
 */function gO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function mO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function pE(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function _O(t,e){return e}class Dt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||_O}}let Jo=null;function yO(t){return!Yl(t)||t.length<2?t:pE(t)}function gE(){if(Jo)return Jo;const t=[];t.push(new Dt("bucket")),t.push(new Dt("generation")),t.push(new Dt("metageneration")),t.push(new Dt("name","fullPath",!0));function e(i,o){return yO(o)}const n=new Dt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Dt("size");return s.xform=r,t.push(s),t.push(new Dt("timeCreated")),t.push(new Dt("updated")),t.push(new Dt("md5Hash",null,!0)),t.push(new Dt("cacheControl",null,!0)),t.push(new Dt("contentDisposition",null,!0)),t.push(new Dt("contentEncoding",null,!0)),t.push(new Dt("contentLanguage",null,!0)),t.push(new Dt("contentType",null,!0)),t.push(new Dt("metadata","customMetadata",!0)),Jo=t,Jo}function vO(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Zt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function EO(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return vO(r,t),r}function mE(t,e,n){const r=fE(e);return r===null?null:EO(t,r,n)}function wO(t,e,n,r){const s=fE(e);if(s===null||!Yl(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(c=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=si(d,n,r),v=lE({alt:"media",token:c});return f+v})[0]}function _E(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class fs{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Wn(t){if(!t)throw Rd()}function Pd(t,e){function n(r,s){const i=mE(t,s,e);return Wn(i!==null),i}return n}function TO(t,e){function n(r,s){const i=mE(t,s,e);return Wn(i!==null),wO(i,s,t.host,t._protocol)}return n}function Vo(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=Fk():s=Uk():n.getStatus()===402?s=Lk(t.bucket):n.getStatus()===403?s=$k(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function Cd(t){const e=Vo(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Mk(t.path)),i.serverResponse=s.serverResponse,i}return n}function IO(t,e,n){const r=e.fullServerUrl(),s=si(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new fs(s,i,Pd(t,n),o);return a.errorHandler=Cd(e),a}function bO(t,e,n){const r=e.fullServerUrl(),s=si(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new fs(s,i,TO(t,n),o);return a.errorHandler=Cd(e),a}function AO(t,e){const n=e.fullServerUrl(),r=si(n,t.host,t._protocol),s="DELETE",i=t.maxOperationRetryTime;function o(l,c){}const a=new fs(r,s,o,i);return a.successCodes=[200,204],a.errorHandler=Cd(e),a}function RO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yE(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RO(null,e)),r}function SO(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let O="";for(let $=0;$<2;$++)O=O+Math.random().toString().slice(2);return O}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=yE(e,r,s),u=_E(c,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=dr.getBlob(h,r,d);if(f===null)throw oE();const v={name:c.fullPath},T=si(i,t.host,t._protocol),y="POST",S=t.maxUploadRetryTime,k=new fs(T,y,Pd(t,n),S);return k.urlParams=v,k.headers=o,k.body=f.uploadData(),k.errorHandler=Vo(e),k}class za{constructor(e,n,r,s){this.current=e,this.total=n,this.finalized=!!r,this.metadata=s||null}}function kd(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Wn(!1)}return Wn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function PO(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o=yE(e,r,s),a={name:o.fullPath},l=si(i,t.host,t._protocol),c="POST",u={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":o.contentType,"Content-Type":"application/json; charset=utf-8"},h=_E(o,n),d=t.maxUploadRetryTime;function f(T){kd(T);let y;try{y=T.getResponseHeader("X-Goog-Upload-URL")}catch{Wn(!1)}return Wn(Yl(y)),y}const v=new fs(l,c,f,d);return v.urlParams=a,v.headers=u,v.body=h,v.errorHandler=Vo(e),v}function CO(t,e,n,r){const s={"X-Goog-Upload-Command":"query"};function i(c){const u=kd(c,["active","final"]);let h=null;try{h=c.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Wn(!1)}h||Wn(!1);const d=Number(h);return Wn(!isNaN(d)),new za(d,r.size(),u==="final")}const o="POST",a=t.maxUploadRetryTime,l=new fs(n,o,i,a);return l.headers=s,l.errorHandler=Vo(e),l}const Yp=256*1024;function kO(t,e,n,r,s,i,o,a){const l=new za(0,0);if(o?(l.current=o.current,l.total=o.total):(l.current=0,l.total=r.size()),r.size()!==l.total)throw Hk();const c=l.total-l.current;let u=c;s>0&&(u=Math.min(u,s));const h=l.current,d=h+u;let f="";u===0?f="finalize":c===u?f="upload, finalize":f="upload";const v={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${l.current}`},T=r.slice(h,d);if(T===null)throw oE();function y($,X){const M=kd($,["active","final"]),le=l.current+u,G=r.size();let Q;return M==="final"?Q=Pd(e,i)($,X):Q=null,new za(le,G,M==="final",Q)}const S="POST",k=e.maxUploadRetryTime,O=new fs(n,S,y,k);return O.headers=v,O.body=T.uploadData(),O.progressCallback=a||null,O.errorHandler=Vo(t),O}const qt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Vc(t){switch(t){case"running":case"pausing":case"canceling":return qt.RUNNING;case"paused":return qt.PAUSED;case"success":return qt.SUCCESS;case"canceled":return qt.CANCELED;case"error":return qt.ERROR;default:return qt.ERROR}}/**
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
 */class OO{constructor(e,n,r){if(Jk(e)||n!=null||r!=null)this.next=e,this.error=n??void 0,this.complete=r??void 0;else{const i=e;this.next=i.next,this.error=i.error,this.complete=i.complete}}}/**
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
 */function ms(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class VO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Kr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Kr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Kr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw hi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw hi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw hi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw hi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw hi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class NO extends VO{initXhr(){this.xhr_.responseType="text"}}function Lr(){return new NO}/**
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
 */class DO{constructor(e,n,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=r,this._mappings=gE(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(We.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const i=this.isExponentialBackoffExpired();if(cE(s.status,[]))if(i)s=sE();else{this.sleepTime=Math.max(this.sleepTime*2,xk),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(We.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,i)=>{this._resolve=s,this._reject=i,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,r])=>{switch(this._state){case"running":e(n,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const r=PO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Lr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._uploadUrl=i,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,r)=>{const s=CO(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(s,Lr,n,r);this._request=i,i.getPromise().then(o=>{o=o,this._request=void 0,this._updateProgress(o.current),this._needToFetchStatus=!1,o.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=Yp*this._chunkMultiplier,n=new za(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,i)=>{let o;try{o=kO(this._ref._location,this._ref.storage,r,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(l){this._error=l,this._transition("error");return}const a=this._ref.storage._makeRequest(o,Lr,s,i,!1);this._request=a,a.getPromise().then(l=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(l.current),l.finalized?(this._metadata=l.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Yp*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const r=IO(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,Lr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const r=SO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,Lr,e,n);this._request=s,s.getPromise().then(i=>{this._request=void 0,this._metadata=i,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=iE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=Vc(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,r,s){const i=new OO(n||void 0,r||void 0,s||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(Vc(this._state)){case qt.SUCCESS:ms(this._resolve.bind(null,this.snapshot))();break;case qt.CANCELED:case qt.ERROR:const n=this._reject;ms(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(Vc(this._state)){case qt.RUNNING:case qt.PAUSED:e.next&&ms(e.next.bind(e,this.snapshot))();break;case qt.SUCCESS:e.complete&&ms(e.complete.bind(e))();break;case qt.CANCELED:case qt.ERROR:e.error&&ms(e.error.bind(e,this._error))();break;default:e.error&&ms(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class ns{constructor(e,n){this._service=e,n instanceof Zt?this._location=n:this._location=Zt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new ns(e,n)}get root(){const e=new Zt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return pE(this._location.path)}get storage(){return this._service}get parent(){const e=gO(this._location.path);if(e===null)return null;const n=new Zt(this._location.bucket,e);return new ns(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Kk(e)}}function xO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new DO(t,new dr(e),n)}function MO(t){t._throwIfRoot("getDownloadURL");const e=bO(t.storage,t._location,gE());return t.storage.makeRequestWithTokens(e,Lr).then(n=>{if(n===null)throw zk();return n})}function LO(t){t._throwIfRoot("deleteObject");const e=AO(t.storage,t._location);return t.storage.makeRequestWithTokens(e,Lr)}function UO(t,e){const n=mO(t._location.path,e),r=new Zt(t._location.bucket,n);return new ns(t.storage,r)}/**
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
 */function FO(t){return/^[A-Za-z]+:\/\//.test(t)}function $O(t,e){return new ns(t,e)}function vE(t,e){if(t instanceof Od){const n=t;if(n._bucket==null)throw qk();const r=new ns(n,n._bucket);return e!=null?vE(r,e):r}else return e!==void 0?UO(t,e):t}function BO(t,e){if(e&&FO(e)){if(t instanceof Od)return $O(t,e);throw Nu("To use ref(service, url), the first argument must be a Storage instance.")}else return vE(t,e)}function Xp(t,e){const n=e==null?void 0:e[rE];return n==null?null:Zt.makeFromBucketSpec(n,t)}function jO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Wm(s,t.app.options.projectId))}class Od{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=nE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Nk,this._maxUploadRetryTime=Dk,this._requests=new Set,s!=null?this._bucket=Zt.makeFromBucketSpec(s,this._host):this._bucket=Xp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Zt.makeFromBucketSpec(this._url,e):this._bucket=Xp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Qp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Qp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ns(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new Gk(aE());{const o=iO(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Jp="@firebase/storage",Zp="0.12.3";/**
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
 */const EE="storage";function qO(t,e,n){return t=Ye(t),xO(t,e,n)}function HO(t){return t=Ye(t),MO(t)}function zO(t){return t=Ye(t),LO(t)}function wE(t,e){return t=Ye(t),BO(t,e)}function WO(t=ph(),e){t=Ye(t);const r=fl(t,EE).getImmediate({identifier:e}),s=qm("storage");return s&&KO(r,...s),r}function KO(t,e,n,r={}){jO(t,e,n,r)}function GO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Od(n,r,s,e,as)}function QO(){Yr(new wr(EE,GO,"PUBLIC").setMultipleInstances(!0)),Sn(Jp,Zp,""),Sn(Jp,Zp,"esm2017")}QO();const YO={apiKey:"AIzaSyCe4xspiouuwD3oN8spYSnLZGNrEAw1i78",authDomain:"music-4a433.firebaseapp.com",projectId:"music-4a433",storageBucket:"music-4a433.appspot.com",appId:"1:189242395273:web:688ec4d0eef69b76171458"},Vd=Ym(YO),rs=yR(Vd),ro=hk(Vd),TE=WO(Vd);jv(ro,"users");const Nd=jv(ro,"songs"),XO={beforeMount(t,e){let n=`fa fa-${e.value}  text-xl`;e.arg==="full"&&(n=e.value),e.modifiers.right&&(n+=" float-right"),e.modifiers.yellow?n+=" text-yellow-400":n+=" text-green-400",t.innerHTML+=`<i class="${n}"></i>`}},Du=Mm("modal",{state:()=>({isOpen:!1}),getters:{hiddenClass(){return this.isOpen?"":"hidden"}}}),No=Mm("user",{state:()=>({userLoggedIn:!1}),actions:{async register(t){const e=await eA(t.email,t.password);await Pk(qa(ro,"users",e.user.uid),{name:t.name,email:t.email,age:t.age,country:t.country}),await rA(e.user,{displayName:t.name}),this.userLoggedIn=!0},async login(t){await tA(rs,t.email,t.password),this.userLoggedIn=!0},async logout(){await oA(rs),this.userLoggedIn=!1}}}),_n=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},JO={name:"AppHeader",computed:{...ST(Du,No)},methods:{toggleAuthModal(){this.modalStore.isOpen=!this.modalStore.isOpen},signOut(){this.userStore.logout(),this.$route.meta.requiresAuth!==!0&&this.$router.push({name:"home"})}}},ZO={id:"header",class:"bg-gray-700"},e1={class:"container mx-auto flex items-center justify-start px-4 py-5"},t1={class:"mt-1 flex flex-row items-center"},n1={key:0};function r1(t,e,n,r,s,i){const o=ft("RouterLink");return xe(),Qe("header",ZO,[N("nav",e1,[ce(o,{class:"mr-4 text-2xl font-bold uppercase text-white",to:{name:"home"},"exact-active-class":"no-active"},{default:Hn(()=>[Ps("Music")]),_:1}),N("div",null,[N("ul",t1,[N("li",null,[ce(o,{class:"px-2 text-white",to:{name:"about"}},{default:Hn(()=>[Ps("About")]),_:1})]),t.userStore.userLoggedIn?(xe(),Qe(ht,{key:1},[N("li",null,[ce(o,{class:"px-2 text-white",to:{name:"manage"}},{default:Hn(()=>[Ps("Manage")]),_:1})]),N("li",null,[N("a",{class:"px-2 text-white",href:"#",onClick:e[1]||(e[1]=Ht((...a)=>i.signOut&&i.signOut(...a),["prevent"]))},"Logout")])],64)):(xe(),Qe("li",n1,[N("a",{class:"px-2 text-white",href:"#",onClick:e[0]||(e[0]=Ht((...a)=>i.toggleAuthModal&&i.toggleAuthModal(...a),["prevent"]))},"Login / Register")]))])])])])}const s1=_n(JO,[["render",r1]]),i1={name:"LoginForm",data(){return{loginSchema:{email:"required|email|min:3|max:100",password:"required|min:9|max:50|excluded:password"},loginInSubmission:!1,loginShowAlert:!1,loginAlertVariant:"bg-blue-500",loginAlertMessage:"Please wait! We are logging you in."}},methods:{...Lm(No,{authenticate:"login"}),async login(t){this.loginInSubmission=!0,this.loginShowAlert=!0,this.loginAlertVariant="bg-blue-500",this.loginAlertMessage="Please wait! We are logging you in.";try{await this.authenticate(t)}catch(e){this.loginInSubmission=!1,this.loginShowAlert=!0,this.loginAlertVariant="bg-red-500";const n=JSON.parse(e.message);this.loginAlertMessage=n.error.message;return}this.loginAlertVariant="bg-green-500",this.loginAlertMessage="You are now logged in.",window.location.reload()}}},o1={class:"mb-3"},a1=N("label",{class:"mb-2 inline-block"},"Email",-1),l1={class:"mb-3"},c1=N("label",{class:"mb-2 inline-block"},"Password",-1),u1=["disabled"];function h1(t,e,n,r,s,i){const o=ft("VeeField"),a=ft("ErrorMessage"),l=ft("VeeForm");return xe(),Qe(ht,null,[s.loginShowAlert?(xe(),Qe("div",{key:0,class:Xt(["mb-4 rounded p-4 text-center font-bold text-white",s.loginAlertVariant])},jn(s.loginAlertMessage),3)):uh("",!0),ce(l,{"validation-schema":s.loginSchema,onSubmit:i.login},{default:Hn(()=>[N("div",o1,[a1,ce(o,{name:"email",type:"email",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none",placeholder:"Enter Email"}),ce(a,{class:"text-red-600",name:"email"})]),N("div",l1,[c1,ce(o,{name:"password",type:"password",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none",placeholder:"Password",autocomplete:"on"})]),ce(a,{class:"text-red-600",name:"password"}),N("button",{type:"submit",class:"block w-full rounded bg-purple-600 px-3 py-1.5 text-white transition hover:bg-purple-700",disabled:s.loginInSubmission}," Submit ",8,u1)]),_:1},8,["validation-schema","onSubmit"])],64)}const d1=_n(i1,[["render",h1]]),f1={name:"RegisterForm",data(){return{schema:{name:"required|min:3|max:50|alpha_spaces",email:"required|email|min:3|max:100",age:"required|min_value:18|max_value:100",password:"required|min:9|max:50|excluded:password",confirmPassword:"passwords_mismatch:@password",country:"required|country_excluded:Antarctica",tos:"tos"},userData:{country:"USA"},regInSubmission:!1,regShowAlert:!1,regAlertVariant:"bg-blue-500",regAlertMessage:"Please wait! Your account is being created."}},methods:{...Lm(No,{createUser:"register"}),async register(t){this.regShowAlert=!0,this.regInSubmission=!0,this.regAlertVariant="bg-blue-500",this.regAlertMessage="Please wait! Your account is being created.";try{await this.createUser(t)}catch(e){this.regInSubmission=!1,this.regAlertVariant="bg-red-500",this.regAlertMessage=e.message;return}this.regAlertVariant="bg-green-500",this.regAlertMessage="Account created successfully!",window.location.reload()}}},p1={class:"mb-3"},g1=N("label",{class:"mb-2 inline-block"},"Name",-1),m1={class:"mb-3"},_1=N("label",{class:"mb-2 inline-block"},"Email",-1),y1={class:"mb-3"},v1=N("label",{class:"mb-2 inline-block"},"Age",-1),E1={class:"mb-3"},w1=N("label",{class:"mb-2 inline-block"},"Password",-1),T1={class:"mb-3"},I1=N("label",{class:"mb-2 inline-block"},"Confirm Password",-1),b1={class:"mb-3"},A1=N("label",{class:"mb-2 inline-block"},"Country",-1),R1=N("option",{value:"USA"},"USA",-1),S1=N("option",{value:"Mexico"},"Mexico",-1),P1=N("option",{value:"Germany"},"Germany",-1),C1=N("option",{value:"Antarctica"},"Antarctica",-1),k1={class:"mb-3 pl-6"},O1=N("label",{class:"inline-block"},"Accept terms of service",-1),V1=["disabled"];function N1(t,e,n,r,s,i){const o=ft("VeeField"),a=ft("ErrorMessage"),l=ft("VeeForm");return xe(),Qe(ht,null,[s.regShowAlert?(xe(),Qe("div",{key:0,class:Xt(["mb-4 rounded p-4 text-center font-bold text-white",s.regAlertVariant])},jn(s.regAlertMessage),3)):uh("",!0),ce(l,{"validation-schema":s.schema,onSubmit:i.register,"initial-values":s.userData},{default:Hn(()=>[N("div",p1,[g1,ce(o,{name:"name",type:"text",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none",placeholder:"Enter Name"}),ce(a,{class:"text-red-600",name:"name"})]),N("div",m1,[_1,ce(o,{name:"email",type:"email",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none",placeholder:"Enter Email"}),ce(a,{class:"text-red-600",name:"email"})]),N("div",y1,[v1,ce(o,{name:"age",type:"number",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"}),ce(a,{class:"text-red-600",name:"age"})]),N("div",E1,[w1,ce(o,{name:"password",bails:!1},{default:Hn(({field:c,errors:u})=>[N("input",Pm({type:"password",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none",placeholder:"Password"},c),null,16),(xe(!0),Qe(ht,null,il(u,h=>(xe(),Qe("div",{class:"text-red-600",key:h},jn(h),1))),128))]),_:1})]),N("div",T1,[I1,ce(o,{name:"confirmPassword",type:"password",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none",placeholder:"Confirm Password"}),ce(a,{class:"text-red-600",name:"confirmPassword"})]),N("div",b1,[A1,ce(o,{as:"select",name:"country",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none"},{default:Hn(()=>[R1,S1,P1,C1]),_:1}),ce(a,{class:"text-red-600",name:"country"})]),N("div",k1,[ce(o,{name:"tos",value:"1",type:"checkbox",class:"float-left -ml-6 mt-1 h-4 w-4 rounded"}),O1,ce(a,{class:"block text-red-600",name:"tos"})]),N("button",{type:"submit",class:"block w-full rounded bg-purple-600 px-3 py-1.5 text-white transition hover:bg-purple-700",disabled:s.regInSubmission}," Submit ",8,V1)]),_:1},8,["validation-schema","onSubmit","initial-values"])],64)}const D1=_n(f1,[["render",N1]]),x1={name:"AppAuth",components:{AppLoginForm:d1,AppRegisterForm:D1},data(){return{tab:"login"}},computed:{...PT(Du,["hiddenClass"]),...Um(Du,{modalVisability:"isOpen"})}},M1={class:"flex min-h-screen items-end justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0"},L1=N("div",{class:"fixed inset-0 transition-opacity"},[N("div",{class:"absolute inset-0 bg-gray-800 opacity-75"})],-1),U1=N("span",{class:"hidden sm:inline-block sm:h-screen sm:align-middle"},"​",-1),F1={class:"inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"},$1={class:"px-6 py-4 text-left"},B1={class:"flex items-center justify-between pb-4"},j1=N("p",{class:"text-2xl font-bold"},"Your Account",-1),q1=N("i",{class:"fas fa-times"},null,-1),H1=[q1],z1={class:"mb-4 flex flex-wrap"},W1={class:"flex-auto text-center"},K1={class:"flex-auto text-center"};function G1(t,e,n,r,s,i){const o=ft("AppLoginForm"),a=ft("AppRegisterForm");return xe(),Qe("div",{class:Xt(["fixed inset-0 z-10 overflow-y-auto",t.hiddenClass]),id:"modal"},[N("div",M1,[L1,U1,N("div",F1,[N("div",$1,[N("div",B1,[j1,N("div",{class:"modal-close z-50 cursor-pointer",onClick:e[0]||(e[0]=l=>t.modalVisability=!1)},H1)]),N("ul",z1,[N("li",W1,[N("a",{class:Xt(["block rounded transition",{"bg-blue-600 px-4 py-3 text-white hover:text-white":s.tab==="login","hover:text-blue-600":s.tab==="register"}]),href:"#",onClick:e[1]||(e[1]=Ht(l=>s.tab="login",["prevent"]))},"Login",2)]),N("li",K1,[N("a",{class:Xt(["block rounded px-4 py-3 transition",{"bg-blue-600 px-4 py-3 text-white hover:text-white":s.tab==="register","hover:text-blue-600":s.tab==="login"}]),href:"#",onClick:e[2]||(e[2]=Ht(l=>s.tab="register",["prevent"]))},"Register",2)])]),s.tab==="login"?(xe(),$i(o,{key:0})):(xe(),$i(a,{key:1}))])])])],2)}const Q1=_n(x1,[["render",G1]]),Y1={name:"App",components:{AppHeader:s1,AppAuth:Q1},computed:{...Um(No,["userLoggedIn"])},created(){rs.currentUser&&(this.userLoggedIn=!0)}},X1=Sm('<div class="fixed bottom-0 left-0 w-full bg-white px-4 py-2"><div class="text-center"><span class="song-title font-bold">Song Title</span> by <span class="song-artist">Artist</span></div><div class="flex flex-nowrap items-center gap-4"><button type="button"><i class="fa fa-play text-xl text-gray-500"></i></button><div class="player-currenttime">00:00</div><div class="relative h-2 w-full cursor-pointer rounded bg-gray-200"><span class="absolute -top-2.5 -ml-2.5 text-lg text-gray-800" style="left:50%;"><i class="fas fa-circle"></i></span><span class="block h-2 rounded bg-gradient-to-r from-green-500 to-green-400" style="width:50%;"></span></div><div class="player-duration">03:06</div></div></div>',1);function J1(t,e,n,r,s,i){const o=ft("AppHeader"),a=ft("RouterView"),l=ft("AppAuth");return xe(),Qe(ht,null,[ce(o),ce(a),X1,ce(l)],64)}const Z1=_n(Y1,[["render",J1]]);/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Es=typeof document<"u";function eV(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ve=Object.assign;function Nc(t,e){const n={};for(const r in e){const s=e[r];n[r]=mn(s)?s.map(t):t(s)}return n}const Di=()=>{},mn=Array.isArray,IE=/#/g,tV=/&/g,nV=/\//g,rV=/=/g,sV=/\?/g,bE=/\+/g,iV=/%5B/g,oV=/%5D/g,AE=/%5E/g,aV=/%60/g,RE=/%7B/g,lV=/%7C/g,SE=/%7D/g,cV=/%20/g;function Dd(t){return encodeURI(""+t).replace(lV,"|").replace(iV,"[").replace(oV,"]")}function uV(t){return Dd(t).replace(RE,"{").replace(SE,"}").replace(AE,"^")}function xu(t){return Dd(t).replace(bE,"%2B").replace(cV,"+").replace(IE,"%23").replace(tV,"%26").replace(aV,"`").replace(RE,"{").replace(SE,"}").replace(AE,"^")}function hV(t){return xu(t).replace(rV,"%3D")}function dV(t){return Dd(t).replace(IE,"%23").replace(sV,"%3F")}function fV(t){return t==null?"":dV(t).replace(nV,"%2F")}function so(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const pV=/\/$/,gV=t=>t.replace(pV,"");function Dc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=vV(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:so(o)}}function mV(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function eg(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function _V(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ks(e.matched[r],n.matched[s])&&PE(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function PE(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!yV(t[n],e[n]))return!1;return!0}function yV(t,e){return mn(t)?tg(t,e):mn(e)?tg(e,t):t===e}function tg(t,e){return mn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function vV(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var io;(function(t){t.pop="pop",t.push="push"})(io||(io={}));var xi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xi||(xi={}));function EV(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gV(t)}const wV=/^[^#]+#/;function TV(t,e){return t.replace(wV,"#")+e}function IV(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xl=()=>({left:window.scrollX,top:window.scrollY});function bV(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=IV(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ng(t,e){return(history.state?history.state.position-e:-1)+t}const Mu=new Map;function AV(t,e){Mu.set(t,e)}function RV(t){const e=Mu.get(t);return Mu.delete(t),e}let SV=()=>location.protocol+"//"+location.host;function CE(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),eg(l,"")}return eg(n,t)+r+s}function PV(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=CE(t,location),v=n.value,T=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===v){o=null;return}y=T?d.position-T.position:0}else r(f);s.forEach(S=>{S(n.value,v,{delta:y,type:io.pop,direction:y?y>0?xi.forward:xi.back:xi.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const v=s.indexOf(d);v>-1&&s.splice(v,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ve({},d.state,{scroll:Xl()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function rg(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xl():null}}function CV(t){const{history:e,location:n}=window,r={value:CE(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:SV()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ve({},e.state,rg(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Ve({},s.value,e.state,{forward:l,scroll:Xl()});i(u.current,u,!0);const h=Ve({},rg(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function kV(t){t=EV(t);const e=CV(t),n=PV(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ve({location:"",base:t,go:r,createHref:TV.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function OV(t){return typeof t=="string"||t&&typeof t=="object"}function kE(t){return typeof t=="string"||typeof t=="symbol"}const tr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},OE=Symbol("");var sg;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(sg||(sg={}));function Gs(t,e){return Ve(new Error,{type:t,[OE]:!0},e)}function Ln(t,e){return t instanceof Error&&OE in t&&(e==null||!!(t.type&e))}const ig="[^/]+?",VV={sensitive:!1,strict:!1,start:!0,end:!0},NV=/[.+*?^${}()[\]/\\]/g;function DV(t,e){const n=Ve({},VV,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(NV,"\\$&"),f+=40;else if(d.type===1){const{value:v,repeatable:T,optional:y,regexp:S}=d;i.push({name:v,repeatable:T,optional:y});const k=S||ig;if(k!==ig){f+=10;try{new RegExp(`(${k})`)}catch($){throw new Error(`Invalid custom RegExp for param "${v}" (${k}): `+$.message)}}let O=T?`((?:${k})(?:/(?:${k}))*)`:`(${k})`;h||(O=y&&c.length<2?`(?:/${O})`:"/"+O),y&&(O+="?"),s+=O,f+=20,y&&(f+=-8),T&&(f+=-20),k===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",v=i[d-1];h[v.name]=f&&v.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:v,repeatable:T,optional:y}=f,S=v in c?c[v]:"";if(mn(S)&&!T)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const k=mn(S)?S.join("/"):S;if(!k)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${v}"`);u+=k}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function xV(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function MV(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=xV(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(og(r))return 1;if(og(s))return-1}return s.length-r.length}function og(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const LV={type:0,value:""},UV=/[a-zA-Z0-9_]/;function FV(t){if(!t)return[[]];if(t==="/")return[[LV]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:UV.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function $V(t,e,n){const r=DV(FV(t.path),n),s=Ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function BV(t,e){const n=[],r=new Map;e=cg({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,v=jV(u);v.aliasOf=d&&d.record;const T=cg(e,u),y=[v];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const $ of O)y.push(Ve({},v,{components:d?d.record.components:v.components,path:$,aliasOf:d?d.record:v}))}let S,k;for(const O of y){const{path:$}=O;if(h&&$[0]!=="/"){const X=h.record.path,M=X[X.length-1]==="/"?"":"/";O.path=h.record.path+($&&M+$)}if(S=$V(O,h,T),d?d.alias.push(S):(k=k||S,k!==S&&k.alias.push(S),f&&u.name&&!lg(S)&&o(u.name)),v.children){const X=v.children;for(let M=0;M<X.length;M++)i(X[M],S,d&&d.children[M])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&l(S)}return k?()=>{o(k)}:Di}function o(u){if(kE(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&MV(u,n[h])>=0&&(u.record.path!==n[h].record.path||!VE(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!lg(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},v,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw Gs(1,{location:u});T=d.record.name,f=Ve(ag(h.params,d.keys.filter(k=>!k.optional).concat(d.parent?d.parent.keys.filter(k=>k.optional):[]).map(k=>k.name)),u.params&&ag(u.params,d.keys.map(k=>k.name))),v=d.stringify(f)}else if(u.path!=null)v=u.path,d=n.find(k=>k.re.test(v)),d&&(f=d.parse(v),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(k=>k.re.test(h.path)),!d)throw Gs(1,{location:u,currentLocation:h});T=d.record.name,f=Ve({},h.params,u.params),v=d.stringify(f)}const y=[];let S=d;for(;S;)y.unshift(S.record),S=S.parent;return{name:T,path:v,params:f,matched:y,meta:HV(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ag(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function jV(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:qV(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function qV(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function lg(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function HV(t){return t.reduce((e,n)=>Ve(e,n.meta),{})}function cg(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function VE(t,e){return e.children.some(n=>n===t||VE(t,n))}function zV(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(bE," "),o=i.indexOf("="),a=so(o<0?i:i.slice(0,o)),l=o<0?null:so(i.slice(o+1));if(a in e){let c=e[a];mn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function ug(t){let e="";for(let n in t){const r=t[n];if(n=hV(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(mn(r)?r.map(i=>i&&xu(i)):[r&&xu(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function WV(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const KV=Symbol(""),hg=Symbol(""),xd=Symbol(""),NE=Symbol(""),Lu=Symbol("");function di(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ar(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Gs(4,{from:n,to:e})):d instanceof Error?l(d):OV(d)?l(Gs(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function xc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(GV(l)){const u=(l.__vccOpts||l)[e];u&&i.push(ar(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=eV(u)?u.default:u;o.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&ar(f,n,r,o,a,s)()}))}}return i}function GV(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function dg(t){const e=sn(xd),n=sn(NE),r=ye(()=>e.resolve(Re(t.to))),s=ye(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(Ks.bind(null,u));if(d>-1)return d;const f=fg(l[c-2]);return c>1&&fg(u)===f&&h[h.length-1].path!==f?h.findIndex(Ks.bind(null,l[c-2])):d}),i=ye(()=>s.value>-1&&JV(n.params,r.value.params)),o=ye(()=>s.value>-1&&s.value===n.matched.length-1&&PE(n.params,r.value.params));function a(l={}){return XV(l)?e[Re(t.replace)?"replace":"push"](Re(t.to)).catch(Di):Promise.resolve()}return{route:r,href:ye(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const QV=ao({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:dg,setup(t,{slots:e}){const n=Kn(dg(t)),{options:r}=sn(xd),s=ye(()=>({[pg(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[pg(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ls("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),YV=QV;function XV(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function JV(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function fg(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const pg=(t,e,n)=>t??e??n,ZV=ao({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=sn(Lu),s=ye(()=>t.route||r.value),i=sn(hg,0),o=ye(()=>{let c=Re(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=ye(()=>s.value.matched[o.value]);Ss(hg,ye(()=>o.value+1)),Ss(KV,a),Ss(Lu,s);const l=Mt();return rn(()=>[l.value,a.value,t.name],([c,u,h],[d,f,v])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ks(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return gg(n.default,{Component:d,route:c});const f=h.props[u],v=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=Ls(d,Ve({},v,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return gg(n.default,{Component:y,route:c})||y}}});function gg(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const eN=ZV;function tN(t){const e=BV(t.routes,t),n=t.parseQuery||zV,r=t.stringifyQuery||ug,s=t.history,i=di(),o=di(),a=di(),l=em(tr);let c=tr;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Nc.bind(null,w=>""+w),h=Nc.bind(null,fV),d=Nc.bind(null,so);function f(w,V){let L,z;return kE(w)?(L=e.getRecordMatcher(w),z=V):z=w,e.addRoute(z,L)}function v(w){const V=e.getRecordMatcher(w);V&&e.removeRoute(V)}function T(){return e.getRoutes().map(w=>w.record)}function y(w){return!!e.getRecordMatcher(w)}function S(w,V){if(V=Ve({},V||l.value),typeof w=="string"){const g=Dc(n,w,V.path),E=e.resolve({path:g.path},V),R=s.createHref(g.fullPath);return Ve(g,E,{params:d(E.params),hash:so(g.hash),redirectedFrom:void 0,href:R})}let L;if(w.path!=null)L=Ve({},w,{path:Dc(n,w.path,V.path).path});else{const g=Ve({},w.params);for(const E in g)g[E]==null&&delete g[E];L=Ve({},w,{params:h(g)}),V.params=h(V.params)}const z=e.resolve(L,V),me=w.hash||"";z.params=u(d(z.params));const Fe=mV(r,Ve({},w,{hash:uV(me),path:z.path})),p=s.createHref(Fe);return Ve({fullPath:Fe,hash:me,query:r===ug?WV(w.query):w.query||{}},z,{redirectedFrom:void 0,href:p})}function k(w){return typeof w=="string"?Dc(n,w,l.value.path):Ve({},w)}function O(w,V){if(c!==w)return Gs(8,{from:V,to:w})}function $(w){return le(w)}function X(w){return $(Ve(k(w),{replace:!0}))}function M(w){const V=w.matched[w.matched.length-1];if(V&&V.redirect){const{redirect:L}=V;let z=typeof L=="function"?L(w):L;return typeof z=="string"&&(z=z.includes("?")||z.includes("#")?z=k(z):{path:z},z.params={}),Ve({query:w.query,hash:w.hash,params:z.path!=null?{}:w.params},z)}}function le(w,V){const L=c=S(w),z=l.value,me=w.state,Fe=w.force,p=w.replace===!0,g=M(L);if(g)return le(Ve(k(g),{state:typeof g=="object"?Ve({},me,g.state):me,force:Fe,replace:p}),V||L);const E=L;E.redirectedFrom=V;let R;return!Fe&&_V(r,z,L)&&(R=Gs(16,{to:E,from:z}),Nt(z,z,!0,!1)),(R?Promise.resolve(R):ie(E,z)).catch(I=>Ln(I)?Ln(I,2)?I:$t(I):ge(I,E,z)).then(I=>{if(I){if(Ln(I,2))return le(Ve({replace:p},k(I.to),{state:typeof I.to=="object"?Ve({},me,I.to.state):me,force:Fe}),V||E)}else I=Ge(E,z,!0,p,me);return Me(E,z,I),I})}function G(w,V){const L=O(w,V);return L?Promise.reject(L):Promise.resolve()}function Q(w){const V=yn.values().next().value;return V&&typeof V.runWithContext=="function"?V.runWithContext(w):w()}function ie(w,V){let L;const[z,me,Fe]=nN(w,V);L=xc(z.reverse(),"beforeRouteLeave",w,V);for(const g of z)g.leaveGuards.forEach(E=>{L.push(ar(E,w,V))});const p=G.bind(null,w,V);return L.push(p),ee(L).then(()=>{L=[];for(const g of i.list())L.push(ar(g,w,V));return L.push(p),ee(L)}).then(()=>{L=xc(me,"beforeRouteUpdate",w,V);for(const g of me)g.updateGuards.forEach(E=>{L.push(ar(E,w,V))});return L.push(p),ee(L)}).then(()=>{L=[];for(const g of Fe)if(g.beforeEnter)if(mn(g.beforeEnter))for(const E of g.beforeEnter)L.push(ar(E,w,V));else L.push(ar(g.beforeEnter,w,V));return L.push(p),ee(L)}).then(()=>(w.matched.forEach(g=>g.enterCallbacks={}),L=xc(Fe,"beforeRouteEnter",w,V,Q),L.push(p),ee(L))).then(()=>{L=[];for(const g of o.list())L.push(ar(g,w,V));return L.push(p),ee(L)}).catch(g=>Ln(g,8)?g:Promise.reject(g))}function Me(w,V,L){a.list().forEach(z=>Q(()=>z(w,V,L)))}function Ge(w,V,L,z,me){const Fe=O(w,V);if(Fe)return Fe;const p=V===tr,g=Es?history.state:{};L&&(z||p?s.replace(w.fullPath,Ve({scroll:p&&g&&g.scroll},me)):s.push(w.fullPath,me)),l.value=w,Nt(w,V,L,p),$t()}let Le;function Ze(){Le||(Le=s.listen((w,V,L)=>{if(!Y.listening)return;const z=S(w),me=M(z);if(me){le(Ve(me,{replace:!0}),z).catch(Di);return}c=z;const Fe=l.value;Es&&AV(ng(Fe.fullPath,L.delta),Xl()),ie(z,Fe).catch(p=>Ln(p,12)?p:Ln(p,2)?(le(p.to,z).then(g=>{Ln(g,20)&&!L.delta&&L.type===io.pop&&s.go(-1,!1)}).catch(Di),Promise.reject()):(L.delta&&s.go(-L.delta,!1),ge(p,z,Fe))).then(p=>{p=p||Ge(z,Fe,!1),p&&(L.delta&&!Ln(p,8)?s.go(-L.delta,!1):L.type===io.pop&&Ln(p,20)&&s.go(-1,!1)),Me(z,Fe,p)}).catch(Di)}))}let Ue=di(),H=di(),pe;function ge(w,V,L){$t(w);const z=H.list();return z.length?z.forEach(me=>me(w,V,L)):console.error(w),Promise.reject(w)}function lt(){return pe&&l.value!==tr?Promise.resolve():new Promise((w,V)=>{Ue.add([w,V])})}function $t(w){return pe||(pe=!w,Ze(),Ue.list().forEach(([V,L])=>w?L(w):V()),Ue.reset()),w}function Nt(w,V,L,z){const{scrollBehavior:me}=t;if(!Es||!me)return Promise.resolve();const Fe=!L&&RV(ng(w.fullPath,0))||(z||!L)&&history.state&&history.state.scroll||null;return Qt().then(()=>me(w,V,Fe)).then(p=>p&&bV(p)).catch(p=>ge(p,w,V))}const mt=w=>s.go(w);let et;const yn=new Set,Y={currentRoute:l,listening:!0,addRoute:f,removeRoute:v,hasRoute:y,getRoutes:T,resolve:S,options:t,push:$,replace:X,go:mt,back:()=>mt(-1),forward:()=>mt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:H.add,isReady:lt,install(w){const V=this;w.component("RouterLink",YV),w.component("RouterView",eN),w.config.globalProperties.$router=V,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>Re(l)}),Es&&!et&&l.value===tr&&(et=!0,$(s.location).catch(me=>{}));const L={};for(const me in tr)Object.defineProperty(L,me,{get:()=>l.value[me],enumerable:!0});w.provide(xd,V),w.provide(NE,Yg(L)),w.provide(Lu,l);const z=w.unmount;yn.add(w),w.unmount=function(){yn.delete(w),yn.size<1&&(c=tr,Le&&Le(),Le=null,l.value=tr,et=!1,pe=!1),z()}}};function ee(w){return w.reduce((V,L)=>V.then(()=>Q(L)),Promise.resolve())}return Y}function nN(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ks(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ks(c,l))||s.push(l))}return[n,r,s]}const rN={name:"SongItem",props:{song:{type:Object,required:!0}}},sN={class:"flex cursor-pointer items-center justify-between p-3 pl-6 transition duration-300 hover:bg-gray-50"},iN={href:"#",class:"block font-bold text-gray-600"},oN={class:"text-sm text-gray-500"},aN={class:"text-lg text-gray-600"},lN={class:"comments"},cN=N("i",{class:"fa fa-comments text-gray-600"},null,-1);function uN(t,e,n,r,s,i){return xe(),Qe("li",sN,[N("div",null,[N("a",iN,jn(n.song.modifiedName),1),N("span",oN,jn(n.song.displayName),1)]),N("div",aN,[N("span",lN,[cN,Ps(" "+jn(n.song.commentCount),1)])])])}const hN=_n(rN,[["render",uN]]),dN={beforeMount(t,e){let n=`fa fa-${e.value}  text-green-400 text-xl`;e.value.right&&(n+=" float-right"),t.innerHTML+=`<i class="${n}"></i>`}},fN="/music-playing/assets/img/introduction-music.png",pN={name:"HomeView",directives:dN,components:{AppSongItem:hN},data(){return{songs:[]}},created(){this.getSongs(),window.addEventListener("scroll",this.handleScroll)},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)},methods:{async getSongs(){(await tE(Nd)).forEach(e=>{this.songs.push({docID:e.id,...e.data()})})},handleScroll(){const{scrollTop:t,offsetHeight:e}=document.documentElement,{innerHeight:n}=window;Math.round(t)+n===e&&console.log("End of page")}}},gN=Sm('<section class="relative mb-8 py-20 text-center text-white"><div class="introduction-bg absolute inset-0 h-full w-full bg-contain" style="background-image:url(assets/img/header.png);"></div><div class="container mx-auto"><div class="main-header-content text-white"><h1 class="mb-5 text-5xl font-bold">Listen to Great Music!</h1><p class="mx-auto w-full md:w-8/12"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et dolor mollis, congue augue non, venenatis elit. Nunc justo eros, suscipit ac aliquet imperdiet, venenatis et sapien. Duis sed magna pulvinar, fringilla lorem eget, ullamcorper urna. </p></div></div><img class="relative mx-auto -mb-20 mt-5 block w-auto max-w-full" src="'+fN+'" alt="Music"></section>',1),mN={class:"container mx-auto"},_N={class:"relative flex flex-col rounded border border-gray-200 bg-white"},yN={class:"border-b border-gray-200 px-6 pb-5 pt-6 font-bold"},vN=N("span",{class:"card-title"},"Songs",-1),EN=[vN],wN={id:"playlist"};function TN(t,e,n,r,s,i){const o=ft("AppSongItem"),a=Yw("icon");return xe(),Qe(ht,null,[gN,N("section",mN,[N("div",_N,[jc((xe(),Qe("div",yN,EN)),[[a,"headphones-alt",void 0,{right:!0,yellow:!0}]]),N("ol",wN,[(xe(!0),Qe(ht,null,il(s.songs,l=>(xe(),$i(o,{key:l.docID,song:l},null,8,["song"]))),128))])])])],64)}const IN=_n(pN,[["render",TN]]),bN={},AN={class:"about"},RN=N("h1",null,"This is an about page",-1),SN=[RN];function PN(t,e){return xe(),Qe("div",AN,SN)}const CN=_n(bN,[["render",PN]]),kN={name:"ManageUpload",data(){return{isDragging:!1,uploads:[]}},props:["addSong"],methods:{upload(t){this.isDragging=!1,console.log("Uploading files..."),(t.dataTransfer?[...t.dataTransfer.files]:[...t.target.files]).forEach(n=>{if(n.type!=="audio/mpeg"){console.error("Invalid file type");return}const r=wE(TE,`songs/${n.name}`),s=qO(r,n),i=this.uploads.push({task:s,currentProgress:0,name:n.name,varient:"bg-blue-400",icon:"fa fa-spinner fa-spin",textClass:""})-1;s.on("state_changed",o=>{const a=o.bytesTransferred/o.totalBytes*100;this.uploads[i].currentProgress=a},o=>{this.uploads[i].varient="bg-red-400",this.uploads[i].icon="fa fa-exclamation-circle",this.uploads[i].textClass="text-red-400",console.error(o)},async()=>{const o=await HO(s.snapshot.ref),a={uid:rs.currentUser.uid,displayName:rs.currentUser.displayName,originalName:s.snapshot.ref.name,modifiedName:s.snapshot.ref.name,genre:"",commentCount:0,url:o},l=await Ok(Nd,a),c=await Sk(l);this.addSong(c),this.uploads[i].varient="bg-green-400",this.uploads[i].icon="fa fa-check-circle",this.uploads[i].textClass="text-green-400"})})},cancelUpload(){this.uploads.forEach(t=>{t.task.cancel()})}},beforeUnmount(){this.cancelUpload()}},ON={class:"relative flex flex-col rounded border border-gray-200 bg-white"},VN=N("div",{class:"border-b border-gray-200 px-6 pb-5 pt-6 font-bold"},[N("span",{class:"card-title"},"Upload"),N("i",{class:"fas fa-upload float-right text-2xl text-green-400"})],-1),NN={class:"p-6"},DN=N("h5",null,"Drop your files here",-1),xN=[DN],MN=N("hr",{class:"my-6"},null,-1),LN={class:"flex h-4 overflow-hidden rounded bg-gray-200"};function UN(t,e,n,r,s,i){return xe(),Qe("div",ON,[VN,N("div",NN,[N("div",{class:Xt(["w-full cursor-pointer rounded border border-dashed border-gray-400 px-10 py-20 text-center text-gray-400 transition duration-500 hover:border-solid hover:border-green-400 hover:bg-green-400 hover:text-white",{"border-solid border-green-400 bg-green-400":s.isDragging}]),onDrag:e[0]||(e[0]=Ht(()=>{},["prevent","stop"])),onDragstart:e[1]||(e[1]=Ht(()=>{},["prevent","stop"])),onDragend:e[2]||(e[2]=Ht(o=>s.isDragging=!1,["prevent","stop"])),onDragover:e[3]||(e[3]=Ht(o=>s.isDragging=!0,["prevent","stop"])),onDragenter:e[4]||(e[4]=Ht(o=>s.isDragging=!0,["prevent","stop"])),onDragleave:e[5]||(e[5]=Ht(o=>s.isDragging=!1,["prevent","stop"])),onDrop:e[6]||(e[6]=Ht(o=>i.upload(o),["prevent","stop"]))},xN,34),N("input",{type:"file",multiple:"",onChange:e[7]||(e[7]=o=>i.upload(o))},null,32),MN,(xe(!0),Qe(ht,null,il(s.uploads,o=>(xe(),Qe("div",{class:"mb-4",key:o.name},[N("div",{class:Xt(["text-sm font-bold",o.textClass])},[N("i",{class:Xt(o.icon)},null,2),Ps(" "+jn(o.name),1)],2),N("div",LN,[N("div",{class:Xt(["progress-bar bg-blue-400 transition-all",o.varient]),style:Za({width:`${o.currentProgress}%`})},null,6)])]))),128))])])}const FN=_n(kN,[["render",UN]]),$N={name:"CompositionItem",props:{song:{type:Object,required:!0},index:{type:Number,required:!0},updateSong:{type:Function,required:!0},deleteSong:{type:Function,required:!0},updateUnsavedFlag:{type:Function}},data(){return{showForm:!1,songSchema:{modifiedName:"required",genre:"alpha_spaces"},inSubmission:!1,showAlert:!1,alertVariant:"bg-blue-500",alertMessage:"Please wait! We are updating the song."}},methods:{async editSong(t){this.inSubmission=!0,this.showAlert=!0,this.alertVariant="bg-blue-500";try{await this.updateSong(this.index,t),this.updateUnsavedFlag(!1),this.alertVariant="bg-green-500",this.alertMessage="Song updated successfully!"}catch(e){this.alertVariant="bg-red-500",this.alertMessage=e.message,console.error(e)}this.inSubmission=!1},async songDelete(){this.showAlert=!0,this.alertVariant="bg-blue-500",this.alertMessage="Please wait! We are deleting the song.";try{await this.deleteSong(this.index),this.alertVariant="bg-green-500",this.alertMessage="Song deleted successfully!"}catch(t){this.alertVariant="bg-red-500",this.alertMessage=t.message,console.error(t)}}}},BN={class:"mb-4 rounded border border-gray-200 p-3"},jN={class:"inline-block text-2xl font-bold"},qN=N("i",{class:"fa fa-times"},null,-1),HN=[qN],zN=N("i",{class:"fa fa-pencil-alt"},null,-1),WN=[zN],KN={class:"mb-3"},GN=N("label",{class:"mb-2 inline-block"},"Song Title",-1),QN={class:"mb-3"},YN=N("label",{class:"mb-2 inline-block"},"Genre",-1),XN=["disabled"],JN=["disabled"];function ZN(t,e,n,r,s,i){const o=ft("VeeField"),a=ft("ErrorMessage"),l=ft("VeeForm");return xe(),Qe("div",BN,[jc(N("div",null,[N("h4",jN,jn(n.song.modifiedName),1),N("button",{class:"float-right ml-1 rounded bg-red-600 px-2 py-1 text-sm text-white",onClick:e[0]||(e[0]=Ht((...c)=>i.songDelete&&i.songDelete(...c),["prevent"]))},HN),N("button",{class:"float-right ml-1 rounded bg-blue-600 px-2 py-1 text-sm text-white",onClick:e[1]||(e[1]=Ht(c=>s.showForm=!0,["prevent"]))},WN)],512),[[df,!s.showForm]]),jc(N("div",null,[s.showAlert?(xe(),Qe("div",{key:0,class:Xt(["mb-4 p-4 text-center font-bold text-white",s.alertVariant])},jn(s.alertMessage),3)):uh("",!0),ce(l,{"validation-schema":s.songSchema,onSubmit:i.editSong,"initial-values":n.song},{default:Hn(()=>[N("div",KN,[GN,ce(o,{name:"modifiedName",type:"text",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none",placeholder:"Enter Song Title",onInput:e[2]||(e[2]=c=>n.updateUnsavedFlag(!0))}),ce(a,{class:"text-red-600",name:"modifiedName"})]),N("div",QN,[YN,ce(o,{name:"genre",type:"text",class:"block w-full rounded border border-gray-300 px-3 py-1.5 text-gray-800 transition duration-500 focus:border-black focus:outline-none",placeholder:"Enter Genre",onInput:e[3]||(e[3]=c=>n.updateUnsavedFlag(!0))}),ce(a,{class:"text-red-600",name:"genre"})]),N("button",{type:"submit",class:"rounded bg-green-600 px-3 py-1.5 text-white",disabled:s.inSubmission}," Submit ",8,XN),N("button",{type:"button",class:"rounded bg-gray-600 px-3 py-1.5 text-white",disabled:s.inSubmission,onClick:e[4]||(e[4]=Ht(c=>s.showForm=!1,["prevent"]))}," Go Back ",8,JN)]),_:1},8,["validation-schema","onSubmit","initial-values"])],512),[[df,s.showForm]])])}const eD=_n($N,[["render",ZN]]),tD={name:"ManageView",components:{ManageUpload:FN,CompositionItem:eD},data(){return{songs:[],unsavedFlag:!1}},async created(){const t=Tk(Nd,Ik("uid","==",rs.currentUser.uid)),e=await tE(t);for(const n of e.docs)this.addSong(n)},methods:{updateSong(t,e){const n=this.songs[t];n.modifiedName=e.modifiedName,n.genre=e.genre;const r=qa(ro,"songs",n.docID);return Ck(r,e)},async deleteSong(t){const e=this.songs[t],n=qa(ro,"songs",e.docID);await kk(n);const r=wE(TE,`songs/${e.originalName}`);await zO(r),this.songs.splice(t,1)},addSong(t){const e={docID:t.id,...t.data()};this.songs.push(e)},updateUnsavedFlag(t){this.unsavedFlag=t}},beforeRouteLeave(t,e,n){if(!this.unsavedFlag)n();else{const r=confirm("You have unsaved changes. Do you really want to leave?");n(r)}}},nD={class:"container mx-auto mt-6"},rD={class:"md:grid md:grid-cols-3 md:gap-4"},sD={class:"col-span-1"},iD={class:"col-span-2"},oD={class:"relative flex flex-col rounded border border-gray-200 bg-white"},aD=N("div",{class:"border-b border-gray-200 px-6 pb-5 pt-6 font-bold"},[N("span",{class:"card-title"},"My Songs"),N("i",{class:"fa fa-compact-disc float-right text-2xl text-green-400"})],-1),lD={class:"p-6"};function cD(t,e,n,r,s,i){const o=ft("ManageUpload"),a=ft("CompositionItem");return xe(),Qe("section",nD,[N("div",rD,[N("div",sD,[ce(o,{ref:"upload",addSong:i.addSong},null,8,["addSong"])]),N("div",iD,[N("div",oD,[aD,N("div",lD,[(xe(!0),Qe(ht,null,il(s.songs,(l,c)=>(xe(),$i(a,{key:l.docID,song:l,index:c,deleteSong:i.deleteSong,updateSong:i.updateSong,updateUnsavedFlag:i.updateUnsavedFlag},null,8,["song","index","deleteSong","updateSong","updateUnsavedFlag"]))),128))])])])])])}const uD=_n(tD,[["render",cD]]),hD=[{path:"/",name:"home",component:IN},{path:"/about",name:"about",component:CN},{path:"/manage-music",name:"manage",component:uD,beforeEnter:(t,e,n)=>{console.log("Manage Guard"),n()},meta:{requiresAuth:!0}},{path:"/manage",redirect:{name:"manage"}},{path:"/:catchAll(.*)*",redirect:{name:"home"}}],DE=tN({history:kV("/music-playing/"),routes:hD,linkExactActiveClass:"text-yellow-500"});DE.beforeEach((t,e,n)=>{if(!t.meta.requiresAuth){n();return}No().userLoggedIn?n():(window.alert("You must be logged in to access this page"),n({name:"home"}))});/**
  * vee-validate v4.12.6
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */function Et(t){return typeof t=="function"}function xE(t){return t==null}const ss=t=>t!==null&&!!t&&typeof t=="object"&&!Array.isArray(t);function Md(t){return Number(t)>=0}function dD(t){const e=parseFloat(t);return isNaN(e)?t:e}function fD(t){return typeof t=="object"&&t!==null}function pD(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}function mg(t){if(!fD(t)||pD(t)!=="[object Object]")return!1;if(Object.getPrototypeOf(t)===null)return!0;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function oo(t,e){return Object.keys(e).forEach(n=>{if(mg(e[n])&&mg(t[n])){t[n]||(t[n]={}),oo(t[n],e[n]);return}t[n]=e[n]}),t}function wi(t){const e=t.split(".");if(!e.length)return"";let n=String(e[0]);for(let r=1;r<e.length;r++){if(Md(e[r])){n+=`[${e[r]}]`;continue}n+=`.${e[r]}`}return n}const ME={};function ln(t,e){mD(t,e),ME[t]=e}function gD(t){return ME[t]}function mD(t,e){if(!Et(e))throw new Error(`Extension Error: The validator '${t}' must be a function.`)}function _g(t,e,n){typeof n.value=="object"&&(n.value=De(n.value)),!n.enumerable||n.get||n.set||!n.configurable||!n.writable||e==="__proto__"?Object.defineProperty(t,e,n):t[e]=n.value}function De(t){if(typeof t!="object")return t;var e=0,n,r,s,i=Object.prototype.toString.call(t);if(i==="[object Object]"?s=Object.create(t.__proto__||null):i==="[object Array]"?s=Array(t.length):i==="[object Set]"?(s=new Set,t.forEach(function(o){s.add(De(o))})):i==="[object Map]"?(s=new Map,t.forEach(function(o,a){s.set(De(a),De(o))})):i==="[object Date]"?s=new Date(+t):i==="[object RegExp]"?s=new RegExp(t.source,t.flags):i==="[object DataView]"?s=new t.constructor(De(t.buffer)):i==="[object ArrayBuffer]"?s=t.slice(0):i.slice(-6)==="Array]"&&(s=new t.constructor(t)),s){for(r=Object.getOwnPropertySymbols(t);e<r.length;e++)_g(s,r[e],Object.getOwnPropertyDescriptor(t,r[e]));for(e=0,r=Object.getOwnPropertyNames(t);e<r.length;e++)Object.hasOwnProperty.call(s,n=r[e])&&s[n]===t[n]||_g(s,n,Object.getOwnPropertyDescriptor(t,n))}return s||t}const Jl=Symbol("vee-validate-form"),_D=Symbol("vee-validate-field-instance"),Wa=Symbol("Default empty value"),yD=typeof window<"u";function Uu(t){return Et(t)&&!!t.__locatorRef}function un(t){return!!t&&Et(t.parse)&&t.__type==="VVTypedSchema"}function Ka(t){return!!t&&Et(t.validate)}function Do(t){return t==="checkbox"||t==="radio"}function vD(t){return ss(t)||Array.isArray(t)}function ED(t){return Array.isArray(t)?t.length===0:ss(t)&&Object.keys(t).length===0}function Zl(t){return/^\[.+\]$/i.test(t)}function wD(t){return LE(t)&&t.multiple}function LE(t){return t.tagName==="SELECT"}function TD(t,e){const n=![!1,null,void 0,0].includes(e.multiple)&&!Number.isNaN(e.multiple);return t==="select"&&"multiple"in e&&n}function ID(t,e){return!TD(t,e)&&e.type!=="file"&&!Do(e.type)}function UE(t){return Ld(t)&&t.target&&"submit"in t.target}function Ld(t){return t?!!(typeof Event<"u"&&Et(Event)&&t instanceof Event||t&&t.srcElement):!1}function yg(t,e){return e in t&&t[e]!==Wa}function Ft(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var n,r,s;if(Array.isArray(t)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(!Ft(t[r],e[r]))return!1;return!0}if(t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;for(r of t.entries())if(!Ft(r[1],e.get(r[0])))return!1;return!0}if(vg(t)&&vg(e))return!(t.size!==e.size||t.name!==e.name||t.lastModified!==e.lastModified||t.type!==e.type);if(t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(r of t.entries())if(!e.has(r[0]))return!1;return!0}if(ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(n=t.length,n!=e.length)return!1;for(r=n;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();for(s=Object.keys(t),n=s.length,r=n;r--!==0;){var i=s[r];if(!Ft(t[i],e[i]))return!1}return!0}return t!==t&&e!==e}function vg(t){return yD?t instanceof File:!1}function Ud(t){return Zl(t)?t.replace(/\[|\]/gi,""):t}function Wt(t,e,n){return t?Zl(e)?t[Ud(e)]:(e||"").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((s,i)=>vD(s)&&i in s?s[i]:n,t):n}function rr(t,e,n){if(Zl(e)){t[Ud(e)]=n;return}const r=e.split(/\.|\[(\d+)\]/).filter(Boolean);let s=t;for(let i=0;i<r.length;i++){if(i===r.length-1){s[r[i]]=n;return}(!(r[i]in s)||xE(s[r[i]]))&&(s[r[i]]=Md(r[i+1])?[]:{}),s=s[r[i]]}}function Mc(t,e){if(Array.isArray(t)&&Md(e)){t.splice(Number(e),1);return}ss(t)&&delete t[e]}function Eg(t,e){if(Zl(e)){delete t[Ud(e)];return}const n=e.split(/\.|\[(\d+)\]/).filter(Boolean);let r=t;for(let i=0;i<n.length;i++){if(i===n.length-1){Mc(r,n[i]);break}if(!(n[i]in r)||xE(r[n[i]]))break;r=r[n[i]]}const s=n.map((i,o)=>Wt(t,n.slice(0,o).join(".")));for(let i=s.length-1;i>=0;i--)if(ED(s[i])){if(i===0){Mc(t,n[0]);continue}Mc(s[i-1],n[i-1])}}function Yt(t){return Object.keys(t)}function FE(t,e=void 0){const n=ll();return(n==null?void 0:n.provides[t])||sn(t,e)}function wg(t,e,n){if(Array.isArray(t)){const r=[...t],s=r.findIndex(i=>Ft(i,e));return s>=0?r.splice(s,1):r.push(e),r}return Ft(t,e)?n:e}function Tg(t,e=0){let n=null,r=[];return function(...s){return n&&clearTimeout(n),n=setTimeout(()=>{const i=t(...s);r.forEach(o=>o(i)),r=[]},e),new Promise(i=>r.push(i))}}function bD(t,e){return ss(e)&&e.number?dD(t):t}function Fu(t,e){let n;return async function(...s){const i=t(...s);n=i;const o=await i;return i!==n?o:(n=void 0,e(o,s))}}function $u(t){return Array.isArray(t)?t:t?[t]:[]}function Zo(t,e){const n={};for(const r in t)e.includes(r)||(n[r]=t[r]);return n}function AD(t){let e=null,n=[];return function(...r){const s=Qt(()=>{if(e!==s)return;const i=t(...r);n.forEach(o=>o(i)),n=[],e=null});return e=s,new Promise(i=>n.push(i))}}function Fd(t,e,n){return e.slots.default?typeof t=="string"||!t?e.slots.default(n()):{default:()=>{var r,s;return(s=(r=e.slots).default)===null||s===void 0?void 0:s.call(r,n())}}:e.slots.default}function Lc(t){if($E(t))return t._value}function $E(t){return"_value"in t}function RD(t){return t.type==="number"||t.type==="range"?Number.isNaN(t.valueAsNumber)?t.value:t.valueAsNumber:t.value}function Ga(t){if(!Ld(t))return t;const e=t.target;if(Do(e.type)&&$E(e))return Lc(e);if(e.type==="file"&&e.files){const n=Array.from(e.files);return e.multiple?n:n[0]}if(wD(e))return Array.from(e.options).filter(n=>n.selected&&!n.disabled).map(Lc);if(LE(e)){const n=Array.from(e.options).find(r=>r.selected);return n?Lc(n):e.value}return RD(e)}function BE(t){const e={};return Object.defineProperty(e,"_$$isNormalized",{value:!0,writable:!1,enumerable:!1,configurable:!1}),t?ss(t)&&t._$$isNormalized?t:ss(t)?Object.keys(t).reduce((n,r)=>{const s=SD(t[r]);return t[r]!==!1&&(n[r]=Ig(s)),n},e):typeof t!="string"?e:t.split("|").reduce((n,r)=>{const s=PD(r);return s.name&&(n[s.name]=Ig(s.params)),n},e):e}function SD(t){return t===!0?[]:Array.isArray(t)||ss(t)?t:[t]}function Ig(t){const e=n=>typeof n=="string"&&n[0]==="@"?CD(n.slice(1)):n;return Array.isArray(t)?t.map(e):t instanceof RegExp?[t]:Object.keys(t).reduce((n,r)=>(n[r]=e(t[r]),n),{})}const PD=t=>{let e=[];const n=t.split(":")[0];return t.includes(":")&&(e=t.split(":").slice(1).join(":").split(",")),{name:n,params:e}};function CD(t){const e=n=>Wt(n,t)||n[t];return e.__locatorRef=t,e}function kD(t){return Array.isArray(t)?t.filter(Uu):Yt(t).filter(e=>Uu(t[e])).map(e=>t[e])}const OD={generateMessage:({field:t})=>`${t} is not valid.`,bails:!0,validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0};let Bu=Object.assign({},OD);const qr=()=>Bu,VD=t=>{Bu=Object.assign(Object.assign({},Bu),t)},ND=VD;async function jE(t,e,n={}){const r=n==null?void 0:n.bails,s={name:(n==null?void 0:n.name)||"{field}",rules:e,label:n==null?void 0:n.label,bails:r??!0,formData:(n==null?void 0:n.values)||{}},o=(await DD(s,t)).errors;return{errors:o,valid:!o.length}}async function DD(t,e){if(un(t.rules)||Ka(t.rules))return MD(e,t.rules);if(Et(t.rules)||Array.isArray(t.rules)){const o={field:t.label||t.name,name:t.name,label:t.label,form:t.formData,value:e},a=Array.isArray(t.rules)?t.rules:[t.rules],l=a.length,c=[];for(let u=0;u<l;u++){const h=a[u],d=await h(e,o);if(!(typeof d!="string"&&!Array.isArray(d)&&d)){if(Array.isArray(d))c.push(...d);else{const v=typeof d=="string"?d:HE(o);c.push(v)}if(t.bails)return{errors:c}}}return{errors:c}}const n=Object.assign(Object.assign({},t),{rules:BE(t.rules)}),r=[],s=Object.keys(n.rules),i=s.length;for(let o=0;o<i;o++){const a=s[o],l=await LD(n,e,{name:a,params:n.rules[a]});if(l.error&&(r.push(l.error),t.bails))return{errors:r}}return{errors:r}}function xD(t){return!!t&&t.name==="ValidationError"}function qE(t){return{__type:"VVTypedSchema",async parse(n){var r;try{return{output:await t.validate(n,{abortEarly:!1}),errors:[]}}catch(s){if(!xD(s))throw s;if(!(!((r=s.inner)===null||r===void 0)&&r.length)&&s.errors.length)return{errors:[{path:s.path,errors:s.errors}]};const i=s.inner.reduce((o,a)=>{const l=a.path||"";return o[l]||(o[l]={errors:[],path:l}),o[l].errors.push(...a.errors),o},{});return{errors:Object.values(i)}}}}}async function MD(t,e){const r=await(un(e)?e:qE(e)).parse(t),s=[];for(const i of r.errors)i.errors.length&&s.push(...i.errors);return{errors:s}}async function LD(t,e,n){const r=gD(n.name);if(!r)throw new Error(`No such validator '${n.name}' exists.`);const s=UD(n.params,t.formData),i={field:t.label||t.name,name:t.name,label:t.label,value:e,form:t.formData,rule:Object.assign(Object.assign({},n),{params:s})},o=await r(e,s,i);return typeof o=="string"?{error:o}:{error:o?void 0:HE(i)}}function HE(t){const e=qr().generateMessage;return e?e(t):"Field is invalid"}function UD(t,e){const n=r=>Uu(r)?r(e):r;return Array.isArray(t)?t.map(n):Object.keys(t).reduce((r,s)=>(r[s]=n(t[s]),r),{})}async function FD(t,e){const r=await(un(t)?t:qE(t)).parse(De(e)),s={},i={};for(const o of r.errors){const a=o.errors,l=(o.path||"").replace(/\["(\d+)"\]/g,(c,u)=>`[${u}]`);s[l]={valid:!a.length,errors:a},a.length&&(i[l]=a[0])}return{valid:!r.errors.length,results:s,errors:i,values:r.value}}async function $D(t,e,n){const s=Yt(t).map(async c=>{var u,h,d;const f=(u=n==null?void 0:n.names)===null||u===void 0?void 0:u[c],v=await jE(Wt(e,c),t[c],{name:(f==null?void 0:f.name)||c,label:f==null?void 0:f.label,values:e,bails:(d=(h=n==null?void 0:n.bailsMap)===null||h===void 0?void 0:h[c])!==null&&d!==void 0?d:!0});return Object.assign(Object.assign({},v),{path:c})});let i=!0;const o=await Promise.all(s),a={},l={};for(const c of o)a[c.path]={valid:c.valid,errors:c.errors},c.valid||(i=!1,l[c.path]=c.errors[0]);return{valid:i,results:a,errors:l}}let bg=0;function BD(t,e){const{value:n,initialValue:r,setInitialValue:s}=jD(t,e.modelValue,e.form);if(!e.form){let l=function(f){var v;"value"in f&&(n.value=f.value),"errors"in f&&u(f.errors),"touched"in f&&(d.touched=(v=f.touched)!==null&&v!==void 0?v:d.touched),"initialValue"in f&&s(f.initialValue)};const{errors:c,setErrors:u}=zD(),h=bg>=Number.MAX_SAFE_INTEGER?0:++bg,d=HD(n,r,c,e.schema);return{id:h,path:t,value:n,initialValue:r,meta:d,flags:{pendingUnmount:{[h]:!1},pendingReset:!1},errors:c,setState:l}}const i=e.form.createPathState(t,{bails:e.bails,label:e.label,type:e.type,validate:e.validate,schema:e.schema}),o=ye(()=>i.errors);function a(l){var c,u,h;"value"in l&&(n.value=l.value),"errors"in l&&((c=e.form)===null||c===void 0||c.setFieldError(Re(t),l.errors)),"touched"in l&&((u=e.form)===null||u===void 0||u.setFieldTouched(Re(t),(h=l.touched)!==null&&h!==void 0?h:!1)),"initialValue"in l&&s(l.initialValue)}return{id:Array.isArray(i.id)?i.id[i.id.length-1]:i.id,path:t,value:n,errors:o,meta:i,initialValue:r,flags:i.__flags,setState:a}}function jD(t,e,n){const r=Mt(Re(e));function s(){return n?Wt(n.initialValues.value,Re(t),Re(r)):Re(r)}function i(c){if(!n){r.value=c;return}n.setFieldInitialValue(Re(t),c,!0)}const o=ye(s);if(!n)return{value:Mt(s()),initialValue:o,setInitialValue:i};const a=qD(e,n,o,t);return n.stageInitialValue(Re(t),a,!0),{value:ye({get(){return Wt(n.values,Re(t))},set(c){n.setFieldValue(Re(t),c,!1)}}),initialValue:o,setInitialValue:i}}function qD(t,e,n,r){return Ke(t)?Re(t):t!==void 0?t:Wt(e.values,Re(r),Re(n))}function HD(t,e,n,r){var s,i;const o=(i=(s=r==null?void 0:r.describe)===null||s===void 0?void 0:s.call(r).required)!==null&&i!==void 0?i:!1,a=Kn({touched:!1,pending:!1,valid:!0,required:o,validated:!!Re(n).length,initialValue:ye(()=>Re(e)),dirty:ye(()=>!Ft(Re(t),Re(e)))});return rn(n,l=>{a.valid=!l.length},{immediate:!0,flush:"sync"}),a}function zD(){const t=Mt([]);return{errors:t,setErrors:e=>{t.value=$u(e)}}}function WD(t,e,n){return Do(n==null?void 0:n.type)?GD(t,e,n):zE(t,e,n)}function zE(t,e,n){const{initialValue:r,validateOnMount:s,bails:i,type:o,checkedValue:a,label:l,validateOnValueUpdate:c,uncheckedValue:u,controlled:h,keepValueOnUnmount:d,syncVModel:f,form:v}=KD(n),T=h?FE(Jl):void 0,y=v||T,S=ye(()=>wi(Ce(t))),k=ye(()=>{if(Ce(y==null?void 0:y.schema))return;const ee=Re(e);return Ka(ee)||un(ee)||Et(ee)||Array.isArray(ee)?ee:BE(ee)}),{id:O,value:$,initialValue:X,meta:M,setState:le,errors:G,flags:Q}=BD(S,{modelValue:r,form:y,bails:i,label:l,type:o,validate:k.value?Ue:void 0,schema:un(e)?e:void 0}),ie=ye(()=>G.value[0]);f&&QD({value:$,prop:f,handleChange:H,shouldValidate:()=>c&&!Q.pendingReset});const Me=(Y,ee=!1)=>{M.touched=!0,ee&&Le()};async function Ge(Y){var ee,w;if(y!=null&&y.validateSchema){const{results:V}=await y.validateSchema(Y);return(ee=V[Ce(S)])!==null&&ee!==void 0?ee:{valid:!0,errors:[]}}return k.value?jE($.value,k.value,{name:Ce(S),label:Ce(l),values:(w=y==null?void 0:y.values)!==null&&w!==void 0?w:{},bails:i}):{valid:!0,errors:[]}}const Le=Fu(async()=>(M.pending=!0,M.validated=!0,Ge("validated-only")),Y=>(Q.pendingUnmount[et.id]||(le({errors:Y.errors}),M.pending=!1,M.valid=Y.valid),Y)),Ze=Fu(async()=>Ge("silent"),Y=>(M.valid=Y.valid,Y));function Ue(Y){return(Y==null?void 0:Y.mode)==="silent"?Ze():Le()}function H(Y,ee=!0){const w=Ga(Y);$t(w,ee)}ah(()=>{if(s)return Le();(!y||!y.validateSchema)&&Ze()});function pe(Y){M.touched=Y}function ge(Y){var ee;const w=Y&&"value"in Y?Y.value:X.value;le({value:De(w),initialValue:De(w),touched:(ee=Y==null?void 0:Y.touched)!==null&&ee!==void 0?ee:!1,errors:(Y==null?void 0:Y.errors)||[]}),M.pending=!1,M.validated=!1,Ze()}const lt=ll();function $t(Y,ee=!0){$.value=lt&&f?bD(Y,lt.props.modelModifiers):Y,(ee?Le:Ze)()}function Nt(Y){le({errors:Array.isArray(Y)?Y:[Y]})}const mt=ye({get(){return $.value},set(Y){$t(Y,c)}}),et={id:O,name:S,label:l,value:mt,meta:M,errors:G,errorMessage:ie,type:o,checkedValue:a,uncheckedValue:u,bails:i,keepValueOnUnmount:d,resetField:ge,handleReset:()=>ge(),validate:Ue,handleChange:H,handleBlur:Me,setState:le,setTouched:pe,setErrors:Nt,setValue:$t};if(Ss(_D,et),Ke(e)&&typeof Re(e)!="function"&&rn(e,(Y,ee)=>{Ft(Y,ee)||(M.validated?Le():Ze())},{deep:!0}),!y)return et;const yn=ye(()=>{const Y=k.value;return!Y||Et(Y)||Ka(Y)||un(Y)||Array.isArray(Y)?{}:Object.keys(Y).reduce((ee,w)=>{const V=kD(Y[w]).map(L=>L.__locatorRef).reduce((L,z)=>{const me=Wt(y.values,z)||y.values[z];return me!==void 0&&(L[z]=me),L},{});return Object.assign(ee,V),ee},{})});return rn(yn,(Y,ee)=>{if(!Object.keys(Y).length)return;!Ft(Y,ee)&&(M.validated?Le():Ze())}),pm(()=>{var Y;const ee=(Y=Ce(et.keepValueOnUnmount))!==null&&Y!==void 0?Y:Ce(y.keepValuesOnUnmount),w=Ce(S);if(ee||!y||Q.pendingUnmount[et.id]){y==null||y.removePathState(w,O);return}Q.pendingUnmount[et.id]=!0;const V=y.getPathState(w);if(Array.isArray(V==null?void 0:V.id)&&(V!=null&&V.multiple)?V!=null&&V.id.includes(et.id):(V==null?void 0:V.id)===et.id){if(V!=null&&V.multiple&&Array.isArray(V.value)){const z=V.value.findIndex(me=>Ft(me,Ce(et.checkedValue)));if(z>-1){const me=[...V.value];me.splice(z,1),y.setFieldValue(w,me)}Array.isArray(V.id)&&V.id.splice(V.id.indexOf(et.id),1)}else y.unsetPathValue(Ce(S));y.removePathState(w,O)}}),et}function KD(t){const e=()=>({initialValue:void 0,validateOnMount:!1,bails:!0,label:void 0,validateOnValueUpdate:!0,keepValueOnUnmount:void 0,syncVModel:!1,controlled:!0}),n=!!(t!=null&&t.syncVModel),r=typeof(t==null?void 0:t.syncVModel)=="string"?t.syncVModel:(t==null?void 0:t.modelPropName)||"modelValue",s=n&&!("initialValue"in(t||{}))?ju(ll(),r):t==null?void 0:t.initialValue;if(!t)return Object.assign(Object.assign({},e()),{initialValue:s});const i="valueProp"in t?t.valueProp:t.checkedValue,o="standalone"in t?!t.standalone:t.controlled,a=(t==null?void 0:t.modelPropName)||(t==null?void 0:t.syncVModel)||!1;return Object.assign(Object.assign(Object.assign({},e()),t||{}),{initialValue:s,controlled:o??!0,checkedValue:i,syncVModel:a})}function GD(t,e,n){const r=n!=null&&n.standalone?void 0:FE(Jl),s=n==null?void 0:n.checkedValue,i=n==null?void 0:n.uncheckedValue;function o(a){const l=a.handleChange,c=ye(()=>{const h=Ce(a.value),d=Ce(s);return Array.isArray(h)?h.findIndex(f=>Ft(f,d))>=0:Ft(d,h)});function u(h,d=!0){var f,v;if(c.value===((f=h==null?void 0:h.target)===null||f===void 0?void 0:f.checked)){d&&a.validate();return}const T=Ce(t),y=r==null?void 0:r.getPathState(T),S=Ga(h);let k=(v=Ce(s))!==null&&v!==void 0?v:S;r&&(y!=null&&y.multiple)&&y.type==="checkbox"?k=wg(Wt(r.values,T)||[],k,void 0):(n==null?void 0:n.type)==="checkbox"&&(k=wg(Ce(a.value),k,Ce(i))),l(k,d)}return Object.assign(Object.assign({},a),{checked:c,checkedValue:s,uncheckedValue:i,handleChange:u})}return o(zE(t,e,n))}function QD({prop:t,value:e,handleChange:n,shouldValidate:r}){const s=ll();if(!s||!t)return;const i=typeof t=="string"?t:"modelValue",o=`update:${i}`;i in s.props&&(rn(e,a=>{Ft(a,ju(s,i))||s.emit(o,a)}),rn(()=>ju(s,i),a=>{if(a===Wa&&e.value===void 0)return;const l=a===Wa?void 0:a;Ft(l,e.value)||n(l,r())}))}function ju(t,e){if(t)return t.props[e]}const YD=ao({name:"Field",inheritAttrs:!1,props:{as:{type:[String,Object],default:void 0},name:{type:String,required:!0},rules:{type:[Object,String,Function],default:void 0},validateOnMount:{type:Boolean,default:!1},validateOnBlur:{type:Boolean,default:void 0},validateOnChange:{type:Boolean,default:void 0},validateOnInput:{type:Boolean,default:void 0},validateOnModelUpdate:{type:Boolean,default:void 0},bails:{type:Boolean,default:()=>qr().bails},label:{type:String,default:void 0},uncheckedValue:{type:null,default:void 0},modelValue:{type:null,default:Wa},modelModifiers:{type:null,default:()=>({})},"onUpdate:modelValue":{type:null,default:void 0},standalone:{type:Boolean,default:!1},keepValue:{type:Boolean,default:void 0}},setup(t,e){const n=Dr(t,"rules"),r=Dr(t,"name"),s=Dr(t,"label"),i=Dr(t,"uncheckedValue"),o=Dr(t,"keepValue"),{errors:a,value:l,errorMessage:c,validate:u,handleChange:h,handleBlur:d,setTouched:f,resetField:v,handleReset:T,meta:y,checked:S,setErrors:k}=WD(r,n,{validateOnMount:t.validateOnMount,bails:t.bails,standalone:t.standalone,type:e.attrs.type,initialValue:JD(t,e),checkedValue:e.attrs.value,uncheckedValue:i,label:s,validateOnValueUpdate:t.validateOnModelUpdate,keepValueOnUnmount:o,syncVModel:!0}),O=function(Q,ie=!0){h(Q,ie)},$=ye(()=>{const{validateOnInput:G,validateOnChange:Q,validateOnBlur:ie,validateOnModelUpdate:Me}=XD(t);function Ge(H){d(H,ie),Et(e.attrs.onBlur)&&e.attrs.onBlur(H)}function Le(H){O(H,G),Et(e.attrs.onInput)&&e.attrs.onInput(H)}function Ze(H){O(H,Q),Et(e.attrs.onChange)&&e.attrs.onChange(H)}const Ue={name:t.name,onBlur:Ge,onInput:Le,onChange:Ze};return Ue["onUpdate:modelValue"]=H=>O(H,Me),Ue}),X=ye(()=>{const G=Object.assign({},$.value);Do(e.attrs.type)&&S&&(G.checked=S.value);const Q=Ag(t,e);return ID(Q,e.attrs)&&(G.value=l.value),G}),M=ye(()=>Object.assign(Object.assign({},$.value),{modelValue:l.value}));function le(){return{field:X.value,componentField:M.value,value:l.value,meta:y,errors:a.value,errorMessage:c.value,validate:u,resetField:v,handleChange:O,handleInput:G=>O(G,!1),handleReset:T,handleBlur:$.value.onBlur,setTouched:f,setErrors:k}}return e.expose({value:l,meta:y,errors:a,errorMessage:c,setErrors:k,setTouched:f,reset:v,validate:u,handleChange:h}),()=>{const G=sh(Ag(t,e)),Q=Fd(G,e,le);return G?Ls(G,Object.assign(Object.assign({},e.attrs),X.value),Q):Q}}});function Ag(t,e){let n=t.as||"";return!t.as&&!e.slots.default&&(n="input"),n}function XD(t){var e,n,r,s;const{validateOnInput:i,validateOnChange:o,validateOnBlur:a,validateOnModelUpdate:l}=qr();return{validateOnInput:(e=t.validateOnInput)!==null&&e!==void 0?e:i,validateOnChange:(n=t.validateOnChange)!==null&&n!==void 0?n:o,validateOnBlur:(r=t.validateOnBlur)!==null&&r!==void 0?r:a,validateOnModelUpdate:(s=t.validateOnModelUpdate)!==null&&s!==void 0?s:l}}function JD(t,e){return Do(e.attrs.type)?yg(t,"modelValue")?t.modelValue:void 0:yg(t,"modelValue")?t.modelValue:e.attrs.value}const ZD=YD;let ex=0;const ea=["bails","fieldsCount","id","multiple","type","validate"];function WE(t){const e=Object.assign({},Ce((t==null?void 0:t.initialValues)||{})),n=Re(t==null?void 0:t.validationSchema);return n&&un(n)&&Et(n.cast)?De(n.cast(e)||{}):De(e)}function tx(t){var e;const n=ex++;let r=0;const s=Mt(!1),i=Mt(!1),o=Mt(0),a=[],l=Kn(WE(t)),c=Mt([]),u=Mt({}),h=Mt({}),d=AD(()=>{h.value=c.value.reduce((m,_)=>(m[wi(Ce(_.path))]=_,m),{})});function f(m,_){const b=H(m);if(!b){typeof m=="string"&&(u.value[wi(m)]=$u(_));return}if(typeof m=="string"){const B=wi(m);u.value[B]&&delete u.value[B]}b.errors=$u(_),b.valid=!b.errors.length}function v(m){Yt(m).forEach(_=>{f(_,m[_])})}t!=null&&t.initialErrors&&v(t.initialErrors);const T=ye(()=>{const m=c.value.reduce((_,b)=>(b.errors.length&&(_[b.path]=b.errors),_),{});return Object.assign(Object.assign({},u.value),m)}),y=ye(()=>Yt(T.value).reduce((m,_)=>{const b=T.value[_];return b!=null&&b.length&&(m[_]=b[0]),m},{})),S=ye(()=>c.value.reduce((m,_)=>(m[_.path]={name:_.path||"",label:_.label||""},m),{})),k=ye(()=>c.value.reduce((m,_)=>{var b;return m[_.path]=(b=_.bails)!==null&&b!==void 0?b:!0,m},{})),O=Object.assign({},(t==null?void 0:t.initialErrors)||{}),$=(e=t==null?void 0:t.keepValuesOnUnmount)!==null&&e!==void 0?e:!1,{initialValues:X,originalInitialValues:M,setInitialValues:le}=rx(c,l,t),G=nx(c,l,M,y),Q=ye(()=>c.value.reduce((m,_)=>{const b=Wt(l,_.path);return rr(m,_.path,b),m},{})),ie=t==null?void 0:t.validationSchema;function Me(m,_){var b,B;const re=ye(()=>Wt(X.value,Ce(m))),J=h.value[Ce(m)],we=(_==null?void 0:_.type)==="checkbox"||(_==null?void 0:_.type)==="radio";if(J&&we){J.multiple=!0;const an=r++;return Array.isArray(J.id)?J.id.push(an):J.id=[J.id,an],J.fieldsCount++,J.__flags.pendingUnmount[an]=!1,J}const Ie=ye(()=>Wt(l,Ce(m))),Pe=Ce(m),ct=ge.findIndex(an=>an===Pe);ct!==-1&&ge.splice(ct,1);const Be=ye(()=>{var an,ii,ec,$d,tc,nc;return un(ie)?(ec=(ii=(an=ie).describe)===null||ii===void 0?void 0:ii.call(an,Ce(m)).required)!==null&&ec!==void 0?ec:!1:un(_==null?void 0:_.schema)&&(nc=(tc=($d=_==null?void 0:_.schema).describe)===null||tc===void 0?void 0:tc.call($d).required)!==null&&nc!==void 0?nc:!1}),bt=r++,Bt=Kn({id:bt,path:m,touched:!1,pending:!1,valid:!0,validated:!!(!((b=O[Pe])===null||b===void 0)&&b.length),required:Be,initialValue:re,errors:em([]),bails:(B=_==null?void 0:_.bails)!==null&&B!==void 0?B:!1,label:_==null?void 0:_.label,type:(_==null?void 0:_.type)||"default",value:Ie,multiple:!1,__flags:{pendingUnmount:{[bt]:!1},pendingReset:!1},fieldsCount:1,validate:_==null?void 0:_.validate,dirty:ye(()=>!Ft(Re(Ie),Re(re)))});return c.value.push(Bt),h.value[Pe]=Bt,d(),y.value[Pe]&&!O[Pe]&&Qt(()=>{U(Pe,{mode:"silent"})}),Ke(m)&&rn(m,an=>{d();const ii=De(Ie.value);h.value[an]=Bt,Qt(()=>{rr(l,an,ii)})}),Bt}const Ge=Tg(W,5),Le=Tg(W,5),Ze=Fu(async m=>await(m==="silent"?Ge():Le()),(m,[_])=>{const b=Yt(ee.errorBag.value),re=[...new Set([...Yt(m.results),...c.value.map(J=>J.path),...b])].sort().reduce((J,we)=>{var Ie;const Pe=we,ct=H(Pe)||pe(Pe),Be=((Ie=m.results[Pe])===null||Ie===void 0?void 0:Ie.errors)||[],bt=Ce(ct==null?void 0:ct.path)||Pe,Bt=sx({errors:Be,valid:!Be.length},J.results[bt]);return J.results[bt]=Bt,Bt.valid||(J.errors[bt]=Bt.errors[0]),ct&&u.value[bt]&&delete u.value[bt],ct?(ct.valid=Bt.valid,_==="silent"||_==="validated-only"&&!ct.validated||f(ct,Bt.errors),J):(f(bt,Be),J)},{valid:m.valid,results:{},errors:{}});return m.values&&(re.values=m.values),Yt(re.results).forEach(J=>{var we;const Ie=H(J);Ie&&_!=="silent"&&(_==="validated-only"&&!Ie.validated||f(Ie,(we=re.results[J])===null||we===void 0?void 0:we.errors))}),re});function Ue(m){c.value.forEach(m)}function H(m){const _=typeof m=="string"?wi(m):m;return typeof _=="string"?h.value[_]:_}function pe(m){return c.value.filter(b=>m.startsWith(b.path)).reduce((b,B)=>b?B.path.length>b.path.length?B:b:B,void 0)}let ge=[],lt;function $t(m){return ge.push(m),lt||(lt=Qt(()=>{[...ge].sort().reverse().forEach(b=>{Eg(l,b)}),ge=[],lt=null})),lt}function Nt(m){return function(b,B){return function(J){return J instanceof Event&&(J.preventDefault(),J.stopPropagation()),Ue(we=>we.touched=!0),s.value=!0,o.value++,D().then(we=>{const Ie=De(l);if(we.valid&&typeof b=="function"){const Pe=De(Q.value);let ct=m?Pe:Ie;return we.values&&(ct=we.values),b(ct,{evt:J,controlledValues:Pe,setErrors:v,setFieldError:f,setTouched:E,setFieldTouched:me,setValues:L,setFieldValue:w,resetForm:I,resetField:R})}!we.valid&&typeof B=="function"&&B({values:Ie,evt:J,errors:we.errors,results:we.results})}).then(we=>(s.value=!1,we),we=>{throw s.value=!1,we})}}}const et=Nt(!1);et.withControlled=Nt(!0);function yn(m,_){const b=c.value.findIndex(re=>re.path===m&&(Array.isArray(re.id)?re.id.includes(_):re.id===_)),B=c.value[b];if(!(b===-1||!B)){if(Qt(()=>{U(m,{mode:"silent",warn:!1})}),B.multiple&&B.fieldsCount&&B.fieldsCount--,Array.isArray(B.id)){const re=B.id.indexOf(_);re>=0&&B.id.splice(re,1),delete B.__flags.pendingUnmount[_]}(!B.multiple||B.fieldsCount<=0)&&(c.value.splice(b,1),x(m),d(),delete h.value[m])}}function Y(m){Yt(h.value).forEach(_=>{_.startsWith(m)&&delete h.value[_]}),c.value=c.value.filter(_=>!_.path.startsWith(m)),Qt(()=>{d()})}const ee={formId:n,values:l,controlledValues:Q,errorBag:T,errors:y,schema:ie,submitCount:o,meta:G,isSubmitting:s,isValidating:i,fieldArrays:a,keepValuesOnUnmount:$,validateSchema:Re(ie)?Ze:void 0,validate:D,setFieldError:f,validateField:U,setFieldValue:w,setValues:L,setErrors:v,setFieldTouched:me,setTouched:E,resetForm:I,resetField:R,handleSubmit:et,useFieldModel:oe,defineInputBinds:ve,defineComponentBinds:Oe,defineField:Z,stageInitialValue:F,unsetInitialValue:x,setFieldInitialValue:C,createPathState:Me,getPathState:H,unsetPathValue:$t,removePathState:yn,initialValues:X,getAllPathStates:()=>c.value,destroyPath:Y,isFieldTouched:Fe,isFieldDirty:p,isFieldValid:g};function w(m,_,b=!0){const B=De(_),re=typeof m=="string"?m:m.path;H(re)||Me(re),rr(l,re,B),b&&U(re)}function V(m,_=!0){Yt(l).forEach(b=>{delete l[b]}),Yt(m).forEach(b=>{w(b,m[b],!1)}),_&&D()}function L(m,_=!0){oo(l,m),a.forEach(b=>b&&b.reset()),_&&D()}function z(m,_){const b=H(Ce(m))||Me(m);return ye({get(){return b.value},set(B){var re;const J=Ce(m);w(J,B,(re=Ce(_))!==null&&re!==void 0?re:!1)}})}function me(m,_){const b=H(m);b&&(b.touched=_)}function Fe(m){const _=H(m);return _?_.touched:c.value.filter(b=>b.path.startsWith(m)).some(b=>b.touched)}function p(m){const _=H(m);return _?_.dirty:c.value.filter(b=>b.path.startsWith(m)).some(b=>b.dirty)}function g(m){const _=H(m);return _?_.valid:c.value.filter(b=>b.path.startsWith(m)).every(b=>b.valid)}function E(m){if(typeof m=="boolean"){Ue(_=>{_.touched=m});return}Yt(m).forEach(_=>{me(_,!!m[_])})}function R(m,_){var b;const B=_&&"value"in _?_.value:Wt(X.value,m),re=H(m);re&&(re.__flags.pendingReset=!0),C(m,De(B),!0),w(m,B,!1),me(m,(b=_==null?void 0:_.touched)!==null&&b!==void 0?b:!1),f(m,(_==null?void 0:_.errors)||[]),Qt(()=>{re&&(re.__flags.pendingReset=!1)})}function I(m,_){let b=De(m!=null&&m.values?m.values:M.value);b=_!=null&&_.force?b:oo(M.value,b),b=un(ie)&&Et(ie.cast)?ie.cast(b):b,le(b),Ue(B=>{var re;B.__flags.pendingReset=!0,B.validated=!1,B.touched=((re=m==null?void 0:m.touched)===null||re===void 0?void 0:re[B.path])||!1,w(B.path,Wt(b,B.path),!1),f(B.path,void 0)}),_!=null&&_.force?V(b,!1):L(b,!1),v((m==null?void 0:m.errors)||{}),o.value=(m==null?void 0:m.submitCount)||0,Qt(()=>{D({mode:"silent"}),Ue(B=>{B.__flags.pendingReset=!1})})}async function D(m){const _=(m==null?void 0:m.mode)||"force";if(_==="force"&&Ue(J=>J.validated=!0),ee.validateSchema)return ee.validateSchema(_);i.value=!0;const b=await Promise.all(c.value.map(J=>J.validate?J.validate(m).then(we=>({key:J.path,valid:we.valid,errors:we.errors})):Promise.resolve({key:J.path,valid:!0,errors:[]})));i.value=!1;const B={},re={};for(const J of b)B[J.key]={valid:J.valid,errors:J.errors},J.errors.length&&(re[J.key]=J.errors[0]);return{valid:b.every(J=>J.valid),results:B,errors:re}}async function U(m,_){var b;const B=H(m);if(B&&(_==null?void 0:_.mode)!=="silent"&&(B.validated=!0),ie){const{results:re}=await Ze((_==null?void 0:_.mode)||"validated-only");return re[m]||{errors:[],valid:!0}}return B!=null&&B.validate?B.validate(_):(!B&&(b=_==null?void 0:_.warn),Promise.resolve({errors:[],valid:!0}))}function x(m){Eg(X.value,m)}function F(m,_,b=!1){C(m,_),rr(l,m,_),b&&!(t!=null&&t.initialValues)&&rr(M.value,m,De(_))}function C(m,_,b=!1){rr(X.value,m,De(_)),b&&rr(M.value,m,De(_))}async function W(){const m=Re(ie);if(!m)return{valid:!0,results:{},errors:{}};i.value=!0;const _=Ka(m)||un(m)?await FD(m,l):await $D(m,l,{names:S.value,bailsMap:k.value});return i.value=!1,_}const ne=et((m,{evt:_})=>{UE(_)&&_.target.submit()});ah(()=>{if(t!=null&&t.initialErrors&&v(t.initialErrors),t!=null&&t.initialTouched&&E(t.initialTouched),t!=null&&t.validateOnMount){D();return}ee.validateSchema&&ee.validateSchema("silent")}),Ke(ie)&&rn(ie,()=>{var m;(m=ee.validateSchema)===null||m===void 0||m.call(ee,"validated-only")}),Ss(Jl,ee);function Z(m,_){const b=Et(_)||_==null?void 0:_.label,B=H(Ce(m))||Me(m,{label:b}),re=()=>Et(_)?_(Zo(B,ea)):_||{};function J(){var Be;B.touched=!0,((Be=re().validateOnBlur)!==null&&Be!==void 0?Be:qr().validateOnBlur)&&U(B.path)}function we(){var Be;((Be=re().validateOnInput)!==null&&Be!==void 0?Be:qr().validateOnInput)&&Qt(()=>{U(B.path)})}function Ie(){var Be;((Be=re().validateOnChange)!==null&&Be!==void 0?Be:qr().validateOnChange)&&Qt(()=>{U(B.path)})}const Pe=ye(()=>{const Be={onChange:Ie,onInput:we,onBlur:J};return Et(_)?Object.assign(Object.assign({},Be),_(Zo(B,ea)).props||{}):_!=null&&_.props?Object.assign(Object.assign({},Be),_.props(Zo(B,ea))):Be});return[z(m,()=>{var Be,bt,Bt;return(Bt=(Be=re().validateOnModelUpdate)!==null&&Be!==void 0?Be:(bt=qr())===null||bt===void 0?void 0:bt.validateOnModelUpdate)!==null&&Bt!==void 0?Bt:!0}),Pe]}function oe(m){return Array.isArray(m)?m.map(_=>z(_,!0)):z(m)}function ve(m,_){const[b,B]=Z(m,_);function re(){B.value.onBlur()}function J(Ie){const Pe=Ga(Ie);w(Ce(m),Pe,!1),B.value.onInput()}function we(Ie){const Pe=Ga(Ie);w(Ce(m),Pe,!1),B.value.onChange()}return ye(()=>Object.assign(Object.assign({},B.value),{onBlur:re,onInput:J,onChange:we,value:b.value}))}function Oe(m,_){const[b,B]=Z(m,_),re=H(Ce(m));function J(we){b.value=we}return ye(()=>{const we=Et(_)?_(Zo(re,ea)):_||{};return Object.assign({[we.model||"modelValue"]:b.value,[`onUpdate:${we.model||"modelValue"}`]:J},B.value)})}return Object.assign(Object.assign({},ee),{values:Ju(l),handleReset:()=>I(),submitForm:ne})}function nx(t,e,n,r){const s={touched:"some",pending:"some",valid:"every"},i=ye(()=>!Ft(e,Re(n)));function o(){const l=t.value;return Yt(s).reduce((c,u)=>{const h=s[u];return c[u]=l[h](d=>d[u]),c},{})}const a=Kn(o());return t0(()=>{const l=o();a.touched=l.touched,a.valid=l.valid,a.pending=l.pending}),ye(()=>Object.assign(Object.assign({initialValues:Re(n)},a),{valid:a.valid&&!Yt(r.value).length,dirty:i.value}))}function rx(t,e,n){const r=WE(n),s=Mt(r),i=Mt(De(r));function o(a,l=!1){s.value=oo(De(s.value)||{},De(a)),i.value=oo(De(i.value)||{},De(a)),l&&t.value.forEach(c=>{if(c.touched)return;const h=Wt(s.value,c.path);rr(e,c.path,De(h))})}return{initialValues:s,originalInitialValues:i,setInitialValues:o}}function sx(t,e){return e?{valid:t.valid&&e.valid,errors:[...t.errors,...e.errors]}:t}const ix=ao({name:"Form",inheritAttrs:!1,props:{as:{type:null,default:"form"},validationSchema:{type:Object,default:void 0},initialValues:{type:Object,default:void 0},initialErrors:{type:Object,default:void 0},initialTouched:{type:Object,default:void 0},validateOnMount:{type:Boolean,default:!1},onSubmit:{type:Function,default:void 0},onInvalidSubmit:{type:Function,default:void 0},keepValues:{type:Boolean,default:!1}},setup(t,e){const n=Dr(t,"validationSchema"),r=Dr(t,"keepValues"),{errors:s,errorBag:i,values:o,meta:a,isSubmitting:l,isValidating:c,submitCount:u,controlledValues:h,validate:d,validateField:f,handleReset:v,resetForm:T,handleSubmit:y,setErrors:S,setFieldError:k,setFieldValue:O,setValues:$,setFieldTouched:X,setTouched:M,resetField:le}=tx({validationSchema:n.value?n:void 0,initialValues:t.initialValues,initialErrors:t.initialErrors,initialTouched:t.initialTouched,validateOnMount:t.validateOnMount,keepValuesOnUnmount:r}),G=y((H,{evt:pe})=>{UE(pe)&&pe.target.submit()},t.onInvalidSubmit),Q=t.onSubmit?y(t.onSubmit,t.onInvalidSubmit):G;function ie(H){Ld(H)&&H.preventDefault(),v(),typeof e.attrs.onReset=="function"&&e.attrs.onReset()}function Me(H,pe){return y(typeof H=="function"&&!pe?H:pe,t.onInvalidSubmit)(H)}function Ge(){return De(o)}function Le(){return De(a.value)}function Ze(){return De(s.value)}function Ue(){return{meta:a.value,errors:s.value,errorBag:i.value,values:o,isSubmitting:l.value,isValidating:c.value,submitCount:u.value,controlledValues:h.value,validate:d,validateField:f,handleSubmit:Me,handleReset:v,submitForm:G,setErrors:S,setFieldError:k,setFieldValue:O,setValues:$,setFieldTouched:X,setTouched:M,resetForm:T,resetField:le,getValues:Ge,getMeta:Le,getErrors:Ze}}return e.expose({setFieldError:k,setErrors:S,setFieldValue:O,setValues:$,setFieldTouched:X,setTouched:M,resetForm:T,validate:d,validateField:f,resetField:le,getValues:Ge,getMeta:Le,getErrors:Ze,values:o,meta:a,errors:s}),function(){const pe=t.as==="form"?t.as:t.as?sh(t.as):null,ge=Fd(pe,e,Ue);return pe?Ls(pe,Object.assign(Object.assign(Object.assign({},pe==="form"?{novalidate:!0}:{}),e.attrs),{onSubmit:Q,onReset:ie}),ge):ge}}}),ox=ix,ax=ao({name:"ErrorMessage",props:{as:{type:String,default:void 0},name:{type:String,required:!0}},setup(t,e){const n=sn(Jl,void 0),r=ye(()=>n==null?void 0:n.errors.value[t.name]);function s(){return{message:r.value}}return()=>{if(!r.value)return;const i=t.as?sh(t.as):t.as,o=Fd(i,e,s),a=Object.assign({role:"alert"},e.attrs);return!i&&(Array.isArray(o)||!o)&&(o!=null&&o.length)?o:(Array.isArray(o)||!o)&&!(o!=null&&o.length)?Ls(i||"span",a,r.value):Ls(i,a,o)}}}),lx=ax;/**
  * vee-validate v4.12.6
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */const ta={en:/^[A-Z\s]*$/i,cs:/^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,da:/^[A-ZÆØÅ\s]*$/i,de:/^[A-ZÄÖÜß\s]*$/i,es:/^[A-ZÁÉÍÑÓÚÜ\s]*$/i,fr:/^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,it:/^[A-Z\xC0-\xFF\s]*$/i,lt:/^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,nl:/^[A-ZÉËÏÓÖÜ\s]*$/i,hu:/^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,pl:/^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,pt:/^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,ru:/^[А-ЯЁ\s]*$/i,kz:/^[А-ЯЁ\u04D8\u04B0\u0406\u04A2\u0492\u04AE\u049A\u04E8\u04BA\s]*$/i,sk:/^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,sr:/^[A-ZČĆŽŠĐ\s]*$/i,sv:/^[A-ZÅÄÖ\s]*$/i,tr:/^[A-ZÇĞİıÖŞÜ\s]*$/i,uk:/^[А-ЩЬЮЯЄІЇҐ\s]*$/i,ar:/^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,az:/^[A-ZÇƏĞİıÖŞÜ\s]*$/i,ug:/^[A-Zچۋېرتيۇڭوپھسداەىقكلزشغۈبنمژفگخجۆئ\s]*$/i},cx=t=>{if(t)return Array.isArray(t)?t[0]:t.locale};function xo(t,e){return Array.isArray(t)?t[0]:t[e]}function Cr(t){return!!(t==null||t===""||Array.isArray(t)&&t.length===0)}const KE=(t,e)=>{if(Cr(t))return!0;const n=cx(e);if(Array.isArray(t))return t.every(s=>KE(s,{locale:n}));const r=String(t);return n?(ta[n]||ta.en).test(r):Object.keys(ta).some(s=>ta[s].test(r))},ux=(t,e)=>{const n=xo(e,"target");return String(t)===String(n)},Rg=/^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,hx=t=>Cr(t)?!0:Array.isArray(t)?t.every(e=>Rg.test(String(e))):Rg.test(String(t)),GE=(t,e)=>{if(Cr(t))return!0;const n=xo(e,"length");return Array.isArray(t)?t.every(r=>GE(r,{length:n})):[...String(t)].length<=Number(n)},QE=(t,e)=>{if(Cr(t))return!0;const n=xo(e,"max");return Array.isArray(t)?t.length>0&&t.every(r=>QE(r,{max:n})):Number(t)<=Number(n)},YE=(t,e)=>{if(Cr(t))return!0;const n=xo(e,"length");return Array.isArray(t)?t.every(r=>YE(r,{length:n})):[...String(t)].length>=Number(n)},XE=(t,e)=>{if(Cr(t))return!0;const n=xo(e,"min");return Array.isArray(t)?t.length>0&&t.every(r=>XE(r,{min:n})):Number(t)>=Number(n)},JE=(t,e)=>Cr(t)?!0:Array.isArray(t)?t.every(n=>JE(n,e)):Array.from(e).some(n=>n==t),Sg=(t,e)=>Cr(t)?!0:!JE(t,e);function dx(t){return t==null}function fx(t){return Array.isArray(t)&&t.length===0}const Pg=t=>dx(t)||fx(t)||t===!1?!1:!!String(t).trim().length,px={install(t){t.component("VeeForm",ox),t.component("VeeField",ZD),t.component("ErrorMessage",lx),ln("required",Pg),ln("tos",Pg),ln("min",YE),ln("max",GE),ln("email",hx),ln("passwords_mismatch",ux),ln("max_value",QE),ln("min_value",XE),ln("alpha_spaces",KE),ln("excluded",Sg),ln("country_excluded",Sg),ND({generateMessage:e=>{const n={required:`The field ${e.field} is required.`,min:`The field ${e.field} is too short.`,max:`The field ${e.field} is too long.`,email:`The field ${e.field} must be a valid email.`,passwords_mismatch:"The passwords do not match.",min_value:`The field ${e.field} is too low.`,max_value:`The field ${e.field} is too high.`,alpha_spaces:`The field ${e.field} may only contain alphabetic characters and spaces.`,excluded:`You are not allowed to use this value for the field ${e.field}.`,country_excluded:"Due to restrictions, we do not accept users from this location.",tos:"You must accept the Terms of Service."};return n[e.rule.name]?n[e.rule.name]:`The field ${e.field} is invalid.`},validateOnBlur:!0,validateOnChange:!0,validateOnInput:!1,validateOnModelUpdate:!0})}};let Vr;rs.onAuthStateChanged(()=>{Vr||(Vr=mT(Z1),Vr.use(ET()),Vr.use(DE),Vr.use(px),Vr.directive("icon",XO),Vr.mount("#app"))});
