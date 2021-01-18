//Global Variables
    //Questions
    //create objects with properties: question, choices and a method that holds correct answer as a boolean
    var question1 = {
        questionPrompt: "Who is the best climber in all the land?" ,
        optionA: "Tommy Caldwell",
        optionB: "Alex Megos",
        optionC: "Adam Ondra",
        optionD: "Janja Garnbredt",
        checkResponse: function() {
            
            if(this.optionA){
                return true;
            }
            else {
                return false;
            }
        }
    }
console.log(question1.checkResponse(question1.optionA), "Does this log as true?")
console.log(question1.checkResponse(question1.optionB), "Does this log as false?")

    var question2 = {

    }

    var question3 = {

    }

    var question4 = {

    }

    var question5 = {

    }
    //this is the user information that will be appended to the cache
    var playerInfo = {
        score: 0,
        initials: "",
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

