/**************************************************
 * Javascripts created to control the synonyms    *
 * selection.									  *
 * Author : Mark Bingley	2005		  		  *
 *************************************************/

var formToUse = "primaryForm";
var content = "";
var finderContent = "";
var currentSearchTerm = "";

/*
TO DO LIST as @ 30th Jan 2006
1) Add comments for all functions to describe what they do
*/

function positionSynonymsDiv(divName, center) {
  document.getElementById(divName).style.display = 'block';
  if (center) {
  	centerDivPosition(divName);
  }
}

function centerDivPosition(divName) {
   var windowWidth = 0;
   var windowHeight = 0;
   var divWidth = 300;
   var divHeight = 80;
   if (document.all) {
     windowWidth = document.documentElement.clientWidth;
     windowHeight = document.documentElement.clientHeight;
     if (windowWidth == 0) {
       windowWidth = document.body.clientWidth;
       windowHeight = document.body.clientHeight;
     }
   } else {
     windowWidth = window.innerWidth;
     windowHeight = window.innerHeight;
   }
   if (windowWidth < 550) {
     windowWidth = 550;
   }
   if (windowHeight < 310) {
     windowHeight = 310;
   }
   document.getElementById(divName).style.left = ((windowWidth - 550)/2) + 'px';
   document.getElementById(divName).style.top = ((windowHeight - 310)/2) + 'px';
}

function moveSynonymsDivAway(divName) {
  document.getElementById(divName).style.left = 0 + 'px';
  document.getElementById(divName).style.top = 800 + 'px';
  document.getElementById(divName).style.display = 'none';
}

// this function gets the specific finders for the synonyms box, and then uses AJAX to initiate the synonym search itself
function getFinders(form, divName, associatedTextBox, center) {
	var dd = document.getElementById("primarySearchRefineOperator");
	if (dd){
	  dd.style.visibility = "hidden";
	}
	dd = document.getElementById("menu_queryFields_1");
	if (dd){
	  dd.style.visibility = "hidden";
	}
  //first set the search term to a global variable
  currentSearchTerm = Trim(document.getElementById(associatedTextBox).value);
  if (Trim(currentSearchTerm) == "") {
    alert("Please enter a search term.");
    return;
  }

  // get the X- and Y-coordinates of the associatedTextBox
  var tBX = findPosX(document.getElementById(associatedTextBox));
  var tBY = findPosY(document.getElementById(associatedTextBox));
  //alert("tBX=[" + tBX + "]   tBY=[" + tBY + "]");

  var hiddenField = 'hidden_previous_synonym_'+divName;
  var previousSearchTermFromHiddenField = document.getElementById(hiddenField).value;
  var synonymsSelectedStored = document.getElementById('synonymsSelected_'+divName).value;
  
  //alert("currentSearchTerm: ["+currentSearchTerm+"] and previousSearchTermFromHiddenField: ["+previousSearchTermFromHiddenField + "] and synonymsSelectedStored: ["+synonymsSelectedStored+"]");
  
  if (((currentSearchTerm == "") && (synonymsSelectedStored != "Add Synonyms") 
       && (synonymsSelectedStored != "")) 
      || ((currentSearchTerm == previousSearchTermFromHiddenField)  
	  && (synonymsSelectedStored != "") ) )
  {
    //showStopOption('freezeOnly');
    if (document.all) {		
      document.getElementById("synonymLaunchiFrame").style.display = "inline"; 
    }
    document.getElementById(divName).style.visibility = 'visible';
    document.getElementById(divName).style.display = 'block';
    document.getElementById(divName).style.zIndex = '140';
//    document.getElementById(divName+'_synonymsFinderContainer').style.visibility = 'visible';
//    document.getElementById(divName+'_synonymsFinderContainer').style.display = 'block';
    document.getElementById(divName+'_synonymsResultsContainer').style.visibility = 'visible';
    document.getElementById(divName+'_synonymsResultsContainer').style.display = 'block';
    document.getElementById(divName+'_synonymsResults').style.visibility = 'visible';
    document.getElementById(divName+'_synonymsResults').style.display = 'block';
    document.getElementById(divName).style.left = tBX + 'px';
    document.getElementById(divName).style.top = tBY + 25 + 'px';
    positionSynonymsDiv(divName, center);
  }
  else {
    // display the search term back to the user in the Header
    document.getElementById(divName+'_searchTerm').innerHTML = currentSearchTerm;
    AjaxServices.getFinders( {
		callback:function(str) { launchSynonyms(str, form, divName, tBX, tBY, center); }
    });
  }
}		

