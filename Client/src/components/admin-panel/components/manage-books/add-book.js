import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './add-book.css';

export class AddBook extends Component {
  render() {
    const {
      onCancel,
      onSave,
      onChange,
      isDisabled,
    } = this.props;
    return (
      <div className='add_book-container'>
        <div className='add_book-small_field'>
          <TextField
            label='Name'
            className='add_book_field'
            name='name'
            onChange={onChange}
          />
          <TextField
            label='Price'
            className='add_book_field'
            name='price'
            type='number'
            onChange={onChange}
          />
          <TextField
            label='Amount'
            className='add_book_field'
            name='amount'
            type='number'
            onChange={onChange}
          />
        </div>
        <div className='add_book-big_field'>
          <TextField
            label='Description'
            className='add_book_description'
            name='description'
            onChange={onChange}
          />
        </div>
        <div className='add_book-btns_field'>
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onSave} className={`${isDisabled ? 'btn-disabled' : ''}`}>Save</button>
        </div>
      </div>
    );
  }
}