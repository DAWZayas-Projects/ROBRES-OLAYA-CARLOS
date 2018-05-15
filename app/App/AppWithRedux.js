import React from 'react'
import { Provider } from 'react-redux'

import store from '../config/store'
import App from './AppWithNavigation'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      store
    }
  }

  render () {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    )
  }
}
