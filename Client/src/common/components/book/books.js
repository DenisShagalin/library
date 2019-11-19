import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CustomIcon } from '../icon/icon';
import './book.css';
import png from './BOOK1.png';

export class Book extends Component {
  render() {
    const {
      item,
      title = 'Buy',
      setMarker,
      isMarked,
      onClick,
    } = this.props;
    return (
      <div className='book_wrapper'>
        <CustomIcon
          iconName={`${isMarked ? 'bookmark_marked' : 'bookmark'}`}
          className='book_bookmark'
          onClick={setMarker}
          id={item.id.toString()}
        />
        <div className='book_info'>
          <span>{item.name}</span>
          <span className='book_price'>{item.price + '$'}</span>
          <button className='book_buy' onClick={onClick} value={item.id}>{title}</button>
        </div>
        <img src={png} alt={item.name} />
      </div>
    );
  }
}

Book.propTypes = {
  item: PropTypes.object.isRequired,
  setMarker: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  isMarked: PropTypes.bool,
};