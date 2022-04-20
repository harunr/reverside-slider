
(function($){
	$(function(){

        $(window).ready(function(){
            $(".slider-bg > video").css({"visibility" : "visible"}, 11500);
        });
        
		
        $('.slider-item-wrap').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe:false,
            arrows: true,
            
        });
        
	})// End ready function.
    
    
    
})(jQuery)

