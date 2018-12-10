import React, { Component } from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';

import { Intro } from './blogSections/Intro/Intro';
import { Tuning } from './blogSections/Tuning/Tuning';
import { Recording } from './blogSections/Recording/Recording';
import { Results } from './blogSections/Results/Results';
import { WhatWeLearned } from './blogSections/WhatWeLearned/WhatWeLearned';
import { WhatsNext } from './blogSections/WhatsNext/WhatsNext';

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const Header = styled(Box)`
  width: 100%;
  flex: 0 0 120;
`;

const Content = styled(Box)`
  overflow: auto;
`

const Footer = styled(Box)`

`;

export class App extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Header>Hova Labs</Header>
          <Intro />
          <Recording />
          <Tuning />
          <WhatWeLearned />
          <WhatsNext />
          <Footer>Hova Labs</Footer>
        </Content>
      </Container>
    );
  }
}
