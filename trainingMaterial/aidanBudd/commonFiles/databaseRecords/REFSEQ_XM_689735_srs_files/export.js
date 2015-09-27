// requires some variable to be set in the page:
// 
//  var entryView; <- true if the page is an entry view page
//  var exportDBList; <- the list of information corresponding to each application available
//  var array; <- the databank list corresponding to the selected entries
//  var arrayAsString; <- the string representation of the array of databanks selected
//  var checkedEntries; <- the number of entries checked
//  configuration of the annotation links on the slider is now also provided by this page

  function annotatableDb(lib){
  	var isOK=0;
  	for (var i=0;i<annotateDBList.length;i++) {
  		if (lib==annotateDBList[i].name && annotateDBList[i].annotatable=='true'){
  			isOK=1;
  		} 
  	}
  	return isOK;  
  }

  function getDbName(entry) {
    index = entry.indexOf(':', 0);
    lib = entry.substring(0, index);
    return lib;
  }

  function checkAllowedDbs(allowedDbs) {
    if (allowedDbs.length == 0) {
      return true;
    }
    var lib, i = 0;
    while (lib = array[i++]) {
      if (allowedDbs.indexOf("|" + lib + "|") == -1) {
        return false;
      }
    }
    return true;
  }

  function checkNotAllowedDbs(notAllowedDbs) {
    if (notAllowedDbs.length == 0) {
      return false;
    }
    var lib, i = 0;
    while (lib = array[i++]) {
      if (notAllowedDbs.indexOf("|" + lib + "|") >= 0) {
        return true;
      }
    }
    return false;
  }

  function checkSingleOnly(singleOnly) {
    if (singleOnly == 'true') {
      return (checkedEntries == 1);
    }
    return true;
  }

  function toggleSelectAll(value){
  	if(value=='true'){
  		array = currentSearchDBs;
  	}else{
  		array = new Array();
  	}
  	fillArrayWithSelectedEntries();
  }

  function fillArrayWithSelectedEntries() {
    nonAnnotatableFlag='entriesOK';
    var el, i = 0, oForm = document.forms['primaryForm'];
    var selectedIdList = document.getElementById('selectedIDList').value;
    var selectedIdArray = new Array();
    //selectedIdList="";
	 for (var i=0; i<document.forms['primaryForm'].elements.length; i++) {
   	 	var j=document.forms['primaryForm'].elements[i];
   	 	if(j.name.indexOf('ID-')==0 && j.checked){
   	 		if(selectedIdList==""){
   	 			selectedIdList=j.value
   	 		} else {
   	 			if(!listContainsItem(selectedIdList.split(","), j.value)){
   	 				selectedIdList += ",";
   	 				selectedIdList+=j.value;
   	 			}    	 		
   	 		}
   	 	}
   	 }
    if (selectedIdList!='' && selectedIdList!=null) selectedIdArray = selectedIdList.split(",");
    array = new Array();
    arrayAsString = '';
    checkedEntries = 0;
    for (var i=0;i<selectedIdArray.length;i++) {
      checkedEntries++;
      lib = getDbName(selectedIdArray[i]);
      if(hasAnnotations == 'true'){
      	if(!annotatableDb(lib)){
      		nonAnnotatableFlag=lib;
      	}
      }      
      if (arrayAsString.indexOf('|' + lib + '|') == -1) {
        array.push(lib);
        arrayAsString = "|" + array.join("|") + "|";
      }
    }
    showSelectedEntriesDbs();
    showSaveSequence();
    drawAnnotationSection();
    drawAnnotationDeleteSection();
  }
  
  function submitAddAnnotations(areEntriesOK){
 	if (areEntriesOK == 'entriesOK'){
 	    setFormElementById('action','createAnnotation');
 	    document.forms['primaryForm'].submit();	 	
 	} else {
	 	alert("The following library is not configured to allow annotations to be created: " + nonAnnotatableFlag + " . Please de-select entries of this databank.");	
 	} 
  }

  function submitDeleteAnnotations(){
 	setFormElementById('action','bulkDeleteAnnotations');
 	document.forms['primaryForm'].submit();
 	showStopOption('annotations');	 	 	 
  }

 
  function drawAnnotationSection(){
	annotationTable=document.getElementById('annotationSection');
  	if(annotationTable != null){
    	// clear table
    	var lastRow = annotationTable.rows.length - 1;
    	for (i=lastRow; i>=0; i--) {
     		annotationTable.deleteRow(i);
    	}
    	var row;
    	var cell;
    	var icon;
    	var href;
    	var text;
    	if (array.length > 0 && (hasAnnotations=='true' && nonAnnotatableFlag=='entriesOK')) {
     		row = annotationTable.insertRow(0);
     		cell = row.insertCell(0);
     		href = document.createElement('a');
       		href.setAttribute('href', 'javascript:submitAddAnnotations(\'' + nonAnnotatableFlag + '\')');
       		icon = document.createElement('img');
       		icon.setAttribute('src', "images/biowisdom/icon_annotations.gif");
         	text = document.createTextNode("Create annotation for entries");
         	href.appendChild(icon);
         	href.appendChild(text);
         	cell.appendChild(href);   	
    	} else {
         	row = annotationTable.insertRow(0);
          	//cell = row.insertCell(0);
          	//text = document.createTextNode('No entry selected.');
          	//cell.appendChild(text);
          	//row = annotationTable.insertRow(1);
          	cell = row.insertCell(0);
          	text = document.createTextNode('Please select an annotatable entry...');
          	cell.appendChild(text);
    	}
    } 
  }

  function drawAnnotationDeleteSection(){
  	annotationTable=document.getElementById('annotationDeleteSection');
  	if(annotationTable != null){
    	// clear table
    	var lastRow = annotationTable.rows.length - 1;
    	for (i=lastRow; i>=0; i--) {
      		annotationTable.deleteRow(i);
    	}
    	var row;
    	var cell;
    	var icon;
    	var href;
    	var text;
    	if (array.length > 0) {
    	 	row = annotationTable.insertRow(0);
    	 	cell = row.insertCell(0);
    	 	href = document.createElement('a');
         	href.setAttribute('href', 'javascript:submitDeleteAnnotations()');
         	text = document.createTextNode("Delete selected annotations");
         	href.appendChild(text);
         	cell.appendChild(href);   	
    	} else {
          	row = annotationTable.insertRow(0);
          	cell = row.insertCell(0);
          	text = document.createTextNode('No entry selected.');
          	cell.appendChild(text);
          	row = annotationTable.insertRow(1);
          	cell = row.insertCell(0);
          	text = document.createTextNode('Please select at least one entry...');
          	cell.appendChild(text);
    	}
    }
  }


  function showSelectedEntriesDbs() {
    exportAppsTable = document.getElementById('exportApplications');
    // clear table
    var lastRow = exportAppsTable.rows.length - 1;
    for (i=lastRow; i>=0; i--) {
      exportAppsTable.deleteRow(i);
    }
    var row;
    var cell;
    var icon;
    var href;
    var text;
    if (array.length > 0) {
      i = 0;
      var displayed = 0;
      while (el = exportDBList[i++]) {
        if (checkAllowedDbs(el.allowedDbs) && (! checkNotAllowedDbs(el.notAllowedDbs)) && checkSingleOnly(el.single)) {
          row = exportAppsTable.insertRow(displayed);
          cell = row.insertCell(0);
          href = document.createElement('a');
          href.setAttribute('href', 'javascript:exportTo(\'' + el.name + '\',\'' + el.view + '\');resetHiddenFields();');
          text = document.createTextNode(el.displayName);
          href.appendChild(text);
          cell.appendChild(href);
          cell = row.insertCell(1);
          cell.setAttribute('align', 'center');
          icon = document.createElement('img');
          icon.setAttribute('src', el.icon);
          cell.appendChild(icon);
          displayed++;
        }else{
          row = exportAppsTable.insertRow(displayed);
          cell = row.insertCell(0);
          cell.setAttribute('style','color:#808080;font-style:italic');
          cell.setAttribute('title','Exporting to this application is not possible with your selection');
          text = document.createTextNode(el.displayName);
          cell.appendChild(text);
          cell = row.insertCell(1);
          cell.setAttribute('align', 'center');
          icon = document.createElement('img');
          icon.setAttribute('src', 'images/applications/greyed_out_icon.gif');
          var css = 'background-image:url("'+el.icon+'"); ';
          icon.setAttribute('style',css);
          cell.appendChild(icon);
          displayed++;
        }
      }
    } else {
          row = exportAppsTable.insertRow(0);
          cell = row.insertCell(0);
          text = document.createTextNode('No entry selected.');
          cell.appendChild(text);
          row = exportAppsTable.insertRow(1);
          cell = row.insertCell(0);
          text = document.createTextNode('Please select at least one entry...');
          cell.appendChild(text);
    }
	showSaveSequence();
  }
  
  
