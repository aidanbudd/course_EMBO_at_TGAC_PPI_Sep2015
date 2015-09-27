// NCBI Suggest ver. 1.9 (01-30-2008)
// Works with new NCBI ajax porxy server

var NSuggest_isIE;
var NSuggest_isGecko;
var NSuggest_isSafari;
var NSuggest_isOpera;
var NSuggest_targetElements = new Array();
var NSuggest_databases = new Array();
var NSuggest_dropDownDiv = null;
var NSuggest_dropDownList = null;
var NSuggest_MaxResults	= 20;
var NSuggest_VisibleResults	= 10;
var NSuggest_Data = new Array();
var NSuggest_CgiUrl = "/corecgi/ajax/ajax.fcgi"
var NSuggest_ServicePrefix = "$svc$=ac"
var NSuggest_resultCache=new Object();
var NSuggest_AllCache=new Object();
var NSuggest_Cache;
var NSuggest_currentSuggestions = new Array();
var NSuggest_defStyle="SG_blue";
var NSuggest_CurrentField = null;
var NSuggest_updateTimer = null;
var NSuggest_openTime = 500;
var NSuggest_delayTime = 10;
var NSuggest_updateMSec = 0;
var NSuggest_Escaped = false;
var NSuggest_XMLHTTPOBJ;

NSuggest_DetectBrowser ();

function NSuggest_getXMLHTTP(){
  try {
     return new ActiveXObject("Msxml2.XMLHTTP")
  } catch(e1) { 
	try { 
	  return new ActiveXObject("Microsoft.XMLHTTP")
	} catch(e2) {
        return typeof XMLHttpRequest != "undefined" ? 
          new XMLHttpRequest() : null;
	}
  }
}

function NSuggest_OnLoad( )
{
	if (!(NSuggest_XMLHTTPOBJ = NSuggest_getXMLHTTP()))  return;
	if (NSuggest_isNetsc71OSX) return ;
	NSuggest_GetTargetElements();
	for ( var i = 0, numEls = NSuggest_targetElements.length; i < numEls; ++i )
	{
		var f = window.document.getElementById( NSuggest_targetElements[i] );
		if ( f != null )
		{
			f.autoComplete = "off";
			f.onkeydown = NSuggest_OnKeyDown;
			f.onkeypress = NSuggest_OnKeyPress;
			f.onkeyup = NSuggest_OnKeyUp;
			f.onclick = NSuggest_OnClick;
			f.onblur = NSuggest_OnBlur;
			if ( !NSuggest_isIE ) f.setAttribute ("autocomplete", "off" );
		}
	}
	onResize = NSuggest_OnResize( );
	window.NSuggest_loaded = true;
// set CSS styles 
}

function NSuggest_DetectBrowser( )
{
	var browser = navigator.userAgent.toLowerCase();
	NSuggest_isGecko = ( navigator.product == 'Gecko' );
	NSuggest_isIE = !NSuggest_isGecko && ~browser.indexOf ( "msie" );
	NSuggest_isSafari = !NSuggest_isGecko && !NSuggest_isIE && ~browser.indexOf ( "safari" );
	NSuggest_isOpera = ~browser.indexOf("opera"); 
	NSuggest_isNetsc71OSX = ~browser.indexOf("macintosh") && ~browser.indexOf("netscape") && ~browser.indexOf("7.1"); 
}

function NSuggest_GetTargetElements() {		
	var num = 0;
    for(var p = 0; p < 2; p++) {
      var inputEls = document.getElementsByTagName(['input', 'textarea'][p]);
	  if(inputEls)
        for(var i = 0; i < inputEls.length; i++) {
          var e = inputEls[i];
          var d = e.getAttribute('sgDict');
		  if (d && d != "")
			 NSuggest_targetElements[num++] = e.id;
        }
    }
}


function NSuggest_ShowHideElements(action,NSuggest_CurrentField)
{
	if (!NSuggest_isIE) return;
	if (NSuggest_CurrentField == null) return; 
	if ( NSuggest_CurrentField.getAttribute('sgHideElements') == null || NSuggest_CurrentField.getAttribute('sgHideElements') == "")	{ return; }
	
	var Elm2Hide = NSuggest_CurrentField.getAttribute('sgHideElements').split(",");
	
	if (Elm2Hide == "") { return; }
	for (i=0; i < Elm2Hide.length; i++)
		{ 
			if (document.getElementsByName(Elm2Hide[i]).length == 0) { 
			continue; 
			}
			var ElmsNodes = document.getElementsByName(Elm2Hide[i]);
			switch(action)
			{
				case "show":
				for (node_i=0; node_i < ElmsNodes.length; node_i++) {
				ElmsNodes.item(node_i).style.visibility="visible";
				}
					break;
				case "hide":
				for (node_i=0; node_i < ElmsNodes.length; node_i++) {
				ElmsNodes.item(node_i).style.visibility="hidden";
				}
					break;
				default:
					break;
			}
		}
}

// ANY KEYS HANDLER (Almost Any)--------------------------------------------

