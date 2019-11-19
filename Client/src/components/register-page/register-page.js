import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { registerNewUser } from './actions/registerActions';
import './register-page.css';

export class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Password: '',
      ConfirmPassword: '',
      message: '',
    };
  }

  handleChangeNameOrPassword = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  registerNewUser = () => {
    const { Name, Password, ConfirmPassword } = this.state;
    const { registerNewUser } = this.props;
    let message = '';
    if (Name && Password && ConfirmPassword) {
     if (Password === ConfirmPassword) {
      registerNewUser(Name, Password);
     } else {
        message = 'The values entered Password and Confirm password do not match';
     }
    } else {
        message = 'Please, fill all the required felds';
    }
    this.setState({
      message,
    });
  }

  render() {
    const { message } = this.state;
    return (
      <div className='login-page_container'>
        <div className='register_page_fields'>
          <TextField
            required
            label='Name'
            className='login-page_field'
            type='email'
            name='Name'
            autoComplete='email'
            margin='normal'
            variant='outlined'
            onChange={this.handleChangeNameOrPassword}
          />
          <TextField
            required  
            id='outlined-password-input'
            label='Password'
            className='login-page_field'
            type='Password'
            name='Password'
            autoComplete='current-password'
            margin='normal'
            variant='outlined'
            onChange={this.handleChangeNameOrPassword}
          />
          <TextField
            required
            id='outlined-confirm_password-input'
            label='Confirm Password'
            className='login-page_field'
            type='Password'
            name='ConfirmPassword'
            autoComplete='current-password'
            margin='normal'
            variant='outlined'
            onChange={this.handleChangeNameOrPassword}
          />
          <span className='login-page_container-error'>{message}</span>
        </div>
        <div className='login-page_submit-container'>
          <Button
            variant='outlined'
            color='primary'
            className='login-page_submit-button'
            onClick={this.registerNewUser}
          >
            Register
          </Button>
        </div>
      </div>
    );
  }
}

RegisterPage.propTypes = {
  registerNewUser: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  registerNewUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
