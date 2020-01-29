import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface HeaderProps {
  className?: string
  testId?: string
}

const Container = styled.footer`
  margin: auto 0 0 0;
  width: 100%;
  min-height: ${({ theme }) => theme.ms(25)};
  background-color: ${({ theme }) => theme.colors.accent.default};
  align-items: center;
  justify-content: center;
  display: flex;
  padding: ${({ theme }) => theme.ms(3)} 0px;
`

const Text = styled.span`
  color: ${({ theme }) => theme.colors.primary.third};
  font-family: ${({ theme }) => theme.typography.fonts.secondary};
  font-size: ${({ theme }) => theme.ms(-2)};
`

const Footer: FunctionComponent<HeaderProps> = ({ className, testId }) => {
  return (
    <Container data-testid={testId} className={className}>
      <Text>@gifduck</Text>
    </Container>
  )
}

export default Footer
