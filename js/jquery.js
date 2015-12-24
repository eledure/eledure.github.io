var main = function() {

// LOADER GAME //
  $('body').click(function() {
    $('#lightbox').fadeOut();
    $('#lightbox-shadow').fadeOut();
  });

	// 1 = bleu, 0 = rouge
  var count = [1, 0, 0, 1];

  function areAllChecked() {
  		var allChecked = true;

  		$('.loader-box').each(function(i, item) {
  			if(!$(item).hasClass('b-blue')) {
  				allChecked = false;
  			}
  		})

  		return allChecked;
  }

  $('.loader-box').each(function(i, item) {

  		$(item).mouseover(function() {

  			if($(this).hasClass('b-red')) {
  				$(this).removeClass('b-red').addClass('b-blue');
  			}
  			else {
  				$(this).removeClass('b-blue').addClass('b-red');
  			}

  			if(areAllChecked()) {
  				console.log('OKKKKK');
  				$('.loader-box').fadeOut('slow');
          $('#full-loader').show().delay(1300).fadeOut('slow');
          $('#congrats').fadeIn(100).delay(1000).fadeOut('slow', function() {
              $('#loader-game').addClass('loaded');
           });
  			}
  		});
	});

// TYPED //
 $(function(){
      $(".element").typed({
        strings: ["I am a 22-year-old business student", "I am learning code + design to build great products", "I am in love with the 24 Hours of Le Mans!"],
        typeSpeed: 10,
        startDelay: 0,
        backDelay: 500,
        loop: true,
        cursorChar: "|",
        contentType: 'html',
      });
  });

// GARAGE //
  $('.row').click(function() {
    $('#right-col-slide').toggle("slide", 1000);
  })

// NAV //
  $(function() {
    $('nav a').bind('click',function(event){
        var $anchor = $(this);
        
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000,'easeInOutCubic');
        event.preventDefault();
    });
  });

};

$(document).ready(main);