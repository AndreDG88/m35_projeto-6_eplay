//Slice reducer do carrinho.
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home/home-index'

type CartState = {
  items: Game[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      state.items.push(action.payload)
    }
  }
})

//Exportações.
export const { add } = cartSlice.actions
export default cartSlice.reducer
