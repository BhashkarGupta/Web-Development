function songLyrics(start) {
    var endLine = start;
    while (start > 1) {
        console.log(start + " bottles of beer on the wall, " + start + " bottles of beer.");
        console.log("Take one down and pass it around, " + (start - 1) + " bottles of beer on the wall.");
        start--;
        console.log("");
    }

    console.log("1 bottle of beer on the wall, 1 bottle of beer.");
    console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    console.log("");
    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, " + endLine + " bottles of beer on the wall.");
}

songLyrics(99);