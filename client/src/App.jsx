import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container bg-gray-200">
      <h1 className="text-3xl font-bold underline text-center">
        Set up with tailwind
      </h1>
    </div>
  )
}

export default App
