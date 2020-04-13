import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SuggestedReading from './SuggestedReading'
import CoverSection from '../issuePage/CoverSection'
import InterviewSection from '../issuePage/InterviewSection'
import ContactSection from '../issuePage/ContactSection'

import './IssuePage.scss'

const IssuePage = (props) => {
    const { slug } = props.match.params

    const features = useSelector((state) => {
        let data = state.firestore.data.features;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    useEffect(()=> {
        selectedFeature ? document.title = `${selectedFeature.name} | In The Know Local` : document.title = '... | In The Know Local'
    })

    let featureInfo = [];
    let articleType = null;
    if (features) {
        features.forEach(feature => {
            if (feature.slug === slug) {
                articleType = feature.type;
                featureInfo.push(feature);
            }
        })
    }
    let selectedFeature = featureInfo[0];

    return (
        <main className="container">
            <div className="issue__content">
                <CoverSection selectedFeature={selectedFeature}/>
                <InterviewSection selectedFeature={selectedFeature} articleType={articleType} />
                <ContactSection selectedFeature={selectedFeature} />
            </div>
            <div className="suggested-reading">
                <SuggestedReading currentPage={slug}/>
            </div>
        </main>


        )      
    }
    
export default IssuePage