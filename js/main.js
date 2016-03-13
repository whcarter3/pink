$(document).ready(function(){
	var productModal = $('#product-modal');
	$('.product a').on('click', function(){
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
});