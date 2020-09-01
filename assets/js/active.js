(function ($){
    "use strict";
    
    //Mean Menu
    $('#mobile-menu-active').meanmenu({
        meanMenuContainer: '.responsive-menu',
        meanScreenWidth: "575",
    });

    

	 //Carousel For Widget Ads 
    $('.ads-active').owlCarousel({
		autoplay:true,
        loop:true,
        nav:true,
        dots:true,
        //slideShow:1,
        //margin:35,
        navText:[ '<i class="fas fa-angle-left"></i>' , '<i class="fas fa-angle-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:1
            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });
	 //Carousel For older Post 
    $('.older-active').owlCarousel({
		autoplay:true,
        loop:true,
        nav:false,
        dots:false,
        slideShow:1,
        margin:20,
        responsive:{
            0:{
                items:2
            },
            576:{
                items:4
            },
            768:{
                items:5
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
	
    
    scrollToTop.addEventListener("click",function(){$("html,body").animate({scrollTop:0},"slow")});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	    
})(jQuery);