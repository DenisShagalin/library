import React, { Component, Fragment } from 'react';
import {
  Route, Redirect, Switch, Link,
} from 'react-router-dom';
import MyMarkers from './components/my-markers/my-markers';
import MyBooks from './components/my-books/my-books';
import './my-account.css';

export class MyAccount extends Component {
  render() {
    return (
      <Fragment>
        <div className='links_wrapper-account'>
          <Link to='/my-account/my-markers'><button>My markers</button></Link>
          <Link to='/my-account/my-books'><button>Reading now</button></Link>
        </div>
        <Switch>
          <Route exact path='/my-account/my-markers' component={MyMarkers} />
          <Route exact path='/my-account/my-books' component={MyBooks} />
          <Redirect to='/my-account/my-markers' />
        </Switch>
      </Fragment>
    );
  }
}


