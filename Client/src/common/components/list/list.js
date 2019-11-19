import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row } from './row';
import { Titles } from './titles';
import './list.css';

export class List extends Component {
  render() {
    const {
      data,
      columns,
      config,
    } = this.props;
    return (
      <div className='list_container'>
        <Titles columns={columns}/>
        <div className='list_container_row'>
          {data.map((item, i) => <Row item={item} config={config} columns={columns} key={i} />)}
        </div>
      </div>
    )
  }
}

List.propTypes = {
  data: PropTypes.array,
  config: PropTypes.object,
  columns: PropTypes.array,
};
