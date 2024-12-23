import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Wcu from './Wcu'
import ForB from './ForB'
import Exp from './exp'
import Card from './Card'
import MyForm from './MyForm'
import ForInfulencers from './ForInfulencers'
import MyFormBrands from './MyFormBrands'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Navbar />
        {/* <Card /> */}
        <Exp />
        <Wcu />
        <ForB />
        <MyForm />
        <ForInfulencers />
        <MyFormBrands />
      </div>
    </>
  )
}

export default App
