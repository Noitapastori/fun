$(document).ready(function() {
	$("h1").mouseenter(function() {
		$(this).css({
			"margin-left": "+=50px", 
			"background-color": "red"
		});
		
		//$(this).addClass("emphasis shrink"); <- add class
		
		//$(this).removeClass();	<- remove class
	});
	
		$("h1").mouseleave(function() {
		$(this).css({
			"margin-left": "-=50px", 
			"background-color": "red"
		});
		
		//$(this).addClass("emphasis shrink"); <- add class
		
		//$(this).removeClass();	<- remove class
	});
});