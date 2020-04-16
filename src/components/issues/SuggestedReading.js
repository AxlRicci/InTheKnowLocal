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

    // current window size.
    const size = useWindowSize();

    // Hook to monitor window size. Used to render proper amount of articles depending on window size.
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

    // render content when/if data from redux/firebase is available.
    let renderContent = null;

    if (usableFeatures) {
        renderContent = (
            <div className="suggested-reading">
                <div className="suggested-reading__intro">
                    <h3 className="suggested-reading__intro suggested-reading__intro--title">Suggested Reading</h3>
                </div>
                <div className="suggested-reading__issue-grid">
                    {usableFeatures.map((feature, index) => {
                        if (index >= (size.width <= 500 ? 4 : size.width > 500 ? 6 : 6) ){
                            return null
                        } else {
                            return (
                                <div className="suggested-reading__issue" key={feature.slug}>
                                    <Link to={`/features/${feature.slug}`}>
                                        <img src={feature.cover} className="suggested-reading__cover-img" alt={`${feature.name}'s In The Know Local Cover for ${feature.city}`}/>
                                    </Link>
                                </div>
                            )
                        }})}
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

export default SuggestedReading
