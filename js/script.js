function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamien';
  } else if (argMoveId == 2){
    return 'papier';
  } else if (argMoveId == 3){
    return 'nozyce';
  } else printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + playerMove);



// if (playerMove == 'papier' && computerMove == 'kamien') {
//   printMessage('Wygrywasz!');
// } else if (playerMove == 'kamien' && computerMove == 'nozyce') {
//   printMessage('Wygrywasz!');
// } else if (playerMove == 'nozyce' && computerMove == 'papier') {
//   printMessage('Wygrywasz!');
// } else if (playerMove == computerMove){
//   printMessage('Remis!');
// } else {
//   printMessage('Przegrywasz :(');
// }
  
function displayResult(argComputerMove, argPlayerMove) {
  if (argPlayerMove == 'papier' && argComputerMove == 'kamien') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamien' && argComputerMove == 'nozyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove){
    printMessage('Remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
}