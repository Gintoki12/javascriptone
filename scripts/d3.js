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

let 