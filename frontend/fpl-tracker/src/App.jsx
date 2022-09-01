import { useEffect, useState } from 'react'
import { fetchEventStatus } from 'fpl-api'
const data = await fetchEventStatus()
console.log(data)


function App() {

  return (
    <div className="App">
      <h1>Hello mum, I'm doing fpl tracking.</h1>
    </div>
  )
}

export default App
