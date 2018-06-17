import React, { Component } from 'react'
import { StyleSheet, TextInput, TouchableHighlight, View } from 'react-native'
import { Icon } from 'native-base'
import PropTypes from 'prop-types'

import AnimatedIcon from '../WithAnimation/AnimatedIcon'

class Chapter extends Component {
  constructor (props) {
    super(props)
    this.state = {
      chapter: props.data,
      chapterTitle: props.title,
      isEditing: false
    }
  }

  edit = () => {
    this.setState({
      isEditing: true
    })
  }

  confirmEdit = () => {
    this.setState(
      {
        isEditing: false
      },
      () => this.props.handleConfirmChages(this.state.chapterTitle, this.state.chapter)
    )
  }

  cancelEdit = () => {
    this.setState({
      chapter: this.props.data,
      chapterTitle: this.props.title,
      isEditing: false
    })
  }

  render () {
    const { hasBookmark, handleSetBookmark, owner } = this.props
    const { chapter, chapterTitle, isEditing } = this.state

    return (
      <View>
        <View style={styles.chapterHeader}>
          <TextInput
            selectionColor="#12345655"
            underlineColorAndroid={isEditing ? '#123456' : 'transparent'}
            editable={isEditing}
            multiline
            onChangeText={newTitle => this.setState({ chapterTitle: newTitle })}
            style={{
              width: '80%',
              fontSize: 20,
              color: '#333',
              fontWeight: 'bold'
            }}
          >
            {chapterTitle}
          </TextInput>
          <View style={{ flexDirection: 'row' }}>
            {isEditing
              ? [
                <TouchableHighlight key="close" onPress={this.cancelEdit}>
                  <Icon name="close" style={{ color: '#123456' }} />
                </TouchableHighlight>,
                <TouchableHighlight
                  key="confirm"
                  onPress={this.confirmEdit}
                  underlayColor="transparent"
                  style={{ backgroundColor: 'transparent', marginLeft: 10 }}
                >
                  <Icon name="checkmark" style={{ color: '#123456' }} />
                </TouchableHighlight>
              ]
              : [
                owner && (
                  <TouchableHighlight key="edit" onPress={this.edit}>
                    <Icon name="create" style={{ color: '#123456' }} />
                  </TouchableHighlight>
                ),
                <TouchableHighlight
                  key="bookmark"
                  onPress={handleSetBookmark}
                  underlayColor="transparent"
                  style={{ backgroundColor: 'transparent', marginLeft: 10 }}
                >
                  <AnimatedIcon name="bookmark" active={hasBookmark} />
                </TouchableHighlight>
              ]}
          </View>
        </View>
        <TextInput
          selectionColor="#12345655"
          underlineColorAndroid={isEditing ? '#123456' : 'transparent'}
          editable={isEditing}
          onChangeText={newData => this.setState({ chapter: newData })}
          multiline
          style={styles.chapterContent}
        >
          {chapter}
        </TextInput>
      </View>
    )
  }
}

Chapter.propTypes = {
  title: PropTypes.string,
  data: PropTypes.string,
  hasBookmark: PropTypes.bool,
  handleSetBookmark: PropTypes.func,
  handleConfirmChages: PropTypes.func,
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
    paddingHorizontal: 10,
    color: '#333'
  }
})
