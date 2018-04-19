/*
    INDIVIDUAL EXERCISE 4
    Write a JavaScript function that accepts an array of integers as a parameter
    and returns the average of all its items.
*/
var array = [1, 2, 5, 8, 10, 14, 21, 29, 37, 42, 59, 64, 70];

var averageNUmber = computeAverage(array);

function computeAverage (arr) {
    var average = 0;
    var sum = 0;
	debugger;
    for (var i=0; i < arr.length; i++)
    {
        sum+=arr[i];
    }
    average = (sum/arr.length);
    return average;
}
console.log(averageNUmber);