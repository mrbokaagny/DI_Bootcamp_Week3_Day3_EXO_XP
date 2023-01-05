let animate = document.getElementById('animate')
let container = document.getElementById('container')
let position = 1
let interval 

function click(){
    position = position + 1
    console.log(position)
    animate.setAttribute('style' , `left : ${position}px`) 
    if(position >= container.offsetWidth - animate.offsetWidth){
        clearInterval(interval)
    }
}


function myMove(){
    interval = setInterval(click, 1)
}
