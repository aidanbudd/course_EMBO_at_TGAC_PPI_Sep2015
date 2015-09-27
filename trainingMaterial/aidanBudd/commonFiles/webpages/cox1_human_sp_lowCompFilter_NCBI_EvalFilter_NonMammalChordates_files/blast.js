
function printfire()
{
    // Firefox
    if (document.createEvent && window.dispatchEvent) {
        printfire.args = arguments;
        var ev = document.createEvent("Events");
        ev.initEvent("printfire", false, true);
        window.dispatchEvent(ev);
    }
}
//This functions handle setting defaults for protein or nulcleotide suite  search page when
//one of blast program radio buttons is clicked - not used now
function AdjustMoreOptionsStyle()
{
	var optsEl = document.getElementById("moreopts");	
	if(optsEl && optsEl.style.height != "0px") {
		optsEl.style.height = optsEl.scrollHeight + "px";			
	}
}

//Strip (taxid:XXX) from organism list selection
//sgRunFunc="AdjustOrganism();" 
function AdjustOrganism()
{
	var words = $("qorganism").value.split(" (taxid");
	$("qorganism").value = words[0];		
}


/* JS Common to all BLAST pages */


function setResultsTarget()
{
	//var newWin = $("newwin");	
	var newWin = this;	
	var searchFrm = $(newWin.getAttribute("form"));				
	if(newWin && newWin.checked == true) {
		if(newWin.getAttribute("winType") == "random") {		    
			searchFrm.target = "Blast_Results_for_" + Math.floor(Math.pow(10,10) *Math.random());
		}
		else {
			searchFrm.target = $("resPageTarget").value;		
		}
	}	
	else {		
		searchFrm.target = "";
	}
}

function diffFromDefault(elem)
{
    var currentVal;    
    var defVal = elem.getAttribute("defVal"); //Default value    
    var ret = 0;
    
    var elShowDiff = utils.getParent(elem);
    if(!elem.type) {//div element for example
        //Check if parent elem has "hide" class
        if(utils.hasClass(utils.getParent(elem), "hide")) {
            currentVal = "hide";
        }
        else {
            currentVal = "show";
        }   
        elShowDiff = elem;
    }
    else if(elem.type == "select-one") {
        currentVal = elem[elem.selectedIndex].value;
        //If Default value is not specified - the first one in the selection list is the default          
        if(!defVal) defVal = elem[0].value;  
    }
    else if(elem.type == "checkbox") {
        //alert("defVal1=" + elem.id + " " + defVal);
        //var defVal = elem.defVal; //Default value
        //alert("defVal2=" + defVal);
        if(elem.checked == true) currentVal = "checked"
        else  currentVal = "unchecked";        
    }
    else {
        currentVal = elem.value;
    }
    
    
    var numdiff = parseInt($("NUM_DIFFS").value,10);    
    var optsNumDiff = parseInt($("NUM_OPTS_DIFFS").value,10);    
    if(defVal != currentVal) {        
        if(!utils.hasClass(elShowDiff, "nondef")) {        
            utils.addClass(elShowDiff, "nondef");            
            numdiff++;            
            if(utils.hasClass(elem,"opts")) optsNumDiff++;        
        }     
        ret = 1;        
    }
    else {        
        if(utils.hasClass(elShowDiff, "nondef")) {
            utils.removeClass(elShowDiff, "nondef");        
            //alert("noDiff-" + elem.id);
            if(numdiff != 0) numdiff--;       
            if(utils.hasClass(elem,"opts")) optsNumDiff--; 
        }         
        ret=0;
    }
    $("NUM_DIFFS").value = numdiff;       
    $("NUM_OPTS_DIFFS").value = optsNumDiff;       
    if(numdiff > 0) {    
        $("diffMes").style.display = "inline";           
    }
    else {
        $("diffMes").style.display = "none";           
    }      
    //alert(elem.id + " " + $("NUM_DIFFS").value);
    return ret;    
}

function setDefalValue(elem)
{
    var currentVal;    
    var defVal = elem.getAttribute("defVal"); //Default value    
    if(elem.type == "select-one") {
        //If Default value is not specified - the first one in the selection list is the default          
        if(!defVal) defVal = elem[0].value;  
        for(j=0; j < elem.options.length; j++) {
		    if(elem.options[j].value == defVal) {
		        elem.options[j].selected = true;
		        break;
		    }
        }       
    }
    else if(elem.type == "checkbox" || elem.type == "radio") {        
        if(!defVal) defVal = "checked";
        if(defVal == "checked") elem.checked = true        
        else elem.checked = false;
    }
    else {
        if(!defVal) defVal = "";
        elem.value = defVal;
    }
    
    var elShowDiff = utils.getParent(elem);    
    if(utils.hasClass(elShowDiff, "nondef")) {
        utils.removeClass(elShowDiff, "nondef");        
    }            
    //alert(elem.id + " " + $("NUM_DIFFS").value);    
}

function newResultsWinInit() {         
   var l = cssQuery("[class='newwin']");
   for (var i = 0; i < l.length; i++) {
   //var l = $("newwin");
   //if(l[i]) {
		utils.addEvent(l[i], "click",  setResultsTarget, false);               
		//utils.addEvent(l, "click", function() {setResultsTarget(l);}, false);
   }
}

function resetOrganismSuggest(orgEntryElem) 
{
    var defaultMessage = "Enter organism name or id--completions will be suggested";
    if(orgEntryElem.value == "") {
        orgEntryElem.value = defaultMessage;
    }
    if(orgEntryElem.value == defaultMessage) {            
        utils.addClass(orgEntryElem,"orgHint");
    }
}  

function setupOrganismSuggest(orgEntryElem)
{
    resetOrganismSuggest(orgEntryElem); 
    utils.addEvent(orgEntryElem, "focus", function() {
        if(utils.hasClass(orgEntryElem,"orgHint")) {
            orgEntryElem.value="";            
            utils.removeClass(orgEntryElem,"orgHint");
        }
     }, false);     
}  
utils.addEvent(window, 'load', newResultsWinInit, false);

