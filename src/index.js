import React from "react";
import ReactDOM from "react-dom";
import GridBlock from "./grid";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      input: "",
      xBlocks: [],
      oBlocks: [],
      itemsList: Array.from(new Array(9), (val, index) => index + 1),
      combos: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 6, 8],
        [3, 6, 9],
        [3, 5, 7],
        [1, 5, 9]
      ]
    };
    this.update = this.update.bind(this);
  }

  update = item => {
    return e => {
      let oWin, xWin;
      e.preventDefault();
      if (
        !this.state.xBlocks.includes(item) &&
        !this.state.oBlocks.includes(item)
      ) {
        this.setState(prevState => ({
          count: prevState.count + 1
        }));

        if (this.state.count % 2 === 0) {
          this.state.xBlocks.push(item);
          this.refs[item].setState({
            input: "X"
          });
          xWin = this.state.combos.some(ar =>
            ar.every(e => this.state.xBlocks.includes(e))
          );
        } else {
          this.state.oBlocks.push(item);
          this.refs[item].setState({
            input: "O"
          });
          oWin = this.state.combos.some(ar =>
            ar.every(e => this.state.oBlocks.includes(e))
          );
        }
        if (oWin) {
          alert("O wins");
        } else if (xWin) {
          alert("X Wins");
        }
      }
    };
  };

  render() {
    const listItems = this.state.itemsList.map(index => (
      <GridBlock
        ref={index}
        input={this.state.input}
        onClick={this.update(index)}
      />
    ));

    return (
      <div className="App">
        <h2> Tic Tac Toe</h2>
        <div className="wrapper">{listItems}</div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
