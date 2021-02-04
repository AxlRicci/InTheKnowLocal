import React from 'react'
import './header-gallery.styles.scss';

// Header Gallery for homepage.
// Optimizes images for screen widths 320px to 1440px.
// Props: 
// 1. Image src from SIRV for each section
// 2. Image alt content for each section
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
                <img 
                    className="header-gallery__img" 
                    alt={headerGalleryMainAlt}
                    srcSet={`
                        ${headerGalleryMain}?w=943&h=720&format=webp&webp.fallback=jpg 1440w,
                        ${headerGalleryMain}?w=666&h=511&format=webp&webp.fallback=jpg 1024w,
                        ${headerGalleryMain}?w=748&h=572&format=webp&webp.fallback=jpg 768w,
                        ${headerGalleryMain}?w=405&h=311&format=webp&webp.fallback=jpg 425w,
                        ${headerGalleryMain}?w=355&h=273&format=webp&webp.fallback=jpg 375w,
                        ${headerGalleryMain}?w=300&h=231&format=webp&webp.fallback=jpg 320w,
                    `}
                    src={`${headerGalleryMain}`}
                    />
            </div>
            <div className="header-gallery__item header-gallery__item--side-1">
                <img 
                    className="header-gallery__img" 
                    alt={headerGallerySide1Alt}
                    srcSet={`
                        ${headerGallerySide1}?w=466&h=355&format=webp&webp.fallback=jpg 1440w,
                        ${headerGallerySide1}?w=328&h=250&format=webp&webp.fallback=jpg 1024w,
                        ${headerGallerySide1}?w=369&h=281&format=webp&webp.fallback=jpg 768w,
                    `}
                    src={`${headerGallerySide1}`}
                />
            </div>
            <div className="header-gallery__item header-gallery__item--side-2">
                <img 
                    className="header-gallery__img"
                    alt={headerGallerySide2Alt}
                    srcSet={`
                        ${headerGallerySide2}?w=466&h=355&format=webp&webp.fallback=jpg 1440w,
                        ${headerGallerySide2}?w=328&h=250&format=webp&webp.fallback=jpg 1024w,
                        ${headerGallerySide2}?w=369&h=281&format=webp&webp.fallback=jpg 768w,
                    `}
                    src={headerGallerySide2} />
            </div>
        </header>
    )

export default HeaderGallery