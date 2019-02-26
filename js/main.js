window.addEventListener("load",init);

const myWords = ["javascript", "html", "lambda", "react", "austen", "programmer", "developer", "engineer"];

function init(){
  // console.log("ready");

  let div = document.createElement("div");

  div.setAttribute("class", "message");
  div.innerText = "Press Start Button";
  document.body.appendChild(div);

  let button = document.createElement("button");

  button.type = "button";
  button.innerText = "Start Game";
  document.body.appendChild(button);
  button.addEventListener("click", start); //if button gets clicked, it'll invoke the function
  
  let div1 = document.createElement("div");
  div1.classList.add("game");

  document.body.appendChild(div1);
}

function start(){
  this.style.display="none";
  myWords.sort(function(a,b){
    return 0.5 - Math.random();
  });
  myWords.forEach(function(item){
    let temp = item.split("");
    temp.sort(function(a,b){return 0.5-Math.random()});
    let temp1 = temp.join("");
    console.log(temp1);
    console.log(item);
  })
  console.log(myWords);

  message("Select this Word");
}

function message(output){
  document.querySelector("message").innerHTML = output;
}