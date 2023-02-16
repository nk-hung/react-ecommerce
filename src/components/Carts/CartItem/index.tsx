import React from "react";
import { ProductProps } from "../../HomePage/HomePage";

type CountType = {
  count: number;
};

const CartItem = ({ cart }: { cart: ProductProps & CountType }) => {
  return (
    <div>
      <div>{cart.title}</div>
      <div>Count: {cart.count}</div>
    </div>
  );
};

export default CartItem;
