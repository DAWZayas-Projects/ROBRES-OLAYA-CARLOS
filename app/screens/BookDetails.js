import React from 'react'
import { FlatList, View } from 'react-native'
import PropTypes from 'prop-types'

import { Chapter } from '../containers'

const BookDetails = ({ chapters, owner }) => (
  <View style={{ flex: 1 }}>
    <FlatList
      data={chapters}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Chapter {...item} owner={owner} />}
      ListFooterComponent={<View style={{ paddingTop: 10 }} />}
    />
  </View>
)

BookDetails.propTypes = {
  navigation: PropTypes.object,
  bookInfo: PropTypes.object,
  chapters: PropTypes.array,
  owner: PropTypes.bool
}

export default BookDetails
