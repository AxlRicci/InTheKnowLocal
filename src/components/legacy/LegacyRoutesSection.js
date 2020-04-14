import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './legacyRoutesSection.scss'

const LegacyRoutesSection = (props) => {
    const routes = useSelector((state) => {
        let data = state.firestore.data.legacyRoutes;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    return (
        <div className="route__list">
            {routes
            ? routes.map(route => {
                return (
                    <Link to={route.slug} key={route.slug}>
                    <div className="route__card" >
                        <img className="route__card-image" src={route.cover} alt=""/>
                        <div className="route__card-content">
                                <h2 className="route__card-title">{route.name}</h2>
                            <p className="route__card-desc">{route.subtitle}</p>
                        </div>
                    </div>
                    </Link>
                    )
                })
            : null}
        </div>
    )
}

export default LegacyRoutesSection