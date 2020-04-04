import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

//TODO: Add ability to order by Date.

const IssueList = (props) => {
    const features = useSelector((state) => {
        let data = state.firestore.data.features;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    useEffect(()=> { document.title = 'Issues | In The Know Local'})

    return (
        <div className="container px-5 py-5">
            <h1>Issues</h1>
            <div className='row'>
                {features
                ?features.map((feature) => {
                    if (feature.cover){
                        return (
                            <div className="mx-auto my-4" style={{width: 18 +'rem'}} key={feature.id}>
                                <Link to={`/features/${feature.slug}`}>
                                    <img src={feature.cover} className="img-fluid" alt={`${feature.name}'s In The Know Local Magazine Cover`}/>
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
        </div>
    )
}

export default IssueList