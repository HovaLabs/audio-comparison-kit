import React from 'react';
import { Flex } from 'rebass';

import * as audioData from './audioData';
import { InstrumentPanel } from './InstrumentPanel';

export const AudioShootout = () => (
  <Flex flexDirection="column">
    { Object.keys(audioData).map(name => <InstrumentPanel key={name} name={name} />)}
  </Flex>
);
