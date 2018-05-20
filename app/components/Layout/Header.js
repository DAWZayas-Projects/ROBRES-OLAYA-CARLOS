import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Icon, Title } from 'native-base'
import PropTypes from 'prop-types'

const getTitle = ({ descriptor }) => descriptor.options.title

const Header = ({ navigation, scene }) => (
  <View style={styles.header}>
    <Button rounded light transparent onPress={navigation.openDrawer} style={styles.button}>
      <Icon name="menu" />
    </Button>
    <Title>{getTitle(scene)}</Title>
  </View>
)

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  scene: PropTypes.object
}

export default Header

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#123456'
  },
  button: {
    alignSelf: 'center'
  }
})
