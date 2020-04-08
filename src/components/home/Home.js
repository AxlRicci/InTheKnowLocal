import React, { useEffect } from 'react';
import HeaderGallery from './HeaderGallery'
import IssueHighlights from './IssueHighlights'

import './home.scss'
import './HeaderGallery.scss'
import './IssueHighlights.scss'


const Home = () => {
    useEffect(() => {document.title = 'In The Know Local'})
        return (
            <main>
                <HeaderGallery/>
                <IssueHighlights toRender={9} />
            </main>
        )
    }

export default Home;