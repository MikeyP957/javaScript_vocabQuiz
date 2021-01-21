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
    function highScoreRender() {
        // Clear scoreList element and update finalScore
        scoreList.innerHTML = "";
        finalScore.textContent = scores.length;
      
        // Render a new li for each player
        for (var i = 0; i < scores.length; i++) {
          var player = scores[i];
      
          var li = document.createElement("li");
          li.textContent = player;
          li.setAttribute("data-index", i);
      
          var score = document.createElement("p");
          score.textContent = totalPoints + " points";
      
          li.appendChild(score);
          scoreList.appendChild(li);
        }
      }
    // This function is being called below and will run when the page loads.
     function init() {
        // Get stored scores from localStorage
        var storedscores = JSON.parse(localStorage.getItem("scores"));     
        // If scores were retrieved from localStorage, update the scores array to it
        if (storedscores !== null) {
            scores = storedscores;
        }    
        // This is a helper function that will render scores to the DOM
        highScoreRender();
    }

    function storeScores() {
        // Stringify and set key in localStorage to scores array
        localStorage.setItem("scores", JSON.stringify(scores));
    }


// Add submit event to form
initialsForm.addEventListener("submit", function(event) {
    event.preventDefault();
  
    var playerInitials = scoreCardText.value.trim();
  
    // Return from function early if submitted playerInitials is blank
    if (playerInitials === "") {
      return;
    }
  
    // Add new playerInitials to scores array, clear the input
    scores.push(playerInitials);
    scoreCardText.value = "";
  
    // Store updated scores in localStorage, re-render the list
    storeScores();
    highScoreRender();
  });


// Add click event to scoreList element
scoreList.addEventListener("click", function(event) {
    var element = event.target;
  
    // Checks if element is a button
    if (element.matches("button") === true) {
      // Get its data-index value and remove the todo element from the list
      var index = element.parentElement.getAttribute("data-index");
      scores.splice(index, 1);
  
      // Store updated scores in localStorage, re-render the list
      storeScores();
      highScoreRender();
    }
  });
  
  // Calls init to retrieve data and render it to the page on load
  init()
      
start.addEventListener("click", startQuiz);

  