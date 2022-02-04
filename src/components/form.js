import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Name: "", Phone: "", Email: "" };
    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange1(event) {
    this.setState({
      Name: event.target.value.toUpperCase(),
    });
  }

  handleChange2(event) {
    this.setState({
      Phone: event.target.value,
    });
  }

  handleChange3(event) {
    this.setState({
      Email: event.target.value,
    });
  }

  handleSubmit() {
    console.log("hello");
    alert(
      "Please confirm your details \n Name: " +
        this.state.Name +
        " \n Phone: " +
        this.state.Phone +
        " \n Email: " +
        this.state.Email
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.Name}
            onChange={this.handleChange1}
          />
          <br />
          Phone:
          <input
            type="Number"
            value={this.state.Phone}
            onChange={this.handleChange2}
          />
          <br />
          Email:
          <input
            type="email"
            value={this.state.Email}
            onChange={this.handleChange3}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Form;
