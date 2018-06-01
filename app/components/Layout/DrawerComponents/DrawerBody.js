import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List, ListItem, Icon, Left, Right, Body } from 'native-base'

const navTo = ({ descriptors }, route) => {
  descriptors.stack.navigation.navigate({ routeName: route, key: route })
  descriptors.stack.navigation.closeDrawer()
}

const BodyDrawer = props => (
  <View style={styles.container}>
    <List>
      <ListItem onPress={() => navTo(props, 'Library')} icon>
        <Left>
          <Icon name="book" />
        </Left>
        <Body>
          <Text>Mi biblioteca</Text>
        </Body>
      </ListItem>
      <ListItem onPress={() => navTo(props, 'Bookmarks')} icon>
        <Left>
          <Icon name="bookmarks" />
        </Left>
        <Body>
          <Text>Mis marcas</Text>
        </Body>
      </ListItem>
      <ListItem onPress={() => navTo(props, 'Library')} icon>
        <Left>
          <Icon name="list" />
        </Left>
        <Body>
          <Text>Categorías</Text>
        </Body>
        <Right>
          <Icon name="arrow-down" />
        </Right>
      </ListItem>
    </List>
  </View>
)

export default BodyDrawer

const styles = StyleSheet.create({
  container: {}
})
