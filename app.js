let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice){
    // console.log("Win");
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // console.log(user);
    // console.log(computer);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Beats ${convertToWord(computerChoice)}${smallCompWord} . You Win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(function() {userChoice_div.classList.remove('green-glow') }, 300);
}

setTimeout(function() {document.getElementById}, 1000)

function lose(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Loses to ${convertToWord(computerChoice)}${smallCompWord} . You Lose!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow') , 300);
}

function draw(userChoice, computerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} Equals ${convertToWord(computerChoice)}${smallCompWord} . You Draw`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function() {userChoice_div.classList.remove('gray-glow') }, 300);
}

function game(userChoice){
    // console.log("choice "+ userChoice);
    const computerChoice = getComputerChoice();
    // console.log("User Choice => " + userChoice);
    // console.log("Computer Choice =>" + computerChoice);
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            // console.log("User Win.");
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "rs":
            // console.log("User Lose.");
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            // console.log("It's Draw.");
            draw(userChoice, computerChoice);
            break;           
    }
}

function main(){
    rock_div.addEventListener('click',  () =>
        // console.log("hey you click on rock");
        game("r"));
    
    paper_div.addEventListener('click', function(){
        // console.log("hey you click on paper");
        game("p");
    })
    
    scissor_div.addEventListener('click', function(){
        // console.log("hey you click on scissor");
        game("s");
    })
}

main();