import React from 'react';
import { Line } from 'react-chartjs-2';
import * as audioData from './audioData';

const colorMapping = {
  Amazon_Violin: '#654321',
  Hova_Labs_Violin: '#654321',
  Hovalin_Solid_Bridge: '#000000',
  Hovalin_Solid_Bridge_Matte_Fiber: '#000000',
  Hovalin_Wood_Bridge: '#AAAAAA',
  Hovalin_Wood_Bridge_Matte_Fiber: '#AAAAAA',
  Hovalin_Wood_Bridge_Four_Perimeters: '#FFFF00',
  Hovalin_Wood_Bridge_Seven_Perimeters: '#00FF00',
  Hovalin_Wood_Bridge_Sideways: '#FF0000',
  Modular_Fiddle: '#008080',
};

const chartOptions = {
  title: {
    display: true,
    text: 'Hovalin Audio Shootout'
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
};

const goldenRatio = 1.61803398875;
const goldenHue = index => (360 / goldenRatio * index) % 360;
const scatterChartData = {
  datasets: Object.entries(audioData).map(([violinName, violinData], index) => ({
    borderColor: colorMapping.hasOwnProperty(violinName)
      ? colorMapping[violinName]
      : `hsl(goldenHue(index)}, 100%, 50%)`,
    backgroundColor: colorMapping.hasOwnProperty(violinName)
      ? `${colorMapping[violinName]}40` // Append opacity
      : `hsla(${goldenHue(index)}, 100%, 50%, 0.1)`,
    label: violinName.replace('_', ' '),
    data: violinData,
    fill: 'start'
  }))
};

export const AudioShootoutChart = () => <Line data={scatterChartData} options={chartOptions} />;
