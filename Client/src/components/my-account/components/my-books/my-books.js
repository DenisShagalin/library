import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadMyBooks, returnBook } from '../../actions/accountActions';
import { Book } from '../../../../common/components/book/books';

class MyBooks extends Component {
  componentDidMount() {
    const { loadMyBooks, userId } = this.props;
    loadMyBooks(userId);
  }

  handleReturnBook = ({ target }) => {
    const { returnBook, userId } = this.props;
    returnBook(+target.value, userId);
  }

  render() {
    const { myBooks } = this.props;
    return (
      <div className='account_wrapper'>
        {myBooks.map((item, i) => {
          return (
            <Book
              item={item}
              onClick={this.handleReturnBook}
              key={i}
              isMarked
              title='Return'
            />
          );
        })}
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

