import React from 'react'
import { Link } from 'react-router-dom'

import './mosaic-issue-gallery.styles.scss'

// Renders a mosaic of issue covers. 
// Cover sizes and placements vary depending on featured and FeatureRank properties.
// Props:
// 1. An array of issues

const MosaicIssueGallery = ({issues}) => (
    <section className="issue-gallery">
        {
            issues.map((feature) => (
                <div className={feature.featured ? `issue-gallery__featured-item issue-gallery__featured-item--${feature.featureRank}` : `issue-gallery__item`} key={feature.name}> 
                    <Link to={ feature.slug === 'joette-fielding' ? '/city/oakville-joette-fielding' : `/features/${feature.slug}`}>
                        <img
                            className="issue-gallery__img" 
                            alt={`${feature.name}'s In The Know Local Magazine Cover for ${feature.city}`}
                            srcSet={`
                                ${feature.cover}${feature.featured ? "?w=705&h=923" : "?w=347&h=456"}&format=webp&webp.fallback=jpg 1440w,
                                ${feature.cover}${feature.featured ? "?w=497&h=651" : "?w=243&h=321"}&format=webp&webp.fallback=jpg 1024w,
                                ${feature.cover}${feature.featured ? "?w=558&h=732" : "?w=179&h=237"}&format=webp&webp.fallback=jpg 768w,
                                ${feature.cover}${feature.featured ? "?w=405&h=531" : "?w=197&h=261"}&format=webp&webp.fallback=jpg 425w,
                                ${feature.cover}${feature.featured ? "?w=355&h=466" : "?w=172&h=228"}&format=webp&webp.fallback=jpg 375w,
                                ${feature.cover}${feature.featured ? "?w=300&h=394" : "?w=145&h=192"}&format=webp&webp.fallback=jpg 320w,
                            `}
                            src={feature.cover}
                        />
                    </Link>
                    <span className="sr-only">{`Article featuring ${feature.name}'s interview on the city of ${feature.city}.`}</span>
                </div>
            ))
        }
    </section>
)

export default MosaicIssueGallery;