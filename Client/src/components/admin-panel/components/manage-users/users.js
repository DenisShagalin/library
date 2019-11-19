import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './users.css';
import { loadUsers, updatUserRole } from '../../actions/usersActions';
import { List } from '../../../../common/components/list/list';
import { BooksCell } from '../../../../common/components/list/cells/books-cell';
import { RoleCell } from '../../../../common/components/list/cells/role-cell';

export class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: 'Name', id: 'name', className: 'small-col',
        },
        {
          name: 'Books', id: 'books',  className: 'big-col',
        },
        {
          name: 'Role', id: 'role',  className: 'medium-col',
        },
      ],
    };
  }
  componentDidMount() {
    const { loadUsers } = this.props;
    loadUsers();
  }

  handleChange = (event, user) => {
    const { updatUserRole } = this.props;
    updatUserRole(event.value, user.id);
  }

  render() {
    const { columns } = this.state;
    const { users } = this.props;
    return (
      <div className='users_wrapper'>
        <List
          columns={columns}
          data={users}
          config={{
            'books': { cell: BooksCell },
            'role': {
              cell: RoleCell,
              onChange: this.handleChange,
            },
          }}
        />
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.adminReducer.users,
});

const mapDispatchToProps = {
  loadUsers,
  updatUserRole,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);

