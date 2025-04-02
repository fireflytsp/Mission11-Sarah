import './App.css'
import ShoppingCartPage from './pages/ShoppingCart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import AdminBooksPage from './pages/AdminBooksPage';
import BooksPage from './pages/BooksPage';

function App() {  

  return (
    <>
    <CartProvider>
    <Router>
      <Routes>
        <Route path='/' element={<BooksPage/>}/>
        <Route path='/books' element = {<BooksPage/>}/>
        <Route path='/cart/:title/:bookId/:price' element={<ShoppingCartPage/>} />
        <Route path='/checkout' element={<CartPage/>} />
        <Route path='/adminBooks' element={<AdminBooksPage/>} />
      </Routes>
    </Router>  
    </CartProvider>
  
    </>
  )
}

export default App;
