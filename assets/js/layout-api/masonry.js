registerLayout('masonry', class {

    static get inputProperties() {
        return [ '--padding', '--columns' ]
    }

    *intrinsicSizes() { /* TODO implement :) */ }

    *layout(children, edges, constraints, styleMap) {
        const inlineSize = constraints.fixedInlineSize
        const padding = parseInt(styleMap.get('--padding').toString())
        const columnValue = styleMap.get('--columns').toString()
        let columns = parseInt(columnValue)

        if (columnValue == 'auto' || !columns) {
            columns = Math.ceil(inlineSize / 350)
        }

        const childInlineSize = (inlineSize - ((columns + 1) * padding)) / columns
        const childFragments = yield children.map((child) => {
            return child.layoutNextFragment({ fixedInlineSize: childInlineSize })
        })

        let autoBlockSize = 0
        const columnOffsets = Array(columns).fill(0)
        for (let childFragment of childFragments) {
            const min = columnOffsets.reduce((acc, val, idx) => {
                if (!acc || val < acc.val) {
                    return { idx, val }
                }

                return acc
            }, { val: +Infinity, idx: -1 })

            childFragment.inlineOffset = padding + (childInlineSize + padding) * min.idx
            childFragment.blockOffset = padding + min.val

            columnOffsets[min.idx] = childFragment.blockOffset + childFragment.blockSize
            autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + padding)
        }

        return { autoBlockSize, childFragments }
    }
})