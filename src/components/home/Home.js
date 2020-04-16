import React, { useEffect } from 'react';
import HeaderGallery from './HeaderGallery'
import IssueHighlights from './IssueHighlights'


import './HeaderGallery.scss'
import './IssueHighlights.scss'


const Home = () => {
    useEffect(() => {document.title = 'In The Know Local'})
        return (
            <main>
                <HeaderGallery/>
                <IssueHighlights />
            </main>
        )
    }

export default Home;