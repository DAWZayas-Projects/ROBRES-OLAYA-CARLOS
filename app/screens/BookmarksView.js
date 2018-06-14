import React from 'react'
import PropTypes from 'prop-types'

import { TouchableNativeFeedback } from 'react-native'
import { List, ListItem, Thumbnail, Body, Text } from 'native-base'

const Bookmarks = ({ bookmarks, handleOnPress }) => (
  <List>
    {bookmarks.map(({
      bookId, thumbnail, title, chapterId, chapterTitle
    }) => (
      <TouchableNativeFeedback
        key={`${bookId}-${chapterId}`}
        onPress={() => handleOnPress(bookId, chapterId)}
      >
        <ListItem>
          <Thumbnail square size={80} source={{ uri: thumbnail }} />
          <Body>
            <Text>{title}</Text>
            <Text note>{chapterTitle}</Text>
          </Body>
        </ListItem>
      </TouchableNativeFeedback>
    ))}
  </List>
)

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  handleOnPress: PropTypes.func
}

export default Bookmarks
