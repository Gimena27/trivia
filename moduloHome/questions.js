
export const questionsAnswers = () =>{

    let select = document.createElement("div");
    select.innerHTML="";
    let score=0;
    let name='Gimena'//llamar aqui el valor del input del nombre;
    const questionTemplate=`
    <div id="questionContainer">
    <div id="headerQuestion">
        <img id ="xBtn"src="/img/close-button (1).png" alt="xButton" href="" >
        <p id="score">${name} Puntaje ${score}</p>
    </div>  
    <div id="qContainer">
        <p id="question">¿Qué gran artista es conocido por <br>haber pintado la Capilla Sixtina?</p>
        <button class="btnQuestion" >A.	Leonardo Da Vinci</button>
        <button class="btnQuestion" >B.	Miguel Ángel</button>
        <button class="btnQuestion" >C.	Caravaggio</button>
        <button class="btnQuestion" >D.	Tiziano</button>
    </div>
    </div>`;
    select.innerHTML=questionTemplate;
    const buttonBack= select.querySelector("#xBtn");
    buttonBack.addEventListener("click", ()=>{
        window.location.hash= '';
    });

    return select;
}