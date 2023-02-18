import React, { SetStateAction, useEffect, useState } from "react";

import type { CountType, ProductProps } from "../../utils/types";
import CartItem from "./CartItem";
import "./style.css";

const CartsList = ({
  carts,
  onAddToCart,
  onRemoveToCart,
}: {
  carts: ProductProps[];
  onAddToCart: (item: ProductProps) => void;
  onRemoveToCart: (item: ProductProps) => void;
}) => {
  const [lists, setLists] = useState<any>([]);
  const [total, setTotal] = useState<number>(0);
  console.log("cartsList", carts);
  useEffect(() => {
    const getData = () => {
      const counter: any = {};

      carts.forEach((item) => {
        let key = JSON.stringify(item);
        counter[key] = (counter[key] || 0) + 1;
      });

      const arr: any = [];
      for (let [key, value] of Object.entries(counter)) {
        const obj = JSON.parse(key);
        obj.count = value;
        arr.push(obj);
      }
      setLists(arr);
    };
    getData();
    const totalCart = carts.reduce(
      (total: number, p: ProductProps) => total + p.price,
      0
    );
    setTotal(totalCart);
  }, [carts]);

  return (
    <div className='carts-list-container'>
      {lists.map((item: ProductProps & CountType, index: number) => (
        <CartItem
          cart={item}
          key={index}
          onAddToCart={onAddToCart}
          onRemoveToCart={onRemoveToCart}
        />
      ))}
      <div className='total'>
        Total: <>${total}</>{" "}
      </div>
    </div>
  );
};

export default CartsList;
