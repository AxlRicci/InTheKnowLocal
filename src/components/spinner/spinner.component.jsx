import React from 'react'
import './spinner.styles.scss'
import sync from '../../assets/sync.png'

const Spinner = () => {
  return (
    <div className="spinner__container">
      <div className="spinner__image-container">
        <img src={sync} className="spinner__image" alt="Sync Icon" ></img>
      </div>
    </div>
  )
}

export default Spinner
