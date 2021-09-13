import { welcomeTrivia } from "../moduloHome/start.js";
import { questionsAnswers } from "../moduloHome/questions.js";
export const router = (route) =>{
    let content = document.querySelector("#root");
    content.innerHTML = "";

    switch (route){
        case "":
            content.appendChild(welcomeTrivia());
        break;
        case "#":
        content.appendChild(welcomeTrivia());
        break;
        case '#/questions':
            content.appendChild(questionsAnswers());
        break;
        case '#/gameOver':
            content.appendChild(gameFinished());
        break;
        case '#/correctAnswer':
            content.appendChild(cAnswer());
        break;
        case '#/winner':
            content.appendChild(gameWon());
        break;

        default:
            alert('404!!!');
    }
}