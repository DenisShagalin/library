import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BoolCell extends Component {
  render() {
    const { item, column } = this.props;
    const bool = item[column.id];
    return (
      <div className={`list_row_item ${column.className}`}>
        {!!bool ? 'true': 'false'}
      </div>
    );
  }
}

BoolCell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
};
