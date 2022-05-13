import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartItems = createSlice({
    name: 'cartItems',
    initialState: [
        {id: 0, name: 'White and Black', count: 2},
        {id: 2, name: 'Grey Yordan', count: 1},
    ],
    reducers: {
        changeCount: (state, action) => {
          const itemsIndex = state.findIndex((a) => { 
            return a.id === action.payload
          })
            state[itemsIndex].count += 1
        },
        deleteCount: (state, action) => {
          const itemsIndex = state.findIndex((a) => { 
            return a.id === action.payload
          })
          if(state[itemsIndex].count >=1 ){
            state[itemsIndex].count -= 1
          }
        },
        addItem: (state, action) => {
          state.push(action.payload)
          alert('해당 상품이 추가되었습니다.')
        }
    },
})

// 디스트럭쳐링 문법
export const { changeCount, addItem, deleteCount } = cartItems.actions

export default configureStore({
  reducer: { 
    cartState : (cartItems.reducer),
  }
}) 