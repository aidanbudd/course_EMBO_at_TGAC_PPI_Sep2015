//\/////
//\  overLIB Anchor Plugin
//\    Modified August 21, 2006 to reflect name change for 'createPopup' routine
//\
//\  You may not remove or change this notice.
//\  Copyright Erik Bosrup 1998-2004. All rights reserved.
//\  Contributors are listed on the homepage.
//\  See http://www.bosrup.com/web/overlib/ for details.
//\/////
////////
// PRE-INIT
// Ignore these lines, configuration is below.
////////
if (typeof olInfo == 'undefined' || typeof olInfo.meets == 'undefined' || !olInfo.meets(4.23)) alert('overLIB 4.23 or later is required for the Anchor Plugin.');
else {
registerCommands('rmrk,rmrkx,rmrky,normrk,rmrkpt,anchor,anchorx,anchory,noanchorwarn,anchoralign');
var olMrk=0;  // switch to determine if need rmrk or anchor
////////
// DEFAULT CONFIGURATION
// Settings you want everywhere are set here. All of this can also be
// changed on your html page or through an overLIB call.
////////
if (typeof ol_rmrk=='undefined') var ol_rmrk='';
if (typeof ol_rmrkx=='undefined') var ol_rmrkx=0;
if (typeof ol_rmrky=='undefined') var ol_rmrky=0;
if (typeof ol_normrk=='undefined') var ol_normrk=1;
if (typeof ol_rmrkpt=='undefined') var ol_rmrkpt='UL';
if (typeof ol_anchor=='undefined') var ol_anchor='';
if (typeof ol_anchorx=='undefined') var ol_anchorx=0;
if (typeof ol_anchory=='undefined') var ol_anchory=0;
if (typeof ol_noanchorwarn=='undefined') var ol_noanchorwarn=1;
if (typeof ol_anchoralign=='undefined') var ol_anchoralign='UL';
////////
// END OF CONFIGURATION
// Don't change anything below this line, all configuration is above.
////////
////////
// INIT
////////
// Runtime variables init. Don't change for config!
var o3_rmrk="";
var o3_rmrkx=0;
var o3_rmrky=0;
var o3_normrk=1;
var o3_rmrkpt='UL';
var o3_anchor="";
var o3_anchorx=0;
var o3_anchory=0;
var o3_noanchorwarn=1;
var o3_anchoralign='UL';
var mrkObj,rmrkPosition;  //reference mark object,reference mark position,an array;
////////
// PLUGIN FUNCTIONS
////////
function setAnchorVariables() {
  o3_rmrk=ol_rmrk;
  o3_rmrkx=ol_rmrkx;
  o3_rmrky=ol_rmrky;
  o3_normrk=ol_normrk;
  o3_rmrkpt=ol_rmrkpt;
  o3_anchor=ol_anchor;
  o3_anchorx=ol_anchorx;
  o3_anchory=ol_anchory;
  o3_noanchorwarn=ol_noanchorwarn;
  o3_anchoralign=ol_anchoralign;
  mrkObj=null;  // initialize this variable
}
// Parses Reference Mark commands
function parseAnchorExtras(pf,i,ar) {
	var v,k=i,w;
	if (k < ar.length) {
		if(!olMrk&&(ar[k]>=RMRK&&ar[k]<=RMRKPT)) olMrk=1;
		if (ar[k]==RMRK||ar[k]==ANCHOR) { w=(olMrk) ? 'anchor' : 'rmrk'; eval(pf+w+"='"+escSglQuote(ar[++k])+"'"); return k; }
		if (ar[k]==RMRKX||ar[k]==ANCHORX) { w=(olMrk) ? 'anchorx' : 'rmrkx'; eval(pf+w+'='+ar[++k]); return k; }
		if (ar[k]==RMRKY||ar[k]==ANCHORY) { w=(olMrk) ? 'anchory' : 'rmrky'; eval(pf+w+'='+ar[++k]); return k; }
		if (ar[k]==NORMRK||ar[k]==NOANCHORWARN) { w=(olMrk) ? 'noanchorwarn' : 'normrk'; eval(pf+w+'=('+pf+w+'==1) ? 0 : 1'); return k; }
		if (ar[k]==RMRKPT||ar[k]==ANCHORALIGN) {w=(olMrk) ? 'anchoralign' : 'rmrkpt'; if(typeof ar[k+1]=='object') {v=ar[++k]; eval(pf+w+'=v');} else k=opt_MULTIPLEARGS(++k,ar,(pf+w));  return k; }
	}
	return -1;
}
///////
//  FUNCTION WHICH CHECKS FOR THE EXISTENCE OF A REFERENCE MARKER
///////
function checkAnchorObject() {
	var w = (olMrk) ? o3_anchor : o3_rmrk;
	if (w) {
		if (!(mrkObj=getAnchorObjRef(w))) {
			if (o3_noanchorwarn||o3_normrk) {
				alert('WARNING!  Reference mark "'+w+'" not found.');
				return false;
			} else w='';
		}
	}
	return true;
}
//////
// HANDLING FUNCTIONS, OVERLOADS CORE MODULE
//////
function anchorHorizontal(browserWidth, horizontalScrollAmount, widthFix) {
	var hasAnchor=((typeof o3_anchor!='undefined'&&o3_anchor)||(typeof o3_rmrk!='undefined'&&o3_rmrk));	
	if (!hasAnchor) return void(0);
	if (typeof o3_followscroll != 'undefined' && o3_followscroll && o3_sticky) o3_relx=rmrkPosition[0];
	return rmrkPosition[0];
}
function anchorVertical(browserHeight,verticalScrollAmount) {
	var hasAnchor=((typeof o3_anchor!='undefined'&&o3_anchor)||(typeof o3_rmrk!='undefined'&&o3_rmrk));	
	if (!hasAnchor) return void(0);
	if (typeof o3_followscroll != 'undefined' && o3_followscroll && o3_sticky) o3_rely=rmrkPosition[1];
	return rmrkPosition[1];
}
///////
// EXTERNAL SUPPORT FUNCTIONS TO HANDLE ANCHOR PROPERTIES
///////
// Stub function for the runHook routine
function anchorPreface() {
	if (!mrkObj) return;
	rmrkPosition=getAnchorLocation(mrkObj);
}
function getAnchorObjRef(aObj) {
 return getRefById(aObj,o3_frame.document)||getRefByName(aObj,o3_frame.document)
}
// Adapted to overlib from jwin by Jason Anderson -- http://www.jwinlib.com
function getAnchorLocation(objRef){
 var mkObj,of,offsets,mlyr
 mkObj=mlyr=objRef
 offsets=(olMrk) ? [o3_anchorx,o3_anchory] : [o3_rmrkx,o3_rmrky]
 if(document.layers){
 if(typeof mlyr.length!='undefined'&&mlyr.length > 1){
  mkObj=mlyr[0]
  offsets[0] += mlyr[0].x+mlyr[1].pageX
  offsets[1] += mlyr[0].y+mlyr[1].pageY
  }else{
   if(mlyr.toString().indexOf('Image')!=-1||mlyr.toString().indexOf('Anchor')!=-1){
    offsets[0] += mlyr.x
    offsets[1] += mlyr.y
    }else{
     offsets[0] += mlyr.pageX
     offsets[1] += mlyr.pageY
    }
  }          
 }else{
  offsets[0] += pageLocation(mlyr,'Left')
  offsets[1] += pageLocation(mlyr,'Top')
 }
 of=getAnchorOffsets(mkObj)
 if (typeof o3_dragimg!='undefined'&&o3_dragimg) {olImgLeft=offsets[0]; olImgTop=offsets[1]; return; }
 offsets[0] += of[0]                    
 offsets[1] += of[1]
 return offsets
}
// Adapted to overlib from jwin by Jason Anderson -- http://www.jwinlib.com
function getAnchorOffsets(mkObj){
 var fx=fy=0, mp,puc,mkAry,sx=sy=0, w=(olMrk) ? o3_anchoralign : o3_rmrkpt;   
 var mW=mH=pW=pH=0
 var off=[0,0]
 if (typeof w=='object') mkAry=w.toString().split(',');
 else mkAry = w.split(',');
 if(mkAry.length<3) {
	 mp = mkAry[0].toUpperCase();
	 puc = (mkAry.length==1) ? mp : mkAry[1].toUpperCase();
 } else if (mkAry.length==3) {
	 if(!isNaN(mkAry[0])) {
		 mp=mkAry.slice(0,2);
		 puc=mkAry[2].toUpperCase();
	 } else {
		 mp=mkAry[0].toUpperCase();
		 puc=mkAry.slice(1);
	 }
 } else {
	 mp=mkAry.slice(0,2);
	 puc=mkAry.slice(2);
 }
 var shdwPresent=typeof o3_shadow!='undefined'&&o3_shadow
 if(shdwPresent) {
	sx=Math.abs(o3_shadowx);
	sy=Math.abs(o3_shadowy);
 }
 pW=(shdwPresent ? parseInt(o3_width) : (olNs4 ? over.clip.width : over.offsetWidth))
 pH=(shdwPresent ? parseInt(o3_aboveheight) : (olNs4 ? over.clip.height : over.offsetHeight))
 if (olOp&&o3_wrap) {
  pW=(shdwPresent ? parseInt(o3_width) : (olNs4 ? over.clip.width : over.offsetWidth))
  pH=(shdwPresent ? parseInt(o3_aboveheight) : (olNs4 ? over.clip.height : over.offsetHeight))
 }
 if(!olOp&&mkObj.toString().indexOf('Image')!=-1){
  mW=mkObj.width
  mH=mkObj.height
 } else if (!olOp&&mkObj.toString().indexOf('Anchor')!=-1) {  // enforced only for NS4
  mp='UL'
 } else{
  mW=(olNs4) ? mkObj.clip.width : mkObj.offsetWidth
  mH=(olNs4) ? mkObj.clip.height : mkObj.offsetHeight
 }
 if (olNs4||olNs6&&mkObj.border) {
		 mW+= 2*parseInt(mkObj.border);
		 mH+= 2*parseInt(mkObj.border);
 }
 if(!isNaN(mp) || typeof mp=='object') {
		if (typeof mp=='object') {
			fx=parseFloat(mp[0]);
			fy=parseFloat(mp[1]);
		} else fx=fy=parseFloat(mp);
		off=[Math.round(fx*mW), Math.round(fy*mH)];
 } else {
	 if(mp=='UR') off=[mW,0]
	 else if(mp=='LL') off=[0,mH]
	 else if(mp=='LR') off=[mW,mH]
 }
 if (typeof o3_dragimg!='undefined'&&o3_dragimg) return off;
 else {
		if( !isNaN(puc) || typeof puc=='object' ) {
			if (typeof puc=='object') {
				fx=parseFloat(puc[0]);
				fy=parseFloat(puc[1]);
			} else fx=fy=parseFloat(puc);
			off[0] -= Math.round(fx*(pW-sx));
			off[1] -= Math.round(fy*(pH-sy));
		} else {
		  if (puc=='UR') {off[0] -= (pW-sx); off[1] -=sy}
		  else if (puc=='LL') {off[0] -= sx; off[1] -= (pH-sy)}
		  else if (puc=='LR') {off[0] -= (pW-sx); off[1] -= (pH-sy)}
		}
	  return off
 }
}
// Adapted to overlib from jwin by Jason Anderson -- http://www.jwinlib.com
function pageLocation(o,t){
 var x=0
 while(o.offsetParent){
  x += o['offset'+t]
  o=o.offsetParent
 }
 x += o['offset'+t]
 return x
} 
// Adapted to overlib from jwin by Jason Anderson -- http://www.jwinlib.com
function getRefById(l,d){
 var r="",j
 d=(d||document)
 if(d.all) return d.all[l]    
 else if(d.getElementById) return d.getElementById(l)
 else if(d.layers&&d.layers.length > 0){
  if(d.layers[l]) return d.layers[l]
  for(j=0; j < d.layers.length; j++){
   r=getRefById(l,d.layers[j].document)
   if(r) return r               
  }
 }
 return null
}
// Adapted to overlib from jwin by Jason Anderson -- http://www.jwinlib.com
function getRefByName(l,d){
 var r=null,j
 d=(d||document)
 if(d.images[l])return d.images[l]
 else if (d.anchors[l]) return d.anchors[l];
 else if(d.layers&&d.layers.length > 0){
  for(j=0; j < d.layers.length; j++){
   r=getRefByName(l,d.layers[j].document)
   if(r&&r.length > 0) return r
   else if(r) return [r,d.layers[j]] 
  }
 }
 return null
}
////////
// PLUGIN REGISTRATIONS
////////
registerRunTimeFunction(setAnchorVariables);
registerCmdLineFunction(parseAnchorExtras);
registerPostParseFunction(checkAnchorObject);
registerHook("olCreatePopup",anchorPreface,FAFTER);
registerHook("horizontalPlacement", anchorHorizontal, FCHAIN);
registerHook("verticalPlacement", anchorVertical, FCHAIN);
if(olInfo.meets(4.14)) registerNoParameterCommands('noanchorwarn');
}
//end 
