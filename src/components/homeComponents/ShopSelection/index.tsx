import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../../redux/reducers/product.reducer';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { getProducts } from '../../../services';
import { ProductProps } from '../../../utils/types';
import './style.css';

const ShopSelection = () => {
  const dispatch = useAppDispatch();
  const productsList = useAppSelector((state) => state.products);
  const { status, items, error } = productsList;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <div className='row'>
        {/* <div>Có: {filterProducts.length}</div> */}
        {status === 'loading' ? (
          <p>Loading ....</p>
        ) : error ? (
          <p>error</p>
        ) : (
          items.map((item: ProductProps, index: number) => (
            <div className='product-container' key={index}>
              <div>
                <Link to={`/products/${item._id}`}>
                  <div className='image'>
                    <img src={item.image} className='image-product' />
                  </div>
                </Link>
                <div className='title'>{item.title}</div>
                <div className='description'>{item.description}</div>
                <div className='price'>$ {item.price}</div>
              </div>
              <div className='footer'>
                <button className='btn' onClick={() => {}}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ShopSelection;
