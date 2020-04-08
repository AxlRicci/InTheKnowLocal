import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// use prop toRender to pass in number of issues that will be rendered for the component. default is 6

const IssueHighlights = (props) => {
    const features = useSelector((state) => state.firestore.data.features);
    let featureArray = features ? Object.keys(features).map(key => features[key]) : null;
    let sortedFeatures = featureArray ? featureArray.sort((a,b) => (a.featured === "") - (b.featured === "") || a - b) : null;

    console.log(sortedFeatures);

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
    
    // let render = null;
    // switch(size) {
    //     case size < 425:
    //         render = 8;
    //         break;
    //     case size > 425 && size < 768:
    //         render = 9;
    //         break;
    //     case size > 768:
    //         render = 10;
    //         break;
    //     default:
    //         render = 8;
    // }

    

    return (
        <div className="container">
            <div className="issue-highlights">
                    {sortedFeatures
                    ?sortedFeatures.map((feature, index) => {
                        if (index >= (size.width <= 425 ? 8 : size.width > 425 && size.width <= 992 ? 9 : size.width > 768 ? 10 : 10 ) ){
                            return null
                        } else if (feature.featured) {
                            return (
                                <div className={`issue-highlights__item--featured-${index}`} key={feature.id}>
                                    <Link to={`/features/${feature.slug}`}>
                                        <img src={feature.cover} className="issue-highlights__img" alt={`${feature.name}'s In The Know Local Magazine Cover`}/>
                                    </Link>
                                </div>
                            )
                        } else {
                            return (
                                <div className="issue-highlights__item--regular" key={feature.id}>
                                    <Link to={`/features/${feature.slug}`}>
                                        <img src={feature.cover} className="issue-highlights__img" alt={`${feature.name}'s In The Know Local Magazine Cover`}/>
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