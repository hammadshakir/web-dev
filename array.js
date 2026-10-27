// ============Array Methods=================

// let arr = [1, 2, 3, 4, 5];

// console.log(arr[0]);
// console.log(arr[1]);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]*2);
// }

// arr.forEach(function (val) {
//   console.log(val);
// });

// arr.forEach((e) => {
//   console.log(e*2);
// });

// arr.forEach((e) => console.log(e))

// let fruits = ["apple", "banana", "mango"];

// fruits.forEach((fruit,i) => {
//   console.log(fruit,i);
// });

// =====Map Method=====

// let number = [1, 2, 3, 4, 5];

// let newNumber = []

// for (let i = 0; i < number.length; i++) {
//     newNumber.push(number[i]*2)
// }

// let newNumber = number.map((e) => {
//   return e * 2;
// });

// ======filter method===========

// let marks = [20,30,40,60,100]

// let updatedMarks = marks.filter((e)=>{
//     return e > 50
// })

// =====find===========

// let marks = [20, 30, 40, 60, 100];

// let   = marks.find((e) => {
//   return e === 100;
// });

// console.log(updatedMarks)

// =====reduce===========

let wasay = [40, 33, 69, 89, 100];

let wasayPercentage = wasay.reduce((num, sum) => {
  let final = num + sum;
  return final;
});
 