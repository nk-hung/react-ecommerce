import React, { useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { addToCart } from '../redux/reducers/cart.reducer';
import { useAppDispatch, useAppSelector } from '../redux/store';

const CartScreen = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const qty = searchParams.get('qty');
  const { cartItems } = useAppSelector((state) => state.cart);

  useEffect(() => {
    if (id) {
      dispatch(addToCart({ id, qty }));
    }
  }, [dispatch, qty, id]);
  // const {id} = 
  return (
    <div className='cart-container'>
      {cartItems.length === 0 ? (
        <div>
          <span>Your cart is empty</span>
          <div>
            <Link to={'/'}>SHOPPING NOW</Link>
          </div>
        </div>
      ) : (
        <>
          <div>
            Total Your Cart
            <Link to={'/cart'}>{cartItems.length}</Link>
          </div>
          {cartItems.map((item: any) => (
            <div>
              <div>
                <img src={item.image} alt={'Image'} />
              </div>
              <div>{item.description}</div>
              <div>
                <div>-</div>
                <div>{item.qty}</div>
                <div>+</div>
              </div>
              <div>Remove</div>
              <div>
                <div>Price</div>
                <div>{item.price}</div>
              </div>
            </div>
          ))}
          <div>TOTAL: $100.00</div>
        </>
      )}
    </div>
  );
};

export default CartScreen;
