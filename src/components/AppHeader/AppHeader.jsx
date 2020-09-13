import React from 'react'
import { useSelector } from 'react-redux'
import { Wrapper } from './AppHeader.styles'

function AppHeader () {
  const result = useSelector(state => state.calculator)
  return <Wrapper>
    alga
    <span>
      Shopping
    </span>
    <span>
      { result }
    </span>
  </Wrapper>
}

export default AppHeader
