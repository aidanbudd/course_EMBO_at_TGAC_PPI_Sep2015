
function UpdateDisplayTypes(displayTypes) {	
    dispMenu = displayTypes.options;		
    for(i=0; i < dispMenu.length; i++) {
	    //if(!utils.hasClass(displayTypes,"psiBlast") && !utils.hasClass(displayTypes,"phiBlast") ||
	    if($("stepNumber").value == "" || $("stepNumber").value < 2) {	    	    
			if(dispMenu[i].value.indexOf("PSSM") != -1) {
				dispMenu[i--] = null;
				//break;
			}			
		}		
	}	    
}

function GetIndexByValue(selectElem,val) {	
    var idx = 0;
    var opts = selectElem.options;		
    for(i=0; i < opts.length; i++) {
        if(opts[i].value == val) {
            idx = i;
            break;
        }
    }	
    return idx;	    
}

function resetAdvView(show)
{
    var advView = $("advView");    
    if(show) {
        if(utils.hasClass(advView, "hidden")) {
            utils.removeClass(advView, "hidden");
        }    
    }
    else {
        utils.addClass(advView, "hidden");
    }
}


function ShowOrHide(hide,elem)
{
    if(hide) {
        if(!utils.hasClass(elem, "hidden")) {
            utils.addClass(elem, "hidden");
        }    
    }
    else {
        if(utils.hasClass(elem, "hidden")) {
            utils.removeClass(elem, "hidden");
        }    
    }
}    

function UpdateFormatTypes(form) {    
    var selectedObjType = form.FORMAT_OBJECT[form.FORMAT_OBJECT.selectedIndex].value;
    var hideAdvView = false;
    bioseqFormatHide = true;
    pssmFormatHide = true;
    pssmScFormatHide = true;
    formatTypeHide = true;
	if (selectedObjType == "Alignment") {
		formatObjectSelectedIndex = 0; //HTML		
		formatTypeHide = false;		
		hideAdvView = true;
	}
    if (selectedObjType == "PSSM") {		
		formatObjectSelectedIndex = GetIndexByValue(form.FORMAT_TYPE,"Text");	
		pssmFormatHide = false;		
    }
    if (selectedObjType == "PSSM_Scoremat") {		
		formatObjectSelectedIndex = GetIndexByValue(form.FORMAT_TYPE,"ASN.1");		
		pssmScFormatHide = false;		
    }    
    else if (selectedObjType == "Bioseq") {		
		formatObjectSelectedIndex = GetIndexByValue(form.FORMAT_TYPE,"ASN.1");		
		bioseqFormatHide = false;		
    }
    form.FORMAT_TYPE.selectedIndex = formatObjectSelectedIndex;     
	ShowOrHide(formatTypeHide,form.FORMAT_TYPE);
	if ($("bioseqFormat")) {
	    ShowOrHide(bioseqFormatHide,$("bioseqFormat"));
	    $("bioseqFormat").readOnly=true;		
	}
	if ($("pssmFormat")) {
	    ShowOrHide(pssmFormatHide,$("pssmFormat"));
	    $("pssmFormat").readOnly=true;	
	}
	if ($("pssmScFormat")) {
	    ShowOrHide(pssmScFormatHide,$("pssmScFormat"));
	    $("pssmScFormat").readOnly=true;	
	}	
	resetAdvView(hideAdvView);
}	

function ResetForm()
{
    //var defValNodes = cssQuery(".reset");	
    defValNodes = $("FormatForm").elements;
	for(i=0; i < defValNodes.length; i++) {	  	  
	  if(utils.hasClass(defValNodes[i],"reset"))
	                 setDefalValue(defValNodes[i]); 	  
	}	
	UpdateDisplayTypes($("FormatForm").FORMAT_OBJECT);
	UpdateFormatTypes($("FormatForm")); 
	if($("FormatForm").RUN_PSIBLAST.checked) setDefalValue($("FormatForm").I_THRESH)
	else $("FormatForm").I_THRESH.value="";
	resetOrganismSuggest($("FormatForm").FORMAT_ORGANISM);
	//TO DO: add threshold
}

function LimitByHitlistSize(list)
{
    var listBreak = false;
    var optSel = false;
    for(i=0; i < list.options.length; i++) {    
        var optVal = parseInt(list.options[i].value ,10);
        var hitListSize = parseInt($("maxNumSeq").value ,10);                
        if(list.options[i].selected) optSel = true;
        if(optVal >= hitListSize)  {
            if(!optSel) {list.options[i].selected = true;}
            list.options.length = i + 1; 
            break;
        }                
    }             
}

function InitFormatPage()
{
    UpdateDisplayTypes($("FormatForm").FORMAT_OBJECT);
	UpdateFormatTypes($("FormatForm")); 
	list = $("FormatForm").FORMAT_OBJECT;
	utils.addEvent(list,"change",function() {
	                            UpdateFormatTypes($("FormatForm"));
	                            },
	                            false); 	
    utils.addEvent($("resetAll"), "click",  ResetForm, false);         
    if($("maxNumSeq") != null) {
    if($("maxNumSeq").value != "") {
        LimitByHitlistSize($("FormatForm").DESCRIPTIONS);
        LimitByHitlistSize($("FormatForm").ALIGNMENTS);
        LimitByHitlistSize($("FormatForm").NUM_OVERVIEW);        
    }
    }    
    setupOrganismSuggest($("FormatForm").FORMAT_ORGANISM);
    utils.addEvent($("FormatForm"), "submit",  function() {
                    if(utils.hasClass($("FormatForm").FORMAT_ORGANISM,"orgHint"))  $("FormatForm").FORMAT_ORGANISM.value = "";
                                                          }, 
                    false);         
	/* add this code if decide image for View Report
	var imgButtons = cssQuery("[class='viewReport']");
    for (var i = 0; i < imgButtons.length; i++) {
      var l = imgButtons[i];
      utils.addEvent(l, "click", function() {$("FormatForm").submit();}, false);          
      utils.addEvent(l, "mouseover", function() {l.src = l.getAttribute("mouseovImg");}, false);
      utils.addEvent(l, "mouseout", function() {l.src = l.getAttribute("mouseoutImg");}, false);
      utils.addEvent(l, "mousedown", function() {l.src = l.getAttribute("mousedownImg");}, false);
      utils.addEvent(l, "mouseup", function() {l.src = l.getAttribute("mouseupImg");}, false);
   }  
   */ 
}

utils.addEvent(window, 'load', InitFormatPage, false);






