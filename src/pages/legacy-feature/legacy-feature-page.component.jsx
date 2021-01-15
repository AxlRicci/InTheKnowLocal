import React, { useEffect, useState } from 'react'
import { getFeature } from '../../firebase/firebase.utils'

import ArticleContact from '../../components/article-contact/article-contact.component'
import ArticleSuggestedReading from '../../components/article-suggested-reading/article-suggested-reading.component'
import LegacyBio from '../../components/legacy-bio/legacy-bio.component'
import LegacyCover from '../../components/legacy-cover/legacy-cover.component'
import LegacyRouteArticle from '../../components/legacy-route-article/legacy-route-article.component'
import LegacyRouteCover from '../../components/legacy-route-cover/legacy-route-cover.component'
import LegacyRoutes from '../../components/legacy-routes/legacy-routes.component'
import Spinner from '../../components/spinner/spinner.component'

import './legacy-feature-page.styles.scss'

const LegacyFeaturePage = ({match: {params: {slug}}}) => {
    const [featureData, setFeatureData] = useState({})
    const [isLoading, setLoading] = useState(true);
    document.title = '... | In The Know Local'
    
    
    useEffect(()=> {
        const getFeatureData = async () => {
            const fetchedFeature = await getFeature('joette-fielding')
            setFeatureData(fetchedFeature)
            setLoading(false)
        }
        getFeatureData()
    },[slug])
    
    if (isLoading) return <Spinner />
    document.title = `${featureData.name} | In The Know Local`
    
    // determine if the content is bio page or route page by slug.
    if (slug === 'oakville-joette-fielding') {
        return (
            <main className="container">
                <div className="legacy-page__content">
                    <div className="legacy-cover-section">
                        <LegacyCover selectedFeature={featureData}/>
                    </div>
                    <div className="legacy-bio-section">
                        <LegacyBio featureData={featureData} />
                    </div>
                    <div className="legacy-routes-section">
                        <LegacyRoutes  />
                    </div>
                    <div className="legacy-contact-section">
                        <ArticleContact  selectedFeature={featureData} />
                    </div>
                </div>
                <div className="suggested-reading">
                    <ArticleSuggestedReading className="suggested-reading" currentPage={'joette-fielding'}/>
                </div>
            </main>
        )
    }

    return (
            <main className="container">
                <div className="legacy-page__content">
                    <div className="legacy-route-cover-section">
                        <LegacyRouteCover selectedFeature={featureData} slug={slug}/>
                    </div>
                    <div className="legacy-route-article-section">
                        <LegacyRouteArticle slug={slug} />
                    </div>
                </div>
                <div className="suggested-reading">
                    <ArticleSuggestedReading currentPage={'joette-fielding'}/>
                </div>
            </main>
        )
    }

export default LegacyFeaturePage