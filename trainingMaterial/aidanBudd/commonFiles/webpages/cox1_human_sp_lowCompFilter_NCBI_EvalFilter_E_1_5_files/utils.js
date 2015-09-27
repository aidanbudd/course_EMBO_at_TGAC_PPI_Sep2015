// $Id: utils.js,v 1.3 2007/04/25 20:48:38 zaretska Exp $
    
utils = {

KeyCode_TAB: 9,
KeyCode_DELETE: 46,
KeyCode_BACKSPACE: 8,
KeyCode_LEFT_ARROW: 37,
KeyCode_RIGHT_ARROW: 39,
KeyCode_HOME: 36,
KeyCode_END: 35,
KeyCode_PAGE_UP: 33,
KeyCode_PAGE_DOWN: 34,
KeyCode_UP_ARROW: 38,
KeyCode_DOWN_ARROW: 40,
KeyCode_ESC: 27,
KeyCode_ENTER: 13,
KeyCode_SPACE: 32,
KeyCode_SHIFT_KEY: 16,
KeyCode_CTRL_KEY: 17,
KeyCode_ALT_KEY: 18,
KeyCode_LEFT_MS_WINDOWS_KEY: 91, 
KeyCode_RIGHT_MS_WINDOWS_KEY: 92,
KeyCode_MS_MENU_KEY: 93,
    
isObject: function(a) { return (a && typeof a == 'object'); },

isArray: function(a) { return this.isObject(a) && a.constructor == Array; },
    
insertInHtml: function(text, obj) {
	if (document.all) {
		obj.innerHTML += text;
	} else {
		var range = document.createRange();
		range.setStartAfter(obj);
		var docFrag = range.createContextualFragment(text);
		obj.appendChild(docFrag);
	}
	
},
    
replaceInHtml: function(text, obj) {
	if (document.all) {
		obj.innerHTML = text;
	} else {
		while (obj.hasChildNodes()) obj.removeChild(obj.firstChild);
		var range = document.createRange();
		range.setStartAfter(obj);
		var docFrag = range.createContextualFragment(text);
		obj.appendChild(docFrag);
	}
},
    
    
getTargetObj: function(eEvent) {
    var oTarget;
    var e = eEvent || window.event;
    if (e == null) return null;
    if (e.srcElement == null)  {
        oTarget = e.target;
    } else {
        oTarget = e.srcElement;
    }
    while ( oTarget && oTarget.nodeType != 1 ) oTarget = oTarget.parentNode;
    return oTarget;
},
    



getParent: function(obj) {
     if (obj) {
         var result = obj.parentNode;
         while (result && result.nodeType != 1) result = result.nextSibling;
         if (result) return result;
     }
     return null;
},
    
getFirstChild: function(obj) {
     if (obj) {
         var result = obj.firstChild;
         while (result && result.nodeType != 1) result = result.nextSibling;
         if (result) return result;
     }
     return null;
},
    
getNextSibling: function(obj, tagName) {
    if (obj) {
        var result = obj.nextSibling;    
        if (tagName) {
            var tn = tagName.toUpperCase();
            while (result && result.tagName != tn) result = result.nextSibling;
        } else {
            while (result && result.nodeType != 1) result = result.nextSibling;
        }
        return result;
    }
    return null;
},

getPreviousSibling: function(obj, tagName) {    
     if (obj) {
         var result = obj.previousSibling;    
         if (tagName) {
             var tn = tagName.toUpperCase();
             while (result && result.tagName != tn) result = result.previousSibling;
         } else {
             while (result && result.nodeType != 1) result = result.previousSibling;
         }
         return result;
     }
     return null;
},
    
removeChildren: function(oObj) {
     if (!oObj || typeof oObj != "object") return;
     while(oObj.hasChildNodes()) oObj.removeChild(oObj.firstChild)
},

insertAfter: function(parent, node, referenceNode) {
	parent.insertBefore(node, referenceNode.nextSibling);
},

nextItem: function(item, nodeName) {
    if (item == null) return;
    var next = item.nextSibling;
    while (next != null) {
        if (next.nodeName == nodeName) return next;
        next = next.nextSibling;
    }
    return null;
},

previousItem: function(item, nodeName) {
    var previous = item.previousSibling;
    while (previous != null) {
        if (previous.nodeName == nodeName) return previous;
        previous = previous.previousSibling;
    }
    return null
},

moveBefore: function(item1, item2) {
    var parent = item1.parentNode;
    parent.removeChild(item1);
    parent.insertBefore(item1, item2);
},

moveAfter: function(item1, item2) {
    var parent = item1.parentNode;
    parent.removeChild(item1);
    parent.insertBefore(item1, item2 ? item2.nextSibling : null);
},




createCookie: function(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = '; expires=' + date.toGMTString();
    } else expires = '';
    document.cookie = name + '=' + value + expires + '; path=/';
},

