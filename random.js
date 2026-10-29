let btn = document.querySelector("button");

function Random() {
  let p = document.querySelector("p");
  let box = document.querySelector(".box");

  let red = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);

  let finalColor = ` rgb(${red}, ${green}, ${blue})`;

  p.innerText = finalColor;
  box.style.backgroundColor = finalColor;

  return finalColor;
}



  btn.addEventListener("click", () => {
    let final = Random();
    console.log(final);
  });


