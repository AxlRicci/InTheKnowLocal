import React, {useEffect, useState} from 'react'
import { getQuestionSet } from '../../firebase/firebase.utils'

import './article-interview.styles.scss'

const ArticleInterview = ({ selectedFeature, articleType }) => {
    const [questions, setQuestions] = useState([])
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        const getQuestions = async () => {
            const selectedFeatureKeys = Object.keys(selectedFeature);
            const questions = await getQuestionSet(articleType)
            const sortedQuestions = questions.map(question => {
                const questionId = question.qid.replace(/[a-z]/,'')
                if (selectedFeatureKeys.includes(questionId)) {
                    return {id: questionId, question: question.desc, answer: selectedFeature[questionId]}
                }
                return null
            }).sort((a,b) => a.id - b.id)
            setQuestions(sortedQuestions)
            setLoading(false)
        }
        getQuestions()
    },[articleType, selectedFeature])

    if (isLoading) return <p>Spinner...</p>

    return (
        <article className="article__content">
            {questions.map((question, contentIndex) => {
                return (
                    <div className="article__q-a" key={question.id}>
                        <h3 className={`article__question article__question--question${contentIndex}`}>{question.question}</h3>
                        <p>{question.answer}</p> 
                    </div>
                )
            })}
        </article>
    )
}

export default ArticleInterview
