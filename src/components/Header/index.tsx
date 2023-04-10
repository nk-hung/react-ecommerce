import React, { SetStateAction } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart, AiOutlineCaretDown } from 'react-icons/ai';

import './style.css';
import type { ProductProps } from '../../utils/types';
type Props = {
  search: string;
  setSearch: React.Dispatch<SetStateAction<string>>;
  onSetSearch: (string: string) => void;
  carts: ProductProps[];
};
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-charcoal-500 flex justify-center items-center px-20 py-2'>
      <div>
        <Link to={'/'} className='text-brand'>
          Simple Ecommerce
        </Link>
      </div>
      <div className='input-form'>
        <input
          className='input-search'
          // value={search}
          // onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className='flex'>
        <div className='rounded-md bg-slate-gray border-100 py-1 px-3 flex items-center justify-between '>
          <p>Hi, {'hung'}</p>
          {/* < */}
          <button>
            <AiOutlineCaretDown />
          </button>
        </div>

        <div>

        </div>
        <div className='cart-icon' onClick={() => navigate('/carts')}>
          <AiOutlineShoppingCart style={{ color: '#fff' }} />

        
        </div>
        <div className='flex'>
          <div>{6}</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
