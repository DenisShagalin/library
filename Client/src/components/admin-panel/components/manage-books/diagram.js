import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PieChart from 'react-minimal-pie-chart';

const colors = {
  0: '#228B22',
  1: '#E38627',
  2: '#C13C37',
  3: '#6A2135',
  4: '#F08080',
  5: '#FF69B4',
  6: '#FF7F50',
  7: '#FFA500',
  8: '#FFD700',
  9: '#FFFFE0',
};

export class Diagram extends Component {
  getCorrectDataForRenderChart = (data) => {
    return data.reduce((acc, item, i) => {
      if (item.counter > 0) {
        acc.push({
          title: item.name,
          value: item.counter,
          color: colors[i],
        });
      }
      return acc;
    }, [])
  }

  renderLabel = (item, a) => {
    const { data } = this.props;
    const index = item.dataIndex;
    return `${data[index].name} (${data[index].counter})`;
  }

  render() {
    const { data } = this.props;
    return (
      <div className='diagram-container'>
        <PieChart
          data={this.getCorrectDataForRenderChart(data)}
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
