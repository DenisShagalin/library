import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import {
  Route, Redirect, Switch, Router,
} from 'react-router-dom';
import history from '../utils/history';
import { Header } from '../common/components/header/header';
import Books from './books/books';
import Bestseleers from './bestellers/bestsellers';
import Login from './login/login';
import RegisterPage from './register-page/register-page';
import { Admin } from './admin-panel/admin';
import { MyAccount } from './my-account/my-account';
import { signOut } from './login/actions/loginActions';

export class App extends Component {
  render() {
    const { user, signOut, isAdmin } = this.props;
    const isLogged = !!user.name;
    return (
      <Router history={history}>
        <React.Fragment>
          {isLogged ? (
            <div className='main-wrapper'>
              <Header signOut={signOut} isAdmin={isAdmin} />
              <Switch>
                <Route exact path='/books' component={Books} />
                <Route path='/bestsellers' component={Bestseleers} />
                <Route path='/my-account' component={MyAccount} />
                { isAdmin && <Route path='/admin' component={Admin} />}
                <Redirect to='/books' />
              </Switch>
            </div>
          ) : (
              <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/register' component={RegisterPage} />
                <Redirect to='/' />
              </Switch>
            )}
        </React.Fragment>
      </Router >
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.loginReducer.user,
  isAdmin: state.loginReducer.isAdmin,
});

const mapDispatchToProps = {
  signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  user: PropTypes.object.isRequired,
  isAdmin: PropTypes.bool.isRequired,
};
