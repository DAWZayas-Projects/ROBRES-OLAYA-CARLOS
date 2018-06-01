export const GET_ALL_BOOKS = 'GET_ALL_BOOKS'
export const GET_ALL_BOOKS_SUCCESS = 'GET_ALL_BOOKS_SUCCESS'

export const getAllBooks = () => ({ type: GET_ALL_BOOKS })

export const getAllBooksSuccess = payload => ({
  type: GET_ALL_BOOKS_SUCCESS,
  payload
})
