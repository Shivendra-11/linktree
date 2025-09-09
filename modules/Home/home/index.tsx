import React from 'react'
import { onBoarduser } from '@/modules/auth/actions'
import { on } from 'events'
const index = async() => {
    await onBoarduser();
  return (
    <div>
      <h1>Home page pr welcome hai </h1>
    </div>
  )
}

export default index
