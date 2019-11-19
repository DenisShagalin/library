import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

export class TextFieldCell extends Component {
  constructor(props) {
    super(props);
    const { item, column } = this.props;
    this.state = {
      value: item[column.id],
    };
  }
  onChange = ({ target }) => {
    this.setState({
      value: target.value,
    });
  }

  onBlur = () => {
    const { item, column, config } = this.props;
    const { value } = this.state;
    const onChange = config[column.id].onChange;
    onChange(value, item, column.id);
  }

  render() {
    const { column, config } = this.props;
    const { value } = this.state;
    return (
      <div className={`list_row_item ${column.className}`}>
        <TextField
          className='text_field-cell'
          value={value}
          onChange={this.onChange}
          onBlur={this.onBlur}
          type={config[column.id].type}
        />
      </div>
    );
  }
}

TextFieldCell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
  config: PropTypes.object.isRequired,
};