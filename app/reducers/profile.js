import { GET_PROFILE_INFO_SUCCESS } from '../actions/profile'

const initialState = {
  activeProfile: {
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
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE_INFO_SUCCESS: {
      return { ...state, activeProfile: action.payload }
    }
    default:
      return state
  }
}
