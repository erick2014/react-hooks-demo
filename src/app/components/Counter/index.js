/* eslint space-before-function-paren: [2, "never"] */
import React, { useState, useEffect } from 'react'

function Counter(props) {
  // declase a new state variable called count
  const [count, setCount] = useState(0)
  // similar to componentDidMount and componentDidUpdate
  useEffect(() => {
    // update the document title using the browser API
    document.title = `You clicked ${count} times`;
  })
  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => { setCount(count + 1) }}>
        Click me babe
      </button>
    </div>
  )
}

export default Counter
