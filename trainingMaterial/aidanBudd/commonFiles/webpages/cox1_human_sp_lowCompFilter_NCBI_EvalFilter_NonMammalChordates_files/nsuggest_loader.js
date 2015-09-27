function NSuggest_Wait()
	{ setTimeout("NSuggest_init()", 100); }

function NSuggest_init(){
	if(typeof NSuggest_OnLoad == 'function') {
	if (!document.getElementById) return;
	NSuggest_OnLoad();
	} else { NSuggest_Wait(); }
}
NSuggest_init();
