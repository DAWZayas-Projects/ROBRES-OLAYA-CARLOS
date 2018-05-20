import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Thumbnail, Text } from 'native-base'

const DrawerHeader = () => (
  <View transparent style={[styles.container]}>
    <Thumbnail
      style={{ marginHorizontal: 10 }}
      source={{
        uri: 'http://digitalspyuk.cdnds.net/17/25/980x490/landscape-1498216547-avatar-neytiri.jpg'
      }}
    />
    <View>
      <Text style={{ color: 'white' }}>Gaarlos</Text>
      <Text note>Apuntador</Text>
    </View>
  </View>
)

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
