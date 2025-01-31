//Arquivo principal de configuração do redux.
import { configureStore } from '@reduxjs/toolkit'

//Const principal dos reducers.
export const store = configureStore({
  reducer: {}
})

//tipagem do rootreducer
export type RootReducer = ReturnType<typeof store.getState>
