function fibonacciGenerator(n) {
    //Do NOT change any of the code above 👆

    //Write your code here:
    if (n === 0) {
        return [];
    }
    else {
        var series = [0];
        if (n === 1) {
            return series;
        }
        else if (n === 2) {
            series.push(1);
            return series;
        }
        else {
            series.push(1);
            var seriesLen = 1;
            while ((n - 1) > seriesLen) {
                series.push(series[seriesLen] + series[seriesLen - 1]);
                seriesLen++;
            }
            return series;
        }
    }
}

var temp = fibonacciGenerator(0);
console.log(temp);