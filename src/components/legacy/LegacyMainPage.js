import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SuggestedReading from '../issues/SuggestedReading'
import LegacyCoverSection from './LegacyCoverSection'
import ContactSection from '../issuePage/ContactSection'
import LegacyRoutesSection from './LegacyRoutesSection'
import LegacyBioSection from './LegacyBioSection'
import LegacyRouteArticle from './LegacyRouteArticle'
import LegacyRouteCoverSection from './LegacyRouteCoverSection'

import './legacyMainPage.scss'

const LegacyMainPage = (props) => {

    const { slug } = props.match.params;

    const features = useSelector((state) => {
        let data = state.firestore.data.features;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    useEffect(()=> {
        selectedFeature ? document.title = `${selectedFeature.name} | In The Know Local` : document.title = '... | In The Know Local'
    })

    let featureInfo = [];
    if (features) {
        features.forEach(feature => {
            if (feature.slug === 'joette-fielding') {
                featureInfo.push(feature);
            }
        })
    }
    let selectedFeature = featureInfo[0];

    let content = null;

    // determine if the content is bio page or route page by slug.
    if (slug === 'oakville-joette-fielding') {
        content = (
            <main className="container">
                <div className="legacy-page__content">
                    <div className="legacy-cover-section">
                        <LegacyCoverSection  selectedFeature={selectedFeature}/>
                    </div>
                    <div className="legacy-bio-section">
                        <LegacyBioSection  />
                    </div>
                    <div className="legacy-routes-section">
                        <LegacyRoutesSection  />
                    </div>
                    <div className="legacy-contact-section">
                        <ContactSection  selectedFeature={selectedFeature} />
                    </div>
                </div>
                <div className="suggested-reading">
                    <SuggestedReading className="suggested-reading" currentPage={'joette-fielding'}/>
                </div>
            </main>
            )
    } else {
        content = (
            <main className="container">
                <div className="legacy-page__content">
                    <div className="legacy-route-cover-section">
                        <LegacyRouteCoverSection selectedFeature={selectedFeature} slug={slug}/>
                    </div>
                    <div className="legacy-route-article-section">
                        <LegacyRouteArticle slug={slug} />
                    </div>
                </div>
                <div className="suggested-reading">
                    <SuggestedReading currentPage={'joette-fielding'}/>
                </div>
            </main>
        )

    }

    return (
        <>
        {content ? content : null}
       </>
    )
    }

export default LegacyMainPage