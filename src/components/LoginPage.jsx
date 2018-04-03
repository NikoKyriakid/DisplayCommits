
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import './LoginPage.css';

import loginImage from '../img/avatar2.png';

export default class LoginPage extends Component {

  constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        userName: 'Niko Kyriakid',
      };
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className='login-page'>
        <div className='col-md-4 col-lg-4 col-md-offset-4 col-lg-offset-4'>
          <img src={loginImage} className='user-avatar' alt='Avatar' />
          <h1>
            <span>{this.state.userName}</span>
          </h1>
          <form role='form' onSubmit={this.handleSubmit}>
            <div className='form-content'>
              <div className='form-group'>
                <input type='email' autoFocus className='form-control input-underline input-lg' placeholder='Email' autoComplete='off' />
              </div>
              <div className='form-group'>
                <input type='password' className='form-control input-underline input-lg' placeholder='Password' autoComplete='off' />
              </div>
            </div>
            <button type='submit' className='btn btn-white btn-outline btn-lg'><Link to='/View' className='no-decor'>Login</Link></button>
          </form>
        </div>
      </div>
    )
  }
}



















