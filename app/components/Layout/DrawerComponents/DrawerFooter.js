import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Icon } from 'native-base'

const FooterDrawer = () => (
  <View style={styles.container}>
    <Icon style={styles.text} name="copyright" type="MaterialIcons" />
    <Text style={styles.text}> Isindireyya 2018</Text>
  </View>
)

export default FooterDrawer

const styles = StyleSheet.create({
  container: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 10
  },
  text: {
    color: '#CCCC',
    fontSize: 12
  }
})
