import React from 'react'

import './header-gallery.styles.scss';


const HeaderGallery = ({
    content: {
        headerGalleryMain,
        headerGalleryMainAlt,
        headerGallerySide1,
        headerGallerySide1Alt,
        headerGallerySide2,
        headerGallerySide2Alt
        }
    }) => (
        <header className="header-gallery">
            <div className="header-gallery__item header-gallery__item--main">
                <img className="header-gallery__img" src={`${headerGalleryMain}`} alt={headerGalleryMainAlt}/>
            </div>
            <div className="header-gallery__item header-gallery__item--side-1">
                <img className="header-gallery__img" src={`${headerGallerySide1}`} alt={headerGallerySide1Alt}/>
            </div>
            <div className="header-gallery__item header-gallery__item--side-2">
                <img className="header-gallery__img"src={headerGallerySide2} alt={headerGallerySide2Alt}/>
            </div>
        </header>
    )

export default HeaderGallery