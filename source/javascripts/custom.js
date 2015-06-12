function hoverAnimation(element){
  $(element).mouseenter(function(){
    $(this).addClass('animated rotateIn');    
   }).mouseleave(function(){
    $(this).removeClass('animated rotateIn');    
  });
}

$(function(){
  hoverAnimation('.icon-hover')
});