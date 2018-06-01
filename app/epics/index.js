import { combineEpics } from 'redux-observable'
import profile from './profile'
import book from './book'

export default combineEpics(...profile, ...book)
