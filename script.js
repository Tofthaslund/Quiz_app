const quizData = [
    {
        question: "What is the Capital of Denmark",
        a: 'Copenhagen',
        b: 'Hobro',
        c: 'Aarhus',
        d: 'Aalborg',
        correct: 'a'
    },
    {
        question: 'What is the capital of Australia',
        a: 'Sydney',
        b: 'Melbourne',
        c: 'Canberra',
        d: 'Darwin',
        correct: 'c'
    },
    {
        question: 'What is the capital of USA',
        a: 'New York',
        b: 'Washington',
        c: 'San Diego',
        d: 'Los Angeles',
        correct: 'b'
    },
    {
        question: 'What is the capital of Vietnam',
        a: 'Ho Chi Minh City',
        b: 'Hanoi',
        c: 'Da Nang',
        d: 'Haiphong',
        correct: 'b'
    },
    {
        question: 'What is the capital of Brazil',
        a: 'São Paulo',
        b: 'Rio de Janeiro',
        c: 'Brasillia',
        d: 'Salvador',
        correct: 'c'
    },
];


const questionEl = document.getElementById("question");
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');



let currentQuiz = 0;


loadQuiz();

function loadQuiz(){

const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
};