var NSuggest_TAB = 9;
var NSuggest_DELETE = 46;
var NSuggest_BACKSPACE = 8;
var NSuggest_LEFT_ARROW = 37;
var NSuggest_RIGHT_ARROW = 39;
var NSuggest_HOME = 36;
var NSuggest_END = 35;
var NSuggest_PAGE_UP = 33;
var NSuggest_PAGE_DOWN = 34;
var NSuggest_UP_ARROW = 38;
var NSuggest_DOWN_ARROW = 40;
var NSuggest_ESC = 27;
var NSuggest_ENTER = 13;
var NSuggest_SPACE = 32;
var NSuggest_SHIFT_KEY = 16;
var NSuggest_CTRL_KEY = 17;
var NSuggest_ALT_KEY = 18;
var NSuggest_LEFT_MS_WINDOWS_KEY = 91; 
var NSuggest_RIGHT_MS_WINDOWS_KEY = 92;
var NSuggest_MS_MENU_KEY = 93;

var NSuggest_hEnter = false;

// Start of Keys Handlers Functions ------------------------------

function NSuggest_OnKeyDown(event)
{
	var todo = null;
	if ( event == null ) event = window.event;
	NSuggest_CurrentField = NSuggest_GetTarget(event);
	if ( NSuggest_CurrentField == null ) return;
	var PKey = event.keyCode;
	NSuggest_hEnter = false;

	switch(PKey)
	{
//	case NSuggest_LEFT_ARROW:
	case NSuggest_RIGHT_ARROW:
		if ( NSuggest_IsActive() )
		{	
			var cursorIndex = NSuggest_GetCursor();
			if (NSuggest_CurrentField.value.length == cursorIndex)
			{ todo = "showFull";
			  NSuggest_CancelEvent (event);
			  break;
			} 
		 }
		 break;
	case NSuggest_ESC:
		if ( NSuggest_IsActive() )
		{
			NSuggest_Escaped = true;
			NSuggest_RemoveDD();
			NSuggest_CancelEvent(event); 
		}
		break;
	case NSuggest_HOME:
		todo = "selectFirst";
		break;
	case NSuggest_END:
		todo = "selectLast";
		break;
	case NSuggest_PAGE_UP:
		todo = "selectPrevPage";
		break;
	case NSuggest_PAGE_DOWN:
		todo = "selectNextPage";
		break;
	case NSuggest_UP_ARROW:
		todo = "selectPrev";
		break;
	case NSuggest_DOWN_ARROW:
		if ( NSuggest_IsActive() )
		{
			NSuggest_UpdateDD ("selectNext");
			NSuggest_CancelEvent (event);
		} else {
			NSuggest_Escaped = false;
			NSuggest_NewDD ();
			if ( NSuggest_IsActive() )
				NSuggest_CancelEvent (event);
		}
		break;
	case NSuggest_TAB:
		if (NSuggest_IsActive())
		{   
			todo = "showFull";
			NSuggest_CancelEvent (event);
			break;
		}
		break;
	default:
		break;
	}
	if ( NSuggest_IsActive() && todo != null )
	{
		NSuggest_UpdateDD (todo);
		NSuggest_CancelEvent (event);
	}
}


function NSuggest_OnKeyPress( event )
{
	NSuggest_hEnter = false;
	if ( event == null ) event = window.event;
	NSuggest_CurrentField = NSuggest_GetTarget(event);
	if (NSuggest_CurrentField == null) return;

	var PKey = event.keyCode;
	if ( PKey == 0 ) { PKey = event.charCode; PKey = event.which; }
	if ( event.charCode != null && event.charCode == 0 ) {
		switch ( PKey ) {
		case NSuggest_ESC:
		case NSuggest_HOME:
		case NSuggest_END:
		case NSuggest_PAGE_UP:
		case NSuggest_PAGE_DOWN:
		case NSuggest_UP_ARROW:
		case NSuggest_DOWN_ARROW:
			if ( !event.ctrlKey && !event.altKey && !event.metaKey && NSuggest_IsActive() ) {
				NSuggest_CancelEvent (event);
			}
			return;
		}
	}
	switch (PKey) {
	case NSuggest_ENTER:
		if (NSuggest_IsActive())
		{
			NSuggest_CancelEvent (event);
			NSuggest_hEnter = true;
// added 1.7.1
			if ( NSuggest_dropDownList.getAttribute("selectedIndex") == -1 ) { NSuggest_RemoveDD(); return; }
//		
			NSuggest_InsSug();
		} 
		break;
	case NSuggest_TAB: 
		if (NSuggest_IsActive())
		{
			NSuggest_CancelEvent (event);
		}
		break;
  	default:
		break;

	}
}


