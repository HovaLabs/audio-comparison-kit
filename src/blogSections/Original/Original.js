import React from 'react';

import {
  AudioPlayer,
  ChartContainer,
  Container,
  ContentContainer,
  Header,
  HeaderContainer,
  MetaData,
  Text,
  Image
} from './OriginalStyles';
import { AudioChart } from '../../AudioChart/AudioChart';
import * as audioData from '../../audioData';

export const Original = props => (
  <Container {...props}>
    <HeaderContainer>
      <MetaData>BASELINE</MetaData>
      <Header>The Original Hovalin</Header>
    </HeaderContainer>
    <ContentContainer>
      <div>
        <Text>
          Settings: yep
          more settings; okay
        </Text>
        <Text>
          We were ecstatic when we heard how much better the new version sounded. Not to mention how much more solid it was and how much easier it was to assemble.
        </Text>
      </div>
      <div>
        <Image src="./violinPhotos/Hovalin_Solid_Bridge.jpg" />
        <AudioPlayer controls>
          <source src="./sampleFiles/Hovalin_Solid_Bridge.mp3" type="audio/mpeg" />
        </AudioPlayer>
      </div>
    </ContentContainer>
    <ChartContainer>
      <AudioChart
        title="Original Hovalin v4"
        datasets={[
          { color: '#000000', data: audioData.Hovalin_Solid_Bridge, label: 'Hovalin v4' },
        ]}
      />
    </ChartContainer>
  </Container>
);
