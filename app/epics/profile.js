import 'rxjs/add/operator/switchMap'
import { profiles } from '../data/profiles.json'

import {
  GET_PROFILE_INFO,
  getProfileInfoSuccess,
  SET_BOOKMARK,
  setBookmarkSuccess
} from '../actions/profile'

const getProfileInfo$ = action$ =>
  action$.ofType(GET_PROFILE_INFO).switchMap((action) => {
    const prof = profiles.find(({ info }) => info.userId === action.payload)
    return [getProfileInfoSuccess(prof)]
  })

const setBookmark$ = action$ =>
  action$.ofType(SET_BOOKMARK).switchMap(action => [setBookmarkSuccess(action.payload)])

export default [getProfileInfo$, setBookmark$]
