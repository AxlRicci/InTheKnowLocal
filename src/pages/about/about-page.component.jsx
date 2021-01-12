import React, { useEffect, useState } from 'react'
import { firestore } from '../../firebase/firebase.utils'

import './about-page.styles.scss'


const AboutPage = (props) => {
    const [pageData, setPageData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {document.title = 'About | In The Know Local'})

    useEffect(()=> {
        const getPageData = async () => {
            const ref = firestore.doc('siteContent/site-content')
            ref.get()
                .then(doc => {
                    setPageData(doc.data())
                })
                .catch(err => {
                    console.log(err)
                })
            setLoading(false)
        }
        getPageData();
    })

    if (isLoading) return <p>Spinner...</p>

    return (
			<main className="container">
					<div className="about">
							<div className="about__title">
									<h1 className="about__title about__title--main-title">{pageData.aboutTitle}</h1>
									<h2 className="about__title about__title--subtitle">{pageData.aboutSubtitle}</h2>
							</div>
							<div className="about__media">
									<img src={pageData.aboutImage} alt={pageData.aboutImageAlt} className="about__media about__media--image"/>
							</div>
							<article className="about__description">
											{/* {pageData.aboutMain.split("<br>").map(line => <><p className="about__description about__content--text">{line}</p><br/></>)}             */}
											<p>{pageData.aboutMain}</p>
							</article>
					</div>
			</main>
			)
    }
    
    export default AboutPage