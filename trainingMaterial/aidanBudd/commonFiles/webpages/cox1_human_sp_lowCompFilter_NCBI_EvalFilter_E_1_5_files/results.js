// JScript source code

//Display Reformat page button only after the whole page is loaded    

function ReformatPageEvent()
{
	var refPageLink = document.getElementById("refPage");    	
	//alert(refPageLink);
	//alert(refPageLink.getAttribute("submitForm"));
	var submitForm = refPageLink.getAttribute("submitForm");
	alert(submitForm);
	if(refPageLink && submitForm) {
		utils.addEvent(refPageLink, 
					   "click", 
					   function() {
							document.getElementById(submitForm).submit();					
						}, 
						false);    
	}	
}


function SubmitEvent(linkID)
{
	
	var link = document.getElementById(linkID);    	
	//alert(link.getAttribute("submitForm"));
	var submitForm = link.getAttribute("submitForm");
	if(link && submitForm) {
		utils.addEvent(link, 
					   "click", 
					   function() {							
							document.getElementById(submitForm).submit();					
						}, 
						false);    
	}	
}


function SubmitEventSave(linkID)
{
	
	var link = document.getElementById(linkID);    	
	//alert(link.getAttribute("submitForm"));
	var submitForm = link.getAttribute("submitForm");
	if(link && submitForm) {
		utils.addEvent(link, 
					   "click", 
					   function() {
							//$(submitForm).CMD.value = "GetSaved";							
							document.getElementById(submitForm).submit();					
						}, 
						false);    
	}	
}
 				
 				


//This function creates submit form event on click
//form submitted is defined in submitForm attribute
//It also copies params from forms[0] (search paramateres) created by formatter
function SubmitEventNew(linkID)
{
	
	var link = document.getElementById(linkID);    	
	//alert(link.getAttribute("submitForm"));
	if(!link) return;
	var submitForm = link.getAttribute("submitForm");
	if(link && submitForm) {
		utils.addEvent(link, 
					   "click", 
					   function() {					 
							document.forms[0].CMD.value = "";  
							if(document.forms[0].PAGE_TYPE) {
								document.forms[0].PAGE_TYPE.value = "";  
							}
							var s = document.forms[0].innerHTML;														
							var form = $(submitForm);							
							form.innerHTML = s + form.innerHTML;							
							form.submit();					
						}, 
						false);    
	}	
}

function GetResults()
{
    form = $("results");    
    form.QUERY_INDEX.value = $("queryList")[$("queryList").selectedIndex].value;
    form.submit();   
}

function isIdIn(id, idArray){
  var idSeen=false;

  for(i=0; i<idArray.length; i++){
    if(id==idArray[i]){
      idSeen=true;
      break;
    }
  }
  return idSeen;
}

function GetSelectedSeqString(formName)
{
    var selSeqs = "";
    var idArray=new Array();
    for(var i=0; i < document.forms[formName].elements.length; i++){
      var theElem=document.forms[formName].elements[i];
      if(theElem.type=="checkbox"&&theElem.name=="getSeqGi"&&theElem.checked){      
        if(!isIdIn(theElem.value, idArray)){            
            idArray[idArray.length]=theElem.value;
        }            
      }      
    }
    selSeqs = idArray.join();
    return selSeqs;
}

function ViewSelectedSeqs()
{
    var submitForm = $("submitterTop");
    var targetForm = submitForm.getAttribute("seqsForm");
    $("selSeqs").value = GetSelectedSeqString(targetForm);
    submitForm.submit();
}


function ViewSelectedSeqTree()
{
    var submitForm = $("treesubmitterTop");
    var targetForm = submitForm.getAttribute("seqsForm");
    $("seqSet").value = GetSelectedSeqString(targetForm);
    $("scrWidth").value= screen.width;
    submitForm.submit();
}


function selectAllSeqs()
{
    var formName = this.getAttribute("seqsForm");
    for(var i=0; i < document.forms[formName].elements.length; i++){
      var theElem=document.forms[formName].elements[i];
      if(theElem.type=="checkbox"&&theElem.name=="getSeqGi"){     
        theElem.checked=this.checked;
      }
    } 
    links = document.getElementsByName("selectAll");
    for(var i=0; i < links.length;i++) {
        if(links[i] != this)  links[i].checked = this.checked;
    }       
}


