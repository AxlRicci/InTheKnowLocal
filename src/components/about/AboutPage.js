import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

import './AboutPage.scss'


const AboutPage = (props) => {

    useEffect(() => {document.title = 'About | In The Know Local'})

    const data = useSelector((state) => {
        let data = state.firestore.data.siteContent;
        return data ? Object.keys(data).map(key => data[key]) : null
    });

    const siteContent = data ? data[0] : null;

    return (
        <div className="container">
            <div className="about">
                <div className="about__title">
                    <h1 className="about__title about__title--main-title">What is</h1>
                    <h2 className="about__title about__title--subtitle">In The Know local</h2>
                </div>
                <div className="about__media">
                    <img src={siteContent ? siteContent.aboutImage : null} alt="" className="about__media about__media--image"/>
                </div>
                <div className="about__description">
                    <p className="about__description about__content--text">
                        {siteContent ? siteContent.aboutMain : null}
                    </p>
                </div>
            </div>
        </div>
        )
    }
    
    export default AboutPage


    // <div className="container">
    //     <div className="row">
    //         <div className="col-12 text-center">
    //             <h1 className='font-weight-light'>what is</h1>
    //             <h1 className='mb-0'>In The Know Local</h1>
    //         </div>
    //     </div>
    //     <div className="row my-5">
    //         <div className="col-12 d-flex justify-content-center">
    //             <div className='row'>
    //                 <img className='img-fluid mx-auto' style={{maxHeight: 500 + 'px'}} src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt=""/>
    //             </div>
    //         </div>
    //     </div>
    //     <div className="row my-5">
    //         <div className="col-12">
    //             <p>{siteContent ? siteContent[0].aboutMain : null}</p>
    //         </div>
    //     </div>
    // </div>