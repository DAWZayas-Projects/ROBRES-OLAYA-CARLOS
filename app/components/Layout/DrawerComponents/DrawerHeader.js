import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Thumbnail, Text } from 'native-base'
import PropTypes from 'prop-types'

const DrawerHeader = ({ alias, profilePic }) => (
  <View transparent style={[styles.container]}>
    <Thumbnail style={{ marginHorizontal: 10 }} source={{ uri: profilePic }} />
    <View>
      <Text style={{ color: 'white' }}>{alias}</Text>
      <Text note>Apuntador</Text>
    </View>
  </View>
)

DrawerHeader.defaultProps = {
  alias: 'Invitado',
  profilePic: 'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'
}

DrawerHeader.propTypes = {
  alias: PropTypes.string,
  profilePic: PropTypes.string
}

export default DrawerHeader

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#123456',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
    margin: 0
  }
})
