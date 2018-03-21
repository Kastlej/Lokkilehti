
$(document).ready(function() {

	var scrollLink = $(".scroll");

	//sulava scrollaus
	
	scrollLink.click(function(e){
		e.preventDefault();
		$("body,html").animate({
			scrollTop: $(this.hash).offset().top
		});
	});



	//karusellin nuolien animointi

	$("#carouselExampleIndicators a").hover(
	  function () {
	    $(this).children("span").addClass("hoverArrow");
	  }, 
	  function () {
	    $(this).children("span").removeClass("hoverArrow");
	  }
	);

});