import React from 'react'

import './legacy-cover.styles.scss'

const LegacyCover = ({ selectedFeature }) => (
    <div className="legacy-cover">
        <div className="legacy-cover__cover">
            <img src={selectedFeature.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} className="legacy-cover__cover-image"/>
        </div>
    </div>
)

export default LegacyCover