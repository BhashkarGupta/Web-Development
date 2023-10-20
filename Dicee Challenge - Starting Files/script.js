function rollTheDice(){
    var dice1 = Math.floor((Math.random() * 6) + 1);
    var dice2 = Math.floor((Math.random() * 6) + 1);
    document.querySelector(".dice1 > img").setAttribute("src", updateDice(dice1));
    document.querySelector(".dice2 > img").setAttribute("src", updateDice(dice2));

    if (dice1 < dice2){
        document.querySelector(".score h3").innerHTML = "<h3>Player 2 is the WINNER!</h3>"; 
    }
    else if (dice1 > dice2){
        document.querySelector(".score h3").innerHTML = "<h3>Player 1 is the WINNER!</h3>"; 
    }
    else{
        document.querySelector(".score h3").innerHTML = "<h3>It's a Draw!!!</h3>"; 
    }

    document.querySelector(".score").style.visibility = "visible";  
}

function updateDice(number){
    var name = "./images/dice" + number + ".png";
    return name;
}