// this function takes the AJAX results, and pushes the content into the container for display
function launchSynonyms(finders, form, divName, tBX, tBY, center) {
  if (currentSearchTerm != "") {
	showStopOption('freezeOnly');
    formToUse = form;
    document.getElementById(divName).style.left = tBX + 'px';
    document.getElementById(divName).style.top = tBY + 25 + 'px';
    document.getElementById(divName).style.visibility = 'visible';
    document.getElementById(divName).style.display = 'block';
//    document.getElementById(divName+'_synonymsFinderContainer').style.visibility = 'visible';
//    document.getElementById(divName+'_synonymsFinderContainer').style.display = 'block';
    document.getElementById(divName+'_synonymsResultsContainer').style.visibility = 'visible';
    document.getElementById(divName+'_synonymsResultsContainer').style.display = 'block';
    document.getElementById(divName+'_synonymsResults').style.visibility = 'visible';
    document.getElementById(divName+'_synonymsResults').style.display = 'block';
    if (document.all) {		
      document.getElementById("synonymLaunchiFrame").style.display = "inline"; 
    }
    positionSynonymsDiv(divName, center);
		
    //populate the finders
    finderContent = "<table width='100%' border='0' cellspacing='0' cellpadding='0'><tr><td class='bold'>Please select the finders you wish to use:</td></tr><tr><td><input type='checkbox' name='checkbox_cbAllFinders_"+divName+"' id='checkbox_cbAllFinders_"+divName+"' value='cbAllFinders' onClick='allFindersCheckBox(&#34;"+divName+"&#34;);getSynonyms(&#34;"+divName+"&#34;);' checked><span class='groupHeader'>&nbsp;All Finders&nbsp;&nbsp;&nbsp;&nbsp;</span></td></tr><tr><td>";
	
    for (var i=0; i<finders.length; i++) { 
      finderContent = finderContent +"<input title='"+finders[i].description+"' type='checkbox' name='checkbox_finderList_"+divName+"' id='"+divName+"_"+finders[i].name+"' value='"+finders[i].name+"' onClick='uncheckAllFindersCheckBox(&#34;"+divName+"&#34;);getSynonyms(&#34;"+divName+"&#34;);' checked><a title='"+finders[i].description+"' onMouseOver='displayTip2(&#039;"+divName+"_"+finders[i].name+"_tip&#039;);' onMouseOut='hideTip2(&#039;"+divName+"_"+finders[i].name+"_tip&#039;);'>&nbsp;"+finders[i].printName+"</a><br><div id='"+divName+"_"+finders[i].name+"_tip' class='tip2'>"+finders[i].description+"</div>";
    }
			
    //onMouseOver='displayTip('dbselTip');' onMouseOut='hideTip('dbselTip');'
			
	
    finderContent = finderContent + "</tr></table><p>";
    if (finders.length == 0) {
      document.getElementById(divName+'_synonymsFinderContainer').innerHTML = "There were no finders found in SRS. Please contact your system administrator for more information on this";
    } else {
      document.getElementById(divName+'_synonymsFinderContainer').innerHTML = finderContent;
    }
    // read previous finder list cookie if there is one, and apply the ticks
    readUserSelectedFinders(divName);
    getSynonyms(divName);
  } else {
    alert("Please enter a search term.");
  }
}

// this function hides the popup
function hideSynonymPopup(divName, synonymsImage) { 
  var dd = document.getElementById("primarySearchRefineOperator");
  if (dd){
    dd.style.visibility = 'visible';
  }
  dd = document.getElementById("menu_queryFields_1");
  if (dd){
    dd.style.visibility = 'visible';
  }
  var checkBoxGroupName = 'checkbox_synonymList_'+divName;
  var userSelectedSynonyms = "";
  i=0;
  while (el = document.forms[formToUse].elements[i++]) {
    if(el.name == checkBoxGroupName) {	
      if (el.checked == true) {
	if (userSelectedSynonyms == "") {
	  userSelectedSynonyms = el.value;
	} else {
	  userSelectedSynonyms = userSelectedSynonyms + "-__-" + el.value;
	}
      }
    }
  }

  document.getElementById('synonymsSelected_'+divName).value = userSelectedSynonyms;
  document.getElementById(synonymsImage).title = document.getElementById('synonymsSelected_'+divName).value.replace(/-__-/g, ", ");
	
  var synonymsSelectedStored = document.getElementById(synonymsImage).title;
	
  if ((synonymsSelectedStored == "") || (synonymsSelectedStored == "Add Synonyms")) {
    document.getElementById(synonymsImage).src = "images/shared/synonym_select.gif";
  } else {
    document.getElementById(synonymsImage).src = "images/shared/synonym_select_active.gif";
  }

  document.getElementById(divName).style.visibility='hidden';
  document.getElementById(divName).style.display='none';
  document.getElementById(divName+'_synonymsFinderContainer').style.visibility='hidden';
  document.getElementById(divName+'_synonymsFinderContainer').style.display='none';
	
  if (document.all) {		
    document.getElementById("synonymLaunchiFrame").style.display = "none"; 
  }
	
  document.getElementById(divName+'_synonymsResultsContainer').style.visibility='hidden';
  document.getElementById(divName+'_synonymsResultsContainer').style.display='none';
  document.getElementById(divName+'_synonymsResults').style.visibility='hidden';
  document.getElementById(divName+'_synonymsResults').style.display='none';
  moveSynonymsDivAway(divName);
}
// this makes the help container visible
function showSynonymHelpInfo() {
  document.getElementById('synonymsHelpContainer').style.visibility='visible';
  document.getElementById('synonymsHelpContainer').style.display ='block';
}
// this hides the help container
function hideSynonymHelpInfo() {
  document.getElementById('synonymsHelpContainer').style.visibility='hidden';
  document.getElementById('synonymsHelpContainer').style.display ='none';
}

