const questions = [
    {
        question: "Inventor of HTML",
        optionA: "Tim Berners Lee",
        optionB: "Håkon Wium Lie",
        optionC: "Brendan Eich",
        optionD: "Ade Lovelace",
        correctOption: "optionA"
    },

    {
        question: "Inventor of CSS",
        optionA: "Tim Berners Lee",
        optionB: "Håkon Wium Lie",
        optionC: "Brendan Eich",
        optionD: "Ade Lovelace",
        correctOption: "optionB"
    },

    {
        question: "Inventor of JS",
        optionA: "Tim Berners Lee",
        optionB: "Håkon Wium Lie",
        optionC: "Brendan Eich",
        optionD: "Ade Lovelace",
        correctOption: "optionC"
    },

    {
        question: "World's First Computer Programmer",
        optionA: "Tim Berners Lee",
        optionB: "Håkon Wium Lie",
        optionC: "Brendan Eich",
        optionD: "Ade Lovelace",
        correctOption: "optionD"
    },

    {
        question: "A standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.",
        optionA: "HTML",
        optionB: "CSS",
        optionC: "JS",
        optionD: "Website",
        correctOption: "optionA"
    },

    {
        question: "Describes how HTML elements are to be displayed on screen, paper, or in other media",
        optionA: "HTML",
        optionB: "CSS",
        optionC: "JS",
        optionD: "Website",
        correctOption: "optionB"
    },

    {
        question: "Text-based programming language used both on the client-side and server-side that allows you to make web pages interactive.",
        optionA: "HTML",
        optionB: "CSS",
        optionC: "JS",
        optionD: "Website",
        correctOption: "optionC"
    },

    {
        question: "A set of related web pages located under a single domain name, typically produced by a single person or organization.",
        optionA: "HTML",
        optionB: "CSS",
        optionC: "JS",
        optionD: "Website",
        correctOption: "optionD"
    },

    {
        question: "A system of words, letters, figures, or other symbols substituted for other words, letters, etc., especially for the purposes of secrecy.",
        optionA: "Program",
        optionB: "Code",
        optionC: "System",
        optionD: "Algorithm",
        correctOption: "optionB"
    },

    {
        question: "A series of coded software instructions to control the operation of a computer or other machine.",
        optionA: "Program",
        optionB: "Code",
        optionC: "System",
        optionD: "Algorithm",
        correctOption: "optionA"
    },

    {
        question: "A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.",
        optionA: "Program",
        optionB: "Code",
        optionC: "System",
        optionD: "Algorithm",
        correctOption: "optionD"
    },

    {
        question: "An electronic device for storing and processing data, typically in binary form, according to instructions given to it in a variable program.",
        optionA: "Cellphone",
        optionB: "Computer",
        optionC: "Tablet",
        optionD: "System",
        correctOption: "optionB"
    },

    {
        question: "Grammatical rules for instructing a computer or computing device to perform specific tasks.",
        optionA: "Program",
        optionB: "Language",
        optionC: "Programming Language",
        optionD: "Wire Frame",
        correctOption: "optionB"
    },

    {
        question: "A way to design a website service at the structural level.",
        optionA: "Program",
        optionB: "Language",
        optionC: "Programming Language",
        optionD: "Wire Frame",
        correctOption: "optionD"
    },

    {
        question: "Also called the data access layer of software or hardware and includes any functionality that needs to be accessed and navigated to by digital means.",
        optionA: "Front-End",
        optionB: "Back-End",
        optionC: "Programming Language",
        optionD: "Wire Frame",
        correctOption: "optionD"
    },

    {
        question: "Focuses on the visual elements of a website or app that a user will interact with (the client side).",
        optionA: "Front-End",
        optionB: "Back-End",
        optionC: "Programming Language",
        optionD: "Wire Frame",
        correctOption: "optionB"
    },

    {
        question: "A sphere of knowledge identified by a name.",
        optionA: "Web Hosting",
        optionB: "Domain",
        optionC: "DNS",
        optionD: "URL",
        correctOption: "optionB"
    },

    {
        question: "Work by maintaining stable and secure storage spaces.",
        optionA: "Web Hosting",
        optionB: "Domain",
        optionC: "DNS",
        optionD: "URL",
        correctOption: "optionA"
    },

    {
        question: "To translate a domain name into the appropriate IP address.",
        optionA: "Web Hosting",
        optionB: "Domain",
        optionC: "DNS",
        optionD: "URL",
        correctOption: "optionC"
    },

    {
        question: "Standardized naming convention for addressing documents accessible over the Internet and Intranet.",
        optionA: "Web Hosting",
        optionB: "Domain",
        optionC: "DNS",
        optionD: "URL",
        correctOption: "optionD"
    },

    {
        question: "Pogi ba si Mark Nicholas Razon?",
        optionA: "Yes",
        correctOption: "optionA"
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