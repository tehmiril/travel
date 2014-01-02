// JavaScript Document
var image1 = new Image();
image1.src="images/Canada/Can-hockey.jpg";

var image2 = new Image();
image2.src="images/Canada/Can-Ottawa.jpg";

var image3 = new Image();
image3.src="images/Canada/Can-Toronto.jpg";

var image4 = new Image();
image4.src="images/Canada/ski.jpg";

var image5 = new Image();
image5.src="images/Canada/Can-yukon.jpg";

var image6 = new Image();
image6.src="images/Canada/iceberg.jpg";

var step = 1;

function next_Pic(){
	if(step<6)
		step++;
	else
		step=1;
	document.images.slide.src=eval("image"+step+".src");
}

//var timeout = setTimeout("next_Pic()",3500);

$(document).ready(function() {
	$("#back-button").on("click", function(){
		if(step>1)
			step--;
		else
			step=6;
		document.images.slide.src=eval("image"+step+".src");
	});

	$("#next-button").on("click", function(){
		//alert($(this).text());
		next_Pic();
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