// controls the all finders checkbox
function allFindersCheckBox(divName) {
  i=0;
  var checkBox = document.forms[formToUse].checkbox_finderList;
  while (el = document.forms[formToUse].elements[i++]) {
    if(el.name == 'checkbox_finderList_'+divName) {	
      //alert("el :"+el.name);
      if (document.getElementById('checkbox_cbAllFinders_'+divName).checked) {
	el.checked = true;
      } else {
	el.checked = false;
      }
    }
  }
}

// this unchecks the ALL tick box in the finders section
function uncheckAllFindersCheckBox(divName) {
  document.getElementById('checkbox_cbAllFinders_'+divName).checked = false;
}

var finderListToSend = "";
function getSynonyms(divName) {
  //showStopOption('freezeOnly');
  // save the finder list to a cookie
  saveUserSelectedFinders(divName);
  content = "Loading ....";
  document.getElementById(divName+'_synonymsResults').innerHTML = content;
  content = "";
  var checkBox = "";
  finderListToSend = "";
  var el, i = 0;
  var finderListGroup = "checkbox_finderList_"+divName;
  checkBox = document.forms[formToUse].checkbox_finderList;
  while (el = document.forms[formToUse].elements[i++]) {
    if(el.name == finderListGroup) {	
      if ((el.type == 'checkbox') && (el.name != 'checkbox_cbAllFinders')) {
	if (el.checked) {
	  if (finderListToSend == "") {
	    finderListToSend = el.value;
	  } else {
	    finderListToSend = finderListToSend + "," + el.value;
	  }
	}
      }
    }
  }
		
  if (finderListToSend != "") {
    // set the previous search term to the hidden field, so that we can redisplay previously selected synonyms without re-running the AJAX calls.	
    var hiddenField = 'hidden_previous_synonym_'+divName;
    document.getElementById(hiddenField).value = currentSearchTerm;

    AjaxServices.getSynonyms(currentSearchTerm, finderListToSend, {
    callback:function(str) { displaySynonyms(str, divName); }
    });
  } else {
    var noFinderSelected = "No Finder is selected, please select one from above";
    document.getElementById(divName+'_synonymsResults').innerHTML = noFinderSelected;
  }
}

