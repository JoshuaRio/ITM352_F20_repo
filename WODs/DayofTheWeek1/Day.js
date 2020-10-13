var day = 8;
var month = "May";
var year = 2001;

var step1 = 2001 % 100;
var step2 = parseInt(step1 / 4);
var step3 = step2 +step1;

//step4

if (month != "Jan"){
    if(month == "Feb"){
        step4 = 3;
    } else if (month == "Mar"){
        step4 = 3;
    } else if (month == "Apr"){
        step4 = 6;
    } else if (month == "May"){
        step4 = 1;
    } else if (month == "Jun"){
        step4 = 4;
    } else if (month == "Jul"){
        step4 = 6;
    } else if (month == "Aug"){
        step4 = 2;
    } else if (month == "Sep"){
        step4 = 5;
    } else if (month == "Oct"){
        step4 = 0;
    } else if (month == "Nov"){
        step4 = 3;
    } else if (month == "Dec"){
        step4 = 5;
    }
    var step6 = step4 + step3;
    var step7 = day + step6;
    var step8 = step7;
} else {
    var step5 = day + step3;
    var step8 = step5;
}

//Declaring Leap Year & Check year
var isLeapYear = ((year % 4 == 0) && (year % 100 != 0) && (year % 400 == 0));
var check = parseInt(year / 100);

//2000s path
if (check == 20 && isLeapYear == true){
    if(month == "Jan" || month == "Feb"){
        var step9 = step8 - 2;
    } else{
        var step9 = step8 - 1;
    }
} else if (check == 20 && isLeapYear == false){
    var step9 = step8 -1;
} 

//1900s path
if (check == 19 && isLeapYear == true){
    if(month == "Jan" || month == "Feb"){
        var step9 = step8 - 1;
    } else{
        var step9 = step8;
    }
} else if (check == 19 && isLeapYear == false){
    var step9 = step8;
}

if (step9 > 7){
    var step10 = step9 % 7;
}

if (step10 == 0){
    var dow = "Sunday";
} else if (step10 ==1){
    var dow = "Monday";
} else if (step10 ==2){
    var dow = "Tuesday";
} else if (step10 ==3){
    var dow = "Wednesday";
} else if (step10 ==4){
    var dow = "Thursday";
} else if (step10 ==5){
    var dow = "Friday";
} else if (step10 ==6){
    var dow = "Saturday";
}

console.log(month + " " + day + " , " + year);
console.log(dow);