function confirmDelete(divId, toolName) {
	var ht = '<table><tr><td colspan="2" align="center">Do you wish to remove ' + checkedEntries + ' entries from your database?</td></tr>';
	ht = ht + '<tr><td align="right"><a id="' + divId + 'rename" href="javascript:hideDivSection(\'' + divId + '\');launchTool(\'' + toolName + '\');showStopOption(\'annotations\');">';
	ht = ht + '<img border="0" src="images/biowisdom/btn_accept_off.gif" onmouseover="swapImage(this, \'images/biowisdom/btn_accept_hover.gif\');" onmouseout="swapImage(this, \'images/biowisdom/btn_accept_off.gif\');"/></a></td>';
	ht = ht + '<td align="left"><a id="' + divId + 'cancelAlerting" href="javascript:hideDivSection(\'' + divId + '\');hideFreeze()">';
	ht = ht + '<img border="0" src="images/biowisdom/btn_cancel_off.gif" onmouseover="swapImage(this, \'images/biowisdom/btn_cancel_hover.gif\');" onmouseout="swapImage(this, \'images/biowisdom/btn_cancel_off.gif\');"/></a></td></tr></table>';

	document.getElementById(divId).innerHTML = ht
	showDivSection(divId);
	centerDivPosition(divId);
	showStopOption('freezeOnly');
}
  
  function showSaveSequence() {
    saveSequenceTable = document.getElementById('saveSequence');
    //saveSequenceCell = document.getElementById('saveSequenceCell');
    if (saveSequenceTable!=null) {
		toolName = document.getElementById('addToolName').value;
		toolPrintName = document.getElementById('addToolPrintName').value;
		toolType = document.getElementById('addToolType').value;
		if (checkedEntries > 0) {
	      	saveSequenceTable.deleteRow(0);
	        row = saveSequenceTable.insertRow(0);
	        cell = row.insertCell(0);
          	href = document.createElement('a');
          	icon = document.createElement('img');
          	if (toolType==0) {
	          	href.setAttribute('href', 'javascript:launchTool("' + toolName + '");');
	          	icon.setAttribute('src', "images/biowisdom/addentry.gif");
	          	text = document.createTextNode("Add to " + toolPrintName);
	        } else {
	          	href.setAttribute('href', 'javascript:confirmDelete("deleteConfirm","' + toolName + '");');
	          	icon.setAttribute('src', "images/biowisdom/delentry.gif");
	          	text = document.createTextNode("Remove from " + toolPrintName);
	        }
			href.appendChild(icon);
          	href.appendChild(text);
          	cell.appendChild(href);
        } else {
	      	saveSequenceTable.deleteRow(0);
	        row = saveSequenceTable.insertRow(0);
	        cell = row.insertCell(0);
          	text = document.createTextNode('No entry selected');
          	cell.appendChild(text);
          	cell.setAttribute('align', 'center');
        }
    }
  }

  function onLoadShowSelectedEntriesDbs() {
    fillArrayWithSelectedEntries();
  }

  function exportTo(appName, view) {
    var x = window.open('', 'EXPORT_WINDOW', 'resizable=yes,scrollbars=yes');
    if( !x ) { return; } //browser is blocking popups
    x.document.open();
    x.document.write('Waiting for the query to be generated...');
    x.document.close();
    document.getElementById('appToExport').value = appName;
    document.getElementById('viewForExport').value = view;
    document.getElementById('action').value = 'export';
    document.forms['primaryForm'].target = 'EXPORT_WINDOW';
    document.forms['primaryForm'].submit();
  }

  function listContainsItem(list, item){
  	for(var i=0; i<list.length; i++){
  		if(list[i]==item){
  			return true;
  		}
  	}
  	return false;
  }  
  