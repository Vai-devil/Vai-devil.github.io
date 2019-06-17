function smoothscroll(target, duration) {
    var target = document.querySelector(target);
    var targetpos = target.getBoundingClientRect().top;
    var startpos = window.pageYOffset;
    var distance = targetpos - startpos;
    var startTime = null;

    function animation(currentTime) {
        if (startTime == null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startpos, distance, duration)
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }
    //function from gizma.com easing function t= timeelapsed s = start pos c = disptance d = durationn
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}
//create below function an variable to go from section 1 to seciton 2
var profile = document.querySelector('.button');
profile.addEventListener('click', function () {
    smoothscroll('.profile', 1000);
})
