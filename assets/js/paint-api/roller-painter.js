class RollerPainter {

    static get inputProperties() {
        return ['--parametric-value']
    }

    paint(ctx, geom, properties) {
        const xMid = geom.width / 2
        const yMid = geom.height / 2
        const parametricValue = parseFloat(properties.get('--parametric-value').toString())

        ctx.fillStyle = 'black'

        const timeFunc = function (t) {
            return t * t * (3 - 2 * t)
        }

        const rotationAngle = function (delta) {
            let adjustedParametricValue = parametricValue + delta
            if (adjustedParametricValue < 0) {
                adjustedParametricValue++
            } else if (adjustedParametricValue > 1) {
                adjustedParametricValue--
            }
            return 2 * Math.PI * timeFunc(adjustedParametricValue)
        }

        ctx.translate(xMid, yMid)
        const drawDot = function (x, y, parametricOffset) {
            ctx.save()
            ctx.rotate(rotationAngle(parametricOffset))
            ctx.beginPath()
            ctx.arc(x, y, 3, 0, 2 * Math.PI)
            ctx.fill()
            ctx.restore()
        }

        drawDot(18, 18, 0.03)
        drawDot(13, 22, 0.06)
        drawDot(7, 25, 0.09)
        drawDot(0, 26, 0.12)
        drawDot(-7, 25, 0.15)
        drawDot(-13, 22, 0.18)
        drawDot(-18, 18, 0.21)
        drawDot(-22, 13, 0.24)
    }
}

registerPaint('roller-painter', RollerPainter)
