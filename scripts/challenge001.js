//O primeiro desafio é informar o nome e o teleefone


export default class challenge001{

    constructor(){
        this.code = `
        <link rel="stylesheet" href="/styles/challenge001.css">
            <div class="tip"> <h5 >Digite o seu primeiro nome angelical(Lembrar de vovo kkkk)</h5></div>
            <form class="form" target = "#" method = get>
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
        document.getElementById("submeter").addEventListener("click",
            ()=>{
                this.passed = this.isCorrect()
                console.log(this.passed);
            }
         );
         
    }
    getNames(){
        return this.names;
    }
    isCorrect(){
        console.log(this.getNames());
        let correct=false;
        let name = document.getElementById("user");
        let arr = this.names;
       console.log(arr);
       for (let value of arr) {
            if(value==name.value){
                correct = true;
                break;
            }
       }
       return correct;
    }
}






