import React, { useEffect, useState } from 'react'
import { getFeature, getQuestionSet, getSuggestedIssues } from '../../firebase/firebase.utils';

import ArticleContact from '../../components/article-contact/article-contact.component'
import ArticleCover from '../../components/article-cover/article-cover.component'
import ArticleInterview from '../../components/article-interview/article-interview.component'
import ArticleSuggestedReading from '../../components/article-suggested-reading/article-suggested-reading.component'
import Spinner from '../../components/spinner/spinner.component'

import './issue-page.styles.scss'

const IssuePage = ({match: {params: {slug}}}) => {
    const [issue, setIssue] = useState({})
    const [suggestedIssues, setSuggestedIssues] = useState({})
    const [questions, setQuestions] = useState([])
    const [title, setTitle] = useState('... | In The Know Local')
    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {
        const getIssue = async () => {
            setLoading(true)
            const fetchedFeature = await getFeature(slug)
            const fetchedSuggestedIssues = await getSuggestedIssues(slug)
            setSuggestedIssues(fetchedSuggestedIssues)
            setIssue(fetchedFeature)
            setTitle(`${fetchedFeature.name} | In The Know Local`)

            const fetchedFeatureKeys = Object.keys(fetchedFeature);
            const questions = await getQuestionSet(fetchedFeature.type)
            const sortedQuestions = questions.map(question => {
                const questionId = question.qid.replace(/[a-z]/,'')
                if (fetchedFeatureKeys.includes(questionId)) {
                    return {id: questionId, question: question.desc, answer: fetchedFeature[questionId]}
                }
                return null
            }).sort((a,b) => a.id - b.id)
            setQuestions(sortedQuestions)
            setLoading(false)
        }
        getIssue();
    },[slug])

    if (isLoading) return <Spinner />

    document.title = title;

    return (
        <main className="container">
            <div className="issue__content">
                <div className='cover-area'>
                    <ArticleCover className='cover-component' selectedFeature={issue}/>
                </div>
                <div className="interview-area">
                    <ArticleInterview className='interview-component' questions={questions} />
                </div>
                <div className="contact-area">
                    <ArticleContact className='contact-component' selectedFeature={issue} />
                </div>
            </div>
            <div className="suggested-reading">
                <ArticleSuggestedReading suggestedIssues={suggestedIssues}/>
            </div>
        </main>
        )      
    }
    
export default IssuePage