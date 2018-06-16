import { connect } from 'react-redux'

import ProfileView from '../screens/ProfileView'

const mapStateToProps = ({ profile }) => ({
  ...{ ...profile.info, ...profile.aditionalInfo }
})

export default connect(mapStateToProps)(ProfileView)
