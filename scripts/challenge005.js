export default class challenge005{

    constructor(){
        this.code = `
        <link rel="stylesheet" href="/styles/challenge001.css">
        <link rel="stylesheet" href="/styles/challenge002.css">
            <div class="tip"> <h5 >Okay "${localStorage.getItem("aniversariante")}"
            Esteja preparado para o husle...</h5></div>
            
            <form class="form">
               <div>
                    <h3><a href="/desafio-final.rar" class="btn btn-primary btn-lg enabled" role="button" aria-disabled="true">Baixe o desafio Aqui</a></h3>
                </div>
                <p> 
                <input type="text" id="msg" placeholder="Mensagem descodificada"
                    style="width:200px; borde-radius:10px;"
                ></p>
                <p><input type="button" value="Prosseguir" id="submeter"></p>
            </form>
        `;
        document.getElementById("intencao").innerHTML = `Pagina feita Especialmente para ${localStorage.getItem("aniversariante")}`;
   
        this.passed = false;
        this.answer = "conseguiste meu puto kkkk";
    }

    btnClicked(){//Quando clicar em submeter
        let btn = document.getElementById("submeter");
        btn.addEventListener("click",
            ()=>{
                
                this.passed = this.isCorrect()
                if(this.passed){
                    localStorage.setItem("challenge005", "completed");

                }else{
                    this.wrongAnswer();
                }
            }
         );
         
    }

    isCorrect(){
        let uAnswer = this.getUserInputMsg().toLowerCase();
        
        if(uAnswer==this.getAnswer().toLowerCase()){
            return true;
        }
        return false;

    }
    getAnswer(){
        return this.answer;
    }
    

    wrongAnswer(){
        let tip = document.getElementsByTagName("h5")[0];
        
        tip.innerHTML = "<h5 class='text-danger'>Adivinhar nao vai te levar a lugar algum...</h5>";
        
    }

    getUserInputMsg(){
        let d = document.getElementById("msg");
        return d.value+"";
    }
}