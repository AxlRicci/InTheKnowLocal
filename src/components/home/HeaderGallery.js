import React, {useEffect, useState} from 'react'
//import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const HeaderGallery = () => {
    const reduxData = useSelector((state) => {
        let data = state.firestore.data.siteContent;
        return data ? Object.keys(data).map(key => data[key]) : null;
    });

    const siteContent = reduxData ? reduxData[0] : null; 

    // The current size of the window.
    const size = useWindowSize();

    // Hook to monitor window size.
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

    // Use current window size to load appropriately sized images.
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

    // Content to be rendered if data from redux/firebase available.

    let renderContent = null;

    if (siteContent) {
        renderContent = (
            <div className="container">
            <div className="header-gallery">
               <div className="header-gallery__item header-gallery__item--main">
                   <img className="header-gallery__img" src={`${siteContent.headerGalleryMain}${mainImg}`} alt={siteContent.headerGalleryMainAlt}/>
               </div>
               <div className="header-gallery__item header-gallery__item--side-1">
                   <img className="header-gallery__img" src={`${siteContent.headerGallerySide1}${sideImg}`} alt={siteContent.headerGallerySide1Alt}/>
               </div>
               <div className="header-gallery__item header-gallery__item--side-2">
                   <img className="header-gallery__img"src={siteContent.headerGallerySide2} alt={siteContent.headerGallerySide2Alt}/>
               </div>
            </div>
        </div>
        )
    }

    return (
        <>
        {renderContent ? renderContent : null}
        </>
    )
}

export default HeaderGallery