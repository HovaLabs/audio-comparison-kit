import React from 'react';
import { Flex } from 'rebass';

import * as audioData from '../../audioData';
import { InstrumentPanel } from './InstrumentPanel';

export const Results = () => (
  <div id="results">
    <h2>The Results</h2>
    <Flex flexDirection="column">
      { Object.keys(audioData).map(name => <InstrumentPanel key={name} name={name} />)}
    </Flex>
  </div>
);
