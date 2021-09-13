
export const welcomeTrivia = () =>{
    
    let select = document.createElement("div");
    select.innerHTML="";
    const startTemplate=`
    <div id="startContainer">
        <form>
            <h1>Trivia</h1>
            <h3>Pon a prueba tus conocimientos</h3>
            <p>Ingresa tu nombre</p>
            <input id="inputName" type="text" required>
            <img id="btnStart" href="#/questions" src="/img/start (2).png" alt="">
        </form>  
    </div>
    `;
    
    select.innerHTML=startTemplate;
    const buttonStart= select.querySelector("#btnStart");
    buttonStart.addEventListener("click", ()=>{
        window.location.hash= '#/questions';
    });

    return select;
}
