
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import loginImage from '../img/avatar2.png';
import './LoginPage.css';


export default class LoginPage extends Component {

  constructor(props) {
      super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
      this.onChange = this.onChange.bind(this);

      this.state = {
        userName: 'Niko Kyriakidis',
        email: '',
        password: ''
      };
  }

  handleSubmit(event) {
    event.preventDefault();

    const state = this.state
    const { userName, email, password } = state;

    axios.post('/data', { userName, email, password })
      .then((result) => {
        state.loggedIn = true;
        const res = result.data.results;
        state.result = Object.keys(res).map(k => {
          res[k].id = k;
          return res[k];
        })

        this.setState(state);
      });
  }

  onChange(e) {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {

    if (this.state.loggedIn === true) {
      return <Redirect to={{
          pathname: '/View',
          state: { data: this.state.result }
        }}/>
    }

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
                <input type='email' name='email' onChange={this.onChange} autoFocus className='form-control input-underline input-lg' placeholder='Email' autoComplete='off' />
              </div>
              <div className='form-group'>
                <input type='password' name='password' onChange={this.onChange} className='form-control input-underline input-lg' placeholder='Password' autoComplete='off' />
              </div>
            </div>
            <button type='submit' className='btn btn-white btn-outline btn-lg'>Login</button>
          </form>
        </div>
      </div>
    )
  }
}



















