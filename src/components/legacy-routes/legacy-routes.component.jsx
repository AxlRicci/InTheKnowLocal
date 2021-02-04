import React from 'react'
import { Link } from 'react-router-dom'

import './legacy-routes.styles.scss'

// Renders a cards for all available route articles.
// Props:
// 1. Array of route article data.

const LegacyRoutes = ({routes}) => {
    return (
        <section className="routes__container">
            <h2>#JoettesRoutes</h2>
            <div className="routes__list">
                {
                    routes.map(route => (
                        <section className="route-card" >
                            <Link className="route-card__link" to={`${route.slug}`} key={route.slug}>
                                <img className="route-card__image" src={route.cover} alt={`${route.name}'s article cover`} />
                                <h3 className="route-card__title">{route.name}</h3>
                                <p className="route-card__paragraph">{route.subtitle}</p>
                            </Link>
                        </section>
                    ))
                }
            </div>
        </section>
    )
}

export default LegacyRoutes