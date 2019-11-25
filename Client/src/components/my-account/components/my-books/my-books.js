import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMyBooks, returnBook } from '../../actions/accountActions';
import { Book } from '../../../../common/components/book/book';

class MyBooks extends Component {
  componentDidMount() {
    const { loadMyBooks, userId } = this.props;
    loadMyBooks(userId);
  }

  handleReturnBook = ({ target }) => {
    const { returnBook, userId, myBooks } = this.props;
    const currentBook = myBooks.find(item => item.book.id === +target.value);
    if (currentBook) {
      const book = {
        bookId: currentBook.book.id,
        amount: currentBook.book.amount,
        price: currentBook.book.price,
        userId,
      };
      returnBook(currentBook.id, book);
    }
  }

  render() {
    const { myBooks } = this.props;
    return (
      <div className='account_wrapper'>
        {myBooks.length ? myBooks.map((item, i) => {
          return (
            <Book
              item={item.book}
              onClick={this.handleReturnBook}
              key={i}
              isMarked
              title='Return'
            />
          );
        }) : 'No Items'}
      </div>
    );
  }
}

MyBooks.propTypes = {
  loadMyBooks: PropTypes.func.isRequired,
  userId: PropTypes.number.isRequired,
  returnBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  myBooks: state.accountReducer.myBooks,
  userId: state.loginReducer.user.id,
});

const mapDispatchToProps = {
  loadMyBooks,
  returnBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBooks);

