$(document).ready(function(){
	$('a').on('click', function(e){
		e.preventDefault()
		if($(this).find('+ section').hasClass('open')){
			$('section').removeClass('open')
		} else {
			$('section').removeClass('open')
			$(this).find('+ section').addClass('open')
		}
	})
})