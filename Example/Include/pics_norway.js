// JavaScript Document
var image1 = new Image();
image1.src="images/Norway/Norwegian_aurora.jpg";

var image2 = new Image();
image2.src="images/Norway/Famous_brown_cheese.jpg";

var image3 = new Image();
image3.src="images/Norway/Oslo.jpg";

var image4 = new Image();
image4.src="images/Norway/Sognefjord.jpg";

var image5 = new Image();
image5.src="images/Norway/Storseisundet.jpg";

var image6 = new Image();
image6.src="images/Norway/Vigelandsparken_Oslo.jpg";

var step = 1;

function next_Pic(){
	if(step<6)
		step++;
	else
		step=1;
	document.images.slide.src=eval("image"+step+".src");
}


//function slide_Pics(){
//	next_Pic();
//	setTimeout("slide_Pics()",3500);
//}

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
	
	//$("#playpause-button").on("click", function(){
//		slide_Pics();
//	});

});