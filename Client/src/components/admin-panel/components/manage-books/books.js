import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadBooks, updateBook, createNewBook } from '../../actions/booksActions';
import { List } from '../../../../common/components/list/list';
import { BoolCell } from '../../../../common/components/list/cells/bool-cell';
import { TextFieldCell } from '../../../../common/components/list/cells/text_field-cell';
import { AddBook } from './add-book';

export class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAddBookComponent: false,
      columns: [
        {
          name: 'Name', id: 'name', className: 'small-col',
        },
        {
          name: 'Description', id: 'description',  className: 'big-col',
        },
        {
          name: 'Price', id: 'price',  className: 'medium-col',
        },
        {
          name: 'Occupied', id: 'occupied',  className: 'medium-col',
        },
      ],
      newBook: {
        name: '',
        price: null,
        description: '',
      }
    };
  }

  componentDidMount() {
    const { loadBooks } = this.props;
    loadBooks();
  }

  handleChangeBook = (value, book, cell) => {
    const { updateBook } = this.props;
    const updatedBook = {
      ...book,
      [cell]: value,
    };
    updateBook(updatedBook);
  }

  toogleAddBookComponent = () => {
    const { showAddBookComponent } = this.state;
    this.setState({
      showAddBookComponent: !showAddBookComponent,
    });
  }
  
  onHandleChangeNewBook = ({ target }) => {
    const { newBook } = this.state;
    this.setState({
      newBook: {
        ...newBook,
        [target.name]: target.value,
      },
    });
  }

  handleSaveNewBook = () => {
    const { newBook } = this.state;
    const { createNewBook } = this.props;
    if (newBook.name && newBook.price) {
      createNewBook(newBook);
      this.toogleAddBookComponent();
    }
  }

  render() {
    const { columns, showAddBookComponent, newBook } = this.state;
    const { books } = this.props;
    return (
      <div className='users_wrapper'>
        {showAddBookComponent && (
          <AddBook
            onCancel={this.toogleAddBookComponent}
            onChange={this.onHandleChangeNewBook}
            onSave={this.handleSaveNewBook}
            isDisabled={!newBook.name || !newBook.price}
          />
        )}
        <button onClick={this.toogleAddBookComponent}>Add new book</button>
        <List
          columns={columns}
          data={books}
          config={{
            'occupied': { cell: BoolCell },
            'price': {
              cell: TextFieldCell,
              onChange: this.handleChangeBook,
              type: 'number',
            },
            'name': {
              cell: TextFieldCell,
              onChange: this.handleChangeBook,
              type: 'text',
            },
            'description': {
              cell: TextFieldCell,
              onChange: this.handleChangeBook,
              type: 'text',
            },
          }}
        />
      </div>
    );
  }
}

Books.propTypes = {
  loadBooks: PropTypes.func.isRequired,
  updateBook: PropTypes.func.isRequired,
  createNewBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.adminReducer.books,
});

const mapDispatchToProps = {
  loadBooks,
  updateBook,
  createNewBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);

