//Global Variables
    //get elements in html
   var start = document.getElementById(start);
   var quiz = document.getElementById(quiz);
   var question = document.getElementById(question);
   var choiceA = document.getElementById("A");
   var choiceB = document.getElementById("B");
   var choiceC = document.getElementById("C");
   var choiceD = document.getElementById("D");

    // // Selects element by class
    // var timeEl = document.querySelector(".time");
    // // Selects element by id
    // var mainEl = document.getElementById("main");
    // //time set for the game clock
    // var secondsLeft = 20;
  
    //counter variables
    var questionTime = 20;

    
    //Questions
    //create objects with properties: question, choices and a method that holds correct answer as a boolean
    var questionsObj = [
        {   questionPrompt: "Who is the best climber in all the land?", //qestion[0].questionPrompt
            optionA: "Tommy Caldwell",
            optionB: "Alex Megos",
            optionC: "Adam Ondra",
            optionD: "Janja Garnbredt", 
            answer: "A" //question[0].answer
        },

    ];   
   
    //this is the user information that will be appended to the cache
    var playerInfo = {
        score: 0,
        initials: "",
    }
   
//Functions
    //functions for questions
    function renderQuestion(){
        let q = questionsObj[0];
        question.innerHTML = "<p>" + q.questionPrompt + "</p>";
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    }

    //function for timer
        function setTime() {
            // Sets interval in variable
            var timerInterval = setInterval(function() {
            secondsLeft--;
            questionTime.textContent = secondsLeft + " seconds left till game ends.";
        
            if(secondsLeft === 0) {
                // Stops execution of action at set interval
                clearInterval(timerInterval);
                // Calls function to create and append image
                sendMessage();
            }
        
            }, 1000);
        }
        function sendMessage() {
            questionTime.textContent= " ";

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

