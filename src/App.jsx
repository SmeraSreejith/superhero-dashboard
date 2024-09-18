import { Route, Routes } from 'react-router-dom'
import './App.css'
import Admin from './pages/Admin'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Admin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
