import { connect } from 'react-redux'

import { setProfileInfo } from '../actions/profile'
import ProfileView from '../screens/ProfileView'

const mapStateToProps = ({ profile }) => ({
  ...{ ...profile.info, ...profile.aditionalInfo }
})

const mapDispatchToProps = dispatch => ({
  handleChangeProfileInfo: newInfo => dispatch(setProfileInfo(newInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView)
