
/**************************************************
 * Javascripts created to make the slider slide.  *
 * Original code sourced from the web, but adapted*
 * for our own use. If you alter any of the code  *
 * be careful that you follow the rules !   	  *
 * Author : Mark Bingley   2005			  		  *
 *************************************************/


var firefox = (document.getElementById&&!document.all);
var IE = (document.all);
var status="in";
var graphicTop = 0;
var iTop2;
var moving=setTimeout('null',1);
var YOffset=150;
var XOffset=-2;
var staticYOffset=30;
var slideSpeed=5; // was 20
var waitTime=1000; // this sets the time the menu stays out for after the mouse goes off it.
var menuIsStatic="yes"; //this sets whether menu should stay static on the screen
var menuWidth=200; // Must be a multiple of 10! 
var barWidth=20;
var ssm;
var bssm;
var lastY;
var smooth;

function initiate() {
	lastY=0;
	setTimeout('initSlide();', 1);
}

function moveSrs3dArea(){
	if (status=="out") {
		document.getElementById("srs3dArea").style.left = "38px";
	}else{
		document.getElementById("srs3dArea").style.left = "240px";
	}
}

function moveOut() {
	var ssmWidth = document.getElementById("thessm").offsetWidth;
	ssmWidth-=25; // subtract 25 for the width of the button 
	if(firefox){
		difference = parseInt(ssm.left) + ssmWidth;
	} else if (IE){
		difference = ssm.pixelLeft + ssmWidth;
	}
	var moveAmount=10;	
	if(ssmWidth - difference <= 10){
		var moveAmount=ssmWidth - difference;
	}	
	if ((firefox)&&parseInt(ssm.left)<0 || IE && ssm.pixelLeft<0) {
		clearTimeout(moving);moving = setTimeout('moveOut()', slideSpeed);slideMenu(moveAmount);
	}else{
		clearTimeout(moving);moving=setTimeout('null',1);
	}
}

function initialMoveBack() {
	clearTimeout(moving);moving = setTimeout('initialMoveBack1()', 1);
}


function moveBack() {
	clearTimeout(moving);moving = setTimeout('moveBack1()', waitTime);
}

function initialMoveBack1() {
	var ssmWidth = document.getElementById("thessm").offsetWidth;
	ssmWidth-=25; // subtract 25 for the width of the button 
	var difference=0;
	if(firefox){
		difference = parseInt(ssm.left) + ssmWidth;
	} else if (IE){
		difference = ssm.pixelLeft + ssmWidth;
	}	
	var moveAmount=difference+9; // the extra 9 is just to move it left a little
	if ((firefox) && parseInt(ssm.left)>(-ssmWidth) || IE && ssm.pixelLeft>(-ssmWidth)) {
		clearTimeout(moving);moving = setTimeout('moveBack1()', slideSpeed);slideMenu(-moveAmount);
	}else{
		clearTimeout(moving);moving=setTimeout('null',1);
	}
	document.getElementById("toolsMainAreaCell").style.visibility="visible";
	document.getElementById("toolsTabCell").style.visibility="visible";
}

function moveBack1() {
	var ssmWidth = document.getElementById("thessm").offsetWidth;
	ssmWidth-=25; // subtract 25 for the width of the button 
	var difference=0;
	if(firefox){
		difference = parseInt(ssm.left) + ssmWidth;
	} else if (IE){
		difference = ssm.pixelLeft + ssmWidth;
	}	
	var moveAmount=10;
	if(difference <= 10){
		var moveAmount=difference+9;// the extra 9 is just to move it left a little
	}
	if ((firefox) && parseInt(ssm.left)>(-ssmWidth) || IE && ssm.pixelLeft>(-ssmWidth)) {
		clearTimeout(moving);moving = setTimeout('moveBack1()', slideSpeed);slideMenu(-moveAmount);
	}else{
		clearTimeout(moving);moving=setTimeout('null',1);
	}
	
}

function slideMenu(num){
	if (firefox) {
		ssm.left = parseInt(ssm.left)+num+'px';
	}else{
		ssm.pixelLeft += num;
	}
}

// this makes the slider track the scroll of the screen
function makeStatic() {
	var winY = document.documentElement.scrollTop;
	if (winY!=lastY&&winY>YOffset-staticYOffset) {
		smooth = .2 * (winY - lastY - YOffset + staticYOffset);
	}else if (YOffset-staticYOffset+lastY>YOffset-staticYOffset) {
		smooth = .2 * (winY - lastY - (YOffset-(YOffset-winY)));
	}else{
		smooth=0;
	}
	
	if(smooth > 0) {
		smooth = Math.ceil(smooth);
	}else{
		smooth = Math.floor(smooth);
	}
	
	if (firefox) {
		bssm.top=parseInt(bssm.top)+smooth+'px';
	}else{
		bssm.pixelTop+=smooth;
	}
	lastY = lastY+smooth;
	setTimeout('makeStatic()', 1);
}
function initSlide() {
	ssm = document.getElementById("thessm").style;
	bssm = document.getElementById("basessm").style;

	if (firefox){
		bssm.clip="rect(0 "+document.getElementById("thessm").offsetWidth+" "+document.getElementById("thessm").offsetHeight+" 0)";
		ssm.visibility="visible";
	}else{
		bssm.clip="rect(0 "+thessm.offsetWidth+" "+thessm.offsetHeight+" 0)";
		bssm.visibility = "visible";
	}
	if (menuIsStatic=="yes"){
		makeStatic();
	}
}

function movementDecider(){
    if (document.getElementById("srs3dArea")){
    	moveSrs3dArea();
	}
	if (status=="out") {
		moveBack1();
		status="in";
	}else{
		 moveOut();
		 status="out";
	}
}

// makes the invisible area below the tools tab clickable for the page shift
function clickthrough(){
	var hideRib = document.getElementById('hideRib');
	if(hideRib.value == 'true'){
		toggleRibDisplay();
	}
}
