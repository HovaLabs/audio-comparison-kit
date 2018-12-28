import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Image } from 'rebass';

import { Box } from '@rebass/grid';

import * as audioData from '../../audioData';
import { AudioChart } from '../Results/AudioChart';

export const Orientation = () => (
  <div>
    <h3>Orientation</h3>
    <div>
      The initial Hovalin v4 chamber is printed vertically aligned.
      We wanted to see if the sound quality would be greatly affected by printing the chamber horizontally aligned.
    </div>
    <Box height={800}>
      <AudioChart
        title="Orientation"
        datasets={[
          { color: '#DDDD00', data: audioData.Hovalin_Wood_Bridge_Four_Perimeters, label: 'Vertically Aligned'},
          { color: '#DD6666', data: audioData.Hovalin_Wood_Bridge_Sideways, label: 'Horizontally Aligned'},
        ]}
      />
    </Box>
    <div>
      <ReactAudioPlayer
        src="sampleFiles/Hovalin_Wood_Bridge_Four_Perimeters.mp3"
        controls
      />
      <Image width="100%" src={`./violinPhotos/Hovalin_Wood_Bridge_Four_Perimeters.jpg`} />
    </div>
    <div>
      <ReactAudioPlayer
        src="sampleFiles/Hovalin_Wood_Bridge_Sideways.mp3"
        controls
      />
      <Image src={`./violinPhotos/Hovalin_Wood_Bridge_Sideways.jpg`} />
    </div>
  </div>
);