function InitSeqAlignLinks()
{
    var links = document.getElementsByName("getSeqs");
    for(var i=0; i < links.length;i++) {
        utils.addEvent(links[i],"click",ViewSelectedSeqs,false);  
    }
    links = document.getElementsByName("treeView");
    for(var i=0; i < links.length;i++) {
        utils.addEvent(links[i],"click",ViewSelectedSeqTree,false);  
    }    
    links = document.getElementsByName("selectAll");
    for(var i=0; i < links.length;i++) {
        utils.addEvent(links[i],"click",selectAllSeqs,false);  
    }
    if($("showAlign"))
        utils.addEvent($("showAlign"),"click",showHideLinks,false);  
}

function InitDownLoad()
{
    if($("stepNumber").value == "" || $("stepNumber").value < 2) {
        utils.addClass($("dnPSSM"),"hidden");
        utils.addClass($("dnPSSMPar"),"hidden");
        
    }
}
function Reformat()
{
    if(utils.hasClass($("FormatForm").FORMAT_ORGANISM,"orgHint"))  $("FormatForm").FORMAT_ORGANISM.value = "";
    
    $("FormatForm").submit();    
}
function InitCustomButton(bn)
{
  utils.addEvent(bn, "mouseover", function() {this.src = this.getAttribute("mouseovImg");}, false);
  utils.addEvent(bn, "mouseout", function() {this.src = this.getAttribute("mouseoutImg");}, false);
  utils.addEvent(bn, "mousedown", function() {this.src = this.getAttribute("mousedownImg");}, false);
  utils.addEvent(bn, "mouseup", function() {this.src = this.getAttribute("mouseupImg");}, false);    
}

function InitAllCustomButtons()
{
    if($("go")) InitCustomButton($("go"));
    if($("dn")) InitCustomButton($("dn"));
    if($("onPageReformat")) InitCustomButton($("onPageReformat"));    
}
function showHideLinks()
{
    var links = document.getElementsByName("selectAll");
    for(var i=0; i < links.length;i++) {
        //This is done since IE does not recognize getElementsByName for span elem
        var allLinks = utils.getParent(links[i]);
        var removeClass,addClass;
        if(utils.hasClass(allLinks,"shownInl")) {        
            removeClass="shownInl";    
            addClass="hidden";        
        }
        else {
            removeClass="hidden";
            addClass="shownInl";        
        }    
        utils.removeClass(allLinks,removeClass);
        utils.addClass(allLinks,addClass);   
    }            
}
function InitHelpLinks()
{
    for(var i=1; i <= 10;i++) {           
        InitToggleEvent($("hlp" + i));      
    }
}
//This function is used for collapsible deflines onmouseover="showInfo(this)"
//Initialized in showdefline.cpp
function showInfo(elem)
{
    var targetElem = $("info_" + elem.id);
    if(!targetElem) return;
    if(elem.getAttribute("init") == "on") return;
    
    Toggle.addTarget(elem, targetElem);  
    elem.setAttribute("init","on");    
}

function InitPsiBlast()
{
    //utils.addEvent($("ttt"),"keyup",SetHitlistSize,false);  
    var hts = document.getElementsByName("HITLIST_SIZE");
    for(var i=0; i < hts.length;i++) {    
        utils.addEvent(hts[i],"keyup",SetHitlistSize,false);  
    }      
}

function SetHitlistSize()
{
    var hts = document.getElementsByName("HITLIST_SIZE");
    for(var i=0; i < hts.length;i++) {    
        if(this != hts[i]) {
            hts[i].value = this.value;
        }
    }    
}
function InitToggleEvent(toggleNode)
{
    if(toggleNode) {
        var srcid = toggleNode.getAttribute("toggle");
        Toggle.addTarget(srcid, toggleNode);  
    }
} 				

function InitIFrameLinks()
{
    CheckIframe($("RSIFrameNoRes"),"prlink");
    CheckIframe($("RSIFrameDesc"),"prlink");
    CheckIframe($("RSIFrameAln"),"prlink");
}

