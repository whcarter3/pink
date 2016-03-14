$(document).ready(function(){

	//ajax modal
	var productModal = $('#product-modal');
	$('.product a').on('click', function(e){
		e.preventDefault();
		$.ajax({
			type: "GET",
			url: '../api/product_' + $(this).data('id') + '.json',
			dataType: 'json',
			success: function(data){
				productTitle = data.data.product.title;
				productCopy = data.data.product.copy;
				productImgSrc = data.data.product.image;
				productModal.find('.modal-header img').attr('src', productImgSrc);
				productModal.find('.ajax-title').html('<h3 class="text-center">' + productTitle + '</h3>');
				productModal.find('.ajax-copy').empty().append(productCopy).css({'text-align': 'center', 'padding-bottom': '20px'});
				productModal.modal('show');
			}
		})
	});

	//smooth scroll
	$('a[href*="#"]:not([href="#"])').click(function() {
    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    		var target = $(this.hash);
      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      		if (target.length) {
        		$('html, body').animate({
          			scrollTop: target.offset().top
        		}, 1000);
        		return false;
      		}
    	}
  	});
});