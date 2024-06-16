let quizData = [
    {
        question: "It is a large, powerful and violent tropical cyclone.",
        options: ["Typhoon",
         " Earthquake",
         "Tropical depressions",
         "Tropical storms"],
        correct: "Typhoon",
    },

    {
        question: "Which of these is done before the typhoon?",
        options: ["Ready your emergency kit/ grab bag to include some first aid kit, candles/flashlight, clothes, food, and radio.",
        "Evacuate from low-lying areas to higher grounds.",
        "Do not touch or approach any live wires or outlets immersed with water.", 
        "If you have evacuated, only return to your house after authorities deem it safe."],
        correct: "Ready your emergency kit/ grab bag to include some first aid kit, candles/flashlight, clothes, food, and radio.",
    },

    {
        question: "Which of these is done during the typhoon?",
        options: ["Stay inside safe and strong houses or structures or proceed to evacuation centers.",
        "If your house was damaged or destroyed, make sure that it is safe and stable before entering.",
        "Secure important documents.", 
        "Prepare a list of emergency hotline numbers, including contact details of authorities."],
        correct: "Stay inside safe and strong houses or structures or proceed to evacuation centers.",
    },

    {
        question: "Which of these is done after the typhoon?",
        options: ["Keep all power and electronic appliances off until cleared safe by a professional.",
        "Stay away from coasts and riverbanks.",
        "Cancel all travels and outdoor activities.", 
        "Store adequate food supply and clean water. Have food that do not require cooking."],
        correct: "Keep all power and electronic appliances off until cleared safe by a professional.",
    },

    {
        question: "Which of these is done before the typhoon?",
        options: ["Check the ability of your house to withstand strong winds; strengthen it if necessary.",
        "Evacuate from low-lying areas to higher grounds.",
        "If asked by authorities to evacuate, do so calmly", 
        "If your house was damaged or destroyed, make sure that it is safe and stable before entering."],
        correct: "Check the ability of your house to withstand strong winds; strengthen it if necessary.",
    },

    {
        question: "It is a low-pressure area rotating counter-clockwise and containing rising warm air that forms over warm water in the ____________?",
        options: ["Western Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean", 
        "Eastern Pacific Ocean"],
        correct: "Western Pacific Ocean",
    },

];

const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextBtn = document.querySelector(".quiz-container .next-btn");
const quizResult = document.querySelector(".quiz-result");
const exitBtn = document.querySelector(".exit-btn");

let questionNumber = 0;
let score = 0;
const MAX_QUESTIONS = 5;
let timerInterval;

const shuffleArray = array => {
    return array.slice().sort(() => Math.random() - 0.5);
};

quizData = shuffleArray(quizData);

const resetLocalStorage = () => {
    for(i = 0; i < MAX_QUESTIONS; i++) {
        localStorage.removeItem(`userAnswer_${i}`);
    }
};

resetLocalStorage();

const checkAnswer = (e) => {
    let userAnswer = e.target.textContent;
    if (userAnswer === quizData[questionNumber].correct) {
    score++;
    e.target.classList.add("correct");
    } else{
        e.target.classList.add("incorrect");
    }

    localStorage.setItem(`userAnswer_${questionNumber}`, userAnswer);

    let allOptions = document.querySelectorAll(".quiz-container .option");
    allOptions.forEach((o) => {
     o.classList.add("disabled");
});
  
};

function createQuestion() {
    clearInterval(timerInterval);

    let secondsLeft = 19;
    const timerDisplay = document.querySelector(".quiz-container .timer");
    timerDisplay.classList.remove("danger");

    timerDisplay.textContent = `Timer Left: 20 seconds`;

    timerInterval = setInterval(() => {
        timerDisplay.textContent = `Time Left: ${secondsLeft} seconds`;
        secondsLeft--;

        if (secondsLeft < 3) {
            timerDisplay.classList.add("danger");
        }

        if(secondsLeft < 0) {
            clearInterval(timerInterval);
            displayNextQuestion();
        }
    }, 1000)

    options.innerHTML = "";
    question.innerHTML = `<span class = 'question-number'>${questionNumber + 1}/${MAX_QUESTIONS}</span>${quizData[questionNumber].question}`;

    const shuffledOptions = shuffleArray(quizData[questionNumber].options);

    shuffledOptions.forEach((o) => {
        const option = document.createElement("button");
        option.classList.add("option");
        option.innerHTML = o;
        option.addEventListener("click", (e) => {
            checkAnswer(e);
        });
        options.appendChild(option);
    });
};

const retakeQuiz = () => {
    questionNumber = 0;
    score = 0;
    quizData = shuffleArray(quizData);
    resetLocalStorage();

    createQuestion();
    quizResult.style.display = "none";
    quizContainer.style.display = "block";
}



const displayQuizResult = () => {
    quizResult.style.display = "flex";
    quizContainer.style.display = "none";
    quizResult.innerHTML = "";


    const resultHeading = document.createElement("h2");
    resultHeading.innerHTML = `You scored ${score} out of ${MAX_QUESTIONS}!`;
    quizResult.appendChild(resultHeading);

    const retakeBtn = document.createElement("button");
    retakeBtn.classList.add("retake-btn");
    retakeBtn.innerHTML = 'Retake Quiz';
    retakeBtn.addEventListener("click", retakeQuiz);
    quizResult.appendChild(retakeBtn);


};

createQuestion();

const displayNextQuestion = () => {
    if (questionNumber >=  MAX_QUESTIONS - 1) {
        displayQuizResult();
        return;
    }

    questionNumber++;
    createQuestion();
};

nextBtn.addEventListener("click", displayNextQuestion);