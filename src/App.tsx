import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Payment from './pages/Payment'
import Store from './pages/Store'
import Navbar from './components/Navbar'
import Customers from './pages/Customers'
import { CartProvider } from './context/CartContext'

function App() {
  return (
    <>
    <CartProvider>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/customers' element={<Customers/>}/>
      <Route path='/store' element={<Store/>}/>
      <Route path='/payment' element={<Payment/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </CartProvider>
    </>
  )
}

export default App
