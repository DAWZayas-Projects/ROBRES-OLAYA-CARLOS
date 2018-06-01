import { GET_ALL_BOOKS_SUCCESS, GET_USER_BOOKMARKS_SUCCESS } from '../actions/book'

const initialState = {
  books: [],
  userBookmarks: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS_SUCCESS: {
      return { ...state, books: action.payload }
    }
    case GET_USER_BOOKMARKS_SUCCESS: {
      return { ...state, books: action.payload }
    }
    default:
      return state
  }
}
