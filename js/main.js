window.addEventListener("load",init);

function init(){
  console.log("ready");

  let div = document.createElement("div");

  div.setAttribute("class", "message");

  div.innerText = "press start button";
  document.body.appendChild(div);

  let button = document.createElement("button");

  button.type = "button";
  button.innerText = "Start Game";
  document.body.appendChild(button);

  let div1 = document.createElement("div");
  div1.classList.add("game");

  document.body.appendChild(div1);
}