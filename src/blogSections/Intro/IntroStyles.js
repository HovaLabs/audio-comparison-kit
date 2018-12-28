import styled from 'styled-components';
import { Box } from 'rebass';

export const Container = styled(Box)`
  padding: 60px 120px;
  margin: 0 auto;
`;

export const HeaderContainer = styled(Box)`
  padding-bottom: 30px;
`

export const Header = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 144px;
`

export const HeaderSecondary = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 70px;
`

export const IntroText = styled(Box)`
  font-size: 22px;
`;

export const BeforeAfterContainer = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
