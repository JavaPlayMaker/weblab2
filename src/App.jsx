import { useState } from 'react'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import logo from '/logo.png'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
     
     <Header/>
    </>
  )
}

export default App
