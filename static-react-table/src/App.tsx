import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main1 from './main1';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Main1/>
    </div>
  )
}

export default App
