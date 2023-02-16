import React, { useMemo } from "react";

import "./style.css";

export type ProductProps = {
  title?: string;
  description?: string;
  id: number;
  price?: number;
  image?: string;
  rating?: {
    rate?: number;
    count?: number;
  };
  category?: string;
};

const HomePage = ({
  products,
  search,
  onAddToCart,
}: {
  products: ProductProps[];
  search: string;
  onAddToCart: (product: ProductProps) => void;
}) => {
  console.log("products:::", products);
  const filterProducts = useMemo(
    () =>
      products.filter(
        (item) =>
          item.title
            ?.toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) ||
          item.description?.toLowerCase().includes(search.toLowerCase())
      ),
    [search, products]
  );

  return (
    <div className='row'>
      {/* <div>Có: {filterProducts.length}</div> */}
      {filterProducts.map((item: ProductProps, index: number) => (
        <div className='product-container' key={index}>
          <div>
            <div className='image'>
              <img src={item.image} className='image-product' />
            </div>
            <div className='title'>{item.title}</div>
            <div className='description'>{item.description}</div>
            <div className='price'>$ {item.price}</div>
          </div>
          <div className='footer'>
            <button className='btn' onClick={() => onAddToCart(item)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
