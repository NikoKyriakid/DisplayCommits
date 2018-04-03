import React, { Component } from "react";

export default class CommitMessage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="message">{this.props.message}</div>;
  }
}
