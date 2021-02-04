import React from 'react'
import './article-cover.styles.scss'

// Displays the feature cover and professional description.
// * Professional description is optional and only renders if the component's type is set to 'standard'.
// * Image optimization for screen widths 320px to 1440px. ** image has a max width of 50rem.

const ArticleCover = ({ selectedFeature, type }) => (
    <section className="cover__container">
        <img 
            className="cover__image"
            alt={`${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}`}
            srcSet={`
                ${selectedFeature.cover}?w=500&h=652&format=webp&webp.fallback=jpg 1440w,
                ${selectedFeature.cover}?w=477&h=622&format=webp&webp.fallback=jpg 1024w,
                ${selectedFeature.cover}?w=500&h=652&format=webp&webp.fallback=jpg 768w,
                ${selectedFeature.cover}?w=405&h=528&format=webp&webp.fallback=jpg 425w,
                ${selectedFeature.cover}?w=355&h=463&format=webp&webp.fallback=jpg 375w,
                ${selectedFeature.cover}?w=300&h=391&format=webp&webp.fallback=jpg 320w,
            `}
            src={selectedFeature.cover}
        />
        {
            type === 'standard' ? (
                <>
                    <h1 className="cover__title">
                        {selectedFeature.name}
                    </h1>
                    <p className="cover__subtitle">
                        {selectedFeature.profDesc}
                    </p>
                </>
            ) : null
        }
    </section>
)

export default ArticleCover
