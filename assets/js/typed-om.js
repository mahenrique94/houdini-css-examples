const box = document.querySelector('.box')

box.attributeStyleMap.set('background', 'red')
box.attributeStyleMap.set('display', 'inline-block')
box.attributeStyleMap.set('font-size', new CSSMathSum(CSS.rem(3), CSS.rem(1)))
box.attributeStyleMap.set('height', CSS.px(300))
box.attributeStyleMap.set('padding', CSSStyleValue.parse('padding', CSS.rem(5)))
box.attributeStyleMap.set('width', CSS.px(500))
box.attributeStyleMap.set('transform', new CSSTranslate(CSS.px(500), CSS.px(100)))