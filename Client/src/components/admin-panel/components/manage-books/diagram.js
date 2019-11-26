import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-minimal-pie-chart';

export class Diagram extends Component {
  renderLabel = (item, a) => {
    const { data } = this.props;
    const index = item.dataIndex;
    return `${data[index].title} (${data[index].value})`;
  }

  render() {
    const { data } = this.props;
    return (
      <div className='diagram-container'>
        <PieChart
          data={data}
          label={this.renderLabel}
          labelPosition={50}
          labelStyle={{
            fill: '#121212',
            fontFamily: 'sans-serif',
            fontSize: '3px'
          }}
        />;
      </div>
    );
  }
}

Diagram.propTypes = {
  data: PropTypes.array.isRequired,
};
