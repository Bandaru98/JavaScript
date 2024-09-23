const page = document.querySelector('body')

page.addEventListener('mousemove', (event) => {
    let x = event.offsetX
    let y = event.offsetY
    let span = document.createElement('span')
    span.style.left = x + 'px'
    span.style.top = y + 'px'
    let size = Math.random() * 100
    span.style.width = size + 'px'
    span.style.height = size + 'px'
    page.appendChild(span)
    setTimeout(() => {
        span.remove()
    }, 3000)
})

