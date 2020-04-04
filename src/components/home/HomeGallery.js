import React from 'react'
import { Link } from 'react-router-dom'

const HomeGallery = (props) => {
    return (
        <div className="container">
            <div className="header-gallery">
               <div className="header-gallery__item header-gallery__item--main">
                   <img className="header-gallery__img"src="https://images.unsplash.com/photo-1585436634834-dc83ead5f511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt=""/>
               </div>
               <div className="header-gallery__item header-gallery__item--side-1">
                   <img className="header-gallery__img" src="https://images.unsplash.com/photo-1585803536199-7a8bc5384d14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80" alt=""/>
               </div>
               <div className="header-gallery__item header-gallery__item--side-2">
                   <img className="header-gallery__img"src="https://images.unsplash.com/photo-1481897083252-7024610f34d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1408&q=80" alt=""/>
               </div>
            </div>
        </div>
    )
}

export default HomeGallery