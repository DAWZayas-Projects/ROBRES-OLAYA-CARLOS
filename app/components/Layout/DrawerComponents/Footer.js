import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const FooterDrawer = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Isindireyya</Text>
  </View>
)

export default FooterDrawer

const styles = StyleSheet.create({
  container: {
    height: 30,
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    padding: 5
  },
  text: {
    color: '#CCCC'
  }
})
