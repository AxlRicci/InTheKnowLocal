import React from 'react'
//import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HeaderGallery = (props) => {
    const siteContent = useSelector((state) => {
        let data = state.firestore.data.siteContent;
        return data ? Object.keys(data).map(key => data[key]) : null
    });


    return (
        <div className="container">
            <div className="header-gallery">
               <div className="header-gallery__item header-gallery__item--main">
                   <img className="header-gallery__img" src={siteContent ? siteContent[0].headerGalleryMain : null} alt=""/>
               </div>
               <div className="header-gallery__item header-gallery__item--side-1">
                   <img className="header-gallery__img" src={siteContent ? siteContent[0].headerGallerySide1 : null} alt=""/>
               </div>
               <div className="header-gallery__item header-gallery__item--side-2">
                   <img className="header-gallery__img"src={siteContent ? siteContent[0].headerGallerySide2 : null} alt=""/>
               </div>
            </div>
        </div>
    )
}

export default HeaderGallery