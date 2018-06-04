import 'rxjs/add/operator/switchMap'
import { books } from '../data/books.json'

import {
  GET_ALL_BOOKS,
  getAllBooksSuccess,
  GET_USER_BOOKMARKS,
  getUserBookmarksSuccess
} from '../actions/book'

const getAllBooks = action$ =>
  action$.ofType(GET_ALL_BOOKS).switchMap(action => [getAllBooksSuccess(books)])

const getUserBookmarks = action$ =>
  action$.ofType(GET_USER_BOOKMARKS).switchMap(action => [getUserBookmarksSuccess(action.payload)])
// const getUserBooks = _ => _

export default [getAllBooks, getUserBookmarks]
