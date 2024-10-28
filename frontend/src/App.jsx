import { useEffect } from 'react'
import './App.css'

function App() {
  let a;

  useEffect(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((result) => {
        a = result.rows
      })
  }, [])

  return (
    <>
      <p>{a}</p>
    </>
  )
}

export default App
