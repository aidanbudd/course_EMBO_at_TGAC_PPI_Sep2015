

function getIconsElementbyClass(classname){
	ccollect_icons=new Array()
	var inc=0;
	var alltags=document.all? document.all : document.getElementsByTagName("*");
	for (i=0; i<alltags.length; i++){
		if (alltags[i].className==classname) {
			ccollect_icons[inc++]=alltags[i];
		}
	}
}
getIconsElementbyClass("headerToggle");
for(var z=0; z<ccollect_icons.length; z++){	
	ccollect_icons[z].onclick=function(){
		var theId = this.id + '_content';
			if( typeof jQuery === 'undefined'  ) {	
				if(document.getElementById(theId).style.display=="block"){
					document.getElementById(theId).style.display="none";
				}
				else{
					document.getElementById(theId).style.display="block";
				}
			}
			else{
				$('#' + theId).slideToggle("normal", updateToggle(this));
			}
	}	
}

/* from iconboxslider.js */


if( typeof jQuery === 'undefined'  ) {
	loadjquery();
}


/*
if( typeof jQuery === 'undefined'  ) {
	getIconsElementbyClass("headerToggle");
	for(var z=0; z<ccollect_icons.length; z++){
		ccollect_icons[z].onclick=function(){
			var theId = this.id + '_content';
			if(document.getElementById(theId).style.display=="block"){
				document.getElementById(theId).style.display="none";
			}
			else{
				document.getElementById(theId).style.display="block";
			}
		}
	}
}
else{
	$(document).ready(function() {
		$('.headerToggle').each(function(){
			$(this).click(function(){
				$('#' + this.id + '_content').slideToggle("normal", updateToggle(this));
			});
		});
		$('#expandAll').click(expandAll);
		$('#collapseAll').click(collapseAll);
	});
}
*/

function changeClass(element, classname){
	element.className=classname;
}

function updateExpanded(toggle) {
	changeClass(toggle.parentNode.parentNode, "slidecontainer_open");
	toggle.innerHTML = '<img class="headerToggleImage" src="http://www.ebi.ac.uk/inc/images/minus.gif" />';
}

function updateCollapsed(toggle) {
	toggle.innerHTML = '<img class="headerToggleImage" src="http://www.ebi.ac.uk/inc/images/plus.gif" />';
	changeClass(toggle.parentNode.parentNode, "slidecontainer");
}

function expandAll() {
	$('.headerToggle').each(function(){
		if (!$('#' + this.id + '_content').outerHeight() || ($('#' + this.id + '_content').outerHeight() <= 10)) {
			$('#' + this.id + '_content').slideDown("normal", updateExpanded(this));
		}
	});
}

function collapseAll() {
	$('.headerToggle').each(function(){
		if ($('#' + this.id + '_content').outerHeight() >= 10) {
			$('#' + this.id + '_content').slideUp("normal", updateCollapsed(this));
		}
	});
}

function updateToggle(toggle) {
	if (toggle.innerHTML.indexOf('plus.gif')>0) {
		changeClass(toggle.parentNode.parentNode, "slidecontainer_open");
		updateExpanded(toggle);
		
	} 
	else {
		updateCollapsed(toggle);
		changeClass(toggle.parentNode.parentNode, "slidecontainer");
	}
}




/* from iconboxslider.js */









document.onload=activateLeftNav();

