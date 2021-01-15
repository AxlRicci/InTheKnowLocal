import React, { useEffect, useState } from 'react'
import { getSiteContent } from '../../firebase/firebase.utils'

import Spinner from '../../components/spinner/spinner.component'

import './about-page.styles.scss'


const AboutPage = () => {
    const [pageData, setPageData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {document.title = 'About | In The Know Local'})

    useEffect(()=> {
        const getPageData = async () => {
            const fetchedContent = await getSiteContent()
            setPageData(fetchedContent)
            setLoading(false)
        }
        getPageData();
    },[])

    if (isLoading) return <Spinner />

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
											<p>{pageData.aboutMain}</p>
							</article>
					</div>
			</main>
			)
    }
    
    export default AboutPage