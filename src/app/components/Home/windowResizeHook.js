/* eslint space-before-function-paren: [2, "never"] */
import React, { useState, useEffect } from 'react'

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [width]) // only call the effect when the data changes
  return width
}
