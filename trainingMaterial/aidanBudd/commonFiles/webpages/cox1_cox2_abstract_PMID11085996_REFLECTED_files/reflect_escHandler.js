/* returns the event objct instance after dealing with the cross-browser issues */
function getEvent(e)
{
    if ( !e ) 
    {
        e = event;
    }
    return e;
}



function closePopupOnEsc(e)
{
    var ESC_KEY_VALUE = 27;
    var keyValue = -1;
	var eventObj = getEvent(e);
	
	
    if(eventObj.keyCode) // IE
    {
        keyValue = eventObj.keyCode;
    }
    else if(eventObj.which) // Netscape/Firefox/Opera
    {
        keyValue = eventObj.which;
    }
	
    if ( keyValue == ESC_KEY_VALUE )
    {
        nd(); //overlib funtion to close the popup
    }
}

function addEventHandler(elementToAttachListener, typeOfEvent, eventFunction, preventBubbling)
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

addEventHandler(document,"keyup", function(e) { closePopupOnEsc(e); } , false);
