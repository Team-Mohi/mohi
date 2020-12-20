$(document).ready(function(){
  $(window).scroll(function(){
    var a = $(".right-sidebar").height();
    var scrollright = (a*30)/100;
    if($(window).scrollTop()){
      $(".right-sidebar").addClass("fixed");
    	$(".right-sidebar").css({'width':'260.51px','top':'auto'});
    } else {
      $(".right-sidebar").removeClass("fixed");

    }
  });

  $(window).scroll(function(){
    var b = $(".main-left-sidebar").height();
    var scrollleft = (b*12)/100;
    if($(window).scrollTop()>scrollleft){
      $(".main-left-sidebar").addClass("fixed");
    	$(".main-left-sidebar").css({'bottom':'0','width':'260.51px','top':'auto'});
    } else {
      $(".main-left-sidebar").removeClass("fixed");
      $(".main-left-sidebar").css({'bottom':'auto','width':'260.51px','top':'0'});

    }
  });
});
