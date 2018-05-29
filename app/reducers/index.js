import { combineReducers } from 'redux'
import nav from './nav'
import book from './book'
import profile from './profile'

export default combineReducers({ nav, book, profile })
