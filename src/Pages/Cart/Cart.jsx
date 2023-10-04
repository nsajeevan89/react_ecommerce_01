import React, { useContext } from "react";
import { PRODUCTS } from "../../Product";
import { ShopContext } from "../../Context/ShopContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmout();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkOut">
          <p>Subtotal: ${totalAmount}</p>
          <button onClick={() => navigate("/")}>Continue Shopping</button>
          <button>Check Out</button>
        </div>
      ) : (
        <h1>Your Cart is Empty!</h1>
      )}
    </div>
  );
};

export default Cart;
