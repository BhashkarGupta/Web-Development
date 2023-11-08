function isLeap(year) {

    var rule1 = year % 4;
    var rule2 = year % 100;
    var rule3 = year % 400;
    var leap = "Leap year."
    var notLeap = "Not leap year."

    if (rule1 === 0) {
        if (rule2 === 0) {
            if (rule3 === 0) {
                return leap;
            }
            else {
                return notLeap;
            }
        }
        else {
            return leap;
        }
    }
    else {
        return notLeap;
    }

}