function NSuggest_OnKeyUp( event )
{
	if ( event == null ) event = window.event;
	NSuggest_CurrentField = NSuggest_GetTarget(event);
	if ( NSuggest_CurrentField == null ) return;

	var PKey = event.keyCode;

	switch( PKey )
	{
	case NSuggest_DELETE:
		if (NSuggest_IsActive() && NSuggest_CurrentField.value.length == 0 )
		{
			
			NSuggest_RemoveDD();
		}
		else if ( NSuggest_CurrentField.value.length > 0 )
		{
			NSuggest_CrtNewSug();
		}
		break;
	case NSuggest_BACKSPACE:
		if (NSuggest_IsActive() && NSuggest_CurrentField.value.length == 0 )
		{
			NSuggest_RemoveDD();
		}
		else if ( NSuggest_CurrentField.value.length > 0 )
		{
			NSuggest_CrtNewSug();
		}
		break;
	case NSuggest_CTRL_KEY:
	case NSuggest_SHIFT_KEY:
	case NSuggest_CTRL_KEY:
	case NSuggest_ALT_KEY:
	case NSuggest_LEFT_MS_WINDOWS_KEY:
	case NSuggest_RIGHT_MS_WINDOWS_KEY:
	case NSuggest_MS_MENU_KEY:
	case NSuggest_ESC:
	case NSuggest_HOME:
	case NSuggest_END:
	case NSuggest_PAGE_UP:
	case NSuggest_PAGE_DOWN:
	case NSuggest_UP_ARROW:
	case NSuggest_DOWN_ARROW:
	case NSuggest_LEFT_ARROW:
	case NSuggest_RIGHT_ARROW:
	case NSuggest_TAB:
	case NSuggest_ENTER: 
		break;
	default:
		NSuggest_CrtNewSug();
		break;
	}

	if ( ! NSuggest_hEnter && PKey == NSuggest_ENTER )
	{
//		added 1.7.1		
//		NSuggest_CrtNewSug();
//
	}
} 
// End of Keys Handlers Functions------------------------------------------------

function NSuggest_OnBlur( event )
{
	
	if ( event == null ) { event = window.event; }
	var NSuggest_CurrentField = NSuggest_GetTarget( event );
	if ( NSuggest_CurrentField == null ) return;
	var isfocus = NSuggest_CurrentField.getAttribute("Focus");
	if (isfocus != null) { 
		NSuggest_CurrentField.removeAttribute("Focus");
		if (!NSuggest_isIE) return;
	}
	NSuggest_Escaped = false
    NSuggest_RemoveDD();
}


function NSuggest_OnClick( event )
{
	if ( event == null ) { event = window.event; }
	var NSuggest_CurrentField = NSuggest_GetTarget( event );
	if ( NSuggest_CurrentField == null ) return;
	NSuggest_Escaped = false;
	NSuggest_RemoveDD();
}

function NSuggest_OnResize( event )
{
	NSuggest_PlaceSuggList ();
}

function NSuggest_CancelEvent ( event ) {
	event.returnValue = false;
	if ( event.preventDefault ) { event.preventDefault(); }
}

function NSuggest_GetTarget( event )
{

	if ( event == null ) event = window.event;
	if ( event == null ) return null;
	if ( event.srcElement != null )  return event.srcElement;
	var f = event.target;
	while ( f && f.nodeType != 1 ) f = f.parentNode;
	return f;
}

function NSuggest_AddElementClass ( element, className ) {
	if ( element && element.className.indexOf (className) == -1 )
		element.className += " " + className;
}

function NSuggest_RemoveElementClass ( element, className ) {
	if ( element == null ) return;

	var loc = element.className.indexOf (className);
	if ( loc == -1 ) return;

	// string fragments
	element.className = element.className.substring ( 0, loc ) +
						element.className.substring ( loc + className.length + 1 );
}

function NSuggest_ElementHasClass ( element, className ) {
	return ( element && ( element.className.indexOf (className) != -1 ));
}

function NSuggest_ScrollToChild ( parent, indexOrElement ) {
	if ( parent == null || indexOrElement == null ) return;

	var cType = typeof indexOrElement;
	if ( cType == "number" || cType == "string" )
		indexOrElement = parent.childNodes[indexOrElement];

	if ( indexOrElement == null ) return;

	if ( indexOrElement.offsetTop + indexOrElement.offsetHeight > parent.scrollTop + parent.clientHeight ) 
		{
		parent.scrollTop = indexOrElement.offsetTop + indexOrElement.offsetHeight - parent.clientHeight;
		return; 
		}
	if ( indexOrElement.offsetTop < parent.scrollTop ) 
		{
		parent.scrollTop = indexOrElement.offsetTop;
		}
}

function NSuggest_MakeElementTreeUnselectable ( element ) {
	if ( element.nodeType == 1 ) 
		element.unselectable = "on";

	for ( var i=0, n=element.childNodes.length; i<n; ++i )
		NSuggest_MakeElementTreeUnselectable ( element.childNodes [i] );
}

// --------------------------------------------------


