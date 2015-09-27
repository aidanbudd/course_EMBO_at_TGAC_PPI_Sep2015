function showSummarySheet(id) {
	var viewDisplayContainer = document.getElementById('viewDisplayArea');
	while (viewDisplayContainer.hasChildNodes())
	    viewDisplayContainer.removeChild(viewDisplayContainer.lastChild);
	//var sumSheetIFrame = document.getElementById('Frame-General');
	var sumSheetIFrame = document.createElement('iframe');
	var textNode = document.createTextNode('IFRAME');
	sumSheetIFrame.appendChild(textNode);
	sumSheetIFrame.frameBorder = 0;
	//sumSheetIFrame.id = 'Frame-General';
	sumSheetIFrame.width = 0;
	sumSheetIFrame.height = 0;
	sumSheetIFrame.scrolling = 'no';
	setTimeout(function() {sumSheetIFrame.src = 'reporter?input=' + id;}, 10);
	alert(sumSheetIFrame.width);
	//viewDisplayContainer.appendChild(sumSheetIFrame);
	viewDisplayContainer.innerHTML = sumSheetIFrame.innerHTML;
}

/**
 The previous code is probably not used anymore
**/

// Menu related stuff (redundant -> should be extracted) 

var menuCanHide = new Array();

// displays a menu relative to the item (e.g. link) that launched it
function showMenuRelative(menuId, launchItem){
	launchItemObj = document.getElementById(launchItem);
	var xPos = findPosX(launchItemObj);
	var yPos = findPosY(launchItemObj);
	menuCanHide[menuId] = false;
	var menu = document.getElementById(menuId);
	menu.style.visibility = "visible";
	menu.style.top=yPos-50+"px";
	menu.style.left=xPos-50+"px";
	cleanMenu();
}

function showMenu(menuId) {
	menuCanHide[menuId] = false;
	var menu = document.getElementById(menuId);
	menu.style.visibility = "visible";
	cleanMenu();
}

function cleanMenu() {
	for(menu in menuCanHide) {
		if (menu.indexOf('Menu', 0) >= 0) {
			doHideMenu(menu);
		}
	}
}

function hideMenu(menuId) {
	menuCanHide[menuId] = true;
	setTimeout("doHideMenu('" + menuId + "');", 500);
}

function doHideMenu(menuId) {
	if (menuCanHide[menuId]) {
		var menu = document.getElementById(menuId);
		if (menu) {
			menu.style.visibility = "hidden";
		}
	}
}

function expandSection(sectionId) {
	document.getElementById(sectionId).value = '1';
	document.forms['primaryForm'].submit();
}

function collapseSection(sectionId) {
	document.getElementById(sectionId).value = '0';
	document.forms['primaryForm'].submit();
}

function setHighlightTerms(){
	if (getCookie('highlightTerms')){
		var cookieValue = getCookie('highlightTerms');
		if (cookieValue == 'true'){		
			highlightTerms('true');
		}
	} else {
		highlightTerms('true');
	}
}


function highlightTerms(flag) {
	if (flag == "true"){
		setCookie('highlightTerms', 'true', 99);
		document.getElementById('highlightTermsTrigger').innerHTML = "<a href='#' onClick='highlightTerms(&#039;false&#039;);'>Switch Off</a>";
	}else{
		setCookie('highlightTerms', 'false', 99);
		document.getElementById('highlightTermsTrigger').innerHTML = "<a href='#' onClick='highlightTerms(&#039;true&#039;);'>Switch On</a>";
	}

	var terms = document.getElementsByTagName('span');
	var reference = 'termHighlight';
	var referenceSize = reference.length;
	for (var i = 0 ; i < terms.length ; i++) {
		var term = terms[i];
		var classNameLength = term.className.length;
		if ((classNameLength >= referenceSize)
			&& (term.className.substring(classNameLength - referenceSize, classNameLength).toUpperCase() == reference.toUpperCase())) {
			if (flag == "true") {
				term.className = 'termHighlight';
			} else {
				term.className = 'noTermHighlight';
			}
		}
	}
}

/**
 * Highlights an annotation row
 */
function highlight(originalColour, entryId){
    document.getElementById("id-"+entryId).className = originalColour +"_highlight";
  
}

/**
 * Removes highlight for an annotation row
 */
function delight(originalColour, entryId){
    document.getElementById("id-"+entryId).className = originalColour;
}

/**
 * launches the currently selected tool
 */
function submitTool() {
	resetHiddenFields();
	setFormElementById('action','toollaunch');
	document.forms['primaryForm'].submit();
}

/**
 * launches a specific tool
 */
function launchTool(toolName) {
	setFormElementById('addToolNameLaunch',toolName);
	submitTool();
}