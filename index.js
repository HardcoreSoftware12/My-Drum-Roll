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
        
    })
    


}




