import { compose } from 'ramda'
import { connect } from 'react-redux'

import { getProfileInfo } from '../actions/profile'
import DrawerHeader from '../components/Layout/DrawerComponents/DrawerHeader'
import WithDidMountAction from '../components/WithDidMountAction'

const mapStateToProps = ({ profile }) => ({
  alias: profile.activeProfile.aditionalInfo.alias,
  profilePic: profile.activeProfile.info.profilePic
})

const mapDispatchToProps = dispatch => ({
  handleDidMountAction: () => dispatch(getProfileInfo('321saf'))
})

export default compose(connect(mapStateToProps, mapDispatchToProps), WithDidMountAction)(DrawerHeader)
