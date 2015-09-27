/*!
 * jQuery JavaScript Library v1.9.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-1-14
 */
(function(a2,aF){var w,ai,l=a2.document,aL=a2.location,bi=a2.jQuery,H=a2.$,aa={},a6=[],s="1.9.0",aH=a6.concat,ao=a6.push,a4=a6.slice,aM=a6.indexOf,z=aa.toString,V=aa.hasOwnProperty,aQ=s.trim,bI=function(e,b1){return new bI.fn.init(e,b1,w)
},bz=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ac=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bp=/^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,a=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,bh=/^[\],:{}\s]*$/,bk=/(?:^|:|,)(?:\s*\[)+/g,bF=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,aZ=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,bR=/^-ms-/,aV=/-([\da-z])/gi,M=function(e,b1){return b1.toUpperCase()
},aI=function(){if(l.addEventListener){l.removeEventListener("DOMContentLoaded",aI,false);
bI.ready()}else{if(l.readyState==="complete"){l.detachEvent("onreadystatechange",aI);
bI.ready()}}};bI.fn=bI.prototype={jquery:s,constructor:bI,init:function(e,b3,b2){var b1,b4;
if(!e){return this}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){b1=[null,e,null]
}else{b1=bp.exec(e)}if(b1&&(b1[1]||!b3)){if(b1[1]){b3=b3 instanceof bI?b3[0]:b3;bI.merge(this,bI.parseHTML(b1[1],b3&&b3.nodeType?b3.ownerDocument||b3:l,true));
if(a.test(b1[1])&&bI.isPlainObject(b3)){for(b1 in b3){if(bI.isFunction(this[b1])){this[b1](b3[b1])
}else{this.attr(b1,b3[b1])}}}return this}else{b4=l.getElementById(b1[2]);if(b4&&b4.parentNode){if(b4.id!==b1[2]){return b2.find(e)
}this.length=1;this[0]=b4}this.context=l;this.selector=e;return this}}else{if(!b3||b3.jquery){return(b3||b2).find(e)
}else{return this.constructor(b3).find(e)}}}else{if(e.nodeType){this.context=this[0]=e;
this.length=1;return this}else{if(bI.isFunction(e)){return b2.ready(e)}}}if(e.selector!==aF){this.selector=e.selector;
this.context=e.context}return bI.makeArray(e,this)},selector:"",length:0,size:function(){return this.length
},toArray:function(){return a4.call(this)},get:function(e){return e==null?this.toArray():(e<0?this[this.length+e]:this[e])
},pushStack:function(e){var b1=bI.merge(this.constructor(),e);b1.prevObject=this;
b1.context=this.context;return b1},each:function(b1,e){return bI.each(this,b1,e)},ready:function(e){bI.ready.promise().done(e);
return this},slice:function(){return this.pushStack(a4.apply(this,arguments))},first:function(){return this.eq(0)
},last:function(){return this.eq(-1)},eq:function(b2){var e=this.length,b1=+b2+(b2<0?e:0);
return this.pushStack(b1>=0&&b1<e?[this[b1]]:[])},map:function(e){return this.pushStack(bI.map(this,function(b2,b1){return e.call(b2,b1,b2)
}))},end:function(){return this.prevObject||this.constructor(null)},push:ao,sort:[].sort,splice:[].splice};
bI.fn.init.prototype=bI.fn;bI.extend=bI.fn.extend=function(){var b9,b2,e,b1,b6,b7,b5=arguments[0]||{},b4=1,b3=arguments.length,b8=false;
if(typeof b5==="boolean"){b8=b5;b5=arguments[1]||{};b4=2}if(typeof b5!=="object"&&!bI.isFunction(b5)){b5={}
}if(b3===b4){b5=this;--b4}for(;b4<b3;b4++){if((b9=arguments[b4])!=null){for(b2 in b9){e=b5[b2];
b1=b9[b2];if(b5===b1){continue}if(b8&&b1&&(bI.isPlainObject(b1)||(b6=bI.isArray(b1)))){if(b6){b6=false;
b7=e&&bI.isArray(e)?e:[]}else{b7=e&&bI.isPlainObject(e)?e:{}}b5[b2]=bI.extend(b8,b7,b1)
}else{if(b1!==aF){b5[b2]=b1}}}}}return b5};bI.extend({noConflict:function(e){if(a2.$===bI){a2.$=H
}if(e&&a2.jQuery===bI){a2.jQuery=bi}return bI},isReady:false,readyWait:1,holdReady:function(e){if(e){bI.readyWait++
}else{bI.ready(true)}},ready:function(e){if(e===true?--bI.readyWait:bI.isReady){return
}if(!l.body){return setTimeout(bI.ready)}bI.isReady=true;if(e!==true&&--bI.readyWait>0){return
}ai.resolveWith(l,[bI]);if(bI.fn.trigger){bI(l).trigger("ready").off("ready")}},isFunction:function(e){return bI.type(e)==="function"
},isArray:Array.isArray||function(e){return bI.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window
},isNumeric:function(e){return !isNaN(parseFloat(e))&&isFinite(e)},type:function(e){if(e==null){return String(e)
}return typeof e==="object"||typeof e==="function"?aa[z.call(e)]||"object":typeof e
},isPlainObject:function(b3){if(!b3||bI.type(b3)!=="object"||b3.nodeType||bI.isWindow(b3)){return false
}try{if(b3.constructor&&!V.call(b3,"constructor")&&!V.call(b3.constructor.prototype,"isPrototypeOf")){return false
}}catch(b2){return false}var b1;for(b1 in b3){}return b1===aF||V.call(b3,b1)},isEmptyObject:function(b1){var e;
for(e in b1){return false}return true},error:function(e){throw new Error(e)},parseHTML:function(b4,b2,b3){if(!b4||typeof b4!=="string"){return null
}if(typeof b2==="boolean"){b3=b2;b2=false}b2=b2||l;var b1=a.exec(b4),e=!b3&&[];if(b1){return[b2.createElement(b1[1])]
}b1=bI.buildFragment([b4],b2,e);if(e){bI(e).remove()}return bI.merge([],b1.childNodes)
},parseJSON:function(e){if(a2.JSON&&a2.JSON.parse){return a2.JSON.parse(e)}if(e===null){return e
}if(typeof e==="string"){e=bI.trim(e);if(e){if(bh.test(e.replace(bF,"@").replace(aZ,"]").replace(bk,""))){return(new Function("return "+e))()
}}}bI.error("Invalid JSON: "+e)},parseXML:function(b3){var b1,b2;if(!b3||typeof b3!=="string"){return null
}try{if(a2.DOMParser){b2=new DOMParser();b1=b2.parseFromString(b3,"text/xml")}else{b1=new ActiveXObject("Microsoft.XMLDOM");
b1.async="false";b1.loadXML(b3)}}catch(b4){b1=aF}if(!b1||!b1.documentElement||b1.getElementsByTagName("parsererror").length){bI.error("Invalid XML: "+b3)
}return b1},noop:function(){},globalEval:function(e){if(e&&bI.trim(e)){(a2.execScript||function(b1){a2["eval"].call(a2,b1)
})(e)}},camelCase:function(e){return e.replace(bR,"ms-").replace(aV,M)},nodeName:function(b1,e){return b1.nodeName&&b1.nodeName.toLowerCase()===e.toLowerCase()
},each:function(b5,b6,b1){var b4,b2=0,b3=b5.length,e=ab(b5);if(b1){if(e){for(;b2<b3;
b2++){b4=b6.apply(b5[b2],b1);if(b4===false){break}}}else{for(b2 in b5){b4=b6.apply(b5[b2],b1);
if(b4===false){break}}}}else{if(e){for(;b2<b3;b2++){b4=b6.call(b5[b2],b2,b5[b2]);
if(b4===false){break}}}else{for(b2 in b5){b4=b6.call(b5[b2],b2,b5[b2]);if(b4===false){break
}}}}return b5},trim:aQ&&!aQ.call("\uFEFF\xA0")?function(e){return e==null?"":aQ.call(e)
}:function(e){return e==null?"":(e+"").replace(C,"")},makeArray:function(e,b2){var b1=b2||[];
if(e!=null){if(ab(Object(e))){bI.merge(b1,typeof e==="string"?[e]:e)}else{ao.call(b1,e)
}}return b1},inArray:function(b3,b1,b2){var e;if(b1){if(aM){return aM.call(b1,b3,b2)
}e=b1.length;b2=b2?b2<0?Math.max(0,e+b2):b2:0;for(;b2<e;b2++){if(b2 in b1&&b1[b2]===b3){return b2
}}}return -1},merge:function(b4,b2){var e=b2.length,b3=b4.length,b1=0;if(typeof e==="number"){for(;
b1<e;b1++){b4[b3++]=b2[b1]}}else{while(b2[b1]!==aF){b4[b3++]=b2[b1++]}}b4.length=b3;
return b4},grep:function(b1,b6,e){var b5,b2=[],b3=0,b4=b1.length;e=!!e;for(;b3<b4;
b3++){b5=!!b6(b1[b3],b3);if(e!==b5){b2.push(b1[b3])}}return b2},map:function(b2,b7,e){var b6,b4=0,b5=b2.length,b1=ab(b2),b3=[];
if(b1){for(;b4<b5;b4++){b6=b7(b2[b4],b4,e);if(b6!=null){b3[b3.length]=b6}}}else{for(b4 in b2){b6=b7(b2[b4],b4,e);
if(b6!=null){b3[b3.length]=b6}}}return aH.apply([],b3)},guid:1,proxy:function(b4,b3){var b2,e,b1;
if(typeof b3==="string"){b2=b4[b3];b3=b4;b4=b2}if(!bI.isFunction(b4)){return aF}e=a4.call(arguments,2);
b1=function(){return b4.apply(b3||this,e.concat(a4.call(arguments)))};b1.guid=b4.guid=b4.guid||bI.guid++;
return b1},access:function(e,b5,b7,b6,b3,b9,b8){var b2=0,b1=e.length,b4=b7==null;
if(bI.type(b7)==="object"){b3=true;for(b2 in b7){bI.access(e,b5,b2,b7[b2],true,b9,b8)
}}else{if(b6!==aF){b3=true;if(!bI.isFunction(b6)){b8=true}if(b4){if(b8){b5.call(e,b6);
b5=null}else{b4=b5;b5=function(cb,ca,cc){return b4.call(bI(cb),cc)}}}if(b5){for(;
b2<b1;b2++){b5(e[b2],b7,b8?b6:b6.call(e[b2],b2,b5(e[b2],b7)))}}}}return b3?e:b4?b5.call(e):b1?b5(e[0],b7):b9
},now:function(){return(new Date()).getTime()}});bI.ready.promise=function(b4){if(!ai){ai=bI.Deferred();
if(l.readyState==="complete"){setTimeout(bI.ready)}else{if(l.addEventListener){l.addEventListener("DOMContentLoaded",aI,false);
a2.addEventListener("load",bI.ready,false)}else{l.attachEvent("onreadystatechange",aI);
a2.attachEvent("onload",bI.ready);var b3=false;try{b3=a2.frameElement==null&&l.documentElement
}catch(b2){}if(b3&&b3.doScroll){(function b1(){if(!bI.isReady){try{b3.doScroll("left")
}catch(b5){return setTimeout(b1,50)}bI.ready()}})()}}}}return ai.promise(b4)};bI.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(b1,e){aa["[object "+e+"]"]=e.toLowerCase()
});function ab(b2){var b1=b2.length,e=bI.type(b2);if(bI.isWindow(b2)){return false
}if(b2.nodeType===1&&b1){return true}return e==="array"||e!=="function"&&(b1===0||typeof b1==="number"&&b1>0&&(b1-1) in b2)
}w=bI(l);var bW={};function ae(b1){var e=bW[b1]={};bI.each(b1.match(ac)||[],function(b3,b2){e[b2]=true
});return e}bI.Callbacks=function(ca){ca=typeof ca==="string"?(bW[ca]||ae(ca)):bI.extend({},ca);
var b3,e,b4,b2,b5,b6,b7=[],b8=!ca.once&&[],b1=function(cb){b3=ca.memory&&cb;e=true;
b6=b2||0;b2=0;b5=b7.length;b4=true;for(;b7&&b6<b5;b6++){if(b7[b6].apply(cb[0],cb[1])===false&&ca.stopOnFalse){b3=false;
break}}b4=false;if(b7){if(b8){if(b8.length){b1(b8.shift())}}else{if(b3){b7=[]}else{b9.disable()
}}}},b9={add:function(){if(b7){var cc=b7.length;(function cb(cd){bI.each(cd,function(cf,ce){var cg=bI.type(ce);
if(cg==="function"){if(!ca.unique||!b9.has(ce)){b7.push(ce)}}else{if(ce&&ce.length&&cg!=="string"){cb(ce)
}}})})(arguments);if(b4){b5=b7.length}else{if(b3){b2=cc;b1(b3)}}}return this},remove:function(){if(b7){bI.each(arguments,function(cd,cb){var cc;
while((cc=bI.inArray(cb,b7,cc))>-1){b7.splice(cc,1);if(b4){if(cc<=b5){b5--}if(cc<=b6){b6--
}}}})}return this},has:function(cb){return bI.inArray(cb,b7)>-1},empty:function(){b7=[];
return this},disable:function(){b7=b8=b3=aF;return this},disabled:function(){return !b7
},lock:function(){b8=aF;if(!b3){b9.disable()}return this},locked:function(){return !b8
},fireWith:function(cc,cb){cb=cb||[];cb=[cc,cb.slice?cb.slice():cb];if(b7&&(!e||b8)){if(b4){b8.push(cb)
}else{b1(cb)}}return this},fire:function(){b9.fireWith(this,arguments);return this
},fired:function(){return !!e}};return b9};bI.extend({Deferred:function(b2){var b1=[["resolve","done",bI.Callbacks("once memory"),"resolved"],["reject","fail",bI.Callbacks("once memory"),"rejected"],["notify","progress",bI.Callbacks("memory")]],b3="pending",b4={state:function(){return b3
},always:function(){e.done(arguments).fail(arguments);return this},then:function(){var b5=arguments;
return bI.Deferred(function(b6){bI.each(b1,function(b8,b7){var ca=b7[0],b9=bI.isFunction(b5[b8])&&b5[b8];
e[b7[1]](function(){var cb=b9&&b9.apply(this,arguments);if(cb&&bI.isFunction(cb.promise)){cb.promise().done(b6.resolve).fail(b6.reject).progress(b6.notify)
}else{b6[ca+"With"](this===b4?b6.promise():this,b9?[cb]:arguments)}})});b5=null}).promise()
},promise:function(b5){return b5!=null?bI.extend(b5,b4):b4}},e={};b4.pipe=b4.then;
bI.each(b1,function(b6,b5){var b8=b5[2],b7=b5[3];b4[b5[1]]=b8.add;if(b7){b8.add(function(){b3=b7
},b1[b6^1][2].disable,b1[2][2].lock)}e[b5[0]]=function(){e[b5[0]+"With"](this===e?b4:this,arguments);
return this};e[b5[0]+"With"]=b8.fireWith});b4.promise(e);if(b2){b2.call(e,e)}return e
},when:function(b4){var b2=0,b6=a4.call(arguments),e=b6.length,b1=e!==1||(b4&&bI.isFunction(b4.promise))?e:0,b9=b1===1?b4:bI.Deferred(),b3=function(cb,cc,ca){return function(cd){cc[cb]=this;
ca[cb]=arguments.length>1?a4.call(arguments):cd;if(ca===b8){b9.notifyWith(cc,ca)}else{if(!(--b1)){b9.resolveWith(cc,ca)
}}}},b8,b5,b7;if(e>1){b8=new Array(e);b5=new Array(e);b7=new Array(e);for(;b2<e;b2++){if(b6[b2]&&bI.isFunction(b6[b2].promise)){b6[b2].promise().done(b3(b2,b7,b6)).fail(b9.reject).progress(b3(b2,b5,b8))
}else{--b1}}}if(!b1){b9.resolveWith(b7,b6)}return b9.promise()}});bI.support=(function(){var cc,cb,b9,ca,b3,b8,b7,b5,b2,b4,b1=l.createElement("div");
b1.setAttribute("className","t");b1.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
cb=b1.getElementsByTagName("*");b9=b1.getElementsByTagName("a")[0];if(!cb||!b9||!cb.length){return{}
}ca=l.createElement("select");b3=ca.appendChild(l.createElement("option"));b8=b1.getElementsByTagName("input")[0];
b9.style.cssText="top:1px;float:left;opacity:.5";cc={getSetAttribute:b1.className!=="t",leadingWhitespace:b1.firstChild.nodeType===3,tbody:!b1.getElementsByTagName("tbody").length,htmlSerialize:!!b1.getElementsByTagName("link").length,style:/top/.test(b9.getAttribute("style")),hrefNormalized:b9.getAttribute("href")==="/a",opacity:/^0.5/.test(b9.style.opacity),cssFloat:!!b9.style.cssFloat,checkOn:!!b8.value,optSelected:b3.selected,enctype:!!l.createElement("form").enctype,html5Clone:l.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:l.compatMode==="CSS1Compat",deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};
b8.checked=true;cc.noCloneChecked=b8.cloneNode(true).checked;ca.disabled=true;cc.optDisabled=!b3.disabled;
try{delete b1.test}catch(b6){cc.deleteExpando=false}b8=l.createElement("input");b8.setAttribute("value","");
cc.input=b8.getAttribute("value")==="";b8.value="t";b8.setAttribute("type","radio");
cc.radioValue=b8.value==="t";b8.setAttribute("checked","t");b8.setAttribute("name","t");
b7=l.createDocumentFragment();b7.appendChild(b8);cc.appendChecked=b8.checked;cc.checkClone=b7.cloneNode(true).cloneNode(true).lastChild.checked;
if(b1.attachEvent){b1.attachEvent("onclick",function(){cc.noCloneEvent=false});b1.cloneNode(true).click()
}for(b4 in {submit:true,change:true,focusin:true}){b1.setAttribute(b5="on"+b4,"t");
cc[b4+"Bubbles"]=b5 in a2||b1.attributes[b5].expando===false}b1.style.backgroundClip="content-box";
b1.cloneNode(true).style.backgroundClip="";cc.clearCloneStyle=b1.style.backgroundClip==="content-box";
bI(function(){var cd,cg,cf,ce="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",e=l.getElementsByTagName("body")[0];
if(!e){return}cd=l.createElement("div");cd.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";
e.appendChild(cd).appendChild(b1);b1.innerHTML="<table><tr><td></td><td>t</td></tr></table>";
cf=b1.getElementsByTagName("td");cf[0].style.cssText="padding:0;margin:0;border:0;display:none";
b2=(cf[0].offsetHeight===0);cf[0].style.display="";cf[1].style.display="none";cc.reliableHiddenOffsets=b2&&(cf[0].offsetHeight===0);
b1.innerHTML="";b1.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
cc.boxSizing=(b1.offsetWidth===4);cc.doesNotIncludeMarginInBodyOffset=(e.offsetTop!==1);
if(a2.getComputedStyle){cc.pixelPosition=(a2.getComputedStyle(b1,null)||{}).top!=="1%";
cc.boxSizingReliable=(a2.getComputedStyle(b1,null)||{width:"4px"}).width==="4px";
cg=b1.appendChild(l.createElement("div"));cg.style.cssText=b1.style.cssText=ce;cg.style.marginRight=cg.style.width="0";
b1.style.width="1px";cc.reliableMarginRight=!parseFloat((a2.getComputedStyle(cg,null)||{}).marginRight)
}if(typeof b1.style.zoom!=="undefined"){b1.innerHTML="";b1.style.cssText=ce+"width:1px;padding:1px;display:inline;zoom:1";
cc.inlineBlockNeedsLayout=(b1.offsetWidth===3);b1.style.display="block";b1.innerHTML="<div></div>";
b1.firstChild.style.width="5px";cc.shrinkWrapBlocks=(b1.offsetWidth!==3);e.style.zoom=1
}e.removeChild(cd);cd=b1=cf=cg=null});cb=ca=b7=b3=b9=b8=null;return cc})();var bv=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,aN=/([A-Z])/g;
function ba(b3,b1,b5,b4){if(!bI.acceptData(b3)){return}var b6,b8,b9=bI.expando,b7=typeof b1==="string",ca=b3.nodeType,e=ca?bI.cache:b3,b2=ca?b3[b9]:b3[b9]&&b9;
if((!b2||!e[b2]||(!b4&&!e[b2].data))&&b7&&b5===aF){return}if(!b2){if(ca){b3[b9]=b2=a6.pop()||bI.guid++
}else{b2=b9}}if(!e[b2]){e[b2]={};if(!ca){e[b2].toJSON=bI.noop}}if(typeof b1==="object"||typeof b1==="function"){if(b4){e[b2]=bI.extend(e[b2],b1)
}else{e[b2].data=bI.extend(e[b2].data,b1)}}b6=e[b2];if(!b4){if(!b6.data){b6.data={}
}b6=b6.data}if(b5!==aF){b6[bI.camelCase(b1)]=b5}if(b7){b8=b6[b1];if(b8==null){b8=b6[bI.camelCase(b1)]
}}else{b8=b6}return b8}function Z(b3,b1,b4){if(!bI.acceptData(b3)){return}var b7,b6,b5,b8=b3.nodeType,e=b8?bI.cache:b3,b2=b8?b3[bI.expando]:bI.expando;
if(!e[b2]){return}if(b1){b7=b4?e[b2]:e[b2].data;if(b7){if(!bI.isArray(b1)){if(b1 in b7){b1=[b1]
}else{b1=bI.camelCase(b1);if(b1 in b7){b1=[b1]}else{b1=b1.split(" ")}}}else{b1=b1.concat(bI.map(b1,bI.camelCase))
}for(b6=0,b5=b1.length;b6<b5;b6++){delete b7[b1[b6]]}if(!(b4?N:bI.isEmptyObject)(b7)){return
}}}if(!b4){delete e[b2].data;if(!N(e[b2])){return}}if(b8){bI.cleanData([b3],true)
}else{if(bI.support.deleteExpando||e!=e.window){delete e[b2]}else{e[b2]=null}}}bI.extend({cache:{},expando:"jQuery"+(s+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?bI.cache[e[bI.expando]]:e[bI.expando];
return !!e&&!N(e)},data:function(b1,e,b2){return ba(b1,e,b2,false)},removeData:function(b1,e){return Z(b1,e,false)
},_data:function(b1,e,b2){return ba(b1,e,b2,true)},_removeData:function(b1,e){return Z(b1,e,true)
},acceptData:function(b1){var e=b1.nodeName&&bI.noData[b1.nodeName.toLowerCase()];
return !e||e!==true&&b1.getAttribute("classid")===e}});bI.fn.extend({data:function(b3,b6){var b1,e,b4=this[0],b2=0,b5=null;
if(b3===aF){if(this.length){b5=bI.data(b4);if(b4.nodeType===1&&!bI._data(b4,"parsedAttrs")){b1=b4.attributes;
for(;b2<b1.length;b2++){e=b1[b2].name;if(!e.indexOf("data-")){e=bI.camelCase(e.substring(5));
bx(b4,e,b5[e])}}bI._data(b4,"parsedAttrs",true)}}return b5}if(typeof b3==="object"){return this.each(function(){bI.data(this,b3)
})}return bI.access(this,function(b7){if(b7===aF){return b4?bx(b4,b3,bI.data(b4,b3)):null
}this.each(function(){bI.data(this,b3,b7)})},null,b6,arguments.length>1,null,true)
},removeData:function(e){return this.each(function(){bI.removeData(this,e)})}});function bx(b3,b2,b4){if(b4===aF&&b3.nodeType===1){var b1="data-"+b2.replace(aN,"-$1").toLowerCase();
b4=b3.getAttribute(b1);if(typeof b4==="string"){try{b4=b4==="true"?true:b4==="false"?false:b4==="null"?null:+b4+""===b4?+b4:bv.test(b4)?bI.parseJSON(b4):b4
}catch(b5){}bI.data(b3,b2,b4)}else{b4=aF}}return b4}function N(b1){var e;for(e in b1){if(e==="data"&&bI.isEmptyObject(b1[e])){continue
}if(e!=="toJSON"){return false}}return true}bI.extend({queue:function(b2,b1,b3){var e;
if(b2){b1=(b1||"fx")+"queue";e=bI._data(b2,b1);if(b3){if(!e||bI.isArray(b3)){e=bI._data(b2,b1,bI.makeArray(b3))
}else{e.push(b3)}}return e||[]}},dequeue:function(b5,b4){b4=b4||"fx";var b1=bI.queue(b5,b4),b6=b1.length,b3=b1.shift(),e=bI._queueHooks(b5,b4),b2=function(){bI.dequeue(b5,b4)
};if(b3==="inprogress"){b3=b1.shift();b6--}e.cur=b3;if(b3){if(b4==="fx"){b1.unshift("inprogress")
}delete e.stop;b3.call(b5,b2,e)}if(!b6&&e){e.empty.fire()}},_queueHooks:function(b2,b1){var e=b1+"queueHooks";
return bI._data(b2,e)||bI._data(b2,e,{empty:bI.Callbacks("once memory").add(function(){bI._removeData(b2,b1+"queue");
bI._removeData(b2,e)})})}});bI.fn.extend({queue:function(e,b1){var b2=2;if(typeof e!=="string"){b1=e;
e="fx";b2--}if(arguments.length<b2){return bI.queue(this[0],e)}return b1===aF?this:this.each(function(){var b3=bI.queue(this,e,b1);
bI._queueHooks(this,e);if(e==="fx"&&b3[0]!=="inprogress"){bI.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){bI.dequeue(this,e)
})},delay:function(b1,e){b1=bI.fx?bI.fx.speeds[b1]||b1:b1;e=e||"fx";return this.queue(e,function(b3,b2){var b4=setTimeout(b3,b1);
b2.stop=function(){clearTimeout(b4)}})},clearQueue:function(e){return this.queue(e||"fx",[])
},promise:function(b2,b6){var b1,b3=1,b7=bI.Deferred(),b5=this,e=this.length,b4=function(){if(!(--b3)){b7.resolveWith(b5,[b5])
}};if(typeof b2!=="string"){b6=b2;b2=aF}b2=b2||"fx";while(e--){b1=bI._data(b5[e],b2+"queueHooks");
if(b1&&b1.empty){b3++;b1.empty.add(b4)}}b4();return b7.promise(b6)}});var a8,bX,bL=/[\t\r\n]/g,ak=/\r/g,aE=/^(?:input|select|textarea|button|object)$/i,D=/^(?:a|area)$/i,L=/^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,aq=/^(?:checked|selected)$/i,bO=bI.support.getSetAttribute,bE=bI.support.input;
bI.fn.extend({attr:function(e,b1){return bI.access(this,bI.attr,e,b1,arguments.length>1)
},removeAttr:function(e){return this.each(function(){bI.removeAttr(this,e)})},prop:function(e,b1){return bI.access(this,bI.prop,e,b1,arguments.length>1)
},removeProp:function(e){e=bI.propFix[e]||e;return this.each(function(){try{this[e]=aF;
delete this[e]}catch(b1){}})},addClass:function(b7){var b1,e,b8,b4,b2,b3=0,b5=this.length,b6=typeof b7==="string"&&b7;
if(bI.isFunction(b7)){return this.each(function(b9){bI(this).addClass(b7.call(this,b9,this.className))
})}if(b6){b1=(b7||"").match(ac)||[];for(;b3<b5;b3++){e=this[b3];b8=e.nodeType===1&&(e.className?(" "+e.className+" ").replace(bL," "):" ");
if(b8){b2=0;while((b4=b1[b2++])){if(b8.indexOf(" "+b4+" ")<0){b8+=b4+" "}}e.className=bI.trim(b8)
}}}return this},removeClass:function(b7){var b1,e,b8,b4,b2,b3=0,b5=this.length,b6=arguments.length===0||typeof b7==="string"&&b7;
if(bI.isFunction(b7)){return this.each(function(b9){bI(this).removeClass(b7.call(this,b9,this.className))
})}if(b6){b1=(b7||"").match(ac)||[];for(;b3<b5;b3++){e=this[b3];b8=e.nodeType===1&&(e.className?(" "+e.className+" ").replace(bL," "):"");
if(b8){b2=0;while((b4=b1[b2++])){while(b8.indexOf(" "+b4+" ")>=0){b8=b8.replace(" "+b4+" "," ")
}}e.className=b7?bI.trim(b8):""}}}return this},toggleClass:function(b3,b1){var b2=typeof b3,e=typeof b1==="boolean";
if(bI.isFunction(b3)){return this.each(function(b4){bI(this).toggleClass(b3.call(this,b4,this.className,b1),b1)
})}return this.each(function(){if(b2==="string"){var b6,b5=0,b4=bI(this),b7=b1,b8=b3.match(ac)||[];
while((b6=b8[b5++])){b7=e?b7:!b4.hasClass(b6);b4[b7?"addClass":"removeClass"](b6)
}}else{if(b2==="undefined"||b2==="boolean"){if(this.className){bI._data(this,"__className__",this.className)
}this.className=this.className||b3===false?"":bI._data(this,"__className__")||""}}})
},hasClass:function(e){var b3=" "+e+" ",b2=0,b1=this.length;for(;b2<b1;b2++){if(this[b2].nodeType===1&&(" "+this[b2].className+" ").replace(bL," ").indexOf(b3)>=0){return true
}}return false},val:function(b3){var e,b1,b4,b2=this[0];if(!arguments.length){if(b2){e=bI.valHooks[b2.type]||bI.valHooks[b2.nodeName.toLowerCase()];
if(e&&"get" in e&&(b1=e.get(b2,"value"))!==aF){return b1}b1=b2.value;return typeof b1==="string"?b1.replace(ak,""):b1==null?"":b1
}return}b4=bI.isFunction(b3);return this.each(function(b6){var b7,b5=bI(this);if(this.nodeType!==1){return
}if(b4){b7=b3.call(this,b6,b5.val())}else{b7=b3}if(b7==null){b7=""}else{if(typeof b7==="number"){b7+=""
}else{if(bI.isArray(b7)){b7=bI.map(b7,function(b8){return b8==null?"":b8+""})}}}e=bI.valHooks[this.type]||bI.valHooks[this.nodeName.toLowerCase()];
if(!e||!("set" in e)||e.set(this,b7,"value")===aF){this.value=b7}})}});bI.extend({valHooks:{option:{get:function(e){var b1=e.attributes.value;
return !b1||b1.specified?e.value:e.text}},select:{get:function(e){var b6,b2,b8=e.options,b4=e.selectedIndex,b3=e.type==="select-one"||b4<0,b7=b3?null:[],b5=b3?b4+1:b8.length,b1=b4<0?b5:b3?b4:0;
for(;b1<b5;b1++){b2=b8[b1];if((b2.selected||b1===b4)&&(bI.support.optDisabled?!b2.disabled:b2.getAttribute("disabled")===null)&&(!b2.parentNode.disabled||!bI.nodeName(b2.parentNode,"optgroup"))){b6=bI(b2).val();
if(b3){return b6}b7.push(b6)}}return b7},set:function(b1,b2){var e=bI.makeArray(b2);
bI(b1).find("option").each(function(){this.selected=bI.inArray(bI(this).val(),e)>=0
});if(!e.length){b1.selectedIndex=-1}return e}}},attr:function(b5,b3,b6){var b2,e,b4,b1=b5.nodeType;
if(!b5||b1===3||b1===8||b1===2){return}if(typeof b5.getAttribute==="undefined"){return bI.prop(b5,b3,b6)
}b4=b1!==1||!bI.isXMLDoc(b5);if(b4){b3=b3.toLowerCase();e=bI.attrHooks[b3]||(L.test(b3)?bX:a8)
}if(b6!==aF){if(b6===null){bI.removeAttr(b5,b3)}else{if(e&&b4&&"set" in e&&(b2=e.set(b5,b6,b3))!==aF){return b2
}else{b5.setAttribute(b3,b6+"");return b6}}}else{if(e&&b4&&"get" in e&&(b2=e.get(b5,b3))!==null){return b2
}else{if(typeof b5.getAttribute!=="undefined"){b2=b5.getAttribute(b3)}return b2==null?aF:b2
}}},removeAttr:function(b2,b4){var e,b3,b1=0,b5=b4&&b4.match(ac);if(b5&&b2.nodeType===1){while((e=b5[b1++])){b3=bI.propFix[e]||e;
if(L.test(e)){if(!bO&&aq.test(e)){b2[bI.camelCase("default-"+e)]=b2[b3]=false}else{b2[b3]=false
}}else{bI.attr(b2,e,"")}b2.removeAttribute(bO?e:b3)}}},attrHooks:{type:{set:function(e,b1){if(!bI.support.radioValue&&b1==="radio"&&bI.nodeName(e,"input")){var b2=e.value;
e.setAttribute("type",b1);if(b2){e.value=b2}return b1}}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(b5,b3,b6){var b2,e,b4,b1=b5.nodeType;
if(!b5||b1===3||b1===8||b1===2){return}b4=b1!==1||!bI.isXMLDoc(b5);if(b4){b3=bI.propFix[b3]||b3;
e=bI.propHooks[b3]}if(b6!==aF){if(e&&"set" in e&&(b2=e.set(b5,b6,b3))!==aF){return b2
}else{return(b5[b3]=b6)}}else{if(e&&"get" in e&&(b2=e.get(b5,b3))!==null){return b2
}else{return b5[b3]}}},propHooks:{tabIndex:{get:function(b1){var e=b1.getAttributeNode("tabindex");
return e&&e.specified?parseInt(e.value,10):aE.test(b1.nodeName)||D.test(b1.nodeName)&&b1.href?0:aF
}}}});bX={get:function(b3,b1){var b4=bI.prop(b3,b1),e=typeof b4==="boolean"&&b3.getAttribute(b1),b2=typeof b4==="boolean"?bE&&bO?e!=null:aq.test(b1)?b3[bI.camelCase("default-"+b1)]:!!e:b3.getAttributeNode(b1);
return b2&&b2.value!==false?b1.toLowerCase():aF},set:function(b1,b2,e){if(b2===false){bI.removeAttr(b1,e)
}else{if(bE&&bO||!aq.test(e)){b1.setAttribute(!bO&&bI.propFix[e]||e,e)}else{b1[bI.camelCase("default-"+e)]=b1[e]=true
}}return e}};if(!bE||!bO){bI.attrHooks.value={get:function(b2,b1){var e=b2.getAttributeNode(b1);
return bI.nodeName(b2,"input")?b2.defaultValue:e&&e.specified?e.value:aF},set:function(b1,b2,e){if(bI.nodeName(b1,"input")){b1.defaultValue=b2
}else{return a8&&a8.set(b1,b2,e)}}}}if(!bO){a8=bI.valHooks.button={get:function(b2,b1){var e=b2.getAttributeNode(b1);
return e&&(b1==="id"||b1==="name"||b1==="coords"?e.value!=="":e.specified)?e.value:aF
},set:function(b2,b3,b1){var e=b2.getAttributeNode(b1);if(!e){b2.setAttributeNode((e=b2.ownerDocument.createAttribute(b1)))
}e.value=b3+="";return b1==="value"||b3===b2.getAttribute(b1)?b3:aF}};bI.attrHooks.contenteditable={get:a8.get,set:function(b1,b2,e){a8.set(b1,b2===""?false:b2,e)
}};bI.each(["width","height"],function(b1,e){bI.attrHooks[e]=bI.extend(bI.attrHooks[e],{set:function(b2,b3){if(b3===""){b2.setAttribute(e,"auto");
return b3}}})})}if(!bI.support.hrefNormalized){bI.each(["href","src","width","height"],function(b1,e){bI.attrHooks[e]=bI.extend(bI.attrHooks[e],{get:function(b3){var b2=b3.getAttribute(e,2);
return b2==null?aF:b2}})});bI.each(["href","src"],function(b1,e){bI.propHooks[e]={get:function(b2){return b2.getAttribute(e,4)
}}})}if(!bI.support.style){bI.attrHooks.style={get:function(e){return e.style.cssText||aF
},set:function(e,b1){return(e.style.cssText=b1+"")}}}if(!bI.support.optSelected){bI.propHooks.selected=bI.extend(bI.propHooks.selected,{get:function(b1){var e=b1.parentNode;
if(e){e.selectedIndex;if(e.parentNode){e.parentNode.selectedIndex}}return null}})
}if(!bI.support.enctype){bI.propFix.enctype="encoding"}if(!bI.support.checkOn){bI.each(["radio","checkbox"],function(){bI.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value
}}})}bI.each(["radio","checkbox"],function(){bI.valHooks[this]=bI.extend(bI.valHooks[this],{set:function(e,b1){if(bI.isArray(b1)){return(e.checked=bI.inArray(bI(e).val(),b1)>=0)
}}})});var bG=/^(?:input|select|textarea)$/i,a3=/^key/,bM=/^(?:mouse|contextmenu)|click/,bA=/^(?:focusinfocus|focusoutblur)$/,bt=/^([^.]*)(?:\.(.+)|)$/;
function R(){return true}function X(){return false}bI.event={global:{},add:function(b4,b9,cg,b6,b5){var b2,b8,b7,cf,ce,cd,cb,b3,cc,e,b1,ca=b4.nodeType!==3&&b4.nodeType!==8&&bI._data(b4);
if(!ca){return}if(cg.handler){b2=cg;cg=b2.handler;b5=b2.selector}if(!cg.guid){cg.guid=bI.guid++
}if(!(cf=ca.events)){cf=ca.events={}}if(!(b8=ca.handle)){b8=ca.handle=function(ch){return typeof bI!=="undefined"&&(!ch||bI.event.triggered!==ch.type)?bI.event.dispatch.apply(b8.elem,arguments):aF
};b8.elem=b4}b9=(b9||"").match(ac)||[""];ce=b9.length;while(ce--){b7=bt.exec(b9[ce])||[];
cc=b1=b7[1];e=(b7[2]||"").split(".").sort();cb=bI.event.special[cc]||{};cc=(b5?cb.delegateType:cb.bindType)||cc;
cb=bI.event.special[cc]||{};cd=bI.extend({type:cc,origType:b1,data:b6,handler:cg,guid:cg.guid,selector:b5,needsContext:b5&&bI.expr.match.needsContext.test(b5),namespace:e.join(".")},b2);
if(!(b3=cf[cc])){b3=cf[cc]=[];b3.delegateCount=0;if(!cb.setup||cb.setup.call(b4,b6,e,b8)===false){if(b4.addEventListener){b4.addEventListener(cc,b8,false)
}else{if(b4.attachEvent){b4.attachEvent("on"+cc,b8)}}}}if(cb.add){cb.add.call(b4,cd);
if(!cd.handler.guid){cd.handler.guid=cg.guid}}if(b5){b3.splice(b3.delegateCount++,0,cd)
}else{b3.push(cd)}bI.event.global[cc]=true}b4=null},remove:function(b3,b9,cg,b4,b8){var b6,b5,b7,cf,ce,cd,cb,b2,cc,e,b1,ca=bI.hasData(b3)&&bI._data(b3);
if(!ca||!(cf=ca.events)){return}b9=(b9||"").match(ac)||[""];ce=b9.length;while(ce--){b7=bt.exec(b9[ce])||[];
cc=b1=b7[1];e=(b7[2]||"").split(".").sort();if(!cc){for(cc in cf){bI.event.remove(b3,cc+b9[ce],cg,b4,true)
}continue}cb=bI.event.special[cc]||{};cc=(b4?cb.delegateType:cb.bindType)||cc;b2=cf[cc]||[];
b7=b7[2]&&new RegExp("(^|\\.)"+e.join("\\.(?:.*\\.|)")+"(\\.|$)");b5=b6=b2.length;
while(b6--){cd=b2[b6];if((b8||b1===cd.origType)&&(!cg||cg.guid===cd.guid)&&(!b7||b7.test(cd.namespace))&&(!b4||b4===cd.selector||b4==="**"&&cd.selector)){b2.splice(b6,1);
if(cd.selector){b2.delegateCount--}if(cb.remove){cb.remove.call(b3,cd)}}}if(b5&&!b2.length){if(!cb.teardown||cb.teardown.call(b3,e,ca.handle)===false){bI.removeEvent(b3,cc,ca.handle)
}delete cf[cc]}}if(bI.isEmptyObject(cf)){delete ca.handle;bI._removeData(b3,"events")
}},trigger:function(b1,b6,b4,cf){var b7,cd,b8,ce,b3,b9,cb,b5=[b4||l],cc=b1.type||b1,b2=b1.namespace?b1.namespace.split("."):[];
cd=b8=b4=b4||l;if(b4.nodeType===3||b4.nodeType===8){return}if(bA.test(cc+bI.event.triggered)){return
}if(cc.indexOf(".")>=0){b2=cc.split(".");cc=b2.shift();b2.sort()}b3=cc.indexOf(":")<0&&"on"+cc;
b1=b1[bI.expando]?b1:new bI.Event(cc,typeof b1==="object"&&b1);b1.isTrigger=true;
b1.namespace=b2.join(".");b1.namespace_re=b1.namespace?new RegExp("(^|\\.)"+b2.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;
b1.result=aF;if(!b1.target){b1.target=b4}b6=b6==null?[b1]:bI.makeArray(b6,[b1]);cb=bI.event.special[cc]||{};
if(!cf&&cb.trigger&&cb.trigger.apply(b4,b6)===false){return}if(!cf&&!cb.noBubble&&!bI.isWindow(b4)){ce=cb.delegateType||cc;
if(!bA.test(ce+cc)){cd=cd.parentNode}for(;cd;cd=cd.parentNode){b5.push(cd);b8=cd}if(b8===(b4.ownerDocument||l)){b5.push(b8.defaultView||b8.parentWindow||a2)
}}b7=0;while((cd=b5[b7++])&&!b1.isPropagationStopped()){b1.type=b7>1?ce:cb.bindType||cc;
b9=(bI._data(cd,"events")||{})[b1.type]&&bI._data(cd,"handle");if(b9){b9.apply(cd,b6)
}b9=b3&&cd[b3];if(b9&&bI.acceptData(cd)&&b9.apply&&b9.apply(cd,b6)===false){b1.preventDefault()
}}b1.type=cc;if(!cf&&!b1.isDefaultPrevented()){if((!cb._default||cb._default.apply(b4.ownerDocument,b6)===false)&&!(cc==="click"&&bI.nodeName(b4,"a"))&&bI.acceptData(b4)){if(b3&&b4[cc]&&!bI.isWindow(b4)){b8=b4[b3];
if(b8){b4[b3]=null}bI.event.triggered=cc;try{b4[cc]()}catch(ca){}bI.event.triggered=aF;
if(b8){b4[b3]=b8}}}}return b1.result},dispatch:function(e){e=bI.event.fix(e);var b4,b3,b5,b1,b9,b8=[],b7=a4.call(arguments),b2=(bI._data(this,"events")||{})[e.type]||[],b6=bI.event.special[e.type]||{};
b7[0]=e;e.delegateTarget=this;if(b6.preDispatch&&b6.preDispatch.call(this,e)===false){return
}b8=bI.event.handlers.call(this,e,b2);b4=0;while((b1=b8[b4++])&&!e.isPropagationStopped()){e.currentTarget=b1.elem;
b3=0;while((b9=b1.handlers[b3++])&&!e.isImmediatePropagationStopped()){if(!e.namespace_re||e.namespace_re.test(b9.namespace)){e.handleObj=b9;
e.data=b9.data;b5=((bI.event.special[b9.origType]||{}).handle||b9.handler).apply(b1.elem,b7);
if(b5!==aF){if((e.result=b5)===false){e.preventDefault();e.stopPropagation()}}}}}if(b6.postDispatch){b6.postDispatch.call(this,e)
}return e.result},handlers:function(e,b2){var b4,b5,b1,b7,b6=[],b3=b2.delegateCount,b8=e.target;
if(b3&&b8.nodeType&&(!e.button||e.type!=="click")){for(;b8!=this;b8=b8.parentNode||this){if(b8.disabled!==true||e.type!=="click"){b5=[];
for(b4=0;b4<b3;b4++){b7=b2[b4];b1=b7.selector+" ";if(b5[b1]===aF){b5[b1]=b7.needsContext?bI(b1,this).index(b8)>=0:bI.find(b1,this,null,[b8]).length
}if(b5[b1]){b5.push(b7)}}if(b5.length){b6.push({elem:b8,handlers:b5})}}}}if(b3<b2.length){b6.push({elem:this,handlers:b2.slice(b3)})
}return b6},fix:function(b2){if(b2[bI.expando]){return b2}var b1,b5,e=b2,b3=bI.event.fixHooks[b2.type]||{},b4=b3.props?this.props.concat(b3.props):this.props;
b2=new bI.Event(e);b1=b4.length;while(b1--){b5=b4[b1];b2[b5]=e[b5]}if(!b2.target){b2.target=e.srcElement||l
}if(b2.target.nodeType===3){b2.target=b2.target.parentNode}b2.metaKey=!!b2.metaKey;
return b3.filter?b3.filter(b2,e):b2},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(b1,e){if(b1.which==null){b1.which=e.charCode!=null?e.charCode:e.keyCode
}return b1}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(b3,b2){var b4,b5,e,b1=b2.button,b6=b2.fromElement;
if(b3.pageX==null&&b2.clientX!=null){b4=b3.target.ownerDocument||l;b5=b4.documentElement;
e=b4.body;b3.pageX=b2.clientX+(b5&&b5.scrollLeft||e&&e.scrollLeft||0)-(b5&&b5.clientLeft||e&&e.clientLeft||0);
b3.pageY=b2.clientY+(b5&&b5.scrollTop||e&&e.scrollTop||0)-(b5&&b5.clientTop||e&&e.clientTop||0)
}if(!b3.relatedTarget&&b6){b3.relatedTarget=b6===b3.target?b2.toElement:b6}if(!b3.which&&b1!==aF){b3.which=(b1&1?1:(b1&2?3:(b1&4?2:0)))
}return b3}},special:{load:{noBubble:true},click:{trigger:function(){if(bI.nodeName(this,"input")&&this.type==="checkbox"&&this.click){this.click();
return false}}},focus:{trigger:function(){if(this!==l.activeElement&&this.focus){try{this.focus();
return false}catch(b1){}}},delegateType:"focusin"},blur:{trigger:function(){if(this===l.activeElement&&this.blur){this.blur();
return false}},delegateType:"focusout"},beforeunload:{postDispatch:function(e){if(e.result!==aF){e.originalEvent.returnValue=e.result
}}}},simulate:function(b2,b4,b3,b1){var b5=bI.extend(new bI.Event(),b3,{type:b2,isSimulated:true,originalEvent:{}});
if(b1){bI.event.trigger(b5,null,b4)}else{bI.event.dispatch.call(b4,b5)}if(b5.isDefaultPrevented()){b3.preventDefault()
}}};bI.removeEvent=l.removeEventListener?function(b1,e,b2){if(b1.removeEventListener){b1.removeEventListener(e,b2,false)
}}:function(b2,b1,b3){var e="on"+b1;if(b2.detachEvent){if(typeof b2[e]==="undefined"){b2[e]=null
}b2.detachEvent(e,b3)}};bI.Event=function(b1,e){if(!(this instanceof bI.Event)){return new bI.Event(b1,e)
}if(b1&&b1.type){this.originalEvent=b1;this.type=b1.type;this.isDefaultPrevented=(b1.defaultPrevented||b1.returnValue===false||b1.getPreventDefault&&b1.getPreventDefault())?R:X
}else{this.type=b1}if(e){bI.extend(this,e)}this.timeStamp=b1&&b1.timeStamp||bI.now();
this[bI.expando]=true};bI.Event.prototype={isDefaultPrevented:X,isPropagationStopped:X,isImmediatePropagationStopped:X,preventDefault:function(){var b1=this.originalEvent;
this.isDefaultPrevented=R;if(!b1){return}if(b1.preventDefault){b1.preventDefault()
}else{b1.returnValue=false}},stopPropagation:function(){var b1=this.originalEvent;
this.isPropagationStopped=R;if(!b1){return}if(b1.stopPropagation){b1.stopPropagation()
}b1.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=R;
this.stopPropagation()}};bI.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(b1,e){bI.event.special[b1]={delegateType:e,bindType:e,handle:function(b4){var b2,b6=this,b5=b4.relatedTarget,b3=b4.handleObj;
if(!b5||(b5!==b6&&!bI.contains(b6,b5))){b4.type=b3.origType;b2=b3.handler.apply(this,arguments);
b4.type=e}return b2}}});if(!bI.support.submitBubbles){bI.event.special.submit={setup:function(){if(bI.nodeName(this,"form")){return false
}bI.event.add(this,"click._submit keypress._submit",function(b3){var b2=b3.target,b1=bI.nodeName(b2,"input")||bI.nodeName(b2,"button")?b2.form:aF;
if(b1&&!bI._data(b1,"submitBubbles")){bI.event.add(b1,"submit._submit",function(e){e._submit_bubble=true
});bI._data(b1,"submitBubbles",true)}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;
if(this.parentNode&&!e.isTrigger){bI.event.simulate("submit",this.parentNode,e,true)
}}},teardown:function(){if(bI.nodeName(this,"form")){return false}bI.event.remove(this,"._submit")
}}}if(!bI.support.changeBubbles){bI.event.special.change={setup:function(){if(bG.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){bI.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true
}});bI.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false
}bI.event.simulate("change",this,e,true)})}return false}bI.event.add(this,"beforeactivate._change",function(b2){var b1=b2.target;
if(bG.test(b1.nodeName)&&!bI._data(b1,"changeBubbles")){bI.event.add(b1,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){bI.event.simulate("change",this.parentNode,e,true)
}});bI._data(b1,"changeBubbles",true)}})},handle:function(b1){var e=b1.target;if(this!==e||b1.isSimulated||b1.isTrigger||(e.type!=="radio"&&e.type!=="checkbox")){return b1.handleObj.handler.apply(this,arguments)
}},teardown:function(){bI.event.remove(this,"._change");return !bG.test(this.nodeName)
}}}if(!bI.support.focusinBubbles){bI.each({focus:"focusin",blur:"focusout"},function(b3,e){var b1=0,b2=function(b4){bI.event.simulate(e,b4.target,bI.event.fix(b4),true)
};bI.event.special[e]={setup:function(){if(b1++===0){l.addEventListener(b3,b2,true)
}},teardown:function(){if(--b1===0){l.removeEventListener(b3,b2,true)}}}})}bI.fn.extend({on:function(b2,e,b5,b4,b1){var b6,b3;
if(typeof b2==="object"){if(typeof e!=="string"){b5=b5||e;e=aF}for(b3 in b2){this.on(b3,e,b5,b2[b3],b1)
}return this}if(b5==null&&b4==null){b4=e;b5=e=aF}else{if(b4==null){if(typeof e==="string"){b4=b5;
b5=aF}else{b4=b5;b5=e;e=aF}}}if(b4===false){b4=X}else{if(!b4){return this}}if(b1===1){b6=b4;
b4=function(b7){bI().off(b7);return b6.apply(this,arguments)};b4.guid=b6.guid||(b6.guid=bI.guid++)
}return this.each(function(){bI.event.add(this,b2,b4,b5,e)})},one:function(b1,e,b3,b2){return this.on(b1,e,b3,b2,1)
},off:function(b2,e,b4){var b1,b3;if(b2&&b2.preventDefault&&b2.handleObj){b1=b2.handleObj;
bI(b2.delegateTarget).off(b1.namespace?b1.origType+"."+b1.namespace:b1.origType,b1.selector,b1.handler);
return this}if(typeof b2==="object"){for(b3 in b2){this.off(b3,e,b2[b3])}return this
}if(e===false||typeof e==="function"){b4=e;e=aF}if(b4===false){b4=X}return this.each(function(){bI.event.remove(this,b2,b4,e)
})},bind:function(e,b2,b1){return this.on(e,null,b2,b1)},unbind:function(e,b1){return this.off(e,null,b1)
},delegate:function(e,b1,b3,b2){return this.on(b1,e,b3,b2)},undelegate:function(e,b1,b2){return arguments.length===1?this.off(e,"**"):this.off(b1,e||"**",b2)
},trigger:function(e,b1){return this.each(function(){bI.event.trigger(e,b1,this)})
},triggerHandler:function(e,b2){var b1=this[0];if(b1){return bI.event.trigger(e,b2,b1,true)
}},hover:function(e,b1){return this.mouseenter(e).mouseleave(b1||e)}});bI.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(b1,e){bI.fn[e]=function(b3,b2){return arguments.length>0?this.on(e,null,b3,b2):this.trigger(e)
};if(a3.test(e)){bI.event.fixHooks[e]=bI.event.keyHooks}if(bM.test(e)){bI.event.fixHooks[e]=bI.event.mouseHooks
}});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function(c8,cf){var cv,b9,cl,cF,cH,cQ,cR,de,cT,cz,cm,cb,cX,c9,b8,cD,cB,c3="sizzle"+-(new Date()),cG=c8.document,db={},dc=0,cY=0,b3=cx(),c2=cx(),cE=cx(),c7=typeof cf,cL=1<<31,c5=[],c6=c5.pop,b2=c5.push,ck=c5.slice,b7=c5.indexOf||function(dg){var df=0,e=this.length;
for(;df<e;df++){if(this[df]===dg){return df}}return -1},cn="[\\x20\\t\\r\\n\\f]",b1="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",cI=b1.replace("w","w#"),cg="([*^$|!~]?=)",c0="\\["+cn+"*("+b1+")"+cn+"*(?:"+cg+cn+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+cI+")|)|)"+cn+"*\\]",ci=":("+b1+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+c0.replace(3,8)+")*)|.*)\\)|)",cp=new RegExp("^"+cn+"+|((?:^|[^\\\\])(?:\\\\.)*)"+cn+"+$","g"),cs=new RegExp("^"+cn+"*,"+cn+"*"),cy=new RegExp("^"+cn+"*([\\x20\\t\\r\\n\\f>+~])"+cn+"*"),cN=new RegExp(ci),cO=new RegExp("^"+cI+"$"),cW={ID:new RegExp("^#("+b1+")"),CLASS:new RegExp("^\\.("+b1+")"),NAME:new RegExp("^\\[name=['\"]?("+b1+")['\"]?\\]"),TAG:new RegExp("^("+b1.replace("w","w*")+")"),ATTR:new RegExp("^"+c0),PSEUDO:new RegExp("^"+ci),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+cn+"*(even|odd|(([+-]|)(\\d*)n|)"+cn+"*(?:([+-]|)"+cn+"*(\\d+)|))"+cn+"*\\)|)","i"),needsContext:new RegExp("^"+cn+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+cn+"*((?:-\\d)?\\d*)"+cn+"*\\)|)(?=[^-]|$)","i")},cU=/[\x20\t\r\n\f]*[+~]/,cK=/\{\s*\[native code\]\s*\}/,cM=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,b6=/^(?:input|select|textarea|button)$/i,cj=/^h\d$/i,cJ=/'|\\/g,cr=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,cq=/\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,cZ=function(e,dg){var df="0x"+dg-65536;
return df!==df?dg:df<0?String.fromCharCode(df+65536):String.fromCharCode(df>>10|55296,df&1023|56320)
};try{ck.call(cm.childNodes,0)[0].nodeType}catch(cA){ck=function(df){var dg,e=[];
for(;(dg=this[df]);df++){e.push(dg)}return e}}function cC(e){return cK.test(e+"")
}function cx(){var e,df=[];return(e=function(dg,dh){if(df.push(dg+=" ")>cl.cacheLength){delete e[df.shift()]
}return(e[dg]=dh)})}function ch(e){e[c3]=true;return e}function ca(df){var dh=cz.createElement("div");
try{return df(dh)}catch(dg){return false}finally{dh=null}}function ct(dm,df,dr,dt){var ds,dj,dk,dp,dq,di,dh,e,dg,dn;
if((df?df.ownerDocument||df:cG)!==cz){cT(df)}df=df||cz;dr=dr||[];if(!dm||typeof dm!=="string"){return dr
}if((dp=df.nodeType)!==1&&dp!==9){return[]}if(!cb&&!dt){if((ds=cM.exec(dm))){if((dk=ds[1])){if(dp===9){dj=df.getElementById(dk);
if(dj&&dj.parentNode){if(dj.id===dk){dr.push(dj);return dr}}else{return dr}}else{if(df.ownerDocument&&(dj=df.ownerDocument.getElementById(dk))&&cD(df,dj)&&dj.id===dk){dr.push(dj);
return dr}}}else{if(ds[2]){b2.apply(dr,ck.call(df.getElementsByTagName(dm),0));return dr
}else{if((dk=ds[3])&&db.getByClassName&&df.getElementsByClassName){b2.apply(dr,ck.call(df.getElementsByClassName(dk),0));
return dr}}}}if(db.qsa&&!cX.test(dm)){dh=true;e=c3;dg=df;dn=dp===9&&dm;if(dp===1&&df.nodeName.toLowerCase()!=="object"){di=cd(dm);
if((dh=df.getAttribute("id"))){e=dh.replace(cJ,"\\$&")}else{df.setAttribute("id",e)
}e="[id='"+e+"'] ";dq=di.length;while(dq--){di[dq]=e+ce(di[dq])}dg=cU.test(dm)&&df.parentNode||df;
dn=di.join(",")}if(dn){try{b2.apply(dr,ck.call(dg.querySelectorAll(dn),0));return dr
}catch(dl){}finally{if(!dh){df.removeAttribute("id")}}}}}return da(dm.replace(cp,"$1"),df,dr,dt)
}cH=ct.isXML=function(e){var df=e&&(e.ownerDocument||e).documentElement;return df?df.nodeName!=="HTML":false
};cT=ct.setDocument=function(e){var df=e?e.ownerDocument||e:cG;if(df===cz||df.nodeType!==9||!df.documentElement){return cz
}cz=df;cm=df.documentElement;cb=cH(df);db.tagNameNoComments=ca(function(dg){dg.appendChild(df.createComment(""));
return !dg.getElementsByTagName("*").length});db.attributes=ca(function(dh){dh.innerHTML="<select></select>";
var dg=typeof dh.lastChild.getAttribute("multiple");return dg!=="boolean"&&dg!=="string"
});db.getByClassName=ca(function(dg){dg.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";
if(!dg.getElementsByClassName||!dg.getElementsByClassName("e").length){return false
}dg.lastChild.className="e";return dg.getElementsByClassName("e").length===2});db.getByName=ca(function(dh){dh.id=c3+0;
dh.innerHTML="<a name='"+c3+"'></a><div name='"+c3+"'></div>";cm.insertBefore(dh,cm.firstChild);
var dg=df.getElementsByName&&df.getElementsByName(c3).length===2+df.getElementsByName(c3+0).length;
db.getIdNotName=!df.getElementById(c3);cm.removeChild(dh);return dg});cl.attrHandle=ca(function(dg){dg.innerHTML="<a href='#'></a>";
return dg.firstChild&&typeof dg.firstChild.getAttribute!==c7&&dg.firstChild.getAttribute("href")==="#"
})?{}:{href:function(dg){return dg.getAttribute("href",2)},type:function(dg){return dg.getAttribute("type")
}};if(db.getIdNotName){cl.find.ID=function(di,dh){if(typeof dh.getElementById!==c7&&!cb){var dg=dh.getElementById(di);
return dg&&dg.parentNode?[dg]:[]}};cl.filter.ID=function(dh){var dg=dh.replace(cq,cZ);
return function(di){return di.getAttribute("id")===dg}}}else{cl.find.ID=function(di,dh){if(typeof dh.getElementById!==c7&&!cb){var dg=dh.getElementById(di);
return dg?dg.id===di||typeof dg.getAttributeNode!==c7&&dg.getAttributeNode("id").value===di?[dg]:cf:[]
}};cl.filter.ID=function(dh){var dg=dh.replace(cq,cZ);return function(dj){var di=typeof dj.getAttributeNode!==c7&&dj.getAttributeNode("id");
return di&&di.value===dg}}}cl.find.TAG=db.tagNameNoComments?function(dg,dh){if(typeof dh.getElementsByTagName!==c7){return dh.getElementsByTagName(dg)
}}:function(dg,dk){var dl,dj=[],di=0,dh=dk.getElementsByTagName(dg);if(dg==="*"){for(;
(dl=dh[di]);di++){if(dl.nodeType===1){dj.push(dl)}}return dj}return dh};cl.find.NAME=db.getByName&&function(dg,dh){if(typeof dh.getElementsByName!==c7){return dh.getElementsByName(name)
}};cl.find.CLASS=db.getByClassName&&function(dh,dg){if(typeof dg.getElementsByClassName!==c7&&!cb){return dg.getElementsByClassName(dh)
}};c9=[];cX=[":focus"];if((db.qsa=cC(df.querySelectorAll))){ca(function(dg){dg.innerHTML="<select><option selected=''></option></select>";
if(!dg.querySelectorAll("[selected]").length){cX.push("\\["+cn+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")
}if(!dg.querySelectorAll(":checked").length){cX.push(":checked")}});ca(function(dg){dg.innerHTML="<input type='hidden' i=''/>";
if(dg.querySelectorAll("[i^='']").length){cX.push("[*^$]="+cn+"*(?:\"\"|'')")}if(!dg.querySelectorAll(":enabled").length){cX.push(":enabled",":disabled")
}dg.querySelectorAll("*,:x");cX.push(",.*:")})}if((db.matchesSelector=cC((b8=cm.matchesSelector||cm.mozMatchesSelector||cm.webkitMatchesSelector||cm.oMatchesSelector||cm.msMatchesSelector)))){ca(function(dg){db.disconnectedMatch=b8.call(dg,"div");
b8.call(dg,"[s!='']:x");c9.push("!=",ci)})}cX=new RegExp(cX.join("|"));c9=new RegExp(c9.join("|"));
cD=cC(cm.contains)||cm.compareDocumentPosition?function(dh,dg){var dj=dh.nodeType===9?dh.documentElement:dh,di=dg&&dg.parentNode;
return dh===di||!!(di&&di.nodeType===1&&(dj.contains?dj.contains(di):dh.compareDocumentPosition&&dh.compareDocumentPosition(di)&16))
}:function(dh,dg){if(dg){while((dg=dg.parentNode)){if(dg===dh){return true}}}return false
};cB=cm.compareDocumentPosition?function(dh,dg){var di;if(dh===dg){cR=true;return 0
}if((di=dg.compareDocumentPosition&&dh.compareDocumentPosition&&dh.compareDocumentPosition(dg))){if(di&1||dh.parentNode&&dh.parentNode.nodeType===11){if(dh===df||cD(cG,dh)){return -1
}if(dg===df||cD(cG,dg)){return 1}return 0}return di&4?-1:1}return dh.compareDocumentPosition?-1:1
}:function(dh,dg){var dn,dk=0,dm=dh.parentNode,dj=dg.parentNode,di=[dh],dl=[dg];if(dh===dg){cR=true;
return 0}else{if(dh.sourceIndex&&dg.sourceIndex){return(~dg.sourceIndex||cL)-(cD(cG,dh)&&~dh.sourceIndex||cL)
}else{if(!dm||!dj){return dh===df?-1:dg===df?1:dm?-1:dj?1:0}else{if(dm===dj){return b4(dh,dg)
}}}}dn=dh;while((dn=dn.parentNode)){di.unshift(dn)}dn=dg;while((dn=dn.parentNode)){dl.unshift(dn)
}while(di[dk]===dl[dk]){dk++}return dk?b4(di[dk],dl[dk]):di[dk]===cG?-1:dl[dk]===cG?1:0
};cR=false;[0,0].sort(cB);db.detectDuplicates=cR;return cz};ct.matches=function(df,e){return ct(df,null,null,e)
};ct.matchesSelector=function(dg,di){if((dg.ownerDocument||dg)!==cz){cT(dg)}di=di.replace(cr,"='$1']");
if(db.matchesSelector&&!cb&&(!c9||!c9.test(di))&&!cX.test(di)){try{var df=b8.call(dg,di);
if(df||db.disconnectedMatch||dg.document&&dg.document.nodeType!==11){return df}}catch(dh){}}return ct(di,cz,null,[dg]).length>0
};ct.contains=function(e,df){if((e.ownerDocument||e)!==cz){cT(e)}return cD(e,df)};
ct.attr=function(df,e){var dg;if((df.ownerDocument||df)!==cz){cT(df)}if(!cb){e=e.toLowerCase()
}if((dg=cl.attrHandle[e])){return dg(df)}if(cb||db.attributes){return df.getAttribute(e)
}return((dg=df.getAttributeNode(e))||df.getAttribute(e))&&df[e]===true?e:dg&&dg.specified?dg.value:null
};ct.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)
};ct.uniqueSort=function(dg){var dh,di=[],df=1,e=0;cR=!db.detectDuplicates;dg.sort(cB);
if(cR){for(;(dh=dg[df]);df++){if(dh===dg[df-1]){e=di.push(df)}}while(e--){dg.splice(di[e],1)
}}return dg};function b4(df,e){var dg=df&&e&&df.nextSibling;for(;dg;dg=dg.nextSibling){if(dg===e){return -1
}}return df?1:-1}function cu(e){return function(dg){var df=dg.nodeName.toLowerCase();
return df==="input"&&dg.type===e}}function b5(e){return function(dg){var df=dg.nodeName.toLowerCase();
return(df==="input"||df==="button")&&dg.type===e}}function c1(e){return ch(function(df){df=+df;
return ch(function(dg,dk){var di,dh=e([],dg.length,df),dj=dh.length;while(dj--){if(dg[(di=dh[dj])]){dg[di]=!(dk[di]=dg[di])
}}})})}cF=ct.getText=function(di){var dh,df="",dg=0,e=di.nodeType;if(!e){for(;(dh=di[dg]);
dg++){df+=cF(dh)}}else{if(e===1||e===9||e===11){if(typeof di.textContent==="string"){return di.textContent
}else{for(di=di.firstChild;di;di=di.nextSibling){df+=cF(di)}}}else{if(e===3||e===4){return di.nodeValue
}}}return df};cl=ct.selectors={cacheLength:50,createPseudo:ch,match:cW,find:{},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace(cq,cZ);
e[3]=(e[4]||e[5]||"").replace(cq,cZ);if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)
},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1].slice(0,3)==="nth"){if(!e[3]){ct.error(e[0])
}e[4]=+(e[4]?e[5]+(e[6]||1):2*(e[3]==="even"||e[3]==="odd"));e[5]=+((e[7]+e[8])||e[3]==="odd")
}else{if(e[3]){ct.error(e[0])}}return e},PSEUDO:function(df){var e,dg=!df[5]&&df[2];
if(cW.CHILD.test(df[0])){return null}if(df[4]){df[2]=df[4]}else{if(dg&&cN.test(dg)&&(e=cd(dg,true))&&(e=dg.indexOf(")",dg.length-e)-dg.length)){df[0]=df[0].slice(0,e);
df[2]=dg.slice(0,e)}}return df.slice(0,3)}},filter:{TAG:function(e){if(e==="*"){return function(){return true
}}e=e.replace(cq,cZ).toLowerCase();return function(df){return df.nodeName&&df.nodeName.toLowerCase()===e
}},CLASS:function(e){var df=b3[e+" "];return df||(df=new RegExp("(^|"+cn+")"+e+"("+cn+"|$)"))&&b3(e,function(dg){return df.test(dg.className||(typeof dg.getAttribute!==c7&&dg.getAttribute("class"))||"")
})},ATTR:function(dg,df,e){return function(di){var dh=ct.attr(di,dg);if(dh==null){return df==="!="
}if(!df){return true}dh+="";return df==="="?dh===e:df==="!="?dh!==e:df==="^="?e&&dh.indexOf(e)===0:df==="*="?e&&dh.indexOf(e)>-1:df==="$="?e&&dh.substr(dh.length-e.length)===e:df==="~="?(" "+dh+" ").indexOf(e)>-1:df==="|="?dh===e||dh.substr(0,e.length+1)===e+"-":false
}},CHILD:function(df,di,dh,dj,dg){var dl=df.slice(0,3)!=="nth",e=df.slice(-4)!=="last",dk=di==="of-type";
return dj===1&&dg===0?function(dm){return !!dm.parentNode}:function(dt,dr,dw){var dm,dz,du,dy,dv,dq,ds=dl!==e?"nextSibling":"previousSibling",dx=dt.parentNode,dp=dk&&dt.nodeName.toLowerCase(),dn=!dw&&!dk;
if(dx){if(dl){while(ds){du=dt;while((du=du[ds])){if(dk?du.nodeName.toLowerCase()===dp:du.nodeType===1){return false
}}dq=ds=df==="only"&&!dq&&"nextSibling"}return true}dq=[e?dx.firstChild:dx.lastChild];
if(e&&dn){dz=dx[c3]||(dx[c3]={});dm=dz[df]||[];dv=dm[0]===dc&&dm[1];dy=dm[0]===dc&&dm[2];
du=dv&&dx.childNodes[dv];while((du=++dv&&du&&du[ds]||(dy=dv=0)||dq.pop())){if(du.nodeType===1&&++dy&&du===dt){dz[df]=[dc,dv,dy];
break}}}else{if(dn&&(dm=(dt[c3]||(dt[c3]={}))[df])&&dm[0]===dc){dy=dm[1]}else{while((du=++dv&&du&&du[ds]||(dy=dv=0)||dq.pop())){if((dk?du.nodeName.toLowerCase()===dp:du.nodeType===1)&&++dy){if(dn){(du[c3]||(du[c3]={}))[df]=[dc,dy]
}if(du===dt){break}}}}}dy-=dg;return dy===dj||(dy%dj===0&&dy/dj>=0)}}},PSEUDO:function(dh,dg){var e,df=cl.pseudos[dh]||cl.setFilters[dh.toLowerCase()]||ct.error("unsupported pseudo: "+dh);
if(df[c3]){return df(dg)}if(df.length>1){e=[dh,dh,"",dg];return cl.setFilters.hasOwnProperty(dh.toLowerCase())?ch(function(dk,dm){var dj,di=df(dk,dg),dl=di.length;
while(dl--){dj=b7.call(dk,di[dl]);dk[dj]=!(dm[dj]=di[dl])}}):function(di){return df(di,0,e)
}}return df}},pseudos:{not:ch(function(e){var df=[],dg=[],dh=cQ(e.replace(cp,"$1"));
return dh[c3]?ch(function(dj,dp,dm,dk){var dn,di=dh(dj,null,dk,[]),dl=dj.length;while(dl--){if((dn=di[dl])){dj[dl]=!(dp[dl]=dn)
}}}):function(dk,dj,di){df[0]=dk;dh(df,null,di,dg);return !dg.pop()}}),has:ch(function(e){return function(df){return ct(e,df).length>0
}}),contains:ch(function(e){return function(df){return(df.textContent||df.innerText||cF(df)).indexOf(e)>-1
}}),lang:ch(function(e){if(!cO.test(e||"")){ct.error("unsupported lang: "+e)}e=e.replace(cq,cZ).toLowerCase();
return function(dg){var df;do{if((df=cb?dg.getAttribute("xml:lang")||dg.getAttribute("lang"):dg.lang)){df=df.toLowerCase();
return df===e||df.indexOf(e+"-")===0}}while((dg=dg.parentNode)&&dg.nodeType===1);
return false}}),target:function(e){var df=c8.location&&c8.location.hash;return df&&df.slice(1)===e.id
},root:function(e){return e===cm},focus:function(e){return e===cz.activeElement&&(!cz.hasFocus||cz.hasFocus())&&!!(e.type||e.href||~e.tabIndex)
},enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true
},checked:function(e){var df=e.nodeName.toLowerCase();return(df==="input"&&!!e.checked)||(df==="option"&&!!e.selected)
},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true
},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling){if(e.nodeName>"@"||e.nodeType===3||e.nodeType===4){return false
}}return true},parent:function(e){return !cl.pseudos.empty(e)},header:function(e){return cj.test(e.nodeName)
},input:function(e){return b6.test(e.nodeName)},button:function(df){var e=df.nodeName.toLowerCase();
return e==="input"&&df.type==="button"||e==="button"},text:function(df){var e;return df.nodeName.toLowerCase()==="input"&&df.type==="text"&&((e=df.getAttribute("type"))==null||e.toLowerCase()===df.type)
},first:c1(function(){return[0]}),last:c1(function(e,df){return[df-1]}),eq:c1(function(e,dg,df){return[df<0?df+dg:df]
}),even:c1(function(e,dg){var df=0;for(;df<dg;df+=2){e.push(df)}return e}),odd:c1(function(e,dg){var df=1;
for(;df<dg;df+=2){e.push(df)}return e}),lt:c1(function(e,dh,dg){var df=dg<0?dg+dh:dg;
for(;--df>=0;){e.push(df)}return e}),gt:c1(function(e,dh,dg){var df=dg<0?dg+dh:dg;
for(;++df<dh;){e.push(df)}return e})}};for(cv in {radio:true,checkbox:true,file:true,password:true,image:true}){cl.pseudos[cv]=cu(cv)
}for(cv in {submit:true,reset:true}){cl.pseudos[cv]=b5(cv)}function cd(di,dn){var df,dj,dl,dm,dk,dg,e,dh=c2[di+" "];
if(dh){return dn?0:dh.slice(0)}dk=di;dg=[];e=cl.preFilter;while(dk){if(!df||(dj=cs.exec(dk))){if(dj){dk=dk.slice(dj[0].length)||dk
}dg.push(dl=[])}df=false;if((dj=cy.exec(dk))){df=dj.shift();dl.push({value:df,type:dj[0].replace(cp," ")});
dk=dk.slice(df.length)}for(dm in cl.filter){if((dj=cW[dm].exec(dk))&&(!e[dm]||(dj=e[dm](dj)))){df=dj.shift();
dl.push({value:df,type:dm,matches:dj});dk=dk.slice(df.length)}}if(!df){break}}return dn?dk.length:dk?ct.error(di):c2(di,dg).slice(0)
}function ce(dh){var dg=0,df=dh.length,e="";for(;dg<df;dg++){e+=dh[dg].value}return e
}function co(di,dg,dh){var e=dg.dir,dj=dh&&dg.dir==="parentNode",df=cY++;return dg.first?function(dm,dl,dk){while((dm=dm[e])){if(dm.nodeType===1||dj){return di(dm,dl,dk)
}}}:function(dp,dm,dl){var dr,dk,dn,dq=dc+" "+df;if(dl){while((dp=dp[e])){if(dp.nodeType===1||dj){if(di(dp,dm,dl)){return true
}}}}else{while((dp=dp[e])){if(dp.nodeType===1||dj){dn=dp[c3]||(dp[c3]={});if((dk=dn[e])&&dk[0]===dq){if((dr=dk[1])===true||dr===b9){return dr===true
}}else{dk=dn[e]=[dq];dk[1]=di(dp,dm,dl)||b9;if(dk[1]===true){return true}}}}}}}function dd(e){return e.length>1?function(di,dh,df){var dg=e.length;
while(dg--){if(!e[dg](di,dh,df)){return false}}return true}:e[0]}function cV(e,df,dg,dh,dk){var di,dn=[],dj=0,dl=e.length,dm=df!=null;
for(;dj<dl;dj++){if((di=e[dj])){if(!dg||dg(di,dh,dk)){dn.push(di);if(dm){df.push(dj)
}}}}return dn}function cc(dg,df,di,dh,dj,e){if(dh&&!dh[c3]){dh=cc(dh)}if(dj&&!dj[c3]){dj=cc(dj,e)
}return ch(function(dv,ds,dm,du){var dx,dt,dp,dn=[],dw=[],dl=ds.length,dk=dv||cw(df||"*",dm.nodeType?[dm]:dm,[]),dq=dg&&(dv||!df)?cV(dk,dn,dg,dm,du):dk,dr=di?dj||(dv?dg:dl||dh)?[]:ds:dq;
if(di){di(dq,dr,dm,du)}if(dh){dx=cV(dr,dw);dh(dx,[],dm,du);dt=dx.length;while(dt--){if((dp=dx[dt])){dr[dw[dt]]=!(dq[dw[dt]]=dp)
}}}if(dv){if(dj||dg){if(dj){dx=[];dt=dr.length;while(dt--){if((dp=dr[dt])){dx.push((dq[dt]=dp))
}}dj(null,(dr=[]),dx,du)}dt=dr.length;while(dt--){if((dp=dr[dt])&&(dx=dj?b7.call(dv,dp):dn[dt])>-1){dv[dx]=!(ds[dx]=dp)
}}}}else{dr=cV(dr===ds?dr.splice(dl,dr.length):dr);if(dj){dj(null,ds,dr,du)}else{b2.apply(ds,dr)
}}})}function c4(dk){var df,di,dg,dj=dk.length,dn=cl.relative[dk[0].type],dp=dn||cl.relative[" "],dh=dn?1:0,dl=co(function(dq){return dq===df
},dp,true),dm=co(function(dq){return b7.call(df,dq)>-1},dp,true),e=[function(ds,dr,dq){return(!dn&&(dq||dr!==de))||((df=dr).nodeType?dl(ds,dr,dq):dm(ds,dr,dq))
}];for(;dh<dj;dh++){if((di=cl.relative[dk[dh].type])){e=[co(dd(e),di)]}else{di=cl.filter[dk[dh].type].apply(null,dk[dh].matches);
if(di[c3]){dg=++dh;for(;dg<dj;dg++){if(cl.relative[dk[dg].type]){break}}return cc(dh>1&&dd(e),dh>1&&ce(dk.slice(0,dh-1)).replace(cp,"$1"),di,dh<dg&&c4(dk.slice(dh,dg)),dg<dj&&c4((dk=dk.slice(dg))),dg<dj&&ce(dk))
}e.push(di)}}return dd(e)}function cS(dh,dg){var dj=0,e=dg.length>0,di=dh.length>0,df=function(du,dn,dt,ds,dA){var dp,dq,dv,dz=[],dy=0,dr="0",dk=du&&[],dw=dA!=null,dx=de,dm=du||di&&cl.find.TAG("*",dA&&dn.parentNode||dn),dl=(dc+=dx==null?1:Math.E);
if(dw){de=dn!==cz&&dn;b9=dj}for(;(dp=dm[dr])!=null;dr++){if(di&&dp){for(dq=0;(dv=dh[dq]);
dq++){if(dv(dp,dn,dt)){ds.push(dp);break}}if(dw){dc=dl;b9=++dj}}if(e){if((dp=!dv&&dp)){dy--
}if(du){dk.push(dp)}}}dy+=dr;if(e&&dr!==dy){for(dq=0;(dv=dg[dq]);dq++){dv(dk,dz,dn,dt)
}if(du){if(dy>0){while(dr--){if(!(dk[dr]||dz[dr])){dz[dr]=c6.call(ds)}}}dz=cV(dz)
}b2.apply(ds,dz);if(dw&&!du&&dz.length>0&&(dy+dg.length)>1){ct.uniqueSort(ds)}}if(dw){dc=dl;
de=dx}return dk};return e?ch(df):df}cQ=ct.compile=function(e,dj){var dg,df=[],di=[],dh=cE[e+" "];
if(!dh){if(!dj){dj=cd(e)}dg=dj.length;while(dg--){dh=c4(dj[dg]);if(dh[c3]){df.push(dh)
}else{di.push(dh)}}dh=cE(e,cS(di,df))}return dh};function cw(df,di,dh){var dg=0,e=di.length;
for(;dg<e;dg++){ct(df,di[dg],dh)}return dh}function da(dg,e,dh,dk){var di,dm,df,dn,dl,dj=cd(dg);
if(!dk){if(dj.length===1){dm=dj[0]=dj[0].slice(0);if(dm.length>2&&(df=dm[0]).type==="ID"&&e.nodeType===9&&!cb&&cl.relative[dm[1].type]){e=cl.find.ID(df.matches[0].replace(cq,cZ),e)[0];
if(!e){return dh}dg=dg.slice(dm.shift().value.length)}for(di=cW.needsContext.test(dg)?-1:dm.length-1;
di>=0;di--){df=dm[di];if(cl.relative[(dn=df.type)]){break}if((dl=cl.find[dn])){if((dk=dl(df.matches[0].replace(cq,cZ),cU.test(dm[0].type)&&e.parentNode||e))){dm.splice(di,1);
dg=dk.length&&ce(dm);if(!dg){b2.apply(dh,ck.call(dk,0));return dh}break}}}}}cQ(dg,dj)(dk,e,cb,dh,cU.test(dg));
return dh}cl.pseudos.nth=cl.pseudos.eq;function cP(){}cl.filters=cP.prototype=cl.pseudos;
cl.setFilters=new cP();cT();ct.attr=bI.attr;bI.find=ct;bI.expr=ct.selectors;bI.expr[":"]=bI.expr.pseudos;
bI.unique=ct.uniqueSort;bI.text=ct.getText;bI.isXMLDoc=ct.isXML;bI.contains=ct.contains
})(a2);var aj=/Until$/,bs=/^(?:parents|prev(?:Until|All))/,an=/^.[^:#\[\.,]*$/,y=bI.expr.match.needsContext,bw={children:true,contents:true,next:true,prev:true};
bI.fn.extend({find:function(e){var b3,b2,b1;if(typeof e!=="string"){b1=this;return this.pushStack(bI(e).filter(function(){for(b3=0;
b3<b1.length;b3++){if(bI.contains(b1[b3],this)){return true}}}))}b2=[];for(b3=0;b3<this.length;
b3++){bI.find(e,this[b3],b2)}b2=this.pushStack(bI.unique(b2));b2.selector=(this.selector?this.selector+" ":"")+e;
return b2},has:function(b3){var b2,b1=bI(b3,this),e=b1.length;return this.filter(function(){for(b2=0;
b2<e;b2++){if(bI.contains(this,b1[b2])){return true}}})},not:function(e){return this.pushStack(aO(this,e,false))
},filter:function(e){return this.pushStack(aO(this,e,true))},is:function(e){return !!e&&(typeof e==="string"?y.test(e)?bI(e,this.context).index(this[0])>=0:bI.filter(e,this).length>0:this.filter(e).length>0)
},closest:function(b4,b3){var b5,b2=0,e=this.length,b1=[],b6=y.test(b4)||typeof b4!=="string"?bI(b4,b3||this.context):0;
for(;b2<e;b2++){b5=this[b2];while(b5&&b5.ownerDocument&&b5!==b3&&b5.nodeType!==11){if(b6?b6.index(b5)>-1:bI.find.matchesSelector(b5,b4)){b1.push(b5);
break}b5=b5.parentNode}}return this.pushStack(b1.length>1?bI.unique(b1):b1)},index:function(e){if(!e){return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1
}if(typeof e==="string"){return bI.inArray(this[0],bI(e))}return bI.inArray(e.jquery?e[0]:e,this)
},add:function(e,b1){var b3=typeof e==="string"?bI(e,b1):bI.makeArray(e&&e.nodeType?[e]:e),b2=bI.merge(this.get(),b3);
return this.pushStack(bI.unique(b2))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))
}});bI.fn.andSelf=bI.fn.addBack;function aX(b1,e){do{b1=b1[e]}while(b1&&b1.nodeType!==1);
return b1}bI.each({parent:function(b1){var e=b1.parentNode;return e&&e.nodeType!==11?e:null
},parents:function(e){return bI.dir(e,"parentNode")},parentsUntil:function(b1,e,b2){return bI.dir(b1,"parentNode",b2)
},next:function(e){return aX(e,"nextSibling")},prev:function(e){return aX(e,"previousSibling")
},nextAll:function(e){return bI.dir(e,"nextSibling")},prevAll:function(e){return bI.dir(e,"previousSibling")
},nextUntil:function(b1,e,b2){return bI.dir(b1,"nextSibling",b2)},prevUntil:function(b1,e,b2){return bI.dir(b1,"previousSibling",b2)
},siblings:function(e){return bI.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return bI.sibling(e.firstChild)
},contents:function(e){return bI.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:bI.merge([],e.childNodes)
}},function(e,b1){bI.fn[e]=function(b4,b2){var b3=bI.map(this,b1,b4);if(!aj.test(e)){b2=b4
}if(b2&&typeof b2==="string"){b3=bI.filter(b2,b3)}b3=this.length>1&&!bw[e]?bI.unique(b3):b3;
if(this.length>1&&bs.test(e)){b3=b3.reverse()}return this.pushStack(b3)}});bI.extend({filter:function(b2,e,b1){if(b1){b2=":not("+b2+")"
}return e.length===1?bI.find.matchesSelector(e[0],b2)?[e[0]]:[]:bI.find.matches(b2,e)
},dir:function(b2,b1,b4){var e=[],b3=b2[b1];while(b3&&b3.nodeType!==9&&(b4===aF||b3.nodeType!==1||!bI(b3).is(b4))){if(b3.nodeType===1){e.push(b3)
}b3=b3[b1]}return e},sibling:function(b2,b1){var e=[];for(;b2;b2=b2.nextSibling){if(b2.nodeType===1&&b2!==b1){e.push(b2)
}}return e}});function aO(b3,b2,e){b2=b2||0;if(bI.isFunction(b2)){return bI.grep(b3,function(b5,b4){var b6=!!b2.call(b5,b4,b5);
return b6===e})}else{if(b2.nodeType){return bI.grep(b3,function(b4){return(b4===b2)===e
})}else{if(typeof b2==="string"){var b1=bI.grep(b3,function(b4){return b4.nodeType===1
});if(an.test(b2)){return bI.filter(b2,b1,!e)}else{b2=bI.filter(b2,b1)}}}}return bI.grep(b3,function(b4){return(bI.inArray(b4,b2)>=0)===e
})}function A(e){var b2=d.split("|"),b1=e.createDocumentFragment();if(b1.createElement){while(b2.length){b1.createElement(b2.pop())
}}return b1}var d="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",aA=/ jQuery\d+="(?:null|\d+)"/g,J=new RegExp("<(?:"+d+")[\\s/>]","i"),b0=/^\s+/,aC=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,m=/<([\w:]+)/,bV=/<tbody/i,I=/<|&#?\w+;/,al=/<(?:script|style|link)/i,q=/^(?:checkbox|radio)$/i,bT=/checked\s*(?:[^=]|=\s*.checked.)/i,by=/^$|\/(?:java|ecma)script/i,ar=/^true\/(.*)/,aK=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,T={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:bI.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},aS=A(l),j=aS.appendChild(l.createElement("div"));
T.optgroup=T.option;T.tbody=T.tfoot=T.colgroup=T.caption=T.thead;T.th=T.td;bI.fn.extend({text:function(e){return bI.access(this,function(b1){return b1===aF?bI.text(this):this.empty().append((this[0]&&this[0].ownerDocument||l).createTextNode(b1))
},null,e,arguments.length)},wrapAll:function(e){if(bI.isFunction(e)){return this.each(function(b2){bI(this).wrapAll(e.call(this,b2))
})}if(this[0]){var b1=bI(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){b1.insertBefore(this[0])
}b1.map(function(){var b2=this;while(b2.firstChild&&b2.firstChild.nodeType===1){b2=b2.firstChild
}return b2}).append(this)}return this},wrapInner:function(e){if(bI.isFunction(e)){return this.each(function(b1){bI(this).wrapInner(e.call(this,b1))
})}return this.each(function(){var b1=bI(this),b2=b1.contents();if(b2.length){b2.wrapAll(e)
}else{b1.append(e)}})},wrap:function(e){var b1=bI.isFunction(e);return this.each(function(b2){bI(this).wrapAll(b1?e.call(this,b2):e)
})},unwrap:function(){return this.parent().each(function(){if(!bI.nodeName(this,"body")){bI(this).replaceWith(this.childNodes)
}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.appendChild(e)
}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){this.insertBefore(e,this.firstChild)
}})},before:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this)
}})},after:function(){return this.domManip(arguments,false,function(e){if(this.parentNode){this.parentNode.insertBefore(e,this.nextSibling)
}})},remove:function(e,b3){var b2,b1=0;for(;(b2=this[b1])!=null;b1++){if(!e||bI.filter(e,[b2]).length>0){if(!b3&&b2.nodeType===1){bI.cleanData(k(b2))
}if(b2.parentNode){if(b3&&bI.contains(b2.ownerDocument,b2)){br(k(b2,"script"))}b2.parentNode.removeChild(b2)
}}}return this},empty:function(){var b1,e=0;for(;(b1=this[e])!=null;e++){if(b1.nodeType===1){bI.cleanData(k(b1,false))
}while(b1.firstChild){b1.removeChild(b1.firstChild)}if(b1.options&&bI.nodeName(b1,"select")){b1.options.length=0
}}return this},clone:function(b1,e){b1=b1==null?false:b1;e=e==null?b1:e;return this.map(function(){return bI.clone(this,b1,e)
})},html:function(e){return bI.access(this,function(b4){var b3=this[0]||{},b2=0,b1=this.length;
if(b4===aF){return b3.nodeType===1?b3.innerHTML.replace(aA,""):aF}if(typeof b4==="string"&&!al.test(b4)&&(bI.support.htmlSerialize||!J.test(b4))&&(bI.support.leadingWhitespace||!b0.test(b4))&&!T[(m.exec(b4)||["",""])[1].toLowerCase()]){b4=b4.replace(aC,"<$1></$2>");
try{for(;b2<b1;b2++){b3=this[b2]||{};if(b3.nodeType===1){bI.cleanData(k(b3,false));
b3.innerHTML=b4}}b3=0}catch(b5){}}if(b3){this.empty().append(b4)}},null,e,arguments.length)
},replaceWith:function(b1){var e=bI.isFunction(b1);if(!e&&typeof b1!=="string"){b1=bI(b1).not(this).detach()
}return this.domManip([b1],true,function(b4){var b3=this.nextSibling,b2=this.parentNode;
if(b2&&this.nodeType===1||this.nodeType===11){bI(this).remove();if(b3){b3.parentNode.insertBefore(b4,b3)
}else{b2.appendChild(b4)}}})},detach:function(e){return this.remove(e,true)},domManip:function(b8,ce,cd){b8=aH.apply([],b8);
var b7,b6,b4,e,b2,cb,b5=0,b3=this.length,ca=this,cc=b3-1,b9=b8[0],b1=bI.isFunction(b9);
if(b1||!(b3<=1||typeof b9!=="string"||bI.support.checkClone||!bT.test(b9))){return this.each(function(cg){var cf=ca.eq(cg);
if(b1){b8[0]=b9.call(this,cg,ce?cf.html():aF)}cf.domManip(b8,ce,cd)})}if(b3){b7=bI.buildFragment(b8,this[0].ownerDocument,false,this);
b6=b7.firstChild;if(b7.childNodes.length===1){b7=b6}if(b6){ce=ce&&bI.nodeName(b6,"tr");
b4=bI.map(k(b7,"script"),t);e=b4.length;for(;b5<b3;b5++){b2=b7;if(b5!==cc){b2=bI.clone(b2,true,true);
if(e){bI.merge(b4,k(b2,"script"))}}cd.call(ce&&bI.nodeName(this[b5],"table")?x(this[b5],"tbody"):this[b5],b2,b5)
}if(e){cb=b4[b4.length-1].ownerDocument;bI.map(b4,bc);for(b5=0;b5<e;b5++){b2=b4[b5];
if(by.test(b2.type||"")&&!bI._data(b2,"globalEval")&&bI.contains(cb,b2)){if(b2.src){bI.ajax({url:b2.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})
}else{bI.globalEval((b2.text||b2.textContent||b2.innerHTML||"").replace(aK,""))}}}}b7=b6=null
}}return this}});function x(b1,e){return b1.getElementsByTagName(e)[0]||b1.appendChild(b1.ownerDocument.createElement(e))
}function t(b1){var e=b1.getAttributeNode("type");b1.type=(e&&e.specified)+"/"+b1.type;
return b1}function bc(b1){var e=ar.exec(b1.type);if(e){b1.type=e[1]}else{b1.removeAttribute("type")
}return b1}function br(e,b2){var b3,b1=0;for(;(b3=e[b1])!=null;b1++){bI._data(b3,"globalEval",!b2||bI._data(b2[b1],"globalEval"))
}}function at(b7,b1){if(b1.nodeType!==1||!bI.hasData(b7)){return}var b4,b3,e,b6=bI._data(b7),b5=bI._data(b1,b6),b2=b6.events;
if(b2){delete b5.handle;b5.events={};for(b4 in b2){for(b3=0,e=b2[b4].length;b3<e;
b3++){bI.event.add(b1,b4,b2[b4][b3])}}}if(b5.data){b5.data=bI.extend({},b5.data)}}function Q(b4,b1){var b5,b2,b3;
if(b1.nodeType!==1){return}b5=b1.nodeName.toLowerCase();if(!bI.support.noCloneEvent&&b1[bI.expando]){b2=bI._data(b1);
for(b3 in b2.events){bI.removeEvent(b1,b3,b2.handle)}b1.removeAttribute(bI.expando)
}if(b5==="script"&&b1.text!==b4.text){t(b1).text=b4.text;bc(b1)}else{if(b5==="object"){if(b1.parentNode){b1.outerHTML=b4.outerHTML
}if(bI.support.html5Clone&&(b4.innerHTML&&!bI.trim(b1.innerHTML))){b1.innerHTML=b4.innerHTML
}}else{if(b5==="input"&&q.test(b4.type)){b1.defaultChecked=b1.checked=b4.checked;
if(b1.value!==b4.value){b1.value=b4.value}}else{if(b5==="option"){b1.defaultSelected=b1.selected=b4.defaultSelected
}else{if(b5==="input"||b5==="textarea"){b1.defaultValue=b4.defaultValue}}}}}}bI.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,b1){bI.fn[e]=function(b2){var b3,b5=0,b4=[],b7=bI(b2),b6=b7.length-1;
for(;b5<=b6;b5++){b3=b5===b6?this:this.clone(true);bI(b7[b5])[b1](b3);ao.apply(b4,b3.get())
}return this.pushStack(b4)}});function k(b3,e){var b1,b4,b2=0,b5=typeof b3.getElementsByTagName!=="undefined"?b3.getElementsByTagName(e||"*"):typeof b3.querySelectorAll!=="undefined"?b3.querySelectorAll(e||"*"):aF;
if(!b5){for(b5=[],b1=b3.childNodes||b3;(b4=b1[b2])!=null;b2++){if(!e||bI.nodeName(b4,e)){b5.push(b4)
}else{bI.merge(b5,k(b4,e))}}}return e===aF||e&&bI.nodeName(b3,e)?bI.merge([b3],b5):b5
}function bU(e){if(q.test(e.type)){e.defaultChecked=e.checked}}bI.extend({clone:function(b1,b3,e){var b5,b6,b2,b4,b8,b7=bI.contains(b1.ownerDocument,b1);
if(bI.support.html5Clone||bI.isXMLDoc(b1)||!J.test("<"+b1.nodeName+">")){b8=b1.cloneNode(true)
}else{j.innerHTML=b1.outerHTML;j.removeChild(b8=j.firstChild)}if((!bI.support.noCloneEvent||!bI.support.noCloneChecked)&&(b1.nodeType===1||b1.nodeType===11)&&!bI.isXMLDoc(b1)){b5=k(b8);
b6=k(b1);for(b4=0;(b2=b6[b4])!=null;++b4){if(b5[b4]){Q(b2,b5[b4])}}}if(b3){if(e){b6=b6||k(b1);
b5=b5||k(b8);for(b4=0;(b2=b6[b4])!=null;b4++){at(b2,b5[b4])}}else{at(b1,b8)}}b5=k(b8,"script");
if(b5.length>0){br(b5,!b7&&k(b1,"script"))}b5=b6=b2=null;return b8},buildFragment:function(b1,b3,b8,cd){var b7,b5,ce,cc,b2,cb,b9,b6=b1.length,b4=A(b3),e=[],ca=0;
for(;ca<b6;ca++){b5=b1[ca];if(b5||b5===0){if(bI.type(b5)==="object"){bI.merge(e,b5.nodeType?[b5]:b5)
}else{if(!I.test(b5)){e.push(b3.createTextNode(b5))}else{cc=cc||b4.appendChild(b3.createElement("div"));
ce=(m.exec(b5)||["",""])[1].toLowerCase();b2=T[ce]||T._default;cc.innerHTML=b2[1]+b5.replace(aC,"<$1></$2>")+b2[2];
b9=b2[0];while(b9--){cc=cc.lastChild}if(!bI.support.leadingWhitespace&&b0.test(b5)){e.push(b3.createTextNode(b0.exec(b5)[0]))
}if(!bI.support.tbody){b5=ce==="table"&&!bV.test(b5)?cc.firstChild:b2[1]==="<table>"&&!bV.test(b5)?cc:0;
b9=b5&&b5.childNodes.length;while(b9--){if(bI.nodeName((cb=b5.childNodes[b9]),"tbody")&&!cb.childNodes.length){b5.removeChild(cb)
}}}bI.merge(e,cc.childNodes);cc.textContent="";while(cc.firstChild){cc.removeChild(cc.firstChild)
}cc=b4.lastChild}}}}if(cc){b4.removeChild(cc)}if(!bI.support.appendChecked){bI.grep(k(e,"input"),bU)
}ca=0;while((b5=e[ca++])){if(cd&&bI.inArray(b5,cd)!==-1){continue}b7=bI.contains(b5.ownerDocument,b5);
cc=k(b4.appendChild(b5),"script");if(b7){br(cc)}if(b8){b9=0;while((b5=cc[b9++])){if(by.test(b5.type||"")){b8.push(b5)
}}}}cc=null;return b4},cleanData:function(b1,b9){var b4,b2,b3,b8,b5=0,ca=bI.expando,e=bI.cache,b6=bI.support.deleteExpando,b7=bI.event.special;
for(;(b3=b1[b5])!=null;b5++){if(b9||bI.acceptData(b3)){b2=b3[ca];b4=b2&&e[b2];if(b4){if(b4.events){for(b8 in b4.events){if(b7[b8]){bI.event.remove(b3,b8)
}else{bI.removeEvent(b3,b8,b4.handle)}}}if(e[b2]){delete e[b2];if(b6){delete b3[ca]
}else{if(typeof b3.removeAttribute!=="undefined"){b3.removeAttribute(ca)}else{b3[ca]=null
}}a6.push(b2)}}}}}});var E,bn,aD,bg=/alpha\([^)]*\)/i,aT=/opacity\s*=\s*([^)]*)/,bm=/^(top|right|bottom|left)$/,F=/^(none|table(?!-c[ea]).+)/,aY=/^margin/,a9=new RegExp("^("+bz+")(.*)$","i"),W=new RegExp("^("+bz+")(?!px)[a-z%]+$","i"),S=new RegExp("^([+-])=("+bz+")","i"),bj={BODY:"block"},bb={position:"absolute",visibility:"hidden",display:"block"},bB={letterSpacing:0,fontWeight:400},bS=["Top","Right","Bottom","Left"],av=["Webkit","O","Moz","ms"];
function b(b3,b1){if(b1 in b3){return b1}var b4=b1.charAt(0).toUpperCase()+b1.slice(1),e=b1,b2=av.length;
while(b2--){b1=av[b2]+b4;if(b1 in b3){return b1}}return e}function P(b1,e){b1=e||b1;
return bI.css(b1,"display")==="none"||!bI.contains(b1.ownerDocument,b1)}function p(b5,e){var b4,b1=[],b2=0,b3=b5.length;
for(;b2<b3;b2++){b4=b5[b2];if(!b4.style){continue}b1[b2]=bI._data(b4,"olddisplay");
if(e){if(!b1[b2]&&b4.style.display==="none"){b4.style.display=""}if(b4.style.display===""&&P(b4)){b1[b2]=bI._data(b4,"olddisplay",bD(b4.nodeName))
}}else{if(!b1[b2]&&!P(b4)){bI._data(b4,"olddisplay",bI.css(b4,"display"))}}}for(b2=0;
b2<b3;b2++){b4=b5[b2];if(!b4.style){continue}if(!e||b4.style.display==="none"||b4.style.display===""){b4.style.display=e?b1[b2]||"":"none"
}}return b5}bI.fn.extend({css:function(e,b1){return bI.access(this,function(b6,b3,b7){var b5,b2,b8={},b4=0;
if(bI.isArray(b3)){b5=bn(b6);b2=b3.length;for(;b4<b2;b4++){b8[b3[b4]]=bI.css(b6,b3[b4],false,b5)
}return b8}return b7!==aF?bI.style(b6,b3,b7):bI.css(b6,b3)},e,b1,arguments.length>1)
},show:function(){return p(this,true)},hide:function(){return p(this)},toggle:function(b1){var e=typeof b1==="boolean";
return this.each(function(){if(e?b1:P(this)){bI(this).show()}else{bI(this).hide()
}})}});bI.extend({cssHooks:{opacity:{get:function(b2,b1){if(b1){var e=E(b2,"opacity");
return e===""?"1":e}}}},cssNumber:{columnCount:true,fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":bI.support.cssFloat?"cssFloat":"styleFloat"},style:function(b3,b2,b9,b4){if(!b3||b3.nodeType===3||b3.nodeType===8||!b3.style){return
}var b7,b8,ca,b5=bI.camelCase(b2),b1=b3.style;b2=bI.cssProps[b5]||(bI.cssProps[b5]=b(b1,b5));
ca=bI.cssHooks[b2]||bI.cssHooks[b5];if(b9!==aF){b8=typeof b9;if(b8==="string"&&(b7=S.exec(b9))){b9=(b7[1]+1)*b7[2]+parseFloat(bI.css(b3,b2));
b8="number"}if(b9==null||b8==="number"&&isNaN(b9)){return}if(b8==="number"&&!bI.cssNumber[b5]){b9+="px"
}if(!bI.support.clearCloneStyle&&b9===""&&b2.indexOf("background")===0){b1[b2]="inherit"
}if(!ca||!("set" in ca)||(b9=ca.set(b3,b9,b4))!==aF){try{b1[b2]=b9}catch(b6){}}}else{if(ca&&"get" in ca&&(b7=ca.get(b3,false,b4))!==aF){return b7
}return b1[b2]}},css:function(b6,b4,b1,b5){var b7,b3,e,b2=bI.camelCase(b4);b4=bI.cssProps[b2]||(bI.cssProps[b2]=b(b6.style,b2));
e=bI.cssHooks[b4]||bI.cssHooks[b2];if(e&&"get" in e){b7=e.get(b6,true,b1)}if(b7===aF){b7=E(b6,b4,b5)
}if(b7==="normal"&&b4 in bB){b7=bB[b4]}if(b1){b3=parseFloat(b7);return b1===true||bI.isNumeric(b3)?b3||0:b7
}return b7},swap:function(b5,b4,b6,b3){var b2,b1,e={};for(b1 in b4){e[b1]=b5.style[b1];
b5.style[b1]=b4[b1]}b2=b6.apply(b5,b3||[]);for(b1 in b4){b5.style[b1]=e[b1]}return b2
}});if(a2.getComputedStyle){bn=function(e){return a2.getComputedStyle(e,null)};E=function(b4,b2,b6){var b3,b1,b8,b5=b6||bn(b4),b7=b5?b5.getPropertyValue(b2)||b5[b2]:aF,e=b4.style;
if(b5){if(b7===""&&!bI.contains(b4.ownerDocument,b4)){b7=bI.style(b4,b2)}if(W.test(b7)&&aY.test(b2)){b3=e.width;
b1=e.minWidth;b8=e.maxWidth;e.minWidth=e.maxWidth=e.width=b7;b7=b5.width;e.width=b3;
e.minWidth=b1;e.maxWidth=b8}}return b7}}else{if(l.documentElement.currentStyle){bn=function(e){return e.currentStyle
};E=function(b3,b1,b6){var b2,b5,b7,b4=b6||bn(b3),b8=b4?b4[b1]:aF,e=b3.style;if(b8==null&&e&&e[b1]){b8=e[b1]
}if(W.test(b8)&&!bm.test(b1)){b2=e.left;b5=b3.runtimeStyle;b7=b5&&b5.left;if(b7){b5.left=b3.currentStyle.left
}e.left=b1==="fontSize"?"1em":b8;b8=e.pixelLeft+"px";e.left=b2;if(b7){b5.left=b7}}return b8===""?"auto":b8
}}}function aJ(e,b2,b3){var b1=a9.exec(b2);return b1?Math.max(0,b1[1]-(b3||0))+(b1[2]||"px"):b2
}function aw(b4,b1,e,b6,b3){var b2=e===(b6?"border":"content")?4:b1==="width"?1:0,b5=0;
for(;b2<4;b2+=2){if(e==="margin"){b5+=bI.css(b4,e+bS[b2],true,b3)}if(b6){if(e==="content"){b5-=bI.css(b4,"padding"+bS[b2],true,b3)
}if(e!=="margin"){b5-=bI.css(b4,"border"+bS[b2]+"Width",true,b3)}}else{b5+=bI.css(b4,"padding"+bS[b2],true,b3);
if(e!=="padding"){b5+=bI.css(b4,"border"+bS[b2]+"Width",true,b3)}}}return b5}function u(b4,b1,e){var b3=true,b5=b1==="width"?b4.offsetWidth:b4.offsetHeight,b2=bn(b4),b6=bI.support.boxSizing&&bI.css(b4,"boxSizing",false,b2)==="border-box";
if(b5<=0||b5==null){b5=E(b4,b1,b2);if(b5<0||b5==null){b5=b4.style[b1]}if(W.test(b5)){return b5
}b3=b6&&(bI.support.boxSizingReliable||b5===b4.style[b1]);b5=parseFloat(b5)||0}return(b5+aw(b4,b1,e||(b6?"border":"content"),b3,b2))+"px"
}function bD(b2){var b1=l,e=bj[b2];if(!e){e=a1(b2,b1);if(e==="none"||!e){aD=(aD||bI("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(b1.documentElement);
b1=(aD[0].contentWindow||aD[0].contentDocument).document;b1.write("<!doctype html><html><body>");
b1.close();e=a1(b2,b1);aD.detach()}bj[b2]=e}return e}function a1(e,b3){var b1=bI(b3.createElement(e)).appendTo(b3.body),b2=bI.css(b1[0],"display");
b1.remove();return b2}bI.each(["height","width"],function(b1,e){bI.cssHooks[e]={get:function(b4,b3,b2){if(b3){return b4.offsetWidth===0&&F.test(bI.css(b4,"display"))?bI.swap(b4,bb,function(){return u(b4,e,b2)
}):u(b4,e,b2)}},set:function(b4,b5,b2){var b3=b2&&bn(b4);return aJ(b4,b5,b2?aw(b4,e,b2,bI.support.boxSizing&&bI.css(b4,"boxSizing",false,b3)==="border-box",b3):0)
}}});if(!bI.support.opacity){bI.cssHooks.opacity={get:function(b1,e){return aT.test((e&&b1.currentStyle?b1.currentStyle.filter:b1.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":e?"1":""
},set:function(b4,b5){var b3=b4.style,b1=b4.currentStyle,e=bI.isNumeric(b5)?"alpha(opacity="+b5*100+")":"",b2=b1&&b1.filter||b3.filter||"";
b3.zoom=1;if((b5>=1||b5==="")&&bI.trim(b2.replace(bg,""))===""&&b3.removeAttribute){b3.removeAttribute("filter");
if(b5===""||b1&&!b1.filter){return}}b3.filter=bg.test(b2)?b2.replace(bg,e):b2+" "+e
}}}bI(function(){if(!bI.support.reliableMarginRight){bI.cssHooks.marginRight={get:function(b1,e){if(e){return bI.swap(b1,{display:"inline-block"},E,[b1,"marginRight"])
}}}}if(!bI.support.pixelPosition&&bI.fn.position){bI.each(["top","left"],function(e,b1){bI.cssHooks[b1]={get:function(b3,b2){if(b2){b2=E(b3,b1);
return W.test(b2)?bI(b3).position()[b1]+"px":b2}}}})}});if(bI.expr&&bI.expr.filters){bI.expr.filters.hidden=function(e){return(e.offsetWidth===0&&e.offsetHeight===0)||(!bI.support.reliableHiddenOffsets&&((e.style&&e.style.display)||bI.css(e,"display"))==="none")
};bI.expr.filters.visible=function(e){return !bI.expr.filters.hidden(e)}}bI.each({margin:"",padding:"",border:"Width"},function(e,b1){bI.cssHooks[e+b1]={expand:function(b4){var b3=0,b2={},b5=typeof b4==="string"?b4.split(" "):[b4];
for(;b3<4;b3++){b2[e+bS[b3]+b1]=b5[b3]||b5[b3-2]||b5[0]}return b2}};if(!aY.test(e)){bI.cssHooks[e+b1].set=aJ
}});var bu=/%20/g,aR=/\[\]$/,U=/\r?\n/g,c=/^(?:submit|button|image|reset)$/i,au=/^(?:input|select|textarea|keygen)/i;
bI.fn.extend({serialize:function(){return bI.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=bI.prop(this,"elements");
return e?bI.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!bI(this).is(":disabled")&&au.test(this.nodeName)&&!c.test(e)&&(this.checked||!q.test(e))
}).map(function(e,b1){var b2=bI(this).val();return b2==null?null:bI.isArray(b2)?bI.map(b2,function(b3){return{name:b1.name,value:b3.replace(U,"\r\n")}
}):{name:b1.name,value:b2.replace(U,"\r\n")}}).get()}});bI.param=function(e,b2){var b3,b1=[],b4=function(b5,b6){b6=bI.isFunction(b6)?b6():(b6==null?"":b6);
b1[b1.length]=encodeURIComponent(b5)+"="+encodeURIComponent(b6)};if(b2===aF){b2=bI.ajaxSettings&&bI.ajaxSettings.traditional
}if(bI.isArray(e)||(e.jquery&&!bI.isPlainObject(e))){bI.each(e,function(){b4(this.name,this.value)
})}else{for(b3 in e){i(b3,e[b3],b2,b4)}}return b1.join("&").replace(bu,"+")};function i(b2,b4,b1,b3){var e;
if(bI.isArray(b4)){bI.each(b4,function(b6,b5){if(b1||aR.test(b2)){b3(b2,b5)}else{i(b2+"["+(typeof b5==="object"?b6:"")+"]",b5,b1,b3)
}})}else{if(!b1&&bI.type(b4)==="object"){for(e in b4){i(b2+"["+e+"]",b4[e],b1,b3)
}}else{b3(b2,b4)}}}var bZ,Y,bN=bI.now(),az=/\?/,ap=/#.*$/,O=/([?&])_=[^&]*/,af=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,B=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,o=/^(?:GET|HEAD)$/,aG=/^\/\//,aU=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,bY=bI.fn.load,v={},a7={},aW="*/".concat("*");
try{Y=aL.href}catch(bf){Y=l.createElement("a");Y.href="";Y=Y.href}bZ=aU.exec(Y.toLowerCase())||[];
function bK(e){return function(b4,b5){if(typeof b4!=="string"){b5=b4;b4="*"}var b1,b2=0,b3=b4.toLowerCase().match(ac)||[];
if(bI.isFunction(b5)){while((b1=b3[b2++])){if(b1[0]==="+"){b1=b1.slice(1)||"*";(e[b1]=e[b1]||[]).unshift(b5)
}else{(e[b1]=e[b1]||[]).push(b5)}}}}}function n(e,b2,b6,b3){var b1={},b4=(e===a7);
function b5(b7){var b8;b1[b7]=true;bI.each(e[b7]||[],function(ca,b9){var cb=b9(b2,b6,b3);
if(typeof cb==="string"&&!b4&&!b1[cb]){b2.dataTypes.unshift(cb);b5(cb);return false
}else{if(b4){return !(b8=cb)}}});return b8}return b5(b2.dataTypes[0])||!b1["*"]&&b5("*")
}function r(b2,b3){var b1,e,b4=bI.ajaxSettings.flatOptions||{};for(b1 in b3){if(b3[b1]!==aF){(b4[b1]?b2:(e||(e={})))[b1]=b3[b1]
}}if(e){bI.extend(true,b2,e)}return b2}bI.fn.load=function(b3,b6,b7){if(typeof b3!=="string"&&bY){return bY.apply(this,arguments)
}var e,b4,b2,b1=this,b5=b3.indexOf(" ");if(b5>=0){e=b3.slice(b5,b3.length);b3=b3.slice(0,b5)
}if(bI.isFunction(b6)){b7=b6;b6=aF}else{if(b6&&typeof b6==="object"){b4="POST"}}if(b1.length>0){bI.ajax({url:b3,type:b4,dataType:"html",data:b6}).done(function(b8){b2=arguments;
b1.html(e?bI("<div>").append(bI.parseHTML(b8)).find(e):b8)}).complete(b7&&function(b9,b8){b1.each(b7,b2||[b9.responseText,b8,b9])
})}return this};bI.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,b1){bI.fn[b1]=function(b2){return this.on(b1,b2)
}});bI.each(["get","post"],function(e,b1){bI[b1]=function(b2,b4,b5,b3){if(bI.isFunction(b4)){b3=b3||b5;
b5=b4;b4=aF}return bI.ajax({url:b2,type:b1,dataType:b3,data:b4,success:b5})}});bI.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Y,type:"GET",isLocal:B.test(bZ[1]),global:true,processData:true,async:true,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":aW,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a2.String,"text html":true,"text json":bI.parseJSON,"text xml":bI.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(b1,e){return e?r(r(b1,bI.ajaxSettings),e):r(bI.ajaxSettings,b1)
},ajaxPrefilter:bK(v),ajaxTransport:bK(a7),ajax:function(b5,b2){if(typeof b5==="object"){b2=b5;
b5=aF}b2=b2||{};var ch,b6,cl,b3,ca,ce,b1,cg,b9=bI.ajaxSetup({},b2),cn=b9.context||b9,cc=b9.context&&(cn.nodeType||cn.jquery)?bI(cn):bI.event,cm=bI.Deferred(),cj=bI.Callbacks("once memory"),b7=b9.statusCode||{},cd={},ck={},b4=0,b8="canceled",cf={readyState:0,getResponseHeader:function(co){var e;
if(b4===2){if(!b3){b3={};while((e=af.exec(cl))){b3[e[1].toLowerCase()]=e[2]}}e=b3[co.toLowerCase()]
}return e==null?null:e},getAllResponseHeaders:function(){return b4===2?cl:null},setRequestHeader:function(co,cp){var e=co.toLowerCase();
if(!b4){co=ck[e]=ck[e]||co;cd[co]=cp}return this},overrideMimeType:function(e){if(!b4){b9.mimeType=e
}return this},statusCode:function(co){var e;if(co){if(b4<2){for(e in co){b7[e]=[b7[e],co[e]]
}}else{cf.always(co[cf.status])}}return this},abort:function(co){var e=co||b8;if(ch){ch.abort(e)
}cb(0,e);return this}};cm.promise(cf).complete=cj.add;cf.success=cf.done;cf.error=cf.fail;
b9.url=((b5||b9.url||Y)+"").replace(ap,"").replace(aG,bZ[1]+"//");b9.type=b2.method||b2.type||b9.method||b9.type;
b9.dataTypes=bI.trim(b9.dataType||"*").toLowerCase().match(ac)||[""];if(b9.crossDomain==null){ce=aU.exec(b9.url.toLowerCase());
b9.crossDomain=!!(ce&&(ce[1]!==bZ[1]||ce[2]!==bZ[2]||(ce[3]||(ce[1]==="http:"?80:443))!=(bZ[3]||(bZ[1]==="http:"?80:443))))
}if(b9.data&&b9.processData&&typeof b9.data!=="string"){b9.data=bI.param(b9.data,b9.traditional)
}n(v,b9,b2,cf);if(b4===2){return cf}b1=b9.global;if(b1&&bI.active++===0){bI.event.trigger("ajaxStart")
}b9.type=b9.type.toUpperCase();b9.hasContent=!o.test(b9.type);b6=b9.url;if(!b9.hasContent){if(b9.data){b6=(b9.url+=(az.test(b6)?"&":"?")+b9.data);
delete b9.data}if(b9.cache===false){b9.url=O.test(b6)?b6.replace(O,"$1_="+bN++):b6+(az.test(b6)?"&":"?")+"_="+bN++
}}if(b9.ifModified){if(bI.lastModified[b6]){cf.setRequestHeader("If-Modified-Since",bI.lastModified[b6])
}if(bI.etag[b6]){cf.setRequestHeader("If-None-Match",bI.etag[b6])}}if(b9.data&&b9.hasContent&&b9.contentType!==false||b2.contentType){cf.setRequestHeader("Content-Type",b9.contentType)
}cf.setRequestHeader("Accept",b9.dataTypes[0]&&b9.accepts[b9.dataTypes[0]]?b9.accepts[b9.dataTypes[0]]+(b9.dataTypes[0]!=="*"?", "+aW+"; q=0.01":""):b9.accepts["*"]);
for(cg in b9.headers){cf.setRequestHeader(cg,b9.headers[cg])}if(b9.beforeSend&&(b9.beforeSend.call(cn,cf,b9)===false||b4===2)){return cf.abort()
}b8="abort";for(cg in {success:1,error:1,complete:1}){cf[cg](b9[cg])}ch=n(a7,b9,b2,cf);
if(!ch){cb(-1,"No Transport")}else{cf.readyState=1;if(b1){cc.trigger("ajaxSend",[cf,b9])
}if(b9.async&&b9.timeout>0){ca=setTimeout(function(){cf.abort("timeout")},b9.timeout)
}try{b4=1;ch.send(cd,cb)}catch(ci){if(b4<2){cb(-1,ci)}else{throw ci}}}function cb(cs,co,ct,cq){var e,cw,cu,cr,cv,cp=co;
if(b4===2){return}b4=2;if(ca){clearTimeout(ca)}ch=aF;cl=cq||"";cf.readyState=cs>0?4:0;
if(ct){cr=g(b9,cf,ct)}if(cs>=200&&cs<300||cs===304){if(b9.ifModified){cv=cf.getResponseHeader("Last-Modified");
if(cv){bI.lastModified[b6]=cv}cv=cf.getResponseHeader("etag");if(cv){bI.etag[b6]=cv
}}if(cs===304){e=true;cp="notmodified"}else{e=ag(b9,cr);cp=e.state;cw=e.data;cu=e.error;
e=!cu}}else{cu=cp;if(cs||!cp){cp="error";if(cs<0){cs=0}}}cf.status=cs;cf.statusText=(co||cp)+"";
if(e){cm.resolveWith(cn,[cw,cp,cf])}else{cm.rejectWith(cn,[cf,cp,cu])}cf.statusCode(b7);
b7=aF;if(b1){cc.trigger(e?"ajaxSuccess":"ajaxError",[cf,b9,e?cw:cu])}cj.fireWith(cn,[cf,cp]);
if(b1){cc.trigger("ajaxComplete",[cf,b9]);if(!(--bI.active)){bI.event.trigger("ajaxStop")
}}}return cf},getScript:function(e,b1){return bI.get(e,aF,b1,"script")},getJSON:function(e,b1,b2){return bI.get(e,b1,b2,"json")
}});function g(b9,b8,b5){var b4,b6,b3,e,b1=b9.contents,b7=b9.dataTypes,b2=b9.responseFields;
for(b6 in b2){if(b6 in b5){b8[b2[b6]]=b5[b6]}}while(b7[0]==="*"){b7.shift();if(b4===aF){b4=b9.mimeType||b8.getResponseHeader("Content-Type")
}}if(b4){for(b6 in b1){if(b1[b6]&&b1[b6].test(b4)){b7.unshift(b6);break}}}if(b7[0] in b5){b3=b7[0]
}else{for(b6 in b5){if(!b7[0]||b9.converters[b6+" "+b7[0]]){b3=b6;break}if(!e){e=b6
}}b3=b3||e}if(b3){if(b3!==b7[0]){b7.unshift(b3)}return b5[b3]}}function ag(cb,b3){var b9,b1,b7,b4,ca={},b5=0,b8=cb.dataTypes.slice(),b2=b8[0];
if(cb.dataFilter){b3=cb.dataFilter(b3,cb.dataType)}if(b8[1]){for(b9 in cb.converters){ca[b9.toLowerCase()]=cb.converters[b9]
}}for(;(b7=b8[++b5]);){if(b7!=="*"){if(b2!=="*"&&b2!==b7){b9=ca[b2+" "+b7]||ca["* "+b7];
if(!b9){for(b1 in ca){b4=b1.split(" ");if(b4[1]===b7){b9=ca[b2+" "+b4[0]]||ca["* "+b4[0]];
if(b9){if(b9===true){b9=ca[b1]}else{if(ca[b1]!==true){b7=b4[0];b8.splice(b5--,0,b7)
}}break}}}}if(b9!==true){if(b9&&cb["throws"]){b3=b9(b3)}else{try{b3=b9(b3)}catch(b6){return{state:"parsererror",error:b9?b6:"No conversion from "+b2+" to "+b7}
}}}}b2=b7}}return{state:"success",data:b3}}bI.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){bI.globalEval(e);
return e}}});bI.ajaxPrefilter("script",function(e){if(e.cache===aF){e.cache=false
}if(e.crossDomain){e.type="GET";e.global=false}});bI.ajaxTransport("script",function(b2){if(b2.crossDomain){var e,b1=l.head||bI("head")[0]||l.documentElement;
return{send:function(b3,b4){e=l.createElement("script");e.async=true;if(b2.scriptCharset){e.charset=b2.scriptCharset
}e.src=b2.url;e.onload=e.onreadystatechange=function(b6,b5){if(b5||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;
if(e.parentNode){e.parentNode.removeChild(e)}e=null;if(!b5){b4(200,"success")}}};
b1.insertBefore(e,b1.firstChild)},abort:function(){if(e){e.onload(aF,true)}}}}});
var bq=[],a5=/(=)\?(?=&|$)|\?\?/;bI.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=bq.pop()||(bI.expando+"_"+(bN++));
this[e]=true;return e}});bI.ajaxPrefilter("json jsonp",function(b3,e,b4){var b6,b1,b2,b5=b3.jsonp!==false&&(a5.test(b3.url)?"url":typeof b3.data==="string"&&!(b3.contentType||"").indexOf("application/x-www-form-urlencoded")&&a5.test(b3.data)&&"data");
if(b5||b3.dataTypes[0]==="jsonp"){b6=b3.jsonpCallback=bI.isFunction(b3.jsonpCallback)?b3.jsonpCallback():b3.jsonpCallback;
if(b5){b3[b5]=b3[b5].replace(a5,"$1"+b6)}else{if(b3.jsonp!==false){b3.url+=(az.test(b3.url)?"&":"?")+b3.jsonp+"="+b6
}}b3.converters["script json"]=function(){if(!b2){bI.error(b6+" was not called")}return b2[0]
};b3.dataTypes[0]="json";b1=a2[b6];a2[b6]=function(){b2=arguments};b4.always(function(){a2[b6]=b1;
if(b3[b6]){b3.jsonpCallback=e.jsonpCallback;bq.push(b6)}if(b2&&bI.isFunction(b1)){b1(b2[0])
}b2=b1=aF});return"script"}});var ah,ax,ay=0,aP=a2.ActiveXObject&&function(){var e;
for(e in ah){ah[e](aF,true)}};function bC(){try{return new a2.XMLHttpRequest()}catch(b1){}}function bd(){try{return new a2.ActiveXObject("Microsoft.XMLHTTP")
}catch(b1){}}bI.ajaxSettings.xhr=a2.ActiveXObject?function(){return !this.isLocal&&bC()||bd()
}:bC;ax=bI.ajaxSettings.xhr();bI.support.cors=!!ax&&("withCredentials" in ax);ax=bI.support.ajax=!!ax;
if(ax){bI.ajaxTransport(function(e){if(!e.crossDomain||bI.support.cors){var b1;return{send:function(b7,b2){var b5,b3,b6=e.xhr();
if(e.username){b6.open(e.type,e.url,e.async,e.username,e.password)}else{b6.open(e.type,e.url,e.async)
}if(e.xhrFields){for(b3 in e.xhrFields){b6[b3]=e.xhrFields[b3]}}if(e.mimeType&&b6.overrideMimeType){b6.overrideMimeType(e.mimeType)
}if(!e.crossDomain&&!b7["X-Requested-With"]){b7["X-Requested-With"]="XMLHttpRequest"
}try{for(b3 in b7){b6.setRequestHeader(b3,b7[b3])}}catch(b4){}b6.send((e.hasContent&&e.data)||null);
b1=function(cg,ca){var cb,b9,b8,ce,cd;try{if(b1&&(ca||b6.readyState===4)){b1=aF;if(b5){b6.onreadystatechange=bI.noop;
if(aP){delete ah[b5]}}if(ca){if(b6.readyState!==4){b6.abort()}}else{ce={};cb=b6.status;
cd=b6.responseXML;b8=b6.getAllResponseHeaders();if(cd&&cd.documentElement){ce.xml=cd
}if(typeof b6.responseText==="string"){ce.text=b6.responseText}try{b9=b6.statusText
}catch(cf){b9=""}if(!cb&&e.isLocal&&!e.crossDomain){cb=ce.text?200:404}else{if(cb===1223){cb=204
}}}}}catch(cc){if(!ca){b2(-1,cc)}}if(ce){b2(cb,b9,ce,b8)}};if(!e.async){b1()}else{if(b6.readyState===4){setTimeout(b1)
}else{b5=++ay;if(aP){if(!ah){ah={};bI(a2).unload(aP)}ah[b5]=b1}b6.onreadystatechange=b1
}}},abort:function(){if(b1){b1(aF,true)}}}}})}var K,ad,bQ=/^(?:toggle|show|hide)$/,bJ=new RegExp("^(?:([+-])=|)("+bz+")([a-z%]*)$","i"),bP=/queueHooks$/,aB=[h],a0={"*":[function(e,b7){var b3,b8,b9=this.createTween(e,b7),b4=bJ.exec(b7),b5=b9.cur(),b1=+b5||0,b2=1,b6=20;
if(b4){b3=+b4[2];b8=b4[3]||(bI.cssNumber[e]?"":"px");if(b8!=="px"&&b1){b1=bI.css(b9.elem,e,true)||b3||1;
do{b2=b2||".5";b1=b1/b2;bI.style(b9.elem,e,b1+b8)}while(b2!==(b2=b9.cur()/b5)&&b2!==1&&--b6)
}b9.unit=b8;b9.start=b1;b9.end=b4[1]?b1+(b4[1]+1)*b3:b3}return b9}]};function bl(){setTimeout(function(){K=aF
});return(K=bI.now())}function be(b1,e){bI.each(e,function(b6,b4){var b5=(a0[b6]||[]).concat(a0["*"]),b2=0,b3=b5.length;
for(;b2<b3;b2++){if(b5[b2].call(b1,b6,b4)){return}}})}function f(b2,b6,b9){var ca,e,b5=0,b1=aB.length,b8=bI.Deferred().always(function(){delete b4.elem
}),b4=function(){if(e){return false}var cg=K||bl(),cd=Math.max(0,b3.startTime+b3.duration-cg),cb=cd/b3.duration||0,cf=1-cb,cc=0,ce=b3.tweens.length;
for(;cc<ce;cc++){b3.tweens[cc].run(cf)}b8.notifyWith(b2,[b3,cf,cd]);if(cf<1&&ce){return cd
}else{b8.resolveWith(b2,[b3]);return false}},b3=b8.promise({elem:b2,props:bI.extend({},b6),opts:bI.extend(true,{specialEasing:{}},b9),originalProperties:b6,originalOptions:b9,startTime:K||bl(),duration:b9.duration,tweens:[],createTween:function(cd,cb){var cc=bI.Tween(b2,b3.opts,cd,cb,b3.opts.specialEasing[cd]||b3.opts.easing);
b3.tweens.push(cc);return cc},stop:function(cc){var cb=0,cd=cc?b3.tweens.length:0;
if(e){return this}e=true;for(;cb<cd;cb++){b3.tweens[cb].run(1)}if(cc){b8.resolveWith(b2,[b3,cc])
}else{b8.rejectWith(b2,[b3,cc])}return this}}),b7=b3.props;am(b7,b3.opts.specialEasing);
for(;b5<b1;b5++){ca=aB[b5].call(b3,b2,b7,b3.opts);if(ca){return ca}}be(b3,b7);if(bI.isFunction(b3.opts.start)){b3.opts.start.call(b2,b3)
}bI.fx.timer(bI.extend(b4,{elem:b2,anim:b3,queue:b3.opts.queue}));return b3.progress(b3.opts.progress).done(b3.opts.done,b3.opts.complete).fail(b3.opts.fail).always(b3.opts.always)
}function am(b3,b5){var b2,b1,b6,b4,e;for(b2 in b3){b1=bI.camelCase(b2);b6=b5[b1];
b4=b3[b2];if(bI.isArray(b4)){b6=b4[1];b4=b3[b2]=b4[0]}if(b2!==b1){b3[b1]=b4;delete b3[b2]
}e=bI.cssHooks[b1];if(e&&"expand" in e){b4=e.expand(b4);delete b3[b1];for(b2 in b4){if(!(b2 in b3)){b3[b2]=b4[b2];
b5[b2]=b6}}}else{b5[b1]=b6}}}bI.Animation=bI.extend(f,{tweener:function(b1,b4){if(bI.isFunction(b1)){b4=b1;
b1=["*"]}else{b1=b1.split(" ")}var b3,e=0,b2=b1.length;for(;e<b2;e++){b3=b1[e];a0[b3]=a0[b3]||[];
a0[b3].unshift(b4)}},prefilter:function(b1,e){if(e){aB.unshift(b1)}else{aB.push(b1)
}}});function h(b4,ca,e){var b9,b2,cc,b3,cg,b6,cf,ce,cd,b5=this,b1=b4.style,cb={},b8=[],b7=b4.nodeType&&P(b4);
if(!e.queue){ce=bI._queueHooks(b4,"fx");if(ce.unqueued==null){ce.unqueued=0;cd=ce.empty.fire;
ce.empty.fire=function(){if(!ce.unqueued){cd()}}}ce.unqueued++;b5.always(function(){b5.always(function(){ce.unqueued--;
if(!bI.queue(b4,"fx").length){ce.empty.fire()}})})}if(b4.nodeType===1&&("height" in ca||"width" in ca)){e.overflow=[b1.overflow,b1.overflowX,b1.overflowY];
if(bI.css(b4,"display")==="inline"&&bI.css(b4,"float")==="none"){if(!bI.support.inlineBlockNeedsLayout||bD(b4.nodeName)==="inline"){b1.display="inline-block"
}else{b1.zoom=1}}}if(e.overflow){b1.overflow="hidden";if(!bI.support.shrinkWrapBlocks){b5.done(function(){b1.overflow=e.overflow[0];
b1.overflowX=e.overflow[1];b1.overflowY=e.overflow[2]})}}for(b9 in ca){cc=ca[b9];
if(bQ.exec(cc)){delete ca[b9];b6=b6||cc==="toggle";if(cc===(b7?"hide":"show")){continue
}b8.push(b9)}}b3=b8.length;if(b3){cg=bI._data(b4,"fxshow")||bI._data(b4,"fxshow",{});
if("hidden" in cg){b7=cg.hidden}if(b6){cg.hidden=!b7}if(b7){bI(b4).show()}else{b5.done(function(){bI(b4).hide()
})}b5.done(function(){var ch;bI._removeData(b4,"fxshow");for(ch in cb){bI.style(b4,ch,cb[ch])
}});for(b9=0;b9<b3;b9++){b2=b8[b9];cf=b5.createTween(b2,b7?cg[b2]:0);cb[b2]=cg[b2]||bI.style(b4,b2);
if(!(b2 in cg)){cg[b2]=cf.start;if(b7){cf.end=cf.start;cf.start=b2==="width"||b2==="height"?1:0
}}}}}function G(b2,b1,b4,e,b3){return new G.prototype.init(b2,b1,b4,e,b3)}bI.Tween=G;
G.prototype={constructor:G,init:function(b3,b1,b5,e,b4,b2){this.elem=b3;this.prop=b5;
this.easing=b4||"swing";this.options=b1;this.start=this.now=this.cur();this.end=e;
this.unit=b2||(bI.cssNumber[b5]?"":"px")},cur:function(){var e=G.propHooks[this.prop];
return e&&e.get?e.get(this):G.propHooks._default.get(this)},run:function(b2){var b1,e=G.propHooks[this.prop];
if(this.options.duration){this.pos=b1=bI.easing[this.easing](b2,this.options.duration*b2,0,1,this.options.duration)
}else{this.pos=b1=b2}this.now=(this.end-this.start)*b1+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)
}if(e&&e.set){e.set(this)}else{G.propHooks._default.set(this)}return this}};G.prototype.init.prototype=G.prototype;
G.propHooks={_default:{get:function(b1){var e;if(b1.elem[b1.prop]!=null&&(!b1.elem.style||b1.elem.style[b1.prop]==null)){return b1.elem[b1.prop]
}e=bI.css(b1.elem,b1.prop,"auto");return !e||e==="auto"?0:e},set:function(e){if(bI.fx.step[e.prop]){bI.fx.step[e.prop](e)
}else{if(e.elem.style&&(e.elem.style[bI.cssProps[e.prop]]!=null||bI.cssHooks[e.prop])){bI.style(e.elem,e.prop,e.now+e.unit)
}else{e.elem[e.prop]=e.now}}}}};G.propHooks.scrollTop=G.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now
}}};bI.each(["toggle","show","hide"],function(b1,e){var b2=bI.fn[e];bI.fn[e]=function(b3,b5,b4){return b3==null||typeof b3==="boolean"?b2.apply(this,arguments):this.animate(bH(e,true),b3,b5,b4)
}});bI.fn.extend({fadeTo:function(e,b3,b2,b1){return this.filter(P).css("opacity",0).show().end().animate({opacity:b3},e,b2,b1)
},animate:function(b6,b3,b5,b4){var b2=bI.isEmptyObject(b6),e=bI.speed(b3,b5,b4),b1=function(){var b7=f(this,bI.extend({},b6),e);
b1.finish=function(){b7.stop(true)};if(b2||bI._data(this,"finish")){b7.stop(true)
}};b1.finish=b1;return b2||e.queue===false?this.each(b1):this.queue(e.queue,b1)},stop:function(b2,b1,e){var b3=function(b4){var b5=b4.stop;
delete b4.stop;b5(e)};if(typeof b2!=="string"){e=b1;b1=b2;b2=aF}if(b1&&b2!==false){this.queue(b2||"fx",[])
}return this.each(function(){var b7=true,b4=b2!=null&&b2+"queueHooks",b6=bI.timers,b5=bI._data(this);
if(b4){if(b5[b4]&&b5[b4].stop){b3(b5[b4])}}else{for(b4 in b5){if(b5[b4]&&b5[b4].stop&&bP.test(b4)){b3(b5[b4])
}}}for(b4=b6.length;b4--;){if(b6[b4].elem===this&&(b2==null||b6[b4].queue===b2)){b6[b4].anim.stop(e);
b7=false;b6.splice(b4,1)}}if(b7||!e){bI.dequeue(this,b2)}})},finish:function(e){if(e!==false){e=e||"fx"
}return this.each(function(){var b3,b6=bI._data(this),b2=b6[e+"queue"],b1=b6[e+"queueHooks"],b5=bI.timers,b4=b2?b2.length:0;
b6.finish=true;bI.queue(this,e,[]);if(b1&&b1.cur&&b1.cur.finish){b1.cur.finish.call(this)
}for(b3=b5.length;b3--;){if(b5[b3].elem===this&&b5[b3].queue===e){b5[b3].anim.stop(true);
b5.splice(b3,1)}}for(b3=0;b3<b4;b3++){if(b2[b3]&&b2[b3].finish){b2[b3].finish.call(this)
}}delete b6.finish})}});function bH(b2,b4){var b3,e={height:b2},b1=0;b4=b4?1:0;for(;
b1<4;b1+=2-b4){b3=bS[b1];e["margin"+b3]=e["padding"+b3]=b2}if(b4){e.opacity=e.width=b2
}return e}bI.each({slideDown:bH("show"),slideUp:bH("hide"),slideToggle:bH("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,b1){bI.fn[e]=function(b2,b4,b3){return this.animate(b1,b2,b4,b3)
}});bI.speed=function(b2,b3,b1){var e=b2&&typeof b2==="object"?bI.extend({},b2):{complete:b1||!b1&&b3||bI.isFunction(b2)&&b2,duration:b2,easing:b1&&b3||b3&&!bI.isFunction(b3)&&b3};
e.duration=bI.fx.off?0:typeof e.duration==="number"?e.duration:e.duration in bI.fx.speeds?bI.fx.speeds[e.duration]:bI.fx.speeds._default;
if(e.queue==null||e.queue===true){e.queue="fx"}e.old=e.complete;e.complete=function(){if(bI.isFunction(e.old)){e.old.call(this)
}if(e.queue){bI.dequeue(this,e.queue)}};return e};bI.easing={linear:function(e){return e
},swing:function(e){return 0.5-Math.cos(e*Math.PI)/2}};bI.timers=[];bI.fx=G.prototype.init;
bI.fx.tick=function(){var b2,b1=bI.timers,e=0;K=bI.now();for(;e<b1.length;e++){b2=b1[e];
if(!b2()&&b1[e]===b2){b1.splice(e--,1)}}if(!b1.length){bI.fx.stop()}K=aF};bI.fx.timer=function(e){if(e()&&bI.timers.push(e)){bI.fx.start()
}};bI.fx.interval=13;bI.fx.start=function(){if(!ad){ad=setInterval(bI.fx.tick,bI.fx.interval)
}};bI.fx.stop=function(){clearInterval(ad);ad=null};bI.fx.speeds={slow:600,fast:200,_default:400};
bI.fx.step={};if(bI.expr&&bI.expr.filters){bI.expr.filters.animated=function(e){return bI.grep(bI.timers,function(b1){return e===b1.elem
}).length}}bI.fn.offset=function(b1){if(arguments.length){return b1===aF?this:this.each(function(b6){bI.offset.setOffset(this,b1,b6)
})}var e,b5,b3={top:0,left:0},b2=this[0],b4=b2&&b2.ownerDocument;if(!b4){return}e=b4.documentElement;
if(!bI.contains(e,b2)){return b3}if(typeof b2.getBoundingClientRect!=="undefined"){b3=b2.getBoundingClientRect()
}b5=bo(b4);return{top:b3.top+(b5.pageYOffset||e.scrollTop)-(e.clientTop||0),left:b3.left+(b5.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}
};bI.offset={setOffset:function(b3,cc,b6){var b7=bI.css(b3,"position");if(b7==="static"){b3.style.position="relative"
}var b5=bI(b3),b1=b5.offset(),e=bI.css(b3,"top"),ca=bI.css(b3,"left"),cb=(b7==="absolute"||b7==="fixed")&&bI.inArray("auto",[e,ca])>-1,b9={},b8={},b2,b4;
if(cb){b8=b5.position();b2=b8.top;b4=b8.left}else{b2=parseFloat(e)||0;b4=parseFloat(ca)||0
}if(bI.isFunction(cc)){cc=cc.call(b3,b6,b1)}if(cc.top!=null){b9.top=(cc.top-b1.top)+b2
}if(cc.left!=null){b9.left=(cc.left-b1.left)+b4}if("using" in cc){cc.using.call(b3,b9)
}else{b5.css(b9)}}};bI.fn.extend({position:function(){if(!this[0]){return}var b2,b3,e={top:0,left:0},b1=this[0];
if(bI.css(b1,"position")==="fixed"){b3=b1.getBoundingClientRect()}else{b2=this.offsetParent();
b3=this.offset();if(!bI.nodeName(b2[0],"html")){e=b2.offset()}e.top+=bI.css(b2[0],"borderTopWidth",true);
e.left+=bI.css(b2[0],"borderLeftWidth",true)}return{top:b3.top-e.top-bI.css(b1,"marginTop",true),left:b3.left-e.left-bI.css(b1,"marginLeft",true)}
},offsetParent:function(){return this.map(function(){var e=this.offsetParent||l.documentElement;
while(e&&(!bI.nodeName(e,"html")&&bI.css(e,"position")==="static")){e=e.offsetParent
}return e||l.documentElement})}});bI.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b2,b1){var e=/Y/.test(b1);
bI.fn[b2]=function(b3){return bI.access(this,function(b4,b7,b6){var b5=bo(b4);if(b6===aF){return b5?(b1 in b5)?b5[b1]:b5.document.documentElement[b7]:b4[b7]
}if(b5){b5.scrollTo(!e?b6:bI(b5).scrollLeft(),e?b6:bI(b5).scrollTop())}else{b4[b7]=b6
}},b2,b3,arguments.length,null)}});function bo(e){return bI.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false
}bI.each({Height:"height",Width:"width"},function(e,b1){bI.each({padding:"inner"+e,content:b1,"":"outer"+e},function(b2,b3){bI.fn[b3]=function(b7,b6){var b5=arguments.length&&(b2||typeof b7!=="boolean"),b4=b2||(b7===true||b6===true?"margin":"border");
return bI.access(this,function(b9,b8,ca){var cb;if(bI.isWindow(b9)){return b9.document.documentElement["client"+e]
}if(b9.nodeType===9){cb=b9.documentElement;return Math.max(b9.body["scroll"+e],cb["scroll"+e],b9.body["offset"+e],cb["offset"+e],cb["client"+e])
}return ca===aF?bI.css(b9,b8,b4):bI.style(b9,b8,ca,b4)},b1,b5?b7:aF,b5,null)}})});
a2.jQuery=a2.$=bI;if(typeof define==="function"&&define.amd&&define.amd.jQuery){define("jquery",[],function(){return bI
})}})(window);
/*! jQuery UI - v1.10.0 - 2013-02-05
* http://jqueryui.com
* Includes: 
* jquery.ui.core.js, 
* jquery.ui.widget.js, 
* jquery.ui.mouse.js, 
* jquery.ui.position.js, 
* jquery.ui.draggable.js, 
* jquery.ui.droppable.js, 
* jquery.ui.selectable.js, 
* jquery.ui.sortable.js, 
* jquery.ui.datepicker.js, 
* jquery.ui.menu.js, 
* jquery.ui.slider.js, 
* jquery.ui.tabs.js, 
* jquery.ui.effect.js, 
* jquery.ui.effect-drop.js, 
* jquery.ui.effect-slide.js
* Copyright (c) 2013 jQuery Foundation and other contributors Licensed MIT */
(function(b,f){var a=0,e=/^ui-id-\d+$/;
b.ui=b.ui||{};if(b.ui.version){return}b.extend(b.ui,{version:"1.10.0",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
b.fn.extend({_focus:b.fn.focus,focus:function(g,h){return typeof g==="number"?this.each(function(){var i=this;
setTimeout(function(){b(i).focus();if(h){h.call(i)}},g)}):this._focus.apply(this,arguments)
},scrollParent:function(){var g;if((b.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){g=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(b.css(this,"position"))&&(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)}else{g=this.parents().filter(function(){return(/(auto|scroll)/).test(b.css(this,"overflow")+b.css(this,"overflow-y")+b.css(this,"overflow-x"))
}).eq(0)}return(/fixed/).test(this.css("position"))||!g.length?b(document):g},zIndex:function(j){if(j!==f){return this.css("zIndex",j)
}if(this.length){var h=b(this[0]),g,i;while(h.length&&h[0]!==document){g=h.css("position");
if(g==="absolute"||g==="relative"||g==="fixed"){i=parseInt(h.css("zIndex"),10);if(!isNaN(i)&&i!==0){return i
}}h=h.parent()}}return 0},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++a)
}})},removeUniqueId:function(){return this.each(function(){if(e.test(this.id)){b(this).removeAttr("id")
}})}});function d(i,g){var k,j,h,l=i.nodeName.toLowerCase();if("area"===l){k=i.parentNode;
j=k.name;if(!i.href||!j||k.nodeName.toLowerCase()!=="map"){return false}h=b("img[usemap=#"+j+"]")[0];
return !!h&&c(h)}return(/input|select|textarea|button|object/.test(l)?!i.disabled:"a"===l?i.href||g:g)&&c(i)
}function c(g){return b.expr.filters.visible(g)&&!b(g).parents().addBack().filter(function(){return b.css(this,"visibility")==="hidden"
}).length}b.extend(b.expr[":"],{data:b.expr.createPseudo?b.expr.createPseudo(function(g){return function(h){return !!b.data(h,g)
}}):function(j,h,g){return !!b.data(j,g[3])},focusable:function(g){return d(g,!isNaN(b.attr(g,"tabindex")))
},tabbable:function(i){var g=b.attr(i,"tabindex"),h=isNaN(g);return(h||g>=0)&&d(i,!h)
}});if(!b("<a>").outerWidth(1).jquery){b.each(["Width","Height"],function(j,g){var h=g==="Width"?["Left","Right"]:["Top","Bottom"],k=g.toLowerCase(),m={innerWidth:b.fn.innerWidth,innerHeight:b.fn.innerHeight,outerWidth:b.fn.outerWidth,outerHeight:b.fn.outerHeight};
function l(o,n,i,p){b.each(h,function(){n-=parseFloat(b.css(o,"padding"+this))||0;
if(i){n-=parseFloat(b.css(o,"border"+this+"Width"))||0}if(p){n-=parseFloat(b.css(o,"margin"+this))||0
}});return n}b.fn["inner"+g]=function(i){if(i===f){return m["inner"+g].call(this)
}return this.each(function(){b(this).css(k,l(this,i)+"px")})};b.fn["outer"+g]=function(i,n){if(typeof i!=="number"){return m["outer"+g].call(this,i)
}return this.each(function(){b(this).css(k,l(this,i,true,n)+"px")})}})}if(!b.fn.addBack){b.fn.addBack=function(g){return this.add(g==null?this.prevObject:this.prevObject.filter(g))
}}if(b("<a>").data("a-b","a").removeData("a-b").data("a-b")){b.fn.removeData=(function(g){return function(h){if(arguments.length){return g.call(this,b.camelCase(h))
}else{return g.call(this)}}})(b.fn.removeData)}b.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
b.support.selectstart="onselectstart" in document.createElement("div");b.fn.extend({disableSelection:function(){return this.bind((b.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(g){g.preventDefault()
})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});b.extend(b.ui,{plugin:{add:function(h,j,l){var g,k=b.ui[h].prototype;
for(g in l){k.plugins[g]=k.plugins[g]||[];k.plugins[g].push([j,l[g]])}},call:function(g,j,h){var k,l=g.plugins[j];
if(!l||!g.element[0].parentNode||g.element[0].parentNode.nodeType===11){return}for(k=0;
k<l.length;k++){if(g.options[l[k][0]]){l[k][1].apply(g.element,h)}}}},hasScroll:function(j,h){if(b(j).css("overflow")==="hidden"){return false
}var g=(h&&h==="left")?"scrollLeft":"scrollTop",i=false;if(j[g]>0){return true}j[g]=1;
i=(j[g]>0);j[g]=0;return i}})})(jQuery);(function(b,e){var a=0,d=Array.prototype.slice,c=b.cleanData;
b.cleanData=function(f){for(var g=0,h;(h=f[g])!=null;g++){try{b(h).triggerHandler("remove")
}catch(j){}}c(f)};b.widget=function(f,g,n){var k,l,i,m,h={},j=f.split(".")[0];f=f.split(".")[1];
k=j+"-"+f;if(!n){n=g;g=b.Widget}b.expr[":"][k.toLowerCase()]=function(o){return !!b.data(o,k)
};b[j]=b[j]||{};l=b[j][f];i=b[j][f]=function(o,p){if(!this._createWidget){return new i(o,p)
}if(arguments.length){this._createWidget(o,p)}};b.extend(i,l,{version:n.version,_proto:b.extend({},n),_childConstructors:[]});
m=new g();m.options=b.widget.extend({},m.options);b.each(n,function(p,o){if(!b.isFunction(o)){h[p]=o;
return}h[p]=(function(){var q=function(){return g.prototype[p].apply(this,arguments)
},r=function(s){return g.prototype[p].apply(this,s)};return function(){var u=this._super,s=this._superApply,t;
this._super=q;this._superApply=r;t=o.apply(this,arguments);this._super=u;this._superApply=s;
return t}})()});i.prototype=b.widget.extend(m,{widgetEventPrefix:l?m.widgetEventPrefix:f},h,{constructor:i,namespace:j,widgetName:f,widgetFullName:k});
if(l){b.each(l._childConstructors,function(p,q){var o=q.prototype;b.widget(o.namespace+"."+o.widgetName,i,q._proto)
});delete l._childConstructors}else{g._childConstructors.push(i)}b.widget.bridge(f,i)
};b.widget.extend=function(k){var g=d.call(arguments,1),j=0,f=g.length,h,i;for(;j<f;
j++){for(h in g[j]){i=g[j][h];if(g[j].hasOwnProperty(h)&&i!==e){if(b.isPlainObject(i)){k[h]=b.isPlainObject(k[h])?b.widget.extend({},k[h],i):b.widget.extend({},i)
}else{k[h]=i}}}}return k};b.widget.bridge=function(g,f){var h=f.prototype.widgetFullName||g;
b.fn[g]=function(k){var i=typeof k==="string",j=d.call(arguments,1),l=this;k=!i&&j.length?b.widget.extend.apply(null,[k].concat(j)):k;
if(i){this.each(function(){var n,m=b.data(this,h);if(!m){return b.error("cannot call methods on "+g+" prior to initialization; attempted to call method '"+k+"'")
}if(!b.isFunction(m[k])||k.charAt(0)==="_"){return b.error("no such method '"+k+"' for "+g+" widget instance")
}n=m[k].apply(m,j);if(n!==m&&n!==e){l=n&&n.jquery?l.pushStack(n.get()):n;return false
}})}else{this.each(function(){var m=b.data(this,h);if(m){m.option(k||{})._init()}else{b.data(this,h,new f(k,this))
}})}return l}};b.Widget=function(){};b.Widget._childConstructors=[];b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:false,create:null},_createWidget:function(f,g){g=b(g||this.defaultElement||this)[0];
this.element=b(g);this.uuid=a++;this.eventNamespace="."+this.widgetName+this.uuid;
this.options=b.widget.extend({},this.options,this._getCreateOptions(),f);this.bindings=b();
this.hoverable=b();this.focusable=b();if(g!==this){b.data(g,this.widgetFullName,this);
this._on(true,this.element,{remove:function(h){if(h.target===g){this.destroy()}}});
this.document=b(g.style?g.ownerDocument:g.document||g);this.window=b(this.document[0].defaultView||this.document[0].parentWindow)
}this._create();this._trigger("create",null,this._getCreateEventData());this._init()
},_getCreateOptions:b.noop,_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){this._destroy();
this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(b.camelCase(this.widgetFullName));
this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled");
this.bindings.unbind(this.eventNamespace);this.hoverable.removeClass("ui-state-hover");
this.focusable.removeClass("ui-state-focus")},_destroy:b.noop,widget:function(){return this.element
},option:function(j,k){var f=j,l,h,g;if(arguments.length===0){return b.widget.extend({},this.options)
}if(typeof j==="string"){f={};l=j.split(".");j=l.shift();if(l.length){h=f[j]=b.widget.extend({},this.options[j]);
for(g=0;g<l.length-1;g++){h[l[g]]=h[l[g]]||{};h=h[l[g]]}j=l.pop();if(k===e){return h[j]===e?null:h[j]
}h[j]=k}else{if(k===e){return this.options[j]===e?null:this.options[j]}f[j]=k}}this._setOptions(f);
return this},_setOptions:function(f){var g;for(g in f){this._setOption(g,f[g])}return this
},_setOption:function(f,g){this.options[f]=g;if(f==="disabled"){this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!g).attr("aria-disabled",g);
this.hoverable.removeClass("ui-state-hover");this.focusable.removeClass("ui-state-focus")
}return this},enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)
},_on:function(i,h,g){var j,f=this;if(typeof i!=="boolean"){g=h;h=i;i=false}if(!g){g=h;
h=this.element;j=this.widget()}else{h=j=b(h);this.bindings=this.bindings.add(h)}b.each(g,function(p,o){function m(){if(!i&&(f.options.disabled===true||b(this).hasClass("ui-state-disabled"))){return
}return(typeof o==="string"?f[o]:o).apply(f,arguments)}if(typeof o!=="string"){m.guid=o.guid=o.guid||m.guid||b.guid++
}var n=p.match(/^(\w+)\s*(.*)$/),l=n[1]+f.eventNamespace,k=n[2];if(k){j.delegate(k,l,m)
}else{h.bind(l,m)}})},_off:function(g,f){f=(f||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace;
g.unbind(f).undelegate(f)},_delay:function(i,h){function g(){return(typeof i==="string"?f[i]:i).apply(f,arguments)
}var f=this;return setTimeout(g,h||0)},_hoverable:function(f){this.hoverable=this.hoverable.add(f);
this._on(f,{mouseenter:function(g){b(g.currentTarget).addClass("ui-state-hover")},mouseleave:function(g){b(g.currentTarget).removeClass("ui-state-hover")
}})},_focusable:function(f){this.focusable=this.focusable.add(f);this._on(f,{focusin:function(g){b(g.currentTarget).addClass("ui-state-focus")
},focusout:function(g){b(g.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(f,g,h){var k,j,i=this.options[f];
h=h||{};g=b.Event(g);g.type=(f===this.widgetEventPrefix?f:this.widgetEventPrefix+f).toLowerCase();
g.target=this.element[0];j=g.originalEvent;if(j){for(k in j){if(!(k in g)){g[k]=j[k]
}}}this.element.trigger(g,h);return !(b.isFunction(i)&&i.apply(this.element[0],[g].concat(h))===false||g.isDefaultPrevented())
}};b.each({show:"fadeIn",hide:"fadeOut"},function(g,f){b.Widget.prototype["_"+g]=function(j,i,l){if(typeof i==="string"){i={effect:i}
}var k,h=!i?g:i===true||typeof i==="number"?f:i.effect||f;i=i||{};if(typeof i==="number"){i={duration:i}
}k=!b.isEmptyObject(i);i.complete=l;if(i.delay){j.delay(i.delay)}if(k&&b.effects&&b.effects.effect[h]){j[g](i)
}else{if(h!==g&&j[h]){j[h](i.duration,i.easing,l)}else{j.queue(function(m){b(this)[g]();
if(l){l.call(j[0])}m()})}}}})})(jQuery);(function(b,c){var a=false;b(document).mouseup(function(){a=false
});b.widget("ui.mouse",{version:"1.10.0",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var d=this;
this.element.bind("mousedown."+this.widgetName,function(e){return d._mouseDown(e)
}).bind("click."+this.widgetName,function(e){if(true===b.data(e.target,d.widgetName+".preventClickEvent")){b.removeData(e.target,d.widgetName+".preventClickEvent");
e.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+this.widgetName);
if(this._mouseMoveDelegate){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)
}},_mouseDown:function(f){if(a){return}(this._mouseStarted&&this._mouseUp(f));this._mouseDownEvent=f;
var e=this,g=(f.which===1),d=(typeof this.options.cancel==="string"&&f.target.nodeName?b(f.target).closest(this.options.cancel).length:false);
if(!g||d||!this._mouseCapture(f)){return true}this.mouseDelayMet=!this.options.delay;
if(!this.mouseDelayMet){this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=true
},this.options.delay)}if(this._mouseDistanceMet(f)&&this._mouseDelayMet(f)){this._mouseStarted=(this._mouseStart(f)!==false);
if(!this._mouseStarted){f.preventDefault();return true}}if(true===b.data(f.target,this.widgetName+".preventClickEvent")){b.removeData(f.target,this.widgetName+".preventClickEvent")
}this._mouseMoveDelegate=function(h){return e._mouseMove(h)};this._mouseUpDelegate=function(h){return e._mouseUp(h)
};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);
f.preventDefault();a=true;return true},_mouseMove:function(d){if(b.ui.ie&&(!document.documentMode||document.documentMode<9)&&!d.button){return this._mouseUp(d)
}if(this._mouseStarted){this._mouseDrag(d);return d.preventDefault()}if(this._mouseDistanceMet(d)&&this._mouseDelayMet(d)){this._mouseStarted=(this._mouseStart(this._mouseDownEvent,d)!==false);
(this._mouseStarted?this._mouseDrag(d):this._mouseUp(d))}return !this._mouseStarted
},_mouseUp:function(d){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);
if(this._mouseStarted){this._mouseStarted=false;if(d.target===this._mouseDownEvent.target){b.data(d.target,this.widgetName+".preventClickEvent",true)
}this._mouseStop(d)}return false},_mouseDistanceMet:function(d){return(Math.max(Math.abs(this._mouseDownEvent.pageX-d.pageX),Math.abs(this._mouseDownEvent.pageY-d.pageY))>=this.options.distance)
},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true
}})})(jQuery);(function(e,c){e.ui=e.ui||{};var j,k=Math.max,o=Math.abs,m=Math.round,d=/left|center|right/,h=/top|center|bottom/,a=/[\+\-]\d+%?/,l=/^\w+/,b=/%$/,g=e.fn.position;
function n(r,q,p){return[parseInt(r[0],10)*(b.test(r[0])?q/100:1),parseInt(r[1],10)*(b.test(r[1])?p/100:1)]
}function i(p,q){return parseInt(e.css(p,q),10)||0}function f(q){var p=q[0];if(p.nodeType===9){return{width:q.width(),height:q.height(),offset:{top:0,left:0}}
}if(e.isWindow(p)){return{width:q.width(),height:q.height(),offset:{top:q.scrollTop(),left:q.scrollLeft()}}
}if(p.preventDefault){return{width:0,height:0,offset:{top:p.pageY,left:p.pageX}}}return{width:q.outerWidth(),height:q.outerHeight(),offset:q.offset()}
}e.position={scrollbarWidth:function(){if(j!==c){return j}var q,p,s=e("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),r=s.children()[0];
e("body").append(s);q=r.offsetWidth;s.css("overflow","scroll");p=r.offsetWidth;if(q===p){p=s[0].clientWidth
}s.remove();return(j=q-p)},getScrollInfo:function(t){var s=t.isWindow?"":t.element.css("overflow-x"),r=t.isWindow?"":t.element.css("overflow-y"),q=s==="scroll"||(s==="auto"&&t.width<t.element[0].scrollWidth),p=r==="scroll"||(r==="auto"&&t.height<t.element[0].scrollHeight);
return{width:q?e.position.scrollbarWidth():0,height:p?e.position.scrollbarWidth():0}
},getWithinInfo:function(q){var r=e(q||window),p=e.isWindow(r[0]);return{element:r,isWindow:p,offset:r.offset()||{left:0,top:0},scrollLeft:r.scrollLeft(),scrollTop:r.scrollTop(),width:p?r.width():r.outerWidth(),height:p?r.height():r.outerHeight()}
}};e.fn.position=function(z){if(!z||!z.of){return g.apply(this,arguments)}z=e.extend({},z);
var A,w,u,y,t,p,v=e(z.of),s=e.position.getWithinInfo(z.within),q=e.position.getScrollInfo(s),x=(z.collision||"flip").split(" "),r={};
p=f(v);if(v[0].preventDefault){z.at="left top"}w=p.width;u=p.height;y=p.offset;t=e.extend({},y);
e.each(["my","at"],function(){var D=(z[this]||"").split(" "),C,B;if(D.length===1){D=d.test(D[0])?D.concat(["center"]):h.test(D[0])?["center"].concat(D):["center","center"]
}D[0]=d.test(D[0])?D[0]:"center";D[1]=h.test(D[1])?D[1]:"center";C=a.exec(D[0]);B=a.exec(D[1]);
r[this]=[C?C[0]:0,B?B[0]:0];z[this]=[l.exec(D[0])[0],l.exec(D[1])[0]]});if(x.length===1){x[1]=x[0]
}if(z.at[0]==="right"){t.left+=w}else{if(z.at[0]==="center"){t.left+=w/2}}if(z.at[1]==="bottom"){t.top+=u
}else{if(z.at[1]==="center"){t.top+=u/2}}A=n(r.at,w,u);t.left+=A[0];t.top+=A[1];return this.each(function(){var C,L,E=e(this),G=E.outerWidth(),D=E.outerHeight(),F=i(this,"marginLeft"),B=i(this,"marginTop"),K=G+F+i(this,"marginRight")+q.width,J=D+B+i(this,"marginBottom")+q.height,H=e.extend({},t),I=n(r.my,E.outerWidth(),E.outerHeight());
if(z.my[0]==="right"){H.left-=G}else{if(z.my[0]==="center"){H.left-=G/2}}if(z.my[1]==="bottom"){H.top-=D
}else{if(z.my[1]==="center"){H.top-=D/2}}H.left+=I[0];H.top+=I[1];if(!e.support.offsetFractions){H.left=m(H.left);
H.top=m(H.top)}C={marginLeft:F,marginTop:B};e.each(["left","top"],function(N,M){if(e.ui.position[x[N]]){e.ui.position[x[N]][M](H,{targetWidth:w,targetHeight:u,elemWidth:G,elemHeight:D,collisionPosition:C,collisionWidth:K,collisionHeight:J,offset:[A[0]+I[0],A[1]+I[1]],my:z.my,at:z.at,within:s,elem:E})
}});if(z.using){L=function(P){var R=y.left-H.left,O=R+w-G,Q=y.top-H.top,N=Q+u-D,M={target:{element:v,left:y.left,top:y.top,width:w,height:u},element:{element:E,left:H.left,top:H.top,width:G,height:D},horizontal:O<0?"left":R>0?"right":"center",vertical:N<0?"top":Q>0?"bottom":"middle"};
if(w<G&&o(R+O)<w){M.horizontal="center"}if(u<D&&o(Q+N)<u){M.vertical="middle"}if(k(o(R),o(O))>k(o(Q),o(N))){M.important="horizontal"
}else{M.important="vertical"}z.using.call(this,P,M)}}E.offset(e.extend(H,{using:L}))
})};e.ui.position={fit:{left:function(t,s){var r=s.within,v=r.isWindow?r.scrollLeft:r.offset.left,x=r.width,u=t.left-s.collisionPosition.marginLeft,w=v-u,q=u+s.collisionWidth-x-v,p;
if(s.collisionWidth>x){if(w>0&&q<=0){p=t.left+w+s.collisionWidth-x-v;t.left+=w-p}else{if(q>0&&w<=0){t.left=v
}else{if(w>q){t.left=v+x-s.collisionWidth}else{t.left=v}}}}else{if(w>0){t.left+=w
}else{if(q>0){t.left-=q}else{t.left=k(t.left-u,t.left)}}}},top:function(s,r){var q=r.within,w=q.isWindow?q.scrollTop:q.offset.top,x=r.within.height,u=s.top-r.collisionPosition.marginTop,v=w-u,t=u+r.collisionHeight-x-w,p;
if(r.collisionHeight>x){if(v>0&&t<=0){p=s.top+v+r.collisionHeight-x-w;s.top+=v-p}else{if(t>0&&v<=0){s.top=w
}else{if(v>t){s.top=w+x-r.collisionHeight}else{s.top=w}}}}else{if(v>0){s.top+=v}else{if(t>0){s.top-=t
}else{s.top=k(s.top-u,s.top)}}}}},flip:{left:function(v,u){var t=u.within,z=t.offset.left+t.scrollLeft,C=t.width,r=t.isWindow?t.scrollLeft:t.offset.left,w=v.left-u.collisionPosition.marginLeft,A=w-r,q=w+u.collisionWidth-C-r,y=u.my[0]==="left"?-u.elemWidth:u.my[0]==="right"?u.elemWidth:0,B=u.at[0]==="left"?u.targetWidth:u.at[0]==="right"?-u.targetWidth:0,s=-2*u.offset[0],p,x;
if(A<0){p=v.left+y+B+s+u.collisionWidth-C-z;if(p<0||p<o(A)){v.left+=y+B+s}}else{if(q>0){x=v.left-u.collisionPosition.marginLeft+y+B+s-r;
if(x>0||o(x)<q){v.left+=y+B+s}}}},top:function(u,t){var s=t.within,B=s.offset.top+s.scrollTop,C=s.height,p=s.isWindow?s.scrollTop:s.offset.top,w=u.top-t.collisionPosition.marginTop,y=w-p,v=w+t.collisionHeight-C-p,z=t.my[1]==="top",x=z?-t.elemHeight:t.my[1]==="bottom"?t.elemHeight:0,D=t.at[1]==="top"?t.targetHeight:t.at[1]==="bottom"?-t.targetHeight:0,r=-2*t.offset[1],A,q;
if(y<0){q=u.top+x+D+r+t.collisionHeight-C-B;if((u.top+x+D+r)>y&&(q<0||q<o(y))){u.top+=x+D+r
}}else{if(v>0){A=u.top-t.collisionPosition.marginTop+x+D+r-p;if((u.top+x+D+r)>v&&(A>0||o(A)<v)){u.top+=x+D+r
}}}}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments);e.ui.position.fit.left.apply(this,arguments)
},top:function(){e.ui.position.flip.top.apply(this,arguments);e.ui.position.fit.top.apply(this,arguments)
}}};(function(){var t,v,q,s,r,p=document.getElementsByTagName("body")[0],u=document.createElement("div");
t=document.createElement(p?"div":"body");q={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"};
if(p){e.extend(q,{position:"absolute",left:"-1000px",top:"-1000px"})}for(r in q){t.style[r]=q[r]
}t.appendChild(u);v=p||document.documentElement;v.insertBefore(t,v.firstChild);u.style.cssText="position: absolute; left: 10.7432222px;";
s=e(u).offset().left;e.support.offsetFractions=s>10&&s<11;t.innerHTML="";v.removeChild(t)
})()}(jQuery));(function(a,b){a.widget("ui.draggable",a.ui.mouse,{version:"1.10.0",widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false,drag:null,start:null,stop:null},_create:function(){if(this.options.helper==="original"&&!(/^(?:r|a|f)/).test(this.element.css("position"))){this.element[0].style.position="relative"
}if(this.options.addClasses){this.element.addClass("ui-draggable")}if(this.options.disabled){this.element.addClass("ui-draggable-disabled")
}this._mouseInit()},_destroy:function(){this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
this._mouseDestroy()},_mouseCapture:function(c){var d=this.options;if(this.helper||d.disabled||a(c.target).closest(".ui-resizable-handle").length>0){return false
}this.handle=this._getHandle(c);if(!this.handle){return false}a(d.iframeFix===true?"iframe":d.iframeFix).each(function(){a("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1000}).css(a(this).offset()).appendTo("body")
});return true},_mouseStart:function(c){var d=this.options;this.helper=this._createHelper(c);
this.helper.addClass("ui-draggable-dragging");this._cacheHelperProportions();if(a.ui.ddmanager){a.ui.ddmanager.current=this
}this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();
this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
a.extend(this.offset,{click:{left:c.pageX-this.offset.left,top:c.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(c);this.originalPageX=c.pageX;
this.originalPageY=c.pageY;(d.cursorAt&&this._adjustOffsetFromHelper(d.cursorAt));
if(d.containment){this._setContainment()}if(this._trigger("start",c)===false){this._clear();
return false}this._cacheHelperProportions();if(a.ui.ddmanager&&!d.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,c)
}this._mouseDrag(c,true);if(a.ui.ddmanager){a.ui.ddmanager.dragStart(this,c)}return true
},_mouseDrag:function(c,e){this.position=this._generatePosition(c);this.positionAbs=this._convertPositionTo("absolute");
if(!e){var d=this._uiHash();if(this._trigger("drag",c,d)===false){this._mouseUp({});
return false}this.position=d.position}if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}if(a.ui.ddmanager){a.ui.ddmanager.drag(this,c)}return false},_mouseStop:function(e){var c,d=this,g=false,f=false;
if(a.ui.ddmanager&&!this.options.dropBehaviour){f=a.ui.ddmanager.drop(this,e)}if(this.dropped){f=this.dropped;
this.dropped=false}c=this.element[0];while(c&&(c=c.parentNode)){if(c===document){g=true
}}if(!g&&this.options.helper==="original"){return false}if((this.options.revert==="invalid"&&!f)||(this.options.revert==="valid"&&f)||this.options.revert===true||(a.isFunction(this.options.revert)&&this.options.revert.call(this.element,f))){a(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){if(d._trigger("stop",e)!==false){d._clear()
}})}else{if(this._trigger("stop",e)!==false){this._clear()}}return false},_mouseUp:function(c){a("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)
});if(a.ui.ddmanager){a.ui.ddmanager.dragStop(this,c)}return a.ui.mouse.prototype._mouseUp.call(this,c)
},cancel:function(){if(this.helper.is(".ui-draggable-dragging")){this._mouseUp({})
}else{this._clear()}return this},_getHandle:function(c){var d=!this.options.handle||!a(this.options.handle,this.element).length?true:false;
a(this.options.handle,this.element).find("*").addBack().each(function(){if(this===c.target){d=true
}});return d},_createHelper:function(d){var e=this.options,c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d])):(e.helper==="clone"?this.element.clone().removeAttr("id"):this.element);
if(!c.parents("body").length){c.appendTo((e.appendTo==="parent"?this.element[0].parentNode:e.appendTo))
}if(c[0]!==this.element[0]&&!(/(fixed|absolute)/).test(c.css("position"))){c.css("position","absolute")
}return c},_adjustOffsetFromHelper:function(c){if(typeof c==="string"){c=c.split(" ")
}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}}if("left" in c){this.offset.click.left=c.left+this.margins.left
}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left
}if("top" in c){this.offset.click.top=c.top+this.margins.top}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var c=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();
c.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]===document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&a.ui.ie)){c={top:0,left:0}
}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var c=this.element.position();
return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.element.css("marginLeft"),10)||0),top:(parseInt(this.element.css("marginTop"),10)||0),right:(parseInt(this.element.css("marginRight"),10)||0),bottom:(parseInt(this.element.css("marginBottom"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var e,g,d,f=this.options;if(f.containment==="parent"){f.containment=this.helper[0].parentNode
}if(f.containment==="document"||f.containment==="window"){this.containment=[f.containment==="document"?0:a(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,f.containment==="document"?0:a(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,(f.containment==="document"?0:a(window).scrollLeft())+a(f.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(f.containment==="document"?0:a(window).scrollTop())+(a(f.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(f.containment)&&f.containment.constructor!==Array){g=a(f.containment);
d=g[0];if(!d){return}e=(a(d).css("overflow")!=="hidden");this.containment=[(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0),(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0),(e?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];
this.relative_container=g}else{if(f.containment.constructor===Array){this.containment=f.containment
}}},_convertPositionTo:function(f,h){if(!h){h=this.position}var e=f==="absolute"?1:-1,c=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,g=(/(html|body)/i).test(c[0].tagName);
return{top:(h.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(g?0:c.scrollTop()))*e)),left:(h.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():g?0:c.scrollLeft())*e))}
},_generatePosition:function(d){var c,j,k,f,e=this.options,l=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,i=(/(html|body)/i).test(l[0].tagName),h=d.pageX,g=d.pageY;
if(this.originalPosition){if(this.containment){if(this.relative_container){j=this.relative_container.offset();
c=[this.containment[0]+j.left,this.containment[1]+j.top,this.containment[2]+j.left,this.containment[3]+j.top]
}else{c=this.containment}if(d.pageX-this.offset.click.left<c[0]){h=c[0]+this.offset.click.left
}if(d.pageY-this.offset.click.top<c[1]){g=c[1]+this.offset.click.top}if(d.pageX-this.offset.click.left>c[2]){h=c[2]+this.offset.click.left
}if(d.pageY-this.offset.click.top>c[3]){g=c[3]+this.offset.click.top}}if(e.grid){k=e.grid[1]?this.originalPageY+Math.round((g-this.originalPageY)/e.grid[1])*e.grid[1]:this.originalPageY;
g=c?((k-this.offset.click.top>=c[1]||k-this.offset.click.top>c[3])?k:((k-this.offset.click.top>=c[1])?k-e.grid[1]:k+e.grid[1])):k;
f=e.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/e.grid[0])*e.grid[0]:this.originalPageX;
h=c?((f-this.offset.click.left>=c[0]||f-this.offset.click.left>c[2])?f:((f-this.offset.click.left>=c[0])?f-e.grid[0]:f+e.grid[0])):f
}}return{top:(g-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(i?0:l.scrollTop())))),left:(h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():i?0:l.scrollLeft())))}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging");if(this.helper[0]!==this.element[0]&&!this.cancelHelperRemoval){this.helper.remove()
}this.helper=null;this.cancelHelperRemoval=false},_trigger:function(c,d,e){e=e||this._uiHash();
a.ui.plugin.call(this,c,[d,e]);if(c==="drag"){this.positionAbs=this._convertPositionTo("absolute")
}return a.Widget.prototype._trigger.call(this,c,d,e)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}
}});a.ui.plugin.add("draggable","connectToSortable",{start:function(d,f){var e=a(this).data("ui-draggable"),g=e.options,c=a.extend({},f,{item:e.element});
e.sortables=[];a(g.connectToSortable).each(function(){var h=a.data(this,"ui-sortable");
if(h&&!h.options.disabled){e.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();h._trigger("activate",d,c)}})},stop:function(d,f){var e=a(this).data("ui-draggable"),c=a.extend({},f,{item:e.element});
a.each(e.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;e.cancelHelperRemoval=true;
this.instance.cancelHelperRemoval=false;if(this.shouldRevert){this.instance.options.revert=true
}this.instance._mouseStop(d);this.instance.options.helper=this.instance.options._helper;
if(e.options.helper==="original"){this.instance.currentItem.css({top:"auto",left:"auto"})
}}else{this.instance.cancelHelperRemoval=false;this.instance._trigger("deactivate",d,c)
}})},drag:function(d,f){var e=a(this).data("ui-draggable"),c=this;a.each(e.sortables,function(){var g=false,h=this;
this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;
this.instance.offset.click=e.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){g=true;
a.each(e.sortables,function(){this.instance.positionAbs=e.positionAbs;this.instance.helperProportions=e.helperProportions;
this.instance.offset.click=e.offset.click;if(this!==h&&this.instance._intersectsWith(this.instance.containerCache)&&a.ui.contains(h.instance.element[0],this.instance.element[0])){g=false
}return g})}if(g){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=a(c).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return f.helper[0]
};d.target=this.instance.currentItem[0];this.instance._mouseCapture(d,true);this.instance._mouseStart(d,true,true);
this.instance.offset.click.top=e.offset.click.top;this.instance.offset.click.left=e.offset.click.left;
this.instance.offset.parent.left-=e.offset.parent.left-this.instance.offset.parent.left;
this.instance.offset.parent.top-=e.offset.parent.top-this.instance.offset.parent.top;
e._trigger("toSortable",d);e.dropped=this.instance.element;e.currentItem=e.element;
this.instance.fromOutside=e}if(this.instance.currentItem){this.instance._mouseDrag(d)
}}else{if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;
this.instance.options.revert=false;this.instance._trigger("out",d,this.instance._uiHash(this.instance));
this.instance._mouseStop(d,true);this.instance.options.helper=this.instance.options._helper;
this.instance.currentItem.remove();if(this.instance.placeholder){this.instance.placeholder.remove()
}e._trigger("fromSortable",d);e.dropped=false}}})}});a.ui.plugin.add("draggable","cursor",{start:function(){var c=a("body"),d=a(this).data("ui-draggable").options;
if(c.css("cursor")){d._cursor=c.css("cursor")}c.css("cursor",d.cursor)},stop:function(){var c=a(this).data("ui-draggable").options;
if(c._cursor){a("body").css("cursor",c._cursor)}}});a.ui.plugin.add("draggable","opacity",{start:function(d,e){var c=a(e.helper),f=a(this).data("ui-draggable").options;
if(c.css("opacity")){f._opacity=c.css("opacity")}c.css("opacity",f.opacity)},stop:function(c,d){var e=a(this).data("ui-draggable").options;
if(e._opacity){a(d.helper).css("opacity",e._opacity)}}});a.ui.plugin.add("draggable","scroll",{start:function(){var c=a(this).data("ui-draggable");
if(c.scrollParent[0]!==document&&c.scrollParent[0].tagName!=="HTML"){c.overflowOffset=c.scrollParent.offset()
}},drag:function(e){var d=a(this).data("ui-draggable"),f=d.options,c=false;if(d.scrollParent[0]!==document&&d.scrollParent[0].tagName!=="HTML"){if(!f.axis||f.axis!=="x"){if((d.overflowOffset.top+d.scrollParent[0].offsetHeight)-e.pageY<f.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop+f.scrollSpeed
}else{if(e.pageY-d.overflowOffset.top<f.scrollSensitivity){d.scrollParent[0].scrollTop=c=d.scrollParent[0].scrollTop-f.scrollSpeed
}}}if(!f.axis||f.axis!=="y"){if((d.overflowOffset.left+d.scrollParent[0].offsetWidth)-e.pageX<f.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft+f.scrollSpeed
}else{if(e.pageX-d.overflowOffset.left<f.scrollSensitivity){d.scrollParent[0].scrollLeft=c=d.scrollParent[0].scrollLeft-f.scrollSpeed
}}}}else{if(!f.axis||f.axis!=="x"){if(e.pageY-a(document).scrollTop()<f.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-f.scrollSpeed)
}else{if(a(window).height()-(e.pageY-a(document).scrollTop())<f.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+f.scrollSpeed)
}}}if(!f.axis||f.axis!=="y"){if(e.pageX-a(document).scrollLeft()<f.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-f.scrollSpeed)
}else{if(a(window).width()-(e.pageX-a(document).scrollLeft())<f.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+f.scrollSpeed)
}}}}if(c!==false&&a.ui.ddmanager&&!f.dropBehaviour){a.ui.ddmanager.prepareOffsets(d,e)
}}});a.ui.plugin.add("draggable","snap",{start:function(){var c=a(this).data("ui-draggable"),d=c.options;
c.snapElements=[];a(d.snap.constructor!==String?(d.snap.items||":data(ui-draggable)"):d.snap).each(function(){var f=a(this),e=f.offset();
if(this!==c.element[0]){c.snapElements.push({item:this,width:f.outerWidth(),height:f.outerHeight(),top:e.top,left:e.left})
}})},drag:function(u,p){var c,z,j,k,s,n,m,A,v,h,g=a(this).data("ui-draggable"),q=g.options,y=q.snapTolerance,x=p.offset.left,w=x+g.helperProportions.width,f=p.offset.top,e=f+g.helperProportions.height;
for(v=g.snapElements.length-1;v>=0;v--){s=g.snapElements[v].left;n=s+g.snapElements[v].width;
m=g.snapElements[v].top;A=m+g.snapElements[v].height;if(!((s-y<x&&x<n+y&&m-y<f&&f<A+y)||(s-y<x&&x<n+y&&m-y<e&&e<A+y)||(s-y<w&&w<n+y&&m-y<f&&f<A+y)||(s-y<w&&w<n+y&&m-y<e&&e<A+y))){if(g.snapElements[v].snapping){(g.options.snap.release&&g.options.snap.release.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))
}g.snapElements[v].snapping=false;continue}if(q.snapMode!=="inner"){c=Math.abs(m-e)<=y;
z=Math.abs(A-f)<=y;j=Math.abs(s-w)<=y;k=Math.abs(n-x)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m-g.helperProportions.height,left:0}).top-g.margins.top
}if(z){p.position.top=g._convertPositionTo("relative",{top:A,left:0}).top-g.margins.top
}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s-g.helperProportions.width}).left-g.margins.left
}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n}).left-g.margins.left
}}h=(c||z||j||k);if(q.snapMode!=="outer"){c=Math.abs(m-f)<=y;z=Math.abs(A-e)<=y;j=Math.abs(s-x)<=y;
k=Math.abs(n-w)<=y;if(c){p.position.top=g._convertPositionTo("relative",{top:m,left:0}).top-g.margins.top
}if(z){p.position.top=g._convertPositionTo("relative",{top:A-g.helperProportions.height,left:0}).top-g.margins.top
}if(j){p.position.left=g._convertPositionTo("relative",{top:0,left:s}).left-g.margins.left
}if(k){p.position.left=g._convertPositionTo("relative",{top:0,left:n-g.helperProportions.width}).left-g.margins.left
}}if(!g.snapElements[v].snapping&&(c||z||j||k||h)){(g.options.snap.snap&&g.options.snap.snap.call(g.element,u,a.extend(g._uiHash(),{snapItem:g.snapElements[v].item})))
}g.snapElements[v].snapping=(c||z||j||k||h)}}});a.ui.plugin.add("draggable","stack",{start:function(){var c,e=a(this).data("ui-draggable").options,d=a.makeArray(a(e.stack)).sort(function(g,f){return(parseInt(a(g).css("zIndex"),10)||0)-(parseInt(a(f).css("zIndex"),10)||0)
});if(!d.length){return}c=parseInt(d[0].style.zIndex,10)||0;a(d).each(function(f){this.style.zIndex=c+f
});this[0].style.zIndex=c+d.length}});a.ui.plugin.add("draggable","zIndex",{start:function(d,e){var c=a(e.helper),f=a(this).data("ui-draggable").options;
if(c.css("zIndex")){f._zIndex=c.css("zIndex")}c.css("zIndex",f.zIndex)},stop:function(c,d){var e=a(this).data("ui-draggable").options;
if(e._zIndex){a(d.helper).css("zIndex",e._zIndex)}}})})(jQuery);(function(b,c){function a(e,d,f){return(e>d)&&(e<(d+f))
}b.widget("ui.droppable",{version:"1.10.0",widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var e=this.options,d=e.accept;
this.isover=false;this.isout=true;this.accept=b.isFunction(d)?d:function(f){return f.is(d)
};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};
b.ui.ddmanager.droppables[e.scope]=b.ui.ddmanager.droppables[e.scope]||[];b.ui.ddmanager.droppables[e.scope].push(this);
(e.addClasses&&this.element.addClass("ui-droppable"))},_destroy:function(){var e=0,d=b.ui.ddmanager.droppables[this.options.scope];
for(;e<d.length;e++){if(d[e]===this){d.splice(e,1)}}this.element.removeClass("ui-droppable ui-droppable-disabled")
},_setOption:function(d,e){if(d==="accept"){this.accept=b.isFunction(e)?e:function(f){return f.is(e)
}}b.Widget.prototype._setOption.apply(this,arguments)},_activate:function(e){var d=b.ui.ddmanager.current;
if(this.options.activeClass){this.element.addClass(this.options.activeClass)}if(d){this._trigger("activate",e,this.ui(d))
}},_deactivate:function(e){var d=b.ui.ddmanager.current;if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(d){this._trigger("deactivate",e,this.ui(d))}},_over:function(e){var d=b.ui.ddmanager.current;
if(!d||(d.currentItem||d.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.hoverClass){this.element.addClass(this.options.hoverClass)
}this._trigger("over",e,this.ui(d))}},_out:function(e){var d=b.ui.ddmanager.current;
if(!d||(d.currentItem||d.element)[0]===this.element[0]){return}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)
}this._trigger("out",e,this.ui(d))}},_drop:function(e,f){var d=f||b.ui.ddmanager.current,g=false;
if(!d||(d.currentItem||d.element)[0]===this.element[0]){return false}this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var h=b.data(this,"ui-droppable");
if(h.options.greedy&&!h.options.disabled&&h.options.scope===d.options.scope&&h.accept.call(h.element[0],(d.currentItem||d.element))&&b.ui.intersect(d,b.extend(h,{offset:h.element.offset()}),h.options.tolerance)){g=true;
return false}});if(g){return false}if(this.accept.call(this.element[0],(d.currentItem||d.element))){if(this.options.activeClass){this.element.removeClass(this.options.activeClass)
}if(this.options.hoverClass){this.element.removeClass(this.options.hoverClass)}this._trigger("drop",e,this.ui(d));
return this.element}return false},ui:function(d){return{draggable:(d.currentItem||d.element),helper:d.helper,position:d.position,offset:d.positionAbs}
}});b.ui.intersect=function(q,j,o){if(!j.offset){return false}var h,i,f=(q.positionAbs||q.position.absolute).left,e=f+q.helperProportions.width,n=(q.positionAbs||q.position.absolute).top,m=n+q.helperProportions.height,g=j.offset.left,d=g+j.proportions.width,p=j.offset.top,k=p+j.proportions.height;
switch(o){case"fit":return(g<=f&&e<=d&&p<=n&&m<=k);case"intersect":return(g<f+(q.helperProportions.width/2)&&e-(q.helperProportions.width/2)<d&&p<n+(q.helperProportions.height/2)&&m-(q.helperProportions.height/2)<k);
case"pointer":h=((q.positionAbs||q.position.absolute).left+(q.clickOffset||q.offset.click).left);
i=((q.positionAbs||q.position.absolute).top+(q.clickOffset||q.offset.click).top);
return a(i,p,j.proportions.height)&&a(h,g,j.proportions.width);case"touch":return((n>=p&&n<=k)||(m>=p&&m<=k)||(n<p&&m>k))&&((f>=g&&f<=d)||(e>=g&&e<=d)||(f<g&&e>d));
default:return false}};b.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(g,k){var f,e,d=b.ui.ddmanager.droppables[g.options.scope]||[],h=k?k.type:null,l=(g.currentItem||g.element).find(":data(ui-droppable)").addBack();
droppablesLoop:for(f=0;f<d.length;f++){if(d[f].options.disabled||(g&&!d[f].accept.call(d[f].element[0],(g.currentItem||g.element)))){continue
}for(e=0;e<l.length;e++){if(l[e]===d[f].element[0]){d[f].proportions.height=0;continue droppablesLoop
}}d[f].visible=d[f].element.css("display")!=="none";if(!d[f].visible){continue}if(h==="mousedown"){d[f]._activate.call(d[f],k)
}d[f].offset=d[f].element.offset();d[f].proportions={width:d[f].element[0].offsetWidth,height:d[f].element[0].offsetHeight}
}},drop:function(d,e){var f=false;b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){if(!this.options){return
}if(!this.options.disabled&&this.visible&&b.ui.intersect(d,this,this.options.tolerance)){f=this._drop.call(this,e)||f
}if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],(d.currentItem||d.element))){this.isout=true;
this.isover=false;this._deactivate.call(this,e)}});return f},dragStart:function(d,e){d.element.parentsUntil("body").bind("scroll.droppable",function(){if(!d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)
}})},drag:function(d,e){if(d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)
}b.each(b.ui.ddmanager.droppables[d.options.scope]||[],function(){if(this.options.disabled||this.greedyChild||!this.visible){return
}var i,g,f,h=b.ui.intersect(d,this,this.options.tolerance),j=!h&&this.isover?"isout":(h&&!this.isover?"isover":null);
if(!j){return}if(this.options.greedy){g=this.options.scope;f=this.element.parents(":data(ui-droppable)").filter(function(){return b.data(this,"ui-droppable").options.scope===g
});if(f.length){i=b.data(f[0],"ui-droppable");i.greedyChild=(j==="isover")}}if(i&&j==="isover"){i.isover=false;
i.isout=true;i._out.call(i,e)}this[j]=true;this[j==="isout"?"isover":"isout"]=false;
this[j==="isover"?"_over":"_out"].call(this,e);if(i&&j==="isout"){i.isout=false;i.isover=true;
i._over.call(i,e)}})},dragStop:function(d,e){d.element.parentsUntil("body").unbind("scroll.droppable");
if(!d.options.refreshPositions){b.ui.ddmanager.prepareOffsets(d,e)}}}})(jQuery);(function(a,b){a.widget("ui.selectable",a.ui.mouse,{version:"1.10.0",options:{appendTo:"body",autoRefresh:true,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var d,c=this;
this.element.addClass("ui-selectable");this.dragged=false;this.refresh=function(){d=a(c.options.filter,c.element[0]);
d.addClass("ui-selectee");d.each(function(){var e=a(this),f=e.offset();a.data(this,"selectable-item",{element:this,$element:e,left:f.left,top:f.top,right:f.left+e.outerWidth(),bottom:f.top+e.outerHeight(),startselected:false,selected:e.hasClass("ui-selected"),selecting:e.hasClass("ui-selecting"),unselecting:e.hasClass("ui-unselecting")})
})};this.refresh();this.selectees=d.addClass("ui-selectee");this._mouseInit();this.helper=a("<div class='ui-selectable-helper'></div>")
},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item");
this.element.removeClass("ui-selectable ui-selectable-disabled");this._mouseDestroy()
},_mouseStart:function(e){var d=this,c=this.options;this.opos=[e.pageX,e.pageY];if(this.options.disabled){return
}this.selectees=a(c.filter,this.element[0]);this._trigger("start",e);a(c.appendTo).append(this.helper);
this.helper.css({left:e.pageX,top:e.pageY,width:0,height:0});if(c.autoRefresh){this.refresh()
}this.selectees.filter(".ui-selected").each(function(){var f=a.data(this,"selectable-item");
f.startselected=true;if(!e.metaKey&&!e.ctrlKey){f.$element.removeClass("ui-selected");
f.selected=false;f.$element.addClass("ui-unselecting");f.unselecting=true;d._trigger("unselecting",e,{unselecting:f.element})
}});a(e.target).parents().addBack().each(function(){var f,g=a.data(this,"selectable-item");
if(g){f=(!e.metaKey&&!e.ctrlKey)||!g.$element.hasClass("ui-selected");g.$element.removeClass(f?"ui-unselecting":"ui-selected").addClass(f?"ui-selecting":"ui-unselecting");
g.unselecting=!f;g.selecting=f;g.selected=f;if(f){d._trigger("selecting",e,{selecting:g.element})
}else{d._trigger("unselecting",e,{unselecting:g.element})}return false}})},_mouseDrag:function(j){this.dragged=true;
if(this.options.disabled){return}var g,i=this,e=this.options,d=this.opos[0],h=this.opos[1],c=j.pageX,f=j.pageY;
if(d>c){g=c;c=d;d=g}if(h>f){g=f;f=h;h=g}this.helper.css({left:d,top:h,width:c-d,height:f-h});
this.selectees.each(function(){var k=a.data(this,"selectable-item"),l=false;if(!k||k.element===i.element[0]){return
}if(e.tolerance==="touch"){l=(!(k.left>c||k.right<d||k.top>f||k.bottom<h))}else{if(e.tolerance==="fit"){l=(k.left>d&&k.right<c&&k.top>h&&k.bottom<f)
}}if(l){if(k.selected){k.$element.removeClass("ui-selected");k.selected=false}if(k.unselecting){k.$element.removeClass("ui-unselecting");
k.unselecting=false}if(!k.selecting){k.$element.addClass("ui-selecting");k.selecting=true;
i._trigger("selecting",j,{selecting:k.element})}}else{if(k.selecting){if((j.metaKey||j.ctrlKey)&&k.startselected){k.$element.removeClass("ui-selecting");
k.selecting=false;k.$element.addClass("ui-selected");k.selected=true}else{k.$element.removeClass("ui-selecting");
k.selecting=false;if(k.startselected){k.$element.addClass("ui-unselecting");k.unselecting=true
}i._trigger("unselecting",j,{unselecting:k.element})}}if(k.selected){if(!j.metaKey&&!j.ctrlKey&&!k.startselected){k.$element.removeClass("ui-selected");
k.selected=false;k.$element.addClass("ui-unselecting");k.unselecting=true;i._trigger("unselecting",j,{unselecting:k.element})
}}}});return false},_mouseStop:function(d){var c=this;this.dragged=false;a(".ui-unselecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");
e.$element.removeClass("ui-unselecting");e.unselecting=false;e.startselected=false;
c._trigger("unselected",d,{unselected:e.element})});a(".ui-selecting",this.element[0]).each(function(){var e=a.data(this,"selectable-item");
e.$element.removeClass("ui-selecting").addClass("ui-selected");e.selecting=false;
e.selected=true;e.startselected=true;c._trigger("selected",d,{selected:e.element})
});this._trigger("stop",d);this.helper.remove();return false}})})(jQuery);(function(b,c){function a(e,d,f){return(e>d)&&(e<(d+f))
}b.widget("ui.sortable",b.ui.mouse,{version:"1.10.0",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_create:function(){var d=this.options;
this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?d.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;
this.offset=this.element.offset();this._mouseInit();this.ready=true},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");
this._mouseDestroy();for(var d=this.items.length-1;d>=0;d--){this.items[d].item.removeData(this.widgetName+"-item")
}return this},_setOption:function(d,e){if(d==="disabled"){this.options[d]=e;this.widget().toggleClass("ui-sortable-disabled",!!e)
}else{b.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(f,g){var d=null,h=false,e=this;
if(this.reverting){return false}if(this.options.disabled||this.options.type==="static"){return false
}this._refreshItems(f);b(f.target).parents().each(function(){if(b.data(this,e.widgetName+"-item")===e){d=b(this);
return false}});if(b.data(f.target,e.widgetName+"-item")===e){d=b(f.target)}if(!d){return false
}if(this.options.handle&&!g){b(this.options.handle,d).find("*").addBack().each(function(){if(this===f.target){h=true
}});if(!h){return false}}this.currentItem=d;this._removeCurrentsFromItems();return true
},_mouseStart:function(f,g,d){var e,h=this.options;this.currentContainer=this;this.refreshPositions();
this.helper=this._createHelper(f);this._cacheHelperProportions();this._cacheMargins();
this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();
this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};
b.extend(this.offset,{click:{left:f.pageX-this.offset.left,top:f.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");
this.originalPosition=this._generatePosition(f);this.originalPageX=f.pageX;this.originalPageY=f.pageY;
(h.cursorAt&&this._adjustOffsetFromHelper(h.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};
if(this.helper[0]!==this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();
if(h.containment){this._setContainment()}if(h.cursor){if(b("body").css("cursor")){this._storedCursor=b("body").css("cursor")
}b("body").css("cursor",h.cursor)}if(h.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")
}this.helper.css("opacity",h.opacity)}if(h.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")
}this.helper.css("zIndex",h.zIndex)}if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){this.overflowOffset=this.scrollParent.offset()
}this._trigger("start",f,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()
}if(!d){for(e=this.containers.length-1;e>=0;e--){this.containers[e]._trigger("activate",f,this._uiHash(this))
}}if(b.ui.ddmanager){b.ui.ddmanager.current=this}if(b.ui.ddmanager&&!h.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,f)
}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(f);
return true},_mouseDrag:function(h){var f,g,e,k,j=this.options,d=false;this.position=this._generatePosition(h);
this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs
}if(this.options.scroll){if(this.scrollParent[0]!==document&&this.scrollParent[0].tagName!=="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-h.pageY<j.scrollSensitivity){this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop+j.scrollSpeed
}else{if(h.pageY-this.overflowOffset.top<j.scrollSensitivity){this.scrollParent[0].scrollTop=d=this.scrollParent[0].scrollTop-j.scrollSpeed
}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-h.pageX<j.scrollSensitivity){this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft+j.scrollSpeed
}else{if(h.pageX-this.overflowOffset.left<j.scrollSensitivity){this.scrollParent[0].scrollLeft=d=this.scrollParent[0].scrollLeft-j.scrollSpeed
}}}else{if(h.pageY-b(document).scrollTop()<j.scrollSensitivity){d=b(document).scrollTop(b(document).scrollTop()-j.scrollSpeed)
}else{if(b(window).height()-(h.pageY-b(document).scrollTop())<j.scrollSensitivity){d=b(document).scrollTop(b(document).scrollTop()+j.scrollSpeed)
}}if(h.pageX-b(document).scrollLeft()<j.scrollSensitivity){d=b(document).scrollLeft(b(document).scrollLeft()-j.scrollSpeed)
}else{if(b(window).width()-(h.pageX-b(document).scrollLeft())<j.scrollSensitivity){d=b(document).scrollLeft(b(document).scrollLeft()+j.scrollSpeed)
}}}if(d!==false&&b.ui.ddmanager&&!j.dropBehaviour){b.ui.ddmanager.prepareOffsets(this,h)
}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!=="y"){this.helper[0].style.left=this.position.left+"px"
}if(!this.options.axis||this.options.axis!=="x"){this.helper[0].style.top=this.position.top+"px"
}for(f=this.items.length-1;f>=0;f--){g=this.items[f];e=g.item[0];k=this._intersectsWithPointer(g);
if(!k){continue}if(g.instance!==this.currentContainer){continue}if(e!==this.currentItem[0]&&this.placeholder[k===1?"next":"prev"]()[0]!==e&&!b.contains(this.placeholder[0],e)&&(this.options.type==="semi-dynamic"?!b.contains(this.element[0],e):true)){this.direction=k===1?"down":"up";
if(this.options.tolerance==="pointer"||this._intersectsWithSides(g)){this._rearrange(h,g)
}else{break}this._trigger("change",h,this._uiHash());break}}this._contactContainers(h);
if(b.ui.ddmanager){b.ui.ddmanager.drag(this,h)}this._trigger("sort",h,this._uiHash());
this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(e,f){if(!e){return
}if(b.ui.ddmanager&&!this.options.dropBehaviour){b.ui.ddmanager.drop(this,e)}if(this.options.revert){var d=this,g=this.placeholder.offset();
this.reverting=true;b(this.helper).animate({left:g.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollLeft),top:g.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){d._clear(e)
})}else{this._clear(e,f)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null});
if(this.options.helper==="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
}else{this.currentItem.show()}for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("deactivate",null,this._uiHash(this));
if(this.containers[d].containerCache.over){this.containers[d]._trigger("out",null,this._uiHash(this));
this.containers[d].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])
}if(this.options.helper!=="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()
}b.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){b(this.domPosition.prev).after(this.currentItem)
}else{b(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(f){var d=this._getItemsAsjQuery(f&&f.connected),e=[];
f=f||{};b(d).each(function(){var g=(b(f.item||this).attr(f.attribute||"id")||"").match(f.expression||(/(.+)[\-=_](.+)/));
if(g){e.push((f.key||g[1]+"[]")+"="+(f.key&&f.expression?g[1]:g[2]))}});if(!e.length&&f.key){e.push(f.key+"=")
}return e.join("&")},toArray:function(f){var d=this._getItemsAsjQuery(f&&f.connected),e=[];
f=f||{};d.each(function(){e.push(b(f.item||this).attr(f.attribute||"id")||"")});return e
},_intersectsWith:function(n){var f=this.positionAbs.left,e=f+this.helperProportions.width,m=this.positionAbs.top,k=m+this.helperProportions.height,g=n.left,d=g+n.width,o=n.top,j=o+n.height,p=this.offset.click.top,i=this.offset.click.left,h=(m+p)>o&&(m+p)<j&&(f+i)>g&&(f+i)<d;
if(this.options.tolerance==="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!=="pointer"&&this.helperProportions[this.floating?"width":"height"]>n[this.floating?"width":"height"])){return h
}else{return(g<f+(this.helperProportions.width/2)&&e-(this.helperProportions.width/2)<d&&o<m+(this.helperProportions.height/2)&&k-(this.helperProportions.height/2)<j)
}},_intersectsWithPointer:function(f){var g=(this.options.axis==="x")||a(this.positionAbs.top+this.offset.click.top,f.top,f.height),e=(this.options.axis==="y")||a(this.positionAbs.left+this.offset.click.left,f.left,f.width),i=g&&e,d=this._getDragVerticalDirection(),h=this._getDragHorizontalDirection();
if(!i){return false}return this.floating?(((h&&h==="right")||d==="down")?2:1):(d&&(d==="down"?2:1))
},_intersectsWithSides:function(g){var e=a(this.positionAbs.top+this.offset.click.top,g.top+(g.height/2),g.height),f=a(this.positionAbs.left+this.offset.click.left,g.left+(g.width/2),g.width),d=this._getDragVerticalDirection(),h=this._getDragHorizontalDirection();
if(this.floating&&h){return((h==="right"&&f)||(h==="left"&&!f))}else{return d&&((d==="down"&&e)||(d==="up"&&!e))
}},_getDragVerticalDirection:function(){var d=this.positionAbs.top-this.lastPositionAbs.top;
return d!==0&&(d>0?"down":"up")},_getDragHorizontalDirection:function(){var d=this.positionAbs.left-this.lastPositionAbs.left;
return d!==0&&(d>0?"right":"left")},refresh:function(d){this._refreshItems(d);this.refreshPositions();
return this},_connectWith:function(){var d=this.options;return d.connectWith.constructor===String?[d.connectWith]:d.connectWith
},_getItemsAsjQuery:function(k){var g,f,m,l,d=[],e=[],h=this._connectWith();if(h&&k){for(g=h.length-1;
g>=0;g--){m=b(h[g]);for(f=m.length-1;f>=0;f--){l=b.data(m[f],this.widgetFullName);
if(l&&l!==this&&!l.options.disabled){e.push([b.isFunction(l.options.items)?l.options.items.call(l.element):b(l.options.items,l.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),l])
}}}}e.push([b.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):b(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);
for(g=e.length-1;g>=0;g--){e[g][0].each(function(){d.push(this)})}return b(d)},_removeCurrentsFromItems:function(){var d=this.currentItem.find(":data("+this.widgetName+"-item)");
this.items=b.grep(this.items,function(f){for(var e=0;e<d.length;e++){if(d[e]===f.item[0]){return false
}}return true})},_refreshItems:function(d){this.items=[];this.containers=[this];var h,f,o,k,n,e,q,p,l=this.items,g=[[b.isFunction(this.options.items)?this.options.items.call(this.element[0],d,{item:this.currentItem}):b(this.options.items,this.element),this]],m=this._connectWith();
if(m&&this.ready){for(h=m.length-1;h>=0;h--){o=b(m[h]);for(f=o.length-1;f>=0;f--){k=b.data(o[f],this.widgetFullName);
if(k&&k!==this&&!k.options.disabled){g.push([b.isFunction(k.options.items)?k.options.items.call(k.element[0],d,{item:this.currentItem}):b(k.options.items,k.element),k]);
this.containers.push(k)}}}}for(h=g.length-1;h>=0;h--){n=g[h][1];e=g[h][0];for(f=0,p=e.length;
f<p;f++){q=b(e[f]);q.data(this.widgetName+"-item",n);l.push({item:q,instance:n,width:0,height:0,left:0,top:0})
}}},refreshPositions:function(d){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()
}var f,g,e,h;for(f=this.items.length-1;f>=0;f--){g=this.items[f];if(g.instance!==this.currentContainer&&this.currentContainer&&g.item[0]!==this.currentItem[0]){continue
}e=this.options.toleranceElement?b(this.options.toleranceElement,g.item):g.item;if(!d){g.width=e.outerWidth();
g.height=e.outerHeight()}h=e.offset();g.left=h.left;g.top=h.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)
}else{for(f=this.containers.length-1;f>=0;f--){h=this.containers[f].element.offset();
this.containers[f].containerCache.left=h.left;this.containers[f].containerCache.top=h.top;
this.containers[f].containerCache.width=this.containers[f].element.outerWidth();this.containers[f].containerCache.height=this.containers[f].element.outerHeight()
}}return this},_createPlaceholder:function(e){e=e||this;var d,f=e.options;if(!f.placeholder||f.placeholder.constructor===String){d=f.placeholder;
f.placeholder={element:function(){var g=b(document.createElement(e.currentItem[0].nodeName)).addClass(d||e.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
if(!d){g.style.visibility="hidden"}return g},update:function(g,h){if(d&&!f.forcePlaceholderSize){return
}if(!h.height()){h.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10))
}if(!h.width()){h.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10))
}}}}e.placeholder=b(f.placeholder.element.call(e.element,e.currentItem));e.currentItem.after(e.placeholder);
f.placeholder.update(e,e.placeholder)},_contactContainers:function(d){var k,g,n,l,m,p,e,q,h,f=null,o=null;
for(k=this.containers.length-1;k>=0;k--){if(b.contains(this.currentItem[0],this.containers[k].element[0])){continue
}if(this._intersectsWith(this.containers[k].containerCache)){if(f&&b.contains(this.containers[k].element[0],f.element[0])){continue
}f=this.containers[k];o=k}else{if(this.containers[k].containerCache.over){this.containers[k]._trigger("out",d,this._uiHash(this));
this.containers[k].containerCache.over=0}}}if(!f){return}if(this.containers.length===1){this.containers[o]._trigger("over",d,this._uiHash(this));
this.containers[o].containerCache.over=1}else{n=10000;l=null;m=this.containers[o].floating?"left":"top";
p=this.containers[o].floating?"width":"height";e=this.positionAbs[m]+this.offset.click[m];
for(g=this.items.length-1;g>=0;g--){if(!b.contains(this.containers[o].element[0],this.items[g].item[0])){continue
}if(this.items[g].item[0]===this.currentItem[0]){continue}q=this.items[g].item.offset()[m];
h=false;if(Math.abs(q-e)>Math.abs(q+this.items[g][p]-e)){h=true;q+=this.items[g][p]
}if(Math.abs(q-e)<n){n=Math.abs(q-e);l=this.items[g];this.direction=h?"up":"down"
}}if(!l&&!this.options.dropOnEmpty){return}this.currentContainer=this.containers[o];
l?this._rearrange(d,l,null,true):this._rearrange(d,null,this.containers[o].element,true);
this._trigger("change",d,this._uiHash());this.containers[o]._trigger("change",d,this._uiHash(this));
this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[o]._trigger("over",d,this._uiHash(this));
this.containers[o].containerCache.over=1}},_createHelper:function(e){var f=this.options,d=b.isFunction(f.helper)?b(f.helper.apply(this.element[0],[e,this.currentItem])):(f.helper==="clone"?this.currentItem.clone():this.currentItem);
if(!d.parents("body").length){b(f.appendTo!=="parent"?f.appendTo:this.currentItem[0].parentNode)[0].appendChild(d[0])
}if(d[0]===this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}
}if(!d[0].style.width||f.forceHelperSize){d.width(this.currentItem.width())}if(!d[0].style.height||f.forceHelperSize){d.height(this.currentItem.height())
}return d},_adjustOffsetFromHelper:function(d){if(typeof d==="string"){d=d.split(" ")
}if(b.isArray(d)){d={left:+d[0],top:+d[1]||0}}if("left" in d){this.offset.click.left=d.left+this.margins.left
}if("right" in d){this.offset.click.left=this.helperProportions.width-d.right+this.margins.left
}if("top" in d){this.offset.click.top=d.top+this.margins.top}if("bottom" in d){this.offset.click.top=this.helperProportions.height-d.bottom+this.margins.top
}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var d=this.offsetParent.offset();
if(this.cssPosition==="absolute"&&this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0])){d.left+=this.scrollParent.scrollLeft();
d.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]===document.body||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()==="html"&&b.ui.ie)){d={top:0,left:0}
}return{top:d.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:d.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}
},_getRelativeOffset:function(){if(this.cssPosition==="relative"){var d=this.currentItem.position();
return{top:d.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:d.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}
}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}
},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}
},_setContainment:function(){var e,g,d,f=this.options;if(f.containment==="parent"){f.containment=this.helper[0].parentNode
}if(f.containment==="document"||f.containment==="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,b(f.containment==="document"?document:window).width()-this.helperProportions.width-this.margins.left,(b(f.containment==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]
}if(!(/^(document|window|parent)$/).test(f.containment)){e=b(f.containment)[0];g=b(f.containment).offset();
d=(b(e).css("overflow")!=="hidden");this.containment=[g.left+(parseInt(b(e).css("borderLeftWidth"),10)||0)+(parseInt(b(e).css("paddingLeft"),10)||0)-this.margins.left,g.top+(parseInt(b(e).css("borderTopWidth"),10)||0)+(parseInt(b(e).css("paddingTop"),10)||0)-this.margins.top,g.left+(d?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(b(e).css("borderLeftWidth"),10)||0)-(parseInt(b(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,g.top+(d?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(b(e).css("borderTopWidth"),10)||0)-(parseInt(b(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]
}},_convertPositionTo:function(g,i){if(!i){i=this.position}var f=g==="absolute"?1:-1,e=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(e[0].tagName);
return{top:(i.top+this.offset.relative.top*f+this.offset.parent.top*f-((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(h?0:e.scrollTop()))*f)),left:(i.left+this.offset.relative.left*f+this.offset.parent.left*f-((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():h?0:e.scrollLeft())*f))}
},_generatePosition:function(g){var i,h,j=this.options,f=g.pageX,e=g.pageY,d=this.cssPosition==="absolute"&&!(this.scrollParent[0]!==document&&b.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,k=(/(html|body)/i).test(d[0].tagName);
if(this.cssPosition==="relative"&&!(this.scrollParent[0]!==document&&this.scrollParent[0]!==this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()
}if(this.originalPosition){if(this.containment){if(g.pageX-this.offset.click.left<this.containment[0]){f=this.containment[0]+this.offset.click.left
}if(g.pageY-this.offset.click.top<this.containment[1]){e=this.containment[1]+this.offset.click.top
}if(g.pageX-this.offset.click.left>this.containment[2]){f=this.containment[2]+this.offset.click.left
}if(g.pageY-this.offset.click.top>this.containment[3]){e=this.containment[3]+this.offset.click.top
}}if(j.grid){i=this.originalPageY+Math.round((e-this.originalPageY)/j.grid[1])*j.grid[1];
e=this.containment?((i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3])?i:((i-this.offset.click.top>=this.containment[1])?i-j.grid[1]:i+j.grid[1])):i;
h=this.originalPageX+Math.round((f-this.originalPageX)/j.grid[0])*j.grid[0];f=this.containment?((h-this.offset.click.left>=this.containment[0]&&h-this.offset.click.left<=this.containment[2])?h:((h-this.offset.click.left>=this.containment[0])?h-j.grid[0]:h+j.grid[0])):h
}}return{top:(e-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition==="fixed"?-this.scrollParent.scrollTop():(k?0:d.scrollTop())))),left:(f-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition==="fixed"?-this.scrollParent.scrollLeft():k?0:d.scrollLeft())))}
},_rearrange:function(h,g,e,f){e?e[0].appendChild(this.placeholder[0]):g.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction==="down"?g.item[0]:g.item[0].nextSibling));
this.counter=this.counter?++this.counter:1;var d=this.counter;this._delay(function(){if(d===this.counter){this.refreshPositions(!f)
}})},_clear:function(e,f){this.reverting=false;var d,g=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)
}this._noFinalSort=null;if(this.helper[0]===this.currentItem[0]){for(d in this._storedCSS){if(this._storedCSS[d]==="auto"||this._storedCSS[d]==="static"){this._storedCSS[d]=""
}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()
}if(this.fromOutside&&!f){g.push(function(h){this._trigger("receive",h,this._uiHash(this.fromOutside))
})}if((this.fromOutside||this.domPosition.prev!==this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!==this.currentItem.parent()[0])&&!f){g.push(function(h){this._trigger("update",h,this._uiHash())
})}if(this!==this.currentContainer){if(!f){g.push(function(h){this._trigger("remove",h,this._uiHash())
});g.push((function(h){return function(i){h._trigger("receive",i,this._uiHash(this))
}}).call(this,this.currentContainer));g.push((function(h){return function(i){h._trigger("update",i,this._uiHash(this))
}}).call(this,this.currentContainer))}}for(d=this.containers.length-1;d>=0;d--){if(!f){g.push((function(h){return function(i){h._trigger("deactivate",i,this._uiHash(this))
}}).call(this,this.containers[d]))}if(this.containers[d].containerCache.over){g.push((function(h){return function(i){h._trigger("out",i,this._uiHash(this))
}}).call(this,this.containers[d]));this.containers[d].containerCache.over=0}}if(this._storedCursor){b("body").css("cursor",this._storedCursor)
}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex==="auto"?"":this._storedZIndex)
}this.dragging=false;if(this.cancelHelperRemoval){if(!f){this._trigger("beforeStop",e,this._uiHash());
for(d=0;d<g.length;d++){g[d].call(this,e)}this._trigger("stop",e,this._uiHash())}this.fromOutside=false;
return false}if(!f){this._trigger("beforeStop",e,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
if(this.helper[0]!==this.currentItem[0]){this.helper.remove()}this.helper=null;if(!f){for(d=0;
d<g.length;d++){g[d].call(this,e)}this._trigger("stop",e,this._uiHash())}this.fromOutside=false;
return true},_trigger:function(){if(b.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()
}},_uiHash:function(d){var e=d||this;return{helper:e.helper,placeholder:e.placeholder||b([]),position:e.position,originalPosition:e.originalPosition,offset:e.positionAbs,item:e.currentItem,sender:d?d.element:null}
}})})(jQuery);(function(f,h){f.extend(f.ui,{datepicker:{version:"1.10.0"}});var g="datepicker",e=new Date().getTime(),c;
function b(){this._curInst=null;this._keyEvent=false;this._disabledInputs=[];this._datepickerShowing=false;
this._inDialog=false;this._mainDivId="ui-datepicker-div";this._inlineClass="ui-datepicker-inline";
this._appendClass="ui-datepicker-append";this._triggerClass="ui-datepicker-trigger";
this._dialogClass="ui-datepicker-dialog";this._disableClass="ui-datepicker-disabled";
this._unselectableClass="ui-datepicker-unselectable";this._currentClass="ui-datepicker-current-day";
this._dayOverClass="ui-datepicker-days-cell-over";this.regional=[];this.regional[""]={closeText:"Done",prevText:"Prev",nextText:"Next",currentText:"Today",monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],weekHeader:"Wk",dateFormat:"mm/dd/yy",firstDay:0,isRTL:false,showMonthAfterYear:false,yearSuffix:""};
this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:false,hideIfNoPrevNext:false,navigationAsDateFormat:false,gotoCurrent:false,changeMonth:false,changeYear:false,yearRange:"c-10:c+10",showOtherMonths:false,selectOtherMonths:false,showWeek:false,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:true,showButtonPanel:false,autoSize:false,disabled:false};
f.extend(this._defaults,this.regional[""]);this.dpDiv=d(f("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
}f.extend(b.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv
},setDefaults:function(i){a(this._defaults,i||{});return this},_attachDatepicker:function(l,i){var m,k,j;
m=l.nodeName.toLowerCase();k=(m==="div"||m==="span");if(!l.id){this.uuid+=1;l.id="dp"+this.uuid
}j=this._newInst(f(l),k);j.settings=f.extend({},i||{});if(m==="input"){this._connectDatepicker(l,j)
}else{if(k){this._inlineDatepicker(l,j)}}},_newInst:function(j,i){var k=j[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");
return{id:k,input:j,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:(!i?this.dpDiv:d(f("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")))}
},_connectDatepicker:function(k,j){var i=f(k);j.append=f([]);j.trigger=f([]);if(i.hasClass(this.markerClassName)){return
}this._attachments(i,j);i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp);
this._autoSize(j);f.data(k,g,j);if(j.settings.disabled){this._disableDatepicker(k)
}},_attachments:function(k,n){var j,m,i,o=this._get(n,"appendText"),l=this._get(n,"isRTL");
if(n.append){n.append.remove()}if(o){n.append=f("<span class='"+this._appendClass+"'>"+o+"</span>");
k[l?"before":"after"](n.append)}k.unbind("focus",this._showDatepicker);if(n.trigger){n.trigger.remove()
}j=this._get(n,"showOn");if(j==="focus"||j==="both"){k.focus(this._showDatepicker)
}if(j==="button"||j==="both"){m=this._get(n,"buttonText");i=this._get(n,"buttonImage");
n.trigger=f(this._get(n,"buttonImageOnly")?f("<img/>").addClass(this._triggerClass).attr({src:i,alt:m,title:m}):f("<button type='button'></button>").addClass(this._triggerClass).html(!i?m:f("<img/>").attr({src:i,alt:m,title:m})));
k[l?"before":"after"](n.trigger);n.trigger.click(function(){if(f.datepicker._datepickerShowing&&f.datepicker._lastInput===k[0]){f.datepicker._hideDatepicker()
}else{if(f.datepicker._datepickerShowing&&f.datepicker._lastInput!==k[0]){f.datepicker._hideDatepicker();
f.datepicker._showDatepicker(k[0])}else{f.datepicker._showDatepicker(k[0])}}return false
})}},_autoSize:function(p){if(this._get(p,"autoSize")&&!p.inline){var m,k,l,o,n=new Date(2009,12-1,20),j=this._get(p,"dateFormat");
if(j.match(/[DM]/)){m=function(i){k=0;l=0;for(o=0;o<i.length;o++){if(i[o].length>k){k=i[o].length;
l=o}}return l};n.setMonth(m(this._get(p,(j.match(/MM/)?"monthNames":"monthNamesShort"))));
n.setDate(m(this._get(p,(j.match(/DD/)?"dayNames":"dayNamesShort")))+20-n.getDay())
}p.input.attr("size",this._formatDate(p,n).length)}},_inlineDatepicker:function(j,i){var k=f(j);
if(k.hasClass(this.markerClassName)){return}k.addClass(this.markerClassName).append(i.dpDiv);
f.data(j,g,i);this._setDate(i,this._getDefaultDate(i),true);this._updateDatepicker(i);
this._updateAlternate(i);if(i.settings.disabled){this._disableDatepicker(j)}i.dpDiv.css("display","block")
},_dialogDatepicker:function(p,j,n,k,o){var i,s,m,r,q,l=this._dialogInst;if(!l){this.uuid+=1;
i="dp"+this.uuid;this._dialogInput=f("<input type='text' id='"+i+"' style='position: absolute; top: -100px; width: 0px;'/>");
this._dialogInput.keydown(this._doKeyDown);f("body").append(this._dialogInput);l=this._dialogInst=this._newInst(this._dialogInput,false);
l.settings={};f.data(this._dialogInput[0],g,l)}a(l.settings,k||{});j=(j&&j.constructor===Date?this._formatDate(l,j):j);
this._dialogInput.val(j);this._pos=(o?(o.length?o:[o.pageX,o.pageY]):null);if(!this._pos){s=document.documentElement.clientWidth;
m=document.documentElement.clientHeight;r=document.documentElement.scrollLeft||document.body.scrollLeft;
q=document.documentElement.scrollTop||document.body.scrollTop;this._pos=[(s/2)-100+r,(m/2)-150+q]
}this._dialogInput.css("left",(this._pos[0]+20)+"px").css("top",this._pos[1]+"px");
l.settings.onSelect=n;this._inDialog=true;this.dpDiv.addClass(this._dialogClass);
this._showDatepicker(this._dialogInput[0]);if(f.blockUI){f.blockUI(this.dpDiv)}f.data(this._dialogInput[0],g,l);
return this},_destroyDatepicker:function(k){var l,i=f(k),j=f.data(k,g);if(!i.hasClass(this.markerClassName)){return
}l=k.nodeName.toLowerCase();f.removeData(k,g);if(l==="input"){j.append.remove();j.trigger.remove();
i.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)
}else{if(l==="div"||l==="span"){i.removeClass(this.markerClassName).empty()}}},_enableDatepicker:function(l){var m,k,i=f(l),j=f.data(l,g);
if(!i.hasClass(this.markerClassName)){return}m=l.nodeName.toLowerCase();if(m==="input"){l.disabled=false;
j.trigger.filter("button").each(function(){this.disabled=false}).end().filter("img").css({opacity:"1.0",cursor:""})
}else{if(m==="div"||m==="span"){k=i.children("."+this._inlineClass);k.children().removeClass("ui-state-disabled");
k.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",false)
}}this._disabledInputs=f.map(this._disabledInputs,function(n){return(n===l?null:n)
})},_disableDatepicker:function(l){var m,k,i=f(l),j=f.data(l,g);if(!i.hasClass(this.markerClassName)){return
}m=l.nodeName.toLowerCase();if(m==="input"){l.disabled=true;j.trigger.filter("button").each(function(){this.disabled=true
}).end().filter("img").css({opacity:"0.5",cursor:"default"})}else{if(m==="div"||m==="span"){k=i.children("."+this._inlineClass);
k.children().addClass("ui-state-disabled");k.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",true)
}}this._disabledInputs=f.map(this._disabledInputs,function(n){return(n===l?null:n)
});this._disabledInputs[this._disabledInputs.length]=l},_isDisabledDatepicker:function(k){if(!k){return false
}for(var j=0;j<this._disabledInputs.length;j++){if(this._disabledInputs[j]===k){return true
}}return false},_getInst:function(j){try{return f.data(j,g)}catch(i){throw"Missing instance data for this datepicker"
}},_optionDatepicker:function(o,j,n){var k,i,m,p,l=this._getInst(o);if(arguments.length===2&&typeof j==="string"){return(j==="defaults"?f.extend({},f.datepicker._defaults):(l?(j==="all"?f.extend({},l.settings):this._get(l,j)):null))
}k=j||{};if(typeof j==="string"){k={};k[j]=n}if(l){if(this._curInst===l){this._hideDatepicker()
}i=this._getDateDatepicker(o,true);m=this._getMinMaxDate(l,"min");p=this._getMinMaxDate(l,"max");
a(l.settings,k);if(m!==null&&k.dateFormat!==h&&k.minDate===h){l.settings.minDate=this._formatDate(l,m)
}if(p!==null&&k.dateFormat!==h&&k.maxDate===h){l.settings.maxDate=this._formatDate(l,p)
}if("disabled" in k){if(k.disabled){this._disableDatepicker(o)}else{this._enableDatepicker(o)
}}this._attachments(f(o),l);this._autoSize(l);this._setDate(l,i);this._updateAlternate(l);
this._updateDatepicker(l)}},_changeDatepicker:function(k,i,j){this._optionDatepicker(k,i,j)
},_refreshDatepicker:function(j){var i=this._getInst(j);if(i){this._updateDatepicker(i)
}},_setDateDatepicker:function(k,i){var j=this._getInst(k);if(j){this._setDate(j,i);
this._updateDatepicker(j);this._updateAlternate(j)}},_getDateDatepicker:function(k,i){var j=this._getInst(k);
if(j&&!j.inline){this._setDateFromField(j,i)}return(j?this._getDate(j):null)},_doKeyDown:function(l){var j,i,n,m=f.datepicker._getInst(l.target),o=true,k=m.dpDiv.is(".ui-datepicker-rtl");
m._keyEvent=true;if(f.datepicker._datepickerShowing){switch(l.keyCode){case 9:f.datepicker._hideDatepicker();
o=false;break;case 13:n=f("td."+f.datepicker._dayOverClass+":not(."+f.datepicker._currentClass+")",m.dpDiv);
if(n[0]){f.datepicker._selectDay(l.target,m.selectedMonth,m.selectedYear,n[0])}j=f.datepicker._get(m,"onSelect");
if(j){i=f.datepicker._formatDate(m);j.apply((m.input?m.input[0]:null),[i,m])}else{f.datepicker._hideDatepicker()
}return false;case 27:f.datepicker._hideDatepicker();break;case 33:f.datepicker._adjustDate(l.target,(l.ctrlKey?-f.datepicker._get(m,"stepBigMonths"):-f.datepicker._get(m,"stepMonths")),"M");
break;case 34:f.datepicker._adjustDate(l.target,(l.ctrlKey?+f.datepicker._get(m,"stepBigMonths"):+f.datepicker._get(m,"stepMonths")),"M");
break;case 35:if(l.ctrlKey||l.metaKey){f.datepicker._clearDate(l.target)}o=l.ctrlKey||l.metaKey;
break;case 36:if(l.ctrlKey||l.metaKey){f.datepicker._gotoToday(l.target)}o=l.ctrlKey||l.metaKey;
break;case 37:if(l.ctrlKey||l.metaKey){f.datepicker._adjustDate(l.target,(k?+1:-1),"D")
}o=l.ctrlKey||l.metaKey;if(l.originalEvent.altKey){f.datepicker._adjustDate(l.target,(l.ctrlKey?-f.datepicker._get(m,"stepBigMonths"):-f.datepicker._get(m,"stepMonths")),"M")
}break;case 38:if(l.ctrlKey||l.metaKey){f.datepicker._adjustDate(l.target,-7,"D")
}o=l.ctrlKey||l.metaKey;break;case 39:if(l.ctrlKey||l.metaKey){f.datepicker._adjustDate(l.target,(k?-1:+1),"D")
}o=l.ctrlKey||l.metaKey;if(l.originalEvent.altKey){f.datepicker._adjustDate(l.target,(l.ctrlKey?+f.datepicker._get(m,"stepBigMonths"):+f.datepicker._get(m,"stepMonths")),"M")
}break;case 40:if(l.ctrlKey||l.metaKey){f.datepicker._adjustDate(l.target,+7,"D")
}o=l.ctrlKey||l.metaKey;break;default:o=false}}else{if(l.keyCode===36&&l.ctrlKey){f.datepicker._showDatepicker(this)
}else{o=false}}if(o){l.preventDefault();l.stopPropagation()}},_doKeyPress:function(k){var j,i,l=f.datepicker._getInst(k.target);
if(f.datepicker._get(l,"constrainInput")){j=f.datepicker._possibleChars(f.datepicker._get(l,"dateFormat"));
i=String.fromCharCode(k.charCode==null?k.keyCode:k.charCode);return k.ctrlKey||k.metaKey||(i<" "||!j||j.indexOf(i)>-1)
}},_doKeyUp:function(k){var i,l=f.datepicker._getInst(k.target);if(l.input.val()!==l.lastVal){try{i=f.datepicker.parseDate(f.datepicker._get(l,"dateFormat"),(l.input?l.input.val():null),f.datepicker._getFormatConfig(l));
if(i){f.datepicker._setDateFromField(l);f.datepicker._updateAlternate(l);f.datepicker._updateDatepicker(l)
}}catch(j){}}return true},_showDatepicker:function(j){j=j.target||j;if(j.nodeName.toLowerCase()!=="input"){j=f("input",j.parentNode)[0]
}if(f.datepicker._isDisabledDatepicker(j)||f.datepicker._lastInput===j){return}var l,p,k,n,o,i,m;
l=f.datepicker._getInst(j);if(f.datepicker._curInst&&f.datepicker._curInst!==l){f.datepicker._curInst.dpDiv.stop(true,true);
if(l&&f.datepicker._datepickerShowing){f.datepicker._hideDatepicker(f.datepicker._curInst.input[0])
}}p=f.datepicker._get(l,"beforeShow");k=p?p.apply(j,[j,l]):{};if(k===false){return
}a(l.settings,k);l.lastVal=null;f.datepicker._lastInput=j;f.datepicker._setDateFromField(l);
if(f.datepicker._inDialog){j.value=""}if(!f.datepicker._pos){f.datepicker._pos=f.datepicker._findPos(j);
f.datepicker._pos[1]+=j.offsetHeight}n=false;f(j).parents().each(function(){n|=f(this).css("position")==="fixed";
return !n});o={left:f.datepicker._pos[0],top:f.datepicker._pos[1]};f.datepicker._pos=null;
l.dpDiv.empty();l.dpDiv.css({position:"absolute",display:"block",top:"-1000px"});
f.datepicker._updateDatepicker(l);o=f.datepicker._checkOffset(l,o,n);l.dpDiv.css({position:(f.datepicker._inDialog&&f.blockUI?"static":(n?"fixed":"absolute")),display:"none",left:o.left+"px",top:o.top+"px"});
if(!l.inline){i=f.datepicker._get(l,"showAnim");m=f.datepicker._get(l,"duration");
l.dpDiv.zIndex(f(j).zIndex()+1);f.datepicker._datepickerShowing=true;if(f.effects&&f.effects.effect[i]){l.dpDiv.show(i,f.datepicker._get(l,"showOptions"),m)
}else{l.dpDiv[i||"show"](i?m:null)}if(l.input.is(":visible")&&!l.input.is(":disabled")){l.input.focus()
}f.datepicker._curInst=l}},_updateDatepicker:function(k){this.maxRows=4;c=k;k.dpDiv.empty().append(this._generateHTML(k));
this._attachHandlers(k);k.dpDiv.find("."+this._dayOverClass+" a").mouseover();var m,i=this._getNumberOfMonths(k),l=i[1],j=17;
k.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
if(l>1){k.dpDiv.addClass("ui-datepicker-multi-"+l).css("width",(j*l)+"em")}k.dpDiv[(i[0]!==1||i[1]!==1?"add":"remove")+"Class"]("ui-datepicker-multi");
k.dpDiv[(this._get(k,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl");if(k===f.datepicker._curInst&&f.datepicker._datepickerShowing&&k.input&&k.input.is(":visible")&&!k.input.is(":disabled")&&k.input[0]!==document.activeElement){k.input.focus()
}if(k.yearshtml){m=k.yearshtml;setTimeout(function(){if(m===k.yearshtml&&k.yearshtml){k.dpDiv.find("select.ui-datepicker-year:first").replaceWith(k.yearshtml)
}m=k.yearshtml=null},0)}},_getBorders:function(i){var j=function(k){return{thin:1,medium:2,thick:3}[k]||k
};return[parseFloat(j(i.css("border-left-width"))),parseFloat(j(i.css("border-top-width")))]
},_checkOffset:function(n,l,k){var m=n.dpDiv.outerWidth(),q=n.dpDiv.outerHeight(),p=n.input?n.input.outerWidth():0,i=n.input?n.input.outerHeight():0,o=document.documentElement.clientWidth+(k?0:f(document).scrollLeft()),j=document.documentElement.clientHeight+(k?0:f(document).scrollTop());
l.left-=(this._get(n,"isRTL")?(m-p):0);l.left-=(k&&l.left===n.input.offset().left)?f(document).scrollLeft():0;
l.top-=(k&&l.top===(n.input.offset().top+i))?f(document).scrollTop():0;l.left-=Math.min(l.left,(l.left+m>o&&o>m)?Math.abs(l.left+m-o):0);
l.top-=Math.min(l.top,(l.top+q>j&&j>q)?Math.abs(q+i):0);return l},_findPos:function(l){var i,k=this._getInst(l),j=this._get(k,"isRTL");
while(l&&(l.type==="hidden"||l.nodeType!==1||f.expr.filters.hidden(l))){l=l[j?"previousSibling":"nextSibling"]
}i=f(l).offset();return[i.left,i.top]},_hideDatepicker:function(k){var j,n,m,i,l=this._curInst;
if(!l||(k&&l!==f.data(k,g))){return}if(this._datepickerShowing){j=this._get(l,"showAnim");
n=this._get(l,"duration");m=function(){f.datepicker._tidyDialog(l)};if(f.effects&&(f.effects.effect[j]||f.effects[j])){l.dpDiv.hide(j,f.datepicker._get(l,"showOptions"),n,m)
}else{l.dpDiv[(j==="slideDown"?"slideUp":(j==="fadeIn"?"fadeOut":"hide"))]((j?n:null),m)
}if(!j){m()}this._datepickerShowing=false;i=this._get(l,"onClose");if(i){i.apply((l.input?l.input[0]:null),[(l.input?l.input.val():""),l])
}this._lastInput=null;if(this._inDialog){this._dialogInput.css({position:"absolute",left:"0",top:"-100px"});
if(f.blockUI){f.unblockUI();f("body").append(this.dpDiv)}}this._inDialog=false}},_tidyDialog:function(i){i.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
},_checkExternalClick:function(j){if(!f.datepicker._curInst){return}var i=f(j.target),k=f.datepicker._getInst(i[0]);
if(((i[0].id!==f.datepicker._mainDivId&&i.parents("#"+f.datepicker._mainDivId).length===0&&!i.hasClass(f.datepicker.markerClassName)&&!i.closest("."+f.datepicker._triggerClass).length&&f.datepicker._datepickerShowing&&!(f.datepicker._inDialog&&f.blockUI)))||(i.hasClass(f.datepicker.markerClassName)&&f.datepicker._curInst!==k)){f.datepicker._hideDatepicker()
}},_adjustDate:function(m,l,k){var j=f(m),i=this._getInst(j[0]);if(this._isDisabledDatepicker(j[0])){return
}this._adjustInstDate(i,l+(k==="M"?this._get(i,"showCurrentAtPos"):0),k);this._updateDatepicker(i)
},_gotoToday:function(l){var i,k=f(l),j=this._getInst(k[0]);if(this._get(j,"gotoCurrent")&&j.currentDay){j.selectedDay=j.currentDay;
j.drawMonth=j.selectedMonth=j.currentMonth;j.drawYear=j.selectedYear=j.currentYear
}else{i=new Date();j.selectedDay=i.getDate();j.drawMonth=j.selectedMonth=i.getMonth();
j.drawYear=j.selectedYear=i.getFullYear()}this._notifyChange(j);this._adjustDate(k)
},_selectMonthYear:function(m,i,l){var k=f(m),j=this._getInst(k[0]);j["selected"+(l==="M"?"Month":"Year")]=j["draw"+(l==="M"?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10);
this._notifyChange(j);this._adjustDate(k)},_selectDay:function(n,l,i,m){var j,k=f(n);
if(f(m).hasClass(this._unselectableClass)||this._isDisabledDatepicker(k[0])){return
}j=this._getInst(k[0]);j.selectedDay=j.currentDay=f("a",m).html();j.selectedMonth=j.currentMonth=l;
j.selectedYear=j.currentYear=i;this._selectDate(n,this._formatDate(j,j.currentDay,j.currentMonth,j.currentYear))
},_clearDate:function(j){var i=f(j);this._selectDate(i,"")},_selectDate:function(m,i){var j,l=f(m),k=this._getInst(l[0]);
i=(i!=null?i:this._formatDate(k));if(k.input){k.input.val(i)}this._updateAlternate(k);
j=this._get(k,"onSelect");if(j){j.apply((k.input?k.input[0]:null),[i,k])}else{if(k.input){k.input.trigger("change")
}}if(k.inline){this._updateDatepicker(k)}else{this._hideDatepicker();this._lastInput=k.input[0];
if(typeof(k.input[0])!=="object"){k.input.focus()}this._lastInput=null}},_updateAlternate:function(m){var l,k,i,j=this._get(m,"altField");
if(j){l=this._get(m,"altFormat")||this._get(m,"dateFormat");k=this._getDate(m);i=this.formatDate(l,k,this._getFormatConfig(m));
f(j).each(function(){f(this).val(i)})}},noWeekends:function(j){var i=j.getDay();return[(i>0&&i<6),""]
},iso8601Week:function(i){var j,k=new Date(i.getTime());k.setDate(k.getDate()+4-(k.getDay()||7));
j=k.getTime();k.setMonth(0);k.setDate(1);return Math.floor(Math.round((j-k)/86400000)/7)+1
},parseDate:function(y,t,A){if(y==null||t==null){throw"Invalid arguments"}t=(typeof t==="object"?t.toString():t+"");
if(t===""){return null}var l,v,j,z=0,o=(A?A.shortYearCutoff:null)||this._defaults.shortYearCutoff,k=(typeof o!=="string"?o:new Date().getFullYear()%100+parseInt(o,10)),r=(A?A.dayNamesShort:null)||this._defaults.dayNamesShort,C=(A?A.dayNames:null)||this._defaults.dayNames,i=(A?A.monthNamesShort:null)||this._defaults.monthNamesShort,m=(A?A.monthNames:null)||this._defaults.monthNames,n=-1,D=-1,x=-1,q=-1,w=false,B,s=function(F){var G=(l+1<y.length&&y.charAt(l+1)===F);
if(G){l++}return G},E=function(H){var F=s(H),I=(H==="@"?14:(H==="!"?20:(H==="y"&&F?4:(H==="o"?3:2)))),J=new RegExp("^\\d{1,"+I+"}"),G=t.substring(z).match(J);
if(!G){throw"Missing number at position "+z}z+=G[0].length;return parseInt(G[0],10)
},p=function(G,H,J){var F=-1,I=f.map(s(G)?J:H,function(L,K){return[[K,L]]}).sort(function(L,K){return -(L[1].length-K[1].length)
});f.each(I,function(L,M){var K=M[1];if(t.substr(z,K.length).toLowerCase()===K.toLowerCase()){F=M[0];
z+=K.length;return false}});if(F!==-1){return F+1}else{throw"Unknown name at position "+z
}},u=function(){if(t.charAt(z)!==y.charAt(l)){throw"Unexpected literal at position "+z
}z++};for(l=0;l<y.length;l++){if(w){if(y.charAt(l)==="'"&&!s("'")){w=false}else{u()
}}else{switch(y.charAt(l)){case"d":x=E("d");break;case"D":p("D",r,C);break;case"o":q=E("o");
break;case"m":D=E("m");break;case"M":D=p("M",i,m);break;case"y":n=E("y");break;case"@":B=new Date(E("@"));
n=B.getFullYear();D=B.getMonth()+1;x=B.getDate();break;case"!":B=new Date((E("!")-this._ticksTo1970)/10000);
n=B.getFullYear();D=B.getMonth()+1;x=B.getDate();break;case"'":if(s("'")){u()}else{w=true
}break;default:u()}}}if(z<t.length){j=t.substr(z);if(!/^\s+/.test(j)){throw"Extra/unparsed characters found in date: "+j
}}if(n===-1){n=new Date().getFullYear()}else{if(n<100){n+=new Date().getFullYear()-new Date().getFullYear()%100+(n<=k?0:-100)
}}if(q>-1){D=1;x=q;do{v=this._getDaysInMonth(n,D-1);if(x<=v){break}D++;x-=v}while(true)
}B=this._daylightSavingAdjust(new Date(n,D-1,x));if(B.getFullYear()!==n||B.getMonth()+1!==D||B.getDate()!==x){throw"Invalid date"
}return B},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:(((1970-1)*365+Math.floor(1970/4)-Math.floor(1970/100)+Math.floor(1970/400))*24*60*60*10000000),formatDate:function(r,l,m){if(!l){return""
}var t,u=(m?m.dayNamesShort:null)||this._defaults.dayNamesShort,j=(m?m.dayNames:null)||this._defaults.dayNames,p=(m?m.monthNamesShort:null)||this._defaults.monthNamesShort,n=(m?m.monthNames:null)||this._defaults.monthNames,s=function(v){var w=(t+1<r.length&&r.charAt(t+1)===v);
if(w){t++}return w},i=function(x,y,v){var w=""+y;if(s(x)){while(w.length<v){w="0"+w
}}return w},o=function(v,x,w,y){return(s(v)?y[x]:w[x])},k="",q=false;if(l){for(t=0;
t<r.length;t++){if(q){if(r.charAt(t)==="'"&&!s("'")){q=false}else{k+=r.charAt(t)}}else{switch(r.charAt(t)){case"d":k+=i("d",l.getDate(),2);
break;case"D":k+=o("D",l.getDay(),u,j);break;case"o":k+=i("o",Math.round((new Date(l.getFullYear(),l.getMonth(),l.getDate()).getTime()-new Date(l.getFullYear(),0,0).getTime())/86400000),3);
break;case"m":k+=i("m",l.getMonth()+1,2);break;case"M":k+=o("M",l.getMonth(),p,n);
break;case"y":k+=(s("y")?l.getFullYear():(l.getYear()%100<10?"0":"")+l.getYear()%100);
break;case"@":k+=l.getTime();break;case"!":k+=l.getTime()*10000+this._ticksTo1970;
break;case"'":if(s("'")){k+="'"}else{q=true}break;default:k+=r.charAt(t)}}}}return k
},_possibleChars:function(m){var l,k="",j=false,i=function(n){var o=(l+1<m.length&&m.charAt(l+1)===n);
if(o){l++}return o};for(l=0;l<m.length;l++){if(j){if(m.charAt(l)==="'"&&!i("'")){j=false
}else{k+=m.charAt(l)}}else{switch(m.charAt(l)){case"d":case"m":case"y":case"@":k+="0123456789";
break;case"D":case"M":return null;case"'":if(i("'")){k+="'"}else{j=true}break;default:k+=m.charAt(l)
}}}return k},_get:function(j,i){return j.settings[i]!==h?j.settings[i]:this._defaults[i]
},_setDateFromField:function(n,k){if(n.input.val()===n.lastVal){return}var i=this._get(n,"dateFormat"),p=n.lastVal=n.input?n.input.val():null,o=this._getDefaultDate(n),j=o,l=this._getFormatConfig(n);
try{j=this.parseDate(i,p,l)||o}catch(m){p=(k?"":p)}n.selectedDay=j.getDate();n.drawMonth=n.selectedMonth=j.getMonth();
n.drawYear=n.selectedYear=j.getFullYear();n.currentDay=(p?j.getDate():0);n.currentMonth=(p?j.getMonth():0);
n.currentYear=(p?j.getFullYear():0);this._adjustInstDate(n)},_getDefaultDate:function(i){return this._restrictMinMax(i,this._determineDate(i,this._get(i,"defaultDate"),new Date()))
},_determineDate:function(m,j,n){var l=function(p){var o=new Date();o.setDate(o.getDate()+p);
return o},k=function(v){try{return f.datepicker.parseDate(f.datepicker._get(m,"dateFormat"),v,f.datepicker._getFormatConfig(m))
}catch(u){}var p=(v.toLowerCase().match(/^c/)?f.datepicker._getDate(m):null)||new Date(),q=p.getFullYear(),t=p.getMonth(),o=p.getDate(),s=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,r=s.exec(v);
while(r){switch(r[2]||"d"){case"d":case"D":o+=parseInt(r[1],10);break;case"w":case"W":o+=parseInt(r[1],10)*7;
break;case"m":case"M":t+=parseInt(r[1],10);o=Math.min(o,f.datepicker._getDaysInMonth(q,t));
break;case"y":case"Y":q+=parseInt(r[1],10);o=Math.min(o,f.datepicker._getDaysInMonth(q,t));
break}r=s.exec(v)}return new Date(q,t,o)},i=(j==null||j===""?n:(typeof j==="string"?k(j):(typeof j==="number"?(isNaN(j)?n:l(j)):new Date(j.getTime()))));
i=(i&&i.toString()==="Invalid Date"?n:i);if(i){i.setHours(0);i.setMinutes(0);i.setSeconds(0);
i.setMilliseconds(0)}return this._daylightSavingAdjust(i)},_daylightSavingAdjust:function(i){if(!i){return null
}i.setHours(i.getHours()>12?i.getHours()+2:0);return i},_setDate:function(o,l,n){var i=!l,k=o.selectedMonth,m=o.selectedYear,j=this._restrictMinMax(o,this._determineDate(o,l,new Date()));
o.selectedDay=o.currentDay=j.getDate();o.drawMonth=o.selectedMonth=o.currentMonth=j.getMonth();
o.drawYear=o.selectedYear=o.currentYear=j.getFullYear();if((k!==o.selectedMonth||m!==o.selectedYear)&&!n){this._notifyChange(o)
}this._adjustInstDate(o);if(o.input){o.input.val(i?"":this._formatDate(o))}},_getDate:function(j){var i=(!j.currentYear||(j.input&&j.input.val()==="")?null:this._daylightSavingAdjust(new Date(j.currentYear,j.currentMonth,j.currentDay)));
return i},_attachHandlers:function(j){var i=this._get(j,"stepMonths"),k="#"+j.id.replace(/\\\\/g,"\\");
j.dpDiv.find("[data-handler]").map(function(){var l={prev:function(){window["DP_jQuery_"+e].datepicker._adjustDate(k,-i,"M")
},next:function(){window["DP_jQuery_"+e].datepicker._adjustDate(k,+i,"M")},hide:function(){window["DP_jQuery_"+e].datepicker._hideDatepicker()
},today:function(){window["DP_jQuery_"+e].datepicker._gotoToday(k)},selectDay:function(){window["DP_jQuery_"+e].datepicker._selectDay(k,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this);
return false},selectMonth:function(){window["DP_jQuery_"+e].datepicker._selectMonthYear(k,this,"M");
return false},selectYear:function(){window["DP_jQuery_"+e].datepicker._selectMonthYear(k,this,"Y");
return false}};f(this).bind(this.getAttribute("data-event"),l[this.getAttribute("data-handler")])
})},_generateHTML:function(Y){var B,A,T,L,m,ac,W,P,af,J,aj,t,v,u,j,ab,r,E,ae,R,ak,D,I,s,n,U,N,Q,O,q,G,w,X,aa,l,ad,ah,M,x,Z=new Date(),C=this._daylightSavingAdjust(new Date(Z.getFullYear(),Z.getMonth(),Z.getDate())),ag=this._get(Y,"isRTL"),ai=this._get(Y,"showButtonPanel"),S=this._get(Y,"hideIfNoPrevNext"),H=this._get(Y,"navigationAsDateFormat"),y=this._getNumberOfMonths(Y),p=this._get(Y,"showCurrentAtPos"),K=this._get(Y,"stepMonths"),F=(y[0]!==1||y[1]!==1),k=this._daylightSavingAdjust((!Y.currentDay?new Date(9999,9,9):new Date(Y.currentYear,Y.currentMonth,Y.currentDay))),o=this._getMinMaxDate(Y,"min"),z=this._getMinMaxDate(Y,"max"),i=Y.drawMonth-p,V=Y.drawYear;
if(i<0){i+=12;V--}if(z){B=this._daylightSavingAdjust(new Date(z.getFullYear(),z.getMonth()-(y[0]*y[1])+1,z.getDate()));
B=(o&&B<o?o:B);while(this._daylightSavingAdjust(new Date(V,i,1))>B){i--;if(i<0){i=11;
V--}}}Y.drawMonth=i;Y.drawYear=V;A=this._get(Y,"prevText");A=(!H?A:this.formatDate(A,this._daylightSavingAdjust(new Date(V,i-K,1)),this._getFormatConfig(Y)));
T=(this._canAdjustMonth(Y,-1,V,i)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+A+"'><span class='ui-icon ui-icon-circle-triangle-"+(ag?"e":"w")+"'>"+A+"</span></a>":(S?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+A+"'><span class='ui-icon ui-icon-circle-triangle-"+(ag?"e":"w")+"'>"+A+"</span></a>"));
L=this._get(Y,"nextText");L=(!H?L:this.formatDate(L,this._daylightSavingAdjust(new Date(V,i+K,1)),this._getFormatConfig(Y)));
m=(this._canAdjustMonth(Y,+1,V,i)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+L+"'><span class='ui-icon ui-icon-circle-triangle-"+(ag?"w":"e")+"'>"+L+"</span></a>":(S?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+L+"'><span class='ui-icon ui-icon-circle-triangle-"+(ag?"w":"e")+"'>"+L+"</span></a>"));
ac=this._get(Y,"currentText");W=(this._get(Y,"gotoCurrent")&&Y.currentDay?k:C);ac=(!H?ac:this.formatDate(ac,W,this._getFormatConfig(Y)));
P=(!Y.inline?"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(Y,"closeText")+"</button>":"");
af=(ai)?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(ag?P:"")+(this._isInRange(Y,W)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+ac+"</button>":"")+(ag?"":P)+"</div>":"";
J=parseInt(this._get(Y,"firstDay"),10);J=(isNaN(J)?0:J);aj=this._get(Y,"showWeek");
t=this._get(Y,"dayNames");v=this._get(Y,"dayNamesMin");u=this._get(Y,"monthNames");
j=this._get(Y,"monthNamesShort");ab=this._get(Y,"beforeShowDay");r=this._get(Y,"showOtherMonths");
E=this._get(Y,"selectOtherMonths");ae=this._getDefaultDate(Y);R="";ak;for(D=0;D<y[0];
D++){I="";this.maxRows=4;for(s=0;s<y[1];s++){n=this._daylightSavingAdjust(new Date(V,i,Y.selectedDay));
U=" ui-corner-all";N="";if(F){N+="<div class='ui-datepicker-group";if(y[1]>1){switch(s){case 0:N+=" ui-datepicker-group-first";
U=" ui-corner-"+(ag?"right":"left");break;case y[1]-1:N+=" ui-datepicker-group-last";
U=" ui-corner-"+(ag?"left":"right");break;default:N+=" ui-datepicker-group-middle";
U="";break}}N+="'>"}N+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+U+"'>"+(/all|left/.test(U)&&D===0?(ag?m:T):"")+(/all|right/.test(U)&&D===0?(ag?T:m):"")+this._generateMonthYearHeader(Y,i,V,o,z,D>0||s>0,u,j)+"</div><table class='ui-datepicker-calendar'><thead><tr>";
Q=(aj?"<th class='ui-datepicker-week-col'>"+this._get(Y,"weekHeader")+"</th>":"");
for(ak=0;ak<7;ak++){O=(ak+J)%7;Q+="<th"+((ak+J+6)%7>=5?" class='ui-datepicker-week-end'":"")+"><span title='"+t[O]+"'>"+v[O]+"</span></th>"
}N+=Q+"</tr></thead><tbody>";q=this._getDaysInMonth(V,i);if(V===Y.selectedYear&&i===Y.selectedMonth){Y.selectedDay=Math.min(Y.selectedDay,q)
}G=(this._getFirstDayOfMonth(V,i)-J+7)%7;w=Math.ceil((G+q)/7);X=(F?this.maxRows>w?this.maxRows:w:w);
this.maxRows=X;aa=this._daylightSavingAdjust(new Date(V,i,1-G));for(l=0;l<X;l++){N+="<tr>";
ad=(!aj?"":"<td class='ui-datepicker-week-col'>"+this._get(Y,"calculateWeek")(aa)+"</td>");
for(ak=0;ak<7;ak++){ah=(ab?ab.apply((Y.input?Y.input[0]:null),[aa]):[true,""]);M=(aa.getMonth()!==i);
x=(M&&!E)||!ah[0]||(o&&aa<o)||(z&&aa>z);ad+="<td class='"+((ak+J+6)%7>=5?" ui-datepicker-week-end":"")+(M?" ui-datepicker-other-month":"")+((aa.getTime()===n.getTime()&&i===Y.selectedMonth&&Y._keyEvent)||(ae.getTime()===aa.getTime()&&ae.getTime()===n.getTime())?" "+this._dayOverClass:"")+(x?" "+this._unselectableClass+" ui-state-disabled":"")+(M&&!r?"":" "+ah[1]+(aa.getTime()===k.getTime()?" "+this._currentClass:"")+(aa.getTime()===C.getTime()?" ui-datepicker-today":""))+"'"+((!M||r)&&ah[2]?" title='"+ah[2]+"'":"")+(x?"":" data-handler='selectDay' data-event='click' data-month='"+aa.getMonth()+"' data-year='"+aa.getFullYear()+"'")+">"+(M&&!r?"&#xa0;":(x?"<span class='ui-state-default'>"+aa.getDate()+"</span>":"<a class='ui-state-default"+(aa.getTime()===C.getTime()?" ui-state-highlight":"")+(aa.getTime()===k.getTime()?" ui-state-active":"")+(M?" ui-priority-secondary":"")+"' href='#'>"+aa.getDate()+"</a>"))+"</td>";
aa.setDate(aa.getDate()+1);aa=this._daylightSavingAdjust(aa)}N+=ad+"</tr>"}i++;if(i>11){i=0;
V++}N+="</tbody></table>"+(F?"</div>"+((y[0]>0&&s===y[1]-1)?"<div class='ui-datepicker-row-break'></div>":""):"");
I+=N}R+=I}R+=af;Y._keyEvent=false;return R},_generateMonthYearHeader:function(m,k,u,o,s,v,q,i){var z,j,A,x,n,w,t,p,l=this._get(m,"changeMonth"),B=this._get(m,"changeYear"),C=this._get(m,"showMonthAfterYear"),r="<div class='ui-datepicker-title'>",y="";
if(v||!l){y+="<span class='ui-datepicker-month'>"+q[k]+"</span>"}else{z=(o&&o.getFullYear()===u);
j=(s&&s.getFullYear()===u);y+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
for(A=0;A<12;A++){if((!z||A>=o.getMonth())&&(!j||A<=s.getMonth())){y+="<option value='"+A+"'"+(A===k?" selected='selected'":"")+">"+i[A]+"</option>"
}}y+="</select>"}if(!C){r+=y+(v||!(l&&B)?"&#xa0;":"")}if(!m.yearshtml){m.yearshtml="";
if(v||!B){r+="<span class='ui-datepicker-year'>"+u+"</span>"}else{x=this._get(m,"yearRange").split(":");
n=new Date().getFullYear();w=function(E){var D=(E.match(/c[+\-].*/)?u+parseInt(E.substring(1),10):(E.match(/[+\-].*/)?n+parseInt(E,10):parseInt(E,10)));
return(isNaN(D)?n:D)};t=w(x[0]);p=Math.max(t,w(x[1]||""));t=(o?Math.max(t,o.getFullYear()):t);
p=(s?Math.min(p,s.getFullYear()):p);m.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
for(;t<=p;t++){m.yearshtml+="<option value='"+t+"'"+(t===u?" selected='selected'":"")+">"+t+"</option>"
}m.yearshtml+="</select>";r+=m.yearshtml;m.yearshtml=null}}r+=this._get(m,"yearSuffix");
if(C){r+=(v||!(l&&B)?"&#xa0;":"")+y}r+="</div>";return r},_adjustInstDate:function(l,o,n){var k=l.drawYear+(n==="Y"?o:0),m=l.drawMonth+(n==="M"?o:0),i=Math.min(l.selectedDay,this._getDaysInMonth(k,m))+(n==="D"?o:0),j=this._restrictMinMax(l,this._daylightSavingAdjust(new Date(k,m,i)));
l.selectedDay=j.getDate();l.drawMonth=l.selectedMonth=j.getMonth();l.drawYear=l.selectedYear=j.getFullYear();
if(n==="M"||n==="Y"){this._notifyChange(l)}},_restrictMinMax:function(l,j){var k=this._getMinMaxDate(l,"min"),m=this._getMinMaxDate(l,"max"),i=(k&&j<k?k:j);
return(m&&i>m?m:i)},_notifyChange:function(j){var i=this._get(j,"onChangeMonthYear");
if(i){i.apply((j.input?j.input[0]:null),[j.selectedYear,j.selectedMonth+1,j])}},_getNumberOfMonths:function(j){var i=this._get(j,"numberOfMonths");
return(i==null?[1,1]:(typeof i==="number"?[1,i]:i))},_getMinMaxDate:function(j,i){return this._determineDate(j,this._get(j,i+"Date"),null)
},_getDaysInMonth:function(i,j){return 32-this._daylightSavingAdjust(new Date(i,j,32)).getDate()
},_getFirstDayOfMonth:function(i,j){return new Date(i,j,1).getDay()},_canAdjustMonth:function(l,n,k,m){var i=this._getNumberOfMonths(l),j=this._daylightSavingAdjust(new Date(k,m+(n<0?n:i[0]*i[1]),1));
if(n<0){j.setDate(this._getDaysInMonth(j.getFullYear(),j.getMonth()))}return this._isInRange(l,j)
},_isInRange:function(m,k){var j,p,l=this._getMinMaxDate(m,"min"),i=this._getMinMaxDate(m,"max"),q=null,n=null,o=this._get(m,"yearRange");
if(o){j=o.split(":");p=new Date().getFullYear();q=parseInt(j[0],10)+p;n=parseInt(j[1],10)+p
}return((!l||k.getTime()>=l.getTime())&&(!i||k.getTime()<=i.getTime())&&(!q||k.getFullYear()>=q)&&(!n||k.getFullYear()<=n))
},_getFormatConfig:function(i){var j=this._get(i,"shortYearCutoff");j=(typeof j!=="string"?j:new Date().getFullYear()%100+parseInt(j,10));
return{shortYearCutoff:j,dayNamesShort:this._get(i,"dayNamesShort"),dayNames:this._get(i,"dayNames"),monthNamesShort:this._get(i,"monthNamesShort"),monthNames:this._get(i,"monthNames")}
},_formatDate:function(l,i,m,k){if(!i){l.currentDay=l.selectedDay;l.currentMonth=l.selectedMonth;
l.currentYear=l.selectedYear}var j=(i?(typeof i==="object"?i:this._daylightSavingAdjust(new Date(k,m,i))):this._daylightSavingAdjust(new Date(l.currentYear,l.currentMonth,l.currentDay)));
return this.formatDate(this._get(l,"dateFormat"),j,this._getFormatConfig(l))}});function d(j){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
return j.delegate(i,"mouseout",function(){f(this).removeClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){f(this).removeClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){f(this).removeClass("ui-datepicker-next-hover")
}}).delegate(i,"mouseover",function(){if(!f.datepicker._isDisabledDatepicker(c.inline?j.parent()[0]:c.input[0])){f(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
f(this).addClass("ui-state-hover");if(this.className.indexOf("ui-datepicker-prev")!==-1){f(this).addClass("ui-datepicker-prev-hover")
}if(this.className.indexOf("ui-datepicker-next")!==-1){f(this).addClass("ui-datepicker-next-hover")
}}})}function a(k,j){f.extend(k,j);for(var i in j){if(j[i]==null){k[i]=j[i]}}return k
}f.fn.datepicker=function(j){if(!this.length){return this}if(!f.datepicker.initialized){f(document).mousedown(f.datepicker._checkExternalClick);
f.datepicker.initialized=true}if(f("#"+f.datepicker._mainDivId).length===0){f("body").append(f.datepicker.dpDiv)
}var i=Array.prototype.slice.call(arguments,1);if(typeof j==="string"&&(j==="isDisabled"||j==="getDate"||j==="widget")){return f.datepicker["_"+j+"Datepicker"].apply(f.datepicker,[this[0]].concat(i))
}if(j==="option"&&arguments.length===2&&typeof arguments[1]==="string"){return f.datepicker["_"+j+"Datepicker"].apply(f.datepicker,[this[0]].concat(i))
}return this.each(function(){typeof j==="string"?f.datepicker["_"+j+"Datepicker"].apply(f.datepicker,[this].concat(i)):f.datepicker._attachDatepicker(this,j)
})};f.datepicker=new b();f.datepicker.initialized=false;f.datepicker.uuid=new Date().getTime();
f.datepicker.version="1.10.0";window["DP_jQuery_"+e]=f})(jQuery);(function(a,b){a.widget("ui.menu",{version:"1.10.0",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element;
this.mouseHandled=false;this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}).bind("click"+this.eventNamespace,a.proxy(function(c){if(this.options.disabled){c.preventDefault()
}},this));if(this.options.disabled){this.element.addClass("ui-state-disabled").attr("aria-disabled","true")
}this._on({"mousedown .ui-menu-item > a":function(c){c.preventDefault()},"click .ui-state-disabled > a":function(c){c.preventDefault()
},"click .ui-menu-item:has(a)":function(c){var d=a(c.target).closest(".ui-menu-item");
if(!this.mouseHandled&&d.not(".ui-state-disabled").length){this.mouseHandled=true;
this.select(c);if(d.has(".ui-menu").length){this.expand(c)}else{if(!this.element.is(":focus")){this.element.trigger("focus",[true]);
if(this.active&&this.active.parents(".ui-menu").length===1){clearTimeout(this.timer)
}}}}},"mouseenter .ui-menu-item":function(c){var d=a(c.currentTarget);d.siblings().children(".ui-state-active").removeClass("ui-state-active");
this.focus(c,d)},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,c){var d=this.active||this.element.children(".ui-menu-item").eq(0);
if(!c){this.focus(e,d)}},blur:function(c){this._delay(function(){if(!a.contains(this.element[0],this.document[0].activeElement)){this.collapseAll(c)
}})},keydown:"_keydown"});this.refresh();this._on(this.document,{click:function(c){if(!a(c.target).closest(".ui-menu").length){this.collapseAll(c)
}this.mouseHandled=false}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var c=a(this);
if(c.data("ui-menu-submenu-carat")){c.remove()}});this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
},_keydown:function(i){var d,h,j,g,f,c=true;function e(k){return k.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
}switch(i.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(i);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(i);
break;case a.ui.keyCode.HOME:this._move("first","first",i);break;case a.ui.keyCode.END:this._move("last","last",i);
break;case a.ui.keyCode.UP:this.previous(i);break;case a.ui.keyCode.DOWN:this.next(i);
break;case a.ui.keyCode.LEFT:this.collapse(i);break;case a.ui.keyCode.RIGHT:if(this.active&&!this.active.is(".ui-state-disabled")){this.expand(i)
}break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(i);break;case a.ui.keyCode.ESCAPE:this.collapse(i);
break;default:c=false;h=this.previousFilter||"";j=String.fromCharCode(i.keyCode);
g=false;clearTimeout(this.filterTimer);if(j===h){g=true}else{j=h+j}f=new RegExp("^"+e(j),"i");
d=this.activeMenu.children(".ui-menu-item").filter(function(){return f.test(a(this).children("a").text())
});d=g&&d.index(this.active.next())!==-1?this.active.nextAll(".ui-menu-item"):d;if(!d.length){j=String.fromCharCode(i.keyCode);
f=new RegExp("^"+e(j),"i");d=this.activeMenu.children(".ui-menu-item").filter(function(){return f.test(a(this).children("a").text())
})}if(d.length){this.focus(i,d);if(d.length>1){this.previousFilter=j;this.filterTimer=this._delay(function(){delete this.previousFilter
},1000)}else{delete this.previousFilter}}else{delete this.previousFilter}}if(c){i.preventDefault()
}},_activate:function(c){if(!this.active.is(".ui-state-disabled")){if(this.active.children("a[aria-haspopup='true']").length){this.expand(c)
}else{this.select(c)}}},refresh:function(){var e,d=this.options.icons.submenu,c=this.element.find(this.options.menus);
c.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var h=a(this),g=h.prev("a"),f=a("<span>").addClass("ui-menu-icon ui-icon "+d).data("ui-menu-submenu-carat",true);
g.attr("aria-haspopup","true").prepend(f);h.attr("aria-labelledby",g.attr("id"))});
e=c.add(this.element);e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role","presentation").children("a").uniqueId().addClass("ui-corner-all").attr({tabIndex:-1,role:this._itemRole()});
e.children(":not(.ui-menu-item)").each(function(){var f=a(this);if(!/[^\-—–\s]/.test(f.text())){f.addClass("ui-widget-content ui-menu-divider")
}});e.children(".ui-state-disabled").attr("aria-disabled","true");if(this.active&&!a.contains(this.element[0],this.active[0])){this.blur()
}},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]
},_setOption:function(c,d){if(c==="icons"){this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(d.submenu)
}this._super(c,d)},focus:function(d,c){var f,e;this.blur(d,d&&d.type==="focus");this._scrollIntoView(c);
this.active=c.first();e=this.active.children("a").addClass("ui-state-focus");if(this.options.role){this.element.attr("aria-activedescendant",e.attr("id"))
}this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active");
if(d&&d.type==="keydown"){this._close()}else{this.timer=this._delay(function(){this._close()
},this.delay)}f=c.children(".ui-menu");if(f.length&&(/^mouse/.test(d.type))){this._startOpening(f)
}this.activeMenu=c.parent();this._trigger("focus",d,{item:c})},_scrollIntoView:function(f){var i,e,g,c,d,h;
if(this._hasScroll()){i=parseFloat(a.css(this.activeMenu[0],"borderTopWidth"))||0;
e=parseFloat(a.css(this.activeMenu[0],"paddingTop"))||0;g=f.offset().top-this.activeMenu.offset().top-i-e;
c=this.activeMenu.scrollTop();d=this.activeMenu.height();h=f.height();if(g<0){this.activeMenu.scrollTop(c+g)
}else{if(g+h>d){this.activeMenu.scrollTop(c+g-d+h)}}}},blur:function(d,c){if(!c){clearTimeout(this.timer)
}if(!this.active){return}this.active.children("a").removeClass("ui-state-focus");
this.active=null;this._trigger("blur",d,{item:this.active})},_startOpening:function(c){clearTimeout(this.timer);
if(c.attr("aria-hidden")!=="true"){return}this.timer=this._delay(function(){this._close();
this._open(c)},this.delay)},_open:function(d){var c=a.extend({of:this.active},this.options.position);
clearTimeout(this.timer);this.element.find(".ui-menu").not(d.parents(".ui-menu")).hide().attr("aria-hidden","true");
d.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(c)},collapseAll:function(d,c){clearTimeout(this.timer);
this.timer=this._delay(function(){var e=c?this.element:a(d&&d.target).closest(this.element.find(".ui-menu"));
if(!e.length){e=this.element}this._close(e);this.blur(d);this.activeMenu=e},this.delay)
},_close:function(c){if(!c){c=this.active?this.active.parent():this.element}c.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find("a.ui-state-active").removeClass("ui-state-active")
},collapse:function(d){var c=this.active&&this.active.parent().closest(".ui-menu-item",this.element);
if(c&&c.length){this._close();this.focus(d,c)}},expand:function(d){var c=this.active&&this.active.children(".ui-menu ").children(".ui-menu-item").first();
if(c&&c.length){this._open(c.parent());this._delay(function(){this.focus(d,c)})}},next:function(c){this._move("next","first",c)
},previous:function(c){this._move("prev","last",c)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length
},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length
},_move:function(f,d,e){var c;if(this.active){if(f==="first"||f==="last"){c=this.active[f==="first"?"prevAll":"nextAll"](".ui-menu-item").eq(-1)
}else{c=this.active[f+"All"](".ui-menu-item").eq(0)}}if(!c||!c.length||!this.active){c=this.activeMenu.children(".ui-menu-item")[d]()
}this.focus(e,c)},nextPage:function(e){var d,f,c;if(!this.active){this.next(e);return
}if(this.isLastItem()){return}if(this._hasScroll()){f=this.active.offset().top;c=this.element.height();
this.active.nextAll(".ui-menu-item").each(function(){d=a(this);return d.offset().top-f-c<0
});this.focus(e,d)}else{this.focus(e,this.activeMenu.children(".ui-menu-item")[!this.active?"first":"last"]())
}},previousPage:function(e){var d,f,c;if(!this.active){this.next(e);return}if(this.isFirstItem()){return
}if(this._hasScroll()){f=this.active.offset().top;c=this.element.height();this.active.prevAll(".ui-menu-item").each(function(){d=a(this);
return d.offset().top-f+c>0});this.focus(e,d)}else{this.focus(e,this.activeMenu.children(".ui-menu-item").first())
}},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")
},select:function(c){this.active=this.active||a(c.target).closest(".ui-menu-item");
var d={item:this.active};if(!this.active.has(".ui-menu").length){this.collapseAll(c,true)
}this._trigger("select",c,d)}})}(jQuery));(function(b,c){var a=5;b.widget("ui.slider",b.ui.mouse,{version:"1.10.0",widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){var f,d,j=this.options,h=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),g="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",e=[];
this._keySliding=false;this._mouseSliding=false;this._animateOff=true;this._handleIndex=null;
this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget ui-widget-content ui-corner-all");
this.range=b([]);if(j.range){if(j.range===true){if(!j.values){j.values=[this._valueMin(),this._valueMin()]
}else{if(j.values.length&&j.values.length!==2){j.values=[j.values[0],j.values[0]]
}else{if(b.isArray(j.values)){j.values=j.values.slice(0)}}}}this.range=b("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+((j.range==="min"||j.range==="max")?" ui-slider-range-"+j.range:""))
}d=(j.values&&j.values.length)||1;for(f=h.length;f<d;f++){e.push(g)}this.handles=h.add(b(e.join("")).appendTo(this.element));
this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(i){i.preventDefault()
}).mouseenter(function(){if(!j.disabled){b(this).addClass("ui-state-hover")}}).mouseleave(function(){b(this).removeClass("ui-state-hover")
}).focus(function(){if(!j.disabled){b(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
b(this).addClass("ui-state-focus")}else{b(this).blur()}}).blur(function(){b(this).removeClass("ui-state-focus")
});this.handles.each(function(k){b(this).data("ui-slider-handle-index",k)});this._setOption("disabled",j.disabled);
this._on(this.handles,this._handleEvents);this._refreshValue();this._animateOff=false
},_destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
this._mouseDestroy()},_mouseCapture:function(f){var j,m,e,h,l,n,i,d,k=this,g=this.options;
if(g.disabled){return false}this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};
this.elementOffset=this.element.offset();j={x:f.pageX,y:f.pageY};m=this._normValueFromMouse(j);
e=this._valueMax()-this._valueMin()+1;this.handles.each(function(o){var p=Math.abs(m-k.values(o));
if((e>p)||(e===p&&(o===k._lastChangedValue||k.values(o)===g.min))){e=p;h=b(this);
l=o}});n=this._start(f,l);if(n===false){return false}this._mouseSliding=true;this._handleIndex=l;
h.addClass("ui-state-active").focus();i=h.offset();d=!b(f.target).parents().addBack().is(".ui-slider-handle");
this._clickOffset=d?{left:0,top:0}:{left:f.pageX-i.left-(h.width()/2),top:f.pageY-i.top-(h.height()/2)-(parseInt(h.css("borderTopWidth"),10)||0)-(parseInt(h.css("borderBottomWidth"),10)||0)+(parseInt(h.css("marginTop"),10)||0)};
if(!this.handles.hasClass("ui-state-hover")){this._slide(f,l,m)}this._animateOff=true;
return true},_mouseStart:function(){return true},_mouseDrag:function(f){var d={x:f.pageX,y:f.pageY},e=this._normValueFromMouse(d);
this._slide(f,this._handleIndex,e);return false},_mouseStop:function(d){this.handles.removeClass("ui-state-active");
this._mouseSliding=false;this._stop(d,this._handleIndex);this._change(d,this._handleIndex);
this._handleIndex=null;this._clickOffset=null;this._animateOff=false;return false
},_detectOrientation:function(){this.orientation=(this.options.orientation==="vertical")?"vertical":"horizontal"
},_normValueFromMouse:function(e){var d,h,g,f,i;if(this.orientation==="horizontal"){d=this.elementSize.width;
h=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{d=this.elementSize.height;
h=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}g=(h/d);
if(g>1){g=1}if(g<0){g=0}if(this.orientation==="vertical"){g=1-g}f=this._valueMax()-this._valueMin();
i=this._valueMin()+g*f;return this._trimAlignValue(i)},_start:function(f,e){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);d.values=this.values()
}return this._trigger("start",f,d)},_slide:function(h,g,f){var d,e,i;if(this.options.values&&this.options.values.length){d=this.values(g?0:1);
if((this.options.values.length===2&&this.options.range===true)&&((g===0&&f>d)||(g===1&&f<d))){f=d
}if(f!==this.values(g)){e=this.values();e[g]=f;i=this._trigger("slide",h,{handle:this.handles[g],value:f,values:e});
d=this.values(g?0:1);if(i!==false){this.values(g,f,true)}}}else{if(f!==this.value()){i=this._trigger("slide",h,{handle:this.handles[g],value:f});
if(i!==false){this.value(f)}}}},_stop:function(f,e){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);d.values=this.values()
}this._trigger("stop",f,d)},_change:function(f,e){if(!this._keySliding&&!this._mouseSliding){var d={handle:this.handles[e],value:this.value()};
if(this.options.values&&this.options.values.length){d.value=this.values(e);d.values=this.values()
}this._lastChangedValue=e;this._trigger("change",f,d)}},value:function(d){if(arguments.length){this.options.value=this._trimAlignValue(d);
this._refreshValue();this._change(null,0);return}return this._value()},values:function(e,h){var g,d,f;
if(arguments.length>1){this.options.values[e]=this._trimAlignValue(h);this._refreshValue();
this._change(null,e);return}if(arguments.length){if(b.isArray(arguments[0])){g=this.options.values;
d=arguments[0];for(f=0;f<g.length;f+=1){g[f]=this._trimAlignValue(d[f]);this._change(null,f)
}this._refreshValue()}else{if(this.options.values&&this.options.values.length){return this._values(e)
}else{return this.value()}}}else{return this._values()}},_setOption:function(e,f){var d,g=0;
if(b.isArray(this.options.values)){g=this.options.values.length}b.Widget.prototype._setOption.apply(this,arguments);
switch(e){case"disabled":if(f){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");
this.handles.prop("disabled",true)}else{this.handles.prop("disabled",false)}break;
case"orientation":this._detectOrientation();this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);
this._refreshValue();break;case"value":this._animateOff=true;this._refreshValue();
this._change(null,0);this._animateOff=false;break;case"values":this._animateOff=true;
this._refreshValue();for(d=0;d<g;d+=1){this._change(null,d)}this._animateOff=false;
break;case"min":case"max":this._animateOff=true;this._refreshValue();this._animateOff=false;
break}},_value:function(){var d=this.options.value;d=this._trimAlignValue(d);return d
},_values:function(d){var g,f,e;if(arguments.length){g=this.options.values[d];g=this._trimAlignValue(g);
return g}else{f=this.options.values.slice();for(e=0;e<f.length;e+=1){f[e]=this._trimAlignValue(f[e])
}return f}},_trimAlignValue:function(g){if(g<=this._valueMin()){return this._valueMin()
}if(g>=this._valueMax()){return this._valueMax()}var d=(this.options.step>0)?this.options.step:1,f=(g-this._valueMin())%d,e=g-f;
if(Math.abs(f)*2>=d){e+=(f>0)?d:(-d)}return parseFloat(e.toFixed(5))},_valueMin:function(){return this.options.min
},_valueMax:function(){return this.options.max},_refreshValue:function(){var i,h,l,j,m,g=this.options.range,f=this.options,k=this,e=(!this._animateOff)?f.animate:false,d={};
if(this.options.values&&this.options.values.length){this.handles.each(function(n){h=(k.values(n)-k._valueMin())/(k._valueMax()-k._valueMin())*100;
d[k.orientation==="horizontal"?"left":"bottom"]=h+"%";b(this).stop(1,1)[e?"animate":"css"](d,f.animate);
if(k.options.range===true){if(k.orientation==="horizontal"){if(n===0){k.range.stop(1,1)[e?"animate":"css"]({left:h+"%"},f.animate)
}if(n===1){k.range[e?"animate":"css"]({width:(h-i)+"%"},{queue:false,duration:f.animate})
}}else{if(n===0){k.range.stop(1,1)[e?"animate":"css"]({bottom:(h)+"%"},f.animate)
}if(n===1){k.range[e?"animate":"css"]({height:(h-i)+"%"},{queue:false,duration:f.animate})
}}}i=h})}else{l=this.value();j=this._valueMin();m=this._valueMax();h=(m!==j)?(l-j)/(m-j)*100:0;
d[this.orientation==="horizontal"?"left":"bottom"]=h+"%";this.handle.stop(1,1)[e?"animate":"css"](d,f.animate);
if(g==="min"&&this.orientation==="horizontal"){this.range.stop(1,1)[e?"animate":"css"]({width:h+"%"},f.animate)
}if(g==="max"&&this.orientation==="horizontal"){this.range[e?"animate":"css"]({width:(100-h)+"%"},{queue:false,duration:f.animate})
}if(g==="min"&&this.orientation==="vertical"){this.range.stop(1,1)[e?"animate":"css"]({height:h+"%"},f.animate)
}if(g==="max"&&this.orientation==="vertical"){this.range[e?"animate":"css"]({height:(100-h)+"%"},{queue:false,duration:f.animate})
}}},_handleEvents:{keydown:function(h){var i,f,e,g,d=b(h.target).data("ui-slider-handle-index");
switch(h.keyCode){case b.ui.keyCode.HOME:case b.ui.keyCode.END:case b.ui.keyCode.PAGE_UP:case b.ui.keyCode.PAGE_DOWN:case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:h.preventDefault();
if(!this._keySliding){this._keySliding=true;b(h.target).addClass("ui-state-active");
i=this._start(h,d);if(i===false){return}}break}g=this.options.step;if(this.options.values&&this.options.values.length){f=e=this.values(d)
}else{f=e=this.value()}switch(h.keyCode){case b.ui.keyCode.HOME:e=this._valueMin();
break;case b.ui.keyCode.END:e=this._valueMax();break;case b.ui.keyCode.PAGE_UP:e=this._trimAlignValue(f+((this._valueMax()-this._valueMin())/a));
break;case b.ui.keyCode.PAGE_DOWN:e=this._trimAlignValue(f-((this._valueMax()-this._valueMin())/a));
break;case b.ui.keyCode.UP:case b.ui.keyCode.RIGHT:if(f===this._valueMax()){return
}e=this._trimAlignValue(f+g);break;case b.ui.keyCode.DOWN:case b.ui.keyCode.LEFT:if(f===this._valueMin()){return
}e=this._trimAlignValue(f-g);break}this._slide(h,d,e)},keyup:function(e){var d=b(e.target).data("ui-slider-handle-index");
if(this._keySliding){this._keySliding=false;this._stop(e,d);this._change(e,d);b(e.target).removeClass("ui-state-active")
}}}})}(jQuery));(function(c,e){var a=0,f=/#.*$/;function d(){return ++a}function b(g){return g.hash.length>1&&decodeURIComponent(g.href.replace(f,""))===decodeURIComponent(location.href.replace(f,""))
}c.widget("ui.tabs",{version:"1.10.0",delay:300,options:{active:null,collapsible:false,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_create:function(){var h=this,g=this.options;
this.running=false;this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",g.collapsible).delegate(".ui-tabs-nav > li","mousedown"+this.eventNamespace,function(i){if(c(this).is(".ui-state-disabled")){i.preventDefault()
}}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){if(c(this).closest("li").is(".ui-state-disabled")){this.blur()
}});this._processTabs();g.active=this._initialActive();if(c.isArray(g.disabled)){g.disabled=c.unique(g.disabled.concat(c.map(this.tabs.filter(".ui-state-disabled"),function(i){return h.tabs.index(i)
}))).sort()}if(this.options.active!==false&&this.anchors.length){this.active=this._findActive(g.active)
}else{this.active=c()}this._refresh();if(this.active.length){this.load(g.active)}},_initialActive:function(){var h=this.options.active,g=this.options.collapsible,i=location.hash.substring(1);
if(h===null){if(i){this.tabs.each(function(j,k){if(c(k).attr("aria-controls")===i){h=j;
return false}})}if(h===null){h=this.tabs.index(this.tabs.filter(".ui-tabs-active"))
}if(h===null||h===-1){h=this.tabs.length?0:false}}if(h!==false){h=this.tabs.index(this.tabs.eq(h));
if(h===-1){h=g?false:0}}if(!g&&h===false&&this.anchors.length){h=0}return h},_getCreateEventData:function(){return{tab:this.active,panel:!this.active.length?c():this._getPanelForTab(this.active)}
},_tabKeydown:function(i){var h=c(this.document[0].activeElement).closest("li"),g=this.tabs.index(h),j=true;
if(this._handlePageNav(i)){return}switch(i.keyCode){case c.ui.keyCode.RIGHT:case c.ui.keyCode.DOWN:g++;
break;case c.ui.keyCode.UP:case c.ui.keyCode.LEFT:j=false;g--;break;case c.ui.keyCode.END:g=this.anchors.length-1;
break;case c.ui.keyCode.HOME:g=0;break;case c.ui.keyCode.SPACE:i.preventDefault();
clearTimeout(this.activating);this._activate(g);return;case c.ui.keyCode.ENTER:i.preventDefault();
clearTimeout(this.activating);this._activate(g===this.options.active?false:g);return;
default:return}i.preventDefault();clearTimeout(this.activating);g=this._focusNextTab(g,j);
if(!i.ctrlKey){h.attr("aria-selected","false");this.tabs.eq(g).attr("aria-selected","true");
this.activating=this._delay(function(){this.option("active",g)},this.delay)}},_panelKeydown:function(g){if(this._handlePageNav(g)){return
}if(g.ctrlKey&&g.keyCode===c.ui.keyCode.UP){g.preventDefault();this.active.focus()
}},_handlePageNav:function(g){if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_UP){this._activate(this._focusNextTab(this.options.active-1,false));
return true}if(g.altKey&&g.keyCode===c.ui.keyCode.PAGE_DOWN){this._activate(this._focusNextTab(this.options.active+1,true));
return true}},_findNextTab:function(h,i){var g=this.tabs.length-1;function j(){if(h>g){h=0
}if(h<0){h=g}return h}while(c.inArray(j(),this.options.disabled)!==-1){h=i?h+1:h-1
}return h},_focusNextTab:function(g,h){g=this._findNextTab(g,h);this.tabs.eq(g).focus();
return g},_setOption:function(g,h){if(g==="active"){this._activate(h);return}if(g==="disabled"){this._setupDisabled(h);
return}this._super(g,h);if(g==="collapsible"){this.element.toggleClass("ui-tabs-collapsible",h);
if(!h&&this.options.active===false){this._activate(0)}}if(g==="event"){this._setupEvents(h)
}if(g==="heightStyle"){this._setupHeightStyle(h)}},_tabId:function(g){return g.attr("aria-controls")||"ui-tabs-"+d()
},_sanitizeSelector:function(g){return g?g.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""
},refresh:function(){var h=this.options,g=this.tablist.children(":has(a[href])");
h.disabled=c.map(g.filter(".ui-state-disabled"),function(i){return g.index(i)});this._processTabs();
if(h.active===false||!this.anchors.length){h.active=false;this.active=c()}else{if(this.active.length&&!c.contains(this.tablist[0],this.active[0])){if(this.tabs.length===h.disabled.length){h.active=false;
this.active=c()}else{this._activate(this._findNextTab(Math.max(0,h.active-1),false))
}}else{h.active=this.tabs.index(this.active)}}this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled);
this._setupEvents(this.options.event);this._setupHeightStyle(this.options.heightStyle);
this.tabs.not(this.active).attr({"aria-selected":"false",tabIndex:-1});this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-expanded":"false","aria-hidden":"true"});
if(!this.active.length){this.tabs.eq(0).attr("tabIndex",0)}else{this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true",tabIndex:0});
this._getPanelForTab(this.active).show().attr({"aria-expanded":"true","aria-hidden":"false"})
}},_processTabs:function(){var g=this;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist");
this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1});
this.anchors=this.tabs.map(function(){return c("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1});
this.panels=c();this.anchors.each(function(n,l){var h,j,m,k=c(l).uniqueId().attr("id"),o=c(l).closest("li"),p=o.attr("aria-controls");
if(b(l)){h=l.hash;j=g.element.find(g._sanitizeSelector(h))}else{m=g._tabId(o);h="#"+m;
j=g.element.find(h);if(!j.length){j=g._createPanel(m);j.insertAfter(g.panels[n-1]||g.tablist)
}j.attr("aria-live","polite")}if(j.length){g.panels=g.panels.add(j)}if(p){o.data("ui-tabs-aria-controls",p)
}o.attr({"aria-controls":h.substring(1),"aria-labelledby":k});j.attr("aria-labelledby",k)
});this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel")
},_getList:function(){return this.element.find("ol,ul").eq(0)},_createPanel:function(g){return c("<div>").attr("id",g).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",true)
},_setupDisabled:function(j){if(c.isArray(j)){if(!j.length){j=false}else{if(j.length===this.anchors.length){j=true
}}}for(var h=0,g;(g=this.tabs[h]);h++){if(j===true||c.inArray(h,j)!==-1){c(g).addClass("ui-state-disabled").attr("aria-disabled","true")
}else{c(g).removeClass("ui-state-disabled").removeAttr("aria-disabled")}}this.options.disabled=j
},_setupEvents:function(h){var g={click:function(i){i.preventDefault()}};if(h){c.each(h.split(" "),function(j,i){g[i]="_eventHandler"
})}this._off(this.anchors.add(this.tabs).add(this.panels));this._on(this.anchors,g);
this._on(this.tabs,{keydown:"_tabKeydown"});this._on(this.panels,{keydown:"_panelKeydown"});
this._focusable(this.tabs);this._hoverable(this.tabs)},_setupHeightStyle:function(g){var i,h=this.element.parent();
if(g==="fill"){i=h.height();i-=this.element.outerHeight()-this.element.height();this.element.siblings(":visible").each(function(){var k=c(this),j=k.css("position");
if(j==="absolute"||j==="fixed"){return}i-=k.outerHeight(true)});this.element.children().not(this.panels).each(function(){i-=c(this).outerHeight(true)
});this.panels.each(function(){c(this).height(Math.max(0,i-c(this).innerHeight()+c(this).height()))
}).css("overflow","auto")}else{if(g==="auto"){i=0;this.panels.each(function(){i=Math.max(i,c(this).height("").height())
}).height(i)}}},_eventHandler:function(g){var p=this.options,k=this.active,l=c(g.currentTarget),j=l.closest("li"),n=j[0]===k[0],h=n&&p.collapsible,i=h?c():this._getPanelForTab(j),m=!k.length?c():this._getPanelForTab(k),o={oldTab:k,oldPanel:m,newTab:h?c():j,newPanel:i};
g.preventDefault();if(j.hasClass("ui-state-disabled")||j.hasClass("ui-tabs-loading")||this.running||(n&&!p.collapsible)||(this._trigger("beforeActivate",g,o)===false)){return
}p.active=h?false:this.tabs.index(j);this.active=n?c():j;if(this.xhr){this.xhr.abort()
}if(!m.length&&!i.length){c.error("jQuery UI Tabs: Mismatching fragment identifier.")
}if(i.length){this.load(this.tabs.index(j),g)}this._toggle(g,o)},_toggle:function(m,l){var k=this,g=l.newPanel,j=l.oldPanel;
this.running=true;function i(){k.running=false;k._trigger("activate",m,l)}function h(){l.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
if(g.length&&k.options.show){k._show(g,k.options.show,i)}else{g.show();i()}}if(j.length&&this.options.hide){this._hide(j,this.options.hide,function(){l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
h()})}else{l.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");j.hide();
h()}j.attr({"aria-expanded":"false","aria-hidden":"true"});l.oldTab.attr("aria-selected","false");
if(g.length&&j.length){l.oldTab.attr("tabIndex",-1)}else{if(g.length){this.tabs.filter(function(){return c(this).attr("tabIndex")===0
}).attr("tabIndex",-1)}}g.attr({"aria-expanded":"true","aria-hidden":"false"});l.newTab.attr({"aria-selected":"true",tabIndex:0})
},_activate:function(h){var g,i=this._findActive(h);if(i[0]===this.active[0]){return
}if(!i.length){i=this.active}g=i.find(".ui-tabs-anchor")[0];this._eventHandler({target:g,currentTarget:g,preventDefault:c.noop})
},_findActive:function(g){return g===false?c():this.tabs.eq(g)},_getIndex:function(g){if(typeof g==="string"){g=this.anchors.index(this.anchors.filter("[href$='"+g+"']"))
}return g},_destroy:function(){if(this.xhr){this.xhr.abort()}this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
this.tabs.add(this.panels).each(function(){if(c.data(this,"ui-tabs-destroy")){c(this).remove()
}else{c(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
}});this.tabs.each(function(){var g=c(this),h=g.data("ui-tabs-aria-controls");if(h){g.attr("aria-controls",h).removeData("ui-tabs-aria-controls")
}else{g.removeAttr("aria-controls")}});this.panels.show();if(this.options.heightStyle!=="content"){this.panels.css("height","")
}},enable:function(g){var h=this.options.disabled;if(h===false){return}if(g===e){h=false
}else{g=this._getIndex(g);if(c.isArray(h)){h=c.map(h,function(i){return i!==g?i:null
})}else{h=c.map(this.tabs,function(i,j){return j!==g?j:null})}}this._setupDisabled(h)
},disable:function(g){var h=this.options.disabled;if(h===true){return}if(g===e){h=true
}else{g=this._getIndex(g);if(c.inArray(g,h)!==-1){return}if(c.isArray(h)){h=c.merge([g],h).sort()
}else{h=[g]}}this._setupDisabled(h)},load:function(i,m){i=this._getIndex(i);var l=this,j=this.tabs.eq(i),h=j.find(".ui-tabs-anchor"),g=this._getPanelForTab(j),k={tab:j,panel:g};
if(b(h[0])){return}this.xhr=c.ajax(this._ajaxSettings(h,m,k));if(this.xhr&&this.xhr.statusText!=="canceled"){j.addClass("ui-tabs-loading");
g.attr("aria-busy","true");this.xhr.success(function(n){setTimeout(function(){g.html(n);
l._trigger("load",m,k)},1)}).complete(function(o,n){setTimeout(function(){if(n==="abort"){l.panels.stop(false,true)
}j.removeClass("ui-tabs-loading");g.removeAttr("aria-busy");if(o===l.xhr){delete l.xhr
}},1)})}},_ajaxSettings:function(g,j,i){var h=this;return{url:g.attr("href"),beforeSend:function(l,k){return h._trigger("beforeLoad",j,c.extend({jqXHR:l,ajaxSettings:k},i))
}}},_getPanelForTab:function(g){var h=c(g).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+h))
}})})(jQuery);(jQuery.effects||(function(a,c){var b="ui-effects-";a.effects={effect:{}};
/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function(r,g){var n="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",k=/^([\-+])=\s*(\d+\.?\d*)/,j=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(s){return[s[1],s[2],s[3],s[4]]
}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(s){return[s[1]*2.55,s[2]*2.55,s[3]*2.55,s[4]]
}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(s){return[parseInt(s[1],16),parseInt(s[2],16),parseInt(s[3],16)]
}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(s){return[parseInt(s[1]+s[1],16),parseInt(s[2]+s[2],16),parseInt(s[3]+s[3],16)]
}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(s){return[s[1],s[2]/100,s[3]/100,s[4]]
}}],h=r.Color=function(t,u,s,v){return new r.Color.fn.parse(t,u,s,v)},m={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},q={"byte":{floor:true,max:255},percent:{max:1},degrees:{mod:360,floor:true}},p=h.support={},e=r("<p>")[0],d,o=r.each;
e.style.cssText="background-color:rgba(1,1,1,.5)";p.rgba=e.style.backgroundColor.indexOf("rgba")>-1;
o(m,function(s,t){t.cache="_"+s;t.props.alpha={idx:3,type:"percent",def:1}});function l(t,v,u){var s=q[v.type]||{};
if(t==null){return(u||!v.def)?null:v.def}t=s.floor?~~t:parseFloat(t);if(isNaN(t)){return v.def
}if(s.mod){return(t+s.mod)%s.mod}return 0>t?0:s.max<t?s.max:t}function i(s){var u=h(),t=u._rgba=[];
s=s.toLowerCase();o(j,function(z,A){var x,y=A.re.exec(s),w=y&&A.parse(y),v=A.space||"rgba";
if(w){x=u[v](w);u[m[v].cache]=x[m[v].cache];t=u._rgba=x._rgba;return false}});if(t.length){if(t.join()==="0,0,0,0"){r.extend(t,d.transparent)
}return u}return d[s]}h.fn=r.extend(h.prototype,{parse:function(y,w,s,x){if(y===g){this._rgba=[null,null,null,null];
return this}if(y.jquery||y.nodeType){y=r(y).css(w);w=g}var v=this,u=r.type(y),t=this._rgba=[];
if(w!==g){y=[y,w,s,x];u="array"}if(u==="string"){return this.parse(i(y)||d._default)
}if(u==="array"){o(m.rgba.props,function(z,A){t[A.idx]=l(y[A.idx],A)});return this
}if(u==="object"){if(y instanceof h){o(m,function(z,A){if(y[A.cache]){v[A.cache]=y[A.cache].slice()
}})}else{o(m,function(A,B){var z=B.cache;o(B.props,function(C,D){if(!v[z]&&B.to){if(C==="alpha"||y[C]==null){return
}v[z]=B.to(v._rgba)}v[z][D.idx]=l(y[C],D,true)});if(v[z]&&r.inArray(null,v[z].slice(0,3))<0){v[z][3]=1;
if(B.from){v._rgba=B.from(v[z])}}})}return this}},is:function(u){var s=h(u),v=true,t=this;
o(m,function(w,y){var z,x=s[y.cache];if(x){z=t[y.cache]||y.to&&y.to(t._rgba)||[];
o(y.props,function(A,B){if(x[B.idx]!=null){v=(x[B.idx]===z[B.idx]);return v}})}return v
});return v},_space:function(){var s=[],t=this;o(m,function(u,v){if(t[v.cache]){s.push(u)
}});return s.pop()},transition:function(t,z){var u=h(t),v=u._space(),w=m[v],x=this.alpha()===0?h("transparent"):this,y=x[w.cache]||w.to(x._rgba),s=y.slice();
u=u[w.cache];o(w.props,function(D,F){var C=F.idx,B=y[C],A=u[C],E=q[F.type]||{};if(A===null){return
}if(B===null){s[C]=A}else{if(E.mod){if(A-B>E.mod/2){B+=E.mod}else{if(B-A>E.mod/2){B-=E.mod
}}}s[C]=l((A-B)*z+B,F)}});return this[v](s)},blend:function(v){if(this._rgba[3]===1){return this
}var u=this._rgba.slice(),t=u.pop(),s=h(v)._rgba;return h(r.map(u,function(w,x){return(1-t)*s[x]+t*w
}))},toRgbaString:function(){var t="rgba(",s=r.map(this._rgba,function(u,w){return u==null?(w>2?1:0):u
});if(s[3]===1){s.pop();t="rgb("}return t+s.join()+")"},toHslaString:function(){var t="hsla(",s=r.map(this.hsla(),function(u,w){if(u==null){u=w>2?1:0
}if(w&&w<3){u=Math.round(u*100)+"%"}return u});if(s[3]===1){s.pop();t="hsl("}return t+s.join()+")"
},toHexString:function(s){var t=this._rgba.slice(),u=t.pop();if(s){t.push(~~(u*255))
}return"#"+r.map(t,function(w){w=(w||0).toString(16);return w.length===1?"0"+w:w}).join("")
},toString:function(){return this._rgba[3]===0?"transparent":this.toRgbaString()}});
h.fn.parse.prototype=h.fn;function f(u,t,s){s=(s+1)%1;if(s*6<1){return u+(t-u)*s*6
}if(s*2<1){return t}if(s*3<2){return u+(t-u)*((2/3)-s)*6}return u}m.hsla.to=function(v){if(v[0]==null||v[1]==null||v[2]==null){return[null,null,null,v[3]]
}var t=v[0]/255,y=v[1]/255,z=v[2]/255,B=v[3],A=Math.max(t,y,z),w=Math.min(t,y,z),C=A-w,D=A+w,u=D*0.5,x,E;
if(w===A){x=0}else{if(t===A){x=(60*(y-z)/C)+360}else{if(y===A){x=(60*(z-t)/C)+120
}else{x=(60*(t-y)/C)+240}}}if(C===0){E=0}else{if(u<=0.5){E=C/D}else{E=C/(2-D)}}return[Math.round(x)%360,E,u,B==null?1:B]
};m.hsla.from=function(x){if(x[0]==null||x[1]==null||x[2]==null){return[null,null,null,x[3]]
}var w=x[0]/360,v=x[1],u=x[2],t=x[3],y=u<=0.5?u*(1+v):u+v-u*v,z=2*u-y;return[Math.round(f(z,y,w+(1/3))*255),Math.round(f(z,y,w)*255),Math.round(f(z,y,w-(1/3))*255),t]
};o(m,function(t,v){var u=v.props,s=v.cache,x=v.to,w=v.from;h.fn[t]=function(C){if(x&&!this[s]){this[s]=x(this._rgba)
}if(C===g){return this[s].slice()}var z,B=r.type(C),y=(B==="array"||B==="object")?C:arguments,A=this[s].slice();
o(u,function(D,F){var E=y[B==="object"?D:F.idx];if(E==null){E=A[F.idx]}A[F.idx]=l(E,F)
});if(w){z=h(w(A));z[s]=A;return z}else{return h(A)}};o(u,function(y,z){if(h.fn[y]){return
}h.fn[y]=function(D){var F=r.type(D),C=(y==="alpha"?(this._hsla?"hsla":"rgba"):t),B=this[C](),E=B[z.idx],A;
if(F==="undefined"){return E}if(F==="function"){D=D.call(this,E);F=r.type(D)}if(D==null&&z.empty){return this
}if(F==="string"){A=k.exec(D);if(A){D=E+parseFloat(A[2])*(A[1]==="+"?1:-1)}}B[z.idx]=D;
return this[C](B)}})});h.hook=function(t){var s=t.split(" ");o(s,function(u,v){r.cssHooks[v]={set:function(z,A){var x,y,w="";
if(A!=="transparent"&&(r.type(A)!=="string"||(x=i(A)))){A=h(x||A);if(!p.rgba&&A._rgba[3]!==1){y=v==="backgroundColor"?z.parentNode:z;
while((w===""||w==="transparent")&&y&&y.style){try{w=r.css(y,"backgroundColor");y=y.parentNode
}catch(B){}}A=A.blend(w&&w!=="transparent"?w:"_default")}A=A.toRgbaString()}try{z.style[v]=A
}catch(B){}}};r.fx.step[v]=function(w){if(!w.colorInit){w.start=h(w.elem,v);w.end=h(w.end);
w.colorInit=true}r.cssHooks[v].set(w.elem,w.start.transition(w.end,w.pos))}})};h.hook(n);
r.cssHooks.borderColor={expand:function(t){var s={};o(["Top","Right","Bottom","Left"],function(v,u){s["border"+u+"Color"]=t
});return s}};d=r.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}
})(jQuery);(function(){var e=["add","remove","toggle"],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};
a.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(h,i){a.fx.step[i]=function(j){if(j.end!=="none"&&!j.setAttr||j.pos===1&&!j.setAttr){jQuery.style(j.elem,i,j.end);
j.setAttr=true}}});function g(l){var i,h,j=l.ownerDocument.defaultView?l.ownerDocument.defaultView.getComputedStyle(l,null):l.currentStyle,k={};
if(j&&j.length&&j[0]&&j[j[0]]){h=j.length;while(h--){i=j[h];if(typeof j[i]==="string"){k[a.camelCase(i)]=j[i]
}}}else{for(i in j){if(typeof j[i]==="string"){k[i]=j[i]}}}return k}function d(h,j){var l={},i,k;
for(i in j){k=j[i];if(h[i]!==k){if(!f[i]){if(a.fx.step[i]||!isNaN(parseFloat(k))){l[i]=k
}}}}return l}if(!a.fn.addBack){a.fn.addBack=function(h){return this.add(h==null?this.prevObject:this.prevObject.filter(h))
}}a.effects.animateClass=function(h,i,l,k){var j=a.speed(i,l,k);return this.queue(function(){var o=a(this),m=o.attr("class")||"",n,p=j.children?o.find("*").addBack():o;
p=p.map(function(){var q=a(this);return{el:q,start:g(this)}});n=function(){a.each(e,function(q,r){if(h[r]){o[r+"Class"](h[r])
}})};n();p=p.map(function(){this.end=g(this.el[0]);this.diff=d(this.start,this.end);
return this});o.attr("class",m);p=p.map(function(){var s=this,q=a.Deferred(),r=a.extend({},j,{queue:false,complete:function(){q.resolve(s)
}});this.el.animate(this.diff,r);return q.promise()});a.when.apply(a,p.get()).done(function(){n();
a.each(arguments,function(){var q=this.el;a.each(this.diff,function(r){q.css(r,"")
})});j.complete.call(o[0])})})};a.fn.extend({_addClass:a.fn.addClass,addClass:function(i,h,k,j){return h?a.effects.animateClass.call(this,{add:i},h,k,j):this._addClass(i)
},_removeClass:a.fn.removeClass,removeClass:function(i,h,k,j){return h?a.effects.animateClass.call(this,{remove:i},h,k,j):this._removeClass(i)
},_toggleClass:a.fn.toggleClass,toggleClass:function(j,i,h,l,k){if(typeof i==="boolean"||i===c){if(!h){return this._toggleClass(j,i)
}else{return a.effects.animateClass.call(this,(i?{add:j}:{remove:j}),h,l,k)}}else{return a.effects.animateClass.call(this,{toggle:j},i,h,l)
}},switchClass:function(h,j,i,l,k){return a.effects.animateClass.call(this,{add:j,remove:h},i,l,k)
}})})();(function(){a.extend(a.effects,{version:"1.10.0",save:function(g,h){for(var f=0;
f<h.length;f++){if(h[f]!==null){g.data(b+h[f],g[0].style[h[f]])}}},restore:function(g,j){var h,f;
for(f=0;f<j.length;f++){if(j[f]!==null){h=g.data(b+j[f]);if(h===c){h=""}g.css(j[f],h)
}}},setMode:function(f,g){if(g==="toggle"){g=f.is(":hidden")?"show":"hide"}return g
},getBaseline:function(g,h){var i,f;switch(g[0]){case"top":i=0;break;case"middle":i=0.5;
break;case"bottom":i=1;break;default:i=g[0]/h.height}switch(g[1]){case"left":f=0;
break;case"center":f=0.5;break;case"right":f=1;break;default:f=g[1]/h.width}return{x:f,y:i}
},createWrapper:function(g){if(g.parent().is(".ui-effects-wrapper")){return g.parent()
}var h={width:g.outerWidth(true),height:g.outerHeight(true),"float":g.css("float")},k=a("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),f={width:g.width(),height:g.height()},j=document.activeElement;
try{j.id}catch(i){j=document.body}g.wrap(k);if(g[0]===j||a.contains(g[0],j)){a(j).focus()
}k=g.parent();if(g.css("position")==="static"){k.css({position:"relative"});g.css({position:"relative"})
}else{a.extend(h,{position:g.css("position"),zIndex:g.css("z-index")});a.each(["top","left","bottom","right"],function(l,m){h[m]=g.css(m);
if(isNaN(parseInt(h[m],10))){h[m]="auto"}});g.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})
}g.css(f);return k.css(h).show()},removeWrapper:function(f){var g=document.activeElement;
if(f.parent().is(".ui-effects-wrapper")){f.parent().replaceWith(f);if(f[0]===g||a.contains(f[0],g)){a(g).focus()
}}return f},setTransition:function(g,i,f,h){h=h||{};a.each(i,function(k,j){var l=g.cssUnit(j);
if(l[0]>0){h[j]=l[0]*f+l[1]}});return h}});function d(g,f,h,i){if(a.isPlainObject(g)){f=g;
g=g.effect}g={effect:g};if(f==null){f={}}if(a.isFunction(f)){i=f;h=null;f={}}if(typeof f==="number"||a.fx.speeds[f]){i=h;
h=f;f={}}if(a.isFunction(h)){i=h;h=null}if(f){a.extend(g,f)}h=h||f.duration;g.duration=a.fx.off?0:typeof h==="number"?h:h in a.fx.speeds?a.fx.speeds[h]:a.fx.speeds._default;
g.complete=i||f.complete;return g}function e(f){if(!f||typeof f==="number"||a.fx.speeds[f]){return true
}return typeof f==="string"&&!a.effects.effect[f]}a.fn.extend({effect:function(){var h=d.apply(this,arguments),j=h.mode,f=h.queue,g=a.effects.effect[h.effect];
if(a.fx.off||!g){if(j){return this[j](h.duration,h.complete)}else{return this.each(function(){if(h.complete){h.complete.call(this)
}})}}function i(m){var n=a(this),l=h.complete,o=h.mode;function k(){if(a.isFunction(l)){l.call(n[0])
}if(a.isFunction(m)){m()}}if(n.is(":hidden")?o==="hide":o==="show"){k()}else{g.call(n[0],h,k)
}}return f===false?this.each(i):this.queue(f||"fx",i)},_show:a.fn.show,show:function(g){if(e(g)){return this._show.apply(this,arguments)
}else{var f=d.apply(this,arguments);f.mode="show";return this.effect.call(this,f)
}},_hide:a.fn.hide,hide:function(g){if(e(g)){return this._hide.apply(this,arguments)
}else{var f=d.apply(this,arguments);f.mode="hide";return this.effect.call(this,f)
}},__toggle:a.fn.toggle,toggle:function(g){if(e(g)||typeof g==="boolean"||a.isFunction(g)){return this.__toggle.apply(this,arguments)
}else{var f=d.apply(this,arguments);f.mode="toggle";return this.effect.call(this,f)
}},cssUnit:function(f){var g=this.css(f),h=[];a.each(["em","px","%","pt"],function(j,k){if(g.indexOf(k)>0){h=[parseFloat(g),k]
}});return h}})})();(function(){var d={};a.each(["Quad","Cubic","Quart","Quint","Expo"],function(f,e){d[e]=function(g){return Math.pow(g,f+2)
}});a.extend(d,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)
},Elastic:function(e){return e===0||e===1?e:-Math.pow(2,8*(e-1))*Math.sin(((e-1)*80-7.5)*Math.PI/15)
},Back:function(e){return e*e*(3*e-2)},Bounce:function(g){var e,f=4;while(g<((e=Math.pow(2,--f))-1)/11){}return 1/Math.pow(4,3-f)-7.5625*Math.pow((e*3-2)/22-g,2)
}});a.each(d,function(f,e){a.easing["easeIn"+f]=e;a.easing["easeOut"+f]=function(g){return 1-e(1-g)
};a.easing["easeInOut"+f]=function(g){return g<0.5?e(g*2)/2:1-e(g*-2+2)/2}})})()})(jQuery));
(function(a,b){a.effects.effect.drop=function(d,h){var e=a(this),j=["position","top","bottom","left","right","opacity","height","width"],i=a.effects.setMode(e,d.mode||"hide"),l=i==="show",k=d.direction||"left",f=(k==="up"||k==="down")?"top":"left",m=(k==="up"||k==="left")?"pos":"neg",g={opacity:l?1:0},c;
a.effects.save(e,j);e.show();a.effects.createWrapper(e);c=d.distance||e[f==="top"?"outerHeight":"outerWidth"](true)/2;
if(l){e.css("opacity",0).css(f,m==="pos"?-c:c)}g[f]=(l?(m==="pos"?"+=":"-="):(m==="pos"?"-=":"+="))+c;
e.animate(g,{queue:false,duration:d.duration,easing:d.easing,complete:function(){if(i==="hide"){e.hide()
}a.effects.restore(e,j);a.effects.removeWrapper(e);h()}})}})(jQuery);(function(a,b){a.effects.effect.slide=function(e,i){var f=a(this),k=["position","top","bottom","left","right","width","height"],j=a.effects.setMode(f,e.mode||"show"),m=j==="show",l=e.direction||"left",g=(l==="up"||l==="down")?"top":"left",d=(l==="up"||l==="left"),c,h={};
a.effects.save(f,k);f.show();c=e.distance||f[g==="top"?"outerHeight":"outerWidth"](true);
a.effects.createWrapper(f).css({overflow:"hidden"});if(m){f.css(g,d?(isNaN(c)?"-"+c:-c):c)
}h[g]=(m?(d?"+=":"-="):(d?"-=":"+="))+c;f.animate(h,{queue:false,duration:e.duration,easing:e.easing,complete:function(){if(j==="hide"){f.hide()
}a.effects.restore(f,k);a.effects.removeWrapper(f);i()}})}})(jQuery);(function(a,c,b){if(typeof define==="function"&&define.amd){define(["jquery"],function(d){b(d,a,c);
return d.mobile})}else{b(a.jQuery,a,c)}}(this,document,function(c,b,a,d){
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,i,f){var g="hashchange",l=a,j,k=$.event.special,m=l.documentMode,h="on"+g in i&&(m===f||m>7);
function e(n){n=n||location.href;return"#"+n.replace(/^[^#]*#?(.*)$/,"$1")}$.fn[g]=function(n){return n?this.bind(g,n):this.trigger(g)
};$.fn[g].delay=50;k[g]=$.extend(k[g],{setup:function(){if(h){return false}$(j.start)
},teardown:function(){if(h){return false}$(j.stop)}});j=(function(){var n={},t,q=e(),o=function(u){return u
},p=o,s=o;n.start=function(){t||r()};n.stop=function(){t&&clearTimeout(t);t=f};function r(){var v=e(),u=s(q);
if(v!==q){p(q=v,u);$(i).trigger(g)}else{if(u!==q){location.href=location.href.replace(/#.*/,"")+u
}}t=setTimeout(r,$.fn[g].delay)}i.attachEvent&&!i.addEventListener&&!h&&(function(){var u,v;
n.start=function(){if(!u){v=$.fn[g].src;v=v&&v+e();u=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){v||p(e());
r()}).attr("src",v||"javascript:0").insertAfter("body")[0].contentWindow;l.onpropertychange=function(){try{if(event.propertyName==="title"){u.document.title=l.title
}}catch(w){}}}};n.stop=o;s=function(){return e(u.location.href)};p=function(z,w){var y=u.document,x=$.fn[g].domain;
if(z!==w){y.title=l.title;y.open();x&&y.write('<script>document.domain="'+x+'"<\/script>');
y.close();u.location.hash=z}}})();return n})()})(c,this);(function(e){e.mobile={}
}(c));(function(f,e,g){f.extend(f.mobile,{version:"1.4.2",subPageUrlKey:"ui-page",hideUrlBar:true,keepNative:":jqmData(role='none'), :jqmData(role='nojs')",activePageClass:"ui-page-active",activeBtnClass:"ui-btn-active",focusClass:"ui-focus",ajaxEnabled:true,hashListeningEnabled:true,linkBindingEnabled:true,defaultPageTransition:"fade",maxTransitionWidth:false,minScrollBack:0,defaultDialogTransition:"pop",pageLoadErrorMessage:"Error Loading Page",pageLoadErrorMessageTheme:"a",phonegapNavigationEnabled:false,autoInitializePage:true,pushStateEnabled:true,ignoreContentEnabled:false,buttonMarkup:{hoverDelay:200},dynamicBaseEnabled:true,pageContainer:f(),allowCrossDomainPages:false,dialogHashKey:"&ui-state=dialog"})
})(c,this);(function(j,h,k){var g={},f=j.find,i=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,e=/:jqmData\(([^)]*)\)/g;
j.extend(j.mobile,{ns:"",getAttribute:function(m,l){var o;m=m.jquery?m[0]:m;if(m&&m.getAttribute){o=m.getAttribute("data-"+j.mobile.ns+l)
}try{o=o==="true"?true:o==="false"?false:o==="null"?null:+o+""===o?+o:i.test(o)?JSON.parse(o):o
}catch(n){}return o},nsNormalizeDict:g,nsNormalize:function(l){return g[l]||(g[l]=j.camelCase(j.mobile.ns+l))
},closestPageData:function(l){return l.closest(":jqmData(role='page'), :jqmData(role='dialog')").data("mobile-page")
}});j.fn.jqmData=function(n,m){var l;if(typeof n!=="undefined"){if(n){n=j.mobile.nsNormalize(n)
}if(arguments.length<2||m===k){l=this.data(n)}else{l=this.data(n,m)}}return l};j.jqmData=function(m,o,n){var l;
if(typeof o!=="undefined"){l=j.data(m,o?j.mobile.nsNormalize(o):o,n)}return l};j.fn.jqmRemoveData=function(l){return this.removeData(j.mobile.nsNormalize(l))
};j.jqmRemoveData=function(l,m){return j.removeData(l,j.mobile.nsNormalize(m))};j.find=function(m,o,n,l){if(m.indexOf(":jqmData")>-1){m=m.replace(e,"[data-"+(j.mobile.ns||"")+"$1]")
}return f.call(this,m,o,n,l)};j.extend(j.find,f)})(c,this);
/*!
 * jQuery UI Core c0ab71056b936627e8a7821f03c044aec6280a40
 * http://jqueryui.com
 *
 * Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
(function(f,j){var e=0,i=/^ui-id-\d+$/;
f.ui=f.ui||{};f.extend(f.ui,{version:"c0ab71056b936627e8a7821f03c044aec6280a40",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}});
f.fn.extend({focus:(function(k){return function(l,m){return typeof l==="number"?this.each(function(){var n=this;
setTimeout(function(){f(n).focus();if(m){m.call(n)}},l)}):k.apply(this,arguments)
}})(f.fn.focus),scrollParent:function(){var k;if((f.ui.ie&&(/(static|relative)/).test(this.css("position")))||(/absolute/).test(this.css("position"))){k=this.parents().filter(function(){return(/(relative|absolute|fixed)/).test(f.css(this,"position"))&&(/(auto|scroll)/).test(f.css(this,"overflow")+f.css(this,"overflow-y")+f.css(this,"overflow-x"))
}).eq(0)}else{k=this.parents().filter(function(){return(/(auto|scroll)/).test(f.css(this,"overflow")+f.css(this,"overflow-y")+f.css(this,"overflow-x"))
}).eq(0)}return(/fixed/).test(this.css("position"))||!k.length?f(this[0].ownerDocument||a):k
},uniqueId:function(){return this.each(function(){if(!this.id){this.id="ui-id-"+(++e)
}})},removeUniqueId:function(){return this.each(function(){if(i.test(this.id)){f(this).removeAttr("id")
}})}});function h(m,k){var o,n,l,p=m.nodeName.toLowerCase();if("area"===p){o=m.parentNode;
n=o.name;if(!m.href||!n||o.nodeName.toLowerCase()!=="map"){return false}l=f("img[usemap=#"+n+"]")[0];
return !!l&&g(l)}return(/input|select|textarea|button|object/.test(p)?!m.disabled:"a"===p?m.href||k:k)&&g(m)
}function g(k){return f.expr.filters.visible(k)&&!f(k).parents().addBack().filter(function(){return f.css(this,"visibility")==="hidden"
}).length}f.extend(f.expr[":"],{data:f.expr.createPseudo?f.expr.createPseudo(function(k){return function(l){return !!f.data(l,k)
}}):function(m,l,k){return !!f.data(m,k[3])},focusable:function(k){return h(k,!isNaN(f.attr(k,"tabindex")))
},tabbable:function(m){var k=f.attr(m,"tabindex"),l=isNaN(k);return(l||k>=0)&&h(m,!l)
}});if(!f("<a>").outerWidth(1).jquery){f.each(["Width","Height"],function(m,k){var l=k==="Width"?["Left","Right"]:["Top","Bottom"],n=k.toLowerCase(),p={innerWidth:f.fn.innerWidth,innerHeight:f.fn.innerHeight,outerWidth:f.fn.outerWidth,outerHeight:f.fn.outerHeight};
function o(s,r,q,t){f.each(l,function(){r-=parseFloat(f.css(s,"padding"+this))||0;
if(q){r-=parseFloat(f.css(s,"border"+this+"Width"))||0}if(t){r-=parseFloat(f.css(s,"margin"+this))||0
}});return r}f.fn["inner"+k]=function(q){if(q===j){return p["inner"+k].call(this)
}return this.each(function(){f(this).css(n,o(this,q)+"px")})};f.fn["outer"+k]=function(q,r){if(typeof q!=="number"){return p["outer"+k].call(this,q)
}return this.each(function(){f(this).css(n,o(this,q,true,r)+"px")})}})}if(!f.fn.addBack){f.fn.addBack=function(k){return this.add(k==null?this.prevObject:this.prevObject.filter(k))
}}if(f("<a>").data("a-b","a").removeData("a-b").data("a-b")){f.fn.removeData=(function(k){return function(l){if(arguments.length){return k.call(this,f.camelCase(l))
}else{return k.call(this)}}})(f.fn.removeData)}f.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
f.support.selectstart="onselectstart" in a.createElement("div");f.fn.extend({disableSelection:function(){return this.bind((f.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(k){k.preventDefault()
})},enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(n){if(n!==j){return this.css("zIndex",n)
}if(this.length){var l=f(this[0]),k,m;while(l.length&&l[0]!==a){k=l.css("position");
if(k==="absolute"||k==="relative"||k==="fixed"){m=parseInt(l.css("zIndex"),10);if(!isNaN(m)&&m!==0){return m
}}l=l.parent()}}return 0}});f.ui.plugin={add:function(l,m,o){var k,n=f.ui[l].prototype;
for(k in o){n.plugins[k]=n.plugins[k]||[];n.plugins[k].push([m,o[k]])}},call:function(k,n,m,l){var o,p=k.plugins[n];
if(!p){return}if(!l&&(!k.element[0].parentNode||k.element[0].parentNode.nodeType===11)){return
}for(o=0;o<p.length;o++){if(k.options[p[o][0]]){p[o][1].apply(k.element,m)}}}}})(c);
(function(g,f,h){var e=function(n,m){var i=n.parent(),p=[],j=i.children(":jqmData(role='header')"),l=n.children(":jqmData(role='header')"),o=i.children(":jqmData(role='footer')"),k=n.children(":jqmData(role='footer')");
if(l.length===0&&j.length>0){p=p.concat(j.toArray())}if(k.length===0&&o.length>0){p=p.concat(o.toArray())
}g.each(p,function(q,r){m-=g(r).outerHeight()});return Math.max(0,m)};g.extend(g.mobile,{window:g(f),document:g(a),keyCode:g.ui.keyCode,behaviors:{},silentScroll:function(i){if(g.type(i)!=="number"){i=g.mobile.defaultHomeScroll
}g.event.special.scrollstart.enabled=false;setTimeout(function(){f.scrollTo(0,i);
g.mobile.document.trigger("silentscroll",{x:0,y:i})},20);setTimeout(function(){g.event.special.scrollstart.enabled=true
},150)},getClosestBaseUrl:function(k){var i=g(k).closest(".ui-page").jqmData("url"),j=g.mobile.path.documentBase.hrefNoHash;
if(!g.mobile.dynamicBaseEnabled||!i||!g.mobile.path.isPath(i)){i=j}return g.mobile.path.makeUrlAbsolute(i,j)
},removeActiveLinkClass:function(i){if(!!g.mobile.activeClickedLink&&(!g.mobile.activeClickedLink.closest("."+g.mobile.activePageClass).length||i)){g.mobile.activeClickedLink.removeClass(g.mobile.activeBtnClass)
}g.mobile.activeClickedLink=null},getInheritedTheme:function(n,j){var o=n[0],k="",l=/ui-(bar|body|overlay)-([a-z])\b/,p,i;
while(o){p=o.className||"";if(p&&(i=l.exec(p))&&(k=i[2])){break}o=o.parentNode}return k||j||"a"
},enhanceable:function(i){return this.haveParents(i,"enhance")},hijackable:function(i){return this.haveParents(i,"ajax")
},haveParents:function(j,p){if(!g.mobile.ignoreContentEnabled){return j}var m=j.length,k=g(),o,r,n,l,q;
for(l=0;l<m;l++){r=j.eq(l);n=false;o=j[l];while(o){q=o.getAttribute?o.getAttribute("data-"+g.mobile.ns+p):"";
if(q==="false"){n=true;break}o=o.parentNode}if(!n){k=k.add(r)}}return k},getScreenHeight:function(){return f.innerHeight||g.mobile.window.height()
},resetActivePageHeight:function(i){var l=g("."+g.mobile.activePageClass),k=l.height(),j=l.outerHeight(true);
i=e(l,(typeof i==="number")?i:g.mobile.getScreenHeight());l.css("min-height",i-(j-k))
},loading:function(){var i=this.loading._widget||g(g.mobile.loader.prototype.defaultHtml).loader(),j=i.loader.apply(i,arguments);
this.loading._widget=i;return j}});g.addDependents=function(j,k){var i=g(j),l=i.jqmData("dependents")||g();
i.jqmData("dependents",g(l).add(k))};g.fn.extend({removeWithDependents:function(){g.removeWithDependents(this)
},enhanceWithin:function(){var j,l={},i=g.mobile.page.prototype.keepNativeSelector(),k=this;
if(g.mobile.nojs){g.mobile.nojs(this)}if(g.mobile.links){g.mobile.links(this)}if(g.mobile.degradeInputsWithin){g.mobile.degradeInputsWithin(this)
}if(g.fn.buttonMarkup){this.find(g.fn.buttonMarkup.initSelector).not(i).jqmEnhanceable().buttonMarkup()
}if(g.fn.fieldcontain){this.find(":jqmData(role='fieldcontain')").not(i).jqmEnhanceable().fieldcontain()
}g.each(g.mobile.widgets,function(m,n){if(n.initSelector){var o=g.mobile.enhanceable(k.find(n.initSelector));
if(o.length>0){o=o.not(i)}if(o.length>0){l[n.prototype.widgetName]=o}}});for(j in l){l[j][j]()
}return this},addDependents:function(i){g.addDependents(this,i)},getEncodedText:function(){return g("<a>").text(this.text()).html()
},jqmEnhanceable:function(){return g.mobile.enhanceable(this)},jqmHijackable:function(){return g.mobile.hijackable(this)
}});g.removeWithDependents=function(j){var i=g(j);(i.jqmData("dependents")||g()).remove();
i.remove()};g.addDependents=function(k,j){var i=g(k),l=i.jqmData("dependents")||g();
i.jqmData("dependents",g(l).add(j))};g.find.matches=function(i,j){return g.find(i,null,null,j)
};g.find.matchesSelector=function(i,j){return g.find(j,null,null,[i]).length>0}})(c,this);
(function(e,f){
/*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas. Dual MIT/BSD license */
;
b.matchMedia=b.matchMedia||(function(k,l){var i,g=k.documentElement,h=g.firstElementChild||g.firstChild,j=k.createElement("body"),m=k.createElement("div");
m.id="mq-test-1";m.style.cssText="position:absolute;top:-100em";j.style.background="none";
j.appendChild(m);return function(n){m.innerHTML='&shy;<style media="'+n+'"> #mq-test-1 { width: 42px; }</style>';
g.insertBefore(j,h);i=m.offsetWidth===42;g.removeChild(j);return{matches:i,media:n}
}}(a));e.mobile.media=function(g){return b.matchMedia(g).matches}})(c);(function(f,g){var e={touch:"ontouchend" in a};
f.mobile.support=f.mobile.support||{};f.extend(f.support,e);f.extend(f.mobile.support,e)
}(c));(function(e,f){e.extend(e.support,{orientation:"orientation" in b&&"onorientationchange" in b})
}(c));(function(k,h){function g(y){var x=y.charAt(0).toUpperCase()+y.substr(1),w=(y+" "+r.join(x+" ")+x).split(" "),u;
for(u in w){if(p[w[u]]!==h){return true}}}var i=k("<body>").prependTo("html"),p=i[0].style,r=["Webkit","Moz","O"],t="palmGetResource" in b,q=b.operamini&&({}).toString.call(b.operamini)==="[object OperaMini]",o=b.blackberry&&!g("-webkit-transform"),n;
function l(){var u=b,x=!!u.document.createElementNS&&!!u.document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect&&!(u.opera&&navigator.userAgent.indexOf("Chrome")===-1),y=function(w){if(!(w&&x)){k("html").addClass("ui-nosvg")
}},v=new u.Image();v.onerror=function(){y(false)};v.onload=function(){y(v.width===1&&v.height===1)
};v.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="}function j(){var y="transform-3d",u=k.mobile.media("(-"+r.join("-"+y+"),(-")+"-"+y+"),("+y+")"),x,w,v;
if(u){return !!u}x=a.createElement("div");w={MozTransform:"-moz-transform",transform:"transform"};
i.append(x);for(v in w){if(x.style[v]!==h){x.style[v]="translate3d( 100px, 1px, 1px )";
u=b.getComputedStyle(x).getPropertyValue(w[v])}}return(!!u&&u!=="none")}function f(){var y=location.protocol+"//"+location.host+location.pathname+"ui-dir/",x=k("head base"),z=null,u="",w,v;
if(!x.length){x=z=k("<base>",{href:y}).appendTo("head")}else{u=x.attr("href")}w=k("<a href='testurl' />").prependTo(i);
v=w[0].href;x[0].href=u||location.pathname;if(z){z.remove()}return v.indexOf(y)===0
}function s(){var v=a.createElement("x"),w=a.documentElement,x=b.getComputedStyle,u;
if(!("pointerEvents" in v.style)){return false}v.style.pointerEvents="auto";v.style.pointerEvents="x";
w.appendChild(v);u=x&&x(v,"").pointerEvents==="auto";w.removeChild(v);return !!u}function e(){var u=a.createElement("div");
return typeof u.getBoundingClientRect!=="undefined"}k.extend(k.mobile,{browser:{}});
k.mobile.browser.oldIE=(function(){var w=3,x=a.createElement("div"),u=x.all||[];do{x.innerHTML="<!--[if gt IE "+(++w)+"]><br><![endif]-->"
}while(u[0]);return w>4?w:!w})();function m(){var D=b,v=navigator.userAgent,y=navigator.platform,C=v.match(/AppleWebKit\/([0-9]+)/),B=!!C&&C[1],x=v.match(/Fennec\/([0-9]+)/),z=!!x&&x[1],A=v.match(/Opera Mobi\/([0-9]+)/),u=!!A&&A[1];
if(((y.indexOf("iPhone")>-1||y.indexOf("iPad")>-1||y.indexOf("iPod")>-1)&&B&&B<534)||(D.operamini&&({}).toString.call(D.operamini)==="[object OperaMini]")||(A&&u<7458)||(v.indexOf("Android")>-1&&B&&B<533)||(z&&z<6)||("palmGetResource" in b&&B&&B<534)||(v.indexOf("MeeGo")>-1&&v.indexOf("NokiaBrowser/8.5.0")>-1)){return false
}return true}k.extend(k.support,{pushState:"pushState" in history&&"replaceState" in history&&!(b.navigator.userAgent.indexOf("Firefox")>=0&&b.top!==b)&&(b.navigator.userAgent.search(/CriOS/)===-1),mediaquery:k.mobile.media("only all"),cssPseudoElement:!!g("content"),touchOverflow:!!g("overflowScrolling"),cssTransform3d:j(),boxShadow:!!g("boxShadow")&&!o,fixedPosition:m(),scrollTop:("pageXOffset" in b||"scrollTop" in a.documentElement||"scrollTop" in i[0])&&!t&&!q,dynamicBaseTag:f(),cssPointerEvents:s(),boundingRect:e(),inlineSVG:l});
i.remove();n=(function(){var u=b.navigator.userAgent;return u.indexOf("Nokia")>-1&&(u.indexOf("Symbian/3")>-1||u.indexOf("Series60/5")>-1)&&u.indexOf("AppleWebKit")>-1&&u.match(/(BrowserNG|NokiaBrowser)\/7\.[0-3]/)
})();k.mobile.gradeA=function(){return((k.support.mediaquery&&k.support.cssPseudoElement)||k.mobile.browser.oldIE&&k.mobile.browser.oldIE>=8)&&(k.support.boundingRect||k.fn.jquery.match(/1\.[0-7+]\.[0-9+]?/)!==null)
};k.mobile.ajaxBlacklist=b.blackberry&&!b.WebKitPoint||q||n;if(n){k(function(){k("head link[rel='stylesheet']").attr("rel","alternate stylesheet").attr("rel","stylesheet")
})}if(!k.support.boxShadow){k("html").addClass("ui-noboxshadow")}})(c);(function(g,h){var i=g.mobile.window,f,e=function(){};
g.event.special.beforenavigate={setup:function(){i.on("navigate",e)},teardown:function(){i.off("navigate",e)
}};g.event.special.navigate=f={bound:false,pushStateEnabled:true,originalEventName:h,isPushStateEnabled:function(){return g.support.pushState&&g.mobile.pushStateEnabled===true&&this.isHashChangeEnabled()
},isHashChangeEnabled:function(){return g.mobile.hashListeningEnabled===true},popstate:function(j){var l=new g.Event("navigate"),m=new g.Event("beforenavigate"),k=j.originalEvent.state||{};
m.originalEvent=j;i.trigger(m);if(m.isDefaultPrevented()){return}if(j.historyState){g.extend(k,j.historyState)
}l.originalEvent=j;setTimeout(function(){i.trigger(l,{state:k})},0)},hashchange:function(j){var k=new g.Event("navigate"),l=new g.Event("beforenavigate");
l.originalEvent=j;i.trigger(l);if(l.isDefaultPrevented()){return}k.originalEvent=j;
i.trigger(k,{state:j.hashchangeState||{}})},setup:function(){if(f.bound){return}f.bound=true;
if(f.isPushStateEnabled()){f.originalEventName="popstate";i.bind("popstate.navigate",f.popstate)
}else{if(f.isHashChangeEnabled()){f.originalEventName="hashchange";i.bind("hashchange.navigate",f.hashchange)
}}}}})(c)}));(function(a,b){var c=0;a.widget("ui.autocomplete",{version:"1.10.0",defaultElement:"<input>",options:{appendTo:null,autoFocus:false,delay:300,minLength:1,urlfunction:null,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},pending:0,_create:function(){var e,d,f;
this.isMultiLine=this._isMultiLine();this.valueMethod=this.element[this.element.is("input,textarea")?"val":"text"];
this.isNewMenu=true;this.element.addClass("ui-autocomplete-input").attr("autocomplete","off");
this._on(this.element,{keydown:function(g){if(this.element.prop("readOnly")){e=true;
f=true;d=true;return}e=false;f=false;d=false;var h=a.ui.keyCode;switch(g.keyCode){case h.PAGE_UP:e=true;
this._move("previousPage",g);break;case h.PAGE_DOWN:e=true;this._move("nextPage",g);
break;case h.UP:e=true;this._keyEvent("previous",g);break;case h.DOWN:e=true;this._keyEvent("next",g);
break;case h.ENTER:case h.NUMPAD_ENTER:if(this.menu.active){e=true;g.preventDefault();
this.menu.select(g)}break;case h.TAB:if(this.menu.active){this.menu.select(g)}break;
case h.ESCAPE:if(this.menu.element.is(":visible")){this._value(this.term);this.close(g);
g.preventDefault()}break;default:d=true;this._searchTimeout(g);break}},keypress:function(g){if(e){e=false;
g.preventDefault();return}if(d){return}var h=a.ui.keyCode;switch(g.keyCode){case h.PAGE_UP:this._move("previousPage",g);
break;case h.PAGE_DOWN:this._move("nextPage",g);break;case h.UP:this._keyEvent("previous",g);
break;case h.DOWN:this._keyEvent("next",g);break}},input:function(g){if(f){f=false;
g.preventDefault();return}this._searchTimeout(g)},focus:function(){this.selectedItem=null;
this.previous=this._value()},blur:function(g){if(this.cancelBlur){delete this.cancelBlur;
return}clearTimeout(this.searching);this.close(g);this._change(g)}});this._initSource();
this.menu=a("<ul>").addClass("ui-autocomplete").appendTo(this._appendTo()).menu({input:a(),role:null}).zIndex(this.element.zIndex()+1).hide().data("ui-menu");
this._on(this.menu.element,{mousedown:function(g){g.preventDefault();this.cancelBlur=true;
this._delay(function(){delete this.cancelBlur});var h=this.menu.element[0];if(!a(g.target).closest(".ui-menu-item").length){this._delay(function(){var i=this;
this.document.one("mousedown",function(j){if(j.target!==i.element[0]&&j.target!==h&&!a.contains(h,j.target)){i.close()
}})})}},menufocus:function(h,i){if(this.isNewMenu){this.isNewMenu=false;if(h.originalEvent&&/^mouse/.test(h.originalEvent.type)){this.menu.blur();
this.document.one("mousemove",function(){a(h.target).trigger(h.originalEvent)});return
}}var g=i.item.data("ui-autocomplete-item");if(false!==this._trigger("focus",h,{item:g})){if(h.originalEvent&&/^key/.test(h.originalEvent.type)){this._value(g.value)
}}else{this.liveRegion.text(g.value)}},menuselect:function(i,j){var h=j.item.data("ui-autocomplete-item"),g=this.previous;
if(this.element[0]!==this.document[0].activeElement){this.element.focus();this.previous=g;
this._delay(function(){this.previous=g;this.selectedItem=h})}if(false!==this._trigger("select",i,{item:h})){this._value(h.value)
}this.term=this._value();this.close(i);this.selectedItem=h}});this.liveRegion=a("<span>",{role:"status","aria-live":"polite"}).addClass("ui-helper-hidden-accessible").insertAfter(this.element);
this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")
}})},_destroy:function(){clearTimeout(this.searching);this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
this.menu.element.remove();this.liveRegion.remove()},_setOption:function(d,e){this._super(d,e);
if(d==="source"){this._initSource()}if(d==="appendTo"){this.menu.element.appendTo(this._appendTo())
}if(d==="disabled"&&e&&this.xhr){this.xhr.abort()}},_appendTo:function(){var d=this.options.appendTo;
if(d){d=d.jquery||d.nodeType?a(d):this.document.find(d).eq(0)}if(!d){d=this.element.closest(".ui-front")
}if(!d.length){d=this.document[0].body}return d},_isMultiLine:function(){if(this.element.is("textarea")){return true
}if(this.element.is("input")){return false}return this.element.prop("isContentEditable")
},_initSource:function(){var f,d,e=this;if(a.isArray(this.options.source)){f=this.options.source;
this.source=function(h,g){g(a.ui.autocomplete.filter(f,h.term))}}else{if(typeof this.options.source==="string"){d=this.options.source;
this.source=function(i,h,g){if(e.xhr){e.xhr.abort()}d=(this.options.urlfunction&&this.options.urlfunction!=null)?this.options.urlfunction(this.options.source,i.term):this.options.source;
e.xhr=a.ajax({url:d,data:i,dataType:"json",success:function(j){h(j)},error:function(){h([])
}})}}else{this.source=this.options.source}}},_searchTimeout:function(d){clearTimeout(this.searching);
this.searching=this._delay(function(){if(this.term!==this._value()){this.selectedItem=null;
this.search(null,d)}},this.options.delay)},search:function(e,d){e=e!=null?e:this._value();
this.term=this._value();if(e.length<this.options.minLength){return this.close(d)}if(this._trigger("search",d)===false){return
}return this._search(e)},_search:function(d){this.pending++;this.element.addClass("ui-autocomplete-loading");
this.cancelSearch=false;this.source({term:d},this._response(),this.options.urlfunction)
},_response:function(){var e=this,d=++c;return function(f){if(d===c){e.__response(f)
}e.pending--;if(!e.pending){e.element.removeClass("ui-autocomplete-loading")}}},__response:function(d){if(d){d=this._normalize(d)
}this._trigger("response",null,{content:d});if(!this.options.disabled&&d&&d.length&&!this.cancelSearch){this._suggest(d);
this._trigger("open")}else{this._close()}},close:function(d){this.cancelSearch=true;
this._close(d)},_close:function(d){if(this.menu.element.is(":visible")){this.menu.element.hide();
this.menu.blur();this.isNewMenu=true;this._trigger("close",d)}},_change:function(d){if(this.previous!==this._value()){this._trigger("change",d,{item:this.selectedItem})
}},_normalize:function(d){if(d.length&&d[0].label&&d[0].value){return d}return a.map(d,function(e){if(typeof e==="string"){return{label:e,value:e}
}return a.extend({label:e.label||e.value,value:e.value||e.label},e)})},_suggest:function(d){var e=this.menu.element.empty().zIndex(this.element.zIndex()+1);
this._renderMenu(e,d);this.menu.refresh();e.show();this._resizeMenu();e.position(a.extend({of:this.element},this.options.position));
if(this.options.autoFocus){this.menu.next()}},_resizeMenu:function(){var d=this.menu.element;
d.outerWidth(Math.max(d.width("400px").outerWidth()+1,this.element.outerWidth()))
},_renderMenu:function(e,d){var f=this;a.each(d,function(g,h){f._renderItemData(e,h)
})},_renderItemData:function(d,e){return this._renderItem(d,e).data("ui-autocomplete-item",e)
},_renderItem:function(d,e){return a("<li>").append(a("<a>").text(e.label)).appendTo(d)
},_move:function(e,d){if(!this.menu.element.is(":visible")){this.search(null,d);return
}if(this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)){this._value(this.term);
this.menu.blur();return}this.menu[e](d)},widget:function(){return this.menu.element
},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,d){if(!this.isMultiLine||this.menu.element.is(":visible")){this._move(e,d);
d.preventDefault()}}});a.extend(a.ui.autocomplete,{escapeRegex:function(d){return d.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")
},filter:function(f,d){var e=new RegExp(a.ui.autocomplete.escapeRegex(d),"i");return a.grep(f,function(g){return e.test(g.label||g.value||g)
})}});a.widget("ui.autocomplete",a.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(d){return d+(d>1?" results are":" result is")+" available, use up and down arrow keys to navigate."
}}},__response:function(e){var d;this._superApply(arguments);if(this.options.disabled||this.cancelSearch){return
}if(e&&e.length){d=this.options.messages.results(e.length)}else{d=this.options.messages.noResults
}this.liveRegion.text(d)}})}(jQuery));(function(a){a.fn.watermark=function(j){j=j||{};
var f={};var i=this;var d=a.extend(f,j);var h=d.label?d.label:i.attr("title");var e=i.position();
var b=e.left+(i.outerWidth()-i.innerWidth())+2;var g=e.top+2;var c=a('<span class="watermark" style="position:absolute;left:'+b+"px;top:"+g+'px">'+h+"</span>");
c.insertAfter(i);if(i.val()!==""){c.hide()}c.click(function(){i.focus()});i.focus(function(){c.hide()
});i.blur(function(){if(a(this).val()===""){c.show()}});i.keyup(function(){c.hide()
})}})(jQuery);(function(a){a.fn.dialog=function(g){var f=a("div.tip");if(f.length>0){f.remove()
}var d=this;var c=function(){b.width("420px").appendTo("body").position({of:d,my:"left bottom",at:"middle top",collision:"fit"}).show("slow")
};var b=a('<div class="tip"/>');if(g.id){a.ajax({url:"/context/"+g.id,async:false}).done(function(h){var j=a('<div style="float:right"/>');
a('<a href="#" class="closeBox">x</a>').appendTo(j).click(function(k){b.remove();
return false});var i=a('<div class="tipContent"/>');b.append(j).append("<h3>Help</h3>").append(i);
i.html(h);c()})}else{if(g.str){var e=a('<div class="tipContent"/>');e.html(g.str);
b.append(e);c()}}return b}})(jQuery);(function(a){a.fn.attachMenu=function(c){var b=this;
b.click(function(f){if(a(this).hasClass("disabled")){return false}var e="";if(typeof c=="function"){e=c()
}else{e=c}var d=b.offset();e.css("top",d.top+b.outerHeight());e.css("left",d.left);
e.trigger("update");e.toggle();return false})}})(jQuery);(function(a){a.fn.createMenu=function(m){var s=true;
var k={formats:[],goHandler:function(i){return false},update:function(i){return false
},getSelectedCount:function(){return a("#AllSelectMessage").is(":visible")?m.total:a(".basket-item:checked").length
}};m=a.extend(k,m);if(m.total){m.update=function(u){var t=function(w){var v=a("input#selected");
v.prop("disabled",(w===0));a("input#all").prop("checked",(w===0));v.prop("checked",(w!==0))
};var i=m.getSelectedCount();a("#selected-count").html(i);t(i)}}var d=a(".options-menu");
if(d.length>0){d.remove()}var b=a("<div></div>",{"class":"options-menu options-menu-medium"});
var c=a('<a class="closeBox" href="#" style="float:right">x</a>');c.click(function(){b.remove();
return false});b.append(c);if(m.options){var j=a("<ul/>");var n=function(t,u){var i=a("<li/>");
i.append(t);i.append(u);j.append(i)};for(var h=0;h<m.options.others.length;h++){var l=m.options.others[h];
var q=a('<input type="radio" id="option-'+h+'" name="menu-options" value="'+l.value+'"/>');
var p=a('<label for="option-'+h+'">'+l.label+"</label>");n(q,p)}if(m.options.selected){var l=m.options.selected;
var q=a('<input type="radio" id="selected" name="menu-options" value="selected"/>');
var p=a('<label for="selected">'+l.label+' (<strong><span id="selected-count">'+l.count+"</span></strong>)</label>");
n(q,p)}if(m.options.all){var l=m.options.all;var q=a('<input type="radio" id="all" name="menu-options" value="all"/>');
var p=a('<label for="all">'+l.label+' (<strong><span id="all-count">'+l.count+"</span></strong>)</label>");
n(q,p)}b.append(j)}if(typeof m.formats==="function"){m.formats=m.formats.call()}if(m.formats.length>0){b.append('<p><label class="bold-label">Format:</label></p>');
var o=a("<select/>",{name:"format",id:"format"});for(var h=0;h<m.formats.length;h++){var e=m.formats[h];
o.append('<option value="'+e.value+'">'+e.label+"</option>")}b.append(o);if(m.selectedFormat){var r=(typeof m.selectedFormat==="function")?m.selectedFormat():m.selectedFormat;
o.val(r)}}else{if(m.listformats&&m.listformats.length>0){s=false;b.append(a('<p><label class="bold-label">View format</label></p>'));
var g=a("<ul/>");var n=function(u,t){var i=a("<li/>");i.append(a('<a href="'+m.entryId+"."+u+'" id="dowload-format-'+u+'">'+t+"</a>"));
i.click(function(v){if(t==="FASTA (canonical & isoform)"){window.location.href=m.entryId+"."+u+"?include=yes"
}else{window.location.href=m.entryId+"."+u}return false});g.append(i)};a.each(m.listformats,function(i,t){n(t.format,t.label)
});b.append(g)}}if(s){var f=a('<a href="#" class="button" id="menu-go">Go</a>');f.click(m.goHandler);
b.append(f)}this.append(b);b.bind("update",function(){m.update.call(b)});return b
}})(jQuery);(function(a){a.tooltipsy=function(c,b){this.options=b;this.$el=a(c);this.title=this.$el.attr("title")||"";
this.$el.attr("title","");this.random=parseInt(Math.random()*10000);this.ready=false;
this.shown=false;this.width=0;this.height=0;this.delaytimer=null;this.$el.data("tooltipsy",this);
this.init()};a.tooltipsy.prototype={init:function(){var e=this,d,b=e.$el,c=b[0];e.settings=d=a.extend({},e.defaults,e.options);
d.delay=+d.delay;if(typeof d.content==="function"){e.readify()}if(d.showEvent===d.hideEvent&&d.showEvent==="click"){b.toggle(function(f){if(d.showEvent==="click"&&c.tagName=="A"){f.preventDefault()
}if(d.delay>0){e.delaytimer=window.setTimeout(function(){e.show(f)},d.delay)}else{e.show(f)
}},function(f){if(d.showEvent==="click"&&c.tagName=="A"){f.preventDefault()}window.clearTimeout(e.delaytimer);
e.delaytimer=null;e.hide(f)})}else{b.bind(d.showEvent,function(f){if(d.showEvent==="click"&&c.tagName=="A"){f.preventDefault()
}e.delaytimer=window.setTimeout(function(){e.show(f)},d.delay||0)}).bind(d.hideEvent,function(f){if(d.showEvent==="click"&&c.tagName=="A"){f.preventDefault()
}window.clearTimeout(e.delaytimer);e.delaytimer=null;e.hide(f)})}},show:function(i){if(this.ready===false){this.readify()
}var b=this,f=b.settings,h=b.$tipsy,k=b.$el,d=k[0],g=b.offset(d);if(b.shown===false){if((function(m){var l=0,e;
for(e in m){if(m.hasOwnProperty(e)){l++}}return l})(f.css)>0){b.$tip.css(f.css)}b.width=h.outerWidth();
b.height=h.outerHeight()}if(f.alignTo==="cursor"&&i){var j=[i.clientX+f.offset[0],i.clientY+f.offset[1]];
if(j[0]+b.width>a(window).width()){var c={top:j[1]+"px",right:j[0]+"px",left:"auto"}
}else{var c={top:j[1]+"px",left:j[0]+"px",right:"auto"}}}else{var j=[(function(){if(f.offset[0]<0){return g.left-Math.abs(f.offset[0])-b.width
}else{if(f.offset[0]===0){return g.left-((b.width-k.outerWidth())/2)}else{if(f.offset[0]>0&&f.offset[0]<1){return g.left
}else{return g.left+k.outerWidth()+f.offset[0]}}}})(),(function(){if(f.offset[1]<0){return g.top-Math.abs(f.offset[1])-b.height
}else{if(f.offset[1]===0){return g.top-((b.height-b.$el.outerHeight())/2)}else{if(f.offset[1]>0&&f.offset[1]<1){return g.top
}else{return g.top+b.$el.outerHeight()+f.offset[1]}}}})()]}if(this.title=="Add or remove columns from the results table"){h.css({top:j[1]+"px",left:j[0]-200+"px"})
}else{h.css({top:j[1]+"px",left:j[0]+"px"})}b.settings.show(i,h.stop(true,true))},hide:function(c){var b=this;
if(b.ready===false){return}if(c&&c.relatedTarget===b.$tip[0]){b.$tip.bind("mouseleave",function(d){if(d.relatedTarget===b.$el[0]){return
}b.settings.hide(d,b.$tipsy.stop(true,true))});return}b.settings.hide(c,b.$tipsy.stop(true,true))
},readify:function(){this.ready=true;this.$tipsy=a('<div id="tooltipsy'+this.random+'" style="position:fixed;z-index:2147483647;display:none">').appendTo("body");
if(this.title=="Add or remove columns from the results table"){this.$tip=a('<div class="'+this.settings.className+' addCols">').appendTo(this.$tipsy)
}else{this.$tip=a('<div class="'+this.settings.className+'">').appendTo(this.$tipsy)
}this.$tip.data("rootel",this.$el);var c=this.$el;var b=this.$tip;this.$tip.html(this.settings.content!=""?(typeof this.settings.content=="string"?this.settings.content:this.settings.content(c,b)):this.title)
},offset:function(b){return this.$el[0].getBoundingClientRect()},destroy:function(){if(this.$tipsy){this.$tipsy.remove();
a.removeData(this.$el,"tooltipsy")}},defaults:{alignTo:"element",offset:[0,-1],content:"",show:function(c,b){b.fadeIn(100)
},hide:function(c,b){b.fadeOut(100)},css:{},className:"tooltipsy",delay:200,showEvent:"mouseenter",hideEvent:"mouseleave"}};
a.fn.tooltipsy=function(b){return this.each(function(){new a.tooltipsy(this,b)})}
})(jQuery);(function(a){a.QueryString=(function(d){if(d==""){return{}}var c={};for(var e=0;
e<d.length;++e){var f=d[e].split("=");if(f.length!=2){continue}c[f[0]]=decodeURIComponent(f[1].replace(/\+/g," "))
}return c})(window.location.search.substr(1).split("&"))})(jQuery);(function(a){a.fn.inputHints=function(){function c(e){if(jQuery(e).val()==""){jQuery(e).val(a(e).attr("title")).addClass("hint")
}}function d(e){if(a(e).val()==a(e).attr("title")){a(e).val("").removeClass("hint")
}}var b=a(this);b.each(function(){c(this)});b.closest("form").submit(function(){b.each(function(){d(this)
});return true});return b.focus(function(){d(this)}).blur(function(){c(this)})}})(jQuery);
(function(a){a.fn.createBlastDropDown=function(d){var c={options:[{value:"default",label:"Default",tooltipId:"",selected:true},{value:"advanced",label:"Advanced"}],goHandler:function(j){return false
}};d=a.extend(c,d);var h=a(".options-menu");if(h.length>0){h.remove()}var i=a("<div></div>",{"class":"options-menu blast-options-list"});
var b=a('<a class="closeBox float-r" href="#" >x</a>');b.click(function(){i.remove();
return false});i.append(b);if(d.options){var e=a("<ul/>");var g=function(k,l){var j=a("<li/>");
j.append(k);j.append(l);e.append(j)};a.each(d.options,function(l,m){var n=m;var j=a('<input type="radio" id="option-'+n.value+'" name="menu-options" value="'+n.value+'"/>');
if(n.selected){j.prop("checked",true)}var k=a('<label for="option-'+n.value+'">'+n.label+"</label>");
g(j,k)});i.append(e)}var f=a('<a href="#" class="button float-r" id="menu-go">Go</a>');
f.click(d.goHandler);i.append(f);this.append(i);return i}})(jQuery);(function(a){a.fn.createHistoryDropDown=function(){var d=a(".options-menu");
if(d.length>0){d.remove()}var e=a("<div></div>",{"class":"options-menu options-menu-large"});
var c=a('<a class="closeBox float-r" href="#" >x</a>');c.click(function(){e.remove();
return false});e.append(c);var b=a("<div></div>");b.html(a("#entry-history-content-container").html());
e.append(b);this.append(e);return e}})(jQuery);(function(){function I(){var g="{}";
if("userDataBehavior"==P){S.load("jStorage");try{g=S.getAttribute("jStorage")}catch(d){}try{K=S.getAttribute("jStorage_update")
}catch(h){}Q.jStorage=g}p();b();l()}function n(){var c;clearTimeout(i);i=setTimeout(function(){if("localStorage"==P||"globalStorage"==P){c=Q.jStorage_update
}else{if("userDataBehavior"==P){S.load("jStorage");try{c=S.getAttribute("jStorage_update")
}catch(d){}}}if(c&&c!=K){K=c;var g=O.parse(O.stringify(T.__jstorage_meta.CRC32)),m;
I();m=O.parse(O.stringify(T.__jstorage_meta.CRC32));var k,q=[],h=[];for(k in g){g.hasOwnProperty(k)&&(m[k]?g[k]!=m[k]&&"2."==String(g[k]).substr(0,2)&&q.push(k):h.push(k))
}for(k in m){m.hasOwnProperty(k)&&(g[k]||q.push(k))}z(q,"updated");z(h,"deleted")
}},25)}function z(h,g){h=[].concat(h||[]);if("flushed"==g){h=[];for(var r in R){R.hasOwnProperty(r)&&h.push(r)
}g="deleted"}r=0;for(var m=h.length;r<m;r++){if(R[h[r]]){for(var k=0,q=R[h[r]].length;
k<q;k++){R[h[r]][k](h[r],g)}}if(R["*"]){for(k=0,q=R["*"].length;k<q;k++){R["*"][k](h[r],g)
}}}}function j(){var d=(+new Date).toString();if("localStorage"==P||"globalStorage"==P){try{Q.jStorage_update=d
}catch(c){P=!1}}else{"userDataBehavior"==P&&(S.setAttribute("jStorage_update",d),S.save("jStorage"))
}n()}function p(){if(Q.jStorage){try{T=O.parse(String(Q.jStorage))}catch(c){Q.jStorage="{}"
}}else{Q.jStorage="{}"}N=Q.jStorage?String(Q.jStorage).length:0;T.__jstorage_meta||(T.__jstorage_meta={});
T.__jstorage_meta.CRC32||(T.__jstorage_meta.CRC32={})}function f(){if(T.__jstorage_meta.PubSub){for(var g=+new Date-2000,c=0,d=T.__jstorage_meta.PubSub.length;
c<d;c++){if(T.__jstorage_meta.PubSub[c][0]<=g){T.__jstorage_meta.PubSub.splice(c,T.__jstorage_meta.PubSub.length-c);
break}}T.__jstorage_meta.PubSub.length||delete T.__jstorage_meta.PubSub}try{Q.jStorage=O.stringify(T),S&&(S.setAttribute("jStorage",Q.jStorage),S.save("jStorage")),N=Q.jStorage?String(Q.jStorage).length:0
}catch(h){}}function M(c){if("string"!=typeof c&&"number"!=typeof c){throw new TypeError("Key name must be string or numeric")
}if("__jstorage_meta"==c){throw new TypeError("Reserved key name")}return !0}function b(){var k,c,g,s,r=Infinity,m=!1,q=[];
clearTimeout(e);if(T.__jstorage_meta&&"object"==typeof T.__jstorage_meta.TTL){k=+new Date;
g=T.__jstorage_meta.TTL;s=T.__jstorage_meta.CRC32;for(c in g){g.hasOwnProperty(c)&&(g[c]<=k?(delete g[c],delete s[c],delete T[c],m=!0,q.push(c)):g[c]<r&&(r=g[c]))
}Infinity!=r&&(e=setTimeout(b,r-k));m&&(f(),j(),z(q,"deleted"))}}function l(){var k;
if(T.__jstorage_meta.PubSub){var c,g=L;for(k=T.__jstorage_meta.PubSub.length-1;0<=k;
k--){if(c=T.__jstorage_meta.PubSub[k],c[0]>L){var g=c[0],s=c[1];c=c[2];if(o[s]){for(var r=0,m=o[s].length;
r<m;r++){try{o[s][r](s,O.parse(O.stringify(c)))}catch(q){}}}}}L=g}}var a=window.jQuery||window.$||(window.$={}),O={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&function(c){return String(c).evalJSON()
}||a.parseJSON||a.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||a.toJSON};
if(!("parse" in O&&"stringify" in O)){throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page")
}var T={__jstorage_meta:{CRC32:{}}},Q={jStorage:"{}"},S=null,N=0,P=!1,R={},i=!1,K=0,o={},L=+new Date,e,J={isXML:function(c){return(c=(c?c.ownerDocument||c:0).documentElement)?"HTML"!==c.nodeName:!1
},encode:function(g){if(!this.isXML(g)){return !1}try{return(new XMLSerializer).serializeToString(g)
}catch(d){try{return g.xml}catch(h){}}return !1},decode:function(d){var c="DOMParser" in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(h){var g=new ActiveXObject("Microsoft.XMLDOM");
g.async="false";g.loadXML(h);return g};if(!c){return !1}d=c.call("DOMParser" in window&&new DOMParser||window,d,"text/xml");
return this.isXML(d)?d:!1}};a.jStorage={version:"0.4.8",set:function(w,v,u){M(w);
u=u||{};if("undefined"==typeof v){return this.deleteKey(w),v}if(J.isXML(v)){v={_is_xml:!0,xml:J.encode(v)}
}else{if("function"==typeof v){return}v&&"object"==typeof v&&(v=O.parse(O.stringify(v)))
}T[w]=v;for(var q=T.__jstorage_meta.CRC32,t=O.stringify(v),m=t.length,s=2538058380^m,r=0,c;
4<=m;){c=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,c=1540483477*(c&65535)+((1540483477*(c>>>16)&65535)<<16),c^=c>>>24,c=1540483477*(c&65535)+((1540483477*(c>>>16)&65535)<<16),s=1540483477*(s&65535)+((1540483477*(s>>>16)&65535)<<16)^c,m-=4,++r
}switch(m){case 3:s^=(t.charCodeAt(r+2)&255)<<16;case 2:s^=(t.charCodeAt(r+1)&255)<<8;
case 1:s^=t.charCodeAt(r)&255,s=1540483477*(s&65535)+((1540483477*(s>>>16)&65535)<<16)
}s^=s>>>13;s=1540483477*(s&65535)+((1540483477*(s>>>16)&65535)<<16);q[w]="2."+((s^s>>>15)>>>0);
this.setTTL(w,u.TTL||0);z(w,"updated");return v},get:function(d,c){M(d);return d in T?T[d]&&"object"==typeof T[d]&&T[d]._is_xml?J.decode(T[d].xml):T[d]:"undefined"==typeof c?null:c
},deleteKey:function(c){M(c);return c in T?(delete T[c],"object"==typeof T.__jstorage_meta.TTL&&c in T.__jstorage_meta.TTL&&delete T.__jstorage_meta.TTL[c],delete T.__jstorage_meta.CRC32[c],f(),j(),z(c,"deleted"),!0):!1
},setTTL:function(g,c){var h=+new Date;M(g);c=Number(c)||0;return g in T?(T.__jstorage_meta.TTL||(T.__jstorage_meta.TTL={}),0<c?T.__jstorage_meta.TTL[g]=h+c:delete T.__jstorage_meta.TTL[g],f(),b(),j(),!0):!1
},getTTL:function(d){var c=+new Date;M(d);return d in T&&T.__jstorage_meta.TTL&&T.__jstorage_meta.TTL[d]?(d=T.__jstorage_meta.TTL[d]-c)||0:0
},flush:function(){T={__jstorage_meta:{CRC32:{}}};f();j();z(null,"flushed");return !0
},storageObj:function(){function c(){}c.prototype=T;return new c},index:function(){var d=[],c;
for(c in T){T.hasOwnProperty(c)&&"__jstorage_meta"!=c&&d.push(c)}return d},storageSize:function(){return N
},currentBackend:function(){return P},storageAvailable:function(){return !!P},listenKeyChange:function(d,c){M(d);
R[d]||(R[d]=[]);R[d].push(c)},stopListening:function(g,d){M(g);if(R[g]){if(d){for(var h=R[g].length-1;
0<=h;h--){R[g][h]==d&&R[g].splice(h,1)}}else{delete R[g]}}},subscribe:function(d,c){d=(d||"").toString();
if(!d){throw new TypeError("Channel not defined")}o[d]||(o[d]=[]);o[d].push(c)},publish:function(d,c){d=(d||"").toString();
if(!d){throw new TypeError("Channel not defined")}T.__jstorage_meta||(T.__jstorage_meta={});
T.__jstorage_meta.PubSub||(T.__jstorage_meta.PubSub=[]);T.__jstorage_meta.PubSub.unshift([+new Date,d,c]);
f();j()},reInit:function(){I()},noConflict:function(c){delete window.$.jStorage;c&&(window.jStorage=this);
return this}};(function(){var k=!1;if("localStorage" in window){try{window.localStorage.setItem("_tmptest","tmpval"),k=!0,window.localStorage.removeItem("_tmptest")
}catch(h){}}if(k){try{window.localStorage&&(Q=window.localStorage,P="localStorage",K=Q.jStorage_update)
}catch(t){}}else{if("globalStorage" in window){try{window.globalStorage&&(Q="localhost"==window.location.hostname?window.globalStorage["localhost.localdomain"]:window.globalStorage[window.location.hostname],P="globalStorage",K=Q.jStorage_update)
}catch(q){}}else{if(S=document.createElement("link"),S.addBehavior){S.style.behavior="url(#default#userData)";
document.getElementsByTagName("head")[0].appendChild(S);try{S.load("jStorage")}catch(s){S.setAttribute("jStorage","{}"),S.save("jStorage"),S.load("jStorage")
}k="{}";try{k=S.getAttribute("jStorage")}catch(d){}try{K=S.getAttribute("jStorage_update")
}catch(r){}Q.jStorage=k;P="userDataBehavior"}else{S=null;return}}}p();b();"localStorage"==P||"globalStorage"==P?"addEventListener" in window?window.addEventListener("storage",n,!1):document.attachEvent("onstorage",n):"userDataBehavior"==P&&setInterval(n,1000);
l();"addEventListener" in window&&window.addEventListener("pageshow",function(c){c.persisted&&n()
},!1)})()})();(function(a,b){a.widget("ui.fixedsortable",a.ui.sortable,{options:a.extend({},a.ui.sortable.prototype.options,{fixed:[]}),_create:function(){var h=this.options;
this.containerCache={};this.element.addClass("ui-sortable");a.ui.sortable.prototype.refresh.apply(this,arguments);
if(typeof this.options.fixed=="number"){var f=this.options.fixed;this.options.fixed=[f]
}else{if(typeof this.options.fixed=="string"||typeof this.options.fixed=="object"){if(this.options.fixed.constructor!=Array){var e=this.options.fixed;
var g=[];var d=a(this.element[0]).find(e);var c=this;d.each(function(){var j;for(j=0;
j<c.items.length&&c.items[j].item.get(0)!=this;++j){}if(j<c.items.length){g.push(j)
}});this.options.fixed=g}}}this.floating=this.items.length?h.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;
this.offset=this.element.offset();a.ui.sortable.prototype._mouseInit.apply(this,arguments)
},_mouseCapture:function(c){this._fixPrev=this._returnItems();return a.ui.sortable.prototype._mouseCapture.apply(this,arguments)
},_mouseStart:function(g){for(var e=0;e<this.options.fixed.length;++e){var d=this.options.fixed[e];
var f=this.items[d];var c=a(f.item.get(0));if(c.is(g.target)||c.has(g.target).length!==0){return false
}}return a.ui.sortable.prototype._mouseStart.apply(this,arguments)},_rearrange:function(h,g,d,f){d?d[0].appendChild(this.placeholder[0]):g.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?g.item[0]:g.item[0].nextSibling));
this._refix(g);this.counter=this.counter?++this.counter:1;var e=this,c=this.counter;
window.setTimeout(function(){if(c==e.counter){e.refreshPositions(!f)}},0)},_refix:function(p){var h=this._fixPrev;
var t=this._returnItems();var g=this.options.fixed;var n=[];var f=[];var o=[];var r=[];
for(var m=0;m<g.length;++m){var e=g[m];var c=h[e];var l=0;for(l=0;l<t.length&&t[l].item.get(0)!=c.item.get(0);
++l){}t.splice(l,1);f.push(c)}for(var m=0;m<t.length;++m){if(t[m].item.get(0)!=this.currentItem.get(0)){n.push(t[m])
}}var d=0;var s=0;for(var m=0;m<f.length+n.length;++m){if(g.indexOf(m)>=0){o.push(f[d++])
}else{o.push(n[s++])}}var q=this.currentItem.get(0).parentNode;var k=q.children;for(var m=0;
m<o.length;++m){q.removeChild(o[m].item.get(0));q.appendChild(o[m].item.get(0))}},_returnItems:function(c){this.containers=[this];
var k=[];var q=this;var g=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{item:this.currentItem}):a(this.options.items,this.element),this]];
var m=a.ui.sortable.prototype._connectWith.apply;if(m){for(var f=m.length-1;f>=0;
f--){var n=a(m[f]);for(var e=n.length-1;e>=0;e--){var h=a.data(n[e],"sortable");if(h&&h!=this&&!h.options.disabled){g.push([a.isFunction(h.options.items)?h.options.items.call(h.element[0],c,{item:this.currentItem}):a(h.options.items,h.element),h]);
this.containers.push(h)}}}}for(var f=g.length-1;f>=0;f--){var l=g[f][1];var d=g[f][0];
for(var e=0,o=d.length;e<o;e++){var p=a(d[e]);p.data("sortable-item",l);k.push({item:p,instance:l,width:0,height:0,left:0,top:0})
}}return k},value:function(c){a.ui.sortable.prototype.value.apply(this,arguments)
}})})(jQuery);jQuery.download=function(b,c){if(b&&c){var a="";jQuery.each(c,function(d,e){a+='<input type="hidden" name=\''+d+"' value='"+e+"' />"
});jQuery('<form action="'+b+'" method="post">'+a+"</form>").appendTo("body").submit().remove()
}};String.prototype.trim=function(){return this.replace(/^\s\s*/,"").replace(/\s\s*$/,"")
};String.prototype.ltrim=function(){return this.replace(/^\s+/,"")};String.prototype.rtrim=function(){return this.replace(/\s+$/,"")
};String.prototype.replaceAll=function(b,a){return this.replace(new RegExp(b,"g"),a)
};String.prototype.startsWith=function(a){return(this.indexOf(a)==0)};String.prototype.endsWith=function(a){return(this.indexOf(a)===(a.length-1))
};function Utils(){this.newElement=function(){if(arguments.length===0){return}var a=arguments[2]||{};
var c=arguments[3]||"";var b=jQuery("<"+arguments[0]+">"+c+"</"+arguments[0]+">");
for(att in a){b.attr(att,a[att])}if(arguments[1]&&arguments[1]!==null){arguments[1].append(b)
}return b};this.insertAfter=function(){if(arguments.length===0){return}var a=arguments[2]||{};
var c=arguments[3]||"";var b=jQuery("<"+arguments[0]+">"+c+"</"+arguments[0]+">");
for(att in a){b.attr(att,a[att])}if(arguments[1]&&arguments[1]!==null){b.insertAfter(arguments[1])
}return b};this.insertBefore=function(){if(arguments.length===0){return}var a=arguments[2]||{};
var c=arguments[3]||"";var b=jQuery("<"+arguments[0]+">"+c+"</"+arguments[0]+">");
for(att in a){b.attr(att,a[att])}if(arguments[1]&&arguments[1]!==null){b.insertBefore(arguments[1])
}return b};this.estimateSize=function(e,c){var h=e.avg*e.cf;var b=Math.pow(h,2);var h=(Math.round(Math.round(h*b)/b));
c=c.toString();var j=parseInt(c.charAt(0));h=(h*(j<9?(j+1):j)).toString();var a=c.length-1+h.split(".")[0].length;
var f="";if(a>9){a=a-9;f=" GB"}else{if(a>6){a=a-6;f=" MB"}else{if(a>3){a=a-3;f=" KB"
}else{f=" B"}}}var g="";for(var d=0;d<h.length;d++){if(d==(a)){g=g+"."}g=g+h.charAt(d)
}return parseInt(g)+f}}var attachArrowKeyListerner=function(){var b=$(window);var a=function(d){var c=d.offset().top-b.scrollTop();
if(c<0||c>b.height()){b.scrollTop(d.offset().top-20)}};$(document).keypress(function(e){if($("#query-builder-container").is(":visible")||$("input:focus").length>0){return
}var c=$(".selected-row");if(e.keyCode==38){var g=c.prev("tr");if(g.length>0&&g.attr("id")!="selectAllStatus"){c.removeClass("selected-row");
g.addClass("selected-row");a(g)}e.preventDefault()}else{if(e.keyCode==40){var d=c.next("tr");
if(d.length>0){c.removeClass("selected-row");d.addClass("selected-row");a(d)}e.preventDefault()
}else{if(e.keyCode==10||e.keyCode==13){if(!c.hasClass("noEnter")){window.location.href=c.attr("id");
e.preventDefault()}}else{if(e.which==32){var f=c.find("input[type=checkbox]");f.click();
e.preventDefault()}}}}})};var Basket=(function(){var j=["uniprot","uniref","uniparc"];
function m(){this.updateBasketUI=__bind(this.updateBasketUI,this);this.addItemsTobasket=__bind(this.addItemsTobasket,this);
this.removeFromBasket=__bind(this.removeFromBasket,this);this.init=__bind(this.init,this);
this.getTotalBasketSize=__bind(this.getTotalBasketSize,this);this.clearNamespace=__bind(this.clearNamespace,this)
}m.prototype.clearNamespace=function(s){var t=$.jStorage.get(s);if(t!==null){$.jStorage.deleteKey(s)
}this.updateBasketUI();var r=this};m.prototype.closingduration=6000;var d=function(r){r=r||1000;
$("#basket-list").removeClass("open").addClass("closed");$("#basket-contents").hide()
};m.prototype.removeFromBasket=function(u,s){var t=$.jStorage.get(s);if(t===null){return
}t=t.split(",");var r=t.indexOf(u);if(r!=-1){t.splice(r,1)}if(t.length>0){$.jStorage.set(s,t.join(","))
}else{$.jStorage.deleteKey(s)}this.updateBasketUI()};m.prototype.init=function(){if($("#basket").is(":visible")){this.updateBasketUI();
p.call(this)}};var q=function(){$("td.removeFromBasketCell span.remove").click(function(s){var r=$("#filledBasketContents a.tab-current").attr("class").split(" ")[0];
uniprot.basket.removeFromBasket($(this).attr("class").split(" ")[1],r);$(this).closest("tr.basketRow").remove();
return false})};m.prototype.updateBasketUI=function(){e.call(this);i.call(this);c.call(this);
o.call(this);if(this.getTotalBasketSize()===0&&$("#basket-contents").is(":visible")){$("#filledBasketContents").hide();
$("#emptyBasketContent").show();$("#basket-actions").hide()}else{if($("#basket-contents").is(":visible")){n.call(this);
q.call(this);$("#basket-actions").show();k.call(this)}}};var c=function(){var r=$(".homepage").length>0?"":uniprot.namespace;
switch(r){case"uniprot":case"uniref":case"uniparc":break;default:if($.jStorage.get("uniprot")!==null){r="uniprot"
}else{if($.jStorage.get("uniref")!==null){r="uniref"}else{if($.jStorage.get("uniparc")!==null){r="uniparc"
}else{r="uniprot"}}}break}new TabUI("#filledBasketContents",r,{fn:function(s){o.call(this)
},context:uniprot.basket})};m.prototype.addItemsTobasket=function(t,r){var s=$.jStorage.get(r);
s=(s===null?[]:s.split(","));$.each(t,function(u,v){if(s.indexOf(v)===-1){s.push(v)
}});if(s.length>0){$.jStorage.set(r,s.join(","))}this.updateBasketUI()};var p=function(){$("a#add-basket-button").click(l);
$("#basket-list").click(f);g.call(uniprot.basket)};var n=function(){$("#filledBasketContents").hide();
$("#emptyBasketContent").hide();var r=$("#loadingBasketContent");r.show();$.each(j,function(s,u){var t=$.jStorage.get(u);
if(t!=null){$.ajax({type:"POST",url:"/basket/"+u+"/",async:false,data:{query:t,format:"frag"}}).done(function(v){$("#basket-"+u).html(v)
})}});r.hide();$("#filledBasketContents").show()};var f=function(){var r=$(this);
var s=r.hasClass("basket-empty");if(r.hasClass("closed")){r.removeClass("closed").addClass("open");
$("#basket-contents").css("top",r.position().top+32);$("#basket-contents").toggle();
if(!s){n.call(uniprot.basket);q.call(this);k.call(this);$("#basket-actions").show()
}else{$("#filledBasketContents").hide();$("#emptyBasketContent").show();$("#basket-actions").hide()
}}else{if(r.hasClass("open")){r.removeClass("open").addClass("closed");$("#basket-contents").hide()
}}return false};var k=function(){$(".inbasket-item").change($.proxy(function(){var s=$(".inbasket-item:visible");
var r=s.filter(":checked").length;var t=s.length===r;$(".inbasket-all:visible").prop("checked",t);
o.call(this)},this));$(".inbasket-all").change($.proxy(function(t){var r=$(t.target);
var u=r.prop("checked");var s=r.attr("class").split(" ")[1].split(":")[1];$("#basket-"+s+" input.inbasket-item").prop("checked",u).trigger("change")
},this))};var g=function(){$("div#basket-actions a.clear").click(function(){if($(this).hasClass("disabled")){return false
}var v=$("div#filledBasketContents li a.tab-current");var w=v.attr("class").split(" ")[0];
var t=v.html().split(" ")[0];var x=confirm("Are you sure you want to clear all "+t+" entries from your basket?");
if(x){$("#basket-"+w+" tr.basketRow").each(function(){$(this).remove()});uniprot.basket.clearNamespace(w);
var u=$(".options-menu");if(u.length>0){u.trigger("closeBasket")}}else{}return false
});$("div#basket-actions a#basket-view-button").click(function(v){if($(this).hasClass("disabled")){return
}var u=$("#filledBasketContents a.tab-current").attr("class").split(" ")[0];var x="",w="";
if("uniprot"===u){x="ACC+ID";w="ACC"}else{if("uniref"===u){x="NF50";w="NF50"}else{if("uniparc"===u){x="UPARC";
w="UPARC"}else{return}}}var t=$("#basket-table-"+u+" input.inbasket-item:checked");
if(t.length==0){t=$("#basket-table-"+u+" input.inbasket-item")}t=t.map(function(y,z){var A=$(z).attr("id").split("checkboxInBasket_")[1];
return A});if(t.length>0){$.post("/uploadlists/",{format:"job",from:x,to:w,landingPage:false,uploadQuery:t.get().join(" ")}).done(function(y){$.get("/jobs/"+y+".stat").done(function(z){if(z==="COMPLETED"){window.location.href="/"+u+"/?query=job:"+y
}})})}return false});$("#closeBasket").click(function(){$("#basket-contents").hide();
var u=$("#basket-list");if(u.hasClass("open")){u.removeClass("open").addClass("closed")
}var t=$(".options-menu");if(t.length>0){t.trigger("closeBasket")}return false});
var r=function(){var t={goHandler:function(w){$(".options-menu").hide();var x=$("select#format").val();
uniprot.cookie.save(v+"-results-download",x,v);var v=$("#filledBasketContents a.tab-current").attr("class").split(" ")[0];
var B="",A="";if("uniprot"===v){B="ACC+ID";A="ACC"}else{if("uniref"===v){B="NF50";
A="NF50"}else{if("uniparc"===v){B="UPARC";A="UPARC"}else{return}}}var u=[];if("selected"===$("input:radio[name=menu-options]:checked").val()){$("#basket-"+v+" input.inbasket-item:checked").each(function(C,D){u.push($(D).attr("id").split("checkboxInBasket_")[1])
})}else{u=$.jStorage.get(v).split(",")}var z=$.grep(u,function(D,C){return D.indexOf("[")!=-1
}).length>0;var y=$.grep(u,function(D,C){return D.indexOf("-")!=-1}).length>0;if(u.length>0){$.post("/uploadlists/",{format:"job",from:B,to:A,landingPage:false,uploadQuery:u.join(" ")}).done(function(C){$.get("/jobs/"+C+".stat").done(function(H){if(H==="COMPLETED"){var D=false
}var E=false;if(z||y){switch(x){case"isoform":D=true;case"canonical":x="fasts";E=true;
break;case"list":x="slist";E=true;break}}var G={sort:"yourlist:"+C,desc:"true",force:"true"};
if(E){$.download("/mapping/"+C+"."+x,(D?$.extend(G,{include:"yes"}):{}))}else{switch(x){case"isoform":D=true;
case"canonical":x="fasta";break}var F=$.extend(G,{query:"yourlist:"+C,format:x});
$.download("/"+v+"/?"+$.param((D?$.extend(F,{include:"yes"}):F)),{})}})})}return false
},selectedFormat:function(){var u=$("#filledBasketContents a.tab-current").attr("class").split(" ")[0];
return uniprot.cookie.load(u+"-results-download")}};t.formats=function(){var u=[];
var v=$("#filledBasketContents a.tab-current").attr("class").split(" ")[0];if("uniprot"===v){u=[{value:"canonical",label:"FASTA (canonical)"},{value:"isoform",label:"FASTA (canonical &amp; isoform)"},{value:"tab",label:"Tab-delimited"},{value:"txt",label:"Text"},{value:"xls",label:"Excel"},{value:"gff",label:"GFF"},{value:"xml",label:"XML"}]
}else{if("uniref"==v){u=[{value:"fasta",label:"FASTA (representative)"},{value:"tab",label:"Tab-delimited"},{value:"xls",label:"Excel"},{value:"rdf",label:"RDF/XML"}]
}else{if("uniparc"==v){u=[{value:"fasta",label:"FASTA"},{value:"tab",label:"Tab-delimited"},{value:"xls",label:"Excel"},{value:"xml",label:"XML"},{value:"rdf",label:"RDF/XML"}]
}}}u.push({value:"list",label:"List"});return u};return function(){var v=(function(){var y=$("#filledBasketContents a.tab-current").attr("class").split(" ")[0];
var z=$("span."+y+"-basket-count").html();var x=$("#basket-"+y+" input.inbasket-item:checked").length;
return{total:z,options:{selected:{value:"selected",label:"Download selected",count:x},others:[],all:{label:"Download all",count:z}},getSelectedCount:function(){return $("#basket-"+y+" .inbasket-all").is(":checked")?z:$("#basket-"+y+" .inbasket-item:checked").length
}}})();var u=$.extend({},t,v);var w=$("body").createMenu(u);w.on("closeBasket",function(x){w.remove()
});return w}};$("a#basket-download-button").attachMenu(r());var s=function(){var t={goHandler:function(v){var x=$("input[name=menu-options]:checked").val();
var u=$("#filledBasketContents a.tab-current").attr("class").split(" ")[0];var w=$("#basket-"+u+" .inbasket-item:checked").attr("id").split("checkboxInBasket_")[1];
if("default"===x){$("#blastQuery").val(w);$("#blastForm").submit();return false}else{if("advanced"===x){$("#clonedBlastForm").remove();
var y=$("#blastForm").clone();y.attr("id","clonedBlastForm");y.find("input[name=landingPage]").val("yes");
y.find("#blastQuery").val(w);$("body").append(y);y.submit();return false}else{return false
}}}};return function(){return $("body").createBlastDropDown(t)}};$("div#basket-actions a#basket-blast-button").attachMenu(s());
$("div#basket-actions a#basket-align-button").click(function(u){var t=$("#filledBasketContents a.tab-current").attr("class").split(" ")[0];
if(!$(this).hasClass("disabled")){var v="";$("#basket-"+t+" input.inbasket-item:checked").each(function(w,x){v=v+"\n"+$(x).attr("id").split("checkboxInBasket_")[1]
});$("#basket-alignQuery").val(v.trim());$("#basket-alignForm").submit()}return false
})};var a=function(s,r){var t=s.length;if(t==0){if(r){t=uniprot.resultSize}else{t=$(".basket-item:checked").length
}}return t};var b=function(w,v,t){var r=this.getTotalBasketSize();if(r<400){var s=400-r;
var u=true;if(w>=s){u=confirm("The basket can hold a maximum of 400 entries. "+s+" more entries can be added. Please refine your selection.")
}if(u){v.call(this)}else{t.call(this)}}else{alert("Basket is already full. Delete some entries from your basket to be able to add new ones.")
}};var l=function(){if($(this).hasClass("disabled")){return false}var r=$("#selectAll-resultSet").is(":checked");
var s=$("input#entry_id");var t=function(){var w=$(".page-title").html();var y=(w==="Align"||w==="Blast")&&uniprot.jobid!=="";
if(r){if(y){var x="job:"+uniprot.jobid;var u=["uniprot","uniref","uniparc"];$.each(u,function(z,A){$.ajax({url:BASE+A+"/?query="+x+"&format=list&limit=400"}).done(function(C){var B=C.trim().split("\n");
if(B.length>0){uniprot.basket.addItemsTobasket(B,A)}})})}else{var x=encodeURIComponent($("#query").val());
$.ajax({url:BASE+uniprot.namespace+"/?query="+x+"&format=list&limit=400"}).done(function(A){var z=A.trim().split("\n");
uniprot.basket.addItemsTobasket(z,uniprot.namespace)})}}else{var v=uniprot.namespace;
var u={uniprot:[],uniref:[],uniparc:[]};if(s.length!==0){u[v].push(s.val())}else{$(".basket-item:checked").each(function(){var A=$(this);
var z=(/namespace:(.+)/g.exec(A.attr("class")));if(z[1]){var B=$(this).attr("id").split("_");
B.splice(0,1);u[z[1]].push(B.join("_"))}})}$.each(u,function(z,A){if(A.length>0){uniprot.basket.addItemsTobasket(A,z)
}})}};b.call(uniprot.basket,a.call(uniprot.basket,s,r),t,function(){});return false
};m.prototype.getTotalBasketSize=function(){var r=0;$.each(j,function(s,t){var u=$.jStorage.get(t);
if(u!=null){r=r+u.split(",").length}});return r};var e=function(){var r=this.getTotalBasketSize();
var s=$("#basket-list");if(r===0&&!(s.hasClass("basket-empty"))){s.addClass("basket-empty")
}else{if(r!==0){s.removeClass("basket-empty")}}var t=$("#basket-count");if(r===0){t.hide();
return}if(t.html()!==r.toString()){t.html(r.toString())}if(t.is(":hidden")){t.show()
}$.each(j,function(u,v){var x=$.jStorage.get(v);var w=(x===null||w==="")?0:x.split(",").length;
$("."+v+"-basket-count").html(w.toString().trim())})};var i=function(){if($("input#entry_id").length===1){var s=$("tr.feature_row");
s.find("td.icon_inbasket").removeClass("icon_inbasket");s.find("a.subsequences").removeClass("disabled");
var r=$.jStorage.get("uniprot");if(r!=null){r=$.grep(r.split(","),function(u,t){return u.indexOf("[")!=-1
});r=$.map(r,function(u,t){return u.replaceAll("\\[","_").replaceAll("\\]","_")});
$.each(r,function(t,u){var v=$("a#"+u);if(v.length>0){v.addClass("disabled");var w=v.closest("tr").find("td")[0];
w=$(w);w.addClass("icon_inbasket")}})}}else{$("#results tr td.entryID.icon_inbasket").removeClass("icon_inbasket");
$.each(j,function(t,u){var v=$.jStorage.get(u);if(v!=null){$("#results tr").filter(function(w){var x=$(this);
return v.indexOf(x.attr("id"))!=-1}).each(function(w,x){$(x).find("td.entryID").addClass("icon_inbasket")
})}})}};var h=function(){var r=$("div#filledBasketContents li a.tab-current");return r.attr("class").split(" ")[0]
};var o=function(){var u=h.call(this);var t=$.jStorage.get(u);var s=(t===null)?0:t.split(",").length;
if(s===0){$("div#basket-actions a#basket-align-button").addClass("disabled");$("div#basket-actions a#basket-blast-button").addClass("disabled");
$("div#basket-actions a.clear").addClass("disabled");$("div#basket-actions a#basket-download-button").addClass("disabled");
$("div#basket-actions a#basket-view-button").addClass("disabled")}else{if(s>0){$("div#basket-actions a.clear").removeClass("disabled");
$("div#basket-actions a#basket-download-button").removeClass("disabled");$("div#basket-actions a#basket-view-button").removeClass("disabled");
var r=$("#basket-"+u+" input.inbasket-item:checked").length;if(r===0){$("div#basket-actions a#basket-align-button").addClass("disabled");
$("div#basket-actions a#basket-blast-button").addClass("disabled")}else{if(r===1){$("div#basket-actions a#basket-align-button").addClass("disabled");
$("div#basket-actions a#basket-blast-button").removeClass("disabled")}else{if(r>1){$("div#basket-actions a#basket-align-button").removeClass("disabled");
$("div#basket-actions a#basket-blast-button").addClass("disabled")}}}}}};return m
})();$(document).ready(function(){$("#query").keyup(function(){$("#searchBoxIndicator1").hide();
$("#searchBoxIndicator2").hide();$("#searchBoxIndicator3").hide()})});function searchbar(){function e(){$(".filterList").html("");
var f=uniprot.advSearchUI.renderAdvSearch(uniprot.namespace);if(!f){alert("Advanced search for "+uniprot.namespace+" has not yet been implemented")
}}var c=function(){$("#query-builder-container").keypress(function(g){if(g.which==10||g.which==13){var f=$(".ui-autocomplete");
if(f.is(":visible")){f.hide()}$(".advSearchButton").click();return false}})};var d=function(){$("#advanced-search-toggle").click(function(){e();
$("#searchBoxIndicator1").hide();$("#searchBoxIndicator2").hide();$("#searchBoxIndicator3").hide();
return false});$("#search-button").click(function(){uniprot.cookie.save_tmp("allSelected",false,uniprot.namespace);
$("input[name=reviewedFilter]").attr("value","");$("input[name=organismFilter]").attr("value","");
var f=$("#search-form");f.attr("action","/"+uniprot.namespace+"/");$("#search-form").submit()
});$("#namespaces-select-box").click(function(){dropdown($("#namespaces-select-box"))
});$("#query").focusout(function(g){var f=$("#clear-query.active");if(f.length==1&&$(this).val().length==0){f.removeClass("active")
}})};var a=function(){$("#clear-query").click(function(g){var f=$(this);if(f.hasClass("active")){f.removeClass("active");
$("#query").val("")}return false});if($("#query").val().trim()!==""){$("#clear-query").addClass("active")
}};var b=function(){$("#query").focus(function(){$(this).data("safeEnter_InAutocomplete",false)
});$("#query").keypress(function(h){var g=(h.keyCode?h.keyCode:h.which);switch(g){case 40:case 38:case 34:case 33:$(this).data("safeEnter_InAutocomplete",true);
break;case 10:case 13:if(!$(this).data("safeEnter_InAutocomplete")){$("#search-button").trigger("click");
return false}else{$(this).data("safeEnter_InAutocomplete",false)}break;default:if($(this).val().trim()!==""){var f=$("#clear-query");
if(!f.hasClass("active")){f.addClass("active")}}}})};this.init=function(){b();c();
a();d()}}var setUnSetActionButtons=function(){var e=function(f){if(f===0){$("#add-basket-button").addClass("disabled")
}else{$("#add-basket-button").removeClass("disabled")}};var c=function(f){if(f===0){$("#align-button").addClass("disabled")
}else{if(f===1){$("#align-button").addClass("disabled")}else{if(f>1){$("#align-button").removeClass("disabled")
}}}};var b=function(f){if(f===0){$("#blast-button").addClass("disabled")}else{if(f===1){$("#blast-button").removeClass("disabled")
}else{if(f>1){$("#blast-button").addClass("disabled")}}}};var a=function(){if($("#download-options").is(":visible")){var f=$("input[name=download-options1]:radio");
f.removeAttr("checked");f.filter("[value=download-SelectedOnly]").prop("checked",true);
f.change()}};var d=$(".basket-item:checked").length;if($("#blast-button").length===1){b(d)
}if($("#align-button").length===1){c(d)}if($("#download-button").length===1){a()}if($("#add-basket-button").length===1){e(d)
}};var multiSelect=(function(){var a=null;function b(){this.shiftPressed=false;this.multipleSelect=__bind(this.multipleSelect,this)
}b.prototype.multipleSelect=function(e,c){if(!c.checked){shiftPressed=false;return
}if(a===null){a=e}else{var d=false;$(".basket-item").each(function(f,g){g=$(g);var h=g.attr("id").split("_")[1];
if(h===e||h===a){if(d){return false}else{d=true}}else{if(d){g.prop("checked",true)
}}});a=null}};return b})();var results=(function(){function a(){this.init=__bind(this.init,this)
}a.prototype.init=function(d,f,e){b.call(this);LoadingSuggestions();c.call(this,d,f,e)
};var c=function(d,f,e){d=d||0;var g=function(){var h={total:d,options:{selected:{value:"selected",label:"Download selected",count:0},others:[],all:{label:"Download all",count:d}},selectedFormat:function(){return uniprot.cookie.load(uniprot.namespace+"-results-download")
}};h.goHandler=function(k){$(".options-menu").hide();var n=$("#yourlistHeader");var p=true;
var r=$("select#format").val();if("uniprot"===uniprot.namespace&&n.length>0&&"fasts"===r){var i=uniprot.qParser.parse().constraints;
var l=$(n[0]).find("strong").html();var m=$.grep($.map(i,function(t,s){var q=/yourlist:(.+)/.exec(t);
if(q!=null&&q.length==2){return q[1]}else{return""}}),function(s,q){return""!=s&&s.length>6&&(new RegExp(s.substring(s.length-6,s.length-1)+"$","g")).test(l)
});if(m.length>0){var o=$("input:radio[name=menu-options]:checked").val();var j="selected"===o?(function(){var q=[];
$(".basket-item:checked").each(function(s,t){q.push("id:"+$(t).attr("id").split("checkbox_")[1])
});return q.join(" OR ")})():$("#query").val();$.download("/mapping/"+m[0]+".fasts",{query:j,sort:uniprot.sort,desc:uniprot.desc});
p=false}}if(p){downloadResultEntries(f)}return false};h.formats=[];if("uniprot"===uniprot.namespace){h.formats=[{value:"canonical",label:"FASTA (canonical)"},{value:"isoform",label:"FASTA (canonical &amp; isoform)"},{value:"tab",label:"Tab-delimited"},{value:"txt",label:"Text"},{value:"xls",label:"Excel"},{value:"gff",label:"GFF"},{value:"xml",label:"XML"}];
if(e){h.formats.push({value:"mappingTable",label:"Mapping Table"});if(uniprot.hasSubSequences){h.formats.splice(2,0,{value:"fasts",label:"FASTA (source list)"})
}}}else{if("uniref"==uniprot.namespace){h.formats=[{value:"fasta",label:"FASTA (representative)"},{value:"tab",label:"Tab-delimited"},{value:"xls",label:"Excel"}];
if(e){h.formats.push({value:"mappingTable",label:"Mapping Table"})}}else{if("uniparc"==uniprot.namespace){h.formats=[{value:"fasta",label:"FASTA"},{value:"tab",label:"Tab-delimited"},{value:"xls",label:"Excel"},{value:"xml",label:"XML"}];
if(e){h.formats.push({value:"mappingTable",label:"Mapping Table"})}}else{if("citations"==uniprot.namespace||"taxonomy"==uniprot.namespace){h.formats=[{value:"tab",label:"Tab-delimited"},{value:"xls",label:"Excel"}]
}else{if("keywords"==uniprot.namespace||"locations"==uniprot.namespace||"diseases"==uniprot.namespace){h.formats=[{value:"tab",label:"Tab-delimited"},{value:"xls",label:"Excel"},{value:"obo",label:"OBO"}]
}else{if("proteomes"===uniprot.namespace){h.formats=[{value:"tab",label:"Tab-delimited"},{value:"xls",label:"Excel"}]
}}}}}}h.formats.push({value:"rdf",label:"RDF/XML"});if("database"!==uniprot.namespace){if(e){h.formats.push({value:"list",label:"Target List"})
}else{h.formats.push({value:"list",label:"List"})}}return function(){return $("body").createMenu(h)
}};$("#download-button").attachMenu(g())};var b=function(){$("#customizeColumns").click(function(e){e.stopPropagation()
});var d=function(){var e={goHandler:function(f){var h=$("input[name=menu-options]:checked").val();
if("default"===h){var g=$(".basket-item:checked").attr("id").split("checkbox_")[1];
$("#blastQuery").val(g);$("#blastForm").submit();return false}else{if("advanced"===h){return uniprot.blast.checkSelectionsAndSubmit()
}else{return false}}}};return function(){return $("body").createBlastDropDown(e)}
};$("#blast-button").attachMenu(d());$("a#align-button").click(function(){if(!$(this).hasClass("disabled")){var e="";
$(".basket-item:checked").each(function(f,g){e=e+$(g).attr("id").split("checkbox_")[1]+"\n"
});$("#alignQuery").val(e);$("#alignForm").submit()}return false})};return a})();
$(document).ready(function(){$("li#parentClickEvent").click(function(){window.location=$(this).find("a").first().attr("href");
return false})});var uniprotResults=(function(){function b(){var d=$("#query").val();
var e=$("#orgName");if(e.length==1){a(e)}this.initializeTree(d);$("#query_viewBy").keypress(function(h){var g=(h.keyCode?h.keyCode:h.which);
switch(g){case 10:case 13:var i=$(this).val().trim();if(""!=i){var j=/\[(.+)\]/.exec(i);
if(j.length===2){var f=$(".TreeView:visible").attr("id");if(c[f]){c[f].reRender(j[1])
}}}return false;break;default:break}});this.addViewBy()}var c={TaxTreeView:"",KeywordTreeView:"",GoTreeView:"",EnzymeTreeView:"",PathwaysTreeView:""};
var a=function(d){d.autocomplete({minLength:"3",source:"/filterhints/taxonomy/?format=json&limit=100&sort=score&service=uniprot&query="+$("#query").val(),urlfunction:function(e,f){return e
}});d.on("autocompletesearch",function(e,f){$(this).addClass("autocomplete-loading")
});d.on("autocompleteresponse",function(e,f){$(this).removeClass("autocomplete-loading")
});$("#orgFind").click(function(g){var f=$("#orgName").val();if(""!==f){var h=$.QueryString.query;
h=h||"";var e=$.QueryString.fil||"";if(f.indexOf("[")!=-1&&f.indexOf("]")!=-1){e=e+(""!==e?" AND ":"")+'organism:"'+f+'"'
}else{h=h+(""!==h?" AND ":"")+'organism:"'+f+'"'}window.location.href="/uniprot/?query="+h+(""!==e?("&fil="+e):"")+(uniprot.sort===""?"":("&sort="+uniprot.sort))+(uniprot.desc===""?"":("&desc="+uniprot.desc))
}return false});d.keypress(function(f){var e=(f.keyCode?f.keyCode:f.which);switch(e){case 10:case 13:$("#orgFind").trigger("click");
return false;break;default:break}})};b.prototype.initializeTree=function(e){var g=function(k,m){var l=function(q,p,n){var o="/view/uniprot/by/"+p+"/?query="+k+"&format=json";
if(!q){return o}else{if(n){return"/view/uniprot/by/"+p+"/?query="+k+"&format=json&parent="+q+"&include=true"
}else{return"/view/uniprot/by/"+p+"/?query="+k+"&format=json&parent="+q}}};return function(q,p,r,n){var o=l(r,m,n);
$.getJSON(o,function(s){p.call(q,s)})}};var f=new ViewByChart("TaxViewChart");c.TaxTreeView=new Tree($("#TaxTreeView"),g(e,"taxonomy"),"/uniprot/?query="+e+"+taxonomy:",f);
var j=new ViewByChart("KeywordViewChart");c.KeywordTreeView=new Tree($("#KeywordTreeView"),g(e,"keyword"),"/uniprot/?query="+e+"+keyword:",j);
var i=new ViewByChart("GoViewChart");c.GoTreeView=new Tree($("#GoTreeView"),g(e,"go"),"/uniprot/?query="+e+"+go:",i);
var d=new ViewByChart("EnzymeViewChart");c.EnzymeTreeView=new Tree($("#EnzymeTreeView"),g(e,"ec"),"/uniprot/?query="+e+"+ec:",d);
var h=new ViewByChart("PathwaysViewChart");c.PathwaysTreeView=new Tree($("#PathwaysTreeView"),g(e,"pathway"),"/uniprot/?query="+e+"+pathway:",h)
};b.prototype.addViewBy=function(){function f(){$("#query_viewBy").autocomplete("destroy")
}function i(k){var l=$("#query_viewBy");if(l.is("[autocomplete]")){l.autocomplete("destroy")
}var j=true;switch(k){case"TaxTreeView":l.autocomplete({minLength:"2",source:"/hints/taxonomy/?format=json&limit=100&sort=score&query=",urlfunction:function(m,n){return m+n
}});break;case"KeywordTreeView":l.autocomplete({minLength:"2",source:"/hints/keywords/?format=json&limit=100&sort=score&query=",urlfunction:function(m,n){return m+"name:"+n
}});break;case"GoTreeView":l.autocomplete({minLength:"2",source:"/hints/go/?format=json&limit=100&sort=score&query=",urlfunction:function(m,n){return m+n
}});break;case"EnzymeTreeView":l.autocomplete({minLength:"2",source:"/hints/enzymes/?format=json&limit=10&sort=score&query=",urlfunction:function(m,n){return m+n
}});break;case"PathwaysTreeView":l.autocomplete({minLength:"2",source:"/hints/pathways/?format=json&limit=10&sort=score&query=",urlfunction:function(m,n){return m+n
}});break;default:j=false;break}if(j){l.on("autocompletesearch",function(m,n){$(this).addClass("autocomplete-loading")
});l.on("autocompleteresponse",function(m,n){$(this).removeClass("autocomplete-loading")
})}return}function g(l,n){$(".filterBy").slideUp();$(".redundancy").slideUp();$(".viewBy > h3").css("margin-top","0");
$("html, body").animate({scrollTop:0},"slow");var m=$("#viewByCanvas");i(l);$("ul.TreeView").hide();
$("ul#"+l).show();$("#resultsArea").hide();var k=$("a.viewBy[href=#"+n+"]");$("#vb_namespace").text(k.text()+" view");
m.show();$("span.status").hide();var j=$("#topsuggestions");if(j.length>0){j.hide()
}$("#customize-columns-button").addClass("disabled");c[l].LoadAndShow();$("a.viewBy").off("click");
k.on("click",function(){h();event.preventDefault();return false});return false}function e(){f();
var k=$("#viewByCanvas").hide();$("#resultsArea").show();$("span.status").show();
var j=$("#topsuggestions");if(j.length>0){j.show()}$("#customize-columns-button").removeClass("disabled");
return false}var h=function(){$(".filterBy").slideDown();$(".redundancy").slideDown();
$(".viewBy > h3").css("margin-top","9px");$("ul.viewByList > li.active").removeClass("active");
e();window.location.href=window.location.href.substring(0,window.location.href.indexOf("#"))
};$(window).hashchange(function(){var j=location.hash;if(j!==""){d(j)}else{h()}});
var d=function(l){var m=l.substring("1");var k=$(l);var j=k.closest("li");$("a.viewBy").each(function(n,o){o=$(o);
if(l===o.attr("href")){o.closest("li").addClass("active");$("#viewByGraph").hide();
switch(m){case"orgViewBy":g("TaxTreeView",m);break;case"keyViewBy":g("KeywordTreeView",m);
break;case"goViewBy":g("GoTreeView",m);break;case"enzymesViewBy":g("EnzymeTreeView",m);
break;case"pathwaysViewBy":g("PathwaysTreeView",m);break;default:break}}else{o.closest("li").removeClass("active")
}})};(function(){var k=window.location.hash;var j=$("a.viewBy[href="+k+"]");if(j.length>0&&(k!==""||j.parent("li").hasClass("active"))){d(k)
}})()};return b})();function QueryParser(){var e="°";this.sp=function(h){return d(h)
};var d=function(n){var h=[];var o=false;var p=false;var q=false;var l=0;var m="";
var r="";for(var j=0;j<n.length;j++){var k=n.charAt(j);switch(k){case'"':if(o||p){if(l>0){m=m+k
}else{r=r+k}}else{if(q){l--;m=m+k;if(l==0){h.push(m);m="";q=false}else{}}else{q=true;
m=k;r=r+e;l=1}}break;case"[":if(q||o){if(l>0){m=m+k}else{r=r+k}}else{if(p){l++;m=m+k
}else{p=true;m=k;r=r+e;l=1}}break;case"]":if(q||o){if(l>0){m=m+k}else{r=r+k}}else{if(p){l--;
m=m+k;if(l===0){p=false;h.push(m);m=""}else{}}else{r=r+k}}break;case"(":if(q||p){if(l>0){m=m+k
}else{r=r+k}}else{if(o){l++;m=m+k}else{o=true;m=k;r=r+e;l=1}}break;case")":if(q||p){if(l>0){m=m+k
}else{r=r+k}}else{if(o){l--;m=m+k;if(l===0){o=false;h.push(m);m=""}else{}}else{r=r+k
}}break;default:if(l>0){m=m+k}else{r=r+k}break}}return{append:r,ranges:h}};var c=function(i){var h=i.replaceAll("\\)and","\\) AND");
h=h.replaceAll("\\)or","\\) OR");h=h.replaceAll("\\)not","\\) AND");h=h.replaceAll("and\\(","AND \\(");
h=h.replaceAll("or\\(","OR \\(");h=h.replaceAll("not\\(","NOT \\(");h=h.replaceAll("\\sand\\s"," AND ");
h=h.replaceAll("\\sor\\s"," OR ");h=h.replaceAll("\\snot\\s"," NOT ");h=h.replaceAll("not\\s","NOT ");
h=h.replace(/\s{2,}/g," ");return h};var f=function(o,h){for(var n=0,m=0;n<o.constraints.length;
n++){var q="";for(var l=0;l<o.constraints[n].length;l++){var p=o.constraints[n].charAt(l);
if(e===p){q=q+h.ranges[m];m++}else{q=q+p}}o.constraints[n]=q}};var b=function(m){var j="";
var n="";var h=[];var o=[];for(var k=0;k<m.length;k++){var l=m.substring(k);if(l.startsWith("NOT ")){if(n!==""){h.push(j);
o.push(n);n=""}j="NOT";k=k+3}else{if(l.startsWith(" AND ")){if(n!==""){h.push(j);
o.push(n);n=""}j="AND";k=k+4}else{if(l.startsWith(" OR ")){if(n!==""){h.push(j);o.push(n);
n=""}j="OR";k=k+3}else{if(l.startsWith(" ")){if(n!==""){h.push(j);o.push(n);n=""}j="AND"
}else{n=n+m.charAt(k)}}}}}if(n!==""){h.push(j);o.push(n)}return{operators:h,constraints:o}
};var g=function(h){if(h.charAt(0)==='"'&&h.charAt(h.length-1)==='"'){return h.substring(1,h.length-1)
}return h};var a=function(u,A,r,h,w){var x=d(u);var k=/length:\[(.+)\]/.exec(x.append);
if(k!=null&&k.length===2){var o=k[1].split("TO");x.append=x.append.replace(/length:\[.+\]/,"fromlength:"+o[0].trim()+" tolength:"+o[1].trim())
}var z={content:[]};var p=0;var s=x.append.split(" ");var y="";for(var n=0;n<s.length;
n++){var t=s[n].split(":");if(t.length===2){if(t[1]===e){if(!A&&!r){if(y.length>0){z.content.push(g(y))
}y=g(x.ranges[p])}z[t[0]]=g(x.ranges[p]);p++}else{if(!A&&!r){if(y.length>0){z.content.push(g(y))
}y=g(t[1])}z[t[0]]=g(t[1])}if(y.length!==0){z.content.push(g(y));y=""}}else{if(t[0]===e){y=y+x.ranges[p];
p++}else{y=y+t[0]}}}if(y.length!==0){z.content.push(g(y))}var v=["created","modified","sequence_modified","published"];
for(var n=0;n<v.length;n++){if(z[v[n]]){var j=z[v[n]];var m=/\[(.+) TO (.+)\]/.exec(j);
if(m!=null&&m.length===3){z[v[n]]={fromdate:m[1],todate:m[2]};z.fromdate=m[1];z.todate=m[2]
}}}return z};this.tokenize=function(n){result={isAnnotation:false,isDatabase:false,isCitation:false,isLength:false,isMass:false};
if(n.startsWith("annotation:(")){result.isAnnotation=true;var i=/^annotation:\((.+)\)$/.exec(n);
if(i.length===2){n=i[1]}n=n.replaceAll(" AND "," ")}else{if(n.startsWith("database:(")){result.isDatabase=true;
var i=/^database:\((.+)\)$/.exec(n);if(i.length===2){n=i[1]}n=n.replaceAll(" AND "," ")
}else{if(n.startsWith("citation:(")){result.isCitation=true;var i=/^citation:\((.+)\)$/.exec(n);
if(i.length===2){n=i[1]}n=n.replaceAll(" AND "," ")}}}var j=/length:\[(.+)\]/.exec(n);
var h=/mass:\[(.+)\]/.exec(n);var o=/count:\[(.+)\]/.exec(n);if(j!=null&&j.length===2){range=j[1].split("TO");
n=n.replace(/length:\[.+\]/,"fromlength:"+range[0].trim()+" tolength:"+range[1].trim());
result.isLength=true;result.rangeField="length"}else{if(h!=null&&h.length===2){range=h[1].split("TO");
n=n.replace(/mass:\[.+\]/,"fromlength:"+range[0].trim()+" tolength:"+range[1].trim());
result.isLength=true;result.rangeField="mass"}else{if(o!=null&&o.length===2){range=o[1].split("TO");
n=n.replace(/count:\[.+\]/,"fromlength:"+range[0].trim()+" tolength:"+range[1].trim());
result.isLength=true;result.rangeField="count"}}}var k=a(n,result.isAnnotation,result.isDatabase,result.isCitation,result.isLength);
return $.extend({},k,result)};this.parse=function(){var j=$("#query").val();var h=d.call(this,j);
h.append=c.call(this,h.append);var i=b.call(this,h.append);if(h.append.indexOf(e)!==-1){f(i,h)
}return i}}function AdvSearchUI(m){var s={uniprot:m.adv_uniprot,uniparc:m.adv_uniparc,uniref:m.adv_uniref,proteomes:m.adv_proteomes,keywords:m.adv_keywords,locations:m.adv_locations,database:m.adv_database,taxonomy:m.adv_taxonomy,citations:m.adv_citations,diseases:m.adv_diseases,program:m.adv_program,help:m.adv_help};
this.hideAdvancedSearch=function(){$(".advSearch").hide();a()};this.template=function(t){var u=$(".advSearch");
u.find(".closeAdvanceSearch").click(function(){a();$(".advSearch").hide();return false
});u.find("#namespaceInAdv").html($("#selected-namespace").html());u.find("a.addfilter").click(function(){var v=b($("#dataset").val(),$("li.filter").length,"");
$("ul.filterList").append(v)});u.find("a.advSearchButton").click(function(){q();return false
})};var e=function(u,t){if((t/2)%2==1){u.addClass("colored")}else{u.removeClass("colored")
}};var o=function(t){var u=$(".constraintCol");u.each(function(w,x){x=$(x);if(!x.hasClass("constraintColButtons")){var v=x.children(".logic");
v.html("");l(v,m,w,x.data("operator"));e(x,w)}else{if(x.hasClass("constraintColButtons")){x.html("");
if(u.length>2){x.append(d(t))}if(w===u.length-1){x.append(h(t))}}}})};var h=function(v,u){var t=$('<a href="#" class="circular icon icon-functional button" data-icon="+"/>');
t.click(function(x){var y=b(v,"");var w=$("div.filterList");$.each(y,function(z,A){w.append(A)
});o(v);return false});return t};var d=function(t){var u=jQuery('<a href="#" class="circular deleteCons icon icon-functional button" data-icon="d"/>');
u.click(function(x){var v=u.closest(".constraintCol");var w=v.prev();w.remove();v.remove();
o(t);return false});return u};var g=function(u){var t=["crossref"];if("*"===u){t.push("*");
return t}if(m.get("ensemblDat").selects[u]){t.push("genome-annotationDat");t.push("ensemblDat");
t.push(u);return t}var v=false;$.each(m.get("crossreferences").selects,function(w,y){var x=m.get(w);
if(x&&x.selects&&x.selects[u]){v=true;t.push(w,y);return false}});if(v){return t}return[]
};var b=function(w,y){var t=jQuery('<div class="constraintCol"/>');var v=jQuery('<div class="logic"/>');
v.html("&nbsp;");var u=jQuery('<div class="advSearchFields"/>');u.data("query",y);
var x=uniprot.qParser.tokenize(y);if(x.isAnnotation){if(x.type&&s[w].path&&s[w].path[x.type]){u.data("path",s[w].path[x.type])
}}else{if(x.isDatabase){if(typeof x.type==="undefined"&&x.content.length===1&&"*"===x.content[0]){x.type="*";
x.content=[]}var B=g(x.type);u.data("path",B)}else{if(x.isCitation){u.data("path",["citation"])
}else{if(x.isLength){var z=x.rangeField?(x.rangeField=="length"?"seq-length":x.rangeField):null;
if(z!=null){if(s[w].path&&s[w].path[z]){u.data("path",s[w].path[z])}else{if(s[w].selects[z]){u.data("path",[z])
}}}}else{$.each(x,function(C,D){if(C!=="content"&&s[w].path&&s[w].path[C]){u.data("path",s[w].path[C]);
return false}})}}}}u.data("tokens",x);var A=jQuery('<div class="constraintCol constraintColButtons"/>');
uniprot.builders.dropDownFieldBuilder(s[w],u,{});t.append(v,[u]);return[t,A]};var l=function(w,u,v,x){x=x||"AND";
var t={noChange:"true",noField:"true"};if(v!==0){uniprot.builders.dropDownFieldBuilder(u.get("otherRow"),w,t,x)
}else{w.html("&nbsp;")}};var k=function(t){return uniprot.builders.cancelBuilder(t)
};var f=function(t){return t in s};var a=function(){$("#highlights").trigger("isPaused",function(t){if(!t){$(this).trigger("resume")
}})};this.renderAdvSearch=function(x){$("#highlights").trigger("pause",true);var t=$(".advSearch");
if(t.is(":visible")){$(".advSearch").hide();a();return false}if(!f(x)){return}var w=uniprot.qParser.parse();
var v=[];$.each(w.constraints,function(y,z){var A=b(x,z);A[0].data("operator",w.operators[y]);
v=v.concat(A)});if(v.length===0){v.push(b(x,""))}v.push(b(x,""));var u=$("div.filterList");
$.each(v,function(y,z){u.append(z)});o(x);t.show();return true};var c=function(){$.each($("#filterList div.omega"),function(t,u){u=$(u);
u.attr("style","line-height:"+u.prev().outerHeight()+"px")})};var j=function(u,v){var t="type:"+(v.type?v.type:"*");
if(v.content.length>0&&"*"!==v.content[0]){t=t+" "+v.content[0]}return"database:("+t+")"
};var n=function(t,w){var u=w.type;if(u.startsWith("ann.")){u=u.substring(4)}if(u.indexOf(" ")!==-1){u='"'+u+'"'
}var v=$(t.find("input")[0]);var x=v.val();x=(("Any"===x||""===x)&&"Any"===v.attr("title"))?"":x;
if(w.fromlength){return"annotation:(type:"+u+(x.length>0?(" "+i(x)):"")+(" length:["+w.fromlength+" TO "+w.tolength+"]")+((w.confidence&&w.confidence!="")?(" confidence:"+(w.confidence.indexOf(" ")!=-1?('"'+w.confidence+'"'):w.confidence)):"")+")"
}else{return"annotation:(type:"+u+(x.length>0?(" "+i(x)):"")+((w.confidence&&w.confidence!="")?(" confidence:"+(w.confidence.indexOf(" ")!=-1?('"'+w.confidence+'"'):w.confidence)):"")+")"
}};var p=function(t,v){var u="";$.each(t.find("input"),function(x,y){y=$(y);var z=y.val();
if(""!==z){var w="";var A=y.data("field");if(A){w=y.data("field")+":"}w=w+z;u=u+(u.length>0?" "+w:w)
}});return"citation:("+u+")"};var i=function(t){if(t.indexOf(" ")!=-1){if((t.startsWith("(")&&t.endsWith(")"))||(t.startsWith('"')&&t.endsWith('"'))){return t
}else{return'"'+t+'"'}}return t};var r=function(u){var x="";var y=u.data("tokens");
var w=u.find("select");if(y.isAnnotation){return n(u,y)}else{if(y.isDatabase){return j(u,y)
}else{if(y.isCitation){return p(u,y)}else{if(y.isLength||y.isMass){x=y.rangeField+":";
var t=u.find("input.rangeField");var A=$(t[0]).val();var z=$(t[1]).val();x=x+"["+(A.trim().length===0?"*":A.trim())+" TO "+(z.trim().length===0?"*":z.trim())+"]";
return x}else{if(w.length===2&&"date"===$(w[0]).val()){x=$(w[1]).val()+":";var t=u.find("input.rangeField");
var A=$(t[0]).val().split("-").join("");var z=$(t[1]).val().split("-").join("");x=x+"["+(A.trim().length===0?"*":A.trim())+" TO "+(z.trim().length===0?"*":z.trim())+"]";
return x}else{var t=u.find("input");if(w.length===1&&t.length>0){var x="";$.each(t,function(C,D){D=$(D);
var E=D.val();E=(("Any"===E||""===E)&&"Any"===D.attr("title"))?"*":E;if(E!==""){E=i(E);
var B="";if(D.data("field")){B=D.data("field")+":"}B=B+E;x=x+(x.length>0?" ":"")+B
}});return x}else{if(w.length>1&&t.length===0){var x="";$.each(w,function(C,D){if(C!==0){D=$(D);
var E=D.val();if($.inArray(E,["","fragment","precursor"])===-1&&E.charAt(0)!=="_"){E=i(E);
var B="";if(D.data("field")){B=D.data("field")+":"}B=B+E;x=x+(x.length>0?" ":"")+B
}}});return x}else{var x="";if(t.length>0){$.each(t,function(C,D){D=$(D);var E=D.val();
E=(("Any"===E||""===E)&&"Any"===D.attr("title"))?"*":E;E=i(E);if(E!==""){var B="";
if(D.data("field")){B=D.data("field")+":"}B=B+E;x=x+(x.length>0?" ":"")+B}})}return x
}}return""}}}}}var v=false;li.find("div.field:not(div.cancelBuilder, div.emptyCancelBuilder)").reverse().each(function(B,C){var E=$(C).find("select,input")[0];
if(v){v=false}else{E=$(E);if(E.data("qGen")){var D=E.data("qGen").call(this,E,x);
if((E.data("qGen")).prototype.manipulates){x=D}else{x=D+" "+x}}if(E.hasClass("rangeField")){v=true
}}});return x};var q=function(){var t="";$.each($(".advSearchFields"),function(u,v){v=$(v);
var x=r($(v));if(x.length>0){var w=v.prev("div.logic").find("select").val();t=t+(t.length>0?(" "+w+" "):"")+x
}});$("#query").val(t);$(".advSearch").hide();a();$("#search-button").click();return false
}}function PageLoadFunctions(){var b={high:[],normal:[],low:[]};var a=false;this.addFunction=function(e){priority="normal";
var d={functionName:e,context:window,"arguments":[]};if(arguments.length>1){for(var c=1;
c<arguments.length;c++){if(c===1){switch(arguments[c]){case"high":priority="high";
break;case"normal":priority="normal";break;case"low":priority="low";break;default:d.arguments.push(arguments[c])
}}else{d.arguments.push(arguments[c])}}}if(a){d.functionName.apply(d.context,d.arguments)
}else{b[priority].push(d)}};this.applyFunctions=function(){$.each(b,function(c,d){$.each(d,function(e,f){f.functionName.apply(f.context,f.arguments)
})});a=true}}function Feedback(){var b=function(d){$('form#feedback-form  input[name*="text"]')[0].value=d;
var f=new RegExp("^ID   .* Reviewed;");var e=f.test(d);var c=e?"UniProtKB/Swiss-Prot":"UniProtKB/TrEMBL";
$('form#feedback-form  input[name*="subject"]')[0].value=c+" "+$('form#feedback-form  input[name*="entry"]')[0].value+" entry update request";
if(!e){content="This is currently an unreviewed entry. We are going to update it and integrate it as a reviewed entry in UniProtKB/Swiss-Prot.<br/>"
}content+='Please post your update in the text field below, or <a href="#message" onclick="uniprot.feedback.displayTextEntry();" id="loadTheEntry">load the entry</a> in text format and add your comment.';
$("#additionalInfo").html(content)};this.loadEntryAsText=function(c){var d=c.val();
if(d.length===6||d.length===10){$.ajax({url:"/uniprot/"+d+".txt",async:false}).done(function(e){b(e)
}).fail(function(){alert("Entry not found or problem during request.")})}else{$('form#feedback-form  input[name*="subject"]')[0].value="UniProtKB entry update request"
}};this.displayTextEntry=function(){var c=$('form#feedback-form input[name*="text"]')[0].value;
if(c.length>190000){alert("Entry size too large to be submitted. Please use free comments.")
}else{$('form#feedback-form textarea[name*="message"]')[0].value=c}};var a=function(){$('form#feedback-form  input[name*="message"]')[0].value=""
}}var Blast=(function(){function e(){this.initBlastOptions=__bind(this.initBlastOptions,this);
this.submitBlastForm=__bind(this.submitBlastForm,this);this.unColorSimilarity=__bind(this.unColorSimilarity,this);
this.colorSimilarity=__bind(this.colorSimilarity,this);this.checkSelectionsAndSubmit=__bind(this.checkSelectionsAndSubmit,this)
}var d="";e.prototype.ideC="#cccccc";e.prototype.simC="#e5e4e2";e.prototype.lsimC="#efefef";
e.prototype.gapC="#EEEEEE";var c={dataset:"Database against which the search is performed: UniProtKB or clusters of sequences with 100%, 90% or 50% identity.",threshold:"",matrix:"",filter:"",gapped:"This will allow gaps to be introduced in the sequences when the comparison is done.",numal:"Limits the number of returned alignments."};
e.prototype.databaseDropdown={def:"uniprotkb",selects:{uniprotkb:{label:"UniProtKB"},uniprotkb_archaea:{label:"...Archaea"},uniprotkb_bacteria:{label:"...Bacteria"},uniprotkb_eukaryota:{label:"...Eukaryota"},uniprotkb_arthropoda:{label:"...Arthropoda"},uniprotkb_fungi:{label:"...Fungi"},uniprotkb_human:{label:"...Human"},uniprotkb_mammals:{label:"...Mammals"},uniprotkb_nematoda:{label:"...Nematoda"},uniprotkb_viridiplantae:{label:"...Plants"},uniprotkb_rodents:{label:"...Rodents"},uniprotkb_vertebrates:{label:"...Vertebrates"},uniprotkb_viruses:{label:"...Viruses"},uniprotkb_pdb:{label:"...PDB"},uniprotkb_complete_microbial_proteomes:{label:"...Complete microbial proteomes"},uniprotkb_swissprot:{label:"UniProtKB/Swiss-Prot"},UniRef100:{label:"UniRef100"},UniRef90:{label:"UniRef90"},UniRef50:{label:"UniRef50"},uniparc:{label:"UniParc"}},optgroup:{"Protein Knowledgebase":["uniprotkb","uniprotkb_archaea","uniprotkb_bacteria","uniprotkb_eukaryota","uniprotkb_arthropoda","uniprotkb_fungi","uniprotkb_human","uniprotkb_mammals","uniprotkb_nematoda","uniprotkb_viridiplantae","uniprotkb_rodents","uniprotkb_vertebrates","uniprotkb_viruses","uniprotkb_pdb","uniprotkb_complete_microbial_proteomes","uniprotkb_swissprot"],"Sequence Clusters":["UniRef100","UniRef90","UniRef50"],"Sequence archive":["uniparc"]}};
var a=function(){var g=$("<span></span>");uniprot.builders.groupedDropDownBuilder(this.databaseDropdown,g,{name:"dataset",label:"Target database"});
$("#blast-options").prepend(g.html())};var b=function(){$("#blast-options select[name=dataset]").closest("div.field").attr("title",c.dataset);
$("#blast-options select[name=gapped]").closest("div.field").attr("title",c.gapped);
$("#blast-options select[name=numal]").closest("div.field").attr("title",c.numal)
};e.prototype.initBlastOptions=function(){a.call(this)};var f=function(){var g=$("#blast-form");
if($("#newTabCheckbox").is(":checked")){g.attr("target","_blank")}else{g.removeAttr("target")
}g.submit()};e.prototype.submitBlastForm=function(){var i=$("#blastQuery").val().trim();
var g=new FastaValidation();if(g.needValidation(i)){var h=g.validate(i,{id:"fastaBlastError",qId:"blastQuery"});
switch(h){case -1:break;default:f.call(this)}}else{var j=$("#fastaBlastError");if(j.length>0&&j.is(":visible")){j.toggle()
}f.call(this)}};e.prototype.unColorSimilarity=function(){$("span.similar").each(function(g,h){$(h).css({backgroundColor:"white",borderBottom:"none",borderTop:"none"})
});$("span.identical").each(function(g,h){$(h).css({backgroundColor:"white",borderBottom:"none",borderTop:"none"})
});$("span.lesssimilar").each(function(g,h){$(h).css({backgroundColor:"white",borderBottom:"none",borderTop:"none"})
});$("span.gap").each(function(g,h){$(h).css({backgroundColor:"white",borderBottom:"none",borderTop:"none"})
})};e.prototype.colorSimilarity=function(h){if(typeof h===undefined||h===null){h=1
}var j=h+"em solid ",g=h+"em solid ";if(h>1){g="none"}var i=this;$("span.similar").each(function(k,l){$(l).css({backgroundColor:i.simC,borderBottom:g+i.simC,borderTop:j+i.simC})
});$("span.identical").each(function(k,l){$(l).css({backgroundColor:i.ideC,borderBottom:g+i.ideC,borderTop:j+i.ideC})
});$("span.lesssimilar").each(function(k,l){$(l).css({backgroundColor:i.lsimC,borderTop:j+i.lsimC})
});$("span.gap").each(function(k,l){$(l).css({backgroundColor:i.gapC,borderTop:j+i.gapC})
})};e.prototype.checkSelectionsAndSubmit=function(){var i=$(".basket-item:checked");
$("#clonedBlastForm").remove();var j=$("#blastForm").clone();j.attr("id","clonedBlastForm");
j.find("input[name=landingPage]").val("yes");if(i.length===1){var h=i.attr("id").split("checkbox_")[1];
j.find("#blastQuery").val(h);$("body").append(j);j.submit();return false}else{if(i.length===0){var k=$("#entrySequence");
if(k.length===1){j.find("#blastQuery").remove();var g=$('<textarea name="blastQuery"/>');
g.html(k.html());j.append(g);$("body").append(j);j.submit();return false}}}return true
};return e})();var Align=(function(){function b(){this.testOption=__bind(this.testOption,this);
this.checkSelectionsAndSubmit=__bind(this.checkSelectionsAndSubmit,this);this.newAlignment=__bind(this.newAlignment,this);
this.submitAlignForm=__bind(this.submitAlignForm,this);this.initAlignOptions=__bind(this.initAlignOptions,this)
}var d="";var c=function(f){var e=this;$.ajax({url:BASE+"align/options/",dataType:"json"}).done(function(h,g){d=h;
a.call(this)}).fail(function(){})};var a=function(){if(d!==""){var f=$("#alignOptions").html("");
var e={name:d.name,label:d.display};d.def="clustalo";uniprot.builders.simpleDropDownBuilder(d,f,e)
}};b.prototype.testOption=function(){var e=$("#align_program");newEl("option",e,{value:"clustalo_mock"},"clustalo_mock");
e.val("clustalo_mock")};b.prototype.submitAlignForm=function(){var e=$("#alignQuery");
$(".error").remove();if((e.val()===e.attr("title"))||(e.val()=="")){$("#alignQuery").after('<div class="error">Please enter sequences in FASTA format or UniProt identifiers.</div>');
return false}var f=new FastaValidation();var h=e.val();if(f.needValidation(h)){var g=f.validate(h,{id:"fastaAlignError",qId:"alignQuery"});
switch(g){case -1:break;default:$("#align-form").submit()}}else{var i=$("#fastaAlignError");
if(i.length>0&&i.is(":visible")){i.toggle()}$("#align-form").submit()}return false
};b.prototype.initAlignOptions=function(){if(d===""){c.call(this)}};b.prototype.checkSelectionsAndSubmit=function(){var e=$(".basket-item:checked");
if(e.length>1){$("#align-form > input[name=landingPage]").val("yes");$("#align-button").click();
return false}return true};b.prototype.newAlignment=function(){originalQuery=$("#alignQuery").val();
additionalQuery=$("#additionalSequences").val();var e=originalQuery+"\r\n"+additionalQuery;
$("#align-form input[name=landingPage]").val("no");$("#alignQuery").val(e);if(!this.submitAlignForm()){$("#alignQuery").val(originalQuery)
}};return b})();function Evidence(){var c=function(f){var h=f.target;var e=f.data.target;
var g=e.next(".evidenceContainer");var d=true;$.each(g,function(i,j){j=$(j);d=d&&(j.length>0&&!j.is(h)&&j.has(h).length===0)
});if(d){e.trigger("click")}};var b=function(g){g.preventDefault();var h=$(".evidenceContainer:visible");
if(h.length>0){h.prev(".attributionHeader").trigger("click")}var i=$(g.currentTarget);
var d=i.closest(".attribution");var j=d.position();var e=$(window).width();d.attr("style","z-index:2147483647;border-radius:0.5em 0.5em 0em 0em;");
var f=i.parent().find("div.evidenceContainer");f.attr("style","z-index:2147483647;position:absolute;");
f.show("slow");f.addClass("showing");if(j.left+600>=e){f.addClass("showingLeft")}i.one("click",a);
$(document).on("click",{target:i},c);g.stopPropagation()};var a=function(e){e.preventDefault();
var f=$(e.currentTarget);var d=f.parent().find("div.evidenceContainer");d.hide({duration:1,complete:function(){f.closest(".attribution").attr("style","")
}});d.removeClass("showing");d.removeClass("showingLeft");f.one("click",b);$(document).off("click",c);
e.stopPropagation()};this.addEventListeners=function(){$(".attribution span.attributionHeader").one("click",b)
}}var navBarToggling=(function(){function b(e,d){this.customEvents=d||{};this.namespace=e||uniprot.namespace;
this.isObsolete=$(".entryEmpty").length>0;this.registerSideBarNavigation=__bind(this.registerSideBarNavigation,this);
c.call(this)}var c=function(){if($(".toggle-section:not(:checked):not(:disabled)").length===0){$("#all").hide()
}else{$("#all").show()}if($(".toggle-section:checked").length===0){$("#none").hide();
if(!this.isObsolete){$("#closedSectionsMsg").show()}}else{$("#none").show();if(!this.isObsolete){$("#closedSectionsMsg").hide()
}}};b.prototype.registerSideBarNavigation=function(){var d=this;$(".toggle-section").on("change",function(f){var h=$(this);
var g=h.closest("li");var e=this.id.substring(3);var i=$("#"+e);i.toggle();g.toggleClass("active");
a.call(d);c.call(d);if(i.is(":visible")){document.getElementById(e).scrollIntoView();
i.effect("highlight",2000)}else{if(window.location.hash!==""&&e===window.location.hash.substring(1)){window.location.hash=""
}}if(d.customEvents.change){d.customEvents.change.call()}});$(".heading").click(function(g){var i=$(this);
if(i.parent().hasClass("empty")){return}var h=$(g.target);if("INPUT"!==g.target.nodeName){var e=i.attr("id").substring(3);
var f=i.parent();if(!f.hasClass("active")){$("#tg_"+e).prop("checked",true).change()
}else{document.getElementById(e).scrollIntoView();$("#"+e).effect("highlight",2000)
}}});$("#all").click(function(e){if($(this).hasClass("disabled")){return false}$(".heading").each(function(g,h){h=$(h);
var i=$(h).parent();if(!i.hasClass("empty")){var f=h.attr("id").substring(3);$("#"+f).show();
if(!i.hasClass("active")){i.addClass("active");$("#tg_"+f).prop("checked",true)}}});
a.call(d,true);$("#all").hide();$("#none").show();if(!this.isObsolete){$("#closedSectionsMsg").hide()
}e.preventDefault()});$("#none").click(function(e){if($(this).hasClass("disabled")){return false
}$(".heading").each(function(g,h){h=$(h);var i=$(h).parent();if(!i.hasClass("empty")){var f=h.attr("id").substring(3);
$("#"+f).hide();i.removeClass("active");$("#tg_"+f).prop("checked",false)}});$("#all").show();
$("#none").hide();if(!this.isObsolete){$("#closedSectionsMsg").show()}e.preventDefault()
})};var a=function(g){var f=new Array();var h=this.namespace+"-sections-view";var e=0;
var d=".active > .heading";if(g){d="ul#entry_sections > li > .heading"}$(d).each(function(){f.push($(this).attr("id").substring(3))
});if(f.length>0){uniprot.cookie.save_tmp(h,f.join(" "))}else{if(uniprot.cookie.load(h)!==null){uniprot.cookie.delCookie(h)
}}};return b})();function EntryViews(){var c="0px";var d=function(){c=$(".entry-header").width()+"px"
};var a=function(){var h=$("#entrySidebar");var j=$(".page-footer");var i=h.offset().top-parseFloat(h.css("marginTop").replace(/auto/,0));
var g=$(".sidebar").outerHeight();$(window).scroll(function(l){var m=$(this).scrollTop();
var k=$(window).height();if(m>=i&&k>g){h.addClass("fixed");h.attr("style","width:"+c);
$(".mainContent").addClass("push_2")}else{h.removeClass("fixed");h.attr("style","");
$(".mainContent").removeClass("push_2")}});window.onresize=function(k){c=$(".entry-header").width()+"px";
h.attr("style","width:"+c)}};var b=function(g,h){var i=[];$(g).each(function(j,k){k=$(k);
if(h&&typeof h==="function"&&h(k)){return}var l=$(k).find("a.heading");if(l.length>0){l=$(l[0]);
i.push(l.attr("id"))}});return i};var f=function(g){$(".basketButton").click(function(){uniprot.basket.addTobasket(g,uniprot.namespace);
return false})};var e=function(){$("div.sequence-isoform a.run-isoform-tool").each(function(g,h){$(h).click(function(i){var j=$(this).prev("select").val();
if(/^http(.+)/.exec(j)){window.location.href=j}else{$("input#blastQuery").val(j);
$("form#blastForm").submit()}i.preventDefault()})})};this.openSectionForInternalLink=function(i){var g=$("#"+i);
if(g.length>0){var h=g.closest(".section");if(h.length>0&&!h.is(":visible")){$("#jp_"+h.attr("id")).parent().toggleClass("active");
updateCookie();h.show()}}};this.init=function(g){a();(new navBarToggling()).registerSideBarNavigation();
f(g);if(!($("#tg_sequences").parent().hasClass("empty"))){e()}d()}}function showDatabaseTarget(a){$(a).siblings(".updatedFlasher:first").show().delay(1000).fadeOut(50)
}var alignResults=(function(){var f=function(){if($("#tg_alignment").is(":checked")){$(".highlight_bar").show()
}else{$(".highlight_bar").hide()}};function g(m,k,l){this.toggleFeatures=__bind(this.toggleFeatures,this);
this.removeColorFromGuideTree=__bind(this.removeColorFromGuideTree,this);this.colorGuideTree=__bind(this.colorGuideTree,this);
(new navBarToggling("align",{change:f})).registerSideBarNavigation();h(m,k);d($("input.basket-item").length);
var i=$("#treeHighlight");var j=this;if(i.length!=0){i.change(function(n){if($(this).is(":checked")){j.colorGuideTree("Tax")
}else{j.removeColorFromGuideTree("Tax")}})}e()}var e=function(){var i=function(){var j={goHandler:function(k){var m=$("input[name=menu-options]:checked").val();
if("default"===m){var l=$(".basket-item:checked").attr("id").split("checkbox_")[1];
$("#blastQuery").val(l);$("#blastForm").submit();return false}else{if("advanced"===m){return uniprot.blast.checkSelectionsAndSubmit()
}else{return false}}}};return function(){return $("body").createBlastDropDown(j)}
};$("a#blast-button").attachMenu(i());$("a#align-button").click(function(){if($(this).hasClass("disabled")){return false
}var j="";$(".basket-item:checked").each(function(k,l){j=j+$(l).attr("id").split("_")[1]+"\n"
});$("#alignQuery").val(j);$("#align-form").submit();return false});$("a#addSequence-button").click(function(){uniprot.align.newAlignment();
return false});$("a#align-resubmit").click(function(){var j=$("#align-form");j.find("input[name=landingPage]").val("yes");
j.submit();return false})};var a=function(){var i={content:function(j,k){return j.find("span.data_Tax").html()
}};i=$.extend(uniprot.tooltipConfig,i);$("span.tree_link").each(function(j,k){k=$(k);
if(k.find("span.data_Tax").length>0){$(k).tooltipsy(i)}})};var b=function(){$("span.tree_link").each(function(i,j){j=$(j);
var k=j.data("tooltipsy");if(k){k.destroy()}})};var c=function(j){var i=$("div."+j);
if(i&&i.length>0){return i}else{return null}};g.prototype.removeColorFromGuideTree=function(i){var j=c(i);
$("div.legends").hide();j.each(function(k,l){$(l).css({borderColor:"#000000"})});
b()};g.prototype.colorGuideTree=function(i){var k=c(i);if(k!=null){$("div.legends").show();
var j=function(m,o){m=$(m);var n=m.attr("class");var l=(new RegExp(o)).exec(n)[2];
m.css({"border-color":l})};k.each(function(l,m){j($(m),i+" (\\{border-color : (.*)\\})")
});a()}};var d=function(i){var j=$("#download-entries-button");i=i||0;var k=function(){var l={total:i,options:{selected:{value:"selected",label:"Download selected",count:0},others:[],all:{label:"Download all",count:i}},goHandler:function(o){var p=$("select#format").val();
var r=$("input:radio[name=menu-options]:checked").val();var m=[];if(r!="all"){m=$.map($("input.basket-item:checked"),function(t,s){return $(t).attr("id").split("checkbox_")[1]
})}var q="/align/"+uniprot.jobid+"."+p+(m.length>0?("?query="+m.join(",")):"");var n=$("#downloadForm");
n.attr("action",q);n.submit();return false}};l.formats=[{value:"fastE",label:"FASTA"},{value:"listE",label:"List"}];
return function(){return $("body").createMenu(l)}};j.attachMenu(k())};var h=function(j,k){var i=$("#download-button");
if(i.hasClass("disabled")){i.click(function(){return false});return}var l=function(){var m={goHandler:function(n){var o=$("select#format").val();
window.location.href=j+"."+o;return false}};m.formats=[{value:"aln",label:"Text"},{value:"fasta",label:"FASTA"},{value:"jnlp",label:"Jalview"}];
if(k){m.formats.push({value:"dnd",label:"Tree"})}return function(){return $("body").createMenu(m)
}};i.attachMenu(l())};g.prototype.toggleFeatures=function(){$("input.feature_toggle").change(function(j){var i=$(j.target);
var l=i.attr("id");$("label#label"+l+" span").toggle();if("Similarity"===l){if(i.is(":checked")){var k=i.siblings(".feature_toggle_data").val();
uniprot.blast.colorSimilarity(k)}else{uniprot.blast.unColorSimilarity()}}else{$("span.row"+l).each(function(m,n){n=$(n);
n.toggle()})}})};return g})();var UniProtEntryView=(function(){function d(){this.rewriteIsoformURL=__bind(this.rewriteIsoformURL,this);
this.openSectionForInternalLink=__bind(this.openSectionForInternalLink,this);this.toggleLargeScale=__bind(this.toggleLargeScale,this);
this.init=__bind(this.init,this)}var n=function(){var q=$("div.secondaryAcs");if(q.length===1){q.click(function(s){var t=/collapse/;
if(t.test(q.attr("class"))){q.attr("class","icon_expand");q.attr("title","Show all accession numbers.");
q.parent().next().toggle();return}var r=/expand/;if(r.test(q.attr("class"))){q.attr("class","icon_collapse");
q.attr("title","Show less accession numbers.");q.parent().next().toggle();return}})
}};var g=function(){j.call(this,"div.taxonomy","Show complete lineage","Show abbreviated lineage",function(q){q.siblings(".hiddenTaxon").toggle()
})};var j=function(r,q,s,t){var v=/collapse/;var u=/expand/;$(r).each(function(w,x){x=$(x);
x.click(function(y){if(v.test(x.attr("class"))){x.attr("class","icon_expand");x.attr("title",q)
}else{if(u.test(x.attr("class"))){x.attr("class","icon_collapse");x.attr("title",s)
}}t(x);return})})};var i=function(){j.call(this,"div.authors","Show all authors","Hide authors",function(q){q.parent().next().toggle()
})};var o=function(q){$.ajax({url:"/uniprot/"+q+".comco",async:false}).done(function(r){$("#comment-count").html("("+r+")")
})};var f=function(){$("div#sequences table#isoforms a.run-isoform-tool").each(function(q,r){$(r).click(function(s){var t=$(this).prev("select").val();
if(/^http(.+)/.exec(t)){window.location.href=t}else{$("input#blastQuery").val(t);
$("form#blastForm").submit()}s.preventDefault()})})};var m=function(s,t){var q=$("#download-button");
if(q.hasClass("disabled")){q.click(function(){return false});return}var r=function(){var u={entryId:s,listformats:[{format:"txt",label:"Text"},{format:"fasta",label:"FASTA (canonical)"},{format:"xml",label:"XML"},{format:"rdf",label:"RDF/XML"},{format:"gff",label:"GFF"}]};
if(t){u.listformats.splice(2,0,{format:"fasta",label:"FASTA (canonical & isoform)"})
}return function(){return $("body").createMenu(u)}};$("#download-button").attachMenu(r())
};var c=function(){var q=$("#similar_proteins");if(q.length>0){if($("#table-100 table td.entry").length>0){new TabUI("#similar_proteins","100")
}else{if($("#table-90 table td.entry").length>0){new TabUI("#similar_proteins","90")
}else{if($("#table-50 table td.entry").length>0){new TabUI("#similar_proteins","50")
}else{new TabUI("#similar_proteins","100")}}}}};var l=function(){var r=function(t){$(this).hide();
$("#secstructure_section").hide();var s=$("#showSecStructTable");s.show();s.one("click",q);
return false};var q=function(t){$(this).hide();$("#secstructure_section").show();
var s=$("#hideSecStructTable");s.show();s.one("click",r);return false};$("#showSecStructTable").one("click",q)
};d.prototype.rewriteIsoformURL=function(s){var q=document.location.pathname;var r=q.indexOf("-");
if(r===15){var u=q.substring(r+1);if(u.indexOf(".")>0){u=u.substring(0,u.indexOf("."))
}var t=s+"-"+u;document.location=s+"#"+t}};var k=function(){var q=window.location.hash;
if(q!==""){var r=$("div"+q);if(r.length>0&&!r.is(":visible")){$("#jp_"+q.substring(1)).trigger("click")
}}};d.prototype.openSectionForInternalLink=function(s){var q=$("#"+s);if(q.length>0){var r=q.closest(".section");
if(r.length>0&&!r.is(":visible")){$("#jp_"+r.attr("id")).parent().toggleClass("active");
updateCookie.call(this);r.show()}}};d.prototype.toggleLargeScale=function(){$("#publications .largeScalePublications").toggle()
};var b=function(){var q=function(){var r={goHandler:function(s){var t=$("input[name=menu-options]:checked").val();
if("default"===t){$("#blastForm").submit();return false}else{if("advanced"===t){return uniprot.blast.checkSelectionsAndSubmit()
}}}};return function(){return $("body").createBlastDropDown(r)}};$("#blastButton").attachMenu(q())
};var h=function(){var q=function(){return function(){return $("body").createHistoryDropDown()
}};$("#historyButton").attachMenu(q())};var e=function(){$("table.featureTable tbody").on("click","a.blastSubsequences",function(r){var q=$(this);
q.closest("tr").find("td.ft-sequence > div").trigger("click");return false});$("table.featureTable tbody").on("click",".subsequences",function(s){var r=$(this);
if(r.hasClass("disabled")){return false}var t=r.attr("id").replace("_","[").replace("_","]");
var q=[];q.push(t);uniprot.basket.addItemsTobasket(q,uniprot.namespace);return false
});$("table.featureTable tbody").on("click","td.ft-sequence div",function(r){var s=$(r.target);
var q=s.closest("td").parent("tr").find("td > a.position");if(q.length===1&&q.attr("href")!=null){window.location.href=q.attr("href")
}})};var a=function(){e.call(this);$("table.databaseTable.STRUCTURE").on("click","a.pdbsum",function(q){UniProt.analytics("DR-lines","click","DR-PDB-PDBsum")
})};var p=function(){var q=$("#secondarystructure");if(q.length==1){var r=$(".section:visible").width()-10;
q.attr("style","width:"+r+"px")}};d.prototype.init=function(q,r){if(!($("#tg_sequences").parent().hasClass("empty"))){f.call(this)
}if(typeof secondarystructure!=="undefined"){l.call(this)}m.call(this,q,r);o.call(this,q);
c.call(this);k.call(this);i.call(this);g.call(this);n.call(this);b.call(this);h.call(this);
a(this);p.call(this)};return d})();function EntryTags(){var e=["cross-references","structure"];
var c={embl:"http://www.ebi.ac.uk/ena/data/view/",embl_cds:"http://www.ebi.ac.uk/ena/data/view/",genbank:"http://www.ncbi.nlm.nih.gov/entrez/viewer.fcgi?db=nuccore&id=",ddbj:"http://getentry.ddbj.nig.ac.jp/search/get_entry?accnumber=",genbank_cds:"http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?db=protein&cmd=&term=",ddbj_cds:"http://getentry.ddbj.nig.ac.jp/getentry/dad/",pdbe:"http://www.ebi.ac.uk/pdbe-srv/view/entry/",rcsb:"http://www.pdb.org/pdb/cgi/explore.cgi?pdbId=",pdbj:"http://pdbj.org/mine/summary/"};
var b={insd:"embl",insd_cds:"embl_cds",pdb:"pdb"};this.initLinks=function(){$.each(e,function(f,g){if($("div#"+g).length>0){d(g)
}})};var d=function(f){var g={};$.each(b,function(i,j){var h=uniprot.cookie.load(i+"-target-"+f);
if(h){b[i]=h;if(i.indexOf("cds")===-1){g[i]=h}}});$.each(g,function(h,i){$("div#"+f+" input:radio[name*="+h+"-target-selector][class="+i+"]").click().change()
})};var a=function(g,f,k){if(g=="insd"){var i=$("div#"+k+" a.embl");for(var h=0;h<i.length;
++h){var j=i[h];j.href=j.href.replace(c.embl,c[f]);j.href=j.href.replace(c.genbank,c[f]);
j.href=j.href.replace(c.ddbj,c[f])}}else{if(g=="insd_cds"){var i=$("div#"+k+" a.embl_cds");
for(var h=0;h<i.length;++h){var j=i[h];j.href=j.href.replace(c.embl_cds,c[f]);j.href=j.href.replace(c.genbank_cds,c[f]);
j.href=j.href.replace(c.ddbj_cds,c[f])}}else{if(g=="pdb"){var i=$("div#"+k+" a.pdb");
for(var h=0;h<i.length;++h){var j=i[h];j.href=j.href.replace(c.pdbe,c[f]);j.href=j.href.replace(c.rcsb,c[f]);
j.href=j.href.replace(c.pdbj,c[f])}}}}};this.configureLink=function(g,f,h){var i=$(h).closest("div.section").attr("id");
if(g==="insd"||g==="insd_cds"||g==="pdb"){b[g]=f;uniprot.cookie.save_tmp(g+"-target-"+i,f);
a(g,f,i)}}}var ColumnNames=(function(){function a(){this.ensureCookie=__bind(this.ensureCookie,this);
this.hideShortShowLong=__bind(this.hideShortShowLong,this);this.hideLongShowShort=__bind(this.hideLongShowShort,this)
}a.prototype.ensureCookie=function(c){var b=uniprot.cookie.load(c+"-longColumns");
if(b===null){uniprot.cookie.save(c)}};a.prototype.hideShortShowLong=function(f,e){var d=$("."+f);
d.each(function(i,j){$(j).find("div.short").hide();$(j).find("div.long").show()});
$("span#"+f+"Header div.long").show();$("span#"+f+"Header div.short").hide();this.ensureCookie(e);
var c=uniprot.cookie.load(e+"-longColumns");var h=f.replace("_"," ");if(c!==null){c=c.split(",");
var g=false;for(var b=0;b<c.length;b=b+1){if(c[b]===h){g=true}}if(!g){c[c.length]=h;
uniprot.cookie.save(e+"-longColumns",c,e.split("-")[0])}}else{c=new Array(1);c[0]=h;
uniprot.cookie.save(e+"-longColumns",c,e.split("-")[0])}};a.prototype.hideLongShowShort=function(g,f){var e=$("."+g);
e.each(function(i,j){$(j).find("div.short").show();$(j).find("div.long").hide()});
$("span#"+g+"Header div.long").hide();$("span#"+g+"Header div.short").show();this.ensureCookie(f);
var d=uniprot.cookie.load(f+"-longColumns");if(d!==null){d=d.split(",");var h=g.replace("_"," ");
var b=[];for(var c=0;c<d.length;c=c+1){if(d[c]!==h){b.push(d[c])}}uniprot.cookie.save(f+"-longColumns",b,f.split("-")[0])
}};return a})();function Cookie(c){var d=c;this.load=function(e){return a(e)};this.delCookie=function(e,f){if(a(e)){if(f&&f.charAt(0)!="/"){f=BASE+f+"/"
}b(e,"",f?f:"/",-1,d)}};this.save=function(e,f,g){if(g&&g.charAt(0)!="/"){g=BASE+g+"/"
}b(e,f,g?g:"/",365)};this.save_tmp=function(e,f,g){if(g&&g.charAt(0)!="/"){g=BASE+g+"/"
}b(e,f,g?g:"/")};function b(g,i,l,e,k){var f=new Date();f.setTime(f.getTime());if(e>0){e=e*1000*60*60*24
}var j=e>=0?new Date(f.getTime()+(e)):new Date(0);var h=escape(i);document.cookie=g+"="+h+((e)?";expires="+j.toGMTString():"")+((l)?";path="+l:"")+((d)?";domain="+d:"")+((k)?";secure":"")
}function a(g){var i=document.cookie.indexOf(g+"=");var e=i+g.length+1;if((!i)&&(g!=document.cookie.substring(0,g.length))){return null
}if(i==-1){return null}var f=document.cookie.indexOf(";",e);if(f==-1){f=document.cookie.length
}var h=unescape(document.cookie.substring(e,f));if(h.charAt(0)==='"'){h=h.slice(1,h.length)
}if(h.charAt(h.length-1)==='"'){h=h.slice(0,h.length-1)}return h}}var JobUtils=(function(){function a(b){this.timeOutIdentifier=b||"";
this.check=function(){var d=window.location.href.substr(0,window.location.href.length-window.location.search.length);
var c=this;$.ajax({url:d+".stat",datatype:"text"}).done(function(f,e){if(f.match(/COMPLETED/)){clearInterval(c.timeOutIdentifier);
window.location.reload()}else{if(f.match(/FAILED/)){clearInterval(c.timeOutIdentifier);
window.location.reload()}else{if(f.match(/CANCELLED/)){clearInterval(c.timeOutIdentifier);
window.location.reload()}}}}).fail(function(){})};this.update=function(d){var c=new Date().getTime()-d;
$("#ellapsed").html(this.formatInterval(c))};this.formatInterval=function(g){var h="";
var j=Math.floor(g/1000%60);var f=Math.floor(g/(1000*60)%60);var e=Math.floor(g/(1000*60*60));
if(j+f+e>0){var d=0;var c=0;var i="";if(e>0){d=e;c=f;i="h"}else{if(f>0){d=f;c=j;i="min"
}else{if(j>0){d=j;i="s"}}}if(d>0){h+=d}if(c>0){h+=":";if(c<10){h+="0"}h+=c}h=" for "+h+i
}return h}}return a})();function nameSpaceSelector(){var a=570;$("#textSearch").click(function(d){$("#query").focus();
var e=$("#query");var b=e.position();$("#searchBoxIndicator1").css("left",b.left-130).show();
$("#searchBoxIndicator2").css("left",b.left+90).show();$("#searchBoxIndicator3").css("left",b.left+470).show();
var c=function(i){var h=i.target;var g=$(".searchBoxIndicator");var f=true;$.each(g,function(j,k){k=$(k);
f=f&&(k.length>0&&!k.is(h)&&k.has(h).length===0)});if(f){g.hide();$(document).off("click",c)
}};$(document).on("click",c);d.stopPropagation()});$("#select-namespace").click(function(c){var b=$("ul.select-namespace-options");
b.toggle();var d=function(i){var h=i.target;var g=[$(".select-namespace-options"),$("#select-namespace")];
var f=true;$.each(g,function(e,j){j=$(j);f=f&&(j.length>0&&!j.is(h)&&j.has(h).length===0)
});if(f){$("ul.select-namespace-options").hide();$(document).off("click",d);return false
}};if(b.is(":visible")){$(document).on("click",d)}else{$(document).off("click",d)
}$(".searchBoxIndicator").hide();$(document).off("click",checkAndCloseSearchBoxIndicator);
c.stopPropagation()});$("#closeNamespaceOptions").click(function(){$("ul.select-namespace-options").toggle();
return false});$(".namespace-option").click(function(){function b(){var d=$("#selected-namespace");
d.siblings("input").attr("value",uniprot.namespace);d.text(c.text());$("#namespace-background").attr("class","namespace-"+uniprot.namespace);
$("#query").width(a-$("#select-namespace")[0].offsetWidth);$("ul.select-namespace-options").hide()
}var c=$(this);uniprot.namespace=c.attr("id");b();uniprot.advSearchUI.template(uniprot.namespace);
return false});$("#query").width(a-$("#select-namespace")[0].offsetWidth)}var checkAndCloseSearchBoxIndicator=function(d){var c=d.target;
var b=$(".searchBoxIndicator");var a=true;$.each(b,function(e,f){f=$(f);a=a&&(f.length>0&&!f.is(c)&&f.has(c).length===0)
});if(a){b.hide();$(document).off("click",checkAndCloseSearchBoxIndicator)}};var builders=(function(){function d(){this.dropDownFieldBuilder=__bind(this.dropDownFieldBuilder,this);
this.optGroupDropDown=__bind(this.optGroupDropDown,this);this.rangeFieldBuilder=__bind(this.rangeFieldBuilder,this);
this.emptyCancelBuilder=__bind(this.emptyCancelBuilder,this);this.cancelBuilder=__bind(this.cancelBuilder,this);
this.textfieldRenderer=__bind(this.textfieldRenderer,this)}d.prototype.minimumPadding=10;
d.prototype.basePadding=65;d.prototype.childImage="/images/advanced_search_parent_child.jpg";
var a=function(e){e.attr=e.attr||{};e.label=e.label||"";e.attr["class"]="field";var f=newEl("div",e.parent,e.attr);
if(e.label===""){newEl("p",f,{"class":"noLabel"},"&nbsp;")}else{newEl("p",f,{"class":"label"},e.label)
}return newEl("p",f,{"class":"builder"})};var b=function(e,f){if(e){e.label=e.label||f
}else{e={};e.label=f}return e};d.prototype.textfieldRenderer=function(h,e){e=b.call(this,e,"Term");
var i="";var j=h.data("tokens");if(j){var g=h.find("input").length;if(j.content&&j.content[g]){i=j.content[g]
}}var f=newEl("input",a.call(this,{parent:h,label:e.label}),{});if(e.field){f.data("field",e.field)
}var j=h.data("tokens");if(e.optional){f.attr("title","Any");if(i===""){f.inputHints()
}}if(i!==""){f.val(i)}f.on("blur",function(m){var k=$(this).closest(".advSearchFields");
var l=[];var n=k.data("tokens");$.each(k.find("input"),function(o,p){var p=$(p);if("rangeField"!==p.attr("class")&&""!==p.val().trim()){l.push(p.val().trim())
}});n.content=l;k.data("tokens",n)});return f};d.prototype.cancelBuilder=function(g,e){var h=newEl("div",g,{"class":"field cancelBuilder"});
newEl("p",h,{"class":"noLabel"},"--");var f=newEl("a",newEl("p",h,{"class":"cancelBuilder"}),{href:"#","class":"icon icon-functional cancel button","data-icon":"-"});
f.click(function(i){$(i.target).closest("li.filter").remove();return false});return f
};d.prototype.emptyCancelBuilder=function(g,e){var h=newEl("div",g,{"class":"field emptyCancelBuilder"});
newEl("p",h,{"class":"noLabel"},"--");var f=newEl("a",newEl("p",h,{"class":"emptyCancelBuilder"}),{href:"#","class":"icon icon-functional","data-icon":""});
return f};d.prototype.rangeFieldBuilder=function(m,i,e){i=b.call(this,i,["From","To"]);
var g=["",""];var j=m.data("tokens");if(j){var k="from"+(i.field?i.field:"");var l="to"+(i.field?i.field:"");
g[0]=j[k]?j[k]:(j.fromlength?j.fromlength:"");g[1]=j[l]?j[l]:(j.tolength?j.tolength:"");
if(i.field){j.rangeField=i.field}}var f={"class":"rangeField"};if(i.size){f.size=i.size
}var h=newEl("div",m,{"class":"field"});var n=[newEl("input",a.call(this,{parent:h,label:i.label[0]}),f),newEl("p",a.call(this,{parent:h,label:""}),f,"-"),newEl("input",a.call(this,{parent:h,label:i.label[1]}),f)];
if(i.optional&&g[0]!==""){n[0].attr("title","Any");n[0].inputHints();n[2].attr("title","Any");
n[2].inputHints()}if(i.field){(n[0]).data("field",i.field);(n[2]).data("field",i.field)
}(n[0]).val(g[0]);(n[2]).val(g[1]);if(e){(n[0]).on("blur",function(o){var p=m.data("tokens");
if(i.field){p["from"+i.field]=$(this).val()}else{p["from"+i.field]=$(this).val()}m.data("tokens",p)
});(n[2]).on("blur",function(o){var p=m.data("tokens");if(i.field){p["to"+i.field]=$(this).val()
}else{p["to"+i.field]=$(this).val()}m.data("tokens",p)})}return n};d.prototype.optGroupDropDown=function(i,g,f){var h={parent:g,label:f.label};
var e=newEl("select",a.call(this,h),{});if(i.opt){$.each(i.opt,function(j,k){var l=newEl("optgroup",e,{label:j});
$.each(k,function(m,o){var n={value:m};if(i.def===m){n.selected="selected"}newEl("option",l,n,o)
})})}return e};var c=function(e,f){return(typeof e[f]!=="undefined"&&e[f]!==null)
};d.prototype.simpleDropDownBuilder=function(g,m,i,f){i.label=i.label||"&nbsp;";var l={parent:m,label:i.label};
var j={"class":(c(i,"class")?i["class"]:""),name:(c(i,"name")?i.name:"")};var k=newEl("select",a.call(this,l),j);
var e=k.closest("div.field");if(g.selects){var n=function(o,p){var q={value:o};if(g.def===o){q.selected="selected"
}newEl("option",k,q,p.label)};if(f){var h=[];$.each(g.selects,function(o,p){h.push(o)
});h=h.sort();$.each(h,function(o,p){n(p,g.selects[p])})}else{$.each(g.selects,n)
}}};d.prototype.groupedDropDownBuilder=function(i,g,f){f.label=f.label||"&nbsp;";
var h={parent:g,label:f.label};var j={"class":(c(f,"class")?f["class"]:""),name:(c(f,"name")?f.name:"")};
var e=newEl("select",a.call(this,h),j);var k=e.closest("div.field");if(i.optgroup){$.each(i.optgroup,function(m,n){var o=newEl("optgroup",e,{label:m});
for(var l=0;l<n.length;l++){var p={value:n[l],id:("dataset"+n[l])};if(i.def===n[l]){p.selected="selected"
}newEl("option",o,p,i.selects[n[l]].label)}})}};d.prototype.dropDownFieldBuilder=function(h,q,j,g){j.label=j.label||"&nbsp;";
g=g||"";if(h.field){var n=q.data("tokens");if(h.selects[n[h.field]]){g=n[h.field]
}else{if(h.selects["ann."+n[h.field]]){g="ann."+n[h.field]}}}else{var r=q.data("path");
if(r){var i=q.find("select").length;if(h.selects[r[i]]){g=r[i]}}else{var n=q.data("tokens");
if(n){$.each(n,function(t,s){if(h.selects[t]){g=t;return false}})}}}if(g===""){g=h.def
}var m=function(s,t){var v="";if(t.field){v=t.field}else{if(t.selects[o.val()].field){v=t.selects[o.val()].field
}}var u=s.data("tokens");if(v!==""){var w=o.val();if(w.startsWith("ann.")){w=w.substring(4)
}u[v]=w}s.data(u)};var f=function(u,t){var s=true;$.each(t.find("select"),function(v,w){var x=$(w).val();
if(x.startsWith("ann.")){u.isAnnotation=true;u.isDatabase=false;u.isCitation=false;
u.isMass=false;u.isLength=false;s=false}else{if("crossref"===x){u.isAnnotation=false;
u.isDatabase=true;u.isCitation=false;u.isMass=false;u.isLength=false;s=false}else{if("citation"===x){u.isAnnotation=false;
u.isDatabase=false;u.isCitation=true;u.isMass=false;u.isLength=false;s=false}else{if("mass"===x){u.isAnnotation=false;
u.isDatabase=false;u.isCitation=false;u.isMass=true;u.isLength=false;s=false}else{if("seq-length"===x){u.isAnnotation=false;
u.isDatabase=false;u.isCitation=false;u.isMass=false;s=false;u.isLength=true}}}}}return s
});if(s){u.isAnnotation=false;u.isDatabase=false;u.isCitation=false;u.isMass=false
}t.data("tokens",u)};var l=function(u){if(!("noChange" in j)){var t=e.nextAll();if(t.length>0){t.remove()
}}var v=h.selects[o.val()].renderer;if(v&&typeof v=="function"){v.call(uniprot.builders,q)
}m(q,h);var w=q.data("tokens");if(w){f(w,q)}var s=o.children("option:selected")};
var p={parent:q,label:j.label};var k={};if(j["class"]){k["class"]=j["class"]}var o=newEl("select",a.call(this,p),k);
var e=o.closest("div.field");if(h.selects){$.each(h.selects,function(s,t){var u={value:s};
if(g===s){u.selected="selected"}newEl("option",o,u,t.label)});o.on("change",l);l(null)
}if(h.field){o.data("field",h.field)}};return d})();var qGenerator=function(){var a=function(f){var e=f.charAt[0]!='"',d=f.charAt[f.length]!='"';
if(f.length>0&&f.indexOf(" ")!=-1&&(e||d)){if(e){f='"'+f}if(d){f=f+'"'}}return f},c=function(f,g){var e=f.parent().prev().html(),d={};
if(e=="To"){d.toValue=f.val();d.fromValue=f.closest("div.field").prev("div.field").find("input").val()
}else{d.fromValue=f.val();d.toValue=f.closest("div.field").next("div.field").find("input").val()
}return d},b=function(d){if(d){this.manipulates=d}};b.prototype.manipulates=false;
this.databaseTypeGen=function(d,f){f=f.trim()||"";var e=d.val();if(e===""){e="*"}return"database:(type:"+a.call(this,e)+" "+f+")"
};this.annoTypeGen=function(d,f){f=f.trim()||"";var e=d.val();if(e===""){e="*"}return"annotation:(type:"+a.call(this,e)+" "+f+")"
};this.dateRangeGen=function(f,g){var h=f.data("field"),e=c(f,g),d;if(h){d=h+":["+e.fromValue.split("-").join("")+" To "+e.toValue.split("-").join("")+"]"
}else{d="["+e.fromValue.split("-").join("")+" To "+e.toValue.split("-").join("")+"]"
}return d};this.rangeGen=function(f,g){var h=f.data("field"),e=c(f,g),d;if(h){d=h+":["+e.fromValue+" To "+e.toValue+"]"
}else{d="["+e.fromValue+" To "+e.toValue+"]"}return d};this.txtQueryGen=function(e,f){var g=e.data("field"),d;
if(g){d=g+":"+a.call(this,e.val())}else{d=a.call(this,e.val())}return d};this.addFieldGen=function(e,f){var g=e.data("field"),d;
if(g){d=a.call(this,g)+":"+f}else{d=f}return d};this.functionToaddFieldGen=function(e){var d=function(f,g){return e+":"+a.call(this,f.val())
};d.prototype=new b();return d};this.addAndManFieldGen=function(e){var d=function(f,g){g=g||"";
return e+":("+g.trim()+")"};d.prototype=new b(true);return d};this.addAndManFieldFromValGen=function(e){var d=function(f,g){g=g||"";
return a.call(this,f.val())+":"+g.trim()};d.prototype=new b(true);return d};this.annoTypeGen.prototype=new b(true);
this.rangeGen.prototype=new b();this.txtQueryGen.prototype=new b();this.addFieldGen.prototype=new b(true);
this.databaseTypeGen.prototype=new b(true)};var advSearch=function(t){var o=t.textfieldRenderer,q=t.rangeFieldBuilder,g=t.dropDownFieldBuilder,j=t.newLineBuilder,k=function(w,v){v=v||{};
var u;u=function(x){if(typeof w==="string"){return g(s[w],x,v)}else{return g(w,x,v)
}};return u},l=function(u){if(u){return function(v){o(v,u)}}return o},i=function(v,u){u=u||"Length range";
return function(w){this.rangeFieldBuilder(w,{field:v,size:10,label:[u,""],optional:"true"},true)
}},d=function(u){if(u){return l($.extend({},u,{label:"Identifier",optional:"true"}))
}else{return l({label:"Identifier",optional:"true"})}},p=function(u){this.rangeFieldBuilder(u,{size:"12"})
},a=function(u){return function(w,v){var x=function(y){if(y.length===8){return y.substring(0,4)+"-"+y.substring(4,6)+"-"+y.substring(6)
}else{return y}};v=v||{};v.size="12";v.field=u||"";result=this.rangeFieldBuilder(w,v,false);
result[0].datepicker({dateFormat:"yymmdd",changeMonth:true,changeYear:true,yearRange:"1986:2020",onClose:function(){var y=$(this);
var z=$.data(y.closest(".advSearchFields")[0],"tokens");if(z){var A=y.val();z["from"+v.field]=y.val()
}}});result[2].datepicker({dateFormat:"yymmdd",changeMonth:true,changeYear:true,yearRange:"1986:2020",onClose:function(){var y=$(this);
var z=$.data(y.closest(".advSearchFields")[0],"tokens");if(z){z["to"+v.field]=y.val()
}}})}},h=function(v,u){return function(y,w){w=w||{};w=$.extend({},w,u);var x=this.textfieldRenderer(y,w);
x.autocomplete(v);x.on("autocompletesearch",function(z,A){$(this).addClass("autocomplete-loading")
});x.on("autocompleteresponse",function(z,A){$(this).removeClass("autocomplete-loading")
})}},r=function(){var u=[l({label:"Title & Abstract"}),l({label:"Author",field:"author"}),l({label:"Journal",field:"journal"}),l({label:"Published",field:"published"})];
return function(x,w){var v=[];$.each(u,function(y,z){v.push(z(x))});return v}},s={};
s.confidence={def:"",selects:{"":{label:"Any"},experimental:{label:"Experimental"},probable:{label:"Probable"},potential:{label:"Potential"},by_similarity:{label:"By similarity"}},field:"confidence"};
s.unirefIdentity={def:"",selects:{"":{label:"Any"},"1.0":{label:"100 %"},"0.9":{label:"90 %"},"0.5":{label:"50 %"}},field:"identity"};
s.helpSection={def:"",selects:{faq:{label:"FAQ"},manual:{label:"UniProtKB manual"},help:{label:"General information"},news:{label:"news"},changes:{label:"Forthcoming changes"}},field:"section"};
s.firstRow={def:"",selects:{"":{label:""},NOT:{label:"NOT"}}};s.otherRow={def:"AND",selects:{AND:{label:"AND"},OR:{label:"OR"},NOT:{label:"NOT"}}};
s.yesno=function(v){var u={def:"yes",selects:{yes:{label:"Yes"},no:{label:"No"}}};
if(v){return $.extend({},u,v)}return u};var m=function(u){return[o(u,{optional:"true"}),(i("length")).call(this,u),g(s.confidence,u,{label:"Confidence"})]
};var c=function(u){return[o(u,{optional:"true"}),(i("length")).call(this,u)]};var e=function(u){return[o(u),g(s.confidence,u,{label:"Confidence"})]
};var b=function(u){return[g(s.helpSection,u,{label:"Section"})]};var f=function(u){return[g(s.unirefIdentity,u,{label:"Sequence Identity"})]
};s.sequencefrom={def:"tissue",selects:{tissue:{label:"Tissue",renderer:o},strain:{label:"Strain",renderer:o},plasmid:{label:"Plasmid",renderer:o},transposon:{label:"Transposon",renderer:o}}};
s.ontology={def:"go",selects:{go:{label:"Gene Ontology [GO]",renderer:h({minLength:"2",source:"/hints/go/?format=json&limit=10&sort=score&query=",urlfunction:function(u,v){return u+"content:"+v
}},{field:"go_id"})},keyword:{label:"Keyword [KW]",renderer:h({minLength:"2",source:"/hints/keywords/?format=json&limit=10&sort=score&query=",urlfunction:function(u,v){return u+"name:"+v
}},{field:"keyword"})}}};s.sequencesDat={def:"embl",selects:{embl:{label:"EMBL/GenBank/DDBJ",renderer:d()},pir:{label:"PIR",renderer:d()},refseq:{label:"RefSeq",renderer:d()},unigene:{label:"UniGene",renderer:d()}},field:"type"};
s["3DDat"]={def:"pdb",selects:{disprot:{label:"DisProt",renderer:d()},pdb:{label:"PDB",renderer:d()},pdbsum:{label:"PDBsum",renderer:d()},proteinmodelportal:{label:"ProteinModelPortal",renderer:d()},smr:{label:"SMR",renderer:d()}},field:"type"};
s.ppiDat={def:"dip",selects:{biogrid:{label:"BioGrid",renderer:d()},dip:{label:"DIP",renderer:d()},intact:{label:"IntAct",renderer:d()},mint:{label:"MINT",renderer:d()},string:{label:"STRING",renderer:d()}},field:"type"};
s["family-groupDat"]={def:"allergome",selects:{allergome:{label:"Allergome",renderer:d()},cazy:{label:"CAZy",renderer:d()},merops:{label:"MEROPS",renderer:d()},mycoclap:{label:"mycoCLAP",renderer:d()},peroxibase:{label:"PeroxiBase",renderer:d()},pptasedb:{label:"PptaseDB",renderer:d()},rebase:{label:"REBASE",renderer:d()},tcdb:{label:"TCDB",renderer:d()}},field:"type"};
s.ptmDat={def:"unicarbkb",selects:{unicarbkb:{label:"UniCarbKB",renderer:d()},phosphosite:{label:"PhosphoSite",renderer:d()},phossite:{label:"PhosSite",renderer:d()}},field:"type"};
s.polymorphismDat={def:"dbsnp",selects:{dbsnp:{label:"dbSNP",renderer:d()},dmdm:{label:"DMDM",renderer:d()}},field:"type"};
s["2D-GelDat"]={def:"swiss-2dpage",selects:{"compluyeast-2dpage":{label:"COMPLUYEAST-2DPAGE",renderer:d()},"dosac-cobs-2dpage":{label:"DOSAC-COBS-2DPAGE",renderer:d()},ogp:{label:"OGP",renderer:d()},"reproduction-2dpage":{label:"REPRODUCTION-2DPAGE",renderer:d()},"swiss-2dpage":{label:"SWISS-2DPAGE",renderer:d()},"ucd-2dpage":{label:"UCD-2DPAGE",renderer:d()},"world-2dpage":{label:"World-2DPAGE",renderer:d()}},field:"type"};
s.proteomicDat={def:"paxdb",selects:{maxqb:{label:"MaxQB",renderer:d()},paxdb:{label:"PaxDb",renderer:d()},peptideatlas:{label:"PeptideAtlas",renderer:d()},pride:{label:"PRIDE",renderer:d()},promex:{label:"ProMEX",renderer:d()}},field:"type"};
s.ensemblDat={def:"ensembl*",selects:{"ensembl*":{label:"Any",renderer:d()},ensembl:{label:"Ensembl",renderer:d()},ensemblbacteria:{label:"EnsemblBacteria",renderer:d()},ensemblfungi:{label:"EnsemblFungi",renderer:d()},ensemblmetazoa:{label:"EnsemblMetazoa",renderer:d()},ensemblplants:{label:"EnsemblPlants",renderer:d()},ensemblprotists:{label:"EnsemblProtists",renderer:d()}},field:"type"};
s["genome-annotationDat"]={def:"ensemblDat",selects:{ensemblDat:{label:"Ensembl and Ensembl Genomes",renderer:k("ensemblDat")},genecards:{label:"GeneCards",renderer:d(),field:"type"},geneid:{label:"GeneID",renderer:d(),field:"type"},kegg:{label:"KEGG",renderer:d(),field:"type"},patric:{label:"PATRIC",renderer:d(),field:"type"},ucsc:{label:"UCSC",renderer:d(),field:"type"},vectorbase:{label:"VectorBase",renderer:d(),field:"type"}}};
s["organism-specificDat"]={def:"arachnoserver",selects:{arachnoserver:{label:"ArachnoServer",renderer:d()},cgd:{label:"CGD",renderer:d()},conoserver:{label:"ConoServer",renderer:d()},ctd:{label:"CTD",renderer:d()},cygd:{label:"CYGD",renderer:d()},dictybase:{label:"dictyBase",renderer:d()},euhcvdb:{label:"euHCVdb",renderer:d()},echobase:{label:"EchoBASE",renderer:d()},ecogene:{label:"EcoGene",renderer:d()},eupathdb:{label:"EuPathDB",renderer:d()},flybase:{label:"FlyBase",renderer:d()},genefarm:{label:"GeneFarm",renderer:d()},genolist:{label:"GenoList",renderer:d()},gramene:{label:"Gramene",renderer:d()},"h-invdb":{label:"H-InvDB",renderer:d()},hgnc:{label:"HGNC",renderer:d()},hpa:{label:"HPA",renderer:d()},legiolist:{label:"LegioList",renderer:d()},leproma:{label:"Leproma",renderer:d()},maizegdb:{label:"MaizeGDB",renderer:d()},mgi:{label:"MGI",renderer:d()},mim:{label:"MIM",renderer:d()},nextprot:{label:"neXtProt",renderer:d()},orphanet:{label:"Orphanet",renderer:d()},pharmgkb:{label:"PharmGKB",renderer:d()},pombase:{label:"PomBase",renderer:d()},pseudocap:{label:"PseudoCAP",renderer:d()},rgd:{label:"RGD",renderer:d()},sgd:{label:"SGD",renderer:d()},tair:{label:"TAIR",renderer:d()},tuberculist:{label:"TubercuList",renderer:d()},wormbase:{label:"WormBase",renderer:d()},xenbase:{label:"Xenbase",renderer:d()},zfin:{label:"ZFIN",renderer:d()}},field:"type"};
s.PhylogenomicDat={def:"eggnog",selects:{eggnog:{label:"eggNOG",renderer:d()},genetree:{label:"GeneTree",renderer:d()},hogenom:{label:"HOGENOM",renderer:d()},hovergen:{label:"HOVERGEN",renderer:d()},inparanoid:{label:"InParanoid",renderer:d()},ko:{label:"KO",renderer:d()},oma:{label:"OMA",renderer:d()},orthodb:{label:"OrthDB",renderer:d()},phylomedb:{label:"PhylomeDB",renderer:d()},protclustdb:{label:"ProtClustDB",renderer:d()},treefam:{label:"TreeFam",renderer:d()}},field:"type"};
s.enzyAndpathDat={def:"biocyc",selects:{biocyc:{label:"BioCyc",renderer:d()},brenda:{label:"BRENDA",renderer:d()},reactome:{label:"Reactome",renderer:d()},"sabio-rk":{label:"SABIO-RK",renderer:d()},signalink:{label:"SignaLink",renderer:d()},unipathway:{label:"UniPathway",renderer:d()}},field:"type"};
s["family-domainDat"]={def:"hamap",selects:{gene3d:{label:"Gene3D",renderer:d()},hamap:{label:"HAMAP",renderer:d()},interpro:{label:"InterPro",renderer:d()},panther:{label:"PANTHER",renderer:d()},pfam:{label:"Pfam",renderer:d()},pirsf:{label:"PIRSF",renderer:d()},prints:{label:"PRINTS",renderer:d()},prodom:{label:"ProDom",renderer:d()},prosite:{label:"PROSITE",renderer:d()},smart:{label:"SMART",renderer:d()},supfam:{label:"SUPFAM",renderer:d()},tigrfams:{label:"TIGRFAMs",renderer:d()}},field:"type"};
s.protocolDat={def:"dnasu",selects:{dnasu:{label:"DNASU",renderer:d()}},field:"type"};
s.otherDat={def:"bindingdb",selects:{chitars:{label:"ChiTaRS",renderer:d()},evolutionarytrace:{label:"EvolutionaryTrace",renderer:d()},genomernai:{label:"GenomeRNAi",renderer:d()},genewiki:{label:"GeneWiki",renderer:d()},nextbio:{label:"NextBio",renderer:d()},"pmap-cutdb":{label:"PMAP-CutDB",renderer:d()},pro:{label:"PRO",renderer:d()}},field:"type"};
s.chemistryDat={def:"bindingdb",selects:{bindingdb:{label:"BindingDB",renderer:d()},drugbank:{label:"DrugBank",renderer:d()},chembl:{label:"ChEMBL",renderer:d()},guidetopharmacology:{label:"GuidetoPHARMACOLOGY",renderer:d()}},field:"type"};
s["gene-expressionDat"]={def:"arrayexpress",selects:{arrayexpress:{label:"ArrayExpress",renderer:d()},bgee:{label:"Bgee",renderer:d()},cleanex:{label:"CleanEx",renderer:d()},genevestigator:{label:"Genevestigator",renderer:d()}},field:"type"};
var n={"2D-GelDat":"2D gel databases","3DDat":"3D structure databases",enzyAndpathDat:"Enzyme and pathway databases","family-domainDat":"Family and domain databases","family-groupDat":"Protein family/group databases","gene-expressionDat":"Gene Expression databases","genome-annotationDat":"Genome annotation databases","organism-specificDat":"Organism-specific databases",otherDat:"Other databases",PhylogenomicDat:"Phylogenomic databases",ppiDat:"Protein-protein interaction databases",chemistryDat:"Chemistry databases",polymorphismDat:"Polymorphism databases",proteomicDat:"Proteomic databases",protocolsDat:"Protocols and materials databases",ptmDat:"PTM databases",sequencesDat:"Sequence databases"};
s.crossreferences={def:"sequencesDat",selects:{"*":{label:"Any",renderer:l(),field:"type"}}};
(function(){$.each(n,function(u,v){s.crossreferences.selects[u]={label:v,renderer:k(u)}
})})();s.biophysicalProperties={def:"biophysicochemical_properties",selects:{"ann.biophysicochemical_properties":{label:"Any",renderer:o},"ann.absorption":{label:"Absorption",renderer:o},"ann.kinetic":{label:"Kinetics",renderer:o},"ann.ph dependence":{label:"ph dependence",renderer:o},"ann.redox potential":{label:"Redox potential",renderer:o},"ann.temperature dependence":{label:"Temperature dependence",renderer:o}},field:"type"};
s.pathology={def:"ann.disease",selects:{"ann.disease":{label:"Disease",renderer:e},"ann.allergen":{label:"Allergenic properties",renderer:e},"ann.toxic dose":{label:"Toxic dose",renderer:o},"ann.biotechnology":{label:"Biotechnological use",renderer:o},"ann.pharmaceutical":{label:"Pharmaceutical use",renderer:o},"ann.disruption phenotype":{label:"Disruption phenotype",renderer:o,field:"type"},"ann.mutagen":{label:"Mutagenesis",renderer:m}},field:"type"};
s.site={def:"ann.sites",selects:{"ann.sites":{label:"Any",renderer:m},"ann.act_site":{label:"Active site",renderer:m},"ann.metal":{label:"Metal binding",renderer:m},"ann.binding":{label:"Binding site",renderer:m},"ann.site":{label:"Other",renderer:m}},field:"type"};
s.molProcessing={def:"ann.molecule_processing",selects:{"ann.molecule_processing":{label:"Any",renderer:m},"ann.chain":{label:"Chain",renderer:m},"ann.init_met":{label:"Initiator methionine",renderer:m},"ann.peptide":{label:"Peptide",renderer:m},"ann.signal":{label:"Signal peptide",renderer:m},"ann.propep":{label:"Propeptide",renderer:m},"ann.transit":{label:"Transit peptide",renderer:m}},field:"type"};
s.expression={def:"ann.developmental stage",selects:{"ann.developmental stage":{label:"Developmental stage",renderer:o},"ann.induction":{label:"Induction",renderer:e},"ann.tissue specificity":{label:"Tissue specificity",renderer:o}},field:"type"};
s.interaction={def:"interactor",selects:{interactor:{label:"Binary Interaction",renderer:l({optional:"true",field:"interactor"})},"ann.subunit":{label:"Subunit structure",renderer:e,field:"type"}}};
s.secondaryStruct={def:"secstruct",selects:{"ann.secstruct":{label:"Any",renderer:i("length")},"ann.helix":{label:"Helix",renderer:i("length")},"ann.turn":{label:"Turn",renderer:i("length")},"ann.strand":{label:"Beta strand",renderer:i("length")}},field:"type"};
s.struct={def:"secondaryStruct",selects:{_struct:{label:"3D structure",renderer:k(s.yesno({field:"struct"}),false,{noField:true})},secondaryStruct:{label:"Secondary structure",renderer:k("secondaryStruct")}}};
s.dateOf={def:"created",selects:{created:{label:"Date Of Creation",renderer:a("date")},modified:{label:"Date Of last entry modification",renderer:a("date")},sequence_modified:{label:"Date Of last sequence modification",renderer:a("date")}}};
s.ptm={def:"ann.ptm",selects:{"ann.ptm":{label:"Post-translational modification [CC]",renderer:e,field:"type"},"ann.mod_res":{label:"Modified residue [FT]",renderer:m,field:"type"},"ann.lipid":{label:"Lipidation [FT]",renderer:m,field:"type"},"ann.carbohyd":{label:"Glycosylation [FT]",renderer:m,field:"type"},"ann.disulfid":{label:"Disulfide bond [FT]",renderer:m,field:"type"},"ann.crosslnk":{label:"Cross-link [FT]",renderer:m,field:"type"},molecule_processing:{label:"Molecule Processing",renderer:k("molProcessing")}}};
s["function"]={def:"ann.function",selects:{ec:{label:"Enzyme classification [EC]",renderer:h({minLength:"2",source:"/hints/enzymes/?format=json&limit=10&sort=score&query=",urlfunction:function(u,v){return u+v
}},{field:"ec"})},biophysicochemical_properties:{label:"Biophysicochemical properties",renderer:k("biophysicalProperties")},"ann.catalytic activity":{label:"Catalytic activity",renderer:o,field:"type"},"ann.cofactor":{label:"Cofactor",renderer:e,field:"type"},"ann.enzyme regulation":{label:"Enzyme regulation",renderer:e,field:"type"},"ann.function":{label:"Function [CC]",renderer:e,field:"type"},sites:{label:"Sites",renderer:k("site")},"ann.ca_bind":{label:"Calcium binding",renderer:m,field:"type"},"ann.dna_bind":{label:"DNA binding",renderer:m,field:"type"},"ann.np_bind":{label:"Nucleotide binding",renderer:m,field:"type"},"ann.pathway":{label:"Pathway",renderer:o,field:"type"}}};
s.familyDomains={def:"ann.positional domain",selects:{"ann.positional domain":{label:"Domain [FT]",renderer:m,field:"type"},"ann.non-positional domain":{label:"Domain comments [CC]",renderer:e,field:"type"},family:{label:"Protein family",renderer:l({field:"family",optional:"true"})},"ann.coiled":{label:"Coiled-coil",renderer:m,field:"type"},"ann.compbias":{label:"Compositional bias",renderer:c,field:"type"},"ann.motif":{label:"Motif",renderer:m,field:"type"},"ann.region":{label:"Region",renderer:m,field:"type"},"ann.repeat":{label:"Repeat",renderer:m,field:"type"},"ann.similarity":{label:"Sequence similarities",renderer:e,field:"type"},"ann.zn_fing":{label:"Zinc finger",renderer:m,field:"type"}}};
s.altProducts={def:"ann.alternative products",selects:{"ann.alternative products":{label:"Any",renderer:e},"ann.alternative promoter usage":{label:"Alternative promoter usage",renderer:e},"ann.alternative splicing":{label:"Alternative splicing",renderer:e},"ann.alternative initiation":{label:"Alternative initiation",renderer:e},"ann.ribosomal frameshifting":{label:"Ribosomal frameshifting",renderer:e}},field:"type"};
s.seqCaution={def:"ann.sequence caution",selects:{"ann.sequence caution":{label:"Any",renderer:o,field:"type"},"ann.frameshift":{label:"Frameshift",renderer:o,field:"type"},"ann.erroneous initiation":{label:"Erroneous initiation",renderer:o,field:"type"},"ann.erroneous termination":{label:"Erroneous termination",renderer:o,field:"type"},"ann.erroneous gene model prediction":{label:"Erroneous gene model prediction",renderer:o,field:"type"},"ann.erroneous translation":{label:"Erroneous translation",renderer:o,field:"type"},"ann.miscellaneous discrepancy":{label:"Miscellaneous discrepancy",renderer:o,field:"type"}}};
s.natVar={def:"",selects:{"":{label:"Any",renderer:c},variant:{label:"Natural variant",renderer:c},var_seq:{label:"Alternative sequence",renderer:c}}};
s.sequence={def:"alternative products",selects:{mass:{label:"Mass (Da)",renderer:i("mass","Mass range")},"seq-length":{label:"Sequence length",renderer:i("length")},"alternative products":{label:"Alternative products",renderer:k("altProducts")},"ann.caution":{label:"Caution",renderer:o,field:"type"},"sequence caution":{label:"Sequence caution",renderer:k("seqCaution"),field:"type"},"ann.mass":{label:"Mass spectrometry",renderer:o,field:"type"},"ann.polymorphism":{label:"Polymorphism",renderer:o,field:"type"},"ann.rna editing":{label:"RNA Editing",renderer:e,field:"type"},"ann.natural_variations":{label:"Natural variations",renderer:k("natVar"),field:"type"},"ann.non_std":{label:"Non-standard residue",renderer:m,field:"type"},"ann.non-cons":{label:"Non-adjacent residues",renderer:c,field:"type"},"ann.conflict":{label:"Sequence conflict",renderer:c,field:"type"},"ann.unsure":{label:"Sequence uncertainty",renderer:c,field:"type"},fragment:{label:"Fragment",renderer:k(s.yesno({field:"fragment"}))},organelle:{label:"Encoded in",renderer:h({minLength:"2",source:["Mitochondrion","Plastid","Chloroplast","Cyanelle","Apicoplast","Organellar chromatophore","Non-photosynthetic plastid","Nucleomorph","Hydrogenosome"]},{field:"organelle",optional:"true"})},precursor:{label:"Precursor",renderer:k(s.yesno({field:"precursor"}))},sequencefrom:{label:"Sequence from... [RC]",renderer:k("sequencefrom")}}};
s.existence={def:"evidence at protein level",selects:{"evidence at protein level":{label:"Evidence at protein level"},"evidence at transcript level":{label:"Evidence at transcript level"},"inferred from homology":{label:"Inferred from homology"},predicted:{label:"Predicted"},uncertain:{label:"Uncertain"}},field:"existence"};
s.rank={def:"evidence at protein level",selects:{superkingdom:{label:"SuperKingdom"},kingdom:{label:"Kingdom"},subkingdom:{label:"Subkingdom"},superphylum:{label:"Superphylum"},phylum:{label:"Phylum"},subphylum:{label:"Subphylum"},superclass:{label:"Superclass"},"class":{label:"Class"},subclass:{label:"Subclass"},infraclass:{label:"Infraclass"},superorder:{label:"Superorder"},order:{label:"Order"},infraorder:{label:"Infraorder"},parvorder:{label:"Parvorder"},superfamily:{label:"Superfamily"},family:{label:"Family"},subfamily:{label:"Subfamily"},tribe:{label:"Tribe"},subtribe:{label:"Subtribe"},genus:{label:"Genus"},subgenus:{label:"Subgenus"},species_group:{label:"Species group"},species_subgroup:{label:"Species subgroup"},species:{label:"Species"},subspecies:{label:"Subspecies"},varietas:{label:"Varietas"},forma:{label:"Forma"},none:{label:"None"}},field:"rank"};
s.jobs={def:"align",selects:{align:{label:"Align",renderer:l({field:"job",label:"Identifier"})},blast:{label:"Blast",renderer:l({field:"job",label:"Identifier"})},yourlist:{label:"Upload-list",renderer:l({field:"yourlist",label:"Identifier"})},job:{label:"Job",renderer:l({field:"job",label:"Identifier"})}}};
s.locations={def:"ann.location",selects:{"ann.location":{label:"Subcellular location [CC]",renderer:e},"ann.topo_dom":{label:"Topological domain",renderer:m},"ann.transmem":{label:"Transmembrane",renderer:m},"ann.intramem":{label:"Intramembrane",renderer:m}},field:"type"};
s.proteomes={def:"proteome",selects:{proteome:{label:"Proteome ID",renderer:d({field:"proteome"})},proteomecomponent:{label:"Proteome Component",renderer:l({field:"proteomecomponent"})}}};
this.adv_program={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},teammember:{label:"Program team member",renderer:l({field:"teammember"})}}};
this.adv_uniprot={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},accession:{label:"UniProt AC",renderer:l({field:"accession"})},mnemonic:{label:"Entry name [ID]",renderer:l({field:"mnemonic"})},name:{label:"Protein name [DE]",renderer:l({field:"name"})},gene:{label:"Gene name [GN]",renderer:l({field:"gene"})},organism:{label:"Organism [OS]",renderer:h({minLength:"2",source:"/hints/organism/?format=json&limit=100&sort=score&query=",urlfunction:function(u,v){return u+v
}},{field:"organism"})},taxonomy:{label:"Taxonomy [OC]",renderer:h({minLength:"2",source:"/hints/taxonomy/?format=json&limit=100&sort=score&query=",urlfunction:function(u,v){return u+v
}},{field:"taxonomy"})},host:{label:"Virus host",renderer:h({minLength:"2",source:"/hints/hosts/?format=json&limit=100&sort=score&query=",urlfunction:function(u,v){return u+v
}},{field:"host"})},existence:{label:"Protein Existence [PE]",renderer:k("existence",false,{noField:true})},"function":{label:"Function",renderer:k("function")},location:{label:"Subcellular location",renderer:k("locations")},pathology:{label:"Pathology & Biotech",renderer:k("pathology")},ptm:{label:"PTM/Processing",renderer:k("ptm")},expression:{label:"Expression",renderer:k("expression")},interaction:{label:"Interaction",renderer:k("interaction")},structure:{label:"Structure",renderer:k("struct")},seq:{label:"Sequence",renderer:k("sequence")},familyAndDomains:{label:"Family and Domains",renderer:k("familyDomains")},crossref:{label:"Cross-references",renderer:k("crossreferences")},web:{label:"Web resource",renderer:l({field:"web",optional:"true"})},date:{label:"Date Of",renderer:k("dateOf")},ontology:{label:"Ontology",renderer:k("ontology")},citation:{label:"Literature Citation",renderer:r()},proteomes:{label:"Proteomes",renderer:k("proteomes")},scope:{label:"Cited For",renderer:l({field:"scope"})},reviewed:{label:"Reviewed",renderer:k(s.yesno({field:"reviewed"}),false,{noField:true})},active:{label:"Active",renderer:k(s.yesno({field:"active"}),false,{noField:true})},basket:{label:"Basket",renderer:l({field:"basket"})},cluster:{label:"UniRef ID",renderer:d({field:"cluster"})},sequence:{label:"UniParc ID",renderer:d({field:"sequence"})},jobs:{label:"Jobs (last 7 days)",renderer:k("jobs")}},path:{ec:["function","ec"],biophysicochemical_properties:["function","biophysicochemical_properties","ann.biophysicochemical_properties"],absorption:["function","biophysicochemical_properties","ann.absorption"],kinetic:["function","biophysicochemical_properties","ann.kinetic"],"ph dependence":["function","biophysicochemical_properties","ann.ph dependence"],"redox potential":["function","biophysicochemical_properties","ann.redox potential"],"temperature dependence":["function","biophysicochemical_properties","ann.temperature dependence"],"catalytic activity":["function","ann.catalytic activity"],cofactor:["function","ann.cofactor"],"enzyme regulation":["function","ann.enzyme regulation"],sites:["function","sites","ann.sites"],act_site:["function","sites","ann.act_site"],metal:["function","sites","ann.metal"],binding:["function","sites","ann.binding"],site:["function","sites","ann.site"],"function":["function","ann.function"],ca_bind:["function","ann.ca_bind"],dna_bind:["function","ann.dna_bind"],np_bind:["function","ann.np_bind"],location:["location","ann.location"],topo_dom:["location","ann.topo_dom"],transmem:["location","ann.transmem"],intramem:["location","ann.intramem"],disease:["pathology","ann.disease"],allergen:["pathology","ann.allergen"],"toxic dose":["pathology","ann.toxic dose"],biotechnology:["pathology","ann.biotechnology"],pharmaceutical:["pathology","ann.pharmaceutical"],mutagen:["pathology","ann.mutagen"],"disruption phenotype":["pathology","ann.disruption phenotype"],ptm:["ptm","ann.ptm"],mod_res:["ptm","ann.mod_res"],lipid:["ptm","ann.lipid"],carbohyd:["ptm","ann.carbohyd"],disulfid:["ptm","ann.disulfid"],crosslnk:["ptm","ann.crosslnk"],molecule_processing:["ptm","molecule_processing","ann.molecule_processing"],chain:["ptm","molecule_processing","ann.chain"],init_met:["ptm","molecule_processing","ann.init_met"],peptide:["ptm","molecule_processing","ann.peptide"],signal:["ptm","molecule_processing","ann.signal"],propep:["ptm","molecule_processing","ann.propep"],transit:["ptm","molecule_processing","ann.transit"],"developmental stage":["expression","ann.developmental stage"],induction:["expression","ann.induction"],"tissue specificity":["expression","ann.tissue specificity"],interactor:["interaction","interactor"],pathway:["interaction","ann.pathway"],subunit:["interaction","ann.subunit"],secstruct:["structure","secondaryStruct","ann.secstruct"],struct:["structure","_struct"],helix:["structure","secondaryStruct","ann.helix"],turn:["structure","secondaryStruct","ann.turn"],organelle:["seq","organelle"],"alternative products":["seq","alternative products","ann.alternative products"],"alternative promoter usage":["seq","alternative products","ann.alternative promoter usage"],"alternative splicing":["seq","alternative products","ann.alternative splicing"],"alternative initiation":["seq","alternative products","ann.alternative initiation"],"ribosomal frameshifting":["seq","alternative products","ann.ribosomal frameshifting"],strand:["structure","ann.strand"],caution:["seq","ann.caution"],fragment:["seq","fragment"],"sequence caution":["seq","sequence caution","ann.sequence caution"],frameshift:["seq","sequence caution","ann.frameshift"],"erroneous initiation":["seq","sequence caution","ann.erroneous initiation"],"erroneous termination":["seq","sequence caution","ann.erroneous termination"],"erroneous gene model prediction":["seq","sequence caution","ann.erroneous gene model prediction"],"erroneous translation":["seq","sequence caution","ann.erroneous translation"],"miscellaneous discrepancy":["seq","sequence caution","ann.miscellaneous discrepancy"],mass:["seq","ann.mass"],polymorphism:["seq","ann.polymorphism"],"rna editing":["seq","ann.rna editing"],similarity:["familyAndDomains","ann.similarity"],natural_variations:["seq","ann.natural_variations"],mass:["seq","mass"],"seq-length":["seq","seq-length"],non_std:["seq","ann.non_std"],"non-cons":["seq","ann.cons"],precursor:["seq","precursor"],conflict:["seq","ann.conflict"],unsure:["seq","ann.unsure"],"positional domain":["familyAndDomains","ann.positional domain"],"non-positional domain":["familyAndDomains","ann.non-positional domain"],family:["familyAndDomains","family"],zn_fing:["familyAndDomains","ann.zn_fing"],coiled:["familyAndDomains","ann.coiled"],compbias:["familyAndDomains","ann.compbias"],motif:["familyAndDomains","ann.motif"],region:["familyAndDomains","ann.region"],repeat:["familyAndDomains","ann.repeat"],created:["date","created"],modified:["date","modified"],sequence_modified:["date","sequence_modified"],yourlist:["jobs","yourlist"],align:["jobs","align"],blast:["jobs","blast"],job:["jobs","job"],go:["ontology","go"],go_id:["ontology","go_id"],keyword:["ontology","keyword"],proteomecomponent:["proteomes","proteomecomponent"],proteome:["proteomes","proteome"]}};
this.adv_uniparc={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},database:{label:"Database",renderer:l({field:"database"})},taxonomy:{label:"Taxonomy [OC]",renderer:h({minLength:"2",source:"/hints/taxonomy/?format=json&limit=100&sort=score&query=",urlfunction:function(u,v){return u+v
}},{field:"taxonomy"})},checksum:{label:"Checksum (CRC64/MD5)",renderer:l({field:"checksum"})},id:{label:"UniParc ID",renderer:d({field:"id"})},uniprot:{label:"UniProtKB AC",renderer:d({field:"uniprot"})},isoform:{label:"UniProtKB isofom ID",renderer:d({field:"isoform"})},basket:{label:"Basket",renderer:l({field:"basket"})},cluster:{label:"UniRef ID",renderer:d({field:"cluster"})}}};
this.adv_uniref={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},name:{label:"Cluster name",renderer:l({field:"name"})},taxonomy:{label:"Taxonomy [OC]",renderer:h({minLength:"2",source:"/hints/taxonomy/?format=json&limit=100&sort=score&query=",urlfunction:function(u,v){return u+v
}},{field:"taxonomy"})},identity:{label:"Sequence Identity",renderer:f},count:{label:"Cluster size",renderer:i("count")},"seq-length":{label:"Sequence length",renderer:i("length")},published:{label:"Date published",renderer:a("date")},id:{label:"UniRef ID",renderer:d({field:"id"})},member:{label:"UniProtKB ID/AC",renderer:d({field:"member"})},member_:{label:"UniParc ID",renderer:d({field:"member"})},basket:{label:"Basket",renderer:l({field:"basket"})}}};
this.adv_proteomes={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},reference:{label:"Reference Proteome",renderer:k(s.yesno({field:"reference"}),false,{noField:true})},id:{label:"Proteome ID",renderer:d({field:"id"})},taxonomy:{label:"Taxonomy [OC]",renderer:h({minLength:"2",source:"/filterhints/taxonomy/?format=json&limit=100&sort=score&service=proteomes&query=",urlfunction:function(u,v){return u
}},{field:"taxonomy"})},organism:{label:"Organism [OS]",renderer:h({minLength:"2",source:"/hints/proteomesorganisms/?format=json&limit=100&sort=score&fil=complete:yes&query=",urlfunction:function(u,v){return u+v
}},{field:"organism"})}}};this.adv_keywords={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},name:{label:"Name",renderer:h({minLength:"2",source:"/hints/keyword/?format=json&limit=100&sort=score&query=",urlfunction:function(u,v){return u+v
}},{field:"name"})},id:{label:"Keyword [AC]",renderer:l({field:"id"})}}};this.adv_locations={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},name:{label:"Name",renderer:h({minLength:"2",source:"/hints/locations/?format=json&limit=100&sort=score&query=",urlfunction:function(u,v){return u+v
}},{field:"name"})},id:{label:"Location [AC]",renderer:l()}}};this.adv_database={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},name:{label:"Name",renderer:l({field:"name"})},abbreviation:{label:"Abbreviation",renderer:l({field:"abbreviation"})},id:{label:"Location [AC]",renderer:l({field:"id"})}}};
(function(v){var u={def:"",selects:{},field:"category"};$.each(n,function(w,x){if(u.def===""){u.def=x
}u.selects[x]={label:x}});v.adv_database.selects.category={label:"Category",renderer:k(u,false,{noField:true})}
})(this);this.adv_taxonomy={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},scientific:{label:"Scientific Name",renderer:l({field:"scientific"})},common:{label:"Common name",renderer:l({field:"common"})},mnemonic:{label:"Mnemonic (organism code)",renderer:l({field:"menmonic"})},rank:{label:"Rank",renderer:k("rank",{noField:true})},strain:{label:"Strain",renderer:l({field:"strain"})},host:{label:"Virus host",renderer:h({minLength:"2",source:"/hints/hosts/?format=json&limit=100&sort=score&query=",urlfunction:function(u,v){return u+v
}},{field:"host"})},linked:{label:"External info (yes/no)",renderer:k(s.yesno({field:"linked"}),{noField:true})},id:{label:"Taxon ID",renderer:l({field:"id"})}},path:{}};
this.adv_citations={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},title:{label:"Title",renderer:l({field:"title"})},author:{label:"Author",renderer:l({field:"author"})},journal:{label:"Journal",renderer:l({field:"journal"})},published:{label:"Year published",renderer:l({field:"published"})},id:{label:"PubMed ID",renderer:l({field:"id"})},doi:{label:"DOI",renderer:l({field:"doi"})}}};
this.adv_diseases={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},name:{label:"Name",renderer:l({field:"name"})},id:{label:"Disease [AC]",renderer:l({field:"id"})}}};
this.adv_help={def:"content.search",selects:{"content.search":{label:"All",renderer:l()},section:{label:"Section",renderer:b}}};
this.get=function(u){return s[u]}};jQuery.fn.reverse=[].reverse;var uniprot={};var __bind=function(a,b){return function(){return a.apply(b,arguments)
}};uniprot.namespace="";uniprot.jobid="";uniprot.resultsize=0;uniprot.basket=new Basket();
uniprot.checkboxes=null;uniprot.searchbar=new searchbar();uniprot.utils=new Utils();
uniprot.pageLoadFunctions=new PageLoadFunctions();uniprot.blast=new Blast();uniprot.align=new Align();
uniprot.evidence=new Evidence();uniprot.entryViews=new EntryViews();uniprot.entryTags=new EntryTags();
uniprot.feedback=new Feedback();uniprot.colNames=new ColumnNames();uniprot.builders=new builders();
uniprot.qGenerator=new qGenerator();uniprot.advSearch=new advSearch(uniprot.builders);
uniprot.advSearchUI=new AdvSearchUI(uniprot.advSearch);uniprot.results=new results();
uniprot.qParser=new QueryParser();uniprot.tooltipConfig={alignTo:"element",offset:[0.5,1],content:"",show:function(f,b){$("[id^='tooltipsy']").hide();
var a=this;var d=function(){$(f.target).trigger(a.hideEvent);$(document).off("scroll",d)
};var c=function(e){var h=e.target;var g=$(".tooltipsy:visible");$.each(g,function(j,k){k=$(k);
var i=(k.length>0&&!k.is(h)&&k.has(h).length===0);if(i){$(f.target).trigger(a.hideEvent);
$(document).off("click",c);return false}})};$(document).on("click",c);$(document).on("scroll",d);
a.hide=function(h,g){$(document).off("scroll",d);$(document).off("click",c);g.fadeOut(100)
};b.fadeIn(100)},hideEvent:"hideTooltip",className:"tooltipsy",css:{}};var onRdyFn=uniprot.pageLoadFunctions.addFunction;
var newEl=uniprot.utils.newElement;var hideShortShowLong=uniprot.colNames.hideShortShowLong;
var hideLongShowShort=uniprot.colNames.hideLongShowShort;onRdyFn(function(){var a=$("#query");
if(a.length===0){return}a.val($("#topQuery").val())});onRdyFn(uniprot.evidence.addEventListeners);
onRdyFn(uniprot.basket.init);$(document).ready(uniprot.pageLoadFunctions.applyFunctions);
var checkFunction=function(c,d,a){var b=true;$.each(c,function(f,g){var e=(g&&!g.is(d)&&g.has(d).length===0);
if(!e){b=false;return false}});if(b){a()}};$(document).mouseup(function(b){var a=$(".options-menu");
if(!a.is(b.target)&&a.has(b.target).length===0){$(".options-menu").attr("style","")
}});$(document).keypress(function(b){if(b.keyCode==27){if($("#basket-contents").is(":visible")){$("#closeBasket").click()
}if($("#query-builder-container").is(":visible")){$(".closeAdvanceSearch").click()
}$("#basket-download-options").hide();$(".lightbox").hide();var a=$("#download-options-menu");
if(a.is(":visible")){a.hide();$("#resultActionButtons > li > a.download").removeClass("pressed")
}}});$(document).ready(function(){$(".videoHelp").click(function(){$("#videoHelpContainer").parent().toggle();
return false});$("#closevideoHelpContainer").click(function(a){$("#videoHelpContainer").parent().hide();
return false})});onRdyFn(function(){$("#scrolltotop").click(function(){console.log("got here");
$("html, body").animate({scrollTop:0},"slow");return false})});onRdyFn(function(){var c=document.createElement("link"),b=(/MSIE/gi.test(navigator.userAgent)),a=document.createElement("link");
c.type="text/css";c.rel="stylesheet";c.href=(b)?"/css/ie_fixes.css":(BASE+"non_ie_fixes-compr.css");
document.getElementsByTagName("head")[0].appendChild(c);a.type="text/css";a.rel="stylesheet";
a.href=BASE+"print.css";a.media="print";document.getElementsByTagName("head")[0].appendChild(a)
},"low");onRdyFn(function(){var a={hideEvent:"mouseleave"};$(".tooltipped").tooltipsy($.extend({},uniprot.tooltipConfig,a));
a={showEvent:"click"};$(".tooltipped-click").each(function(b,c){var c=$(c);var d=$.extend({},uniprot.tooltipConfig,a);
d.content=function(f,g){var e=f.find("span.toolTipContent");return e.text()};if(c.hasClass("mouseOver")){d.showEvent="mouseenter";
d.hideEvent="mouseleave"}c.tooltipsy(d)})});var mapping_data={};function makeFromDatabase(){var b=$("#fromDatabase");
b.html("");var a=uniprot.builders.optGroupDropDown(mapping_data,b,{label:"From"});
a.attr("id","from-database");a.attr("name","from");a.find("optgroup").each(function(c,d){var d=$(d);
if(d.attr("label")==="UniProt"){uniprot.utils.insertBefore("option",$((d.children("option"))[0]),{value:"ACC+ID"},"UniProtKB AC/ID");
return false}});$("#from-database").val("ACC+ID")}function makeToDatabase(){var b=$("#toDatabase");
b.html("");var a=uniprot.builders.optGroupDropDown(mapping_data,b,{label:"To"});a.attr("id","to-database");
a.attr("name","to");a.find("optgroup").each(function(c,d){var d=$(d);if(d.attr("label")==="UniProt"){uniprot.utils.insertBefore("option",$((d.children("option"))[0]),{value:"ACC"},"UniProtKB");
d.parent().val("ACC");return false}})}function fromDatabaseChange(){var a=$(this).val();
if(a!=="ACC+ID"){$("#to-database > optgroup").each(function(b,c){var d=$(c);if(d.attr("label")!=="UniProt"){d.remove()
}else{if(a!=="UPARC"&&a!=="NF50"&&a!=="NF90"&&a!=="NF100"){d.children("option").each(function(e,f){f=$(f);
if(f.attr("value")!=="ACC"){f.remove()}})}}})}else{makeToDatabase()}}var resultCheckBoxes=(function(){function d(){this.initSelectAll=__bind(this.initSelectAll,this);
var f=$("input.basket-item");if(f.length===0){return}else{e.call(this,f)}}d.prototype.initSelectAll=function(i,h){var g=function(n,o){var m=$(this);
if(o=="show"){m.show();uniprot.cookie.save_tmp("allSelected",true,uniprot.namespace)
}else{m.hide();uniprot.cookie.save_tmp("allSelected",false,uniprot.namespace)}};var l=function(m){$("#pageSelectMessage").hide();
$("#selectAllStatus").hide();$("#select-pageItemsCount").html(0);if($("#selectAll-resultSet").is(":checked")){$("#selectAll-resultSet").prop("checked",false).change()
}else{$("input.basket-item").prop("checked",false).trigger("change",true);$("#AllSelectMessage").trigger("toggle","hide")
}};var k=function(m){$("#selectAll-resultSet").prop("checked",false);$("#AllSelectMessage").trigger("toggle","hide");
$("#pageSelectMessage").show();$("#select-pageItemsCount").html($("input.basket-item").length);
$("#clearSelection").show();$("#select-PageItemsLink").hide();$("tr.selectAllStatus").show()
};var j=function(n){if($(this).is(":checked")){var m=$("input.basket-item").prop("checked",true).trigger("change",true);
$("#selectAllStatus").show();$("#AllSelectMessage").trigger("toggle","show");if($("td.checkboxColumn").length<i){$("#clearSelection").hide();
$("#select-PageItemsLink").show()}else{$("#clearSelection").show();$("#select-PageItemsLink").hide()
}$("#pageSelectMessage").hide()}else{$("#selectAllStatus").hide();$("input.basket-item").prop("checked",false).trigger("change",true);
$("#AllSelectMessage").trigger("toggle","hide")}};var f=function(){var m=uniprot.cookie.load("allSelected");
if(m&&m==="true"){$("#selectAll-resultSet").prop("checked",true).change()}};$("#select-resultCount").html(h);
$("#selectAll-resultSet").on("change",j);$("#select-PageItemsLink").click(k);$("#clearSelection").click(l);
$("#AllSelectMessage").bind("toggle",g);f.call(this)};var e=function(f){f.filter(":checked").each(function(){$(this).parent().parent().addClass("highlighted")
});f.change(function(h,g){g=g||false;if($(this).is(":checked")){$.event.trigger({type:d.prototype.SELECT,id:$(this).attr("id"),noPropogate:g,element:h.target})
}else{$.event.trigger({type:d.prototype.UNSELECT,noPropogate:g,element:h.target})
}});$(document).on(this.SELECT,c);$(document).on(this.UNSELECT,c);$(document).on(this.SELECT,a);
$(document).on(this.UNSELECT,b);setUnSetActionButtons()};var c=function(f){if(f.type===d.prototype.SELECT){$(f.element).parent().parent().addClass("highlighted")
}else{if(f.type===d.prototype.UNSELECT){$(f.element).parent().parent().removeClass("highlighted")
}}};var a=function(g,i){if(g.type!==d.prototype.SELECT||g.noPropogate){return}var h=$("input.basket-item");
var f=$("input.basket-item:checked").length;if(f===h.length){$("#select-PageItemsLink").click()
}else{$("#selectAll-resultSet").attr("checked",false);$("#pageSelectMessage").show();
$("#select-pageItemsCount").html(f);$("#clearSelection").show();$("#select-PageItemsLink").hide();
$("input#download-selected").removeAttr("disabled");$("tr#selectAllStatus").show()
}};var b=function(g){if(g.type!==d.prototype.UNSELECT||g.noPropogate){return}$("#selectAll-resultSet").attr("checked",false);
var f=$("input.basket-item:checked").length;if(f>0){$("#pageSelectMessage").show();
$("#clearSelection").show();$("#select-PageItemsLink").hide();$("#select-pageItemsCount").html(f);
$("tr#selectAllStatus").show();$("#AllSelectMessage").trigger("toggle","hide")}else{$("#clearSelection").click()
}};d.prototype.SELECT="selectCheckBox";d.prototype.UNSELECT="unselectCheckBox";return d
})();function DownloadCompare(a){$("a#download-go").click(function(){var b=$("#downloadCompare");
var c=$("input:radio[name=download-entries]:checked").val();b.attr("action",b.attr("action")+"."+$("select#download-format").val());
if(c==="all"){b.append('<input type="hidden" name="version" value="*"/>')}else{$(".basket-item:checked").each(function(e,f){var d=$(f).attr("id").split("_")[2];
b.append('<input type="hidden" name="version" value="'+d+'"/>')})}b.submit();return false
})}function downloadResultEntries(c){var b=function(k,i,h){var g=$("#downloadForm");
$("#selectedQuery").val(i);if("all"===h){$("#selectedForce").val("yes")}if("canonical"===k){$("#selectedFormat").val("fasta");
$("#selectedInclude").val("false")}else{if("isoform"===k){$("#selectedFormat").val("fasta");
$("#selectedInclude").val("yes")}else{if("mappingTable"===k){$("#selectedFormat").val("tab");
if(uniprot.columns!="null"){var j=uniprot.columns.split(",");g.find("input[name=columns]").val(j[0]+","+j[1])
}}else{$("#selectedFormat").val(k)}}}g.submit()};var a=function(h){var j="";if(h==="all"){j=c
}else{if(h==="selected"){var g=$("#AllSelectMessage").is(":visible");if(g){j=c}else{var j="";
var i=$(".basket-item:checked");i.each(function(k,l){j=j+"id:"+$(l).attr("id").split("checkbox_")[1];
if(k!==i.length-1){j=j+" OR "}});j=j.trim()}}}return j};var f=$("input:radio[name=menu-options]:checked").val();
var e=$("select#format").val();if("fasts"===e){var d="selected"===f?a(f):"";if(d!=""){$.download("/mapping/"+uniprot.jobid+".fasts")
}else{$.download("/mapping/"+uniprot.jobid+".fasts",{query:d})}}else{if(f!==undefined&&f!==""){uniprot.cookie.save(uniprot.namespace+"-results-download",e,uniprot.namespace);
b(e,a(f),f)}}return false}onRdyFn(function(){var a=$("#uniprot_simple");if(a.length==1){var b=function(h,g){var i="";
var f=h.split("+");$.each(f,function(j,k){if(j===f.length-1){i=i+"category:"+k}else{i=i+"category:"+k+"%20AND%20"
}});i=BASE+"colheaders/?format=json&query="+i;$.getJSON(i,function(j){c(j,g)})};var c=function(h,g){g.html("");
newEl("h2",g,{style:"text-transform: none;"},h.header);var f=newEl("table",g,{"class":"grid"});
$.each(h.table,function(i,j){var k=newEl("tr",f,{});if(i===0){newEl("th",k,{},j.name);
newEl("th",k,{},j.value)}else{newEl("td",k,{},j.name);newEl("td",k,{},j.value)}});
if(!g.is(":visible")){g.show()}$("html, body").animate({scrollTop:g.offset().top},0)
};var e=function(h,g){var f=$("#configurable_columns");if(f.is(":visible")){f.hide()
}b(h,$("#simpleColumns"));return false};var d=function(h,g){var f=$("#simpleColumns");
if(f.is(":visible")){f.toggle()}b(h,$("#configurable_columns"));return false};$("#uniprot_simple").click(function(){e("uniprotkb+simpleCols",$("#simpleColumns"))
});$("#uniprot_config_general").click(function(){d("uniprotkb+configurable+comments",$("#configurable_columns"))
});$("#uniprot_config_features").click(function(){d("uniprotkb+configurable+features",$("#configurable_columns"))
});$("#uniparc_simple").click(function(){e("uniparc+simpleCols",$("#simpleColumns"))
});$("#uniref_simple").click(function(){e("uniref+simpleCols",$("#simpleColumns"))
});$("#blast_simple").click(function(){e("blast+simpleCols",$("#simpleColumns"))});
$("#blast_config_general").click(function(){d("blast+configurable+comments",$("#configurable_columns"))
});$("#blast_config_features").click(function(){d("blast+configurable+features",$("#configurable_columns"))
})}});var LoadingSuggestions=function(){var c=function(f){$(this).hide();$.each(e,function(g,h){if(g>=2){$(h).hide()
}});a.one("click",d);a.show();return false};var d=function(g){$(this).hide();e.show();
var f=$("a#lessSuggestions");f.one("click",c);f.show();return false};var b=$("#topsuggestions");
var a=b.find("a#moreSuggestions");var e=b.find("li");if(a.length>0){$.each(e,function(f,g){if(f<=1){$(g).show()
}else{return false}});if(e.length>2){a.show();b.on("hover",function(f){b.attr("style","border-top: thin dotted grey")
});a.one("click",d)}}else{e.show()}};function CustomizeColumns(u){u=u||{};u.view=u.view||false;
u.program=u.program||"";var w={uniprot:[{id:"id",label:"Entry"}],"uniprot-blast":[{id:"id",label:"Entry"}],"uniparc-blast":[{id:"id",label:"Entry"}],"uniref-blast":[{id:"blastAlignment",label:"Alignment overview"}],uniref:[{id:"id",label:"Cluster ID"}],uniparc:[{id:"id",label:"Entry"}],"uniparc-view":[{id:"database",label:"Database"},{id:"id",label:"Identifier"}]};
var s=function(){e();$("#customizeColumns input:checked").attr("checked",false);var x=i();
if(x.length===0){l()}else{$.each(x,function(z,A){var y=A.replace(/\(/,"_8_").replace(/\)/,"_9_").replace(/ /,"_")+"-column-input";
var B=$("#"+y);if(B.length>0){B.prop("checked",true);if($("."+y+"-selected").length===0){t(B)
}}})}r();if(uniprot.forcedColumns){d();$("#forcedColumnsArea").show()}};var d=function(){var x=$.grep(uniprot.forcedColumns,function(z,y){z=z.replaceAll("\\(","_8_").replaceAll("\\)","_9_");
return $("#"+z+"-column-input-selected").length==0&&$("#"+z+"-column-input").length!=0
});$.each(x,function(z,A){A=A.replaceAll("\\(","_8_").replaceAll("\\)","_9_");var y=g(A,b($("#"+A+"-column-input")),function(C){var B=$(C.target).parent("li");
B.remove();if($("ul#forcedColumns li").length==0){$("#forcedColumnsArea").hide()}},$("ul#forcedColumns"),function(B){var C=$("<div/>",{"class":"add"});
C.click(function(){var D=C.parent("li");$("#"+D.attr("id")+"-column-input").trigger("click");
D.remove();if($("ul#forcedColumns li").length==0){$("#forcedColumnsArea").hide()}});
B.append(C)});y.addClass("forcedColumn")})};var r=function(){$("ul#selectedColumns").fixedsortable({fixed:"> .static",revert:false,axis:"x",containment:"parent",cursor:"crosshair"});
$("ul#selectedColumns, ul#selectedColumns > li").disableSelection()};var i=function(){var x=new Array();
var y=null;if(u.view){y=uniprot.cookie.load(uniprot.namespace+"-view-columns2")}else{if(""!==u.program){y=uniprot.cookie.load(u.program+"/"+uniprot.namespace+"-columns2")
}else{y=uniprot.cookie.load(uniprot.namespace+"-columns2")}}if(y!=null&&y!==""){return y.split(",")
}return x};var v=function(x){if(u.view){uniprot.cookie.save(uniprot.namespace+"-view-columns2",x.join(","),"/"+uniprot.namespace)
}else{if(""!==u.program){uniprot.cookie.save(u.program+"/"+uniprot.namespace+"-columns2",x.join(","),"/"+u.program+"/"+uniprot.namespace)
}else{uniprot.cookie.save(uniprot.namespace+"-columns2",x.join(","),"/")}}};var e=function(){var y=q();
if(w[y]){var x=w[y];$.each($("ul#selectedColumns li"),function(z,A){A=$(A);var C=A.attr("id");
var B=false;$.each(x,function(F,E){var D=E.id+"-column-input-selected";if(D===C){B=true;
return false}});if(!B){A.remove()}})}else{$("ul#selectedColumns").empty()}};var t=function(y){var x=y.attr("id")+"-selected";
if($("#"+x).length){$("#"+x).remove()}else{g(x,b(y),n,$("ul#selectedColumns"))}};
var b=function(x){var z=x.parent();var y=z.children().not("input").not("span.context-help").clone();
return function(A){if(y.length!==0){A.append(y)}else{A.append(z.text())}}};var g=function(x,D,C,A,y){var z=$("<li/>",{"class":"selectedColumn ui-content ui-state-default ",id:x});
if(y){y.call(this,z)}D(z);var B=$("<div/>",{"class":"delete"});z.append(B);B.click(C);
A.append(z);return z};var l=function(){if(uniprot.defaultColumns&&uniprot.defaultColumns.length>0){$.each(uniprot.defaultColumns,function(x,y){var z=$("#"+y+"-column-input");
if(z.length!=0){z.prop("checked",true);t(z)}})}else{$("div#customizeColumns input.defaultColumn").each(function(x,y){var z=$(y);
z.prop("checked",true);t(z)})}};var n=function(y){var x=$(y.target);var z=x.parent().attr("id").split("-");
var A=z.splice(0,z.length-1).join("-");$("input#"+A).click()};var p=function(){$(".addRemoveColumn,#customize-columns-button").mouseenter(function(){$(".addRemoveColumn").addClass("hover")
});$(".addRemoveColumn,#customize-columns-button").mouseout(function(){$(".addRemoveColumn").removeClass("hover")
})};var j=function(){$("div#customizeColumns input:checked").each(function(x,y){var z=$(y);
if(!z.is(":visible")){z.closest(".foldable").prev(".expandableLink").click()}})};
var f=function(){var y=[];var x=$("#customizeSearch");$(".foldable input + span").each(function(A,B){B=$(B);
var C=B.prev("input").attr("id").indexOf("database")!=-1;var D=$(B).html()+" ["+B.closest(".foldable").prev("a").html()+(C?" database":"")+"]";
y.push({value:$(B).html(),label:$(B).html(),show:D.replaceAll("&amp;","&")})});x.autocomplete({minLength:"2",source:y}).data("ui-autocomplete")._renderItem=function(A,B){return $("<li>").attr("data-value",B.value).append($("<a>").text(B.show)).appendTo(A)
};x.on("autocompletesearch",function(A,B){$(this).addClass("autocomplete-loading")
});x.on("autocompleteresponse",function(A,B){$(this).removeClass("autocomplete-loading")
});var z=function(E){var B=$(".foldable input + span:contains("+E+")").filter(function(){return $(this).text()===E
});if(B.length!=0){var A=B.closest(".foldable");if(!(A.is(":visible"))){A.prev(".expandableLink").click()
}document.getElementById(B.prev("input").attr("id")).scrollIntoView();var D=$(B).siblings("input");
if(!D.is(":checked")){D.trigger("click");var C=D.parent();C.css("background-color","#ffff99");
C.animate({backgroundColor:"#FFFFFF"},3000)}}};x.on("autocompleteselect",function(A,B){z.call(this,B.item.label)
});x.keypress(function(B){var A=(B.keyCode?B.keyCode:B.which);switch(A){case 10:case 13:var C=$(this).val().trim();
if(""!=C){z.call(this,C)}return false;break;default:break}})};var k=function(){$(".addRemoveColumn").click(function(y){window.location.hash="customize-columns"
});function x(z){switch(z){case"#customize-columns":var y=$("a#customize-columns-button");
if(!y.hasClass("disabled")){s();f();$(".sidebar").hide();$(".mainContent").hide();
$("#basket").hide();$(".newCustomize").show();j();$("#blast_legend").hide()}break;
case"":var A=$("#customize-columns-cancel");if(A.is(":visible")){A.trigger("click")
}break;default:}}$(window).hashchange(function(){var y=location.hash;x(y)});(function(){var y=window.location.hash;
if("#customize-columns"===y){x(y)}})()};this.addColumnSuggestion=function(x){v(x.split(","));
window.location.href=window.location.href.substring(0,window.location.href.indexOf("#"));
return false};var o=function(){var B=new Array();var y=$("ul#forcedColumns li").length;
if(y>0){resp=confirm("There are "+y+" unsaved columns, if you continue, you will lose them. Do you still want to proceed?");
if(resp==false){return false}}var A=uniprot.namespace+(u.view?"-view":"");if(w[A]){$.each(w[A],function(F,G){B.push(G.id)
})}$("li.selectedColumn:not(.static)").each(function(F,G){var K=$(G);var I=K.attr("id");
var J=I.length;var H=I.substr(0,J-22).replace(/_8_/,"(").replace(/_9_/,")").replace(/_/," ");
if(H!==""){B.push(H)}});v(B);var z=window.location.href;if(z.indexOf("columns=")!=-1){var E=z.indexOf("columns=");
var C=z.indexOf("&",E);if(C>0){var D=z.slice(0,E);D=D+z.slice(C+1,z.length);window.location.assign(D);
var x=1}else{var D=z.substr(0,E-1);window.location.assign(D);var x=1}}else{window.location.href=window.location.href.substring(0,window.location.href.indexOf("#"))
}return false};var m=function(){e();$("#customizeColumns input:checked").attr("checked",false);
l();$(".customizeRow").each(function(x,y){y=$(y);if(x==0){y.find(".foldable").not(":visible").each(function(z,A){$(A).prev(".expandableLink").click()
})}else{y.find(".foldable").each(function(z,A){A=$(A);if(A.find("input:checked").length>0){if(!A.is(":visible")){$(A).prev(".expandableLink").click()
}}else{if(A.is(":visible")){$(A).prev(".expandableLink").click()}}})}});return false
};var c=function(x){var y=$(this);t(y)};var q=function(){return uniprot.namespace+(u.program!=""?("-"+u.program):(u.view?"-view":""))
};var h=function(){var x=q();if(w[x]){$.each(w[x],function(y,z){var B=z;var A=$("<li/>",{"class":"selectedColumn ui-content ui-state-default static",id:B.id+"-column-input-selected"});
A.append($("<span>"+B.label+"</span>"));$("#selectedColumns").append(A)})}};var a=function(){$("ul#forcedColumns li").each(function(x,y){$(y).find("div.add").trigger("click")
});return false};this.init=function(){h();p();$("#forced-columns-save").click(a);
$("#customize-columns-save").click(o);$("#customize-columns-cancel").click(function(){window.location.href=window.location.href.substring(0,window.location.href.indexOf("#"));
return false});$("#customizeColumns input[type=checkbox]").click(c);$("#columnsResetToDefaults").click(m);
$("#expandAllHeaders").click(function(){$(".foldable").each(function(x,y){y=$(y);
if(!y.is(":visible")){y.prev(".expandableLink").click()}});$("#expand_all").hide();
$("#collapse_all").show();return false});$("#collapseAllHeaders").click(function(){$(".foldable").each(function(x,y){y=$(y);
if(y.is(":visible")){y.prev(".expandableLink").click()}});$("#expand_all").show();
$("#collapse_all").hide();return false});k()}}function upload(){this.uploadLinkHandler=function(){var b=$(".basket-item:checked");
var a=[];if(b.length>0){$.each(b,function(c,d){var e=$(d).attr("id").split("checkbox_")[1];
a.push(e)});$("#uploadQuery").val(a.join(" "));$("#uploadForm").submit();return false
}return true};this.init=function(){$("#fileUploadCross").click(function(){$("#fileNamePlaceHolder").hide();
$("#uploadfile").val("")});$("#uploadfile").change(function(){var a=$(this);$("#fileNamePlaceHolder").show()
});$.ajax({url:BASE+"fieldData/?param=mapping",dataType:"json",async:false}).done(function(a){mapping_data=a;
makeFromDatabase();makeToDatabase();$("#from-database").change(fromDatabaseChange)
});$("#submitList").click(function(){var b=$("textarea#uploadQuery");var a=/^e\.g\.\s(.+)$/.exec(b.val());
if(a!=null&&a.length===2){b.val(a[1])}$("#mapping-form").submit();return false});
$("#submitList-clear").click(function(){$("textarea.queryInput").val("");return false
})};this.help=function(){$.ajax({url:BASE+"fieldData/?param=mapping",dataType:"json",async:false}).done(function(b){var a=function(f,d,i){var h=$("<tr/>");
var g=$("<td/>");var e=$("<td/>");var c=$("<td/>");g.text(f);e.text(d);c.text(i);
h.append(g);h.append(e);h.append(c);$("#mapping-faq-table").append(h)};$.each(b.opt,function(c,d){var e=$('<tr class="category"/>');
var f=$('<td colspan="3"/>');e.append(f);f.text("Category:"+c);$("#mapping-faq-table").append(e);
if("UniProt"===c){a("UniProtKB AC/ID","ACC+ID","from");a("UniProtKB AC","ACC","to");
a("UniProtKB ID","ID","to")}$.each(d,function(h,g){a(h,g,"both")})})})}}$(function(){$("textarea#uploadQuery").click(function(){if($(this).val().indexOf("e.g.")!=-1){$(this).val("");
$(this).removeClass("uploadListsTextarea").addClass("uploadListsTextarea2")}})});
function UniRefEntryView(){var d=function(f,g){var e=function(h){$(".options-menu").hide();
var i=$("select#format").val();uniprot.cookie.save(uniprot.namespace+"-download",i,uniprot.namespace);
window.location.href=f+"."+i;return false};b(g,e,f,$("#download-button"),true,false)
};var c=function(f,g){var e=function(j){$(".options-menu").hide();var k=function(p){var m=p.trim().split("\n");
var q=[];var n=[];for(var o=0;o<m.length;o++){if(m[o].length>6){n.push(m[o])}else{q.push(m[o])
}}if(q.length>0){uniprot.basket.addItemsTobasket(q,"uniprot")}if(n.length>0){uniprot.basket.addItemsTobasket(n,"uniparc")
}};var i=function(){var m={uniprot:[],uniparc:[]};$("input.basket-item:checked").each(function(o,p){p=$(p);
var q=$(p).attr("id").split("_")[1];var n=(/namespace:(.+)/g.exec(p.attr("class")));
if(n[1]){m[n[1]].push(q)}});if(m.uniprot.length>0){uniprot.basket.addItemsTobasket(m.uniprot,"uniprot")
}if(m.uniparc.length>0){uniprot.basket.addItemsTobasket(m.uniparc,"uniparc")}};var l=function(){var m=[f];
uniprot.basket.addItemsTobasket(m,"uniref")};var h=$("input:radio[name=menu-options]:checked").val();
if(h==="all"){$.ajax({url:BASE+uniprot.namespace+"/"+f+".list"}).done(function(m){k(m)
})}else{if(h==="selected"){i()}else{if(h==="cluster"){l()}}}return false};b(g,e,f,$("#add-cluster-basket-button"),false,true)
};var b=function(k,e,h,f,i,g){var j=function(){var l={};if(g){l.total=k,l.options={selected:{value:"selected",label:"Selected cluster members",count:0},others:[{value:"cluster",label:"Cluster"}],all:{label:"All cluster members",count:k}}
}if(i){l.entryId=h,l.listformats=[{format:"fasta",label:"FASTA (representative sequence)"},{format:"xml",label:"XML"},{format:"rdf",label:"RDF/XML"},{format:"list",label:"List"}]
}l.goHandler=e;return function(){return $("body").createMenu(l)}};f.attachMenu(j())
};var a=function(){var e=function(){var f={goHandler:function(g){var i=$("input[name=menu-options]:checked").val();
if("default"===i){var h=$(".basket-item:checked").attr("id").split("checkbox_")[1];
$("#blastQuery").val(h);$("#blastForm").submit();return false}else{if("advanced"===i){return uniprot.blast.checkSelectionsAndSubmit()
}else{return false}}}};return function(){return $("body").createBlastDropDown(f)}
};$("#blast-button").attachMenu(e());$("a#align-button").click(function(){if(!$(this).hasClass("disabled")){var f="";
$(".basket-item:checked").each(function(g,h){f=f+$(h).attr("id").split("_")[1]+"\n"
});$("#alignQuery").val(f);$("#alignForm").submit()}return false});$("a.toolsMenu").click(function(g){var f=$(this);
var h=f.prev("select").val();if(h.indexOf("http")!=-1){window.location.href=h}else{$("#blastQuery").val(h);
$("#blastForm").submit()}return false})};this.init=function(e,f){d(e,f);c(e,f);a()
}}function UniParcEntryView(){var b=function(c){var d=function(){var e={entryId:c,listformats:[{format:"fasta",label:"FASTA"},{format:"xml",label:"XML"},{format:"rdf",label:"Rdf/XML"},{format:"tab",label:"Tab"}]};
return function(){return $("body").createMenu(e)}};$("#download-button").attachMenu(d())
};var a=function(){$("#customizeColumns").click(function(d){d.stopPropagation()});
$("p#obsolete-show-action a").click(function(){$(this).parent().hide();$("table#results tr.obsolete").show();
$("p#obsolete-hide-action").show();return false});$("p#obsolete-hide-action a").click(function(){$(this).parent().hide();
$("table#results tr.obsolete").hide();$("p#obsolete-show-action").show();return false
});$("a.toolsMenu").click(function(e){var d=$(this);var f=d.prev("select").val();
if(f.indexOf("http")!=-1){window.location.href=f}else{$("#blastQuery").val(f);$("#blastForm").submit()
}return false});var c=function(){var d={goHandler:function(e){var f=$("input[name=menu-options]:checked").val();
if("default"===f){$("#blastForm").submit();return false}else{if("advanced"===f){return uniprot.blast.checkSelectionsAndSubmit()
}}}};return function(){return $("body").createBlastDropDown(d)}};$("#blastButton").attachMenu(c())
};this.init=function(c){b(c);a()}}function TabUI(b,d,c){c=c||{fn:function(){},context:window};
$(b+" ul.tabs > li > a.tab").removeClass("tab-current");var a=$(b+" ul.tabs > li > a."+d);
a.addClass("tab-current");$(b+" div.tabsContent").each(function(e,f){f=$(f);if(a.length===0||d===f.attr("id").split("-")[1]){f.show()
}else{f.hide()}});$(b+" ul.tabs a.tab").off("click").click(function(g){var f=$(this);
var e=f.attr("class").split(" ")[0];$(b+" ul.tabs a.tab").removeClass("tab-current");
f.addClass("tab-current");$(b+" div.tabsContent").each(function(h,i){i=$(i);if(e===i.attr("id").split("-")[1]){i.show()
}else{i.hide()}});c.fn.apply(c.context,f);return false})}function SupportingDataEntryView(b){var a={citations:[{format:"rdf",label:"RDF/XML"}],taxonomy:[{format:"rdf",label:"RDF/XML"}],database:[{format:"rdf",label:"RDF/XML"}],keywords:[{format:"obo",label:"OBO"},{format:"rdf",label:"RDF/XML"}],tissues:[{format:"obo",label:"OBO"},{format:"rdf",label:"RDF/XML"}],locations:[{format:"obo",label:"OBO"},{format:"rdf",label:"RDF/XML"}],diseases:[{format:"obo",label:"OBO"},{format:"rdf",label:"RDF/XML"}]};
var c=function(e){var d=$("#download-button");if(d.hasClass("disabled")){d.click(function(){return false
});return}var f=function(){var g={listformats:a[b?b:uniprot.namespace],entryId:e};
return function(){return $("body").createMenu(g)}};d.attachMenu(f())};this.init=function(d){c(d)
}}function ProteomesEntryView(){var b=[];$(".component-checkbox").change(function(){if(this.checked){b.push(this.id)
}else{b.splice(b.indexOf(this.id),1)}});var d=function(e,g){var f=$("#download-button");
if(f.hasClass("disabled")){f.click(function(){return false});return}var h=function(){var i={total:e,options:{selected:{value:"selected",label:"Download proteins from selected",count:0},others:[],all:{label:"Download all protein entries",count:e}},goHandler:function(l){var k=$("input:radio[name=menu-options]:checked").val();
var n=$("#format").val();var j="";if(k==="selected"){j=" AND ";var m=$(".basket-item:checked");
m.each(function(o,p){j=j+'proteomecomponent:"'+$(p).attr("id")+'"';if(o!==m.length-1){j=j+" OR "
}})}window.location.href="/uniprot/?query=proteome:"+g+j+"&force=true&format="+n;
return false}};i.formats=[{value:"fasta",label:"FASTA (canonical)"},{value:"xml",label:"XML"},{value:"rdf",label:"Rdf/XML"},{value:"txt",label:"Text"},{value:"gff",label:"GFF"},{value:"list",label:"List"}];
return function(){return $("body").createMenu(i)}};f.attachMenu(h())};var c=function(f,e,g,h){var j=/collapse/;
var i=/expand/;$(f).each(function(k,l){l=$(l);l.click(function(m){if(j.test(l.attr("class"))){l.attr("class","icon_expand");
l.attr("title",e)}else{if(i.test(l.attr("class"))){l.attr("class","icon_collapse");
l.attr("title",g)}}h(l);return})})};var a=function(){c.call(this,"div.authors","Show all authors","Hide authors",function(e){e.parent().next().toggle()
})};this.init=function(e,f){d(e,f);a.call(this)}}var Tree=(function(){function a(c,e,b,f,d){this._container=c;
this._dataLoader=e;this._queryTemplate=b;this.render=__bind(this.render,this);this.reRender=__bind(this.reRender,this);
this.addData=__bind(this.addData,this);this.LoadAndShow=__bind(this.LoadAndShow,this);
this.isBlast=d?d:false;this.chart=f}a.prototype.LoadAndShow=function(){this._container.empty();
$("#loader_tree").show();this._dataLoader(this,function(b){$("#loader_tree").hide();
this.render(b.nodes,this._container);this._container.click({obj:this},this.clickHandler)
})};a.prototype.reRender=function(c){var b=function(g){this._container.empty();if(g.parent){var d=this.render([g.parent],this._container);
var f=d[0];var e=$("<ul/>");f.append(e);this.render(g.nodes,e);f.removeClass("closed");
f.children("ul").show()}};this._dataLoader(this,b,c,true)};a.prototype.render=function(f,d){var c=[];
for(var e=0;e<f.length;e++){var b=f[e].id.indexOf(".")!==-1?$('<li class="'+f[e].id+" "+f[e].id.replace(/\./g,"")+'"/>'):$('<li class="'+f[e].id+'"/>');
if(f[e].expand){b.addClass("closed");b.append($("<span class='folder'><a href="+f[e].link+">"+f[e].label+"</a> <a href='"+this._queryTemplate+f[e].id+"'>("+f[e].count+(this.isBlast?(f[e].count>1?" hits":" hit"):"")+")</span>"));
b.append($('<span data-icon="z" class="icon icon-functional chart-icon"></span>'))
}else{b.append($("<span class='printThisInline'>---</span><span class='file'><a href="+f[e].link+">"+f[e].label+"</a> <a href='"+this._queryTemplate+f[e].id+"'>("+f[e].count+(this.isBlast?(f[e].count>1?" hits":" hit"):"")+")</span>"))
}d.append(b);c.push(b)}return c};a.prototype.addData=function(c){var b=function(g){var e=c.indexOf(".")!==-1?this._container.find("."+c.replace(/\./g,"")):this._container.find("."+c);
var d=$("<ul/>");e.append(d);this.render(g.nodes,d);e.removeClass("closed");var f=e.children("span.data_loading");
if(f.length>0){f.removeClass("data_loading")}e.children("ul").show()};this._dataLoader(this,b,c)
};a.prototype.clickHandler=function(d){var c=d.data.obj;var e=$(d.target);if(e.hasClass("folder")){var b=e.parent();
if(b.hasClass("closed")){if(b.children("ul").length>0){b.removeClass("closed");b.children("ul").show()
}else{e.addClass("data_loading");var g=b.attr("class").split(" ")[0].trim();if(""!==g){c.addData(g)
}}}else{b.addClass("closed");b.children("ul").hide()}return false}else{if(e.hasClass("chart-icon")){var b=e.parent();
var g=b.attr("class").split(" ")[0].trim();if(""!==g){$("#viewByGraph").hide();$("#loader_graph").show();
var f=function(h){$("#viewByGraph").show();$("#loader_graph").hide();c.chart.updateChart(h);
$(window).scrollTop($("#viewByGraph").offset().top)};c._dataLoader(this,f,g);return false
}}}};return a})();var ViewByChart=function(c){var b=800,h=500;var f=28;var i=25,a=200;
var d=d3.select("#viewByGraph").append("svg").attr("id",c).attr("width",b).attr("height",h).attr("style","display:none").attr("class","svgViewBy");
var e=d3.select("body").append("div").attr("class","d3-tooltip");this.updateChart=function(n){n.nodes.sort(function(s,r){return r.count-s.count
});$(".svgViewBy").hide();$("#"+c).show();var m=d3.scale.linear().domain([0,d3.max(n.nodes,function(r){return r.count
})]).range([0,b-230]);d.attr("height",n.nodes.length*i);var q=d.selectAll("g").data(n.nodes,function(r){return r.id
});var p=q.enter().append("g");var o=p.append("text").attr("class","title").attr("text-anchor","end").attr("x",190).attr("y",function(s,r){return i+(r*i)-i/2
}).text(function(r){return g(r.label,f)});var l=p.append("rect").attr("x",a).attr("width",0).attr("width",function(r){return m(r.count)
}).attr("y",function(s,r){return i*r}).attr("height",i);var j=p.append("text").attr("class","count-text-out").attr("text-anchor","start").attr("x",function(r){return a+m(r.count)
}).attr("y",function(s,r){return i+(r*i)-i/2}).text(function(r){return r.count});
j.on("click",function(r){});o.on("mouseover",function(r){e.transition().duration(200).style("visibility","visible");
e.html(r.label).style("left",function(){return(d3.event.pageX+10)+"px"}).style("top",function(){return(d3.event.pageY+10)+"px"
})}).on("mouseout",function(r){e.transition().duration(500).style("visibility","hidden")
});var k=q.exit().remove()};function g(j,k){if(j.length>k){return j.substr(0,k-3)+"..."
}else{return j}}};var colorScale=d3.scale.linear().domain([1,50,100]).range(["#FF0000","#00FF00","#0000FF"]);
var tooltip=(function(){var a=d3.select("body").append("div").attr("id","blast-alignment-tooltip").attr("class","d3-tooltip");
return a});var blastColorScale=(function(){function a(){var f={top:5,right:20,bottom:5,left:20},d=600-f.left-f.right,b=40-f.top-f.bottom;
scale_height=b-(b/2);var h=d3.scale.linear().domain([100,0]).range([0,d]);var e=d3.svg.axis().scale(h).ticks(4).orient("bottom");
var c=d3.select("#blast-color-scale").append("svg").attr("width",d+f.left+f.right).attr("height",b+f.top+f.bottom+30);
var g=c.append("defs").append("linearGradient").attr("y1","0%").attr("y2","0%").attr("x1","0%").attr("x2","100%").attr("id","blast-gradient");
g.append("stop").attr("offset","0%").attr("stop-color","#FF0000");g.append("stop").attr("offset","50%").attr("stop-color","#00FF00");
g.append("stop").attr("offset","100%").attr("stop-color","#0000FF");c.append("rect").attr("width",d).attr("height",scale_height).attr("fill","url(#blast-gradient)").attr("transform","translate("+f.left+","+f.top+")");
c.append("g").attr("class","x axis").call(e).attr("transform","translate("+f.left+","+(f.top+scale_height)+")");
c.append("text").attr("transform","translate(250,50)").text(function(i){return"Identity %"
})}return a})();var blastOverViewAlignment=(function(){var b=10;function a(){this.renderOverView=__bind(this.renderOverView,this);
this.overViewScale=__bind(this.overViewScale,this);this.liney=(function(){var c=this.canvasProps;
return function(f,e){return(e*c.bar_height)+(c.bar_height/2)}}).call(this)}a.prototype.overViewScale=function(e,g){var h=d3.scale.sqrt().domain([1,g.size]).range([0,this.canvasProps.width]);
$("#"+e).parent("th").attr("style","width:"+(this.canvasProps.width+20)+"px;");var d={x1:"1",y1:this.liney,x2:this.canvasProps.width,y2:this.liney,stroke:"blue","stroke-width":"5px"};
var c=d3.select("#"+e).append("svg").attr("width",this.canvasProps.width+10).attr("height",30).append("g").attr("transform","translate(5,0)");
c.append("line").attr(d);var f=d3.svg.axis().scale(h).ticks(5).tickFormat(function(k){var j=k/1000;
if(j>=1){return j+"k"}else{return k}}).tickPadding([0]).orient("bottom");c.append("g").attr("class","axis").call(f).attr("transform","translate(0,10)")
};a.prototype.renderOverView=function(g){var f=g.data;var d=d3.select("#"+g.selector).append("a").attr("href",g.url).append("svg").attr("width",this.canvasProps.width+10).attr("height",b).selectAll("g").data(f).enter().append("g").attr("transform","translate(5,0)");
if(g.size>0){var h=d3.scale.sqrt().domain([1,g.size]).range([0,this.canvasProps.width]);
var e={x1:"1",y1:this.liney,x2:h(g.hitSize),y2:this.liney,stroke:"black","stroke-width":"1px"};
d.append("line").attr(e);var c={x:function(i){return h(i.start)},y:0,width:function(i){return h(i.width)
},fill:function(i){return colorScale(100-i.identity)},height:b,"class":"subject"};
d.append("rect").attr(c)}};a.prototype.canvasProps={width:300,padding:7,bar_height:10};
return a})();var blastAlignment=(function(){function a(f){this.queryAttr=__bind(this.queryAttr,this);
this.matchAttr=__bind(this.matchAttr,this);this.subAttr=__bind(this.subAttr,this);
this.mask=__bind(this.mask,this);var i=[];var l=c(f[0]);var e=d3.scale.linear().domain([1,l.totalaa]).range([0,600]);
if(f[0].url==""){$(".blastAlignment").css("cursor","default")}var h=d3.select("#"+f[0].selector).append("a").attr("href",f[0].url).append("svg").attr("width",this.canvasProps.width).attr("height",this.canvasProps.height).attr("name",f[0].id).selectAll("g").data(f).enter().append("g");
var j=h.append("rect").attr(this.queryAttr(e,l));j.on("mouseover",function(n){var m=d3.select("#blast-alignment-tooltip");
m.text("Query: "+n.query_start+"-"+n.query_length);m.style("top",(event.pageY+5)+"px").style("left",(event.pageX+10)+"px");
return m.style("visibility","visible")}).on("mouseout",function(n){var m=d3.select("#blast-alignment-tooltip");
return m.style("visibility","hidden")});var k=h.append("rect").attr(this.subAttr(e,l)).on("mouseover",function(n){var m=d3.select("#blast-alignment-tooltip");
m.text("Subject:"+n.match_start+"-"+n.match_length);m.style("top",(event.pageY+5)+"px").style("left",(event.pageX+10)+"px");
return m.style("visibility","visible")}).on("mouseout",function(){var m=d3.select("#blast-alignment-tooltip");
return m.style("visibility","hidden")});h.append("g").selectAll("rect").data(function(m){return m.query_gaps
}).enter().append("rect").attr("x",function(m){return e(m.start+l.qGapOffSet)}).attr("y",this.canvasProps.bar_height).attr("width",function(m){return e(m.end-m.start)
}).attr("height",this.canvasProps.bar_height).attr("fill","white");h.append("g").selectAll("rect").data(function(m){return m.match_gaps
}).enter().append("rect").attr("x",function(m){return e(m.start+l.mGapOffSet)}).attr("y",2*this.canvasProps.padding+this.canvasProps.bar_height).attr("width",function(m){return e(m.end-m.start)
}).attr("height",this.canvasProps.bar_height).attr("fill","white");h.append("line").attr("x1",function(m){return e(l.qStartaa)
}).attr("y1",this.canvasProps.bar_height+(this.canvasProps.bar_height/2)).attr("x2",function(m){return e(l.qStartaa+l.qLengthaa-1)
}).attr("y2",this.canvasProps.bar_height+(this.canvasProps.bar_height/2)).attr("stroke","#000000");
h.append("line").attr("x1",function(m){return e(l.mStartaa)}).attr("y1",this.canvasProps.bar_height*3).attr("x2",function(m){return e(l.mStartaa+l.mLengthaa-1)
}).attr("y2",this.canvasProps.bar_height*3).attr("stroke",function(m){return colorScale(100-m.identity)
});var g=h.append("rect").attr(this.matchAttr(e,l));if(l.prefixaa>1){var d={};d=$.extend(this.mask(),d);
d.x=function(m){return e(1)};d.width=function(m){return e(l.overLapStartaa)};h.append("rect").attr(d)
}if(l.suffixaa>0){var d={};d=$.extend(this.mask(),d);d.x=function(m){return e(l.prefixaa+l.overLapLength)
};d.width=function(m){return e(l.suffixaa)};h.append("rect").attr(d)}}a.prototype.canvasProps={width:600,height:40,padding:7,bar_height:10};
a.prototype.queryAttr=function(e,d){return{x:function(f){return e(d.qStartaa)},y:this.canvasProps.bar_height,width:function(f){return e(d.qLengthaa)
},height:this.canvasProps.bar_height,"class":"query"}};a.prototype.subAttr=function(g,d){var f=2*this.canvasProps.padding+this.canvasProps.bar_height;
var e=2*this.canvasProps.padding+this.canvasProps.bar_height+this.canvasProps.bar_height;
return{x:function(h){return g(d.mStartaa)},y:2*this.canvasProps.padding+this.canvasProps.bar_height,width:function(h){return g(d.mLengthaa)
},fill:function(h){return colorScale(100-h.identity)},height:this.canvasProps.bar_height,"class":"subject"}
};a.prototype.matchAttr=function(f,e){var d=this.canvasProps.height-this.canvasProps.padding;
return{x:function(g){return f(e.overLapStartaa)},y:this.canvasProps.padding-1,width:function(g){return f(e.overLapLength)
},height:d,fill:"none","stroke-width":"1px",stroke:"#000000","class":"match"}};a.prototype.mask=function(){return{y:this.canvasProps.padding-1,height:this.canvasProps.height,opacity:"0.7",fill:"#FFFFFF","class":"mask"}
};function b(f){var d=0;for(var e=0;e<f.length;e++){d+=(f[e].end-f[e].start)}return d
}function c(g){var e={};e.qPrefixaa=g.query_start-1;e.mPrefixaa=g.match_start-1;e.prefixaa=Math.max(e.qPrefixaa,e.mPrefixaa);
e.qsuffixaa=g.query_length-g.query_end;e.msuffixaa=g.match_length-g.match_end;e.suffixaa=Math.max(e.qsuffixaa,e.msuffixaa);
e.totalaa=e.prefixaa+g.overLapLength+e.suffixaa;e.qLengthaa=e.qPrefixaa+g.overLapLength+e.qsuffixaa;
e.mLengthaa=e.mPrefixaa+g.overLapLength+e.msuffixaa;var f=e.qPrefixaa-e.mPrefixaa;
if(f>0){e.qStartaa=1;e.overLapStartaa=g.query_start;e.mStartaa=f;e.qGapOffSet=g.query_start;
e.mGapOffSet=g.match_start+f}else{e.mStartaa=1;e.overLapStartaa=g.match_start;e.qStartaa=Math.abs(f)+1;
e.mGapOffSet=g.match_start;e.qGapOffSet=Math.abs(f)+g.query_start}e.overLapLength=g.overLapLength;
console.log(g);console.log(e);return e}return a})();var BlastResults=(function(){function c(g,f){$("#orderBy").on("change",function(){var i=$("#orderBy option:selected").attr("name");
location.href=location.href.split("?")[0]+"?sort="+i});this.initializeTree(g);a.call(this);
var h=$("#orgName");if(h.length==1){b(h,g)}e.call(this,"job:"+g,f);$("#query_viewBy").keypress(function(k){var j=(k.keyCode?k.keyCode:k.which);
switch(j){case 10:case 13:var l=$(this).val().trim();if(""!=l){var m=/\[(.+)\]/.exec(l);
if(m.length===2){var i=$(".TreeView:visible").attr("id");if(d[i]){d[i].reRender(m[1])
}}}return false;break;default:break}});$("#show-all-overview").click(function(){$("#overview-table-container").css("height","auto");
$("#hide-all-overview").show();$(this).hide()});$("#hide-all-overview").click(function(){$("#overview-table-container").css("height","200px");
$("#show-all-overview").show();$(this).hide()});this.addViewBy()}var d={TaxTreeView:""};
var e=function(g,f){f=f||0;var h=function(){var i={total:f,options:{selected:{value:"selected",label:"Download selected",count:0},others:[],all:{label:"Download all",count:f}},goHandler:function(l){$(".options-menu").hide();
var n=$("select#format").val();var k="";var m="";if("selected"===$("input:radio[name=menu-options]:checked").val()){$(".basket-item:checked").each(function(p,q){k=k+(p!==0?" OR ":"")+"id:"+$(q).attr("id").split("checkbox_")[1]
})}var o=$("#query").val();if(""===o.trim()){m=uniprot.namespace+":(job:"+uniprot.jobid+")"
}else{m=o.trim()}var j=$("#downloadForm");j.attr("action","/blast/"+uniprot.namespace+"/"+uniprot.jobid+"."+n);
$("#selectedFormat").val(n);$("#selectedQuery").val(m);$("#selectedFilter").val(k);
$("#selectedForce").val("true");j.submit();return false},selectedFormat:function(){return uniprot.cookie.load(uniprot.namespace+"-results-download")
}};i.formats=[{value:"fasta",label:"FASTA"},{value:"tab",label:"Tab-delimited"},{value:"xls",label:"Excel"}];
return function(){return $("body").createMenu(i)}};$("#download-button").attachMenu(h())
};var a=function(){$("a#blast-button").click(function(){if(!$(this).hasClass("disabled")){var g=$(".basket-item:checked").attr("id").split("_")[1];
$("#blastQuery").val(g);var f=$("#resubmit");f.children("input[name=landingPage]").val("no");
f.submit()}return false});$("a#align-button").click(function(){if(!$(this).hasClass("disabled")){var g="";
$(".basket-item:checked").each(function(i,j){g=g+$(j).attr("id").split("checkbox_")[1]+"\n"
});var h=$(".namespace-jobs:checked");if(h.length==1){var f=h.attr("id").split("checkbox_")[1];
g=f+"\n"+g}$("#alignQuery").val(g);$("#alignForm").submit()}return false})};var b=function(g,f){g.autocomplete({minLength:"3",source:"/filterhints/taxonomy/?format=json&limit=100&sort=score&service="+uniprot.namespace+"&query=blast:"+f,urlfunction:function(h,i){return h
}});g.on("autocompletesearch",function(h,i){$(this).addClass("autocomplete-loading")
});g.on("autocompleteresponse",function(h,i){$(this).removeClass("autocomplete-loading")
});$("#orgFind").click(function(i){var h=$("#orgName").val();if(""!==h){h=/\[(\d+)\]/.exec(h)[1];
var j=$.QueryString.query;j=j||("uniprot:(job:"+f+")");j=(/\((.+)\)/.exec(j))[1];
window.location.href="/blast/uniprot/"+f+"?query=uniprot:("+j+" organism:"+h+")"}return false
});g.keypress(function(i){var h=(i.keyCode?i.keyCode:i.which);switch(h){case 10:case 13:$("#orgFind").trigger("click");
return false;break;default:break}})};c.prototype.initializeTree=function(f){var h=function(i,k){var j=function(o,n,l){var m="/view/"+uniprot.namespace+"/by/"+n+"/?query=job:"+i+"&format=json";
if(!o){return m}else{m=m+"&parent="+o;if(l){m=m+"&include=true"}}return m};return function(o,n,p,l){var m=j(p,k,l);
$.getJSON(m,function(q){n.call(o,q)})}};var g=new ViewByChart("TaxViewChart");d.TaxTreeView=new Tree($("#TaxTreeView"),h(f,"taxonomy"),"/blast/uniprot/"+f+"?query=uniprot:(job:"+f+")&fil=taxonomy:",g,true)
};c.prototype.addViewBy=function(){function h(){$("#query_viewBy").autocomplete("destroy")
}function k(m){var n=$("#query_viewBy");if(n.is("[autocomplete]")){n.autocomplete("destroy")
}var l=true;switch(m){case"TaxTreeView":n.autocomplete({minLength:"2",source:"/hints/taxonomy/?format=json&limit=100&sort=score&query=",urlfunction:function(o,p){return o+p
}});n.on("autocompletesearch",function(o,p){$(this).addClass("autocomplete-loading")
});n.on("autocompleteresponse",function(o,p){$(this).removeClass("autocomplete-loading")
});break;default:l=false;break}if(l){n.on("autocompletesearch",function(o,p){$(this).addClass("autocomplete-loading")
});n.on("autocompleteresponse",function(o,p){$(this).removeClass("autocomplete-loading")
})}return}function i(n,m,p){$(".filterBy").slideUp();$(".mapTo").slideUp();$(".viewBy > h3").css("margin-top","0");
$("html, body").animate({scrollTop:0},"slow");var o=$("#viewByCanvas");k(n);$("ul.TreeView").hide();
$("ul#"+n).show();$("#pageContent").hide();var l=$("a.viewBy[href=#"+p+"]");$("#vb_namespace").text(l.text()+" view");
o.show();$("span.status").hide();d[n].LoadAndShow();$("a.viewBy").off("click");l.on("click",function(){j();
event.preventDefault();return false});return false}function g(){h();var l=$("#viewByCanvas").hide();
$("#pageContent").show();$("span.status").show();return false}var j=function(){$(".filterBy").slideDown();
$(".mapTo").slideDown();$(".viewBy > h3").css("margin-top","9px");g();window.location.href=window.location.href.substring(0,window.location.href.indexOf("#"))
};$(window).hashchange(function(){var l=location.hash;if(l!==""){f(l)}else{if($(".sidebar:visible").length!=0){j()
}}});var f=function(n){var o=n.substring("1");var m=$(n);var l=m.closest("li");$("a.viewBy").each(function(p,q){q=$(q);
if(n===q.attr("href")){q.closest("li").addClass("active");$("#viewByGraph").hide();
switch(o){case"textViewBy":window.location.href=q.attr("href");break;case"xmlViewBy":window.location.href=q.attr("href");
break;case"orgViewBy":i("TaxTreeView","TaxViewChart",o);break;default:break}}else{q.closest("li").removeClass("active")
}})};(function(){var m=window.location.hash;var l=$("a.viewBy[href="+m+"]");if(l.length>0&&(m!==""||l.parent("li").hasClass("active"))){f(m)
}})()};return c})();var blastHitPage=(function(){function b(){a.call(this)}var a=function(){$("input.feature_toggle").change(function(d){var c=$(d.target);
var e=c.attr("id");$("label#label"+e+" span").toggle();if("Similarity"===e){if(c.is(":checked")){uniprot.blast.colorSimilarity()
}else{uniprot.blast.unColorSimilarity()}}else{$("span.row"+e).each(function(f,g){g=$(g);
g.toggle()})}})};return b})();function Rainbow(){var a=null;var c=0;var b=100;var e=["ff0000","ffff00","00ff00","0000ff"];
d(e);function d(h){if(h.length<2){throw new Error("Rainbow must have two or more colours.")
}else{var g=(b-c)/(h.length-1);var j=new ColourGradient();j.setGradient(h[0],h[1]);
j.setNumberRange(c,c+g);a=[j];for(var k=1;k<h.length-1;k++){var f=new ColourGradient();
f.setGradient(h[k],h[k+1]);f.setNumberRange(c+g*k,c+g*(k+1));a[k]=f}e=h;return this
}}this.setColors=this.setColours;this.setSpectrum=function(){d(arguments);return this
};this.setSpectrumByArray=function(f){d(f);return this};this.colourAt=function(h){if(isNaN(h)){throw new TypeError(h+" is not a number")
}else{if(a.length===1){return a[0].colourAt(h)}else{var g=(b-c)/(a.length);var f=Math.min(Math.floor((Math.max(h,c)-c)/g),a.length-1);
return a[f].colourAt(h)}}};this.colorAt=this.colourAt;this.setNumberRange=function(g,f){if(f>g){c=g;
b=f;d(e)}else{throw new RangeError("maxNumber ("+f+") is not greater than minNumber ("+g+")")
}return this}}function ColourGradient(){var f="ff0000";var b="0000ff";var d=0;var c=100;
this.setGradient=function(h,i){f=a(h);b=a(i)};this.setNumberRange=function(i,h){if(h>i){d=i;
c=h}else{throw new RangeError("maxNumber ("+h+") is not greater than minNumber ("+i+")")
}};this.colourAt=function(h){return g(h,f.substring(0,2),b.substring(0,2))+g(h,f.substring(2,4),b.substring(2,4))+g(h,f.substring(4,6),b.substring(4,6))
};function g(l,i,o){var m=l;if(m<d){m=d}if(m>c){m=c}var n=c-d;var j=parseInt(i,16);
var h=parseInt(o,16);var p=(h-j)/n;var k=Math.round(p*(m-d)+j);return formatHex(k.toString(16))
}formatHex=function(h){if(h.length===1){return"0"+h}else{return h}};function e(h){var i=/^#?[0-9a-fA-F]{6}$/i;
return i.test(h)}function a(h){if(e(h)){return h.substring(h.length-6,h.length)}else{var k=[["red","ff0000"],["lime","00ff00"],["blue","0000ff"],["yellow","ffff00"],["orange","ff8000"],["aqua","00ffff"],["fuchsia","ff00ff"],["white","ffffff"],["black","000000"],["gray","808080"],["grey","808080"],["silver","c0c0c0"],["maroon","800000"],["olive","808000"],["green","008000"],["teal","008080"],["navy","000080"],["purple","800080"]];
for(var j=0;j<k.length;j++){if(h.toLowerCase()===k[j][0]){return k[j][1]}}throw new Error(h+" is not a valid colour.")
}}}var unisaveResults=(function(){function c(e,d){b.call(this,e,d);a.call(this)}var a=function(){$("#compare-button").click(function(f){var e=$("input.select-1:checked").attr("id").split("-")[2];
var d=$("input.select-2:checked").attr("id").split("-")[2];$("#compare-form #version-from").val(d);
$("#compare-form #version-to").val(e);$("#compare-form").submit();return false})};
var b=function(f,d){d=d||0;var e=function(h){var g={total:d,options:{selected:{value:"selected",label:"Download selected",count:0},others:[],all:{label:"Download all",count:d}},goHandler:function(i){var l=$("input:radio[name=menu-options]:checked").val();
var k=$("select#format").val();if(l==="all"){window.location.href="/uniprot/"+h+"."+k+"?version=*"
}else{var j="";$.each($(".basket-item:checked"),function(n,o){o=$(o);var m=o.attr("id").split("_")[2];
j=j+(j.length===0?"?":"&")+"version="+m});if(j.length>0){window.location.href="/uniprot/"+h+"."+k+j
}}uniprot.cookie.save("unisave-results-download",k,uniprot.namespace);$(".options-menu").hide();
return false},selectedFormat:function(){return uniprot.cookie.load("unisave-results-download")
}};g.formats=[{value:"fasta",label:"FASTA"},{value:"tab",label:"Tab-delimited"},{value:"list",label:"List"}];
return function(){return $("body").createMenu(g)}};$("#download-button").attachMenu(e(f))
};return c})();var helpBlog=(function(){var c;function b(e,f){c=e;a.call(this);if(f!==null&&"*"!==f.trim()&&f.trim().length>0){}else{var d=uniprot.cookie.load(e+"-help");
if(d==null||"1"===d){$("#showHelp").trigger("click",[true])}}}var a=function(){$("#showHelp").click(function(f,e){var d=$("div.helpcontent");
e=e||false;$(this).parent().hide();if(e){d.show()}else{d.slideDown("slow");uniprot.cookie.save(c+"-help","1",c)
}return false});$("#closeHelp").click(function(e,d){d=d||false;if(d){$(this).parent().hide()
}else{$(this).parent().slideUp("slow");uniprot.cookie.save(c+"-help","0",c)}$("#showHelp").parent().show();
return false})};return b})();var betaFeedBack=(function(){function c(){this.validateForm=__bind(this.validateForm,this);
a.call(this);b()}var b=function(){var d=$(window).height();var e=$("#beta-feedback").outerHeight();
var f=$("#beta-feedback").offset().top;if(d<(f+e)){$("#beta-feedback").css("position","absolute")
}};var a=function(){var d=this;$("#beta-feedback-button").click(function(){$(".error").remove();
$("#beta-feedback").animate({marginLeft:($("#beta-feedback").css("marginLeft")==="0px")?"-402px":0})
});$("#cancel-feedback").click(function(){$("#beta-feedback").animate({marginLeft:"-402px"});
$("#beta-feedback-form")[0].reset()});$("#submit-feedback").click(function(){if(d.validateForm()){$("#cancel-feedback").after('<img src="/images/progress.gif" id="feedback-spinner"/>');
$.ajax({url:"/betafeedback/",type:"post",cache:false,data:$("#beta-feedback-form").serialize()}).done(function(e){$("#feedback-spinner").remove();
$("#beta-feedback").animate({marginLeft:"-402px"});$("#beta-feedback-form")[0].reset()
}).fail(function(e,f){$("#feedback-spinner").remove();$("#cancel-feedback").after('<span class="error">Error sending message</span>')
})}})};c.prototype.validateForm=function(){$(".error").remove();var e=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var d=true;if(""===$("#feedback-name").val().trim()){$("#feedback-name").after('<span class="error"> Please enter your name</span>');
d=false}if(""===$("#feedback-subject").val().trim()){$("#feedback-subject").after('<span class="error"> Please enter a subject</span>');
d=false}if($("#feedback-email").val()==""||!e.test($("#feedback-email").val())){$("#feedback-email").after('<span class="error"> Please enter your email</span>');
d=false}if($("#feedback-comments").val()==""){$("#feedback-comments").after('<span class="error"> Please enter your comments</span>');
d=false}return d};return c})();var databaseResults=(function(){function a(){$(".mapUniprot").each(function(b,c){var d=uniprotCount[b].count;
if(d!=="0"){c=$(c);c.append(" <a href='/uniprot/?query="+uniprotCount[b].query+"'>UniProtKB</a> ("+d+")")
}})}return a})();function FastaValidation(){this.validate=function(f,d){var e=f.split("\n");
var c=0;var b=0;var a="";d.errorMessage="Error in FASTA format at line ";for(;b<e.length;
b++){switch(c){case 0:if(e[b].charAt(0)!==">"){c=-1}else{c=1}break;case 1:if(e[b].indexOf(">")!==-1){c=-1
}else{if(e[b].indexOf("-")!==-1){c=-1;d.errorMessage="Cannot have - character as in line "
}else{c=2}}break;case 2:if(e[b].charAt(0)===">"){c=1}else{if(e[b].indexOf(">")!==-1){c=-1
}else{if(e[b].indexOf("-")!==-1){d.errorMessage="Cannot have - character as in line ";
c=-1}else{c=2}}}break;case -1:b=e.length;break}if(c==-1){break}}if(c==-1){this.reportError(e,b,d)
}return c};this.needValidation=function(a){return a.charAt(0)===">"};this.reportError=function(h,d,f){var a=$("#"+f.id);
a.hide();a.html("");var c=newEl("pre",a);var j=d+1;var i=$("#"+f.qId);var g={width:i.width(),height:i.height()};
newEl("p",c,{"class":"errorlabel"},f.errorMessage+j);var b=newEl("div",c,{style:"width:"+g.width+"px;height:"+g.height+"px;overflow:auto"});
var e=newEl("ol",b,{"class":"fastaError"});$.each(h,function(m,n){var s="";for(var o=0;
o<n.length;o++){if(o!=0&&o%60==0){s=s+"\n"}else{s=s+n.charAt(o)}}var p=m+1;var r="codeLine";
var l="";if(m===d){r=r+" errorLine";l="errorContent"}else{l="codeContent"}var q=newEl("li",e,{"class":r});
var k=newEl("code",q,{"class":l},s)});a.show()}}var mappingResults=(function(){function a(c){b.call(this,c)
}var b=function(c){var d=$("#download-button");if(d.hasClass("disabled")){d.click(function(){return false
});return}var e=function(){var f={entryId:c,listformats:[{format:"tab",label:"Mapping Table"},{format:"list",label:"Target List"}]};
return function(){return $("body").createMenu(f)}};$("#download-button").attachMenu(e())
};return a})();