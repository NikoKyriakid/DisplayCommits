import React, { Component } from 'react';
import HDate from 'human-date';
import './CommitHead.css';

export default class CommitHead extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className='clearfix'>
          <img className='avatar' src={this.props.commit.author.avatarUrl} />
          <div className='sideText'>{this.props.commit.title}
            {this.props.commit.tags.map(tag => <span key={tag} className='tag'>{tag}</span>)}
            <div className='small'>
              Created on { HDate.prettyPrint(new Date(this.props.commit.timestamp)) } by {this.props.commit.author.username}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
