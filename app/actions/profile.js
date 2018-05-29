export const GET_PROFILE_INFO = 'GET_PROFILE_INFO'
export const GET_PROFILE_INFO_SUCCESS = 'GET_PROFILE_INFO_SUCCESS'
export const SET_PROFILE_ALIAS = 'SET_PROFILE_ALIAS'
export const SET_PROFILE_EX_LIBRIS = 'SET_PROFILE_EX_LIBRIS'

export const getProfileInfo = payload => ({
  type: GET_PROFILE_INFO,
  payload
})

export const getProfileInfoSuccess = payload => ({
  type: GET_PROFILE_INFO_SUCCESS,
  payload
})

export const setProfileAlias = payload => ({
  type: SET_PROFILE_ALIAS,
  payload
})

export const setProfileExLibris = payload => ({
  type: SET_PROFILE_EX_LIBRIS,
  payload
})
