import React, { Component, Fragment } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Box } from '@rebass/grid';

import { theme } from './design-system/theme';

import { Header } from './blogSections/Header/Header';
import { Intro } from './blogSections/Intro/Intro';
import { Original } from './blogSections/Original/Original';
import { Measuring } from './blogSections/Measuring/Measuring';
import { Bridge } from './blogSections/Bridge/Bridge';
import { Material } from './blogSections/Material/Material';
import { Thickness } from './blogSections/Thickness/Thickness';
import { Orientation } from './blogSections/Orientation/Orientation';
import { WhatWeLearned } from './blogSections/WhatWeLearned/WhatWeLearned';
import { WhatsNext } from './blogSections/WhatsNext/WhatsNext';

const Content = styled(Box)`
  margin: 0 auto;
  overflow: auto;
`

const Footer = styled(Box)`

`;

export class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Content>
          <Header/>
          <Intro  bg="#FFFFFF"/>
          <Original bg="#F2F2F2"/>
          <Measuring />
          <Bridge />
          <Material />
          <Thickness />
          <Orientation />
          <WhatWeLearned />
          <WhatsNext />
          <Footer>Hova Labs</Footer>
        </Content>
      </ThemeProvider>
    );
  }
}
