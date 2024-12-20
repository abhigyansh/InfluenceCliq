import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Wcu from './Wcu'
import ForB from './ForB'
import Exp from './exp'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        <Exp />
        {/* <Card /> */}
        <Wcu />
        <ForB />
      </div>
    </>
  )
}

export default App