readCookie: function(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return "";
},

eraseCookie: function(name) {
	document.cookie = name + "=null; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=nih.gov; path=/";
	document.cookie = name + "; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain=nih.gov; path=/";
},

addClass: function(element, className) {
    if (!this.hasClass(element, className)) {
        if (element.className) element.className += " " + className;
        else element.className = className;
    }
},

removeClass: function(element, className) {
    var regexp = new RegExp("(^|\\s)" + className + "(\\s|$)");
    element.className = element.className.replace(regexp, "$2");
},

hasClass: function(element, className) {
    var regexp = new RegExp("(^|\\s)" + className + "(\\s|$)");
    return regexp.test(element.className);
},


getXY: function (obj){
     /*
     +------------- w ----
     | (x,y)
     |
     h
     |
     */
     var b={x:0, y:0, w:obj.offsetWidth, h:obj.offsetHeight};
     
     if (obj.offsetParent) {
         while(obj) {
             b.x += obj.offsetLeft;
             b.y += obj.offsetTop;
             obj = obj.offsetParent;
         }
     } else if (obj.x) {
         b.x = obj.x;
         b.y = obj.y;
     }
     return b;
},

/* Based on ppk (untested) */
getEventXY: function(e) {
    var xpos = 0;
    var ypos = 0;
    e = e || window.event;
    xpos = e.pageX || (e.clientX + document.body.scrollLeft + 
                    document.documentElement.scrollLeft);
    ypos = e.pageY || (e.clientY + document.body.scrollTop + 
                    document.documentElement.scrollTop);
    return {x: xpos, y: ypos};
},

drawText: function (sText, sId, add) {
    if (!sId) sId = "debug";
    var obj = document.getElementById(sId);
    if (obj) {
        if (add)
            this.insertInHtml("<br/>" + sText, obj);
        else
            this.replaceInHtml(sText, obj);
    }
},


selectRange: function (oObj /*:object*/, iStart /*:int*/, iLength /*:int*/) {
    if (!(oObj && oObj.value)) return;
    
    if (oObj.createTextRange) {
        //use text ranges for Internet Explorer
        var oRange = oObj.createTextRange(); 
        oRange.moveStart("character", iStart); 
        oRange.moveEnd("character", iLength - oObj.value.length);      
        oRange.select();
    } else if (oObj.setSelectionRange) {
        //use setSelectionRange() for Mozilla
        oObj.setSelectionRange(iStart, iLength);
    }     
    //set focus back to the textbox
    oObj.focus();      
},
 
getSelection: function() {
     var text = "";
     if (window.getSelection) {  
         text += window.getSelection();
     } else if (document.getSelection) {  
         text += document.getSelection();
     } else if (document.selection){        //IE
         text += document.selection.createRange().text;
     }
     return text;
},




// http://ejohn.org/apps/jselect/event.html
addEvent: function(obj, type, fn, b) {
    if (obj.attachEvent) {
        var name = "" + type + fn; 
//        name = name.substring(0, name.indexOf("\n"));   // IE  This doesn't work
        obj["e" + name] = fn;
        obj[name] = function(){ obj["e" + name](window.event);}
        obj.attachEvent("on" + type, obj[name]);
    } else {
        obj.addEventListener(type, fn, b);
        return true;
    }
},


removeEvent: function(obj, type, fn, b) {
    if (obj.detachEvent) {
        var name = "" + type + fn; 
//        name = name.substring(0, name.indexOf("\n"));   //IE This doesn't work
        if ("function" == typeof obj[name]) {
            obj.detachEvent("on" + type, obj[name]);
            obj[name] = null;
            obj["e" + name] = null;
        }
    } else {
      obj.removeEventListener(type, fn, b);
      return true;
    }
},
 
