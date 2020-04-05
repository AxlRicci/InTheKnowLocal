import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import './IssueList.scss'

//TODO: Add ability to order by Date.

const IssueList = (props) => {
    // const features = useSelector((state) => {
    //     let data = state.firestore.data.features;
    //     return data ? Object.keys(data).map(key => data[key]) : null
    // });

    useEffect(()=> { document.title = 'Issues | In The Know Local'})

    return (
        <div className="container">
            <div className="issue__grid">
                <div className="issue__grid-item">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ad0238f161fc8d0fb368058_Joette-p-500.jpeg" alt="" className="issue__img"/>
                </div>
                <div className="issue__grid-item">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2dd4bc5338e277d3c9973_lex%20generic-p-500.png" alt="" className="issue__img"/>
                </div>
                <div className="issue__grid-item">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2d9620fc37c7c1c5ccf83_manchester%20generic%20cover-p-500.png" alt="" className="issue__img"/>
                </div>
                <div className="issue__grid-item">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5a27052b01decd0001ebc417_jax-cover-2-p-500.jpeg" alt="" className="issue__img"/>
                </div>
                <div className="issue__grid-item">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2dbc00fc37c71d15ccfaf_san%20diego-p-500.png" alt="" className="issue__img"/>
                </div>
                <div className="issue__grid-item">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2dc4c6c42a72e5b6d13fc_toledo%20k-p-500.png" alt="" className="issue__img"/>
                </div>
                <div className="issue__grid-item">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ab2dd8a0fc37c5bac5ccfc9_pittts%20k-p-500.png" alt="" className="issue__img"/>
                </div>
                <div className="issue__grid-item">
                    <img src="https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5a27058501decd0001ebc423_orl-cover-2-p-500.jpeg" alt="" className="issue__img"/>
                </div>
            </div>
        </div>
        )
    }
    
    export default IssueList
    
    // <div className="container px-5 py-5">
    //     <h1>Issues</h1>
    //     <div className='row'>
    //         {features
    //         ?features.map((feature) => {
    //             if (feature.cover){
    //                 return (
    //                     <div className="mx-auto my-4" style={{width: 18 +'rem'}} key={feature.id}>
    //                         <Link to={`/features/${feature.slug}`}>
    //                             <img src={feature.cover} className="img-fluid" alt={`${feature.name}'s In The Know Local Magazine Cover`}/>
    //                         </Link>
    //                     </div>
    //                 )
    //             } else {
    //                 return null
    //             }
    //                 })
    //                 : null
    //             }
    //     </div>
    // </div>

    // https://uploads-ssl.webflow.com/5a0b4d2cff28590001531b25/5ad0238f161fc8d0fb368058_Joette-p-500.jpeg