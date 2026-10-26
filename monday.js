// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let box = document.querySelector(".main");

// btn.addEventListener("click", prop());

// function prop() {
//   box.style.backgroundColor = "yellow";
// }

// inp.addEventListener("keypress", (e) => {
// //   console.log("=========KEY=========");
// //   console.log(e.key);

// //   console.log("========KEY CODE========");
// //   console.log(e.code);
// });

// inp.addEventListener("keypress", (e) => {
//    console.log(e)
//   if (e.code == "KeyH") {
//     box.style.backgroundColor = "yellow";
//   }
// });

// btn.addEventListener("click",(e)=>{
//     e.preventDefault()
//     console.log(inp.value)
// })

// inp.addEventListener("change",()=>{
//     console.log(inp.value)
// })

let inp = document.querySelector("input");
let p = document.querySelector("p");

inp.addEventListener("input", () => {
  p.textContent = inp.value;
});
