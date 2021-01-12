import React, {useEffect, useState} from 'react'
import { getLegacyRoutes } from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom'

import './legacy-routes.styles.scss'

const LegacyRoutes = () => {
    const [routes, setRoutes] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const getRoutes = async () => {
            const fetchedRoutes = await getLegacyRoutes()
            setRoutes(fetchedRoutes)
            setLoading(false)
        }
        getRoutes()
    },[])

    if (isLoading) return <p>Spinner...</p>

    return (
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

export default LegacyRoutes