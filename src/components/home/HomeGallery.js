import React from 'react'
import { Link } from 'react-router-dom'

const HomeGallery = (props) => {
    return (
        <div className="container">
            <div className="main-gallery">
               <div className="main-gallery__main-img"> Main Img</div>
               <div className="main-gallery__side-img--img1">Side image #1</div>
               <div className="main-gallery__side-img--img2">Side image #2</div>
            </div>
        </div>
    )
}

export default HomeGallery