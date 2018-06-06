import React, { Component } from 'react'
import { Animated } from 'react-native'
import { Icon } from 'native-base'
import PropTypes from 'prop-types'

const AnimatedIcon = Animated.createAnimatedComponent(Icon)

class IconStatus extends Component {
  constructor (props) {
    super(props)
    this.color = new Animated.Value(props.active ? 1 : 0)
  }

  shouldComponentUpdate = next => !(next.active === this.props.active)

  componentDidUpdate = () => {
    const { active } = this.props
    const color = active ? 0 : 1

    Animated.timing({
      toValue: parseInt(color.substring(1), 16)
    }).start()
  }

  render () {
    const {
      name, style, initialColor, finalColor
    } = this.props
    const color = this.color.interpolate({
      inputRange: [0, 1],
      outputRange: [initialColor, finalColor]
    })

    return <AnimatedIcon style={[style, { color }]} name={name} />
  }
}

IconStatus.defaultProps = {
  active: false,
  initialColor: '#CCC',
  finalColor: '#333',
  name: '',
  style: {}
}

IconStatus.propTypes = {
  active: PropTypes.bool,
  initialColor: PropTypes.string,
  finalColor: PropTypes.string,
  name: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
}

export default IconStatus
