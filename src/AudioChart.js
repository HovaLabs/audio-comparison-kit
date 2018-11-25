import React from 'react';
import { Line } from 'react-chartjs-2';

const generateChartOptions = (title) => ({
  maintainAspectRatio: false,
  title: {
    display: true,
    text: title
  },
  scales: {
    xAxes: [
      {
        type: 'logarithmic',
        position: 'bottom',
        ticks: {
          min: 102,
          max: 18542,
          userCallback: function(tick) {
            var remain = tick / (Math.pow(10, Math.floor(Math.log10(tick))));
            if (remain === 1 || remain === 2 || remain === 5) {
              return tick.toString() + 'Hz';
            }
            return '';
          },
        },
        scaleLabel: {
          labelString: 'Frequency',
          display: true,
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        ticks: {
          min: -30,
          max: 0,
          userCallback: function(tick) {
            return tick.toString() + 'dB';
          }
        },
        scaleLabel: {
          labelString: 'Power',
          display: true
        }
      }
    ]
  }
});

const generateScatterChartData = (datasets = []) => ({
  datasets: datasets.map(({ color, data, label }) => ({
    fill: 'start',
    borderColor: color,
    backgroundColor: `${color}40`, // add opacity
    label,
    data
  }))
});

export const AudioChart = ({ title, datasets }) => (
  <Line
    width={640}
    height={300}
    redraw
    data={generateScatterChartData(datasets)}
    options={generateChartOptions(title)}
  />
);