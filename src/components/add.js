import React from "react";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value1: "", value2: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({
  //       value1: event.target.value,
  //       value2: event.target.value,
  //     });
  //     console.log(this.state.value1);
  //   }
  handleChange(event) {
    this.setState({
      value1: event.target.value,
    });
    console.log(this.state.value1);
  }
  handleChange1(event) {
    this.setState({
      value2: event.target.value,
    });
    console.log(this.state.value2);
  }

  handleClick() {
    console.log(this.state.value1);
    alert(this.state.value1 + " " + this.state.value2);
  }

  render() {
    return (
      <form onSubmit={this.handleClick}>
        <label>
          First Value:
          <input
            type="text"
            value1={this.state.value1}
            // onChange={() => this.handleChange()}
            onChange={this.handleChange}
          />
        </label>
        <br />
        <label>
          Second Value:
          <input
            type="text"
            value2={this.state.value2}
            onChange={this.handleChange1}
          />
        </label>
        <br />
        <input type="submit" value="submit" />
      </form>
    );
  }
}

export default Add;
