function stopSpin(){
  $(this).removeClass('animated rotateIn');
}

function hoverAnimation(element){
  $(element).mouseenter(function(){
    $(this).addClass('animated rotateIn');
    $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', stopSpin);       
   });
}

$(function(){
  hoverAnimation('.icon-hover')
});