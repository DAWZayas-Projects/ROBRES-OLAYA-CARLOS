import React from 'react'
import PropTypes from 'prop-types'
import { Image } from 'react-native'
import { Card, CardItem, Text, Body } from 'native-base'

const Book = ({
  title, author, thumbnail, category
}) => (
  <Card>
    <CardItem>
      <Body>
        <Text>{title}</Text>
        <Text note>{author}</Text>
      </Body>
    </CardItem>
    <CardItem cardBody>
      <Image source={thumbnail} style={{ height: 100 }} />
    </CardItem>
    <CardItem>
      <Text note>{category}</Text>
    </CardItem>
  </Card>
)

Book.defaultProps = {
  category: 'Sin categoría',
  thumbnail: require('./img/books.jpg')
}

Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
  thumbnail: PropTypes.string
}

export default Book
