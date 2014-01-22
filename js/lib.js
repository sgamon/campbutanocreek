var libJS = {modDate:'Thu Jun 15 13:21:45 2006'};
function testLibJSModDate() {
warn('lib.js was last modified', libJS.modDate);
}
try {
DEBUGJS = DEBUGJS;
} catch (Err) {
DEBUGJS = false;
}
if (location.search.indexOf('DEBUGJS') > -1) {
DEBUGJS = true;
}
if (location.port) {
DEBUGJS = true;
}
if (typeof(IPaddr) != 'undefined') {
if (IPaddr.indexOf('10.128.1.') > -1) {
DEBUGJS = true;
}
}
if (typeof(IPaddr) != 'undefined') {
if (IPaddr.indexOf('199.106.7') > -1) {
DEBUGJS = true;
}
}
if (location.search.indexOf('DEBUGJS=false') > -1) {
DEBUGJS = false;
}
var errmail="qa+JSerror@babycenter.com";
window.onerror=function(message,url,line){
var ua=navigator.userAgent;
var jserrGif=new Image();
jserrGif.src="/js/jserr.gif?ur="+escape(url)+"&ln="+escape(line)+"&me="+escape(message)+"&ua="+escape(ua)+"&em="+ escape(errmail);
return !DEBUGJS;
}
var d=document;
var w=window;
var oBrowser=new BrowserInfo();
function testInstantiatedBrowserInfo() {
debug('oBrowser is defined', (typeof(oBrowser) != 'undefined'));
assertNotUndefined('', oBrowser);
}
if (!window.Node) {
var Node = {
ELEMENT_NODE:1,
ATTRIBUTE_NODE:2,
TEXT_NODE:3,
CDATA_SECTION_NODE:4,
ENTITY_REFERENCE_NODE:5,
ENTITY_NODE:6,
PROCESSING_INSTRUCTION_NODE:7,
COMMENT_NODE:8,
DOCUMENT_NODE:9,
DOCUMENT_TYPE_NODE:10,
DOCUMENT_FRAGMENT_NODE:11,
NOTATION_NODE:12
}
}
var eolas = {
write: function (text) {
document.write(text);
}
}
var timeline={
showFlash:function() {
if ((this.f&&this.g&&FlashMovie.isEnabled)||this.setObj()) {
this.g.setStyle("display","none");
this.f.setStyle("display","");
if (oBrowser.isSafari) this.f.innerHTML+="";
}
},
showGif:function(){
if((this.f&&this.g&&FlashMovie.isEnabled)||this.setObj()){
this.f.setStyle("display","none");
this.g.setStyle("display","");
}
},
setObj:function(){
var f=getDiv("timelineFlash");
var g=getDiv("timelineGif");
if (f&&g&&!(oBrowser.isMac&&oBrowser.isIe)) {
this.f=mdo(f);
this.g=mdo(g);
return true;
} else {
return false;
}
}
}
function testInstantiatedTimeline() {
debug('timeline is defined', (typeof(timeline) != 'undefined'));
assertNotUndefined('', timeline);
assertNotUndefined('', timeline.showFlash);
assertNotUndefined('', timeline.showGif);
assertNotUndefined('', timeline.setObj);
}
var Time={sc:1000,mn:60000,hr:3600000,dy:86400000,wk:604800000,mo:18144000000,yr:31536000000};
var tn={
delay:50,
TO:null,
OB:null,
initialized:false,
enabled:(document.getElementById&&!(oBrowser.isMac&&oBrowser.isIe))
};
tn.over=function(el){
if (this.TO) {
clearTimeout(this.TO);
this.TO=null;
}
}
tn.out=function(el){
this.hide();
}
tn.show=function(el){
if (!el||!this.enabled) return;
this.iOffsets=getOffsets(document.getElementById("topnavimg"));
var area=el.coords.split(",");for(var i=0; i<area.length; i++){area[i]=parseInt(area[i]);}
var top=this.iOffsets.t+area[3],left=this.iOffsets.l+area[0]+((area[2]-area[0]-120)/2);
if(this.TO){clearTimeout(this.TO);this.hide(true);}
this.OB=mdo(el.id+"Menu")
this.OB.moveTo(left,top);
if (!document.all) {
if (timeline.show) {clearTimeout(timeline.show);}
if (FlashMovie.isEnabled) {timeline.showGif();}
}
this.OB.show();
return true;
}
tn.hide=function(force){
if(!this.enabled)return;
if (force||this.TO) {
this.TO=null;
if (!document.all) timeline.show=setTimeout('timeline.showFlash();',500);
this.OB.hide();
} else {
this.TO=setTimeout("tn.hide()",this.delay);
}
return true;
}
tn.init=function(id){
if (!this.enabled) return;
if (this.initialized) {
return;
} else {
this.initialized = true;
}
if (!getDiv(id)) {
return;
}
var el = mdo(id);
var menus = (el.children) ? el.children : (el.childNodes) ? el.childNodes : null;
for (var i=0; i<menus.length; i++) {
if (!menus[i].id) continue;
menus[i].onmouseover=function(evt) {
var el = (evt) ? evt.target.parentNode : (event) ? event.srcElement : null;
tn.over(el);
};
menus[i].onmouseout=function(evt) {
var el = (evt) ? evt.target.parentNode : (event) ? event.srcElement : null;
tn.out(el);
};
}
}
function testInstantiatedTN() {
debug('tn (top nav) is defined', (typeof(tn) != 'undefined'));
assertNotUndefined('', tn);
assertNotUndefined('', tn.over);
assertNotUndefined('', tn.out);
assertNotUndefined('', tn.show);
assertNotUndefined('', tn.hide);
assertNotUndefined('', tn.init);
}
Array.prototype.uniq = function() {
var arr = this.sort();
var i = 0;
while(i < (arr.length-1)) {
if (arr[i] != arr[i+1]) {
i++;
} else {
arr.splice(i, 1)
}
}
return arr;
}
function testArrayUniq() {
var arrs = new Array();
var i=0;
arrs[0] = {before:['a', 'a', 'c', 'c', 'b', 'b'],
after:'a,b,c'};
i++
for (var i=0; i<arrs.length; i++) {
var result = arrs[i].before.uniq().join(',');
assertTrue('Array.uniq() test ' + i, (result == arrs[i].after));
}
debug('Array.uniq() is defined', (result == arrs[i-1].after));
}
if (!Array.prototype.push) {
Array.prototype.push = function(value) {
this[this.length] = value;
}
}
if (!Array.prototype.splice) {
Array.prototype.splice =  function (s, d) {
var max = Math.max,
min = Math.min,
a = [],
e,
i = max(arguments.length - 2, 0),
k = 0,
l = this.length,
n,
v,
x;
s = s || 0;
if (s < 0) {
s += l;
}
s = max(min(s, l), 0);
d = max(min(isNumber(d) ? d : l, l - s), 0);
v = i - d;
n = l + v;
while (k < d) {
e = this[s + k];
if (!isUndefined(e)) {
a[k] = e;
}
k += 1;
}
x = l - s - d;
if (v < 0) {
k = s + i;
while (x) {
this[k] = this[k - v];
k += 1;
x -= 1;
}
this.length = n;
} else if (v > 0) {
k = 1;
while (x) {
this[n - k] = this[l - k];
k += 1;
x -= 1;
}
}
for (k = 0; k < i; ++k) {
this[s + k] = arguments[k + 2];
}
return a;
}
}
function BrowserInfo() {
var ua = navigator.userAgent.toLowerCase();
var pl = navigator.platform.toLowerCase();
var an = navigator.appName.toLowerCase();
var av = navigator.appVersion.toLowerCase();
this.isNav=((ua.indexOf('mozilla')>-1)&&(ua.indexOf('compatible')<0)&&(ua.indexOf('netscape')>0));
this.isMoz=((ua.indexOf('mozilla')>-1)&&(ua.indexOf('compatible')<0)&&(ua.indexOf('netscape')<0));
this.isIe=(ua.indexOf('msie')>0);
this.isSafari=(ua.indexOf('safari')>0);
this.isGecko=(ua.indexOf('gecko')>0);
this.isFirefox=(ua.indexOf('firefox')>0);
this.isAol=(ua.indexOf('aol')>0);
this.isOpera=(ua.indexOf('opera')>0);
this.version=null;
if (this.isIe) {
var versions=ua.match(/msie ([0-9.]+)/);
this.version=parseFloat(versions[1]);
} else if (this.isSafari) {
var versions=ua.match(/safari\/([0-9.]+)/);
this.version=parseFloat(versions[1]);
} else if (this.isFirefox) {
var versions=ua.match(/firefox\/([0-9.]+)/);
this.version=parseFloat(versions[1]);
} else if (this.isNav&&this.isGecko) {
var versions=ua.substring(ua.indexOf('netscape'));
if (versions > -1) {
this.version=parseFloat(versions.substring(versions.indexOf('/')+1));
} else {
versions = ua.match(/rv:([0-9.]+)/);
this.version=parseFloat(versions[1]);
}
} else {
this.version=parseFloat(av);
}
this.buildDate=null;
if (this.isGecko) {
if (this.isSafari) {
var versions=ua.match(/applewebkit\/([0-9.]+)/);
this.buildDate=parseInt(versions[1]);
} else {
var versions=ua.match(/gecko\/([0-9.]+)/);
this.buildDate=parseInt(versions[1]);
}
}
this.isWin=(ua.indexOf('win')>0);
this.isXPSP2=(ua.indexOf('sv')>0);
this.isMac=(ua.indexOf('mac')>0);
this.isUnix=(ua.indexOf("x11")>0);
this.isOs2=(ua.indexOf('os/2')>0);
this.isMacIe=((ua.indexOf('mac')>0) && (ua.indexOf('msie')>0));
this.winVersion=null;
if (this.isWin) {
versions = ['16', '95', '98', 'nt', '2000', 'xp'];
for (var i=0; i<versions.length; i++) {
eval('test = (ua.indexOf("' + versions[i] + '")>0)');
if (test) {
this.winVersion=versions[i];
}
}
}
this.macVersion=null;
if (this.isMac) { 	this.macVersion=(ua.indexOf('68k')>0||ua.indexOf('68000')>0)?'68k':(ua.indexOf('ppc')>0||ua.indexOf('powerpc')>0)?'ppc':null;
}
return this;
}
BrowserInfo.prototype.toString = toString;
function ChildWindow() {
this.width=350;
this.height=400;
this.resizable=true;
this.scrollbars=false;
this.menubar=false;
this.toolbar=false;
this.location=false;
this.status=false;
this.directories=false;
this.left=(document.all) ? window.screenLeft+100 : window.screenX+100;
this.top=(document.all) ? window.screenTop+100 : window.screenY+100;
this.mode=1;
this.html="";
this.url="";
this.index=ChildWindow.instances.length;
this.name="default_window";
if (arguments.length) {
if(typeof(arguments[0])=="string") {
this.url=arguments[0];
this.mode=0;
} else if (typeof(arguments[0])=="object") {
this.setProperties(arguments[0]);
}
}
this.ref=null;
ChildWindow.instances[ChildWindow.instances.length]=this;
if (this.html||this.url) this.show();
}
ChildWindow.allowMultiple=true;
ChildWindow.instances=new Array();
ChildWindow.prototype.toString=toString;
ChildWindow.prototype.show=function(){
if (!window.open) return;
if (this.mode==0) {
this.ref=window.open(this.url, this.name);
} else {
var newChild=!this.isOpen();
var config="";
config+="width="+this.width+",";
config+="height="+this.height+",";
config+=(this.resizable)?"resizable=yes,":"";
config+=(this.scrollbars)?"scrollbars=yes,":"";
config+=(this.toolbar)?"toolbar=yes,":"";
config+=(this.menubar)?"menubar=yes,":"";
config+=(this.location)?"location=yes,":"";
config+=(this.status)?"status=yes,":"";
config+=(this.directories)?"directories=yes,":"";
config+="left="+this.left+",";
config+="top="+this.top+",";
if ((!ChildWindow.allowMultiple&&ChildWindow.countOpen()>0)||(oBrowser.isGecko&&this.mode<0)) {
return;
}
this.ref=window.open("",this.name,config);
if (!newChild) {
this.resizeTo(this.width,this.height);
this.moveTo(this.left,this.top);
}
if (this.mode<0&&this.ref) {
this.ref.blur();
this.ref.opener.focus();
} else if (this.ref) {
this.ref.focus();
}
if (this.url) {
this.setUrl();
} else if (this.html) {
this.setHtml();
}
}
}
ChildWindow.prototype.setProperties=function(prop){
for (key in prop) {
if (this[key]!='undefined') this[key]=prop[key];
}
if (prop['url']) this.html="";
}
ChildWindow.prototype.isOpen=function() {
if (this.ref&&!this.ref.closed) {
return true;
} else {
return false;
}
}
ChildWindow.prototype.setUrl=function(url) {
if (url) {
this.html="";
this.url=url;
}
if (this.isOpen()) this.ref.location.href=this.url;
}
ChildWindow.prototype.setHtml=function(html){
if (html) {
this.url="";
this.html=html;
}
if (this.isOpen()) {
this.ref.document.open("text/html");
this.ref.document.write(this.html);
this.ref.document.close();
}
}
ChildWindow.prototype.moveBy=function(horiz,vert) {
if (this.isOpen()) {
var left=(document.all) ? this.ref.screenLeft : this.ref.screenX;
var top=(document.all) ? this.ref.screenTop : this.ref.screenY;
this.left=left+horiz;
this.top=top+vert;
this.ref.moveTo(this.left,this.top);
}
}
ChildWindow.prototype.resizeTo=function(w,h) {
var oldW=(this.ref.innerWidth) ? this.ref.innerWidth : this.ref.document.body.clientWidth;
var oldH=(this.ref.innerHeight) ? this.ref.innerHeight : this.ref.document.body.clientHeight;
this.resizeBy(w-oldW,h-oldH)
}
ChildWindow.prototype.resizeBy=function(w,h) {
this.width+=w;
this.height+=h;
this.ref.resizeBy(w,h);
}
ChildWindow.prototype.moveTo=function(left,top) {
if (this.isOpen()) {
this.left=left;
this.top=top;
this.ref.moveTo(this.left,this.top);
}
}
ChildWindow.prototype.focus=function() {
if (this.isOpen()) this.ref.focus();
}
ChildWindow.prototype.close=function() {
if (this.isOpen()) {
var left=(document.all) ? this.ref.screenLeft : this.ref.screenX;
var top=(document.all) ? this.ref.screenTop : this.ref.screenY;
this.left=left;
this.top=top;
this.ref.close();
}
}
ChildWindow.prototype.center = function() {
try {
this.left = Math.floor(screen.availWidth/2 - this.width/2);
this.top = Math.floor(screen.availHeight/2 - this.height/2);
} catch (e) {
}
}
ChildWindow.countOpen=function() {
var count=0;
for (var i=0;i<ChildWindow.instances.length;i++) {
if (ChildWindow.instances[i].isOpen()) count++;
}
return count;
}
ChildWindow.webcapPopup = function(url, scroll, width, height) {
var s = false;
var w = 350;
var h = 320;
if (arguments.length > 1) {
s = scroll;
}
if (arguments.length > 2 && !isNaN(width)) {
w = width;
}
if (arguments.length > 3 && !isNaN(height)) {
h = height;
}
var p = new ChildWindow(
{
width:w,
height:h,
status:false,
scrollbars:s
}
);
p.center();
p.url = url;
p.show();
p.focus();
}
ChildWindow.reloadOpener = function (url, closeself) {
if (arguments.length < 2)
closeself = true;
var target = opener ? opener : self;
target.location = url;
if (closeself && target != self)
self.close();
}
function Cookie(name, expInMs, path, domain, secure) {
if (!name) name = "default";
this.$name = name;
if (typeof(expInMs) == 'number') {
this.$expiration = new Date((new Date()).getTime() + expInMs);
} else {
this.$expiration = new Date((new Date()).getTime() + Time.yr);
}
if (path) {
this.$path = path;
} else {
this.$path = null;
}
if (domain) {
this.$domain = domain;
} else {
this.$domain = null;
}
if (secure) {
this.$secure = true;
} else {
this.$secure = false;
}
if (this.load()) {
this.$saved = true;
} else {
this.$saved = false;
}
}
Cookie.prototype.isSet = function(key) {
key=''+key;
if (key) {
return (this[key]) ? true : false;
} else {
return this.$saved;
}
}
Cookie.prototype.set = function (key, val, noSave) {
if (typeof(key)=='undefined') return;
key=''+key;
if (typeof(val)=='undefined') {
this.$value = key;
} else {
this[key] = { value: val, time: new Date().getTime() };
}
if (!noSave) {
this.save();
if (this.load()) this.$saved = true;
}
}
Cookie.prototype.get = function (key) {
if ((typeof(key)=='undefined') || (this.$value)) {
if (this.$value) {
return this.$value;
} else {
return null;
}
} else {
key=''+key;
if (this[key]) {
return this[key];
} else {
return null;
}
}
}
Cookie.prototype.save = function () {
var cookieval = "";
if (this.$value) {
cookieval = escape(this.$value);
} else {
for(var key in this) {
key=''+key;
if ((key.charAt(0) == '$') || ((typeof this[key]) == 'function')) continue;
if (cookieval != "") cookieval+='&';
cookieval+=key + ':' + escape(this[key].value) + "/" + this[key].time;
}
}
var cookie = this.$name + '=' + cookieval;
if (this.$expiration) cookie+='; expires=' + this.$expiration.toGMTString();
if (this.$path) cookie+='; path=' + this.$path;
if (this.$domain) cookie+='; domain=' + this.$domain;
if (this.$secure) cookie+='; secure';
document.cookie = cookie;
}
Cookie.prototype.load = function() {
this.remove(false);
var cookies = document.cookie;
var start = cookies.indexOf(this.$name + '=');
if (cookies == "" || start == -1) return false;
start+=this.$name.length + 1;
var end = cookies.indexOf(';', start);
if (end == -1) end = cookies.length;
var cookieval = cookies.substring(start, end);
var a = cookieval.split('&');
if ((a.length == 1) && (a[0].indexOf('/') == -1)) {
this.$value = a[0];
} else {
for(var i=0; i < a.length; i++) {
a[i] = a[i].split(':');
a[i][1] = a[i][1].split('/');
}
for(var i = 0; i < a.length; i++) {
this[''+a[i][0]] = { value: unescape(a[i][1][0]), time: parseInt(a[i][1][1]) };
}
}
return true;
}
Cookie.prototype.remove = function(key, noSaveFlag) {
if (key) {
key=''+key;
if (this[key]) delete(this[key]);
if (!noSaveFlag) this.save();
var kill = true;
for (var k in this) {
k=''+k;
if ((k.charAt(0) != '$') && ((typeof this[k]) != 'function')) {
kill = false;
}
}
}
if (!key || kill) {
for(var k in this) {
k=''+k;
if ((k.charAt(0) == '$') || ((typeof this[k]) == 'function')) {
continue;
}
delete(this[k]);
}
if (this.$value) delete(this.$value);
if (key == false) return;
var cookie;
cookie = this.$name + '=';
if (this.$path) cookie+='; path=' + this.$path;
if (this.$domain) cookie+='; domain=' + this.$domain;
cookie+='; expires=Fri, 02-Jan-1970 00:00:00 GMT';
document.cookie = cookie;
this.$saved = false;
}
}
Cookie.prototype.update = function() {
if (!this.load()) {
this.remove(false);
}
}
Cookie.prototype.toString = function() {
var cv = "";
if (this.$value)
cv = this.$value;
else {
for(var k in this) {
k=''+k;
if ((k.charAt(0) == '$') || ((typeof this[k]) == 'function'))
continue;
if (cv != "") cv+='\n';
cv+=k + ' = ' + escape(this[k].value) + " (" + new Date(parseInt(this[k].time)) + ")";
}
}
return cv;
}
Cookie.prototype.isExpired = function (k, nt) {
k=''+k;
var n = parseInt(nt);
var t = (nt.indexOf("s")!=-1) ? Time.sc
: (nt.indexOf("m")!=-1) ? Time.mn
: (nt.indexOf("h")!=-1) ? Time.hr
: (nt.indexOf("w")!=-1) ? Time.wk : Time.dy;
if (this.$value) {
return false;
} else if (!this[k] || !this[k].time) {
return true;
}
return ( (this[k].time + (n * t)) < new Date().getTime() );
}
Cookie.isEnabled = true;
var cTest=new Cookie('ct');
cTest.set('test',1);
if (cTest.$saved) {
cTest.remove();
} else {
Cookie.isEnabled=false;
}
function testInstantiatedCookie() {
debug('cTest is defined', (typeof(cTest) != 'undefined'));
assertNotUndefined('cTest', cTest);
assertNotUndefined('cTest.isSet', cTest.isSet);
assertNotUndefined('cTest.set', cTest.set);
assertNotUndefined('cTest.get', cTest.get);
assertNotUndefined('cTest.save', cTest.save);
assertNotUndefined('cTest.load', cTest.load);
assertNotUndefined('cTest.remove', cTest.remove);
assertNotUndefined('cTest.update', cTest.update);
assertNotUndefined('cTest.isExpired', cTest.isExpired);
}
function DObj(id){this.o=mdo(id,true);}
DObj.winX=function(){return getW();}
DObj.winY=function(){return getH();}
DObj.prototype.left=function(){if(this.o)return this.o.getStyle("left");}
DObj.prototype.top=function(){if(this.o)return this.o.getStyle("top");}
DObj.prototype.setHtml=function(html){if(this.o)this.o.setHTML(html);}
DObj.prototype.show=function(){if(this.o)this.o.show();}
DObj.prototype.hide=function(){if(this.o)this.o.hide();}
DObj.prototype.moveTo=function(x,y){if(this.o)this.o.moveTo(x,y);}
DObj.prototype.moveBy=function(dX,dY){if(this.o)this.o.moveTo(parseInt(this.o.getStyle("left"))+dX,parseInt(this.o.getStyle("top"))+dY);}
DObj.prototype.clip=function(t,r,b,l){if(this.o)this.o.clip(t,r,b,l);}
function FlashMovie(o) {
for (var k in o) {
this[k] = o[k];
}
if (typeof(FlashMovie.instances) == 'undefined') {
FlashMovie.instances = new Array();
}
var qs = "";
if (typeof(this.clickTags)=="object") {
if (typeof(this.clickTagsStartNum) == 'undefined') {
this.clickTagsStartNum = 1;
}
for (i=0; i<this.clickTags.length; i++)	{
if (qs != "")  qs +="&";
qs += "clickTag"+(i+this.clickTagsStartNum)+"="+escape(this.clickTags[i]);
}
}
if (typeof(this.jsTags)=="object") {
for (i=0; i<this.jsTags.length; i++) {
if (qs != "")  qs +="&";
qs += "jsTag"+(i+1)+"="+escape(this.jsTags[i]);
}
}
this.url = (qs!="")?this.url+((this.url.indexOf("?")>-1)?"&":"?")+qs:this.url;
if (!this.quality) this.quality = 'autohigh';
if (!this.bgcolor) this.bgcolor = '#ffffff';
if (!this.wmode) this.wmode = 'opaque';
if (oBrowser.isIe) {
if (!this.id) this.id = 'flashId' + FlashMovie.instances.length;
}
if (!this.FlashVars) this.FlashVars = '';
if (typeof(this.FlashVars)=='object') {
var fv = '';
for (var prop in this.FlashVars) {
if (fv) fv += '&';
fv += prop + '=' + escape(this.FlashVars[prop]);
}
this.FlashVars = fv;
}
if (!this.name) {
this.name = 'FlashObj' + Math.random();
this.name = this.name.replace(/0[.]/, '');
}
FlashMovie.instances[FlashMovie.instances.length] = this;
}
FlashMovie.prototype.classid = 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000';
FlashMovie.prototype.pluginspage = 'http://www.macromedia.com/go/getflashplayer';
FlashMovie.prototype.codebase = 'http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0';
FlashMovie.prototype.type = 'application/x-shockwave-flash';
FlashMovie.instances = new Array();
FlashMovie.prototype.toString = toString;
FlashMovie.prototype.addFlashVars = function(o) {
if (typeof(o)=='object') {
this.FlashVars = '';
for (var prop in o) {
if (this.FlashVars)  this.FlashVars += '&';
this.FlashVars += prop + '=' + escape(o[prop]);
}
}
}
FlashMovie.prototype.getHtml = function() {
var htmlout='';
if (typeof(this.width) == 'undefined') {
this.width = null;
}
if (typeof(this.height) == 'undefined') {
this.height = null;
}
if (!this.url) {
return htmlout;
} else if (FlashMovie.isEnabled) {
htmlout += '<object';
htmlout += ' classid="'+this.classid+'"';
htmlout += ' codebase="'+this.codebase+'"';
htmlout += ' id="'+this.id+'"';
if (this.width) {
htmlout += ' width="'+this.width+'"';
}
if (this.height) {
htmlout += ' height="'+this.height+'"';
}
htmlout += '>\n';
htmlout += ((this.FlashVars) ? '<param name="FlashVars" value="'+this.FlashVars+'">\n' : '');
htmlout += ((this.base) ? '<param name="base" value="'+this.base+'">\n' : '');
htmlout += '<param name="movie" value="'+this.url+'">\n';
htmlout += '<param name="wmode" value="'+this.wmode+'">\n';
htmlout += '<param name="quality" value="'+this.quality+'">\n';
htmlout += '<param name="bgcolor" value="'+this.bgcolor+'">\n';
htmlout += '<embed';
htmlout += ((this.name) ? ' name="'+this.name+'"' : '');
htmlout += ((this.base) ? ' base="'+this.base+'"' : '');
htmlout += ((this.FlashVars) ? ' FlashVars="'+this.FlashVars+'"' : '');
htmlout += ' src="'+this.url+'"';
htmlout += ' quality="'+this.quality+'"';
htmlout += ' bgcolor="'+this.bgcolor+'"';
htmlout += ' wmode="'+this.wmode+'"';
if (this.width) {
htmlout += ' width="'+this.width+'"';
}
if (this.height) {
htmlout += ' height="'+this.height+'"';
}
htmlout += ' type="'+this.type+'"';
htmlout += ' pluginspage="'+this.pluginspage+'"';
htmlout += '></embed>\n';
htmlout+='</object>';
} else if (this.altUrl) {
htmlout += (this.altClick) ? '<a href="'+this.altClick+'">' : '';
htmlout += '<img src="'+this.altUrl+'" width="'+this.width+'" height="'+this.height+'" alt="" border="0">';
htmlout += (this.altClick) ? '</a>' : '';
} else if (this.altHTML) {
htmlout = this.altHTML;
}
return htmlout;
}
FlashMovie.prototype.handle = function() {
return (oBrowser.isIe) ? window[this.name] : document[this.name];
}
FlashMovie.version = getFlashVersion();
FlashMovie.isEnabled = isEnabledFlash(5);
var Form = new Object();
Form.radioValue = function (RadioArray) {
var value = '';
for (var i=0; i<RadioArray.length; i++) {
if (RadioArray[i].checked) {
value = RadioArray[i].value;
}
}
return value;
}
Form.validate = function (f, d){
Form.validate.SUCCESS	= 0;
Form.validate.REQUIRED	= 1;
Form.validate.INVALID	= 2;
var debug = false;
if (arguments.length == 2){
debug = d;
}
var errors = new Array();
for(i = 0; i < f.elements.length; i++){
var arrE	= f.elements[i];
var strId	= arrE.id;
var arrTyp	= strId.split("_");
var remSpc	= new RegExp('^\s*(.*?)\s*$');
var strVal	= remSpc.exec(arrE.value)[1];
var errObj = null;
if (arrE.disabled == true){
continue;
}
for(j = 1; j < arrTyp.length; j++){
var valTyp = arrTyp[j];
if ((j == 1) && (valTyp != "t" && valTyp != "f")) {
throw new Error('Error in Form.validate(): second field must be "t" or "f".');
}
if ((arrE.type == "select-one" || arrE.type == "select-multiple") && valTyp == "t"){
if (arrE.selectedIndex == 0){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.REQUIRED);
}
break;
}
if (valTyp == "t" || valTyp == "f"){
var req = reqVal(valTyp, strVal);
if (req == false){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.REQUIRED);
break;
}
}
if (strVal.length == 0){
break;
}
switch(valTyp.slice(0,3)){
case "max":
var len = valTyp.split("max")[1];
valTyp = valTyp.slice(0,3);
break;
case "min":
var len = valTyp.split("min")[1];
valTyp = valTyp.slice(0,3);
break;
}
switch(valTyp){
case "t":
case "f":
if (j != 1) {
throw new Error('Error in Form.validate(): "t" and "f" not allowed in field ' + j + '.');
}
break;
case "max":
if (maxVal(len, strVal) == false){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.INVALID);
}
break;
case "min":
if (minVal(len, strVal) == false){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.INVALID);
}
break;
case "ltr":
if (ltrVal(strVal) == false){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.INVALID);
}
break;
case "num":
if (numVal(strVal) == false){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.INVALID);
}
break;
case "eml":
if (emlVal(strVal) == false){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.INVALID);
}
break;
case "zip":
if (zipVal(strVal) == false){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.INVALID);
}
break;
case "nz":
if (nzVal(strVal) == false){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.INVALID);
}
break;
case "pho":
if (phoVal(strVal) == false){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.INVALID);
}
break;
case "cc":
if (ccVal(strVal) == false){
errObj = makeError(f, errObj, valTyp, arrE, Form.validate.INVALID);
}
break;
default:
throw new Error('Error in Form.validate(): "' + valTyp + '" is not a defined validation type.');
break;
}
}
if (errObj != null){
errors[errors.length] = errObj;
}
}
if (debug && errors.length != 0){
var msg = "Your Errors:\n";
for(k = 0; k < errors.length; k++){
msg += errors[k].name + " " + errors[k].id + " " + errors[k].code + " " + errors[k].errors.join(" | ") + errors[k].message + "\n";
}
alert(msg);
}
return errors;
function makeError(f, o, v, e, c){
if (o == null){
o = new Object();
o.form = f;
o.element = e;
o.name = e.getAttribute("name");
o.id = e.getAttribute("id");
o.errors = new Array();
}
o.errors[o.errors.length] = v;
o.code = c;
o.message = getlabel(f,o) + " is " + ((c == 1) ? "required." : "invalid.");
return o;
}
function getlabel(form,error) {
var string = (error.name != null) ? error.name : "Field";
var labels = form.getElementsByTagName("label");
for (var i =0; i <labels.length; i++) {
var label = labels[i];
var labelid = label.getAttribute("for");
if (labelid == error.id)
string =  label.childNodes[0].nodeValue;
}
return string;
}
function reqVal(r, p){
return !(r == "t" && p.length == 0);
}
function ltrVal(p){
var val = /^[a-zA-Z\s]*$/;
return (val.test(p));
}
function numVal(p){
var val = /^[0-9\s]*$/;
return (val.test(p));
}
function emlVal(p){
var val =  /^[^@]+@[^@.]+\..+$/;
return (val.test(p));
}
function zipVal(p){
if (p.length == 5){
var val = /^[0-9]{5}$/;
}
else if (p.length == 9){
var val = /^[0-9]{9}$/;
}
else if (p.length == 10){
var val = /^[0-9]{5}-[0-9]{4}$/;
}
else {
return false;
}
return (val.test(p));
}
function maxVal(l, p){
return (p.length <= l);
}
function minVal(l, p){
return (p.length >= l);
}
function nzVal(p){
var val = /^[0]*$/;
return !(val.test(p));
}
function phoVal(p){
var val = /^[\d\W]*$/;
if (val.test(p)){
var num = p.match(/\d+/g).join("");
if (num.length == 10 || num.length == 11){
return true;
}
else{
return false;
}
}
return false;
}
function ccVal(p){
var val = /^[\d\W]*$/;
if (val.test(p)){
var num = p.match(/\d+/g).join("");
if (num.length == 16){
return true;
}
else{
return false;
}
}
return false;
}
}
Form.validateExpDate = function (m, y){
var today = new Date();
var thisMonth = today.getMonth();
var thisYear = today.getFullYear();
var expMon = m - 1;
var expYear = y;
if (expYear > thisYear) {
return true;
}
else if (expYear < thisYear) {
return false;
}
else if (expYear = thisYear){
if (expMon >= thisMonth){
return true;
}
else if (expMon < thisMonth){
return false;
}
}
return true;
}
if ((typeof(HTMLElement) != 'undefined') && (typeof(HTMLElement.innerText) == 'undefined')) {
HTMLElement.prototype.__defineGetter__("innerText",
function () { return(this.textContent); });
HTMLElement.prototype.__defineSetter__("innerText",
function (txt) { this.textContent = txt; });
}
Number.prototype.nth = function () {
var S = this.toString();
return S.nth();
}
function testNumberNth() {
var i=1;
debug('Number.nth() is defined', (typeof(i.nth) != 'undefined'));
i=1;    assertTrue(i + ' nth()', (i.nth() == '1st'));
i=2;    assertTrue(i + ' nth()', (i.nth() == '2nd'));
i=3;    assertTrue(i + ' nth()', (i.nth() == '3rd'));
i=4;    assertTrue(i + ' nth()', (i.nth() == '4th'));
i=11;   assertTrue(i + ' nth()', (i.nth() == '11th'));
i=12;   assertTrue(i + ' nth()', (i.nth() == '12th'));
i=13;   assertTrue(i + ' nth()', (i.nth() == '13th'));
i=14;   assertTrue(i + ' nth()', (i.nth() == '14th'));
i=101;  assertTrue(i + ' nth()', (i.nth() == '101st'));
i=111;  assertTrue(i + ' nth()', (i.nth() == '111th'));
i=112;  assertTrue(i + ' nth()', (i.nth() == '112th'));
i=232;  assertTrue(i + ' nth()', (i.nth() == '232nd'));
i=334;  assertTrue(i + ' nth()', (i.nth() == '334th'));
i=1003; assertTrue(i + ' nth()', (i.nth() == '1003rd'));
}
var Omniture = new Object();
Omniture.trackClick = function (clickEvent) {
var path = window.location.pathname;
path = path.replace(/\..*$/g, '');
path = path.replace(RegExp(';.*?$'), '');
var out = '';
if (clickEvent) {
out = 	' | ' + clickEvent.join(' | ');
}
s_prop9 = path + out;
s_linkTrackVars='s_prop9';
window.setTimeout('Omniture.sendLinkEvent()', 100);
}
Omniture.sendAnalyticsEvent = function (accnt){
accnt=accnt?accnt:s_account;void(s_gs(accnt))}
Omniture.sendLinkEvent = function (accnt,lnkname,type){
accnt=accnt?accnt:s_account;s_linkType=type?type:"o";s_lnk=true;
s_linkName=lnkname?lnkname:s_linkName?s_linkName:"Flash Link Event";
void(s_gs(accnt))}
Omniture.trackVideoEvent = function (videoEvent) {
s_prop7 = videoEvent;
s_linkTrackVars='s_prop7';
window.setTimeout('Omniture.sendLinkEvent()', 100);
}
function $() {
var elements = new Array();
for (var i = 0; i < arguments.length; i++) {
var element = arguments[i];
if (typeof element == 'string') {
element = document.getElementById(element);
}
if (arguments.length == 1) {
return element;
}
elements.push(element);
}
return elements;
}
function $setBgColor(id, color) {
var elem = $(id);
if (elem) {
elem.style.backgroundColor = color;
}
}
function $fade(id, fadeProps) {
var elem = mdo(id);
if (fadeProps) {
for (var prop in fadeProps) {
elem[prop] = fadeProps[prop];
}
}
elem.fade();
}
String.prototype.nth = function () {
var lastChar = this.charAt(this.length-1);
var suffix = '';
switch(lastChar) {
case '1':
suffix = 'st';
break;
case '2':
suffix = 'nd';
break;
case '3':
suffix = 'rd';
break;
default:
suffix = 'th';
}
if (this.length > 1) {
var num = this.charAt(this.length-2) + lastChar;
num  = parseInt(num);
if ((num > 10) && (num < 20)) {
return this + 'th';
} else {
return this + suffix;
}
} else {
return this + suffix;
}
}
function testStringNth() {
debug('String.nth() is defined', (typeof('1'.nth) != 'undefined'));
assertTrue('1'    + ' nth()', ('1'.nth() == '1st'));
assertTrue('2'    + ' nth()', ('2'.nth() == '2nd'));
assertTrue('3'    + ' nth()', ('3'.nth() == '3rd'));
assertTrue('4'    + ' nth()', ('4'.nth() == '4th'));
assertTrue('11'   + ' nth()', ('11'.nth() == '11th'));
assertTrue('12'   + ' nth()', ('12'.nth() == '12th'));
assertTrue('13'   + ' nth()', ('13'.nth() == '13th'));
assertTrue('14'   + ' nth()', ('14'.nth() == '14th'));
assertTrue('101'  + ' nth()', ('101'.nth() == '101st'));
assertTrue('111'  + ' nth()', ('111'.nth() == '111th'));
assertTrue('112'  + ' nth()', ('112'.nth() == '112th'));
assertTrue('232'  + ' nth()', ('232'.nth() == '232nd'));
assertTrue('334'  + ' nth()', ('334'.nth() == '334th'));
assertTrue('1003' + ' nth()', ('1003'.nth() == '1003rd'));
}
String.prototype.isEmail = function() {
var regxEmail =  /^[^@]+@[^@.]+\..+$/;
return regxEmail.test(this);
}
function testStringIsEmail() {
var emails = new Array();
emails.push('scottg@babycenter.com');
debug('String.isEmail() is defined', (typeof(emails[0].isEmail) != 'undefined'));
for (var i=0; i<emails.length; i++) {
assertTrue(emails[i] + ' is email', emails[i].isEmail());
}
}
String.prototype.toTitleCase = function(MinCharLength) {
if (!MinCharLength) {
MinCharLength = 4;
}
var Words = this.split(' ');
for (var i=0; i<Words.length; i++) {
if (Words[i].length >= MinCharLength) {
var Letter = Words[i].substr(0, 1).toUpperCase();
var TheRest = Words[i].substr(1).toLowerCase();
Words[i] = Letter + TheRest;
}
}
return Words.join(' ');
}
function testStringToTitleCase() {
var strings = new Array();
strings.push('now is the time for all good men to come to the aid of the party.');
debug('String.toTitleCase() is defined', (typeof(strings[0].toTitleCase) != 'undefined'));
var i=0;
assertTrue(strings[i] + ' toTitleCase()', (strings[i].toTitleCase() == 'now is the Time for all Good men to Come to the aid of the Party.'));
assertTrue(strings[i] + ' toTitleCase()', (strings[i].toTitleCase(3) == 'Now is The Time For All Good Men to Come to The Aid of The Party.'));
}
String.prototype.trim = function(side) {
switch (side) {
case 'left': {
return this.replace(/^\s+/g, '');
break;
}
case 'right': {
return this.replace(/\s+$/g, '');
break;
}
default: {
return this.replace(/^\s+|\s+$/g, '');
}
}
}
function testStringTrim() {
var strings = new Array();
strings.push('   blah blah blah         ');
debug('String.trim() is defined', (typeof(strings[0].trim) != 'undefined'));
var i=0;
assertTrue(strings[i] + ' trim()', (strings[i].trim() == 'blah blah blah'));
assertTrue(strings[i] + ' trim("left")', (strings[i].trim('left') == 'blah blah blah         '));
assertTrue(strings[i] + ' trim("right")', (strings[i].trim('right') == '   blah blah blah'));
}
function Survey(o) {
this.status={DISABLED:-1,ONSITE:1,OFFSITE:0,VIEWED:100,COMPLETED:200};
this.wRef=null;
this.counter=0;
this.dir=o.dir;
this.name=o.name;
this.cookie=o.cookie;
this.launchPage='bye.ahtml';
this.jumpPage='survey.ahtml';
this.delay=5;
this.viewDelay='1w';
}
Survey.prototype.doLaunch=function() {
var status=(this.cookie.get(this.name))?parseInt(this.cookie.get(this.name).value):false;
if(oBrowser.isGecko)return;
if(!status||((status==this.status.VIEWED)&&this.cookie.isExpired(this.name,this.viewDelay))){
this.wRef=new ChildWindow({
url:'/survey/'+this.dir+'/'+this.launchPage,
width:360,
height:400,
scrollbars:true,
name:this.name,
mode:-1
});
this.onsite();
}
}
Survey.prototype.doLoad=function(){
this.cookie.update();
if(this.cookie.get(this.name)&&parseInt(this.cookie.get(this.name).value)==this.status.OFFSITE)
this.onsite();
}
Survey.prototype.doUnload=function(){
this.cookie.update();
if(this.cookie.get(this.name)&&parseInt(this.cookie.get(this.name).value)==this.status.ONSITE)
this.offsite();
}
Survey.prototype.testCookie=function(recurse){
if(recurse){
this.cookie.update();
if(this.cookie.get(this.name)&&(this.cookie.get(this.name).value==this.status.DISABLED)){
window.close();
return;
}
if(this.cookie.get(this.name) && parseInt(this.cookie.get(this.name).value)==this.status.OFFSITE){
if(this.counter++ > this.delay){
location.href='/survey/'+this.dir+'/'+this.jumpPage;
return;
}
}else{
this.counter=0;
}
}
setTimeout('survey.testCookie(true)',Time.sc);
}
Survey.prototype.completed=function(){this.cookie.set(this.name,this.status.COMPLETED);}
Survey.prototype.disabled=function(){this.cookie.set(this.name,this.status.DISABLED);}
Survey.prototype.viewed=function(){this.cookie.set(this.name,this.status.VIEWED);}
Survey.prototype.offsite=function(){this.cookie.set(this.name,this.status.OFFSITE);}
Survey.prototype.onsite=function(){this.cookie.set(this.name,this.status.ONSITE);}
function TabPanes(PaneName) {
this.name = PaneName;
this.visiblePane = null;
this.rolloversOn = false;
this.maxHeight = 200;
this.tabs = document.getElementById(PaneName+'Tabs');
this.display = document.getElementById(PaneName+'Display');
var TabsHTML = '';
this.panes = document.getElementById(PaneName).childNodes;
try {
for (var i=0; i<this.panes.length; i++) {
TabsHTML += '<a href="#" onClick="showPane(\'' + PaneName + '\', \'' + (i+1) + '\');return false;">';
TabsHTML += document.getElementById(PaneName + (i + 1) + 'Tab').innerHTML;
TabsHTML += '</a>';
var ContentPane = document.getElementById(PaneName + (i + 1) + 'Content');
if (ContentPane.offsetHeight > this.maxHeight) this.maxHeight = ContentPane.offsetHeight;
}
} catch(Err) {
}
this.tabs.innerHTML = TabsHTML;
var magicPadding = 31;
this.display.style.height = (Number(this.maxHeight) + Number(magicPadding)) + "px";
if (typeof(PaneObjs) == 'undefined') {
PaneObjs = new Array();
}
PaneObjs[PaneObjs.length] = this;
return this;
}
TabPanes.prototype.getPaneHTML = function (tabNum) {
var TabId = this.name + tabNum + 'Content';
return $(TabId).innerHTML;
}
TabPanes.prototype.setPaneHTML = function (tabNum, html) {
var TabId = this.name + tabNum + 'Content';
$(TabId).innerHTML = html;
}
TabPanes.prototype.setMaxHeight = function (newHeight) {
this.maxHeight = newHeight;
var magicPadding = 31;
this.display.style.height = (Number(this.maxHeight) + Number(magicPadding)) + "px";
return;
}
TabPanes.prototype.setVisiblePane = function (TabNum) {
this.showPane(TabNum);
return;
}
TabPanes.prototype.showPane = function (TabNum, track) {
switch (typeof(track)) {
case 'undefined':
track = true;
break;
case 'string':
if (track.indexOf('notrack') == 0) {
track = false;
} else {
track = true;
}
break;
case 'boolean':
break;
default:
track = true;
}
return showPane(this.name, TabNum, track);
}
function showPane(PaneName, TabNum, track) {
switch (typeof(track)) {
case 'undefined':
track = true;
break;
case 'string':
if (track.indexOf('notrack') == 0) {
track = false;
} else {
track = true;
}
break;
case 'boolean':
break;
default:
track = true;
}
var PaneObj;
if (typeof(PaneObjs) == 'undefined') return;
for (var i=0; i<PaneObjs.length; i++) {
if (PaneObjs[i].name = PaneName) {
PaneObj = PaneObjs[i];
}
}
if (!PaneObj) return;
PaneObj.visiblePane = TabNum;
try {
var Imgs = PaneObj.tabs.getElementsByTagName('img');
for (var i=0; i<Imgs.length; i++) {
var TabImg = Imgs[i];
if(TabImg.src.indexOf("_o.gif")>-1){
TabImg.src=TabImg.src.replace(/_o\.gif/, '.gif');
}
if (TabNum == (i+1)) {
TabImg.src=TabImg.src.replace(/\.gif/, '_o.gif');
TabImg.onmouseover = '';
TabImg.onmouseout = '';
} else if (PaneObj.rolloversOn) {
TabImg.onmouseover = PaneObj.rollImage;
TabImg.onmouseout = PaneObj.rollImage;
}
}
PaneObj.display.innerHTML = document.getElementById(PaneName + TabNum + 'Content').innerHTML;
} catch(Err) {
}
if (track) {
Omniture.trackClick(['click', 'tab', PaneName + '-' + TabNum]);
}
return false;
}
TabPanes.prototype.rollImage = function () {
if (!document.images) return;
var s=this.src;
if (s != "") {
if (s.indexOf("_o.gif")>-1) {
this.src=s.substring(0,s.indexOf("_o.gif"))+".gif";
} else {
this.src=s.substring(0,s.indexOf(".gif"))+"_o.gif";
}
}
return;
}
function abandonPop(name,freq,url) {
window.shouldPop = true;
this.freq = freq;
this.name = name;
this.url = url;
this.skipLinks = new Array();
this.cookie = new Cookie("abd", '', "/", "babycenter.com");
this.freq = (!this.freq)?"12h":this.freq;
if (this.cookie.isSet(this.name)) {
if (!this.cookie.isExpired(this.name,this.freq))
window.shouldPop = false;
}
this.popup = new ChildWindow({
height:250,
scrollbars: "auto",
width:400 });
if (this.url)
this.popup.setUrl(this.url)
}
abandonPop.prototype.checkLinks=function(){
if (!this.skipLinks) return;
if (document.links) {
for (i=0; i<document.links.length; i++) {
for (j=0; j<this.skipLinks.length; j++) {
var linkTag = document.links[i];
if (linkTag.href.match(this.skipLinks[j]) ) {
var thisOnclick=""+linkTag.onclick;
var idxStart = thisOnclick.indexOf('{', thisOnclick.indexOf('function '))+1;
thisOnclick = ""+thisOnclick.substr(idxStart,thisOnclick.length-2-idxStart);
linkTag.onclick = function(){window.shouldPop=false; eval("thisOnclick") };
}
}
}
}
if (document.forms) {
for (i=0; i<document.forms.length; i++) {
for (j=0; j<this.skipLinks.length; j++) {
var formTag = document.forms[i];
if (formTag.action.match(this.skipLinks[j]) ) {
var thisOnsubmit=""+formTag.onsubmit;
var idxStart = thisOnsubmit.indexOf('{', thisOnsubmit.indexOf('function '))+1;
thisOnsubmit = ""+thisOnsubmit.substr(idxStart,thisOnsubmit.length-2-idxStart);
formTag.onsubmit = function(){window.shouldPop=false; eval("thisOnsubmit") };
}
}
}
}
}
abandonPop.prototype.setSkipLinks=function(lnk){
if (lnk.length==0) return;
for(l in lnk)
if(typeof(lnk[l])=="string")
this.skipLinks[this.skipLinks.length] = lnk[l].replace(/^\s*|\s*$/g,"");
}
abandonPop.prototype.showHelp=function(){
var helpText =
"Example: new abandon popup object named \"plusAbd\"\n\n"
+ "    var plusAbd = new abandonPop( name String, pathToPopup String );\n"
+ "    plusAbd.setSkipLinks([ url String(, url String, ...) ]); optional\n"
+ "addRenderEvent(\"plusAbd.checkLinks()\");  optional\n"
+ "addUnloadEvent(\"plusAbd.pop()\");\n\n"
+ "abandonPop uses Cookie and ChildWindow objects:\n"
+ "  plusAbd.popup\n"
+ "  plusAbd.cookie\n"
+ "These objects can be accessed via their published API";
alert(helpText);
}
abandonPop.prototype.pop=function(){
if (!window.shouldPop) return;
this.popup.show();
if (this.popup.isOpen()) {
this.cookie.set(this.name,"popped");
this.popup.focus();
}
}
var BC = new Object();
BC.debug = function (hint, msg) {
if (DEBUGJS) {
alert('ERROR in ' + hint + ':\n' + msg);
}
}
BC.Color = {
makeHex : function (r,g,b) {
r = r.toString(16); if (r.length == 1) r = '0' + r;
g = g.toString(16); if (g.length == 1) g = '0' + g;
b = b.toString(16); if (b.length == 1) b = '0' + b;
return "#" + r + g + b;
}
}
BC.getElementsByClassName = function (oElm, strTagName, oClassNames) {
var arrElements = (strTagName == "*" && document.all)? document.all :
oElm.getElementsByTagName(strTagName);
var arrReturnElements = new Array();
var arrRegExpClassNames = new Array();
if(typeof oClassNames == "object"){
for(var i=0; i<oClassNames.length; i++){
arrRegExpClassNames.push(new RegExp("(^|\\s)" +
oClassNames[i].replace(/\-/g, "\\-") + "(\\s|$)"));
}
}
else{
arrRegExpClassNames.push(new RegExp("(^|\\s)" +
oClassNames.replace(/\-/g, "\\-") + "(\\s|$)"));
}
var oElement;
var bMatchesAll;
for(var j=0; j<arrElements.length; j++){
oElement = arrElements[j];
bMatchesAll = true;
for(var k=0; k<arrRegExpClassNames.length; k++){
if(!arrRegExpClassNames[k].test(oElement.className)){
bMatchesAll = false;
break;
}
}
if(bMatchesAll){
arrReturnElements.push(oElement);
}
}
return (arrReturnElements)
}
function isNumber(a) {
return typeof a == 'number' && isFinite(a);
}
function isUndefined(a) {
return typeof a == 'undefined';
}
function isArray(a) {
return isObject(a) && a.constructor == Array;
}
function isBoolean(a) {
return typeof a == 'boolean';
}
function isEmpty(o) {
var i, v;
if (isObject(o)) {
for (i in o) {
v = o[i];
if (isUndefined(v) && isFunction(v)) {
return false;
}
}
}
return true;
}
function isFunction(a) {
return typeof a == 'function';
}
function isNull(a) {
return typeof a == 'object' && !a;
}
function isObject(a) {
return (a && typeof a == 'object') || isFunction(a);
}
function isString(a) {
return typeof a == 'string';
}
function getFlashVersion() {
var flashActualVersion = 0;
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
if (isIE&&isWin) {
var i = 2;
var objectCreated = true;
var flashObj;
while (objectCreated) {
i++;
try {
flashObj = new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+i);
}
catch(err) {
objectCreated = false;
i--;
}
}
if (i > 2) {flashActualVersion = i;}
} else {
if (navigator.plugins) {
if (navigator.plugins["Shockwave Flash"]) {
var flashDescription = navigator.plugins["Shockwave Flash"].description;
flashActualVersion = parseInt(flashDescription.substring(16));
}
}
if(navigator.userAgent.indexOf("WebTV") != -1) flashActualVersion = 4;
}
return flashActualVersion;
}
function isEnabledFlash(flashRequiredVersion) {
var flashIsEnabled = false;
var statusmsg = '';
if (getFlashVersion() >= flashRequiredVersion) flashIsEnabled=true;
if (oBrowser.isMac&&oBrowser.isIe) {
}
return flashIsEnabled;
}
function getQV(ArgName) {
var value = '';
var query = location.search.substring(1);
var pairs = query.split('&');
for (var i=0; i<pairs.length; i++) {
var pos = pairs[i].indexOf('=');
if (pos == -1) continue;
var name = pairs[i].substring(0,pos);
if (name == ArgName) {
value = pairs[i].substring(pos+1);
break;
}
}
return unescape(value);
}
function roundTable(bgcolor, width, html) {
var out = '';
out += '<table cellspacing="0" cellpadding="0" bgcolor="' + bgcolor + '" width="' + width + '">';
out += '<tr>';
out += '<td><img src="http://www.babycenter.com/i/frag/top_left_corner.gif" width="17" height="7" alt="" border="0"></td>';
out += '<td></td>';
out += '<td align="right"><img src="http://www.babycenter.com/i/frag/top_right_corner.gif" width="17" height="7" alt="" border="0"></td>';
out += '</tr>';
out += '<tr>';
out += '<td colspan="3">';
out += html;
out += '</td>';
out += '</tr>';
out += '<tr>';
out += '<td><img src="http://www.babycenter.com/i/frag/bottom_left_corner.gif" width="17" height="7" alt="" border="0"></td>';
out += '<td></td>';
out += '<td align="right"><img src="http://www.babycenter.com/i/frag/bottom_right_corner.gif" width="17" height="7" alt="" border="0"></td>';
out += '</tr>';
out += '</table>';
return out;
}
function updateLinkRefs(o, noclobber) {
if (noclobber == 'noclobber') {
noclobber = true;
}
if (noclobber != true) {
noclobber = false;
}
var XXX = new RegExp();
var arr = document.links;
for (var i = 0; i < arr.length; i++) {
var l = arr[i];
var nqs = "";
if (l.protocol.toLowerCase()
== "javascript:") continue;
if (l.hash.indexOf('#') > -1) continue;
for (var key in o) {
XXX.compile('(\\?|\\&)' + key + '=[^?&]*');
if (XXX.test(l.search)) {
if (noclobber) {
continue;
} else {
l.search = l.search.replace(XXX, '$1' + key + '=' + o[key]);
}
} else {
nqs += (l.search.match(/\?/g)
|| nqs.match(/\?/g))
? "&"
: "?";
nqs += key + "=" + o[key];
}
}
l.search += nqs;
}
}
function updateFormRefs(o) {
try {
var arr = document.forms;
for (var i = 0; i < arr.length; i++) {
var fo = arr[i];
if (fo.method=='post') {
var method='post';
var nqs = "";
for (var key in o) {
nqs = (fo.action.match(/\?/g)) ? "&" : "?";
nqs += key + "=" + o[key];
}
} else {
var method='get';
for (var key in o) {
if (fo.elements[key]) continue;
var tag = '<input';
tag += ' type="hidden"';
tag += ' name="' + key + '"';
tag += ' value="' + o[key] + '"';
tag += '>';
var el = document.createElement("span");
el.innerHTML = tag;
fo.appendChild(el);
}
}
}
} catch(Err) {BC.debug('/js/lib.js/updateFormRefs()', Err + '\ni=' + i + '\nmethod=' + method);}
}
function getQS() {
var query = window.location.search.substring(1);
var vars = query.split("&");
var pair = [];
var re = /'/g;
var re2 = /['";:<>\-=+)(%$#@~\/\.,]/g;
for (var i=0;i<vars.length;i++) {
var pair = vars[i].split("=");
pair[0] = unescape(pair[0]);
pair[0] = pair[0].replace(re2, "");
pair[1] = unescape(pair[1]);
pair[1] = pair[1].replace(re, "\\'");
try {
eval("_qs['"+pair[0]+"'] = '"+pair[1]+"';");
} catch (exception) {
_qs_errors += ""+pair[0]+": "+exception.toString()+"\n";
}
}
}
function toString() {
var t='';
for (var i in this) {
if (typeof(this[i]=='function')) continue;
t+=i+' = '+this[i]+'\n';
}
return t;
}
function getW() {
var myWidth = 0;
if (document.body) {
if (!document.getElementById('widthDiv')) {
var widthDiv = document.createElement('div');
widthDiv.setAttribute('id', 'widthDiv');
widthDiv.setAttribute('style', 'position:absolute;right:0;margin:0px;padding:0px;width:100%;');
document.body.appendChild(widthDiv);
}
var widthDiv = document.getElementById('widthDiv');
var myWidth = widthDiv.offsetLeft + widthDiv.offsetWidth;
} else {
if (typeof( window.innerWidth ) == 'number') {
myWidth = window.innerWidth;
} else if (document.documentElement &&
(document.documentElement.clientWidth || document.documentElement.clientHeight)) {
myWidth = document.documentElement.clientWidth;
} else if (document.body &&
(document.body.clientWidth || document.body.clientHeight)) {
myWidth = document.body.clientWidth;
}
}
return myWidth;
}
function getH() {
var myHeight = 0;
if (typeof( window.innerWidth ) == 'number') {
myHeight = window.innerHeight;
} else if (document.documentElement &&
(document.documentElement.clientWidth || document.documentElement.clientHeight)) {
myHeight = document.documentElement.clientHeight;
} else if (document.body &&
(document.body.clientWidth || document.body.clientHeight)) {
myHeight = document.body.clientHeight;
}
return myHeight;
}
function getDiv(id) {
if (document.getElementById&&document.getElementById(id)) {
return document.getElementById(id);
} else {
return false;
}
}
function getOffsets(el) {
var o={t:el.offsetTop,l:el.offsetLeft};
if (el.offsetParent) {
var op=getOffsets(el.offsetParent);
o.t+=op.t;o.l+=op.l;
}
return o;
}
function addLoadEvent(e) {
if(!window.loadEvents) {
window.loadEvents=new Array();
}
loadEvents[loadEvents.length]=e;
}
function doLoadEvents(){
try {
if (window.renderEvents && renderEvents.length) {
if (!window.loadEvents) {
window.loadEvents = new Array();
}
for (var i=0; i<renderEvents.length; i++) {
loadEvents[loadEvents.length] = renderEvents[i];
}
renderEvents.length = 0;
}
if(!window.loadEvents)return;
if(loadEvents.reverse)loadEvents.reverse();
var i=loadEvents.length;
var e=loadEvents[--i];
while(e){
if(typeof(e)=="function")e();
if(typeof(e)=="string")eval(e);
e=loadEvents[--i];
}
loadEvents.length = 0;
} catch(Err) {BC.debug('lib.js/doLoadEvents()', '\nWhile doing this:\n' + e + '\n\nGot this:\n' + Err);}
}
function addUnloadEvent(e) {
if (!window.unloadEvents) {
window.unloadEvents=new Array();
}
unloadEvents[unloadEvents.length]=e;
}
function doUnloadEvents(){
if(!window.unloadEvents)return;
if(unloadEvents.reverse)unloadEvents.reverse();
var i=unloadEvents.length;
var e=unloadEvents[--i];
while(e){
if(typeof(e)=="function")e();
if(typeof(e)=="string")eval(e);
e=unloadEvents[--i];
}
}
function addRenderEvent(e) {
renderEvents[renderEvents.length]=e;
}
renderEvents=new Array();
function doRenderEvents() {
if (!window.renderEvents) return;
var i=renderEvents.length;
var e=renderEvents[--i];
while (e) {
if (typeof(e)=="function") e();
if (typeof(e)=="string") eval(e);
e=renderEvents[--i];
}
renderEvents.length = 0;
}
function addResizeEvent(e) {
if (!window.resizeEvents) {
window.resizeEvents=new Array();
}
resizeEvents[resizeEvents.length]=e;
}
function doResizeEvents() {
if (!window.resizeEvents) return;
if (resizeEvents.reverse) resizeEvents.reverse();
var i=resizeEvents.length;
var e=resizeEvents[--i];
while(e) {
if (typeof(e)=="function") e();
if (typeof(e)=="string") eval(e);
e=resizeEvents[--i];
}
}
function animate(id, toLeft, toTop, increment, interval) {
var MDO = mdo(id);
MDO.floats();
var left = parseInt(MDO.getStyle('left'));
var top = parseInt(MDO.getStyle('top'));
if (left <= toLeft) {
left = left + increment;
if (left > toLeft) left = toLeft;
} else {
left = left - increment;
if (left < toLeft) left = toLeft;
}
if (top <= toTop) {
top = top + increment;
if (top > toTop) top = toTop;
} else {
top = top - increment;
if (top < toTop) top = toTop;
}
MDO.moveTo(left + 'px', top + 'px');
if ((left != toLeft) || (top != toTop)) {
window.setTimeout('animate("' + id + '", ' + toLeft + ', ' + toTop + ', ' + increment + ', ' + interval + ')', interval);
return false;
} else {
return true;
}
}
function roll(img) {
if (!document.images) return;
var s=img.src;
if (s) {
var on = /_o[.](gif|jpg|png)$/i;
var off = /[.](gif|jpg|png)$/i;
if (s.match(on)) {
s = s.replace(on, '.$1');
} else {
s = s.replace(off, '_o.$1');
}
img.src=s;
}
}
function imgCache() {
if (!document.images) return;
var imgs=document.images;
for (var i=0; i<imgs.length; i++) {
if (imgs[i].onmouseover&&(imgs[i].src.indexOf("_o.gif")==-1)) {
var img=new Image();
img.src=imgs[i].src.substring(0,imgs[i].src.indexOf(".gif"))+"_o.gif";
}
}
}
function SetUpPanes(PaneName) {
try {
var maxHeight = 200;
var Tabs = '';
var Panes = document.getElementById(PaneName).childNodes;
try {
for (var i=0; i<Panes.length; i++) {
Tabs += '<a href="#" onClick="ShowPane(\'' + PaneName + '\', \'' + (i+1) + '\');return false;">';
Tabs += document.getElementById(PaneName + (i + 1) + 'Tab').innerHTML;
Tabs += '</a>';
var ContentPane = document.getElementById(PaneName + (i + 1) + 'Content');
if (ContentPane.offsetHeight > maxHeight) maxHeight = ContentPane.offsetHeight;
}
} catch(Err) {
}
document.getElementById(PaneName+'Tabs').innerHTML = Tabs;
document.getElementById(PaneName+'Display').style.height = maxHeight + "px";
} catch(Err) {alert('ERROR in lib.js/SetUpPanes()')}
}
function ShowPane(PaneName, TabNum) {
try {
var Imgs = document.getElementById(PaneName + 'Tabs').getElementsByTagName('img');
for (var i=0; i<Imgs.length; i++) {
var TabImg = Imgs[i];
if(TabImg.src.indexOf("_o.gif")>-1){
TabImg.src=TabImg.src.substring(0,TabImg.src.indexOf("_o.gif"))+".gif";
}
if (TabNum == (i+1)) {
TabImg.src=TabImg.src.substring(0,TabImg.src.indexOf(".gif"))+"_o.gif";
} else {
}
}
document.getElementById(PaneName + 'Display').innerHTML = document.getElementById(PaneName + TabNum + 'Content').innerHTML;
} catch(Err) {
}
return false;
}
function doNAV(el){
if (!document.getElementById||!el) return;
var par;
if(typeof(el)=="string"){
par=document.getElementById(el);
if (!par) return;
el=par.firstChild;
while (el.tagName.toLowerCase()!="img"&&!el.className) {
el=el.nextSibling;
}
} else {
par=el.parentNode;
while (!par.id) {
par=par.parentNode;
}
}
var menu=mdo(par.id+"Sub");
if (!menu) return;
if (menu.getStyle("display").toLowerCase()=="none") {
eval("el.src="+el.className+".IMG_ON.src");
menu.setStyle("display","");
} else{
eval("el.src="+el.className+".IMG_OFF.src");
menu.setStyle("display","none");
}
}
function mdo(arg,isFloat) {
if (!document.getElementById) return null;
var o;
if ((typeof(arg)=="string")&&document.getElementById(arg)) {
o=document.getElementById(arg);
} else if (typeof(arg)=="string"||typeof(arg)=="undefined") {
if (!document.body||!document.createElement||!document.body.appendChild) {
return null;
}
o=document.createElement("div");
if (arg) o.id=arg;
document.body.appendChild(o);
} else if (typeof(arg)=="object") {
o=arg;
} else {
return null;
}
o.moveTo=function(l,t) {
this.style.left=l;
this.style.top=t;
};
o.append=function(o) {
this.appendChild(o);
};
o.show=function() {
this.setStyle("visibility","visible");
};
o.hide=function() {
this.setStyle("visibility","hidden");
};
o.floats=function() {
this.setStyle("position","absolute");
};
o.addText=function(t) {
this.append(document.createTextNode(t));
};
o.addHTML=function(h) {
this.innerHTML+=h;
};
o.setHTML=function(h) {
this.innerHTML=h;
};
o.setStyle=function(n,v) {
this.style[n]=v;
};
o.getStyle=function(n) {
return this.style[n];
};
o.setParam=function(n,v) {
this[n]=v;
};
o.getParam=function(n) {
return this[n];
};
o.clip=function(t,r,b,l) {
this.style.clip="rect("+t+","+r+","+b+","+l+")";
};
o.clip=function(t,r,b,l) {
this.style.clip="rect("+t+","+r+","+b+","+l+")";
};
o.getBgcolor = function () {
var o = this;
while(o)
{
var c;
if (window.getComputedStyle) c = window.getComputedStyle(o,null).getPropertyValue("background-color");
if (o.currentStyle) c = o.currentStyle.backgroundColor;
if ((c != "" && c != "transparent") || o.tagName == "BODY") { break; }
o = o.parentNode;
}
if (c == undefined || c == "" || c == "transparent") c = "#FFFFFF";
var rgb = c.match(/rgb\s*\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)/);
if (rgb) c = BC.Color.makeHex(parseInt(rgb[1]),parseInt(rgb[2]),parseInt(rgb[3]));
return c;
}
o.fade = function () {
if (!this.fadeFps) this.fadeFps = 30;
if (!this.fadeDuration) this.fadeDuration = 1500;
if (!this.fadeFrom || this.fadeFrom=="#") this.fadeFrom = "#ffff80";
if (!this.fadeTo) this.fadeTo = this.getBgcolor();
var frames = Math.round(this.fadeFps * (this.fadeDuration / 1000));
var interval = this.fadeDuration / frames;
var delay = interval;
var frame = 0;
if (this.fadeFrom.length < 7) this.fadeFrom += this.fadeFrom.substr(1,3);
if (this.fadeTo.length < 7) this.fadeTo += this.fadeTo.substr(1,3);
var rf = parseInt(this.fadeFrom.substr(1,2),16);
var gf = parseInt(this.fadeFrom.substr(3,2),16);
var bf = parseInt(this.fadeFrom.substr(5,2),16);
var rt = parseInt(this.fadeTo.substr(1,2),16);
var gt = parseInt(this.fadeTo.substr(3,2),16);
var bt = parseInt(this.fadeTo.substr(5,2),16);
var r,g,b,h;
while (frame < frames)
{
r = Math.floor(rf * ((frames-frame)/frames) + rt * (frame/frames));
g = Math.floor(gf * ((frames-frame)/frames) + gt * (frame/frames));
b = Math.floor(bf * ((frames-frame)/frames) + bt * (frame/frames));
h = BC.Color.makeHex(r,g,b);
setTimeout("$setBgColor('"+this.id+"','"+h+"')", delay);
frame++;
delay = interval * frame;
}
setTimeout("$setBgColor('"+this.id+"','"+this.fadeTo+"')", delay);
}
o.fadeFrom = "#ffff80";
o.fadeTo = '';
o.fadeDuration = 1500;
o.fadeFps = 30;
if (!o.id) {
o.id = 'mdo' + mdo.nextId++;
}
if (!o.style) o.style=o;
if (isFloat) o.floats();
return o
}
mdo.nextId = 0;
var _qs = [];
var _qs_errors = "none";
getQS();
window.onload=doLoadEvents;
window.onunload=doUnloadEvents;
window.onresize=doResizeEvents;
addRenderEvent(imgCache);
addRenderEvent(function(){tn.init('tn');});
try {
if (location.host.indexOf('store') > -1) {
if (typeof(oStageState) == 'undefined') {
var oStageState = new Object;
}
oStageState.stage = getQV('stage');
addRenderEvent(function(){updateLinkRefs(oStageState, 'noclobber');});
addRenderEvent(function(){updateFormRefs(oStageState);});
}
} catch(Err) {alert('ERROR in lib.js while trying set stage params')}
