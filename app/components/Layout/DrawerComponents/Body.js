import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { List, ListItem, Icon, Left, Right, Body } from 'native-base'

const BodyDrawer = () => (
  <View style={styles.container}>
    <List>
      <ListItem icon>
        <Left>
          <Icon name="book" />
        </Left>
        <Body>
          <Text>Mi biblioteca</Text>
        </Body>
      </ListItem>
      <ListItem icon>
        <Left>
          <Icon name="bookmarks" />
        </Left>
        <Body>
          <Text>Mis marcas</Text>
        </Body>
      </ListItem>
      <ListItem icon>
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
