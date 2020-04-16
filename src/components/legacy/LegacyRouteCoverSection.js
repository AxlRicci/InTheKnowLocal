import React from 'react'
import { useSelector } from 'react-redux'

import './legacyRouteCoverSection.scss'

const LegacyRouteCoverSection = (props) => {
    const { slug, selectedFeature } = props;

    const legacyRoutes = useSelector((state) => {
        let data = state.firestore.data.legacyRoutes;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    let selectedRoute = [];


    if (legacyRoutes) {
        legacyRoutes.forEach(route => {
            if (route.slug === slug){
                selectedRoute.push(route)
            }
        })
    }

    let route = selectedRoute ? selectedRoute[0] : null;


    let renderContent = null;

    if (route) {
        renderContent = (
            <div className="route__intro-content">
                <div className="route__cover">
                    <img src={route.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} className="route__cover-img"/>
                </div>
            </div>
        )
    }

    return (
        <>
        {renderContent ? renderContent : null}
        </>
    )
}

export default LegacyRouteCoverSection