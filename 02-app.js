var output = document.getElementById('output');
var result = document.getElementById('result');
var random = Math.floor(Math.random()*3);

switch (random) {
    case 0:
    random = 'rock'        
    break;

    case 1:
    random = 'paper'        
    break;

    case 2:
    random = 'scissor'        
    break;

    default:
    break;
}

console.log(random);

var victory = 'congratulation dude, you win';
var lose = 'sorry friend, you lose';

alert("HEY WLCOME TO ROCK, PAPER, SCISSOR GAME");
var guess =prompt('rock or paper or scissor ? type it   (type exit to close)');

while(!(guess == 'rock' || guess == 'paper' || guess == 'scissor' || guess == 'exit')){
    alert('SORRY, THIS ITEM NOT SET, PLEASE TURE AND lowercase TYPE');
    var guess =prompt('rock or paper or scissor ? type it (type exit to close)');
}


if(guess == random){
    output.innerHTML = 'pc choise :' + ' ' + random +'<br><br>'+  "you'r choise :" + ' ' + guess;
    result.innerHTML = 'opssss, Equal';
}
else if(guess == 'rock' && random == 'scissor'){
    output.innerHTML = 'pc choise :' + ' ' + random +'<br><br>'+  "you'r choise :" + ' ' + guess;
    result.innerHTML = victory;
}
else if(guess == 'rock' && random == 'paper'){
    output.innerHTML = 'pc choise :' + ' ' + random +'<br><br>'+  "you'r choise :" + ' ' + guess;
    result.innerHTML = lose;
}
else if(guess == 'paper' && random == 'rock'){
    output.innerHTML = 'pc choise :' + ' ' + random +'<br><br>'+  "you'r choise :" + ' ' + guess;
    result.innerHTML = victory;
}
else if(guess == 'paper' && random == 'scissor'){
    output.innerHTML = 'pc choise :' + ' ' + random +'<br><br>'+  "you'r choise :" + ' ' + guess;
    result.innerHTML = lose;
}
else if(guess == 'scissor' && random == 'paper'){
    output.innerHTML = 'pc choise :' + ' ' + random +'<br><br>'+  "you'r choise :" + ' ' + guess;
    result.innerHTML = victory;
}
else if(guess == 'scissor' && random == 'rock'){
    output.innerHTML = 'pc choise :' + ' ' + random +'<br><br>'+  "you'r choise :" + ' ' + guess;
    result.innerHTML = lose;
}

else if(guess == 'exit'){
    alert("THANK'S FOR VISIT, WE HOPE SEE YOU AGAIN");
}
else{
    false;
}






