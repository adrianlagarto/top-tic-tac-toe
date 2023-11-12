
const GameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""]

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square, index) => {
      boardHTML +=`<div class='square' id='square-${index}'>${square}</div>`;
    })
    document.querySelector('#gameboard').innerHTML = boardHTML;
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", Game.handleClick(event))
    })
  }
  return {
    render,
  }
})();

const createPlayer = (name, mark) => {
  return {
    name,
    mark
  }
}

const Game = (() => {
  let players = [];
  let currentPlayerIndex;
  let gameOver;

  const start = () => {
    players = [
      createPlayer(document.querySelector('#player1').value, 'X'),
      createPlayer(document.querySelector('#player2').value, 'O')
    ]
    currentPlayerIndex = 0;
    gameOver = false;
    GameBoard.render();
  }
  const handleClick = (event) => {
    console.log(event)
  }
  return {
    start,
    handleClick
  }
})();

const startButton = document.querySelector('#start-btn');
startButton.addEventListener("click", () => {
  console.log('start')
  Game.start();
  console.log('finish')
})


const playerChoosingSquare = (name, mark, index) => {
  //checks if the square container has "X" "O"
  //only fill up the empty square
  //update the divs when player pick the divs
}

/*
const playerChoose = document.querySelector('.square');
  playerChoose.addEventListener("click", () => {
    playerChoosingSquare(mark, index);
    GameBoard.render();
    //gameboard.render at the end to update
  })();
*/

// button on divs to check for 
/*
winning combinations to check every move

[0, 1, 2],
[ 3, 4, 5],
[ 6, 7, 8],
[ 0, 3, 6],
[ 1, 4, 7],
[ 2, 5, 8],
[ 0, 4, 8],
[ 2, 4, 6],

*/

//checks game every move to see who wins
//prevent player from picking taken spots already
//show the result upon game ends

