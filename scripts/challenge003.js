/**
 * <div class="carousel-item">
  <img src="..." alt="...">
  <div class="carousel-caption d-none d-md-block">
    <h5>...</h5>
    <p>...</p>
  </div>
</div>
 */
export default class challenge003{

    constructor(){
        this.code = `
        <link rel="stylesheet" href="/styles/challenge003.css">
        <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="2000">
                <img src="/img/mia-khalifa-3.png" class="d-block w-100" alt="...">
            </div>

            <div class="carousel-item" data-bs-interval="2000">
                <img src="/img/mia-khalifa.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="/img/mia-khalifa-2.jpg" class="d-block w-100" alt="...">
            </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        </div>
        
            <div class="tip"> <h5 >${localStorage.getItem("aniversariante")} saberia..</h5></div>
            <form class="form" target = "#" method = get>
                <div>
                <h3>Escreva o nome correcto</h3></div>
                <p> <label>Nome</label>
                <input type="text" id="iName"></p>
                <p><input type="button" value="Prosseguir" id="submeter"></p>
            </form>
        `;
        this.passed = false;
        this.phases = [false, false, false];//Correspondente as fases 1-3 desse desafio
        this.phasesAnswer = ["Late Wizz", "nivel", "cubo"]; 
    }
    getFase2Code(){
        this.code = `
        
        
        `;
    }
    btnClicked(){//Quando clicar em submeter
        let btn = document.getElementById("submeter");
        btn.addEventListener("click",
            ()=>{
                
                if(this.phaseOnePassed()){
                    this.passed = true;
                    localStorage.setItem("challenge003", "completed");
                }else{
                    this.wrongAnswer();
                }

               /*  this.passed = this.isCorrect()
                if(this.passed){
                    localStorage.setItem("challenge002", "completed");

                }else{
                    this.wrongAnswer();
                } */
            }
         );
         
    }
    phaseOnePassed(){
        let answer = this.getAnswers()[0].toLowerCase();
        let inp = this.getUserInputName().toLowerCase();
        if(answer===(inp)){
            this.phases[0] = true;
            return true;
        }
        return false;
    }
    phaseTwoPassed(){
       /*  let answer = this.getAnswers()[0].toLowerCase();
        let inp = this.getUserInputName().toLowerCase();
        if(answer===(inp)){
            this.phases[0] = true;
            return true;
        }
        return false; */
    }
    loadPhaseTwo(){
        let area = document.getElementById("carouselExampleInterval");
        area.innerHTML = `
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="2000">
                    <img src="/img/challenge-002/dgd-01.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item" data-bs-interval="2000">
                    <img src="/img/challenge-002/dgd-02.jpg" class="d-block w-100" alt="...">
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
            </button>
        `;
    }
    //Pega dados do formulario
    getUserInputName(){
        let d = document.getElementById("iName");
        return d.value+"";
    }
    getAnswers(){
        return this.phasesAnswer;
    }
    //validacao
    wrongAnswer(){
        let tip = document.getElementsByTagName("h5")[0];
        
        tip.innerHTML = "<h5 class='text-danger'>Quem sabe se escreve com dobro...</h5>";
        
    }

}