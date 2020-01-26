import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Text from '../Text'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/GlobalStyles'
import Theme from 'styles/theme'

const API_URL = 'http://localhost:4000/api/v1/test'

export default function Index() {
  const [data, setData] = useState<string>('')

  const getData = async () => {
    try {
      const response = await axios.get<{ data: string }>(API_URL)
      const {
        data: { data },
      } = await response
      setData(data)
    } catch (e) {
      throw new Error(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <div>
        <Text value={'React app with Typescript'} color={'red'} />
        <br />
        <br />
        <Text value={data} color={'blue'} />
      </div>
    </ThemeProvider>
  )
}
