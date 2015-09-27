//
// Base Omniture instrumentation
//

/* SiteCatalyst code version: H.17.
Copyright 1997-2008 Omniture, Inc. More info available at
http://www.omniture.com */
/************************ ADDITIONAL FEATURES ************************
     Plugins
*/
var s_account="nihpoc"
var s=s_gi(s_account)
/************************** CONFIG SECTION **************************/
/* You may add or alter any code config here. */
/* Conversion Config */
s.currencyCode="USD"
/* Link Tracking Config */
s.trackDownloadLinks=true
s.trackExternalLinks=true
s.trackInlineStats=true
s.linkDownloadFileTypes="exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx"
s.linkInternalFilters="javascript:,."
/* set to "Session" to turn off persistent cookies.   */
s.cookieLifetime="Session"
s.linkLeaveQueryString=false
s.linkTrackVars="None"
s.linkTrackEvents="None"
/* Plugin Config */
s.usePlugins=true
function s_doPlugins(s) {
	/* Add calls to plugins here */
		//s.campaign=s.getQueryParam('psrc');
		s.prop20=s.getTimeParting('h','-5','2008'); // Set hour
		s.prop21=s.getTimeParting('d','-5','2008'); // Set day
		s.prop22=s.getTimeParting('w','-5','2008'); // Set Weekend / Weekday

		s.eVar1=s.prop1;
		s.eVar2=s.pageName;
		s.eVar3=s.prop3;
		s.eVar4=s.prop4;
		s.eVar5=s.prop5;
		s.eVar6=s.prop6;
		s.eVar7=s.prop7;
		s.eVar8=s.prop8;
		s.eVar9=s.prop9;
		s.eVar10=s.prop10;


}
s.doPlugins=s_doPlugins
/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */
/*
 * Plugin: getQueryParam 2.1 - return query string parameter(s)
 */
s.getQueryParam=new Function("p","d","u",""
+"var s=this,v='',i,t;d=d?d:'';u=u?u:(s.pageURL?s.pageURL:s.wd.locati"
+"on);if(u=='f')u=s.gtfs().location;while(p){i=p.indexOf(',');i=i<0?p"
+".length:i;t=s.p_gpv(p.substring(0,i),u+'');if(t)v+=v?d+t:t;p=p.subs"
+"tring(i==p.length?i:i+1)}return v");
s.p_gpv=new Function("k","u",""
+"var s=this,v='',i=u.indexOf('?'),q;if(k&&i>-1){q=u.substring(i+1);v"
+"=s.pt(q,'&','p_gvf',k)}return v");
s.p_gvf=new Function("t","k",""
+"if(t){var s=this,i=t.indexOf('='),p=i<0?t:t.substring(0,i),v=i<0?'T"
+"rue':t.substring(i+1);if(p.toLowerCase()==k.toLowerCase())return s."
+"epa(v)}return ''");
/*
 * Plugin: getTimeParting 1.3 - Set timeparting values based on time zone
 */
s.getTimeParting=new Function("t","z","y",""
+"dc=new Date('1/1/2000');f=15;ne=8;if(dc.getDay()!=6||"
+"dc.getMonth()!=0){return'Data Not Available'}else{;z=parseInt(z);"
+"if(y=='2009'){f=8;ne=1};gmar=new Date('3/1/'+y);dsts=f-gmar.getDay("
+");gnov=new Date('11/1/'+y);dste=ne-gnov.getDay();spr=new Date('3/'"
+"+dsts+'/'+y);fl=new Date('11/'+dste+'/'+y);cd=new Date();"
+"if(cd>spr&&cd<fl){z=z+1}else{z=z};utc=cd.getTime()+(cd.getTimezoneO"
+"ffset()*60000);tz=new Date(utc + (3600000*z));thisy=tz.getFullYear("
+");var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Fr"
+"iday','Saturday'];if(thisy!=y){return'Data Not Available'}else{;thi"
+"sh=tz.getHours();thismin=tz.getMinutes();thisd=tz.getDay();var dow="
+"days[thisd];var ap='AM';var dt='Weekday';var mint='00';if(thismin>3"
+"0){mint='30'}if(thish>=12){ap='PM';thish=thish-12};if (thish==0){th"
+"ish=12};if(thisd==6||thisd==0){dt='Weekend'};var timestring=thish+'"
+":'+mint+ap;var daystring=dow;var endstring=dt;if(t=='h'){return tim"
+"estring}if(t=='d'){return daystring};if(t=='w'){return en"
+"dstring}}};"
);
/* WARNING: Change only on instruction of Omniture account manager. */
s.visitorNamespace="nih";
s.trackingServer="a.ncbi.nlm.nih.gov";
s.dc=122;

