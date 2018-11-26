import React, { Fragment } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Box, Flex } from 'rebass';

import * as audioData from './audioData';
import { AudioChart } from './AudioChart';

const violinMapping = {
  Amazon_Violin: {
    color: '#654321',
    description: 'ooooooo',
  },
  Hova_Labs_Violin: {
    color: '#654321',
    description: 'ooooooo',
  },
  Hovalin_Solid_Bridge: {
    color: '#000000',
    description: 'ooooooo',
  },
  Hovalin_Solid_Bridge_Matte_Fiber: {
    color: '#000000',
    description: 'ooooooo',
  },
  Hovalin_Wood_Bridge: {
    color: '#FF8000',
    description: 'ooooooo',
  },
  Hovalin_Wood_Bridge_Matte_Fiber: {
    color: '#AAAAAA',
    description: 'ooooooo',
  },
  Hovalin_Wood_Bridge_Four_Perimeters: {
    color: '#D8D800',
    description: 'ooooooo',
  },
  Hovalin_Wood_Bridge_Seven_Perimeters: {
    color: '#00FF00',
    description: 'ooooooo',
  },
  Hovalin_Wood_Bridge_Sideways: {
    color: '#FF0000',
    description: 'ooooooo',
  },
  Modular_Fiddle: {
    color: '#008080',
    description: 'ooooooo',
  },
};

export const InstrumentPanel = ({ name }) => {
  const { color, description } = violinMapping[name];
  const data = audioData[name];

  return (
    <Flex flexDirection="row">
      <Box flex="0 1 200px">
        <Box>{name.replace(/_/g, ' ')}</Box>
        <ReactAudioPlayer
          src={`sampleFiles/${name}.mp3`}
          controls
        />
        <Box>{description}</Box>
      </Box>
      <Flex flex="1" flexDirection="row" alignContent="flexEnd" width="100%">
        <Box flex="1" width="300px">
          <img alt={name} src={`./violinPhotos/${name}.jpg`} style={{width: 'inherit'}}/>
        </Box>
        <Box flex="1" width="100%">
          <AudioChart title={name} datasets={[{ color, data, label: name }]}/>
        </Box>
      </Flex>
    </Flex>
  );
};
