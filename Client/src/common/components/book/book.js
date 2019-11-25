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
      showAmount,
    } = this.props;
    const isDisabled = showAmount && item.amount === 0;
    return (
      <div className='book_wrapper'>
        {!isDisabled && <CustomIcon
          iconName={`${isMarked ? 'bookmark_marked' : 'bookmark'}`}
          className='book_bookmark'
          onClick={setMarker}
          id={item.id.toString()}
        />}
        <div className='book_info'>
          <span>{item.name}</span>
          <span className='book_price'>{item.price + '$'}</span>
          {!isDisabled && <button className='book_buy' onClick={onClick} value={item.id}>{title}</button>}
          {showAmount && <span className='book_amount'>amount: {item.amount}</span>}
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