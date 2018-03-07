//variables
var slides = $('main');
var videoNav = $(".video-nav");
var tl = new TimelineMax({onComplete: slideShow});

//timing units
var t0 = 0.15;
var t1 = 0.25;
var t2 = 0.5;
var t3 = 1;
var t4 = 1.5;
var t5 = 3;
var t6 = 6;





// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('.accordion-toggle')
  .not('.js')
  .click(function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }
        });
      }
    }
  });

if (matchMedia) {
  var mq = window.matchMedia("(max-width: 991px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    $("#second-toggle--title").removeClass('active');
    $("#second-toggle").hide();
    $("#first-toggle--title").addClass('active');
    $("#first-toggle").show();
    $("#first-toggle--title").click(function(){
      console.log('first click');
      $("#second-toggle--title").removeClass('active');
      $("#first-toggle--title").addClass('active');
      $("#second-toggle").hide();
      $("#first-toggle").show();
    });

    $("#second-toggle--title").click(function(){
      $("#first-toggle--title").removeClass('active');
      $("#second-toggle--title").addClass('active');
      $("#first-toggle").hide();
      $("#second-toggle").show();
    });
  } else {
    $("#second-toggle").show();
    $("#first-toggle").show();
    $("#second-toggle--title").removeClass('active');
    $("#first-toggle--title").removeClass('active');
  }
}


function tabClick() {
  $('.tabbed-container').fadeToggle(300);
  $('.tab').toggleClass('active');
}

function tabListener() {
  $('.tab').click(function(){
    tabClick();
  });
  $('.tabbed-container:last-of-type').fadeOut();
}

(function openAccordion() {
  $('*[data-accordion="accordion-title"]').click(function(){
    $(this).next('*[data-accordion="accordion-body"]').slideToggle('100ms');
    $(this).toggleClass('collapsed');
  });
}());

function videoNavigation() {
  $('*[data-slide]').each(function(){
    $(this).click(function(){
      $('*[data-slide]').removeClass("active");
      $(this).toggleClass("active");
      x = $(this).attr('data-slide');
      animateSlides(slides, x);
      slides.removeClass("active");
      $(x).addClass("active");
      //checkNavColor(x);
      if ($("main:first-of-type").hasClass("active")) {
        $('*[data-nav="previous"]').addClass('disabled');
      } else if ($("main:last-of-type").hasClass("active")) {
        $('*[data-nav="next"]').addClass('disabled');
      } else {
        $('*[data-nav="previous"]').removeClass('disabled');
        $('*[data-nav="next"]').removeClass('disabled');
      }
    });
  });
}

function prevNext() {
  $('*[data-nav="previous"]').click(function(){
    if ($("main:first-of-type").hasClass("active")) {
      $('*[data-nav="previous"]').addClass('disabled');
      $('*[data-nav="next"]').removeClass('disabled');
    } else {
      $('*[data-nav="next"]').removeClass('disabled');
      $('*[data-nav="previous"]').removeClass('disabled');
    }
      x = $('main.active').prev();
      y = $('.js.active').prev();
      $('*[data-slide]').removeClass("active");
      animateSlides(slides, x);
      slides.removeClass("active");
      $(x).addClass("active");
      $(y).addClass("active");
      //checkNavColor(x);
  });

  $('*[data-nav="next"]').click(function(){
    if ($("main:last-of-type").hasClass("active")) {
      $('*[data-nav="next"]').addClass('disabled');
      $('*[data-nav="previous"]').removeClass('disabled');
    } else {
      $('*[data-nav="next"]').removeClass('disabled');
      $('*[data-nav="previous"]').removeClass('disabled');
    }
      x = $('main.active').next();
      y = $('.js.active').next();
      $('*[data-slide]').removeClass("active");
      animateSlides(slides, x);
      slides.removeClass("active");
      $(x).addClass("active");
      $(y).addClass("active");
      //checkNavColor(x);
  });
}

function checkNavColor(activeSlide) {
  console.log(activeSlide);
  if ( $("#one").hasClass("active") ) {
    videoNav.addClass("white");
  } else {
    videoNav.removeClass("white");
  }
}

function animateSlides(y,z) {
  tl.add( TweenMax.to(y, t1, {top:"0", opacity: 0, display: "none", ease: Circ.easeOut}) );
  tl.add( TweenMax.to(z, t1, {top:"0", opacity: 1, display: "block", ease: Circ.easeOut}) );
}

function slideShow() {
  if ($('#five').hasClass('active')) {
  $('.slideshow').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    appendDots: '.dots-container',
    customPaging: function(slick,index) {
    var image_title = slick.$slides.eq(index).find('img').attr('title') || '';
    return '<div> ' + image_title + '</div>';

    },
  });
  } else {
    $('.slideshow').slick('unslick');
  }
}




$(document).ready(function() {
  tabListener();
  $('*[data-accordion="accordion-body"]').slideUp();
  videoNavigation();
  prevNext();
  $("main:not(#one)").hide();
  //slideShow();
});