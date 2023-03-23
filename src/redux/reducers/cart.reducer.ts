import { RootState } from './../store';
import { getOneProduct } from './../../services/index';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const cartItemFromLocalStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems') || '{}')
  : [];

const initialState = {
  cartItems: cartItemFromLocalStorage,
  status: 'idle'
};

export const addToCart = createAsyncThunk('carts/add',
  async ({ id, qty }: { id: string | undefined, qty: any }, { getState, dispatch }) => {
    const { data } = await getOneProduct(id);

    const item: any = {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty: parseInt(qty)
    }
    dispatch(addItem(item))

    localStorage.setItem('cartItems', JSON.stringify((getState() as RootState).cart.cartItems))

  })
const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addItem: (state: any, action: any) => {
      const item = action.payload
      const existItem = state.cartItems.find((x: any) => x.product === item.product);
      if (existItem) {
        existItem.qty += action.payload.qty;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: () => { }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.fulfilled, (state, action) => {
        state.status = 'successed'
      })
  },
});

export const { addItem } = cartSlice.actions

export default cartSlice.reducer