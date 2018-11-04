import React, { useState, useEffect } from 'react'

function Home(props) {
  const [name, setName] = useState('Erick')
  const [sureName, setSureName] = useState('Armando')

  useEffect(() => {
    document.title = name + ' ' + sureName
  })

  function handleNameChange(e) {
    setName(e.target.value)
  }

  function handleSureNameChange(e) {
    setSureName(e.target.value)
  }

  return (
    <div className='home-page-container'>
      <div className='home-page-container__fields'>
        <div>
          <input value={name} onChange={handleNameChange} />
        </div>
        <div>
          <input value={sureName} onChange={handleSureNameChange} />
        </div>
      </div>
      <div>
        <h1>My name is {name} {sureName}</h1>
      </div>
    </div>

  )
}

export default Home
