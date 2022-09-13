import React from 'react';
import Board from './Board';

// calcutae matrix winner if number has been same in these three matrix
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        stepNumber: 0,
        xIsNext: true,
      };
    }
    
    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    restartGame(step){
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
    }

    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? '🐢' : '🐇';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }
   
    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      // console.log('current squares');
      // console.log(current.squares);
      const winner = calculateWinner(current.squares);
       
      // todo list 
      // const moves = history.map((step, move) => {
      //   const desc = move ?
      //     'Go to move #' + move :
      //     'Go to game start';
      //   return (
      //     <li>
      //       <button key={move} onClick={() => this.jumpTo(move)}>{desc}</button>
      //     </li>
      //   );
      // });

      // check if we any winner or not
      // let status;
      // if(winner){
      //     status = 'Winner'+winner+'</span>'; 
      // }else{
      //     status = 'Next Player: '+ (this.state.xIsNext ? '🐢' : '🐇');
      // }
      
      return (
        <div className="game">
          <h2>{ (winner) ? [<span>Winner: {winner}</span>] : ('Next Player: '+ (this.state.xIsNext ? '🐢' : '🐇')) }</h2><br/>
          <div className="game-board">
            <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          </div>
          <div className="game-info">
            <a href='#' className='game-restart-btn' onClick={ () => this.restartGame(0) }>Restart</a>
         </div>
        </div>
      );
    }
  }

  export default Game