//Exercise 1
let firstName = 'Sakata'
let lastName = 'Gintoki'
let country = 'India'
let city = 'Bombay'
let isMarried = false
let year = 2022
console.log(typeof firstName, typeof lastName, typeof country, typeof city, typeof isMarried, typeof year)
// no1...checked the different data types with the help of type of


console.log(typeof('10')==10)
//no2... checked if typeof '10' equal to 10

console.log(parseInt('9.8')==10)
//no3... checked if parseInt('9.8') is equal to 10

console.log(4>3)
console.log(firstName=="Sakata")
console.log(3!=4)
//no4.i.. truthy statements

let empty=null
console.log(empty)
console.log(lastName='Happy')
console.log(4<3)
//no4.ii.. falsy statements

console.log(4>3)
console.log(4>=3)
console.log(4<3)
console.log(4<=3)
console.log(4==4)
console.log(4===4)
console.log(4!=4)
console.log(4!==4)
console.log(4!="4")
console.log(4=='4')
console.log(4==='4')
console.log('python'.length!=='jargon'.length)
//no5... some comparisons using comparison operators

console.log(4>3&&10<12)
console.log(4>3&& 10>12)
console.log(4>3||10<12)
console.log(4>3||10>12)
console.log(!(4>3))
console.log(!(4<3))
console.log(!(false))
console.log(!(4>3 &&10 <12))
console.log(!(4>3&&10>12))
console.log(!(4==='4'))
console.log("There is no 'on' in both dragon and python.")
//no6... some more comparisons using logical operators

const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth()+1)
console.log(now.getDate())
console.log(now.getDay()+1)
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())
//no7 using date objects



//Exercise 2


/*let base = prompt("Enter base:")
let height = prompt('Enter height:')
Area = 0.5*base*height
console.log(Area)*/
        //no1.. found the area of triangle using prompt to take in user value

/*let a = prompt('Enter side a:')
let b = prompt('Enter side b:')
let c = prompt('Enter side c:')
let sidea = parseInt(a)
let sideb = parseInt(b)
let sidec = parseInt(c)
let perimeter = (sidea + sideb + sidec)
console.log(perimeter)*/
        //no2.. found the perimeter using prompt .....using'+' might also concantate the values because prompt takes the value as a string

/*let length = prompt('Enter length:')
let width = prompt('Enter width:')
let area = length * width
let perimeter = 2*(parseInt(length) + parseInt(width))
console.log(area)
console.log(perimeter)*/
//no3.. found the area and perimeter using the prompt

/*let radius = prompt('Enter radius')
const pi = 3.14
let area = pi*radius*radius
console.log(area)*/
//no4.. found the  area of circle using the prompt

let y='2*x-2'
let slope = 2
let x_intercept = 'x'
let y_intercept = 2
console.log(y)
console.log(`slope is ${slope}, x_intercept is ${x_intercept}, y_intercept is ${y_intercept}`)
//no5.. used `and ${} to print out the required text and the answers (calculated the slope and the intercepts from the given questions)


let firstPoint = [2,2]
let secondPoint = [6,10]
let slopeM = (secondPoint[1]-firstPoint[1]) / (secondPoint[0]-firstPoint[0])
console.log(slopeM)
//no6.. found the slope of the given points


console.log(slopeM==slope)
//no7.. compared the slope of no5 and no6

/*let x = prompt('Enter the value of x:')
let x2 = parseInt(x)
let y2 =  (x**2) + (6*x) + 9
console.log(typeof x2)
console.log(y2)*/
//no 8.. calculated the values using arithmetic operators {Note: power is not ^ but **}

/*let hours = prompt('Enter hours:')
let rate = prompt('Enter rate per hour:')
let hours2 = parseInt(hours)
let rate2= parseInt(rate)
let totalEarning=hours2 * rate2
console.log(totalEarning)*/
//no 9..

/*let myName = prompt('enter your name:')
let myNameLength = myName.length
let lengthName = myNameLength>=7
lengthName
? console.log('Your name is longer than 7')
: console.log('Your name is shorter than 7')*/
//no 10.. compared length of a strign with a number and printed the expression according to the result

let firstName2='Asabeneh'
let lastName2='Yetayeh'
let lengthName12= firstName2.length
let lengthName13= lastName2.length
let compare=lengthName12>lengthName13
compare
? console.log(`Your name ${firstName2} is longer than your family name ${lastName2}`)
: console.log(`Your name is not longer than your first name`)
//no11..

let myAge= 250
let yourAge= 25
compare2= myAge>yourAge
compare2
? console.log(`I am ${myAge-yourAge} older than you`)
: console.log(`I am ${yourAge-myAge} older than you`)
//no12..

/*let birthYear=prompt(`Enter your birth year`)
let compare3= birthYear>=2004
compare3
? console.log(`You are ${2022-birthYear}. You are old enough to drive.`)
: console.log(`You are ${2022-birthYear}. You will be able to drive after ${2004-birthYear} years.`)*/
//no 13..

let year2=100
let liveYear=year2*24*60*60*365
console.log(liveYear)
//no14.. could run prompt on online compiler so just declared the variables

let now = new Date()
let year = now.getFullYear()
let month= now.getMonth()
let day= now.getDate()
let hour= now.getHours()
let minute= now.getMinutes()
console.log(`${year}-${month}-${day} ${hour}:${minute}`)
console.log(`${day}-${month}-${year} ${hour}:${minute}`)
console.log(`${day}/${month}/${year} ${hour}:${minute}`)
//no15.. create a human readable time format using the date time object

//Exercise 3

let now = new Date()
let year = now.getFullYear()
let month= now.getMonth()+1
let day= now.getDate()
let hour= now.getHours()
let minute= now.getMinutes()
let hour2=("0"+hour).slice(-2)
let minute2=("0"+minute).slice(-2)
console.log(`${year}-${month}-${day} ${hour2}:${minute2}`)
//no1. use slice after concantating 0 in front of hour and minute
