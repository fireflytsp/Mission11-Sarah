import './App.css'
import ShoppingCartPage from './pages/ShoppingCart';
import ProjectsPage from './pages/ProjectsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';

function App() {  

  return (
    <>
    <CartProvider>
    <Router>
      <Routes>
        <Route path='/' element={<ProjectsPage/>}/>
        <Route path='/books' element = {<ProjectsPage/>}/>
        <Route path='/cart/:title/:bookId/:price' element={<ShoppingCartPage/>} />
        <Route path='/checkout' element={<CartPage/>} />
      </Routes>
    </Router>  
    </CartProvider>
  
    </>
  )
}

export default App;
