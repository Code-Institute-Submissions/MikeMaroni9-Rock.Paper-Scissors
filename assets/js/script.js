/**
 * Descriptions added as per Love Math project
 */

/**
 * Dom Caching and login form creation 
 */
document.getElementById("ROCK").onclick=pickRock;
document.getElementById("PAPER").onclick=pickPaper;
document.getElementById("SCISSORS").onclick=pickScissors;
document.getElementById('yourName');
yourName.addEventListener('submit', getFormDetails);
var botScore=0;
var playerScore=0;

function getFormDetails(event) {
    this.style['display'] = 'none';
    event.preventDefault(); 
    let name = document.getElementById('name');
    document.getElementById('name-result').textContent = name.value;
}

/**
 * Random Number Generator
 */

function randomChoice(){
	var randomNumber=Math.random();
	var pcRandomChoice="ROCK";
	if(randomNumber<0.33){
		pcRandomChoice="SCISSORS";
	}
	else if(randomNumber<0.66){
		pcRandomChoice="PAPER";
	}
	return pcRandomChoice;
}

/**
 * Game Logic
 */

function pickRock(){
	var pcRandomChoice=randomChoice();
	checkWinner(pcRandomChoice,"ROCK");
}
function pickScissors(){
	var pcRandomChoice=randomChoice();
	checkWinner(pcRandomChoice,"SCISSORS");
}
function pickPaper(){
	var pcRandomChoice=randomChoice();
	checkWinner(pcRandomChoice,"PAPER");
}

/**
 * IF/ELSE Function... Checking who wins! 
 */
// check to see who won and displays if there was a tie
function checkWinner(pcRandomChoice,playersChoice){
	if(pcRandomChoice==playersChoice){
		displayPlayersChoice("Your Choice : " + playersChoice);
		displayPcChoice("PC Choice : " + pcRandomChoice);
		displayCompleteMessage("IT'S A TIE !");
	}
	else if(
		(pcRandomChoice=="SCISSORS" && playersChoice=="PAPER") ||
		(pcRandomChoice=="PAPER" && playersChoice=="ROCK") ||
		(pcRandomChoice=="ROCK" && playersChoice=="scissors")
		){
		displayPlayersChoice("Your Choice : " + playersChoice);
		displayPcChoice("PC Choice : " + pcRandomChoice);
		increasePcScore();
	}
	else{
		displayPlayersChoice("Your Choice : " + playersChoice);
		displayPcChoice("PC choice : " + pcRandomChoice);
		increasePlayerScore();
	}
}
/**
 * Scores
 */
// 

function increasePcScore(){
	botScore+=1;
	document.getElementById("computerScore").innerHTML=botScore;
	displayCompleteMessage("YOU LOST :(");
}

function increasePlayerScore(){
	playerScore+=1;
	document.getElementById("humanScore").innerHTML=playerScore;
	displayCompleteMessage("YOU WON !");
}

function displayCompleteMessage(msg){
	document.getElementById("status").innerHTML=msg;
}

function displayPlayersChoice(msg){
	document.getElementById("playerScore").innerHTML=msg;

}

function displayPcChoice(msg){
	document.getElementById("botScore").innerHTML=msg;
}