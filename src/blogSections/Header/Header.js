import React from 'react';
import styled from 'styled-components';

import { Box } from '@rebass/grid';

const HeaderContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  flex: 0 0 70px;
  background: white;
`

const LeftSide = styled(Box)`
  display: flex;
`;

const RightSide = styled(Box)`
  height: 100%;
`;

export const Header = () => (
  <HeaderContainer>
    <LeftSide>
      <Box px="28px">
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 8L10.6262 17.0404" stroke="#333333" strokeWidth="2"/>
          <line x1="10.0404" y1="0.707107" x2="1.70709" y2="9.04044" stroke="#333333" strokeWidth="2"/>
        </svg>
      </Box>
      <Box>Back to Hova Labs</Box>
    </LeftSide>
    <RightSide>
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0V70H70V0H0ZM57.7676 60.7777L44.592 54.1346L44.691 41.3491L19.3995 41.4481L25.5535 44.4698L25.4545 60.7777L12.5701 54.1346V9.2165L25.6467 15.5685L25.5477 28.255H44.5862V9.2165L57.7676 15.6675V60.7777Z" fill="#1E1E1E"/>
      </svg>
    </RightSide>
  </HeaderContainer>
);
