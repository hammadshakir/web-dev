// students[2] = "hammad"

// students[2]

// const students = ["abdullah","ahmed","faizan"]

// let arr1 = [10,20,30]
// let arr2 = arr1

// arr2[0]=1000

// console.log(arr2)//[1000,20,30]

// console.log(arr1)//[10,20,30]

// students.push("hammad") //add element

// students.pop() //[[remove i last]]

// let students = ["abdullah","ahmed","faizan","add","name"]

// console.log(students[0])
// console.log(students[1])
// console.log(students[2])

// for(let i = 0 ; i < students.length;i++){
//     console.log(students[i])
// }

// let arr = [
//   ["hammad", "hamza"],
//   ["abdulah", "sjayan"],
//   ["wasay", "ahmed"],
// ];


// arr[0][0]//hammad
// arr[1][1]//shayan

let arr = [1,2,3,4,5,6,7,8,9,10]
let num = 2


for (let i = 0; i < arr.length; i++) {
    if(arr[i]==num)
        arr.splice(arr[i],1)
    console.log(arr)
}