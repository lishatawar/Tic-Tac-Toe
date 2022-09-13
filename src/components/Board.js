import React from 'react';
import Square from './Square';



class Board extends React.Component {
    // Initially started class from here
    // define variables and get parents class props by super method
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         squares: Array(9).fill(null),
    //         xIsNext: true,
    //     }
    // }
    
    // update square status on click of any button
    // toggle users name

    // Render square value
    renderSquare(i) {
      return <Square value={ this.props.squares[i] }  onClick={() => this.props.onClick(i)}/>;
    }
    
    // Render all content 
    render() {
        
        return (
          <div class="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        
        );
    }
    
}

export default Board;