import React from 'react'
import { useSelector } from 'react-redux'

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
        <article className="issue__article">
            {sortedQuestions
            ? sortedQuestions.map(question => {
                return (
                    <div className="issue__article-section" key={question.key}>
                        <h3 className="issue__article-content issue__article-content--question">{question.question}</h3>
                        <p className="issue__article-content issue__article-content--answer">{question.answer}</p>
                    </div>
                )
            })
            : null}
        </article>
    )
}

export default InterviewSection
