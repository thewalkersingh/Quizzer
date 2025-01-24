'use strict';
const quesJSON = [
    {
        correctAnswer: 'Three ',
        options: ['Two', 'Three ', 'Four', 'Five'],
        question:
            "How many pieces of bun are in a Mcdonald's Big Mac?",
    },
    {
        correctAnswer: 'L. Frank Baum',
        options: [
            'Suzanne Collins',
            'James Fenimore Cooper',
            'L. Frank Baum',
            'Donna Leon',
        ],
        question:
            "Which author wrote 'The Wonderful Wizard of Oz'?",
    },
    {
        correctAnswer: 'Atlanta United',
        options: [
            'Atlanta United',
            'Atlanta Impact',
            'Atlanta Bulls',
            'Atlanta Stars',
        ],
        question:
            'Which of these is a soccer team based in Atlanta?',
    },
    {
        correctAnswer: 'A Nanny',
        options: [
            'A Sow',
            'A Lioness',
            'A Hen',
            'A Nanny',
        ],
        question: 'A female goat is known as what?',
    },
    {
        correctAnswer: 'P. L. Travers',
        options: [
            'J. R. R. Tolkien',
            'P. L. Travers',
            'Lewis Carroll',
            'Enid Blyton',
        ],
        question:
            "Which author wrote 'Mary Poppins'?",
    },
];

let score = 0;
let currentQuestion = 0;
const totalScore = quesJSON.length;

// accessing all the elements
const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const optionElement = document.getElementById("options");
const nextElement = document.getElementById("next");
const submitElement = document.getElementById("submit");

showQuestion();

nextElement.addEventListener("click", () => {
    scoreElement.textContent = `Score = ${score}/${totalScore}`;
    nextQuestion();
});

submitElement.addEventListener("click", () => {

})

function showQuestion() {
    // destructure the Object
    const { correctAnswer, options, question } = quesJSON[currentQuestion];
    questionElement.textContent = question;
    // shuffling the options
    const shuffledOptions = shuffleOptions(options);
    // populating the Option div with the buttons and event handling
    shuffledOptions.forEach((opt) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        optionElement.appendChild(btn);

        // event handling
        btn.addEventListener("click", () => {
            if (opt === correctAnswer)
                score = score + 1;
            else
                score = score - 0.25;
            scoreElement.textContent = `Score = ${score}/${totalScore}`;
            nextQuestion();

        });
    });
}
function nextQuestion() {
    currentQuestion++;
    // clearing the previous options
    optionElement.textContent = "";
    if (currentQuestion >= quesJSON.length) {
        questionElement.textContent = "Quiz Completed !!";
        optionElement.textContent = "";
        nextElement.remove();
    } else {
        showQuestion();
    }
}

// shuffle the options
function shuffleOptions(options) {
    for (let i = options.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [options[i], options[j]] = [options[j], options[i]];
    }
    return options;
}