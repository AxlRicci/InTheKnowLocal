import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SuggestedReading from './SuggestedReading'

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

    return (
       <div id='main' className='container' >
           <div className="row">
                <div className="col-md-6 py-5 d-flex justify-content-center">
                    <div>
                        <img className='img-fluid' src={selectedFeature ? selectedFeature.cover : null} alt={selectedFeature ? `${selectedFeature.name} In The Know Local magazine Cover` : null}/>
                        <div className="py-3 d-none d-md-block">
                            <h1 className="text-muted text-center font-weight-light">{selectedFeature ? selectedFeature.name : null}</h1>
                            <p>Email:</p>
                            <p>Twitter:</p>
                            <p>LinkedIn: </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 py-5 overflow-auto" style={{height: 100 + 'vh'}}>
                    {sortedAnswers.map(answer => {
                        return (
                            <div key={answer.key}>
                                <h4>{answer.Q}</h4>
                                <p>{answer.A}</p>
                            </div>
                        )
                    })}
                </div>
           </div>
                <div className="col-12 py-3 d-md-none text-center">
                    <h1 className="text-muted font-weight-light">{selectedFeature ? selectedFeature.name : null}</h1>
                    <p>Email:</p>
                    <p>Twitter:</p>
                    <p>LinkedIn: </p>
                </div>
           <div className="row">
               <div className="col-12">
                   <SuggestedReading currentPage={slug}/>
               </div>
           </div>
       </div>
    )      
}

export default IssuePage