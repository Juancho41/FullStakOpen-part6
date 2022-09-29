import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'

import { setNotif } from '../reducers/notificationReducer'

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        dispatch(createAnec(content))
        dispatch(setNotif(`'${content} created'`, 2))
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