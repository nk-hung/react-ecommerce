import React, { SetStateAction } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./style.css";
import type { ProductProps } from "../HomePage/HomePage";
type Props = {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
  onSetSearch: (string: string) => void;
  carts: ProductProps[];
};
const Header = ({ setSearch, onSetSearch, search, carts }: Props) => {
  const navigate = useNavigate();
  return (
    <div className='header-container'>
      <div>
        <Link to={"/"} className='text-brand'>
          Simple Ecommerce
        </Link>
      </div>
      <div className='input-form'>
        <input
          className='input-search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='cart'>
        <div className='cart-icon' onClick={() => navigate("/carts")}>
          <AiOutlineShoppingCart style={{ color: "#fff" }} />

          {/* <div className='tooltip-cart'>
            {carts.map((cart) => (
              <div>
                <div>
                  <div>{cart.title}</div>
                  <div>{cart.price}</div>
                </div>
                <div></div>
              </div>
            ))}
          </div> */}
        </div>
        <div className='total'>
          <div>{carts.length}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
