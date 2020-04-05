import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import SuggestedReading from './SuggestedReading'

import './IssuePage.scss'

const IssuePage = (props) => {
    // const { slug } = props.match.params

    // const features = useSelector((state) => {
    //     let data = state.firestore.data.features;
    //     return data ? Object.keys(data).map(key => data[key]) : null
    // });
    
    // const questions = useSelector((state) => {
    //     let data = state.firestore.data.questions;
    //     return data ? Object.keys(data).map(key => data[key]) : null
    // });

    // useEffect(()=> {
    //     selectedFeature ? document.title = `${selectedFeature.name} | In The Know Local` : document.title = '... | In The Know Local'
    // })
    
    
    // let answerList = [];
    // let featureInfo = [];
    // if (features && questions) {
    //     features.map(feature => {
    //         if (feature.slug === slug){
    //             featureInfo.push(feature)
    //             questions.map(question => {
    //                 if (feature.hasOwnProperty([question.qid]) && feature[question.qid]){
    //                     let answerObj = {
    //                         'key': question.qid,
    //                         'order': question.id,
    //                         'Q': question.desc,
    //                         'A': feature[question.qid]
    //                     }
    //                     answerList.push(answerObj);
    //                     return (
    //                         null
    //                     )
    //                 } else {
    //                     return null
    //                 }
    //             })
    //         } else {
    //             return null
    //         } return (
    //             null
    //         )
    //     })
    // }
    // let sortedAnswers = answerList.sort(function(a,b){
    //     return a.order - b.order
    // })
    // let selectedFeature = featureInfo[0];

    return (
        <div className="container">
            <div className="issue__content">
                <div className="issue__intro-content">
                    <div className="issue__cover">
                        <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2dd4bc5338e277d3c9973_lex%20generic-p-500.png" alt="" className="issue__cover-img"/>
                    </div>
                    <div className="issue__author-intro">
                        <h2 className="issue__author-intro issue__author-intro--title">
                            Lorem ipsum dolor sit amet.
                        </h2>
                        <p className="issue__author-intro issue__author-intro--text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloremque nihil soluta consectetur explicabo 
                            magnam sapiente aliquid minima quasi in!
                        </p>
                    </div>
                </div>
                <div className="issue__contact">
                    <h3 className="issue__contact-title">
                       Contact:
                    </h3>
                    <ul className="issue__contact-list">
                        <li className="issue__contact-list-item issue__contact-list-item--item1">
                            <a href="#" className="issue__contact-list-link issue contact-list-link--item1">Email</a>
                        </li>
                        <li className="issue__contact-list-item issue__contact-list-item--item2">
                            <a href="#" className="issue__contact-list-link issue contact-list-link--item2">twitter</a>
                        </li>
                        <li className="issue__contact-list-item issue__contact-list-item--item3">
                            <a href="#" className="issue__contact-list-link issue contact-list-link--item3">LinkedIn</a>
                        </li>
                        <li className="issue__contact-list-item issue__contact-list-item--item4">
                            <a href="#" className="issue__contact-list-link issue contact-list-link--item4">Website</a>
                        </li>
                    </ul>
                </div>
                <div className="issue__article">
                    <div className="issue__article-section">
                        <h3 className="issue__article-content issue__article-content--question">
                            Question 1. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ut.
                        </h3>
                        <p className="issue__article-content issue__article-content--answer">
                            Answer 1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, architecto cum
                            corrupti corporis magni totam delectus at aliquam neque aperiam ut numquam doloribus eos consequatur
                            recusandae mollitia dolorum suscipit reiciendis voluptatibus vitae quibusdam illo sint ea. Deleniti,
                            eaque molestiae! Alias, repudiandae mollitia ullam dolor molestiae voluptatum perspiciatis ex eos iusto!
                        </p>
                    </div>
                    <div className="issue__article-section">
                        <h3 className="issue__article-content issue__article-content--question">
                            Question 2. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ut.
                        </h3>
                        <p className="issue__article-content issue__article-content--answer">
                            Answer 2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, architecto cum
                            corrupti corporis magni totam delectus at aliquam neque aperiam ut numquam doloribus eos consequatur
                            recusandae mollitia dolorum suscipit reiciendis voluptatibus vitae quibusdam illo sint ea. Deleniti,
                            eaque molestiae! Alias, repudiandae mollitia ullam dolor molestiae voluptatum perspiciatis ex eos iusto!
                        </p>
                    </div>
                    <div className="issue__article-section">
                        <h3 className="issue__article-content issue__article-content--question">
                            Question 3. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ut.
                        </h3>
                        <p className="issue__article-content issue__article-content--answer">
                            Answer 3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, architecto cum
                            corrupti corporis magni totam delectus at aliquam neque aperiam ut numquam doloribus eos consequatur
                            recusandae mollitia dolorum suscipit reiciendis voluptatibus vitae quibusdam illo sint ea. Deleniti,
                            eaque molestiae! Alias, repudiandae mollitia ullam dolor molestiae voluptatum perspiciatis ex eos iusto!
                        </p>
                    </div>
                    <div className="issue__article-section">
                        <h3 className="issue__article-content issue__article-content--question">
                            Question 4. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ut.
                        </h3>
                        <p className="issue__article-content issue__article-content--answer">
                            Answer 4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, architecto cum
                            corrupti corporis magni totam delectus at aliquam neque aperiam ut numquam doloribus eos consequatur
                            recusandae mollitia dolorum suscipit reiciendis voluptatibus vitae quibusdam illo sint ea. Deleniti,
                            eaque molestiae! Alias, repudiandae mollitia ullam dolor molestiae voluptatum perspiciatis ex eos iusto!
                        </p>
                    </div>
                    <div className="issue__article-section">
                        <h3 className="issue__article-content issue__article-content--question">
                            Question 5. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ut.
                        </h3>
                        <p className="issue__article-content issue__article-content--answer">
                            Answer 5. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, architecto cum
                            corrupti corporis magni totam delectus at aliquam neque aperiam ut numquam doloribus eos consequatur
                            recusandae mollitia dolorum suscipit reiciendis voluptatibus vitae quibusdam illo sint ea. Deleniti,
                            eaque molestiae! Alias, repudiandae mollitia ullam dolor molestiae voluptatum perspiciatis ex eos iusto!
                        </p>
                    </div>
                </div>
            </div>
        </div>


        )      
    }
    
    export default IssuePage


    //    <div id='main' className='container' >
    //        <div className="row">
    //             <div className="col-md-6 py-5 d-flex justify-content-center">
    //                 <div>
    //                     <img className='img-fluid' src={selectedFeature ? selectedFeature.cover : null} alt={selectedFeature ? `${selectedFeature.name} In The Know Local magazine Cover` : null}/>
    //                     <div className="py-3 d-none d-md-block">
    //                         <h1 className="text-muted text-center font-weight-light">{selectedFeature ? selectedFeature.name : null}</h1>
    //                         <p>Email:</p>
    //                         <p>Twitter:</p>
    //                         <p>LinkedIn: </p>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="col-md-6 py-5 overflow-auto" style={{height: 100 + 'vh'}}>
    //                 {sortedAnswers.map(answer => {
    //                     return (
    //                         <div key={answer.key}>
    //                             <h4>{answer.Q}</h4>
    //                             <p>{answer.A}</p>
    //                         </div>
    //                     )
    //                 })}
    //             </div>
    //        </div>
    //             <div className="col-12 py-3 d-md-none text-center">
    //                 <h1 className="text-muted font-weight-light">{selectedFeature ? selectedFeature.name : null}</h1>
    //                 <p>Email:</p>
    //                 <p>Twitter:</p>
    //                 <p>LinkedIn: </p>
    //             </div>
    //        <div className="row">
    //            <div className="col-12">
    //                <SuggestedReading currentPage={slug}/>
    //            </div>
    //        </div>
    //    </div>