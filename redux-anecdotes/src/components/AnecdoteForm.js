//import { useDispatch } from 'react-redux'
import { createAnec } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { setNotif } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    //const dispatch = useDispatch()

    const addAnec = async (event) => {
        event.preventDefault()
        const content = event.target.anec.value
        event.target.anec.value = ''
        props.createAnec(content)
        props.setNotif(`'${content} created'`, 2)
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes
    }
}

const mapDispatchToProps = {
    createAnec,
    setNotif
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(AnecdoteForm)
export default ConnectedFilter

//export default AnecdoteForm