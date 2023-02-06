var questionsArr = [{
        question: "Your cup is half full", 
        answer: true
    },
    {   question: 'You are smiling', 
        answer: true
    },
    {   question: 'You enjoy this class', 
        answer: true
    },
    {   question: 'You like your current job', 
        answer: true
    },
    {   question: 'JavaScript is awesome', 
        answer: true
    }
]
function runQuiz() {
    var numOfAgrees = 0
    for(var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr[i]
        var answer = confirm(question)
        if (answer) {
            numOfAgrees++
        }
    }

    function scoreTest(answer, questions) {
        var score = (answer/questions) * 100;
        return score;

    if (numOfAgrees >= 3) {
        alert("2023, is your year :)")
    } else {
        alert("2023,is not your year :(")
    }
}

