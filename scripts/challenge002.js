
export default class challenge002{

    constructor(){
        this.code = `
        <link rel="stylesheet" href="/styles/challenge001.css">
        <link rel="stylesheet" href="/styles/challenge002.css">
            <div class="tip"> <h5 >Ainda não me convenceste que és ${localStorage.getItem("aniversariante")}...</h5></div>
            <form class="form">
                <div>
                <h3>Informe os dados </h3></div>

                <p> <label>Sua data de Nascimento</label>
                <input type="date" id="bDay" value = "2020-01-20"></p>

                <p> <label>Nome da sua antiga Crush</label>
                <input type="text" id="crush"></p>

                <p> <label>Nome da sua actual namorada</label>
                    <input type="text" id="girlfriend"></p>

                <p><input type="button" value="Prosseguir" id="submeter"></p>
            </form>
        `;
        document.getElementById("intencao").innerHTML = `Pagina feita Especialmente para ${localStorage.getItem("aniversariante")}`;
   
        this.passed = false;
        this.bDay = "2001-01-18";
        this.crush = ["Sara", "Jessica", "Cacilda"];
        this.girlfriend = "Julia";
    }
    
    
    btnClicked(){//Quando clicar em submeter
        let btn = document.getElementById("submeter");
        btn.addEventListener("click",
            ()=>{
                
                this.passed = this.isCorrect()
                if(this.passed){
                    localStorage.setItem("challenge002", "completed");

                }else{
                    this.wrongAnswer();
                }
            }
         );
         
    }
    //Dados informados do formulario
    getUserInputDate(){
        let d = document.getElementById("bDay");
        return d.value+"";
    }
    getUserInputCrush(){
        let d = document.getElementById("crush");
        return d.value+"";
    }
    getUserInputGirlfriend(){
        let d = document.getElementById("girlfriend");
        return d.value+"";
    }

    //Dados do Objecto
    getBDay(){
        return this.bDay;
    }
    getCrush(){
        return this.crush;
    }
    getGirfriend(){
        return this.girlfriend;
    }

    //Verificacao de dados
    isBDayCorrect(bDay){
        return this.getBDay()==bDay;
    }
    isGirlFriendCorrect(girlName){
        return this.getGirfriend()==girlName;
    }
    isCrushCorrect(crushName){
        let names = this.getCrush()
        return names.includes(crushName);
    }
   
    isCorrect(){
        //BdayCorrect
        let answer1 = this.isBDayCorrect(this.getUserInputDate());
        //GirlFriendCorrect
        let answer2 = this.isGirlFriendCorrect(this.getUserInputGirlfriend());
        //CrushCorrect
        let answer3 = this.isCrushCorrect(this.getUserInputCrush());

        if(answer1 && answer2 && answer3){
            return true;
        }
        return false;

    }
    wrongAnswer(){
        let tip = document.getElementsByTagName("h5")[0];
        
        tip.innerHTML = "<h5 class='text-danger'>Algo não está certo ai...</h5>";
        
    }

}