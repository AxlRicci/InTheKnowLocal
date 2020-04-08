import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './suggestedReading.scss'

// use prop toRender to pass in number of issues that will be rendered for the component. The default is 4.
// component requires prop current page as a slug to remove it from the suggested reading array.

const SuggestedReading = (props) => {
    const { currentPage } = props

    const features = useSelector((state) => {
        let data = state.firestore.data.features;
        return data ? Object.keys(data).map(key => data[key]) : null
    });


    let otherFeatures = [];
    if (features && currentPage ) {
        features.map(feature => {
            if (feature.slug !== currentPage) {
                otherFeatures.push(feature)
            } 
            return null
        })
    }

    return (
        <div className="suggested-reading">
            <div className="suggested-reading__intro">
                <h3 className="suggested-reading__intro suggested-reading__intro--title">Suggested Reading</h3>
            </div>
            <div className="suggested-reading__issue-grid">
                {otherFeatures
                ?otherFeatures.map((feature, index) => {
                    if (index >= (4) ){
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