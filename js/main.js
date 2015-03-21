$(document).ready(function() {
  $('.art-menu').slicknav({
    label: "МЕНЮ",
    prependTo: $('.top_line_header')
  });

  // $(document).on('click', function(e){
  //   if ($(e.target).parents().filter('.slicknav_nav').length != 1) {
  //     $('.art-menu').slicknav('close')
  //   };       
  // });

  $('body').addClass('mobile');
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
    $(this).append('<span>' + (i + 1) + '</span>' + 'ШАГ' )
  });

  //Табы_________________________________________________________
  $('.category_tab_wrap').easytabs({
    'transitionIn': 'slideDown'
  });

  // $('.kupon_short_list').bxSlider({
  //     slideWidth: 304,
  //     minSlides: 1,
  //     maxSlides: 3,
  //     moveSlides: 1,
  //     slideMargin: 15,
  //     infiniteLoop: false,
  //     pager: false,
  //     hideControlOnEnd: true
  //   });

});