import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

import './mosaic-issue-gallery.styles.scss';

const MosaicIssueGallery = ({issues, placeholders}) => {
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
        }); 

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

    return (
        <div className="container">
            <div className="issue-highlights">
                {issues.map((feature, index) => {
                    if (index >=  (size.width >= 768 && size.width <= 992 ? 18 : 19)){ // determine how many covers to render depending on size of screen.
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
                        let img = placeholders[Math.floor(Math.random()*Math.floor(placeholders.length))].imgUrl;
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

export default MosaicIssueGallery;