import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Image } from 'rebass';

import { Box } from '@rebass/grid';

import * as audioData from '../../audioData';
import { AudioChart } from '../Results/AudioChart';

export const Material = () => (
  <div>
    <h3>Standard PLA vs Matte Fiber HTPLA</h3>
    <div>
      We love the look and feel of Proto Pasta's Matte Fiber HTPLA.
      We were also interested to see if it offered any acoustic benefit over standard PLA
      Here's how they compared:
    </div>
    <Box height={800}>
      <AudioChart
        title="PLA vs Matte Fiber HTPLA"
        datasets={[
          { color: '#000000', data: audioData.Hovalin_Solid_Bridge, label: 'PLA' },
          { color: '#706060', data: audioData.Hovalin_Solid_Bridge_Matte_Fiber, label: 'Matte Fiber HTPLA'},
        ]}
      />
    </Box>
    <div>
      <ReactAudioPlayer
        src="sampleFiles/Hovalin_Solid_Bridge.mp3"
        controls
      />
      <Image width="100%" src={`./violinPhotos/Hovalin_Solid_Bridge.jpg`} />
    </div>
    <div>
      <ReactAudioPlayer
        src="sampleFiles/Hovalin_Solid_Bridge_Matte_Fiber.mp3"
        controls
      />
      <Image src={`./violinPhotos/Hovalin_Solid_Bridge_Matte_Fiber.jpg`} />
    </div>
  </div>
);
