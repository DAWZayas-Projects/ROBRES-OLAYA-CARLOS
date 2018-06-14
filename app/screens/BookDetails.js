import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { Header, Body, Title, Subtitle, Right } from 'native-base'
import PropTypes from 'prop-types'

import { Chapter } from '../containers'

const BookDetails = ({ bookInfo, chapters, owner }) => (
  <View style={{ flex: 1 }}>
    <Header style={styles.bookInfo} noShadow>
      <Body>
        <Title style={{ color: '#333' }}>{bookInfo.title}</Title>
        <Subtitle style={{ color: '#333' }}>{bookInfo.category}</Subtitle>
      </Body>
      <Right />
    </Header>
    <FlatList
      data={chapters}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Chapter {...item} owner={owner} />}
      ListFooterComponent={<View style={{ paddingTop: 10 }} />}
    />
  </View>
)

BookDetails.propTypes = {
  bookInfo: PropTypes.object,
  chapters: PropTypes.array,
  owner: PropTypes.bool
}

export default BookDetails

const styles = StyleSheet.create({
  bookInfo: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0.5,
    borderBottomColor: '#CCC'
  }
})
