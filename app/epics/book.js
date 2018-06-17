import 'rxjs/add/operator/switchMap'
import { books } from '../data/books.json'

import {
  GET_ALL_BOOKS,
  getAllBooksSuccess,
  GET_BOOK_DETAILS,
  getBookDetailsSuccess,
  CONFIRM_CHANGES,
  confirmChangesSuccess
} from '../actions/book'

const getAllBooks$ = action$ =>
  action$.ofType(GET_ALL_BOOKS).switchMap(action => [getAllBooksSuccess(books)])

const getBookDetails$ = action$ =>
  action$.ofType(GET_BOOK_DETAILS).switchMap(action => [getBookDetailsSuccess(action.payload)])

const confirmChanges$ = action$ =>
  action$.ofType(CONFIRM_CHANGES).switchMap(action => [confirmChangesSuccess(action.payload)])

export default [getAllBooks$, getBookDetails$, confirmChanges$]
