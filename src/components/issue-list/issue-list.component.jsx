import React, { useEffect, useState } from 'react'
import { getRealFeatures } from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom'

import './issue-list.styles.scss'

const IssueList = () => {
    const [issues, setIssues] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const getIssues = async () => {
            const fetchedFeatures = await getRealFeatures();
            setIssues(fetchedFeatures)
            setLoading(false)
        }
        getIssues()
    },[])

    if (isLoading) return <p>Spinner...</p>

    return (
        <main className="container">
            <div className="issue__grid">
                {issues.map((feature) => (
                    <div className="issue__grid-item" key={feature.slug}>
                        <Link to={feature.slug === 'joette-fielding' ? `/city/oakville-joette-fielding` : `/features/${feature.slug}`}> {/* if feature is legacy i.e joette fielding then redirect to old url style  */}
                            <img src={`${feature.cover}`}className="issue__img" alt={`${feature.name}'s In The Know Local Magazine Cover for ${feature.city}`}/>
                        </Link>
                    </div>
                ))}
            </div>
        </main>
    )
}
    
export default IssueList