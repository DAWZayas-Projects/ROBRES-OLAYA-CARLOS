import React from 'react'
import PropTypes from 'prop-types'
import { Image, TouchableNativeFeedback } from 'react-native'
import { Card, CardItem, Text, Body } from 'native-base'

const Book = ({
  handleOnPress, bookId, title, author, thumbnail, category
}) => (
  <Card>
    <TouchableNativeFeedback onPress={() => handleOnPress(bookId)}>
      <CardItem>
        <Body>
          <Text>{title}</Text>
          <Text note>{author}</Text>
        </Body>
      </CardItem>
    </TouchableNativeFeedback>
    <CardItem cardBody>
      <Image
        source={thumbnail ? { uri: thumbnail } : require('./img/books.jpg')}
        style={{ height: 100, width: '100%' }}
      />
    </CardItem>
    <CardItem>
      <Text note>{category}</Text>
    </CardItem>
  </Card>
)

Book.defaultProps = {
  category: 'Sin categoría'
}

Book.propTypes = {
  handleOnPress: PropTypes.func,
  bookId: PropTypes.number,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  thumbnail: PropTypes.string
}

export default Book
