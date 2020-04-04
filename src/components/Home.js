import React, { useEffect } from 'react';
import HomeGallery from './HomeGallery'
import IssueHighlights from './IssueHighlights'


const Home = () => {
    useEffect(() => {document.title = 'In The Know Local'})
        return (
            <div>
                <HomeGallery/>
                <IssueHighlights toRender={6} />
            </div>
        )
    }

export default Home;