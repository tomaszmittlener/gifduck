import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Text from '../Text'

const API_URL = 'http://localhost:4000/api/v1/test'

export default function Index() {
  const [data, setData] = useState<string>('')

  const getData = async () => {
    try {
      const response = await axios.get(API_URL)
      const { data } = await response
      setData(data)
    } catch (e) {
      throw new Error(e)
    }
  }

  useEffect(() => {
    getData()
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
