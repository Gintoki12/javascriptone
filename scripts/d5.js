
// Exercise 1

const arr = []
const arr1 = ['Japan', 'China', 'Mongolia', 'Russia', 'Argentina']
console.log(arr1.length)
console.log(arr1[0],arr1[2],arr1[4])
const mixedDataTypes = ["Japan",19,true,'late',25.8,false]
console.log(mixedDataTypes.length)
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0],itCompanies[3],itCompanies[6])
console.log(`${itCompanies[0]},${itCompanies[1]},${itCompanies[2]},${itCompanies[3]},${itCompanies[4]},${itCompanies[5]},${itCompanies[6]} are big IT companies.`)
let compare = itCompanies.includes('Apple')
compare
? console.log('It exists in the array.')
: console.log("It doesn't exist in the array.")


