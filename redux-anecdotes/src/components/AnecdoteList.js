import { useSelector, useDispatch } from 'react-redux'
import { voteAnec } from '../reducers/anecdoteReducer'
import { voteNotif, nullNotif } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const getanecdotes = useSelector(state => state.anecdotes)
    const anecdotes = [...getanecdotes]
    const dispatch = useDispatch()

    const filterAnecs = useSelector(state => state.filter)

    const vote = (id) => {
        dispatch(voteAnec(id))
        dispatch(voteNotif(id))
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
                                <button onClick={() => vote(anecdote.id)}>vote</button>
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
                            <button onClick={() => vote(anecdote.id)}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

export default AnecdoteList