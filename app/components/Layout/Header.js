import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, H2, Icon, Title, Subtitle } from 'native-base'
import PropTypes from 'prop-types'

const Header = ({ navigation, navigationOptions, index }) => (
  <View style={styles.header}>
    <Button rounded light transparent onPress={navigation.toggleDrawer} style={styles.button}>
      <Icon style={{ fontSize: 30 }} name="menu" />
    </Button>
    {index && navigation.getParam('title') ? (
      <View style={styles.bookInfo}>
        <Title style={{ color: 'white', textAlign: 'left' }}>{navigation.getParam('title')}</Title>
        <Subtitle style={{ color: 'white', textAlign: 'left' }}>
          {`${navigation.getParam('category')} - ${navigation.getParam('author')}`}
        </Subtitle>
      </View>
    ) : (
      <H2 style={{ color: 'white' }}>{navigationOptions.title}</H2>
    )}
  </View>
)

Header.propTypes = {
  navigation: PropTypes.object.isRequired,
  navigationOptions: PropTypes.object,
  index: PropTypes.number
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
  },
  bookInfo: {
    justifyContent: 'flex-start'
  }
})
