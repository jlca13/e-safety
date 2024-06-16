let quizData = [
    {
        question: "What are the two ways to measure the strength of an earthquake?",
        options: ["magnitude and intensity",
        "speed and distance",
        "magnitude and distance", 
        "intensity and speed"],
        correct: "magnitude and intensity",
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
        question: "Which of these is done after the earthquake?",
        options: ["Be prepared for aftershocks, once the shaking stops, take the fastest and safest ways out of the building.",
        "Check the stability of hanging objects like ceiling fans and chandeliers.",
        "Remember the DUCK, COVER, AND HOLD.", 
        "Know the earthquake hazards in your area."],
        correct: "Be prepared for aftershocks, once the shaking stops, take the fastest and safest ways out of the building.",
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
        question: "What will you do if your clothes catch on fire?",
        options: ["Drop to the ground and roll over and over until the flames go out.",
        "Splash with a bucket of water",
        "Cover yourself with blanket", 
        "Move immediately and run outside"],
        correct: "Drop to the ground and roll over and over until the flames go out.",
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
        question: "It is a large, powerful and violent tropical cyclone?",
        options: ["Typhoon",
         " Earthquake",
         "Tropical depressions",
         "Tropical storms"],
        correct: "Typhoon",
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
        question: "Sometimes called volcanic mudflows or debris flows, are slurries of volcanic sediment, debris and water that cascade down a volcano’s slopes through rivers and channels.",
        options: ["Lahar",
        "Lava flows",
        "Volcanic gases", 
        "Volcanic tsunami"],
        correct: "Lahar",
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
];

const quizContainer = document.querySelector(".quiz-container");
const question = document.querySelector(".quiz-container .question");
const options = document.querySelector(".quiz-container .options");
const nextBtn = document.querySelector(".quiz-container .next-btn");
const quizResult = document.querySelector(".quiz-result");
const exitBtn = document.querySelector(".exit-btn");

let questionNumber = 0;
let score = 0;
const MAX_QUESTIONS = 10;
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