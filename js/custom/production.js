//---------------------------Scroll Top Button

//Get the button:
mybutton = document.getElementById('scrollTop');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add('showScroll');
  } else {
    mybutton.classList.remove('showScroll');
  }
}

//scroll on top with smoothy effect
$('#scrollTop').click(function() {
  $('html, body').animate({
      scrollTop: 0
    },
    600
  );
  return false;
});

//---------------------------PARALLAX section

//Init rellax.js for parallax effect
var rellax = new Rellax('.rellax', {
  center: true
});

//Init Baffle.js
const text = baffle('.baffle1');
text.set({
  characters: '↟↡↕⥉',
  speed: 50
});
text.start();
text.reveal(800, 2000);

const text2 = baffle('.baffle2');
text2.set({
  characters: '✳✧☯⬷',
  speed: 50
});
text2.start();
text2.reveal(1000, 2000);

//effect on images - the triggers are titles having scale effect

let vanishing = $('.first_title');
let img1 = $('.img1 img');

vanishing.on('mouseenter', function() {
  img1.addClass('cssanimation fadeOutBottom');
});
vanishing.on('mouseleave', function() {
  img1.removeClass('cssanimation fadeOutBottom');
  img1.addClass('cssanimation fadeInLeft');
});

let vanishing2 = $('.third_title');
let img3 = $('.img3 img');

vanishing2.on('mouseenter', function() {
  img3.removeClass('cssanimation doorOpenFromLeft');
  img3.addClass('cssanimation doorOpenFromLeft');
});
vanishing2.on('mouseleave', function() {
  img3.removeClass('cssanimation doorOpenFromLeft');
  img3.addClass('cssanimation doorCloseFromLeft');
});

//--------------------------ISOTOPE GALLERY

//this two make appear the artist name when hover an isotope image
$('.over_name').on('mouseenter', function(name) {
  $(this).find('.artist_name').fadeIn('slow').addClass('hover-this');
});

$('.over_name').on('mouseleave', function(name) {
  $(this).find('.artist_name').fadeOut('slow');
});

//this two add and remove the scale effect when hover an isotope image
$('.zoomable').on('mouseenter', function(zoom) {
  $(this).addClass('zoom');
});

$('.zoomable').on('mouseleave', function(zoom) {
  $(this).removeClass('zoom');
});

//Init Modaal plugin for video in isotope gallery
$('.iframe').modaal({
  type: 'iframe',
  width: 700,
  height: 500
});

//init simpleParallax.js for isotope images
var image = document.getElementsByClassName('s_par_left');
new simpleParallax(image, {
  orientation: 'left'
});

var image = document.getElementsByClassName('s_par_right');
new simpleParallax(image, {
  orientation: 'right'
});

var image = document.getElementsByClassName('s_par_scale');
new simpleParallax(image, {
  delay: 0.6,
  maxTransition: 60
});

//--------------------------TEAM section

//effect on team logo and title - Tilt.js init
VanillaTilt.init(document.querySelector('.tilt_effect'), {
  max: 50,
  speed: 500,
  reverse: false, // reverse the tilt direction
  max: 180, // max tilt rotation (degrees)
  startX: 0, // the starting tilt on the X axis, in degrees.
  startY: 0, // the starting tilt on the Y axis, in degrees.
  perspective: 200, // Transform perspective, the lower the more extreme the tilt gets.
  //scale: 2, // 2 = 200%, 1.5 = 150%, etc..

  transition: true, // Set a transition on enter/exit.
  //axis: null, // What axis should be disabled. Can be X or Y.
  reset: true // If the tilt effect has to be reset on exit.
  //easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
});

//Tilt.js also supports NodeList
VanillaTilt.init(document.querySelectorAll('.tilt_effect'));

//here the h2 beside the runa icon for the team appear at every click on runa image itself
let iconEnd = document.getElementById('team_title');
let firstTitle = $('#al1');
let secondTitle = $('#al2');
let thirdTitle = $('#al3');
let counter = 1;

iconEnd.addEventListener('click', function() {
  if (counter == 1) {
    firstTitle.hide();
    secondTitle.fadeIn();
    thirdTitle.hide();
  } else if (counter == 2) {
    firstTitle.hide();
    secondTitle.hide();
    thirdTitle.fadeIn();
  } else if (counter == 3) {
    firstTitle.fadeIn();
    secondTitle.hide();
    thirdTitle.hide();
  }
  counter++;
  if (counter == 4) {
    counter = 1;
  }
});

//--------------------------CAROUSEL section

//CLOUD9 Team Carousel

$(function() {
  var showcase = $('#showcase');

  showcase.Cloud9Carousel({
    yPos: 42,
    yRadius: 48,
    mirrorOptions: {
      gap: 12,
      height: 0.2
      //here you can set opacity: but i've set it in scss file at value 1
    },
    buttonLeft: $('.nav > .left'),
    buttonRight: $('.nav > .right'),
    autoPlay: true,
    bringToFront: true,
    farScale: 0.4,

    onRendered: showcaseUpdated,
    onLoaded: function() {
      showcase.css('visibility', 'visible');
      showcase.css('display', 'none');
      showcase.fadeIn(1500);
    }
  });

  function showcaseUpdated(showcase) {
    var title = $('#item-title').html($(showcase.nearestItem()).attr('alt'));

    var c = Math.cos((showcase.floatIndex() % 1) * 2 * Math.PI);
    title.css('opacity', 0.5 + 0.5 * c);
  }

  $('.nav > button').click(function(e) {
    var b = $(e.target).addClass('down');
    setTimeout(function() {
      b.removeClass('down');
    }, 80);
  });

  $(document).keydown((e) => {
    switch (e.keyCode) {
      case 37:
        $('.nav > .left').click();
        break;

      case 39:
        $('.nav > .right').click();
    }
  });
});
