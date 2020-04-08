

function playGame(playerInput){
  clearMessages();
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamien';
    }else if (argMoveId == 2){
      return 'papier';
    }else if (argMoveId == 3){
      return 'nozyce';
    }else printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
  }

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Mój ruch to: ' + computerMove);

  // let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

  console.log('Gracz wpisał: ' + playerInput);

  let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

  function displayResult(argComputerMove, argPlayerMove) {
	  if(argPlayerMove == 'papier' && argComputerMove == 'kamien') {
	    return'wygrales';
	  }else if (argPlayerMove == 'kamien' && argComputerMove == 'nozyce') {
	    return'Wygrywasz!';
	  }else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
	    return'Wygrywasz!';
	  }else if (argPlayerMove == argComputerMove){
	    return'Remis!';
	  }else 
	    return 'Przegrywasz :(';
  } 


  let result = displayResult(computerMove, playerMove);
  printMessage(result);
}

document.getElementById('play-rock').addEventListener('click', function() {playGame(1)});

document.getElementById('play-paper').addEventListener('click', function() {playGame(2)});

document.getElementById('play-scissors').addEventListener('click', function() {playGame(3)});

