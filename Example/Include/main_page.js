// JavaScript Document
function load_Home(){
    $("#box1").load("pages/Home.html");
	$("#box2, #box3").empty();	
//	$("#box2, #box3").hide();	
}

function load_Canada(){
    $("#content").load("pages/Can.html");
	console.log("you have arrived in Canada");}

function load_Norway(){
    $("#content").load("pages/Nor.html");
	console.log("you have arrived in Norway");
}

function clock(){
	var today=new Date();

	var weekday=new Array(7);
		weekday[0]="Sunday";
		weekday[1]="Monday";
		weekday[2]="Tuesday";
		weekday[3]="Wednesday";
		weekday[4]="Thursday";
		weekday[5]="Friday";
		weekday[6]="Saturday";
	
	var date = today.getDate();
	var month = today.getMonth()+1;
	var year = today.getFullYear();
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	
		// add a zero in front of numbers<10
		h=check_Time(h);
		m=check_Time(m);
		s=check_Time(s);
	
	$("#clock-date").text(weekday[today.getDay()]+", "+ date +"/"+ month +"/"+year+ " " + h+":"+m+":"+s);
	
	setTimeout(function(){clock()},500);
}

function check_Time(i){
	if (i<10){
		i="0" + i;
	  }
	return i;
}

$(document).ready(function() {
	clock();
    load_Home();

    $( "button" ).each(function() {
      var button = $( this ).button({
        icons: {
          primary: $( this ).data( "icon" )
        },
        text: !!$( this ).attr( "title" )
      });
	   //button.click(function() {
//        var value = $(this).attr("id");
//			load_Canada();
//      });
		button.css("width", "200px");
    });
	
	 $( document ).tooltip({
		track : true
    });
	
	$("#home").on("click", function(){
		//alert($(this).text());
		load_Home();
	});
	
	$("#canada").on("click", function(){
		load_Canada();
	});
	
	$("#norway").on("click", function(){
		load_Norway();
	});
  });