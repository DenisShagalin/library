import React, { Component, Fragment } from 'react';
import {
  Route, Redirect, Switch, Link,
} from 'react-router-dom';
import Users from './components/manage-users/users';
import Books from './components/manage-books/books';
import './admin.css';

export class Admin extends Component {
  render() {
    return (
      <Fragment>
        <div className='links_wrapper'>
          <Link to='/admin/users'><button>Users</button></Link>
          <Link to='/admin/books'><button>Books</button></Link>
        </div>
        <Switch>
          <Route exact path='/admin/users' component={Users} />
          <Route path='/admin/books' component={Books} />
          <Redirect to='/admin/users' />
        </Switch>
      </Fragment >
    );
  }
}