function NSuggest_GetCursor()
{
	if ( NSuggest_CurrentField == null || (NSuggest_CurrentField.type != "text" && NSuggest_CurrentField.type != "textarea") ) return -1;
	if (NSuggest_CurrentField.value == null || NSuggest_CurrentField.value.length == 0) return -1;
	var cursorIndex = -1;

	if ( NSuggest_CurrentField.createTextRange )
	{
		var selection = window.document.selection.createRange( );
		var textRange = NSuggest_CurrentField.createTextRange( );
		
		// selection is within the edit control			
		if (textRange == null || selection == null || (( selection.text != "" ) && textRange.inRange(selection) == false) )
		{
			return -1;
		}
		
		if (selection.text == "")
		{
			if (textRange.boundingLeft == selection.boundingLeft)
			{
				cursorIndex = 0;
			}
			else
			{
				if ( NSuggest_CurrentField.tagName == "INPUT" )
				{
					var contents = textRange.text;
					var index = 1;
					while (index < contents.length)
					{
						textRange.findText(contents.substring(index));
						if (textRange.boundingLeft == selection.boundingLeft)
						{
							break;
						}
						
						index++;
					}
				}
				else if ( NSuggest_CurrentField.tagName == "TEXTAREA" )
				{
					var index = NSuggest_CurrentField.value.length + 1;
					var theCaret = document.selection.createRange().duplicate();
					while ( theCaret.parentElement() == NSuggest_CurrentField && 
						theCaret.move("character",1) == 1 )
					{
						--index;
					}
					
					if ( index == NSuggest_CurrentField.value.length + 1 )
					{
						index = -1;
					}
				}
				
				cursorIndex = index;
			}
		}
		else
		{
			cursorIndex = textRange.text.indexOf(selection.text);
		}
	}
	// Mozilla
	//
	else if ( window.getSelection && window.document.createRange )
	{
		if ( NSuggest_CurrentField.selectionStart < 0 || NSuggest_CurrentField.selectionStart > NSuggest_CurrentField.length )
		{
			return cursorIndex;
		}
		
		if ( NSuggest_CurrentField.selectionEnd < 0 || NSuggest_CurrentField.selectionEnd > NSuggest_CurrentField.length ||
		     NSuggest_CurrentField.selectionEnd < NSuggest_CurrentField.selectionStart )
		{
			return cursorIndex;
		}
		
		cursorIndex = NSuggest_CurrentField.selectionStart;
	}

	return cursorIndex;
}

// --------------------------------------------------

function NSuggest_Menu_SelectItem ( menuElement, index, scrollToIt ) {
	var current = menuElement.getAttribute("selectedIndex");
	if ( current != -1 && current != null ) {
		NSuggest_RemoveElementClass ( menuElement.childNodes[current], "item_selected" );
		}
	if ( index >= 0 && index < menuElement.childNodes.length ) {
		NSuggest_AddElementClass ( menuElement.childNodes[index], "item_selected" );
	}
	if ( scrollToIt )
		NSuggest_ScrollToChild ( menuElement, index );
}


function NSuggest_Menu_onClick( event )
{
	  if (document.getElementById( "SG_select" ))
	  NSuggest_InsSug();
}

function NSuggest_Menu_onMouseDown( event )
{
	if (document.getElementById( "SG_select" ))
	  NSuggest_CurrentField.setAttribute("Focus", "1");
}

function NSuggest_MenuItem_onMouseDown ( event ) {
	if ( event == null ) event = window.event;
	var target = this; 
	var current = target.parentNode.getAttribute("selectedIndex");
	if ( current != -1 && current != null )
		NSuggest_RemoveElementClass ( target.parentNode.childNodes[current], "item_selected" );

	NSuggest_AddElementClass (target, "item_selected");

	var children = target.parentNode.childNodes;

	for ( var i=0, n=children.length; i<n; ++i )
	{
		if ( children[i] == target ) {
			target.parentNode.setAttribute("selectedIndex", i);
			break;
		}
	}
}

function NSuggest_MenuItem_onMouseOver ( event ) {

	if ( event == null ) event = window.event;
	var target = this; 
	var current = target.parentNode.getAttribute("selectedIndex");
	if ( current != -1 && current != null )
		NSuggest_RemoveElementClass ( target.parentNode.childNodes[current], "item_selected" );

	NSuggest_AddElementClass (target, "item_selected");
	var children = target.parentNode.childNodes;

	for ( var i=0, n=children.length; i<n; ++i )
	{
		if ( children[i] == target ) {
			target.parentNode.setAttribute("selectedIndex", i);
			clearTimeout(NSuggest_ExpandTimerId);
			NSuggest_ExpandItem (i,500);
			break;
		}
	}
		
}

function NSuggest_MenuItem_onMouseOut ( event ) {
NSuggest_CollapsItems ();
}

function NSuggest_IsActive() {
  return NSuggest_dropDownDiv }

  
//---------------------------------------------------

function NSuggest_CrtNewSug() {
	if (NSuggest_IsActive()) { NSuggest_NewDD() ; return; }
	clearTimeout (NSuggest_updateTimer)
	var ms=NSuggest_openTime;
	if (!NSuggest_CurrentField) return;
	if (NSuggest_CurrentField.getAttribute('sgDelay') !=null ) {
		var sgDelay=parseInt(NSuggest_CurrentField.getAttribute('sgDelay'));
		if (sgDelay >= 0) var ms=sgDelay;
	}
    NSuggest_PreCrtNewSug(ms);
}

function NSuggest_PreCrtNewSug(ms) {
	NSuggest_updateMSec=parseInt(ms);
	if (NSuggest_updateMSec > 0) {
		NSuggest_updateMSec -= NSuggest_delayTime;
		NSuggest_updateTimer=setTimeout("NSuggest_PreCrtNewSug(NSuggest_updateMSec)",NSuggest_delayTime);
    	} else {
		NSuggest_NewDD ();
	    }
}

