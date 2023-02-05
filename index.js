function runQuiz(){
    console.log('start-quiz')
    var questionsArr = [
        {
          question: 'The cup half full',
          answer: true
        }
        {
          question: 'Today a good day',
          answer: true
        }
        {
        question: 'You enjoy your job',
        answer: true
        }
        {
        question: 'You are currently smiling',
        answer: true
        }
        {
        question: 'You prefer JavaScript',
        answer: true
        }
    ]
    var numOfAgrees = 0
    for (var i = 0; i < questionsArr.length; i++) {
        var question = questionsArr [i]
        console.log(question)
        var answer = confirm(question)
        if (answer) {
            numOfAgrees++
        }
    }
    if(numOfAgrees >= 3) {
        alert("2023 is going to be your year!")
    } else {
        alert("2023 is not your year :(")
    }
}
