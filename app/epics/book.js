import 'rxjs/add/operator/switchMap'
import { books } from '../data/books.json'

import { GET_ALL_BOOKS, getAllBooksSuccess } from '../actions/book'

const getAllBooks = action$ =>
  action$.ofType(GET_ALL_BOOKS).switchMap(action => [getAllBooksSuccess(books)])

// const getUserBooks = _ => _
// const getUserBookmarks = _ => _

export default [getAllBooks]
