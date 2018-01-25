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

 });
