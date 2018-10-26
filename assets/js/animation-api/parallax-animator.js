registerAnimator('parallax', class ParallaxAnimator {

    animate(currentTime, effect) {
        if (currentTime == NaN) {
            return
        }
        effect.localTime = 0.2 * currentTime
    }

})
