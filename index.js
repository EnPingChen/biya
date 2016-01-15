$(document).ready(function(){
	console.log("toot");
	window.setTimeout(function(){$("#bi").fadeIn();
								 $("#bi h1").animate({fontSize:'170px'},"slow");}
								 ,1000);
	window.setTimeout(function(){$("#ya").fadeIn();
								 $("#ya h1").animate({fontSize:'170px'},"slow");}
								 ,2000);
	window.setTimeout(function(){$("#chi").fadeIn();
							     $("#chi h1").animate({fontSize:'170px'},"slow");}
							     ,3000);
});

