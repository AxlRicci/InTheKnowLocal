import React from 'react'
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

    // take bio string from feature and split it into array so that line breaks can be added.
    let bioArray = selectedFeature ? selectedFeature.profDesc.split('<br>') : null;

    let renderContent = null;

    if (selectedFeature && bioArray) {
        renderContent = (
            <article className="legacy-bio">
                {<div className="legacy-bio__content">
                    {bioArray.map((line,index) => {
                        return (
                            <div className="legacy-bio__line" key={`bioLine ${index}`}>
                            <p className="legacy-bio__line--text">{line}</p>
                            <br/>
                            </div>
                        )
                    })}
                </div>}
            </article>
        )
    }


    return (
        <>
        {renderContent ? renderContent : null}
        </>
    )
}

export default LegacyBioSection