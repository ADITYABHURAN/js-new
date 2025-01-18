//Arrays
//while copy operation it creates shallow copies with same reference points.
const myArr = [0,1,2,3,4,5]
const heroes = ["Superman", "Batman"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);

//Array Methods 
// myArr.push(3) //Adds At end 
// myArr.pop()  //removes last value 

// myArr.unshift(0)  //adds value to the start of array by shifting other values.
// myArr.shift() //no parameter needed , Removes the first value at 0 index 

// console.log(myArr.includes(6));


// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr); //by using.join we changed the type of the newArr

//slice, splice

console.log("A" , myArr);
const myn1 = myArr.slice(1,3)  //output includes values from index 1 and 2 but not 3.

console.log(myn1);
console.log("B", myArr);