/************* DO NOT ALTER ANYTHING BELOW THIS LINE ! **************/
var s_code='',s_objectID;function s_gi(un,pg,ss){var c="=fun@6(~){`Ks=^S~$h ~.substring(~.indexOf(~;@t~';`Bt`t~=new Fun@6(~.toLowerCase()~s_c_il['+s^sn+']~};s.~`m@t~.length~.toUpperCase~=new Object~s"
+".wd~','~){@t~')q='~.location~var ~s.pt(~dynamicAccount~link~s.apv~='+@y(~)@tx^m!Object$eObject.prototype$eObject.prototype[x])~);s.~Element~.getTime()~=new Array~ookieDomainPeriods~s.m_~referrer~.p"
+"rotocol~=new Date~BufferedRequests~}c$s(e){~visitor~;@X^js[k],255)}~=''~javaEnabled~conne@6^M~@0c_i~Name~:'')~onclick~}@t~else ~ternalFilters~javascript~s.dl~@Os.b.addBehavior(\"# default# ~=parseF"
+"loat(~'+tm.get~=='~cookie~s.rep(~s.^T~track~o@0oid~browser~.parent~window~colorDepth~String~while(~.host~.lastIndexOf('~s.sq~s.maxDelay~s.vl_g~r=s.m(f)?s[f](~for(~s.un~s.eo~&&s.~parseInt(~t=s.ot(o)"
+"~j='1.~#4URL~lugins~dynamicVariablePrefix~document~Type~Sampling~s.rc[un]~Download~Event~');~this~tfs~resolution~s.c_r(~s.c_w(~s.eh~s.isie~s.vl_l~s.vl_t~Height~t,h){t=t?t~tcf~isopera~ismac~escape(~"
+".href~screen.~s.fl(~Version~harCode~&&(~_'+~variableProvider~s.pe~)?'Y':'N'~:'';h=h?h~._i~e&&l$HSESSION'~f',~onload~name~home#4~objectID~}else{~.s_~s.rl[u~Width~s.ssl~o.type~Timeout(~ction~Lifetime"
+"~.mrq(\"'+un+'\")~sEnabled~;i++)~'){q='~&&l$HNONE'){~ExternalLinks~charSet~onerror~lnk~currencyCode~.src~s=s_gi(~etYear(~&&!~Opera~'s_~;try{~Math.~s.fsg~s.ns6~s.oun~InlineStats~Track~'0123456789~&&"
+"t~s[k]=~s.epa(~m._d~n=s.oid(o)~,'sqs',q);~LeaveQuery~')>=~'=')~)+'/~){n=~\",''),~vo)~s.sampled~=s.oh(o);~+(y<1900?~s.disable~ingServer~n]=~true~sess~campaign~lif~if(~'http~,100)~s.co(~x in ~s.ape~f"
+"fset~s.c_d~s.br~'&pe~s.gg(~s.gv(~s[mn]~s.qav~,'vo~s.pl~=(apn~Listener~\"s_gs(\")~vo._t~b.attach~d.create~=s.n.app~(''+~!='~'||t~'+n~s()+'~){p=~():''~a):f(~+1))~a['!'+t]~){v=s.n.~channel~un)~.target"
+"~o.value~g+\"_c\"]~\".tl(\")~etscape~(ns?ns:~s_')t=t~k',s.bc~omePage~s.d.get~')<~||!~[b](e);~m[t+1](~return~mobile~height~events~random~code~'MSIE ~rs,~un,~,pev~floor(~atch~s.num(~[\"s_\"+~s.c_gd~s"
+".dc~s.pg~,'lt~.inner~transa~;s.gl(~\"m_\"+n~idt='+~page~Group,~.fromC~sByTag~?'&~+';'~t&&~1);~){s.~[t]=~>=5)~[t](~=l[n];~!a[t])~~s._c=@Nc';`F=^1`5!`F`hn){`F`hl`U;`F`hn=0;}s^sl=`F`hl;s^sn=`F`hn;s^sl"
+"[s^s@os;`F`hn++;s.m`0m){`2$Gm)`4'{$d0`Afl`0x,l){`2x?$Gx)`30,l):x`Aco`0o`H!o)`2o;`Kn`E,x;^B@xo)@tx`4'select$d0&&x`4'filter$d0)n[x]=o[x];`2n`Anum`0x){x`e+x;^B`Kp=0;p<x`C;p++)@t(@V')`4x`3p,p$O<0)`20;`"
+"21`Arep=s_r;@y`0x`1,h=@VABCDEF',i,c=s.@E,n,l,e,y`e;c=c?c`D$M`5x){x`e+x`5c`tAUTO'^m'').c^lAt){^Bi=0;i<x`C@A{c=x`3i,i+#Bn=x.c^lAt(i)`5n>127){l=0;e`e;^4n||l<4){e=h`3n%16,n%16+1)+e;n=(n-n%16)/16;l++}y+"
+"='%u'+e}`Bc`t+')y+='%2B';`my+=^gc)}x=y^zx=x?`v^g''+x),'+`G%2B'):x`5x&&c^Eem==1&&x`4'%u$d0&&x`4'%U$d0){i=x`4'%^R^4i>=0){i++`5h`38)`4x`3i,i+1)`D())>=0)`2x`30,i)+'u00'+x`3i);i=x`4'%',i)}}}}`2x`Aepa`0x"
+"`1;`2x?un^g`v''+x,'+`G ')):x`Apt`0x,d,f,a`1,t=x,z=0,y,r;^4t){y=t`4d);y=y<0?t`C:y;t=t`30,y);^At,$Nt,a)`5r)`2r;z+=y+d`C;t=x`3z,x`C);t=z<x`C?t:''}`2''`Aisf`0t,a){`Kc=a`4':')`5c>=0)a=a`30,c)`5t`30,2)`t"
+"$Z`32);`2(t!`e@W==a)`Afsf`0t,a`1`5`La,`G,'is^ut))@Q+=(@Q!`e?`G`j+t;`20`Afs`0x,f`1;@Q`e;`Lx,`G,'fs^uf);`2@Q`Ac_d`e;$vf`0t,a`1`5!$tt))`21;`20`Ac_gd`0`1,d=`F`J^5^w,n=s.fpC`V,p`5!n)n=s.c`V`5d@L$0@gn?^F"
+"n):2;n=n>2?n:2;p=d^6.')`5p>=0){^4p>=0&&n>1$Ld^6.',p-#Bn--}$0=p>0&&`Ld,'.`Gc_gd^u0)?d`3p):d}}`2$0`Ac_r`0k`1;k=@y(k);`Kc=' '+s.d.`u,i=c`4' '+k+@e,e=i<0?i:c`4';',i),v=i<0?'':@Yc`3i+2+k`C,e<0?c`C:e));`"
+"2v$H[[B]]'?v:''`Ac_w`0k,v,e`1,d=$v(),l=s.`u@7,t;v`e+v;l=l?$Gl)`D$M`5^t@Ct=(v!`e?^Fl?l:0):-60)`5t){e`Z;e.setTime(e`T+(t*1000))}`lk@Cs.d.`u=k+'`Pv!`e?v:'[[B]]')+'; path=/;'+(^t?' expires='+e.toGMT^3("
+")#9`j+(d?' domain='+d#9`j;`2^Vk)==v}`20`Aeh`0o,e,r,f`1,b='s^ne+'^ns^sn,n=-1,l,i,x`5!^Xl)^Xl`U;l=^Xl;^Bi=0;i<l`C&&n<0;i++`Hl[i].o==o&&l[i].e==e)n=i`ln<0@gi;l[n]`E}x#Gx.o=o;x.e=e;f=r?x.b:f`5r||f){x.b"
+"=r?0:o[e];x.o[e]=f`lx.b){x.o[b]=x.b;`2b}`20`Acet`0f,a,t,o,b`1,r,^d`5`O>=5^m!s.^e||`O>=7)){^d`7's`Gf`Ga`Gt`G`Ke,r@O^A$Na)`br=s.m(t)?s#Fe):t(e)}`2r^Rr=^d(s,f,a,t)^z@ts.^f^Eu`4$n4@d0)r=s.m(b)?s[b](a):"
+"b(a);else{^X(`F,'@F',0,o);^A$Na`Reh(`F,'@F',1)}}`2r`Ag^Tet`0e`1;`2`w`Ag^Toe`7'e`G`Ks=`9,c;^X(^1,\"@F\",1`Re^T=1;c=s.t()`5c)s.d.write(c`Re^T=0;`2@p'`Rg^Tfb`0a){`2^1`Ag^Tf`0w`1,p=w^0,l=w`J;`w=w`5p&&p"
+"`J!=l&&p`J^5==l^5){`w=p;`2s.g^Tf(`w)}`2`w`Ag^T`0`1`5!`w){`w=`F`5!s.e^T)`w=s.cet('g^T^u`w,'g^Tet',s.g^Toe,'g^Tfb')}`2`w`Amrq`0u`1,l=@1],n,r;@1]=0`5l)^Bn=0;n<l`C;n++){r#Gs.mr(0,0,r.r,0,r.t,r.u)}`Abr`"
+"0id,rs`1`5@m`a$e^W@Nbr',rs))$1l=rs`Aflush`a`0`1;s.fbr(0)`Afbr`0id`1,br=^V@Nbr')`5!br)br=$1l`5br`H!@m`a)^W@Nbr`G'`Rmr(0,0,br)}$1l=0`Amr`0@q,q,$oid,ta,u`1,dc=$w,t1=s.`x@n,t2=s.`x@nSecure,ns=s.`c`ispa"
+"ce,un=u?u:$Ys.f$S,unc=`v$p'_`G-'),r`E,l,imn=@Ni^n($S,im,b,e`5!rs){rs=@u'+(@3?'s'`j+'://'+(t1?(@3@W2?t2:t1):($Y(@3?'102':unc))+'.'+($w?$w:112)+'.2o7.net')@fb/ss/'+^C+'/'+(s.$i?'5.1':'1'@fH.17/'+@q+'"
+"?AQB=1&ndh=1'+(q?q`j+'&AQE=1'`5^Y@Ls.^f`H`O>5.5)rs=^j$o4095);`mrs=^j$o2047)`lid){$1(id,rs);$h}`ls.d.images&&`O>=3^m!s.^e||`O>=7)^m@R<0||`O>=6.1)`H!s.rc)s.rc`E`5!^O){^O=1`5!s.rl)s.rl`E;@1n]`U;set@5'"
+"@t^1`hl)^1.`9@8',750)^zl=@1n]`5l){r.t=ta;r.u=un;r.r=rs;l[l`C]=r;`2''}imn+='^n^O;^O++}im=`F[imn]`5!im)im=`F[im@onew Image;im@0l=0;im.^v`7'e`G^S@0l=1`5^1`hl)^1.`9@8^Rim@I=rs`5rs`4$2=@d0^m!ta||ta`t_se"
+"lf$Ia`t_top'||(`F.^w@Wa==`F.^w))){b=e`Z;^4!im@0l&&e`T-b`T<500)e`Z}`2''}`2'<im'+'g sr'+'c=\"'+rs+'\" width=1 $j=1 border=0 alt=\"\">'`Agg`0v`1`5!`F['s^nv])`F['s^nv]`e;`2`F['s^nv]`Aglf`0t,a`Ht`30,2)`"
+"t$Z`32);`Ks=^S,v=$3t)`5v)s#Dv`Agl`0v`1`5$x)`Lv,`G,'gl^u0)`Agv`0v`1;`2s['vpm^nv]?s['vpv^nv]:(s[v]?s[v]`j`Ahavf`0t,a`1,b=t`30,4),x=t`34),n=^Fx),k='g^nt,m='vpm^nt,q=t,v=s.`N@UVa$oe=s.`N@U^Qs,mn;@X$4t)"
+"`5s.@G||^D||^p`H^p^Epe`30,4)$H@G_'){mn=^p`30,1)`D()+^p`31)`5$5){v=$5.`xVars;e=$5.`x^Qs}}v=v?v+`G+^Z+`G+^Z2:''`5v@L`Lv,`G,'is^ut))s[k]`e`5t`t$k'&&e)@Xs.fs(s[k],e)}s[m]=0`5t`t^K`ID`6`cID`Ivid`6^I@Bg'"
+"`d`Bt`t`X@Br'`d`Bt`tvmk`Ivmt`6@E@Bce'`5s[k]&&s[k]`D()`tAUTO')@X'ISO8859-1';`Bs[k]^Eem==2)@X'UTF-8'}`Bt`t`c`ispace`Ins`6c`V`Icdp`6`u@7`Icl`6^o`Ivvp`6@H`Icc`6$R`Ich`6#0@6ID`Ixact`6@r`Iv0`6^U`Is`6^2`I"
+"c`6`o^k`Ij`6`f`Iv`6`u@9`Ik`6`z@2`Ibw`6`z^b`Ibh`6`g`Ict`6^x`Ihp`6p^J`Ip';`B$tx)`Hb`tprop`Ic$J;`Bb`teVar`Iv$J;`Bb`thier@Bh$J`d`ls[k]@W$H`N`i'@W$H`N^M')$6+='&'+q+'`Ps[k]);`2''`Ahav`0`1;$6`e;`L^a,`G,'h"
+"av^u0);`2$6`Alnf`0^c`8^r`8:'';`Kte=t`4@e`5t@We>0&&h`4t`3te$O>=0)`2t`30,te);`2''`Aln`0h`1,n=s.`N`is`5n)`2`Ln,`G,'ln^uh);`2''`Altdf`0^c`8^r`8:'';`Kqi=h`4'?^Rh=qi>=0?h`30,qi):h`5#Ah`3h`C-(t`C$O`t.'+t)"
+"`21;`20`Altef`0^c`8^r`8:''`5#Ah`4t)>=0)`21;`20`Alt`0h`1,lft=s.`N^PFile^Ms,lef=s.`NEx`n,@s=s.`NIn`n;@s=@s?@s:`F`J^5^w;h=h`8`5s.`x^PLinks&&lf#A`Llft,`G$yd^uh))`2'd'`5s.`x@D&&h`30,1)$H# '^mlef||@s)^m!"
+"lef||`Llef,`G$ye^uh))^m!@s$e`L@s,`G$ye^uh)))`2'e';`2''`Alc`7'e`G`Ks=`9,b=^X(^S,\"`k\"`R@G=@w^S`Rt(`R@G=0`5b)`2^S$f`2@p'`Rbc`7'e`G`Ks=`9,f,^d`5s.d^Ed.all^Ed.all.cppXYctnr)$h;^D=e@I`S?e@I`S:e$T;^d`7"
+"\"s\",\"`Ke@O@t^D^m^D.tag`i||^D^0`S||^D^0Node))s.t()`b}\");^d(s`Reo=0'`Roh`0o`1,l=`F`J,h=o^h?o^h:'',i,j,k,p;i=h`4':^Rj=h`4'?^Rk=h`4'/')`5h^mi<0||(j>=0&&i>j)||(k>=0&&i>k))$Lo`Y&&o`Y`C>1?o`Y:(l`Y?l`Y"
+"`j;i=l.path^w^6/^Rh=(p?p+'//'`j+(o^5?o^5:(l^5?l^5`j)+(h`30,1)$H/'?l.path^w`30,i<0?0:i@f'`j+h}`2h`Aot`0o){`Kt=o.tag`i;t=t@W`D?t`D$M`5t`tSHAPE')t`e`5t`Ht`tINPUT'&&@4&&@4`D)t=@4`D();`B!#Ao^h)t='A';}`2"
+"t`Aoid`0o`1,^G,p,c,n`e,x=0`5t@L`y$Lo`Y;c=o.`k`5o^h^mt`tA$I`tAREA')^m!c$ep||p`8`4'`o$d0))n@k`Bc@g`vs.rep(`vs.rep$Gc,\"\\r@h\"\\n@h\"\\t@h' `G^Rx=2}`B$U^mt`tINPUT$I`tSUBMIT')@g$U;x=3}`Bo@I@W`tIMAGE')"
+"n=o@I`5n){`y=^jn@v;`yt=x}}`2`y`Arqf`0t,un`1,e=t`4@e,u=e>=0?`G+t`30,e)+`G:'';`2u&&u`4`G+un+`G)>=0?@Yt`3e$O:''`Arq`0un`1,c=un`4`G),v=^V@Nsq'),q`e`5c<0)`2`Lv,'&`Grq^u$S;`2`L$p`G,'rq',0)`Asqp`0t,a`1,e="
+"t`4@e,q=e<0?'':@Yt`3e+1)`Rsqq[q]`e`5e>=0)`Lt`30,e),`G@b`20`Asqs`0$pq`1;^7u[u@oq;`20`Asq`0q`1,k=@Nsq',v=^Vk),x,c=0;^7q`E;^7u`E;^7q[q]`e;`Lv,'&`Gsqp',0);`L^C,`G@bv`e;^B@x^7u`Q)^7q[^7u[x]]+=(^7q[^7u[x"
+"]]?`G`j+x;^B@x^7q`Q&&^7q[x]^mx==q||c<2)){v+=(v#8'`j+^7q[x]+'`Px);c++}`2^Wk,v,0)`Awdl`7'e`G`Ks=`9,r=@p,b=^X(`F,\"^v\"),i,o,oc`5b)r=^S$f^Bi=0;i<s.d.`Ns`C@A{o=s.d.`Ns[i];oc=o.`k?\"\"+o.`k:\"\"`5(oc`4$"
+"B<0||oc`4\"@0oc(\")>=0)&&oc`4$W<0)^X(o,\"`k\",0,s.lc);}`2r^R`Fs`0`1`5`O>3^m!^Y$es.^f||`O#E`Hs.b^E$D^Q)s.$D^Q('`k',s.bc);`Bs.b^Eb.add^Q$A)s.b.add^Q$A('clic$a,false);`m^X(`F,'^v',0,`Fl)}`Avs`0x`1,v=s"
+".`c^N,g=s.`c^N#5k=@Nvsn^n^C+(g?'^ng`j,n=^Vk),e`Z,y=e.g@K);e.s@Ky+10@l1900:0))`5v){v*=100`5!n`H!^Wk,x,e))`20;n=x`ln%10000>v)`20}`21`Adyasmf`0t,m`H#Am&&m`4t)>=0)`21;`20`Adyasf`0t,m`1,i=t?t`4@e:-1,n,x"
+"`5i>=0&&m){`Kn=t`30,i),x=t`3i+1)`5`Lx,`G,'dyasm^um))`2n}`20`Auns`0`1,x=s.`MSele@6,l=s.`MList,m=s.`MM$s,n,i;^C=^C`8`5x&&l`H!m)m=`F`J^5`5!m.toLowerCase)m`e+m;l=l`8;m=m`8;n=`Ll,';`Gdyas^um)`5n)^C=n}i="
+"^C`4`G`Rfun=i<0?^C:^C`30,i)`Asa`0un`1;^C=un`5!@S)@S=un;`B(`G+@S+`G)`4$S<0)@S+=`G+un;^Cs()`Am_i`0n,a`1,m,f=n`30,1),r,l,i`5!`Wl)`Wl`E`5!`Wnl)`Wnl`U;m=`Wl[n]`5!a&&m&&m._e@Lm^s)`Wa(n)`5!m){m`E,m._c=@Nm"
+"';m^sn=`F`hn;m^sl=s^sl;m^sl[m^s@om;`F`hn++;m.s=s;m._n=n;m._l`U('_c`G_in`G_il`G_i`G_e`G_d`G_dl`Gs`Gn`G_r`G_g`G_g1`G_t`G_t1`G_x`G_x1`G_l'`Rm_l[@om;`Wnl[`Wnl`C]=n}`Bm._r@Lm._m){r=m._r;r._m=m;l=m._l;^B"
+"i=0;i<l`C@A@tm[l[i]])r[l[i]]=m[l[i]];r^sl[r^s@or;m=`Wl[@or`lf==f`D())s[@om;`2m`Am_a`7'n`Gg`G@t!g)g=#2;`Ks=`9,c=s[$V,m,x,f=0`5!c)c=`F$u$V`5c&&s_d)s[g]`7\"s\",s_ft(s_d(c)));x=s[g]`5!x)x=`F$ug];m=`Wi("
+"n,1)`5x){m^s=f=1`5(\"\"+x)`4\"fun@6\")>=0)x(s);`m`Wm(\"x\",n,x)}m=`Wi(n,1)`5@Zl)@Zl=@Z=0;`pt();`2f'`Rm_m`0t,n,d){t='^nt;`Ks=^S,i,x,m,f='^nt`5`Wl&&`Wnl)^Bi=0;i<`Wnl`C@A{x=`Wnl[i]`5!n||x==n){m=`Wi(x)"
+"`5m[t]`Ht`t_d')`21`5d)m#Fd);`mm#F)`lm[t+1]@Lm[f]`Hd)$gd);`m$g)}m[f]=1}}`20`AloadModule`0n,u,d,l`1,m,i=n`4':'),g=i<0?#2:n`3i+1),o=0,f,c=s.h?s.h:s.b,^d`5i>=0)n=n`30,i);m=`Wi(n)`5(l$e`Wa(n,g))&&u^Ed&&"
+"c^E$E`S`Hd){@Z=1;@Zl=1`l@3)u=`vu,@u:`Ghttps:^Rf`7'e`G`9.m_a(\"$J+'\",\"'+g+'\")^R^d`7's`Gf`Gu`Gc`G`Ke,o=0@Oo=s.$E`S(\"script\")`5o){@4=\"text/`o\"`5f)o.^v=f;o@I=u;c.appendChild(o)}`bo=0}`2o^Ro=^d(s"
+",f,u,c)}`mm=`Wi(n);m._e=1;`2m`Avo1`0t,a`Ha[t]||$P)^S#Da[t]`Avo2`0t,a`H#H{a#D^S[t]`5#H$P=1}`Adlt`7'`Ks=`9,d`Z,i,vo,f=0`5`pl)^Bi=0;i<`pl`C@A{vo=`pl[i]`5vo`H!`Wm(\"d\")||d`T-$C>=^8){`pl[i]=0;s.t(@i}`m"
+"f=1}`l`pi)clear@5`pi`Rdli=0`5f`H!`pi)`pi=set@5`pt,^8)}`m`pl=0'`Rdl`0vo`1,d`Z`5!@ivo`E;`L^9,`G$72',@i;$C=d`T`5!`pl)`pl`U;`pl[`pl`C]=vo`5!^8)^8=250;`pt()`At`0vo,id`1,trk=1,tm`Z,sed=Math&&@P$l?@P$r@P$"
+"l()*10000000000000):tm`T,@q='s'+@P$rtm`T/10800000)%10+sed,y=tm.g@K),vt=tm.getDate(@f`sMonth(@f'@ly+1900:y)+' `sHour$K:`sMinute$K:`sSecond$K `sDay()+' `sTimezoneO@z(),^d,^T=s.g^T(),ta`e,q`e,qs`e,$m`"
+"e,vb`E#1^9`Runs()`5!s.td){`Ktl=^T`J,a,o,i,x`e,c`e,v`e,p`e,bw`e,bh`e,^H0',k=^W@Ncc`G@p',0^q,hp`e,ct`e,pn=0,ps`5^3&&^3.prototype){^H1'`5j.m$s){^H2'`5tm.setUTCDate){^H3'`5^Y^E^f&&`O#E^H4'`5pn.toPrecis"
+"ion){^H5';a`U`5a.forEach){^H6';i=0;o`E;^d`7'o`G`Ke,i=0@Oi=new Iterator(o)`b}`2i^Ri=^d(o)`5i&&i.next)^H7'}}}}`l`O>=4)x=^iwidth+'x'+^i$j`5s.isns||s.^e`H`O>=3$Q`f(^q`5`O>=4){c=^ipixelDepth;bw=`F$z@2;b"
+"h=`F$z^b}}$8=s.n.p^J}`B^Y`H`O>=4$Q`f(^q;c=^i^2`5`O#E{bw=s.d.^L`S.o@z@2;bh=s.d.^L`S.o@z^b`5!s.^f^Eb){^d`7's`Gtl`G`Ke,hp=0`qh$b\");hp=s.b.isH$b(tl)?\"Y\":\"N\"`b}`2hp^Rhp=^d(s,tl);^d`7's`G`Ke,ct=0`qc"
+"lientCaps\");ct=s.b.`g`b}`2ct^Rct=^d(s)}}}`mr`e`l$8)^4pn<$8`C&&pn<30){ps=^j$8[pn].^w@v#9`5p`4ps)<0)p+=ps;pn++}s.^U=x;s.^2=c;s.`o^k=j;s.`f=v;s.`u@9=k;s.`z@2=bw;s.`z^b=bh;s.`g=ct;s.^x=hp;s.p^J=p;s.td"
+"=1`l@i{`L^9,`G$72',vb);`L^9,`G$71',@i`ls.useP^J)s.doP^J(s);`Kl=`F`J,r=^T.^L.`X`5!s.^I)s.^I=l^h?l^h:l`5!s.`X@Ls._1_`X#C`X=r;s._1_`X=1}`Wm('g')`5(vo&&$C)$e`Wm('d')`Hs.@G||^D){`Ko=^D?^D:s.@G`5!o)`2'';"
+"`Kp=$4'#4`i'),w=1,^G,@a,x=`yt,h,l,i,oc`5^D&&o==^D){^4o@Ln@W$HBODY'){o=o^0`S?o^0`S:o^0Node`5!o)`2'';^G;@a;x=`yt}oc=o.`k?''+o.`k:''`5(oc`4$B>=0&&oc`4\"@0oc(\")<0)||oc`4$W>=0)`2''}ta=n?o$T:1;h@ki=h`4'"
+"?^Rh=s.`N@c^3||i<0?h:h`30,i);l=s.`N`i?s.`N`i:s.ln(h);t=s.`N^M?s.`N^M`8:s.lt(h)`5t^mh||l))q+=$2=@G^n(t`td$I`te'?@y(t):'o')+(h?$2v1`Ph)`j+(l?$2v2`Pl)`j;`mtrk=0`5s.`x@T`H!p$L$4'^I^Rw=0}^G;i=o.sourceIn"
+"dex`5$3'^y')@g$3'^y^Rx=1;i=1`lp&&n@W)qs='&pid`P^jp,255))+(w#8p#3w`j+'&oid`P^jn@v)+(x#8o#3x`j+'&ot`Pt)+(i#8oi='+i`j}`l!trk@Lqs)`2'';@j=s.vs(sed)`5trk`H@j)$m=s.mr(@q,(vt#8t`Pvt)`j+s.hav()+q+(qs?qs:s."
+"rq(^C)),0,id,ta);qs`e;`Wm('t')`5s.p_r)s.p_r(`R`X`e}^7(qs);^z`p(@i;`l@i`L^9,`G$71',vb`R@G=^D=s.`N`i=s.`N^M=`F@0^y=s.ppu=^p=^pv1=^pv2=^pv3`e`5$x)`F@0@G=`F@0eo=`F@0`N`i=`F@0`N^M`e`5!id@Ls.tc#Ctc=1;s.f"
+"lush`a()}`2$m`Atl`0o,t,n,vo`1;s.@G=@wo`R`N^M=t;s.`N`i=n;s.t(@i}`5pg){`F@0co`0o){`K@J\"_\",1,#B`2@wo)`Awd@0gs`0$S{`K@J$p1,#B`2s.t()`Awd@0dc`0$S{`K@J$p#B`2s.t()}}@3=(`F`J`Y`8`4@us@d0`Rd=^L;s.b=s.d.bo"
+"dy`5$c`S#7`i#Ch=$c`S#7`i('HEAD')`5s.h)s.h=s.h[0]}s.n=navigator;s.u=s.n.userAgent;@R=s.u`4'N$X6/^R`Kapn$F`i,v$F^k,ie=v`4$n'),o=s.u`4'@M '),i`5v`4'@M@d0||o>0)apn='@M';^Y$9`tMicrosoft Internet Explore"
+"r'`Risns$9`tN$X'`R^e$9`t@M'`R^f=(s.u`4'Mac@d0)`5o>0)`O`rs.u`3o+6));`Bie>0){`O=^Fi=v`3ie+5))`5`O>3)`O`ri)}`B@R>0)`O`rs.u`3@R+10));`m`O`rv`Rem=0`5^3#6^l){i=^g^3#6^l(256))`D(`Rem=(i`t%C4%80'?2:(i`t%U0"
+"100'?1:0))}s.sa(un`Rvl_l='^K,`cID,vmk,ppu,@E,`c`ispace,c`V,`u@7,#4`i,^I,`X,@H';^a=^Z+',^o,$R,server,#4^M,#0@6ID,purchaseID,@r,state,zip,$k,products,`N`i,`N^M';^B`Kn=1;n<51;n++)^a+=',prop$J+',eVar$J"
+"+',hier$J;^Z2=',^U,^2,`o^k,`f,`u@9,`z@2,`z^b,`g,^x,pe$q1$q2$q3,p^J';^a+=^Z2;^9=^a+',$i,`c^N,`c^N#5`MSele@6,`MList,`MM$s,`x^PLinks,`x@D,`x@T,`N@c^3,`N^PFile^Ms,`NEx`n,`NIn`n,`N@UVa$o`N@U^Qs,`N`is,@G"
+",eo';$x=pg#1^9)`5!ss)`Fs()",
w=window,l=w.s_c_il,n=navigator,u=n.userAgent,v=n.appVersion,e=v.indexOf('MSIE '),m=u.indexOf('Netscape6/'),a,i,s;if(un){un=un.toLowerCase();if(l)for(i=0;i<l.length;i++){s=l[i];if(s._c=='s_c'){if(s.oun==un)return s;else if(s.fs&&s.sa&&s.fs(s.oun,un)){s.sa(un);return s}}}}
w.s_r=new Function("x","o","n","var i=x.indexOf(o);if(i>=0&&x.split)x=(x.split(o)).join(n);else while(i>=0){x=x.substring(0,i)+n+x.substring(i+o.length);i=x.indexOf(o)}return x");
w.s_d=new Function("x","var t='`^@$#',l='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',d,n=0,b,k,w,i=x.lastIndexOf('~~');if(i>0){d=x.substring(0,i);x=x.substring(i+2);while(d){w=d;i"
+"=d.indexOf('~');if(i>0){w=d.substring(0,i);d=d.substring(i+1)}else d='';b=(n-n%62)/62;k=n-b*62;k=t.substring(b,b+1)+l.substring(k,k+1);x=s_r(x,k,w);n++}for(i=0;i<5;i++){w=t.substring(i,i+1);x=s_r(x"
+",w+' ',w)}}return x");
w.s_fe=new Function("c","return s_r(s_r(s_r(c,'\\\\','\\\\\\\\'),'\"','\\\\\"'),\"\\n\",\"\\\\n\")");
w.s_fa=new Function("f","var s=f.indexOf('(')+1,e=f.indexOf(')'),a='',c;while(s>=0&&s<e){c=f.substring(s,s+1);if(c==',')a+='\",\"';else if((\"\\n\\r\\t \").indexOf(c)<0)a+=c;s++}return a?'\"'+a+'\"':"
+"a");
w.s_ft=new Function("c","c+='';var s,e,o,a,d,q,f,h,x;s=c.indexOf('=function(');while(s>=0){s++;d=1;q='';x=0;f=c.substring(s);a=s_fa(f);e=o=c.indexOf('{',s);e++;while(d>0){h=c.substring(e,e+1);if(q){i"
+"f(h==q&&!x)q='';if(h=='\\\\')x=x?0:1;else x=0}else{if(h=='\"'||h==\"'\")q=h;if(h=='{')d++;if(h=='}')d--}if(d>0)e++}c=c.substring(0,s)+'new Function('+(a?a+',':'')+'\"'+s_fe(c.substring(o+1,e))+'\")"
+"'+c.substring(e+1);s=c.indexOf('=function(')}return c;");
c=s_d(c);if(e>0){a=parseInt(i=v.substring(e+5));if(a>3)a=parseFloat(i)}else if(m>0)a=parseFloat(u.substring(m+10));else a=parseFloat(v);if(a>=5&&v.indexOf('Opera')<0&&u.indexOf('Opera')<0){w.s_c=new Function("un","pg","ss","var s=this;"+c);return new s_c(un,pg,ss)}else s=new Function("un","pg","ss","var s=new Object;"+s_ft(c)+";return s");return s(un,pg,ss)}


