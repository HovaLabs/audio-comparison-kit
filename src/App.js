import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Box, Flex } from 'rebass';

import { theme } from './design-system/theme';
import { GlobalStyle } from './design-system/components';

import { Header } from './blogSections/Header/Header';
import { Intro } from './blogSections/Intro/Intro';
import { Recording } from './blogSections/Recording/Recording';
import { Tuning } from './blogSections/Tuning/Tuning';
import { WhatWeLearned } from './blogSections/WhatWeLearned/WhatWeLearned';
import { WhatsNext } from './blogSections/WhatsNext/WhatsNext';

const Content = styled(Box)`
  max-width: 800px;
  margin: 0 auto;
  overflow: auto;
`

const Footer = styled(Box)`

`;

export class App extends Component {
  render() {
    return (
      <Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Box>
          <Header />
          <Content>
            <Intro />
            <Recording />
            <Tuning />
            <WhatWeLearned />
            <WhatsNext />
            <Footer>Hova Labs</Footer>
          </Content>
        </Box>
      </ThemeProvider>
      </Fragment>
    );
  }
}
