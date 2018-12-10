import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Image } from 'rebass';

import { Box } from '../../design-system/components';
import { instruments } from '../Results/instruments';
import * as audioData from '../../audioData';
import { AudioChart } from '../Results/AudioChart';

export const Everything = () => (
  <div>
    <h3>Everything</h3>
    <div>
      Here's a graph with frequency results from every violin we made.
    </div>
    <Box height={600}>
      <AudioChart
        title="Orientation"
        datasets={Object.keys(instruments).map(i => ({ color: instruments[i].color, data: audioData[i], label: i.replace(/_/g, ' ')}))}
      />
    </Box>
  </div>
);
