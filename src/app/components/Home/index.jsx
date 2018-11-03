import React, { useState } from 'react'

function Home(props) {
  const [name, setName] = useState('Erick');

  function handleNameChange(e) {
    setName(e.target.value)
  }
  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <h1>My name is {name} </h1>
    </div>
  )
}

export default Home
