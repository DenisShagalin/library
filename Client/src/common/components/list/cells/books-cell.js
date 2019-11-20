import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BooksCell extends Component {
  render() {
    const { item, column } = this.props;
    const books = item[column.id];
    const renderedValue = books.length && books.reduce((acc, item) => {
      acc.push(item.book.name);
      return acc;
    }, []);

    return (
      <div className={`list_row_item ${column.className}`}>
        {renderedValue.length && renderedValue.join(', ')}
      </div>
    );
  }
}

BooksCell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
};
