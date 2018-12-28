import styled from 'styled-components';
import { Box, Image as RebassImage } from 'rebass';

export const Container = styled(Box)`
  padding: 60px 120px;
  margin: 0 auto;
`;

export const ContentContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const HeaderContainer = styled(Box)`
  padding: 20px 0;
`;

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 70px;
`;

export const MetaData = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 22px;
`;

export const Text = styled.div`

`;

export const Image = styled(RebassImage)`

`;

export const ChartContainer = styled(Box)`
  max-width: 800px;
  padding: 30px 0;
  margin: 0 auto;
  height: 400px;
`;

export const AudioPlayer = styled.audio`
  width: 100%;
`;