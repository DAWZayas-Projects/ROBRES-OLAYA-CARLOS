import 'rxjs/add/operator/switchMap'
import { books } from '../data/books.json'

import {
  GET_ALL_BOOKS,
  getAllBooksSuccess,
  GET_BOOK_DETAILS,
  getBookDetailsSuccess
} from '../actions/book'

const getAllBooks$ = action$ =>
  action$.ofType(GET_ALL_BOOKS).switchMap(action => [getAllBooksSuccess(books)])

const getBookDetails$ = action$ =>
  action$.ofType(GET_BOOK_DETAILS).switchMap(action => [getBookDetailsSuccess(action.payload)])

export default [getAllBooks$, getBookDetails$]
