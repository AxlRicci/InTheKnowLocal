import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

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
        <article className="issue__article">
            {selectedFeature
            ? <div className="issue__article-section">
                {bioArray.map((line,index) => {
                    return (
                        <div key={`bioLine ${index}`}>
                            <p className="issue__article-content issue__article-content--answer">{line}</p>
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