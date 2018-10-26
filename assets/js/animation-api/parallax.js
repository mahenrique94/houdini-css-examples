document.addEventListener('DOMContentLoaded', function () {
    window.flagIsSet = function (flagName) {
        return document.location.search.indexOf(flagName) !== -1;
    };

    var rafScheduled = false;
    var tick = function (timestamp) {
        var offset = -0.1 * scroller.scrollTop;
        window.parallax.style.transform = 'translate(0, ' + offset + 'px)';
        requestAnimationFrame(tick);
        rafScheduled = false;
    };

    if (!flagIsSet('nojank')) {
        // Lets burn some time in the main thread;
        // up to 120ms per frame.
        requestAnimationFrame(function jankRAF(timestamp) {
            var delay = 120 * Math.random();
            while (window.performance.now() - timestamp < delay) { }
            requestAnimationFrame(jankRAF);
        });
    }

    window.scroller = document.querySelector('.scroll');
    window.parallax = document.querySelector('.parallax');

    window.scroller.style.backfaceVisibility = 'hidden';
});