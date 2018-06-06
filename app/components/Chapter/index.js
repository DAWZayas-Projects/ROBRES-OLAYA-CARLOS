import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import PropTypes from 'prop-types'

import AnimatedIcon from '../WithAnimation/AnimatedIcon'

const Chapter = ({
  id, title, data, hasBookmark, handleSetBookmark
}) => (
  <View>
    <View style={styles.chapterHeader}>
      <Text>{title}</Text>
      <TouchableHighlight
        onPress={handleSetBookmark}
        underlayColor="transparent"
        style={{ backgroundColor: 'transparent' }}
      >
        <AnimatedIcon name="md-bookmark" active={hasBookmark} />
      </TouchableHighlight>
    </View>
    <Text style={styles.chapterContent}>{data}</Text>
  </View>
)

Chapter.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  data: PropTypes.string,
  hasBookmark: PropTypes.bool,
  handleSetBookmark: PropTypes.func
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
