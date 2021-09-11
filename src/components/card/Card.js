import React, { Component } from "react";
import "./index.css";

class Card extends Component {
  render() {
    return (
      <div className="github-profile">
        <img
          style={{ width: "75px" }}
          alt="dd"
          src={this.props.avatar_url}
        ></img>
        <div className="info">
          <div className="name" style={{ fontSize: "125%" }}>
            {this.props.name}
          </div>
          <div className="company">{this.props.company}</div>
        </div>
      </div>
    );
  }
}

export default Card;
