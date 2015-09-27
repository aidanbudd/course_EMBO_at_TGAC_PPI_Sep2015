// *********************************************************************************************
// QUARANTINE AREA START :  These functions will be removed before production, if they are unclaimed.
// *********************************************************************************************


// *********************************************************************************************
// QUARANTINE AREA END
// *********************************************************************************************

/****************************************
 * Javascripts created for SRS by :		*
 * Mark Bingley, Xavier Watkins,  		*
 * Thomas Laurent & Michael Goujon      *
 * 2005 / 2006 						    *
 ****************************************/


// This sets the variable for the Theme. This is used across the whole site when creating dynamic content with JavaScript
var themeName = "biowisdom";
 
//function checkAnnoEntries(entryId){
//	alert(entryId);
//	var entryLibrary = entryId.split(":")[0].toLowerCase();
//	if(entryLibrary == 'annotations'){
//		AjaxServices.checkEntriesExist(entryId, 
//			{callback:function(checkMap){flagOrphanEntries(checkMap);}}
//		);	
//	}
//} 
 
// used by medline text mining view 
// THIS IS UNFINISHED. The parameters need passing but currently they are page scoped variables in queryresulttable.jsp and I have no access to them.
// When prev and next buttons change this can be fixed.
function filterScore(id) {
  var thescore = document.forms['primaryForm'].tmscore.value;
  var scoreValue=thescore
    document.location = 'showEntryView.do?entryId=MEDLINE:'+id+'&scoreValue='+scoreValue+'&pQ=q1&num=1&total=20&sF=&sD=0&pV=MedlineBibliographic&pDB=&pC=&pCT=&pSt=1&pSz=30&pCN=';
}

// controls the pressing of the enter key on the quicksearch/querybuilder/refine pages
function Qcodes(e, context){
	var whichCode;
	if (e.type == "keypress") {
		whichCode = e.keyCode
	}else{
		whichCode = e.button;
	}
	if (whichCode == 13) {
		if(context == 'quicksearch'){ 
			quickSearchBarSubmit();
		} else if (context == 'querybuilder'){
			queryBuilderSubmit(); 
		} else if (context == 'refine'){
			queryRefineSubmit();  
		}	  
		return false;
	}
}
		
// Variable which give the go ahead to the goToPage(...) function
// Set to 1, goToPage(...) is executed
// Set to 0, goToPage(...) is not executed
var okToGo = 1;
// Variable which give the go ahead to the setVar(...) function
// Set to 1, setVar(...) is executed
// Set to 0, setVar(...) is not executed
var okToSet = 1;

// Ultimate client-side JavaScript client sniff. Version 3.03
// (C) Netscape Communications 1999-2001.  Permission granted to reuse and distribute.
// Revised 17 May 99 to add is_nav5up and is_ie5up (see below).
// Revised 20 Dec 00 to add is_gecko and change is_nav5up to is_nav6up
//                      also added support for IE5.5 Opera4&5 HotJava3 AOLTV
// Revised 22 Feb 01 to correct Javascript Detection for IE 5.x, Opera 4, 
//                      correct Opera 5 detection
//                      add support for winME and win2k
//                      synch with browser-type-oo.js
// Revised 26 Mar 01 to correct Opera detection
// Revised 02 Oct 01 to add IE6 detection

// Everything you always wanted to know about your JavaScript client
// but were afraid to ask. Creates "is_" variables indicating:
// (1) browser vendor:
//     is_nav, is_ie, is_opera, is_hotjava, is_webtv, is_TVNavigator, is_AOLTV
// (2) browser version number:
//     is_major (integer indicating major version number: 2, 3, 4 ...)
//     is_minor (float   indicating full  version number: 2.02, 3.01, 4.04 ...)
// (3) browser vendor AND major version number
//     is_nav2, is_nav3, is_nav4, is_nav4up, is_nav6, is_nav6up, is_gecko, is_ie3,
//     is_ie4, is_ie4up, is_ie5, is_ie5up, is_ie5_5, is_ie5_5up, is_ie6, is_ie6up, is_hotjava3, is_hotjava3up,
//     is_opera2, is_opera3, is_opera4, is_opera5, is_opera5up
// (4) JavaScript version number:
//     is_js (float indicating full JavaScript version number: 1, 1.1, 1.2 ...)
// (5) OS platform and version:
//     is_win, is_win16, is_win32, is_win31, is_win95, is_winnt, is_win98, is_winme, is_win2k
//     is_os2
//     is_mac, is_mac68k, is_macppc
//     is_unix
//     is_sun, is_sun4, is_sun5, is_suni86
//     is_irix, is_irix5, is_irix6
//     is_hpux, is_hpux9, is_hpux10
//     is_aix, is_aix1, is_aix2, is_aix3, is_aix4
//     is_linux, is_sco, is_unixware, is_mpras, is_reliant
//     is_dec, is_sinix, is_freebsd, is_bsd
//     is_vms
//
// See http://www.it97.de/JavaScript/JS_tutorial/bstat/navobj.html and
// http://www.it97.de/JavaScript/JS_tutorial/bstat/Browseraol.html
// for detailed lists of userAgent strings.
//
// Note: you don't want your Nav4 or IE4 code to "turn off" or
// stop working when new versions of browsers are released, so
// in conditional code forks, use is_ie5up ("IE 5.0 or greater") 
// is_opera5up ("Opera 5.0 or greater") instead of is_ie5 or is_opera5
// to check version in code which you want to work on future
// versions.

// convert all characters to lowercase to simplify testing
var agt=navigator.userAgent.toLowerCase();

// *** BROWSER VERSION ***
// Note: On IE5, these return 4, so use is_ie5up to detect IE5.
var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);

// Note: Opera and WebTV spoof Navigator.  We do strict client detection.
// If you want to allow spoofing, take out the tests for opera and webtv.
var is_nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
	       && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
	       && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
var is_nav2 = (is_nav && (is_major == 2));
var is_nav3 = (is_nav && (is_major == 3));
var is_nav4 = (is_nav && (is_major == 4));
var is_nav4up = (is_nav && (is_major >= 4));
var is_navonly      = (is_nav && ((agt.indexOf(";nav") != -1) ||
				  (agt.indexOf("; nav") != -1)) );
