import React, { useEffect, useState } from 'react'
import { getFeature, getSuggestedIssues } from '../../firebase/firebase.utils'

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
    const [suggestedReading, setSuggestedReading] = useState([])
    const [isLoading, setLoading] = useState(true);
    document.title = '... | In The Know Local'
    
    
    useEffect(()=> {
        const getFeatureData = async () => {
            const fetchedFeature = await getFeature('joette-fielding')
            const fetchedSuggested = await getSuggestedIssues(slug);
            setSuggestedReading(fetchedSuggested)
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
                <div className="legacy-page__container">
                    <div className="legacy-page__cover">
                        <LegacyCover selectedFeature={featureData}/>
                    </div>
                    <div className="legacy-page__bio">
                        <LegacyBio featureData={featureData} />
                    </div>
                    <div className="legacy-page__routes">
                        <LegacyRoutes  />
                    </div>
                    <div className="legacy-page__contact">
                        <ArticleContact  selectedFeature={featureData} />
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="container">
            <div className="legacy-page__container">
                <div className="legacy-page__cover">
                    <LegacyRouteCover selectedFeature={featureData} slug={slug}/>
                </div>
                <div className="legacy-page__article">
                    <LegacyRouteArticle slug={slug} />
                </div>
            </div>
            <div className="suggested-reading">
                <ArticleSuggestedReading suggestedIssues={suggestedReading} />
            </div>
        </main>
        )
    }

export default LegacyFeaturePage