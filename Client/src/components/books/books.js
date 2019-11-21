import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadBooks, buyBook } from './actions/booksActions';
import { signOut } from '../login/actions/loginActions';
import { Book } from '../../common/components/book/books';
import { setBooksInAccount } from '../my-account/actions/accountActions';
import { getMarkedBooks } from '../../utils/getMarkedBooks';
import './books.css'

export class Books extends Component {
  componentDidMount() {
    const { loadBooks } = this.props;
    loadBooks();
  }

  handleChooseBook = (event) => {
    const { setBooksInAccount, choosenBooks } = this.props;
    const targetId = event.currentTarget.id;
    const books = getMarkedBooks(targetId, choosenBooks);
    setBooksInAccount(books);
  };

  handleBuy = ({ target }) => {
    const { buyBook, userId, books } = this.props;
    const book = books.find(item => item.id === +target.value);
    buyBook(userId, book);
  }

  render() {
    const { books, choosenBooks } = this.props;
    return (
      <div className='books'>
        {books.map((item, i) => {
          return (
            <Book
              item={item}
              setMarker={this.handleChooseBook}
              onClick={this.handleBuy}
              key={i}
              isMarked={choosenBooks.includes(item.id)}
              showAmount
            />
          );
        })}
      </div>
    );
  }
} 

Books.propTypes = {
  loadBooks: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
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
  loadBooks,
  signOut,
  setBooksInAccount,
  buyBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);

