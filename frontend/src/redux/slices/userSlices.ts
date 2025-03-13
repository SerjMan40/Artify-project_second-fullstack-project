import {createSlice} from '@reduxjs/toolkit'

import {UserGeneralState} from '../../types/interfaces'

import checkSession from '../thunks/checkSession'

export const registrationData = {
  email: '',
  username: '',
  firstName: '',
  lastName: '',
  password: '',
  confirmPassword: '',
}

export const initialState: UserGeneralState = {
  registrationData,
  isCheckingSession: false,
  isLogin: false,
  showRegistrationForm: false,
  showLoginForm: false,
  user: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleAutReg: (state) => {
      state.isCheckingSession = !state.isCheckingSession
    },
    toggleAuthLog: (state) => {
      state.isLogin = !state.isLogin
    },
    regToggleForm:(state, action) => {
      state.showRegistrationForm = action.payload
      if (state.showLoginForm) {
        state.showLoginForm = !state.showLoginForm
      }
    },
    logToggleForm:(state, action) => {
      state.showLoginForm = action.payload
    },
    setRegistrationData: (state, action) => {
      state.registrationData = action.payload
      console.log('registretion', state.isCheckingSession)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(checkSession.pending, (state) => {
        state.isCheckingSession = true
      })
      .addCase(checkSession.fulfilled, (state, action) => {
        state.isLogin = action.payload.isAuthenticated
        state.isCheckingSession = true
        if (action.payload.isAuthenticated && action.payload.user) {
          state.user = action.payload.user
        }
      })
      .addCase(checkSession.rejected, (state) => {
        state.isCheckingSession = false
        state.isLogin = false
      })
  },
})

export const {setRegistrationData, toggleAutReg, toggleAuthLog, regToggleForm, logToggleForm} =
  userSlice.actions

export default userSlice.reducer
