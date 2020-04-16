import React from 'react'
import { useSelector } from 'react-redux'

import './interviewSection.scss'

const InterviewSection = (props) => {
    const { selectedFeature, articleType } = props;

    const questions = useSelector((state) => {
        let data = state.firestore.data.questions;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    const selectedQuestions = [];
    // query feature for article type (series of questions to be used) and which have been answered.
    if (selectedFeature && questions) {
        questions.forEach(question => {
            if (question.type === articleType) {
                let questionId = question.qid.replace(/[a-z]/,'');
                if (selectedFeature.hasOwnProperty(questionId) && selectedFeature[questionId]) {
                    let answerObj = {
                        'key': question.qid,
                        'order': question.slug,
                        'question': question.desc,
                        'answer': selectedFeature[questionId]
                    }
                    selectedQuestions.push(answerObj); // push question and answer in proper format that have been completed into selectedQuestions variable.
                }
            }
        })
    }

    let sortedQuestions = selectedQuestions.sort((a,b) => a.order - b.order); // sort the questions into correct order for article.

    // Content to be rendered if/when data from props and redux/firebase available.
    let renderContent = null;

    if (selectedQuestions) {
        renderContent = (
            <article className="article__content">
                {sortedQuestions.map((question, contentIndex) => {
                    return (
                        <div className="article__q-a" key={question.key}>
                            <h3 className={`article__question article__question--question${contentIndex}`}>{question.question}</h3>
                            {question.answer.split('<br>').map((line, index) => <p key={index} className={`article__answer article__answer--answer${contentIndex}`}>{line}</p>)} 
                        </div>
                    )
                })}
            </article>
        )
    }

    return (
        <>
        {renderContent ? renderContent : <p>Loading...</p>}
        </>
    )
}

export default InterviewSection
