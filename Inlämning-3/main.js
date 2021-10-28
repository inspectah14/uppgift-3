let body = document.querySelector("body");
let quizContainer = document.querySelector("#quiz");
let endGameContainer = document.querySelector("#end-game");
let resetContainer = document.querySelector("#reset-container");

let darkButton = document.querySelector("#dark-button");
darkButton.addEventListener("click", () => {
    body.style.background = "midnightblue";
    body.style.color = "seashell";
    quizContainer.style.border = "5px solid seashell";
})

let lightButton = document.querySelector("#light-button");
lightButton.addEventListener("click", () => {
    body.style.background = "linen";
    body.style.color = "black";
    quizContainer.style.border = "5px solid black";
})

let userAnswers = [];

const answerOptions = [
    document.querySelectorAll("[name='quest-1']"),
    document.querySelectorAll("[name='quest-2']"),
    document.querySelectorAll("[name='quest-3']"),
    document.querySelectorAll("[name='quest-4']"),
    document.querySelectorAll("[name='quest-5']"),
    document.querySelectorAll("[name='quest-6']"),
    document.querySelectorAll("[name='quest-7']"),
    document.querySelectorAll("[name='quest-8']"),
    document.querySelectorAll("[name='quest-9']"),
    document.querySelectorAll("[name='quest-10']")
];

let qTenAnswer = document.querySelectorAll("[name='quest-10']");

const disable = () => {
    checkAnswersButton.disabled = true;
}

const checkAnswers = (btn) => {
    if(btn.checked === true) {
        userAnswers.push(btn.value);
    }
}

let checkAnswersButton = document.querySelector("#checkAnswers-button");

checkAnswersButton.addEventListener("click", () => {
    answerOptions.forEach((answer) => answer.forEach(checkAnswers));
    qTenAnswer.forEach((btn) => {
        if(btn.checked === true && btn.value === "0") {
            userAnswers.pop();
        }
    })
    let numberedAnswers = [0];
    if(userAnswers.length) {
        numberedAnswers = userAnswers.map(Number);
    };
    let reducer = (previousValue, currentValue) => previousValue + currentValue;
    let results = numberedAnswers.reduce(reducer);
    let resultsHeading = document.createElement("h4");
    if(results >= 7.5) {
        resultsHeading.style.color = "springgreen";
        resultsHeading.style.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
    } else if(results >= 5) {
        resultsHeading.style.color = "orange";
    };
    resultsHeading.innerText = `Your final score: ${results} / 10`;
    endGameContainer.appendChild(resultsHeading);
    disable();
})

let resetButton = document.querySelector("#reset-button")
resetContainer.appendChild(resetButton);
resetButton.addEventListener("click", () => {
    location.reload();
});