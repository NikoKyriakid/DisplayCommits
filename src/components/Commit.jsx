import React, { Component } from "react";
import CommitHead from "./CommitHead";
import CommitMessage from "./CommitMessage";
import "./Commit.css";

export default class Commit extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="commit">
        <CommitHead commit={this.props.commit} />
        <hr />
        <CommitMessage message={this.props.commit.body} />
      </div>
    );
  }
}
