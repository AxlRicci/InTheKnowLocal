import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SuggestedReading from '../issues/SuggestedReading'
import CoverSection from '../issuePage/CoverSection'
import InterviewSection from '../issuePage/InterviewSection'
import ContactSection from '../issuePage/ContactSection'
import LegacyRoutesSection from './LegacyRoutesSection'
import LegacyBioSection from './LegacyBioSection'
import LegacyRouteArticle from './LegacyRouteArticle'

import './legacyRouteArticle.scss'

const LegacyArticlePage = (props) => {
    const { slug } = props.match.params;
    console.log(slug)

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


    return (
        <main className="container">
            <div className="issue__content">
                <CoverSection selectedFeature={selectedFeature}/>
                <LegacyRouteArticle slug={slug} />
                <ContactSection selectedFeature={selectedFeature} />
            </div>
            <div className="suggested-reading">
                <SuggestedReading currentPage={'joette-fielding'}/>
            </div>
        </main>
        )      
    }

export default LegacyArticlePage