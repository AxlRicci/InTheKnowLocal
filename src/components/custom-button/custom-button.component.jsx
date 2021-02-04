import React from 'react'
import { Link } from 'react-router-dom'

import './custom-button.styles.scss'

const CustomButton = ({type, children, to, href, handleClick, disabled}) => {
  if (type === "Link") {
    return (
     <Link disabled={disabled} className="custom-button" to={to} >
       {children}
     </Link>
    )
  } else if (type === "a") {
    return (
      <a disabled={disabled} className="custom-button" href={href} >
        {children}
      </a>
     )
  } else if (type === "button" || type === "submit") {
    return (
      <button disabled={disabled} className="custom-button" type={type} onClick={handleClick} >
        {children}
      </button>
     )
  }
}

export default CustomButton
