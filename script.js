document.addEventListener('DOMContentLoaded', function() {
    var controller = new ScrollMagic.Controller();
  
    var parallaxScene = new ScrollMagic.Scene({
      triggerElement: '.parallax',
      triggerHook: 0,
      duration: '200%'
    })
    .setTween('.parallax__layer--back', { y: '80%', ease: 'power0.none' })
    .addTo(controller);
  });
  