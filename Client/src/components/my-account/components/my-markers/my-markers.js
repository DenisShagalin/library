import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setBooksInAccount } from '../../actions/accountActions';
import { Book } from '../../../../common/components/book/books';
import { getMarkedBooks } from '../../../../utils/getMarkedBooks';
import { buyBook } from '../../../books/actions/booksActions';

class MyMarkers extends Component {
  handleChooseBook = (event) => {
    const { setBooksInAccount, choosenBooks } = this.props;
    const targetId = event.currentTarget.id;
    const books = getMarkedBooks(targetId, choosenBooks);
    setBooksInAccount(books);
  }

  handleBuy = (event) => {
    const {
      buyBook, userId, choosenBooks, setBooksInAccount, books,
    } = this.props;
    const updateMarkedBooks = getMarkedBooks(+event.target.value, choosenBooks);
    const book = books.find(item => item.id === +event.target.value);
    setBooksInAccount(updateMarkedBooks);
    buyBook(userId, book);
  }

  render() {
    const { books, choosenBooks } = this.props;
    return (
      <div className='account_wrapper'>
        {books.map((item, i) => {
          if (choosenBooks.includes(item.id)) {
            return (
              <Book
                item={item}
                setMarker={this.handleChooseBook}
                onClick={this.handleBuy}
                key={i}
                isMarked
              />
            );
          }
          return null;
        })}
      </div>
    );
  }
}

MyMarkers.propTypes = {
  books: PropTypes.array.isRequired,
  choosenBooks: PropTypes.array.isRequired,
  setBooksInAccount: PropTypes.func.isRequired,
  buyBook: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
  choosenBooks: state.accountReducer.choosenBooks,
  userId: state.loginReducer.user.id,
});

const mapDispatchToProps = {
  setBooksInAccount,
  buyBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyMarkers);
