import React, { Component } from "react";
import "./index.css";

class Form extends Component {
  state = {
    userName: "",
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    console.log(this.state.userName);
    const response = await fetch(
      `https://api.github.com/users/${this.state.userName}`
    );
    const json = await response.json();
    this.props.onSubmit(json);
    this.setState({ userName: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="github username"
            value={this.state.userName}
            required
            onChange={(event) =>
              this.setState({ userName: event.target.value })
            }
          ></input>
          <button>Add card</button>
        </form>
      </div>
    );
  }
}

export default Form;
