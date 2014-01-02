// JavaScript Document
var image1 = new Image();
image1.src="images/Canada/Hockey_tradition.jpg";

var image2 = new Image();
image2.src="images/Canada/Ottawa.jpg";

var image3 = new Image();
image3.src="images/Canada/Toronto_at_night.jpg";

var image4 = new Image();
image4.src="images/Canada/All_you_can_ski.jpg";

var image5 = new Image();
image5.src="images/Canada/Aurora_at_Yukon.jpg";

var image6 = new Image();
image6.src="images/Canada/Harvests_iceberg.jpg";

var step = 1;

function next_Pic(){
	if(step<6)
		step++;
	else
		step=1;
	document.images.slide.src=eval("image"+step+".src");
}

//var timeout = setTimeout("next_Pic()",3500);

function caption(){
	var name = document.images.slide.src.split("/");
	var getlastname = name[name.length-1];
	$("#caption").text(getlastname.slice(0,-4));
}

$(document).ready(function() {
	caption();
	
	$("#back-button").on("click", function(){
		if(step>1)
			step--;
		else
			step=6;
		document.images.slide.src=eval("image"+step+".src");
		caption();
	});

	$("#next-button").on("click", function(){
		//alert($(this).text());
		next_Pic();
		caption();
	});
	
	//$("#playstop-button").on("click", function(){
//		$(this).data('state', ($(this).data("state") == "unclicked") ? "clicked" : "unclicked");
//    	$(this).button({
//        	icons: {
//            	primary: ($(this).data("state") == "unclicked") ? "ui-icon-stop" : "ui-icon-play"
//	        }
//	    		});
//			});
});