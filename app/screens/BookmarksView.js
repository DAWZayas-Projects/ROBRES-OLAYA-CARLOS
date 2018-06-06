import React from 'react'
import PropTypes from 'prop-types'

import { List, ListItem, Thumbnail, Body, Text } from 'native-base'

const Bookmarks = ({ bookmarks }) => (
  <List>
    {bookmarks.map(({
      bookId, thumbnail, title, chapterId
    }) => (
      <ListItem key={`${bookId}-${chapterId}`}>
        <Thumbnail square size={80} source={{ uri: thumbnail }} />
        <Body>
          <Text>{title}</Text>
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
