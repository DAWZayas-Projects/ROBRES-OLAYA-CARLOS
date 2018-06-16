import React from 'react'
import { ScrollView, TouchableNativeFeedback, View } from 'react-native'
import { Card, CardItem, H3, Text, Thumbnail, Icon } from 'native-base'
import PropTypes from 'prop-types'

const ProfilePage = ({
  alias, profilePic, userName, exLibris, email
}) => (
  <ScrollView style={{ flex: 1 }}>
    <Card>
      <CardItem style={{ justifyContent: 'space-between' }}>
        <Thumbnail large source={{ uri: profilePic }} />
        <View>
          <H3 style={{ color: '#333' }}>{alias || userName}</H3>
          <Text note>{exLibris}</Text>
        </View>
        <TouchableNativeFeedback onPress={() => console.log('aaaa')}>
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
  </ScrollView>
)

ProfilePage.propTypes = {
  alias: PropTypes.string,
  profilePic: PropTypes.string,
  userName: PropTypes.string,
  exLibris: PropTypes.string,
  email: PropTypes.string
}

export default ProfilePage
