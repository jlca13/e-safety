let quizData = [
    {
        question: "What is Volcano?",
        options: ["a vent, hill or mountain from which molten or hot rocks with gaseous material have been ejected.",
         " is a rivers of incandescent of molten rock or lava moving downslope or away from an eruption vent.",
         "is a weak to violent shaking of the ground produced by the sudden movement of rock materials below the earth’s surface.",
         "Deformation on the ground that marks, the intersection of the fault with the earth’s surface."],
        correct: "a vent, hill or mountain from which molten or hot rocks with gaseous material have been ejected.",
    },

    {
        question: "A river of incandescent of molten rock or lava moving downslope or away from an eruption vent.",
        options: ["Lava flows",
        "Lahar",
        "Volcanic gases", 
        "Volcanic tsunami"],
        correct: "Lava flows.",
    },

    {
        question: "What is Volcanic gases?",
        options: ["form a dissolved component of magma that is released to the atmosphere in large quantities during eruptions.",
        "occurs in caldera lakes when water is displaced by deformation of the lake floor.",
        "composed of low silica magma have low viscosities and tend to flow at high speeds.", 
        "It is anything that can burn and contains the chemical potential energy released during combustion."],
        correct: "form a dissolved component of magma that is released to the atmosphere in large quantities during eruptions.",
    },

    {
        question: "Sometimes called volcanic mudflows or debris flows, are slurries of volcanic sediment, debris and water that cascade down a volcano’s slopes through rivers and channels.",
        options: ["Lahar",
        "Lava flows",
        "Volcanic gases", 
        "Volcanic tsunami"],
        correct: "Lahar",
    },

    {
        question: "It occurs in caldera lakes when water is displaced by deformation of the lake floor caused by rising magma or the entry of landslides into the lake.",
        options: ["Volcanic tsunami",
        "Volcanic gases",
        "Lahar", 
        "Lava flows"],
        correct: "Volcanic tsunami",
    },

    {
        question: "How many alert levels are there in a volcanic eruption?",
        options: ["5",
        "2",
        "4", 
        "3"],
        correct: "5",
    },

    {
        question: "Which of these is not a Volcanic hazard?",
        options: ["Liquefaction",
        "Lahar",
        "Lava flows", 
        "Volcanic gases"],
        correct: "Liquefaction",
    },

    {
        question: "Which of these is done before the volcanic eruption?",
        options: ["Always monitor the volcano updates and watch out for advisories and warnings.",
        "When notified, immediately evacuate to safer grounds.",
        "Scrape the accumulated ash in roofs to prevent collapse.", 
        "Shake loose ash from plants before watering."],
        correct: "Always monitor the volcano updates and watch out for advisories and warnings.",
    },

    {
        question: "Which of these is done during the volcanic eruption?",
        options: ["Cover your mouth with wet cloth and wear protective goggles.",
        "Wear masks when cleaning.",
        "Drying up of vegetation, springs and wells around the volcano.", 
        "Shake loose ash from plants before watering."],
        correct: "Cover your mouth with wet cloth and wear protective goggles.",
    },

    {
        question: "Which of these is done after the volcanic eruption?",
        options: ["Leave the evacuation area only when authorities say it is safe.",
        "Know the location of the evacuation site and the fastest and safest way to go there.",
        "Prepare your family's kit containing items needed for survival.", 
        "Keep your pets in their shelter or inside to avoid them from inhaling ash."],
        correct: "Leave the evacuation area only when authorities say it is safe.",
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