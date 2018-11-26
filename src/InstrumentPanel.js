import React, { Fragment } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Box, Flex, Image } from 'rebass';

import * as audioData from './audioData';
import { AudioChart } from './AudioChart';

const violinMapping = {
  Amazon_Violin: {
    color: '#654321',
    description: 'A longer description will go here talking about details about the print, about how it was different from the last etc etc. a lot of great deatils going to go here for sure. yup, any moment now. going to write some real content here.',
  },
  Hova_Labs_Violin: {
    color: '#654321',
    description: 'A longer description will go here talking about details about the print, about how it was different from the last etc etc. a lot of great deatils going to go here for sure. yup, any moment now. going to write some real content here.',
  },
  Hovalin_Solid_Bridge: {
    color: '#000000',
    description: 'A longer description will go here talking about details about the print, about how it was different from the last etc etc. a lot of great deatils going to go here for sure. yup, any moment now. going to write some real content here.',
  },
  Hovalin_Solid_Bridge_Matte_Fiber: {
    color: '#000000',
    description: 'A longer description will go here talking about details about the print, about how it was different from the last etc etc. a lot of great deatils going to go here for sure. yup, any moment now. going to write some real content here.',
  },
  Hovalin_Wood_Bridge: {
    color: '#FF8000',
    description: 'A longer description will go here talking about details about the print, about how it was different from the last etc etc. a lot of great deatils going to go here for sure. yup, any moment now. going to write some real content here.',
  },
  Hovalin_Wood_Bridge_Matte_Fiber: {
    color: '#AAAAAA',
    description: 'A longer description will go here talking about details about the print, about how it was different from the last etc etc. a lot of great deatils going to go here for sure. yup, any moment now. going to write some real content here.',
  },
  Hovalin_Wood_Bridge_Four_Perimeters: {
    color: '#D8D800',
    description: 'A longer description will go here talking about details about the print, about how it was different from the last etc etc. a lot of great deatils going to go here for sure. yup, any moment now. going to write some real content here.',
  },
  Hovalin_Wood_Bridge_Seven_Perimeters: {
    color: '#00FF00',
    description: 'A longer description will go here talking about details about the print, about how it was different from the last etc etc. a lot of great deatils going to go here for sure. yup, any moment now. going to write some real content here.',
  },
  Hovalin_Wood_Bridge_Sideways: {
    color: '#FF0000',
    description: 'A longer description will go here talking about details about the print, about how it was different from the last etc etc. a lot of great deatils going to go here for sure. yup, any moment now. going to write some real content here.',
  },
  Modular_Fiddle: {
    color: '#008080',
    description: 'A longer description will go here talking about details about the print, about how it was different from the last etc etc. a lot of great deatils going to go here for sure. yup, any moment now. going to write some real content here.',
  },
};

export const InstrumentPanel = ({ name }) => {
  const { color, description } = violinMapping[name];
  const data = audioData[name];
  const nameWithSpaces = name.replace(/_/g, ' ');

  return (
    <Flex p="20px" flexDirection="row">
      <Box flex="1" >
        <Box>{nameWithSpaces}</Box>
        <ReactAudioPlayer
          src={`sampleFiles/${name}.mp3`}
          controls
        />
        <Box>{description}</Box>
      </Box>
      <Flex flex="1" flexDirection="column" alignItems="center" width="100%">
        <Flex flex="1" width="300px" alignItems="center">
          <Image src={`./violinPhotos/${name}.jpg`} />
        </Flex>
        <Box flex="1" width="100%">
          <AudioChart title={nameWithSpaces + ": Audio Frequency Response"} datasets={[{ color, data, label: nameWithSpaces }]}/>
        </Box>
      </Flex>
    </Flex>
  );
};
