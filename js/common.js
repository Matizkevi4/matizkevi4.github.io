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

 });
