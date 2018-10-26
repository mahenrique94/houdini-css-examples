CSS.registerProperty({
    name: '--circle-color',
    inherits: false,
    initialValue: 'transparent',
    syntax: '<color>'
})

CSS.registerProperty({
    name: '--ripple-color',
    inherits: true,
    initialValue: 'purple',
    syntax: '<color>'
})

CSS.registerProperty({
    name: '--ripple-y',
    inherits: true,
    initialValue: 0,
    syntax: '<number>'
})

CSS.registerProperty({
    name: '--ripple-x',
    inherits: true,
    initialValue: 0,
    syntax: '<number>'
})

CSS.registerProperty({
    name: '--animation-tick',
    inherits: true,
    initialValue: 0,
    syntax: '<number>'
})

CSS.registerProperty({
    name: '--spinner-angle-degrees',
    inherits: false,
    initialValue: '0',
    syntax: '<number>'
})

CSS.registerProperty({
    name: '--comet-head-degrees',
    inherits: false,
    initialValue: '0',
    syntax: '<number>'
})

CSS.registerProperty({
    name: '--comet-tail-degrees',
    inherits: false,
    initialValue: '0',
    syntax: '<number>'
})

CSS.registerProperty({
    name: '--parametric-value',
    inherits: false,
    initialValue: '0',
    syntax: '<number>'
})

CSS.registerProperty({
    name: '--ripple',
    inherits: false,
    initialValue: '0',
    syntax: '<number>'
})

const button = document.querySelector('.ripple')
let start = performance.now()
if (button) {
    button.addEventListener('click', event => {
        
        button.classList.add('animating')
        start = performance.now()
        const [ x, y ] = [ event.clientX, event.clientY ]
    
        requestAnimationFrame(function raf(now) {
            const count = Math.floor(now - start)
            button.style.cssText = `--ripple-x: ${x} --ripple-y: ${y} --animation-tick: ${count}`
    
            if (count > 1000) {
                button.classList.remove('animating')
                button.style.cssText = `--animation-tick: 0`
                return
            }
    
            requestAnimationFrame(raf)
        })
    
    })
}