function CheckIframe(iframe,contentElemID)
{
    if(!iframe) return;
    
    var iframeDoc;
    
    if(iframe.contentDocument) {//Firefox
        iframeDoc = iframe.contentDocument;                
    }
    else if (iframe.contentWindow) {//IE
        iframeDoc = iframe.contentWindow.document;                
    }
    else if(iframe.document) {
        iframeDoc = iframe.document;                
    }
    if(iframeDoc){        
        if(iframeDoc.getElementById(contentElemID)) {                        
            utils.addClass(iframe,"shown");
            utils.removeClass(iframe,"hidden");        
        }           
     }
}    
 				
function SetFormSubmitEvent()
{
    var el = $("refPage");
    if(el) {
	    SubmitEventNew("refPage");	
	}
	SubmitEventNew("frmPage");	
	el = $("searchOptions");
	if(el) {
	    SubmitEventNew("searchOptions");	
	}
	el = $("saveSearchOptions");
	if(el) {
	    SubmitEventNew("saveSearchOptions");	
	}
	//SubmitEventNew("breadCrSearchOptions");	
	list = $("queryList");
	if(list) {
        utils.addEvent(list,"change",GetResults,false);  
    }
    
    list = $("go");
	if(list) {
        utils.addEvent(list,"click",GetResults,false);  
    }
    
    
    list= $("onPageReformat");
    if(list) {
        utils.addEvent(list,"click",Reformat,false);  
    }
       
    
    if(( $("cddResults") && !utils.hasClass($("cddResults"),"hidden") ) || $("showCDD")) {
        InitToggleEvent($("cddInfo"));
    }
    InitToggleEvent($("refInfo"));
    InitToggleEvent($("resStat"));
    InitToggleEvent($("dbDetails"));
    InitToggleEvent($("graphicInfo"));
    InitToggleEvent($("descrInfo"));
    InitToggleEvent($("alignInfo"));
    InitToggleEvent($("ovrInfo"));    
    InitToggleEvent($("FormatForm"));        
    InitToggleEvent($("FormatDownload"));    
    InitToggleEvent($("queryInfo"));        
    InitToggleEvent($("hitMatrixInfo"));            
    InitToggleEvent($("bl2ovrInfo"));    
    InitHelpLinks();
    //Init only for PSI blast
    if($("prevRID")) InitPsiBlast();    
    InitSeqAlignLinks();
    InitAllCustomButtons();        
    if($("dnPSSM")) InitDownLoad(); 
    if($("bl2seImg")) {
    
        utils.addEvent($("hitmtImg"),"load",
                        function() {                            
							utils.addClass($("bl2seImg"),"shown");
                            utils.removeClass($("bl2seImg"),"hidden");                  
						}, 
						false);          
        utils.addEvent($("showHitMatrix"),"click",
                        function() {                            
                            $("hitmtImg").src= $("hitmtImg").getAttribute("imgsrc");
                            if(utils.hasClass($("htmb"),"shown")) {	                                
							    utils.addClass($("htmb"),"hidden");
                                utils.removeClass($("htmb"),"shown");                  
                            }
                            else {                                
                                utils.addClass($("htmb"),"shown");
                                utils.removeClass($("htmb"),"hidden");                  
                            }
						}, 
						false);          
        
    }   
    if($("noRes")) {
        if($("hitCvs")) utils.addClass($("hitCvs"),"hidden");
        if($("hitText")) utils.addClass($("hitText"),"hidden");
    }    
    InitIFrameLinks();        
}


/*
utils.addEvent(window, 
			   "load", 
			   function() {					
					var links = cssQuery("[class='resLink']");
					for (var i = 0; i < links.length; i++) {
						links[i].style.display="inline";					
					}										
				}, 
				false);    
*/
//utils.addEvent(window,"load", ReformatPageEvent,false);

utils.addEvent(window,
				"load", SetFormSubmitEvent,				
				false);


/* If user agent has "safari" in it, include safari-specific stylesheet. */ 
if (navigator.userAgent.match(/safari/i)) {
document.write("<link rel='stylesheet' type='text/css' href='css/safari-descriptions.css'  media='screen'/>");
}

/*if (navigator.userAgent.match(/safari/i)) {
   document.write("<link rel='stylesheet' type='text/css' href='css/safari-descriptions.css'");
}
*/

//onClick="document.getElementById('setSavedOptions').submit();
//onClick="document.reformatForm.submit();"
//addEvent: function(obj, type, fn, b) {    

