import { useEffect } from 'react'
import './App.css'

function App() {
  let city = []

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        city = result.rows
      })
  }, [])

  return (
    <>
      <p>{city}</p>
    </>
  )
}

export default App
