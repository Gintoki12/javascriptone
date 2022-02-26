let challenge = "The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another"
console.log(challenge)//number 1 backslash+' lets you insert apostrophe

console.log("Love is not patronizing and charity isn't about pity, it is aobut love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead." )//number 2 

let tenOne='10'
let tenTwo=10
tenOne2=parseInt(tenOne)
let compareOne=typeof(tenOne2)==typeof(tenTwo)
console.log(compareOne)//number 3 compared typeof '10' and 10; and made them equal using parseInt

let num = 9.8
let float = parseFloat(num)
let compareTwo = Math.round(float)==10
console.log(compareTwo)//number 4 compared parsefloat(9.8) to 10 and made them true by using math function round (it rounds up the number)

let pyt = "python"
let jar = "jargon"
console.log(pyt.match('on'), jar.match('on'))
//checked if there is 'on' in both python and jargon

let challenge2='I hope this course is not full of jargon'
console.log(challenge2.match('jargon'))
//checked if there is 'jargon' in the above sentence

let ranNum=Math.floor(Math.random()*101)
console.log(ranNum)//number 7 random number from 0 to 100;for range from 0 to whatever you want add one at the end 0-50 would be *51

let ranNum1=Math.floor(Math.random()*100)
console.log(ranNum1 + 50)
//number 8 adding 50 at the end means the random number cannot be less than 0

let ranNum2=Math.floor(Math.random()*256)
console.log(ranNum2)
//number 9 random number upto 255

//Note:Using Math.floor rounds up the number....for some reason

let challenge3='JavaScript'
let randomNum=Math.floor(Math.random()*10)
console.log(challenge3[randomNum])
// number 10 accessing the string using a random number

console.log('1\t1\t1\t1\t1\t\n2\t1\t2\t4\t8\t\n3\t1\t3\t9\t27\t\n4\t1\t4\t16\t64\t\n5\t1\t5\t25\t125\t')
//number 11 using escape sequences to print out pattern 
//backslash - escape sequence

let challenge4='You cannot end a sentece with because because because is a conjunction'
let index1=challenge4.indexOf('because')
console.log(challenge4.substr(index1, 24))
// number 12 using substr to slice out a substring (used indexof to find the initial position of first occurence of because)

//End note: Before using any of the String methods write down the variable first and the '.' and use the required method.

//3rd exercise of 2nd day

let challenge5='Love is the best thing in this world. Some found that their love and some are still looking for their love.'
console.log(challenge5.match('love'))