DWREngine.setErrorHandler(doNothingHandler);
function ConfirmUpdate(){
  //Ask them to extend
  //if(confirm("Your session is about to expire. Press 'OK' to renew your session.")){
  //load server side page if ok
  AjaxServices.getAvoidSessionTimeout({callback:function(str) { window.status = 'Session updated automatically - ' + str; }, errorHandler:function(){ useTimer = false; } });
  SetTimer();
  //}
}      

function doNothingHandler() {
  // Do nothing
}

var timerObj;
var useTimer = true;
function SetTimer(){
  if (useTimer) {
    //How long before timeout (should be a few minutes before the server's timeout
    var dblMinutes = 8;
    //set timer to call function to confirm update 
    timerObj = setTimeout("ConfirmUpdate()",1000*60*dblMinutes);
  }
}

//start the timer
SetTimer();

//
// Functions involved in the batch queue mechanism
//

// This function do a WS call using AJAX to 
// retrieve the status of each batch jobs
function getBatchJobsStatus() {
  AjaxServices.getBatchJobsStatus(
  {
  callback:function(str) {
    checkBatchJobsStatus(str);
  }});
}

// This function update the list of jobs stored
// in the cookie and relaunch the check of job
// status with a delay
function checkBatchJobsStatus(jobsStatusList) {
  var jobInfoTip = "";
  var finishedJobs = "";
  var unfinishedJobs = 0;
  var historyStatus = 0;
  // First, get all the job status and build the 
  // text for the tooltip
  if (jobsStatusList != '') {
    historyStatus++;
    var statusList = jobsStatusList.split("@");
    for (var i=1; i<statusList.length; i++) {
      var nameAndStatus = statusList[i].split("-_-");
      // If a job has finished
      if (nameAndStatus[1] == '1') {
	finishedJobs += nameAndStatus[0] + "-_-";
      }
      // If a job is waiting to be run
      else if (nameAndStatus[1] == '2') {
	unfinishedJobs++;
	jobInfoTip += "Job " + nameAndStatus[0] + " is waiting...<br>";
      }
      // If a job is running
      else if (nameAndStatus[1] == '3') {
	unfinishedJobs++;
	jobInfoTip += "Job " + nameAndStatus[0] + " is running...<br>";
      }
      else {
	unfinishedJobs++;
	jobInfoTip += "Job " + nameAndStatus[0] + " has encountered problems. Please inform your SRS administrator<br>";
      }
    }
    // As long as not all the jobs are finished,
    // carry on checking
    if (unfinishedJobs > 0) {
      var dblMinutes = 0.5;
      setTimeout("getBatchJobsStatus()",1000*60*dblMinutes);
    }
    else {
      // Downgrade to "No unfinished jobs" status
      historyStatus--;
    }
  }

  // Then, decide when to display what
  var toolResultsDiv = document.getElementById('toolResults');
  var cookieValue = getCookie('queryHistoryVisibleTab');
  // If we are on the History page, showing the Tool results tab
  if (toolResultsDiv && (toolResultsDiv.style.visibility == "visible" 
			 || (cookieValue == 'toolResults'))) {
    delCookie("finishedBatchJobs");
  }
  // If we are NOT on the History page on the Tool results tab
  else {
    var cookieValue = getCookie("finishedBatchJobs");
    if (cookieValue != null && cookieValue != '' ) {
      if (finishedJobs != "") {
	finishedJobs = finishedJobs + cookieValue;
      }
      else{
	finishedJobs = cookieValue;
      }
    }
    if (finishedJobs != "") {
      historyStatus+=2;
      setCookie("finishedBatchJobs", finishedJobs, 99);
      jobInfoTip += "<b>Job(s) finished :</b><br>";
      var jobList = finishedJobs.split("-_-");
      for (var i=0; i<jobList.length; i++) {
	if (jobList[i] != '') {
	  jobInfoTip += "Job " + jobList[i] + "<br>";
	}
      }
    }
  }
  // Change 'history' tab
  historyTabTooltip(jobInfoTip, historyStatus);
  // If we are on the History page, a reload is needed
  // if the status of a job change
  if (toolResultsDiv && statusList && statusList[0] == '1') {
  	link = document.getElementById('nav_queryHistory').href;
    window.location.replace(link);
  }
}

function historyTabTooltip(text, colour) {
  var batchIconToShow = "null.gif";
  if (colour == 1) // Only jobs running/waiting
    batchIconToShow = "nav_history_running.gif";
  if (colour == 2) // Only jobs finished
    batchIconToShow = "nav_history_finished.gif";
  if (colour == 3) // Some jobs running/waiting, some finished
    batchIconToShow = "nav_history_partial.gif";
  var qhTabNav = document.getElementById('queryHistory');
  var batchQueueIcon = document.getElementById('batchQueue');
  
  if (qhTabNav) {
    if (text != "") { // If there's still some job info to show
      link = document.getElementById('nav_queryHistory').href;
      batchQueueIcon.innerHTML = "<a id='nav_queryHistoryBatch' href='" + link + "'><img border='0' src='images/"+themeName+"/nav/"+batchIconToShow+"' style='cursor:pointer;' width='20' height='20'></a>";
      qhTabNav.onmouseover = function() {
	popupinfo(this, 0, -25);
	setpopupcontent(text);

	if (qhTabNav.className != 'frontPagenavTopOff'){
	  changehighlight('queryHistory', 'navTopOn');
	}
      };

      qhTabNav.onmouseout = function() {
	hidepopupinfo();
	  
	if (qhTabNav.className != 'frontPagenavTopOff'){
	  changehighlight('queryHistory', 'navTopOff');
	}
      };

      batchQueueIcon.onmouseover = function() {
	popupinfo(this, 0, -25);
	setpopupcontent(text);
      };
      batchQueueIcon.onmouseout = function() {hidepopupinfo()};
    }
    else { // If there's no more job info to show
	

		qhTabNav.onmouseover = function() {if (qhTabNav.className != 'frontPagenavTopOff'){changehighlight('queryHistory', 'navTopOn');}};	
		qhTabNav.onmouseout = function() {if (qhTabNav.className != 'frontPagenavTopOff'){changehighlight('queryHistory', 'navTopOff');}};	

	
      batchQueueIcon.onmouseover = "";
      batchQueueIcon.onmouseout = "";

      var toolResultsDiv = document.getElementById('toolResults');

      if (qhTabNav.className == 'navTopOn'){ // If on Query History page
	qhTabNav.className = "navTopOn";
      }
      else if (qhTabNav.className == 'frontPagenavTopOff') {// If on Front page
	qhTabNav.className = "frontPagenavTopOff";
      }
      else{
	qhTabNav.className = "navTopOff";
      }
    }
  }
}

getBatchJobsStatus();

// AJAX function to set a query as a favourite
function setAsFavorite(queryName, viewName, sortField, sortDirection, comment){
  AjaxServices.setAsFavorite(queryName, viewName, sortField, sortDirection, comment, {callback: function(){_setAsFavoriteCallback();}});
}

function _setAsFavoriteCallback() {
  document.getElementById('make_favorite_container').innerHTML="<img src=\"images/"+themeName+"/primarySearch_star_on.gif\" title=\"This query is a favorite\">";
  document.getElementById('is_favourite').value='true';
}

// AJAX function to save a parameter in the session
function storeInSession(name, value){
  AjaxServices.storeInSession(name, value);
}