function process(sidelis){
	for (i=0; i<sidelis.length; i++) {
		if(sidelis[i].childNodes){
			
			// correct white space bug for IE sub list is in child 2 not child 3
			if (navigator.userAgent.indexOf("MSIE") != -1) {
				if( (sidelis[i].childNodes.length==2) && ( ((sidelis[i].innerHTML).indexOf("<UL>"))>-1)   ){
					var child2 = document.createTextNode(" ");
     				var child3 = sidelis[i].removeChild(sidelis[i].childNodes[1]);   
					sidelis[i].appendChild(child2);   
        			sidelis[i].appendChild(child3);                  
				}
			}
			
			// correct white bug space for firefox  child zero needs removing
			if(sidelis[i].childNodes.length>=2){
				if (navigator.userAgent.indexOf("MSIE") == -1) {
					if(sidelis[i].childNodes[0].innerHTML==undefined){
						sidelis[i].removeChild(sidelis[i].childNodes[0]);
					}
				}
			}
			
			
			if(  (sidelis[i].childNodes.length>2) && (sidelis[i].childNodes[0].innerHTML!=undefined)   ){
				sidelis[i].style.cursor="pointer";
				if(sidelis[i].className != "clickmeopen"){					
					sidelis[i].className="clickme";
				}
				else{
					if(sidelis[i].childNodes[2].style){
						sidelis[i].childNodes[2].style.display="block";
						sidelis[i].childNodes[2].style.margin="0";
						sidelis[i].childNodes[2].className="clickmeopen";
					}
				}
				sidelis[i].childNodes[0].onclick=function(ev) {
					if(this.tagName == "SPAN"){
						// added event, propogates to parent...
					}
					else{
						if(   (window.event) && ((navigator.userAgent.indexOf("Safari") == -1))  ){
							cancelEvent(ev);
						}
						else{
							ev.stopPropagation();
						}	
					}
				}
				sidelis[i].onclick=function(ev) {	
					if(this.childNodes[2].style){
						if(this.childNodes[2].style.display=="block"){
							//////////////////////////////////////////////
							if( typeof jQuery === 'undefined'  ) {
								this.childNodes[2].style.display="none";
							}
							else{
								 $(this.childNodes[2]).slideUp("normal");
							}
							//////////////////////////////////////////////
							if(this.className=="clickmeopenlevel2lastchild"){
								this.className="clickmelevel2lastchild";
							}
							else{
								this.className="clickme";
							}
						}				
						else{
							//////////////////////////////////////////////
							if( typeof jQuery === 'undefined'  ) {
								this.childNodes[2].style.display="block";
							}
							else{
								 $(this.childNodes[2]).slideDown("normal");
							}
							//////////////////////////////////////////////
							this.childNodes[2].style.margin="0";
							
							if(this.className=="clickmelevel2lastchild"){
								this.className="clickmeopenlevel2lastchild";
							}
							else{
								this.className="clickmeopen";
							}
						}
					}
					if(   (window.event) && ((navigator.userAgent.indexOf("Safari") == -1))  ){
							cancelEvent(ev);
					}
					else{
						ev.stopPropagation();
					}
				}
			} 
			else {
				sidelis[i].style.cursor="default";
				sidelis[i].onclick=function(ev) {
					if(   (window.event) && ((navigator.userAgent.indexOf("Safari") == -1))  ){
						cancelEvent(ev);
					}
					else{
						ev.stopPropagation();
					}
				}
			}
		}
	}
}

function activateLeftNav(){
	if(!document.layers){
		if(parent.document.getElementById('leftmenu')){
			parent.document.getElementById('leftmenu').style.display="block"; // make param avail...
		}
		var sidenavroot = document.getElementById('sidemenuid');
		if(sidenavroot){
			var sidelis=sidenavroot.getElementsByTagName("LI"); 
			process(sidelis); 	
			if(navigator.userAgent.indexOf("Safari") != -1){
				var safari_sidenavroot = document.getElementById('sidemenuid');
				var safari_ancs=safari_sidenavroot.getElementsByTagName("A");  	
				for (i=0; i<safari_ancs.length; i++) {
					safari_ancs[i].onclick=function(ev) {	
							document.location=this.href;
					}
				}
			}
		}
	}
}

function expandAllLeftmenu(){
	var sidenavroot = document.getElementById('sidemenuid');
	var sidelis=sidenavroot.getElementsByTagName("LI");  
	for (i=0; i<sidelis.length; i++) {
		if(sidelis[i].childNodes.length>2){
			sidelis[i].childNodes[2].style.display="block";
			sidelis[i].childNodes[2].style.margin="0";
			sidelis[i].className="clickmeopen";
		}
	}
}

function closeAllLeftmenu(){
	var sidenavroot = document.getElementById('sidemenuid');
	var sidelis=sidenavroot.getElementsByTagName("LI");  
	for (i=0; i<sidelis.length; i++) {
		if(sidelis[i].childNodes.length>2){
			sidelis[i].childNodes[2].style.display="none";
			sidelis[i].className="clickme";
		}
	}	
}

function cancelEvent(e){
	if (!e) var e = window.event;
	e.cancelBubble = true;
	if (e.stopPropagation) e.stopPropagation();
} 	






/*
stuff that needs adding for IE via javascript...
.sidemenu li.lastchild
.sidemenu li.clickmelastchild
.sidemenu li.clickmeopenlastchild
.sidemenu li:lastchildopensub
.sidemenu li ul li.level2lastchild
.sidemenu li ul li.clickmelevel2lastchild
.sidemenu li ul li.clickmeopenlevel2lastchild 
.sidemenu li ul  li.level2lastchildopensub
*/


