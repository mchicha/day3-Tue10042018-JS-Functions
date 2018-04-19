/*
    INDIVIDUAL EXERCISE 1
    Write a function called calcAge in such a way that when the code below executes, age is 28.
*/
var age = calcAge(2017, 1989);

function calcAge (recentDate, distantDate) {
    return (recentDate-distantDate);
}
console.log(age);

/*
    INDIVIDUAL EXERCISE 2
    Change the function above so that it:
    calculates the 2 possible ages based on the years provided.
    For example a person born in 2013 may be either 3 or 4 years old at the moment!
    outputs the result to the screen like so: "You are either NN or NN"
    
*/
var age = calcAge(2018, 1989);

function calcAge (recentDate, distantDate) {
    return (recentDate-distantDate);
}
console.log("You are either " + (age-1) + " old or " + age + " old");

/*
    bonus: instead of passing in the current year as an argument, find a way to get it automatically with JavaScript.
*/
var age = calcAge(1969);

function calcAge (distantDate) {
    var recentDate =  new Date();
    var YearRecentDate = recentDate.getFullYear();
    return (YearRecentDate-distantDate);
}
console.log("You are either " + (age-1) + " old or " + age + " old");

/*
    INDIVIDUAL EXERCISE 3
    Write a JavaScript function called isPrime that accepts a number as a parameter
    and checks if the number is prime or not.
    Return true if it is prime or false if it is not prime. Don't Google this one ;)

    Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors
    other than 1 and itself (for example, 3 is prime as the number 2 does not divide into it,
    4 is not prime as 2 does divide into it, similarly 9 is not prime as 3 divides into it).
    To make sure you understand, is 13 prime?
    
*/
var isNumberPrime = isPrime(13);

function isPrime (number) {
    var isItPrime = false;
    for (var i=1; i <= number; i++)
    {
        if (((number%i) == 0) && (i != 1))
        {
            break;
        } 
    }
    if (i == number)
    {
        isItPrime = true;
    }
    return isItPrime;
}
console.log(isNumberPrime);

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
    for (var i=0; i < arr.length; i++)
    {
        sum+=arr[i];
    }
    average = (sum/arr.length);
    return average;
}
console.log(averageNUmber);

/*
INDIVIDUAL EXERCISE 5
Write a JavaScript function that accepts two parameters: one being an array of integers,
and the other being a number. 
The function should return true or false depending on whether the number exists in the array.
*/
var array = [1, 2, 5, 8, 10, 14, 21, 29, 37, 42, 59, 64, 70];
var number = 14;
var isNumberExist = isExist(array, number);

function isExist (arr, num) {
    var isNumExist = false;
    
    for (var i=0; i < arr.length; i++)
    {
        if (arr[i] == num)
        {
            isNumExist = true;
            break;
        }
    }
    
    return isNumExist;
}
console.log(isNumberExist);