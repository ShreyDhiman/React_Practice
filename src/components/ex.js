import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome to my website",
    };
  }

  updateMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.updateMessage()}>subscribe</button>
      </div>
    );
  }
}
export default Message;
