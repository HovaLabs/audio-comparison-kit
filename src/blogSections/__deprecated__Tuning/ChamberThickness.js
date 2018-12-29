import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Box, Image } from 'rebass';

import * as audioData from '../../audioData';
import { AudioChart } from '../Results/AudioChart';

export const ChamberThickness = () => (
  <div>
    <h3>Chamber Thickness</h3>
    <div>
      The initial design of Hovalin v4 included a 1.5 millimeter chamber thickness.
      The 1.5 mm thickness allowed for 2 perimeters and, what I often refer to as, "wiggle-fill".
      We don't have any qualitative measurement, but we observed 2 perimeters plus "wiggle-fill" was stronger than using 4 perimeters.
      Beyond strength, we were intersted to explore how wall structure and wall thickness affects sound quality.
    </div>
    <Box height={800}>
      <AudioChart
        title="Wall Thickness"
        datasets={[
          { color: '#000000', data: audioData.Hovalin_Wood_Bridge, label: '1.5 mm' },
          { color: '#DDDD00', data: audioData.Hovalin_Wood_Bridge_Four_Perimeters, label: '1.6 mm'},
          { color: '#00BB00', data: audioData.Hovalin_Wood_Bridge_Seven_Perimeters, label: '2.8 mm'},
        ]}
      />
    </Box>
    <div>
      <ReactAudioPlayer
        src="sampleFiles/Hovalin_Wood_Bridge.mp3"
        controls
      />
      <Image width="100%" src={`./violinPhotos/Hovalin_Wood_Bridge.jpg`} />
    </div>
    <div>
      <ReactAudioPlayer
        src="sampleFiles/Hovalin_Wood_Bridge_Four_Perimeters.mp3"
        controls
      />
      <Image src={`./violinPhotos/Hovalin_Wood_Bridge_Four_Perimeters.jpg`} />
    </div>
    <div>
      <ReactAudioPlayer
        src="sampleFiles/Hovalin_Wood_Bridge_Seven_Perimeters.mp3"
        controls
      />
      <Image src={`./violinPhotos/Hovalin_Wood_Bridge_Seven_Perimeters.jpg`} />
    </div>
  </div>
);
