/*
<!--                                            -->
<!--      Script used by Evangelos Pafilis      -->
<!-- as part of his PhD Tagging service project -->
<!--        August - September 2007             -->
<!--                                            -->
<!--              pafilis@embl.de               -->
<!--                                            -->
<!--               version 0.1.6                -->
<!--                                            -->
*/


//by Michael Kuhn, kuhn@embl.de, November 2007
function protein_option_text (node, add_text, add_nodes, width) {
//    return "<table border=\"0\" cellspacing=\"10\"><tr><td><b>Information</b><br /><iframe src=\"http://stitch.embl.de/services/iteminfo?node="+ node + "&autosize=0\" id=\"item_info_frame\" style=\"width: " + width + "em; height: " + ((width*4)/5) + "em;\" frameborder=\"0\" /><td></tr></table>";
    return popup_info(node);
}

function chemical_option_text (node, cid, node_annotation, add_text, add_nodes, width) {
//    return "<table border=\"0\" cellspacing=\"10\"><tr><td><b>Information</b><br /><iframe src=\"http://stitch.embl.de/services/iteminfo?node="+ node + "&autosize=0\" id=\"item_info_frame\" style=\"width: " + width + "em; height: " + ((width*4)/5) + "em;\" frameborder=\"0\" /><td></tr></table>";
    return popup_info(node);
}

function popup_info(node_list) {
    var width = "401px";
    var height = "224px";
    var returnString = "";
    returnString  = '<iframe id="item_info_frame" style="width: ' + width + ';height: ' + height + ';overflow: hidden; z-index: 80;" frameborder="0"\' src=\'http://reflect.ws/fcgi-bin/solveAmbig.fcgi?' + node_list + '\'></iframe>';
    returnString += '<div id="overLayDiv" style="width: ' + width + ';height: ' + height + '; position: absolute; z-index: 100; top: 18px; left: 2px; background-color: #EEEEEE; display: none;">';
    returnString += '<br><br>&nbsp;&nbsp;&nbsp;&nbsp;Moving the PopUp...<br>&nbsp;&nbsp;&nbsp;&nbsp;Information will reappear if you release the mouse button.';
    returnString += '</div>';
    return returnString;
}

function checkSize(){
  var synonyms = document.getElementsByName("synonym");
  for(var i = 0; i<synonyms.length; i++){
    setSizeTA(synonyms.item(i));
  }
}
function setSizeTA(object){
  var buffer;
  if(navigator.appVersion.match(/Safari/)){
    object.style.height = object.scrollHeight;
    buffer = 18;
  }else{
    buffer = 2;
  }
  object.style.width = 10;
  object.style.width = object.scrollWidth + buffer;
}

function removeDiv(event){
  if(document.getElementById("overLayDiv")){
    document.getElementById("overLayDiv").style.display = "none";
  }
}

function addEventHandlerToElement(elementToAttachListener, typeOfEvent, eventFunction, preventBubbling)
{
        if(elementToAttachListener.addEventListener) 
        { 
                //you are using a w3c DOM compliant browser
                elementToAttachListener.addEventListener(typeOfEvent, eventFunction , preventBubbling); //capture event ie prevent bubbling: T/F
        }
        else if(elementToAttachListener.attachEvent) 
        {
                //you are using IE      
                elementToAttachListener.attachEvent("on"+typeOfEvent, eventFunction );
        }      
}

var openingClickOccured = false; 

function closePopup(event)
{
	if (over) //over: popup object in overlib  
	{//true if a a popup is open
//	  console.log("PopUp open");
//	  console.log(cursorOff());
		if (cursorOff(event))
		{//true if the mouse is outside the popup upon "onClick"
			if (openingClickOccured)
			{
//			  console.log("Opening click occured");
				nd();// overlib method to close the popup
				openingClickOccured = false;
			}else{
//			  console.log("Opening click NOT occured");
				openingClickOccured = true;
			}
		}else{
//		    console.log("Cursor NOT offside");
			openingClickOccured = true;
		}
	}else{
		//openingClickOccured = false;
	}
}
addEventHandlerToElement(document,"mouseup", function(e) { removeDiv(e);  } , false);
addEventHandlerToElement(document,"mouseup", function(e) { closePopup(e);  } , false);