noBubbleEvent: function(e) {
	if (e && e.stopPropagation) e.stopPropagation();
	else window.event.cancelBubble = true;
},

targetEvent: function(e) {
     if (e.srcElement == null) {
         return e.target;
     } else {
         return window.event.srcElement;
     }
},

preventDefault: function(e) {
     if (e.preventDefault) e.preventDefault();
     else window.event.returnValue = false;
},

relatedTarget: function(e) {
    if (!e) var e = window.event;
	if (e.relatedTarget)    return e.relatedTarget;
	else if (e.toElement)   return e.toElement;
    else if (e.fromElement) return e.fromElement;
},

readStyle: function(element, property) {
    if (element.style[property]) {
        return element.style[property];
    } else if (element.currentStyle) {
        return element.currentStyle[property];
    } else if (document.defaultView && document.defaultView.getComputedStyle) {
        var style = document.defaultView.getComputedStyle(element, null);
        if (style) return style.getPropertyValue(property);
    } 
    return "";
},


printObj: function (oObj, iLevel) {
     var s = "";
     var sIdent = "";
     if (!iLevel) iLevel = 0;
     for (var i = 0; i < iLevel; i++) {
         sIdent += "__";
     }
     for (var i in oObj) {
         var ss = [];
         if ("string" == typeof oObj[i]) {
             ss = oObj[i].split("<");
         }
         s += sIdent + " " + i + " : [" + (typeof oObj[i]) + "] : " + ss.join("&lt;") + "<br/>";
 //        if (oObj[i] && "object" == typeof oObj[i] && iLevel < 2) {
 //            s+= "<br/>-----" + typeof oObj[i] + " --- " + iLevel + "</br>";
 //            s += this.printObj(oObj[i], iLevel + 1); 
 //        }
     }
     return s;
},

jsLoader:  {
    sBase: "", /* Base is this directory */
    oLoaded: [],
    load: function (aScripts) {
    
       var oS = document.getElementsByTagName("script");
       var k = 0;
       for (var j = 0; j < oS.length; j++) {
           if (oS[j].src == "") continue;
           this.oLoaded[k++] = oS[j].src;
       }

        var oHead = document.getElementsByTagName("head")[0];

        for (var i = 0; i < aScripts.length; i++) {
            var sNewSrc = this.sBase + aScripts[i];
            var oS = document.getElementsByTagName("script");
            var b = true;
            for (var j = 0; j < this.oLoaded.length; j++) {
                if (sNewSrc == this.oLoaded[j]) {
//                    alert(sNewSrc + " : already loaded");
                    b = false;
                }
            }

            if (b) {
                var oScript = document.createElement("script");
                oScript.src = sNewSrc;
                oScript.setAttribute("type", "text/javascript");
                oHead.appendChild(oScript);
                this.oLoaded[this.oLoaded.length] = sNewSrc;
            }
        }
    }
},

// Create an id that doesn't exist in this document
createNewId: function()
{
   var newid = null

   while (!newid || document.getElementById(newid)) {
       newid = "XID" + Math.round(Math.random() * 65536).toString(16)
   }
   return newid
}

};
	
    
String.prototype.trimSpaces = function(trimMode) {
    // 0 = trim begin and end
    // 1 = trim begin only
    // 2 = trim after only

    var targetString = this;
    var iPos = 0;
    if (!trimMode) trimMode = 0;
    
    if (trimMode==0 || trimMode==1) {
        if (targetString.charAt(iPos)==" ") {
            while(targetString.charAt(iPos)==" ") iPos++;
            targetString = targetString.substr(iPos);
        }
    }

    iPos = targetString.length-1;
    if (trimMode==0 || trimMode==2) {
        if (targetString.charAt(iPos) == " ") {
            while(targetString.charAt(iPos) == " ") iPos--;
            targetString = targetString.substr(0, iPos + 1);
        }
    }
    return targetString;
}




/* Shortcuts */

// Get elements by Id's
function $() {
  var elements = new Array();

  for (var i = 0; i < arguments.length; i++) {
    var element = arguments[i];
    if (typeof element == 'string')
      element = document.getElementById(element);

    if (arguments.length == 1)
      return element;

    elements.push(element);
  }

  return elements;
}

