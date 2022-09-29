import { createSlice } from '@reduxjs/toolkit'

const initialState = null



const notifSlice = createSlice ({
    name: 'notification',
    initialState,
    reducers: {
        voteNotif (state, action) {
            return state = `${action.payload} voted`
        },
        createNotif (state, action) {
            return state = `${action.payload} created`
        },
        nullNotif (state, action) {
            return state = null
        },
        newNotif (state, action) {

            return state = action.payload
        }
    }

})

export const setNotif = (notif, time) => {

    return dispatch => {
        dispatch(newNotif(notif))
        setTimeout(() => {
            dispatch(nullNotif())
          }, time*1000)
    }
  }

export const { voteNotif, createNotif, nullNotif, newNotif } = notifSlice.actions
export default notifSlice.reducer