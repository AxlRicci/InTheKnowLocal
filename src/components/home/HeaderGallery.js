import React, {useEffect, useState} from 'react'
//import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HeaderGallery = (props) => {
    const siteContent = useSelector((state) => {
        let data = state.firestore.data.siteContent;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    const size = useWindowSize();

    // Hook
    function useWindowSize() {
    const isClient = typeof window === 'object';

    function getSize() {
        return {
        width: isClient ? window.innerWidth : undefined,
        height: isClient ? window.innerHeight : undefined
        };
    }

    const [windowSize, setWindowSize] = useState(getSize);

    useEffect(() => {
        if (!isClient) {
        return false;
        }
        
        function handleResize() {
        setWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }); // Empty array ensures that effect is only run on mount and unmount
    return windowSize;
    }

    let mainImg = null;
    let sideImg = null;

    if (size.width < 768 ) { // mobile
        mainImg = '?w=395&h=302';
        sideImg = '?w=355&h=213';
    } else if (size.width >= 768 && size.width < 992) { //tablet
        mainImg = '?w=720&h=548';
        sideImg = '?w=355&h=213';
    } else if (size.width >= 992 && size.width < 1200 ) { // small desktop
        mainImg = '?w=623&h=474';
        sideImg = '?w=306&h=232';
    } else if (size.width >= 1200) { // large desktop
        mainImg = '?w=756&h=575';
        sideImg = '?w=373&h=282';
    }

    return (
        <div className="container">
            <div className="header-gallery">
               <div className="header-gallery__item header-gallery__item--main">
                   <img className="header-gallery__img" src={siteContent ? `${siteContent[0].headerGalleryMain}${mainImg}` : null} alt={siteContent ? siteContent[0].headerGalleryMainAlt : null}/>
               </div>
               <div className="header-gallery__item header-gallery__item--side-1">
                   <img className="header-gallery__img" src={siteContent ? `${siteContent[0].headerGallerySide1}${sideImg}` : null} alt={siteContent ? siteContent[0].headerGallerySide1Alt : null}/>
               </div>
               <div className="header-gallery__item header-gallery__item--side-2">
                   <img className="header-gallery__img"src={siteContent ? siteContent[0].headerGallerySide2 : null} alt={siteContent ? siteContent[0].headerGallerySide2Alt : null}/>
               </div>
            </div>
        </div>
    )
}

export default HeaderGallery