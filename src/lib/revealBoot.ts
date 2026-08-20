/**
 * Runs before first paint, ahead of (and independent of) React hydration.
 *
 * Order matters: it opts the document into the hidden state only after
 * confirming it can also un-hide it. Reduced motion and browsers without
 * IntersectionObserver return early, leaving every section visible.
 */
export const REVEAL_BOOT = `(function(){
try{
  var mq = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mq && mq.matches) return;
  if (!('IntersectionObserver' in window)) return;

  var root = document.documentElement;
  root.setAttribute('data-anim','on');

  var show = function(el){ el.classList.add('is-in'); };

  var start = function(){
    var io = new IntersectionObserver(function(entries){
      for (var i=0;i<entries.length;i++){
        if (entries[i].isIntersecting){ show(entries[i].target); io.unobserve(entries[i].target); }
      }
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.01 });

    var nodes = document.querySelectorAll('[data-reveal]');
    for (var i=0;i<nodes.length;i++) io.observe(nodes[i]);

    // Failsafe: nothing above the fold stays hidden, whatever else went wrong.
    setTimeout(function(){
      var left = document.querySelectorAll('[data-reveal]:not(.is-in)');
      for (var i=0;i<left.length;i++){
        if (left[i].getBoundingClientRect().top < window.innerHeight * 1.1) show(left[i]);
      }
    }, 1500);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else { start(); }
}catch(e){
  document.documentElement.removeAttribute('data-anim');
}
})();`;
