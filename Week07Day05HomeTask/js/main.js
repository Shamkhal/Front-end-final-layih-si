

$(document).scroll(function() {
var Ypos = $(document).scrollTop(); 
console.log(Ypos);
	if (Ypos > 500) {
		$('.header').addClass('hidden');
		$('.header-hidden').removeClass('hidden', function() {
			$('.header-hidden').slideDown('slow');
		});	
	}else{
		$('.header').removeClass('hidden');
		$('.header-hidden').addClass('hidden')
	}
});

$(document).scroll(function() {
	var my = $(document).scrollTop();

	if(my> 300){
		$('.ab, .ab1, .ab2, .ab3, .ab4').css({
			animationPlayState : 'running'
		})
	}
});

















