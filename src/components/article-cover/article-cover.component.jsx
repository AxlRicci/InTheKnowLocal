import React from 'react'
import './article-cover.styles.scss'

const ArticleCover = ({ selectedFeature }) => (
    <section className="cover__container">
        <img className="cover__image" src={selectedFeature.cover} alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`} />
        <h1 className="cover__title">
            {selectedFeature.name}
        </h1>
        <p className="cover__subtitle">
            {selectedFeature.profDesc}
        </p>
    </section>
)

export default ArticleCover
