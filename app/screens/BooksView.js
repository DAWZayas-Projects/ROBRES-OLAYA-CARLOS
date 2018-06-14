import React from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'

import { Book } from '../containers'

const BooksView = ({ books }) => (
  <FlatList
    data={books}
    keyExtractor={item => item.bookId}
    numColumns={2}
    renderItem={({ item }) => <Book {...item} />}
  />
)

BooksView.propTypes = {
  books: PropTypes.array
}

export default BooksView
