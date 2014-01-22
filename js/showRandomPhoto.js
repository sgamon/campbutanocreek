function showRandomPhoto() {
	var numButanoPics = 43;

	if (!this.index) {
		this.index = Math.round(Math.random()*numButanoPics);
	}
	
	this.index++;
	
	if (this.index<1) {
		this.index = 1;
	}
	
	if (index>numButanoPics) {
		this.index = 1;
	}
	
	var pad = '';
	if (this.index<10) {pad += '0';}
	if (this.index<100) {pad += '0';}
	if (this.index<1000) {pad += '0';}
	
	if (typeof(showBottomPic) === 'undefined') {
		showBottomPic = true;
	}
	
	if (showBottomPic) {
		document.write('<img src="http://i281.photobucket.com/albums/kk212/blasterfrump/campbutanocreek/small/butano' + pad + this.index + '.jpg">');
	}
}



