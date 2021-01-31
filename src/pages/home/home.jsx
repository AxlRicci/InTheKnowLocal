import React, { useEffect, useState } from 'react';
import {getSiteContent, getPlaceholders, getAllFeatures } from '../../firebase/firebase.utils';
import HeaderGallery from '../../components/header-gallery/header-gallery.component';
import MosaicIssueGallery from '../../components/mosaic-issue-gallery/mosaic-issue-gallery.component';
import Spinner from '../../components/spinner/spinner.component'


const Home = () => {
    const [headerContent, setHeaderContent] = useState({})
    const [issues, setIssues] = useState([])
    const [placeholders, setPlaceholders] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    document.title = 'In The Know Local'

    useEffect(() => {
        const getHeaderInfo = async () => {
            const fetchedContent = await getSiteContent()
            setHeaderContent(fetchedContent)
            const fetchedFeatures = await getAllFeatures();
            const fetchedPlaceholders = await getPlaceholders();
            setIssues(fetchedFeatures)
            setPlaceholders(fetchedPlaceholders)
            setLoading(false)
        }
        getHeaderInfo();
    },[])


    if (isLoading) return <Spinner />

    return (
        <main className="container">
            <HeaderGallery content={headerContent} />
            <MosaicIssueGallery issues={issues} placeholders={placeholders} />
        </main>
    )
}

export default Home;