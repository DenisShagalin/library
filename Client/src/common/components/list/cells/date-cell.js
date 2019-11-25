import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export class DateCell extends Component {
  render() {
    const { item, column } = this.props;
    const value = item[column.id];
    return (
      <div className={`list_row_item ${column.className}`}>
        {moment(value).format('YYYY-MM-DD HH-mm')}
      </div>
    );
  }
}

DateCell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
};
