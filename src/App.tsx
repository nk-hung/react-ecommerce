import { useCallback, useEffect, useState } from 'react';
import {
  Route,
  Router,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage/HomePage';
import ProductDetail from './components/ProductsList/ProductDetailItem/ProductDetail';

import type { ProductProps } from './utils/types';
import CartsList from './components/Carts';
import Announcement from './components/Announcement';
import Login from './components/Login';
import HomeScreen from './screens/HomeScreen';
import SingleProduct from './screens/SingleProduct';
import CartScreen from './screens/CartScreen';

function App() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [carts, setCarts] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState<string>('');

  const location = useLocation();
  const navigate = useNavigate();

  const onAddToCart = useCallback(
    (product: ProductProps) => {
      setCarts([...carts, product]);
    },
    [carts, setCarts]
  );

  const onRemoveToCart = useCallback(
    (product: ProductProps) => {
      const funcCheck = (item: ProductProps) =>
        JSON.stringify(item) === JSON.stringify(product);
      const existProduct = carts.some(funcCheck);

      if (existProduct) {
        const newArr = JSON.parse(JSON.stringify(carts));
        const index = newArr.findLastIndex(funcCheck);
        console.log('index', index);
        newArr.splice(index, 1);
        console.log('carts', newArr);
        setCarts(newArr);
      }
    },
    [carts, setCarts]
  );

  const onClearCarts = () => {
    setCarts([]);
  };

  const onSetSearch = useCallback(
    (search: string) => {
      setSearch(search);
      if (location.pathname !== '/') {
        navigate('/');
      }
    },
    [search, navigate, location]
  );

  useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://fakestoreapi.com/products').then(
        (res) => res.json()
      );

      setProducts(data);
    };
    getData();
  }, []);

  return (
    <div className='App'>
      <Announcement />
      {/* 
      <Header
        search={search}
        setSearch={setSearch}
        onSetSearch={onSetSearch}
        carts={carts}
      /*/}
      <Routes>
        <Route
          path='/'
          element={
            // <HomePage
            //   products={products}
            //   search={search}
            //   onAddToCart={onAddToCart}
            // />
            <HomeScreen />
          }
        />
        <Route path='/products/:id' element={<SingleProduct />} />
        {/* <Route path='/login' element={<Login />} /> */}
        {/* <Route path='/register' element={<Register/>} /> */}
        {/* <Route path='/'profile' element={<ProfileScreen />} /> */}
        <Route path='/cart/:id' element={<CartScreen />} />
        {/* <Route path='/shipping' element={<ShippingScreen />} /> */}
        {/* <Route path='/payment' element={<PaymentScreen />} /> */}
        {/* <Route path='/placeorder' element={<PlaceorderScreen />} /> */}
        {/* <Route path='/order' element={<OrderScreen />} /> */}
        {/* <Route path='/*' element={<NotFoundScreen />} /> */}
        {/* <Route
          path='/carts'
          element={
            <CartsList
              carts={carts}
              onAddToCart={onAddToCart}
              onRemoveToCart={onRemoveToCart}
            />
          }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
