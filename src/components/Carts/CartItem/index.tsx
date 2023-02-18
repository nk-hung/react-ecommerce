import React, { SetStateAction } from "react";
import { ProductProps, CountType } from "../../../utils/types";
import "../style.css";

type CartItemType = {
  cart: ProductProps & CountType;
  onAddToCart: (item: ProductProps) => void;
  onRemoveToCart: (item: ProductProps) => void;
};

const CartItem = ({ cart, onAddToCart, onRemoveToCart }: CartItemType) => {
  const cartItem = JSON.parse(JSON.stringify(cart));
  delete cartItem.count;
  const onAdd = () => {
    onAddToCart(cartItem);
  };

  const onRemove = () => {
    console.log("cart", cart);
    console.log("cartItem", cartItem);
    console.log("click");
    onRemoveToCart(cartItem);
  };

  return (
    <div className='cart-container'>
      <div className='detail'>
        <img
          src={cart.image}
          style={{ height: 100, width: 100, objectFit: "contain" }}
        />
        <div className='info-item'>
          <div className='item-title'>{cart.title}</div>
          <div className='item-price'>$ {cart.price}</div>
        </div>
      </div>
      <div className='count-container'>
        <div onClick={onRemove}>-</div>
        <div className='count-item'>{cart.count}</div>
        <div onClick={onAdd}>+</div>
      </div>
    </div>
  );
};

export default CartItem;
