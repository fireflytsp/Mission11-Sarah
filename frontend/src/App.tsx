import './App.css'
import ShoppingCartPage from './pages/ShoppingCart';
import ProjectsPage from './pages/BooksPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CartPage from './pages/CartPage';
import { CartProvider } from './context/CartContext';
import AdminBooksPage from './pages/AdminBooksPage';

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
        <Route path='/adminBooks' element={<AdminBooksPage/>} />
      </Routes>
    </Router>  
    </CartProvider>
  
    </>
  )
}

export default App;
