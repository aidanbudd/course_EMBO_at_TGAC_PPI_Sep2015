
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
    else if(elem.type == "select-multiple") {
	currentVal = "";//for now
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
        clearOrgSuggest(orgEntryElem);        
     }, false);     
}

function clearOrgSuggest(orgEntryElem)
{
    if(utils.hasClass(orgEntryElem,"orgHint")) {
        orgEntryElem.value="";            
        utils.removeClass(orgEntryElem,"orgHint");
    }
}    

function InitCustomButton(bn)
{
  utils.addEvent(bn, "mouseover", function() {this.src = this.getAttribute("mouseovImg");}, false);
  utils.addEvent(bn, "mouseout", function() {this.src = this.getAttribute("mouseoutImg");}, false);
  utils.addEvent(bn, "mousedown", function() {this.src = this.getAttribute("mousedownImg");}, false);
  utils.addEvent(bn, "mouseup", function() {this.src = this.getAttribute("mouseupImg");}, false);    
}

function showHideElem(id,hide)
{
  if($(id)) {
    if(hide) {
	    if(!utils.hasClass($(id),"hidden")) utils.addClass($(id), "hidden");	    
	}
	else {
	    if(utils.hasClass($(id),"hidden")) utils.removeClass($(id), "hidden");	    
	}	
  }
}

function resetOrganismControls(orgEntryElem) {
    resetOrganismSuggest(orgEntryElem);
    if ($("orgExcl")) $("orgExcl").checked = false;
    utils.replaceInHtml("", $("orgs"));
    if ($("frOrgs")) utils.replaceInHtml("", $("frOrgs"));
    if ($("numOrg")) $("numOrg").value = 1;
}    




function AddOrgRow(e,orgName,exclName) {
    e = e || window.event;
    utils.preventDefault(e);
    var checkedExclude = new Array();
    //Add onfocus inside html as opposed to setupOrganismSuggest due to problem in IE
    var newOrgField = " <div><input name=\"" + orgName + $("numOrg").value + "\" class=\"multiOrg\" size=\"55\" id=\"qorganism" + $("numOrg").value +
                       "\" sgDict=\"taxids_sg\" sgStyle=\"SG_green\" onfocus=\"clearOrgSuggest(this);\" />" +
                       "<input type=\"checkbox\" name=\"" + exclName + $("numOrg").value + "\" class=\"oExcl cb\" id=\"orgExcl" + $("numOrg").value + "\" />" +
                       "<label for=\"orgExcl" + $("numOrg").value + "\" class=\"right oExclRl\">Exclude</label></div>";

    if (navigator.userAgent.match(/ie/i)) {
        for (i = 1; i < $("numOrg").value; i++) {
            checkedExclude[i] = $("orgExcl" + i).checked;
        }
    }

    utils.insertInHtml(newOrgField, $("orgs"));

    if (navigator.userAgent.match(/ie/i)) {
        for (i = 1; i < $("numOrg").value; i++) {
            $("orgExcl" + i).checked = checkedExclude[i];
        }
    }
    resetOrganismSuggest($("qorganism" + $("numOrg").value));
    $("numOrg").value++;
    NSuggest_init();

}
function adjustOrgVal(orgEntryElem) 
{
    //if (utils.hasClass($("searchForm").EQ_MENU, "orgHint")) $("searchForm").EQ_MENU.value = "";
    clearOrgSuggest(orgEntryElem);
    if ($("numOrg")) {
        for (i = 1; i < $("numOrg").value; i++) {
            if ($("qorganism" + i)) {
                clearOrgSuggest($("qorganism" + i));
            }
        }
    }
}    

  
utils.addEvent(window, 'load', newResultsWinInit, false);

