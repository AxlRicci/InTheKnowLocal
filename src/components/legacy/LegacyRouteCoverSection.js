import React from 'react'
import { useSelector } from 'react-redux'

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

    
    return (
        <>
        {route
        ? <div className="issue__intro-content">
                <div className="issue__cover">
                    <img src={route.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} className="issue__cover-img"/>
                </div>
            </div>
        : null}
        </>
    )
}

export default LegacyRouteCoverSection