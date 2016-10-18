function animatePitch() {
  var pitchItems = document.querySelectorAll('.rx-pitch-item');
  var animating = false;
  var currentScrollPosition = 0;
  window.addEventListener('scroll', function(ev) {
    currentScrollPosition = window.scrollY;
    if (!animating) {
      window.requestAnimationFrame(function() {
        pitchItems.forEach(function(item) {
          item.style.transform = 'translateY(0)';
          var bounds = item.getBoundingClientRect();
          item.style.transform = 'translateY(' + Math.max(8, bounds.top - currentScrollPosition) + 'px)';
        });
        animating = false;
      });
    }
    animating = true;
  });
}

function init() {
  animatePitch();
}

document.addEventListener('DOMContentLoaded', init);