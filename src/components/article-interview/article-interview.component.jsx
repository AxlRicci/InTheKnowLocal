import React from 'react'

import './article-interview.styles.scss'

const ArticleInterview = ({ questions }) => (
    <article className="article__content">
        {questions.map((question, contentIndex) => {
            return (
                <div className="article__q-a" key={question.id}>
                    <h3 className={`article__question article__question--question${contentIndex}`}>{question.question}</h3>
                    <p className="article__answer">{question.answer}</p> 
                </div>
            )
        })}
    </article>
)

export default ArticleInterview
