import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './legacyBioSection.scss'

const LegacyBioSection = (props) => {
    
    const features = useSelector((state) => {
        let data = state.firestore.data.features;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    let featureInfo = [];
    if (features) {
        features.forEach(feature => {
            if (feature.slug === 'joette-fielding') {
                featureInfo.push(feature);
            }
        })
    }
    let selectedFeature = featureInfo[0];

    let bioArray = selectedFeature ? selectedFeature.intro.split('<br>') : null;

    return (
        <article className="legacy-bio">
            {selectedFeature
            ? <div className="legacy-bio__content">
                {bioArray.map((line,index) => {
                    return (
                        <div className="legacy-bio__line" key={`bioLine ${index}`}>
                        <p className="legacy-bio__line--text">{line}</p>
                        <br/>
                        </div>
                    )
                })}
            </div>
            : null}
        </article>
    )
}

export default LegacyBioSection