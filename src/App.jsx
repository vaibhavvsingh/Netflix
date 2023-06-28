import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { useEffect, useState } from 'react'
import Login from './pages/Login'
import Watch from './pages/Watch'

function App() {
  const [scrollValue, setScrollValue] = useState(0) ;
  useEffect(()=>{
    function scrollEvent(){
      setScrollValue(window.scrollY);
    }

    window.addEventListener('scroll',scrollEvent)

    return ()=>{
      removeEventListener('scroll', scrollEvent);
    }
  })
  return (
    <div className='app-background'> 
      <Routes>
        <Route path='/' element={<><Navbar scrollValue={scrollValue} /><Home /></>} />
        <Route path='/login' element={<Login />} />
        <Route path='/watch/:id' element={<Watch />} />
      </Routes>
    </div>
  )
}

export default App
