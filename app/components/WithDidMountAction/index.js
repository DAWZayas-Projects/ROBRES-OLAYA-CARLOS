import React, { Component } from 'react'
import PropTypes from 'prop-types'

const WithDidMountAction = WrappedComponent =>
  class ContainerComponent extends Component {
    static propTypes = {
      handleDidMountAction: PropTypes.func.isRequired
    }

    componentDidMount = this.props.handleDidMountAction

    render () {
      return <WrappedComponent {...this.props} />
    }
  }

export default WithDidMountAction
