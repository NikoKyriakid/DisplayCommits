import React, { Component } from "react";
import Page from "./Page";
import LoginPage from "./LoginPage";
import CommitList from "./CommitList";
import "normalize.css";

import { Switch, Route } from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Page>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/View" component={CommitList} />
        </Switch>
        {/* <LoginPage userName={userName}/> */}
      </Page>
    );
  }
}
