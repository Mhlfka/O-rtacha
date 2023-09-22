const questions = [
    {
        question: "Payg'ambarimiz Muhammad Mustafo (s.a.v) onalari qayerlik bo'lganlar?",
        answers:[
            {text: "Makka",  correct: true},
            {text: "Madina",  correct: false},
            {text: "Toif",  correct: false},
        
        ]
    },
    {
        question: "Payg'ambarimizning otalari nechanchi farzand bo'lganlar?",
        answers:[
            {text: "Birinchisi",  correct: false},
            {text: "Uchinchisi",  correct: false},
            {text: "Kenjasi",  correct: true},
        ]
    },
    {
        question: "Payg'ambarimiz (s.a.v) haftaning qaysi kunida tug'ilganlar?",
        answers:[
            {text: "Juma",  correct: false},
            {text: "Yakshanba",  correct: false},
            {text: "Dushanba",  correct: true},
        ]
    },
    {
        question: "Payg'ambarimiz (s.a.v) qaysi oyda tug'ilganlar?",
        answers:[
            {text: "Rabi'ul-avval",  correct: true},
            {text: "Jumadul-avval",  correct: false},
            {text: "Ramazon",  correct: false},
        ]
    },
    {
        question: "Mashhur Shaqqi-sadr (Ko'krak-yorilishi) voqeasi Payg'ambarimiz necha marotaba sodir bo'lgan?",
        answers:[
            {text: "3 marta",  correct: false},
            {text: "2 marta",  correct: true},
            {text: "1 marta",  correct: false},
        ]
    },
    {
        question: "Rasululloh solallohu alayhi vasallamning bo'ylari qandoq edi?",
        answers:[
            {text: "Uzun",  correct: false},
            {text: "O'rta",  correct: true},
            {text: "Qisqa",  correct: false},
        ]
    },
    {
        question: "Payg'ambarimizning sochlari qanday edi?",
        answers:[
            {text: "Jingalak",  correct: false},
            {text: "To'lqinsimon",  correct: true},
            {text: "Silliq",  correct: false},
        ]
    },
    {
        question: "Payg'ambarimizning 「Muhri-nubuvvat」(Payg'ambarlik muhri) yelkalarining qayerida joylashgan edi?",
        answers:[
            {text: "O'ng yelkalarida",  correct: false},
            {text: "Chap yelkalarida",  correct: false},
            {text: "Ikki yelkarining o'rtasida",  correct: true},
        ]
    },
    {
        question: "Payg'ambarimiz (s.a.v) tashqi ko'rinishda qaysi payg'ambarga o'xshardilar ? ",
        answers:[
            {text: "Ibrohim alayhissalomga",  correct: true},
            {text: "Muso alayhissalomga",  correct: false},
            {text: "Iso alayhissalomga",  correct: false},
        ]
    },
    {
        question: "Dinimizning nomi 「Islom」dir. Bu nomni kim qo'ygan?",
        answers:[
            {text: "Alloh subhanahu va taolo",  correct: true},
            {text: "Jabroil alayhissalom",  correct: false},
            {text: "Sahobalar",  correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "NEXT";
    showQuestion(); 
}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
    
    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    }); 
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect =  selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";    
}
function showScore() {
    resetState();
    questionElement.innerHTML = `Siz ${questions.length} savoldan ${score} tasini topdingiz!`;
    nextButton.innerHTML = "Yana";
    nextButton.style.display = "block";
    showIzoh();


    if (score == 0) {
        alert("Sizga birdan-bir maslahat: Kuproq urganing!")
    }else if (score == 1){
        alert("Sizga birdan-bir maslahat: Kuproq urganing!")
    }else if (score == 2){
        alert("Sizga birdan-bir maslahat: Kuproq urganing!")
    }else if (score == 3){
        alert("Ilm olishda bardavom bo'ling")
    }else if (score == 4){
        alert("Ilm olishda bardavom bo'ling")
    }else if (score == 5){
        alert("Ilm olishda bardavom bo'ling")
    }else if(score == 6){
        alert("Yaxshi, lekin ilm olishdan tuxtamang")
    }else if(score == 7){
        alert("Yaxshi, lekin ilm olishdan tuxtamang")
    }else if(score == 8){
        alert("Yaxshi, lekin ilm olishdan tuxtamang")
    }else if(score == 10){
        alert("Sizga Barakalla deymiz!")
    }else if(score == 10){
        alert("Sizga Barakalla deymiz!")
    }
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(); 
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();




