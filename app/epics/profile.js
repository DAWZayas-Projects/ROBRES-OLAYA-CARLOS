/* eslint-disable no-param-reassign */
import 'rxjs/add/operator/switchMap'
import { profiles } from '../data/profiles.json'

import { GET_PROFILE_INFO, getProfileInfoSuccess } from '../actions/profile'

const getProfileInfo = action$ =>
  action$.ofType(GET_PROFILE_INFO).switchMap((action) => {
    const prof = profiles.find(({ info }) => +info.userId === +action.payload)
    return [getProfileInfoSuccess(prof)]
  })

export default [getProfileInfo]
