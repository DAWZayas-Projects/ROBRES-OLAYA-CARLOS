import { GET_ALL_BOOKS_SUCCESS } from '../actions/book'

const initialState = {
  books: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_BOOKS_SUCCESS: {
      return { ...state, books: action.payload }
    }
    default:
      return state
  }
}
