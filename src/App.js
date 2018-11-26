import React, { Component } from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';

import { BlogIntro } from './BlogIntro';
import { AudioShootout } from './AudioShootout';

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
`;

export class App extends Component {
  render() {
    return (
      <Container flexDirection="column">
        <Box>
          <BlogIntro />
        </Box>
        <Box>
          <AudioShootout />
        </Box>
      </Container>
    );
  }
}
