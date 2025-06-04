import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from './Pages/Products';
import ProductDetails from './Pages/ProductDetails';
import NavBar from './Components/NavBar';
import Cart from './Pages/Cart';

function App() {
  return (
    
      <BrowserRouter>
        <NavBar></NavBar>
        <div className='container my-4'>
          <Routes>
            <Route
              path="/"
              element={<Products/>}
            />

            <Route 
              path="/product-details/:id"
              element={<ProductDetails/>}
            />

            <Route
              path='/cart'
              element={<Cart/>}
            />    
          </Routes>
        </div>
      </BrowserRouter>
    
  )
}

export default App
