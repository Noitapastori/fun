$(document).ready(function(){
	
	$("nav").hide();
	
	$("nav").slideDown(2000);
	
	$("nav a").mouseenter(function() {
		$(this).animate({
			"font-size": "+=45%",
		}, 500);
	});
	
	$("nav a").mouseleave(function() {
		$(this).animate({
			"font-size": "-=45%"
		}, 500);
	});

	$('nav a, footer a.up').click(function(e){
		
	$.scrollTo(this.hash || 0, 1500);
	e.preventDefault();
	});
});