//Statistics support
var ncbi=(typeof(ncbi)=="undefined")?{}:ncbi;
ncbi.st = function() {
   this.init();  
}
ncbi.st.getInstance = function() {
   if (!ncbi.st.__inst__) {
      ncbi.st.__inst__ = new ncbi.st();
   }
   return ncbi.st.__inst__;
}
ncbi.st.attrEquals = function(attr, value) {
   return function(node) {
      var a = node.getAttribute(attr);
      return a && (a.toLowerCase() == value.toLowerCase());
   }
}
ncbi.st.match = function(expr, str) {
     return (typeof(expr) == 'string') ? (str == expr) : str.match(expr);
};
ncbi.st.metas = function(expr) {
   var m = document.getElementsByTagName("meta");
   var result = [];
   for (var i = 0; i < m.length; i++) {
     if (ncbi.st.match(expr, m[i].name)) {
        result.push(m[i].getAttribute("content"));
     }    
   }
   return result;
};
ncbi.st.meta = function(name) {
  var l = ncbi.st.metas(name);
  return l.length > 0 ? l[0] : null;
};
ncbi.st.inputs = function(expr) {
   var inp = document.getElementsByTagName("input");
   result = [];
   for (var i = 0; i < inp.length; i++) {
     if (ncbi.st.match(expr, inp[i].name)) {
        result.push(inp[i].value);
     }    
   }
   return result;
};
ncbi.st.prototype = {
   init: function() {
      this.phid = ncbi.st.meta("ncbi_phid");
      this.pdid = ncbi.st.meta("ncbi_pdid");
      this.pcid = ncbi.st.meta("ncbi_pcid");
      this.tl = new Date().getTime(); 
      this.eventHandlers = {};
      this.nodeIdIndex = 0;
      var oThis = this;
      this._chain = function(event, dict) {
         oThis._note(event, dict);
      };
   },
   makeNodeId: function() {
      return "st" + this.nodeIdIndex++;
   }, 
   _add: function(node, eventName, func) {
      var oThis = this;
      var oFunc = func;
      node.id = node.id || this.makeNodeId();
      var eh = this.eventHandlers[node.id] = this.eventHandlers[node.id] || {};
      if (eh[eventName]) {
         var oldHandler = eh[eventName];
         eh[eventName] = function(event, dict) {
            if (oFunc && (oFunc.call(oThis, event, dict) === false)) {
               return;
            }
            oldHandler.call(oThis, event, dict);
         };
      } else {
         eh[eventName] = function(event, dict) {
             if (oFunc && (oFunc.call(oThis, event, dict) === false)) {
                return;
             }
             oThis._chain(event, dict);
             oThis.xm(dict);                      
         };
         utils.addEvent(node, eventName, function(event) {
            eh[eventName].call(oThis, event, {});
         });
      }
   },
   onactivate: function(callback) {
      var oThis = this;
      if (oThis._chain) {
         var old = oThis._chain;
         oThis._chain = function(event, dict) {
            old(event, dict);
            callback(event, dict)
         };
      } else {
         oThis._chain = callback;
      }
   },
   _note: function(event, dict) {
     var target = (event && event.target);
     var now = new Date().getTime();
     dict.tl = this.tl.toString(16);            
     dict.td = now - this.tl;                   
     if (event) {
       dict.et = event.type.toLowerCase();      
     }
     if (target) {
        dict.tt = target.tagName.toLowerCase(); 
        dict.ti = target.id;                    
        dict.tn = target.name;                  
        dict.ts = target.getAttribute("sid");   
     }
     dict.phid = this.phid;                     
     dict.pdid = this.pdid;                     
   },
   _onevent: function(event, dict) {
     if (this._chain) {
        this._chain(event, dict);
     }
   },
   withId: function(nodeId) {
      return new ncbi.st.rule(this).withId(nodeId);
   },
   withName: function(nodeName) {
      return new ncbi.st.rule(this).withName(nodeName);
   },
   withNode: function(node) {
      return new ncbi.st.rule(this).withNode(node);
   },
   withNodeList: function(nodeList) {
      return new ncbi.st.rule(this).withNodeList(nodeList);
   },
   withTag: function(tagName) {
      return new ncbi.st.rule(this).withTag(tagName);
   },
   xm: function(dict) {
        var cv = "";
        for (var name in dict) {
           if (cv != "") {
              cv += "&";
           }
           cv += encodeURIComponent(name);
           cv += "=";
           cv += encodeURIComponent(dict[name]);
        }
        var rdp = new RemoteDataProvider("st.cgi?");
        rdp.onError = rdp.onTimeout = function() { console.info ("st: oops"); };
        rdp.onSuccess = function() { console.info("st: OK"); }
        rdp.Get(cv);
   }
};
ncbi.st.rule = function(st) {
   this.init(st);
}
ncbi.st.rule.prototype = {
   init: function(st) {
      this._st = st;
      this._nodes = [];
      this._filter = function() { return true; }
      this._exec = function() { };
   },
   withId: function(nodeId) {
      return this.withNode(document.getElementById(nodeId));
   },
   withName: function(nodeName) {
      return this.withNodeList(document.getElementsByName(nodeName));
   },
   withTag: function(tag) {
      return this.withNodeList(document.getElementsByTagName(tag));
   },
   withNode: function(node) {
      if (node) {
         this._nodes = [ node ];
      }
      return this;
   },
   withNodeList: function(nodeList) {
      if (nodeList.length > 0) {
         this._nodes = nodeList;
      }
      return this;
   },
   filter: function(f, u) {
      var newNodes = [];
      for (var i = 0; i < this._nodes.length; i++) {
         var thisNode = this._nodes[i];
         if (f(thisNode, u)) {
            newNodes.push(thisNode);
         }
      }
      this._nodes = newNodes;
      return this;
   },
   hasAttr: function(attrName, attrValue) {
      var oThis = this;
      return oThis.filter(function(node) {
         var v = node.getAttribute(attrName);
         if (typeof(attrValue) != 'undefined') {
            return v == attrValue;
         } else {
            return (typeof(v) != 'null');
         }
      });
   },
   on: function(eventname, f) {
      for (var i = 0; i < this._nodes.length; i++) {
         this._st._add(this._nodes[i], eventname, f);
      }
      return this;
   }
};
utils.addEvent(window, "load", function() {
   ncbi.st.getInstance();
});

Portal.Portlet.Entrez_DisplayBar = Portal.Portlet.extend({

	init: function(path, name, notifier) {
		console.info("Created DisplayBar");
		this.base(path, name, notifier);
		
		// save the original display/presentation value when page loads
		Portal.Portlet.Entrez_DisplayBar.originalPresentation = this.getValue("LastPresentation");
		console.info("Original Presentation is: " + Portal.Portlet.Entrez_DisplayBar.originalPresentation);
		
	},
	
	
	send: {
   
   		'PresentationChange': null,
		'TabCmd': null,
		'Cmd': null, 
		'PageSizeChanged': null
	},
	
	
	
	listen: {
		
		/* browser events */
			
		"sPresentation<change>": function(e, target, name){
			//get attribute values of selected option
			var dbfrom = target.options[target.selectedIndex].getAttribute('dbfrom');
			var dbto = target.options[target.selectedIndex].getAttribute('dbto');
			var cmd = target.options[target.selectedIndex].getAttribute('cmd');
			var readablename = target.options[target.selectedIndex].getAttribute('readablename');
			
			//call function to process
			this.ProcessPresentationChange(dbfrom, dbto, cmd, readablename, e, target, name);
		},
		
		
		"sPageSize<change>": function(e, target, name){		
			this.ProcessPageSizeChange(e, target, name);
		},
		
		
		"sSort<change>": function(e, target, name){
			this.ProcessSortChange(e, target, name);
		},
		
		
		"sSendTo<change>": function(e, target, name){
			var sendto = target.value;
			this.setValue("SendTo", sendto);
			
			this.SendToChanged(sendto, e, target, name); 
		},
		
		
		/* messages from message bus*/
		
		'Cmd' : function(sMessage, oData, sSrc) {
		    this.ProcessCmdChange(sMessage, oData, sSrc);
		},
		
		'ResetSendTo' : function(sMessage, oData, sSrc) {
			this.setValue("SendTo", oData.value);
				// reset sendto in selector
			var sSendToInputs = this.getInputs("sSendTo");
			for (var j = 0; j < sSendToInputs.length; j++){
				sSendToInputs[j].value = '';
			}
		},
		
		'newPresentation' : function(sMessage, oData, sSrc) {
			this.setValue("Presentation", oData.value);
		},
		
		'newPageSize' : function(sMessage, oData, sSrc) {
			this.setValue("PageSize", oData.value);
		},
		
		'newSort' : function(sMessage, oData, sSrc) {
			this.setValue("Sort", oData.value);
		}
	
	},
	
	ProcessPresentationChange: function(dbfrom, dbto, cmd, readablename, e, target, name) {		
		//send Cmd
		this.send.Cmd({
			'cmd': cmd
		});
		
		//Send link information and cmd
		this.send.PresentationChange({
			'dbfrom': dbfrom,
			'dbto': dbto,
			'linkname': target.value,
			'readablename': readablename
		});	
		
		// set Presentation
		this.setValue("Presentation", target.value);
	},
	
	
	ProcessPageSizeChange: function(e, target, name){
		//send Cmd
		this.send.Cmd({
			'cmd': target.getAttribute('cmd')
		});	
		//send PageSizeChanged
		this.send.PageSizeChanged({
			'size': target.value
		});	
		//set PageSize
		this.setValue("PageSize", target.value);
	},
	
	
	ProcessSortChange: function(e, target, name){
		//send Cmd
		this.send.Cmd({
			'cmd': target.getAttribute('cmd')
		});	
		//set Sort
		this.setValue("Sort", target.value);
	},
	
	
	SendToChanged: function(sendto, e, target, name) {
		if(sendto == 'Remove from Clipboard'){
			if(confirm('Are you sure you want to delete these items from Clipboard?')){
				this.send.Cmd({'cmd': sendto});
				document.forms[0].submit();
			}
			else{
				this.setValue("SendTo", '');
				// reset sendto in selector
				var sSendToInputs = this.getInputs("sSendTo");
				for (var j = 0; j < sSendToInputs.length; j++){
					sSendToInputs[j].value = '';
				}
			}
		}
		else if(sendto == 'File'){
			this.send.Cmd({'cmd': sendto});
		}
		else if(sendto == 'Mail'){
			this.send.Cmd({'cmd': sendto});
			this.send.TabCmd({'tab': 'E-mail'});
			document.forms[0].submit();
		}
		else if(sendto == 'My NCBI Collections'){
			this.send.Cmd({'cmd': sendto});
		}
		else if(sendto == ''){
			this.send.Cmd({'cmd': sendto});
		}
		else{
			this.send.Cmd({'cmd': sendto});
			document.forms[0].submit();
		}
	},
	
	'ProcessCmdChange': function(sMessage, oData, sSrc){
	    if (oData.cmd == 'PageChanged'){
			/* Reset Send To on page change to avoid sendto having previous value due to 
			using browser back button after viewing text format reports.*/
			this.setValue("SendTo", '');
				// reset sendto in selector
			var sSendToInputs = this.getInputs("sSendTo");
			for (var j = 0; j < sSendToInputs.length; j++){
				sSendToInputs[j].value = '';
			}
		}
		
		this.BackButtonCompatibilityForCmdChange(oData.cmd);
	},
	
	'BackButtonCompatibilityForCmdChange': function(cmd){
	    // for back button compatibility, keep presentation to old value for any cmds 
			// except when cmd indicates value was changed from DisplayBar.
		if (cmd != 'DisplayChanged' && cmd != 'Link' && cmd != 'SendMail'){
			// set Presentation
			this.setValue("Presentation", Portal.Portlet.Entrez_DisplayBar.originalPresentation);
		}
	}
},
{
	originalPresentation: ''
});


Portal.Portlet.Pubmed_DisplayBar = Portal.Portlet.Entrez_DisplayBar.extend({

	init: function(path, name, notifier) {
		console.info("Created inherited DisplayBar");
		this.base(path, name, notifier);
	},
	
	// need to add RSS to sSendTo
	SendToChanged: function(sendto, e, target, name) {
		if(sendto == 'RSS'){
			this.send.Cmd({'cmd': sendto});
			this.send.TabCmd({'tab': 'RSS Feed'});
			document.forms[0].submit();
		}
		else{
			 this.base(sendto, e, target, name);
		}
	}
});




/* 
   Handles 'Enter' key in Pager portlet.
   Requires: debug, utils, notify.
*/

