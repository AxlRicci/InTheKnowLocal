import React, { useEffect, useState } from 'react'
import { getFeature, formatQuestions, getSuggestedIssues } from '../../firebase/firebase.utils';

import ArticleContact from '../../components/article-contact/article-contact.component'
import ArticleCover from '../../components/article-cover/article-cover.component'
import ArticleInterview from '../../components/article-interview/article-interview.component'
import ArticleSuggestedReading from '../../components/article-suggested-reading/article-suggested-reading.component'
import Spinner from '../../components/spinner/spinner.component'

import './issue-page.styles.scss'

// Renders the issue page.
// Fetches the feature and questions associated with the slug.
// Formats the questions into required format.

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
            const formattedQuestions = await formatQuestions(fetchedFeature)
            setIssue(fetchedFeature)
            setSuggestedIssues(fetchedSuggestedIssues)
            setQuestions(formattedQuestions)
            setTitle(`${fetchedFeature.name} | In The Know Local`)
            setLoading(false)
        }
        getIssue();
    },[slug])

    if (isLoading) return <Spinner />

    document.title = title;

    return (
        <main className="container">
            <section className="issue__content">
                <div className='issue__cover'>
                    <ArticleCover type="standard" selectedFeature={issue}/>
                </div>
                <div className="issue__interview">
                    <ArticleInterview questions={questions} />
                </div>
                <div className="issue__contact">
                    <ArticleContact selectedFeature={issue} />
                </div>
            </section>
            <div className="suggested-reading">
                <ArticleSuggestedReading suggestedIssues={suggestedIssues}/>
            </div>
        </main>
    )      
}
    
export default IssuePage