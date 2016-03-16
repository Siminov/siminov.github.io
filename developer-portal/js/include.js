function showMenu() { if ($('#show-menu-button').hasClass('active')) { var menu=document.getElementById('menu'); $('#header').addClass('fake_header'); $('#header').slideDown('fast'); $('#show-menu-button').removeClass('active'); } else { var menu=document.getElementById('menu'); $('#header').removeClass('fake_header'); $('#header').slideUp('fast'); $('#show-menu-button').addClass('active'); } return false; } function showDevelopMenuItemsInMobile() { if($('#header li.has-submenu>.menu-item-wrap.develop').next().is('ul')) { $('#header li.has-submenu>.menu-item-wrap.develop').find('a').removeAttr('href'); } if($('#show-menu-button').is(':visible')) { if ($('#header li.has-submenu>.menu-item-wrap.develop').next().is('ul')) { if ($('#header li.has-submenu>.menu-item-wrap.develop').next().is(':visible')) { $('#header li.has-submenu>.menu-item-wrap.develop').next().removeClass('drop_active'); } else { $('#header li.has-submenu>.menu-item-wrap').next().removeClass('drop_active'); $('#header li.has-submenu>.menu-item-wrap.develop').next().addClass('drop_active'); } } } } function showCommunityMenuItemsInMobile() { if ($('#header li.has-submenu>.menu-item-wrap.community').next().is('ul')) { $('#header li.has-submenu>.menu-item-wrap.community').find('a').removeAttr('href'); } if ($('#show-menu-button').is(':visible')) { if ($('#header li.has-submenu>.menu-item-wrap.community').next().is('ul')) { if ($('#header li.has-submenu>.menu-item-wrap.community').next().is(':visible')) { $('#header li.has-submenu>.menu-item-wrap.community').next().removeClass('drop_active'); } else { $('#header li.has-submenu>.menu-item-wrap').next().removeClass('drop_active'); $('#header li.has-submenu>.menu-item-wrap.community').next().addClass('drop_active'); } } } } function showAboutMenuItemsInMobile() { if ($('#header li.has-submenu>.menu-item-wrap.about').next().is('ul')) { $('#header li.has-submenu>.menu-item-wrap.about').find('a').removeAttr('href'); } if ($('#show-menu-button').is(':visible')) { if ($('#header li.has-submenu>.menu-item-wrap.about').next().is('ul')) { if ($('#header li.has-submenu>.menu-item-wrap.about').next().is(':visible')) { $('#header li.has-submenu>.menu-item-wrap.about').next().removeClass('drop_active'); } else { $('#header li.has-submenu>.menu-item-wrap').next().removeClass('drop_active'); $('#header li.has-submenu>.menu-item-wrap.about').next().addClass('drop_active'); } } } } function showTopLoginMenu() { if ($('#open-top-panel').hasClass('active')) { $('.top-panel-inner').slideUp('slow'); $('#open-top-panel').removeClass('active'); } else { $('.top-panel-inner').slideDown('slow'); $('#open-top-panel').addClass('active'); } return false; } function showCoreProduct() { hideConnectProduct(); hideWebProduct(); hideStudioProduct(); var coreProduct = document.getElementById('product-1'); coreProduct.style.backgroundColor = "#f6f6f6"; var coreProductDesc = document.getElementById('product-1-desc'); coreProductDesc.style.display = "block"; } function hideCoreProduct() { hideConnectProduct(); hideWebProduct(); hideStudioProduct(); var coreProduct = document.getElementById('product-1'); coreProduct.style.backgroundColor = "#FFF"; var coreProduct = document.getElementById('product-1-desc'); coreProduct.style.display = "none"; } function showConnectProduct() { hideCoreProduct(); hideWebProduct(); hideStudioProduct(); var connectProduct = document.getElementById('product-2'); connectProduct.style.backgroundColor = "#f6f6f6"; } function hideConnectProduct() { var connectProduct = document.getElementById('product-2'); connectProduct.style.backgroundColor = "#FFF"; } function showWebProduct() { hideCoreProduct(); hideConnectProduct(); hideStudioProduct(); var webProduct = document.getElementById('product-3'); webProduct.style.backgroundColor = "#f6f6f6"; } function hideWebProduct() { var webProduct = document.getElementById('product-3'); webProduct.style.backgroundColor = "#FFF"; } function showStudioProduct() { hideCoreProduct(); hideConnectProduct(); hideWebProduct(); var studioProduct = document.getElementById('product-4'); studioProduct.style.backgroundColor = "#f6f6f6"; } function hideStudioProduct() { var studioProduct = document.getElementById('product-4'); studioProduct.style.backgroundColor = "#FFF"; }/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-1.10.2.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);
/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});
(function ($, window, document) {
    'use strict';

    /* Main function*/
    $.fn.scrollUp = function (options) {

        /* Ensure that only one scrollUp exists*/
        if (!$.data(document.body, 'scrollUp')) {
            $.data(document.body, 'scrollUp', true);
            $.fn.scrollUp.init(options);
        }
    };

    /* Init*/
    $.fn.scrollUp.init = function (options) {

        /* Define vars*/
        var o = $.fn.scrollUp.settings = $.extend({}, $.fn.scrollUp.defaults, options),
            triggerVisible = false,
            animIn, animOut, animSpeed, scrollDis, scrollEvent, scrollTarget, $self;

        /* Create element*/
        if (o.scrollTrigger) {
            $self = $(o.scrollTrigger);
        } else {
            $self = $('<a/>', {
                id: o.scrollName,
                href: '#top'
            });
        }

        /* Set scrollTitle if there is one*/
        if (o.scrollTitle) {
            $self.attr('title', o.scrollTitle);
        }

        $self.appendTo('body');

        /* If not using an image display text*/
        if (!(o.scrollImg || o.scrollTrigger)) {
            $self.html(o.scrollText);
        }

        /* Minimum CSS to make the magic happen*/
        $self.css({
            display: 'none',
            position: 'fixed',
            zIndex: o.zIndex
        });

        /* Active point overlay*/
        if (o.activeOverlay) {
            $('<div/>', {
                id: o.scrollName + '-active'
            }).css({
                position: 'absolute',
                'top': o.scrollDistance + 'px',
                width: '100%',
                borderTop: '1px dotted' + o.activeOverlay,
                zIndex: o.zIndex
            }).appendTo('body');
        }

        /* Switch animation type*/
        switch (o.animation) {
            case 'fade':
                animIn = 'fadeIn';
                animOut = 'fadeOut';
                animSpeed = o.animationSpeed;
                break;

            case 'slide':
                animIn = 'slideDown';
                animOut = 'slideUp';
                animSpeed = o.animationSpeed;
                break;

            default:
                animIn = 'show';
                animOut = 'hide';
                animSpeed = 0;
        }

        /* If from top or bottom*/
        if (o.scrollFrom === 'top') {
            scrollDis = o.scrollDistance;
        } else {
            scrollDis = $(document).height() - $(window).height() - o.scrollDistance;
        }

        /* Scroll function*/
        scrollEvent = $(window).scroll(function () {
            if ($(window).scrollTop() > scrollDis) {
                if (!triggerVisible) {
                    $self[animIn](animSpeed);
                    triggerVisible = true;
                }
            } else {
                if (triggerVisible) {
                    $self[animOut](animSpeed);
                    triggerVisible = false;
                }
            }
        });

        if (o.scrollTarget) {
            if (typeof o.scrollTarget === 'number') {
                scrollTarget = o.scrollTarget;
            } else if (typeof o.scrollTarget === 'string') {
                scrollTarget = Math.floor($(o.scrollTarget).offset().top);
            }
        } else {
            scrollTarget = 0;
        }

        /* To the top*/
        $self.click(function (e) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: scrollTarget
            }, o.scrollSpeed, o.easingType);
        });
    };

    /* Defaults*/
    $.fn.scrollUp.defaults = {
        scrollName: 'scrollUp',      /* Element ID*/
        scrollDistance: 300,         /* Distance from top/bottom before showing element (px)*/
        scrollFrom: 'top',           /* 'top' or 'bottom'*/
        scrollSpeed: 300,            /* Speed back to top (ms)*/
        easingType: 'linear',        /* Scroll to top easing (see http://easings.net/)*/
        animation: 'fade',           /* Fade, slide, none*/
        animationSpeed: 200,         /* Animation in speed (ms)*/
        scrollTrigger: false,        /* Set a custom triggering element. Can be an HTML string or jQuery object*/
        scrollTarget: false,         /* Set a custom target element for scrolling to. Can be element or number*/
        /*scrollText: 'Scroll to top',*/ /* Text for element, can contain HTML*/
        scrollTitle: false,          /* Set a custom <a> title if required. Defaults to scrollText*/
        scrollImg: false,            /* Set true to use image*/
        activeOverlay: false,        /* Set CSS color to display scrollUp active point, e.g '#00FFFF'*/
        zIndex: 2147483647           /* Z-Index for the overlay*/
    };

    /* Destroy scrollUp plugin and clean all modifications to the DOM*/
    $.fn.scrollUp.destroy = function (scrollEvent) {
        $.removeData(document.body, 'scrollUp');
        $('#' + $.fn.scrollUp.settings.scrollName).remove();
        $('#' + $.fn.scrollUp.settings.scrollName + '-active').remove();

        /* If 1.7 or above use the new .off()*/
        if ($.fn.jquery.split('.')[1] >= 7) {
            $(window).off('scroll', scrollEvent);

        /* Else use the old .unbind()*/
        } else {
            $(window).unbind('scroll', scrollEvent);
        }
    };

    $.scrollUp = $.fn.scrollUp;

})(jQuery, window, document);
/*
 * stickyNavbar.js v1.1.2
 * https://github.com/jbutko/stickyNavbar.js
 * Fancy sticky navigation jQuery plugin with smart anchor links highlighting
 *
 * Developed and maintenained under MIT licence by Jozef Butko - www.jozefbutko.com
 * http://www.opensource.org/licenses/MIT

 * Original jquery-browser code Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * CREDITS:
 * Daniel Eden for Animate.CSS:
 * http://daneden.github.io/animate.css/
 * jQuery easing plugin:
 * http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * COPYRIGHT (C) 2014 Jozef Butko
 * https://github.com/jbutko
 * LAST UPDATE: 25/08/2014
 *
 */
/* The semi-colon before function invocation is a safety net against concatenated
   scripts and/or other plugins which may not be closed properly. */
;
(function ($, window, document) {

    'use strict';

    $.fn.stickyNavbar = function (prop) {

        /* Set default values*/
        var options = $.extend({
            activeClass: "active", /* Class to be added to highlight nav elements*/
            sectionSelector: "scrollto", /* Class of the section that is interconnected with nav links*/
            animDuration: 350, /* Duration of jQuery animation as well as jQuery scrolling duration*/
            startAt: 0, /* Stick the menu at XXXpx from the top of the this() (nav container)*/
            easing: "swing", /* Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing*/
            animateCSS: true, /* AnimateCSS effect on/off*/
            animateCSSRepeat: false, /* Repeat animation everytime user scrolls*/
            cssAnimation: "fadeInDown", /* AnimateCSS class that will be added to selector*/
            jqueryEffects: false, /* jQuery animation on/off*/
            jqueryAnim: "slideDown", /* jQuery animation type: fadeIn, show or slideDown*/
            selector: "a", /* Selector to which activeClass will be added, either "a" or "li"*/
            mobile: false, /* If false, nav will not stick under viewport width of 480px (default) or user defined mobileWidth*/
            mobileWidth: 710, /* The viewport width (without scrollbar) under which stickyNavbar will not be applied (due user usability on mobile)*/
            zindex: 9999, /* The zindex value to apply to the element: default 9999, other option is "auto"*/
            stickyModeClass: "sticky", /* Class that will be applied to 'this' in sticky mode*/
            unstickyModeClass: "unsticky" /* Class that will be applied to 'this' in non-sticky mode*/
        }, prop),
            section = $('.' + options.sectionSelector);


        return this.each(function () {

            /* Cache variables */
            var $self = $(this),
                $selfPosition = $self.css("position"), /* Initial position of this,*/
                $selfZindex = $self.css("zIndex"), /* Z-index of this*/
                $selfScrollTop = $self.offset().top, /* scrollTop position of this*/
                $topOffset = $self.css("top") === 'auto' ? 0 : $self.css("top"), /* Top property of this: if not set = 0*/
                menuItems = options.selector === "a" ? $self.find('li a') : $self.find('li'), /* Navigation lists or links*/
                menuItemsHref = $self.find('li a[href*=#]'), /* href attributes of navigation links*/
                thisHeight = $self.outerHeight(true); /* Height of navigation wrapper*/


            /* v1.1.0: Main function, then on bottom called window.scroll, ready and resize */
            var mainFunc = function() {

                /* Cache window and window position from the top */
                var win = $(window),
                    windowPosition = win.scrollTop(),
                    windowWidth = win.width(),
                    windowHeight = win.height();

                /* v1.1.0: Optional mobileWidth */
                if (!options.mobile && windowWidth < options.mobileWidth) {
                    $self.css('position', $selfPosition);
                    return;
                }

                /* Everytime we scroll remove the activeClass. Later on we add it if needed. */
                menuItems.removeClass(options.activeClass);

                /* Add activeClass to the div that is passing the top of the window */
                section.each(function () {
                    var top = $(this).offset().top - thisHeight,
                        bottom = $(this).outerHeight(true) + top;

                    if ((windowPosition >= top) && (windowPosition <= bottom)) {
                        if (options.selector === "a") {
                            $self.find('li a[href~="#' + this.id + '"]').addClass(options.activeClass);
                        } else {
                            $self.find('li a[href~="#' + this.id + '"]').parent().addClass(options.activeClass);
                        }
                    }
                });


                /* 1.) As soon as we start scrolling */
                if (windowPosition >= $selfScrollTop + options.startAt) {

                    /* v.1.1.0: sticky/unsticky class */
                    /* Add 'sticky' class to this as soon as 'this' is in sticky mode */
                    $self.removeClass(options.unstickyModeClass).addClass(' ' + options.stickyModeClass);

                    /* As soons as scrolling starts set position of this() to fixed */
                    $self.css({
                        'position': 'fixed',
                        "zIndex": options.zindex
                    }).stop();

                    /* If jQuery effects are turned on */
                    if (options.jqueryEffects) {
                        if (!options.animateCSSRepeat) {
                            $self.hide().stop()[options.jqueryAnim](options.animDuration, options.easing);
                        }
                        $self.hide().stop()[options.jqueryAnim](options.animDuration, options.easing);

                        /* If animateCSS are turned on */
                    } else if (options.animateCSS) {

                        /* If animateCSSRepeat == true animation will repeat on each scroll  */
                        if (options.animateCSSRepeat) {

                            /* v1.0.5: animateCSSRepeat Fix */
                            /* Restart the animation */
                            $self.addClass(options.cssAnimation + ' animated').one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function (e) {
                                $self.removeClass(options.cssAnimation + ' animated');
                            });

                        /* v1.0.5: animateCSSRepeat Fix */
                        } else {

                            /* Restart the animation just once */
                            $self.addClass(options.cssAnimation + ' animated').one('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd');
                        }

                        /* Else if jQuery and animateCSS are turned off */
                    } else {
                        $self.stop(); /* Pin navigation to the top */
                    }

                    /* If top of the window is over this() (nav container) */
                } else {
                    /* v.1.1.0: sticky/unsticky class */
                    /* Add 'sticky' class to this as soon as 'this' is in sticky mode */
                    $self.css({
                        'position': options.$selfPosition,
                        "zIndex": $selfZindex
                    }).removeClass(options.stickyModeClass).addClass(' ' + options.unstickyModeClass);
                }


                /* 2.) As soon as we hit the bottom of the page */
                if (win.scrollTop() + windowHeight >= $(document).height()) {

                    /* v1.1.0: Removed bottomAnimation */

                    /* Remove activeClass from menuItem before the last and add activeClass to the lastests one */
                    menuItems.removeClass(options.activeClass).last().addClass(options.activeClass);

                }

                /* 3.) As soon as we get back to the top of the page */
                /* If top of the window is over this() (nav container) */
                if (windowPosition <= $selfScrollTop) {
                    $self.removeClass(options.cssAnimation + ' animated');

                    /* If jQuery effects are turned on */
                    if (options.jqueryEffects) {

                        /* If we are at the very top of the page remove active class */
                        /* If we are the top of the page */
                        if (windowPosition === 0) {
                            menuItems.removeClass(options.activeClass);
                        }

                        /* If the top of the window is under the this() stick the nav and start the animation */
                        if (windowPosition >= $selfScrollTop) {
                            $self.css({
                                'position': 'fixed',
                                "zIndex": options.zindex
                            }).hide().stop()[options.jqueryAnim](options.animDuration, options.easing);
                        } else {
                            $self.css({
                                'position': $selfPosition,
                                "zIndex": options.zindex
                            });
                        }

                        /* If jQuery effects are turned off */
                    } else {

                        /* If we are at the very top of the page remove active class */
                        if (windowPosition === 0) {
                            menuItems.removeClass(options.activeClass);
                        }

                        /* Set initial position of this() and initial CSS top property */
                        $self.css({
                            'position': $selfPosition,
                            'top': $topOffset
                        }).stop().animate({
                            top: $topOffset
                        }, options.animDuration, options.easing);
                    }
                } /* ( windowPosition <= $selfScrollTop ) end*/

            }

            $(window).scroll(mainFunc); /* scroll fn end*/
            $(window).ready(mainFunc);
            $(window).resize(mainFunc);

        }); /* return this.each end*/
    }; /* $.fn.stickyNavbar end*/
})(jQuery, window, document); /* document ready end*/$(function () {
  
  $('.header').stickyNavbar({
    activeClass: "active",
    sectionSelector: "scrollto",
    navOffset: 0,
    animDuration: 300,
    startAt: 0, /* Stick the menu at XXXpx from the top*/
    easing: "easeInQuad",
    bottomAnimation: true,
    jqueryEffects: false,
    animateCSS: true,
    animateCSSRepeat: false,
    selector: "a",
    jqueryAnim: "fadeInDown", /* jQuery effects: fadeIn, show, slideDown*/
    mobile: false
  });
  
  $('.product_header').stickyNavbar({
    activeClass: "active",
    sectionSelector: "scrollto",
    navOffset: 0,
    animDuration: 300,
    startAt: 70, /* Stick the menu at XXXpx from the top*/
    easing: "easeInQuad",
    bottomAnimation: true,
    jqueryEffects: false,
    animateCSS: true,
    animateCSSRepeat: false,
    selector: "a",
    jqueryAnim: "fadeInDown", /* jQuery effects: fadeIn, show, slideDown*/
    mobile: false
  });
  
  $.scrollUp({
    scrollName: 'scrollUp', /* Element ID*/
    topDistance: '300', /* Distance from top before showing element (px)*/
    topSpeed: 300, /* Speed back to top (ms)*/
    animation: 'fade', /* Fade, slide, none*/
    animationInSpeed: 200, /* Animation in speed (ms)*/
    animationOutSpeed: 200, /* Animation out speed (ms)*/
    activeOverlay: true, /* Set CSS color to display scrollUp active point, e.g '#00FFFF'*/
  });


	$('#layerslider_29').layerSlider({
	 
		startInViewport: false, 
		pauseOnHover: false, 
		forceLoopNum: false, 
		autoPlayVideos: false, 
		skinsPath: 'layer-slider/', 
		skin: 'v5', 
		thumbnailNavigation: 'hover'
	 
	});
	
	$('.button-codebox').click(function() {
      var clickedButton = $(this).data('name');
      $(this).parent().find('.button-codebox').removeClass('selected'); 
      $(this).addClass('selected'); 
      
      var parent = $(this).parents('.codebox');
      var child = parent.find('.prettyprinted');
       
      $(child).each(function() {
		  if($(this).data('name') == clickedButton) {
		  	this.style.display = 'block';	
		  } else {
		  	this.style.display = 'none';
		  }
	  }); 
	   
	});
		
	$('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 210,
        itemMargin: 5,
        pausePlay: false,
        start: function(slider){
          $('body').removeClass('loading');
        }
  	});  
});

/*! WOW - v0.1.5 - 2014-03-05
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),this.WOW=function(){function c(a){null==a&&(a={}),this.scrollCallback=b(this.scrollCallback,this),this.scrollHandler=b(this.scrollHandler,this),this.start=b(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults)}return c.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},c.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},c.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},c.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},c.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},c.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),a.setAttribute("style",this.customStyle(b,d,c,e))},c.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},c.prototype.customStyle=function(a,b,c,d){var e;return e=a?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",b&&(e+="-webkit-animation-duration: "+b+"; -moz-animation-duration: "+b+"; animation-duration: "+b+";"),c&&(e+="-webkit-animation-delay: "+c+"; -moz-animation-delay: "+c+"; animation-delay: "+c+";"),d&&(e+="-webkit-animation-iteration-count: "+d+"; -moz-animation-iteration-count: "+d+"; animation-iteration-count: "+d+";"),e},c.prototype.scrollHandler=function(){return this.scrolled=!0},c.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},c.prototype.offsetTop=function(a){var b;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},c.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},c.prototype.util=function(){return this._util||(this._util=new a)},c.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},c}()}).call(this);

new WOW().init();/*"Edit in JS Bin" button setup*/
function jsbinShowEdit(options) {
  'use strict';
  if (window.location.hash === '#noedit') {return;}

  var moveTimer, over,
  doc = document,
  aEL = 'addEventListener',
  path = options.root + window.location.pathname,
  style = doc.createElement('link'),
  btn = doc.createElement('a');


  /* show / hide button:*/
  btn.onmouseover = btn.onmouseout = function() {
    over = !over;
    (over ? show : hide)();
  };

  function show() {
    clearTimeout(moveTimer);
    btn.style.top = '0';
    moveTimer = setTimeout(hide, 2000);
  }

  function hide() {
    if (!over) { btn.style.top = '-60px'; }
  }

  show();
  if (aEL in doc) {doc[aEL]('mousemove', show, false);}
  else {doc.attachEvent('mousemove', show);}
}



jsbinShowEdit && jsbinShowEdit({"static":"","root":""});

/*
	* LayerSlider
	*
	* (c) 2011-2014 George Krupa, John Gera & Kreatura Media
	*
	* Plugin web:			http://kreaturamedia.com/
	* licenses:				http://codecanyon.net/licenses/
*/



;eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('17 bM(e,t,n){16 r;6(1W e=="64"){r=3I("#"+e)}19 6(1W e=="bD"){r=e}16 i,s;2y(t){1l"8A":i="fw 3I aE";s=\'bn bt 55 dT e9 aJ 3V 52 cu ei an d9 e3 2W 22 3I bm eG dW 2a 2t 2j 68 52 e4. <1Z>4W eM 4y 52 5k fy fA 2j 22 cw cG 2W 2t 4U cI 22 "cV ak cX 2j 47" cT cP 22 d0 & d7 df 3L.</1Z>\';1k;1l"bO":i="5R 3I aE";s="bn bt 55 cs fO fH an 5R 2D ("+n+\') 2W 22 3I bm. 2t fJ at fr 2D 1.7.0 3V fB. 4W aC 3I 2j 1.10.x 3V fz. fx: 4W do 2R fk 22 3I eN aJ 4y 5k 4U do 2R aC 2j 2.x 2D 2W 3I e6 4m 3r 2R aI 9t e1 e2 55 e7 7 & 8. <a 2l="7t://e8.ed.43/ec/4/6a-2a-eb/#9w-13&9x-60">dZ dP dO dR dY dV 3I by eD eE.</a>\';1k}r.1o("12-48");r.3U(\'<p 1s="12-eC">!</p>\');r.3U(\'<p 1s="12-48-eB">2t: \'+i+"</p>");r.3U(\'<p 1s="12-48-93">\'+s+"</p>")}(17(e){e.fn.33=17(n){16 r="1.7.0";16 i=e.fn.8A;16 s=e(14);16 o=17(e,t){16 n=e.1J(".");16 r=t.1J(".");2a(16 i=0;i<n.1j;++i){6(r.1j==i){1R 1f}6(1c(n[i])==1c(r[i])){eF}19 6(1c(n[i])>1c(r[i])){1R 1f}19{1R 1b}}6(n.1j!=r.1j){1R 1b}1R 1b};6(!o("1.8.0",i)){s.1o("12-c0")}6(!o(r,i)){bM(s,"bO",i)}19{6((1W n).3S("bD|3n")){1R 14.1K(17(e){1I t(14,n)})}19{6(n==="11"){16 u=e(14).11("2t").g;6(u){1R u}}19 6(n==="eI"){16 a=e(14).11("2t").o;6(a){1R a}}19 6(n==="ey"){16 a=e(14).11("2t").85;6(a){1R a}}19{1R 14.1K(17(t){16 r=e(14).11("2t");6(r){6(!r.g.2Z&&!r.g.4A){6(1W n=="4d"){6(n>0&&n<r.g.2A+1&&n!=r.g.24){r.4Q(n)}}19{2y(n){1l"1S":r.o.6z(r.g);r.1S("7z");1k;1l"1X":r.o.6t(r.g);r.1X("7z");1k;1l"27":6(!r.g.2G){r.o.bp(r.g);r.g.2F=1b;r.27()}1k}}}6(n=="5d"){r.d.68()}6((r.g.2G||!r.g.2G&&r.g.2F)&&n=="1y"){r.o.b2(r.g);r.g.2F=1f;r.g.1N.18(\'21[1h*="4L.43"], 21[1h*="5A.be"], 21[1h*="61.5j"]\').1K(17(){2r(e(14).11("7c"))});r.1y()}6(n=="ex"){r.9N()}}})}}}};16 t=17(u,a){16 f=14;f.$el=e(u).1o("12-2g");f.$el.11("2t",f);f.2O=17(){f.85=t.9K;f.o=e.56({},f.85,a);f.g=e.56({},t.7p);f.1x=e.56({},t.aB);f.5b=e.56({},t.9V);f.g.ek=e(u).2k("12-c0")?1f:1b;f.g.em=e(u).4u();6(f.g.2w){f.o.4Z=1f}6(f.o.2H==="ej"){f.o.2H=1b}6(f.o.2H==="9l"){f.o.2H=1f}6(1W bI!=="3n"){f.t=e.56({},bI)}6(1W au!=="3n"){f.ct=e.56({},au)}6(!f.g.bE){f.g.bE=1b;f.5d();6(e("4u").18(\'bP[7Z*="5k"]\').1j){f.g.8Q=e("4u").18(\'bP[7Z*="5k"]\').1g("7Z").1J("5k")[1]}6(e("4u").18(\'8q[1h*="6a"]\').1j){6(e("4u").18(\'8q[1h*="6a"]\').1g("1h").1i("?")!=-1){f.g.8g=e("4u").18(\'8q[1h*="6a"]\').1g("1h").1J("?")[1].1J("=")[1]}}f.d.aT("2t ew");f.d.aU(\'<a 2l="#">1S</a> | <a 2l="#">1X</a> | <a 2l="#">27</a> | <a 2l="#">1y</a> | <a 2l="#">eH 1y</a>\');f.d.46.18("a").1K(17(){e(14).2h(17(t){t.3w();e(u).33(e(14).93())})});f.d.aT("2t 2D fC");f.d.aU("ak 2D: <1Z>"+f.g.2D+"</1Z>");6(f.g.8g){f.d.aL("cx 2D: <1Z>"+f.g.8g+"</1Z>")}6(f.g.8Q){f.d.aL("5k 2D: <1Z>"+f.g.8Q+"</1Z>")}f.d.aL("3I 2D: <1Z>"+e().8A+"</1Z>");6(e(u).1g("4Y")){f.d.aT("2t 2g");f.d.aU("#"+e(u).1g("4Y"))}6(!f.o.2v||f.o.2v==""||!f.o.3v||f.o.3v==""){f.d.aT("cp cj 2v. ci: ck 2v 4U / 3V 3v.");f.5h()}19{f.d.aT("cH 2j 2O 9t 2v: "+f.o.2v,1b);e(u).1o("12-"+f.o.2v);16 n=f.o.3v+f.o.2v+"/2v.1a";8Y=e("9u");6(!e("9u").1j){8Y=e("47")}6(e(\'7q[2l="\'+n+\'"]\').1j){f.d.aU(\'cg "\'+f.o.2v+\'" 3r cd 2X.\');r=e(\'7q[2l="\'+n+\'"]\');6(!f.g.2X){f.g.2X=1b;f.g.9O=2i(17(){f.5h()},7w)}}19{6(5V.9h){5V.9h(n);16 r=e(\'7q[2l="\'+n+\'"]\')}19{16 r=e(\'<7q 57="c3" 2l="\'+n+\'" 4K="93/1a" />\').1w(8Y)}}r.2O(17(){6(!f.g.2X){f.d.aU("9A.2O(); 8Z");f.g.2X=1b;f.g.9P=2i(17(){f.5h()},7w)}});e(1Y).2O(17(){6(!f.g.2X){f.d.aU("$(1Y).2O(); 8Z");f.g.2X=1b;f.g.9Q=2i(17(){f.5h()},7w)}});f.g.9M=2i(17(){6(!f.g.2X){f.d.aT("di dI: dC 9A.2O(); 3V $(1Y).2O(); dz 8Z");f.g.2X=1b;f.5h()}},1Q)}}};f.5h=17(){e(u).6i(e(f.o.1w));6(!e("4u").1g("4Y")){e("4u").1g("4Y","12-7p")}19 6(!e("47").1g("4Y")){e("47").1g("4Y","12-7p")}6(f.g.7n()===1b&&f.o.99===1b){e(u).1o("12-4v");e(u).3W(".12-3T-3P-2g").1o("12-4v")}16 t=17(){6(f.o.99===1b&&f.g.7n()===1b){e(u).1o("12-4v");e(u).3W(".12-3T-3P-2g").1o("12-4v");f.o.4k=1f}19{6(e(1Y).1d()<f.o.bk||e(1Y).1d()>f.o.bw){e(u).1o("12-4v");e(u).3W(".12-3T-3P-2g").1o("12-4v")}19{e(u).2s("12-4v");e(u).3W(".12-3T-3P-2g").2s("12-4v")}}};e(1Y).2J(17(){t()});t();f.g.1A=17(){1R e(u).1d()};f.g.1G=17(){1R e(u).1e()};e(u).18(".12-3C").2s("12-3C").1o("12-1r");e(u).18(\'.12-1r > *[1s*="12-s"]\').1K(17(){16 t=e(14).1g("1s").1J("12-s")[1].1J(" ")[0];e(14).2s("12-s"+t).1o("12-l"+t)});6(f.o.9r){f.o.30=f.o.9r}6(f.o.cS===1f){f.o.4V=1f}6(e(u).18(".12-1r").1j==1){f.o.4k=1f;f.o.7Y=1f;f.o.6W=1f;f.o.7a=1f;f.o.4w=0;f.o.7r=1f;f.o.2H=1b;f.o.30=1;f.o.3b="9l"}6(e(u).26().2k("12-3T-3P-7F")){e(u)[0].1O.1d="1B%"}6(f.o.1d){f.g.8N=f.g.2n=""+f.o.1d}19{f.g.8N=f.g.2n=e(u)[0].1O.1d}6(f.o.1e){f.g.3z=""+f.o.1e}19{f.g.3z=e(u)[0].1O.1e}6(f.g.2n.1i("%")==-1&&f.g.2n.1i("1E")==-1){f.g.2n+="1E"}6(f.g.3z.1i("%")==-1&&f.g.3z.1i("1E")==-1){f.g.3z+="1E"}6(f.o.9G&&f.g.2n.1i("1E")!=-1&&f.g.3z.1i("1E")!=-1){f.g.41=1b}19{f.g.41=1f}6(f.o.91===1b){f.o.4n=0;f.g.41=1b;6(f.g.2n.1i("%")!=-1){f.g.2n=1c(f.g.2n)+"1E"}6(f.g.3z.1i("%")!=-1){f.g.3z=1c(f.g.3z)+"1E"}}e(u).18(\'*[1s*="12-l"], *[1s*="12-bg"]\').1K(17(){6(!e(14).26().2k("12-1r")){e(14).cR(e(14).26())}});e(u).18(".12-1r").1K(17(){e(14).3s(\':2R([1s*="12-"])\').1K(17(){e(14).7y()});16 t=e("<1n>").1o("12-cQ");6(e(14).18(".12-bg").1j){t.cZ(e(14).18(".12-bg").eq("0"))}19{t.6i(e(14))}});e(u).18(\'.12-1r, *[1s*="12-l"]\').1K(17(){6(e(14).11("12")||e(14).1g("57")||e(14).1g("1O")){6(e(14).11("12")){16 t=e(14).11("12").23().1J(";")}19 6(e(14).1g("57")&&e(14).1g("57").1i(":")!=-1&&e(14).1g("57").1i(";")!=-1){16 t=e(14).1g("57").23().1J(";")}19{16 t=e(14).1g("1O").23().1J(";")}2a(x=0;x<t.1j;x++){3K=t[x].1J(":");6(3K[0].1i("4R")!=-1){3K[1]=f.9L(3K[1])}16 n="";6(3K[2]){n=":"+e.6h(3K[2])}6(3K[0]!=" "&&3K[0]!=""){e(14).11(e.6h(3K[0]),e.6h(3K[1])+n)}}}6(f.o.8d===1b&&f.o.4k===1b){f.o.4k=1f;f.g.7N=1b}16 r=e(14);r.11("4t",r[0].1O.1m);r.11("4s",r[0].1O.1p);6(e(14).3r("a")&&e(14).3s().1j>0){r=e(14).3s()}16 i=r.1d();16 s=r.1e();6(r[0].1O.1d&&r[0].1O.1d.1i("%")!=-1){i=r[0].1O.1d}6(r[0].1O.1e&&r[0].1O.1e.1i("%")!=-1){s=r[0].1O.1e}r.11("2V",i);r.11("31",s);r.11("8C",r.1a("2f-1m"));r.11("8D",r.1a("2f-1F"));r.11("8X",r.1a("2f-1p"));r.11("8G",r.1a("2f-1q"));16 o=1W 3l(r.1a("2M"))=="4d"?1D.dd(3l(r.1a("2M"))*1B)/1B:1;e(14).11("7d",o);6(r.1a("3H-1m-1d").1i("1E")==-1){r.11("7e",r[0].1O.9Y)}19{r.11("7e",r.1a("3H-1m-1d"))}6(r.1a("3H-1F-1d").1i("1E")==-1){r.11("7j",r[0].1O.9X)}19{r.11("7j",r.1a("3H-1F-1d"))}6(r.1a("3H-1p-1d").1i("1E")==-1){r.11("7k",r[0].1O.9T)}19{r.11("7k",r.1a("3H-1p-1d"))}6(r.1a("3H-1q-1d").1i("1E")==-1){r.11("7l",r[0].1O.9U)}19{r.11("7l",r.1a("3H-1q-1d"))}r.11("9S",r.1a("a0-a1"));r.11("9Z",r.1a("a2-1e"))});6(5V.4X.9v){2a(16 n=0;n<e(u).18(".12-1r").1j;n++){6(e(u).18(".12-1r").eq(n).11("d2")==5V.4X.9v.1J("#")[1]){f.o.30=n+1}}}e(u).18(\'*[1s*="12-8j-"]\').1K(17(){16 t=e(14).1g("1s").1J(" ");2a(16 n=0;n<t.1j;n++){6(t[n].1i("12-8j-")!=-1){16 r=1c(t[n].1J("12-8j-")[1]);e(14).1a({dt:"d5"}).2h(17(t){t.3w();e(u).33(r)})}}});f.g.2A=e(u).18(".12-1r").1j;6(f.o.7A&&f.g.2A>2){f.o.30=="2m";f.o.8t=1f}19{f.o.7A=1f}6(f.o.30=="2m"){f.o.30=1D.2b(1D.2m()*f.g.2A+1)}f.o.5i=f.o.5i<f.g.2A+1?f.o.5i:1;f.o.5i=f.o.5i<1?1:f.o.5i;f.g.4j=1;6(f.o.4V){f.g.4j=0}16 r=5V.4X.2l.1i("d6:")===-1?"":"7t:";e(u).18(\'21[1h*="4L.43"], 21[1h*="5A.be"]\').1K(17(){e(14).26().1o("12-2x-3C");6(e(14).26(\'[1s*="12-l"]\')){16 t=e(14);16 n=r;e.9D(n+"//d4.4L.43/d3/9s/d1/"+e(14).1g("1h").1J("9z/")[1].1J("?")[0]+"?v=2&87=9q&9j=?",17(e){t.11("7s",1c(e["9x"]["d8$9w"]["dc$2u"]["db"])*1Q)});16 i=e("<1n>").1o("12-5L").1w(e(14).26());e("<28>").1w(i).1o("12-3k").1g("87","as 2x").1g("1h",n+"//28.4L.43/da/"+e(14).1g("1h").1J("9z/")[1].1J("?")[0]+"/"+f.o.aQ);e("<1n>").1w(i).1o("12-ab");e(14).26().1a({1d:e(14).1d(),1e:e(14).1e()}).2h(17(){6(e(14).11("4N")>0&&e(14).11("4z")){2r(e(14).11("4z"))}f.g.2Z=1b;6(f.g.3f){6(f.o.2H!=1f){f.g.3f=1f}f.g.2F=1b}19{f.g.2F=f.g.2G}6(f.o.2H!=1f){f.1y()}f.g.5l=1b;n=e(14).18("21").11("4b").1i("7t")===-1?r:"";e(14).18("21").1g("1h",n+e(14).18("21").11("4b"));e(14).18(".12-5L").1M(f.g.v.d).3Q(f.g.v.fo,17(){6(f.o.2H=="1U"&&f.g.2F==1b){16 e=2i(17(){f.27()},t.11("7s")-f.g.v.d);t.11("7c",e)}f.g.2Z=1f;6(f.g.2J==1b){f.3x(f.g.1N,17(){f.g.2J=1f})}})});16 s="&";6(e(14).1g("1h").1i("?")==-1){s="?"}16 o="&ac=ad&cO=1";6(e(14).1g("1h").1i("4h")==-1){e(14).11("4b",e(14).1g("1h")+s+"4h=1"+o)}19{e(14).11("4b",e(14).1g("1h").2q("4h=0","4h=1")+o)}e(14).11("2V",e(14).1g("1d"));e(14).11("31",e(14).1g("1e"));e(14).1g("1h","")}});e(u).18(\'21[1h*="61.5j"]\').1K(17(){e(14).26().1o("12-2x-3C");6(e(14).26(\'[1s*="12-l"]\')){16 t=e(14);16 n=r;16 i=e("<1n>").1o("12-5L").1w(e(14).26());e.9D(n+"//5j.43/9s/cY/2x/"+e(14).1g("1h").1J("2x/")[1].1J("?")[0]+".9q?9j=?",17(n){e("<28>").1w(i).1o("12-3k").1g("87","as 2x").1g("1h",n[0]["dA"]);t.11("7s",1c(n[0]["2u"])*1Q);e("<1n>").1w(i).1o("12-ab")});e(14).26().1a({1d:e(14).1d(),1e:e(14).1e()}).2h(17(){6(e(14).11("4N")>0&&e(14).11("4z")){2r(e(14).11("4z"))}f.g.2Z=1b;6(f.g.3f){6(f.o.2H!=1f){f.g.3f=1f}f.g.2F=1b}19{f.g.2F=f.g.2G}6(f.o.2H!=1f){f.1y()}f.g.5l=1b;n=e(14).18("21").11("4b").1i("7t")===-1?r:"";e(14).18("21").1g("1h",n+e(14).18("21").11("4b"));e(14).18(".12-5L").1M(f.g.v.d).3Q(f.g.v.fo,17(){6(f.o.2H=="1U"&&f.g.2F==1b){16 e=2i(17(){f.27()},t.11("7s")-f.g.v.d);t.11("7c",e)}f.g.2Z=1f;6(f.g.2J==1b){f.3x(f.g.1N,17(){f.g.2J=1f})}})});16 s="&";6(e(14).1g("1h").1i("?")==-1){s="?"}16 o="&ac=ad";6(e(14).1g("1h").1i("4h")==-1){e(14).11("4b",e(14).1g("1h")+s+"4h=1"+o)}19{e(14).11("4b",e(14).1g("1h").2q("4h=0","4h=1")+o)}e(14).11("2V",e(14).1g("1d"));e(14).11("31",e(14).1g("1e"));e(14).1g("1h","")}});e(u).18("2x, 6w").1K(17(){16 t=1W e(14).1g("1d")!=="3n"?e(14).1g("1d"):"dE";16 n=1W e(14).1g("1e")!=="3n"?e(14).1g("1e"):""+e(14).1e();6(t.1i("%")===-1){t=1c(t)}6(n.1i("%")===-1){n=1c(n)}6(t==="1B%"&&(n===0||n==="0"||n==="1B%")){e(14).1g("1e","1B%");n="1U"}e(14).26().1o("12-2x-3C").1a({1d:t,1e:n}).11({2V:t,31:n});16 r=e(14);e(14).6d("1d").6d("1e").1a({1d:"1B%",1e:"1B%"}).2h(17(){14.dF();f.g.2Z=1b;6(f.g.3f){6(f.o.2H!==1f){f.g.3f=1f}f.g.2F=1b}19{f.g.2F=f.g.2G}6(f.o.2H!==1f){f.1y()}f.g.5l=1b;e(14).4y("dv",17(){6(f.o.2H==="1U"&&f.g.2F===1b){f.27()}});f.g.2Z=1f;6(f.g.2J===1b){f.3x(f.g.1N,17(){f.g.2J=1f})}})});6(f.o.4V){f.o.30=f.o.30-1===0?f.g.2A:f.o.30-1}f.g.24=f.o.30;f.g.1N=e(u).18(".12-1r:eq("+(f.g.24-1)+")");e(u).18(".12-1r").du(\'<1n 1s="12-2c"></1n>\');6(f.o.b3){f.g.3G=e("<1n>").1o("12-dk-5H").1w(e(u).18(".12-2c"))}6(f.o.bs&&!f.g.2w){f.g.38=e("<1n>").1o("12-dl-5H").1w(e(u).18(".12-2c"));f.g.38.3U(e(\'<1n 1s="12-ct-1m"><1n 1s="12-ct-3t"><1n 1s="12-ct-ae"><1n 1s="12-ct-aa"></1n></1n></1n></1n><1n 1s="12-ct-1F"><1n 1s="12-ct-3t"><1n 1s="12-ct-ae"><1n 1s="12-ct-aa"></1n></1n></1n></1n><1n 1s="12-ct-dg"></1n>\'))}f.g.3E=e("<1n>").1a({b6:-1,1L:"1P"}).1o("12-a9-2g").1w(e(u));e("<1n>").1o("12-a9-dn").1w(f.g.3E);6(e(u).1a("3D")=="ds"){e(u).1a("3D","a8")}6(f.o.72){e(u).18(".12-2c").1a({dr:"5Z("+f.o.72+")"})}19{e(u).18(".12-2c").1a({dp:f.o.7W})}6(f.o.7W=="83"&&f.o.72==1f){e(u).18(".12-2c").1a({3a:"1P 83 !dq"})}e(u).18(".12-1r 28").1K(17(){e(14).6d("1d").6d("1e");6(f.o.49===1b&&f.o.4Z===1b){6(1W e(14).11("1h")!=="64"){e(14).11("1h",e(14).1g("1h"));16 t=f.o.3v+"../1a/dJ.cD";e(14).1g("1h",t)}}19{6(1W e(14).11("1h")==="64"){e(14).1g("1h",e(14).11("1h"));e(14).6d("11-1h")}}});e(u).18(".12-1r").4y("c9",17(t){f.g.a5=t.8p-e(14).26().4i().1m;f.g.a6=t.a7-e(14).26().4i().1p});e(u).18(".12-1r").4y("ag",17(t){16 n=e(14).26().4i().1m+f.g.a5;16 r=e(14).26().4i().1p+f.g.a6;16 i=t.8p-n;16 s=t.a7-r;e(14).18("> *:2R(.12-bg)").1K(17(){6(1W e(14).11("5n")!=="3n"&&1c(e(14).11("5n"))!==0){e(14).1a({3e:-i/1B*1c(e(14).11("5n")),3J:-s/1B*1c(e(14).11("5n"))})}})});e(u).18(".12-1r").4y("ca",17(){e(14).18("> *:2R(.12-bg)").1K(17(){6(1W e(14).11("5n")!=="3n"&&1c(e(14).11("5n"))!==0){36.2j(14,.4,{1a:{3e:0,3J:0}})}})});6(f.o.7Y){e(\'<a 1s="12-1t-1S" 2l="#" />\').2h(17(t){t.3w();e(u).33("1S")}).1w(e(u));e(\'<a 1s="12-1t-1X" 2l="#" />\').2h(17(t){t.3w();e(u).33("1X")}).1w(e(u));6(f.o.ai){e(u).18(".12-1t-1S, .12-1t-1X").1a({1L:"1P"});e(u).1T(17(){6(!f.g.8e){6(f.g.2w){e(u).18(".12-1t-1S, .12-1t-1X").1a("1L","2p")}19{e(u).18(".12-1t-1S, .12-1t-1X").1y(1b,1b).2N(2C)}}},17(){6(f.g.2w){e(u).18(".12-1t-1S, .12-1t-1X").1a("1L","1P")}19{e(u).18(".12-1t-1S, .12-1t-1X").1y(1b,1b).3Q(2C)}})}}6(f.o.6W||f.o.7a){16 i=e(\'<1n 1s="12-1q-1t-2T" />\').1w(e(u));f.g.3j=i;6(f.o.3b=="4M"){i.1o("12-ao-5m")}6(f.o.7a&&f.o.3b!="4M"){e(\'<5N 1s="12-1q-53" />\').1w(e(u).18(".12-1q-1t-2T"));6(f.o.3b=="1T"){16 s=e(\'<1n 1s="12-1H-1T"><1n 1s="12-1H-1T-2c"><1n 1s="12-1H-1T-bg"></1n><1n 1s="12-1H-1T-28"><28></1n><5N></5N></1n></1n>\').1w(e(u).18(".12-1q-53"))}2a(x=1;x<f.g.2A+1;x++){16 o=e(\'<a 2l="#" />\').1w(e(u).18(".12-1q-53")).2h(17(t){t.3w();e(u).33(e(14).5K()+1)});6(f.o.3b=="1T"){e(u).18(".12-1H-1T, .12-1H-1T-28").1a({1d:f.o.7V,1e:f.o.6l});16 a=e(u).18(".12-1H-1T");16 l=a.18("28").1a({1e:f.o.6l});16 c=e(u).18(".12-1H-1T-2c").1a({29:"2E",1L:"2p"});o.1T(17(){16 t=e(u).18(".12-1r").eq(e(14).5K());16 n;6(f.o.49===1b&&f.o.4Z===1b){6(t.18(".12-4D").1j){n=t.18(".12-4D").11("1h")}19 6(t.18(".12-3k").1j){n=t.18(".12-3k").1g("1h")}19 6(t.18(".12-bg").1j){n=t.18(".12-bg").11("1h")}19{n=f.o.3v+f.o.2v+"/7g.4S"}}19{6(t.18(".12-4D").1j){n=t.18(".12-4D").1g("1h")}19 6(t.18(".12-3k").1j){n=t.18(".12-3k").1g("1h")}19 6(t.18(".12-bg").1j){n=t.18(".12-bg").1g("1h")}19{n=f.o.3v+f.o.2v+"/7g.4S"}}e(u).18(".12-1H-1T-28").1a({1m:1c(a.1a("2f-1m")),1p:1c(a.1a("2f-1p"))});l.2O(17(){6(e(14).1d()==0){l.1a({3D:"a8",3c:"0 1U",1m:"1U"})}19{l.1a({3D:"c8",3e:-e(14).1d()/2,1m:"50%"})}}).1g("1h",n);a.1a({1L:"2p"}).1y().4x({1m:e(14).3D().1m+(e(14).1d()-a.3B())/2},8l);c.1a({1L:"1P",29:"2Y"}).1y().2N(8l)},17(){c.1y().3Q(8l,17(){a.1a({29:"2E",1L:"2p"})})})}}6(f.o.3b=="1T"){s.1w(e(u).18(".12-1q-53"))}e(u).18(".12-1q-53 a:eq("+(f.o.30-1)+")").1o("12-1t-1V")}6(f.o.6W){16 h=e(\'<a 1s="12-1t-27" 2l="#" />\').2h(17(t){t.3w();e(u).33("27")}).6i(e(u).18(".12-1q-1t-2T"));16 p=e(\'<a 1s="12-1t-1y" 2l="#" />\').2h(17(t){t.3w();e(u).33("1y")}).1w(e(u).18(".12-1q-1t-2T"))}19 6(f.o.3b!="4M"){e(\'<5N 1s="12-1t-af 12-1t-c1" />\').6i(e(u).18(".12-1q-1t-2T"));e(\'<5N 1s="12-1t-af 12-1t-cK" />\').1w(e(u).18(".12-1q-1t-2T"))}6(f.o.7i&&f.o.3b!="4M"){i.1a({1L:"1P"});e(u).1T(17(){6(!f.g.8e){6(f.g.2w){i.1a("1L","2p")}19{i.1y(1b,1b).2N(2C)}}},17(){6(f.g.2w){i.1a("1L","1P")}19{i.1y(1b,1b).3Q(2C)}})}}6(f.o.3b=="4M"){f.g.42=e(\'<1n 1s="12-1H-2T"></1n>\').1w(e(u));16 s=e(\'<1n 1s="12-1H"><1n 1s="12-1H-2c"><1n 1s="12-1H-1r-2g"><1n 1s="12-1H-1r"></1n></1n></1n></1n>\').1w(f.g.42);f.g.5m=e(u).18(".12-1H-1r-2g");6(!("75"3M 1Y)){f.g.5m.1T(17(){e(14).1o("12-1H-1r-1T")},17(){e(14).2s("12-1H-1r-1T");f.95()}).ag(17(t){16 n=1c(t.8p-e(14).4i().1m)/e(14).1d()*(e(14).1d()-e(14).18(".12-1H-1r").1d());e(14).18(".12-1H-1r").1y().1a({3e:n})})}19{f.g.5m.1o("12-cA")}e(u).18(".12-1r").1K(17(){16 t=e(14).5K()+1;16 n;6(f.o.49===1b&&f.o.4Z===1b){6(e(14).18(".12-4D").1j){n=e(14).18(".12-4D").11("1h")}19 6(e(14).18(".12-3k").1j){n=e(14).18(".12-3k").1g("1h")}19 6(e(14).18(".12-bg").1j){n=e(14).18(".12-bg").11("1h")}19{n=f.o.3v+f.o.2v+"/7g.4S"}}19{6(e(14).18(".12-4D").1j){n=e(14).18(".12-4D").1g("1h")}19 6(e(14).18(".12-3k").1j){n=e(14).18(".12-3k").1g("1h")}19 6(e(14).18(".12-bg").1j){n=e(14).18(".12-bg").1g("1h")}19{n=f.o.3v+f.o.2v+"/7g.4S"}}16 r=e(\'<a 2l="#" 1s="12-4C-\'+t+\'"><28 1h="\'+n+\'"></a>\');r.1w(e(u).18(".12-1H-1r"));6(!("75"3M 1Y)){r.1T(17(){e(14).3s().1y().6T(2C,f.o.8M/1B)},17(){6(!e(14).3s().2k("12-4C-1V")){e(14).3s().1y().6T(2C,f.o.8f/1B)}})}r.2h(17(n){n.3w();e(u).33(t)})});6(h&&p){16 d=f.g.3j=e(\'<1n 1s="12-1q-1t-2T 12-ch-5m"></1n>\').1w(e(u));h.8m().2h(17(t){t.3w();e(u).33("27")}).1w(d);p.8m().2h(17(t){t.3w();e(u).33("1y")}).1w(d)}6(f.o.7i){f.g.42.1a("1L","1P");6(d){f.g.3j=d.1a("1L")=="2p"?d:e(u).18(".12-ao-5m");f.g.3j.1a("1L","1P")}e(u).1T(17(){e(u).1o("12-1T");6(!f.g.8e){6(f.g.2w){f.g.42.1a("1L","2p");6(f.g.3j){f.g.3j.1a("1L","2p")}}19{f.g.42.1y(1b,1b).2N(2C);6(f.g.3j){f.g.3j.1y(1b,1b).2N(2C)}}}},17(){e(u).2s("12-1T");6(f.g.2w){f.g.42.1a("1L","1P");6(f.g.3j){f.g.3j.1a("1L","1P")}}19{f.g.42.1y(1b,1b).3Q(2C);6(f.g.3j){f.g.3j.1y(1b,1b).3Q(2C)}}})}}f.g.3X=e(\'<1n 1s="12-3X"></1n>\').1w(e(u));6(f.g.3X.1a("1L")=="2p"&&!f.g.3X.18("28").1j){f.g.7u=17(){f.g.3X.1a({1L:"1P",29:"2Y"}).2N(4o,17(){f.g.7u=1f})};f.g.5o=e("<28>").1g("1h",f.o.3v+f.o.2v+"/3X.4S").1w(f.g.3X);f.g.9W=1W 1c(e(u).1a("2f-1q"))=="4d"?1c(e(u).1a("2f-1q")):0}f.8L();6(f.o.aj&&e(u).18(".12-1r").1j>1){e("47").7h("cF",17(e){6(!f.g.2Z&&!f.g.4A){6(e.ap==37){f.o.6z(f.g);f.1S("7z")}19 6(e.ap==39){f.o.6t(f.g);f.1X("7z")}}})}6("75"3M 1Y&&e(u).18(".12-1r").1j>1&&f.o.bG){e(u).18(".12-2c").7h("cm",17(e){16 t=e.5v?e.5v:e.aq.5v;6(t.1j==1){f.g.7x=f.g.69=t[0].al}});e(u).18(".12-2c").7h("cn",17(e){16 t=e.5v?e.5v:e.aq.5v;6(t.1j==1){f.g.69=t[0].al}6(1D.4e(f.g.7x-f.g.69)>45){e.3w()}});e(u).18(".12-2c").7h("co",17(t){6(1D.4e(f.g.7x-f.g.69)>45){6(f.g.7x-f.g.69>0){f.o.6t(f.g);e(u).33("1X")}19{f.o.6z(f.g);e(u).33("1S")}}})}6(f.o.bK==1b&&e(u).18(".12-1r").1j>1){e(u).18(".12-2c").1T(17(){f.o.aG(f.g);6(f.g.2G){f.g.3f=1b;f.1y();6(f.g.3G){f.g.3G.1y()}6(f.g.38){6(f.g.2Q){f.g.2Q.5M()}}f.g.40=(1I 5e).5f()}},17(){6(f.g.3f==1b){f.27();f.g.3f=1f}})}f.8O();6(f.o.1v){f.g.1v=e("<28>").1o("12-cq").1w(e(u)).1g("1O",f.o.b8).1a({29:"2E",1L:"cr"}).2O(17(){16 t=0;6(!f.g.1v){t=1Q}2i(17(){f.g.1v.11("2V",f.g.1v.1d());f.g.1v.11("31",f.g.1v.1e());6(f.g.1v.1a("1m")!="1U"){f.g.1v.11("4t",f.g.1v[0].1O.1m)}6(f.g.1v.1a("1F")!="1U"){f.g.1v.11("63",f.g.1v[0].1O.1F)}6(f.g.1v.1a("1p")!="1U"){f.g.1v.11("4s",f.g.1v[0].1O.1p)}6(f.g.1v.1a("1q")!="1U"){f.g.1v.11("6m",f.g.1v[0].1O.1q)}6(f.o.7D!=1f){e("<a>").1w(e(u)).1g("2l",f.o.7D).1g("cU",f.o.b5).1a({e5:"1P",f9:"1P"}).3U(f.g.1v)}f.g.1v.1a({1L:"1P",29:"2Y"});f.8P()},t)}).1g("1h",f.o.1v)}e(1Y).2J(17(){f.g.2J=1b;6(!f.g.2Z){f.3x(f.g.1N,17(){6(f.g.2z){f.g.2z.5F()}f.g.2J=1f});6(f.g.1v){f.8P()}}});f.g.9I=1b;6(f.o.4V==1b){6(f.o.4k){f.g.2G=1b;e(u).18(".12-1t-27").1o("12-1t-27-1V")}19{e(u).18(".12-1t-1y").1o("12-1t-1y-1V")}f.1X()}19{f.49(f.g.1N,17(){f.g.1N.2N(f.o.8s,17(){f.g.4A=1f;e(14).1o("12-1V");6(f.o.5W){e(14).1M(e(14).11("5a")+25).f8(17(){e(14).18(".12-3k").2h();e(14).18("2x, 6w").1K(17(){6(1W e(14)[0].6u!==0){e(14)[0].6u=0}e(14).2h()});e(14).8V()})}f.g.1N.18(\' > *[1s*="12-l"]\').1K(17(){16 t=e(14);6((!t.2k("12-2x-3C")||t.2k("12-2x-3C")&&f.o.5W===1f)&&t.11("4N")>0){t.11("4z",2i(17(){f.8B(t)},t.11("4N")))}})});f.94(f.g.24);6(f.o.4k){f.g.4A=1f;f.27()}19{e(u).18(".12-1t-1y").1o("12-1t-1y-1V")}})}f.o.bv(e(u))};f.27=17(){6(f.g.2G){6(f.g.2o=="1S"&&f.o.8t){f.1S()}19{f.1X()}}19{f.g.2G=1b;6(!f.g.2Z&&!f.g.4A){f.5H()}}e(u).18(".12-1t-27").1o("12-1t-27-1V");e(u).18(".12-1t-1y").2s("12-1t-1y-1V")};f.5H=17(){6(e(u).18(".12-1V").11("12")){16 t=f.5b.6Z}19{16 t=f.o.6Z}16 n=e(u).18(".12-1V").11("5X")?1c(e(u).18(".12-1V").11("5X")):t;6(!f.o.4V&&!e(u).18(".12-1V").11("5X")){16 r=e(u).18(".12-1r:eq("+(f.o.30-1)+")").11("5X");n=r?r:t}2r(f.g.4g);6(f.g.40){6(!f.g.4B){f.g.4B=(1I 5e).5f()}6(f.g.4B>f.g.40){f.g.40=(1I 5e).5f()}6(!f.g.3N){f.g.3N=n}f.g.3N-=f.g.40-f.g.4B;f.g.40=1f;f.g.4B=(1I 5e).5f()}19{f.g.3N=n;f.g.4B=(1I 5e).5f()}f.g.3N=1c(f.g.3N);f.g.4g=2i(17(){f.g.4B=f.g.40=f.g.3N=1f;f.27()},f.g.3N);6(f.g.3G){f.g.3G.4x({1d:f.g.1A()},f.g.3N,"7S",17(){e(14).1a({1d:0})})}6(f.g.38){16 i=f.g.38.18(".12-ct-1F .12-ct-3t");16 s=f.g.38.18(".12-ct-1m .12-ct-3t");6(f.g.38.1a("1L")=="1P"){i.1a({3t:0});s.1a({3t:0});f.g.38.2N(9d)}6(!f.g.2Q){f.g.2Q=1I bH;f.g.2Q.a4(36.6N(i[0],n/a3,{3q:0},{4c:7R.7Q,3q:6B,f7:17(){f.g.2Q=1f}}));f.g.2Q.a4(36.6N(s[0],n/a3,{3q:0},{4c:7R.7Q,3q:6B}))}19{f.g.2Q.f6()}}};f.1y=17(){f.g.40=(1I 5e).5f();6(f.g.3G){f.g.3G.1y()}6(f.g.38){6(f.g.2Q){f.g.2Q.5M()}}6(!f.g.3f&&!f.g.2F){e(u).18(".12-1t-1y").1o("12-1t-1y-1V");e(u).18(".12-1t-27").2s("12-1t-27-1V")}2r(f.g.4g);f.g.2G=1f};f.9N=17(){2r(f.g.4g);f.g.2G=1f;2r(f.g.9O);2r(f.g.9P);2r(f.g.9Q);2r(f.g.9M);2r(f.g.aP);6(f.g.3G){f.g.3G.1y()}6(f.g.38){6(f.g.2Q){f.g.2Q.5M()}}e(u).18("*").1y(1b,1f).8V();e(u).18(".12-1r >").1K(17(){6(e(14).11("3R")){e(14).11("3R").5M()}});6(!f.g.3f&&!f.g.2F){e(u).18(".12-1t-1y").1o("12-1t-1y-1V");e(u).18(".12-1t-27").2s("12-1t-27-1V")}};f.ff=17(){e(u).18("*").1y();2r(f.g.4g);f.4Q(f.g.24,f.g.2o)};f.9L=17(t){6(e.6h(t.23())=="bh"||e.6h(t.23())=="7S"){1R t.23()}19{1R t.2q("7U","bb").2q("7E","b4").2q("7G","ba").2q("fe","f4").2q("f3","eT").2q("eU","eS").2q("eR","eO").2q("eP","eQ").2q("eV","eW").2q("f1","f2").2q("dK","eZ").2q("6k","eX").2q("eY","fl")}};f.1S=17(e){6(f.g.24<2){f.g.4j+=1}6(f.g.4j>f.o.4w&&f.o.4w>0&&!e){f.g.4j=0;f.1y();6(f.o.7r==1f){f.o.4w=0}}19{16 t=f.g.24<2?f.g.2A:f.g.24-1;f.g.2o="1S";f.4Q(t,f.g.2o)}};f.1X=17(e){6(!f.o.7A){6(!(f.g.24<f.g.2A)){f.g.4j+=1}6(f.g.4j>f.o.4w&&f.o.4w>0&&!e){f.g.4j=0;f.1y();6(f.o.7r==1f){f.o.4w=0}}19{16 t=f.g.24<f.g.2A?f.g.24+1:1;f.g.2o="1X";f.4Q(t,f.g.2o)}}19 6(!e){16 t=f.g.24;16 n=17(){t=1D.2b(1D.2m()*f.g.2A)+1;6(t==f.g.24){n()}19{f.g.2o="1X";f.4Q(t,f.g.2o)}};n()}19 6(e){16 t=f.g.24<f.g.2A?f.g.24+1:1;f.g.2o="1X";f.4Q(t,f.g.2o)}};f.4Q=17(t,n){f.g.4B=f.g.40=f.g.3N=1f;6(f.g.3G){f.g.3G.1y().1M(2C).4x({1d:0},fM)}6(f.g.38){f.g.38.3Q(4o);6(f.g.2Q){f.g.2Q.67().2u(.35)}}6(f.g.5l==1b){f.g.5l=1f;f.g.2G=f.g.2F;f.g.1N.18(\'21[1h*="4L.43"], 21[1h*="5A.be"], 21[1h*="61.5j"]\').1K(17(){e(14).26().18(".12-5L").2N(f.g.v.fi,17(){e(14).26().18("21").1g("1h","")})});f.g.1N.18("2x, 6w").1K(17(){14.5M()})}e(u).18(\'21[1h*="4L.43"], 21[1h*="5A.be"], 21[1h*="61.5j"]\').1K(17(){2r(e(14).11("7c"))});2r(f.g.4g);f.g.6b=t;f.g.1u=e(u).18(".12-1r:eq("+(f.g.6b-1)+")");6(!n){6(f.g.24<f.g.6b){f.g.2o="1X"}19{f.g.2o="1S"}}16 r=0;6(e(u).18(\'21[1h*="4L.43"], 21[1h*="5A.be"], 21[1h*="61.5j"]\').1j>0){r=f.g.v.fi}f.49(f.g.1u,17(){f.4x()})};f.49=17(t,n){f.g.4A=1b;6(f.g.9I){e(u).1a({29:"2Y"})}6(f.o.49){16 r=[];16 i=0;6(t.1a("3a-2S")!="1P"&&t.1a("3a-2S").1i("5Z")!=-1&&!t.2k("12-3y")&&!t.2k("12-2R-3y")){16 s=t.1a("3a-2S");s=s.3S(/5Z\\((.*)\\)/)[1].2q(/"/9J,"");r[r.1j]=[s,t]}t.18("28:2R(.12-3y, .12-2R-3y)").1K(17(){6(f.o.4Z===1b){e(14).1g("1h",e(14).11("1h"))}r[r.1j]=[e(14).1g("1h"),e(14)]});t.18("*").1K(17(){6(e(14).1a("3a-2S")!="1P"&&e(14).1a("3a-2S").1i("5Z")!=-1&&!e(14).2k("12-3y")&&!e(14).2k("12-2R-3y")){16 t=e(14).1a("3a-2S");t=t.3S(/5Z\\((.*)\\)/)[1].2q(/"/9J,"");r[r.1j]=[t,e(14)]}});6(r.1j==0){e(".12-1H-2T, .12-1t-1X, .12-1t-1S, .12-1q-1t-2T").1a({29:"2Y"});f.3x(t,n)}19{6(f.g.2w){f.g.3E.1a("1L","2p")}19{f.g.3E.1M(bZ).2N(2C)}16 o=17(){f.g.3E.1y(1b,1b).1a({1L:"1P"});e(".12-1H-2T, .12-1t-1X, .12-1t-1S, .12-1q-1t-2T").1a({29:"2Y"});6(3Y.44.1i("fL/7")!==-1||f.g.2w){2i(17(){f.3x(t,n)},50)}19{f.3x(t,n)}};2a(x=0;x<r.1j;x++){e("<28>").11("el",r[x]).2O(17(){e(14).11("el")[1].1o("12-3y");6(++i==r.1j){o()}}).48(17(){16 t=e(14).11("el")[0].9F(e(14).11("el")[0].am("/")+1,e(14).11("el")[0].1j);6(1Y.4J){4J.fD(\'2t 48:\\r\\n\\r\\6D 6M 55 22 6L 2W 22 2S 3V 3a 2S "\'+t+\'" 3r 6O 2j a 6K 4X 4U 4m 6G be 2X. 4W 6R 22 6S 2W 4T 52 77 76 3M 22 6V.\')}19{ar(\'2t 48:\\r\\n\\r\\6D 6M 55 22 6L 2W 22 2S 3V 3a 2S "\'+t+\'" 3r 6O 2j a 6K 4X 4U 4m 6G be 2X. 4W 6R 22 6S 2W 4T 52 77 76 3M 22 6V.\')}e(14).1o("12-2R-3y");6(++i==r.1j){o()}}).1g("1h",r[x][0])}}}19{e(".12-1H-2T, .12-1t-1X, .12-1t-1S, .12-1q-1t-2T").1a({29:"2Y"});f.3x(t,n)}};f.3x=17(t,n){t.1a({29:"2E",1L:"2p"});6(f.g.7u){f.g.7u()}f.8O();6(f.o.3b=="4M"){f.9R()}t.3s().1K(17(){16 t=e(14);16 n=t.11("4t")?t.11("4t"):"0";16 r=t.11("4s")?t.11("4s"):"0";6(t.3r("a")&&t.3s().1j>0){t.1a({1L:"2p"});t=t.3s()}16 i="1U";16 s="1U";6(t.11("2V")){6(1W t.11("2V")=="4d"){i=1c(t.11("2V"))*f.g.1z}19 6(t.11("2V").1i("%")!=-1){i=t.11("2V")}}6(t.11("31")){6(1W t.11("31")=="4d"){s=1c(t.11("31"))*f.g.1z}19 6(t.11("31").1i("%")!=-1){s=t.11("31")}}16 o=t.11("8C")?1c(t.11("8C"))*f.g.1z:0;16 a=t.11("8D")?1c(t.11("8D"))*f.g.1z:0;16 l=t.11("8X")?1c(t.11("8X"))*f.g.1z:0;16 c=t.11("8G")?1c(t.11("8G"))*f.g.1z:0;16 h=t.11("7e")?1c(t.11("7e"))*f.g.1z:0;16 p=t.11("7j")?1c(t.11("7j"))*f.g.1z:0;16 d=t.11("7k")?1c(t.11("7k"))*f.g.1z:0;16 v=t.11("7l")?1c(t.11("7l"))*f.g.1z:0;16 m=t.11("9S");16 g=t.11("9Z");6(f.g.41||f.o.4n>0){6(t.3r("28")&&!t.2k("12-bg")&&t.1g("1h")){t.1a({1d:"1U",1e:"1U"});6((i==0||i=="1U")&&1W s=="4d"&&s!=0){i=s/t.1e()*t.1d()}6((s==0||s=="1U")&&1W i=="4d"&&i!=0){s=i/t.1d()*t.1e()}6(i=="1U"){i=t.1d()*f.g.1z}6(s=="1U"){s=t.1e()*f.g.1z}t.1a({1d:i,1e:s})}6(!t.3r("28")){t.1a({1d:i,1e:s,"a0-a1":1c(m)*f.g.1z+"1E","a2-1e":1c(g)*f.g.1z+"1E"})}6(t.3r("1n")&&t.18("21").11("4b")){16 y=t.18("21");y.1g("1d",1c(y.11("2V"))*f.g.1z).1g("1e",1c(y.11("31"))*f.g.1z);t.1a({1d:1c(y.11("2V"))*f.g.1z,1e:1c(y.11("31"))*f.g.1z})}t.1a({2f:l+"1E "+a+"1E "+c+"1E "+o+"1E ",9Y:h+"1E",9X:p+"1E",9T:d+"1E",9U:v+"1E"})}6(!t.2k("12-bg")){16 b=t;6(t.26().3r("a")){t=t.26()}16 w=0;6(f.o.7m){w=f.o.7m>0?(f.g.1A()-f.o.7m)/2:0}19 6(f.o.8T){w=f.o.8T>0?(f.g.1A()-f.o.8T)/2:0}w=w<0?0:w;6(n.1i("%")!=-1){t.1a({1m:f.g.1A()/1B*1c(n)-b.1d()/2-o-h})}19 6(w>0||f.g.41||f.o.4n>0){t.1a({1m:w+1c(n)*f.g.1z})}6(r.1i("%")!=-1){t.1a({1p:f.g.1G()/1B*1c(r)-b.1e()/2-l-d})}19 6(f.g.41||f.o.4n>0){t.1a({1p:1c(r)*f.g.1z})}}19{16 E=e(u).18(".12-2c");t.1a({1d:"1U",1e:"1U"});i=t.1d();s=t.1e();16 S=f.g.1z;6(f.g.2n.1i("%")!=-1){6(f.g.1A()>i){S=f.g.1A()/i;6(f.g.1G()>s*S){S=f.g.1G()/s}}19 6(f.g.1G()>s){S=f.g.1G()/s;6(f.g.1A()>i*S){S=f.g.1A()/i}}}t.1a({1d:i*S,1e:s*S,3e:E.1d()/2-i*S/2,3J:E.1e()/2-s*S/2})}});t.1a({1L:"1P",29:"2Y"});f.8L();n();e(14).8V()};f.8L=17(){6(f.g.5o){16 e=17(){6(f.g.5o.1e()>0){6(f.g.9W>0){f.g.3X.1a({1e:f.g.5o.1e()/2})}19{f.g.3X.1a({1e:f.g.5o.1e(),3J:-f.g.5o.1e()/2})}}19{2i(17(){e()},50)}};e()}};f.8O=17(){6(f.o.4n>0){6(e(1Y).1d()<f.o.4n){f.g.41=1b;f.g.2n=f.o.4n+"1E"}19{f.g.41=1f;f.g.2n=f.g.8N;f.g.1z=1}}6(f.g.41){16 t=e(u).26();6(f.o.91===1b){e(u).1a({1d:"1B%",1e:e(1Y).1e()})}19{e(u).1a({1d:t.1d()-1c(e(u).1a("2f-1m"))-1c(e(u).1a("2f-1F"))});f.g.1z=e(u).1d()/1c(f.g.2n);e(u).1a({1e:f.g.1z*1c(f.g.3z)})}}19{f.g.1z=1;e(u).1a({1d:f.g.2n,1e:f.g.3z})}6(e(u).3W(".12-3T-3P-2g").1j){e(u).3W(".12-3T-3P-7F").1a({1e:e(u).3u(1b)});e(u).3W(".12-3T-3P-2g").1a({1e:e(u).3u(1b)});e(u).3W(".12-3T-3P-7F").1a({1d:e(1Y).1d(),1m:-e(u).3W(".12-3T-3P-2g").4i().1m});6(f.g.2n.1i("%")!=-1){16 n=1c(f.g.2n);16 r=e("47").1d()/1B*n-(e(u).3B()-e(u).1d());e(u).1d(r)}}e(u).18(".12-2c, .12-1x-2g").1a({1d:f.g.1A(),1e:f.g.1G()});6(f.g.1N&&f.g.1u){f.g.1N.1a({1d:f.g.1A(),1e:f.g.1G()});f.g.1u.1a({1d:f.g.1A(),1e:f.g.1G()})}19{e(u).18(".12-1r").1a({1d:f.g.1A(),1e:f.g.1G()})}};f.8P=17(){f.g.1v.1a({1d:f.g.1v.11("2V")*f.g.1z,1e:f.g.1v.11("31")*f.g.1z});6(f.g.2w){f.g.1v.1a("1L","2p")}19{f.g.1v.2N(2C)}16 t=6x=6Y=6X="1U";6(f.g.1v.11("4t")&&f.g.1v.11("4t").1i("%")!=-1){t=f.g.1A()/1B*1c(f.g.1v.11("4t"))-f.g.1v.1d()/2+1c(e(u).1a("2f-1m"))}19{t=1c(f.g.1v.11("4t"))*f.g.1z}6(f.g.1v.11("63")&&f.g.1v.11("63").1i("%")!=-1){6x=f.g.1A()/1B*1c(f.g.1v.11("63"))-f.g.1v.1d()/2+1c(e(u).1a("2f-1F"))}19{6x=1c(f.g.1v.11("63"))*f.g.1z}6(f.g.1v.11("4s")&&f.g.1v.11("4s").1i("%")!=-1){6Y=f.g.1G()/1B*1c(f.g.1v.11("4s"))-f.g.1v.1e()/2+1c(e(u).1a("2f-1p"))}19{6Y=1c(f.g.1v.11("4s"))*f.g.1z}6(f.g.1v.11("6m")&&f.g.1v.11("6m").1i("%")!=-1){6X=f.g.1G()/1B*1c(f.g.1v.11("6m"))-f.g.1v.1e()/2+1c(e(u).1a("2f-1q"))}19{6X=1c(f.g.1v.11("6m"))*f.g.1z}f.g.1v.1a({1m:t,1F:6x,1p:6Y,1q:6X})};f.9R=17(){f.92("4y");16 t=f.g.2n.1i("%")==-1?1c(f.g.2n):f.g.1A();e(u).18(".12-1H-1r a").1a({1d:1c(f.o.7V*f.g.1z),1e:1c(f.o.6l*f.g.1z)});e(u).18(".12-1H-1r a:4p").1a({3c:0});e(u).18(".12-1H-1r").1a({1e:1c(f.o.6l*f.g.1z)});16 n=e(u).18(".12-1H");16 r=f.o.7f.1i("%")==-1?1c(f.o.7f):1c(t/1B*1c(f.o.7f));n.1a({1d:r*1D.2b(f.g.1z*1B)/1B});6(n.1d()>e(u).18(".12-1H-1r").1d()){n.1a({1d:e(u).18(".12-1H-1r").1d()})}f.92("9H")};f.94=17(t){16 n=t?t:f.g.6b;e(u).18(".12-1H-1r a:2R(.12-4C-"+n+")").3s().1K(17(){e(14).2s("12-4C-1V").1y().6T(8U,f.o.8f/1B)});e(u).18(".12-1H-1r a.12-4C-"+n).3s().1o("12-4C-1V").1y().6T(8U,f.o.8M/1B)};f.95=17(){6(!e(u).18(".12-1H-1r-2g").2k("12-1H-1r-1T")){16 t=e(u).18(".12-4C-1V").1j?e(u).18(".12-4C-1V").26():1f;6(t){16 n=t.3D().1m+t.1d()/2;16 r=e(u).18(".12-1H-1r-2g").1d()/2-n;r=r<e(u).18(".12-1H-1r-2g").1d()-e(u).18(".12-1H-1r").1d()?e(u).18(".12-1H-1r-2g").1d()-e(u).18(".12-1H-1r").1d():r;r=r>0?0:r;e(u).18(".12-1H-1r").4x({3e:r},e0)}}};f.92=17(t){6(f.o.7i&&!e(u).2k("12-1T")){2y(t){1l"4y":f.g.42.1a({29:"2E",1L:"2p"});1k;1l"9H":f.g.42.1a({29:"2Y",1L:"1P"});1k}}};f.4x=17(){6(e(u).18(".12-1r").1j>1){f.g.2Z=1b}f.g.4A=1f;2r(f.g.4g);2r(f.g.dQ);f.g.ah=f.g.1N;f.o.av(f.g);6(f.o.3b=="4M"){f.94();6(!("75"3M 1Y)){f.95()}}f.g.1u.1o("12-9m");16 t=96=6I=7M=6F=7O=6C=7H=73=dL=6H=dM="1U";16 a=7L=f.g.1A();16 l=7J=f.g.1G();16 c=f.g.2o=="1S"?f.g.1N:f.g.1u;16 h=c.11("3A")?c.11("3A"):f.o.9b;16 p=f.g.9a[f.g.2o][h];6(p=="1m"||p=="1F"){a=6I=7L=6C=0;6H=0}6(p=="1p"||p=="1q"){l=t=7J=6F=0;73=0}2y(p){1l"1m":96=6F=0;73=-f.g.1A();1k;1l"1F":t=7O=0;73=f.g.1A();1k;1l"1p":7M=6C=0;6H=-f.g.1G();1k;1l"1q":6I=7H=0;6H=f.g.1G();1k}f.g.1N.1a({1m:t,1F:96,1p:6I,1q:7M});f.g.1u.1a({1d:7L,1e:7J,1m:6F,1F:7O,1p:6C,1q:7H});16 d=f.g.1N.11("5P")?1c(f.g.1N.11("5P")):f.o.6U;16 v=f.g.1N.11("4H")?1c(f.g.1N.11("4H")):f.o.51;16 m=f.g.1N.11("4P")?f.g.1N.11("4P"):f.o.54;16 g=f.g.1u.11("5a")?1c(f.g.1u.11("5a")):f.o.5J;16 y=f.g.1u.11("5Q")?1c(f.g.1u.11("5Q")):f.o.6j;6(y===0){y=1}16 b=f.g.1u.11("5S")?f.g.1u.11("5S"):f.o.5Y;16 w=17(){f.g.1N.1M(d+v/15).4x({1d:a,1e:l},v,m,17(){E()})};16 E=17(){f.g.ah.18(\' > *[1s*="12-l"]\').1K(17(){6(e(14).11("3R")){e(14).11("3R").8z()}e(14).1a({ee:"1P"})});f.g.1N=f.g.1u;f.g.ef=f.g.24;f.g.24=f.g.6b;f.o.8J(f.g);6(f.o.49&&f.o.4Z){16 t=f.g.24==f.g.2A?1:f.g.24+1;e(u).18(".12-1r").eq(t-1).18("28:2R(.12-3y)").1K(17(){e(14).2O(17(){e(14).1o("12-3y")}).48(17(){16 t=e(14).11("1h").9F(e(14).11("1h").am("/")+1,e(14).11("1h").1j);6(1Y.4J){4J(\'2t 48:\\r\\n\\r\\6D 6M 55 22 6L 2W 22 2S 3V 3a 2S "\'+t+\'" 3r 6O 2j a 6K 4X 4U 4m 6G be 2X. 4W 6R 22 6S 2W 4T 52 77 76 3M 22 6V.\')}19{ar(\'2t 48:\\r\\n\\r\\6D 6M 55 22 6L 2W 22 2S 3V 3a 2S "\'+t+\'" 3r 6O 2j a 6K 4X 4U 4m 6G be 2X. 4W 6R 22 6S 2W 4T 52 77 76 3M 22 6V.\')}e(14).1o("12-2R-3y")}).1g("1h",e(14).11("1h"))})}e(u).18(".12-1r").2s("12-1V");e(u).18(".12-1r:eq("+(f.g.24-1)+")").1o("12-1V").2s("12-9m");e(u).18(".12-1q-53 a").2s("12-1t-1V");e(u).18(".12-1q-53 a:eq("+(f.g.24-1)+")").1o("12-1t-1V");6(f.g.2G){f.5H()}f.g.2Z=1f;6(f.g.2J==1b){f.3x(f.g.1N,17(){f.g.2J=1f})}};16 S=17(t){f.g.1N.18(\' > *[1s*="12-l"]\').1K(17(){6(!e(14).11("2I")){f.5O(e(14))}e(14).2s("12-8E");16 r=e(14).11("3A")?e(14).11("3A"):p;16 i,s;2y(r){1l"1m":i=-f.g.1A();s=0;1k;1l"1F":i=f.g.1A();s=0;1k;1l"1p":s=-f.g.1G();i=0;1k;1l"1q":s=f.g.1G();i=0;1k;1l"3F":s=0;i=0;1k}6(e(14).11("2I")==="1I"){16 o="1I"}19{16 o=e(14).11("5T")?e(14).11("5T"):1f}2y(o){1l"1m":i=f.g.1A();s=0;1k;1l"1F":i=-f.g.1A();s=0;1k;1l"1p":s=f.g.1G();i=0;1k;1l"1q":s=-f.g.1G();i=0;1k;1l"3F":s=0;i=0;1k;1l"1I":6(e(14).11("3g")){6(e(14).11("3g")==="1m"){i=f.g.1A()}19 6(e(14).11("3g")==="1F"){i=-f.g.1A()}19{i=-1c(e(14).11("3g"))}}19{i=-f.1x.7K}6(e(14).11("3p")){6(e(14).11("3p")==="1p"){s=f.g.1G()}19 6(e(14).11("3p")==="1q"){s=-f.g.1G()}19{s=-1c(e(14).11("3p"))}}19{s=-f.1x.7T}1k}16 u=5z=5w=4r=5t=5q=3o=3m="1P";u=e(14).11("5I")?e(14).11("5I"):f.1x.8r;5z=e(14).11("78")?e(14).11("78"):f.1x.8h;5w=e(14).11("6q")?e(14).11("6q"):f.1x.8k;4r=e(14).11("5U")?e(14).11("5U"):f.1x.84;5t=e(14).11("6o")?e(14).11("6o"):f.1x.98;5q=e(14).11("6n")?e(14).11("6n"):f.1x.86;6(4r===1){3o=e(14).11("6A")?e(14).11("6A"):f.1x.8u;3m=e(14).11("6r")?e(14).11("6r"):f.1x.8F}19{3o=3m=4r}16 a=e(14).11("6p")?e(14).11("6p").1J(" "):f.1x.7X;2a(16 l=0;l<a.1j;l++){6(a[l].1i("%")===-1&&a[l].1i("1m")!==-1&&a[l].1i("1F")!==-1&&a[l].1i("1p")!==-1&&a[l].1i("1q")!==-1){a[l]=""+1c(a[l])*f.g.1z+"1E"}}16 c=a.8I(" ");16 h=e(14).11("6v")?e(14).11("6v"):f.1x.8n;16 d=1c(e(14).1a("1m"));16 v=1c(e(14).1a("1p"));16 m=1c(e(14).1g("1s").1J("12-l")[1]);16 g=e(14).3B()>e(14).3u()?e(14).3B():e(14).3u();16 y=1c(u)===0?e(14).3B():g;16 b=1c(u)===0?e(14).3u():g;6(m===-1&&o!=="1I"||e(14).11("3g")==="1m"||e(14).11("3g")==="1F"){6(i<0){i=-(f.g.1A()-d+(3o/2-.5)*y+1B)}19 6(i>0){i=d+(3o/2+.5)*y+1B}}19{i=i*f.g.1z}6(m===-1&&o!=="1I"||e(14).11("3p")==="1p"||e(14).11("3p")==="1q"){6(s<0){s=-(f.g.1G()-v+(3m/2-.5)*b+1B)}19 6(s>0){s=v+(3m/2+.5)*b+1B}}19{s=s*f.g.1z}6(m===-1||o==="1I"){16 w=1}19{16 E=f.g.1N.11("6s")?1c(f.g.1N.11("6s")):f.o.7I;16 w=m*E}6(e(14).11("2I")==="1I"){16 S=f.1x.6U;16 x=f.1x.51;16 T=f.1x.54}19{16 S=f.o.6U;16 x=f.o.51;16 T=f.o.54}16 N=e(14).11("5P")?1c(e(14).11("5P")):S;16 C=e(14).11("4H")?1c(e(14).11("4H")):x;6(C===0){C=1}16 k=e(14).11("4P")?e(14).11("4P"):T;6(t){N=0;C=t}6(e(14).11("4z")){2r(e(14).11("4z"))}16 L={29:"2E"};16 A=e(14);16 O={3q:u,4G:5z,4I:5w,79:5t,7v:5q,5r:3o,5u:3m,x:-i*w,y:-s*w,1M:N/1Q,4c:n(k),8K:17(){A.1a(L)}};6(o=="3F"||!o&&r==="3F"||e(14).11("aH")!=="1f"&&e(14).11("2I")==="1I"){O["2M"]=0;L["2M"]=e(14).11("7d")}6(e(14).11("3R")){e(14).11("3R").8z()}36.8x(e(14)[0],{8w:c,8y:h});e(14).11("3R",36.2j(e(14)[0],C/1Q,O))})};16 x=17(){f.g.1u.1M(d+g).4x({1d:f.g.1A(),1e:f.g.1G()},y,b)};16 T=17(){6(f.g.3h){d=0}6(1W f.o.9n==="17"){f.o.9n(f.g,d+g)}f.g.1u.18(\' > *[1s*="12-l"]\').1K(17(){6(!e(14).11("2I")){f.5O(e(14))}6(e(14).11("2I")==="1I"){16 t="1I"}19{16 t=e(14).11("3A")?e(14).11("3A"):p}16 r,i;2y(t){1l"1m":r=-f.g.1A();i=0;1k;1l"1F":r=f.g.1A();i=0;1k;1l"1p":i=-f.g.1G();r=0;1k;1l"1q":i=f.g.1G();r=0;1k;1l"3F":i=0;r=0;1k;1l"1I":6(e(14).11("58")){6(e(14).11("58")==="1m"){r=-f.g.1A()}19 6(e(14).11("58")==="1F"){r=f.g.1A()}19{r=1c(e(14).11("58"))}}19{r=f.1x.aw}6(e(14).11("59")){6(e(14).11("59")==="1p"){i=-f.g.1G()}19 6(e(14).11("59")==="1q"){i=f.g.1G()}19{i=1c(e(14).11("59"))}}19{i=f.1x.ay}1k}16 s=8H=8v=6y=8R=8S=5y=5s="1P";s=e(14).11("8W")?e(14).11("8W"):f.1x.aA;8H=e(14).11("9y")?e(14).11("9y"):f.1x.az;8v=e(14).11("9o")?e(14).11("9o"):f.1x.aK;6y=e(14).11("9e")?e(14).11("9e"):f.1x.aM;8R=e(14).11("9E")?e(14).11("9E"):f.1x.aW;8S=e(14).11("9B")?e(14).11("9B"):f.1x.aV;6(6y===1){5y=e(14).11("9g")?e(14).11("9g"):f.1x.aY;5s=e(14).11("9p")?e(14).11("9p"):f.1x.aZ}19{5y=5s=6y}16 o=e(14).11("9i")?e(14).11("9i").1J(" "):f.1x.aR;2a(16 u=0;u<o.1j;u++){6(o[u].1i("%")===-1&&o[u].1i("1m")!==-1&&o[u].1i("1F")!==-1&&o[u].1i("1p")!==-1&&o[u].1i("1q")!==-1){o[u]=""+1c(o[u])*f.g.1z+"1E"}}16 a=o.8I(" ");16 l=e(14).11("9C")?e(14).11("9C"):f.1x.bB;16 c=1c(e(14).1a("1m"));16 h=1c(e(14).1a("1p"));16 d=1c(e(14).1g("1s").1J("12-l")[1]);6(e(14)[0].1O.1d.1i("%")!==-1){e(14).1a({1d:f.g.1A()/1B*1c(e(14)[0].1O.1d)})}16 v=e(14).3B()>e(14).3u()?e(14).3B():e(14).3u();16 m=1c(s)===0?e(14).3B():v;16 g=1c(s)===0?e(14).3u():v;6(d===-1&&t!=="1I"||e(14).11("58")==="1m"||e(14).11("58")==="1F"){6(r<0){r=-(c+(5y/2+.5)*m+1B)}19 6(r>0){r=f.g.1A()-c+(5y/2-.5)*m+1B}}19{r=r*f.g.1z}6(d===-1&&t!=="1I"||e(14).11("59")==="1p"||e(14).11("59")==="1q"){6(i<0){i=-(h+(5s/2+.5)*g+1B)}19 6(i>0){i=f.g.1G()-h+(5s/2-.5)*g+1B}}19{i=i*f.g.1z}6(d===-1||t==="1I"){16 y=1}19{16 b=f.g.1u.11("9k")?1c(f.g.1u.11("9k")):f.o.aN;16 y=d*b}6(e(14).11("2I")==="1I"){16 w=f.1x.5J;16 E=f.1x.6j;16 S=f.1x.5Y}19{16 w=f.o.5J;16 E=f.o.6j;16 S=f.o.5Y}16 x=e(14).11("5a")?1c(e(14).11("5a")):w;16 T=e(14).11("5Q")?1c(e(14).11("5Q")):E;16 N=e(14).11("5S")?e(14).11("5S"):S;16 C=e(14);16 k=17(){6(C.2k("12-2x-3C")){C.1o("12-8E")}6(f.o.5W==1b){C.18(".12-3k").2h();C.18("2x, 6w").1K(17(){6(1W e(14)[0].6u!==0){e(14)[0].6u=0}e(14).2h()})}6((!C.2k("12-2x-3C")||C.2k("12-2x-3C")&&f.o.5W===1f)&&C.11("4N")>0){C.11("4z",2i(17(){f.8B(C)},C.11("4N")))}};e(14).1a({3e:0,3J:0});16 L={5r:5y,5u:5s,79:8R,7v:8S,3q:s,4G:8H,4I:8v,29:"2Y",x:r*y,y:i*y};16 A={3q:0,4G:0,4I:0,79:0,7v:0,5r:1,5u:1,4c:n(N),1M:x/1Q,x:0,y:0,8K:17(){k()}};6(t.1i("3F")!=-1||e(14).11("f0")!=="1f"&&e(14).11("2I")==="1I"){L["2M"]=0;A["2M"]=e(14).11("7d")}6(e(14).11("3R")){e(14).11("3R").8z()}36.8x(e(14)[0],{8y:l,8w:a});e(14).11("3R",36.6N(e(14)[0],T/1Q,L,A))})};16 N=17(){6(i(e(u))&&(f.g.1u.11("5g")||f.g.1u.11("6g"))){6(f.g.1u.11("5g")&&f.g.1u.11("6g")){16 t=1D.2b(1D.2m()*2);16 n=[["3d",f.g.1u.11("5g")],["bW",f.g.1u.11("6g")]];k(n[t][0],n[t][1])}19 6(f.g.1u.11("5g")){k("3d",f.g.1u.11("5g"))}19{k("bW",f.g.1u.11("6g"))}}19{6(f.g.1u.11("65")&&f.g.1u.11("6f")){16 t=1D.2b(1D.2m()*2);16 n=[["2d",f.g.1u.11("65")],["bS",f.g.1u.11("6f")]];k(n[t][0],n[t][1])}19 6(f.g.1u.11("65")){k("2d",f.g.1u.11("65"))}19 6(f.g.1u.11("6f")){k("bS",f.g.1u.11("6f"))}19{k("2d","1")}}};16 C=17(){6(i(e(u))&&5E.1i("3d")!=-1){k("3d",5E.1J(":")[1])}19{6(5E.1i("3d")!=-1){k("2d","4T")}19{k("2d",5E.1J(":")[1])}}};16 k=17(e,t){16 n=e.1i("er")==-1?f.t:f.ct;16 r="3d",i,s;6(e.1i("2d")!=-1){r="2d"}6(t.1i("4p")!=-1){s=n["t"+r].1j-1;i="4p"}19 6(t.1i("4T")!=-1){s=1D.2b(1D.2m()*o(n["t"+r]));i="2m bT 4T"}19{16 u=t.1J(",");16 a=u.1j;s=1c(u[1D.2b(1D.2m()*a)])-1;i="2m bT ep"}L(r,n["t"+r][s])};16 L=17(t,i){16 o=e(u).18(".12-2c");16 a=f.g.1N.18(\'*[1s*="12-l"]\').1j>0?1Q:0;16 l=i.6E.23().1i("es")==-1?1f:1b;16 c=i.6E.23().1i("eu")==-1?1f:1b;16 h=1W i.4E;16 p=1W i.4q;2y(h){1l"4d":h=i.4E;1k;1l"64":h=1D.2b(1D.2m()*(1c(i.4E.1J(",")[1])-1c(i.4E.1J(",")[0])+1))+1c(i.4E.1J(",")[0]);1k;bQ:h=1D.2b(1D.2m()*(i.4E[1]-i.4E[0]+1))+i.4E[0];1k}2y(p){1l"4d":p=i.4q;1k;1l"64":p=1D.2b(1D.2m()*(1c(i.4q.1J(",")[1])-1c(i.4q.1J(",")[0])+1))+1c(i.4q.1J(",")[0]);1k;bQ:p=1D.2b(1D.2m()*(i.4q[1]-i.4q[0]+1))+i.4q[0];1k}6(f.g.7n()==1b&&f.o.bf==1b||f.g.2w&&f.o.bj==1b){6(h>=15){h=7}19 6(h>=5){h=4}19 6(h>=4){h=3}19 6(h>2){h=2}6(p>=15){p=7}19 6(p>=5){p=4}19 6(p>=4){p=3}19 6(p>2){p=2}6(p>2&&h>2){p=2;6(h>4){h=4}}}16 d=e(u).18(".12-2c").1d()/h;16 v=e(u).18(".12-2c").1e()/p;6(!f.g.2z){f.g.2z=e("<1n>").1o("12-1x-2g").1o("12-4l-2E").1a({1d:o.1d(),1e:o.1e()}).6i(o)}19{f.g.2z.1y(1b,1b).5F().1a({1L:"2p",1d:o.1d(),1e:o.1e()})}16 m=o.1d()-1D.2b(d)*h;16 g=o.1e()-1D.2b(v)*p;16 y=[];y.bJ=17(){16 e=14.1j,t,n,r;6(e==0)1R 1f;aS(--e){t=1D.2b(1D.2m()*(e+1));n=14[e];r=14[t];14[e]=r;14[t]=n}1R 14};2a(16 b=0;b<h*p;b++){y.8a(b)}2y(i.3Z.ev){1l"67":y.67();1k;1l"bR-89":y=s(p,h,"89");1k;1l"bR-67":y=s(p,h,"67");1k;1l"2m":y.bJ();1k}16 w=f.g.1N.18(".12-bg");16 x=f.g.1u.18(".12-bg");6(w.1j==0&&x.1j==0){t="2d";i=e.56(1b,{},f.t["eo"][0]);i.1C.2u=1;i.3Z.1M=0}6(t=="3d"){f.g.3h=(h*p-1)*i.3Z.1M;16 N=0;6(i.2U&&i.2U.2u){N+=i.2U.2u}6(i.2e&&i.2e.2u){N+=i.2e.2u}6(i.2B&&i.2B.2u){N+=i.2B.2u}f.g.3h+=N;16 C=0;6(i.2U&&i.2U.1M){C+=i.2U.1M}6(i.2e&&i.2e.1M){C+=i.2e.1M}6(i.2B&&i.2B.1M){C+=i.2B.1M}f.g.3h+=C}19{f.g.3h=(h*p-1)*i.3Z.1M+i.1C.2u;f.g.5c=e("<1n>").1o("12-en").1w(f.g.2z);f.g.8o=e("<1n>").1o("12-eh").1w(f.g.2z)}16 k=f.g.2o;2a(16 L=0;L<h*p;L++){16 A=L%h==0?m:0;16 O=L>(p-1)*h-1?g:0;16 M=e("<1n>").1o("12-1x-3Z").1a({1d:1D.2b(d)+A,1e:1D.2b(v)+O}).1w(f.g.2z);16 4f,D;6(t=="3d"){M.1o("12-3d-2g");16 P=1D.2b(d)+A;16 H=1D.2b(v)+O;16 B;6(i.2e.6c=="bU"){6(1D.4e(i.2e.1C.3i)>90&&i.3Z.bL!="bN"){B=1D.2b(P/7)+A}19{B=P}}19{6(1D.4e(i.2e.1C.32)>90&&i.3Z.bL!="bN"){B=1D.2b(H/7)+O}19{B=H}}16 j=P/2;16 F=H/2;16 I=B/2;16 q=17(t,n,r,i,s,o,u,a,f){e("<1n>").1o(t).1a({1d:r,1e:i,"-o-4a":"5C("+s+"1E, "+o+"1E, "+u+"1E) 32("+a+"3O) 3i("+f+"3O) 5D(5B) 4F(1, 1, 1)","-aO-4a":"5C("+s+"1E, "+o+"1E, "+u+"1E) 32("+a+"3O) 3i("+f+"3O) 5D(5B) 4F(1, 1, 1)","-b0-4a":"5C("+s+"1E, "+o+"1E, "+u+"1E) 32("+a+"3O) 3i("+f+"3O) 5D(5B) 4F(1, 1, 1)","-5G-4a":"5C("+s+"1E, "+o+"1E, "+u+"1E) 32("+a+"3O) 3i("+f+"3O) 5D(5B) 4F(1, 1, 1)",4a:"5C("+s+"1E, "+o+"1E, "+u+"1E) 32("+a+"3O) 3i("+f+"3O) 5D(5B) 4F(1, 1, 1)"}).1w(n)};q("12-3d-3L",M,0,0,0,0,-I,0,0);16 R=0;16 U=0;16 z=0;6(i.2e.6c=="eg"&&1D.4e(i.2e.1C.32)>90){q("12-3d-6k",M.18(".12-3d-3L"),P,H,-j,-F,-I,6B,0)}19{q("12-3d-6k",M.18(".12-3d-3L"),P,H,-j,-F,-I,0,6B)}q("12-3d-1q",M.18(".12-3d-3L"),P,B,-j,F-I,0,-90,0);q("12-3d-1p",M.18(".12-3d-3L"),P,B,-j,-F-I,0,90,0);q("12-3d-bY",M.18(".12-3d-3L"),P,H,-j,-F,I,0,0);q("12-3d-1m",M.18(".12-3d-3L"),B,H,-j-I,-F,0,0,-90);q("12-3d-1F",M.18(".12-3d-3L"),B,H,j-I,-F,0,0,90);4f=M.18(".12-3d-bY");6(i.2e.6c=="bU"){6(1D.4e(i.2e.1C.3i)>90){D=M.18(".12-3d-6k")}19{D=M.18(".12-3d-1m, .12-3d-1F")}}19{6(1D.4e(i.2e.1C.32)>90){D=M.18(".12-3d-6k")}19{D=M.18(".12-3d-1p, .12-3d-1q")}}16 W=y[L]*i.3Z.1M;16 X=f.g.2z.18(".12-3d-2g:eq("+L+") .12-3d-3L");16 V=1I bH;6(i.2U&&i.2U.1C){i.2U.1C.1M=i.2U.1C.1M?(i.2U.1C.1M+W)/1Q:W/1Q;V.2j(X[0],i.2U.2u/1Q,r(i.2U.1C,i.2U.4R))}19{i.2e.1C.1M=i.2e.1C.1M?(i.2e.1C.1M+W)/1Q:W/1Q}V.2j(X[0],i.2e.2u/1Q,r(i.2e.1C,i.2e.4R));6(i.2B){6(!i.2B.1C){i.2B.1C={}}V.2j(X[0],i.2B.2u/1Q,r(i.2B.1C,i.2B.4R,"2B"))}}19{16 J=34=2L=2K="1U";16 K=6J=1;6(i.1C.6c=="2m"){16 Q=["1p","1q","1F","1m"];16 G=Q[1D.2b(1D.2m()*Q.1j)]}19{16 G=i.1C.6c}6(i.6E.23().1i("bF")!=-1&&L%2==0){6(k=="1S"){k="1X"}19{k="1S"}}6(k=="1S"){2y(G){1l"1p":G="1q";1k;1l"1q":G="1p";1k;1l"1m":G="1F";1k;1l"1F":G="1m";1k;1l"82":G="8c";1k;1l"81":G="8b";1k;1l"8b":G="81";1k;1l"8c":G="82";1k}}2y(G){1l"1p":J=2L=-M.1e();34=2K=0;1k;1l"1q":J=2L=M.1e();34=2K=0;1k;1l"1m":J=2L=0;34=2K=-M.1d();1k;1l"1F":J=2L=0;34=2K=M.1d();1k;1l"82":J=M.1e();2L=0;34=M.1d();2K=0;1k;1l"81":J=M.1e();2L=0;34=-M.1d();2K=0;1k;1l"8b":J=-M.1e();2L=0;34=M.1d();2K=0;1k;1l"8c":J=-M.1e();2L=0;34=-M.1d();2K=0;1k}f.g.5x=i.1C.6e?i.1C.6e:1;6(l==1b&&f.g.5x!=1){J=J/2;2L=2L/2;34=34/2;2K=2K/2}2y(i.1C.4K){1l"3F":J=2L=34=2K=0;K=0;6J=1;1k;1l"eK":K=0;6J=1;6(f.g.5x==1){2L=2K=0}1k}6((i.1C.3t||i.1C.32||i.1C.3i||f.g.5x!=1)&&!f.g.2w&&i.1C.4K!="1r"){M.1a({4l:"2Y"})}19{M.1a({4l:"2E"})}6(l==1b){f.g.5c.1a({4l:"2Y"})}19{f.g.5c.1a({4l:"2E"})}6(c==1b||i.1C.4K=="1r"||l==1b){16 Y=M.1w(f.g.5c);16 Z=M.8m().1w(f.g.8o);4f=e("<1n>").1o("12-eL").1w(Y)}19{16 Z=M.1w(f.g.8o)}D=e("<1n>").1o("12-eA").1w(Z).1a({1p:-J,1m:-34,ez:"2p",2M:K});16 et=y[L]*i.3Z.1M;16 5p=i.1C.3t?i.1C.3t:0;16 6Q=i.1C.32?i.1C.32:0;16 6P=i.1C.3i?i.1C.3i:0;6(k=="1S"){5p=-5p;6Q=-6Q;6P=-6P}36.6N(D[0],i.1C.2u/1Q,{3q:5p,4G:6Q,4I:6P,6e:f.g.5x},{1M:et/1Q,1p:0,1m:0,2M:6J,3q:0,4G:0,4I:0,6e:1,4c:n(i.1C.4R)});6(c==1b&&(x.1j<1||x.1j>0&&(x.1g("1h").23().1i("4S")!=-1||x.1d()<f.g.1A()||x.1e()<f.g.1G()))){36.2j(4f[0],i.1C.2u/1Q,{1M:et/1Q,2M:0,4c:n(i.1C.4R)})}6((i.1C.4K=="1r"||l==1b)&&i.6E.23().1i("bF")==-1){16 4m=0;6(5p!=0){4m=-5p}36.2j(4f[0],i.1C.2u/1Q,{1M:et/1Q,1p:2L,1m:2K,3q:4m,6e:f.g.5x,2M:K,4c:n(i.1C.4R)})}}6(w.1j){6(t=="3d"||t=="2d"&&(c==1b||i.1C.4K=="1r"||l==1b)){4f.3U(e("<28>").1g("1h",w.1g("1h")).1a({1d:w[0].1O.1d,1e:w[0].1O.1e,3e:3l(w.1a("3c-1m"))-3l(M.3D().1m),3J:3l(w.1a("3c-1p"))-3l(M.3D().1p)}))}19 6(f.g.5c.3s().1j==0){f.g.5c.3U(e("<28>").1g("1h",w.1g("1h")).1a({1d:w[0].1O.1d,1e:w[0].1O.1e,3e:3l(w.1a("3c-1m")),3J:3l(w.1a("3c-1p"))}))}}6(x.1j){D.3U(e("<28>").1g("1h",x.1g("1h")).1a({1d:x[0].1O.1d,1e:x[0].1O.1e,3e:3l(x.1a("3c-1m"))-3l(M.3D().1m),3J:3l(x.1a("3c-1p"))-3l(M.3D().1p)}))}}16 5b=f.g.1N;16 2P=f.g.1u;2i(17(){5b.18(".12-bg").1a({29:"2E"})},50);2P.18(".12-bg").1a({29:"2E"});f.g.2z.2s("12-4l-2E");S(a);6(a===0){a=10}2i(17(){5b.1a({1d:0})},a);16 7P=1c(2P.11("74"))?1c(2P.11("74")):0;16 at=f.g.3h+7P>0?f.g.3h+7P:0;2i(17(){6(f.g.2J==1b){f.g.2z.5F();5b.2s("12-1V");f.3x(2P,17(){f.g.2J=1f})}T();6(2P.18(".12-bg").1j<1||2P.18(".12-bg").1j>0&&2P.18(".12-bg").1g("1h").23().1i("4S")!=-1){f.g.2z.1M(9d).3Q(2C,17(){e(14).5F().68()})}2P.1a({1d:f.g.1A(),1e:f.g.1G()})},at);6(f.g.3h<2C){f.g.3h=1Q}2i(17(){f.g.2z.1o("12-4l-2E");2P.1o("12-1V");6(2P.18(".12-bg").1j){2P.18(".12-bg").1a({1L:"1P",29:"2Y"});6(f.g.2w){2P.18(".12-bg").1a("1L","2p");2i(17(){E()},4o)}19{2P.18(".12-bg").2N(4o,17(){E()})}}19{E()}},f.g.3h)};16 A=17(){f.g.1u.18(\' > *[1s*="12-l"]\').1K(17(){e(14).1a({29:"2E"})});f.g.97=e(u).4i().1p;e(1Y).2O(17(){2i(17(){f.g.97=e(u).4i().1p},20)});16 t=17(){6(e(1Y).dX()+e(1Y).1e()-f.g.1G()/2>f.g.97){f.g.70=1b;6(f.g.7N===1b){f.o.4k=1b;f.27()}T()}};e(1Y).dS(17(){6(!f.g.70){t()}});t()};16 O=(f.g.1u.11("5g")||f.g.1u.11("65"))&&f.t||(f.g.1u.11("6g")||f.g.1u.11("6f"))&&f.ct?"1I":"5R";6(!f.g.1u.11("2I")){f.5O(f.g.1u)}6(f.g.1u.11("2I")==="1I"){O="1I"}6(f.o.9c){O="b1"}6(f.o.4V&&!f.g.70){6(f.g.2A==1){16 d=0;f.o.8J(f.g)}19{16 M=1c(f.g.1u.11("74"))?1c(f.g.1u.11("74")):0;16 4f=O=="1I"?0:v;f.g.aP=2i(17(){E()},4f+1D.4e(M))}f.g.3h=1b;6(f.o.8d===1b){A()}19{f.g.70=1b;T()}f.g.1u.1a({1d:f.g.1A(),1e:f.g.1G()});6(!f.g.2w){f.g.1u.18(".12-bg").1a({1L:"1P"}).2N(f.o.8s)}f.g.4A=1f}19{2y(O){1l"5R":f.g.3h=1f;6(f.g.2z){f.g.2z.5F()}w();S();x();T();1k;1l"1I":6(1W 5E!="3n"){C()}19{N()}1k;1l"b1":L(f.o.9c.4K,f.o.9c.ea);1k}}};f.5O=17(e){16 t=e.11("12")||!e.11("12")&&!e.11("5X")&&!e.11("3A")&&!e.11("5T")&&!e.11("5a")&&!e.11("5P")&&!e.11("5Q")&&!e.11("4H")&&!e.11("4N")&&!e.11("5S")&&!e.11("4P")&&!e.11("9e")&&!e.11("5U")&&!e.11("8W")&&!e.11("5I")?"1I":"5R";e.11("2I",t)};f.8B=17(e){6(!e.11("2I")){f.5O(e)}e.2s("12-8E");16 t=f.g.1N;6(f.g.2o!="1S"&&f.g.1u){t=f.g.1u}16 r=t.11("3A")?t.11("3A"):f.o.9b;16 i=f.g.9a[f.g.2o][r];16 s=e.11("3A")?e.11("3A"):i;16 o,u;2y(s){1l"1m":o=-f.g.1A();u=0;1k;1l"1F":o=f.g.1A();u=0;1k;1l"1p":u=-f.g.1G();o=0;1k;1l"1q":u=f.g.1G();o=0;1k;1l"3F":u=0;o=0;1k}6(e.11("2I")==="1I"){16 a="1I"}19{16 a=e.11("5T")?e.11("5T"):1f}2y(a){1l"1m":o=f.g.1A();u=0;1k;1l"1F":o=-f.g.1A();u=0;1k;1l"1p":u=f.g.1G();o=0;1k;1l"1q":u=-f.g.1G();o=0;1k;1l"3F":u=0;o=0;1k;1l"1I":6(e.11("3g")){6(e.11("3g")==="1m"){o=f.g.1A()}19 6(e.11("3g")==="1F"){o=-f.g.1A()}19{o=-1c(e.11("3g"))}}19{o=-f.1x.7K}6(e.11("3p")){6(e.11("3p")==="1p"){u=f.g.1G()}19 6(e.11("3p")==="1q"){u=-f.g.1G()}19{u=-1c(e.11("3p"))}}19{u=-f.1x.7T}1k}16 l=5z=5w=4r=5t=5q=3o=3m="1P";l=e.11("5I")?e.11("5I"):f.1x.8r;5z=e.11("78")?e.11("78"):f.1x.8h;5w=e.11("6q")?e.11("6q"):f.1x.8k;4r=e.11("5U")?e.11("5U"):f.1x.84;5t=e.11("6o")?e.11("6o"):f.1x.98;5q=e.11("6n")?e.11("6n"):f.1x.86;6(4r===1){3o=e.11("6A")?e.11("6A"):f.1x.8u;3m=e.11("6r")?e.11("6r"):f.1x.8F}19{3o=3m=4r}16 c=e.11("6p")?e.11("6p").1J(" "):f.1x.7X;2a(16 h=0;h<c.1j;h++){6(c[h].1i("%")===-1&&c[h].1i("1m")!==-1&&c[h].1i("1F")!==-1&&c[h].1i("1p")!==-1&&c[h].1i("1q")!==-1){c[h]=""+1c(c[h])*f.g.1z+"1E"}}16 p=c.8I(" ");16 d=e.11("6v")?e.11("6v"):f.1x.8n;16 v=1c(e.1a("1m"));16 m=1c(e.1a("1p"));16 g=1c(e.1g("1s").1J("12-l")[1]);16 y=e.3B()>e.3u()?e.3B():e.3u();16 b=1c(l)===0?e.3B():y;16 w=1c(l)===0?e.3u():y;6(g===-1&&a!=="1I"||e.11("3g")==="1m"||e.11("3g")==="1F"){6(o<0){o=-(f.g.1A()-v+(3o/2-.5)*b+1B)}19 6(o>0){o=v+(3o/2+.5)*b+1B}}19{o=o*f.g.1z}6(g===-1&&a!=="1I"||e.11("3p")==="1p"||e.11("3p")==="1q"){6(u<0){u=-(f.g.1G()-m+(3m/2-.5)*w+1B)}19 6(u>0){u=m+(3m/2+.5)*w+1B}}19{u=u*f.g.1z}6(g===-1||a==="1I"){16 E=1}19{16 S=f.g.1N.11("6s")?1c(f.g.1N.11("6s")):f.o.7I;16 E=g*S}6(e.11("2I")==="1I"){16 x=f.1x.51;16 T=f.1x.54}19{16 x=f.o.51;16 T=f.o.54}16 N=e.11("4H")?1c(e.11("4H")):x;6(N===0){N=1}16 C=e.11("4P")?e.11("4P"):T;16 k={29:"2E"};16 L={3q:l,4G:5z,4I:5w,79:5t,7v:5q,5r:3o,5u:3m,x:-o*E,y:-u*E,4c:n(C),8K:17(){e.1a(k)}};6(a=="3F"||!a&&s=="3F"||e.11("aH")!=="1f"&&e.11("2I")==="1I"){L["2M"]=0;k["2M"]=e.11("7d")}36.8x(e[0],{8y:d,8w:p});36.2j(e[0],N/1Q,L)};f.5d=17(){f.d={46:e("<1n>"),aT:17(t){e("<aD>"+t+"</aD>").1w(f.d.46)},bq:17(){e("<4O>").1w(f.d.46)},aU:17(t){e("<4O><3E>"+t+"</3E></4O>").1w(f.d.46)},aL:17(t){e("<3E>"+t+"</3E>").1w(f.d.46.18("4O:4p"))},9f:17(t){e("<4O>").1w(f.d.46.18("4O:4p 3E:4p"))},aF:17(e){f.d.46.18("4O:4p 3E:4p").1T(17(){e.1a({3H:"fv fu fp",3J:1c(e.1a("3c-1p"))-2,3e:1c(e.1a("3c-1m"))-2})},17(){e.1a({3H:"bX",3J:1c(e.1a("3c-1p"))+2,3e:1c(e.1a("3c-1m"))+2})})},68:17(){6(!e("47").18(".12-5d-4J").1j){6(!f.d.bl){f.d.aT("fm fq");f.d.bq();2a(16 t 3M f.o){f.d.aL(t+": <1Z>"+f.o[t]+"</1Z>")}f.d.aT("2t ft");f.d.aU("fs 2W fN fK: <1Z>"+e(u).18(".12-1r").1j+"</1Z>");e(u).18(\'.12-2c .12-1r, .12-2c *[1s*="12-l"]\').1K(17(){6(e(14).2k("12-1r")){f.d.aU("<1Z>bo "+(e(14).5K()+1)+"</1Z>");f.d.9f();f.d.aL("<1Z>bo "+(e(14).5K()+1)+" bz:</1Z><br><br>")}19{f.d.aU("&7o;&7o;&7o;&7o;fF ( "+e(14).bu("bA")+" )");f.d.aF(e(14));f.d.9f();f.d.aL("<1Z>"+e(14).bu("bA")+" 3C bz:</1Z><br><br>");f.d.aL("fI / 1s: <1Z>"+e(14).1g("1s")+"</1Z>")}e.1K(e(14).11(),17(e,t){f.d.aL(e+": <1Z>"+t+"</1Z>")})});f.d.bl=1b}16 n=e("<1n>").1o("12-5d-4J").1a({3D:"fd",b6:"fg",1p:"66",1F:"66",1d:"fj",2f:"fh",3a:"fc","3H-fb":"66",1e:e(1Y).1e()-60,2M:0,bi:7w}).1w(e("47")).1a({bi:0,2M:.9}).2h(17(t){6(t.bd&&t.bc){e(14).7y()}});16 r=e("<1n>").1a({1d:"1B%",1e:"1B%",4l:"1U"}).1w(n);16 i=e("<1n>").1a({1d:"1B%"}).1w(r).3U(f.d.46)}},f5:17(){e("47").18(".12-5d-4J").7y()}};e(u).2h(17(e){6(e.bd&&e.bc){f.d.68()}})};f.2O()};16 n=17(e){16 t;6(e.23().1i("bh")!==-1||e.23().1i("7S")!==-1){t=7R.7Q}19 6(e.23().1i("7U")!==-1){16 n=e.23().1J("7U")[1];t=1Y[n.7C(0).7B()+n.8i(1)].bb}19 6(e.23().1i("7G")!==-1){16 n=e.23().1J("7G")[1];t=1Y[n.7C(0).7B()+n.8i(1)].ba}19 6(e.23().1i("7E")!==-1){16 n=e.23().1J("7E")[1];t=1Y[n.7C(0).7B()+n.8i(1)].b4}1R t};16 r=17(e,t,r,i){6(1W t==="3n"){16 t="cl"}16 s={};6(e.3t!==i){s.3q=e.3t}6(e.3i!==i){s.4I=e.3i}6(e.32!==i){s.4G=e.32}6(r==="2B"){s.5r=s.5u=s.b9=1}19 6(e.4F!==i){s.5r=s.5u=s.b9=e.4F}6(e.1M){s.1M=r==="2B"?e.1M/1Q:e.1M}s.4c=n(t);1R s};16 i=17(t){16 n=e("<1n>"),r=1f,i=1f,s=["cJ","cE","cz","cy","cB"];4a=["cC","c2","c5","c6","ce"];2a(16 o=s.1j-1;o>=0;o--){r=r?r:n[0].1O[s[o]]!=3n}2a(16 o=4a.1j-1;o>=0;o--){n.1a("4a-1O","bx-3d");i=i?i:n[0].1O[4a[o]]=="bx-3d"}6(r&&n[0].1O[s[4]]!=3n){n.1g("4Y","12-cf").1w(t);r=n[0].dm===3&&n[0].dj===9;n.7y()}1R r&&i};16 s=17(e,t,n){16 r=[];6(n=="89"){2a(16 i=0;i<e;i++){2a(16 s=0;s<t;s++){r.8a(i+s*e)}}}19{2a(16 i=e-1;i>-1;i--){2a(16 s=t-1;s>-1;s--){r.8a(i+s*e)}}}1R r};16 o=17(e){16 t=0;2a(16 n 3M e){6(e.dG(n)){++t}}1R t};16 u=17(){ax=17(e){e=e.23();16 t=/(bC)[ \\/]([\\w.]+)/.62(e)||/(5G)[ \\/]([\\w.]+)/.62(e)||/(dH)(?:.*2D|)[ \\/]([\\w.]+)/.62(e)||/(b7) ([\\w.]+)/.62(e)||e.1i("aI")<0&&/(dw)(?:.*? dy:([\\w.]+)|)/.62(e)||[];1R{88:t[1]||"",2D:t[2]||"0"}};16 e=ax(3Y.44),t={};6(e.88){t[e.88]=1b;t.2D=e.2D}6(t.bC){t.5G=1b}19 6(t.5G){t.cW=1b}1R t};cN=17(e,t){16 n=["5G","cM","b0","aO","o",""];16 r=0,i,s;aS(r<n.1j&&!e[i]){i=t;6(n[r]==""){i=i.bV(0,1).23()+i.bV(1)}i=n[r]+i;s=1W e[i];6(s!="3n"){n=[n[r]];1R s=="17"?e[i]():e[i]}r++}};t.7p={2D:"5.2.0",7n:17(){6(3Y.44.3S(/de/i)||3Y.44.3S(/dB/i)||3Y.44.3S(/dx/i)||3Y.44.3S(/dh/i)||3Y.44.3S(/cL/i)||3Y.44.3S(/cc/i)||3Y.44.3S(/c7 c4/i)){1R 1b}19{1R 1f}},cv:17(e){6(e.1a("2f-1q")=="1U"||e.1a("2f-1q")=="1P"||e.1a("2f-1q")==0||e.1a("2f-1q")=="bX"){1R 1b}19{1R 1f}},2w:u().b7&&u().2D<9?1b:1f,7N:1f,3f:1f,5l:1f,2G:1f,2Z:1f,2A:7b,2o:"1X",4g:7b,1A:7b,1G:7b,9a:{1S:{1m:"1F",1F:"1m",1p:"1q",1q:"1p"},1X:{1m:"1m",1F:"1F",1p:"1p",1q:"1q"}},v:{d:4o,fo:8U,fi:4o}};t.aB={aw:80,ay:0,6j:1Q,5J:0,5Y:"71",2N:1b,aA:0,az:0,aK:0,aM:1,aY:1,aZ:1,aW:0,aV:0,aR:["50%","50%","0"],bB:4o,7K:-80,7T:0,51:bZ,dU:0,54:"71",3Q:1b,8r:0,8h:0,8k:0,84:1,8u:1,8F:1,98:0,86:0,7X:["50%","50%","0"],8n:4o};t.9V={6Z:aX};t.9K={9G:1b,4n:0,7m:0,91:1f,1w:"",4k:1b,8d:1b,bK:1b,30:1,4V:1b,8s:9d,4w:0,7r:1b,8t:1f,7A:1f,2v:"dN",3v:"/6a/eJ/",7W:"83",72:1f,7Y:1b,6W:1b,7a:1b,aj:1b,bG:1b,ai:1b,7i:1f,b3:1f,bs:1b,3b:"1T",7f:"60%",7V:1B,6l:60,8M:35,8f:1B,5W:1b,2H:"1U",aQ:"dD.cb",49:1b,4Z:1b,1v:1f,b8:"1m: -66; 1p: -66;",7D:1f,b5:"fa",bf:1b,bj:1b,99:1f,bk:0,bw:fE,fG:"",bv:17(e){},bp:17(e){},b2:17(e){},aG:17(e){},av:17(e){},8J:17(e){},6z:17(e){},6t:17(e){},6Z:aX,9b:"1F",aN:.45,7I:.45,6j:1Q,51:1Q,5Y:"71",54:"71",5J:0,6U:0}})(3I)',62,981,'||||||if|||||||||||||||||||||||||||||||||||||||||||||||||||||||||data|ls||this||var|function|find|else|css|true|parseInt|width|height|false|attr|src|indexOf|length|break|case|left|div|addClass|top|bottom|slide|class|nav|nextLayer|yourLogo|appendTo|lt|stop|ratio|sliderWidth|100|transition|Math|px|right|sliderHeight|thumbnail|new|split|each|display|delay|curLayer|style|none|1e3|return|prev|hover|auto|active|typeof|next|window|strong||iframe|the|toLowerCase|curLayerIndex||parent|start|img|visibility|for|floor|inner||animation|padding|container|click|setTimeout|to|hasClass|href|random|sliderOriginalWidth|prevNext|block|replace|clearTimeout|removeClass|LayerSlider|duration|skin|ie78|video|switch|ltContainer|layersNum|after|300|version|hidden|originalAutoSlideshow|autoSlideshow|autoPauseSlideshow|transitiontype|resize|L2|T2|opacity|fadeIn|load|ot|cttl|not|image|wrapper|before|originalWidth|of|loaded|visible|isAnimating|firstSlide|originalHeight|rotateX|layerSlider|L1||TweenLite||circleTimer||background|thumbnailNavigation|margin||marginLeft|paused|offsetxout|totalDuration|rotateY|bottomWrapper|videopreview|parseFloat|curSubScaleY|undefined|curSubScaleX|offsetyout|rotation|is|children|rotate|outerHeight|skinsPath|preventDefault|makeResponsive|preloaded|sliderOriginalHeight|slidedirection|outerWidth|layer|position|li|fade|barTimer|border|jQuery|marginTop|param|box|in|curSlideTime|deg|fullwidth|fadeOut|tr|match|wp|append|or|closest|shadow|navigator|tile|pausedSlideTime|responsiveMode|thumbsWrapper|com|userAgent||history|body|error|imgPreload|transform|videoSrc|ease|number|abs|_|slideTimer|autoplay|offset|nextLoop|autoStart|overflow|it|responsiveUnder|500|last|rows|curSubScale|originalTop|originalLeft|html|forcehide|loops|animate|on|showUntilTimer|isLoading|startSlideTime|thumb|tn|cols|scale3d|rotationX|durationout|rotationY|console|type|youtube|always|showuntil|ul|easingout|change|easing|png|all|and|animateFirstSlide|Please|location|id|lazyLoad||durationOut|your|slidebuttons|easingOut|like|extend|rel|offsetxin|offsetyin|delayin|st|curTiles|debug|Date|getTime|transition3d|init|fisrtSlide|vimeo|WordPress|pausedByVideo|thumbnails|parallaxlevel|shadowImg|tt|curSubSkewY|scaleX|nextSubScaleY|curSubSkewX|scaleY|touches|curSubRotateY|scale2D|nextSubScaleX|curSubRotateX|youtu|0deg|translate3d|rotateZ|LSCustomTransition|empty|webkit|timer|rotateout|delayIn|index|vpcontainer|pause|span|transitionType|delayout|durationin|old|easingin|slideoutdirection|scaleout|document|autoPlayVideos|slidedelay|easingIn|url||player|exec|originalRight|string|transition2d|10px|reverse|show|touchEndX|layerslider|nextLayerIndex|direction|removeAttr|scale|customtransition2d|customtransition3d|trim|prependTo|durationIn|back|tnHeight|originalBottom|skewyout|skewxout|transformoriginout|rotateyout|scaleyout|parallaxout|cbNext|currentTime|perspectiveout|audio|oR|nextSubScale|cbPrev|scalexout|180|nextLayerTop|nIt|name|nextLayerLeft|cannot|layerMarginTop|curLayerTop|O2|wrong|URL|seems|fromTo|pointing|rt|nt|check|URLs|fadeTo|delayOut|slider|navStartStop|oB|oT|slideDelay|firstSlideAnimated|easeInOutQuint|globalBGImage|layerMarginLeft|timeshift|ontouchstart|used|images|rotatexout|skewX|navButtons|null|videoTimer|originalOpacity|originalBorderLeft|tnContainerWidth|nothumb|bind|hoverBottomNav|originalBorderRight|originalBorderTop|originalBorderBottom|layersContainer|isMobile|nbsp|global|link|forceLoopNum|videoDuration|http|showShadow|skewY|150|touchStartX|remove|clicked|randomSlideshow|toUpperCase|charAt|yourLogoLink|easein|helper|easeout|nextLayerBottom|parallaxOut|nextLayerHeight|offsetXOut|nextLayerWidth|curLayerBottom|originalAutoStart|nextLayerRight|ut|easeNone|Linear|linear|offsetYOut|easeinout|tnWidth|globalBGColor|transformOriginOut|navPrevNext|content||topright|topleft|transparent|scaleOut|defaults|skewYOut|alt|browser|forward|push|bottomleft|bottomright|startInViewport|forceHideControls|tnInactiveOpacity|lswpVersion|rotateXOut|slice|linkto|rotateYOut|250|clone|perspectiveOut|nextTiles|pageX|script|rotateOut|sliderFadeInDuration|twoWaySlideshow|scaleXOut|nextSubRotateY|transformOrigin|set|transformPerspective|kill|jquery|sublayerShowUntil|originalPaddingLeft|originalPaddingRight|videohack|scaleYOut|originalPaddingBottom|nextSubRotateX|join|cbAnimStop|onComplete|resizeShadow|tnActiveOpacity|sliderOriginalWidthRU|resizeSlider|resizeYourLogo|wpVersion|nextSubSkewX|nextSubSkewY|sublayerContainer|750|dequeue|rotatein|originalPaddingTop|cssContainer|fired||fullScreen|bottomNavSizeHelper|text|changeThumb|scrollThumb|curLayerRight|sliderTop|skewXOut|hideOnMobile|slideDirections|slideDirection|slideTransition|350|scalein|aUU|scalexin|createStyleSheet|transformoriginin|callback|parallaxin|disabled|animating|cbTimeLineStart|rotateyin|scaleyin|json|firstLayer|api|with|head|hash|group|entry|rotatexin|embed|curSkin|skewyin|perspectivein|getJSON|skewxin|substring|responsive|off|showSlider|gi|options|ieEasing|t4|forcestop|t1|t2|t3|resizeThumb|originalFontSize|borderTopWidth|borderBottomWidth|slideTransitions|shadowBtmMod|borderRightWidth|borderLeftWidth|originalLineHeight|font|size|line|2e3|add|parallaxStartX|parallaxStartY|pageY|relative|loading|half|playvideo|wmode|opaque|hider|sides|mousemove|stopLayer|hoverPrevNext|keybNav|JS|clientX|lastIndexOf||above|which|originalEvent|alert|Play||layerSliderCustomTransitions|cbAnimStart|offsetXIn|uaMatch|offsetYIn|rotateXIn|rotateIn|layerTransitions|update|h1|issue||cbPause|fadeout|compatible|plugin|rotateYIn||scaleIn|parallaxIn|ms|t5|youtubePreview|transformOriginIn|while|||skewYIn|skewXIn|4e3|scaleXIn|scaleYIn|moz|forced|cbStop|showBarTimer|easeIn|yourLogoTarget|zIndex|msie|yourLogoStyle|scaleZ|easeOut|easeInOut|altKey|shiftKey||optimizeForMobile||swing|marginRight|optimizeForIE78|hideUnder|putData|library|It|SLIDE|cbStart|aeU||showCircleTimer|looks|prop|cbInit|hideOver|preserve||properties|tagName|perspectiveIn|chrome|object|initialized|mirror|touchNav|TimelineLite|layerSliderTransitions|randomize|pauseOnHover|depth|lsShowNotice|large|oldjquery|meta|default|col|custom2d|from|horizontal|substr|custom3d|0px|front|400|norotate|sideleft|OTransformStyle|stylesheet|Phone|msTransformStyle|MozTransformStyle|Windows|absolute|mouseenter|mouseleave|jpg|BlackBerry|already|WebkitTransformStyle|test3d|Skin|below|Possibilities|without|mistyped|easeInOutQuart|touchstart|touchmove|touchend|Loading|yourlogo|bock|you||theme|isHideOn3D|main|WP|MozPerspective|msPerspective|touchscroll|WebkitPerspective|transformStyle|gif|OPerspective|keydown|page|Trying|enable|perspective|sideright|iPod|khtml|lsPrefixes|html5|within|gpuhack|insertBefore|animateFirstLayer|option|target|Put|safari|includes|v2|insertAfter|Troubleshooting|videos|deeplink|feeds|gdata|pointer|file|Advanced|media|extra|vi|seconds|yt|round|Android|Settings|center|iPad|Fallback|offsetLeft|bar|circle|offsetHeight|indicator||backgroundColor|important|backgroundImage|static|cursor|wrapAll|ended|mozilla|iPhone|rv|were|thumbnail_large|webOS|Neither|maxresdefault|640|play|hasOwnProperty|opera|mode|blank|elastic|layerMarginRight|layerMarginBottom|v5|read|can|changeTimer|more|scroll|that|showUntil|updating|problems|scrollTop|about|You|600|older|browsers|copy|sliders|textDecoration|because|IE|support|another|obj|wordpress|faq|kreaturamedia|filter|prevLayerIndex|vertical|nexttiles|loads|enabled|enableCSS3||originalMarkup|curtiles|t2d|specified||custom|carousel||crossfad|sequence|controls|forceStop|defaultInitData|dispay|nexttile|title|exclam|clicking|here|continue|causing|force|userInitData|skins|mixed|curtile|navigate|Updater|Quint|sine|Sine|quint|Cubic|Quart|cubic|expo|Expo|Back|bounce|Elastic|fadein|circ|Circ|quart|Quad|hide|resume|onReverseComplete|queue|outline|_self|radius|black|fixed|quad|restart|10000000000|20px||300px|use|Bounce|Init|||red|code|least|Number|Content|solid|2px|multiple|Important|admin|higher|area|newer|information|log|1e6|Layer|staticImage|using|distance|requires|found|Trident|450|slides|are'.split('|'),0,{}));
/*
 * jQuery FlexSlider v2.5.0
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
;
(function ($) {

  $.flexslider = function(el, options) {
    var slider = $(el);

    slider.vars = $.extend({}, $.flexslider.defaults, options);

    var namespace = slider.vars.namespace,
        msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        touch = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch) && slider.vars.touch,
        
        
        eventType = "click touchend MSPointerUp keyup",
        watchedEvent = "",
        watchedEventClearTimer,
        vertical = slider.vars.direction === "vertical",
        reverse = slider.vars.reverse,
        carousel = (slider.vars.itemWidth > 0),
        fade = slider.vars.animation === "fade",
        asNav = slider.vars.asNavFor !== "",
        methods = {},
        focused = true;

    $.data(el, "flexslider", slider);

    methods = {
      init: function() {
        slider.animating = false;
        slider.currentSlide = parseInt( ( slider.vars.startAt ? slider.vars.startAt : 0), 10 );
        if ( isNaN( slider.currentSlide ) ) { slider.currentSlide = 0; }
        slider.animatingTo = slider.currentSlide;
        slider.atEnd = (slider.currentSlide === 0 || slider.currentSlide === slider.last);
        slider.containerSelector = slider.vars.selector.substr(0,slider.vars.selector.search(' '));
        slider.slides = $(slider.vars.selector, slider);
        slider.container = $(slider.containerSelector, slider);
        slider.count = slider.slides.length;
        
        slider.syncExists = $(slider.vars.sync).length > 0;

        if (slider.vars.animation === "slide") { slider.vars.animation = "swing"; }
        slider.prop = (vertical) ? "top" : "marginLeft";
        slider.args = {};

        slider.manualPause = false;
        slider.stopped = false;

        slider.started = false;
        slider.startTimeout = null;

        slider.transitions = !slider.vars.video && !fade && slider.vars.useCSS && (function() {
          var obj = document.createElement('div'),
              props = ['perspectiveProperty', 'WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
          for (var i in props) {
            if ( obj.style[ props[i] ] !== undefined ) {
              slider.pfx = props[i].replace('Perspective','').toLowerCase();
              slider.prop = "-" + slider.pfx + "-transform";
              return true;
            }
          }
          return false;
        }());
        slider.ensureAnimationEnd = '';

        if (slider.vars.controlsContainer !== "") slider.controlsContainer = $(slider.vars.controlsContainer).length > 0 && $(slider.vars.controlsContainer);

        if (slider.vars.manualControls !== "") slider.manualControls = $(slider.vars.manualControls).length > 0 && $(slider.vars.manualControls);


        if (slider.vars.customDirectionNav !== "") slider.customDirectionNav = $(slider.vars.customDirectionNav).length === 2 && $(slider.vars.customDirectionNav);


        if (slider.vars.randomize) {
          slider.slides.sort(function() { return (Math.round(Math.random())-0.5); });
          slider.container.empty().append(slider.slides);
        }

        slider.doMath();


        slider.setup("init");


        if (slider.vars.controlNav) { methods.controlNav.setup(); }


        if (slider.vars.directionNav) { methods.directionNav.setup(); }


        if (slider.vars.keyboard && ($(slider.containerSelector).length === 1 || slider.vars.multipleKeyboard)) {
          $(document).bind('keyup', function(event) {
            var keycode = event.keyCode;
            if (!slider.animating && (keycode === 39 || keycode === 37)) {
              var target = (keycode === 39) ? slider.getTarget('next') :
                           (keycode === 37) ? slider.getTarget('prev') : false;
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }
          });
        }

        if (slider.vars.mousewheel) {
          slider.bind('mousewheel', function(event, delta, deltaX, deltaY) {
            event.preventDefault();
            var target = (delta < 0) ? slider.getTarget('next') : slider.getTarget('prev');
            slider.flexAnimate(target, slider.vars.pauseOnAction);
          });
        }


        if (slider.vars.pausePlay) { methods.pausePlay.setup(); }


        if (slider.vars.slideshow && slider.vars.pauseInvisible) { methods.pauseInvisible.init(); }


        if (slider.vars.slideshow) {
          if (slider.vars.pauseOnHover) {
            slider.hover(function() {
              if (!slider.manualPlay && !slider.manualPause) { slider.pause(); }
            }, function() {
              if (!slider.manualPause && !slider.manualPlay && !slider.stopped) { slider.play(); }
            });
          }

          if(!slider.vars.pauseInvisible || !methods.pauseInvisible.isHidden()) {
            (slider.vars.initDelay > 0) ? slider.startTimeout = setTimeout(slider.play, slider.vars.initDelay) : slider.play();
          }
        }


        if (asNav) { methods.asNav.setup(); }


        if (touch && slider.vars.touch) { methods.touch(); }


        if (!fade || (fade && slider.vars.smoothHeight)) { $(window).bind("resize orientationchange focus", methods.resize); }

        slider.find("img").attr("draggable", "false");


        setTimeout(function(){
          slider.vars.start(slider);
        }, 200);
      },
      asNav: {
        setup: function() {
          slider.asNav = true;
          slider.animatingTo = Math.floor(slider.currentSlide/slider.move);
          slider.currentItem = slider.currentSlide;
          slider.slides.removeClass(namespace + "active-slide").eq(slider.currentItem).addClass(namespace + "active-slide");
          if(!msGesture){
              slider.slides.on(eventType, function(e){
                e.preventDefault();
                var $slide = $(this),
                    target = $slide.index();
                var posFromLeft = $slide.offset().left - $(slider).scrollLeft(); 
                if( posFromLeft <= 0 && $slide.hasClass( namespace + 'active-slide' ) ) {
                  slider.flexAnimate(slider.getTarget("prev"), true);
                } else if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass(namespace + "active-slide")) {
                  slider.direction = (slider.currentItem < target) ? "next" : "prev";
                  slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                }
              });
          }else{
              el._slider = slider;
              slider.slides.each(function (){
                  var that = this;
                  that._gesture = new MSGesture();
                  that._gesture.target = that;
                  that.addEventListener("MSPointerDown", function (e){
                      e.preventDefault();
                      if(e.currentTarget._gesture) {
                        e.currentTarget._gesture.addPointer(e.pointerId);
                      }
                  }, false);
                  that.addEventListener("MSGestureTap", function (e){
                      e.preventDefault();
                      var $slide = $(this),
                          target = $slide.index();
                      if (!$(slider.vars.asNavFor).data('flexslider').animating && !$slide.hasClass('active')) {
                          slider.direction = (slider.currentItem < target) ? "next" : "prev";
                          slider.flexAnimate(target, slider.vars.pauseOnAction, false, true, true);
                      }
                  });
              });
          }
        }
      },
      controlNav: {
        setup: function() {
          if (!slider.manualControls) {
            methods.controlNav.setupPaging();
          } else { 
            methods.controlNav.setupManual();
          }
        },
        setupPaging: function() {
          var type = (slider.vars.controlNav === "thumbnails") ? 'control-thumbs' : 'control-paging',
              j = 1,
              item,
              slide;

          slider.controlNavScaffold = $('<ol class="'+ namespace + 'control-nav ' + namespace + type + '"></ol>');

          if (slider.pagingCount > 1) {
            for (var i = 0; i < slider.pagingCount; i++) {
              slide = slider.slides.eq(i);
              item = (slider.vars.controlNav === "thumbnails") ? '<img src="' + slide.attr( 'data-thumb' ) + '"/>' : '<a>' + j + '</a>';
              if ( 'thumbnails' === slider.vars.controlNav && true === slider.vars.thumbCaptions ) {
                var captn = slide.attr( 'data-thumbcaption' );
                if ( '' !== captn && undefined !== captn ) { item += '<span class="' + namespace + 'caption">' + captn + '</span>'; }
              }
              slider.controlNavScaffold.append('<li>' + item + '</li>');
              j++;
            }
          }


          (slider.controlsContainer) ? $(slider.controlsContainer).append(slider.controlNavScaffold) : slider.append(slider.controlNavScaffold);
          methods.controlNav.set();

          methods.controlNav.active();

          slider.controlNavScaffold.delegate('a, img', eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                slider.direction = (target > slider.currentSlide) ? "next" : "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }


            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();

          });
        },
        setupManual: function() {
          slider.controlNav = slider.manualControls;
          methods.controlNav.active();

          slider.controlNav.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              var $this = $(this),
                  target = slider.controlNav.index($this);

              if (!$this.hasClass(namespace + 'active')) {
                (target > slider.currentSlide) ? slider.direction = "next" : slider.direction = "prev";
                slider.flexAnimate(target, slider.vars.pauseOnAction);
              }
            }


            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        set: function() {
          var selector = (slider.vars.controlNav === "thumbnails") ? 'img' : 'a';
          slider.controlNav = $('.' + namespace + 'control-nav li ' + selector, (slider.controlsContainer) ? slider.controlsContainer : slider);
        },
        active: function() {
          slider.controlNav.removeClass(namespace + "active").eq(slider.animatingTo).addClass(namespace + "active");
        },
        update: function(action, pos) {
          if (slider.pagingCount > 1 && action === "add") {
            slider.controlNavScaffold.append($('<li><a>' + slider.count + '</a></li>'));
          } else if (slider.pagingCount === 1) {
            slider.controlNavScaffold.find('li').remove();
          } else {
            slider.controlNav.eq(pos).closest('li').remove();
          }
          methods.controlNav.set();
          (slider.pagingCount > 1 && slider.pagingCount !== slider.controlNav.length) ? slider.update(pos, action) : methods.controlNav.active();
        }
      },
      directionNav: {
        setup: function() {
          var directionNavScaffold = $('<ul class="' + namespace + 'direction-nav"><li class="' + namespace + 'nav-prev"><a class="' + namespace + 'prev" href="#">' + slider.vars.prevText + '</a></li><li class="' + namespace + 'nav-next"><a class="' + namespace + 'next" href="#">' + slider.vars.nextText + '</a></li></ul>');


          if (slider.customDirectionNav) {
            slider.directionNav = slider.customDirectionNav;

          } else if (slider.controlsContainer) {
            $(slider.controlsContainer).append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider.controlsContainer);
          } else {
            slider.append(directionNavScaffold);
            slider.directionNav = $('.' + namespace + 'direction-nav li a', slider);
          }

          methods.directionNav.update();

          slider.directionNav.bind(eventType, function(event) {
            event.preventDefault();
            var target;

            if (watchedEvent === "" || watchedEvent === event.type) {
              target = ($(this).hasClass(namespace + 'next')) ? slider.getTarget('next') : slider.getTarget('prev');
              slider.flexAnimate(target, slider.vars.pauseOnAction);
            }


            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function() {
          var disabledClass = namespace + 'disabled';
          if (slider.pagingCount === 1) {
            slider.directionNav.addClass(disabledClass).attr('tabindex', '-1');
          } else if (!slider.vars.animationLoop) {
            if (slider.animatingTo === 0) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "prev").addClass(disabledClass).attr('tabindex', '-1');
            } else if (slider.animatingTo === slider.last) {
              slider.directionNav.removeClass(disabledClass).filter('.' + namespace + "next").addClass(disabledClass).attr('tabindex', '-1');
            } else {
              slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
            }
          } else {
            slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');
          }
        }
      },
      pausePlay: {
        setup: function() {
          var pausePlayScaffold = $('<div class="' + namespace + 'pauseplay"><a></a></div>');


          if (slider.controlsContainer) {
            slider.controlsContainer.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider.controlsContainer);
          } else {
            slider.append(pausePlayScaffold);
            slider.pausePlay = $('.' + namespace + 'pauseplay a', slider);
          }

          methods.pausePlay.update((slider.vars.slideshow) ? namespace + 'pause' : namespace + 'play');

          slider.pausePlay.bind(eventType, function(event) {
            event.preventDefault();

            if (watchedEvent === "" || watchedEvent === event.type) {
              if ($(this).hasClass(namespace + 'pause')) {
                slider.manualPause = true;
                slider.manualPlay = false;
                slider.pause();
              } else {
                slider.manualPause = false;
                slider.manualPlay = true;
                slider.play();
              }
            }


            if (watchedEvent === "") {
              watchedEvent = event.type;
            }
            methods.setToClearWatchedEvent();
          });
        },
        update: function(state) {
          (state === "play") ? slider.pausePlay.removeClass(namespace + 'pause').addClass(namespace + 'play').html(slider.vars.playText) : slider.pausePlay.removeClass(namespace + 'play').addClass(namespace + 'pause').html(slider.vars.pauseText);
        }
      },
      touch: function() {
        var startX,
          startY,
          offset,
          cwidth,
          dx,
          startT,
          onTouchStart,
          onTouchMove,
          onTouchEnd,
          scrolling = false,
          localX = 0,
          localY = 0,
          accDx = 0;

        if(!msGesture){
            onTouchStart = function(e) {
              if (slider.animating) {
                e.preventDefault();
              } else if ( ( window.navigator.msPointerEnabled ) || e.touches.length === 1 ) {
                slider.pause();

                cwidth = (vertical) ? slider.h : slider. w;
                startT = Number(new Date());



                localX = e.touches[0].pageX;
                localY = e.touches[0].pageY;

                offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                         (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                         (carousel && slider.currentSlide === slider.last) ? slider.limit :
                         (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                         (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                startX = (vertical) ? localY : localX;
                startY = (vertical) ? localX : localY;

                el.addEventListener('touchmove', onTouchMove, false);
                el.addEventListener('touchend', onTouchEnd, false);
              }
            };

            onTouchMove = function(e) {


              localX = e.touches[0].pageX;
              localY = e.touches[0].pageY;

              dx = (vertical) ? startX - localY : startX - localX;
              scrolling = (vertical) ? (Math.abs(dx) < Math.abs(localX - startY)) : (Math.abs(dx) < Math.abs(localY - startY));

              var fxms = 500;

              if ( ! scrolling || Number( new Date() ) - startT > fxms ) {
                e.preventDefault();
                if (!fade && slider.transitions) {
                  if (!slider.vars.animationLoop) {
                    dx = dx/((slider.currentSlide === 0 && dx < 0 || slider.currentSlide === slider.last && dx > 0) ? (Math.abs(dx)/cwidth+2) : 1);
                  }
                  slider.setProps(offset + dx, "setTouch");
                }
              }
            };

            onTouchEnd = function(e) {

              el.removeEventListener('touchmove', onTouchMove, false);

              if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                var updateDx = (reverse) ? -dx : dx,
                    target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                  slider.flexAnimate(target, slider.vars.pauseOnAction);
                } else {
                  if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                }
              }
              el.removeEventListener('touchend', onTouchEnd, false);

              startX = null;
              startY = null;
              dx = null;
              offset = null;
            };

            el.addEventListener('touchstart', onTouchStart, false);
        }else{
            el.style.msTouchAction = "none";
            el._gesture = new MSGesture();
            el._gesture.target = el;
            el.addEventListener("MSPointerDown", onMSPointerDown, false);
            el._slider = slider;
            el.addEventListener("MSGestureChange", onMSGestureChange, false);
            el.addEventListener("MSGestureEnd", onMSGestureEnd, false);

            function onMSPointerDown(e){
                e.stopPropagation();
                if (slider.animating) {
                    e.preventDefault();
                }else{
                    slider.pause();
                    el._gesture.addPointer(e.pointerId);
                    accDx = 0;
                    cwidth = (vertical) ? slider.h : slider. w;
                    startT = Number(new Date());


                    offset = (carousel && reverse && slider.animatingTo === slider.last) ? 0 :
                        (carousel && reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                            (carousel && slider.currentSlide === slider.last) ? slider.limit :
                                (carousel) ? ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.currentSlide :
                                    (reverse) ? (slider.last - slider.currentSlide + slider.cloneOffset) * cwidth : (slider.currentSlide + slider.cloneOffset) * cwidth;
                }
            }

            function onMSGestureChange(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                var transX = -e.translationX,
                    transY = -e.translationY;


                accDx = accDx + ((vertical) ? transY : transX);
                dx = accDx;
                scrolling = (vertical) ? (Math.abs(accDx) < Math.abs(-transX)) : (Math.abs(accDx) < Math.abs(-transY));

                if(e.detail === e.MSGESTURE_FLAG_INERTIA){
                    setImmediate(function (){
                        el._gesture.stop();
                    });

                    return;
                }

                if (!scrolling || Number(new Date()) - startT > 500) {
                    e.preventDefault();
                    if (!fade && slider.transitions) {
                        if (!slider.vars.animationLoop) {
                            dx = accDx / ((slider.currentSlide === 0 && accDx < 0 || slider.currentSlide === slider.last && accDx > 0) ? (Math.abs(accDx) / cwidth + 2) : 1);
                        }
                        slider.setProps(offset + dx, "setTouch");
                    }
                }
            }

            function onMSGestureEnd(e) {
                e.stopPropagation();
                var slider = e.target._slider;
                if(!slider){
                    return;
                }
                if (slider.animatingTo === slider.currentSlide && !scrolling && !(dx === null)) {
                    var updateDx = (reverse) ? -dx : dx,
                        target = (updateDx > 0) ? slider.getTarget('next') : slider.getTarget('prev');

                    if (slider.canAdvance(target) && (Number(new Date()) - startT < 550 && Math.abs(updateDx) > 50 || Math.abs(updateDx) > cwidth/2)) {
                        slider.flexAnimate(target, slider.vars.pauseOnAction);
                    } else {
                        if (!fade) { slider.flexAnimate(slider.currentSlide, slider.vars.pauseOnAction, true); }
                    }
                }

                startX = null;
                startY = null;
                dx = null;
                offset = null;
                accDx = 0;
            }
        }
      },
      resize: function() {
        if (!slider.animating && slider.is(':visible')) {
          if (!carousel) { slider.doMath(); }

          if (fade) {
            
            methods.smoothHeight();
          } else if (carousel) { 
            slider.slides.width(slider.computedW);
            slider.update(slider.pagingCount);
            slider.setProps();
          }
          else if (vertical) { 
            slider.viewport.height(slider.h);
            slider.setProps(slider.h, "setTotal");
          } else {
            
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
            slider.newSlides.width(slider.computedW);
            slider.setProps(slider.computedW, "setTotal");
          }
        }
      },
      smoothHeight: function(dur) {
        if (!vertical || fade) {
          var $obj = (fade) ? slider : slider.viewport;
          (dur) ? $obj.animate({"height": slider.slides.eq(slider.animatingTo).height()}, dur) : $obj.height(slider.slides.eq(slider.animatingTo).height());
        }
      },
      sync: function(action) {
        var $obj = $(slider.vars.sync).data("flexslider"),
            target = slider.animatingTo;

        switch (action) {
          case "animate": $obj.flexAnimate(target, slider.vars.pauseOnAction, false, true); break;
          case "play": if (!$obj.playing && !$obj.asNav) { $obj.play(); } break;
          case "pause": $obj.pause(); break;
        }
      },
      uniqueID: function($clone) {
        
        $clone.filter( '[id]' ).add($clone.find( '[id]' )).each(function() {
          var $this = $(this);
          $this.attr( 'id', $this.attr( 'id' ) + '_clone' );
        });
        return $clone;
      },
      pauseInvisible: {
        visProp: null,
        init: function() {
          var visProp = methods.pauseInvisible.getHiddenProp();
          if (visProp) {
            var evtname = visProp.replace(/[H|h]idden/,'') + 'visibilitychange';
            document.addEventListener(evtname, function() {
              if (methods.pauseInvisible.isHidden()) {
                if(slider.startTimeout) {
                  clearTimeout(slider.startTimeout); 
                } else { 
                  slider.pause(); 
                }
              }
              else {
                if(slider.started) {
                  slider.play(); 
                } else { 
                  if (slider.vars.initDelay > 0) { 
                    setTimeout(slider.play, slider.vars.initDelay);
                  } else {
                    slider.play(); 
                  } 
                }
              }
            });
          }
        },
        isHidden: function() {
          var prop = methods.pauseInvisible.getHiddenProp();
          if (!prop) {
            return false;
          }
          return document[prop];
        },
        getHiddenProp: function() {
          var prefixes = ['webkit','moz','ms','o'];
          
          if ('hidden' in document) {
            return 'hidden';
          }
          
          for ( var i = 0; i < prefixes.length; i++ ) {
              if ((prefixes[i] + 'Hidden') in document) {
                return prefixes[i] + 'Hidden';
              }
          }
          
          return null;
        }
      },
      setToClearWatchedEvent: function() {
        clearTimeout(watchedEventClearTimer);
        watchedEventClearTimer = setTimeout(function() {
          watchedEvent = "";
        }, 3000);
      }
    };

    
    slider.flexAnimate = function(target, pause, override, withSync, fromNav) {
      if (!slider.vars.animationLoop && target !== slider.currentSlide) {
        slider.direction = (target > slider.currentSlide) ? "next" : "prev";
      }

      if (asNav && slider.pagingCount === 1) slider.direction = (slider.currentItem < target) ? "next" : "prev";

      if (!slider.animating && (slider.canAdvance(target, fromNav) || override) && slider.is(":visible")) {
        if (asNav && withSync) {
          var master = $(slider.vars.asNavFor).data('flexslider');
          slider.atEnd = target === 0 || target === slider.count - 1;
          master.flexAnimate(target, true, false, true, fromNav);
          slider.direction = (slider.currentItem < target) ? "next" : "prev";
          master.direction = slider.direction;

          if (Math.ceil((target + 1)/slider.visible) - 1 !== slider.currentSlide && target !== 0) {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            target = Math.floor(target/slider.visible);
          } else {
            slider.currentItem = target;
            slider.slides.removeClass(namespace + "active-slide").eq(target).addClass(namespace + "active-slide");
            return false;
          }
        }

        slider.animating = true;
        slider.animatingTo = target;

        
        if (pause) { slider.pause(); }

        
        slider.vars.before(slider);

        
        if (slider.syncExists && !fromNav) { methods.sync("animate"); }

        
        if (slider.vars.controlNav) { methods.controlNav.active(); }

        
        if (!carousel) { slider.slides.removeClass(namespace + 'active-slide').eq(target).addClass(namespace + 'active-slide'); }

        
        slider.atEnd = target === 0 || target === slider.last;


        if (slider.vars.directionNav) { methods.directionNav.update(); }

        if (target === slider.last) {
          slider.vars.end(slider);
          if (!slider.vars.animationLoop) { slider.pause(); }
        }

        
        if (!fade) {
          var dimension = (vertical) ? slider.slides.filter(':first').height() : slider.computedW,
              margin, slideString, calcNext;

          
          if (carousel) {
            
            margin = slider.vars.itemMargin;
            calcNext = ((slider.itemW + margin) * slider.move) * slider.animatingTo;
            slideString = (calcNext > slider.limit && slider.visible !== 1) ? slider.limit : calcNext;
          } else if (slider.currentSlide === 0 && target === slider.count - 1 && slider.vars.animationLoop && slider.direction !== "next") {
            slideString = (reverse) ? (slider.count + slider.cloneOffset) * dimension : 0;
          } else if (slider.currentSlide === slider.last && target === 0 && slider.vars.animationLoop && slider.direction !== "prev") {
            slideString = (reverse) ? 0 : (slider.count + 1) * dimension;
          } else {
            slideString = (reverse) ? ((slider.count - 1) - target + slider.cloneOffset) * dimension : (target + slider.cloneOffset) * dimension;
          }
          slider.setProps(slideString, "", slider.vars.animationSpeed);
          if (slider.transitions) {
            if (!slider.vars.animationLoop || !slider.atEnd) {
              slider.animating = false;
              slider.currentSlide = slider.animatingTo;
            }
            
            
            slider.container.unbind("webkitTransitionEnd transitionend");
            slider.container.bind("webkitTransitionEnd transitionend", function() {
              clearTimeout(slider.ensureAnimationEnd);
              slider.wrapup(dimension);
            });

            
            clearTimeout(slider.ensureAnimationEnd);
            slider.ensureAnimationEnd = setTimeout(function() {
              slider.wrapup(dimension);
            }, slider.vars.animationSpeed + 100);

          } else {
            slider.container.animate(slider.args, slider.vars.animationSpeed, slider.vars.easing, function(){
              slider.wrapup(dimension);
            });
          }
        } else { 
          if (!touch) {
            
            slider.slides.eq(slider.currentSlide).css({"zIndex": 1}).animate({"opacity": 0}, slider.vars.animationSpeed, slider.vars.easing);
            slider.slides.eq(target).css({"zIndex": 2}).animate({"opacity": 1}, slider.vars.animationSpeed, slider.vars.easing, slider.wrapup);

          } else {
            slider.slides.eq(slider.currentSlide).css({ "opacity": 0, "zIndex": 1 });
            slider.slides.eq(target).css({ "opacity": 1, "zIndex": 2 });
            slider.wrapup(dimension);
          }
        }
        
        if (slider.vars.smoothHeight) { methods.smoothHeight(slider.vars.animationSpeed); }
      }
    };
    slider.wrapup = function(dimension) {
      
      if (!fade && !carousel) {
        if (slider.currentSlide === 0 && slider.animatingTo === slider.last && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpEnd");
        } else if (slider.currentSlide === slider.last && slider.animatingTo === 0 && slider.vars.animationLoop) {
          slider.setProps(dimension, "jumpStart");
        }
      }
      slider.animating = false;
      slider.currentSlide = slider.animatingTo;
      
      slider.vars.after(slider);
    };

    
    slider.animateSlides = function() {
      if (!slider.animating && focused ) { slider.flexAnimate(slider.getTarget("next")); }
    };
    

    slider.pause = function() {
      clearInterval(slider.animatedSlides);
      slider.animatedSlides = null;
      slider.playing = false;
      
      if (slider.vars.pausePlay) { methods.pausePlay.update("play"); }
      
      if (slider.syncExists) { methods.sync("pause"); }
    };
    
    slider.play = function() {
      if (slider.playing) { clearInterval(slider.animatedSlides); }
      slider.animatedSlides = slider.animatedSlides || setInterval(slider.animateSlides, slider.vars.slideshowSpeed);
      slider.started = slider.playing = true;
      
      if (slider.vars.pausePlay) { methods.pausePlay.update("pause"); }
      
      if (slider.syncExists) { methods.sync("play"); }
    };
    
    slider.stop = function () {
      slider.pause();
      slider.stopped = true;
    };
    slider.canAdvance = function(target, fromNav) {
      
      var last = (asNav) ? slider.pagingCount - 1 : slider.last;
      return (fromNav) ? true :
             (asNav && slider.currentItem === slider.count - 1 && target === 0 && slider.direction === "prev") ? true :
             (asNav && slider.currentItem === 0 && target === slider.pagingCount - 1 && slider.direction !== "next") ? false :
             (target === slider.currentSlide && !asNav) ? false :
             (slider.vars.animationLoop) ? true :
             (slider.atEnd && slider.currentSlide === 0 && target === last && slider.direction !== "next") ? false :
             (slider.atEnd && slider.currentSlide === last && target === 0 && slider.direction === "next") ? false :
             true;
    };
    slider.getTarget = function(dir) {
      slider.direction = dir;
      if (dir === "next") {
        return (slider.currentSlide === slider.last) ? 0 : slider.currentSlide + 1;
      } else {
        return (slider.currentSlide === 0) ? slider.last : slider.currentSlide - 1;
      }
    };

    
    slider.setProps = function(pos, special, dur) {
      var target = (function() {
        var posCheck = (pos) ? pos : ((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo,
            posCalc = (function() {
              if (carousel) {
                return (special === "setTouch") ? pos :
                       (reverse && slider.animatingTo === slider.last) ? 0 :
                       (reverse) ? slider.limit - (((slider.itemW + slider.vars.itemMargin) * slider.move) * slider.animatingTo) :
                       (slider.animatingTo === slider.last) ? slider.limit : posCheck;
              } else {
                switch (special) {
                  case "setTotal": return (reverse) ? ((slider.count - 1) - slider.currentSlide + slider.cloneOffset) * pos : (slider.currentSlide + slider.cloneOffset) * pos;
                  case "setTouch": return (reverse) ? pos : pos;
                  case "jumpEnd": return (reverse) ? pos : slider.count * pos;
                  case "jumpStart": return (reverse) ? slider.count * pos : pos;
                  default: return pos;
                }
              }
            }());

            return (posCalc * -1) + "px";
          }());

      if (slider.transitions) {
        target = (vertical) ? "translate3d(0," + target + ",0)" : "translate3d(" + target + ",0,0)";
        dur = (dur !== undefined) ? (dur/1000) + "s" : "0s";
        slider.container.css("-" + slider.pfx + "-transition-duration", dur);
         slider.container.css("transition-duration", dur);
      }

      slider.args[slider.prop] = target;
      if (slider.transitions || dur === undefined) { slider.container.css(slider.args); }

      slider.container.css('transform',target);
    };

    slider.setup = function(type) {
      
      if (!fade) {
        var sliderOffset, arr;

        if (type === "init") {
          slider.viewport = $('<div class="' + namespace + 'viewport"></div>').css({"overflow": "hidden", "position": "relative"}).appendTo(slider).append(slider.container);
          
          slider.cloneCount = 0;
          slider.cloneOffset = 0;
          
          if (reverse) {
            arr = $.makeArray(slider.slides).reverse();
            slider.slides = $(arr);
            slider.container.empty().append(slider.slides);
          }
        }
        
        if (slider.vars.animationLoop && !carousel) {
          slider.cloneCount = 2;
          slider.cloneOffset = 1;
          
          if (type !== "init") { slider.container.find('.clone').remove(); }
          slider.container.append(methods.uniqueID(slider.slides.first().clone().addClass('clone')).attr('aria-hidden', 'true'))
                          .prepend(methods.uniqueID(slider.slides.last().clone().addClass('clone')).attr('aria-hidden', 'true'));
        }
        slider.newSlides = $(slider.vars.selector, slider);

        sliderOffset = (reverse) ? slider.count - 1 - slider.currentSlide + slider.cloneOffset : slider.currentSlide + slider.cloneOffset;
        
        if (vertical && !carousel) {
          slider.container.height((slider.count + slider.cloneCount) * 200 + "%").css("position", "absolute").width("100%");
          setTimeout(function(){
            slider.newSlides.css({"display": "block"});
            slider.doMath();
            slider.viewport.height(slider.h);
            slider.setProps(sliderOffset * slider.h, "init");
          }, (type === "init") ? 100 : 0);
        } else {
          slider.container.width((slider.count + slider.cloneCount) * 200 + "%");
          slider.setProps(sliderOffset * slider.computedW, "init");
          setTimeout(function(){
            slider.doMath();
            slider.newSlides.css({"width": slider.computedW, "float": "left", "display": "block"});
            
            if (slider.vars.smoothHeight) { methods.smoothHeight(); }
          }, (type === "init") ? 100 : 0);
        }
      } else { 
        slider.slides.css({"width": "100%", "float": "left", "marginRight": "-100%", "position": "relative"});
        if (type === "init") {
          if (!touch) {
            
            if (slider.vars.fadeFirstSlide == false) {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).css({"opacity": 1});
            } else {
              slider.slides.css({ "opacity": 0, "display": "block", "zIndex": 1 }).eq(slider.currentSlide).css({"zIndex": 2}).animate({"opacity": 1},slider.vars.animationSpeed,slider.vars.easing);
            }
          } else {
            slider.slides.css({ "opacity": 0, "display": "block", "webkitTransition": "opacity " + slider.vars.animationSpeed / 1000 + "s ease", "zIndex": 1 }).eq(slider.currentSlide).css({ "opacity": 1, "zIndex": 2});
          }
        }
        
        if (slider.vars.smoothHeight) { methods.smoothHeight(); }
      }
      
      
      if (!carousel) { slider.slides.removeClass(namespace + "active-slide").eq(slider.currentSlide).addClass(namespace + "active-slide"); }

      
      slider.vars.init(slider);
    };

    slider.doMath = function() {
      var slide = slider.slides.first(),
          slideMargin = slider.vars.itemMargin,
          minItems = slider.vars.minItems,
          maxItems = slider.vars.maxItems;

      slider.w = (slider.viewport===undefined) ? slider.width() : slider.viewport.width();
      slider.h = slide.height();
      slider.boxPadding = slide.outerWidth() - slide.width();

      
      if (carousel) {
        slider.itemT = slider.vars.itemWidth + slideMargin;
        slider.minW = (minItems) ? minItems * slider.itemT : slider.w;
        slider.maxW = (maxItems) ? (maxItems * slider.itemT) - slideMargin : slider.w;
        slider.itemW = (slider.minW > slider.w) ? (slider.w - (slideMargin * (minItems - 1)))/minItems :
                       (slider.maxW < slider.w) ? (slider.w - (slideMargin * (maxItems - 1)))/maxItems :
                       (slider.vars.itemWidth > slider.w) ? slider.w : slider.vars.itemWidth;

        slider.visible = Math.floor(slider.w/(slider.itemW));
        slider.move = (slider.vars.move > 0 && slider.vars.move < slider.visible ) ? slider.vars.move : slider.visible;
        slider.pagingCount = Math.ceil(((slider.count - slider.visible)/slider.move) + 1);
        slider.last =  slider.pagingCount - 1;
        slider.limit = (slider.pagingCount === 1) ? 0 :
                       (slider.vars.itemWidth > slider.w) ? (slider.itemW * (slider.count - 1)) + (slideMargin * (slider.count - 1)) : ((slider.itemW + slideMargin) * slider.count) - slider.w - slideMargin;
      } else {
        slider.itemW = slider.w;
        slider.pagingCount = slider.count;
        slider.last = slider.count - 1;
      }
      slider.computedW = slider.itemW - slider.boxPadding;
    };

    slider.update = function(pos, action) {
      slider.doMath();

      
      if (!carousel) {
        if (pos < slider.currentSlide) {
          slider.currentSlide += 1;
        } else if (pos <= slider.currentSlide && pos !== 0) {
          slider.currentSlide -= 1;
        }
        slider.animatingTo = slider.currentSlide;
      }

      
      if (slider.vars.controlNav && !slider.manualControls) {
        if ((action === "add" && !carousel) || slider.pagingCount > slider.controlNav.length) {
          methods.controlNav.update("add");
        } else if ((action === "remove" && !carousel) || slider.pagingCount < slider.controlNav.length) {
          if (carousel && slider.currentSlide > slider.last) {
            slider.currentSlide -= 1;
            slider.animatingTo -= 1;
          }
          methods.controlNav.update("remove", slider.last);
        }
      }
      
      if (slider.vars.directionNav) { methods.directionNav.update(); }

    };

    slider.addSlide = function(obj, pos) {
      var $obj = $(obj);

      slider.count += 1;
      slider.last = slider.count - 1;

      
      if (vertical && reverse) {
        (pos !== undefined) ? slider.slides.eq(slider.count - pos).after($obj) : slider.container.prepend($obj);
      } else {
        (pos !== undefined) ? slider.slides.eq(pos).before($obj) : slider.container.append($obj);
      }

      
      slider.update(pos, "add");

      
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      
      slider.setup();

      
      slider.vars.added(slider);
    };
    slider.removeSlide = function(obj) {
      var pos = (isNaN(obj)) ? slider.slides.index($(obj)) : obj;

      
      slider.count -= 1;
      slider.last = slider.count - 1;

      
      if (isNaN(obj)) {
        $(obj, slider.slides).remove();
      } else {
        (vertical && reverse) ? slider.slides.eq(slider.last).remove() : slider.slides.eq(obj).remove();
      }

      
      slider.doMath();
      slider.update(pos, "remove");

      
      slider.slides = $(slider.vars.selector + ':not(.clone)', slider);
      
      slider.setup();

      
      slider.vars.removed(slider);
    };

    
    methods.init();
  };

  
  $( window ).blur( function ( e ) {
    focused = false;
  }).focus( function ( e ) {
    focused = true;
  });

  
  $.flexslider.defaults = {
    namespace: "flex-",             
    selector: ".slides > li",       
    animation: "fade",              
    easing: "swing",                
    direction: "horizontal",        
    reverse: false,                 
    animationLoop: true,            
    smoothHeight: false,            
    startAt: 0,                     
    slideshow: true,                
    slideshowSpeed: 7000,           
    animationSpeed: 600,            
    initDelay: 0,                   
    randomize: false,               
    fadeFirstSlide: true,           
    thumbCaptions: false,           

    pauseOnAction: true,            
    pauseOnHover: false,            
    pauseInvisible: true,   		
    useCSS: true,                   
    touch: true,                    
    video: false,                   

    controlNav: true,               
    directionNav: true,             
    prevText: "",           
    nextText: "",              

    keyboard: true, 
    multipleKeyboard: false,
    mousewheel: false,      
    pausePlay: false,       
    pauseText: "Pause",     
    playText: "Play",       


    controlsContainer: "",          
    manualControls: "",             
    customDirectionNav: "",         
    sync: "",                       
    asNavFor: "",                   


    itemWidth: 0,
    itemMargin: 0,
    minItems: 1,  
    maxItems: 0,  
    move: 0,      
    allowOneSlide: true,          


    start: function(){},            
    before: function(){},           
    after: function(){},            
    end: function(){},              
    added: function(){},            
    removed: function(){},          
    init: function() {}             
  };


  $.fn.flexslider = function(options) {
    if (options === undefined) { options = {}; }

    if (typeof options === "object") {
      return this.each(function() {
        var $this = $(this),
            selector = (options.selector) ? options.selector : ".slides > li",
            $slides = $this.find(selector);

      if ( ( $slides.length === 1 && options.allowOneSlide === true ) || $slides.length === 0 ) {
          $slides.fadeIn(400);
          if (options.start) { options.start($this); }
        } else if ($this.data('flexslider') === undefined) {
          new $.flexslider(this, options);
        }
      });
    } else {
      
      var $slider = $(this).data('flexslider');
      switch (options) {
        case "play": $slider.play(); break;
        case "pause": $slider.pause(); break;
        case "stop": $slider.stop(); break;
        case "next": $slider.flexAnimate($slider.getTarget("next"), true); break;
        case "prev":
        case "previous": $slider.flexAnimate($slider.getTarget("prev"), true); break;
        default: if (typeof options === "number") { $slider.flexAnimate(options, true); }
      }
    }
  };
})(jQuery);


function onVersionChanged(version) {

	var core1 = 'core-1.0';
	var core2 = 'core-2.0';
	
	var connect1 = 'connect-1.0';
	var connect2 = 'connect-2.0';
	
	var hybrid1 = 'hybrid-1.0';
	var hybrid2 = 'hybrid-2.0';
	
	var selectedVersion = version.value;
	
	if(selectedVersion == core1) {
		window.location = '../core/home-v1.0.html';
	} else if(selectedVersion == core2) {
		window.location = '../core/home.html';
	}
	
	else if(selectedVersion == connect1) {
		window.location = '../core/home-v1.0.html';
	} else if(selectedVersion == connect2) {
		window.location = '../core/home.html';
	}
	
	else if(selectedVersion == hybrid1) {
		window.location = '../core/home-v1.0.html';
	} else if(selectedVersion == hybrid2) {
		window.location = '../core/home.html';
	}
}


function loadWiki(title, subMenus, links) {
	
	var docsContent = document.getElementById('docs-content');
	docsContent.innerHTML = '';
	docsContent.innerHTML += '<h1>' + title + '</h1>';
	docsContent.innerHTML += '<ul>';
	
	if(subMenus != undefined) {
		
		for(var i = 0;i < subMenus.length;i++) {
			docsContent.innerHTML += "<li><a href='#" + subMenus[i] + "'>" + subMenus[i] + "</a></li>";
		}
	}

	docsContent.innerHTML += '</ul>';
	docsContent.innerHTML += '<p class=seprator>';
	
	$("#docs-content").LoadingOverlay("show");
	
	if(links != undefined && links != null && links.length > 0) {
		getWiki(links[0], 0);
	}
	
	function getWiki(link, index) {
	
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.onreadystatechange = function() {
		  
		  	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
		  		$("#docs-content").LoadingOverlay("hide");
				docsContent.innerHTML += Markdown.toHTML(xmlhttp.responseText);
				
				if(links.length > ++index) {
					getWiki(links[index], index++);
				} 
			}
		}  
		
		xmlhttp.open('GET', link, true);
		xmlhttp.send();
	}
}

function showDocsMenu() {
	
	var documentation = document.getElementById('documentation');
	if ($('#documentation').hasClass('nav-expanded')) {
		
		$('#documentation').removeClass('nav-expanded');
    	$('.docs-show').html('Navigate');
		
    } else {
    	$('#documentation').addClass('nav-expanded');
		$('.docs-show').html('Close');
    }

    return false;  
}

function showDocumentation(docs) {
	
	hideSample();
	hideApi();
	
	$(docs).addClass('tab-background');
	
	var docTab = document.getElementById('docTab');
	docTab.style.display = 'block';
	
}

function hideDocumentation() {
	$('#docs>ul li>a').removeClass('tab-background');
	
	var docTab = document.getElementById('docTab');
	docTab.style.display = 'none';
}

function showSample(sample) {
	
	hideDocumentation();
	hideApi();
	
	$(sample).addClass('tab-background');
	
	var sampleTab = document.getElementById('sampleTab');
	sampleTab.style.display = 'block';
}

function hideSample() {
	
	$('#docs>ul li>a').removeClass('tab-background');
	
	var sampleTab = document.getElementById('sampleTab');
	sampleTab.style.display = 'none';
}

function showApi(api) {
	
	hideDocumentation();
	hideSample();
	
	$(api).addClass('tab-background');
	
	var apiTab = document.getElementById('apiTab');
	apiTab.style.display = 'block';
}

function hideApi() {
	
	$('#docs>ul li>a').removeClass('tab-background');
	
	var apiTab = document.getElementById('apiTab');
	apiTab.style.display = 'none';
}


  var MarkdownHelpers = {};

  function mk_block_toSource() {
    return "Markdown.mk_block( " +
            uneval(this.toString()) +
            ", " +
            uneval(this.trailing) +
            ", " +
            uneval(this.lineNumber) +
            " )";
  }

  
  function mk_block_inspect() {
    var util = require("util");
    return "Markdown.mk_block( " +
            util.inspect(this.toString()) +
            ", " +
            util.inspect(this.trailing) +
            ", " +
            util.inspect(this.lineNumber) +
            " )";

  }

  MarkdownHelpers.mk_block = function(block, trail, line) {
    
    if ( arguments.length === 1 )
      trail = "\n\n";

    
    /* jshint -W053 */
    var s = new String(block);
    s.trailing = trail;
    
    s.inspect = mk_block_inspect;
    s.toSource = mk_block_toSource;

    if ( line !== undefined )
      s.lineNumber = line;

    return s;
  };


  var isArray = MarkdownHelpers.isArray = Array.isArray || function(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };

  
  if ( Array.prototype.forEach ) {
    MarkdownHelpers.forEach = function forEach( arr, cb, thisp ) {
      return arr.forEach( cb, thisp );
    };
  }
  else {
    MarkdownHelpers.forEach = function forEach(arr, cb, thisp) {
      for (var i = 0; i < arr.length; i++)
        cb.call(thisp || arr, arr[i], i, arr);
    };
  }

  MarkdownHelpers.isEmpty = function isEmpty( obj ) {
    for ( var key in obj ) {
      if ( hasOwnProperty.call( obj, key ) )
        return false;
    }
    return true;
  };

  MarkdownHelpers.extract_attr = function extract_attr( jsonml ) {
    return isArray(jsonml)
        && jsonml.length > 1
        && typeof jsonml[ 1 ] === "object"
        && !( isArray(jsonml[ 1 ]) )
        ? jsonml[ 1 ]
        : undefined;
  };




 /**
   *  class Markdown
   *
   *  Markdown processing in Javascript done right. We have very particular views
   *  on what constitutes 'right' which include:
   *
   *  - produces well-formed HTML (this means that em and strong nesting is
   *    important)
   *
   *  - has an intermediate representation to allow processing of parsed data (We
   *    in fact have two, both as [JsonML]: a markdown tree and an HTML tree).
   *
   *  - is easily extensible to add new dialects without having to rewrite the
   *    entire parsing mechanics
   *
   *  - has a good test suite
   *
   *  This implementation fulfills all of these (except that the test suite could
   *  do with expanding to automatically run all the fixtures from other Markdown
   *  implementations.)
   *
   *  ##### Intermediate Representation
   *
   *  *TODO* Talk about this :) Its JsonML, but document the node names we use.
   *
   *  [JsonML]: http://jsonml.org/ "JSON Markup Language"
   **/
  var Markdown = function(dialect) {
    switch (typeof dialect) {
    case "undefined":
      this.dialect = Markdown.dialects.Gruber;
      break;
    case "object":
      this.dialect = dialect;
      break;
    default:
      if ( dialect in Markdown.dialects )
        this.dialect = Markdown.dialects[dialect];
      else
        throw new Error("Unknown Markdown dialect '" + String(dialect) + "'");
      break;
    }
    this.em_state = [];
    this.strong_state = [];
    this.debug_indent = "";
  };

  /**
   * Markdown.dialects
   *
   * Namespace of built-in dialects.
   **/
  Markdown.dialects = {};




  
  var mk_block = Markdown.mk_block = MarkdownHelpers.mk_block,
      isArray = MarkdownHelpers.isArray;

  /**
   *  parse( markdown, [dialect] ) -> JsonML
   *  - markdown (String): markdown string to parse
   *  - dialect (String | Dialect): the dialect to use, defaults to gruber
   *
   *  Parse `markdown` and return a markdown document as a Markdown.JsonML tree.
   **/
  Markdown.parse = function( source, dialect ) {
    
    var md = new Markdown( dialect );
    return md.toTree( source );
  };

  function count_lines( str ) {
    var n = 0,
        i = -1;
    while ( ( i = str.indexOf("\n", i + 1) ) !== -1 )
      n++;
    return n;
  }

  
  Markdown.prototype.split_blocks = function splitBlocks( input ) {
    input = input.replace(/(\r\n|\n|\r)/g, "\n");
    
    
    var re = /([\s\S]+?)($|\n#|\n(?:\s*\n|$)+)/g,
        blocks = [],
        m;

    var line_no = 1;

    if ( ( m = /^(\s*\n)/.exec(input) ) !== null ) {
      
      line_no += count_lines( m[0] );
      re.lastIndex = m[0].length;
    }

    while ( ( m = re.exec(input) ) !== null ) {
      if (m[2] === "\n#") {
        m[2] = "\n";
        re.lastIndex--;
      }
      blocks.push( mk_block( m[1], m[2], line_no ) );
      line_no += count_lines( m[0] );
    }

    return blocks;
  };

  /**
   *  Markdown#processBlock( block, next ) -> undefined | [ JsonML, ... ]
   *  - block (String): the block to process
   *  - next (Array): the following blocks
   *
   * Process `block` and return an array of JsonML nodes representing `block`.
   *
   * It does this by asking each block level function in the dialect to process
   * the block until one can. Succesful handling is indicated by returning an
   * array (with zero or more JsonML nodes), failure by a false value.
   *
   * Blocks handlers are responsible for calling [[Markdown#processInline]]
   * themselves as appropriate.
   *
   * If the blocks were split incorrectly or adjacent blocks need collapsing you
   * can adjust `next` in place using shift/splice etc.
   *
   * If any of this default behaviour is not right for the dialect, you can
   * define a `__call__` method on the dialect that will get invoked to handle
   * the block processing.
   */
  Markdown.prototype.processBlock = function processBlock( block, next ) {
    var cbs = this.dialect.block,
        ord = cbs.__order__;

    if ( "__call__" in cbs )
      return cbs.__call__.call(this, block, next);

    for ( var i = 0; i < ord.length; i++ ) {
      
      var res = cbs[ ord[i] ].call( this, block, next );
      if ( res ) {
        
        if ( !isArray(res) || ( res.length > 0 && !( isArray(res[0]) ) ) )
          this.debug(ord[i], "didn't return a proper array");
        
        return res;
      }
    }

    
    return [];
  };

  Markdown.prototype.processInline = function processInline( block ) {
    return this.dialect.inline.__call__.call( this, String( block ) );
  };

  /**
   *  Markdown#toTree( source ) -> JsonML
   *  - source (String): markdown source to parse
   *
   *  Parse `source` into a JsonML tree representing the markdown document.
   **/
  
  Markdown.prototype.toTree = function toTree( source, custom_root ) {
    var blocks = source instanceof Array ? source : this.split_blocks( source );

    
    var old_tree = this.tree;
    try {
      this.tree = custom_root || this.tree || [ "markdown" ];

      blocks_loop:
      while ( blocks.length ) {
        var b = this.processBlock( blocks.shift(), blocks );

        
        if ( !b.length )
          continue blocks_loop;

        this.tree.push.apply( this.tree, b );
      }
      return this.tree;
    }
    finally {
      if ( custom_root )
        this.tree = old_tree;
    }
  };

  
  Markdown.prototype.debug = function () {
    var args = Array.prototype.slice.call( arguments);
    args.unshift(this.debug_indent);
    if ( typeof print !== "undefined" )
      print.apply( print, args );
    if ( typeof console !== "undefined" && typeof console.log !== "undefined" )
      console.log.apply( null, args );
  };

  Markdown.prototype.loop_re_over_block = function( re, block, cb ) {
    
    var m,
        b = block.valueOf();

    while ( b.length && (m = re.exec(b) ) !== null ) {
      b = b.substr( m[0].length );
      cb.call(this, m);
    }
    return b;
  };

  
  Markdown.buildBlockOrder = function(d) {
    var ord = [];
    for ( var i in d ) {
      if ( i === "__order__" || i === "__call__" )
        continue;
      ord.push( i );
    }
    d.__order__ = ord;
  };

  
  Markdown.buildInlinePatterns = function(d) {
    var patterns = [];

    for ( var i in d ) {
      
      if ( i.match( /^__.*__$/) )
        continue;
      var l = i.replace( /([\\.*+?|()\[\]{}])/g, "\\$1" )
               .replace( /\n/, "\\n" );
      patterns.push( i.length === 1 ? l : "(?:" + l + ")" );
    }

    patterns = patterns.join("|");
    d.__patterns__ = patterns;
    

    var fn = d.__call__;
    d.__call__ = function(text, pattern) {
      if ( pattern !== undefined )
        return fn.call(this, text, pattern);
      else
        return fn.call(this, text, patterns);
    };
  };




  var extract_attr = MarkdownHelpers.extract_attr;

  /**
   *  renderJsonML( jsonml[, options] ) -> String
   *  - jsonml (Array): JsonML array to render to XML
   *  - options (Object): options
   *
   *  Converts the given JsonML into well-formed XML.
   *
   *  The options currently understood are:
   *
   *  - root (Boolean): wether or not the root node should be included in the
   *    output, or just its children. The default `false` is to not include the
   *    root itself.
   */
  Markdown.renderJsonML = function( jsonml, options ) {
    options = options || {};
    
    options.root = options.root || false;

    var content = [];

    if ( options.root ) {
      content.push( render_tree( jsonml ) );
    }
    else {
      jsonml.shift(); 
      if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) )
        jsonml.shift(); 

      while ( jsonml.length )
        content.push( render_tree( jsonml.shift() ) );
    }

    return content.join( "\n\n" );
  };


  /**
   *  toHTMLTree( markdown, [dialect] ) -> JsonML
   *  toHTMLTree( md_tree ) -> JsonML
   *  - markdown (String): markdown string to parse
   *  - dialect (String | Dialect): the dialect to use, defaults to gruber
   *  - md_tree (Markdown.JsonML): parsed markdown tree
   *
   *  Turn markdown into HTML, represented as a JsonML tree. If a string is given
   *  to this function, it is first parsed into a markdown tree by calling
   *  [[parse]].
   **/
  Markdown.toHTMLTree = function toHTMLTree( input, dialect , options ) {

    
    if ( typeof input === "string" )
      input = this.parse( input, dialect );

    

    
    var attrs = extract_attr( input ),
        refs = {};

    if ( attrs && attrs.references )
      refs = attrs.references;

    var html = convert_tree_to_html( input, refs , options );
    merge_text_nodes( html );
    return html;
  };

  /**
   *  toHTML( markdown, [dialect]  ) -> String
   *  toHTML( md_tree ) -> String
   *  - markdown (String): markdown string to parse
   *  - md_tree (Markdown.JsonML): parsed markdown tree
   *
   *  Take markdown (either as a string or as a JsonML tree) and run it through
   *  [[toHTMLTree]] then turn it into a well-formated HTML fragment.
   **/
  Markdown.toHTML = function toHTML( source , dialect , options ) {
    var input = this.toHTMLTree( source , dialect , options );

    return this.renderJsonML( input );
  };


  function escapeHTML( text ) {
    return text.replace( /&/g, "&amp;" )
               .replace( /</g, "&lt;" )
               .replace( />/g, "&gt;" )
               .replace( /"/g, "&quot;" )
               .replace( /'/g, "&#39;" );
  }

  function render_tree( jsonml ) {
    
    if ( typeof jsonml === "string" )
      return escapeHTML( jsonml );

    var tag = jsonml.shift(),
        attributes = {},
        content = [];

    if ( jsonml.length && typeof jsonml[ 0 ] === "object" && !( jsonml[ 0 ] instanceof Array ) )
      attributes = jsonml.shift();

    while ( jsonml.length )
      content.push( render_tree( jsonml.shift() ) );

    var tag_attrs = "";
    for ( var a in attributes )
      tag_attrs += " " + a + '="' + escapeHTML( attributes[ a ] ) + '"';

    
    if ( tag === "img" || tag === "br" || tag === "hr" )
      return "<"+ tag + tag_attrs + "/>";
    else
      return "<"+ tag + tag_attrs + ">" + content.join( "" ) + "</" + tag + ">";
  }

  function convert_tree_to_html( tree, references, options ) {
  
    var i;
    options = options || {};

    
    var jsonml = tree.slice( 0 );

    if ( typeof options.preprocessTreeNode === "function" )
      jsonml = options.preprocessTreeNode(jsonml, references);

    
    var attrs = extract_attr( jsonml );
    if ( attrs ) {
      jsonml[ 1 ] = {};
      for ( i in attrs ) {
        jsonml[ 1 ][ i ] = attrs[ i ];
      }
      attrs = jsonml[ 1 ];
    }

    
    if ( typeof jsonml === "string" ) {
    	
    	if(jsonml == "`xml" || jsonml == "`" || jsonml == "`java" || jsonml == "`objective-c" || jsonml == "`c#" || jsonml == "`javascript") {
    		return "";
    	} else {
    		return jsonml;
    	}
    }

    
    switch ( jsonml[ 0 ] ) {
    case "header":
      jsonml[ 0 ] = "h" + jsonml[ 1 ].level + " class=seprator";
      delete jsonml[ 1 ].level;
      break;
    case "bulletlist":
      jsonml[ 0 ] = "ul";
      break;
    case "numberlist":
      jsonml[ 0 ] = "ol";
      break;
    case "listitem":
      jsonml[ 0 ] = "li";
      break;
    case "para":
      jsonml[ 0 ] = "p";
      break;
    case "markdown":
      jsonml[ 0 ] = "html";
      if ( attrs )
        delete attrs.references;
      break;
    case "code_block":
    
    	
      jsonml[ 0 ] = "pre class='prettyprint prettyprinted'";
      i = attrs ? 2 : 1;
      
      	
      var code = [ "code class=pln" ];
      code.push.apply( code, jsonml.splice( i, jsonml.length - i ) );
      jsonml[ i ] = code;
      break;
    case "inlinecode":
      jsonml[ 0 ] = "code";
      break;
    case "img":
      jsonml[ 1 ].src = jsonml[ 1 ].href;
      delete jsonml[ 1 ].href;
      break;
    case "linebreak":
      jsonml[ 0 ] = "br class=para";
      break;
    case "link":
      jsonml[ 0 ] = "a";
      break;
    case "link_ref":
      jsonml[ 0 ] = "a";

      
      var ref = references[ attrs.ref ];

      
      if ( ref ) {
        delete attrs.ref;

        
        attrs.href = ref.href;
        if ( ref.title )
          attrs.title = ref.title;

        
        delete attrs.original;
      }
      
      else {
        return attrs.original;
      }
      break;
    case "img_ref":
      jsonml[ 0 ] = "img";

      
      var ref = references[ attrs.ref ];

      
      if ( ref ) {
        delete attrs.ref;

        
        attrs.src = ref.href;
        if ( ref.title )
          attrs.title = ref.title;

        
        delete attrs.original;
      }
      
      else {
        return attrs.original;
      }
      break;
    }

    
    i = 1;

    
    if ( attrs ) {
      
      for ( var key in jsonml[ 1 ] ) {
        i = 2;
        break;
      }
      
      if ( i === 1 )
        jsonml.splice( i, 1 );
    }

    for ( ; i < jsonml.length; ++i ) {
      jsonml[ i ] = convert_tree_to_html( jsonml[ i ], references, options );
    }

    return jsonml;
  }


  
  function merge_text_nodes( jsonml ) {
    
    var i = extract_attr( jsonml ) ? 2 : 1;

    while ( i < jsonml.length ) {
      
      if ( typeof jsonml[ i ] === "string" ) {
        if ( i + 1 < jsonml.length && typeof jsonml[ i + 1 ] === "string" ) {
          
          jsonml[ i ] += jsonml.splice( i + 1, 1 )[ 0 ];
        }
        else {
          ++i;
        }
      }
      
      else {
        merge_text_nodes( jsonml[ i ] );
        ++i;
      }
    }
  };



  var DialectHelpers = {};
  DialectHelpers.inline_until_char = function( text, want ) {
    var consumed = 0,
        nodes = [];

    while ( true ) {
      if ( text.charAt( consumed ) === want ) {
        
        consumed++;
        return [ consumed, nodes ];
      }

      if ( consumed >= text.length ) {
        
        return null;
      }

      var res = this.dialect.inline.__oneElement__.call(this, text.substr( consumed ) );
      consumed += res[ 0 ];
      
      nodes.push.apply( nodes, res.slice( 1 ) );
    }
  };

  
  DialectHelpers.subclassDialect = function( d ) {
    function Block() {}
    Block.prototype = d.block;
    function Inline() {}
    Inline.prototype = d.inline;

    return { block: new Block(), inline: new Inline() };
  };




  var forEach = MarkdownHelpers.forEach,
      extract_attr = MarkdownHelpers.extract_attr,
      mk_block = MarkdownHelpers.mk_block,
      isEmpty = MarkdownHelpers.isEmpty,
      inline_until_char = DialectHelpers.inline_until_char;

  /**
   * Gruber dialect
   *
   * The default dialect that follows the rules set out by John Gruber's
   * markdown.pl as closely as possible. Well actually we follow the behaviour of
   * that script which in some places is not exactly what the syntax web page
   * says.
   **/
  var Gruber = {
    block: {
      atxHeader: function atxHeader( block, next ) {
        var m = block.match( /^(#{1,6})\s*(.*?)\s*#*\s*(?:\n|$)/ );

        if ( !m )
          return undefined;

        var header = [ "header", { level: m[ 1 ].length } ];
        Array.prototype.push.apply(header, this.processInline(m[ 2 ]));

        if ( m[0].length < block.length )
          next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

        return [ header ];
      },

      setextHeader: function setextHeader( block, next ) {
        var m = block.match( /^(.*)\n([-=])\2\2+(?:\n|$)/ );

        if ( !m )
          return undefined;

        var level = ( m[ 2 ] === "=" ) ? 1 : 2,
            header = [ "header", { level : level }, m[ 1 ] ];

        if ( m[0].length < block.length )
          next.unshift( mk_block( block.substr( m[0].length ), block.trailing, block.lineNumber + 2 ) );

        return [ header ];
      },

      code: function code( block, next ) {
        
        var ret = [],
            re = /^(?: {0,3}\t| {4})(.*)\n?/;

        
        if ( !block.match( re ) )
          return undefined;

        block_search:
        do {
          
          var b = this.loop_re_over_block(
                    re, block.valueOf(), function( m ) { ret.push( m[1] ); } );

          if ( b.length ) {
            
            next.unshift( mk_block(b, block.trailing) );
            break block_search;
          }
          else if ( next.length ) {
            
            if ( !next[0].match( re ) )
              break block_search;

            
            ret.push ( block.trailing.replace(/[^\n]/g, "").substring(2) );

            block = next.shift();
          }
          else {
            break block_search;
          }
        } while ( true );

        return [ [ "code_block", ret.join("\n") ] ];
      },

      horizRule: function horizRule( block, next ) {
        
        var m = block.match( /^(?:([\s\S]*?)\n)?[ \t]*([-_*])(?:[ \t]*\2){2,}[ \t]*(?:\n([\s\S]*))?$/ );

        if ( !m )
          return undefined;

        var jsonml = [ [ "hr" ] ];

        
        if ( m[ 1 ] ) {
          var contained = mk_block( m[ 1 ], "", block.lineNumber );
          if(this.toTree != undefined) {
	          jsonml.unshift.apply( jsonml, this.toTree( contained, [] ) );
          }
        }

        
        if ( m[ 3 ] )
          next.unshift( mk_block( m[ 3 ], block.trailing, block.lineNumber + 1 ) );

        return jsonml;
      },

      
      lists: (function( ) {
        
        var any_list = "[*+-]|\\d+\\.",
            bullet_list = /[*+-]/,
            
            is_list_re = new RegExp( "^( {0,3})(" + any_list + ")[ \t]+" ),
            indent_re = "(?: {0,3}\\t| {4})";

        
        
        function regex_for_depth( depth ) {

          return new RegExp(
            
            "(?:^(" + indent_re + "{0," + depth + "} {0,3})(" + any_list + ")\\s+)|" +
            
            "(^" + indent_re + "{0," + (depth-1) + "}[ ]{0,4})"
          );
        }
        function expand_tab( input ) {
          return input.replace( / {0,3}\t/g, "    " );
        }

        
        
        function add(li, loose, inline, nl) {
          if ( loose ) {
            li.push( [ "para" ].concat(inline) );
            return;
          }
          
          var add_to = li[li.length -1] instanceof Array && li[li.length - 1][0] === "para"
                     ? li[li.length -1]
                     : li;

          
          if ( nl && li.length > 1 )
            inline.unshift(nl);

          for ( var i = 0; i < inline.length; i++ ) {
            var what = inline[i],
                is_str = typeof what === "string";
            if ( is_str && add_to.length > 1 && typeof add_to[add_to.length-1] === "string" )
              add_to[ add_to.length-1 ] += what;
            else
              add_to.push( what );
          }
        }

        
        
        function get_contained_blocks( depth, blocks ) {

          var re = new RegExp( "^(" + indent_re + "{" + depth + "}.*?\\n?)*$" ),
              replace = new RegExp("^" + indent_re + "{" + depth + "}", "gm"),
              ret = [];

          while ( blocks.length > 0 ) {
            if ( re.exec( blocks[0] ) ) {
              var b = blocks.shift(),
                  
                  x = b.replace( replace, "");

              ret.push( mk_block( x, b.trailing, b.lineNumber ) );
            }
            else
              break;
          }
          return ret;
        }

        
        function paragraphify(s, i, stack) {
          var list = s.list;
          var last_li = list[list.length-1];

          if ( last_li[1] instanceof Array && last_li[1][0] === "para" )
            return;
          if ( i + 1 === stack.length ) {
            
            
            last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ) );
          }
          else {
            var sublist = last_li.pop();
            last_li.push( ["para"].concat( last_li.splice(1, last_li.length - 1) ), sublist );
          }
        }

        
        return function( block, next ) {
          var m = block.match( is_list_re );
          if ( !m )
            return undefined;

          function make_list( m ) {
            var list = bullet_list.exec( m[2] )
                     ? ["bulletlist"]
                     : ["numberlist"];

            stack.push( { list: list, indent: m[1] } );
            return list;
          }


          var stack = [], 
              list = make_list( m ),
              last_li,
              loose = false,
              ret = [ stack[0].list ],
              i;

          
          loose_search:
          while ( true ) {
            
            var lines = block.split( /(?=\n)/ );

            
            
            var li_accumulate = "", nl = "";

            
            tight_search:
            for ( var line_no = 0; line_no < lines.length; line_no++ ) {
              nl = "";
              var l = lines[line_no].replace(/^\n/, function(n) { nl = n; return ""; });


              
              var line_re = regex_for_depth( stack.length );

              m = l.match( line_re );
              

              
              if ( m[1] !== undefined ) {
                
                if ( li_accumulate.length ) {
                  add( last_li, loose, this.processInline( li_accumulate ), nl );
                  
                  loose = false;
                  li_accumulate = "";
                }

                m[1] = expand_tab( m[1] );
                var wanted_depth = Math.floor(m[1].length/4)+1;
                
                if ( wanted_depth > stack.length ) {
                  
                  
                  list = make_list( m );
                  last_li.push( list );
                  last_li = list[1] = [ "listitem" ];
                }
                else {
                  
                  
                  var found = false;
                  for ( i = 0; i < stack.length; i++ ) {
                    if ( stack[ i ].indent !== m[1] )
                      continue;

                    list = stack[ i ].list;
                    stack.splice( i+1, stack.length - (i+1) );
                    found = true;
                    break;
                  }

                  if (!found) {
                    
                    wanted_depth++;
                    if ( wanted_depth <= stack.length ) {
                      stack.splice(wanted_depth, stack.length - wanted_depth);
                      
                      list = stack[wanted_depth-1].list;
                      
                    }
                    else {
                      
                      list = make_list(m);
                      last_li.push(list);
                    }
                  }

                  
                  last_li = [ "listitem" ];
                  list.push(last_li);
                } 
                nl = "";
              }

              
              if ( l.length > m[0].length )
                li_accumulate += nl + l.substr( m[0].length );
            } 

            if ( li_accumulate.length ) {
              add( last_li, loose, this.processInline( li_accumulate ), nl );
              
              loose = false;
              li_accumulate = "";
            }

            
            
            var contained = get_contained_blocks( stack.length, next );

            
            if ( contained.length > 0 ) {
              
              forEach( stack, paragraphify, this);

              last_li.push.apply( last_li, this.toTree( contained, [] ) );
            }

            var next_block = next[0] && next[0].valueOf() || "";

            if ( next_block.match(is_list_re) || next_block.match( /^ / ) ) {
              block = next.shift();

              
              var hr = this.dialect.block.horizRule( block, next );

              if ( hr ) {
                ret.push.apply(ret, hr);
                break;
              }

              
              forEach( stack, paragraphify, this);

              loose = true;
              continue loose_search;
            }
            break;
          } 

          return ret;
        };
      })(),

      blockquote: function blockquote( block, next ) {
        if ( !block.match( /^>/m ) )
          return undefined;

        var jsonml = [];

        if ( block[ 0 ] !== ">" ) {
          var lines = block.split( /\n/ ),
              prev = [],
              line_no = block.lineNumber;

          
          while ( lines.length && lines[ 0 ][ 0 ] !== ">" ) {
            prev.push( lines.shift() );
            line_no++;
          }

          var abutting = mk_block( prev.join( "\n" ), "\n", block.lineNumber );
          jsonml.push.apply( jsonml, this.processBlock( abutting, [] ) );
          
          block = mk_block( lines.join( "\n" ), block.trailing, line_no );
        }


        
        while ( next.length && next[ 0 ][ 0 ] === ">" ) {
          var b = next.shift();
          block = mk_block( block + block.trailing + b, b.trailing, block.lineNumber );
        }

        
        var input = block.replace( /^> ?/gm, "" ),
            old_tree = this.tree,
            processedBlock = this.toTree( input, [ "blockquote" ] ),
            attr = extract_attr( processedBlock );

        
        if ( attr && attr.references ) {
          delete attr.references;
          
          if ( isEmpty( attr ) )
            processedBlock.splice( 1, 1 );
        }

        jsonml.push( processedBlock );
        return jsonml;
      },

      referenceDefn: function referenceDefn( block, next) {
        var re = /^\s*\[(.*?)\]:\s*(\S+)(?:\s+(?:(['"])(.*?)\3|\((.*?)\)))?\n?/;
        

        if ( !block.match(re) )
          return undefined;

        
        if ( !extract_attr( this.tree ) )
          this.tree.splice( 1, 0, {} );

        var attrs = extract_attr( this.tree );

        
        if ( attrs.references === undefined )
          attrs.references = {};

        var b = this.loop_re_over_block(re, block, function( m ) {

          if ( m[2] && m[2][0] === "<" && m[2][m[2].length-1] === ">" )
            m[2] = m[2].substring( 1, m[2].length - 1 );

          var ref = attrs.references[ m[1].toLowerCase() ] = {
            href: m[2]
          };

          if ( m[4] !== undefined )
            ref.title = m[4];
          else if ( m[5] !== undefined )
            ref.title = m[5];

        } );

        if ( b.length )
          next.unshift( mk_block( b, block.trailing ) );

        return [];
      },

      para: function para( block ) {
        
        return [ ["para"].concat( this.processInline( block ) ) ];
      }
    },

    inline: {

      __oneElement__: function oneElement( text, patterns_or_re, previous_nodes ) {
        var m,
            res;

        patterns_or_re = patterns_or_re || this.dialect.inline.__patterns__;
        var re = new RegExp( "([\\s\\S]*?)(" + (patterns_or_re.source || patterns_or_re) + ")" );

        m = re.exec( text );
        if (!m) {
          
          return [ text.length, text ];
        }
        else if ( m[1] ) {
          
          return [ m[1].length, m[1] ];
        }

        var res;
        if ( m[2] in this.dialect.inline ) {
          res = this.dialect.inline[ m[2] ].call(
                    this,
                    text.substr( m.index ), m, previous_nodes || [] );
        }
        
        res = res || [ m[2].length, m[2] ];
        return res;
      },

      __call__: function inline( text, patterns ) {

        var out = [],
            res;

        function add(x) {
          
          if ( typeof x === "string" && typeof out[out.length-1] === "string" )
            out[ out.length-1 ] += x;
          else
            out.push(x);
        }

        while ( text.length > 0 ) {
          res = this.dialect.inline.__oneElement__.call(this, text, patterns, out );
          text = text.substr( res.shift() );
          forEach(res, add );
        }

        return out;
      },

      
      
      "]": function () {},
      "}": function () {},

      __escape__ : /^\\[\\`\*_{}\[\]()#\+.!\-]/,

      "\\": function escaped( text ) {
        
        
        if ( this.dialect.inline.__escape__.exec( text ) )
          return [ 2, text.charAt( 1 ) ];
        else
          
          return [ 1, "\\" ];
      },

      "![": function image( text ) {

        var m = text.match( /^!\[(.*?)\][ \t]*\([ \t]*([^")]*?)(?:[ \t]+(["'])(.*?)\3)?[ \t]*\)/ );

        if ( m ) {
          if ( m[2] && m[2][0] === "<" && m[2][m[2].length-1] === ">" )
            m[2] = m[2].substring( 1, m[2].length - 1 );

          m[2] = this.dialect.inline.__call__.call( this, m[2], /\\/ )[0];

          var attrs = { alt: m[1], href: m[2] || "" };
          if ( m[4] !== undefined)
            attrs.title = m[4];

          return [ m[0].length, [ "img", attrs ] ];
        }

         
        m = text.match( /^!\[(.*?)\][ \t]*\[(.*?)\]/ );

        if ( m ) {
          
          return [ m[0].length, [ "img_ref", { alt: m[1], ref: m[2].toLowerCase(), original: m[0] } ] ];
        }

        
        return [ 2, "![" ];
      },

      "[": function link( text ) {

        var orig = String(text);
        
        var res = inline_until_char.call( this, text.substr(1), "]" );

        
        if ( !res )
          return [ 1, "[" ];

        var consumed = 1 + res[ 0 ],
            children = res[ 1 ],
            link,
            attrs;

        
        
        text = text.substr( consumed );

        
        var m = text.match( /^\s*\([ \t]*([^"']*)(?:[ \t]+(["'])(.*?)\2)?[ \t]*\)/ );
        if ( m ) {
          var url = m[1];
          consumed += m[0].length;

          if ( url && url[0] === "<" && url[url.length-1] === ">" )
            url = url.substring( 1, url.length - 1 );

          
          if ( !m[3] ) {
            var open_parens = 1; 
            for ( var len = 0; len < url.length; len++ ) {
              switch ( url[len] ) {
              case "(":
                open_parens++;
                break;
              case ")":
                if ( --open_parens === 0) {
                  consumed -= url.length - len;
                  url = url.substring(0, len);
                }
                break;
              }
            }
          }

          
          url = this.dialect.inline.__call__.call( this, url, /\\/ )[0];

          attrs = { href: url || "" };
          if ( m[3] !== undefined)
            attrs.title = m[3];

          link = [ "link", attrs ].concat( children );
          return [ consumed, link ];
        }

        
        
        m = text.match( /^\s*\[(.*?)\]/ );

        if ( m ) {

          consumed += m[ 0 ].length;

          
          attrs = { ref: ( m[ 1 ] || String(children) ).toLowerCase(),  original: orig.substr( 0, consumed ) };

          link = [ "link_ref", attrs ].concat( children );

          
          return [ consumed, link ];
        }

        
        
        if ( children.length === 1 && typeof children[0] === "string" ) {

          attrs = { ref: children[0].toLowerCase(),  original: orig.substr( 0, consumed ) };
          link = [ "link_ref", attrs, children[0] ];
          return [ consumed, link ];
        }

        
        return [ 1, "[" ];
      },


      "<": function autoLink( text ) {
        var m;

        if ( ( m = text.match( /^<(?:((https?|ftp|mailto):[^>]+)|(.*?@.*?\.[a-zA-Z]+))>/ ) ) !== null ) {
          if ( m[3] )
            return [ m[0].length, [ "link", { href: "mailto:" + m[3] }, m[3] ] ];
          else if ( m[2] === "mailto" )
            return [ m[0].length, [ "link", { href: m[1] }, m[1].substr("mailto:".length ) ] ];
          else
            return [ m[0].length, [ "link", { href: m[1] }, m[1] ] ];
        }

        return [ 1, "<" ];
      },

      "`": function inlineCode( text ) {
        
        var m = text.match( /(`+)(([\s\S]*?)\1)/ );

        if ( m && m[2] )
          return [ m[1].length + m[2].length, [ "inlinecode", m[3] ] ];
        else {
          
          return [ 1, "`" ];
        }
      },

      "  \n": function lineBreak() {
        return [ 3, [ "linebreak" ] ];
      }

    }
  };

  
  function strong_em( tag, md ) {

    var state_slot = tag + "_state",
        other_slot = tag === "strong" ? "em_state" : "strong_state";

    function CloseTag(len) {
      this.len_after = len;
      this.name = "close_" + md;
    }

    return function ( text ) {

      if ( this[state_slot][0] === md ) {
        
        
        this[state_slot].shift();

        
        return[ text.length, new CloseTag(text.length-md.length) ];
      }
      else {
        
        var other = this[other_slot].slice(),
            state = this[state_slot].slice();

        this[state_slot].unshift(md);

        

        
        var res = this.processInline( text.substr( md.length ) );
        

        var last = res[res.length - 1];

        

        var check = this[state_slot].shift();
        if ( last instanceof CloseTag ) {
          res.pop();
          
          var consumed = text.length - last.len_after;
          return [ consumed, [ tag ].concat(res) ];
        }
        else {
          
          this[other_slot] = other;
          this[state_slot] = state;

          
          return [ md.length, md ];
        }
      }
    }; 
  }

  Gruber.inline["**"] = strong_em("strong", "**");
  Gruber.inline["__"] = strong_em("strong", "__");
  Gruber.inline["*"]  = strong_em("em", "*");
  Gruber.inline["_"]  = strong_em("em", "_");

  Markdown.dialects.Gruber = Gruber;
  Markdown.buildBlockOrder ( Markdown.dialects.Gruber.block );
  Markdown.buildInlinePatterns( Markdown.dialects.Gruber.inline );



  var Maruku = DialectHelpers.subclassDialect( Gruber ),
      extract_attr = MarkdownHelpers.extract_attr,
      forEach = MarkdownHelpers.forEach;

  Maruku.processMetaHash = function processMetaHash( meta_string ) {
    var meta = split_meta_hash( meta_string ),
        attr = {};

    for ( var i = 0; i < meta.length; ++i ) {
      
      if ( /^#/.test( meta[ i ] ) )
        attr.id = meta[ i ].substring( 1 );
      
      else if ( /^\./.test( meta[ i ] ) ) {
        
        if ( attr["class"] )
          attr["class"] = attr["class"] + meta[ i ].replace( /./, " " );
        else
          attr["class"] = meta[ i ].substring( 1 );
      }
      
      else if ( /\=/.test( meta[ i ] ) ) {
        var s = meta[ i ].split( /\=/ );
        attr[ s[ 0 ] ] = s[ 1 ];
      }
    }

    return attr;
  };

  function split_meta_hash( meta_string ) {
    var meta = meta_string.split( "" ),
        parts = [ "" ],
        in_quotes = false;

    while ( meta.length ) {
      var letter = meta.shift();
      switch ( letter ) {
      case " " :
        
        if ( in_quotes )
          parts[ parts.length - 1 ] += letter;
        
        else
          parts.push( "" );
        break;
      case "'" :
      case '"' :
        
        in_quotes = !in_quotes;
        break;
      case "\\" :
        
        
        letter = meta.shift();
        /* falls through */
      default :
        parts[ parts.length - 1 ] += letter;
        break;
      }
    }

    return parts;
  }

  Maruku.block.document_meta = function document_meta( block ) {
    
    if ( block.lineNumber > 1 )
      return undefined;

    
    if ( ! block.match( /^(?:\w+:.*\n)*\w+:.*$/ ) )
      return undefined;

    
    if ( !extract_attr( this.tree ) )
      this.tree.splice( 1, 0, {} );

    var pairs = block.split( /\n/ );
    for ( var p in pairs ) {
      var m = pairs[ p ].match( /(\w+):\s*(.*)$/ ),
          key = m[ 1 ].toLowerCase(),
          value = m[ 2 ];

      this.tree[ 1 ][ key ] = value;
    }

    
    return [];
  };

  Maruku.block.block_meta = function block_meta( block ) {
    
    var m = block.match( /(^|\n) {0,3}\{:\s*((?:\\\}|[^\}])*)\s*\}$/ );
    if ( !m )
      return undefined;

    
    var attr = this.dialect.processMetaHash( m[ 2 ] ),
        hash;

    
    if ( m[ 1 ] === "" ) {
      var node = this.tree[ this.tree.length - 1 ];
      hash = extract_attr( node );

      
      if ( typeof node === "string" )
        return undefined;

      
      if ( !hash ) {
        hash = {};
        node.splice( 1, 0, hash );
      }

      
      for ( var a in attr )
        hash[ a ] = attr[ a ];

      
      return [];
    }

    
    var b = block.replace( /\n.*$/, "" ),
        result = this.processBlock( b, [] );

    
    hash = extract_attr( result[ 0 ] );
    if ( !hash ) {
      hash = {};
      result[ 0 ].splice( 1, 0, hash );
    }

    
    for ( var a in attr )
      hash[ a ] = attr[ a ];

    return result;
  };

  Maruku.block.definition_list = function definition_list( block, next ) {
    
    var tight = /^((?:[^\s:].*\n)+):\s+([\s\S]+)$/,
        list = [ "dl" ],
        i, m;

    
    if ( ( m = block.match( tight ) ) ) {
      
      var blocks = [ block ];
      while ( next.length && tight.exec( next[ 0 ] ) )
        blocks.push( next.shift() );

      for ( var b = 0; b < blocks.length; ++b ) {
        var m = blocks[ b ].match( tight ),
            terms = m[ 1 ].replace( /\n$/, "" ).split( /\n/ ),
            defns = m[ 2 ].split( /\n:\s+/ );

        

        for ( i = 0; i < terms.length; ++i )
          list.push( [ "dt", terms[ i ] ] );

        for ( i = 0; i < defns.length; ++i ) {
          
          list.push( [ "dd" ].concat( this.processInline( defns[ i ].replace( /(\n)\s+/, "$1" ) ) ) );
        }
      }
    }
    else {
      return undefined;
    }

    return [ list ];
  };

  
  Maruku.block.table = function table ( block ) {

    var _split_on_unescaped = function( s, ch ) {
      ch = ch || '\\s';
      if ( ch.match(/^[\\|\[\]{}?*.+^$]$/) )
        ch = '\\' + ch;
      var res = [ ],
          r = new RegExp('^((?:\\\\.|[^\\\\' + ch + '])*)' + ch + '(.*)'),
          m;
      while ( ( m = s.match( r ) ) ) {
        res.push( m[1] );
        s = m[2];
      }
      res.push(s);
      return res;
    };

    var leading_pipe = /^ {0,3}\|(.+)\n {0,3}\|\s*([\-:]+[\-| :]*)\n((?:\s*\|.*(?:\n|$))*)(?=\n|$)/,
        
        no_leading_pipe = /^ {0,3}(\S(?:\\.|[^\\|])*\|.*)\n {0,3}([\-:]+\s*\|[\-| :]*)\n((?:(?:\\.|[^\\|])*\|.*(?:\n|$))*)(?=\n|$)/,
        i,
        m;
    if ( ( m = block.match( leading_pipe ) ) ) {
      
      m[3] = m[3].replace(/^\s*\|/gm, '');
    } else if ( ! ( m = block.match( no_leading_pipe ) ) ) {
      return undefined;
    }

    var table = [ "table", [ "thead", [ "tr" ] ], [ "tbody" ] ];

    
    
    m[2] = m[2].replace(/\|\s*$/, '').split('|');

    
    var html_attrs = [ ];
    forEach (m[2], function (s) {
      if (s.match(/^\s*-+:\s*$/))
        html_attrs.push({align: "right"});
      else if (s.match(/^\s*:-+\s*$/))
        html_attrs.push({align: "left"});
      else if (s.match(/^\s*:-+:\s*$/))
        html_attrs.push({align: "center"});
      else
        html_attrs.push({});
    });

    
    m[1] = _split_on_unescaped(m[1].replace(/\|\s*$/, ''), '|');
    for (i = 0; i < m[1].length; i++) {
      table[1][1].push(['th', html_attrs[i] || {}].concat(
        this.processInline(m[1][i].trim())));
    }

    
    forEach (m[3].replace(/\|\s*$/mg, '').split('\n'), function (row) {
      var html_row = ['tr'];
      row = _split_on_unescaped(row, '|');
      for (i = 0; i < row.length; i++)
        html_row.push(['td', html_attrs[i] || {}].concat(this.processInline(row[i].trim())));
      table[2].push(html_row);
    }, this);

    return [table];
  };

  Maruku.inline[ "{:" ] = function inline_meta( text, matches, out ) {
    if ( !out.length )
      return [ 2, "{:" ];

    
    var before = out[ out.length - 1 ];

    if ( typeof before === "string" )
      return [ 2, "{:" ];

    
    var m = text.match( /^\{:\s*((?:\\\}|[^\}])*)\s*\}/ );

    
    if ( !m )
      return [ 2, "{:" ];

    
    var meta = this.dialect.processMetaHash( m[ 1 ] ),
        attr = extract_attr( before );

    if ( !attr ) {
      attr = {};
      before.splice( 1, 0, attr );
    }

    for ( var k in meta )
      attr[ k ] = meta[ k ];

    
    return [ m[ 0 ].length, "" ];
  };


  Markdown.dialects.Maruku = Maruku;
  Markdown.dialects.Maruku.inline.__escape__ = /^\\[\\`\*_{}\[\]()#\+.!\-|:]/;
  Markdown.buildBlockOrder ( Markdown.dialects.Maruku.block );
  Markdown.buildInlinePatterns( Markdown.dialects.Maruku.inline );


/***************************************************************************************************
LoadingOverlay - A flexible loading overlay jQuery plugin
	Author			: Gaspare Sganga
	Version			: 1.0
	License			: MIT
	Documentation	: http://gasparesganga.com/labs/jquery-loading-overlay
****************************************************************************************************/
(function($, undefined){	
	var _defaults = {
		color			: "rgba(255, 255, 255, 0.8)",
		image			: "../../images/loading.gif",
		maxSize			: "100px",
		minSize			: "20px",
		resizeInterval	: 0,
		size			: "50%"
	};
	
	$.LoadingOverlaySetup = function(settings){
		$.extend(true, _defaults, settings);
	};
	
	$.LoadingOverlay = function(action, options){
		switch (action.toLowerCase()) {
			case "show":
				var settings = $.extend(true, {}, _defaults, options);
				_Show("body", settings, true);
				break;
				
			case "hide":
				_Hide("body", options);
				break;
		}
	};
	
	$.fn.LoadingOverlay = function(action, options){
		switch (action.toLowerCase()) {
			case "show":
				var settings = $.extend(true, {}, _defaults, options);
				return this.each(function(){
					_Show(this, settings, false);
				});
				
			case "hide":
				return this.each(function(){
					_Hide(this, options);
				});
		}
	};
	
	
	function _Show(container, settings, fixed){
		container = $(container);
		var count = container.data("LoadingOverlayCount");
		if (count === undefined) count = 0;
		if (count == 0) {
			var overlay = $("<div>", {
				class	: "loadingoverlay",
				css 	: {
					"background-color"		: settings.color,
					"background-image"		: (settings.image ? "url("+settings.image+")" : "none"),
					"background-position"	: "center center",
					"background-repeat"		: "no-repeat"
				}
			});
			if (fixed) {
				overlay.css({
					"position"	: "fixed",
					"top"		: 0,
					"left"		: 0,
					"width"		: "100%",
					"height"	: "100%"
				});
			} else {
				overlay.css({
					"position"	: "absolute",
					"top"		: 0,
					"left"		: 0
				});
				_CalculateSize(container, overlay, settings);
				if (container.css("position") == "static") {
					overlay.css({
						"top"	: container.position().top  + parseInt(container.css("margin-top"))  + parseInt(container.css("border-top-width")),
						"left"	: container.position().left + parseInt(container.css("margin-left")) + parseInt(container.css("border-left-width"))
					});
				}
				if (settings.resizeInterval > 0) {
					var resizeIntervalId = setInterval(function(){
						_CalculateSize(container, overlay, settings);
					}, settings.resizeInterval);
					container.data("LoadingOverlayResizeIntervalId", resizeIntervalId);
				}
			}
			overlay.appendTo(container);
		}
		count++;
		container.data("LoadingOverlayCount", count);
	}
	
	function _Hide(container, force){
		container = $(container);
		var count	= container.data("LoadingOverlayCount");
		if (count === undefined) return;
		count--;
		if (force || count <= 0) {
			var resizeIntervalId = container.data("LoadingOverlayResizeIntervalId");
			if (resizeIntervalId) clearInterval(resizeIntervalId);
			container.removeData("LoadingOverlayCount").removeData("LoadingOverlayResizeIntervalId");
			container.children(".loadingoverlay").remove();
		} else {
			container.data("LoadingOverlayCount", count);
		}
	}
	
	function _CalculateSize(container, overlay, settings){
		var size = "auto";
		if (settings.size && settings.size != "auto") {
			var size = Math.min(container.innerWidth(), container.innerHeight()) * parseFloat(settings.size) / 100; 
			if (settings.maxSize && size > parseInt(settings.maxSize)) size = parseInt(settings.maxSize)+"px";
			if (settings.minSize && size < parseInt(settings.minSize)) size = parseInt(settings.minSize)+"px";
		}
		$(overlay).css({
			"width"				: container.innerWidth(),
			"height"			: container.innerHeight(),
			"background-size"	: size
		});
	}
	
}(jQuery));