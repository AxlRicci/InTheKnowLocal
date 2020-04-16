import React from 'react'

import './legacyCoverSection.scss'

const LegacyCoverSection = (props) => {
    const { selectedFeature } = props;


    // set content to be rendered once props are available.
    let renderContent = null;

    if (selectedFeature) {
        renderContent = (
            <div className="legacy-cover">
                <div className="legacy-cover__cover">
                    <img src={selectedFeature.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} className="legacy-cover__cover-image"/>
                </div>
            </div>
        )
    }

    return (
        <>
        {renderContent ? renderContent : null}
        </>
    )
}

export default LegacyCoverSection