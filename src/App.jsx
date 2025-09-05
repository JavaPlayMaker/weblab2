  import { useState } from 'react';
  import Header from './components/Header/Header';
  import logo from '/logo.png';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ItemDetail from '/pages/ItemDetail.jsx';
import Favorites from '/pages/Favorites.jsx';
import NotFound from '/pages/NotFound.jsx';

  
  
  
  function App() {
    const [count, setCount] = useState(0)

    return (
      <>


      <Header />

<Routes>
  <Route path="/"  element={<Home />} /> 
    <Route path="/item/:id"  element={<ItemDetail/>} /> 
        <Route path="/favorites"  element={<Favorites/>} /> 
          <Route path="*"  element={<NotFound/>}/>
</Routes>


        <div>
          <a href="https://react.dev" target="_blank">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </div>
    
      </>
    )
  }

  export default App
