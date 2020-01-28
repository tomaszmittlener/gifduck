import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface HeaderProps {
  className?: string
  testId?: string
}

const Container = styled.footer`
  margin: auto 0 0 0;
  width: 100%;
  min-height: ${({ theme }) => theme.ms(20)};
  background-color: ${({ theme }) => theme.colors.accent.default};
  align-items: center;
  justify-content: center;
  display: flex;
  padding: ${({ theme }) => theme.ms(3)} 0px;
`

const Text = styled.span`
  color: ${({ theme }) => theme.colors.accent.defaultInverted};
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
`

const Footer: FunctionComponent<HeaderProps> = ({ className, testId }) => {
  return (
    <Container data-testid={testId} className={className}>
      <Text>@gifduck by Tomasz Mittlener</Text>
    </Container>
  )
}

export default Footer
