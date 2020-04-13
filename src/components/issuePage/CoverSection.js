import React from 'react'

const CoverSection = (props) => {
    const { selectedFeature } = props;
    
    return (
        <>
        {selectedFeature
        ? <div className="issue__intro-content">
                <div className="issue__cover">
                    <img src={selectedFeature.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} className="issue__cover-img"/>
                </div>
                <div className="issue__author-intro">
                    <h2 className="issue__author-intro issue__author-intro--title">
                        {selectedFeature.name}
                    </h2>
                    <p className="issue__author-intro issue__author-intro--text">
                        {selectedFeature.bio}
                    </p>
                </div>
            </div>
        : null}
        </>
    )
}

export default CoverSection
