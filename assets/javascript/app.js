$(document).ready(function(){

    var count = 30;

    var myQuestions = [
        {
            question: "What is Catwoman's real name?",
    
            answers: {
                a: "Sasha Kyle",
                b: "Selina Kyle",
                c: "Sarah Kyle",
    
            },
    
            correctAnswer: "b"
        },
    
        {
    
            question: "What is Spider-Man's real name?",
    
            answers: {
                a: "Peter Parker",
                b: "Peter Baker",
                c: "Peter Walker",
    
            },
    
            correctAnswer: "a"
        },
        
        { 
        
            question: "What is Elektra's real name?", 
    
            answers: {
                a: "Elektra Nefarios",
                b: "Elektra Natchios",
                c: "Elektra Natalia",
            },
    
            correctAnswer: "b"
    
        } 
    
    
    ]; 
    console.log(myQuestions[0].question);

    // $("#quiz").append(myQuestions[0].question);


    function showQuestions(questions){
        var quizContainer= $('#quizContainer');
        var output = [];
        var answers;
        for(var i=0; i<questions.length; i++){
            answers = [];
        for (letter in questions[i].answers){
            answers.push(
                "<label>"
                +'<input type="radio" name="question'+i+'"value="'+letter+'">'
                + letter + ': '
                + questions[i].answers[letter]
                +'</label>'
            );
        }

        output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('')+ '</div>'
        );
        }
        console.log(output.join(''))
        quizContainer.html(output.join('')) ;

        // showQuestions(questions, quizContainer); ??
    }

    showQuestions(myQuestions);

    $("#startButton").click(function(){
        counter = setInterval(timer, 1000);
    
    });

    function timer() {
        count--;
        if (count <= 0) {
            clearInterval(counter);
            return;
        }

    $("#timer").html("Time remaining: " + "00:" + "count" + "secs");
        }
   

    // function showResults(questions, resultsContainer){
    //     var quizContainer=$('#quizContainer');
    //     var answerContainers = quizContainer.querySelectorAll('.answers');
    //     var userAnswer = "";
    //     var numCorrect = 0;
    //     for(var i=0; i<questions.length; i++){
    //         userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
    //     if(userAnswer===questions[i].correctAnswer){
    //         numCorrect++;
    //         answerContainers[i].style.color = 'lightgreen';
    //     }
    //     else{
    //         answerContainers[i].style.color = 'red';
    //     }
    //     }
    //     resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
    // }

    // showQuestions(questions);

    submitButton.onclick = function(){
        //get all input type radio by attr name using jquery
        for(var i=0; i<myQuestions.length; i++){
            userAnswer = (answerContainer[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        if(userAnswer===myQuestions[i].correctAnswer){
            numCorrect++;
            answerContainer[i].style.color = 'lightgreen';
        }
        else{
            answerContainer[i].style.color = 'red';
        }
        }
        resultsContainer.innerHTML = numCorrect + " out of " + questions.length;
    }
});

