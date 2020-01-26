import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledLogo = styled.label`
  font-size: ${({ theme }) => theme.ms(8)};
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  color: ${({ theme }) => theme.colors.accent.default};
  padding: ${({ theme }) => theme.ms(2)};
  display: inline-flex;
  width: auto;
`

const Logo: FunctionComponent = () => {
  return <StyledLogo>🐤 gifduck</StyledLogo>
}

export default Logo
