import React from 'react'

import './legacy-bio.styles.scss'

// Renders the bio paragraph used in on the legacy-article page.
// Props: 
// 1. Data from a feature

const LegacyBio = ({featureData}) => (
    <article className="legacy-bio">
        <p classname="legacy-bio__paragraph">{featureData.profDesc}</p>
    </article>
)

export default LegacyBio