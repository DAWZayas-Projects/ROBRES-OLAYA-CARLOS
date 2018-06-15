import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers'
import { View, BackHandler, StatusBar, Alert } from 'react-native'

import Navigator from '../config/routes'

const addListener = createReduxBoundAddListener('root')

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
    nav: PropTypes.object
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress)
  }

  onBackPress = () => {
    const { dispatch, nav } = this.props

    if (this.isLastScreen(nav)) this.confirmExit()
    dispatch(NavigationActions.back())
    return true
  }

  confirmExit = () =>
    Alert.alert(
      '¿Salir de Avirato TPV?',
      'Confirme que desea salir de la aplicación',
      [
        { text: 'Cancelar', onPress: () => ({}), style: 'cancel' },
        { text: 'Salir', onPress: BackHandler.exitApp }
      ],
      { cancelable: true }
    )

  isLastScreen = ({ index, routes }) => index === 0 && routes[0] && routes[0].index === 0

  render () {
    const { dispatch, nav } = this.props
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#123456" barStyle="light-content" />
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
