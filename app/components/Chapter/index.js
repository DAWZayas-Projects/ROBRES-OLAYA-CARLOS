import React from 'react'
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Icon } from 'native-base'
import PropTypes from 'prop-types'

import AnimatedIcon from '../WithAnimation/AnimatedIcon'

const Chapter = ({
  title, data, hasBookmark, handleSetBookmark, owner
}) => (
  <View>
    <View style={styles.chapterHeader}>
      <Text>{title}</Text>
      {owner && (
        <TouchableHighlight>
          <Icon name="create" style={{ color: '#123456' }} />
        </TouchableHighlight>
      )}
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
  title: PropTypes.string,
  data: PropTypes.string,
  hasBookmark: PropTypes.bool,
  handleSetBookmark: PropTypes.func,
  owner: PropTypes.bool
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
