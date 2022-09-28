import { configureStore } from '@reduxjs/toolkit'
import anecSlice from './anecdoteReducer'
import filterReducer from './filterReducer'
import notifSlice from './notificationReducer'


const store = configureStore({
    reducer: {
      anecdotes: anecSlice,
      notification: notifSlice,
      filter: filterReducer
    }
  })

export default store