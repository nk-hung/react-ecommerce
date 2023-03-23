import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API, signIn } from "../../services";
import { UserType } from "../../utils/types";

const signInUser = createAsyncThunk('users/login', async ({ username, password }: UserType, thunkAPI) => {
  const response = await API.post('/auth/signin', { username, password });

  return response
})

const initialState = {

}

const usersSlice = createSlice({
  name: 'users',
  initialState: {},
  reducers: {}
})