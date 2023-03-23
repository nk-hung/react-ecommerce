import React, { useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { addToCart } from '../redux/reducers/cart.reducer';
import { useAppDispatch } from '../redux/store';

const CartScreen = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const qty = searchParams.get('qty');
  console.log('searchParams', qty);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addToCart({ id, qty }));
    }
  }, [dispatch, qty, id]);
  // const {id} =
  return <div>CartScreen</div>;
};

export default CartScreen;
