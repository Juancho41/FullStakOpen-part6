import { useSelector, useDispatch } from 'react-redux'

import { voteNotif, nullNotif } from '../reducers/notificationReducer'
import { updateVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const getanecdotes = useSelector(state => state.anecdotes)
    const anecdotes = [...getanecdotes]
    const dispatch = useDispatch()

    const filterAnecs = useSelector(state => state.filter)

    const vote = (anecdote) => {
        
        dispatch(updateVote(anecdote))
        dispatch(voteNotif(anecdote.id))
        setTimeout(() => {
            dispatch(nullNotif())
        }, 5000)

    }

    if (filterAnecs !== '') {
        return (
            <div>
                {anecdotes
                    .filter(anecdote => anecdote.content.toLowerCase().includes(filterAnecs.toLowerCase()))
                    .sort((a, b) => b.votes - a.votes)
                    .map(anecdote =>
                        <div key={anecdote.id}>
                            <div>
                                {anecdote.content}
                            </div>
                            <div>
                                has {anecdote.votes}
                                <button onClick={() => vote(anecdote)}>vote</button>
                            </div>
                        </div>
                    )}
            </div>
        )
    }

    return (
        <div>
            {anecdotes
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default AnecdoteList