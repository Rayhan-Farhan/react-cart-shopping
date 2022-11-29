import {Routes, Route} from 'react-router-dom'
import Categories from './pages/Categories'
import Home from './pages/Home'
import Login from './pages/Login'
import Payment from './pages/Payment'
import Store from './pages/Store'
import Navbar from './components/Navbar'
import Customers from './pages/Customers'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/customers' element={<Customers/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/categories' element={<Categories/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default App
