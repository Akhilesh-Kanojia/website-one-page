$(document).ready(function() {
 
    if($(window).width() <= 1024) {
      $(document).on("click", "header#custom-header .hamburger", function(){
        $('.filter-wrapper').toggleClass('open');
        $(this).toggleClass("change");
      });

      /// first level accordian of menu
    $(document).on("click", "span.accordian-lg", function(){
      $(this).closest("li").siblings().children('span.accordian-lg').removeClass('opened');
    
      if($(this).hasClass('opened')){
          $(this).removeClass('opened');
      }
      else{
          $(this).addClass('opened');
      }
      $(this).next(".submenu-wrapper").slideToggle();
  
     $(this).closest("li").siblings().children('.submenu-wrapper').slideUp();
     
    });
 /// end first level accordian of menu

 /// inner accordian
    $(document).on("click", "h4.accordian-lg", function(){
      $(this).closest(".sub-menu-container").siblings().children('h4.accordian-lg').removeClass('opened');
      if($(this).hasClass('opened')){
          $(this).removeClass('opened');
      }
      else{
          $(this).addClass('opened');
      }
    $(this).next(".submenu-wrapper").slideToggle();
      $(this).closest(".sub-menu-container").siblings().children('.submenu-wrapper').slideUp();
    });

  /// end inner accordian

    };
    
    /// sticky header
    if($(window).width() > 1024) {
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 120) {
            $('header#custom-header .sticky-header').addClass('fixed-header');
        }
        else {
            $('header#custom-header .sticky-header').removeClass('fixed-header');
        }
    });
    }
   /// end sticky header

    /// footer accordian
    if($(window).width() <= 767) {
    $('.accordian-sm p').click(function(){
      $(this).closest(".accordian-sm").siblings().find('p').removeClass('open');
      if($(this).hasClass('open')){
          $(this).removeClass('open');
      }
      else{
          $(this).addClass('open');
      }
    $(this).next(".accord-content").slideToggle();
      $(this).closest(".accordian-sm").siblings().find('.accord-content').slideUp();
  });
    }
  ///// end footer accordian

  /// slick slider
  $('footer#custom-footer .footer-slider').slick({
    infinite: true,
    dots: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }]
});

});
