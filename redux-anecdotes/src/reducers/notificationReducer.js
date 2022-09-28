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
        }
    }

})

export const { voteNotif, createNotif, nullNotif } = notifSlice.actions
export default notifSlice.reducer