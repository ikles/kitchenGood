jQuery(document).ready(function( $ ) {

  $(".toggle-mnu").click(function() {
    $(this).toggleClass("on");
    $(".top-mnu").slideToggle();
    $('.menu-inn, .menu__burger').removeClass('show');
    return false;
  });

  $('body').click(function () {
    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }
    $('.menu-inn, .menu__burger').removeClass('show');
  });


  $(".top-mnu, .menu__burger, .menu-inn").click(function (e) {
    e.stopPropagation();
  });




//levels menu
  let isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}}

  let body = document.querySelector('body');


  if ( isMobile.any() ) {
    body.classList.add('touch');
    let arrow = document.querySelectorAll('.menu-arrow');
    arrow.forEach(function (item) {
      let thisLink = item.previousElementSibling;
      let subMenu = item.nextElementSibling;
      let thisArrow = item;

      thisLink.classList.add('parent');
      item.addEventListener('click', function () {      
        subMenu.classList.toggle('open');
        thisArrow.classList.toggle('active');
      });
    });
  }
  else {
    body.classList.add('mouse')
  }



  $('body.mouse .menu__burger').hover(
    function(){      
      $('.menu-inn').addClass('show');
    },
    function(){

    });


  
  $('body.mouse .menu').hover(
    function(){      

    },
    function(){      
      $('.menu-inn').removeClass('show');
    });


  $('body.touch .menu__burger').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('show');
    $('.menu-inn').toggleClass('show');

    if( $(".toggle-mnu").hasClass("on") ){
      $(".toggle-mnu").removeClass("on");
      $(".top-mnu").fadeOut();
    }

  });


  $('.show-filters__btn').click(function (e) {
    e.preventDefault();
    $('.catfilter-tit, .catfilter-cont').removeClass('hide');
  });




  $(".catfilter-cont").mCustomScrollbar({
    axis: "y",
    theme: "dark-3",
    mouseWheel: 1,
    scrollInertia: '230'
  });    


/*  $(".modprod").mCustomScrollbar({
    axis: "y",
    theme: "dark-3",
    mouseWheel: 1,
    scrollInertia: '230'
  });    */


  $('.top__slider').slick({
    infinite: true,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 1,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    dots: true,
    pauseOnHover: true,  
  });


  $('.partners__slider').slick({
    infinite: true,    
    speed: 600,
    slidesToScroll: 1,
    autoplay: false,    
    slidesToShow: 6,
    cssEase: 'linear',  
    autoplaySpeed: 0,  
    arrows: true,
    dots: false,
    pauseOnHover: true, 
    responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4        
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 2
      }
    },
    ] 
  });

  $('.filter__h').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('enable');
    $('.filter__filling').slideToggle();
  });


  $('.accordion-header').click(function () {
    $(this).toggleClass('active-header');
    $(this).next().slideToggle(100).toggleClass('open-content');
  });



  $('.catfilter-it').each(function () {
    let tit = $(this).find('.catfilter-tit');
    let cont = $(this).find('.catfilter-cont');
    tit.click(function (e) {
      e.preventDefault();
      $(this).toggleClass('hide');
      cont.toggleClass('hide');
    });
  });


/************************************/

/*$('.wrapper').prepend('<span class="eye-3"></span>');
let pg = parseInt(document.location.pathname.match(/\d+/))
$('body').addClass('active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");

$('.eye-3').click(function (e) {
e.preventDefault();  
$('body').toggleClass('active');
let pg = parseInt(document.location.pathname.match(/\d+/));
$('body.active').css('background-image', "url('../img/"+pg+".jpg')");
$('body:not(.active)').css('background-image', "unset");
});*/

/************************************/

  $('[data-fancybox="gallery-1"]').fancybox({
    arrows: true,
    infobar: false,
    smallBtn: true,
    toolbar: false,
    iframe : {
      css : {
        width : '950px'
      }
    },    
    slideClass: "myClass",
    baseClass: "myclass"
  });


  function tabs(element) {    
    $(element).find('.tabs__list-item').click(function () {
      $(element).find('.tabs__list-item').removeClass('active');
      $(this).addClass('active');    
      let num = $(this).index();
      $(element).find('.tabs__content-list-item').removeClass('active');
      $(element).find('.tabs__content-list-item').eq(num).addClass('active');    
    });
  }

  tabs('.charact__card');


  function popup(openLink, windowEl, closeEl) {  
    $(openLink).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeIn();
      $('body').addClass('ohi');
    });
    $(closeEl).click(function(e) {
      e.preventDefault();
      $(windowEl).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-overlay').click(function () {
      $(this).fadeOut();
      $('body').removeClass('ohi');
    });
    $('.modal-form__block').click(function (e) {
      e.stopPropagation();  
    });

  }

  popup('.dircontact', '.modal-overlay_1', '.modal-close_1');
  popup('.head__btn', '.modal-overlay_1', '.modal-close_1');
  popup('.head__call-back', '.modal-overlay_2', '.modal-close_2');
  popup('.our-work__item', '.modal-overlay_3', '.modal-close_3');
  popup('.mcatalog__item', '.modal-overlay_4', '.modal-close_4');


  $('a[href*=\\#]:not([href=\\#])').click(function () {
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    $("html:not(:animated),body:not(:animated)").animate({scrollTop: destination - 85}, 1100);
    return false;
  });


  $(window).scroll(function(){
    var wt = $(window).scrollTop();  
    var wh = $(window).height();    
    if (wt > 600) {
      $('.serv-arr-up').show(400);
    }
    else {
      $('.serv-arr-up').hide();
    }
  });

  if($('select').length) {
    $('select').select2({
      minimumResultsForSearch: -1
    });
  }


//RANGE
  const priceSlider = document.querySelector('.price__range');
  if (priceSlider) {

  //let textFrom = priceSlider.getAttribute('data-from');
    let textTo = priceSlider.getAttribute('data-to');

    noUiSlider.create(priceSlider, {
      start: [0, 10000],
      connect: true,
    //tooltips: [wNumb({ decimals: 0, prefix: '' + '' }), wNumb({ decimals: 0, prefix: '' + '' })],
      range: {
        'min': [0],
        'max': [10000]
      }    
    });


    const priceStart = document.getElementById('price-start');
    const priceEnd = document.getElementById('price-end');
    priceStart.addEventListener('change', setPriceValues);
    priceEnd.addEventListener('change', setPriceValues);


    priceSlider.noUiSlider.on('update', function(values, handle) {
      priceStart.value = +Math.round(priceSlider.noUiSlider.get()[0]);
      priceEnd.value = +Math.round(priceSlider.noUiSlider.get()[1]);
    });



    function setPriceValues() {
      let priceStartValue;
      let priceEndValue;
      if (priceStart.value != '') {
        priceStartValue = priceStart.value;
      }
      if (priceEnd.value != '') {
        priceEndValue = priceEnd.value;
      }
      priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
  } //spV
}// if priceSlider




}); //ready

