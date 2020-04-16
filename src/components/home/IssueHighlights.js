import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// use prop toRender to pass in number of issues that will be rendered for the component. default is 6

const IssueHighlights = (props) => {

    // Get feature data from redux
    const reduxFeatures = useSelector((state) => {
        let data = state.firestore.data.features;
        return data ? Object.keys(data).map(key => data[key]) : null;
    });

    // sort features from redux and organize correctly into new array. i.e 'featured' features sorted by featureRank and then 'regular' features sorted by date.
    const featured = reduxFeatures ? reduxFeatures.filter(feature => feature.featured === true).sort((a,b) => a.featureRank - b.featureRank) : null;
    const regular = reduxFeatures ? reduxFeatures.filter(feature => feature.featured === "").sort((a,b) => Date.parse(a.publishDate) - Date.parse(b.publishDate)) : null;
    const sortedFeatures = regular && featured ? [...featured, ...regular ] : null;

    // Get placeholder data from redux
    const reduxPlaceholders = useSelector((state) => {
        let data = state.firestore.data.placeholders;
        return data ? Object.keys(data).map(key => data[key]) : null;
    });

    // Current size of the window.
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

    // Content to be rendered if data from redux/firebase available.

    let renderContent = null;

    if (sortedFeatures && reduxPlaceholders) {
        renderContent = (
            <div className="container">
                <div className="issue-highlights">
                    {sortedFeatures.map((feature, index) => {
                        if (index >=  (size.width > 768 && size.width <= 992 ? 18 : 20)){ // determine how many covers to render depending on size of screen.
                            return null
                        } else if (feature.featured && feature.featureRank <= 4) { // if cover is designated as "featured" render a different size and determine location in layout. Only render 4.
                            return (
                                <div className={`issue-highlights__item--featured-${feature.featureRank}`} key={feature.slug}>
                                    <Link to={ feature.slug === 'joette-fielding' ? `/city/oakville-joette-fielding` : `/features/${feature.slug}`}> {/*  if feature is a legacy article i.e joette-fielding redirect to old style url */}
                                        <img src={`${feature.cover}${featImg}`} className="issue-highlights__img" alt={`${feature.name}'s In The Know Local Magazine Cover for ${feature.city}`}/>
                                    </Link>
                                </div>
                            )
                        } else if(index % 5 === 0) { // place a random ad tile every ~5 covers.
                            let img = reduxPlaceholders[Math.floor(Math.random()*Math.floor(reduxPlaceholders.length))].imgUrl;
                            return (
                                <div className="issue-highlights__item--placeholder" key={index}>
                                        <img src={`${img}${regImg}`} className="issue-highlights__img" alt='...'/>
                                </div>
                            )
                        } else { // place a regular cover into the layout.
                            return ( 
                                <div className="issue-highlights__item--regular" key={feature.slug}>
                                    <Link to={feature.slug === 'joette-fielding' ? `/city/oakville-joette-fielding` : `/features/${feature.slug}`}>{/*  if feature is a legacy article i.e joette fielding redirect to old style url */}
                                        <img src={`${feature.cover}${regImg}`} className="issue-highlights__img" alt={`${feature.name}'s In The Know Local Magazine Cover for ${feature.city}`}/>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }

    return (
        <>
            {renderContent ? renderContent : <p>Loading...</p>}
        </>
    )
}

export default IssueHighlights;