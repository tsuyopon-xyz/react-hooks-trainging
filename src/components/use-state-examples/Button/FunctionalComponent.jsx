import React, { useState } from 'react'
import './Button.css';

function FunctionalComponent(props) {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const textColor = count % 2 ? '#ffffff' : '#00ff00'

  return (
    <div
      className={`Button ${props.className}`}
      onClick={handleClick}
      style={{color: textColor}}
    >
      FCボタン : {count}
    </div>
  )
}

export default FunctionalComponent;