import React from 'react'

import './legacy-bio.styles.scss'

const LegacyBio = ({featureData}) => (
    <article className="legacy-bio">
        <div className="legacy-bio__content-container">
            <p classname="legacy-bio__content">{featureData.profDesc}</p>
        </div>
    </article>
)

export default LegacyBio