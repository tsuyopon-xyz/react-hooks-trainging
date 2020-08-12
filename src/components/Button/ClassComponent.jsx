import React, { Component } from 'react'
import './Button.css';

class ButtonClass extends Component {
  render() {
    return (
      <div className={`Button ${this.props.className}`}>
        CCボタン
      </div>
    )
  }
}

export default ButtonClass;