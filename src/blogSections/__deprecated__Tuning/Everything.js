import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Box, Image } from '@rebass/grid';
import { instruments } from '../Results/instruments';
import * as audioData from '../../audioData';
import { AudioChart } from '../Results/AudioChart';

export const Everything = () => (
  <Box>
    <h3>Everything</h3>
    <div>
      Here's a graph with frequency results from every violin we made.
    </div>
    <Box style={{ height: 800 }}>
      <AudioChart
        height="800px"
        title="Orientation"
        datasets={Object.keys(instruments).map(i => ({ color: instruments[i].color, data: audioData[i], label: i.replace(/_/g, ' ')}))}
      />
    </Box>
  </Box>
);
