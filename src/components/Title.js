import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Title extends Component {
  static propTypes = {
    content: propTypes.string.isRequired
  }
  render() {
    return (
      <h1>{this.props.content}</h1>
    )
  }
}
