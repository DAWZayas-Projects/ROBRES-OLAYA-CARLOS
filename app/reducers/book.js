import {
  GET_ALL_BOOKS_SUCCESS,
  GET_BOOK_DETAILS_SUCCESS,
  CONFIRM_CHANGES_SUCCESS
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
    case GET_BOOK_DETAILS_SUCCESS: {
      const { books } = state

      const bookDetails = books.find(({ info }) => info.bookId === action.payload)
      return { ...state, bookDetails }
    }
    case CONFIRM_CHANGES_SUCCESS: {
      const {
        bookId, chapterId, chapterTitle, data
      } = action.payload
      const { books, bookDetails } = state
      const chapters = bookDetails.chapters.map(chapter =>
        (chapter.id === chapterId ? { id: chapterId, title: chapterTitle, data } : chapter))

      const modifiedBooks = books.map(book => (book.id === bookId ? { ...book, chapters } : book))
      const modifiedBook = { ...bookDetails, chapters }

      return { ...state, books: modifiedBooks, bookDetails: modifiedBook }
    }
    default:
      return state
  }
}
