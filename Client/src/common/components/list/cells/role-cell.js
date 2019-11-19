import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from '../../select/select';

const options = [
  { id: 1, name: 'Admin' },
  { id: 2, name: 'User' },
];

export class RoleCell extends Component {
  handleChange = ({ target }) => {
    const { item, column, config } = this.props;
    const onChange = config[column.id].onChange;
    onChange(target, item);
  }

  render() {
    const { item, column } = this.props;
    const role = item[column.id];
    return (
      <div className={`list_row_item ${column.className}`}>
        <Select
          value={role.id}
          selectOptions={options}
          onChange={this.handleChange}
          inputProps={{
            id: 'role',
          }}
          formClassName='role_cell-select'
        />
      </div>
    );
  }
}

RoleCell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};
