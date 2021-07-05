import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: null,
  userId: null,
  token: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loadUserInfo: (state, action) => {
      // action = { type, payload }
      console.log(action)
      const { username, userId, token } = action.payload
      state.username = username
      state.userId = userId
      state.token = token
    },
    removeUserInfo: (state) => {
      state.username = null
      state.userId = null
      state.token = null
    }
  }
})


// Ejemplo de una accion
const loadUserInfoAction = (payload) => {
  return {
    type: 'user/loadUserInfo',
    payload: payload, // { userId, token, username }
  } // Una accion
}

export const { loadUserInfo, removeUserInfo } = userSlice.actions
export default userSlice.reducer