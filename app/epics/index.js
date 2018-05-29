import { combineEpics } from 'redux-observable'
import profile from './profile'

export default combineEpics(...profile)
