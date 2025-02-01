//Arquivo principal de configuração do redux.
import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import cartReducer from './reducers/cart'

//Const principal dos reducers.
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

//tipagem do rootreducer
export type RootReducer = ReturnType<typeof store.getState>
