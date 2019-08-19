import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Details extends Component {
  constructor() {
    super();
    this.state = {
      WelcomeMessage: "Welcome to the details page, WIP :)"
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        WelcomeMessage: "The best is yet to come!"
      });
    }, 3000);
  }

  render() {
    return (
      <div>
        <h1>{this.state.WelcomeMessage}</h1>
        <Link to="/">Back to home page</Link>
      </div>
    );
  }
}
