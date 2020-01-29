import React, { FunctionComponent } from 'react'
import styled, { keyframes } from 'styled-components'

interface LogoProps {
  className?: string
  testId?: string
  isLoading?: boolean
}

const pulsateAnimation = keyframes`
    0% {
        opacity: 1.0;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1.0;
    }
`

const Text = styled.label<{ isLoading: boolean }>`
  font-size: ${({ theme }) => theme.ms(7)};
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  color: ${({ theme }) => theme.colors.accent.default};
  line-height: 2;
  width: auto;
  animation: ${pulsateAnimation} 1s ease-out ${({ isLoading }) => (isLoading ? 'infinite' : 'none')};
`

const Logo: FunctionComponent<LogoProps> = ({ className, testId, isLoading = false }) => {
  return (
    <Text data-testid={testId} className={className} isLoading={isLoading}>
      🐤gifduck
    </Text>
  )
}

export default Logo
