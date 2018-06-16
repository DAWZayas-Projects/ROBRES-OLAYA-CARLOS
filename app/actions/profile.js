export const GET_PROFILE_INFO = 'GET_PROFILE_INFO'
export const GET_PROFILE_INFO_SUCCESS = 'GET_PROFILE_INFO_SUCCESS'
export const SET_BOOKMARK = 'SET_BOOKMARK'
export const SET_BOOKMARK_SUCCESS = 'SET_BOOKMARK_SUCCESS'
export const SET_PROFILE_INFO = 'SET_PROFILE_INFO'
export const SET_PROFILE_INFO_SUCCESS = 'SET_PROFILE_INFO_SUCCESS'

export const getProfileInfo = payload => ({
  type: GET_PROFILE_INFO,
  payload
})

export const getProfileInfoSuccess = payload => ({
  type: GET_PROFILE_INFO_SUCCESS,
  payload
})

export const setProfileInfo = payload => ({
  type: SET_PROFILE_INFO,
  payload
})

export const setProfileInfoSuccess = payload => ({
  type: SET_PROFILE_INFO_SUCCESS,
  payload
})

export const setBookmark = payload => ({
  type: SET_BOOKMARK,
  payload
})

export const setBookmarkSuccess = payload => ({
  type: SET_BOOKMARK_SUCCESS,
  payload
})
