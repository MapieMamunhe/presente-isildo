/*let btn = document.querySelector("button");
btn.addEventListener("click", changeColor);

function changeColor(){
    document.querySelector("div").style.backgroundColor = "#449300";
}*/
import challenge001, {btnClick} from "./challenge001.js";
function comecar(){
    

    let u = new challenge001();


    let challenge = document.querySelector(".content div");
    challenge.innerHTML = u.code;
    btnClick();
    
}
let btn = document.querySelector("button");
btn.addEventListener("click", comecar);