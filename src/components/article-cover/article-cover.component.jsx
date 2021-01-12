import React from 'react'
import './article-cover.styles.scss'
import '../../design-tokens/global.scss'

const ArticleCover = ({ selectedFeature }) => (
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

export default ArticleCover
