import React from 'react';

import { Container } from '../../design-system/components';

export const Measuring = props => (
  <Container id="measuring" {...props}>
    <h2>Capturing, Digitizing, and Analyzing the Audio</h2>
    <div>We recorded the violin inside of a recording booth using a measurement mic</div>
    <div>We converted the microphone signal into a 24 bit depth 48kHz sample rate digital signal</div>
    <div>We performed a fourier transform on the recorded signal to measure signal strength at different frequencies</div>
  </Container>
)