import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SuggestedReading from '../issues/SuggestedReading'
import CoverSection from '../issuePage/CoverSection'
import InterviewSection from '../issuePage/InterviewSection'
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

    console.log(props)

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
    let coverImg = null;

    // determine if the content is bio page or route page by slug.
    if (slug === 'oakville-joette-fielding') {
        content = (
            <main className="container">
                <div className="issue__content">
                    <CoverSection selectedFeature={selectedFeature}/>
                    <LegacyBioSection />
                    <ContactSection selectedFeature={selectedFeature} />
                </div>
                <div className="suggested-reading">
                    <LegacyRoutesSection />
                    <SuggestedReading currentPage={'joette-fielding'}/>
                </div>
            </main>
            )
    } else {
        content = (
            <main className="container">
                <div className="issue__content">
                    <LegacyRouteCoverSection selectedFeature={selectedFeature} slug={slug}/>
                    <LegacyRouteArticle slug={slug} />
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