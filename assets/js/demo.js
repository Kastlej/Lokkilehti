


	var scrollLink = $(".scroll");

	//smooth scrollign
	scrollLink.click(function(e){
		e.preventDefault();
		$("body,html").animate({
			scrollTop: $(this.hash).offset().top
		});
	});




	$("#carouselExampleIndicators a").hover(
	  function () {
	    $(this).children("span").addClass("hoverArrow");
	  }, 
	  function () {
	    $(this).children("span").removeClass("hoverArrow");
	  }
	);
