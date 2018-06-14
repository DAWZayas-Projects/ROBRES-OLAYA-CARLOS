import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Drawer as NDrawer } from 'native-base'
import { DrawerItems } from 'react-navigation'
import { DrawerHeader } from '../../containers'
import { DrawerFooter } from './DrawerComponents'

const Drawer = props => (
  <NDrawer>
    <View style={styles.container}>
      <View>
        <DrawerHeader />
        <DrawerItems {...props} />
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
