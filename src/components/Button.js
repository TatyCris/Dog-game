import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
      title: propTypes.string.isRequired,
      onclick: propTypes.func.isRequired,
    }
  render() {
    return (
    <button>{this.props.title}</button>
    )
  }
}
