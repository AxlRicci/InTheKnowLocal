import React, {useState, useEffect} from 'react'
import { firestore } from '../../firebase/firebase.utils'
import { Link } from 'react-router-dom'

import './article-suggested-reading.styles.scss'

// use prop toRender to pass in number of issues that will be rendered for the component. The default is 4.
// component requires prop current page as a slug to remove it from the suggested reading array.

const ArticleSuggestedReading = ({currentPage}) => {
    const [suggestedIssues, setSuggestedIssues] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {
        const getSuggestedIssues = async () => {
            const ref = firestore.collection('features')
            const snapshot = await ref.where('slug', '!=', currentPage).limit(6).get()
            snapshot.forEach(doc => {
                setSuggestedIssues(suggestedIssues => [...suggestedIssues, doc.data()])
            })
            setLoading(false)
        }
        getSuggestedIssues()
    },[currentPage])

    if (isLoading) return <p>Spinner...</p>

    return (
        <div className="suggested-reading">
            <div className="suggested-reading__intro">
                <h3 className="suggested-reading__intro suggested-reading__intro--title">Suggested Reading</h3>
            </div>
            <div className="suggested-reading__issue-grid">
                {
                    suggestedIssues.map((feature, index) => (
                        <div className="suggested-reading__issue" key={feature.slug}>
                            <Link to={`/features/${feature.slug}`}>
                                <img src={feature.cover} className="suggested-reading__cover-img" alt={`${feature.name}'s In The Know Local Cover for ${feature.city}`}/>
                            </Link>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default ArticleSuggestedReading
