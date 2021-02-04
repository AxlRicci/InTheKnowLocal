import React, {useEffect, useState} from 'react'

import './legacy-route-cover.styles.scss'

// Renders the cover for the legacy route article.
// Filters routes array from Feature Page and selects route matching the slug.
// Props:
// 1. Slug for the article
// 2. Array of routes.

const LegacyRouteCover = ({ slug, routes }) => {
    const [route, setRoute] = useState({})

    useEffect(() => {
        setRoute(routes.filter((route) => route.slug === slug)[0])
    },[slug, routes])

    return (
        <div className="route__intro-content">
            <div className="route__cover">
                <img src={route.cover} alt={`In The Know Local Cover for ${route.name}`} className="route__cover-img"/>
            </div>
        </div>  
    )
}

export default LegacyRouteCover