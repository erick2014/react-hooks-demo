/* eslint space-before-function-paren: [2, "never"] */
import React, { useState, useEffect } from 'react'
import useWindowWidth from './windowResizeHook'

function Home(props) {
  const name = useFormInput('Erick')
  const surName = useFormInput('Armando')
  const width = useWindowWidth()
  useDocumentTitle(name.value + ' - ' + surName.value)

  return (
    <div className='home-page-container'>
      <div className='home-page-container__fields'>
        <div>
          <input {...name} />
        </div>
        <div>
          <input {...surName} />
        </div>
      </div>
      <div>
        {width}
      </div>
      <div>
        <h1>My name is {name.value} {surName.value}</h1>
      </div>
    </div>
  )
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const handleChange = (e) => setValue(e.target.value)
  return {
    value,
    onChange: handleChange
  }
}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title
  })
}

export default Home
