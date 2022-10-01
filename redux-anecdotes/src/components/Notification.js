//import { useSelector } from 'react-redux'
import { connect } from 'react-redux'


const Notification = (props) => {
  const notification = props.notification
  console.log(notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    notification: state.notification

  }
}

const ConnectedNotif = connect(mapStateToProps)(Notification)
export default ConnectedNotif

//export default Notification