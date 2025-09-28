import React from 'react'
import Header from './Header'
import { travel } from './Data'
import Travel from './Travel'

function App() {
  return (
    <div>
      <Header/>
      {travel?.map((travel)=>{
<Travel key={travel.id} travel={travel} />
      })
      }
    </div>
  )
}

export default App