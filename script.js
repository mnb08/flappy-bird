const block = document.querySelector('#block')
const hole = document.querySelector('#hole')
const character = document.querySelector('#character')
const audio = new Audio('jump-sound.mp3');


let jumping = 0

hole.addEventListener('animationiteration', () => {
    const random = -((Math.random()*300)+150)
    hole.style.top = random+'px'
})

document.addEventListener('keydown', (e) => {
    if(e.code == 'Space'){
        jump()
    }
})

setInterval( () => {
    const characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue('top'))

    const blockLeft = 
        parseInt(window.getComputedStyle(block).getPropertyValue('left'))

    const holeTop = 
        parseInt(window.getComputedStyle(hole).getPropertyValue('top'))

    const cTop = -(500-characterTop)

    if(jumping == 0){
        character.style.top = (characterTop + 3) + 'px'
    }

    if((characterTop > 480) || ((blockLeft < 20) && (blockLeft > -50)) && 
        ((cTop<holeTop) || (cTop>holeTop + 130))){
        alert('GAME OVER')
        character.style.top = '100px'
    }

    
    console.log(characterTop)
}, 10)

function jump(){
    audio.play();
    jumping = 1 
    let jumpingCount = 0
    const jumpInterval = setInterval( () => {
        const characterTop = 
        parseInt(window.getComputedStyle(character).getPropertyValue('top'))
            
        
        if(characterTop > 6 && jumpingCount < 15){
            character.style.top = (characterTop - 5) + 'px'
        }

        if(jumpingCount > 20){
            jumping = 0 
            jumpingCount = 0
            clearInterval(jumpInterval)
        }
        jumpingCount++
    }, 10)
}