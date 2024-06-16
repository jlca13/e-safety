let quizData = [
    {
        question: "What is an Earthquake?",
        options: ["a weak to violent shaking of the ground produced by the sudden movement of rock materials below the earth’s surface.",
         "a rivers of incandescent of molten rock or lava moving downslope or away from an eruption vent.",
         "proportional to the energy released by an earthquake at the focus.",
         "deformation on the ground that marks, the intersection of the fault with the earth’s surface."],
        correct: "a weak to violent shaking of the ground produced by the sudden movement of rock materials below the earth’s surface.",
    },

    {
        question: "What are the two ways to measure the strength of an earthquake?",
        options: ["magnitude and intensity",
        "speed and distance",
        "magnitude and distance", 
        "intensity and speed"],
        correct: "magnitude and intensity",
    },

    {
        question: "It is proportional to the energy released by an earthquake at the focus.",
        options: ["Magnitude",
        "Intensity",
        "Earthquake", 
        "Liquefaction"],
        correct: "Magnitude",
    },

    {
        question: "This measures the strength of an earthquake as perceived and felt by people in a certain locality.",
        options: ["Intensity",
        "Magnitude",
        "Earthquake", 
        "Seismograph"],
        correct: "Intensity",
    },

    {
        question: "What is Volcanic earthquakes?",
        options: ["Earthquakes induced by rising lava or magma beneath active volcanoes",
        "It is anything that can burn and contains the chemical potential energy released during combustion.",
        "Heat/ignition sources include anything capable of generating heat", 
        "A weak to violent shaking of the ground produced by the sudden movement of rock materials below the earth’s surface."],
        correct: "Earthquakes induced by rising lava or magma beneath active volcanoes",
    },
    {
        question: "It is produced by sudden movement along faults and plate boundaries.",
        options: ["Tectonic earthquakes",
        "Volcanic earthquakes",
        "Earthquake", 
        "Magnitude"],
        correct: "Tectonic earthquakes",
    },

    {
        question: "What is the instrument that is used to record the motion of the ground during an earthquake?",
        options: ["Seismograph",
        "Thermometer",
        "Telegraph", 
        "Anemometer"],
        correct: "Seismograph",
    },

    {
        question: "Which is not a Earthquake Hazards?",
        options: ["Lahar",
        "Ground Rapture",
        "Liquefaction", 
        "Tsunami"],
        correct: "Lahar",
    },

    {
        question: "Which of these is done before the earthquake?",
        options: ["Know where fire extinguishers, first aid kits, alarms, and communication facilities are located.",
        "Stay away from glass windows, shelves, cabinets and other heavy objects.",
        "Beware of falling objects. Be alert and keep your eyes open.", 
        "Check yourself and others for injuries."],
        correct: "Know where fire extinguishers, first aid kits, alarms, and communication facilities are located.",
    },

    {
        question: "Which of these is done during the earthquake?",
        options: ["Duck under a sturdy desk or table and hold on to it, or protect your head with your arms.",
        "Check the stability of hanging objects like ceiling fans and chandeliers.",
        "Conduct and participate in regular earthquake drills.", 
        "Don't enter damaged buildings."],
        correct: "Duck under a sturdy desk or table and hold on to it, or protect your head with your arms.",
    },

    {
        question: "Which of these is done after the earthquake?",
        options: ["Be prepared for aftershocks, once the shaking stops, take the fastest and safest ways out of the building.",
        "Check the stability of hanging objects like ceiling fans and chandeliers.",
        "Remember the DUCK, COVER, AND HOLD.", 
        "Know the earthquake hazards in your area."],
        correct: "Be prepared for aftershocks, once the shaking stops, take the fastest and safest ways out of the building.",
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