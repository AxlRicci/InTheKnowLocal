import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'

import './legacy-route-article.styles.scss'

// Renders out an article for the legacy style articles.
// Filters the route 
// Props:
// 1. All available content from routes.

const LegacyRouteArticle = ({routes, slug}) => {
    const [article, setArticle] = useState()

    useEffect(() => {
        setArticle(routes.filter((route) => route.slug === slug)[0])
    },[slug, routes])

    if (!article) return null

    return (
        <article className="route-article">
            <h1 className="route-article__title">{article.title}</h1>
            <h3 className="route-article__subtitle">{article.subtitle}</h3>
            <p className="route-article__paragraph">{article.intro}</p>
            <ol className='route-article__stop-list'>
                {article.locations.split(',').map((location,index) => <li className='route-article__stop-item' key={`location-${index}`}>{location}</li>)}
            </ol>
        </article>
    )
}

export default withRouter(LegacyRouteArticle)
