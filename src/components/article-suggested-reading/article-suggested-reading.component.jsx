import React from 'react'
import { Link } from 'react-router-dom'

import './article-suggested-reading.styles.scss'

const ArticleSuggestedReading = ({suggestedIssues}) => (
    <div className="suggested-reading">
        <div className="suggested-reading__intro">
            <h3 className="suggested-reading__intro suggested-reading__intro--title">Suggested Reading</h3>
        </div>
        <div className="suggested-reading__issue-list">
            {
                suggestedIssues.map((feature, index) => (
                    <div className="suggested-reading__issue" key={feature.slug}>
                        <Link to={`/features/${feature.slug}`}>
                            <img src={feature.cover} className="suggested-reading__cover-img" alt={`${feature.name}'s In The Know Local Cover for ${feature.city}`}/>
                        </Link>
                    </div>

                ))
            }
        </div>
    </div>
)

export default ArticleSuggestedReading
