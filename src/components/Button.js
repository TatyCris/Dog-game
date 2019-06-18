import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
      onClick: propTypes.func.isRequired,
    }
  render() {
    return (
    <button>Click me</button>
    )
  }
}
