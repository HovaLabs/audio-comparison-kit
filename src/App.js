import React, { Component } from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';

import { Header } from './blogSections/Header/Header';
import { Intro } from './blogSections/Intro/Intro';
import { Recording } from './blogSections/Recording/Recording';
import { Tuning } from './blogSections/Tuning/Tuning';
import { WhatWeLearned } from './blogSections/WhatWeLearned/WhatWeLearned';
import { WhatsNext } from './blogSections/WhatsNext/WhatsNext';

const Container = styled(Flex)`
  width: 100%;
  height: 100%;
  flex-direction: column;
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
        <Header />
        <Content>
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
