(function(){const h=document.createElement("link").relList;if(h&&h.supports&&h.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))d(o);new MutationObserver(o=>{for(const f of o)if(f.type==="childList")for(const v of f.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function x(o){const f={};return o.integrity&&(f.integrity=o.integrity),o.referrerPolicy&&(f.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?f.credentials="include":o.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(o){if(o.ep)return;o.ep=!0;const f=x(o);fetch(o.href,f)}})();function rf(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tr={exports:{}},Mn={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function Fp(){if(Qh)return Mn;Qh=1;var r=Symbol.for("react.transitional.element"),h=Symbol.for("react.fragment");function x(d,o,f){var v=null;if(f!==void 0&&(v=""+f),o.key!==void 0&&(v=""+o.key),"key"in o){f={};for(var k in o)k!=="key"&&(f[k]=o[k])}else f=o;return o=f.ref,{$$typeof:r,type:d,key:v,ref:o!==void 0?o:null,props:f}}return Mn.Fragment=h,Mn.jsx=x,Mn.jsxs=x,Mn}var Zh;function Wp(){return Zh||(Zh=1,Tr.exports=Fp()),Tr.exports}var t=Wp(),kr={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vh;function $p(){if(Vh)return W;Vh=1;var r=Symbol.for("react.transitional.element"),h=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),v=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),A=Symbol.for("react.activity"),_=Symbol.iterator;function G(g){return g===null||typeof g!="object"?null:(g=_&&g[_]||g["@@iterator"],typeof g=="function"?g:null)}var V={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,Q={};function Y(g,D,B){this.props=g,this.context=D,this.refs=Q,this.updater=B||V}Y.prototype.isReactComponent={},Y.prototype.setState=function(g,D){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,D,"setState")},Y.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function X(){}X.prototype=Y.prototype;function $(g,D,B){this.props=g,this.context=D,this.refs=Q,this.updater=B||V}var Se=$.prototype=new X;Se.constructor=$,J(Se,Y.prototype),Se.isPureReactComponent=!0;var Ee=Array.isArray;function He(){}var ee={H:null,A:null,T:null,S:null},Be=Object.prototype.hasOwnProperty;function Te(g,D,B){var L=B.ref;return{$$typeof:r,type:g,key:D,ref:L!==void 0?L:null,props:B}}function al(g,D){return Te(g.type,D,g.props)}function nl(g){return typeof g=="object"&&g!==null&&g.$$typeof===r}function Fe(g){var D={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(B){return D[B]})}var Mt=/\/+/g;function Hl(g,D){return typeof g=="object"&&g!==null&&g.key!=null?Fe(""+g.key):D.toString(36)}function Tl(g){switch(g.status){case"fulfilled":return g.value;case"rejected":throw g.reason;default:switch(typeof g.status=="string"?g.then(He,He):(g.status="pending",g.then(function(D){g.status==="pending"&&(g.status="fulfilled",g.value=D)},function(D){g.status==="pending"&&(g.status="rejected",g.reason=D)})),g.status){case"fulfilled":return g.value;case"rejected":throw g.reason}}throw g}function M(g,D,B,L,I){var te=typeof g;(te==="undefined"||te==="boolean")&&(g=null);var ue=!1;if(g===null)ue=!0;else switch(te){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(g.$$typeof){case r:case h:ue=!0;break;case C:return ue=g._init,M(ue(g._payload),D,B,L,I)}}if(ue)return I=I(g),ue=L===""?"."+Hl(g,0):L,Ee(I)?(B="",ue!=null&&(B=ue.replace(Mt,"$&/")+"/"),M(I,D,B,"",function(Ba){return Ba})):I!=null&&(nl(I)&&(I=al(I,B+(I.key==null||g&&g.key===I.key?"":(""+I.key).replace(Mt,"$&/")+"/")+ue)),D.push(I)),1;ue=0;var Ke=L===""?".":L+":";if(Ee(g))for(var Ae=0;Ae<g.length;Ae++)L=g[Ae],te=Ke+Hl(L,Ae),ue+=M(L,D,B,te,I);else if(Ae=G(g),typeof Ae=="function")for(g=Ae.call(g),Ae=0;!(L=g.next()).done;)L=L.value,te=Ke+Hl(L,Ae++),ue+=M(L,D,B,te,I);else if(te==="object"){if(typeof g.then=="function")return M(Tl(g),D,B,L,I);throw D=String(g),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return ue}function H(g,D,B){if(g==null)return g;var L=[],I=0;return M(g,L,"","",function(te){return D.call(B,te,I++)}),L}function F(g){if(g._status===-1){var D=g._result;D=D(),D.then(function(B){(g._status===0||g._status===-1)&&(g._status=1,g._result=B)},function(B){(g._status===0||g._status===-1)&&(g._status=2,g._result=B)}),g._status===-1&&(g._status=0,g._result=D)}if(g._status===1)return g._result.default;throw g._result}var xe=typeof reportError=="function"?reportError:function(g){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof g=="object"&&g!==null&&typeof g.message=="string"?String(g.message):String(g),error:g});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",g);return}console.error(g)},ge={map:H,forEach:function(g,D,B){H(g,function(){D.apply(this,arguments)},B)},count:function(g){var D=0;return H(g,function(){D++}),D},toArray:function(g){return H(g,function(D){return D})||[]},only:function(g){if(!nl(g))throw Error("React.Children.only expected to receive a single React element child.");return g}};return W.Activity=A,W.Children=ge,W.Component=Y,W.Fragment=x,W.Profiler=o,W.PureComponent=$,W.StrictMode=d,W.Suspense=y,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,W.__COMPILER_RUNTIME={__proto__:null,c:function(g){return ee.H.useMemoCache(g)}},W.cache=function(g){return function(){return g.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(g,D,B){if(g==null)throw Error("The argument must be a React element, but you passed "+g+".");var L=J({},g.props),I=g.key;if(D!=null)for(te in D.key!==void 0&&(I=""+D.key),D)!Be.call(D,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&D.ref===void 0||(L[te]=D[te]);var te=arguments.length-2;if(te===1)L.children=B;else if(1<te){for(var ue=Array(te),Ke=0;Ke<te;Ke++)ue[Ke]=arguments[Ke+2];L.children=ue}return Te(g.type,I,L)},W.createContext=function(g){return g={$$typeof:v,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null},g.Provider=g,g.Consumer={$$typeof:f,_context:g},g},W.createElement=function(g,D,B){var L,I={},te=null;if(D!=null)for(L in D.key!==void 0&&(te=""+D.key),D)Be.call(D,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(I[L]=D[L]);var ue=arguments.length-2;if(ue===1)I.children=B;else if(1<ue){for(var Ke=Array(ue),Ae=0;Ae<ue;Ae++)Ke[Ae]=arguments[Ae+2];I.children=Ke}if(g&&g.defaultProps)for(L in ue=g.defaultProps,ue)I[L]===void 0&&(I[L]=ue[L]);return Te(g,te,I)},W.createRef=function(){return{current:null}},W.forwardRef=function(g){return{$$typeof:k,render:g}},W.isValidElement=nl,W.lazy=function(g){return{$$typeof:C,_payload:{_status:-1,_result:g},_init:F}},W.memo=function(g,D){return{$$typeof:m,type:g,compare:D===void 0?null:D}},W.startTransition=function(g){var D=ee.T,B={};ee.T=B;try{var L=g(),I=ee.S;I!==null&&I(B,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(He,xe)}catch(te){xe(te)}finally{D!==null&&B.types!==null&&(D.types=B.types),ee.T=D}},W.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},W.use=function(g){return ee.H.use(g)},W.useActionState=function(g,D,B){return ee.H.useActionState(g,D,B)},W.useCallback=function(g,D){return ee.H.useCallback(g,D)},W.useContext=function(g){return ee.H.useContext(g)},W.useDebugValue=function(){},W.useDeferredValue=function(g,D){return ee.H.useDeferredValue(g,D)},W.useEffect=function(g,D){return ee.H.useEffect(g,D)},W.useEffectEvent=function(g){return ee.H.useEffectEvent(g)},W.useId=function(){return ee.H.useId()},W.useImperativeHandle=function(g,D,B){return ee.H.useImperativeHandle(g,D,B)},W.useInsertionEffect=function(g,D){return ee.H.useInsertionEffect(g,D)},W.useLayoutEffect=function(g,D){return ee.H.useLayoutEffect(g,D)},W.useMemo=function(g,D){return ee.H.useMemo(g,D)},W.useOptimistic=function(g,D){return ee.H.useOptimistic(g,D)},W.useReducer=function(g,D,B){return ee.H.useReducer(g,D,B)},W.useRef=function(g){return ee.H.useRef(g)},W.useState=function(g){return ee.H.useState(g)},W.useSyncExternalStore=function(g,D,B){return ee.H.useSyncExternalStore(g,D,B)},W.useTransition=function(){return ee.H.useTransition()},W.version="19.2.0",W}var Kh;function Hr(){return Kh||(Kh=1,kr.exports=$p()),kr.exports}var T=Hr();const Ip=rf(T);var zr={exports:{}},Rn={},Ar={exports:{}},wr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function Pp(){return Jh||(Jh=1,(function(r){function h(M,H){var F=M.length;M.push(H);e:for(;0<F;){var xe=F-1>>>1,ge=M[xe];if(0<o(ge,H))M[xe]=H,M[F]=ge,F=xe;else break e}}function x(M){return M.length===0?null:M[0]}function d(M){if(M.length===0)return null;var H=M[0],F=M.pop();if(F!==H){M[0]=F;e:for(var xe=0,ge=M.length,g=ge>>>1;xe<g;){var D=2*(xe+1)-1,B=M[D],L=D+1,I=M[L];if(0>o(B,F))L<ge&&0>o(I,B)?(M[xe]=I,M[L]=F,xe=L):(M[xe]=B,M[D]=F,xe=D);else if(L<ge&&0>o(I,F))M[xe]=I,M[L]=F,xe=L;else break e}}return H}function o(M,H){var F=M.sortIndex-H.sortIndex;return F!==0?F:M.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;r.unstable_now=function(){return f.now()}}else{var v=Date,k=v.now();r.unstable_now=function(){return v.now()-k}}var y=[],m=[],C=1,A=null,_=3,G=!1,V=!1,J=!1,Q=!1,Y=typeof setTimeout=="function"?setTimeout:null,X=typeof clearTimeout=="function"?clearTimeout:null,$=typeof setImmediate<"u"?setImmediate:null;function Se(M){for(var H=x(m);H!==null;){if(H.callback===null)d(m);else if(H.startTime<=M)d(m),H.sortIndex=H.expirationTime,h(y,H);else break;H=x(m)}}function Ee(M){if(J=!1,Se(M),!V)if(x(y)!==null)V=!0,He||(He=!0,Fe());else{var H=x(m);H!==null&&Tl(Ee,H.startTime-M)}}var He=!1,ee=-1,Be=5,Te=-1;function al(){return Q?!0:!(r.unstable_now()-Te<Be)}function nl(){if(Q=!1,He){var M=r.unstable_now();Te=M;var H=!0;try{e:{V=!1,J&&(J=!1,X(ee),ee=-1),G=!0;var F=_;try{l:{for(Se(M),A=x(y);A!==null&&!(A.expirationTime>M&&al());){var xe=A.callback;if(typeof xe=="function"){A.callback=null,_=A.priorityLevel;var ge=xe(A.expirationTime<=M);if(M=r.unstable_now(),typeof ge=="function"){A.callback=ge,Se(M),H=!0;break l}A===x(y)&&d(y),Se(M)}else d(y);A=x(y)}if(A!==null)H=!0;else{var g=x(m);g!==null&&Tl(Ee,g.startTime-M),H=!1}}break e}finally{A=null,_=F,G=!1}H=void 0}}finally{H?Fe():He=!1}}}var Fe;if(typeof $=="function")Fe=function(){$(nl)};else if(typeof MessageChannel<"u"){var Mt=new MessageChannel,Hl=Mt.port2;Mt.port1.onmessage=nl,Fe=function(){Hl.postMessage(null)}}else Fe=function(){Y(nl,0)};function Tl(M,H){ee=Y(function(){M(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(M){M.callback=null},r.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Be=0<M?Math.floor(1e3/M):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_next=function(M){switch(_){case 1:case 2:case 3:var H=3;break;default:H=_}var F=_;_=H;try{return M()}finally{_=F}},r.unstable_requestPaint=function(){Q=!0},r.unstable_runWithPriority=function(M,H){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var F=_;_=M;try{return H()}finally{_=F}},r.unstable_scheduleCallback=function(M,H,F){var xe=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?xe+F:xe):F=xe,M){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=F+ge,M={id:C++,callback:H,priorityLevel:M,startTime:F,expirationTime:ge,sortIndex:-1},F>xe?(M.sortIndex=F,h(m,M),x(y)===null&&M===x(m)&&(J?(X(ee),ee=-1):J=!0,Tl(Ee,F-xe))):(M.sortIndex=ge,h(y,M),V||G||(V=!0,He||(He=!0,Fe()))),M},r.unstable_shouldYield=al,r.unstable_wrapCallback=function(M){var H=_;return function(){var F=_;_=H;try{return M.apply(this,arguments)}finally{_=F}}}})(wr)),wr}var Fh;function em(){return Fh||(Fh=1,Ar.exports=Pp()),Ar.exports}var Mr={exports:{}},Ve={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh;function lm(){if(Wh)return Ve;Wh=1;var r=Hr();function h(y){var m="https://react.dev/errors/"+y;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var C=2;C<arguments.length;C++)m+="&args[]="+encodeURIComponent(arguments[C])}return"Minified React error #"+y+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function x(){}var d={d:{f:x,r:function(){throw Error(h(522))},D:x,C:x,L:x,m:x,X:x,S:x,M:x},p:0,findDOMNode:null},o=Symbol.for("react.portal");function f(y,m,C){var A=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:A==null?null:""+A,children:y,containerInfo:m,implementation:C}}var v=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(y,m){if(y==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ve.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Ve.createPortal=function(y,m){var C=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(h(299));return f(y,m,null,C)},Ve.flushSync=function(y){var m=v.T,C=d.p;try{if(v.T=null,d.p=2,y)return y()}finally{v.T=m,d.p=C,d.d.f()}},Ve.preconnect=function(y,m){typeof y=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,d.d.C(y,m))},Ve.prefetchDNS=function(y){typeof y=="string"&&d.d.D(y)},Ve.preinit=function(y,m){if(typeof y=="string"&&m&&typeof m.as=="string"){var C=m.as,A=k(C,m.crossOrigin),_=typeof m.integrity=="string"?m.integrity:void 0,G=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;C==="style"?d.d.S(y,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:A,integrity:_,fetchPriority:G}):C==="script"&&d.d.X(y,{crossOrigin:A,integrity:_,fetchPriority:G,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ve.preinitModule=function(y,m){if(typeof y=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var C=k(m.as,m.crossOrigin);d.d.M(y,{crossOrigin:C,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&d.d.M(y)},Ve.preload=function(y,m){if(typeof y=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var C=m.as,A=k(C,m.crossOrigin);d.d.L(y,C,{crossOrigin:A,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ve.preloadModule=function(y,m){if(typeof y=="string")if(m){var C=k(m.as,m.crossOrigin);d.d.m(y,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:C,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else d.d.m(y)},Ve.requestFormReset=function(y){d.d.r(y)},Ve.unstable_batchedUpdates=function(y,m){return y(m)},Ve.useFormState=function(y,m,C){return v.H.useFormState(y,m,C)},Ve.useFormStatus=function(){return v.H.useHostTransitionStatus()},Ve.version="19.2.0",Ve}var $h;function tm(){if($h)return Mr.exports;$h=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(h){console.error(h)}}return r(),Mr.exports=lm(),Mr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ih;function am(){if(Ih)return Rn;Ih=1;var r=em(),h=Hr(),x=tm();function d(e){var l="https://react.dev/errors/"+e;if(1<arguments.length){l+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)l+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+l+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var l=e,a=e;if(e.alternate)for(;l.return;)l=l.return;else{e=l;do l=e,(l.flags&4098)!==0&&(a=l.return),e=l.return;while(e)}return l.tag===3?a:null}function v(e){if(e.tag===13){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function k(e){if(e.tag===31){var l=e.memoizedState;if(l===null&&(e=e.alternate,e!==null&&(l=e.memoizedState)),l!==null)return l.dehydrated}return null}function y(e){if(f(e)!==e)throw Error(d(188))}function m(e){var l=e.alternate;if(!l){if(l=f(e),l===null)throw Error(d(188));return l!==e?null:e}for(var a=e,n=l;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return y(i),e;if(s===n)return y(i),l;s=s.sibling}throw Error(d(188))}if(a.return!==n.return)a=i,n=s;else{for(var c=!1,u=i.child;u;){if(u===a){c=!0,a=i,n=s;break}if(u===n){c=!0,n=i,a=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===a){c=!0,a=s,n=i;break}if(u===n){c=!0,n=s,a=i;break}u=u.sibling}if(!c)throw Error(d(189))}}if(a.alternate!==n)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:l}function C(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e;for(e=e.child;e!==null;){if(l=C(e),l!==null)return l;e=e.sibling}return null}var A=Object.assign,_=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),X=Symbol.for("react.consumer"),$=Symbol.for("react.context"),Se=Symbol.for("react.forward_ref"),Ee=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),Be=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),al=Symbol.for("react.memo_cache_sentinel"),nl=Symbol.iterator;function Fe(e){return e===null||typeof e!="object"?null:(e=nl&&e[nl]||e["@@iterator"],typeof e=="function"?e:null)}var Mt=Symbol.for("react.client.reference");function Hl(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Mt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case Y:return"Profiler";case Q:return"StrictMode";case Ee:return"Suspense";case He:return"SuspenseList";case Te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case $:return e.displayName||"Context";case X:return(e._context.displayName||"Context")+".Consumer";case Se:var l=e.render;return e=e.displayName,e||(e=l.displayName||l.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return l=e.displayName||null,l!==null?l:Hl(e.type)||"Memo";case Be:l=e._payload,e=e._init;try{return Hl(e(l))}catch{}}return null}var Tl=Array.isArray,M=h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=x.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F={pending:!1,data:null,method:null,action:null},xe=[],ge=-1;function g(e){return{current:e}}function D(e){0>ge||(e.current=xe[ge],xe[ge]=null,ge--)}function B(e,l){ge++,xe[ge]=e.current,e.current=l}var L=g(null),I=g(null),te=g(null),ue=g(null);function Ke(e,l){switch(B(te,l),B(I,e),B(L,null),l.nodeType){case 9:case 11:e=(e=l.documentElement)&&(e=e.namespaceURI)?fh(e):0;break;default:if(e=l.tagName,l=l.namespaceURI)l=fh(l),e=xh(l,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(L),B(L,e)}function Ae(){D(L),D(I),D(te)}function Ba(e){e.memoizedState!==null&&B(ue,e);var l=L.current,a=xh(l,e.type);l!==a&&(B(I,e),B(L,a))}function Un(e){I.current===e&&(D(L),D(I)),ue.current===e&&(D(ue),kn._currentValue=F)}var rs,Yr;function Rt(e){if(rs===void 0)try{throw Error()}catch(a){var l=a.stack.trim().match(/\n( *(at )?)/);rs=l&&l[1]||"",Yr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rs+e+Yr}var ds=!1;function os(e,l){if(!e||ds)return"";ds=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(l){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(z){var E=z}Reflect.construct(e,[],O)}else{try{O.call()}catch(z){E=z}e.call(O.prototype)}}else{try{throw Error()}catch(z){E=z}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(z){if(z&&E&&typeof z.stack=="string")return[z.stack,E.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),c=s[0],u=s[1];if(c&&u){var p=c.split(`
`),N=u.split(`
`);for(i=n=0;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;for(;i<N.length&&!N[i].includes("DetermineComponentFrameRoot");)i++;if(n===p.length||i===N.length)for(n=p.length-1,i=N.length-1;1<=n&&0<=i&&p[n]!==N[i];)i--;for(;1<=n&&0<=i;n--,i--)if(p[n]!==N[i]){if(n!==1||i!==1)do if(n--,i--,0>i||p[n]!==N[i]){var w=`
`+p[n].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),w}while(1<=n&&0<=i);break}}}finally{ds=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Rt(a):""}function Tf(e,l){switch(e.tag){case 26:case 27:case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return e.child!==l&&l!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return os(e.type,!1);case 11:return os(e.type.render,!1);case 1:return os(e.type,!0);case 31:return Rt("Activity");default:return""}}function Xr(e){try{var l="",a=null;do l+=Tf(e,a),a=e,e=e.return;while(e);return l}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var us=Object.prototype.hasOwnProperty,hs=r.unstable_scheduleCallback,fs=r.unstable_cancelCallback,kf=r.unstable_shouldYield,zf=r.unstable_requestPaint,il=r.unstable_now,Af=r.unstable_getCurrentPriorityLevel,Qr=r.unstable_ImmediatePriority,Zr=r.unstable_UserBlockingPriority,Ln=r.unstable_NormalPriority,wf=r.unstable_LowPriority,Vr=r.unstable_IdlePriority,Mf=r.log,Rf=r.unstable_setDisableYieldValue,Ua=null,sl=null;function nt(e){if(typeof Mf=="function"&&Rf(e),sl&&typeof sl.setStrictMode=="function")try{sl.setStrictMode(Ua,e)}catch{}}var cl=Math.clz32?Math.clz32:_f,Of=Math.log,Df=Math.LN2;function _f(e){return e>>>=0,e===0?32:31-(Of(e)/Df|0)|0}var Gn=256,qn=262144,Yn=4194304;function Ot(e){var l=e&42;if(l!==0)return l;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Xn(e,l,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,c=e.pingedLanes;e=e.warmLanes;var u=n&134217727;return u!==0?(n=u&~s,n!==0?i=Ot(n):(c&=u,c!==0?i=Ot(c):a||(a=u&~e,a!==0&&(i=Ot(a))))):(u=n&~s,u!==0?i=Ot(u):c!==0?i=Ot(c):a||(a=n&~e,a!==0&&(i=Ot(a)))),i===0?0:l!==0&&l!==i&&(l&s)===0&&(s=i&-i,a=l&-l,s>=a||s===32&&(a&4194048)!==0)?l:i}function La(e,l){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&l)===0}function Hf(e,l){switch(e){case 1:case 2:case 4:case 8:case 64:return l+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return l+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kr(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function xs(e){for(var l=[],a=0;31>a;a++)l.push(e);return l}function Ga(e,l){e.pendingLanes|=l,l!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Bf(e,l,a,n,i,s){var c=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var u=e.entanglements,p=e.expirationTimes,N=e.hiddenUpdates;for(a=c&~a;0<a;){var w=31-cl(a),O=1<<w;u[w]=0,p[w]=-1;var E=N[w];if(E!==null)for(N[w]=null,w=0;w<E.length;w++){var z=E[w];z!==null&&(z.lane&=-536870913)}a&=~O}n!==0&&Jr(e,n,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(c&~l))}function Jr(e,l,a){e.pendingLanes|=l,e.suspendedLanes&=~l;var n=31-cl(l);e.entangledLanes|=l,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function Fr(e,l){var a=e.entangledLanes|=l;for(e=e.entanglements;a;){var n=31-cl(a),i=1<<n;i&l|e[n]&l&&(e[n]|=l),a&=~i}}function Wr(e,l){var a=l&-l;return a=(a&42)!==0?1:ps(a),(a&(e.suspendedLanes|l))!==0?0:a}function ps(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function ms(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function $r(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Bh(e.type))}function Ir(e,l){var a=H.p;try{return H.p=e,l()}finally{H.p=a}}var it=Math.random().toString(36).slice(2),qe="__reactFiber$"+it,We="__reactProps$"+it,$t="__reactContainer$"+it,js="__reactEvents$"+it,Uf="__reactListeners$"+it,Lf="__reactHandles$"+it,Pr="__reactResources$"+it,qa="__reactMarker$"+it;function gs(e){delete e[qe],delete e[We],delete e[js],delete e[Uf],delete e[Lf]}function It(e){var l=e[qe];if(l)return l;for(var a=e.parentNode;a;){if(l=a[$t]||a[qe]){if(a=l.alternate,l.child!==null||a!==null&&a.child!==null)for(e=yh(e);e!==null;){if(a=e[qe])return a;e=yh(e)}return l}e=a,a=e.parentNode}return null}function Pt(e){if(e=e[qe]||e[$t]){var l=e.tag;if(l===5||l===6||l===13||l===31||l===26||l===27||l===3)return e}return null}function Ya(e){var l=e.tag;if(l===5||l===26||l===27||l===6)return e.stateNode;throw Error(d(33))}function ea(e){var l=e[Pr];return l||(l=e[Pr]={hoistableStyles:new Map,hoistableScripts:new Map}),l}function Le(e){e[qa]=!0}var ed=new Set,ld={};function Dt(e,l){la(e,l),la(e+"Capture",l)}function la(e,l){for(ld[e]=l,e=0;e<l.length;e++)ed.add(l[e])}var Gf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),td={},ad={};function qf(e){return us.call(ad,e)?!0:us.call(td,e)?!1:Gf.test(e)?ad[e]=!0:(td[e]=!0,!1)}function Qn(e,l,a){if(qf(l))if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(l);return;case"boolean":var n=l.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(l);return}}e.setAttribute(l,""+a)}}function Zn(e,l,a){if(a===null)e.removeAttribute(l);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttribute(l,""+a)}}function Bl(e,l,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(l,a,""+n)}}function ml(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function nd(e){var l=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(l==="checkbox"||l==="radio")}function Yf(e,l,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,l);if(!e.hasOwnProperty(l)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,l,{configurable:!0,get:function(){return i.call(this)},set:function(c){a=""+c,s.call(this,c)}}),Object.defineProperty(e,l,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(c){a=""+c},stopTracking:function(){e._valueTracker=null,delete e[l]}}}}function vs(e){if(!e._valueTracker){var l=nd(e)?"checked":"value";e._valueTracker=Yf(e,l,""+e[l])}}function id(e){if(!e)return!1;var l=e._valueTracker;if(!l)return!0;var a=l.getValue(),n="";return e&&(n=nd(e)?e.checked?"true":"false":e.value),e=n,e!==a?(l.setValue(e),!0):!1}function Vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xf=/[\n"\\]/g;function jl(e){return e.replace(Xf,function(l){return"\\"+l.charCodeAt(0).toString(16)+" "})}function bs(e,l,a,n,i,s,c,u){e.name="",c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.type=c:e.removeAttribute("type"),l!=null?c==="number"?(l===0&&e.value===""||e.value!=l)&&(e.value=""+ml(l)):e.value!==""+ml(l)&&(e.value=""+ml(l)):c!=="submit"&&c!=="reset"||e.removeAttribute("value"),l!=null?ys(e,c,ml(l)):a!=null?ys(e,c,ml(a)):n!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+ml(u):e.removeAttribute("name")}function sd(e,l,a,n,i,s,c,u){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),l!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||l!=null)){vs(e);return}a=a!=null?""+ml(a):"",l=l!=null?""+ml(l):a,u||l===e.value||(e.value=l),e.defaultValue=l}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=u?e.checked:!!n,e.defaultChecked=!!n,c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.name=c),vs(e)}function ys(e,l,a){l==="number"&&Vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ta(e,l,a,n){if(e=e.options,l){l={};for(var i=0;i<a.length;i++)l["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=l.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ml(a),l=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}l!==null||e[i].disabled||(l=e[i])}l!==null&&(l.selected=!0)}}function cd(e,l,a){if(l!=null&&(l=""+ml(l),l!==e.value&&(e.value=l),a==null)){e.defaultValue!==l&&(e.defaultValue=l);return}e.defaultValue=a!=null?""+ml(a):""}function rd(e,l,a,n){if(l==null){if(n!=null){if(a!=null)throw Error(d(92));if(Tl(n)){if(1<n.length)throw Error(d(93));n=n[0]}a=n}a==null&&(a=""),l=a}a=ml(l),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),vs(e)}function aa(e,l){if(l){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=l;return}}e.textContent=l}var Qf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function dd(e,l,a){var n=l.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="":n?e.setProperty(l,a):typeof a!="number"||a===0||Qf.has(l)?l==="float"?e.cssFloat=a:e[l]=(""+a).trim():e[l]=a+"px"}function od(e,l,a){if(l!=null&&typeof l!="object")throw Error(d(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||l!=null&&l.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in l)n=l[i],l.hasOwnProperty(i)&&a[i]!==n&&dd(e,i,n)}else for(var s in l)l.hasOwnProperty(s)&&dd(e,s,l[s])}function Ss(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kn(e){return Vf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ul(){}var Ns=null;function Cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var na=null,ia=null;function ud(e){var l=Pt(e);if(l&&(e=l.stateNode)){var a=e[We]||null;e:switch(e=l.stateNode,l.type){case"input":if(bs(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),l=a.name,a.type==="radio"&&l!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+jl(""+l)+'"][type="radio"]'),l=0;l<a.length;l++){var n=a[l];if(n!==e&&n.form===e.form){var i=n[We]||null;if(!i)throw Error(d(90));bs(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(l=0;l<a.length;l++)n=a[l],n.form===e.form&&id(n)}break e;case"textarea":cd(e,a.value,a.defaultValue);break e;case"select":l=a.value,l!=null&&ta(e,!!a.multiple,l,!1)}}}var Es=!1;function hd(e,l,a){if(Es)return e(l,a);Es=!0;try{var n=e(l);return n}finally{if(Es=!1,(na!==null||ia!==null)&&(Di(),na&&(l=na,e=ia,ia=na=null,ud(l),e)))for(l=0;l<e.length;l++)ud(e[l])}}function Xa(e,l){var a=e.stateNode;if(a===null)return null;var n=a[We]||null;if(n===null)return null;a=n[l];e:switch(l){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,l,typeof a));return a}var Ll=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ts=!1;if(Ll)try{var Qa={};Object.defineProperty(Qa,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Qa,Qa),window.removeEventListener("test",Qa,Qa)}catch{Ts=!1}var st=null,ks=null,Jn=null;function fd(){if(Jn)return Jn;var e,l=ks,a=l.length,n,i="value"in st?st.value:st.textContent,s=i.length;for(e=0;e<a&&l[e]===i[e];e++);var c=a-e;for(n=1;n<=c&&l[a-n]===i[s-n];n++);return Jn=i.slice(e,1<n?1-n:void 0)}function Fn(e){var l=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&l===13&&(e=13)):e=l,e===10&&(e=13),32<=e||e===13?e:0}function Wn(){return!0}function xd(){return!1}function $e(e){function l(a,n,i,s,c){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(a=e[u],this[u]=a?a(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wn:xd,this.isPropagationStopped=xd,this}return A(l.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wn)},persist:function(){},isPersistent:Wn}),l}var _t={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$n=$e(_t),Za=A({},_t,{view:0,detail:0}),Kf=$e(Za),zs,As,Va,In=A({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ms,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Va&&(Va&&e.type==="mousemove"?(zs=e.screenX-Va.screenX,As=e.screenY-Va.screenY):As=zs=0,Va=e),zs)},movementY:function(e){return"movementY"in e?e.movementY:As}}),pd=$e(In),Jf=A({},In,{dataTransfer:0}),Ff=$e(Jf),Wf=A({},Za,{relatedTarget:0}),ws=$e(Wf),$f=A({},_t,{animationName:0,elapsedTime:0,pseudoElement:0}),If=$e($f),Pf=A({},_t,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ex=$e(Pf),lx=A({},_t,{data:0}),md=$e(lx),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ax={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(e){var l=this.nativeEvent;return l.getModifierState?l.getModifierState(e):(e=nx[e])?!!l[e]:!1}function Ms(){return ix}var sx=A({},Za,{key:function(e){if(e.key){var l=tx[e.key]||e.key;if(l!=="Unidentified")return l}return e.type==="keypress"?(e=Fn(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ax[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ms,charCode:function(e){return e.type==="keypress"?Fn(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Fn(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cx=$e(sx),rx=A({},In,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=$e(rx),dx=A({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ms}),ox=$e(dx),ux=A({},_t,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=$e(ux),fx=A({},In,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xx=$e(fx),px=A({},_t,{newState:0,oldState:0}),mx=$e(px),jx=[9,13,27,32],Rs=Ll&&"CompositionEvent"in window,Ka=null;Ll&&"documentMode"in document&&(Ka=document.documentMode);var gx=Ll&&"TextEvent"in window&&!Ka,gd=Ll&&(!Rs||Ka&&8<Ka&&11>=Ka),vd=" ",bd=!1;function yd(e,l){switch(e){case"keyup":return jx.indexOf(l.keyCode)!==-1;case"keydown":return l.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var sa=!1;function vx(e,l){switch(e){case"compositionend":return Sd(l);case"keypress":return l.which!==32?null:(bd=!0,vd);case"textInput":return e=l.data,e===vd&&bd?null:e;default:return null}}function bx(e,l){if(sa)return e==="compositionend"||!Rs&&yd(e,l)?(e=fd(),Jn=ks=st=null,sa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(l.ctrlKey||l.altKey||l.metaKey)||l.ctrlKey&&l.altKey){if(l.char&&1<l.char.length)return l.char;if(l.which)return String.fromCharCode(l.which)}return null;case"compositionend":return gd&&l.locale!=="ko"?null:l.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nd(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l==="input"?!!yx[e.type]:l==="textarea"}function Cd(e,l,a,n){na?ia?ia.push(n):ia=[n]:na=n,l=qi(l,"onChange"),0<l.length&&(a=new $n("onChange","change",null,a,n),e.push({event:a,listeners:l}))}var Ja=null,Fa=null;function Sx(e){ch(e,0)}function Pn(e){var l=Ya(e);if(id(l))return e}function Ed(e,l){if(e==="change")return l}var Td=!1;if(Ll){var Os;if(Ll){var Ds="oninput"in document;if(!Ds){var kd=document.createElement("div");kd.setAttribute("oninput","return;"),Ds=typeof kd.oninput=="function"}Os=Ds}else Os=!1;Td=Os&&(!document.documentMode||9<document.documentMode)}function zd(){Ja&&(Ja.detachEvent("onpropertychange",Ad),Fa=Ja=null)}function Ad(e){if(e.propertyName==="value"&&Pn(Fa)){var l=[];Cd(l,Fa,e,Cs(e)),hd(Sx,l)}}function Nx(e,l,a){e==="focusin"?(zd(),Ja=l,Fa=a,Ja.attachEvent("onpropertychange",Ad)):e==="focusout"&&zd()}function Cx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pn(Fa)}function Ex(e,l){if(e==="click")return Pn(l)}function Tx(e,l){if(e==="input"||e==="change")return Pn(l)}function kx(e,l){return e===l&&(e!==0||1/e===1/l)||e!==e&&l!==l}var rl=typeof Object.is=="function"?Object.is:kx;function Wa(e,l){if(rl(e,l))return!0;if(typeof e!="object"||e===null||typeof l!="object"||l===null)return!1;var a=Object.keys(e),n=Object.keys(l);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!us.call(l,i)||!rl(e[i],l[i]))return!1}return!0}function wd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Md(e,l){var a=wd(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=l&&n>=l)return{node:a,offset:l-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wd(a)}}function Rd(e,l){return e&&l?e===l?!0:e&&e.nodeType===3?!1:l&&l.nodeType===3?Rd(e,l.parentNode):"contains"in e?e.contains(l):e.compareDocumentPosition?!!(e.compareDocumentPosition(l)&16):!1:!1}function Od(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var l=Vn(e.document);l instanceof e.HTMLIFrameElement;){try{var a=typeof l.contentWindow.location.href=="string"}catch{a=!1}if(a)e=l.contentWindow;else break;l=Vn(e.document)}return l}function _s(e){var l=e&&e.nodeName&&e.nodeName.toLowerCase();return l&&(l==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||l==="textarea"||e.contentEditable==="true")}var zx=Ll&&"documentMode"in document&&11>=document.documentMode,ca=null,Hs=null,$a=null,Bs=!1;function Dd(e,l,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Bs||ca==null||ca!==Vn(n)||(n=ca,"selectionStart"in n&&_s(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),$a&&Wa($a,n)||($a=n,n=qi(Hs,"onSelect"),0<n.length&&(l=new $n("onSelect","select",null,l,a),e.push({event:l,listeners:n}),l.target=ca)))}function Ht(e,l){var a={};return a[e.toLowerCase()]=l.toLowerCase(),a["Webkit"+e]="webkit"+l,a["Moz"+e]="moz"+l,a}var ra={animationend:Ht("Animation","AnimationEnd"),animationiteration:Ht("Animation","AnimationIteration"),animationstart:Ht("Animation","AnimationStart"),transitionrun:Ht("Transition","TransitionRun"),transitionstart:Ht("Transition","TransitionStart"),transitioncancel:Ht("Transition","TransitionCancel"),transitionend:Ht("Transition","TransitionEnd")},Us={},_d={};Ll&&(_d=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Bt(e){if(Us[e])return Us[e];if(!ra[e])return e;var l=ra[e],a;for(a in l)if(l.hasOwnProperty(a)&&a in _d)return Us[e]=l[a];return e}var Hd=Bt("animationend"),Bd=Bt("animationiteration"),Ud=Bt("animationstart"),Ax=Bt("transitionrun"),wx=Bt("transitionstart"),Mx=Bt("transitioncancel"),Ld=Bt("transitionend"),Gd=new Map,Ls="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ls.push("scrollEnd");function kl(e,l){Gd.set(e,l),Dt(l,[e])}var ei=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var l=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(l))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},gl=[],da=0,Gs=0;function li(){for(var e=da,l=Gs=da=0;l<e;){var a=gl[l];gl[l++]=null;var n=gl[l];gl[l++]=null;var i=gl[l];gl[l++]=null;var s=gl[l];if(gl[l++]=null,n!==null&&i!==null){var c=n.pending;c===null?i.next=i:(i.next=c.next,c.next=i),n.pending=i}s!==0&&qd(a,i,s)}}function ti(e,l,a,n){gl[da++]=e,gl[da++]=l,gl[da++]=a,gl[da++]=n,Gs|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function qs(e,l,a,n){return ti(e,l,a,n),ai(e)}function Ut(e,l){return ti(e,null,null,l),ai(e)}function qd(e,l,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&l!==null&&(i=31-cl(a),e=s.hiddenUpdates,n=e[i],n===null?e[i]=[l]:n.push(l),l.lane=a|536870912),s):null}function ai(e){if(50<bn)throw bn=0,Wc=null,Error(d(185));for(var l=e.return;l!==null;)e=l,l=e.return;return e.tag===3?e.stateNode:null}var oa={};function Rx(e,l,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=l,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dl(e,l,a,n){return new Rx(e,l,a,n)}function Ys(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gl(e,l){var a=e.alternate;return a===null?(a=dl(e.tag,l,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=l,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,l=e.dependencies,a.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Yd(e,l){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=l,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,l=a.dependencies,e.dependencies=l===null?null:{lanes:l.lanes,firstContext:l.firstContext}),e}function ni(e,l,a,n,i,s){var c=0;if(n=e,typeof e=="function")Ys(e)&&(c=1);else if(typeof e=="string")c=Bp(e,a,L.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Te:return e=dl(31,a,l,i),e.elementType=Te,e.lanes=s,e;case J:return Lt(a.children,i,s,l);case Q:c=8,i|=24;break;case Y:return e=dl(12,a,l,i|2),e.elementType=Y,e.lanes=s,e;case Ee:return e=dl(13,a,l,i),e.elementType=Ee,e.lanes=s,e;case He:return e=dl(19,a,l,i),e.elementType=He,e.lanes=s,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case $:c=10;break e;case X:c=9;break e;case Se:c=11;break e;case ee:c=14;break e;case Be:c=16,n=null;break e}c=29,a=Error(d(130,e===null?"null":typeof e,"")),n=null}return l=dl(c,a,l,i),l.elementType=e,l.type=n,l.lanes=s,l}function Lt(e,l,a,n){return e=dl(7,e,n,l),e.lanes=a,e}function Xs(e,l,a){return e=dl(6,e,null,l),e.lanes=a,e}function Xd(e){var l=dl(18,null,null,0);return l.stateNode=e,l}function Qs(e,l,a){return l=dl(4,e.children!==null?e.children:[],e.key,l),l.lanes=a,l.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},l}var Qd=new WeakMap;function vl(e,l){if(typeof e=="object"&&e!==null){var a=Qd.get(e);return a!==void 0?a:(l={value:e,source:l,stack:Xr(l)},Qd.set(e,l),l)}return{value:e,source:l,stack:Xr(l)}}var ua=[],ha=0,ii=null,Ia=0,bl=[],yl=0,ct=null,wl=1,Ml="";function ql(e,l){ua[ha++]=Ia,ua[ha++]=ii,ii=e,Ia=l}function Zd(e,l,a){bl[yl++]=wl,bl[yl++]=Ml,bl[yl++]=ct,ct=e;var n=wl;e=Ml;var i=32-cl(n)-1;n&=~(1<<i),a+=1;var s=32-cl(l)+i;if(30<s){var c=i-i%5;s=(n&(1<<c)-1).toString(32),n>>=c,i-=c,wl=1<<32-cl(l)+i|a<<i|n,Ml=s+e}else wl=1<<s|a<<i|n,Ml=e}function Zs(e){e.return!==null&&(ql(e,1),Zd(e,1,0))}function Vs(e){for(;e===ii;)ii=ua[--ha],ua[ha]=null,Ia=ua[--ha],ua[ha]=null;for(;e===ct;)ct=bl[--yl],bl[yl]=null,Ml=bl[--yl],bl[yl]=null,wl=bl[--yl],bl[yl]=null}function Vd(e,l){bl[yl++]=wl,bl[yl++]=Ml,bl[yl++]=ct,wl=l.id,Ml=l.overflow,ct=e}var Ye=null,be=null,ce=!1,rt=null,Sl=!1,Ks=Error(d(519));function dt(e){var l=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Pa(vl(l,e)),Ks}function Kd(e){var l=e.stateNode,a=e.type,n=e.memoizedProps;switch(l[qe]=e,l[We]=n,a){case"dialog":ne("cancel",l),ne("close",l);break;case"iframe":case"object":case"embed":ne("load",l);break;case"video":case"audio":for(a=0;a<Sn.length;a++)ne(Sn[a],l);break;case"source":ne("error",l);break;case"img":case"image":case"link":ne("error",l),ne("load",l);break;case"details":ne("toggle",l);break;case"input":ne("invalid",l),sd(l,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":ne("invalid",l);break;case"textarea":ne("invalid",l),rd(l,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||l.textContent===""+a||n.suppressHydrationWarning===!0||uh(l.textContent,a)?(n.popover!=null&&(ne("beforetoggle",l),ne("toggle",l)),n.onScroll!=null&&ne("scroll",l),n.onScrollEnd!=null&&ne("scrollend",l),n.onClick!=null&&(l.onclick=Ul),l=!0):l=!1,l||dt(e,!0)}function Jd(e){for(Ye=e.return;Ye;)switch(Ye.tag){case 5:case 31:case 13:Sl=!1;return;case 27:case 3:Sl=!0;return;default:Ye=Ye.return}}function fa(e){if(e!==Ye)return!1;if(!ce)return Jd(e),ce=!0,!1;var l=e.tag,a;if((a=l!==3&&l!==27)&&((a=l===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||ur(e.type,e.memoizedProps)),a=!a),a&&be&&dt(e),Jd(e),l===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));be=bh(e)}else if(l===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));be=bh(e)}else l===27?(l=be,Nt(e.type)?(e=mr,mr=null,be=e):be=l):be=Ye?Cl(e.stateNode.nextSibling):null;return!0}function Gt(){be=Ye=null,ce=!1}function Js(){var e=rt;return e!==null&&(ll===null?ll=e:ll.push.apply(ll,e),rt=null),e}function Pa(e){rt===null?rt=[e]:rt.push(e)}var Fs=g(null),qt=null,Yl=null;function ot(e,l,a){B(Fs,l._currentValue),l._currentValue=a}function Xl(e){e._currentValue=Fs.current,D(Fs)}function Ws(e,l,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&l)!==l?(e.childLanes|=l,n!==null&&(n.childLanes|=l)):n!==null&&(n.childLanes&l)!==l&&(n.childLanes|=l),e===a)break;e=e.return}}function $s(e,l,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var c=i.child;s=s.firstContext;e:for(;s!==null;){var u=s;s=i;for(var p=0;p<l.length;p++)if(u.context===l[p]){s.lanes|=a,u=s.alternate,u!==null&&(u.lanes|=a),Ws(s.return,a,e),n||(c=null);break e}s=u.next}}else if(i.tag===18){if(c=i.return,c===null)throw Error(d(341));c.lanes|=a,s=c.alternate,s!==null&&(s.lanes|=a),Ws(c,a,e),c=null}else c=i.child;if(c!==null)c.return=i;else for(c=i;c!==null;){if(c===e){c=null;break}if(i=c.sibling,i!==null){i.return=c.return,c=i;break}c=c.return}i=c}}function xa(e,l,a,n){e=null;for(var i=l,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var c=i.alternate;if(c===null)throw Error(d(387));if(c=c.memoizedProps,c!==null){var u=i.type;rl(i.pendingProps.value,c.value)||(e!==null?e.push(u):e=[u])}}else if(i===ue.current){if(c=i.alternate,c===null)throw Error(d(387));c.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(kn):e=[kn])}i=i.return}e!==null&&$s(l,e,a,n),l.flags|=262144}function si(e){for(e=e.firstContext;e!==null;){if(!rl(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yt(e){qt=e,Yl=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Xe(e){return Fd(qt,e)}function ci(e,l){return qt===null&&Yt(e),Fd(e,l)}function Fd(e,l){var a=l._currentValue;if(l={context:l,memoizedValue:a,next:null},Yl===null){if(e===null)throw Error(d(308));Yl=l,e.dependencies={lanes:0,firstContext:l},e.flags|=524288}else Yl=Yl.next=l;return a}var Ox=typeof AbortController<"u"?AbortController:function(){var e=[],l=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){l.aborted=!0,e.forEach(function(a){return a()})}},Dx=r.unstable_scheduleCallback,_x=r.unstable_NormalPriority,Re={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Is(){return{controller:new Ox,data:new Map,refCount:0}}function en(e){e.refCount--,e.refCount===0&&Dx(_x,function(){e.controller.abort()})}var ln=null,Ps=0,pa=0,ma=null;function Hx(e,l){if(ln===null){var a=ln=[];Ps=0,pa=tr(),ma={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ps++,l.then(Wd,Wd),l}function Wd(){if(--Ps===0&&ln!==null){ma!==null&&(ma.status="fulfilled");var e=ln;ln=null,pa=0,ma=null;for(var l=0;l<e.length;l++)(0,e[l])()}}function Bx(e,l){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=l;for(var i=0;i<a.length;i++)(0,a[i])(l)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var $d=M.S;M.S=function(e,l){_u=il(),typeof l=="object"&&l!==null&&typeof l.then=="function"&&Hx(e,l),$d!==null&&$d(e,l)};var Xt=g(null);function ec(){var e=Xt.current;return e!==null?e:ve.pooledCache}function ri(e,l){l===null?B(Xt,Xt.current):B(Xt,l.pool)}function Id(){var e=ec();return e===null?null:{parent:Re._currentValue,pool:e}}var ja=Error(d(460)),lc=Error(d(474)),di=Error(d(542)),oi={then:function(){}};function Pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function eo(e,l,a){switch(a=e[a],a===void 0?e.push(l):a!==l&&(l.then(Ul,Ul),l=a),l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,to(e),e;default:if(typeof l.status=="string")l.then(Ul,Ul);else{if(e=ve,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=l,e.status="pending",e.then(function(n){if(l.status==="pending"){var i=l;i.status="fulfilled",i.value=n}},function(n){if(l.status==="pending"){var i=l;i.status="rejected",i.reason=n}})}switch(l.status){case"fulfilled":return l.value;case"rejected":throw e=l.reason,to(e),e}throw Zt=l,ja}}function Qt(e){try{var l=e._init;return l(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Zt=a,ja):a}}var Zt=null;function lo(){if(Zt===null)throw Error(d(459));var e=Zt;return Zt=null,e}function to(e){if(e===ja||e===di)throw Error(d(483))}var ga=null,tn=0;function ui(e){var l=tn;return tn+=1,ga===null&&(ga=[]),eo(ga,e,l)}function an(e,l){l=l.props.ref,e.ref=l!==void 0?l:null}function hi(e,l){throw l.$$typeof===_?Error(d(525)):(e=Object.prototype.toString.call(l),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(l).join(", ")+"}":e)))}function ao(e){function l(b,j){if(e){var S=b.deletions;S===null?(b.deletions=[j],b.flags|=16):S.push(j)}}function a(b,j){if(!e)return null;for(;j!==null;)l(b,j),j=j.sibling;return null}function n(b){for(var j=new Map;b!==null;)b.key!==null?j.set(b.key,b):j.set(b.index,b),b=b.sibling;return j}function i(b,j){return b=Gl(b,j),b.index=0,b.sibling=null,b}function s(b,j,S){return b.index=S,e?(S=b.alternate,S!==null?(S=S.index,S<j?(b.flags|=67108866,j):S):(b.flags|=67108866,j)):(b.flags|=1048576,j)}function c(b){return e&&b.alternate===null&&(b.flags|=67108866),b}function u(b,j,S,R){return j===null||j.tag!==6?(j=Xs(S,b.mode,R),j.return=b,j):(j=i(j,S),j.return=b,j)}function p(b,j,S,R){var Z=S.type;return Z===J?w(b,j,S.props.children,R,S.key):j!==null&&(j.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Be&&Qt(Z)===j.type)?(j=i(j,S.props),an(j,S),j.return=b,j):(j=ni(S.type,S.key,S.props,null,b.mode,R),an(j,S),j.return=b,j)}function N(b,j,S,R){return j===null||j.tag!==4||j.stateNode.containerInfo!==S.containerInfo||j.stateNode.implementation!==S.implementation?(j=Qs(S,b.mode,R),j.return=b,j):(j=i(j,S.children||[]),j.return=b,j)}function w(b,j,S,R,Z){return j===null||j.tag!==7?(j=Lt(S,b.mode,R,Z),j.return=b,j):(j=i(j,S),j.return=b,j)}function O(b,j,S){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Xs(""+j,b.mode,S),j.return=b,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case G:return S=ni(j.type,j.key,j.props,null,b.mode,S),an(S,j),S.return=b,S;case V:return j=Qs(j,b.mode,S),j.return=b,j;case Be:return j=Qt(j),O(b,j,S)}if(Tl(j)||Fe(j))return j=Lt(j,b.mode,S,null),j.return=b,j;if(typeof j.then=="function")return O(b,ui(j),S);if(j.$$typeof===$)return O(b,ci(b,j),S);hi(b,j)}return null}function E(b,j,S,R){var Z=j!==null?j.key:null;if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return Z!==null?null:u(b,j,""+S,R);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case G:return S.key===Z?p(b,j,S,R):null;case V:return S.key===Z?N(b,j,S,R):null;case Be:return S=Qt(S),E(b,j,S,R)}if(Tl(S)||Fe(S))return Z!==null?null:w(b,j,S,R,null);if(typeof S.then=="function")return E(b,j,ui(S),R);if(S.$$typeof===$)return E(b,j,ci(b,S),R);hi(b,S)}return null}function z(b,j,S,R,Z){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return b=b.get(S)||null,u(j,b,""+R,Z);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case G:return b=b.get(R.key===null?S:R.key)||null,p(j,b,R,Z);case V:return b=b.get(R.key===null?S:R.key)||null,N(j,b,R,Z);case Be:return R=Qt(R),z(b,j,S,R,Z)}if(Tl(R)||Fe(R))return b=b.get(S)||null,w(j,b,R,Z,null);if(typeof R.then=="function")return z(b,j,S,ui(R),Z);if(R.$$typeof===$)return z(b,j,S,ci(j,R),Z);hi(j,R)}return null}function U(b,j,S,R){for(var Z=null,re=null,q=j,le=j=0,se=null;q!==null&&le<S.length;le++){q.index>le?(se=q,q=null):se=q.sibling;var de=E(b,q,S[le],R);if(de===null){q===null&&(q=se);break}e&&q&&de.alternate===null&&l(b,q),j=s(de,j,le),re===null?Z=de:re.sibling=de,re=de,q=se}if(le===S.length)return a(b,q),ce&&ql(b,le),Z;if(q===null){for(;le<S.length;le++)q=O(b,S[le],R),q!==null&&(j=s(q,j,le),re===null?Z=q:re.sibling=q,re=q);return ce&&ql(b,le),Z}for(q=n(q);le<S.length;le++)se=z(q,b,le,S[le],R),se!==null&&(e&&se.alternate!==null&&q.delete(se.key===null?le:se.key),j=s(se,j,le),re===null?Z=se:re.sibling=se,re=se);return e&&q.forEach(function(zt){return l(b,zt)}),ce&&ql(b,le),Z}function K(b,j,S,R){if(S==null)throw Error(d(151));for(var Z=null,re=null,q=j,le=j=0,se=null,de=S.next();q!==null&&!de.done;le++,de=S.next()){q.index>le?(se=q,q=null):se=q.sibling;var zt=E(b,q,de.value,R);if(zt===null){q===null&&(q=se);break}e&&q&&zt.alternate===null&&l(b,q),j=s(zt,j,le),re===null?Z=zt:re.sibling=zt,re=zt,q=se}if(de.done)return a(b,q),ce&&ql(b,le),Z;if(q===null){for(;!de.done;le++,de=S.next())de=O(b,de.value,R),de!==null&&(j=s(de,j,le),re===null?Z=de:re.sibling=de,re=de);return ce&&ql(b,le),Z}for(q=n(q);!de.done;le++,de=S.next())de=z(q,b,le,de.value,R),de!==null&&(e&&de.alternate!==null&&q.delete(de.key===null?le:de.key),j=s(de,j,le),re===null?Z=de:re.sibling=de,re=de);return e&&q.forEach(function(Jp){return l(b,Jp)}),ce&&ql(b,le),Z}function je(b,j,S,R){if(typeof S=="object"&&S!==null&&S.type===J&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case G:e:{for(var Z=S.key;j!==null;){if(j.key===Z){if(Z=S.type,Z===J){if(j.tag===7){a(b,j.sibling),R=i(j,S.props.children),R.return=b,b=R;break e}}else if(j.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Be&&Qt(Z)===j.type){a(b,j.sibling),R=i(j,S.props),an(R,S),R.return=b,b=R;break e}a(b,j);break}else l(b,j);j=j.sibling}S.type===J?(R=Lt(S.props.children,b.mode,R,S.key),R.return=b,b=R):(R=ni(S.type,S.key,S.props,null,b.mode,R),an(R,S),R.return=b,b=R)}return c(b);case V:e:{for(Z=S.key;j!==null;){if(j.key===Z)if(j.tag===4&&j.stateNode.containerInfo===S.containerInfo&&j.stateNode.implementation===S.implementation){a(b,j.sibling),R=i(j,S.children||[]),R.return=b,b=R;break e}else{a(b,j);break}else l(b,j);j=j.sibling}R=Qs(S,b.mode,R),R.return=b,b=R}return c(b);case Be:return S=Qt(S),je(b,j,S,R)}if(Tl(S))return U(b,j,S,R);if(Fe(S)){if(Z=Fe(S),typeof Z!="function")throw Error(d(150));return S=Z.call(S),K(b,j,S,R)}if(typeof S.then=="function")return je(b,j,ui(S),R);if(S.$$typeof===$)return je(b,j,ci(b,S),R);hi(b,S)}return typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint"?(S=""+S,j!==null&&j.tag===6?(a(b,j.sibling),R=i(j,S),R.return=b,b=R):(a(b,j),R=Xs(S,b.mode,R),R.return=b,b=R),c(b)):a(b,j)}return function(b,j,S,R){try{tn=0;var Z=je(b,j,S,R);return ga=null,Z}catch(q){if(q===ja||q===di)throw q;var re=dl(29,q,null,b.mode);return re.lanes=R,re.return=b,re}finally{}}}var Vt=ao(!0),no=ao(!1),ut=!1;function tc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ac(e,l){e=e.updateQueue,l.updateQueue===e&&(l.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ht(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ft(e,l,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(oe&2)!==0){var i=n.pending;return i===null?l.next=l:(l.next=i.next,i.next=l),n.pending=l,l=ai(e),qd(e,null,a),l}return ti(e,n,l,a),ai(e)}function nn(e,l,a){if(l=l.updateQueue,l!==null&&(l=l.shared,(a&4194048)!==0)){var n=l.lanes;n&=e.pendingLanes,a|=n,l.lanes=a,Fr(e,a)}}function nc(e,l){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var c={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=c:s=s.next=c,a=a.next}while(a!==null);s===null?i=s=l:s=s.next=l}else i=s=l;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=l:e.next=l,a.lastBaseUpdate=l}var ic=!1;function sn(){if(ic){var e=ma;if(e!==null)throw e}}function cn(e,l,a,n){ic=!1;var i=e.updateQueue;ut=!1;var s=i.firstBaseUpdate,c=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var p=u,N=p.next;p.next=null,c===null?s=N:c.next=N,c=p;var w=e.alternate;w!==null&&(w=w.updateQueue,u=w.lastBaseUpdate,u!==c&&(u===null?w.firstBaseUpdate=N:u.next=N,w.lastBaseUpdate=p))}if(s!==null){var O=i.baseState;c=0,w=N=p=null,u=s;do{var E=u.lane&-536870913,z=E!==u.lane;if(z?(ie&E)===E:(n&E)===E){E!==0&&E===pa&&(ic=!0),w!==null&&(w=w.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var U=e,K=u;E=l;var je=a;switch(K.tag){case 1:if(U=K.payload,typeof U=="function"){O=U.call(je,O,E);break e}O=U;break e;case 3:U.flags=U.flags&-65537|128;case 0:if(U=K.payload,E=typeof U=="function"?U.call(je,O,E):U,E==null)break e;O=A({},O,E);break e;case 2:ut=!0}}E=u.callback,E!==null&&(e.flags|=64,z&&(e.flags|=8192),z=i.callbacks,z===null?i.callbacks=[E]:z.push(E))}else z={lane:E,tag:u.tag,payload:u.payload,callback:u.callback,next:null},w===null?(N=w=z,p=O):w=w.next=z,c|=E;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;z=u,u=z.next,z.next=null,i.lastBaseUpdate=z,i.shared.pending=null}}while(!0);w===null&&(p=O),i.baseState=p,i.firstBaseUpdate=N,i.lastBaseUpdate=w,s===null&&(i.shared.lanes=0),gt|=c,e.lanes=c,e.memoizedState=O}}function io(e,l){if(typeof e!="function")throw Error(d(191,e));e.call(l)}function so(e,l){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)io(a[e],l)}var va=g(null),fi=g(0);function co(e,l){e=Il,B(fi,e),B(va,l),Il=e|l.baseLanes}function sc(){B(fi,Il),B(va,va.current)}function cc(){Il=fi.current,D(va),D(fi)}var ol=g(null),Nl=null;function xt(e){var l=e.alternate;B(we,we.current&1),B(ol,e),Nl===null&&(l===null||va.current!==null||l.memoizedState!==null)&&(Nl=e)}function rc(e){B(we,we.current),B(ol,e),Nl===null&&(Nl=e)}function ro(e){e.tag===22?(B(we,we.current),B(ol,e),Nl===null&&(Nl=e)):pt()}function pt(){B(we,we.current),B(ol,ol.current)}function ul(e){D(ol),Nl===e&&(Nl=null),D(we)}var we=g(0);function xi(e){for(var l=e;l!==null;){if(l.tag===13){var a=l.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||xr(a)||pr(a)))return l}else if(l.tag===19&&(l.memoizedProps.revealOrder==="forwards"||l.memoizedProps.revealOrder==="backwards"||l.memoizedProps.revealOrder==="unstable_legacy-backwards"||l.memoizedProps.revealOrder==="together")){if((l.flags&128)!==0)return l}else if(l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return null;l=l.return}l.sibling.return=l.return,l=l.sibling}return null}var Ql=0,P=null,pe=null,Oe=null,pi=!1,ba=!1,Kt=!1,mi=0,rn=0,ya=null,Ux=0;function ke(){throw Error(d(321))}function dc(e,l){if(l===null)return!1;for(var a=0;a<l.length&&a<e.length;a++)if(!rl(e[a],l[a]))return!1;return!0}function oc(e,l,a,n,i,s){return Ql=s,P=l,l.memoizedState=null,l.updateQueue=null,l.lanes=0,M.H=e===null||e.memoizedState===null?Vo:Ec,Kt=!1,s=a(n,i),Kt=!1,ba&&(s=uo(l,a,n,i)),oo(e),s}function oo(e){M.H=un;var l=pe!==null&&pe.next!==null;if(Ql=0,Oe=pe=P=null,pi=!1,rn=0,ya=null,l)throw Error(d(300));e===null||De||(e=e.dependencies,e!==null&&si(e)&&(De=!0))}function uo(e,l,a,n){P=e;var i=0;do{if(ba&&(ya=null),rn=0,ba=!1,25<=i)throw Error(d(301));if(i+=1,Oe=pe=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}M.H=Ko,s=l(a,n)}while(ba);return s}function Lx(){var e=M.H,l=e.useState()[0];return l=typeof l.then=="function"?dn(l):l,e=e.useState()[0],(pe!==null?pe.memoizedState:null)!==e&&(P.flags|=1024),l}function uc(){var e=mi!==0;return mi=0,e}function hc(e,l,a){l.updateQueue=e.updateQueue,l.flags&=-2053,e.lanes&=~a}function fc(e){if(pi){for(e=e.memoizedState;e!==null;){var l=e.queue;l!==null&&(l.pending=null),e=e.next}pi=!1}Ql=0,Oe=pe=P=null,ba=!1,rn=mi=0,ya=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?P.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function Me(){if(pe===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var l=Oe===null?P.memoizedState:Oe.next;if(l!==null)Oe=l,pe=e;else{if(e===null)throw P.alternate===null?Error(d(467)):Error(d(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},Oe===null?P.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function ji(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function dn(e){var l=rn;return rn+=1,ya===null&&(ya=[]),e=eo(ya,e,l),l=P,(Oe===null?l.memoizedState:Oe.next)===null&&(l=l.alternate,M.H=l===null||l.memoizedState===null?Vo:Ec),e}function gi(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return dn(e);if(e.$$typeof===$)return Xe(e)}throw Error(d(438,String(e)))}function xc(e){var l=null,a=P.updateQueue;if(a!==null&&(l=a.memoCache),l==null){var n=P.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(l={data:n.data.map(function(i){return i.slice()}),index:0})))}if(l==null&&(l={data:[],index:0}),a===null&&(a=ji(),P.updateQueue=a),a.memoCache=l,a=l.data[l.index],a===void 0)for(a=l.data[l.index]=Array(e),n=0;n<e;n++)a[n]=al;return l.index++,a}function Zl(e,l){return typeof l=="function"?l(e):l}function vi(e){var l=Me();return pc(l,pe,e)}function pc(e,l,a){var n=e.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=a;var i=e.baseQueue,s=n.pending;if(s!==null){if(i!==null){var c=i.next;i.next=s.next,s.next=c}l.baseQueue=i=s,n.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{l=i.next;var u=c=null,p=null,N=l,w=!1;do{var O=N.lane&-536870913;if(O!==N.lane?(ie&O)===O:(Ql&O)===O){var E=N.revertLane;if(E===0)p!==null&&(p=p.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),O===pa&&(w=!0);else if((Ql&E)===E){N=N.next,E===pa&&(w=!0);continue}else O={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},p===null?(u=p=O,c=s):p=p.next=O,P.lanes|=E,gt|=E;O=N.action,Kt&&a(s,O),s=N.hasEagerState?N.eagerState:a(s,O)}else E={lane:O,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},p===null?(u=p=E,c=s):p=p.next=E,P.lanes|=O,gt|=O;N=N.next}while(N!==null&&N!==l);if(p===null?c=s:p.next=u,!rl(s,e.memoizedState)&&(De=!0,w&&(a=ma,a!==null)))throw a;e.memoizedState=s,e.baseState=c,e.baseQueue=p,n.lastRenderedState=s}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function mc(e){var l=Me(),a=l.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,s=l.memoizedState;if(i!==null){a.pending=null;var c=i=i.next;do s=e(s,c.action),c=c.next;while(c!==i);rl(s,l.memoizedState)||(De=!0),l.memoizedState=s,l.baseQueue===null&&(l.baseState=s),a.lastRenderedState=s}return[s,n]}function ho(e,l,a){var n=P,i=Me(),s=ce;if(s){if(a===void 0)throw Error(d(407));a=a()}else a=l();var c=!rl((pe||i).memoizedState,a);if(c&&(i.memoizedState=a,De=!0),i=i.queue,vc(po.bind(null,n,i,e),[e]),i.getSnapshot!==l||c||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,Sa(9,{destroy:void 0},xo.bind(null,n,i,a,l),null),ve===null)throw Error(d(349));s||(Ql&127)!==0||fo(n,l,a)}return a}function fo(e,l,a){e.flags|=16384,e={getSnapshot:l,value:a},l=P.updateQueue,l===null?(l=ji(),P.updateQueue=l,l.stores=[e]):(a=l.stores,a===null?l.stores=[e]:a.push(e))}function xo(e,l,a,n){l.value=a,l.getSnapshot=n,mo(l)&&jo(e)}function po(e,l,a){return a(function(){mo(l)&&jo(e)})}function mo(e){var l=e.getSnapshot;e=e.value;try{var a=l();return!rl(e,a)}catch{return!0}}function jo(e){var l=Ut(e,2);l!==null&&tl(l,e,2)}function jc(e){var l=Je();if(typeof e=="function"){var a=e;if(e=a(),Kt){nt(!0);try{a()}finally{nt(!1)}}}return l.memoizedState=l.baseState=e,l.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zl,lastRenderedState:e},l}function go(e,l,a,n){return e.baseState=a,pc(e,pe,typeof n=="function"?n:Zl)}function Gx(e,l,a,n,i){if(Si(e))throw Error(d(485));if(e=l.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(c){s.listeners.push(c)}};M.T!==null?a(!0):s.isTransition=!1,n(s),a=l.pending,a===null?(s.next=l.pending=s,vo(l,s)):(s.next=a.next,l.pending=a.next=s)}}function vo(e,l){var a=l.action,n=l.payload,i=e.state;if(l.isTransition){var s=M.T,c={};M.T=c;try{var u=a(i,n),p=M.S;p!==null&&p(c,u),bo(e,l,u)}catch(N){gc(e,l,N)}finally{s!==null&&c.types!==null&&(s.types=c.types),M.T=s}}else try{s=a(i,n),bo(e,l,s)}catch(N){gc(e,l,N)}}function bo(e,l,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){yo(e,l,n)},function(n){return gc(e,l,n)}):yo(e,l,a)}function yo(e,l,a){l.status="fulfilled",l.value=a,So(l),e.state=a,l=e.pending,l!==null&&(a=l.next,a===l?e.pending=null:(a=a.next,l.next=a,vo(e,a)))}function gc(e,l,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do l.status="rejected",l.reason=a,So(l),l=l.next;while(l!==n)}e.action=null}function So(e){e=e.listeners;for(var l=0;l<e.length;l++)(0,e[l])()}function No(e,l){return l}function Co(e,l){if(ce){var a=ve.formState;if(a!==null){e:{var n=P;if(ce){if(be){l:{for(var i=be,s=Sl;i.nodeType!==8;){if(!s){i=null;break l}if(i=Cl(i.nextSibling),i===null){i=null;break l}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){be=Cl(i.nextSibling),n=i.data==="F!";break e}}dt(n)}n=!1}n&&(l=a[0])}}return a=Je(),a.memoizedState=a.baseState=l,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:l},a.queue=n,a=Xo.bind(null,P,n),n.dispatch=a,n=jc(!1),s=Cc.bind(null,P,!1,n.queue),n=Je(),i={state:l,dispatch:null,action:e,pending:null},n.queue=i,a=Gx.bind(null,P,i,s,a),i.dispatch=a,n.memoizedState=e,[l,a,!1]}function Eo(e){var l=Me();return To(l,pe,e)}function To(e,l,a){if(l=pc(e,l,No)[0],e=vi(Zl)[0],typeof l=="object"&&l!==null&&typeof l.then=="function")try{var n=dn(l)}catch(c){throw c===ja?di:c}else n=l;l=Me();var i=l.queue,s=i.dispatch;return a!==l.memoizedState&&(P.flags|=2048,Sa(9,{destroy:void 0},qx.bind(null,i,a),null)),[n,s,e]}function qx(e,l){e.action=l}function ko(e){var l=Me(),a=pe;if(a!==null)return To(l,a,e);Me(),l=l.memoizedState,a=Me();var n=a.queue.dispatch;return a.memoizedState=e,[l,n,!1]}function Sa(e,l,a,n){return e={tag:e,create:a,deps:n,inst:l,next:null},l=P.updateQueue,l===null&&(l=ji(),P.updateQueue=l),a=l.lastEffect,a===null?l.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,l.lastEffect=e),e}function zo(){return Me().memoizedState}function bi(e,l,a,n){var i=Je();P.flags|=e,i.memoizedState=Sa(1|l,{destroy:void 0},a,n===void 0?null:n)}function yi(e,l,a,n){var i=Me();n=n===void 0?null:n;var s=i.memoizedState.inst;pe!==null&&n!==null&&dc(n,pe.memoizedState.deps)?i.memoizedState=Sa(l,s,a,n):(P.flags|=e,i.memoizedState=Sa(1|l,s,a,n))}function Ao(e,l){bi(8390656,8,e,l)}function vc(e,l){yi(2048,8,e,l)}function Yx(e){P.flags|=4;var l=P.updateQueue;if(l===null)l=ji(),P.updateQueue=l,l.events=[e];else{var a=l.events;a===null?l.events=[e]:a.push(e)}}function wo(e){var l=Me().memoizedState;return Yx({ref:l,nextImpl:e}),function(){if((oe&2)!==0)throw Error(d(440));return l.impl.apply(void 0,arguments)}}function Mo(e,l){return yi(4,2,e,l)}function Ro(e,l){return yi(4,4,e,l)}function Oo(e,l){if(typeof l=="function"){e=e();var a=l(e);return function(){typeof a=="function"?a():l(null)}}if(l!=null)return e=e(),l.current=e,function(){l.current=null}}function Do(e,l,a){a=a!=null?a.concat([e]):null,yi(4,4,Oo.bind(null,l,e),a)}function bc(){}function _o(e,l){var a=Me();l=l===void 0?null:l;var n=a.memoizedState;return l!==null&&dc(l,n[1])?n[0]:(a.memoizedState=[e,l],e)}function Ho(e,l){var a=Me();l=l===void 0?null:l;var n=a.memoizedState;if(l!==null&&dc(l,n[1]))return n[0];if(n=e(),Kt){nt(!0);try{e()}finally{nt(!1)}}return a.memoizedState=[n,l],n}function yc(e,l,a){return a===void 0||(Ql&1073741824)!==0&&(ie&261930)===0?e.memoizedState=l:(e.memoizedState=a,e=Bu(),P.lanes|=e,gt|=e,a)}function Bo(e,l,a,n){return rl(a,l)?a:va.current!==null?(e=yc(e,a,n),rl(e,l)||(De=!0),e):(Ql&42)===0||(Ql&1073741824)!==0&&(ie&261930)===0?(De=!0,e.memoizedState=a):(e=Bu(),P.lanes|=e,gt|=e,l)}function Uo(e,l,a,n,i){var s=H.p;H.p=s!==0&&8>s?s:8;var c=M.T,u={};M.T=u,Cc(e,!1,l,a);try{var p=i(),N=M.S;if(N!==null&&N(u,p),p!==null&&typeof p=="object"&&typeof p.then=="function"){var w=Bx(p,n);on(e,l,w,xl(e))}else on(e,l,n,xl(e))}catch(O){on(e,l,{then:function(){},status:"rejected",reason:O},xl())}finally{H.p=s,c!==null&&u.types!==null&&(c.types=u.types),M.T=c}}function Xx(){}function Sc(e,l,a,n){if(e.tag!==5)throw Error(d(476));var i=Lo(e).queue;Uo(e,i,l,F,a===null?Xx:function(){return Go(e),a(n)})}function Lo(e){var l=e.memoizedState;if(l!==null)return l;l={memoizedState:F,baseState:F,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zl,lastRenderedState:F},next:null};var a={};return l.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zl,lastRenderedState:a},next:null},e.memoizedState=l,e=e.alternate,e!==null&&(e.memoizedState=l),l}function Go(e){var l=Lo(e);l.next===null&&(l=e.alternate.memoizedState),on(e,l.next.queue,{},xl())}function Nc(){return Xe(kn)}function qo(){return Me().memoizedState}function Yo(){return Me().memoizedState}function Qx(e){for(var l=e.return;l!==null;){switch(l.tag){case 24:case 3:var a=xl();e=ht(a);var n=ft(l,e,a);n!==null&&(tl(n,l,a),nn(n,l,a)),l={cache:Is()},e.payload=l;return}l=l.return}}function Zx(e,l,a){var n=xl();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Si(e)?Qo(l,a):(a=qs(e,l,a,n),a!==null&&(tl(a,e,n),Zo(a,l,n)))}function Xo(e,l,a){var n=xl();on(e,l,a,n)}function on(e,l,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Si(e))Qo(l,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=l.lastRenderedReducer,s!==null))try{var c=l.lastRenderedState,u=s(c,a);if(i.hasEagerState=!0,i.eagerState=u,rl(u,c))return ti(e,l,i,0),ve===null&&li(),!1}catch{}finally{}if(a=qs(e,l,i,n),a!==null)return tl(a,e,n),Zo(a,l,n),!0}return!1}function Cc(e,l,a,n){if(n={lane:2,revertLane:tr(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Si(e)){if(l)throw Error(d(479))}else l=qs(e,a,n,2),l!==null&&tl(l,e,2)}function Si(e){var l=e.alternate;return e===P||l!==null&&l===P}function Qo(e,l){ba=pi=!0;var a=e.pending;a===null?l.next=l:(l.next=a.next,a.next=l),e.pending=l}function Zo(e,l,a){if((a&4194048)!==0){var n=l.lanes;n&=e.pendingLanes,a|=n,l.lanes=a,Fr(e,a)}}var un={readContext:Xe,use:gi,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useLayoutEffect:ke,useInsertionEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useSyncExternalStore:ke,useId:ke,useHostTransitionStatus:ke,useFormState:ke,useActionState:ke,useOptimistic:ke,useMemoCache:ke,useCacheRefresh:ke};un.useEffectEvent=ke;var Vo={readContext:Xe,use:gi,useCallback:function(e,l){return Je().memoizedState=[e,l===void 0?null:l],e},useContext:Xe,useEffect:Ao,useImperativeHandle:function(e,l,a){a=a!=null?a.concat([e]):null,bi(4194308,4,Oo.bind(null,l,e),a)},useLayoutEffect:function(e,l){return bi(4194308,4,e,l)},useInsertionEffect:function(e,l){bi(4,2,e,l)},useMemo:function(e,l){var a=Je();l=l===void 0?null:l;var n=e();if(Kt){nt(!0);try{e()}finally{nt(!1)}}return a.memoizedState=[n,l],n},useReducer:function(e,l,a){var n=Je();if(a!==void 0){var i=a(l);if(Kt){nt(!0);try{a(l)}finally{nt(!1)}}}else i=l;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Zx.bind(null,P,e),[n.memoizedState,e]},useRef:function(e){var l=Je();return e={current:e},l.memoizedState=e},useState:function(e){e=jc(e);var l=e.queue,a=Xo.bind(null,P,l);return l.dispatch=a,[e.memoizedState,a]},useDebugValue:bc,useDeferredValue:function(e,l){var a=Je();return yc(a,e,l)},useTransition:function(){var e=jc(!1);return e=Uo.bind(null,P,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,l,a){var n=P,i=Je();if(ce){if(a===void 0)throw Error(d(407));a=a()}else{if(a=l(),ve===null)throw Error(d(349));(ie&127)!==0||fo(n,l,a)}i.memoizedState=a;var s={value:a,getSnapshot:l};return i.queue=s,Ao(po.bind(null,n,s,e),[e]),n.flags|=2048,Sa(9,{destroy:void 0},xo.bind(null,n,s,a,l),null),a},useId:function(){var e=Je(),l=ve.identifierPrefix;if(ce){var a=Ml,n=wl;a=(n&~(1<<32-cl(n)-1)).toString(32)+a,l="_"+l+"R_"+a,a=mi++,0<a&&(l+="H"+a.toString(32)),l+="_"}else a=Ux++,l="_"+l+"r_"+a.toString(32)+"_";return e.memoizedState=l},useHostTransitionStatus:Nc,useFormState:Co,useActionState:Co,useOptimistic:function(e){var l=Je();l.memoizedState=l.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return l.queue=a,l=Cc.bind(null,P,!0,a),a.dispatch=l,[e,l]},useMemoCache:xc,useCacheRefresh:function(){return Je().memoizedState=Qx.bind(null,P)},useEffectEvent:function(e){var l=Je(),a={impl:e};return l.memoizedState=a,function(){if((oe&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},Ec={readContext:Xe,use:gi,useCallback:_o,useContext:Xe,useEffect:vc,useImperativeHandle:Do,useInsertionEffect:Mo,useLayoutEffect:Ro,useMemo:Ho,useReducer:vi,useRef:zo,useState:function(){return vi(Zl)},useDebugValue:bc,useDeferredValue:function(e,l){var a=Me();return Bo(a,pe.memoizedState,e,l)},useTransition:function(){var e=vi(Zl)[0],l=Me().memoizedState;return[typeof e=="boolean"?e:dn(e),l]},useSyncExternalStore:ho,useId:qo,useHostTransitionStatus:Nc,useFormState:Eo,useActionState:Eo,useOptimistic:function(e,l){var a=Me();return go(a,pe,e,l)},useMemoCache:xc,useCacheRefresh:Yo};Ec.useEffectEvent=wo;var Ko={readContext:Xe,use:gi,useCallback:_o,useContext:Xe,useEffect:vc,useImperativeHandle:Do,useInsertionEffect:Mo,useLayoutEffect:Ro,useMemo:Ho,useReducer:mc,useRef:zo,useState:function(){return mc(Zl)},useDebugValue:bc,useDeferredValue:function(e,l){var a=Me();return pe===null?yc(a,e,l):Bo(a,pe.memoizedState,e,l)},useTransition:function(){var e=mc(Zl)[0],l=Me().memoizedState;return[typeof e=="boolean"?e:dn(e),l]},useSyncExternalStore:ho,useId:qo,useHostTransitionStatus:Nc,useFormState:ko,useActionState:ko,useOptimistic:function(e,l){var a=Me();return pe!==null?go(a,pe,e,l):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:xc,useCacheRefresh:Yo};Ko.useEffectEvent=wo;function Tc(e,l,a,n){l=e.memoizedState,a=a(n,l),a=a==null?l:A({},l,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var kc={enqueueSetState:function(e,l,a){e=e._reactInternals;var n=xl(),i=ht(n);i.payload=l,a!=null&&(i.callback=a),l=ft(e,i,n),l!==null&&(tl(l,e,n),nn(l,e,n))},enqueueReplaceState:function(e,l,a){e=e._reactInternals;var n=xl(),i=ht(n);i.tag=1,i.payload=l,a!=null&&(i.callback=a),l=ft(e,i,n),l!==null&&(tl(l,e,n),nn(l,e,n))},enqueueForceUpdate:function(e,l){e=e._reactInternals;var a=xl(),n=ht(a);n.tag=2,l!=null&&(n.callback=l),l=ft(e,n,a),l!==null&&(tl(l,e,a),nn(l,e,a))}};function Jo(e,l,a,n,i,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,c):l.prototype&&l.prototype.isPureReactComponent?!Wa(a,n)||!Wa(i,s):!0}function Fo(e,l,a,n){e=l.state,typeof l.componentWillReceiveProps=="function"&&l.componentWillReceiveProps(a,n),typeof l.UNSAFE_componentWillReceiveProps=="function"&&l.UNSAFE_componentWillReceiveProps(a,n),l.state!==e&&kc.enqueueReplaceState(l,l.state,null)}function Jt(e,l){var a=l;if("ref"in l){a={};for(var n in l)n!=="ref"&&(a[n]=l[n])}if(e=e.defaultProps){a===l&&(a=A({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Wo(e){ei(e)}function $o(e){console.error(e)}function Io(e){ei(e)}function Ni(e,l){try{var a=e.onUncaughtError;a(l.value,{componentStack:l.stack})}catch(n){setTimeout(function(){throw n})}}function Po(e,l,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:l.tag===1?l.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function zc(e,l,a){return a=ht(a),a.tag=3,a.payload={element:null},a.callback=function(){Ni(e,l)},a}function eu(e){return e=ht(e),e.tag=3,e}function lu(e,l,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;e.payload=function(){return i(s)},e.callback=function(){Po(l,a,n)}}var c=a.stateNode;c!==null&&typeof c.componentDidCatch=="function"&&(e.callback=function(){Po(l,a,n),typeof i!="function"&&(vt===null?vt=new Set([this]):vt.add(this));var u=n.stack;this.componentDidCatch(n.value,{componentStack:u!==null?u:""})})}function Vx(e,l,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(l=a.alternate,l!==null&&xa(l,a,i,!0),a=ol.current,a!==null){switch(a.tag){case 31:case 13:return Nl===null?_i():a.alternate===null&&ze===0&&(ze=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===oi?a.flags|=16384:(l=a.updateQueue,l===null?a.updateQueue=new Set([n]):l.add(n),Pc(e,n,i)),!1;case 22:return a.flags|=65536,n===oi?a.flags|=16384:(l=a.updateQueue,l===null?(l={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=l):(a=l.retryQueue,a===null?l.retryQueue=new Set([n]):a.add(n)),Pc(e,n,i)),!1}throw Error(d(435,a.tag))}return Pc(e,n,i),_i(),!1}if(ce)return l=ol.current,l!==null?((l.flags&65536)===0&&(l.flags|=256),l.flags|=65536,l.lanes=i,n!==Ks&&(e=Error(d(422),{cause:n}),Pa(vl(e,a)))):(n!==Ks&&(l=Error(d(423),{cause:n}),Pa(vl(l,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=vl(n,a),i=zc(e.stateNode,n,i),nc(e,i),ze!==4&&(ze=2)),!1;var s=Error(d(520),{cause:n});if(s=vl(s,a),vn===null?vn=[s]:vn.push(s),ze!==4&&(ze=2),l===null)return!0;n=vl(n,a),a=l;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=zc(a.stateNode,n,e),nc(a,e),!1;case 1:if(l=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof l.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(vt===null||!vt.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=eu(i),lu(i,e,a,n),nc(a,i),!1}a=a.return}while(a!==null);return!1}var Ac=Error(d(461)),De=!1;function Qe(e,l,a,n){l.child=e===null?no(l,null,a,n):Vt(l,e.child,a,n)}function tu(e,l,a,n,i){a=a.render;var s=l.ref;if("ref"in n){var c={};for(var u in n)u!=="ref"&&(c[u]=n[u])}else c=n;return Yt(l),n=oc(e,l,a,c,s,i),u=uc(),e!==null&&!De?(hc(e,l,i),Vl(e,l,i)):(ce&&u&&Zs(l),l.flags|=1,Qe(e,l,n,i),l.child)}function au(e,l,a,n,i){if(e===null){var s=a.type;return typeof s=="function"&&!Ys(s)&&s.defaultProps===void 0&&a.compare===null?(l.tag=15,l.type=s,nu(e,l,s,n,i)):(e=ni(a.type,null,n,l,l.mode,i),e.ref=l.ref,e.return=l,l.child=e)}if(s=e.child,!Bc(e,i)){var c=s.memoizedProps;if(a=a.compare,a=a!==null?a:Wa,a(c,n)&&e.ref===l.ref)return Vl(e,l,i)}return l.flags|=1,e=Gl(s,n),e.ref=l.ref,e.return=l,l.child=e}function nu(e,l,a,n,i){if(e!==null){var s=e.memoizedProps;if(Wa(s,n)&&e.ref===l.ref)if(De=!1,l.pendingProps=n=s,Bc(e,i))(e.flags&131072)!==0&&(De=!0);else return l.lanes=e.lanes,Vl(e,l,i)}return wc(e,l,a,n,i)}function iu(e,l,a,n){var i=n.children,s=e!==null?e.memoizedState:null;if(e===null&&l.stateNode===null&&(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((l.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(n=l.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,l.child=null;return su(e,l,s,a,n)}if((a&536870912)!==0)l.memoizedState={baseLanes:0,cachePool:null},e!==null&&ri(l,s!==null?s.cachePool:null),s!==null?co(l,s):sc(),ro(l);else return n=l.lanes=536870912,su(e,l,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(ri(l,s.cachePool),co(l,s),pt(),l.memoizedState=null):(e!==null&&ri(l,null),sc(),pt());return Qe(e,l,i,a),l.child}function hn(e,l){return e!==null&&e.tag===22||l.stateNode!==null||(l.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.sibling}function su(e,l,a,n,i){var s=ec();return s=s===null?null:{parent:Re._currentValue,pool:s},l.memoizedState={baseLanes:a,cachePool:s},e!==null&&ri(l,null),sc(),ro(l),e!==null&&xa(e,l,n,!0),l.childLanes=i,null}function Ci(e,l){return l=Ti({mode:l.mode,children:l.children},e.mode),l.ref=e.ref,e.child=l,l.return=e,l}function cu(e,l,a){return Vt(l,e.child,null,a),e=Ci(l,l.pendingProps),e.flags|=2,ul(l),l.memoizedState=null,e}function Kx(e,l,a){var n=l.pendingProps,i=(l.flags&128)!==0;if(l.flags&=-129,e===null){if(ce){if(n.mode==="hidden")return e=Ci(l,n),l.lanes=536870912,hn(null,e);if(rc(l),(e=be)?(e=vh(e,Sl),e=e!==null&&e.data==="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:ct!==null?{id:wl,overflow:Ml}:null,retryLane:536870912,hydrationErrors:null},a=Xd(e),a.return=l,l.child=a,Ye=l,be=null)):e=null,e===null)throw dt(l);return l.lanes=536870912,null}return Ci(l,n)}var s=e.memoizedState;if(s!==null){var c=s.dehydrated;if(rc(l),i)if(l.flags&256)l.flags&=-257,l=cu(e,l,a);else if(l.memoizedState!==null)l.child=e.child,l.flags|=128,l=null;else throw Error(d(558));else if(De||xa(e,l,a,!1),i=(a&e.childLanes)!==0,De||i){if(n=ve,n!==null&&(c=Wr(n,a),c!==0&&c!==s.retryLane))throw s.retryLane=c,Ut(e,c),tl(n,e,c),Ac;_i(),l=cu(e,l,a)}else e=s.treeContext,be=Cl(c.nextSibling),Ye=l,ce=!0,rt=null,Sl=!1,e!==null&&Vd(l,e),l=Ci(l,n),l.flags|=4096;return l}return e=Gl(e.child,{mode:n.mode,children:n.children}),e.ref=l.ref,l.child=e,e.return=l,e}function Ei(e,l){var a=l.ref;if(a===null)e!==null&&e.ref!==null&&(l.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(l.flags|=4194816)}}function wc(e,l,a,n,i){return Yt(l),a=oc(e,l,a,n,void 0,i),n=uc(),e!==null&&!De?(hc(e,l,i),Vl(e,l,i)):(ce&&n&&Zs(l),l.flags|=1,Qe(e,l,a,i),l.child)}function ru(e,l,a,n,i,s){return Yt(l),l.updateQueue=null,a=uo(l,n,a,i),oo(e),n=uc(),e!==null&&!De?(hc(e,l,s),Vl(e,l,s)):(ce&&n&&Zs(l),l.flags|=1,Qe(e,l,a,s),l.child)}function du(e,l,a,n,i){if(Yt(l),l.stateNode===null){var s=oa,c=a.contextType;typeof c=="object"&&c!==null&&(s=Xe(c)),s=new a(n,s),l.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=kc,l.stateNode=s,s._reactInternals=l,s=l.stateNode,s.props=n,s.state=l.memoizedState,s.refs={},tc(l),c=a.contextType,s.context=typeof c=="object"&&c!==null?Xe(c):oa,s.state=l.memoizedState,c=a.getDerivedStateFromProps,typeof c=="function"&&(Tc(l,a,c,n),s.state=l.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(c=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),c!==s.state&&kc.enqueueReplaceState(s,s.state,null),cn(l,n,s,i),sn(),s.state=l.memoizedState),typeof s.componentDidMount=="function"&&(l.flags|=4194308),n=!0}else if(e===null){s=l.stateNode;var u=l.memoizedProps,p=Jt(a,u);s.props=p;var N=s.context,w=a.contextType;c=oa,typeof w=="object"&&w!==null&&(c=Xe(w));var O=a.getDerivedStateFromProps;w=typeof O=="function"||typeof s.getSnapshotBeforeUpdate=="function",u=l.pendingProps!==u,w||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u||N!==c)&&Fo(l,s,n,c),ut=!1;var E=l.memoizedState;s.state=E,cn(l,n,s,i),sn(),N=l.memoizedState,u||E!==N||ut?(typeof O=="function"&&(Tc(l,a,O,n),N=l.memoizedState),(p=ut||Jo(l,a,p,n,E,N,c))?(w||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(l.flags|=4194308)):(typeof s.componentDidMount=="function"&&(l.flags|=4194308),l.memoizedProps=n,l.memoizedState=N),s.props=n,s.state=N,s.context=c,n=p):(typeof s.componentDidMount=="function"&&(l.flags|=4194308),n=!1)}else{s=l.stateNode,ac(e,l),c=l.memoizedProps,w=Jt(a,c),s.props=w,O=l.pendingProps,E=s.context,N=a.contextType,p=oa,typeof N=="object"&&N!==null&&(p=Xe(N)),u=a.getDerivedStateFromProps,(N=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(c!==O||E!==p)&&Fo(l,s,n,p),ut=!1,E=l.memoizedState,s.state=E,cn(l,n,s,i),sn();var z=l.memoizedState;c!==O||E!==z||ut||e!==null&&e.dependencies!==null&&si(e.dependencies)?(typeof u=="function"&&(Tc(l,a,u,n),z=l.memoizedState),(w=ut||Jo(l,a,w,n,E,z,p)||e!==null&&e.dependencies!==null&&si(e.dependencies))?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,z,p),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,z,p)),typeof s.componentDidUpdate=="function"&&(l.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(l.flags|=1024)):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(l.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(l.flags|=1024),l.memoizedProps=n,l.memoizedState=z),s.props=n,s.state=z,s.context=p,n=w):(typeof s.componentDidUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(l.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&E===e.memoizedState||(l.flags|=1024),n=!1)}return s=n,Ei(e,l),n=(l.flags&128)!==0,s||n?(s=l.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),l.flags|=1,e!==null&&n?(l.child=Vt(l,e.child,null,i),l.child=Vt(l,null,a,i)):Qe(e,l,a,i),l.memoizedState=s.state,e=l.child):e=Vl(e,l,i),e}function ou(e,l,a,n){return Gt(),l.flags|=256,Qe(e,l,a,n),l.child}var Mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Rc(e){return{baseLanes:e,cachePool:Id()}}function Oc(e,l,a){return e=e!==null?e.childLanes&~a:0,l&&(e|=fl),e}function uu(e,l,a){var n=l.pendingProps,i=!1,s=(l.flags&128)!==0,c;if((c=s)||(c=e!==null&&e.memoizedState===null?!1:(we.current&2)!==0),c&&(i=!0,l.flags&=-129),c=(l.flags&32)!==0,l.flags&=-33,e===null){if(ce){if(i?xt(l):pt(),(e=be)?(e=vh(e,Sl),e=e!==null&&e.data!=="&"?e:null,e!==null&&(l.memoizedState={dehydrated:e,treeContext:ct!==null?{id:wl,overflow:Ml}:null,retryLane:536870912,hydrationErrors:null},a=Xd(e),a.return=l,l.child=a,Ye=l,be=null)):e=null,e===null)throw dt(l);return pr(e)?l.lanes=32:l.lanes=536870912,null}var u=n.children;return n=n.fallback,i?(pt(),i=l.mode,u=Ti({mode:"hidden",children:u},i),n=Lt(n,i,a,null),u.return=l,n.return=l,u.sibling=n,l.child=u,n=l.child,n.memoizedState=Rc(a),n.childLanes=Oc(e,c,a),l.memoizedState=Mc,hn(null,n)):(xt(l),Dc(l,u))}var p=e.memoizedState;if(p!==null&&(u=p.dehydrated,u!==null)){if(s)l.flags&256?(xt(l),l.flags&=-257,l=_c(e,l,a)):l.memoizedState!==null?(pt(),l.child=e.child,l.flags|=128,l=null):(pt(),u=n.fallback,i=l.mode,n=Ti({mode:"visible",children:n.children},i),u=Lt(u,i,a,null),u.flags|=2,n.return=l,u.return=l,n.sibling=u,l.child=n,Vt(l,e.child,null,a),n=l.child,n.memoizedState=Rc(a),n.childLanes=Oc(e,c,a),l.memoizedState=Mc,l=hn(null,n));else if(xt(l),pr(u)){if(c=u.nextSibling&&u.nextSibling.dataset,c)var N=c.dgst;c=N,n=Error(d(419)),n.stack="",n.digest=c,Pa({value:n,source:null,stack:null}),l=_c(e,l,a)}else if(De||xa(e,l,a,!1),c=(a&e.childLanes)!==0,De||c){if(c=ve,c!==null&&(n=Wr(c,a),n!==0&&n!==p.retryLane))throw p.retryLane=n,Ut(e,n),tl(c,e,n),Ac;xr(u)||_i(),l=_c(e,l,a)}else xr(u)?(l.flags|=192,l.child=e.child,l=null):(e=p.treeContext,be=Cl(u.nextSibling),Ye=l,ce=!0,rt=null,Sl=!1,e!==null&&Vd(l,e),l=Dc(l,n.children),l.flags|=4096);return l}return i?(pt(),u=n.fallback,i=l.mode,p=e.child,N=p.sibling,n=Gl(p,{mode:"hidden",children:n.children}),n.subtreeFlags=p.subtreeFlags&65011712,N!==null?u=Gl(N,u):(u=Lt(u,i,a,null),u.flags|=2),u.return=l,n.return=l,n.sibling=u,l.child=n,hn(null,n),n=l.child,u=e.child.memoizedState,u===null?u=Rc(a):(i=u.cachePool,i!==null?(p=Re._currentValue,i=i.parent!==p?{parent:p,pool:p}:i):i=Id(),u={baseLanes:u.baseLanes|a,cachePool:i}),n.memoizedState=u,n.childLanes=Oc(e,c,a),l.memoizedState=Mc,hn(e.child,n)):(xt(l),a=e.child,e=a.sibling,a=Gl(a,{mode:"visible",children:n.children}),a.return=l,a.sibling=null,e!==null&&(c=l.deletions,c===null?(l.deletions=[e],l.flags|=16):c.push(e)),l.child=a,l.memoizedState=null,a)}function Dc(e,l){return l=Ti({mode:"visible",children:l},e.mode),l.return=e,e.child=l}function Ti(e,l){return e=dl(22,e,null,l),e.lanes=0,e}function _c(e,l,a){return Vt(l,e.child,null,a),e=Dc(l,l.pendingProps.children),e.flags|=2,l.memoizedState=null,e}function hu(e,l,a){e.lanes|=l;var n=e.alternate;n!==null&&(n.lanes|=l),Ws(e.return,l,a)}function Hc(e,l,a,n,i,s){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:l,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(c.isBackwards=l,c.rendering=null,c.renderingStartTime=0,c.last=n,c.tail=a,c.tailMode=i,c.treeForkCount=s)}function fu(e,l,a){var n=l.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var c=we.current,u=(c&2)!==0;if(u?(c=c&1|2,l.flags|=128):c&=1,B(we,c),Qe(e,l,n,a),n=ce?Ia:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=l.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&hu(e,a,l);else if(e.tag===19)hu(e,a,l);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===l)break e;for(;e.sibling===null;){if(e.return===null||e.return===l)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=l.child,i=null;a!==null;)e=a.alternate,e!==null&&xi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=l.child,l.child=null):(i=a.sibling,a.sibling=null),Hc(l,!1,i,a,s,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=l.child,l.child=null;i!==null;){if(e=i.alternate,e!==null&&xi(e)===null){l.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}Hc(l,!0,a,null,s,n);break;case"together":Hc(l,!1,null,null,void 0,n);break;default:l.memoizedState=null}return l.child}function Vl(e,l,a){if(e!==null&&(l.dependencies=e.dependencies),gt|=l.lanes,(a&l.childLanes)===0)if(e!==null){if(xa(e,l,a,!1),(a&l.childLanes)===0)return null}else return null;if(e!==null&&l.child!==e.child)throw Error(d(153));if(l.child!==null){for(e=l.child,a=Gl(e,e.pendingProps),l.child=a,a.return=l;e.sibling!==null;)e=e.sibling,a=a.sibling=Gl(e,e.pendingProps),a.return=l;a.sibling=null}return l.child}function Bc(e,l){return(e.lanes&l)!==0?!0:(e=e.dependencies,!!(e!==null&&si(e)))}function Jx(e,l,a){switch(l.tag){case 3:Ke(l,l.stateNode.containerInfo),ot(l,Re,e.memoizedState.cache),Gt();break;case 27:case 5:Ba(l);break;case 4:Ke(l,l.stateNode.containerInfo);break;case 10:ot(l,l.type,l.memoizedProps.value);break;case 31:if(l.memoizedState!==null)return l.flags|=128,rc(l),null;break;case 13:var n=l.memoizedState;if(n!==null)return n.dehydrated!==null?(xt(l),l.flags|=128,null):(a&l.child.childLanes)!==0?uu(e,l,a):(xt(l),e=Vl(e,l,a),e!==null?e.sibling:null);xt(l);break;case 19:var i=(e.flags&128)!==0;if(n=(a&l.childLanes)!==0,n||(xa(e,l,a,!1),n=(a&l.childLanes)!==0),i){if(n)return fu(e,l,a);l.flags|=128}if(i=l.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(we,we.current),n)break;return null;case 22:return l.lanes=0,iu(e,l,a,l.pendingProps);case 24:ot(l,Re,e.memoizedState.cache)}return Vl(e,l,a)}function xu(e,l,a){if(e!==null)if(e.memoizedProps!==l.pendingProps)De=!0;else{if(!Bc(e,a)&&(l.flags&128)===0)return De=!1,Jx(e,l,a);De=(e.flags&131072)!==0}else De=!1,ce&&(l.flags&1048576)!==0&&Zd(l,Ia,l.index);switch(l.lanes=0,l.tag){case 16:e:{var n=l.pendingProps;if(e=Qt(l.elementType),l.type=e,typeof e=="function")Ys(e)?(n=Jt(e,n),l.tag=1,l=du(null,l,e,n,a)):(l.tag=0,l=wc(null,l,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===Se){l.tag=11,l=tu(null,l,e,n,a);break e}else if(i===ee){l.tag=14,l=au(null,l,e,n,a);break e}}throw l=Hl(e)||e,Error(d(306,l,""))}}return l;case 0:return wc(e,l,l.type,l.pendingProps,a);case 1:return n=l.type,i=Jt(n,l.pendingProps),du(e,l,n,i,a);case 3:e:{if(Ke(l,l.stateNode.containerInfo),e===null)throw Error(d(387));n=l.pendingProps;var s=l.memoizedState;i=s.element,ac(e,l),cn(l,n,null,a);var c=l.memoizedState;if(n=c.cache,ot(l,Re,n),n!==s.cache&&$s(l,[Re],a,!0),sn(),n=c.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:c.cache},l.updateQueue.baseState=s,l.memoizedState=s,l.flags&256){l=ou(e,l,n,a);break e}else if(n!==i){i=vl(Error(d(424)),l),Pa(i),l=ou(e,l,n,a);break e}else{switch(e=l.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(be=Cl(e.firstChild),Ye=l,ce=!0,rt=null,Sl=!0,a=no(l,null,n,a),l.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Gt(),n===i){l=Vl(e,l,a);break e}Qe(e,l,n,a)}l=l.child}return l;case 26:return Ei(e,l),e===null?(a=Eh(l.type,null,l.pendingProps,null))?l.memoizedState=a:ce||(a=l.type,e=l.pendingProps,n=Yi(te.current).createElement(a),n[qe]=l,n[We]=e,Ze(n,a,e),Le(n),l.stateNode=n):l.memoizedState=Eh(l.type,e.memoizedProps,l.pendingProps,e.memoizedState),null;case 27:return Ba(l),e===null&&ce&&(n=l.stateNode=Sh(l.type,l.pendingProps,te.current),Ye=l,Sl=!0,i=be,Nt(l.type)?(mr=i,be=Cl(n.firstChild)):be=i),Qe(e,l,l.pendingProps.children,a),Ei(e,l),e===null&&(l.flags|=4194304),l.child;case 5:return e===null&&ce&&((i=n=be)&&(n=Cp(n,l.type,l.pendingProps,Sl),n!==null?(l.stateNode=n,Ye=l,be=Cl(n.firstChild),Sl=!1,i=!0):i=!1),i||dt(l)),Ba(l),i=l.type,s=l.pendingProps,c=e!==null?e.memoizedProps:null,n=s.children,ur(i,s)?n=null:c!==null&&ur(i,c)&&(l.flags|=32),l.memoizedState!==null&&(i=oc(e,l,Lx,null,null,a),kn._currentValue=i),Ei(e,l),Qe(e,l,n,a),l.child;case 6:return e===null&&ce&&((e=a=be)&&(a=Ep(a,l.pendingProps,Sl),a!==null?(l.stateNode=a,Ye=l,be=null,e=!0):e=!1),e||dt(l)),null;case 13:return uu(e,l,a);case 4:return Ke(l,l.stateNode.containerInfo),n=l.pendingProps,e===null?l.child=Vt(l,null,n,a):Qe(e,l,n,a),l.child;case 11:return tu(e,l,l.type,l.pendingProps,a);case 7:return Qe(e,l,l.pendingProps,a),l.child;case 8:return Qe(e,l,l.pendingProps.children,a),l.child;case 12:return Qe(e,l,l.pendingProps.children,a),l.child;case 10:return n=l.pendingProps,ot(l,l.type,n.value),Qe(e,l,n.children,a),l.child;case 9:return i=l.type._context,n=l.pendingProps.children,Yt(l),i=Xe(i),n=n(i),l.flags|=1,Qe(e,l,n,a),l.child;case 14:return au(e,l,l.type,l.pendingProps,a);case 15:return nu(e,l,l.type,l.pendingProps,a);case 19:return fu(e,l,a);case 31:return Kx(e,l,a);case 22:return iu(e,l,a,l.pendingProps);case 24:return Yt(l),n=Xe(Re),e===null?(i=ec(),i===null&&(i=ve,s=Is(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),l.memoizedState={parent:n,cache:i},tc(l),ot(l,Re,i)):((e.lanes&a)!==0&&(ac(e,l),cn(l,null,null,a),sn()),i=e.memoizedState,s=l.memoizedState,i.parent!==n?(i={parent:n,cache:n},l.memoizedState=i,l.lanes===0&&(l.memoizedState=l.updateQueue.baseState=i),ot(l,Re,n)):(n=s.cache,ot(l,Re,n),n!==i.cache&&$s(l,[Re],a,!0))),Qe(e,l,l.pendingProps.children,a),l.child;case 29:throw l.pendingProps}throw Error(d(156,l.tag))}function Kl(e){e.flags|=4}function Uc(e,l,a,n,i){if((l=(e.mode&32)!==0)&&(l=!1),l){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(qu())e.flags|=8192;else throw Zt=oi,lc}else e.flags&=-16777217}function pu(e,l){if(l.type!=="stylesheet"||(l.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wh(l))if(qu())e.flags|=8192;else throw Zt=oi,lc}function ki(e,l){l!==null&&(e.flags|=4),e.flags&16384&&(l=e.tag!==22?Kr():536870912,e.lanes|=l,Ta|=l)}function fn(e,l){if(!ce)switch(e.tailMode){case"hidden":l=e.tail;for(var a=null;l!==null;)l.alternate!==null&&(a=l),l=l.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?l||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ye(e){var l=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(l)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,l}function Fx(e,l,a){var n=l.pendingProps;switch(Vs(l),l.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(l),null;case 1:return ye(l),null;case 3:return a=l.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),l.memoizedState.cache!==n&&(l.flags|=2048),Xl(Re),Ae(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(fa(l)?Kl(l):e===null||e.memoizedState.isDehydrated&&(l.flags&256)===0||(l.flags|=1024,Js())),ye(l),null;case 26:var i=l.type,s=l.memoizedState;return e===null?(Kl(l),s!==null?(ye(l),pu(l,s)):(ye(l),Uc(l,i,null,n,a))):s?s!==e.memoizedState?(Kl(l),ye(l),pu(l,s)):(ye(l),l.flags&=-16777217):(e=e.memoizedProps,e!==n&&Kl(l),ye(l),Uc(l,i,e,n,a)),null;case 27:if(Un(l),a=te.current,i=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==n&&Kl(l);else{if(!n){if(l.stateNode===null)throw Error(d(166));return ye(l),null}e=L.current,fa(l)?Kd(l):(e=Sh(i,n,a),l.stateNode=e,Kl(l))}return ye(l),null;case 5:if(Un(l),i=l.type,e!==null&&l.stateNode!=null)e.memoizedProps!==n&&Kl(l);else{if(!n){if(l.stateNode===null)throw Error(d(166));return ye(l),null}if(s=L.current,fa(l))Kd(l);else{var c=Yi(te.current);switch(s){case 1:s=c.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=c.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=c.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=c.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?c.createElement("select",{is:n.is}):c.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?c.createElement(i,{is:n.is}):c.createElement(i)}}s[qe]=l,s[We]=n;e:for(c=l.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===l)break e;for(;c.sibling===null;){if(c.return===null||c.return===l)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}l.stateNode=s;e:switch(Ze(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Kl(l)}}return ye(l),Uc(l,l.type,e===null?null:e.memoizedProps,l.pendingProps,a),null;case 6:if(e&&l.stateNode!=null)e.memoizedProps!==n&&Kl(l);else{if(typeof n!="string"&&l.stateNode===null)throw Error(d(166));if(e=te.current,fa(l)){if(e=l.stateNode,a=l.memoizedProps,n=null,i=Ye,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[qe]=l,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||uh(e.nodeValue,a)),e||dt(l,!0)}else e=Yi(e).createTextNode(n),e[qe]=l,l.stateNode=e}return ye(l),null;case 31:if(a=l.memoizedState,e===null||e.memoizedState!==null){if(n=fa(l),a!==null){if(e===null){if(!n)throw Error(d(318));if(e=l.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[qe]=l}else Gt(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;ye(l),e=!1}else a=Js(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return l.flags&256?(ul(l),l):(ul(l),null);if((l.flags&128)!==0)throw Error(d(558))}return ye(l),null;case 13:if(n=l.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=fa(l),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(d(318));if(i=l.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(d(317));i[qe]=l}else Gt(),(l.flags&128)===0&&(l.memoizedState=null),l.flags|=4;ye(l),i=!1}else i=Js(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return l.flags&256?(ul(l),l):(ul(l),null)}return ul(l),(l.flags&128)!==0?(l.lanes=a,l):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=l.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==e&&a&&(l.child.flags|=8192),ki(l,l.updateQueue),ye(l),null);case 4:return Ae(),e===null&&sr(l.stateNode.containerInfo),ye(l),null;case 10:return Xl(l.type),ye(l),null;case 19:if(D(we),n=l.memoizedState,n===null)return ye(l),null;if(i=(l.flags&128)!==0,s=n.rendering,s===null)if(i)fn(n,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=l.child;e!==null;){if(s=xi(e),s!==null){for(l.flags|=128,fn(n,!1),e=s.updateQueue,l.updateQueue=e,ki(l,e),l.subtreeFlags=0,e=a,a=l.child;a!==null;)Yd(a,e),a=a.sibling;return B(we,we.current&1|2),ce&&ql(l,n.treeForkCount),l.child}e=e.sibling}n.tail!==null&&il()>Ri&&(l.flags|=128,i=!0,fn(n,!1),l.lanes=4194304)}else{if(!i)if(e=xi(s),e!==null){if(l.flags|=128,i=!0,e=e.updateQueue,l.updateQueue=e,ki(l,e),fn(n,!0),n.tail===null&&n.tailMode==="hidden"&&!s.alternate&&!ce)return ye(l),null}else 2*il()-n.renderingStartTime>Ri&&a!==536870912&&(l.flags|=128,i=!0,fn(n,!1),l.lanes=4194304);n.isBackwards?(s.sibling=l.child,l.child=s):(e=n.last,e!==null?e.sibling=s:l.child=s,n.last=s)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=il(),e.sibling=null,a=we.current,B(we,i?a&1|2:a&1),ce&&ql(l,n.treeForkCount),e):(ye(l),null);case 22:case 23:return ul(l),cc(),n=l.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(l.flags|=8192):n&&(l.flags|=8192),n?(a&536870912)!==0&&(l.flags&128)===0&&(ye(l),l.subtreeFlags&6&&(l.flags|=8192)):ye(l),a=l.updateQueue,a!==null&&ki(l,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(n=l.memoizedState.cachePool.pool),n!==a&&(l.flags|=2048),e!==null&&D(Xt),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),l.memoizedState.cache!==a&&(l.flags|=2048),Xl(Re),ye(l),null;case 25:return null;case 30:return null}throw Error(d(156,l.tag))}function Wx(e,l){switch(Vs(l),l.tag){case 1:return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 3:return Xl(Re),Ae(),e=l.flags,(e&65536)!==0&&(e&128)===0?(l.flags=e&-65537|128,l):null;case 26:case 27:case 5:return Un(l),null;case 31:if(l.memoizedState!==null){if(ul(l),l.alternate===null)throw Error(d(340));Gt()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 13:if(ul(l),e=l.memoizedState,e!==null&&e.dehydrated!==null){if(l.alternate===null)throw Error(d(340));Gt()}return e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 19:return D(we),null;case 4:return Ae(),null;case 10:return Xl(l.type),null;case 22:case 23:return ul(l),cc(),e!==null&&D(Xt),e=l.flags,e&65536?(l.flags=e&-65537|128,l):null;case 24:return Xl(Re),null;case 25:return null;default:return null}}function mu(e,l){switch(Vs(l),l.tag){case 3:Xl(Re),Ae();break;case 26:case 27:case 5:Un(l);break;case 4:Ae();break;case 31:l.memoizedState!==null&&ul(l);break;case 13:ul(l);break;case 19:D(we);break;case 10:Xl(l.type);break;case 22:case 23:ul(l),cc(),e!==null&&D(Xt);break;case 24:Xl(Re)}}function xn(e,l){try{var a=l.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var s=a.create,c=a.inst;n=s(),c.destroy=n}a=a.next}while(a!==i)}}catch(u){fe(l,l.return,u)}}function mt(e,l,a){try{var n=l.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){var c=n.inst,u=c.destroy;if(u!==void 0){c.destroy=void 0,i=l;var p=a,N=u;try{N()}catch(w){fe(i,p,w)}}}n=n.next}while(n!==s)}}catch(w){fe(l,l.return,w)}}function ju(e){var l=e.updateQueue;if(l!==null){var a=e.stateNode;try{so(l,a)}catch(n){fe(e,e.return,n)}}}function gu(e,l,a){a.props=Jt(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){fe(e,l,n)}}function pn(e,l){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){fe(e,l,i)}}function Rl(e,l){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){fe(e,l,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){fe(e,l,i)}else a.current=null}function vu(e){var l=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(l){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){fe(e,e.return,i)}}function Lc(e,l,a){try{var n=e.stateNode;gp(n,e.type,a,l),n[We]=l}catch(i){fe(e,e.return,i)}}function bu(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Nt(e.type)||e.tag===4}function Gc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Nt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qc(e,l,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,l?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,l):(l=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,l.appendChild(e),a=a._reactRootContainer,a!=null||l.onclick!==null||(l.onclick=Ul));else if(n!==4&&(n===27&&Nt(e.type)&&(a=e.stateNode,l=null),e=e.child,e!==null))for(qc(e,l,a),e=e.sibling;e!==null;)qc(e,l,a),e=e.sibling}function zi(e,l,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,l?a.insertBefore(e,l):a.appendChild(e);else if(n!==4&&(n===27&&Nt(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(zi(e,l,a),e=e.sibling;e!==null;)zi(e,l,a),e=e.sibling}function yu(e){var l=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=l.attributes;i.length;)l.removeAttributeNode(i[0]);Ze(l,n,a),l[qe]=e,l[We]=a}catch(s){fe(e,e.return,s)}}var Jl=!1,_e=!1,Yc=!1,Su=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function $x(e,l){if(e=e.containerInfo,dr=Fi,e=Od(e),_s(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{a.nodeType,s.nodeType}catch{a=null;break e}var c=0,u=-1,p=-1,N=0,w=0,O=e,E=null;l:for(;;){for(var z;O!==a||i!==0&&O.nodeType!==3||(u=c+i),O!==s||n!==0&&O.nodeType!==3||(p=c+n),O.nodeType===3&&(c+=O.nodeValue.length),(z=O.firstChild)!==null;)E=O,O=z;for(;;){if(O===e)break l;if(E===a&&++N===i&&(u=c),E===s&&++w===n&&(p=c),(z=O.nextSibling)!==null)break;O=E,E=O.parentNode}O=z}a=u===-1||p===-1?null:{start:u,end:p}}else a=null}a=a||{start:0,end:0}}else a=null;for(or={focusedElem:e,selectionRange:a},Fi=!1,Ge=l;Ge!==null;)if(l=Ge,e=l.child,(l.subtreeFlags&1028)!==0&&e!==null)e.return=l,Ge=e;else for(;Ge!==null;){switch(l=Ge,s=l.alternate,e=l.flags,l.tag){case 0:if((e&4)!==0&&(e=l.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&s!==null){e=void 0,a=l,i=s.memoizedProps,s=s.memoizedState,n=a.stateNode;try{var U=Jt(a.type,i);e=n.getSnapshotBeforeUpdate(U,s),n.__reactInternalSnapshotBeforeUpdate=e}catch(K){fe(a,a.return,K)}}break;case 3:if((e&1024)!==0){if(e=l.stateNode.containerInfo,a=e.nodeType,a===9)fr(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":fr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=l.sibling,e!==null){e.return=l.return,Ge=e;break}Ge=l.return}}function Nu(e,l,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Wl(e,a),n&4&&xn(5,a);break;case 1:if(Wl(e,a),n&4)if(e=a.stateNode,l===null)try{e.componentDidMount()}catch(c){fe(a,a.return,c)}else{var i=Jt(a.type,l.memoizedProps);l=l.memoizedState;try{e.componentDidUpdate(i,l,e.__reactInternalSnapshotBeforeUpdate)}catch(c){fe(a,a.return,c)}}n&64&&ju(a),n&512&&pn(a,a.return);break;case 3:if(Wl(e,a),n&64&&(e=a.updateQueue,e!==null)){if(l=null,a.child!==null)switch(a.child.tag){case 27:case 5:l=a.child.stateNode;break;case 1:l=a.child.stateNode}try{so(e,l)}catch(c){fe(a,a.return,c)}}break;case 27:l===null&&n&4&&yu(a);case 26:case 5:Wl(e,a),l===null&&n&4&&vu(a),n&512&&pn(a,a.return);break;case 12:Wl(e,a);break;case 31:Wl(e,a),n&4&&Tu(e,a);break;case 13:Wl(e,a),n&4&&ku(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=sp.bind(null,a),Tp(e,a))));break;case 22:if(n=a.memoizedState!==null||Jl,!n){l=l!==null&&l.memoizedState!==null||_e,i=Jl;var s=_e;Jl=n,(_e=l)&&!s?$l(e,a,(a.subtreeFlags&8772)!==0):Wl(e,a),Jl=i,_e=s}break;case 30:break;default:Wl(e,a)}}function Cu(e){var l=e.alternate;l!==null&&(e.alternate=null,Cu(l)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(l=e.stateNode,l!==null&&gs(l)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ne=null,Ie=!1;function Fl(e,l,a){for(a=a.child;a!==null;)Eu(e,l,a),a=a.sibling}function Eu(e,l,a){if(sl&&typeof sl.onCommitFiberUnmount=="function")try{sl.onCommitFiberUnmount(Ua,a)}catch{}switch(a.tag){case 26:_e||Rl(a,l),Fl(e,l,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:_e||Rl(a,l);var n=Ne,i=Ie;Nt(a.type)&&(Ne=a.stateNode,Ie=!1),Fl(e,l,a),Cn(a.stateNode),Ne=n,Ie=i;break;case 5:_e||Rl(a,l);case 6:if(n=Ne,i=Ie,Ne=null,Fl(e,l,a),Ne=n,Ie=i,Ne!==null)if(Ie)try{(Ne.nodeType===9?Ne.body:Ne.nodeName==="HTML"?Ne.ownerDocument.body:Ne).removeChild(a.stateNode)}catch(s){fe(a,l,s)}else try{Ne.removeChild(a.stateNode)}catch(s){fe(a,l,s)}break;case 18:Ne!==null&&(Ie?(e=Ne,jh(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Da(e)):jh(Ne,a.stateNode));break;case 4:n=Ne,i=Ie,Ne=a.stateNode.containerInfo,Ie=!0,Fl(e,l,a),Ne=n,Ie=i;break;case 0:case 11:case 14:case 15:mt(2,a,l),_e||mt(4,a,l),Fl(e,l,a);break;case 1:_e||(Rl(a,l),n=a.stateNode,typeof n.componentWillUnmount=="function"&&gu(a,l,n)),Fl(e,l,a);break;case 21:Fl(e,l,a);break;case 22:_e=(n=_e)||a.memoizedState!==null,Fl(e,l,a),_e=n;break;default:Fl(e,l,a)}}function Tu(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Da(e)}catch(a){fe(l,l.return,a)}}}function ku(e,l){if(l.memoizedState===null&&(e=l.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Da(e)}catch(a){fe(l,l.return,a)}}function Ix(e){switch(e.tag){case 31:case 13:case 19:var l=e.stateNode;return l===null&&(l=e.stateNode=new Su),l;case 22:return e=e.stateNode,l=e._retryCache,l===null&&(l=e._retryCache=new Su),l;default:throw Error(d(435,e.tag))}}function Ai(e,l){var a=Ix(e);l.forEach(function(n){if(!a.has(n)){a.add(n);var i=cp.bind(null,e,n);n.then(i,i)}})}function Pe(e,l){var a=l.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],s=e,c=l,u=c;e:for(;u!==null;){switch(u.tag){case 27:if(Nt(u.type)){Ne=u.stateNode,Ie=!1;break e}break;case 5:Ne=u.stateNode,Ie=!1;break e;case 3:case 4:Ne=u.stateNode.containerInfo,Ie=!0;break e}u=u.return}if(Ne===null)throw Error(d(160));Eu(s,c,i),Ne=null,Ie=!1,s=i.alternate,s!==null&&(s.return=null),i.return=null}if(l.subtreeFlags&13886)for(l=l.child;l!==null;)zu(l,e),l=l.sibling}var zl=null;function zu(e,l){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Pe(l,e),el(e),n&4&&(mt(3,e,e.return),xn(3,e),mt(5,e,e.return));break;case 1:Pe(l,e),el(e),n&512&&(_e||a===null||Rl(a,a.return)),n&64&&Jl&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=zl;if(Pe(l,e),el(e),n&512&&(_e||a===null||Rl(a,a.return)),n&4){var s=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;l:switch(n){case"title":s=i.getElementsByTagName("title")[0],(!s||s[qa]||s[qe]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=i.createElement(n),i.head.insertBefore(s,i.querySelector("head > title"))),Ze(s,n,a),s[qe]=e,Le(s),n=s;break e;case"link":var c=zh("link","href",i).get(n+(a.href||""));if(c){for(var u=0;u<c.length;u++)if(s=c[u],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(u,1);break l}}s=i.createElement(n),Ze(s,n,a),i.head.appendChild(s);break;case"meta":if(c=zh("meta","content",i).get(n+(a.content||""))){for(u=0;u<c.length;u++)if(s=c[u],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(u,1);break l}}s=i.createElement(n),Ze(s,n,a),i.head.appendChild(s);break;default:throw Error(d(468,n))}s[qe]=e,Le(s),n=s}e.stateNode=n}else Ah(i,e.type,e.stateNode);else e.stateNode=kh(i,n,e.memoizedProps);else s!==n?(s===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):s.count--,n===null?Ah(i,e.type,e.stateNode):kh(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&Lc(e,e.memoizedProps,a.memoizedProps)}break;case 27:Pe(l,e),el(e),n&512&&(_e||a===null||Rl(a,a.return)),a!==null&&n&4&&Lc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Pe(l,e),el(e),n&512&&(_e||a===null||Rl(a,a.return)),e.flags&32){i=e.stateNode;try{aa(i,"")}catch(U){fe(e,e.return,U)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,Lc(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Yc=!0);break;case 6:if(Pe(l,e),el(e),n&4){if(e.stateNode===null)throw Error(d(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(U){fe(e,e.return,U)}}break;case 3:if(Zi=null,i=zl,zl=Xi(l.containerInfo),Pe(l,e),zl=i,el(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Da(l.containerInfo)}catch(U){fe(e,e.return,U)}Yc&&(Yc=!1,Au(e));break;case 4:n=zl,zl=Xi(e.stateNode.containerInfo),Pe(l,e),el(e),zl=n;break;case 12:Pe(l,e),el(e);break;case 31:Pe(l,e),el(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ai(e,n)));break;case 13:Pe(l,e),el(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Mi=il()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ai(e,n)));break;case 22:i=e.memoizedState!==null;var p=a!==null&&a.memoizedState!==null,N=Jl,w=_e;if(Jl=N||i,_e=w||p,Pe(l,e),_e=w,Jl=N,el(e),n&8192)e:for(l=e.stateNode,l._visibility=i?l._visibility&-2:l._visibility|1,i&&(a===null||p||Jl||_e||Ft(e)),a=null,l=e;;){if(l.tag===5||l.tag===26){if(a===null){p=a=l;try{if(s=p.stateNode,i)c=s.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none";else{u=p.stateNode;var O=p.memoizedProps.style,E=O!=null&&O.hasOwnProperty("display")?O.display:null;u.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(U){fe(p,p.return,U)}}}else if(l.tag===6){if(a===null){p=l;try{p.stateNode.nodeValue=i?"":p.memoizedProps}catch(U){fe(p,p.return,U)}}}else if(l.tag===18){if(a===null){p=l;try{var z=p.stateNode;i?gh(z,!0):gh(p.stateNode,!1)}catch(U){fe(p,p.return,U)}}}else if((l.tag!==22&&l.tag!==23||l.memoizedState===null||l===e)&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===e)break e;for(;l.sibling===null;){if(l.return===null||l.return===e)break e;a===l&&(a=null),l=l.return}a===l&&(a=null),l.sibling.return=l.return,l=l.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ai(e,a))));break;case 19:Pe(l,e),el(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ai(e,n)));break;case 30:break;case 21:break;default:Pe(l,e),el(e)}}function el(e){var l=e.flags;if(l&2){try{for(var a,n=e.return;n!==null;){if(bu(n)){a=n;break}n=n.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var i=a.stateNode,s=Gc(e);zi(e,s,i);break;case 5:var c=a.stateNode;a.flags&32&&(aa(c,""),a.flags&=-33);var u=Gc(e);zi(e,u,c);break;case 3:case 4:var p=a.stateNode.containerInfo,N=Gc(e);qc(e,N,p);break;default:throw Error(d(161))}}catch(w){fe(e,e.return,w)}e.flags&=-3}l&4096&&(e.flags&=-4097)}function Au(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var l=e;Au(l),l.tag===5&&l.flags&1024&&l.stateNode.reset(),e=e.sibling}}function Wl(e,l){if(l.subtreeFlags&8772)for(l=l.child;l!==null;)Nu(e,l.alternate,l),l=l.sibling}function Ft(e){for(e=e.child;e!==null;){var l=e;switch(l.tag){case 0:case 11:case 14:case 15:mt(4,l,l.return),Ft(l);break;case 1:Rl(l,l.return);var a=l.stateNode;typeof a.componentWillUnmount=="function"&&gu(l,l.return,a),Ft(l);break;case 27:Cn(l.stateNode);case 26:case 5:Rl(l,l.return),Ft(l);break;case 22:l.memoizedState===null&&Ft(l);break;case 30:Ft(l);break;default:Ft(l)}e=e.sibling}}function $l(e,l,a){for(a=a&&(l.subtreeFlags&8772)!==0,l=l.child;l!==null;){var n=l.alternate,i=e,s=l,c=s.flags;switch(s.tag){case 0:case 11:case 15:$l(i,s,a),xn(4,s);break;case 1:if($l(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(N){fe(n,n.return,N)}if(n=s,i=n.updateQueue,i!==null){var u=n.stateNode;try{var p=i.shared.hiddenCallbacks;if(p!==null)for(i.shared.hiddenCallbacks=null,i=0;i<p.length;i++)io(p[i],u)}catch(N){fe(n,n.return,N)}}a&&c&64&&ju(s),pn(s,s.return);break;case 27:yu(s);case 26:case 5:$l(i,s,a),a&&n===null&&c&4&&vu(s),pn(s,s.return);break;case 12:$l(i,s,a);break;case 31:$l(i,s,a),a&&c&4&&Tu(i,s);break;case 13:$l(i,s,a),a&&c&4&&ku(i,s);break;case 22:s.memoizedState===null&&$l(i,s,a),pn(s,s.return);break;case 30:break;default:$l(i,s,a)}l=l.sibling}}function Xc(e,l){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(e=l.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&en(a))}function Qc(e,l){e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&en(e))}function Al(e,l,a,n){if(l.subtreeFlags&10256)for(l=l.child;l!==null;)wu(e,l,a,n),l=l.sibling}function wu(e,l,a,n){var i=l.flags;switch(l.tag){case 0:case 11:case 15:Al(e,l,a,n),i&2048&&xn(9,l);break;case 1:Al(e,l,a,n);break;case 3:Al(e,l,a,n),i&2048&&(e=null,l.alternate!==null&&(e=l.alternate.memoizedState.cache),l=l.memoizedState.cache,l!==e&&(l.refCount++,e!=null&&en(e)));break;case 12:if(i&2048){Al(e,l,a,n),e=l.stateNode;try{var s=l.memoizedProps,c=s.id,u=s.onPostCommit;typeof u=="function"&&u(c,l.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(p){fe(l,l.return,p)}}else Al(e,l,a,n);break;case 31:Al(e,l,a,n);break;case 13:Al(e,l,a,n);break;case 23:break;case 22:s=l.stateNode,c=l.alternate,l.memoizedState!==null?s._visibility&2?Al(e,l,a,n):mn(e,l):s._visibility&2?Al(e,l,a,n):(s._visibility|=2,Na(e,l,a,n,(l.subtreeFlags&10256)!==0||!1)),i&2048&&Xc(c,l);break;case 24:Al(e,l,a,n),i&2048&&Qc(l.alternate,l);break;default:Al(e,l,a,n)}}function Na(e,l,a,n,i){for(i=i&&((l.subtreeFlags&10256)!==0||!1),l=l.child;l!==null;){var s=e,c=l,u=a,p=n,N=c.flags;switch(c.tag){case 0:case 11:case 15:Na(s,c,u,p,i),xn(8,c);break;case 23:break;case 22:var w=c.stateNode;c.memoizedState!==null?w._visibility&2?Na(s,c,u,p,i):mn(s,c):(w._visibility|=2,Na(s,c,u,p,i)),i&&N&2048&&Xc(c.alternate,c);break;case 24:Na(s,c,u,p,i),i&&N&2048&&Qc(c.alternate,c);break;default:Na(s,c,u,p,i)}l=l.sibling}}function mn(e,l){if(l.subtreeFlags&10256)for(l=l.child;l!==null;){var a=e,n=l,i=n.flags;switch(n.tag){case 22:mn(a,n),i&2048&&Xc(n.alternate,n);break;case 24:mn(a,n),i&2048&&Qc(n.alternate,n);break;default:mn(a,n)}l=l.sibling}}var jn=8192;function Ca(e,l,a){if(e.subtreeFlags&jn)for(e=e.child;e!==null;)Mu(e,l,a),e=e.sibling}function Mu(e,l,a){switch(e.tag){case 26:Ca(e,l,a),e.flags&jn&&e.memoizedState!==null&&Up(a,zl,e.memoizedState,e.memoizedProps);break;case 5:Ca(e,l,a);break;case 3:case 4:var n=zl;zl=Xi(e.stateNode.containerInfo),Ca(e,l,a),zl=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=jn,jn=16777216,Ca(e,l,a),jn=n):Ca(e,l,a));break;default:Ca(e,l,a)}}function Ru(e){var l=e.alternate;if(l!==null&&(e=l.child,e!==null)){l.child=null;do l=e.sibling,e.sibling=null,e=l;while(e!==null)}}function gn(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];Ge=n,Du(n,e)}Ru(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Ou(e),e=e.sibling}function Ou(e){switch(e.tag){case 0:case 11:case 15:gn(e),e.flags&2048&&mt(9,e,e.return);break;case 3:gn(e);break;case 12:gn(e);break;case 22:var l=e.stateNode;e.memoizedState!==null&&l._visibility&2&&(e.return===null||e.return.tag!==13)?(l._visibility&=-3,wi(e)):gn(e);break;default:gn(e)}}function wi(e){var l=e.deletions;if((e.flags&16)!==0){if(l!==null)for(var a=0;a<l.length;a++){var n=l[a];Ge=n,Du(n,e)}Ru(e)}for(e=e.child;e!==null;){switch(l=e,l.tag){case 0:case 11:case 15:mt(8,l,l.return),wi(l);break;case 22:a=l.stateNode,a._visibility&2&&(a._visibility&=-3,wi(l));break;default:wi(l)}e=e.sibling}}function Du(e,l){for(;Ge!==null;){var a=Ge;switch(a.tag){case 0:case 11:case 15:mt(8,a,l);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:en(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Ge=n;else e:for(a=e;Ge!==null;){n=Ge;var i=n.sibling,s=n.return;if(Cu(n),n===a){Ge=null;break e}if(i!==null){i.return=s,Ge=i;break e}Ge=s}}}var Px={getCacheForType:function(e){var l=Xe(Re),a=l.data.get(e);return a===void 0&&(a=e(),l.data.set(e,a)),a},cacheSignal:function(){return Xe(Re).controller.signal}},ep=typeof WeakMap=="function"?WeakMap:Map,oe=0,ve=null,ae=null,ie=0,he=0,hl=null,jt=!1,Ea=!1,Zc=!1,Il=0,ze=0,gt=0,Wt=0,Vc=0,fl=0,Ta=0,vn=null,ll=null,Kc=!1,Mi=0,_u=0,Ri=1/0,Oi=null,vt=null,Ue=0,bt=null,ka=null,Pl=0,Jc=0,Fc=null,Hu=null,bn=0,Wc=null;function xl(){return(oe&2)!==0&&ie!==0?ie&-ie:M.T!==null?tr():$r()}function Bu(){if(fl===0)if((ie&536870912)===0||ce){var e=qn;qn<<=1,(qn&3932160)===0&&(qn=262144),fl=e}else fl=536870912;return e=ol.current,e!==null&&(e.flags|=32),fl}function tl(e,l,a){(e===ve&&(he===2||he===9)||e.cancelPendingCommit!==null)&&(za(e,0),yt(e,ie,fl,!1)),Ga(e,a),((oe&2)===0||e!==ve)&&(e===ve&&((oe&2)===0&&(Wt|=a),ze===4&&yt(e,ie,fl,!1)),Ol(e))}function Uu(e,l,a){if((oe&6)!==0)throw Error(d(327));var n=!a&&(l&127)===0&&(l&e.expiredLanes)===0||La(e,l),i=n?ap(e,l):Ic(e,l,!0),s=n;do{if(i===0){Ea&&!n&&yt(e,l,0,!1);break}else{if(a=e.current.alternate,s&&!lp(a)){i=Ic(e,l,!1),s=!1;continue}if(i===2){if(s=l,e.errorRecoveryDisabledLanes&s)var c=0;else c=e.pendingLanes&-536870913,c=c!==0?c:c&536870912?536870912:0;if(c!==0){l=c;e:{var u=e;i=vn;var p=u.current.memoizedState.isDehydrated;if(p&&(za(u,c).flags|=256),c=Ic(u,c,!1),c!==2){if(Zc&&!p){u.errorRecoveryDisabledLanes|=s,Wt|=s,i=4;break e}s=ll,ll=i,s!==null&&(ll===null?ll=s:ll.push.apply(ll,s))}i=c}if(s=!1,i!==2)continue}}if(i===1){za(e,0),yt(e,l,0,!0);break}e:{switch(n=e,s=i,s){case 0:case 1:throw Error(d(345));case 4:if((l&4194048)!==l)break;case 6:yt(n,l,fl,!jt);break e;case 2:ll=null;break;case 3:case 5:break;default:throw Error(d(329))}if((l&62914560)===l&&(i=Mi+300-il(),10<i)){if(yt(n,l,fl,!jt),Xn(n,0,!0)!==0)break e;Pl=l,n.timeoutHandle=ph(Lu.bind(null,n,a,ll,Oi,Kc,l,fl,Wt,Ta,jt,s,"Throttled",-0,0),i);break e}Lu(n,a,ll,Oi,Kc,l,fl,Wt,Ta,jt,s,null,-0,0)}}break}while(!0);Ol(e)}function Lu(e,l,a,n,i,s,c,u,p,N,w,O,E,z){if(e.timeoutHandle=-1,O=l.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ul},Mu(l,s,O);var U=(s&62914560)===s?Mi-il():(s&4194048)===s?_u-il():0;if(U=Lp(O,U),U!==null){Pl=s,e.cancelPendingCommit=U(Ku.bind(null,e,l,s,a,n,i,c,u,p,w,O,null,E,z)),yt(e,s,c,!N);return}}Ku(e,l,s,a,n,i,c,u,p)}function lp(e){for(var l=e;;){var a=l.tag;if((a===0||a===11||a===15)&&l.flags&16384&&(a=l.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!rl(s(),i))return!1}catch{return!1}}if(a=l.child,l.subtreeFlags&16384&&a!==null)a.return=l,l=a;else{if(l===e)break;for(;l.sibling===null;){if(l.return===null||l.return===e)return!0;l=l.return}l.sibling.return=l.return,l=l.sibling}}return!0}function yt(e,l,a,n){l&=~Vc,l&=~Wt,e.suspendedLanes|=l,e.pingedLanes&=~l,n&&(e.warmLanes|=l),n=e.expirationTimes;for(var i=l;0<i;){var s=31-cl(i),c=1<<s;n[s]=-1,i&=~c}a!==0&&Jr(e,a,l)}function Di(){return(oe&6)===0?(yn(0),!1):!0}function $c(){if(ae!==null){if(he===0)var e=ae.return;else e=ae,Yl=qt=null,fc(e),ga=null,tn=0,e=ae;for(;e!==null;)mu(e.alternate,e),e=e.return;ae=null}}function za(e,l){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yp(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Pl=0,$c(),ve=e,ae=a=Gl(e.current,null),ie=l,he=0,hl=null,jt=!1,Ea=La(e,l),Zc=!1,Ta=fl=Vc=Wt=gt=ze=0,ll=vn=null,Kc=!1,(l&8)!==0&&(l|=l&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=l;0<n;){var i=31-cl(n),s=1<<i;l|=e[i],n&=~s}return Il=l,li(),a}function Gu(e,l){P=null,M.H=un,l===ja||l===di?(l=lo(),he=3):l===lc?(l=lo(),he=4):he=l===Ac?8:l!==null&&typeof l=="object"&&typeof l.then=="function"?6:1,hl=l,ae===null&&(ze=1,Ni(e,vl(l,e.current)))}function qu(){var e=ol.current;return e===null?!0:(ie&4194048)===ie?Nl===null:(ie&62914560)===ie||(ie&536870912)!==0?e===Nl:!1}function Yu(){var e=M.H;return M.H=un,e===null?un:e}function Xu(){var e=M.A;return M.A=Px,e}function _i(){ze=4,jt||(ie&4194048)!==ie&&ol.current!==null||(Ea=!0),(gt&134217727)===0&&(Wt&134217727)===0||ve===null||yt(ve,ie,fl,!1)}function Ic(e,l,a){var n=oe;oe|=2;var i=Yu(),s=Xu();(ve!==e||ie!==l)&&(Oi=null,za(e,l)),l=!1;var c=ze;e:do try{if(he!==0&&ae!==null){var u=ae,p=hl;switch(he){case 8:$c(),c=6;break e;case 3:case 2:case 9:case 6:ol.current===null&&(l=!0);var N=he;if(he=0,hl=null,Aa(e,u,p,N),a&&Ea){c=0;break e}break;default:N=he,he=0,hl=null,Aa(e,u,p,N)}}tp(),c=ze;break}catch(w){Gu(e,w)}while(!0);return l&&e.shellSuspendCounter++,Yl=qt=null,oe=n,M.H=i,M.A=s,ae===null&&(ve=null,ie=0,li()),c}function tp(){for(;ae!==null;)Qu(ae)}function ap(e,l){var a=oe;oe|=2;var n=Yu(),i=Xu();ve!==e||ie!==l?(Oi=null,Ri=il()+500,za(e,l)):Ea=La(e,l);e:do try{if(he!==0&&ae!==null){l=ae;var s=hl;l:switch(he){case 1:he=0,hl=null,Aa(e,l,s,1);break;case 2:case 9:if(Pd(s)){he=0,hl=null,Zu(l);break}l=function(){he!==2&&he!==9||ve!==e||(he=7),Ol(e)},s.then(l,l);break e;case 3:he=7;break e;case 4:he=5;break e;case 7:Pd(s)?(he=0,hl=null,Zu(l)):(he=0,hl=null,Aa(e,l,s,7));break;case 5:var c=null;switch(ae.tag){case 26:c=ae.memoizedState;case 5:case 27:var u=ae;if(c?wh(c):u.stateNode.complete){he=0,hl=null;var p=u.sibling;if(p!==null)ae=p;else{var N=u.return;N!==null?(ae=N,Hi(N)):ae=null}break l}}he=0,hl=null,Aa(e,l,s,5);break;case 6:he=0,hl=null,Aa(e,l,s,6);break;case 8:$c(),ze=6;break e;default:throw Error(d(462))}}np();break}catch(w){Gu(e,w)}while(!0);return Yl=qt=null,M.H=n,M.A=i,oe=a,ae!==null?0:(ve=null,ie=0,li(),ze)}function np(){for(;ae!==null&&!kf();)Qu(ae)}function Qu(e){var l=xu(e.alternate,e,Il);e.memoizedProps=e.pendingProps,l===null?Hi(e):ae=l}function Zu(e){var l=e,a=l.alternate;switch(l.tag){case 15:case 0:l=ru(a,l,l.pendingProps,l.type,void 0,ie);break;case 11:l=ru(a,l,l.pendingProps,l.type.render,l.ref,ie);break;case 5:fc(l);default:mu(a,l),l=ae=Yd(l,Il),l=xu(a,l,Il)}e.memoizedProps=e.pendingProps,l===null?Hi(e):ae=l}function Aa(e,l,a,n){Yl=qt=null,fc(l),ga=null,tn=0;var i=l.return;try{if(Vx(e,i,l,a,ie)){ze=1,Ni(e,vl(a,e.current)),ae=null;return}}catch(s){if(i!==null)throw ae=i,s;ze=1,Ni(e,vl(a,e.current)),ae=null;return}l.flags&32768?(ce||n===1?e=!0:Ea||(ie&536870912)!==0?e=!1:(jt=e=!0,(n===2||n===9||n===3||n===6)&&(n=ol.current,n!==null&&n.tag===13&&(n.flags|=16384))),Vu(l,e)):Hi(l)}function Hi(e){var l=e;do{if((l.flags&32768)!==0){Vu(l,jt);return}e=l.return;var a=Fx(l.alternate,l,Il);if(a!==null){ae=a;return}if(l=l.sibling,l!==null){ae=l;return}ae=l=e}while(l!==null);ze===0&&(ze=5)}function Vu(e,l){do{var a=Wx(e.alternate,e);if(a!==null){a.flags&=32767,ae=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!l&&(e=e.sibling,e!==null)){ae=e;return}ae=e=a}while(e!==null);ze=6,ae=null}function Ku(e,l,a,n,i,s,c,u,p){e.cancelPendingCommit=null;do Bi();while(Ue!==0);if((oe&6)!==0)throw Error(d(327));if(l!==null){if(l===e.current)throw Error(d(177));if(s=l.lanes|l.childLanes,s|=Gs,Bf(e,a,s,c,u,p),e===ve&&(ae=ve=null,ie=0),ka=l,bt=e,Pl=a,Jc=s,Fc=i,Hu=n,(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rp(Ln,function(){return Iu(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(l.flags&13878)!==0,(l.subtreeFlags&13878)!==0||n){n=M.T,M.T=null,i=H.p,H.p=2,c=oe,oe|=4;try{$x(e,l,a)}finally{oe=c,H.p=i,M.T=n}}Ue=1,Ju(),Fu(),Wu()}}function Ju(){if(Ue===1){Ue=0;var e=bt,l=ka,a=(l.flags&13878)!==0;if((l.subtreeFlags&13878)!==0||a){a=M.T,M.T=null;var n=H.p;H.p=2;var i=oe;oe|=4;try{zu(l,e);var s=or,c=Od(e.containerInfo),u=s.focusedElem,p=s.selectionRange;if(c!==u&&u&&u.ownerDocument&&Rd(u.ownerDocument.documentElement,u)){if(p!==null&&_s(u)){var N=p.start,w=p.end;if(w===void 0&&(w=N),"selectionStart"in u)u.selectionStart=N,u.selectionEnd=Math.min(w,u.value.length);else{var O=u.ownerDocument||document,E=O&&O.defaultView||window;if(E.getSelection){var z=E.getSelection(),U=u.textContent.length,K=Math.min(p.start,U),je=p.end===void 0?K:Math.min(p.end,U);!z.extend&&K>je&&(c=je,je=K,K=c);var b=Md(u,K),j=Md(u,je);if(b&&j&&(z.rangeCount!==1||z.anchorNode!==b.node||z.anchorOffset!==b.offset||z.focusNode!==j.node||z.focusOffset!==j.offset)){var S=O.createRange();S.setStart(b.node,b.offset),z.removeAllRanges(),K>je?(z.addRange(S),z.extend(j.node,j.offset)):(S.setEnd(j.node,j.offset),z.addRange(S))}}}}for(O=[],z=u;z=z.parentNode;)z.nodeType===1&&O.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<O.length;u++){var R=O[u];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}Fi=!!dr,or=dr=null}finally{oe=i,H.p=n,M.T=a}}e.current=l,Ue=2}}function Fu(){if(Ue===2){Ue=0;var e=bt,l=ka,a=(l.flags&8772)!==0;if((l.subtreeFlags&8772)!==0||a){a=M.T,M.T=null;var n=H.p;H.p=2;var i=oe;oe|=4;try{Nu(e,l.alternate,l)}finally{oe=i,H.p=n,M.T=a}}Ue=3}}function Wu(){if(Ue===4||Ue===3){Ue=0,zf();var e=bt,l=ka,a=Pl,n=Hu;(l.subtreeFlags&10256)!==0||(l.flags&10256)!==0?Ue=5:(Ue=0,ka=bt=null,$u(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(vt=null),ms(a),l=l.stateNode,sl&&typeof sl.onCommitFiberRoot=="function")try{sl.onCommitFiberRoot(Ua,l,void 0,(l.current.flags&128)===128)}catch{}if(n!==null){l=M.T,i=H.p,H.p=2,M.T=null;try{for(var s=e.onRecoverableError,c=0;c<n.length;c++){var u=n[c];s(u.value,{componentStack:u.stack})}}finally{M.T=l,H.p=i}}(Pl&3)!==0&&Bi(),Ol(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Wc?bn++:(bn=0,Wc=e):bn=0,yn(0)}}function $u(e,l){(e.pooledCacheLanes&=l)===0&&(l=e.pooledCache,l!=null&&(e.pooledCache=null,en(l)))}function Bi(){return Ju(),Fu(),Wu(),Iu()}function Iu(){if(Ue!==5)return!1;var e=bt,l=Jc;Jc=0;var a=ms(Pl),n=M.T,i=H.p;try{H.p=32>a?32:a,M.T=null,a=Fc,Fc=null;var s=bt,c=Pl;if(Ue=0,ka=bt=null,Pl=0,(oe&6)!==0)throw Error(d(331));var u=oe;if(oe|=4,Ou(s.current),wu(s,s.current,c,a),oe=u,yn(0,!1),sl&&typeof sl.onPostCommitFiberRoot=="function")try{sl.onPostCommitFiberRoot(Ua,s)}catch{}return!0}finally{H.p=i,M.T=n,$u(e,l)}}function Pu(e,l,a){l=vl(a,l),l=zc(e.stateNode,l,2),e=ft(e,l,2),e!==null&&(Ga(e,2),Ol(e))}function fe(e,l,a){if(e.tag===3)Pu(e,e,a);else for(;l!==null;){if(l.tag===3){Pu(l,e,a);break}else if(l.tag===1){var n=l.stateNode;if(typeof l.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(vt===null||!vt.has(n))){e=vl(a,e),a=eu(2),n=ft(l,a,2),n!==null&&(lu(a,n,l,e),Ga(n,2),Ol(n));break}}l=l.return}}function Pc(e,l,a){var n=e.pingCache;if(n===null){n=e.pingCache=new ep;var i=new Set;n.set(l,i)}else i=n.get(l),i===void 0&&(i=new Set,n.set(l,i));i.has(a)||(Zc=!0,i.add(a),e=ip.bind(null,e,l,a),l.then(e,e))}function ip(e,l,a){var n=e.pingCache;n!==null&&n.delete(l),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ve===e&&(ie&a)===a&&(ze===4||ze===3&&(ie&62914560)===ie&&300>il()-Mi?(oe&2)===0&&za(e,0):Vc|=a,Ta===ie&&(Ta=0)),Ol(e)}function eh(e,l){l===0&&(l=Kr()),e=Ut(e,l),e!==null&&(Ga(e,l),Ol(e))}function sp(e){var l=e.memoizedState,a=0;l!==null&&(a=l.retryLane),eh(e,a)}function cp(e,l){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(d(314))}n!==null&&n.delete(l),eh(e,a)}function rp(e,l){return hs(e,l)}var Ui=null,wa=null,er=!1,Li=!1,lr=!1,St=0;function Ol(e){e!==wa&&e.next===null&&(wa===null?Ui=wa=e:wa=wa.next=e),Li=!0,er||(er=!0,op())}function yn(e,l){if(!lr&&Li){lr=!0;do for(var a=!1,n=Ui;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var c=n.suspendedLanes,u=n.pingedLanes;s=(1<<31-cl(42|e)+1)-1,s&=i&~(c&~u),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,nh(n,s))}else s=ie,s=Xn(n,n===ve?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||La(n,s)||(a=!0,nh(n,s));n=n.next}while(a);lr=!1}}function dp(){lh()}function lh(){Li=er=!1;var e=0;St!==0&&bp()&&(e=St);for(var l=il(),a=null,n=Ui;n!==null;){var i=n.next,s=th(n,l);s===0?(n.next=null,a===null?Ui=i:a.next=i,i===null&&(wa=a)):(a=n,(e!==0||(s&3)!==0)&&(Li=!0)),n=i}Ue!==0&&Ue!==5||yn(e),St!==0&&(St=0)}function th(e,l){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var c=31-cl(s),u=1<<c,p=i[c];p===-1?((u&a)===0||(u&n)!==0)&&(i[c]=Hf(u,l)):p<=l&&(e.expiredLanes|=u),s&=~u}if(l=ve,a=ie,a=Xn(e,e===l?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===l&&(he===2||he===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&fs(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||La(e,a)){if(l=a&-a,l===e.callbackPriority)return l;switch(n!==null&&fs(n),ms(a)){case 2:case 8:a=Zr;break;case 32:a=Ln;break;case 268435456:a=Vr;break;default:a=Ln}return n=ah.bind(null,e),a=hs(a,n),e.callbackPriority=l,e.callbackNode=a,l}return n!==null&&n!==null&&fs(n),e.callbackPriority=2,e.callbackNode=null,2}function ah(e,l){if(Ue!==0&&Ue!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bi()&&e.callbackNode!==a)return null;var n=ie;return n=Xn(e,e===ve?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(Uu(e,n,l),th(e,il()),e.callbackNode!=null&&e.callbackNode===a?ah.bind(null,e):null)}function nh(e,l){if(Bi())return null;Uu(e,l,!0)}function op(){Sp(function(){(oe&6)!==0?hs(Qr,dp):lh()})}function tr(){if(St===0){var e=pa;e===0&&(e=Gn,Gn<<=1,(Gn&261888)===0&&(Gn=256)),St=e}return St}function ih(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kn(""+e)}function sh(e,l){var a=l.ownerDocument.createElement("input");return a.name=l.name,a.value=l.value,e.id&&a.setAttribute("form",e.id),l.parentNode.insertBefore(a,l),e=new FormData(e),a.parentNode.removeChild(a),e}function up(e,l,a,n,i){if(l==="submit"&&a&&a.stateNode===i){var s=ih((i[We]||null).action),c=n.submitter;c&&(l=(l=c[We]||null)?ih(l.formAction):c.getAttribute("formAction"),l!==null&&(s=l,c=null));var u=new $n("action","action",null,n,i);e.push({event:u,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(St!==0){var p=c?sh(i,c):new FormData(i);Sc(a,{pending:!0,data:p,method:i.method,action:s},null,p)}}else typeof s=="function"&&(u.preventDefault(),p=c?sh(i,c):new FormData(i),Sc(a,{pending:!0,data:p,method:i.method,action:s},s,p))},currentTarget:i}]})}}for(var ar=0;ar<Ls.length;ar++){var nr=Ls[ar],hp=nr.toLowerCase(),fp=nr[0].toUpperCase()+nr.slice(1);kl(hp,"on"+fp)}kl(Hd,"onAnimationEnd"),kl(Bd,"onAnimationIteration"),kl(Ud,"onAnimationStart"),kl("dblclick","onDoubleClick"),kl("focusin","onFocus"),kl("focusout","onBlur"),kl(Ax,"onTransitionRun"),kl(wx,"onTransitionStart"),kl(Mx,"onTransitionCancel"),kl(Ld,"onTransitionEnd"),la("onMouseEnter",["mouseout","mouseover"]),la("onMouseLeave",["mouseout","mouseover"]),la("onPointerEnter",["pointerout","pointerover"]),la("onPointerLeave",["pointerout","pointerover"]),Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sn));function ch(e,l){l=(l&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var s=void 0;if(l)for(var c=n.length-1;0<=c;c--){var u=n[c],p=u.instance,N=u.currentTarget;if(u=u.listener,p!==s&&i.isPropagationStopped())break e;s=u,i.currentTarget=N;try{s(i)}catch(w){ei(w)}i.currentTarget=null,s=p}else for(c=0;c<n.length;c++){if(u=n[c],p=u.instance,N=u.currentTarget,u=u.listener,p!==s&&i.isPropagationStopped())break e;s=u,i.currentTarget=N;try{s(i)}catch(w){ei(w)}i.currentTarget=null,s=p}}}}function ne(e,l){var a=l[js];a===void 0&&(a=l[js]=new Set);var n=e+"__bubble";a.has(n)||(rh(l,e,2,!1),a.add(n))}function ir(e,l,a){var n=0;l&&(n|=4),rh(a,e,n,l)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function sr(e){if(!e[Gi]){e[Gi]=!0,ed.forEach(function(a){a!=="selectionchange"&&(xp.has(a)||ir(a,!1,e),ir(a,!0,e))});var l=e.nodeType===9?e:e.ownerDocument;l===null||l[Gi]||(l[Gi]=!0,ir("selectionchange",!1,l))}}function rh(e,l,a,n){switch(Bh(l)){case 2:var i=Yp;break;case 8:i=Xp;break;default:i=yr}a=i.bind(null,l,a,e),i=void 0,!Ts||l!=="touchstart"&&l!=="touchmove"&&l!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(l,a,{capture:!0,passive:i}):e.addEventListener(l,a,!0):i!==void 0?e.addEventListener(l,a,{passive:i}):e.addEventListener(l,a,!1)}function cr(e,l,a,n,i){var s=n;if((l&1)===0&&(l&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var u=n.stateNode.containerInfo;if(u===i)break;if(c===4)for(c=n.return;c!==null;){var p=c.tag;if((p===3||p===4)&&c.stateNode.containerInfo===i)return;c=c.return}for(;u!==null;){if(c=It(u),c===null)return;if(p=c.tag,p===5||p===6||p===26||p===27){n=s=c;continue e}u=u.parentNode}}n=n.return}hd(function(){var N=s,w=Cs(a),O=[];e:{var E=Gd.get(e);if(E!==void 0){var z=$n,U=e;switch(e){case"keypress":if(Fn(a)===0)break e;case"keydown":case"keyup":z=cx;break;case"focusin":U="focus",z=ws;break;case"focusout":U="blur",z=ws;break;case"beforeblur":case"afterblur":z=ws;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=pd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=ox;break;case Hd:case Bd:case Ud:z=If;break;case Ld:z=hx;break;case"scroll":case"scrollend":z=Kf;break;case"wheel":z=xx;break;case"copy":case"cut":case"paste":z=ex;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=jd;break;case"toggle":case"beforetoggle":z=mx}var K=(l&4)!==0,je=!K&&(e==="scroll"||e==="scrollend"),b=K?E!==null?E+"Capture":null:E;K=[];for(var j=N,S;j!==null;){var R=j;if(S=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||S===null||b===null||(R=Xa(j,b),R!=null&&K.push(Nn(j,R,S))),je)break;j=j.return}0<K.length&&(E=new z(E,U,null,a,w),O.push({event:E,listeners:K}))}}if((l&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",z=e==="mouseout"||e==="pointerout",E&&a!==Ns&&(U=a.relatedTarget||a.fromElement)&&(It(U)||U[$t]))break e;if((z||E)&&(E=w.window===w?w:(E=w.ownerDocument)?E.defaultView||E.parentWindow:window,z?(U=a.relatedTarget||a.toElement,z=N,U=U?It(U):null,U!==null&&(je=f(U),K=U.tag,U!==je||K!==5&&K!==27&&K!==6)&&(U=null)):(z=null,U=N),z!==U)){if(K=pd,R="onMouseLeave",b="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(K=jd,R="onPointerLeave",b="onPointerEnter",j="pointer"),je=z==null?E:Ya(z),S=U==null?E:Ya(U),E=new K(R,j+"leave",z,a,w),E.target=je,E.relatedTarget=S,R=null,It(w)===N&&(K=new K(b,j+"enter",U,a,w),K.target=S,K.relatedTarget=je,R=K),je=R,z&&U)l:{for(K=pp,b=z,j=U,S=0,R=b;R;R=K(R))S++;R=0;for(var Z=j;Z;Z=K(Z))R++;for(;0<S-R;)b=K(b),S--;for(;0<R-S;)j=K(j),R--;for(;S--;){if(b===j||j!==null&&b===j.alternate){K=b;break l}b=K(b),j=K(j)}K=null}else K=null;z!==null&&dh(O,E,z,K,!1),U!==null&&je!==null&&dh(O,je,U,K,!0)}}e:{if(E=N?Ya(N):window,z=E.nodeName&&E.nodeName.toLowerCase(),z==="select"||z==="input"&&E.type==="file")var re=Ed;else if(Nd(E))if(Td)re=Tx;else{re=Cx;var q=Nx}else z=E.nodeName,!z||z.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?N&&Ss(N.elementType)&&(re=Ed):re=Ex;if(re&&(re=re(e,N))){Cd(O,re,a,w);break e}q&&q(e,E,N),e==="focusout"&&N&&E.type==="number"&&N.memoizedProps.value!=null&&ys(E,"number",E.value)}switch(q=N?Ya(N):window,e){case"focusin":(Nd(q)||q.contentEditable==="true")&&(ca=q,Hs=N,$a=null);break;case"focusout":$a=Hs=ca=null;break;case"mousedown":Bs=!0;break;case"contextmenu":case"mouseup":case"dragend":Bs=!1,Dd(O,a,w);break;case"selectionchange":if(zx)break;case"keydown":case"keyup":Dd(O,a,w)}var le;if(Rs)e:{switch(e){case"compositionstart":var se="onCompositionStart";break e;case"compositionend":se="onCompositionEnd";break e;case"compositionupdate":se="onCompositionUpdate";break e}se=void 0}else sa?yd(e,a)&&(se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(gd&&a.locale!=="ko"&&(sa||se!=="onCompositionStart"?se==="onCompositionEnd"&&sa&&(le=fd()):(st=w,ks="value"in st?st.value:st.textContent,sa=!0)),q=qi(N,se),0<q.length&&(se=new md(se,e,null,a,w),O.push({event:se,listeners:q}),le?se.data=le:(le=Sd(a),le!==null&&(se.data=le)))),(le=gx?vx(e,a):bx(e,a))&&(se=qi(N,"onBeforeInput"),0<se.length&&(q=new md("onBeforeInput","beforeinput",null,a,w),O.push({event:q,listeners:se}),q.data=le)),up(O,e,N,a,w)}ch(O,l)})}function Nn(e,l,a){return{instance:e,listener:l,currentTarget:a}}function qi(e,l){for(var a=l+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=Xa(e,a),i!=null&&n.unshift(Nn(e,i,s)),i=Xa(e,l),i!=null&&n.push(Nn(e,i,s))),e.tag===3)return n;e=e.return}return[]}function pp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function dh(e,l,a,n,i){for(var s=l._reactName,c=[];a!==null&&a!==n;){var u=a,p=u.alternate,N=u.stateNode;if(u=u.tag,p!==null&&p===n)break;u!==5&&u!==26&&u!==27||N===null||(p=N,i?(N=Xa(a,s),N!=null&&c.unshift(Nn(a,N,p))):i||(N=Xa(a,s),N!=null&&c.push(Nn(a,N,p)))),a=a.return}c.length!==0&&e.push({event:l,listeners:c})}var mp=/\r\n?/g,jp=/\u0000|\uFFFD/g;function oh(e){return(typeof e=="string"?e:""+e).replace(mp,`
`).replace(jp,"")}function uh(e,l){return l=oh(l),oh(e)===l}function me(e,l,a,n,i,s){switch(a){case"children":typeof n=="string"?l==="body"||l==="textarea"&&n===""||aa(e,n):(typeof n=="number"||typeof n=="bigint")&&l!=="body"&&aa(e,""+n);break;case"className":Zn(e,"class",n);break;case"tabIndex":Zn(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Zn(e,a,n);break;case"style":od(e,n,s);break;case"data":if(l!=="object"){Zn(e,"data",n);break}case"src":case"href":if(n===""&&(l!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Kn(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(l!=="input"&&me(e,l,"name",i.name,i,null),me(e,l,"formEncType",i.formEncType,i,null),me(e,l,"formMethod",i.formMethod,i,null),me(e,l,"formTarget",i.formTarget,i,null)):(me(e,l,"encType",i.encType,i,null),me(e,l,"method",i.method,i,null),me(e,l,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Kn(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Ul);break;case"onScroll":n!=null&&ne("scroll",e);break;case"onScrollEnd":n!=null&&ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Kn(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":ne("beforetoggle",e),ne("toggle",e),Qn(e,"popover",n);break;case"xlinkActuate":Bl(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":Bl(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":Bl(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":Bl(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":Bl(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":Bl(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":Bl(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":Bl(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":Bl(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":Qn(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zf.get(a)||a,Qn(e,a,n))}}function rr(e,l,a,n,i,s){switch(a){case"style":od(e,n,s);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(d(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof n=="string"?aa(e,n):(typeof n=="number"||typeof n=="bigint")&&aa(e,""+n);break;case"onScroll":n!=null&&ne("scroll",e);break;case"onScrollEnd":n!=null&&ne("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ld.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),l=a.slice(2,i?a.length-7:void 0),s=e[We]||null,s=s!=null?s[a]:null,typeof s=="function"&&e.removeEventListener(l,s,i),typeof n=="function")){typeof s!="function"&&s!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(l,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):Qn(e,a,n)}}}function Ze(e,l,a){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ne("error",e),ne("load",e);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var c=a[s];if(c!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,l));default:me(e,l,s,c,a,null)}}i&&me(e,l,"srcSet",a.srcSet,a,null),n&&me(e,l,"src",a.src,a,null);return;case"input":ne("invalid",e);var u=s=c=i=null,p=null,N=null;for(n in a)if(a.hasOwnProperty(n)){var w=a[n];if(w!=null)switch(n){case"name":i=w;break;case"type":c=w;break;case"checked":p=w;break;case"defaultChecked":N=w;break;case"value":s=w;break;case"defaultValue":u=w;break;case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(d(137,l));break;default:me(e,l,n,w,a,null)}}sd(e,s,u,p,N,c,i,!1);return;case"select":ne("invalid",e),n=c=s=null;for(i in a)if(a.hasOwnProperty(i)&&(u=a[i],u!=null))switch(i){case"value":s=u;break;case"defaultValue":c=u;break;case"multiple":n=u;default:me(e,l,i,u,a,null)}l=s,a=c,e.multiple=!!n,l!=null?ta(e,!!n,l,!1):a!=null&&ta(e,!!n,a,!0);return;case"textarea":ne("invalid",e),s=i=n=null;for(c in a)if(a.hasOwnProperty(c)&&(u=a[c],u!=null))switch(c){case"value":n=u;break;case"defaultValue":i=u;break;case"children":s=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(d(91));break;default:me(e,l,c,u,a,null)}rd(e,n,i,s);return;case"option":for(p in a)if(a.hasOwnProperty(p)&&(n=a[p],n!=null))switch(p){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:me(e,l,p,n,a,null)}return;case"dialog":ne("beforetoggle",e),ne("toggle",e),ne("cancel",e),ne("close",e);break;case"iframe":case"object":ne("load",e);break;case"video":case"audio":for(n=0;n<Sn.length;n++)ne(Sn[n],e);break;case"image":ne("error",e),ne("load",e);break;case"details":ne("toggle",e);break;case"embed":case"source":case"link":ne("error",e),ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(n=a[N],n!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,l));default:me(e,l,N,n,a,null)}return;default:if(Ss(l)){for(w in a)a.hasOwnProperty(w)&&(n=a[w],n!==void 0&&rr(e,l,w,n,a,void 0));return}}for(u in a)a.hasOwnProperty(u)&&(n=a[u],n!=null&&me(e,l,u,n,a,null))}function gp(e,l,a,n){switch(l){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,c=null,u=null,p=null,N=null,w=null;for(z in a){var O=a[z];if(a.hasOwnProperty(z)&&O!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":p=O;default:n.hasOwnProperty(z)||me(e,l,z,null,n,O)}}for(var E in n){var z=n[E];if(O=a[E],n.hasOwnProperty(E)&&(z!=null||O!=null))switch(E){case"type":s=z;break;case"name":i=z;break;case"checked":N=z;break;case"defaultChecked":w=z;break;case"value":c=z;break;case"defaultValue":u=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(d(137,l));break;default:z!==O&&me(e,l,E,z,n,O)}}bs(e,c,u,p,N,w,s,i);return;case"select":z=c=u=E=null;for(s in a)if(p=a[s],a.hasOwnProperty(s)&&p!=null)switch(s){case"value":break;case"multiple":z=p;default:n.hasOwnProperty(s)||me(e,l,s,null,n,p)}for(i in n)if(s=n[i],p=a[i],n.hasOwnProperty(i)&&(s!=null||p!=null))switch(i){case"value":E=s;break;case"defaultValue":u=s;break;case"multiple":c=s;default:s!==p&&me(e,l,i,s,n,p)}l=u,a=c,n=z,E!=null?ta(e,!!a,E,!1):!!n!=!!a&&(l!=null?ta(e,!!a,l,!0):ta(e,!!a,a?[]:"",!1));return;case"textarea":z=E=null;for(u in a)if(i=a[u],a.hasOwnProperty(u)&&i!=null&&!n.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:me(e,l,u,null,n,i)}for(c in n)if(i=n[c],s=a[c],n.hasOwnProperty(c)&&(i!=null||s!=null))switch(c){case"value":E=i;break;case"defaultValue":z=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(d(91));break;default:i!==s&&me(e,l,c,i,n,s)}cd(e,E,z);return;case"option":for(var U in a)if(E=a[U],a.hasOwnProperty(U)&&E!=null&&!n.hasOwnProperty(U))switch(U){case"selected":e.selected=!1;break;default:me(e,l,U,null,n,E)}for(p in n)if(E=n[p],z=a[p],n.hasOwnProperty(p)&&E!==z&&(E!=null||z!=null))switch(p){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:me(e,l,p,E,n,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var K in a)E=a[K],a.hasOwnProperty(K)&&E!=null&&!n.hasOwnProperty(K)&&me(e,l,K,null,n,E);for(N in n)if(E=n[N],z=a[N],n.hasOwnProperty(N)&&E!==z&&(E!=null||z!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(d(137,l));break;default:me(e,l,N,E,n,z)}return;default:if(Ss(l)){for(var je in a)E=a[je],a.hasOwnProperty(je)&&E!==void 0&&!n.hasOwnProperty(je)&&rr(e,l,je,void 0,n,E);for(w in n)E=n[w],z=a[w],!n.hasOwnProperty(w)||E===z||E===void 0&&z===void 0||rr(e,l,w,E,n,z);return}}for(var b in a)E=a[b],a.hasOwnProperty(b)&&E!=null&&!n.hasOwnProperty(b)&&me(e,l,b,null,n,E);for(O in n)E=n[O],z=a[O],!n.hasOwnProperty(O)||E===z||E==null&&z==null||me(e,l,O,E,n,z)}function hh(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,l=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,c=i.initiatorType,u=i.duration;if(s&&u&&hh(c)){for(c=0,u=i.responseEnd,n+=1;n<a.length;n++){var p=a[n],N=p.startTime;if(N>u)break;var w=p.transferSize,O=p.initiatorType;w&&hh(O)&&(p=p.responseEnd,c+=w*(p<u?1:(u-N)/(p-N)))}if(--n,l+=8*(s+c)/(i.duration/1e3),e++,10<e)break}}if(0<e)return l/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dr=null,or=null;function Yi(e){return e.nodeType===9?e:e.ownerDocument}function fh(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xh(e,l){if(e===0)switch(l){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&l==="foreignObject"?0:e}function ur(e,l){return e==="textarea"||e==="noscript"||typeof l.children=="string"||typeof l.children=="number"||typeof l.children=="bigint"||typeof l.dangerouslySetInnerHTML=="object"&&l.dangerouslySetInnerHTML!==null&&l.dangerouslySetInnerHTML.__html!=null}var hr=null;function bp(){var e=window.event;return e&&e.type==="popstate"?e===hr?!1:(hr=e,!0):(hr=null,!1)}var ph=typeof setTimeout=="function"?setTimeout:void 0,yp=typeof clearTimeout=="function"?clearTimeout:void 0,mh=typeof Promise=="function"?Promise:void 0,Sp=typeof queueMicrotask=="function"?queueMicrotask:typeof mh<"u"?function(e){return mh.resolve(null).then(e).catch(Np)}:ph;function Np(e){setTimeout(function(){throw e})}function Nt(e){return e==="head"}function jh(e,l){var a=l,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Da(l);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")Cn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Cn(a);for(var s=a.firstChild;s;){var c=s.nextSibling,u=s.nodeName;s[qa]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=c}}else a==="body"&&Cn(e.ownerDocument.body);a=i}while(a);Da(l)}function gh(e,l){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?l?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(l?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function fr(e){var l=e.firstChild;for(l&&l.nodeType===10&&(l=l.nextSibling);l;){var a=l;switch(l=l.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":fr(a),gs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Cp(e,l,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==l.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[qa])switch(l){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(l==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Cl(e.nextSibling),e===null)break}return null}function Ep(e,l,a){if(l==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Cl(e.nextSibling),e===null))return null;return e}function vh(e,l){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=Cl(e.nextSibling),e===null))return null;return e}function xr(e){return e.data==="$?"||e.data==="$~"}function pr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tp(e,l){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=l;else if(e.data!=="$?"||a.readyState!=="loading")l();else{var n=function(){l(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Cl(e){for(;e!=null;e=e.nextSibling){var l=e.nodeType;if(l===1||l===3)break;if(l===8){if(l=e.data,l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"||l==="F!"||l==="F")break;if(l==="/$"||l==="/&")return null}}return e}var mr=null;function bh(e){e=e.nextSibling;for(var l=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(l===0)return Cl(e.nextSibling);l--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||l++}e=e.nextSibling}return null}function yh(e){e=e.previousSibling;for(var l=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(l===0)return e;l--}else a!=="/$"&&a!=="/&"||l++}e=e.previousSibling}return null}function Sh(e,l,a){switch(l=Yi(a),e){case"html":if(e=l.documentElement,!e)throw Error(d(452));return e;case"head":if(e=l.head,!e)throw Error(d(453));return e;case"body":if(e=l.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Cn(e){for(var l=e.attributes;l.length;)e.removeAttributeNode(l[0]);gs(e)}var El=new Map,Nh=new Set;function Xi(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var et=H.d;H.d={f:kp,r:zp,D:Ap,C:wp,L:Mp,m:Rp,X:Dp,S:Op,M:_p};function kp(){var e=et.f(),l=Di();return e||l}function zp(e){var l=Pt(e);l!==null&&l.tag===5&&l.type==="form"?Go(l):et.r(e)}var Ma=typeof document>"u"?null:document;function Ch(e,l,a){var n=Ma;if(n&&typeof l=="string"&&l){var i=jl(l);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Nh.has(i)||(Nh.add(i),e={rel:e,crossOrigin:a,href:l},n.querySelector(i)===null&&(l=n.createElement("link"),Ze(l,"link",e),Le(l),n.head.appendChild(l)))}}function Ap(e){et.D(e),Ch("dns-prefetch",e,null)}function wp(e,l){et.C(e,l),Ch("preconnect",e,l)}function Mp(e,l,a){et.L(e,l,a);var n=Ma;if(n&&e&&l){var i='link[rel="preload"][as="'+jl(l)+'"]';l==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+jl(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+jl(a.imageSizes)+'"]')):i+='[href="'+jl(e)+'"]';var s=i;switch(l){case"style":s=Ra(e);break;case"script":s=Oa(e)}El.has(s)||(e=A({rel:"preload",href:l==="image"&&a&&a.imageSrcSet?void 0:e,as:l},a),El.set(s,e),n.querySelector(i)!==null||l==="style"&&n.querySelector(En(s))||l==="script"&&n.querySelector(Tn(s))||(l=n.createElement("link"),Ze(l,"link",e),Le(l),n.head.appendChild(l)))}}function Rp(e,l){et.m(e,l);var a=Ma;if(a&&e){var n=l&&typeof l.as=="string"?l.as:"script",i='link[rel="modulepreload"][as="'+jl(n)+'"][href="'+jl(e)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Oa(e)}if(!El.has(s)&&(e=A({rel:"modulepreload",href:e},l),El.set(s,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Tn(s)))return}n=a.createElement("link"),Ze(n,"link",e),Le(n),a.head.appendChild(n)}}}function Op(e,l,a){et.S(e,l,a);var n=Ma;if(n&&e){var i=ea(n).hoistableStyles,s=Ra(e);l=l||"default";var c=i.get(s);if(!c){var u={loading:0,preload:null};if(c=n.querySelector(En(s)))u.loading=5;else{e=A({rel:"stylesheet",href:e,"data-precedence":l},a),(a=El.get(s))&&jr(e,a);var p=c=n.createElement("link");Le(p),Ze(p,"link",e),p._p=new Promise(function(N,w){p.onload=N,p.onerror=w}),p.addEventListener("load",function(){u.loading|=1}),p.addEventListener("error",function(){u.loading|=2}),u.loading|=4,Qi(c,l,n)}c={type:"stylesheet",instance:c,count:1,state:u},i.set(s,c)}}}function Dp(e,l){et.X(e,l);var a=Ma;if(a&&e){var n=ea(a).hoistableScripts,i=Oa(e),s=n.get(i);s||(s=a.querySelector(Tn(i)),s||(e=A({src:e,async:!0},l),(l=El.get(i))&&gr(e,l),s=a.createElement("script"),Le(s),Ze(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function _p(e,l){et.M(e,l);var a=Ma;if(a&&e){var n=ea(a).hoistableScripts,i=Oa(e),s=n.get(i);s||(s=a.querySelector(Tn(i)),s||(e=A({src:e,async:!0,type:"module"},l),(l=El.get(i))&&gr(e,l),s=a.createElement("script"),Le(s),Ze(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function Eh(e,l,a,n){var i=(i=te.current)?Xi(i):null;if(!i)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(l=Ra(a.href),a=ea(i).hoistableStyles,n=a.get(l),n||(n={type:"style",instance:null,count:0,state:null},a.set(l,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ra(a.href);var s=ea(i).hoistableStyles,c=s.get(e);if(c||(i=i.ownerDocument||i,c={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,c),(s=i.querySelector(En(e)))&&!s._p&&(c.instance=s,c.state.loading=5),El.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},El.set(e,a),s||Hp(i,e,a,c.state))),l&&n===null)throw Error(d(528,""));return c}if(l&&n!==null)throw Error(d(529,""));return null;case"script":return l=a.async,a=a.src,typeof a=="string"&&l&&typeof l!="function"&&typeof l!="symbol"?(l=Oa(a),a=ea(i).hoistableScripts,n=a.get(l),n||(n={type:"script",instance:null,count:0,state:null},a.set(l,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Ra(e){return'href="'+jl(e)+'"'}function En(e){return'link[rel="stylesheet"]['+e+"]"}function Th(e){return A({},e,{"data-precedence":e.precedence,precedence:null})}function Hp(e,l,a,n){e.querySelector('link[rel="preload"][as="style"]['+l+"]")?n.loading=1:(l=e.createElement("link"),n.preload=l,l.addEventListener("load",function(){return n.loading|=1}),l.addEventListener("error",function(){return n.loading|=2}),Ze(l,"link",a),Le(l),e.head.appendChild(l))}function Oa(e){return'[src="'+jl(e)+'"]'}function Tn(e){return"script[async]"+e}function kh(e,l,a){if(l.count++,l.instance===null)switch(l.type){case"style":var n=e.querySelector('style[data-href~="'+jl(a.href)+'"]');if(n)return l.instance=n,Le(n),n;var i=A({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Le(n),Ze(n,"style",i),Qi(n,a.precedence,e),l.instance=n;case"stylesheet":i=Ra(a.href);var s=e.querySelector(En(i));if(s)return l.state.loading|=4,l.instance=s,Le(s),s;n=Th(a),(i=El.get(i))&&jr(n,i),s=(e.ownerDocument||e).createElement("link"),Le(s);var c=s;return c._p=new Promise(function(u,p){c.onload=u,c.onerror=p}),Ze(s,"link",n),l.state.loading|=4,Qi(s,a.precedence,e),l.instance=s;case"script":return s=Oa(a.src),(i=e.querySelector(Tn(s)))?(l.instance=i,Le(i),i):(n=a,(i=El.get(s))&&(n=A({},a),gr(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Le(i),Ze(i,"link",n),e.head.appendChild(i),l.instance=i);case"void":return null;default:throw Error(d(443,l.type))}else l.type==="stylesheet"&&(l.state.loading&4)===0&&(n=l.instance,l.state.loading|=4,Qi(n,a.precedence,e));return l.instance}function Qi(e,l,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,c=0;c<n.length;c++){var u=n[c];if(u.dataset.precedence===l)s=u;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(l=a.nodeType===9?a.head:a,l.insertBefore(e,l.firstChild))}function jr(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.title==null&&(e.title=l.title)}function gr(e,l){e.crossOrigin==null&&(e.crossOrigin=l.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=l.referrerPolicy),e.integrity==null&&(e.integrity=l.integrity)}var Zi=null;function zh(e,l,a){if(Zi===null){var n=new Map,i=Zi=new Map;i.set(a,n)}else i=Zi,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var s=a[i];if(!(s[qa]||s[qe]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var c=s.getAttribute(l)||"";c=e+c;var u=n.get(c);u?u.push(s):n.set(c,[s])}}return n}function Ah(e,l,a){e=e.ownerDocument||e,e.head.insertBefore(a,l==="title"?e.querySelector("head > title"):null)}function Bp(e,l,a){if(a===1||l.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof l.precedence!="string"||typeof l.href!="string"||l.href==="")break;return!0;case"link":if(typeof l.rel!="string"||typeof l.href!="string"||l.href===""||l.onLoad||l.onError)break;switch(l.rel){case"stylesheet":return e=l.disabled,typeof l.precedence=="string"&&e==null;default:return!0}case"script":if(l.async&&typeof l.async!="function"&&typeof l.async!="symbol"&&!l.onLoad&&!l.onError&&l.src&&typeof l.src=="string")return!0}return!1}function wh(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Up(e,l,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Ra(n.href),s=l.querySelector(En(i));if(s){l=s._p,l!==null&&typeof l=="object"&&typeof l.then=="function"&&(e.count++,e=Vi.bind(e),l.then(e,e)),a.state.loading|=4,a.instance=s,Le(s);return}s=l.ownerDocument||l,n=Th(n),(i=El.get(i))&&jr(n,i),s=s.createElement("link"),Le(s);var c=s;c._p=new Promise(function(u,p){c.onload=u,c.onerror=p}),Ze(s,"link",n),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,l),(l=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vi.bind(e),l.addEventListener("load",a),l.addEventListener("error",a))}}var vr=0;function Lp(e,l){return e.stylesheets&&e.count===0&&Ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+l);0<e.imgBytes&&vr===0&&(vr=62500*vp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ji(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>vr?50:800)+l);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Vi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ki=null;function Ji(e,l){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ki=new Map,l.forEach(Gp,e),Ki=null,Vi.call(e))}function Gp(e,l){if(!(l.state.loading&4)){var a=Ki.get(e);if(a)var n=a.get(null);else{a=new Map,Ki.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var c=i[s];(c.nodeName==="LINK"||c.getAttribute("media")!=="not all")&&(a.set(c.dataset.precedence,c),n=c)}n&&a.set(null,n)}i=l.instance,c=i.getAttribute("data-precedence"),s=a.get(c)||n,s===n&&a.set(null,i),a.set(c,i),this.count++,n=Vi.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),l.state.loading|=4}}var kn={$$typeof:$,Provider:null,Consumer:null,_currentValue:F,_currentValue2:F,_threadCount:0};function qp(e,l,a,n,i,s,c,u,p){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=xs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.hiddenUpdates=xs(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=c,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=p,this.incompleteTransitions=new Map}function Mh(e,l,a,n,i,s,c,u,p,N,w,O){return e=new qp(e,l,a,c,p,N,w,O,u),l=1,s===!0&&(l|=24),s=dl(3,null,null,l),e.current=s,s.stateNode=e,l=Is(),l.refCount++,e.pooledCache=l,l.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:l},tc(s),e}function Rh(e){return e?(e=oa,e):oa}function Oh(e,l,a,n,i,s){i=Rh(i),n.context===null?n.context=i:n.pendingContext=i,n=ht(l),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=ft(e,n,l),a!==null&&(tl(a,e,l),nn(a,e,l))}function Dh(e,l){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<l?a:l}}function br(e,l){Dh(e,l),(e=e.alternate)&&Dh(e,l)}function _h(e){if(e.tag===13||e.tag===31){var l=Ut(e,67108864);l!==null&&tl(l,e,67108864),br(e,67108864)}}function Hh(e){if(e.tag===13||e.tag===31){var l=xl();l=ps(l);var a=Ut(e,l);a!==null&&tl(a,e,l),br(e,l)}}var Fi=!0;function Yp(e,l,a,n){var i=M.T;M.T=null;var s=H.p;try{H.p=2,yr(e,l,a,n)}finally{H.p=s,M.T=i}}function Xp(e,l,a,n){var i=M.T;M.T=null;var s=H.p;try{H.p=8,yr(e,l,a,n)}finally{H.p=s,M.T=i}}function yr(e,l,a,n){if(Fi){var i=Sr(n);if(i===null)cr(e,l,n,Wi,a),Uh(e,n);else if(Zp(i,e,l,a,n))n.stopPropagation();else if(Uh(e,n),l&4&&-1<Qp.indexOf(e)){for(;i!==null;){var s=Pt(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var c=Ot(s.pendingLanes);if(c!==0){var u=s;for(u.pendingLanes|=2,u.entangledLanes|=2;c;){var p=1<<31-cl(c);u.entanglements[1]|=p,c&=~p}Ol(s),(oe&6)===0&&(Ri=il()+500,yn(0))}}break;case 31:case 13:u=Ut(s,2),u!==null&&tl(u,s,2),Di(),br(s,2)}if(s=Sr(n),s===null&&cr(e,l,n,Wi,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else cr(e,l,n,null,a)}}function Sr(e){return e=Cs(e),Nr(e)}var Wi=null;function Nr(e){if(Wi=null,e=It(e),e!==null){var l=f(e);if(l===null)e=null;else{var a=l.tag;if(a===13){if(e=v(l),e!==null)return e;e=null}else if(a===31){if(e=k(l),e!==null)return e;e=null}else if(a===3){if(l.stateNode.current.memoizedState.isDehydrated)return l.tag===3?l.stateNode.containerInfo:null;e=null}else l!==e&&(e=null)}}return Wi=e,null}function Bh(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Af()){case Qr:return 2;case Zr:return 8;case Ln:case wf:return 32;case Vr:return 268435456;default:return 32}default:return 32}}var Cr=!1,Ct=null,Et=null,Tt=null,zn=new Map,An=new Map,kt=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Uh(e,l){switch(e){case"focusin":case"focusout":Ct=null;break;case"dragenter":case"dragleave":Et=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":zn.delete(l.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(l.pointerId)}}function wn(e,l,a,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:l,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},l!==null&&(l=Pt(l),l!==null&&_h(l)),e):(e.eventSystemFlags|=n,l=e.targetContainers,i!==null&&l.indexOf(i)===-1&&l.push(i),e)}function Zp(e,l,a,n,i){switch(l){case"focusin":return Ct=wn(Ct,e,l,a,n,i),!0;case"dragenter":return Et=wn(Et,e,l,a,n,i),!0;case"mouseover":return Tt=wn(Tt,e,l,a,n,i),!0;case"pointerover":var s=i.pointerId;return zn.set(s,wn(zn.get(s)||null,e,l,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,An.set(s,wn(An.get(s)||null,e,l,a,n,i)),!0}return!1}function Lh(e){var l=It(e.target);if(l!==null){var a=f(l);if(a!==null){if(l=a.tag,l===13){if(l=v(a),l!==null){e.blockedOn=l,Ir(e.priority,function(){Hh(a)});return}}else if(l===31){if(l=k(a),l!==null){e.blockedOn=l,Ir(e.priority,function(){Hh(a)});return}}else if(l===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $i(e){if(e.blockedOn!==null)return!1;for(var l=e.targetContainers;0<l.length;){var a=Sr(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);Ns=n,a.target.dispatchEvent(n),Ns=null}else return l=Pt(a),l!==null&&_h(l),e.blockedOn=a,!1;l.shift()}return!0}function Gh(e,l,a){$i(e)&&a.delete(l)}function Vp(){Cr=!1,Ct!==null&&$i(Ct)&&(Ct=null),Et!==null&&$i(Et)&&(Et=null),Tt!==null&&$i(Tt)&&(Tt=null),zn.forEach(Gh),An.forEach(Gh)}function Ii(e,l){e.blockedOn===l&&(e.blockedOn=null,Cr||(Cr=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Vp)))}var Pi=null;function qh(e){Pi!==e&&(Pi=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Pi===e&&(Pi=null);for(var l=0;l<e.length;l+=3){var a=e[l],n=e[l+1],i=e[l+2];if(typeof n!="function"){if(Nr(n||a)===null)continue;break}var s=Pt(a);s!==null&&(e.splice(l,3),l-=3,Sc(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Da(e){function l(p){return Ii(p,e)}Ct!==null&&Ii(Ct,e),Et!==null&&Ii(Et,e),Tt!==null&&Ii(Tt,e),zn.forEach(l),An.forEach(l);for(var a=0;a<kt.length;a++){var n=kt[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<kt.length&&(a=kt[0],a.blockedOn===null);)Lh(a),a.blockedOn===null&&kt.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],c=i[We]||null;if(typeof s=="function")c||qh(a);else if(c){var u=null;if(s&&s.hasAttribute("formAction")){if(i=s,c=s[We]||null)u=c.formAction;else if(Nr(i)!==null)continue}else u=c.action;typeof u=="function"?a[n+1]=u:(a.splice(n,3),n-=3),qh(a)}}}function Yh(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(c){return i=c})},focusReset:"manual",scroll:"manual"})}function l(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",l),navigation.addEventListener("navigateerror",l),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",l),navigation.removeEventListener("navigateerror",l),i!==null&&(i(),i=null)}}}function Er(e){this._internalRoot=e}es.prototype.render=Er.prototype.render=function(e){var l=this._internalRoot;if(l===null)throw Error(d(409));var a=l.current,n=xl();Oh(a,n,e,l,null,null)},es.prototype.unmount=Er.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var l=e.containerInfo;Oh(e.current,2,null,e,null,null),Di(),l[$t]=null}};function es(e){this._internalRoot=e}es.prototype.unstable_scheduleHydration=function(e){if(e){var l=$r();e={blockedOn:null,target:e,priority:l};for(var a=0;a<kt.length&&l!==0&&l<kt[a].priority;a++);kt.splice(a,0,e),a===0&&Lh(e)}};var Xh=h.version;if(Xh!=="19.2.0")throw Error(d(527,Xh,"19.2.0"));H.findDOMNode=function(e){var l=e._reactInternals;if(l===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=m(l),e=e!==null?C(e):null,e=e===null?null:e.stateNode,e};var Kp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ls.isDisabled&&ls.supportsFiber)try{Ua=ls.inject(Kp),sl=ls}catch{}}return Rn.createRoot=function(e,l){if(!o(e))throw Error(d(299));var a=!1,n="",i=Wo,s=$o,c=Io;return l!=null&&(l.unstable_strictMode===!0&&(a=!0),l.identifierPrefix!==void 0&&(n=l.identifierPrefix),l.onUncaughtError!==void 0&&(i=l.onUncaughtError),l.onCaughtError!==void 0&&(s=l.onCaughtError),l.onRecoverableError!==void 0&&(c=l.onRecoverableError)),l=Mh(e,1,!1,null,null,a,n,null,i,s,c,Yh),e[$t]=l.current,sr(e),new Er(l)},Rn.hydrateRoot=function(e,l,a){if(!o(e))throw Error(d(299));var n=!1,i="",s=Wo,c=$o,u=Io,p=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError),a.formState!==void 0&&(p=a.formState)),l=Mh(e,1,!0,l,a??null,n,i,p,s,c,u,Yh),l.context=Rh(null),a=l.current,n=xl(),n=ps(n),i=ht(n),i.callback=null,ft(a,i,n),a=n,l.current.lanes=a,Ga(l,a),Ol(l),e[$t]=l.current,sr(e),new es(l)},Rn.version="19.2.0",Rn}var Ph;function nm(){if(Ph)return zr.exports;Ph=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(h){console.error(h)}}return r(),zr.exports=am(),zr.exports}var im=nm();const sm=rf(im);/**
 * react-router v7.9.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var ef="popstate";function cm(r={}){function h(d,o){let{pathname:f,search:v,hash:k}=d.location;return Dr("",{pathname:f,search:v,hash:k},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function x(d,o){return typeof o=="string"?o:Dn(o)}return dm(h,x,null,r)}function Ce(r,h){if(r===!1||r===null||typeof r>"u")throw new Error(h)}function Dl(r,h){if(!r){typeof console<"u"&&console.warn(h);try{throw new Error(h)}catch{}}}function rm(){return Math.random().toString(36).substring(2,10)}function lf(r,h){return{usr:r.state,key:r.key,idx:h}}function Dr(r,h,x=null,d){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof h=="string"?_a(h):h,state:x,key:h&&h.key||d||rm()}}function Dn({pathname:r="/",search:h="",hash:x=""}){return h&&h!=="?"&&(r+=h.charAt(0)==="?"?h:"?"+h),x&&x!=="#"&&(r+=x.charAt(0)==="#"?x:"#"+x),r}function _a(r){let h={};if(r){let x=r.indexOf("#");x>=0&&(h.hash=r.substring(x),r=r.substring(0,x));let d=r.indexOf("?");d>=0&&(h.search=r.substring(d),r=r.substring(0,d)),r&&(h.pathname=r)}return h}function dm(r,h,x,d={}){let{window:o=document.defaultView,v5Compat:f=!1}=d,v=o.history,k="POP",y=null,m=C();m==null&&(m=0,v.replaceState({...v.state,idx:m},""));function C(){return(v.state||{idx:null}).idx}function A(){k="POP";let Q=C(),Y=Q==null?null:Q-m;m=Q,y&&y({action:k,location:J.location,delta:Y})}function _(Q,Y){k="PUSH";let X=Dr(J.location,Q,Y);m=C()+1;let $=lf(X,m),Se=J.createHref(X);try{v.pushState($,"",Se)}catch(Ee){if(Ee instanceof DOMException&&Ee.name==="DataCloneError")throw Ee;o.location.assign(Se)}f&&y&&y({action:k,location:J.location,delta:1})}function G(Q,Y){k="REPLACE";let X=Dr(J.location,Q,Y);m=C();let $=lf(X,m),Se=J.createHref(X);v.replaceState($,"",Se),f&&y&&y({action:k,location:J.location,delta:0})}function V(Q){return om(Q)}let J={get action(){return k},get location(){return r(o,v)},listen(Q){if(y)throw new Error("A history only accepts one active listener");return o.addEventListener(ef,A),y=Q,()=>{o.removeEventListener(ef,A),y=null}},createHref(Q){return h(o,Q)},createURL:V,encodeLocation(Q){let Y=V(Q);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:_,replace:G,go(Q){return v.go(Q)}};return J}function om(r,h=!1){let x="http://localhost";typeof window<"u"&&(x=window.location.origin!=="null"?window.location.origin:window.location.href),Ce(x,"No window.location.(origin|href) available to create URL");let d=typeof r=="string"?r:Dn(r);return d=d.replace(/ $/,"%20"),!h&&d.startsWith("//")&&(d=x+d),new URL(d,x)}function df(r,h,x="/"){return um(r,h,x,!1)}function um(r,h,x,d){let o=typeof h=="string"?_a(h):h,f=tt(o.pathname||"/",x);if(f==null)return null;let v=of(r);hm(v);let k=null;for(let y=0;k==null&&y<v.length;++y){let m=Nm(f);k=ym(v[y],m,d)}return k}function of(r,h=[],x=[],d="",o=!1){let f=(v,k,y=o,m)=>{let C={relativePath:m===void 0?v.path||"":m,caseSensitive:v.caseSensitive===!0,childrenIndex:k,route:v};if(C.relativePath.startsWith("/")){if(!C.relativePath.startsWith(d)&&y)return;Ce(C.relativePath.startsWith(d),`Absolute route path "${C.relativePath}" nested under path "${d}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),C.relativePath=C.relativePath.slice(d.length)}let A=lt([d,C.relativePath]),_=x.concat(C);v.children&&v.children.length>0&&(Ce(v.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${A}".`),of(v.children,h,_,A,y)),!(v.path==null&&!v.index)&&h.push({path:A,score:vm(A,v.index),routesMeta:_})};return r.forEach((v,k)=>{if(v.path===""||!v.path?.includes("?"))f(v,k);else for(let y of uf(v.path))f(v,k,!0,y)}),h}function uf(r){let h=r.split("/");if(h.length===0)return[];let[x,...d]=h,o=x.endsWith("?"),f=x.replace(/\?$/,"");if(d.length===0)return o?[f,""]:[f];let v=uf(d.join("/")),k=[];return k.push(...v.map(y=>y===""?f:[f,y].join("/"))),o&&k.push(...v),k.map(y=>r.startsWith("/")&&y===""?"/":y)}function hm(r){r.sort((h,x)=>h.score!==x.score?x.score-h.score:bm(h.routesMeta.map(d=>d.childrenIndex),x.routesMeta.map(d=>d.childrenIndex)))}var fm=/^:[\w-]+$/,xm=3,pm=2,mm=1,jm=10,gm=-2,tf=r=>r==="*";function vm(r,h){let x=r.split("/"),d=x.length;return x.some(tf)&&(d+=gm),h&&(d+=pm),x.filter(o=>!tf(o)).reduce((o,f)=>o+(fm.test(f)?xm:f===""?mm:jm),d)}function bm(r,h){return r.length===h.length&&r.slice(0,-1).every((d,o)=>d===h[o])?r[r.length-1]-h[h.length-1]:0}function ym(r,h,x=!1){let{routesMeta:d}=r,o={},f="/",v=[];for(let k=0;k<d.length;++k){let y=d[k],m=k===d.length-1,C=f==="/"?h:h.slice(f.length)||"/",A=is({path:y.relativePath,caseSensitive:y.caseSensitive,end:m},C),_=y.route;if(!A&&m&&x&&!d[d.length-1].route.index&&(A=is({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},C)),!A)return null;Object.assign(o,A.params),v.push({params:o,pathname:lt([f,A.pathname]),pathnameBase:km(lt([f,A.pathnameBase])),route:_}),A.pathnameBase!=="/"&&(f=lt([f,A.pathnameBase]))}return v}function is(r,h){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[x,d]=Sm(r.path,r.caseSensitive,r.end),o=h.match(x);if(!o)return null;let f=o[0],v=f.replace(/(.)\/+$/,"$1"),k=o.slice(1);return{params:d.reduce((m,{paramName:C,isOptional:A},_)=>{if(C==="*"){let V=k[_]||"";v=f.slice(0,f.length-V.length).replace(/(.)\/+$/,"$1")}const G=k[_];return A&&!G?m[C]=void 0:m[C]=(G||"").replace(/%2F/g,"/"),m},{}),pathname:f,pathnameBase:v,pattern:r}}function Sm(r,h=!1,x=!0){Dl(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let d=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(v,k,y)=>(d.push({paramName:k,isOptional:y!=null}),y?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(d.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):x?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,h?void 0:"i"),d]}function Nm(r){try{return r.split("/").map(h=>decodeURIComponent(h).replace(/\//g,"%2F")).join("/")}catch(h){return Dl(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${h}).`),r}}function tt(r,h){if(h==="/")return r;if(!r.toLowerCase().startsWith(h.toLowerCase()))return null;let x=h.endsWith("/")?h.length-1:h.length,d=r.charAt(x);return d&&d!=="/"?null:r.slice(x)||"/"}function Cm(r,h="/"){let{pathname:x,search:d="",hash:o=""}=typeof r=="string"?_a(r):r;return{pathname:x?x.startsWith("/")?x:Em(x,h):h,search:zm(d),hash:Am(o)}}function Em(r,h){let x=h.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?x.length>1&&x.pop():o!=="."&&x.push(o)}),x.length>1?x.join("/"):"/"}function Rr(r,h,x,d){return`Cannot include a '${r}' character in a manually specified \`to.${h}\` field [${JSON.stringify(d)}].  Please separate it out to the \`to.${x}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Tm(r){return r.filter((h,x)=>x===0||h.route.path&&h.route.path.length>0)}function hf(r){let h=Tm(r);return h.map((x,d)=>d===h.length-1?x.pathname:x.pathnameBase)}function ff(r,h,x,d=!1){let o;typeof r=="string"?o=_a(r):(o={...r},Ce(!o.pathname||!o.pathname.includes("?"),Rr("?","pathname","search",o)),Ce(!o.pathname||!o.pathname.includes("#"),Rr("#","pathname","hash",o)),Ce(!o.search||!o.search.includes("#"),Rr("#","search","hash",o)));let f=r===""||o.pathname==="",v=f?"/":o.pathname,k;if(v==null)k=x;else{let A=h.length-1;if(!d&&v.startsWith("..")){let _=v.split("/");for(;_[0]==="..";)_.shift(),A-=1;o.pathname=_.join("/")}k=A>=0?h[A]:"/"}let y=Cm(o,k),m=v&&v!=="/"&&v.endsWith("/"),C=(f||v===".")&&x.endsWith("/");return!y.pathname.endsWith("/")&&(m||C)&&(y.pathname+="/"),y}var lt=r=>r.join("/").replace(/\/\/+/g,"/"),km=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),zm=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Am=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function wm(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var xf=["POST","PUT","PATCH","DELETE"];new Set(xf);var Mm=["GET",...xf];new Set(Mm);var Ha=T.createContext(null);Ha.displayName="DataRouter";var ss=T.createContext(null);ss.displayName="DataRouterState";T.createContext(!1);var pf=T.createContext({isTransitioning:!1});pf.displayName="ViewTransition";var Rm=T.createContext(new Map);Rm.displayName="Fetchers";var Om=T.createContext(null);Om.displayName="Await";var _l=T.createContext(null);_l.displayName="Navigation";var _n=T.createContext(null);_n.displayName="Location";var at=T.createContext({outlet:null,matches:[],isDataRoute:!1});at.displayName="Route";var Br=T.createContext(null);Br.displayName="RouteError";function Dm(r,{relative:h}={}){Ce(Hn(),"useHref() may be used only in the context of a <Router> component.");let{basename:x,navigator:d}=T.useContext(_l),{hash:o,pathname:f,search:v}=Bn(r,{relative:h}),k=f;return x!=="/"&&(k=f==="/"?x:lt([x,f])),d.createHref({pathname:k,search:v,hash:o})}function Hn(){return T.useContext(_n)!=null}function wt(){return Ce(Hn(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(_n).location}var mf="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function jf(r){T.useContext(_l).static||T.useLayoutEffect(r)}function gf(){let{isDataRoute:r}=T.useContext(at);return r?Km():_m()}function _m(){Ce(Hn(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext(Ha),{basename:h,navigator:x}=T.useContext(_l),{matches:d}=T.useContext(at),{pathname:o}=wt(),f=JSON.stringify(hf(d)),v=T.useRef(!1);return jf(()=>{v.current=!0}),T.useCallback((y,m={})=>{if(Dl(v.current,mf),!v.current)return;if(typeof y=="number"){x.go(y);return}let C=ff(y,JSON.parse(f),o,m.relative==="path");r==null&&h!=="/"&&(C.pathname=C.pathname==="/"?h:lt([h,C.pathname])),(m.replace?x.replace:x.push)(C,m.state,m)},[h,x,f,o,r])}T.createContext(null);function Bn(r,{relative:h}={}){let{matches:x}=T.useContext(at),{pathname:d}=wt(),o=JSON.stringify(hf(x));return T.useMemo(()=>ff(r,JSON.parse(o),d,h==="path"),[r,o,d,h])}function Hm(r,h){return vf(r,h)}function vf(r,h,x,d,o){Ce(Hn(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=T.useContext(_l),{matches:v}=T.useContext(at),k=v[v.length-1],y=k?k.params:{},m=k?k.pathname:"/",C=k?k.pathnameBase:"/",A=k&&k.route;{let X=A&&A.path||"";bf(m,!A||X.endsWith("*")||X.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${X}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${X}"> to <Route path="${X==="/"?"*":`${X}/*`}">.`)}let _=wt(),G;if(h){let X=typeof h=="string"?_a(h):h;Ce(C==="/"||X.pathname?.startsWith(C),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${C}" but pathname "${X.pathname}" was given in the \`location\` prop.`),G=X}else G=_;let V=G.pathname||"/",J=V;if(C!=="/"){let X=C.replace(/^\//,"").split("/");J="/"+V.replace(/^\//,"").split("/").slice(X.length).join("/")}let Q=df(r,{pathname:J});Dl(A||Q!=null,`No routes matched location "${G.pathname}${G.search}${G.hash}" `),Dl(Q==null||Q[Q.length-1].route.element!==void 0||Q[Q.length-1].route.Component!==void 0||Q[Q.length-1].route.lazy!==void 0,`Matched leaf route at location "${G.pathname}${G.search}${G.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let Y=qm(Q&&Q.map(X=>Object.assign({},X,{params:Object.assign({},y,X.params),pathname:lt([C,f.encodeLocation?f.encodeLocation(X.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathname]),pathnameBase:X.pathnameBase==="/"?C:lt([C,f.encodeLocation?f.encodeLocation(X.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:X.pathnameBase])})),v,x,d,o);return h&&Y?T.createElement(_n.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...G},navigationType:"POP"}},Y):Y}function Bm(){let r=Vm(),h=wm(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),x=r instanceof Error?r.stack:null,d="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:d},f={padding:"2px 4px",backgroundColor:d},v=null;return console.error("Error handled by React Router default ErrorBoundary:",r),v=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:f},"ErrorBoundary")," or"," ",T.createElement("code",{style:f},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},h),x?T.createElement("pre",{style:o},x):null,v)}var Um=T.createElement(Bm,null),Lm=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,h){return h.location!==r.location||h.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:h.error,location:h.location,revalidation:r.revalidation||h.revalidation}}componentDidCatch(r,h){this.props.unstable_onError?this.props.unstable_onError(r,h):console.error("React Router caught the following error during render",r)}render(){return this.state.error!==void 0?T.createElement(at.Provider,{value:this.props.routeContext},T.createElement(Br.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Gm({routeContext:r,match:h,children:x}){let d=T.useContext(Ha);return d&&d.static&&d.staticContext&&(h.route.errorElement||h.route.ErrorBoundary)&&(d.staticContext._deepestRenderedBoundaryId=h.route.id),T.createElement(at.Provider,{value:r},x)}function qm(r,h=[],x=null,d=null,o=null){if(r==null){if(!x)return null;if(x.errors)r=x.matches;else if(h.length===0&&!x.initialized&&x.matches.length>0)r=x.matches;else return null}let f=r,v=x?.errors;if(v!=null){let m=f.findIndex(C=>C.route.id&&v?.[C.route.id]!==void 0);Ce(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(v).join(",")}`),f=f.slice(0,Math.min(f.length,m+1))}let k=!1,y=-1;if(x)for(let m=0;m<f.length;m++){let C=f[m];if((C.route.HydrateFallback||C.route.hydrateFallbackElement)&&(y=m),C.route.id){let{loaderData:A,errors:_}=x,G=C.route.loader&&!A.hasOwnProperty(C.route.id)&&(!_||_[C.route.id]===void 0);if(C.route.lazy||G){k=!0,y>=0?f=f.slice(0,y+1):f=[f[0]];break}}}return f.reduceRight((m,C,A)=>{let _,G=!1,V=null,J=null;x&&(_=v&&C.route.id?v[C.route.id]:void 0,V=C.route.errorElement||Um,k&&(y<0&&A===0?(bf("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),G=!0,J=null):y===A&&(G=!0,J=C.route.hydrateFallbackElement||null)));let Q=h.concat(f.slice(0,A+1)),Y=()=>{let X;return _?X=V:G?X=J:C.route.Component?X=T.createElement(C.route.Component,null):C.route.element?X=C.route.element:X=m,T.createElement(Gm,{match:C,routeContext:{outlet:m,matches:Q,isDataRoute:x!=null},children:X})};return x&&(C.route.ErrorBoundary||C.route.errorElement||A===0)?T.createElement(Lm,{location:x.location,revalidation:x.revalidation,component:V,error:_,children:Y(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},unstable_onError:d}):Y()},null)}function Ur(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ym(r){let h=T.useContext(Ha);return Ce(h,Ur(r)),h}function Xm(r){let h=T.useContext(ss);return Ce(h,Ur(r)),h}function Qm(r){let h=T.useContext(at);return Ce(h,Ur(r)),h}function Lr(r){let h=Qm(r),x=h.matches[h.matches.length-1];return Ce(x.route.id,`${r} can only be used on routes that contain a unique "id"`),x.route.id}function Zm(){return Lr("useRouteId")}function Vm(){let r=T.useContext(Br),h=Xm("useRouteError"),x=Lr("useRouteError");return r!==void 0?r:h.errors?.[x]}function Km(){let{router:r}=Ym("useNavigate"),h=Lr("useNavigate"),x=T.useRef(!1);return jf(()=>{x.current=!0}),T.useCallback(async(o,f={})=>{Dl(x.current,mf),x.current&&(typeof o=="number"?r.navigate(o):await r.navigate(o,{fromRouteId:h,...f}))},[r,h])}var af={};function bf(r,h,x){!h&&!af[r]&&(af[r]=!0,Dl(!1,x))}T.memo(Jm);function Jm({routes:r,future:h,state:x,unstable_onError:d}){return vf(r,void 0,x,d,h)}function pl(r){Ce(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Fm({basename:r="/",children:h=null,location:x,navigationType:d="POP",navigator:o,static:f=!1}){Ce(!Hn(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=r.replace(/^\/*/,"/"),k=T.useMemo(()=>({basename:v,navigator:o,static:f,future:{}}),[v,o,f]);typeof x=="string"&&(x=_a(x));let{pathname:y="/",search:m="",hash:C="",state:A=null,key:_="default"}=x,G=T.useMemo(()=>{let V=tt(y,v);return V==null?null:{location:{pathname:V,search:m,hash:C,state:A,key:_},navigationType:d}},[v,y,m,C,A,_,d]);return Dl(G!=null,`<Router basename="${v}"> is not able to match the URL "${y}${m}${C}" because it does not start with the basename, so the <Router> won't render anything.`),G==null?null:T.createElement(_l.Provider,{value:k},T.createElement(_n.Provider,{children:h,value:G}))}function Wm({children:r,location:h}){return Hm(_r(r),h)}function _r(r,h=[]){let x=[];return T.Children.forEach(r,(d,o)=>{if(!T.isValidElement(d))return;let f=[...h,o];if(d.type===T.Fragment){x.push.apply(x,_r(d.props.children,f));return}Ce(d.type===pl,`[${typeof d.type=="string"?d.type:d.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ce(!d.props.index||!d.props.children,"An index route cannot have child routes.");let v={id:d.props.id||f.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,middleware:d.props.middleware,loader:d.props.loader,action:d.props.action,hydrateFallbackElement:d.props.hydrateFallbackElement,HydrateFallback:d.props.HydrateFallback,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.hasErrorBoundary===!0||d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(v.children=_r(d.props.children,f)),x.push(v)}),x}var as="get",ns="application/x-www-form-urlencoded";function cs(r){return r!=null&&typeof r.tagName=="string"}function $m(r){return cs(r)&&r.tagName.toLowerCase()==="button"}function Im(r){return cs(r)&&r.tagName.toLowerCase()==="form"}function Pm(r){return cs(r)&&r.tagName.toLowerCase()==="input"}function ej(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function lj(r,h){return r.button===0&&(!h||h==="_self")&&!ej(r)}var ts=null;function tj(){if(ts===null)try{new FormData(document.createElement("form"),0),ts=!1}catch{ts=!0}return ts}var aj=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Or(r){return r!=null&&!aj.has(r)?(Dl(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ns}"`),null):r}function nj(r,h){let x,d,o,f,v;if(Im(r)){let k=r.getAttribute("action");d=k?tt(k,h):null,x=r.getAttribute("method")||as,o=Or(r.getAttribute("enctype"))||ns,f=new FormData(r)}else if($m(r)||Pm(r)&&(r.type==="submit"||r.type==="image")){let k=r.form;if(k==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||k.getAttribute("action");if(d=y?tt(y,h):null,x=r.getAttribute("formmethod")||k.getAttribute("method")||as,o=Or(r.getAttribute("formenctype"))||Or(k.getAttribute("enctype"))||ns,f=new FormData(k,r),!tj()){let{name:m,type:C,value:A}=r;if(C==="image"){let _=m?`${m}.`:"";f.append(`${_}x`,"0"),f.append(`${_}y`,"0")}else m&&f.append(m,A)}}else{if(cs(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');x=as,d=null,o=ns,v=r}return f&&o==="text/plain"&&(v=f,f=void 0),{action:d,method:x.toLowerCase(),encType:o,formData:f,body:v}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Gr(r,h){if(r===!1||r===null||typeof r>"u")throw new Error(h)}function ij(r,h,x){let d=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d.pathname==="/"?d.pathname=`_root.${x}`:h&&tt(d.pathname,h)==="/"?d.pathname=`${h.replace(/\/$/,"")}/_root.${x}`:d.pathname=`${d.pathname.replace(/\/$/,"")}.${x}`,d}async function sj(r,h){if(r.id in h)return h[r.id];try{let x=await import(r.module);return h[r.id]=x,x}catch(x){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(x),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function cj(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function rj(r,h,x){let d=await Promise.all(r.map(async o=>{let f=h.routes[o.route.id];if(f){let v=await sj(f,x);return v.links?v.links():[]}return[]}));return hj(d.flat(1).filter(cj).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function nf(r,h,x,d,o,f){let v=(y,m)=>x[m]?y.route.id!==x[m].route.id:!0,k=(y,m)=>x[m].pathname!==y.pathname||x[m].route.path?.endsWith("*")&&x[m].params["*"]!==y.params["*"];return f==="assets"?h.filter((y,m)=>v(y,m)||k(y,m)):f==="data"?h.filter((y,m)=>{let C=d.routes[y.route.id];if(!C||!C.hasLoader)return!1;if(v(y,m)||k(y,m))return!0;if(y.route.shouldRevalidate){let A=y.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:x[0]?.params||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof A=="boolean")return A}return!0}):[]}function dj(r,h,{includeHydrateFallback:x}={}){return oj(r.map(d=>{let o=h.routes[d.route.id];if(!o)return[];let f=[o.module];return o.clientActionModule&&(f=f.concat(o.clientActionModule)),o.clientLoaderModule&&(f=f.concat(o.clientLoaderModule)),x&&o.hydrateFallbackModule&&(f=f.concat(o.hydrateFallbackModule)),o.imports&&(f=f.concat(o.imports)),f}).flat(1))}function oj(r){return[...new Set(r)]}function uj(r){let h={},x=Object.keys(r).sort();for(let d of x)h[d]=r[d];return h}function hj(r,h){let x=new Set;return new Set(h),r.reduce((d,o)=>{let f=JSON.stringify(uj(o));return x.has(f)||(x.add(f),d.push({key:f,link:o})),d},[])}function yf(){let r=T.useContext(Ha);return Gr(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function fj(){let r=T.useContext(ss);return Gr(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var qr=T.createContext(void 0);qr.displayName="FrameworkContext";function Sf(){let r=T.useContext(qr);return Gr(r,"You must render this element inside a <HydratedRouter> element"),r}function xj(r,h){let x=T.useContext(qr),[d,o]=T.useState(!1),[f,v]=T.useState(!1),{onFocus:k,onBlur:y,onMouseEnter:m,onMouseLeave:C,onTouchStart:A}=h,_=T.useRef(null);T.useEffect(()=>{if(r==="render"&&v(!0),r==="viewport"){let J=Y=>{Y.forEach(X=>{v(X.isIntersecting)})},Q=new IntersectionObserver(J,{threshold:.5});return _.current&&Q.observe(_.current),()=>{Q.disconnect()}}},[r]),T.useEffect(()=>{if(d){let J=setTimeout(()=>{v(!0)},100);return()=>{clearTimeout(J)}}},[d]);let G=()=>{o(!0)},V=()=>{o(!1),v(!1)};return x?r!=="intent"?[f,_,{}]:[f,_,{onFocus:On(k,G),onBlur:On(y,V),onMouseEnter:On(m,G),onMouseLeave:On(C,V),onTouchStart:On(A,G)}]:[!1,_,{}]}function On(r,h){return x=>{r&&r(x),x.defaultPrevented||h(x)}}function pj({page:r,...h}){let{router:x}=yf(),d=T.useMemo(()=>df(x.routes,r,x.basename),[x.routes,r,x.basename]);return d?T.createElement(jj,{page:r,matches:d,...h}):null}function mj(r){let{manifest:h,routeModules:x}=Sf(),[d,o]=T.useState([]);return T.useEffect(()=>{let f=!1;return rj(r,h,x).then(v=>{f||o(v)}),()=>{f=!0}},[r,h,x]),d}function jj({page:r,matches:h,...x}){let d=wt(),{manifest:o,routeModules:f}=Sf(),{basename:v}=yf(),{loaderData:k,matches:y}=fj(),m=T.useMemo(()=>nf(r,h,y,o,d,"data"),[r,h,y,o,d]),C=T.useMemo(()=>nf(r,h,y,o,d,"assets"),[r,h,y,o,d]),A=T.useMemo(()=>{if(r===d.pathname+d.search+d.hash)return[];let V=new Set,J=!1;if(h.forEach(Y=>{let X=o.routes[Y.route.id];!X||!X.hasLoader||(!m.some($=>$.route.id===Y.route.id)&&Y.route.id in k&&f[Y.route.id]?.shouldRevalidate||X.hasClientLoader?J=!0:V.add(Y.route.id))}),V.size===0)return[];let Q=ij(r,v,"data");return J&&V.size>0&&Q.searchParams.set("_routes",h.filter(Y=>V.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[Q.pathname+Q.search]},[v,k,d,o,m,h,r,f]),_=T.useMemo(()=>dj(C,o),[C,o]),G=mj(C);return T.createElement(T.Fragment,null,A.map(V=>T.createElement("link",{key:V,rel:"prefetch",as:"fetch",href:V,...x})),_.map(V=>T.createElement("link",{key:V,rel:"modulepreload",href:V,...x})),G.map(({key:V,link:J})=>T.createElement("link",{key:V,nonce:x.nonce,...J})))}function gj(...r){return h=>{r.forEach(x=>{typeof x=="function"?x(h):x!=null&&(x.current=h)})}}var Nf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nf&&(window.__reactRouterVersion="7.9.5")}catch{}function vj({basename:r,children:h,window:x}){let d=T.useRef();d.current==null&&(d.current=cm({window:x,v5Compat:!0}));let o=d.current,[f,v]=T.useState({action:o.action,location:o.location}),k=T.useCallback(y=>{T.startTransition(()=>v(y))},[v]);return T.useLayoutEffect(()=>o.listen(k),[o,k]),T.createElement(Fm,{basename:r,children:h,location:f.location,navigationType:f.action,navigator:o})}var Cf=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,At=T.forwardRef(function({onClick:h,discover:x="render",prefetch:d="none",relative:o,reloadDocument:f,replace:v,state:k,target:y,to:m,preventScrollReset:C,viewTransition:A,..._},G){let{basename:V}=T.useContext(_l),J=typeof m=="string"&&Cf.test(m),Q,Y=!1;if(typeof m=="string"&&J&&(Q=m,Nf))try{let Te=new URL(window.location.href),al=m.startsWith("//")?new URL(Te.protocol+m):new URL(m),nl=tt(al.pathname,V);al.origin===Te.origin&&nl!=null?m=nl+al.search+al.hash:Y=!0}catch{Dl(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let X=Dm(m,{relative:o}),[$,Se,Ee]=xj(d,_),He=Nj(m,{replace:v,state:k,target:y,preventScrollReset:C,relative:o,viewTransition:A});function ee(Te){h&&h(Te),Te.defaultPrevented||He(Te)}let Be=T.createElement("a",{..._,...Ee,href:Q||X,onClick:Y||f?h:ee,ref:gj(G,Se),target:y,"data-discover":!J&&x==="render"?"true":void 0});return $&&!J?T.createElement(T.Fragment,null,Be,T.createElement(pj,{page:X})):Be});At.displayName="Link";var bj=T.forwardRef(function({"aria-current":h="page",caseSensitive:x=!1,className:d="",end:o=!1,style:f,to:v,viewTransition:k,children:y,...m},C){let A=Bn(v,{relative:m.relative}),_=wt(),G=T.useContext(ss),{navigator:V,basename:J}=T.useContext(_l),Q=G!=null&&zj(A)&&k===!0,Y=V.encodeLocation?V.encodeLocation(A).pathname:A.pathname,X=_.pathname,$=G&&G.navigation&&G.navigation.location?G.navigation.location.pathname:null;x||(X=X.toLowerCase(),$=$?$.toLowerCase():null,Y=Y.toLowerCase()),$&&J&&($=tt($,J)||$);const Se=Y!=="/"&&Y.endsWith("/")?Y.length-1:Y.length;let Ee=X===Y||!o&&X.startsWith(Y)&&X.charAt(Se)==="/",He=$!=null&&($===Y||!o&&$.startsWith(Y)&&$.charAt(Y.length)==="/"),ee={isActive:Ee,isPending:He,isTransitioning:Q},Be=Ee?h:void 0,Te;typeof d=="function"?Te=d(ee):Te=[d,Ee?"active":null,He?"pending":null,Q?"transitioning":null].filter(Boolean).join(" ");let al=typeof f=="function"?f(ee):f;return T.createElement(At,{...m,"aria-current":Be,className:Te,ref:C,style:al,to:v,viewTransition:k},typeof y=="function"?y(ee):y)});bj.displayName="NavLink";var yj=T.forwardRef(({discover:r="render",fetcherKey:h,navigate:x,reloadDocument:d,replace:o,state:f,method:v=as,action:k,onSubmit:y,relative:m,preventScrollReset:C,viewTransition:A,..._},G)=>{let V=Tj(),J=kj(k,{relative:m}),Q=v.toLowerCase()==="get"?"get":"post",Y=typeof k=="string"&&Cf.test(k),X=$=>{if(y&&y($),$.defaultPrevented)return;$.preventDefault();let Se=$.nativeEvent.submitter,Ee=Se?.getAttribute("formmethod")||v;V(Se||$.currentTarget,{fetcherKey:h,method:Ee,navigate:x,replace:o,state:f,relative:m,preventScrollReset:C,viewTransition:A})};return T.createElement("form",{ref:G,method:Q,action:J,onSubmit:d?y:X,..._,"data-discover":!Y&&r==="render"?"true":void 0})});yj.displayName="Form";function Sj(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Ef(r){let h=T.useContext(Ha);return Ce(h,Sj(r)),h}function Nj(r,{target:h,replace:x,state:d,preventScrollReset:o,relative:f,viewTransition:v}={}){let k=gf(),y=wt(),m=Bn(r,{relative:f});return T.useCallback(C=>{if(lj(C,h)){C.preventDefault();let A=x!==void 0?x:Dn(y)===Dn(m);k(r,{replace:A,state:d,preventScrollReset:o,relative:f,viewTransition:v})}},[y,k,m,x,d,h,r,o,f,v])}var Cj=0,Ej=()=>`__${String(++Cj)}__`;function Tj(){let{router:r}=Ef("useSubmit"),{basename:h}=T.useContext(_l),x=Zm();return T.useCallback(async(d,o={})=>{let{action:f,method:v,encType:k,formData:y,body:m}=nj(d,h);if(o.navigate===!1){let C=o.fetcherKey||Ej();await r.fetch(C,x,o.action||f,{preventScrollReset:o.preventScrollReset,formData:y,body:m,formMethod:o.method||v,formEncType:o.encType||k,flushSync:o.flushSync})}else await r.navigate(o.action||f,{preventScrollReset:o.preventScrollReset,formData:y,body:m,formMethod:o.method||v,formEncType:o.encType||k,replace:o.replace,state:o.state,fromRouteId:x,flushSync:o.flushSync,viewTransition:o.viewTransition})},[r,h,x])}function kj(r,{relative:h}={}){let{basename:x}=T.useContext(_l),d=T.useContext(at);Ce(d,"useFormAction must be used inside a RouteContext");let[o]=d.matches.slice(-1),f={...Bn(r||".",{relative:h})},v=wt();if(r==null){f.search=v.search;let k=new URLSearchParams(f.search),y=k.getAll("index");if(y.some(C=>C==="")){k.delete("index"),y.filter(A=>A).forEach(A=>k.append("index",A));let C=k.toString();f.search=C?`?${C}`:""}}return(!r||r===".")&&o.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),x!=="/"&&(f.pathname=f.pathname==="/"?x:lt([x,f.pathname])),Dn(f)}function zj(r,{relative:h}={}){let x=T.useContext(pf);Ce(x!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:d}=Ef("useViewTransitionState"),o=Bn(r,{relative:h});if(!x.isTransitioning)return!1;let f=tt(x.currentLocation.pathname,d)||x.currentLocation.pathname,v=tt(x.nextLocation.pathname,d)||x.nextLocation.pathname;return is(o.pathname,v)!=null||is(o.pathname,f)!=null}const Aj=()=>{const[r,h]=T.useState(!1),[x,d]=T.useState(""),[o,f]=T.useState(!1),v=wt();T.useEffect(()=>{const A=()=>{const _=window.innerWidth<=768;f(_),h(!_)};return A(),window.addEventListener("resize",A),()=>window.removeEventListener("resize",A)},[]);const k=[{id:"home",title:"ہوم پیج",emoji:"🏠",path:"/"},{id:"css-background",title:"پس منظر کی خصوصیات",emoji:"🎨",path:"/css-background"},{id:"css-position",title:"پوزیشننگ",emoji:"📍",path:"/css-position"},{id:"css-display",title:"ڈسپلے پراپرٹیز",emoji:"📱",path:"/css-display"},{id:"css-responsive-bar",title:"ریسپانسیو نیویگیشن بار",emoji:"🍔",path:"/css-responsive-bar"},{id:"css-pseudo",title:"Pseudo Elements",emoji:"✨",path:"/css-pseudo"}];T.useEffect(()=>{const A=k.find(_=>v.pathname===_.path||v.pathname.startsWith(_.path+"/"));A&&d(A.id)},[v.pathname]);const y=()=>{h(!r)},m=()=>{o&&h(!1)},C=()=>{o&&h(!1)};return t.jsxs(t.Fragment,{children:[r&&o&&t.jsx("div",{className:"sidebar-overlay",onClick:C}),o&&t.jsxs("button",{className:`sidebar-toggle ${r?"open":""}`,onClick:y,"aria-label":"Toggle sidebar",children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]}),t.jsxs("aside",{className:`sidebar ${r?"open":""}`,children:[t.jsx("div",{className:"sidebar-header",children:t.jsxs("div",{className:"logo",children:[t.jsx("div",{className:"logo-icon",children:"🎨"}),t.jsxs("div",{className:"logo-text",children:[t.jsx("h2",{children:"CSS اردو"}),t.jsx("p",{children:"ٹیوٹوریلز"})]})]})}),t.jsxs("nav",{className:"sidebar-nav",children:[t.jsxs("div",{className:"nav-header",children:[t.jsx("h3",{children:"فہرست ابواب"}),t.jsxs("div",{className:"progress-indicator",children:[t.jsx("div",{className:"progress-bar",children:t.jsx("div",{className:"progress-fill",style:{width:"50%"}})}),t.jsx("span",{children:"50% مکمل"})]})]}),t.jsx("ul",{className:"chapter-list",children:k.map((A,_)=>t.jsxs("li",{className:"chapter-item",children:[t.jsxs(At,{to:A.path,className:`chapter-link ${x===A.id?"active":""}`,onClick:m,children:[t.jsx("div",{className:"chapter-number",children:String(_+1).padStart(2,"0")}),t.jsxs("div",{className:"chapter-content",children:[t.jsx("div",{className:"chapter-emoji",children:A.emoji}),t.jsxs("div",{className:"chapter-info",children:[t.jsx("span",{className:"chapter-title",children:A.title}),t.jsx("span",{className:"chapter-status",children:x===A.id?"جاری ہے":"مکمل"})]})]}),t.jsx("div",{className:"chapter-arrow",children:"›"})]}),A.id==="css-display"&&t.jsxs("div",{className:"sub-buttons-single-line",children:[t.jsx(At,{to:"/css-display-grid",className:`sub-button ${v.pathname==="/css-display-grid"?"active":""}`,onClick:m,children:"Grid"}),t.jsx(At,{to:"/css-display/flex",className:`sub-button ${v.pathname==="/css-display/flex"?"active":""}`,onClick:m,children:"Flex"})]}),A.id==="css-responsive-bar"&&t.jsxs("div",{className:"sub-buttons-single-line",children:[t.jsx(At,{to:"/css-responsive-bar/html",className:`sub-button ${v.pathname==="/css-responsive-bar/html"?"active":""}`,onClick:m,children:"HTML"}),t.jsx(At,{to:"/css-responsive-bar/css",className:`sub-button ${v.pathname==="/css-responsive-bar/css"?"active":""}`,onClick:m,children:"CSS"}),t.jsx(At,{to:"/css-responsive-bar/js",className:`sub-button ${v.pathname==="/css-responsive-bar/js"?"active":""}`,onClick:m,children:"Java Script"})]})]},A.id))})]})]})]})},sf=()=>{const r=gf(),h=()=>{r("/css-background")},x=()=>{window.open("https://cssanimations01.web.app","_blank")};return t.jsxs("div",{className:"homepage",children:[t.jsxs("section",{className:"hero-section",children:[t.jsxs("div",{className:"hero-content",children:[t.jsx("h1",{children:"CSS اردو ٹیوٹوریلز میں خوش آمدید"}),t.jsx("p",{children:"مکمل CSS سیکھیں اردو زبان میں - بنیادیں سے لے کر ایڈوانسڈ تک"}),t.jsxs("div",{className:"hero-buttons",children:[t.jsx("button",{className:"cta-button primary",onClick:h,children:"ابھی شروع کریں"}),t.jsx("button",{className:"cta-button secondary",onClick:x,children:"CSS Animations"})]})]}),t.jsx("div",{className:"hero-visual",children:t.jsxs("div",{className:"code-window",children:[t.jsx("div",{className:"window-header",children:t.jsxs("div",{className:"window-dots",children:[t.jsx("span",{}),t.jsx("span",{}),t.jsx("span",{})]})}),t.jsxs("div",{className:"code-content",children:[t.jsx("span",{className:"code-comment",children:"/* CSS اردو میں */"}),t.jsx("span",{className:"code-selector",children:".عنصر"})," ","{",t.jsx("span",{className:"code-property",children:"  پس-منظر: #667eea;"}),t.jsx("span",{className:"code-property",children:"  رنگ: سفید;"}),t.jsx("span",{className:"code-property",children:"  حاشیہ: 1rem;"}),"}"]})]})})]}),t.jsx("section",{className:"features-section",children:t.jsxs("div",{className:"container",children:[t.jsx("h2",{children:"کیوں سیکھیں CSS ہمارے ساتھ؟"}),t.jsxs("div",{className:"features-grid",children:[t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-icon",children:"🎯"}),t.jsx("h3",{children:"عمودی طریقہ"}),t.jsx("p",{children:"عملی مثالوں کے ساتھ step-by-step سیکھیں"})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-icon",children:"📱"}),t.jsx("h3",{children:"رسپانسیو ڈیزائن"}),t.jsx("p",{children:"موبائل فرسٹ اپروچ کے ساتھ"})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-icon",children:"🚀"}),t.jsx("h3",{children:"جدید ترین"}),t.jsx("p",{children:"تازہ ترین CSS فیچرز کا احاطہ"})]}),t.jsxs("div",{className:"feature-card",children:[t.jsx("div",{className:"feature-icon",children:"🌙"}),t.jsx("h3",{children:"اردو زبان"}),t.jsx("p",{children:"مادری زبان میں بہتر سمجھ"})]})]})]})})]})},wj=()=>{const[r,h]=T.useState("background-image"),[x,d]=T.useState(""),[o,f]=T.useState(!1),v=(C,A)=>{navigator.clipboard.writeText(C),d(A),setTimeout(()=>d(""),2e3)},k=[{id:"background-image",title:"background-image",description:"عنصر کے لیے ایک یا زیادہ پس منظر کی تصاویر مقرر کرتا ہے۔",code:`background-image: url("image.jpg");

/* Multiple images */
background-image: url("layer1.png"), url("layer2.png");`,demoStyle:{backgroundImage:'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&w=800")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},{id:"background-color",title:"background-color",description:"عنصر کا پس منظر کا رنگ مقرر کرتا ہے۔",code:"background-color: #f5f5f5;",demoStyle:{backgroundColor:"#f5f5f5",padding:"20px",borderRadius:"8px"}},{id:"background-repeat",title:"background-repeat",description:"پس منظر کی تصویر کیسے دہرائی جائے گی اس کی وضاحت کرتا ہے۔",code:`background-repeat: no-repeat;

/* Other values: repeat, repeat-x, repeat-y, space, round */`,demoStyle:{backgroundImage:'url("https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&w=100")',backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"50px 50px"}},{id:"background-position",title:"background-position",description:"پس منظر کی تصویر کی ابتدائی پوزیشن مقرر کرتا ہے۔",code:`background-position: center center;
background-position: 50% 100px;
background-position: top right;`,demoStyle:{backgroundImage:'url("https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&w=100")',backgroundRepeat:"no-repeat",backgroundPosition:"top right",backgroundSize:"80px 80px"}},{id:"background-size",title:"background-size",description:"پس منظر کی تصویر کا سائز مقرر کرتا ہے۔",code:`background-size: cover;

/* Other values: auto, contain, 200px 150px, 50% 80% */`,demoStyle:{backgroundImage:'url("https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&w=800")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}},{id:"background-attachment",title:"background-attachment",description:"پس منظر کی تصویر اسکرول ہوتی ہے یا فکسڈ رہتی ہے۔",code:`background-attachment: fixed;

/* Other values: scroll, local */`,demoStyle:{backgroundImage:'url("https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&w=800")',backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",height:"200px"}},{id:"background-clip",title:"background-clip",description:"پس منظر کس حد تک عنصر کے اندر پھیلا ہوا ہے۔",code:`background-clip: content-box;

/* Other values: border-box, padding-box */`,demoStyle:{background:"linear-gradient(135deg, #667eea, #764ba2)",backgroundClip:"content-box",padding:"20px",border:"10px dashed rgba(0,0,0,0.2)",color:"white",textAlign:"center"}},{id:"background-origin",title:"background-origin",description:"پس منظر کی تصویر کی پوزیشننگ ایریا کہاں سے شروع ہوتی ہے۔",code:`background-origin: border-box;

/* Other values: padding-box, content-box */`,demoStyle:{backgroundImage:'url("https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3&w=100")',backgroundRepeat:"no-repeat",backgroundOrigin:"border-box",padding:"20px",border:"10px dashed rgba(0,0,0,0.2)",backgroundSize:"60px 60px"}},{id:"background-blend-mode",title:"background-blend-mode",description:"پس منظر کی تصاویر ایک دوسرے کے ساتھ اور عنصر کے پس منظر کے رنگ کے ساتھ کیسے ملتی ہیں۔",code:`background-blend-mode: multiply;

/* Other values: normal, screen, overlay, darken, lighten */`,demoStyle:{backgroundImage:'url("https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&w=800"), linear-gradient(135deg, #ff6b6b, #4ecdc4)',backgroundBlendMode:"multiply",backgroundSize:"cover",backgroundPosition:"center"}},{id:"background-shorthand",title:"background (Shorthand)",description:"تمام پس منظر کی خصوصیات کو ایک پراپرٹی میں یکجا کرتا ہے۔",code:'background: #222 url("bg.jpg") no-repeat center center / cover fixed;',demoStyle:{background:'#222 url("https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&w=800") no-repeat center center / cover',color:"white",textAlign:"center",padding:"20px"}}],y=`/* === مکمل CSS پس منظر کی مثال === */
/* یہ کوڈ ایک خوبصورت ستاروں والی رات کی تھیم بناتا ہے */

body {
  /* بنیادی سیاہ پس منظر */
  background-color: #000000;
  
  /* ستاروں کی تصویر */
  background-image: url("stars-background.jpg");
  
  /* تصویر کو دہرانا بند کریں */
  background-repeat: no-repeat;
  
  /* تصویر کو مرکز میں رکھیں */
  background-position: center center;
  
  /* تصویر کو پورے ویب پیج پر پھیلائیں */
  background-size: cover;
  
  /* تصویر کو فکسڈ رکھیں (اسکرول نہ ہو) */
  background-attachment: fixed;
  
  /* پس منظر کو بورڈر تک پھیلائیں */
  background-clip: border-box;
  
  /* پس منظر کی پوزیشننگ بورڈر سے شروع کریں */
  background-origin: border-box;
  
  /* تصویر اور رنگ کا ملاپ ہلکا رکھیں */
  background-blend-mode: lighten;
}

/* مختصر ورژن: تمام پراپرٹیز ایک لائن میں */
body {
  background: #000 url("stars-background.jpg") no-repeat center center / cover fixed border-box border-box lighten;
}`,m=[{property:"background-image",description:"پس منظر کی تصویر مقرر کرتا ہے",values:"url(), none, gradient"},{property:"background-color",description:"پس منظر کا رنگ مقرر کرتا ہے",values:"color value, transparent"},{property:"background-repeat",description:"تصویر کی دہرائی کو کنٹرول کرتا ہے",values:"repeat, no-repeat, repeat-x, repeat-y, space, round"},{property:"background-position",description:"تصویر کی پوزیشن مقرر کرتا ہے",values:"top, bottom, left, right, center, x% y%, x-pos y-pos"},{property:"background-size",description:"تصویر کا سائز مقرر کرتا ہے",values:"auto, cover, contain, length, percentage"},{property:"background-attachment",description:"تصویر اسکرول ہوتی ہے یا فکسڈ رہتی ہے",values:"scroll, fixed, local"},{property:"background-clip",description:"پس منظر کہاں تک پھیلتا ہے",values:"border-box, padding-box, content-box"},{property:"background-origin",description:"پس منظر کی پوزیشننگ ایریا",values:"border-box, padding-box, content-box"},{property:"background-blend-mode",description:"تصاویر کا آپس میں ملاپ",values:"normal, multiply, screen, overlay, darken, lighten, etc."},{property:"background (shorthand)",description:"تمام خصوصیات کو یکجا کرتا ہے",values:"[color] [image] [position] / [size] [repeat] [attachment] [origin] [clip]"}];return t.jsxs("div",{className:"chbackground-container",dir:"rtl",children:[t.jsxs("header",{className:"header",children:[t.jsx("h1",{children:"CSS پس منظر کی خصوصیات"}),t.jsx("p",{children:"CSS میں background اور background-image پراپرٹیز کسی بھی عنصر کے پس منظر میں تصویر لگانے اور اسے کنٹرول کرنے کے لیے استعمال ہوتی ہیں۔"})]}),t.jsxs("section",{className:"toc",children:[t.jsx("h2",{children:"فہرست"}),t.jsx("div",{className:"toc-grid",children:k.map(C=>t.jsxs("button",{style:{fontSize:"18px",color:"beige"},className:`toc-item ${r===C.id?"active":""}`,onClick:()=>h(C.id),children:[t.jsx("span",{className:"emoji",children:"🎨"}),t.jsx("span",{children:C.title})]},C.id))})]}),t.jsx("section",{className:"examples",children:k.map(C=>t.jsxs("div",{className:`example ${r===C.id?"active":""}`,id:C.id,children:[t.jsx("h2",{children:C.title}),t.jsx("div",{className:"explanation",children:t.jsx("p",{children:C.description})}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{style:{color:"#ffe4c4"},children:"کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>v(C.code,C.id),children:x===C.id?"کاپی ہو گیا!":"کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:C.code})})]}),t.jsxs("div",{className:"result",children:[t.jsx("h3",{children:"نتیجہ:"}),t.jsx("div",{className:"demo",style:C.demoStyle,children:t.jsxs("p",{style:{color:"white",textAlign:"center",padding:"20px"},children:[C.title," کا ڈیمو"]})})]})]},C.id))}),t.jsxs("section",{className:"complete-example-section",id:"complete-example",children:[t.jsxs("div",{className:"example-header",children:[t.jsx("h2",{children:"🚀 مکمل عملی مثال"}),t.jsx("p",{className:"section-intro",children:"ذیل میں ایک مکمل عملی مثال دی گئی ہے جو تمام پس منظر کی خصوصیات کو ایک ساتھ استعمال کرتی ہے۔ یہ مثال ایک خوبصورت ستاروں والی رات کی تھیم بناتی ہے جس میں ہر پراپرٹی کے استعمال کو واضح کیا گیا ہے۔"})]}),t.jsxs("div",{className:"example-card featured",children:[t.jsxs("div",{className:"code-section featured",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{style:{color:"#ffe4c4"},children:"📝 مکمل CSS کوڈ (اردو تشریح کے ساتھ)"}),t.jsx("button",{className:"copy-btn featured",onClick:()=>v(y,"complete"),children:x==="complete"?"✅ کاپی ہو گیا!":"📋 پورا کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block featured",children:t.jsx("pre",{children:y})})]}),t.jsxs("div",{className:"result",children:[t.jsx("h3",{children:"👁️ نتیجہ (دیکھیں کیسے نظر آتا ہے):"}),t.jsx("div",{className:"demo featured",style:{backgroundColor:"#0a0a2a",backgroundImage:'url("https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?ixlib=rb-4.0.3&w=800")',backgroundRepeat:"no-repeat",backgroundPosition:"center",backgroundSize:"cover",backgroundAttachment:"scroll",backgroundClip:"border-box",backgroundOrigin:"border-box",backgroundBlendMode:"lighten",height:"300px",borderRadius:"12px",boxShadow:"0 8px 32px rgba(0,0,0,0.3)"},children:t.jsxs("div",{style:{color:"white",textAlign:"center",padding:"40px 20px",background:"rgba(0,0,0,0.6)",borderRadius:"12px",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[t.jsx("h3",{style:{marginBottom:"15px",fontSize:"24px",color:"#9bbebeff"},children:"✨ ستاروں والی رات ✨"}),t.jsx("p",{style:{fontSize:"16px",lineHeight:"1.6",maxWidth:"500px",color:"#dfc4c4ff"},children:"یہ ایک مکمل پس منظر کی مثال ہے جس میں تمام CSS background properties استعمال کی گئی ہیں۔ اس کوڈ کو کاپی کر کے اپنے پروجیکٹ میں استعمال کریں!"})]})})]}),t.jsxs("div",{className:"usage-tips",children:[t.jsx("h4",{children:"💡 استعمال کے نکات:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"یہ کوڈ مکمل ویب پیج کے پس منظر کے لیے مثالی ہے"}),t.jsx("li",{children:"ستاروں کی تصویر کی جگہ اپنی پسندیدہ تصویر استعمال کریں"}),t.jsx("li",{children:"رنگوں اور blend-mode کو اپنی ضرورت کے مطابق تبدیل کریں"}),t.jsx("li",{children:"مختصر ورژن بھی شامل ہے جو ایک لائن میں تمام properties کو combine کرتا ہے"})]})]})]})]}),t.jsxs("section",{className:"summary",id:"summary",children:[t.jsx("h2",{children:"خلاصہ جدول"}),t.jsx("div",{className:"summary-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"پراپرٹی"}),t.jsx("th",{children:"تفصیل"}),t.jsx("th",{children:"قدریں"})]})}),t.jsx("tbody",{children:m.map((C,A)=>t.jsxs("tr",{children:[t.jsx("td",{children:C.property}),t.jsx("td",{children:C.description}),t.jsx("td",{children:C.values})]},A))})]})})]})]})},Mj=()=>{const[r,h]=T.useState(!1),[x,d]=T.useState(""),o={stickyNavbar:T.useRef(null),absoluteOverlay:T.useRef(null),badgeCount:T.useRef(null),relativeExample:T.useRef(null),absoluteExample:T.useRef(null),fixedExample:T.useRef(null),stickyExample:T.useRef(null),staticExample:T.useRef(null),zindexExample:T.useRef(null)},f=v=>{const k=o[v].current;if(k){const y=k.textContent||k.innerText;navigator.clipboard.writeText(y).then(()=>{d(v),h(!0),setTimeout(()=>{h(!1),d("")},2e3)}).catch(m=>{console.error("Failed to copy: ",m)})}};return t.jsxs("div",{className:"css-position-container",children:[t.jsxs("header",{className:"header",children:[t.jsx("h1",{children:"CSS Positioning - Complete Guide"}),t.jsx("p",{children:"ویب پر ہر چیز کو صحیح جگہ بٹھانے کا ماسٹر ٹول"})]}),t.jsxs("nav",{className:"navigation-buttons",children:[t.jsx("button",{className:"nav-btn",onClick:()=>document.getElementById("position-properties").scrollIntoView({behavior:"smooth"}),style:{color:"beige",fontSize:"18px"},children:"📊 Properties"}),t.jsx("button",{className:"nav-btn",onClick:()=>document.getElementById("offset-properties").scrollIntoView({behavior:"smooth"}),style:{color:"beige",fontSize:"18px"},children:"🎯 Offset"}),t.jsx("button",{className:"nav-btn",onClick:()=>document.getElementById("relative-example").scrollIntoView({behavior:"smooth"}),style:{color:"beige",fontSize:"18px"},children:"🟢 Relative"}),t.jsx("button",{className:"nav-btn",onClick:()=>document.getElementById("absolute-example").scrollIntoView({behavior:"smooth"}),style:{color:"beige",fontSize:"18px"},children:"🔴 Absolute"}),t.jsx("button",{className:"nav-btn",onClick:()=>document.getElementById("fixed-example").scrollIntoView({behavior:"smooth"}),style:{color:"beige",fontSize:"18px"},children:"🔵 Fixed"}),t.jsx("button",{className:"nav-btn",onClick:()=>document.getElementById("sticky-example").scrollIntoView({behavior:"smooth"}),style:{color:"beige",fontSize:"18px"},children:"🟡 Sticky"}),t.jsx("button",{className:"nav-btn",onClick:()=>document.getElementById("zindex-example").scrollIntoView({behavior:"smooth"}),style:{color:"beige",fontSize:"18px"},children:"🎭 Z-Index"}),t.jsx("button",{className:"nav-btn",onClick:()=>document.getElementById("practical-examples").scrollIntoView({behavior:"smooth"}),style:{color:"beige",fontSize:"18px"},children:"💡 All Examples"}),t.jsx("button",{className:"nav-btn",onClick:()=>document.getElementById("final-tips").scrollIntoView({behavior:"smooth"}),style:{color:"beige",fontSize:"18px"},children:"🧠 Tips"})]}),r&&t.jsx("div",{className:"copy-confirmation",children:t.jsxs("div",{className:"confirmation-box",children:[t.jsx("span",{className:"tick-mark",children:"✓"}),t.jsx("p",{children:"کوڈ کاپی ہو گیا ہے! 🎉"})]})}),t.jsxs("div",{className:"content-wrapper",children:[t.jsxs("section",{className:"section",id:"position-properties",children:[t.jsx("h2",{children:"CSS Position Properties (Complete Guide)"}),t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"properties-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Property"}),t.jsx("th",{children:"Behavior"}),t.jsx("th",{children:"Urdu میں سمجھ"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("code",{children:"static"})," (default)"]}),t.jsx("td",{children:"Normal document flow follow کرتا ہے"}),t.jsx("td",{children:"جو جگہ ملے، وہی رہو 😄"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"relative"})}),t.jsx("td",{children:"اپنی original position سے move ہوتا ہے"}),t.jsx("td",{children:"تھوڑا سا اوپر نیچے… معصوم سا حرکت"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"absolute"})}),t.jsx("td",{children:"Flow سے نکل کر nearest positioned parent کے حساب سے set"}),t.jsx("td",{children:"آزاد منش — جس parent کے دل میں رہنا چاہے 😆"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"fixed"})}),t.jsx("td",{children:"ہمیشہ viewport کے حساب سے fix"}),t.jsx("td",{children:"Scroll کرو → یہ وہیں"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"sticky"})}),t.jsx("td",{children:"Scroll پر behavior بدلتا ہے: کچھ تک relative پھر fix"}),t.jsx("td",{children:"Navbar چمٹ جاتا ہے اوپر 👇"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"inherit"})}),t.jsx("td",{children:"Parent سے position copy"}),t.jsx("td",{children:"گھریلو بچہ"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"initial"})}),t.jsx("td",{children:"Default static apply"}),t.jsx("td",{children:"واپس پرانی عادت"})]})]})]})})]}),t.jsxs("section",{className:"section",id:"offset-properties",children:[t.jsx("h2",{children:"Offset Properties"}),t.jsx("p",{className:"note",children:"(صرف static کے علاوہ باقی میں چلتے ہیں)"}),t.jsxs("div",{className:"offset-properties",children:[t.jsx("div",{className:"property-item",children:t.jsx("code",{children:"top"})}),t.jsx("div",{className:"property-item",children:t.jsx("code",{children:"right"})}),t.jsx("div",{className:"property-item",children:t.jsx("code",{children:"bottom"})}),t.jsx("div",{className:"property-item",children:t.jsx("code",{children:"left"})}),t.jsxs("div",{className:"property-item",children:[t.jsx("code",{children:"z-index"})," → layers control (کس کے اوپر/نیچے)"]})]})]}),t.jsxs("section",{className:"section",id:"practical-examples",children:[t.jsx("h2",{children:"Practical Examples with Code"}),t.jsxs("div",{className:"example-card",id:"relative-example",children:[t.jsx("h3",{children:"🟢 Relative Positioning"}),t.jsx("p",{children:"Element اپنی جگہ سے thoda sa move ہوگا۔"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>f("relativeExample"),children:"کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{ref:o.relativeExample,children:`.box {
  position: relative;
  top: 10px;
  left: 20px;
}`})})]}),t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"relative-demo",children:[t.jsx("div",{className:"original-pos",children:"Original Position"}),t.jsx("div",{className:"relative-box",children:"Relative Box (top: 10px, left: 20px)"})]})})]}),t.jsxs("div",{className:"example-card",id:"absolute-example",children:[t.jsx("h3",{children:"🔴 Absolute Positioning"}),t.jsx("p",{children:"یہ .parent کے کونے میں چپک جائے گا۔ اگر parent میں position نہ ہو → یہ پوری page (body) کے حساب سے set ہو گا۔"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>f("absoluteExample"),children:"کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{ref:o.absoluteExample,children:`.parent {
  position: relative;
}

.box {
  position: absolute;
  top: 0;
  right: 0;
}`})})]}),t.jsx("div",{className:"demo-container",children:t.jsx("div",{className:"absolute-demo",children:t.jsxs("div",{className:"parent-box",children:["Parent (relative)",t.jsx("div",{className:"absolute-box",children:"Absolute Box (top: 0, right: 0)"})]})})})]}),t.jsxs("div",{className:"example-card",id:"fixed-example",children:[t.jsx("h3",{children:"🔵 Fixed Positioning"}),t.jsx("p",{children:"Scroll کرو → Button ادھر ہی رہے گا۔ Mostly: Back-to-top button, sticky ad, navbar"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>f("fixedExample"),children:"کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{ref:o.fixedExample,children:`.btn {
  position: fixed;
  top: 20px;
  right: 20px;
}`})})]}),t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"fixed-demo",children:[t.jsx("div",{className:"fixed-box",children:"Fixed Box (top: 20px, right: 20px)"}),t.jsx("p",{children:"Scroll down to see fixed positioning in action"})]})})]}),t.jsxs("div",{className:"example-card",id:"sticky-example",children:[t.jsx("h3",{children:"🟡 Sticky Positioning"}),t.jsx("p",{children:"شروع میں relative، Scroll پر fix جیسا۔ Trending for modern navbars 🚀"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>f("stickyExample"),children:"کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{ref:o.stickyExample,children:`.nav {
  position: sticky;
  top: 0;
}`})})]}),t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"sticky-demo",children:[t.jsx("div",{className:"sticky-box",children:"Sticky Box (top: 0)"}),t.jsxs("div",{className:"scroll-content",children:[t.jsx("p",{children:"Scroll down to see sticky behavior..."}),t.jsx("div",{className:"content-placeholder"}),t.jsx("div",{className:"content-placeholder"}),t.jsx("div",{className:"content-placeholder"}),t.jsx("div",{className:"content-placeholder"}),t.jsx("div",{className:"content-placeholder"})]})]})})]}),t.jsxs("div",{className:"example-card",children:[t.jsx("h3",{children:"🧱 Static Positioning (Default)"}),t.jsx("p",{children:"No movement — offset properties ignore"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>f("staticExample"),children:"کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{ref:o.staticExample,children:`p {
  position: static;
}`})})]})]}),t.jsxs("div",{className:"example-card",id:"zindex-example",children:[t.jsx("h3",{children:"🎭 Z-Index (Layering)"}),t.jsx("p",{children:"10 والا اوپر نظر آئے گا!"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>f("zindexExample"),children:"کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{ref:o.zindexExample,children:`.box1 { 
  z-index: 10; 
}

.box2 { 
  z-index: 5; 
}`})})]}),t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"zindex-demo",children:[t.jsx("div",{className:"z-box box-low",children:"z-index: 5"}),t.jsx("div",{className:"z-box box-high",children:"z-index: 10"})]})})]}),t.jsxs("div",{className:"example-card",children:[t.jsx("h3",{children:"✅ Sticky Navbar Example"}),t.jsx("p",{children:"Scroll کرو → Navbar اوپر چپک جائے گا۔ بہت modern websites میں یہی تکنیک ہوتی ہے"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"HTML & CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>f("stickyNavbar"),children:"کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{ref:o.stickyNavbar,children:`<!DOCTYPE html>
<html lang="en">
<head>
<style>
  body {
    margin: 0;
    font-family: sans-serif;
  }

  .navbar {
    background: #008B8B;
    color: white;
    padding: 15px;
    position: sticky;
    top: 0;
    font-size: 20px;
  }

  .content {
    padding: 20px;
    height: 1200px;
    background: #f4f4f4;
  }
</style>
</head>
<body>

<div class="navbar">Sticky Navbar</div>
<div class="content">
  Scroll down to see the sticky effect 😄
</div>

</body>
</html>`})})]})]}),t.jsxs("div",{className:"example-card",children:[t.jsx("h3",{children:"✅ Absolute Overlay Card"}),t.jsx("p",{children:"Image پر text یا button overlay — card designs میں بہت چلتا ہے"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"HTML & CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>f("absoluteOverlay"),children:"کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{ref:o.absoluteOverlay,children:`<!DOCTYPE html>
<html lang="en">
<head>
<style>
  .card {
    position: relative;
    width: 300px;
    margin: 30px auto;
  }

  .card img {
    width: 100%;
    border-radius: 10px;
  }

  .overlay {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background: rgba(0,0,0,0.6);
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
</style>
</head>
<body>

<div class="card">
  <img src="https://via.placeholder.com/300x200" alt="Image">
  <div class="overlay">Beautiful View 🌅</div>
</div>

</body>
</html>`})})]}),t.jsx("div",{className:"demo-container",children:t.jsx("div",{className:"card-demo",children:t.jsxs("div",{className:"card",children:[t.jsx("div",{className:"card-image",children:"📸 Image Placeholder"}),t.jsx("div",{className:"overlay",children:"Beautiful View 🌅"})]})})})]}),t.jsxs("div",{className:"example-card",children:[t.jsx("h3",{children:"✅ Badge Count on Notification Icon"}),t.jsx("p",{children:"WhatsApp, Facebook، YouTube — ہر جگہ یہی تکنیک استعمال ہوتی ہے 🔔❤️🔥"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"HTML & CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>f("badgeCount"),children:"کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{ref:o.badgeCount,children:`<!DOCTYPE html>
<html lang="en">
<head>
<style>
  .notification {
    position: relative;
    width: 40px;
    height: 40px;
    background: #ddd;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    margin: 50px auto;
  }

  .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: red;
    color: white;
    font-size: 12px;
    padding: 3px 7px;
    border-radius: 50%;
    font-weight: bold;
    min-width: 20px;
    text-align: center;
  }
</style>
</head>

<body>

<div class="notification">
  🔔
  <span class="badge">5</span>
</div>

</body>
</html>`})})]}),t.jsx("div",{className:"demo-container",children:t.jsx("div",{className:"badge-demo",children:t.jsxs("div",{className:"notification",children:["🔔",t.jsx("span",{className:"badge",children:"5"})]})})})]})]}),t.jsxs("section",{className:"section tips-section",id:"final-tips",children:[t.jsx("h2",{children:"🧠 Final Tips"}),t.jsxs("div",{className:"tips-grid",children:[t.jsxs("div",{className:"tip-card",children:[t.jsx("h4",{children:"Absolute Positioning"}),t.jsx("p",{children:"Absolute ہمیشہ کسی positioned parent ڈھونڈتا ہے"})]}),t.jsxs("div",{className:"tip-card",children:[t.jsx("h4",{children:"Fixed Positioning"}),t.jsx("p",{children:"Fixed → viewport کے ساتھ چلتا ہے"})]}),t.jsxs("div",{className:"tip-card",children:[t.jsx("h4",{children:"Sticky Positioning"}),t.jsx("p",{children:"Sticky → scrolling کے rules پر کام کرتا ہے"})]}),t.jsxs("div",{className:"tip-card",children:[t.jsx("h4",{children:"Z-Index"}),t.jsx("p",{children:"z-index تب ہی کام کرتا ہے جب position static نہ ہو"})]})]})]})]})]})},Rj=()=>{const[r,h]=T.useState(""),[x,d]=T.useState(!1),o=(v,k)=>{navigator.clipboard.writeText(v),h(k),setTimeout(()=>h(""),2e3)},f={example1:`<!-- HTML -->
<button class="love-btn">Like</button>

/* CSS */
.love-btn::before {
  content: "💖 ";
}
.love-btn::after {
  content: " 💕";
}`,example2:`<!-- HTML -->
<button class="glow-btn">Hover Me</button>

/* CSS */
.glow-btn {
  position: relative;
  padding: 12px 24px;
  background: #4CAF50;
  color: white;
  border: none;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  overflow: hidden;
}

.glow-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(255,255,255,0.5), transparent 70%);
  opacity: 0;
  transition: 0.5s;
}

.glow-btn:hover::before {
  opacity: 1;
  transform: scale(1.5);
}`,example3:`<!-- HTML -->
<button class="border-btn">Explore</button>

/* CSS */
.border-btn {
  position: relative;
  padding: 12px 36px;
  background: none;
  color: #00e6e6;
  font-size: 20px;
  border: 2px solid transparent;
  cursor: pointer;
  overflow: hidden;
  transition: 0.4s;
}

.border-btn::before,
.border-btn::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  background: #00e6e6;
  transition: 0.4s;
}

.border-btn::before {
  top: 0;
  left: -100%;
}
.border-btn::after {
  bottom: 0;
  right: -100%;
}

.border-btn:hover::before {
  left: 0;
}
.border-btn:hover::after {
  right: 0;
}`,example4:`/* ============================= */
/* ROTATE BUTTON CSS - گھومتا ہوا بٹن */
/* ============================= */

.rotate-btn {
  position: relative;      /* بٹن کے اندر دوسری چیزوں کو پوزیشن کرنے کے لیے */
  padding: 14px 36px;      /* بٹن کے اندر جگہ: اوپر نیچے 14px، دائیں بائیں 36px */
  font-size: 20px;         /* لکھائی کا سائز */
  color: #00ffcc;          /* لکھائی کا رنگ سبزی مائل نیلا */
  background: #111;        /* پس منظر کا رنگ گہرا سیاہ */
  border: none;            /* کوئی بارڈر نہیں */
  border-radius: 8px;      /* کونوں کو گول بناتا ہے */
  overflow: hidden;        /* اگر کوئی چیز بٹن کے باہر جائے تو دکھائی نہیں دے گی */
  cursor: pointer;         /* ماؤس لے جانے پر ہاتھ کا نشان بنتا ہے */
  text-transform: uppercase; /* تمام لکھائی کیپٹل لیٹر میں */
  letter-spacing: 2px;     /* حروف کے درمیان فاصلہ */
  z-index: 1;              /* یہ سب سے اوپر والی پرت پر ہوگا */
  transition: all 0.3s ease; /* تمام تبدیلیوں میں 0.3 سیکنڈ کا ہموار اثر */
}

/* ============================= */
/* گھومتے ہوئے رنگوں والا بارڈر */
/* ============================= */

.rotate-btn::before {
  content: "";             /* یہ ایک خالی عنصر ہے جس میں کوئی لکھائی نہیں */
  position: absolute;      /* یہ بٹن کے اندر کہیں بھی رکھا جا سکتا ہے */
  top: -2px;               /* اوپر سے 2px باہر */
  left: -2px;              /* بائیں سے 2px باہر */
  width: calc(100% + 4px); /* بٹن سے 4px بڑی چوڑائی */
  height: calc(100% + 4px); /* بٹن سے 4px بڑی اونچائی */
  background: linear-gradient(45deg, #00fff0, #ff00c3, #00fff0, #ff00c3, #00fff0); /* مختلف رنگوں کا میل */
  background-size: 400% 400%; /* رنگوں کے میل کا سائز بڑا کیا ہوا */
  border-radius: 10px;     /* کونوں کو گول بناتا ہے */
  z-index: -1;             /* لکھائی کے نیچے آجائے گا */
  animation: rotateBorder 3s linear infinite; /* 3 سیکنڈ کی لگاتار اینیمیشن */
}

/* ============================= */
/* اندرونی سیاہ پرت */
/* ============================= */

.rotate-btn::after {
  content: "";             /* یہ ایک خالی عنصر ہے جس میں کوئی لکھائی نہیں */
  position: absolute;      /* یہ بٹن کے اندر کہیں بھی رکھا جا سکتا ہے */
  top: 2px;                /* اوپر سے 2px اندر */
  left: 2px;               /* بائیں سے 2px اندر */
  right: 2px;              /* دائیں سے 2px اندر */
  bottom: 2px;             /* نیچے سے 2px اندر */
  background: #111;        /* پس منظر کا رنگ گہرا سیاہ */
  border-radius: 6px;      /* کونوں کو گول بناتا ہے */
  z-index: -1;             /* لکھائی کے نیچے آجائے گا */
}

/* ============================= */
/* اینیمیشن کی تعریف - رنگوں کا گھومنا */
/* ============================= */

@keyframes rotateBorder {
  0% {
    background-position: 0% 50%;   /* شروع میں رنگ بائیں طرف */
  }
  50% {
    background-position: 100% 50%; /* درمیان میں رنگ دائیں طرف */
  }
  100% {
    background-position: 0% 50%;   /* آخر میں رنگ پھر بائیں طرف */
  }
}

/* ============================= */
/* ہوور ایفیکٹ - ماؤس لے جانے پر */
/* ============================= */

.rotate-btn:hover {
  color: white;            /* لکھائی کا رنگ سفید ہو جاتا ہے */
  transform: scale(1.15);  /* بٹن 15% بڑا ہو جاتا ہے */
}

/* ============================= */
/* کلک ایفیکٹ - بٹن دبانے پر */
/* ============================= */

.rotate-btn:active {
  transform: scale(0.95);  /* بٹن 5% چھوٹا ہو جاتا ہے */
}

/* ============================= */
/* CSS PROPERTIES EXPLANATION */
/* ============================= */

/*
position: relative - بٹن کے اندر دوسری چیزوں کو پوزیشن کرنے کے لیے
position: absolute - بٹن کے اندر کہیں بھی رکھا جا سکتا ہے
overflow: hidden - باہر نکلنے والا مواد چھپ جاتا ہے
z-index - پرتوں کو کنٹرول کرتا ہے
transition - ہموار حرکت کے لیے
::before اور ::after - بٹن کے اندر اضافی پرتیں
border-radius - کونوں کو گول بناتا ہے
linear-gradient - رنگوں کا ہموار میل
animation - حرکت اور اینیمیشن کے لیے
transform: scale - سائز بڑھانا یا چھوٹا کرنا
*/

/*
KEYFRAMES سمجھیں:
@keyframes ایک اینیمیشن بناتا ہے جس کے تین حصے ہیں:
0% - شروع میں کیا ہوگا
50% - آدے راستے میں کیا ہوگا  
100% - آخر میں کیا ہوگا

background-position: رنگوں کی پوزیشن بدلتی ہے
0% 50% - رنگ بائیں طرف
100% 50% - رنگ دائیں طرف
یہی بار بار ہوتا رہتا ہے جس سے گھومتا ہوا اثر بنتا ہے
*/

/*
HOW IT WORKS:
1. بٹن کے باہر ایک رنگین بارڈر ہے جو گھومتا رہتا ہے
2. اندر ایک سیاہ پرت ہے جو لکھائی کو صاف دکھاتی ہے
3. ماؤس لے جانے پر بٹن بڑا ہو جاتا ہے
4. کلک کرنے پر بٹن چھوٹا ہو جاتا ہے
5. رنگین بارڈر لگاتار گھومتا رہتا ہے
*/

/* ============================= */
/* USAGE INSTRUCTIONS */
/* ============================= */

/*
HTML میں استعمال کریں:
<button class="rotate-btn">Hover Me</button>

FEATURES:
- گھومتا ہوا رنگین بارڈر
- ہوور پر سائز بڑھتا ہے
- کلک پر سائز چھوٹا ہوتا ہے
- جدید ترین ڈیزائن
*/

/* ============================= */
/* ANIMATION کی مکمل وضاحت */
/* ============================= */

/*
ANIMATION کیا ہے؟
اینی میشن کا مطلب ہے "حرکت" یا "چلتی ہوئی تصویر"۔ 
جیسے کارٹون فلموں میں تصویریں حرکت کرتی ہیں، ویسے ہی ویب سائٹ پر 
اینی میشن سے چیزیں حرکت کرتی ہیں۔

ANIMATION کے تین بنیادی حصے ہیں:
1. اینی میشن کا نام (Animation Name)
2. اینی میشن کا وقت (Duration)  
3. اینی میشن کا انداز (Timing Function)
*/

/* ============================= */
/* ANIMATION PROPERTIES سمجھیں */
/* ============================= */

/*
animation: rotateBorder 3s linear infinite;

اس لائن کے چار حصے ہیں:

1. rotateBorder - اینی میشن کا نام (ہم نے خود دیا ہے)
2. 3s - اینی میشن کا وقت (3 سیکنڈ)
3. linear - اینی میشن کا انداز (ہموار رفتار)
4. infinite - اینی میشن لگاتار چلتی رہے گی

اینی میشن کے دیگر انداز:
ease - آہستہ شروع، تیز درمیان، آہستہ آخر
ease-in - آہستہ شروع، تیز آخر
ease-out - تیز شروع، آہستہ آخر
ease-in-out - آہستہ شروع اور آخر
*/

/* ============================= */
/* @keyframes کیسے کام کرتا ہے؟ */
/* ============================= */

/*
@keyframes rotateBorder {
  0% { background-position: 0% 50%; }   - شروع میں
  50% { background-position: 100% 50%; } - آدے راستے میں  
  100% { background-position: 0% 50%; }  - آخر میں
}

یہ اینی میشن تین مراحل میں ہوتی ہے:

0% (شروع): رنگ بائیں طرف ہوں گے
50% (آدھا): رنگ دائیں طرف چلے جائیں گے  
100% (آخر): رنگ پھر بائیں طرف آجائیں گے

پھر یہی عمل بار بار دہرایا جاتا ہے۔
*/

/* ============================= */
/* ANIMATION کی عملی مثال */
/* ============================= */

/*
سوچیں جیسے ایک گاڑی سفر کر رہی ہے:
- 0% = گاڑی گھر سے نکلتی ہے
- 50% = گاڑی منزل پر پہنچتی ہے  
- 100% = گاڑی واپس گھر آجاتی ہے

پھر یہی سفر بار بار ہوتا رہتا ہے۔
اسی طرح ہماری اینی میشن میں رنگ سفر کرتے ہیں۔
*/

/* ============================= */
/* background-position سمجھیں */
/* ============================= */

/*
background-position: X% Y%;

X% - افقی پوزیشن (Horizontal Position)
Y% - عمودی پوزیشن (Vertical Position)

مثال:
background-position: 0% 50%;   - بائیں طرف، درمیان میں
background-position: 100% 50%; - دائیں طرف، درمیان میں

یہ رنگوں کی پوزیشن بدلتا ہے جس سے گھومتا ہوا اثر بنتا ہے۔
*/

/* ============================= */
/* ANIMATION کی سادہ مثال */
/* ============================= */

/*
سادہ الفاظ میں اینی میشن یہ ہے:
"کسی چیز کو ایک پوزیشن سے دوسری پوزیشن تک 
ہموار طریقے سے حرکت دینا"

مثال کے طور پر:
- روشنی کا آن جانا
- پنکھے کا گھومنا  
- گاڑی کا چلنا
- پانی کا بہنا

یہ سب اینی میشن کی مثالیں ہیں۔
*/

/* ============================= */
/* ہماری اینی میشن کا خلاصہ */
/* ============================= */

/*
ہماری rotateBorder اینی میشن:
1. 3 سیکنڈ میں مکمل ہوتی ہے
2. لگاتار چلتی رہتی ہے (infinite)
3. رنگ بائیں سے دائیں اور پھر بائیں آتے ہیں
4. یہ سلسلہ بار بار دہرایا جاتا ہے
5. نتیجہ: گھومتا ہوا رنگین بارڈر
*/

/* ============================= */
/* ANIMATION کے فوائد */
/* ============================= */

/*
1. ویب سائٹ خوبصورت لگتی ہے
2. صارف کی توجہ کھینچتی ہے
3. جدید ڈیزائن بنتا ہے
4. صارف کو تجربہ بہتر ملتا ہے
5. پرافیشنل لگتی ہے
*/

/*مختصر خلاصہ:
"اینی میشن" کا سادہ مطلب ہے "حرکت"۔ جیسے آپ کارٹون دیکھتے ہیں تو تصویریں حرکت کرتی ہیں، ویسے ہی ویب سائٹ پر اینی میشن سے چیزیں حرکت کرتی ہیں۔ ہماری اینی میشن میں رنگ بار بار بائیں سے دائیں اور پھر بائیں آتے ہیں، جس سے گھومتا ہوا اثر بنتا ہے۔ یہ لگاتار چلتی رہتی ہے اور ہر 3 سیکنڈ بعد دہرائی جاتی ہے۔
*/`,example5:`<!-- HTML -->
<button class="neon-btn">Click Here</button>

/* CSS */
.neon-btn {
  position: relative;
  padding: 14px 40px;
  background: #0a0a0a;
  color: #0ff;
  border: 2px solid #0ff;
  border-radius: 6px;
  font-size: 20px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s;
}

.neon-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(120deg, transparent, rgba(0,255,255,0.7), transparent);
  transform: skewX(-20deg);
}

.neon-btn:hover::before {
  animation: sweep 0.8s ease-in-out;
}

@keyframes sweep {
  0% { left: -75%; }
  100% { left: 125%; }
}`,example6:`/* ============================= */
/* BUTTON 2 CSS - سلائیڈنگ ایفیکٹ والا بٹن */
/* ============================= */

.btn2 {
  font-size: 24px;         /* لکھائی کا سائز */
  font-weight: bold;       /* لکھائی موٹی ہوگی */
  z-index: 1;              /* یہ سب سے اوپر والی پرت پر ہوگا */
  width: 200px;            /* بٹن کی چوڑائی */
  height: 50px;            /* بٹن کی اونچائی */
  background-color: #fff;  /* پس منظر کا رنگ سفید */
  border: 2px solid blue;  /* بارڈر: 2px موٹا، نیلا */
  border-radius: 10px;     /* کونوں کو گول بناتا ہے */
  color: blue;             /* لکھائی کا رنگ نیلا */
  cursor: pointer;         /* ماؤس لے جانے پر ہاتھ کا نشان بنتا ہے */
  /* تین پرتوں والا سایہ */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1),     /* ہلکا سایہ */
              0px 8px 15px rgba(0, 0, 0, 0.15),    /* درمیانی سایہ */
              0px 12px 20px rgba(0, 0, 0, 0.2);    /* گہرا سایہ */
  transition: all 0.5s ease; /* تمام تبدیلیوں میں 0.5 سیکنڈ کا ہموار اثر */
  position: relative;      /* بٹن کے اندر دوسری چیزوں کو پوزیشن کرنے کے لیے */
  overflow: hidden;        /* اگر کوئی چیز بٹن کے باہر جائے تو دکھائی نہیں دے گی */
}

/* ============================= */
/* بائیں طرف والی سرخ پرت */
/* ============================= */

.btn2::before {
  content: "";             /* یہ ایک خالی عنصر ہے جس میں کوئی لکھائی نہیں */
  top: 0;                  /* اوپر سے شروع */
  left: 0;                 /* بائیں طرف سے شروع */
  width: 100%;             /* پوری چوڑائی لے گا */
  height: 100%;            /* پوری اونچائی لے گا */
  background: red;         /* پس منظر کا رنگ سرخ */
  position: absolute;      /* یہ بٹن کے اندر کہیں بھی رکھا جا سکتا ہے */
  z-index: -1;             /* لکھائی کے نیچے آجائے گا */
  transform: translateX(-90%); /* شروع میں بائیں طرف 90% چھپا ہوا */
  transition: 0.5s all ease; /* تمام تبدیلیوں میں 0.5 سیکنڈ کا ہموار اثر */
}

/* ============================= */
/* ہوور پر بائیں والی پرت کا اثر */
/* ============================= */

.btn2:hover::before {
  transform: translateX(-50%); /* ہوور پر بائیں طرف 50% چھپا ہوا */
}

/* ============================= */
/* دائیں طرف والی سرخ پرت */
/* ============================= */

.btn2::after {
  content: "";             /* یہ ایک خالی عنصر ہے جس میں کوئی لکھائی نہیں */
  top: 0;                  /* اوپر سے شروع */
  left: 0;                 /* بائیں طرف سے شروع */
  width: 100%;             /* پوری چوڑائی لے گا */
  width: 100%;             /* پوری چوڑائی لے گا */
  height: 100%;            /* پوری اونچائی لے گا */
  background: red;         /* پس منظر کا رنگ سرخ */
  position: absolute;      /* یہ بٹن کے اندر کہیں بھی رکھا جا سکتا ہے */
  z-index: -1;             /* لکھائی کے نیچے آجائے گا */
  transform: translateX(90%); /* شروع میں دائیں طرف 90% چھپا ہوا */
  transition: 0.5s all ease; /* تمام تبدیلیوں میں 0.5 سیکنڈ کا ہموار اثر */
}

/* ============================= */
/* ہوور پر دائیں والی پرت کا اثر */
/* ============================= */

.btn2:hover::after {
  transform: translateX(50%); /* ہوور پر دائیں طرف 50% چھپا ہوا */
}

/* ============================= */
/* ہوور ایفیکٹ - ماؤس لے جانے پر */
/* ============================= */

.btn2:hover {
  /* گہرے سائے */
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.2),     /* گہرا سایہ */
              0px 10px 18px rgba(0, 0, 0, 0.25),   /* زیادہ گہرا سایہ */
              0px 14px 24px rgba(0, 0, 0, 0.3);    /* سب سے گہرا سایہ */
  color: #fff;            /* لکھائی کا رنگ سفید ہو جاتا ہے */
  border-color: #fff;     /* بارڈر کا رنگ سفید ہو جاتا ہے */
}

/* ============================= */
/* کلک ایفیکٹ - بٹن دبانے پر */
/* ============================= */

.btn2:active {
  /* ہلکے سائے */
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1),     /* ہلکا سایہ */
              0px 4px 8px rgba(0, 0, 0, 0.15);    /* درمیانی سایہ */
  transform: translateY(8px); /* بٹن 8px نیچے چلا جاتا ہے */
}

/* ============================= */
/* CSS PROPERTIES EXPLANATION */
/* ============================= */

/*
transform: translateX() - افقی طور پر حرکت دیتا ہے
transform: translateY() - عمودی طور پر حرکت دیتا ہے
box-shadow - سایہ بناتا ہے (X-offset, Y-offset, blur, color)
rgba() - رنگ بناتا ہے (red, green, blue, alpha/شفافیت)
transition - ہموار حرکت کے لیے
::before اور ::after - بٹن کے اندر اضافی پرتیں
z-index - پرتوں کو کنٹرول کرتا ہے
overflow: hidden - باہر نکلنے والا مواد چھپ جاتا ہے
*/

/*
HOW IT WORKS:
1. بٹن کے اندر دو سرخ پرتیں ہیں
2. ایک پرت بائیں طرف چھپی ہوئی ہے
3. دوسری پرت دائیں طرف چھپی ہوئی ہے
4. ہوور پر دونوں پرتیں اندر آتی ہیں
5. سائے گہرے ہو جاتے ہیں
6. لکھائی سفید ہو جاتی ہے
7. کلک پر بٹن نیچے چلا جاتا ہے
*/

/* ============================= */
/* USAGE INSTRUCTIONS */
/* ============================= */

/*
HTML میں استعمال کریں:
<button class="btn2">Click Here</button>

FEATURES:
- دو طرف سے سلائیڈنگ ایفیکٹ
- ہوور پر گہرے سائے
- کلک پر نیچے حرکت
- جدید ترین ڈیزائن
*/

/* ============================= */
/* CUSTOMIZATION */
/* ============================= */

/*
رنگ بدلنے کے لیے:
background: green; - پرتوں کا رنگ
color: red; - لکھائی کا رنگ
border: 2px solid black; - بارڈر کا رنگ

سائز بدلنے کے لیے:
width: 300px; - بٹن کی چوڑائی
height: 60px; - بٹن کی اونچائی
font-size: 20px; - لکھائی کا سائز

رفتار بدلنے کے لیے:
transition: all 0.3s ease; - تیز رفتار
transition: all 1s ease; - آہستہ رفتار
*/

/* ============================= */
::before اور ::after کی مکمل وضاحت
/* ============================= */

/*
::before اور ::after کیا ہیں؟
یہ دو "سیوڈو ایلیمنٹس" ہیں جو کسی بھی ایلیمنٹ کے
اندر دو اضافی پرتیں بناتے ہیں۔

::before - ایلیمنٹ کے شروع میں پرت بناتا ہے
::after - ایلیمنٹ کے آخر میں پرت بناتا ہے

سادہ الفاظ میں:
جیسے سینڈوچ کی دو ڈبل روٹی ہوتی ہیں،
::before اوپر کی ڈبل روٹی ہے
::after نیچے کی ڈبل روٹی ہے
اور درمیان میں ہمارا اصلی مواد ہوتا ہے
*/

/* ============================= */
/* ہمارے بٹن میں ::before اور ::after کا کردار */
/* ============================= */

.btn2::before {
  /* یہ پرت بٹن کے بائیں طرف سے آتی ہے */
  transform: translateX(-90%); /* شروع میں بائیں طرف 90% باہر */
}

.btn2::after {
  /* یہ پرت بٹن کے دائیں طرف سے آتی ہے */
  transform: translateX(90%); /* شروع میں دائیں طرف 90% باہر */
}

/*
کیسے کام کرتا ہے؟

شروع میں:
::before بائیں طرف چھپا ہوا ہوتا ہے (-90%)
::after دائیں طرف چھپا ہوا ہوتا ہے (90%)

ہوور پر:
::before بائیں سے اندر آتا ہے (-50%)
::after دائیں سے اندر آتا ہے (50%)

نتیجہ:
دونوں پرتیں مل کر پورا بٹن سرخ کر دیتی ہیں!
*/

/* ============================= */
/* translateX() کی وضاحت */
/* ============================= */

/*
translateX() افقی طور پر حرکت دیتا ہے

translateX(-90%) کا مطلب:
- بائیں طرف 90% حرکت کرنا
- منفی نشان بائیں طرف جانے کے لیے

translateX(90%) کا مطلب:
- دائیں طرف 90% حرکت کرنا  
- مثبت نشان دائیں طرف جانے کے لیے

ہوور پر دونوں 50% پر آجاتے ہیں
جس سے درمیان میں ملاقات ہوتی ہے
*/

/* ============================= */
/* عملی مثال کے ساتھ سمجھیں */
/* ============================= */

/*
سوچیں جیسے دو پردے ہیں:
- بائیں طرف کا پردہ (::before)
- دائیں طرف کا پردہ (::after)

شروع میں: دونوں پردے باہر ہیں
ہوور پر: دونوں پردے اندر آتے ہیں
اور مل کر پورا اسٹیج ڈھک دیتے ہیں
*/

/* ============================= */
/* کوڈ کی مرحلہ وار وضاحت */
/* ============================= */

/* مرحلہ 1: شروع کی پوزیشن */
.btn2::before { transform: translateX(-90%); }  /* بائیں باہر */
.btn2::after { transform: translateX(90%); }    /* دائیں باہر */

/* مرحلہ 2: ہوور پر پوزیشن */  
.btn2:hover::before { transform: translateX(-50%); } /* بائیں اندر */
.btn2:hover::after { transform: translateX(50%); }   /* دائیں اندر */

/*
کیوں -50% اور 50%؟
-50% = بائیں طرف آدھا چھپا ہوا
50% = دائیں طرف آدھا چھپا ہوا

جب دونوں ملتے ہیں تو:
بائیں والا -50% پر ہوتا ہے
دائیں والا 50% پر ہوتا ہے
دونوں مل کر 100% کور کر دیتے ہیں!
*/

/* ============================= */
/* ویژیوئلائزیشن کے لیے */
/* ============================= */

/*
شروع میں:

[ سفید بٹن ]
::before ← بائیں باہر
::after → دائیں باہر

ہوور پر:

[ سرخ بٹن ]
::before ← بائیں اندر  
::after → دائیں اندر

دونوں مل کر پورا بٹن سرخ بنا دیتے ہیں!
*/

/* ============================= */
/* خلاصہ */
/* ============================= */

/*
::before - بائیں طرف والی پرت
::after - دائیں طرف والی پرت

دونوں مل کر:
1. سلائیڈنگ ایفیکٹ بناتے ہیں
2. پورا بٹن رنگین بناتے ہیں
3. خوبصورت ٹرانزیشن دیتے ہیں

یہ ٹیکنیک جدید ویب ڈیزائن میں بہت استعمال ہوتی ہے!
*/
`,example7:`/* ============================= */
/* LIQUID BUTTON CSS - پانی جیسا بٹن */
/* ============================= */

.liquid-btn {
  position: relative;      /* بٹن کے اندر دوسری چیزوں کو پوزیشن کرنے کے لیے */
  padding: 15px 40px;      /* بٹن کے اندر جگہ: اوپر نیچے 15px، دائیں بائیں 40px */
  font-size: 22px;         /* لکھائی کا سائز */
  font-weight: bold;       /* لکھائی موٹی ہوگی */
  color: blue;             /* لکھائی کا رنگ نیلا */
  border: 3px solid blue;  /* بٹن کا حاشیہ: 3px موٹا، سیدھا، نیلا */
  border-radius: 10px;     /* کونوں کو گول بناتا ہے */
  overflow: hidden;        /* اگر کوئی چیز بٹن کے باہر جائے تو دکھائی نہیں دے گی */
  background: transparent; /* پس منظر صاف شفاف */
  cursor: pointer;         /* ماؤس لے جانے پر ہاتھ کا نشان بنتا ہے */
  transition: color 0.4s ease; /* رنگ بدلنے میں 0.4 سیکنڈ کا ہموار اثر */
  z-index: 1;              /* یہ سب سے اوپر والی پرت پر ہوگا */
}

/* ============================= */
/* پانی والا ایفیکٹ - LIQUID EFFECT */
/* ============================= */

.liquid-btn::before {
  content: "";             /* یہ ایک خالی عنصر ہے جس میں کوئی لکھائی نہیں */
  position: absolute;      /* یہ بٹن کے اندر کہیں بھی رکھا جا سکتا ہے */
  bottom: -100%;           /* شروع میں بٹن کے نیچے مکمل چھپا ہوا ہوگا */
  left: 0;                 /* بائیں طرف سے شروع ہوگا */
  width: 100%;             /* پوری چوڑائی لے گا */
  height: 100%;            /* پوری اونچائی لے گا */
  background: linear-gradient(180deg, #00aaff, #0066ff); /* نیچے سے اوپر ہلکے نیلے سے گہرے نیلے کا رنگ */
  transition: all 0.6s ease; /* تمام تبدیلیوں میں 0.6 سیکنڈ کا ہموار اثر */
  z-index: -1;             /* لکھائی کے نیچے آجائے گا */
  border-radius: 0 0 50% 50%; /* نیچے کے کونے آدھے گول ہوں گے جیسے پانی کا ببل */
}

/* ============================= */
/* ہوور ایفیکٹ - HOVER EFFECT */
/* ============================= */

.liquid-btn:hover::before {
  bottom: 0;               /* جب ماؤس لے جاؤ گے تو نیچے سے اوپر آجائے گا */
  border-radius: 0;        /* گول کونے سیدھے ہو جائیں گے */
}

.liquid-btn:hover {
  color: white;            /* جب ماؤس لے جاؤ گے تو لکھائی سفید ہو جائے گی */
}

/* ============================= */
/* CSS PROPERTIES EXPLANATION */
/* ============================= */

/*
position: relative - بٹن کے اندر دوسری چیزوں کو پوزیشن کرنے کے لیے
position: absolute - بٹن کے اندر کہیں بھی رکھا جا سکتا ہے
overflow: hidden - باہر نکلنے والا مواد چھپ جاتا ہے
z-index: 1 - سب سے اوپر والی پرت
z-index: -1 - سب سے نیچے والی پرت
transition - ہموار حرکت کے لیے
::before - بٹن کے اندر ایک اضافی پرت بناتا ہے
border-radius - کونوں کو گول بناتا ہے
linear-gradient - رنگوں کا ہموار میل
bottom: -100% - نیچے مکمل چھپا ہوا
bottom: 0 - اوپر آجانا
*/

/*
HOW IT WORKS:
1. بٹن کے اندر ایک چھپی ہوئی پرت ہے
2. یہ پرت نیچے سے اوپر آتی ہے
3. شروع میں گول شکل ہوتی ہے
4. اوپر آکر سیدھی ہو جاتی ہے
5. لکھائی کا رنگ سفید ہو جاتا ہے
6. پانی کی طرح کا اثر بنتا ہے
*/

/* ============================= */
/* USAGE INSTRUCTIONS */
/* ============================= */

/*
HTML میں استعمال کریں:
<button class="liquid-btn">Hover Me 💧</button>

FEATURES:
- پانی جیسا ہموار اثر
- رنگوں کا خوبصورت میل
- ہوور پر خوبصورت تبدیلی
- مکمل ریسپانسیو
*/

/* ============================= */
/* CUSTOMIZATION */
/* ============================= */

/*
رنگ بدلنے کے لیے:
color: red; - لکھائی کا رنگ
border: 3px solid green; - بارڈر کا رنگ
background: linear-gradient(180deg, #ff0000, #00ff00); - پس منظر کے رنگ

سائز بدلنے کے لیے:
padding: 20px 50px; - بٹن کا سائز
font-size: 18px; - لکھائی کا سائز
border-radius: 20px; - کونوں کی گولائی

رفتار بدلنے کے لیے:
transition: color 0.8s ease; - رنگ کی تبدیلی کی رفتار
transition: all 1s ease; - تمام تبدیلیوں کی رفتار
*/`,example8:`<!-- HTML -->
<!-- یہ ایک بٹن ہے جس پر آگ والا ایفیکٹ لگے گا -->
<button class="fire-btn">Hover Me 🔥</button>
css
Copy code
/* CSS */

/* fire-btn کلاس والے بٹن کے لیے بنیادی اسٹائل */
.fire-btn {
  position: relative; /* تاکہ اندر ایک اضافی layer رکھی جا سکے (::before) */
  padding: 15px 40px; /* بٹن کے اندر اوپر نیچے اور دائیں بائیں فاصلہ */
  font-size: 22px; /* ٹیکسٹ کا سائز */
  font-weight: bold; /* ٹیکسٹ موٹا (Bold) */
  color: white; /* ٹیکسٹ کا رنگ سفید */
  background: #ff6600; /* بٹن کا پس منظر نارنجی */
  border: none; /* بٹن کے گرد کوئی لکیر (بارڈر) نہیں */
  border-radius: 8px; /* کنارے گول کر دیے */
  cursor: pointer; /* ماؤس لے جانے پر ہتھیلی کا نشان دکھے گا */
  transition: 0.4s; /* smooth تبدیلی کے لیے وقت */
  overflow: hidden; /* اضافی حصہ بٹن سے باہر نہ نکلے */
}

/* یہ حصہ بٹن کے اندر ایک چمکدار دائرہ (flame light) بناتا ہے */
.fire-btn::before {
  content: ""; /* خالی مواد، لیکن layer بنانے کے لیے ضروری */
  position: absolute; /* بٹن کے اندر فکس جگہ پر رکھنا */
  top: 0; /* اوپر سے 0 فاصلے پر */
  left: 0; /* بائیں سے 0 فاصلے پر */
  width: 100%; /* پورے بٹن پر پھیل جائے */
  height: 100%; /* پورے بٹن کی اونچائی کے برابر */
  background: radial-gradient(circle, rgba(255,200,0,0.6), transparent 70%); 
  /* دائرہ نما رنگ: درمیان میں ہلکا پیلا، باہر کی طرف شفاف */
  opacity: 0; /* شروع میں غیر واضح (چھپا ہوا) */
  transition: opacity 0.5s ease; /* آہستہ آہستہ ظاہر ہونے کا اثر */
}

/* جب ماؤس بٹن پر لایا جائے (Hover کیا جائے) */
.fire-btn:hover::before {
  opacity: 1; /* layer ظاہر ہو جائے */
  animation: flame 1s infinite alternate; /* آگ کے جلنے جیسی حرکت */
}

/* یہ animation آگ کے شعلے جیسا zoom effect دیتی ہے */
@keyframes flame {
  0% { transform: scale(1); opacity: 0.6; } /* ابتدا میں معمولی سائز اور ہلکی چمک */
  100% { transform: scale(1.3); opacity: 1; } /* پھر بڑا اور زیادہ روشن ہو جائے */
}`,example9:`<!-- HTML -->
<!-- یہ بٹن بجلی کے جھٹکے (Electric Shock) جیسا ایفیکٹ دکھاتا ہے -->
<button class="electric-shock-btn">Hover Me ⚡</button>
css
Copy code
/* CSS */

/* بٹن کی عام حالت (Normal State) */
.electric-shock-btn {
  position: relative; /* تاکہ ::before جیسی اندرونی layer رکھی جا سکے */
  padding: 15px 50px; /* بٹن کے اندر فاصلہ (padding) */
  font-size: 22px; /* ٹیکسٹ کا سائز */
  font-weight: bold; /* موٹا فونٹ (Bold) */
  color: #0ff; /* ٹیکسٹ کا رنگ ہلکا نیلا (Cyan) */
  background: transparent; /* پس منظر شفاف */
  border: 2px solid #0ff; /* نیلا بارڈر */
  border-radius: 10px; /* کنارے ہلکے گول */
  cursor: pointer; /* ماؤس پر ہاتھ کا نشان */
  text-transform: uppercase; /* تمام حروف بڑے (Capital) کر دیے */
  letter-spacing: 2px; /* حروف کے درمیان تھوڑا فاصلہ */
  transition: 0.3s ease; /* نرم تبدیلی کے لیے */
  box-shadow: 0 0 15px #0ff; /* نیلا glow */
  overflow: hidden; /* اندرونی حرکت بٹن سے باہر نہ جائے */
}

/* یہ layer بجلی کی چمک والی لکیر بناتی ہے */
.electric-shock-btn::before {
  content: ""; /* خالی layer */
  position: absolute; /* بٹن کے اندر مقرر */
  top: 0;
  left: -100%; /* شروع میں بائیں طرف چھپی ہوئی */
  width: 100%; /* بٹن کے برابر چوڑائی */
  height: 100%; /* بٹن کے برابر اونچائی */
  background: linear-gradient(
    120deg,
    transparent,
    rgba(0, 255, 255, 0.7),
    transparent
  ); /* درمیان میں بجلی جیسی چمک */
  transition: 0.5s; /* smooth حرکت */
}

/* ماؤس لانے پر layer بائیں سے دائیں گزرتی ہے */
.electric-shock-btn:hover::before {
  left: 100%; /* دائیں طرف جا کر غائب ہو جاتی ہے */
}

/* بٹن پر ماؤس آنے پر رنگ، روشنی، اور جھٹکا animation */
.electric-shock-btn:hover {
  color: #fff; /* ٹیکسٹ سفید ہو جاتا ہے */
  border-color: #fff; /* بارڈر بھی سفید */
  box-shadow: 
    0 0 10px #0ff, 
    0 0 30px #0ff, 
    0 0 60px #0ff; /* مزید glow */

  animation: electric-shock 0.2s ease-in-out 2; 
  /* بٹن ہلکے سے ہلتا ہے (جھٹکا دو بار لگتا ہے) */
}

/* جھٹکا دینے والی حرکت (Shock Animation) */
@keyframes electric-shock {
  0% { transform: translateX(0); } /* اصل جگہ */
  25% { transform: translateX(-4px); } /* تھوڑا بائیں جھٹکا */
  50% { transform: translateX(4px); } /* تھوڑا دائیں جھٹکا */
  75% { transform: translateX(-2px); } /* ہلکی واپسی */
  100% { transform: translateX(0); } /* واپس اصل جگہ */
}`,example10:`<!-- HTML -->
<!-- یہ بٹن قوسِ قزح (Rainbow) کی چمک اور اندرونی روشنی (Inner Glow) کے ساتھ ہے -->
<button class="rainbow-btn">Hover Me 🌈</button>
css
Copy code
/* CSS */

/* بٹن کی بنیادی شکل اور اسٹائل */
.rainbow-btn {
  position: relative; /* تاکہ اندرونی اور بیرونی layers رکھی جا سکیں */
  padding: 15px 50px; /* بٹن کے اندر فاصلہ */
  font-size: 22px; /* فونٹ کا سائز */
  font-weight: bold; /* موٹا فونٹ */
  color: white; /* ٹیکسٹ کا رنگ سفید */
  background: rgba(255, 255, 255, 0.05); /* ہلکا شفاف پس منظر */
  border: 3px solid transparent; /* بارڈر شفاف */
  border-radius: 12px; /* کنارے گول */
  text-transform: uppercase; /* حروف بڑے (Capital) */
  letter-spacing: 2px; /* حروف کے درمیان فاصلہ */
  cursor: pointer; /* ماؤس آنے پر ہاتھ کا نشان */
  overflow: hidden; /* اضافی اثر باہر نہ نکلے */
  transition: 0.3s; /* smooth حرکت کے لیے */
  z-index: 1; /* اوپر رکھنے کے لیے */
}

/* قوسِ قزح کی چمک والا layer (باہر کی glow) */
.rainbow-btn::before {
  content: ""; /* خالی layer */
  position: absolute; /* بٹن کے عین پیچھے */
  top: -3px;
  left: -3px;
  width: calc(100% + 6px); /* بٹن سے ذرا بڑا */
  height: calc(100% + 6px);
  background: linear-gradient(
    45deg,
    red, orange, yellow, green, cyan, blue, violet, red
  ); /* قوسِ قزح کے رنگ */
  background-size: 400%; /* رنگوں کی لمبائی تاکہ حرکت محسوس ہو */
  border-radius: 14px; /* کنارے نرم گول */
  z-index: -1; /* بٹن کے پیچھے */
  filter: blur(8px); /* دھندلا سا glow */
  animation: rainbowGlow 5s linear infinite; /* رنگ حرکت کرتے رہیں */
}

/* یہ animation رنگوں کو بائیں سے دائیں گھماتی ہے */
@keyframes rainbowGlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* اندرونی glow pulse کے لیے نیا layer */
.rainbow-btn::after {
  content: ""; /* خالی layer */
  position: absolute; /* بٹن کے اندر */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    rgba(255,255,255,0.4) 0%,
    transparent 70%
  ); /* درمیان میں ہلکی سفید روشنی */
  opacity: 0; /* شروع میں غیر واضح */
  transition: opacity 0.4s ease;
  border-radius: 12px; /* کنارے برابر گول */
  z-index: 0; /* بٹن کے نیچے مگر glow کے اوپر */
}

/* ماؤس آنے پر اندر سے روشنی پھوٹتی ہے */
.rainbow-btn:hover::after {
  opacity: 1; /* روشنی ظاہر ہو جائے */
  animation: innerGlowPulse 1.5s ease-in-out infinite; /* دھڑکنے (Pulse) جیسا اثر */
}

/* اندر کی روشنی کا دھڑکنے والا اثر */
@keyframes innerGlowPulse {
  0% { transform: scale(1); opacity: 0.6; } /* نارمل حالت */
  50% { transform: scale(1.2); opacity: 1; } /* روشنی پھیلتی ہے */
  100% { transform: scale(1); opacity: 0.6; } /* واپس معمول پر آتی ہے */
}`};return t.jsxs("div",{className:"css-pseudo-container",dir:"rtl",children:[t.jsxs("header",{className:"header",children:[t.jsx("h1",{children:"🌟 CSS Pseudo-elements Button Animation Tutorial"}),t.jsx("p",{children:"مکمل گائیڈ :before اور :after کے ساتھ - 10 مثالیں (آسان → مشکل)"})]}),t.jsxs("section",{className:"toc-section",children:[t.jsx("h2",{children:"📚 فہرست مضامین"}),t.jsx("div",{className:"toc-grid",children:[{id:1,title:"دل والا بٹن",link:"#example1"},{id:2,title:"Glow Effect Button",link:"#example2"},{id:3,title:"Border Reveal Animation",link:"#example3"},{id:4,title:"Rotating Border Button",link:"#example4"},{id:5,title:"Neon Line Sweep Button",link:"#example5"},{id:6,title:"Double Sliding Button",link:"#example6"},{id:7,title:"Liquid Fill Button",link:"#example7"},{id:8,title:"Fire Glow Button",link:"#example8"},{id:9,title:"Electric Neon Button",link:"#example9"},{id:10,title:"Rainbow Pulse Button",link:"#example10"}].map(v=>t.jsxs("div",{className:"toc-item",children:[t.jsx("span",{className:"toc-number",children:v.id}),t.jsx("a",{href:v.link,style:{color:"beige",fontSize:"18px"},children:v.title})]},v.id))})]}),t.jsxs("section",{id:"example1",className:"example-section",children:[t.jsx("h2",{children:"مثال 1: ❤️ دل والا بٹن"}),t.jsx("p",{className:"description",children:"یہ سب سے آسان مثال ہے۔ اس میں ہم بٹن کے آگے اور پیچھے دل کے emoji لگائیں گے۔"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h3",{children:"🎯 لائیو ڈیمو:"}),t.jsx("div",{className:"demo-box",children:t.jsx("button",{className:"love-btn",children:"Like"})})]}),t.jsxs("div",{className:"code-container",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:"💻 HTML & CSS کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(f.example1,"example1"),children:r==="example1"?"✔ کاپی ہوگیا":"📋 کوڈ کاپی کریں"})]}),t.jsx("pre",{className:"code-block",children:f.example1})]})]}),t.jsxs("section",{id:"example2",className:"example-section",children:[t.jsx("h2",{children:"مثال 2: ✨ Glow Effect Button"}),t.jsx("p",{className:"description",children:"یہ بٹن hover کرنے پر glow کرتا ہے۔ بہت خوبصورت اثر!"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h3",{children:"🎯 لائیو ڈیمو:"}),t.jsx("div",{className:"demo-box",children:t.jsx("button",{className:"glow-btn",children:"Hover Me"})})]}),t.jsxs("div",{className:"code-container",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:"💻 HTML & CSS کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(f.example2,"example2"),children:r==="example2"?"✔ کاپی ہوگیا":"📋 کوڈ کاپی کریں"})]}),t.jsx("pre",{className:"code-block",children:f.example2})]})]}),t.jsxs("section",{id:"example3",className:"example-section",children:[t.jsx("h2",{children:"مثال 3: 🔲 Border Reveal Animation"}),t.jsx("p",{className:"description",children:"Hover کرنے پر بٹن کے اوپر اور نیچے لکیریں ظاہر ہوتی ہیں۔"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h3",{children:"🎯 لائیو ڈیمو:"}),t.jsx("div",{className:"demo-box",children:t.jsx("button",{className:"border-btn",children:"Explore"})})]}),t.jsxs("div",{className:"code-container",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:"💻 HTML & CSS کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(f.example3,"example3"),children:r==="example3"?"✔ کاپی ہوگیا":"📋 کوڈ کاپی کریں"})]}),t.jsx("pre",{className:"code-block",children:f.example3})]})]}),t.jsxs("section",{id:"example4",className:"example-section",children:[t.jsx("h2",{children:"مثال 4: 🌀 Rotating Border Button"}),t.jsx("p",{className:"description",children:"یہ بٹن رنگین گھومتا ہوا border بناتا ہے۔ بہت دلکش!"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h3",{children:"🎯 لائیو ڈیمو:"}),t.jsx("div",{className:"demo-box",children:t.jsx("button",{className:"rotate-btn",children:"Hover Me"})})]}),t.jsxs("div",{className:"code-container",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:"💻 HTML & CSS کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(f.example4,"example4"),children:r==="example4"?"✔ کاپی ہوگیا":"📋 کوڈ کاپی کریں"})]}),t.jsx("pre",{className:"code-block",children:f.example4})]})]}),t.jsxs("section",{id:"example5",className:"example-section",children:[t.jsx("h2",{children:"مثال 5: 🌈 Neon Line Sweep Button"}),t.jsx("p",{className:"description",children:"Hover پر نیون روشنی کی لہر بٹن پر سے گزرتی ہے۔"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h3",{children:"🎯 لائیو ڈیمو:"}),t.jsx("div",{className:"demo-box",children:t.jsx("button",{className:"neon-btn",children:"Click Here"})})]}),t.jsxs("div",{className:"code-container",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:"💻 HTML & CSS کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(f.example5,"example5"),children:r==="example5"?"✔ کاپی ہوگیا":"📋 کوڈ کاپی کریں"})]}),t.jsx("pre",{className:"code-block",children:f.example5})]})]}),t.jsxs("section",{id:"example6",className:"example-section",children:[t.jsx("h2",{children:"مثال 6: 🎭 Double Sliding Hover Button"}),t.jsx("p",{className:"description",children:"Hover پر دائیں اور بائیں طرف سے لال رنگ آ کر بٹن کو ڈھانپ لیتا ہے۔"}),t.jsxs("div",{className:"demo-container",style:{backgroundColor:"#F8F9FA",borderRight:"4px solid #667eea"},children:[t.jsx("h3",{style:{color:"#1F1a18"},children:"🎯 لائیو ڈیمو:"}),t.jsx("div",{className:"demo-box",children:t.jsx("button",{className:"btn2",children:"Click Here"})})]}),t.jsxs("div",{className:"code-container",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:"💻 HTML & CSS کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(f.example6,"example6"),children:r==="example6"?"✔ کاپی ہوگیا":"📋 کوڈ کاپی کریں"})]}),t.jsx("pre",{className:"code-block",children:f.example6})]})]}),t.jsxs("section",{id:"example7",className:"example-section",children:[t.jsx("h2",{children:"مثال 7: 🌊 Liquid Fill Button"}),t.jsx("p",{className:"description",children:"ایسا لگتا ہے جیسے پانی بٹن کے نیچے سے اوپر تک بھر رہا ہو۔"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h3",{children:"🎯 لائیو ڈیمو:"}),t.jsx("div",{className:"demo-box",children:t.jsx("button",{className:"liquid-btn",children:"Hover Me 💧"})})]}),t.jsxs("div",{className:"code-container",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:"💻 HTML & CSS کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(f.example7,"example7"),children:r==="example7"?"✔ کاپی ہوگیا":"📋 کوڈ کاپی کریں"})]}),t.jsx("pre",{className:"code-block",children:f.example7})]})]}),t.jsxs("section",{id:"example8",className:"example-section",children:[t.jsx("h2",{children:"مثال 8: 🔥 Fire Glow Button"}),t.jsx("p",{className:"description",children:"بٹن کے اندر آگ جل رہی ہے ایسا تاثر دیتا ہے۔"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h3",{children:"🎯 لائیو ڈیمو:"}),t.jsx("div",{className:"demo-box",children:t.jsx("button",{className:"fire-btn",children:"Hover Me 🔥"})})]}),t.jsxs("div",{className:"code-container",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:"💻 HTML & CSS کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(f.example8,"example8"),children:r==="example8"?"✔ کاپی ہوگیا":"📋 کوڈ کاپی کریں"})]}),t.jsx("pre",{className:"code-block",children:f.example8})]})]}),t.jsxs("section",{id:"example9",className:"example-section",children:[t.jsx("h2",{children:"مثال 9: ⚡ Electric Neon Button"}),t.jsx("p",{className:"description",children:"بجلی جیسی چمک اور روشنی کا اثر دیتا ہے۔"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h3",{children:"🎯 لائیو ڈیمو:"}),t.jsx("div",{className:"demo-box",children:t.jsx("button",{className:"electric-btn",children:"Hover Me ⚡"})})]}),t.jsxs("div",{className:"code-container",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:"💻 HTML & CSS کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(f.example9,"example9"),children:r==="example9"?"✔ کاپی ہوگیا":"📋 کوڈ کاپی کریں"})]}),t.jsx("pre",{className:"code-block",children:f.example9})]})]}),t.jsxs("section",{id:"example10",className:"example-section",children:[t.jsx("h2",{children:"مثال 10: 🌈 Rainbow Neon Pulse Button"}),t.jsx("p",{className:"description",children:"سات رنگ بدلتے رہتے ہیں اور دھڑکتا ہوا اثر دیتا ہے۔"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h3",{children:"🎯 لائیو ڈیمو:"}),t.jsx("div",{className:"demo-box",children:t.jsx("button",{className:"rainbow-btn",children:"Hover Me 🌈"})})]}),t.jsxs("div",{className:"code-container",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:"💻 HTML & CSS کوڈ:"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(f.example10,"example10"),children:r==="example10"?"✔ کاپی ہوگیا":"📋 کوڈ کاپی کریں"})]}),t.jsx("pre",{className:"code-block",children:f.example10})]})]}),t.jsxs("footer",{className:"footer",children:[t.jsx("p",{children:"🌸 یہ ٹیوٹوریل 14 سال کے نوجوان طلباء کے لیے تیار کیا گیا ہے"}),t.jsx("p",{children:"CSS Pseudo-elements کی مکمل سمجھ کے ساتھ!"})]})]})},Oj=()=>{const[r,h]=T.useState(""),[x,d]=T.useState(!1),o=(v,k)=>{navigator.clipboard.writeText(v),h(k),d(!0),setTimeout(()=>{d(!1),h("")},2e3)},f=[{property:"display: block",description:"پوری لائن گھیر لیتا ہے — نئی لائن شروع ہوتی ہے",example:"<div>, <p>",code:`.element {
  display: block;
  width: 100%;
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"block-demo",children:[t.jsx("div",{className:"block-box",style:{display:"block",background:"lightgreen",padding:"10px",margin:"5px"},children:"Block Element 1"}),t.jsx("div",{className:"block-box",style:{display:"block",background:"lightblue",padding:"10px",margin:"5px"},children:"Block Element 2"})]})})},{property:"display: inline",description:"لائن کے ساتھ بہتا ہے — چوڑائی/اونچائی set نہیں کر سکتے",example:"<span>, <a>",code:`.element {
  display: inline;
  /* width/height کام نہیں کرے گا */
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"inline-demo",children:[t.jsx("span",{className:"inline-box",style:{display:"inline",background:"yellow",padding:"5px",margin:"2px"},children:"Inline 1"}),t.jsx("span",{className:"inline-box",style:{display:"inline",background:"orange",padding:"5px",margin:"2px"},children:"Inline 2"}),t.jsx("span",{className:"inline-box",style:{display:"inline",background:"pink",padding:"5px",margin:"2px"},children:"Inline 3"})]})})},{property:"display: inline-block",description:"لائن کے ساتھ رہتا ہے مگر width/height set ہو سکتی ہے",example:"Buttons, small boxes",code:`.element {
  display: inline-block;
  width: 100px;
  height: 50px;
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"inline-block-demo",children:[t.jsx("div",{className:"inline-block-box",style:{display:"inline-block",width:"100px",height:"50px",background:"lightcoral",margin:"5px",textAlign:"center",lineHeight:"50px"},children:"Box 1"}),t.jsx("div",{className:"inline-block-box",style:{display:"inline-block",width:"100px",height:"50px",background:"lightseagreen",margin:"5px",textAlign:"center",lineHeight:"50px"},children:"Box 2"}),t.jsx("div",{className:"inline-block-box",style:{display:"inline-block",width:"100px",height:"50px",background:"plum",margin:"5px",textAlign:"center",lineHeight:"50px"},children:"Box 3"})]})})},{property:"display: none",description:"Element کو مکمل چھپا دیتا ہے (layout سے بھی ہٹا دیتا ہے)",example:"Hide/Toggle UI",code:`.element {
  display: none;
  /* بالکل غائب ہو جائے گا */
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"none-demo",children:[t.jsx("div",{style:{background:"lightgray",padding:"10px",margin:"5px"},children:"Visible Element"}),t.jsx("div",{style:{display:"none",background:"red",padding:"10px",margin:"5px"},children:"Hidden Element (display: none)"}),t.jsx("div",{style:{background:"lightgray",padding:"10px",margin:"5px"},children:"Another Visible Element"})]})})},{property:"display: flex",description:"Modern layout — items horizontally/vertically arrange",example:"Navbar, Cards layout",code:`.container {
  display: flex;
  gap: 10px;
  justify-content: center;
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"flex-demo",style:{display:"flex",gap:"10px",justifyContent:"center",padding:"10px",background:"#f0f0f0"},children:[t.jsx("div",{style:{background:"lightgreen",padding:"15px",borderRadius:"5px"},children:"Flex Item 1"}),t.jsx("div",{style:{background:"lightblue",padding:"15px",borderRadius:"5px"},children:"Flex Item 2"}),t.jsx("div",{style:{background:"lightcoral",padding:"15px",borderRadius:"5px"},children:"Flex Item 3"})]})})},{property:"display: inline-flex",description:"Flex لیکن inline رہتا ہے",example:"Small toolbars",code:`.container {
  display: inline-flex;
  gap: 5px;
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{style:{textAlign:"center"},children:[t.jsxs("div",{className:"inline-flex-demo",style:{display:"inline-flex",gap:"5px",background:"#e0e0e0",padding:"8px",borderRadius:"5px"},children:[t.jsx("span",{style:{background:"gold",padding:"5px",borderRadius:"3px"},children:"Tool 1"}),t.jsx("span",{style:{background:"silver",padding:"5px",borderRadius:"3px"},children:"Tool 2"}),t.jsx("span",{style:{background:"bronze",padding:"5px",borderRadius:"3px"},children:"Tool 3"})]}),t.jsx("span",{style:{marginLeft:"10px"},children:"← یہ inline-flex ہے"})]})})},{property:"display: grid",description:"2D layout، rows/columns control",example:"Website sections layout",code:`.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"grid-demo",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px",padding:"10px",background:"#f8f8f8"},children:[t.jsx("div",{style:{background:"lightgreen",padding:"20px",borderRadius:"5px",textAlign:"center"},children:"Grid Item 1"}),t.jsx("div",{style:{background:"lightblue",padding:"20px",borderRadius:"5px",textAlign:"center"},children:"Grid Item 2"}),t.jsx("div",{style:{background:"lightcoral",padding:"20px",borderRadius:"5px",textAlign:"center"},children:"Grid Item 3"}),t.jsx("div",{style:{background:"plum",padding:"20px",borderRadius:"5px",textAlign:"center"},children:"Grid Item 4"})]})})},{property:"display: inline-grid",description:"Grid لیکن inline",example:"Mini grid UI",code:`.container {
  display: inline-grid;
  grid-template-columns: 1fr 1fr;
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{style:{textAlign:"center"},children:[t.jsxs("div",{className:"inline-grid-demo",style:{display:"inline-grid",gridTemplateColumns:"1fr 1fr",gap:"5px",background:"#e8e8e8",padding:"8px",borderRadius:"5px"},children:[t.jsx("div",{style:{background:"lightgreen",padding:"10px",borderRadius:"3px"},children:"A"}),t.jsx("div",{style:{background:"lightblue",padding:"10px",borderRadius:"3px"},children:"B"}),t.jsx("div",{style:{background:"lightcoral",padding:"10px",borderRadius:"3px"},children:"C"}),t.jsx("div",{style:{background:"plum",padding:"10px",borderRadius:"3px"},children:"D"})]}),t.jsx("span",{style:{marginLeft:"10px"},children:"← یہ inline-grid ہے"})]})})},{property:"display: table",description:"Element table کی طرح behave کرتا ہے",example:"Special layouts",code:`.element {
  display: table;
  width: 100%;
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"table-demo",style:{display:"table",width:"100%",border:"1px solid #ccc"},children:[t.jsxs("div",{style:{display:"table-row"},children:[t.jsx("div",{style:{display:"table-cell",padding:"10px",border:"1px solid #ccc",background:"#f0f0f0"},children:"Header 1"}),t.jsx("div",{style:{display:"table-cell",padding:"10px",border:"1px solid #ccc",background:"#f0f0f0"},children:"Header 2"})]}),t.jsxs("div",{style:{display:"table-row"},children:[t.jsx("div",{style:{display:"table-cell",padding:"10px",border:"1px solid #ccc"},children:"Data 1"}),t.jsx("div",{style:{display:"table-cell",padding:"10px",border:"1px solid #ccc"},children:"Data 2"})]})]})})},{property:"display: table-row / table-cell",description:"Table rows/cells کی طرح behave",example:"Rare cases",code:`.row {
  display: table-row;
}
.cell {
  display: table-cell;
  padding: 10px;
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{style:{display:"table",width:"100%",border:"1px solid #ddd"},children:[t.jsxs("div",{style:{display:"table-row",background:"#e9ecef"},children:[t.jsx("div",{style:{display:"table-cell",padding:"8px",border:"1px solid #ddd"},children:"نام"}),t.jsx("div",{style:{display:"table-cell",padding:"8px",border:"1px solid #ddd"},children:"عمر"})]}),t.jsxs("div",{style:{display:"table-row"},children:[t.jsx("div",{style:{display:"table-cell",padding:"8px",border:"1px solid #ddd"},children:"احمد"}),t.jsx("div",{style:{display:"table-cell",padding:"8px",border:"1px solid #ddd"},children:"25"})]})]})})},{property:"display: list-item",description:"Bullet points والا behavior",example:"Custom list UI",code:`.element {
  display: list-item;
  list-style-type: circle;
}`,demo:t.jsx("div",{className:"demo-container",children:t.jsxs("div",{className:"list-item-demo",children:[t.jsx("div",{style:{display:"list-item",listStyleType:"circle",marginLeft:"20px"},children:"پہلی آئٹم"}),t.jsx("div",{style:{display:"list-item",listStyleType:"square",marginLeft:"20px"},children:"دوسری آئٹم"}),t.jsx("div",{style:{display:"list-item",listStyleType:"disc",marginLeft:"20px"},children:"تیسری آئٹم"})]})})},{property:"display: contents",description:"Children نظر آئیں گے لیکن parent غائب",example:"Cleanup structure",code:`.parent {
  display: contents;
}
.child {
  background: lightblue;
}`,demo:t.jsxs("div",{className:"demo-container",children:[t.jsx("div",{style:{border:"2px dashed #ccc",padding:"10px"},children:t.jsxs("div",{style:{display:"contents"},children:[t.jsx("div",{style:{background:"lightblue",padding:"10px",margin:"5px"},children:"Child 1 (parent display: contents)"}),t.jsx("div",{style:{background:"lightgreen",padding:"10px",margin:"5px"},children:"Child 2 (parent display: contents)"})]})}),t.jsx("p",{style:{fontSize:"12px",color:"#666",marginTop:"5px"},children:"Parent غائب ہے لیکن children نظر آ رہے ہیں"})]})}];return t.jsxs("div",{className:"css-display-container",children:[x&&t.jsx("div",{className:"copy-confirmation",children:t.jsxs("div",{className:"confirmation-box",children:[t.jsx("span",{className:"tick-mark",children:"✓"}),t.jsx("p",{className:"urdu-text",children:"کوڈ کاپی ہو گیا ہے! 🎉"})]})}),t.jsxs("header",{className:"header",children:[t.jsx("h1",{children:"CSS Display Properties - Complete Guide"}),t.jsx("p",{children:"display properties وہ جادو ہیں جو ویب پیج پر elements کے behavior اور layout کو کنٹرول کرتے ہیں ✨"}),t.jsx("p",{className:"subtitle",children:"سادے لفظوں میں: کون سا element لائن میں آئے گا، کون سا نئی لائن لے گا، کون سا لچکدار ہوگا — سب کچھ display سے چلتا ہے۔"})]}),t.jsxs("section",{className:"quick-examples",children:[t.jsx("h2",{children:"🧩 Quick Examples"}),t.jsxs("div",{className:"example-grid",children:[t.jsxs("div",{className:"example-card",children:[t.jsx("h3",{children:"✅ Block vs Inline"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"HTML & CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`<style>
  .block { display: block; background: lightgreen; }
  .inline { display: inline; background: yellow; }
</style>

<span class="block">Block Span</span>
<span class="block">Block Span</span>

<p class="inline">Inline Para</p>
<p class="inline">Inline Para</p>`,"block-inline"),children:r==="block-inline"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`<style>
  .block { display: block; background: lightgreen; }
  .inline { display: inline; background: yellow; }
</style>

<span class="block">Block Span</span>
<span class="block">Block Span</span>

<p class="inline">Inline Para</p>
<p class="inline">Inline Para</p>`})})]}),t.jsxs("div",{className:"demo-container",children:[t.jsxs("div",{className:"live-demo",children:[t.jsx("div",{style:{display:"block",background:"lightgreen",padding:"10px",margin:"5px"},children:"Block Span"}),t.jsx("div",{style:{display:"block",background:"lightgreen",padding:"10px",margin:"5px"},children:"Block Span"}),t.jsx("span",{style:{display:"inline",background:"yellow",padding:"10px",margin:"5px"},children:"Inline Para"}),t.jsx("span",{style:{display:"inline",background:"yellow",padding:"10px",margin:"5px"},children:"Inline Para"})]}),t.jsxs("div",{className:"demo-explanation",children:[t.jsx("p",{children:"✅ Block → نیچے نیچے"}),t.jsx("p",{children:"✅ Inline → ساتھ ساتھ"})]})]})]}),t.jsxs("div",{className:"example-card",children:[t.jsx("h3",{children:"✅ Flex Example"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  gap: 10px;
}
.box {
  background: #ddd;
  padding: 10px;
}`,"flex-example"),children:r==="flex-example"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  gap: 10px;
}
.box {
  background: #ddd;
  padding: 10px;
}`})})]}),t.jsx("div",{className:"demo-container",children:t.jsx("div",{className:"live-demo",children:t.jsxs("div",{style:{display:"flex",gap:"10px",padding:"10px",background:"#f0f0f0"},children:[t.jsx("div",{style:{background:"#ddd",padding:"10px",flex:"1"},children:"Box 1"}),t.jsx("div",{style:{background:"#ddd",padding:"10px",flex:"1"},children:"Box 2"}),t.jsx("div",{style:{background:"#ddd",padding:"10px",flex:"1"},children:"Box 3"})]})})})]}),t.jsxs("div",{className:"example-card",children:[t.jsx("h3",{children:"✅ Grid Example"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}`,"grid-example"),children:r==="grid-example"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}`})})]}),t.jsx("div",{className:"demo-container",children:t.jsx("div",{className:"live-demo",children:t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px",padding:"10px",background:"#f8f8f8"},children:[t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"1"}),t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"2"}),t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"3"}),t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"4"}),t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"5"}),t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"6"})]})})})]})]})]}),t.jsxs("section",{className:"detailed-explanations",children:[t.jsx("h2",{children:"⭐ Detailed Explanations with Visual Examples"}),t.jsxs("div",{className:"explanation-section",children:[t.jsx("h3",{children:"⭐ display: inline کیا ہوتا ہے؟"}),t.jsx("p",{children:"یہ ایسے سمجھیں جیسے کوئی چیز لائن میں کھڑی ہو اور اپنے ارد گرد کسی کو دھکا نہ دے۔"}),t.jsx("p",{children:"یعنی جتنا اس element کے ٹیکسٹ یا مواد کو جگہ چاہیے، بس اتنا سا حصہ لے گا۔"}),t.jsx("p",{children:"Width, height, margin-top, margin-bottom اس پر اچھے سے کام نہیں کرتے۔"}),t.jsxs("div",{className:"example-box",children:[t.jsx("p",{children:t.jsx("strong",{children:"✅ مثال:"})}),t.jsxs("p",{children:[t.jsx("code",{children:"<span>"}),", ",t.jsx("code",{children:"<a>"}),", ",t.jsx("code",{children:"<strong>"}),", ",t.jsx("code",{children:"<em>"})," وغیرہ Inline elements ہوتے ہیں۔"]}),t.jsx("p",{children:"یہ ایک ہی لائن میں رہتے ہیں۔"})]}),t.jsxs("div",{className:"key-point",children:[t.jsx("p",{children:t.jsx("strong",{children:"📌 آسان الفاظ میں:"})}),t.jsx("p",{children:'Inline element کہتا ہے: "مجھے لائن کے ساتھ ہی رہنا ہے، پورا block نہیں بنانا!"'})]})]}),t.jsxs("div",{className:"explanation-section",children:[t.jsx("h3",{children:"⭐ display: inline-element کیا ہے؟ 😅"}),t.jsx("p",{children:t.jsx("strong",{children:'اصل میں "display: inline-element" کوئی property ہی نہیں ہوتی!'})}),t.jsx("p",{children:"یہ اکثر لوگ غلطی سے بول دیتے ہیں۔"}),t.jsx("p",{children:t.jsx("strong",{children:"اصل لفظ ہوتا ہے: ✅ Inline Elements"})}),t.jsxs("p",{children:["یعنی وہ HTML سراپے جو پہلے سے inline ہوتے ہیں: ",t.jsx("code",{children:"<a>"}),", ",t.jsx("code",{children:"<span>"}),", ",t.jsx("code",{children:"<i>"}),", ",t.jsx("code",{children:"<b>"})," وغیرہ"]}),t.jsx("p",{children:"یہاں display: inline تو CSS property ہے اور inline elements HTML کی categories میں آتے ہیں۔"})]}),t.jsxs("div",{className:"comparison-section",children:[t.jsx("h3",{children:"💡 فرق دو لائنوں میں"}),t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"scrollable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"چیز"}),t.jsx("th",{children:"کیا ہے؟"}),t.jsx("th",{children:"کس میں ملتی ہے؟"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"display: inline"})}),t.jsx("td",{children:"CSS کی property"}),t.jsx("td",{children:"کسی بھی element پر لگائی جا سکتی ہے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("strong",{children:"Inline elements"})}),t.jsx("td",{children:"HTML element کی type"}),t.jsx("td",{children:"جیسے span, a… پہلے سے inline ہوتے ہیں"})]})]})]})})]}),t.jsxs("div",{className:"mind-trick",children:[t.jsx("h3",{children:"🎯 Final Mind Trick 🎯"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("strong",{children:"Inline"})," = Line کے اندر رہتا ہے"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Block"})," = اپنی الگ پوری لائن بناتا ہے"]}),t.jsxs("li",{children:[t.jsx("strong",{children:"Inline-block"})," = Line میں بھی رہتا ہے اور Width/Height بھی مانتا ہے ✨"]})]})]}),t.jsxs("div",{className:"explanation-section",children:[t.jsx("h3",{children:"کیا display: inline-element; exist نہیں کرتا؟"}),t.jsxs("div",{className:"answer-box",children:[t.jsx("p",{children:t.jsx("strong",{children:"❌ display: inline-element; نام کی کوئی CSS property exist نہیں کرتی۔"})}),t.jsx("p",{children:"CSS میں inline، block، inline-block، flex، grid وغیرہ ہوتے ہیں لیکن inline-element نہیں ہوتا۔"}),t.jsx("p",{children:"بہت سے beginners غلطی سے HTML کی category inline elements کو CSS کی property سمجھ لیتے ہیں۔ اسی وجہ سے یہ کنفیوزن پیدا ہوتی ہے۔"})]}),t.jsxs("div",{className:"comparison-section",children:[t.jsx("h4",{children:"✅ اصل صحیح options کیا ہیں؟"}),t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"scrollable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"CSS Value"}),t.jsx("th",{children:"کیا کرتا ہے؟"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"display: inline"})}),t.jsx("td",{className:"fontSize15",children:"ایک ہی لائن میں رکھتا ہے (width/height نہیں مانتا)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"display: inline-block"})}),t.jsx("td",{children:"ایک لائن میں بھی اور custom width/height بھی"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"display: block"})}),t.jsx("td",{children:"پوری لائن گھیر لیتا ہے"})]})]})]})})]}),t.jsxs("div",{className:"memory-trick",children:[t.jsx("p",{children:t.jsx("strong",{children:"یادگار Trick 🔔"})}),t.jsx("p",{children:"Inline element ✅"}),t.jsx("p",{children:"display: inline ✅"}),t.jsx("p",{children:"display: inline-element ❌"})]})]}),t.jsxs("div",{className:"explanation-section",children:[t.jsx("h3",{children:"⭐ Display: inline-block کیا ہوتا ہے؟"}),t.jsx("p",{children:"یہ inline اور block دونوں کی خوبیوں والا طاقتور جنگجوی عاشق 😎"}),t.jsx("p",{children:"ایک لائن میں رہتا ہے، مگر اپنی چوڑائی (width) اور اونچائی (height) بھی رکھ سکتا ہے۔"}),t.jsx("p",{children:"اور margin اوپر نیچے بھی قبول کر لیتا ہے۔"}),t.jsxs("div",{className:"comparison-section",children:[t.jsx("h4",{children:"ایک لائن میں کہانی:"}),t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"scrollable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Property"}),t.jsx("th",{children:"Behaviour"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Inline کی طرح"}),t.jsx("td",{children:"ایک ہی لائن میں رہتا ہے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Block کی طرح"}),t.jsx("td",{children:"Width/Height اور Margin/Padding اوپر نیچے کام کرتے ہیں"})]})]})]})})]}),t.jsxs("div",{className:"example-box",children:[t.jsx("h4",{children:"✅ مثال سے تصور کیجئے"}),t.jsx("p",{children:"فرض کریں تین چھوٹے Box ہیں۔"}),t.jsx("p",{children:"اگر انہیں display: inline-block; دے دیں تو یہ ایسے لگیں گے جیسے تین دوست ہاتھ پکڑ کر ایک ہی لائن میں کھڑے ہیں۔"}),t.jsx("p",{children:"ہر دوست کے پاس اپنی پرسنل space یعنی width/height بھی ہے۔"})]}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"🔍 Code Example"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`<style>
.box {
  display: inline-block;
  width: 120px;
  height: 70px;
  background: #00cc88;
  margin: 10px;
  text-align: center;
  vertical-align: middle;
  line-height: 70px;
  color: #fff;
}
</style>

<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>`,"inline-block-example"),children:r==="inline-block-example"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`<style>
.box {
  display: inline-block;
  width: 120px;
  height: 70px;
  background: #00cc88;
  margin: 10px;
  text-align: center;
  vertical-align: middle;
  line-height: 70px;
  color: #fff;
}
</style>

<div class="box">Box 1</div>
<div class="box">Box 2</div>
<div class="box">Box 3</div>`})})]}),t.jsxs("div",{className:"demo-container",children:[t.jsxs("div",{className:"live-demo",children:[t.jsx("div",{style:{display:"inline-block",width:"120px",height:"70px",background:"#00cc88",margin:"10px",textAlign:"center",lineHeight:"70px",color:"#fff"},children:"Box 1"}),t.jsx("div",{style:{display:"inline-block",width:"120px",height:"70px",background:"#00cc88",margin:"10px",textAlign:"center",lineHeight:"70px",color:"#fff"},children:"Box 2"}),t.jsx("div",{style:{display:"inline-block",width:"120px",height:"70px",background:"#00cc88",margin:"10px",textAlign:"center",lineHeight:"70px",color:"#fff"},children:"Box 3"})]}),t.jsx("p",{style:{textAlign:"center",marginTop:"10px"},children:"یہ تینوں Box ایک لائن میں بھی آئیں گے اور ہر ایک box کا اپنا سائز بھی ہے 😄"})]}),t.jsxs("div",{className:"usage-tips",children:[t.jsx("h4",{children:"💡 کب استعمال کریں؟"}),t.jsxs("ul",{children:[t.jsx("li",{children:"✅ Navigation menu آئٹمز"}),t.jsx("li",{children:"✅ Image gallery layout"}),t.jsx("li",{children:"✅ Buttons side-by-side"}),t.jsx("li",{children:"✅ Form fields ساتھ ساتھ دکھانے میں"})]})]}),t.jsxs("div",{className:"final-note",children:[t.jsx("p",{children:t.jsx("strong",{children:"🎯 Final Mind Note"})}),t.jsx("p",{children:"Inline-block = پروفیشنل gentleman"}),t.jsx("p",{children:"نہ بلا وجہ جگہ گھیرتا ہے نہ دوسروں کے سر پہ چڑھتا ہے"}),t.jsx("p",{children:"بس اپنے style کے ساتھ لائن میں رہتا ہے 😎"})]})]}),t.jsxs("div",{className:"biscuit-example",children:[t.jsx("h3",{children:"🍪 Biscuit Example سے سمجھیں"}),t.jsx("p",{children:"تین Biscuit ہیں:"}),t.jsxs("div",{className:"example-item",children:[t.jsx("h4",{children:"1️⃣ display: block"}),t.jsxs("p",{children:["ہر بَسکِٹ کہتا ہے: ",t.jsx("strong",{children:'"مجھے پوری پلیٹ چاہیے!"'})]}),t.jsx("p",{children:"ایک کے بعد ایک نیچے نیچے آتے ہیں👇"}),t.jsx("p",{children:"پوری لائن کو گھیر لیتے ہیں۔"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("div",{style:{display:"block",background:"lightcoral",padding:"15px",margin:"5px",textAlign:"center"},children:"[ Biscuit1 ]"}),t.jsx("div",{style:{display:"block",background:"lightcoral",padding:"15px",margin:"5px",textAlign:"center"},children:"[ Biscuit2 ]"}),t.jsx("div",{style:{display:"block",background:"lightcoral",padding:"15px",margin:"5px",textAlign:"center"},children:"[ Biscuit3 ]"})]})]}),t.jsxs("div",{className:"example-item",children:[t.jsx("h4",{children:"2️⃣ display: inline"}),t.jsxs("p",{children:["بَسکِٹ کہتا ہے: ",t.jsx("strong",{children:'"میں لائن کے اندر ہی رہوں گا اور جتنی جگہ میرے نام کو چاہیے وہی کافی ہے!"'})]}),t.jsx("p",{children:"پورا block نہیں بنتا👇"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("span",{style:{display:"inline",background:"lightgreen",padding:"5px",margin:"2px"},children:"Biscuit1"}),t.jsx("span",{style:{display:"inline",background:"lightgreen",padding:"5px",margin:"2px"},children:"Biscuit2"}),t.jsx("span",{style:{display:"inline",background:"lightgreen",padding:"5px",margin:"2px"},children:"Biscuit3"})]}),t.jsx("p",{children:"یہ width/height-set نہیں ہونے دیتا۔"})]}),t.jsxs("div",{className:"example-item",children:[t.jsx("h4",{children:"3️⃣ ⭐ display: inline-block"}),t.jsxs("p",{children:["یہ بَسکِٹ کہتا ہے: ",t.jsx("strong",{children:'"میں لائن میں بھی رہوں گا اور اپنی چوڑائی اور اونچائی بھی رکھوں گا!"'})]}),t.jsx("p",{children:"یعنی ایک ہی صف میں نظر آئیں گے مگر box کی شکل میں👇"}),t.jsxs("div",{className:"demo-container",children:[t.jsx("div",{style:{display:"inline-block",width:"100px",height:"40px",background:"lightblue",margin:"5px",textAlign:"center",lineHeight:"40px"},children:"[ Biscuit1 ]"}),t.jsx("div",{style:{display:"inline-block",width:"100px",height:"40px",background:"lightblue",margin:"5px",textAlign:"center",lineHeight:"40px"},children:"[ Biscuit2 ]"}),t.jsx("div",{style:{display:"inline-block",width:"100px",height:"40px",background:"lightblue",margin:"5px",textAlign:"center",lineHeight:"40px"},children:"[ Biscuit3 ]"})]}),t.jsx("p",{children:"👈 یہی Inline-block ہے!"})]}),t.jsxs("div",{className:"comparison-section",children:[t.jsx("h4",{children:"🔍 ایک جملے میں نچوڑ"}),t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"scrollable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"قسم"}),t.jsx("th",{children:"Line میں؟"}),t.jsx("th",{children:"Width/Height؟"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Block"}),t.jsx("td",{children:"❌ نیچے نیچے"}),t.jsx("td",{children:"✅ ہاں"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Inline"}),t.jsx("td",{children:"✅ ساتھ ساتھ"}),t.jsx("td",{children:"❌ نہیں"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Inline-block"}),t.jsx("td",{children:"✅ ساتھ ساتھ"}),t.jsx("td",{children:"✅ ہاں ✅"})]})]})]})})]})]}),t.jsxs("div",{className:"experiment-section",children:[t.jsx("h3",{children:"🔬 چھوٹا سا تجربہ (آپ خود try کیجیے)"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"HTML & CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`<style>
.biscuit {
  width: 100px;
  height: 60px;
  background: #0099ff;
  margin: 5px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
</style>

<div class="biscuit">One</div>
<div class="biscuit">Two</div>
<div class="biscuit">Three</div>`,"experiment-code"),children:r==="experiment-code"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`<style>
.biscuit {
  width: 100px;
  height: 60px;
  background: #0099ff;
  margin: 5px;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
</style>

<div class="biscuit">One</div>
<div class="biscuit">Two</div>
<div class="biscuit">Three</div>`})})]}),t.jsx("p",{children:t.jsx("strong",{children:"پہلے ان پر display: block لگائیں پھر display: inline پھر display: inline-block"})}),t.jsx("p",{children:t.jsx("strong",{children:"تینوں صورتیں فوراً سمجھ آ جائیں گی 🎯"})})]}),t.jsxs("div",{className:"visual-guide",children:[t.jsx("h3",{children:"🧱 Display Properties کا آسان خاکہ"}),t.jsxs("div",{className:"visual-item",children:[t.jsx("h4",{children:"1️⃣ display: block"}),t.jsx("p",{children:"ہر Box اپنی پوری لائن نگل لیتا ہے"}),t.jsxs("div",{className:"visual-demo",children:[t.jsx("div",{style:{display:"block",background:"#ff6b6b",padding:"20px",margin:"10px",textAlign:"center",color:"white",fontWeight:"bold"},children:"Box 1"}),t.jsx("div",{style:{display:"block",background:"#4ecdc4",padding:"20px",margin:"10px",textAlign:"center",color:"white",fontWeight:"bold"},children:"Box 2"}),t.jsx("div",{style:{display:"block",background:"#45b7d1",padding:"20px",margin:"10px",textAlign:"center",color:"white",fontWeight:"bold"},children:"Box 3"})]})]}),t.jsxs("div",{className:"visual-item",children:[t.jsx("h4",{children:"2️⃣ display: inline"}),t.jsx("p",{children:"Boxes ایک لائن میں رہتے ہیں مگر Box کی شکل نہیں بناتے"}),t.jsx("p",{children:"Width/height بات ہی نہیں مانتے"}),t.jsxs("div",{className:"visual-demo",children:[t.jsx("span",{style:{display:"inline",background:"#f9ca24",padding:"5px",margin:"2px"},children:"Box1"}),t.jsx("span",{style:{display:"inline",background:"#f0932b",padding:"5px",margin:"2px"},children:"Box2"}),t.jsx("span",{style:{display:"inline",background:"#eb4d4b",padding:"5px",margin:"2px"},children:"Box3"}),t.jsx("span",{style:{display:"inline",background:"#6ab04c",padding:"5px",margin:"2px"},children:"Box4"}),t.jsx("span",{style:{display:"inline",background:"#4834d4",padding:"5px",margin:"2px",color:"white"},children:"Box5"})]}),t.jsx("p",{children:"ایسے جیسے عام ٹیکسٹ ساتھ ساتھ چل رہا ہو۔"})]}),t.jsxs("div",{className:"visual-item",children:[t.jsx("h4",{children:"⭐ 3️⃣ display: inline-block"}),t.jsx("p",{children:"Boxes ایک لائن میں بھی، مگر اپنی border, width, height کے ساتھ جینٹلمین اسٹائل میں 😎👇"}),t.jsxs("div",{className:"visual-demo",children:[t.jsx("div",{style:{display:"inline-block",width:"100px",height:"60px",background:"#00b894",margin:"5px",textAlign:"center",lineHeight:"60px",color:"white",fontWeight:"bold"},children:"Box1"}),t.jsx("div",{style:{display:"inline-block",width:"100px",height:"60px",background:"#00cec9",margin:"5px",textAlign:"center",lineHeight:"60px",color:"white",fontWeight:"bold"},children:"Box2"}),t.jsx("div",{style:{display:"inline-block",width:"100px",height:"60px",background:"#0984e3",margin:"5px",textAlign:"center",lineHeight:"60px",color:"white",fontWeight:"bold"},children:"Box3"})]}),t.jsx("p",{children:"ہر Box کی اپنی جگہ مخصوص مگر سب ایک ہی قطار میں!"})]}),t.jsxs("div",{className:"comparison-section",children:[t.jsx("h4",{children:"✨ یاد رکھیں:"}),t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"scrollable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Feature"}),t.jsx("th",{children:"Block"}),t.jsx("th",{children:"Inline"}),t.jsx("th",{children:"Inline-block"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"ایک لائن میں؟"}),t.jsx("td",{children:"❌"}),t.jsx("td",{children:"✅"}),t.jsx("td",{children:"✅"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"اپنی چوڑائی/اونچائی؟"}),t.jsx("td",{children:"✅"}),t.jsx("td",{children:"❌"}),t.jsx("td",{children:"✅"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Box کی شکل؟"}),t.jsx("td",{children:"✅"}),t.jsx("td",{children:"❌"}),t.jsx("td",{children:"✅"})]})]})]})})]}),t.jsxs("div",{className:"final-visual-note",children:[t.jsx("p",{children:t.jsx("strong",{children:"📌 Final Mind Picture"})}),t.jsx("p",{children:"Inline-block ایک ایسا element جو لائن میں بھی کھڑا رہے اور Box ہونے کا رعب بھی دکھائے 😎"})]})]}),t.jsxs("div",{className:"animation-section",children:[t.jsx("h3",{children:"🎬 Live Display Switch Animation"}),t.jsx("p",{children:"(صرف Copy → Paste کریں اور براوزر میں کھول لیں)"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"Complete HTML Code"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`<!DOCTYPE html>
<html lang="ur">
<head>
<meta charset="UTF-8">
<title>Display Animation</title>
<style>
.container {
  margin-top: 30px;
  text-align: center;
}

.box {
  width: 120px;
  height: 60px;
  background: #00b894;
  color: #fff;
  line-height: 60px;
  margin: 5px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
}

/* Animation area */
.stage {
  animation: changeDisplay 8s infinite;
}

@keyframes changeDisplay {
  0% {
    display: block;
  }
  33% {
    display: inline;
  }
  66% {
    display: inline-block;
  }
}
</style>
</head>
<body>

<h2 style="text-align:center">Live Display Animation</h2>
<p style="text-align:center">دیکھتے جائیں کیسے Display بدلتا ہے 👀</p>

<div class="container">
  <div class="box stage">One</div>
  <div class="box stage">Two</div>
  <div class="box stage">Three</div>
</div>

<p style="text-align:center; font-size:18px; margin-top:20px;">
Animation: Block ➜ Inline ➜ Inline-block ➜ دوبارہ
</p>

</body>
</html>`,"animation-code"),children:r==="animation-code"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`<!DOCTYPE html>
<html lang="ur">
<head>
<meta charset="UTF-8">
<title>Display Animation</title>
<style>
.container {
  margin-top: 30px;
  text-align: center;
}

.box {
  width: 120px;
  height: 60px;
  background: #00b894;
  color: #fff;
  line-height: 60px;
  margin: 5px;
  border-radius: 6px;
  font-family: Arial, sans-serif;
}

/* Animation area */
.stage {
  animation: changeDisplay 8s infinite;
}

@keyframes changeDisplay {
  0% {
    display: block;
  }
  33% {
    display: inline;
  }
  66% {
    display: inline-block;
  }
}
</style>
</head>
<body>

<h2 style="text-align:center">Live Display Animation</h2>
<p style="text-align:center">دیکھتے جائیں کیسے Display بدلتا ہے 👀</p>

<div class="container">
  <div class="box stage">One</div>
  <div class="box stage">Two</div>
  <div class="box stage">Three</div>
</div>

<p style="text-align:center; font-size:18px; margin-top:20px;">
Animation: Block ➜ Inline ➜ Inline-block ➜ دوبارہ
</p>

</body>
</html>`})})]}),t.jsxs("div",{className:"comparison-section",children:[t.jsx("h4",{children:"🤩 یہ Animation کیا دکھاتا ہے؟"}),t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"scrollable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"وقت"}),t.jsx("th",{children:"کیا ہوتا ہے؟"}),t.jsx("th",{children:"Visual"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"شروع میں"}),t.jsx("td",{children:"Block mode"}),t.jsx("td",{children:"Boxes نیچے نیچے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"3 سیکنڈ بعد"}),t.jsx("td",{children:"Inline mode"}),t.jsx("td",{children:"Boxes بغیر shape ساتھ ساتھ"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"5 سیکنڈ بعد"}),t.jsx("td",{children:"Inline-block mode"}),t.jsx("td",{children:"Boxes ساتھ ساتھ، مگر proper سائز کے ساتھ"})]})]})]})}),t.jsx("p",{children:"پھر یہ Action دوبارہ repeat ہوتا رہتا ہے ✅"})]}),t.jsxs("div",{className:"bonus-tip",children:[t.jsx("h4",{children:"🔥 Bonus Tip"}),t.jsx("p",{children:"Animation کی speed slow یا fast کرنی ہو تو:"}),t.jsx("p",{children:t.jsx("code",{children:"animation: changeDisplay 8s infinite;"})}),t.jsx("p",{children:"میں 8s کو بڑھا یا گھٹا دیں مثلاً 12s یا 4s وغیرہ"})]})]})]}),t.jsxs("section",{className:"display-properties",children:[t.jsx("h2",{children:"✅ Display Properties کی اہم اقسام"}),t.jsx("div",{className:"properties-grid",children:f.map((v,k)=>t.jsxs("div",{className:"property-card",children:[t.jsx("h3",{children:v.property}),t.jsx("p",{className:"property-description",children:v.description}),t.jsxs("p",{className:"property-example",children:[t.jsx("strong",{children:"Example:"})," ",v.example]}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS Code"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(v.code,`property-${k}`),children:r===`property-${k}`?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:v.code})})]}),t.jsxs("div",{className:"demo-section",children:[t.jsx("h4",{children:"🎯 Live Demo:"}),v.demo]})]},k))})]}),t.jsxs("section",{className:"most-used",children:[t.jsx("h2",{children:"🔥 سب سے زیادہ استعمال ہونے والے"}),t.jsxs("div",{className:"used-properties",children:[t.jsx("div",{className:"used-item",children:"✔ block"}),t.jsx("div",{className:"used-item",children:"✔ inline"}),t.jsx("div",{className:"used-item",children:"✔ inline-block"}),t.jsx("div",{className:"used-item",children:"✔ flex"}),t.jsx("div",{className:"used-item",children:"✔ grid"}),t.jsx("div",{className:"used-item",children:"✔ none"})]}),t.jsx("p",{className:"motivation",children:"یہ اگر آ جائیں تو layout king آپ 🤴🏻"})]}),t.jsxs("section",{className:"quick-examples",children:[t.jsx("h2",{children:"🧩 Quick Examples"}),t.jsxs("div",{className:"example-grid",children:[t.jsxs("div",{className:"example-card",children:[t.jsx("h3",{children:"✅ Block vs Inline"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"HTML & CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`<style>
  .block { display: block; background: lightgreen; }
  .inline { display: inline; background: yellow; }
</style>

<span class="block">Block Span</span>
<span class="block">Block Span</span>

<p class="inline">Inline Para</p>
<p class="inline">Inline Para</p>`,"block-inline"),children:r==="block-inline"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`<style>
  .block { display: block; background: lightgreen; }
  .inline { display: inline; background: yellow; }
</style>

<span class="block">Block Span</span>
<span class="block">Block Span</span>

<p class="inline">Inline Para</p>
<p class="inline">Inline Para</p>`})})]}),t.jsxs("div",{className:"demo-container",children:[t.jsxs("div",{className:"live-demo",children:[t.jsx("div",{style:{display:"block",background:"lightgreen",padding:"10px",margin:"5px"},children:"Block Span"}),t.jsx("div",{style:{display:"block",background:"lightgreen",padding:"10px",margin:"5px"},children:"Block Span"}),t.jsx("span",{style:{display:"inline",background:"yellow",padding:"10px",margin:"5px"},children:"Inline Para"}),t.jsx("span",{style:{display:"inline",background:"yellow",padding:"10px",margin:"5px"},children:"Inline Para"})]}),t.jsxs("div",{className:"demo-explanation",children:[t.jsx("p",{children:"✅ Block → نیچے نیچے"}),t.jsx("p",{children:"✅ Inline → ساتھ ساتھ"})]})]})]}),t.jsxs("div",{className:"example-card",children:[t.jsx("h3",{children:"✅ Flex Example"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  gap: 10px;
}
.box {
  background: #ddd;
  padding: 10px;
}`,"flex-example"),children:r==="flex-example"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  gap: 10px;
}
.box {
  background: #ddd;
  padding: 10px;
}`})})]}),t.jsx("div",{className:"demo-container",children:t.jsx("div",{className:"live-demo",children:t.jsxs("div",{style:{display:"flex",gap:"10px",padding:"10px",background:"#f0f0f0"},children:[t.jsx("div",{style:{background:"#ddd",padding:"10px",flex:"1"},children:"Box 1"}),t.jsx("div",{style:{background:"#ddd",padding:"10px",flex:"1"},children:"Box 2"}),t.jsx("div",{style:{background:"#ddd",padding:"10px",flex:"1"},children:"Box 3"})]})})})]}),t.jsxs("div",{className:"example-card",children:[t.jsx("h3",{children:"✅ Grid Example"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}`,"grid-example"),children:r==="grid-example"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}`})})]}),t.jsx("div",{className:"demo-container",children:t.jsx("div",{className:"live-demo",children:t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"10px",padding:"10px",background:"#f8f8f8"},children:[t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"1"}),t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"2"}),t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"3"}),t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"4"}),t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"5"}),t.jsx("div",{style:{background:"#ddd",padding:"20px",textAlign:"center"},children:"6"})]})})})]})]})]}),t.jsxs("footer",{className:"footer",children:[t.jsx("p",{children:"CSS Display Properties - مکمل گائیڈ"}),t.jsx("p",{children:"اب آپ layout کے بادشاہ بننے کے راستے پر ہیں! 🚀"})]})]})},Dj=()=>{const[r,h]=T.useState(""),[x,d]=T.useState(!1),o=(f,v)=>{navigator.clipboard.writeText(f),h(v),d(!0),setTimeout(()=>{d(!1),h("")},2e3)};return t.jsxs("div",{className:"css-display-container",children:[x&&t.jsx("div",{className:"copy-confirmation",children:t.jsxs("div",{className:"confirmation-box",children:[t.jsx("span",{className:"tick-mark",children:"✓"}),t.jsx("p",{className:"urdu-text",children:"کوڈ کاپی ہو گیا ہے! 🎉"})]})}),t.jsxs("section",{className:"flexbox-comprehensive",children:[t.jsx("h2",{children:"🎯 CSS Flexbox - مکمل گائیڈ"}),t.jsxs("div",{className:"explanation-section",children:[t.jsx("h3",{children:"💡 Display: Flex کیا ہے؟"}),t.jsxs("p",{children:[t.jsx("strong",{children:"display: flex"})," ایک CSS property ہے جو کسی container (یعنی باکس) کے اندر موجود elements کو لائن میں لانے، برابر جگہ دینے، سینٹر کرنے وغیرہ کے لیے استعمال کی جاتی ہے۔"]}),t.jsx("p",{children:"یہ صفحے پر چیزوں کو سیدھا اور منظم انداز میں لگانے میں مدد دیتی ہے۔"})]}),t.jsxs("div",{className:"example-section",children:[t.jsx("h3",{children:"🎨 Step 1: Basic Example (سیدھی لائن میں رنگین باکسز)"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"HTML & CSS"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`<!DOCTYPE html>
<html lang="ur">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flex Example</title>
<style>
.container {
  display: flex; /* ← یہ لائن سب کچھ لائن میں لے آتی ہے */
  background-color: lightgray;
  padding: 20px;
}

.box {
  width: 100px;
  height: 100px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;   /* عمودی سینٹر */
  justify-content: center; /* افقی سینٹر */
  margin: 5px;
  border-radius: 10px;
}

.red { background-color: red; }
.green { background-color: green; }
.blue { background-color: blue; }
.orange { background-color: orange; }
.purple { background-color: purple; }
</style>
</head>
<body>
<h2>🎨 Display: Flex Example</h2>
<div class="container">
  <div class="box red">1</div>
  <div class="box green">2</div>
  <div class="box blue">3</div>
  <div class="box orange">4</div>
  <div class="box purple">5</div>
</div>
</body>
</html>`,"flex-basic"),children:r==="flex-basic"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`<!DOCTYPE html>
<html lang="ur">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Flex Example</title>
<style>
.container {
  display: flex; /* ← یہ لائن سب کچھ لائن میں لے آتی ہے */
  background-color: lightgray;
  padding: 20px;
}

.box {
  width: 100px;
  height: 100px;
  color: white;
  font-weight: bold;
  display: flex;
  align-items: center;   /* عمودی سینٹر */
  justify-content: center; /* افقی سینٹر */
  margin: 5px;
  border-radius: 10px;
}

.red { background-color: red; }
.green { background-color: green; }
.blue { background-color: blue; }
.orange { background-color: orange; }
.purple { background-color: purple; }
</style>
</head>
<body>
<h2>🎨 Display: Flex Example</h2>
<div class="container">
  <div class="box red">1</div>
  <div class="box green">2</div>
  <div class="box blue">3</div>
  <div class="box orange">4</div>
  <div class="box purple">5</div>
</div>
</body>
</html>`})})]}),t.jsxs("div",{className:"demo-container",children:[t.jsx("div",{className:"live-demo",children:t.jsxs("div",{style:{display:"flex",backgroundColor:"lightgray",padding:"20px",borderRadius:"10px"},children:[t.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"red",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px",borderRadius:"10px",fontWeight:"bold"},children:"1"}),t.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"green",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px",borderRadius:"10px",fontWeight:"bold"},children:"2"}),t.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"blue",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px",borderRadius:"10px",fontWeight:"bold"},children:"3"}),t.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"orange",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px",borderRadius:"10px",fontWeight:"bold"},children:"4"}),t.jsx("div",{style:{width:"100px",height:"100px",backgroundColor:"purple",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"5px",borderRadius:"10px",fontWeight:"bold"},children:"5"})]})}),t.jsx("div",{className:"demo-explanation",children:t.jsxs("p",{children:[t.jsx("strong",{children:"🧠 نتیجہ:"})," تمام باکسز ایک ہی لائن میں آ جائیں گے — یہ display: flex کا پہلا کمال ہے۔"]})})]})]}),t.jsxs("div",{className:"example-section",children:[t.jsx("h3",{children:"🧭 Step 2: Flex کی اہم Types (سمتیں اور ترتیب)"}),t.jsx("div",{className:"comparison-section",children:t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"scrollable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Property"}),t.jsx("th",{children:"Description"}),t.jsx("th",{children:"Behavior"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"flex-direction: row"})}),t.jsx("td",{children:"باکسز کو بائیں سے دائیں رکھتا ہے (default)"}),t.jsx("td",{children:"→ → →"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"flex-direction: column"})}),t.jsx("td",{children:"باکسز کو اوپر سے نیچے رکھتا ہے"}),t.jsx("td",{children:"↓ ↓ ↓"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"flex-direction: row-reverse"})}),t.jsx("td",{children:"باکسز کو دائیں سے بائیں رکھتا ہے"}),t.jsx("td",{children:"← ← ←"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"flex-direction: column-reverse"})}),t.jsx("td",{children:"باکسز کو نیچے سے اوپر رکھتا ہے"}),t.jsx("td",{children:"↑ ↑ ↑"})]})]})]})})}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h4",{children:"🎯 Live Flex Directions Demo"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[t.jsxs("div",{children:[t.jsx("h5",{children:"1️⃣ flex-direction: row (بائیں سے دائیں)"}),t.jsxs("div",{style:{display:"flex",flexDirection:"row",backgroundColor:"#e0e0e0",padding:"10px",borderRadius:"8px"},children:[t.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"red",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"2px",borderRadius:"5px",fontWeight:"bold"},children:"1"}),t.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"green",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"2px",borderRadius:"5px",fontWeight:"bold"},children:"2"}),t.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"blue",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"2px",borderRadius:"5px",fontWeight:"bold"},children:"3"})]}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS Code"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  flex-direction: row; /* Default value */
}`,"flex-row"),children:r==="flex-row"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  flex-direction: row; /* Default value */
}`})})]})]}),t.jsxs("div",{children:[t.jsx("h5",{children:"2️⃣ flex-direction: column (اوپر سے نیچے)"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",backgroundColor:"#e0e0e0",padding:"10px",borderRadius:"8px",width:"100px"},children:[t.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"red",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"2px",borderRadius:"5px",fontWeight:"bold"},children:"1"}),t.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"green",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"2px",borderRadius:"5px",fontWeight:"bold"},children:"2"}),t.jsx("div",{style:{width:"50px",height:"50px",backgroundColor:"blue",color:"white",display:"flex",alignItems:"center",justifyContent:"center",margin:"2px",borderRadius:"5px",fontWeight:"bold"},children:"3"})]}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS Code"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  flex-direction: column; /* Vertical layout */
}`,"flex-column"),children:r==="flex-column"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  flex-direction: column; /* Vertical layout */
}`})})]})]})]})]})]}),t.jsxs("div",{className:"example-section",children:[t.jsx("h3",{children:"⚖️ Step 3: Justify Content (افقی سیدھ)"}),t.jsx("p",{children:"یہ property بتاتی ہے کہ باکسز افقی لائن میں کیسے رکھے جائیں۔"}),t.jsx("div",{className:"comparison-section",children:t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"scrollable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Property Value"}),t.jsx("th",{children:"مطلب"}),t.jsx("th",{children:"Visual"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"flex-start"})}),t.jsx("td",{children:"سب باکسز بائیں طرف ہوں"}),t.jsx("td",{children:"⎡ ▪ ▪ ▪ ⎤"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"center"})}),t.jsx("td",{children:"سب باکسز درمیان میں ہوں"}),t.jsx("td",{children:"⎡ · ▪ ▪ ▪ · ⎤"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"flex-end"})}),t.jsx("td",{children:"سب باکسز دائیں طرف ہوں"}),t.jsx("td",{children:"⎡ ▪ ▪ ▪ ⎤"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"space-between"})}),t.jsx("td",{children:"پہلا بائیں، آخری دائیں، باقی درمیان میں برابر فاصلہ"}),t.jsx("td",{children:"⎡▪ · ▪ · ▪⎤"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"space-around"})}),t.jsx("td",{children:"ہر باکس کے چاروں طرف برابر فاصلہ"}),t.jsx("td",{children:"⎡· ▪ · ▪ · ▪ ·⎤"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"space-evenly"})}),t.jsx("td",{children:"سب کے درمیان برابر فاصلہ"}),t.jsx("td",{children:"⎡· ▪ · ▪ · ▪ ·⎤"})]})]})]})})}),t.jsxs("div",{className:"demo-container",children:[t.jsxs("h4",{children:[t.jsx("span",{children:"🎯"}),"Justify Content Live Examples"]}),t.jsxs("div",{className:"demo-item",children:[t.jsx("h5",{children:"1. justify-content: flex-start"}),t.jsx("div",{style:{display:"flex",justifyContent:"flex-start",backgroundColor:"#f0f8ff",padding:"15px",borderRadius:"8px",border:"2px solid #007acc"},children:[1,2,3].map(f=>t.jsx("div",{style:{width:"60px",height:"60px",backgroundColor:"#007acc",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",fontWeight:"bold"},children:f},f))}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS Code"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  justify-content: flex-start; /* Items align to the left */
}`,"justify-start"),children:r==="justify-start"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  justify-content: flex-start; /* Items align to the left */
}`})})]})]}),t.jsxs("div",{className:"demo-item",children:[t.jsx("h5",{children:"2. justify-content: center"}),t.jsx("div",{style:{display:"flex",justifyContent:"center",backgroundColor:"#f0fff0",padding:"15px",borderRadius:"8px",border:"2px solid #28a745"},children:[1,2,3].map(f=>t.jsx("div",{style:{width:"60px",height:"60px",backgroundColor:"#28a745",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",fontWeight:"bold"},children:f},f))}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS Code"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  justify-content: center; /* Items center horizontally */
}`,"justify-center"),children:r==="justify-center"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  justify-content: center; /* Items center horizontally */
}`})})]})]}),t.jsxs("div",{className:"demo-item",children:[t.jsx("h5",{children:"3. justify-content: space-between"}),t.jsx("div",{style:{display:"flex",justifyContent:"space-between",backgroundColor:"#fff0f5",padding:"15px",borderRadius:"8px",border:"2px solid #e83e8c"},children:[1,2,3].map(f=>t.jsx("div",{style:{width:"60px",height:"60px",backgroundColor:"#e83e8c",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",fontWeight:"bold"},children:f},f))}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS Code"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  justify-content: space-between; /* Space between items */
}`,"justify-between"),children:r==="justify-between"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  justify-content: space-between; /* Space between items */
}`})})]})]})]})]}),t.jsxs("div",{className:"example-section",children:[t.jsx("h3",{children:"⚖️ Step 4: Align Items (عمودی سیدھ)"}),t.jsx("p",{children:"یہ property بتاتی ہے کہ باکسز container کے اندر عمودی طور پر کہاں ہوں گے۔"}),t.jsx("div",{className:"comparison-section",children:t.jsx("div",{className:"table-container",children:t.jsxs("table",{className:"scrollable-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Property Value"}),t.jsx("th",{children:"مطلب"}),t.jsx("th",{children:"Visual"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"flex-start"})}),t.jsx("td",{children:"سب باکسز اوپر کی طرف"}),t.jsxs("td",{children:["⎡ ▪ ⎤",t.jsx("br",{}),"⎡ ▪ ⎤",t.jsx("br",{}),"⎡ ▪ ⎤"]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"center"})}),t.jsx("td",{children:"سب باکسز درمیان میں"}),t.jsxs("td",{children:["⎡ · ⎤",t.jsx("br",{}),"⎡ ▪ ⎤",t.jsx("br",{}),"⎡ · ⎤"]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"flex-end"})}),t.jsx("td",{children:"سب باکسز نیچے کی طرف"}),t.jsxs("td",{children:["⎡ ▪ ⎤",t.jsx("br",{}),"⎡ ▪ ⎤",t.jsx("br",{}),"⎡ ▪ ⎤"]})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"stretch"})}),t.jsx("td",{children:"سب باکسز خودکار طور پر پوری اونچائی تک پھیل جائیں"}),t.jsxs("td",{children:["⎡ █ ⎤",t.jsx("br",{}),"⎡ █ ⎤",t.jsx("br",{}),"⎡ █ ⎤"]})]})]})]})})}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h4",{children:"🎯 Align Items Live Examples"}),t.jsxs("div",{className:"demo-item",children:[t.jsx("h5",{children:"1. align-items: flex-start"}),t.jsx("div",{style:{display:"flex",alignItems:"flex-start",backgroundColor:"#fffaf0",height:"120px",padding:"15px",borderRadius:"8px",border:"2px solid #ff8c00"},children:[1,2,3].map(f=>t.jsx("div",{style:{width:"50px",height:"40px",backgroundColor:"#ff8c00",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",fontWeight:"bold"},children:f},f))}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS Code"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  align-items: flex-start; /* Items align to top */
  height: 120px; /* Need height for vertical alignment */
}`,"align-start"),children:r==="align-start"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  align-items: flex-start; /* Items align to top */
  height: 120px; /* Need height for vertical alignment */
}`})})]})]}),t.jsxs("div",{className:"demo-item",children:[t.jsx("h5",{children:"2. align-items: center"}),t.jsx("div",{style:{display:"flex",alignItems:"center",backgroundColor:"#f8f9fa",height:"120px",padding:"15px",borderRadius:"8px",border:"2px solid #6c757d"},children:[1,2,3].map(f=>t.jsx("div",{style:{width:"50px",height:"40px",backgroundColor:"#6c757d",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",fontWeight:"bold"},children:f},f))}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS Code"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  align-items: center; /* Items center vertically */
  height: 120px;
}`,"align-center"),children:r==="align-center"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  align-items: center; /* Items center vertically */
  height: 120px;
}`})})]})]}),t.jsxs("div",{className:"demo-item",children:[t.jsx("h5",{children:"3. align-items: stretch"}),t.jsx("div",{style:{display:"flex",alignItems:"stretch",backgroundColor:"#e8f5e8",height:"120px",padding:"15px",borderRadius:"8px",border:"2px solid #2e7d32"},children:[1,2,3].map(f=>t.jsx("div",{style:{width:"50px",backgroundColor:"#2e7d32",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",fontWeight:"bold",margin:"0 5px"},children:f},f))}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS Code"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  align-items: stretch; /* Items stretch to full height */
  height: 120px;
}

.item {
  /* No height specified - will stretch */
}`,"align-stretch"),children:r==="align-stretch"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  align-items: stretch; /* Items stretch to full height */
  height: 120px;
}

.item {
  /* No height specified - will stretch */
}`})})]})]})]})]}),t.jsxs("div",{className:"example-section",children:[t.jsx("h3",{children:"🎯 Step 5: Gap Property (جدید اور آسان spacing)"}),t.jsxs("p",{children:[t.jsx("code",{children:"gap"})," property flex items کے درمیان فاصلہ مقرر کرتی ہے۔ یہ ",t.jsx("code",{children:"margin"})," کا جدید اور بہتر متبادل ہے۔"]}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS with Gap Property"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  gap: 20px; /* ← یہ تمام items کے درمیان 20px فاصلہ پیدا کرے گا */
  padding: 20px;
  background-color: #f0f0f0;
}

.box {
  width: 80px;
  height: 80px;
  background-color: #4CAF50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`,"gap-property"),children:r==="gap-property"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  gap: 20px; /* ← یہ تمام items کے درمیان 20px فاصلہ پیدا کرے گا */
  padding: 20px;
  background-color: #f0f0f0;
}

.box {
  width: 80px;
  height: 80px;
  background-color: #4CAF50;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`})})]}),t.jsxs("div",{className:"demo-container",children:[t.jsx("div",{className:"live-demo",children:t.jsxs("div",{style:{display:"flex",gap:"20px",padding:"20px",backgroundColor:"#f0f0f0",borderRadius:"10px"},children:[t.jsx("div",{style:{width:"80px",height:"80px",backgroundColor:"#4CAF50",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontWeight:"bold"},children:"1"}),t.jsx("div",{style:{width:"80px",height:"80px",backgroundColor:"#2196F3",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontWeight:"bold"},children:"2"}),t.jsx("div",{style:{width:"80px",height:"80px",backgroundColor:"#FF9800",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontWeight:"bold"},children:"3"}),t.jsx("div",{style:{width:"80px",height:"80px",backgroundColor:"#9C27B0",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"8px",fontWeight:"bold"},children:"4"})]})}),t.jsx("div",{className:"demo-explanation",children:t.jsxs("p",{children:[t.jsx("strong",{children:"✅ فائدہ:"})," ",t.jsx("code",{children:"gap"})," استعمال کرنے سے آپ کو ہر item پر الگ سے ",t.jsx("code",{children:"margin"})," لگانے کی ضرورت نہیں رہتی!"]})})]}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h4",{children:"🎯 Gap vs Margin Comparison"}),t.jsxs("div",{style:{display:"flex",gap:"30px"},children:[t.jsxs("div",{style:{flex:1},children:[t.jsx("h5",{children:"✅ باہ Gap استعمال کریں"}),t.jsx("div",{style:{display:"flex",gap:"15px",backgroundColor:"#e8f5e8",padding:"15px",borderRadius:"8px"},children:[1,2,3].map(f=>t.jsxs("div",{style:{flex:1,height:"60px",backgroundColor:"#4caf50",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",fontWeight:"bold"},children:["Box ",f]},f))}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS with Gap"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  gap: 15px; /* Simple and clean */
}`,"gap-clean"),children:r==="gap-clean"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  gap: 15px; /* Simple and clean */
}`})})]})]}),t.jsxs("div",{style:{flex:1},children:[t.jsx("h5",{children:"❌ پرانے طریقے سے Margin استعمال کریں"}),t.jsx("div",{style:{display:"flex",backgroundColor:"#ffebee",padding:"15px",borderRadius:"8px"},children:[1,2,3].map(f=>t.jsxs("div",{style:{flex:1,height:"60px",backgroundColor:"#f44336",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",fontWeight:"bold",margin:"0 7.5px"},children:["Box ",f]},f))}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS with Margin"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
}

.item {
  margin: 0 7.5px; /* Complex and error-prone */
}`,"margin-complex"),children:r==="margin-complex"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
}

.item {
  margin: 0 7.5px; /* Complex and error-prone */
}`})})]})]})]})]})]}),t.jsxs("div",{className:"example-section",children:[t.jsx("h3",{children:"🔄 Step 6: Flex Wrap (Responsive Layout کے لیے)"}),t.jsxs("p",{children:[t.jsx("code",{children:"flex-wrap"})," property بتاتی ہے کہ جب items container میں پوری جگہ نہ پا سکیں تو وہ نیچے نئی لائن میں چلے جائیں۔"]}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"CSS with Flex Wrap"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`.container {
  display: flex;
  flex-wrap: wrap; /* ← یہ items کو نیچے نئی لائن میں لے آئے گا */
  gap: 10px;
  padding: 20px;
  background-color: #f5f5f5;
}

.box {
  width: 150px;
  height: 80px;
  background-color: #2196F3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`,"flex-wrap"),children:r==="flex-wrap"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`.container {
  display: flex;
  flex-wrap: wrap; /* ← یہ items کو نیچے نئی لائن میں لے آئے گا */
  gap: 10px;
  padding: 20px;
  background-color: #f5f5f5;
}

.box {
  width: 150px;
  height: 80px;
  background-color: #2196F3;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-weight: bold;
}`})})]}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h4",{children:"🎯 Flex Wrap Live Demo"}),t.jsxs("div",{className:"demo-item",children:[t.jsx("h5",{children:"✅ flex-wrap: wrap (Responsive)"}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",backgroundColor:"#e3f2fd",padding:"20px",borderRadius:"8px",border:"2px solid #1976d2"},children:[1,2,3,4,5,6,7,8].map(f=>t.jsxs("div",{style:{width:"120px",height:"60px",backgroundColor:"#1976d2",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",fontWeight:"bold"},children:["Item ",f]},f))}),t.jsx("div",{className:"demo-explanation",children:t.jsxs("p",{children:[t.jsx("strong",{children:"✅ فائدہ:"})," جب جگہ کم ہو تو items خودکار طور پر نیچے نئی لائن میں چلے جاتے ہیں۔"]})})]}),t.jsxs("div",{className:"demo-item",children:[t.jsx("h5",{children:"❌ flex-wrap: nowrap (Default - غیر Responsive)"}),t.jsx("div",{style:{display:"flex",flexWrap:"nowrap",gap:"10px",backgroundColor:"#ffebee",padding:"20px",borderRadius:"8px",border:"2px solid #d32f2f",overflow:"hidden"},children:[1,2,3,4,5,6,7,8].map(f=>t.jsxs("div",{style:{width:"120px",height:"60px",backgroundColor:"#d32f2f",color:"white",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"5px",fontWeight:"bold",flexShrink:0},children:["Item ",f]},f))}),t.jsx("div",{className:"demo-explanation",children:t.jsxs("p",{children:[t.jsx("strong",{children:"❌ مسئلہ:"})," items باہر نکل جاتے ہیں اور responsive نہیں رہتے۔"]})})]})]})]}),t.jsxs("div",{className:"example-section",children:[t.jsx("h3",{children:"🚀 Step 7: Complete Practical Example"}),t.jsx("p",{children:"آئیے ایک عملی مثال دیکھتے ہیں جس میں تمام flex properties اکٹھی استعمال ہوئی ہیں۔"}),t.jsxs("div",{className:"code-section",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("span",{children:"Complete Flexbox Example"}),t.jsx("button",{className:"copy-btn",onClick:()=>o(`<!DOCTYPE html>
<html lang="ur">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Complete Flexbox Example</title>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 800px;
  width: 100%;
}

.header {
  text-align: center;
  color: white;
}

.header h1 {
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.header p {
  font-size: 1.2rem;
  opacity: 0.9;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px 30px;
  border-radius: 50px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  width: 100%;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #667eea;
}

.nav-links {
  display: flex;
  gap: 20px;
  list-style: none;
}

.nav-links a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #667eea;
}

.hero-section {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  width: 100%;
}

.hero-content {
  flex: 1;
  min-width: 300px;
}

.hero-content h2 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
}

.hero-content p {
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
}

.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #667eea;
  color: white;
  padding: 12px 24px;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.4);
}

.hero-image {
  flex: 1;
  min-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder-img {
  width: 100%;
  height: 250px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.features {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: 100%;
}

.feature-card {
  flex: 1;
  min-width: 200px;
  background: white;
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 15px;
}

.feature-card h3 {
  color: #333;
  margin-bottom: 10px;
}

.feature-card p {
  color: #666;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 15px;
    border-radius: 20px;
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .hero-section {
    flex-direction: column;
  }
}
</style>
</head>
<body>
<div class="container">
  <header class="header">
    <h1>🎯 Flexbox Magic</h1>
    <p>CSS Flexbox کے ساتھ responsive layouts بنانا آسان!</p>
  </header>
  
  <nav class="navbar">
    <div class="logo">FlexBox</div>
    <ul class="nav-links">
      <li><a href="#">🏠 Home</a></li>
      <li><a href="#">📚 About</a></li>
      <li><a href="#">🛠️ Services</a></li>
      <li><a href="#">📞 Contact</a></li>
    </ul>
  </nav>
  
  <section class="hero-section">
    <div class="hero-content">
      <h2>Flexbox سیکھیں</h2>
      <p>CSS Flexbox ایک طاقتور layout module ہے جو آپ کو responsive اور flexible web designs بنانے میں مدد دیتی ہے۔</p>
      <a href="#" class="btn">
        <span>🚀 شروع کریں</span>
      </a>
    </div>
    <div class="hero-image">
      <div class="placeholder-img">Flexbox Illustration</div>
    </div>
  </section>
  
  <section class="features">
    <div class="feature-card">
      <div class="feature-icon">📱</div>
      <h3>Responsive</h3>
      <p>ہر screen size کے لیے خودکار طور پر ڈھل جاتا ہے</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <h3>Fast</h3>
      <p>تیز اور efficient layouts کے لیے بہترین</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🎨</div>
      <h3>Flexible</h3>
      <p>آپ کی ہر design need کے لیے لچکدار</p>
    </div>
  </section>
</div>
</body>
</html>`,"complete-flexbox"),children:r==="complete-flexbox"?"✔ کاپی":"📋 کاپی کریں"})]}),t.jsx("div",{className:"code-block",children:t.jsx("pre",{children:`<!DOCTYPE html>
<html lang="ur">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Complete Flexbox Example</title>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-width: 800px;
  width: 100%;
}

/* ... باقی CSS code ... */
</style>
</head>
<body>
<div class="container">
  <header class="header">
    <h1>🎯 Flexbox Magic</h1>
    <p>CSS Flexbox کے ساتھ responsive layouts بنانا آسان!</p>
  </header>
  
  <nav class="navbar">
    <div class="logo">FlexBox</div>
    <ul class="nav-links">
      <li><a href="#">🏠 Home</a></li>
      <li><a href="#">📚 About</a></li>
      <li><a href="#">🛠️ Services</a></li>
      <li><a href="#">📞 Contact</a></li>
    </ul>
  </nav>
  
  <section class="hero-section">
    <div class="hero-content">
      <h2>Flexbox سیکھیں</h2>
      <p>CSS Flexbox ایک طاقتور layout module ہے جو آپ کو responsive اور flexible web designs بنانے میں مدد دیتی ہے۔</p>
      <a href="#" class="btn">
        <span>🚀 شروع کریں</span>
      </a>
    </div>
    <div class="hero-image">
      <div class="placeholder-img">Flexbox Illustration</div>
    </div>
  </section>
  
  <section class="features">
    <div class="feature-card">
      <div class="feature-icon">📱</div>
      <h3>Responsive</h3>
      <p>ہر screen size کے لیے خودکار طور پر ڈھل جاتا ہے</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <h3>Fast</h3>
      <p>تیز اور efficient layouts کے لیے بہترین</p>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🎨</div>
      <h3>Flexible</h3>
      <p>آپ کی ہر design need کے لیے لچکدار</p>
    </div>
  </section>
</div>
</body>
</html>`})})]}),t.jsxs("div",{className:"demo-container",children:[t.jsx("h4",{children:"🎯 Complete Flexbox Layout Live Demo"}),t.jsxs("div",{style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",padding:"20px",borderRadius:"15px",fontFamily:"Segoe UI, Tahoma, Geneva, Verdana, sans-serif"},children:[t.jsxs("div",{className:"whitehead",children:[t.jsxs("h2",{children:[t.jsx("span",{className:"emoji-icon",children:"🎯"}),"Flexbox Magic"]}),t.jsx("p",{style:{},children:"CSS Flexbox کے ساتھ responsive layouts بنانا آسان!"})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"white",padding:"12px 20px",borderRadius:"25px",boxShadow:"0 4px 16px rgba(0,0,0,0.1)",marginBottom:"20px"},children:[t.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"bold",color:"#667eea"},children:"FlexBox"}),t.jsxs("div",{style:{display:"flex",gap:"15px"},children:[t.jsx("span",{style:{color:"#333",fontWeight:"500"},children:"🏠 Home"}),t.jsx("span",{style:{color:"#333",fontWeight:"500"},children:"📚 About"}),t.jsx("span",{style:{color:"#333",fontWeight:"500"},children:"🛠️ Services"})]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"20px",background:"white",padding:"25px",borderRadius:"15px",boxShadow:"0 4px 16px rgba(0,0,0,0.1)",marginBottom:"20px"},children:[t.jsxs("div",{style:{flex:"1",minWidth:"200px"},children:[t.jsx("h3",{style:{color:"#333",marginBottom:"10px",fontSize:"1.3rem"},children:"Flexbox سیکھیں"}),t.jsx("p",{style:{color:"#666",lineHeight:"1.5",marginBottom:"15px",fontSize:"0.9rem"},children:"CSS Flexbox ایک طاقتور layout module ہے جو آپ کو responsive اور flexible web designs بنانے میں مدد دیتی ہے۔"}),t.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:"5px",background:"#667eea",color:"white",padding:"8px 16px",borderRadius:"20px",fontSize:"0.9rem",fontWeight:"500"},children:"🚀 شروع کریں"})]}),t.jsx("div",{style:{flex:"1",minWidth:"200px",background:"linear-gradient(45deg, #667eea, #764ba2)",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontWeight:"bold",height:"120px"},children:"Flexbox Illustration"})]}),t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"15px"},children:[{icon:"📱",title:"Responsive",desc:"ہر screen size کے لیے خودکار"},{icon:"⚡",title:"Fast",desc:"تیز اور efficient layouts"},{icon:"🎨",title:"Flexible",desc:"ہر design need کے لیے لچکدار"}].map((f,v)=>t.jsxs("div",{style:{flex:"1",minWidth:"120px",background:"white",padding:"15px",borderRadius:"10px",textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.1)"},children:[t.jsx("div",{style:{fontSize:"1.5rem",marginBottom:"8px"},children:f.icon}),t.jsx("h4",{style:{color:"#333",marginBottom:"5px",fontSize:"0.9rem"},children:f.title}),t.jsx("p",{style:{color:"#666",fontSize:"0.8rem",lineHeight:"1.3"},children:f.desc})]},v))})]})]})]}),t.jsxs("div",{className:"summary-section",children:[t.jsx("h3",{children:"📚 Flexbox Summary"}),t.jsxs("div",{className:"summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("h4",{children:"🎯 Container Properties"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("code",{children:"display: flex"})," - Flex container بناتا ہے"]}),t.jsxs("li",{children:[t.jsx("code",{children:"flex-direction"})," - Items کی سمت"]}),t.jsxs("li",{children:[t.jsx("code",{children:"justify-content"})," - افقی alignment"]}),t.jsxs("li",{children:[t.jsx("code",{children:"align-items"})," - عمودی alignment"]}),t.jsxs("li",{children:[t.jsx("code",{children:"flex-wrap"})," - Multiple lines"]}),t.jsxs("li",{children:[t.jsx("code",{children:"gap"})," - Items کے درمیان فاصلہ"]})]})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("h4",{children:"🚀 Item Properties"}),t.jsxs("ul",{children:[t.jsxs("li",{children:[t.jsx("code",{children:"flex-grow"})," - Item کا پھیلنا"]}),t.jsxs("li",{children:[t.jsx("code",{children:"flex-shrink"})," - Item کا سکڑنا"]}),t.jsxs("li",{children:[t.jsx("code",{children:"flex-basis"})," - Initial size"]}),t.jsxs("li",{children:[t.jsx("code",{children:"align-self"})," - Individual alignment"]})]})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("h4",{children:"💡 Best Practices"}),t.jsxs("ul",{children:[t.jsxs("li",{children:["Responsive layouts کے لیے ",t.jsx("code",{children:"flex-wrap: wrap"})]}),t.jsxs("li",{children:["Spacing کے لیے ",t.jsx("code",{children:"gap"})," property استعمال کریں"]}),t.jsxs("li",{children:["Centering کے لیے ",t.jsx("code",{children:"justify-content: center"})," اور"," ",t.jsx("code",{children:"align-items: center"})]}),t.jsx("li",{children:"Mobile-first approach اپنائیں"})]})]})]})]})]}),t.jsxs("footer",{className:"footer",children:[t.jsx("p",{children:"CSS Display Properties - مکمل گائیڈ"}),t.jsx("p",{children:"اب آپ layout کے بادشاہ بننے کے راستے پر ہیں! 🚀"})]})]})},_j=()=>{const[r,h]=T.useState(null),x=(f,v)=>{navigator.clipboard.writeText(f),h(v),setTimeout(()=>h(null),2e3)},d=({title:f,code:v,language:k="css",sectionName:y})=>t.jsxs("div",{className:"code-block",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h3",{children:f}),t.jsx("button",{className:"copy-btn",onClick:()=>x(v,y),children:"📋 کاپی کریں"})]}),t.jsx("pre",{className:`code-content language-${k} scrollable-code`,children:t.jsx("code",{children:v})}),r===y&&t.jsx("div",{className:"copy-message",children:"✅ کوڈ کاپی ہو گیا!"})]}),o=()=>t.jsx("div",{className:"separator",children:"________________________________________"});return t.jsxs("div",{className:"css-grid-tutorial",children:[t.jsxs("header",{className:"tutorial-header",children:[t.jsx("h1",{children:"🧩 CSS Display Grid — آسان اردو میں"}),t.jsx("p",{children:"Display: grid کا مطلب ہوتا ہے کہ آپ اپنے HTML کے اندر موجود elements کو صفوں (rows) اور کالموں (columns) میں بانٹ سکتے ہیں۔"}),t.jsx("p",{children:"یہ ایسے ہے جیسے کوئی چوکور خانوں والا بورڈ ہو، اور آپ اپنے عناصر (elements) کو ان خانوں میں رکھ سکیں۔"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"🧱 Grid Container اور Grid Items"}),t.jsx("p",{children:"جب آپ کسی container (مثلاً <div>) کو display: grid; دیتے ہیں"}),t.jsx("p",{children:"تو اس کے اندر کے تمام elements خود بخود grid items بن جاتے ہیں۔"}),t.jsx("p",{children:"مثلاً:"}),t.jsx(d,{title:"HTML مثال",code:`<div class="container">
  <div>Home</div>
  <div>About</div>
  <div>Shop</div>
  <div>Contact</div>
</div>`,language:"html",sectionName:"html-example"}),t.jsx(d,{title:"CSS گرڈ کنٹینر",code:`.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}`,sectionName:"grid-container"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"💡 1fr کیا ہے؟"}),t.jsx("p",{children:'fr کا مطلب ہوتا ہے fraction یعنی "حصہ"۔'}),t.jsx("p",{children:"اگر آپ 1fr 1fr 1fr لکھتے ہیں تو اس کا مطلب ہے کہ تین برابر حصے بناؤ۔"}),t.jsx("p",{children:"یعنی ہر column کو برابر جگہ ملے۔"}),t.jsx("p",{children:"اگر آپ 2fr 1fr لکھیں،"}),t.jsx("p",{children:"تو مطلب ہوگا: پہلا column دو حصے لے، دوسرا column ایک حصہ۔"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"🧭 Columns بنانے کے دوسرے طریقے:"}),t.jsx("p",{children:"1. Fix Widths"}),t.jsx("p",{children:"2. grid-template-columns: 200px 200px 200px;"}),t.jsx("p",{children:"👉 ہر column کی چوڑائی 200px ہو گی۔"}),t.jsx("p",{children:"3. Auto Fit (Responsive Layout)"}),t.jsx("p",{children:"4. grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"}),t.jsx("p",{children:"👉 یہ خود بخود جگہ کے حساب سے نئے columns بناتا ہے — موبائل پر خود adjust ہو جاتا ہے۔"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"🌐 اب بناتے ہیں ایک Example Page:"}),t.jsx("p",{children:"HTML:"}),t.jsx(d,{title:"مکمل HTML کوڈ",code:`<body>
  <header class="navbar">
    <h1>My Laptop Store</h1>
    <nav class="nav-links">
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Deals</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">FAQ</a>
      <a href="#">Blog</a>
      <a href="#">Login</a>
    </nav>
  </header>

  <main class="product-grid">
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 1"><p>Laptop 1</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 2"><p>Laptop 2</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 3"><p>Laptop 3</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 4"><p>Laptop 4</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 5"><p>Laptop 5</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 6"><p>Laptop 6</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 7"><p>Laptop 7</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 8"><p>Laptop 8</p></div>
  </main>

  <footer class="footer">
    <p>© 2025 My Laptop Store. All rights reserved.</p>
  </footer>
</body>`,language:"html",sectionName:"complete-html-example"}),t.jsx("p",{children:"CSS:"}),t.jsx(d,{title:"مکمل CSS کوڈ",code:`body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f4f4f4;
}

/* Navbar */
.navbar {
  background: #222;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
}

.nav-links {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  margin-top: 10px;
}

.nav-links a {
  color: #00ffcc;
  text-decoration: none;
  background: #333;
  padding: 8px;
  border-radius: 6px;
  transition: 0.3s;
}

.nav-links a:hover {
  background: #00ffcc;
  color: #222;
}

/* Product Grid */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 30px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  padding: 10px;
}

.card img {
  width: 100%;
  border-radius: 8px;
}

.footer {
  text-align: center;
  padding: 20px;
  background: #222;
  color: #aaa;
}`,sectionName:"complete-css-example"})]}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"🎯 Grid میں % (پرسنٹیج) کا استعمال"}),t.jsx("p",{children:"جب آپ grid بناتے ہیں تو آپ columns کی چوڑائی percentage (%) میں بھی دے سکتے ہیں۔"}),t.jsx("p",{children:"اس کا مطلب ہوتا ہے:"}),t.jsx("p",{children:t.jsx("strong",{children:'"کل container کی چوڑائی میں سے اتنے فیصد (%) حصے پر یہ column ہو۔"'})}),t.jsx("p",{children:"مثال:"}),t.jsx(d,{title:"Percentage مثال",code:`grid-template-columns: 50% 50%;
👉 مطلب: دو برابر columns بنیں گے،
پہلا آدھا container لے گا، دوسرا آدھا۔`,sectionName:"percentage-example"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"🔹 fr اور % میں فرق"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"پہلو"}),t.jsx("th",{children:"% (Percentage)"}),t.jsx("th",{children:"fr (Fraction)"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"بنیاد"}),t.jsx("td",{children:"container کی مکمل چوڑائی پر"}),t.jsx("td",{children:"باقی بچی ہوئی space پر"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"لچک"}),t.jsx("td",{children:"تھوڑی rigid ہوتی ہے"}),t.jsx("td",{children:"زیادہ flexible ہوتی ہے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Responsive"}),t.jsx("td",{children:"manually adjust کرنا پڑتا ہے"}),t.jsx("td",{children:"خود adjust ہو جاتا ہے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"مثال"}),t.jsx("td",{children:"50% 50%"}),t.jsx("td",{children:"1fr 1fr"})]})]})]})}),t.jsx("p",{children:t.jsx("strong",{children:"🔸 یاد رکھو:"})}),t.jsx("p",{children:'1fr کا مطلب ہے "equal share of available space"'}),t.jsx("p",{children:"جبکہ % container کی fixed فیصد جگہ لیتا ہے۔"})]}),t.jsx(o,{}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"🧩 وضاحت فونٹ استعمال کرنے کی Poppins:"}),t.jsx("p",{children:"CSS میں اگر آپ لکھتے ہو:"}),t.jsx("p",{children:t.jsx("code",{children:"font-family: 'Poppins', sans-serif;"})}),t.jsx("p",{children:"تو براؤزر چیک کرتا ہے:"}),t.jsx("p",{children:"1. کیا یہ فونٹ لوکل سسٹم (یعنی آپ کے کمپیوٹر یا موبائل) میں پہلے سے انسٹال ہے؟"}),t.jsx("p",{children:"2. اگر نہیں، تو fallback فونٹ (یعنی sans-serif) استعمال کرے گا۔"}),t.jsx("p",{children:"یعنی بغیر import کے Poppins کام نہیں کرے گا،"}),t.jsx("p",{children:"بس کوئی دوسرا مشابہ فونٹ نظر آئے گا۔"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"✅ صحیح طریقہ: Import یا Link شامل کرنا"}),t.jsxs("div",{className:"method-box",children:[t.jsx("h3",{children:"🔹 طریقہ 1: Google Fonts سے <link> tag (HTML میں)"}),t.jsx("p",{children:"اپنے <head> کے اندر یہ لائن شامل کرو 👇"}),t.jsx(d,{title:"HTML میں Font Link",code:'<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">',language:"html",sectionName:"font-link-html"}),t.jsx("p",{children:"پھر CSS میں:"}),t.jsx(d,{title:"CSS میں Font استعمال",code:`body {
  font-family: 'Poppins', sans-serif;
}`,sectionName:"font-css"})]}),t.jsxs("div",{className:"method-box",children:[t.jsx("h3",{children:"🔹 طریقہ 2: Import (CSS کے شروع میں)"}),t.jsx("p",{children:"اگر آپ الگ CSS فائل استعمال کر رہے ہیں تو سب سے اوپر یہ لکھ دو 👇"}),t.jsx(d,{title:"CSS Import طریقہ",code:`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}`,sectionName:"font-import"})]}),t.jsx("p",{children:t.jsx("strong",{children:"🔸 یاد رکھنے والی بات:"})}),t.jsx("p",{children:"Import کے بغیر فونٹ صرف fallback سے replace ہو جائے گا۔"}),t.jsx("p",{children:"مثال: اگر Poppins موجود نہیں، تو براؤزر Arial یا کوئی دوسرا sans-serif فونٹ استعمال کرے گا۔"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section final-message-section",children:[t.jsx("h2",{children:"🎓 آخری پیغام (اردو رسم الخط میں)"}),t.jsx("p",{children:"مبارک ہو 🌟"}),t.jsx("p",{children:"آپ نے Display Grid کا پورا چیپٹر مکمل کر لیا!"}),t.jsx("p",{children:"اب آپ جان چکے ہیں کہ display: grid; سے ویب پیج میں چیزوں کو کالمز اور روز میں کس طرح ترتیب دیا جاتا ہے۔"}),t.jsx("p",{children:"آپ 1fr، auto-fit، اور minmax() جیسے concepts سمجھ چکے ہیں — جو Responsive ویب ڈیزائن کے بنیادی ہتھیار ہیں 💪"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"مکمل فانٹ Poppins امپورٹ کا طریقہ"}),t.jsx("p",{children:"یہ رہا تمہارا پورا، مکمل اور چلنے والا HTML + CSS کوڈ جس میں Poppins فونٹ صحیح طریقے سے شامل کیا گیا ہے (یعنی Google Fonts سے import کیا گیا ہے)۔"}),t.jsx("p",{children:"یہ مثال ایک چھوٹی سی Laptop Store Grid Website دکھاتی ہے۔ 💻"}),t.jsx(o,{}),t.jsx("h3",{children:"🌐 HTML فائل (index.html)"}),t.jsx(d,{title:"مکمل HTML کوڈ",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Laptop Store</title>

  <!-- ✅ Google Fonts: Poppins -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">

  <!-- ✅ CSS file -->
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <header class="navbar">
    <h1>💻 My Laptop Store</h1>
    <nav class="nav-links">
      <a href="#">Home</a>
      <a href="#">Shop</a>
      <a href="#">Deals</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a href="#">FAQ</a>
      <a href="#">Blog</a>
      <a href="#">Login</a>
    </nav>
  </header>

  <main class="product-grid">
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 1"><p>Laptop 1</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 2"><p>Laptop 2</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 3"><p>Laptop 3</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 4"><p>Laptop 4</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 5"><p>Laptop 5</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 6"><p>Laptop 6</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 7"><p>Laptop 7</p></div>
    <div class="card"><img src="https://via.placeholder.com/200" alt="Laptop 8"><p>Laptop 8</p></div>
  </main>

  <footer class="footer">
    <p>© 2025 My Laptop Store. All rights reserved.</p>
  </footer>
</body>
</html>`,language:"html",sectionName:"complete-html-file"}),t.jsx(o,{}),t.jsx("h3",{children:"🎨 CSS فائل (style.css)"}),t.jsx(d,{title:"مکمل CSS کوڈ",code:`/* ✅ Import Google Font (Optional if already linked in HTML)
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap');
*/

body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f6f8fa;
}

/* --- Navbar --- */
.navbar {
  background: #222;
  color: #fff;
  padding: 15px 20px;
  text-align: center;
}

.navbar h1 {
  margin: 0;
  font-weight: 600;
  font-size: 1.6rem;
}

.nav-links {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  margin-top: 15px;
}

.nav-links a {
  color: #00ffcc;
  text-decoration: none;
  background: #333;
  padding: 8px 0;
  border-radius: 6px;
  transition: 0.3s;
  font-weight: 500;
}

.nav-links a:hover {
  background: #00ffcc;
  color: #222;
}

/* --- Product Grid --- */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  padding: 30px;
}

.card {
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  text-align: center;
  padding: 15px;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.05);
}

.card img {
  width: 100%;
  border-radius: 8px;
}

.footer {
  text-align: center;
  padding: 20px;
  background: #222;
  color: #aaa;
  font-size: 14px;
}`,sectionName:"complete-css-file"}),t.jsx(o,{}),t.jsxs("div",{className:"important-note",children:[t.jsx("h3",{children:"🌟 اب مکمل سمجھ لو:"}),t.jsx("p",{children:"✔️ font-family: 'Poppins', sans-serif; صرف تب کام کرے گا"}),t.jsx("p",{children:"جب تم Google Fonts سے یہ font import کرو گے۔"}),t.jsx("p",{children:"✔️ <link> طریقہ زیادہ بہتر ہے کیونکہ HTML کے head میں لگانے سے"}),t.jsx("p",{children:"font جلدی load ہوتا ہے۔"})]})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section final-urdu-message",children:[t.jsx("h2",{children:"🎓 اردو رسم الخط میں آخری پیغام"}),t.jsx("p",{children:"🌸 شاباش! طلباءِ کرام! 🌸"}),t.jsx("p",{children:"آپ نے آج سیکھا کہ:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Grid system میں 1fr, %, auto-fit, اور minmax() کیسے کام کرتے ہیں۔"}),t.jsx("li",{children:"اور ساتھ ہی فونٹس کو صحیح طریقے سے import کرنا بھی سیکھ لیا۔"})]}),t.jsx("p",{children:"💪 اب آپ کے پاس وہ تمام بنیادی skills ہیں جو ایک responsive professional webpage بنانے کے لیے درکار ہوتے ہیں۔"}),t.jsx("p",{children:"🎉 مبارک ہو! آپ نے Display Grid کا مکمل باب کامیابی سے مکمل کر لیا!"})]}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"🎯 minmax() کیا ہے؟"}),t.jsx("p",{children:"minmax() ایک فنکشن ہے جو grid کو لچکدار (flexible) بناتا ہے۔"}),t.jsx("p",{children:"یہ کہتا ہے:"}),t.jsx("p",{children:t.jsx("strong",{children:'"کالم کی کم از کم (minimum) اور زیادہ سے زیادہ (maximum) چوڑائی بتاؤ، تاکہ وہ خود بخود screen کے حساب سے adjust ہو جائے۔"'})}),t.jsx(o,{}),t.jsx("h3",{children:"🧩 Syntax (فارمیٹ):"}),t.jsx(d,{title:"minmax() Syntax",code:"grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));",sectionName:"minmax-syntax"}),t.jsx("h3",{children:"اب سمجھو کہ اس میں کیا ہو رہا ہے 👇"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"حصہ"}),t.jsx("th",{children:"مطلب"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"auto-fit"}),t.jsx("td",{children:"جتنے columns screen میں آ سکتے ہیں، اتنے خود بنا لو۔"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"minmax(200px, 1fr)"}),t.jsx("td",{children:"ہر column کی کم از کم چوڑائی 200px ہو، لیکن زیادہ سے زیادہ 1fr تک پھیل سکتا ہے۔"})]})]})]})}),t.jsx(o,{}),t.jsx("h3",{children:"🎨 مثال سمجھو:"}),t.jsx("p",{children:"فرض کرو تمہارے پاس 8 product cards ہیں۔"}),t.jsx("p",{children:"جب screen بڑی ہوگی تو یہ 4 یا 5 columns میں نظر آئیں گے،"}),t.jsx("p",{children:"لیکن جب موبائل پر screen چھوٹی ہوگی،"}),t.jsx("p",{children:"تو grid خود adjust ہو کر 1 یا 2 columns بنا دے گا۔"}),t.jsx("p",{children:"یعنی کوئی scroll نہیں ہوگا، سب کچھ responsive بن جائے گا! ✅"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 ایک اور مثال:"}),t.jsx("p",{children:"grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));"}),t.jsx("p",{children:"👉 مطلب:"}),t.jsx("p",{children:"ہر grid card کم سے کم 250px کا ہو۔"}),t.jsx("p",{children:"اگر screen میں جگہ زیادہ ہے تو column 1fr (برابر حصہ) تک پھیل جائے۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔸 اگر minmax نہ لگاؤ:"}),t.jsx("p",{children:"grid-template-columns: repeat(auto-fit, 1fr);"}),t.jsx("p",{children:"تو جب screen چھوٹی ہوگی، cards بہت تنگ ہو جائیں گے"}),t.jsx("p",{children:"(چھوٹے boxes بن جائیں گے)۔"}),t.jsx("p",{children:"لیکن minmax(200px, 1fr) لگانے سے"}),t.jsx("p",{children:"minimum limit لگ جاتی ہے کہ card اس سے چھوٹا نہ ہو۔ 🎯"}),t.jsx(o,{}),t.jsx("h3",{children:"💡 خلاصہ:"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"تصور"}),t.jsx("th",{children:"مطلب"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"minmax(کم سے کم, زیادہ سے زیادہ)"}),t.jsx("td",{children:"چوڑائی کی حدود طے کرنا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"فائدہ"}),t.jsx("td",{children:"Responsive design خود بن جاتا ہے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"عام استعمال"}),t.jsx("td",{children:"repeat(auto-fit, minmax(200px, 1fr))"})]})]})]})}),t.jsx("p",{children:"اب تم Display Grid کے تین بڑے concepts سیکھ چکے ہو:"}),t.jsxs("div",{className:"concepts-grid",children:[t.jsx("div",{className:"concept-item",children:"✅ fr = flexible share"}),t.jsx("div",{className:"concept-item",children:"✅ % = fixed width"}),t.jsx("div",{className:"concept-item",children:"✅ minmax() = flexible + limit control"})]})]}),t.jsx(o,{}),t.jsxs("section",{className:"achievement-section",children:[t.jsx("h2",{children:"🎓 مبارک ہو! آپ نے CSS Display Grid کا مکمل کورس مکمل کر لیا! 🌟"}),t.jsx("div",{className:"achievement-badge",children:t.jsx("span",{children:"🏆 CSS Grid Master 🏆"})}),t.jsx("p",{children:"اب آپ professional level کے CSS Grid concepts سمجھ چکے ہیں اور responsive websites بنا سکتے ہیں!"})]}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"اب تم Display Grid کا دوسرا باب سیکھنے جا رہے ہو —"}),t.jsx("p",{children:"یعنی Grid Areas & Layout Design 🎨"}),t.jsx("p",{children:"یہ باب تمہیں سکھائے گا کہ کس طرح تم grid کے اندر"}),t.jsx("p",{children:"Header, Sidebar, Main Content, اور Footer کو"}),t.jsx("p",{children:"نام دے کر (named areas) ترتیب سے رکھ سکتے ہو۔"}),t.jsx("p",{children:"چلو شروع کرتے ہیں بلکل آسان، 16 سالہ طالب علم کے انداز میں 👇"}),t.jsx(o,{}),t.jsx("h2",{children:"🎯 Grid Areas کیا ہوتی ہیں؟"}),t.jsx("p",{children:"جب ہم display: grid; استعمال کرتے ہیں"}),t.jsx("p",{children:"تو ہم ہر cell (یعنی grid کا خانہ) کو ایک نام دے سکتے ہیں۔"}),t.jsx("p",{children:"پھر انہی ناموں کے ذریعے ہم پورا صفہ (layout) design کر لیتے ہیں۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🧩 Step 1: بنیادی HTML Structure"}),t.jsx(d,{title:"HTML Structure",code:`<body>
  <div class="container">
    <header class="header">Header</header>
    <nav class="sidebar">Sidebar</nav>
    <main class="main">Main Content</main>
    <footer class="footer">Footer</footer>
  </div>
</body>`,language:"html",sectionName:"grid-areas-html"}),t.jsx("p",{children:"یہ چار حصے ہیں:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"Header"}),t.jsx("li",{children:"Sidebar"}),t.jsx("li",{children:"Main content"}),t.jsx("li",{children:"Footer"})]}),t.jsx(o,{}),t.jsx("h3",{children:"🎨 Step 2: Grid Container کے اندر Design بنانا"}),t.jsx("p",{children:"اب CSS میں ہم یہ لکھتے ہیں 👇"}),t.jsx(d,{title:"Grid Container Design",code:`.container {
  display: grid;
  height: 100vh; /* پورے صفحے کی اونچائی */
  grid-template-columns: 200px 1fr;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}`,sectionName:"grid-container-design"}),t.jsx("p",{children:"اب دیکھو کیا ہوا 👇"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Row"}),t.jsx("th",{children:"Columns"}),t.jsx("th",{children:"Layout"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"پہلی row"}),t.jsx("td",{children:"2 columns"}),t.jsx("td",{children:"دونوں header ہوں گے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"دوسری row"}),t.jsx("td",{children:"2 columns"}),t.jsx("td",{children:"ایک sidebar، دوسرا main content"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"تیسری row"}),t.jsx("td",{children:"2 columns"}),t.jsx("td",{children:"دونوں footer ہوں گے"})]})]})]})}),t.jsx(o,{}),t.jsx("h3",{children:"🧱 Step 3: Grid Areas کو Elements سے جوڑنا"}),t.jsx("p",{children:"اب ہر element کو بتاؤ کہ وہ کون سا area ہے 👇"}),t.jsx(d,{title:"Grid Areas Elements",code:`.header {
  grid-area: header;
  background: #00bcd4;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 1.5rem;
}

.sidebar {
  grid-area: sidebar;
  background: #263238;
  color: white;
  padding: 20px;
}

.main {
  grid-area: main;
  background: #f4f4f4;
  padding: 20px;
}

.footer {
  grid-area: footer;
  background: #212121;
  color: #aaa;
  text-align: center;
  padding: 15px;
}`,sectionName:"grid-areas-elements"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"🌐 مکمل Example (HTML + CSS)"}),t.jsx("p",{children:"یہ Code تم براہِ راست اپنے browser میں چلا سکتے ہو 👇"}),t.jsx(o,{}),t.jsx("h3",{children:"✅ index.html"}),t.jsx(d,{title:"مکمل HTML",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Areas Layout</title>

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <header class="header">📘 Header</header>
    <nav class="sidebar">
      <ul>
        <li>Home</li>
        <li>Shop</li>
        <li>Deals</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
    <main class="main">
      <h2>Main Content Area</h2>
      <p>یہ جگہ آرٹیکلز، تصاویر یا پروڈکٹ لسٹنگ کے لیے استعمال ہوتی ہے۔</p>
    </main>
    <footer class="footer">© 2025 Grid Layout Design</footer>
  </div>
</body>
</html>`,language:"html",sectionName:"complete-grid-areas-html"}),t.jsx(o,{}),t.jsx("h3",{children:"✅ style.css"}),t.jsx(d,{title:"مکمل CSS",code:`body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
}

/* Grid Container */
.container {
  display: grid;
  height: 100vh;
  grid-template-columns: 220px 1fr;
  grid-template-rows: 80px 1fr 60px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}

/* Header */
.header {
  grid-area: header;
  background: #00bcd4;
  color: white;
  text-align: center;
  padding: 20px;
  font-size: 1.6rem;
  font-weight: 600;
}

/* Sidebar */
.sidebar {
  grid-area: sidebar;
  background: #263238;
  color: white;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 15px 0;
  cursor: pointer;
  transition: 0.3s;
}

.sidebar li:hover {
  color: #00bcd4;
}

/* Main Content */
.main {
  grid-area: main;
  background: #f4f4f4;
  padding: 25px;
}

/* Footer */
.footer {
  grid-area: footer;
  background: #212121;
  color: #ccc;
  text-align: center;
  padding: 20px;
  font-size: 14px;
}`,sectionName:"complete-grid-areas-css"}),t.jsx(o,{}),t.jsx("h3",{children:"💡 Responsive Version (Bonus Tip)"}),t.jsx("p",{children:"اگر تم چاہو کہ موبائل پر Sidebar نیچے آ جائے"}),t.jsx("p",{children:"تو بس ایک Media Query لکھو 👇"}),t.jsx(d,{title:"Responsive Media Query",code:`@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-rows: 80px auto auto 60px;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }
}`,sectionName:"responsive-media-query"}),t.jsx("p",{children:"اب موبائل پر Header → Main → Sidebar → Footer"}),t.jsx("p",{children:"ایک سیدھی لائن میں آ جائیں گے 📱"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section final-message-section",children:[t.jsx("h2",{children:"🎓 آخری پیغام (اردو رسم الخط میں)"}),t.jsx("p",{children:"🌟 مبارک ہو ساتھی طالب علمو! 🌟"}),t.jsx("p",{children:"آپ نے Grid Areas کا پورا چیپٹر مکمل کر لیا!"}),t.jsx("p",{children:"اب آپ جان چکے ہیں کہ:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"grid کو rows اور columns میں کیسے بانٹنا ہے"}),t.jsx("li",{children:"grid areas کے نام کیسے دینے ہیں"}),t.jsx("li",{children:"اور responsive layout کیسے بنانا ہے"})]}),t.jsx("p",{children:"اب آپ چاہیں تو پورا ویب پیج بنا سکتے ہیں"}),t.jsx("p",{children:"جس میں header, sidebar, main, footer — سب اپنی جگہ درست بیٹھے ہوں۔"}),t.jsx("p",{children:"👏 آپ اب Professional CSS Grid Designer بننے کے راستے پر ہیں!"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"باب دوم: ریسپانسیو گرڈ ایریاز کا مکمل کورس"}),t.jsx("h3",{children:"📘 تعارفی سبق: جدید ویب ڈیزائن کا فن"}),t.jsx("p",{children:"پیارے طالب علمو! آج ہم CSS Grid کے اسرار و رموز سیکھیں گے۔ یہ وہ فن ہے جو آپ کی ویب ڈیزائننگ کی مہارت کو نئی بلندیوں پر لے جائے گا۔ آج کے دور میں جہاں ہر شخص موبائل، ٹیبلٹ اور ڈیسک ٹاپ پر انٹرنیٹ استعمال کرتا ہے، وہاں ایک ہی ویب سائٹ کا تمام ڈیوائسز پر خود بخود ڈھل جانا بہت اہم ہے۔"}),t.jsx("h3",{children:"🎯 ہمارا مقصد"}),t.jsx("p",{children:"ہم ایک ایسا ویب لے آؤٹ بنائیں گے جو:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"ڈیسک ٹاپ پر شاندار نظر آئے"}),t.jsx("li",{children:"ٹیبلٹ پر مکمل فٹ ہو"}),t.jsx("li",{children:"موبائل پر یکساں خوبصورت رہے"})]}),t.jsx(o,{}),t.jsx("h3",{children:"🛠️ عملی حصہ: کوڈ کے ساتھ سفر"}),t.jsx("h4",{children:"📄 HTML ڈھانچہ (بنیادی ساخت)"}),t.jsx(d,{title:"مکمل HTML ڈھانچہ",code:`<!DOCTYPE html>
<html lang="ur">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>مکمل ریسپانسیو گرڈ لے آؤٹ</title>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header class="header">📘 ہیڈر</header>
        <nav class="sidebar">
            <ul>
                <li>🏠 ہوم</li>
                <li>🛍️ شاپ</li>
                <li>🔥 ڈیلز</li>
                <li>ℹ️ ہمارے بارے میں</li>
                <li>📞 رابطہ</li>
                <li>⭐ پسندیدہ</li>
                <li>📚 بلاگ</li>
                <li>⚙️ ترتیبات</li>
            </ul>
        </nav>
        <main class="main">
            <h2>مرکزی مواد</h2>
            <p>یہ جگہ آرٹیکلز، تصاویر یا پروڈکٹ لسٹنگ کے لیے استعمال ہوتی ہے۔</p>
            <div class="content-box">
                <p>یہ ایک مثال ہے کہ content کو max-width: 400px سے کیسے limit کریں۔</p>
            </div>
        </main>
        <footer class="footer">© 2025 گرڈ لے آؤٹ ڈیزائن</footer>
    </div>
</body>
</html>`,language:"html",sectionName:"responsive-html-structure"}),t.jsx(o,{}),t.jsx("h3",{children:"🎨 CSS اسٹائلنگ: موبائل فرسٹ اپروچ"}),t.jsx("h4",{children:"📱 موبائل ویو (ڈیفالٹ اسٹائلز)"}),t.jsx(d,{title:"موبائل فرسٹ CSS",code:`/* === بنیادی ریسیٹ === */
body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #f0f2f5;
    line-height: 1.6;
}

/* === گرڈ کنٹینر === */
.container {
    display: grid;
    min-height: 100vh;
    
    /* 📱 موبائل لے آؤٹ */
    grid-template-columns: 1fr;
    grid-template-rows: 70px auto auto 50px;
    grid-template-areas:
        "header"
        "main"
        "sidebar"
        "footer";
    gap: 10px;
    padding: 10px;
}

/* === ہیڈر اسٹائلز === */
.header {
    grid-area: header;
    background: linear-gradient(135deg, #00bcd4, #0097a7);
    color: white;
    text-align: center;
    padding: 15px;
    font-size: 1.4rem;
    font-weight: 600;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* === سائیڈبار اسٹائلز === */
.sidebar {
    grid-area: sidebar;
    background: #263238;
    color: white;
    padding: 20px;
    border-radius: 8px;
}

.sidebar ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.sidebar li {
    margin: 12px 0;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 8px 12px;
    border-radius: 5px;
}

.sidebar li:hover {
    background: #37474f;
    color: #00bcd4;
    transform: translateX(5px);
}

/* === مرکزی مواد === */
.main {
    grid-area: main;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

/* === فوٹر === */
.footer {
    grid-area: footer;
    background: #212121;
    color: #ccc;
    text-align: center;
    padding: 15px;
    font-size: 14px;
    border-radius: 8px;
}

/* === max-width کی عملی مثال === */
.content-box {
    background: #e3f2fd;
    padding: 15px;
    border-radius: 6px;
    border-left: 4px solid #00bcd4;
    max-width: 400px;
    margin: 20px 0;
}`,sectionName:"mobile-first-css"}),t.jsx(o,{}),t.jsx("h3",{children:"🔄 میڈیا کوئیریز: ریسپانسیو جادو"}),t.jsx("h4",{children:"💻 ٹیبلٹ ویو (768px سے اوپر)"}),t.jsx(d,{title:"ٹیبلٹ میڈیا کوئری",code:`@media (min-width: 768px) {
    .container {
        /* 💻 ٹیبلٹ لے آؤٹ */
        grid-template-columns: 200px 1fr;
        grid-template-rows: 80px 1fr 60px;
        grid-template-areas:
            "header header"
            "sidebar main"
            "footer footer";
        gap: 15px;
        padding: 15px;
    }
    
    .header {
        font-size: 1.6rem;
        padding: 20px;
    }
    
    .sidebar li {
        margin: 15px 0;
    }
}`,sectionName:"tablet-media-query"}),t.jsx("h4",{children:"🖥️ ڈیسک ٹاپ ویو (1024px سے اوپر)"}),t.jsx(d,{title:"ڈیسک ٹاپ میڈیا کوئری",code:`@media (min-width: 1024px) {
    .container {
        /* 🖥️ ڈیسک ٹاپ لے آؤٹ */
        grid-template-columns: 250px 1fr;
        grid-template-rows: 90px 1fr 70px;
        gap: 20px;
        padding: 20px;
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .header {
        font-size: 1.8rem;
        padding: 25px;
    }
    
    .main {
        padding: 30px;
    }
    
    .content-box {
        margin: 30px 0;
    }
}`,sectionName:"desktop-media-query"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"🎯 min-width اور max-width کی مکمل سمجھ"}),t.jsx("h3",{children:"🔸 max-width: 400px کی عملی تفہیم"}),t.jsx(d,{title:"max-width مثال",code:`content-box {
    max-width: 400px;
}`,sectionName:"max-width-example"}),t.jsx("p",{children:"سادہ اردو میں مطلب:"}),t.jsx("p",{children:t.jsx("strong",{children:'"اس باکس کی چوڑائی 400 پکسلز سے زیادہ نہیں ہو سکتی، چاہے اسے کتنی ہی جگہ میسر کیوں نہ ہو۔"'})}),t.jsx("p",{children:"عملی مثال:"}),t.jsxs("ul",{children:[t.jsx("li",{children:"اگر والد عنصر کی چوڑائی 500px ہے → باکس 400px کی رہے گی"}),t.jsx("li",{children:"اگر والد عنصر کی چوڑائی 300px ہے → باکس 300px کی ہوگی"})]}),t.jsx("h3",{children:"🔸 min-width: 300px کی عملی تفہیم"}),t.jsx(d,{title:"min-width مثال",code:`sidebar {
    min-width: 300px;
}`,sectionName:"min-width-example"}),t.jsx("p",{children:"سادہ اردو میں مطلب:"}),t.jsx("p",{children:t.jsx("strong",{children:'"سائیڈبار کی چوڑائی 300 پکسلز سے کم نہیں ہو سکتی، چاہے جگہ کتنی ہی کم کیوں نہ ہو۔"'})}),t.jsx(o,{}),t.jsx("h3",{children:"📊 میڈیا کوئیری کی اقسام"}),t.jsx("h4",{children:"1. موبائل کے لیے (max-width)"}),t.jsx(d,{title:"موبائل میڈیا کوئیری",code:`@media (max-width: 767px) {
    /* اسکرین 767px یا اس سے چھوٹی ہو تو یہ اسٹائلز چلیں گی */
}`,sectionName:"mobile-media-query"}),t.jsx("h4",{children:"2. ٹیبلٹ کے لیے (دونوں limits)"}),t.jsx(d,{title:"ٹیبلٹ میڈیا کوئیری",code:`@media (min-width: 768px) and (max-width: 1023px) {
    /* اسکرین 768px سے 1023px کے درمیان ہو تو یہ اسٹائلز چلیں گی */
}`,sectionName:"tablet-range-media-query"}),t.jsx("h4",{children:"3. ڈیسک ٹاپ کے لیے (min-width)"}),t.jsx(d,{title:"ڈیسک ٹاپ میڈیا کوئیری",code:`@media (min-width: 1024px) {
    /* اسکرین 1024px یا اس سے بڑی ہو تو یہ اسٹائلز چلیں گی */
}`,sectionName:"desktop-min-media-query"}),t.jsx(o,{}),t.jsx("h3",{children:"🌟 ریسپانسیو رویے کا خلاصہ"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"ڈیوائس"}),t.jsx("th",{children:"لے آؤٹ"}),t.jsx("th",{children:"سائیڈبار"}),t.jsx("th",{children:"max-width کا اثر"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"📱 موبائل"}),t.jsx("td",{children:"ہیڈر → مرکزی مواد → سائیڈبار → فوٹر"}),t.jsx("td",{children:"نیچے آجاتی ہے"}),t.jsx("td",{children:"400px سے زیادہ نہیں بڑھتا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"💻 ٹیبلٹ"}),t.jsx("td",{children:"ہیڈر (اوپر) + سائیڈبار اور مرکزی مواد (نیچے)"}),t.jsx("td",{children:"بائیں طرف"}),t.jsx("td",{children:"400px تک محدود"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"🖥️ ڈیسک ٹاپ"}),t.jsx("td",{children:"ہیڈر (اوپر) + سائیڈبار اور مرکزی مواد (نیچے)"}),t.jsx("td",{children:"بائیں طرف"}),t.jsx("td",{children:"400px تک محدود"})]})]})]})}),t.jsx(o,{}),t.jsx("h3",{children:"💡 یاد رکھنے کے اہم نکات"}),t.jsx("h4",{children:"✅ min-width اور max-width کا فرق"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"پراپرٹی"}),t.jsx("th",{children:"مطلب"}),t.jsx("th",{children:"عملی استعمال"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"max-width"}),t.jsx("td",{children:"زیادہ سے زیادہ حد"}),t.jsx("td",{children:"تصاویر، ویڈیوز، باکسز کو limit کرنے کے لیے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"min-width"}),t.jsx("td",{children:"کم سے کم حد"}),t.jsx("td",{children:"بٹنز، مینوز، سائیڈبارز کے لیے"})]})]})]})}),t.jsx("h4",{children:"✅ موبائل فرسٹ کے فوائد"}),t.jsxs("ol",{children:[t.jsx("li",{children:"بہتر کارکردگی - کم ڈیوائسز کے لیے ہلکا کوڈ"}),t.jsx("li",{children:"آسان ترقی - چھوٹے سے بڑے کی طرف سفر"}),t.jsx("li",{children:"بہتر SEO - سرچ انجن موبائل فرسٹ سائٹس کو ترجیح دیتے ہیں"})]}),t.jsx(o,{}),t.jsx("h3",{children:"🔍 عملی مشاہدہ کی ہدایات"}),t.jsx("p",{children:"آپ اس کوڈ کو عملی طور پر آزمائیں:"}),t.jsxs("ol",{children:[t.jsx("li",{children:"براؤزر کھولیں اور ویب پیج لوڈ کریں"}),t.jsx("li",{children:"براؤزر ونڈو کی چوڑائی کو تبدیل کریں"}),t.jsx("li",{children:"مشاہدہ کریں کہ کیسے لے آؤٹ خود بخود ڈھل جاتا ہے"}),t.jsx("li",{children:"موبائل ڈیوائس پر ٹیسٹ کریں"})]}),t.jsx(o,{}),t.jsx("h3",{children:"🎓 اختتامی کلمات"}),t.jsx("p",{children:"پیارے طالب علمو! آج ہم نے سیکھا کہ کیسے CSS Grid اور میڈیا کوئیریز کے ذریعے پیشہ ورانہ ریسپانسیو ویب لے آؤٹ تیار کیا جاتا ہے۔ یہ وہ مہارت ہے جو آپ کو جدید ویب ڈیزائن کی دنیا میں نمایاں کرے گی۔"}),t.jsx("p",{children:t.jsx("strong",{children:"یاد رکھیں:"})}),t.jsx("p",{children:t.jsx("em",{children:'"اچھا ڈیزائن وہ نہیں جو صرف ڈیسک ٹاپ پر خوبصورت لگے، بلکہ وہ ہے جو ہر ڈیوائس پر یکساں خوبصورت اور قابل استعمال ہو۔"'})}),t.jsx(o,{}),t.jsx("div",{className:"final-message-section",children:t.jsx("p",{children:"🌹 اللہ آپ کے علم میں برکت عطا فرمائے اور آپ کو اس میدان میں کامیابی عطا فرمائے! 🌹"})})]}),t.jsx(o,{}),t.jsxs("section",{className:"achievement-section",children:[t.jsx("h2",{children:"🎓 مبارک ہو! آپ نے CSS Display Grid کا مکمل کورس مکمل کر لیا! 🌟"}),t.jsx("div",{className:"achievement-badge",children:t.jsx("span",{children:"🏆 CSS Grid Master 🏆"})}),t.jsx("p",{children:"اب آپ professional level کے CSS Grid concepts سمجھ چکے ہیں اور responsive websites بنا سکتے ہیں!"})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"اب تم داخل ہو گئے ہو Advanced Layout Design کی دنیا میں —"}),t.jsx("p",{children:"جہاں Grid + Flexbox ایک ساتھ مل کر Professional Web Layouts بناتے ہیں۔"}),t.jsx("p",{children:"یہ چیپٹر تمہیں سکھائے گا کہ کب grid استعمال کرنی ہے، کب flexbox،"}),t.jsx("p",{children:"اور دونوں کو ملا کر responsive homepage کیسے بنایا جاتا ہے۔"}),t.jsx(o,{}),t.jsx("h2",{children:"🧭 چیپٹر کا نام:"}),t.jsx("h3",{children:"Grid + Flexbox Combo Layout"}),t.jsx("p",{children:"(Modern Homepage Design in Urdu Style)"}),t.jsx(o,{}),t.jsx("h2",{children:"🎯 مقصد:"}),t.jsx("p",{children:"ہم ایک مکمل Homepage Layout بنائیں گے جس میں ہوں گے:"}),t.jsxs("ol",{children:[t.jsx("li",{children:"Header (navbar with logo + links)"}),t.jsx("li",{children:"Hero Section (intro banner)"}),t.jsx("li",{children:"Product Grid (using Display Grid)"}),t.jsx("li",{children:"Footer (using Flexbox)"})]}),t.jsx(o,{}),t.jsx("h3",{children:"🧩 Step 1: HTML Structure"}),t.jsx(d,{title:"Grid + Flexbox HTML Structure",code:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid + Flexbox Combo</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- 🔹 Header/Navbar -->
  <header class="navbar">
    <div class="logo">💻 LaptopZone</div>
    <ul class="nav-links">
      <li>Home</li>
      <li>Shop</li>
      <li>About</li>
      <li>Contact</li>
      <li>Support</li>
      <li>Blog</li>
      <li>Gallery</li>
      <li>Login</li>
    </ul>
  </header>

  <!-- 🔹 Hero Section -->
  <section class="hero">
    <h1>Welcome to LaptopZone</h1>
    <p>Find your perfect laptop — performance meets design.</p>
    <button>Shop Now</button>
  </section>

  <!-- 🔹 Product Grid -->
  <section class="product-grid">
    <div class="card">💻 Laptop 1</div>
    <div class="card">💻 Laptop 2</div>
    <div class="card">💻 Laptop 3</div>
    <div class="card">💻 Laptop 4</div>
    <div class="card">💻 Laptop 5</div>
    <div class="card">💻 Laptop 6</div>
    <div class="card">💻 Laptop 7</div>
    <div class="card">💻 Laptop 8</div>
  </section>

  <!-- 🔹 Footer -->
  <footer class="footer">
    <p>© 2025 LaptopZone. All rights reserved.</p>
  </footer>

</body>
</html>`,language:"html",sectionName:"grid-flexbox-html"}),t.jsx(o,{}),t.jsx("h3",{children:"🎨 Step 2: CSS Styling (Grid + Flexbox Combo)"}),t.jsx(d,{title:"Grid + Flexbox CSS",code:`/* General Style */
body {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background: #f5f5f5;
  color: #333;
}

/* 🔹 Navbar using Flexbox */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #212121;
  color: white;
  padding: 15px 40px;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
}

.nav-links li {
  cursor: pointer;
  transition: 0.3s;
}

.nav-links li:hover {
  color: #00bcd4;
}

/* 🔹 Hero Section (Center using Flex) */
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #00bcd4, #00838f);
  color: white;
  text-align: center;
  height: 250px;
}

.hero button {
  margin-top: 15px;
  padding: 10px 25px;
  background: white;
  color: #00838f;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
}

.hero button:hover {
  background: #e0f7fa;
}

/* 🔹 Product Section using Grid */
.product-grid {
  display: grid;
  gap: 20px;
  padding: 40px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}

.card {
  background: white;
  border-radius: 10px;
  text-align: center;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  transition: 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

/* 🔹 Footer using Flexbox */
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #212121;
  color: #ccc;
  height: 60px;
}`,sectionName:"grid-flexbox-css"}),t.jsx(o,{}),t.jsx("h3",{children:"🧠 Breakdown — Grid + Flexbox ملا کر کیسے کام کرتے ہیں؟"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"حصہ"}),t.jsx("th",{children:"Layout Type"}),t.jsx("th",{children:"مقصد"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Header"}),t.jsx("td",{children:"Flexbox"}),t.jsx("td",{children:"Navigation links horizontally align کرنا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Hero"}),t.jsx("td",{children:"Flexbox"}),t.jsx("td",{children:"Text & Button center میں لانا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Product Grid"}),t.jsx("td",{children:"Grid"}),t.jsx("td",{children:"Cards کو برابر columns میں تقسیم کرنا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Footer"}),t.jsx("td",{children:"Flexbox"}),t.jsx("td",{children:"Text کو center میں رکھنا"})]})]})]})}),t.jsx(o,{}),t.jsx("h3",{children:"📱 Responsive Behaviour (Already built-in)"}),t.jsxs("ul",{children:[t.jsx("li",{children:"✅ Navbar automatically wraps links when screen چھوٹی ہو"}),t.jsx("li",{children:"✅ Product grid automatically adjusts with minmax(200px, 1fr)"}),t.jsx("li",{children:"✅ Hero section remains centered on all screens"})]}),t.jsx(o,{}),t.jsx("h3",{children:"💬 اردو میں سادہ خلاصہ"}),t.jsxs("ul",{children:[t.jsx("li",{children:"flexbox = ایک لائن میں یا سینٹر کرنے کے لیے بہترین"}),t.jsx("li",{children:"grid = پورا layout یا multi-column design کے لیے بہترین"}),t.jsx("li",{children:"auto-fit اور minmax() سے responsive design خود بن جاتا ہے"}),t.jsx("li",{children:"fr سے برابر جگہ بانٹ سکتے ہیں"})]}),t.jsx(o,{}),t.jsxs("div",{className:"final-message-section",children:[t.jsx("h3",{className:"final-message-title",children:"🎓 آخری پیغام (اردو رسم الخط میں)"}),t.jsx("p",{children:"🌟 مبارک ہوطلباءِ کرام! 🌟"}),t.jsx("p",{children:"آپ نے نہ صرف Display Grid بلکہ اب Grid + Flexbox Combo Layout بھی سیکھ لیا ہے۔"}),t.jsx("p",{children:"آپ کا یہ ہوم پیج اب professional developers کے level کا ہے۔"}),t.jsx("p",{children:"اب آپ اپنی مرضی کے header, footer, cards, images, themes سب خود بنا سکتے ہیں۔"}),t.jsx("p",{children:t.jsx("strong",{children:'"یہ وہ مقام ہے جہاں سیکھنے والا developer بننے کی راہ پر قدم رکھتا ہے!" 👨💻✨'})})]})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:'یہ رہا وہ promised 🔥 "Grid vs Flexbox Quick Comparison Table" —'}),t.jsx("p",{children:"بلکل آسان اردو رسم الخط میں تاکہ تمہیں ہر بات ایک نظر میں سمجھ آ جائے۔"}),t.jsx(o,{}),t.jsx("h3",{children:"💡 Grid vs Flexbox — فرق اور استعمال"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"خصوصیت (Feature)"}),t.jsx("th",{children:"Grid 🧱"}),t.jsx("th",{children:"Flexbox 🎯"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"بنیادی مقصد"}),t.jsx("td",{children:"پورے layout (structure) کو بنانا (rows + columns دونوں)"}),t.jsx("td",{children:"کسی ایک لائن یا ایک column کے اندر items کو ترتیب دینا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"ترتیب کی سمت (Direction)"}),t.jsx("td",{children:"دو سمتوں میں — افقی (rows) + عمودی (columns)"}),t.jsx("td",{children:"ایک ہی سمت میں — row یا column"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Responsive Design"}),t.jsx("td",{children:"auto-fit, minmax() کے ساتھ بہت طاقتور"}),t.jsx("td",{children:"Flexbox بھی responsive ہے مگر زیادہ linear layout کے لیے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Alignment Control"}),t.jsx("td",{children:"Grid areas کے ذریعے پورا page divide کیا جا سکتا ہے"}),t.jsx("td",{children:"justify-content, align-items سے items adjust ہوتے ہیں"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Code Structure"}),t.jsx("td",{children:"اکثر پورا layout بناتے وقت استعمال ہوتا ہے"}),t.jsx("td",{children:"Navbar، footer، یا card alignment کے لیے بہترین"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Space Sharing"}),t.jsx("td",{children:"1fr سے برابر جگہ تقسیم کرتا ہے"}),t.jsx("td",{children:"flex: 1 سے بھی کر سکتے ہیں مگر Grid زیادہ precise ہے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Complex Layouts"}),t.jsx("td",{children:"مثلاً header + sidebar + main + footer"}),t.jsx("td",{children:"مثلاً horizontally centered navbar"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Best Use Case"}),t.jsx("td",{children:"Complete web page structure"}),t.jsx("td",{children:"Single row/column alignment"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Example Use"}),t.jsx("td",{children:"Product cards grid، dashboard layout"}),t.jsx("td",{children:"Navigation bar، button alignment، hero section"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Learning Difficulty"}),t.jsx("td",{children:"تھوڑا زیادہ مگر logical"}),t.jsx("td",{children:"آسان اور intuitive"})]})]})]})}),t.jsx(o,{}),t.jsx("h3",{children:"🧠 خلاصہ (Summary)"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"اگر تمہیں چاہیے…"}),t.jsx("th",{children:"تو استعمال کرو:"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"پورے page کا structure"}),t.jsx("td",{children:"🧱 Grid"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"ایک لائن میں items کو برابر رکھنا"}),t.jsx("td",{children:"🎯 Flexbox"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Responsive cards کا layout"}),t.jsx("td",{children:"🧱 Grid"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Navbar یا Footer alignment"}),t.jsx("td",{children:"🎯 Flexbox"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Both combined in one page"}),t.jsx("td",{children:"💪 Grid + Flexbox Combo"})]})]})]})}),t.jsx(o,{}),t.jsxs("div",{className:"important-note",children:[t.jsx("h3",{children:"🌟 یاد رکھو:"}),t.jsx("p",{children:"Grid skeleton بناتا ہے،"}),t.jsx("p",{children:"Flexbox body کو shape دیتا ہے. 💪"}),t.jsx("p",{children:"دونوں مل کر ہی modern responsive websites بنتی ہیں۔"})]})]}),t.jsx(o,{}),t.jsxs("section",{className:"tutorial-section",children:[t.jsx("h2",{children:"اب تم سیکھنے کے اس مقام پر پہنچ گئے ہو جہاں تمہیں چاہیے ایک مکمل CSS Grid Cheat Sheet in Urdu —"}),t.jsx("p",{children:"تاکہ تم جب چاہو ایک نظر میں ساری properties، استعمال اور مثالیں یاد کر سکو۔"}),t.jsx("p",{children:"یہ cheat sheet بالکل step-by-step ترتیب میں ہے، اور professional level کی ہے —"}),t.jsx("p",{children:"مگر اردو رسم الخط میں، آسان زبان میں۔ 📘✨"}),t.jsx(o,{}),t.jsx("h2",{children:"🧱 CSS Grid Cheat Sheet (Complete in Urdu)"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 1. Grid کو فعال (Activate) کرنا"}),t.jsx(d,{title:"Grid Activate",code:`.container {
  display: grid;
}`,sectionName:"grid-activate"}),t.jsx("p",{children:"✅ display: grid; سے div کے اندر موجود عناصر (items) grid کے boxes بن جاتے ہیں۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 2. Columns اور Rows بنانا"}),t.jsx(d,{title:"Columns and Rows",code:`grid-template-columns: 200px 200px 200px;
grid-template-rows: 100px 100px;`,sectionName:"columns-rows"}),t.jsx("p",{children:"📦 اوپر والے code میں 3 columns اور 2 rows بنیں گے۔"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Property"}),t.jsx("th",{children:"مطلب"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"grid-template-columns"}),t.jsx("td",{children:"Columns کی چوڑائی طے کرنا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"grid-template-rows"}),t.jsx("td",{children:"Rows کی اونچائی طے کرنا"})]})]})]})}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 3. Fraction Units (fr)"}),t.jsx(d,{title:"Fraction Units",code:"grid-template-columns: 1fr 2fr 1fr;",sectionName:"fraction-units"}),t.jsx("p",{children:'👉 fr کا مطلب ہے: "available space کا fraction"'}),t.jsx("p",{children:"یعنی 2fr والا column دوسرے سے دو گنا چوڑا ہوگا۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 4. Percentage (%)"}),t.jsx(d,{title:"Percentage Units",code:"grid-template-columns: 30% 70%;",sectionName:"percentage-units"}),t.jsx("p",{children:"ایک column 30% اور دوسرا 70% space لے گا۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 5. Repeat Function"}),t.jsx(d,{title:"Repeat Function",code:"grid-template-columns: repeat(3, 1fr);",sectionName:"repeat-function"}),t.jsx("p",{children:'یعنی "3 بار 1fr والے columns بناؤ"'}),t.jsx("p",{children:"یہ code = 1fr 1fr 1fr کے برابر ہے۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 6. Auto-fit اور Auto-fill (Responsive Grids)"}),t.jsx(d,{title:"Auto-fit and Auto-fill",code:"grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));",sectionName:"auto-fit-fill"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"لفظ"}),t.jsx("th",{children:"مطلب"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"auto-fit"}),t.jsx("td",{children:"جتنے columns screen میں fit ہو جائیں، اتنے بنا دو"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"minmax(200px, 1fr)"}),t.jsx("td",{children:"ہر column کی کم از کم چوڑائی 200px، زیادہ سے زیادہ 1fr"})]})]})]})}),t.jsx("p",{children:"✨ Responsive grid بنانے کا سب سے مشہور طریقہ۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 7. Gap Control"}),t.jsx(d,{title:"Gap Control",code:`gap: 20px;
/* یا الگ الگ */
column-gap: 15px;
row-gap: 10px;`,sectionName:"gap-control"}),t.jsx("p",{children:"✅ Columns اور Rows کے درمیان فاصلہ۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 8. Grid Areas (Layout Mapping)"}),t.jsx(d,{title:"Grid Areas",code:`grid-template-areas:
  "header header"
  "sidebar main"
  "footer footer";`,sectionName:"grid-areas"}),t.jsx("p",{children:"اور پھر child elements میں:"}),t.jsx(d,{title:"Grid Area Elements",code:`.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }`,sectionName:"grid-area-elements"}),t.jsx("p",{children:"✨ پورے layout کو آسانی سے visualize کرنے کا طریقہ۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 9. Item Positioning (Individual Control)"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Property"}),t.jsx("th",{children:"مطلب"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"grid-column-start"}),t.jsx("td",{children:"کس column سے شروع ہو"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"grid-column-end"}),t.jsx("td",{children:"کہاں ختم ہو"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"grid-row-start"}),t.jsx("td",{children:"کس row سے شروع ہو"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"grid-row-end"}),t.jsx("td",{children:"کہاں ختم ہو"})]})]})]})}),t.jsx("p",{children:"Example 👇"}),t.jsx(d,{title:"Item Positioning Example",code:`.item1 {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}`,sectionName:"item-positioning"}),t.jsx("p",{children:"مطلب: item1 column 1 سے شروع ہو کر 3 تک پھیلے۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 10. Alignments"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Property"}),t.jsx("th",{children:"مقصد"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"justify-items"}),t.jsx("td",{children:"Columns کے اندر horizontal alignment"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"align-items"}),t.jsx("td",{children:"Rows کے اندر vertical alignment"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"justify-content"}),t.jsx("td",{children:"پورے grid کو horizontally move کرنا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"align-content"}),t.jsx("td",{children:"پورے grid کو vertically move کرنا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"place-items"}),t.jsx("td",{children:"دونوں کو ایک ساتھ لکھنے کے لیے short form"})]})]})]})}),t.jsx("p",{children:"Example:"}),t.jsx(d,{title:"Alignment Example",code:`.container {
  justify-items: center;
  align-items: center;
}`,sectionName:"alignment-example"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 11. Auto Rows / Auto Columns"}),t.jsx(d,{title:"Auto Rows Columns",code:`grid-auto-rows: 150px;
grid-auto-columns: 100px;`,sectionName:"auto-rows-columns"}),t.jsx("p",{children:"جب items زیادہ ہو جائیں اور تم نے explicit rows/columns define نہ کیے ہوں۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 12. Implicit vs Explicit Grid"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"قسم"}),t.jsx("th",{children:"وضاحت"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"Explicit Grid"}),t.jsx("td",{children:"جو تم grid-template-columns/rows سے define کرو"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"Implicit Grid"}),t.jsx("td",{children:"جو browser خود بنا لے جب جگہ ختم ہو جائے"})]})]})]})}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 13. Shorthand Syntax"}),t.jsx(d,{title:"Shorthand Syntax",code:`grid-template: 
  "header header" 80px
  "sidebar main"  1fr
  "footer footer" 60px
  / 200px 1fr;`,sectionName:"shorthand-syntax"}),t.jsx("p",{children:"اوپر / کے بعد columns ہیں،"}),t.jsx("p",{children:"ہر لائن کے آخر میں rows کی height ہے۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 14. Nested Grid"}),t.jsx(d,{title:"Nested Grid",code:`.main {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}`,sectionName:"nested-grid"}),t.jsx("p",{children:"ایک grid کے اندر دوسرا grid بنانا — nested grid کہتے ہیں۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🔹 15. Responsive Adjustment (Media Queries کے ساتھ)"}),t.jsx(d,{title:"Responsive Media Query",code:`@media (max-width: 600px) {
  .container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "footer";
  }
}`,sectionName:"responsive-adjustment"}),t.jsx("p",{children:"موبائل پر سب کچھ ایک column میں آ جائے گا۔"}),t.jsx(o,{}),t.jsx("h3",{children:"🎓 خلاصہ"}),t.jsx("div",{className:"comparison-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"Keyword"}),t.jsx("th",{children:"مطلب"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:"display: grid;"}),t.jsx("td",{children:"Grid کو activate کرنا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"1fr"}),t.jsx("td",{children:"available space کا fraction"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"repeat()"}),t.jsx("td",{children:"values کو بار بار دہرانا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"minmax()"}),t.jsx("td",{children:"کم سے کم اور زیادہ سے زیادہ limit دینا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"auto-fit"}),t.jsx("td",{children:"responsive columns بنانا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"grid-template-areas"}),t.jsx("td",{children:"layout structure بنانا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"gap"}),t.jsx("td",{children:"items کے درمیان فاصلہ"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"align-items / justify-items"}),t.jsx("td",{children:"alignment controls"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:"grid-column / grid-row"}),t.jsx("td",{children:"individual item کی positioning"})]})]})]})}),t.jsx(o,{}),t.jsxs("div",{className:"important-note",children:[t.jsx("h3",{children:"🎁 تمہارے لیے Developer Tip"}),t.jsx("p",{children:t.jsx("strong",{children:'"Grid کو کبھی یاد کرنے کی کوشش مت کرو —'})}),t.jsx("p",{children:t.jsx("strong",{children:"اسے سمجھ کر visualize کرو،"})}),t.jsx("p",{children:t.jsx("strong",{children:'تب تم کسی بھی design کو recreate کر سکو گے۔" 💡'})})]})]})]})},cf=()=>{const[r,h]=T.useState(!1),[x,d]=T.useState(!1),[o,f]=T.useState(""),v=()=>{h(!r)},k=()=>{h(!1)},y=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Zohaib Farooq Responsive Navbar</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="header">
      <nav class="navbar">
        <a href="#" class="nav-logo">CuriousZohaib</a>
        <ul class="nav-menu">
          <li class="nav-item">
            <a href="#" class="nav-link">Home</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">About</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Projects</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">Contact</a>
          </li>
        </ul>
        <div class="hamburger">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>
    </header>
    <script src="script.js"><\/script>
  </body>
</html>`,m=(A,_="full")=>{navigator.clipboard.writeText(A).then(()=>{f(_),d(!0),setTimeout(()=>{d(!1),f("")},2e3)}).catch(G=>{console.error("Failed to copy code: ",G)})},C=()=>{m(y,"html")};return t.jsxs("div",{className:"navbar-container",children:[t.jsxs("header",{className:"navbar-header",children:[t.jsx("h1",{children:"Responsive Navbar"}),t.jsx("p",{children:"یہ ایک مکمل ریسپانسیو نیویگیشن بار ہے جو موبائل اور ڈیسکٹاپ دونوں پر کام کرتی ہے۔"}),x&&t.jsxs("div",{className:`confirmation-message ${o}`,children:["✅ ",o==="html"?"HTML کوڈ کاپی ہو گیا!":"کوڈ کاپی ہو گیا!"]})]}),t.jsxs("div",{className:"demo-section",children:[t.jsx("h2",{children:"ڈیمو:"}),t.jsx("div",{className:"demo-navbar-wrapper",children:t.jsx("header",{className:"header",children:t.jsxs("nav",{className:"navbar",children:[t.jsx("a",{href:"#",className:"nav-logo",children:"CuriousZohaib"}),t.jsxs("ul",{className:`nav-menu ${r?"active":""}`,children:[t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"Home"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"About"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"Projects"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"Contact"})})]}),t.jsxs("div",{className:`hamburger ${r?"active":""}`,onClick:v,children:[t.jsx("span",{className:"bar"}),t.jsx("span",{className:"bar"}),t.jsx("span",{className:"bar"})]})]})})})]}),t.jsxs("div",{className:"code-display",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h2",{children:"HTML کوڈ:"}),t.jsx("button",{className:"copy-button",onClick:C,children:"کوڈ کاپی کریں"})]}),t.jsx("div",{className:"code-block-wrapper",children:t.jsx("pre",{className:"code-block",children:y})})]}),t.jsxs("div",{className:"explanation",children:[t.jsx("h2",{children:"کوڈ کی وضاحت:"}),t.jsxs("div",{className:"explanation-content",children:[t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🏷️ 1. header اور nav کیا کرتے ہیں؟"}),t.jsx("p",{children:"<header> ویب سائٹ کے اوپر والے حصے کو ظاہر کرتا ہے — یعنی وہ حصہ جو ہر پیج پر سب سے اوپر ہوتا ہے۔ <nav> کے اندر وہ تمام لنکس ہوتے ہیں جن پر کلک کر کے ہم مختلف پیجز پر جا سکتے ہیں۔"})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"📚 2. ul اور li کیوں استعمال ہوئے؟"}),t.jsx("p",{children:"<ul> کا مطلب ہے Unordered List (یعنی ایک ایسی فہرست جس میں پوائنٹس یا bullets ہوتے ہیں) <li> ہر ایک List Item ہے — جیسے ہر ایک لنک ایک الگ لائن میں۔"}),t.jsx("p",{children:'ہم نے <ul> کو class="nav-menu" دی ہے تاکہ ہم اسے CSS اور JavaScript سے آسانی سے کنٹرول کر سکیں۔'})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:'🔗 3. href="#" کا مطلب کیا ہے؟'}),t.jsx("p",{children:'href وہ جگہ ہوتی ہے جہاں لنک کلک کرنے پر ہمیں لے جائے۔ لیکن چونکہ یہ صرف ڈیزائن کا حصہ ہے (ابھی کوئی اصلی صفحہ نہیں بنایا گیا)، اس لیے ہم نے href="#" لکھ دیا ہے۔'})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🧩 4. سب anchor tags (<a>) میں ایک ہی class کیوں ہے؟"}),t.jsxs("p",{children:['سب لنکس کو ہم نے class="nav-link" دی ہے تاکہ CSS میں ایک ہی rule سب پر لاگو ہو۔ مثلاً، اگر ہم کہنا چاہیں: "تمام لنکس کا رنگ سفید ہو، hover کرنے پر نیلا ہو" تو ہمیں بار بار ہر لنک کے لیے الگ code نہیں لکھنا پڑے گا — بس ',t.jsx("code",{children:".nav-link { color: white; }"})," لکھنے سے سب کا اسٹائل ایک جیسا ہو جائے گا۔"]})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🍔 5. Hamburger کیا ہے؟"}),t.jsx("p",{children:"جب ہم موبائل پر ویب سائٹ کھولتے ہیں، تو پوری menu نظر نہیں آتی — اس کی جگہ تین لائنوں والا چھوٹا سا icon نظر آتا ہے۔ اسی کو Hamburger Menu کہتے ہیں 🍔"}),t.jsx("p",{children:'یہ تین لائنیں <span class="bar"></span> سے بنائی گئی ہیں۔ یہاں ہر <span> ایک بار (لائن) دکھاتا ہے۔ ہم نے تین span اس لیے رکھے تاکہ تین افقی لائنیں (≡) بنیں۔'})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"⚙️ 6. JavaScript کیوں استعمال ہوا؟"}),t.jsx("p",{children:'آخر میں یہ line ہے: <script src="script.js"><\/script>'}),t.jsx("p",{children:"یہ line ہماری HTML کو JavaScript فائل سے جوڑتی ہے۔ اسی script.js میں ہم لکھیں گے کہ جب user hamburger پر click کرے تو menu slide in ہو یا slide out ہو جائے۔"})]})]})]}),t.jsxs("div",{className:"results-section",children:[t.jsx("h2",{children:"🌈 نتیجہ"}),t.jsxs("div",{className:"results-content",children:[t.jsx("p",{children:"یہ مکمل کوڈ ہمیں ایک ایسی Navbar دیتا ہے جو:"}),t.jsxs("div",{className:"features-grid",children:[t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"💻"}),t.jsx("span",{className:"feature-text",children:"Laptop پر horizontally (افقی طور پر) نظر آتی ہے۔"})]}),t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"📱"}),t.jsx("span",{className:"feature-text",children:"Mobile پر چھپ جاتی ہے اور hamburger کے ذریعے کھلتی ہے۔"})]}),t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"✨"}),t.jsx("span",{className:"feature-text",children:"CSS سے خوبصورت بنائی جا سکتی ہے۔"})]}),t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"⚙️"}),t.jsx("span",{className:"feature-text",children:"JavaScript سے قابلِ حرکت (interactive) ہو جاتی ہے۔"})]})]})]})]}),t.jsxs("div",{className:"summary-section",children:[t.jsx("h2",{children:"🧠 مختصر خلاصہ"}),t.jsx("div",{className:"summary-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"حصہ"}),t.jsx("th",{children:"مقصد"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:'<ul class="nav-menu">'})}),t.jsx("td",{children:"Menu کو CSS/JS سے کنٹرول کرنے کے لیے"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:'href="#"'})}),t.jsx("td",{children:"فرضی لنک، کہیں نہیں لے جاتا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:'class="nav-link"'})}),t.jsx("td",{children:"تمام لنکس پر ایک جیسا اسٹائل"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:'<span class="bar"></span>'})}),t.jsx("td",{children:"Hamburger کی تین لائنیں"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"JavaScript (script.js)"})}),t.jsx("td",{children:"Hamburger click پر menu کھولنے/بند کرنے کا کام"})]})]})]})})]})]})},Hj=()=>{const[r,h]=T.useState(!1),[x,d]=T.useState(!1),[o,f]=T.useState(""),v=()=>{h(!r)},k=()=>{h(!1)},y=`🎨 CSS کوڈ برائے Responsive Navbar
/* 🎯 یہ حصہ تمام ڈیفالٹ ڈیزائن ری سیٹ (صاف) کرنے کے لیے ہے */

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

/* 🎨 یہ حصہ اصل ڈیزائن شروع کرتا ہے */

.header {
    border-bottom: 1px solid #E2E8F0;
    background-color: #222;
}

.navbar {
    display: flex;
    justify-content: space-between; /* لوگو بائیں، لنکس دائیں طرف */
    align-items: center;
    padding: 1.5rem 1.5rem;
}

.hamburger {
    display: none;
}

.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.3s ease-in-out;
    background-color: #fff; /* تین سفید لائنیں */
}

.nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-item {
    margin-left: 5rem;
}

.nav-link {
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
}

.nav-link:hover {
    color: #482ff7; /* Hover کرنے پر نیلا رنگ */
}

.nav-logo {
    font-size: 3rem;
    font-weight: 500;
    color: #fff;
}

/* 📱 موبائل اسکرین کے لیے ریسپانسیو حصہ */
@media only screen and (max-width: 768px) {

    .nav-menu {
        position: fixed;
        left: -100%;  /* شروع میں menu اسکرین سے باہر */
        top: 5rem;
        flex-direction: column;
        background-color: #222;
        width: 100%;
        border-radius: 10px;
        text-align: center;
        transition: 0.3s;
        box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
    }

    .nav-link {
        color: #fff;
    }

    .nav-menu.active {
        left: 0; /* جب hamburger دبائیں تو menu اندر آ جائے */
    }

    .nav-item {
        margin: 2.5rem 0;
    }

    .hamburger {
        display: block;
        cursor: pointer; /* ہاتھ والا نشان */
    }

    /* جب hamburger پر کلک کریں تو درمیان والی لائن غائب ہو جاتی ہے */
    .hamburger.active .bar:nth-child(2) {
        opacity: 0;
    }

    /* اوپر والی لائن گھوم کر ترچھا (X) بناتی ہے */
    .hamburger.active .bar:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
    }

    /* نیچے والی لائن بھی ترچھا ہو کر (X) مکمل کرتی ہے */
    .hamburger.active .bar:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
    }
}`,m=(A,_="css")=>{navigator.clipboard.writeText(A).then(()=>{f(_),d(!0),setTimeout(()=>{d(!1),f("")},2e3)}).catch(G=>{console.error("Failed to copy code: ",G)})},C=()=>{m(y,"css")};return t.jsxs("div",{className:"navbar-container",children:[t.jsxs("header",{className:"navbar-header",children:[t.jsx("h1",{children:"🎨 CSS Responsive Navbar"}),t.jsx("p",{children:"یہ مکمل CSS کوڈ ہے جو ایک خوبصورت ریسپانسیو نیویگیشن بار بناتا ہے"}),x&&t.jsx("div",{className:`confirmation-message ${o}`,children:"✅ CSS کوڈ کاپی ہو گیا!"})]}),t.jsxs("div",{className:"demo-section",children:[t.jsx("h2",{children:"ڈیمو:"}),t.jsx("div",{className:"demo-navbar-wrapper",children:t.jsx("header",{className:"header",children:t.jsxs("nav",{className:"navbar",children:[t.jsx("a",{href:"#",className:"nav-logo",children:"CuriousZohaib"}),t.jsxs("ul",{className:`nav-menu ${r?"active":""}`,children:[t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"Home"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"About"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"Projects"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"Contact"})})]}),t.jsxs("div",{className:`hamburger ${r?"active":""}`,onClick:v,children:[t.jsx("span",{className:"bar"}),t.jsx("span",{className:"bar"}),t.jsx("span",{className:"bar"})]})]})})})]}),t.jsxs("div",{className:"code-display",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h2",{children:"CSS کوڈ:"}),t.jsx("button",{className:"copy-button",onClick:C,children:"CSS کاپی کریں"})]}),t.jsx("div",{className:"code-block-wrapper",children:t.jsx("pre",{className:"code-block",children:y})})]}),t.jsxs("div",{className:"explanation",children:[t.jsx("h2",{children:"🧠 اردو وضاحت: بچوں کے لیے آسان الفاظ میں"}),t.jsxs("div",{className:"explanation-content",children:[t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🎯 1. * { margin: 0; padding: 0; }"}),t.jsx("p",{children:"یہ لائنیں ہر HTML عنصر کے اضافی خالی جگہ (margin/padding) کو ختم کرتی ہیں۔ یعنی سب کچھ بالکل صاف اور برابر سے شروع ہوگا۔"})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🧩 2. .navbar { display: flex; justify-content: space-between; }"}),t.jsx("p",{children:'Flexbox ایک ایسا جادو ہے جو چیزوں کو ایک لائن میں برابر ترتیب دیتا ہے۔ justify-content: space-between; کہتا ہے: "ایک چیز بالکل بائیں رکھو (logo) اور دوسری بالکل دائیں رکھو (menu links)"'})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🍔 3. .hamburger اور .bar"}),t.jsx("p",{children:"یہ تین چھوٹی لائنیں ہیں جو موبائل پر menu کے لیے نظر آتی ہیں۔ ہم نے تین span رکھے، ہر span ایک لائن ہے۔ ان تینوں کو ملا کر یہ بن جاتا ہے: ≡ اسے Hamburger Icon کہتے ہیں۔"})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🪄 4. transform: translateY(8px) rotate(45deg);"}),t.jsx("p",{children:'جب بچہ hamburger پر click کرے گا تو یہ لائن اوپر یا نیچے move کرے گی اور تھوڑا rotate بھی ہوگی تاکہ shape "X" جیسی لگے۔ transform کا مطلب ہوتا ہے "شکل بدلنا" اور translateY(8px) کا مطلب ہے "8 pixels نیچے لے جانا" جبکہ rotate(45deg) مطلب ہے "45 درجے گھمانا"۔ مثال: اگر تم کسی کاغذ پر لکیر بناؤ، پھر اسے ہلکا سا جھکا دو — یہی rotate کہلاتا ہے۔'})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"💡 5. @media (max-width: 768px)"}),t.jsx("p",{children:'یہ جادوئی rule کہتا ہے: "اگر موبائل یا چھوٹی اسکرین ہے، تو نیچے دیا گیا کوڈ استعمال کرو۔" اسی لیے desktop پر menu سیدھا نظر آتا ہے اور موبائل پر hamburger میں بدل جاتا ہے۔'})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"⚙️ 6. .nav-menu.active"}),t.jsx("p",{children:'جب hamburger دباؤ تو JavaScript اس کلاس کو "active" بنا دیتا ہے۔ تب left: 0 ہو جاتا ہے، یعنی menu اندر آ جاتا ہے (slide effect)۔'})]})]})]}),t.jsxs("div",{className:"results-section",children:[t.jsx("h2",{children:"🌈 نتیجہ"}),t.jsxs("div",{className:"results-content",children:[t.jsx("p",{children:"یہ CSS کوڈ ہمیں ایک ایسی Navbar دیتا ہے جو:"}),t.jsxs("div",{className:"features-grid",children:[t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"💻"}),t.jsx("span",{className:"feature-text",children:"Desktop پر افقی طور پر نظر آتی ہے"})]}),t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"📱"}),t.jsx("span",{className:"feature-text",children:"Mobile پر hamburger menu میں تبدیل ہوتی ہے"})]}),t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"🎨"}),t.jsx("span",{className:"feature-text",children:"خوبصورت hover effects کے ساتھ"})]}),t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"⚡"}),t.jsx("span",{className:"feature-text",children:"تیز رفتار اور smooth animations"})]})]})]})]}),t.jsxs("div",{className:"summary-section",children:[t.jsx("h2",{children:"🧠 مختصر خلاصہ"}),t.jsx("div",{className:"summary-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"CSS پراپرٹی"}),t.jsx("th",{children:"مقصد"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"display: flex"})}),t.jsx("td",{children:"عناصر کو ایک لائن میں ترتیب دینا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"justify-content: space-between"})}),t.jsx("td",{children:"لوگو اور menu کے درمیان فاصلہ"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"position: fixed"})}),t.jsx("td",{children:"Mobile menu کو فکسڈ پوزیشن دینا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"transform"})}),t.jsx("td",{children:"Hamburger کو X میں تبدیل کرنا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"@media (max-width: 768px)"})}),t.jsx("td",{children:"موبائل ڈیوائسز کے لیے responsive design"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"transition"})}),t.jsx("td",{children:"Smooth animations کے لیے"})]})]})]})})]})]})},Bj=()=>{const[r,h]=T.useState(!1),[x,d]=T.useState(!1),[o,f]=T.useState(""),v=()=>{h(!r)},k=()=>{h(!1)},y=`// script.js
// 🧠 یہ کوڈ موبائل پر hamburger menu (تین لائنوں والا بٹن) کھولنے اور بند کرنے کے لیے ہے۔

// سب سے پہلے ہم HTML سے وہ دو چیزیں پکڑ رہے ہیں:
// 1️⃣ hamburger بٹن
// 2️⃣ nav menu (جس میں Home, About وغیرہ لنکس ہیں)
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// جب hamburger بٹن پر کلک کیا جائے تو mobileMenu نام والا function چلاؤ
hamburger.addEventListener("click", mobileMenu);

// یہ function menu کو کھولنے یا بند کرنے کا کام کرتا ہے
function mobileMenu() {
    // اگر class "active" لگی ہے تو ہٹا دو، نہیں لگی تو لگا دو
    // اس سے menu ایک کلک پر کھلتا ہے، اور دوسرے کلک پر بند ہوتا ہے
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// 🔹 اب دوسرا حصہ 🔹
// جب ہم کسی link پر کلک کریں (مثلاً Home, About, Contact وغیرہ)
// تو menu خود بخود بند ہو جائے

// سب navigation links پکڑ لو جن کی class "nav-link" ہے
const navLink = document.querySelectorAll(".nav-link");

// forEach ایک ایک link کو الگ الگ دیکھتا ہے اور سب پر click والا کام لگاتا ہے
// بچوں کے لیے سمجھو: جیسے پانچ دوست ہوں، سب کو ایک ایک کر کے "سلام" کہنا 🙂
navLink.forEach(n => n.addEventListener("click", closeMenu));

// یہ function menu کو بند کرنے کے لیے ہے
function closeMenu() {
    // "active" class ہٹا دو تاکہ menu بند ہو جائے
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

// ✨ خلاصہ:
// ✅ hamburger پر کلک → menu کھلے یا بند ہو
// ✅ کسی link پر کلک → menu بند ہو جائے`,m=(A,_="javascript")=>{navigator.clipboard.writeText(A).then(()=>{f(_),d(!0),setTimeout(()=>{d(!1),f("")},2e3)}).catch(G=>{console.error("Failed to copy code: ",G)})},C=()=>{m(y,"javascript")};return t.jsxs("div",{className:"navbar-container",children:[t.jsxs("header",{className:"navbar-header",children:[t.jsx("h1",{children:"⚡ JavaScript Responsive Navbar"}),t.jsx("p",{children:"یہ مکمل JavaScript کوڈ ہے جو hamburger menu کو interactive بناتا ہے"}),x&&t.jsx("div",{className:`confirmation-message ${o}`,children:"✅ JavaScript کوڈ کاپی ہو گیا!"})]}),t.jsxs("div",{className:"demo-section",children:[t.jsx("h2",{children:"ڈیمو:"}),t.jsx("div",{className:"demo-navbar-wrapper",children:t.jsx("header",{className:"header",children:t.jsxs("nav",{className:"navbar",children:[t.jsx("a",{href:"#",className:"nav-logo",children:"CuriousZohaib"}),t.jsxs("ul",{className:`nav-menu ${r?"active":""}`,children:[t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"Home"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"About"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"Projects"})}),t.jsx("li",{className:"nav-item",children:t.jsx("a",{href:"#",className:"nav-link",onClick:k,children:"Contact"})})]}),t.jsxs("div",{className:`hamburger ${r?"active":""}`,onClick:v,children:[t.jsx("span",{className:"bar"}),t.jsx("span",{className:"bar"}),t.jsx("span",{className:"bar"})]})]})})})]}),t.jsxs("div",{className:"code-display",children:[t.jsxs("div",{className:"code-header",children:[t.jsx("h2",{children:"JavaScript کوڈ (script.js):"}),t.jsx("button",{className:"copy-button",onClick:C,children:"JavaScript کاپی کریں"})]}),t.jsx("div",{className:"code-block-wrapper",children:t.jsx("pre",{className:"code-block",children:y})})]}),t.jsxs("div",{className:"explanation",children:[t.jsx("h2",{children:"🧠 مکمل آسان وضاحت (اردو رسم الخط میں)"}),t.jsxs("div",{className:"explanation-content",children:[t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🔹 پہلی دو لائنیں:"}),t.jsxs("p",{children:[t.jsx("code",{children:'const hamburger = document.querySelector(".hamburger");'}),t.jsx("br",{}),t.jsx("code",{children:'const navMenu = document.querySelector(".nav-menu");'})]}),t.jsxs("p",{children:[t.jsx("strong",{children:"سمجھاؤ:"}),t.jsx("br",{}),'document.querySelector کا مطلب ہے: جاؤ صفحے میں جا کر وہ element تلاش کرو جس کی class "hamburger" یا "nav-menu" ہے۔',t.jsx("br",{}),"پہلا variable hamburger اُس بٹن کو رکھتا ہے جس پر کلک کرنا ہے۔",t.jsx("br",{}),"دوسرا variable navMenu اُس پورے menu کو رکھتا ہے جو دکھایا یا چھپایا جاتا ہے۔"]})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🔹 اب اگلی لائن:"}),t.jsx("p",{children:t.jsx("code",{children:'hamburger.addEventListener("click", mobileMenu);'})}),t.jsxs("p",{children:[t.jsx("strong",{children:"سمجھاؤ:"}),t.jsx("br",{}),'addEventListener کا مطلب ہے: جب بھی کوئی خاص "event" ہو (جیسے "click"), تو کوئی کام کرو۔',t.jsx("br",{}),'یہاں ہم کہہ رہے ہیں: "جب hamburger بٹن پر کلک ہو، تو mobileMenu نام والا function چلاؤ۔"']})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🔹 Function کی تعریف:"}),t.jsxs("p",{children:[t.jsx("code",{children:"function mobileMenu() {"}),t.jsx("br",{}),t.jsx("code",{children:'  hamburger.classList.toggle("active");'}),t.jsx("br",{}),t.jsx("code",{children:'  navMenu.classList.toggle("active");'}),t.jsx("br",{}),t.jsx("code",{children:"}"})]}),t.jsxs("p",{children:[t.jsx("strong",{children:"سمجھاؤ:"}),t.jsx("br",{}),'function ایک چھوٹا سا "کام کرنے والا بلاک" ہوتا ہے۔',t.jsx("br",{}),"یہاں mobileMenu() وہ کام ہے جو کلک پر ہوتا ہے۔",t.jsx("br",{}),'.classList.toggle("active") کا مطلب ہے: اگر "active" class لگی ہوئی ہے تو ہٹا دو، اور اگر نہیں لگی تو لگا دو۔',t.jsx("br",{}),"یعنی ایک کلک پر مینو کھل جاتا ہے، دوسرے کلک پر بند ہو جاتا ہے۔"]})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🔹 اب دوسرا حصہ:"}),t.jsx("p",{children:t.jsx("code",{children:'const navLink = document.querySelectorAll(".nav-link");'})}),t.jsxs("p",{children:[t.jsx("strong",{children:"سمجھاؤ:"}),t.jsx("br",{}),'querySelectorAll سب elements ڈھونڈتا ہے جن کی class "nav-link" ہے۔',t.jsx("br",{}),"مطلب: نیوی گیشن کے ہر لنک کو لے آؤ — مثلاً Home, About, Contact وغیرہ۔",t.jsx("br",{}),"یہ ہمیں links کی ایک لسٹ دیتا ہے۔"]})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🔹 ہر link پر کلک سننے والا کام:"}),t.jsx("p",{children:t.jsx("code",{children:'navLink.forEach(n => n.addEventListener("click", closeMenu));'})}),t.jsxs("p",{children:[t.jsx("strong",{children:"سمجھاؤ:"}),t.jsx("br",{}),"forEach ایک طریقہ ہے جس سے ہم لسٹ کے ہر item پر الگ الگ کوئی کام کر سکتے ہیں۔",t.jsx("br",{}),'بچوں کے لیے آسان مثال: جیسے تمہارے پاس پانچ دوستوں کے نام ہوں، تو forEach کا مطلب ہے "ہر دوست کو ایک ایک کر کے سلام کہنا" 😊',t.jsx("br",{}),'یہاں ہر "nav link" پر ایک "click" سننے والا کام لگایا گیا ہے۔ جب کوئی بھی لنک کلک ہو، تو closeMenu() چلے۔']})]}),t.jsxs("div",{className:"explanation-item",children:[t.jsx("h3",{children:"🔹 آخری function:"}),t.jsxs("p",{children:[t.jsx("code",{children:"function closeMenu() {"}),t.jsx("br",{}),t.jsx("code",{children:'  hamburger.classList.remove("active");'}),t.jsx("br",{}),t.jsx("code",{children:'  navMenu.classList.remove("active");'}),t.jsx("br",{}),t.jsx("code",{children:"}"})]}),t.jsxs("p",{children:[t.jsx("strong",{children:"سمجھاؤ:"}),t.jsx("br",{}),'یہ function "active" class کو ہٹا دیتا ہے۔',t.jsx("br",{}),"مطلب: جب ہم کسی لنک پر کلک کریں، تو مینو بند ہو جائے۔"]})]})]})]}),t.jsxs("div",{className:"results-section",children:[t.jsx("h2",{children:"🌈 نتیجہ"}),t.jsxs("div",{className:"results-content",children:[t.jsx("p",{children:"یہ JavaScript کوڈ ہمیں ایک ایسی Navbar دیتا ہے جو:"}),t.jsxs("div",{className:"features-grid",children:[t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"⚡"}),t.jsx("span",{className:"feature-text",children:"Hamburger پر کلک سے menu کھلتا/بند ہوتا ہے"})]}),t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"🎯"}),t.jsx("span",{className:"feature-text",children:"کسی بھی لنک پر کلک کرنے سے menu خود بند ہو جاتا ہے"})]}),t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"🔄"}),t.jsx("span",{className:"feature-text",children:"Smooth animations کے ساتھ کام کرتا ہے"})]}),t.jsxs("div",{className:"feature-item",children:[t.jsx("span",{className:"feature-icon",children:"📱"}),t.jsx("span",{className:"feature-text",children:"موبائل ڈیوائسز پر بہترین کام کرتا ہے"})]})]})]})]}),t.jsxs("div",{className:"summary-section",children:[t.jsx("h2",{children:"🧠 مختصر خلاصہ"}),t.jsx("div",{className:"summary-table",children:t.jsxs("table",{children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:"JavaScript فنکشن"}),t.jsx("th",{children:"مقصد"})]})}),t.jsxs("tbody",{children:[t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"document.querySelector"})}),t.jsx("td",{children:"HTML elements کو select کرنا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"addEventListener"})}),t.jsx("td",{children:"کلک جیسے events کو سننا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"classList.toggle"})}),t.jsx("td",{children:"Class کو شامل/ہٹانا (toggle)"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"classList.remove"})}),t.jsx("td",{children:"Class کو ہٹانا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"forEach"})}),t.jsx("td",{children:"ہر item پر الگ الگ کام کرنا"})]}),t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("code",{children:"querySelectorAll"})}),t.jsx("td",{children:"سب elements کو ایک ساتھ select کرنا"})]})]})]})})]})]})};function Uj(){const[r,h]=T.useState(!1);T.useEffect(()=>{const o=()=>{h(window.scrollY>300)};let f=!1;const v=()=>{f||(requestAnimationFrame(()=>{o(),f=!1}),f=!0)};return window.addEventListener("scroll",v,{passive:!0}),o(),()=>window.removeEventListener("scroll",v)},[]);const x=T.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]),d=T.useCallback(o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),x())},[x]);return t.jsx(vj,{children:t.jsxs("div",{className:"app",children:[t.jsx(Aj,{}),t.jsx("main",{className:"main-content",id:"main-content",children:t.jsxs(Wm,{children:[t.jsx(pl,{path:"/",element:t.jsx(sf,{})}),t.jsx(pl,{path:"/css-background",element:t.jsx(wj,{})}),t.jsx(pl,{path:"/css-position",element:t.jsx(Mj,{})}),t.jsx(pl,{path:"/css-display",element:t.jsx(Oj,{})}),t.jsx(pl,{path:"/css-display-grid",element:t.jsx(_j,{})}),t.jsx(pl,{path:"/css-display/flex",element:t.jsx(Dj,{})}),t.jsx(pl,{path:"/css-pseudo",element:t.jsx(Rj,{})}),t.jsx(pl,{path:"/css-responsive-bar",element:t.jsx(cf,{})}),t.jsx(pl,{path:"/css-responsive-bar/html",element:t.jsx(cf,{activeTab:"html"})}),t.jsx(pl,{path:"/css-responsive-bar/css",element:t.jsx(Hj,{})}),t.jsx(pl,{path:"/css-responsive-bar/js",element:t.jsx(Bj,{})}),t.jsx(pl,{path:"*",element:t.jsx(sf,{})})]})}),r&&t.jsx("button",{className:"scroll-to-top",onClick:x,onKeyDown:d,"aria-label":"Scroll to top",tabIndex:0,children:"↑"})]})})}sm.createRoot(document.getElementById("root")).render(t.jsx(Ip.StrictMode,{children:t.jsx(Uj,{})}));
