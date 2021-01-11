import React, {useEffect, useState} from 'react'
import {firestore } from '../../firebase/firebase.utils';

import './header-gallery.styles.scss';


const HeaderGallery = () => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState({})
    
    useEffect(() => {
        const getHeaderInfo = async () => {
            const ref = firestore.doc(`siteContent/site-content`);
            ref.get()
                .then(doc => {
                    setData(doc.data());
                    setLoading(false);
                })
                .catch(err => {
                    console.error(err)
                })
        }
        getHeaderInfo();
    },[])


    if (isLoading) return <p>Loading content...</p>

    const {headerGalleryMain, headerGalleryMainAlt, headerGallerySide1, headerGallerySide1Alt, headerGallerySide2, headerGallerySide2Alt} = data;
    return (
        <div className="container">
            <div className="header-gallery">
                <div className="header-gallery__item header-gallery__item--main">
                    <img className="header-gallery__img" src={`${headerGalleryMain}`} alt={headerGalleryMainAlt}/>
                </div>
                <div className="header-gallery__item header-gallery__item--side-1">
                    <img className="header-gallery__img" src={`${headerGallerySide1}`} alt={headerGallerySide1Alt}/>
                </div>
                <div className="header-gallery__item header-gallery__item--side-2">
                    <img className="header-gallery__img"src={headerGallerySide2} alt={headerGallerySide2Alt}/>
                </div>
            </div>
        </div>
    )
}

export default HeaderGallery