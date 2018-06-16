import R from 'ramda'

import {
  GET_PROFILE_INFO_SUCCESS,
  SET_BOOKMARK_SUCCESS,
  SET_PROFILE_INFO_SUCCESS
} from '../actions/profile'

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
      const { bookId, chapterId, chapterTitle } = action.payload
      const bookmark = { bookId, chapterId, chapterTitle }
      let bookmarks = [...state.aditionalInfo.bookmarks]

      if (bookmarks.find(bm => R.equals(bm, bookmark))) {
        bookmarks = bookmarks.filter(bm => !R.equals(bm, bookmark))
      } else {
        bookmarks = [...bookmarks, bookmark]
      }

      return {
        ...state,
        aditionalInfo: {
          ...state.aditionalInfo,
          bookmarks
        }
      }
    }
    case SET_PROFILE_INFO_SUCCESS: {
      const profileInfo = action.payload

      return {
        ...state,
        aditionalInfo: {
          ...state.aditionalInfo,
          ...profileInfo
        }
      }
    }
    default:
      return state
  }
}
