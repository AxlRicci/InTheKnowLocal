import React, { useEffect } from 'react'
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

    return (
        <div className="container">
            <div className="issue__grid">
                {features
                ?features.map((feature) => {
                    if (feature.cover){
                        return (
                            <div className="issue__grid-item">
                                <Link to={`/features/${feature.slug}`}>
                                    <img src={feature.cover} className="issue__img" alt={`${feature.name}'s In The Know Local Magazine Cover for ${feature.city}`}/>
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