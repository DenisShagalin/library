import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadBooks, updateBook, createNewBook, loadTopBooks } from '../../actions/booksActions';
import { List } from '../../../../common/components/list/list';
import { TextFieldCell } from '../../../../common/components/list/cells/text_field-cell';
import { AddBook } from './add-book';
import { Diagram } from './diagram';

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
          name: 'Amount', id: 'amount',  className: 'medium-col',
        },
      ],
      newBook: {
        name: '',
        price: null,
        description: '',
        amount: null,
      },
      showPieChart: false,
    };
  }

  componentDidMount() {
    const { loadBooks, loadTopBooks } = this.props;
    loadBooks();
    loadTopBooks();
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

  toogleDiagram = () => {
    const { showPieChart } = this.state;
    this.setState({
      showPieChart: !showPieChart,
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
    if (newBook.name && newBook.price && newBook.amount) {
      createNewBook(newBook);
      this.toogleAddBookComponent();
    }
  }

  render() {
    const { columns, showAddBookComponent, newBook, showPieChart } = this.state;
    const { books, diagramData } = this.props;
    return (
      <div className='users_wrapper'>
        {showAddBookComponent && (
          <AddBook
            onCancel={this.toogleAddBookComponent}
            onChange={this.onHandleChangeNewBook}
            onSave={this.handleSaveNewBook}
            isDisabled={!newBook.name || !newBook.price || !newBook.amount}
          />
        )}
        {showPieChart && (
          <Diagram
            data={diagramData}
          />
        )}
        <button onClick={this.toogleAddBookComponent}>Add new book</button>
        <button onClick={this.toogleDiagram}>{showPieChart ? 'Hide Diagram' : 'Show Diagram'}</button>
        <List
          columns={columns}
          data={books}
          config={{
            'amount': {
              cell: TextFieldCell,
              onChange: this.handleChangeBook,
              type: 'number',
            },
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
  diagramData: state.adminReducer.diagramData,
});

const mapDispatchToProps = {
  loadBooks,
  updateBook,
  createNewBook,
  loadTopBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(Books);

