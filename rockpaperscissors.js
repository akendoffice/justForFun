var choices = ["Rock","Paper","Scissors"];
var userChoice = function(){
    var userSelectedChoice = window.prompt("Enter your selection","Rock/Paper/scissors");
    console.log("User selected choice is " + userSelectedChoice);
    return userSelectedChoice;
};

var user = userChoice();

var computerChoice = function() {
    var randomIndex = Math.floor(Math.random() * choices.length); 
    var randomElement = choices[randomIndex];
    console.log("Computer Selected Choice is " + randomElement);
    return randomElement;
};

var computer = computerChoice();

var compareChoices = function(user, computer){
    switch(user) {
        case "Rock":
            if(computer == "Scissors")
                console.log("User wins");
            else if(computer == "Rock")
                console.log("nobody wins");
            else
                console.log("Computer wins");
            break;
        case "Scissors":
            if(computer == "Paper"){
                console.log("User wins");
            }
            else if(computer == "Rock"){
                console.log("User Wins");
            }
            else{
                console.log("Its a draw");
            }
            break;
        case "Paper":
            console.log("Undefined");
    }
};

compareChoices(user, computer);
