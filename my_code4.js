$(document).ready(function() {
	//$("h2").hide(); //hide the h2 heading once the page is loaded.

	$("h1").click(function() { //Define what happens when the h1 heading is clicked.
	
		$("h2").hide(1000, function() {	//animation to hide h2
			
			$("h3").hide(1000); //hide h3 after h2 has been hidden completely.
			
		});
	
	});
	
});