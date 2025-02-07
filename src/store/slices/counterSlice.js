import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  backgroundColor: 'hsl(220, 100%, 100%)',
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
      state.backgroundColor = `hsl(220, 100%, ${Math.max(100 - state.value * 2, 50)}%)`
    },
    decrement: (state) => {
      state.value = Math.max(0, state.value - 1)
      state.backgroundColor = `hsl(220, 100%, ${Math.max(100 - state.value * 2, 50)}%)`
    },
    reset: (state) => {
      state.value = 0
      state.backgroundColor = 'hsl(220, 100%, 100%)'
    },
  },
})

export const { increment, decrement, reset } = counterSlice.actions
export default counterSlice.reducer