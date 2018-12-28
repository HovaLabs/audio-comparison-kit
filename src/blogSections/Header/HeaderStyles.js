import styled from 'styled-components';
import { Box } from 'rebass';

export const HeaderContainer = styled(Box)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  flex: 0 0 70px;
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
`

export const LeftSide = styled(Box)`
  display: flex;
`;

export const RightSide = styled(Box)`
  height: 100%;
`;
