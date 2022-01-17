export default class challenge004{

    constructor(){
        this.code = `
        <link rel="stylesheet" href="/styles/challenge001.css">
        <link rel="stylesheet" href="/styles/challenge002.css">
            <div class="tip"> <h5 >Okay "${localStorage.getItem("aniversariante")}"
            Vamos fazer um joguinho mais intenso agora...</h5></div>
            
            <form class="form" target = "#" method = get>
                <p style="color: white; padding: 0px;">${localStorage.getItem("hintNumber")} - Ligue e participe kkkk</p>
                <div>
                    <h3><label>Coloque a mensagem de acordo com as dicas</label></h3>
                </div>
                <p> 
                <input type="text" id="msg" placeholder="Mensagem descodificada"
                    style="width:200px; borde-radius:10px;"
                ></p>
                <p><input type="button" value="Prosseguir" id="submeter"></p>
            </form>
        `;
        this.passed = false;
        this.answer = "21st&Wednesday&2022";
    }

    btnClicked(){//Quando clicar em submeter
        let btn = document.getElementById("submeter");
        btn.addEventListener("click",
            ()=>{
                
                this.passed = this.isCorrect()
                if(this.passed){
                    localStorage.setItem("challenge004", "completed");

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
        
        tip.innerHTML = "<h5 class='text-danger'>Ja tentou ligar para alguem?</h5>";
        
    }

    getUserInputMsg(){
        let d = document.getElementById("msg");
        return d.value+"";
    }
}