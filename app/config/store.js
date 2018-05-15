import { createStore, applyMiddleware } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import logger from 'redux-logger'
import { createEpicMiddleware } from 'redux-observable'

import rootReducer from '../reducers'
import rootEpic from '../epics'

const middleware = []

const navigationMiddleware = createReactNavigationReduxMiddleware('root', state => state.nav)
const epicMiddleware = createEpicMiddleware(rootEpic)

middleware.push(epicMiddleware)
middleware.push(navigationMiddleware)

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger)
}

export default createStore(rootReducer, applyMiddleware(...middleware))
