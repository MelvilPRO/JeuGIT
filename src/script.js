var stickman = document.querySelector(".stickman");
var obstacles = document.querySelector(".obstacles");

function sauter(){
    if(stickman.classList != "animation"){
        stickman.classList.add('animation'); 
    }
    setTimeout(function(){
        stickman.classList.remove('animation'); 
    },500)
}

var verification = setInterval(function(){
    var stickmanTop = parseInt(window.getComputedStyle(stickman).getPropertyValue("top")) ;
    var obstaclesLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left")) ;

    if(obstaclesLeft<20 && obstaclesLeft >0 && stickmanTop>= 130){
        obstacles.style.animation = "none";
        alert("Vous avez perdu")
    }
    else {
        document.addEventListener('keypress', (event) => {
            if (event.key === ' ') {
                sauter();
            }
        });
    }
},1)

var startButton = document.querySelector("#startButton");
startButton.addEventListener("click", function(){
    obstacles.style.animation = "anime-obstacles 2.5s infinite";
})

