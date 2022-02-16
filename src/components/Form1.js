import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", name: "", age: null, address: "", phoneNo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    const { email, name, age, address, phoneNo } = this.state;
    event.preventDefault();
    alert(`
    ____Your Details____\n
    Email : ${email}
    Name : ${name}
    Age : ${age}
    Address : ${address}
    Phone No : ${phoneNo}
    `);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.value);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Age</label>
          <input
            name="age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            name="address"
            placeholder="Address"
            value={this.state.address}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <label>Phone Number</label>
          <input
            name="phoneNo"
            placeholder="Phone No"
            value={this.state.phoneNo}
            onChange={this.handleChange}
          />
        </div>
        <div>
          <button>Create Account</button>
        </div>
      </form>
    );
  }
}

export default Form;
