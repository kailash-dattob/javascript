let myDate = new Date ();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);


let myCreateDate = new Date("2023-01-14")
console.log(myCreateDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp)
console.log(myCreateDate.getTime());

console.log(Math.floor(Date.now()/1000));

 let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth()+ 1 )
// console.log(newDate.getDay());

console.log(`${newDate.getDay()} is on monday and day is ${newDate.getDate()}`)

newDate.toLocaleDateString('default',{
    weekday:'long'
})

console.log(newDate)