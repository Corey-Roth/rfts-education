/*! jQuery v3.2.0 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.0",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if(ja.test(this.type)&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),null==d?void 0:d));
},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},holdReady:function(a){a?r.readyWait++:r.ready(!0)}}),r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*! jQuery UI - v1.11.2 - 2014-10-16
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, draggable.js, droppable.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js, menu.js, progressbar.js, resizable.js, selectable.js, selectmenu.js, slider.js, sortable.js, spinner.js, tabs.js, tooltip.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
(function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)
})(function(J){function w(c,d){var g,b,f,e=c.nodeName.toLowerCase();
return"area"===e?(g=c.parentNode,b=g.name,c.href&&b&&"map"===g.nodeName.toLowerCase()?(f=J("img[usemap='#"+b+"']")[0],!!f&&F(f)):!1):(/input|select|textarea|button|object/.test(e)?!c.disabled:"a"===e?c.href||d:d)&&F(c)
}function F(a){return J.expr.filters.visible(a)&&!J(a).parents().addBack().filter(function(){return"hidden"===J.css(this,"visibility")
}).length
}function x(c){for(var b,a;
c.length&&c[0]!==document;
){if(b=c.css("position"),("absolute"===b||"relative"===b||"fixed"===b)&&(a=parseInt(c.css("zIndex"),10),!isNaN(a)&&0!==a)){return a
}c=c.parent()
}return 0
}function C(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},J.extend(this._defaults,this.regional[""]),this.regional.en=J.extend(!0,{},this.regional[""]),this.regional["en-US"]=J.extend(!0,{},this.regional.en),this.dpDiv=N(J("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}function N(b){var a="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return b.delegate(a,"mouseout",function(){J(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&J(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&J(this).removeClass("ui-datepicker-next-hover")
}).delegate(a,"mouseover",B)
}function B(){J.datepicker._isDisabledDatepicker(k.inline?k.dpDiv.parent()[0]:k.input[0])||(J(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),J(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&J(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&J(this).addClass("ui-datepicker-next-hover"))
}function z(b,a){J.extend(b,a);
for(var c in a){null==a[c]&&(b[c]=a[c])
}return b
}function G(a){return function(){var b=this.element.val();
a.apply(this,arguments),this._refresh(),b!==this.element.val()&&this._trigger("change")
}
}J.ui=J.ui||{},J.extend(J.ui,{version:"1.11.2",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),J.fn.extend({scrollParent:function(d){var c=this.css("position"),e="absolute"===c,f=d?/(auto|scroll|hidden)/:/(auto|scroll)/,b=this.parents().filter(function(){var a=J(this);
return e&&"static"===a.css("position")?!1:f.test(a.css("overflow")+a.css("overflow-y")+a.css("overflow-x"))
}).eq(0);
return"fixed"!==c&&b.length?b:J(this[0].ownerDocument||document)
},uniqueId:function(){var a=0;
return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)
})
}
}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&J(this).removeAttr("id")
})
}}),J.extend(J.expr[":"],{data:J.expr.createPseudo?J.expr.createPseudo(function(a){return function(b){return !!J.data(b,a)
}
}):function(b,a,c){return !!J.data(b,c[3])
},focusable:function(a){return w(a,!isNaN(J.attr(a,"tabindex")))
},tabbable:function(a){var b=J.attr(a,"tabindex"),c=isNaN(b);
return(c||b>=0)&&w(a,!c)
}}),J("<a>").outerWidth(1).jquery||J.each(["Width","Height"],function(d,c){function e(m,l,n,h){return J.each(g,function(){l-=parseFloat(J.css(m,"padding"+this))||0,n&&(l-=parseFloat(J.css(m,"border"+this+"Width"))||0),h&&(l-=parseFloat(J.css(m,"margin"+this))||0)
}),l
}var g="Width"===c?["Left","Right"]:["Top","Bottom"],b=c.toLowerCase(),f={innerWidth:J.fn.innerWidth,innerHeight:J.fn.innerHeight,outerWidth:J.fn.outerWidth,outerHeight:J.fn.outerHeight};
J.fn["inner"+c]=function(a){return void 0===a?f["inner"+c].call(this):this.each(function(){J(this).css(b,e(this,a)+"px")
})
},J.fn["outer"+c]=function(a,h){return"number"!=typeof a?f["outer"+c].call(this,a):this.each(function(){J(this).css(b,e(this,a,!0,h)+"px")
})
}
}),J.fn.addBack||(J.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))
}),J("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(J.fn.removeData=function(a){return function(b){return arguments.length?a.call(this,J.camelCase(b)):a.call(this)
}
}(J.fn.removeData)),J.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),J.fn.extend({focus:function(a){return function(b,c){return"number"==typeof b?this.each(function(){var d=this;
setTimeout(function(){J(d).focus(),c&&c.call(d)
},b)
}):a.apply(this,arguments)
}
}(J.fn.focus),disableSelection:function(){var a="onselectstart" in document.createElement("div")?"selectstart":"mousedown";
return function(){return this.bind(a+".ui-disableSelection",function(b){b.preventDefault()
})
}
}(),enableSelection:function(){return this.unbind(".ui-disableSelection")
},zIndex:function(b){if(void 0!==b){return this.css("zIndex",b)
}if(this.length){for(var a,c,d=J(this[0]);
d.length&&d[0]!==document;
){if(a=d.css("position"),("absolute"===a||"relative"===a||"fixed"===a)&&(c=parseInt(d.css("zIndex"),10),!isNaN(c)&&0!==c)){return c
}d=d.parent()
}}return 0
}}),J.ui.plugin={add:function(d,c,e){var f,b=J.ui[d].prototype;
for(f in e){b.plugins[f]=b.plugins[f]||[],b.plugins[f].push([c,e[f]])
}},call:function(g,d,c,f){var h,b=g.plugins[d];
if(b&&(f||g.element[0].parentNode&&11!==g.element[0].parentNode.nodeType)){for(h=0;
b.length>h;
h++){g.options[b[h][0]]&&b[h][1].apply(g.element,c)
}}}};
var E=0,q=Array.prototype.slice;
J.cleanData=function(a){return function(c){var d,f,b;
for(b=0;
null!=(f=c[b]);
b++){try{d=J._data(f,"events"),d&&d.remove&&J(f).triggerHandler("remove")
}catch(e){}}a(c)
}
}(J.cleanData),J.widget=function(p,f,u){var d,m,c,b,g={},e=p.split(".")[0];
return p=p.split(".")[1],d=e+"-"+p,u||(u=f,f=J.Widget),J.expr[":"][d.toLowerCase()]=function(a){return !!J.data(a,d)
},J[e]=J[e]||{},m=J[e][p],c=J[e][p]=function(h,a){return this._createWidget?(arguments.length&&this._createWidget(h,a),void 0):new c(h,a)
},J.extend(c,m,{version:u.version,_proto:J.extend({},u),_childConstructors:[]}),b=new f,b.options=J.widget.extend({},b.options),J.each(u,function(a,h){return J.isFunction(h)?(g[a]=function(){var i=function(){return f.prototype[a].apply(this,arguments)
},l=function(n){return f.prototype[a].apply(this,n)
};
return function(){var r,o=this._super,n=this._superApply;
return this._super=i,this._superApply=l,r=h.apply(this,arguments),this._super=o,this._superApply=n,r
}
}(),void 0):(g[a]=h,void 0)
}),c.prototype=J.widget.extend(b,{widgetEventPrefix:m?b.widgetEventPrefix||p:p},g,{constructor:c,namespace:e,widgetName:p,widgetFullName:d}),m?(J.each(m._childConstructors,function(h,a){var l=a.prototype;
J.widget(l.namespace+"."+l.widgetName,c,a._proto)
}),delete m._childConstructors):f._childConstructors.push(c),J.widget.bridge(p,c),c
},J.widget.extend=function(d){for(var c,e,g=q.call(arguments,1),b=0,f=g.length;
f>b;
b++){for(c in g[b]){e=g[b][c],g[b].hasOwnProperty(c)&&void 0!==e&&(d[c]=J.isPlainObject(e)?J.isPlainObject(d[c])?J.widget.extend({},d[c],e):J.widget.extend({},e):e)
}}return d
},J.widget.bridge=function(b,a){var c=a.prototype.widgetFullName||b;
J.fn[b]=function(g){var d="string"==typeof g,f=q.call(arguments,1),e=this;
return g=!d&&f.length?J.widget.extend.apply(null,[g].concat(f)):g,d?this.each(function(){var l,h=J.data(this,c);
return"instance"===g?(e=h,!1):h?J.isFunction(h[g])&&"_"!==g.charAt(0)?(l=h[g].apply(h,f),l!==h&&void 0!==l?(e=l&&l.jquery?e.pushStack(l.get()):l,!1):void 0):J.error("no such method '"+g+"' for "+b+" widget instance"):J.error("cannot call methods on "+b+" prior to initialization; attempted to call method '"+g+"'")
}):this.each(function(){var h=J.data(this,c);
h?(h.option(g||{}),h._init&&h._init()):J.data(this,c,new a(g,this))
}),e
}
},J.Widget=function(){},J.Widget._childConstructors=[],J.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(b,a){a=J(a||this.defaultElement||this)[0],this.element=J(a),this.uuid=E++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=J(),this.hoverable=J(),this.focusable=J(),a!==this&&(J.data(a,this.widgetFullName,this),this._on(!0,this.element,{remove:function(c){c.target===a&&this.destroy()
}}),this.document=J(a.style?a.ownerDocument:a.document||a),this.window=J(this.document[0].defaultView||this.document[0].parentWindow)),this.options=J.widget.extend({},this.options,this._getCreateOptions(),b),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()
},_getCreateOptions:J.noop,_getCreateEventData:J.noop,_create:J.noop,_init:J.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(J.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")
},_destroy:J.noop,widget:function(){return this.element
},option:function(d,c){var e,g,b,f=d;
if(0===arguments.length){return J.widget.extend({},this.options)
}if("string"==typeof d){if(f={},e=d.split("."),d=e.shift(),e.length){for(g=f[d]=J.widget.extend({},this.options[d]),b=0;
e.length-1>b;
b++){g[e[b]]=g[e[b]]||{},g=g[e[b]]
}if(d=e.pop(),1===arguments.length){return void 0===g[d]?null:g[d]
}g[d]=c
}else{if(1===arguments.length){return void 0===this.options[d]?null:this.options[d]
}f[d]=c
}}return this._setOptions(f),this
},_setOptions:function(b){var a;
for(a in b){this._setOption(a,b[a])
}return this
},_setOption:function(b,a){return this.options[b]=a,"disabled"===b&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!a),a&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this
},enable:function(){return this._setOptions({disabled:!1})
},disable:function(){return this._setOptions({disabled:!0})
},_on:function(d,c,e){var f,b=this;
"boolean"!=typeof d&&(e=c,c=d,d=!1),e?(c=f=J(c),this.bindings=this.bindings.add(c)):(e=c,c=this.element,f=this.widget()),J.each(e,function(m,p){function n(){return d||b.options.disabled!==!0&&!J(this).hasClass("ui-state-disabled")?("string"==typeof p?b[p]:p).apply(b,arguments):void 0
}"string"!=typeof p&&(n.guid=p.guid=p.guid||n.guid||J.guid++);
var i=m.match(/^([\w:-]*)\s*(.*)$/),a=i[1]+b.eventNamespace,g=i[2];
g?f.delegate(g,a,n):c.bind(a,n)
})
},_off:function(b,a){a=(a||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,b.unbind(a).undelegate(a),this.bindings=J(this.bindings.not(b).get()),this.focusable=J(this.focusable.not(b).get()),this.hoverable=J(this.hoverable.not(b).get())
},_delay:function(d,b){function a(){return("string"==typeof d?c[d]:d).apply(c,arguments)
}var c=this;
return setTimeout(a,b||0)
},_hoverable:function(a){this.hoverable=this.hoverable.add(a),this._on(a,{mouseenter:function(b){J(b.currentTarget).addClass("ui-state-hover")
},mouseleave:function(b){J(b.currentTarget).removeClass("ui-state-hover")
}})
},_focusable:function(a){this.focusable=this.focusable.add(a),this._on(a,{focusin:function(b){J(b.currentTarget).addClass("ui-state-focus")
},focusout:function(b){J(b.currentTarget).removeClass("ui-state-focus")
}})
},_trigger:function(d,c,e){var g,b,f=this.options[d];
if(e=e||{},c=J.Event(c),c.type=(d===this.widgetEventPrefix?d:this.widgetEventPrefix+d).toLowerCase(),c.target=this.element[0],b=c.originalEvent){for(g in b){g in c||(c[g]=b[g])
}}return this.element.trigger(c,e),!(J.isFunction(f)&&f.apply(this.element[0],[c].concat(e))===!1||c.isDefaultPrevented())
}},J.each({show:"fadeIn",hide:"fadeOut"},function(b,a){J.Widget.prototype["_"+b]=function(d,g,c){"string"==typeof g&&(g={effect:g});
var f,e=g?g===!0||"number"==typeof g?a:g.effect||a:b;
g=g||{},"number"==typeof g&&(g={duration:g}),f=!J.isEmptyObject(g),g.complete=c,g.delay&&d.delay(g.delay),f&&J.effects&&J.effects.effect[e]?d[b](g):e!==b&&d[e]?d[e](g.duration,g.easing,c):d.queue(function(h){J(this)[b](),c&&c.call(d[0]),h()
})
}
}),J.widget;
var K=!1;
J(document).mouseup(function(){K=!1
}),J.widget("ui.mouse",{version:"1.11.2",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var a=this;
this.element.bind("mousedown."+this.widgetName,function(b){return a._mouseDown(b)
}).bind("click."+this.widgetName,function(b){return !0===J.data(b.target,a.widgetName+".preventClickEvent")?(J.removeData(b.target,a.widgetName+".preventClickEvent"),b.stopImmediatePropagation(),!1):void 0
}),this.started=!1
},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
},_mouseDown:function(b){if(!K){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(b),this._mouseDownEvent=b;
var a=this,c=1===b.which,d="string"==typeof this.options.cancel&&b.target.nodeName?J(b.target).closest(this.options.cancel).length:!1;
return c&&!d&&this._mouseCapture(b)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){a.mouseDelayMet=!0
},this.options.delay)),this._mouseDistanceMet(b)&&this._mouseDelayMet(b)&&(this._mouseStarted=this._mouseStart(b)!==!1,!this._mouseStarted)?(b.preventDefault(),!0):(!0===J.data(b.target,this.widgetName+".preventClickEvent")&&J.removeData(b.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(f){return a._mouseMove(f)
},this._mouseUpDelegate=function(f){return a._mouseUp(f)
},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),b.preventDefault(),K=!0,!0)):!0
}},_mouseMove:function(a){if(this._mouseMoved){if(J.ui.ie&&(!document.documentMode||9>document.documentMode)&&!a.button){return this._mouseUp(a)
}if(!a.which){return this._mouseUp(a)
}}return(a.which||a.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(a),a.preventDefault()):(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==!1,this._mouseStarted?this._mouseDrag(a):this._mouseUp(a)),!this._mouseStarted)
},_mouseUp:function(a){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,a.target===this._mouseDownEvent.target&&J.data(a.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(a)),K=!1,!1
},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance
},_mouseDelayMet:function(){return this.mouseDelayMet
},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return !0
}}),function(){function U(d,c,a){return[parseFloat(d[0])*(e.test(d[0])?c/100:1),parseFloat(d[1])*(e.test(d[1])?a/100:1)]
}function y(c,a){return parseInt(J.css(c,a),10)||0
}function V(c){var a=c[0];
return 9===a.nodeType?{width:c.width(),height:c.height(),offset:{top:0,left:0}}:J.isWindow(a)?{width:c.width(),height:c.height(),offset:{top:c.scrollTop(),left:c.scrollLeft()}}:a.preventDefault?{width:0,height:0,offset:{top:a.pageY,left:a.pageX}}:{width:c.outerWidth(),height:c.outerHeight(),offset:c.offset()}
}J.ui=J.ui||{};
var m,S,g=Math.max,b=Math.abs,O=Math.round,v=/left|center|right/,T=/top|center|bottom/,Q=/[\+\-]\d+(\.[\d]+)?%?/,R=/^\w+/,e=/%$/,P=J.fn.position;
J.position={scrollbarWidth:function(){if(void 0!==m){return m
}var f,d,h=J("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),c=h.children()[0];
return J("body").append(h),f=c.offsetWidth,h.css("overflow","scroll"),d=c.offsetWidth,f===d&&(d=h[0].clientWidth),h.remove(),m=f-d
},getScrollInfo:function(f){var d=f.isWindow||f.isDocument?"":f.element.css("overflow-x"),h=f.isWindow||f.isDocument?"":f.element.css("overflow-y"),l="scroll"===d||"auto"===d&&f.width<f.element[0].scrollWidth,c="scroll"===h||"auto"===h&&f.height<f.element[0].scrollHeight;
return{width:c?J.position.scrollbarWidth():0,height:l?J.position.scrollbarWidth():0}
},getWithinInfo:function(c){var a=J(c||window),d=J.isWindow(a[0]),f=!!a[0]&&9===a[0].nodeType;
return{element:a,isWindow:d,isDocument:f,offset:a.offset()||{left:0,top:0},scrollLeft:a.scrollLeft(),scrollTop:a.scrollTop(),width:d||f?a.width():a.outerWidth(),height:d||f?a.height():a.outerHeight()}
}},J.fn.position=function(c){if(!c||!c.of){return P.apply(this,arguments)
}c=J.extend({},c);
var a,d,i,u,l,o,t=J(c.of),r=J.position.getWithinInfo(c.within),s=J.position.getScrollInfo(r),h=(c.collision||"flip").split(" "),f={};
return o=V(t),t[0].preventDefault&&(c.at="left top"),d=o.width,i=o.height,u=o.offset,l=J.extend({},u),J.each(["my","at"],function(){var W,p,n=(c[this]||"").split(" ");
1===n.length&&(n=v.test(n[0])?n.concat(["center"]):T.test(n[0])?["center"].concat(n):["center","center"]),n[0]=v.test(n[0])?n[0]:"center",n[1]=T.test(n[1])?n[1]:"center",W=Q.exec(n[0]),p=Q.exec(n[1]),f[this]=[W?W[0]:0,p?p[0]:0],c[this]=[R.exec(n[0])[0],R.exec(n[1])[0]]
}),1===h.length&&(h[1]=h[0]),"right"===c.at[0]?l.left+=d:"center"===c.at[0]&&(l.left+=d/2),"bottom"===c.at[1]?l.top+=i:"center"===c.at[1]&&(l.top+=i/2),a=U(f.at,d,i),l.left+=a[0],l.top+=a[1],this.each(function(){var ae,W,ad=J(this),aa=ad.outerWidth(),ab=ad.outerHeight(),Y=y(this,"marginLeft"),ac=y(this,"marginTop"),n=aa+Y+y(this,"marginRight")+s.width,X=ab+ac+y(this,"marginBottom")+s.height,Z=J.extend({},l),p=U(f.my,ad.outerWidth(),ad.outerHeight());
"right"===c.my[0]?Z.left-=aa:"center"===c.my[0]&&(Z.left-=aa/2),"bottom"===c.my[1]?Z.top-=ab:"center"===c.my[1]&&(Z.top-=ab/2),Z.left+=p[0],Z.top+=p[1],S||(Z.left=O(Z.left),Z.top=O(Z.top)),ae={marginLeft:Y,marginTop:ac},J.each(["left","top"],function(ag,af){J.ui.position[h[ag]]&&J.ui.position[h[ag]][af](Z,{targetWidth:d,targetHeight:i,elemWidth:aa,elemHeight:ab,collisionPosition:ae,collisionWidth:n,collisionHeight:X,offset:[a[0]+p[0],a[1]+p[1]],my:c.my,at:c.at,within:r,elem:ad})
}),c.using&&(W=function(ak){var ah=u.left-Z.left,ag=ah+d-aa,aj=u.top-Z.top,af=aj+i-ab,ai={target:{element:t,left:u.left,top:u.top,width:d,height:i},element:{element:ad,left:Z.left,top:Z.top,width:aa,height:ab},horizontal:0>ag?"left":ah>0?"right":"center",vertical:0>af?"top":aj>0?"bottom":"middle"};
aa>d&&d>b(ah+ag)&&(ai.horizontal="center"),ab>i&&i>b(aj+af)&&(ai.vertical="middle"),ai.important=g(b(ah),b(ag))>g(b(aj),b(af))?"horizontal":"vertical",c.using.call(this,ak,ai)
}),ad.offset(J.extend(Z,{using:W}))
})
},J.ui.position={fit:{left:function(u,X){var o,Y=X.within,d=Y.isWindow?Y.scrollLeft:Y.offset.left,W=Y.width,c=u.left-X.collisionPosition.marginLeft,p=d-c,f=c+X.collisionWidth-W-d;
X.collisionWidth>W?p>0&&0>=f?(o=u.left+p+X.collisionWidth-W-d,u.left+=p-o):u.left=f>0&&0>=p?d:p>f?d+W-X.collisionWidth:d:p>0?u.left+=p:f>0?u.left-=f:u.left=g(u.left-c,u.left)
},top:function(u,X){var o,Y=X.within,d=Y.isWindow?Y.scrollTop:Y.offset.top,W=X.within.height,c=u.top-X.collisionPosition.marginTop,p=d-c,f=c+X.collisionHeight-W-d;
X.collisionHeight>W?p>0&&0>=f?(o=u.top+p+X.collisionHeight-W-d,u.top+=p-o):u.top=f>0&&0>=p?d:p>f?d+W-X.collisionHeight:d:p>0?u.top+=p:f>0?u.top-=f:u.top=g(u.top-c,u.top)
}},flip:{left:function(ac,ah){var Z,ai,X=ah.within,af=X.offset.left+X.scrollLeft,W=X.width,aa=X.isWindow?X.scrollLeft:X.offset.left,Y=ac.left-ah.collisionPosition.marginLeft,ag=Y-aa,ad=Y+ah.collisionWidth-W-aa,ae="left"===ah.my[0]?-ah.elemWidth:"right"===ah.my[0]?ah.elemWidth:0,r="left"===ah.at[0]?ah.targetWidth:"right"===ah.at[0]?-ah.targetWidth:0,ab=-2*ah.offset[0];
0>ag?(Z=ac.left+ae+r+ab+ah.collisionWidth-W-af,(0>Z||b(ag)>Z)&&(ac.left+=ae+r+ab)):ad>0&&(ai=ac.left-ah.collisionPosition.marginLeft+ae+r+ab-aa,(ai>0||ad>b(ai))&&(ac.left+=ae+r+ab))
},top:function(ad,ai){var aa,aj,X=ai.within,ag=X.offset.top+X.scrollTop,W=X.height,ab=X.isWindow?X.scrollTop:X.offset.top,Z=ad.top-ai.collisionPosition.marginTop,ah=Z-ab,ae=Z+ai.collisionHeight-W-ab,af="top"===ai.my[1],r=af?-ai.elemHeight:"bottom"===ai.my[1]?ai.elemHeight:0,ac="top"===ai.at[1]?ai.targetHeight:"bottom"===ai.at[1]?-ai.targetHeight:0,Y=-2*ai.offset[1];
0>ah?(aj=ad.top+r+ac+Y+ai.collisionHeight-W-ag,ad.top+r+ac+Y>ah&&(0>aj||b(ah)>aj)&&(ad.top+=r+ac+Y)):ae>0&&(aa=ad.top-ai.collisionPosition.marginTop+r+ac+Y-ab,ad.top+r+ac+Y>ae&&(aa>0||ae>b(aa))&&(ad.top+=r+ac+Y))
}},flipfit:{left:function(){J.ui.position.flip.left.apply(this,arguments),J.ui.position.fit.left.apply(this,arguments)
},top:function(){J.ui.position.flip.top.apply(this,arguments),J.ui.position.fit.top.apply(this,arguments)
}}},function(){var c,a,f,u,p,l=document.getElementsByTagName("body")[0],d=document.createElement("div");
c=document.createElement(l?"div":"body"),f={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},l&&J.extend(f,{position:"absolute",left:"-1000px",top:"-1000px"});
for(p in f){c.style[p]=f[p]
}c.appendChild(d),a=l||document.documentElement,a.insertBefore(c,a.firstChild),d.style.cssText="position: absolute; left: 10.7432222px;",u=J(d).offset().left,S=u>10&&11>u,c.innerHTML="",a.removeChild(c)
}()
}(),J.ui.position,J.widget("ui.accordion",{version:"1.11.2",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var a=this.options;
this.prevShow=this.prevHide=J(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),a.collapsible||a.active!==!1&&null!=a.active||(a.active=0),this._processPanels(),0>a.active&&(a.active+=this.headers.length),this._refresh()
},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():J()}
},_createIcons:function(){var a=this.options.icons;
a&&(J("<span>").addClass("ui-accordion-header-icon ui-icon "+a.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(a.header).addClass(a.activeHeader),this.headers.addClass("ui-accordion-icons"))
},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
},_destroy:function(){var a;
this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),a=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&a.css("height","")
},_setOption:function(b,a){return"active"===b?(this._activate(a),void 0):("event"===b&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(a)),this._super(b,a),"collapsible"!==b||a||this.options.active!==!1||this._activate(0),"icons"===b&&(this._destroyIcons(),a&&this._createIcons()),"disabled"===b&&(this.element.toggleClass("ui-state-disabled",!!a).attr("aria-disabled",a),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!a)),void 0)
},_keydown:function(d){if(!d.altKey&&!d.ctrlKey){var c=J.ui.keyCode,e=this.headers.length,f=this.headers.index(d.target),b=!1;
switch(d.keyCode){case c.RIGHT:case c.DOWN:b=this.headers[(f+1)%e];
break;
case c.LEFT:case c.UP:b=this.headers[(f-1+e)%e];
break;
case c.SPACE:case c.ENTER:this._eventHandler(d);
break;
case c.HOME:b=this.headers[0];
break;
case c.END:b=this.headers[e-1]
}b&&(J(d.target).attr("tabIndex",-1),J(b).attr("tabIndex",0),b.focus(),d.preventDefault())
}},_panelKeyDown:function(a){a.keyCode===J.ui.keyCode.UP&&a.ctrlKey&&J(a.currentTarget).prev().focus()
},refresh:function(){var a=this.options;
this._processPanels(),a.active===!1&&a.collapsible===!0||!this.headers.length?(a.active=!1,this.active=J()):a.active===!1?this._activate(0):this.active.length&&!J.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(a.active=!1,this.active=J()):this._activate(Math.max(0,a.active-1)):a.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()
},_processPanels:function(){var b=this.headers,a=this.panels;
this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),a&&(this._off(b.not(this.headers)),this._off(a.not(this.panels)))
},_refresh:function(){var b,a=this.options,c=a.heightStyle,d=this.element.parent();
this.active=this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var f=J(this),e=f.uniqueId().attr("id"),g=f.next(),h=g.uniqueId().attr("id");
f.attr("aria-controls",h),g.attr("aria-labelledby",e)
}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(a.event),"fill"===c?(b=d.height(),this.element.siblings(":visible").each(function(){var e=J(this),f=e.css("position");
"absolute"!==f&&"fixed"!==f&&(b-=e.outerHeight(!0))
}),this.headers.each(function(){b-=J(this).outerHeight(!0)
}),this.headers.next().each(function(){J(this).height(Math.max(0,b-J(this).innerHeight()+J(this).height()))
}).css("overflow","auto")):"auto"===c&&(b=0,this.headers.next().each(function(){b=Math.max(b,J(this).css("height","").height())
}).height(b))
},_activate:function(b){var a=this._findActive(b)[0];
a!==this.active[0]&&(a=a||this.active[0],this._eventHandler({target:a,currentTarget:a,preventDefault:J.noop}))
},_findActive:function(a){return"number"==typeof a?this.headers.eq(a):J()
},_setupEvents:function(b){var a={keydown:"_keydown"};
b&&J.each(b.split(" "),function(d,c){a[c]="_eventHandler"
}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,a),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)
},_eventHandler:function(p){var f=this.options,u=this.active,d=J(p.currentTarget),m=d[0]===u[0],c=m&&f.collapsible,b=c?J():d.next(),g=u.next(),e={oldHeader:u,oldPanel:g,newHeader:c?J():d,newPanel:b};
p.preventDefault(),m&&!f.collapsible||this._trigger("beforeActivate",p,e)===!1||(f.active=c?!1:this.headers.index(d),this.active=m?J():d,this._toggle(e),u.removeClass("ui-accordion-header-active ui-state-active"),f.icons&&u.children(".ui-accordion-header-icon").removeClass(f.icons.activeHeader).addClass(f.icons.header),m||(d.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),f.icons&&d.children(".ui-accordion-header-icon").removeClass(f.icons.header).addClass(f.icons.activeHeader),d.next().addClass("ui-accordion-content-active")))
},_toggle:function(b){var a=b.newPanel,c=this.prevShow.length?this.prevShow:b.oldPanel;
this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=a,this.prevHide=c,this.options.animate?this._animate(a,c,b):(c.hide(),a.show(),this._toggleComplete(b)),c.attr({"aria-hidden":"true"}),c.prev().attr("aria-selected","false"),a.length&&c.length?c.prev().attr({tabIndex:-1,"aria-expanded":"false"}):a.length&&this.headers.filter(function(){return 0===J(this).attr("tabIndex")
}).attr("tabIndex",-1),a.attr("aria-hidden","false").prev().attr({"aria-selected":"true",tabIndex:0,"aria-expanded":"true"})
},_animate:function(v,Q,m){var R,f,O,c=this,b=0,p=v.length&&(!Q.length||v.index()<Q.index()),g=this.options.animate||{},P=p&&g.down||g,y=function(){c._toggleComplete(m)
};
return"number"==typeof P&&(O=P),"string"==typeof P&&(f=P),f=f||P.easing||g.easing,O=O||P.duration||g.duration,Q.length?v.length?(R=v.show().outerHeight(),Q.animate(this.hideProps,{duration:O,easing:f,step:function(d,a){a.now=Math.round(d)
}}),v.hide().animate(this.showProps,{duration:O,easing:f,complete:y,step:function(d,a){a.now=Math.round(d),"height"!==a.prop?b+=a.now:"content"!==c.options.heightStyle&&(a.now=Math.round(R-Q.outerHeight()-b),b=0)
}}),void 0):Q.animate(this.hideProps,O,f,y):v.animate(this.showProps,O,f,y)
},_toggleComplete:function(b){var a=b.oldPanel;
a.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),a.length&&(a.parent()[0].className=a.parent()[0].className),this._trigger("activate",null,b)
}}),J.widget("ui.menu",{version:"1.11.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(a){a.preventDefault()
},"click .ui-menu-item":function(b){var a=J(b.target);
!this.mouseHandled&&a.not(".ui-state-disabled").length&&(this.select(b),b.isPropagationStopped()||(this.mouseHandled=!0),a.has(".ui-menu").length?this.expand(b):!this.element.is(":focus")&&J(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))
},"mouseenter .ui-menu-item":function(b){if(!this.previousFilter){var a=J(b.currentTarget);
a.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(b,a)
}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(c,b){var a=this.active||this.element.find(this.options.items).eq(0);
b||this.focus(c,a)
},blur:function(a){this._delay(function(){J.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(a)
})
},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1
}})
},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var a=J(this);
a.data("ui-menu-submenu-carat")&&a.remove()
}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(d){var c,e,g,b,f=!0;
switch(d.keyCode){case J.ui.keyCode.PAGE_UP:this.previousPage(d);
break;
case J.ui.keyCode.PAGE_DOWN:this.nextPage(d);
break;
case J.ui.keyCode.HOME:this._move("first","first",d);
break;
case J.ui.keyCode.END:this._move("last","last",d);
break;
case J.ui.keyCode.UP:this.previous(d);
break;
case J.ui.keyCode.DOWN:this.next(d);
break;
case J.ui.keyCode.LEFT:this.collapse(d);
break;
case J.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(d);
break;
case J.ui.keyCode.ENTER:case J.ui.keyCode.SPACE:this._activate(d);
break;
case J.ui.keyCode.ESCAPE:this.collapse(d);
break;
default:f=!1,e=this.previousFilter||"",g=String.fromCharCode(d.keyCode),b=!1,clearTimeout(this.filterTimer),g===e?b=!0:g=e+g,c=this._filterMenuItems(g),c=b&&-1!==c.index(this.active.next())?this.active.nextAll(".ui-menu-item"):c,c.length||(g=String.fromCharCode(d.keyCode),c=this._filterMenuItems(g)),c.length?(this.focus(d,c),this.previousFilter=g,this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)):delete this.previousFilter
}f&&d.preventDefault()
},_activate:function(a){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(a):this.select(a))
},refresh:function(){var d,c,e=this,f=this.options.icons.submenu,b=this.element.find(this.options.menus);
this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),b.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var g=J(this),a=g.parent(),h=J("<span>").addClass("ui-menu-icon ui-icon "+f).data("ui-menu-submenu-carat",!0);
a.attr("aria-haspopup","true").prepend(h),g.attr("aria-labelledby",a.attr("id"))
}),d=b.add(this.element),c=d.find(this.options.items),c.not(".ui-menu-item").each(function(){var a=J(this);
e._isDivider(a)&&a.addClass("ui-widget-content ui-menu-divider")
}),c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),c.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!J.contains(this.element[0],this.active[0])&&this.blur()
},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(b,a){"icons"===b&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(a.submenu),"disabled"===b&&this.element.toggleClass("ui-state-disabled",!!a).attr("aria-disabled",a),this._super(b,a)
},focus:function(d,b){var a,c;
this.blur(d,d&&"focus"===d.type),this._scrollIntoView(b),this.active=b.first(),c=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",c.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),d&&"keydown"===d.type?this._close():this.timer=this._delay(function(){this._close()
},this.delay),a=b.children(".ui-menu"),a.length&&d&&/^mouse/.test(d.type)&&this._startOpening(a),this.activeMenu=b.parent(),this._trigger("focus",d,{item:b})
},_scrollIntoView:function(d){var c,e,h,b,g,f;
this._hasScroll()&&(c=parseFloat(J.css(this.activeMenu[0],"borderTopWidth"))||0,e=parseFloat(J.css(this.activeMenu[0],"paddingTop"))||0,h=d.offset().top-this.activeMenu.offset().top-c-e,b=this.activeMenu.scrollTop(),g=this.activeMenu.height(),f=d.outerHeight(),0>h?this.activeMenu.scrollTop(b+h):h+f>g&&this.activeMenu.scrollTop(b+h-g+f))
},blur:function(b,a){a||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",b,{item:this.active}))
},_startOpening:function(a){clearTimeout(this.timer),"true"===a.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(a)
},this.delay))
},_open:function(b){var a=J.extend({of:this.active},this.options.position);
clearTimeout(this.timer),this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden","true"),b.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(a)
},collapseAll:function(b,a){clearTimeout(this.timer),this.timer=this._delay(function(){var c=a?this.element:J(b&&b.target).closest(this.element.find(".ui-menu"));
c.length||(c=this.element),this._close(c),this.blur(b),this.activeMenu=c
},this.delay)
},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
},_closeOnDocumentClick:function(a){return !J(a.target).closest(".ui-menu").length
},_isDivider:function(a){return !/[^\-\u2014\u2013\s]/.test(a.text())
},collapse:function(b){var a=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
a&&a.length&&(this._close(),this.focus(b,a))
},expand:function(b){var a=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();
a&&a.length&&(this._open(a.parent()),this._delay(function(){this.focus(b,a)
}))
},next:function(a){this._move("next","first",a)
},previous:function(a){this._move("prev","last",a)
},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(d,b,a){var c;
this.active&&(c="first"===d||"last"===d?this.active["first"===d?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[d+"All"](".ui-menu-item").eq(0)),c&&c.length&&this.active||(c=this.activeMenu.find(this.options.items)[b]()),this.focus(a,c)
},nextPage:function(b){var a,c,d;
return this.active?(this.isLastItem()||(this._hasScroll()?(c=this.active.offset().top,d=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return a=J(this),0>a.offset().top-c-d
}),this.focus(b,a)):this.focus(b,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(b),void 0)
},previousPage:function(b){var a,c,d;
return this.active?(this.isFirstItem()||(this._hasScroll()?(c=this.active.offset().top,d=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return a=J(this),a.offset().top-c+d>0
}),this.focus(b,a)):this.focus(b,this.activeMenu.find(this.options.items).first())),void 0):(this.next(b),void 0)
},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(b){this.active=this.active||J(b.target).closest(".ui-menu-item");
var a={item:this.active};
this.active.has(".ui-menu").length||this.collapseAll(b,!0),this._trigger("select",b,a)
},_filterMenuItems:function(b){var a=b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),c=RegExp("^"+a,"i");
return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return c.test(J.trim(J(this).text()))
})
}}),J.widget("ui.autocomplete",{version:"1.11.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var d,c,e,g=this.element[0].nodeName.toLowerCase(),b="textarea"===g,f="input"===g;
this.isMultiLine=b?!0:f?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[b||f?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(i){if(this.element.prop("readOnly")){return d=!0,e=!0,c=!0,void 0
}d=!1,e=!1,c=!1;
var h=J.ui.keyCode;
switch(i.keyCode){case h.PAGE_UP:d=!0,this._move("previousPage",i);
break;
case h.PAGE_DOWN:d=!0,this._move("nextPage",i);
break;
case h.UP:d=!0,this._keyEvent("previous",i);
break;
case h.DOWN:d=!0,this._keyEvent("next",i);
break;
case h.ENTER:this.menu.active&&(d=!0,i.preventDefault(),this.menu.select(i));
break;
case h.TAB:this.menu.active&&this.menu.select(i);
break;
case h.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(i),i.preventDefault());
break;
default:c=!0,this._searchTimeout(i)
}},keypress:function(a){if(d){return d=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&a.preventDefault(),void 0
}if(!c){var h=J.ui.keyCode;
switch(a.keyCode){case h.PAGE_UP:this._move("previousPage",a);
break;
case h.PAGE_DOWN:this._move("nextPage",a);
break;
case h.UP:this._keyEvent("previous",a);
break;
case h.DOWN:this._keyEvent("next",a)
}}},input:function(a){return e?(e=!1,a.preventDefault(),void 0):(this._searchTimeout(a),void 0)
},focus:function(){this.selectedItem=null,this.previous=this._value()
},blur:function(a){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(a),this._change(a),void 0)
}}),this._initSource(),this.menu=J("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(h){h.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur
});
var a=this.menu.element[0];
J(h.target).closest(".ui-menu-item").length||this._delay(function(){var i=this;
this.document.one("mousedown",function(l){l.target===i.element[0]||l.target===a||J.contains(a,l.target)||i.close()
})
})
},menufocus:function(h,a){var l,m;
return this.isNewMenu&&(this.isNewMenu=!1,h.originalEvent&&/^mouse/.test(h.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){J(h.target).trigger(h.originalEvent)
}),void 0):(m=a.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",h,{item:m})&&h.originalEvent&&/^key/.test(h.originalEvent.type)&&this._value(m.value),l=a.item.attr("aria-label")||m.value,l&&J.trim(l).length&&(this.liveRegion.children().hide(),J("<div>").text(l).appendTo(this.liveRegion)),void 0)
},menuselect:function(m,h){var a=h.item.data("ui-autocomplete-item"),l=this.previous;
this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=l,this._delay(function(){this.previous=l,this.selectedItem=a
})),!1!==this._trigger("select",m,{item:a})&&this._value(a.value),this.term=this._value(),this.close(m),this.selectedItem=a
}}),this.liveRegion=J("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()
},_setOption:function(b,a){this._super(b,a),"source"===b&&this._initSource(),"appendTo"===b&&this.menu.element.appendTo(this._appendTo()),"disabled"===b&&a&&this.xhr&&this.xhr.abort()
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a=a.jquery||a.nodeType?J(a):this.document.find(a).eq(0)),a&&a[0]||(a=this.element.closest(".ui-front")),a.length||(a=this.document[0].body),a
},_initSource:function(){var b,a,c=this;
J.isArray(this.options.source)?(b=this.options.source,this.source=function(d,e){e(J.ui.autocomplete.filter(b,d.term))
}):"string"==typeof this.options.source?(a=this.options.source,this.source=function(d,e){c.xhr&&c.xhr.abort(),c.xhr=J.ajax({url:a,data:d,dataType:"json",success:function(f){e(f)
},error:function(){e([])
}})
}):this.source=this.options.source
},_searchTimeout:function(a){clearTimeout(this.searching),this.searching=this._delay(function(){var c=this.term===this._value(),b=this.menu.element.is(":visible"),d=a.altKey||a.ctrlKey||a.metaKey||a.shiftKey;
(!c||c&&!b&&!d)&&(this.selectedItem=null,this.search(null,a))
},this.options.delay)
},search:function(b,a){return b=null!=b?b:this._value(),this.term=this._value(),b.length<this.options.minLength?this.close(a):this._trigger("search",a)!==!1?this._search(b):void 0
},_search:function(a){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:a},this._response())
},_response:function(){var a=++this.requestIndex;
return J.proxy(function(b){a===this.requestIndex&&this.__response(b),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")
},this)
},__response:function(a){a&&(a=this._normalize(a)),this._trigger("response",null,{content:a}),!this.options.disabled&&a&&a.length&&!this.cancelSearch?(this._suggest(a),this._trigger("open")):this._close()
},close:function(a){this.cancelSearch=!0,this._close(a)
},_close:function(a){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",a))
},_change:function(a){this.previous!==this._value()&&this._trigger("change",a,{item:this.selectedItem})
},_normalize:function(a){return a.length&&a[0].label&&a[0].value?a:J.map(a,function(b){return"string"==typeof b?{label:b,value:b}:J.extend({},b,{label:b.label||b.value,value:b.value||b.label})
})
},_suggest:function(b){var a=this.menu.element.empty();
this._renderMenu(a,b),this.isNewMenu=!0,this.menu.refresh(),a.show(),this._resizeMenu(),a.position(J.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()
},_resizeMenu:function(){var a=this.menu.element;
a.outerWidth(Math.max(a.width("").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(b,a){var c=this;
J.each(a,function(f,d){c._renderItemData(b,d)
})
},_renderItemData:function(b,a){return this._renderItem(b,a).data("ui-autocomplete-item",a)
},_renderItem:function(b,a){return J("<li>").text(a.label).appendTo(b)
},_move:function(b,a){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(b)||this.menu.isLastItem()&&/^next/.test(b)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[b](a),void 0):(this.search(null,a),void 0)
},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)
},_keyEvent:function(b,a){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(b,a),a.preventDefault())
}}),J.extend(J.ui.autocomplete,{escapeRegex:function(a){return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(b,a){var c=RegExp(J.ui.autocomplete.escapeRegex(a),"i");
return J.grep(b,function(d){return c.test(d.label||d.value||d)
})
}}),J.widget("ui.autocomplete",J.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(a){return a+(a>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(b){var a;
this._superApply(arguments),this.options.disabled||this.cancelSearch||(a=b&&b.length?this.options.messages.results(b.length):this.options.messages.noResults,this.liveRegion.children().hide(),J("<div>").text(a).appendTo(this.liveRegion))
}}),J.ui.autocomplete;
var L,A="ui-button ui-widget ui-state-default ui-corner-all",I="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",D=function(){var a=J(this);
setTimeout(function(){a.find(":ui-button").button("refresh")
},1)
},H=function(b){var a=b.name,c=b.form,d=J([]);
return a&&(a=a.replace(/'/g,"\\'"),d=c?J(c).find("[name='"+a+"'][type=radio]"):J("[name='"+a+"'][type=radio]",b.ownerDocument).filter(function(){return !this.form
})),d
};
J.widget("ui.button",{version:"1.11.2",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,D),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");
var b=this,a=this.options,c="checkbox"===this.type||"radio"===this.type,d=c?"":"ui-state-active";
null===a.label&&(a.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(A).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){a.disabled||this===L&&J(this).addClass("ui-state-active")
}).bind("mouseleave"+this.eventNamespace,function(){a.disabled||J(this).removeClass(d)
}).bind("click"+this.eventNamespace,function(f){a.disabled&&(f.preventDefault(),f.stopImmediatePropagation())
}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")
},blur:function(){this.buttonElement.removeClass("ui-state-focus")
}}),c&&this.element.bind("change"+this.eventNamespace,function(){b.refresh()
}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return a.disabled?!1:void 0
}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(a.disabled){return !1
}J(this).addClass("ui-state-active"),b.buttonElement.attr("aria-pressed","true");
var e=b.element[0];
H(e).not(e).map(function(){return J(this).button("widget")[0]
}).removeClass("ui-state-active").attr("aria-pressed","false")
}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return a.disabled?!1:(J(this).addClass("ui-state-active"),L=this,b.document.one("mouseup",function(){L=null
}),void 0)
}).bind("mouseup"+this.eventNamespace,function(){return a.disabled?!1:(J(this).removeClass("ui-state-active"),void 0)
}).bind("keydown"+this.eventNamespace,function(e){return a.disabled?!1:((e.keyCode===J.ui.keyCode.SPACE||e.keyCode===J.ui.keyCode.ENTER)&&J(this).addClass("ui-state-active"),void 0)
}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){J(this).removeClass("ui-state-active")
}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(e){e.keyCode===J.ui.keyCode.SPACE&&J(this).click()
})),this._setOption("disabled",a.disabled),this._resetButton()
},_determineButtonType:function(){var c,b,a;
this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(c=this.element.parents().last(),b="label[for='"+this.element.attr("id")+"']",this.buttonElement=c.find(b),this.buttonElement.length||(c=c.length?c.siblings():this.element.siblings(),this.buttonElement=c.filter(b),this.buttonElement.length||(this.buttonElement=c.find(b))),this.element.addClass("ui-helper-hidden-accessible"),a=this.element.is(":checked"),a&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",a)):this.buttonElement=this.element
},widget:function(){return this.buttonElement
},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(A+" ui-state-active "+I).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")
},_setOption:function(b,a){return this._super(b,a),"disabled"===b?(this.widget().toggleClass("ui-state-disabled",!!a),this.element.prop("disabled",!!a),a&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)
},refresh:function(){var a=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");
a!==this.options.disabled&&this._setOption("disabled",a),"radio"===this.type?H(this.element[0]).each(function(){J(this).is(":checked")?J(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):J(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")
}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))
},_resetButton:function(){if("input"===this.type){return this.options.label&&this.element.val(this.options.label),void 0
}var d=this.buttonElement.removeClass(I),c=J("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(d.empty()).text(),e=this.options.icons,f=e.primary&&e.secondary,b=[];
e.primary||e.secondary?(this.options.text&&b.push("ui-button-text-icon"+(f?"s":e.primary?"-primary":"-secondary")),e.primary&&d.prepend("<span class='ui-button-icon-primary ui-icon "+e.primary+"'></span>"),e.secondary&&d.append("<span class='ui-button-icon-secondary ui-icon "+e.secondary+"'></span>"),this.options.text||(b.push(f?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||d.attr("title",J.trim(c)))):b.push("ui-button-text-only"),d.addClass(b.join(" "))
}}),J.widget("ui.buttonset",{version:"1.11.2",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")
},_init:function(){this.refresh()
},_setOption:function(b,a){"disabled"===b&&this.buttons.button("option",b,a),this._super(b,a)
},refresh:function(){var b="rtl"===this.element.css("direction"),a=this.element.find(this.options.items),c=a.filter(":ui-button");
a.not(":ui-button").button(),c.button("refresh"),this.buttons=a.map(function(){return J(this).button("widget")[0]
}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(b?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(b?"ui-corner-left":"ui-corner-right").end().end()
},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return J(this).button("widget")[0]
}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
}}),J.ui.button,J.extend(J.ui,{datepicker:{version:"1.11.2"}});
var k;
J.extend(C.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(a){return z(this._defaults,a||{}),this
},_attachDatepicker:function(d,c){var e,f,b;
e=d.nodeName.toLowerCase(),f="div"===e||"span"===e,d.id||(this.uuid+=1,d.id="dp"+this.uuid),b=this._newInst(J(d),f),b.settings=J.extend({},c||{}),"input"===e?this._connectDatepicker(d,b):f&&this._inlineDatepicker(d,b)
},_newInst:function(b,a){var c=b[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:c,input:b,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:a,dpDiv:a?N(J("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}
},_connectDatepicker:function(b,a){var c=J(b);
a.append=J([]),a.trigger=J([]),c.hasClass(this.markerClassName)||(this._attachments(c,a),c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(a),J.data(b,"datepicker",a),a.settings.disabled&&this._disableDatepicker(b))
},_attachments:function(d,c){var e,h,b,g=this._get(c,"appendText"),f=this._get(c,"isRTL");
c.append&&c.append.remove(),g&&(c.append=J("<span class='"+this._appendClass+"'>"+g+"</span>"),d[f?"before":"after"](c.append)),d.unbind("focus",this._showDatepicker),c.trigger&&c.trigger.remove(),e=this._get(c,"showOn"),("focus"===e||"both"===e)&&d.focus(this._showDatepicker),("button"===e||"both"===e)&&(h=this._get(c,"buttonText"),b=this._get(c,"buttonImage"),c.trigger=J(this._get(c,"buttonImageOnly")?J("<img/>").addClass(this._triggerClass).attr({src:b,alt:h,title:h}):J("<button type='button'></button>").addClass(this._triggerClass).html(b?J("<img/>").attr({src:b,alt:h,title:h}):h)),d[f?"before":"after"](c.trigger),c.trigger.click(function(){return J.datepicker._datepickerShowing&&J.datepicker._lastInput===d[0]?J.datepicker._hideDatepicker():J.datepicker._datepickerShowing&&J.datepicker._lastInput!==d[0]?(J.datepicker._hideDatepicker(),J.datepicker._showDatepicker(d[0])):J.datepicker._showDatepicker(d[0]),!1
}))
},_autoSize:function(g){if(this._get(g,"autoSize")&&!g.inline){var d,c,f,l,b=new Date(2009,11,20),h=this._get(g,"dateFormat");
h.match(/[DM]/)&&(d=function(a){for(c=0,f=0,l=0;
a.length>l;
l++){a[l].length>c&&(c=a[l].length,f=l)
}return f
},b.setMonth(d(this._get(g,h.match(/MM/)?"monthNames":"monthNamesShort"))),b.setDate(d(this._get(g,h.match(/DD/)?"dayNames":"dayNamesShort"))+20-b.getDay())),g.input.attr("size",this._formatDate(g,b).length)
}},_inlineDatepicker:function(b,a){var c=J(b);
c.hasClass(this.markerClassName)||(c.addClass(this.markerClassName).append(a.dpDiv),J.data(b,"datepicker",a),this._setDate(a,this._getDefaultDate(a),!0),this._updateDatepicker(a),this._updateAlternate(a),a.settings.disabled&&this._disableDatepicker(b),a.dpDiv.css("display","block"))
},_dialogDatepicker:function(O,g,P,e,v){var b,m,f,y,p,r=this._dialogInst;
return r||(this.uuid+=1,b="dp"+this.uuid,this._dialogInput=J("<input type='text' id='"+b+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),J("body").append(this._dialogInput),r=this._dialogInst=this._newInst(this._dialogInput,!1),r.settings={},J.data(this._dialogInput[0],"datepicker",r)),z(r.settings,e||{}),g=g&&g.constructor===Date?this._formatDate(r,g):g,this._dialogInput.val(g),this._pos=v?v.length?v:[v.pageX,v.pageY]:null,this._pos||(m=document.documentElement.clientWidth,f=document.documentElement.clientHeight,y=document.documentElement.scrollLeft||document.body.scrollLeft,p=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[m/2-100+y,f/2-150+p]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),r.settings.onSelect=P,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),J.blockUI&&J.blockUI(this.dpDiv),J.data(this._dialogInput[0],"datepicker",r),this
},_destroyDatepicker:function(b){var a,c=J(b),d=J.data(b,"datepicker");
c.hasClass(this.markerClassName)&&(a=b.nodeName.toLowerCase(),J.removeData(b,"datepicker"),"input"===a?(d.append.remove(),d.trigger.remove(),c.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===a||"span"===a)&&c.removeClass(this.markerClassName).empty())
},_enableDatepicker:function(d){var c,e,f=J(d),b=J.data(d,"datepicker");
f.hasClass(this.markerClassName)&&(c=d.nodeName.toLowerCase(),"input"===c?(d.disabled=!1,b.trigger.filter("button").each(function(){this.disabled=!1
}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===c||"span"===c)&&(e=f.children("."+this._inlineClass),e.children().removeClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=J.map(this._disabledInputs,function(a){return a===d?null:a
}))
},_disableDatepicker:function(d){var c,e,f=J(d),b=J.data(d,"datepicker");
f.hasClass(this.markerClassName)&&(c=d.nodeName.toLowerCase(),"input"===c?(d.disabled=!0,b.trigger.filter("button").each(function(){this.disabled=!0
}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===c||"span"===c)&&(e=f.children("."+this._inlineClass),e.children().addClass("ui-state-disabled"),e.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=J.map(this._disabledInputs,function(a){return a===d?null:a
}),this._disabledInputs[this._disabledInputs.length]=d)
},_isDisabledDatepicker:function(b){if(!b){return !1
}for(var a=0;
this._disabledInputs.length>a;
a++){if(this._disabledInputs[a]===b){return !0
}}return !1
},_getInst:function(b){try{return J.data(b,"datepicker")
}catch(a){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(e,d,g){var p,c,m,f,b=this._getInst(e);
return 2===arguments.length&&"string"==typeof d?"defaults"===d?J.extend({},J.datepicker._defaults):b?"all"===d?J.extend({},b.settings):this._get(b,d):null:(p=d||{},"string"==typeof d&&(p={},p[d]=g),b&&(this._curInst===b&&this._hideDatepicker(),c=this._getDateDatepicker(e,!0),m=this._getMinMaxDate(b,"min"),f=this._getMinMaxDate(b,"max"),z(b.settings,p),null!==m&&void 0!==p.dateFormat&&void 0===p.minDate&&(b.settings.minDate=this._formatDate(b,m)),null!==f&&void 0!==p.dateFormat&&void 0===p.maxDate&&(b.settings.maxDate=this._formatDate(b,f)),"disabled" in p&&(p.disabled?this._disableDatepicker(e):this._enableDatepicker(e)),this._attachments(J(e),b),this._autoSize(b),this._setDate(b,c),this._updateAlternate(b),this._updateDatepicker(b)),void 0)
},_changeDatepicker:function(c,b,a){this._optionDatepicker(c,b,a)
},_refreshDatepicker:function(b){var a=this._getInst(b);
a&&this._updateDatepicker(a)
},_setDateDatepicker:function(c,b){var a=this._getInst(c);
a&&(this._setDate(a,b),this._updateDatepicker(a),this._updateAlternate(a))
},_getDateDatepicker:function(c,b){var a=this._getInst(c);
return a&&!a.inline&&this._setDateFromField(a,b),a?this._getDate(a):null
},_doKeyDown:function(d){var c,e,h,b=J.datepicker._getInst(d.target),g=!0,f=b.dpDiv.is(".ui-datepicker-rtl");
if(b._keyEvent=!0,J.datepicker._datepickerShowing){switch(d.keyCode){case 9:J.datepicker._hideDatepicker(),g=!1;
break;
case 13:return h=J("td."+J.datepicker._dayOverClass+":not(."+J.datepicker._currentClass+")",b.dpDiv),h[0]&&J.datepicker._selectDay(d.target,b.selectedMonth,b.selectedYear,h[0]),c=J.datepicker._get(b,"onSelect"),c?(e=J.datepicker._formatDate(b),c.apply(b.input?b.input[0]:null,[e,b])):J.datepicker._hideDatepicker(),!1;
case 27:J.datepicker._hideDatepicker();
break;
case 33:J.datepicker._adjustDate(d.target,d.ctrlKey?-J.datepicker._get(b,"stepBigMonths"):-J.datepicker._get(b,"stepMonths"),"M");
break;
case 34:J.datepicker._adjustDate(d.target,d.ctrlKey?+J.datepicker._get(b,"stepBigMonths"):+J.datepicker._get(b,"stepMonths"),"M");
break;
case 35:(d.ctrlKey||d.metaKey)&&J.datepicker._clearDate(d.target),g=d.ctrlKey||d.metaKey;
break;
case 36:(d.ctrlKey||d.metaKey)&&J.datepicker._gotoToday(d.target),g=d.ctrlKey||d.metaKey;
break;
case 37:(d.ctrlKey||d.metaKey)&&J.datepicker._adjustDate(d.target,f?1:-1,"D"),g=d.ctrlKey||d.metaKey,d.originalEvent.altKey&&J.datepicker._adjustDate(d.target,d.ctrlKey?-J.datepicker._get(b,"stepBigMonths"):-J.datepicker._get(b,"stepMonths"),"M");
break;
case 38:(d.ctrlKey||d.metaKey)&&J.datepicker._adjustDate(d.target,-7,"D"),g=d.ctrlKey||d.metaKey;
break;
case 39:(d.ctrlKey||d.metaKey)&&J.datepicker._adjustDate(d.target,f?-1:1,"D"),g=d.ctrlKey||d.metaKey,d.originalEvent.altKey&&J.datepicker._adjustDate(d.target,d.ctrlKey?+J.datepicker._get(b,"stepBigMonths"):+J.datepicker._get(b,"stepMonths"),"M");
break;
case 40:(d.ctrlKey||d.metaKey)&&J.datepicker._adjustDate(d.target,7,"D"),g=d.ctrlKey||d.metaKey;
break;
default:g=!1
}}else{36===d.keyCode&&d.ctrlKey?J.datepicker._showDatepicker(this):g=!1
}g&&(d.preventDefault(),d.stopPropagation())
},_doKeyPress:function(b){var a,c,d=J.datepicker._getInst(b.target);
return J.datepicker._get(d,"constrainInput")?(a=J.datepicker._possibleChars(J.datepicker._get(d,"dateFormat")),c=String.fromCharCode(null==b.charCode?b.keyCode:b.charCode),b.ctrlKey||b.metaKey||" ">c||!a||a.indexOf(c)>-1):void 0
},_doKeyUp:function(b){var a,c=J.datepicker._getInst(b.target);
if(c.input.val()!==c.lastVal){try{a=J.datepicker.parseDate(J.datepicker._get(c,"dateFormat"),c.input?c.input.val():null,J.datepicker._getFormatConfig(c)),a&&(J.datepicker._setDateFromField(c),J.datepicker._updateAlternate(c),J.datepicker._updateDatepicker(c))
}catch(d){}}return !0
},_showDatepicker:function(f){if(f=f.target||f,"input"!==f.nodeName.toLowerCase()&&(f=J("input",f.parentNode)[0]),!J.datepicker._isDisabledDatepicker(f)&&J.datepicker._lastInput!==f){var e,p,c,m,g,b,d;
e=J.datepicker._getInst(f),J.datepicker._curInst&&J.datepicker._curInst!==e&&(J.datepicker._curInst.dpDiv.stop(!0,!0),e&&J.datepicker._datepickerShowing&&J.datepicker._hideDatepicker(J.datepicker._curInst.input[0])),p=J.datepicker._get(e,"beforeShow"),c=p?p.apply(f,[f,e]):{},c!==!1&&(z(e.settings,c),e.lastVal=null,J.datepicker._lastInput=f,J.datepicker._setDateFromField(e),J.datepicker._inDialog&&(f.value=""),J.datepicker._pos||(J.datepicker._pos=J.datepicker._findPos(f),J.datepicker._pos[1]+=f.offsetHeight),m=!1,J(f).parents().each(function(){return m|="fixed"===J(this).css("position"),!m
}),g={left:J.datepicker._pos[0],top:J.datepicker._pos[1]},J.datepicker._pos=null,e.dpDiv.empty(),e.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),J.datepicker._updateDatepicker(e),g=J.datepicker._checkOffset(e,g,m),e.dpDiv.css({position:J.datepicker._inDialog&&J.blockUI?"static":m?"fixed":"absolute",display:"none",left:g.left+"px",top:g.top+"px"}),e.inline||(b=J.datepicker._get(e,"showAnim"),d=J.datepicker._get(e,"duration"),e.dpDiv.css("z-index",x(J(f))+1),J.datepicker._datepickerShowing=!0,J.effects&&J.effects.effect[b]?e.dpDiv.show(b,J.datepicker._get(e,"showOptions"),d):e.dpDiv[b||"show"](b?d:null),J.datepicker._shouldFocusInput(e)&&e.input.focus(),J.datepicker._curInst=e))
}},_updateDatepicker:function(d){this.maxRows=4,k=d,d.dpDiv.empty().append(this._generateHTML(d)),this._attachHandlers(d);
var c,e=this._getNumberOfMonths(d),g=e[1],b=17,f=d.dpDiv.find("."+this._dayOverClass+" a");
f.length>0&&B.apply(f.get(0)),d.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),g>1&&d.dpDiv.addClass("ui-datepicker-multi-"+g).css("width",b*g+"em"),d.dpDiv[(1!==e[0]||1!==e[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),d.dpDiv[(this._get(d,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),d===J.datepicker._curInst&&J.datepicker._datepickerShowing&&J.datepicker._shouldFocusInput(d)&&d.input.focus(),d.yearshtml&&(c=d.yearshtml,setTimeout(function(){c===d.yearshtml&&d.yearshtml&&d.dpDiv.find("select.ui-datepicker-year:first").replaceWith(d.yearshtml),c=d.yearshtml=null
},0))
},_shouldFocusInput:function(a){return a.input&&a.input.is(":visible")&&!a.input.is(":disabled")&&!a.input.is(":focus")
},_checkOffset:function(p,f,u){var d=p.dpDiv.outerWidth(),m=p.dpDiv.outerHeight(),c=p.input?p.input.outerWidth():0,b=p.input?p.input.outerHeight():0,g=document.documentElement.clientWidth+(u?0:J(document).scrollLeft()),e=document.documentElement.clientHeight+(u?0:J(document).scrollTop());
return f.left-=this._get(p,"isRTL")?d-c:0,f.left-=u&&f.left===p.input.offset().left?J(document).scrollLeft():0,f.top-=u&&f.top===p.input.offset().top+b?J(document).scrollTop():0,f.left-=Math.min(f.left,f.left+d>g&&g>d?Math.abs(f.left+d-g):0),f.top-=Math.min(f.top,f.top+m>e&&e>m?Math.abs(m+b):0),f
},_findPos:function(b){for(var a,c=this._getInst(b),d=this._get(c,"isRTL");
b&&("hidden"===b.type||1!==b.nodeType||J.expr.filters.hidden(b));
){b=b[d?"previousSibling":"nextSibling"]
}return a=J(b).offset(),[a.left,a.top]
},_hideDatepicker:function(d){var c,e,g,b,f=this._curInst;
!f||d&&f!==J.data(d,"datepicker")||this._datepickerShowing&&(c=this._get(f,"showAnim"),e=this._get(f,"duration"),g=function(){J.datepicker._tidyDialog(f)
},J.effects&&(J.effects.effect[c]||J.effects[c])?f.dpDiv.hide(c,J.datepicker._get(f,"showOptions"),e,g):f.dpDiv["slideDown"===c?"slideUp":"fadeIn"===c?"fadeOut":"hide"](c?e:null,g),c||g(),this._datepickerShowing=!1,b=this._get(f,"onClose"),b&&b.apply(f.input?f.input[0]:null,[f.input?f.input.val():"",f]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),J.blockUI&&(J.unblockUI(),J("body").append(this.dpDiv))),this._inDialog=!1)
},_tidyDialog:function(a){a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(b){if(J.datepicker._curInst){var a=J(b.target),c=J.datepicker._getInst(a[0]);
(a[0].id!==J.datepicker._mainDivId&&0===a.parents("#"+J.datepicker._mainDivId).length&&!a.hasClass(J.datepicker.markerClassName)&&!a.closest("."+J.datepicker._triggerClass).length&&J.datepicker._datepickerShowing&&(!J.datepicker._inDialog||!J.blockUI)||a.hasClass(J.datepicker.markerClassName)&&J.datepicker._curInst!==c)&&J.datepicker._hideDatepicker()
}},_adjustDate:function(d,c,e){var f=J(d),b=this._getInst(f[0]);
this._isDisabledDatepicker(f[0])||(this._adjustInstDate(b,c+("M"===e?this._get(b,"showCurrentAtPos"):0),e),this._updateDatepicker(b))
},_gotoToday:function(b){var a,c=J(b),d=this._getInst(c[0]);
this._get(d,"gotoCurrent")&&d.currentDay?(d.selectedDay=d.currentDay,d.drawMonth=d.selectedMonth=d.currentMonth,d.drawYear=d.selectedYear=d.currentYear):(a=new Date,d.selectedDay=a.getDate(),d.drawMonth=d.selectedMonth=a.getMonth(),d.drawYear=d.selectedYear=a.getFullYear()),this._notifyChange(d),this._adjustDate(c)
},_selectMonthYear:function(d,c,e){var f=J(d),b=this._getInst(f[0]);
b["selected"+("M"===e?"Month":"Year")]=b["draw"+("M"===e?"Month":"Year")]=parseInt(c.options[c.selectedIndex].value,10),this._notifyChange(b),this._adjustDate(f)
},_selectDay:function(d,c,e,g){var b,f=J(d);
J(g).hasClass(this._unselectableClass)||this._isDisabledDatepicker(f[0])||(b=this._getInst(f[0]),b.selectedDay=b.currentDay=J("a",g).html(),b.selectedMonth=b.currentMonth=c,b.selectedYear=b.currentYear=e,this._selectDate(d,this._formatDate(b,b.currentDay,b.currentMonth,b.currentYear)))
},_clearDate:function(b){var a=J(b);
this._selectDate(a,"")
},_selectDate:function(d,c){var e,f=J(d),b=this._getInst(f[0]);
c=null!=c?c:this._formatDate(b),b.input&&b.input.val(c),this._updateAlternate(b),e=this._get(b,"onSelect"),e?e.apply(b.input?b.input[0]:null,[c,b]):b.input&&b.input.trigger("change"),b.inline?this._updateDatepicker(b):(this._hideDatepicker(),this._lastInput=b.input[0],"object"!=typeof b.input[0]&&b.input.focus(),this._lastInput=null)
},_updateAlternate:function(d){var c,e,f,b=this._get(d,"altField");
b&&(c=this._get(d,"altFormat")||this._get(d,"dateFormat"),e=this._getDate(d),f=this.formatDate(c,e,this._getFormatConfig(d)),J(b).each(function(){J(this).val(f)
}))
},noWeekends:function(b){var a=b.getDay();
return[a>0&&6>a,""]
},iso8601Week:function(c){var b,a=new Date(c.getTime());
return a.setDate(a.getDate()+4-(a.getDay()||7)),b=a.getTime(),a.setMonth(0),a.setDate(1),Math.floor(Math.round((b-a)/86400000)/7)+1
},parseDate:function(S,ab,T){if(null==S||null==ab){throw"Invalid arguments"
}if(ab="object"==typeof ab?""+ab:ab+"",""===ab){return null
}var X,ai,W,U,ac=0,Z=(T?T.shortYearCutoff:null)||this._defaults.shortYearCutoff,R="string"!=typeof Z?Z:(new Date).getFullYear()%100+parseInt(Z,10),af=(T?T.dayNamesShort:null)||this._defaults.dayNamesShort,ag=(T?T.dayNames:null)||this._defaults.dayNames,V=(T?T.monthNamesShort:null)||this._defaults.monthNamesShort,ae=(T?T.monthNames:null)||this._defaults.monthNames,Y=-1,ad=-1,Q=-1,e=-1,ah=!1,aj=function(b){var a=S.length>X+1&&S.charAt(X+1)===b;
return a&&X++,a
},O=function(f){var c=aj(f),d="@"===f?14:"!"===f?20:"y"===f&&c?4:"o"===f?3:2,h="y"===f?d:1,b=RegExp("^\\d{"+h+","+d+"}"),g=ab.substring(ac).match(b);
if(!g){throw"Missing number at position "+ac
}return ac+=g[0].length,parseInt(g[0],10)
},P=function(c,d,g){var b=-1,f=J.map(aj(c)?g:d,function(h,a){return[[a,h]]
}).sort(function(h,a){return -(h[1].length-a[1].length)
});
if(J.each(f,function(i,a){var h=a[1];
return ab.substr(ac,h.length).toLowerCase()===h.toLowerCase()?(b=a[0],ac+=h.length,!1):void 0
}),-1!==b){return b+1
}throw"Unknown name at position "+ac
},aa=function(){if(ab.charAt(ac)!==S.charAt(X)){throw"Unexpected literal at position "+ac
}ac++
};
for(X=0;
S.length>X;
X++){if(ah){"'"!==S.charAt(X)||aj("'")?aa():ah=!1
}else{switch(S.charAt(X)){case"d":Q=O("d");
break;
case"D":P("D",af,ag);
break;
case"o":e=O("o");
break;
case"m":ad=O("m");
break;
case"M":ad=P("M",V,ae);
break;
case"y":Y=O("y");
break;
case"@":U=new Date(O("@")),Y=U.getFullYear(),ad=U.getMonth()+1,Q=U.getDate();
break;
case"!":U=new Date((O("!")-this._ticksTo1970)/10000),Y=U.getFullYear(),ad=U.getMonth()+1,Q=U.getDate();
break;
case"'":aj("'")?aa():ah=!0;
break;
default:aa()
}}}if(ab.length>ac&&(W=ab.substr(ac),!/^\s+/.test(W))){throw"Extra/unparsed characters found in date: "+W
}if(-1===Y?Y=(new Date).getFullYear():100>Y&&(Y+=(new Date).getFullYear()-(new Date).getFullYear()%100+(R>=Y?0:-100)),e>-1){for(ad=1,Q=e;
;
){if(ai=this._getDaysInMonth(Y,ad-1),ai>=Q){break
}ad++,Q-=ai
}}if(U=this._daylightSavingAdjust(new Date(Y,ad-1,Q)),U.getFullYear()!==Y||U.getMonth()+1!==ad||U.getDate()!==Q){throw"Invalid date"
}return U
},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:10000000*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(y,S,p){if(!S){return""
}var T,g=(p?p.dayNamesShort:null)||this._defaults.dayNamesShort,Q=(p?p.dayNames:null)||this._defaults.dayNames,f=(p?p.monthNamesShort:null)||this._defaults.monthNamesShort,b=(p?p.monthNames:null)||this._defaults.monthNames,v=function(c){var a=y.length>T+1&&y.charAt(T+1)===c;
return a&&T++,a
},m=function(h,c,a){var d=""+c;
if(v(h)){for(;
a>d.length;
){d="0"+d
}}return d
},R=function(h,c,a,d){return v(h)?d[c]:a[c]
},O="",P=!1;
if(S){for(T=0;
y.length>T;
T++){if(P){"'"!==y.charAt(T)||v("'")?O+=y.charAt(T):P=!1
}else{switch(y.charAt(T)){case"d":O+=m("d",S.getDate(),2);
break;
case"D":O+=R("D",S.getDay(),g,Q);
break;
case"o":O+=m("o",Math.round((new Date(S.getFullYear(),S.getMonth(),S.getDate()).getTime()-new Date(S.getFullYear(),0,0).getTime())/86400000),3);
break;
case"m":O+=m("m",S.getMonth()+1,2);
break;
case"M":O+=R("M",S.getMonth(),f,b);
break;
case"y":O+=v("y")?S.getFullYear():(10>S.getYear()%100?"0":"")+S.getYear()%100;
break;
case"@":O+=S.getTime();
break;
case"!":O+=10000*S.getTime()+this._ticksTo1970;
break;
case"'":v("'")?O+="'":P=!0;
break;
default:O+=y.charAt(T)
}}}}return O
},_possibleChars:function(d){var b,a="",c=!1,f=function(e){var g=d.length>b+1&&d.charAt(b+1)===e;
return g&&b++,g
};
for(b=0;
d.length>b;
b++){if(c){"'"!==d.charAt(b)||f("'")?a+=d.charAt(b):c=!1
}else{switch(d.charAt(b)){case"d":case"m":case"y":case"@":a+="0123456789";
break;
case"D":case"M":return null;
case"'":f("'")?a+="'":c=!0;
break;
default:a+=d.charAt(b)
}}}return a
},_get:function(b,a){return void 0!==b.settings[a]?b.settings[a]:this._defaults[a]
},_setDateFromField:function(h,d){if(h.input.val()!==h.lastVal){var c=this._get(h,"dateFormat"),f=h.lastVal=h.input?h.input.val():null,m=this._getDefaultDate(h),b=m,l=this._getFormatConfig(h);
try{b=this.parseDate(c,f,l)||m
}catch(g){f=d?"":f
}h.selectedDay=b.getDate(),h.drawMonth=h.selectedMonth=b.getMonth(),h.drawYear=h.selectedYear=b.getFullYear(),h.currentDay=f?b.getDate():0,h.currentMonth=f?b.getMonth():0,h.currentYear=f?b.getFullYear():0,this._adjustInstDate(h)
}},_getDefaultDate:function(a){return this._restrictMinMax(a,this._determineDate(a,this._get(a,"defaultDate"),new Date))
},_determineDate:function(d,c,e){var g=function(h){var a=new Date;
return a.setDate(a.getDate()+h),a
},b=function(t){try{return J.datepicker.parseDate(J.datepicker._get(d,"dateFormat"),t,J.datepicker._getFormatConfig(d))
}catch(v){}for(var P=(t.toLowerCase().match(/^c/)?J.datepicker._getDate(d):null)||new Date,p=P.getFullYear(),O=P.getMonth(),y=P.getDate(),u=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,m=u.exec(t);
m;
){switch(m[2]||"d"){case"d":case"D":y+=parseInt(m[1],10);
break;
case"w":case"W":y+=7*parseInt(m[1],10);
break;
case"m":case"M":O+=parseInt(m[1],10),y=Math.min(y,J.datepicker._getDaysInMonth(p,O));
break;
case"y":case"Y":p+=parseInt(m[1],10),y=Math.min(y,J.datepicker._getDaysInMonth(p,O))
}m=u.exec(t)
}return new Date(p,O,y)
},f=null==c||""===c?e:"string"==typeof c?b(c):"number"==typeof c?isNaN(c)?e:g(c):new Date(c.getTime());
return f=f&&"Invalid Date"==""+f?e:f,f&&(f.setHours(0),f.setMinutes(0),f.setSeconds(0),f.setMilliseconds(0)),this._daylightSavingAdjust(f)
},_daylightSavingAdjust:function(a){return a?(a.setHours(a.getHours()>12?a.getHours()+2:0),a):null
},_setDate:function(g,d,c){var f=!d,l=g.selectedMonth,b=g.selectedYear,h=this._restrictMinMax(g,this._determineDate(g,d,new Date));
g.selectedDay=g.currentDay=h.getDate(),g.drawMonth=g.selectedMonth=g.currentMonth=h.getMonth(),g.drawYear=g.selectedYear=g.currentYear=h.getFullYear(),l===g.selectedMonth&&b===g.selectedYear||c||this._notifyChange(g),this._adjustInstDate(g),g.input&&g.input.val(f?"":this._formatDate(g))
},_getDate:function(b){var a=!b.currentYear||b.input&&""===b.input.val()?null:this._daylightSavingAdjust(new Date(b.currentYear,b.currentMonth,b.currentDay));
return a
},_attachHandlers:function(b){var a=this._get(b,"stepMonths"),c="#"+b.id.replace(/\\\\/g,"\\");
b.dpDiv.find("[data-handler]").map(function(){var d={prev:function(){J.datepicker._adjustDate(c,-a,"M")
},next:function(){J.datepicker._adjustDate(c,+a,"M")
},hide:function(){J.datepicker._hideDatepicker()
},today:function(){J.datepicker._gotoToday(c)
},selectDay:function(){return J.datepicker._selectDay(c,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1
},selectMonth:function(){return J.datepicker._selectMonthYear(c,this,"M"),!1
},selectYear:function(){return J.datepicker._selectMonthYear(c,this,"Y"),!1
}};
J(this).bind(this.getAttribute("data-event"),d[this.getAttribute("data-handler")])
})
},_generateHTML:function(aY){var aI,aU,aJ,aP,a2,aO,aK,aV,aR,aH,aZ,a0,aN,aX,aQ,aW,aG,aD,a1,a3,aE,aF,aS,ag,ax,ah,an,ay,am,aA,ak,ar,aC,at,av,aw,al,aT,ad,ao=new Date,ai=this._daylightSavingAdjust(new Date(ao.getFullYear(),ao.getMonth(),ao.getDate())),ab=this._get(aY,"isRTL"),az=this._get(aY,"showButtonPanel"),aq=this._get(aY,"hideIfNoPrevNext"),aL=this._get(aY,"navigationAsDateFormat"),ap=this._getNumberOfMonths(aY),ae=this._get(aY,"showCurrentAtPos"),af=this._get(aY,"stepMonths"),aj=1!==ap[0]||1!==ap[1],au=this._daylightSavingAdjust(aY.currentDay?new Date(aY.currentYear,aY.currentMonth,aY.currentDay):new Date(9999,9,9)),ac=this._getMinMaxDate(aY,"min"),aB=this._getMinMaxDate(aY,"max"),aa=aY.drawMonth-ae,aM=aY.drawYear;
if(0>aa&&(aa+=12,aM--),aB){for(aI=this._daylightSavingAdjust(new Date(aB.getFullYear(),aB.getMonth()-ap[0]*ap[1]+1,aB.getDate())),aI=ac&&ac>aI?ac:aI;
this._daylightSavingAdjust(new Date(aM,aa,1))>aI;
){aa--,0>aa&&(aa=11,aM--)
}}for(aY.drawMonth=aa,aY.drawYear=aM,aU=this._get(aY,"prevText"),aU=aL?this.formatDate(aU,this._daylightSavingAdjust(new Date(aM,aa-af,1)),this._getFormatConfig(aY)):aU,aJ=this._canAdjustMonth(aY,-1,aM,aa)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>":aq?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+aU+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"e":"w")+"'>"+aU+"</span></a>",aP=this._get(aY,"nextText"),aP=aL?this.formatDate(aP,this._daylightSavingAdjust(new Date(aM,aa+af,1)),this._getFormatConfig(aY)):aP,a2=this._canAdjustMonth(aY,1,aM,aa)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aP+"</span></a>":aq?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+aP+"'><span class='ui-icon ui-icon-circle-triangle-"+(ab?"w":"e")+"'>"+aP+"</span></a>",aO=this._get(aY,"currentText"),aK=this._get(aY,"gotoCurrent")&&aY.currentDay?au:ai,aO=aL?this.formatDate(aO,aK,this._getFormatConfig(aY)):aO,aV=aY.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(aY,"closeText")+"</button>",aR=az?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ab?aV:"")+(this._isInRange(aY,aK)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+aO+"</button>":"")+(ab?"":aV)+"</div>":"",aH=parseInt(this._get(aY,"firstDay"),10),aH=isNaN(aH)?0:aH,aZ=this._get(aY,"showWeek"),a0=this._get(aY,"dayNames"),aN=this._get(aY,"dayNamesMin"),aX=this._get(aY,"monthNames"),aQ=this._get(aY,"monthNamesShort"),aW=this._get(aY,"beforeShowDay"),aG=this._get(aY,"showOtherMonths"),aD=this._get(aY,"selectOtherMonths"),a1=this._getDefaultDate(aY),a3="",aF=0;
ap[0]>aF;
aF++){for(aS="",this.maxRows=4,ag=0;
ap[1]>ag;
ag++){if(ax=this._daylightSavingAdjust(new Date(aM,aa,aY.selectedDay)),ah=" ui-corner-all",an="",aj){if(an+="<div class='ui-datepicker-group",ap[1]>1){switch(ag){case 0:an+=" ui-datepicker-group-first",ah=" ui-corner-"+(ab?"right":"left");
break;
case ap[1]-1:an+=" ui-datepicker-group-last",ah=" ui-corner-"+(ab?"left":"right");
break;
default:an+=" ui-datepicker-group-middle",ah=""
}}an+="'>"
}for(an+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+ah+"'>"+(/all|left/.test(ah)&&0===aF?ab?a2:aJ:"")+(/all|right/.test(ah)&&0===aF?ab?aJ:a2:"")+this._generateMonthYearHeader(aY,aa,aM,ac,aB,aF>0||ag>0,aX,aQ)+"</div><table class='ui-datepicker-calendar'><thead><tr>",ay=aZ?"<th class='ui-datepicker-week-col'>"+this._get(aY,"weekHeader")+"</th>":"",aE=0;
7>aE;
aE++){am=(aE+aH)%7,ay+="<th scope='col'"+((aE+aH+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+a0[am]+"'>"+aN[am]+"</span></th>"
}for(an+=ay+"</tr></thead><tbody>",aA=this._getDaysInMonth(aM,aa),aM===aY.selectedYear&&aa===aY.selectedMonth&&(aY.selectedDay=Math.min(aY.selectedDay,aA)),ak=(this._getFirstDayOfMonth(aM,aa)-aH+7)%7,ar=Math.ceil((ak+aA)/7),aC=aj?this.maxRows>ar?this.maxRows:ar:ar,this.maxRows=aC,at=this._daylightSavingAdjust(new Date(aM,aa,1-ak)),av=0;
aC>av;
av++){for(an+="<tr>",aw=aZ?"<td class='ui-datepicker-week-col'>"+this._get(aY,"calculateWeek")(at)+"</td>":"",aE=0;
7>aE;
aE++){al=aW?aW.apply(aY.input?aY.input[0]:null,[at]):[!0,""],aT=at.getMonth()!==aa,ad=aT&&!aD||!al[0]||ac&&ac>at||aB&&at>aB,aw+="<td class='"+((aE+aH+6)%7>=5?" ui-datepicker-week-end":"")+(aT?" ui-datepicker-other-month":"")+(at.getTime()===ax.getTime()&&aa===aY.selectedMonth&&aY._keyEvent||a1.getTime()===at.getTime()&&a1.getTime()===ax.getTime()?" "+this._dayOverClass:"")+(ad?" "+this._unselectableClass+" ui-state-disabled":"")+(aT&&!aG?"":" "+al[1]+(at.getTime()===au.getTime()?" "+this._currentClass:"")+(at.getTime()===ai.getTime()?" ui-datepicker-today":""))+"'"+(aT&&!aG||!al[2]?"":" title='"+al[2].replace(/'/g,"&#39;")+"'")+(ad?"":" data-handler='selectDay' data-event='click' data-month='"+at.getMonth()+"' data-year='"+at.getFullYear()+"'")+">"+(aT&&!aG?"&#xa0;":ad?"<span class='ui-state-default'>"+at.getDate()+"</span>":"<a class='ui-state-default"+(at.getTime()===ai.getTime()?" ui-state-highlight":"")+(at.getTime()===au.getTime()?" ui-state-active":"")+(aT?" ui-priority-secondary":"")+"' href='#'>"+at.getDate()+"</a>")+"</td>",at.setDate(at.getDate()+1),at=this._daylightSavingAdjust(at)
}an+=aw+"</tr>"
}aa++,aa>11&&(aa=0,aM++),an+="</tbody></table>"+(aj?"</div>"+(ap[0]>0&&ag===ap[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),aS+=an
}a3+=aS
}return a3+=aR,aY._keyEvent=!1,a3
},_generateMonthYearHeader:function(ad,R,Z,S,W,ah,V,T){var aa,Y,Q,ae,af,U,ac,X,ab=this._get(ad,"changeMonth"),P=this._get(ad,"changeYear"),O=this._get(ad,"showMonthAfterYear"),ag="<div class='ui-datepicker-title'>",ai="";
if(ah||!ab){ai+="<span class='ui-datepicker-month'>"+V[R]+"</span>"
}else{for(aa=S&&S.getFullYear()===Z,Y=W&&W.getFullYear()===Z,ai+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",Q=0;
12>Q;
Q++){(!aa||Q>=S.getMonth())&&(!Y||W.getMonth()>=Q)&&(ai+="<option value='"+Q+"'"+(Q===R?" selected='selected'":"")+">"+T[Q]+"</option>")
}ai+="</select>"
}if(O||(ag+=ai+(!ah&&ab&&P?"":"&#xa0;")),!ad.yearshtml){if(ad.yearshtml="",ah||!P){ag+="<span class='ui-datepicker-year'>"+Z+"</span>"
}else{for(ae=this._get(ad,"yearRange").split(":"),af=(new Date).getFullYear(),U=function(b){var a=b.match(/c[+\-].*/)?Z+parseInt(b.substring(1),10):b.match(/[+\-].*/)?af+parseInt(b,10):parseInt(b,10);
return isNaN(a)?af:a
},ac=U(ae[0]),X=Math.max(ac,U(ae[1]||"")),ac=S?Math.max(ac,S.getFullYear()):ac,X=W?Math.min(X,W.getFullYear()):X,ad.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
X>=ac;
ac++){ad.yearshtml+="<option value='"+ac+"'"+(ac===Z?" selected='selected'":"")+">"+ac+"</option>"
}ad.yearshtml+="</select>",ag+=ad.yearshtml,ad.yearshtml=null
}}return ag+=this._get(ad,"yearSuffix"),O&&(ag+=(!ah&&ab&&P?"":"&#xa0;")+ai),ag+="</div>"
},_adjustInstDate:function(g,d,c){var f=g.drawYear+("Y"===c?d:0),l=g.drawMonth+("M"===c?d:0),b=Math.min(g.selectedDay,this._getDaysInMonth(f,l))+("D"===c?d:0),h=this._restrictMinMax(g,this._daylightSavingAdjust(new Date(f,l,b)));
g.selectedDay=h.getDate(),g.drawMonth=g.selectedMonth=h.getMonth(),g.drawYear=g.selectedYear=h.getFullYear(),("M"===c||"Y"===c)&&this._notifyChange(g)
},_restrictMinMax:function(d,b){var a=this._getMinMaxDate(d,"min"),c=this._getMinMaxDate(d,"max"),f=a&&a>b?a:b;
return c&&f>c?c:f
},_notifyChange:function(b){var a=this._get(b,"onChangeMonthYear");
a&&a.apply(b.input?b.input[0]:null,[b.selectedYear,b.selectedMonth+1,b])
},_getNumberOfMonths:function(b){var a=this._get(b,"numberOfMonths");
return null==a?[1,1]:"number"==typeof a?[1,a]:a
},_getMinMaxDate:function(b,a){return this._determineDate(b,this._get(b,a+"Date"),null)
},_getDaysInMonth:function(b,a){return 32-this._daylightSavingAdjust(new Date(b,a,32)).getDate()
},_getFirstDayOfMonth:function(b,a){return new Date(b,a,1).getDay()
},_canAdjustMonth:function(g,d,c,f){var h=this._getNumberOfMonths(g),b=this._daylightSavingAdjust(new Date(c,f+(0>d?d:h[0]*h[1]),1));
return 0>d&&b.setDate(this._getDaysInMonth(b.getFullYear(),b.getMonth())),this._isInRange(g,b)
},_isInRange:function(l,p){var f,u,d=this._getMinMaxDate(l,"min"),m=this._getMinMaxDate(l,"max"),c=null,b=null,g=this._get(l,"yearRange");
return g&&(f=g.split(":"),u=(new Date).getFullYear(),c=parseInt(f[0],10),b=parseInt(f[1],10),f[0].match(/[+\-].*/)&&(c+=u),f[1].match(/[+\-].*/)&&(b+=u)),(!d||p.getTime()>=d.getTime())&&(!m||p.getTime()<=m.getTime())&&(!c||p.getFullYear()>=c)&&(!b||b>=p.getFullYear())
},_getFormatConfig:function(b){var a=this._get(b,"shortYearCutoff");
return a="string"!=typeof a?a:(new Date).getFullYear()%100+parseInt(a,10),{shortYearCutoff:a,dayNamesShort:this._get(b,"dayNamesShort"),dayNames:this._get(b,"dayNames"),monthNamesShort:this._get(b,"monthNamesShort"),monthNames:this._get(b,"monthNames")}
},_formatDate:function(d,b,a,c){b||(d.currentDay=d.selectedDay,d.currentMonth=d.selectedMonth,d.currentYear=d.selectedYear);
var f=b?"object"==typeof b?b:this._daylightSavingAdjust(new Date(c,a,b)):this._daylightSavingAdjust(new Date(d.currentYear,d.currentMonth,d.currentDay));
return this.formatDate(this._get(d,"dateFormat"),f,this._getFormatConfig(d))
}}),J.fn.datepicker=function(b){if(!this.length){return this
}J.datepicker.initialized||(J(document).mousedown(J.datepicker._checkExternalClick),J.datepicker.initialized=!0),0===J("#"+J.datepicker._mainDivId).length&&J("body").append(J.datepicker.dpDiv);
var a=Array.prototype.slice.call(arguments,1);
return"string"!=typeof b||"isDisabled"!==b&&"getDate"!==b&&"widget"!==b?"option"===b&&2===arguments.length&&"string"==typeof arguments[1]?J.datepicker["_"+b+"Datepicker"].apply(J.datepicker,[this[0]].concat(a)):this.each(function(){"string"==typeof b?J.datepicker["_"+b+"Datepicker"].apply(J.datepicker,[this].concat(a)):J.datepicker._attachDatepicker(this,b)
}):J.datepicker["_"+b+"Datepicker"].apply(J.datepicker,[this[0]].concat(a))
},J.datepicker=new C,J.datepicker.initialized=!1,J.datepicker.uuid=(new Date).getTime(),J.datepicker.version="1.11.2",J.datepicker,J.widget("ui.draggable",J.ui.mouse,{version:"1.11.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()
},_setOption:function(b,a){this._super(b,a),"handle"===b&&(this._removeHandleClassName(),this._setHandleClassName())
},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)
},_mouseCapture:function(b){var a=this.options;
return this._blurActiveElement(b),this.helper||a.disabled||J(b.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(b),this.handle?(this._blockFrames(a.iframeFix===!0?"iframe":a.iframeFix),!0):!1)
},_blockFrames:function(a){this.iframeBlocks=this.document.find(a).map(function(){var b=J(this);
return J("<div>").css("position","absolute").appendTo(b.parent()).outerWidth(b.outerWidth()).outerHeight(b.outerHeight()).offset(b.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_blurActiveElement:function(b){var a=this.document[0];
if(this.handleElement.is(b.target)){try{a.activeElement&&"body"!==a.activeElement.nodeName.toLowerCase()&&J(a.activeElement).blur()
}catch(c){}}},_mouseStart:function(b){var a=this.options;
return this.helper=this._createHelper(b),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),J.ui.ddmanager&&(J.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===J(this).css("position")
}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(b),this.originalPosition=this.position=this._generatePosition(b,!1),this.originalPageX=b.pageX,this.originalPageY=b.pageY,a.cursorAt&&this._adjustOffsetFromHelper(a.cursorAt),this._setContainment(),this._trigger("start",b)===!1?(this._clear(),!1):(this._cacheHelperProportions(),J.ui.ddmanager&&!a.dropBehaviour&&J.ui.ddmanager.prepareOffsets(this,b),this._normalizeRightBottom(),this._mouseDrag(b,!0),J.ui.ddmanager&&J.ui.ddmanager.dragStart(this,b),!0)
},_refreshOffsets:function(a){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:a.pageX-this.offset.left,top:a.pageY-this.offset.top}
},_mouseDrag:function(b,a){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(b,!0),this.positionAbs=this._convertPositionTo("absolute"),!a){var c=this._uiHash();
if(this._trigger("drag",b,c)===!1){return this._mouseUp({}),!1
}this.position=c.position
}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",J.ui.ddmanager&&J.ui.ddmanager.drag(this,b),!1
},_mouseStop:function(b){var a=this,c=!1;
return J.ui.ddmanager&&!this.options.dropBehaviour&&(c=J.ui.ddmanager.drop(this,b)),this.dropped&&(c=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!c||"valid"===this.options.revert&&c||this.options.revert===!0||J.isFunction(this.options.revert)&&this.options.revert.call(this.element,c)?J(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){a._trigger("stop",b)!==!1&&a._clear()
}):this._trigger("stop",b)!==!1&&this._clear(),!1
},_mouseUp:function(a){return this._unblockFrames(),J.ui.ddmanager&&J.ui.ddmanager.dragStop(this,a),this.handleElement.is(a.target)&&this.element.focus(),J.ui.mouse.prototype._mouseUp.call(this,a)
},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this
},_getHandle:function(a){return this.options.handle?!!J(a.target).closest(this.element.find(this.options.handle)).length:!0
},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")
},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")
},_createHelper:function(b){var a=this.options,c=J.isFunction(a.helper),d=c?J(a.helper.apply(this.element[0],[b])):"clone"===a.helper?this.element.clone().removeAttr("id"):this.element;
return d.parents("body").length||d.appendTo("parent"===a.appendTo?this.element[0].parentNode:a.appendTo),c&&d[0]===this.element[0]&&this._setPositionRelative(),d[0]===this.element[0]||/(fixed|absolute)/.test(d.css("position"))||d.css("position","absolute"),d
},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")
},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),J.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left" in a&&(this.offset.click.left=a.left+this.margins.left),"right" in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top" in a&&(this.offset.click.top=a.top+this.margins.top),"bottom" in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)
},_isRootNode:function(a){return/(html|body)/i.test(a.tagName)||a===this.document[0]
},_getParentOffset:function(){var b=this.offsetParent.offset(),a=this.document[0];
return"absolute"===this.cssPosition&&this.scrollParent[0]!==a&&J.contains(this.scrollParent[0],this.offsetParent[0])&&(b.left+=this.scrollParent.scrollLeft(),b.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(b={top:0,left:0}),{top:b.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:b.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"!==this.cssPosition){return{top:0,left:0}
}var b=this.element.position(),a=this._isRootNode(this.scrollParent[0]);
return{top:b.top-(parseInt(this.helper.css("top"),10)||0)+(a?0:this.scrollParent.scrollTop()),left:b.left-(parseInt(this.helper.css("left"),10)||0)+(a?0:this.scrollParent.scrollLeft())}
},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var d,c,e,f=this.options,b=this.document[0];
return this.relativeContainer=null,f.containment?"window"===f.containment?(this.containment=[J(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,J(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,J(window).scrollLeft()+J(window).width()-this.helperProportions.width-this.margins.left,J(window).scrollTop()+(J(window).height()||b.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===f.containment?(this.containment=[0,0,J(b).width()-this.helperProportions.width-this.margins.left,(J(b).height()||b.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):f.containment.constructor===Array?(this.containment=f.containment,void 0):("parent"===f.containment&&(f.containment=this.helper[0].parentNode),c=J(f.containment),e=c[0],e&&(d=/(scroll|auto)/.test(c.css("overflow")),this.containment=[(parseInt(c.css("borderLeftWidth"),10)||0)+(parseInt(c.css("paddingLeft"),10)||0),(parseInt(c.css("borderTopWidth"),10)||0)+(parseInt(c.css("paddingTop"),10)||0),(d?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(c.css("borderRightWidth"),10)||0)-(parseInt(c.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(d?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(c.css("borderBottomWidth"),10)||0)-(parseInt(c.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=c),void 0):(this.containment=null,void 0)
},_convertPositionTo:function(d,b){b||(b=this.position);
var a="absolute"===d?1:-1,c=this._isRootNode(this.scrollParent[0]);
return{top:b.top+this.offset.relative.top*a+this.offset.parent.top*a-("fixed"===this.cssPosition?-this.offset.scroll.top:c?0:this.offset.scroll.top)*a,left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-("fixed"===this.cssPosition?-this.offset.scroll.left:c?0:this.offset.scroll.left)*a}
},_generatePosition:function(p,v){var g,y,d,u,c=this.options,b=this._isRootNode(this.scrollParent[0]),m=p.pageX,f=p.pageY;
return b&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),v&&(this.containment&&(this.relativeContainer?(y=this.relativeContainer.offset(),g=[this.containment[0]+y.left,this.containment[1]+y.top,this.containment[2]+y.left,this.containment[3]+y.top]):g=this.containment,p.pageX-this.offset.click.left<g[0]&&(m=g[0]+this.offset.click.left),p.pageY-this.offset.click.top<g[1]&&(f=g[1]+this.offset.click.top),p.pageX-this.offset.click.left>g[2]&&(m=g[2]+this.offset.click.left),p.pageY-this.offset.click.top>g[3]&&(f=g[3]+this.offset.click.top)),c.grid&&(d=c.grid[1]?this.originalPageY+Math.round((f-this.originalPageY)/c.grid[1])*c.grid[1]:this.originalPageY,f=g?d-this.offset.click.top>=g[1]||d-this.offset.click.top>g[3]?d:d-this.offset.click.top>=g[1]?d-c.grid[1]:d+c.grid[1]:d,u=c.grid[0]?this.originalPageX+Math.round((m-this.originalPageX)/c.grid[0])*c.grid[0]:this.originalPageX,m=g?u-this.offset.click.left>=g[0]||u-this.offset.click.left>g[2]?u:u-this.offset.click.left>=g[0]?u-c.grid[0]:u+c.grid[0]:u),"y"===c.axis&&(m=this.originalPageX),"x"===c.axis&&(f=this.originalPageY)),{top:f-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:b?0:this.offset.scroll.top),left:m-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:b?0:this.offset.scroll.left)}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()
},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))
},_trigger:function(b,a,c){return c=c||this._uiHash(),J.ui.plugin.call(this,b,[a,c,this],!0),/^(drag|start|stop)/.test(b)&&(this.positionAbs=this._convertPositionTo("absolute"),c.offset=this.positionAbs),J.Widget.prototype._trigger.call(this,b,a,c)
},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}}),J.ui.plugin.add("draggable","connectToSortable",{start:function(b,a,c){var d=J.extend({},a,{item:c.element});
c.sortables=[],J(c.options.connectToSortable).each(function(){var e=J(this).sortable("instance");
e&&!e.options.disabled&&(c.sortables.push(e),e.refreshPositions(),e._trigger("activate",b,d))
})
},stop:function(b,a,c){var d=J.extend({},a,{item:c.element});
c.cancelHelperRemoval=!1,J.each(c.sortables,function(){var f=this;
f.isOver?(f.isOver=0,c.cancelHelperRemoval=!0,f.cancelHelperRemoval=!1,f._storedCSS={position:f.placeholder.css("position"),top:f.placeholder.css("top"),left:f.placeholder.css("left")},f._mouseStop(b),f.options.helper=f.options._helper):(f.cancelHelperRemoval=!0,f._trigger("deactivate",b,d))
})
},drag:function(b,a,c){J.each(c.sortables,function(){var e=!1,d=this;
d.positionAbs=c.positionAbs,d.helperProportions=c.helperProportions,d.offset.click=c.offset.click,d._intersectsWith(d.containerCache)&&(e=!0,J.each(c.sortables,function(){return this.positionAbs=c.positionAbs,this.helperProportions=c.helperProportions,this.offset.click=c.offset.click,this!==d&&this._intersectsWith(this.containerCache)&&J.contains(d.element[0],this.element[0])&&(e=!1),e
})),e?(d.isOver||(d.isOver=1,d.currentItem=a.helper.appendTo(d.element).data("ui-sortable-item",!0),d.options._helper=d.options.helper,d.options.helper=function(){return a.helper[0]
},b.target=d.currentItem[0],d._mouseCapture(b,!0),d._mouseStart(b,!0,!0),d.offset.click.top=c.offset.click.top,d.offset.click.left=c.offset.click.left,d.offset.parent.left-=c.offset.parent.left-d.offset.parent.left,d.offset.parent.top-=c.offset.parent.top-d.offset.parent.top,c._trigger("toSortable",b),c.dropped=d.element,J.each(c.sortables,function(){this.refreshPositions()
}),c.currentItem=c.element,d.fromOutside=c),d.currentItem&&(d._mouseDrag(b),a.position=d.position)):d.isOver&&(d.isOver=0,d.cancelHelperRemoval=!0,d.options._revert=d.options.revert,d.options.revert=!1,d._trigger("out",b,d._uiHash(d)),d._mouseStop(b,!0),d.options.revert=d.options._revert,d.options.helper=d.options._helper,d.placeholder&&d.placeholder.remove(),c._refreshOffsets(b),a.position=c._generatePosition(b,!0),c._trigger("fromSortable",b),c.dropped=!1,J.each(c.sortables,function(){this.refreshPositions()
}))
})
}}),J.ui.plugin.add("draggable","cursor",{start:function(d,c,e){var f=J("body"),b=e.options;
f.css("cursor")&&(b._cursor=f.css("cursor")),f.css("cursor",b.cursor)
},stop:function(b,a,c){var d=c.options;
d._cursor&&J("body").css("cursor",d._cursor)
}}),J.ui.plugin.add("draggable","opacity",{start:function(d,c,e){var f=J(c.helper),b=e.options;
f.css("opacity")&&(b._opacity=f.css("opacity")),f.css("opacity",b.opacity)
},stop:function(b,a,c){var d=c.options;
d._opacity&&J(a.helper).css("opacity",d._opacity)
}}),J.ui.plugin.add("draggable","scroll",{start:function(c,b,a){a.scrollParentNotHidden||(a.scrollParentNotHidden=a.helper.scrollParent(!1)),a.scrollParentNotHidden[0]!==a.document[0]&&"HTML"!==a.scrollParentNotHidden[0].tagName&&(a.overflowOffset=a.scrollParentNotHidden.offset())
},drag:function(d,c,e){var h=e.options,b=!1,g=e.scrollParentNotHidden[0],f=e.document[0];
g!==f&&"HTML"!==g.tagName?(h.axis&&"x"===h.axis||(e.overflowOffset.top+g.offsetHeight-d.pageY<h.scrollSensitivity?g.scrollTop=b=g.scrollTop+h.scrollSpeed:d.pageY-e.overflowOffset.top<h.scrollSensitivity&&(g.scrollTop=b=g.scrollTop-h.scrollSpeed)),h.axis&&"y"===h.axis||(e.overflowOffset.left+g.offsetWidth-d.pageX<h.scrollSensitivity?g.scrollLeft=b=g.scrollLeft+h.scrollSpeed:d.pageX-e.overflowOffset.left<h.scrollSensitivity&&(g.scrollLeft=b=g.scrollLeft-h.scrollSpeed))):(h.axis&&"x"===h.axis||(d.pageY-J(f).scrollTop()<h.scrollSensitivity?b=J(f).scrollTop(J(f).scrollTop()-h.scrollSpeed):J(window).height()-(d.pageY-J(f).scrollTop())<h.scrollSensitivity&&(b=J(f).scrollTop(J(f).scrollTop()+h.scrollSpeed))),h.axis&&"y"===h.axis||(d.pageX-J(f).scrollLeft()<h.scrollSensitivity?b=J(f).scrollLeft(J(f).scrollLeft()-h.scrollSpeed):J(window).width()-(d.pageX-J(f).scrollLeft())<h.scrollSensitivity&&(b=J(f).scrollLeft(J(f).scrollLeft()+h.scrollSpeed)))),b!==!1&&J.ui.ddmanager&&!h.dropBehaviour&&J.ui.ddmanager.prepareOffsets(e,d)
}}),J.ui.plugin.add("draggable","snap",{start:function(b,a,c){var d=c.options;
c.snapElements=[],J(d.snap.constructor!==String?d.snap.items||":data(ui-draggable)":d.snap).each(function(){var f=J(this),e=f.offset();
this!==c.element[0]&&c.snapElements.push({item:this,width:f.outerWidth(),height:f.outerHeight(),top:e.top,left:e.left})
})
},drag:function(Q,Y,R){var V,af,U,S,Z,X,P,ac,ad,T,ab=R.options,W=ab.snapTolerance,aa=Y.offset.left,O=aa+R.helperProportions.width,e=Y.offset.top,ae=e+R.helperProportions.height;
for(ad=R.snapElements.length-1;
ad>=0;
ad--){Z=R.snapElements[ad].left-R.margins.left,X=Z+R.snapElements[ad].width,P=R.snapElements[ad].top-R.margins.top,ac=P+R.snapElements[ad].height,Z-W>O||aa>X+W||P-W>ae||e>ac+W||!J.contains(R.snapElements[ad].item.ownerDocument,R.snapElements[ad].item)?(R.snapElements[ad].snapping&&R.options.snap.release&&R.options.snap.release.call(R.element,Q,J.extend(R._uiHash(),{snapItem:R.snapElements[ad].item})),R.snapElements[ad].snapping=!1):("inner"!==ab.snapMode&&(V=W>=Math.abs(P-ae),af=W>=Math.abs(ac-e),U=W>=Math.abs(Z-O),S=W>=Math.abs(X-aa),V&&(Y.position.top=R._convertPositionTo("relative",{top:P-R.helperProportions.height,left:0}).top),af&&(Y.position.top=R._convertPositionTo("relative",{top:ac,left:0}).top),U&&(Y.position.left=R._convertPositionTo("relative",{top:0,left:Z-R.helperProportions.width}).left),S&&(Y.position.left=R._convertPositionTo("relative",{top:0,left:X}).left)),T=V||af||U||S,"outer"!==ab.snapMode&&(V=W>=Math.abs(P-e),af=W>=Math.abs(ac-ae),U=W>=Math.abs(Z-aa),S=W>=Math.abs(X-O),V&&(Y.position.top=R._convertPositionTo("relative",{top:P,left:0}).top),af&&(Y.position.top=R._convertPositionTo("relative",{top:ac-R.helperProportions.height,left:0}).top),U&&(Y.position.left=R._convertPositionTo("relative",{top:0,left:Z}).left),S&&(Y.position.left=R._convertPositionTo("relative",{top:0,left:X-R.helperProportions.width}).left)),!R.snapElements[ad].snapping&&(V||af||U||S||T)&&R.options.snap.snap&&R.options.snap.snap.call(R.element,Q,J.extend(R._uiHash(),{snapItem:R.snapElements[ad].item})),R.snapElements[ad].snapping=V||af||U||S||T)
}}}),J.ui.plugin.add("draggable","stack",{start:function(d,c,e){var g,b=e.options,f=J.makeArray(J(b.stack)).sort(function(h,a){return(parseInt(J(h).css("zIndex"),10)||0)-(parseInt(J(a).css("zIndex"),10)||0)
});
f.length&&(g=parseInt(J(f[0]).css("zIndex"),10)||0,J(f).each(function(a){J(this).css("zIndex",g+a)
}),this.css("zIndex",g+f.length))
}}),J.ui.plugin.add("draggable","zIndex",{start:function(d,c,e){var f=J(c.helper),b=e.options;
f.css("zIndex")&&(b._zIndex=f.css("zIndex")),f.css("zIndex",b.zIndex)
},stop:function(b,a,c){var d=c.options;
d._zIndex&&J(a.helper).css("zIndex",d._zIndex)
}}),J.ui.draggable,J.widget("ui.resizable",J.ui.mouse,{version:"1.11.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(a){return parseInt(a,10)||0
},_isNumber:function(a){return !isNaN(parseInt(a,10))
},_hasScroll:function(b,a){if("hidden"===J(b).css("overflow")){return !1
}var c=a&&"left"===a?"scrollLeft":"scrollTop",d=!1;
return b[c]>0?!0:(b[c]=1,d=b[c]>0,b[c]=0,d)
},_create:function(){var d,c,e,h,b,g=this,f=this.options;
if(this.element.addClass("ui-resizable"),J.extend(this,{_aspectRatio:!!f.aspectRatio,aspectRatio:f.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:f.helper||f.ghost||f.animate?f.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)&&(this.element.wrap(J("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=f.handles||(J(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String){for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),d=this.handles.split(","),this.handles={},c=0;
d.length>c;
c++){e=J.trim(d[c]),b="ui-resizable-"+e,h=J("<div class='ui-resizable-handle "+b+"'></div>"),h.css({zIndex:f.zIndex}),"se"===e&&h.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[e]=".ui-resizable-"+e,this.element.append(h)
}}this._renderAxis=function(o){var m,p,r,l;
o=o||this.element;
for(m in this.handles){this.handles[m].constructor===String&&(this.handles[m]=this.element.children(this.handles[m]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/textarea|input|select|button/i)&&(p=J(this.handles[m],this.element),l=/sw|ne|nw|se|n|s/.test(m)?p.outerHeight():p.outerWidth(),r=["padding",/ne|nw|n/.test(m)?"Top":/se|sw|s/.test(m)?"Bottom":/^e$/.test(m)?"Right":"Left"].join(""),o.css(r,l),this._proportionallyResize()),J(this.handles[m]).length
}},this._renderAxis(this.element),this._handles=J(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){g.resizing||(this.className&&(h=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),g.axis=h&&h[1]?h[1]:"se")
}),f.autoHide&&(this._handles.hide(),J(this.element).addClass("ui-resizable-autohide").mouseenter(function(){f.disabled||(J(this).removeClass("ui-resizable-autohide"),g._handles.show())
}).mouseleave(function(){f.disabled||g.resizing||(J(this).addClass("ui-resizable-autohide"),g._handles.hide())
})),this._mouseInit()
},_destroy:function(){this._mouseDestroy();
var b,a=function(c){J(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
};
return this.elementIsWrapper&&(a(this.element),b=this.element,this.originalElement.css({position:b.css("position"),width:b.outerWidth(),height:b.outerHeight(),top:b.css("top"),left:b.css("left")}).insertAfter(b),b.remove()),this.originalElement.css("resize",this.originalResizeStyle),a(this.originalElement),this
},_mouseCapture:function(b){var a,c,d=!1;
for(a in this.handles){c=J(this.handles[a])[0],(c===b.target||J.contains(c,b.target))&&(d=!0)
}return !this.options.disabled&&d
},_mouseStart:function(d){var c,e,g,b=this.options,f=this.element;
return this.resizing=!0,this._renderProxy(),c=this._num(this.helper.css("left")),e=this._num(this.helper.css("top")),b.containment&&(c+=J(b.containment).scrollLeft()||0,e+=J(b.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:c,top:e},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:f.width(),height:f.height()},this.originalSize=this._helper?{width:f.outerWidth(),height:f.outerHeight()}:{width:f.width(),height:f.height()},this.sizeDiff={width:f.outerWidth()-f.width(),height:f.outerHeight()-f.height()},this.originalPosition={left:c,top:e},this.originalMousePosition={left:d.pageX,top:d.pageY},this.aspectRatio="number"==typeof b.aspectRatio?b.aspectRatio:this.originalSize.width/this.originalSize.height||1,g=J(".ui-resizable-"+this.axis).css("cursor"),J("body").css("cursor","auto"===g?this.axis+"-resize":g),f.addClass("ui-resizable-resizing"),this._propagate("start",d),!0
},_mouseDrag:function(d){var c,f,m=this.originalMousePosition,b=this.axis,l=d.pageX-m.left||0,g=d.pageY-m.top||0,e=this._change[b];
return this._updatePrevProperties(),e?(c=e.apply(this,[d,l,g]),this._updateVirtualBoundaries(d.shiftKey),(this._aspectRatio||d.shiftKey)&&(c=this._updateRatio(c,d)),c=this._respectSize(c,d),this._updateCache(c),this._propagate("resize",d),f=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),J.isEmptyObject(f)||(this._updatePrevProperties(),this._trigger("resize",d,this.ui()),this._applyChanges()),!1):!1
},_mouseStop:function(v){this.resizing=!1;
var f,y,d,m,c,b,g,e=this.options,p=this;
return this._helper&&(f=this._proportionallyResizeElements,y=f.length&&/textarea/i.test(f[0].nodeName),d=y&&this._hasScroll(f[0],"left")?0:p.sizeDiff.height,m=y?0:p.sizeDiff.width,c={width:p.helper.width()-m,height:p.helper.height()-d},b=parseInt(p.element.css("left"),10)+(p.position.left-p.originalPosition.left)||null,g=parseInt(p.element.css("top"),10)+(p.position.top-p.originalPosition.top)||null,e.animate||this.element.css(J.extend(c,{top:g,left:b})),p.helper.height(p.size.height),p.helper.width(p.size.width),this._helper&&!e.animate&&this._proportionallyResize()),J("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",v),this._helper&&this.helper.remove(),!1
},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}
},_applyChanges:function(){var a={};
return this.position.top!==this.prevPosition.top&&(a.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(a.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(a.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(a.height=this.size.height+"px"),this.helper.css(a),a
},_updateVirtualBoundaries:function(g){var d,c,f,l,b,h=this.options;
b={minWidth:this._isNumber(h.minWidth)?h.minWidth:0,maxWidth:this._isNumber(h.maxWidth)?h.maxWidth:1/0,minHeight:this._isNumber(h.minHeight)?h.minHeight:0,maxHeight:this._isNumber(h.maxHeight)?h.maxHeight:1/0},(this._aspectRatio||g)&&(d=b.minHeight*this.aspectRatio,f=b.minWidth/this.aspectRatio,c=b.maxHeight*this.aspectRatio,l=b.maxWidth/this.aspectRatio,d>b.minWidth&&(b.minWidth=d),f>b.minHeight&&(b.minHeight=f),b.maxWidth>c&&(b.maxWidth=c),b.maxHeight>l&&(b.maxHeight=l)),this._vBoundaries=b
},_updateCache:function(a){this.offset=this.helper.offset(),this._isNumber(a.left)&&(this.position.left=a.left),this._isNumber(a.top)&&(this.position.top=a.top),this._isNumber(a.height)&&(this.size.height=a.height),this._isNumber(a.width)&&(this.size.width=a.width)
},_updateRatio:function(d){var b=this.position,a=this.size,c=this.axis;
return this._isNumber(d.height)?d.width=d.height*this.aspectRatio:this._isNumber(d.width)&&(d.height=d.width/this.aspectRatio),"sw"===c&&(d.left=b.left+(a.width-d.width),d.top=null),"nw"===c&&(d.top=b.top+(a.height-d.height),d.left=b.left+(a.width-d.width)),d
},_respectSize:function(p){var O=this._vBoundaries,g=this.axis,P=this._isNumber(p.width)&&O.maxWidth&&O.maxWidth<p.width,d=this._isNumber(p.height)&&O.maxHeight&&O.maxHeight<p.height,v=this._isNumber(p.width)&&O.minWidth&&O.minWidth>p.width,c=this._isNumber(p.height)&&O.minHeight&&O.minHeight>p.height,b=this.originalPosition.left+this.originalSize.width,m=this.position.top+this.size.height,f=/sw|nw|w/.test(g),y=/nw|ne|n/.test(g);
return v&&(p.width=O.minWidth),c&&(p.height=O.minHeight),P&&(p.width=O.maxWidth),d&&(p.height=O.maxHeight),v&&f&&(p.left=b-O.minWidth),P&&f&&(p.left=b-O.maxWidth),c&&y&&(p.top=m-O.minHeight),d&&y&&(p.top=m-O.maxHeight),p.width||p.height||p.left||!p.top?p.width||p.height||p.top||!p.left||(p.left=null):p.top=null,p
},_getPaddingPlusBorderDimensions:function(d){for(var b=0,a=[],c=[d.css("borderTopWidth"),d.css("borderRightWidth"),d.css("borderBottomWidth"),d.css("borderLeftWidth")],f=[d.css("paddingTop"),d.css("paddingRight"),d.css("paddingBottom"),d.css("paddingLeft")];
4>b;
b++){a[b]=parseInt(c[b],10)||0,a[b]+=parseInt(f[b],10)||0
}return{height:a[0]+a[2],width:a[1]+a[3]}
},_proportionallyResize:function(){if(this._proportionallyResizeElements.length){for(var c,b=0,a=this.helper||this.element;
this._proportionallyResizeElements.length>b;
b++){c=this._proportionallyResizeElements[b],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(c)),c.css({height:a.height()-this.outerDimensions.height||0,width:a.width()-this.outerDimensions.width||0})
}}},_renderProxy:function(){var b=this.element,a=this.options;
this.elementOffset=b.offset(),this._helper?(this.helper=this.helper||J("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++a.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element
},_change:{e:function(b,a){return{width:this.originalSize.width+a}
},w:function(d,b){var a=this.originalSize,c=this.originalPosition;
return{left:c.left+b,width:a.width-b}
},n:function(d,b,a){var c=this.originalSize,f=this.originalPosition;
return{top:f.top+a,height:c.height-a}
},s:function(c,b,a){return{height:this.originalSize.height+a}
},se:function(b,a,c){return J.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[b,a,c]))
},sw:function(b,a,c){return J.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[b,a,c]))
},ne:function(b,a,c){return J.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[b,a,c]))
},nw:function(b,a,c){return J.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[b,a,c]))
}},_propagate:function(b,a){J.ui.plugin.call(this,b,[a,this.ui()]),"resize"!==b&&this._trigger(b,a,this.ui())
},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}
}}),J.ui.plugin.add("resizable","animate",{stop:function(v){var f=J(this).resizable("instance"),y=f.options,d=f._proportionallyResizeElements,m=d.length&&/textarea/i.test(d[0].nodeName),c=m&&f._hasScroll(d[0],"left")?0:f.sizeDiff.height,b=m?0:f.sizeDiff.width,g={width:f.size.width-b,height:f.size.height-c},e=parseInt(f.element.css("left"),10)+(f.position.left-f.originalPosition.left)||null,p=parseInt(f.element.css("top"),10)+(f.position.top-f.originalPosition.top)||null;
f.element.animate(J.extend(g,p&&e?{top:p,left:e}:{}),{duration:y.animateDuration,easing:y.animateEasing,step:function(){var a={width:parseInt(f.element.css("width"),10),height:parseInt(f.element.css("height"),10),top:parseInt(f.element.css("top"),10),left:parseInt(f.element.css("left"),10)};
d&&d.length&&J(d[0]).css({width:a.width,height:a.height}),f._updateCache(a),f._propagate("resize",v)
}})
}}),J.ui.plugin.add("resizable","containment",{start:function(){var Q,m,R,f,O,e,b,p=J(this).resizable("instance"),g=p.options,P=p.element,v=g.containment,y=v instanceof J?v.get(0):/parent/.test(v)?P.parent().get(0):v;
y&&(p.containerElement=J(y),/document/.test(v)||v===document?(p.containerOffset={left:0,top:0},p.containerPosition={left:0,top:0},p.parentData={element:J(document),left:0,top:0,width:J(document).width(),height:J(document).height()||document.body.parentNode.scrollHeight}):(Q=J(y),m=[],J(["Top","Right","Left","Bottom"]).each(function(c,a){m[c]=p._num(Q.css("padding"+a))
}),p.containerOffset=Q.offset(),p.containerPosition=Q.position(),p.containerSize={height:Q.innerHeight()-m[3],width:Q.innerWidth()-m[1]},R=p.containerOffset,f=p.containerSize.height,O=p.containerSize.width,e=p._hasScroll(y,"left")?y.scrollWidth:O,b=p._hasScroll(y)?y.scrollHeight:f,p.parentData={element:y,left:R.left,top:R.top,width:e,height:b}))
},resize:function(S){var v,T,g,Q,f=J(this).resizable("instance"),b=f.options,y=f.containerOffset,m=f.position,R=f._aspectRatio||S.shiftKey,O={top:0,left:0},P=f.containerElement,e=!0;
P[0]!==document&&/static/.test(P.css("position"))&&(O=y),m.left<(f._helper?y.left:0)&&(f.size.width=f.size.width+(f._helper?f.position.left-y.left:f.position.left-O.left),R&&(f.size.height=f.size.width/f.aspectRatio,e=!1),f.position.left=b.helper?y.left:0),m.top<(f._helper?y.top:0)&&(f.size.height=f.size.height+(f._helper?f.position.top-y.top:f.position.top),R&&(f.size.width=f.size.height*f.aspectRatio,e=!1),f.position.top=f._helper?y.top:0),g=f.containerElement.get(0)===f.element.parent().get(0),Q=/relative|absolute/.test(f.containerElement.css("position")),g&&Q?(f.offset.left=f.parentData.left+f.position.left,f.offset.top=f.parentData.top+f.position.top):(f.offset.left=f.element.offset().left,f.offset.top=f.element.offset().top),v=Math.abs(f.sizeDiff.width+(f._helper?f.offset.left-O.left:f.offset.left-y.left)),T=Math.abs(f.sizeDiff.height+(f._helper?f.offset.top-O.top:f.offset.top-y.top)),v+f.size.width>=f.parentData.width&&(f.size.width=f.parentData.width-v,R&&(f.size.height=f.size.width/f.aspectRatio,e=!1)),T+f.size.height>=f.parentData.height&&(f.size.height=f.parentData.height-T,R&&(f.size.width=f.size.height*f.aspectRatio,e=!1)),e||(f.position.left=f.prevPosition.left,f.position.top=f.prevPosition.top,f.size.width=f.prevSize.width,f.size.height=f.prevSize.height)
},stop:function(){var p=J(this).resizable("instance"),f=p.options,u=p.containerOffset,d=p.containerPosition,m=p.containerElement,c=J(p.helper),b=c.offset(),g=c.outerWidth()-p.sizeDiff.width,e=c.outerHeight()-p.sizeDiff.height;
p._helper&&!f.animate&&/relative/.test(m.css("position"))&&J(this).css({left:b.left-d.left-u.left,width:g,height:e}),p._helper&&!f.animate&&/static/.test(m.css("position"))&&J(this).css({left:b.left-d.left-u.left,width:g,height:e})
}}),J.ui.plugin.add("resizable","alsoResize",{start:function(){var b=J(this).resizable("instance"),a=b.options,c=function(d){J(d).each(function(){var e=J(this);
e.data("ui-resizable-alsoresize",{width:parseInt(e.width(),10),height:parseInt(e.height(),10),left:parseInt(e.css("left"),10),top:parseInt(e.css("top"),10)})
})
};
"object"!=typeof a.alsoResize||a.alsoResize.parentNode?c(a.alsoResize):a.alsoResize.length?(a.alsoResize=a.alsoResize[0],c(a.alsoResize)):J.each(a.alsoResize,function(d){c(d)
})
},resize:function(d,c){var f=J(this).resizable("instance"),m=f.options,b=f.originalSize,l=f.originalPosition,g={height:f.size.height-b.height||0,width:f.size.width-b.width||0,top:f.position.top-l.top||0,left:f.position.left-l.left||0},e=function(a,h){J(a).each(function(){var p=J(this),s=J(this).data("ui-resizable-alsoresize"),i={},r=h&&h.length?h:p.parents(c.originalElement[0]).length?["width","height"]:["width","height","top","left"];
J.each(r,function(u,o){var n=(s[o]||0)+(g[o]||0);
n&&n>=0&&(i[o]=n||null)
}),p.css(i)
})
};
"object"!=typeof m.alsoResize||m.alsoResize.nodeType?e(m.alsoResize):J.each(m.alsoResize,function(h,a){e(h,a)
})
},stop:function(){J(this).removeData("resizable-alsoresize")
}}),J.ui.plugin.add("resizable","ghost",{start:function(){var b=J(this).resizable("instance"),a=b.options,c=b.size;
b.ghost=b.originalElement.clone(),b.ghost.css({opacity:0.25,display:"block",position:"relative",height:c.height,width:c.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof a.ghost?a.ghost:""),b.ghost.appendTo(b.helper)
},resize:function(){var a=J(this).resizable("instance");
a.ghost&&a.ghost.css({position:"relative",height:a.size.height,width:a.size.width})
},stop:function(){var a=J(this).resizable("instance");
a.ghost&&a.helper&&a.helper.get(0).removeChild(a.ghost.get(0))
}}),J.ui.plugin.add("resizable","grid",{resize:function(){var P,X=J(this).resizable("instance"),Q=X.options,U=X.size,ad=X.originalSize,T=X.originalPosition,R=X.axis,Y="number"==typeof Q.grid?[Q.grid,Q.grid]:Q.grid,W=Y[0]||1,O=Y[1]||1,ab=Math.round((U.width-ad.width)/W)*W,ac=Math.round((U.height-ad.height)/O)*O,S=ad.width+ab,aa=ad.height+ac,V=Q.maxWidth&&S>Q.maxWidth,Z=Q.maxHeight&&aa>Q.maxHeight,e=Q.minWidth&&Q.minWidth>S,b=Q.minHeight&&Q.minHeight>aa;
Q.grid=Y,e&&(S+=W),b&&(aa+=O),V&&(S-=W),Z&&(aa-=O),/^(se|s|e)$/.test(R)?(X.size.width=S,X.size.height=aa):/^(ne)$/.test(R)?(X.size.width=S,X.size.height=aa,X.position.top=T.top-ac):/^(sw)$/.test(R)?(X.size.width=S,X.size.height=aa,X.position.left=T.left-ab):((0>=aa-O||0>=S-W)&&(P=X._getPaddingPlusBorderDimensions(this)),aa-O>0?(X.size.height=aa,X.position.top=T.top-ac):(aa=O-P.height,X.size.height=aa,X.position.top=T.top+ad.height-aa),S-W>0?(X.size.width=S,X.position.left=T.left-ab):(S=O-P.height,X.size.width=S,X.position.left=T.left+ad.width-S))
}}),J.ui.resizable,J.widget("ui.dialog",{version:"1.11.2",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(b){var a=J(this).css(b).offset().top;
0>a&&J(this).css("top",b.top-a)
}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&J.fn.draggable&&this._makeDraggable(),this.options.resizable&&J.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()
},_init:function(){this.options.autoOpen&&this.open()
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a.jquery||a.nodeType)?J(a):this.document.find(a||"body").eq(0)
},_destroy:function(){var b,a=this.originalPosition;
this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),b=a.parent.children().eq(a.index),b.length&&b[0]!==this.element[0]?b.before(this.element):a.parent.append(this.element)
},widget:function(){return this.uiDialog
},disable:J.noop,enable:J.noop,close:function(b){var a,c=this;
if(this._isOpen&&this._trigger("beforeClose",b)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length){try{a=this.document[0].activeElement,a&&"body"!==a.nodeName.toLowerCase()&&J(a).blur()
}catch(d){}}this._hide(this.uiDialog,this.options.hide,function(){c._trigger("close",b)
})
}},isOpen:function(){return this._isOpen
},moveToTop:function(){this._moveToTop()
},_moveToTop:function(d,c){var e=!1,f=this.uiDialog.siblings(".ui-front:visible").map(function(){return +J(this).css("z-index")
}).get(),b=Math.max.apply(null,f);
return b>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",b+1),e=!0),e&&!c&&this._trigger("focus",d),e
},open:function(){var a=this;
return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=J(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){a._focusTabbable(),a._trigger("focus")
}),this._makeFocusTarget(),this._trigger("open"),void 0)
},_focusTabbable:function(){var a=this._focusedElement;
a||(a=this.element.find("[autofocus]")),a.length||(a=this.element.find(":tabbable")),a.length||(a=this.uiDialogButtonPane.find(":tabbable")),a.length||(a=this.uiDialogTitlebarClose.filter(":tabbable")),a.length||(a=this.uiDialog),a.eq(0).focus()
},_keepFocus:function(b){function a(){var d=this.document[0].activeElement,c=this.uiDialog[0]===d||J.contains(this.uiDialog[0],d);
c||this._focusTabbable()
}b.preventDefault(),a.call(this),this._delay(a)
},_createWrapper:function(){this.uiDialog=J("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(b){if(this.options.closeOnEscape&&!b.isDefaultPrevented()&&b.keyCode&&b.keyCode===J.ui.keyCode.ESCAPE){return b.preventDefault(),this.close(b),void 0
}if(b.keyCode===J.ui.keyCode.TAB&&!b.isDefaultPrevented()){var a=this.uiDialog.find(":tabbable"),c=a.filter(":first"),d=a.filter(":last");
b.target!==d[0]&&b.target!==this.uiDialog[0]||b.shiftKey?b.target!==c[0]&&b.target!==this.uiDialog[0]||!b.shiftKey||(this._delay(function(){d.focus()
}),b.preventDefault()):(this._delay(function(){c.focus()
}),b.preventDefault())
}},mousedown:function(a){this._moveToTop(a)&&this._focusTabbable()
}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})
},_createTitlebar:function(){var a;
this.uiDialogTitlebar=J("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(b){J(b.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()
}}),this.uiDialogTitlebarClose=J("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(b){b.preventDefault(),this.close(b)
}}),a=J("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(a),this.uiDialog.attr({"aria-labelledby":a.attr("id")})
},_title:function(a){this.options.title||a.html("&#160;"),a.text(this.options.title)
},_createButtonPane:function(){this.uiDialogButtonPane=J("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=J("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()
},_createButtons:function(){var b=this,a=this.options.buttons;
return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),J.isEmptyObject(a)||J.isArray(a)&&!a.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(J.each(a,function(d,e){var f,c;
e=J.isFunction(e)?{click:e,text:d}:e,e=J.extend({type:"button"},e),f=e.click,e.click=function(){f.apply(b.element[0],arguments)
},c={icons:e.icons,text:e.showText},delete e.icons,delete e.showText,J("<button></button>",e).button(c).appendTo(b.uiButtonSet)
}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)
},_makeDraggable:function(){function b(d){return{position:d.position,offset:d.offset}
}var a=this,c=this.options;
this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(d,e){J(this).addClass("ui-dialog-dragging"),a._blockFrames(),a._trigger("dragStart",d,b(e))
},drag:function(f,d){a._trigger("drag",f,b(d))
},stop:function(g,d){var f=d.offset.left-a.document.scrollLeft(),e=d.offset.top-a.document.scrollTop();
c.position={my:"left top",at:"left"+(f>=0?"+":"")+f+" top"+(e>=0?"+":"")+e,of:a.window},J(this).removeClass("ui-dialog-dragging"),a._unblockFrames(),a._trigger("dragStop",g,b(d))
}})
},_makeResizable:function(){function d(a){return{originalPosition:a.originalPosition,originalSize:a.originalSize,position:a.position,size:a.size}
}var c=this,e=this.options,g=e.resizable,b=this.uiDialog.css("position"),f="string"==typeof g?g:"n,e,s,w,se,sw,ne,nw";
this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:e.maxWidth,maxHeight:e.maxHeight,minWidth:e.minWidth,minHeight:this._minHeight(),handles:f,start:function(a,h){J(this).addClass("ui-dialog-resizing"),c._blockFrames(),c._trigger("resizeStart",a,d(h))
},resize:function(h,a){c._trigger("resize",h,d(a))
},stop:function(s,i){var p=c.uiDialog.offset(),m=p.left-c.document.scrollLeft(),l=p.top-c.document.scrollTop();
e.height=c.uiDialog.height(),e.width=c.uiDialog.width(),e.position={my:"left top",at:"left"+(m>=0?"+":"")+m+" top"+(l>=0?"+":"")+l,of:c.window},J(this).removeClass("ui-dialog-resizing"),c._unblockFrames(),c._trigger("resizeStop",s,d(i))
}}).css("position",b)
},_trackFocus:function(){this._on(this.widget(),{focusin:function(a){this._makeFocusTarget(),this._focusedElement=J(a.target)
}})
},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)
},_untrackInstance:function(){var b=this._trackingInstances(),a=J.inArray(this,b);
-1!==a&&b.splice(a,1)
},_trackingInstances:function(){var a=this.document.data("ui-dialog-instances");
return a||(a=[],this.document.data("ui-dialog-instances",a)),a
},_minHeight:function(){var a=this.options;
return"auto"===a.height?a.minHeight:Math.min(a.minHeight,a.height)
},_position:function(){var a=this.uiDialog.is(":visible");
a||this.uiDialog.show(),this.uiDialog.position(this.options.position),a||this.uiDialog.hide()
},_setOptions:function(b){var a=this,c=!1,d={};
J.each(b,function(g,f){a._setOption(g,f),g in a.sizeRelatedOptions&&(c=!0),g in a.resizableRelatedOptions&&(d[g]=f)
}),c&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",d)
},_setOption:function(d,b){var a,c,f=this.uiDialog;
"dialogClass"===d&&f.removeClass(this.options.dialogClass).addClass(b),"disabled"!==d&&(this._super(d,b),"appendTo"===d&&this.uiDialog.appendTo(this._appendTo()),"buttons"===d&&this._createButtons(),"closeText"===d&&this.uiDialogTitlebarClose.button({label:""+b}),"draggable"===d&&(a=f.is(":data(ui-draggable)"),a&&!b&&f.draggable("destroy"),!a&&b&&this._makeDraggable()),"position"===d&&this._position(),"resizable"===d&&(c=f.is(":data(ui-resizable)"),c&&!b&&f.resizable("destroy"),c&&"string"==typeof b&&f.resizable("option","handles",b),c||b===!1||this._makeResizable()),"title"===d&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
},_size:function(){var d,b,a,c=this.options;
this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),c.minWidth>c.width&&(c.width=c.minWidth),d=this.uiDialog.css({height:"auto",width:c.width}).outerHeight(),b=Math.max(0,c.minHeight-d),a="number"==typeof c.maxHeight?Math.max(0,c.maxHeight-d):"none","auto"===c.height?this.element.css({minHeight:b,maxHeight:a,height:"auto"}):this.element.height(Math.max(0,c.height-d)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())
},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var a=J(this);
return J("<div>").css({position:"absolute",width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(a.offset())[0]
})
},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)
},_allowInteraction:function(a){return J(a.target).closest(".ui-dialog").length?!0:!!J(a.target).closest(".ui-datepicker").length
},_createOverlay:function(){if(this.options.modal){var a=!0;
this._delay(function(){a=!1
}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(b){a||this._allowInteraction(b)||(b.preventDefault(),this._trackingInstances()[0]._focusTabbable())
}}),this.overlay=J("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)
}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var a=this.document.data("ui-dialog-overlays")-1;
a?this.document.data("ui-dialog-overlays",a):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null
}}}),J.widget("ui.droppable",{version:"1.11.2",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var b,a=this.options,c=a.accept;
this.isover=!1,this.isout=!0,this.accept=J.isFunction(c)?c:function(d){return d.is(c)
},this.proportions=function(){return arguments.length?(b=arguments[0],void 0):b?b:b={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}
},this._addToManager(a.scope),a.addClasses&&this.element.addClass("ui-droppable")
},_addToManager:function(a){J.ui.ddmanager.droppables[a]=J.ui.ddmanager.droppables[a]||[],J.ui.ddmanager.droppables[a].push(this)
},_splice:function(b){for(var a=0;
b.length>a;
a++){b[a]===this&&b.splice(a,1)
}},_destroy:function(){var a=J.ui.ddmanager.droppables[this.options.scope];
this._splice(a),this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(b,a){if("accept"===b){this.accept=J.isFunction(a)?a:function(d){return d.is(a)
}
}else{if("scope"===b){var c=J.ui.ddmanager.droppables[this.options.scope];
this._splice(c),this._addToManager(a)
}}this._super(b,a)
},_activate:function(b){var a=J.ui.ddmanager.current;
this.options.activeClass&&this.element.addClass(this.options.activeClass),a&&this._trigger("activate",b,this.ui(a))
},_deactivate:function(b){var a=J.ui.ddmanager.current;
this.options.activeClass&&this.element.removeClass(this.options.activeClass),a&&this._trigger("deactivate",b,this.ui(a))
},_over:function(b){var a=J.ui.ddmanager.current;
a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",b,this.ui(a)))
},_out:function(b){var a=J.ui.ddmanager.current;
a&&(a.currentItem||a.element)[0]!==this.element[0]&&this.accept.call(this.element[0],a.currentItem||a.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",b,this.ui(a)))
},_drop:function(b,a){var c=a||J.ui.ddmanager.current,d=!1;
return c&&(c.currentItem||c.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var e=J(this).droppable("instance");
return e.options.greedy&&!e.options.disabled&&e.options.scope===c.options.scope&&e.accept.call(e.element[0],c.currentItem||c.element)&&J.ui.intersect(c,J.extend(e,{offset:e.element.offset()}),e.options.tolerance,b)?(d=!0,!1):void 0
}),d?!1:this.accept.call(this.element[0],c.currentItem||c.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",b,this.ui(c)),this.element):!1):!1
},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}
}}),J.ui.intersect=function(){function a(d,c,b){return d>=c&&c+b>d
}return function(Q,m,R,f){if(!m.offset){return !1
}var O=(Q.positionAbs||Q.position.absolute).left+Q.margins.left,e=(Q.positionAbs||Q.position.absolute).top+Q.margins.top,b=O+Q.helperProportions.width,p=e+Q.helperProportions.height,g=m.offset.left,P=m.offset.top,v=g+m.proportions().width,y=P+m.proportions().height;
switch(R){case"fit":return O>=g&&v>=b&&e>=P&&y>=p;
case"intersect":return O+Q.helperProportions.width/2>g&&v>b-Q.helperProportions.width/2&&e+Q.helperProportions.height/2>P&&y>p-Q.helperProportions.height/2;
case"pointer":return a(f.pageY,P,m.proportions().height)&&a(f.pageX,g,m.proportions().width);
case"touch":return(e>=P&&y>=e||p>=P&&y>=p||P>e&&p>y)&&(O>=g&&v>=O||b>=g&&v>=b||g>O&&b>v);
default:return !1
}}
}(),J.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(d,c){var e,h,b=J.ui.ddmanager.droppables[d.options.scope]||[],g=c?c.type:null,f=(d.currentItem||d.element).find(":data(ui-droppable)").addBack();
J:for(e=0;
b.length>e;
e++){if(!(b[e].options.disabled||d&&!b[e].accept.call(b[e].element[0],d.currentItem||d.element))){for(h=0;
f.length>h;
h++){if(f[h]===b[e].element[0]){b[e].proportions().height=0;
continue J
}}b[e].visible="none"!==b[e].element.css("display"),b[e].visible&&("mousedown"===g&&b[e]._activate.call(b[e],c),b[e].offset=b[e].element.offset(),b[e].proportions({width:b[e].element[0].offsetWidth,height:b[e].element[0].offsetHeight}))
}}},drop:function(b,a){var c=!1;
return J.each((J.ui.ddmanager.droppables[b.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&J.ui.intersect(b,this,this.options.tolerance,a)&&(c=this._drop.call(this,a)||c),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],b.currentItem||b.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,a)))
}),c
},dragStart:function(b,a){b.element.parentsUntil("body").bind("scroll.droppable",function(){b.options.refreshPositions||J.ui.ddmanager.prepareOffsets(b,a)
})
},drag:function(b,a){b.options.refreshPositions&&J.ui.ddmanager.prepareOffsets(b,a),J.each(J.ui.ddmanager.droppables[b.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var d,g,c,f=J.ui.intersect(b,this,this.options.tolerance,a),e=!f&&this.isover?"isout":f&&!this.isover?"isover":null;
e&&(this.options.greedy&&(g=this.options.scope,c=this.element.parents(":data(ui-droppable)").filter(function(){return J(this).droppable("instance").options.scope===g
}),c.length&&(d=J(c[0]).droppable("instance"),d.greedyChild="isover"===e)),d&&"isover"===e&&(d.isover=!1,d.isout=!0,d._out.call(d,a)),this[e]=!0,this["isout"===e?"isover":"isout"]=!1,this["isover"===e?"_over":"_out"].call(this,a),d&&"isout"===e&&(d.isout=!1,d.isover=!0,d._over.call(d,a)))
}})
},dragStop:function(b,a){b.element.parentsUntil("body").unbind("scroll.droppable"),b.options.refreshPositions||J.ui.ddmanager.prepareOffsets(b,a)
}},J.ui.droppable;
var j="ui-effects-",M=J;
J.effects={effect:{}},function(R,W){function O(f,c,a){var d=S[c.type]||{};
return null==f?a||!c.def?null:c.def:(f=d.floor?~~f:parseFloat(f),isNaN(f)?c.def:d.mod?(f+d.mod)%d.mod:0>f?0:f>d.max?d.max:f)
}function X(a){var c=y(),d=c._rgba=[];
return a=a.toLowerCase(),Q(P,function(s,i){var t,p=i.re.exec(a),n=p&&i.parse(p),f=i.space||"rgba";
return n?(t=c[f](n),c[V[f].cache]=t[V[f].cache],d=c._rgba=t._rgba,!1):W
}),d.length?("0,0,0,0"===d.join()&&R.extend(d,U.transparent),c):U[a]
}function v(d,c,a){return a=(a+1)%1,1>6*a?d+6*(c-d)*a:1>2*a?c:2>3*a?d+6*(c-d)*(2/3-a):d
}var U,m="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",b=/^([\-+])=\s*(\d+\.?\d*)/,P=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[a[1],a[2],a[3],a[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]
}}],y=R.Color=function(c,a,d,e){return new R.Color.fn.parse(c,a,d,e)
},V={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},S={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},T=y.support={},g=R("<p>")[0],Q=R.each;
g.style.cssText="background-color:rgba(1,1,1,.5)",T.rgba=g.style.backgroundColor.indexOf("rgba")>-1,Q(V,function(c,a){a.cache="_"+c,a.props.alpha={idx:3,type:"percent",def:1}
}),y.fn=R.extend(y.prototype,{parse:function(t,l,e,a){if(t===W){return this._rgba=[null,null,null,null],this
}(t.jquery||t.nodeType)&&(t=R(t).css(l),l=W);
var i=this,s=R.type(t),f=this._rgba=[];
return l!==W&&(t=[t,l,e,a],s="array"),"string"===s?this.parse(X(t)||U._default):"array"===s?(Q(V.rgba.props,function(d,c){f[c.idx]=O(t[c.idx],c)
}),this):"object"===s?(t instanceof y?Q(V,function(d,c){t[c.cache]&&(i[c.cache]=t[c.cache].slice())
}):Q(V,function(d,h){var c=h.cache;
Q(h.props,function(o,n){if(!i[c]&&h.to){if("alpha"===o||null==t[o]){return
}i[c]=h.to(i._rgba)
}i[c][n.idx]=O(t[o],n,!0)
}),i[c]&&0>R.inArray(null,i[c].slice(0,3))&&(i[c][3]=1,h.from&&(i._rgba=h.from(i[c])))
}),this):W
},is:function(d){var a=y(d),c=!0,f=this;
return Q(V,function(l,h){var n,i=a[h.cache];
return i&&(n=f[h.cache]||h.to&&h.to(f._rgba)||[],Q(h.props,function(p,o){return null!=i[o.idx]?c=i[o.idx]===n[o.idx]:W
})),c
}),c
},_space:function(){var c=[],a=this;
return Q(V,function(d,e){a[e.cache]&&c.push(d)
}),c.pop()
},transition:function(p,d){var i=y(p),Y=i._space(),c=V[Y],u=0===this.alpha()?y("transparent"):this,l=u[c.cache]||c.to(u._rgba),f=l.slice();
return i=i[c.cache],Q(c.props,function(t,aa){var r=aa.idx,Z=l[r],h=i[r],s=S[aa.type]||{};
null!==h&&(null===Z?f[r]=h:(s.mod&&(h-Z>s.mod/2?Z+=s.mod:Z-h>s.mod/2&&(Z-=s.mod)),f[r]=O((h-Z)*d+Z,aa)))
}),this[Y](f)
},blend:function(c){if(1===this._rgba[3]){return this
}var a=this._rgba.slice(),d=a.pop(),e=y(c)._rgba;
return y(R.map(a,function(h,f){return(1-d)*e[f]+d*h
}))
},toRgbaString:function(){var c="rgba(",a=R.map(this._rgba,function(f,d){return null==f?d>2?1:0:f
});
return 1===a[3]&&(a.pop(),c="rgb("),c+a.join()+")"
},toHslaString:function(){var c="hsla(",a=R.map(this.hsla(),function(f,d){return null==f&&(f=d>2?1:0),d&&3>d&&(f=Math.round(100*f)+"%"),f
});
return 1===a[3]&&(a.pop(),c="hsl("),c+a.join()+")"
},toHexString:function(c){var a=this._rgba.slice(),d=a.pop();
return c&&a.push(~~(255*d)),"#"+R.map(a,function(f){return f=(f||0).toString(16),1===f.length?"0"+f:f
}).join("")
},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()
}}),y.fn.parse.prototype=y.fn,V.hsla.to=function(ab){if(null==ab[0]||null==ab[1]||null==ab[2]){return[null,null,null,ab[3]]
}var af,Z,ag=ab[0]/255,p=ab[1]/255,ad=ab[2]/255,f=ab[3],c=Math.max(ag,p,ad),aa=Math.min(ag,p,ad),Y=c-aa,ae=c+aa,ac=0.5*ae;
return af=aa===c?0:ag===c?60*(p-ad)/Y+360:p===c?60*(ad-ag)/Y+120:60*(ag-p)/Y+240,Z=0===Y?0:0.5>=ac?Y/ae:Y/(2-ae),[Math.round(af)%360,Z,ac,null==f?1:f]
},V.hsla.from=function(n){if(null==n[0]||null==n[1]||null==n[2]){return[null,null,null,n[3]]
}var f=n[0]/360,d=n[1],h=n[2],c=n[3],p=0.5>=h?h*(1+d):h+d-h*d,l=2*h-p;
return[Math.round(255*v(l,p,f+1/3)),Math.round(255*v(l,p,f)),Math.round(255*v(l,p,f-1/3)),c]
},Q(V,function(f,l){var c=l.props,i=l.cache,e=l.to,d=l.from;
y.fn[f]=function(a){if(e&&!this[i]&&(this[i]=e(this._rgba)),a===W){return this[i].slice()
}var t,h=R.type(a),o="array"===h||"object"===h?a:arguments,p=this[i].slice();
return Q(c,function(u,n){var r=o["object"===h?u:n.idx];
null==r&&(r=p[n.idx]),p[n.idx]=O(r,n)
}),d?(t=y(d(p)),t[i]=p,t):y(p)
},Q(c,function(h,a){y.fn[h]||(y.fn[h]=function(Z){var r,Y=R.type(Z),t="alpha"===h?this._hsla?"hsla":"rgba":f,p=this[t](),s=p[a.idx];
return"undefined"===Y?s:("function"===Y&&(Z=Z.call(this,s),Y=R.type(Z)),null==Z&&a.empty?this:("string"===Y&&(r=b.exec(Z),r&&(Z=s+parseFloat(r[2])*("+"===r[1]?1:-1))),p[a.idx]=Z,this[t](p)))
})
})
}),y.hook=function(c){var a=c.split(" ");
Q(a,function(e,d){R.cssHooks[d]={set:function(i,u){var f,s,p="";
if("transparent"!==u&&("string"!==R.type(u)||(f=X(u)))){if(u=y(f||u),!T.rgba&&1!==u._rgba[3]){for(s="backgroundColor"===d?i.parentNode:i;
(""===p||"transparent"===p)&&s&&s.style;
){try{p=R.css(s,"backgroundColor"),s=s.parentNode
}catch(l){}}u=u.blend(p&&"transparent"!==p?p:"_default")
}u=u.toRgbaString()
}try{i.style[d]=u
}catch(l){}}},R.fx.step[d]=function(f){f.colorInit||(f.start=y(f.elem,d),f.end=y(f.end),f.colorInit=!0),R.cssHooks[d].set(f.elem,f.start.transition(f.end,f.pos))
}
})
},y.hook(m),R.cssHooks.borderColor={expand:function(c){var a={};
return Q(["Top","Right","Bottom","Left"],function(d,e){a["border"+e+"Color"]=c
}),a
}},U=R.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
}(M),function(){function b(g){var f,h,l=g.ownerDocument.defaultView?g.ownerDocument.defaultView.getComputedStyle(g,null):g.currentStyle,e={};
if(l&&l.length&&l[0]&&l[l[0]]){for(h=l.length;
h--;
){f=l[h],"string"==typeof l[f]&&(e[J.camelCase(f)]=l[f])
}}else{for(f in l){"string"==typeof l[f]&&(e[f]=l[f])
}}return e
}function a(g,f){var h,e,l={};
for(h in f){e=f[h],g[h]!==e&&(d[h]||(J.fx.step[h]||!isNaN(parseFloat(e)))&&(l[h]=e))
}return l
}var c=["add","remove","toggle"],d={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
J.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(f,e){J.fx.step[e]=function(g){("none"!==g.end&&!g.setAttr||1===g.pos&&!g.setAttr)&&(M.style(g.elem,e,g.end),g.setAttr=!0)
}
}),J.fn.addBack||(J.fn.addBack=function(f){return this.add(null==f?this.prevObject:this.prevObject.filter(f))
}),J.effects.animateClass=function(l,e,i,g){var f=J.speed(e,i,g);
return this.queue(function(){var m,p=J(this),n=p.attr("class")||"",h=f.children?p.find("*").addBack():p;
h=h.map(function(){var o=J(this);
return{el:o,start:b(this)}
}),m=function(){J.each(c,function(r,o){l[o]&&p[o+"Class"](l[o])
})
},m(),h=h.map(function(){return this.end=b(this.el[0]),this.diff=a(this.start,this.end),this
}),p.attr("class",n),h=h.map(function(){var r=this,o=J.Deferred(),u=J.extend({},f,{queue:!1,complete:function(){o.resolve(r)
}});
return this.el.animate(this.diff,u),o.promise()
}),J.when.apply(J,h.get()).done(function(){m(),J.each(arguments,function(){var o=this.el;
J.each(this.diff,function(r){o.css(r,"")
})
}),f.complete.call(p[0])
})
})
},J.fn.extend({addClass:function(e){return function(g,h,l,f){return h?J.effects.animateClass.call(this,{add:g},h,l,f):e.apply(this,arguments)
}
}(J.fn.addClass),removeClass:function(e){return function(g,h,l,f){return arguments.length>1?J.effects.animateClass.call(this,{remove:g},h,l,f):e.apply(this,arguments)
}
}(J.fn.removeClass),toggleClass:function(e){return function(g,h,m,f,l){return"boolean"==typeof h||void 0===h?m?J.effects.animateClass.call(this,h?{add:g}:{remove:g},m,f,l):e.apply(this,arguments):J.effects.animateClass.call(this,{toggle:g},h,m,f)
}
}(J.fn.toggleClass),switchClass:function(g,f,h,l,e){return J.effects.animateClass.call(this,{add:f,remove:g},h,l,e)
}})
}(),function(){function b(d,c,e,f){return J.isPlainObject(d)&&(c=d,d=d.effect),d={effect:d},null==c&&(c={}),J.isFunction(c)&&(f=c,e=null,c={}),("number"==typeof c||J.fx.speeds[c])&&(f=e,e=c,c={}),J.isFunction(e)&&(f=e,e=null),c&&J.extend(d,c),e=e||c.duration,d.duration=J.fx.off?0:"number"==typeof e?e:e in J.fx.speeds?J.fx.speeds[e]:J.fx.speeds._default,d.complete=f||c.complete,d
}function a(c){return !c||"number"==typeof c||J.fx.speeds[c]?!0:"string"!=typeof c||J.effects.effect[c]?J.isFunction(c)?!0:"object"!=typeof c||c.effect?!1:!0:!0
}J.extend(J.effects,{version:"1.11.2",save:function(f,d){for(var c=0;
d.length>c;
c++){null!==d[c]&&f.data(j+d[c],f[0].style[d[c]])
}},restore:function(g,d){var c,f;
for(f=0;
d.length>f;
f++){null!==d[f]&&(c=g.data(j+d[f]),void 0===c&&(c=""),g.css(d[f],c))
}},setMode:function(d,c){return"toggle"===c&&(c=d.is(":hidden")?"show":"hide"),c
},getBaseline:function(g,d){var c,f;
switch(g[0]){case"top":c=0;
break;
case"middle":c=0.5;
break;
case"bottom":c=1;
break;
default:c=g[0]/d.height
}switch(g[1]){case"left":f=0;
break;
case"center":f=0.5;
break;
case"right":f=1;
break;
default:f=g[1]/d.width
}return{x:f,y:c}
},createWrapper:function(e){if(e.parent().is(".ui-effects-wrapper")){return e.parent()
}var d={width:e.outerWidth(!0),height:e.outerHeight(!0),"float":e.css("float")},f=J("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),h={width:e.width(),height:e.height()},c=document.activeElement;
try{c.id
}catch(g){c=document.body
}return e.wrap(f),(e[0]===c||J.contains(e[0],c))&&J(c).focus(),f=e.parent(),"static"===e.css("position")?(f.css({position:"relative"}),e.css({position:"relative"})):(J.extend(d,{position:e.css("position"),zIndex:e.css("z-index")}),J.each(["top","left","bottom","right"],function(l,i){d[i]=e.css(i),isNaN(parseInt(d[i],10))&&(d[i]="auto")
}),e.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),e.css(h),f.css(d).show()
},removeWrapper:function(d){var c=document.activeElement;
return d.parent().is(".ui-effects-wrapper")&&(d.parent().replaceWith(d),(d[0]===c||J.contains(d[0],c))&&J(c).focus()),d
},setTransition:function(d,c,e,f){return f=f||{},J.each(c,function(l,h){var g=d.cssUnit(h);
g[0]>0&&(f[h]=g[0]*e+g[1])
}),f
}}),J.fn.extend({effect:function(){function d(m){function l(){J.isFunction(h)&&h.call(p[0]),J.isFunction(m)&&m()
}var p=J(this),h=e.complete,o=e.mode;
(p.is(":hidden")?"hide"===o:"show"===o)?(p[o](),l()):f.call(p[0],e,l)
}var e=b.apply(this,arguments),g=e.mode,c=e.queue,f=J.effects.effect[e.effect];
return J.fx.off||!f?g?this[g](e.duration,e.complete):this.each(function(){e.complete&&e.complete.call(this)
}):c===!1?this.each(d):this.queue(c||"fx",d)
},show:function(c){return function(d){if(a(d)){return c.apply(this,arguments)
}var e=b.apply(this,arguments);
return e.mode="show",this.effect.call(this,e)
}
}(J.fn.show),hide:function(c){return function(d){if(a(d)){return c.apply(this,arguments)
}var e=b.apply(this,arguments);
return e.mode="hide",this.effect.call(this,e)
}
}(J.fn.hide),toggle:function(c){return function(d){if(a(d)||"boolean"==typeof d){return c.apply(this,arguments)
}var e=b.apply(this,arguments);
return e.mode="toggle",this.effect.call(this,e)
}
}(J.fn.toggle),cssUnit:function(d){var c=this.css(d),e=[];
return J.each(["em","px","%","pt"],function(g,f){c.indexOf(f)>0&&(e=[parseFloat(c),f])
}),e
}})
}(),function(){var a={};
J.each(["Quad","Cubic","Quart","Quint","Expo"],function(c,b){a[b]=function(d){return Math.pow(d,c+2)
}
}),J.extend(a,{Sine:function(b){return 1-Math.cos(b*Math.PI/2)
},Circ:function(b){return 1-Math.sqrt(1-b*b)
},Elastic:function(b){return 0===b||1===b?b:-Math.pow(2,8*(b-1))*Math.sin((80*(b-1)-7.5)*Math.PI/15)
},Back:function(b){return b*b*(3*b-2)
},Bounce:function(d){for(var c,b=4;
((c=Math.pow(2,--b))-1)/11>d;
){}return 1/Math.pow(4,3-b)-7.5625*Math.pow((3*c-2)/22-d,2)
}}),J.each(a,function(c,b){J.easing["easeIn"+c]=b,J.easing["easeOut"+c]=function(d){return 1-b(1-d)
},J.easing["easeInOut"+c]=function(d){return 0.5>d?b(2*d)/2:1-b(-2*d+2)/2
}
})
}(),J.effects,J.effects.effect.blind=function(aa,R){var ab,O,X,y=J(this),b=/up|down|vertical/,S=/up|left|vertical|horizontal/,Q=["position","top","bottom","left","right","height","width"],Z=J.effects.setMode(y,aa.mode||"hide"),V=aa.direction||"up",W=b.test(V),e=W?"height":"width",U=W?"top":"left",P=S.test(V),T={},Y="show"===Z;
y.parent().is(".ui-effects-wrapper")?J.effects.save(y.parent(),Q):J.effects.save(y,Q),y.show(),ab=J.effects.createWrapper(y).css({overflow:"hidden"}),O=ab[e](),X=parseFloat(ab.css(U))||0,T[e]=Y?O:0,P||(y.css(W?"bottom":"right",0).css(W?"top":"left","auto").css({position:"absolute"}),T[U]=Y?X:O+X),Y&&(ab.css(e,0),P||ab.css(U,X+O)),ab.animate(T,{duration:aa.duration,easing:aa.easing,queue:!1,complete:function(){"hide"===Z&&y.hide(),J.effects.restore(y,Q),J.effects.removeWrapper(y),R()
}})
},J.effects.effect.bounce=function(Q,Y){var R,V,af,U=J(this),S=["position","top","bottom","left","right","height","width"],Z=J.effects.setMode(U,Q.mode||"effect"),X="hide"===Z,P="show"===Z,ac=Q.direction||"up",ad=Q.distance,T=Q.times||5,ab=2*T+(P||X?1:0),W=Q.duration/ab,aa=Q.easing,O="up"===ac||"down"===ac?"top":"left",e="up"===ac||"left"===ac,ae=U.queue(),ag=ae.length;
for((P||X)&&S.push("opacity"),J.effects.save(U,S),U.show(),J.effects.createWrapper(U),ad||(ad=U["top"===O?"outerHeight":"outerWidth"]()/3),P&&(af={opacity:1},af[O]=0,U.css("opacity",0).css(O,e?2*-ad:2*ad).animate(af,W,aa)),X&&(ad/=Math.pow(2,T-1)),af={},af[O]=0,R=0;
T>R;
R++){V={},V[O]=(e?"-=":"+=")+ad,U.animate(V,W,aa).animate(af,W,aa),ad=X?2*ad:ad/2
}X&&(V={opacity:0},V[O]=(e?"-=":"+=")+ad,U.animate(V,W,aa)),U.queue(function(){X&&U.hide(),J.effects.restore(U,S),J.effects.removeWrapper(U),Y()
}),ag>1&&ae.splice.apply(ae,[1,0].concat(ae.splice(ag,ab+1))),U.dequeue()
},J.effects.effect.clip=function(U,y){var V,m,S,g=J(this),b=["position","top","bottom","left","right","height","width"],O=J.effects.setMode(g,U.mode||"hide"),v="show"===O,T=U.direction||"vertical",Q="vertical"===T,R=Q?"height":"width",e=Q?"top":"left",P={};
J.effects.save(g,b),g.show(),V=J.effects.createWrapper(g).css({overflow:"hidden"}),m="IMG"===g[0].tagName?V:g,S=m[R](),v&&(m.css(R,0),m.css(e,S/2)),P[R]=v?S:0,P[e]=v?0:S/2,m.animate(P,{queue:!1,duration:U.duration,easing:U.easing,complete:function(){v||g.hide(),J.effects.restore(g,b),J.effects.removeWrapper(g),y()
}})
},J.effects.effect.drop=function(O,g){var P,e=J(this),v=["position","top","bottom","left","right","opacity","height","width"],c=J.effects.setMode(e,O.mode||"hide"),b="show"===c,m=O.direction||"left",f="up"===m||"down"===m?"top":"left",y="up"===m||"left"===m?"pos":"neg",p={opacity:b?1:0};
J.effects.save(e,v),e.show(),J.effects.createWrapper(e),P=O.distance||e["top"===f?"outerHeight":"outerWidth"](!0)/2,b&&e.css("opacity",0).css(f,"pos"===y?-P:P),p[f]=(b?"pos"===y?"+=":"-=":"pos"===y?"-=":"+=")+P,e.animate(p,{queue:!1,duration:O.duration,easing:O.easing,complete:function(){"hide"===c&&e.hide(),J.effects.restore(e,v),J.effects.removeWrapper(e),g()
}})
},J.effects.effect.explode=function(Q,Y){function R(){ae.push(this),ae.length===ac*ad&&V()
}function V(){T.css({visibility:"visible"}),J(ae).remove(),W||T.hide(),Y()
}var af,U,S,Z,X,P,ac=Q.pieces?Math.round(Math.sqrt(Q.pieces)):3,ad=ac,T=J(this),ab=J.effects.setMode(T,Q.mode||"hide"),W="show"===ab,aa=T.show().css("visibility","hidden").offset(),O=Math.ceil(T.outerWidth()/ad),e=Math.ceil(T.outerHeight()/ac),ae=[];
for(af=0;
ac>af;
af++){for(Z=aa.top+af*e,P=af-(ac-1)/2,U=0;
ad>U;
U++){S=aa.left+U*O,X=U-(ad-1)/2,T.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-U*O,top:-af*e}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:O,height:e,left:S+(W?X*O:0),top:Z+(W?P*e:0),opacity:W?0:1}).animate({left:S+(W?0:X*O),top:Z+(W?0:P*e),opacity:W?1:0},Q.duration||500,Q.easing,R)
}}},J.effects.effect.fade=function(b,a){var c=J(this),d=J.effects.setMode(c,b.mode||"toggle");
c.animate({opacity:d},{queue:!1,duration:b.duration,easing:b.easing,complete:a})
},J.effects.effect.fold=function(aa,R){var ab,O,X=J(this),y=["position","top","bottom","left","right","height","width"],b=J.effects.setMode(X,aa.mode||"hide"),S="show"===b,Q="hide"===b,Z=aa.size||15,V=/([0-9]+)%/.exec(Z),W=!!aa.horizFirst,e=S!==W,U=e?["width","height"]:["height","width"],P=aa.duration/2,T={},Y={};
J.effects.save(X,y),X.show(),ab=J.effects.createWrapper(X).css({overflow:"hidden"}),O=e?[ab.width(),ab.height()]:[ab.height(),ab.width()],V&&(Z=parseInt(V[1],10)/100*O[Q?0:1]),S&&ab.css(W?{height:0,width:Z}:{height:Z,width:0}),T[U[0]]=S?O[0]:Z,Y[U[1]]=S?O[1]:0,ab.animate(T,P,aa.easing).animate(Y,P,aa.easing,function(){Q&&X.hide(),J.effects.restore(X,y),J.effects.removeWrapper(X),R()
})
},J.effects.effect.highlight=function(d,c){var e=J(this),g=["backgroundImage","backgroundColor","opacity"],b=J.effects.setMode(e,d.mode||"show"),f={backgroundColor:e.css("backgroundColor")};
"hide"===b&&(f.opacity=0),J.effects.save(e,g),e.show().css({backgroundImage:"none",backgroundColor:d.color||"#ffff99"}).animate(f,{queue:!1,duration:d.duration,easing:d.easing,complete:function(){"hide"===b&&e.hide(),J.effects.restore(e,g),c()
}})
},J.effects.effect.size=function(Q,Y){var R,V,af,U=J(this),S=["position","top","bottom","left","right","width","height","overflow","opacity"],Z=["position","top","bottom","left","right","overflow","opacity"],X=["width","height","overflow"],P=["fontSize"],ac=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],ad=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],T=J.effects.setMode(U,Q.mode||"effect"),ab=Q.restore||"effect"!==T,W=Q.scale||"both",aa=Q.origin||["middle","center"],O=U.css("position"),e=ab?S:Z,ae={height:0,width:0,outerHeight:0,outerWidth:0};
"show"===T&&U.show(),R={height:U.height(),width:U.width(),outerHeight:U.outerHeight(),outerWidth:U.outerWidth()},"toggle"===Q.mode&&"show"===T?(U.from=Q.to||ae,U.to=Q.from||R):(U.from=Q.from||("show"===T?ae:R),U.to=Q.to||("hide"===T?ae:R)),af={from:{y:U.from.height/R.height,x:U.from.width/R.width},to:{y:U.to.height/R.height,x:U.to.width/R.width}},("box"===W||"both"===W)&&(af.from.y!==af.to.y&&(e=e.concat(ac),U.from=J.effects.setTransition(U,ac,af.from.y,U.from),U.to=J.effects.setTransition(U,ac,af.to.y,U.to)),af.from.x!==af.to.x&&(e=e.concat(ad),U.from=J.effects.setTransition(U,ad,af.from.x,U.from),U.to=J.effects.setTransition(U,ad,af.to.x,U.to))),("content"===W||"both"===W)&&af.from.y!==af.to.y&&(e=e.concat(P).concat(X),U.from=J.effects.setTransition(U,P,af.from.y,U.from),U.to=J.effects.setTransition(U,P,af.to.y,U.to)),J.effects.save(U,e),U.show(),J.effects.createWrapper(U),U.css("overflow","hidden").css(U.from),aa&&(V=J.effects.getBaseline(aa,R),U.from.top=(R.outerHeight-U.outerHeight())*V.y,U.from.left=(R.outerWidth-U.outerWidth())*V.x,U.to.top=(R.outerHeight-U.to.outerHeight)*V.y,U.to.left=(R.outerWidth-U.to.outerWidth)*V.x),U.css(U.from),("content"===W||"both"===W)&&(ac=ac.concat(["marginTop","marginBottom"]).concat(P),ad=ad.concat(["marginLeft","marginRight"]),X=S.concat(ac).concat(ad),U.find("*[width]").each(function(){var a=J(this),b={height:a.height(),width:a.width(),outerHeight:a.outerHeight(),outerWidth:a.outerWidth()};
ab&&J.effects.save(a,X),a.from={height:b.height*af.from.y,width:b.width*af.from.x,outerHeight:b.outerHeight*af.from.y,outerWidth:b.outerWidth*af.from.x},a.to={height:b.height*af.to.y,width:b.width*af.to.x,outerHeight:b.height*af.to.y,outerWidth:b.width*af.to.x},af.from.y!==af.to.y&&(a.from=J.effects.setTransition(a,ac,af.from.y,a.from),a.to=J.effects.setTransition(a,ac,af.to.y,a.to)),af.from.x!==af.to.x&&(a.from=J.effects.setTransition(a,ad,af.from.x,a.from),a.to=J.effects.setTransition(a,ad,af.to.x,a.to)),a.css(a.from),a.animate(a.to,Q.duration,Q.easing,function(){ab&&J.effects.restore(a,X)
})
})),U.animate(U.to,{queue:!1,duration:Q.duration,easing:Q.easing,complete:function(){0===U.to.opacity&&U.css("opacity",U.from.opacity),"hide"===T&&U.hide(),J.effects.restore(U,e),ab||("static"===O?U.css({position:"relative",top:U.to.top,left:U.to.left}):J.each(["top","left"],function(b,a){U.css(a,function(d,c){var f=parseInt(c,10),g=b?U.to.left:U.to.top;
return"auto"===c?g+"px":f+g+"px"
})
})),J.effects.removeWrapper(U),Y()
}})
},J.effects.effect.scale=function(v,f){var y=J(this),d=J.extend(!0,{},v),m=J.effects.setMode(y,v.mode||"effect"),c=parseInt(v.percent,10)||(0===parseInt(v.percent,10)?0:"hide"===m?0:100),b=v.direction||"both",g=v.origin,e={height:y.height(),width:y.width(),outerHeight:y.outerHeight(),outerWidth:y.outerWidth()},p={y:"horizontal"!==b?c/100:1,x:"vertical"!==b?c/100:1};
d.effect="size",d.queue=!1,d.complete=f,"effect"!==m&&(d.origin=g||["middle","center"],d.restore=!0),d.from=v.from||("show"===m?{height:0,width:0,outerHeight:0,outerWidth:0}:e),d.to={height:e.height*p.y,width:e.width*p.x,outerHeight:e.outerHeight*p.y,outerWidth:e.outerWidth*p.x},d.fade&&("show"===m&&(d.from.opacity=0,d.to.opacity=1),"hide"===m&&(d.from.opacity=1,d.to.opacity=0)),y.effect(d)
},J.effects.effect.puff=function(d,c){var f=J(this),m=J.effects.setMode(f,d.mode||"hide"),b="hide"===m,l=parseInt(d.percent,10)||150,g=l/100,e={height:f.height(),width:f.width(),outerHeight:f.outerHeight(),outerWidth:f.outerWidth()};
J.extend(d,{effect:"scale",queue:!1,fade:!0,mode:m,complete:c,percent:b?l:100,from:b?e:{height:e.height*g,width:e.width*g,outerHeight:e.outerHeight*g,outerWidth:e.outerWidth*g}}),f.effect(d)
},J.effects.effect.pulsate=function(S,v){var T,g=J(this),Q=J.effects.setMode(g,S.mode||"show"),f="show"===Q,b="hide"===Q,y=f||"hide"===Q,m=2*(S.times||5)+(y?1:0),R=S.duration/m,O=0,P=g.queue(),e=P.length;
for((f||!g.is(":visible"))&&(g.css("opacity",0).show(),O=1),T=1;
m>T;
T++){g.animate({opacity:O},R,S.easing),O=1-O
}g.animate({opacity:O},R,S.easing),g.queue(function(){b&&g.hide(),v()
}),e>1&&P.splice.apply(P,[1,0].concat(P.splice(e,m+1))),g.dequeue()
},J.effects.effect.shake=function(P,X){var Q,U=J(this),ad=["position","top","bottom","left","right","height","width"],T=J.effects.setMode(U,P.mode||"effect"),R=P.direction||"left",Y=P.distance||20,W=P.times||3,O=2*W+1,ab=Math.round(P.duration/O),ac="up"===R||"down"===R?"top":"left",S="up"===R||"left"===R,aa={},V={},Z={},e=U.queue(),b=e.length;
for(J.effects.save(U,ad),U.show(),J.effects.createWrapper(U),aa[ac]=(S?"-=":"+=")+Y,V[ac]=(S?"+=":"-=")+2*Y,Z[ac]=(S?"-=":"+=")+2*Y,U.animate(aa,ab,P.easing),Q=1;
W>Q;
Q++){U.animate(V,ab,P.easing).animate(Z,ab,P.easing)
}U.animate(V,ab,P.easing).animate(aa,ab/2,P.easing).queue(function(){"hide"===T&&U.hide(),J.effects.restore(U,ad),J.effects.removeWrapper(U),X()
}),b>1&&e.splice.apply(e,[1,0].concat(e.splice(b,O+1))),U.dequeue()
},J.effects.effect.slide=function(O,g){var P,e=J(this),v=["position","top","bottom","left","right","width","height"],c=J.effects.setMode(e,O.mode||"show"),b="show"===c,m=O.direction||"left",f="up"===m||"down"===m?"top":"left",y="up"===m||"left"===m,p={};
J.effects.save(e,v),e.show(),P=O.distance||e["top"===f?"outerHeight":"outerWidth"](!0),J.effects.createWrapper(e).css({overflow:"hidden"}),b&&e.css(f,y?isNaN(P)?"-"+P:-P:P),p[f]=(b?y?"+=":"-=":y?"-=":"+=")+P,e.animate(p,{queue:!1,duration:O.duration,easing:O.easing,complete:function(){"hide"===c&&e.hide(),J.effects.restore(e,v),J.effects.removeWrapper(e),g()
}})
},J.effects.effect.transfer=function(Q,m){var R=J(this),f=J(Q.to),O="fixed"===f.css("position"),e=J("body"),b=O?e.scrollTop():0,p=O?e.scrollLeft():0,g=f.offset(),P={top:g.top-b,left:g.left-p,height:f.innerHeight(),width:f.innerWidth()},v=R.offset(),y=J("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(Q.className).css({top:v.top-b,left:v.left-p,height:R.innerHeight(),width:R.innerWidth(),position:O?"fixed":"absolute"}).animate(P,Q.duration,Q.easing,function(){y.remove(),m()
})
},J.widget("ui.progressbar",{version:"1.11.2",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=J("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()
},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()
},value:function(a){return void 0===a?this.options.value:(this.options.value=this._constrainedValue(a),this._refreshValue(),void 0)
},_constrainedValue:function(a){return void 0===a&&(a=this.options.value),this.indeterminate=a===!1,"number"!=typeof a&&(a=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,a))
},_setOptions:function(b){var a=b.value;
delete b.value,this._super(b),this.options.value=this._constrainedValue(a),this._refreshValue()
},_setOption:function(b,a){"max"===b&&(a=Math.max(this.min,a)),"disabled"===b&&this.element.toggleClass("ui-state-disabled",!!a).attr("aria-disabled",a),this._super(b,a)
},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)
},_refreshValue:function(){var b=this.options.value,a=this._percentage();
this.valueDiv.toggle(this.indeterminate||b>this.min).toggleClass("ui-corner-right",b===this.options.max).width(a.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=J("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":b}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==b&&(this.oldValue=b,this._trigger("change")),b===this.options.max&&this._trigger("complete")
}}),J.widget("ui.selectable",J.ui.mouse,{version:"1.11.2",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var b,a=this;
this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){b=J(a.options.filter,a.element[0]),b.addClass("ui-selectee"),b.each(function(){var d=J(this),c=d.offset();
J.data(this,"selectable-item",{element:this,$element:d,left:c.left,top:c.top,right:c.left+d.outerWidth(),bottom:c.top+d.outerHeight(),startselected:!1,selected:d.hasClass("ui-selected"),selecting:d.hasClass("ui-selecting"),unselecting:d.hasClass("ui-unselecting")})
})
},this.refresh(),this.selectees=b.addClass("ui-selectee"),this._mouseInit(),this.helper=J("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()
},_mouseStart:function(b){var a=this,c=this.options;
this.opos=[b.pageX,b.pageY],this.options.disabled||(this.selectees=J(c.filter,this.element[0]),this._trigger("start",b),J(c.appendTo).append(this.helper),this.helper.css({left:b.pageX,top:b.pageY,width:0,height:0}),c.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var d=J.data(this,"selectable-item");
d.startselected=!0,b.metaKey||b.ctrlKey||(d.$element.removeClass("ui-selected"),d.selected=!1,d.$element.addClass("ui-unselecting"),d.unselecting=!0,a._trigger("unselecting",b,{unselecting:d.element}))
}),J(b.target).parents().addBack().each(function(){var d,e=J.data(this,"selectable-item");
return e?(d=!b.metaKey&&!b.ctrlKey||!e.$element.hasClass("ui-selected"),e.$element.removeClass(d?"ui-unselecting":"ui-selected").addClass(d?"ui-selecting":"ui-unselecting"),e.unselecting=!d,e.selecting=d,e.selected=d,d?a._trigger("selecting",b,{selecting:e.element}):a._trigger("unselecting",b,{unselecting:e.element}),!1):void 0
}))
},_mouseDrag:function(d){if(this.dragged=!0,!this.options.disabled){var c,f=this,m=this.options,b=this.opos[0],l=this.opos[1],g=d.pageX,e=d.pageY;
return b>g&&(c=g,g=b,b=c),l>e&&(c=e,e=l,l=c),this.helper.css({left:b,top:l,width:g-b,height:e-l}),this.selectees.each(function(){var h=J.data(this,"selectable-item"),a=!1;
h&&h.element!==f.element[0]&&("touch"===m.tolerance?a=!(h.left>g||b>h.right||h.top>e||l>h.bottom):"fit"===m.tolerance&&(a=h.left>b&&g>h.right&&h.top>l&&e>h.bottom),a?(h.selected&&(h.$element.removeClass("ui-selected"),h.selected=!1),h.unselecting&&(h.$element.removeClass("ui-unselecting"),h.unselecting=!1),h.selecting||(h.$element.addClass("ui-selecting"),h.selecting=!0,f._trigger("selecting",d,{selecting:h.element}))):(h.selecting&&((d.metaKey||d.ctrlKey)&&h.startselected?(h.$element.removeClass("ui-selecting"),h.selecting=!1,h.$element.addClass("ui-selected"),h.selected=!0):(h.$element.removeClass("ui-selecting"),h.selecting=!1,h.startselected&&(h.$element.addClass("ui-unselecting"),h.unselecting=!0),f._trigger("unselecting",d,{unselecting:h.element}))),h.selected&&(d.metaKey||d.ctrlKey||h.startselected||(h.$element.removeClass("ui-selected"),h.selected=!1,h.$element.addClass("ui-unselecting"),h.unselecting=!0,f._trigger("unselecting",d,{unselecting:h.element})))))
}),!1
}},_mouseStop:function(b){var a=this;
return this.dragged=!1,J(".ui-unselecting",this.element[0]).each(function(){var c=J.data(this,"selectable-item");
c.$element.removeClass("ui-unselecting"),c.unselecting=!1,c.startselected=!1,a._trigger("unselected",b,{unselected:c.element})
}),J(".ui-selecting",this.element[0]).each(function(){var c=J.data(this,"selectable-item");
c.$element.removeClass("ui-selecting").addClass("ui-selected"),c.selecting=!1,c.selected=!0,c.startselected=!0,a._trigger("selected",b,{selected:c.element})
}),this._trigger("stop",b),this.helper.remove(),!1
}}),J.widget("ui.selectmenu",{version:"1.11.2",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var a=this.element.uniqueId().attr("id");
this.ids={element:a,button:a+"-button",menu:a+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()
},_drawButton:function(){var b=this,a=this.element.attr("tabindex");
this.label=J("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(c){this.button.focus(),c.preventDefault()
}}),this.element.hide(),this.button=J("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:a||this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),J("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=J("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){b.menuItems||b._refreshMenu()
}),this._hoverable(this.button),this._focusable(this.button)
},_drawMenu:function(){var a=this;
this.menu=J("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=J("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(c,b){c.preventDefault(),a._setSelection(),a._select(b.item.data("ui-selectmenu-item"),c)
},focus:function(d,b){var c=b.item.data("ui-selectmenu-item");
null!=a.focusIndex&&c.index!==a.focusIndex&&(a._trigger("focus",d,{item:c}),a.isOpen||a._select(c,d)),a.focusIndex=c.index,a.button.attr("aria-activedescendant",a.menuItems.eq(c.index).attr("id"))
}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return !1
},this.menuInstance._isDivider=function(){return !1
}
},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()
},_refreshMenu:function(){this.menu.empty();
var b,a=this.element.find("option");
a.length&&(this._parseOptions(a),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),b=this._getSelectedItem(),this.menuInstance.focus(null,b),this._setAria(b.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))
},open:function(a){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",a))
},_position:function(){this.menuWrap.position(J.extend({of:this.button},this.options.position))
},close:function(a){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",a))
},widget:function(){return this.button
},menuWidget:function(){return this.menu
},_renderMenu:function(b,a){var c=this,d="";
J.each(a,function(f,e){e.optgroup!==d&&(J("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(e.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:e.optgroup}).appendTo(b),d=e.optgroup),c._renderItemData(b,e)
})
},_renderItemData:function(b,a){return this._renderItem(b,a).data("ui-selectmenu-item",a)
},_renderItem:function(b,a){var c=J("<li>");
return a.disabled&&c.addClass("ui-state-disabled"),this._setText(c,a.label),c.appendTo(b)
},_setText:function(b,a){a?b.text(a):b.html("&#160;")
},_move:function(d,b){var a,c,f=".ui-menu-item";
this.isOpen?a=this.menuItems.eq(this.focusIndex):(a=this.menuItems.eq(this.element[0].selectedIndex),f+=":not(.ui-state-disabled)"),c="first"===d||"last"===d?a["first"===d?"prevAll":"nextAll"](f).eq(-1):a[d+"All"](f).eq(0),c.length&&this.menuInstance.focus(b,c)
},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)
},_toggle:function(a){this[this.isOpen?"close":"open"](a)
},_setSelection:function(){var a;
this.range&&(window.getSelection?(a=window.getSelection(),a.removeAllRanges(),a.addRange(this.range)):this.range.select(),this.button.focus())
},_documentClick:{mousedown:function(a){this.isOpen&&(J(a.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(a))
}},_buttonEvents:{mousedown:function(){var a;
window.getSelection?(a=window.getSelection(),a.rangeCount&&(this.range=a.getRangeAt(0))):this.range=document.selection.createRange()
},click:function(a){this._setSelection(),this._toggle(a)
},keydown:function(b){var a=!0;
switch(b.keyCode){case J.ui.keyCode.TAB:case J.ui.keyCode.ESCAPE:this.close(b),a=!1;
break;
case J.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(b);
break;
case J.ui.keyCode.UP:b.altKey?this._toggle(b):this._move("prev",b);
break;
case J.ui.keyCode.DOWN:b.altKey?this._toggle(b):this._move("next",b);
break;
case J.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(b):this._toggle(b);
break;
case J.ui.keyCode.LEFT:this._move("prev",b);
break;
case J.ui.keyCode.RIGHT:this._move("next",b);
break;
case J.ui.keyCode.HOME:case J.ui.keyCode.PAGE_UP:this._move("first",b);
break;
case J.ui.keyCode.END:case J.ui.keyCode.PAGE_DOWN:this._move("last",b);
break;
default:this.menu.trigger(b),a=!1
}a&&b.preventDefault()
}},_selectFocusedItem:function(b){var a=this.menuItems.eq(this.focusIndex);
a.hasClass("ui-state-disabled")||this._select(a.data("ui-selectmenu-item"),b)
},_select:function(c,b){var a=this.element[0].selectedIndex;
this.element[0].selectedIndex=c.index,this._setText(this.buttonText,c.label),this._setAria(c),this._trigger("select",b,{item:c}),c.index!==a&&this._trigger("change",b,{item:c}),this.close(b)
},_setAria:function(b){var a=this.menuItems.eq(b.index).attr("id");
this.button.attr({"aria-labelledby":a,"aria-activedescendant":a}),this.menu.attr("aria-activedescendant",a)
},_setOption:function(b,a){"icons"===b&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(a.button),this._super(b,a),"appendTo"===b&&this.menuWrap.appendTo(this._appendTo()),"disabled"===b&&(this.menuInstance.option("disabled",a),this.button.toggleClass("ui-state-disabled",a).attr("aria-disabled",a),this.element.prop("disabled",a),a?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===b&&this._resizeButton()
},_appendTo:function(){var a=this.options.appendTo;
return a&&(a=a.jquery||a.nodeType?J(a):this.document.find(a).eq(0)),a&&a[0]||(a=this.element.closest(".ui-front")),a.length||(a=this.document[0].body),a
},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)
},_resizeButton:function(){var a=this.options.width;
a||(a=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(a)
},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))
},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}
},_parseOptions:function(b){var a=[];
b.each(function(d,e){var f=J(e),c=f.parent("optgroup");
a.push({element:f,index:d,value:f.attr("value"),label:f.text(),optgroup:c.attr("label")||"",disabled:c.prop("disabled")||f.prop("disabled")})
}),this.items=a
},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)
}}),J.widget("ui.slider",J.ui.mouse,{version:"1.11.2",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1
},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()
},_createHandles:function(){var d,c,e=this.options,g=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),b="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",f=[];
for(c=e.values&&e.values.length||1,g.length>c&&(g.slice(c).remove(),g=g.slice(0,c)),d=g.length;
c>d;
d++){f.push(b)
}this.handles=g.add(J(f.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(a){J(this).data("ui-slider-handle-index",a)
})
},_createRange:function(){var b=this.options,a="";
b.range?(b.range===!0&&(b.values?b.values.length&&2!==b.values.length?b.values=[b.values[0],b.values[0]]:J.isArray(b.values)&&(b.values=b.values.slice(0)):b.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=J("<div></div>").appendTo(this.element),a="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(a+("min"===b.range||"max"===b.range?" ui-slider-range-"+b.range:""))):(this.range&&this.range.remove(),this.range=null)
},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)
},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()
},_mouseCapture:function(O){var g,P,e,v,c,b,m,f,y=this,p=this.options;
return p.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),g={x:O.pageX,y:O.pageY},P=this._normValueFromMouse(g),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(d){var a=Math.abs(P-y.values(d));
(e>a||e===a&&(d===y._lastChangedValue||y.values(d)===p.min))&&(e=a,v=J(this),c=d)
}),b=this._start(O,c),b===!1?!1:(this._mouseSliding=!0,this._handleIndex=c,v.addClass("ui-state-active").focus(),m=v.offset(),f=!J(O.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=f?{left:0,top:0}:{left:O.pageX-m.left-v.width()/2,top:O.pageY-m.top-v.height()/2-(parseInt(v.css("borderTopWidth"),10)||0)-(parseInt(v.css("borderBottomWidth"),10)||0)+(parseInt(v.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(O,c,P),this._animateOff=!0,!0))
},_mouseStart:function(){return !0
},_mouseDrag:function(c){var b={x:c.pageX,y:c.pageY},a=this._normValueFromMouse(b);
return this._slide(c,this._handleIndex,a),!1
},_mouseStop:function(a){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1
},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"
},_normValueFromMouse:function(g){var d,c,f,h,b;
return"horizontal"===this.orientation?(d=this.elementSize.width,c=g.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(d=this.elementSize.height,c=g.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),f=c/d,f>1&&(f=1),0>f&&(f=0),"vertical"===this.orientation&&(f=1-f),h=this._valueMax()-this._valueMin(),b=this._valueMin()+f*h,this._trimAlignValue(b)
},_start:function(c,b){var a={handle:this.handles[b],value:this.value()};
return this.options.values&&this.options.values.length&&(a.value=this.values(b),a.values=this.values()),this._trigger("start",c,a)
},_slide:function(g,d,c){var f,h,b;
this.options.values&&this.options.values.length?(f=this.values(d?0:1),2===this.options.values.length&&this.options.range===!0&&(0===d&&c>f||1===d&&f>c)&&(c=f),c!==this.values(d)&&(h=this.values(),h[d]=c,b=this._trigger("slide",g,{handle:this.handles[d],value:c,values:h}),f=this.values(d?0:1),b!==!1&&this.values(d,c))):c!==this.value()&&(b=this._trigger("slide",g,{handle:this.handles[d],value:c}),b!==!1&&this.value(c))
},_stop:function(c,b){var a={handle:this.handles[b],value:this.value()};
this.options.values&&this.options.values.length&&(a.value=this.values(b),a.values=this.values()),this._trigger("stop",c,a)
},_change:function(c,b){if(!this._keySliding&&!this._mouseSliding){var a={handle:this.handles[b],value:this.value()};
this.options.values&&this.options.values.length&&(a.value=this.values(b),a.values=this.values()),this._lastChangedValue=b,this._trigger("change",c,a)
}},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),this._change(null,0),void 0):this._value()
},values:function(d,c){var e,f,b;
if(arguments.length>1){return this.options.values[d]=this._trimAlignValue(c),this._refreshValue(),this._change(null,d),void 0
}if(!arguments.length){return this._values()
}if(!J.isArray(arguments[0])){return this.options.values&&this.options.values.length?this._values(d):this.value()
}for(e=this.options.values,f=arguments[0],b=0;
e.length>b;
b+=1){e[b]=this._trimAlignValue(f[b]),this._change(null,b)
}this._refreshValue()
},_setOption:function(b,a){var c,d=0;
switch("range"===b&&this.options.range===!0&&("min"===a?(this.options.value=this._values(0),this.options.values=null):"max"===a&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),J.isArray(this.options.values)&&(d=this.options.values.length),"disabled"===b&&this.element.toggleClass("ui-state-disabled",!!a),this._super(b,a),b){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===a?"bottom":"left","");
break;
case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;
break;
case"values":for(this._animateOff=!0,this._refreshValue(),c=0;
d>c;
c+=1){this._change(null,c)
}this._animateOff=!1;
break;
case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;
break;
case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1
}},_value:function(){var a=this.options.value;
return a=this._trimAlignValue(a)
},_values:function(d){var b,a,c;
if(arguments.length){return b=this.options.values[d],b=this._trimAlignValue(b)
}if(this.options.values&&this.options.values.length){for(a=this.options.values.slice(),c=0;
a.length>c;
c+=1){a[c]=this._trimAlignValue(a[c])
}return a
}return[]
},_trimAlignValue:function(d){if(this._valueMin()>=d){return this._valueMin()
}if(d>=this._valueMax()){return this._valueMax()
}var b=this.options.step>0?this.options.step:1,a=(d-this._valueMin())%b,c=d-a;
return 2*Math.abs(a)>=b&&(c+=a>0?b:-b),parseFloat(c.toFixed(5))
},_calculateNewMax:function(){var a=(this.options.max-this._valueMin())%this.options.step;
this.max=this.options.max-a
},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.max
},_refreshValue:function(){var v,f,y,d,m,c=this.options.range,b=this.options,g=this,e=this._animateOff?!1:b.animate,p={};
this.options.values&&this.options.values.length?this.handles.each(function(a){f=100*((g.values(a)-g._valueMin())/(g._valueMax()-g._valueMin())),p["horizontal"===g.orientation?"left":"bottom"]=f+"%",J(this).stop(1,1)[e?"animate":"css"](p,b.animate),g.options.range===!0&&("horizontal"===g.orientation?(0===a&&g.range.stop(1,1)[e?"animate":"css"]({left:f+"%"},b.animate),1===a&&g.range[e?"animate":"css"]({width:f-v+"%"},{queue:!1,duration:b.animate})):(0===a&&g.range.stop(1,1)[e?"animate":"css"]({bottom:f+"%"},b.animate),1===a&&g.range[e?"animate":"css"]({height:f-v+"%"},{queue:!1,duration:b.animate}))),v=f
}):(y=this.value(),d=this._valueMin(),m=this._valueMax(),f=m!==d?100*((y-d)/(m-d)):0,p["horizontal"===this.orientation?"left":"bottom"]=f+"%",this.handle.stop(1,1)[e?"animate":"css"](p,b.animate),"min"===c&&"horizontal"===this.orientation&&this.range.stop(1,1)[e?"animate":"css"]({width:f+"%"},b.animate),"max"===c&&"horizontal"===this.orientation&&this.range[e?"animate":"css"]({width:100-f+"%"},{queue:!1,duration:b.animate}),"min"===c&&"vertical"===this.orientation&&this.range.stop(1,1)[e?"animate":"css"]({height:f+"%"},b.animate),"max"===c&&"vertical"===this.orientation&&this.range[e?"animate":"css"]({height:100-f+"%"},{queue:!1,duration:b.animate}))
},_handleEvents:{keydown:function(d){var c,e,g,b,f=J(d.target).data("ui-slider-handle-index");
switch(d.keyCode){case J.ui.keyCode.HOME:case J.ui.keyCode.END:case J.ui.keyCode.PAGE_UP:case J.ui.keyCode.PAGE_DOWN:case J.ui.keyCode.UP:case J.ui.keyCode.RIGHT:case J.ui.keyCode.DOWN:case J.ui.keyCode.LEFT:if(d.preventDefault(),!this._keySliding&&(this._keySliding=!0,J(d.target).addClass("ui-state-active"),c=this._start(d,f),c===!1)){return
}}switch(b=this.options.step,e=g=this.options.values&&this.options.values.length?this.values(f):this.value(),d.keyCode){case J.ui.keyCode.HOME:g=this._valueMin();
break;
case J.ui.keyCode.END:g=this._valueMax();
break;
case J.ui.keyCode.PAGE_UP:g=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/this.numPages);
break;
case J.ui.keyCode.PAGE_DOWN:g=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/this.numPages);
break;
case J.ui.keyCode.UP:case J.ui.keyCode.RIGHT:if(e===this._valueMax()){return
}g=this._trimAlignValue(e+b);
break;
case J.ui.keyCode.DOWN:case J.ui.keyCode.LEFT:if(e===this._valueMin()){return
}g=this._trimAlignValue(e-b)
}this._slide(d,f,g)
},keyup:function(b){var a=J(b.target).data("ui-slider-handle-index");
this._keySliding&&(this._keySliding=!1,this._stop(b,a),this._change(b,a),J(b.target).removeClass("ui-state-active"))
}}}),J.widget("ui.sortable",J.ui.mouse,{version:"1.11.2",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(c,b,a){return c>=b&&b+a>c
},_isFloating:function(a){return/left|right/.test(a.css("float"))||/inline|table-cell/.test(a.css("display"))
},_create:function(){var a=this.options;
this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===a.axis||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0
},_setOption:function(b,a){this._super(b,a),"handle"===b&&this._setHandleClassName()
},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),J.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")
})
},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();
for(var a=this.items.length-1;
a>=0;
a--){this.items[a].item.removeData(this.widgetName+"-item")
}return this
},_mouseCapture:function(d,c){var e=null,f=!1,b=this;
return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(d),J(d.target).parents().each(function(){return J.data(this,b.widgetName+"-item")===b?(e=J(this),!1):void 0
}),J.data(d.target,b.widgetName+"-item")===b&&(e=J(d.target)),e?!this.options.handle||c||(J(this.options.handle,e).find("*").addBack().each(function(){this===d.target&&(f=!0)
}),f)?(this.currentItem=e,this._removeCurrentsFromItems(),!0):!1:!1)
},_mouseStart:function(d,c,e){var g,b,f=this.options;
if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(d),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},J.extend(this.offset,{click:{left:d.pageX-this.offset.left,top:d.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(d),this.originalPageX=d.pageX,this.originalPageY=d.pageY,f.cursorAt&&this._adjustOffsetFromHelper(f.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),f.containment&&this._setContainment(),f.cursor&&"auto"!==f.cursor&&(b=this.document.find("body"),this.storedCursor=b.css("cursor"),b.css("cursor",f.cursor),this.storedStylesheet=J("<style>*{ cursor: "+f.cursor+" !important; }</style>").appendTo(b)),f.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",f.opacity)),f.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",f.zIndex)),this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",d,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!e){for(g=this.containers.length-1;
g>=0;
g--){this.containers[g]._trigger("activate",d,this._uiHash(this))
}}return J.ui.ddmanager&&(J.ui.ddmanager.current=this),J.ui.ddmanager&&!f.dropBehaviour&&J.ui.ddmanager.prepareOffsets(this,d),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(d),!0
},_mouseDrag:function(d){var c,e,h,b,g=this.options,f=!1;
for(this.position=this._generatePosition(d),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==document&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-d.pageY<g.scrollSensitivity?this.scrollParent[0].scrollTop=f=this.scrollParent[0].scrollTop+g.scrollSpeed:d.pageY-this.overflowOffset.top<g.scrollSensitivity&&(this.scrollParent[0].scrollTop=f=this.scrollParent[0].scrollTop-g.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-d.pageX<g.scrollSensitivity?this.scrollParent[0].scrollLeft=f=this.scrollParent[0].scrollLeft+g.scrollSpeed:d.pageX-this.overflowOffset.left<g.scrollSensitivity&&(this.scrollParent[0].scrollLeft=f=this.scrollParent[0].scrollLeft-g.scrollSpeed)):(d.pageY-J(document).scrollTop()<g.scrollSensitivity?f=J(document).scrollTop(J(document).scrollTop()-g.scrollSpeed):J(window).height()-(d.pageY-J(document).scrollTop())<g.scrollSensitivity&&(f=J(document).scrollTop(J(document).scrollTop()+g.scrollSpeed)),d.pageX-J(document).scrollLeft()<g.scrollSensitivity?f=J(document).scrollLeft(J(document).scrollLeft()-g.scrollSpeed):J(window).width()-(d.pageX-J(document).scrollLeft())<g.scrollSensitivity&&(f=J(document).scrollLeft(J(document).scrollLeft()+g.scrollSpeed))),f!==!1&&J.ui.ddmanager&&!g.dropBehaviour&&J.ui.ddmanager.prepareOffsets(this,d)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),c=this.items.length-1;
c>=0;
c--){if(e=this.items[c],h=e.item[0],b=this._intersectsWithPointer(e),b&&e.instance===this.currentContainer&&h!==this.currentItem[0]&&this.placeholder[1===b?"next":"prev"]()[0]!==h&&!J.contains(this.placeholder[0],h)&&("semi-dynamic"===this.options.type?!J.contains(this.element[0],h):!0)){if(this.direction=1===b?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(e)){break
}this._rearrange(d,e),this._trigger("change",d,this._uiHash());
break
}}return this._contactContainers(d),J.ui.ddmanager&&J.ui.ddmanager.drag(this,d),this._trigger("sort",d,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1
},_mouseStop:function(d,c){if(d){if(J.ui.ddmanager&&!this.options.dropBehaviour&&J.ui.ddmanager.drop(this,d),this.options.revert){var e=this,g=this.placeholder.offset(),b=this.options.axis,f={};
b&&"x"!==b||(f.left=g.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft)),b&&"y"!==b||(f.top=g.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,J(this.helper).animate(f,parseInt(this.options.revert,10)||500,function(){e._clear(d)
})
}else{this._clear(d,c)
}return !1
}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();
for(var a=this.containers.length-1;
a>=0;
a--){this.containers[a]._trigger("deactivate",null,this._uiHash(this)),this.containers[a].containerCache.over&&(this.containers[a]._trigger("out",null,this._uiHash(this)),this.containers[a].containerCache.over=0)
}}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),J.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?J(this.domPosition.prev).after(this.currentItem):J(this.domPosition.parent).prepend(this.currentItem)),this
},serialize:function(b){var a=this._getItemsAsjQuery(b&&b.connected),c=[];
return b=b||{},J(a).each(function(){var d=(J(b.item||this).attr(b.attribute||"id")||"").match(b.expression||/(.+)[\-=_](.+)/);
d&&c.push((b.key||d[1]+"[]")+"="+(b.key&&b.expression?d[1]:d[2]))
}),!c.length&&b.key&&c.push(b.key+"="),c.join("&")
},toArray:function(b){var a=this._getItemsAsjQuery(b&&b.connected),c=[];
return b=b||{},a.each(function(){c.push(J(b.item||this).attr(b.attribute||"id")||"")
}),c
},_intersectsWith:function(P){var U=this.positionAbs.left,y=U+this.helperProportions.width,V=this.positionAbs.top,m=V+this.helperProportions.height,S=P.left,g=S+P.width,b=P.top,O=b+P.height,v=this.offset.click.top,T=this.offset.click.left,Q="x"===this.options.axis||V+v>b&&O>V+v,R="y"===this.options.axis||U+T>S&&g>U+T,f=Q&&R;
return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>P[this.floating?"width":"height"]?f:U+this.helperProportions.width/2>S&&g>y-this.helperProportions.width/2&&V+this.helperProportions.height/2>b&&O>m-this.helperProportions.height/2
},_intersectsWithPointer:function(g){var d="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,g.top,g.height),c="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,g.left,g.width),f=d&&c,h=this._getDragVerticalDirection(),b=this._getDragHorizontalDirection();
return f?this.floating?b&&"right"===b||"down"===h?2:1:h&&("down"===h?2:1):!1
},_intersectsWithSides:function(d){var b=this._isOverAxis(this.positionAbs.top+this.offset.click.top,d.top+d.height/2,d.height),a=this._isOverAxis(this.positionAbs.left+this.offset.click.left,d.left+d.width/2,d.width),c=this._getDragVerticalDirection(),f=this._getDragHorizontalDirection();
return this.floating&&f?"right"===f&&a||"left"===f&&!a:c&&("down"===c&&b||"up"===c&&!b)
},_getDragVerticalDirection:function(){var a=this.positionAbs.top-this.lastPositionAbs.top;
return 0!==a&&(a>0?"down":"up")
},_getDragHorizontalDirection:function(){var a=this.positionAbs.left-this.lastPositionAbs.left;
return 0!==a&&(a>0?"right":"left")
},refresh:function(a){return this._refreshItems(a),this._setHandleClassName(),this.refreshPositions(),this
},_connectWith:function(){var a=this.options;
return a.connectWith.constructor===String?[a.connectWith]:a.connectWith
},_getItemsAsjQuery:function(p){function f(){b.push(this)
}var u,d,m,c,b=[],g=[],e=this._connectWith();
if(e&&p){for(u=e.length-1;
u>=0;
u--){for(m=J(e[u]),d=m.length-1;
d>=0;
d--){c=J.data(m[d],this.widgetFullName),c&&c!==this&&!c.options.disabled&&g.push([J.isFunction(c.options.items)?c.options.items.call(c.element):J(c.options.items,c.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),c])
}}}for(g.push([J.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):J(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),u=g.length-1;
u>=0;
u--){g[u][0].each(f)
}return J(b)
},_removeCurrentsFromItems:function(){var a=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=J.grep(this.items,function(c){for(var b=0;
a.length>b;
b++){if(a[b]===c.item[0]){return !1
}}return !0
})
},_refreshItems:function(Q){this.items=[],this.containers=[this];
var m,R,f,O,e,b,p,g,P=this.items,v=[[J.isFunction(this.options.items)?this.options.items.call(this.element[0],Q,{item:this.currentItem}):J(this.options.items,this.element),this]],y=this._connectWith();
if(y&&this.ready){for(m=y.length-1;
m>=0;
m--){for(f=J(y[m]),R=f.length-1;
R>=0;
R--){O=J.data(f[R],this.widgetFullName),O&&O!==this&&!O.options.disabled&&(v.push([J.isFunction(O.options.items)?O.options.items.call(O.element[0],Q,{item:this.currentItem}):J(O.options.items,O.element),O]),this.containers.push(O))
}}}for(m=v.length-1;
m>=0;
m--){for(e=v[m][1],b=v[m][0],R=0,g=b.length;
g>R;
R++){p=J(b[R]),p.data(this.widgetName+"-item",e),P.push({item:p,instance:e,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(d){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());
var c,e,f,b;
for(c=this.items.length-1;
c>=0;
c--){e=this.items[c],e.instance!==this.currentContainer&&this.currentContainer&&e.item[0]!==this.currentItem[0]||(f=this.options.toleranceElement?J(this.options.toleranceElement,e.item):e.item,d||(e.width=f.outerWidth(),e.height=f.outerHeight()),b=f.offset(),e.left=b.left,e.top=b.top)
}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(c=this.containers.length-1;
c>=0;
c--){b=this.containers[c].element.offset(),this.containers[c].containerCache.left=b.left,this.containers[c].containerCache.top=b.top,this.containers[c].containerCache.width=this.containers[c].element.outerWidth(),this.containers[c].containerCache.height=this.containers[c].element.outerHeight()
}}return this
},_createPlaceholder:function(b){b=b||this;
var a,c=b.options;
c.placeholder&&c.placeholder.constructor!==String||(a=c.placeholder,c.placeholder={element:function(){var d=b.currentItem[0].nodeName.toLowerCase(),e=J("<"+d+">",b.document[0]).addClass(a||b.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");
return"tr"===d?b.currentItem.children().each(function(){J("<td>&#160;</td>",b.document[0]).attr("colspan",J(this).attr("colspan")||1).appendTo(e)
}):"img"===d&&e.attr("src",b.currentItem.attr("src")),a||e.css("visibility","hidden"),e
},update:function(d,f){(!a||c.forcePlaceholderSize)&&(f.height()||f.height(b.currentItem.innerHeight()-parseInt(b.currentItem.css("paddingTop")||0,10)-parseInt(b.currentItem.css("paddingBottom")||0,10)),f.width()||f.width(b.currentItem.innerWidth()-parseInt(b.currentItem.css("paddingLeft")||0,10)-parseInt(b.currentItem.css("paddingRight")||0,10)))
}}),b.placeholder=J(c.placeholder.element.call(b.element,b.currentItem)),b.currentItem.after(b.placeholder),c.placeholder.update(b,b.placeholder)
},_contactContainers:function(S){var v,T,g,Q,f,b,y,m,R,O,P=null,e=null;
for(v=this.containers.length-1;
v>=0;
v--){if(!J.contains(this.currentItem[0],this.containers[v].element[0])){if(this._intersectsWith(this.containers[v].containerCache)){if(P&&J.contains(this.containers[v].element[0],P.element[0])){continue
}P=this.containers[v],e=v
}else{this.containers[v].containerCache.over&&(this.containers[v]._trigger("out",S,this._uiHash(this)),this.containers[v].containerCache.over=0)
}}}if(P){if(1===this.containers.length){this.containers[e].containerCache.over||(this.containers[e]._trigger("over",S,this._uiHash(this)),this.containers[e].containerCache.over=1)
}else{for(g=10000,Q=null,R=P.floating||this._isFloating(this.currentItem),f=R?"left":"top",b=R?"width":"height",O=R?"clientX":"clientY",T=this.items.length-1;
T>=0;
T--){J.contains(this.containers[e].element[0],this.items[T].item[0])&&this.items[T].item[0]!==this.currentItem[0]&&(y=this.items[T].item.offset()[f],m=!1,S[O]-y>this.items[T][b]/2&&(m=!0),g>Math.abs(S[O]-y)&&(g=Math.abs(S[O]-y),Q=this.items[T],this.direction=m?"up":"down"))
}if(!Q&&!this.options.dropOnEmpty){return
}if(this.currentContainer===this.containers[e]){return this.currentContainer.containerCache.over||(this.containers[e]._trigger("over",S,this._uiHash()),this.currentContainer.containerCache.over=1),void 0
}Q?this._rearrange(S,Q,null,!0):this._rearrange(S,null,this.containers[e].element,!0),this._trigger("change",S,this._uiHash()),this.containers[e]._trigger("change",S,this._uiHash(this)),this.currentContainer=this.containers[e],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[e]._trigger("over",S,this._uiHash(this)),this.containers[e].containerCache.over=1
}}},_createHelper:function(b){var a=this.options,c=J.isFunction(a.helper)?J(a.helper.apply(this.element[0],[b,this.currentItem])):"clone"===a.helper?this.currentItem.clone():this.currentItem;
return c.parents("body").length||J("parent"!==a.appendTo?a.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0]),c[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!c[0].style.width||a.forceHelperSize)&&c.width(this.currentItem.width()),(!c[0].style.height||a.forceHelperSize)&&c.height(this.currentItem.height()),c
},_adjustOffsetFromHelper:function(a){"string"==typeof a&&(a=a.split(" ")),J.isArray(a)&&(a={left:+a[0],top:+a[1]||0}),"left" in a&&(this.offset.click.left=a.left+this.margins.left),"right" in a&&(this.offset.click.left=this.helperProportions.width-a.right+this.margins.left),"top" in a&&(this.offset.click.top=a.top+this.margins.top),"bottom" in a&&(this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top)
},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();
var a=this.offsetParent.offset();
return"absolute"===this.cssPosition&&this.scrollParent[0]!==document&&J.contains(this.scrollParent[0],this.offsetParent[0])&&(a.left+=this.scrollParent.scrollLeft(),a.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===document.body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&J.ui.ie)&&(a={top:0,left:0}),{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if("relative"===this.cssPosition){var a=this.currentItem.position();
return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}return{top:0,left:0}
},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var b,a,c,d=this.options;
"parent"===d.containment&&(d.containment=this.helper[0].parentNode),("document"===d.containment||"window"===d.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,J("document"===d.containment?document:window).width()-this.helperProportions.width-this.margins.left,(J("document"===d.containment?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(d.containment)||(b=J(d.containment)[0],a=J(d.containment).offset(),c="hidden"!==J(b).css("overflow"),this.containment=[a.left+(parseInt(J(b).css("borderLeftWidth"),10)||0)+(parseInt(J(b).css("paddingLeft"),10)||0)-this.margins.left,a.top+(parseInt(J(b).css("borderTopWidth"),10)||0)+(parseInt(J(b).css("paddingTop"),10)||0)-this.margins.top,a.left+(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(J(b).css("borderLeftWidth"),10)||0)-(parseInt(J(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,a.top+(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(J(b).css("borderTopWidth"),10)||0)-(parseInt(J(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])
},_convertPositionTo:function(d,c){c||(c=this.position);
var e="absolute"===d?1:-1,f="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&J.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,b=/(html|body)/i.test(f[0].tagName);
return{top:c.top+this.offset.relative.top*e+this.offset.parent.top*e-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():b?0:f.scrollTop())*e,left:c.left+this.offset.relative.left*e+this.offset.parent.left*e-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():b?0:f.scrollLeft())*e}
},_generatePosition:function(d){var c,f,m=this.options,b=d.pageX,l=d.pageY,g="absolute"!==this.cssPosition||this.scrollParent[0]!==document&&J.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,e=/(html|body)/i.test(g[0].tagName);
return"relative"!==this.cssPosition||this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(d.pageX-this.offset.click.left<this.containment[0]&&(b=this.containment[0]+this.offset.click.left),d.pageY-this.offset.click.top<this.containment[1]&&(l=this.containment[1]+this.offset.click.top),d.pageX-this.offset.click.left>this.containment[2]&&(b=this.containment[2]+this.offset.click.left),d.pageY-this.offset.click.top>this.containment[3]&&(l=this.containment[3]+this.offset.click.top)),m.grid&&(c=this.originalPageY+Math.round((l-this.originalPageY)/m.grid[1])*m.grid[1],l=this.containment?c-this.offset.click.top>=this.containment[1]&&c-this.offset.click.top<=this.containment[3]?c:c-this.offset.click.top>=this.containment[1]?c-m.grid[1]:c+m.grid[1]:c,f=this.originalPageX+Math.round((b-this.originalPageX)/m.grid[0])*m.grid[0],b=this.containment?f-this.offset.click.left>=this.containment[0]&&f-this.offset.click.left<=this.containment[2]?f:f-this.offset.click.left>=this.containment[0]?f-m.grid[0]:f+m.grid[0]:f)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():e?0:g.scrollTop()),left:b-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():e?0:g.scrollLeft())}
},_rearrange:function(d,b,a,c){a?a[0].appendChild(this.placeholder[0]):b.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?b.item[0]:b.item[0].nextSibling),this.counter=this.counter?++this.counter:1;
var f=this.counter;
this._delay(function(){f===this.counter&&this.refreshPositions(!c)
})
},_clear:function(d,b){function a(l,h,g){return function(e){g._trigger(l,e,h._uiHash(h))
}
}this.reverting=!1;
var c,f=[];
if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(c in this._storedCSS){("auto"===this._storedCSS[c]||"static"===this._storedCSS[c])&&(this._storedCSS[c]="")
}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()
}for(this.fromOutside&&!b&&f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))
}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||b||f.push(function(g){this._trigger("update",g,this._uiHash())
}),this!==this.currentContainer&&(b||(f.push(function(g){this._trigger("remove",g,this._uiHash())
}),f.push(function(g){return function(e){g._trigger("receive",e,this._uiHash(this))
}
}.call(this,this.currentContainer)),f.push(function(g){return function(e){g._trigger("update",e,this._uiHash(this))
}
}.call(this,this.currentContainer)))),c=this.containers.length-1;
c>=0;
c--){b||f.push(a("deactivate",this,this.containers[c])),this.containers[c].containerCache.over&&(f.push(a("out",this,this.containers[c])),this.containers[c].containerCache.over=0)
}if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,b||this._trigger("beforeStop",d,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!b){for(c=0;
f.length>c;
c++){f[c].call(this,d)
}this._trigger("stop",d,this._uiHash())
}return this.fromOutside=!1,!this.cancelHelperRemoval
},_trigger:function(){J.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()
},_uiHash:function(b){var a=b||this;
return{helper:a.helper,placeholder:a.placeholder||J([]),position:a.position,originalPosition:a.originalPosition,offset:a.positionAbs,item:a.currentItem,sender:b?b.element:null}
}}),J.widget("ui.spinner",{version:"1.11.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})
},_getCreateOptions:function(){var b={},a=this.element;
return J.each(["min","max","step"],function(d,c){var f=a.attr(c);
void 0!==f&&f.length&&(b[c]=f)
}),b
},_events:{keydown:function(a){this._start(a)&&this._keydown(a)&&a.preventDefault()
},keyup:"_stop",focus:function(){this.previous=this.element.val()
},blur:function(a){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",a),void 0)
},mousewheel:function(b,a){if(a){if(!this.spinning&&!this._start(b)){return !1
}this._spin((a>0?1:-1)*this.options.step,b),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(b)
},100),b.preventDefault()
}},"mousedown .ui-spinner-button":function(b){function a(){var d=this.element[0]===this.document[0].activeElement;
d||(this.element.focus(),this.previous=c,this._delay(function(){this.previous=c
}))
}var c;
c=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),b.preventDefault(),a.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,a.call(this)
}),this._start(b)!==!1&&this._repeat(null,J(b.currentTarget).hasClass("ui-spinner-up")?1:-1,b)
},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(a){return J(a.currentTarget).hasClass("ui-state-active")?this._start(a)===!1?!1:(this._repeat(null,J(a.currentTarget).hasClass("ui-spinner-up")?1:-1,a),void 0):void 0
},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var a=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
this.element.attr("role","spinbutton"),this.buttons=a.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(0.5*a.height())&&a.height()>0&&a.height(a.height()),this.options.disabled&&this.disable()
},_keydown:function(b){var a=this.options,c=J.ui.keyCode;
switch(b.keyCode){case c.UP:return this._repeat(null,1,b),!0;
case c.DOWN:return this._repeat(null,-1,b),!0;
case c.PAGE_UP:return this._repeat(null,a.page,b),!0;
case c.PAGE_DOWN:return this._repeat(null,-a.page,b),!0
}return !1
},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span></a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon "+this.options.icons.down+"'>&#9660;</span></a>"
},_start:function(a){return this.spinning||this._trigger("start",a)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1
},_repeat:function(c,b,a){c=c||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,b,a)
},c),this._spin(b*this.options.step,a)
},_spin:function(c,b){var a=this.value()||0;
this.counter||(this.counter=1),a=this._adjustValue(a+c*this._increment(this.counter)),this.spinning&&this._trigger("spin",b,{value:a})===!1||(this._value(a),this.counter++)
},_increment:function(b){var a=this.options.incremental;
return a?J.isFunction(a)?a(b):Math.floor(b*b*b/50000-b*b/500+17*b/200+1):1
},_precision:function(){var a=this._precisionOf(this.options.step);
return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a
},_precisionOf:function(c){var b=""+c,a=b.indexOf(".");
return -1===a?0:b.length-a-1
},_adjustValue:function(d){var b,a,c=this.options;
return b=null!==c.min?c.min:0,a=d-b,a=Math.round(a/c.step)*c.step,d=b+a,d=parseFloat(d.toFixed(this._precision())),null!==c.max&&d>c.max?c.max:null!==c.min&&c.min>d?c.min:d
},_stop:function(a){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",a))
},_setOption:function(c,b){if("culture"===c||"numberFormat"===c){var a=this._parse(this.element.val());
return this.options[c]=b,this.element.val(this._format(a)),void 0
}("max"===c||"min"===c||"step"===c)&&"string"==typeof b&&(b=this._parse(b)),"icons"===c&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(b.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(b.down)),this._super(c,b),"disabled"===c&&(this.widget().toggleClass("ui-state-disabled",!!b),this.element.prop("disabled",!!b),this.buttons.button(b?"disable":"enable"))
},_setOptions:G(function(a){this._super(a)
}),_parse:function(a){return"string"==typeof a&&""!==a&&(a=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(a,10,this.options.culture):+a),""===a||isNaN(a)?null:a
},_format:function(a){return""===a?"":window.Globalize&&this.options.numberFormat?Globalize.format(a,this.options.numberFormat,this.options.culture):a
},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})
},isValid:function(){var a=this.value();
return null===a?!1:a===this._adjustValue(a)
},_value:function(c,b){var a;
""!==c&&(a=this._parse(c),null!==a&&(b||(a=this._adjustValue(a)),c=this._format(a))),this.element.val(c),this._refresh()
},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)
},stepUp:G(function(a){this._stepUp(a)
}),_stepUp:function(a){this._start()&&(this._spin((a||1)*this.options.step),this._stop())
},stepDown:G(function(a){this._stepDown(a)
}),_stepDown:function(a){this._start()&&(this._spin((a||1)*-this.options.step),this._stop())
},pageUp:G(function(a){this._stepUp((a||1)*this.options.page)
}),pageDown:G(function(a){this._stepDown((a||1)*this.options.page)
}),value:function(a){return arguments.length?(G(this._value).call(this,a),void 0):this._parse(this.element.val())
},widget:function(){return this.uiSpinner
}}),J.widget("ui.tabs",{version:"1.11.2",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var a=/#.*$/;
return function(c){var b,d;
c=c.cloneNode(!1),b=c.href.replace(a,""),d=location.href.replace(a,"");
try{b=decodeURIComponent(b)
}catch(e){}try{d=decodeURIComponent(d)
}catch(e){}return c.hash.length>1&&b===d
}
}(),_create:function(){var b=this,a=this.options;
this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",a.collapsible),this._processTabs(),a.active=this._initialActive(),J.isArray(a.disabled)&&(a.disabled=J.unique(a.disabled.concat(J.map(this.tabs.filter(".ui-state-disabled"),function(c){return b.tabs.index(c)
}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(a.active):J(),this._refresh(),this.active.length&&this.load(a.active)
},_initialActive:function(){var b=this.options.active,a=this.options.collapsible,c=location.hash.substring(1);
return null===b&&(c&&this.tabs.each(function(d,e){return J(e).attr("aria-controls")===c?(b=d,!1):void 0
}),null===b&&(b=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===b||-1===b)&&(b=this.tabs.length?0:!1)),b!==!1&&(b=this.tabs.index(this.tabs.eq(b)),-1===b&&(b=a?!1:0)),!a&&b===!1&&this.anchors.length&&(b=0),b
},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):J()}
},_tabKeydown:function(b){var a=J(this.document[0].activeElement).closest("li"),c=this.tabs.index(a),d=!0;
if(!this._handlePageNav(b)){switch(b.keyCode){case J.ui.keyCode.RIGHT:case J.ui.keyCode.DOWN:c++;
break;
case J.ui.keyCode.UP:case J.ui.keyCode.LEFT:d=!1,c--;
break;
case J.ui.keyCode.END:c=this.anchors.length-1;
break;
case J.ui.keyCode.HOME:c=0;
break;
case J.ui.keyCode.SPACE:return b.preventDefault(),clearTimeout(this.activating),this._activate(c),void 0;
case J.ui.keyCode.ENTER:return b.preventDefault(),clearTimeout(this.activating),this._activate(c===this.options.active?!1:c),void 0;
default:return
}b.preventDefault(),clearTimeout(this.activating),c=this._focusNextTab(c,d),b.ctrlKey||(a.attr("aria-selected","false"),this.tabs.eq(c).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",c)
},this.delay))
}},_panelKeydown:function(a){this._handlePageNav(a)||a.ctrlKey&&a.keyCode===J.ui.keyCode.UP&&(a.preventDefault(),this.active.focus())
},_handlePageNav:function(a){return a.altKey&&a.keyCode===J.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):a.altKey&&a.keyCode===J.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0
},_findNextTab:function(b,a){function c(){return b>d&&(b=0),0>b&&(b=d),b
}for(var d=this.tabs.length-1;
-1!==J.inArray(c(),this.options.disabled);
){b=a?b+1:b-1
}return b
},_focusNextTab:function(b,a){return b=this._findNextTab(b,a),this.tabs.eq(b).focus(),b
},_setOption:function(b,a){return"active"===b?(this._activate(a),void 0):"disabled"===b?(this._setupDisabled(a),void 0):(this._super(b,a),"collapsible"===b&&(this.element.toggleClass("ui-tabs-collapsible",a),a||this.options.active!==!1||this._activate(0)),"event"===b&&this._setupEvents(a),"heightStyle"===b&&this._setupHeightStyle(a),void 0)
},_sanitizeSelector:function(a){return a?a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var b=this.options,a=this.tablist.children(":has(a[href])");
b.disabled=J.map(a.filter(".ui-state-disabled"),function(c){return a.index(c)
}),this._processTabs(),b.active!==!1&&this.anchors.length?this.active.length&&!J.contains(this.tablist[0],this.active[0])?this.tabs.length===b.disabled.length?(b.active=!1,this.active=J()):this._activate(this._findNextTab(Math.max(0,b.active-1),!1)):b.active=this.tabs.index(this.active):(b.active=!1,this.active=J()),this._refresh()
},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)
},_processTabs:function(){var b=this,a=this.tabs,c=this.anchors,d=this.panels;
this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(e){J(this).is(".ui-state-disabled")&&e.preventDefault()
}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){J(this).closest("li").is(".ui-state-disabled")&&this.blur()
}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return J("a",this)[0]
}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=J(),this.anchors.each(function(g,p){var v,f,u,t=J(p).uniqueId().attr("id"),m=J(p).closest("li"),e=m.attr("aria-controls");
b._isLocal(p)?(v=p.hash,u=v.substring(1),f=b.element.find(b._sanitizeSelector(v))):(u=m.attr("aria-controls")||J({}).uniqueId()[0].id,v="#"+u,f=b.element.find(v),f.length||(f=b._createPanel(u),f.insertAfter(b.panels[g-1]||b.tablist)),f.attr("aria-live","polite")),f.length&&(b.panels=b.panels.add(f)),e&&m.data("ui-tabs-aria-controls",e),m.attr({"aria-controls":u,"aria-labelledby":t}),f.attr("aria-labelledby",t)
}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),a&&(this._off(a.not(this.tabs)),this._off(c.not(this.anchors)),this._off(d.not(this.panels)))
},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)
},_createPanel:function(a){return J("<div>").attr("id",a).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)
},_setupDisabled:function(b){J.isArray(b)&&(b.length?b.length===this.anchors.length&&(b=!0):b=!1);
for(var a,c=0;
a=this.tabs[c];
c++){b===!0||-1!==J.inArray(c,b)?J(a).addClass("ui-state-disabled").attr("aria-disabled","true"):J(a).removeClass("ui-state-disabled").removeAttr("aria-disabled")
}this.options.disabled=b
},_setupEvents:function(b){var a={};
b&&J.each(b.split(" "),function(d,c){a[c]="_eventHandler"
}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(c){c.preventDefault()
}}),this._on(this.anchors,a),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)
},_setupHeightStyle:function(b){var a,c=this.element.parent();
"fill"===b?(a=c.height(),a-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var d=J(this),e=d.css("position");
"absolute"!==e&&"fixed"!==e&&(a-=d.outerHeight(!0))
}),this.element.children().not(this.panels).each(function(){a-=J(this).outerHeight(!0)
}),this.panels.each(function(){J(this).height(Math.max(0,a-J(this).innerHeight()+J(this).height()))
}).css("overflow","auto")):"auto"===b&&(a=0,this.panels.each(function(){a=Math.max(a,J(this).height("").height())
}).height(a))
},_eventHandler:function(v){var f=this.options,y=this.active,d=J(v.currentTarget),m=d.closest("li"),c=m[0]===y[0],b=c&&f.collapsible,g=b?J():this._getPanelForTab(m),e=y.length?this._getPanelForTab(y):J(),p={oldTab:y,oldPanel:e,newTab:b?J():m,newPanel:g};
v.preventDefault(),m.hasClass("ui-state-disabled")||m.hasClass("ui-tabs-loading")||this.running||c&&!f.collapsible||this._trigger("beforeActivate",v,p)===!1||(f.active=b?!1:this.tabs.index(m),this.active=c?J():m,this.xhr&&this.xhr.abort(),e.length||g.length||J.error("jQuery UI Tabs: Mismatching fragment identifier."),g.length&&this.load(this.tabs.index(m),v),this._toggle(v,p))
},_toggle:function(d,c){function e(){b.running=!1,b._trigger("activate",d,c)
}function h(){c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),g.length&&b.options.show?b._show(g,b.options.show,e):(g.show(),e())
}var b=this,g=c.newPanel,f=c.oldPanel;
this.running=!0,f.length&&this.options.hide?this._hide(f,this.options.hide,function(){c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),h()
}):(c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),f.hide(),h()),f.attr("aria-hidden","true"),c.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),g.length&&f.length?c.oldTab.attr("tabIndex",-1):g.length&&this.tabs.filter(function(){return 0===J(this).attr("tabIndex")
}).attr("tabIndex",-1),g.attr("aria-hidden","false"),c.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})
},_activate:function(b){var a,c=this._findActive(b);
c[0]!==this.active[0]&&(c.length||(c=this.active),a=c.find(".ui-tabs-anchor")[0],this._eventHandler({target:a,currentTarget:a,preventDefault:J.noop}))
},_findActive:function(a){return a===!1?J():this.tabs.eq(a)
},_getIndex:function(a){return"string"==typeof a&&(a=this.anchors.index(this.anchors.filter("[href$='"+a+"']"))),a
},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){J.data(this,"ui-tabs-destroy")?J(this).remove():J(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}),this.tabs.each(function(){var b=J(this),a=b.data("ui-tabs-aria-controls");
a?b.attr("aria-controls",a).removeData("ui-tabs-aria-controls"):b.removeAttr("aria-controls")
}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")
},enable:function(b){var a=this.options.disabled;
a!==!1&&(void 0===b?a=!1:(b=this._getIndex(b),a=J.isArray(a)?J.map(a,function(c){return c!==b?c:null
}):J.map(this.tabs,function(d,c){return c!==b?c:null
})),this._setupDisabled(a))
},disable:function(b){var a=this.options.disabled;
if(a!==!0){if(void 0===b){a=!0
}else{if(b=this._getIndex(b),-1!==J.inArray(b,a)){return
}a=J.isArray(a)?J.merge([b],a).sort():[b]
}this._setupDisabled(a)
}},load:function(d,c){d=this._getIndex(d);
var e=this,h=this.tabs.eq(d),b=h.find(".ui-tabs-anchor"),g=this._getPanelForTab(h),f={tab:h,panel:g};
this._isLocal(b[0])||(this.xhr=J.ajax(this._ajaxSettings(b,c,f)),this.xhr&&"canceled"!==this.xhr.statusText&&(h.addClass("ui-tabs-loading"),g.attr("aria-busy","true"),this.xhr.success(function(a){setTimeout(function(){g.html(a),e._trigger("load",c,f)
},1)
}).complete(function(i,a){setTimeout(function(){"abort"===a&&e.panels.stop(!1,!0),h.removeClass("ui-tabs-loading"),g.removeAttr("aria-busy"),i===e.xhr&&delete e.xhr
},1)
})))
},_ajaxSettings:function(b,a,c){var d=this;
return{url:b.attr("href"),beforeSend:function(f,e){return d._trigger("beforeLoad",a,J.extend({jqXHR:f,ajaxSettings:e},c))
}}
},_getPanelForTab:function(b){var a=J(b).attr("aria-controls");
return this.element.find(this._sanitizeSelector("#"+a))
}}),J.widget("ui.tooltip",{version:"1.11.2",options:{content:function(){var a=J(this).attr("title")||"";
return J("<a>").text(a).html()
},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(b,a){var c=(b.attr("aria-describedby")||"").split(/\s+/);
c.push(a),b.data("ui-tooltip-id",a).attr("aria-describedby",J.trim(c.join(" ")))
},_removeDescribedBy:function(b){var a=b.data("ui-tooltip-id"),c=(b.attr("aria-describedby")||"").split(/\s+/),d=J.inArray(a,c);
-1!==d&&c.splice(d,1),b.removeData("ui-tooltip-id"),c=J.trim(c.join(" ")),c?b.attr("aria-describedby",c):b.removeAttr("aria-describedby")
},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=J("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
},_setOption:function(b,a){var c=this;
return"disabled"===b?(this[a?"_disable":"_enable"](),this.options[b]=a,void 0):(this._super(b,a),"content"===b&&J.each(this.tooltips,function(f,d){c._updateContent(d.element)
}),void 0)
},_disable:function(){var a=this;
J.each(this.tooltips,function(b,c){var d=J.Event("blur");
d.target=d.currentTarget=c.element[0],a.close(d,!0)
}),this.element.find(this.options.items).addBack().each(function(){var b=J(this);
b.is("[title]")&&b.data("ui-tooltip-title",b.attr("title")).removeAttr("title")
})
},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var a=J(this);
a.data("ui-tooltip-title")&&a.attr("title",a.data("ui-tooltip-title"))
})
},open:function(b){var a=this,c=J(b?b.target:this.element).closest(this.options.items);
c.length&&!c.data("ui-tooltip-id")&&(c.attr("title")&&c.data("ui-tooltip-title",c.attr("title")),c.data("ui-tooltip-open",!0),b&&"mouseover"===b.type&&c.parents().each(function(){var d,e=J(this);
e.data("ui-tooltip-open")&&(d=J.Event("blur"),d.target=d.currentTarget=this,a.close(d,!0)),e.attr("title")&&(e.uniqueId(),a.parents[this.id]={element:this,title:e.attr("title")},e.attr("title",""))
}),this._updateContent(c,b))
},_updateContent:function(g,d){var c,f=this.options.content,h=this,b=d?d.type:null;
return"string"==typeof f?this._open(d,g,f):(c=f.call(g[0],function(a){g.data("ui-tooltip-open")&&h._delay(function(){d&&(d.type=b),this._open(d,g,a)
})
}),c&&this._open(d,g,c),void 0)
},_open:function(v,f,y){function d(a){p.of=a,c.is(":hidden")||c.position(p)
}var m,c,b,g,e,p=J.extend({},this.options.position);
if(y){if(m=this._find(f)){return m.tooltip.find(".ui-tooltip-content").html(y),void 0
}f.is("[title]")&&(v&&"mouseover"===v.type?f.attr("title",""):f.removeAttr("title")),m=this._tooltip(f),c=m.tooltip,this._addDescribedBy(f,c.attr("id")),c.find(".ui-tooltip-content").html(y),this.liveRegion.children().hide(),y.clone?(e=y.clone(),e.removeAttr("id").find("[id]").removeAttr("id")):e=y,J("<div>").html(e).appendTo(this.liveRegion),this.options.track&&v&&/^mouse/.test(v.type)?(this._on(this.document,{mousemove:d}),d(v)):c.position(J.extend({of:f},this.options.position)),c.hide(),this._show(c,this.options.show),this.options.show&&this.options.show.delay&&(g=this.delayedShow=setInterval(function(){c.is(":visible")&&(d(p.of),clearInterval(g))
},J.fx.interval)),this._trigger("open",v,{tooltip:c}),b={keyup:function(a){if(a.keyCode===J.ui.keyCode.ESCAPE){var h=J.Event(a);
h.currentTarget=f[0],this.close(h,!0)
}}},f[0]!==this.element[0]&&(b.remove=function(){this._removeTooltip(c)
}),v&&"mouseover"!==v.type||(b.mouseleave="close"),v&&"focusin"!==v.type||(b.focusout="close"),this._on(!0,f,b)
}},close:function(d){var c,e=this,f=J(d?d.currentTarget:this.element),b=this._find(f);
b&&(c=b.tooltip,b.closing||(clearInterval(this.delayedShow),f.data("ui-tooltip-title")&&!f.attr("title")&&f.attr("title",f.data("ui-tooltip-title")),this._removeDescribedBy(f),b.hiding=!0,c.stop(!0),this._hide(c,this.options.hide,function(){e._removeTooltip(J(this))
}),f.removeData("ui-tooltip-open"),this._off(f,"mouseleave focusout keyup"),f[0]!==this.element[0]&&this._off(f,"remove"),this._off(this.document,"mousemove"),d&&"mouseleave"===d.type&&J.each(this.parents,function(g,a){J(a.element).attr("title",a.title),delete e.parents[g]
}),b.closing=!0,this._trigger("close",d,{tooltip:c}),b.hiding||(b.closing=!1)))
},_tooltip:function(b){var a=J("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),c=a.uniqueId().attr("id");
return J("<div>").addClass("ui-tooltip-content").appendTo(a),a.appendTo(this.document[0].body),this.tooltips[c]={element:b,tooltip:a}
},_find:function(b){var a=b.data("ui-tooltip-id");
return a?this.tooltips[a]:null
},_removeTooltip:function(a){a.remove(),delete this.tooltips[a.attr("id")]
},_destroy:function(){var a=this;
J.each(this.tooltips,function(c,d){var e=J.Event("blur"),b=d.element;
e.target=e.currentTarget=b[0],a.close(e,!0),J("#"+c).remove(),b.data("ui-tooltip-title")&&(b.attr("title")||b.attr("title",b.data("ui-tooltip-title")),b.removeData("ui-tooltip-title"))
}),this.liveRegion.remove()
}})
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports==="object"){a(require("jquery"))
}else{a(jQuery)
}}}(function(f){var a=/\+/g;
function d(i){return b.raw?i:encodeURIComponent(i)
}function g(i){return b.raw?i:decodeURIComponent(i)
}function h(i){return d(b.json?JSON.stringify(i):String(i))
}function c(i){if(i.indexOf('"')===0){i=i.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\")
}try{i=decodeURIComponent(i.replace(a," "));
return b.json?JSON.parse(i):i
}catch(j){}}function e(j,i){var k=b.raw?j:c(j);
return f.isFunction(i)?i(k):k
}var b=f.cookie=function(q,p,v){if(p!==undefined&&!f.isFunction(p)){v=f.extend({},b.defaults,v);
if(typeof v.expires==="number"){var r=v.expires,u=v.expires=new Date();
u.setTime(+u+r*86400000)
}return(document.cookie=[d(q),"=",h(p),v.expires?"; expires="+v.expires.toUTCString():"",v.path?"; path="+v.path:"",v.domain?"; domain="+v.domain:"",v.secure?"; secure":""].join(""))
}var w=q?undefined:{};
var s=document.cookie?document.cookie.split("; "):[];
for(var o=0,m=s.length;
o<m;
o++){var n=s[o].split("=");
var j=g(n.shift());
var k=n.join("=");
if(q&&q===j){w=e(k,p);
break
}if(!q&&(k=e(k))!==undefined){w[j]=k
}}return w
};
b.defaults={};
f.removeCookie=function(j,i){if(f.cookie(j)===undefined){return false
}f.cookie(j,"",f.extend({},i,{expires:-1}));
return !f.cookie(j)
}
}));
/*!
 * Bootstrap v3.3.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
;
if("undefined"==typeof jQuery){throw new Error("Bootstrap's JavaScript requires jQuery")
}+function(d){var c=d.fn.jquery.split(" ")[0].split(".");
if(c[0]<2&&c[1]<9||1==c[0]&&9==c[1]&&c[2]<1){throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")
}}(jQuery),+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}
}}return !1
}d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
d(this).one("bsTransitionEnd",function(){h=!0
});
var f=function(){h||d(g).trigger(d.support.transition.end)
};
return setTimeout(f,a),this
},d(function(){d.support.transition=c(),d.support.transition&&(d.event.special.bsTransitionEnd={bindType:d.support.transition.end,delegateType:d.support.transition.end,handle:function(a){return d(a.target).is(this)?a.handleObj.handler.apply(this,arguments):void 0
}})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var d=g(this),b=d.data("bs.alert");
b||d.data("bs.alert",b=new i(this)),"string"==typeof a&&b[a].call(d)
})
}var j='[data-dismiss="alert"]',i=function(a){g(a).on("click",j,this.close)
};
i.VERSION="3.3.1",i.TRANSITION_DURATION=150,i.prototype.close=function(a){function m(){d.detach().trigger("closed.bs.alert").remove()
}var l=g(this),k=l.attr("data-target");
k||(k=l.attr("href"),k=k&&k.replace(/.*(?=#[^\s]*$)/,""));
var d=g(k);
a&&a.preventDefault(),d.length||(d=l.closest(".alert")),d.trigger(a=g.Event("close.bs.alert")),a.isDefaultPrevented()||(d.removeClass("in"),g.support.transition&&d.hasClass("fade")?d.one("bsTransitionEnd",m).emulateTransitionEnd(i.TRANSITION_DURATION):m())
};
var h=g.fn.alert;
g.fn.alert=f,g.fn.alert.Constructor=i,g.fn.alert.noConflict=function(){return g.fn.alert=h,this
},g(document).on("click.bs.alert.data-api",j,i.prototype.close)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.button"),b="object"==typeof a&&a;
c||i.data("bs.button",c=new h(this,b)),"toggle"==a?c.toggle():a&&c.setState(a)
})
}var h=function(a,c){this.$element=f(a),this.options=f.extend({},h.DEFAULTS,c),this.isLoading=!1
};
h.VERSION="3.3.1",h.DEFAULTS={loadingText:"loading..."},h.prototype.setState=function(a){var l="disabled",k=this.$element,j=k.is("input")?"val":"html",i=k.data();
a+="Text",null==i.resetText&&k.data("resetText",k[j]()),setTimeout(f.proxy(function(){k[j](null==i[a]?this.options[a]:i[a]),"loadingText"==a?(this.isLoading=!0,k.addClass(l).attr(l,l)):this.isLoading&&(this.isLoading=!1,k.removeClass(l).removeAttr(l))
},this),0)
},h.prototype.toggle=function(){var i=!0,d=this.$element.closest('[data-toggle="buttons"]');
if(d.length){var j=this.$element.find("input");
"radio"==j.prop("type")&&(j.prop("checked")&&this.$element.hasClass("active")?i=!1:d.find(".active").removeClass("active")),i&&j.prop("checked",!this.$element.hasClass("active")).trigger("change")
}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"))
}i&&this.$element.toggleClass("active")
};
var g=f.fn.button;
f.fn.button=e,f.fn.button.Constructor=h,f.fn.button.noConflict=function(){return f.fn.button=g,this
},f(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(b){var a=f(b.target);
a.hasClass("btn")||(a=a.closest(".btn")),e.call(a,"toggle"),b.preventDefault()
}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(a){f(a.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(a.type))
})
}(jQuery),+function(g){function f(a){return this.each(function(){var l=g(this),k=l.data("bs.carousel"),c=g.extend({},j.DEFAULTS,l.data(),"object"==typeof a&&a),b="string"==typeof a?a:c.slide;
k||l.data("bs.carousel",k=new j(this,c)),"number"==typeof a?k.to(a):b?k[b]():c.interval&&k.pause().cycle()
})
}var j=function(a,d){this.$element=g(a),this.$indicators=this.$element.find(".carousel-indicators"),this.options=d,this.paused=this.sliding=this.interval=this.$active=this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",g.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",g.proxy(this.pause,this)).on("mouseleave.bs.carousel",g.proxy(this.cycle,this))
};
j.VERSION="3.3.1",j.TRANSITION_DURATION=600,j.DEFAULTS={interval:5000,pause:"hover",wrap:!0,keyboard:!0},j.prototype.keydown=function(b){if(!/input|textarea/i.test(b.target.tagName)){switch(b.which){case 37:this.prev();
break;
case 39:this.next();
break;
default:return
}b.preventDefault()
}},j.prototype.cycle=function(a){return a||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(g.proxy(this.next,this),this.options.interval)),this
},j.prototype.getItemIndex=function(b){return this.$items=b.parent().children(".item"),this.$items.index(b||this.$active)
},j.prototype.getItemForDirection=function(l,k){var o="prev"==l?-1:1,n=this.getItemIndex(k),m=(n+o)%this.$items.length;
return this.$items.eq(m)
},j.prototype.to=function(e){var d=this,k=this.getItemIndex(this.$active=this.$element.find(".item.active"));
return e>this.$items.length-1||0>e?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){d.to(e)
}):k==e?this.pause().cycle():this.slide(e>k?"next":"prev",this.$items.eq(e))
},j.prototype.pause=function(a){return a||(this.paused=!0),this.$element.find(".next, .prev").length&&g.support.transition&&(this.$element.trigger(g.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this
},j.prototype.next=function(){return this.sliding?void 0:this.slide("next")
},j.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")
},j.prototype.slide=function(x,w){var v=this.$element.find(".item.active"),u=w||this.getItemForDirection(x,v),t=this.interval,s="next"==x?"left":"right",r="next"==x?"first":"last",q=this;
if(!u.length){if(!this.options.wrap){return
}u=this.$element.find(".item")[r]()
}if(u.hasClass("active")){return this.sliding=!1
}var p=u[0],o=g.Event("slide.bs.carousel",{relatedTarget:p,direction:s});
if(this.$element.trigger(o),!o.isDefaultPrevented()){if(this.sliding=!0,t&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");
var c=g(this.$indicators.children()[this.getItemIndex(u)]);
c&&c.addClass("active")
}var a=g.Event("slid.bs.carousel",{relatedTarget:p,direction:s});
return g.support.transition&&this.$element.hasClass("slide")?(u.addClass(x),u[0].offsetWidth,v.addClass(s),u.addClass(s),v.one("bsTransitionEnd",function(){u.removeClass([x,s].join(" ")).addClass("active"),v.removeClass(["active",s].join(" ")),q.sliding=!1,setTimeout(function(){q.$element.trigger(a)
},0)
}).emulateTransitionEnd(j.TRANSITION_DURATION)):(v.removeClass("active"),u.addClass("active"),this.sliding=!1,this.$element.trigger(a)),t&&this.cycle(),this
}};
var i=g.fn.carousel;
g.fn.carousel=f,g.fn.carousel.Constructor=j,g.fn.carousel.noConflict=function(){return g.fn.carousel=i,this
};
var h=function(n){var m,l=g(this),k=g(l.attr("data-target")||(m=l.attr("href"))&&m.replace(/.*(?=#[^\s]+$)/,""));
if(k.hasClass("carousel")){var b=g.extend({},k.data(),l.data()),a=l.attr("data-slide-to");
a&&(b.interval=!1),f.call(k,b),a&&k.data("bs.carousel").to(a),n.preventDefault()
}};
g(document).on("click.bs.carousel.data-api","[data-slide]",h).on("click.bs.carousel.data-api","[data-slide-to]",h),g(window).on("load",function(){g('[data-ride="carousel"]').each(function(){var a=g(this);
f.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){var k,e=a.attr("data-target")||(k=a.attr("href"))&&k.replace(/.*(?=#[^\s]+$)/,"");
return g(e)
}function j(a){return this.each(function(){var k=g(this),d=k.data("bs.collapse"),b=g.extend({},i.DEFAULTS,k.data(),"object"==typeof a&&a);
!d&&b.toggle&&"show"==a&&(b.toggle=!1),d||k.data("bs.collapse",d=new i(this,b)),"string"==typeof a&&d[a]()
})
}var i=function(a,d){this.$element=g(a),this.options=g.extend({},i.DEFAULTS,d),this.$trigger=g(this.options.trigger).filter('[href="#'+a.id+'"], [data-target="#'+a.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()
};
i.VERSION="3.3.1",i.TRANSITION_DURATION=350,i.DEFAULTS={toggle:!0,trigger:'[data-toggle="collapse"]'},i.prototype.dimension=function(){var b=this.$element.hasClass("width");
return b?"width":"height"
},i.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var a,m=this.$parent&&this.$parent.find("> .panel").children(".in, .collapsing");
if(!(m&&m.length&&(a=m.data("bs.collapse"),a&&a.transitioning))){var l=g.Event("show.bs.collapse");
if(this.$element.trigger(l),!l.isDefaultPrevented()){m&&m.length&&(j.call(m,"hide"),a||m.data("bs.collapse",null));
var k=this.dimension();
this.$element.removeClass("collapse").addClass("collapsing")[k](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;
var d=function(){this.$element.removeClass("collapsing").addClass("collapse in")[k](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")
};
if(!g.support.transition){return d.call(this)
}var c=g.camelCase(["scroll",k].join("-"));
this.$element.one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION)[k](this.$element[0][c])
}}}},i.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var a=g.Event("hide.bs.collapse");
if(this.$element.trigger(a),!a.isDefaultPrevented()){var k=this.dimension();
this.$element[k](this.$element[k]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;
var d=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
};
return g.support.transition?void this.$element[k](0).one("bsTransitionEnd",g.proxy(d,this)).emulateTransitionEnd(i.TRANSITION_DURATION):d.call(this)
}}},i.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()
},i.prototype.getParent=function(){return g(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(g.proxy(function(k,b){var a=g(b);
this.addAriaAndCollapsedClass(f(a),a)
},this)).end()
},i.prototype.addAriaAndCollapsedClass=function(e,d){var k=e.hasClass("in");
e.attr("aria-expanded",k),d.toggleClass("collapsed",!k).attr("aria-expanded",k)
};
var h=g.fn.collapse;
g.fn.collapse=j,g.fn.collapse.Constructor=i,g.fn.collapse.noConflict=function(){return g.fn.collapse=h,this
},g(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(l){var k=g(this);
k.attr("data-target")||l.preventDefault();
var c=f(k),b=c.data("bs.collapse"),a=b?"toggle":g.extend({},k.data(),{trigger:this});
j.call(c,a)
})
}(jQuery),+function(j){function i(a){a&&3===a.which||(j(n).remove(),j(m).each(function(){var g=j(this),c=p(g),b={relatedTarget:this};
c.hasClass("open")&&(c.trigger(a=j.Event("hide.bs.dropdown",b)),a.isDefaultPrevented()||(g.attr("aria-expanded","false"),c.removeClass("open").trigger("hidden.bs.dropdown",b)))
}))
}function p(a){var f=a.attr("data-target");
f||(f=a.attr("href"),f=f&&/#[A-Za-z]/.test(f)&&f.replace(/.*(?=#[^\s]*$)/,""));
var e=f&&j(f);
return e&&e.length?e:a.parent()
}function o(a){return this.each(function(){var e=j(this),b=e.data("bs.dropdown");
b||e.data("bs.dropdown",b=new l(this)),"string"==typeof a&&b[a].call(e)
})
}var n=".dropdown-backdrop",m='[data-toggle="dropdown"]',l=function(a){j(a).on("click.bs.dropdown",this.toggle)
};
l.VERSION="3.3.1",l.prototype.toggle=function(r){var q=j(this);
if(!q.is(".disabled, :disabled")){var c=p(q),b=c.hasClass("open");
if(i(),!b){"ontouchstart" in document.documentElement&&!c.closest(".navbar-nav").length&&j('<div class="dropdown-backdrop"/>').insertAfter(j(this)).on("click",i);
var a={relatedTarget:this};
if(c.trigger(r=j.Event("show.bs.dropdown",a)),r.isDefaultPrevented()){return
}q.trigger("focus").attr("aria-expanded","true"),c.toggleClass("open").trigger("shown.bs.dropdown",a)
}return !1
}},l.prototype.keydown=function(a){if(/(38|40|27|32)/.test(a.which)&&!/input|textarea/i.test(a.target.tagName)){var t=j(this);
if(a.preventDefault(),a.stopPropagation(),!t.is(".disabled, :disabled")){var s=p(t),r=s.hasClass("open");
if(!r&&27!=a.which||r&&27==a.which){return 27==a.which&&s.find(m).trigger("focus"),t.trigger("click")
}var q=" li:not(.divider):visible a",f=s.find('[role="menu"]'+q+', [role="listbox"]'+q);
if(f.length){var c=f.index(a.target);
38==a.which&&c>0&&c--,40==a.which&&c<f.length-1&&c++,~c||(c=0),f.eq(c).trigger("focus")
}}}};
var k=j.fn.dropdown;
j.fn.dropdown=o,j.fn.dropdown.Constructor=l,j.fn.dropdown.noConflict=function(){return j.fn.dropdown=k,this
},j(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(b){b.stopPropagation()
}).on("click.bs.dropdown.data-api",m,l.prototype.toggle).on("keydown.bs.dropdown.data-api",m,l.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="menu"]',l.prototype.keydown).on("keydown.bs.dropdown.data-api",'[role="listbox"]',l.prototype.keydown)
}(jQuery),+function(f){function e(a,c){return this.each(function(){var i=f(this),d=i.data("bs.modal"),b=f.extend({},h.DEFAULTS,i.data(),"object"==typeof a&&a);
d||i.data("bs.modal",d=new h(this,b)),"string"==typeof a?d[a](c):b.show&&d.show(c)
})
}var h=function(a,d){this.options=d,this.$body=f(document.body),this.$element=f(a),this.$backdrop=this.isShown=null,this.scrollbarWidth=0,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,f.proxy(function(){this.$element.trigger("loaded.bs.modal")
},this))
};
h.VERSION="3.3.1",h.TRANSITION_DURATION=300,h.BACKDROP_TRANSITION_DURATION=150,h.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},h.prototype.toggle=function(b){return this.isShown?this.hide():this.show(b)
},h.prototype.show=function(a){var i=this,c=f.Event("show.bs.modal",{relatedTarget:a});
this.$element.trigger(c),this.isShown||c.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',f.proxy(this.hide,this)),this.backdrop(function(){var d=f.support.transition&&i.$element.hasClass("fade");
i.$element.parent().length||i.$element.appendTo(i.$body),i.$element.show().scrollTop(0),i.options.backdrop&&i.adjustBackdrop(),i.adjustDialog(),d&&i.$element[0].offsetWidth,i.$element.addClass("in").attr("aria-hidden",!1),i.enforceFocus();
var b=f.Event("shown.bs.modal",{relatedTarget:a});
d?i.$element.find(".modal-dialog").one("bsTransitionEnd",function(){i.$element.trigger("focus").trigger(b)
}).emulateTransitionEnd(h.TRANSITION_DURATION):i.$element.trigger("focus").trigger(b)
}))
},h.prototype.hide=function(a){a&&a.preventDefault(),a=f.Event("hide.bs.modal"),this.$element.trigger(a),this.isShown&&!a.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),f(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),f.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",f.proxy(this.hideModal,this)).emulateTransitionEnd(h.TRANSITION_DURATION):this.hideModal())
},h.prototype.enforceFocus=function(){f(document).off("focusin.bs.modal").on("focusin.bs.modal",f.proxy(function(b){this.$element[0]===b.target||this.$element.has(b.target).length||this.$element.trigger("focus")
},this))
},h.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",f.proxy(function(b){27==b.which&&this.hide()
},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")
},h.prototype.resize=function(){this.isShown?f(window).on("resize.bs.modal",f.proxy(this.handleUpdate,this)):f(window).off("resize.bs.modal")
},h.prototype.hideModal=function(){var b=this;
this.$element.hide(),this.backdrop(function(){b.$body.removeClass("modal-open"),b.resetAdjustments(),b.resetScrollbar(),b.$element.trigger("hidden.bs.modal")
})
},h.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null
},h.prototype.backdrop=function(a){var k=this,j=this.$element.hasClass("fade")?"fade":"";
if(this.isShown&&this.options.backdrop){var i=f.support.transition&&j;
if(this.$backdrop=f('<div class="modal-backdrop '+j+'" />').prependTo(this.$element).on("click.dismiss.bs.modal",f.proxy(function(b){b.target===b.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))
},this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!a){return
}i?this.$backdrop.one("bsTransitionEnd",a).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):a()
}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");
var c=function(){k.removeBackdrop(),a&&a()
};
f.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",c).emulateTransitionEnd(h.BACKDROP_TRANSITION_DURATION):c()
}else{a&&a()
}}},h.prototype.handleUpdate=function(){this.options.backdrop&&this.adjustBackdrop(),this.adjustDialog()
},h.prototype.adjustBackdrop=function(){this.$backdrop.css("height",0).css("height",this.$element[0].scrollHeight)
},h.prototype.adjustDialog=function(){var b=this.$element[0].scrollHeight>document.documentElement.clientHeight;
this.$element.css({paddingLeft:!this.bodyIsOverflowing&&b?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!b?this.scrollbarWidth:""})
},h.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})
},h.prototype.checkScrollbar=function(){this.bodyIsOverflowing=document.body.scrollHeight>document.documentElement.clientHeight,this.scrollbarWidth=this.measureScrollbar()
},h.prototype.setScrollbar=function(){var b=parseInt(this.$body.css("padding-right")||0,10);
this.bodyIsOverflowing&&this.$body.css("padding-right",b+this.scrollbarWidth)
},h.prototype.resetScrollbar=function(){this.$body.css("padding-right","")
},h.prototype.measureScrollbar=function(){var d=document.createElement("div");
d.className="modal-scrollbar-measure",this.$body.append(d);
var c=d.offsetWidth-d.clientWidth;
return this.$body[0].removeChild(d),c
};
var g=f.fn.modal;
f.fn.modal=e,f.fn.modal.Constructor=h,f.fn.modal.noConflict=function(){return f.fn.modal=g,this
},f(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(k){var j=f(this),i=j.attr("href"),b=f(j.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),a=b.data("bs.modal")?"toggle":f.extend({remote:!/#/.test(i)&&i},b.data(),j.data());
j.is("a")&&k.preventDefault(),b.one("show.bs.modal",function(c){c.isDefaultPrevented()||b.one("hidden.bs.modal",function(){j.is(":visible")&&j.trigger("focus")
})
}),e.call(b,a,this)
})
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),i=j.data("bs.tooltip"),c="object"==typeof a&&a,b=c&&c.selector;
(i||"destroy"!=a)&&(b?(i||j.data("bs.tooltip",i={}),i[b]||(i[b]=new h(this,c))):i||j.data("bs.tooltip",i=new h(this,c)),"string"==typeof a&&i[a]())
})
}var h=function(d,c){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",d,c)
};
h.VERSION="3.3.1",h.TRANSITION_DURATION=150,h.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},h.prototype.init=function(a,p,o){this.enabled=!0,this.type=a,this.$element=f(p),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&f(this.options.viewport.selector||this.options.viewport);
for(var n=this.options.trigger.split(" "),m=n.length;
m--;
){var l=n[m];
if("click"==l){this.$element.on("click."+this.type,this.options.selector,f.proxy(this.toggle,this))
}else{if("manual"!=l){var k="hover"==l?"mouseenter":"focusin",j="hover"==l?"mouseleave":"focusout";
this.$element.on(k+"."+this.type,this.options.selector,f.proxy(this.enter,this)),this.$element.on(j+"."+this.type,this.options.selector,f.proxy(this.leave,this))
}}}this.options.selector?this._options=f.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()
},h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.getOptions=function(a){return a=f.extend({},this.getDefaults(),this.$element.data(),a),a.delay&&"number"==typeof a.delay&&(a.delay={show:a.delay,hide:a.delay}),a
},h.prototype.getDelegateOptions=function(){var a={},d=this.getDefaults();
return this._options&&f.each(this._options,function(b,c){d[b]!=c&&(a[b]=c)
}),a
},h.prototype.enter=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d&&d.$tip&&d.$tip.is(":visible")?void (d.hoverState="in"):(d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),clearTimeout(d.timeout),d.hoverState="in",d.options.delay&&d.options.delay.show?void (d.timeout=setTimeout(function(){"in"==d.hoverState&&d.show()
},d.options.delay.show)):d.show())
},h.prototype.leave=function(a){var d=a instanceof this.constructor?a:f(a.currentTarget).data("bs."+this.type);
return d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d)),clearTimeout(d.timeout),d.hoverState="out",d.options.delay&&d.options.delay.hide?void (d.timeout=setTimeout(function(){"out"==d.hoverState&&d.hide()
},d.options.delay.hide)):d.hide()
},h.prototype.show=function(){var F=f.Event("show.bs."+this.type);
if(this.hasContent()&&this.enabled){this.$element.trigger(F);
var E=f.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);
if(F.isDefaultPrevented()||!E){return
}var D=this,C=this.tip(),B=this.getUID(this.type);
this.setContent(),C.attr("id",B),this.$element.attr("aria-describedby",B),this.options.animation&&C.addClass("fade");
var A="function"==typeof this.options.placement?this.options.placement.call(this,C[0],this.$element[0]):this.options.placement,z=/\s?auto?\s?/i,y=z.test(A);
y&&(A=A.replace(z,"")||"top"),C.detach().css({top:0,left:0,display:"block"}).addClass(A).data("bs."+this.type,this),this.options.container?C.appendTo(this.options.container):C.insertAfter(this.$element);
var x=this.getPosition(),w=C[0].offsetWidth,v=C[0].offsetHeight;
if(y){var u=A,t=this.options.container?f(this.options.container):this.$element.parent(),s=this.getPosition(t);
A="bottom"==A&&x.bottom+v>s.bottom?"top":"top"==A&&x.top-v<s.top?"bottom":"right"==A&&x.right+w>s.width?"left":"left"==A&&x.left-w<s.left?"right":A,C.removeClass(u).addClass(A)
}var c=this.getCalculatedOffset(A,x,w,v);
this.applyPlacement(c,A);
var a=function(){var b=D.hoverState;
D.$element.trigger("shown.bs."+D.type),D.hoverState=null,"out"==b&&D.leave(D)
};
f.support.transition&&this.$tip.hasClass("fade")?C.one("bsTransitionEnd",a).emulateTransitionEnd(h.TRANSITION_DURATION):a()
}},h.prototype.applyPlacement=function(z,y){var x=this.tip(),w=x[0].offsetWidth,v=x[0].offsetHeight,u=parseInt(x.css("margin-top"),10),t=parseInt(x.css("margin-left"),10);
isNaN(u)&&(u=0),isNaN(t)&&(t=0),z.top=z.top+u,z.left=z.left+t,f.offset.setOffset(x[0],f.extend({using:function(b){x.css({top:Math.round(b.top),left:Math.round(b.left)})
}},z),0),x.addClass("in");
var s=x[0].offsetWidth,r=x[0].offsetHeight;
"top"==y&&r!=v&&(z.top=z.top+v-r);
var q=this.getViewportAdjustedDelta(y,z,s,r);
q.left?z.left+=q.left:z.top+=q.top;
var p=/top|bottom/.test(y),o=p?2*q.left-w+s:2*q.top-v+r,a=p?"offsetWidth":"offsetHeight";
x.offset(z),this.replaceArrow(o,x[0][a],p)
},h.prototype.replaceArrow=function(i,d,j){this.arrow().css(j?"left":"top",50*(1-i/d)+"%").css(j?"top":"left","")
},h.prototype.setContent=function(){var d=this.tip(),c=this.getTitle();
d.find(".tooltip-inner")[this.options.html?"html":"text"](c),d.removeClass("fade in top bottom left right")
},h.prototype.hide=function(a){function k(){"in"!=j.hoverState&&i.detach(),j.$element.removeAttr("aria-describedby").trigger("hidden.bs."+j.type),a&&a()
}var j=this,i=this.tip(),c=f.Event("hide.bs."+this.type);
return this.$element.trigger(c),c.isDefaultPrevented()?void 0:(i.removeClass("in"),f.support.transition&&this.$tip.hasClass("fade")?i.one("bsTransitionEnd",k).emulateTransitionEnd(h.TRANSITION_DURATION):k(),this.hoverState=null,this)
},h.prototype.fixTitle=function(){var b=this.$element;
(b.attr("title")||"string"!=typeof b.attr("data-original-title"))&&b.attr("data-original-title",b.attr("title")||"").attr("title","")
},h.prototype.hasContent=function(){return this.getTitle()
},h.prototype.getPosition=function(a){a=a||this.$element;
var n=a[0],m="BODY"==n.tagName,l=n.getBoundingClientRect();
null==l.width&&(l=f.extend({},l,{width:l.right-l.left,height:l.bottom-l.top}));
var k=m?{top:0,left:0}:a.offset(),j={scroll:m?document.documentElement.scrollTop||document.body.scrollTop:a.scrollTop()},i=m?{width:f(window).width(),height:f(window).height()}:null;
return f.extend({},l,j,i,k)
},h.prototype.getCalculatedOffset=function(j,i,l,k){return"bottom"==j?{top:i.top+i.height,left:i.left+i.width/2-l/2}:"top"==j?{top:i.top-k,left:i.left+i.width/2-l/2}:"left"==j?{top:i.top+i.height/2-k/2,left:i.left-l}:{top:i.top+i.height/2-k/2,left:i.left+i.width}
},h.prototype.getViewportAdjustedDelta=function(v,u,t,s){var r={top:0,left:0};
if(!this.$viewport){return r
}var q=this.options.viewport&&this.options.viewport.padding||0,p=this.getPosition(this.$viewport);
if(/right|left/.test(v)){var o=u.top-q-p.scroll,n=u.top+q-p.scroll+s;
o<p.top?r.top=p.top-o:n>p.top+p.height&&(r.top=p.top+p.height-n)
}else{var m=u.left-q,l=u.left+q+t;
m<p.left?r.left=p.left-m:l>p.width&&(r.left=p.left+p.width-l)
}return r
},h.prototype.getTitle=function(){var i,d=this.$element,j=this.options;
return i=d.attr("data-original-title")||("function"==typeof j.title?j.title.call(d[0]):j.title)
},h.prototype.getUID=function(b){do{b+=~~(1000000*Math.random())
}while(document.getElementById(b));
return b
},h.prototype.tip=function(){return this.$tip=this.$tip||f(this.options.template)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")
},h.prototype.enable=function(){this.enabled=!0
},h.prototype.disable=function(){this.enabled=!1
},h.prototype.toggleEnabled=function(){this.enabled=!this.enabled
},h.prototype.toggle=function(a){var d=this;
a&&(d=f(a.currentTarget).data("bs."+this.type),d||(d=new this.constructor(a.currentTarget,this.getDelegateOptions()),f(a.currentTarget).data("bs."+this.type,d))),d.tip().hasClass("in")?d.leave(d):d.enter(d)
},h.prototype.destroy=function(){var b=this;
clearTimeout(this.timeout),this.hide(function(){b.$element.off("."+b.type).removeData("bs."+b.type)
})
};
var g=f.fn.tooltip;
f.fn.tooltip=e,f.fn.tooltip.Constructor=h,f.fn.tooltip.noConflict=function(){return f.fn.tooltip=g,this
}
}(jQuery),+function(f){function e(a){return this.each(function(){var j=f(this),i=j.data("bs.popover"),c="object"==typeof a&&a,b=c&&c.selector;
(i||"destroy"!=a)&&(b?(i||j.data("bs.popover",i={}),i[b]||(i[b]=new h(this,c))):i||j.data("bs.popover",i=new h(this,c)),"string"==typeof a&&i[a]())
})
}var h=function(d,c){this.init("popover",d,c)
};
if(!f.fn.tooltip){throw new Error("Popover requires tooltip.js")
}h.VERSION="3.3.1",h.DEFAULTS=f.extend({},f.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),h.prototype=f.extend({},f.fn.tooltip.Constructor.prototype),h.prototype.constructor=h,h.prototype.getDefaults=function(){return h.DEFAULTS
},h.prototype.setContent=function(){var i=this.tip(),d=this.getTitle(),j=this.getContent();
i.find(".popover-title")[this.options.html?"html":"text"](d),i.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof j?"html":"append":"text"](j),i.removeClass("fade top bottom left right in"),i.find(".popover-title").html()||i.find(".popover-title").hide()
},h.prototype.hasContent=function(){return this.getTitle()||this.getContent()
},h.prototype.getContent=function(){var d=this.$element,c=this.options;
return d.attr("data-content")||("function"==typeof c.content?c.content.call(d[0]):c.content)
},h.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")
},h.prototype.tip=function(){return this.$tip||(this.$tip=f(this.options.template)),this.$tip
};
var g=f.fn.popover;
f.fn.popover=e,f.fn.popover.Constructor=h,f.fn.popover.noConflict=function(){return f.fn.popover=g,this
}
}(jQuery),+function(f){function e(i,b){var a=f.proxy(this.process,this);
this.$body=f("body"),this.$scrollElement=f(f(i).is("body")?window:i),this.options=f.extend({},e.DEFAULTS,b),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a),this.refresh(),this.process()
}function h(a){return this.each(function(){var i=f(this),c=i.data("bs.scrollspy"),b="object"==typeof a&&a;
c||i.data("bs.scrollspy",c=new e(this,b)),"string"==typeof a&&c[a]()
})
}e.VERSION="3.3.1",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)
},e.prototype.refresh=function(){var a="offset",j=0;
f.isWindow(this.$scrollElement[0])||(a="position",j=this.$scrollElement.scrollTop()),this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight();
var i=this;
this.$body.find(this.selector).map(function(){var k=f(this),c=k.data("target")||k.attr("href"),b=/^#./.test(c)&&f(c);
return b&&b.length&&b.is(":visible")&&[[b[a]().top+j,c]]||null
}).sort(function(d,c){return d[0]-c[0]
}).each(function(){i.offsets.push(this[0]),i.targets.push(this[1])
})
},e.prototype.process=function(){var j,i=this.$scrollElement.scrollTop()+this.options.offset,o=this.getScrollHeight(),n=this.options.offset+o-this.$scrollElement.height(),m=this.offsets,l=this.targets,k=this.activeTarget;
if(this.scrollHeight!=o&&this.refresh(),i>=n){return k!=(j=l[l.length-1])&&this.activate(j)
}if(k&&i<m[0]){return this.activeTarget=null,this.clear()
}for(j=m.length;
j--;
){k!=l[j]&&i>=m[j]&&(!m[j+1]||i<=m[j+1])&&this.activate(l[j])
}},e.prototype.activate=function(a){this.activeTarget=a,this.clear();
var j=this.selector+'[data-target="'+a+'"],'+this.selector+'[href="'+a+'"]',i=f(j).parents("li").addClass("active");
i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")
},e.prototype.clear=function(){f(this.selector).parentsUntil(this.options.target,".active").removeClass("active")
};
var g=f.fn.scrollspy;
f.fn.scrollspy=h,f.fn.scrollspy.Constructor=e,f.fn.scrollspy.noConflict=function(){return f.fn.scrollspy=g,this
},f(window).on("load.bs.scrollspy.data-api",function(){f('[data-spy="scroll"]').each(function(){var a=f(this);
h.call(a,a.data())
})
})
}(jQuery),+function(g){function f(a){return this.each(function(){var c=g(this),b=c.data("bs.tab");
b||c.data("bs.tab",b=new j(this)),"string"==typeof a&&b[a]()
})
}var j=function(a){this.element=g(a)
};
j.VERSION="3.3.1",j.TRANSITION_DURATION=150,j.prototype.show=function(){var a=this.element,p=a.closest("ul:not(.dropdown-menu)"),o=a.data("target");
if(o||(o=a.attr("href"),o=o&&o.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var n=p.find(".active:last a"),m=g.Event("hide.bs.tab",{relatedTarget:a[0]}),l=g.Event("show.bs.tab",{relatedTarget:n[0]});
if(n.trigger(m),a.trigger(l),!l.isDefaultPrevented()&&!m.isDefaultPrevented()){var k=g(o);
this.activate(a.closest("li"),p),this.activate(k,k.parent(),function(){n.trigger({type:"hidden.bs.tab",relatedTarget:a[0]}),a.trigger({type:"shown.bs.tab",relatedTarget:n[0]})
})
}}},j.prototype.activate=function(a,n,m){function l(){k.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),a.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),c?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),m&&m()
}var k=n.find("> .active"),c=m&&g.support.transition&&(k.length&&k.hasClass("fade")||!!n.find("> .fade").length);
k.length&&c?k.one("bsTransitionEnd",l).emulateTransitionEnd(j.TRANSITION_DURATION):l(),k.removeClass("in")
};
var i=g.fn.tab;
g.fn.tab=f,g.fn.tab.Constructor=j,g.fn.tab.noConflict=function(){return g.fn.tab=i,this
};
var h=function(a){a.preventDefault(),f.call(g(this),"show")
};
g(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',h).on("click.bs.tab.data-api",'[data-toggle="pill"]',h)
}(jQuery),+function(f){function e(a){return this.each(function(){var i=f(this),c=i.data("bs.affix"),b="object"==typeof a&&a;
c||i.data("bs.affix",c=new h(this,b)),"string"==typeof a&&c[a]()
})
}var h=function(a,c){this.options=f.extend({},h.DEFAULTS,c),this.$target=f(this.options.target).on("scroll.bs.affix.data-api",f.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",f.proxy(this.checkPositionWithEventLoop,this)),this.$element=f(a),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()
};
h.VERSION="3.3.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,s,r,q){var p=this.$target.scrollTop(),o=this.$element.offset(),n=this.$target.height();
if(null!=r&&"top"==this.affixed){return r>p?"top":!1
}if("bottom"==this.affixed){return null!=r?p+this.unpin<=o.top?!1:"bottom":t-q>=p+n?!1:"bottom"
}var m=null==this.affixed,l=m?p:o.top,k=m?n:s;
return null!=r&&r>=l?"top":null!=q&&l+k>=t-q?"bottom":!1
},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset
}this.$element.removeClass(h.RESET).addClass("affix");
var d=this.$target.scrollTop(),c=this.$element.offset();
return this.pinnedOffset=c.top-d
},h.prototype.checkPositionWithEventLoop=function(){setTimeout(f.proxy(this.checkPosition,this),1)
},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var a=this.$element.height(),p=this.options.offset,o=p.top,n=p.bottom,m=f("body").height();
"object"!=typeof p&&(n=o=p),"function"==typeof o&&(o=p.top(this.$element)),"function"==typeof n&&(n=p.bottom(this.$element));
var l=this.getState(m,a,o,n);
if(this.affixed!=l){null!=this.unpin&&this.$element.css("top","");
var k="affix"+(l?"-"+l:""),c=f.Event(k+".bs.affix");
if(this.$element.trigger(c),c.isDefaultPrevented()){return
}this.affixed=l,this.unpin="bottom"==l?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(k).trigger(k.replace("affix","affixed")+".bs.affix")
}"bottom"==l&&this.$element.offset({top:m-a-n})
}};
var g=f.fn.affix;
f.fn.affix=e,f.fn.affix.Constructor=h,f.fn.affix.noConflict=function(){return f.fn.affix=g,this
},f(window).on("load",function(){f('[data-spy="affix"]').each(function(){var b=f(this),a=b.data();
a.offset=a.offset||{},null!=a.offsetBottom&&(a.offset.bottom=a.offsetBottom),null!=a.offsetTop&&(a.offset.top=a.offsetTop),e.call(b,a)
})
})
}(jQuery);
/*!
 * Jasny Bootstrap v3.1.3 (http://jasny.github.io/bootstrap)
 * Copyright 2012-2014 Arnold Daniels
 * Licensed under Apache-2.0 (https://github.com/jasny/bootstrap/blob/master/LICENSE)
 */
;
if("undefined"==typeof jQuery){throw new Error("Jasny Bootstrap's JavaScript requires jQuery")
}+function(d){function c(){var f=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};
for(var g in e){if(void 0!==f.style[g]){return{end:e[g]}
}}return !1
}void 0===d.support.transition&&(d.fn.emulateTransitionEnd=function(a){var h=!1,g=this;
d(this).one(d.support.transition.end,function(){h=!0
});
var f=function(){h||d(g).trigger(d.support.transition.end)
};
return setTimeout(f,a),this
},d(function(){d.support.transition=c()
}))
}(window.jQuery),+function(e){var d=function(b,a){this.$element=e(b),this.options=e.extend({},d.DEFAULTS,a),this.state=null,this.placement=null,this.options.recalc&&(this.calcClone(),e(window).on("resize",e.proxy(this.recalc,this))),this.options.autohide&&e(document).on("click",e.proxy(this.autohide,this)),this.options.toggle&&this.toggle(),this.options.disablescrolling&&(this.options.disableScrolling=this.options.disablescrolling,delete this.options.disablescrolling)
};
d.DEFAULTS={toggle:!0,placement:"auto",autohide:!0,recalc:!0,disableScrolling:!0},d.prototype.offset=function(){switch(this.placement){case"left":case"right":return this.$element.outerWidth();
case"top":case"bottom":return this.$element.outerHeight()
}},d.prototype.calcPlacement=function(){function a(k,j){if("auto"===g.css(j)){return k
}if("auto"===g.css(k)){return j
}var m=parseInt(g.css(k),10),l=parseInt(g.css(j),10);
return m>l?j:k
}if("auto"!==this.options.placement){return void (this.placement=this.options.placement)
}this.$element.hasClass("in")||this.$element.css("visiblity","hidden !important").addClass("in");
var i=e(window).width()/this.$element.width(),h=e(window).height()/this.$element.height(),g=this.$element;
this.placement=i>=h?a("left","right"):a("top","bottom"),"hidden !important"===this.$element.css("visibility")&&this.$element.removeClass("in").css("visiblity","")
},d.prototype.opposite=function(b){switch(b){case"top":return"bottom";
case"left":return"right";
case"bottom":return"top";
case"right":return"left"
}},d.prototype.getCanvasElements=function(){var a=this.options.canvas?e(this.options.canvas):this.$element,g=a.find("*").filter(function(){return"fixed"===e(this).css("position")
}).not(this.options.exclude);
return a.add(g)
},d.prototype.slide=function(a,l,k){if(!e.support.transition){var j={};
return j[this.placement]="+="+l,a.animate(j,350,k)
}var i=this.placement,h=this.opposite(i);
a.each(function(){"auto"!==e(this).css(i)&&e(this).css(i,(parseInt(e(this).css(i),10)||0)+l),"auto"!==e(this).css(h)&&e(this).css(h,(parseInt(e(this).css(h),10)||0)-l)
}),this.$element.one(e.support.transition.end,k).emulateTransitionEnd(350)
},d.prototype.disableScrolling=function(){var a=e("body").width(),h="padding-"+this.opposite(this.placement);
if(void 0===e("body").data("offcanvas-style")&&e("body").data("offcanvas-style",e("body").attr("style")||""),e("body").css("overflow","hidden"),e("body").width()>a){var g=parseInt(e("body").css(h),10)+e("body").width()-a;
setTimeout(function(){e("body").css(h,g)
},1)
}},d.prototype.show=function(){if(!this.state){var a=e.Event("show.bs.offcanvas");
if(this.$element.trigger(a),!a.isDefaultPrevented()){this.state="slide-in",this.calcPlacement();
var l=this.getCanvasElements(),k=this.placement,j=this.opposite(k),i=this.offset();
-1!==l.index(this.$element)&&(e(this.$element).data("offcanvas-style",e(this.$element).attr("style")||""),this.$element.css(k,-1*i),this.$element.css(k)),l.addClass("canvas-sliding").each(function(){void 0===e(this).data("offcanvas-style")&&e(this).data("offcanvas-style",e(this).attr("style")||""),"static"===e(this).css("position")&&e(this).css("position","relative"),"auto"!==e(this).css(k)&&"0px"!==e(this).css(k)||"auto"!==e(this).css(j)&&"0px"!==e(this).css(j)||e(this).css(k,0)
}),this.options.disableScrolling&&this.disableScrolling();
var h=function(){"slide-in"==this.state&&(this.state="slid",l.removeClass("canvas-sliding").addClass("canvas-slid"),this.$element.trigger("shown.bs.offcanvas"))
};
setTimeout(e.proxy(function(){this.$element.addClass("in"),this.slide(l,i,e.proxy(h,this))
},this),1)
}}},d.prototype.hide=function(){if("slid"===this.state){var a=e.Event("hide.bs.offcanvas");
if(this.$element.trigger(a),!a.isDefaultPrevented()){this.state="slide-out";
var i=e(".canvas-slid"),h=(this.placement,-1*this.offset()),g=function(){"slide-out"==this.state&&(this.state=null,this.placement=null,this.$element.removeClass("in"),i.removeClass("canvas-sliding"),i.add(this.$element).add("body").each(function(){e(this).attr("style",e(this).data("offcanvas-style")).removeData("offcanvas-style")
}),this.$element.trigger("hidden.bs.offcanvas"))
};
i.removeClass("canvas-slid").addClass("canvas-sliding"),setTimeout(e.proxy(function(){this.slide(i,h,e.proxy(g,this))
},this),1)
}}},d.prototype.toggle=function(){"slide-in"!==this.state&&"slide-out"!==this.state&&this["slid"===this.state?"hide":"show"]()
},d.prototype.calcClone=function(){this.$calcClone=this.$element.clone().html("").addClass("offcanvas-clone").removeClass("in").appendTo(e("body"))
},d.prototype.recalc=function(){if("none"!==this.$calcClone.css("display")&&("slid"===this.state||"slide-in"===this.state)){this.state=null,this.placement=null;
var a=this.getCanvasElements();
this.$element.removeClass("in"),a.removeClass("canvas-slid"),a.add(this.$element).add("body").each(function(){e(this).attr("style",e(this).data("offcanvas-style")).removeData("offcanvas-style")
})
}},d.prototype.autohide=function(a){0===e(a.target).closest(this.$element).length&&this.hide()
};
var f=e.fn.offcanvas;
e.fn.offcanvas=function(a){return this.each(function(){var g=e(this),c=g.data("bs.offcanvas"),b=e.extend({},d.DEFAULTS,g.data(),"object"==typeof a&&a);
c||g.data("bs.offcanvas",c=new d(this,b)),"string"==typeof a&&c[a]()
})
},e.fn.offcanvas.Constructor=d,e.fn.offcanvas.noConflict=function(){return e.fn.offcanvas=f,this
},e(document).on("click.bs.offcanvas.data-api","[data-toggle=offcanvas]",function(a){var n,m=e(this),l=m.attr("data-target")||a.preventDefault()||(n=m.attr("href"))&&n.replace(/.*(?=#[^\s]+$)/,""),k=e(l),j=k.data("bs.offcanvas"),i=j?"toggle":m.data();
a.stopPropagation(),j?j.toggle():k.offcanvas(i)
})
}(window.jQuery),+function(e){var d=function(b,a){this.$element=e(b),this.options=e.extend({},d.DEFAULTS,a),this.$element.on("click.bs.rowlink","td:not(.rowlink-skip)",e.proxy(this.click,this))
};
d.DEFAULTS={target:"a"},d.prototype.click=function(a){var h=e(a.currentTarget).closest("tr").find(this.options.target)[0];
if(e(a.target)[0]!==h){if(a.preventDefault(),h.click){h.click()
}else{if(document.createEvent){var g=document.createEvent("MouseEvents");
g.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),h.dispatchEvent(g)
}}}};
var f=e.fn.rowlink;
e.fn.rowlink=function(a){return this.each(function(){var c=e(this),b=c.data("bs.rowlink");
b||c.data("bs.rowlink",b=new d(this,a))
})
},e.fn.rowlink.Constructor=d,e.fn.rowlink.noConflict=function(){return e.fn.rowlink=f,this
},e(document).on("click.bs.rowlink.data-api",'[data-link="row"]',function(a){if(0===e(a.target).closest(".rowlink-skip").length){var g=e(this);
g.data("bs.rowlink")||(g.rowlink(g.data()),e(a.target).trigger("click.bs.rowlink"))
}})
}(window.jQuery),+function(h){var g=void 0!==window.orientation,l=navigator.userAgent.toLowerCase().indexOf("android")>-1,k="Microsoft Internet Explorer"==window.navigator.appName,j=function(a,c){l||(this.$element=h(a),this.options=h.extend({},j.DEFAULTS,c),this.mask=String(this.options.mask),this.init(),this.listen(),this.checkVal())
};
j.DEFAULTS={mask:"",placeholder:"_",definitions:{9:"[0-9]",a:"[A-Za-z]",w:"[A-Za-z0-9]","*":"."}},j.prototype.init=function(){var a=this.options.definitions,d=this.mask.length;
this.tests=[],this.partialPosition=this.mask.length,this.firstNonMaskPos=null,h.each(this.mask.split(""),h.proxy(function(b,c){"?"==c?(d--,this.partialPosition=b):a[c]?(this.tests.push(new RegExp(a[c])),null===this.firstNonMaskPos&&(this.firstNonMaskPos=this.tests.length-1)):this.tests.push(null)
},this)),this.buffer=h.map(this.mask.split(""),h.proxy(function(b){return"?"!=b?a[b]?this.options.placeholder:b:void 0
},this)),this.focusText=this.$element.val(),this.$element.data("rawMaskFn",h.proxy(function(){return h.map(this.buffer,function(e,c){return this.tests[c]&&e!=this.options.placeholder?e:null
}).join("")
},this))
},j.prototype.listen=function(){if(!this.$element.attr("readonly")){var a=(k?"paste":"input")+".mask";
this.$element.on("unmask.bs.inputmask",h.proxy(this.unmask,this)).on("focus.bs.inputmask",h.proxy(this.focusEvent,this)).on("blur.bs.inputmask",h.proxy(this.blurEvent,this)).on("keydown.bs.inputmask",h.proxy(this.keydownEvent,this)).on("keypress.bs.inputmask",h.proxy(this.keypressEvent,this)).on(a,h.proxy(this.pasteEvent,this))
}},j.prototype.caret=function(e,d){if(0!==this.$element.length){if("number"==typeof e){return d="number"==typeof d?d:e,this.$element.each(function(){if(this.setSelectionRange){this.setSelectionRange(e,d)
}else{if(this.createTextRange){var a=this.createTextRange();
a.collapse(!0),a.moveEnd("character",d),a.moveStart("character",e),a.select()
}}})
}if(this.$element[0].setSelectionRange){e=this.$element[0].selectionStart,d=this.$element[0].selectionEnd
}else{if(document.selection&&document.selection.createRange){var f=document.selection.createRange();
e=0-f.duplicate().moveStart("character",-100000),d=e+f.text.length
}}return{begin:e,end:d}
}},j.prototype.seekNext=function(d){for(var c=this.mask.length;
++d<=c&&!this.tests[d];
){}return d
},j.prototype.seekPrev=function(b){for(;
--b>=0&&!this.tests[b];
){}return b
},j.prototype.shiftL=function(m,f){var p=this.mask.length;
if(!(0>m)){for(var o=m,n=this.seekNext(f);
p>o;
o++){if(this.tests[o]){if(!(p>n&&this.tests[o].test(this.buffer[n]))){break
}this.buffer[o]=this.buffer[n],this.buffer[n]=this.options.placeholder,n=this.seekNext(n)
}}this.writeBuffer(),this.caret(Math.max(this.firstNonMaskPos,m))
}},j.prototype.shiftR=function(n){for(var m=this.mask.length,r=n,q=this.options.placeholder;
m>r;
r++){if(this.tests[r]){var p=this.seekNext(r),o=this.buffer[r];
if(this.buffer[r]=q,!(m>p&&this.tests[p].test(o))){break
}q=o
}}},j.prototype.unmask=function(){this.$element.unbind(".mask").removeData("inputmask")
},j.prototype.focusEvent=function(){this.focusText=this.$element.val();
var f=this.mask.length,e=this.checkVal();
this.writeBuffer();
var n=this,m=function(){e==f?n.caret(0,e):n.caret(e)
};
m(),setTimeout(m,50)
},j.prototype.blurEvent=function(){this.checkVal(),this.$element.val()!==this.focusText&&this.$element.trigger("change")
},j.prototype.keydownEvent=function(b){var p=b.which;
if(8==p||46==p||g&&127==p){var o=this.caret(),n=o.begin,m=o.end;
return m-n===0&&(n=46!=p?this.seekPrev(n):m=this.seekNext(n-1),m=46==p?this.seekNext(m):m),this.clearBuffer(n,m),this.shiftL(n,m-1),!1
}return 27==p?(this.$element.val(this.focusText),this.caret(0,this.checkVal()),!1):void 0
},j.prototype.keypressEvent=function(n){var m=this.mask.length,s=n.which,r=this.caret();
if(n.ctrlKey||n.altKey||n.metaKey||32>s){return !0
}if(s){r.end-r.begin!==0&&(this.clearBuffer(r.begin,r.end),this.shiftL(r.begin,r.end-1));
var q=this.seekNext(r.begin-1);
if(m>q){var p=String.fromCharCode(s);
if(this.tests[q].test(p)){this.shiftR(q),this.buffer[q]=p,this.writeBuffer();
var o=this.seekNext(q);
this.caret(o)
}}return !1
}},j.prototype.pasteEvent=function(){var b=this;
setTimeout(function(){b.caret(b.checkVal(!0))
},0)
},j.prototype.clearBuffer=function(f,e){for(var n=this.mask.length,m=f;
e>m&&n>m;
m++){this.tests[m]&&(this.buffer[m]=this.options.placeholder)
}},j.prototype.writeBuffer=function(){return this.$element.val(this.buffer.join("")).val()
},j.prototype.checkVal=function(n){for(var m=this.mask.length,s=this.$element.val(),r=-1,q=0,p=0;
m>q;
q++){if(this.tests[q]){for(this.buffer[q]=this.options.placeholder;
p++<s.length;
){var o=s.charAt(p-1);
if(this.tests[q].test(o)){this.buffer[q]=o,r=q;
break
}}if(p>s.length){break
}}else{this.buffer[q]==s.charAt(p)&&q!=this.partialPosition&&(p++,r=q)
}}return !n&&r+1<this.partialPosition?(this.$element.val(""),this.clearBuffer(0,m)):(n||r+1>=this.partialPosition)&&(this.writeBuffer(),n||this.$element.val(this.$element.val().substring(0,r+1))),this.partialPosition?q:this.firstNonMaskPos
};
var i=h.fn.inputmask;
h.fn.inputmask=function(a){return this.each(function(){var e=h(this),b=e.data("bs.inputmask");
b||e.data("bs.inputmask",b=new j(this,a))
})
},h.fn.inputmask.Constructor=j,h.fn.inputmask.noConflict=function(){return h.fn.inputmask=i,this
},h(document).on("focus.bs.inputmask.data-api","[data-mask]",function(){var a=h(this);
a.data("bs.inputmask")||a.inputmask(a.data())
})
}(window.jQuery),+function(f){var e="Microsoft Internet Explorer"==window.navigator.appName,h=function(a,j){if(this.$element=f(a),this.$input=this.$element.find(":file"),0!==this.$input.length){this.name=this.$input.attr("name")||j.name,this.$hidden=this.$element.find('input[type=hidden][name="'+this.name+'"]'),0===this.$hidden.length&&(this.$hidden=f('<input type="hidden">').insertBefore(this.$input)),this.$preview=this.$element.find(".fileinput-preview");
var i=this.$preview.css("height");
"inline"!==this.$preview.css("display")&&"0px"!==i&&"none"!==i&&this.$preview.css("line-height",i),this.original={exists:this.$element.hasClass("fileinput-exists"),preview:this.$preview.html(),hiddenVal:this.$hidden.val()},this.listen()
}};
h.prototype.listen=function(){this.$input.on("change.bs.fileinput",f.proxy(this.change,this)),f(this.$input[0].form).on("reset.bs.fileinput",f.proxy(this.reset,this)),this.$element.find('[data-trigger="fileinput"]').on("click.bs.fileinput",f.proxy(this.trigger,this)),this.$element.find('[data-dismiss="fileinput"]').on("click.bs.fileinput",f.proxy(this.clear,this))
},h.prototype.change=function(a){var m=void 0===a.target.files?a.target&&a.target.value?[{name:a.target.value.replace(/^.+\\/,"")}]:[]:a.target.files;
if(a.stopPropagation(),0===m.length){return void this.clear()
}this.$hidden.val(""),this.$hidden.attr("name",""),this.$input.attr("name",this.name);
var l=m[0];
if(this.$preview.length>0&&("undefined"!=typeof l.type?l.type.match(/^image\/(gif|png|jpeg)$/):l.name.match(/\.(gif|png|jpe?g)$/i))&&"undefined"!=typeof FileReader){var k=new FileReader,j=this.$preview,i=this.$element;
k.onload=function(c){var d=f("<img>");
d[0].src=c.target.result,m[0].result=c.target.result,i.find(".fileinput-filename").text(l.name),"none"!=j.css("max-height")&&d.css("max-height",parseInt(j.css("max-height"),10)-parseInt(j.css("padding-top"),10)-parseInt(j.css("padding-bottom"),10)-parseInt(j.css("border-top"),10)-parseInt(j.css("border-bottom"),10)),j.html(d),i.addClass("fileinput-exists").removeClass("fileinput-new"),i.trigger("change.bs.fileinput",m)
},k.readAsDataURL(l)
}else{this.$element.find(".fileinput-filename").text(l.name),this.$preview.text(l.name),this.$element.addClass("fileinput-exists").removeClass("fileinput-new"),this.$element.trigger("change.bs.fileinput")
}},h.prototype.clear=function(b){if(b&&b.preventDefault(),this.$hidden.val(""),this.$hidden.attr("name",this.name),this.$input.attr("name",""),e){var d=this.$input.clone(!0);
this.$input.after(d),this.$input.remove(),this.$input=d
}else{this.$input.val("")
}this.$preview.html(""),this.$element.find(".fileinput-filename").text(""),this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),void 0!==b&&(this.$input.trigger("change"),this.$element.trigger("clear.bs.fileinput"))
},h.prototype.reset=function(){this.clear(),this.$hidden.val(this.original.hiddenVal),this.$preview.html(this.original.preview),this.$element.find(".fileinput-filename").text(""),this.original.exists?this.$element.addClass("fileinput-exists").removeClass("fileinput-new"):this.$element.addClass("fileinput-new").removeClass("fileinput-exists"),this.$element.trigger("reset.bs.fileinput")
},h.prototype.trigger=function(b){this.$input.trigger("click"),b.preventDefault()
};
var g=f.fn.fileinput;
f.fn.fileinput=function(a){return this.each(function(){var c=f(this),b=c.data("bs.fileinput");
b||c.data("bs.fileinput",b=new h(this,a)),"string"==typeof a&&b[a]()
})
},f.fn.fileinput.Constructor=h,f.fn.fileinput.noConflict=function(){return f.fn.fileinput=g,this
},f(document).on("click.fileinput.data-api",'[data-provides="fileinput"]',function(a){var j=f(this);
if(!j.data("bs.fileinput")){j.fileinput(j.data());
var i=f(a.target).closest('[data-dismiss="fileinput"],[data-trigger="fileinput"]');
i.length>0&&(a.preventDefault(),i.trigger("click.bs.fileinput"))
}})
}(window.jQuery);
!function(b){"function"==typeof define&&define.amd?define(["jquery"],b):"undefined"!=typeof exports?module.exports=b(require("jquery")):b(jQuery)
}(function(d){var c=window.Slick||{};
c=function(){function e(m,l){var j,i,b,k=this;
if(k.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:d(m),appendDots:d(m),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next">Next</button>',autoplay:!1,autoplaySpeed:3000,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(g,f){return'<button type="button" data-role="none">'+(f+1)+"</button>"
},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:0.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rtl:!1,slide:"",slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},k.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},d.extend(k,k.initials),k.activeBreakpoint=null,k.animType=null,k.animProp=null,k.breakpoints=[],k.breakpointSettings=[],k.cssTransitions=!1,k.hidden="hidden",k.paused=!1,k.positionProp=null,k.respondTo=null,k.shouldClick=!0,k.$slider=d(m),k.$slidesCache=null,k.transformType=null,k.transitionType=null,k.visibilityChange="visibilitychange",k.windowWidth=0,k.windowTimer=null,j=d(m).data("slick")||{},k.options=d.extend({},k.defaults,j,l),k.currentSlide=k.options.initialSlide,k.originalSettings=k.options,i=k.options.responsive||null,i&&i.length>-1){k.respondTo=k.options.respondTo||"window";
for(b in i){i.hasOwnProperty(b)&&(k.breakpoints.push(i[b].breakpoint),k.breakpointSettings[i[b].breakpoint]=i[b].settings)
}k.breakpoints.sort(function(g,f){return k.options.mobileFirst===!0?g-f:f-g
})
}"undefined"!=typeof document.mozHidden?(k.hidden="mozHidden",k.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.msHidden?(k.hidden="msHidden",k.visibilityChange="msvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(k.hidden="webkitHidden",k.visibilityChange="webkitvisibilitychange"),k.autoPlay=d.proxy(k.autoPlay,k),k.autoPlayClear=d.proxy(k.autoPlayClear,k),k.changeSlide=d.proxy(k.changeSlide,k),k.clickHandler=d.proxy(k.clickHandler,k),k.selectHandler=d.proxy(k.selectHandler,k),k.setPosition=d.proxy(k.setPosition,k),k.swipeHandler=d.proxy(k.swipeHandler,k),k.dragHandler=d.proxy(k.dragHandler,k),k.keyHandler=d.proxy(k.keyHandler,k),k.autoPlayIterator=d.proxy(k.autoPlayIterator,k),k.instanceUid=a++,k.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,k.init(),k.checkResponsive()
}var a=0;
return e
}(),c.prototype.addSlide=c.prototype.slickAdd=function(a,h,g){var f=this;
if("boolean"==typeof h){g=h,h=null
}else{if(0>h||h>=f.slideCount){return !1
}}f.unload(),"number"==typeof h?0===h&&0===f.$slides.length?d(a).appendTo(f.$slideTrack):g?d(a).insertBefore(f.$slides.eq(h)):d(a).insertAfter(f.$slides.eq(h)):g===!0?d(a).prependTo(f.$slideTrack):d(a).appendTo(f.$slideTrack),f.$slides=f.$slideTrack.children(this.options.slide),f.$slideTrack.children(this.options.slide).detach(),f.$slideTrack.append(f.$slides),f.$slides.each(function(e,i){d(i).attr("data-slick-index",e)
}),f.$slidesCache=f.$slides,f.reinit()
},c.prototype.animateHeight=function(){var f=this;
if(1===f.options.slidesToShow&&f.options.adaptiveHeight===!0&&f.options.vertical===!1){var e=f.$slides.eq(f.currentSlide).outerHeight(!0);
f.$list.animate({height:e},f.options.speed)
}},c.prototype.animateSlide=function(a,h){var g={},f=this;
f.animateHeight(),f.options.rtl===!0&&f.options.vertical===!1&&(a=-a),f.transformsEnabled===!1?f.options.vertical===!1?f.$slideTrack.animate({left:a},f.options.speed,f.options.easing,h):f.$slideTrack.animate({top:a},f.options.speed,f.options.easing,h):f.cssTransitions===!1?(f.options.rtl===!0&&(f.currentLeft=-f.currentLeft),d({animStart:f.currentLeft}).animate({animStart:a},{duration:f.options.speed,easing:f.options.easing,step:function(b){b=Math.ceil(b),f.options.vertical===!1?(g[f.animType]="translate("+b+"px, 0px)",f.$slideTrack.css(g)):(g[f.animType]="translate(0px,"+b+"px)",f.$slideTrack.css(g))
},complete:function(){h&&h.call()
}})):(f.applyTransition(),a=Math.ceil(a),g[f.animType]=f.options.vertical===!1?"translate3d("+a+"px, 0px, 0px)":"translate3d(0px,"+a+"px, 0px)",f.$slideTrack.css(g),h&&setTimeout(function(){f.disableTransition(),h.call()
},f.options.speed))
},c.prototype.asNavFor=function(a){var f=this,e=null!==f.options.asNavFor?d(f.options.asNavFor).slick("getSlick"):null;
null!==e&&e.slideHandler(a,!0)
},c.prototype.applyTransition=function(f){var e=this,g={};
g[e.transitionType]=e.options.fade===!1?e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:"opacity "+e.options.speed+"ms "+e.options.cssEase,e.options.fade===!1?e.$slideTrack.css(g):e.$slides.eq(f).css(g)
},c.prototype.autoPlay=function(){var b=this;
b.autoPlayTimer&&clearInterval(b.autoPlayTimer),b.slideCount>b.options.slidesToShow&&b.paused!==!0&&(b.autoPlayTimer=setInterval(b.autoPlayIterator,b.options.autoplaySpeed))
},c.prototype.autoPlayClear=function(){var b=this;
b.autoPlayTimer&&clearInterval(b.autoPlayTimer)
},c.prototype.autoPlayIterator=function(){var b=this;
b.options.infinite===!1?1===b.direction?(b.currentSlide+1===b.slideCount-1&&(b.direction=0),b.slideHandler(b.currentSlide+b.options.slidesToScroll)):(0===b.currentSlide-1&&(b.direction=1),b.slideHandler(b.currentSlide-b.options.slidesToScroll)):b.slideHandler(b.currentSlide+b.options.slidesToScroll)
},c.prototype.buildArrows=function(){var a=this;
a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow=d(a.options.prevArrow),a.$nextArrow=d(a.options.nextArrow),a.htmlExpr.test(a.options.prevArrow)&&a.$prevArrow.appendTo(a.options.appendArrows),a.htmlExpr.test(a.options.nextArrow)&&a.$nextArrow.appendTo(a.options.appendArrows),a.options.infinite!==!0&&a.$prevArrow.addClass("slick-disabled"))
},c.prototype.buildDots=function(){var f,e,a=this;
if(a.options.dots===!0&&a.slideCount>a.options.slidesToShow){for(e='<ul class="'+a.options.dotsClass+'">',f=0;
f<=a.getDotCount();
f+=1){e+="<li>"+a.options.customPaging.call(this,a,f)+"</li>"
}e+="</ul>",a.$dots=d(e).appendTo(a.options.appendDots),a.$dots.find("li").first().addClass("slick-active")
}},c.prototype.buildOut=function(){var a=this;
a.$slides=a.$slider.children(a.options.slide+":not(.slick-cloned)").addClass("slick-slide").removeClass("display-none"),a.slideCount=a.$slides.length,a.$slides.each(function(e,f){d(f).attr("data-slick-index",e)
}),a.$slidesCache=a.$slides,a.$slider.addClass("slick-slider"),a.$slideTrack=0===a.slideCount?d('<div class="slick-track"/>').appendTo(a.$slider):a.$slides.wrapAll('<div class="slick-track"/>').parent(),a.$list=a.$slideTrack.wrap('<div class="slick-list"/>').parent(),a.$slideTrack.css("opacity",0),a.options.centerMode===!0&&(a.options.slidesToScroll=1),d("img[data-lazy]",a.$slider).not("[src]").addClass("slick-loading"),a.setupInfinite(),a.buildArrows(),a.buildDots(),a.updateDots(),a.options.accessibility===!0&&a.$list.prop("tabIndex",0),a.setSlideClasses("number"==typeof this.currentSlide?this.currentSlide:0),a.options.draggable===!0&&a.$list.addClass("draggable")
},c.prototype.checkResponsive=function(){var l,k,j,a=this,i=a.$slider.width(),h=window.innerWidth||d(window).width();
if("window"===a.respondTo?j=h:"slider"===a.respondTo?j=i:"min"===a.respondTo&&(j=Math.min(h,i)),a.originalSettings.responsive&&a.originalSettings.responsive.length>-1&&null!==a.originalSettings.responsive){k=null;
for(l in a.breakpoints){a.breakpoints.hasOwnProperty(l)&&(a.originalSettings.mobileFirst===!1?j<a.breakpoints[l]&&(k=a.breakpoints[l]):j>a.breakpoints[l]&&(k=a.breakpoints[l]))
}null!==k?null!==a.activeBreakpoint?k!==a.activeBreakpoint&&(a.activeBreakpoint=k,"unslick"===a.breakpointSettings[k]?a.unslick():(a.options=d.extend({},a.originalSettings,a.breakpointSettings[k]),a.refresh())):(a.activeBreakpoint=k,"unslick"===a.breakpointSettings[k]?a.unslick():(a.options=d.extend({},a.originalSettings,a.breakpointSettings[k]),a.refresh())):null!==a.activeBreakpoint&&(a.activeBreakpoint=null,a.options=a.originalSettings,a.refresh())
}},c.prototype.changeSlide=function(a,p){var m,l,k,o=this,n=d(a.target);
switch(n.is("a")&&a.preventDefault(),k=0!==o.slideCount%o.options.slidesToScroll,m=k?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,a.data.message){case"previous":l=0===m?o.options.slidesToScroll:o.options.slidesToShow-m,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-l,!1,p);
break;
case"next":l=0===m?o.options.slidesToScroll:m,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+l,!1,p);
break;
case"index":var j=0===a.data.index?0:a.data.index||d(a.target).parent().index()*o.options.slidesToScroll;
o.slideHandler(o.checkNavigable(j),!1,p);
break;
default:return
}},c.prototype.checkNavigable=function(g){var j,i,f=this;
if(j=f.getNavigableIndexes(),i=0,g>j[j.length-1]){g=j[j.length-1]
}else{for(var h in j){if(g<j[h]){g=i;
break
}i=j[h]
}}return g
},c.prototype.clickHandler=function(f){var e=this;
e.shouldClick===!1&&(f.stopImmediatePropagation(),f.stopPropagation(),f.preventDefault())
},c.prototype.destroy=function(){var a=this;
a.autoPlayClear(),a.touchObject={},d(".slick-cloned",a.$slider).remove(),a.$dots&&a.$dots.remove(),a.$prevArrow&&"object"!=typeof a.options.prevArrow&&a.$prevArrow.remove(),a.$nextArrow&&"object"!=typeof a.options.nextArrow&&a.$nextArrow.remove(),a.$slides.removeClass("slick-slide slick-active slick-center slick-visible").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""}),a.$slider.removeClass("slick-slider"),a.$slider.removeClass("slick-initialized"),a.$list.off(".slick"),d(window).off(".slick-"+a.instanceUid),d(document).off(".slick-"+a.instanceUid),a.$slider.html(a.$slides)
},c.prototype.disableTransition=function(f){var e=this,g={};
g[e.transitionType]="",e.options.fade===!1?e.$slideTrack.css(g):e.$slides.eq(f).css(g)
},c.prototype.fadeSlide=function(f,e){var g=this;
g.cssTransitions===!1?(g.$slides.eq(f).css({zIndex:1000}),g.$slides.eq(f).animate({opacity:1},g.options.speed,g.options.easing,e)):(g.applyTransition(f),g.$slides.eq(f).css({opacity:1,zIndex:1000}),e&&setTimeout(function(){g.disableTransition(f),e.call()
},g.options.speed))
},c.prototype.filterSlides=c.prototype.slickFilter=function(f){var e=this;
null!==f&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(f).appendTo(e.$slideTrack),e.reinit())
},c.prototype.getCurrent=c.prototype.slickCurrentSlide=function(){var b=this;
return b.currentSlide
},c.prototype.getDotCount=function(){var f=this,e=0,h=0,g=0;
if(f.options.infinite===!0){g=Math.ceil(f.slideCount/f.options.slidesToScroll)
}else{if(f.options.centerMode===!0){g=f.slideCount
}else{for(;
e<f.slideCount;
){++g,e=h+f.options.slidesToShow,h+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}}}return g-1
},c.prototype.getLeft=function(h){var l,k,i,g=this,j=0;
return g.slideOffset=0,k=g.$slides.first().outerHeight(),g.options.infinite===!0?(g.slideCount>g.options.slidesToShow&&(g.slideOffset=-1*g.slideWidth*g.options.slidesToShow,j=-1*k*g.options.slidesToShow),0!==g.slideCount%g.options.slidesToScroll&&h+g.options.slidesToScroll>g.slideCount&&g.slideCount>g.options.slidesToShow&&(h>g.slideCount?(g.slideOffset=-1*(g.options.slidesToShow-(h-g.slideCount))*g.slideWidth,j=-1*(g.options.slidesToShow-(h-g.slideCount))*k):(g.slideOffset=-1*g.slideCount%g.options.slidesToScroll*g.slideWidth,j=-1*g.slideCount%g.options.slidesToScroll*k))):h+g.options.slidesToShow>g.slideCount&&(g.slideOffset=(h+g.options.slidesToShow-g.slideCount)*g.slideWidth,j=(h+g.options.slidesToShow-g.slideCount)*k),g.slideCount<=g.options.slidesToShow&&(g.slideOffset=0,j=0),g.options.centerMode===!0&&g.options.infinite===!0?g.slideOffset+=g.slideWidth*Math.floor(g.options.slidesToShow/2)-g.slideWidth:g.options.centerMode===!0&&(g.slideOffset=0,g.slideOffset+=g.slideWidth*Math.floor(g.options.slidesToShow/2)),l=g.options.vertical===!1?-1*h*g.slideWidth+g.slideOffset:-1*h*k+j,g.options.variableWidth===!0&&(i=g.slideCount<=g.options.slidesToShow||g.options.infinite===!1?g.$slideTrack.children(".slick-slide").eq(h):g.$slideTrack.children(".slick-slide").eq(h+g.options.slidesToShow),l=i[0]?-1*i[0].offsetLeft:0,g.options.centerMode===!0&&(i=g.options.infinite===!1?g.$slideTrack.children(".slick-slide").eq(h):g.$slideTrack.children(".slick-slide").eq(h+g.options.slidesToShow+1),l=i[0]?-1*i[0].offsetLeft:0,l+=(g.$list.width()-i.outerWidth())/2)),l
},c.prototype.getOption=c.prototype.slickGetOption=function(f){var e=this;
return e.options[f]
},c.prototype.getNavigableIndexes=function(){var g=this,f=0,j=0,i=[],h=g.options.infinite===!1?g.slideCount-g.options.slidesToShow+1:g.slideCount;
for(g.options.centerMode===!0&&(h=g.slideCount);
h>f;
){i.push(f),f=j+g.options.slidesToScroll,j+=g.options.slidesToScroll<=g.options.slidesToShow?g.options.slidesToScroll:g.options.slidesToShow
}return i
},c.prototype.getSlick=function(){return this
},c.prototype.getSlideCount=function(){var h,g,f,a=this;
return f=a.options.centerMode===!0?a.slideWidth*Math.floor(a.options.slidesToShow/2):0,a.options.swipeToSlide===!0?(a.$slideTrack.find(".slick-slide").each(function(e,b){return b.offsetLeft-f+d(b).outerWidth()/2>-1*a.swipeLeft?(g=b,!1):void 0
}),h=Math.abs(d(g).attr("data-slick-index")-a.currentSlide)||1):a.options.slidesToScroll
},c.prototype.goTo=c.prototype.slickGoTo=function(f,e){var g=this;
g.changeSlide({data:{message:"index",index:parseInt(f)}},e)
},c.prototype.init=function(){var a=this;
d(a.$slider).hasClass("slick-initialized")||(d(a.$slider).addClass("slick-initialized"),a.buildOut(),a.setProps(),a.startLoad(),a.loadSlider(),a.initializeEvents(),a.updateArrows(),a.updateDots()),a.$slider.trigger("init",[a])
},c.prototype.initArrowEvents=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.on("click.slick",{message:"previous"},b.changeSlide),b.$nextArrow.on("click.slick",{message:"next"},b.changeSlide))
},c.prototype.initDotEvents=function(){var a=this;
a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&d("li",a.$dots).on("click.slick",{message:"index"},a.changeSlide),a.options.dots===!0&&a.options.pauseOnDotsHover===!0&&a.options.autoplay===!0&&d("li",a.$dots).on("mouseenter.slick",function(){a.paused=!0,a.autoPlayClear()
}).on("mouseleave.slick",function(){a.paused=!1,a.autoPlay()
})
},c.prototype.initializeEvents=function(){var a=this;
a.initArrowEvents(),a.initDotEvents(),a.$list.on("touchstart.slick mousedown.slick",{action:"start"},a.swipeHandler),a.$list.on("touchmove.slick mousemove.slick",{action:"move"},a.swipeHandler),a.$list.on("touchend.slick mouseup.slick",{action:"end"},a.swipeHandler),a.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},a.swipeHandler),a.$list.on("click.slick",a.clickHandler),a.options.autoplay===!0&&(d(document).on(a.visibilityChange,function(){a.visibility()
}),a.options.pauseOnHover===!0&&(a.$list.on("mouseenter.slick",function(){a.paused=!0,a.autoPlayClear()
}),a.$list.on("mouseleave.slick",function(){a.paused=!1,a.autoPlay()
}))),a.options.accessibility===!0&&a.$list.on("keydown.slick",a.keyHandler),a.options.focusOnSelect===!0&&d(a.options.slide,a.$slideTrack).on("click.slick",a.selectHandler),d(window).on("orientationchange.slick.slick-"+a.instanceUid,function(){a.checkResponsive(),a.setPosition()
}),d(window).on("resize.slick.slick-"+a.instanceUid,function(){d(window).width()!==a.windowWidth&&(clearTimeout(a.windowDelay),a.windowDelay=window.setTimeout(function(){a.windowWidth=d(window).width(),a.checkResponsive(),a.setPosition()
},50))
}),d("*[draggable!=true]",a.$slideTrack).on("dragstart",function(b){b.preventDefault()
}),d(window).on("load.slick.slick-"+a.instanceUid,a.setPosition),d(document).on("ready.slick.slick-"+a.instanceUid,a.setPosition)
},c.prototype.initUI=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.show(),b.$nextArrow.show()),b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&b.$dots.show(),b.options.autoplay===!0&&b.autoPlay()
},c.prototype.keyHandler=function(f){var e=this;
37===f.keyCode&&e.options.accessibility===!0?e.changeSlide({data:{message:"previous"}}):39===f.keyCode&&e.options.accessibility===!0&&e.changeSlide({data:{message:"next"}})
},c.prototype.lazyLoad=function(){function h(e){d("img[data-lazy]",e).each(function(){var f=d(this),g=d(this).attr("data-lazy");
f.load(function(){f.animate({opacity:1},200)
}).css({opacity:0}).attr("src",g).removeAttr("data-lazy").removeClass("slick-loading")
})
}var l,k,j,i,a=this;
a.options.centerMode===!0?a.options.infinite===!0?(j=a.currentSlide+(a.options.slidesToShow/2+1),i=j+a.options.slidesToShow+2):(j=Math.max(0,a.currentSlide-(a.options.slidesToShow/2+1)),i=2+(a.options.slidesToShow/2+1)+a.currentSlide):(j=a.options.infinite?a.options.slidesToShow+a.currentSlide:a.currentSlide,i=j+a.options.slidesToShow,a.options.fade===!0&&(j>0&&j--,i<=a.slideCount&&i++)),l=a.$slider.find(".slick-slide").slice(j,i),h(l),a.slideCount<=a.options.slidesToShow?(k=a.$slider.find(".slick-slide"),h(k)):a.currentSlide>=a.slideCount-a.options.slidesToShow?(k=a.$slider.find(".slick-cloned").slice(0,a.options.slidesToShow),h(k)):0===a.currentSlide&&(k=a.$slider.find(".slick-cloned").slice(-1*a.options.slidesToShow),h(k))
},c.prototype.loadSlider=function(){var b=this;
b.setPosition(),b.$slideTrack.css({opacity:1}),b.$slider.removeClass("slick-loading"),b.initUI(),"progressive"===b.options.lazyLoad&&b.progressiveLazyLoad()
},c.prototype.next=c.prototype.slickNext=function(){var b=this;
b.changeSlide({data:{message:"next"}})
},c.prototype.pause=c.prototype.slickPause=function(){var b=this;
b.autoPlayClear(),b.paused=!0
},c.prototype.play=c.prototype.slickPlay=function(){var b=this;
b.paused=!1,b.autoPlay()
},c.prototype.postSlide=function(f){var e=this;
e.$slider.trigger("afterChange",[e,f]),e.animating=!1,e.setPosition(),e.swipeLeft=null,e.options.autoplay===!0&&e.paused===!1&&e.autoPlay()
},c.prototype.prev=c.prototype.slickPrev=function(){var b=this;
b.changeSlide({data:{message:"previous"}})
},c.prototype.progressiveLazyLoad=function(){var f,e,a=this;
f=d("img[data-lazy]",a.$slider).length,f>0&&(e=d("img[data-lazy]",a.$slider).first(),e.attr("src",e.attr("data-lazy")).removeClass("slick-loading").load(function(){e.removeAttr("data-lazy"),a.progressiveLazyLoad()
}).error(function(){e.removeAttr("data-lazy"),a.progressiveLazyLoad()
}))
},c.prototype.refresh=function(){var a=this,e=a.currentSlide;
a.destroy(),d.extend(a,a.initials),a.init(),a.changeSlide({data:{message:"index",index:e}},!0)
},c.prototype.reinit=function(){var a=this;
a.$slides=a.$slideTrack.children(a.options.slide).addClass("slick-slide"),a.slideCount=a.$slides.length,a.currentSlide>=a.slideCount&&0!==a.currentSlide&&(a.currentSlide=a.currentSlide-a.options.slidesToScroll),a.slideCount<=a.options.slidesToShow&&(a.currentSlide=0),a.setProps(),a.setupInfinite(),a.buildArrows(),a.updateArrows(),a.initArrowEvents(),a.buildDots(),a.updateDots(),a.initDotEvents(),a.options.focusOnSelect===!0&&d(a.options.slide,a.$slideTrack).on("click.slick",a.selectHandler),a.setSlideClasses(0),a.setPosition(),a.$slider.trigger("reInit",[a])
},c.prototype.removeSlide=c.prototype.slickRemove=function(f,e,h){var g=this;
return"boolean"==typeof f?(e=f,f=e===!0?0:g.slideCount-1):f=e===!0?--f:f,g.slideCount<1||0>f||f>g.slideCount-1?!1:(g.unload(),h===!0?g.$slideTrack.children().remove():g.$slideTrack.children(this.options.slide).eq(f).remove(),g.$slides=g.$slideTrack.children(this.options.slide),g.$slideTrack.children(this.options.slide).detach(),g.$slideTrack.append(g.$slides),g.$slidesCache=g.$slides,g.reinit(),void 0)
},c.prototype.setCSS=function(g){var i,h,f=this,j={};
f.options.rtl===!0&&(g=-g),i="left"==f.positionProp?Math.ceil(g)+"px":"0px",h="top"==f.positionProp?Math.ceil(g)+"px":"0px",j[f.positionProp]=g,f.transformsEnabled===!1?f.$slideTrack.css(j):(j={},f.cssTransitions===!1?(j[f.animType]="translate("+i+", "+h+")",f.$slideTrack.css(j)):(j[f.animType]="translate3d("+i+", "+h+", 0px)",f.$slideTrack.css(j)))
},c.prototype.setDimensions=function(){var f=this;
if(f.options.vertical===!1?f.options.centerMode===!0&&f.$list.css({padding:"0px "+f.options.centerPadding}):(f.$list.height(f.$slides.first().outerHeight(!0)*f.options.slidesToShow),f.options.centerMode===!0&&f.$list.css({padding:f.options.centerPadding+" 0px"})),f.listWidth=f.$list.width(),f.listHeight=f.$list.height(),f.options.vertical===!1&&f.options.variableWidth===!1){f.slideWidth=Math.ceil(f.listWidth/f.options.slidesToShow),f.$slideTrack.width(Math.ceil(f.slideWidth*f.$slideTrack.children(".slick-slide").length))
}else{if(f.options.variableWidth===!0){var e=0;
f.slideWidth=Math.ceil(f.listWidth/f.options.slidesToShow),f.$slideTrack.children(".slick-slide").each(function(){e+=f.listWidth
}),f.$slideTrack.width(Math.ceil(e)+1)
}else{f.slideWidth=Math.ceil(f.listWidth),f.$slideTrack.height(Math.ceil(f.$slides.first().outerHeight(!0)*f.$slideTrack.children(".slick-slide").length))
}}var g=f.$slides.first().outerWidth(!0)-f.$slides.first().width();
f.options.variableWidth===!1&&f.$slideTrack.children(".slick-slide").width(f.slideWidth-g)
},c.prototype.setFade=function(){var e,a=this;
a.$slides.each(function(f,b){e=-1*a.slideWidth*f,a.options.rtl===!0?d(b).css({position:"relative",right:e,top:0,zIndex:800,opacity:0}):d(b).css({position:"relative",left:e,top:0,zIndex:800,opacity:0})
}),a.$slides.eq(a.currentSlide).css({zIndex:900,opacity:1})
},c.prototype.setHeight=function(){var f=this;
if(1===f.options.slidesToShow&&f.options.adaptiveHeight===!0&&f.options.vertical===!1){var e=f.$slides.eq(f.currentSlide).outerHeight(!0);
f.$list.css("height",e)
}},c.prototype.setOption=c.prototype.slickSetOption=function(f,e,h){var g=this;
g.options[f]=e,h===!0&&(g.unload(),g.reinit())
},c.prototype.setPosition=function(){var b=this;
b.setDimensions(),b.setHeight(),b.options.fade===!1?b.setCSS(b.getLeft(b.currentSlide)):b.setFade(),b.$slider.trigger("setPosition",[b])
},c.prototype.setProps=function(){var f=this,e=document.body.style;
f.positionProp=f.options.vertical===!0?"top":"left","top"===f.positionProp?f.$slider.addClass("slick-vertical"):f.$slider.removeClass("slick-vertical"),(void 0!==e.WebkitTransition||void 0!==e.MozTransition||void 0!==e.msTransition)&&f.options.useCSS===!0&&(f.cssTransitions=!0),void 0!==e.OTransform&&(f.animType="OTransform",f.transformType="-o-transform",f.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(f.animType=!1)),void 0!==e.MozTransform&&(f.animType="MozTransform",f.transformType="-moz-transform",f.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(f.animType=!1)),void 0!==e.webkitTransform&&(f.animType="webkitTransform",f.transformType="-webkit-transform",f.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(f.animType=!1)),void 0!==e.msTransform&&(f.animType="msTransform",f.transformType="-ms-transform",f.transitionType="msTransition",void 0===e.msTransform&&(f.animType=!1)),void 0!==e.transform&&f.animType!==!1&&(f.animType="transform",f.transformType="transform",f.transitionType="transition"),f.transformsEnabled=null!==f.animType&&f.animType!==!1
},c.prototype.setSlideClasses=function(h){var l,k,j,i,g=this;
g.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),k=g.$slider.find(".slick-slide"),g.options.centerMode===!0?(l=Math.floor(g.options.slidesToShow/2),g.options.infinite===!0&&(h>=l&&h<=g.slideCount-1-l?g.$slides.slice(h-l,h+l+1).addClass("slick-active"):(j=g.options.slidesToShow+h,k.slice(j-l+1,j+l+2).addClass("slick-active")),0===h?k.eq(k.length-1-g.options.slidesToShow).addClass("slick-center"):h===g.slideCount-1&&k.eq(g.options.slidesToShow).addClass("slick-center")),g.$slides.eq(h).addClass("slick-center")):h>=0&&h<=g.slideCount-g.options.slidesToShow?g.$slides.slice(h,h+g.options.slidesToShow).addClass("slick-active"):k.length<=g.options.slidesToShow?k.addClass("slick-active"):(i=g.slideCount%g.options.slidesToShow,j=g.options.infinite===!0?g.options.slidesToShow+h:h,g.options.slidesToShow==g.options.slidesToScroll&&g.slideCount-h<g.options.slidesToShow?k.slice(j-(g.options.slidesToShow-i),j+i).addClass("slick-active"):k.slice(j,j+g.options.slidesToShow).addClass("slick-active")),"ondemand"===g.options.lazyLoad&&g.lazyLoad()
},c.prototype.setupInfinite=function(){var h,g,f,a=this;
if(a.options.fade===!0&&(a.options.centerMode=!1),a.options.infinite===!0&&a.options.fade===!1&&(g=null,a.slideCount>a.options.slidesToShow)){for(f=a.options.centerMode===!0?a.options.slidesToShow+1:a.options.slidesToShow,h=a.slideCount;
h>a.slideCount-f;
h-=1){g=h-1,d(a.$slides[g]).clone(!0).attr("id","").attr("data-slick-index",g-a.slideCount).prependTo(a.$slideTrack).addClass("slick-cloned")
}for(h=0;
f>h;
h+=1){g=h,d(a.$slides[g]).clone(!0).attr("id","").attr("data-slick-index",g+a.slideCount).appendTo(a.$slideTrack).addClass("slick-cloned")
}a.$slideTrack.find(".slick-cloned").find("[id]").each(function(){d(this).attr("id","")
})
}},c.prototype.selectHandler=function(a){var f=this,e=parseInt(d(a.target).parents(".slick-slide").attr("data-slick-index"));
return e||(e=0),f.slideCount<=f.options.slidesToShow?(f.$slider.find(".slick-slide").removeClass("slick-active"),f.$slides.eq(e).addClass("slick-active"),f.options.centerMode===!0&&(f.$slider.find(".slick-slide").removeClass("slick-center"),f.$slides.eq(e).addClass("slick-center")),f.asNavFor(e),void 0):(f.slideHandler(e),void 0)
},c.prototype.slideHandler=function(r,q,p){var o,n,m,l,k=null,j=this;
return q=q||!1,j.animating===!0&&j.options.waitForAnimate===!0||j.options.fade===!0&&j.currentSlide===r||j.slideCount<=j.options.slidesToShow?void 0:(q===!1&&j.asNavFor(r),o=r,k=j.getLeft(o),l=j.getLeft(j.currentSlide),j.currentLeft=null===j.swipeLeft?l:j.swipeLeft,j.options.infinite===!1&&j.options.centerMode===!1&&(0>r||r>j.getDotCount()*j.options.slidesToScroll)?(j.options.fade===!1&&(o=j.currentSlide,p!==!0?j.animateSlide(l,function(){j.postSlide(o)
}):j.postSlide(o)),void 0):j.options.infinite===!1&&j.options.centerMode===!0&&(0>r||r>j.slideCount-j.options.slidesToScroll)?(j.options.fade===!1&&(o=j.currentSlide,p!==!0?j.animateSlide(l,function(){j.postSlide(o)
}):j.postSlide(o)),void 0):(j.options.autoplay===!0&&clearInterval(j.autoPlayTimer),n=0>o?0!==j.slideCount%j.options.slidesToScroll?j.slideCount-j.slideCount%j.options.slidesToScroll:j.slideCount+o:o>=j.slideCount?0!==j.slideCount%j.options.slidesToScroll?0:o-j.slideCount:o,j.animating=!0,j.$slider.trigger("beforeChange",[j,j.currentSlide,n]),m=j.currentSlide,j.currentSlide=n,j.setSlideClasses(j.currentSlide),j.updateDots(),j.updateArrows(),j.options.fade===!0?(p!==!0?j.fadeSlide(n,function(){j.postSlide(n)
}):j.postSlide(n),j.animateHeight(),void 0):(p!==!0?j.animateSlide(k,function(){j.postSlide(n)
}):j.postSlide(n),void 0)))
},c.prototype.startLoad=function(){var b=this;
b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow.hide(),b.$nextArrow.hide()),b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&b.$dots.hide(),b.$slider.addClass("slick-loading")
},c.prototype.swipeDirection=function(){var g,f,j,i,h=this;
return g=h.touchObject.startX-h.touchObject.curX,f=h.touchObject.startY-h.touchObject.curY,j=Math.atan2(f,g),i=Math.round(180*j/Math.PI),0>i&&(i=360-Math.abs(i)),45>=i&&i>=0?h.options.rtl===!1?"left":"right":360>=i&&i>=315?h.options.rtl===!1?"left":"right":i>=135&&225>=i?h.options.rtl===!1?"right":"left":"vertical"
},c.prototype.swipeEnd=function(){var e,a=this;
if(a.dragging=!1,a.shouldClick=a.touchObject.swipeLength>10?!1:!0,void 0===a.touchObject.curX){return !1
}if(a.touchObject.edgeHit===!0&&a.$slider.trigger("edge",[a,a.swipeDirection()]),a.touchObject.swipeLength>=a.touchObject.minSwipe){switch(a.swipeDirection()){case"left":e=a.options.swipeToSlide?a.checkNavigable(a.currentSlide+a.getSlideCount()):a.currentSlide+a.getSlideCount(),a.slideHandler(e),a.currentDirection=0,a.touchObject={},a.$slider.trigger("swipe",[a,"left"]);
break;
case"right":e=a.options.swipeToSlide?a.checkNavigable(a.currentSlide-a.getSlideCount()):a.currentSlide-a.getSlideCount(),a.slideHandler(e),a.currentDirection=1,a.touchObject={},a.$slider.trigger("swipe",[a,"right"])
}}else{a.touchObject.startX!==a.touchObject.curX&&(a.slideHandler(a.currentSlide),a.touchObject={})
}},c.prototype.swipeHandler=function(f){var e=this;
if(!(e.options.swipe===!1||"ontouchend" in document&&e.options.swipe===!1||e.options.draggable===!1&&-1!==f.type.indexOf("mouse"))){switch(e.touchObject.fingerCount=f.originalEvent&&void 0!==f.originalEvent.touches?f.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,f.data.action){case"start":e.swipeStart(f);
break;
case"move":e.swipeMove(f);
break;
case"end":e.swipeEnd(f)
}}},c.prototype.swipeMove=function(j){var o,n,m,l,k,i=this;
return k=void 0!==j.originalEvent?j.originalEvent.touches:null,!i.dragging||k&&1!==k.length?!1:(o=i.getLeft(i.currentSlide),i.touchObject.curX=void 0!==k?k[0].pageX:j.clientX,i.touchObject.curY=void 0!==k?k[0].pageY:j.clientY,i.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(i.touchObject.curX-i.touchObject.startX,2))),n=i.swipeDirection(),"vertical"!==n?(void 0!==j.originalEvent&&i.touchObject.swipeLength>4&&j.preventDefault(),l=(i.options.rtl===!1?1:-1)*(i.touchObject.curX>i.touchObject.startX?1:-1),m=i.touchObject.swipeLength,i.touchObject.edgeHit=!1,i.options.infinite===!1&&(0===i.currentSlide&&"right"===n||i.currentSlide>=i.getDotCount()&&"left"===n)&&(m=i.touchObject.swipeLength*i.options.edgeFriction,i.touchObject.edgeHit=!0),i.swipeLeft=i.options.vertical===!1?o+m*l:o+m*(i.$list.height()/i.listWidth)*l,i.options.fade===!0||i.options.touchMove===!1?!1:i.animating===!0?(i.swipeLeft=null,!1):(i.setCSS(i.swipeLeft),void 0)):void 0)
},c.prototype.swipeStart=function(f){var g,e=this;
return 1!==e.touchObject.fingerCount||e.slideCount<=e.options.slidesToShow?(e.touchObject={},!1):(void 0!==f.originalEvent&&void 0!==f.originalEvent.touches&&(g=f.originalEvent.touches[0]),e.touchObject.startX=e.touchObject.curX=void 0!==g?g.pageX:f.clientX,e.touchObject.startY=e.touchObject.curY=void 0!==g?g.pageY:f.clientY,e.dragging=!0,void 0)
},c.prototype.unfilterSlides=c.prototype.slickUnfilter=function(){var b=this;
null!==b.$slidesCache&&(b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.appendTo(b.$slideTrack),b.reinit())
},c.prototype.unload=function(){var a=this;
d(".slick-cloned",a.$slider).remove(),a.$dots&&a.$dots.remove(),a.$prevArrow&&"object"!=typeof a.options.prevArrow&&a.$prevArrow.remove(),a.$nextArrow&&"object"!=typeof a.options.nextArrow&&a.$nextArrow.remove(),a.$slides.removeClass("slick-slide slick-active slick-visible").css("width","")
},c.prototype.unslick=function(){var b=this;
b.destroy()
},c.prototype.updateArrows=function(){var e,f=this;
e=Math.floor(f.options.slidesToShow/2),f.options.arrows===!0&&f.options.infinite!==!0&&f.slideCount>f.options.slidesToShow&&(f.$prevArrow.removeClass("slick-disabled"),f.$nextArrow.removeClass("slick-disabled"),0===f.currentSlide?(f.$prevArrow.addClass("slick-disabled"),f.$nextArrow.removeClass("slick-disabled")):f.currentSlide>=f.slideCount-f.options.slidesToShow&&f.options.centerMode===!1?(f.$nextArrow.addClass("slick-disabled"),f.$prevArrow.removeClass("slick-disabled")):f.currentSlide>=f.slideCount-1&&f.options.centerMode===!0&&(f.$nextArrow.addClass("slick-disabled"),f.$prevArrow.removeClass("slick-disabled")))
},c.prototype.updateDots=function(){var b=this;
null!==b.$dots&&(b.$dots.find("li").removeClass("slick-active"),b.$dots.find("li").eq(Math.floor(b.currentSlide/b.options.slidesToScroll)).addClass("slick-active"))
},c.prototype.visibility=function(){var b=this;
document[b.hidden]?(b.paused=!0,b.autoPlayClear()):(b.paused=!1,b.autoPlay())
},d.fn.slick=function(){var h,b=this,l=arguments[0],k=Array.prototype.slice.call(arguments,1),j=b.length,i=0;
for(i;
j>i;
i++){if("object"==typeof l||"undefined"==typeof l?b[i].slick=new c(b[i],l):h=b[i].slick[l].apply(b[i].slick,k),"undefined"!=typeof h){return h
}}return b
},d(function(){d("[data-slick]").slick()
})
});
function initRecommendations(e,j,c,f,g,d){if(e&&e.length>0&&$(".related-products-carousel").length){var h='<div id="carousel-pagination"><span class="text-left pull-left"><h3>'+j+'</h3></span><p class="page hidden-xs pull-right"> <span id="pageNumProd">1</span> of <span id="totalNumProd"></span> | <a href="#related-carousel" data-slide="next" class="go-icon revert"> start over</a></p></div><div id="wrapper"><div class="carousel">';
for(var b=0;
b<e.length;
b++){var a='<div class="product"><div>';
if(e[b].thumbnailURL&&e[b].thumbnailURL!==""){a+='<a href="'+e[b].pageUrl+'"><img src="'+e[b].thumbnailURL+'" alt="'+e[b].name+'"></a>'
}a+='<a href="'+e[b].pageUrl+'" class="carousel-product-link"><p>'+e[b].name+"</p></a>";
a+='<a href="'+e[b].pageUrl+'" class="go-icon">See more</a>';
a+="</div></div>";
h+=a
}h+="</div></div>";
$("#related-products-carousel").html(h);
initCarousel(c,f,g,d)
}}function initCarousel(c,f,h,d){try{$(".related-products-carousel .carousel").slick({dots:false,infinite:h,speed:d,slidesToShow:c,slidesToScroll:f,arrows:true,prevArrow:'<a href="#" class="icon-product_carousel_L"></a>',nextArrow:'<a href="#" class="icon-product_carousel_R"></a>',responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1}}]});
var b=$(".related-products-carousel .slick-track>div");
$(document).ready(function(){var e=Math.ceil(b.length/c);
var j;
var i=".related-products-carousel";
$(".related-products-carousel #totalNumProd").text(e);
$(".related-products-carousel .carousel").on("afterChange",function(l,k,n,m){j=n/c+1;
$(".related-products-carousel #pageNumProd").text(j)
});
$(window).resize(function(){$(window).resize(function(){oWin=a().width
});
var l=$(window).width();
var k=window.outerWidth;
b=$(".related-products-carousel .slick-dots li")
});
$(".related-products-carousel .revert").click(function(){event.preventDefault();
$(".related-products-carousel .carousel").slick("slickGoTo","int:1");
j=$(".related-products-carousel .carousel").slick("slickCurrentSlide")+1;
$(".related-products-carousel #pageNumProd").text(j)
})
});
function a(){var e=navigator.userAgent.toLowerCase();
var i=0;
if(e.indexOf("chrome/")!=-1||e.indexOf("firefox/")!=-1){i=window.outerWidth
}else{if(e.indexOf("safari/")!=-1){i=$(window).width()
}else{i=window.outerWidth
}}return{width:i,height:$(window).height()}
}}catch(g){console.log(g)
}};
$(function(){$("[data-ajax-component]").each(function(){var g=$(this),b=g.data("url"),d=g.data("ajax-query-parameters");
b+="?t="+(new Date()).getTime();
if(d){b+="&"+d
}var f=window.location.href.split("?")[0];
var c=f.substr(f.lastIndexOf("/")+1);
var a=c.split(".");
if(a.length>2){b+="&eiSelector="+a[1]
}$.ajax({type:"GET",url:b,async:false,success:function(h){if(!h.match(/\sdata-ajax-component/)){g.replaceWith(h)
}}})
})
});
$(function(){$("#button-save").click(function(){try{window.print()
}catch(a){console.log(a)
}})
});
if($("#shareOptionBtn").is(":visible")){var scriptSwitch=document.createElement("script");
scriptSwitch.text="var switchTo5x=true;";
document.getElementsByTagName("head")[0].appendChild(scriptSwitch);
var scriptShareThis=document.createElement("script");
scriptShareThis.src=(window.location.protocol==="https:")?"https://ws.sharethis.com/button/buttons.js":"http://w.sharethis.com/button/buttons.js";
document.getElementsByTagName("head")[0].appendChild(scriptShareThis);
var scriptStyle=document.createElement("script");
scriptStyle.text="stLight.options({publisher: '532b7085-6923-4f93-831e-381836469baf', doNotHash: false, doNotCopy: false, hashAddressBar: false,onhover:false});";
document.getElementsByTagName("head")[0].appendChild(scriptStyle)
}$(document).ready(function(){var d=$(".article-date time");
if(d&&d.attr("datetime")){d.html(a(d.attr("datetime")))
}function a(g){var k=g.split("-");
var h=k[0];
var l=c(parseInt(k[1])-1);
var f=k[2];
return l+" "+f+", "+h
}function b(f){if(f=="2"||f=="22"){return f+="nd"
}else{if(f=="3"||f=="23"){return f+="rd"
}else{return f+="th"
}}}function c(f){var g=new Array(12);
g[0]="January";
g[1]="February";
g[2]="March";
g[3]="April";
g[4]="May";
g[5]="Jun";
g[6]="July";
g[7]="August";
g[8]="September";
g[9]="October";
g[10]="November";
g[11]="December";
return g[f]
}});
$(function(){var a="all_audience";
var c=window.location.href.split("?")[0];
var b=c.substring(c.lastIndexOf("/"),c.replace(".html","").length);
if(c.indexOf("essential-insights")>=0&&b.indexOf(".")>0){b=b.substring(b.indexOf(".")+1,b.length);
a=b
}else{var d=getCookie("selected");
if(d!=null){a=d.replace(".html","");
a=a.substr(a.lastIndexOf(".")+1,a.length)
}}$("ul.nav>li>a").each(function(){var f=$(this).attr("href");
$(this).click(function(){var h=$("div.sub-nav-header>a");
h.attr("href",f);
var k=$(this).attr("data-title");
h.text(k)
});
if(~f.indexOf("essential-insights.html")){var g=f;
g=g.replace(".html","."+a+".html");
$(this).attr("href",g)
}})
});
$(document).ready(function(){if($.urlparams("punchoutLogon")!==false){$("input[name=punchoutLogon]").val($.urlparams("punchoutLogon"))
}if($.urlparams("BrowserFormPost")!==false){$("input[name=BrowserFormPost]").val(decodeURIComponent($.urlparams("BrowserFormPost")))
}if($.urlparams("BuyerCookie")!==false){$("input[name=BuyerCookie]").val($.urlparams("BuyerCookie"))
}if($.urlparams("PartnerId")!==false){$("input[name=PartnerID]").val($.urlparams("PartnerId"))
}if($.urlparams("POReqFormPostName")!==false){$("input[name=POReqFormPostName]").val($.urlparams("POReqFormPostName"))
}if($.urlparams("Header.To.Credential@domain(0)")!==false){$("input[name=Header.To.Credential@domain(0)]").val($.urlparams("Header.To.Credential@domain(0)"))
}if($.urlparams("Header.Sender.Credential@domain(0)")!==false){$("input[name=Header.Sender.Credential@domain(0)]").val($.urlparams("Header.Sender.Credential@domain(0)"))
}if($.urlparams("Header.From.Credential@domain(0)")!==false){$("input[name=Header.From.Credential@domain(0)]").val($.urlparams("Header.From.Credential@domain(0)"))
}if($.urlparams("From.Credential.Identity(0)")!==false){$("input[name=From.Credential.Identity(0)]").val($.urlparams("From.Credential.Identity(0)"))
}if($.urlparams("To.Credential.Identity(0)")!==false){$("input[name=To.Credential.Identity(0)]").val($.urlparams("To.Credential.Identity(0)"))
}if($.urlparams("Sender.Credential.Identity(0)")!==false){$("input[name=Sender.Credential.Identity(0)]").val($.urlparams("Sender.Credential.Identity(0)"))
}if($.urlparams("companyName")!==false){$("input[name=companyName]").val($.urlparams("companyName"))
}if($.urlparams("pageName")!==false){$("input[name=pageName]").val($.urlparams("pageName"))
}if($.urlparams("soldTo")!==false){$("input[name=soldTo]").val($.urlparams("soldTo"))
}if(($(".sign-in-div:visible").length>0&&$("#username").length>0)||$("#login-username").length>0||($(".legacy-browser").length>0&&("#username").length>0)){$.ajax({type:"GET",url:"/services/loginFrontDoors?x="+new Date().getTime(),dataType:"json",success:function(b){if(b.loginFrontDoors==="closed"){a()
}else{}},error:function(b){}})
}else{}function a(){$(".sign-in-drop").html('<div class="sign-in-drop-message">Cardinalhealth.com ordering is being updated. Please check back shortly.</div><div class="sign-in-drop-close"><a href="#" title="Close">&#xE603;</a></div>');
$(".sign-in-drop-close").click(function(){$(".sign-in-drop,.sign-in-triangle").slideUp(200);
$(".sign-in-div .button-red").css("background-color","").css("color","")
});
$(".login-content>.col-xs-12.col-xs-ls-6.col-sm-4>div").html("<div><h2>Cardinalhealth.com ordering is being updated. Please check back shortly.</h2></div>")
}});
$(document).ready(function(){try{var c=document.getElementsById("j_username");
c.focus();
if(c.value){c.select()
}}catch(b){}if(window.location.hash){var a=document.getElementById("resource");
if(a){a.value+=window.location.hash
}}});
$(document).ready(function(){var c=$("#loadCount").text();
var d=$("#initCount").text();
var n=$("#cta").text();
var m;
var f=0;
var g;
var l=0;
var h;
if($("#article-lists").length>0){$.ajax({url:"/services/mediaRoomFeed.xml",dataType:"xml",beforeSend:function(){},success:function(r){var p=navigator.appName;
var q=navigator.appVersion;
var o=parseFloat(q);
if(p=="Microsoft Internet Explorer"&&o<=4){m=new ActiveXObject("Microsoft.XMLDOM");
m.async=false;
m.loadXML(r)
}else{m=r
}h=$(m).find("item");
g=h.length;
if(g<d){l=g
}else{l=d
}while(f<l){b()
}if(f==g){$("#loadMore").css("visibility","hidden")
}},error:function(o){console.error("rss load error")
},dataType:"text"})
}function b(){var u=h.eq(f).find("title").text();
var r=h.eq(f).find("link").text();
var q=h.eq(f).find("description").text();
var p=h.eq(f).find("pubDate").text();
var o=h.eq(f).find("guid").text();
if(h.toString().indexOf("<image>")>0){var t=a(p);
var s="/content/dam/corp/service-case-study1.jpg";
$("#article-lists").append('<div class="home-product-article"><div class="article-image-boundary"><div class="article-image-container"><img src="'+s+'" alt="alt"></div></div><div class="article-wrap"><h4>'+t+'</h4><h2 class="article-title"><a target="_blank" href="'+o+'">'+u+"</a></h2><p>"+q+'</p><a target="_blank" href="'+o+'" class="more-info">'+n+"</a></div></div>")
}else{var t=k(p);
$("#article-lists").append('<div class="home-product-article"><div class="article-image-boundary"><div class="article-date-container"><div class="article-date-month">'+t.month+'</div><div class="article-date-day-wrap"><span class="article-date-day">'+t.day+'</span> <span class="article-date-year">'+t.year+'</span></div></div></div><div class="article-wrap"><h2 class="article-title"><a target="_blank" href="'+o+'">'+u+"</a></h2><p>"+q+'</p><a target="_blank" href="'+o+'" class="more-info">'+n+"</a></div></div>")
}f++
}function a(q){var t=new Date(q);
var p=t.getFullYear().toString();
var r=p.substring(p.length-2,p.length);
var s=t.getMonth()+1;
var o=t.getDate();
t=s+"/"+o+"/"+r;
return t
}function k(q){var p=["January","February","March","April","May","June","July","August","September","October","November","December"];
var t=new Date(q);
var r=t.getFullYear().toString();
var s=p[t.getMonth()];
var o=t.getDate();
return{month:s,day:o,year:r}
}$("#loadMore").click(function(){var p=0;
while(f<g&&p<c){b();
p++
}var o=(f-p);
$("#article-lists").find("div.home-product-article").eq(o).attr("id","news");
window.location.href="#news";
$("#article-lists").find("div.home-product-article").eq(o).attr("id","");
if((f==g)||(p==(c-2))){$("#loadMore").css("visibility","hidden")
}})
});
$(".connect-body .form_button_submit").click(function(){document.cookie="rhmCookie=rhm";
var a=$("body").scrollTop()||document.body.scrollTop||document.documentElement.scrollTop;
document.cookie="scrollTop="+a
});
$(".connect-widget .form_button_submit").click(function(){document.cookie="rhmCookie=notrhm";
var a=$("body").scrollTop()||document.body.scrollTop||document.documentElement.scrollTop;
document.cookie="scrollTop="+a
});
function getCookie(d){var b=d+"=";
var a=document.cookie.split(";");
for(var f=0;
f<a.length;
f++){var g=a[f];
while(g.charAt(0)==" "){g=g.substring(1)
}if(g.indexOf(b)!=-1){return g.substring(b.length,g.length)
}}return""
}function clearCookie(){document.cookie="rhmCookie=";
document.cookie="scrollTop="
}$(document).ready(function(){var c=getCookie("scrollTop");
$("body").scrollTop(c);
document.body.scrollTop=c;
document.documentElement.scrollTop=c;
if($("#contactForm")!=null&&$("#contactForm").length>0){$(".connect-mobile-icon").css({display:"block"});
$("a.open-connect").each(function(){$(this).click(function(){$(".connect-btn")[0].click()
})
})
}var a=d("status");
var f=d("cq_ck");
var b=getCookie("rhmCookie");
if((a=="200"||a=="202")&&f==null){if(b=="rhm"){$(".connect-body .connect-thanks").show();
$("span.email").hide();
$(".connect-body .collapse").hide();
window.location.hash="again";
clearCookie()
}else{if(b=="notrhm"){$(".connect-widget .connect-thanks").show();
$(".connect-widget-input-fields").hide();
window.location.hash="again";
$(".connect-widget a.connect-btn").click();
clearCookie()
}}}else{$(".connect-thanks").hide();
$(".connect-widget-input-fields").show();
$("span.email").show();
clearCookie()
}if($(".connect-body .form_error").html()){$(".connect-body .connect-btn").click()
}if($(".connect-widget .form_error").html()){$(".connect-widget .connect-btn").click()
}function d(o){var h=null;
var k=$(location).attr("href");
if(k.indexOf("?")!=-1){var g=k.substring(k.indexOf("?")+1);
if(g.indexOf("&")!=-1){var m=g.split("&");
for(var l=0;
l<m.length;
l++){if(m[l].indexOf("=")!=-1){var n=m[l].split("=");
if(o==n[0]){h=decodeURI(n[1]);
break
}}}}else{if(g.indexOf("=")!=-1){var m=g.split("=");
if(o==m[0]){h=decodeURI(m[1])
}}}}return h
}});
var paginationContainer;
var pageSize;
var totalPages;
var currentPage;
var totalCounts=0;
var query;
var filters="";
var filterKey="";
var filterValue="";
var filterKeyToRemove="";
var filterValueToRemove="";
var searchPage=1;
$(document).ready(function(){initFilter();
if($("#templateName").val()=="/apps/corp/templates/search"){pageSize=$("#pageSize").html();
paginationContainer=$(".result-pagination");
getQueryFromUrl();
if(query!=null){$('input[name="search-result-search"]').val(query)
}$("input[name=filters]").val(filters);
ajaxSearch(0,true,0);
$("#searchBTN").click(function(){ajaxSearch(0,true,0)
})
}});
function getQueryFromUrl(){var b=$(location).attr("href");
var g;
if(b.indexOf("?")!=-1){var a=b.substring(b.indexOf("?")+1);
if(a.indexOf("&")!=-1){var d=a.split("&");
for(var c=0;
c<d.length;
c++){if(d[c].indexOf("=")!=-1){var f=d[c].split("=");
if("q"==f[0]){query=decodeURI(f[1])
}else{if("contentType"==f[0]){g=f[1];
filters=JSON.stringify({"Content%20Type":g})
}}}}}else{if(a.indexOf("=")!=-1){var d=a.split("=");
if("q"==d[0]){query=decodeURI(d[1])
}else{if("contentType"==d[0]){g=patamters[1];
filters=JSON.stringify({"Content%20Type":g})
}}}}}}function ajaxSearch(g,c,b){var d=encodeURIComponent($('input[name="search-result-search"]').val());
var f=$("input[name=searchCollection]").val();
var a=$("input[name=searchClient]").val();
$.ajax({url:"/services/search",method:"POST",data:{type:"search",q:d,start:g,num:pageSize,filters:$("input[name=filters]").val(),collection:f,client:a},dataType:"json",success:function(h){if(c){displayFacets(h)
}caculateTotalCount(h.RES);
displayResults(h);
$(".result-pagination").html("");
if(h!=null&&h.RES!=null&&h.RES.M!=null&&h.RES["@SN"]!=null){displayPagination(h.RES)
}if(1==b){addSearchFilterToAnalytics()
}else{if(2==b){removeSearchFilterFromAnalytics()
}else{if(3==b){updateSearchPagination()
}else{if($("body").hasClass("IE8")){window.setTimeout(prepareSearchAnalytics,100)
}else{prepareSearchAnalytics()
}}}}}});
window.scroll(0,100)
}function caculateTotalCount(a){if(a!=null&&a.M!=null){totalCounts=a.M
}else{totalCounts=0
}if(totalCounts>1000){totalCounts=1000
}}function displayResults(f){var h=f.RES;
var a=$('<div class="col-xs-12"><div class="search-result-block-list"></div></div>');
if(h){if(!$("#noResults").hasClass("wcm-edit")){$("#noResults").css("display","none")
}else{$("#noResults").css("display","block")
}if(totalCounts==1){$(".result-total").html(totalCounts+" "+$("input[name=dictonaryResult]").val())
}else{$(".result-total").html(totalCounts+" "+$("input[name=dictonaryResult]").val())
}$(".displaying-results").html($("input[name=dictonaryDisplayingresults]").val()+" <b>"+h["@SN"]+" - "+h["@EN"]+"</b>");
if(f.GM){var b=f.GM.GL;
var d=f.GM.GD;
var g=d.split("||");
$(".search-featured-article").removeClass("display-none");
$(".search-featured-article").show();
$(".search-featured-article .article-title").text(g[0]);
$(".search-featured-article a").attr("href",b);
$(".search-featured-article span").text(g[1]);
if(g[2]!=undefined&&g[2]!=""){$(".img-container").html("<img src="+g[2]+"/>")
}}else{$(".search-featured-article").hide()
}if(h.R){if(h.R.length){for(var c=0;
c<h.R.length;
c++){a.find(".search-result-block-list").append(generateResults(h.R[c]))
}}else{a.find(".search-result-block-list").append(generateResults(h.R))
}}$("#resultContainer").find(".search-result-block-list").parent().remove();
$("#resultContainer").append(a)
}else{$(".result-total").html("");
$(".displaying-results").html("");
$(".search-featured-article").hide();
$("#resultContainer").find(".search-result-block-list").parent().remove();
console.log($("#noResultsParsys:first-child"));
console.log($("#noResultsParsys:first-child").hasClass("section"));
console.log($("#noResults").hasClass("wcm-edit"));
if($("#noResultsParsys > div").first().hasClass("new")&&$("#noResultsParsys > div").first().hasClass("section")&&!$("#noResults").hasClass("wcm-edit")){console.log("hey");
a.find(".search-result-block-list").append("<b>No Result</b>")
}else{$("#noResults").css("display","block")
}$("#resultContainer").append(a)
}}function generateResults(d){var f=$('<div class="search-result-block"><div class="img-container"><img alt="alt"></div><h5></h5><h2><a></a></h2><span></span><a href="#">'+$("input[name=dictonaryLearnMore]").val()+"</a></div>");
f.find("a").attr("href",d.U);
var b=d.U;
var a=false;
for(var c in domainNames){if(b.indexOf(domainNames[c])>=0){a=true;
break
}}if(!a){f.find("div").parent().addClass("external-link")
}if(b.indexOf(".pdf")>-1){f.find("a").attr("target","_blank")
}f.find("h2>a").html(d.T);
f.find("img").css("display","none");
if(d.MT){if(d.MT.length){for(var c=0;
c<d.MT.length;
c++){injectLinksWithMeta(d.MT[c],f)
}}else{injectLinksWithMeta(d.MT,f)
}}return f
}function injectLinksWithMeta(c,d){if(c["@N"]=="Content Type"){d.find("h5").html(c["@V"]=="Featured Article"?"Article":c["@V"])
}if(c["@N"]=="description"){d.find("span").html(c["@V"]+" ")
}if(c["@N"]=="enclosed-assets"){if(!d.find("img").attr("src")){var a=c["@V"].split(",")[0];
var b="/etc/designs/corp/clientlibs/images/";
d.find("img").attr("src",b+a+"_icon.png");
d.find("img").addClass("icon");
d.find("img").css("display","block")
}}if(c["@N"]=="search-result-image"){d.find("img").attr("src",c["@V"]);
d.find("img").css("display","block")
}}function displayPagination(c){var b=c["@SN"];
totalPages=Math.ceil(totalCounts/pageSize);
currentPage=parseInt((parseInt(b)+parseInt(pageSize)-1)/pageSize);
var a=new Object();
if(totalCounts<=1){return
}if(currentPage>1){appendPreLink()
}if(totalPages<=6&&totalPages>1){a.mimimum=1;
a.maximum=totalPages;
appendCurrentpage(a)
}else{if(totalPages>=7){if(currentPage<4){a.mimimum=1;
a.maximum=5;
appendCurrentpage(a);
appendLastPage(a.maximum)
}else{if(currentPage>=4&&currentPage<totalPages-3){a.mimimum=currentPage-2;
a.maximum=currentPage+2;
appendFirstpage(a.mimimum);
appendCurrentpage(a);
appendLastPage(a.maximum)
}else{if(currentPage==totalPages-3||currentPage==totalPages-2){a.mimimum=currentPage-2;
a.maximum=totalPages;
appendFirstpage(a.mimimum);
appendCurrentpage(a)
}else{if(currentPage>=totalPages-1){a.mimimum=totalPages-4;
a.maximum=totalPages;
appendFirstpage(a.mimimum);
appendCurrentpage(a)
}}}}}}if(currentPage<totalPages){appendNextLink()
}}function appendPreLink(){var a=((currentPage-1)-1)*pageSize;
paginationContainer.append('<input type="button" class="button-red" value="'+$("input[name=dictonaryPrevious]").val()+'" onclick="ajaxSearch('+a+',false,3)">')
}function appendNextLink(){var a=((currentPage+1)-1)*pageSize;
paginationContainer.append('<input type="button" class="button-red" value="'+$("input[name=dictonaryNext]").val()+'" onclick="ajaxSearch('+a+',false,3)">')
}function appendFirstpage(a){var b=0;
paginationContainer.append('<a href="javascript:void(0)"onclick="ajaxSearch('+b+',false,3)">1</a>');
if(a-1>1){paginationContainer.append("...")
}}function appendLastPage(a){var b=(totalPages-1)*pageSize;
if(a+1<totalCounts){paginationContainer.append("...")
}paginationContainer.append('<a href="javascript:void(0)"onclick="ajaxSearch('+b+',false,3)">'+totalPages+"</a>")
}function appendCurrentpage(c){for(var a=c.mimimum;
a<=c.maximum;
a++){var b=(a-1)*pageSize;
if(a==currentPage){paginationContainer.append('<a href="javascript:void(0)" class="selected">'+a+"</a>")
}else{paginationContainer.append('<a href="javascript:void(0)"onclick="ajaxSearch('+b+',false,3)">'+a+"</a>")
}}}var secondLevels={};
var thirdLevels={};
function displayFacets(d){secondLevels={};
thirdLevels={};
var c=d.RES;
if(c!=null){if(c.PARM){var f=c.PARM;
if(f.PMT){var a=f.PMT;
if(a!=null){if(a.length==null){if(a["@NM"]=="Content Type"){renderContentType(a,null)
}}else{for(var b=0;
b<a.length;
b++){if(a[b]["@NM"]=="Content Type"){renderContentType(a[b],a)
}}}}initFacets()
}}}}function renderContentType(f,a){if(f["@NM"]=="Content Type"){$(".search-filter").css("visibility","visible");
var g=f.PV;
var h;
var c=$(".search-filter-single-select.filter-by>ul");
c.empty();
if(g.length==null){addContentType(g["@V"],g["@C"]);
storeSublevel(a,g["@V"]);
appendFilterBoder()
}else{for(var d=0;
d<g.length;
d++){addContentType(g[d]["@V"],g[d]["@C"]);
storeSublevel(a,g[d]["@V"])
}appendFilterBoder()
}if(thirdLevels["Thought Leadership"]){var b=thirdLevels["Thought Leadership"];
$.each(b,function(n,k){var q={};
q["Content%20Type"]="Thought%20Leadership";
var p="";
for(var m=0;
m<k.length;
m++){if(m==0){p+=encodeURIComponent(k[m].name)
}else{p+=","+encodeURIComponent(k[m].name)
}}q["Thought%20Leadership-"+n]=p;
var l=getCountNumberOfSecondFilter(q);
var o=secondLevels["Thought Leadership"];
for(var m=0;
m<o.length;
m++){if(o[m].name==n){o[m].count=l
}}})
}}}function getCountNumberOfSecondFilter(d){var b;
var c=encodeURIComponent($('input[name="search-result-search"]').val());
var f=$("input[name=searchCollection]").val();
var a=$("input[name=searchClient]").val();
$.ajax({url:"/services/search",method:"POST",async:false,data:{type:"search",q:c,start:0,collection:f,client:a,num:pageSize,filters:JSON.stringify(d),countFlag:1},dataType:"json",success:function(g){if(g.RES!=null&&g.RES.M!=null){b=g.RES.M
}else{b=0
}}});
return b
}function appendFilterBoder(){if($(".search-filter-single-select.filter-by>.search-filter-border.bottom").length==0){$(".search-filter-single-select.filter-by").append("<div class='search-filter-border bottom'></div>")
}}function addContentType(c,b){var a=$(".search-filter-single-select.filter-by>ul");
a.append('<li key="'+c+'">'+c+" ("+b+")</li>")
}function storeSublevel(b,k){if(b!=null){for(var f=0;
f<b.length;
f++){var d=b[f];
if(d["@NM"].substring(0,k.length)===k){var h={};
h.name=d["@NM"].split("-")[1];
h.count=0;
var a=[];
var l=d.PV;
if(l.length==null){var g={};
g.name=l["@V"];
g.count=l["@C"];
a[0]=g
}else{for(var c=0;
c<l.length;
c++){var g={};
g.name=l[c]["@V"];
g.count=l[c]["@C"];
a[c]=g
}}if(secondLevels[k]==null){secondLevels[k]=[]
}if(thirdLevels[k]==null){thirdLevels[k]={}
}if(thirdLevels[k][h.name]==null){thirdLevels[k][h.name]=[]
}for(var c=0;
c<a.length;
c++){h.count+=parseInt(a[c].count);
thirdLevels[k][h.name].push(a[c])
}secondLevels[k].push(h)
}}}}function initFacets(){try{$(window).resize(function(){if(!$("body").hasClass("IE8")){var t=$("body");
if(t.hasClass("is-mobile")||t.hasClass("is-tablet")){$(".search-filter").addClass("navmenu navmenu-default offcanvas navmenu-fixed-left")
}else{$(".search-filter").removeClass("navmenu navmenu-default offcanvas navmenu-fixed-left");
$(".modal").hide()
}}});
$(document).ready(function(){$(".search-filter .search-filter-single-select.filter-by").find("h2").removeClass("collapsed");
$(".search-filter .search-filter-single-select.filter-by").find("ul").removeClass("collapsed").css("padding-top","10px");
$(".search-filter .search-filter-single-select.filter-by .search-filter-border.bottom").css("display","block")
});
var n=false;
$(".search-filter .search-filter-single-select>ul>li").click(function(t){r($(this));
$(".search-filter h2").click(function(){var u=$(this).parent();
var v=$(this).next().next();
if(!$(this).hasClass("collapsed")){o(v)
}else{q(v);
if(u.hasClass("search-filter-multi-select")){g(u)
}try{if($("body").hasClass("is-mobile")||$("body").hasClass("is-tablet")){setTimeout(function(){var x=u.offset().top;
x=x+$(".search-filter").first().scrollTop();
$(".search-filter").animate({scrollTop:x},300)
},400)
}}catch(w){}}});
$('input[name="search-filter-clear-all"]').click(function(){$('input[type="checkbox"][key="'+$(this).attr("key")+'"]').each(function(){if($(this).parent().attr("class")=="checked"){$(this).prop("checked",false);
$(this).parent().removeAttr("class");
var v=encodeURIComponent($(this).attr("key"));
var x=encodeURIComponent($(this).attr("value"));
updateFilterAnalyticsToRemove(v,x);
var w=JSON.parse($("input[name=filters]").val());
var u=h(w[v]);
var y=$.inArray(x,u);
if(y!=-1){u.splice(y,1)
}if(u.length==0){delete w[v]
}else{w[v]=f(u)
}$("input[name=filters]").val(JSON.stringify(w))
}});
if($(this).prev().hasClass("collapsed")){$(this).prev().find("li").slideUp();
$(this).slideUp();
$(this).next().slideUp()
}ajaxSearch(0,false,2)
});
$(".search-filter .search-filter-multi-select>ul>li").click(function(){a($(this))
})
});
$(".search-filter .search-filter-multi-select>ul>li").click(function(){a($(this))
});
$(".search-filter .search-filter-reset").click(function(){$("input[name=filters]").val("");
location.reload()
});
$(".search-filter h2").click(function(){var t=$(this).parent();
var u=$(this).next().next();
if(!$(this).hasClass("collapsed")){o(u)
}else{q(u);
if(t.hasClass("search-filter-multi-select")){g(t)
}try{if($("body").hasClass("is-mobile")||$("body").hasClass("is-tablet")){setTimeout(function(){var w=t.offset().top;
w=w+$(".search-filter").first().scrollTop();
$(".search-filter").animate({scrollTop:w},300)
},400)
}}catch(v){}}});
$(".search-filter input[type='button']").click(function(){var t=$(this).parent();
var u=$(this).prev();
u.find("li").removeClass("checked");
g(t);
if(u.hasClass("collapsed")){o(u)
}});
function g(u){var t=$(".search-filter .search-filter-multi-select:not(:has(.ul.collapsed))").not(u);
t.each(function(){var v=$(this).find("ul");
if(!v.hasClass("collapsed")){o(v)
}})
}function q(u,t){if(t===undefined){t=400
}u.animate({paddingTop:"10px"},t);
u.parent().find('input[type="button"]').slideDown(t);
u.parent().find(".search-filter-border.bottom").slideDown(t);
$.when(u.find("li").not("li.checked").slideDown(t)).then(function(){u.prev().prev().removeClass("collapsed");
u.removeClass("collapsed")
})
}function o(u,t){if(t===true){u.find("li").removeClass("checked")
}if(u.find("li.checked").length==0){u.animate({paddingTop:"0"},400);
u.parent().find('input[type="button"]').slideUp();
u.parent().find(".search-filter-border.bottom").slideUp()
}$.when(u.find("li").not("li.checked").slideUp()).then(function(){u.prev().prev().addClass("collapsed");
u.addClass("collapsed")
})
}function r(y){var t=y.parent().parent().hasClass("filter-by");
y.parent().find("li").not(y).removeClass("checked");
if(!y.hasClass("checked")){y.addClass("checked");
o(y.parent());
if(t){var x=secondLevels[y.attr("key")];
$(".Level-One-Container").empty();
if(x!=null){for(var v=0;
v<x.length;
v++){var B=$('<div class="search-filter-multi-select" style="display: block;"></div>');
if(v==0){B.append('<h2 style="display: block;">'+x[v].name+"("+x[v].count+")</h2>")
}else{var A=y.attr("key")+"-"+x[v].name;
B.append('<h2 key="'+A+'"  class="collapsed" style="display: block;">'+x[v].name+"("+x[v].count+")</h2>")
}B.append('<div class="search-filter-border top"></div>');
var w="";
if(v==0){w+='<ul style="padding-top: 10px;">'
}else{w+='<ul class="collapsed" style="padding-top: 0px;">'
}var z=thirdLevels[y.attr("key")][x[v].name];
var A=y.attr("key")+"-"+x[v].name;
for(var u=0;
u<z.length;
u++){if(v==0){w+='<li style="display: list-item;">'
}else{w+='<li style="display: none;">'
}w+='<input key="'+A+'" type="checkbox" name="search-results-filter[]" value="'+z[u].name+'"><div></div>';
w+="<div>"+z[u].name+"("+z[u].count+")</div></li>"
}w+='</ul><input key="'+A+'"  type="button" name="search-filter-clear-all" value="'+$("input[name=dictonaryClearAll]").val()+'">';
B.append(w);
B.append('<div class="search-filter-border bottom"></div>');
$(".Level-One-Container").append(B)
}}if(n===false){q($(".search-filter .search-filter-multi-select:first ul"),0);
$(".search-filter .search-filter-multi-select").slideDown();
n=true
}else{b(false)
}}p(y.attr("key"))
}else{y.removeClass("checked");
if(y.parent().hasClass("collapsed")){if(t===false){y.slideUp();
y.parent().parent().find(".search-filter-border.bottom").slideUp()
}else{q(y.parent())
}}if(t){b()
}d(y.attr("key"))
}}function h(v){var u=[];
if(v!=""){var t=v.split(",");
for(var w=0;
w<t.length;
w++){u.push(t[w])
}}return u
}function f(t){var v;
for(var u=0;
u<t.length;
u++){if(u==0){v=t[u]
}else{v+=",";
v+=t[u]
}}return v
}function d(t){updateFilterAnalyticsToRemove("Content Type",t);
if(filters!=null){$("input[name=filters]").val(filters)
}else{$("input[name=filters]").val("")
}ajaxSearch(0,false,2)
}function p(t){updateFilterAnalyticsInfo("Content Type",t);
var u={"Content%20Type":encodeURIComponent(t)};
$("input[name=filters]").val(JSON.stringify(u));
ajaxSearch(0,false,1)
}function a(t){t.toggleClass("checked");
var u=t.find('input[type="checkbox"]');
if(!u.prop("checked")){u.prop("checked",true);
c(encodeURIComponent(u.attr("key")),encodeURIComponent(u.attr("value")))
}else{u.prop("checked",false);
if(t.parent().hasClass("collapsed")){t.slideUp();
if(t.parent().find("li.checked").length==0){t.parent().animate({paddingTop:"0"},400);
t.parent().parent().find('input[type="button"]').slideUp();
t.parent().parent().find(".search-filter-border.bottom").slideUp()
}}k(encodeURIComponent(u.attr("key")),encodeURIComponent(u.attr("value")))
}}function k(u,w){var v=JSON.parse($("input[name=filters]").val());
var t=h(v[u]);
updateFilterAnalyticsToRemove(u,w);
var x=$.inArray(w,t);
if(x!=-1){t.splice(x,1)
}if(t.length==0){delete v[u]
}else{v[u]=f(t)
}$("input[name=filters]").val(JSON.stringify(v));
ajaxSearch(0,false,2)
}function c(t,v){updateFilterAnalyticsInfo(t,v);
var u=JSON.parse($("input[name=filters]").val());
if(u[t]==null){u[t]=v
}else{u[t]+=","+v
}$("input[name=filters]").val(JSON.stringify(u));
ajaxSearch(0,false,1)
}function b(u){var t=$(".search-filter .search-filter-multi-select");
if(u===false){t.first().find("li").removeClass("checked");
q(t.first().find("ul"));
t=t.not(":first")
}t.each(function(){if(u!=false){$(this).slideUp();
n=false
}o($(this).find("ul"),true)
})
}function m(t,v){if(!t){t=""
}var u=$(".search-filter .search-filter-single-select"+t);
u.find("li").removeClass("checked");
if(v!=false){u.slideUp()
}o(u.find("ul"))
}function s(u){var t=200;
if(n===false){t=0
}$(".search-filter .search-filter-multi-select>h2").fadeOut(t,function(){$(".search-filter .search-filter-multi-select>h2").text(u.text());
$(".search-filter .search-filter-multi-select>h2").fadeIn(t)
})
}$(".search-results .search-filter-mobile-browse").click(function(){$(".search-results .search-filter").offcanvas("show");
return false
});
$(".search-results .search-filter>h3>a").click(function(){$(".search-results .search-filter").offcanvas("hide");
return false
});
$(window).resize(function(){if(!$("body").hasClass("IE8")){var t=$("body");
if(t.hasClass("is-mobile")||t.hasClass("is-tablet")){$(".search-filter").addClass("navmenu navmenu-default offcanvas navmenu-fixed-left")
}else{$(".search-filter").removeClass("navmenu navmenu-default offcanvas navmenu-fixed-left");
$(".modal").hide()
}}$(".search-filter").on("show.bs.offcanvas",function(){$(".modal").show()
}).on("hide.bs.offcanvas",function(){$(".modal").hide()
})
})
}catch(l){}}function initFilter(){$(".modal").hide();
try{$(window).resize(function(){if(!$("body").hasClass("IE8")){var b=$("body");
if(b.hasClass("is-mobile")||b.hasClass("is-tablet")){$(".search-filter").addClass("navmenu navmenu-default offcanvas navmenu-fixed-left")
}else{$(".search-filter").removeClass("navmenu navmenu-default offcanvas navmenu-fixed-left");
$(".modal").hide()
}}});
$(document).ready(function(){$(".search-filter .search-filter-single-select.filter-by").find("h2").removeClass("collapsed");
$(".search-filter .search-filter-single-select.filter-by").find("ul").removeClass("collapsed").css("padding-top","10px");
$(".search-filter .search-filter-single-select.filter-by .search-filter-border.bottom").css("display","block")
});
$(window).resize(function(){if(!$("body").hasClass("IE8")){var b=$("body");
if(b.hasClass("is-mobile")||b.hasClass("is-tablet")){$(".search-filter").addClass("navmenu navmenu-default offcanvas navmenu-fixed-left")
}else{$(".search-filter").removeClass("navmenu navmenu-default offcanvas navmenu-fixed-left");
$(".modal").hide()
}}$(".search-filter").on("show.bs.offcanvas",function(){$(".modal").show()
}).on("hide.bs.offcanvas",function(){$(".modal").hide()
})
})
}catch(a){}}var filters="";
var pageSize;
$(document).ready(function(){if($("#templateName").val()=="/apps/corp/templates/thoughtLeadership"){var a=$(".meetExpertButton>a");
if(a){a.addClass("btn button-red");
a.width("auto")
}pageSize=$("#pageSize").html();
paginationContainer=$(".result-pagination");
var b={"Content%20Type":"Thought%20Leadership"};
filters=JSON.stringify(b);
$("input[name=filters]").val(filters);
getFilterFromUrl();
ajaxSearchView2(0,true)
}});
function getFilterFromUrl(){var h={"Content%20Type":"Thought%20Leadership"};
var b=$(location).attr("href");
if(b.indexOf("?")!=-1){var d=b.substring(b.indexOf("?")+1);
if(d.indexOf("&")!=-1){var a=d.split("&");
for(var k=0;
k<a.length;
k++){if(a[k].indexOf("=")!=-1){var l=a[k].split("=");
var c=null;
if(l[0]=="status"){continue
}if(l[1].indexOf(",")!=-1){var f=l[1].split(",");
for(var g=0;
g<f.length;
g++){if(!c){c=f[g]
}else{c=c+","+f[g]
}}}else{c=l[1]
}h[l[0]]=c
}}}else{if(d.indexOf("=")!=-1){var a=d.split("=");
var c=null;
if(a[0]=="status"){return
}if(a[1].indexOf(",")!=-1){var f=a[1].split(",");
for(var g=0;
g<f.length;
g++){if(!c){c=f[g]
}else{c=c+","+f[g]
}}}else{c=a[1]
}h[a[0]]=c
}}}filters=JSON.stringify(h)
}function ajaxSearchView2(f,b){try{var d=$("input[name=searchCollection]").val();
var a=$("input[name=searchClient]").val();
if(d==""){d=$("input[name=searchCollection]")[$("input[name=searchCollection]").length-1].value
}if(a==""){a=$("input[name=searchClient]")[$("input[name=searchClient]").length-1].value
}}catch(c){}$.ajax({url:"/services/search",method:"POST",data:{type:"search",start:f,num:pageSize,filters:$("input[name=filters]").val(),collection:d,client:a},dataType:"json",success:function(g){if(b){displayFacetsView2(g)
}caculateTotalCount(g.RES);
displayView2Results(g);
$(".result-pagination").html("");
if(g!=null&&g.RES!=null&&g.RES.M!=null&&g.RES["@SN"]!=null){displayView2Pagination(g.RES)
}}})
}function displayFacetsView2(d){$(".thought-leadership-filter-type").html("<div>Filter by:</div>");
$(".thirdLevelContainer").empty();
var c=d.RES;
if(c!=null){if(c.PARM){var f=c.PARM;
if(f.PMT){var a=f.PMT;
if(a!=null){if(a.length==null){if(a["@NM"].split("-")[0]==="Thought Leadership"){renderFacets(a)
}}else{for(var b=0;
b<a.length;
b++){if(a[b]["@NM"].split("-")[0]==="Thought Leadership"){renderFacets(a[b])
}}}if(a.length==null){if(a["@NM"]=="expert-name"){renderFacets(a)
}}else{for(var b=0;
b<a.length;
b++){if(a[b]["@NM"]==="expert-name"){renderFacets(a[b])
}}}}}initFacetsView2()
}}}var rank=0;
function displayView2Results(d){$(".column1, .column2, .column3").html("");
var f=d.RES;
if(f){if(totalCounts==1){$(".result-total").html(totalCounts+" Result")
}else{$(".result-total").html(totalCounts+" Results")
}$(".displaying-results").html("Displaying results <b>"+f["@SN"]+" - "+f["@EN"]+"</b>");
if(f.R){if(f.R.length){var b=f.R.length;
for(var a=0;
a<b;
a++){rank=a;
var c=a%3;
if(c==0){$(".column1").append(generateView2Results(f.R[a]))
}if(c==1){$(".column2").append(generateView2Results(f.R[a]))
}if(c==2){$(".column3").append(generateView2Results(f.R[a]))
}}}else{$(".column1").append(generateView2Results(f.R))
}}}else{$(".result-total").html("");
$(".displaying-results").html("");
$(".column2").append("<b>No Result</b>")
}}function generateView2Results(b){var c=$('<div class="thought-leadership-result-block"><h2></h2><div><img src="" alt="alt"></div><span></span><h3><a href="#"></a></h3><h4></h4><p></p><a href="#">Read the article</a></div>');
c.find("a").attr("href",b.U);
c.find("a").attr("onclick","thoughtLeadershipAnalytics("+rank+")");
c.find("h3>a").html(b.T);
c.find("img").parent().css("display","none");
if(b.MT){if(b.MT.length){for(var a=0;
a<b.MT.length;
a++){injectWithMeta(b.MT[a],c)
}}else{injectWithMeta(b.MT,c)
}}return c
}function injectWithMeta(c,d){if(c["@N"].indexOf("Thought Leadership-Audience")!=-1){var b=c["@N"].split("-")[1];
var a=d.find("h2").html();
if(a.indexOf(b)==-1){if(d.find("h2").html()){d.find("h2").append(", "+c["@V"])
}else{d.find("h2").append(c["@V"])
}}}if(c["@N"]=="publicationDate"){d.find("span").html(publicationDateFormat(c["@V"]))
}if(c["@N"]=="description"){d.find("p").html(c["@V"])
}if(c["@N"]=="search-result-image"){d.find("img").attr("src",c["@V"]);
d.find("img").parent().css("display","block")
}if(c["@N"]=="expert-name"){if(d.find("h4").html()!=""){d.find("h4").html(d.find("h4").html()+", "+c["@V"])
}else{d.find("h4").html("by "+c["@V"])
}}}function publicationDateFormat(c){var a=c.split("-");
var d=a[0];
var f=a[1];
var b=a[2];
if(f.charAt(0)=="0"){f=f.charAt(1)
}return f+"/"+b+"/"+d
}function displayView2Pagination(c){var b=c["@SN"];
totalPages=Math.ceil(totalCounts/pageSize);
currentPage=parseInt((parseInt(b)+parseInt(pageSize)-1)/pageSize);
var a=new Object();
if(totalCounts<=1){return
}if(currentPage>1){appendView2PreLink()
}if(totalPages<=6&&totalPages>1){a.mimimum=1;
a.maximum=totalPages;
appendView2Currentpage(a)
}else{if(totalPages>=7){if(currentPage<4){a.mimimum=1;
a.maximum=5;
appendView2Currentpage(a);
appendView2LastPage(a.maximum)
}else{if(currentPage>=4&&currentPage<totalPages-3){a.mimimum=currentPage-2;
a.maximum=currentPage+2;
appendView2Firstpage(a.mimimum);
appendView2Currentpage(a);
appendView2LastPage(a.maximum)
}else{if(currentPage==totalPages-3||currentPage==totalPages-2){a.mimimum=currentPage-2;
a.maximum=totalPages;
appendView2Firstpage(a.mimimum);
appendView2Currentpage(a)
}else{if(currentPage>=totalPages-1){a.mimimum=totalPages-4;
a.maximum=totalPages;
appendView2Firstpage(a.mimimum);
appendView2Currentpage(a)
}}}}}}if(currentPage<totalPages){appendView2NextLink()
}}function appendView2PreLink(){var a=((currentPage-1)-1)*pageSize;
paginationContainer.append('<input type="button" class="button-red" value="Previous"onclick="ajaxSearchView2('+a+',false)">')
}function appendView2NextLink(){var a=((currentPage+1)-1)*pageSize;
paginationContainer.append('<input type="button" class="button-red" value="Next"onclick="ajaxSearchView2('+a+',false)">')
}function appendView2Firstpage(a){var b=0;
paginationContainer.append('<a href="javascript:void(0)"onclick="ajaxSearchView2('+b+',false)">1</a>');
if(a-1>1){paginationContainer.append("...")
}}function appendView2LastPage(a){var b=(totalPages-1)*pageSize;
if(a+1<totalCounts){paginationContainer.append("...")
}paginationContainer.append('<a href="javascript:void(0)"onclick="ajaxSearchView2('+b+',false)">'+totalPages+"</a>")
}function appendView2Currentpage(c){for(var a=c.mimimum;
a<=c.maximum;
a++){var b=(a-1)*pageSize;
if(a==currentPage){paginationContainer.append('<a href="javascript:void(0)" class="selected">'+a+"</a>")
}else{paginationContainer.append('<a href="javascript:void(0)"onclick="ajaxSearchView2('+b+',false)">'+a+"</a>")
}}}function renderFacets(d){var b=$('<div class="thought-leadership-filter-options col-xs-12"><div class="options-container"></div></div>');
var g="";
var a;
if(d["@NM"]=="expert-name"){a="Author"
}else{a=d["@NM"].split("-")[1]
}$(".thought-leadership-filter-type").append(' <div><a href="#">'+a+"</a></div>");
var f=d.PV;
if(f.length==null){b.find(".options-container").append('<div><label> <input key="'+d["@NM"]+'" type="checkbox" name="thought-leadership-filter[]" value="'+f["@V"]+'"> <span></span><span>'+f["@V"]+"("+f["@C"]+")</span></label></div>")
}else{for(var c=0;
c<f.length;
c++){b.find(".options-container").prepend('<div><label> <input key="'+d["@NM"]+'" type="checkbox" name="thought-leadership-filter[]" value="'+f[c]["@V"]+'"> <span></span><span>'+f[c]["@V"]+"("+f[c]["@C"]+")</span></label></div>")
}}b.find(".options-container").append(' <a href="#"></a>');
$(".thirdLevelContainer").append(b)
}function initFacetsView2(){$("input[name=filters]").val(filters);
$(".thought-leadership-filter-options input[type=checkbox]").each(function(){var l=JSON.parse($("input[name=filters]").val());
var k=encodeURIComponent($(this).attr("key"));
var m=encodeURIComponent($(this).val());
if(l[k]!=null&&l[k].indexOf(m)!=-1){$(this).attr("checked",true)
}});
f($(".thought-leadership-filter-options input[type=checkbox]:checked"));
ajaxSearchView2(0,false);
$(".thought-leadership-filter-type").children().not(":first").each(function(k){$(this).click(function(){var l=$(".thought-leadership-filter-options");
if(l.eq(k).is(":visible")){$(this).removeClass("selected");
l.eq(k).hide();
return false
}l.hide();
$(this).parent().children().removeClass("selected");
$(this).addClass("selected");
l.eq(k).show();
return false
})
});
$(".thought-leadership-filter-options>div>a").click(function(){$(".thought-leadership-filter-type").children().removeClass("selected");
$(".thought-leadership-filter-options").hide();
return false
});
$(".thought-leadership-filter-options input[type=checkbox]").change(function(){g(encodeURIComponent($(this).attr("key")),encodeURIComponent($(this).val()),$(this).prop("checked"));
f($(".thought-leadership-filter-options input[type=checkbox]:checked"));
thoughLidershipFilterAnalytics(encodeURIComponent($(this).attr("key")),encodeURIComponent($(this).val()))
});
function f(k){var l=$(".thought-leadership-selected-filters>div");
l.children("div").not(":nth-child(2)").remove();
k.each(function(){var m=$(this).attr("key");
var n=$(this).val();
$(".thought-leadership-selected-filters>div").append("<div key='"+$(this).attr("key")+"'>"+$(this).val()+"<a onclick=\"thoughLidershipFilterAnalytics('"+m+"','"+n+"');\" href='#'></a></div>")
});
if(l.children().length==2){$(".thought-leadership-selected-filters").hide();
return false
}$(".thought-leadership-selected-filters").show();
l.children("div").not(":nth-child(2)").each(function(m){$(this).children("div>a").click(function(){var n=encodeURIComponent($(".thought-leadership-filter-options input[type=checkbox]:checked").eq(m).attr("key"));
var o=encodeURIComponent($(".thought-leadership-filter-options input[type=checkbox]:checked").eq(m).val());
g(n,o,false);
$(".thought-leadership-filter-options input[type=checkbox]:checked").eq(m).attr("checked",false);
f($(".thought-leadership-filter-options input[type=checkbox]:checked"));
return false
})
})
}function g(m,o,l){var n=JSON.parse($("input[name=filters]").val());
if(n[m]==null){n[m]=o
}else{var k=a(n[m]);
if($.inArray(o,k)!=-1&&!l){var p=$.inArray(o,k);
k.splice(p,1)
}else{k.push(o)
}n[m]=d(k)
}$("input[name=filters]").val(JSON.stringify(n));
ajaxSearchView2(0,false)
}$(".thought-leadership-selected-filters>div>div:nth-child(2)").click(b);
function b(){$(".thought-leadership-filter-options input[type=checkbox]:checked").attr("checked",false);
var k={"Content%20Type":"Thought%20Leadership"};
filters=JSON.stringify(k);
$("input[name=filters]").val(filters);
ajaxSearchView2(0,false);
f($(".thought-leadership-filter-options input[type=checkbox]:checked"));
return false
}function a(m){var l=[];
if(m!=""){var k=m.split(",");
for(var n=0;
n<k.length;
n++){l.push(k[n])
}}return l
}function d(k){var m;
for(var l=0;
l<k.length;
l++){if(l==0){m=k[l]
}else{m+=",";
m+=k[l]
}}return m
}if(navigator.appName.indexOf("Internet Explorer")!=-1){var h=(navigator.appVersion.indexOf("MSIE 9")==-1&&navigator.appVersion.indexOf("MSIE 1")==-1);
if(h){$("body").addClass("IE8");
if(!window.console){window.console={log:function(){}};
console={log:function(){}}
}c()
}}function c(){try{$(".thought-leadership-filter-options label").each(function(){var o=JSON.parse($("input[name=filters]").val());
var n=encodeURIComponent($(this).find("input").attr("key"));
var p=encodeURIComponent($(this).find("input").val());
if(o[n]!=null&&o[n].indexOf(p)!=-1){$(this).addClass("checked")
}});
k($(".thought-leadership-filter-options label.checked input"));
$(".thought-leadership-filter-options label").click(function(){g(encodeURIComponent($(this).find("input").attr("key")),encodeURIComponent($(this).find("input").val()),!$(this).hasClass("checked"));
if($(this).hasClass("checked")){$(this).removeClass("checked")
}else{$(this).addClass("checked")
}k($(".thought-leadership-filter-options label.checked input"))
});
function k(n){var o=$(".thought-leadership-selected-filters>div");
o.children("div").not(":nth-child(2)").remove();
n.each(function(){$(".thought-leadership-selected-filters>div").append('<div key="'+$(this).attr("key")+'">'+$(this).val()+'<a href="#"></a></div>')
});
$(".thought-leadership-selected-filters>div>div:nth-child(2)").css({"background-color":"#e41f35",color:"white"});
if(o.children().length==2){$(".thought-leadership-selected-filters").slideUp(300);
return false
}$(".thought-leadership-selected-filters").slideDown(300);
o.children("div").not(":nth-child(2)").each(function(p){$(this).children("div>a").click(function(){var q=encodeURIComponent($(".thought-leadership-filter-options label.checked input").eq(p).attr("key"));
var r=encodeURIComponent($(".thought-leadership-filter-options label.checked input").eq(p).val());
$(".thought-leadership-filter-options label.checked").eq(p).removeClass("checked");
g(q,r,false);
k($(".thought-leadership-filter-options label.checked input"));
return false
})
})
}$(".thought-leadership-selected-filters>div>div:nth-child(2)").click(m);
function m(){$(".thought-leadership-filter-options label.checked").removeClass("checked");
k($(".thought-leadership-filter-options label.checked input"));
var n={"Content%20Type":"Thought%20Leadership"};
filters=JSON.stringify(n);
$("input[name=filters]").val(filters);
ajaxSearchView2(0,false);
return false
}}catch(l){}}}var eventData=new Object();
$(document).ready(function(){var b=new Date();
var c=formatDate1(b);
pageData.page.serverTime=formatAMPM(b);
pageData.page.serverDate=formatDate1(b);
pageData.page.tags=getMetaTagKeywordsContent("tags");
pageData.page.navTitle=getNavTitleContent("navigation-title");
$("a[class*=social_]").each(function(){var d=$(this).attr("class");
var f=d.split("_");
$(this).attr("data-social-network",f[1])
});
formPageLoad();
var a=(typeof getInternetExplorerVersion!=="undefined")?getInternetExplorerVersion():1;
if((a==-1||a.version>8)&&typeof stLight!=="undefined"){stLight.subscribe("click",shareThisCallbackFunction)
}});
function formatAMPM(c){var a=c.getUTCHours();
var d=c.getUTCMinutes();
var f=c.getUTCSeconds();
var b=a>=12?"pm":"am";
a=a%12;
a=a?a:12;
a=a<10?"0"+a:a;
d=d<10?"0"+d:d;
f=f<10?"0"+f:f;
var g=a+":"+d+":"+f+" "+b;
return g
}function formatDate1(f){var d=f.getUTCMonth()+1;
var a=f.getUTCDate();
var c=f.getUTCFullYear();
d=d<10?"0"+d:d;
a=a<10?"0"+a:a;
var b=d+"/"+a+"/"+c;
return b
}function logAnalytics(a){if(window.location.search.indexOf("analytics=log")>-1){if(typeof console!="undefined"&&typeof console.log!="undefined"){console.log(a)
}}}function getMetaTagKeywordsContent(d){var b=document.location.href;
if(b.indexOf("/essential-insights")>0){var f=document.getElementsByTagName("meta");
var c="tags";
for(var a=0;
a<f.length;
a++){if((f[a].name==c)){return f[a].content;
break
}}}return""
}function getNavTitleContent(c){var d=document.getElementsByTagName("meta");
var b="navigation-title";
for(var a=0;
a<d.length;
a++){if((d[a].name==b)){return d[a].content
}}return""
}function prepareSearchAnalytics(){var a=$(".result-total").text();
var d=$(".result-pagination > a.selected").html();
var c=query;
var g="manual";
var b=$(location).attr("href");
if(b.indexOf("predefined=")!=-1){g="predefined"
}if(typeof pageData!="undefined"){if(typeof pageData.search==="undefined"){var f={currentPage:currentPage,keyword:c,method:g,totalResults:totalCounts};
pageData.search=f
}else{pageData.search.currentPage=currentPage;
pageData.search.keyword=c;
pageData.search.method=g;
pageData.search.totalResults=totalCounts
}logAnalytics("Updated pageData for search analytics: "+JSON.stringify(pageData));
_satellite.pageBottom()
}}function updateSearchPagination(){if(typeof eventData!="undefined"){if(typeof eventData.search==="undefined"){var a={currentPage:currentPage,totalResults:totalCounts};
eventData.search=a
}else{eventData.search.currentPage=currentPage;
eventData.search.totalResults=totalCounts
}logAnalytics("Updated eventData for search analytics: "+JSON.stringify(pageData));
_satellite.track("searchResultsUpdated")
}}function updateFilterAnalyticsInfo(a,b){filterKey=a;
filterValue=b
}function updateFilterAnalyticsToRemove(a,b){filterKeyToRemove=a;
filterValueToRemove=b
}function addSearchFilterToAnalytics(){if(typeof pageData!="undefined"){if(typeof pageData.search.filters==="undefined"){pageData.search.filters=[]
}if(typeof eventData.search==="undefined"){eventData.search=new Object()
}if(typeof eventData.search.filters==="undefined"){eventData.search.filters=[]
}var a={name:unescape(filterKey),value:unescape(filterValue)};
pageData.search.filters.push(a);
eventData.search.filters.push(a);
logAnalytics("Added search filter to pageData: "+JSON.stringify(pageData));
logAnalytics("Added search filter to eventData: "+JSON.stringify(eventData));
_satellite.track("searchResultsUpdated")
}}function removeSearchFilterFromAnalytics(){var a=unescape(filterKeyToRemove);
var b=unescape(filterValueToRemove);
if(typeof pageData!="undefined"){for(var c=0;
c<pageData.search.filters.length;
c++){if(pageData.search.filters[c].name==a&&pageData.search.filters[c].value==b){pageData.search.filters.splice(c,1)
}}logAnalytics("Removed search filter from pageData: "+JSON.stringify(pageData))
}if(typeof eventData!="undefined"){for(var c=0;
c<eventData.search.filters.length;
c++){if(eventData.search.filters[c].name==a&&eventData.search.filters[c].value==b){eventData.search.filters.splice(c,1)
}}logAnalytics("Removed search filter from eventData: "+JSON.stringify(eventData))
}_satellite.track("searchResultsUpdated")
}$(document).delegate("form","submit",function(c){var b=$(this);
var d=b.attr("id");
if(b.attr("id")){d=b.attr("id")
}else{if(b.attr("name")){d=b.attr("name")
}}if(d.indexOf("contact_fields")==-1){var a={name:d,step:"complete"};
eventData.form=a;
logAnalytics("In-Form Submits "+JSON.stringify(eventData));
_satellite.track("formTracking")
}});
function formPageLoad(){var b=ValidFormsOnPage();
var a=getFormResult("status");
if(b!=null&&b.name!=null&&b.name.indexOf("contact_fields")==-1){if($(".form_error").is(":visible")||(a!=null&&a==500)){b.step="";
var d=$("form[name="+b.name+"]").find(".section");
var c=$(d).find(".form_row");
b.errors=[];
$.each(d,function(g,k){var l=$(k).find(".form_row");
if(l.length==2){var h=$(l[0]).find("input").attr("name");
var f=$(l[1]).find(".form_error").html();
var m={message:f,fieldName:h};
b.errors.push(m)
}});
eventData.form=b
}else{if(a!=null&&(a.indexOf("200")>-1||a.indexOf("202")>-1)){b.step="complete";
eventData.form=b
}else{eventData.form=b;
logAnalytics("Form Page Loads "+JSON.stringify(pageData))
}}_satellite.track("formTracking")
}}$(".connect-widget .tab").click(function(){if($(this).children("a").attr("class")=="connect-btn closed"){var a=$(".connect-widget").find("form");
updateConnectFormAnalytics(a)
}});
function updateConnectFormAnalytics(a){var b=null;
if(a.length>0){formId=$(a[0]).attr("id");
if($(".connect-thanks").is(":visible")){b={name:formId,step:"complete"};
eventData.form=b;
logAnalytics("Connect Form Submits "+JSON.stringify(eventData));
_satellite.track("formTracking")
}else{if($(".connect-widget .form_error").is(":visible")||$(".connect-body .form_error").is(":visible")){b={name:formId};
var d=$(a[0]).find(".section");
var c=$(d).find(".form_row");
b.errors=[];
$.each(d,function(g,k){var l=$(k).find(".form_row");
if(l.length==2){var h=$(l[0]).find("input").attr("name");
var f=$(l[1]).find(".form_error").html();
var m={message:f,fieldName:h};
b.errors.push(m)
}});
eventData.form=b;
logAnalytics("Errors with Connect Form found: "+JSON.stringify(eventData));
_satellite.track("formTracking")
}else{b={name:formId,step:"view"};
eventData.form=b;
_satellite.track("formTracking");
logAnalytics("Connect Form Loads, calling satellite.track() "+JSON.stringify(eventData))
}}}}$(".connect-body .email").click(function(){if($("span[aria-expanded]").attr("aria-expanded")=="false"){var a=$(".connect-body").find("form");
updateConnectFormAnalytics(a)
}});
$(".sign-in-div").click(function(){validForm={name:"extLogin",step:"view"};
eventData.form=validForm;
_satellite.track("formTracking");
logAnalytics("Login Form Loads, calling satellite.track()"+JSON.stringify(eventData))
});
function ValidFormsOnPage(){var b=new Object();
var a=$(document).find("form");
$.each(a,function(c,d){var f=null;
if($(d).attr("id")){f=$(d).attr("id")
}else{if($(d).attr("name")){f=$(d).attr("name")
}}if(f){if(f.indexOf("contact_fields")!==-1||f.indexOf("mysearchform")!==-1||f.indexOf("extLogin")!==-1){f=null
}if(f){b={name:f,step:"view"};
return false
}}});
return b
}function shareThisCallbackFunction(b,a){eventData.socialNetwork=a;
_satellite.track("socialShare");
logAnalytics("ShareThis widget clicked: "+JSON.stringify(eventData))
}function getFormResult(h){var b=null;
var c=$(location).attr("href");
if(c.indexOf("?")!=-1){var a=c.substring(c.indexOf("?")+1);
if(a.indexOf("&")!=-1){var f=a.split("&");
for(var d=0;
d<f.length;
d++){if(f[d].indexOf("=")!=-1){var g=f[d].split("=");
if(h==g[0]){b=decodeURI(g[1]);
break
}}}}else{if(a.indexOf("=")!=-1){var f=a.split("=");
if(h==f[0]){b=decodeURI(f[1])
}}}}return b
}function thoughLidershipFilterAnalytics(g,h){var a=unescape(g);
var d=unescape(h);
if(typeof eventData.thoughtLeadership==="undefined"){eventData.thoughtLeadership=new Object()
}if(typeof eventData.thoughtLeadership.filters==="undefined"){eventData.thoughtLeadership.filters=[]
}var b=true;
if(typeof eventData!="undefined"){for(var f=0;
f<eventData.thoughtLeadership.filters.length;
f++){if(eventData.thoughtLeadership.filters[f].name==a&&eventData.thoughtLeadership.filters[f].value==d){console.log("Inside If");
eventData.thoughtLeadership.filters.splice(f,1);
b=false;
break
}}}if(b){var c={name:unescape(g),value:unescape(h)};
eventData.thoughtLeadership.filters.push(c)
}_satellite.track("thoughtLeadershipUpdated")
}function thoughtLeadershipAnalytics(b){if(typeof eventData.thoughtLeadershipPagination==="undefined"){eventData.thoughtLeadershipPagination=new Object()
}var a=b+1;
eventData.thoughtLeadershipPagination=$("div.result-pagination >a.selected").text()+":"+a;
_satellite.track("thoughtLeadershipPagination")
}$(document).ready(function(){$("div.thought-leadership-selected-filters > div> div:contains('Clear All')").click(function(){if(typeof eventData.thoughtLeadership==="undefined"){eventData.thoughtLeadership=new Object()
}if(typeof eventData.thoughtLeadership.filters==="undefined"){eventData.thoughtLeadership.filters=[]
}eventData.thoughtLeadership.filters=[];
_satellite.track("thoughtLeadershipUpdated")
})
});
gsaTypeAheadCheck={};
gsaTypeAheadCheck=function(){return{validate:function(c){var b=c.getField("./gsaTypeAhead").getValue(),f=true,d='Validation Failed: "Field must contain a positive numeric character. Please update.';
if(b.length==0){f=true
}else{var a=isNaN(parseInt(b))?0:parseInt(b);
console.log("--value is:",a);
if(a<=0){f=false
}else{if(a>0){if(isNaN(a)){f=true
}}else{if(a==null||a==undefined){f=false
}}}}if(!f){CQ.Ext.Msg.show({title:"Validation Failed",msg:d,buttons:CQ.Ext.MessageBox.OK,icon:CQ.Ext.MessageBox.ERROR});
return false
}}}
}();
$(function(){$("#audience-filter").on("change",function(){var b=window.location.href.split("?")[0];
var f=b.substr(0,b.lastIndexOf("/"));
b=b.substr(b.lastIndexOf("/")+1,(b.indexOf(".html")-5));
b=f+"/"+b.substr(0,b.indexOf("."))+"."+$(this).val()+".html";
var d=$("#audience-filter").find(":selected").val();
var c=new Date();
var a="";
c.setFullYear(c.getFullYear()+1);
a="selected="+b+"; path=/; expires="+c.toUTCString();
document.cookie=a;
if(b){window.location=b
}return false
})
});
$(document).ready(function(){var c=window.location.href.split("?")[0];
var b=c.substring(c.lastIndexOf("/"),c.replace(".html","").length);
var a="";
var d=false;
if($("#audience-filter").length>0){if(b.indexOf(".")>0){b=b.substring(b.indexOf(".")+1,b.length);
a=b;
$("#audience-filter option").each(function(){if($(this).val()==a){$(this).attr("selected","selected");
var g=new Date();
g.setFullYear(g.getFullYear()+1);
var f="selected="+c+"; path=/; expires="+g.toUTCString();
document.cookie=f;
d=true
}})
}}});
function getCookie(b){var c=document.cookie;
var f=b+"=";
var d=c.indexOf("; "+f);
if(d==-1){d=c.indexOf(f);
if(d!=0){return null
}}else{d+=2;
var a=document.cookie.indexOf(";",d);
if(a==-1){a=c.length
}}return decodeURI(c.substring(d+f.length,a))
}$(document).ready(function(){function a(f){$(f).each(function(g,h){$(h).html($(h).text().replace(/\s(?=[^\s]*$)/g,"&nbsp;"))
})
}if($("div.article-grid")!=undefined){$("div.article-grid").find(".article-limit").each(function(f){var g=$(this).text();
len=g.length;
if(len>300){g=g.substr(0,301);
$(this).text(g.substr(0,g.lastIndexOf(" "))+"...")
}})
}if($("div.article-grid")!=undefined){$("div.article-grid").find("p.article-summary_charjs").each(function(h){var f=$(this).text();
var g=f.length;
if(g>120){f=f.substr(0,121);
$(this).text(f.substr(0,f.lastIndexOf(" "))+"...")
}})
}var c=null;
$(".article-list_button").click(function(){clearInterval(c);
$(".article-list_button").toggleClass("loading");
if($(".article-list_button").hasClass("loading")){$(".list-button_text").text("Loading...");
$(".article-list_button").prop("disabled",true);
c=setInterval(d,2000)
}});
function d(){var r=$("#path-variable").text();
var q=$("#remaining-articles").text();
var p=parseInt($("#range-variable").text());
var n=parseInt($("#articlelist-offset").text());
var o=parseInt($("#articlelist-counter").text());
var f=parseInt($("#additional-article-range").text());
var h="";
var l="all_audience";
var m="all_audience";
if($("#audience-filter")!=undefined){m=$("#audience-filter").find(":selected").val();
if(l!=m){l=m
}}else{var g=window.location.href.split("?")[0];
var k=g.substring(g.lastIndexOf("/"),g.replace(".html","").length);
if(k.indexOf(".")>0){k=k.substring(k.indexOf(".")+1,k.length);
l=k
}}if(isNaN(n)){n=0
}if(isNaN(f)){f=10
}if(q>0){$.ajax({url:"/services/articleListView",data:{path:r,offset:n,limit:f,eiSelector:l},cache:false,success:function(y){var B="";
var v=o;
for(i=0;
i<y.length;
i++){var s="";
if(y[i].namesmap!=undefined){if(y[i].namesmap.length>0){s=s+" by "
}for(j=0;
j<y[i].namesmap.length;
j++){var A="";
if(y[i].namesmap[j].url!=null){A="<a href="+y[i].namesmap[j].url+">"+y[i].namesmap[j].authorName+"</a>"
}else{A=y[i].namesmap[j].authorName
}s=s+A+y[i].namesmap[j].seperator
}}var x="";
if(y[i].imagePath!=null){x=x+'<a href="'+y[i].pageUrl+'"><img src="'+y[i].imagePath+'" alt="'+y[i].imageAltText+'"/></a>'
}var t=y[i].publicationDate.split("-");
var w=parseInt(t[1],10)+"/"+parseInt(t[2],10).toString()+"/"+t[0];
v=v+1;
if(i==0){h="article-more-"+v;
B=B+'<span id="'+h+'"></span>'
}var u=y[i].title+":"+v;
B=B+'<div class="article-summary list-article">'+x+'<div class="article-summary_copy"><a href="'+y[i].pageUrl+'" class="data-article-summary" data-article-summary="article:'+u+'"><h2 class="article-summary_title">'+y[i].title+'</h2></a><div class="article-summary_author"><time datetime="'+y[i].publicationDate+'">'+w+"</time>"+s+"</div>";
if(y[i].description!=null){B=B+'<p class="article-summary_desc">'+y[i].description+"</p></div></div>"
}else{B=B+"</div>"
}}q=q-y.length;
if(q>0){$("#remaining-articles").text(q);
$(".article-list_remaining").text("of "+q+" remaining articles")
}else{$(".article-list_more").hide()
}var z=10;
if(z>q){$(".list-button_text").text("Load "+q+" more")
}else{$(".list-button_text").text("Load "+z+" more")
}$(".article-list").append(B);
n=n+y.length;
$("#articlelist-offset").text(n);
$("#articlelist-counter").text(v);
if($("#"+h).length){$("html, body").animate({scrollTop:$("#"+h).offset().top},1000)
}}})
}else{$(".article-list_more").hide()
}$(".article-list_button").removeClass("loading");
$(".article-list_button").prop("disabled",false);
clearInterval(c)
}function b(g){var h=document.cookie;
var l=g+"=";
var k=h.indexOf("; "+l);
if(k==-1){k=h.indexOf(l);
if(k!=0){return null
}}else{k+=2;
var f=document.cookie.indexOf(";",k);
if(f==-1){f=h.length
}}return decodeURI(h.substring(k+l.length,f))
}});
if(!Object.keys){Object.keys=(function(){var c=Object.prototype.hasOwnProperty,d=!({toString:null}).propertyIsEnumerable("toString"),b=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],a=b.length;
return function(h){if(typeof h!=="object"&&(typeof h!=="function"||h===null)){throw new TypeError("Object.keys called on non-object")
}var f=[],k,g;
for(k in h){if(c.call(h,k)){f.push(k)
}}if(d){for(g=0;
g<a;
g++){if(c.call(h,b[g])){f.push(b[g])
}}}return f
}
}())
}try{if($(".corporate-callout").height()!=null){if($(".corporate-callout").height()<21){$(".header-mobile").css("top","30px")
}else{if($(".corporate-callout").height()<41){$(".header-mobile").css("top","50px")
}else{if($(".corporate-callout").height()<61){$(".header-mobile").css("top","70px")
}}}}}catch(e){}$(document).ready(function(){try{var a=true;
$(".nav-mobile-img").click(function(){if(a==true){$(".connect-widget").css("position","absolute");
a=false
}else{$(".connect-widget").css("position","fixed");
a=true
}});
$(".navmenu-close").click(function(){$(".connect-widget").css("position","fixed");
a=true
})
}catch(b){}});
$.urlparams=function(a){var d=window.location.search.substring(1);
var c=d.split("&");
for(var b=0;
b<c.length;
b++){var f=c[b].split("=");
if(f[0]===a){return f[1]
}}return false
};
function toggleConnect(){if($(".connect-btn").length>0){$(".connect-btn")[0].click()
}}function openConnect(){if($(".connect-btn.closed").length>0){$(".connect-btn.closed")[0].click()
}}function closeConnect(){if($(".connect-btn.open").length>0){$(".connect-btn.open")[0].click()
}}function changeLanguage(b){if(b.indexOf(":")>0){var a=window.location.href.replace(b.split(":")[1],b.split(":")[0]);
window.location=a
}else{window.location=window.location.href
}}$("input[name=EmailAddress].form_field_text").each(function(){$($(this).parents("form")[0]).submit(function(a){var b=$($(this)[0]).find("input[name=EmailAddress].form_field_text")[0].value;
$.cookie("EmailAddress",encodeURIComponent(b),{expires:7,path:"/"})
})
});
$("input[name=EmailAddress][type=hidden]").each(function(){var b=$.cookie("EmailAddress");
if(b!==undefined&&b!==""){var c=decodeURIComponent($.cookie("EmailAddress"));
$(this).val(c)
}else{var a=$(this);
var d=$($(this).parents("div.hidden.section")[0]);
a.after('<div class="form_row"><div class="form_leftcol"><div class="form_leftcollabel"><label for="'+a.attr("id")+'">Email Address</label></div><div class="form_leftcolmark">&nbsp;</div></div><div class="form_rightcol" id="EmailAddress_rightcol"><div id="EmailAddress_0_wrapper" class="form_rightcol_wrapper"></div></div></div><div class="form_row_description"></div>');
a.removeClass("form_field_hidden").addClass("form_field").addClass("form_field_text").attr("type","text");
a.appendTo("#EmailAddress_0_wrapper");
d.removeClass("hidden").addClass("text");
$(a.parents("form")[0]).submit(function(f){var g=$($(this)[0]).find("input[name=EmailAddress].form_field_text")[0].value;
$.cookie("EmailAddress",encodeURIComponent(g),{expires:7,path:"/"})
})
}});
(function e(b,g,d){function c(p,m){if(!g[p]){if(!b[p]){var k=typeof require=="function"&&require;
if(!m&&k){return k(p,!0)
}if(a){return a(p,!0)
}var n=new Error("Cannot find module '"+p+"'");
throw n.code="MODULE_NOT_FOUND",n
}var h=g[p]={exports:{}};
b[p][0].call(h.exports,function(l){var o=b[p][1][l];
return c(o?o:l)
},h,h.exports,e,b,g,d)
}return g[p].exports
}var a=typeof require=="function"&&require;
for(var f=0;
f<d.length;
f++){c(d[f])
}return c
})({1:[function(b,c,a){window.screen_sm_min=768;
window.screen_md_min=992;
window.screen_lg_min=1200;
window.screen_xs_max=767;
window.screen_sm_max=991;
window.screen_md_max=1199;
b("./ie8Compatibility").init();
b("./media").init();
b("./jquery.offhover").init();
b("./jquery.delayedHover").init();
b("./components/navigation").init();
b("./components/sub-nav-mega-menu").init();
b("./components/footer-collapse").init();
b("./structures/sitting-header").init();
b("./structures/sign-in-drop").init();
b("./components/search").init();
b("./components/sign-in-triangle").init();
b("./structures/mobile-nav").init();
b("./components/utility-nav").init();
b("./jquery.lastWordClass").init();
b("./raquo").init();
b("./structures/left-menu").init();
b("./components/carousel").init();
b("./components/related-services-carousel").init();
b("./structures/tabbed-content").init();
b("./components/product-displayed-image").init();
b("./components/product-image-carousel").init();
b("./components/connect").init();
b("./components/connect-widget").init();
b("./components/links-list-block").init();
b("./components/category-2-category-container").init();
b("./components/now-trending").init();
b("./structures/thought-leadership-sort").init();
b("./structures/thought-leadership-filter").init();
b("./components/article").init();
b("./components/case-study-main-carousel").init();
b("./templates/category-1").init();
b("./components/about-us-tab").init();
b("./components/tabbed-content-customer-reviews").init();
b("./components/article-quote-stretch-right").init();
b("./components/video-modal").init();
b("./structures/about-us-tabbed-content").init();
b("./components/directory-block").init();
b("./structures/carousel-full-width-article").init();
b("./components/search-result-search").init();
b("./components/home-case-study").init();
b("./components/article-image").init();
b("./imageFill").init();
b("./components/modal").init()
},{"./components/about-us-tab":2,"./components/article":5,"./components/article-image":3,"./components/article-quote-stretch-right":4,"./components/carousel":6,"./components/case-study-main-carousel":7,"./components/category-2-category-container":8,"./components/connect":10,"./components/connect-widget":9,"./components/directory-block":11,"./components/footer-collapse":12,"./components/home-case-study":13,"./components/links-list-block":14,"./components/modal":15,"./components/navigation":16,"./components/now-trending":17,"./components/product-displayed-image":18,"./components/product-image-carousel":19,"./components/related-services-carousel":20,"./components/search":23,"./components/search-filter":21,"./components/search-result-search":22,"./components/sign-in-triangle":24,"./components/sub-nav-mega-menu":25,"./components/tabbed-content-customer-reviews":26,"./components/utility-nav":27,"./components/video-modal":28,"./ie8Compatibility":29,"./imageFill":30,"./jquery.delayedHover":31,"./jquery.lastWordClass":32,"./jquery.offhover":33,"./media":34,"./raquo":35,"./structures/about-us-tabbed-content":36,"./structures/carousel-full-width-article":37,"./structures/left-menu":38,"./structures/mobile-nav":39,"./structures/sign-in-drop":41,"./structures/sitting-header":42,"./structures/tabbed-content":43,"./structures/thought-leadership-filter":44,"./structures/thought-leadership-sort":45,"./templates/category-1":46}],2:[function(b,c,a){c.exports={init:function(){$(".about-us-tab").each(function(){$(this).children("a").click(function(h){var p=$(this);
h.preventDefault();
if(p.hasClass("selected")){return false
}var o=$(".about-us-tab>a.selected");
var m=o.next().children().not("div");
var f=o.next().children("div");
var k=p.next().children().not("div");
var n=p.next().children("div");
var l=400;
var g=10;
m.animate({opacity:0,left:-g},l);
f.animate({opacity:0},l);
k.css("opacity",0).css("left",g);
n.css("opacity",0);
window.setTimeout(function(){k.animate({opacity:1,left:0},l);
n.animate({opacity:1},l);
$(".about-us-tab>a").removeClass("selected");
p.addClass("selected");
p.mouseenter();
p.mouseout()
},l);
return false
})
});
function d(){$(".about-us-tabbed-content").each(function(){var g=$(this).find(".selected").next().outerHeight();
var f=$(this).children("ul").height();
$(this).height(f+g)
})
}}}
},{}],3:[function(b,c,a){c.exports={init:function(){$(window).resize(function(){$(".article-image>div.imageTTA").height($(".article-image>div").width());
if($(".article-image>div").css("float")=="left"){$(".article-image>div.imageTTA").height($(".article-image").height())
}})
}}
},{}],4:[function(b,c,a){c.exports={init:function(){function d(){var f=$(".article-quote-stretch-right").each(function(){var g=$(this).children().outerHeight();
$(this).height(g)
})
}$(window).resize(d)
}}
},{}],5:[function(b,c,a){c.exports={init:function(){$(".homepage-articles").slick({dots:true,appendDots:$("#meatballs").prepend(),infinite:true,speed:500,fade:true,cssEase:"linear",prevArrow:" ",nextArrow:" ",autoplay:true});
$(".homepage-articles").each(function(){if($(this).find(".slick-slide").length==1){$(this).next("#carousel-controls").find("#hpPause").attr("style","display:none")
}});
$(window).focusout(function(){$(".homepage-articles").slick("slickPause");
$("#hpPause").attr("data-state","paused");
$("#hpPause").removeClass("glyphicon glyphicon-pause").addClass("glyphicon glyphicon-play")
});
$(window).focusin(function(){$("#hpPause").attr("data-state","playing");
$("#hpPause").removeClass("glyphicon glyphicon-play").addClass("glyphicon glyphicon-pause")
});
$("#hpPause").click(function(){var d=$("#hpPause").attr("data-state");
if(d==="playing"){$(".homepage-articles").slick("slickPause");
$("#hpPause").attr("data-state","paused");
$("#hpPause").toggleClass("glyphicon glyphicon-pause glyphicon glyphicon-play ")
}if(d==="paused"){$(".homepage-articles").slick("slickPlay");
$("#hpPause").attr("data-state","playing");
$("#hpPause").toggleClass("glyphicon glyphicon-pause glyphicon glyphicon-play ")
}})
}}
},{}],6:[function(b,c,a){c.exports={init:function(){}}
},{}],7:[function(b,c,a){c.exports={init:function(){$(document).ready(function(){$(".case-study-main-carousel .carousel-captions").slick({slidesToShow:1,slidesToScroll:1,infinite:true,dots:true,arrows:false,asNavFor:".case-study-main-carousel .inner-carousel"});
$(".case-study-main-carousel .inner-carousel").slick({slidesToShow:1,slidesToScroll:1,arrows:true,prevArrow:'<a href="#" class="case-study-main-carousel-prev"></a>',nextArrow:'<a href="#" class="case-study-main-carousel-next"></a>',infinite:true,asNavFor:".case-study-main-carousel .carousel-captions",responsive:[{breakpoint:767,settings:{swipe:true}}]})
});
$(".case-study-main-carousel .icon-show-carousel").click(function(){$(".case-study-main-carousel .icon-show-carousel").fadeOut(400);
$(".carousel-captions-container").css({opacity:0,visibility:"visible"}).animate({opacity:1},400)
});
$(".carousel-captions-container .icon-hide-carousel").click(function(){$(".case-study-main-carousel .icon-show-carousel").fadeIn(400);
$(".carousel-captions-container").css({opacity:1}).animate({opacity:0},{duration:400,complete:function(){$(".carousel-captions-container").css("visibility","hidden")
}})
})
}}
},{}],8:[function(b,c,a){c.exports={init:function(){$(".category-2-category-container a").click(function(d){if(!$("body").hasClass("is-desktop")){d.stopPropagation()
}});
$(".category-2-category-container h2").click(function(){if(!$("body").hasClass("is-desktop")){var f=$(this);
var g=f.parent().find(".text-container").first();
var d=400;
if(!$(this).hasClass("expand")){g.slideDown(d,function(){f.addClass("expand")
});
g.addClass("expanded")
}else{g.slideUp(d,function(){f.removeClass("expand")
});
g.removeClass("expanded")
}}})
}}
},{}],9:[function(b,c,a){c.exports={init:function(){if(document.addEventListener&&!window.requestAnimationFrame){$(".connect-widget span").addClass("ie9")
}$(".connect-mobile-icon, .connect-widget .tab, .connect-widget .close, .connect-widget [type='reset']").on("click",function(){$(".connect-widget").css("position","fixed");
$(".connect-widget").toggleClass("open");
$(".connect-widget").find(".connect-btn").toggleClass("closed").toggleClass("open");
$(".connect-widget [name='first-name']").focus();
if($("body").hasClass("is-mobile")&&$(".connect-widget").hasClass("open")){f(true)
}else{f(false)
}});
$(".connect-widget").bind("touchstart",function(){$(this).addClass("touch-no-hover")
});
$(window).scroll(h);
$(window).resize(function(){h()
});
function f(k){if(k===false||k===undefined){$("body").css("overflow-y","auto");
$("body").css("position","static")
}else{$("body").css("overflow-y","hidden");
$("body").css("position","fixed")
}}function g(){if($("body").hasClass("is-mobile")&&$(".connect-widget").hasClass("open")){f(true)
}else{f(false)
}}function h(){if(!$(".connect-body").length){return
}if(d($(".connect-body").get(0))){$(".connect-widget").hide()
}else{$(".connect-widget").show()
}}function d(m){var o=m.offsetTop;
var n=m.offsetLeft;
var l=m.offsetWidth;
var k=m.offsetHeight;
while(m.offsetParent){m=m.offsetParent;
o+=m.offsetTop;
n+=m.offsetLeft
}return(o<(window.pageYOffset+window.innerHeight)&&n<(window.pageXOffset+window.innerWidth)&&(o+k)>window.pageYOffset&&(n+l)>window.pageXOffset)
}}}
},{}],10:[function(b,c,a){c.exports={init:function(){$(".email ").click(function(){$(".connect-body .connect-btn").toggleClass("open closed")
});
$("#cancel-connect").click(function(d){d.preventDefault();
$(".connect-body .connect-btn").click()
});
$(".connect-body input[type='reset']").click(function(d){$(".connect-body .connect-btn").click()
});
$(".error-input").keyup(function(){alert($(this));
$(this).removeClass("error-label");
$("label[for='"+$(this).attr("id")+"']").removeClass("error-label")
});
$("#sign-up-submit, #sign-up-submit-widget").click(function(){$(".input-required").each(function(){if($(".input-required").val()==""){$("#connect-error-message, #connect-error-message-widget").show();
$(".input-required").addClass("error-input");
$("label[for='"+$(this).attr("id")+"']").addClass("error-label")
}$(".error-input").keyup(function(){$(this).removeClass("error-input");
$("label[for='"+$(this).attr("id")+"']").removeClass("error-label");
if($(".error-input").length==0){$("#connect-error-message").hide()
}})
});
if($(".error-input").length==0){$(".email").click();
$(".email").hide();
var f=$('input[name="first"]').val();
var n=$('input[name="last"]').val();
var k=$('input[name="company"]').val();
var h=$('input[name="email"]').val();
var g=$('input[name="phone"]').val();
var l=$('input[name="title"]').val();
var m=$('input[name="targetURL"]').val();
var d=[{key:"00BF9234-68C8-4C1A-926D-0D2DA1B4FFE4",keys:{SubscriberKey:"344w4tze4wa383z78ehcscpca"},values:{EmailAddress:h,FIRST:f,LAST:n,TITLE:l,FACILITY:"facility"}}];
var o=JSON.stringify(d);
var p=false;
$.ajax({url:"/services/contactForm",data:{contact:o,targetURL:m},dataType:"json",timeout:20000,beforeSend:function(){$("#background").show();
$("#progressBar").show()
},success:function(q){if(q){p=true
}},error:function(){alert("error");
console.log(error)
},complete:function(){$("#background").hide();
$("#progressBar").hide();
if(!p){$(".connect-thanks").html("Submit error...")
}$(".connect-thanks").show();
$(".connect-widget-input-fields").hide()
}})
}})
}}
},{}],11:[function(b,c,a){c.exports={init:function(){$(".directory-block").each(function(){$(this).children().eq(0).click(function(){if($(this).hasClass("open")){$(this).next().slideUp(300);
$(this).removeClass("open")
}else{$(this).addClass("open");
$(this).next().slideDown(300)
}})
})
}}
},{}],12:[function(b,a){a.exports={init:function(){jQuery(document).ready(function(){jQuery(".footer-collapse-header").click(function(){$(this).parent().toggleClass("active")
})
})
}}
},{}],13:[function(b,c,a){c.exports={init:function(){$("#home-case-study a.play-icon").bind("touchstart",function(d){$("#home-case-study>div:first-child").click();
d.preventDefault()
})
}}
},{}],14:[function(b,c,a){c.exports={init:function(){}}
},{}],15:[function(b,c,a){c.exports={init:function(){try{$(".modal").on("hide.bs.modal",function(){$("body").css("overflow-y","auto");
$("body").css("position","static")
});
$(".modal").on("show.bs.modal",function(){$("body").css("overflow-y","hidden")
})
}catch(d){$("body").css("overflow-y","auto");
$("body").css("position","static")
}}}
},{}],16:[function(b,c,a){c.exports={init:function(){}}
},{}],17:[function(b,c,a){c.exports={init:function(){$(".now-trending-background").slick({slidesToShow:1,slidesToScroll:1,infinite:true,dots:false,arrows:false,fade:true,cssEase:"linear",asNavFor:"#now-trending-carousel"});
$("#now-trending-carousel").slick({dots:true,infinite:true,speed:300,slidesToShow:1,slidesToScroll:1,arrows:true,asNavFor:".now-trending-background",prevArrow:'<a href="#" class="now-trending_carousel_L"></a>',nextArrow:'<a href="#" class="now-trending_carousel_R"></a>',responsive:[{breakpoint:768,settings:{arrows:false}}]})
}}
},{}],18:[function(b,c,a){c.exports={init:function(){}}
},{}],19:[function(b,c,a){c.exports={init:function(){try{function d(){$(".product-image-carousel img").parent().each(function(){$(this).click(function(){$(".product-image-selected").removeClass("product-image-selected");
$(this).addClass("product-image-selected");
$(".product-displayed-image").slick("slickGoTo",$(this).index())
})
})
}$(".product-image-carousel").on("init",d);
$(".product-image-carousel").slick({slidesToShow:4,arrows:true,nextArrow:'<a href="#" class="carousel-arrow-right"></a>',prevArrow:'<a href="#" class="carousel-arrow-left"></a>',infinite:false,focusOnSelect:true,responsive:[{breakpoint:768,settings:{slidesToShow:3}}]});
$(".product-image-carousel").on("reInit",d);
$(".product-displayed-image").slick({centerMode:true,slidesToShow:1,slidesToScroll:1,arrows:false,centerPadding:"0px",focusOnSelect:true,infinite:false,swipe:false,speed:0})
}catch(f){}}}
},{}],20:[function(b,c,a){c.exports={init:function(){var g=3;
var l=3;
$(".related-solutions-carousel").slick({dots:false,infinite:false,speed:300,slidesToShow:g,slidesToScroll:l,arrows:true,prevArrow:'<a href="#" class="icon-solutions_carousel_L"></a>',nextArrow:'<a href="#" class="icon-solutions_carousel_R"></a>',responsive:[{breakpoint:767,settings:{slidesToShow:1,slidesToScroll:1}}]});
var f=window.innerWidth;
var d;
var k=$(".related-solutions-carousel").parent().parent();
var n=k.find(".solution");
var h;
if(f<768){d=n.length
}else{d=n.length/3
}k.find("#totalNumSol").text(Math.ceil(d));
$(".related-solutions-carousel").on("afterChange",function(p,o,r,q){h=r/g+1;
if(f<768){h=r+1
}k.find("#pageNumSol").text(h)
});
try{$(window).resize(function(){f=window.innerWidth;
if(f<768){d=n.length
}else{d=n.length/g
}k.find("#totalNumSol").text(Math.ceil(d))
})
}catch(m){}$(".revert").click(function(o){o.preventDefault();
$(".related-solutions-carousel").slick("slickGoTo","int:1");
h=$(".related-solutions-carousel").slick("slickCurrentSlide")+1;
k.find("#pageNumSol").text(h)
})
}}
},{}],21:[function(b,c,a){c.exports={init:function(){try{$(window).resize(function(){if(!$("body").hasClass("IE8")){var q=$("body");
if(q.hasClass("is-mobile")||q.hasClass("is-tablet")){$(".search-filter").addClass("navmenu navmenu-default offcanvas navmenu-fixed-left")
}else{$(".search-filter").removeClass("navmenu navmenu-default offcanvas navmenu-fixed-left");
$(".modal").hide()
}}});
$(document).ready(function(){$(".search-filter .search-filter-single-select.filter-by").find("h2").removeClass("collapsed");
$(".search-filter .search-filter-single-select.filter-by").find("ul").removeClass("collapsed").css("padding-top","10px");
$(".search-filter .search-filter-single-select.filter-by .search-filter-border.bottom").css("display","block")
});
var k=false;
$(".search-filter .search-filter-single-select>ul>li").click(function(q){o($(this))
});
$(".search-filter .search-filter-multi-select>ul>li").click(function(){d($(this))
});
$(".search-filter .search-filter-reset").click(function(){f();
l(".date-range");
l(".filter-by",false);
$(".search-filter .search-filter-single-select.filter-by").find("ul>li").removeClass("checked");
return false
});
$(".search-filter h2").click(function(){var q=$(this).parent();
var r=$(this).next().next();
if(!$(this).hasClass("collapsed")){m(r)
}else{n(r);
if(q.hasClass("search-filter-multi-select")){g(q)
}try{if($("body").hasClass("is-mobile")||$("body").hasClass("is-tablet")){setTimeout(function(){var t=q.offset().top;
t=t+$(".search-filter").first().scrollTop();
$(".search-filter").animate({scrollTop:t},300)
},400)
}}catch(s){}}});
$(".search-filter input[type='button']").click(function(){var q=$(this).parent();
var r=$(this).prev();
r.find("li").removeClass("checked");
g(q);
if(r.hasClass("collapsed")){m(r)
}});
function g(r){var q=$(".search-filter .search-filter-multi-select:not(:has(.ul.collapsed))").not(r);
q.each(function(){var s=$(this).find("ul");
if(!s.hasClass("collapsed")){m(s)
}})
}function n(r,q){if(q===undefined){q=400
}r.animate({paddingTop:"10px"},q);
r.parent().find('input[type="button"]').slideDown(q);
r.parent().find(".search-filter-border.bottom").slideDown(q);
$.when(r.find("li").not("li.checked").slideDown(q)).then(function(){r.prev().prev().removeClass("collapsed");
r.removeClass("collapsed")
})
}function m(r,q){if(q===true){r.find("li").removeClass("checked")
}if(r.find("li.checked").length==0){r.animate({paddingTop:"0"},400);
r.parent().find('input[type="button"]').slideUp();
r.parent().find(".search-filter-border.bottom").slideUp()
}$.when(r.find("li").not("li.checked").slideUp()).then(function(){r.prev().prev().addClass("collapsed");
r.addClass("collapsed")
})
}function o(q){var r=q.parent().parent().hasClass("filter-by");
q.parent().find("li").not(q).removeClass("checked");
if(!q.hasClass("checked")){q.addClass("checked");
m(q.parent());
if(r){p(q);
if(k===false){n($(".search-filter .search-filter-multi-select:first ul"),0);
$(".search-filter .search-filter-multi-select").slideDown();
$(".search-filter .search-filter-single-select.date-range").slideDown();
k=true
}else{f(false)
}}}else{q.removeClass("checked");
if(q.parent().hasClass("collapsed")){if(r===false){q.slideUp();
q.parent().parent().find(".search-filter-border.bottom").slideUp()
}else{n(q.parent())
}}if(r){f();
l(".date-range")
}}}function d(q){q.toggleClass("checked");
var r=q.find('input[type="checkbox"]');
if(!r.prop("checked")){r.prop("checked",true)
}else{r.prop("checked",false);
if(q.parent().hasClass("collapsed")){q.slideUp();
if(q.parent().find("li.checked").length==0){q.parent().animate({paddingTop:"0"},400);
q.parent().parent().find('input[type="button"]').slideUp();
q.parent().parent().find(".search-filter-border.bottom").slideUp()
}}}}function f(r){l(".date-range",r);
var q=$(".search-filter .search-filter-multi-select");
if(r===false){q.first().find("li").removeClass("checked");
n(q.first().find("ul"));
q=q.not(":first")
}q.each(function(){if(r!=false){$(this).slideUp();
k=false
}m($(this).find("ul"),true)
})
}function l(q,s){if(!q){q=""
}var r=$(".search-filter .search-filter-single-select"+q);
r.find("li").removeClass("checked");
if(s!=false){r.slideUp()
}m(r.find("ul"))
}function p(r){var q=200;
if(k===false){q=0
}$(".search-filter .search-filter-multi-select>h2").fadeOut(q,function(){$(".search-filter .search-filter-multi-select>h2").text(r.text());
$(".search-filter .search-filter-multi-select>h2").fadeIn(q)
})
}$(".search-results .search-filter-mobile-browse").click(function(){$(".search-results .search-filter").offcanvas("show");
return false
});
$(".search-results .search-filter>h3>a").click(function(){$(".search-results .search-filter").offcanvas("hide");
return false
});
$(window).resize(function(){if(!$("body").hasClass("IE8")){var q=$("body");
if(q.hasClass("is-mobile")||q.hasClass("is-tablet")){$(".search-filter").addClass("navmenu navmenu-default offcanvas navmenu-fixed-left")
}else{$(".search-filter").removeClass("navmenu navmenu-default offcanvas navmenu-fixed-left");
$(".modal").hide()
}}$(".search-filter").on("show.bs.offcanvas",function(){$(".modal").show()
}).on("hide.bs.offcanvas",function(){$(".modal").hide()
})
})
}catch(h){}}}
},{}],22:[function(b,c,a){c.exports={init:function(){var g=0;
var d="";
var h=0;
var m="";
var l=0;
$('.search-result-search input[type="text"]').keypress(function(p){g=encodeURI($(this).val());
if(p.which===13&&g.length>0){d=$(this).closest(".search-result-header").find("input[name=searchResultsURL]").val();
if(d){location.href=d+".html?q="+g
}}});
var f=null;
$('.search-result-search input[type="text"]').keyup(function(){g=encodeURI($(this).val());
d=$(this).closest(".search-result-header").find("input[name=searchResultsURL]").val();
h=parseInt($(this).closest(".search-result-header").find("input[name=suggestMaxLength]").val());
m=$(this).closest(".search-result-header").find("input[name=viewAllLabel]").val();
++l;
if(f!=null){clearTimeout(f)
}f=setTimeout(function(){n()
},1000)
});
function n(){var r=$("input[name=collection]").val();
var p=$("input[name=client]").val();
var q=$(".search-result-header").children("input[name=gsaTypeAhead]").val();
console.log("--> gsaTypeAhead value is:",q);
if(q==1){q=q-1
}if(g.length>=q){$.ajax({type:"POST",url:"/services/search",data:{type:"suggest",q:g,collection:r,client:p},dataType:"json",success:function(s){k(s.suggest)
},error:function(s){console.log("network error")
}});
$(".search-result-search .wrap.search_popup, .search-result-search-close").css("display","table-cell").fadeIn()
}else{$(".search-result-search .wrap.search_popup, .search-result-search .input-group .close_search").hide()
}}function k(p){$(".search_results_list").empty();
if(p[1]){for(var q=0;
q<p[1].length&&q<h;
q++){$(".search_results_list").append(o(p[1][q]))
}}$(".search_results_list").append("<li><a href='"+d+".html?q="+g+"' class='full_results col-12'>"+m+"<span class='go-icon'></span></a></li>")
}function o(q){var p=$('<li><a href=""></a></li>');
p.find("a").attr("href",d+".html?q="+encodeURI(q)+"&predefined=");
p.find("a").html(q+"<span class='go-icon'></span>");
return p
}$(".search-result-search-close").click(function(){l=0;
$('.search-result-search input[type="text"]').val("");
$(".search-result-search .search_popup, .search-result-search .input-group .close_search").hide();
return false
});
$(document).click(function(p){if(!$(p.target).closest(".search-result-search").length){l=0;
$(".search-result-search .search_popup, .search-result-search-close").hide()
}})
}}
},{}],23:[function(b,c,a){c.exports={init:function(){var k=0;
var q=0;
var m=0;
var d="";
var r="";
$(".search-box").keypress(function(x){k=encodeURI($(".search-box").val());
if(x.which===13&&k.length>0){d=$(this).closest(".header").find("input[name=searchResultsURL]").val();
if(d){location.href=d+".html?q="+k
}}});
var h=null;
$(".search-box").keyup(function(){d=$(this).closest(".header").find("input[name=searchResultsURL]").val();
m=$(this).closest(".header").find("input[name=suggestMaxLength]").val();
r=$(this).closest(".header").find("input[name=viewAllLabel]").val();
++q;
if(h!=null){clearTimeout(h)
}h=setTimeout(function(){s()
},500)
});
function s(){k=encodeURI($(".search-box").val());
var z=$("input[name=collection]").val();
var x=$("input[name=client]").val();
var y=$("input[name=gsaTypeAhead]").val();
console.log("--Second gsaTypeAhead value is:",y);
if(y==1){y=y-1
}if(k.length>y){$.ajax({type:"POST",url:"/services/search",data:{type:"suggest",q:k,collection:z,client:x,hasFilter:true},dataType:"json",success:function(A){n(A.suggest);
w(A)
},error:function(A){console.log("network error")
}});
$(".wrap.search_popup, .input-group .close_search").css("display","table-cell").fadeIn()
}else{$(".wrap.search_popup, .input-group .close_search").hide()
}}function w(x){var B=l(x.products);
var A=l(x.services);
var z=l(x.thoughts);
var y;
if(x.suggest[1]){if(x.suggest[1].length){y=x.suggest[1][0]
}else{y=x.suggest[1]
}}if(A.length!=0||B.length!=0){$(".search_popup .submenu-content").append("<div class='col-md-5'></div>");
if(B.length!=0){$(".submenu-content .col-md-5").append("<h4 class='products_title'>Related Products</h4><ul class='products'></ul>")
}if(A.length!=0){$(".submenu-content .col-md-5").append("<h4 class='services_title'>Related Services</h4><ul class='services'></ul>")
}}if(B.length==1){p(B,y);
f(A,y,5)
}else{if(B.length==2){p(B,y);
f(A,y,4)
}else{if(A.length==1){t(B,y,5);
g(A,y)
}else{if(A.length==2){t(B,y,4);
g(A,y)
}else{t(B,y,3);
f(A,y,3)
}}}}if(z.length!=0){$(".search_popup .submenu-content").append("<div class='col-md-6'><h4 class='thoughts_title'>Thought Leadership</h4><ul class='thought_lead'></ul></div>");
o(z,y)
}}function g(z,x){for(var y=0;
y<z.length;
y++){if(z[y].T){var A=$('<li><a href=""></a></li>');
A.find("a").attr("href",z[y].U);
A.find("a").html(z[y].T+"<span class='go-icon'></span>");
$(".submenu-content .services").append(A)
}}if(z.length>5){x=encodeURI(x);
$(".submenu-content .services").append("<li><a href='"+d+".html?q="+x+"&contentType=Services' class='full_results col-12'>Additional services<span class='go-icon'></span></a></li>")
}}function f(z,x,A){for(var y=0;
y<z.length&&y<A;
y++){if(z[y].T){var B=$('<li><a href=""></a></li>');
B.find("a").attr("href",z[y].U);
B.find("a").html(z[y].T+"<span class='go-icon'></span>");
$(".submenu-content .services").append(B)
}}if(z.length>A){x=encodeURI(x);
$(".submenu-content .services").append("<li><a href='"+d+".html?q="+x+"&contentType=Services' class='full_results col-12'>Additional services<span class='go-icon'></span></a></li>")
}}function p(z,x){for(var y=0;
y<z.length;
y++){if(z[y].T){var A=$('<li><a href=""></a></li>');
A.find("a").attr("href",z[y].U);
A.find("a").html(z[y].T+"<span class='go-icon'></span>");
$(".submenu-content .products").append(A)
}}if(z.length>5){x=encodeURI(x);
$(".submenu-content .products").append("<li><a href='"+d+".html?q="+x+"&contentType=Consumer%20Products' class='full_results col-12'>Additional products<span class='go-icon'></span></a></li>")
}}function t(A,x,z){for(var y=0;
y<A.length&&y<z;
y++){if(A[y].T){var B=$('<li><a href=""></a></li>');
B.find("a").attr("href",A[y].U);
B.find("a").html(A[y].T+"<span class='go-icon'></span>");
$(".submenu-content .products").append(B)
}}if(A.length>z){x=encodeURI(x);
$(".submenu-content .products").append("<li><a href='"+d+".html?q="+x+"&contentType=Consumer%20Products' class='full_results col-12'>Additional products<span class='go-icon'></span></a></li>")
}}function o(y,x){for(var z=0;
z<y.length&&z<5;
z++){if(y[z].T){var A=$('<li><a href=""></a></li>');
A.find("a").attr("href",y[z].U);
A.find("a").html(y[z].T+"<span class='go-icon'></span>");
$(".submenu-content .thought_lead").append(A)
}}if(y.length>5){x=encodeURI(x);
$(".submenu-content .thought_lead").append("<li><a href='"+d+".html?q="+x+"&contentType=Thought%20Leadership' class='full_results col-12'>Additional articles<span class='go-icon'></span></a></li>")
}}function l(x){var A=new Array();
if(x){if(x.RES){var z=x.RES;
if(z.R.length){for(var y=0;
y<z.R.length;
y++){A[A.length]=z.R[y]
}}else{A[A.length]=z.R
}}}return A
}function n(x){$(".search_results_list").empty();
$(".submenu-content").empty();
if(x[1]){for(var y=0;
y<x[1].length&&y<m;
y++){$(".search_results_list").append(v(x[1][y]))
}}$(".search_results_list").append("<li><a href='"+d+".html?q="+k+"' class='full_results col-12'>"+r+"<span class='go-icon'></span></a></li>")
}function v(y){var x=$('<li><a href=""></a></li>');
x.find("a").attr("href",$("input[name=searchResultsURL]").val()+".html?q="+encodeURI(y));
x.find("a").html(y+"<span class='go-icon'></span>");
return x
}$(".search .close_search").click(function(){$(".search .wrap.search_popup, .input-group .close_search").hide();
$(".search-box").val("");
q=0
});
$(document).click(function(x){if(!$(x.target).closest(".search, .search-mobile, .search-popup-mobile").length){$(".search .wrap.search_popup, .input-group .close_search").hide();
$(".search-popup-mobile").hide();
$(".search-popup-mobile .search_results_list").hide();
if($("div").hasClass("homepage-articles")){$(".homepage-articles").removeClass("homepage-articles-Search")
}}});
$(".search-mobile").click(function(){$(".search-popup-mobile").toggle();
if($("div").hasClass("homepage-articles")){$(".homepage-articles").toggleClass("homepage-articles-Search")
}});
$(".input-group-mobile .close-search-mobile").click(function(){$(".search-popup-mobile .search_results_list").hide();
$(".search-popup-mobile input[type=text]").val("");
q=0
});
$(".search-popup-mobile input[type=text]").keyup(function(){m=parseInt($(this).closest(".header").find("input[name=suggestMaxLength]").val());
r=$(this).closest(".header").find("input[name=viewAllLabel]").val();
d=$(this).closest(".header").find("input[name=searchResultsURL]").val();
if(h!=null){clearTimeout(h)
}var x=$(this).val();
h=setTimeout(function(){u(x)
},500)
});
$(".search-popup-mobile input[type=text]").keypress(function(x){if(x.which==13){k=encodeURI($(this).val());
if(d){location.href=d+".html?q="+k
}}});
function u(A){k=encodeURI(A);
var z=$("input[name=collection]").val();
var x=$("input[name=client]").val();
var y=$("input[name=gsaTypeAhead]").val();
console.log("-- third gsaTypeAhead value is:",y);
if(y==1){y=y-1
}if(k.length>y){$.ajax({type:"POST",url:"/services/search",data:{type:"suggest",q:k,collection:z,client:x},dataType:"json",success:function(B){n(B.suggest)
},error:function(B){console.log("network error")
}});
$(".search_results_list").show()
}else{$(".search_results_list").hide()
}}}}
},{}],24:[function(b,c,a){c.exports={init:function(){}}
},{}],25:[function(b,c,a){c.exports={init:function(){function f(){var h=$this.parent().parent();
h.height("");
var g=$(".sub-nav-mega-menu-list:visible");
if(g.height()>h.height()){h.height(g.height())
}}var d=$(".sub-nav-mega-menu>div>ul");
d.each(function(){var g=$(this).children();
g.eq(0).addClass("selected-mega-menu");
g.each(function(){var k=$(this);
$(this).click(function(l){if(!$(this).hasClass("selected-mega-menu")){l.preventDefault()
}g.removeClass("selected-mega-menu");
$(this).addClass("selected-mega-menu");
f()
});
var h;
$(this).hover(function(){var l=$(this);
if($(this).hasClass("selected-mega-menu")){return
}h=setTimeout(function(){g.removeClass("selected-mega-menu");
l.addClass("selected-mega-menu");
f()
},200)
},function(){clearTimeout(h)
})
})
})
}}
},{}],26:[function(b,c,a){c.exports={init:function(){$(".product-rating").find("a").click(function(d){if($("body").hasClass("is-mobile")){$(this).attr("href","#mobile-title-reviews");
if(!$("#mobile-title-reviews").hasClass("title-active")){$("#mobile-title-reviews").click()
}}else{$(this).attr("href","#title-reviews")
}});
$(".product-short-description a").click(function(){if($("body").hasClass("is-mobile")){$(this).attr("href","#mobile-title-description");
if(!$("#mobile-title-description").hasClass("title-active")){$("#mobile-title-description").click()
}}else{$(this).attr("href","#title-description")
}})
}}
},{}],27:[function(b,c,a){c.exports={init:function(){$(".utility-nav-button-print").click(function(){try{window.print()
}catch(d){console.log(d)
}})
}}
},{}],28:[function(b,c,a){c.exports={init:function(){$("#video-modal").on("hide.bs.modal",d);
function d(){var f=$("#video-modal").find(".youtube-video-full-width>iframe").attr("src");
$("#video-modal").find(".youtube-video-full-width>iframe").attr("src","");
$("#video-modal").find(".youtube-video-full-width>iframe").attr("src",f)
}}}
},{}],29:[function(b,c,a){c.exports={init:function(){$(document).ready(function(){try{if(navigator.appName.indexOf("Internet Explorer")!=-1){var B=(navigator.appVersion.indexOf("MSIE 9")==-1&&navigator.appVersion.indexOf("MSIE 1")==-1);
if(B){$("body").addClass("IE8");
if(!window.console){window.console={log:function(){}};
console={log:function(){}}
}h()
}}}catch(A){}});
function h(){f();
w();
t();
u();
m();
v();
s();
k();
r();
o();
x();
y();
z();
q();
p();
n();
d();
l()
}function l(){$.fn.handle_enter_keypress=function(){$(this).find("input").keypress(function(A){if(A.which=="13"){$(this).closest("form").find("button[type=submit],input[type=submit]").filter(":first").click()
}})
};
$("form").handle_enter_keypress()
}function f(){try{$(".breadcrumb-nav li").last().addClass("active-breadcrumb");
$(".breadcrumb-nav li").last().css("font-weight",600)
}catch(A){}}function w(){try{$(".product-detail-tabbed-content table>tbody>tr:nth-child(even)").addClass("order-info-even-tr");
$(".product-detail-tabbed-content td:nth-child(1)").addClass("order-info-table-left-padding");
$(".product-detail-tabbed-content th:nth-child(1)").addClass("order-info-table-left-padding")
}catch(A){}}function g(){try{$(".product-content .col-xs-12").removeClass("col-xs-12")
}catch(A){}}function n(){try{$(".header-mobile").addClass("ie8header-mobile");
$(".ie8header-mobile").removeClass("header nav-down header-mobile")
}catch(A){}}function d(){try{$(".footer-desktop .col-sm-1").removeClass("col-sm-1");
$(".footer-desktop .col-sm-2").removeClass("col-sm-2");
$(".footer-desktop .col-sm-3").removeClass("col-sm-3");
$(".footer-desktop .col-sm-4").removeClass("col-sm-4")
}catch(A){}}function t(){try{$(".category-2-category-container>.inner ul>li:last-child").css("margin-bottom",0);
$(".category-2-category-container>.inner ul>li:last-child>a").css("font-weight",700)
}catch(A){}}function u(){try{$(".lists-list-block-cat-3>ul>li:last-child>a").css("font-weight",700)
}catch(A){}}function m(){try{$(".expert-email-setup > div > div > form > div:nth-child(2n+1)").css({"padding-right":"12.5px"});
$(".expert-email-setup > div > div > form > div:nth-child(2n)").css({"padding-left":"12.5px"});
$(".expert-email-setup > div > div > form > div:last-child").css({"text-align":"right"})
}catch(A){}}function v(){try{$(".thought-leadership .expert-list>div:last-child").css({"text-align":"center","margin-top":"2em"})
}catch(A){}}function s(){try{$(".corporate-directory-links a:last-child").css({"font-size":"1em","line-height":"2.3em"})
}catch(A){}}function p(){try{$(document).ready(function(){if($(".product-content").length){$(".question .question-icon:before").css({content:'"\0000a0e602"'});
setTimeout(function(){p()
},2000)
}})
}catch(A){}}function k(){try{$(".login-template .login-content > div:nth-child(3)").css({"border-right":"1px solid #515151","padding-right":"40px"});
$(".login-template .login-content > div:last-child").css({"font-size":"1.25em","padding-left":"40px"});
$(".login-template .login-content > div:last-child > a").css({"font-weight":"600",display:"block",padding:"0","font-style":"normal"});
$(".login-template .login-content > div:last-child > a").addClass("raquo-after")
}catch(A){}}function r(){try{$("iframe").each(function(){var B=$(this).attr("src")+"&wmode=transparent";
$(this).attr("src",B)
})
}catch(A){}}function o(){try{var B=".directory-block>div:first-child";
var A=".directory-block>div:last-child";
$(".directory-block").css({"margin-bottom":"25px !important"});
$(A).css({display:"none","padding-bottom":"25px",margin:"0"});
$(A+">h4").css({margin:"20px 0 0 0","font-weight":"700","font-size":"1em"});
$(A+">div").css({"margin-top":"5px",display:"inline-block",width:"49%"})
}catch(C){}}function x(){try{$(".search-filter>h5:first-of-type").css("float","right");
$(".search-filter>h5:last-of-type:after").css("content"," by:")
}catch(A){}}function y(){try{$(".careers .article-rounded-image-on-left > div:last-child").css({padding:"25px 0 25px 582px !important"});
$(".careers .article-rounded-image-on-left > div:last-child > h2").css({"margin-top":"50px","font-family":"myriad-pro","font-weight":"700","font-style":"normal","font-size":"2.625em"});
$(".careers .article-rounded-image-on-left > div:last-child > p").css({"font-size":"1.125em","margin-top":"25px",padding:"0"});
$(".careers .article-rounded-image-on-left > div:last-child > a").css({"font-family":"myriad-pro","font-weight":"600","font-style":"normal",display:"block","font-size":"1.2em","margin-top":"25px"})
}catch(A){}}function z(){try{$(".case-study-background-solutions > div:nth-child(2)").css({"margin-top":"4.5em","float":"right"})
}catch(A){}}function q(){try{$(".content #home-case-study > div:nth-child(2)").css({position:"absolute",right:"0","padding-right":"6.1%"})
}catch(A){}}}}
},{}],30:[function(b,c,a){c.exports={init:function(){$(window).resize(function(){$("div[image-fill]").each(function(){var d=$(this);
var f=d.children("img").eq(0);
f.height("auto").width("100%");
if(d.height()>f.height()){f.height("100%").width("auto")
}})
})
}}
},{}],31:[function(b,c,a){c.exports={init:function(){(function(d){d.extend({delayedHover:new function(){this.construct=function(g,f){return this.each(function(){var k=d(this);
var h;
d(this).hover(function(){h=setTimeout(g,f)
},function(){clearTimeout(h)
})
})
}
}});
d.fn.extend({delayedHover:d.delayedHover.construct})
})(jQuery)
}}
},{}],32:[function(b,c,a){c.exports={init:function(){(function(d){d.extend({lastWordClass:new function(){this.construct=function(f){return this.each(function(){var g=d(this);
g.html(g.text().replace(/^\s+|\s+$/g,"").replace(/( [^ ]* *$)$/gm,'<span class="'+f+'">$1</span>'))
})
}
}});
d.fn.extend({lastWordClass:d.lastWordClass.construct})
})(jQuery)
}}
},{}],33:[function(b,c,a){c.exports={init:function(){(function(d){d.extend({offHover:new function(){this.construct=function(f){return this.each(function(){var g=d(this);
g.addClass("offHover");
d(document).mouseover(function(k){var h=d(".offHover");
if(!h.is(k.target)&&h.has(k.target).length===0){f()
}})
})
}
}});
d.fn.extend({offHover:d.offHover.construct})
})(jQuery)
}}
},{}],34:[function(b,c,a){c.exports={init:function(){try{if(!$("body").hasClass("IE8")){var f=["is-mobile","is-tablet","is-desktop"];
$(window).resize(function(){if(!window.getComputedStyle){}else{var g=window.getComputedStyle($("body").get(0),":before").content;
$(f).each(function(h){$("body").removeClass(f[h])
});
if(g!=undefined){if(g.indexOf("mobile")!=-1){$("body").addClass("is-mobile")
}else{if(g.indexOf("tablet")!=-1){$("body").addClass("is-tablet")
}else{if(g.indexOf("desktop")!=-1){$("body").addClass("is-desktop")
}}}}}});
$(document).ready(function(){$(window).resize()
})
}}catch(d){}}}
},{}],35:[function(b,c,a){c.exports={init:function(){}}
},{}],36:[function(b,c,a){c.exports={init:function(){$(".about-us-tabbed-content").each(function(){var f=$(this);
f.addClass("active");
window.setTimeout(function(){d(f)
},5000);
$(this).mouseover(function(){$(this).removeClass("active")
});
$(this).mouseout(function(){$(this).addClass("active")
})
});
$(window).resize(function(){$(".about-us-tabbed-content").height("");
var f=$(".about-us-tab").height();
$(".about-us-tabbed-content").height(f+500)
});
function d(k){if(k.hasClass("active")){var f=k.find(".about-us-tab");
var g=f.length;
var h=f.children(".selected").parent().index()+1;
f.eq((h%g)).children("a").click()
}window.setTimeout(function(){d(k)
},5000)
}}}
},{}],37:[function(b,c,a){c.exports={init:function(){$(".carousel-full-width-article>div").each(function(){$(this).slick({infinite:true,speed:300,slidesToShow:1,dots:true,autoplay:true,arrows:false,autoplaySpeed:10000})
})
}}
},{}],38:[function(b,c,a){c.exports={init:function(){$(".left-menu .left-menu-expand").next().show();
$(".left-menu>ul>li>a").click(function(d){if(!$(this).hasClass("has-children")){return
}d.preventDefault();
if($(this).hasClass("left-menu-expand")){$(this).removeClass("left-menu-expand").next().slideUp(400)
}else{$(".left-menu-expand").removeClass("left-menu-expand").next().slideUp(400);
$(this).addClass("left-menu-expand").next().slideDown(400)
}try{if($("body").hasClass("is-mobile")||$("body").hasClass("is-tablet")){setTimeout(function(){var g=$(".left-menu li>a.left-menu-expand").first().offset().top;
g=g+$(".left-menu").first().scrollTop();
$(".left-menu").animate({scrollTop:g},300)
},400)
}}catch(f){}});
$(".left-menu>h3>a").click(function(){$(".left-menu").offcanvas("hide")
});
(function(){var f=$(".left-menu .left-menu-selected-product");
if(f.is("span")===true){if(f.closest("ul").length>0){var d=$(f.closest("ul")[0]);
var g=d.prev();
if(!g.hasClass("left-menu-expand")){g.addClass("left-menu-expand");
d.show()
}}}})();
$(window).resize(function(){if(!$("body").hasClass("IE8")){var d=$("body");
if(d.hasClass("is-mobile")||d.hasClass("is-tablet")){$(".left-menu").addClass("navmenu navmenu-default offcanvas navmenu-fixed-left")
}else{$(".left-menu").removeClass("navmenu navmenu-default offcanvas navmenu-fixed-left");
$(".modal").hide()
}}});
$(".left-menu, .search-filter").on("show.bs.offcanvas",function(){if($(".connect-widget").hasClass("open")){$(".connect-widget .tab").first().click()
}$(".modal").show()
}).on("hide.bs.offcanvas",function(){$(".modal").hide()
})
}}
},{}],39:[function(b,c,a){c.exports={init:function(){$(".mobile-nav > ul > li > a.mobile-nav-closed").click(function(){var m=$(this);
var l=false;
$(".mobile-nav-open").each(function(){if($(this).is(m)){l=true
}$(this).next().slideUp(300);
$(this).addClass("mobile-nav-closed").removeClass("mobile-nav-open")
});
if(!l){m.next().slideDown(300);
m.addClass("mobile-nav-open").removeClass("mobile-nav-closed")
}});
$(".mobile-nav>.navmenu-close").click(function(){$(".nav-mobile-icon").click()
});
var h;
var g=0;
var k=5;
var f=$(".header-mobile").outerHeight();
$(window).scroll(function(l){h=true;
$(".header-mobile").css({position:"absolute"})
});
$(window).resize(function(){if(!$("body").hasClass("is-mobile")){$(".mobile-nav.canvas-slid").offcanvas("hide")
}});
setInterval(function(){if(h){d();
h=false
}},250);
function d(){var l=$(this).scrollTop();
if(Math.abs(g-l)<=k){return
}if(l>g&&l>f){}else{if(l+$(window).height()<$(document).height()){$(".header-mobile").removeClass("nav-up").slideDown(200)
}}g=l
}}}
},{}],41:[function(b,c,a){c.exports={init:function(){$("body").data("ignoreOnScroll",false);
if($.cookie("loginbox")&&$.cookie("loginbox")=="open"&&$(".home").length>0){$("body").data("ignoreOnScroll",true);
$(".sign-in-drop,.sign-in-triangle").slideDown(0);
$(".sign-in-div .button-red").css("background-color","#ebebeb").css("color","black");
$("#username").focus();
window.setTimeout(function(){$("body").data("ignoreOnScroll",false)
},500)
}$(".sign-in-div").children().click(function(){$.cookie("loginbox","open",{expires:7,path:"/"});
$("body").data("ignoreOnScroll",true);
window.scrollTo(0,0);
$(".sign-in-drop,.sign-in-triangle").slideDown(200);
$(".sign-in-div .button-red").css("background-color","#ebebeb").css("color","black");
$("#username").focus();
window.setTimeout(function(){$("body").data("ignoreOnScroll",false)
},500)
});
$(".sign-in-drop-close").click(function(){$.cookie("loginbox","close",{expires:7,path:"/"});
$(".sign-in-drop,.sign-in-triangle").slideUp(200);
$(".sign-in-div .button-red").css("background-color","").css("color","")
})
}}
},{}],42:[function(b,c,a){c.exports={init:function(){$(".sitting-header-underlay").height($(".sitting-header").height())
}}
},{}],43:[function(b,c,a){c.exports={init:function(){try{$(".product-detail-tabbed-content .title").click(function(){d($(this))
});
$(".product-detail-tabbed-content .title").focus(function(){d($(this))
});
function d(g){try{if(g.attr("class").indexOf("active-title")==-1){var l="#"+g.attr("id");
var h=g.attr("tabbed-content-target");
g.parents(".product-detail-tabbed-content").find(".title").removeClass("active-title");
$(g).addClass("active-title");
g.parents(".product-detail-tabbed-content").find(".tabbed-content").removeClass("active-tabbed-content");
g.parents(".product-detail-tabbed-content").find(h).addClass("active-tabbed-content")
}}catch(k){}}$(".question").click(function(){if($(this).attr("class").indexOf("collapsed")>-1){$(".question-answer .collapse.in").collapse("hide")
}});
$(".mobile-tabbed-content-title").click(function(h){try{var g=$(this);
var m=g.attr("data-target");
if(g.attr("class").indexOf("title-active")===-1){var l="#"+g.attr("id");
$(".tabbed-content.collapse.in").removeClass("in");
$(".mobile-tabbed-content-title").removeClass("title-active");
$(this).next(m).collapse("show");
$(this).next(m).addClass("in");
$(".header-mobile").hide();
$(".header").removeClass("header-mobile");
setTimeout(function(){$("html, body").animate({scrollTop:g.offset().top+2},200,function(){setTimeout(function(){$(".header").addClass("header-mobile")
},350)
})
},150)
}else{$($(this).next(m)).collapse("hide")
}}catch(k){$(".header").addClass("header-mobile")
}});
$(".question-answer").on("shown.bs.collapse",function(g){g.stopPropagation()
});
$(".question-answer").on("hidden.bs.collapse",function(g){g.stopPropagation()
});
$(".tabbed-content").on("shown.bs.collapse",function(){var g=$(this);
var h=$(this).attr("mobile-title");
$(this).prev("#"+h).addClass("title-active")
});
$(".tabbed-content").on("hidden.bs.collapse",function(){var g=$(this);
var h=$(this).attr("mobile-title");
$(this).prev("#"+h).removeClass("title-active")
})
}catch(f){}}}
},{}],44:[function(b,c,a){c.exports={init:function(){}}
},{}],45:[function(b,c,a){c.exports={init:function(){$(".thought-leadership-sort>div").click(function(){$(this).addClass("open");
return false
});
$(".thought-leadership-sort>div>div").not(":first-child").click(function(){if(!$(".thought-leadership-sort>div").hasClass("open")){return true
}$(this).parent().children().removeClass("selected");
$(this).addClass("selected");
$(".thought-leadership-sort>div").removeClass("open");
return false
});
$(document).mouseup(function(f){d(f)
});
$(document).bind("touchend",function(f){d(f)
});
function d(g){var f=$(".thought-leadership-sort>div");
if(!f.is(g.target)&&f.has(g.target).length===0){f.removeClass("open")
}}}}
},{}],46:[function(b,c,a){c.exports={init:function(){$(document).ready(function(){$(".category-1-blocks").each(function(){var f=d($(this).find(".half-block"));
$(this).find(".half-block").height(f)
})
});
function d(f){var g=-1;
f.each(function(){if($(this).height()>g){g=$(this).height()
}});
return g
}$(window).resize(function(){$(".category-1-blocks").each(function(){$(this).find(".half-block").height("");
if(!$("body").hasClass("is-mobile")){var f=d($(this).find(".half-block"));
$(this).find(".half-block").height(f)
}})
})
}}
},{}]},{},[1]);
relativeMasonry=function(c){try{var o=c.container;
var u=c.selector;
var d=o+" "+u;
$(d).css("margin-top","0px");
var b=$(d).css("width");
var h=$(o).css("width");
var l=0;
if(b.indexOf("px")){l=Math.floor(parseFloat(h)/parseFloat(b))
}var g=$(d).length/l;
for(var v=1;
v<g;
v++){for(var t=(v*l);
t<((v+1)*l);
t++){var f=$(d).eq(t).offset().top;
var p=$(d).eq(t).offset().left;
var n=0;
for(var s=t-1;
s>=0;
s--){if($(d).eq(s).offset().left===p){n=s;
break
}}var m=$(d).eq(n).offset().top;
var a=$(d).eq(n).height();
var q=parseFloat($(d).css("margin-bottom"));
var r=m-f+a+q;
$(d).eq(t).css("margin-top",r)
}}}catch(w){}};