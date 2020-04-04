import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// use prop toRender to pass in number of issues that will be rendered for the component. default is 6

const IssueHighlights = (props) => {
    const features = useSelector((state) => state.firestore.data.features);
    let featureArray = features ? Object.keys(features).map(key => features[key]) : null;

    return (
        <div className="container py-5">
            <h1>Latest issues:</h1>
            <div className='row justify-content-center'>
                {featureArray
                ?featureArray.map((feature, index) => {
                    if (index >= (props.toRender ? props.toRender : 6) ){
                        return null
                    } else {
                        return (
                            <div className="mx-auto my-4" style={{width: 18 +'rem'}} key={feature.id}>
                                <Link to={`/features/${feature.slug}`}>
                                    <img src={feature.cover} className="img-fluid" alt={`${feature.name}'s In The Know Local Magazine Cover`}/>
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