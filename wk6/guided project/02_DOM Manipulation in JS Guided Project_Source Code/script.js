let questionCountText = document.getElementById( "question-count" );
let question = document.getElementById( "question" );
let choiceContainer = document.getElementById( "choices-container" );
let choices = document.getElementsByClassName( "choice" );
let scoreText = document.getElementById( "score" );


let totalQuestions = questions.length;
let currentQuestion = 1;
let currentQuestionIndex = 0, score = 0;



function displayQuestion() {
    questionCountText.innerHTML = `${ currentQuestion } of ${totalQuestions} questions`;

    question.textContent = questions[currentQuestionIndex].question;

    let answers = questions[currentQuestionIndex].choices;
    for (let i = 0; i < answers.length; i++) {
        choices[i].textContent = answers[i];       
    }

}

function checkAnswer( currentAnswer ) {
    if (currentAnswer == questions[currentQuestionIndex].correctAnswer) {
        score++;
    }

    currentQuestion++;
    currentQuestionIndex++;
    updateScore();

    if( currentQuestionIndex == totalQuestions) endQuiz();
    else    displayQuestion();
}

function updateScore() {
    let scoreString = `Current Score: ${score}`;

    if( currentQuestionIndex == totalQuestions) 
        scoreString = `Final Score: ${score}/${totalQuestions}`;

    scoreText.textContent = scoreString;
}

function endQuiz() {
    questionCountText.innerHTML = "";
    question.textContent = "Quiz Completed!";
    choiceContainer.innerHTML = "";
}

function restartQuiz() {
    currentQuestion = 1;
    currentQuestionIndex = 0;
    score = 0;

    choiceContainer.innerHTML = ` <button class="choice" onclick="checkAnswer(0)"></button>
            <button class="choice" onclick="checkAnswer(1)"></button>
            <button class="choice" onclick="checkAnswer(2)"></button>`

    displayQuestion();
    updateScore();
}

displayQuestion();

