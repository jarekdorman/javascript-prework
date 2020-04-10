const buttonRock = document.getElementById('play-rock'),
      buttonPaper = document.getElementById('play-paper'),
      buttonScissors = document.getElementById('play-scissors');

function playGame(playerInput){
  clearMessages();
  const getMoveName = function(argMoveId){
    if(argMoveId == 1){
      return 'kamien';
    }else if (argMoveId == 2){
      return 'papier';
    }else if (argMoveId == 3){
      return 'nozyce';
    }else printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
  }

  const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
  
  const playerMove = getMoveName(playerInput) 
    console.log('Gracz wpisał: ' + playerInput);
    printMessage('Twój ruch to: ' + playerMove);

  const displayResult = function(argComputerMove, argPlayerMove) {
	  if(argPlayerMove == 'papier' && argComputerMove == 'kamien') {
	    return'wygrales';
	  }else if (argPlayerMove == 'kamien' && argComputerMove == 'nozyce') {
	    return'Wygrywasz!';
	  }else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
	    return'Wygrywasz!';
	  }else if (argPlayerMove == argComputerMove){
	    return'Remis!';
	  }else {
      return 'Przegrywasz :(';
    }
  } 

  const result = displayResult(computerMove, playerMove);
  printMessage(result);
}

buttonRock.addEventListener('click', function() {playGame(1)});

buttonPaper.addEventListener('click', function() {playGame(2)});

buttonScissors.addEventListener('click', function() {playGame(3)});

