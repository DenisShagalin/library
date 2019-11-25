import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from '../../../../common/components/list/list';
import { DateCell } from '../../../../common/components/list/cells/date-cell';
import { loadPayments } from '../../actions/paymentsActions';

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
    };
  }

  componentDidMount() {
    const { loadPayments } = this.props;
    loadPayments();
  }

  render() {
    const { payments } = this.props;
    const { columns } = this.state;
    return (
      <div className='users_wrapper'>
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
});

const mapDispatchToProps = {
  loadPayments,
};

export default connect(mapStateToProps, mapDispatchToProps)(Payments);

