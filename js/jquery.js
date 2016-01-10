var main = function() {

// TYPED //
 $(function(){
      $(".element").typed({
        strings: ["I am a 22-year-old business graduate", "I am learning code + design to build great products", "I am also in love with the 24 Hours of Le Mans!"],
        typeSpeed: 10,
        startDelay: 0,
        backDelay: 500,
        loop: true,
        cursorChar: "|",
        contentType: 'html',
      });
  });

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