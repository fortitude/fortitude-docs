// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik MÃ¶ller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
}());

(function($){

  var $body = $('body'),
      $toggle = $('#sections-off-canvas-toggle'),
      $offCanvas = $('.off-canvas'),
      $nav = $('.page-nav');

  $body.on('click', function(evt){
    var $target = $(evt.target);
    
    if($target.closest('.off-canvas').length ||
       $target.closest('.page-nav').length ||
       $target.closest('#grid-toggle-button').length){

      return;
    }

    $toggle.prop('checked', false);
  });

})(jQuery);

(function($, requestAnimationFrame) {
  var opacity = 1;
  var $pageNavLabel = $('.page-nav > span');
  var $gridToggleButton = $('#grid-toggle-button');

  function loop() {

    if (window.requestAnimationFrame) {
      opacity = 1 - Math.min(scrollY * (1 / 60), 1);

      $pageNavLabel.css('opacity', opacity);

      requestAnimationFrame(loop);
    } else {
      $pageNavLabel.css('opacity', 0);
    }
  }

  if($pageNavLabel.length) {
    loop();
  }

  $gridToggleButton.on('click', function() {
    var $fa = $gridToggleButton.find('.fa');
    var $body = $('body');

    if($fa.hasClass('fa-eye-slash')) {
      $fa.removeClass('fa-eye-slash')
         .addClass('fa-eye');

      $body.addClass('body--show-grid');
    } else {
      $fa.removeClass('fa-eye')
         .addClass('fa-eye-slash');

      $body.removeClass('body--show-grid');
    }
  });

}(jQuery, requestAnimationFrame));