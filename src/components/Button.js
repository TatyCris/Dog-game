import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Button.css'

export default class Button extends Component {
  static propTypes = {
    title: propTypes.string,
    onclick: propTypes.func,
  }

  render() {
    return (
      <button
        className="button"
        value={this.props.title}
        onClick={this.props.checkAnswer}
      >
        {this.props.title}
        {this.props.children}
        
      </button>
    )
  }
}
