
const GameBoard = (() => {
  let gameboard = ["", "", "", "", "", "", "", "", ""]

  const render = () => {
    let boardHTML = "";
    gameboard.forEach((square,index) => {
      boardHTML += `<div class="square" id="square-${index}>${square}</div>`
    })
  }
  document.querySelector('gameboard').innerHTML = boardHTML;

  return {
    render
  }
})();







const startButton = document.querySelector('#start-btn');
startButton.addEventListener("click", () => {
  Game.start

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

