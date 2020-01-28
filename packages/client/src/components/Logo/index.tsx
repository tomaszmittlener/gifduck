import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface LogoProps {
  className?: string
  testId?: string
}

const Text = styled.label`
  font-size: ${({ theme }) => theme.ms(7)};
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  color: ${({ theme }) => theme.colors.accent.default};
  line-height: 2;
  width: auto;
`

const Logo: FunctionComponent<LogoProps> = ({ className, testId }) => {
  return (
    <Text data-testid={testId} className={className}>
      🐤gifduck
    </Text>
  )
}

export default Logo
