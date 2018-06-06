import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import PropTypes from 'prop-types'

import AnimatedIcon from '../WithAnimation/AnimatedIcon'

const Chapter = ({
  id, title, data, hasBookmark, setBookmark
}) => (
  <View>
    <View style={styles.chapterHeader}>
      <Text>{title}</Text>
      <TouchableWithoutFeedback>
        <AnimatedIcon name="md-bookmark" active={hasBookmark} />
      </TouchableWithoutFeedback>
    </View>
    <Text style={styles.chapterContent}>{data}</Text>
  </View>
)

Chapter.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  data: PropTypes.string,
  hasBookmark: PropTypes.bool,
  setBookmark: PropTypes.func
}

export default Chapter

const styles = StyleSheet.create({
  chapterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  chapterContent: {
    paddingHorizontal: 10
  }
})
