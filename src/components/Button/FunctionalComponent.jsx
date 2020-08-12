import React from 'react'
import './Button.css';

function FunctionalComponent(props) {
  return (
    <div className={`Button ${props.className}`}>
      FCボタン
    </div>
  )
}

export default FunctionalComponent;