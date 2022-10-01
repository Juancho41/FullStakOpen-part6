//import { useDispatch } from 'react-redux'
import { filterAnec } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const Filter = (props) => {

  //const dispatch = useDispatch()
  const handleChange = (event) => {
    // input-field value is in variable event.target.value
    //const filterAnec = event.target.value
    console.log(event.target.value)
    props.filterAnec(event.target.value)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={handleChange} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    filter: state.filter
  }
}

const mapDispatchToProps = {
  filterAnec,
}

const ConnectedFilter = connect(mapStateToProps, mapDispatchToProps)(Filter)
export default ConnectedFilter

//export default Filter