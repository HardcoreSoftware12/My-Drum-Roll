var numOfDrumButtons = document.querySelectorAll('.drum').length;
console.log(numOfDrumButtons);



for(var i=0; i<numOfDrumButtons ; i++){
    
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){

        //if i use arrow function this wil show window object
        // console.log('got clicked');
        // var audio = new Audio("sounds/tom-1.mp3")
        // audio.play();
        console.log(this.textContent)
        // this.style.color = 'white'
        makeSound(this.textContent)
        buttonAnimation(this.textContent)
        

        
    })

}

window.addEventListener('keydown',function(event){
    // console.log(event.key);
    makeSound(event.key)
    buttonAnimation(event.key)
})

function makeSound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;

        case "a":
            var audio = new Audio("sounds/tom-2.mp3")
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3")
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3")
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3")
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3")
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3")
            audio.play();
            break;
        default:
            console.log('default case');
        
    }

}
function buttonAnimation(key){
    console.log(key);
    var activeButton = document.querySelector(`.${key}`)
    activeButton.classList.add('pressed')
    // console.log(activeButton.classList);
    setTimeout(()=>{
        activeButton.classList.remove('pressed')

    },100)
    

}