Portal.Portlet.Pager = Portal.Portlet.extend ({

   init: function (path, name, notifier) 
   {		
		var oThis = this;
		this.base (path, name, notifier);

		console.info ("Created " + name);

   },
   
   
   send: {
   	'Cmd': null
   },
   
   
   listen: {
		// page events
   
		//"CurrPage<keypress>" : function(e, target, name){
		"PageNumber<keypress>" : function(e, target, name){
			if ((e.keyCode || e.which) == 13) {
console.info(target.value);
				// this.CheckPageNumber(this.getValue("CurrPage"));
				this.CheckPageNumber(target.value);
				// Emulate CurrPage action
				this.send.Cmd({'cmd': 'PageChanged'});
				document.forms[0].submit();  /// FIXME This is *evil*.
			}
		},
	
		"SetPage<click>" : function(e, target, name){
					
			//should be the first input of the target's parent (there are hidden inputs after)
			//also seems <em>kind of</em> *evil*  - eddie
			var newPage = target.parentNode.getElementsByTagName('input')[0].value;
			
			// this.CheckPageNumber(this.getValue("CurrPage"));
			this.CheckPageNumber(newPage);
			this.send.Cmd({'cmd': 'PageChanged'});
		},
		
		"Prev<click>" : function(e, target, name){
			// console.info ("CurrPage changed to: " + this.getValue("Prev:Page"));
			console.info ("CurrPage changed to: " + target.getAttribute('newPage'));
			this.send.Cmd({'cmd': 'PageChanged'});
			// this.setValue("CurrPage", this.getValue("Prev:Page"));
			this.setValue("CurrPage", target.getAttribute('newPage'));
		},
		
		"Next<click>" : function(e, target, name){
			// console.info ("CurrPage changed to: " + this.getValue("Next:Page"));
			console.info ("CurrPage changed to: " + target.getAttribute('newPage'));
			this.send.Cmd({'cmd': 'PageChanged'});
			// this.setValue("CurrPage", this.getValue("Next:Page"));
			this.setValue("CurrPage", target.getAttribute('newPage'));
		},
		
		// messages

		// when pagesize is changed, pager adjusts page number to keep displaying the start 
		// the start item of the initial page
		'PageSizeChanged' : function(sMessage, oData, sSrc) {
			if (this.getValue("CurrPage")){
				var start = (this.getValue("InitialPageSize") * 
						(this.getValue("CurrPage") - 1)) + 1;
				var newPage = parseInt((start - 1)/oData.size) + 1;
				this.setValue("CurrPage", newPage);
			}
		}

   },


  CheckPageNumber: function(page) { 
    var npage = parseInt(page); 
    var nmax = parseInt(this.getValue("MaxPage"));
    
    if (isNaN(npage) || isNaN(nmax) || npage <= 0 || npage > nmax) { 
        console.info("Invalid page number: " + page); 
        this.setValue("CurrPage", '1'); 
    } 
    else { 
        this.setValue("CurrPage", npage);
    } 
  }

});



Portal.Portlet.Entrez_RVBasicReport = Portal.Portlet.extend({
	
	init: function(path, name, notifier) {
		console.info("Created report portlet");
		this.base(path, name, notifier);
	},
	
	send: {
		'ItemSelectionChanged': null
	},
	
	listen: {
		"uid<click>" : function(e, target, name){
			this.send.ItemSelectionChanged( { 'id': target.value,
			                                  'selected': target.checked });
		},

		"PullDownLinks<change>" : function(e, target, name){
			// get selected option value
			var option = target.options[target.selectedIndex].getAttribute('value');
			console.info(option);
			if (option != ''){
				// if help, show help information
				if (option == 'help') {
					window.open('/entrez/query/static/popup.html','Links_Help','resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,alwaysRaised=no,depend=no,width=400,height=500');
				}
				// otherwise link to URL in option value
				else{
					window.top.location=option;
				}
			}
		}

	}
	
});
   


Portal.Portlet.Pubmed_RVAbstractPlus = Portal.Portlet.extend({
   
   init: function(path, name, notifier) {
      console.info("Created Pubmed_RVDocsum");
      this.base(path, name, notifier);
   },
 
   logicalOp: function(key, op) {
      this.send.TermLogicalOp({ 'op': op, 'key': key });
   },
   
   send: {
      'TermLogicalOp': null,
	  'ItemSelectionChanged': null
   },
   
   listen: {
      "uid<click>" : function(e, target, name){
         var inputs = this.getInputs("uid");
         var selections = [];
         for (var j = 0; j < inputs.length; j++) {
            if (inputs[j].checked) {
               selections.push(inputs[j].value);
            }
         }
		 this.send.ItemSelectionChanged( { 'id': target.value,
			                               'selected': target.checked });
      },

      "PullDownLinks<change>" : function(e, target, name){
         // get selected option value
         var option = target.options[target.selectedIndex].getAttribute('value');
         console.info(option);
         if (option != ''){
            // if help, show help information
            if (option == 'help') {
               window.open('/entrez/query/static/popup.html','Links_Help','resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,alwaysRaised=no,depend=no,width=400,height=500');
            }
            // otherwise link to URL in option value
            else{
               window.top.location=option;
            }
         }
      }
   }
});


function HistViewTerm(term, op, num) {
  $PN('Pubmed_RVAbstractPlus').logicalOp(term, op);
}
var AL_XMLHTTPOBJ;
var AL_Cache = new Object();
var AL_cache_key;
var AL_cur_menu;
var AL_CgiUrl = "/entrez/utils/abstract_link.fcgi";

function AL_getXMLHTTP() {
	try {
		return new ActiveXObject("Msxml2.XMLHTTP")
	} catch(e1) { 
		try { 
			return new ActiveXObject("Microsoft.XMLHTTP")
		} catch(e2) {
			return typeof XMLHttpRequest != "undefined" ? 
			new XMLHttpRequest() : null;
		}
	}
}

var PopUpMenu2_LocalConfig_ActiveLConfig = [
	["ShowCloseIcon","yes"],
	["Help","window.open('/entrez/query/static/popup.html','Links_Help','resizable=no,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,menubar=no,copyhistory=no,alwaysRaised=no,depend=no,width=400,height=500');"],
	["TitleText"," Links "]
]

AL_wait_menu = [
	["UseLocalConfig","ActiveLConfig","",""],
	["Wait","window.top.location='http://www.pubmed.gov'","",""]
]

function AL_get(self, sec, term) {
	if (!AL_XMLHTTPOBJ && !(AL_XMLHTTPOBJ = AL_getXMLHTTP()))  return;
	AL_cache_key = sec + '$' + term;
	if(AL_cur_menu = AL_Cache[AL_cache_key]) {
		PopUpMenu2_Set(AL_cur_menu); 
	} else { // ask server
		// write "wait"
		PopUpMenu2_Set(AL_wait_menu); 
		if(AL_XMLHTTPOBJ.readyState)
			AL_XMLHTTPOBJ.abort();
		AL_XMLHTTPOBJ.onreadystatechange=function() {
			if(AL_XMLHTTPOBJ.readyState == 4 && AL_XMLHTTPOBJ.status == 200) {
 				eval(AL_XMLHTTPOBJ.responseText); // fill AL_cur_menu
				PopUpMenu2_Set(AL_Cache[AL_cache_key] = AL_cur_menu); 
			}
		};
		AL_XMLHTTPOBJ.open("GET", 
			location.protocol+"//"+location.host+AL_CgiUrl+"?db=pubmed&base=1&sec="+sec+"&term="+encodeURIComponent(term), 
			true);
		AL_XMLHTTPOBJ.send(null)
	}    
}


// Extension functions that add JS1.5 features

// forEach iterators from Dean Edwards: http://dean.edwards.name/weblog/2006/07/enum/
// generic enumeration
Function.prototype.forEach = function(object, block, context) {
    for (var key in object) {
        if (typeof this.prototype[key] == "undefined") {
            block.call(context, object[key], key, object);
        }
    }
};

// globally resolve forEach enumeration
var forEach = function(object, block, context) {
    if (object) {
        var resolve = Object; // default
        if (object instanceof Function) {
            // functions have a "length" property
            resolve = Function;
        } else if (object.forEach instanceof Function) {
            // the object implements a custom forEach method so use that
            object.forEach(block, context);
            return;
        } else if (typeof object.length == "number") {
            // the object is array-like
            resolve = Array;
        }
        resolve.forEach(object, block, context);
    }
};

// array-like enumeration
if (!Array.forEach) { // mozilla already supports this
    Array.forEach = function(object, block, context) {
        for (var i = 0; i < object.length; i++) {
            block.call(context, object[i], i, object);
        }
    };
}

 
//Error in Lines 180 - 181
//Resulting from JIRA PP-336, similar to JIRA EZ-1966


// Toggle design pattern
//  <h1 id="src1">This is a Toggle source, bcz another node has toggle=src1</h1>
//  <p toggle="src1">
//    This para is directly shown/hidden by src1
//  </p>
//  <a href="#" id="src2">Click to show/hide</a>
//  <div toggle="src2">
//    <p>This is shown/hidden by its containing div</p>
//    <p>So is this</p>
//  </div>
//  <p toggle="src2">More than one thing can be controlled by a toggle</p>
//
// Src can be "showing" or "hiding" by default.
// Dsts can be class "shown" or "hidden" by default.

Toggle = function(node) {
   this.init(node);
}

// Create a new Toggle with "node" as src
Toggle.prototype = {
   
   init: function(node) {

      // Subclass instance?
      if (typeof(arguments[0]) == 'undefined') return;

      var oThis = this;
      this.node = node;

      // Initialize "showing" variable based on presence of "showing" or
      // "hiding" class. If neither, then showing. Be sure class is
      // set to reflect variable value
      node.showing =
         utils.hasClass(node, "showing") || !utils.hasClass(node, "hiding");
      utils.addClass(node, node.showing ? "showing" : "hiding");
   
      // Set notifier for node
      utils.addEvent(node, "click", function(e) {
         e = e || window.event;
         utils.preventDefault(e);

         var theNode = utils.getTargetObj(e);

         // Send message to global notifier, if one exists
         if (typeof(Notifier) != 'undefined') {
            var notifier = Notifier.getInstance();

            // Notify before change
            notifier.Notify(oThis, "change:" + theNode.id, !theNode.showing);
         }

         // Hide or show based on current state
         if (theNode.showing) {
             oThis.hide();
         } else {
             oThis.show();
         }

      }, false);
      
      utils.addEvent(node, "selectstart", function(e) { utils.preventDefault(e); }, true);
      utils.addEvent(node, "drag", function(e) { utils.preventDefault(e); }, true);

      // Cache "this" for ID lookup
      if (!node.id) {
          node.id = utils.createNewId();
      }
      var m = Toggle.getSrcs();
      m[node.id] = this;
   },

   // Hide targets, and set self to hiding.
   hide: function() {
       var oThis = this;

       oThis.setHiding();
       if (oThis.listeners) {
           forEach(oThis.listeners, function(l) {
               oThis.hideTarget(l);
           });
       }
   },

   // Show targets, and set self to showing.
   show: function() {
       var oThis = this;

       oThis.setShowing();
       if (oThis.listeners) {
           forEach(oThis.listeners, function(l) {
               oThis.showTarget(l);
           });
       }
   },

   // Set own presentation to "showing"
   setShowing: function() {
       utils.addClass(this.node, "showing");
       utils.removeClass(this.node, "hiding");
       this.node.showing = true;
   },

   // Set own presentation to "hiding"
   setHiding: function() {
       utils.addClass(this.node, "hiding");
       utils.removeClass(this.node, "showing");
       this.node.showing = false;
   },

   // Show a target
   showTarget: function(l) {
       utils.addClass(l, "shown");
       utils.removeClass(l, "hidden");
   },

   // Hide a target
   hideTarget: function(l) {
      utils.addClass(l, "hidden");
      utils.removeClass(l, "shown");
   },

   // Add a target to this toggle.
   add: function(target) {
      if (!this.listeners) {
          this.listeners = new Array();
      }
      this.listeners[this.listeners.length] = target;

      if (utils.hasClass(target, "hidden")) {
        this.setHiding();
        this.node.showing = false;
      } else {
        this.setShowing();
        this.node.showing = true;
      }
   }
}

// Show/hide a "target" (a node controlled by the node with the given ID)
Toggle.addTarget = function(srcid, target) {
   var tn = Toggle.findOrMake(srcid);
   tn.add(target);
}

// Assoc array of srcs indexed by their ids
Toggle.getSrcs = function() {
   if (!Toggle.srcs) {
      Toggle.srcs = new Object();
   }
   return Toggle.srcs;
}

// Find or make toggle for given id
Toggle.findOrMake = function(srcid) {
   var ts = Toggle.getSrcs();
   var tn = ts[srcid];
   if (!tn) {
      tn = new Toggle($(srcid));
   }
   return tn;
}

// This dispatches the call to Toggle.onload, which may be
// overridden by instances (subclasses)
Toggle._onload = function() {
   Toggle.onload();
}

// A toggle source node controls other nodes that reference it by id using
// their toggle= attribute. A node may be both a toggle source and destination.
Toggle.onload = function() {


	//commented out because of JIRA EZ-1971, Packed cssQuery not selecting nodes properly
   //var shnodes = cssQuery("[toggle]");
   var shnodes = $AN('toggle', null, null);

   // Now hook up dst nodes
   forEach(shnodes, function(node) {
      // Link toggle node to its source
      var srcid = node.getAttribute("toggle");
      Toggle.addTarget(srcid, node);
   });
}

utils.addEvent(window, 'load', Toggle._onload, false);
// makes an ext js looking portlet w/o using extjs
if (typeof(noext) == 'undefined') {
    noext = {};
}
noext.parseConfig = function(n) {
    var configStr = n.getAttribute('config') || '';
    try {
        var jsonObj = eval('({' + configStr + '})');
    }
    catch(e) {
        if (window.console) {
            console.error(e.message + ' in local config object in noext.Portlet: file: ' + e.fileName + ', line ' + e.lineNumber + '.' );
        }
    }
    return jsonObj;
};
noext.getClassArray = function(n) {
    var classNameStr = n.className;
    return classNameStr.split(' ');
};
noext.getFirstHeader = function(n) {
    var fc = utils.getFirstChild(n);
    if(fc.tagName.search(/^h\d/i) != -1) {
        return fc;
    }
};
noext.Portlet = function(n){
    this.n = n;
    this.headerNode = noext.getFirstHeader(this.n);
    this.headerDiv = document.createElement('div');
    this.bodyDiv = document.createElement('div');
    utils.addClass(this.bodyDiv, 'x-panel-body');
    var configObj = noext.parseConfig(this.n);
    this.collapsible = configObj.collapsible == false ? false : true; 
    this.closeable = configObj.closeable == false ? false : true; 
    this.collapsed = configObj.collapsed == true ? true : false;
    if (this.collapsed == true) {
        utils.addClass(this.n, 'x-panel-collapsed');
        this.bodyDiv.style.display = 'none';
    }
    this.make();
};

noext.Portlet.instances = [];
noext.Portlet.ready = function() {
    var nodes = $C('port', 'class', document, 'div');
    for (var i = 0; i < nodes.length; i++) {
        var n = nodes[i];
        if (utils.hasClass(n, 'norender')) {
            continue;
        }
        portlet = new noext.Portlet(n);
    }
}
noext.Portlet.prototype = {
    make: function() {
        // put a parent aruond body content
        //var innerContainingDiv = document.createElement('div');
        utils.addClass(this.n, 'x-panel');
        //this.n.style.width = 'auto';
        utils.addClass(this.headerDiv, 'x-panel-header');
        utils.addClass(this.headerDiv, 'x-unselectable');
        this.n.insertBefore(this.headerDiv, this.headerNode);
        var header = this.n.removeChild(this.headerNode);
        var toolCloseA = document.createElement('a');
        toolCloseA.setAttribute('href', '#');
        utils.addClass(toolCloseA, 'x-tool');
        utils.addClass(toolCloseA, 'x-tool-close');
        var toggleA = document.createElement('a');
        toggleA.setAttribute('href', '#');
        utils.addClass(toggleA, 'x-tool');
        utils.addClass(toggleA, 'x-tool-toggle');
        if (this.closeable == true) {
            this.headerDiv.appendChild(toolCloseA);
        }
        if (this.collapsible) {
            this.headerDiv.appendChild(toggleA);
        }
        this.headerDiv.appendChild(header);
        utils.addClass(this.headerNode, 'x-panel-header-text');
        this.toolCloseA = toolCloseA;
        this.toggleA = toggleA;
        this.reParent();
        this.setEvents();
    }, 
    reParent: function() {
        var bodyElems = [];
        utils.insertAfter(this.n, this.bodyDiv, this.headerDiv);
        for (var i = this.n.childNodes.length -1; i >= 0; i--) {
            var fc = this.n.childNodes[i];
            if (fc != this.headerDiv && fc != this.bodyDiv) { 
                bodyElems.push(this.n.removeChild(fc));
            }
            for (var j = 0; j < bodyElems.length; j++) {
                this.bodyDiv.appendChild(bodyElems[j]);
            }
        }
    },
    setEvents: function(toggleA) {
        var that = this;
        utils.addEvent(this.toggleA, 'click', function(e) { that.toggle(e)});
        utils.addEvent(this.toolCloseA, 'click', function(e) { that.close(e)});
    }, 
    toggle: function(e) {
        utils.preventDefault(e);
        if (utils.hasClass(this.n, 'x-panel-collapsed')) {
            utils.removeClass(this.n, 'x-panel-collapsed')
            this.bodyDiv.style.display = 'block';
        } else {
            utils.addClass(this.n, 'x-panel-collapsed');
            this.bodyDiv.style.display = 'none';
        }
    },
    close: function(e) {
        utils.preventDefault(e); 
        this.n.parentNode.removeChild(this.n);
    }
};

utils.addEvent(window, 'load', noext.Portlet.ready);

