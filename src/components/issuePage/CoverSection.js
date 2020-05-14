import React from 'react'
import './coverSection.scss'
import '../styles/global.scss'

const CoverSection = (props) => {
    const { selectedFeature } = props;

    // Content to be rendered if/when data from props becomes available.
    let renderContent = null;

    if (selectedFeature) {
        renderContent = (
            <div className="cover-section">
                <div className="cover-section__cover">
                    <img className="cover-section__cover-image" src={selectedFeature.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} />
                </div>
                <div className="cover-section__author-intro">
                    <h2 className="cover-section__author-intro cover-section__author-intro--title">
                        {selectedFeature.name}
                    </h2>
                    <p className="cover-section__author-intro cover-section__author-intro--intro">
                        {selectedFeature.profDesc}
                    </p>
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

export default CoverSection
