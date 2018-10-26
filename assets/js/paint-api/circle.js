class CirclePainter {

    static get inputProperties() {
        return [ '--circle-color' ]
    }

    paint(ctx, size, properties) {
        const color = properties.get('--circle-color')
        const xCircle = size.width / 2
        const yCircle = size.height / 2
        const radiusCircle = Math.min(xCircle, yCircle) - 2.5

        ctx.beginPath();
        ctx.arc(xCircle, yCircle, radiusCircle, 0, 2 * Math.PI)
        ctx.fillStyle = color
        ctx.fill()
    }

}

registerPaint('circle', CirclePainter)