Portal.Portlet.HistoryDisplay = Portal.Portlet.extend({

	init: function(path, name, notifier) {
		console.info("Created History Ad...");
		this.base(path, name, notifier);
    
        // createDebugConsole(); // For debugging IE, of course.
		
		/* IE/Ext.Ncbi.Portlet problem. Some sort of race condition in IE only.
		   This delay ensures that popup initialization occurs last. */		
		
		//setTimeout(function() { //Fixed in Ext.Ncbi 1.5
			// Create ElementPopper for each li.query and li.record
			var elements = cssQuery("li.query, li.record");
			
			for (var i = 0; i < elements.length; i++) {
		       var elem = elements[i];
			   var c = cssQuery(".hidden", elem);
			   if (c && c.length > 0) {
			      var label = (c[0].textContent || c[0].innerText);
			      var cit = getCitation(elem);
			      /*
			      if (utils.hasClass(elem, "record")) {
				    label = "<i class='x'>View </i> " + label;
				  } else if (utils.hasClass(elem, "query")) {
				    label = "<i class='x'>Search </i>" + label;
				  }*/
				  
				  label = "<p id='htbpoptext'>" + label + "</p>";
				  if (cit && cit > ""){ // avoid "undefined" value
				      label = label + "<p id='htbpcit'>" + cit + "</p>";
				  }
			      new ElementPopper(elements[i], label);
			   }			   
			}
		//}, 1);
	},
	
	send: {
      'Cmd': null
      //'Recording': null
    },   
    
    receive: function(responseObject, userArgs) {    
         var cmd = userArgs.cmd;
         var rootNode = document.getElementById('HTDisplay');
         var oldNode = rootNode.lastChild.previousSibling;
         var msgNode = document.createElement("p");
         rootNode.replaceChild(msgNode, oldNode);
         
         var txtNode;    
         var toggleLink = this.getInput('HistoryToggle');     
         if (cmd == 'HTOn') {             
             txtNode = document.createTextNode("Your browsing activity is empty.");
             toggleLink.innerHTML = 'Turn Off';
             toggleLink.textContent = 'Turn Off';   
             toggleLink.setAttribute('cmd', 'HTOff');  
             toggleLink.setAttribute('href', '?cmd=HTOff&'); 
             
             // hide "turn on" link
             var turnHTOn = $("turnOn"); 
             if (turnHTOn != null) {
                 turnHTOn.style.display = 'none';
             }
         }
         else if (cmd == 'HTOff') {             
             txtNode = document.createTextNode("Activity recording is turned off.");             
             toggleLink.innerHTML = 'Turn On';             
             toggleLink.setAttribute('cmd', 'HTOn');
             toggleLink.setAttribute('href', '?cmd=HTOn&'); 
             
             // show up "turn on" link
             var turnHTOn = $("turnOn"); 
             if (turnHTOn != null) {
                 turnHTOn.style.display = 'block';
             }             
         }
         else if (cmd == 'ClearHT') {
             var turnHTOn = $("turnOn"); 
             if (turnHTOn != null && turnHTOn.style.display == 'none') { // HT On
                 txtNode = document.createTextNode("Your browsing activity is empty.");
             }
             else { //HT Off
                 txtNode = document.createTextNode("Activity recording is turned off."); 
             }
         }
         msgNode.appendChild(txtNode);
            
    },
    
	listen: {
	  'Cmd' : function(sMessage, oData, sSrc){
			console.info("Inside Cmd in HistoryDisplay: " + oData.cmd);
			this.setValue("Cmd", oData.cmd);
	  },	  
		
      "HistoryToggle<click>" : function(e, target, name){
         //alert(target.getAttribute("cmd"));
         this.send.Cmd({'cmd': target.getAttribute("cmd")});         
         console.info("Inside HistoryToggle in HistoryDisplay: " + target.getAttribute("cmd"));
         
         var site = document.forms[0]['p$st'].value;
         var cmd =  target.getAttribute("cmd");     
         
         if (cmd.toUpperCase() == 'HTOFF') {
             //var popper = document.getElementById('htbpopper');
             //if (popper != undefined)
             var popper = cssQuery("div.popper");
             //alert(popper.length);
			 if (popper && popper.length > 0) {
			     for (var i = 0; i < popper.length; i++) {
                     popper[i].style.display = 'none';
                 }
             }
                 
         }
               
         // Issue asynchronous call to XHR service, callback is to update the portlet output
	     var resp = xmlHttpCall(site, this.path, cmd, {}, this.receive, {'cmd': target.getAttribute("cmd")}, this);
      }, 
      
      "HistoryOn<click>" : function(e, target, name){
         this.send.Cmd({'cmd': target.getAttribute("cmd")});
         //$PN('Pubmed_ResultsSearchController').getInput('RecordingHistory').value = 'yes';		 
         console.info("Inside HistoryOn in HistoryDisplay: " + target.getAttribute("cmd"));
                
         var site = document.forms[0]['p$st'].value;   
	     var resp = xmlHttpCall(site, this.path, "HTOn", {}, this.receive, {'cmd': target.getAttribute("cmd")}, this);
	     //Portal.requestSubmit();
      },
      
      "ClearHistory<click>" : function(e, target, name){
         this.send.Cmd({'cmd': target.getAttribute("cmd")});	
         
         var popper = document.getElementById('htbpopper');
         if (popper != undefined)             
             popper.style.display = 'none';
         
         var site = document.forms[0]['p$st'].value;   
	     var resp = xmlHttpCall(site, this.path, "ClearHT", {}, this.receive, {'cmd': target.getAttribute("cmd")}, this);	 
      }
    }
});

function getCitation(node) {
   // var withHistorys = cssQuery("*[title]", node); does not work!!!   
   var withTitles = $AN('title', node, '*');
   //alert(withTitles.length + " " + withTitles[0].tagName + " " + withTitles[withTitles.length-1].tagName);
   //alert(withTitles[1].getAttribute('title'));
   if (withTitles.length > 0) {      
      var p = withTitles[0];
      var s = p.getAttribute("title");
      if (s && s > "") { 
          //alert(s);
          p.setAttribute("title", "");
          node._title = s;
          for (var i = 0; i < withTitles.length; i++) {
              withTitles[i].removeAttribute("title");    
          }
      }
      /*else { //fixed in utils.js         
          s = node._title; // required for IE b/c of the bug in $AN
      }*/
   } else {
      s = node._title;
      //alert("old s "+ s);
   }
   return s;
}
//
// Java Module PopDiv_JS
//

//
// Shows and hides a div at a specific location, either (x,y), or relative to
// an element in a specific direction.
//
// Limitations:
//  - height or width must be set on the popper div, or it may not position correctly.
//
// You're probably better off using Popper instead of PopDiv for hover pops. Popper handles mouse events
// correctly.

var PopDiv = function(divId, className) {
   if (document.getElementById(divId)) {
      throw "PopDiv: element with id '" + divId + "' already exists in document";
   }
   this.div = document.createElement("div");
   this.div.id = divId;
   this.div.className = "popper";
   if (className) {
      this.div.className += " " + className;
   }
   
   this.innerdiv = document.createElement("div");
   this.innerdiv.className = "popperInnerDiv";
   
   document.body.appendChild(this.div);
   this.div.appendChild(this.innerdiv);
}

PopDiv.POP_ABOVE = 0;
PopDiv.POP_RIGHT = 1;
PopDiv.POP_BELOW = 2;
PopDiv.POP_LEFT = 3;
PopDiv.POP_CLASSES = ['pop-above', 'pop-right', 'pop-below', 'pop-left'];

PopDiv.POPPED = 'popped';
PopDiv.POP_GETXY = 'pop-getxy';

PopDiv.prototype = {
   // Show it at x, y
   showAt: function(html, x, y) {

      // Set content
      this.innerdiv.innerHTML = html;

      this.div.style.left = x + "px";
      this.div.style.top = y + "px";

      // Pop it
      utils.addClass(this.div, PopDiv.POPPED);

   },

   // Show it near element ("dir" indications direction)
   // Dimensions don't exist if element isn't shown.
   getXY: function() {
      var popped = utils.hasClass(this.div, PopDiv.POPPED);

      if (!popped) {
         utils.addClass(this.div, PopDiv.POPPED);
      }
      var dim = utils.getXY(this.div);
      if (!popped) {
         utils.removeClass(this.div, PopDiv.POPPED);
      }

      return dim;
   },

   hide: function() {
      utils.removeClass(this.div, PopDiv.POPPED);
      if (this.popClass) {
         utils.removeClass(this.div, this.popClass);
         this.popClass = null;
         this.popnode = null;
      }
   },

   // showBy shows a popper adjacent to another item.
   showBy: function(html, elem, dir) {
      var dx = dy = 0;

      // Already popped over a particular popnode
      if (this.popnode && (this.popnode == elem)) {
         return;
      }
      this.popnode = elem;

      // Default direction
      if (typeof(dir) != "number") {
         dir = PopDiv.POP_LEFT;
      }

      // Set class "pop-<direction>": this determines margin
      this.popClass = PopDiv.POP_CLASSES[dir];
      //console.info("dir = " + dir +", popclass = " + this.popClass);
      utils.addClass(this.div, this.popClass);

      // Get geometries of target and popper
      var thatdim = utils.getXY(elem);
      var popdim = this.getXY(this.div);
      //console.info(thatdim);
      //console.info(popdim);

      // Calculate position
      switch (dir) {
      case PopDiv.POP_ABOVE: dy = -1*popdim.h;  break;
      case PopDiv.POP_LEFT:  dx = -1*popdim.w;  break;
      case PopDiv.POP_BELOW: dy =    thatdim.h; break;
      case PopDiv.POP_RIGHT: dx =    thatdim.w; break;
      default:
        throw "PopDiv: Invalid direction: " + dir;
      }
      //console.info("Popping at: [x=" + (thatdim.x + dx) + ", y="+(thatdim.y + dy)+"]");

      this.showAt(html, thatdim.x + dx, thatdim.y + dy);
   }
};



// An ElementPopper shows a popup adjacent to a target element when the user mouses over the target.
// It handles browser events and manipulates a popper to show and hide detail data.
//
// When the mouse cursor enters the target, the content appears in the popper nearby.
//  When the mouse cursor leaves the target, the popper is hidden.
//
// This rather intense event handling code is necessary because mouseover and mouseout doesn't work
// as expected--mouseouts occur when moving over child nodes. The "relatedTarget" trick described
// by PPK (quirksmode.org) doesn't work either, because browsers sometimes drop events
// with related targets. So the only option is to capture document.onmousemove, and detect when
// the mouse either exits document.body, or moves over something that is neither the target nor
// one of its children.
//
// "popnode" is the target node
// "content" is either a string (the content to show), a DOM node (show its innerHTML), or a function.
// "direction" is PopDir.POP_*, defined above; default POP_LEFT
// "divId" is the ID to assign to the popper; default is to make one up.
//
// When used with Ext.Ncbi, the popper should initialize itself on the page a few hundred
// ms after the page loads. IE apparently creates a race condition where popper and Ext.Ncbi initialization
// throw away the event handlers on which ElementPopper depends.
//
// So in that case, instead of new ElementPopper(a,b), you want to do:
//     setTimeout(function() {new ElementPopper(a,b);}), 500);

//
var ElementPopper = function(popnode, content, direction, divId) {

    var that = this;

    // Inner functions
    // If target is popnode or one of its children, returns popnode; otherwise, null
    function getPopTarget(target) {
       while (target && !utils.hasClass(target, "popnode")) {
          target = target.parentNode;
       }
       return target;
    };

    // Use inner functions here because removeEvent requires a reference to the
    // function object passed to addEvent, and we need to use closure to maintain scope.

    // Show popper and start tracking mouse motions
    var doPop = function(e) {
       var target = getPopTarget(utils.getTargetObj(e));
       
       // Pop, shift listener to document body
       if (target) {
          that.thePopper.showBy(that.contentFunction(), target, that.direction);

          utils.removeEvent(target, "mousemove", doPop);
          utils.addEvent(document.body, "mousemove", trackMouse);
          utils.addEvent(document.body, "mouseout", trackMouse);
       }
    };

    // Unpop, shift listener back to popnode
    var trackMouse = function(e) {
       var target = getPopTarget(utils.getTargetObj(e));

       // If mouse left document.body, or the target's not over the popnode, hide.
       if (e.type == "mouseout" || target == null) {
          that.thePopper.hide();
          utils.removeEvent(document.body, "mousemove", trackMouse);
          utils.removeEvent(document.body, "mouseout", trackMouse);
          utils.addEvent(popnode, "mousemove", doPop);
       }
    };

    // END inner functions

    // If content is a string, make it a function that returns the string.
    // If it's a dom node, make it a function that returns the dom node's innerHTML
    if (typeof(content) == 'string') {
       this.contentFunction = function() { return content; }
    } else if (content.innerHTML) {
       this.contentFunction = function() { return content.innerHTML; }
    } else {
       this.contentFunction = content; // Better be a function...
    }

    this.direction = direction;

    // Create the popper
    this.popperId = divId || ("popper" + (ElementPopper.popIndex++));
    this.thePopper = new PopDiv(this.popperId);

    // Get popnode if it's an id string
    if (typeof(popnode) == 'string') {
        popnode = $(popnode);
        if (!popnode) {
           throw "ElementPopper: id not found";
        }
    }

    // When the user mouses over target, pop it up
    utils.addEvent(popnode, "mousemove", doPop);
}

ElementPopper.popIndex = 0;



//Patched using utils.$AN('title',node); instead of the cssQuery function.
//See http://jira.be-md.ncbi.nlm.nih.gov/browse/PP-336 for more info. 
//affects lines 261-263. Original bug was JIRA:EZ-1966.

// This code originally from abstractplus-pop

var _tc = null;

// Create title popper component
TitlePopper = function() {
   this.popper = document.createElement("div");
   document.body.appendChild(this.popper);

   this.popper.id = "popper";
   this.popper.dd = null;

   // Create empty popper content
   //eddie
   //image should be a transparent backed gif now, (no ie flicker) but i can't get to corehtml
   this.popper.innerHTML = "<img class='poparrow' src='/corehtml/query/PubMed/right.jpg' />" +   //<div class='poparrow'> </div>
      "<p id='poptext'></p>" +	
      "<p id='pcit'></p>";
   this.poptext = document.getElementById("poptext");
   this.pcit = document.getElementById("pcit");
   
   utils.addClass(this.popper, "hidden");

   // Get all "related links" sections and add events for them
   var t = cssQuery("dd.links ul.links li.ovfl");
   for (var i = 0; i < t.length; i++) {
      var p = t[i];
      utils.addEvent(t[i], "mouseover", this.mouseover, true);      
      utils.addEvent(t[i], "mouseout", this.mouseout, true);
   }

   // Offset of popup from top left of text (fine-tune)
   this.dx = -20;
   this.dy = -3;

}

// Initialize title popper
TitlePopper.onload = function() {
   _tc = new TitlePopper();
   utils.addClass(document.body, "abspop"); // pop-specific style control
}

// IE strikes again
TitlePopper.onunload = function() {
   if (_tc) {
      _tc.poptext = null;
      _tc.pcit = null;
      if (_tc.popper) {
         _tc.popper.dd = null;
         document.body.removeChild(_tc.popper);
      }
      _tc.popper = null;
      _tc = null;
   }
}

