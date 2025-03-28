import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CartItem } from '../types/CartItem';

function CartPage() {
    const navigate = useNavigate();
    const { cart, removeFromCart } = useCart();

    // Calculate total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div>
            <h2>Your cart</h2>
            <div>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ul>
                        {cart.map((item: CartItem) => (
                            <li key={item.bookId}>
                                <strong>{item.title}: </strong> 
                                {item.quantity} {item.quantity === 1 ? "copy" : "copies"} 
                                - <strong>${(item.price * item.quantity).toFixed(2)}</strong> {/* ✅ Display total price for this item */}
                                <button onClick={() => removeFromCart(item.bookId)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <h3>Total: ${totalPrice.toFixed(2)}</h3> {/* ✅ Display total cart cost */}
            <button>Checkout</button>
            <button onClick={() => navigate('/books')}>Continue Browsing</button>
        </div>
    );
}

export default CartPage;
