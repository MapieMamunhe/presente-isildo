//O primeiro desafio é informar o nome e o teleefone


export default class challenge001{

    constructor(){
        this.code = `
        <link rel="stylesheet" href="/styles/challenge001.css">
            <div class="tip"> <h5 >Digite o seu primeiro nome angelical(Lembrar de vovo kkkk)</h5></div>
            <form class="form">
                <div>
                <h3>Informe os dados </h3></div>
                <p> <label>Nome</label>
                <input type="text" name="nome" id="user"></p>

                <p> <label>Telefone</label>
                <input type="tel" id="cel"></p>

                <p><input type="button" value="Prosseguir" id="submeter"></p>
            </form>
            
    
    
        `;
        this.names = ["Ezequiel", "Isildo", "Izildo", "Ezequias"]
        this.passed = false;
       
    }
    btnClicked(){//Quando clicar em submeter
        let btn = document.getElementById("submeter");
        btn.addEventListener("click",
            ()=>{
                this.passed = this.isCorrect()
                if(this.passed){
                    localStorage.setItem("challenge001", "completed");
                }else{
                    this.wrongAnswer();
                }
            }
         );
         
    }
    wrongAnswer(){
        let tip = document.getElementsByTagName("h5")[0];
        
        tip.innerHTML = "<h5 class='text-danger'>Filho(a)...Nome de Anjo... Digitar nome de Anjo</h5>";
        
    }
    getNames(){
        return this.names;
    }
    isCorrect(){
        let correct=false;
        let name = this.getUserNameInput();
        let arr = this.names;

       for (let value of arr) {
            if(value==name){
                correct = true;
                localStorage.setItem("aniversariante", value);
                break;
            }
       }

       return correct;
    }
    getUserNameInput(){
        let name = document.getElementById("user");
        return name.value;
    }
}







