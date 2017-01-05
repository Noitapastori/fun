$(document).ready(function(){
	$(".nav").hide();
		$(".nav").slideDown(2000);
	$("#mainContent").hide();
		$("#mainContent").slideDown(2000);
	$("#myImg1").hide();
		$("#myImg1").show(1000);
	$("#myImg2").hide();
		$("#myImg2").delay(1000).show(1000);
	$("#myImg3").hide();
		$("#myImg3").delay(2000).show(1000);
	$("#myImg4").hide();
		$("#myImg4").delay(3000).show(1000);
});

$(".nav li").on("click", function() {
	$(".nav li").removeClass("active");
		$(this).addClass("active");
});