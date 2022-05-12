import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartItems = createSlice({
    name: 'cartItems',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 2, name: 'Grey Yordan', count: 1},
    ],
    reducers: {
        changeCount: () => {
            return 
        }
    },
})

// 디스트럭쳐링 문법
export const { changeCount } = cartItems.actions

export default configureStore({
  reducer: { 
    cartState : (cartItems.reducer),
  }
}) 