let quizData = [
    {
        question: "What is the active principle of burning, characterized by heat and light of combustion?",
        options: ["Fire",
         "Volcano",
         "Earthquake",
         "Typhoon"],
        correct: "Fire",
    },

    {
        question: "Which of these cannot produce fire?",
        options: ["Water",
        "Heat",
        "Oxygen", 
        "Fuel"],
        correct: "Water",
    },

    {
        question: "It include anything capable of generating heat for example lightning, cigarettes, powerlines, catalytic converters, small engine sparks, matches, and sunlight hitting a magnifying glass.",
        options: ["Heat",
        "Fuel",
        "Oxygen", 
        "Fire"],
        correct: "Heat",
    },

    {
        question: "What is Fuel?",
        options: ["It is anything that can burn and contains the chemical potential energy released during combustion.",
        "Air contains about 21 percent oxygen, and most fires require at least 16 percent oxygen content to burn.",
        "form aerosols that can both cool down the earth’s atmosphere and deplete its ozone concentration for a period of time.", 
        "It is neither solid nor liquid."],
        correct: "It is anything that can burn and contains the chemical potential energy released during combustion.",
    },

    {
        question: "Which of these is not the common cause of fire?",
        options: ["Unplug or disconnect appliances when not in use",
        "Defective Electrical Equipment or Appliances",
        "Oven and Stove Left Unattended", 
        "Smoking carelessly improperly"],
        correct: "Unplug or disconnect appliances when not in use",
    },
    {
        question: "Which of these cannot be done during a fire?",
        options: ["Return to the building for your belongings",
        "Find an escape route, break your windows or any means of exit to ensure your safety.",
        "If you're inside the building, refrain from using an elevator.", 
        "Once you are out, stay out. Never attempt to get inside again"],
        correct: "Return to the building for your belongings",
    },

    {
        question: "What will you do if your clothes catch on fire?",
        options: ["Drop to the ground and roll over and over until the flames go out.",
        "Splash with a bucket of water",
        "Cover yourself with blanket", 
        "Move immediately and run outside"],
        correct: "Drop to the ground and roll over and over until the flames go out.",
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