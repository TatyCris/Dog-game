import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class Button extends Component {
  static propTypes = {
    title: propTypes.string.isRequired,
    onclick: propTypes.func.isRequired,
  }

  render() {
    // console.log('hi', this.props);
    
    return (
      <button value={this.props.title} onClick={this.props.checkAnswer}>{this.props.title}</button>
    )
  }
}
