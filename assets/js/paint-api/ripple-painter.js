class RipplePainter {

    static get inputProperties() {
        return ['--ripple']
    }

    paint(ctx, geom, properties) {
        const xMid = geom.width / 2
        const yMid = geom.height / 2
        const ripple = parseFloat(properties.get('--ripple').toString())

        const timeFunc = function (t) {
            return t * t * (3 - 2 * t)
        }

        const adjustedParameter = function (delta) {
            let adjustedParametricValue = ripple + delta
            if (adjustedParametricValue < 0) {
                adjustedParametricValue++
            } else if (adjustedParametricValue > 1) {
                adjustedParametricValue--
            }
            return adjustedParametricValue
        }

        const computeRadius = function (delta) {
            return 8 + 21 * timeFunc(adjustedParameter(delta))
        }

        const drawRipple = function (delta) {
            const radius = computeRadius(delta)
            const opacity = 0.8 * (1 - timeFunc(adjustedParameter(delta)))
            ctx.strokeStyle = 'rgba(0, 0, 0,' + opacity + ')'
            ctx.beginPath()
            ctx.arc(0, 0, radius, 0, 2 * Math.PI)
            ctx.stroke()
        }

        ctx.lineWidth = 4
        ctx.translate(xMid, yMid)
        drawRipple(0)
        drawRipple(0.5)
    }
}

registerPaint('ripple-painter', RipplePainter)