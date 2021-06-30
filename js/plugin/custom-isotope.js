//Isotope gallery in discover.html
// external js: isotope.pkgd.js

$(document).ready(function () {

  var customContainer = jQuery('.iso-container');
  customContainer.isotope({
    filter: '*',
    transitionDuration: '2s',
    animationOptions: {
      duration: 7500,
      queue: false
    },

    layoutMode: 'fitRows',
    fitRows: {
      gutter: 0
    }

  });

  jQuery('#custom-filter li:first-child > a').addClass('is-checked');

  jQuery('#custom-filter a').click(function () {
    jQuery('#custom-filter .is-checked').removeClass('is-checked');
    jQuery(this).addClass('is-checked');

    var customSelector = jQuery(this).attr('data-filter');
    customContainer.isotope({
      filter: customSelector,
      transitionDuration: '2s',
      animationOptions: {
        duration: 7500,
        queue: true
      },
      layoutMode: 'fitRows',
      fitRows: {
        gutter: 0
      }
    });
    return false;
  });
});