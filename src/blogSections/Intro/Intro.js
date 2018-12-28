import React from 'react';

import { Box, Image } from 'rebass';

import { Container } from '../../design-system/components';
import { BeforeAfterContainer, Header, HeaderContainer, HeaderSecondary, IntroText } from './IntroStyles';

export const Intro = props => (
  <Container id="intro" {...props}>
    <HeaderContainer>
      <Header>Hovalin v4</Header>
      <HeaderSecondary>Tuning the sound of a 3D printed violin</HeaderSecondary>
    </HeaderContainer>
    <Box>
      <IntroText>
        Over the last few months we've been working on Version 4 of The Hovalin.
        The biggest change from previous versions is that the chamber body is now a single piece.
        Previously, the chamber was made up of 3 major pieces and 2 joints.
      </IntroText>
      <BeforeAfterContainer>
        <Box>
          <h3>Before</h3>
          <Image src="http://www.hovalabs.com/assets/hova-instruments/docs/assembly-9b4959dee74e2a89f882e5a067a4aa0ab753b740cb6f20a002b8b8adcbbd8c1f.gif" />
        </Box>
        <Box>
          <h3>After</h3>
          <Image src="http://www.hovalabs.com/assets/hova-instruments/docs/assembly_v4-6763a1ecf2500d136821a86e0686abbab500c25bdbc0095b7d5c8b8cb6dfeb38.gif" />
        </Box>
      </BeforeAfterContainer>
      <IntroText>
        In this blog post, we're going to go over what we've discovered when prototyping the Hovalin Version 4, and what's next.
      </IntroText>
      <ul>
        <li><a href="#original">The Original Hovalin v4</a></li>
        <li><a href="#measuring">How we measured sound quality</a></li>
        <li><a href="#bridge">Printed Bridge vs Wood Bridge</a></li>
        <li><a href="#material">PLA vs HTPLA</a></li>
        <li><a href="#thickness">What is the best wall thickness?</a></li>
        <li><a href="#orientation">Up/Down vs Sideways Orientation</a></li>
        <li><a href="#what-we-learned">What we learned</a></li>
        <li><a href="#whats-next">What's next</a></li>
      </ul>
    </Box>
  </Container>
);