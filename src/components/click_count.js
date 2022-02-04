import React from "react";

class Click extends React.Component {
  constructor(props) {
    super(props);
    this.state = { click: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ click: this.state.click + 1 });
  }

  render() {
    return (
      <div>
        <h1>You clicked {this.state.click}</h1>
        <button onClick={this.handleClick}>Click Me</button>
        {/* <button onClick={() => this.setState({ click: this.state.click + 1 })}>
          Click Me
        </button> */}
      </div>
    );
  }
}

export default Click;
