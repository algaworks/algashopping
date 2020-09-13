import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sum, subract } from '../store/Calculator/Calculator.actions'

function Calculator () {
  const dispatch = useDispatch()
  const result = useSelector(state => state.calculator)
  
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)
  
  return <>
    <input
      type="number"
      placeholder="a"
      value={a}
      onChange={(e) => setA(Number(e.target.value))}
    />
    <input
      type="number"
      placeholder="b"
      value={b}
      onChange={(e) => setB(Number(e.target.value))}
    />
    <button
      onClick={() => {
        dispatch(sum(a, b))
      }}
    >somar</button>

    <button
      onClick={() => {
        dispatch(subract(a, b))
      }}
    >subtrair</button>


    <div>
      { result }
    </div>
  </>
}

export default Calculator