// Get elements by AttributeValue for Attributename
// http://www.dustindiaz.com/top-ten-javascript/ (but has some errors)
function $C(attrValue, attrName, node, tag) {          
    //alert([attrValue, attrName, node, tag])
    if ("*" == attrValue) {
        return $AN(attrName, node, tag);
    }
	var oElements = new Array();
	if (!node) node = document;
	if (!tag) tag = '*';
	if (!attrName) attrName = 'class';
    
	var els = node.getElementsByTagName(tag);
	var elsLen = els.length;
	var pattern = new RegExp("(^|\\s)" + attrValue + "(\\s|$)");
    var j = 0;
	for (i = 0; i < elsLen; i++) {
		if (attrName == "class" && pattern.test(els[i].className)) {
            // IE behavior
//            oElements.push(els[i]);
            oElements[j++] = els[i];
		} else if (pattern.test(els[i].getAttribute(attrName))) {
			oElements[j++] = els[i];
//			oElements.push(els[i]);
		}
	}
    return oElements;
}


function $AN(attrName, node, tag) {
	var oElements = new Array();
	if (node == null) node = document;
	if (tag == null)tag = '*';
	var els = node.getElementsByTagName(tag);
	for (i = 0; i < els.length; i++) {
		if (els[i].getAttribute(attrName) != null) {
			oElements.push(els[i]);
		}
	}
	return oElements;
}

function dump(aMessage) {
  var consoleService = Components.classes["@mozilla.org/consoleservice;1"]
                                 .getService(Components.interfaces.nsIConsoleService);
  consoleService.logStringMessage(aMessage);
}


// forEach iterators from Dean Edwards: http://dean.edwards.name/weblog/2006/07/enum/
// generic enumeration
Function.prototype.forEach = function(object, block, context) {
    for (var key in object) {
        if (typeof this.prototype[key] == "undefined") {
            block.call(context, object[key], key, object);
        }
    }
};

// globally resolve forEach enumeration
var forEach = function(object, block, context) {
    if (object) {
        var resolve = Object; // default
        if (object instanceof Function) {
            // functions have a "length" property
            resolve = Function;
        } else if (object.forEach instanceof Function) {
            // the object implements a custom forEach method so use that
            object.forEach(block, context);
            return;
        } else if (typeof object.length == "number") {
            // the object is array-like
            resolve = Array;
        }
        resolve.forEach(object, block, context);
    }
};

//
// Update Array class to JS 1.5 if not yet there.
//

// array-like enumeration
if (!Array.forEach) { // mozilla already supports this
    Array.forEach = function(object, block, context) {
        for (var i = 0; i < object.length; i++) {
            block.call(context, object[i], i, object);
        }
    };
}

if (!Array.prototype.indexOf)
	Array.prototype.indexOf = function(item, startIndex) {
		var len = this.length;
		if (startIndex == null)
			startIndex = 0;
		else if (startIndex < 0) {
			startIndex += len;
			if (startIndex < 0)
				startIndex = 0;
		}
		for (var i = startIndex; i < len; i++) {
			var val = this[i] || this.charAt && this.charAt(i);
			if (val == item)
				return i;
		}
		return -1;
	};

if (!Array.prototype.lastIndexOf)
	Array.prototype.lastIndexOf = function(item, startIndex) {
		var len = this.length;
		if (startIndex == null || startIndex >= len)
			startIndex = len - 1;
		else if (startIndex < 0)
			startIndex += len;
		for (var i = startIndex; i >= 0; i--) {
			var val = this[i] || this.charAt && this.charAt(i);
			if (val == item)
				return i;
		}
		return -1;
	};

if (!Array.prototype.map)
	Array.prototype.map = function(func, thisVal) {
		var len = this.length;
		var ret = new Array(len);
		for (var i = 0; i < len; i++)
			ret[i] = func.call(thisVal, this[i] || this.charAt && this.charAt(i), i, this);
		return ret;
	};

if (!Array.prototype.filter)
	Array.prototype.filter = function(func, thisVal) {
		var len = this.length;
		var ret = new Array();
		for (var i = 0; i < len; i++) {
			var val = this[i] || this.charAt && this.charAt(i);
			if(func.call(thisVal, val, i, this))
				ret[ret.length] = val;
		}
		return ret;
	};

