var nav = 0;
var scroll = 0
var documentSize = $(document).height();
var sizeWindow = window.innerHeight;

$('nav').mouseover(function() {
	if(nav == 0){
		$('#newsModal').modal('show');
		nav++;
	}
})

$(window).scroll(function () {
			
	var posicaoAtual = $(window).scrollTop();
	if ( posicaoAtual >= (documentSize - sizeWindow ) && scroll == 0 ) {
		$('#newsModal').modal('show');
	}
});