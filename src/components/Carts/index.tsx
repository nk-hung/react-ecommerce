import React from "react";

import type { ProductProps } from "../HomePage/HomePage";
import CartItem from "./CartItem";
import "./style.css";

const count_duplicates = (arr: ProductProps[]) => {
  const hashMap: any = new Map();

  for (const obj of arr) {
    const key: number = obj.id;
    if (key in hashMap) {
      hashMap[key] += 1;
    } else {
      hashMap[key] = 1;
    }
  }
};

const CartsList = ({ carts }: { carts: ProductProps[] }) => {
  const counter: any = {};

  carts.forEach((item) => {
    let key = JSON.stringify(item);
    counter[key] = (counter[key] || 0) + 1;
  });

  const arr = [];
  for (let [key, value] of Object.entries(counter)) {
    const obj = JSON.parse(key);
    obj.count = value;
    arr.push(obj);
  }

  return (
    <div className='cart-container'>
      {arr.map((item: ProductProps & { count: number }, index: number) => (
        <CartItem cart={item} key={index} />
      ))}
    </div>
  );
};

export default CartsList;
