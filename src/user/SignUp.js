import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import UserStore from '../stores/UserStore';
import InputField from '../components/InputField';
import SubmitButton from '../components/SubmitButton';

class SignUp extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      buttonDisabled: false
    }
  }

  setInputValue(property, val){
    val = val.trim();
    if(val.length > 12){
      return;
    }
    this.setState({
      [property]: val
    });
  }

  async InsertData(){
    alert("congrats, " + this.state.username);
  }

  render(){
    return (
      <div className="topDiv">
          <div className="loginForm">
            Sign Up
            <InputField
              type='text'
              placeholder='Username'
              value={this.state.username ? this.state.username : ''}
              onChange= { (val) => this.setInputValue('username', val) }
            />
            <InputField
              type='password'
              placeholder='Password'
              value={this.state.password ? this.state.password : ''}
              onChange= { (val) => this.setInputValue('password', val) }
            />
            <InputField
              type='password'
              placeholder='Confirm Password'
              value={this.state.password ? this.state.confirmPassword : ''}
              onChange= { (val) => this.setInputValue('confirmPassword', val) }
            />
            <SubmitButton
              text='Sign Up'
              disabled={this.state.buttonDisabled}
              onClick={ () => this.InsertData() }
            />
          </div>
      </div>
    );
  }
  
}

export default SignUp;