import React, { useEffect, useState } from 'react';
import {getSiteContent, getAllFeatures } from '../../firebase/firebase.utils';
import HeaderGallery from '../../components/header-gallery/header-gallery.component';
import MosaicIssueGallery from '../../components/mosaic-issue-gallery/mosaic-issue-gallery.component';
import Spinner from '../../components/spinner/spinner.component'

// Renders the homepage

const Home = () => {
    const [headerContent, setHeaderContent] = useState({})
    const [issues, setIssues] = useState([])
    const [isLoading, setLoading] = useState(true)
    
    document.title = 'In The Know Local'

    useEffect(() => {
        const getHeaderInfo = async () => {
            const fetchedContent = await getSiteContent() // Fetch image data for header component
            const fetchedFeatures = await getAllFeatures(19); // Fetch feature issue
            setHeaderContent(fetchedContent)
            setIssues(fetchedFeatures)
            setLoading(false)
        }
        getHeaderInfo();
    },[])


    if (isLoading) return <Spinner />

    return (
        <main className="container">
            <HeaderGallery content={headerContent} />
            <MosaicIssueGallery issues={issues} />
        </main>
    )
}

export default Home;