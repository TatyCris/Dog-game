import React, { Component } from 'react'
import propTypes from 'prop-types'
import './Button.css'

export default class Button extends Component {
  static propTypes = {
    title: propTypes.string,
    onclick: propTypes.func,
  }

  setTimeOut () {
    setTimeout(this.props.checkAnswer, 5000)
  }

  render() {
    console.log('checkAnswer', this.props.checkAnswer);
    
    return (
      <button
        className="button"
        value={this.props.title}
        // onClick="setTimeout({this.props.checkAnswer}, 3000)"
        // onClick={setTimeout(this.props.checkAnswer, 3000)}
        // onClick={this.setTimeOut()}
        // onClick={setTimeout(this.props.checkAnswer, 2000)} {this.props.checkAnswer}
        onClick={this.props.checkAnswer}
      >
        {this.props.title}
        {this.props.children}
        
      </button>
    )
  }
}
