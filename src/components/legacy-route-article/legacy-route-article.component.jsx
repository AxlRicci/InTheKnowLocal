import React, { useEffect, useState } from 'react'
import { firestore } from '../../firebase/firebase.utils'
import './legacy-route-article.styles.scss'

const LegacyRouteArticle = ({slug}) => {
    const [article, setArticle] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const getArticle = async () => {
            const ref = firestore.doc(`legacyRoutes/${slug}`)
            ref.get()
                .then(doc => {
                    setArticle(doc.data())
                    setLoading(false)
                })
                .catch(err => {
                    console.error(err)
                })
        }
        getArticle()
    })

    if (isLoading) return <p>Spinner...</p>

    return (
        <article className="route-article">
            <div className="route-article__intro">
                <h1 className="route-article__title">{article.title}</h1>
                <h3 className="route-article__subtitle">{article.subtitle}</h3>
            </div>
            <div className="route-article__content">
                <div className="route-article__content-intro">
                    <p>{article.intro}</p>
                </div>
            </div>
            <div className="route-article__stop-list">
                <div>
                    <ol className='stop-list'>
                        {article.locations.split(',').map((location,index) => <li className='stop-list__link' key={`location ${index}`}>{location}</li>)}
                    </ol>
                </div>
            </div>
        </article>
    )
}

export default LegacyRouteArticle
