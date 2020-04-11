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

    return (
        <main className="container">
            <div className="issue__grid">
                {features
                ?features.map((feature) => {
                    if (feature.cover){
                        return (
                            <div className="issue__grid-item" key={feature.slug}>
                                <Link to={`/features/${feature.slug}`}>
                                    <img src={`${feature.cover}${coverSize}`}className="issue__img" alt={`${feature.name}'s In The Know Local Magazine Cover for ${feature.city}`}/>
                                </Link>
                            </div>
                        )
                    } else {
                        return null
                    }
                        })
                        : null
                    }
            </div>
        </main>
        )
    }
    
export default IssueList