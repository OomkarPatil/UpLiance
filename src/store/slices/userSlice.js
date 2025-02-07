import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userData: null,
  hasUnsavedChanges: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
      state.hasUnsavedChanges = false
    },
    setUnsavedChanges: (state, action) => {
      state.hasUnsavedChanges = action.payload
    },
  },
})

export const { setUserData, setUnsavedChanges } = userSlice.actions
export default userSlice.reducer