//this function displays the results of the synonym search
function displaySynonyms(synonyms, divName) {
  var finderListToDisplay = finderListToSend.split(",");
  var finderPrintNameMap = synonyms["finderPrintNameMap"];
  
  for (var j=0; j<finderListToDisplay.length; j++) { 
    var	theseFinders = finderListToDisplay[j];
    var totalSynonymCount = 0;

    if (synonyms[theseFinders]) {
      totalSynonymCount = totalSynonymCount + synonyms[theseFinders].length;
      content = content + "&nbsp;<br><span class='bold'>"+finderPrintNameMap[theseFinders]+"&nbsp;["+synonyms[theseFinders].length+"]</span><br>";
      for (var i=0; i<synonyms[theseFinders].length; i++) {
        // Need to replace apostrophes with character entities to prevent
        // the checkbox's value from being truncated at the first apostrophe.
        synonymValue = synonyms[theseFinders][i].replace(/'/g, "&#039;");
	    content = content + "&nbsp;&nbsp;<input type='checkbox' name='checkbox_synonymList_"+divName+"' id='id_"+ synonyms[theseFinders][i] +"' value='"+ synonymValue +"' >"+ synonyms[theseFinders][i] +"<br>";
      }
    }
    if (totalSynonymCount == 1000) {
      content = content + "<br>&nbsp;&nbsp;&nbsp;<b>The limit of 1000 synonyms was reached.<br>&nbsp;&nbsp;&nbsp;There may be more synonyms available.<br>&nbsp;&nbsp;&nbsp;To find out, deactivate the finders used to<br>&nbsp;&nbsp;&nbsp;identify the synonyms shown in this box.</b><br><br>";
    }
  }
	
  if (content != "") {
    document.getElementById(divName+'_synonymsResults').innerHTML = content;
  } else {
    document.getElementById(divName+'_synonymsResults').innerHTML = "There were no synonyms found for your search term in the finders selected";
  }
}

// This function saves the checkbox ids of the finders selected by the user in a cookie.
function saveUserSelectedFinders(divName) {
  var userSelectedFindersList = "";
  i=0;
  while (el = document.forms[formToUse].elements[i++]) {
    if(el.name == 'checkbox_finderList_'+divName) {	
      if (el.checked == true) {
	// then add to cookie array
	if (userSelectedFindersList == "") {
	  userSelectedFindersList = divName + el.value + "__";
	} else {
	  userSelectedFindersList = userSelectedFindersList + divName + el.value + "__";
	}
      }
    }
  }
  setCookie('synonymFinders_'+divName, userSelectedFindersList);
}

// This function checks/unchecks the finder checkboxes
// according to what has been stored in the cookie
// by the 'saveUserSelectedFinders()' function.
function readUserSelectedFinders(divName) {
  if (getCookie('synonymFinders_'+divName)) {
    var cookieValue = getCookie('synonymFinders_'+divName);  
    if (cookieValue != null && cookieValue != '') {
      var userSelectedFinders = cookieValue.split("__");
      var j;
      for (j=0; j<userSelectedFinders.length; j++) { 
	var k=0;
	while (el = document.forms[formToUse].elements[k++]) {
	  if(el.name == 'checkbox_finderList_'+divName) {	
	    tempName = divName + el.value;
	    if (userSelectedFinders[j] == tempName) {
	      el.checked = true;
	    }
	  }
	}
      }
    }
  }
}

// this function adds the containers to the page
function addSynonymDivFunction(divName) {
  var synonymHtmlDiv = '<table width="100%"  border="0" cellspacing="0" cellpadding="0"><tr><td class="sectionHeading">Add Synonyms for :<div style="display:inline;" id="'+divName+'_searchTerm"></div></td><td><div id="'+divName+'_synonymsFindersContainerLaunch" class="synonymsFindersContainerLaunch"><a href="javascript:showFinders(&#039;'+divName+'&#039;)">Show Finders</a></div></td></tr></table><p><div class="synonymsMainArea"><div id="'+divName+'_synonymsFinderContainer" class="synonymsFinderContainer">Loading...</div><div id="'+divName+'_synonymsResultsContainer" ><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><tr><td>&nbsp;<strong>Your results are :</strong><p></td><td>&nbsp;</td></tr><tr><td colspan="2"><div id="'+divName+'_synonymsResults" class="synonymsResultsContainer">Loading ....</div></td></tr></table></div></div><table width="100%" border="0" cellspacing="0" cellpadding="0"><tr><td><p>&nbsp;<a href="javascript:hideSynonymPopup(&#039;'+divName+'&#039;,&#039;synonymImage_'+divName+'&#039;); hideFinders(&#039;'+divName+'&#039;);hideFreeze();"><img border="0" src="images/'+themeName+'/btn_close_off.gif" id="synonymSearch" onMouseOver="swapImage(this, &#039;images/'+themeName+'/btn_close_hover.gif&#039;);" onMouseOut="swapImage(this, &#039;images/'+themeName+'/btn_close_off.gif&#039;);" onMouseDown="swapImage(this, &#039;images/'+themeName+'/btn_close_on.gif&#039;);"></a></td></tr></table>';
  //alert("going in ");

  return synonymHtmlDiv;
}

// this function creates the required hidden control fields & the main container
function createSynonymDivs(divName) {
  var firstBit = '<input type="hidden" id="hidden_previous_synonym_'+divName+'" name="hidden_synonym_'+divName+'" value=""/><input type="hidden" id="synonymsSelected_'+divName+'" name="synonymsSelected_'+divName+'" value=""/><div id="'+divName+'" class="synonymsContainer">';
  var middleBit = addSynonymDivFunction(divName);
  var endBit = '</div>';
  var fullContent = firstBit + middleBit + endBit;
  document.write(fullContent);
}

// this functions displayed the current finders
function showFinders(divName) {
  document.getElementById(divName+'_synonymsFinderContainer').style.visibility = 'visible';
  document.getElementById(divName+'_synonymsFinderContainer').style.display = 'block';
  document.getElementById(divName+'_synonymsFindersContainerLaunch').innerHTML = '<a href="javascript:hideFinders(&#039;'+divName+'&#039;)">Hide Finders</a>';
	
}

// this function hides the current finders
function hideFinders(divName) {
  document.getElementById(divName+'_synonymsFinderContainer').style.visibility = 'hidden';
  document.getElementById(divName+'_synonymsFinderContainer').style.display = 'none';
  document.getElementById(divName+'_synonymsFindersContainerLaunch').innerHTML = '<a href="javascript:showFinders(&#039;'+divName+'&#039;)">Show Finders</a>';
}
