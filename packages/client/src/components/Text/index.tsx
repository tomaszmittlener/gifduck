import React, { FunctionComponent } from 'react'

export interface TextProps {
  value: string
}

const Text: FunctionComponent<TextProps> = ({ value }) => {
  return <span>{value}</span>
}

export default Text
