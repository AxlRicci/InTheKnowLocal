import React from 'react'
import { useSelector } from 'react-redux';

import './AboutPage.scss'


const AboutPage = (props) => {

    // const siteContent = useSelector((state) => {
    //     let data = state.firestore.data.siteContent;
    //     return data ? Object.keys(data).map(key => data[key]) : null
    // });

    return (
        <div className="container">
            <div className="about">
                <div className="about__title">
                    <h1 className="about__title about__title--main-title">What is</h1>
                    <h2 className="about__title about__title--subtitle">In The Know local</h2>
                </div>
                <div className="about__media">
                    <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80" alt="" className="about__media about__media--image"/>
                </div>
                <div className="about__description">
                    <p className="about__description about__content--text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero neque laudantium laborum deserunt, minus, dignissimos suscipit, natus officiis ad praesentium a voluptatum?
                        Minima pariatur quaerat nisi ut aperiam doloremque delectus id, ex qui voluptatibus harum provident at rem iusto eveniet necessitatibus tempore nam natus quam. Iste ea tempore
                        itaque sit nam delectus eos sed ut cupiditate porro eum earum, ratione architecto accusantium obcaecati harum atque numquam facilis dicta aliquam reiciendis. Eius voluptatem 
                        error cupiditate a accusamus dolor porro pariatur nihil dolorem quia? Ipsam quod facilis aspernatur, earum autem ipsum. Animi debitis nesciunt iste! Nostrum, aspernatur! 
                        Porro, nostrum sapiente! Labore, possimus!
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