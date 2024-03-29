import React from 'react';
import { ProductProps } from '../../../utils/types';
const ProductItem = ({ item }: { item: ProductProps }) => {
  const { image, name, price, countInStock } = item;

  return (
    <div className='product-item'>
      <div className='md:flex'>
        <div className='md:shrink-0'>
          <img src={image} className='image' loading='lazy' />
        </div>
        <form className='flex flex-col p-6 justify-between items-center'>
          <div className='flex flex-wrap'>
            <h1 className='flex-auto text-lg font-semibold text-slate-900'>
              {name}
            </h1>
            <div className='text-lg font-semibold text-slate-500'>
              $ {price}
            </div>
            <div className='w-full flex-none text-sm font-medium text-slate-700 mt-2'>
              {countInStock ? 'In Stock' : 'Not available'}
            </div>
          </div>
          <div className='flex items-baseline mt-4 mb-6 pb-6 '>
            <div className='space-x-2 flex text-sm'>
              <label>
                <input
                  className='sr-only peer'
                  name='size'
                  type='radio'
                  value='s'
                  checked
                />
                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white '>
                  XS
                </div>
              </label>
              <label>
                <input
                  className='sr-only peer'
                  name='size'
                  type='radio'
                  value='s'
                />
                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white '>
                  S
                </div>
              </label>
              <label>
                <input
                  className='sr-only peer'
                  name='size'
                  type='radio'
                  value='s'
                />
                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white '>
                  M
                </div>
              </label>
              <label>
                <input
                  className='sr-only peer'
                  name='size'
                  type='radio'
                  value='s'
                />
                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white '>
                  L
                </div>
              </label>
              <label>
                <input
                  className='sr-only peer'
                  name='size'
                  type='radio'
                  value='s'
                />
                <div className='w-9 h-9 rounded-lg flex items-center justify-center text-slate-700 peer-checked:font-semibold peer-checked:bg-slate-900 peer-checked:text-white '>
                  XL
                </div>
              </label>
            </div>
          </div>
          <div className='flex space-x-4 mb-6 text-sm font-medium pt-4 border-t border-slate-200'>
            <div className='flex-auto flex space-x-4'>
              <button
                className='h-10 px-6 font-semibold rounded-md bg-black text-white'
                type='submit'>
                Buy now
              </button>
              <button
                className='h-10 px-6 font-semibold rounded-mb border border-slate-200 text-slate-900'
                type='button'>
                Add to Cart
              </button>
            </div>
            <button
              className='flex-none flex items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200'
              type='button'
              aria-label='Like'>
              <svg
                width='20'
                height='20'
                fill='currentColor'
                aria-hidden='true'>
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductItem;
