// JavaScript Document
var image1 = new Image();
image1.src="images/Norway/Nor-aurora.jpg";

var image2 = new Image();
image2.src="images/Norway/Nor-bcheese.jpg";

var image3 = new Image();
image3.src="images/Norway/Nor-oslo.jpg";

var image4 = new Image();
image4.src="images/Norway/Nor-sognefjord.jpg";

var image5 = new Image();
image5.src="images/Norway/storseisundet.jpg";

var image6 = new Image();
image6.src="images/Norway/vigelandsparken.jpg";

var step = 1;

function next_Pic(){
	if(step<6)
		step++
	else
		step=1
	document.images.slide.src=eval("image"+step+".src")
}


//function slide_Pics(){
//	next_Pic();
//	setTimeout("slide_Pics()",3500);
//}

$(document).ready(function() {
	$("#back-button").on("click", function(){
		if(step>1)
			step--
		else
			step=6
		document.images.slide.src=eval("image"+step+".src")

	});

	$("#next-button").on("click", function(){
		//alert($(this).text());
		next_Pic();
	});
	
	//$("#playpause-button").on("click", function(){
//		slide_Pics();
//	});

});