function NSuggest_NewDD()
{
	clearTimeout (NSuggest_updateTimer)
	if (NSuggest_CurrentField.getAttribute('sgDict') == null ) return;
	if (NSuggest_CurrentField.getAttribute('suggest') !=null ) {
  	  if (NSuggest_CurrentField.getAttribute('suggest').toBoolean() == false) return;
	}
	if ( NSuggest_CurrentField == null || NSuggest_CurrentField.value.length == 0 ) return;
	
		var cursorIndex = NSuggest_GetCursor();
		var currentInput = NSuggest_CurrentField.value;
		var firstChar = currentInput.search( /\S/ );
		if ( firstChar != -1 ) currentInput = currentInput.substring( firstChar );
		if ( currentInput.length <= 1 ) { NSuggest_Escaped = false; }
		if (NSuggest_Escaped) return;
		NSuggest_FindSuggestions( currentInput );
}

function NSuggest_GetParent (obj) {
      if (obj) {
          var result = obj.parentNode;
          while (result && result.nodeType != 1) result = result.nextSibling;
          if (result) return result;
      }
      return null;
}

function NSuggest_CreateDD (suggestions)
{
	var selectedIndex = -1;
	if ( NSuggest_dropDownDiv == null ) {
		NSuggest_dropDownDiv = window.document.createElement("div");
		NSuggest_dropDownDiv.style.position = "absolute";
		NSuggest_dropDownDiv.id = "constr_div";
//		NSuggest_dropDownDiv.style.position = "relative";
		NSuggest_dropDownDiv.style.zIndex = 99999;
//		NSuggest_dropDownDiv.style.visibility = "hidden";
		NSuggest_dropDownDiv.display = "none";
		NSuggest_InputPos(NSuggest_CurrentField);
	}
// Add suggest div to page

//   NSuggest_br = window.document.createElement("br");
//   NSuggest_CurrentField.appendChild(NSuggest_dropDownDiv);
//	 alert (NSuggest_GetParent(NSuggest_CurrentField).innerHTML);
   	NSuggest_CurrentField.parentNode.insertBefore ( NSuggest_dropDownDiv, NSuggest_CurrentField.nextSibling);
//   NSuggest_CurrentField.parentNode.insertBefore ( NSuggest_br,NSuggest_dropDownDiv );
//   document.body.appendChild ( NSuggest_dropDownDiv );
//	var  newCurrentField = parent.removeChild(NSuggest_CurrentField);
	
	if ( NSuggest_dropDownList == null ) {
		NSuggest_dropDownList = window.document.createElement("div");
		NSuggest_dropDownList.className = NSuggest_setStyle();
		NSuggest_dropDownList.id = "SG_select";
		NSuggest_dropDownList.onclick = NSuggest_Menu_onClick;
		NSuggest_dropDownList.onmousedown = NSuggest_Menu_onMouseDown;
		NSuggest_dropDownList.unselectable = "on";

		NSuggest_dropDownList.style.width = NSuggest_CurrentField.offsetWidth + "px";
		if ( NSuggest_CurrentField.getAttribute('sgWidth') != null ) { 
			var width_custom = parseInt(NSuggest_CurrentField.getAttribute('sgWidth'));
			if (width_custom > NSuggest_CurrentField.offsetWidth) NSuggest_dropDownList.style.width=width_custom + "px";
		}
		
	
		NSuggest_dropDownDiv.appendChild ( NSuggest_dropDownList );
		}

//	NSuggest_dropDownList.style.visibility = "hidden";
	NSuggest_dropDownDiv.display = "none";
	// delete any children in excess of what we need
	for ( var i=suggestions.length, n=NSuggest_dropDownList.childNodes.length; i<n; ++i ) {
		NSuggest_dropDownList.removeChild ( NSuggest_dropDownList.childNodes[suggestions.length] );
	}
	
//	window.document.debugform.debug.value = "[" + CurrentField.offsetWidth +"]";
	for( var index = 0; index < suggestions.length; index++ )
	{
		var CurrentMChild = NSuggest_dropDownList.childNodes[index];
		if ( CurrentMChild == null ) {
			CurrentMChild = window.document.createElement("div");
			CurrentMChild.className = "item";
			CurrentMChild.onmousedown = NSuggest_MenuItem_onMouseDown;
			CurrentMChild.onmouseover = NSuggest_MenuItem_onMouseOver;
			CurrentMChild.onmouseout = NSuggest_MenuItem_onMouseOut;
			CurrentMChild.id = "MChild_" + index;
			CurrentMChild.isopen = false;
			NSuggest_dropDownList.appendChild(CurrentMChild);
		} else {
		NSuggest_RemoveElementClass ( CurrentMChild, "item_selected" );
		}
		CurrentMChild.value = suggestions[ index ][ 0 ];
		CurrentMChild.text = suggestions[ index ][ 1 ];
		CurrentMChild.fulltext = suggestions[ index ][ 2 ];
		CurrentMChild.innerHTML = "<nobr id=ltext"+index+">" + CurrentMChild.fulltext + "</nobr>";

		CurrentMChild.fullwidth=document.getElementById('ltext'+index).offsetWidth;
		if (CurrentMChild.fullwidth > NSuggest_CurrentField.offsetWidth - 22) {
		CurrentMChild.nopen = true;
		CurrentMChild.linetext = "<nobr>" + CurrentMChild.fulltext + "</nobr>";
		} else {
		CurrentMChild.nopen = false;
		CurrentMChild.linetext = "<nobr>" + CurrentMChild.fulltext + "</nobr>";
		}
		CurrentMChild.innerHTML = CurrentMChild.linetext;
	}

	if ( suggestions.length <= NSuggest_VisibleResults ) {
		NSuggest_dropDownList.style.height = "auto";
		NSuggest_dropDownList.style.overflow = "hidden";
		NSuggest_dropDownList.style.overflowY = "hidden";
	} else {
		var CurrentMChild = NSuggest_dropDownList.childNodes[NSuggest_VisibleResults-1];
		NSuggest_dropDownList.style.height = ( CurrentMChild.offsetTop + CurrentMChild.offsetHeight + 2 ) + "px";
		NSuggest_dropDownList.style.overflow = "auto";
		if ( NSuggest_isGecko ) NSuggest_dropDownList.style.overflow = "-moz-scrollbars-vertical";
		if ( NSuggest_isIE ) NSuggest_dropDownList.style.overflow = ""; NSuggest_dropDownList.style.overflowY = "scroll";
		if (NSuggest_isOpera) NSuggest_dropDownList.style.overflow = "auto";
	}
	// Hide Elements from CurrentField Attr: sgHideElements=""

	NSuggest_ShowHideElements("hide",NSuggest_CurrentField);
	NSuggest_MakeElementTreeUnselectable ( NSuggest_dropDownList );
	NSuggest_dropDownList.setAttribute("selectedIndex", selectedIndex);
	NSuggest_Menu_SelectItem (NSuggest_dropDownList, -1);
//	NSuggest_dropDownList.style.visibility = "visible";
	NSuggest_dropDownDiv.display = "block" ;
	NSuggest_dropDownList.setAttribute("selectedIndex", selectedIndex);
	NSuggest_PlaceSuggList ( NSuggest_CurrentField, true );
}


