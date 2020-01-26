import React, { FunctionComponent } from 'react'
import styled from 'styled-components'

interface TextProps {
  value: string
  color: string
}

const StyledText = styled.span`
  color: ${props => props.color};
  font-weight: bold;
`

const Text: FunctionComponent<TextProps> = ({ value, color }) => {
  return <StyledText color={color}>{value}</StyledText>
}

export default Text
