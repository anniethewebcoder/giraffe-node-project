//TESTIMONIALS
const panels = document.getElementById('panels')

const panel = document.querySelectorAll('.panel')

console.log(panel)

let index = 0

let interval = setInterval(run, 2000)

function run() {
    index++
    changePanel()
}

function changePanel() {
    if(index > panel.length - 1) {
        index = 0
    } else if(index < 0) {
        index = panel.length - 1
    }

    panels.style.transform = `translateX(${-index * 480}px)`
}