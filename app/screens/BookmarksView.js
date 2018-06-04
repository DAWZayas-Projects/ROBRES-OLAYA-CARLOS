import React from 'react'
import PropTypes from 'prop-types'

import { List, ListItem, Thumbnail, Body, Text } from 'native-base'

const Bookmarks = ({ bookmarks }) => (
  <List>
    {bookmarks.map(({ info }) => (
      <ListItem key={info.bookId}>
        <Thumbnail square size={80} source={{ uri: info.thumbnail }} />
        <Body>
          <Text>{info.title}</Text>
          <Text note>Its time to build a difference . .</Text>
        </Body>
      </ListItem>
    ))}
  </List>
)

Bookmarks.propTypes = {
  bookmarks: PropTypes.array
}

export default Bookmarks
