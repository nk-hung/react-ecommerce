import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../../../redux/reducers/product.reducer';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { getProducts } from '../../../services';
import { ProductProps } from '../../../utils/types';
import ProductItem from '../ProductItem';
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
      <div className='row mx-10 md:flex '>
        {/* <div>Có: {filterProducts.length}</div> */}
        {status === 'loading' ? (
          <p>Loading ....</p>
        ) : error ? (
          <p>error</p>
        ) : (
          items.map((item: ProductProps, index: number) => (
            <ProductItem item={item} key={index} />
          ))
        )}
      </div>
    </div>
  );
};

export default ShopSelection;
