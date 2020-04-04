import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

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
        <div className="container py-5">
            <h5>Suggested Reading</h5>
            <div className='row'>
                <div className="col-12 d-flex flex-wrap">
                    {otherFeatures
                    ?otherFeatures.map((feature, index) => {
                        if (index >= (props.toRender ? props.toRender : 4) ){
                            return null
                        } else {
                            return (
                                <div className="mx-auto py-3" style={{width: 9 +'rem'}} key={feature.id}>
                                    <Link to={`/features/${feature.slug}`}>
                                        <img src={feature.cover} className="img-fluid" alt={`${feature.name}'s In The Know Local Cover`}/>
                                    </Link>
                                </div>
                                    )
                        }
                            })
                            : null
                        }
                </div>
            </div>
        </div>
    )
}

export default SuggestedReading