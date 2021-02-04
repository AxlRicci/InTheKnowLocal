import React from 'react'
import './spinner.styles.scss'
import fork from '../../assets/fork.svg'
import pin from '../../assets/maps-and-flags.svg'
import paw from '../../assets/pawprint.svg'
import party from '../../assets/party.svg'
import world from '../../assets/worldwide.svg'

// Renders a spinner animation.

const Spinner = () => {
  return (
    <div className="spinner__container">
        <span className="sr-only">Page is Loading..</span>
        <div className="spinner__image-container">
          <div className="spinner__disk">
              <img src={fork} className="spinner__image spinner__image--1" alt="Fork Icon" ></img>
              <img src={pin} className="spinner__image spinner__image--2" alt="Pin Icon" ></img>
              <img src={paw} className="spinner__image spinner__image--3" alt="Paw Icon" ></img>
              <img src={party} className="spinner__image spinner__image--4" alt="Tower Icon" ></img>
          </div>
          <div className="spinner__cover">
            <img src={world} className="spinner__cover-image" alt="Tower Icon" ></img>
          </div>
        </div>
    </div>
  )
}

export default Spinner
