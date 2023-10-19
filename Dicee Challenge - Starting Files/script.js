function rollTheDice(){
    var dice1 = (Math.random() * 6) + 1;
    var dice2 = (Math.random() * 6) + 1;
    document.querySelector(".dice1 > img").setAttribute("src", updateDice(dice1));
    document.querySelector(".dice2 > img").setAttribute("src", updateDice(dice2));

    if (dice1 > dice2){
        var winner = "Player 1";
    }else{
        var winner = "Player 2";
    }

    document.querySelector(".score h3").innerHTML = "<h3>" + winner + " is the WINNER!</h3>"; 
    document.querySelector(".score").style.visibility = "visible";  
}

function updateDice(number){
    var name = "./images/dice" + Math.floor(number) + ".png";
    return name;
}

