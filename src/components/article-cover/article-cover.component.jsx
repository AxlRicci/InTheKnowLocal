import React from 'react'
import './article-cover.styles.scss'

const ArticleCover = ({ selectedFeature }) => (
        <div className="cover-section">
            <div className="cover-section__cover">
                <img className="cover-section__cover-image" src={selectedFeature.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} />
            </div>
            <div className="cover-section__author-intro">
                <h2 className="cover-section__author-title">
                    {selectedFeature.name}
                </h2>
                <p className="cover-section__author-intro">
                    {selectedFeature.profDesc}
                </p>
            </div>
        </div>
)

export default ArticleCover
