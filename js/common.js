jQuery(document).ready(function(){
  function classFunction(){
    if(jQuery('body').width()<768){ jQuery('.two').removeClass('two').addClass('third');
    }
    else{
      jQuery('.third').removeClass('third').addClass('two');
    }
  }
  
  classFunction();
  jQuery(window).resize(classFunction);

//Скрыть программы модального окна.
 /* $(document).ready(function() {
 
    $(window).resize(function(){
      var windowWidth = $(window).width();
      if(windowWidth > 1359)$('.popup a.modal-links').addClass('popup-visible').removeClass('popup-hide');
      else $('.popup a.modal-links').removeClass('popup-visible').addClass('popup-hide');
    });
  }); */

//Скрыть программы модального окна в кнопку - еще.
 /*  $(document).ready(function() {
 
    $(window).resize(function(){
      var windowWidth = $(window).width();
      if(windowWidth > 1359)$('.spoiler-title a.modal-links-2').addClass('popup-hide-2').removeClass('popup-visible-2');
      else $('.spoiler-title a.modal-links-2').removeClass('popup-hide-2').addClass('popup-visible-2');
    });
  }); */

//Плавный переход по якорям
  $('a[data-target^="anchor"]').bind('click.smoothscroll', function() { 
     	var target = $(this).attr('href'),
     		bl_top = $(target).offset().top;
     	$('body, html').animate({scrollTop: bl_top}, 1000);
     	return false;
  });

  //E-mail Ajax форма
  $("form.form-call").submit(function() { //Change
    var th = $(this);
    $.ajax({
      type: "POST",
      url: "/mail.php", //Change
      data: th.serialize()
    }).done(function() {
      $(th).find('.success-form').addClass('active').css('display', 'flex').hide().fadeIn();
      setTimeout(function() {
        $(th).find('.success-form').removeClass('active').fadeOut();
        th.trigger("reset");
      }, 3000);
    });
    return false;
  });

    // Модальное окно

  // открыть по кнопке-1
  $('.js-button-campaign').click(function() { 
    
    $('.js-overlay-campaign').fadeIn();
    $('.js-overlay-campaign').addClass('disabled');
    return false;
  });

  // открыть по кнопке-2
  $('.js-button-campaign-2').click(function() { 
    
    $('.js-overlay-campaign-2').fadeIn();
    $('.js-overlay-campaign-2').addClass('disabled');
    return false;
  });

  // закрыть на крестик-1
  $('.js-close-campaign').click(function() { 
    $('.js-overlay-campaign').fadeOut();
    
  });

  // закрыть на крестик-2
  $('.js-close-campaign-2').click(function() { 
    $('.js-overlay-campaign-2').fadeOut();
    
  });

  // закрыть по клику вне окна-1
  $(document).mouseup(function (e) { 
    var popup = $('.js-popup-campaign');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-campaign').fadeOut();
      
    }
  });

   // закрыть по клику вне окна-2
  $(document).mouseup(function (e) { 
    var popup = $('.js-popup-campaign-2');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-campaign-2').fadeOut();
      
    }
  });

  // открыть по кнопке-3
  $('.js-button-campaign-3').click(function() { 
    
    $('.js-overlay-campaign-3').fadeIn();
    $('.js-overlay-campaign-3').addClass('disabled');
    return false;
  });
 // закрыть на крестик-3
  $('.js-close-campaign-3').click(function() { 
    $('.js-overlay-campaign-3').fadeOut();
    
  });
 // закрыть по клику вне окна-3
  $(document).mouseup(function (e) { 
    var popup = $('.js-popup-campaign-3');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-campaign-3').fadeOut();
      
    }
  });

   // открыть по кнопке-4
  $('.js-button-campaign-4').click(function() { 
    
    $('.js-overlay-campaign-4').fadeIn();
    $('.js-overlay-campaign-4').addClass('disabled');
    return false;
  });
 // закрыть на крестик-4
  $('.js-close-campaign-4').click(function() { 
    $('.js-overlay-campaign-4').fadeOut();
    
  });
 // закрыть по клику вне окна-4
  $(document).mouseup(function (e) { 
    var popup = $('.js-popup-campaign-4');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-campaign-4').fadeOut();
      
    }
  });

  // открыть по кнопке-5
  $('.js-button-campaign-5').click(function() { 
    
    $('.js-overlay-campaign-5').fadeIn();
    $('.js-overlay-campaign-5').addClass('disabled');
    return false;
  });
 // закрыть на крестик-5
  $('.js-close-campaign-5').click(function() { 
    $('.js-overlay-campaign-5').fadeOut();
    
  });
 // закрыть по клику вне окна-5
  $(document).mouseup(function (e) { 
    var popup = $('.js-popup-campaign-5');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-campaign-5').fadeOut();
      
    }
  });

  // открыть по кнопке-6
  $('.js-button-campaign-6').click(function() { 
    
    $('.js-overlay-campaign-6').fadeIn();
    $('.js-overlay-campaign-6').addClass('disabled');
    return false;
  });
 // закрыть на крестик-6
  $('.js-close-campaign-6').click(function() { 
    $('.js-overlay-campaign-6').fadeOut();
    
  });
 // закрыть по клику вне окна-6
  $(document).mouseup(function (e) { 
    var popup = $('.js-popup-campaign-6');
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $('.js-overlay-campaign-6').fadeOut();
      
    }
  });

  $(document).ready(function(){
    $('.spoiler-title').click(function(){
    $(this).parent().children('.spoiler-body').slideToggle();
    return false;
    });
  });

  //скрывающееся меню.
  $('.toggle-menu').click(function() {
    $(this).toggleClass('on');
    $('.top-menu').slideToggle();
  });

});
