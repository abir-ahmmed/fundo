  
    (function ($) {
        "use strict";
        
        // meanmenu
        $('#mobile-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });
        
        // One Page Nav
        // var top_offset = $('.header-area').height() - 10;
        // $('.main-menu nav ul').onePageNav({
        //     currentClass: 'active',
        //     scrollOffset: top_offset,
        // });
        
        
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
                $(".header-sticky").removeClass("sticky");
            } else {
                $(".header-sticky").addClass("sticky");
            }
        });

        
        
        /* magnificPopup img view */
        $('.popup-image').magnificPopup({
            type: 'image',
            gallery: {
              enabled: true
            }
        });
        
        /* magnificPopup video view */
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });
        
        
        // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $grid.isotope({ filter: filterValue });
        });
        
        //for menu active class
        $('.portfolio-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
        
        
        

        
        // // WOW active
        // new WOW().init();
        
        
        })(jQuery);