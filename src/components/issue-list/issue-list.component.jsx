import React, { useEffect, useState } from 'react'
import { getAllFeatures } from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom'

import Spinner from '../spinner/spinner.component'

import './issue-list.styles.scss'

// Fetches all features from Firebase and renders out a grid of feature covers.
// * Each cover has a link to feature section using the feature's slug.
// * The link will change if the slug is 'joette-fielding' -- A legacy feature this will route to the legacy article page.

const IssueList = () => {
    const [issues, setIssues] = useState([])
    const [isLoading, setLoading] = useState(true)

    document.title = 'In The Know Local | Issues'

    useEffect(() => {
        const getIssues = async () => {
            const fetchedFeatures = await getAllFeatures();
            setIssues(fetchedFeatures)
            setLoading(false)
        }
        getIssues()
    },[])

    if (isLoading) return <Spinner />

    return (
        <main className="container">
            <section className="issue__grid">
                {issues.map((feature) => (
                    <Link key={feature.slug} to={feature.slug === 'joette-fielding' ? `/city/oakville-joette-fielding` : `/features/${feature.slug}`}> {/* if feature is legacy i.e joette fielding then redirect to old url style and route to legacy-feature page */}
                        <img
                            className="issue__img"
                            alt={`${feature.name}'s In The Know Local Magazine Cover for ${feature.city}`}
                            src={`${feature.cover}?w=340&h=442&format=webp&webp.fallback=jpg`}
                        />
                    </Link>
                ))}
            </section>
        </main>
    )
}
    
export default IssueList