if (!Array.prototype.every)
	Array.prototype.every = function(func, thisVal) {
		var len = this.length;
		for (var i = 0; i < len; i++)
			if (!func.call(thisVal, this[i] || this.charAt && this.charAt(i), i, this))
				return false;
		return true;
	};

if (!Array.prototype.some)
	Array.prototype.some = function(func, thisVal) {
		var len = this.length;
		for (var i = 0; i < len; i++)
			if (func.call(thisVal, this[i] || this.charAt && this.charAt(i), i, this))
				return true;
		return false;
	};

/*
	cssQuery, version 2.0.2 (2005-08-19)
	Copyright: 2004-2005, Dean Edwards (http://dean.edwards.name/)
	License: http://creativecommons.org/licenses/LGPL/2.1/
*/
eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)d[e(c)]=k[c]||e(c);k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 x=6(){7 1D="2.0.2";7 C=/\\s*,\\s*/;7 x=6(s,A){33{7 m=[];7 u=1z.32.2c&&!A;7 b=(A)?(A.31==22)?A:[A]:[1g];7 1E=18(s).1l(C),i;9(i=0;i<1E.y;i++){s=1y(1E[i]);8(U&&s.Z(0,3).2b("")==" *#"){s=s.Z(2);A=24([],b,s[1])}1A A=b;7 j=0,t,f,a,c="";H(j<s.y){t=s[j++];f=s[j++];c+=t+f;a="";8(s[j]=="("){H(s[j++]!=")")a+=s[j];a=a.Z(0,-1);c+="("+a+")"}A=(u&&V[c])?V[c]:21(A,t,f,a);8(u)V[c]=A}m=m.30(A)}2a x.2d;5 m}2Z(e){x.2d=e;5[]}};x.1Z=6(){5"6 x() {\\n  [1D "+1D+"]\\n}"};7 V={};x.2c=L;x.2Y=6(s){8(s){s=1y(s).2b("");2a V[s]}1A V={}};7 29={};7 19=L;x.15=6(n,s){8(19)1i("s="+1U(s));29[n]=12 s()};x.2X=6(c){5 c?1i(c):o};7 D={};7 h={};7 q={P:/\\[([\\w-]+(\\|[\\w-]+)?)\\s*(\\W?=)?\\s*([^\\]]*)\\]/};7 T=[];D[" "]=6(r,f,t,n){7 e,i,j;9(i=0;i<f.y;i++){7 s=X(f[i],t,n);9(j=0;(e=s[j]);j++){8(M(e)&&14(e,n))r.z(e)}}};D["#"]=6(r,f,i){7 e,j;9(j=0;(e=f[j]);j++)8(e.B==i)r.z(e)};D["."]=6(r,f,c){c=12 1t("(^|\\\\s)"+c+"(\\\\s|$)");7 e,i;9(i=0;(e=f[i]);i++)8(c.l(e.1V))r.z(e)};D[":"]=6(r,f,p,a){7 t=h[p],e,i;8(t)9(i=0;(e=f[i]);i++)8(t(e,a))r.z(e)};h["2W"]=6(e){7 d=Q(e);8(d.1C)9(7 i=0;i<d.1C.y;i++){8(d.1C[i]==e)5 K}};h["2V"]=6(e){};7 M=6(e){5(e&&e.1c==1&&e.1f!="!")?e:23};7 16=6(e){H(e&&(e=e.2U)&&!M(e))28;5 e};7 G=6(e){H(e&&(e=e.2T)&&!M(e))28;5 e};7 1r=6(e){5 M(e.27)||G(e.27)};7 1P=6(e){5 M(e.26)||16(e.26)};7 1o=6(e){7 c=[];e=1r(e);H(e){c.z(e);e=G(e)}5 c};7 U=K;7 1h=6(e){7 d=Q(e);5(2S d.25=="2R")?/\\.1J$/i.l(d.2Q):2P(d.25=="2O 2N")};7 Q=6(e){5 e.2M||e.1g};7 X=6(e,t){5(t=="*"&&e.1B)?e.1B:e.X(t)};7 17=6(e,t,n){8(t=="*")5 M(e);8(!14(e,n))5 L;8(!1h(e))t=t.2L();5 e.1f==t};7 14=6(e,n){5!n||(n=="*")||(e.2K==n)};7 1e=6(e){5 e.1G};6 24(r,f,B){7 m,i,j;9(i=0;i<f.y;i++){8(m=f[i].1B.2J(B)){8(m.B==B)r.z(m);1A 8(m.y!=23){9(j=0;j<m.y;j++){8(m[j].B==B)r.z(m[j])}}}}5 r};8(![].z)22.2I.z=6(){9(7 i=0;i<1z.y;i++){o[o.y]=1z[i]}5 o.y};7 N=/\\|/;6 21(A,t,f,a){8(N.l(f)){f=f.1l(N);a=f[0];f=f[1]}7 r=[];8(D[t]){D[t](r,A,f,a)}5 r};7 S=/^[^\\s>+~]/;7 20=/[\\s#.:>+~()@]|[^\\s#.:>+~()@]+/g;6 1y(s){8(S.l(s))s=" "+s;5 s.P(20)||[]};7 W=/\\s*([\\s>+~(),]|^|$)\\s*/g;7 I=/([\\s>+~,]|[^(]\\+|^)([#.:@])/g;7 18=6(s){5 s.O(W,"$1").O(I,"$1*$2")};7 1u={1Z:6(){5"\'"},P:/^(\'[^\']*\')|("[^"]*")$/,l:6(s){5 o.P.l(s)},1S:6(s){5 o.l(s)?s:o+s+o},1Y:6(s){5 o.l(s)?s.Z(1,-1):s}};7 1s=6(t){5 1u.1Y(t)};7 E=/([\\/()[\\]?{}|*+-])/g;6 R(s){5 s.O(E,"\\\\$1")};x.15("1j-2H",6(){D[">"]=6(r,f,t,n){7 e,i,j;9(i=0;i<f.y;i++){7 s=1o(f[i]);9(j=0;(e=s[j]);j++)8(17(e,t,n))r.z(e)}};D["+"]=6(r,f,t,n){9(7 i=0;i<f.y;i++){7 e=G(f[i]);8(e&&17(e,t,n))r.z(e)}};D["@"]=6(r,f,a){7 t=T[a].l;7 e,i;9(i=0;(e=f[i]);i++)8(t(e))r.z(e)};h["2G-10"]=6(e){5!16(e)};h["1x"]=6(e,c){c=12 1t("^"+c,"i");H(e&&!e.13("1x"))e=e.1n;5 e&&c.l(e.13("1x"))};q.1X=/\\\\:/g;q.1w="@";q.J={};q.O=6(m,a,n,c,v){7 k=o.1w+m;8(!T[k]){a=o.1W(a,c||"",v||"");T[k]=a;T.z(a)}5 T[k].B};q.1Q=6(s){s=s.O(o.1X,"|");7 m;H(m=s.P(o.P)){7 r=o.O(m[0],m[1],m[2],m[3],m[4]);s=s.O(o.P,r)}5 s};q.1W=6(p,t,v){7 a={};a.B=o.1w+T.y;a.2F=p;t=o.J[t];t=t?t(o.13(p),1s(v)):L;a.l=12 2E("e","5 "+t);5 a};q.13=6(n){1d(n.2D()){F"B":5"e.B";F"2C":5"e.1V";F"9":5"e.2B";F"1T":8(U){5"1U((e.2A.P(/1T=\\\\1v?([^\\\\s\\\\1v]*)\\\\1v?/)||[])[1]||\'\')"}}5"e.13(\'"+n.O(N,":")+"\')"};q.J[""]=6(a){5 a};q.J["="]=6(a,v){5 a+"=="+1u.1S(v)};q.J["~="]=6(a,v){5"/(^| )"+R(v)+"( |$)/.l("+a+")"};q.J["|="]=6(a,v){5"/^"+R(v)+"(-|$)/.l("+a+")"};7 1R=18;18=6(s){5 1R(q.1Q(s))}});x.15("1j-2z",6(){D["~"]=6(r,f,t,n){7 e,i;9(i=0;(e=f[i]);i++){H(e=G(e)){8(17(e,t,n))r.z(e)}}};h["2y"]=6(e,t){t=12 1t(R(1s(t)));5 t.l(1e(e))};h["2x"]=6(e){5 e==Q(e).1H};h["2w"]=6(e){7 n,i;9(i=0;(n=e.1F[i]);i++){8(M(n)||n.1c==3)5 L}5 K};h["1N-10"]=6(e){5!G(e)};h["2v-10"]=6(e){e=e.1n;5 1r(e)==1P(e)};h["2u"]=6(e,s){7 n=x(s,Q(e));9(7 i=0;i<n.y;i++){8(n[i]==e)5 L}5 K};h["1O-10"]=6(e,a){5 1p(e,a,16)};h["1O-1N-10"]=6(e,a){5 1p(e,a,G)};h["2t"]=6(e){5 e.B==2s.2r.Z(1)};h["1M"]=6(e){5 e.1M};h["2q"]=6(e){5 e.1q===L};h["1q"]=6(e){5 e.1q};h["1L"]=6(e){5 e.1L};q.J["^="]=6(a,v){5"/^"+R(v)+"/.l("+a+")"};q.J["$="]=6(a,v){5"/"+R(v)+"$/.l("+a+")"};q.J["*="]=6(a,v){5"/"+R(v)+"/.l("+a+")"};6 1p(e,a,t){1d(a){F"n":5 K;F"2p":a="2n";1a;F"2o":a="2n+1"}7 1m=1o(e.1n);6 1k(i){7 i=(t==G)?1m.y-i:i-1;5 1m[i]==e};8(!Y(a))5 1k(a);a=a.1l("n");7 m=1K(a[0]);7 s=1K(a[1]);8((Y(m)||m==1)&&s==0)5 K;8(m==0&&!Y(s))5 1k(s);8(Y(s))s=0;7 c=1;H(e=t(e))c++;8(Y(m)||m==1)5(t==G)?(c<=s):(s>=c);5(c%m)==s}});x.15("1j-2m",6(){U=1i("L;/*@2l@8(@\\2k)U=K@2j@*/");8(!U){X=6(e,t,n){5 n?e.2i("*",t):e.X(t)};14=6(e,n){5!n||(n=="*")||(e.2h==n)};1h=1g.1I?6(e){5/1J/i.l(Q(e).1I)}:6(e){5 Q(e).1H.1f!="2g"};1e=6(e){5 e.2f||e.1G||1b(e)};6 1b(e){7 t="",n,i;9(i=0;(n=e.1F[i]);i++){1d(n.1c){F 11:F 1:t+=1b(n);1a;F 3:t+=n.2e;1a}}5 t}}});19=K;5 x}();',62,190,'|||||return|function|var|if|for||||||||pseudoClasses||||test|||this||AttributeSelector|||||||cssQuery|length|push|fr|id||selectors||case|nextElementSibling|while||tests|true|false|thisElement||replace|match|getDocument|regEscape||attributeSelectors|isMSIE|cache||getElementsByTagName|isNaN|slice|child||new|getAttribute|compareNamespace|addModule|previousElementSibling|compareTagName|parseSelector|loaded|break|_0|nodeType|switch|getTextContent|tagName|document|isXML|eval|css|_1|split|ch|parentNode|childElements|nthChild|disabled|firstElementChild|getText|RegExp|Quote|x22|PREFIX|lang|_2|arguments|else|all|links|version|se|childNodes|innerText|documentElement|contentType|xml|parseInt|indeterminate|checked|last|nth|lastElementChild|parse|_3|add|href|String|className|create|NS_IE|remove|toString|ST|select|Array|null|_4|mimeType|lastChild|firstChild|continue|modules|delete|join|caching|error|nodeValue|textContent|HTML|prefix|getElementsByTagNameNS|end|x5fwin32|cc_on|standard||odd|even|enabled|hash|location|target|not|only|empty|root|contains|level3|outerHTML|htmlFor|class|toLowerCase|Function|name|first|level2|prototype|item|scopeName|toUpperCase|ownerDocument|Document|XML|Boolean|URL|unknown|typeof|nextSibling|previousSibling|visited|link|valueOf|clearCache|catch|concat|constructor|callee|try'.split('|'),0,{}))
