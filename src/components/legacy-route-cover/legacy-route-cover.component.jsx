import React, {useEffect, useState} from 'react'
import { getLegacyRoutes } from '../../firebase/firebase.utils'

import Spinner from '../spinner/spinner.component'

import './legacy-route-cover.styles.scss'

const LegacyRouteCover = ({ slug, selectedFeature }) => {
    const [route, setRoute] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const getRoute = async () => {
            const fetchedRoute = await getLegacyRoutes(slug);
            setRoute(fetchedRoute)
            setLoading(false)
        }
        getRoute();
    },[slug])

    if (isLoading) return <Spinner />

    return (
        <div className="route__intro-content">
            <div className="route__cover">
                <img src={route.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} className="route__cover-img"/>
            </div>
        </div>  
    )
}

export default LegacyRouteCover