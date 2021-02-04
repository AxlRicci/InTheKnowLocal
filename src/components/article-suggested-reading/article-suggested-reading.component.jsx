import React from 'react'
import { Link } from 'react-router-dom'
import './article-suggested-reading.styles.scss'

// Renders a row of 6 suggested issues.
// ** Filtering suggested articles needs to be done before passing the prop as component does not filter.

const ArticleSuggestedReading = ({suggestedIssues}) => (
    <section className="suggested-reading__container">
        <h3 className="suggested-reading__intro">Suggested Reading</h3>
        <div className="suggested-reading__issue-list">
            {
                suggestedIssues.map((feature) => (
                    <Link to={`/features/${feature.slug}`} key={feature.slug}>
                        <img src={feature.cover} className="suggested-reading__cover-img" alt={`${feature.name}'s In The Know Local Cover for ${feature.city}`}/>
                    </Link>
                ))
            }
        </div>
    </section>
)

export default ArticleSuggestedReading
