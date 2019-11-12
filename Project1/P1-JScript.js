//Q1. Write a function to check if an array contains a particular number.
console.log("Answer Q1 ");
let params1 = [3,4,5,6,7,8], params2 = [1, 1, 2, 1, 1], params3= [5, 5, 5, 6], params4 = [];
let paramObject = {params1,params2,params3,params4};

let check = function(val , arr){
    return arr.includes(val)
}

for (var arr in paramObject) {
    let val = Math.floor(Math.random() * 8)+1; 
    console.log(`check(${paramObject[arr]}, ${val})➞ ` +check(val,paramObject[arr]));
}

//Q2. Write a function that takes two integers (hours, minutes) and converts them to seconds.
let convertToSeconds = function (h , m) {
    let hours =  h*60*60  ;
    let minutes = m*60;
    return hours + minutes;
}

console.log(`convertToSeconds(1, 3) ➞ ` + convertToSeconds(1, 3));
console.log(`convertToSeconds(2, 0) ➞ ` + convertToSeconds(2, 0));
console.log(`convertToSeconds(0, 0) ➞ ` + convertToSeconds(0, 0));

//Q3. Use the following data to solve the problems below.

var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}
//access the value of the capacityInGallons key
console.log(aquarium.capacityInGallons);

// /add 2 rocks to the numberOfRocks in the aquarium
aquarium.numberOfRocks +=2;
console.log(aquarium.numberOfRocks);

//access the clown fish and print the object.
console.log(aquarium.fish.find(o=> o.type==='clown'));

//access the size of the puffer fish.
console.log(aquarium.fish.find(o=> o.type==='puffer').size);

//your goldfish grew! Access the size key of goldfish and reassign it to '4 inches'.
let reassign = aquarium.fish.find(o=> o.type==='goldfish').size= '4 inches';

//you bought a new fish! Make a new object for a '5 inch' long, blue starfish and add it to the fish array.
aquarium.fish.push({"type":"Blue Starfish","size":'5 inch',"color":"blue"})
console.log(aquarium.fish);

// **Bonus Questions:

//1. Write a function that takes in a parameter called num, and returns a random number between 0 and num. Look up documentation for Math.Random().
var getRandomNumber = function(num) {
    randomNum =Math.floor(Math.random() * num); 
    return randomNum;
}
console.log( getRandomNumber(6) );
console.log(getRandomNumber(10)) ;

//2. A leap year 

let isLeap=function (year) {
         return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(isLeap(2020));
console.log(isLeap(1800));
console.log(isLeap(2000));
console.log(isLeap(2019));
console.log(isLeap(2016));