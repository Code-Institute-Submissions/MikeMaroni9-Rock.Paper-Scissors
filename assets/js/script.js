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