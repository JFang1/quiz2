// write jQuery or vanilla javascript to do the following:
//  - loop through the list items in the <ol> and change their text and color to be different from what it is now
//  - use js and html to create at least one custom accordion (by yourself, no copy paste)
// x - create a button in the html that, once clicked, will fire off the function described in the next buller point
//  - write a function that will fade out all of the html inside the body tag and replace it with a custom goodbye message when you click the button
// x - finally, write a function that makes you happy :D (as in, have some fun a write something cool, it's up to you!)

(function($){

	$('ol.li').css({
			font: "Times",
			color: "red",
	});

	$(function() {
		var olItems = document.getElementsByType("ol li");
		
	});

	$('input').on('click', function(e) {
		document.getElementById("replace").innerHTML="Goodbye!";
	});

	$('#mainSection').on('mouseover', function(e) {
		alert('Before clicking the button, proceed with caution.  Also, this function definitely makes me happy.');
	});

	$('.links li a').on('click', function(e) {
		e.preventDefault();
		alert('you clicked a link, good for you');
	});

	console.log("this is a message for you!!!");
})(jQuery);
