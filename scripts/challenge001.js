//O primeiro desafio é informar o nome e o teleefone


export default class challenge001{

    constructor(){
        this.code = `
            <form target = "#" method = get>
                <div>
                <h3>Informe os dados </h3></div>
                <p> <label>Nome</label>
                <input type="text" name="nome" id="user"></p>

                <p> <label>Telefone</label>
                <input type="tel" id="cel"></p>

                <p><input type="button" value="Prosseguir" id="submeter"></p>
            </form>
            <link rel="stylesheet" href="/styles/challenge001.css">
    
    
        `;
       
    }
}


export function btnClick(){
    let form = document.getElementById("submeter").addEventListener("click",
     getData);
}
function eventHandler(tipo, selector, callback){
    document.addEventListener(tipo, e => {
        if(e.target.matches(selector)){
            console.log(e.target.innerText);
            conteudo(e.target.innerText);//A funcao que vai correr
        }
    });
}
function answers(){
    return {
        names:["Ezequiel", "Isildo", "Izildo", "Ezequias"]
    }
}
function getData(){
    let name = document.getElementById("user");
    let arr = answers().names;
   console.log(arr.length);
   for (let value of arr) {
        if(value==name.value){
            setInterval(function correct(){
                console.log(`${value} acertou`)
            }, 2000);
            break;
        }else{
            console.log("Ainda nao achei");
        }
   }
}

