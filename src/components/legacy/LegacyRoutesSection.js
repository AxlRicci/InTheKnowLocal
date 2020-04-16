import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './legacyRoutesSection.scss'

const LegacyRoutesSection = (props) => {
    const routes = useSelector((state) => {
        let data = state.firestore.data.legacyRoutes;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    let renderContent = null;

    if (routes) {
        renderContent = (
            <>
            <div>
            <h2>#JoettesRoutes</h2>
            </div>
            <div className="route__list">
                {routes.map(route => {
                    return (
                        <Link to={`${route.slug}`} key={route.slug}>
                        <div className="route__card" >
                            <img className="route__card-image" src={route.cover} alt=""/>
                            <div className="route__card-content">
                                <h3 className="route__card-title">{route.name}</h3>
                                <p className="route__card-desc">{route.subtitle}</p>
                            </div>
                        </div>
                        </Link>
                    )})}
            </div>
            </>
        )
    }

    return (
        <>
        {renderContent ? renderContent : null}
        </>
    )
}

export default LegacyRoutesSection