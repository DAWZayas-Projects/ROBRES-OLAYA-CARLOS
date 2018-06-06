import { GET_PROFILE_INFO_SUCCESS, SET_BOOKMARK_SUCCESS } from '../actions/profile'

const initialState = {
  info: {
    userId: -1,
    userName: '',
    email: '',
    profilePic: undefined
  },
  aditionalInfo: {
    alias: undefined,
    exLibris: undefined,
    bookmarks: [],
    likes: []
  },
  books: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_INFO_SUCCESS: {
      return { ...state, ...action.payload }
    }
    case SET_BOOKMARK_SUCCESS: {
      const { bookId, chapterId } = action.payload

      return {
        ...state,
        aditionalInfo: {
          ...state.aditionalInfo,
          bookmarks: [
            ...state.aditionalInfo.bookmarks,
            {
              bookId,
              chapterId
            }
          ]
        }
      }
    }
    default:
      return state
  }
}
