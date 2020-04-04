import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// use prop toRender to pass in number of issues that will be rendered for the component. default is 6

const IssueHighlights = (props) => {
    // const features = useSelector((state) => state.firestore.data.features);
    // let featureArray = features ? Object.keys(features).map(key => features[key]) : null;

    return (
        <div className="container">
            <div className="issue-highlights">
                <div className="issue-highlights__item--featured">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ad0238f161fc8d0fb368058_Joette-p-500.jpeg" alt="" className="issue-highlights__img"/>
                </div>
                <div className="issue-highlights__item--regular">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2dd4bc5338e277d3c9973_lex%20generic-p-500.png" alt="" className="issue-highlights__img"/>
                </div>
                <div className="issue-highlights__item--regular">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2d9620fc37c7c1c5ccf83_manchester%20generic%20cover-p-500.png" alt="" className="issue-highlights__img"/>
                </div>
                <div className="issue-highlights__item--regular">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5a27052b01decd0001ebc417_jax-cover-2-p-500.jpeg" alt="" className="issue-highlights__img"/>
                </div>
                <div className="issue-highlights__item--regular">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2dbc00fc37c71d15ccfaf_san%20diego-p-500.png" alt="" className="issue-highlights__img"/>
                </div>
                <div className="issue-highlights__item--regular">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2dc4c6c42a72e5b6d13fc_toledo%20k-p-500.png" alt="" className="issue-highlights__img"/>
                </div>
                <div className="issue-highlights__item--regular">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2dd8a0fc37c5bac5ccfc9_pittts%20k-p-500.png" alt="" className="issue-highlights__img"/>
                </div>
                <div className="issue-highlights__item--regular">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5a27058501decd0001ebc423_orl-cover-2-p-500.jpeg" alt="" className="issue-highlights__img"/>
                </div>
                <div className="issue-highlights__item--regular">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5a270569acd6c40001ffe8e7_buff-cover-re-size-p-500.jpeg" alt="" className="issue-highlights__img"/>
                </div>
            </div>
        </div>
    )

    // return (
    //     <div className="container">
    //         <h1>Latest issues:</h1>
    //         <div className='issue-highlights'>
    //             {featureArray
    //             ?featureArray.map((feature, index) => {
    //                 if (index >= (props.toRender ? props.toRender : 6) ){
    //                     return null
    //                 } else {
    //                     return (
    //                         <div className="issue-highlights__item" style={{width: 18 +'rem'}} key={feature.id}>
    //                             <Link to={`/features/${feature.slug}`}>
    //                                 <img src={feature.cover} className="issue-highlights__image" alt={`${feature.name}'s In The Know Local Magazine Cover`}/>
    //                             </Link>
    //                         </div>
    //                     )
    //                 }
    //                     })
    //                     : null
    //                 }
    //         </div>
    //     </div>
    // )
}

export default IssueHighlights

//TODO: 
// 1. Define feature issue in DB
// 2. Define feature issue in CSS
// 3. Seperate feature issue within CSS