var is_nav6 = (is_nav && (is_major == 5));
var is_nav6up = (is_nav && (is_major >= 5));
var is_gecko = (agt.indexOf('gecko') != -1);


var is_ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
var is_ie3    = (is_ie && (is_major < 4));
var is_ie4    = (is_ie && (is_major == 4) && (agt.indexOf("msie 4")!=-1) );
var is_ie4up  = (is_ie && (is_major >= 4));
var is_ie5    = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.0")!=-1) );
var is_ie5_5  = (is_ie && (is_major == 4) && (agt.indexOf("msie 5.5") !=-1));
var is_ie5up  = (is_ie && !is_ie3 && !is_ie4);
var is_ie5_5up =(is_ie && !is_ie3 && !is_ie4 && !is_ie5);
var is_ie6    = (is_ie && (is_major == 4) && (agt.indexOf("msie 6.")!=-1) );
var is_ie6up  = (is_ie && !is_ie3 && !is_ie4 && !is_ie5 && !is_ie5_5);
	
var is_moz   = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
		(agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
		(agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
		(is_gecko) && 
		((navigator.vendor=="")||(navigator.vendor=="Mozilla")||(navigator.vendor=="Debian")));
var is_fb = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
	     (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
	     (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
	     (is_gecko) && (navigator.vendor=="Firebird"));
var is_fx = ((agt.indexOf('mozilla/5')!=-1) && (agt.indexOf('spoofer')==-1) &&
	     (agt.indexOf('compatible')==-1) && (agt.indexOf('opera')==-1)  &&
	     (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1)     &&
	     (is_gecko) && (navigator.vendor=="Firefox"));


// KNOWN BUG: On AOL4, returns false if IE3 is embedded browser
// or if this is the first browser window opened.  Thus the
// variables is_aol, is_aol3, and is_aol4 aren't 100% reliable.
var is_aol   = (agt.indexOf("aol") != -1);
var is_aol3  = (is_aol && is_ie3);
var is_aol4  = (is_aol && is_ie4);
var is_aol5  = (agt.indexOf("aol 5") != -1);
var is_aol6  = (agt.indexOf("aol 6") != -1);

var is_opera = (agt.indexOf("opera") != -1);
var is_opera2 = (agt.indexOf("opera 2") != -1 || agt.indexOf("opera/2") != -1);
var is_opera3 = (agt.indexOf("opera 3") != -1 || agt.indexOf("opera/3") != -1);
var is_opera4 = (agt.indexOf("opera 4") != -1 || agt.indexOf("opera/4") != -1);
var is_opera5 = (agt.indexOf("opera 5") != -1 || agt.indexOf("opera/5") != -1);
var is_opera5up = (is_opera && !is_opera2 && !is_opera3 && !is_opera4);

var is_webtv = (agt.indexOf("webtv") != -1); 

var is_TVNavigator = ((agt.indexOf("navio") != -1) || (agt.indexOf("navio_aoltv") != -1)); 
var is_AOLTV = is_TVNavigator;

var is_hotjava = (agt.indexOf("hotjava") != -1);
var is_hotjava3 = (is_hotjava && (is_major == 3));
var is_hotjava3up = (is_hotjava && (is_major >= 3));

// *** JAVASCRIPT VERSION CHECK ***
var is_js;
if (is_nav2 || is_ie3) is_js = 1.0;
else if (is_nav3) is_js = 1.1;
else if (is_opera5up) is_js = 1.3;
else if (is_opera) is_js = 1.1;
else if ((is_nav4 && (is_minor <= 4.05)) || is_ie4) is_js = 1.2;
else if ((is_nav4 && (is_minor > 4.05)) || is_ie5) is_js = 1.3;
else if (is_hotjava3up) is_js = 1.4;
else if (is_nav6 || is_gecko) is_js = 1.5;
// NOTE: In the future, update this code when newer versions of JS
// are released. For now, we try to pro vide some upward compatibility
// so that future versions of Nav and IE will show they are at
// *least* JS 1.x capable. Always check for JS version compatibility
// with > or >=.
else if (is_nav6up) is_js = 1.5;
// NOTE: ie5up on mac is 1.4
else if (is_ie5up) is_js = 1.3

// HACK: no idea for other browsers; always check for JS version with > or >=
else is_js = 0.0;

// *** PLATFORM ***
var is_win   = ( (agt.indexOf("win")!=-1) || (agt.indexOf("16bit")!=-1) );
// NOTE: On Opera 3.0, the userAgent string includes "Windows 95/NT4" on all
//        Win32, so you can't distinguish between Win95 and WinNT.
var is_win95 = ((agt.indexOf("win95")!=-1) || (agt.indexOf("windows 95")!=-1));

// is this a 16 bit compiled version?
var is_win16 = ((agt.indexOf("win16")!=-1) || 
		(agt.indexOf("16bit")!=-1) || (agt.indexOf("windows 3.1")!=-1) || 
		(agt.indexOf("windows 16-bit")!=-1) );  

var is_win31 = ((agt.indexOf("windows 3.1")!=-1) || (agt.indexOf("win16")!=-1) ||
		(agt.indexOf("windows 16-bit")!=-1));

var is_winme = ((agt.indexOf("win 9x 4.90")!=-1));
var is_win2k = ((agt.indexOf("windows nt 5.0")!=-1));

// NOTE: Reliable detection of Win98 may not be possible. It appears that:
//       - On Nav 4.x and before you'll get plain "Windows" in userAgent.
//       - On Mercury client, the 32-bit version will return "Win98", but
//         the 16-bit version running on Win98 will still return "Win95".
var is_win98 = ((agt.indexOf("win98")!=-1) || (agt.indexOf("windows 98")!=-1));
var is_winnt = ((agt.indexOf("winnt")!=-1) || (agt.indexOf("windows nt")!=-1));
var is_win32 = (is_win95 || is_winnt || is_win98 || 
		((is_major >= 4) && (navigator.platform == "Win32")) ||
		(agt.indexOf("win32")!=-1) || (agt.indexOf("32bit")!=-1));

var is_os2   = ((agt.indexOf("os/2")!=-1) || 
		(navigator.appVersion.indexOf("OS/2")!=-1) ||   
		(agt.indexOf("ibm-webexplorer")!=-1));

var is_mac    = (agt.indexOf("mac")!=-1);
// hack ie5 js version for mac
if (is_mac && is_ie5up) is_js = 1.4;
var is_mac68k = (is_mac && ((agt.indexOf("68k")!=-1) || 
			    (agt.indexOf("68000")!=-1)));
var is_macppc = (is_mac && ((agt.indexOf("ppc")!=-1) || 
			    (agt.indexOf("powerpc")!=-1)));
	
var is_safari = ((agt.indexOf('safari')!=-1)&&(agt.indexOf('mac')!=-1))?true:false;

var is_sun   = (agt.indexOf("sunos")!=-1);
var is_sun4  = (agt.indexOf("sunos 4")!=-1);
var is_sun5  = (agt.indexOf("sunos 5")!=-1);
var is_suni86= (is_sun && (agt.indexOf("i86")!=-1));
var is_irix  = (agt.indexOf("irix") !=-1);    // SGI
var is_irix5 = (agt.indexOf("irix 5") !=-1);
var is_irix6 = ((agt.indexOf("irix 6") !=-1) || (agt.indexOf("irix6") !=-1));
var is_hpux  = (agt.indexOf("hp-ux")!=-1);
var is_hpux9 = (is_hpux && (agt.indexOf("09.")!=-1));
var is_hpux10= (is_hpux && (agt.indexOf("10.")!=-1));
var is_aix   = (agt.indexOf("aix") !=-1);      // IBM
var is_aix1  = (agt.indexOf("aix 1") !=-1);    
var is_aix2  = (agt.indexOf("aix 2") !=-1);    
var is_aix3  = (agt.indexOf("aix 3") !=-1);    
var is_aix4  = (agt.indexOf("aix 4") !=-1);    
var is_linux = (agt.indexOf("inux")!=-1);
var is_sco   = (agt.indexOf("sco")!=-1) || (agt.indexOf("unix_sv")!=-1);
var is_unixware = (agt.indexOf("unix_system_v")!=-1); 
var is_mpras    = (agt.indexOf("ncr")!=-1); 
var is_reliant  = (agt.indexOf("reliantunix")!=-1);
var is_dec   = ((agt.indexOf("dec")!=-1) || (agt.indexOf("osf1")!=-1) || 
		(agt.indexOf("dec_alpha")!=-1) || (agt.indexOf("alphaserver")!=-1) || 
		(agt.indexOf("ultrix")!=-1) || (agt.indexOf("alphastation")!=-1)); 
var is_sinix = (agt.indexOf("sinix")!=-1);
var is_freebsd = (agt.indexOf("freebsd")!=-1);
var is_bsd = (agt.indexOf("bsd")!=-1);
var is_unix  = ((agt.indexOf("x11")!=-1) || is_sun || is_irix || is_hpux || 
		is_sco ||is_unixware || is_mpras || is_reliant || 
		is_dec || is_sinix || is_aix || is_linux || is_bsd || is_freebsd);

var is_vms   = ((agt.indexOf("vax")!=-1) || (agt.indexOf("openvms")!=-1));
	
var macFirefoxAlert = false;
if ((is_fx) && (is_mac)){
  macFirefoxAlert = true;
}

var macFirefoxScrollerIs = 'nothing';

// function used to hide errant scroll bars if user is on a Mac and using Firefox
function hideMacFirefoxScroller(){
  if (macFirefoxAlert){
    if (macFirefoxScrollerIs != "nothing"){
      document.getElementById(macFirefoxScrollerIs).style.overflow = "hidden";
      macFirefoxScrollerIs = 'nothing';
    }
  }
}
// function used to re-show scroll bars if user is on a Mac and using Firefox and they were hidden using function hideMacFirefoxScroller above
function showMacFirefoxScroller(divId){
  if (macFirefoxAlert){
    document.getElementById(divId).style.overflow = "auto";
    macFirefoxScrollerIs = divId;
  }
}

// To avoid using javascript:void() a function
// is provided for text mining that intentionally does nothing. 
function highlightPhrase(){
}

function hideTip(id)
{
  if (is_gecko) { 
    elm = document.getElementById(id);
    elm.style.visibility="hidden";
  } else if (is_nav4up) {
    document.layers[id].visibility="hidden";
  } else {
    document.all[id].style.visibility="hidden";
  }
}

// This function returns cookie information
function getCookie(NameOfCookie){
  if (document.cookie.length > 0){
    var begin = document.cookie.indexOf(NameOfCookie+"=");
    if (begin != -1){
      begin += NameOfCookie.length+1;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) end = document.cookie.length;
      return unescape(document.cookie.substring(begin, end)); }
  }
  return null;
}
// This function Sets a new cookie
function setCookie(NameOfCookie, value, expiredays){
  var ExpireDate = new Date ();
  ExpireDate.setTime(ExpireDate.getTime() + (expiredays * 24 * 3600 * 1000));
  document.cookie = NameOfCookie + "=" + escape(value) +((expiredays == null) ? "" : "; expires=" + ExpireDate.toGMTString());
}
// This function deletes a cookie by name
function delCookie (NameOfCookie){
  if (getCookie(NameOfCookie)) {
    document.cookie = NameOfCookie + "=" +"; expires=Thu, 01-Jan-70 00:00:01 GMT";
  }
}

// This function changes the highlight class of an object found by its ID
function changehighlight(id, changeClass){
  var temp = document.getElementById(id);
  temp.className = changeClass;
}

// This function is used to swap the source of an objects image
function swapImage(thisThing, replacement){
  thisThing.src = replacement;
	
}

// This function sets an objects value if it exists
function setFormElementById(id, value) {
  var formElement = document.getElementById(id);
  if(formElement) {
    formElement.value = value;
  }
}




// Functions used in tree representations of
// a hierarchy (Query Builder page, Analysis Tools page...)

// Controls collapsible entry view sections
function toggleRegion(regionName, action) {
  var node = document.getElementById(regionName);
  sectionImageName = "image_" + regionName;
  sectionLinkName = "imgLink_" + sectionImageName;
  var img = document.getElementById(sectionImageName);
  var link = document.getElementById(sectionLinkName);
  if(node) {
    if(action == 1) {
      // Expand
      //  node.style.display='block'; 
      // 'block' didn't work in a tbody in firefox - need table-row-group, which doesn't work in IE, therefore used class to specify both
      node.className = 'showsection';
      img.src = "images/shared/minus.gif";
      link.href = "javascript:toggleRegion('" + regionName + "'," + "0);";
      setCookie(regionName, 1); 
      var stuff = getCookie(regionName);
      }
    else {
      // Collapse
      node.className = 'hidesection';
      img.src = "images/shared/plus.gif";
      link.href = "javascript:toggleRegion('" + regionName + "'," + "1);";
      setCookie(regionName, 0);
      var stuff = getCookie(regionName);
    }
  }
}

// ascertain the state of the collapsable sections in an entry view
function evaluateSections(currentSectionString){
  var collapsibleSections="";
  var list=currentSectionString.split("@");
  for (var j=0; j<list.length; j++){
    var cookieValue = getCookie(list[j]);
    if (cookieValue != null && cookieValue != '') {
      var coll_section = list[j];
      var imageName = "image_" + coll_section;
      var linkName = "imgLink_" + imageName;  
      toggleRegion(coll_section, cookieValue);
    }
  }
}
      
// This function activates 1 or several collapsible HTML sections
function toggleRegions(groupStatusList) {
  var nameValuePairs = groupStatusList.split("@");
  for (var i=0; i<nameValuePairs.length; i++) {
    var nameValue = nameValuePairs[i].split('=');
    var regionName = nameValue[0];
    var action = nameValue[1];
    var node = document.getElementById(regionName);
    var img = document.getElementById(regionName+"_img");
    var link = document.getElementById(regionName+"_link");
    if (node && img && link) {
      if(action == 1) {
	// Expand
	node.style.display='block';
	img.src = "images/shared/minus.gif";
	link.href = "javascript:toggleRegions('" + regionName + "=" + "0');";
      }
      else {
	// Collapse
	node.style.display='none';
	img.src = "images/shared/plus.gif";
	link.href = "javascript:toggleRegions('" + regionName + "=" + "1');";
      }
    }
  }
}

// This function is used to expand/collapse all the concepts in one go
function toggleAll(action, groupListId) {
  var concepTreeNames = document.getElementById(groupListId);
  if (concepTreeNames) {
    var valuesForToggle = '';
    var conceptList = concepTreeNames.value.split(";");
    for (var i=1; i<conceptList.length; i++) { // start at 1 because the 1st
                                               // elt is empty 
      if (valuesForToggle == '') {
	valuesForToggle =  conceptList[i] + "=" + action;
      }
      else {
	valuesForToggle = valuesForToggle + "@" + conceptList[i] + "=" + action;
      }
    }
    toggleRegions(valuesForToggle);
  }
}

// This function write a cookie containing the 
// collapse/expand status of the groups displayed
function getGroupStatus(cookieName, groupListId) {
  var concepTreeNames = document.getElementById(groupListId);
  if (concepTreeNames) {
    var cookieValue = '';
    var conceptList = concepTreeNames.value.split(";");
    for (var i=1; i<conceptList.length; i++) { // start at 1 because the 1st
                                               // elt is empty
      var conceptDiv = document.getElementById(conceptList[i]);
      if (conceptDiv) {
	var divStatus = 0; // Collapsed by default
	if (conceptDiv.style.display == 'block') {
	  divStatus = 1; // Div is expanded
	}
	if (cookieValue == '') {
	  cookieValue =  conceptList[i] + "=" + divStatus;
	}
	else {
	  cookieValue = cookieValue + "@" + conceptList[i] + "=" + divStatus;
	}
      }
    }
    setCookie(cookieName, cookieValue);
  }
}

// This function read the cookie containing the collapse/expand
// status of the groups displayed and set them back to the right status
function setGroupStatus(cookieName, stateListId) {
  var cookieValue = getCookie(cookieName);
  if (cookieValue != null && cookieValue != '') {
    toggleRegions(cookieValue);
  }
  else {
    setGroupsInitialState(stateListId);
  }
}

// This function is used to set the initial state (collapsed, expanded)
// of the groups, when no information has been stored in a cookie
function setGroupsInitialState(stateListId) {
  var hiddenStateList = document.getElementById(stateListId);
  if (hiddenStateList)
    toggleRegions(hiddenStateList.value);
}

//
// Revisions of the functions for new tree structure
//
      
// This function activates 1 or several collapsible HTML sections
function toggleRegions2(groupStatusList) {
  if(popupOpened!=0){
    alert("Please accept or cancel the databank selection");	
  } else {
  var nameValuePairs = groupStatusList.split("@");
  for (var i=0; i<nameValuePairs.length; i++) {
    var nameValue = nameValuePairs[i].split('=');
    var regionName = nameValue[0];
    var action = nameValue[1];
    var node = document.getElementById(regionName);
    var td = document.getElementById(regionName+"_toggle");
    var link = document.getElementById(regionName+"_link");
    var treeLine = document.getElementById(regionName+"_treeLine");
    if (node && td && link) {
      if(action == 1) {
	// Expand
	node.style.display='block';
	td.style.backgroundImage = "url(images/shared/tree_minus.gif)";
	link.href = "javascript:toggleRegions2('" + regionName + "=" + "0');";
	if (treeLine)
	  treeLine.style.backgroundImage = "url(images/shared/tree_line.gif)";
      }
      else {
	// Collapse
	node.style.display='none';
	td.style.backgroundImage = "url(images/shared/tree_plus.gif)";
	link.href = "javascript:toggleRegions2('" + regionName + "=" + "1');";
	if (treeLine)
	  treeLine.style.backgroundImage = "url(images/shared/null.gif)";
      }
    }
  }
  }
}

// This function is used to expand/collapse all the concepts in one go
function toggleAll2(action, groupListId) {
  var concepTreeNames = document.getElementById(groupListId);
  if (concepTreeNames) {
    var valuesForToggle = '';
    var conceptList = concepTreeNames.value.split(";");
    for (var i=1; i<conceptList.length; i++) { // start at 1 because the 1st
                                               // elt is empty 
      if (valuesForToggle == '') {
	valuesForToggle =  conceptList[i] + "=" + action;
      }
      else {
	valuesForToggle = valuesForToggle + "@" + conceptList[i] + "=" + action;
      }
    }
    toggleRegions2(valuesForToggle);
  }
}

// This function read the cookie containing the collapse/expand
// status of the groups displayed and set them back to the right status
function setGroupStatus2(cookieName, stateListId) {
  var cookieValue = getCookie(cookieName);
  if (cookieValue != null && cookieValue != '') {
    toggleRegions2(cookieValue);
  }
  else {
    setGroupsInitialState2(stateListId);
  }
}


// This function is used to set the initial state (collapsed, expanded)
// of the groups, when no information has been stored in a cookie
function setGroupsInitialState2(stateListId) {
  var hiddenStateList = document.getElementById(stateListId);
  if (hiddenStateList)
    toggleRegions2(hiddenStateList.value);
}

/************************************************
 * Javascript used to show / hide tips   		*
 * Author : Xavier Watkins, Aug 2005             *
 ************************************************/



function displayTip2(tipId, offset){
  if (isIE){
    posx = posx - offset -100;	
    posy = posy - 100;
  }else{
    posx = posx - offset +'px';
  }
	
  document.getElementById(tipId).style.left = posx;
  document.getElementById(tipId).style.top = posy;
  document.getElementById(tipId).style.visibility='visible'
    document.getElementById(tipId).style.display='block'

    }
function hideTip2(tipId){
  document.getElementById(tipId).style.visibility='hidden';
  document.getElementById(tipId).style.display='none';
}


function resetHiddenFields() {
  var action = document.getElementById('action');
  if (action) {
	  action.value = document.getElementById('action_backup').value;
  }
}

/******************************************
 Functions used in customization panels
 (with two menus)
*******************************************/
// This function is used to add an option
// in a menu at a given index
function addOptionToMenu(option, menuName, index) {
  var menu = document.getElementById(menuName);
  if (menu) {
    var optionToAdd = document.createElement("option");
    optionToAdd.value = option.value;
    optionToAdd.text = option.text;
    optionToAdd.selected = true;
    menu.options[index] = optionToAdd;
  }
}

// This function is used to remove an option
// in a menu at the given index
function removeOptionFromMenu(menuName, index) {
  var menu = document.getElementById(menuName);
  if (menu) {
    menu.options[index].selected = false;
    menu.options[index] = null;
  }
}

// This function is used to move the selected options
// upward in the menu
function moveOptionUp(menuName) {
  var menu = document.getElementById(menuName);
  if (menu) {
    for (var i=1; i < menu.options.length; i++) {
      if (menu.options[i].selected) {
        var optionSelected = menu.options[i];
	var option2 = menu.options[i-1];
	if (!(option2.selected)) {
	  var tempValue = option2.value;
	  var tempText = option2.text;
	  option2.value = optionSelected.value;
	  option2.text = optionSelected.text;
	  option2.selected = true;
	  optionSelected.value = tempValue;
	  optionSelected.text = tempText;
	  optionSelected.selected = false;
	}
      }
    }
  }
}

// This function is used to move the selected options
// downward in the menu
function moveOptionDown(menuName) {
  var menu = document.getElementById(menuName);
  if (menu) {
    for (var i=menu.options.length-2; i >= 0 ; i--) {
      if (menu.options[i].selected) {
        var optionSelected = menu.options[i];
	var option2 = menu.options[i+1];
	if (!(option2.selected)) {
	  var tempValue = option2.value;
	  var tempText = option2.text;
	  option2.value = optionSelected.value;
	  option2.text = optionSelected.text;
	  option2.selected = true;
	  optionSelected.value = tempValue;
	  optionSelected.text = tempText;
	  optionSelected.selected = false;
	}
      }
    }
  }
}

// This function is used to move the selected options
// to the beginning of a menu
function moveOptionToTop(menuName) {
  var menu = document.getElementById(menuName);
  if (menu) {
    var optionList = new Array;
    var i, option;
    for (i=0; i < menu.options.length; i++) {
      if (!(menu.options[i].selected)) {
        option = document.createElement("option");
        option.value=menu.options[i].value;
        option.text=menu.options[i].text;
        optionList.push(option);
      }
    }
    // Place all selected options at the beginning of the menu
    for (i=menu.options.length-1; i >= 0 ; i--) {
      if (menu.options[i].selected) {
        option = document.createElement("option");
        option.value=menu.options[i].value;
        option.text=menu.options[i].text;
        option.selected=true;
	optionList.unshift(option);
      }
    }
    // Rewrite the menu with the new order
    for (i=0; i < menu.options.length; i++) {
      menu.options[i].value = optionList[i].value;
      menu.options[i].text = optionList[i].text;
      menu.options[i].selected = optionList[i].selected;
    }
  }
}

// This function is used to move the selected options
// to the end of a menu
function moveOptionToBottom(menuName) {
  var menu = document.getElementById(menuName);
  if (menu) {
    var optionList = new Array;
    var i, option;
    for (i=0; i < menu.options.length; i++) {
      if (!(menu.options[i].selected)) {
        option = document.createElement("option");
        option.value=menu.options[i].value;
        option.text=menu.options[i].text;
        optionList.push(option);
      }
    }
    // Place all selected options at the end of the menu
    for (i=0; i < menu.options.length; i++) {
      if (menu.options[i].selected) {
        option = document.createElement("option");
        option.value=menu.options[i].value;
        option.text=menu.options[i].text;
        option.selected=true;
	optionList.push(option);
      }
    }
    // Rewrite the menu with the new order
    for (i=0; i < menu.options.length; i++) {
      menu.options[i].value = optionList[i].value;
      menu.options[i].text = optionList[i].text;
      menu.options[i].selected = optionList[i].selected;
    }
  }
}

// Additional function for simple menu without optgroup
function moveOptionsBetweenSimpleMenus(menuFromId, menuToId, keepInMenuFrom) {
  var menuFrom = document.getElementById(menuFromId);
  var menuTo = document.getElementById(menuToId);
  for (var i = 0 ; i < menuFrom.options.length ; i++) {
    var option = menuFrom.options[i];
    if ((option.selected) && (! menuContainsOption(menuTo, option))) {
      if (keepInMenuFrom) {
	var newOption = document.createElement('option');
	newOption.value = option.value; 
	newOption.text = option.text; 
	newOption.name = option.name;
	newOption.selected = option.selected;
	menuTo.appendChild(newOption);
      } else {
	menuFrom.removeChild(option);
	i--;
	menuTo.appendChild(option);
      }
    }
  }
}

function menuContainsOption(menu, option) {
  for (var i = 0 ; i < menu.options.length ; i++) {
    if (option.value == menu.options[i].value) {
      return menu.options[i];
    }
  }
  return false;
}

var menuIsOpen = false;

// This function decides whether to show the QuickSearch Tool Bar menu
function showQuickSearchToolBarMenu(e) {
	if(menuIsOpen == true){
		hideQuickSearchToolBarMenu();
		menuIsOpen = false;
	}else{
		document.getElementById('quickSearchBarMenu').style.visibility = "visible";
		document.getElementById('quickSearchBarMenu').style.display = "block";
		menuIsOpen = true;
		var barVar = document.getElementById('quickSearchBarMenu');
		var leftvar = findPosX(barVar);
		var topvar = findPosY(barVar);
		if(document.all && navigator.userAgent.indexOf("Opera")==-1){
			document.getElementById('quickSearchBarMenuiFrame').style.top = topvar;
			document.getElementById('quickSearchBarMenuiFrame').style.left = leftvar;
			document.getElementById('quickSearchBarMenuiFrame').style.visibility = "visible";
			document.getElementById('quickSearchBarMenuiFrame').style.display = "block";
		}		
	}
}

var mustCloseMenu = false;
// This function decides if the quickSearch tool bar should be hidden or not
function hideQuickSearchToolBarMenu() {
	getMousePosition;
	var hideMenu = true;
	//get the position of the quickSearchBarMenu div
	var barVar = document.getElementById('quickSearchBarMenu');
	var leftvar = findPosX(barVar);
	var topvar = findPosY(barVar);
	if ((currentX >= leftvar)&&(currentX <=(leftvar+390))&&(currentY >=topvar)&&(currentY<=(topvar+150))){
			hideMenu = false;
		}
		
	barVar = document.getElementById('dropdownboxarrow');
	leftvar = findPosX(barVar);
	topvar = findPosY(barVar);
	if ((currentX >= leftvar)&&(currentX <=(leftvar+18))&&(currentY >=topvar)&&(currentY<=(topvar+20))){
		mustCloseMenu = true;
		}
		
	if ((hideMenu == true) || (mustCloseMenu == true)){
		document.getElementById('quickSearchBarMenu').style.visibility = "hidden";
		document.getElementById('quickSearchBarMenu').style.display = "none";
		document.getElementById('quickSearchBarMenuiFrame').style.visibility = "hidden";
		document.getElementById('quickSearchBarMenuiFrame').style.display = "none";		
		menuIsOpen = false;
		mustCloseMenu = false;
	}
}

/* Function added to close the toolbar after a second click */
function toggleToolBar(e) {
	if (document.getElementById('quickSearchBarMenu')) {
		var targ;
		if (!e)
			var e = window.event;
		if (e) {
			if (e.target)
				targ = e.target;
			else if (e.srcElement)
				targ = e.srcElement;
			if (targ.nodeType == 3) // defeat Safari bug
				targ = targ.parentNode;
			if ((targ.id == 'dropdownboxarrow') || (targ.id == 'conceptSelected')) {
				showQuickSearchToolBarMenu();
				e.cancelBubble = true;
				if (e.stopPropagation) e.stopPropagation();
			} else if (! isInQuickSearchBarMenu(targ)) {
				hideQuickSearchToolBarMenu();
			}
		}
	}
}

function isInQuickSearchBarMenu(element) {
	var menu = document.getElementById('quickSearchBarMenu');
	if (menu) {
		return isChild(menu, element);
	}
}

function isChild(parentObject, childObject) {
	var children = parentObject.childNodes;
	for (var i = 0 ; i < children.length ; i++) {
		if ((children[i] == childObject)||(isChild(children[i], childObject))) {
			return true;
		}
	}
	return false;
}

document.onclick = toggleToolBar;
/* End of added functionalities */

//document.onmouseup = new Function("hideQuickSearchToolBarMenu();");

var isIE = document.all?true:false;
if (!isIE) document.captureEvents(Event.MOUSEMOVE);
var currentX;
var currentY;
function getMousePosition(e) {
	//alert("2");
  var _x;
  var _y;
  if (!isIE) {
    _x = e.pageX;
    _y = e.pageY;
  }
  if (isIE) {
    _x = event.clientX + document.body.scrollLeft;
    _y = event.clientY + document.body.scrollTop;
  }
 currentX = _x;
 currentY = _y;
  return true;
}

// This function returns the left pixel position of any object sent to it. Even if the position is not set.
function findPosX(obj)
{
	var curleft = 0;
	if (obj) {
		if (obj.offsetParent)
		{
			while (obj.offsetParent)
			{
				curleft += obj.offsetLeft
				obj = obj.offsetParent;
			}
		}
		else if (obj.x)
			curleft += obj.x;
	}
	return curleft;
}

// This function returns the top pixel position of any object sent to it. Even if the position is not set.
function findPosY(obj)
{
	var curtop = 0;
	if (obj) {
		if (obj.offsetParent)
		{
			while (obj.offsetParent)
			{
				curtop += obj.offsetTop
				obj = obj.offsetParent;
			}
		}
		else if (obj.y)
			curtop += obj.y;
	}
	return curtop;
}

function selectedConcept(selectionToSend, selectionToDisplay){
	var synonymTool = document.getElementById('synonymImage_queryStrTextBoxHeader_div');
	if (synonymTool) {
		if (selectionToDisplay == 'SRS Query Language') {
			synonymTool.style.display = 'none';
		} else {
			synonymTool.style.display = 'block';
		}
	}

	document.getElementById('menu_PreferredConcepts').value = selectionToSend;
	document.getElementById('menu_PreferredConceptsDisplay').value = selectionToDisplay;
	document.getElementById('conceptSelected').innerHTML = selectionToDisplay;
	hideQuickSearchToolBarMenu();
	menuIsOpen = false;
	mustCloseMenu = true;
}

// Functions for confirming deleting an annotation
function confirmAnnotationDelete(id, entryId){
	document.getElementById(id).style.zIndex=102;
	showStopOption('freezeOnly');
	centerDivPosition(id);
	showDivSection(id);
	globalEntryId = entryId;
}

function confirmAnnotationDeleteAction(url){
	hideDivSection('confirmDelete');
	showStopOption('annotations');
	urlWithId = url + '&entryId=' + globalEntryId;
	window.location=urlWithId;
}

//This Function manages the submission of the quicksearchbar form.
function quickSearchBarSubmit() {
	var searchTerm = document.getElementById("queryStrTextBoxHeader").value;
	if (document.getElementById("menu_PreferredConceptsDisplay").value == "") {
		alert("Please select a Concept from the dropdown list first!");
	} else if (LTrim(searchTerm) == "") {
		alert("Please enter a search term.");
	} else {
		document.getElementById("hidden_previous_synonym_queryStrTextBoxHeader_div").value = "";
		showStopOption('full');
		document.forms['quickSearchForm'].submit();
	}	
}

function queryBuilderSubmit(){
	if(checkUserInput()){
		resetHiddenFields();
		showStopOption('full');
		document.forms['primaryForm'].submit();
	}
}

function queryRefineSubmit(){
	if (checkRefineSearch()) {
		resetHiddenFields();
		showStopOption('full');
		setFormElementById('action','refine');
		document.forms['primaryForm'].submit();
	}
}

// this function adds a bookmark if possible
function addBookmark(title, url) {
	if (! url) {
		url = location.href;
	}
	if (window.sidebar) { 
		window.sidebar.addPanel(title, url,""); 
	} else if( document.all ) {
		window.external.AddFavorite( url, title);
	} else {
		alert("Sorry, your browser doesn't support this feature." + "\nPlease use the bookmark feature of your browser to save the location of this page.");		
	}
}

//var queryBuilderDisplayMode;
function popupinfo(launchItem, xOffSet, yOffSet){
	launchItem.style.cursor = 'default';
	//first get the left and top co-ordinates of the item that launched this
	var leftPos = findPosX(launchItem);
	var topPos	= findPosY(launchItem);

	//position the popupInfo div
	var div = document.getElementById("popupInfo");
	div.style.display = "block";
	div.style.left = leftPos + xOffSet +"px";
	div.style.top = topPos - yOffSet +"px";

	//populate and display the div
	var frame = document.getElementById('frame');
	frame.style.height = div.offsetHeight;
	frame.style.width = div.offsetWidth;
	frame.style.top = topPos - yOffSet +"px";
	frame.style.left = leftPos + xOffSet +"px";
	frame.style.visibility = "visible";
	div.style.visibility = "visible";
}

// pushes specific content into the popupInfo object
function setpopupcontent(contentToShow){	
	//provide info if blank
	if ((contentToShow == "") || (contentToShow == null)){
		contentToShow = "No Information Available";
	}
	var div = document.getElementById("popupInfo");
	div.innerHTML = contentToShow;
	var frame = document.getElementById('frame');
	frame.style.height = div.offsetHeight;
	frame.style.width = div.offsetWidth;
}

//hide the div, and replace the content with the default message
function hidepopupinfo(){
	var frame = document.getElementById('frame');
	frame.style.height = 0;
	frame.style.width = 0;
	frame.style.top = 0;
	frame.style.left = 0;
	frame.style.visibility = "hidden";
	setTimeout("doHidePopUpInfo('popupInfo');",500);		
}

function doHidePopUpInfo(popUpId){
  document.getElementById(popUpId).style.visibility = "hidden";
  document.getElementById(popUpId).style.display = "none";
}

// generic function to display a div
function showDivSection(divName) {
  document.getElementById(divName).style.visibility = 'visible';
  document.getElementById(divName).style.display = 'block';
}
// generic function to hide a div
function hideDivSection(divName) {
  document.getElementById(divName).style.visibility = 'hidden';
  document.getElementById(divName).style.display = 'none';
}

// These trimming functions were found at http://www.apriori-it.co.uk/Trim.asp.
// Another nice trimming approach is to define a .trim() function directly on
// the Java String class (see http://www.bigbold.com/snippets/posts/show/701):
// String.prototype.trim = function() { return this.replace(/^\s+|\s+$/, ''); };
// String.prototype.trim = function() { return this.replace(/^\s+|\s+$/g, ""); };

// Trim spaces from both ends of input string.
function Trim(TRIM_VALUE) {
  if (TRIM_VALUE.length < 1) {
    return "";
  }

  TRIM_VALUE = RTrim(TRIM_VALUE);
  TRIM_VALUE = LTrim(TRIM_VALUE);
  if (TRIM_VALUE=="") {
    return "";
  }
  else {
    return TRIM_VALUE;
  }
} //End Function

// Trim spaces from end of input string.
function RTrim(VALUE) {
  var w_space = String.fromCharCode(32);
  var v_length = VALUE.length;
  var strTemp = "";
  if (v_length < 0) {
    return"";
  }
  var iTemp = v_length -1;

  while (iTemp > -1) {
    if (VALUE.charAt(iTemp) == w_space) {
    }
    else {
      strTemp = VALUE.substring(0,iTemp +1);
      break;
    }
    iTemp = iTemp-1;

  } //End While
  return strTemp;
} //End Function

// Trim spaces from beginning of input string.
function LTrim(VALUE) {
  var w_space = String.fromCharCode(32);
  if (v_length < 1) {
    return"";
  }
  var v_length = VALUE.length;
  var strTemp = "";

  var iTemp = 0;

  while (iTemp < v_length) {
    if (VALUE.charAt(iTemp) == w_space) {
    }
    else {
      strTemp = VALUE.substring(iTemp,v_length);
      break;
    }
    iTemp = iTemp + 1;
  } //End While
  return strTemp;
} //End Function

function hasWhiteSpace(s) 
{
  reWhiteSpace = new RegExp(/^\s+$/);
 
  // Check for white space
  if (reWhiteSpace.test(s)) {
    //alert("Your field doesn't contain spaces.");
    return false;
  }
  return true;
}

function switchSelect(){
	if(document.getElementById('selectModeDatabank').checked){
		document.getElementById('conceptSelect').style.visibility="hidden";
		document.getElementById('databankSelect').style.visibility="visible";
	}
	else{
		document.getElementById('databankSelect').style.visibility="hidden";
		document.getElementById('conceptSelect').style.visibility="visible";
	}
}

// function to use the state of a checkbox for toggle the contents
// of an input box (used for annotations checkbox)
function toggleCheckboxTarget(checkbox, input, trueValue, falseValue) {
	var target = document.getElementById(input);
	if(checkbox.checked) {
		target.value=trueValue;
 	} else {
		target.value=falseValue;
  	}
}



// logout of SRS. Kill cookie function
function killCookiesOnLogout(){
	// bypassing the onunload function
	window.onunload = null;
	// First we must find and kill the two dynamic cookies from the query form page
	var cookieArray = document.cookie.split(';');
	for(var i=0;i < cookieArray.length;i++)
	{
		var c = cookieArray[i];

		if (c.match(' queryFormValues_')) {
			var cookieToKill = c.split('=');
			var cookieSelected = cookieToKill[0];
			var cookieTrimmed = Trim(cookieSelected);
			delCookie(cookieTrimmed);
		}
		
		if (c.match(' selectedViewInfo_')) {
			var cookieToKill = c.split('=');
			var cookieSelected = cookieToKill[0];
			var cookieTrimmed = Trim(cookieSelected);
			delCookie(cookieTrimmed);
		}
	}

// Now kill the rest if they exist (existence check is made in function delCookie)
	delCookie("showDbInfo");
	delCookie("sortCookie");
	delCookie("toolFilterCookie");
	delCookie("sortDisplayCookie");
	delCookie("queryHistoryVisibleTab");
	delCookie("queryBuilderGroupStatusCookie");
	delCookie("conceptsCheckboxSelected");
}


 
 function checkInput(id, element, e){
 	var keynum
	var keychar
	var numcheck

	if(window.event) // IE
	{
	keynum = e.keyCode
	}
	else if(e.which) // Netscape/Firefox/Opera
	{
	keynum = e.which
	}
	keychar = String.fromCharCode(keynum)
	if (keychar == ' '){
		var element = document.getElementById(id).innerHTML="<font color=\"red\">no spaces allowed.</font>";
		return false;
	} else {
		return true;
	}
 }
 
 function checkQueryName(inputId, divID){
	var newName = document.getElementById(inputId).value;
	if (newName.length == 0){
		var element = document.getElementById(divID).innerHTML="<font color=\"red\">Name is empty!</font>";
		return false;
	} else {
		return true;
	}
}
 
 // this function checks a number is an integer
 function checkInt(number){
	if(number.length>0){
		if (number.match(/^(-)?\d+$/)){
			
		} else {
			alert("Incorrect value entered for numeric field : " + number);
	    	return false;
		}
	}else {
  		return true;
  	}
}

// This function checks that a number contains only digits or dot
function checkNumber(number) {
	if(number.length>0){
		if (number.match(/^\d(\.\d)?\d*$/)){ // 1.2 etc
			return true;
		} else if (number.match(/^\.\d\d*$/)){ // starts with a '.'
			return true;	
		} else if (number.match(/^[-]\d(\.\d)?\d*$/)) { // starts with a '-' 
  			return true;
  		} else if (number.match(/[eE]/) && number.match(/^\d\d*[eE]-\d\d*$/)){ // e.g. 1e-10
  			return true;
  		} else {
	    	alert("Incorrect value entered for numeric field : " + number);
	    	return false;
  		}
  	} else {
  		return true;
  	}
}
 
function checkDateNumber(day1, month1, year1, day2, month2, year2){
	var checkDateFrom=null;
	var checkDateTo=null;
	if(day1.length>0 || month1.length>0 || year1.length > 0){
		if(day1.length>0 && month1.length>0 && year1.length>0){
			checkDateFrom=checkDateDigits(day1, month1, year1);			
		} else {
			alert("Please specify day, month and year for the date.");
			checkDateFrom=false;
		}
	}
	if(day2.length>0 || month2.length>0 || year2.length > 0){
		if(day2.length>0 && month2.length>0 && year2.length>0){
			checkDateTo=checkDateDigits(day2, month2, year2);			
		} else {
			alert("Please specify day, month and year for the date.");
			checkDateTo=false;
		}
	}
	return (checkDateFrom==false || checkDateTo==false)? false : true;
}

function checkDateDigits(day, month, year){
	var digitArray = new Array(day, month, year);
	for (var i=0; i<digitArray.length; i++){
		if(!digitArray[i].match(/\d/g)){
			alert("Please specify numeric values for date fields");
			return false;
		}
		var tmp=parseInt(digitArray[i]);
		if(i==0){ // check day is < 31
			if(tmp<1 || tmp>31){
				alert("Please enter a value between 1 and 31 for the day.");
				return false
			}
		} else if (i==1){ // check month < 12
			if(tmp>12){
				alert("Please enter a value between 1 and 12 for the month.");
				return false;
			}
		} else if (i==2){ // check year is 4 digits
			if(!(digitArray[i].length==4)){
				alert("Please enter 4 digits for the year.");
				return false;
			}
		}
	}
	return true;
}
 
 