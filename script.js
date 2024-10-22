const quizQuestions = [
    {
        question: "What is the capital of France? 🇫🇷",
        options: ["Berlin", "Paris", "London", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet? 🔴",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who painted the famous painting 'The Starry Night'? 🎨",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        answer: "Vincent van Gogh"
    },
    {
        question: "What is the largest ocean on Earth? 🌊",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean"
    },
    {
        question: "Which country is known as the Land of the Rising Sun? 🌅",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: "Japan"
    },
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("question").style.display = "block";
    document.getElementById("options").style.display = "block";
    document.getElementById("score").style.display = "none";
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        document.getElementById("question").innerHTML = currentQuestion.question;
        let optionsHtml = "";
        for (let option of currentQuestion.options) {
            optionsHtml += `<button class="option-button" onclick="checkAnswer('${option}')">${option}</button>`;
        }
        document.getElementById("options").innerHTML = optionsHtml;
    } else {
        endQuiz();
    }
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    displayQuestion();
}

function endQuiz() {
    document.getElementById("question").style.display = "none";
    document.getElementById("options").style.display = "none";
    document.getElementById("score").style.display = "block";
    document.getElementById("score").innerHTML = `Your final score is ${score} out of ${quizQuestions.length} 🎉`;
}