TitlePopper.prototype = {
   lastDate: null,

   // Fade in (or just reveal) popper once it is positioned correctly.
   reveal: function() {
      var oThis = this;

      // Fade in for non-IE (IE is too slow)
      if (!this.popper.filters) {
         // If we can't set the timer, just set opacity to 100 and don't fade in
         try {
            this.fader = window.setInterval(function() {oThis.fadeIn();}, 7);
            return;
         } catch (e) {
            // Something didn't work...
         }
      }
      this.setOpacity(100);
   },

   fadeIn: function() {
      var oThis = this;
      var op = 10 + this.getOpacity();
      this.setOpacity(op > 100 ? 100 : op);
      if (op >= 100) {
         window.clearInterval(this.fader);
      }
   },
   
   setOpacity: function(pct) {
      if (typeof(_tc.popper.filters) != 'undefined' && typeof(_tc.popper.filters.alpha) != 'undefined') {
         _tc.popper.filters.alpha.opacity = pct;
      }
      _tc.popper.style.opacity = pct / 100.0;
   },

   getOpacity: function() {
      return Math.floor(100 * (_tc.popper.style.opacity || 1));
   },

   // Set opacity to 1% and show. (Positioning doesn't work properly
   // if item is hidden.)
   show: function() {
      this.setOpacity(1);
      utils.removeClass(_tc.popper, "hidden");
   },

   hide: function() {
      if (this.fader) {
         window.clearInterval(this.fader);
         this.fader = null;
      }
      utils.addClass(_tc.popper, "hidden");
   },

   moveTo: function(x, y) {
      this.popper.style.left = x + "px";
      this.popper.style.top = y + "px";
   },

   setText: function(t) {
      this.poptext.innerHTML = "";
      this.poptext.innerHTML = t;
   },

   setCitation: function(t) {
      //this.pcit.innerHTML = "";
      if (t) { // avoid "undefined" value
          this.pcit.innerHTML = t;
      }
   },

   getWidth: function() {
      var w = utils.getXY(this.popper).w;
      return parseInt(w);
   },

   getHeight: function() {
      var h = utils.getHeight(this.popper);
      return parseInt(h);
   },

   // Update popper text and move popper
   mouseover: function(e) {

      var target = utils.getTargetObj(e);

      // climb nodes up to <dd>, if there is one
      while (target != null && target.nodeName.toLowerCase() != "dd") {
         target = target.parentNode;
      }

      if (target == null) return;
      
      _tc.popper.dd = target;

      // Set content
      _tc.setText(TitlePopper.getText(this)); 
      _tc.setCitation(TitlePopper.getCitation(this));
 
      var at = utils.getXY(this);
      _tc.show();
      _tc.moveTo(at.x-_tc.getWidth()+_tc.dx, at.y+_tc.dy);
      _tc.reveal();  // Fade-in effect; doesn't work well in IE (of course)
      e.stopPropagation();
   },
   
   mouseout: function(e) {
      var target = utils.getTargetObj(e);
/*
      if (typeof(target) == 'undefined' || target.nodeType != 1) {
         if (e.srcElement) {
            
            target = e.srcElement;
            while (target && target.nodeType != 1) {
               target = target.parentNode;
            }
         }
      }
*/
      // Where did the mouse go?
      var reltg = (e.relatedTarget) ? e.relatedTarget : e.toElement;

      // See if mouse went somewhere contained within dd
      while (reltg != null && reltg != target && reltg.nodeName.toLowerCase() != 'body') {
         reltg = reltg.parentNode;
      }
      
      // Mouseout happened on an element contained within dd
      if (reltg == target) return; 

      // No longer owned by a dd
      _tc.popper.dd = null;

      _tc.hide();

      e.stopPropagation();
   }
}

TitlePopper.getText = function(node) {
   var a = cssQuery("a.pl", node);
   if (a) {
      a = a[0];
      return a.innerText ? a.innerText : a.textContent;
   }
   return "";
}
   
// Gets citation for given node.
// Moves title attribute to _title attribute to avoid popup
TitlePopper.getCitation = function(node) {
   //var withTitles = cssQuery("*[title]", node);
   //Patch for JIRA Issue PP-336 (02-15-08)
   var withTitles = $AN('title', node, '*');
   
   if (withTitles.length > 0) {
      var p = withTitles[0];
      var s = p.getAttribute("title");

      if (s && s > "") {
         p.setAttribute("title", "");
         node._title = s;
         for (var i = 0; i < withTitles.length; i++) {
            withTitles[i].removeAttribute("title");
         }
      } else {
      	s = node._title;
      }
   } else {
      s = node._title;
   }
   return s;
}
   
utils.addEvent(window, 'load', TitlePopper.onload, false);     
utils.addEvent(window, 'unload', TitlePopper.onunload, false);

Portal.Portlet.ResultsSearchController = Portal.Portlet.extend({

	init: function(path, name, notifier) {
		var oThis = this;
		console.info("Created ResultsSearchController");
		this.base(path, name, notifier);

		console.info("CollectionsPopup: " + this.getValue("CollectionsPopup"));

		if(this.getInput("CollectionsPopup")){
			if(this.getValue("CollectionsPopup") == '0'){
				collectionsurl = this.getValue("CollectionsUrl");
				console.info("url: " + collectionsurl); 
				// window.myncbiback=1;
				var MyNcbiWindow = window.open(collectionsurl,'MyNCBI','');
				if (MyNcbiWindow){
    				MyNcbiWindow.focus();
    				this.setValue("CollectionsPopup", '1');
    				console.info("CollectionsPopup: " + this.getValue("CollectionsPopup"));
				}
			}
		}
	},
	
	
		
	send: {
		'ResetSendTo': null,
		'LastQueryKey': null,
		'needSavedSelectedItemCount': null
	},
	
	
		
	listen: {
		
		/* messages from message bus*/
		
		'Cmd' : function(sMessage, oData, sSrc) {
			this.ProcessCmd(sMessage, oData, sSrc);
		},
		
		
		
		// when result citations are selected, the list of selected ids are intercepted here
		'SelectedItemCountChanged' : function(sMessage, oData, sSrc){
			Portal.Portlet.ResultsSearchController.selectedItemCount = oData.count * 1;
		},
		
		
		// for SendTo File (processing after getting any initial selected item count from DbConnector)
		'SavedSelectedItemCount' : function(sMessage, oData, sSrc) {
			var SavedSelectedItemCount = oData.count;
			
			this.ProcessSavedSelectedItemCount(SavedSelectedItemCount, sMessage, oData, sSrc);
		},
		
		'RunLastQuery' : function(sMessage, oData, sSrc){
			if (this.getInput("RunLastQuery")){
				this.setValue ("RunLastQuery", 'true');
			}
		}
		
	},//listen
	
	ProcessCmd: function(sMessage, oData, sSrc){
    	Portal.Portlet.ResultsSearchController.cmd = oData.cmd;
	
		if (oData.cmd == 'Link'){
			if (this.getInput("LastQueryKey")){
				this.send.LastQueryKey({'qk': this.getValue("LastQueryKey")});
			}
		}
		else if (oData.cmd == 'File'){
			// asks for initial selected items count from dbconnector
			this.send.needSavedSelectedItemCount();
		}
		else if (oData.cmd == 'My NCBI Collections'){
			// asks for initial selected items count from dbconnector
			this.send.needSavedSelectedItemCount();
		}
	}, // ProcessCmd
	
	ProcessSavedSelectedItemCount: function(SavedSelectedItemCount, sMessage, oData, sSrc){
	    // get the count of items about to be processed 
	    var Count;
		if (Portal.Portlet.ResultsSearchController.selectedItemCount > 0){
			Count = Portal.Portlet.ResultsSearchController.selectedItemCount;
		}
		else if (SavedSelectedItemCount > 0){
			Count = SavedSelectedItemCount;
		}
		else{
			Count = this.getValue("ResultCount");
		}
		
	    if (Portal.Portlet.ResultsSearchController.cmd == 'My NCBI Collections'){
	        this.ProcessSavedItemsForCollections (Count, oData);
	    }
		else if (Portal.Portlet.ResultsSearchController.cmd == 'File'){
			this.ProcessSavedItemsForFile (Count, oData);
		}
	}, // ProcessSavedSelectedItemCount
	
	ProcessSavedItemsForCollections: function(Count, oData){
		// show message if item count is above limit
		if(Count > Portal.Portlet.ResultsSearchController.upperLimit){
		    // create message
			var message = "The maximum number of records that can be added to a My NCBI Collection is " 
			+ Portal.Portlet.ResultsSearchController.upperLimitText 
			+ ".\n"
			+ "Are you sure you want to save the first "
			+ Portal.Portlet.ResultsSearchController.upperLimitText
			+ " records to a Collection?\n";
			
			// if user confirms they want to add items, let them proceed to MY NCBI, otherwise cancel
    		if(confirm(message)){
    			Portal.requestSubmit(); 
    		}
    		else{
    			this.send.ResetSendTo({'value': ''});
    		}
		}
		else{
		    Portal.requestSubmit(); 
		}
		
	}, //ProcessSavedItemsForCollections
	
	ProcessSavedItemsForFile: function(Count, oData){
	    
		console.info("Count before send to file: " + Count);
		if (Count > Portal.Portlet.ResultsSearchController.upperLimit){
			if(confirm('Are you sure you want to download ' + Count + ' records?')){
				Portal.requestSubmit(); 
			}
			else{
				this.send.ResetSendTo({'value': ''});
			}
		}
		else{
			Portal.requestSubmit(); 
		}
	} //ProcessSavedItemsForFile

},
{
	selectedItemCount: 0,
	upperLimit: 500,
	upperLimitText: '500',
	cmd: ''
});

Portal.Portlet.Pubmed_ResultsSearchController = Portal.Portlet.ResultsSearchController.extend({

	init: function(path, name, notifier) {
		console.info("Created derived ResultsSearchController");
		this.base(path, name, notifier);
	}
});

Portal.Portlet.FilterTab = Portal.Portlet.extend({
	
	init: function(path, name, notifier) {
		console.info("Created FilterTab");
		this.base(path, name, notifier);
	},
	
	send: {
		'Cmd': null,
		'AppendTerm': null,
		'ClearIdList': null
	},
	
	listen: {
			//browser events
		"Tab<click>" : function(e, target, name){
			this.send.Cmd({'cmd': 'FilterChanged'});
			this.setValue("CurrFilter", target.getAttribute('filter'));
			console.info("CurrFilter changed to: " + this.getValue('CurrFilter'));
		},
		
		"Pin<click>" : function(e, target, name){
		    // sets filter to all, simulates Go command - sets the term and checks for original db through search bar
			this.send.Cmd({'cmd': 'Go'});
			newTerm = '\"' + target.getAttribute('filter') + '\"[Filter]';
			this.send.AppendTerm({'op' : 'AND', 'term': newTerm});
			this.setValue("CurrFilter", 'all');
			//for back button compatibility, clear any selected ids.
			this.send.ClearIdList();
		},


			// messages
		// back button fix
		'Cmd' : function(sMessage, oData, sSrc){
			if (oData.cmd != 'FilterChanged'){
				if(this.getValue("CurrFilter") != this.getValue("LastFilter")){
					this.setValue("CurrFilter", this.getValue('LastFilter'));
					console.info("CurrFilter changed to: " + this.getValue('CurrFilter'));
				}
			}
		}


	}
	
});
   


/* 
   Based on /entrez/query/PubMed/limits.js, refactored for 
   compatibility with Portal client-side JS programming framework
   Requires: debug, utils, notify.
*/

Portal.Portlet.Pubmed_LimitsTab = Portal.Portlet.extend ({

   init: function (path, name, notifier) 
   {		
	    this.m_suggestions = new Array;
	    this.m_bSubmitSkip = false;
   
		var oThis = this;
		this.base (path, name, notifier);

		console.info ("Created " + name);

		// Check if current Tab is indeed Limits before going any further	
		var curTab = this.getInput ('CurrentTab');					
		if (curTab && curTab.value == 'Limits')	
		{				
			var pLimitSel = this.getInput ('pmfilter_PDatLimit');
			if (pLimitSel)
			{
				utils.addEvent (pLimitSel, "change", 
								function (e)
								{
									oThis.OpenSpecDates ('PDatesSel');
								}, true);					  
			}
			var eLimitSel = this.getInput ('pmfilter_EDatLimit');
			if (eLimitSel)
			{
				utils.addEvent (eLimitSel, "change", 
								function (e)
								{
									oThis.OpenSpecDates ('EDatesSel');
								}, true);		
			}
			this.CheckDateRange ('PDatesSel', 'PDatRange');			  
			this.CheckDateRange ('EDatesSel', 'EDatRange');		
			
			console.info ("Initialized " + name);
		}			
   },
   
   beforesubmit: function ()
   {
		var curTab = this.getInput ('CurrentTab');					
		if (curTab && curTab.value == 'Limits')	
			this.CollectLimits ();
		return false;
   },
   
   SetSuggestion: function (fieldId, sSuggestion)
   {
   		this.m_bSubmitSkip = true;
		this.m_suggestions[fieldId] = sSuggestion;
   },
  
   GetSuggestion: function (fieldId)
   {
		return this.m_suggestions[fieldId];
   },
  
   CollectLimits: function ()
   {
		var a = $("auth_dd");
		if (a != null) 
			this.AddToQuery ('author_', 'Auth', 'pmfilter_AuthOp', 'AND', false);
		var j = $("journ_dd");
		if (j != null) 
			this.AddToQuery ('journ_', 'Jour', '', 'OR', true);
   },
   
   AddToQuery: function (id, field, selector, defval, quotation)
   {
		if (!document.getElementsByTagName || !document.getElementById) 
			return; 
		var ln = id.length;
		var query_add = "";
		var op = "";
		var operation = this.SelectorValue (selector, defval);
		var inps = document.getElementsByTagName ("INPUT")
		for (var i = 0; i < inps.length; i++) 
		{
			var thisNode = inps[i];
			if (thisNode.type.toUpperCase() == "TEXT" ) 
			{
				var thisId = thisNode.id;
				var s1 = thisId.substring (ln, -ln), s2 = thisId.substring (ln);
				if ((id == s1) && (s2.match (/[0-9]+/))) 
				{
					var v = thisNode.value;
					if ((v.length > 0) && (!v.match (/~[\s]*$/))) 
					{
						var tquot = quotation;
						if (tquot) 
						{
							if (this.GetSuggestion (thisId) != v) 
								tquot = false;
						}
						if (tquot)
							query_add = query_add + op + '"' + v + '"[' + field + ']';
						else
							query_add = query_add + op + v + '[' + field + ']';
						if (!(op.length > 0))
							op = " " + operation + " ";
					}
				}
			}
		}
		
		if (query_add.length > 0) 
	        this.notifier.Notify (this, 'TermLogicalOp', { 'op': 'AND', 'key': query_add });
	},
	
	SelectorValue : function (sname, defval)
	{
		if (!document.getElementsByName || !document.getElementById) 
			return; 
		var value = defval;
		if (!value.length > 0) 
			value = "AND";

		if ( sname.length > 0 ) 
		{
			var cbs = $N(sname);		  
			for (var i = 0; i < cbs.length; i++) 
			{
				var thisNode = cbs[i];
				if (thisNode.type.toUpperCase() == "RADIO" ) 
				{
					if (thisNode.checked) 
					{
						value = thisNode.value;
						return value;
					}
				}
			}
		}
		return value;
	},
	
	OpenSpecDates: function (PSelectId) 
	{
		var node = $(PSelectId);
		var divblock = $(PSelectId + "Block");
		if (!node || !divblock)
		    return;
		if (node.value == "daterange") 
		{ 
			divblock.shown = true
			divblock.style.display = "block"
			enableInputs (divblock, true);
		} 
		else 
		{
			divblock.shown = false
			divblock.style.display = "none"
			enableInputs (divblock, false);
			this.ClearDateRangeBlock (PSelectId + "Block");
		}
	},

	CheckDateRangeBlock: function (blockid, rangename)
	{
		if (!document.getElementsByTagName || !document.getElementById)  
			return false;
		  
		var pm = this.path + ".pmfilter_" + rangename;
		var ef = ["_MinYear", "_MinMonth", "_MinDay", "_MaxYear", "_MaxMonth", "_MaxDay"];
		var efl= [ef[0].length, ef[1].length, ef[2].length, ef[3].length, ef[4].length, ef[5].length ];

		var node = $(blockid);
		if (!node) 
			return false;
		  
		var inps = node.getElementsByTagName("INPUT")
		for (var i = 0; i < inps.length; i++) 
		{
			var thisNode = inps[i];
			if (thisNode.type.toUpperCase() == "TEXT") 
			{
				var thisName = thisNode.name;
				if (thisName.indexOf (pm) == 0) 
				{
					var l = thisName.length;
					for (j = 0; j < 6; j++) 
					{
						if (thisName.slice (l - efl[j]) == ef[j]) 
						{
							if (thisNode.value.length > 0) 
								return true;
						}
					}
				}
			}
		}  
		return false;
	},

	CheckDateRange: function (selectid, rangename) 
	{
		var node = $(selectid);
		if (!node)
		    return;
		if (this.CheckDateRangeBlock (selectid + "Block", rangename)) 
		{
			node.value = "daterange";
			this.OpenSpecDates (selectid);
		}
		else if (node.value == "daterange")
			node.value = "any";
	},

	ClearDateRangeBlock: function (blockid)
	{
		if (!document.getElementsByTagName || !document.getElementById) 
			return false; 
	  
		var pm = this.path + ".pmfilter_";
		var ef = ["_MinYear", "_MinMonth", "_MinDay", "_MaxYear", "_MaxMonth", "_MaxDay"];
		var efl= [ef[0].length, ef[1].length, ef[2].length, ef[3].length, ef[4].length, ef[5].length ];
		  
		var node = $(blockid);
		if (!node)
			return;
		  
		var inps = node.getElementsByTagName ("INPUT");
		for (var i = 0; i < inps.length; i++) 
		{
			var thisNode = inps[i];
			if (thisNode.type.toUpperCase() == "TEXT" ) 
			{
				var thisName = thisNode.name;
				if (thisName.indexOf (pm) == 0) 
				{
					var l = thisName.length;
					for (j = 0; j < 6 ; j++) 
					{
						if (thisName.slice (l - efl[j]) == ef[j])
							thisNode.value = '';
					}
				}
			}
		}		  
		return false;
	},
	
	ClearAllDates: function ()
	{
		this.SetSelectorValue ('pmfilter_PDatLimit', 'any');
		this.OpenSpecDates ('PDatesSel');
		this.SetSelectorValue ('pmfilter_EDatLimit', 'any');
		this.OpenSpecDates ('EDatesSel');
		return false;
	},
	
	ClearAll: function ()
	{
		rem_rows ('auth_dd');
		showhide ('AuthBlock', true, '' , 'hide');
		rem_rows ('journ_dd');
		showhide ('JourBlock', true, '' , 'hide');
		this.ClearAllDates ();
		setAll ('simsearch', false); 
		setAll ('hum_ani', false); 
		setAll ('gender', false); 
		setAll ('lang', false); 
		setAll ('subs', false); 
		setAll ('pubt', false); 
		setAll ('ages', false); 
		this.SetSelectorValue ('LimitsField', 'All Fields');
		return false;
	},
	
	SetSelectorValue: function (sname, svalue)
	{
	   var sel = this.getInput (sname);
	
	   if (sel) 
	   {
		  for (i = 0; i < sel.options.length; ++i) 
		   sel.options[i].selected = sel.options[i].value == svalue;
	   }
	   return false;
	},
	
	SubmitOnEnterKey: function (id)
	{
		var oThis = this;
	    var el = $(id);
	    if (el)
	    {
/*	        utils.addEvent (el, "keypress", 
	                        function (event, target, name) 
	                        {
	                        	 event = event || utils.fixEvent (window.event);
	                             if ((event.keyCode || event.which) == 13)		
	                             {						  
									 if (NSuggest_IsActive () == null && oThis.m_bSubmitSkip == false)
									 {	
										 event.returnValue = false;
		                              	 event.stopPropagation ();   
		                              	 event.preventDefault ();   
		                                 Portal.$send('LimitsGoClicked',  {});		                                 
		                             }
									 oThis.m_bSubmitSkip = false;
	                             }
	                        }, true);               */

			// TODO: replace by utils.addEvent call once it's fixed by Sergey Ponomarev
	        addEvent2 (el, "keypress", 
	                        function (event, target, name) 
	                        {
								 event = event || utils.fixEvent (window.event);
	                             if ((event.keyCode || event.which) == 13)		
	                             {						  
									 if (NSuggest_IsActive () == null && oThis.m_bSubmitSkip == false)
									 {
										 event.returnValue = false;
										 if (event.stopPropagation != undefined)
			                              	 event.stopPropagation ();   
										 if (event.preventDefault != undefined)
		                              	 	event.preventDefault ();   
		                                 Portal.$send('LimitsGoClicked',  {});		                                 
									 }
									 oThis.m_bSubmitSkip = false;
	                             }
	                        }, true);               
	    }
	  
	},    	
	    
   send: {
   	"LimitsGoClicked": null
   },


   listen: {
	  "LimitsGo<click>": function(e, target, name) {
          this.send.LimitsGoClicked ();
	  },
	  
	  "ClearAll<click>": function(e, target, name) { 
	      this.ClearAll();
	  },
	  
	  "ClearAll<keypress>": function(e, target, name) { 
	      if ((e.keyCode || e.which) == 13) {
	          this.ClearAll();
	      }
	  }         
   }

});

