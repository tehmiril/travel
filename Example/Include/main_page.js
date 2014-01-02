// JavaScript Document
function load_Home(){
    $("#box1").load("pages/Home.html");
	$("#box2, #box3").empty();	
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
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	// add a zero in front of numbers<10
	h=check_Time(h);
	m=check_Time(m);
	s=check_Time(s);
	$("#clock-date").text(today.toUTCString().slice(0,-12)+ " " + h+":"+m+":"+s);
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