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
import challenge004 from "./challenge004.js";
import challenge005 from "./challenge005.js";

const CHALLENGES = {
    "challenge001":"uncomplete",
    "challenge002":"uncomplete",
    "challenge003":"uncomplete",
    "challenge004":"uncomplete",
    "challenge005":"uncomplete"
};//DESAFIOS
//Por onde realmente comeca TODO
let btn = document.querySelector("button");
btn.addEventListener("click", comecar);

async function comecar(){
    setGameVariables();
    switch(getNextUncompleteChallenge()){
        case "challenge001":
            getChallange001();
            break;
            case "challenge002":
               getChallange002();
            break;
            case "challenge003":
                getChallange003();
            break;
            case "challenge004":
                getChallange004();
            break;
            case "challenge005":
                getChallange005();
            break;
            default:
                terminar();
                break;
    }
    
}

function challengeCompletedMessage(challenge){
    if(!isChallangeComplete(challenge)){
        console.log(challenge);
        return;
    }
    
    spinner();
    setChallengeCollors();
    if(localStorage.getItem("challenge005")!="completed"){
        setTimeout(()=>{comecar()}, 1500);//TODO spinner e etc
    }else{
        setTimeout(()=>{terminar()}, 2000);//TODO spinner e etc
    }

}

function terminar(){
    let spinner = document.querySelector(".content div");
        spinner.innerHTML = `

        <div class="text-success" style="text-align:center; padding: 10px auto;">
            <h2>Parabens! Conseguiu concluir todos Desafios</h2>
            <p>Espero que tenhas gostado dos enigmas STV</p>
            <p>Espero Que gostes do que está ai porque paguei kkkkk</p>
            <h3>
                <img src="/img/qr.png" alt="QR Code do presente">
            </h3>
        </div>
       </div>
      `;
}

function spinner(){
    //Essa funcao e para fazer o utilizador esperar um pouco enquanto 
    //O html le no
   let spinner = document.querySelector(".content div");
        spinner.innerHTML = `

        <div class="text-success">
            Parabens! Conseguiu concluir o Desafio
        </div>
        <div class="spinner-border" role="status">
            
      </div>
      `;
}
async function setGameVariables(){
    for (const value in CHALLENGES) {
        if(localStorage.getItem(value)===null){
         localStorage.setItem(value, CHALLENGES[value]);
        }else{
            console.log(localStorage.getItem(value))
        }
    }
    setChallengeCollors();
    localStorage.setItem("hintNumber", "87 38 54 676");
}
function setChallengeCollors(){
    let n = getNextUncompleteChallenge();
    let divs = document.querySelectorAll(".left div");
    if(n==-1){
        for (const iterator of divs) {
            iterator.style.backgroundColor="#22E4AC";
            iterator.style.transition="ease-in .2s";
        }
        return;
    }
    n = n.charAt(n.length-1);
    if(n > 0){
        for (let i = 0; i < n-1; i++) {
            divs[i].style.backgroundColor="#22E4AC";
            divs[i].style.transition="ease-in .2s";
        }
        n = Number(n.charAt(n.length-1));
       
        let div = divs[n-1];
        div.style.backgroundColor="#08B3E5";
        div.style.transition="ease .2s";
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
    u.btnClicked();

    submitEvent("challenge001");
    
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
function getChallange004(){
    let h = new challenge004();
    setGameContent(h.code);

    h.btnClicked();
    submitEvent("challenge004");
}
function getChallange005(){
    let f = new challenge005();
    setGameContent(f.code);

    f.btnClicked();
    submitEvent("challenge005");
}