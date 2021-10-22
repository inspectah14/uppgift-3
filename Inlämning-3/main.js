let body = document.querySelector("body");
let quizContainer = document.querySelector("#quiz");
let endGameContainer = document.querySelector("#end-game");

let darkButton = document.querySelector("#dark-button");
darkButton.addEventListener("click", () => {
    body.style.background = "midnightblue";
    body.style.color = "seashell";
    quizContainer.style.border = "2px solid seashell";
})

let lightButton = document.querySelector("#light-button");
lightButton.addEventListener("click", () => {
    body.style.background = "linen";
    body.style.color = "black";
    quizContainer.style.border = "2px solid black";
})


const answers = [
    {
        name: "quest-9",
        correct: "qc9"
    }
];

let userAnswers = [];

let qNineAnswers = document.querySelectorAll("[name='quest-9']");

const disable = () => {
    checkAnswersButton.disabled = true;
}

let checkAnswersButton = document.querySelector("#checkAnswers-button");

checkAnswersButton.addEventListener("click", () => {

    qNineAnswers.forEach((btn) => {
        if(btn.checked === true) {
            userAnswers?.push(btn.value);
            console.log(userAnswers);
        }
    })
    disable(); //förhindrar användaren att submitta fler svar och därmed addera till arrayen.
})


let resetButton = document.querySelector("#reset-button")
endGameContainer.appendChild(resetButton);
resetButton.addEventListener("click", () => {
    location.reload();
});