// Clear all checkboxes inside target node
function setAll(nodeName, value) {
   if (!document.getElementById) return false
   var node= document.getElementById(nodeName)

   if (node) {
      var cbs = node.getElementsByTagName("INPUT")
      for (var i = 0; i < cbs.length; i++) {
         var cb = cbs[i]
         if (cb.getAttribute("TYPE").toUpperCase() == "CHECKBOX") {
            cb.checked = value
         } else {
         cb.value = ""; 
		 }
      }
   }
   return false;
}

function enableInputs(node, enabled) {
   var kinput, kid
   var kids
   var kinputArray = ["button", "input", "optgroup", "option", "select", "textarea"];
//   alert(enabled +" " +node.tagName)
   for (kinput in kinputArray) {
      kids = node.getElementsByTagName(kinputArray[kinput])
//	  alert (kids.length)
	  for (var i = 0; i < kids.length; i++) {
	     kid = kids[i]
		 kid.disabled = !enabled
      }
   }
}

// Show and hide a target node. If the second argument is true,
// then disable (enable) all child inputs 

larrow_closed=new Image(1,1);
larrow_closed.src="/corehtml/query/PubMed/gifs/close_arrow.gif";
larrow_open=new Image(1,1);
larrow_open.src="/corehtml/query/PubMed/gifs/open_arrow.gif";

function openAllBlocks() {
 showhide('AuthBlock', true, 'auth_image', 'show');
 showhide('JourBlock', true, 'journ_image', 'show');
 showhide('AbstrBlock', true, 'abstr_image', 'show');
 showhide('DatesBlock', true, 'dates_image', 'show');
 showhide('HumAnimBlock', true, 'ha_image', 'show');
 showhide('GenderBlock', true, 'gender_image', 'show');
 showhide('LangBlock', true, 'lang_image', 'show');
 showhide('SubsetsBlock', true, 'subset_image', 'show');
 showhide('PublicTypeBlock', true, 'publictype_image', 'show');
 showhide('AgesBlock', true, 'ages_image', 'show');
 showhide('TermsBlock', true, 'terms_image', 'show');
}

function showhide(target, disableChildren, image_id , todo) {
   var node = document.getElementById(target)
   if (!node) { return false }
//   if (todo) node.shown=(todo? "hide": "show")?false:true;
	if (todo == "hide") { node.shown = true; }
	if (todo == "show") { node.shown = false; }

   if (node.shown) {
      node.shown = false
      node.style.display = "none"
	  if (image_id) document.getElementById(image_id).src = larrow_open.src;
	  if (disableChildren) {
	  	enableInputs(node, false);
	  }
   } else {
      node.shown = true
      node.style.display = "block"
	  if (image_id) document.getElementById(image_id).src = larrow_closed.src;
	  if (disableChildren) {
	     enableInputs(node, true);
      }
   }
   return false
}

var newRowsAuthor = 0;
var newRowsJournal = 0;
var newRowsCounter = 0;

// remrow
// Remove the same row in the table where "obj" sits

function remrow(event)		// if presents row will not removed but hided with display:none
{

      var target;
            if (event) {  // mozilla et al
                target = event.target;
            } else {  // IE
                event = window.event;
				target = event.srcElement;
            }
	if (target.myrow) {
		var trparent = target.myrow.parentNode;
		trparent.removeChild(target.myrow);
		if (target.lable == "Author") newRowsAuthor--; 
		if (target.lable == "Journal") newRowsJournal--;
	}
	if (newRowsAuthor == 0) { showhide('AuthBlock', true, '' , 'hide'); } 
	if (newRowsJournal == 0) { showhide('JourBlock', true, '' , 'hide'); }
	return false;
}

function rem_rows(blockid)
{
	
	var tbtarget = document.getElementById(blockid).getElementsByTagName("tbody")[0];
	if (tbtarget) {
        var tbody = document.createElement('tbody');
        var tbparent = tbtarget.parentNode;
        tbparent.removeChild(tbtarget);    
        tbparent.appendChild(tbody);
    }
	if (blockid == "auth_dd") { Author_Count=0;  newRowsAuthor=0;  }
	if (blockid == "jour_dd") { Journal_Count=0; newRowsJournal=0; }

}

// addrow

function addrow(tab, lable) {
	newRowsCounter++;
	if (lable == "Author") { newRowsAuthor++; newRowsCounter = newRowsAuthor; }
	if (lable == "Journal") { newRowsJournal++; newRowsCounter = newRowsJournal; }
	
	var src  = document.getElementById(tab).getElementsByTagName("tfoot")[0].getElementsByTagName("tr")[0];
	var dest = document.getElementById(tab).getElementsByTagName("tbody")[0];
	var srcopy = src.cloneNode(true);
	retainNames (srcopy.getElementsByTagName("input"));
	dest.appendChild(srcopy);
	
	// Assume the "remove" tag is the first and only link in the <tr></tr>
	var alink = srcopy.getElementsByTagName("a");
	
	if (alink) {
	   alink = alink.item(0);
	   alink.myrow = srcopy;
	   alink.lable = lable;
	   alink.onclick = remrow;
	}


	if (typeof suggest == "object") suggest.load();
    
//	return false;
}


// retainNames
// Function adds numeric suffixes to every element that has name parameter. Numeric will suffix follow after "--"

function retainNames (rowcopyFields) {
	for (var i=0; i < rowcopyFields.length; i++) {
		var theName = rowcopyFields[i].name 
		if (theName) {
			if (rowcopyFields[i].type == "radio") {
				rowcopyFields[i].value = theName + newRowsCounter;
			} else {
				rowcopyFields[i].name = theName + newRowsCounter;
				rowcopyFields[i].id = theName +  newRowsCounter;  // IE can't find just created elements by name, so it needs ID.
			}
		}
	}
}

function SetFocus( focusname ) 
{
    if (document.getElementById) {
      var el = document.getElementById( focusname );
      if ( typeof el == "object" ) { 
        el.focus(); 
      }
    }
}

function select_focus(id) { 
    var field = document.getElementById(id)
    date_s = "YYYYMMDD"
    if (date_s.indexOf(field.value) != -1) field.select();
}

//TODO: move to utils class by Sergey Ponomarev
function addEvent2( obj, type, fn ) {
    if (obj.addEventListener) {
        obj.addEventListener( type, fn, false );
        EventCache.add(obj, type, fn);
    }
    else if (obj.attachEvent) {
        obj["e"+type+fn] = fn;
        obj[type+fn] = function() { obj["e"+type+fn]( window.event ); }
        obj.attachEvent( "on"+type, obj[type+fn] );
        EventCache.add(obj, type, fn);
    }
    else {
        obj["on"+type] = obj["e"+type+fn];
    }
}

var EventCache = function(){
    var listEvents = [];
    return {
        listEvents : listEvents,
        add : function(node, sEventName, fHandler){
            listEvents.push(arguments);
        },
        flush : function(){
            var i, item;
            for(i = listEvents.length - 1; i >= 0; i = i - 1){
                item = listEvents[i];
                if(item[0].removeEventListener){
                    item[0].removeEventListener(item[1], item[2], item[3]);
                };
                if(item[1].substring(0, 2) != "on"){
                    item[1] = "on" + item[1];
                };
                if(item[0].detachEvent){
                    item[0].detachEvent(item[1], item[2]);
                };
                item[0][item[1]] = null;
            };
        }
    };
}();
addEvent2(window,'unload',EventCache.flush);
Portal.Portlet.MessageBar = Portal.Portlet.extend ({
	init: function (path, name, notifier)
	{
		this.base (path, name, notifier);
	},
	
	send: {
		"TabCmd": null
	},
	
	listen: {
		//upon clicking 'see details', sends name of details tab.
		"Details<click>":  function(e, target, name) {
			this.send.TabCmd({'tab': this.getValue("Details:tab")});
		},
		
		"CorrectedQuery<click>": function(e, target, name) {
		    this.setValue ('Term', target.getAttribute('term'));
		}
	}
});


Portal.Portlet.SearchController = Portal.Portlet.extend({
   
   init: function(path, name, notifier) {
      console.info("Created SearchController");
      this.base(path, name, notifier);
   },
   
   listen: {
   
		'QueryKey' : function(sMessage, oData, sSrc) {
			this.ReceivedQueryKey(sMessage, oData, sSrc);
		},
        
        'scTerm' : function(sMessage, oData, sSrc) {
			this.ReceivedTerm(sMessage, oData, sSrc);
        }
    },
   
    ReceivedQueryKey : function (sMessage, oData, sSrc){
       this.setValue('QueryKey', oData.qk);
    },
   
    ReceivedTerm : function (sMessage, oData, sSrc){
       this.setValue('Term', oData.term);
    }
});

Portal.Portlet.Pubmed_SearchController = Portal.Portlet.SearchController.extend({
   
   init: function(path, name, notifier) {
      this.base(path, name, notifier);
   }
 
});
Portal.Portlet.CommandTab = Portal.Portlet.extend ({
	init: function (path, name, notifier)
	{
		 console.info ("Created CommandTab");
		this.base (path, name, notifier);
	},
	
	send: {
		"Cmd": null,
		"TabCmd": null
	},
	
	listen: {
		//upon click on tab, sends name of tab that was clicked,
		// and the command that indicates that a tab was clicked.
		"Tab<click>":  function(e, target, name) {
			this.send.TabCmd({'tab': target.getAttribute("tab")});
			this.send.Cmd({'cmd': 'CommandTabClicked'});
		},
		
	
		"LimitCheckBox<click>":  function(e, target, name) {
			console.info ("LimitsActive: " + this.getValue("LimitsActive"));
			if (target.checked){
				this.setValue("LimitsActive", 'true');
				console.info ("LimitsActive: " + this.getValue("LimitsActive"));
			}
			else{
				this.setValue("LimitsActive", 'false');
				console.info ("LimitsActive: " + this.getValue("LimitsActive"));
			}
				
		},
		
		'PreserveTabCmd' : function(e, target, name) {
			this.send.TabCmd({'tab': this.getValue("LastTabCmd")});	
		}
	}
});

