import React, { Component } from "react";
import "./Page.css";

export default class Page extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="ui-view">{this.props.children}</div>;
  }
}
