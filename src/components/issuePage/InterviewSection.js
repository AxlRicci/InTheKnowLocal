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
                    selectedQuestions.push(answerObj);
                }
            }
        })
    }

    let sortedQuestions = selectedQuestions.sort((a,b) => a.order - b.order);

    return (
        <article className="article__content">
            {sortedQuestions
            ? sortedQuestions.map((question, contentIndex) => {
                return (
                    <div className="article__q-a" key={question.key}>
                        <h3 className={`article__question article__question--question${contentIndex}`}>{question.question}</h3>
                        {question.answer.split('<br>').map((line, index) => <p key={index} className={`article__answer article__answer--answer${contentIndex}`}>{line}</p>)}
                    </div>
                )
            })
            : null}
        </article>
    )
}

export default InterviewSection
