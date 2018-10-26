class RingPainter {

    static get inputProperties() {
        return [
            '--comet-head-degrees',
            '--comet-tail-degrees'
        ]
    }

    paint(ctx, geom, properties) {
        const xMid = geom.width / 2
        const yMid = geom.height / 2
        const radius = Math.min(xMid, yMid) * 0.7
        const degreesToRadians = Math.PI / 180
        const cometHeadDegrees = parseFloat(properties.get('--comet-head-degrees').toString())
        const cometTailDegrees = parseFloat(properties.get('--comet-tail-degrees').toString())
        const startAngle = degreesToRadians * cometTailDegrees
        const endAngle = degreesToRadians * cometHeadDegrees

        ctx.lineWidth = 6
        ctx.strokeStyle = 'black'
        ctx.beginPath()
        ctx.arc(xMid, yMid, radius, startAngle, endAngle, false)
        ctx.stroke()
    }
}

registerPaint('ring-painter', RingPainter)
