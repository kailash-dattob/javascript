const name = "hitesh"
const repoCount = 50

//console.log(name + repoCount + "Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String ('Hiteshhhc')

console.log(gameName[0]);
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())

console.log(gameName.charAt(2))
console.log(gameName.indexOf('c'))

console.log(gameName.small())

const newString = gameName.substring(0 ,4)
console.log(newString)

const anotherString = gameName.slice(-5, 4)
console.log(anotherString)

const stringOne = '    Hitesh      '
console.log(stringOne)
console.log(stringOne.trim())

const url = "https:kailash%20chouhan"
console.log(url.replace('%20', '-'))

console.log(gameName.split('-'))