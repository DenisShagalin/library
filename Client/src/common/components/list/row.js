import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './row.css';

export class Row extends Component {
  renderCustomCell = (CustomCell, column) => {
    return <CustomCell {...this.props} column={column} key={Math.random()} />;
  }

  render() {
    const {
      item,
      columns,
      config,
    } = this.props;
    return (
      <div className='list_row'>
        {columns.map((column, i) => {
          return config && config[column.id] ? (
            this.renderCustomCell(config[column.id].cell, column)
          ) : (
              <div
                className={`list_row_item ${column.className}`}
                key={i}
              >
                <span>
                  {item[column.id]}
                </span>
              </div>
            )
        })}
      </div>
    )
  }
}

Row.propTypes = {
  item: PropTypes.object,
  columns: PropTypes.array,
  config: PropTypes.object,
};
