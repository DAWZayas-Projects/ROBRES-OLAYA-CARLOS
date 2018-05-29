import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { View, BackHandler, StatusBar, Alert } from 'react-native'

import Navigator from '../config/routes'

const addListener = createReduxBoundAddListener('root')

class App extends Component {
  componentDidMount () {
    BackHandler.removeEventListener('hardwareBackPress', this.confirmExit)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.confirmExit)
  }

  confirmExit = () => {
    Alert.alert(
      '¿Seguro que quieres salir?',
      'Aún queda mucho por ver',
      [
        { text: 'Cancelar', onPress: _ => _, style: 'cancel' },
        { text: 'Salir', onPress: BackHandler.exitApp }
      ],
      { cancelable: true }
    )
  }

  render () {
    const { dispatch, nav } = this.props
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden />
        <Navigator navigation={{ dispatch, state: nav, addListener }} />
      </View>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func,
  nav: PropTypes.object
}

const mapStateToProps = ({ nav }) => ({ nav })

export default connect(mapStateToProps)(App)
