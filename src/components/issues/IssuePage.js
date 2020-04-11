import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SuggestedReading from './SuggestedReading'

import './IssuePage.scss'


//TODO: hook up the contact info pages... Fool around with title spacing on bio and questions.

const IssuePage = (props) => {
    const { slug } = props.match.params

    const features = useSelector((state) => {
        let data = state.firestore.data.features;
        return data ? Object.keys(data).map(key => data[key]) : null
    });
    
    const questions = useSelector((state) => {
        let data = state.firestore.data.questions;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    useEffect(()=> {
        selectedFeature ? document.title = `${selectedFeature.name} | In The Know Local` : document.title = '... | In The Know Local'
    })
    
    
    let answerList = [];
    let featureInfo = [];
    if (features && questions) {
        features.map(feature => {
            if (feature.slug === slug){
                featureInfo.push(feature)
                questions.map(question => {
                    if (feature.hasOwnProperty([question.qid]) && feature[question.qid]){
                        let answerObj = {
                            'key': question.qid,
                            'order': question.id,
                            'Q': question.desc,
                            'A': feature[question.qid]
                        }
                        answerList.push(answerObj);
                        return (
                            null
                        )
                    } else {
                        return null
                    }
                })
            } else {
                return null
            } return (
                null
            )
        })
    }
    let sortedAnswers = answerList.sort(function(a,b){
        return a.order - b.order
    })
    let selectedFeature = featureInfo[0];

    let contactTypes = ['twitter', 'instagram', 'linkedin', 'facebook', 'youtube', 'website'];
    let contactInfo = [];

    if (selectedFeature) {
        contactTypes.forEach(type => {
        if (selectedFeature.hasOwnProperty(type)) {
            let contactObj = {
                'type': type,
                'address': selectedFeature[type]
            }
            contactInfo.push(contactObj)
        }
    });
    }

    return (
        <main className="container">
            <div className="issue__content">
                <div className="issue__intro-content">
                    <div className="issue__cover">
                        <img src={selectedFeature ? selectedFeature.cover : null } alt={selectedFeature ? `${selectedFeature.name}'s In The Know Local Cover for ${selectedFeature.city}` : null} className="issue__cover-img"/>
                    </div>
                    <div className="issue__author-intro">
                        <h2 className="issue__author-intro issue__author-intro--title">
                            {selectedFeature ? selectedFeature.name : null}
                        </h2>
                        <p className="issue__author-intro issue__author-intro--text">
                            {selectedFeature ? selectedFeature.bio : null}
                        </p>
                    </div>
                </div>
                <div className="issue__contact">
                    <h3 className="issue__contact-title">
                       Connect with {selectedFeature ? selectedFeature.name.split(' ')[0] : null}:
                    </h3>
                    <ul className="issue__contact-list">
                        { contactInfo ? contactInfo.map(value => {
                            return (
                                <li className={`issue__contact-list-item issue__contact-list-item--${value.type}`} key={value.address}>
                                    <a href={value.address} className="issue__contact-list-link issue contact-list-link--item1" rel="noopener noreferrer" target="_blank">{value.type}</a>
                                </li>
                            )
                        }) : null
                        }
                    </ul>
                </div>
                <article className="issue__article">
                    {sortedAnswers.map(answer => {
                        return (
                            <div className="issue__article-section" key={answer.key}>
                                <h3 className="issue__article-content issue__article-content--question">{answer.Q}</h3>
                                <p className="issue__article-content issue__article-content--answer">{answer.A}</p>
                            </div>
                        )
                    })}
                </article>
            </div>
            <div className="suggested-reading">
                <SuggestedReading currentPage={slug}/>
            </div>
        </main>


        )      
    }
    
export default IssuePage