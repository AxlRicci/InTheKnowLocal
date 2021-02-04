import React from 'react'
import './article-interview.styles.scss'

// Iterates through array of question objects. Object contains; id, question, answer.
// Renders an article with individual sections for each question/answer pair.

const ArticleInterview = ({ questions }) => (
    <article className="article__container">
        {
            questions.map(question => (
                <section className="article__q-a" key={question.id}>
                    <h3 className="article__question">{question.question}</h3>
                    <p className="article__answer">{question.answer}</p> 
                </section>
            ))
        }
    </article>
)

export default ArticleInterview