Portal.Portlet.Pubmed_CommandTab = Portal.Portlet.CommandTab.extend ({
	init: function (path, name, notifier)
	{
		console.info ("Created Pubmed_CommandTab");
		this.base (path, name, notifier);
	}
});
Portal.Portlet.DbConnector = Portal.Portlet.extend({

	init: function(path, name, notifier) {
		var oThis = this;
		console.info("Created DbConnector");
		this.base(path, name, notifier);
     
		// the SelectedIdList and id count from previous iteration
		Portal.Portlet.DbConnector.originalIdList = this.getValue("LastIdsFromResult");
		console.info("originalIdList " + Portal.Portlet.DbConnector.originalIdList);
		// if there is an IdList from last iteration set the count
		if (Portal.Portlet.DbConnector.originalIdList != ''){
			Portal.Portlet.DbConnector.originalCount = Portal.Portlet.DbConnector.originalIdList.split(/,/).length;
		}

		notifier.setListener(this, 'HistoryCmd', 
        	function(oListener, custom_data, sMessage, oNotifierObj) {
           		var sbTabCmd = $N(oThis.path + '.TabCmd');
           		sbTabCmd[0].value = custom_data.tab;
        	}
    		, null);
    
	},

	send: {
   		'SelectedItemCountChanged': null,
   		'newUidSelectionList': null,
   		'SavedSelectedItemCount': null
	},

	listen: {
	
		//message from Display bar on Presentation change 
		'PresentationChange' : function(sMessage, oData, sSrc){
			
			// set link information only if it exists
			if (oData.dbfrom){
				console.info("Inside PresentationChange in DbConnector: " + oData.readablename);
				this.setValue("Db", oData.dbto);
				this.setValue("LinkSrcDb", oData.dbfrom);
				this.setValue("LinkName", oData.linkname);
				this.setValue("LinkReadableName", oData.readablename);
			}
			//document.forms[0].submit();
		},
		
		// various commands associated with clicking different form control elements
		'Cmd' : function(sMessage, oData, sSrc){
			console.info("Inside Cmd in DbConnector: " + oData.cmd);
			this.setValue("Cmd", oData.cmd);
			
			// back button fix, clear TabCmd
			if (oData.cmd == 'Go' || oData.cmd == 'PageChanged' || oData.cmd == 'FilterChanged' || 
			oData.cmd == 'DisplayChanged' || oData.cmd == 'HistorySearch' || oData.cmd == 'Text' || 
			oData.cmd == 'File' || oData.cmd == 'Printer' || oData.cmd == 'Order' || 
			oData.cmd == 'Add to Clipboard' || oData.cmd == 'Remove from Clipboard' || 
			oData.cmd.toLowerCase().match('details')){
				this.setValue("TabCmd", '');
				console.info("Inside Cmd in DbConnector, reset TabCmd: " + this.getValue('TabCmd'));
			}

		},
		
		
		// the term to be shown in the search bar, and used from searching
		'Term' : function(sMessage, oData, sSrc){
			console.info("Inside Term in DbConnector: " + oData.term);
			this.setValue("Term", oData.term);
		},
		
		
		// to indicate the Command Tab to be in
		'TabCmd' : function(sMessage, oData, sSrc){
			console.info("Inside TABCMD in DbConnector: " + oData.tab);
			this.setValue("TabCmd", oData.tab);
			console.info("DbConnector TabCmd: " + this.getValue("TabCmd"));
		},
		
		
		// message sent from SearchBar when db is changed while in a Command Tab
		'DbChanged' : function(sMessage, oData, sSrc){
			console.info("Inside DbChanged in DbConnector");
			this.setValue("Db", oData.db);
		},
		
		// Handles item select/deselect events
		// Argument is { 'id': item-id, 'selected': true or false }
		'ItemSelectionChanged' : function(sMessage, oData, oSrc) {
			var sSelection = this.getValue("IdsFromResult");
			var bAlreadySelected = (new RegExp("\\b" + oData.id + "\\b").exec(sSelection) != null);
	       	var count =0;
	       	
			if (oData.selected && !bAlreadySelected) {
				sSelection += ((sSelection > "") ? "," : "") + oData.id;
			   	this.setValue("IdsFromResult", sSelection);
			   	if (sSelection.length > 0){
			   		count = sSelection.split(',').length;
			   	}
			   	this.send.SelectedItemCountChanged({'count': count});
			   	this.send.newUidSelectionList({'list': sSelection});
		   	} else if (!oData.selected && bAlreadySelected) {
				sSelection = sSelection.replace(new RegExp("^"+oData.id+"\\b,?|,?\\b"+oData.id+"\\b"), '');
		   	   	this.setValue("IdsFromResult", sSelection);
				console.info("Message ItemSelectionChanged - IdsFromResult after change:  " + this.getValue("IdsFromResult"));
			   	if (sSelection.length > 0){
			   		count = sSelection.split(',').length;
			   	}
				console.info("Message ItemSelectionChanged - IdsFromResult length:  " + count);   
				this.send.SelectedItemCountChanged({'count': count});
			   	this.send.newUidSelectionList({'list': sSelection});
		   	}
		},
				
		// FIXME: This is the "old message" that is being phased out.
		// when result citations are selected, the list of selected ids are intercepted here,
		// and notification sent that selected item count has changed.
		'newSelection' : function(sMessage, oData, sSrc){
		
			// Check if we already have such IDs in the list
			var newList = new Array();
			var haveNow = new Array();
			if(Portal.Portlet.DbConnector.originalIdList){
				haveNow = Portal.Portlet.DbConnector.originalIdList.split(',');
				newList = haveNow;
			}
			
			var cameNew = new Array();
			if (oData.selectionList.length > 0) {
				cameNew = oData.selectionList;
			}
			
			if (cameNew.length > 0) {
				for(var ind=0;ind<cameNew.length;ind++) {
					var found = 0;
					for(var i=0;i<haveNow.length;i++) {
						if (cameNew[ind] == haveNow[i]) {
							found = 1;
							break;
						}
					}
						//Add this ID if it is not in the list
					if (found == 0) {
						newList.push(cameNew[ind]);
					}
				}
			}
			else {
				newList = haveNow;
			}

				// if there was an IdList from last iteration add new values to old
			var count = 0;
			if ((newList.length > 0) && (newList[0].length > 0)){
				count = newList.length;
			}
			
			console.info("id count = " + count);
			this.setValue("IdsFromResult", newList.join(","));
			
			this.send.SelectedItemCountChanged({'count': count});
			this.send.newUidSelectionList({'list': newList.join(",")});
		},


		// empty local idlist when list was being collected for other purposes.
		//used by Mesh and Journals (empty UidList should not be distributed, otherwise Journals breaks)
		'ClearIdList' : function(sMessage, oData, sSrc){
			this.setValue("IdsFromResult", '');
			this.send.SelectedItemCountChanged({'count': '0'});
			this.send.newUidSelectionList({'list': ''});
		}, 


		// back button fix: when search backend click go or hot enter on term field,
		//it also sends db. this db should be same as dbconnector's db
		'SearchBarSearch' : function(sMessage, oData, sSrc){
			if (this.getValue("Db") != oData.db){
				this.setValue("Db", oData.db);
			}
		},
		
		// back button fix: whrn links is selected from DisplayBar,
		//ResultsSearchController sends the LastQueryKey from the results on the page
		'LastQueryKey' : function(sMessage, oData, sSrc){
			if (this.getInput("LastQueryKey")){
				this.setValue("LastQueryKey", oData.qk);
			}
		},
		
		//ResultsSearchController asks for the initial item count in case of send to file 
		'needSavedSelectedItemCount' : function(sMessage, oData, sSrc){
			var count = 0;
			if(this.getInput("IdsFromResult")){
				if (this.getValue("IdsFromResult").length > 0){
					count = this.getValue("IdsFromResult").split(',').length;
				}
				console.info("sending SavedSelectedItemCount from IdsFromResult: " + count);
			}
			else{
				count = Portal.Portlet.DbConnector.originalCount;
				console.info("sending SavedSelectedItemCount from OriginalCount: " + count);
			}
			this.send.SavedSelectedItemCount({'count': count});
		},
		
		// Force form submit, optionally passing db, term and cmd parameters
		'ForceSubmit': function (sMessage, oData, sSrc)
		{
		    if (oData.db)
    			this.setValue("Db", oData.db);
		    if (oData.cmd)
    			this.setValue("Cmd", oData.cmd);
		    if (oData.term)
    			this.setValue("Term", oData.term);
    		Portal.requestSubmit ();
		}
	}
},
{
	originalIdList: '',
	originalCount: 0
});

Portal.Portlet.SearchBar = Portal.Portlet.extend ({
  
	init: function (path, name, notifier) 
	{
		console.info ("Created SearchBar"); 
		this.base (path, name, notifier);

        Portal.Portlet.SearchBar.originalTerm = this.getValue("Term");
        Portal.Portlet.SearchBar.originalDb = this.getValue("Db");
	},

	// Define message sender methods here.
	// If you just want to send a message the standard way, simply
	// supply "null" as the implementation. 
	// 
	send: {
		"Cmd": null,
		"Term": null,
		"TabCmd": null,
		"DbChanged": null, 
		"SearchBarSearch": null
	},

	// Define messages and events
	listen: {

		// Global message bus
		'IndexLogicalOp': function(sMessage, oData, sSrc) {
			var sbTerm = this.getValue("Term");
			var oTerm = this.getInput("Term");
			var newValue = oData.key;

			console.info ("In Indexlogocalop in SearchBar");

			if (sbTerm != "") {
				newValue = sbTerm + ' ' + oData.op + ' ' + oData.key;
			}
			this.setValue("Term", newValue);
			if (oTerm) {
			   oTerm.focus();
			}
		},

		'TermLogicalOp': function(sMessage, oData, sSrc) {
			var sbTerm = this.getValue("Term");
			var bNotBlank = sbTerm != "";
			
			if (bNotBlank)
			   sbTerm = '(' + sbTerm + ') ' + oData.op + ' (';
			
			sbTerm += oData.key;
			
			if (bNotBlank)
			   sbTerm += ')';
	 
			this.setValue("Term", sbTerm);  
			this.send.Term({'term' : sbTerm});
			this.getInput("Term").focus();
		},

		'LimitsGoClicked': function(sMessage, oData, sSrc) {
			this.send.Cmd({
				'cmd' : this.getValue("Go:cmd")
			});
			this.send.Term({
				'term' : this.getValue("Term")
			});
			// for back button fix, when go is clicked, also send db in searchbar, for checking against dbconnector
			this.send.SearchBarSearch({
				'db' : this.getValue("Db")
			});
			Portal.requestSubmit();
		},

		'Cmd': function(sMessage, oData, sSrc) {
			if (oData.cmd == 'CommandTabClicked'){
				// for back button fix, when Tab is clicked, also send db in searchbar
				if (this.getValue("Db")){
					this.send.DbChanged({
						'db' : this.getValue("Db")
					});
				}
			}
		},
		
		'AppendTerm': function(sMessage, oData, sSrc) {
		    var newTerm = Portal.Portlet.SearchBar.originalTerm;
		    if (Portal.Portlet.SearchBar.originalTerm != '' && oData.op != ''){
		        newTerm += ' ' + oData.op + ' ';
		    }
		    newTerm += oData.term;
		    //this.setValue("Term", newTerm); 
			this.send.Term({'term': newTerm });
			// for back button fix, send original db
			this.send.SearchBarSearch({
				'db' : Portal.Portlet.SearchBar.originalDb
			});
		},
		
		'ClearSearchBarTerm': function(sMessage, oData, sSrc) {
			this.setValue("Term", '');
		}, 

		// Browser events
		"Term<keypress>": function(event, target, name) {
			event = event || utils.fixEvent (window.event);
			if ((event.keyCode || event.which) == 13) 
			{
				// Emulate Go command.
	    
				console.info ("In term keypress: CMD  in SearchBar");
				this.send.Cmd({'cmd' : this.getValue("Term:cmd") });

				// In History Tab, Term field should send command Preview
				if (this.getValue("Term:cmd") == 'Preview')
				{
					this.send.TabCmd({
						'tab' : this.getValue("Db:tab")
					});
				}
	    
				console.info ("In term keypress : TERM in SearchBar");
				this.send.Term({'term': this.getValue("Term") });

			    // for back button fix, when go is clicked, also send db in searchbar, for checking against dbconnector
			    this.send.SearchBarSearch({
				    'db' : this.getValue("Db")
			    });
            
				event.returnValue = false;
				if (event.stopPropagation != undefined)
                      event.stopPropagation ();   
				if (event.preventDefault != undefined)
                      event.preventDefault ();   
				Portal.requestSubmit (); 
				return false;
			}
		},
      
		// Cmd is set to Go, so ResultsView of other database can choose component based 
		// on value of Cmd. The existing search term is also passed down.
		"Go<click>": function(e, target, name) {
		 	this.send.Cmd({
				'cmd' : this.getValue("Go:cmd")
			});
		   	this.send.Term({
				'term' : this.getValue("Term")
			});
			// for back button fix, when go is clicked, also send db in searchbar, for checking against dbconnector
		 	this.send.SearchBarSearch({
				'db' : this.getValue("Db")
			});
		},
		

		"Preview<click>": function(e, target, name) {
		 	this.send.Cmd({
				'cmd' : 'Preview'
			});
		   	this.send.Term({
				'term' : this.getValue("Term")
			});
		   	this.send.TabCmd({
				'tab' : this.getValue("Preview:tab")
			});
			// for back button fix, when go is clicked, also send db in searchbar, for checking against dbconnector
		 	this.send.SearchBarSearch({
				'db' : this.getValue("Db")
			});
		},
	  
		// to indicate that the db field was the submitter, this will also set future 
		// TabCmd to current TabCmd and keep the existing search term.
		"Db<change>": function(e, target, name) {
		 	this.send.Cmd({
				'cmd' : this.getValue("Db:cmd")
			});
			console.info ("In DB SearchBar: " + this.getValue("Db:cmd"));
			this.send.TabCmd({
				'tab' : this.getValue("Db:tab")
			});
			this.send.DbChanged({
				'db' : this.getValue("Db")
			});
			this.send.Term({
				'term' : this.getValue("Term")
			});
		},
		
		// On Clear button click, set focus to search box and clear the term
		"Clear<click>": function (e, target, name) 
		{
		    this.setValue ("Term", "");
            var term = this.getInput ("Term");
            if (term) 
                term.focus (); 
		}
	}
},
{
	originalTerm: '',
	originalDb: ''
});


Portal.Portlet.Pubmed_SearchBar = Portal.Portlet.extend ({
  
	init: function (path, name, notifier) 
	{
		console.info ("Created SearchBar"); 
		this.base (path, name, notifier);

        Portal.Portlet.Pubmed_SearchBar.originalTerm = this.getValue("Term");
        Portal.Portlet.Pubmed_SearchBar.originalDb = this.getValue("Db");
	},

	// Define message sender methods here.
	// If you just want to send a message the standard way, simply
	// supply "null" as the implementation. 
	// 
	send: {
		"Cmd": null,
		"Term": null,
		"TabCmd": null,
		"DbChanged": null, 
		"SearchBarSearch": null
	},

	// Define messages and events
	listen: {

		// Global message bus
		'IndexLogicalOp': function(sMessage, oData, sSrc) {
			var sbTerm = this.getValue("Term");
			var oTerm = this.getInput("Term");
			var newValue = oData.key;

			console.info ("In Indexlogocalop in SearchBar");

			if (sbTerm != "") {
				newValue = sbTerm + ' ' + oData.op + ' ' + oData.key;
			}
			this.setValue("Term", newValue);
			if (oTerm) {
			   oTerm.focus();
			}
		},

		'TermLogicalOp': function(sMessage, oData, sSrc) {
			var sbTerm = this.getValue("Term");
			var bNotBlank = sbTerm != "";
			
			if (bNotBlank)
			   sbTerm = '(' + sbTerm + ') ' + oData.op + ' (';
			
			sbTerm += oData.key;
			
			if (bNotBlank)
			   sbTerm += ')';
	 
			this.setValue("Term", sbTerm);  
			this.send.Term({'term' : sbTerm});
			this.getInput("Term").focus();
		},

		'LimitsGoClicked': function(sMessage, oData, sSrc) {
			this.send.Cmd({
				'cmd' : this.getValue("Go:cmd")
			});
			this.send.Term({
				'term' : this.getValue("Term")
			});
			// for back button fix, when go is clicked, also send db in searchbar, for checking against dbconnector
			this.send.SearchBarSearch({
				'db' : this.getValue("Db")
			});
			Portal.requestSubmit();
		},

		'Cmd': function(sMessage, oData, sSrc) {
			if (oData.cmd == 'CommandTabClicked'){
				// for back button fix, when Tab is clicked, also send db in searchbar
				if (this.getValue("Db")){
					this.send.DbChanged({
						'db' : this.getValue("Db")
					});
				}
			}
		},
		
		'AppendTerm': function(sMessage, oData, sSrc) {
		    var newTerm = Portal.Portlet.Pubmed_SearchBar.originalTerm;
		    if (Portal.Portlet.Pubmed_SearchBar.originalTerm != '' && oData.op != ''){
		        newTerm += ' ' + oData.op + ' ';
		    }
		    newTerm += oData.term;
		    //this.setValue("Term", newTerm); 
			this.send.Term({'term': newTerm });
			// for back button fix, send original db
			this.send.SearchBarSearch({
				'db' : Portal.Portlet.Pubmed_SearchBar.originalDb
			});
		},
		
		'ClearSearchBarTerm': function(sMessage, oData, sSrc) {
			this.setValue("Term", '');
		}, 

		// Browser events
		"Term<keypress>": function(event, target, name) {
			event = event || utils.fixEvent (window.event);
			if ((event.keyCode || event.which) == 13) 
			{
				// Emulate Go command.
	    
				console.info ("In term keypress: CMD  in SearchBar");
				this.send.Cmd({'cmd' : this.getValue("Term:cmd") });

				// In History Tab, Term field should send command Preview
				if (this.getValue("Term:cmd") == 'Preview')
				{
					this.send.TabCmd({
						'tab' : this.getValue("Db:tab")
					});
				}
	    
				console.info ("In term keypress : TERM in SearchBar");
				this.send.Term({'term': this.getValue("Term") });

			    // for back button fix, when go is clicked, also send db in searchbar, for checking against dbconnector
			    this.send.SearchBarSearch({
				    'db' : this.getValue("Db")
			    });
            
				event.returnValue = false;
				if (event.stopPropagation != undefined)
                      event.stopPropagation ();   
				if (event.preventDefault != undefined)
                      event.preventDefault ();   
				Portal.requestSubmit (); 
				return false;
			}
		},
      
		// Cmd is set to Go, so ResultsView of other database can choose component based 
		// on value of Cmd. The existing search term is also passed down.
		"Go<click>": function(e, target, name) {
		 	this.send.Cmd({
				'cmd' : this.getValue("Go:cmd")
			});
		   	this.send.Term({
				'term' : this.getValue("Term")
			});
			// for back button fix, when go is clicked, also send db in searchbar, for checking against dbconnector
		 	this.send.SearchBarSearch({
				'db' : this.getValue("Db")
			});
		},
		

		"Preview<click>": function(e, target, name) {
		 	this.send.Cmd({
				'cmd' : 'Preview'
			});
		   	this.send.Term({
				'term' : this.getValue("Term")
			});
		   	this.send.TabCmd({
				'tab' : this.getValue("Preview:tab")
			});
			// for back button fix, when go is clicked, also send db in searchbar, for checking against dbconnector
		 	this.send.SearchBarSearch({
				'db' : this.getValue("Db")
			});
		},
	  
		// to indicate that the db field was the submitter, this will also set future 
		// TabCmd to current TabCmd and keep the existing search term.
		"Db<change>": function(e, target, name) {
		 	this.send.Cmd({
				'cmd' : this.getValue("Db:cmd")
			});
			console.info ("In DB SearchBar: " + this.getValue("Db:cmd"));
			this.send.TabCmd({
				'tab' : this.getValue("Db:tab")
			});
			this.send.DbChanged({
				'db' : this.getValue("Db")
			});
			this.send.Term({
				'term' : this.getValue("Term")
			});
		},
		
		// On Clear button click, set focus to search box and clear the term
		"Clear<click>": function (e, target, name) 
		{
		    this.setValue ("Term", "");
            var term = this.getInput ("Term");
            if (term) 
                term.focus (); 
		},
		
		// On Advanced Search click, clear the term field and set Cmd
		"AdvSearch<click>": function (e, target, name) 
		{	
		    if (this.getInput("Term") && this.getValue("Term") != ''){
		        target.href = target.href + "?term=" + encodeURIComponent(this.getValue("Term")); /* Term may contain special char */
		    }
		    
		   	window.location = target.href;			
		}
	}
},
{
	originalTerm: '',
	originalDb: ''
});

