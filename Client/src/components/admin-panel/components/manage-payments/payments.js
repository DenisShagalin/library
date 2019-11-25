import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export class Payments extends Component {
  render() {
    return (
      <div className='users_wrapper'>
        1
      </div>
    );
  }
}

Payments.propTypes = {
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.adminReducer.users,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);

