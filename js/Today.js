function Today () {
var now = new Date();
var day_of_week = now.getDay();
var day_of_month = now.getDate();
var month = now.getMonth();
var year = now.getYear();
var str = "";

if (day_of_week == 0) 
    str = "Sunday, ";
if (day_of_week == 1)
    str = "Monday, ";
if (day_of_week == 2)
    str = "Tuesday, ";
if (day_of_week == 3)
    str = "Wednesday, ";
if (day_of_week == 4)
    str = "Thursday, ";
if (day_of_week == 5)
    str = "Friday, ";
if (day_of_week == 6)
    str = "Saturday, ";

if (month == 0)
    str = str + "January " + day_of_month;
if (month == 1)
    str = str + "February " + day_of_month;
if (month == 2)
    str = str + "March " + day_of_month;
if (month == 3)
    str = str + "April " + day_of_month;
if (month == 4)
    str = str + "May " + day_of_month;
if (month == 5)
    str = str + "June " + day_of_month;
if (month == 6)
    str = str + "July " + day_of_month;
if (month == 7)
    str = str + "August " + day_of_month;
if (month == 8)
    str = str + "September " + day_of_month;
if (month == 9)
    str = str + "October " + day_of_month;
if (month == 10)
    str = str + "November " + day_of_month;
if (month == 11)
    str = str + "December " + day_of_month;

year += ((year < 1900) ? 1900 : 0);

str=str + ", " + year;

return str;
}
