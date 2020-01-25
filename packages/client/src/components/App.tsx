import React, { useEffect, useState } from 'react'
import Text from './Text'

const API_URL = 'http://localhost:4000/api/v1/test'

export default function App() {
  const [data, setData] = useState<string>('')

  const getData = async () => {
    try {
      const response = await fetch(API_URL)
      const { data } = await response.json()
      setData(data)
    } catch (e) {
      throw new Error(e)
    }
  }

  // let number = 1

  const number = 'test'

  useEffect(() => {
    getData()

    console.log(number)
    // console.log(Test())
  }, [])

  return (
    <div>
      <Text value={'React app with Typescript'} />
      <br />
      <br />
      <Text value={data} />
    </div>
  )
}
