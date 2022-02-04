import React from "react";

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value1: "", op: "", value2: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //   OnChange Event handler
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(Number(this.state.value1));
  }

  //   onSubmit Event handler
  handleSubmit() {
    if (this.state.op === "add") {
      var result = parseInt(this.state.value1) + parseInt(this.state.value2);
      alert(
        "The addition of " +
          this.state.value1 +
          " and " +
          this.state.value2 +
          " is " +
          result
      );
    } else if (this.state.op === "minus") {
      //For Subtraction
      var result = this.state.value1 - this.state.value2;

      alert(
        "The Difference of " +
          this.state.value1 +
          " and " +
          this.state.value2 +
          " is " +
          result
      );
    } else if (this.state.op === "divide") {
      // For division
      var result = this.state.value1 / this.state.value2;
      alert(
        "The division of " +
          this.state.value1 +
          " and " +
          this.state.value2 +
          " is " +
          result
      );
    } else if (this.state.op === "multiply") {
      //for multiplication
      var result = this.state.value1 * this.state.value2;
      alert(
        "The product of " +
          this.state.value1 +
          " and " +
          this.state.value2 +
          " is " +
          result
      );
    } else alert('Try again with "add","minus","divide" or "multiply" ');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Value:
          <input
            type="number"
            name="value1"
            value1={this.state.value1}
            onChange={this.handleChange}
          />
          <br />
        </label>
        <label>
          Operation:
          <input
            type="text"
            name="op"
            op={this.state.op || ""}
            onChange={this.handleChange}
          />
          <br />
        </label>
        <label>
          Other Value:
          <input
            type="number"
            name="value2"
            value2={this.state.value2 || ""}
            onChange={this.handleChange}
          />
          <br />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default MyForm;
