$("#carouselExampleIndicators a").hover(
  function () {
    $(this).children("span").addClass("hoverArrow");
  }, 
  function () {
    $(this).children("span").removeClass("hoverArrow");
  }
);