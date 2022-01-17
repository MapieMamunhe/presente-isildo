/*let btn = document.querySelector("button");
btn.addEventListener("click", changeColor);

function changeColor(){
    document.querySelector("div").style.backgroundColor = "#449300";

    <div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>


}*/
import challenge001 from "./challenge001.js";
import challenge002 from "./challenge002.js";
import challenge003 from "./challenge003.js";
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
            console.log(getNextUncompleteChallenge());
            break;
            case "challenge002":
               getChallange002();
            break;
            case "challenge003":
                getChallange003();
            break;
            case "challenge004":
                alert("Novos desafios");
            break;
            case "challenge005":
                //alert("Novos desafios");
            break;
            default:
                break;
    }
    
}

function challengeCompletedMessage(challenge){
    if(!isChallangeComplete(challenge)){
        console.log(challenge);
        return;
    }
    let loadNextChallenge = document.querySelector(".content div");
        loadNextChallenge.innerHTML = `
        <div class="text-success">
            Parabens!
        </div>
        <div class="spinner-border" role="status">
            
      </div>
      `;
      setTimeout(()=>{comecar()}, 1500);//TODO spinner e etc
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
function setGameContent(code){
    let challenge = document.querySelector(".content div");
    challenge.innerHTML = code;
}

function getChallange001(){
    let u = new challenge001();
   
    setGameContent(u.code);
    //u.wronAnswer();
    u.btnClicked();
    submitEvent("challenge001");
    //spinner();
}

function submitEvent(challenge){
    document.getElementById("submeter")
    .addEventListener("click", 
    function (){
        challengeCompletedMessage(challenge);
    });
}

function getChallange002(){
    let f = new challenge002();
    setGameContent(f.code);
    f.btnClicked();
    submitEvent("challenge002");
}
function isChallangeComplete(challenge){
    if(getNextUncompleteChallenge() != challenge){
        return true;
    }
    return false;
}

function getChallange003(){
    let g = new challenge003();
    setGameContent(g.code);

    g.btnClicked();
    submitEvent("challenge003");
}