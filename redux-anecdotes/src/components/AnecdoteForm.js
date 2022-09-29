import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
import { createNotif, nullNotif } from '../reducers/notificationReducer'
import anecServices from '../services/anecdotes'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        const newAnec = await anecServices.createNew(content)
        dispatch(createAnec(newAnec))
        dispatch(createNotif(content))
        setTimeout(() => {
            dispatch(nullNotif())
        }, 5000)
      }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnec}>
                <div><input name="anec" /></div>
                <button type="submit">create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm