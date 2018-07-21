import React from "react";
import "./styles.css";

class GridBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
  }

  render() {
    return (
      <div onClick={this.props.onClick}>
        <span className="input">
          {this.state.input}
        </span>
      </div>
    );
  }
}

export default GridBlock;
