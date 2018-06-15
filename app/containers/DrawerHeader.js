import { compose } from 'ramda'
import { connect } from 'react-redux'

import { getProfileInfo } from '../actions/profile'
import DrawerHeader from '../components/Layout/DrawerComponents/DrawerHeader'
import WithDidMountAction from '../components/WithDidMountAction'

const mapStateToProps = ({ profile }) => ({
  userName: profile.info.userName,
  alias: profile.aditionalInfo.alias,
  exLibris: profile.aditionalInfo.exLibris,
  profilePic: profile.info.profilePic
})

const mapDispatchToProps = dispatch => ({
  handleDidMountAction: () => dispatch(getProfileInfo('io1552'))
})

export default compose(connect(mapStateToProps, mapDispatchToProps), WithDidMountAction)(DrawerHeader)
