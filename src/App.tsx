import { useCallback, useEffect, useState } from "react";
import {
  Route,
  Router,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";
import ProductDetail from "./components/ProductsList/ProductDetailItem/ProductDetail";

import type { ProductProps } from "./components/HomePage/HomePage";
import CartsList from "./components/Carts";

function App() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [carts, setCarts] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  const onAddToCart = useCallback(
    (product: ProductProps) => {
      setCarts([...carts, product]);
    },
    [carts, setCarts]
  );

  const onClearCarts = () => {
    setCarts([]);
  };

  const onSetSearch = useCallback(
    (search: string) => {
      setSearch(search);
      if (location.pathname !== "/") {
        navigate("/");
      }
    },
    [search, navigate, location]
  );

  useEffect(() => {
    const getData = async () => {
      const data = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json()
      );

      setProducts(data);
    };
    getData();
  }, []);

  return (
    <div className='App'>
      <Header
        search={search}
        setSearch={setSearch}
        onSetSearch={onSetSearch}
        carts={carts}
      />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              products={products}
              search={search}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route path='/products/:id'>{/* <ProductDetail /> */}</Route>
        <Route path='/carts' element={<CartsList carts={carts} />} />
      </Routes>
    </div>
  );
}

export default App;
