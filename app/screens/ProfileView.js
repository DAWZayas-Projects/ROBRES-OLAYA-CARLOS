import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  ScrollView,
  TouchableNativeFeedback,
  Modal,
  TextInput,
  View
} from 'react-native'
import { Card, CardItem, H3, Text, Thumbnail, Icon } from 'native-base'
import PropTypes from 'prop-types'

class ProfilePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      modalVisible: false,
      alias: props.alias,
      exLibris: props.exLibris
    }
  }

  setModalVisible = () => {
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible
    }))
  }

  closeModal = () => {
    this.setState({
      modalVisible: false,
      alias: this.props.alias,
      exLibris: this.props.exLibris
    })
  }

  saveChanges = (newInfo) => {
    const { handleChangeProfileInfo } = this.props
    handleChangeProfileInfo(newInfo)
    this.setState({ modalVisible: false })
  }

  render () {
    const {
      alias, profilePic, userName, exLibris, email
    } = this.props

    return [
      <ScrollView style={{ flex: 1 }} key="profile">
        <Card>
          <CardItem style={{ justifyContent: 'space-between' }}>
            <Thumbnail large source={{ uri: profilePic }} />
            <View>
              <H3 style={{ color: '#333' }}>{alias || userName}</H3>
              <Text note>{exLibris}</Text>
            </View>
            <TouchableNativeFeedback onPress={this.setModalVisible}>
              <Icon style={{ textAlign: 'right', color: '#123456' }} name="create" />
            </TouchableNativeFeedback>
          </CardItem>
        </Card>
        <Card>
          <CardItem header>
            <H3 style={{ color: '#123456' }}>Información</H3>
          </CardItem>
          <CardItem>
            <View>
              <Text style={{ fontSize: 12, color: '#123456' }}>Email: </Text>
              <Text>{email}</Text>
            </View>
          </CardItem>
          <CardItem>
            <View>
              <Text style={{ fontSize: 12, color: '#123456' }}>Nombre de usuario:</Text>
              <Text>{userName}</Text>
            </View>
          </CardItem>
        </Card>
      </ScrollView>,
      <View key="modal">
        <Modal
          animationType="fade"
          transparent
          visible={this.state.modalVisible}
          onRequestClose={this.closeModal}
        >
          <View style={styles.modal}>
            <View style={styles.modalContent}>
              <Text style={{ fontSize: 14, color: '#123456', paddingLeft: 5 }}>Alias:</Text>
              <TextInput
                style={{ height: 40 }}
                maxLength={15}
                onChangeText={text => this.setState({ alias: text })}
                value={this.state.alias}
                placeholder="Alias..."
                placeholderTextColor="#CCC"
                underlineColorAndroid="#123456"
              />
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 14,
                  color: '#123456',
                  paddingLeft: 5
                }}
              >
                ExLibris:
              </Text>
              <TextInput
                style={{ height: 40 }}
                maxLength={10}
                onChangeText={text => this.setState({ exLibris: text })}
                value={this.state.exLibris}
                placeholder="ExLibris..."
                placeholderTextColor="#CCC"
                underlineColorAndroid="#123456"
              />
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: 10 }}>
                <TouchableNativeFeedback onPress={this.closeModal}>
                  <View style={{ borderRadius: 2, marginRight: 10 }}>
                    <Text
                      style={{
                        fontWeight: '500',
                        textAlign: 'center',
                        padding: 8,
                        color: '#333'
                      }}
                    >
                      Cancelar
                    </Text>
                  </View>
                </TouchableNativeFeedback>
                <Button
                  color="#123456"
                  title="Guardar"
                  onPress={() =>
                    this.saveChanges({ alias: this.state.alias, exLibris: this.state.exLibris })
                  }
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    ]
  }
}

ProfilePage.propTypes = {
  handleChangeProfileInfo: PropTypes.func,
  alias: PropTypes.string,
  profilePic: PropTypes.string,
  userName: PropTypes.string,
  exLibris: PropTypes.string,
  email: PropTypes.string
}

export default ProfilePage

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, .6)'
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 2,
    padding: 10,
    elevation: 15,
    width: '80%'
  }
})
