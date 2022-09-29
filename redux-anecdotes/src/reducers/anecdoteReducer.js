import { createSlice } from '@reduxjs/toolkit'
import anecServices from '../services/anecdotes'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

// export const voting = (id) => {
//   return {
//     type: 'VOTE',
//     data: {
//       id
//     }
//   }
// }

// export const createAnec = (content) => {
//   return {
//     type: 'NEW_ANEC',
//     data: { content }
//   }
// }

//const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

const initialState = []


const anecSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnec(state, action) {
      const id = action.payload
      const anecToChange = state.find(n => n.id === id)
      const anecChanged = {
        ...anecToChange,
        votes: anecToChange.votes + 1
      }
      return state.map(anec => anec.id !== id ? anec : anecChanged)
    },
    setAnecs(state, action) {
      return action.payload
    },
    appendAnec(state, action) {
      state.push(action.payload)
    },
  }
})

export const initializeAnecs = () => {
  return async dispatch => {
    const anecs = await anecServices.getAll()
    dispatch(setAnecs(anecs))
  }
}

export const createAnec = content => {
  return async dispatch => {
    const newAnec = await anecServices.createNew(content)
    dispatch(appendAnec(newAnec))
  }
}

export const updateVote = anecdote => {
  
  const updatedAnec = { ...anecdote,
                votes: anecdote.votes +1
  }
  return async dispatch => {

    const updatedVote = await anecServices.voting(anecdote.id, updatedAnec)
    dispatch(voteAnec(updatedVote.id))
  }
}

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'VOTE':
//       const id = action.data.id
//       const anecToChange = state.find(n => n.id === id)
//       const anecChanged = {
//         ...anecToChange,
//         votes: anecToChange.votes + 1
//       }
//       return state.map(anec => anec.id !== id ? anec : anecChanged)

//     case 'NEW_ANEC':
//       const newAnec = {
//         content: action.data.content,
//         id: getId(),
//         votes: 0
//       }
//       return state.concat(newAnec)

//     default: return state
//   }


// }

export const { voteAnec, setAnecs, appendAnec } = anecSlice.actions
export default anecSlice.reducer