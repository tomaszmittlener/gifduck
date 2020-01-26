import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface LogoProps {
  className?: string
}

const StyledLogo = styled.label`
  font-size: ${({ theme }) => theme.ms(8)};
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  color: ${({ theme }) => theme.colors.accent.default};
  padding: ${({ theme }) => theme.ms(2)} 0;
  width: auto;
`

const Logo: FunctionComponent<LogoProps> = ({ className }) => {
  return <StyledLogo className={className}>🐤 gifduck</StyledLogo>
}

export default Logo
