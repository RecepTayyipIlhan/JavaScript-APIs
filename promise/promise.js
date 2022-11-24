const box = document.querySelector('.box')

/*Call Back Helk*/

/*setTimeout(() => {
    box.classList.add("bigger")
    setTimeout(()=>{
        box.classList.add("circle")
        setTimeout(()=>{
            box.classList.add("move")
            setTimeout(()=>{
                box.classList.add("colored")
                setTimeout(()=>{
                    box.classList.remove("colored")
                    setTimeout(()=>{
                        box.classList.remove("move")
                        setTimeout(()=>{
                            box.classList.remove("circle")
                            setTimeout(()=>{
                                box.classList.remove("bigger")
                            },500)
                        },500)
                    },500)
                },500)
            },500)
        },500)
    },500)
},500)*/

// Promise

const wait = ms => new Promise(resolve => setTimeout(resolve,ms))

wait(500).then(()=>{
    box.classList.add('bigger')
    return wait(500)
})
.then(()=>{
    box.classList.add('circle')
    return wait(500)
})
.then(()=>{
    box.classList.add('move')
    return wait(500)
})
.then(()=>{
    box.classList.add('colored')
    return wait(500)
})

.then(()=>{
    box.classList.remove('bigger')
    return wait(500)
})
.then(()=>{
    box.classList.remove('circle')
    return wait(500)
})
.then(()=>{
    box.classList.remove('move')
    return wait(500)
})
.then(()=>{
    box.classList.remove('colored')
    return wait(500)
})