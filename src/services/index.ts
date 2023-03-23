import { AxiosInstance, AxiosRequestConfig, default as axios } from 'axios';
import { UserType } from "../utils/types/index"
import Cookie from 'js-cookie';
export const API = axios.create({ baseURL: `http://localhost:3007` });

API.interceptors.request.use((config) => {
  const token = Cookie.get('access_token')
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config
})

API.interceptors.response.use((response) => response.data, (err) => Promise.reject(err))

// Add token when call api
interface RequestData {
  username: string;
  password: string;
}

interface ResponseData {
  token: string;
}

// login
export const signIn = (formData: UserType) => API.post('/auth/signin', formData)
export const signUp = (formData: UserType) => API.post<UserType, ResponseData>('/signup', formData)

// product
export const getProducts = () => API.get('/products');
export const getOneProduct = (id: string | undefined) => API.get(`/products/${id}`)