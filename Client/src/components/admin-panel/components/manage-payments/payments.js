import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from '../../../../common/components/list/list';
import { DateCell } from '../../../../common/components/list/cells/date-cell';
import { loadPayments } from '../../actions/paymentsActions';
import { loadUsers } from '../../actions/usersActions';
import Select from '../../../../common/components/select/select';

export class Payments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: 'User', id: 'user', className: 'small-col',
        },
        {
          name: 'Book', id: 'book', className: 'big-col',
        },
        {
          name: 'Date', id: 'date', className: 'medium-col',
        },
        {
          name: 'Payment', id: 'payment', className: 'medium-col',
        },
      ],
      usersId: '',
    };
  }

  componentDidMount() {
    const { loadPayments, loadUsers } = this.props;
    loadPayments();
    loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    const { loadPayments } = this.props;
    const { usersId } = this.state;
    if (prevState.usersId !== usersId) {
    const { usersId } = this.state;
      loadPayments(usersId);
    }
  }

  handleChange = ({ target }) => {
    this.setState({
      usersId: target.value,
    });
  }

  render() {
    const { payments, users } = this.props;
    const { columns, usersId } = this.state;
    return (
      <div className='users_wrapper'>
        <Select
          value={usersId}
          selectOptions={users}
          onChange={this.handleChange}
          placeholder='Choose User'
          inputProps={{ id: 'user' }}
          formClassName='role_cell-select'
        />
        <List
          columns={columns}
          data={payments}
          config={{
            'date': {
              cell: DateCell,
            }
          }}
        />
      </div>
    );
  }
}

Payments.propTypes = {
  payments: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  payments: state.adminReducer.payments,
  users: state.adminReducer.users,
});

const mapDispatchToProps = {
  loadPayments,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);

