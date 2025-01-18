//Dates

// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  //Asked in Interview the Answer is "Object"

let myCreatedDate = new Date("2025-01-17")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);      //you get the time in Milli Seconds .
// console.log(myCreatedDate.getTime());  //same as above .
// console.log(Math.floor(Date.now()/1000)); //to Avoid Decimal Points 

let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getHours());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

newDate.toLocaleString('default', 
    {weekday: "long", 
     
})


