$(document).ready(function() {
	 $("h1").click(function() {	//when the user clicks h1
	 
		$("h2").animate({	//animate h2
			"font-size": "48px", 
			//"width": "50%",
			"left": "100px"
		}, 1000, function() {	//animate h3, after h2 has finished its animation
			$("h3").animate({
			"font-size": "42px", 
			//"width": "50%",
			"left": "200px"
			}, 1500, function() {	//animate h4, after h3 has finished its animation
				$("h4").animate({
					"font-size": "36px",
					"left": "300px"
				}, 2000);
			});
		});
	
	 });
});