import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { Box, Flex, Image } from 'rebass';

import * as audioData from '../../audioData';

import { AudioChart } from './AudioChart';
import { instruments } from './instruments';

export const InstrumentPanel = ({ name }) => {
  const { color, description } = instruments[name];
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