function NSuggest_UpdateDD (todo)
{
	if ( todo == null || todo == "" ||
			NSuggest_CurrentField == null || NSuggest_CurrentField.value.length == 0 ||
			NSuggest_dropDownList == null || NSuggest_dropDownList.childNodes.length == 0 )
	{
		NSuggest_RemoveDD();
		return;
	}    

	var selectedIndex = NSuggest_dropDownList.getAttribute("selectedIndex");
	if (selectedIndex == null) selectedIndex = -1; 
	var newSelection = selectedIndex;

	switch ( todo ) {
	case "selectPrev": newSelection--; break;
	case "selectNext": newSelection++; break;
	case "selectNextPage": newSelection += NSuggest_VisibleResults; break;
	case "selectPrevPage": newSelection -= NSuggest_VisibleResults; break;
	case "selectFirst": newSelection = 0; break;
	case "selectLast": newSelection = NSuggest_dropDownList.childNodes.length - 1; break;
// added 1.7.1	
	case "showFull": if (newSelection == -1) {newSelection = 0; break; } else { NSuggest_ExpandItem (newSelection,0,true); break;}
//
	default:
		NSuggest_RemoveDD();
		return;
	}

	if (newSelection < 0)
		newSelection = 0;
	if (newSelection > (NSuggest_dropDownList.childNodes.length - 1))
		newSelection = NSuggest_dropDownList.childNodes.length -1;
		

	if ( newSelection != selectedIndex ) {
		NSuggest_Menu_SelectItem ( NSuggest_dropDownList, newSelection, true );
		NSuggest_dropDownList.setAttribute("selectedIndex", newSelection);
		NSuggest_CollapsItems ();
		NSuggest_ExpandItem (newSelection,500);
	}
	
	NSuggest_PlaceSuggList ( NSuggest_CurrentField, true );
}

var NSuggest_ExpandDelayTime = 1000;
var NSuggest_ExpandMs = 0
var NSuggest_ExpandTimerId;

function NSuggest_ExpandItem (SelNode,ms,keys){
	if (NSuggest_dropDownList.childNodes[SelNode] == null || NSuggest_dropDownList.childNodes[SelNode].nopen == false) { return; }
    NSuggest_ExpandMs=parseInt(ms);
    if (NSuggest_ExpandMs > 0) { 
        NSuggest_ExpandMs -= NSuggest_ExpandDelayTime;
 NSuggest_ExpandTimerId=setTimeout("NSuggest_ExpandItem("+SelNode+",NSuggest_ExpandMs)",NSuggest_ExpandDelayTime);
    } else { 
//	clearTimeout(NSuggest_ExpandTimerId);
	if (!NSuggest_dropDownList.childNodes[SelNode].isopen) {
		NSuggest_CollapsItems ();
		NSuggest_dropDownList.childNodes[SelNode].isopen = true;
		NSuggest_dropDownList.childNodes[SelNode].innerHTML = NSuggest_dropDownList.childNodes[SelNode].fulltext;
		} else {
			if (keys) {
			NSuggest_dropDownList.childNodes[SelNode].isopen = false;
			NSuggest_dropDownList.childNodes[SelNode].innerHTML = NSuggest_dropDownList.childNodes[SelNode].linetext;
			}
		}
	}
}

function NSuggest_CollapsItems () {
		for ( var i=0; i < NSuggest_dropDownList.childNodes.length ; i++ )
			{
			if (NSuggest_dropDownList.childNodes[i].isopen ) {
			    NSuggest_dropDownList.childNodes[i].isopen = false;
				NSuggest_dropDownList.childNodes[i].innerHTML = NSuggest_dropDownList.childNodes[i].linetext;
				}
		}
    clearTimeout(NSuggest_ExpandTimerId);
}

