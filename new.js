// // function greet() {
// //   console.log("hello hammad");
// // }

// // greet();

// // for (let i = 0; i < 4; i++) {
// //   greet();
// // }

// // function sum(a,b) {
// //     return a+b
// // }

// // let ans = sum(144,13)

// // let sum = (a, b) => {
// //  return a + b;
// // };

// // let ans = sum(122,122)

// // let totalMarks = 100

// // function total(marks) {
// //     if (marks>50) {
// //         return "Pass"
// //     }
// //     return "Fail"
// // }

// // let print = (arr) => {
// //   for (let i = 0; i < arr.length; i++) {
// //     console.log( arr[i]);
// //   }
// // };

// // let nums = [1,2,3,4,5,6,7,10,8,9]


// // console.log(print(nums))


// function sum(a,b) {
//     return a+b

//     console.log(12-122)
// }


// ===============DOM==================

// let h1 = document.getElementsByTagName("h1")


// let heading1 = document.getElementsByClassName("heading")

// let head = document.getElementById("head")


// let h1 = document.querySelector("#head")

// let h1 = document.querySelectorAll(".heading")


// console.log(h1[0])
// console.log(h1[1])
// console.log(h1[2])


// // h1[0].innerHTML = "Hammad"

// // h1[0].innerText = "Hamza "


// h1[2].classList.remove("heading")

// h1[2].classList.add("newHead")


// let para = document.querySelector("p")

// // para.style.color="green"

// para.style.backgroundColor="green"


// let body = document.querySelector("body")
// body.style.backgroundColor="orange"



// ===================DOM Practice 2==================


// let para = document.querySelector("p")


// // para.classList.toggle("pStyle")


// let h1 = document.createElement("h1")

// h1.innerText="Created By JS"

// let cont = document.querySelector(".container")

// cont.append(h1)


let btn = document.querySelector("button")
let cont = document.querySelector(".container")

// btn.addEventListener("click",()=>{
//     let cont = document.querySelector(".container")
//     cont.style.backgroundColor="orange";
// })

btn.addEventListener("click",()=>{
    // console.log("hello hammad")
cont.style.backgroundColor = "red"
})


// function print() {
//  console.log("hello hammad")   
// }

// let print = ()=>{
//     console.log("hello hammad")
// }