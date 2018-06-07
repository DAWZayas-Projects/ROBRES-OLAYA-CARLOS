import React from 'react'
import PropTypes from 'prop-types'

import { List, ListItem, Thumbnail, Body, Text } from 'native-base'

const Bookmarks = ({ bookmarks }) => (
  <List>
    {bookmarks.map(({
      bookId, thumbnail, title, chapterId, chapterTitle
    }) => (
      <ListItem key={`${bookId}-${chapterId}`}>
        <Thumbnail square size={80} source={{ uri: thumbnail }} />
        <Body>
          <Text>{title}</Text>
          <Text note>{chapterTitle}</Text>
        </Body>
      </ListItem>
    ))}
  </List>
)

Bookmarks.propTypes = {
  bookmarks: PropTypes.array
}

export default Bookmarks