if  (navigator.userAgent.indexOf("MSIE") != -1)   {
	var sidenavroot2 = document.getElementById('sidemenuid');
	var tmp="";
	if(sidenavroot2){
		for (var i=0; i<sidenavroot2.childNodes.length; i++) {
			if(  (sidenavroot2.childNodes[i].innerHTML.indexOf("<UL"))>-1)  {
				processNestedLists(sidenavroot2.childNodes[i]);
			}
		}
	}
}


function processNestedLists(theObj){
	if( ((theObj.innerHTML).indexOf("<UL"))>-1){
		for (var a=0; a<theObj.childNodes.length; a++) {
			if(theObj.childNodes[a].tagName=="UL"){
				for (var g=0; g<theObj.childNodes[a].childNodes.length; g++) {
					if((theObj.childNodes[a].childNodes[g].innerHTML.indexOf("<UL"))>-1){
						processNestedLists2(theObj.childNodes[a].childNodes[g]);
						for (var h=0; h<theObj.childNodes[a].childNodes[g].childNodes.length; h++) {
							if(theObj.childNodes[a].childNodes[g].childNodes[h].tagName=="UL"){
								for (var j=0; j<theObj.childNodes[a].childNodes[g].childNodes[h].childNodes.length; j++) {
									if((theObj.childNodes[a].childNodes[g].childNodes[h].childNodes[j].innerHTML.indexOf("<UL"))>-1){
										processNestedLists2(theObj.childNodes[a].childNodes[g].childNodes[h].childNodes[j]);
									}
								}
							}
						}	
					}
				}
				var tmpClassName=theObj.childNodes[a].childNodes[theObj.childNodes[a].childNodes.length-1].className;
				if(tmpClassName==""){
					theObj.childNodes[a].childNodes[theObj.childNodes[a].childNodes.length-1].className="level2lastchild";
					theObj.childNodes[a].childNodes[theObj.childNodes[a].childNodes.length-1]
				}
				else if(tmpClassName=="clickme"){
					theObj.childNodes[a].childNodes[theObj.childNodes[a].childNodes.length-1].className="clickmelevel2lastchild";
				}
				else if(tmpClassName=="clickmeopen"){
					theObj.childNodes[a].childNodes[theObj.childNodes[a].childNodes.length-1].className="clickmeopenlevel2lastchild";
				}
			}
		}	
	}
}

function processNestedLists2(theObj2){
	if( ((theObj2.innerHTML).indexOf("<UL"))>-1){
		for (var f=0; f<theObj2.childNodes.length; f++) {
			if(theObj2.childNodes[f].tagName=="UL"){
				var tmpClassName2=theObj2.childNodes[f].childNodes[theObj2.childNodes[f].childNodes.length-1].className;
				if(tmpClassName2==""){
					theObj2.childNodes[f].childNodes[theObj2.childNodes[f].childNodes.length-1].className="level2lastchild";
				}
				else if(tmpClassName2=="clickme"){
					theObj2.childNodes[f].childNodes[theObj2.childNodes[f].childNodes.length-1].className="clickmelevel2lastchild";
				}
				else if(tmpClassName2=="clickmeopen"){
					theObj2.childNodes[f].childNodes[theObj2.childNodes[f].childNodes.length-1].className="clickmeopenlevel2lastchild";
				}
			}
		}	
	}
}


/*
stayTopRight=function(){
	var scrollTopParam = window.pageYOffset ? window.pageYOffset : document[(document.compatMode == 'CSS1Compat') ? 'documentElement' : 'body'].scrollTop;
	if(scrollTopParam>110){
		scrollTopParam = scrollTopParam - 110;
	}
	else{
		scrollTopParam = 0;
	}
	document.getElementById("slidecontainertopright").style.marginTop=scrollTopParam + "px";
	setTimeout("stayTopRight()", 200);
}
*/

stayTopRight=function(){
	var scrollTopParam = window.pageYOffset ? window.pageYOffset : document[(document.compatMode == 'CSS1Compat') ? 'documentElement' : 'body'].scrollTop;
	if(scrollTopParam>110){
		scrollTopParam = scrollTopParam - 110;
	}
	else{
		scrollTopParam = 0;
	}
	document.getElementById(theDiv).style.marginTop=scrollTopParam + "px";
	var divObj=document.getElementById(theDiv);
	setTimeout("stayTopRight()", 100);
}







