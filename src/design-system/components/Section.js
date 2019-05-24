import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

const SectionContainer = styled(Box)`
`;

const HeaderPrimary = styled(Box)`
  font-size: 70px;
  color: ${({ theme }) => theme.colors.primary };
`;

const HeaderSecondary = styled(Box)`
  font-size: 22px;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Section = ({ children, headerSecondary, headerPrimary, ...rest }) => (
  <SectionContainer {...rest}>
    <HeaderSecondary>{headerSecondary}</HeaderSecondary>
    <HeaderPrimary>{headerPrimary}</HeaderPrimary>
    {children}
  </SectionContainer>
);