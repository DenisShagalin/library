import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.css';

export class Header extends Component {
  render() {
    const { signOut, isAdmin } = this.props;
    return (
      <div className='header'>
        <div className='header_controls'>
          <button onClick={signOut}>Log out</button>
          <Link to='/my-account'>
            <button>My account</button>
          </Link>
          {isAdmin &&
            <Link to='/admin/users'>
              <button>Admin panel</button>
            </Link>
          }
        </div>
        <div className='header_main-buttons'>
          <Link to='/books'><button>Books</button></Link>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  signOut: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};
