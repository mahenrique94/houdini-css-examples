class SpinnerPainter {

    static get inputProperties() {
        return ['--spinner-angle-degrees']
    }

    paint(ctx, geom, properties) {
        const xMid = geom.width / 2
        const yMid = geom.height / 2
        const length = 0.22 * geom.width
        const numBlades = 12
        const angleAdvance = -2 * Math.PI / numBlades
        const degreesToRadians = Math.PI / 180
        let spinnerAngleDegrees = parseFloat(properties.get('--spinner-angle-degrees').toString())
        spinnerAngleDegrees = 30 * Math.trunc(spinnerAngleDegrees / 30)
        const spinnerAngle = degreesToRadians * spinnerAngleDegrees

        ctx.translate(xMid, yMid)
        ctx.rotate(spinnerAngle)
        for (let i = 0; i < numBlades; i++) {
            const opacity = 1 - i / numBlades
            ctx.fillStyle = 'rgba(0, 0, 0,' + opacity + ')'
            ctx.fillRect(-2, 4 - yMid, 5, length)
            ctx.rotate(angleAdvance)
        }
    }
}

registerPaint('spinner-painter', SpinnerPainter)
