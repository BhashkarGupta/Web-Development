function cubeSelector(){
    var ranNumber = (Math.random()*4) + 1;
    return Math.floor(ranNumber);
}

function playSound(boxID){
    var audio = new Audio("./sounds/" + boxID + ".mp3");
    audio.play();
    console.log("triggered");
}

function triggerBox(boxID) {
    document.querySelector("#box-" + boxID).classList.add("box-" + boxID + "-glow");
    playSound(boxID);
    setTimeout(function(){
        document.querySelector("#box-" + boxID).classList.remove("box-" + boxID + "-glow");
    }, 400);
}

function getClickedBox() {
    document.querySelectorAll(".box").forEach(function (box) {
        box.addEventListener("click", function (event) {
            var resut = event.target.id.replace("box-", "");
            return resut;
        });
    });
}

function game(){
    var gameStatus = true;
    var cubeSequence = [];
    var level = 1;

    while (gameStatus === true){
        cubeSequence.push(cubeSelector());
        triggerBox(cubeSequence[0]);
        var getClick = getClickedBox();
        for(var i = 0; i < cubeSequence.length; i++){
            
        }
        level++;
    }
}

