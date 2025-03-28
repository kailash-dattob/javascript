const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]);

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes)

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

const allnewheroes = [...marvel_heroes, ...dc_heroes]
console.log(allnewheroes);

const anotherarray = [1,2,3,[4,5,6],[5,6,7,[2,3,4]]]
const newanotherarray = anotherarray.flat(Infinity)
console.log(newanotherarray)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:'Hitesh'}))  //Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))