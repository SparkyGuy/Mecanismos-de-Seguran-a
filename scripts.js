var answers = {};

var question_one = document.getElementById ('question-1');
var question_two = document.getElementById ('question-2');
var question_three =document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_seis = document.getElementById('question-6');
var question_sete = document.getElementById('question-7');
var question_oito = document.getElementById('question-8');

function storeAnswer(question_number, event){
    if(event.target.type === 'radio'){
        console.log(event.target.value);
        answers['question'+question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event){
    storeAnswer(1, event)
})
question_two.addEventListener('click', function(event){
    storeAnswer(2, event)
})
question_three.addEventListener('click', function(event){
    storeAnswer(3, event)
})
question_four.addEventListener('click', function(event){
    storeAnswer(4, event)
})
question_five.addEventListener('click', function(event){
    storeAnswer(5, event)
})
question_seis.addEventListener('click', function(event){
    storeAnswer(6, event)
})
question_sete.addEventListener('click', function(event){
    storeAnswer(7, event)
})
question_oito.addEventListener('click', function(event){
    storeAnswer(8, event)
})

function totalScore(){
    var total_score = 
    answers.question1+
    answers.question2+
    answers.question4+ 
    answers.question7+ 
    answers.question8;
    
    return total_score;
}

function getInfoBasedOnScore(){
    if(totalScore() < 3){
        var score_info = "Você precisa estudar mais sobre segurança!";
    } else if(totalScore() > 3){
        var score_info = "Parabéns! Você entende bem sobre Mecanismos de Segurança";
    }

    return score_info;
}

var submit1 = document.getElementById('submit1');
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');

function nextQuestion(question_number){
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-'+question_number);
    var el2 = document.getElementById('question-'+current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}
    growProgressBar('0%');
submit1.addEventListener('click', function(){
    nextQuestion(2);
    growProgressBar('20%');
})
submit2.addEventListener('click', function(){
    nextQuestion(3);
    growProgressBar('30%');
})
submit3.addEventListener('click', function(){
    nextQuestion(4);
    growProgressBar('40%');
})
submit4.addEventListener('click', function(){
    nextQuestion(5);
    growProgressBar('50%');
})
submit5.addEventListener('click', function(){
    nextQuestion(6);
    growProgressBar('60%');
})
submit6.addEventListener('click', function(){
    nextQuestion(7);
    growProgressBar('70%');
})
submit7.addEventListener('click', function(){
    nextQuestion(8);
    growProgressBar('100%');
})
submit8.addEventListener('click', function(){
    nextQuestion(9);
  
})

submit8.addEventListener('click', function(){
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScore();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

var btn = document.querySelector('[name="button"]');
var radioButtons = document.querySelectorAll('[name="button"]');

console.log(btn + 1)

console.log(radioButtons+ 2)
radioButtons.disabled = true;

btn.disabled = true;
var bt = document.getElementById('submit1');



radioButtons.disabled = true;
bt.disabled= true;
