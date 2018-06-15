import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, H2, Icon } from 'native-base'
import PropTypes from 'prop-types'

const Header = ({ navigation, navigationOptions }) => (
  <View style={styles.header}>
    <Button rounded light transparent onPress={navigation.toggleDrawer} style={styles.button}>
      <Icon style={{ fontSize: 30 }} name="menu" />
    </Button>
    <H2 style={{ color: 'white' }}>{navigationOptions.title}</H2>
  </View>
)

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  navigationOptions: PropTypes.object
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#123456'
  },
  button: {
    alignSelf: 'center'
  }
})