function NSuggest_PlaceSuggList ( NSuggest_CurrentField, forceIt ) {
	if ( NSuggest_CurrentField == null && NSuggest_dropDownList != null ) {
		NSuggest_CurrentField = window.document.getElementById ( NSuggest_dropDownList.getAttribute ( "CurrentFieldID" ));
	}

	if ( NSuggest_CurrentField == null || NSuggest_dropDownList == null ) {
		return;
	}

	//	if ( NSuggest_dropDownDiv.style.visibility != "visible" && !forceIt ) {
	if ( 	NSuggest_dropDownDiv.display != "block" && !forceIt ) {
			return;
	}

//	NSuggest_InputPos(NSuggest_CurrentField);
	NSuggest_dropDownDiv.display = "block";

	if (NSuggest_dropDownList.offsetWidth < NSuggest_CurrentField.offsetWidth)
		NSuggest_dropDownList.style.posWidth = NSuggest_CurrentField.offsetWidth;

	NSuggest_dropDownList.setAttribute("CurrentFieldID",NSuggest_CurrentField.id);
}


function NSuggest_RemoveDD()
{
	clearTimeout (NSuggest_updateTimer);
	if ( NSuggest_dropDownDiv != null )
	{
		NSuggest_dropDownDiv.parentNode.removeChild ( NSuggest_dropDownDiv );
		NSuggest_dropDownDiv.style.visibility = "hidden";
		NSuggest_dropDownDiv.display = "none";
		NSuggest_dropDownDiv = null;
	}
	NSuggest_dropDownList = null;
	// Show Hidden Elements from CurrentField Attr: sgHideElements=""
	if (NSuggest_ExpandTimerId)	clearTimeout(NSuggest_ExpandTimerId);
	NSuggest_ShowHideElements("show",NSuggest_CurrentField);
}

