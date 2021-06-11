const quizDB = [
    {
        question: "Q1: what is the full form of HTMl",
        a: "hellow to my land",
        b: "hey text markup language",
        c: "hyper text makeup language",
        d: "hyper text markup language",
        ans: "ans4"
    },
    {
        question: "Q2: how many heading tags in HTML",
        a: "3",
        b: "8",
        c: "6",
        d: "16",
        ans: "ans3"
    },
    {
        question: "Q3:i whhich stage of html u are?",
        a: "basic",
        b: "intermadiate",
        c: "advance",
        d: " bigner",
        ans: "ans2"
    },
    {
        question: "Q4: the full form of JS?",
        a: "javaS",
        b: "javasuper",
        c: "a and b both",
        d: "none of above",
        ans: "ans4"
    }

];
const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit ');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}
loadQuestion();
const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked) {
            answer = curAnsElem.id;
        }

    });
    return answer;
};

const deselectAll = ()=>{
    answers.forEach(curAnsElem => curAnsElem.checked = false

    );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer == quizDB[questionCount].ans) {
        score++;
    };
    questionCount++;

    deselectAll();

    if (questionCount < quizDB.length) {
        loadQuestion();
    } else {
        showScore.innerHTML = `
<h3> you scored ${score}/${quizDB.length}   </h3>
<button class="btn" onclick= "location.reload()" > play again </button>
`;
        showScore.classList.remove('scoreArea');
    }

});