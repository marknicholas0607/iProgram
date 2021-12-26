const questions = [
    {
        question: "What does HTML stands for?",
        optionA: "Hyper Text Pre-Processor",
        optionB: "Higher Text Pre-Processor",
        optionC: "Hyper Text Markup Language",
        optionD: "Higher Text Markup Language",
        correctOption: "optionC"
    },

    {
        question: "What does CSS stands for?",
        optionA: "Caster Style Sheet",
        optionB: "Counting Style Sheet",
        optionC: "Cursor Style Sheet",
        optionD: "Cascading Style Sheet",
        correctOption: "optionD"
    },

    {
        question: "What does JS stands for?",
        optionA: "JonaScript",
        optionB: "JonaStyle",
        optionC: "JavaStyle",
        optionD: "JavaScript",
        correctOption: "optionD"
    },

    {
        question: "Largest Header tag",
        optionA: "header",
        optionB: "h1",
        optionC: "h6",
        optionD: "bigheader",
        correctOption: "optionB"
    },

    {
        question: "Smallest Header Tag",
        optionA: "header",
        optionB: "h1",
        optionC: "h6",
        optionD: "smallheader",
        correctOption: "optionC"
    },

    {
        question: "Used to create list in HTML",
        optionA: "li",
        optionB: "la",
        optionC: "list",
        optionD: "label",
        correctOption: "optionA"
    },

    {
        question: "Button Tag",
        optionA: "btn",
        optionB: "button",
        optionC: "but",
        optionD: "input",
        correctOption: "optionB"
    },

    {
        question: "Example of Empty Tag",
        optionA: "h1",
        optionB: "br",
        optionC: "h6",
        optionD: "strong",
        correctOption: "optionB"
    },

    {
        question: "Paragraph tag",
        optionA: "paragraph",
        optionB: "pg",
        optionC: "prg",
        optionD: "p",
        correctOption: "optionD"
    },

    {
        question: "File Extension for HTML file",
        optionA: ".html",
        optionB: ".file",
        optionC: ".htmlfile",
        optionD: ".file-html",
        correctOption: "optionA"
    },

    {
        question: "File Extension for CSS file",
        optionA: ".css",
        optionB: ".file",
        optionC: ".cssfile",
        optionD: ".file-css",
        correctOption: "optionA"
    },

    {
        question: "Define Emphasize Text",
        optionA: "i",
        optionB: "italic",
        optionC: "b",
        optionD: "em",
        correctOption: "optionD"
    },

    {
        question: "Define High Reference",
        optionA: "highref",
        optionB: "href",
        optionC: "ref",
        optionD: "hr",
        correctOption: "optionB"
    },

    {
        question: "Define Ordered List",
        optionA: "ul",
        optionB: "oli",
        optionC: "uli",
        optionD: "ol",
        correctOption: "optionD"
    },

    {
        question: "Makes Text Bold",
        optionA: "bold",
        optionB: "i",
        optionC: "em",
        optionD: "b",
        correctOption: "optionD"
    },

]


let shuffledQuestions = [] 
function handleQuestions() { 
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0 

function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber]  
    const currentQuestionAnswer = currentQuestion.correctOption 
    const options = document.getElementsByName("option"); 
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            correctOption = option.labels[0].id
        }
    })

    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ 
            indexNumber++ 
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ 
            indexNumber++
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



function handleNextQuestion() {
    checkForAnswer() 
    unCheckRadioButtons()
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}