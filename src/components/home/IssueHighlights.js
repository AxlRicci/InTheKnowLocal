import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// use prop toRender to pass in number of issues that will be rendered for the component. default is 6

const IssueHighlights = (props) => {
    const features = useSelector((state) => state.firestore.data.features);
    const unsortedFeatures = features ? Object.keys(features).map(key => features[key]) : null;
    const featured = unsortedFeatures ? unsortedFeatures.filter(feature => feature.featured !== "").sort((a,b) => a.featured - b.featured) : null;
    const regular = unsortedFeatures ? unsortedFeatures.filter(feature => feature.featured === "").sort((a,b) => Date.parse(a.publishDate) - Date.parse(b.publishDate)) : null;
    const sortedFeatures = regular && featured ? [...featured, ...regular ] : null;
    
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

    let regImg = null;
    let featImg = null;

    if (size.width < 768 ) { // mobile
        regImg = '?w=192&h=253';
        featImg = '?w=395&h=515';
    } else if (size.width >= 768 && size.width < 992) { //tablet
        regImg = '?w=233&h=306';
        featImg = '?w=476&h=621';
    } else if (size.width >= 992 && size.width < 1200 ) { // small desktop
        regImg = '?w=227&h=298';
        featImg = '?w=465&h=606';
    } else if (size.width >= 1200) { // large desktop
        regImg = '?w=277&h=363';
        featImg = '?w=564&h=736';
    }

    return (
        <div className="container">
            <div className="issue-highlights">
                    {sortedFeatures
                    ?sortedFeatures.map((feature, index) => {
                        if (index >= (size.width <= 500 ? 8 : size.width > 500 && size.width <= 992 ? 9 : size.width > 768 ? 10 : 10 ) ){
                            return null
                        } else if (feature.featured) {
                            return (
                                <div className={`issue-highlights__item--featured-${index}`} key={feature.id}>
                                    <Link to={`/features/${feature.slug}`}>
                                        <img src={`${feature.cover}${featImg}`} className="issue-highlights__img" alt={`${feature.name}'s In The Know Local Magazine Cover for ${feature.city}`}/>
                                    </Link>
                                </div>
                            )
                        } else {
                            return (
                                <div className="issue-highlights__item--regular" key={feature.id}>
                                    <Link to={`/features/${feature.slug}`}>
                                        <img src={`${feature.cover}${regImg}`} className="issue-highlights__img" alt={`${feature.name}'s In The Know Local Magazine Cover for ${feature.city}`}/>
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

export default IssueHighlights