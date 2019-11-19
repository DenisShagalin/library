import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class BooksCell extends Component {
  render() {
    const { item, column } = this.props;
    const books = item[column.id];
    return (
      <div className={`list_row_item ${column.className}`}>
        {books.map(book =><span key={book.id}>{book.name}</span>)}
      </div>
    );
  }
}

BooksCell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
};
