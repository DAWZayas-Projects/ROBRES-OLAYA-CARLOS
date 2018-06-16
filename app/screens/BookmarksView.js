import React from 'react'
import PropTypes from 'prop-types'

import { TouchableNativeFeedback } from 'react-native'
import { List, ListItem, Thumbnail, Body, Text, Right, Icon } from 'native-base'

const Bookmarks = ({ bookmarks, handleOnPress, handleDeleteBookmark }) => (
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
            <Text numberOfLines={1} note>
              {chapterTitle}
            </Text>
          </Body>
          <Right>
            <TouchableNativeFeedback
              onPress={() => handleDeleteBookmark({ bookId, chapterId, chapterTitle })}
            >
              <Icon style={{ fontSize: 30 }} name="close-circle" />
            </TouchableNativeFeedback>
          </Right>
        </ListItem>
      </TouchableNativeFeedback>
    ))}
  </List>
)

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  handleOnPress: PropTypes.func,
  handleDeleteBookmark: PropTypes.func
}

export default Bookmarks
