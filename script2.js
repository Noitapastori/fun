$(document).ready(function() {
	$("h1").hide();
	$("h1").delay(500).animate({
		opacity: 1,
		left: "+=50",
		height: "toggle"
	}, 1500);
	
	$("#p1").hide();
	$("#p2").hide();
	$("#p3").hide();

	$("#p1").delay(500).animate({
		opacity: 1,
		left: "+=50",
		height: "toggle"
	}, 1500);
	
	$("li").hide();
	$("li").delay(2000).show(1500);
	
	$("li").mouseenter(function() {
		$(this).css({
			"background-color": "#372D24"
		});
	});
	
	$("li").mouseleave(function() {
	$(this).css({
			"background-color": "#242E37"
		});
	});
	
	$("#li1").click(function() {
		$("#p2").hide(1500);
		$("#p3").hide(1500);
		$("#p1").delay(500).show(1500);
	});
	
	$("#li2").click(function() {
		$("#p1").hide(1500);
		$("#p3").hide(1500);
		$("#p2").delay(500).show(1500);
	});
	
	$("#li3").click(function() {
		$("#p1").hide(1500);
		$("#p2").hide(1500);
		$("#p3").delay(500).show(1500);
	});
	
});