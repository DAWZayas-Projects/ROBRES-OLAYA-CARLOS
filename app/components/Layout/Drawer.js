import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Drawer as NDrawer } from 'native-base'
import { DrawerHeader, DrawerBody, DrawerFooter } from './DrawerComponents'

const Drawer = props => (
  <NDrawer>
    <View style={styles.container}>
      <View>
        <DrawerHeader />
        <DrawerBody {...props} />
      </View>
      <DrawerFooter />
    </View>
  </NDrawer>
)

export default Drawer

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%'
  }
})
