
    $(document).ready(function(){
      $('.trainersslide').slick({
      	  infinite: false,
  		  slidesToShow: 4,
  		  slidesToScroll: 1,
  		  prevArrow: $('.prev'),
      	  nextArrow: $('.next'),
      	  prevArrow:"<img class='a-left control-c prev slick-prev' src='files/img/prev.png'>",
          nextArrow:"<img class='a-right control-c next slick-next' src='files/img/next.png'>"
      });
    });


    $(document).ready(function(){
      $('.teamslide').slick({
      	  infinite: false,
  		  slidesToShow: 3,
  		  slidesToScroll: 1
      });
    });


   $(document).ready(function() {
 
 
   $("a.topLink").click(function() {
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
         duration: 700,
         easing: "swing"
      });
      return false;
   });
 
 
});