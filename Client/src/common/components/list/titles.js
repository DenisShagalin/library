import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './titles.css';

export class Titles extends Component {
  render() {
    const {
      columns,
    } = this.props;
    return (
      <div className='list_titles'>
        {columns.map((column) => {
          return (
            <div
              className='list_titles-row_container'
              key={column.id}
            >
              <div className={`list_titles-row ${column.className ? column.className : ''}`}>
                <span>{column.name}</span>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

Titles.propTypes = {
  columns: PropTypes.array,
};

