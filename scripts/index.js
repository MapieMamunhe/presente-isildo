/*let btn = document.querySelector("button");
btn.addEventListener("click", changeColor);

function changeColor(){
    document.querySelector("div").style.backgroundColor = "#449300";

    <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>


}*/
import challenge001 from "./challenge001.js";
async function comecar(){
   
    let u = new challenge001();
    let challenge = document.querySelector(".content div");
    challenge.innerHTML = u.code;
    u.btnClicked();


   
   
    
}
let btn = document.querySelector("button");
btn.addEventListener("click", spinner);

function spinner(){
    //Essa funcao e para fazer o utilizador esperar um pouco enquanto 
    //O html le no
   /*let spinner = document.querySelector(".content div");
        spinner.innerHTML = `<div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      `;
     setTimeout(comecar, 700);*/
     comecar();
      
}