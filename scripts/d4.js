//Exercise 1
//Exercise 1
let age = 18
if(age >= 18){
console.log('You are old enough to drive.')
}
else{
console.log('You are not old enough to drive.')
}
//no1... couldn't use prompt in the online compilet but the results here..

let myAge = 30
let yourAge = 30
if (myAge>yourAge){
    console.log(`You are ${myAge-yourAge} years older than me.`)
}
else {
    console.log(`You are ${yourAge-myAge} years older than me.`)
}
//no2... compared the ages and printed the statements according to them; could have added another else incase of same age but...no

let a=4
let b=3
if(a>b){
    console.log(`a is greater than b`)
}
else{
    console.log(`b is greater than a`)
}
let c = (a>b)
c
? console.log('a is greater than b')
: console.log('b is greater than a')
//no3... compared two variables using if..else and ternary operators

let n = 7
if (n%2==0){
    console.log('It is an even number')
}
else{
    console.log('It is not an even number')
}
//no4... checked if a number is even or not.

//Exercise 2

let score = 80
if(score>=80&&score<=100){
    console.log('A')
}
else if (score>=70&&score<=89){
    console.log('B')
}
else if (score>=60&&score<=69){
    console.log('C')
}
else if (score>=50&&score<=59){
    console.log('D')
}
else if (score>=0&&score<=59){
    console,log('F')
}
//no1.. compared the result and grades were given accordingly

let season = "January"
if (season=="September"||season=="October"||season=="November"){
    console.log("The season is Autumn")
}
else if (season=='December'||season=='January'||season=='February'){
    console.log('The season is Winter')
}
else if (season=='March'||season=='April'||season=='May'){
    console.log('The season is Spring')
}
else if (season=='June'||season=='July'||season=='August'){
    console.log('The season is Summer')
}
//no2.. taken the month as an input and compared them to their respective season

let day = 'Tuesday'
if (day=='Saturday'||day=="Sunday"){
    console.log('It is a weekend')
}
else {
    console.log('It is a weekday')
}
//no3.. checked the day whether it is a weekday or a weekend

//Exercise 3


let month='feBruary'
let mon= month.toUpperCase()
if (mon=='JANUARY'||mon=='MARCH'||mon=='MAY'||mon=='JULY'||mon=='AUGUST'||mon=='OCTOBER'||mon=='December'){
    console.log('It has 31 days.')
}
else if (mon=='FEBRUARY'){
    console.log('It has 28 days.')
}
else if (mon=='APRIL'||mon=='JUNE'||mon=='SEPTEMBER'||mon=='NOVEMBER'){
    console.log('It has 30 days.')
}
//no1. no of days according to the month given












