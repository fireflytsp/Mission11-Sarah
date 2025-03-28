import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { CartItem } from "../types/CartItem";
import { useParams } from "react-router-dom";

function ShoppingCartPage() {
    const navigate = useNavigate();
    const { title, bookId, price } = useParams();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState<number>(0);
    const [showModal, setShowModal] = useState<boolean>(false); // State for showing modal

    const handleCheckout = () => {
        const newItem: CartItem = {
            bookId: Number(bookId),
            title: title || "No Book Found",
            quantity,
            price: Number(price),
        };
        addToCart(newItem);
        setShowModal(true);  // Show the modal when item is added
    };

    const confirmCheckout = () => {
        setShowModal(false);
        navigate("/checkout");
    };

    return (
        <div className="container mt-4">
            <h2>Checkout: {title}</h2>
            <h4>Price: ${price}</h4>

            <div className="row">
                <div className="col-md-6">
                    <input
                        type="number"
                        className="form-control"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                </div>
                <div className="col-md-6">
                    <button className="btn btn-primary w-100" onClick={handleCheckout}>
                        Add to Cart
                    </button>
                </div>
            </div>

            {/* Modal */}
            <div className={`modal ${showModal ? "d-block" : "d-none"}`} tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Confirm Checkout</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Are you sure you want to proceed to checkout?</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                Close
                            </button>
                            <button type="button" className="btn btn-primary" onClick={confirmCheckout}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <button className="btn btn-secondary mt-3" onClick={() => navigate("/books")}>
                Continue Shopping
            </button>
        </div>
    );
}

export default ShoppingCartPage;


