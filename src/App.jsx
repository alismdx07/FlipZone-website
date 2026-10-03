import Loginpage from './components/Loginpage'
import Header from './components/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Wishlist from './components/Wishlist'
import Products from './components/Products'

const App=()=>{
  return(
    <div>
      <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/login" element={<Loginpage />} />
<Route path='/home' element={<Home/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/wishlist' element={<Wishlist/>}/>
<Route path='/products' element={<Products/>}/>
    </Routes>
     </BrowserRouter>
    </div>
  )
}
export default App