import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './IssueList.scss'

//TODO: sort by city / feature name.

const IssueList = (props) => {
    const features = useSelector((state) => {
        let data = state.firestore.data.features;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    useEffect(()=> { document.title = 'Issues | In The Know Local'})

    // current window size
    const size = useWindowSize();

    // Hook to determine current window size.
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


    // set proper image size to load depending on window size.
    let coverSize = null;

    if (size.width < 768 ) { // mobile
        coverSize = '?w=192&h=253';
    } else if (size.width >= 768 && size.width < 992) { //tablet
        coverSize = '?w=233&h=306';
    } else if (size.width >= 992 && size.width < 1200 ) { // small desktop
        coverSize = '?w=227&h=298';
    } else if (size.width >= 1200) { // large desktop
        coverSize = '?w=277&h=363';
    }

    let renderContent = null;

    if (features) {
        renderContent = (
            <main className="container">
                <div className="issue__grid">
                    {features.map((feature) => {
                        if (feature.cover){
                            return (
                                <div className="issue__grid-item" key={feature.slug}>
                                    <Link to={feature.slug === 'joette-fielding' ? `/city/oakville-joette-fielding` : `/features/${feature.slug}`}> {/* if feature is legacy i.e joette fielding then redirect to old url style  */}
                                        <img src={`${feature.cover}${coverSize}`}className="issue__img" alt={`${feature.name}'s In The Know Local Magazine Cover for ${feature.city}`}/>
                                    </Link>
                                </div>
                            )
                        }})}
                </div>
            </main>
        )
    }

    return (
        <>
        {renderContent ? renderContent : <p>Loading...</p>}
        </>
        )
    }
    
export default IssueList