import { getOneProduct } from './../../services/index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const getDetailProduct = createAsyncThunk('products/getDetails',
  async (id: string | undefined) => {
    const resp = await getOneProduct(id);
    return resp.data
  })

const productDetailsSlice = createSlice({
  name: 'productDetails',
  initialState: {
    item: { reviews: [] },
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDetailProduct.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getDetailProduct.fulfilled, (state, action) => {
        state.status = 'successed';
        state.item = action.payload
      })
  }
})

export default productDetailsSlice.reducer
