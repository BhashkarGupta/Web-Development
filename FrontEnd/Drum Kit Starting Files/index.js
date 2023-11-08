function tap(audio, inst){
    var audio = new Audio("./sounds/" + audio + ".mp3");
    audio.play();
    this.document.querySelector(inst).style.boxShadow = "0 0 40px rgba(0, 230, 38, 0.64)";
    this.document.querySelector(inst + ">h2").style.fontSize = "6em";
    setTimeout(function () {
        document.querySelector(inst).style.boxShadow = "0 0 25px rgba(230, 0, 92, 0.64)";
        this.document.querySelector(inst + ">h2").style.fontSize = "5em";
    }, 400);
}


document.addEventListener("keydown", function(event){
    switch (event.key) {
        case 'a':
        case 'A':
            tap("tom-1", "#instrument1");
            break;
        case 's':
        case 'S':
            tap("tom-2", "#instrument2");
            break;
        case 'd':
        case 'D':
            tap("tom-3", "#instrument3");
            break;
        case 'f':
        case 'F':
            tap("tom-4", "#instrument4");
            break;
        case 'j':
        case 'J':
            tap("snare", "#instrument5");
            break;
        case 'k':
        case 'K':
            tap("crash", "#instrument6");
            break;
        case 'l':
        case 'L':
            tap("kick-bass", "#instrument7");
            break;

    }
});

var sound = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"];

for (var i = 0; i < document.querySelectorAll(".instrument").length; i++) {
    var drum = document.querySelectorAll(".instrument")[i];

    // Use an IIFE to capture the current value of i
    (function (index) {
        drum.addEventListener("click", function () {
            tap(sound[index], "#instrument" + (index + 1));
        });
    })(i);
}
