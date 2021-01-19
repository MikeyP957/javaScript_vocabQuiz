//Global Variables
    //get elements in html
   var start = document.getElementById("start");
   var quiz = document.getElementById("quiz");
   var question = document.getElementById("question");
   var choiceA = document.getElementById("A");
   var choiceB = document.getElementById("B");
   var choiceC = document.getElementById("C");
   var choiceD = document.getElementById("D");
   var scoreCard = document.getElementById("scoreContainer")

    // Selects element by class
    var timeEl = document.querySelector(".time");
    // Selects element by id
    var mainEl = document.getElementById("main");
    //time set for the game clock
    var secondsLeft = 20;
  
    //counter variables
    var questionTime = 20;
    
    //Questions: Each index is an object with properties:
        //questionPrompt, optionA, optionB...optionD and answer
    var questionsArray = [
        {   questionPrompt: "Who is the best climber in all the land?", //qestion[0].questionPrompt
            optionA: "Tommy Caldwell",
            optionB: "Alex Megos",
            optionC: "Adam Ondra",
            optionD: "Janja Garnbredt", 
            answer: "A" //question[0].answer
        },
        {   questionPrompt: "Who is the stinkiest cat in the house?", //qestion[0].questionPrompt
            optionA: "Peaches",
            optionB: "Mac Mittens",
            optionC: "Sven",
            optionD: "Bennie", 
            answer: "C" //question[0].answer
        },
        {   questionPrompt: "Who is the most mediocre baseball team in the MLB?", //qestion[0].questionPrompt
            optionA: "The Toronto Blue Jays",
            optionB: "The Seattle Mariners",
            optionC: "The Chicago Cubs",
            optionD: "Los Angeles Dodgers", 
            answer: "B" //question[0].answer
        },
        {   questionPrompt: "Who has the best mustache?", //qestion[0].questionPrompt
            optionA: "Joe Biden",
            optionB: "John Oliver",
            optionC: "Kenan Thompson",
            optionD: "Mikey P", 
            answer: "D" //question[0].answer
        },

    ];   
    //Interval of questionsArray
    var runningQuestion = 0;
    var lastQuestion = questionsArray.length - 1;
    //this is the user information that will be appended to the cache
    var playerInfo = {
        score: 0,
        initials: "",
    }
//Call functions
    startQuiz();
    renderQuestion();
    scoreRender();
    
//Functions
    //function for timer
    function setTime() {
        // Sets interval in variable
        var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left in game.";
    
        if(secondsLeft === 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            // Calls function to create and append image
            sendMessage();
        }
    
        }, 1000);
        console.log("set timer running")
    }
    function sendMessage() {
        questionTime.textContent= " ";

    }
    //functions to start quiz
        start.addEventListener("click", startQuiz);

    function startQuiz(){
        start.style.display = "none";
        renderQuestion();
        quiz.style.display = "block";
        setTime();

        console.log("start quiz running")
    }
    //functions for questions
    function renderQuestion(){
        let q = questionsArray[runningQuestion];
        question.innerHTML = "<p>" + q.questionPrompt + "</p>";
        choiceA.innerHTML = q.optionA;
        choiceB.innerHTML = q.optionB;
        choiceC.innerHTML = q.optionC;
        choiceD.innerHTML = q.optionD;

        
        console.log("render question running")
    }
    // start.style.display = "none";
    // renderQuestion();
    // quiz.style.display = "block"

    function checkAnswer(playerAnswer){
        if(questionsArray[runningQuestion].answer == playerAnswer) {
            playerInfo.score++;
        }
        else{
            questionTime--;
        }

        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }
        else {
            //end the quiz and show score
        }
        scoreRender();
        console.log("check answer running");
        console.log(playerInfo.score)
    }
    //show the score
    function scoreRender() {
        scoreCard.style.display = "block";
        let score = playerInfo.score;
        scoreCard.innerHTML = score

        console.log("scoreRender is running")
    }
    

// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers


// ```
// GIVEN I am taking a code quiz
// WHEN I click the start button
        //while loop
// THEN a timer starts and I am presented with a question

// WHEN I answer a question (for Loop, create an array of randomly assigned questions and then iterate)
    //How to make a question...
    
    //on click check to see if it is true, 
    // else take away seconds from timer
// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock

// WHEN all questions are answered or the timer reaches 0
        //nest the game in a while loop and return when time is expired
// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score
        //use the cache to create object with score and intials consecutive correct questions?
// ```

