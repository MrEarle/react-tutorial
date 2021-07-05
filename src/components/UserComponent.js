import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loadUserInfo, removeUserInfo } from '../redux/userReducer'

class UserComponent extends React.Component {
  constructor(props) {
    super(props)

    console.log(props.user)
    console.log(props.cosaRara)

    this.onPressButton = this.onPressButton.bind(this)
  }

  onPressButton() {
    fetch('https://mocki.io/v1/e2ea7e8f-06a9-4352-8229-31d02212e082')
      .then(r => r.json())
      .then(userInfo => {
        const { userId, username, token } = userInfo
        this.props.addUserInfo(userId, username, token)
      })
  }

  render() {
    const { userId, username, token } = this.props.user
    return (
      <div>
        <p>userId: {userId}</p>
        <p>username: {username}</p>
        <p>token: {token}</p>
        <button onClick={this.onPressButton}>Cargar Usuario</button>
        <button onClick={this.props.deleteUser}>eliminarUsuario</button>
      </div>
    )
  }
}

UserComponent.propTypes = {}

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    cosaRara: 'CosaRara'
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUserInfo: (userId, username, token) => {
      const payload = { userId, username, token }
      const action = loadUserInfo(payload) // { type: 'user/loadUserInfo', payload: {...}}
      dispatch(action)
    },
    deleteUser: () => dispatch(removeUserInfo())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent)
