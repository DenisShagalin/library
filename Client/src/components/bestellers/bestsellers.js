import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadTopBooks } from '../books/actions/booksActions';

class Bestseleers extends Component {
  componentDidMount() {
    const { loadTopBooks } = this.props;
    loadTopBooks();
  }

  render() {
    return (
      <div>
      kek2
      </div>
    );
  }
}

Bestseleers.propTypes = {
  loadTopBooks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksReducer.books,
});

const mapDispatchToProps = {
  loadTopBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bestseleers);
