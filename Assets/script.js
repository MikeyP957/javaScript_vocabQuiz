//Global Variables
    //get elements in html
     var start = document.getElementById("start");
     var quiz = document.getElementById("quiz");
   //question and (multi-choice buttons)
     var question = document.getElementById("question");
     var choiceA = document.getElementById("A");
     var choiceB = document.getElementById("B");
     var choiceC = document.getElementById("C");
     var choiceD = document.getElementById("D");
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
   //scoring
   var scoreCardText = document.querySelector("#scoreCardText");
   var initialsForm = document.querySelector("#playerInitials");
   var scoreList = document.querySelector("#scoreBoard");
   var finalScore = document.querySelector("#playerScore");
     //this is the user information that will be appended to the cache
     var scores = [];
     var totalPoints = 9;
     var playerInfo = {
      score: 0,
      initials: "",
      };
   //Timer
     var timeEl = document.querySelector(".time");
     // Selects element by id
     var mainEl = document.getElementById("main");
     //time set for the game clock
     var secondsLeft = 10;
           
    //Interval of questionsArray
     var runningQuestion = 0;
     //the index of the last question in questions array
     var lastQuestion = questionsArray.length - 1;
    
//Functions
    //function for timer
    function startQuiz(){
        //start timer
        var timerInterval = setInterval(function() {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds left in game.";
        //when time runs out run gameOver()
            if(secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image
                gameOver();
            }            
        }, 1000);;
        renderQuestion();
        start.style.display = "none";
        scoreCard.style.display = "block";
        quiz.style.display = "block";        
    }
    //When the game is over form is appended to save highscores
    function gameOver() {
        timeEl.style.display = "none";
        quiz.style.display = "none";
        highScoreForm.style.display = "block";
        scoreRender();
        console.log("game over function is running")
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
   
    function checkAnswer(playerAnswer){
        if(questionsArray[runningQuestion].answer == playerAnswer) {
            playerInfo.score++;
        }
        else{secondsLeft--;}

        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }        
        else {
            secondsLeft = 0;
            gameOver();
        }
    }
    //show the score
    function scoreRender() {
        scoreCard.style.display = "block";
        let score = playerInfo.score;
        scoreCard.innerHTML = "Score: " + score;
        console.log("scoreRender is running")
    }
  
    




    
//     //save high scores
//     highscores.push(newScore);
//     window.localStorage.setItem("highscores", JSON.stringify(highscores));

// //Event listeners for buttons
//     //functions to start quiz
    
    start.addEventListener("click", startQuiz);

    // playerSubmit.addEventListener("click", )
    
    // function clearHighscores() {
    //     window.localStorage.removeItem("highscores");
    //     window.location.reload();
    //   }
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// THEN I can save my initials and my score
        //use the cache to create object with score and intials consecutive correct questions?
// ```

