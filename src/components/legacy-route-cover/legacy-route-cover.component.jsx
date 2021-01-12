import React, {useEffect, useState} from 'react'
import { firestore } from '../../firebase/firebase.utils'
import './legacy-route-cover.styles.scss'

const LegacyRouteCover = ({ slug, selectedFeature }) => {
    const [route, setRoute] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const getRoute = async () => {
            const ref = firestore.doc(`legacyRoutes/${slug}`);
            ref.get()
                .then(doc => {
                    setRoute(doc.data())
                    setLoading(false)
                })
                .catch(err => {
                    console.error(err)
                })
        }
        getRoute();
    })

    if (isLoading) return <p>Spinner...</p>

    return (
        <div className="route__intro-content">
            <div className="route__cover">
                <img src={route.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} className="route__cover-img"/>
            </div>
        </div>  
    )
}

export default LegacyRouteCover