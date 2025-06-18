let current = "X";
let gameOver = false;

let board = ["","","","","","","","",""];

function makeMove(cell,index)
{
  if(cell.innerText === "" && !gameOver)
  {
    board[index] = current;
    cell.innerText = current;
    
    if(checkWin())
    {
      document.getElementById('status').innerText = "Player  " + current + " wins!";
      gameOver = true;  
    }
    else if(!board.includes(""))
    {
      document.getElementById('status').innerText = "Its a draw!"; 
      gameOver = true; 
    }
    else
    {
      current = current === "X" ? "O" : "X";
      document.getElementById("status").innerText = "Player " + current + "'s Turn";  
    }
  }  
}

function checkWin()
{
  const wins = [
   [0,1,2],[3,4,5],[6,7,8],       //  Rows
   [0,3,6],[1,4,7],[2,5,8],      //   Columns
   [0,4,8],[2,4,6]               //   Diagonals    
  ];

  return wins.some( pattern =>
  {
    const[a,b,c] = pattern;
    return board[a] && board[a] === board[b] && board[b] === board[c];
  });
}

function resetGame()
{
  board = ["","","","","","","","",""];  
  current = "X";
  gameOver = false;
  document.getElementById("status").innerText = "Player X's Turn";
  const cells = document.querySelectorAll("td");
  cells.forEach(cell => cell.innerText = "");
}
