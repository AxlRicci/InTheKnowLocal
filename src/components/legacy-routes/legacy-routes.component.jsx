import React, {useEffect, useState} from 'react'
import { firestore } from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom'

import './legacy-routes.styles.scss'

const LegacyRoutes = () => {
    const [routes, setRoutes] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const getRoutes = async () => {
            const ref = firestore.collection('legacyRoutes')
            const snapshot = await ref.get();
            snapshot.forEach(doc => {
                setRoutes(routes => [...routes, doc.data()])
            })
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