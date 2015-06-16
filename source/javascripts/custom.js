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
	hoverAnimation('.icon-hover');
	$('#project-modal').on('shown.bs.modal', function () {
   		var el = $('.modal-content .btn.btn-theme');
   		var link = el.attr('href');
		if (link == ""){			
			$(el).hide();
		} else{
			$(el).show();
			$(el).attr('target', '_blank');

		}
	});
});