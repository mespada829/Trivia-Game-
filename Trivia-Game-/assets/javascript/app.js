//=========================//

// Must declare the variables that will contain questions, answers and correct choice
// The Counters - to track wins and losses
// Open document ready function 

//=======++++====================================
// I CAN"T FIGURE OUT THE REMAINING ERRORS :( 
//======++++++====================================


$(document).ready(function(){


// ===== VARIABLES =======//
var winCounter = 0;
var lossCounter = 0;


var game = {
    
    time:25,

    trivia: {
        q1: {question: "Who is Dave Mcfly?", 
            a1: "Marty's Brother", 
            a2: "Marty's Cousing", 
            a3: "Marty's Great Grandfather", 
            a4: "Marty's Uncle"
        }, 
        
        q2: {question: "Who played the Chicago Cubs in the movie?", 
            a1:"New York", 
            a2:"Miami", 
            a3:"San Diego", 
            a4:"Atlanta" 
        }, 

        q3: {question: "What did Marty order in the cafe 80's?", 
            a1:"Pepsi Free", 
            a2:"Root Beer", 
            a3:"Water", 
            a4:"Milkshake"
        }, 
        
       
    
    }, 


// FUNCTION DECLARATIONS
// ==============================================================================       
    start: function(){
        var counter = setInterval(game.count, 1000);
        if (game.time < 0) {
            game.results();
            clearInterval(counter);
            
        }
        
    },
    stop: function() {
        var currentTime = game.timeConverter(game.time);
        if (game.time < 0) {
            game.results();
            clearInterval(currentTime);
          
        }
       
        },
    count: function(){
        game.time--;
        currentTime = game.timeConverter(game.time);
        $("#timer").html("<h3>" + currentTime + "</h3>");
       
        if (game.time < 0) {
            game.results();
            clearInterval(currentTime);
        }
    },

    timeConverter: function(t){
       
        var minutes = Math.floor(t/60);
        var seconds = t - (minutes * 60);
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        if (minutes === 0){
            minutes = "00";
        } else if (minutes < 10){
            minutes = "0" + minutes;
        }
    
        return minutes + ":" + seconds;
    }, 

    // END OF TIME CONVERTER
    // DISPLAY QUESTIONS

    displayFirstQuestion: function(){
        $("#question").html("<h2>" + game.trivia.q1.question + "</h2>");
        $("#a1").html("<p id='a1'>" + game.trivia.q1.a1 + "</p>");
        $("#a2").html("<p id='a2'>" + game.trivia.q1.a2 + "</p>");
        $("#a3").html("<p id='a3'>" + game.trivia.q1.a3 + "</p>");
      
        
   
        $("#a1").click(function() {
          
            $("#a1").data('clicked', true);
            winCounter++;
            
            game.nextQuestion();
                
        });
        
      
        $("#a2, #a3,").click(function() {
            if(jQuery("#a1").data('clicked')){
                game.nextQuestion();
            }
            else{
               
                lossCounter++;
               
                game.nextQuestion();
            }
        });
        
        
    },

    nextQuestion: function(){
        $("#a1").data('clicked', null);
        $("#question").html("<h2>" + game.trivia.q2.question + "</h2>");
        $("#a1").html("<p id='a1'>" + game.trivia.q2.a1 + "</p>");
        $("#a2").html("<p id='a2'>" + game.trivia.q2.a2 + "</p>");
        $("#a3").html("<p id='a3'>" + game.trivia.q2.a3 + "</p>");
      
        console.log("nextquestion");
      
        $("#a3").click(function() {
            console.log("Clicked a3");
            $("#a3").data('clicked', true);
          
            winCounter++;
       
            game.thirdQuestion();
                
        });
        $("#a1, #a2,").click(function() {
           
            lossCounter++;
         
            game.thirdQuestion();
        });
     }, 

    thirdQuestion: function(){
        $("#a3").data('clicked', null);
        $("#question").html("<h2>" + game.trivia.q3.question + "</h2>");
        $("#a1").html("<p id='a1'>" + game.trivia.q3.a1 + "</p>");
        $("#a2").html("<p id='a2'>" + game.trivia.q3.a2 + "</p>");
        $("#a3").html("<p id='a3'>" + game.trivia.q3.a3 + "</p>");
      
        
        $("#a2").click(function() {
            console.log("Clicked a2");
            $("#a2").data('clicked', true);
           
            winCounter++;
          
            game.lastQuestion();
                
        });
       
        $("#a1, #a3,").click(function() {
           





            lossCounter++;
           
            game.lastQuestion();
        });
     }, 

     

    results: function(){
        $("#timer").html(null);
        $("#question").html("<h2> Game Over! </h2>");
        $("#a1").html("<p id='a1'> Correct answers: " + winCounter + "</p>");
        $("#a2").html("<p id='a2'> Incorrect answers: " + lossCounter + "</p>");
        $("#a3").html("<p> To play again, refresh page. </p>");
        $("#a4").html(null);
        game.stop();
    },






}; 
// FUNCTION CALLS
    // ==============================================================================

    $("#timer").on('click', game.start());
    $("#question").on('click', game.displayFirstQuestion());
    

});