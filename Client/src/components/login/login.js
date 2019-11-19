import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { signinRequest } from './actions/loginActions';
import './login.css';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: '',
      Password: '',
    };
  }

  handleChangeNameOrPassword = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSignIn = () => {
    const { Name, Password } = this.state;
    const { signinRequest } = this.props;
    signinRequest(Name, Password);
  }

  render() {
    const { message } = this.props;

    return (
      <div className='login-page_container'>
        <div className='login_page_fields'>
          <TextField
            error={!!message}
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
            error={!!message}
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
          <span className='login-page_container-error'>{message}</span>
        </div>
        <div className='login-page_submit-container'>
          <Button
            variant='outlined'
            color='primary'
            className='login-page_submit-button'
            onClick={this.handleSignIn}
          >
            Log In
          </Button>
          <Link to='/register'>
            <Button
              variant='outlined'
              color='primary'
              className='login-page_register-button'
            >
              Register
          </Button>
          </Link>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  signinRequest: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  message: state.loginReducer.message,
});

const mapDispatchToProps = {
  signinRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
