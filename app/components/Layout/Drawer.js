import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Drawer as NDrawer } from 'native-base'
import { Header, Body, Footer } from './DrawerComponents'

const Drawer = props => (
  <NDrawer>
    <View style={styles.container}>
      <View>
        <Header />
        <Body />
      </View>
      <Footer />
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
