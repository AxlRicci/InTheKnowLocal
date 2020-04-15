import React from 'react'
import ContactSection from '../issuePage/ContactSection'

import './legacyCoverSection.scss'

const LegacyCoverSection = (props) => {
    const { selectedFeature } = props;

    return (
        <>
        {selectedFeature
        ? <div className="legacy-cover">
                <div className="legacy-cover__cover">
                    <img src={selectedFeature.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} className="legacy-cover__cover-image"/>
                </div>
            </div>
        : null}
        </>
    )
}

export default LegacyCoverSection