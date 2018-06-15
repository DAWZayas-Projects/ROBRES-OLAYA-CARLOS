import React from 'react'
import { StyleSheet, View } from 'react-native'
import { H3, Thumbnail, Text } from 'native-base'
import PropTypes from 'prop-types'

const DrawerHeader = ({
  userName, alias, exLibris, profilePic
}) => (
  <View transparent style={[styles.container]}>
    <Thumbnail large style={{ marginHorizontal: 10 }} source={{ uri: profilePic }} />
    <View>
      <H3 style={{ color: 'white' }}>{alias || userName}</H3>
      <Text note>{exLibris}</Text>
    </View>
  </View>
)

DrawerHeader.defaultProps = {
  alias: 'Invitado',
  profilePic: 'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'
}

DrawerHeader.propTypes = {
  userName: PropTypes.string,
  alias: PropTypes.string,
  exLibris: PropTypes.string,
  profilePic: PropTypes.string
}

export default DrawerHeader

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: '#123456',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    margin: 0
  }
})
