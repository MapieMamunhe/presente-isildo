/*let btn = document.querySelector("button");
btn.addEventListener("click", changeColor);

function changeColor(){
    document.querySelector("div").style.backgroundColor = "#449300";

    <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>


}*/
import challenge001 from "./challenge001.js";
const CHALLENGES = {
    "challenge001":"uncomplete",
    "challenge002":"uncomplete",
    "challenge003":"uncomplete",
    "challenge004":"uncomplete",
    "challenge005":"uncomplete"
};//DESAFIOS
//Por onde realmente comeca TODO
let btn = document.querySelector("button");
btn.addEventListener("click", spinner);

async function comecar(){
    setGameVariables();
    console.log();
    switch(getNextUncompleteChallenge()){
        case "challenge001":
            getChallange001();
            break;
            case "challenge002":
            break;
            case "challenge003":
            break;
            case "challenge004":
            break;
            case "challenge005":
            break;
            default:
                break;
    }
    
}


function spinner(){
    //Essa funcao e para fazer o utilizador esperar um pouco enquanto 
    //O html le no
   /* let spinner = document.querySelector(".content div");
        spinner.innerHTML = `<div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
      `;
     setTimeout(comecar, 700); */
    comecar();
}
async function setGameVariables(){
    for (const value in CHALLENGES) {
        if(localStorage.getItem(value)===null){
         localStorage.setItem(value, CHALLENGES[value]);
        }else{
            console.log(localStorage.getItem(value))
        }
    }
}
function getNextUncompleteChallenge(){
    for (const value in CHALLENGES) {
        if(localStorage.getItem(value)==CHALLENGES[value]){
         return value;
        }
    }
    return -1;
}

function getChallange001(){
    let u = new challenge001();
    let challenge = document.querySelector(".content div");
    challenge.innerHTML = u.code;
    //u.wronAnswer();
    u.btnClicked();
    //spinner();

}