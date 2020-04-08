import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './suggestedReading.scss'

// use prop toRender to pass in number of issues that will be rendered for the component. The default is 4.
// component requires prop current page as a slug to remove it from the suggested reading array.

const SuggestedReading = (props) => {
    const { currentPage } = props

    const features = useSelector((state) => state.firestore.data.features);
    const usableFeatures = features ? Object.keys(features).map(key => features[key]).filter(feature => feature.slug !== currentPage).sort((a,b) => Date.parse(a.publishDate) - Date.parse(b.publishDate)) : null;

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

    return (
        <div className="suggested-reading">
            <div className="suggested-reading__intro">
                <h3 className="suggested-reading__intro suggested-reading__intro--title">Suggested Reading</h3>
            </div>
            <div className="suggested-reading__issue-grid">
                {usableFeatures
                ?usableFeatures.map((feature, index) => {
                    if (index >= (size.width <= 500 ? 4 : size.width > 500 ? 6 : 6) ){
                        return null
                    } else {
                        return (
                                <div className="suggested-reading__issue" key={feature.id}>
                                    <Link to={`/features/${feature.slug}`}>
                                        <img src={feature.cover} className="suggested-reading__cover-img" alt={`${feature.name}'s In The Know Local Cover`}/>
                                    </Link>
                                </div>
                                )
                    }
                        })
                        : null
                    }
            </div>
        </div>
    )
}

export default SuggestedReading
// <div className="container py-5">
//     <h5>Suggested Reading</h5>
//     <div className='row'>
//         <div className="col-12 d-flex flex-wrap">
        //         </div>
        //     </div>
        // </div>