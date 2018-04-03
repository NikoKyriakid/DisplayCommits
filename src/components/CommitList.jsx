
import React, { Component } from 'react';
import Commit from './Commit';
import './CommitList.css';

export default class CommitList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      commits: []
    }
  }

  componentDidMount() {
    fetch('/data')
      .then(res => res.json())
      .then(res => res.results)
      .then(res => {
        return Object.keys(res).map(k => {
          res[k].id = k;
          return res[k];
        })
      })
      .then(commits => this.setState({ commits: commits }));
  }

  render() {
    return (
      <div className='commit-wrapper'>{this.state.commits.map(commit => <Commit key={commit.id} commit={commit} />)}</div>
    )
  }
}
