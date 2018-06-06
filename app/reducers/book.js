import R from 'ramda'

import {
  GET_ALL_BOOKS_SUCCESS,
  GET_USER_BOOKMARKS_SUCCESS,
  GET_BOOK_DETAILS_SUCCESS
} from '../actions/book'

const initialState = {
  books: [],
  userBookmarks: [],
  bookDetails: {
    info: {},
    chapters: []
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS_SUCCESS: {
      return { ...state, books: action.payload }
    }
    case GET_USER_BOOKMARKS_SUCCESS: {
      const { books } = state

      const userBookmarks = R.innerJoin((book, bookmark) => book.info.bookId === bookmark.bookId)(
        books,
        action.payload
      )

      return { ...state, userBookmarks }
    }
    case GET_BOOK_DETAILS_SUCCESS: {
      const { books } = state

      const bookDetails = books.find(({ info }) => info.bookId === action.payload)
      return { ...state, bookDetails }
    }
    default:
      return state
  }
}