function NSuggest_InsSug()
{
	if ( NSuggest_IsActive() == false ) return;
//    if ( NSuggest_dropDownList.getAttribute("selectedIndex") == -1 ) return;
	var item = NSuggest_dropDownList.childNodes[NSuggest_dropDownList.getAttribute("selectedIndex")];
	NSuggest_CurrentField.value = item.text.replace(/\u00A0/g,"");
	NSuggest_RemoveDD();
	NSuggest_CurrentField.focus();
	
	if (NSuggest_CurrentField.getAttribute('sgRunFunc') !=null && NSuggest_CurrentField.getAttribute('sgRunFunc') !="" ) {
//		eval (NSuggest_CurrentField.getAttribute('sgRunFunc').replace(/sgresult/i, NSuggest_CurrentField.value) + ";")
eval (NSuggest_CurrentField.getAttribute('sgRunFunc').replace(/sgresult/i,NSuggest_CurrentField.value.replace(/\'/g,"\\\'")) + ";");
	}
}

String.prototype.toBoolean = 
function() {
	return ~"1|yes|da|si|true|on".indexOf(this.toString().toLowerCase());
}

// --------------------------------------------------


function NSuggest_FindPrefix (inputText, fail) {
	if (inputText == "") return fail; 
	var cache = NSuggest_Cache[inputText];
	return cache? 
      ( (cache == -1)? -1 : ((cache[1] & 1)? cache : fail) ) : 
      NSuggest_Cache[inputText] = NSuggest_FindPrefix(inputText.substring(0, inputText.length - 1), fail);
}

function NSuggest_FindSuggestions (inputText) {

//  inputText = inputText.toLowerCase().replace(/-/g, " ");
  inputText = inputText.toLowerCase();
  var dict = NSuggest_CurrentField.getAttribute('sgDict');
  NSuggest_Cache = NSuggest_AllCache[dict];
  if(NSuggest_Cache == -1) { NSuggest_FindResults(inputText); return; }
  if(NSuggest_Cache == null)
    NSuggest_Cache = NSuggest_AllCache[dict] = new Object();
  if ( inputText == null || inputText.length <= 1) { NSuggest_RemoveDD(); return; }
  var rc = NSuggest_Cache[inputText];
  if(rc == null) rc = NSuggest_FindPrefix(inputText, null);
  if(rc) {
    if(~rc) Print_out(inputText); else NSuggest_RemoveDD();
  } else 
    NSuggest_ReqServer(inputText);
}

function server_callback(inputText) {
  if(NSuggest_DataFlags & 4) {
    var dict = NSuggest_CurrentField.getAttribute('sgDict');
	NSuggest_Cache = NSuggest_AllCache[dict] = -1;
	NSuggest_FindResults(inputText);
	return;
  }
  NSuggest_Cache[NSuggest_request] = 
  (NSuggest_DataFlags & 6)? -1 : [NSuggest_Data,NSuggest_DataFlags];
  NSuggest_FindPrefix (inputText, -1);
  Print_out(inputText);
}
  
function Print_out(inputText) {
  var rc = NSuggest_Cache[inputText];
  if(rc && ~rc) {
    NSuggest_Data = rc[0];
    NSuggest_DataFlags = rc[1];
    NSuggest_FindResults(inputText);
  } else {
    NSuggest_RemoveDD();
  }
}

//----------------------------------------------------

function NSuggest_FindResults( inputText ) {
	NSuggest_setVisProp();
	NSuggest_currentSuggestions = ["HEMA"];
	var total = 0;
	var res_tmp = new Array();
	var inputPat = inputText.replace( /(\\|\[|\]|\(|\)|\.|\^|\$|\?)/g, "\\\$1");
	var rg = new RegExp("(" + inputPat + ")","i");
//	var rg2 = new RegExp(((NSuggest_DataFlags & 8)? "(@|^)" : "(^|[^A-Z0-9a-z_])") +inputPat.replace(/-/g, "-"),"i");
	var rg2 = new RegExp(((NSuggest_DataFlags & 8)? "(@|^)" : "(^|[^A-Z0-9a-z_])") +inputPat,"i");
	for ( var i = 0; i < NSuggest_Data.length && total < NSuggest_MaxResults; i++ ) {	
		if ( NSuggest_DataFlags & 4 ) { 
			NSuggest_currentSuggestions[0] = [ 0, " " , "<b>Error</b> : Unknown Dictionary sgDict=<b>"+NSuggest_CurrentField.getAttribute('sgDict')+"</b>" ]; 
            break;
        }
		if ( NSuggest_Data[i].match(rg2)) {
            res_tmp[total] = NSuggest_Data[i].split("@")[0].replace(/&apos;/g, "'").replace(/&amp;/g, "&");
			NSuggest_currentSuggestions[total] = [ total, res_tmp[total] , res_tmp[total].replace (rg, "<b class='fbold'>$1</b>" ) ];
			total++;
		}
	}
	if (NSuggest_currentSuggestions[0] != "HEMA") {
		NSuggest_CreateDD (NSuggest_currentSuggestions );
		NSuggest_PlaceSuggList ( NSuggest_CurrentField, true );
	} else
		NSuggest_RemoveDD();
}

function NSuggest_setVisProp0(key, val) {
  return ((key = NSuggest_CurrentField.getAttribute(key)) && (key = parseInt(key)) > 0)? key : val; 
}

function NSuggest_setVisProp() {
  NSuggest_VisibleResults = NSuggest_setVisProp0('sgVisibleRes', NSuggest_VisibleResults);
  NSuggest_MaxResults     = NSuggest_setVisProp0('sgMaxRes',     NSuggest_MaxResults);
}

function NSuggest_setStyle() {
  var style = NSuggest_CurrentField.getAttribute('sgStyle');
  return style? style : NSuggest_defStyle; 
}

	

function NSuggest_ReqServer(request) {
  if(NSuggest_XMLHTTPOBJ) {
    if(NSuggest_XMLHTTPOBJ.readyState)
      NSuggest_XMLHTTPOBJ.abort();
    NSuggest_XMLHTTPOBJ.onreadystatechange=function() {
      if(NSuggest_XMLHTTPOBJ.readyState == 4 && NSuggest_XMLHTTPOBJ.status == 200) {
        eval(NSuggest_XMLHTTPOBJ.responseText);
        server_callback(request);
	  }
    };
//    NSuggest_XMLHTTPOBJ.open("GET", 
//      location.protocol+"//"+location.host+NSuggest_CgiUrl+"?dict="+
//      NSuggest_CurrentField.getAttribute('sgDict')+"&q="+
//      request.replace(/ /g, "+").replace(/&/g, "%26"), 
//      true);
     NSuggest_XMLHTTPOBJ.open("GET", 
      location.protocol+"//"+location.host+NSuggest_CgiUrl+"?dict="+
      NSuggest_CurrentField.getAttribute('sgDict')+"&q="+
      request.replace(/ /g, "+").replace(/&/g, "%26")+"&"+NSuggest_ServicePrefix, 
      true);

    NSuggest_XMLHTTPOBJ.send(null)
  }
}


function NSuggest_CleanRecipientValue ( fieldID ) {                          
  var field = document.getElementById( fieldID );             
  if ( field == null || field.value == null || field.value.length == 0 )
    return;                                             
  
// works whether we're using INPUTs or TEXTAREAs:           
field.value = field.value.replace ( /(\n\r|\r\n|\s)/g, " " ).replace ( /;/g, "," ).replace( /,(,|\s)*,/g,",");

}

function NSuggest_CreateData(request,response,flags){

  NSuggest_request = request;
  NSuggest_DataFlags=flags;
  NSuggest_Data = response;
}

function NSuggest_InputPos(obj)
{
	var pos = Nsuggest_getOffset(obj);
	var InputDiv_left = pos['left'];
	var InputDiv_top = pos['top'] + obj.offsetHeight;
	
	NSuggest_dropDownDiv.style.left =  InputDiv_left + 'px';
	NSuggest_dropDownDiv.style.top =  InputDiv_top + 1 + 'px';
}

function Nsuggest_getOffset(obj) {
	
	var curleft = curtop = 0;
	if (obj.offsetParent) {
		do {
			curleft += obj.offsetLeft;
			curtop += obj.offsetTop;
		} while (obj = obj.offsetParent);
	}
	
	return { 'left' : curleft, 'top' : curtop };
	
}

