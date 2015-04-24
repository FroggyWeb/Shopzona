$(document).ready(function() {
  $('.art-menu').slicknav({
    label: "",
    closedSymbol: " ",
    openedSymbol: " ",
    //prependTo: $('.top_line_header')
    prependTo: $('.art-nav')
  });
  // $('.slicknav_menu').click(function(event){ event.stopPropagation();});

  // $(document).click(function () { $(".art-menu").slicknav('close') });

});

$(document).ready(function() {
  //Слайдер на главной___________________________________________
  $('.sliderwin').fractionSlider({
    'fullWidth': true,
    'autoChange': false,
    'controls': false, 
    'pager': $('.sbul'),
    'responsive': true,
    'dimensions': "940,350",
    'increase': false,
    'pauseOnHover': true,
    'slideEndAnimation': false
  });

  $('.fs-custom-pager-wrapper a').each(function(i){
    console.log(i);
    $(this).append('<span>' + (i + 1) + '</span>' + 'ШАГ' )
  });

  //Табы_________________________________________________________
  $('.category_tab_wrap').easytabs({
    'transitionIn': 'slideDown',
    updateHash: false
  });

  $('.kupon_short_list').slick({
      slide: ".kupon_item_wrap",
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      responsive: [
                    {
                      breakpoint: 800,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 600,
                      settings: {
                        slidesToShow: 1
                      }
                    },
                  ]
    });

  /*выпадающий список соцсетей для мобилок*/
  

  $('.mob-pse-link').on('click', function(event){
    event.preventDefault();
    var link = $(this).attr('href');
    $(link).slideDown();
  });

  $(document).on('click', function(event) {
      $(".mob-popup").each(function(e){
        if ($(event.target).closest('.mob-popup').length === 0 && "#" + $(this).attr('id') != $(event.target).attr('href')) {
        $(this).slideUp();
      }
      });
      event.stopPropagation();
  });

  /*Up btn*/
  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      $('#up-btn').fadeIn();
    }else{
      $('#up-btn').fadeOut();
    }
  });
  $('#up-btn').click(function(){
    $('body,html').stop(false,false).animate({scrollTop:0},800);return false;
  });

  /*Fancybox*/
  $(".fancybox").each(function() {
    $(this).attr('rel', 'article');
  });
  $(".fancybox").fancybox({
  });

  /*comment form*/
  $('#add_comment').on('click', function(event){
    event.preventDefault();
    $(this).hide('', function() {
      $('.comment-form-wrap').slideDown();
    });
  });


});