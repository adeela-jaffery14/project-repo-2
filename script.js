const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
//since circles are many we use querySelectorAll and . with circle as it is a class name. 
let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    //As soon as first next is clicked, the current active circle should be 2 now. So current active is increased to 2. 
    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1) {
        currentActive = 1
    }
    update()
})


function update () {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) { 
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    
    progress.style.width = (actives.length - 1)/(circles.length - 1) * 100 + '%'

    if(currentActive === 1) {
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
    
}

