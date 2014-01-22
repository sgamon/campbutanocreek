Date.prototype.getDayName = function (opts) {
	var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
	var day = days[this.getDay()];
	
	if (opts) {
		if (opts.titleCase) {
			day = day.toTitleCase();
		}
		if (opts.upperCase) {
			day = day.toUpperCase();
		}
		if (opts.abbr) {
			day = day.substr(0,3);
		}
	}
	
	return day;
}

Date.prototype.getMonthName = function (opts) {
	var months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
	var month = months[this.getMonth()];
	
	if (opts) {
		if (opts.titleCase) {
			month = month.toTitleCase();
		}
		if (opts.upperCase) {
			month = month.toUpperCase();
		}
		if (opts.abbr) {
			month = month.substr(0,3);
		}
	}
	
	return month;
}


function EventCalendar() {
	this.events = new Array();

	this.sort = function() {
		return this.events.sort(function(a,b){
			return a.date.getTime() - b.date.getTime();
		});
	}
	this.getMonths = function() {
		var months = new Array();
		for (var i=0; i<12; i++) {
			months[i] = false;
		}	
		
		for (var i=0; i<this.events.length; i++) {
			months[this.events[i].date.getMonth()] = this.events[i].date.getMonth();
		}

		var i=0;
		while(i<months.length) {
			if (months[i] === false) {
				months.splice(i,1);
			} else {
				i++;
			}
		}
		
		return months;
	}
}

function CalendarEvent(date, description, start, end) {
	this.date = new Date(date);
	this.description = description;
	
	
	this.start = null;
	if (start) {
		this.start = start;
	}
	
	this.end = null;
	if (end) {
		this.end = end;
	}
	
}
