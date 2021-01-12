import React, { useEffect, useState } from 'react'
import { getFeature } from '../../firebase/firebase.utils';
import ArticleSuggestedReading from '../../components/article-suggested-reading/article-suggested-reading.component'
import ArticleCover from '../../components/article-cover/article-cover.component'
import ArticleInterview from '../../components/article-interview/article-interview.component'
import ArticleContact from '../../components/article-contact/article-contact.component'

import './issue-page.styles.scss'

const IssuePage = ({match: {params: {slug}}}) => {
    const [issue, setIssue] = useState({})
    const [title, setTitle] = useState('... | In The Know Local')
    const [isLoading, setLoading] = useState(true)

    useEffect(()=> {
        const getIssue = async () => {
            const fetchedFeature = await getFeature(slug)
            setIssue(fetchedFeature)
            setTitle(`${fetchedFeature.name} | In The Know Local`)
            setLoading(false)
        }
        getIssue();
    },[slug])

    if (isLoading) return <p>Spinner...</p>

    document.title = title;

    return (
        <main className="container">
            <div className="issue__content">
                <div className='cover-area'>
                    <ArticleCover className='cover-component' selectedFeature={issue}/>
                </div>
                <div className="interview-area">
                    <ArticleInterview className='interview-component' selectedFeature={issue} articleType={issue.type} />
                </div>
                <div className="contact-area">
                    <ArticleContact className='contact-component' selectedFeature={issue} />
                </div>
            </div>
            <div className="suggested-reading">
                <ArticleSuggestedReading currentPage={slug}/>
            </div>
        </main>
        )      
    }
    
export default IssuePage